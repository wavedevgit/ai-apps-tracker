import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _ct as t,
    ax as n,
    grt as r,
    ix as i,
    prt as a,
    urt as o,
    xct as s
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as c,
    Ln as l,
    Nn as u,
    Rn as d,
    wn as f,
    zn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    BWn as m,
    VWn as h
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Ko as g,
    Wo as _,
    Xo as v,
    Zo as y,
    ts as b
} from "./c2675c8c-4fpunyxk1uf8cfp1.js";
import {
    a as x,
    t as S
} from "./191ef300-m7gd4q2a86rzbape.js";

function C() {
    return o(F)
}

function w() {
    return o(I)
}

function T({
    workspaceId: e,
    workspaceSettings: t,
    isLoadingWorkspace: n,
    onEnable: r,
    defaultEnabled: a,
    labelHref: o,
    descriptionHref: s,
    rowClassName: c,
    feature: l,
    labelMessage: d,
    descriptionMessage: f
}) {
    let h = p(),
        {
            mutate: g,
            isPending: _
        } = x({
            workspaceId: e
        }),
        v = t.beta_settings[l] ?? a ?? !1,
        b = e => {
            g({
                feature: l,
                enabled: e
            }, {
                onSuccess: () => {
                    e && r?.()
                }
            })
        };
    return (0, N.jsxs)(y, {
        className: c,
        children: [(0, N.jsxs)(`div`, {
            children: [(0, N.jsx)(`div`, {
                className: `text-md`,
                children: o ? (0, N.jsx)(m, {
                    href: o,
                    underline: !1,
                    className: `hover:underline`,
                    children: (0, N.jsx)(u, {
                        ...d
                    })
                }) : (0, N.jsx)(u, {
                    ...d
                })
            }), (0, N.jsx)(`div`, {
                className: `text-token-text-tertiary text-xs`,
                children: s ? (0, N.jsx)(u, {
                    ...f,
                    values: {
                        leaderboardLink: e => (0, N.jsx)(m, {
                            href: s,
                            openNewTab: !0,
                            className: `text-token-text-primary hover:text-token-text-primary/80 underline-offset-2`,
                            children: e
                        })
                    }
                }) : (0, N.jsx)(u, {
                    ...f
                })
            })]
        }), (0, N.jsx)(i, {
            size: `normal`,
            "aria-label": h.formatMessage(d),
            checked: v,
            disabled: n || _,
            onCheckedChange: b
        })]
    })
}

function E(e) {
    return (0, N.jsx)(T, {
        ...e,
        feature: t.ENABLE_CONVERSATION_CLASSIFIER,
        labelMessage: L.taskInsightsLabel,
        rowClassName: `items-center`,
        descriptionMessage: L.taskInsightsToggleDescription
    })
}

function D(e) {
    return (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)(T, {
            ...e,
            feature: t.ENABLE_VALUE_SURVEY_CAMPAIGN,
            labelMessage: L.impactSurveyCampaignLabel,
            rowClassName: `items-center`,
            descriptionMessage: L.impactSurveyCampaignDescription
        }), (0, N.jsx)(T, {
            ...e,
            defaultEnabled: !0,
            feature: t.INCLUDE_USER_IDENTIFIER_IN_SURVEY_DOWNLOAD,
            labelMessage: L.impactSurveyIdentifiersLabel,
            rowClassName: `items-center`,
            descriptionMessage: L.impactSurveyIdentifiersDescription
        })]
    })
}

function O(e) {
    return (0, N.jsx)(T, {
        ...e,
        feature: t.CODEX_USAGE_LEADERBOARD,
        rowClassName: `items-center`,
        labelMessage: L.codexUsageLeaderboardLabel,
        descriptionHref: `https://chatgpt.com/leaderboard`,
        descriptionMessage: L.codexUsageLeaderboardDescription
    })
}

function k(e) {
    return (0, N.jsx)(T, {
        ...e,
        feature: t.CODEX_CODE_ATTRIBUTION_ANALYTICS,
        rowClassName: `items-center`,
        labelMessage: L.codexCodeAttributionLabel,
        descriptionMessage: L.codexCodeAttributionDescription
    })
}

