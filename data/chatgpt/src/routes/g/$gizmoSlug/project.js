import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    B6 as r,
    BE as i,
    Bc as a,
    Bg as o,
    Cf as s,
    E0 as c,
    Fc as l,
    Fz as u,
    Itt as d,
    Iz as f,
    JP as p,
    K8 as m,
    Lg as h,
    Nrt as g,
    Nu as _,
    O0 as v,
    Prt as y,
    Pz as b,
    Qit as x,
    T0 as S,
    UP as C,
    XB as w,
    _0 as ee,
    _J as te,
    _Y as ne,
    _r as re,
    _tt as ie,
    aJ as ae,
    b5 as oe,
    cat as se,
    dJ as ce,
    fY as le,
    fl as ue,
    g0 as T,
    gJ as de,
    hY as fe,
    hl as E,
    i5 as D,
    iat as pe,
    kT as O,
    kf as k,
    l0 as A,
    pJ as j,
    pY as me,
    pet as he,
    pnt as ge,
    qB as _e,
    qE as ve,
    r0 as M,
    sat as ye,
    uJ as be,
    uY as xe,
    vJ as Se,
    vN as Ce,
    vr as we,
    w0 as Te,
    wg as N,
    xr as Ee,
    y5 as De,
    yN as Oe,
    ynt as ke,
    yu as Ae,
    zP as je,
    zc as Me,
    zet as Ne
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as Pe,
    Bn as P,
    Ht as Fe,
    N as F,
    Nn as I,
    O as L,
    Pt as R,
    Rn as z,
    Rt as Ie,
    Ut as Le,
    Vn as B,
    jt as V,
    s as H,
    wn as U,
    xt as Re
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Is as ze,
    M0t as Be,
    MQ as Ve,
    N0t as He,
    Ps as Ue,
    c as We,
    cmn as W,
    jQ as Ge,
    lmn as Ke,
    omn as G,
    s as qe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Bp as Je,
    C_ as Ye,
    Dt as Xe,
    Et as Ze,
    Gh as Qe,
    Hh as $e,
    M as et,
    Rp as tt,
    Vp as nt,
    X as rt,
    Z as it,
    _ as at,
    f as ot,
    j as st,
    m as ct,
    v as lt,
    w_ as ut
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as dt,
    t as ft
} from "./25afeb5a-iuxkpw1i2zqgp1hb.js";
import {
    n as pt,
    t as mt
} from "./e8ccfb70-l4j9iujvfdwkquhj.js";

function ht(e) {
    "use forget";
    let t = (0, vt.c)(22),
        {
            children: n,
            projectId: r
        } = e,
        i = R(),
        [a, o] = Fe(),
        s = F(),
        l = D(ce),
        u;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = {
        queryKey: j,
        queryFn: de
    }, t[0] = u) : u = t[0];
    let d = L(u),
        f = d.data,
        p = f?.has_pin === !0 && l != null,
        m;
    t[1] === i ? m = t[2] : (m = () => {
        i(`/projects`, {
            replace: !0
        })
    }, t[1] = i, t[2] = m);
    let h = m,
        g, _;
    t[3] !== a || t[4] !== o ? (g = () => {
        if (A.set(!1), !a.has(`temporary-chat`)) return;
        let e = new URLSearchParams(a);
        e.delete(T), o(e, {
            replace: !0
        })
    }, _ = [a, o], t[3] = a, t[4] = o, t[5] = g, t[6] = _) : (g = t[5], _ = t[6]), Oe(g, _);
    let y, b;
    t[7] !== p || t[8] !== l || t[9] !== h || t[10] !== r || t[11] !== s || t[12] !== f ? (y = () => {
        if (f != null && !p) {
            if (!f.has_pin) {
                Ee(s, r), l != null && ae(), c(G) || v(G, {
                    onDismiss: h
                });
                return
            }
            c(W) || v(W, {
                onDismiss: h
            })
        }
    }, b = [p, l, h, r, s, f], t[7] = p, t[8] = l, t[9] = h, t[10] = r, t[11] = s, t[12] = f, t[13] = y, t[14] = b) : (y = t[13], b = t[14]), (0, K.useEffect)(y, b);
    let x;
    if (t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (x = [], t[15] = x) : x = t[15], (0, K.useEffect)(gt, x), !p) {
        if (d.isError) {
            let e;
            t[16] === d ? e = t[17] : (e = () => d.refetch(), t[16] = d, t[17] = e);
            let n;
            t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, q.jsx)(I, {
                id: `chatgpt.locked_chats.project_gate.retry`,
                defaultMessage: `Try again`
            }), t[18] = n) : n = t[18];
            let r;
            return t[19] === e ? r = t[20] : (r = (0, q.jsx)(`div`, {
                className: `flex min-h-full items-center justify-center p-6`,
                children: (0, q.jsx)(O, {
                    color: `secondary`,
                    onClick: e,
                    children: n
                })
            }), t[19] = e, t[20] = r), r
        }
        let e;
        return t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, q.jsx)(ft, {}), t[21] = e) : e = t[21], e
    }
    return n
}

