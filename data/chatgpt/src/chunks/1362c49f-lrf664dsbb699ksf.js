import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    BK as n,
    JP as r,
    K8 as i,
    NK as a,
    Vq as o,
    XP as s,
    Yq as c,
    b5 as l,
    i5 as u,
    vnt as d,
    y5 as f,
    ynt as p
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as m,
    Ln as h,
    Rn as g,
    wn as _,
    zn as v
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Oft as y,
    b3 as b,
    g3 as x,
    jft as S,
    x3 as C
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Qy as w,
    Zy as T,
    ny as ee,
    ty as E
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Vd as D,
    zd as O
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as k,
    t as A
} from "./8e0d0293-o5wzgcputdw1aebs.js";
import {
    n as j,
    t as M
} from "./a5f68020-jotgm33ao9pgxiqd.js";
import {
    C as N,
    S as P
} from "./2b67bcd8-nnsmutcvg2bqh4j8.js";

function te(e) {
    "use forget";
    let t = (0, F.c)(11),
        n, r, i, a;
    t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({
        "aria-hidden": n,
        "aria-label": r,
        "aria-labelledby": i,
        ...a
    } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
    let o = n ?? (r || i ? void 0 : !0),
        s;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (s = {
        __html: c(A)
    }, t[5] = s) : s = t[5];
    let l;
    return t[6] !== r || t[7] !== i || t[8] !== a || t[9] !== o ? (l = (0, I.jsx)(`svg`, {
        ...a,
        xmlns: `http://www.w3.org/2000/svg`,
        width: A.canvas.width,
        height: A.canvas.height,
        viewBox: A.canvas.viewBox,
        fill: `currentColor`,
        "aria-label": r,
        "aria-labelledby": i,
        "aria-hidden": o,
        dangerouslySetInnerHTML: s
    }), t[6] = r, t[7] = i, t[8] = a, t[9] = o, t[10] = l) : l = t[10], l
}
var F, I, L = e((() => {
    F = _(), o(), k(), I = m()
}));

function R({
    rating: e,
    numReviews: t,
    intl: n,
    includeNum: r = !1
}) {
    if (t != null && t < ie) return null;
    let i = r && t && t > B && n.formatNumber(t, {
        notation: `compact`,
        compactDisplay: `short`,
        maximumFractionDigits: 1
    });
    if (e == null) return null;
    let a = n.formatNumber(e, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });
    return r && i ? `${a} (${i})` : a
}
var z, ne, re, ie, B, V = e((() => {
    z = e => e?.reduce((e, t) => {
        let n = t.options.find(e => e.id === t.selected_option_id);
        return n && (e[t.id] = n), e
    }, {}) ?? {}, ne = e => !e.variants?.length || e.variants.every(e => e.selected_option_id), re = ({
        isCheckoutEnabled: e,
        isClearingVariantSelection: t,
        isLoadingProductEntity: n
    }) => e && (t || n), ie = 20, B = 100
}));