function A(e) {
    "use forget";
    let n = (0, M.c)(2),
        r;
    return n[0] === e ? r = n[1] : (r = (0, N.jsx)(T, {
        ...e,
        feature: t.CODEX_GIT_ATTRIBUTION,
        rowClassName: `items-center`,
        labelMessage: L.codexGitAttributionLabel,
        descriptionMessage: L.codexGitAttributionDescription
    }), n[0] = e, n[1] = r), r
}

function j({
    workspaceId: e,
    workspaceSettings: t,
    isLoadingWorkspace: n,
    title: r,
    titleHref: i,
    onEnable: o
}) {
    let s = a(`3528236309`),
        c = s.get(`show_impact_tab`, !1),
        l = s.get(`show_classification_tab`, !1),
        u = C();
    return (0, N.jsx)(`div`, {
        id: P,
        className: `scroll-mt-24`,
        children: (0, N.jsx)(_, {
            title: r ?? L.usageAnalyticsSectionTitle,
            titleHref: i,
            children: (0, N.jsxs)(v, {
                children: [l ? (0, N.jsx)(E, {
                    workspaceId: e,
                    workspaceSettings: t,
                    isLoadingWorkspace: n,
                    onEnable: o
                }) : null, c ? (0, N.jsx)(D, {
                    workspaceId: e,
                    workspaceSettings: t,
                    isLoadingWorkspace: n
                }) : null, u ? (0, N.jsx)(O, {
                    workspaceId: e,
                    workspaceSettings: t,
                    isLoadingWorkspace: n
                }) : null]
            })
        })
    })
}
var M, N, P, F, I, L, R = e((() => {
    M = f(), d(), s(), S(), g(), b(), n(), h(), r(), N = c(), P = `workspace-usage-analytics`, F = `1172233566`, I = `2279797292`, L = l({
        usageAnalyticsSectionTitle: {
            id: `ZSq7+j`,
            defaultMessage: `Workspace Analytics`
        },
        taskInsightsLabel: {
            id: `5jty9m`,
            defaultMessage: `Enable task insights`
        },
        impactSurveyCampaignLabel: {
            id: `sTtZlo`,
            defaultMessage: `Enable OpenAI-created impact surveys`
        },
        impactSurveyCampaignDescription: {
            id: `dv6Hjb`,
            defaultMessage: `When enabled, OpenAI-created impact surveys will run for eligible workspace users.`
        },
        impactSurveyIdentifiersLabel: {
            id: `sQDbhU`,
            defaultMessage: `Include user identifiers in impact survey exports`
        },
        impactSurveyIdentifiersDescription: {
            id: `jcg4Na`,
            defaultMessage: `When enabled, impact survey exports include each respondent's name and email.`
        },
        taskInsightsToggleDescription: {
            id: `NSePTi`,
            defaultMessage: `Enable message classification for my workspace.`
        },
        codexUsageLeaderboardLabel: {
            id: `ZFxY44`,
            defaultMessage: `Enable Codex usage leaderboard`
        },
        codexUsageLeaderboardDescription: {
            id: `BZwNFR`,
            defaultMessage: `Allow members to view the <leaderboardLink>Codex usage leaderboard</leaderboardLink> page. Only includes workspace usage.`
        },
        codexCodeAttributionLabel: {
            id: `HA94ur`,
            defaultMessage: `Enable Codex code attribution analytics`
        },
        codexCodeAttributionDescription: {
            id: `sxc6TH`,
            defaultMessage: `Allow workspace admins to enable code attribution analytics for selected GitHub repositories.`
        },
        codexGitAttributionLabel: {
            id: `chatgpt.workspace_settings.codex.git_attribution.toggle.label`,
            defaultMessage: `Attribute commits to Codex`
        },
        codexGitAttributionDescription: {
            id: `chatgpt.workspace_settings.codex.git_attribution.toggle.help_text`,
            defaultMessage: `When enabled, commits created with Codex include Codex attribution.`
        }
    })
}));
export {
    R as a, j as i, A as n, w as o, k as r, C as s, P as t
};
//# sourceMappingURL=c3ec7e19-l118slcui8xefbyk.js.map