import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    AB as r,
    Aet as i,
    BB as a,
    Bet as o,
    HB as s,
    I5 as c,
    I9 as l,
    J5 as u,
    JB as d,
    Ket as f,
    ND as p,
    RB as m,
    Rz as ee,
    SH as te,
    U1 as ne,
    VY as re,
    WB as h,
    _D as g,
    bD as ie,
    bH as ae,
    cB as _,
    gH as v,
    lB as oe,
    lV as y,
    o as b,
    q1 as x,
    qet as S,
    s as se,
    sB as ce,
    tot as C,
    uV as le,
    vD as w,
    xD as ue,
    xH as de,
    zB as T,
    zY as E,
    zz as D
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    At as fe,
    Bn as O,
    Ht as k,
    Lt as A,
    Nn as j,
    Nt as M,
    Pt as pe,
    Q as N,
    Rn as P,
    Ut as F,
    Vn as I,
    kt as L,
    wn as R
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    brn as z,
    hrn as B,
    lk as me,
    sk as he,
    uk as V
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    n as H,
    t as U
} from "./7b12be43-lnvard258ymdgx44.js";
import {
    n as W,
    t as G
} from "./0cb8459d-ujnpy89vp7p6en1r.js";
import {
    Rn as K,
    c as ge,
    l as q,
    zn as _e
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    n as ve,
    t as ye
} from "./f507a508-g3o2nulm4hiibzi9.js";
import {
    n as be,
    t as xe
} from "./1a794ff6-lc1mk7oyhnzi5k12.js";
import {
    C as Se,
    S as Ce,
    w as we,
    x as Te
} from "./8e42e080-cv8l0w74tn6a2veu.js";
import {
    n as Ee,
    t as J
} from "./fa6172b9-pbrftcttc7f62n5g.js";

function De(e) {
    "use forget";
    let t = (0, ke.c)(4),
        {
            sections: n
        } = e;
    if (n.length === 0) return null;
    let r;
    t[0] === n ? r = t[1] : (r = n.map(Oe), t[0] = n, t[1] = r);
    let i;
    return t[2] === r ? i = t[3] : (i = (0, Y.jsx)(`section`, {
        className: `bg-token-bg-primary font-oai overflow-hidden px-4 py-12 md:px-8`,
        children: (0, Y.jsx)(`div`, {
            className: `mx-auto flex w-full flex-col gap-8`,
            children: r
        })
    }), t[2] = r, t[3] = i), i
}

function Oe(e) {
    return W(e, U)
}
var ke, Y, Ae = e((() => {
    ke = R(), H(), G(), Y = O()
}));

function je(e) {
    let t = ie(e.gizmo.display.name);
    return t == null ? [] : [{
        title: t
    }, {
        property: `og:site_name`,
        content: `ChatGPT`
    }, {
        property: `og:type`,
        content: `website`
    }, {
        property: `og:title`,
        content: t
    }, ...e.gizmo.display.description ? [{
        name: `description`,
        content: e.gizmo.display.description
    }, {
        property: `og:description`,
        content: e.gizmo.display.description
    }] : [], ...e.gizmo.display.profile_picture_url ? [{
        property: `og:image`,
        content: e.gizmo.display.profile_picture_url
    }, {
        property: `og:image:width`,
        content: `512`
    }, {
        property: `og:image:height`,
        content: `512`
    }] : []]
}
var Me = e((() => {
    g()
}));

