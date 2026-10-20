import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as t,
    Jnt as n,
    M5 as r,
    aq as i,
    b5 as a,
    fF as o,
    fq as s,
    m8 as c,
    mF as l,
    pJ as u,
    q5 as d,
    qnt as f,
    xJ as p
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as m,
    Rn as h,
    Tn as g,
    Vn as _,
    zn as v
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Aft as y,
    C3 as b,
    Nft as x,
    S3 as S,
    v3 as C
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    $v as w,
    Jy as T,
    Qv as E,
    Yy as D
} from "./30901919-jory365vq6ym5crx.js";
import {
    Vd as O,
    zd as k
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    n as A,
    t as j
} from "./8e0d0293-i872ouk4x6b8qqx6.js";
import {
    n as M,
    t as N
} from "./a5f68020-i8llevojawxqjo26.js";
import {
    C as P,
    S as F
} from "./2b67bcd8-e8trjgoqarc7t9c2.js";

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
    I = g(), u(), A(), L = _()
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
            isInline: s,
            wrapperClass: c,
            iconSize: l
        } = e,
        u = i !== void 0 && i,
        p = a !== void 0 && a,
        h = o !== void 0 && o,
        g = s !== void 0 && s,
        _ = l === void 0 ? `medium` : l,
        v = !r(oe),
        y = h && !v,
        b = m(),
        x;
    t[0] === n.popularity_metadata?.product_tags ? x = t[1] : (x = n.popularity_metadata?.product_tags?.includes(`popular`) ?? !1, t[0] = n.popularity_metadata?.product_tags, t[1] = x);
    let S = x,
        C;
    if (t[2] !== S) {
        let e = f(`2128165686`);
        C = S && e.get(`render_product_tags_v1`, !1), t[2] = S, t[3] = C
    } else C = t[3];
    let T = C,
        E = n.rating != null,
        D;
    t[4] !== u || t[5] !== b || t[6] !== n.num_reviews || t[7] !== n.rating ? (D = z({
        rating: n.rating,
        numReviews: n.num_reviews,
        intl: b,
        includeNum: u
    }), t[4] = u, t[5] = b, t[6] = n.num_reviews, t[7] = n.rating, t[8] = D) : D = t[8];
    let O = D,
        k = O && E;
    if (!T && !k) return null;
    let A = g ? `inline-flex items-center font-normal` : `inline-block w-full items-center font-normal`,
        j = v && `tracking-tight`,
        M;
    t[9] !== j || t[10] !== A || t[11] !== c ? (M = d(c, A, j), t[9] = j, t[10] = A, t[11] = c, t[12] = M) : M = t[12];
    let N;
    t[13] !== _ || t[14] !== b || t[15] !== T ? (N = T && (0, U.jsx)(`span`, {
        children: (0, U.jsxs)(`span`, {
            className: `inline-block text-nowrap`,
            children: [(0, U.jsx)(ee, {
                className: d(`mb-0.5 inline-block`, _ === `small` ? `size-3` : `size-4`)
            }), G, (0, U.jsx)(`span`, {
                children: b.formatMessage({
                    id: `search.product.popular`,
                    defaultMessage: `Popular`
                })
            })]
        })
    }), t[13] = _, t[14] = b, t[15] = T, t[16] = N) : N = t[16];
    let P;
    t[17] !== y || t[18] !== T || t[19] !== k ? (P = y && T && k && (0, U.jsx)(`span`, {
        children: W
    }), t[17] = y, t[18] = T, t[19] = k, t[20] = P) : P = t[20];
    let F;
    t[21] !== y || t[22] !== T || t[23] !== k ? (F = !y && T && k && (0, U.jsx)(`span`, {
        children: G
    }), t[21] = y, t[22] = T, t[23] = k, t[24] = F) : F = t[24];
    let I;
    t[25] !== _ || t[26] !== O || t[27] !== k ? (I = k && O && (0, U.jsxs)(`span`, {
        className: `text-nowrap`,
        children: [(0, U.jsx)(w, {
            className: d(`me-1 mb-[0.1875rem] inline-block`, _ === `small` ? `size-3` : `size-4`)
        }), O]
    }), t[25] = _, t[26] = O, t[27] = k, t[28] = I) : I = t[28];
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
    return s()
}
var H, U, W, G, se = e((() => {
    H = g(), R(), E(), V(), c(), i(), n(), t(), v(), U = _(), W = `\xA0·\xA0`, G = `\xA0`
}));

function ce() {
    return f(`2128165686`).get(`browse_enabled`, !1)
}

