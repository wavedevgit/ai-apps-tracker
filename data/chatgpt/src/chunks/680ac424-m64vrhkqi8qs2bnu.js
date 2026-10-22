import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AB as n,
    BB as r,
    Det as i,
    F5 as a,
    F9 as o,
    HB as s,
    JB as c,
    Let as l,
    ND as u,
    Qat as d,
    RB as f,
    Rz as p,
    SH as ee,
    U1 as te,
    Uet as m,
    VY as ne,
    WB as h,
    Wet as g,
    _D as _,
    bD as v,
    bH as re,
    cB as y,
    gH as b,
    k8 as x,
    lB as ie,
    lV as S,
    o as C,
    q1 as ae,
    q5 as w,
    s as T,
    sB as oe,
    uV as se,
    vD as E,
    xD as ce,
    xH as le,
    zB as D,
    zY as O,
    zz as k
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    At as ue,
    Bn as A,
    Ht as j,
    Lt as M,
    Nn as N,
    Nt as de,
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
    nrn as B,
    sk as me,
    srn as V,
    uk as H
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    n as U,
    t as W
} from "./7b12be43-lswngmrt6j26cjdk.js";
import {
    n as G,
    t as K
} from "./0cb8459d-d3ip3c718ixwm2fk.js";
import {
    Rn as q,
    c as he,
    l as J,
    zn as ge
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
import {
    n as _e,
    t as ve
} from "./f507a508-5xju22notetfze6d.js";
import {
    n as ye,
    t as be
} from "./1a794ff6-e2oof31nbdbhnwoh.js";
import {
    C as xe,
    S as Se,
    w as Ce,
    x as we
} from "./8e42e080-ncqno4op8m024unr.js";
import {
    n as Te,
    t as Y
} from "./fa6172b9-ceftb8vlql3f7j8y.js";

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
    Oe = z(), U(), K(), ke = A()
}));

