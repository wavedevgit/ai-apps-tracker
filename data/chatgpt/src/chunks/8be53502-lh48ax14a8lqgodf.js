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
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as l,
    Vn as u,
    wn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $It as f,
    D as ee,
    Dzt as p,
    E as m,
    EKn as h,
    GIt as g,
    Ud as te,
    Wd as _,
    iX as v,
    mzt as y,
    oLt as ne,
    rX as re,
    wKn as b,
    xzt as x
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    D_ as S,
    E_ as ie,
    Nt as C,
    Pt as w,
    Vg as T
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    n as E,
    t as D
} from "./d7ede44b-kycz2ua5eghwy2xm.js";
import {
    r as O,
    t as k
} from "./4740ae63-pab84vqkg2kfjyxv.js";
import {
    B as A,
    L as ae,
    R as j,
    z as oe
} from "./8e7d0a25-mxr3igm2xq2fndzb.js";
import {
    n as M,
    t as N
} from "./aaf9e772-om88m8w7obe7enyk.js";
import {
    a as P,
    i as F,
    o as I,
    r as L,
    t as R
} from "./36beadec-i5ler9adqkk2mlag.js";
var z, B, V = e((() => {
    z = `WMAbnW_Thread`, B = {
        Thread: z
    }
}));

function H() {
    return x().displayState.activePreviewThreadId
}

function U(e) {
    return n.hasUserMessage(e)
}

function W(e) {
    y.setActivePreviewThreadId(e)
}
var G, K, q, J, Y, se = e((() => {
    G = d(), L(), I(), g(), S(), _(), O(), v(), h(), a(), i(), w(), m(), T(), s(), K = t(u()), p(), E(), j(), V(), q = l(), J = {
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
        t[0] !== u || t[1] !== i.agent_id ? (d = ae(u, i.agent_id), t[0] = u, t[1] = i.agent_id, t[2] = d) : d = t[2];
        let f = d,
            p = o(u),
            m = r(f.id, U),
            {
                data: h
            } = ne(i.agent_id),
            g, _;
        t[3] !== p || t[4] !== u ? (g = () => {
            oe(u), A(p)
        }, _ = [u, p], t[3] = p, t[4] = u, t[5] = g, t[6] = _) : (g = t[5], _ = t[6]), (0, K.useEffect)(g, _);
        let v;
        t[7] === u ? v = t[8] : (v = {
            clientThreadId: u
        }, t[7] = u, t[8] = v), ee(v);
        let x, S;
        t[9] !== f.id || t[10] !== m ? (x = () => {
            m && y.setPlutoCurrentPreview(f.id)
        }, S = [f.id, m], t[9] = f.id, t[10] = m, t[11] = x, t[12] = S) : (x = t[11], S = t[12]), (0, K.useEffect)(x, S);
        let w;
        t[13] !== n || t[14] !== i || t[15] !== f || t[16] !== a || t[17] !== l || t[18] !== m || t[19] !== h ? (w = (0, q.jsx)(b, {
            className: `h-full! w-full!`,
            children: m && !l ? (0, q.jsx)(re, {
                value: J,
                children: (0, q.jsx)(C, {
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
        }), t[13] = n, t[14] = i, t[15] = f, t[16] = a, t[17] = l, t[18] = m, t[19] = h, t[20] = w) : w = t[20];
        let T, E;
        t[21] === f ? (T = t[22], E = t[23]) : (E = (0, q.jsx)(D, {
            conversation: f
        }), T = (0, q.jsx)(k, {
            conversation: f
        }), t[21] = f, t[22] = T, t[23] = E);
        let O;
        t[24] !== T || t[25] !== w || t[26] !== E ? (O = (0, q.jsxs)(te.Root, {
            children: [w, E, T]
        }), t[24] = T, t[25] = w, t[26] = E, t[27] = O) : O = t[27];
        let j;
        t[28] === f ? j = t[29] : (j = !1, t[28] = f, t[29] = j);
        let M;
        t[30] !== f || t[31] !== O || t[32] !== j ? (M = (0, q.jsxs)(ie, {
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

function ce() {
    return x().currentGpt.id
}

function X() {
    return x().currentGpt
}
var Z, Q, $, le = e((() => {
    Z = d(), g(), a(), p(), se(), N(), Q = l(), $ = e => {
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
            } = f(i);
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
//# sourceMappingURL=8be53502-lh48ax14a8lqgodf.js.map