function gt() {
    return _t
}

function _t() {
    Te(G), Te(W)
}
var vt, K, q, yt = e((() => {
    vt = U(), n(), ee(), S(), M(), H(), dt(), r(), Ce(), K = t(B()), z(), Pe(), Ke(), te(), we(), be(), q = P()
}));

function bt(e, t) {
    let n = e.getQueryData(i(e, t, !1).queryKey);
    if (n != null) return n;
    let r = e.getQueryData([N]);
    for (let e of r?.pages ?? []) {
        let n = e.items.find(e => e.gizmo.gizmo.id === t);
        if (n != null) return n.gizmo
    }
}

function xt(e) {
    "use forget";
    let t = (0, J.c)(3),
        {
            children: n,
            projectId: r
        } = e,
        i;
    return t[0] !== n || t[1] !== r ? (i = (0, Y.jsx)(St, {
        projectId: r,
        children: n
    }), t[0] = n, t[1] = r, t[2] = i) : i = t[2], i
}

function St(e) {
    "use forget";
    let t = (0, J.c)(9),
        {
            children: n,
            projectId: r
        } = e,
        i = F(),
        a;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = y(), t[0] = a) : a = t[0];
    let o = a,
        s = o ? bt(i, r) : void 0,
        c = s != null && s.gizmo.id === r && !w(s),
        l = o && !c,
        u;
    t[1] === l ? u = t[2] : (u = {
        queryKey: j,
        queryFn: de,
        enabled: l
    }, t[1] = l, t[2] = u);
    let {
        data: d,
        error: f,
        isPending: p,
        isError: m,
        refetch: h
    } = L(u);
    if (l && p) {
        let e;
        return t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(`div`, {
            className: `min-h-full`
        }), t[3] = e) : e = t[3], e
    }
    let g = f instanceof x && f.status === 404 && !Se() && (s == null || !w(s));
    if (l && m && !g) {
        let e;
        t[4] === h ? e = t[5] : (e = () => h(), t[4] = h, t[5] = e);
        let n;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Y.jsx)(I, {
            id: `chatgpt.locked_chats.project_gate.retry`,
            defaultMessage: `Try again`
        }), t[6] = n) : n = t[6];
        let r;
        return t[7] === e ? r = t[8] : (r = (0, Y.jsx)(`div`, {
            className: `flex min-h-full items-center justify-center p-6`,
            children: (0, Y.jsx)(O, {
                color: `secondary`,
                onClick: e,
                children: n
            })
        }), t[7] = e, t[8] = r), r
    }
    return s?.gizmo.id === r && w(s) || re(d) === r ? (0, Y.jsx)(ht, {
        projectId: r,
        children: n
    }) : n
}
var J, Y, Ct = e((() => {
    J = U(), ve(), n(), h(), _e(), g(), pe(), H(), z(), te(), we(), yt(), Y = P()
}));

