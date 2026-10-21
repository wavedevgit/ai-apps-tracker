import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C5 as r,
    Hd as i,
    P5 as a,
    Qd as o,
    Ud as s,
    Vd as c,
    ff as l,
    g8 as u,
    nf as d,
    uf as f
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
    HYt as C,
    UYt as w,
    _Wt as T,
    bi as E,
    dWt as D,
    vi as O,
    zWt as k
} from "./conversation-small-kzsalymynzuddxee.js";
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
    return t === T && new URLSearchParams(n).get(D) === `true`
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
        reason: f.UserNavigatedAway
    }), await r(() => !s()), e.proceed?.()
}

function L() {
    return d()
}

function R() {
    return i()
}

function z() {
    return s()
}
var B, V, H, U, W, G = e((() => {
    B = x(), E(), k(), u(), V = n(y()), _(), g(), c(), l(), w(), H = p(), U = () => {
        "use forget";
        let e = (0, B.c)(27),
            t = o(),
            n = a(L),
            r = a(R),
            i = a(z),
            s;
        e[0] !== r || e[1] !== i || e[2] !== t || e[3] !== n ? (s = e => {
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
        }, e[0] = r, e[1] = i, e[2] = t, e[3] = n, e[4] = s) : s = e[4];
        let c = v(s),
            l = S(),
            u = c.state === `blocked`,
            d;
        e[5] === c ? d = e[6] : (d = () => {
            c.reset?.()
        }, e[5] = c, e[6] = d);
        let f = d,
            p;
        e[7] === c ? p = e[8] : (p = () => I(c), e[7] = c, e[8] = p);
        let m = p,
            g;
        e[9] !== c.location || e[10] !== u ? (g = u && c.location != null && (N(c.location.pathname) || P(c.location)), e[9] = c.location, e[10] = u, e[11] = g) : g = e[11];
        let _ = g,
            y;
        e[12] === c ? y = e[13] : (y = () => {
            I(c)
        }, e[12] = c, e[13] = y);
        let b = (0, V.useEffectEvent)(y),
            x;
        e[14] !== _ || e[15] !== b ? (x = () => {
            _ && b()
        }, e[14] = _, e[15] = b, e[16] = x) : x = e[16];
        let C;
        e[17] === _ ? C = e[18] : (C = [_], e[17] = _, e[18] = C), (0, V.useEffect)(x, C);
        let w;
        e[19] === l ? w = e[20] : (w = l.formatMessage(W.title), e[19] = l, e[20] = w);
        let T = u && !_,
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
//# sourceMappingURL=e8ccfb70-md54ja4dl7lk5uow.js.map