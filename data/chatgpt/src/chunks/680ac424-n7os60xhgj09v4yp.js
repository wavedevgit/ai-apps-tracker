import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $z as n,
    AB as r,
    Aet as i,
    Az as a,
    BB as o,
    DD as s,
    Fat as c,
    IB as l,
    L1 as u,
    MB as d,
    N1 as f,
    N5 as p,
    PB as ee,
    SB as te,
    UY as ne,
    VY as m,
    dD as h,
    eB as g,
    fD as re,
    h8 as _,
    hD as ie,
    hH as ae,
    jB as v,
    jet as y,
    jz as b,
    lH as x,
    mD as S,
    mH as oe,
    met as C,
    nV as se,
    o as w,
    pH as ce,
    s as T,
    tB as le,
    tV as E,
    wet as D,
    x5 as O,
    x9 as ue
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    crn as B,
    ik as pe,
    ok as me,
    rrn as V,
    sk as H
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as U,
    t as W
} from "./7b12be43-ckwok8h4szkekch1.js";
import {
    n as G,
    t as K
} from "./0cb8459d-h6dbrqo4szob9qrp.js";
import {
    Rn as q,
    c as he,
    l as J,
    zn as ge
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    n as _e,
    t as ve
} from "./f507a508-g0kxwoz1sqqsi2ev.js";
import {
    n as ye,
    t as be
} from "./1a794ff6-mt36jpmrsmsh3py8.js";
import {
    C as xe,
    S as Se,
    w as Ce,
    x as we
} from "./8e42e080-etv2clklbd1blyn3.js";
import {
    n as Te,
    t as Y
} from "./fa6172b9-jho1kn4bjptete5g.js";

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
    h()
}));