function Ne(e) {
    "use forget";
    let t = (0, Z.c)(51),
        {
            gizmo: n,
            gizmoId: i,
            enableAnonChat: o,
            cmsSections: c,
            isAnonVisitor: f,
            businessAgentContext: m
        } = e,
        h = fe(),
        g = ae(h.search) === 1 || m?.nativeRuntimeVersion === 1,
        {
            data: ie,
            error: _
        } = p(g ? void 0 : i),
        v = g ? n : ie,
        y = ne(),
        b = M(),
        x = pe(),
        S;
    t[0] === i ? S = t[1] : (S = () => a(i), t[0] = i, t[1] = S);
    let se = u(S),
        C;
    t[2] === i ? C = t[3] : (C = () => T(i), t[2] = i, t[3] = C);
    let w = u(C),
        E = se?.businessAgentId ?? null,
        D = se?.gizmoId ?? null,
        O = (0, Q.useRef)(null),
        k;
    t[4] === m ? k = t[5] : (k = m != null && !l(), t[4] = m, t[5] = k);
    let A = k,
        j, N;
    t[6] !== h.hash || t[7] !== h.pathname || t[8] !== h.search || t[9] !== E || t[10] !== D ? (j = () => {
        if (E == null || D == null) {
            O.current = null;
            return
        }
        O.current ??= h.pathname + h.search + h.hash
    }, N = [h.hash, h.pathname, h.search, E, D], t[6] = h.hash, t[7] = h.pathname, t[8] = h.search, t[9] = E, t[10] = D, t[11] = j, t[12] = N) : (j = t[11], N = t[12]), (0, Q.useEffect)(j, N);
    let P, F;
    t[13] !== E || t[14] !== D ? (P = () => {
        if (!(E == null || D == null)) return () => {
            a(D)?.businessAgentId !== E && (he({
                businessAgentId: E,
                gizmoId: D
            }), r(E, D))
        }
    }, F = [E, D], t[13] = E, t[14] = D, t[15] = P, t[16] = F) : (P = t[15], F = t[16]), (0, Q.useEffect)(P, F);
    let I, L;
    t[17] !== h.hash || t[18] !== h.pathname || t[19] !== h.search || t[20] !== b || t[21] !== x.state || t[22] !== w ? (I = () => {
        if (!(w == null || O.current == null || x.state !== `idle`)) {
            if (h.pathname + h.search + h.hash !== O.current) {
                b(-1);
                return
            }
            if (s() !== w.owner) {
                b(-1);
                return
            }
            if (w.kind === `hydrated`) {
                if (ue(w)) {
                    let e = w.bundledGizmo?.resource;
                    e != null && re(le(e), w.gizmoId)
                }
                b(w.route, {
                    replace: !0
                })
            } else b(-1)
        }
    }, L = [h.hash, h.pathname, h.search, b, x.state, w], t[17] = h.hash, t[18] = h.pathname, t[19] = h.search, t[20] = b, t[21] = x.state, t[22] = w, t[23] = I, t[24] = L) : (I = t[23], L = t[24]), (0, Q.useEffect)(I, L);
    let R, z;
    t[25] === m ? (R = t[26], z = t[27]) : (z = () => {
        m != null && d(m)
    }, R = [m], t[25] = m, t[26] = R, t[27] = z), (0, Q.useEffect)(z, R);
    let B, V;
    if (t[28] !== _ || t[29] !== v || t[30] !== A || t[31] !== b ? (B = () => {
            (_ != null || A) && me(), v == null && _ != null && b(oe(ce.GIZMO_NOT_FOUND))
        }, V = [b, v, _, A], t[28] = _, t[29] = v, t[30] = A, t[31] = b, t[32] = B, t[33] = V) : (B = t[32], V = t[33]), (0, Q.useEffect)(B, V), A) {
        let e;
        return t[34] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[34] = e) : e = t[34], e
    }
    if (g) {
        if (te(), m?.nativeRuntimeVersion !== 1) {
            let e;
            return t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(J, {
                children: (0, $.jsx)(ee, {})
            }), t[35] = e) : e = t[35], e
        }
        if (v == null) {
            let e;
            return t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[36] = e) : e = t[36], e
        }
        de(v, m.gizmoId, `consumer`)
    }
    if (!o) {
        if (_ != null && y != null) {
            let e;
            return t[37] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[37] = e) : e = t[37], e
        }
        if (y == null) {
            let e = v ?? void 0,
                n;
            return t[38] === e ? n = t[39] : (n = (0, $.jsx)(Pe, {
                gizmo: e
            }), t[38] = e, t[39] = n), n
        }
    } else if (_ != null) {
        let e;
        return t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[40] = e) : e = t[40], e
    }
    let H = f && Array.isArray(c) && c.length > 0,
        U = g ? void 0 : i,
        W = g ? m : void 0,
        G;
    t[41] !== i || t[42] !== U || t[43] !== W ? (G = (0, $.jsx)(ge, {
        gizmoId: U,
        nativeBusinessAgentContext: W
    }, i), t[41] = i, t[42] = U, t[43] = W, t[44] = G) : G = t[44];
    let K;
    t[45] !== c || t[46] !== H ? (K = H && (0, $.jsx)(De, {
        sections: c
    }), t[45] = c, t[46] = H, t[47] = K) : K = t[47];
    let q;
    return t[48] !== G || t[49] !== K ? (q = (0, $.jsxs)($.Fragment, {
        children: [G, K]
    }), t[48] = G, t[49] = K, t[50] = q) : q = t[50], q
}

