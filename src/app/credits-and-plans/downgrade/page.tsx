"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getUserDataOverview } from "@/store/slices/admin/adminSlice";
import {
  deleteDocLinks,
  getChatbotsFaqs,
  deleteChatbotsFaqs,
  deleteChatbotsAllFaqs,
  updateChatbotWithoutRouter,
} from "@/store/slices/chats/chatSlice";
import ConfirmModal from "@/components/Common/ConfirmModal";
import {
  computeUsageTotals,
  isWithinPlanLimits,
  computeNeededRemovals,
} from "@/lib/planUtils";
import { revokeAccess } from "@/store/slices/invitations/invitationSlice";
import { getPublicSubscriptionPlans } from "@/store/slices/admin/adminSlice";
import http from "@/services/http/baseUrl";
import toast from "react-hot-toast";
import { RootState } from "@/store/store";
import { useSearchParams, useRouter } from "next/navigation";

const DowngradePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
  // small UI-only spinner state (keeps whole-page overlay behavior centralized)
  const [overview, setOverview] = useState<any>(null);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const publicPlans = useSelector(
    (state: RootState) => state.admin.publicSubscriptionPlansData
  );
  const searchParams = useSearchParams();

  // selections
  const [selectedBots, setSelectedBots] = useState<number[]>([]);
  const [selectedDocsByBot, setSelectedDocsByBot] = useState<
    Record<number, number[]>
  >({});
  const [selectedTeamShares, setSelectedTeamShares] = useState<number[]>([]);
  const [step, setStep] = useState<number>(1);
  const [confirmState, setConfirmState] = useState<any>({ open: false });
  const [faqModal, setFaqModal] = useState<any>({
    open: false,
    botId: null,
    faqs: [],
  });
  const [textModal, setTextModal] = useState<any>({
    open: false,
    botId: null,
    text: "",
    loading: false,
  });
  const [isInPlanLimits, setIsInPlanLimits] = useState<boolean | null>(null);
  const [openBotId, setOpenBotId] = useState<string | null>(null);

  const fetchOverview = async () => {
    setLoading(true);
    try {
      const res = await dispatch(getUserDataOverview()).unwrap();
      setOverview(res);
      return res;
    } catch (err) {
      console.error("Failed to fetch overview", err);
      toast.error("Failed to load data overview");
    } finally {
      setLoading(false);
    }
    return null;
  };

  const router = useRouter();

  // small spinner element used in multiple buttons / overlays
  const Spinner = ({
    className = "w-4 h-4 text-white",
  }: {
    className?: string;
  }) => (
    <svg
      className={className}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="currentColor"
        strokeWidth="5"
        strokeOpacity="0.25"
      />
      <path
        d="M45 25a20 20 0 00-6.1-14.1"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );

  // use shared helper for plan checks (computeUsageTotals, isWithinPlanLimits)

  useEffect(() => {
    fetchOverview();
    // ensure public plans are available
    dispatch(getPublicSubscriptionPlans());
  }, []);

  // When we decide we're within plan limits, auto-continue to the gateways page after a small delay
  useEffect(() => {
    if (isInPlanLimits && selectedPlan?.id) {
      toast.success("Within selected plan limits — continuing to payment...");
      const t = setTimeout(() => {
        // router.push(`/gateways/${selectedPlan.id}`);
        setIsInPlanLimits(true);
      }, 700);
      return () => clearTimeout(t);
    }
  }, [isInPlanLimits, selectedPlan, router]);

  useEffect(() => {
    const planParam = searchParams?.get?.("plan");
    const planId = planParam ? parseInt(planParam, 10) : null;
    if (planId && publicPlans && Array.isArray(publicPlans)) {
      const found = publicPlans.find(
        (p: any) => parseInt(String(p.id), 10) === planId
      );
      if (found) setSelectedPlan(found);
    }
    // if plans not yet loaded, try to fetch and then set in next effect
  }, [searchParams, publicPlans]);

  const toggleBot = (botId: number) => {
    setSelectedBots((prev) =>
      prev.includes(botId) ? prev.filter((b) => b !== botId) : [...prev, botId]
    );
  };

  const toggleDoc = (botId: number, docId: number) => {
    setSelectedDocsByBot((prev) => {
      const existing = prev[botId] || [];
      const next = existing.includes(docId)
        ? existing.filter((d) => d !== docId)
        : [...existing, docId];
      return { ...prev, [botId]: next };
    });
  };

  const toggleTeamShare = (sharingId: number) => {
    setSelectedTeamShares((prev) =>
      prev.includes(sharingId)
        ? prev.filter((s) => s !== sharingId)
        : [...prev, sharingId]
    );
  };

  const nextStep = () => setStep((s) => Math.min(3, s + 1));
  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const handleDeleteSelectedLinks = async () => {
    // group by botId and call deleteDocLinks thunk for each
    const groups = Object.entries(selectedDocsByBot).filter(
      ([, arr]) => (arr as number[]).length > 0
    );
    if (groups.length === 0) {
      toast("No links selected");
      return;
    }

    const doDelete = async () => {
      try {
        setLoading(true);
        await Promise.all(
          groups.map(async ([botIdStr, docIds]) => {
            const botId = parseInt(botIdStr, 10);
            // use thunk to keep behaviour consistent
            await dispatch(
              deleteDocLinks({ bot_id: botId, doc_ids: docIds as number[] })
            ).unwrap();
          })
        );
        toast.success("Selected links deleted");
        setSelectedDocsByBot({});
        const updated = await fetchOverview();
        if (
          selectedPlan &&
          updated &&
          isWithinPlanLimits(updated, selectedPlan)
        ) {
          toast.success(
            "You're within the selected plan limits — continuing to payment"
          );
          setIsInPlanLimits(true);
          // router.push(`/gateways/${selectedPlan.id}`);
        }
      } catch (err: any) {
        console.error(err);
        toast.error(err?.message || "Failed to delete links");
      } finally {
        setLoading(false);
        setConfirmState({ open: false });
      }
    };

    setConfirmState({
      open: true,
      title: "Delete selected links",
      content: "Delete selected links? This action is irreversible.",
      onConfirm: doDelete,
      confirmLabel: "Delete",
    });
  };

  const handleRevokeSelectedTeam = async () => {
    if (selectedTeamShares.length === 0) {
      toast("No team members selected");
      return;
    }

    const doRevoke = async () => {
      try {
        setLoading(true);
        await Promise.all(
          selectedTeamShares.map((sharingId) =>
            dispatch(revokeAccess(sharingId)).unwrap()
          )
        );
        toast.success("Selected team shares revoked");
        setSelectedTeamShares([]);
        const updated = await fetchOverview();
        if (
          selectedPlan &&
          updated &&
          isWithinPlanLimits(updated, selectedPlan)
        ) {
          toast.success(
            "You're within the selected plan limits — continuing to payment"
          );
          // router.push(`/gateways/${selectedPlan.id}`);
          setIsInPlanLimits(true);
        }
      } catch (err: any) {
        console.error(err);
        toast.error(err?.message || "Failed to revoke access");
      } finally {
        setLoading(false);
        setConfirmState({ open: false });
      }
    };

    setConfirmState({
      open: true,
      title: "Revoke access",
      content: "Revoke access for selected team members?",
      onConfirm: doRevoke,
      confirmLabel: "Revoke",
    });
  };

  const handleDeleteSelectedBots = async () => {
    if (selectedBots.length === 0) {
      toast("No bots selected");
      return;
    }

    const doDeleteBots = async () => {
      try {
        setLoading(true);
        // call API directly to avoid thunk redirect
        await Promise.all(
          selectedBots.map((botId) =>
            http.delete(`/chatbot/delete-bot/${botId}`)
          )
        );
        toast.success("Selected chatbots deleted");
        setSelectedBots([]);
        // refresh overview
        const updated = await fetchOverview();
        if (
          selectedPlan &&
          updated &&
          isWithinPlanLimits(updated, selectedPlan)
        ) {
          toast.success(
            "You're within the selected plan limits — continuing to payment"
          );
          // router.push(`/gateways/${selectedPlan.id}`);
          setIsInPlanLimits(true);
        }
      } catch (err: any) {
        console.error(err);
        toast.error(
          err?.response?.data?.detail || err?.message || "Failed to delete bots"
        );
      } finally {
        setLoading(false);
        setConfirmState({ open: false });
      }
    };

    setConfirmState({
      open: true,
      title: "Delete selected chatbots",
      content:
        "Delete selected chatbots and all their data? This cannot be undone.",
      onConfirm: doDeleteBots,
      confirmLabel: "Delete",
    });
  };

  const autoTrimToPlan = async () => {
    if (!selectedPlan) {
      toast.error("No target plan selected");
      return;
    }
    if (!overview) {
      toast.error("Overview not loaded");
      return;
    }

    const planChars =
      selectedPlan.chars_allowed ?? selectedPlan.allowed_total_chars ?? null;
    if (!planChars) {
      toast.error("Selected plan has no chars limit to trim to");
      return;
    }

    const owned = Array.isArray(overview.owned_bots) ? overview.owned_bots : [];
    const totalChars =
      owned.reduce((s: number, b: any) => s + (b?.total_chars ?? 0), 0) ||
      (overview.total_chars ?? 0);
    const need = totalChars - planChars;
    if (need <= 0) {
      toast.success("Already within chars limit");
      const updated = await fetchOverview();
      if (
        selectedPlan &&
        updated &&
        isWithinPlanLimits(updated, selectedPlan)
      ) {
        // router.push(`/gateways/${selectedPlan.id}`);
        setIsInPlanLimits(true);
      }
      return;
    }

    // collect all doc links across bots and sort by chars desc to remove fewer links
    const allLinks: { botId: number; docId: number; chars: number }[] = [];
    owned.forEach((bot: any) => {
      (bot.doc_links || []).forEach((doc: any) => {
        allLinks.push({ botId: bot.id, docId: doc.id, chars: doc.chars ?? 0 });
      });
    });
    if (allLinks.length === 0) {
      toast.error("No links/docs available to delete for trimming chars.");
      return;
    }

    allLinks.sort((a, b) => b.chars - a.chars);
    const toDeleteByBot: Record<number, number[]> = {};
    let acc = 0;
    for (const item of allLinks) {
      if (acc >= need) break;
      toDeleteByBot[item.botId] = toDeleteByBot[item.botId] || [];
      toDeleteByBot[item.botId].push(item.docId);
      acc += item.chars;
    }

    const count = Object.values(toDeleteByBot).flat().length;
    if (count === 0) {
      toast.error("Could not determine links to delete to meet char limit");
      return;
    }

    const previewContent = (
      <div>
        <div className="text-sm mb-2">
          This will auto-delete <strong>{count}</strong> links across bots to
          free ~{acc.toLocaleString()} chars:
        </div>
        <ul className="text-sm list-disc ml-5 max-h-36 overflow-auto">
          {Object.entries(toDeleteByBot).map(([botIdStr, ids]) => (
            <li key={botIdStr}>
              Bot {botIdStr}: {ids.length} link(s)
            </li>
          ))}
        </ul>
      </div>
    );

    const doAuto = async () => {
      try {
        setLoading(true);
        await Promise.all(
          Object.entries(toDeleteByBot).map(async ([botIdStr, ids]) => {
            const botId = parseInt(botIdStr, 10);
            await dispatch(
              deleteDocLinks({ bot_id: botId, doc_ids: ids as number[] })
            ).unwrap();
          })
        );
        toast.success(
          `Auto-trim deleted ${count} links (~${acc.toLocaleString()} chars)`
        );
        const updated = await fetchOverview();
        if (
          selectedPlan &&
          updated &&
          isWithinPlanLimits(updated, selectedPlan)
        ) {
          toast.success(
            "You're within the selected plan limits — continuing to payment"
          );
          // router.push(`/gateways/${selectedPlan.id}`);
          setIsInPlanLimits(true);
        }
      } catch (err: any) {
        console.error(err);
        toast.error(err?.message || "Auto-trim failed");
      } finally {
        setLoading(false);
        setConfirmState({ open: false });
      }
    };

    setConfirmState({
      open: true,
      title: `Auto-trim ${count} links`,
      content: previewContent,
      onConfirm: doAuto,
      confirmLabel: "Auto-delete",
    });
  };

  // Confirm modal helpers
  const openConfirm = (opts: any) => setConfirmState({ open: true, ...opts });

  // FAQ modal helpers
  const openFaqModal = async (bot: any) => {
    setFaqModal({ open: true, botId: bot.id, loading: true, faqs: [] });
    try {
      const res = await dispatch(getChatbotsFaqs({ bot_id: bot.id })).unwrap();
      // thunk returns response.data (or array) — normalize
      const faqs = res?.data ?? res ?? [];
      setFaqModal({ open: true, botId: bot.id, loading: false, faqs });
    } catch (err) {
      console.error(err);
      toast.error("Failed to load FAQs");
      setFaqModal({ open: false, botId: null, loading: false, faqs: [] });
    }
  };

  const closeFaqModal = () =>
    setFaqModal({ open: false, botId: null, faqs: [] });

  const handleDeleteFaq = (botId: number, faqId: number) => {
    const doDelete = async () => {
      try {
        setLoading(true);
        await dispatch(
          deleteChatbotsFaqs({ bot_id: botId, faq_id: faqId })
        ).unwrap();
        // refresh faqs list
        const res = await dispatch(getChatbotsFaqs({ bot_id: botId })).unwrap();
        const faqs = res?.data ?? res ?? [];
        setFaqModal({ open: true, botId, loading: false, faqs });
      } catch (err: any) {
        console.error(err);
        toast.error(err?.message || "Failed to delete faq");
      } finally {
        setLoading(false);
        setConfirmState({ open: false });
      }
    };
    setConfirmState({
      open: true,
      title: "Delete FAQ",
      content: "Delete this FAQ?",
      onConfirm: doDelete,
      confirmLabel: "Delete",
    });
  };

  const handleDeleteAllFaqsForBot = (botId: number) => {
    const doDeleteAll = async () => {
      try {
        setLoading(true);
        await dispatch(deleteChatbotsAllFaqs({ bot_id: botId })).unwrap();
        // refresh overview and close modal
        await fetchOverview();
        setFaqModal({ open: false, botId: null, faqs: [] });
        toast.success("Deleted all FAQs for bot");
      } catch (err: any) {
        console.error(err);
        toast.error(err?.message || "Failed to delete all faqs");
      } finally {
        setLoading(false);
        setConfirmState({ open: false });
      }
    };
    setConfirmState({
      open: true,
      title: "Delete all FAQs",
      content: "Delete all FAQs for this bot? This cannot be undone.",
      onConfirm: doDeleteAll,
      confirmLabel: "Delete all",
    });
  };

  const openTextModal = async (bot: any) => {
    // try to use bot's text content if present, otherwise fetch single bot? Rely on overview
    const currentText = bot?.text_content ?? bot?.text ?? "";
    setTextModal({
      open: true,
      botId: bot.id,
      text: currentText,
      loading: false,
    });
  };

  const closeTextModal = () =>
    setTextModal({ open: false, botId: null, text: "", loading: false });

  const handleSaveText = async () => {
    const botId = textModal.botId;
    try {
      setTextModal((s: any) => ({ ...s, loading: true }));
      await dispatch(
        updateChatbotWithoutRouter({
          payload: { id: botId, text_content: textModal.text },
        })
      ).unwrap();
      toast.success("Bot text updated");
      await fetchOverview();
      // redirect if fit
      const updated = await fetchOverview();
      if (
        selectedPlan &&
        updated &&
        isWithinPlanLimits(updated, selectedPlan)
      ) {
        toast.success(
          "You're within the selected plan limits — continuing to payment"
        );
        // router.push(`/gateways/${selectedPlan.id}`);
        setIsInPlanLimits(true);
      }
      closeTextModal();
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message || "Failed to update bot text");
    } finally {
      setTextModal((s: any) => ({ ...s, loading: false }));
    }
  };

  const handleDeleteTextContent = async () => {
    const botId = textModal.botId;
    const doDelete = async () => {
      try {
        setTextModal((s: any) => ({ ...s, loading: true }));
        await dispatch(
          updateChatbotWithoutRouter({
            payload: { id: botId, text_content: "" },
          })
        ).unwrap();
        toast.success("Bot text deleted");
        await fetchOverview();
        const updated = await fetchOverview();
        if (
          selectedPlan &&
          updated &&
          isWithinPlanLimits(updated, selectedPlan)
        ) {
          toast.success(
            "You're within the selected plan limits — continuing to payment"
          );
          // router.push(`/gateways/${selectedPlan.id}`);
          setIsInPlanLimits(true);
        }
        closeTextModal();
      } catch (err: any) {
        console.error(err);
        toast.error(err?.message || "Failed to delete bot text");
      } finally {
        setTextModal((s: any) => ({ ...s, loading: false }));
        setConfirmState({ open: false });
      }
    };
    setConfirmState({
      open: true,
      title: "Delete bot text",
      content: "Delete this bot's training text? This cannot be undone.",
      onConfirm: doDelete,
      confirmLabel: "Delete",
    });
  };

  if (!overview) {
    // initial skeleton / centered spinner while overview loads
    return (
      <div className="p-8 flex items-center justify-center min-h-[200px]">
        <div className="flex items-center gap-3">
          <Spinner className="w-6 h-6 text-gray-600" />
          <div className="text-gray-600">Loading account overview…</div>
        </div>
      </div>
    );
  }

  const ownedBots: any[] = Array.isArray(overview.owned_bots)
    ? overview.owned_bots
    : [];
  const teamMembers: any[] = Array.isArray(overview.team_members)
    ? overview.team_members
    : [];

  return (
    <div
      className="min-h-screen p-8"
      style={{
        background:
          "linear-gradient(89.97deg, #002b58 -37.97%, #3b0459 99.97%), linear-gradient(#1f064a33 0%, #0003 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-3xl md:text-4xl font-normal text-white mb-6 text-center"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          Downgrade Helper
        </h1>
        <p className="text-white text-center mb-8 text-lg">
          Clean up your account to fit your new plan
        </p>

        {/* Plan limits summary (if selected plan provided via ?plan=) */}
        <div className="mb-6">
          {selectedPlan ? (
            <div className="bg-[#1B1441] border border-[#FFFFFF33] p-4 rounded">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Selected plan:{" "}
                    {selectedPlan.name ||
                      selectedPlan.title ||
                      `Plan ${selectedPlan.id}`}
                  </h3>
                  <p className="text-sm text-white/70">
                    Compare your current usage with this plan's limits
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {/** compute current usage via shared util */}
                {(() => {
                  const { totals } = computeNeededRemovals(
                    overview,
                    selectedPlan
                  );
                  const {
                    needRemoveChatbots,
                    needRemoveChars,
                    needRemoveWebpages,
                    needRemoveTeam,
                  } = computeNeededRemovals(overview, selectedPlan);
                  const planChatbots = selectedPlan?.chatbots_allowed ?? null;
                  const planChars =
                    selectedPlan?.chars_allowed ??
                    selectedPlan?.allowed_total_chars ??
                    null;
                  const planWebpages =
                    selectedPlan?.webpages_allowed ??
                    selectedPlan?.allowed_total_webpages ??
                    null;
                  const planTeam = selectedPlan?.team_strength ?? null;

                  return (
                    <>
                      <div className="p-3 bg-[#1B1441] border border-[#FFFFFF33] rounded">
                        <div className="text-sm text-white/70">Chatbots</div>
                        <div className="font-medium text-white">
                          {totals.totalChatbots} / {planChatbots ?? "—"}
                        </div>
                        {needRemoveChatbots > 0 && (
                          <div className="text-xs text-red-400">
                            Delete at least {needRemoveChatbots} chatbot(s)
                          </div>
                        )}
                      </div>
                      <div className="p-3 bg-[#1B1441] border border-[#FFFFFF33] rounded">
                        <div className="text-sm text-white/70">Chars</div>
                        <div className="font-medium text-white">
                          {totals.totalChars.toLocaleString()} /{" "}
                          {planChars !== null
                            ? planChars.toLocaleString()
                            : "—"}
                        </div>
                        {needRemoveChars > 0 && (
                          <div className="text-xs text-red-400">
                            Remove ~{needRemoveChars.toLocaleString()} chars
                          </div>
                        )}
                      </div>
                      <div className="p-3 bg-[#1B1441] border border-[#FFFFFF33] rounded">
                        <div className="text-sm text-white/70">Webpages</div>
                        <div className="font-medium text-white">
                          {totals.totalWebpages} / {planWebpages ?? "—"}
                        </div>
                        {needRemoveWebpages > 0 && (
                          <div className="text-xs text-red-400">
                            Delete at least {needRemoveWebpages} webpage(s)
                          </div>
                        )}
                      </div>
                      <div className="p-3 bg-[#1B1441] border border-[#FFFFFF33] rounded">
                        <div className="text-sm text-white/70">
                          Team members
                        </div>
                        <div className="font-medium text-white">
                          {totals.totalTeam} / {planTeam ?? "—"}
                        </div>
                        {needRemoveTeam > 0 && (
                          <div className="text-xs text-red-400">
                            Remove {needRemoveTeam} team member(s)
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          ) : (
            <div className="text-sm text-white/70">
              No target plan selected — the page will still allow deleting
              resources manually.
            </div>
          )}
        </div>

        {/* Multi-step: Step 1 = Chatbots, Step 2 = Bot content (links/docs + auto-trim), Step 3 = Team members */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                step === 1
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                  : "bg-[#1B1441] border border-[#FFFFFF33] text-white/70"
              }`}
            >
              1. Chatbots
            </div>
            <div
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                step === 2
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                  : "bg-[#1B1441] border border-[#FFFFFF33] text-white/70"
              }`}
            >
              2. Bot content
            </div>
            <div
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                step === 3
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                  : "bg-[#1B1441] border border-[#FFFFFF33] text-white/70"
              }`}
            >
              3. Team
            </div>
          </div>

          {step === 1 && (
            <section className="mb-8 bg-[#1B1441] border border-[#FFFFFF33] p-6 rounded-lg shadow-lg">
              <h2
                className="text-xl font-semibold mb-3 text-white"
                style={{ fontFamily: "'Audiowide', sans-serif" }}
              >
                Chatbots ({ownedBots.length})
              </h2>
              <p className="text-sm text-white/70 mb-4">
                Select chatbots you want to permanently delete.
              </p>
              <div className="grid gap-3">
                {ownedBots.map((bot: any) => (
                  <label
                    key={bot.id}
                    className="flex items-center gap-3 p-3 border border-[#FFFFFF33] rounded bg-[#1B1441]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedBots.includes(bot.id)}
                      onChange={() => toggleBot(bot.id)}
                      className="accent-purple-500"
                    />
                    <div>
                      <div className="font-medium text-white">
                        {bot.chatbot_name || `Bot ${bot.id}`}
                      </div>
                      <div className="text-sm text-white/70">
                        Docs:{" "}
                        {Array.isArray(bot.doc_links)
                          ? bot.doc_links.length
                          : 0}{" "}
                        • Chars: {bot.total_chars ?? 0}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={handleDeleteSelectedBots}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg disabled:opacity-50 flex items-center gap-2 transition-colors"
                  disabled={selectedBots.length === 0 || loading}
                >
                  {loading ? <Spinner /> : null}
                  <span>Delete selected chatbots</span>
                </button>
                <div className="ml-auto">
                  <button
                    onClick={nextStep}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-lg transition-all duration-300"
                    disabled={loading}
                  >
                    Next: Bot content
                  </button>
                </div>
              </div>
            </section>
          )}

          {step === 2 && (
            <section className="mb-8 bg-[#1B1441] border border-[#FFFFFF33] p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h2
                  className="text-xl font-semibold text-white"
                  style={{ fontFamily: "'Audiowide', sans-serif" }}
                >
                  Bot content (links & docs)
                </h2>
                <div className="text-sm text-white/70">
                  Total bots: {ownedBots.length}
                </div>
              </div>
              <p className="text-sm text-white/70 mb-4">
                Select individual links (per bot) to delete and reclaim
                characters / webpages, or use Auto-trim to remove links until
                the selected plan's char limit is met.
              </p>

              <div className="mb-4 flex gap-3">
                <button
                  onClick={handleDeleteSelectedLinks}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg disabled:opacity-50 flex items-center gap-2 transition-colors"
                  disabled={
                    Object.values(selectedDocsByBot).every(
                      (arr) => (arr || []).length === 0
                    ) || loading
                  }
                >
                  {loading ? <Spinner /> : null}
                  <span>Delete selected links</span>
                </button>
                <button
                  onClick={autoTrimToPlan}
                  className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg flex items-center gap-2 transition-colors"
                  disabled={!selectedPlan || loading}
                >
                  {loading ? <Spinner /> : null}
                  <span>Auto-trim to fit plan</span>
                </button>
              </div>

              {/* {ownedBots.map((bot: any) => (
                <div
                  key={`links-${bot.id}`}
                  className="mb-4 border border-[#FFFFFF33] p-4 rounded bg-[#1B1441]"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-medium flex items-center gap-3 text-white">
                      <span>{bot.chatbot_name || `Bot ${bot.id}`}</span>
                      <button
                        onClick={() => openFaqModal(bot)}
                        className="text-xs text-blue-400 hover:text-blue-300 underline"
                      >
                        Manage FAQs
                      </button>
                      <button
                        onClick={() => openTextModal(bot)}
                        className="text-xs text-purple-400 hover:text-purple-300 underline"
                      >
                        Edit Text
                      </button>
                    </div>
                    <div className="text-sm text-white/70">
                      {(bot.doc_links || []).length} links • Chars:{" "}
                      {bot.total_chars ?? 0}
                    </div>
                  </div>
                  <div className="grid gap-2">
                    {(bot.doc_links || []).map((doc: any) => (
                      <label
                        key={doc.id}
                        className="flex items-center gap-3 p-2 border border-[#FFFFFF33] rounded bg-[#1B1441]"
                      >
                        <input
                          type="checkbox"
                          checked={(selectedDocsByBot[bot.id] || []).includes(
                            doc.id
                          )}
                          onChange={() => toggleDoc(bot.id, doc.id)}
                          className="accent-purple-500"
                        />
                        <div className="text-sm flex-1">
                          <div className="truncate max-w-2xl text-white">
                            {doc.document_link || doc.target_link || doc.id}
                          </div>
                          <div className="text-xs text-white/70">
                            Chars: {doc.chars ?? 0}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              ))} */}

              {ownedBots.map((bot: any) => {
                const isOpen = openBotId === bot.id;

                return (
                  <div
                    key={`links-${bot.id}`}
                    className="mb-4 border border-[#FFFFFF33] rounded bg-[#1B1441]"
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => setOpenBotId(isOpen ? null : bot.id)}
                      className="w-full flex justify-between items-center p-4 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-white">
                          {bot.chatbot_name || `Bot ${bot.id}`}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openFaqModal(bot);
                          }}
                          className="text-xs text-blue-400 hover:text-blue-300 underline"
                        >
                          Manage FAQs
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openTextModal(bot);
                          }}
                          className="text-xs text-purple-400 hover:text-purple-300 underline"
                        >
                          Edit Text
                        </button>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-white/70">
                        <span>
                          {(bot.doc_links || []).length} links • Chars:{" "}
                          {bot.total_chars ?? 0}
                        </span>
                        <svg
                          className={`w-5 h-5 transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          stroke="white"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>

                    {/* Accordion Body */}
                    {isOpen && (
                      <div className="p-4 border-t border-[#FFFFFF33] max-h-80 overflow-y-auto">
                        {(bot.doc_links || []).map((doc: any) => (
                          <label
                            key={doc.id}
                            className="flex items-center gap-3 p-2 border border-[#FFFFFF33] rounded bg-[#1B1441] mb-2"
                          >
                            <input
                              type="checkbox"
                              checked={(
                                selectedDocsByBot[bot.id] || []
                              ).includes(doc.id)}
                              onChange={() => toggleDoc(bot.id, doc.id)}
                              className="accent-purple-500"
                            />
                            <div className="text-sm flex-1">
                              <div className="truncate max-w-2xl text-white">
                                {doc.document_link || doc.target_link || doc.id}
                              </div>
                              <div className="text-xs text-white/70">
                                Chars: {doc.chars ?? 0}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="flex items-center gap-3">
                <button
                  onClick={prevStep}
                  className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                  disabled={loading}
                >
                  Back
                </button>
                <div className="ml-auto">
                  <button
                    onClick={nextStep}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-lg transition-all duration-300"
                    disabled={loading}
                  >
                    Next: Team
                  </button>
                </div>
              </div>
            </section>
          )}

          {step === 3 && (
            <section className="mb-8 bg-[#1B1441] border border-[#FFFFFF33] p-6 rounded-lg shadow-lg">
              <h2
                className="text-xl font-semibold mb-3 text-white"
                style={{ fontFamily: "'Audiowide', sans-serif" }}
              >
                Team members / Shares ({teamMembers.length})
              </h2>
              <p className="text-sm text-white/70 mb-4">
                Revoke access for shared/team users associated with your bots.
              </p>

              <div className="grid gap-3">
                {teamMembers.map((t: any) => (
                  <label
                    key={t.id}
                    className="flex items-center gap-3 p-3 border border-[#FFFFFF33] rounded bg-[#1B1441]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTeamShares.includes(t.id)}
                      onChange={() => toggleTeamShare(t.id)}
                      className="accent-purple-500"
                    />
                    <div>
                      <div className="font-medium text-white">
                        {t.shared_email || t.shared_user_id || `Share ${t.id}`}
                      </div>
                      <div className="text-sm text-white/70">
                        Bot ID: {t.bot_id}
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={handleRevokeSelectedTeam}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg disabled:opacity-50 flex items-center gap-2 transition-colors"
                  disabled={selectedTeamShares.length === 0 || loading}
                >
                  {loading ? <Spinner /> : null}
                  <span>Revoke selected access</span>
                </button>
                <div className="ml-auto flex gap-3">
                  <button
                    onClick={prevStep}
                    className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                    disabled={loading}
                  >
                    Back
                  </button>
                  <button
                    onClick={() => fetchOverview()}
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                    disabled={loading}
                  >
                    Refresh overview
                  </button>
                </div>
              </div>
            </section>
          )}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => fetchOverview()}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg mr-3 transition-colors"
            disabled={loading}
          >
            Refresh
          </button>
          {isInPlanLimits ? (
            <button
              onClick={() =>
                selectedPlan?.id && router.push(`/gateways/${selectedPlan.id}`)
              }
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-400 hover:from-green-600 hover:to-teal-500 text-white rounded-lg transition-all duration-300"
            >
              Continue to payment
            </button>
          ) : (
            <div className="inline-block align-middle text-sm text-white/70">
              Not ready for purchase yet
            </div>
          )}
        </div>
        {/* Confirm modal */}
        <ConfirmModal
          open={!!confirmState.open}
          title={confirmState.title}
          content={confirmState.content}
          confirmLabel={confirmState.confirmLabel}
          loading={loading}
          onCancel={() => setConfirmState({ open: false })}
          onConfirm={() => {
            if (confirmState?.onConfirm) {
              // execute and allow it to manage closing
              confirmState.onConfirm();
            } else {
              setConfirmState({ open: false });
            }
          }}
        />

        {/* global loading overlay while an action is running */}
        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-30" />
            <div className="relative z-10 bg-white/90 rounded p-4 flex items-center gap-3 shadow">
              <Spinner className="w-5 h-5 text-gray-700" />
              <div className="text-sm text-gray-800">Working…</div>
            </div>
          </div>
        )}

        {/* FAQ modal */}
        {faqModal.open && (
          <div className="fixed inset-0 z-40 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black opacity-40"
              onClick={closeFaqModal}
            ></div>
            <div className="relative bg-white rounded shadow-lg max-w-xl w-full p-6 z-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">
                  FAQs for bot {faqModal.botId}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDeleteAllFaqsForBot(faqModal.botId)}
                    className="px-3 py-1 bg-red-600 text-white rounded text-sm"
                  >
                    Delete all
                  </button>
                  <button
                    onClick={closeFaqModal}
                    className="px-3 py-1 bg-gray-200 rounded text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
              <div className="max-h-72 overflow-auto">
                {faqModal.loading ? (
                  <div>Loading...</div>
                ) : (
                  <ul className="space-y-2">
                    {(faqModal.faqs || []).length === 0 && (
                      <li className="text-sm text-gray-600">No FAQs found</li>
                    )}
                    {(faqModal.faqs || []).map((f: any) => (
                      <li
                        key={f.id}
                        className="border p-2 rounded flex justify-between items-start"
                      >
                        <div>
                          <div className="font-medium">Q: {f.question}</div>
                          <div className="text-sm text-gray-700">
                            A: {f.answer}
                          </div>
                        </div>
                        <div className="ml-4">
                          <button
                            onClick={() =>
                              handleDeleteFaq(faqModal.botId, f.id)
                            }
                            className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
        {/* Text edit modal */}
        {textModal.open && (
          <div className="fixed inset-0 z-40 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black opacity-40"
              onClick={closeTextModal}
            ></div>
            <div className="relative bg-white rounded shadow-lg max-w-xl w-full p-6 z-50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">
                  Edit training text for bot {textModal.botId}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={closeTextModal}
                    className="px-3 py-1 bg-gray-200 rounded text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
              <div>
                <textarea
                  value={textModal.text}
                  onChange={(e) =>
                    setTextModal((s: any) => ({ ...s, text: e.target.value }))
                  }
                  className="w-full min-h-[240px] p-3 border rounded mb-3"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={handleDeleteTextContent}
                    className="px-3 py-2 bg-red-600 text-white rounded"
                  >
                    Delete text
                  </button>
                  <button
                    onClick={handleSaveText}
                    className="px-3 py-2 bg-blue-600 text-white rounded"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DowngradePage;
