import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    GJ as r,
    dY as i,
    eY as a,
    j5 as o,
    lY as s,
    o2 as c
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as l,
    Vn as u,
    wn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $It as ee,
    BKn as f,
    D as p,
    E as m,
    HKn as h,
    KIt as g,
    RIt as _,
    Ud as v,
    Wd as y,
    bzt as b,
    iX as x,
    mzt as S,
    rX as te,
    szt as C
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    D_ as ne,
    Hg as w,
    Nt as re,
    O_ as T,
    Pt as E
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    n as D,
    t as ie
} from "./d7ede44b-dtpp47fcah2gbixr.js";
import {
    r as O,
    t as k
} from "./4740ae63-ivvk803qjpw501qf.js";
import {
    B as A,
    L as ae,
    R as j,
    z as oe
} from "./8e7d0a25-5w3ub90bjwjvii11.js";
import {
    n as M,
    t as N
} from "./aaf9e772-ovgyzmhq6s0owk6t.js";
import {
    a as P,
    i as F,
    o as I,
    r as L,
    t as R
} from "./36beadec-fjt074rogkry9mzn.js";
var z, B, V = e((() => {
    z = `WMAbnW_Thread`, B = {
        Thread: z
    }
}));

function H() {
    return S().displayState.activePreviewThreadId
}

function U(e) {
    return r.hasUserMessage(e)
}

function W(e) {
    C.setActivePreviewThreadId(e)
}
var G, K, q, J, Y, se = e((() => {
    G = d(), L(), I(), _(), T(), y(), O(), x(), h(), n(), a(), E(), m(), w(), c(), K = t(u()), b(), D(), j(), V(), q = l(), J = {
        lockSelectedReplyTarget: !0,
        disableAtTagging: !0
    }, Y = e => {
        "use forget";
        let t = (0, G.c)(39),
            {
                agent: n,
                agentVersion: r,
                conversationHistory: a,
                disabled: c
            } = e,
            l = c !== void 0 && c,
            u = o(H),
            d;
        t[0] !== u || t[1] !== r.agent_id ? (d = ae(u, r.agent_id), t[0] = u, t[1] = r.agent_id, t[2] = d) : d = t[2];
        let m = d,
            h = s(u),
            g = i(m.id, U),
            {
                data: _
            } = ee(r.agent_id),
            y, b;
        t[3] !== h || t[4] !== u ? (y = () => {
            oe(u), A(h)
        }, b = [u, h], t[3] = h, t[4] = u, t[5] = y, t[6] = b) : (y = t[5], b = t[6]), (0, K.useEffect)(y, b);
        let x;
        t[7] === u ? x = t[8] : (x = {
            clientThreadId: u
        }, t[7] = u, t[8] = x), p(x);
        let S, w;
        t[9] !== m.id || t[10] !== g ? (S = () => {
            g && C.setPlutoCurrentPreview(m.id)
        }, w = [m.id, g], t[9] = m.id, t[10] = g, t[11] = S, t[12] = w) : (S = t[11], w = t[12]), (0, K.useEffect)(S, w);
        let T;
        t[13] !== n || t[14] !== r || t[15] !== m || t[16] !== a || t[17] !== l || t[18] !== g || t[19] !== _ ? (T = (0, q.jsx)(f, {
            className: `h-full! w-full!`,
            children: g && !l ? (0, q.jsx)(te, {
                value: J,
                children: (0, q.jsx)(re, {
                    conversation: m,
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
                                items: a,
                                scheduled: []
                            }
                        },
                        triggerResources: _,
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
        }), t[13] = n, t[14] = r, t[15] = m, t[16] = a, t[17] = l, t[18] = g, t[19] = _, t[20] = T) : T = t[20];
        let E, D;
        t[21] === m ? (E = t[22], D = t[23]) : (D = (0, q.jsx)(ie, {
            conversation: m
        }), E = (0, q.jsx)(k, {
            conversation: m
        }), t[21] = m, t[22] = E, t[23] = D);
        let O;
        t[24] !== E || t[25] !== T || t[26] !== D ? (O = (0, q.jsxs)(v.Root, {
            children: [T, D, E]
        }), t[24] = E, t[25] = T, t[26] = D, t[27] = O) : O = t[27];
        let j;
        t[28] === m ? j = t[29] : (j = !1, t[28] = m, t[29] = j);
        let M;
        t[30] !== m || t[31] !== O || t[32] !== j ? (M = (0, q.jsxs)(ne, {
            conversation: m,
            children: [O, j]
        }), t[30] = m, t[31] = O, t[32] = j, t[33] = M) : M = t[33];
        let N;
        return t[34] !== r.icon.color || t[35] !== r.icon.name || t[36] !== m || t[37] !== M ? (N = (0, q.jsx)(R, {
            conversation: m,
            accentColor: r.icon.color,
            iconName: r.icon.name,
            children: M
        }), t[34] = r.icon.color, t[35] = r.icon.name, t[36] = m, t[37] = M, t[38] = N) : N = t[38], N
    }
}));

function X() {
    return S().currentGpt.id
}

function ce() {
    return S().currentGpt
}
var Z, Q, $, le = e((() => {
    Z = d(), _(), n(), b(), se(), N(), Q = l(), $ = e => {
        "use forget";
        let t = (0, Z.c)(11),
            {
                disabled: n
            } = e,
            r = n !== void 0 && n,
            i = o(X),
            a = o(ce),
            s = M(),
            {
                data: c
            } = g(i);
        if (!c) return null;
        let l;
        t[0] !== c.draft_version || t[1] !== a.icon || t[2] !== a.name || t[3] !== a.starterPrompts || t[4] !== a.tagline ? (l = {
            ...c.draft_version,
            starter_prompts: a.starterPrompts,
            name: a.name,
            tagline: a.tagline,
            icon: a.icon
        }, t[0] = c.draft_version, t[1] = a.icon, t[2] = a.name, t[3] = a.starterPrompts, t[4] = a.tagline, t[5] = l) : l = t[5];
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
//# sourceMappingURL=8be53502-cy6b43o44p0qo8hc.js.map