function je(e) {
    let t = v(e.gizmo.display.name);
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
            gizmo: i,
            gizmoId: a,
            enableAnonChat: l,
            cmsSections: d,
            isAnonVisitor: f,
            businessAgentContext: m
        } = e,
        h = ue(),
        g = re(h.search) === 1 || m?.nativeRuntimeVersion === 1,
        {
            data: _,
            error: v
        } = u(g ? void 0 : a),
        y = g ? i : _,
        b = te(),
        x = de(),
        S = fe(),
        C;
    t[0] === a ? C = t[1] : (C = () => r(a), t[0] = a, t[1] = C);
    let ae = w(C),
        T;
    t[2] === a ? T = t[3] : (T = () => D(a), t[2] = a, t[3] = T);
    let E = w(T),
        O = ae?.businessAgentId ?? null,
        k = ae?.gizmoId ?? null,
        A = (0, Q.useRef)(null),
        j;
    t[4] === m ? j = t[5] : (j = m != null && !o(), t[4] = m, t[5] = j);
    let M = j,
        N, P;
    t[6] !== h.hash || t[7] !== h.pathname || t[8] !== h.search || t[9] !== O || t[10] !== k ? (N = () => {
        if (O == null || k == null) {
            A.current = null;
            return
        }
        A.current ??= h.pathname + h.search + h.hash
    }, P = [h.hash, h.pathname, h.search, O, k], t[6] = h.hash, t[7] = h.pathname, t[8] = h.search, t[9] = O, t[10] = k, t[11] = N, t[12] = P) : (N = t[11], P = t[12]), (0, Q.useEffect)(N, P);
    let F, I;
    t[13] !== O || t[14] !== k ? (F = () => {
        if (!(O == null || k == null)) return () => {
            r(k)?.businessAgentId !== O && (me({
                businessAgentId: O,
                gizmoId: k
            }), n(O, k))
        }
    }, I = [O, k], t[13] = O, t[14] = k, t[15] = F, t[16] = I) : (F = t[15], I = t[16]), (0, Q.useEffect)(F, I);
    let L, R;
    t[17] !== h.hash || t[18] !== h.pathname || t[19] !== h.search || t[20] !== x || t[21] !== S.state || t[22] !== E ? (L = () => {
        if (!(E == null || A.current == null || S.state !== `idle`)) {
            if (h.pathname + h.search + h.hash !== A.current) {
                x(-1);
                return
            }
            if (s() !== E.owner) {
                x(-1);
                return
            }
            if (E.kind === `hydrated`) {
                if (ce(E)) {
                    let e = E.bundledGizmo?.resource;
                    e != null && ne(se(e), E.gizmoId)
                }
                x(E.route, {
                    replace: !0
                })
            } else x(-1)
        }
    }, R = [h.hash, h.pathname, h.search, x, S.state, E], t[17] = h.hash, t[18] = h.pathname, t[19] = h.search, t[20] = x, t[21] = S.state, t[22] = E, t[23] = L, t[24] = R) : (L = t[23], R = t[24]), (0, Q.useEffect)(L, R);
    let z, B;
    t[25] === m ? (z = t[26], B = t[27]) : (B = () => {
        m != null && c(m)
    }, z = [m], t[25] = m, t[26] = z, t[27] = B), (0, Q.useEffect)(B, z);
    let V, H;
    if (t[28] !== v || t[29] !== y || t[30] !== M || t[31] !== x ? (V = () => {
            (v != null || M) && pe(), y == null && v != null && x(ie(oe.GIZMO_NOT_FOUND))
        }, H = [x, y, v, M], t[28] = v, t[29] = y, t[30] = M, t[31] = x, t[32] = V, t[33] = H) : (V = t[32], H = t[33]), (0, Q.useEffect)(V, H), M) {
        let e;
        return t[34] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[34] = e) : e = t[34], e
    }
    if (g) {
        if (ee(), m?.nativeRuntimeVersion !== 1) {
            let e;
            return t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(Y, {
                children: (0, $.jsx)(p, {})
            }), t[35] = e) : e = t[35], e
        }
        if (y == null) {
            let e;
            return t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[36] = e) : e = t[36], e
        }
        le(y, m.gizmoId, `consumer`)
    }
    if (!l) {
        if (v != null && b != null) {
            let e;
            return t[37] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[37] = e) : e = t[37], e
        }
        if (b == null) {
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
    let U = f && Array.isArray(d) && d.length > 0,
        W = g ? void 0 : a,
        G = g ? m : void 0,
        K;
    t[41] !== a || t[42] !== W || t[43] !== G ? (K = (0, $.jsx)(he, {
        gizmoId: W,
        nativeBusinessAgentContext: G
    }, a), t[41] = a, t[42] = W, t[43] = G, t[44] = K) : K = t[44];
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
                children: (0, $.jsx)(N, {
                    id: `gizmo.loadError`,
                    defaultMessage: `We're having trouble loading this GPT.`
                })
            }), (0, $.jsx)(N, {
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
        r = de(),
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = m({
        openModalLocation: g.GizmoPageUpsellButton
    }), t[0] = i) : i = t[0];
    let a = i,
        o;
    t[1] === r ? o = t[2] : (o = a && (0, $.jsx)(xe, {
        onClick: () => V({
            navigate: r,
            openModalLocation: g.GizmoPageUpsellButton
        }),
        children: (0, $.jsx)(N, {
            id: `gizmo.upsell`,
            defaultMessage: `Sign up to chat`
        })
    }), t[1] = r, t[2] = o);
    let s;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, $.jsx)(`div`, {
        className: `text-token-text-tertiary text-sm`,
        children: (0, $.jsx)(N, {
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
    return t[6] !== n || t[7] !== c ? (l = (0, $.jsx)(Y, {
        children: (0, $.jsx)(q, {
            gizmo: n,
            children: c
        })
    }), t[6] = n, t[7] = c, t[8] = l) : l = t[8], l
}
var Z, Q, $, Fe, Ie, Le, Re, ze = e((() => {
    P(), Z = z(), J(), k(), b(), H(), ye(), h(), i(), Ae(), Ce(), Se(), _(), Me(), O(), ge(), Te(), _e(), l(), B(), x(), ae(), y(), d(), S(), T(), Q = t(L()), F(), $ = A(), Fe = ({
        currentParams: e,
        currentUrl: t,
        nextUrl: n,
        formMethod: r,
        defaultShouldRevalidate: i
    }) => {
        let o = e.gizmoId,
            s = a(() => o == null ? null : D(o));
        return r == null && s?.kind === `hydrated` && s.bundledGizmo != null && s.bundledGizmo.context.nativeRuntimeVersion !== 1 && t.pathname + t.search + t.hash === f(s.bundledGizmo.context, t.search, t.searchParams.get(`prompt`) === `` ? {
            mode: `compose`
        } : void 0) && n.href === new URL(s.route, t).href && E(s) ? !1 : i
    }, Ie = j(function() {
        "use forget";
        let e = (0, Z.c)(15),
            t = R(),
            {
                gizmoId: n
            } = M();
        t.kind === `chat_page` && t.gizmoIdAlias != null && n === t.gizmoIdAlias.alias && t.businessAgentContext?.gizmoId === t.gizmoIdAlias.gizmoId && ne(t.gizmoIdAlias.alias, t.gizmoIdAlias.gizmoId);
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
            } = M(),
            i = t === void 0 ? `` : t,
            a = de(),
            o;
        e[0] === i ? o = e[1] : (o = () => r(i), e[0] = i, e[1] = o);
        let s = w(o),
            c;
        e[2] === i ? c = e[3] : (c = () => D(i), e[2] = i, e[3] = c);
        let l = w(c),
            u = (0, Q.useRef)(!1),
            d, f;
        e[4] !== a || e[5] !== l || e[6] !== s ? (d = () => {
            pe(), !(u.current || s == null || l == null) && (u.current = !0, n(s.businessAgentId, s.gizmoId), a(-1))
        }, f = [a, l, s], e[4] = a, e[5] = l, e[6] = s, e[7] = d, e[8] = f) : (d = e[7], f = e[8]), (0, Q.useEffect)(d, f);
        let p;
        return e[9] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, $.jsx)(C, {}), e[9] = p) : p = e[9], p
    })
}));
export {
    Le as a, ze as i, Ne as n, Fe as o, Ie as r, Re as t
};
//# sourceMappingURL=680ac424-m64vrhkqi8qs2bnu.js.map