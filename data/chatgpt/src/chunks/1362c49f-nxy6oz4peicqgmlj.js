import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as t,
    N5 as n,
    Xnt as r,
    Y5 as i,
    Ynt as a,
    aq as o,
    fF as s,
    fq as c,
    h8 as l,
    mF as u,
    pJ as d,
    x5 as f,
    xJ as p
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as m,
    Ln as h,
    Rn as g,
    wn as _,
    zn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    C3 as y,
    Fft as b,
    Mft as x,
    S3 as S,
    v3 as C
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    $v as w,
    Jy as T,
    Qv as E,
    Yy as D
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    Bd as O,
    Hd as k
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    n as A,
    t as j
} from "./8e0d0293-ku97j6uqsokgydui.js";
import {
    n as M,
    t as N
} from "./a5f68020-b0pi4kn4c7slcs2h.js";
import {
    C as P,
    S as F
} from "./2b67bcd8-fpmgt6afd6skqewc.js";

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
    I = _(), d(), A(), L = m()
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
    let r = (0, H.c)(38),
        {
            product: i,
            includeNum: o,
            includeEndDelimiter: s,
            includeMidDelimiter: c,
            isInline: l,
            wrapperClass: u,
            iconSize: d
        } = e,
        f = o !== void 0 && o,
        p = s !== void 0 && s,
        m = c !== void 0 && c,
        h = l !== void 0 && l,
        g = d === void 0 ? `medium` : d,
        _ = !n(oe),
        y = m && !_,
        b = v(),
        x;
    r[0] === i.popularity_metadata?.product_tags ? x = r[1] : (x = i.popularity_metadata?.product_tags?.includes(`popular`) ?? !1, r[0] = i.popularity_metadata?.product_tags, r[1] = x);
    let S = x,
        C;
    if (r[2] !== S) {
        let e = a(`2128165686`);
        C = S && e.get(`render_product_tags_v1`, !1), r[2] = S, r[3] = C
    } else C = r[3];
    let T = C,
        E = i.rating != null,
        D;
    r[4] !== f || r[5] !== b || r[6] !== i.num_reviews || r[7] !== i.rating ? (D = z({
        rating: i.rating,
        numReviews: i.num_reviews,
        intl: b,
        includeNum: f
    }), r[4] = f, r[5] = b, r[6] = i.num_reviews, r[7] = i.rating, r[8] = D) : D = r[8];
    let O = D,
        k = O && E;
    if (!T && !k) return null;
    let A = h ? `inline-flex items-center font-normal` : `inline-block w-full items-center font-normal`,
        j = _ && `tracking-tight`,
        M;
    r[9] !== j || r[10] !== A || r[11] !== u ? (M = t(u, A, j), r[9] = j, r[10] = A, r[11] = u, r[12] = M) : M = r[12];
    let N;
    r[13] !== g || r[14] !== b || r[15] !== T ? (N = T && (0, U.jsx)(`span`, {
        children: (0, U.jsxs)(`span`, {
            className: `inline-block text-nowrap`,
            children: [(0, U.jsx)(ee, {
                className: t(`mb-0.5 inline-block`, g === `small` ? `size-3` : `size-4`)
            }), G, (0, U.jsx)(`span`, {
                children: b.formatMessage({
                    id: `search.product.popular`,
                    defaultMessage: `Popular`
                })
            })]
        })
    }), r[13] = g, r[14] = b, r[15] = T, r[16] = N) : N = r[16];
    let P;
    r[17] !== y || r[18] !== T || r[19] !== k ? (P = y && T && k && (0, U.jsx)(`span`, {
        children: W
    }), r[17] = y, r[18] = T, r[19] = k, r[20] = P) : P = r[20];
    let F;
    r[21] !== y || r[22] !== T || r[23] !== k ? (F = !y && T && k && (0, U.jsx)(`span`, {
        children: G
    }), r[21] = y, r[22] = T, r[23] = k, r[24] = F) : F = r[24];
    let I;
    r[25] !== g || r[26] !== O || r[27] !== k ? (I = k && O && (0, U.jsxs)(`span`, {
        className: `text-nowrap`,
        children: [(0, U.jsx)(w, {
            className: t(`me-1 mb-[0.1875rem] inline-block`, g === `small` ? `size-3` : `size-4`)
        }), O]
    }), r[25] = g, r[26] = O, r[27] = k, r[28] = I) : I = r[28];
    let L;
    r[29] === p ? L = r[30] : (L = p && (0, U.jsx)(`span`, {
        className: `mb-1`,
        children: W
    }), r[29] = p, r[30] = L);
    let R;
    return r[31] !== M || r[32] !== N || r[33] !== P || r[34] !== F || r[35] !== I || r[36] !== L ? (R = (0, U.jsxs)(`span`, {
        className: M,
        children: [N, P, F, I, L]
    }), r[31] = M, r[32] = N, r[33] = P, r[34] = F, r[35] = I, r[36] = L, r[37] = R) : R = r[37], R
}

function oe() {
    return c()
}
var H, U, W, G, se = e((() => {
    H = _(), R(), E(), V(), l(), o(), r(), i(), g(), U = m(), W = `\xA0·\xA0`, G = `\xA0`
}));

function ce() {
    return a(`2128165686`).get(`browse_enabled`, !1)
}