function wt(e) {
    "use forget";
    let t = (0, Tt.c)(29),
        {
            conversation: n,
            gizmoId: r
        } = e,
        i;
    t[0] === r ? i = t[1] : (i = s(r), t[0] = r, t[1] = i);
    let o = i,
        c;
    t[2] === o ? c = t[3] : (c = () => o.title$(), t[2] = o, t[3] = c);
    let l = D(c),
        u;
    t[4] === o ? u = t[5] : (u = () => o.isSkeleton$(), t[4] = o, t[5] = u);
    let f = D(u),
        p;
    t[6] === n ? p = t[7] : (p = () => Me(n), t[6] = n, t[7] = p);
    let m = D(p),
        h;
    t[8] === n ? h = t[9] : (h = () => !d() && !A() && a(n), t[8] = n, t[9] = h);
    let g = D(h),
        _;
    t[10] !== n.id || t[11] !== r ? (_ = (0, X.jsx)(`div`, {
        className: `pe-2`,
        children: (0, X.jsx)(Be, {
            clientThreadId: n.id,
            dropdownSide: `bottom`,
            dropdownSideOffset: 4,
            gizmoId: r,
            variant: `stage-mobile`
        })
    }), t[10] = n.id, t[11] = r, t[12] = _) : _ = t[12];
    let v;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, X.jsx)(Je, {}), t[13] = v) : v = t[13];
    let y = f && `skeleton-child`,
        b;
    t[14] === y ? b = t[15] : (b = De(`text-headline text-token-text-primary flex min-h-6 max-w-full items-center truncate font-medium`, y), t[14] = y, t[15] = b);
    let x;
    t[16] !== b || t[17] !== l ? (x = (0, X.jsx)(`div`, {
        className: b,
        children: l
    }), t[16] = b, t[17] = l, t[18] = x) : x = t[18];
    let S;
    t[19] !== n || t[20] !== m || t[21] !== g ? (S = g && (0, X.jsx)(Ue, {
        conversation: n,
        isTPPConversationMode: m,
        isSwitchable: !0,
        size: `compact`
    }), t[19] = n, t[20] = m, t[21] = g, t[22] = S) : S = t[22];
    let C;
    t[23] !== x || t[24] !== S ? (C = (0, X.jsxs)(`div`, {
        className: `pointer-events-none absolute start-1/2 flex max-w-[calc(100%-8rem)] flex-col items-center ltr:-translate-x-1/2 rtl:translate-x-1/2`,
        children: [x, S]
    }), t[23] = x, t[24] = S, t[25] = C) : C = t[25];
    let w;
    return t[26] !== C || t[27] !== _ ? (w = (0, X.jsx)(`div`, {
        "data-fixed-header": `less-than-md`,
        children: (0, X.jsxs)(tt, {
            rightContent: _,
            children: [v, C]
        })
    }), t[26] = C, t[27] = _, t[28] = w) : w = t[28], w
}
var Tt, X, Et = e((() => {
    Tt = U(), M(), k(), He(), r(), nt(), l(), ze(), ie(), oe(), X = P()
}));

function Dt(e, t) {
    let n = (0, Ot.useRef)(0);
    return () => {
        n.current < t && (e(), n.current += 1)
    }
}
var Ot, kt = e((() => {
    Ot = t(B())
}));

function At(e) {
    let t = new URL(e.url);
    if (t.searchParams.get(`temporary-chat`) === `true`) return t.searchParams.delete(T), Re(`${t.pathname}${t.search}${t.hash}`, {
        headers: {
            "X-Robots-Tag": `noindex, nofollow`
        }
    })
}

function jt({
    gizmoId: e,
    initialProjectResource: t
}) {
    "use no forget";
    let n = (0, Z.useRef)(!1);
    !n.current && Ve() && (n.current = !0, E(`project_route`));
    let r = R(),
        a = F(),
        {
            data: c,
            isError: l,
            error: u
        } = L({
            ...i(a, e, !1, !y()),
            ...t ? {
                initialData: t
            } : void 0
        }),
        d = a.getQueryData([N]),
        p = a.getQueryState([N])?.fetchStatus === `fetching`,
        m = (0, Z.useMemo)(() => d?.pages.flatMap(e => e.items), [d]),
        h = s(e),
        g = le(V().pathname);
    g === `health` && ne(g, e), (0, Z.useEffect)(() => {
        h.conversations$().preload$()
    }, [h]), (0, Z.useEffect)(() => {
        if (l && !c)
            if (u instanceof x && (u.status === 403 || u.status === 404)) r(f(b.PROJECT_NOT_FOUND, void 0, se(u)));
            else {
                let e = ye(u);
                r(f(b.CUSTOM_ERROR, void 0, e))
            }
    }, [l, c, r, u]);
    let _ = Dt(() => {
        o(a)
    }, 5);
    return (0, Z.useEffect)(() => {
        !e || !c || p || m?.some(t => t.gizmo.gizmo.id === e) || _()
    }, [c, e, m, p, a, _]), (0, Q.jsx)(Mt, {
        gizmoId: e
    }, e)
}

