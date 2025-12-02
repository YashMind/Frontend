"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getUserDataOverview } from "@/store/slices/admin/adminSlice";
import {
  getChatbotsFaqs,
  updateChatbotWithoutRouter,
} from "@/store/slices/chats/chatSlice";
import ConfirmModal from "@/components/Common/ConfirmModal";
import { isWithinPlanLimits, computeNeededRemovals } from "@/lib/planUtils";
import { getPublicSubscriptionPlans } from "@/store/slices/admin/adminSlice";
import toast from "react-hot-toast";
import { RootState } from "@/store/store";
import { useSearchParams, useRouter } from "next/navigation";
import { saveDowngradeSelections } from "@/store/slices/admin/adminSlice";

const DowngradePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
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

  // NEW: Save downgrade selections and proceed to payment
  const handleSaveDowngradeSelections = async () => {
    try {
      setLoading(true);

      // Prepare selections payload (NO DELETION HERE)
      const selections = {
        chatbots_to_delete: selectedBots,
        docs_to_delete: selectedDocsByBot,
        team_members_to_remove: selectedTeamShares,
      };

      // Save selections to database with status="pending"
      const result = await dispatch(
        saveDowngradeSelections({
          payload: {
            target_plan_id: selectedPlan.id,
            selections: selections,
          },
        })
      ).unwrap();

      const selectionId = result.selection_id;

      toast.success("Selections saved! Proceeding to payment...");

      // Redirect to payment page with selection_id
      router.push(`/gateways/${selectedPlan.id}?selection_id=${selectionId}`);
    } catch (error: any) {
      console.error("Failed to save downgrade selections:", error);
      toast.error(error?.message || "Failed to save selections");
    } finally {
      setLoading(false);
    }
  };

  // NEW: Main handler for proceeding to payment
  const handleProceedToPayment = async () => {
    if (!selectedPlan) {
      toast.error("Please select a plan first");
      return;
    }

    // Check if within plan limits
    if (isWithinPlanLimits(overview, selectedPlan)) {
      // Direct to payment if already within limits
      router.push(`/gateways/${selectedPlan.id}`);
    } else {
      // Save selections and then proceed to payment
      await handleSaveDowngradeSelections();
    }
  };

  // FAQ modal helpers (KEEP THESE - they're just for viewing)
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

  // Text modal helpers (KEEP THESE - they're just for viewing)
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
          Select resources to remove and proceed to payment. Changes will be
          applied after successful payment.
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
              No target plan selected — please select a plan to continue.
            </div>
          )}
        </div>

        {/* Multi-step: Step 1 = Chatbots, Step 2 = Bot content (links/docs), Step 3 = Team members */}
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
                Select chatbots you want to remove. Changes will be applied
                after successful payment.
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
                <div className="text-sm text-white/70">
                  {selectedBots.length} chatbot(s) selected for removal
                </div>
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
                Select individual links (per bot) to remove and reclaim
                characters / webpages.
              </p>

              <div className="mb-4">
                <div className="text-sm text-white/70">
                  {Object.values(selectedDocsByBot).flat().length} link(s)
                  selected for removal
                </div>
              </div>

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
                          View FAQs
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
                Select team members to remove access. Changes will be applied
                after successful payment.
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
                <div className="text-sm text-white/70">
                  {selectedTeamShares.length} team member(s) selected for
                  removal
                </div>
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

        {/* Main action buttons */}
        <div className="text-center mt-8">
          <button
            onClick={() => fetchOverview()}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg mr-3 transition-colors"
            disabled={loading}
          >
            Refresh
          </button>

          <button
            onClick={handleProceedToPayment}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-400 hover:from-green-600 hover:to-teal-500 text-white rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto"
            disabled={loading || !selectedPlan}
          >
            {loading ? <Spinner /> : null}
            <span>Proceed to Payment</span>
          </button>
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
