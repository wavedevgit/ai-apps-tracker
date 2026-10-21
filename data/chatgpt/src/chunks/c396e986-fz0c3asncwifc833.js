import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    I1 as t,
    J5 as n,
    M1 as r,
    M5 as i,
    m8 as a,
    q5 as o
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as s,
    Pn as c,
    Rn as l,
    Rt as u,
    Tn as d,
    Vn as f,
    zn as p
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    QLt as ee,
    RLt as te,
    Tzt as m,
    UIt as h,
    XLt as g,
    ZLt as _,
    iLt as ne,
    vzt as v,
    wzt as y
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    d as b,
    t as x
} from "./707eab0c-hquix1of0ixypvkq.js";
import {
    a as S,
    c as C,
    o as w,
    t as T,
    x as E
} from "./4285e798-fz6qvtcc03ci3y1q.js";
import {
    At as re,
    Mt as D,
    Nt as O,
    St as k,
    d as A,
    f as j,
    g as ie,
    h as M,
    kt as N,
    u as P,
    yt as F
} from "./8e7d0a25-c4oex49jr20n6c3r.js";
import {
    i as I,
    r as L
} from "./8b3bb541-jwu1nty0ubd85b5w.js";
import {
    a as R,
    f as z,
    g as B,
    i as V,
    m as H,
    p as U,
    r as W,
    t as ae
} from "./683259fe-iubs9uomngqpnv9j.js";

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
    return _(e.trigger)
}
var G, K, q, J, Y, X, Z, Q = e((() => {
    G = d(), g(), T(), N(), L(), D(), P(), y(), M(), U(), R(), H(), h(), a(), t(), x(), n(), p(), s(), W(), K = f(), q = `chatgpt-schedules-summary`, J = e => `slack-schedules-summary:${O(e)}`, Y = e => {
        "use forget";
        let t = (0, G.c)(41),
            {
                channelType: n
            } = e,
            a = r()?.normalizedAccountUserId ?? null,
            s = i(oe),
            l = i(se),
            d = i(ce),
            f;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = () => m(v(), a), t[0] = f) : f = t[0];
        let p = i(f),
            h = ie(),
            {
                deploymentId: g
            } = u(),
            {
                data: _
            } = ne(s, `all_accessible`),
            y;
        t[1] !== d || t[2] !== g ? (y = d.find(e => e.deployment_id === g && re(e)) ?? null, t[1] = d, t[2] = g, t[3] = y) : y = t[3];
        let x = y,
            T;
        bb0: {
            if (n === `chatgpt`) {
                T = te;
                break bb0
            }
            let e;t[4] === x ? e = t[5] : (e = x == null ? void 0 : F(x) ?? void 0, t[4] = x, t[5] = e),
            T = e
        }
        let D = T,
            O;
        if (t[6] !== n || t[7] !== D || t[8] !== _) {
            bb1: {
                let e = B(_);
                if (n === `chatgpt`) {
                    O = e.filter(le).length;
                    break bb1
                }
                if (D == null) {
                    O = 0;
                    break bb1
                }
                let r;t[10] === D ? r = t[11] : (r = e => ee(e.trigger, D), t[10] = D, t[11] = r),
                O = e.filter(r).length
            }
            t[6] = n,
            t[7] = D,
            t[8] = _,
            t[9] = O
        }
        else O = t[9];
        let A = O,
            j;
        bb2: {
            if (n === `chatgpt`) {
                j = q;
                break bb2
            }
            let e;t[12] === x ? e = t[13] : (e = x == null ? void 0 : J(k(x)), t[12] = x, t[13] = e),
            j = e
        }
        let M = j,
            N = n === `slack` && x != null && x.materialized_trigger_id == null,
            P = n !== `slack` || p,
            I = s == null || D == null,
            L = n === `slack` ? E.SLACK_CHANNEL : E.CHATGPT_CHANNEL,
            R = A > 0 && `text-info`,
            H;
        t[14] === R ? H = t[15] : (H = o(`size-5`, R), t[14] = R, t[15] = H);
        let U;
        t[16] === H ? U = t[17] : (U = (0, K.jsx)(ae, {
            scheduledCount: 0,
            className: H
        }), t[16] = H, t[17] = U);
        let W;
        t[18] === A ? W = t[19] : (W = A === 0 ? (0, K.jsx)(c, {
            ...Z.noSchedules
        }) : (0, K.jsx)(c, {
            ...Z.scheduleCount,
            values: {
                count: A
            }
        }), t[18] = A, t[19] = W);
        let Y;
        t[20] !== U || t[21] !== W ? (Y = (0, K.jsxs)(`div`, {
            className: `flex items-center gap-2.5`,
            children: [U, W]
        }), t[20] = U, t[21] = W, t[22] = Y) : Y = t[22];
        let Q;
        t[23] !== x || t[24] !== P || t[25] !== n || t[26] !== s || t[27] !== l || t[28] !== d || t[29] !== h || t[30] !== p || t[31] !== I || t[32] !== D || t[33] !== A || t[34] !== N || t[35] !== L ? (Q = P ? N ? (0, K.jsx)(X, {
            disabled: I,
            scheduledChannelCount: A,
            source: L
        }) : (0, K.jsx)(V, {
            agentName: l,
            gptId: s,
            hasPublishedAtLeastOnce: h,
            isCurrentUsersAgent: p,
            initialView: A > 0 ? `list` : `add`,
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
                            channelType: n === `slack` ? C.SLACK : C.CHATGPT,
                            scheduleCount: A
                        },
                        ...x == null ? {} : {
                            slack: {
                                slackDeploymentId: x.deployment_id
                            }
                        }
                    })
                },
                children: (0, K.jsx)(c, {
                    ...A === 0 ? z.addScheduleMenuAction : Z.manageSchedules
                })
            })
        }) : null, t[23] = x, t[24] = P, t[25] = n, t[26] = s, t[27] = l, t[28] = d, t[29] = h, t[30] = p, t[31] = I, t[32] = D, t[33] = A, t[34] = N, t[35] = L, t[36] = Q) : Q = t[36];
        let $;
        return t[37] !== M || t[38] !== Y || t[39] !== Q ? ($ = (0, K.jsxs)(`div`, {
            className: `flex items-center justify-between`,
            "data-assistant-focus": M,
            children: [Y, Q]
        }), t[37] = M, t[38] = Y, t[39] = Q, t[40] = $) : $ = t[40], $
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
            } = A(),
            o = j(),
            s = n || a,
            l;
        t[0] !== o.numChangesToPublish || t[1] !== i ? (l = () => {
            S({
                actionType: w.PUBLISH_BEFORE_SCHEDULING,
                source: i,
                publish: {
                    changeCount: o.numChangesToPublish
                }
            }), I({
                promptToPublish: {
                    actionLabel: (0, K.jsx)(c, {
                        ...Z.applyChanges
                    }),
                    description: (0, K.jsx)(c, {
                        ...Z.publishBeforeScheduling
                    })
                }
            })
        }, t[0] = o.numChangesToPublish, t[1] = i, t[2] = l) : l = t[2];
        let u = r === 0 ? z.addScheduleMenuAction : Z.manageSchedules,
            d;
        t[3] === u ? d = t[4] : (d = (0, K.jsx)(c, {
            ...u
        }), t[3] = u, t[4] = d);
        let f;
        return t[5] !== a || t[6] !== s || t[7] !== l || t[8] !== d ? (f = (0, K.jsx)(b, {
            type: `button`,
            color: `primary`,
            variant: `solid`,
            size: `lg`,
            pill: !0,
            disabled: s,
            loading: a,
            onClick: l,
            children: d
        }), t[5] = a, t[6] = s, t[7] = l, t[8] = d, t[9] = f) : f = t[9], f
    }, Z = l({
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
//# sourceMappingURL=c396e986-fz0c3asncwifc833.js.map