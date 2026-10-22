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
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    Ozt as _,
    VLt as v,
    eRt as y,
    oLt as ee,
    tRt as te,
    xzt as b
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    d as x,
    t as S
} from "./707eab0c-ga79xj3x5cylmvgk.js";
import {
    a as C,
    c as w,
    o as T,
    t as E,
    x as D
} from "./4285e798-dp66nwf09gsij2gf.js";
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
} from "./8e7d0a25-mxr3igm2xq2fndzb.js";
import {
    i as R,
    r as z
} from "./8b3bb541-n9g80w5f5jkl02ux.js";
import {
    a as B,
    f as V,
    g as re,
    i as ie,
    m as H,
    p as U,
    r as W,
    t as ae
} from "./683259fe-da0w37z026voelvt.js";

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
    G = p(), m(), E(), F(), z(), k(), I(), h(), P(), U(), B(), H(), g(), r(), a(), S(), i(), f(), d(), W(), K = s(), q = `chatgpt-schedules-summary`, J = e => `slack-schedules-summary:${A(e)}`, Y = e => {
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
        r[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = () => _(b(), a), r[0] = f) : f = r[0];
        let p = o(f),
            m = N(),
            {
                deploymentId: h
            } = l(),
            {
                data: g
            } = ee(s, `all_accessible`),
            y;
        r[1] !== d || r[2] !== h ? (y = d.find(e => e.deployment_id === h && O(e)) ?? null, r[1] = d, r[2] = h, r[3] = y) : y = r[3];
        let S = y,
            E;
        bb0: {
            if (i === `chatgpt`) {
                E = v;
                break bb0
            }
            let e;r[4] === S ? e = r[5] : (e = S == null ? void 0 : L(S) ?? void 0, r[4] = S, r[5] = e),
            E = e
        }
        let k = E,
            A;
        if (r[6] !== i || r[7] !== k || r[8] !== g) {
            bb1: {
                let e = re(g);
                if (i === `chatgpt`) {
                    A = e.filter(le).length;
                    break bb1
                }
                if (k == null) {
                    A = 0;
                    break bb1
                }
                let t;r[10] === k ? t = r[11] : (t = e => te(e.trigger, k), r[10] = k, r[11] = t),
                A = e.filter(t).length
            }
            r[6] = i,
            r[7] = k,
            r[8] = g,
            r[9] = A
        }
        else A = r[9];
        let j = A,
            M;
        bb2: {
            if (i === `chatgpt`) {
                M = q;
                break bb2
            }
            let e;r[12] === S ? e = r[13] : (e = S == null ? void 0 : J(ne(S)), r[12] = S, r[13] = e),
            M = e
        }
        let P = M,
            F = i === `slack` && S != null && S.materialized_trigger_id == null,
            I = i !== `slack` || p,
            R = s == null || k == null,
            z = i === `slack` ? D.SLACK_CHANNEL : D.CHATGPT_CHANNEL,
            B = j > 0 && `text-info`,
            H;
        r[14] === B ? H = r[15] : (H = n(`size-5`, B), r[14] = B, r[15] = H);
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
        r[23] !== S || r[24] !== I || r[25] !== i || r[26] !== s || r[27] !== c || r[28] !== d || r[29] !== m || r[30] !== p || r[31] !== R || r[32] !== k || r[33] !== j || r[34] !== F || r[35] !== z ? (Q = I ? F ? (0, K.jsx)(X, {
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
                            channelType: i === `slack` ? w.SLACK : w.CHATGPT,
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
        }) : null, r[23] = S, r[24] = I, r[25] = i, r[26] = s, r[27] = c, r[28] = d, r[29] = m, r[30] = p, r[31] = R, r[32] = k, r[33] = j, r[34] = F, r[35] = z, r[36] = Q) : Q = r[36];
        let $;
        return r[37] !== P || r[38] !== Y || r[39] !== Q ? ($ = (0, K.jsxs)(`div`, {
            className: `flex items-center justify-between`,
            "data-assistant-focus": P,
            children: [Y, Q]
        }), r[37] = P, r[38] = Y, r[39] = Q, r[40] = $) : $ = r[40], $
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
//# sourceMappingURL=c396e986-ofl7m9nr48f2arqx.js.map