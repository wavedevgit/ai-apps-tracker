import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    AB as r,
    Aet as i,
    BB as a,
    HB as o,
    JB as s,
    ND as c,
    RB as l,
    Rz as u,
    SH as d,
    U1 as f,
    VY as p,
    WB as m,
    _D as h,
    bD as g,
    bH as ee,
    cB as _,
    cot as v,
    gH as te,
    j5 as y,
    jet as b,
    lB as ne,
    lV as x,
    met as S,
    o as C,
    q1 as w,
    s as T,
    sB as re,
    uV as ie,
    vD as ae,
    wet as E,
    xD as oe,
    xH as se,
    y5 as D,
    y9 as ce,
    zB as O,
    zY as k,
    zz as A
} from "./4813494d-mdvd4786a87166cc.js";
import {
    At as le,
    Bn as j,
    Ht as M,
    Lt as N,
    Nn as P,
    Nt as ue,
    Pt as de,
    Q as F,
    Rn as I,
    Ut as L,
    Vn as R,
    kt as z,
    wn as B
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    brn as V,
    hrn as H,
    lk as fe,
    sk as pe,
    uk as U
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    n as W,
    t as G
} from "./7b12be43-it4qsh1kacm9p1v3.js";
import {
    n as K,
    t as q
} from "./0cb8459d-i839srmemzrwuc1c.js";
import {
    Rn as J,
    c as me,
    l as Y,
    zn as he
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    n as ge,
    t as _e
} from "./f507a508-connrzmuh4o1839q.js";
import {
    n as ve,
    t as ye
} from "./1a794ff6-j7gfwn0fzbxt3dgg.js";
import {
    C as be,
    S as xe,
    w as Se,
    x as Ce
} from "./8e42e080-g3e1270e4n4jkw5i.js";
import {
    n as we,
    t as Te
} from "./fa6172b9-lvjotbjzzeab6mma.js";

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
    return K(e, G)
}
var Oe, ke, Ae = e((() => {
    Oe = B(), W(), q(), ke = j()
}));

function je(e) {
    let t = g(e.gizmo.display.name);
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
    h()
}));

