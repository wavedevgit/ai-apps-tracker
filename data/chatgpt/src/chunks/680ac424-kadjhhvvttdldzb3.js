import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $z as n,
    A5 as r,
    AB as i,
    Az as a,
    BB as o,
    DD as s,
    Det as c,
    Eet as l,
    I1 as u,
    IB as d,
    M1 as f,
    MB as p,
    PB as ee,
    SB as te,
    UY as ne,
    VY as m,
    bet as h,
    dD as g,
    eB as re,
    f8 as _,
    fD as v,
    hD as ie,
    hH as ae,
    jB as oe,
    jat as y,
    jz as b,
    lH as x,
    mD as S,
    mH as se,
    nV as ce,
    o as C,
    pH as le,
    s as w,
    tB as ue,
    tV as T,
    uet as E,
    v5 as D,
    v9 as de
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as O,
    At as k,
    Bn as A,
    Ft as fe,
    Nn as j,
    Pt as M,
    Rn as N,
    Rt as P,
    Ut as F,
    Vn as I,
    Wt as L,
    jt as pe,
    wn as R
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    ik as me,
    ok as he,
    orn as z,
    sk as B,
    trn as V
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    n as H,
    t as U
} from "./7b12be43-n9f1cgshjurfzwzh.js";
import {
    n as W,
    t as G
} from "./0cb8459d-mtk6uuy7nq80qnki.js";
import {
    Rn as K,
    c as ge,
    l as q,
    zn as _e
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";
import {
    n as ve,
    t as ye
} from "./f507a508-fnjkkrgon7e4jgsf.js";
import {
    n as be,
    t as xe
} from "./1a794ff6-f7jpqd67dhja7316.js";
import {
    C as Se,
    S as Ce,
    w as we,
    x as Te
} from "./8e42e080-o6qq52cnq07oykd7.js";
import {
    n as Ee,
    t as J
} from "./fa6172b9-me1uhvfynk7b289j.js";

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
    ke = R(), H(), G(), Y = A()
}));

