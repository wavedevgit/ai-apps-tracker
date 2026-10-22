import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    J5 as n,
    U1 as r,
    l7 as i,
    q1 as a,
    u7 as o
} from "./4813494d-d7xm9wsvhdfbag9a.js";
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
    $Lt as m,
    Dzt as h,
    GIt as g,
    Ozt as ee,
    VLt as te,
    eRt as _,
    oLt as ne,
    tRt as re,
    xzt as v
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    d as y,
    t as b
} from "./707eab0c-gri10pp28kmmyx2c.js";
import {
    a as x,
    c as S,
    o as C,
    t as w,
    x as T
} from "./4285e798-j46duup4je4kn2k3.js";
import {
    At as ie,
    Mt as E,
    Nt as D,
    St as ae,
    d as O,
    f as k,
    g as oe,
    h as A,
    kt as j,
    u as M,
    yt as se
} from "./8e7d0a25-lil60ls70b75jmqj.js";
import {
    i as N,
    r as P
} from "./8b3bb541-lqrj60keptzjkwtl.js";
import {
    a as F,
    f as I,
    g as ce,
    i as le,
    m as L,
    p as R,
    r as z,
    t as B
} from "./683259fe-gj4kel6wa63ukez9.js";

function V() {
    return v().currentGpt.id
}

function H() {
    return v().currentGpt.name
}

function U() {
    return v().currentGpt.deployments.slack
}

