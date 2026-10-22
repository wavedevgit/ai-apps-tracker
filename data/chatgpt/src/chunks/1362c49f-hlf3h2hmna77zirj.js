import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    I5 as n,
    J5 as r,
    bF as i,
    dJ as a,
    grt as o,
    hrt as s,
    l7 as c,
    rq as l,
    u7 as u,
    uq as d,
    vF as f,
    yJ as p
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as m,
    Ln as h,
    Rn as g,
    wn as _,
    zn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Mft as y,
    O3 as b,
    k3 as x,
    kft as S,
    w3 as C
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    $v as w,
    Jy as T,
    Qv as E,
    Yy as D
} from "./30901919-cmi3nh547dwrqkxv.js";
import {
    Gd as O,
    Ud as k
} from "./8b34dbc2-peb5nzi8z3rrflnv.js";
import {
    n as A,
    t as j
} from "./8e0d0293-b97nikzcj98gylxq.js";
import {
    n as M,
    t as N
} from "./a5f68020-hqgdd5hksgjxvicv.js";
import {
    C as P,
    S as F
} from "./2b67bcd8-jz2oqjspu3i9zh7k.js";

function ee(e) {
    "use forget";
    let t = (0, I.c)(11),
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
        __html: p(j)
    }, t[5] = s) : s = t[5];
    let c;
    return t[6] !== r || t[7] !== i || t[8] !== a || t[9] !== o ? (c = (0, L.jsx)(`svg`, {
        ...a,
        xmlns: `http://www.w3.org/2000/svg`,
        width: j.canvas.width,
        height: j.canvas.height,
        viewBox: j.canvas.viewBox,
        fill: `currentColor`,
        "aria-label": r,
        "aria-labelledby": i,
        "aria-hidden": o,
        dangerouslySetInnerHTML: s
    }), t[6] = r, t[7] = i, t[8] = a, t[9] = o, t[10] = c) : c = t[10], c
}
var I, L, R = e((() => {
    I = _(), a(), A(), L = m()
}));