function le() {
    return a(`2128165686`).get(`browse_descriptions_enabled`, !1)
}
var ue = e((() => {
        r()
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
    let i = y(e),
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
    let n = (0, X.c)(19),
        {
            selection: r,
            placement: i,
            className: a
        } = e,
        o = i === void 0 ? `inset` : i,
        s = v(),
        c;
    n[0] === s ? c = n[1] : (c = s.formatMessage(Q.selectLabel), n[0] = s, n[1] = c);
    let l = c,
        u;
    n[2] === s ? u = n[3] : (u = s.formatMessage(Q.deselectLabel), n[2] = s, n[3] = u);
    let d = u,
        f = r.isSelected,
        p = r.isSelected ? d : l,
        m;
    n[4] === r ? m = n[5] : (m = e => {
        e.preventDefault(), e.stopPropagation(), r.onToggleSelection()
    }, n[4] = r, n[5] = m);
    let h = o === `flush` ? `end-0 top-0` : `end-2 top-2`,
        g = r.showCheckbox ? `pointer-events-auto opacity-100` : `pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100`,
        _;
    n[6] !== a || n[7] !== h || n[8] !== g ? (_ = t(`focus-visible:outline-token-outline-primary absolute z-10 flex size-7 items-center justify-center rounded-full focus-visible:outline-offset-[-8px]`, h, g, a), n[6] = a, n[7] = h, n[8] = g, n[9] = _) : _ = n[9];
    let y;
    n[10] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, Z.jsx)(`span`, {
        className: `absolute inset-1.5 rounded-full bg-black/35 blur-md`
    }), n[10] = y) : y = n[10];
    let b;
    n[11] === r.isSelected ? b = n[12] : (b = r.isSelected ? (0, Z.jsx)(`span`, {
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
    }), n[11] = r.isSelected, n[12] = b);
    let x;
    return n[13] !== r.isSelected || n[14] !== b || n[15] !== p || n[16] !== m || n[17] !== _ ? (x = (0, Z.jsxs)(`button`, {
        type: `button`,
        "aria-pressed": f,
        "aria-label": p,
        onClick: m,
        className: _,
        children: [y, b]
    }), n[13] = r.isSelected, n[14] = b, n[15] = p, n[16] = m, n[17] = _, n[18] = x) : x = n[18], x
}
var X, Z, Q, pe = e((() => {
    X = _(), D(), i(), g(), C(), Z = m(), Q = h({
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
    he = _(), s(), x(), P(), k(), Y(), pe(), l(), i(), $ = m(), ge = e => {
        "use forget";
        let r = (0, he.c)(21),
            {
                product: i,
                clientThreadId: a,
                messageId: o,
                isSourceCatalogProduct$: s,
                selectionUi: c,
                placement: l
            } = e,
            d = l === void 0 ? `inset` : l,
            p = u(),
            m;
        r[0] !== p || r[1] !== o || r[2] !== i ? (m = O({
            product: i,
            rewrittenQueries: p ? f(() => F(p, o)) : void 0
        }), r[0] = p, r[1] = o, r[2] = i, r[3] = m) : m = r[3];
        let h = m,
            g;
        r[4] === h ? g = r[5] : (g = h != null && b({
            disableExposureLog: !1
        }), r[4] = h, r[5] = g);
        let _ = g,
            v;
        r[6] !== _ || r[7] !== s ? (v = () => _ && (s?.() ?? !1), r[6] = _, r[7] = s, r[8] = v) : v = r[8];
        let y = n(v);
        if (h == null || !_ || y) {
            let e;
            return r[9] !== d || r[10] !== c ? (e = c ? (0, $.jsx)(fe, {
                selection: c,
                placement: d
            }) : null, r[9] = d, r[10] = c, r[11] = e) : e = r[11], e
        }
        let x = d === `flush` ? `end-0 top-0` : `end-2 top-2`,
            S;
        r[12] === x ? S = r[13] : (S = t(`absolute z-10 transition-opacity empty:hidden`, `can-hover:pointer-events-none can-hover:opacity-0 can-hover:group-hover/product-card:pointer-events-auto can-hover:group-hover/product-card:opacity-100 can-hover:group-focus-within/product-card:pointer-events-auto can-hover:group-focus-within/product-card:opacity-100`, `has-data-[state=open]:pointer-events-auto has-data-[state=open]:opacity-100`, `has-data-[saved=true]:pointer-events-auto has-data-[saved=true]:opacity-100`, x), r[12] = x, r[13] = S);
        let C;
        r[14] !== a || r[15] !== o || r[16] !== h ? (C = (0, $.jsx)(J, {
            analyticsSurface: `product_card`,
            request: h,
            clientThreadId: a,
            messageId: o,
            assistantMessageId: o,
            className: `bg-token-bg-primary/90 hover:bg-token-bg-primary focus-visible:bg-token-bg-primary data-[state=open]:bg-token-bg-primary! [pointer-events:inherit] h-7! w-7! shadow-none backdrop-blur-xs`
        }), r[14] = a, r[15] = o, r[16] = h, r[17] = C) : C = r[17];
        let w;
        return r[18] !== S || r[19] !== C ? (w = (0, $.jsx)(`span`, {
            role: `presentation`,
            onClick: me,
            className: S,
            children: C
        }), r[18] = S, r[19] = C, r[20] = w) : w = r[20], w
    }
}));
export {
    J as a, ce as c, se as d, z as f, ne as g, te as h, de as i, ue as l, V as m, _e as n, Y as o, B as p, pe as r, le as s, ge as t, ae as u
};
//# sourceMappingURL=1362c49f-nxy6oz4peicqgmlj.js.map