import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as r,
    Cd as i,
    Gd as a,
    Ld as o,
    Nd as s,
    Sd as c,
    i5 as l,
    q8 as u,
    qd as d,
    wd as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as p,
    Bn as m,
    Et as h,
    Ln as g,
    Nn as _,
    Rn as v,
    Vn as y,
    vt as b,
    wn as x,
    zn as S
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    NWt as C,
    NYt as w,
    PYt as T,
    aWt as E,
    bi as D,
    dWt as O,
    vi as k
} from "./conversation-small-fym1zmu9zimymmm1.js";
var A = t({
    VoiceNavigationBlocker: () => U
});

function j(e) {
    return e === `/` ? `/` : e.replace(/\/+$/, ``)
}

function M(e, t) {
    if (e.search === t.search || j(e.pathname) !== j(t.pathname)) return !1;
    let n = new URLSearchParams(e.search),
        r = new URLSearchParams(t.search),
        i = n.has(`model`) || r.has(`model`);
    return n.delete(`model`), r.delete(`model`), i && n.toString() === r.toString()
}

function N(e) {
    let t = j(e);
    return t === `/` || b(`/c/:conversationId`, t) != null || b(`/g/:gizmoId/c/:conversationId`, t) != null
}

function P(e) {
    let [t, n] = e.hash.split(`?`);
    return t === O && new URLSearchParams(n).get(E) === `true`
}

function F({
    currentLocation: e,
    nextLocation: t,
    isIntegratedVoiceModeActive: n,
    voiceCompletionRequest: r,
    integratedVoiceModeState: i,
    isEndingVoiceSession: a
}) {
    if (!n) return !1;
    let o = j(e.pathname),
        s = j(t.pathname);
    if (M(e, t) || o !== `/` && o === s || a) return !1;
    let c = r?.responseThreadId;
    if (c) {
        let e = b(`/c/:conversationId`, s),
            t = b(`/g/:gizmoId/c/:conversationId`, s);
        if ((e?.params.conversationId ?? t?.params.conversationId) === c) return !1
    }
    return i != null
}
async function I(e) {
    await w({
        type: `STOP`,
        reason: a.UserNavigatedAway
    }), await u(() => !f()), e.proceed?.()
}

function L() {
    return o()
}

function R() {
    return i()
}

function z() {
    return f()
}
var B, V, H, U, W, G = e((() => {
    B = x(), D(), C(), r(), V = n(y()), v(), p(), c(), d(), T(), H = m(), U = () => {
        "use forget";
        let e = (0, B.c)(27),
            t = s(),
            n = l(L),
            r = l(R),
            i = l(z),
            a;
        e[0] !== r || e[1] !== i || e[2] !== t || e[3] !== n ? (a = e => {
            let {
                nextLocation: a,
                currentLocation: o
            } = e;
            return F({
                currentLocation: o,
                nextLocation: a,
                isIntegratedVoiceModeActive: t,
                voiceCompletionRequest: n,
                integratedVoiceModeState: r,
                isEndingVoiceSession: i
            })
        }, e[0] = r, e[1] = i, e[2] = t, e[3] = n, e[4] = a) : a = e[4];
        let o = h(a),
            c = S(),
            u = o.state === `blocked`,
            d;
        e[5] === o ? d = e[6] : (d = () => {
            o.reset?.()
        }, e[5] = o, e[6] = d);
        let f = d,
            p;
        e[7] === o ? p = e[8] : (p = () => I(o), e[7] = o, e[8] = p);
        let m = p,
            g;
        e[9] !== o.location || e[10] !== u ? (g = u && o.location != null && (N(o.location.pathname) || P(o.location)), e[9] = o.location, e[10] = u, e[11] = g) : g = e[11];
        let v = g,
            y;
        e[12] === o ? y = e[13] : (y = () => {
            I(o)
        }, e[12] = o, e[13] = y);
        let b = (0, V.useEffectEvent)(y),
            x;
        e[14] !== v || e[15] !== b ? (x = () => {
            v && b()
        }, e[14] = v, e[15] = b, e[16] = x) : x = e[16];
        let C;
        e[17] === v ? C = e[18] : (C = [v], e[17] = v, e[18] = C), (0, V.useEffect)(x, C);
        let w;
        e[19] === c ? w = e[20] : (w = c.formatMessage(W.title), e[19] = c, e[20] = w);
        let T = u && !v,
            E;
        e[21] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, H.jsx)(_, {
            ...W.description
        }), e[21] = E) : E = e[21];
        let D;
        return e[22] !== m || e[23] !== f || e[24] !== w || e[25] !== T ? (D = (0, H.jsx)(k, {
            title: w,
            isOpen: T,
            onClose: f,
            onConfirm: m,
            primaryButtonColor: `danger`,
            children: E
        }), e[22] = m, e[23] = f, e[24] = w, e[25] = T, e[26] = D) : D = e[26], D
    }, W = g({
        title: {
            id: `voice-navigation-blocker.title`,
            defaultMessage: `Voice is still active`
        },
        description: {
            id: `voice-navigation-blocker.description`,
            defaultMessage: `Navigating away from this page will end your Voice session.`
        }
    })
}));
export {
    G as n, A as r, U as t
};
//# sourceMappingURL=e8ccfb70-l4j9iujvfdwkquhj.js.map