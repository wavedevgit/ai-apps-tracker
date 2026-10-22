import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AB as n,
    BB as r,
    F5 as i,
    F9 as a,
    Get as o,
    HB as s,
    JB as c,
    Ket as l,
    ND as u,
    RB as d,
    Rz as f,
    SH as p,
    U1 as ee,
    VY as te,
    WB as ne,
    _D as m,
    bD as h,
    bH as re,
    cB as g,
    eot as ie,
    gH as _,
    k8 as v,
    ket as y,
    lB as ae,
    lV as b,
    o as x,
    q1 as S,
    q5 as C,
    s as oe,
    sB as se,
    uV as ce,
    vD as w,
    xD as le,
    xH as ue,
    zB as T,
    zY as E,
    zet as D,
    zz as O
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    At as de,
    Bn as k,
    Ht as A,
    Lt as j,
    Nn as M,
    Nt as N,
    Pt as fe,
    Q as P,
    Rn as F,
    Ut as I,
    Vn as L,
    kt as R,
    wn as z
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    lk as pe,
    prn as B,
    sk as me,
    uk as V,
    vrn as H
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    n as U,
    t as W
} from "./7b12be43-h63ogrrvpv1atrcz.js";
import {
    n as G,
    t as K
} from "./0cb8459d-m763pvv5g5kyal9s.js";
import {
    Rn as q,
    c as he,
    l as J,
    zn as ge
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    n as _e,
    t as ve
} from "./f507a508-lx2mx6jmb7g47hhj.js";
import {
    n as ye,
    t as be
} from "./1a794ff6-i6hgc1lgsx6ldemh.js";
import {
    C as xe,
    S as Se,
    w as Ce,
    x as we
} from "./8e42e080-n163mvc7mh35dxle.js";
import {
    n as Te,
    t as Y
} from "./fa6172b9-m1frgyncnyfvi27r.js";

function Ee(e) {
    "use forget";
    let t = (0, Oe.c)(4),
        {
            sections: n
        } = e;
    if (n.length === 0) return null;
    let r;
    t[0] === n ? r = t[1] : (r = n.map(De), t[0] = n, t[1] = r);
    let i;
    return t[2] === r ? i = t[3] : (i = (0, ke.jsx)(`section`, {
        className: `bg-token-bg-primary font-oai overflow-hidden px-4 py-12 md:px-8`,
        children: (0, ke.jsx)(`div`, {
            className: `mx-auto flex w-full flex-col gap-8`,
            children: r
        })
    }), t[2] = r, t[3] = i), i
}

function De(e) {
    return G(e, W)
}
var Oe, ke, Ae = e((() => {
    Oe = z(), U(), K(), ke = k()
}));

function je(e) {
    let t = h(e.gizmo.display.name);
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
    m()
}));

