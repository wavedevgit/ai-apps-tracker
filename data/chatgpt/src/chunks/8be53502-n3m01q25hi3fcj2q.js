import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JJ as n,
    P5 as r,
    Z0 as i,
    fY as a,
    g8 as o,
    mY as s,
    rY as c
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as l,
    Vn as u,
    wn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Azt as f,
    D as p,
    E as m,
    GGn as h,
    UGn as ee,
    Ud as g,
    Wd as _,
    YIt as v,
    _zt as y,
    iX as b,
    rLt as x,
    rX as S,
    uLt as te,
    wzt as C
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    Nt as ne,
    Pt as w,
    T_ as T,
    w_ as re,
    zg as E
} from "./8b34dbc2-ojcl97ddvu2212q0.js";
import {
    n as D,
    t as ie
} from "./d7ede44b-kshguttor6g3snay.js";
import {
    r as O,
    t as k
} from "./4740ae63-no3ho9w2cgu9fhay.js";
import {
    B as A,
    L as ae,
    R as j,
    z as oe
} from "./8e7d0a25-ep4dwm1n9g5w5jjr.js";
import {
    n as M,
    t as N
} from "./aaf9e772-pfm73armoite4wgc.js";
import {
    a as P,
    i as F,
    o as I,
    r as L,
    t as R
} from "./36beadec-cs0dfqvyni0kexxg.js";
var z, B, V = e((() => {
    z = `WMAbnW_Thread`, B = {
        Thread: z
    }
}));

function H() {
    return C().displayState.activePreviewThreadId
}

function U(e) {
    return n.hasUserMessage(e)
}

function W(e) {
    y.setActivePreviewThreadId(e)
}
var G, K, q, J, Y, se = e((() => {
    G = d(), L(), I(), v(), T(), _(), O(), b(), h(), o(), c(), w(), m(), E(), i(), K = t(u()), f(), D(), j(), V(), q = l(), J = {
        lockSelectedReplyTarget: !0,
        disableAtTagging: !0
    }, Y = e => {
        "use forget";
        let t = (0, G.c)(39),
            {
                agent: n,
                agentVersion: i,
                conversationHistory: o,
                disabled: c
            } = e,
            l = c !== void 0 && c,
            u = r(H),
            d;
        t[0] !== u || t[1] !== i.agent_id ? (d = ae(u, i.agent_id), t[0] = u, t[1] = i.agent_id, t[2] = d) : d = t[2];
        let f = d,
            m = a(u),
            h = s(f.id, U),
            {
                data: _
            } = te(i.agent_id),
            v, b;
        t[3] !== m || t[4] !== u ? (v = () => {
            oe(u), A(m)
        }, b = [u, m], t[3] = m, t[4] = u, t[5] = v, t[6] = b) : (v = t[5], b = t[6]), (0, K.useEffect)(v, b);
        let x;
        t[7] === u ? x = t[8] : (x = {
            clientThreadId: u
        }, t[7] = u, t[8] = x), p(x);
        let C, w;
        t[9] !== f.id || t[10] !== h ? (C = () => {
            h && y.setPlutoCurrentPreview(f.id)
        }, w = [f.id, h], t[9] = f.id, t[10] = h, t[11] = C, t[12] = w) : (C = t[11], w = t[12]), (0, K.useEffect)(C, w);
        let T;
        t[13] !== n || t[14] !== i || t[15] !== f || t[16] !== o || t[17] !== l || t[18] !== h || t[19] !== _ ? (T = (0, q.jsx)(ee, {
            className: `h-full! w-full!`,
            children: h && !l ? (0, q.jsx)(S, {
                value: J,
                children: (0, q.jsx)(ne, {
                    conversation: f,
                    className: B.Thread
                })
            }) : (0, q.jsx)(`div`, {
                className: `w-full px-(--build-shell-inline-padding)`,
                children: (0, q.jsxs)(`div`, {
                    className: `mx-auto my-4 w-full max-w-(--builder-content-width) sm:my-12`,
                    children: [(0, q.jsx)(P, {
                        agent: n,
                        agentVersion: i
                    }), (0, q.jsx)(F, {
                        agent: n,
                        agentVersion: i,
                        conversationHistoryQuery: {
                            data: {
                                items: o,
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
        }), t[13] = n, t[14] = i, t[15] = f, t[16] = o, t[17] = l, t[18] = h, t[19] = _, t[20] = T) : T = t[20];
        let E, D;
        t[21] === f ? (E = t[22], D = t[23]) : (D = (0, q.jsx)(ie, {
            conversation: f
        }), E = (0, q.jsx)(k, {
            conversation: f
        }), t[21] = f, t[22] = E, t[23] = D);
        let O;
        t[24] !== E || t[25] !== T || t[26] !== D ? (O = (0, q.jsxs)(g.Root, {
            children: [T, D, E]
        }), t[24] = E, t[25] = T, t[26] = D, t[27] = O) : O = t[27];
        let j;
        t[28] === f ? j = t[29] : (j = !1, t[28] = f, t[29] = j);
        let M;
        t[30] !== f || t[31] !== O || t[32] !== j ? (M = (0, q.jsxs)(re, {
            conversation: f,
            children: [O, j]
        }), t[30] = f, t[31] = O, t[32] = j, t[33] = M) : M = t[33];
        let N;
        return t[34] !== i.icon.color || t[35] !== i.icon.name || t[36] !== f || t[37] !== M ? (N = (0, q.jsx)(R, {
            conversation: f,
            accentColor: i.icon.color,
            iconName: i.icon.name,
            children: M
        }), t[34] = i.icon.color, t[35] = i.icon.name, t[36] = f, t[37] = M, t[38] = N) : N = t[38], N
    }
}));

function X() {
    return C().currentGpt.id
}

function ce() {
    return C().currentGpt
}
var Z, Q, $, le = e((() => {
    Z = d(), v(), o(), f(), se(), N(), Q = l(), $ = e => {
        "use forget";
        let t = (0, Z.c)(11),
            {
                disabled: n
            } = e,
            i = n !== void 0 && n,
            a = r(X),
            o = r(ce),
            s = M(),
            {
                data: c
            } = x(a);
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
        return t[6] !== c.agent || t[7] !== s || t[8] !== i || t[9] !== l ? (u = (0, Q.jsx)(Y, {
            agent: c.agent,
            agentVersion: l,
            conversationHistory: s,
            disabled: i
        }), t[6] = c.agent, t[7] = s, t[8] = i, t[9] = l, t[10] = u) : u = t[10], u
    }
}));
export {
    le as n, $ as t
};
//# sourceMappingURL=8be53502-n3m01q25hi3fcj2q.js.map