function z({
    rating: e,
    numReviews: t,
    intl: n,
    includeNum: r = !1
}) {
    if (t != null && t < re) return null;
    let i = r && t && t > ie && n.formatNumber(t, {
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
var B, te, ne, re, ie, V = e((() => {
    B = e => e?.reduce((e, t) => {
        let n = t.options.find(e => e.id === t.selected_option_id);
        return n && (e[t.id] = n), e
    }, {}) ?? {}, te = e => !e.variants?.length || e.variants.every(e => e.selected_option_id), ne = ({
        isCheckoutEnabled: e,
        isClearingVariantSelection: t,
        isLoadingProductEntity: n
    }) => e && (t || n), re = 20, ie = 100
}));

function ae(e) {
    "use forget";
    let t = (0, H.c)(38),
        {
            product: n,
            includeNum: i,
            includeEndDelimiter: a,
            includeMidDelimiter: o,
            isInline: l,
            wrapperClass: u,
            iconSize: d
        } = e,
        f = i !== void 0 && i,
        p = a !== void 0 && a,
        m = o !== void 0 && o,
        h = l !== void 0 && l,
        g = d === void 0 ? `medium` : d,
        _ = !r(oe),
        y = m && !_,
        b = v(),
        x;
    t[0] === n.popularity_metadata?.product_tags ? x = t[1] : (x = n.popularity_metadata?.product_tags?.includes(`popular`) ?? !1, t[0] = n.popularity_metadata?.product_tags, t[1] = x);
    let S = x,
        C;
    if (t[2] !== S) {
        let e = s(`2128165686`);
        C = S && e.get(`render_product_tags_v1`, !1), t[2] = S, t[3] = C
    } else C = t[3];
    let T = C,
        E = n.rating != null,
        D;
    t[4] !== f || t[5] !== b || t[6] !== n.num_reviews || t[7] !== n.rating ? (D = z({
        rating: n.rating,
        numReviews: n.num_reviews,
        intl: b,
        includeNum: f
    }), t[4] = f, t[5] = b, t[6] = n.num_reviews, t[7] = n.rating, t[8] = D) : D = t[8];
    let O = D,
        k = O && E;
    if (!T && !k) return null;
    let A = h ? `inline-flex items-center font-normal` : `inline-block w-full items-center font-normal`,
        j = _ && `tracking-tight`,
        M;
    t[9] !== j || t[10] !== A || t[11] !== u ? (M = c(u, A, j), t[9] = j, t[10] = A, t[11] = u, t[12] = M) : M = t[12];
    let N;
    t[13] !== g || t[14] !== b || t[15] !== T ? (N = T && (0, U.jsx)(`span`, {
        children: (0, U.jsxs)(`span`, {
            className: `inline-block text-nowrap`,
            children: [(0, U.jsx)(ee, {
                className: c(`mb-0.5 inline-block`, g === `small` ? `size-3` : `size-4`)
            }), G, (0, U.jsx)(`span`, {
                children: b.formatMessage({
                    id: `search.product.popular`,
                    defaultMessage: `Popular`
                })
            })]
        })
    }), t[13] = g, t[14] = b, t[15] = T, t[16] = N) : N = t[16];
    let P;
    t[17] !== y || t[18] !== T || t[19] !== k ? (P = y && T && k && (0, U.jsx)(`span`, {
        children: W
    }), t[17] = y, t[18] = T, t[19] = k, t[20] = P) : P = t[20];
    let F;
    t[21] !== y || t[22] !== T || t[23] !== k ? (F = !y && T && k && (0, U.jsx)(`span`, {
        children: G
    }), t[21] = y, t[22] = T, t[23] = k, t[24] = F) : F = t[24];
    let I;
    t[25] !== g || t[26] !== O || t[27] !== k ? (I = k && O && (0, U.jsxs)(`span`, {
        className: `text-nowrap`,
        children: [(0, U.jsx)(w, {
            className: c(`me-1 mb-[0.1875rem] inline-block`, g === `small` ? `size-3` : `size-4`)
        }), O]
    }), t[25] = g, t[26] = O, t[27] = k, t[28] = I) : I = t[28];
    let L;
    t[29] === p ? L = t[30] : (L = p && (0, U.jsx)(`span`, {
        className: `mb-1`,
        children: W
    }), t[29] = p, t[30] = L);
    let R;
    return t[31] !== M || t[32] !== N || t[33] !== P || t[34] !== F || t[35] !== I || t[36] !== L ? (R = (0, U.jsxs)(`span`, {
        className: M,
        children: [N, P, F, I, L]
    }), t[31] = M, t[32] = N, t[33] = P, t[34] = F, t[35] = I, t[36] = L, t[37] = R) : R = t[37], R
}

function oe() {
    return d()
}
var H, U, W, G, se = e((() => {
    H = _(), R(), E(), V(), t(), l(), o(), u(), g(), U = m(), W = `\xA0·\xA0`, G = `\xA0`
}));

function ce() {
    return s(`2128165686`).get(`browse_enabled`, !1)
}

function le() {
    return s(`2128165686`).get(`browse_descriptions_enabled`, !1)
}
var ue = e((() => {
        o()
    })),
    K, q, J, Y = e((() => {
        K = _(), M(), q = m(), J = e => {
            "use forget";
            let t = (0, K.c)(6),
                n, r;
            t[0] === e ? (n = t[1], r = t[2]) : ({
                analyticsSurface: r,
                ...n
            } = e, t[0] = e, t[1] = n, t[2] = r);
            let i = r === void 0 ? `product_sidebar` : r,
                a;
            return t[3] !== i || t[4] !== n ? (a = (0, q.jsx)(N, {
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
    let i = x(e),
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
    let l = s,
        u;
    t[2] === o ? u = t[3] : (u = o.formatMessage(Q.deselectLabel), t[2] = o, t[3] = u);
    let d = u,
        f = n.isSelected,
        p = n.isSelected ? d : l,
        m;
    t[4] === n ? m = t[5] : (m = e => {
        e.preventDefault(), e.stopPropagation(), n.onToggleSelection()
    }, t[4] = n, t[5] = m);
    let h = a === `flush` ? `end-0 top-0` : `end-2 top-2`,
        g = n.showCheckbox ? `pointer-events-auto opacity-100` : `pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100`,
        _;
    t[6] !== i || t[7] !== h || t[8] !== g ? (_ = c(`focus-visible:outline-token-outline-primary absolute z-10 flex size-7 items-center justify-center rounded-full focus-visible:outline-offset-[-8px]`, h, g, i), t[6] = i, t[7] = h, t[8] = g, t[9] = _) : _ = t[9];
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
        "aria-pressed": f,
        "aria-label": p,
        onClick: m,
        className: _,
        children: [y, b]
    }), t[13] = n.isSelected, t[14] = b, t[15] = p, t[16] = m, t[17] = _, t[18] = x) : x = t[18], x
}
var X, Z, Q, pe = e((() => {
    X = _(), D(), u(), g(), C(), Z = m(), Q = h({
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
    he = _(), f(), S(), P(), O(), Y(), pe(), t(), u(), $ = m(), ge = e => {
        "use forget";
        let t = (0, he.c)(21),
            {
                product: a,
                clientThreadId: o,
                messageId: s,
                isSourceCatalogProduct$: l,
                selectionUi: u,
                placement: d
            } = e,
            f = d === void 0 ? `inset` : d,
            p = i(),
            m;
        t[0] !== p || t[1] !== s || t[2] !== a ? (m = k({
            product: a,
            rewrittenQueries: p ? n(() => F(p, s)) : void 0
        }), t[0] = p, t[1] = s, t[2] = a, t[3] = m) : m = t[3];
        let h = m,
            g;
        t[4] === h ? g = t[5] : (g = h != null && y({
            disableExposureLog: !1
        }), t[4] = h, t[5] = g);
        let _ = g,
            v;
        t[6] !== _ || t[7] !== l ? (v = () => _ && (l?.() ?? !1), t[6] = _, t[7] = l, t[8] = v) : v = t[8];
        let b = r(v);
        if (h == null || !_ || b) {
            let e;
            return t[9] !== f || t[10] !== u ? (e = u ? (0, $.jsx)(fe, {
                selection: u,
                placement: f
            }) : null, t[9] = f, t[10] = u, t[11] = e) : e = t[11], e
        }
        let x = f === `flush` ? `end-0 top-0` : `end-2 top-2`,
            S;
        t[12] === x ? S = t[13] : (S = c(`absolute z-10 transition-opacity empty:hidden`, `can-hover:pointer-events-none can-hover:opacity-0 can-hover:group-hover/product-card:pointer-events-auto can-hover:group-hover/product-card:opacity-100 can-hover:group-focus-within/product-card:pointer-events-auto can-hover:group-focus-within/product-card:opacity-100`, `has-data-[state=open]:pointer-events-auto has-data-[state=open]:opacity-100`, `has-data-[saved=true]:pointer-events-auto has-data-[saved=true]:opacity-100`, x), t[12] = x, t[13] = S);
        let C;
        t[14] !== o || t[15] !== s || t[16] !== h ? (C = (0, $.jsx)(J, {
            analyticsSurface: `product_card`,
            request: h,
            clientThreadId: o,
            messageId: s,
            assistantMessageId: s,
            className: `bg-token-bg-primary/90 hover:bg-token-bg-primary focus-visible:bg-token-bg-primary data-[state=open]:bg-token-bg-primary! [pointer-events:inherit] h-7! w-7! shadow-none backdrop-blur-xs`
        }), t[14] = o, t[15] = s, t[16] = h, t[17] = C) : C = t[17];
        let w;
        return t[18] !== S || t[19] !== C ? (w = (0, $.jsx)(`span`, {
            role: `presentation`,
            onClick: me,
            className: S,
            children: C
        }), t[18] = S, t[19] = C, t[20] = w) : w = t[20], w
    }
}));
export {
    J as a, ce as c, se as d, z as f, ne as g, te as h, de as i, ue as l, V as m, _e as n, Y as o, B as p, pe as r, le as s, ge as t, ae as u
};
//# sourceMappingURL=1362c49f-hlf3h2hmna77zirj.js.map