function Ne(e) {
    "use forget";
    let t = (0, Z.c)(51),
        {
            gizmo: i,
            gizmoId: o,
            enableAnonChat: l,
            cmsSections: d,
            isAnonVisitor: ne,
            businessAgentContext: m
        } = e,
        h = de(),
        g = re(h.search) === 1 || m?.nativeRuntimeVersion === 1,
        {
            data: ie,
            error: _
        } = u(g ? void 0 : o),
        v = g ? i : ie,
        y = ee(),
        b = N(),
        x = fe(),
        S;
    t[0] === o ? S = t[1] : (S = () => r(o), t[0] = o, t[1] = S);
    let oe = C(S),
        w;
    t[2] === o ? w = t[3] : (w = () => T(o), t[2] = o, t[3] = w);
    let E = C(w),
        D = oe?.businessAgentId ?? null,
        O = oe?.gizmoId ?? null,
        k = (0, Q.useRef)(null),
        A;
    t[4] === m ? A = t[5] : (A = m != null && !a(), t[4] = m, t[5] = A);
    let j = A,
        M, P;
    t[6] !== h.hash || t[7] !== h.pathname || t[8] !== h.search || t[9] !== D || t[10] !== O ? (M = () => {
        if (D == null || O == null) {
            k.current = null;
            return
        }
        k.current ??= h.pathname + h.search + h.hash
    }, P = [h.hash, h.pathname, h.search, D, O], t[6] = h.hash, t[7] = h.pathname, t[8] = h.search, t[9] = D, t[10] = O, t[11] = M, t[12] = P) : (M = t[11], P = t[12]), (0, Q.useEffect)(M, P);
    let F, I;
    t[13] !== D || t[14] !== O ? (F = () => {
        if (!(D == null || O == null)) return () => {
            r(O)?.businessAgentId !== D && (me({
                businessAgentId: D,
                gizmoId: O
            }), n(D, O))
        }
    }, I = [D, O], t[13] = D, t[14] = O, t[15] = F, t[16] = I) : (F = t[15], I = t[16]), (0, Q.useEffect)(F, I);
    let L, R;
    t[17] !== h.hash || t[18] !== h.pathname || t[19] !== h.search || t[20] !== b || t[21] !== x.state || t[22] !== E ? (L = () => {
        if (!(E == null || k.current == null || x.state !== `idle`)) {
            if (h.pathname + h.search + h.hash !== k.current) {
                b(-1);
                return
            }
            if (s() !== E.owner) {
                b(-1);
                return
            }
            if (E.kind === `hydrated`) {
                if (le(E)) {
                    let e = E.bundledGizmo?.resource;
                    e != null && te(ce(e), E.gizmoId)
                }
                b(E.route, {
                    replace: !0
                })
            } else b(-1)
        }
    }, R = [h.hash, h.pathname, h.search, b, x.state, E], t[17] = h.hash, t[18] = h.pathname, t[19] = h.search, t[20] = b, t[21] = x.state, t[22] = E, t[23] = L, t[24] = R) : (L = t[23], R = t[24]), (0, Q.useEffect)(L, R);
    let z, B;
    t[25] === m ? (z = t[26], B = t[27]) : (B = () => {
        m != null && c(m)
    }, z = [m], t[25] = m, t[26] = z, t[27] = B), (0, Q.useEffect)(B, z);
    let V, H;
    if (t[28] !== _ || t[29] !== v || t[30] !== j || t[31] !== b ? (V = () => {
            (_ != null || j) && pe(), v == null && _ != null && b(ae(se.GIZMO_NOT_FOUND))
        }, H = [b, v, _, j], t[28] = _, t[29] = v, t[30] = j, t[31] = b, t[32] = V, t[33] = H) : (V = t[32], H = t[33]), (0, Q.useEffect)(V, H), j) {
        let e;
        return t[34] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[34] = e) : e = t[34], e
    }
    if (g) {
        if (p(), m?.nativeRuntimeVersion !== 1) {
            let e;
            return t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(Y, {
                children: (0, $.jsx)(f, {})
            }), t[35] = e) : e = t[35], e
        }
        if (v == null) {
            let e;
            return t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[36] = e) : e = t[36], e
        }
        ue(v, m.gizmoId, `consumer`)
    }
    if (!l) {
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
    let U = ne && Array.isArray(d) && d.length > 0,
        W = g ? void 0 : o,
        G = g ? m : void 0,
        K;
    t[41] !== o || t[42] !== W || t[43] !== G ? (K = (0, $.jsx)(he, {
        gizmoId: W,
        nativeBusinessAgentContext: G
    }, o), t[41] = o, t[42] = W, t[43] = G, t[44] = K) : K = t[44];
    let q;
    t[45] !== d || t[46] !== U ? (q = U && (0, $.jsx)(Ee, {
        sections: d
    }), t[45] = d, t[46] = U, t[47] = q) : q = t[47];
    let J;
    return t[48] !== K || t[49] !== q ? (J = (0, $.jsxs)($.Fragment, {
        children: [K, q]
    }), t[48] = K, t[49] = q, t[50] = J) : J = t[50], J
}

