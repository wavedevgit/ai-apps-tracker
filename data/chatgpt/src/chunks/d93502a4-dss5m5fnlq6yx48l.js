import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    I5 as r,
    J5 as i,
    R8 as a
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as o,
    Vn as s,
    wn as c
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $c as l,
    Hx as u,
    Qc as d,
    Ux as f
} from "./30901919-cmi3nh547dwrqkxv.js";

function p(e) {
    S.set(t => t === e ? t : e)
}

function m(e) {
    S.set(t => t === e ? null : t)
}

function h(e) {
    if (e) return r(() => C()[e])
}

function g(e, t) {
    e && C.set(n => e in n ? n : {
        ...n,
        [e]: t
    })
}

function _(e, t) {
    e && C.set(n => ({
        ...n,
        [e]: t
    }))
}

function v(e) {
    "use forget";
    let t = (0, b.c)(7),
        {
            memoryKey: n,
            initialMuted: r
        } = e,
        a;
    t[0] === n ? a = t[1] : (a = () => {
        if (n) return C()[n]
    }, t[0] = n, t[1] = a);
    let o = i(a) ?? r,
        s;
    t[2] === n ? s = t[3] : (s = e => {
        _(n, e)
    }, t[2] = n, t[3] = s);
    let c = s,
        l;
    return t[4] !== o || t[5] !== c ? (l = {
        isMuted: o,
        setMuted: c
    }, t[4] = o, t[5] = c, t[6] = l) : l = t[6], l
}

function y(e) {
    "use forget";
    let t = (0, b.c)(22),
        {
            ownerId: n,
            isMuted: r,
            canOwnAudio: a,
            onMutedChange: o
        } = e,
        s = i(S),
        c = s === n,
        l = a && !r,
        u;
    t[0] === n ? u = t[1] : (u = () => m(n), t[0] = n, t[1] = u);
    let d = u,
        f, h;
    t[2] !== s || t[3] !== c || t[4] !== n || t[5] !== l ? (f = () => {
        if (!l) {
            m(n);
            return
        }(s == null || c) && p(n)
    }, h = [s, c, n, l], t[2] = s, t[3] = c, t[4] = n, t[5] = l, t[6] = f, t[7] = h) : (f = t[6], h = t[7]), (0, x.useEffect)(f, h);
    let g, _;
    t[8] === n ? (g = t[9], _ = t[10]) : (g = () => () => {
        m(n)
    }, _ = [n], t[8] = n, t[9] = g, t[10] = _), (0, x.useEffect)(g, _);
    let v;
    t[11] !== a || t[12] !== o || t[13] !== n ? (v = e => {
        e || !a ? m(n) : p(n), o(e)
    }, t[11] = a, t[12] = o, t[13] = n, t[14] = v) : v = t[14];
    let y = v,
        C;
    t[15] !== r || t[16] !== y ? (C = () => {
        y(!r)
    }, t[15] = r, t[16] = y, t[17] = C) : C = t[17];
    let w = C,
        T = r || !a || !c,
        E;
    return t[18] !== d || t[19] !== T || t[20] !== w ? (E = {
        shouldMute: T,
        releaseAudio: d,
        toggleMuted: w
    }, t[18] = d, t[19] = T, t[20] = w, t[21] = E) : E = t[21], E
}
var b, x, S, C, w = e((() => {
    b = c(), n(), x = t(s()), S = a(null, {
        name: `activeAudioOwnerId$`
    }), C = a({}, {
        name: `rememberedMutedPreferenceByKey$`
    })
}));

function T(e) {
    "use forget";
    let t = (0, E.c)(3),
        {
            muted: n,
            className: r
        } = e,
        i = r === void 0 ? `h-5 w-5 text-white` : r,
        a = n ? l : f,
        o;
    return t[0] !== a || t[1] !== i ? (o = (0, D.jsx)(a, {
        "aria-hidden": !0,
        className: i
    }), t[0] = a, t[1] = i, t[2] = o) : o = t[2], o
}
var E, D, O = e((() => {
    E = c(), d(), u(), D = o()
}));
export {
    w as a, y as c, h as i, v as l, O as n, g as o, p as r, _ as s, T as t
};
//# sourceMappingURL=d93502a4-dss5m5fnlq6yx48l.js.map