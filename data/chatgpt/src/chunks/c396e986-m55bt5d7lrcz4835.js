import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    K5 as n,
    U1 as r,
    j5 as i,
    q1 as a,
    q5 as o
} from "./4813494d-mdvd4786a87166cc.js";
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
    $It as ee,
    JLt as te,
    KLt as m,
    PLt as h,
    RIt as g,
    bzt as _,
    mzt as v,
    qLt as y,
    xzt as ne
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    d as b,
    t as x
} from "./707eab0c-iv8ek9kc5qu6c0ky.js";
import {
    a as S,
    c as C,
    o as w,
    t as T,
    x as E
} from "./4285e798-jmweay4m4zvq8jkw.js";
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
    yt as I
} from "./8e7d0a25-5w3ub90bjwjvii11.js";
import {
    i as L,
    r as R
} from "./8b3bb541-ndkduxm6tfa8ar5f.js";
import {
    a as z,
    f as B,
    g as V,
    i as ie,
    m as H,
    p as U,
    r as W,
    t as ae
} from "./683259fe-k9iucghw9536chj2.js";

function oe() {
    return v().currentGpt.id
}

function se() {
    return v().currentGpt.name
}

function ce() {
    return v().currentGpt.deployments.slack
}

function le(e) {
    return y(e.trigger)
}
var G, K, q, J, Y, X, Z, Q = e((() => {
    G = p(), m(), T(), P(), R(), O(), F(), _(), N(), U(), z(), H(), g(), t(), a(), x(), o(), f(), d(), W(), K = s(), q = `chatgpt-schedules-summary`, J = e => `slack-schedules-summary:${k(e)}`, Y = e => {
        "use forget";
        let t = (0, G.c)(41),
            {
                channelType: a
            } = e,
            o = r()?.normalizedAccountUserId ?? null,
            s = i(oe),
            c = i(se),
            d = i(ce),
            f;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = () => ne(v(), o), t[0] = f) : f = t[0];
        let p = i(f),
            m = re(),
            {
                deploymentId: g
            } = l(),
            {
                data: _
            } = ee(s, `all_accessible`),
            y;
        t[1] !== d || t[2] !== g ? (y = d.find(e => e.deployment_id === g && D(e)) ?? null, t[1] = d, t[2] = g, t[3] = y) : y = t[3];
        let x = y,
            T;
        bb0: {
            if (a === `chatgpt`) {
                T = h;
                break bb0
            }
            let e;t[4] === x ? e = t[5] : (e = x == null ? void 0 : I(x) ?? void 0, t[4] = x, t[5] = e),
            T = e
        }
        let O = T,
            k;
        if (t[6] !== a || t[7] !== O || t[8] !== _) {
            bb1: {
                let e = V(_);
                if (a === `chatgpt`) {
                    k = e.filter(le).length;
                    break bb1
                }
                if (O == null) {
                    k = 0;
                    break bb1
                }
                let n;t[10] === O ? n = t[11] : (n = e => te(e.trigger, O), t[10] = O, t[11] = n),
                k = e.filter(n).length
            }
            t[6] = a,
            t[7] = O,
            t[8] = _,
            t[9] = k
        }
        else k = t[9];
        let j = k,
            M;
        bb2: {
            if (a === `chatgpt`) {
                M = q;
                break bb2
            }
            let e;t[12] === x ? e = t[13] : (e = x == null ? void 0 : J(A(x)), t[12] = x, t[13] = e),
            M = e
        }
        let N = M,
            P = a === `slack` && x != null && x.materialized_trigger_id == null,
            F = a !== `slack` || p,
            L = s == null || O == null,
            R = a === `slack` ? E.SLACK_CHANNEL : E.CHATGPT_CHANNEL,
            z = j > 0 && `text-info`,
            H;
        t[14] === z ? H = t[15] : (H = n(`size-5`, z), t[14] = z, t[15] = H);
        let U;
        t[16] === H ? U = t[17] : (U = (0, K.jsx)(ae, {
            scheduledCount: 0,
            className: H
        }), t[16] = H, t[17] = U);
        let W;
        t[18] === j ? W = t[19] : (W = j === 0 ? (0, K.jsx)(u, {
            ...Z.noSchedules
        }) : (0, K.jsx)(u, {
            ...Z.scheduleCount,
            values: {
                count: j
            }
        }), t[18] = j, t[19] = W);
        let Y;
        t[20] !== U || t[21] !== W ? (Y = (0, K.jsxs)(`div`, {
            className: `flex items-center gap-2.5`,
            children: [U, W]
        }), t[20] = U, t[21] = W, t[22] = Y) : Y = t[22];
        let Q;
        t[23] !== x || t[24] !== F || t[25] !== a || t[26] !== s || t[27] !== c || t[28] !== d || t[29] !== m || t[30] !== p || t[31] !== L || t[32] !== O || t[33] !== j || t[34] !== P || t[35] !== R ? (Q = F ? P ? (0, K.jsx)(X, {
            disabled: L,
            scheduledChannelCount: j,
            source: R
        }) : (0, K.jsx)(ie, {
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
                disabled: L,
                onClick: () => {
                    S({
                        actionType: w.SCHEDULES_MODAL_OPEN,
                        source: R,
                        schedule: {
                            channelType: a === `slack` ? C.SLACK : C.CHATGPT,
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
                    ...j === 0 ? B.addScheduleMenuAction : Z.manageSchedules
                })
            })
        }) : null, t[23] = x, t[24] = F, t[25] = a, t[26] = s, t[27] = c, t[28] = d, t[29] = m, t[30] = p, t[31] = L, t[32] = O, t[33] = j, t[34] = P, t[35] = R, t[36] = Q) : Q = t[36];
        let $;
        return t[37] !== N || t[38] !== Y || t[39] !== Q ? ($ = (0, K.jsxs)(`div`, {
            className: `flex items-center justify-between`,
            "data-assistant-focus": N,
            children: [Y, Q]
        }), t[37] = N, t[38] = Y, t[39] = Q, t[40] = $) : $ = t[40], $
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
            }), L({
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
        let l = r === 0 ? B.addScheduleMenuAction : Z.manageSchedules,
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
//# sourceMappingURL=c396e986-m55bt5d7lrcz4835.js.map