function le() {
    return f(`2128165686`).get(`browse_descriptions_enabled`, !1)
}
var ue = e((() => {
        n()
    })),
    K, q, J, Y = e((() => {
        K = g(), M(), q = _(), J = e => {
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
    let i = b(e),
        a = S(e),
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
        o = m(),
        s;
    t[0] === o ? s = t[1] : (s = o.formatMessage(Q.selectLabel), t[0] = o, t[1] = s);
    let c = s,
        l;
    t[2] === o ? l = t[3] : (l = o.formatMessage(Q.deselectLabel), t[2] = o, t[3] = l);
    let u = l,
        f = n.isSelected,
        p = n.isSelected ? u : c,
        h;
    t[4] === n ? h = t[5] : (h = e => {
        e.preventDefault(), e.stopPropagation(), n.onToggleSelection()
    }, t[4] = n, t[5] = h);
    let g = a === `flush` ? `end-0 top-0` : `end-2 top-2`,
        _ = n.showCheckbox ? `pointer-events-auto opacity-100` : `pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100`,
        v;
    t[6] !== i || t[7] !== g || t[8] !== _ ? (v = d(`focus-visible:outline-token-outline-primary absolute z-10 flex size-7 items-center justify-center rounded-full focus-visible:outline-offset-[-8px]`, g, _, i), t[6] = i, t[7] = g, t[8] = _, t[9] = v) : v = t[9];
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
    return t[13] !== n.isSelected || t[14] !== b || t[15] !== p || t[16] !== h || t[17] !== v ? (x = (0, Z.jsxs)(`button`, {
        type: `button`,
        "aria-pressed": f,
        "aria-label": p,
        onClick: h,
        className: v,
        children: [y, b]
    }), t[13] = n.isSelected, t[14] = b, t[15] = p, t[16] = h, t[17] = v, t[18] = x) : x = t[18], x
}
var X, Z, Q, pe = e((() => {
    X = g(), D(), t(), v(), C(), Z = _(), Q = h({
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
    he = g(), o(), y(), P(), O(), Y(), pe(), c(), t(), $ = _(), ge = e => {
        "use forget";
        let t = (0, he.c)(21),
            {
                product: n,
                clientThreadId: i,
                messageId: o,
                isSourceCatalogProduct$: s,
                selectionUi: c,
                placement: u
            } = e,
            f = u === void 0 ? `inset` : u,
            p = l(),
            m;
        t[0] !== p || t[1] !== o || t[2] !== n ? (m = k({
            product: n,
            rewrittenQueries: p ? a(() => F(p, o)) : void 0
        }), t[0] = p, t[1] = o, t[2] = n, t[3] = m) : m = t[3];
        let h = m,
            g;
        t[4] === h ? g = t[5] : (g = h != null && x({
            disableExposureLog: !1
        }), t[4] = h, t[5] = g);
        let _ = g,
            v;
        t[6] !== _ || t[7] !== s ? (v = () => _ && (s?.() ?? !1), t[6] = _, t[7] = s, t[8] = v) : v = t[8];
        let y = r(v);
        if (h == null || !_ || y) {
            let e;
            return t[9] !== f || t[10] !== c ? (e = c ? (0, $.jsx)(fe, {
                selection: c,
                placement: f
            }) : null, t[9] = f, t[10] = c, t[11] = e) : e = t[11], e
        }
        let b = f === `flush` ? `end-0 top-0` : `end-2 top-2`,
            S;
        t[12] === b ? S = t[13] : (S = d(`absolute z-10 transition-opacity empty:hidden`, `can-hover:pointer-events-none can-hover:opacity-0 can-hover:group-hover/product-card:pointer-events-auto can-hover:group-hover/product-card:opacity-100 can-hover:group-focus-within/product-card:pointer-events-auto can-hover:group-focus-within/product-card:opacity-100`, `has-data-[state=open]:pointer-events-auto has-data-[state=open]:opacity-100`, `has-data-[saved=true]:pointer-events-auto has-data-[saved=true]:opacity-100`, b), t[12] = b, t[13] = S);
        let C;
        t[14] !== i || t[15] !== o || t[16] !== h ? (C = (0, $.jsx)(J, {
            analyticsSurface: `product_card`,
            request: h,
            clientThreadId: i,
            messageId: o,
            assistantMessageId: o,
            className: `bg-token-bg-primary/90 hover:bg-token-bg-primary focus-visible:bg-token-bg-primary data-[state=open]:bg-token-bg-primary! [pointer-events:inherit] h-7! w-7! shadow-none backdrop-blur-xs`
        }), t[14] = i, t[15] = o, t[16] = h, t[17] = C) : C = t[17];
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
//# sourceMappingURL=1362c49f-b4tydasw50b32hvj.js.map