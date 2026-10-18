const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/7c365e29-ivyah0jjxcgk4iwl.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    C0 as n,
    C1 as r,
    Jv as i,
    QL as a,
    S0 as o,
    YL as s,
    aU as c,
    dz as l,
    fz as u,
    i5 as d,
    iy as f,
    mst as p,
    qv as m,
    rU as h,
    ry as g,
    sU as _,
    tR as v,
    u1 as y,
    wst as b
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as x,
    Bn as S,
    Nn as C,
    Rn as w,
    at as T,
    cn as E,
    ln as D,
    wn as O,
    zn as k
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    DJ as A,
    EJ as j,
    rCn as M,
    sCn as N
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Ai as P,
    Di as F,
    Oi as I,
    ki as L
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    r as R,
    t as z
} from "./3e72bb91-l4ijhasz7arxe6nl.js";
import {
    t as B
} from "./7f56e65a-mjum570c5vhllmq1.js";

function V() {
    let e = d(I),
        {
            data: t,
            isLoading: n
        } = _(p.CodexTrainingAllowed),
        {
            data: r
        } = _(p.TrainingAllowed),
        a = k(),
        o = v(s.isBusinessWorkspace),
        u = v(s.isTeamPlan),
        f = v(s.isEduPlan),
        h = c();
    return (0, H.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, H.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, H.jsx)(C, {
                id: `wham.modelTrainingSettingsRow.modelTraining`,
                defaultMessage: `Model improvement`
            })
        }), e && (0, H.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, H.jsx)(L, {})
        }), n ? (0, H.jsx)(`div`, {
            className: `flex items-center justify-center pt-4`,
            children: (0, H.jsx)(l, {
                className: `icon me-1.5`
            })
        }) : o ? (0, H.jsx)(`div`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, H.jsx)(C, {
                ...u ? {
                    id: `settingsModal.chatTrainingTeamsTooltip`,
                    defaultMessage: `ChatGPT Business automatically disables training.`,
                    description: `Tooltip for the disabled chat training toggle.`
                } : f ? {
                    id: `settingsModal.chatTrainingEduTooltip`,
                    defaultMessage: `ChatGPT Edu automatically disables training.`,
                    description: `Tooltip for the disabled chat training toggle.`
                } : {
                    id: `settingsModal.chatTrainingEnterpriseTooltip`,
                    defaultMessage: `ChatGPT Enterprise automatically disables training.`,
                    description: `Tooltip for the disabled chat training toggle.`
                }
            })
        }) : (0, H.jsxs)(`div`, {
            className: `flex flex-col gap-2`,
            children: [(0, H.jsx)(`div`, {
                className: `text-token-text-secondary bg-token-bg-secondary mt-2 flex rounded-md px-4 py-4 text-sm`,
                children: r ? (0, H.jsx)(C, {
                    id: `h0CRL1`,
                    defaultMessage: `Model improvement is enabled in <settingsLink>ChatGPT data controls</settingsLink>. Your tasks can be used to improve Codex.`,
                    values: {
                        settingsLink: e => (0, H.jsx)(T, {
                            to: g(m.DataControls),
                            className: `ms-1 underline`,
                            children: e
                        })
                    }
                }) : (0, H.jsx)(C, {
                    id: `/kZNls`,
                    defaultMessage: `Training is disabled. Access your ChatGPT data controls <settingsLink>here</settingsLink>.`,
                    values: {
                        settingsLink: e => (0, H.jsx)(T, {
                            to: g(m.DataControls),
                            className: `ms-1 underline`,
                            "aria-label": a.formatMessage({
                                id: `wham.modelTrainingSettingsRow.settingsLinkAriaLabel`,
                                defaultMessage: `Link to ChatGPT data controls settings page`
                            }),
                            children: e
                        })
                    }
                })
            }), (0, H.jsx)(`div`, {
                className: `mt-3 w-full text-sm`,
                children: (0, H.jsx)(i, {
                    label: a.formatMessage({
                        id: `wham.modelTrainingSettingsRow.allowTraining`,
                        defaultMessage: `Include environments`
                    }),
                    enabled: !!t,
                    ariaLabel: a.formatMessage({
                        id: `wham.modelTrainingSettingsRow.allowTrainingAriaLabel`,
                        defaultMessage: `Toggle to include environments in model training data`
                    }),
                    centerToggleVertically: !0,
                    description: (0, H.jsx)(`span`, {
                        className: `text-token-text-secondary block max-w-[30rem] text-xs leading-5`,
                        children: (0, H.jsx)(C, {
                            id: `wham.modelTrainingSettingsRow.disclaimer`,
                            defaultMessage: `Allow additional context from your Codex environments to help improve our models. We take steps to protect your privacy. <link>Learn more</link>.`,
                            values: {
                                link: e => (0, H.jsx)(`a`, {
                                    href: `https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance`,
                                    target: `_blank`,
                                    className: `underline`,
                                    rel: `noopener noreferrer`,
                                    "aria-label": a.formatMessage({
                                        id: `wham.modelTrainingSettingsRow.learnMoreAriaLabel`,
                                        defaultMessage: `Link to learn more about model improvement and privacy settings`
                                    }),
                                    children: e
                                })
                            }
                        })
                    }),
                    onChange: e => {
                        j.recordDataCheckToggle(e), h.mutate({
                            setting: p.CodexTrainingAllowed,
                            value: e
                        })
                    },
                    testId: `improve-model-toggle`
                })
            })]
        })]
    })
}
var H, U = e((() => {
        h(), b(), P(), F(), t(), f(), u(), a(), A(), w(), x(), H = S()
    })),
    W, G = e((() => {
        n(), D(), W = o(() => E(() => import(`./7c365e29-ivyah0jjxcgk4iwl.js`).then(e => e.PrismaAirsGuardrailsSettings), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
    }));

function K() {
    return null
}

function q() {
    return (0, Z.jsx)(`div`, {
        className: `border-token-border-heavy flex items-center border-b`,
        children: (0, Z.jsx)(`div`, {
            className: `py-2 text-xl leading-7 font-medium`,
            children: (0, Z.jsx)(C, {
                id: `wham.dataControlsHeader.general`,
                defaultMessage: `Data controls`
            })
        })
    })
}

function J({
    children: e,
    header: t,
    connectionAlert: n
}) {
    return (0, Z.jsx)(z, {
        topPadding: !0,
        connectionAlert: n,
        children: (0, Z.jsxs)(`div`, {
            className: `mx-auto flex h-full max-w-screen-xl flex-1 flex-col gap-2 ps-4 pe-12`,
            children: [t ?? (0, Z.jsx)(q, {}), (0, Z.jsxs)(`div`, {
                className: `flex max-w-3xl flex-col`,
                children: [(0, Z.jsx)(`div`, {
                    className: `flex flex-col gap-4 pb-16`,
                    children: e
                }), (0, Z.jsx)(K, {})]
            })]
        })
    })
}

function Y() {
    "use forget";
    let e = (0, X.c)(7),
        t = r(),
        n;
    e[0] === t ? n = e[1] : (n = t?.getWorkspaceId() != null && t.data.role != null && M(t.data.role), e[0] = t, e[1] = n);
    let i = n,
        a;
    e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Z.jsx)(`div`, {
        className: `pt-4`,
        children: (0, Z.jsx)(V, {})
    }), e[2] = a) : a = e[2];
    let o;
    e[3] === i ? o = e[4] : (o = i ? (0, Z.jsx)(W, {}) : null, e[3] = i, e[4] = o);
    let s;
    return e[5] === o ? s = e[6] : (s = (0, Z.jsxs)(J, {
        children: [a, o]
    }), e[5] = o, e[6] = s), s
}
var X, Z, Q = e((() => {
    X = O(), N(), y(), R(), U(), G(), B(), w(), Z = S()
}));
export {
    Y as n, Q as r, J as t
};
//# sourceMappingURL=57943189-dnp8ippr1ak5yv94.js.map