function Mt(e) {
    "use forget";
    let t = (0, Nt.c)(36),
        {
            gizmoId: n
        } = e,
        r = V(),
        i;
    t[0] === n ? i = t[1] : (i = () => C({
        urlGizmoId: n
    }), t[0] = n, t[1] = i);
    let [a, o] = (0, Z.useState)(i), s;
    t[2] !== a || t[3] !== n ? (s = () => {
        m(() => Ae(a)) && o(C({
            urlGizmoId: n
        }))
    }, t[2] = a, t[3] = n, t[4] = s) : s = t[4];
    let c = (0, Z.useEffectEvent)(s),
        l;
    t[5] === c ? l = t[6] : (l = () => {
        A.set(!1), c()
    }, t[5] = c, t[6] = l);
    let u;
    t[7] === r.key ? u = t[8] : (u = [r.key], t[7] = r.key, t[8] = u), Oe(l, u);
    let d;
    t[9] === n ? d = t[10] : (d = {
        kind: he.GizmoInteraction,
        gizmo_id: n
    }, t[9] = n, t[10] = d), lt(a.id, d);
    let f;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Q.jsx)(rt, {}), t[11] = f) : f = t[11];
    let p;
    t[12] === a ? p = t[13] : (p = (0, Q.jsx)(Ze, {
        conversation: a
    }), t[12] = a, t[13] = p);
    let h;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, Q.jsx)(mt, {}), t[14] = h) : h = t[14];
    let g;
    t[15] !== a || t[16] !== n ? (g = (0, Q.jsx)(wt, {
        conversation: a,
        gizmoId: n
    }), t[15] = a, t[16] = n, t[17] = g) : g = t[17];
    let _;
    t[18] === a ? _ = t[19] : (_ = (0, Q.jsx)(st, {
        conversation: a,
        className: `max-md:hidden`
    }), t[18] = a, t[19] = _);
    let v;
    t[20] !== _ || t[21] !== g ? (v = (0, Q.jsxs)(Q.Fragment, {
        children: [g, _]
    }), t[20] = _, t[21] = g, t[22] = v) : v = t[22];
    let y;
    t[23] !== a || t[24] !== v ? (y = (0, Q.jsx)(ot, {
        conversation: a,
        threadHeader: v
    }), t[23] = a, t[24] = v, t[25] = y) : y = t[25];
    let b;
    t[26] !== a || t[27] !== y ? (b = (0, Q.jsx)(Ye, {
        conversation: a,
        children: y
    }), t[26] = a, t[27] = y, t[28] = b) : b = t[28];
    let x;
    t[29] !== a || t[30] !== b ? (x = (0, Q.jsx)($e, {
        conversation: a,
        children: b
    }), t[29] = a, t[30] = b, t[31] = x) : x = t[31];
    let S;
    return t[32] !== a || t[33] !== x || t[34] !== p ? (S = (0, Q.jsxs)(je.Provider, {
        value: a,
        children: [f, p, h, x]
    }, a.id), t[32] = a, t[33] = x, t[34] = p, t[35] = S) : S = t[35], S
}
var Nt, Z, Q, Pt, $, Ft = e((() => {
    Pe(), Nt = U(), Ne(), ee(), ct(), ut(), p(), _(), M(), Qe(), fe(), ve(), me(), pt(), Ct(), Et(), k(), h(), Ge(), r(), at(), u(), et(), g(), pe(), ue(), ke(), kt(), Ce(), Xe(), it(), qe(), H(), Z = t(B()), Q = P(), Pt = ({
        params: e,
        request: t,
        serverLoader: n
    }) => {
        if (We(), e.gizmoSlug === `health`) return n();
        if (!ge(`491279851`)) return Re(`/`);
        A.set(!1);
        let r = At(t);
        if (r) return r;
        Ve() && E(`project_route`)
    }, $ = Le(function() {
        "use no forget";
        let {
            gizmoSlug: e
        } = Ie(), t = xe(e ?? ``);
        return (0, Q.jsx)(xt, {
            projectId: t,
            children: (0, Q.jsx)(jt, {
                gizmoId: t
            })
        })
    })
}));
e((() => {
    Ft()
}))();
export {
    Pt as clientLoader, $ as
    default
};
//# sourceMappingURL=g._gizmoSlug.project-diobs3xj.js.map