function W(e) {
    return _(e.trigger)
}
var G, K, q, J, Y, X, Z, Q = e((() => {
    G = p(), m(), w(), j(), P(), E(), M(), h(), A(), R(), F(), L(), g(), t(), a(), b(), o(), f(), d(), z(), K = s(), q = `chatgpt-schedules-summary`, J = e => `slack-schedules-summary:${D(e)}`, Y = e => {
        "use forget";
        let t = (0, G.c)(41),
            {
                channelType: a
            } = e,
            o = r()?.normalizedAccountUserId ?? null,
            s = n(V),
            c = n(H),
            d = n(U),
            f;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = () => ee(v(), o), t[0] = f) : f = t[0];
        let p = n(f),
            m = oe(),
            {
                deploymentId: h
            } = l(),
            {
                data: g
            } = ne(s, `all_accessible`),
            _;
        t[1] !== d || t[2] !== h ? (_ = d.find(e => e.deployment_id === h && ie(e)) ?? null, t[1] = d, t[2] = h, t[3] = _) : _ = t[3];
        let b = _,
            w;
        bb0: {
            if (a === `chatgpt`) {
                w = te;
                break bb0
            }
            let e;t[4] === b ? e = t[5] : (e = b == null ? void 0 : se(b) ?? void 0, t[4] = b, t[5] = e),
            w = e
        }
        let E = w,
            D;
        if (t[6] !== a || t[7] !== E || t[8] !== g) {
            bb1: {
                let e = ce(g);
                if (a === `chatgpt`) {
                    D = e.filter(W).length;
                    break bb1
                }
                if (E == null) {
                    D = 0;
                    break bb1
                }
                let n;t[10] === E ? n = t[11] : (n = e => re(e.trigger, E), t[10] = E, t[11] = n),
                D = e.filter(n).length
            }
            t[6] = a,
            t[7] = E,
            t[8] = g,
            t[9] = D
        }
        else D = t[9];
        let O = D,
            k;
        bb2: {
            if (a === `chatgpt`) {
                k = q;
                break bb2
            }
            let e;t[12] === b ? e = t[13] : (e = b == null ? void 0 : J(ae(b)), t[12] = b, t[13] = e),
            k = e
        }
        let A = k,
            j = a === `slack` && b != null && b.materialized_trigger_id == null,
            M = a !== `slack` || p,
            N = s == null || E == null,
            P = a === `slack` ? T.SLACK_CHANNEL : T.CHATGPT_CHANNEL,
            F = O > 0 && `text-info`,
            L;
        t[14] === F ? L = t[15] : (L = i(`size-5`, F), t[14] = F, t[15] = L);
        let R;
        t[16] === L ? R = t[17] : (R = (0, K.jsx)(B, {
            scheduledCount: 0,
            className: L
        }), t[16] = L, t[17] = R);
        let z;
        t[18] === O ? z = t[19] : (z = O === 0 ? (0, K.jsx)(u, {
            ...Z.noSchedules
        }) : (0, K.jsx)(u, {
            ...Z.scheduleCount,
            values: {
                count: O
            }
        }), t[18] = O, t[19] = z);
        let Y;
        t[20] !== R || t[21] !== z ? (Y = (0, K.jsxs)(`div`, {
            className: `flex items-center gap-2.5`,
            children: [R, z]
        }), t[20] = R, t[21] = z, t[22] = Y) : Y = t[22];
        let Q;
        t[23] !== b || t[24] !== M || t[25] !== a || t[26] !== s || t[27] !== c || t[28] !== d || t[29] !== m || t[30] !== p || t[31] !== N || t[32] !== E || t[33] !== O || t[34] !== j || t[35] !== P ? (Q = M ? j ? (0, K.jsx)(X, {
            disabled: N,
            scheduledChannelCount: O,
            source: P
        }) : (0, K.jsx)(le, {
            agentName: c,
            gptId: s,
            hasPublishedAtLeastOnce: m,
            isCurrentUsersAgent: p,
            initialView: O > 0 ? `list` : `add`,
            runMode: `preview`,
            scheduleChannelBinding: E,
            slackDeployments: d,
            triggerScope: `all_accessible`,
            children: (0, K.jsx)(y, {
                color: `primary`,
                variant: `soft`,
                size: `lg`,
                gutterSize: `sm`,
                pill: !0,
                disabled: N,
                onClick: () => {
                    x({
                        actionType: C.SCHEDULES_MODAL_OPEN,
                        source: P,
                        schedule: {
                            channelType: a === `slack` ? S.SLACK : S.CHATGPT,
                            scheduleCount: O
                        },
                        ...b == null ? {} : {
                            slack: {
                                slackDeploymentId: b.deployment_id
                            }
                        }
                    })
                },
                children: (0, K.jsx)(u, {
                    ...O === 0 ? I.addScheduleMenuAction : Z.manageSchedules
                })
            })
        }) : null, t[23] = b, t[24] = M, t[25] = a, t[26] = s, t[27] = c, t[28] = d, t[29] = m, t[30] = p, t[31] = N, t[32] = E, t[33] = O, t[34] = j, t[35] = P, t[36] = Q) : Q = t[36];
        let $;
        return t[37] !== A || t[38] !== Y || t[39] !== Q ? ($ = (0, K.jsxs)(`div`, {
            className: `flex items-center justify-between`,
            "data-assistant-focus": A,
            children: [Y, Q]
        }), t[37] = A, t[38] = Y, t[39] = Q, t[40] = $) : $ = t[40], $
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
            } = O(),
            o = k(),
            s = n || a,
            c;
        t[0] !== o.numChangesToPublish || t[1] !== i ? (c = () => {
            x({
                actionType: C.PUBLISH_BEFORE_SCHEDULING,
                source: i,
                publish: {
                    changeCount: o.numChangesToPublish
                }
            }), N({
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
        let l = r === 0 ? I.addScheduleMenuAction : Z.manageSchedules,
            d;
        t[3] === l ? d = t[4] : (d = (0, K.jsx)(u, {
            ...l
        }), t[3] = l, t[4] = d);
        let f;
        return t[5] !== a || t[6] !== s || t[7] !== c || t[8] !== d ? (f = (0, K.jsx)(y, {
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
//# sourceMappingURL=c396e986-0m9j1b4ai33ch7tg.js.map