import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bd as r,
    Hd as i,
    M5 as a,
    Vd as o,
    Zd as s,
    df as c,
    lf as l,
    m8 as u,
    tf as d,
    x5 as f
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as p,
    Bn as m,
    Et as h,
    Hn as g,
    Pn as _,
    Rn as v,
    Tn as y,
    Vn as b,
    vt as x,
    zn as S
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    IYt as C,
    LYt as w,
    NWt as T,
    aWt as E,
    bi as D,
    dWt as O,
    vi as k
} from "./conversation-small-cawdu7il3ha6y70c.js";
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
    return t === `/` || x(`/c/:conversationId`, t) != null || x(`/g/:gizmoId/c/:conversationId`, t) != null
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
        let e = x(`/c/:conversationId`, s),
            t = x(`/g/:gizmoId/c/:conversationId`, s);
        if ((e?.params.conversationId ?? t?.params.conversationId) === c) return !1
    }
    return i != null
}
async function I(e) {
    await C({
        type: `STOP`,
        reason: l.UserNavigatedAway
    }), await f(() => !i()), e.proceed?.()
}

function L() {
    return d()
}

function R() {
    return o()
}

function z() {
    return i()
}
var B, V, H, U, W, G = e((() => {
    B = y(), D(), T(), u(), V = n(g()), S(), p(), r(), c(), w(), H = b(), U = () => {
        "use forget";
        let e = (0, B.c)(27),
            t = s(),
            n = a(L),
            r = a(R),
            i = a(z),
            o;
        e[0] !== r || e[1] !== i || e[2] !== t || e[3] !== n ? (o = e => {
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
        }, e[0] = r, e[1] = i, e[2] = t, e[3] = n, e[4] = o) : o = e[4];
        let c = h(o),
            l = m(),
            u = c.state === `blocked`,
            d;
        e[5] === c ? d = e[6] : (d = () => {
            c.reset?.()
        }, e[5] = c, e[6] = d);
        let f = d,
            p;
        e[7] === c ? p = e[8] : (p = () => I(c), e[7] = c, e[8] = p);
        let g = p,
            v;
        e[9] !== c.location || e[10] !== u ? (v = u && c.location != null && (N(c.location.pathname) || P(c.location)), e[9] = c.location, e[10] = u, e[11] = v) : v = e[11];
        let y = v,
            b;
        e[12] === c ? b = e[13] : (b = () => {
            I(c)
        }, e[12] = c, e[13] = b);
        let x = (0, V.useEffectEvent)(b),
            S;
        e[14] !== y || e[15] !== x ? (S = () => {
            y && x()
        }, e[14] = y, e[15] = x, e[16] = S) : S = e[16];
        let C;
        e[17] === y ? C = e[18] : (C = [y], e[17] = y, e[18] = C), (0, V.useEffect)(S, C);
        let w;
        e[19] === l ? w = e[20] : (w = l.formatMessage(W.title), e[19] = l, e[20] = w);
        let T = u && !y,
            E;
        e[21] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, H.jsx)(_, {
            ...W.description
        }), e[21] = E) : E = e[21];
        let D;
        return e[22] !== g || e[23] !== f || e[24] !== w || e[25] !== T ? (D = (0, H.jsx)(k, {
            title: w,
            isOpen: T,
            onClose: f,
            onConfirm: g,
            primaryButtonColor: `danger`,
            children: E
        }), e[22] = g, e[23] = f, e[24] = w, e[25] = T, e[26] = D) : D = e[26], D
    }, W = v({
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
//# sourceMappingURL=e8ccfb70-mb6bzojqgfmen7qs.js.map