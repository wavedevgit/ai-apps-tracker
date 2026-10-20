import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as n,
    Y0 as r,
    dY as i,
    f8 as a,
    nY as o,
    pY as s,
    qJ as c
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as l,
    Vn as u,
    wn as d
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    D as ee,
    E as f,
    GGn as p,
    Hd as m,
    UGn as te,
    UIt as h,
    Ud as g,
    ZIt as _,
    dzt as v,
    eX as ne,
    iLt as re,
    tX as y,
    vzt as b,
    wzt as x
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    C_ as ie,
    Nt as ae,
    Pt as S,
    Rg as C,
    w_ as w
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";
import {
    n as T,
    t as E
} from "./d7ede44b-d7oneiqo5luof5xa.js";
import {
    r as D,
    t as O
} from "./4740ae63-hmxm0n1xdbhnsqqc.js";
import {
    B as k,
    L as A,
    R as j,
    z as oe
} from "./8e7d0a25-c039aqe9g57cci8q.js";
import {
    n as M,
    t as N
} from "./aaf9e772-f2l6vigv5gxqasf7.js";
import {
    a as P,
    i as F,
    o as I,
    r as L,
    t as R
} from "./36beadec-n4dvubcrqnxppgsn.js";
var z, B, V = e((() => {
    z = `WMAbnW_Thread`, B = {
        Thread: z
    }
}));

function H() {
    return b().displayState.activePreviewThreadId
}

function U(e) {
    return c.hasUserMessage(e)
}

function W(e) {
    v.setActivePreviewThreadId(e)
}
var G, K, q, J, Y, se = e((() => {
    G = d(), L(), I(), h(), w(), g(), D(), y(), p(), a(), o(), S(), f(), C(), r(), K = t(u()), x(), T(), j(), V(), q = l(), J = {
        lockSelectedReplyTarget: !0,
        disableAtTagging: !0
    }, Y = e => {
        "use forget";
        let t = (0, G.c)(39),
            {
                agent: r,
                agentVersion: a,
                conversationHistory: o,
                disabled: c
            } = e,
            l = c !== void 0 && c,
            u = n(H),
            d;
        t[0] !== u || t[1] !== a.agent_id ? (d = A(u, a.agent_id), t[0] = u, t[1] = a.agent_id, t[2] = d) : d = t[2];
        let f = d,
            p = i(u),
            h = s(f.id, U),
            {
                data: g
            } = re(a.agent_id),
            _, y;
        t[3] !== p || t[4] !== u ? (_ = () => {
            oe(u), k(p)
        }, y = [u, p], t[3] = p, t[4] = u, t[5] = _, t[6] = y) : (_ = t[5], y = t[6]), (0, K.useEffect)(_, y);
        let b;
        t[7] === u ? b = t[8] : (b = {
            clientThreadId: u
        }, t[7] = u, t[8] = b), ee(b);
        let x, S;
        t[9] !== f.id || t[10] !== h ? (x = () => {
            h && v.setPlutoCurrentPreview(f.id)
        }, S = [f.id, h], t[9] = f.id, t[10] = h, t[11] = x, t[12] = S) : (x = t[11], S = t[12]), (0, K.useEffect)(x, S);
        let C;
        t[13] !== r || t[14] !== a || t[15] !== f || t[16] !== o || t[17] !== l || t[18] !== h || t[19] !== g ? (C = (0, q.jsx)(te, {
            className: `h-full! w-full!`,
            children: h && !l ? (0, q.jsx)(ne, {
                value: J,
                children: (0, q.jsx)(ae, {
                    conversation: f,
                    className: B.Thread
                })
            }) : (0, q.jsx)(`div`, {
                className: `w-full px-(--build-shell-inline-padding)`,
                children: (0, q.jsxs)(`div`, {
                    className: `mx-auto my-4 w-full max-w-(--builder-content-width) sm:my-12`,
                    children: [(0, q.jsx)(P, {
                        agent: r,
                        agentVersion: a
                    }), (0, q.jsx)(F, {
                        agent: r,
                        agentVersion: a,
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
        }), t[13] = r, t[14] = a, t[15] = f, t[16] = o, t[17] = l, t[18] = h, t[19] = g, t[20] = C) : C = t[20];
        let w, T;
        t[21] === f ? (w = t[22], T = t[23]) : (T = (0, q.jsx)(E, {
            conversation: f
        }), w = (0, q.jsx)(O, {
            conversation: f
        }), t[21] = f, t[22] = w, t[23] = T);
        let D;
        t[24] !== w || t[25] !== C || t[26] !== T ? (D = (0, q.jsxs)(m.Root, {
            children: [C, T, w]
        }), t[24] = w, t[25] = C, t[26] = T, t[27] = D) : D = t[27];
        let j;
        t[28] === f ? j = t[29] : (j = !1, t[28] = f, t[29] = j);
        let M;
        t[30] !== f || t[31] !== D || t[32] !== j ? (M = (0, q.jsxs)(ie, {
            conversation: f,
            children: [D, j]
        }), t[30] = f, t[31] = D, t[32] = j, t[33] = M) : M = t[33];
        let N;
        return t[34] !== a.icon.color || t[35] !== a.icon.name || t[36] !== f || t[37] !== M ? (N = (0, q.jsx)(R, {
            conversation: f,
            accentColor: a.icon.color,
            iconName: a.icon.name,
            children: M
        }), t[34] = a.icon.color, t[35] = a.icon.name, t[36] = f, t[37] = M, t[38] = N) : N = t[38], N
    }
}));

function ce() {
    return b().currentGpt.id
}

function X() {
    return b().currentGpt
}
var Z, Q, $, le = e((() => {
    Z = d(), h(), a(), x(), se(), N(), Q = l(), $ = e => {
        "use forget";
        let t = (0, Z.c)(11),
            {
                disabled: r
            } = e,
            i = r !== void 0 && r,
            a = n(ce),
            o = n(X),
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
//# sourceMappingURL=8be53502-k7b1fuorz0pv4nvd.js.map