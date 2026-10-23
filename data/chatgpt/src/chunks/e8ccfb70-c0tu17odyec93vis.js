import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $d as r,
    A8 as i,
    Hd as a,
    Ud as o,
    Wd as s,
    b5 as c,
    df as l,
    j5 as u,
    pf as d,
    rf as f
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as p,
    Ln as m,
    Nn as h,
    Q as g,
    Rn as _,
    Tt as v,
    Vn as y,
    _t as b,
    wn as x,
    zn as S
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    RYt as C,
    bi as w,
    kWt as T,
    sWt as E,
    tWt as D,
    vi as O,
    zYt as k
} from "./conversation-small-bcbq46iub1p0ca1t.js";
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
    return t === E && new URLSearchParams(n).get(D) === `true`
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
    await C({
        type: `STOP`,
        reason: l.UserNavigatedAway
    }), await c(() => !s()), e.proceed?.()
}

function L() {
    return f()
}

function R() {
    return o()
}

function z() {
    return s()
}
var B, V, H, U, W, G = e((() => {
    B = x(), w(), T(), i(), V = n(y()), _(), g(), a(), d(), k(), H = p(), U = () => {
        "use forget";
        let e = (0, B.c)(27),
            t = r(),
            n = u(L),
            i = u(R),
            a = u(z),
            o;
        e[0] !== i || e[1] !== a || e[2] !== t || e[3] !== n ? (o = e => {
            let {
                nextLocation: r,
                currentLocation: o
            } = e;
            return F({
                currentLocation: o,
                nextLocation: r,
                isIntegratedVoiceModeActive: t,
                voiceCompletionRequest: n,
                integratedVoiceModeState: i,
                isEndingVoiceSession: a
            })
        }, e[0] = i, e[1] = a, e[2] = t, e[3] = n, e[4] = o) : o = e[4];
        let s = v(o),
            c = S(),
            l = s.state === `blocked`,
            d;
        e[5] === s ? d = e[6] : (d = () => {
            s.reset?.()
        }, e[5] = s, e[6] = d);
        let f = d,
            p;
        e[7] === s ? p = e[8] : (p = () => I(s), e[7] = s, e[8] = p);
        let m = p,
            g;
        e[9] !== s.location || e[10] !== l ? (g = l && s.location != null && (N(s.location.pathname) || P(s.location)), e[9] = s.location, e[10] = l, e[11] = g) : g = e[11];
        let _ = g,
            y;
        e[12] === s ? y = e[13] : (y = () => {
            I(s)
        }, e[12] = s, e[13] = y);
        let b = (0, V.useEffectEvent)(y),
            x;
        e[14] !== _ || e[15] !== b ? (x = () => {
            _ && b()
        }, e[14] = _, e[15] = b, e[16] = x) : x = e[16];
        let C;
        e[17] === _ ? C = e[18] : (C = [_], e[17] = _, e[18] = C), (0, V.useEffect)(x, C);
        let w;
        e[19] === c ? w = e[20] : (w = c.formatMessage(W.title), e[19] = c, e[20] = w);
        let T = l && !_,
            E;
        e[21] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, H.jsx)(h, {
            ...W.description
        }), e[21] = E) : E = e[21];
        let D;
        return e[22] !== m || e[23] !== f || e[24] !== w || e[25] !== T ? (D = (0, H.jsx)(O, {
            title: w,
            isOpen: T,
            onClose: f,
            onConfirm: m,
            primaryButtonColor: `danger`,
            children: E
        }), e[22] = m, e[23] = f, e[24] = w, e[25] = T, e[26] = D) : D = e[26], D
    }, W = m({
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
//# sourceMappingURL=e8ccfb70-c0tu17odyec93vis.js.map