import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $9 as n,
    B6 as r,
    Fz as i,
    IB as a,
    Iz as o,
    JE as s,
    K7 as c,
    K8 as l,
    LB as u,
    Pz as d,
    R9 as f,
    XE as p,
    ZE as ee,
    _B as m,
    _Y as h,
    dB as g,
    eet as _,
    fB as v,
    hB as te,
    hY as y,
    i5 as b,
    iat as x,
    lD as ne,
    o as S,
    o1 as re,
    pB as C,
    q9 as w,
    qE as T,
    rB as ie,
    s as E,
    u1 as D,
    xB as ae
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as O,
    At as k,
    Bn as A,
    Ft as oe,
    Nn as j,
    Pt as M,
    Rn as N,
    Rt as P,
    Ut as F,
    Vn as I,
    Wt as L,
    jt as se,
    wn as R
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Jnn as z,
    Unn as B,
    ak as V,
    ik as ce,
    nk as le
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as H,
    t as U
} from "./7b12be43-dg8f6yql8gok6gax.js";
import {
    n as W,
    t as ue
} from "./0cb8459d-mlutm5nwhcmq2mgm.js";
import {
    Rn as de,
    c as fe,
    l as pe,
    zn as me
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as he,
    t as ge
} from "./f507a508-dv1rfyxvpkroj0s1.js";
import {
    n as _e,
    t as ve
} from "./1a794ff6-kiv7bk0z9t8iwufy.js";
import {
    C as ye,
    S as be,
    w as xe,
    x as Se
} from "./8e42e080-e9xbt0oihy2aeelq.js";
import {
    n as Ce,
    t as G
} from "./fa6172b9-brmj21hglvqzfeo3.js";

function we(e) {
    "use forget";
    let t = (0, K.c)(4),
        {
            sections: n
        } = e;
    if (n.length === 0) return null;
    let r;
    t[0] === n ? r = t[1] : (r = n.map(Te), t[0] = n, t[1] = r);
    let i;
    return t[2] === r ? i = t[3] : (i = (0, q.jsx)(`section`, {
        className: `bg-token-bg-primary font-oai overflow-hidden px-4 py-12 md:px-8`,
        children: (0, q.jsx)(`div`, {
            className: `mx-auto flex w-full flex-col gap-8`,
            children: r
        })
    }), t[2] = r, t[3] = i), i
}

function Te(e) {
    return W(e, U)
}
var K, q, Ee = e((() => {
    K = R(), H(), ue(), q = A()
}));