function X() {
    "use forget";
    let e = (0, Z.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(Y, {
        children: (0, $.jsxs)(`div`, {
            className: `flex h-full w-full flex-col items-center justify-center`,
            children: [(0, $.jsx)(`div`, {
                className: `font-bold`,
                children: (0, $.jsx)(M, {
                    id: `gizmo.loadError`,
                    defaultMessage: `We're having trouble loading this GPT.`
                })
            }), (0, $.jsx)(M, {
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
        r = N(),
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = o({
        openModalLocation: l.GizmoPageUpsellButton
    }), t[0] = i) : i = t[0];
    let a = i,
        s;
    t[1] === r ? s = t[2] : (s = a && (0, $.jsx)(xe, {
        onClick: () => H({
            navigate: r,
            openModalLocation: l.GizmoPageUpsellButton
        }),
        children: (0, $.jsx)(M, {
            id: `gizmo.upsell`,
            defaultMessage: `Sign up to chat`
        })
    }), t[1] = r, t[2] = s);
    let c;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, $.jsx)(`div`, {
        className: `text-token-text-tertiary text-sm`,
        children: (0, $.jsx)(M, {
            id: `gizmo.loginUpsell`,
            defaultMessage: `Sign up or Log in to chat`
        })
    }), t[3] = c) : c = t[3];
    let u;
    t[4] === s ? u = t[5] : (u = (0, $.jsxs)(`div`, {
        className: `mt-7 flex flex-col gap-4`,
        children: [s, c]
    }), t[4] = s, t[5] = u);
    let d;
    return t[6] !== n || t[7] !== u ? (d = (0, $.jsx)(Y, {
        children: (0, $.jsx)(q, {
            gizmo: n,
            children: u
        })
    }), t[6] = n, t[7] = u, t[8] = d) : d = t[8], d
}
var Z, Q, $, Fe, Ie, Le, Re, ze = e((() => {
    P(), Z = z(), J(), O(), _(), V(), ye(), ne(), y(), Ae(), Ce(), Se(), m(), Me(), E(), ge(), Te(), _e(), D(), B(), v(), S(), g(), ie(), b(), oe(), Q = t(L()), F(), $ = k(), Fe = ({
        currentParams: e,
        currentUrl: t,
        nextUrl: n,
        formMethod: r,
        defaultShouldRevalidate: a
    }) => {
        let o = e.gizmoId,
            s = i(() => o == null ? null : T(o));
        return r == null && s?.kind === `hydrated` && s.bundledGizmo != null && s.bundledGizmo.context.nativeRuntimeVersion !== 1 && t.pathname + t.search + t.hash === d(s.bundledGizmo.context, t.search, t.searchParams.get(`prompt`) === `` ? {
            mode: `compose`
        } : void 0) && n.href === new URL(s.route, t).href && w(s) ? !1 : a
    }, Ie = A(function() {
        "use forget";
        let e = (0, Z.c)(15),
            t = R(),
            {
                gizmoId: n
            } = j();
        t.kind === `chat_page` && t.gizmoIdAlias != null && n === t.gizmoIdAlias.alias && t.businessAgentContext?.gizmoId === t.gizmoIdAlias.gizmoId && te(t.gizmoIdAlias.alias, t.gizmoIdAlias.gizmoId);
        let r = (t.kind === `chat_page` ? t.businessAgentContext?.gizmoId ?? t.gizmoId : null) ?? n ?? ``;
        if (t.kind === `anon_gizmo`) {
            let n;
            return e[0] !== t.gizmo || e[1] !== r ? (n = (0, $.jsx)(we, {
                gizmo: t.gizmo
            }, r), e[0] = t.gizmo, e[1] = r, e[2] = n) : n = e[2], n
        }
        if (t.kind === `workspace_login`) {
            let n;
            e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(ve, {}), e[3] = n) : n = e[3];
            let r;
            return e[4] !== t.returnPath || e[5] !== t.ssoConnection || e[6] !== t.ssoRequired ? (r = (0, $.jsxs)($.Fragment, {
                children: [n, (0, $.jsx)(be, {
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
    }) => e?.kind === `anon_gizmo` || e?.kind === `chat_page` && e.gizmo ? je(e.gizmo) : t.flatMap(e => e.meta ?? []), Re = I(function() {
        "use forget";
        let e = (0, Z.c)(10),
            {
                gizmoId: t
            } = j(),
            i = t === void 0 ? `` : t,
            a = N(),
            o;
        e[0] === i ? o = e[1] : (o = () => r(i), e[0] = i, e[1] = o);
        let s = C(o),
            c;
        e[2] === i ? c = e[3] : (c = () => T(i), e[2] = i, e[3] = c);
        let l = C(c),
            u = (0, Q.useRef)(!1),
            d, f;
        e[4] !== a || e[5] !== l || e[6] !== s ? (d = () => {
            pe(), !(u.current || s == null || l == null) && (u.current = !0, n(s.businessAgentId, s.gizmoId), a(-1))
        }, f = [a, l, s], e[4] = a, e[5] = l, e[6] = s, e[7] = d, e[8] = f) : (d = e[7], f = e[8]), (0, Q.useEffect)(d, f);
        let p;
        return e[9] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, $.jsx)(x, {}), e[9] = p) : p = e[9], p
    })
}));
export {
    Le as a, ze as i, Ne as n, Fe as o, Ie as r, Re as t
};
//# sourceMappingURL=680ac424-fne77y85h3vjq2gu.js.map