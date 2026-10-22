import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    P1 as t,
    P5 as n,
    R1 as r,
    X5 as i,
    Y5 as a,
    g8 as o
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as s,
    Ln as c,
    Lt as l,
    Nn as u,
    Q as d,
    Rn as f,
    wn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Azt as m,
    WLt as ee,
    YIt as h,
    iRt as te,
    jzt as ne,
    nRt as g,
    rRt as _,
    uLt as v,
    wzt as y
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    d as b,
    t as x
} from "./707eab0c-fwyop6b3ijt0i6j7.js";
import {
    a as S,
    c as C,
    o as w,
    t as T,
    x as E
} from "./4285e798-d12vw91yd8v2awo6.js";
import {
    At as D,
    Mt as O,
    Nt as k,
    St as A,
    d as j,
    f as M,
    g as re,
    h as N,
    kt as P,
    u as F,
    yt as ie
} from "./8e7d0a25-ep4dwm1n9g5w5jjr.js";
import {
    i as I,
    r as L
} from "./8b3bb541-cbbxsn5is5fdjit5.js";
import {
    a as R,
    f as z,
    g as B,
    i as V,
    m as H,
    p as U,
    r as W,
    t as ae
} from "./683259fe-ljk1ux2n8bkvhs96.js";

function oe() {
    return y().currentGpt.id
}

function se() {
    return y().currentGpt.name
}

function ce() {
    return y().currentGpt.deployments.slack
}

