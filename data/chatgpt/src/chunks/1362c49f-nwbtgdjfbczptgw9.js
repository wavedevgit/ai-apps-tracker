import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Crt as n,
    K5 as r,
    Srt as i,
    bF as a,
    dJ as o,
    j5 as s,
    q5 as c,
    rq as l,
    uq as u,
    vF as d,
    y5 as f,
    yJ as p
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as m,
    Ln as h,
    Rn as g,
    wn as _,
    zn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Eft as y,
    O3 as b,
    k3 as x,
    kft as S,
    w3 as C
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Ky as w,
    Xv as ee,
    Zv as te,
    qy as T
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Gd as E,
    Ud as D
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    n as O,
    t as k
} from "./8e0d0293-lhcb00lungwnu42c.js";
import {
    n as A,
    t as j
} from "./a5f68020-hkv08agbhcu7kqkl.js";
import {
    C as M,
    S as N
} from "./2b67bcd8-2ytvs8gol6tuyvxs.js";

function ne(e) {
    "use forget";
    let t = (0, P.c)(11),
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
        __html: p(k)
    }, t[5] = s) : s = t[5];
    let c;
    return t[6] !== r || t[7] !== i || t[8] !== a || t[9] !== o ? (c = (0, F.jsx)(`svg`, {
        ...a,
        xmlns: `http://www.w3.org/2000/svg`,
        width: k.canvas.width,
        height: k.canvas.height,
        viewBox: k.canvas.viewBox,
        fill: `currentColor`,
        "aria-label": r,
        "aria-labelledby": i,
        "aria-hidden": o,
        dangerouslySetInnerHTML: s
    }), t[6] = r, t[7] = i, t[8] = a, t[9] = o, t[10] = c) : c = t[10], c
}
var P, F, I = e((() => {
    P = _(), o(), O(), F = m()
}));

