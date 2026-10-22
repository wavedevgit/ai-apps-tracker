import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    GJ as r,
    J5 as i,
    dY as a,
    eY as o,
    lY as s,
    o2 as c
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as l,
    Vn as u,
    wn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    D as f,
    E as p,
    EKn as m,
    HIt as h,
    Ud as ee,
    Wd as g,
    XIt as _,
    dzt as v,
    iX as y,
    rLt as te,
    rX as b,
    vzt as x,
    wKn as ne,
    wzt as S
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    D_ as re,
    Hg as C,
    Nt as ie,
    O_ as w,
    Pt as T
} from "./8b34dbc2-bgocf3s6t6l67twq.js";
import {
    n as E,
    t as ae
} from "./d7ede44b-k7axvx8l1562ehns.js";
import {
    r as D,
    t as O
} from "./4740ae63-fnebjmghi87x4upr.js";
import {
    B as k,
    L as A,
    R as j,
    z as oe
} from "./8e7d0a25-hjalwed8futvzicp.js";
import {
    n as M,
    t as N
} from "./aaf9e772-cx1tdqruz134uxiw.js";
import {
    a as P,
    i as F,
    o as I,
    r as L,
    t as R
} from "./36beadec-bueg1hzai97ct3w8.js";
var z, B, V = e((() => {
    z = `WMAbnW_Thread`, B = {
        Thread: z
    }
}));

function H() {
    return x().displayState.activePreviewThreadId
}

function U(e) {
    return r.hasUserMessage(e)
}

function W(e) {
    v.setActivePreviewThreadId(e)
}
var G, K, q, J, Y, se = e((() => {
    G = d(), L(), I(), h(), w(), g(), D(), y(), m(), n(), o(), T(), p(), C(), c(), K = t(u()), S(), E(), j(), V(), q = l(), J = {
        lockSelectedReplyTarget: !0,
        disableAtTagging: !0
    }, Y = e => {
        "use forget";
        let t = (0, G.c)(39),
            {
                agent: n,
                agentVersion: r,
                conversationHistory: o,
                disabled: c
            } = e,
            l = c !== void 0 && c,
            u = i(H),
            d;
        t[0] !== u || t[1] !== r.agent_id ? (d = A(u, r.agent_id), t[0] = u, t[1] = r.agent_id, t[2] = d) : d = t[2];
        let p = d,
            m = s(u),
            h = a(p.id, U),
            {
                data: g
            } = te(r.agent_id),
            _, y;
        t[3] !== m || t[4] !== u ? (_ = () => {
            oe(u), k(m)
        }, y = [u, m], t[3] = m, t[4] = u, t[5] = _, t[6] = y) : (_ = t[5], y = t[6]), (0, K.useEffect)(_, y);
        let x;
        t[7] === u ? x = t[8] : (x = {
            clientThreadId: u
        }, t[7] = u, t[8] = x), f(x);
        let S, C;
        t[9] !== p.id || t[10] !== h ? (S = () => {
            h && v.setPlutoCurrentPreview(p.id)
        }, C = [p.id, h], t[9] = p.id, t[10] = h, t[11] = S, t[12] = C) : (S = t[11], C = t[12]), (0, K.useEffect)(S, C);
        let w;
        t[13] !== n || t[14] !== r || t[15] !== p || t[16] !== o || t[17] !== l || t[18] !== h || t[19] !== g ? (w = (0, q.jsx)(ne, {
            className: `h-full! w-full!`,
            children: h && !l ? (0, q.jsx)(b, {
                value: J,
                children: (0, q.jsx)(ie, {
                    conversation: p,
                    className: B.Thread
                })
            }) : (0, q.jsx)(`div`, {
                className: `w-full px-(--build-shell-inline-padding)`,
                children: (0, q.jsxs)(`div`, {
                    className: `mx-auto my-4 w-full max-w-(--builder-content-width) sm:my-12`,
                    children: [(0, q.jsx)(P, {
                        agent: n,
                        agentVersion: r
                    }), (0, q.jsx)(F, {
                        agent: n,
                        agentVersion: r,
                        conversationHistoryQuery: {
                            data: {
                                items: o,
                                scheduled: []
                            }
                        },
                        triggerResources: g,
                        extraStreamParams: {
                            hideFromHistory: !0,
                            isDoNotRemember: !0
                        },
                        isRunningDraftAgent: !0,
                        onSelectRecentConversation: W,
                        disabled: l
                    })]
                })
            })
        }), t[13] = n, t[14] = r, t[15] = p, t[16] = o, t[17] = l, t[18] = h, t[19] = g, t[20] = w) : w = t[20];
        let T, E;
        t[21] === p ? (T = t[22], E = t[23]) : (E = (0, q.jsx)(ae, {
            conversation: p
        }), T = (0, q.jsx)(O, {
            conversation: p
        }), t[21] = p, t[22] = T, t[23] = E);
        let D;
        t[24] !== T || t[25] !== w || t[26] !== E ? (D = (0, q.jsxs)(ee.Root, {
            children: [w, E, T]
        }), t[24] = T, t[25] = w, t[26] = E, t[27] = D) : D = t[27];
        let j;
        t[28] === p ? j = t[29] : (j = !1, t[28] = p, t[29] = j);
        let M;
        t[30] !== p || t[31] !== D || t[32] !== j ? (M = (0, q.jsxs)(re, {
            conversation: p,
            children: [D, j]
        }), t[30] = p, t[31] = D, t[32] = j, t[33] = M) : M = t[33];
        let N;
        return t[34] !== r.icon.color || t[35] !== r.icon.name || t[36] !== p || t[37] !== M ? (N = (0, q.jsx)(R, {
            conversation: p,
            accentColor: r.icon.color,
            iconName: r.icon.name,
            children: M
        }), t[34] = r.icon.color, t[35] = r.icon.name, t[36] = p, t[37] = M, t[38] = N) : N = t[38], N
    }
}));

function X() {
    return x().currentGpt.id
}

function ce() {
    return x().currentGpt
}
var Z, Q, $, le = e((() => {
    Z = d(), h(), n(), S(), se(), N(), Q = l(), $ = e => {
        "use forget";
        let t = (0, Z.c)(11),
            {
                disabled: n
            } = e,
            r = n !== void 0 && n,
            a = i(X),
            o = i(ce),
            s = M(),
            {
                data: c
            } = _(a);
        if (!c) return null;
        let l;
        t[0] !== c.draft_version || t[1] !== o.icon || t[2] !== o.name || t[3] !== o.starterPrompts || t[4] !== o.tagline ? (l = {
            ...c.draft_version,
            starter_prompts: o.starterPrompts,
            name: o.name,
            tagline: o.tagline,
            icon: o.icon
        }, t[0] = c.draft_version, t[1] = o.icon, t[2] = o.name, t[3] = o.starterPrompts, t[4] = o.tagline, t[5] = l) : l = t[5];
        let u;
        return t[6] !== c.agent || t[7] !== s || t[8] !== r || t[9] !== l ? (u = (0, Q.jsx)(Y, {
            agent: c.agent,
            agentVersion: l,
            conversationHistory: s,
            disabled: r
        }), t[6] = c.agent, t[7] = s, t[8] = r, t[9] = l, t[10] = u) : u = t[10], u
    }
}));
export {
    le as n, $ as t
};
//# sourceMappingURL=8be53502-hjln4l8mrd8l7zhw.js.map