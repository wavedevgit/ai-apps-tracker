import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bat as n,
    CB as r,
    FB as i,
    HY as a,
    LB as o,
    MB as s,
    Met as c,
    Mz as l,
    NB as u,
    OD as d,
    P1 as f,
    P5 as p,
    R1 as m,
    S5 as h,
    S9 as ee,
    Tet as g,
    VB as te,
    WY as ne,
    eB as re,
    fD as _,
    g8 as v,
    gD as ie,
    gH as ae,
    hD as y,
    hH as oe,
    het as se,
    jB as b,
    jet as x,
    jz as ce,
    mH as le,
    nB as ue,
    nV as S,
    o as C,
    pD as w,
    rV as de,
    s as T,
    tB as E,
    uH as D
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
    drn as z,
    lk as me,
    orn as B,
    sk as he,
    uk as V
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    n as H,
    t as U
} from "./7b12be43-bb7bda6677m5h5jk.js";
import {
    n as W,
    t as G
} from "./0cb8459d-fvvcw3fspihh1m17.js";
import {
    Rn as K,
    c as ge,
    l as q,
    zn as _e
} from "./8b34dbc2-ba6wt3zxvh7jce7p.js";
import {
    n as ve,
    t as ye
} from "./f507a508-bf25nn7rl715g1k3.js";
import {
    n as be,
    t as xe
} from "./1a794ff6-nr2cokodjvxe1us1.js";
import {
    C as Se,
    S as Ce,
    w as we,
    x as Te
} from "./8e42e080-jyuxnryyzluaq5zk.js";
import {
    n as Ee,
    t as J
} from "./fa6172b9-uq0ndxu9ci1l8wmk.js";

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
    let t = y(e.gizmo.display.name);
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
    _()
}));

