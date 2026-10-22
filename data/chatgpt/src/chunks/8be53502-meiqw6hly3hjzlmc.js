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
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as l,
    Vn as u,
    wn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $It as f,
    D as ee,
    DKn as te,
    Dzt as p,
    E as m,
    GIt as h,
    Ud as ne,
    Wd as g,
    iX as _,
    kKn as v,
    mzt as y,
    oLt as b,
    rX as re,
    xzt as x
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    D_ as S,
    Hg as C,
    Nt as ie,
    O_ as w,
    Pt as T
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    n as E,
    t as D
} from "./d7ede44b-oc1s99lh7luh0kdk.js";
import {
    r as O,
    t as k
} from "./4740ae63-lnddy2eddoq9ae7e.js";
import {
    B as A,
    L as ae,
    R as j,
    z as oe
} from "./8e7d0a25-lil60ls70b75jmqj.js";
import {
    n as M,
    t as N
} from "./aaf9e772-omkt6hcwdkh4f982.js";
import {
    a as P,
    i as F,
    o as I,
    r as L,
    t as R
} from "./36beadec-ku7dqh84f4ma4mwi.js";
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
    y.setActivePreviewThreadId(e)
}
var G, K, q, J, Y, se = e((() => {
    G = d(), L(), I(), h(), w(), g(), O(), _(), v(), n(), o(), T(), m(), C(), c(), K = t(u()), p(), E(), j(), V(), q = l(), J = {
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
        t[0] !== u || t[1] !== r.agent_id ? (d = ae(u, r.agent_id), t[0] = u, t[1] = r.agent_id, t[2] = d) : d = t[2];
        let f = d,
            p = s(u),
            m = a(f.id, U),
            {
                data: h
            } = b(r.agent_id),
            g, _;
        t[3] !== p || t[4] !== u ? (g = () => {
            oe(u), A(p)
        }, _ = [u, p], t[3] = p, t[4] = u, t[5] = g, t[6] = _) : (g = t[5], _ = t[6]), (0, K.useEffect)(g, _);
        let v;
        t[7] === u ? v = t[8] : (v = {
            clientThreadId: u
        }, t[7] = u, t[8] = v), ee(v);
        let x, C;
        t[9] !== f.id || t[10] !== m ? (x = () => {
            m && y.setPlutoCurrentPreview(f.id)
        }, C = [f.id, m], t[9] = f.id, t[10] = m, t[11] = x, t[12] = C) : (x = t[11], C = t[12]), (0, K.useEffect)(x, C);
        let w;
        t[13] !== n || t[14] !== r || t[15] !== f || t[16] !== o || t[17] !== l || t[18] !== m || t[19] !== h ? (w = (0, q.jsx)(te, {
            className: `h-full! w-full!`,
            children: m && !l ? (0, q.jsx)(re, {
                value: J,
                children: (0, q.jsx)(ie, {
                    conversation: f,
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
        }), t[13] = n, t[14] = r, t[15] = f, t[16] = o, t[17] = l, t[18] = m, t[19] = h, t[20] = w) : w = t[20];
        let T, E;
        t[21] === f ? (T = t[22], E = t[23]) : (E = (0, q.jsx)(D, {
            conversation: f
        }), T = (0, q.jsx)(k, {
            conversation: f
        }), t[21] = f, t[22] = T, t[23] = E);
        let O;
        t[24] !== T || t[25] !== w || t[26] !== E ? (O = (0, q.jsxs)(ne.Root, {
            children: [w, E, T]
        }), t[24] = T, t[25] = w, t[26] = E, t[27] = O) : O = t[27];
        let j;
        t[28] === f ? j = t[29] : (j = !1, t[28] = f, t[29] = j);
        let M;
        t[30] !== f || t[31] !== O || t[32] !== j ? (M = (0, q.jsxs)(S, {
            conversation: f,
            children: [O, j]
        }), t[30] = f, t[31] = O, t[32] = j, t[33] = M) : M = t[33];
        let N;
        return t[34] !== r.icon.color || t[35] !== r.icon.name || t[36] !== f || t[37] !== M ? (N = (0, q.jsx)(R, {
            conversation: f,
            accentColor: r.icon.color,
            iconName: r.icon.name,
            children: M
        }), t[34] = r.icon.color, t[35] = r.icon.name, t[36] = f, t[37] = M, t[38] = N) : N = t[38], N
    }
}));

function X() {
    return x().currentGpt.id
}

function ce() {
    return x().currentGpt
}
var Z, Q, $, le = e((() => {
    Z = d(), h(), n(), p(), se(), N(), Q = l(), $ = e => {
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
            } = f(a);
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
//# sourceMappingURL=8be53502-meiqw6hly3hjzlmc.js.map