function ae(e) {
    "use forget";
    let t = (0, H.c)(38),
        {
            product: n,
            includeNum: r,
            includeEndDelimiter: i,
            includeMidDelimiter: a,
            isInline: o,
            wrapperClass: s,
            iconSize: c
        } = e,
        l = r !== void 0 && r,
        p = i !== void 0 && i,
        m = a !== void 0 && a,
        h = o !== void 0 && o,
        g = c === void 0 ? `medium` : c,
        _ = !u(oe),
        y = m && !_,
        b = v(),
        x;
    t[0] === n.popularity_metadata?.product_tags ? x = t[1] : (x = n.popularity_metadata?.product_tags?.includes(`popular`) ?? !1, t[0] = n.popularity_metadata?.product_tags, t[1] = x);
    let S = x,
        C;
    if (t[2] !== S) {
        let e = d(`2128165686`);
        C = S && e.get(`render_product_tags_v1`, !1), t[2] = S, t[3] = C
    } else C = t[3];
    let w = C,
        T = n.rating != null,
        E;
    t[4] !== l || t[5] !== b || t[6] !== n.num_reviews || t[7] !== n.rating ? (E = R({
        rating: n.rating,
        numReviews: n.num_reviews,
        intl: b,
        includeNum: l
    }), t[4] = l, t[5] = b, t[6] = n.num_reviews, t[7] = n.rating, t[8] = E) : E = t[8];
    let D = E,
        O = D && T;
    if (!w && !O) return null;
    let k = h ? `inline-flex items-center font-normal` : `inline-block w-full items-center font-normal`,
        A = _ && `tracking-tight`,
        j;
    t[9] !== A || t[10] !== k || t[11] !== s ? (j = f(s, k, A), t[9] = A, t[10] = k, t[11] = s, t[12] = j) : j = t[12];
    let M;
    t[13] !== g || t[14] !== b || t[15] !== w ? (M = w && (0, U.jsx)(`span`, {
        children: (0, U.jsxs)(`span`, {
            className: `inline-block text-nowrap`,
            children: [(0, U.jsx)(te, {
                className: f(`mb-0.5 inline-block`, g === `small` ? `size-3` : `size-4`)
            }), G, (0, U.jsx)(`span`, {
                children: b.formatMessage({
                    id: `search.product.popular`,
                    defaultMessage: `Popular`
                })
            })]
        })
    }), t[13] = g, t[14] = b, t[15] = w, t[16] = M) : M = t[16];
    let N;
    t[17] !== y || t[18] !== w || t[19] !== O ? (N = y && w && O && (0, U.jsx)(`span`, {
        children: W
    }), t[17] = y, t[18] = w, t[19] = O, t[20] = N) : N = t[20];
    let P;
    t[21] !== y || t[22] !== w || t[23] !== O ? (P = !y && w && O && (0, U.jsx)(`span`, {
        children: G
    }), t[21] = y, t[22] = w, t[23] = O, t[24] = P) : P = t[24];
    let F;
    t[25] !== g || t[26] !== D || t[27] !== O ? (F = O && D && (0, U.jsxs)(`span`, {
        className: `text-nowrap`,
        children: [(0, U.jsx)(ee, {
            className: f(`me-1 mb-[0.1875rem] inline-block`, g === `small` ? `size-3` : `size-4`)
        }), D]
    }), t[25] = g, t[26] = D, t[27] = O, t[28] = F) : F = t[28];
    let I;
    t[29] === p ? I = t[30] : (I = p && (0, U.jsx)(`span`, {
        className: `mb-1`,
        children: W
    }), t[29] = p, t[30] = I);
    let L;
    return t[31] !== j || t[32] !== M || t[33] !== N || t[34] !== P || t[35] !== F || t[36] !== I ? (L = (0, U.jsxs)(`span`, {
        className: j,
        children: [M, N, P, F, I]
    }), t[31] = j, t[32] = M, t[33] = N, t[34] = P, t[35] = F, t[36] = I, t[37] = L) : L = t[37], L
}

function oe() {
    return n()
}
var H, U, W, G, se = e((() => {
    H = _(), L(), E(), V(), t(), a(), p(), l(), g(), U = m(), W = `\xA0·\xA0`, G = `\xA0`
}));

function ce() {
    return d(`2128165686`).get(`browse_enabled`, !1)
}

function le() {
    return d(`2128165686`).get(`browse_descriptions_enabled`, !1)
}
var ue = e((() => {
        p()
    })),
    K, q, J, Y = e((() => {
        K = _(), j(), q = m(), J = e => {
            "use forget";
            let t = (0, K.c)(6),
                n, r;
            t[0] === e ? (n = t[1], r = t[2]) : ({
                analyticsSurface: r,
                ...n
            } = e, t[0] = e, t[1] = n, t[2] = r);
            let i = r === void 0 ? `product_sidebar` : r,
                a;
            return t[3] !== i || t[4] !== n ? (a = (0, q.jsx)(M, {
                analyticsSurface: i,
                ...n
            }), t[3] = i, t[4] = n, t[5] = a) : a = t[5], a
        }
    }));

function de({
    conversation: e,
    productId: t,
    isSelectionEnabled: n,
    onToggleSelection: r
}) {
    if (!n || !e) return;
    let i = C(e),
        a = b(e),
        o = !!t && i.has(t);
    return {
        isSelected: o,
        showCheckbox: a || o,
        onToggleSelection: r
    }
}