function X() {
    "use forget";
    let e = (0, Z.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(J, {
        children: (0, $.jsxs)(`div`, {
            className: `flex h-full w-full flex-col items-center justify-center`,
            children: [(0, $.jsx)(`div`, {
                className: `font-bold`,
                children: (0, $.jsx)(j, {
                    id: `gizmo.loadError`,
                    defaultMessage: `We're having trouble loading this GPT.`
                })
            }), (0, $.jsx)(j, {
                id: `gizmo.loadErrorRefresh`,
                defaultMessage: `Please refresh the page, or try again later`
            })]
        })
    }), e[0] = t) : t = e[0], t
}

function Pe(e) {
    "use forget";
    let t = (0, Z.c)(9),
        {
            gizmo: n
        } = e,
        r = M(),
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = f({
        openModalLocation: S.GizmoPageUpsellButton
    }), t[0] = i) : i = t[0];
    let a = i,
        o;
    t[1] === r ? o = t[2] : (o = a && (0, $.jsx)(Se, {
        onClick: () => z({
            navigate: r,
            openModalLocation: S.GizmoPageUpsellButton
        }),
        children: (0, $.jsx)(j, {
            id: `gizmo.upsell`,
            defaultMessage: `Sign up to chat`
        })
    }), t[1] = r, t[2] = o);
    let s;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, $.jsx)(`div`, {
        className: `text-token-text-tertiary text-sm`,
        children: (0, $.jsx)(j, {
            id: `gizmo.loginUpsell`,
            defaultMessage: `Sign up or Log in to chat`
        })
    }), t[3] = s) : s = t[3];
    let c;
    t[4] === o ? c = t[5] : (c = (0, $.jsxs)(`div`, {
        className: `mt-7 flex flex-col gap-4`,
        children: [o, s]
    }), t[4] = o, t[5] = c);
    let l;
    return t[6] !== n || t[7] !== c ? (l = (0, $.jsx)(J, {
        children: (0, $.jsx)(K, {
            gizmo: n,
            children: c
        })
    }), t[6] = n, t[7] = c, t[8] = l) : l = t[8], l
}
var Z, Q, $, Fe, Ie, Le, Re, ze = e((() => {
    N(), Z = R(), q(), D(), v(), V(), be(), h(), i(), Ae(), we(), Ce(), g(), Me(), E(), _e(), Ee(), ve(), o(), B(), n(), x(), _(), C(), y(), se(), Q = t(I()), P(), $ = O(), Fe = ({
        currentParams: e,
        currentUrl: t,
        nextUrl: n,
        formMethod: r,
        defaultShouldRevalidate: i
    }) => {
        let a = e.gizmoId,
            o = c(() => a == null ? null : T(a));
        return r == null && o?.kind === `hydrated` && o.bundledGizmo != null && o.bundledGizmo.context.nativeRuntimeVersion !== 1 && t.pathname + t.search + t.hash === m(o.bundledGizmo.context, t.search, t.searchParams.get(`prompt`) === `` ? {
            mode: `compose`
        } : void 0) && n.href === new URL(o.route, t).href && w(o) ? !1 : i
    }, Ie = k(function() {
        "use forget";
        let e = (0, Z.c)(15),
            t = L(),
            {
                gizmoId: n
            } = A();
        t.kind === `chat_page` && t.gizmoIdAlias != null && n === t.gizmoIdAlias.alias && t.businessAgentContext?.gizmoId === t.gizmoIdAlias.gizmoId && re(t.gizmoIdAlias.alias, t.gizmoIdAlias.gizmoId);
        let r = (t.kind === `chat_page` ? t.businessAgentContext?.gizmoId ?? t.gizmoId : null) ?? n ?? ``;
        if (t.kind === `anon_gizmo`) {
            let n;
            return e[0] !== t.gizmo || e[1] !== r ? (n = (0, $.jsx)(Te, {
                gizmo: t.gizmo
            }, r), e[0] = t.gizmo, e[1] = r, e[2] = n) : n = e[2], n
        }
        if (t.kind === `workspace_login`) {
            let n;
            e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(ye, {}), e[3] = n) : n = e[3];
            let r;
            return e[4] !== t.returnPath || e[5] !== t.ssoConnection || e[6] !== t.ssoRequired ? (r = (0, $.jsxs)($.Fragment, {
                children: [n, (0, $.jsx)(xe, {
                    contentType: `gpt`,
                    returnPath: t.returnPath,
                    ssoConnection: t.ssoConnection,
                    ssoRequired: t.ssoRequired
                }, t.returnPath)]
            }), e[4] = t.returnPath, e[5] = t.ssoConnection, e[6] = t.ssoRequired, e[7] = r) : r = e[7], r
        }
        let {
            gizmo: i,
            enableAnonChat: a,
            cmsSections: o,
            isAnonVisitor: s,
            businessAgentContext: c
        } = t, l;
        return e[8] !== c || e[9] !== o || e[10] !== a || e[11] !== i || e[12] !== s || e[13] !== r ? (l = (0, $.jsx)(Ne, {
            gizmoId: r,
            gizmo: i,
            enableAnonChat: a,
            cmsSections: o,
            isAnonVisitor: s,
            businessAgentContext: c
        }, r), e[8] = c, e[9] = o, e[10] = a, e[11] = i, e[12] = s, e[13] = r, e[14] = l) : l = e[14], l
    }), Le = ({
        data: e,
        matches: t
    }) => e?.kind === `anon_gizmo` || e?.kind === `chat_page` && e.gizmo ? je(e.gizmo) : t.flatMap(e => e.meta ?? []), Re = F(function() {
        "use forget";
        let e = (0, Z.c)(10),
            {
                gizmoId: t
            } = A(),
            n = t === void 0 ? `` : t,
            i = M(),
            o;
        e[0] === n ? o = e[1] : (o = () => a(n), e[0] = n, e[1] = o);
        let s = u(o),
            c;
        e[2] === n ? c = e[3] : (c = () => T(n), e[2] = n, e[3] = c);
        let l = u(c),
            d = (0, Q.useRef)(!1),
            f, p;
        e[4] !== i || e[5] !== l || e[6] !== s ? (f = () => {
            me(), !(d.current || s == null || l == null) && (d.current = !0, r(s.businessAgentId, s.gizmoId), i(-1))
        }, p = [i, l, s], e[4] = i, e[5] = l, e[6] = s, e[7] = f, e[8] = p) : (f = e[7], p = e[8]), (0, Q.useEffect)(f, p);
        let m;
        return e[9] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, $.jsx)(b, {}), e[9] = m) : m = e[9], m
    })
}));
export {
    Le as a, ze as i, Ne as n, Fe as o, Ie as r, Re as t
};
//# sourceMappingURL=680ac424-h0ee6hwbn5n0w2fz.js.map