function je(e) {
    let t = S(e.gizmo.display.name);
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
            gizmo: i,
            gizmoId: c,
            enableAnonChat: l,
            cmsSections: u,
            isAnonVisitor: d,
            businessAgentContext: m
        } = e,
        h = pe(),
        g = le(h.search) === 1 || m?.nativeRuntimeVersion === 1,
        {
            data: re,
            error: _
        } = s(g ? void 0 : c),
        v = g ? i : re,
        y = f(),
        b = M(),
        x = fe(),
        S;
    t[0] === c ? S = t[1] : (S = () => p(c), t[0] = c, t[1] = S);
    let C = r(S),
        w;
    t[2] === c ? w = t[3] : (w = () => oe(c), t[2] = c, t[3] = w);
    let T = r(w),
        E = C?.businessAgentId ?? null,
        D = C?.gizmoId ?? null,
        O = (0, Q.useRef)(null),
        k;
    t[4] === m ? k = t[5] : (k = m != null && !de(), t[4] = m, t[5] = k);
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
            p(D)?.businessAgentId !== E && (me({
                businessAgentId: E,
                gizmoId: D
            }), te(E, D))
        }
    }, F = [E, D], t[13] = E, t[14] = D, t[15] = P, t[16] = F) : (P = t[15], F = t[16]), (0, Q.useEffect)(P, F);
    let I, L;
    t[17] !== h.hash || t[18] !== h.pathname || t[19] !== h.search || t[20] !== b || t[21] !== x.state || t[22] !== T ? (I = () => {
        if (!(T == null || O.current == null || x.state !== `idle`)) {
            if (h.pathname + h.search + h.hash !== O.current) {
                b(-1);
                return
            }
            if (ee() !== T.owner) {
                b(-1);
                return
            }
            if (T.kind === `hydrated`) {
                if (ie(T)) {
                    let e = T.bundledGizmo?.resource;
                    e != null && ne(ce(e), T.gizmoId)
                }
                b(T.route, {
                    replace: !0
                })
            } else b(-1)
        }
    }, L = [h.hash, h.pathname, h.search, b, x.state, T], t[17] = h.hash, t[18] = h.pathname, t[19] = h.search, t[20] = b, t[21] = x.state, t[22] = T, t[23] = I, t[24] = L) : (I = t[23], L = t[24]), (0, Q.useEffect)(I, L);
    let R, z;
    t[25] === m ? (R = t[26], z = t[27]) : (z = () => {
        m != null && o(m)
    }, R = [m], t[25] = m, t[26] = R, t[27] = z), (0, Q.useEffect)(z, R);
    let B, V;
    if (t[28] !== _ || t[29] !== v || t[30] !== A || t[31] !== b ? (B = () => {
            (_ != null || A) && he(), v == null && _ != null && b(ue(n.GIZMO_NOT_FOUND))
        }, V = [b, v, _, A], t[28] = _, t[29] = v, t[30] = A, t[31] = b, t[32] = B, t[33] = V) : (B = t[32], V = t[33]), (0, Q.useEffect)(B, V), A) {
        let e;
        return t[34] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[34] = e) : e = t[34], e
    }
    if (g) {
        if (ae(), m?.nativeRuntimeVersion !== 1) {
            let e;
            return t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(J, {
                children: (0, $.jsx)(a, {})
            }), t[35] = e) : e = t[35], e
        }
        if (v == null) {
            let e;
            return t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[36] = e) : e = t[36], e
        }
        se(v, m.gizmoId, `consumer`)
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
    let H = d && Array.isArray(u) && u.length > 0,
        U = g ? void 0 : c,
        W = g ? m : void 0,
        G;
    t[41] !== c || t[42] !== U || t[43] !== W ? (G = (0, $.jsx)(ge, {
        gizmoId: U,
        nativeBusinessAgentContext: W
    }, c), t[41] = c, t[42] = U, t[43] = W, t[44] = G) : G = t[44];
    let K;
    t[45] !== u || t[46] !== H ? (K = H && (0, $.jsx)(De, {
        sections: u
    }), t[45] = u, t[46] = H, t[47] = K) : K = t[47];
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = l({
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
    let u;
    t[4] === o ? u = t[5] : (u = (0, $.jsxs)(`div`, {
        className: `mt-7 flex flex-col gap-4`,
        children: [o, s]
    }), t[4] = o, t[5] = u);
    let d;
    return t[6] !== n || t[7] !== u ? (d = (0, $.jsx)(J, {
        children: (0, $.jsx)(K, {
            gizmo: n,
            children: u
        })
    }), t[6] = n, t[7] = u, t[8] = d) : d = t[8], d
}
var Z, Q, $, Fe, Ie, Le, Re, ze = e((() => {
    O(), Z = R(), q(), b(), x(), B(), be(), d(), E(), Ae(), we(), Ce(), g(), Me(), m(), _e(), Ee(), ve(), h(), V(), _(), u(), re(), y(), T(), w(), Q = t(I()), N(), $ = A(), Fe = ({
        currentParams: e,
        currentUrl: t,
        nextUrl: n,
        formMethod: r,
        defaultShouldRevalidate: a
    }) => {
        let o = e.gizmoId,
            s = D(() => o == null ? null : oe(o));
        return r == null && s?.kind === `hydrated` && s.bundledGizmo != null && s.bundledGizmo.context.nativeRuntimeVersion !== 1 && t.pathname + t.search + t.hash === i(s.bundledGizmo.context, t.search, t.searchParams.get(`prompt`) === `` ? {
            mode: `compose`
        } : void 0) && n.href === new URL(s.route, t).href && v(s) ? !1 : a
    }, Ie = F(function() {
        "use forget";
        let e = (0, Z.c)(15),
            t = k(),
            {
                gizmoId: n
            } = P();
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
    }) => e?.kind === `anon_gizmo` || e?.kind === `chat_page` && e.gizmo ? je(e.gizmo) : t.flatMap(e => e.meta ?? []), Re = L(function() {
        "use forget";
        let e = (0, Z.c)(10),
            {
                gizmoId: t
            } = P(),
            n = t === void 0 ? `` : t,
            i = M(),
            a;
        e[0] === n ? a = e[1] : (a = () => p(n), e[0] = n, e[1] = a);
        let o = r(a),
            s;
        e[2] === n ? s = e[3] : (s = () => oe(n), e[2] = n, e[3] = s);
        let c = r(s),
            l = (0, Q.useRef)(!1),
            u, d;
        e[4] !== i || e[5] !== c || e[6] !== o ? (u = () => {
            he(), !(l.current || o == null || c == null) && (l.current = !0, te(o.businessAgentId, o.gizmoId), i(-1))
        }, d = [i, c, o], e[4] = i, e[5] = c, e[6] = o, e[7] = u, e[8] = d) : (u = e[7], d = e[8]), (0, Q.useEffect)(u, d);
        let f;
        return e[9] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, $.jsx)(C, {}), e[9] = f) : f = e[9], f
    })
}));
export {
    Le as a, ze as i, Ne as n, Fe as o, Ie as r, Re as t
};
//# sourceMappingURL=680ac424-kadjhhvvttdldzb3.js.map