function le(e) {
    return _(e.trigger)
}
var G, K, q, J, Y, X, Z, Q = e((() => {
    G = p(), g(), T(), P(), L(), O(), F(), m(), N(), U(), R(), H(), h(), o(), r(), x(), i(), f(), d(), W(), K = s(), q = `chatgpt-schedules-summary`, J = e => `slack-schedules-summary:${k(e)}`, Y = e => {
        "use forget";
        let r = (0, G.c)(41),
            {
                channelType: i
            } = e,
            o = t()?.normalizedAccountUserId ?? null,
            s = n(oe),
            c = n(se),
            d = n(ce),
            f;
        r[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = () => ne(y(), o), r[0] = f) : f = r[0];
        let p = n(f),
            m = re(),
            {
                deploymentId: h
            } = l(),
            {
                data: g
            } = v(s, `all_accessible`),
            _;
        r[1] !== d || r[2] !== h ? (_ = d.find(e => e.deployment_id === h && D(e)) ?? null, r[1] = d, r[2] = h, r[3] = _) : _ = r[3];
        let x = _,
            T;
        bb0: {
            if (i === `chatgpt`) {
                T = ee;
                break bb0
            }
            let e;r[4] === x ? e = r[5] : (e = x == null ? void 0 : ie(x) ?? void 0, r[4] = x, r[5] = e),
            T = e
        }
        let O = T,
            k;
        if (r[6] !== i || r[7] !== O || r[8] !== g) {
            bb1: {
                let e = B(g);
                if (i === `chatgpt`) {
                    k = e.filter(le).length;
                    break bb1
                }
                if (O == null) {
                    k = 0;
                    break bb1
                }
                let t;r[10] === O ? t = r[11] : (t = e => te(e.trigger, O), r[10] = O, r[11] = t),
                k = e.filter(t).length
            }
            r[6] = i,
            r[7] = O,
            r[8] = g,
            r[9] = k
        }
        else k = r[9];
        let j = k,
            M;
        bb2: {
            if (i === `chatgpt`) {
                M = q;
                break bb2
            }
            let e;r[12] === x ? e = r[13] : (e = x == null ? void 0 : J(A(x)), r[12] = x, r[13] = e),
            M = e
        }
        let N = M,
            P = i === `slack` && x != null && x.materialized_trigger_id == null,
            F = i !== `slack` || p,
            I = s == null || O == null,
            L = i === `slack` ? E.SLACK_CHANNEL : E.CHATGPT_CHANNEL,
            R = j > 0 && `text-info`,
            H;
        r[14] === R ? H = r[15] : (H = a(`size-5`, R), r[14] = R, r[15] = H);
        let U;
        r[16] === H ? U = r[17] : (U = (0, K.jsx)(ae, {
            scheduledCount: 0,
            className: H
        }), r[16] = H, r[17] = U);
        let W;
        r[18] === j ? W = r[19] : (W = j === 0 ? (0, K.jsx)(u, {
            ...Z.noSchedules
        }) : (0, K.jsx)(u, {
            ...Z.scheduleCount,
            values: {
                count: j
            }
        }), r[18] = j, r[19] = W);
        let Y;
        r[20] !== U || r[21] !== W ? (Y = (0, K.jsxs)(`div`, {
            className: `flex items-center gap-2.5`,
            children: [U, W]
        }), r[20] = U, r[21] = W, r[22] = Y) : Y = r[22];
        let Q;
        r[23] !== x || r[24] !== F || r[25] !== i || r[26] !== s || r[27] !== c || r[28] !== d || r[29] !== m || r[30] !== p || r[31] !== I || r[32] !== O || r[33] !== j || r[34] !== P || r[35] !== L ? (Q = F ? P ? (0, K.jsx)(X, {
            disabled: I,
            scheduledChannelCount: j,
            source: L
        }) : (0, K.jsx)(V, {
            agentName: c,
            gptId: s,
            hasPublishedAtLeastOnce: m,
            isCurrentUsersAgent: p,
            initialView: j > 0 ? `list` : `add`,
            runMode: `preview`,
            scheduleChannelBinding: O,
            slackDeployments: d,
            triggerScope: `all_accessible`,
            children: (0, K.jsx)(b, {
                color: `primary`,
                variant: `soft`,
                size: `lg`,
                gutterSize: `sm`,
                pill: !0,
                disabled: I,
                onClick: () => {
                    S({
                        actionType: w.SCHEDULES_MODAL_OPEN,
                        source: L,
                        schedule: {
                            channelType: i === `slack` ? C.SLACK : C.CHATGPT,
                            scheduleCount: j
                        },
                        ...x == null ? {} : {
                            slack: {
                                slackDeploymentId: x.deployment_id
                            }
                        }
                    })
                },
                children: (0, K.jsx)(u, {
                    ...j === 0 ? z.addScheduleMenuAction : Z.manageSchedules
                })
            })
        }) : null, r[23] = x, r[24] = F, r[25] = i, r[26] = s, r[27] = c, r[28] = d, r[29] = m, r[30] = p, r[31] = I, r[32] = O, r[33] = j, r[34] = P, r[35] = L, r[36] = Q) : Q = r[36];
        let $;
        return r[37] !== N || r[38] !== Y || r[39] !== Q ? ($ = (0, K.jsxs)(`div`, {
            className: `flex items-center justify-between`,
            "data-assistant-focus": N,
            children: [Y, Q]
        }), r[37] = N, r[38] = Y, r[39] = Q, r[40] = $) : $ = r[40], $
    }, X = e => {
        "use forget";
        let t = (0, G.c)(10),
            {
                disabled: n,
                scheduledChannelCount: r,
                source: i
            } = e,
            {
                isPending: a
            } = j(),
            o = M(),
            s = n || a,
            c;
        t[0] !== o.numChangesToPublish || t[1] !== i ? (c = () => {
            S({
                actionType: w.PUBLISH_BEFORE_SCHEDULING,
                source: i,
                publish: {
                    changeCount: o.numChangesToPublish
                }
            }), I({
                promptToPublish: {
                    actionLabel: (0, K.jsx)(u, {
                        ...Z.applyChanges
                    }),
                    description: (0, K.jsx)(u, {
                        ...Z.publishBeforeScheduling
                    })
                }
            })
        }, t[0] = o.numChangesToPublish, t[1] = i, t[2] = c) : c = t[2];
        let l = r === 0 ? z.addScheduleMenuAction : Z.manageSchedules,
            d;
        t[3] === l ? d = t[4] : (d = (0, K.jsx)(u, {
            ...l
        }), t[3] = l, t[4] = d);
        let f;
        return t[5] !== a || t[6] !== s || t[7] !== c || t[8] !== d ? (f = (0, K.jsx)(b, {
            type: `button`,
            color: `primary`,
            variant: `solid`,
            size: `lg`,
            pill: !0,
            disabled: s,
            loading: a,
            onClick: c,
            children: d
        }), t[5] = a, t[6] = s, t[7] = c, t[8] = d, t[9] = f) : f = t[9], f
    }, Z = c({
        noSchedules: {
            id: `Hermes.GptStudio.Schedules.ChannelSummary.noSchedules`,
            defaultMessage: `No automations`
        },
        scheduleCount: {
            id: `Hermes.GptStudio.Schedules.ChannelSummary.scheduleCount`,
            defaultMessage: `{count, plural, one {# automation} other {# automations}}`
        },
        manageSchedules: {
            id: `Hermes.GptStudio.Schedules.ChannelSummary.manageSchedules`,
            defaultMessage: `Manage automations`
        },
        applyChanges: {
            id: `Hermes.GptStudio.Schedules.ChannelSummary.applyChanges`,
            defaultMessage: `Apply changes`
        },
        publishBeforeScheduling: {
            id: `Hermes.GptStudio.Schedules.ChannelSummary.publishBeforeScheduling`,
            defaultMessage: `Apply all pending changes to modify automations for this channel.`
        }
    })
}));
export {
    Q as i, Y as n, J as r, q as t
};
//# sourceMappingURL=c396e986-clrebiqo13fcpmao.js.map