function De(e) {
    let t = p(e.gizmo.display.name);
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
var Oe = e((() => {
    T()
}));

function J(e) {
    "use forget";
    let t = (0, X.c)(47),
        {
            gizmoId: n,
            enableAnonChat: r,
            cmsSections: i,
            isAnonVisitor: a,
            businessAgentContext: s
        } = e,
        {
            data: l,
            error: f
        } = ne(n),
        p = re(),
        m = M(),
        g = se(),
        _ = oe(),
        y;
    t[0] === n ? y = t[1] : (y = () => C(n), t[0] = n, t[1] = y);
    let x = b(y),
        S;
    t[2] === n ? S = t[3] : (S = () => v(n), t[2] = n, t[3] = S);
    let w = b(S),
        T = x?.businessAgentId ?? null,
        E = x?.gizmoId ?? null,
        D = (0, Z.useRef)(null),
        O;
    t[4] === s ? O = t[5] : (O = s != null && !c(), t[4] = s, t[5] = O);
    let k = O,
        A, j;
    t[6] !== g.hash || t[7] !== g.pathname || t[8] !== g.search || t[9] !== T || t[10] !== E ? (A = () => {
        if (T == null || E == null) {
            D.current = null;
            return
        }
        D.current ??= g.pathname + g.search + g.hash
    }, j = [g.hash, g.pathname, g.search, T, E], t[6] = g.hash, t[7] = g.pathname, t[8] = g.search, t[9] = T, t[10] = E, t[11] = A, t[12] = j) : (A = t[11], j = t[12]), (0, Z.useEffect)(A, j);
    let N, P;
    t[13] !== T || t[14] !== E ? (N = () => {
        if (!(T == null || E == null)) return () => {
            C(E)?.businessAgentId !== T && (le({
                businessAgentId: T,
                gizmoId: E
            }), ie(T, E))
        }
    }, P = [T, E], t[13] = T, t[14] = E, t[15] = N, t[16] = P) : (N = t[15], P = t[16]), (0, Z.useEffect)(N, P);
    let F, I;
    t[17] !== g.hash || t[18] !== g.pathname || t[19] !== g.search || t[20] !== m || t[21] !== _.state || t[22] !== w ? (F = () => {
        if (!(w == null || D.current == null || _.state !== `idle`)) {
            if (g.pathname + g.search + g.hash !== D.current) {
                m(-1);
                return
            }
            if (te() !== w.owner) {
                m(-1);
                return
            }
            if (w.kind === `hydrated`) {
                if (ee(w)) {
                    let e = w.bundledGizmo?.resource;
                    e != null && h(u(e), w.gizmoId)
                }
                m(w.route, {
                    replace: !0
                })
            } else m(-1)
        }
    }, I = [g.hash, g.pathname, g.search, m, _.state, w], t[17] = g.hash, t[18] = g.pathname, t[19] = g.search, t[20] = m, t[21] = _.state, t[22] = w, t[23] = F, t[24] = I) : (F = t[23], I = t[24]), (0, Z.useEffect)(F, I);
    let L, R;
    t[25] === s ? (L = t[26], R = t[27]) : (R = () => {
        s != null && ae(s)
    }, L = [s], t[25] = s, t[26] = L, t[27] = R), (0, Z.useEffect)(R, L);
    let z, B;
    if (t[28] !== f || t[29] !== l || t[30] !== k || t[31] !== m ? (z = () => {
            (f != null || k) && ce(), l == null && f != null && m(o(d.GIZMO_NOT_FOUND))
        }, B = [m, l, f, k], t[28] = f, t[29] = l, t[30] = k, t[31] = m, t[32] = z, t[33] = B) : (z = t[32], B = t[33]), (0, Z.useEffect)(z, B), k) {
        let e;
        return t[34] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(Y, {}), t[34] = e) : e = t[34], e
    }
    if (!r) {
        if (f != null && p != null) {
            let e;
            return t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(Y, {}), t[35] = e) : e = t[35], e
        }
        if (p == null) {
            let e = l ?? void 0,
                n;
            return t[36] === e ? n = t[37] : (n = (0, Q.jsx)(ke, {
                gizmo: e
            }), t[36] = e, t[37] = n), n
        }
    } else if (f != null) {
        let e;
        return t[38] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(Y, {}), t[38] = e) : e = t[38], e
    }
    let V = a && Array.isArray(i) && i.length > 0,
        H;
    t[39] === n ? H = t[40] : (H = (0, Q.jsx)(fe, {
        gizmoId: n
    }, n), t[39] = n, t[40] = H);
    let U;
    t[41] !== i || t[42] !== V ? (U = V && (0, Q.jsx)(we, {
        sections: i
    }), t[41] = i, t[42] = V, t[43] = U) : U = t[43];
    let W;
    return t[44] !== H || t[45] !== U ? (W = (0, Q.jsxs)(Q.Fragment, {
        children: [H, U]
    }), t[44] = H, t[45] = U, t[46] = W) : W = t[46], W
}

function Y() {
    "use forget";
    let e = (0, X.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(G, {
        children: (0, Q.jsxs)(`div`, {
            className: `flex h-full w-full flex-col items-center justify-center`,
            children: [(0, Q.jsx)(`div`, {
                className: `font-bold`,
                children: (0, Q.jsx)(j, {
                    id: `gizmo.loadError`,
                    defaultMessage: `We're having trouble loading this GPT.`
                })
            }), (0, Q.jsx)(j, {
                id: `gizmo.loadErrorRefresh`,
                defaultMessage: `Please refresh the page, or try again later`
            })]
        })
    }), e[0] = t) : t = e[0], t
}

