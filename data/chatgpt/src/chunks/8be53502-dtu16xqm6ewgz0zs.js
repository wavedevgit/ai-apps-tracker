import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as n,
    B6 as r,
    C0 as i,
    VJ as a,
    i5 as o,
    xJ as s,
    zJ as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as l,
    Vn as u,
    wn as d
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $Y as f,
    AGn as ee,
    D as te,
    E as p,
    Hd as m,
    MGn as h,
    QY as g,
    UIt as _,
    Ud as v,
    ZIt as y,
    dzt as b,
    iLt as ne,
    vzt as x,
    wzt as S
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    C_ as re,
    Nt as ie,
    Pt as C,
    Rg as w,
    w_ as T
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as E,
    t as D
} from "./d7ede44b-oxwul9ltek1i94lm.js";
import {
    r as O,
    t as k
} from "./4740ae63-elitrc2bhtg293nl.js";
import {
    B as A,
    L as ae,
    R as j,
    z as oe
} from "./8e7d0a25-o85cwyy659hwtt54.js";
import {
    n as M,
    t as N
} from "./aaf9e772-ig1hxkmf89bi7hdi.js";
import {
    a as P,
    i as F,
    o as I,
    r as L,
    t as R
} from "./36beadec-27h9k3yp4osmtsah.js";
var z, B, V = e((() => {
    z = `WMAbnW_Thread`, B = {
        Thread: z
    }
}));

function H() {
    return x().displayState.activePreviewThreadId
}

function U(e) {
    return s.hasUserMessage(e)
}

function W(e) {
    b.setActivePreviewThreadId(e)
}
var G, K, q, J, Y, se = e((() => {
    G = d(), L(), I(), _(), T(), v(), O(), f(), h(), r(), n(), C(), p(), w(), i(), K = t(u()), S(), E(), j(), V(), q = l(), J = {
        lockSelectedReplyTarget: !0,
        disableAtTagging: !0
    }, Y = e => {
        "use forget";
        let t = (0, G.c)(39),
            {
                agent: n,
                agentVersion: r,
                conversationHistory: i,
                disabled: s
            } = e,
            l = s !== void 0 && s,
            u = o(H),
            d;
        t[0] !== u || t[1] !== r.agent_id ? (d = ae(u, r.agent_id), t[0] = u, t[1] = r.agent_id, t[2] = d) : d = t[2];
        let f = d,
            p = c(u),
            h = a(f.id, U),
            {
                data: _
            } = ne(r.agent_id),
            v, y;
        t[3] !== p || t[4] !== u ? (v = () => {
            oe(u), A(p)
        }, y = [u, p], t[3] = p, t[4] = u, t[5] = v, t[6] = y) : (v = t[5], y = t[6]), (0, K.useEffect)(v, y);
        let x;
        t[7] === u ? x = t[8] : (x = {
            clientThreadId: u
        }, t[7] = u, t[8] = x), te(x);
        let S, C;
        t[9] !== f.id || t[10] !== h ? (S = () => {
            h && b.setPlutoCurrentPreview(f.id)
        }, C = [f.id, h], t[9] = f.id, t[10] = h, t[11] = S, t[12] = C) : (S = t[11], C = t[12]), (0, K.useEffect)(S, C);
        let w;
        t[13] !== n || t[14] !== r || t[15] !== f || t[16] !== i || t[17] !== l || t[18] !== h || t[19] !== _ ? (w = (0, q.jsx)(ee, {
            className: `h-full! w-full!`,
            children: h && !l ? (0, q.jsx)(g, {
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
                                items: i,
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
        }), t[13] = n, t[14] = r, t[15] = f, t[16] = i, t[17] = l, t[18] = h, t[19] = _, t[20] = w) : w = t[20];
        let T, E;
        t[21] === f ? (T = t[22], E = t[23]) : (E = (0, q.jsx)(D, {
            conversation: f
        }), T = (0, q.jsx)(k, {
            conversation: f
        }), t[21] = f, t[22] = T, t[23] = E);
        let O;
        t[24] !== T || t[25] !== w || t[26] !== E ? (O = (0, q.jsxs)(m.Root, {
            children: [w, E, T]
        }), t[24] = T, t[25] = w, t[26] = E, t[27] = O) : O = t[27];
        let j;
        t[28] === f ? j = t[29] : (j = !1, t[28] = f, t[29] = j);
        let M;
        t[30] !== f || t[31] !== O || t[32] !== j ? (M = (0, q.jsxs)(re, {
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

function ce() {
    return x().currentGpt.id
}

function X() {
    return x().currentGpt
}
var Z, Q, $, le = e((() => {
    Z = d(), _(), r(), S(), se(), N(), Q = l(), $ = e => {
        "use forget";
        let t = (0, Z.c)(11),
            {
                disabled: n
            } = e,
            r = n !== void 0 && n,
            i = o(ce),
            a = o(X),
            s = M(),
            {
                data: c
            } = y(i);
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
//# sourceMappingURL=8be53502-dtu16xqm6ewgz0zs.js.map