function Ne(e) {
    "use forget";
    let t = (0, Z.c)(51),
        {
            gizmo: r,
            gizmoId: i,
            enableAnonChat: c,
            cmsSections: l,
            isAnonVisitor: u,
            businessAgentContext: m
        } = e,
        h = de(),
        g = ce(h.search) === 1 || m?.nativeRuntimeVersion === 1,
        {
            data: re,
            error: _
        } = s(g ? void 0 : i),
        y = g ? r : re,
        b = f(),
        x = N(),
        S = fe(),
        C;
    t[0] === i ? C = t[1] : (C = () => d(i), t[0] = i, t[1] = C);
    let w = p(C),
        T;
    t[2] === i ? T = t[3] : (T = () => v(i), t[2] = i, t[3] = T);
    let E = p(T),
        D = w?.businessAgentId ?? null,
        O = w?.gizmoId ?? null,
        k = (0, Q.useRef)(null),
        A;
    t[4] === m ? A = t[5] : (A = m != null && !ue(), t[4] = m, t[5] = A);
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
            d(O)?.businessAgentId !== D && (pe({
                businessAgentId: D,
                gizmoId: O
            }), te(D, O))
        }
    }, I = [D, O], t[13] = D, t[14] = O, t[15] = F, t[16] = I) : (F = t[15], I = t[16]), (0, Q.useEffect)(F, I);
    let L, R;
    t[17] !== h.hash || t[18] !== h.pathname || t[19] !== h.search || t[20] !== x || t[21] !== S.state || t[22] !== E ? (L = () => {
        if (!(E == null || k.current == null || S.state !== `idle`)) {
            if (h.pathname + h.search + h.hash !== k.current) {
                x(-1);
                return
            }
            if (ee() !== E.owner) {
                x(-1);
                return
            }
            if (E.kind === `hydrated`) {
                if (ie(E)) {
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
        m != null && o(m)
    }, z = [m], t[25] = m, t[26] = z, t[27] = B), (0, Q.useEffect)(B, z);
    let V, H;
    if (t[28] !== _ || t[29] !== y || t[30] !== j || t[31] !== x ? (V = () => {
            (_ != null || j) && me(), y == null && _ != null && x(le(n.GIZMO_NOT_FOUND))
        }, H = [x, y, _, j], t[28] = _, t[29] = y, t[30] = j, t[31] = x, t[32] = V, t[33] = H) : (V = t[32], H = t[33]), (0, Q.useEffect)(V, H), j) {
        let e;
        return t[34] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[34] = e) : e = t[34], e
    }
    if (g) {
        if (ae(), m?.nativeRuntimeVersion !== 1) {
            let e;
            return t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(Y, {
                children: (0, $.jsx)(a, {})
            }), t[35] = e) : e = t[35], e
        }
        if (y == null) {
            let e;
            return t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[36] = e) : e = t[36], e
        }
        oe(y, m.gizmoId, `consumer`)
    }
    if (!c) {
        if (_ != null && b != null) {
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
    } else if (_ != null) {
        let e;
        return t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(X, {}), t[40] = e) : e = t[40], e
    }
    let U = u && Array.isArray(l) && l.length > 0,
        W = g ? void 0 : i,
        G = g ? m : void 0,
        K;
    t[41] !== i || t[42] !== W || t[43] !== G ? (K = (0, $.jsx)(he, {
        gizmoId: W,
        nativeBusinessAgentContext: G
    }, i), t[41] = i, t[42] = W, t[43] = G, t[44] = K) : K = t[44];
    let q;
    t[45] !== l || t[46] !== U ? (q = U && (0, $.jsx)(Ee, {
        sections: l
    }), t[45] = l, t[46] = U, t[47] = q) : q = t[47];
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
        a;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = i({
        openModalLocation: y.GizmoPageUpsellButton
    }), t[0] = a) : a = t[0];
    let o = a,
        s;
    t[1] === r ? s = t[2] : (s = o && (0, $.jsx)(xe, {
        onClick: () => B({
            navigate: r,
            openModalLocation: y.GizmoPageUpsellButton
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
    let l;
    t[4] === s ? l = t[5] : (l = (0, $.jsxs)(`div`, {
        className: `mt-7 flex flex-col gap-4`,
        children: [s, c]
    }), t[4] = s, t[5] = l);
    let u;
    return t[6] !== n || t[7] !== l ? (u = (0, $.jsx)(Y, {
        children: (0, $.jsx)(q, {
            gizmo: n,
            children: l
        })
    }), t[6] = n, t[7] = l, t[8] = u) : u = t[8], u
}
var Z, Q, $, Fe, Ie, Le, Re, ze = e((() => {
    P(), Z = z(), J(), b(), x(), H(), ye(), l(), C(), Ae(), Ce(), Se(), h(), Me(), m(), ge(), Te(), _e(), D(), V(), _(), u(), g(), c(), E(), T(), Q = t(L()), F(), $ = k(), Fe = ({
        currentParams: e,
        currentUrl: t,
        nextUrl: n,
        formMethod: i,
        defaultShouldRevalidate: a
    }) => {
        let o = e.gizmoId,
            s = O(() => o == null ? null : v(o));
        return i == null && s?.kind === `hydrated` && s.bundledGizmo != null && s.bundledGizmo.context.nativeRuntimeVersion !== 1 && t.pathname + t.search + t.hash === r(s.bundledGizmo.context, t.search, t.searchParams.get(`prompt`) === `` ? {
            mode: `compose`
        } : void 0) && n.href === new URL(s.route, t).href && re(s) ? !1 : a
    }, Ie = A(function() {
        "use forget";
        let e = (0, Z.c)(15),
            t = R(),
            {
                gizmoId: n
            } = j();
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
            } = j(),
            n = t === void 0 ? `` : t,
            r = N(),
            i;
        e[0] === n ? i = e[1] : (i = () => d(n), e[0] = n, e[1] = i);
        let a = p(i),
            o;
        e[2] === n ? o = e[3] : (o = () => v(n), e[2] = n, e[3] = o);
        let s = p(o),
            c = (0, Q.useRef)(!1),
            l, u;
        e[4] !== r || e[5] !== s || e[6] !== a ? (l = () => {
            me(), !(c.current || a == null || s == null) && (c.current = !0, te(a.businessAgentId, a.gizmoId), r(-1))
        }, u = [r, s, a], e[4] = r, e[5] = s, e[6] = a, e[7] = l, e[8] = u) : (l = e[7], u = e[8]), (0, Q.useEffect)(l, u);
        let f;
        return e[9] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, $.jsx)(w, {}), e[9] = f) : f = e[9], f
    })
}));
export {
    Le as a, ze as i, Ne as n, Fe as o, Ie as r, Re as t
};
//# sourceMappingURL=680ac424-n7os60xhgj09v4yp.js.map