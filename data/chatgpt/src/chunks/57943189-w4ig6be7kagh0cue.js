const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/7c365e29-ila711af00wpeo4b.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-lxa3wniynbx9ka2a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-kzsalymynzuddxee.js", "assets/30901919-i8ip8r0znvgcym38.js", "assets/c470f5ab-poh7ivjvb3j2jlfz.js", "assets/0e5afe53-dz59mkfveu52getp.js", "assets/conversation-small-bwtqiuwj.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AU as t,
    Cy as n,
    MU as r,
    Mz as i,
    P5 as a,
    PU as o,
    R1 as s,
    Sy as c,
    X0 as l,
    Xst as u,
    Z0 as d,
    Z1 as f,
    fy as p,
    g8 as m,
    hR as h,
    jz as g,
    oct as _,
    py as v,
    vR as y,
    xR as b
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
    TCn as j,
    jJ as M,
    xCn as N
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    Ai as P,
    Mi as F,
    ji as I,
    ki as L
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    r as R,
    t as z
} from "./3e72bb91-l7qrdevu41zb70ky.js";
import {
    t as B
} from "./7f56e65a-chxgis3ji79axflp.js";

function V() {
    let e = a(P),
        {
            data: t,
            isLoading: n
        } = o(u.CodexTrainingAllowed),
        {
            data: i
        } = o(u.TrainingAllowed),
        s = k(),
        l = b(h.isBusinessWorkspace),
        d = b(h.isTeamPlan),
        f = b(h.isEduPlan),
        m = r();
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
            children: (0, H.jsx)(g, {
                className: `icon me-1.5`
            })
        }) : l ? (0, H.jsx)(`div`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, H.jsx)(S, {
                ...d ? {
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
                children: i ? (0, H.jsx)(S, {
                    id: `h0CRL1`,
                    defaultMessage: `Model improvement is enabled in <settingsLink>ChatGPT data controls</settingsLink>. Your tasks can be used to improve Codex.`,
                    values: {
                        settingsLink: e => (0, H.jsx)(E, {
                            to: c(p.DataControls),
                            className: `ms-1 underline`,
                            children: e
                        })
                    }
                }) : (0, H.jsx)(S, {
                    id: `/kZNls`,
                    defaultMessage: `Training is disabled. Access your ChatGPT data controls <settingsLink>here</settingsLink>.`,
                    values: {
                        settingsLink: e => (0, H.jsx)(E, {
                            to: c(p.DataControls),
                            className: `ms-1 underline`,
                            "aria-label": s.formatMessage({
                                id: `wham.modelTrainingSettingsRow.settingsLinkAriaLabel`,
                                defaultMessage: `Link to ChatGPT data controls settings page`
                            }),
                            children: e
                        })
                    }
                })
            }), (0, H.jsx)(`div`, {
                className: `mt-3 w-full text-sm`,
                children: (0, H.jsx)(v, {
                    label: s.formatMessage({
                        id: `wham.modelTrainingSettingsRow.allowTraining`,
                        defaultMessage: `Include environments`
                    }),
                    enabled: !!t,
                    ariaLabel: s.formatMessage({
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
                                    "aria-label": s.formatMessage({
                                        id: `wham.modelTrainingSettingsRow.learnMoreAriaLabel`,
                                        defaultMessage: `Link to learn more about model improvement and privacy settings`
                                    }),
                                    children: e
                                })
                            }
                        })
                    }),
                    onChange: e => {
                        M.recordDataCheckToggle(e), m.mutate({
                            setting: u.CodexTrainingAllowed,
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
        t(), _(), F(), L(), m(), n(), i(), y(), A(), w(), C(), H = x()
    })),
    W, G = e((() => {
        d(), D(), W = l(() => T(() => import(`./7c365e29-ila711af00wpeo4b.js`).then(e => e.PrismaAirsGuardrailsSettings), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
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
        t = f(),
        n;
    e[0] === t ? n = e[1] : (n = t?.getWorkspaceId() != null && t.data.role != null && N(t.data.role), e[0] = t, e[1] = n);
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
    X = O(), j(), s(), R(), U(), G(), B(), w(), Z = x()
}));
export {
    Y as n, Q as r, J as t
};
//# sourceMappingURL=57943189-w4ig6be7kagh0cue.js.map