import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    GJ as n,
    dY as r,
    eY as i,
    k8 as a,
    lY as o,
    o2 as s,
    q5 as c
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as l,
    Vn as u,
    wn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Czt as f,
    D as ee,
    E as p,
    HIt as m,
    Ud as te,
    Wd as h,
    XIt as g,
    _zt as _,
    lKn as v,
    nX as ne,
    rLt as re,
    rX as y,
    sKn as ie,
    uzt as b
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    D_ as x,
    E_ as ae,
    Nt as S,
    Pt as C,
    Vg as w
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
import {
    n as T,
    t as E
} from "./d7ede44b-mxl5ymvbiug5k7dw.js";
import {
    r as D,
    t as O
} from "./4740ae63-ju8ji2b9i6ivuydw.js";
import {
    B as k,
    L as A,
    R as j,
    z as oe
} from "./8e7d0a25-cwb0p2iem99twwtf.js";
import {
    n as M,
    t as N
} from "./aaf9e772-kx8p14487ri8aqcz.js";
import {
    a as P,
    i as F,
    o as I,
    r as L,
    t as R
} from "./36beadec-s8m51d32diwjxjp6.js";
var z, B, V = e((() => {
    z = `WMAbnW_Thread`, B = {
        Thread: z
    }
}));

function H() {
    return _().displayState.activePreviewThreadId
}

function U(e) {
    return n.hasUserMessage(e)
}

function W(e) {
    b.setActivePreviewThreadId(e)
}
var G, K, q, J, Y, se = e((() => {
    G = d(), L(), I(), m(), x(), h(), D(), y(), v(), a(), i(), C(), p(), w(), s(), K = t(u()), f(), T(), j(), V(), q = l(), J = {
        lockSelectedReplyTarget: !0,
        disableAtTagging: !0
    }, Y = e => {
        "use forget";
        let t = (0, G.c)(39),
            {
                agent: n,
                agentVersion: i,
                conversationHistory: a,
                disabled: s
            } = e,
            l = s !== void 0 && s,
            u = c(H),
            d;
        t[0] !== u || t[1] !== i.agent_id ? (d = A(u, i.agent_id), t[0] = u, t[1] = i.agent_id, t[2] = d) : d = t[2];
        let f = d,
            p = o(u),
            m = r(f.id, U),
            {
                data: h
            } = re(i.agent_id),
            g, _;
        t[3] !== p || t[4] !== u ? (g = () => {
            oe(u), k(p)
        }, _ = [u, p], t[3] = p, t[4] = u, t[5] = g, t[6] = _) : (g = t[5], _ = t[6]), (0, K.useEffect)(g, _);
        let v;
        t[7] === u ? v = t[8] : (v = {
            clientThreadId: u
        }, t[7] = u, t[8] = v), ee(v);
        let y, x;
        t[9] !== f.id || t[10] !== m ? (y = () => {
            m && b.setPlutoCurrentPreview(f.id)
        }, x = [f.id, m], t[9] = f.id, t[10] = m, t[11] = y, t[12] = x) : (y = t[11], x = t[12]), (0, K.useEffect)(y, x);
        let C;
        t[13] !== n || t[14] !== i || t[15] !== f || t[16] !== a || t[17] !== l || t[18] !== m || t[19] !== h ? (C = (0, q.jsx)(ie, {
            className: `h-full! w-full!`,
            children: m && !l ? (0, q.jsx)(ne, {
                value: J,
                children: (0, q.jsx)(S, {
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
                                items: a,
                                scheduled: []
                            }
                        },
                        triggerResources: h,
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
        }), t[13] = n, t[14] = i, t[15] = f, t[16] = a, t[17] = l, t[18] = m, t[19] = h, t[20] = C) : C = t[20];
        let w, T;
        t[21] === f ? (w = t[22], T = t[23]) : (T = (0, q.jsx)(E, {
            conversation: f
        }), w = (0, q.jsx)(O, {
            conversation: f
        }), t[21] = f, t[22] = w, t[23] = T);
        let D;
        t[24] !== w || t[25] !== C || t[26] !== T ? (D = (0, q.jsxs)(te.Root, {
            children: [C, T, w]
        }), t[24] = w, t[25] = C, t[26] = T, t[27] = D) : D = t[27];
        let j;
        t[28] === f ? j = t[29] : (j = !1, t[28] = f, t[29] = j);
        let M;
        t[30] !== f || t[31] !== D || t[32] !== j ? (M = (0, q.jsxs)(ae, {
            conversation: f,
            children: [D, j]
        }), t[30] = f, t[31] = D, t[32] = j, t[33] = M) : M = t[33];
        let N;
        return t[34] !== i.icon.color || t[35] !== i.icon.name || t[36] !== f || t[37] !== M ? (N = (0, q.jsx)(R, {
            conversation: f,
            accentColor: i.icon.color,
            iconName: i.icon.name,
            children: M
        }), t[34] = i.icon.color, t[35] = i.icon.name, t[36] = f, t[37] = M, t[38] = N) : N = t[38], N
    }
}));

function ce() {
    return _().currentGpt.id
}

function X() {
    return _().currentGpt
}
var Z, Q, $, le = e((() => {
    Z = d(), m(), a(), f(), se(), N(), Q = l(), $ = e => {
        "use forget";
        let t = (0, Z.c)(11),
            {
                disabled: n
            } = e,
            r = n !== void 0 && n,
            i = c(ce),
            a = c(X),
            o = M(),
            {
                data: s
            } = g(i);
        if (!s) return null;
        let l;
        t[0] !== s.draft_version || t[1] !== a.icon || t[2] !== a.name || t[3] !== a.starterPrompts || t[4] !== a.tagline ? (l = {
            ...s.draft_version,
            starter_prompts: a.starterPrompts,
            name: a.name,
            tagline: a.tagline,
            icon: a.icon
        }, t[0] = s.draft_version, t[1] = a.icon, t[2] = a.name, t[3] = a.starterPrompts, t[4] = a.tagline, t[5] = l) : l = t[5];
        let u;
        return t[6] !== s.agent || t[7] !== o || t[8] !== r || t[9] !== l ? (u = (0, Q.jsx)(Y, {
            agent: s.agent,
            agentVersion: l,
            conversationHistory: o,
            disabled: r
        }), t[6] = s.agent, t[7] = o, t[8] = r, t[9] = l, t[10] = u) : u = t[10], u
    }
}));
export {
    le as n, $ as t
};
//# sourceMappingURL=8be53502-bhzlm3csgddacnee.js.map