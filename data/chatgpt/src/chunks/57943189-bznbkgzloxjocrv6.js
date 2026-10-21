const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/7c365e29-nsrdgq2nimir6ywj.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-t80q9ew944ej0mgk.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ocicxxw6jegn4vux.js", "assets/30901919-r9pahacmzqudnt4f.js", "assets/c470f5ab-py8gip6x11wq9s88.js", "assets/0e5afe53-bfccq9og5d2mon04.js", "assets/conversation-small-ht8gwtl7.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CR as t,
    Cy as n,
    DU as r,
    ER as i,
    Rz as a,
    a2 as o,
    bR as s,
    cct as c,
    jU as l,
    k8 as u,
    kU as d,
    my as f,
    o0 as p,
    o2 as m,
    py as h,
    q1 as g,
    q5 as _,
    vct as v,
    wy as y,
    zz as b
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    AJ as A,
    PCn as j,
    RCn as M,
    jJ as N
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Ai as P,
    Mi as F,
    ji as I,
    ki as L
} from "./c2675c8c-p3x4d0bnf7e77o1n.js";
import {
    r as R,
    t as z
} from "./3e72bb91-bcwf3koikkwl9bye.js";
import {
    t as B
} from "./7f56e65a-chxgis3ji79axflp.js";

function V() {
    let e = _(P),
        {
            data: t,
            isLoading: r
        } = l(c.CodexTrainingAllowed),
        {
            data: o
        } = l(c.TrainingAllowed),
        u = k(),
        p = i(s.isBusinessWorkspace),
        m = i(s.isTeamPlan),
        g = i(s.isEduPlan),
        v = d();
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
        }), r ? (0, H.jsx)(`div`, {
            className: `flex items-center justify-center pt-4`,
            children: (0, H.jsx)(a, {
                className: `icon me-1.5`
            })
        }) : p ? (0, H.jsx)(`div`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, H.jsx)(S, {
                ...m ? {
                    id: `settingsModal.chatTrainingTeamsTooltip`,
                    defaultMessage: `ChatGPT Business automatically disables training.`,
                    description: `Tooltip for the disabled chat training toggle.`
                } : g ? {
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
                children: o ? (0, H.jsx)(S, {
                    id: `h0CRL1`,
                    defaultMessage: `Model improvement is enabled in <settingsLink>ChatGPT data controls</settingsLink>. Your tasks can be used to improve Codex.`,
                    values: {
                        settingsLink: e => (0, H.jsx)(E, {
                            to: n(h.DataControls),
                            className: `ms-1 underline`,
                            children: e
                        })
                    }
                }) : (0, H.jsx)(S, {
                    id: `/kZNls`,
                    defaultMessage: `Training is disabled. Access your ChatGPT data controls <settingsLink>here</settingsLink>.`,
                    values: {
                        settingsLink: e => (0, H.jsx)(E, {
                            to: n(h.DataControls),
                            className: `ms-1 underline`,
                            "aria-label": u.formatMessage({
                                id: `wham.modelTrainingSettingsRow.settingsLinkAriaLabel`,
                                defaultMessage: `Link to ChatGPT data controls settings page`
                            }),
                            children: e
                        })
                    }
                })
            }), (0, H.jsx)(`div`, {
                className: `mt-3 w-full text-sm`,
                children: (0, H.jsx)(f, {
                    label: u.formatMessage({
                        id: `wham.modelTrainingSettingsRow.allowTraining`,
                        defaultMessage: `Include environments`
                    }),
                    enabled: !!t,
                    ariaLabel: u.formatMessage({
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
                                    "aria-label": u.formatMessage({
                                        id: `wham.modelTrainingSettingsRow.learnMoreAriaLabel`,
                                        defaultMessage: `Link to learn more about model improvement and privacy settings`
                                    }),
                                    children: e
                                })
                            }
                        })
                    }),
                    onChange: e => {
                        A.recordDataCheckToggle(e), v.mutate({
                            setting: c.CodexTrainingAllowed,
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
        r(), v(), F(), L(), u(), y(), b(), t(), N(), w(), C(), H = x()
    })),
    W, G = e((() => {
        m(), D(), W = o(() => T(() => import(`./7c365e29-nsrdgq2nimir6ywj.js`).then(e => e.PrismaAirsGuardrailsSettings), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
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
        t = p(),
        n;
    e[0] === t ? n = e[1] : (n = t?.getWorkspaceId() != null && t.data.role != null && j(t.data.role), e[0] = t, e[1] = n);
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
    X = O(), M(), g(), R(), U(), G(), B(), w(), Z = x()
}));
export {
    Y as n, Q as r, J as t
};
//# sourceMappingURL=57943189-bznbkgzloxjocrv6.js.map