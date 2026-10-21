import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    U1 as t,
    c7 as n,
    k8 as r,
    l7 as i,
    q1 as a,
    q5 as o
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    Czt as m,
    HIt as h,
    LLt as g,
    XLt as _,
    YLt as v,
    ZLt as ee,
    _zt as y,
    rLt as te,
    wzt as ne
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    d as b,
    t as x
} from "./707eab0c-hnzftmd8o2cha32b.js";
import {
    a as S,
    c as C,
    o as w,
    t as T,
    x as E
} from "./4285e798-db8ayjk99ugt4omv.js";
import {
    At as re,
    Mt as D,
    Nt as O,
    St as ie,
    d as k,
    f as A,
    g as j,
    h as M,
    kt as N,
    u as P,
    yt as F
} from "./8e7d0a25-l7bd7mjhpj4tsyzi.js";
import {
    i as I,
    r as L
} from "./8b3bb541-ih3or4p5uk2qibu5.js";
import {
    a as R,
    f as z,
    g as B,
    i as V,
    m as H,
    p as U,
    r as W,
    t as ae
} from "./683259fe-e8z6cx6glyd0yuka.js";

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
    G = p(), v(), T(), N(), L(), D(), P(), m(), M(), U(), R(), H(), h(), r(), a(), x(), i(), f(), d(), W(), K = s(), q = `chatgpt-schedules-summary`, J = e => `slack-schedules-summary:${O(e)}`, Y = e => {
        "use forget";
        let r = (0, G.c)(41),
            {
                channelType: i
            } = e,
            a = t()?.normalizedAccountUserId ?? null,
            s = o(oe),
            c = o(se),
            d = o(ce),
            f;
        r[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = () => ne(y(), a), r[0] = f) : f = r[0];
        let p = o(f),
            m = j(),
            {
                deploymentId: h
            } = l(),
            {
                data: _
            } = te(s, `all_accessible`),
            v;
        r[1] !== d || r[2] !== h ? (v = d.find(e => e.deployment_id === h && re(e)) ?? null, r[1] = d, r[2] = h, r[3] = v) : v = r[3];
        let x = v,
            T;
        bb0: {
            if (i === `chatgpt`) {
                T = g;
                break bb0
            }
            let e;r[4] === x ? e = r[5] : (e = x == null ? void 0 : F(x) ?? void 0, r[4] = x, r[5] = e),
            T = e
        }
        let D = T,
            O;
        if (r[6] !== i || r[7] !== D || r[8] !== _) {
            bb1: {
                let e = B(_);
                if (i === `chatgpt`) {
                    O = e.filter(le).length;
                    break bb1
                }
                if (D == null) {
                    O = 0;
                    break bb1
                }
                let t;r[10] === D ? t = r[11] : (t = e => ee(e.trigger, D), r[10] = D, r[11] = t),
                O = e.filter(t).length
            }
            r[6] = i,
            r[7] = D,
            r[8] = _,
            r[9] = O
        }
        else O = r[9];
        let k = O,
            A;
        bb2: {
            if (i === `chatgpt`) {
                A = q;
                break bb2
            }
            let e;r[12] === x ? e = r[13] : (e = x == null ? void 0 : J(ie(x)), r[12] = x, r[13] = e),
            A = e
        }
        let M = A,
            N = i === `slack` && x != null && x.materialized_trigger_id == null,
            P = i !== `slack` || p,
            I = s == null || D == null,
            L = i === `slack` ? E.SLACK_CHANNEL : E.CHATGPT_CHANNEL,
            R = k > 0 && `text-info`,
            H;
        r[14] === R ? H = r[15] : (H = n(`size-5`, R), r[14] = R, r[15] = H);
        let U;
        r[16] === H ? U = r[17] : (U = (0, K.jsx)(ae, {
            scheduledCount: 0,
            className: H
        }), r[16] = H, r[17] = U);
        let W;
        r[18] === k ? W = r[19] : (W = k === 0 ? (0, K.jsx)(u, {
            ...Z.noSchedules
        }) : (0, K.jsx)(u, {
            ...Z.scheduleCount,
            values: {
                count: k
            }
        }), r[18] = k, r[19] = W);
        let Y;
        r[20] !== U || r[21] !== W ? (Y = (0, K.jsxs)(`div`, {
            className: `flex items-center gap-2.5`,
            children: [U, W]
        }), r[20] = U, r[21] = W, r[22] = Y) : Y = r[22];
        let Q;
        r[23] !== x || r[24] !== P || r[25] !== i || r[26] !== s || r[27] !== c || r[28] !== d || r[29] !== m || r[30] !== p || r[31] !== I || r[32] !== D || r[33] !== k || r[34] !== N || r[35] !== L ? (Q = P ? N ? (0, K.jsx)(X, {
            disabled: I,
            scheduledChannelCount: k,
            source: L
        }) : (0, K.jsx)(V, {
            agentName: c,
            gptId: s,
            hasPublishedAtLeastOnce: m,
            isCurrentUsersAgent: p,
            initialView: k > 0 ? `list` : `add`,
            runMode: `preview`,
            scheduleChannelBinding: D,
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
                            scheduleCount: k
                        },
                        ...x == null ? {} : {
                            slack: {
                                slackDeploymentId: x.deployment_id
                            }
                        }
                    })
                },
                children: (0, K.jsx)(u, {
                    ...k === 0 ? z.addScheduleMenuAction : Z.manageSchedules
                })
            })
        }) : null, r[23] = x, r[24] = P, r[25] = i, r[26] = s, r[27] = c, r[28] = d, r[29] = m, r[30] = p, r[31] = I, r[32] = D, r[33] = k, r[34] = N, r[35] = L, r[36] = Q) : Q = r[36];
        let $;
        return r[37] !== M || r[38] !== Y || r[39] !== Q ? ($ = (0, K.jsxs)(`div`, {
            className: `flex items-center justify-between`,
            "data-assistant-focus": M,
            children: [Y, Q]
        }), r[37] = M, r[38] = Y, r[39] = Q, r[40] = $) : $ = r[40], $
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
            } = k(),
            o = A(),
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
//# sourceMappingURL=c396e986-fax142blfz8l8nvy.js.map