function fe(e) {
    "use forget";
    let t = (0, X.c)(19),
        {
            selection: n,
            placement: r,
            className: i
        } = e,
        a = r === void 0 ? `inset` : r,
        o = v(),
        s;
    t[0] === o ? s = t[1] : (s = o.formatMessage(Q.selectLabel), t[0] = o, t[1] = s);
    let c = s,
        l;
    t[2] === o ? l = t[3] : (l = o.formatMessage(Q.deselectLabel), t[2] = o, t[3] = l);
    let u = l,
        d = n.isSelected,
        p = n.isSelected ? u : c,
        m;
    t[4] === n ? m = t[5] : (m = e => {
        e.preventDefault(), e.stopPropagation(), n.onToggleSelection()
    }, t[4] = n, t[5] = m);
    let h = a === `flush` ? `end-0 top-0` : `end-2 top-2`,
        g = n.showCheckbox ? `pointer-events-auto opacity-100` : `pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100`,
        _;
    t[6] !== i || t[7] !== h || t[8] !== g ? (_ = f(`focus-visible:outline-token-outline-primary absolute z-10 flex size-7 items-center justify-center rounded-full focus-visible:outline-offset-[-8px]`, h, g, i), t[6] = i, t[7] = h, t[8] = g, t[9] = _) : _ = t[9];
    let y;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, Z.jsx)(`span`, {
        className: `absolute inset-1.5 rounded-full bg-black/35 blur-md`
    }), t[10] = y) : y = t[10];
    let b;
    t[11] === n.isSelected ? b = t[12] : (b = n.isSelected ? (0, Z.jsx)(`span`, {
        className: `z-[11] flex size-5 items-center justify-center rounded-full bg-white dark:bg-white`,
        children: (0, Z.jsx)(T, {
            className: `entity-accent size-4 stroke-current stroke-[1.25]`
        })
    }) : (0, Z.jsx)(`span`, {
        className: `z-[11] flex size-5 items-center justify-center rounded-full`,
        children: (0, Z.jsx)(`span`, {
            className: `relative size-5 rounded-full border-2 border-current text-white`,
            children: (0, Z.jsx)(`span`, {
                className: `absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm`
            })
        })
    }), t[11] = n.isSelected, t[12] = b);
    let x;
    return t[13] !== n.isSelected || t[14] !== b || t[15] !== p || t[16] !== m || t[17] !== _ ? (x = (0, Z.jsxs)(`button`, {
        type: `button`,
        "aria-pressed": d,
        "aria-label": p,
        onClick: m,
        className: _,
        children: [y, b]
    }), t[13] = n.isSelected, t[14] = b, t[15] = p, t[16] = m, t[17] = _, t[18] = x) : x = t[18], x
}
var X, Z, Q, pe = e((() => {
    X = _(), w(), l(), g(), x(), Z = m(), Q = h({
        selectLabel: {
            id: `WnuENJ`,
            defaultMessage: `Select product`
        },
        deselectLabel: {
            id: `VgU4sb`,
            defaultMessage: `Deselect product`
        }
    })
}));

function me(e) {
    e.stopPropagation()
}
var he, $, ge, _e = e((() => {
    he = _(), r(), y(), N(), D(), Y(), pe(), t(), l(), $ = m(), ge = e => {
        "use forget";
        let t = (0, he.c)(21),
            {
                product: n,
                clientThreadId: r,
                messageId: a,
                isSourceCatalogProduct$: o,
                selectionUi: c,
                placement: l
            } = e,
            d = l === void 0 ? `inset` : l,
            p = s(),
            m;
        t[0] !== p || t[1] !== a || t[2] !== n ? (m = O({
            product: n,
            rewrittenQueries: p ? i(() => P(p, a)) : void 0
        }), t[0] = p, t[1] = a, t[2] = n, t[3] = m) : m = t[3];
        let h = m,
            g;
        t[4] === h ? g = t[5] : (g = h != null && S({
            disableExposureLog: !1
        }), t[4] = h, t[5] = g);
        let _ = g,
            v;
        t[6] !== _ || t[7] !== o ? (v = () => _ && (o?.() ?? !1), t[6] = _, t[7] = o, t[8] = v) : v = t[8];
        let y = u(v);
        if (h == null || !_ || y) {
            let e;
            return t[9] !== d || t[10] !== c ? (e = c ? (0, $.jsx)(fe, {
                selection: c,
                placement: d
            }) : null, t[9] = d, t[10] = c, t[11] = e) : e = t[11], e
        }
        let b = d === `flush` ? `end-0 top-0` : `end-2 top-2`,
            x;
        t[12] === b ? x = t[13] : (x = f(`absolute z-10 transition-opacity empty:hidden`, `can-hover:pointer-events-none can-hover:opacity-0 can-hover:group-hover/product-card:pointer-events-auto can-hover:group-hover/product-card:opacity-100 can-hover:group-focus-within/product-card:pointer-events-auto can-hover:group-focus-within/product-card:opacity-100`, `has-data-[state=open]:pointer-events-auto has-data-[state=open]:opacity-100`, `has-data-[saved=true]:pointer-events-auto has-data-[saved=true]:opacity-100`, b), t[12] = b, t[13] = x);
        let C;
        t[14] !== r || t[15] !== a || t[16] !== h ? (C = (0, $.jsx)(J, {
            analyticsSurface: `product_card`,
            request: h,
            clientThreadId: r,
            messageId: a,
            assistantMessageId: a,
            className: `bg-token-bg-primary/90 hover:bg-token-bg-primary focus-visible:bg-token-bg-primary data-[state=open]:bg-token-bg-primary! [pointer-events:inherit] h-7! w-7! shadow-none backdrop-blur-xs`
        }), t[14] = r, t[15] = a, t[16] = h, t[17] = C) : C = t[17];
        let w;
        return t[18] !== x || t[19] !== C ? (w = (0, $.jsx)(`span`, {
            role: `presentation`,
            onClick: me,
            className: x,
            children: C
        }), t[18] = x, t[19] = C, t[20] = w) : w = t[20], w
    }
}));
export {
    J as a, ce as c, se as d, R as f, re as g, ne as h, de as i, ue as l, V as m, _e as n, Y as o, z as p, pe as r, le as s, ge as t, ae as u
};
//# sourceMappingURL=1362c49f-lrf664dsbb699ksf.js.map