function L({
    rating: e,
    numReviews: t,
    intl: n,
    includeNum: r = !1
}) {
    if (t != null && t < V) return null;
    let i = r && t && t > H && n.formatNumber(t, {
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
var R, z, B, V, H, U = e((() => {
    R = e => e?.reduce((e, t) => {
        let n = t.options.find(e => e.id === t.selected_option_id);
        return n && (e[t.id] = n), e
    }, {}) ?? {}, z = e => !e.variants?.length || e.variants.every(e => e.selected_option_id), B = ({
        isCheckoutEnabled: e,
        isClearingVariantSelection: t,
        isLoadingProductEntity: n
    }) => e && (t || n), V = 20, H = 100
}));

function re(e) {
    "use forget";
    let t = (0, W.c)(38),
        {
            product: n,
            includeNum: a,
            includeEndDelimiter: o,
            includeMidDelimiter: c,
            isInline: l,
            wrapperClass: u,
            iconSize: d
        } = e,
        f = a !== void 0 && a,
        p = o !== void 0 && o,
        m = c !== void 0 && c,
        h = l !== void 0 && l,
        g = d === void 0 ? `medium` : d,
        _ = !s(ie),
        y = m && !_,
        b = v(),
        x;
    t[0] === n.popularity_metadata?.product_tags ? x = t[1] : (x = n.popularity_metadata?.product_tags?.includes(`popular`) ?? !1, t[0] = n.popularity_metadata?.product_tags, t[1] = x);
    let S = x,
        C;
    if (t[2] !== S) {
        let e = i(`2128165686`);
        C = S && e.get(`render_product_tags_v1`, !1), t[2] = S, t[3] = C
    } else C = t[3];
    let w = C,
        ee = n.rating != null,
        T;
    t[4] !== f || t[5] !== b || t[6] !== n.num_reviews || t[7] !== n.rating ? (T = L({
        rating: n.rating,
        numReviews: n.num_reviews,
        intl: b,
        includeNum: f
    }), t[4] = f, t[5] = b, t[6] = n.num_reviews, t[7] = n.rating, t[8] = T) : T = t[8];
    let E = T,
        D = E && ee;
    if (!w && !D) return null;
    let O = h ? `inline-flex items-center font-normal` : `inline-block w-full items-center font-normal`,
        k = _ && `tracking-tight`,
        A;
    t[9] !== k || t[10] !== O || t[11] !== u ? (A = r(u, O, k), t[9] = k, t[10] = O, t[11] = u, t[12] = A) : A = t[12];
    let j;
    t[13] !== g || t[14] !== b || t[15] !== w ? (j = w && (0, G.jsx)(`span`, {
        children: (0, G.jsxs)(`span`, {
            className: `inline-block text-nowrap`,
            children: [(0, G.jsx)(ne, {
                className: r(`mb-0.5 inline-block`, g === `small` ? `size-3` : `size-4`)
            }), q, (0, G.jsx)(`span`, {
                children: b.formatMessage({
                    id: `search.product.popular`,
                    defaultMessage: `Popular`
                })
            })]
        })
    }), t[13] = g, t[14] = b, t[15] = w, t[16] = j) : j = t[16];
    let M;
    t[17] !== y || t[18] !== w || t[19] !== D ? (M = y && w && D && (0, G.jsx)(`span`, {
        children: K
    }), t[17] = y, t[18] = w, t[19] = D, t[20] = M) : M = t[20];
    let N;
    t[21] !== y || t[22] !== w || t[23] !== D ? (N = !y && w && D && (0, G.jsx)(`span`, {
        children: q
    }), t[21] = y, t[22] = w, t[23] = D, t[24] = N) : N = t[24];
    let P;
    t[25] !== g || t[26] !== E || t[27] !== D ? (P = D && E && (0, G.jsxs)(`span`, {
        className: `text-nowrap`,
        children: [(0, G.jsx)(te, {
            className: r(`me-1 mb-[0.1875rem] inline-block`, g === `small` ? `size-3` : `size-4`)
        }), E]
    }), t[25] = g, t[26] = E, t[27] = D, t[28] = P) : P = t[28];
    let F;
    t[29] === p ? F = t[30] : (F = p && (0, G.jsx)(`span`, {
        className: `mb-1`,
        children: K
    }), t[29] = p, t[30] = F);
    let I;
    return t[31] !== A || t[32] !== j || t[33] !== M || t[34] !== N || t[35] !== P || t[36] !== F ? (I = (0, G.jsxs)(`span`, {
        className: A,
        children: [j, M, N, P, F]
    }), t[31] = A, t[32] = j, t[33] = M, t[34] = N, t[35] = P, t[36] = F, t[37] = I) : I = t[37], I
}

function ie() {
    return u()
}
var W, G, K, q, ae = e((() => {
    W = _(), I(), ee(), U(), t(), l(), n(), c(), g(), G = m(), K = `\xA0·\xA0`, q = `\xA0`
}));

function oe() {
    return i(`2128165686`).get(`browse_enabled`, !1)
}
var se = e((() => {
        n()
    })),
    J, ce, Y, le = e((() => {
        J = _(), A(), ce = m(), Y = e => {
            "use forget";
            let t = (0, J.c)(6),
                n, r;
            t[0] === e ? (n = t[1], r = t[2]) : ({
                analyticsSurface: r,
                ...n
            } = e, t[0] = e, t[1] = n, t[2] = r);
            let i = r === void 0 ? `product_sidebar` : r,
                a;
            return t[3] !== i || t[4] !== n ? (a = (0, ce.jsx)(j, {
                analyticsSurface: i,
                ...n
            }), t[3] = i, t[4] = n, t[5] = a) : a = t[5], a
        }
    }));

function ue({
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

function de(e) {
    "use forget";
    let t = (0, fe.c)(19),
        {
            selection: n,
            placement: i,
            className: a
        } = e,
        o = i === void 0 ? `inset` : i,
        s = v(),
        c;
    t[0] === s ? c = t[1] : (c = s.formatMessage(Z.selectLabel), t[0] = s, t[1] = c);
    let l = c,
        u;
    t[2] === s ? u = t[3] : (u = s.formatMessage(Z.deselectLabel), t[2] = s, t[3] = u);
    let d = u,
        f = n.isSelected,
        p = n.isSelected ? d : l,
        m;
    t[4] === n ? m = t[5] : (m = e => {
        e.preventDefault(), e.stopPropagation(), n.onToggleSelection()
    }, t[4] = n, t[5] = m);
    let h = o === `flush` ? `end-0 top-0` : `end-2 top-2`,
        g = n.showCheckbox ? `pointer-events-auto opacity-100` : `pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100`,
        _;
    t[6] !== a || t[7] !== h || t[8] !== g ? (_ = r(`focus-visible:outline-token-outline-primary absolute z-10 flex size-7 items-center justify-center rounded-full focus-visible:outline-offset-[-8px]`, h, g, a), t[6] = a, t[7] = h, t[8] = g, t[9] = _) : _ = t[9];
    let y;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, X.jsx)(`span`, {
        className: `absolute inset-1.5 rounded-full bg-black/35 blur-md`
    }), t[10] = y) : y = t[10];
    let b;
    t[11] === n.isSelected ? b = t[12] : (b = n.isSelected ? (0, X.jsx)(`span`, {
        className: `z-[11] flex size-5 items-center justify-center rounded-full bg-white dark:bg-white`,
        children: (0, X.jsx)(w, {
            className: `entity-accent size-4 stroke-current stroke-[1.25]`
        })
    }) : (0, X.jsx)(`span`, {
        className: `z-[11] flex size-5 items-center justify-center rounded-full`,
        children: (0, X.jsx)(`span`, {
            className: `relative size-5 rounded-full border-2 border-current text-white`,
            children: (0, X.jsx)(`span`, {
                className: `absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm`
            })
        })
    }), t[11] = n.isSelected, t[12] = b);
    let x;
    return t[13] !== n.isSelected || t[14] !== b || t[15] !== p || t[16] !== m || t[17] !== _ ? (x = (0, X.jsxs)(`button`, {
        type: `button`,
        "aria-pressed": f,
        "aria-label": p,
        onClick: m,
        className: _,
        children: [y, b]
    }), t[13] = n.isSelected, t[14] = b, t[15] = p, t[16] = m, t[17] = _, t[18] = x) : x = t[18], x
}
var fe, X, Z, pe = e((() => {
    fe = _(), T(), c(), g(), C(), X = m(), Z = h({
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
var he, Q, $, ge = e((() => {
    he = _(), d(), y(), M(), E(), le(), pe(), t(), c(), Q = m(), $ = e => {
        "use forget";
        let t = (0, he.c)(21),
            {
                product: n,
                clientThreadId: i,
                messageId: o,
                isSourceCatalogProduct$: c,
                selectionUi: l,
                placement: u
            } = e,
            d = u === void 0 ? `inset` : u,
            p = a(),
            m;
        t[0] !== p || t[1] !== o || t[2] !== n ? (m = D({
            product: n,
            rewrittenQueries: p ? f(() => N(p, o)) : void 0
        }), t[0] = p, t[1] = o, t[2] = n, t[3] = m) : m = t[3];
        let h = m,
            g;
        t[4] === h ? g = t[5] : (g = h != null && S({
            disableExposureLog: !1
        }), t[4] = h, t[5] = g);
        let _ = g,
            v;
        t[6] !== _ || t[7] !== c ? (v = () => _ && (c?.() ?? !1), t[6] = _, t[7] = c, t[8] = v) : v = t[8];
        let y = s(v);
        if (h == null || !_ || y) {
            let e;
            return t[9] !== d || t[10] !== l ? (e = l ? (0, Q.jsx)(de, {
                selection: l,
                placement: d
            }) : null, t[9] = d, t[10] = l, t[11] = e) : e = t[11], e
        }
        let b = d === `flush` ? `end-0 top-0` : `end-2 top-2`,
            x;
        t[12] === b ? x = t[13] : (x = r(`absolute z-10 transition-opacity empty:hidden`, `can-hover:pointer-events-none can-hover:opacity-0 can-hover:group-hover/product-card:pointer-events-auto can-hover:group-hover/product-card:opacity-100 can-hover:group-focus-within/product-card:pointer-events-auto can-hover:group-focus-within/product-card:opacity-100`, `has-data-[state=open]:pointer-events-auto has-data-[state=open]:opacity-100`, `has-data-[saved=true]:pointer-events-auto has-data-[saved=true]:opacity-100`, b), t[12] = b, t[13] = x);
        let C;
        t[14] !== i || t[15] !== o || t[16] !== h ? (C = (0, Q.jsx)(Y, {
            analyticsSurface: `product_card`,
            request: h,
            clientThreadId: i,
            messageId: o,
            assistantMessageId: o,
            className: `bg-token-bg-primary/90 hover:bg-token-bg-primary focus-visible:bg-token-bg-primary data-[state=open]:bg-token-bg-primary! [pointer-events:inherit] h-7! w-7! shadow-none backdrop-blur-xs`
        }), t[14] = i, t[15] = o, t[16] = h, t[17] = C) : C = t[17];
        let w;
        return t[18] !== x || t[19] !== C ? (w = (0, Q.jsx)(`span`, {
            role: `presentation`,
            onClick: me,
            className: x,
            children: C
        }), t[18] = x, t[19] = C, t[20] = w) : w = t[20], w
    }
}));
export {
    Y as a, se as c, L as d, R as f, B as h, ue as i, re as l, z as m, ge as n, le as o, U as p, pe as r, oe as s, $ as t, ae as u
};
//# sourceMappingURL=1362c49f-nwbtgdjfbczptgw9.js.map