import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as t,
    L1 as n,
    N1 as r,
    N5 as i,
    Y5 as a,
    h8 as o
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    KIt as g,
    Ozt as _,
    VLt as v,
    eRt as y,
    sLt as ee,
    tRt as te,
    xzt as b
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    d as x,
    t as S
} from "./707eab0c-iziu4upusihd9xbv.js";
import {
    a as C,
    c as w,
    o as T,
    t as E,
    x as D
} from "./4285e798-gdl12dl0yi3x94rm.js";
import {
    At as O,
    Mt as k,
    Nt as A,
    St as ne,
    d as j,
    f as M,
    g as N,
    h as P,
    kt as F,
    u as I,
    yt as L
} from "./8e7d0a25-dv486t3dl7v5p6ha.js";
import {
    i as R,
    r as z
} from "./8b3bb541-iz99fmtii63ix6qz.js";
import {
    a as B,
    f as V,
    g as re,
    i as ie,
    m as H,
    p as U,
    r as W,
    t as ae
} from "./683259fe-j7vw6s7hk0ceh39v.js";

function oe() {
    return b().currentGpt.id
}

function se() {
    return b().currentGpt.name
}

function ce() {
    return b().currentGpt.deployments.slack
}

function le(e) {
    return y(e.trigger)
}
var G, K, q, J, Y, X, Z, Q = e((() => {
    G = p(), m(), E(), F(), z(), k(), I(), h(), P(), U(), B(), H(), g(), o(), n(), S(), a(), f(), d(), W(), K = s(), q = `chatgpt-schedules-summary`, J = e => `slack-schedules-summary:${A(e)}`, Y = e => {
        "use forget";
        let n = (0, G.c)(41),
            {
                channelType: a
            } = e,
            o = r()?.normalizedAccountUserId ?? null,
            s = i(oe),
            c = i(se),
            d = i(ce),
            f;
        n[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = () => _(b(), o), n[0] = f) : f = n[0];
        let p = i(f),
            m = N(),
            {
                deploymentId: h
            } = l(),
            {
                data: g
            } = ee(s, `all_accessible`),
            y;
        n[1] !== d || n[2] !== h ? (y = d.find(e => e.deployment_id === h && O(e)) ?? null, n[1] = d, n[2] = h, n[3] = y) : y = n[3];
        let S = y,
            E;
        bb0: {
            if (a === `chatgpt`) {
                E = v;
                break bb0
            }
            let e;n[4] === S ? e = n[5] : (e = S == null ? void 0 : L(S) ?? void 0, n[4] = S, n[5] = e),
            E = e
        }
        let k = E,
            A;
        if (n[6] !== a || n[7] !== k || n[8] !== g) {
            bb1: {
                let e = re(g);
                if (a === `chatgpt`) {
                    A = e.filter(le).length;
                    break bb1
                }
                if (k == null) {
                    A = 0;
                    break bb1
                }
                let t;n[10] === k ? t = n[11] : (t = e => te(e.trigger, k), n[10] = k, n[11] = t),
                A = e.filter(t).length
            }
            n[6] = a,
            n[7] = k,
            n[8] = g,
            n[9] = A
        }
        else A = n[9];
        let j = A,
            M;
        bb2: {
            if (a === `chatgpt`) {
                M = q;
                break bb2
            }
            let e;n[12] === S ? e = n[13] : (e = S == null ? void 0 : J(ne(S)), n[12] = S, n[13] = e),
            M = e
        }
        let P = M,
            F = a === `slack` && S != null && S.materialized_trigger_id == null,
            I = a !== `slack` || p,
            R = s == null || k == null,
            z = a === `slack` ? D.SLACK_CHANNEL : D.CHATGPT_CHANNEL,
            B = j > 0 && `text-info`,
            H;
        n[14] === B ? H = n[15] : (H = t(`size-5`, B), n[14] = B, n[15] = H);
        let U;
        n[16] === H ? U = n[17] : (U = (0, K.jsx)(ae, {
            scheduledCount: 0,
            className: H
        }), n[16] = H, n[17] = U);
        let W;
        n[18] === j ? W = n[19] : (W = j === 0 ? (0, K.jsx)(u, {
            ...Z.noSchedules
        }) : (0, K.jsx)(u, {
            ...Z.scheduleCount,
            values: {
                count: j
            }
        }), n[18] = j, n[19] = W);
        let Y;
        n[20] !== U || n[21] !== W ? (Y = (0, K.jsxs)(`div`, {
            className: `flex items-center gap-2.5`,
            children: [U, W]
        }), n[20] = U, n[21] = W, n[22] = Y) : Y = n[22];
        let Q;
        n[23] !== S || n[24] !== I || n[25] !== a || n[26] !== s || n[27] !== c || n[28] !== d || n[29] !== m || n[30] !== p || n[31] !== R || n[32] !== k || n[33] !== j || n[34] !== F || n[35] !== z ? (Q = I ? F ? (0, K.jsx)(X, {
            disabled: R,
            scheduledChannelCount: j,
            source: z
        }) : (0, K.jsx)(ie, {
            agentName: c,
            gptId: s,
            hasPublishedAtLeastOnce: m,
            isCurrentUsersAgent: p,
            initialView: j > 0 ? `list` : `add`,
            runMode: `preview`,
            scheduleChannelBinding: k,
            slackDeployments: d,
            triggerScope: `all_accessible`,
            children: (0, K.jsx)(x, {
                color: `primary`,
                variant: `soft`,
                size: `lg`,
                gutterSize: `sm`,
                pill: !0,
                disabled: R,
                onClick: () => {
                    C({
                        actionType: T.SCHEDULES_MODAL_OPEN,
                        source: z,
                        schedule: {
                            channelType: a === `slack` ? w.SLACK : w.CHATGPT,
                            scheduleCount: j
                        },
                        ...S == null ? {} : {
                            slack: {
                                slackDeploymentId: S.deployment_id
                            }
                        }
                    })
                },
                children: (0, K.jsx)(u, {
                    ...j === 0 ? V.addScheduleMenuAction : Z.manageSchedules
                })
            })
        }) : null, n[23] = S, n[24] = I, n[25] = a, n[26] = s, n[27] = c, n[28] = d, n[29] = m, n[30] = p, n[31] = R, n[32] = k, n[33] = j, n[34] = F, n[35] = z, n[36] = Q) : Q = n[36];
        let $;
        return n[37] !== P || n[38] !== Y || n[39] !== Q ? ($ = (0, K.jsxs)(`div`, {
            className: `flex items-center justify-between`,
            "data-assistant-focus": P,
            children: [Y, Q]
        }), n[37] = P, n[38] = Y, n[39] = Q, n[40] = $) : $ = n[40], $
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
            C({
                actionType: T.PUBLISH_BEFORE_SCHEDULING,
                source: i,
                publish: {
                    changeCount: o.numChangesToPublish
                }
            }), R({
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
        let l = r === 0 ? V.addScheduleMenuAction : Z.manageSchedules,
            d;
        t[3] === l ? d = t[4] : (d = (0, K.jsx)(u, {
            ...l
        }), t[3] = l, t[4] = d);
        let f;
        return t[5] !== a || t[6] !== s || t[7] !== c || t[8] !== d ? (f = (0, K.jsx)(x, {
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
//# sourceMappingURL=c396e986-ghponkp0vnqhj6vv.js.map