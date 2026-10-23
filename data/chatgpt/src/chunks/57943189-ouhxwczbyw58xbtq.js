const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/7c365e29-nw312zwbbeezb4kb.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    CR as n,
    Cy as r,
    DU as i,
    ER as a,
    Oct as o,
    Rz as s,
    a2 as c,
    bR as l,
    j5 as u,
    jU as d,
    kU as f,
    my as p,
    o0 as m,
    o2 as h,
    py as g,
    q1 as _,
    vct as v,
    wy as y,
    zz as b
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as x,
    Nn as S,
    Q as C,
    Rn as w,
    cn as T,
    it as E,
    ln as D,
    wn as O,
    zn as k
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    MJ as A,
    jJ as j,
    rwn as M,
    swn as N
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Ai as P,
    Mi as F,
    ji as I,
    ki as L
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    r as R,
    t as z
} from "./3e72bb91-hg41mi03r0vmzlai.js";
import {
    t as B
} from "./7f56e65a-chxgis3ji79axflp.js";

function V() {
    let e = u(P),
        {
            data: t,
            isLoading: n
        } = d(v.CodexTrainingAllowed),
        {
            data: i
        } = d(v.TrainingAllowed),
        o = k(),
        c = a(l.isBusinessWorkspace),
        m = a(l.isTeamPlan),
        h = a(l.isEduPlan),
        _ = f();
    return (0, H.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, H.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, H.jsx)(S, {
                id: `wham.modelTrainingSettingsRow.modelTraining`,
                defaultMessage: `Model improvement`
            })
        }), e && (0, H.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, H.jsx)(I, {})
        }), n ? (0, H.jsx)(`div`, {
            className: `flex items-center justify-center pt-4`,
            children: (0, H.jsx)(s, {
                className: `icon me-1.5`
            })
        }) : c ? (0, H.jsx)(`div`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, H.jsx)(S, {
                ...m ? {
                    id: `settingsModal.chatTrainingTeamsTooltip`,
                    defaultMessage: `ChatGPT Business automatically disables training.`,
                    description: `Tooltip for the disabled chat training toggle.`
                } : h ? {
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
                children: i ? (0, H.jsx)(S, {
                    id: `h0CRL1`,
                    defaultMessage: `Model improvement is enabled in <settingsLink>ChatGPT data controls</settingsLink>. Your tasks can be used to improve Codex.`,
                    values: {
                        settingsLink: e => (0, H.jsx)(E, {
                            to: r(g.DataControls),
                            className: `ms-1 underline`,
                            children: e
                        })
                    }
                }) : (0, H.jsx)(S, {
                    id: `/kZNls`,
                    defaultMessage: `Training is disabled. Access your ChatGPT data controls <settingsLink>here</settingsLink>.`,
                    values: {
                        settingsLink: e => (0, H.jsx)(E, {
                            to: r(g.DataControls),
                            className: `ms-1 underline`,
                            "aria-label": o.formatMessage({
                                id: `wham.modelTrainingSettingsRow.settingsLinkAriaLabel`,
                                defaultMessage: `Link to ChatGPT data controls settings page`
                            }),
                            children: e
                        })
                    }
                })
            }), (0, H.jsx)(`div`, {
                className: `mt-3 w-full text-sm`,
                children: (0, H.jsx)(p, {
                    label: o.formatMessage({
                        id: `wham.modelTrainingSettingsRow.allowTraining`,
                        defaultMessage: `Include environments`
                    }),
                    enabled: !!t,
                    ariaLabel: o.formatMessage({
                        id: `wham.modelTrainingSettingsRow.allowTrainingAriaLabel`,
                        defaultMessage: `Toggle to include environments in model training data`
                    }),
                    centerToggleVertically: !0,
                    description: (0, H.jsx)(`span`, {
                        className: `text-token-text-secondary block max-w-[30rem] text-xs leading-5`,
                        children: (0, H.jsx)(S, {
                            id: `wham.modelTrainingSettingsRow.disclaimer`,
                            defaultMessage: `Allow additional context from your Codex environments to help improve our models. We take steps to protect your privacy. <link>Learn more</link>.`,
                            values: {
                                link: e => (0, H.jsx)(`a`, {
                                    href: `https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance`,
                                    target: `_blank`,
                                    className: `underline`,
                                    rel: `noopener noreferrer`,
                                    "aria-label": o.formatMessage({
                                        id: `wham.modelTrainingSettingsRow.learnMoreAriaLabel`,
                                        defaultMessage: `Link to learn more about model improvement and privacy settings`
                                    }),
                                    children: e
                                })
                            }
                        })
                    }),
                    onChange: e => {
                        j.recordDataCheckToggle(e), _.mutate({
                            setting: v.CodexTrainingAllowed,
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
        i(), o(), F(), L(), t(), y(), b(), n(), A(), w(), C(), H = x()
    })),
    W, G = e((() => {
        h(), D(), W = c(() => T(() => import(`./7c365e29-nw312zwbbeezb4kb.js`).then(e => e.PrismaAirsGuardrailsSettings), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
    }));

function K() {
    return null
}

function q() {
    return (0, Z.jsx)(`div`, {
        className: `border-token-border-heavy flex items-center border-b`,
        children: (0, Z.jsx)(`div`, {
            className: `py-2 text-xl leading-7 font-medium`,
            children: (0, Z.jsx)(S, {
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
        t = m(),
        n;
    e[0] === t ? n = e[1] : (n = t?.getWorkspaceId() != null && t.data.role != null && M(t.data.role), e[0] = t, e[1] = n);
    let r = n,
        i;
    e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Z.jsx)(`div`, {
        className: `pt-4`,
        children: (0, Z.jsx)(V, {})
    }), e[2] = i) : i = e[2];
    let a;
    e[3] === r ? a = e[4] : (a = r ? (0, Z.jsx)(W, {}) : null, e[3] = r, e[4] = a);
    let o;
    return e[5] === a ? o = e[6] : (o = (0, Z.jsxs)(J, {
        children: [i, a]
    }), e[5] = a, e[6] = o), o
}
var X, Z, Q = e((() => {
    X = O(), N(), _(), R(), U(), G(), B(), w(), Z = x()
}));
export {
    Y as n, Q as r, J as t
};
//# sourceMappingURL=57943189-ouhxwczbyw58xbtq.js.map