function Ne(e) {
    "use forget";
    let t = (0, Z.c)(51),
        {
            gizmo: n,
            gizmoId: i,
            enableAnonChat: l,
            cmsSections: m,
            isAnonVisitor: h,
            businessAgentContext: g
        } = e,
        _ = le(),
        v = ee(_.search) === 1 || g?.nativeRuntimeVersion === 1,
        {
            data: te,
            error: b
        } = c(v ? void 0 : i),
        x = v ? n : te,
        S = f(),
        C = ue(),
        w = de(),
        T;
    t[0] === i ? T = t[1] : (T = () => a(i), t[0] = i, t[1] = T);
    let ae = y(T),
        E;
    t[2] === i ? E = t[3] : (E = () => O(i), t[2] = i, t[3] = E);
    let D = y(E),
        k = ae?.businessAgentId ?? null,
        A = ae?.gizmoId ?? null,
        j = (0, Q.useRef)(null),
        M;
    t[4] === g ? M = t[5] : (M = g != null && !ce(), t[4] = g, t[5] = M);
    let N = M,
        P, F;
    t[6] !== _.hash || t[7] !== _.pathname || t[8] !== _.search || t[9] !== k || t[10] !== A ? (P = () => {
        if (k == null || A == null) {
            j.current = null;
            return
        }
        j.current ??= _.pathname + _.search + _.hash
    }, F = [_.hash, _.pathname, _.search, k, A], t[6] = _.hash, t[7] = _.pathname, t[8] = _.search, t[9] = k, t[10] = A, t[11] = P, t[12] = F) : (P = t[11], F = t[12]), (0, Q.useEffect)(P, F);
    let I, L;
    t[13] !== k || t[14] !== A ? (I = () => {
        if (!(k == null || A == null)) return () => {
            a(A)?.businessAgentId !== k && (pe({
                businessAgentId: k,
                gizmoId: A
            }), r(k, A))
        }
    }, L = [k, A], t[13] = k, t[14] = A, t[15] = I, t[16] = L) : (I = t[15], L = t[16]), (0, Q.useEffect)(I, L);
    let R, z;
    t[17] !== _.hash || t[18] !== _.pathname || t[19] !== _.search || t[20] !== C || t[21] !== w.state || t[22] !== D ? (R = () => {
        if (!(D == null || j.current == null || w.state !== `idle`)) {
            if (_.pathname + _.search + _.hash !== j.current) {
                C(-1);
                return
            }
            if (o() !== D.owner) {
                C(-1);
                return
            }
            if (D.kind === `hydrated`) {
                if (oe(D)) {
                    let e = D.bundledGizmo?.resource;
                    e != null && p(ie(e), D.gizmoId)
                }
                C(D.route, {
                    replace: !0
                })
            } else C(-1)
        }
    }, z = [_.hash, _.pathname, _.search, C, w.state, D], t[17] = _.hash, t[18] = _.pathname, t[19] = _.search, t[20] = C, t[21] = w.state, t[22] = D, t[23] = R, t[24] = z) : (R = t[23], z = t[24]), (0, Q.useEffect)(R, z);
    let B, V;
    t[25] === g ? (B = t[26], V = t[27]) : (V = () => {
        g != null && s(g)
    }, B = [g], t[25] = g, t[26] = B, t[27] = V), (0, Q.useEffect)(V, B);
    let H, U;
    if (t[28] !== b || t[29] !== x || t[30] !== N || t[31] !== C ? (H = () => {
            (b != null || N) && fe(), x == null && b != null && C(ne(re.GIZMO_NOT_FOUND))
        }, U = [C, x, b, N], t[28] = b, t[29] = x, t[30] = N, t[31] = C, t[32] = H, t[33] = U) : (H = t[32], U = t[33]), (0, Q.useEffect)(H, U), N) {
        let e;
        return t[34] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[34] = e) : e = t[34], e
    }
    if (v) {
        if (d(), g?.nativeRuntimeVersion !== 1) {
            let e;
            return t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(Te, {
                children: (0, $.jsx)(u, {})
            }), t[35] = e) : e = t[35], e
        }
        if (x == null) {
            let e;
            return t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[36] = e) : e = t[36], e
        }
        se(x, g.gizmoId, `consumer`)
    }
    if (!l) {
        if (b != null && S != null) {
            let e;
            return t[37] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[37] = e) : e = t[37], e
        }
        if (S == null) {
            let e = x ?? void 0,
                n;
            return t[38] === e ? n = t[39] : (n = (0, $.jsx)(Pe, {
                gizmo: e
            }), t[38] = e, t[39] = n), n
        }
    } else if (b != null) {
        let e;
        return t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[40] = e) : e = t[40], e
    }
    let W = h && Array.isArray(m) && m.length > 0,
        G = v ? void 0 : i,
        K = v ? g : void 0,
        q;
    t[41] !== i || t[42] !== G || t[43] !== K ? (q = (0, $.jsx)(me, {
        gizmoId: G,
        nativeBusinessAgentContext: K
    }, i), t[41] = i, t[42] = G, t[43] = K, t[44] = q) : q = t[44];
    let J;
    t[45] !== m || t[46] !== W ? (J = W && (0, $.jsx)(Ee, {
        sections: m
    }), t[45] = m, t[46] = W, t[47] = J) : J = t[47];
    let Y;
    return t[48] !== q || t[49] !== J ? (Y = (0, $.jsxs)($.Fragment, {
        children: [q, J]
    }), t[48] = q, t[49] = J, t[50] = Y) : Y = t[50], Y
}

