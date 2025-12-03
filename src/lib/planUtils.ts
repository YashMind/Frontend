export type UsageTotals = {
    totalChatbots: number;
    totalChars: number;
    totalWebpages: number;
    totalTeam: number;
};

export function computeUsageTotals(overview: any): UsageTotals {
    const sharedBots = Array.isArray(overview?.shared_bots)
        ? overview.shared_bots
        : overview?.sharedBots || [];

    const ownedBots = Array.isArray(overview?.owned_bots) ? overview.owned_bots : overview?.ownedBots || [];

    const totalChatbots = (ownedBots.length || 0)
    // + (Array.isArray(sharedBots) ? sharedBots.length : 0);

    const totalChars = (Array.isArray(ownedBots) ? ownedBots.reduce((s: number, b: any) => s + (b?.total_chars ?? 0), 0) : 0) || (overview?.total_chars ?? 0) || 0;

    const totalWebpages = overview?.total_crawled_links ?? overview?.webpages ?? overview?.total_webpages ?? 0;

    const totalTeam = Array.isArray(overview?.team_members) ? overview.team_members.length : (overview?.team_members_count ?? overview?.team_users ?? 0) || 0;

    return {
        totalChatbots,
        totalChars,
        totalWebpages,
        totalTeam,
    };
}

export function isWithinPlanLimits(overview: any, plan: any): boolean {
    if (!overview || !plan) return false;
    const totals = computeUsageTotals(overview);

    const planChatbots = plan?.chatbots_allowed ?? plan?.chatbots_allowed ?? null;
    const planChars = plan?.chars_allowed ?? plan?.allowed_total_chars ?? null;
    const planWebpages = plan?.webpages_allowed ?? plan?.allowed_total_webpages ?? null;
    const planTeam = plan?.team_strength ?? plan?.team_strength ?? null;

    if (planChatbots !== null && planChatbots !== undefined && totals.totalChatbots > planChatbots) return false;
    if (planChars !== null && planChars !== undefined && totals.totalChars > planChars) return false;
    if (planWebpages !== null && planWebpages !== undefined && totals.totalWebpages > planWebpages) return false;
    if (planTeam !== null && planTeam !== undefined && totals.totalTeam > planTeam) return false;

    return true;
}

export function computeNeededRemovals(overview: any, plan: any) {
    const totals = computeUsageTotals(overview);
    const planChatbots = plan?.chatbots_allowed ?? plan?.chatbots_allowed ?? null;
    const planChars = plan?.chars_allowed ?? plan?.allowed_total_chars ?? null;
    const planWebpages = plan?.webpages_allowed ?? plan?.allowed_total_webpages ?? null;
    const planTeam = plan?.team_strength ?? plan?.team_strength ?? null;

    return {
        needRemoveChatbots: planChatbots && totals.totalChatbots > planChatbots ? totals.totalChatbots - planChatbots : 0,
        needRemoveChars: planChars && totals.totalChars > planChars ? totals.totalChars - planChars : 0,
        needRemoveWebpages: planWebpages && totals.totalWebpages > planWebpages ? totals.totalWebpages - planWebpages : 0,
        needRemoveTeam: planTeam && totals.totalTeam > planTeam ? totals.totalTeam - planTeam : 0,
        totals,
    };
}
