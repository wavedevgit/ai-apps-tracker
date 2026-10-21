import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Gnt as t,
    Jnt as n,
    Qst as r,
    Znt as i,
    ix as a,
    nct as o,
    rx as s
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as c,
    Ln as l,
    Nn as u,
    Rn as d,
    wn as f,
    zn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    nWn as m,
    tWn as h
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    $o as g,
    Ho as _,
    Jo as v,
    Wo as y,
    Yo as b
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    a as x,
    t as S
} from "./191ef300-ht77dgdmt4lfmdwl.js";

function C() {
    return t(F)
}

function w() {
    return t(I)
}

function T({
    workspaceId: e,
    workspaceSettings: t,
    isLoadingWorkspace: n,
    onEnable: r,
    defaultEnabled: i,
    labelHref: a,
    descriptionHref: o,
    rowClassName: c,
    feature: l,
    labelMessage: d,
    descriptionMessage: f
}) {
    let m = p(),
        {
            mutate: g,
            isPending: _
        } = x({
            workspaceId: e
        }),
        v = t.beta_settings[l] ?? i ?? !1,
        y = e => {
            g({
                feature: l,
                enabled: e
            }, {
                onSuccess: () => {
                    e && r?.()
                }
            })
        };
    return (0, N.jsxs)(b, {
        className: c,
        children: [(0, N.jsxs)(`div`, {
            children: [(0, N.jsx)(`div`, {
                className: `text-md`,
                children: a ? (0, N.jsx)(h, {
                    href: a,
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
                children: o ? (0, N.jsx)(u, {
                    ...f,
                    values: {
                        leaderboardLink: e => (0, N.jsx)(h, {
                            href: o,
                            openNewTab: !0,
                            className: `text-token-text-primary hover:text-token-text-primary/80 underline-offset-2`,
                            children: e
                        })
                    }
                }) : (0, N.jsx)(u, {
                    ...f
                })
            })]
        }), (0, N.jsx)(s, {
            size: `normal`,
            "aria-label": m.formatMessage(d),
            checked: v,
            disabled: n || _,
            onCheckedChange: y
        })]
    })
}

function E(e) {
    return (0, N.jsx)(T, {
        ...e,
        feature: r.ENABLE_CONVERSATION_CLASSIFIER,
        labelMessage: L.taskInsightsLabel,
        rowClassName: `items-center`,
        descriptionMessage: L.taskInsightsToggleDescription
    })
}

function D(e) {
    return (0, N.jsxs)(N.Fragment, {
        children: [(0, N.jsx)(T, {
            ...e,
            feature: r.ENABLE_VALUE_SURVEY_CAMPAIGN,
            labelMessage: L.impactSurveyCampaignLabel,
            rowClassName: `items-center`,
            descriptionMessage: L.impactSurveyCampaignDescription
        }), (0, N.jsx)(T, {
            ...e,
            defaultEnabled: !0,
            feature: r.INCLUDE_USER_IDENTIFIER_IN_SURVEY_DOWNLOAD,
            labelMessage: L.impactSurveyIdentifiersLabel,
            rowClassName: `items-center`,
            descriptionMessage: L.impactSurveyIdentifiersDescription
        })]
    })
}

function O(e) {
    return (0, N.jsx)(T, {
        ...e,
        feature: r.CODEX_USAGE_LEADERBOARD,
        rowClassName: `items-center`,
        labelMessage: L.codexUsageLeaderboardLabel,
        descriptionHref: `https://chatgpt.com/leaderboard`,
        descriptionMessage: L.codexUsageLeaderboardDescription
    })
}

function k(e) {
    return (0, N.jsx)(T, {
        ...e,
        feature: r.CODEX_CODE_ATTRIBUTION_ANALYTICS,
        rowClassName: `items-center`,
        labelMessage: L.codexCodeAttributionLabel,
        descriptionMessage: L.codexCodeAttributionDescription
    })
}

function A(e) {
    "use forget";
    let t = (0, M.c)(2),
        n;
    return t[0] === e ? n = t[1] : (n = (0, N.jsx)(T, {
        ...e,
        feature: r.CODEX_GIT_ATTRIBUTION,
        rowClassName: `items-center`,
        labelMessage: L.codexGitAttributionLabel,
        descriptionMessage: L.codexGitAttributionDescription
    }), t[0] = e, t[1] = n), n
}

function j({
    workspaceId: e,
    workspaceSettings: t,
    isLoadingWorkspace: r,
    title: i,
    titleHref: a,
    onEnable: o
}) {
    let s = n(`3528236309`),
        c = s.get(`show_impact_tab`, !1),
        l = s.get(`show_classification_tab`, !1),
        u = C();
    return (0, N.jsx)(`div`, {
        id: P,
        className: `scroll-mt-24`,
        children: (0, N.jsx)(_, {
            title: i ?? L.usageAnalyticsSectionTitle,
            titleHref: a,
            children: (0, N.jsxs)(v, {
                children: [l ? (0, N.jsx)(E, {
                    workspaceId: e,
                    workspaceSettings: t,
                    isLoadingWorkspace: r,
                    onEnable: o
                }) : null, c ? (0, N.jsx)(D, {
                    workspaceId: e,
                    workspaceSettings: t,
                    isLoadingWorkspace: r
                }) : null, u ? (0, N.jsx)(O, {
                    workspaceId: e,
                    workspaceSettings: t,
                    isLoadingWorkspace: r
                }) : null]
            })
        })
    })
}
var M, N, P, F, I, L, R = e((() => {
    M = f(), d(), o(), S(), y(), g(), a(), m(), i(), N = c(), P = `workspace-usage-analytics`, F = `1172233566`, I = `2279797292`, L = l({
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
//# sourceMappingURL=c3ec7e19-ewld8lvj5enuwoxq.js.map