function X() {
    "use forget";
    let e = (0, Z.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(Te, {
        children: (0, $.jsxs)(`div`, {
            className: `flex h-full w-full flex-col items-center justify-center`,
            children: [(0, $.jsx)(`div`, {
                className: `font-bold`,
                children: (0, $.jsx)(P, {
                    id: `gizmo.loadError`,
                    defaultMessage: `We're having trouble loading this GPT.`
                })
            }), (0, $.jsx)(P, {
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
        r = ue(),
        a;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = i({
        openModalLocation: b.GizmoPageUpsellButton
    }), t[0] = a) : a = t[0];
    let o = a,
        s;
    t[1] === r ? s = t[2] : (s = o && (0, $.jsx)(be, {
        onClick: () => V({
            navigate: r,
            openModalLocation: b.GizmoPageUpsellButton
        }),
        children: (0, $.jsx)(P, {
            id: `gizmo.upsell`,
            defaultMessage: `Sign up to chat`
        })
    }), t[1] = r, t[2] = s);
    let c;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, $.jsx)(`div`, {
        className: `text-token-text-tertiary text-sm`,
        children: (0, $.jsx)(P, {
            id: `gizmo.loginUpsell`,
            defaultMessage: `Sign up or Log in to chat`
        })
    }), t[3] = c) : c = t[3];
    let l;
    t[4] === s ? l = t[5] : (l = (0, $.jsxs)(`div`, {
        className: `mt-7 flex flex-col gap-4`,
        children: [s, c]
    }), t[4] = s, t[5] = l);
    let u;
    return t[6] !== n || t[7] !== l ? (u = (0, $.jsx)(Te, {
        children: (0, $.jsx)(J, {
            gizmo: n,
            children: l
        })
    }), t[6] = n, t[7] = l, t[8] = u) : u = t[8], u
}
var Z, Q, $, Fe, Ie, Le, Re, ze = e((() => {
    F(), Z = B(), Y(), A(), te(), U(), ve(), m(), S(), Ae(), Se(), xe(), h(), Me(), k(), he(), we(), ge(), E(), H(), n(), w(), _(), v(), x(), T(), Q = t(R()), I(), $ = j(), Fe = ({
        currentParams: e,
        currentUrl: t,
        nextUrl: n,
        formMethod: r,
        defaultShouldRevalidate: i
    }) => {
        let a = e.gizmoId,
            o = D(() => a == null ? null : O(a));
        return r == null && o?.kind === `hydrated` && o.bundledGizmo != null && o.bundledGizmo.context.nativeRuntimeVersion !== 1 && t.pathname + t.search + t.hash === l(o.bundledGizmo.context, t.search, t.searchParams.get(`prompt`) === `` ? {
            mode: `compose`
        } : void 0) && n.href === new URL(o.route, t).href && ae(o) ? !1 : i
    }, Ie = M(function() {
        "use forget";
        let e = (0, Z.c)(15),
            t = z(),
            {
                gizmoId: n
            } = N();
        t.kind === `chat_page` && t.gizmoIdAlias != null && n === t.gizmoIdAlias.alias && t.businessAgentContext?.gizmoId === t.gizmoIdAlias.gizmoId && p(t.gizmoIdAlias.alias, t.gizmoIdAlias.gizmoId);
        let r = (t.kind === `chat_page` ? t.businessAgentContext?.gizmoId ?? t.gizmoId : null) ?? n ?? ``;
        if (t.kind === `anon_gizmo`) {
            let n;
            return e[0] !== t.gizmo || e[1] !== r ? (n = (0, $.jsx)(Ce, {
                gizmo: t.gizmo
            }, r), e[0] = t.gizmo, e[1] = r, e[2] = n) : n = e[2], n
        }
        if (t.kind === `workspace_login`) {
            let n;
            e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(_e, {}), e[3] = n) : n = e[3];
            let r;
            return e[4] !== t.returnPath || e[5] !== t.ssoConnection || e[6] !== t.ssoRequired ? (r = (0, $.jsxs)($.Fragment, {
                children: [n, (0, $.jsx)(ye, {
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
    }) => e?.kind === `anon_gizmo` || e?.kind === `chat_page` && e.gizmo ? je(e.gizmo) : t.flatMap(e => e.meta ?? []), Re = L(function() {
        "use forget";
        let e = (0, Z.c)(10),
            {
                gizmoId: t
            } = N(),
            n = t === void 0 ? `` : t,
            i = ue(),
            o;
        e[0] === n ? o = e[1] : (o = () => a(n), e[0] = n, e[1] = o);
        let s = y(o),
            c;
        e[2] === n ? c = e[3] : (c = () => O(n), e[2] = n, e[3] = c);
        let l = y(c),
            u = (0, Q.useRef)(!1),
            d, f;
        e[4] !== i || e[5] !== l || e[6] !== s ? (d = () => {
            fe(), !(u.current || s == null || l == null) && (u.current = !0, r(s.businessAgentId, s.gizmoId), i(-1))
        }, f = [i, l, s], e[4] = i, e[5] = l, e[6] = s, e[7] = d, e[8] = f) : (d = e[7], f = e[8]), (0, Q.useEffect)(d, f);
        let p;
        return e[9] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, $.jsx)(C, {}), e[9] = p) : p = e[9], p
    })
}));
export {
    Le as a, ze as i, Ne as n, Fe as o, Ie as r, Re as t
};
//# sourceMappingURL=680ac424-emw194aftmwibodu.js.map