function Ne(e) {
    "use forget";
    let t = (0, Z.c)(51),
        {
            gizmo: n,
            gizmoId: a,
            enableAnonChat: o,
            cmsSections: c,
            isAnonVisitor: l,
            businessAgentContext: m
        } = e,
        h = fe(),
        g = le(h.search) === 1 || m?.nativeRuntimeVersion === 1,
        {
            data: _,
            error: v
        } = d(g ? void 0 : a),
        y = g ? n : _,
        se = f(),
        b = M(),
        x = pe(),
        S;
    t[0] === a ? S = t[1] : (S = () => u(a), t[0] = a, t[1] = S);
    let C = p(S),
        w;
    t[2] === a ? w = t[3] : (w = () => s(a), t[2] = a, t[3] = w);
    let T = p(w),
        E = C?.businessAgentId ?? null,
        D = C?.gizmoId ?? null,
        O = (0, Q.useRef)(null),
        k;
    t[4] === m ? k = t[5] : (k = m != null && !ee(), t[4] = m, t[5] = k);
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
            u(D)?.businessAgentId !== E && (he({
                businessAgentId: E,
                gizmoId: D
            }), r(E, D))
        }
    }, F = [E, D], t[13] = E, t[14] = D, t[15] = P, t[16] = F) : (P = t[15], F = t[16]), (0, Q.useEffect)(P, F);
    let I, L;
    t[17] !== h.hash || t[18] !== h.pathname || t[19] !== h.search || t[20] !== b || t[21] !== x.state || t[22] !== T ? (I = () => {
        if (!(T == null || O.current == null || x.state !== `idle`)) {
            if (h.pathname + h.search + h.hash !== O.current) {
                b(-1);
                return
            }
            if (i() !== T.owner) {
                b(-1);
                return
            }
            if (T.kind === `hydrated`) {
                if (ie(T)) {
                    let e = T.bundledGizmo?.resource;
                    e != null && ne(de(e), T.gizmoId)
                }
                b(T.route, {
                    replace: !0
                })
            } else b(-1)
        }
    }, L = [h.hash, h.pathname, h.search, b, x.state, T], t[17] = h.hash, t[18] = h.pathname, t[19] = h.search, t[20] = b, t[21] = x.state, t[22] = T, t[23] = I, t[24] = L) : (I = t[23], L = t[24]), (0, Q.useEffect)(I, L);
    let R, z;
    t[25] === m ? (R = t[26], z = t[27]) : (z = () => {
        m != null && te(m)
    }, R = [m], t[25] = m, t[26] = R, t[27] = z), (0, Q.useEffect)(z, R);
    let B, V;
    if (t[28] !== v || t[29] !== y || t[30] !== A || t[31] !== b ? (B = () => {
            (v != null || A) && me(), y == null && v != null && b(ue(re.GIZMO_NOT_FOUND))
        }, V = [b, y, v, A], t[28] = v, t[29] = y, t[30] = A, t[31] = b, t[32] = B, t[33] = V) : (B = t[32], V = t[33]), (0, Q.useEffect)(B, V), A) {
        let e;
        return t[34] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[34] = e) : e = t[34], e
    }
    if (g) {
        if (ae(), m?.nativeRuntimeVersion !== 1) {
            let e;
            return t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(J, {
                children: (0, $.jsx)(ce, {})
            }), t[35] = e) : e = t[35], e
        }
        if (y == null) {
            let e;
            return t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[36] = e) : e = t[36], e
        }
        oe(y, m.gizmoId, `consumer`)
    }
    if (!o) {
        if (v != null && se != null) {
            let e;
            return t[37] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[37] = e) : e = t[37], e
        }
        if (se == null) {
            let e = y ?? void 0,
                n;
            return t[38] === e ? n = t[39] : (n = (0, $.jsx)(Pe, {
                gizmo: e
            }), t[38] = e, t[39] = n), n
        }
    } else if (v != null) {
        let e;
        return t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[40] = e) : e = t[40], e
    }
    let H = l && Array.isArray(c) && c.length > 0,
        U = g ? void 0 : a,
        W = g ? m : void 0,
        G;
    t[41] !== a || t[42] !== U || t[43] !== W ? (G = (0, $.jsx)(ge, {
        gizmoId: U,
        nativeBusinessAgentContext: W
    }, a), t[41] = a, t[42] = U, t[43] = W, t[44] = G) : G = t[44];
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = x({
        openModalLocation: c.GizmoPageUpsellButton
    }), t[0] = i) : i = t[0];
    let a = i,
        o;
    t[1] === r ? o = t[2] : (o = a && (0, $.jsx)(Se, {
        onClick: () => z({
            navigate: r,
            openModalLocation: c.GizmoPageUpsellButton
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
    let l;
    t[4] === o ? l = t[5] : (l = (0, $.jsxs)(`div`, {
        className: `mt-7 flex flex-col gap-4`,
        children: [o, s]
    }), t[4] = o, t[5] = l);
    let u;
    return t[6] !== n || t[7] !== l ? (u = (0, $.jsx)(J, {
        children: (0, $.jsx)(K, {
            gizmo: n,
            children: l
        })
    }), t[6] = n, t[7] = l, t[8] = u) : u = t[8], u
}
var Z, Q, $, Fe, Ie, Le, Re, ze = e((() => {
    N(), Z = R(), q(), l(), D(), V(), be(), o(), se(), Ae(), we(), Ce(), _(), Me(), a(), _e(), Ee(), ve(), g(), B(), v(), m(), E(), n(), S(), T(), Q = t(I()), P(), $ = O(), Fe = ({
        currentParams: e,
        currentUrl: t,
        nextUrl: n,
        formMethod: r,
        defaultShouldRevalidate: i
    }) => {
        let a = e.gizmoId,
            o = h(() => a == null ? null : s(a));
        return r == null && o?.kind === `hydrated` && o.bundledGizmo != null && o.bundledGizmo.context.nativeRuntimeVersion !== 1 && t.pathname + t.search + t.hash === b(o.bundledGizmo.context, t.search, t.searchParams.get(`prompt`) === `` ? {
            mode: `compose`
        } : void 0) && n.href === new URL(o.route, t).href && w(o) ? !1 : i
    }, Ie = k(function() {
        "use forget";
        let e = (0, Z.c)(15),
            t = L(),
            {
                gizmoId: n
            } = A();
        t.kind === `chat_page` && t.gizmoIdAlias != null && n === t.gizmoIdAlias.alias && t.businessAgentContext?.gizmoId === t.gizmoIdAlias.gizmoId && ne(t.gizmoIdAlias.alias, t.gizmoIdAlias.gizmoId);
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
            a;
        e[0] === n ? a = e[1] : (a = () => u(n), e[0] = n, e[1] = a);
        let o = p(a),
            c;
        e[2] === n ? c = e[3] : (c = () => s(n), e[2] = n, e[3] = c);
        let l = p(c),
            d = (0, Q.useRef)(!1),
            f, m;
        e[4] !== i || e[5] !== l || e[6] !== o ? (f = () => {
            me(), !(d.current || o == null || l == null) && (d.current = !0, r(o.businessAgentId, o.gizmoId), i(-1))
        }, m = [i, l, o], e[4] = i, e[5] = l, e[6] = o, e[7] = f, e[8] = m) : (f = e[7], m = e[8]), (0, Q.useEffect)(f, m);
        let h;
        return e[9] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, $.jsx)(C, {}), e[9] = h) : h = e[9], h
    })
}));
export {
    Le as a, ze as i, Ne as n, Fe as o, Ie as r, Re as t
};
//# sourceMappingURL=680ac424-gyxu0loutemvjqkh.js.map