function ke(e) {
    "use forget";
    let t = (0, X.c)(9),
        {
            gizmo: r
        } = e,
        i = M(),
        a;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = n({
        openModalLocation: _.GizmoPageUpsellButton
    }), t[0] = a) : a = t[0];
    let o = a,
        s;
    t[1] === i ? s = t[2] : (s = o && (0, Q.jsx)(ye, {
        onClick: () => z({
            navigate: i,
            openModalLocation: _.GizmoPageUpsellButton
        }),
        children: (0, Q.jsx)(j, {
            id: `gizmo.upsell`,
            defaultMessage: `Sign up to chat`
        })
    }), t[1] = i, t[2] = s);
    let c;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Q.jsx)(`div`, {
        className: `text-token-text-tertiary text-sm`,
        children: (0, Q.jsx)(j, {
            id: `gizmo.loginUpsell`,
            defaultMessage: `Sign up or Log in to chat`
        })
    }), t[3] = c) : c = t[3];
    let l;
    t[4] === s ? l = t[5] : (l = (0, Q.jsxs)(`div`, {
        className: `mt-7 flex flex-col gap-4`,
        children: [s, c]
    }), t[4] = s, t[5] = l);
    let u;
    return t[6] !== r || t[7] !== l ? (u = (0, Q.jsx)(G, {
        children: (0, Q.jsx)(de, {
            gizmo: r,
            children: l
        })
    }), t[6] = r, t[7] = l, t[8] = u) : u = t[8], u
}
var X, Z, Q, Ae, je, Me, $, Ne = e((() => {
    O(), X = R(), pe(), V(), _e(), m(), f(), Ee(), xe(), be(), T(), Oe(), y(), me(), Ce(), he(), w(), B(), r(), D(), i(), x(), a(), E(), Z = t(I()), N(), Q = A(), Ae = ({
        currentParams: e,
        currentUrl: t,
        nextUrl: n,
        formMethod: r,
        defaultShouldRevalidate: i
    }) => {
        let a = e.gizmoId,
            o = l(() => a == null ? null : v(a));
        return r == null && o?.kind === `hydrated` && o.bundledGizmo != null && t.pathname + t.search + t.hash === g(o.bundledGizmo.context, t.search, t.searchParams.get(`prompt`) === `` ? {
            mode: `compose`
        } : void 0) && n.href === new URL(o.route, t).href && s(o) ? !1 : i
    }, je = F(function() {
        "use forget";
        let e = (0, X.c)(15),
            t = k(),
            {
                gizmoId: n
            } = P();
        t.kind === `chat_page` && t.gizmoIdAlias != null && n === t.gizmoIdAlias.alias && t.businessAgentContext?.gizmoId === t.gizmoIdAlias.gizmoId && h(t.gizmoIdAlias.alias, t.gizmoIdAlias.gizmoId);
        let r = (t.kind === `chat_page` ? t.businessAgentContext?.gizmoId ?? t.gizmoId : null) ?? n ?? ``;
        if (t.kind === `anon_gizmo`) {
            let n;
            return e[0] !== t.gizmo || e[1] !== r ? (n = (0, Q.jsx)(Se, {
                gizmo: t.gizmo
            }, r), e[0] = t.gizmo, e[1] = r, e[2] = n) : n = e[2], n
        }
        if (t.kind === `workspace_login`) {
            let n;
            e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsx)(ge, {}), e[3] = n) : n = e[3];
            let r;
            return e[4] !== t.returnPath || e[5] !== t.ssoConnection || e[6] !== t.ssoRequired ? (r = (0, Q.jsxs)(Q.Fragment, {
                children: [n, (0, Q.jsx)(ve, {
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
        return e[8] !== c || e[9] !== o || e[10] !== a || e[11] !== i || e[12] !== s || e[13] !== r ? (l = (0, Q.jsx)(J, {
            gizmoId: r,
            gizmo: i,
            enableAnonChat: a,
            cmsSections: o,
            isAnonVisitor: s,
            businessAgentContext: c
        }, r), e[8] = c, e[9] = o, e[10] = a, e[11] = i, e[12] = s, e[13] = r, e[14] = l) : l = e[14], l
    }), Me = ({
        data: e,
        matches: t
    }) => e?.kind === `anon_gizmo` || e?.kind === `chat_page` && e.gizmo ? De(e.gizmo) : t.flatMap(e => e.meta ?? []), $ = L(function() {
        "use forget";
        let e = (0, X.c)(10),
            {
                gizmoId: t
            } = P(),
            n = t === void 0 ? `` : t,
            r = M(),
            i;
        e[0] === n ? i = e[1] : (i = () => C(n), e[0] = n, e[1] = i);
        let a = b(i),
            o;
        e[2] === n ? o = e[3] : (o = () => v(n), e[2] = n, e[3] = o);
        let s = b(o),
            c = (0, Z.useRef)(!1),
            l, u;
        e[4] !== r || e[5] !== s || e[6] !== a ? (l = () => {
            ce(), !(c.current || a == null || s == null) && (c.current = !0, ie(a.businessAgentId, a.gizmoId), r(-1))
        }, u = [r, s, a], e[4] = r, e[5] = s, e[6] = a, e[7] = l, e[8] = u) : (l = e[7], u = e[8]), (0, Z.useEffect)(l, u);
        let d;
        return e[9] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Q.jsx)(S, {}), e[9] = d) : d = e[9], d
    })
}));
export {
    Me as a, Ne as i, J as n, Ae as o, je as r, $ as t
};
//# sourceMappingURL=680ac424-bsx1e7bsj65hrunc.js.map