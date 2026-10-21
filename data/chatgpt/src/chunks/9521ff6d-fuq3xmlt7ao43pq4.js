import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as r,
    Dq as i,
    HP as a,
    Met as o,
    Nq as s,
    P5 as c,
    S5 as l,
    Tet as u,
    X5 as d,
    Y5 as f,
    _tt as p,
    cW as m,
    g8 as h,
    jet as g,
    ltt as _,
    oW as ee,
    oq as v,
    vnt as te,
    xP as ne,
    yq as y,
    zP as b
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as x,
    Nn as S,
    Nt as C,
    Q as w,
    Rn as T,
    Vn as E,
    wn as D,
    zn as O
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Edn as k,
    Qgn as A,
    Tdn as j,
    Zgn as re,
    ah as ie,
    drn as M,
    orn as N,
    rh as ae
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    Gh as oe,
    Kh as se
} from "./30901919-niqyapppecmq5jkn.js";
import {
    Ac as P,
    Oc as ce,
    kc as le
} from "./8b34dbc2-ojcl97ddvu2212q0.js";
import {
    n as F,
    t as ue
} from "./4775c8e0-iiel3fmsp8wc0dsb.js";

function I(e) {
    "use forget";
    let t = (0, R.c)(5),
        {
            children: n
        } = e,
        r = C(),
        i;
    t[0] === r ? i = t[1] : (i = () => {
        M({
            navigate: r,
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: j.CHAT,
                checkoutOriginDeliverySurface: `web`
            },
            openModalLocation: B
        })
    }, t[0] = r, t[1] = i);
    let a;
    return t[2] !== n || t[3] !== i ? (a = (0, z.jsx)(`button`, {
        type: `button`,
        className: `text-blue-400`,
        onClick: i,
        children: n
    }), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a
}

function L(e) {
    return e.feature_name === _.IMAGE_GEN
}
var R, z, B, de, V = e((() => {
    R = D(), p(), k(), d(), T(), w(), re(), u(), N(), h(), ne(), s(), ce(), z = x(), B = o.ImageGenPromptItemCardRow, de = e => {
        "use forget";
        let t = (0, R.c)(10),
            {
                className: n
            } = e,
            r = c(A),
            {
                isBlocked: o
            } = P(i.PictureV2),
            s = a(),
            l;
        t[0] === s ? l = t[1] : (l = le(s) ? s : null, t[0] = s, t[1] = l);
        let u = l,
            d = b(L),
            p = O(),
            m;
        if (t[2] === Symbol.for(`react.memo_cache_sentinel`)) {
            let e = g({
                openModalLocation: B
            });
            m = t => e ? (0, z.jsx)(I, {
                children: t
            }) : (0, z.jsx)(z.Fragment, {
                children: t
            }), t[2] = m
        } else m = t[2];
        let h = m,
            _;
        return t[3] !== n || t[4] !== d || t[5] !== p || t[6] !== r || t[7] !== o || t[8] !== u ? (_ = r ? (0, z.jsx)(`div`, {
            className: f(`text-token-text-secondary text-sm`, n),
            children: (0, z.jsx)(S, {
                id: `chatgpt.imagegen.prompt_item_card_row.unavailable.description`,
                defaultMessage: `Image creation isn’t available for this account`
            })
        }) : u ? (0, z.jsx)(`div`, {
            className: f(`text-token-text-secondary text-sm`, n),
            children: (0, z.jsx)(S, {
                id: `chatgpt.imagegen.prompt_item_card_row.mini_model_dependency.description`,
                defaultMessage: `Image creation isn’t available with this model. Try again when Instant usage resets at {resetTime}, or <upgradeLink>upgrade to continue</upgradeLink>.`,
                values: {
                    resetTime: new Date(u.resets_after).toLocaleTimeString(p.locale, {
                        hour: `numeric`,
                        minute: `2-digit`
                    }),
                    upgradeLink: h
                }
            })
        }) : o && d ? (0, z.jsx)(`div`, {
            className: f(`text-token-text-secondary text-sm`, n),
            children: (0, z.jsx)(S, {
                id: `imagegen.promptItemCardRow.rateLimitedUpgradeMessage`,
                defaultMessage: `{remaining} images left. Wait for your usage to reset at {resetTime}, or <upgradeLink>upgrade for more.</upgradeLink>`,
                values: {
                    remaining: d.remaining,
                    resetTime: new Date(d.reset_after).toLocaleTimeString(p.locale, {
                        hour: `numeric`,
                        minute: `2-digit`
                    }),
                    upgradeLink: h
                }
            })
        }) : null, t[3] = n, t[4] = d, t[5] = p, t[6] = r, t[7] = o, t[8] = u, t[9] = _) : _ = t[9], _
    }
}));

function fe(e) {
    "use forget";
    let t = (0, H.c)(5),
        {
            children: n,
            className: r
        } = e,
        i;
    t[0] === r ? i = t[1] : (i = f(`flex flex-col gap-3`, r), t[0] = r, t[1] = i);
    let a;
    return t[2] !== n || t[3] !== i ? (a = (0, U.jsx)(`section`, {
        className: i,
        children: n
    }), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a
}
var H, U, pe = e((() => {
        H = D(), d(), U = x()
    })),
    me = t({
        ImageGenPromptItemCardRow: () => Y
    });

function he(e) {
    return Array.from(e.querySelectorAll(`button`)).filter(e => e.getClientRects().length > 0)
}

function W(e, t) {
    return t.reduce((n, r, i) => Math.abs(r - e) < Math.abs(t[n] - e) ? i : n, 0)
}

function ge(e) {
    let t = he(e),
        n = Math.max(e.scrollWidth - e.clientWidth, 0);
    if (t.length === 0 || t.length === 1) return {
        itemsPerPage: 1,
        pagePositions: [0]
    };
    let r = e.getBoundingClientRect().left,
        i = t[0].getBoundingClientRect(),
        a = t[1].getBoundingClientRect(),
        o = i.left - r + e.scrollLeft,
        s = a.left - r + e.scrollLeft,
        c = o,
        l = i.width,
        u = Math.max(s - o - l, 0),
        d = l + u;
    if (d <= 0) return {
        itemsPerPage: 1,
        pagePositions: [0]
    };
    let f = Math.max(Math.floor((e.clientWidth + u) / d), 1),
        p = [];
    for (let i = 0; i < t.length; i += f) {
        let a = t[i].getBoundingClientRect().left - r + e.scrollLeft,
            o = Math.max(a - c, 0),
            s = Math.min(o, n);
        p.at(-1) !== s && p.push(s)
    }
    return {
        itemsPerPage: f,
        pagePositions: p.length > 0 ? p : [0]
    }
}

function _e(e) {
    "use forget";
    let t = (0, ye.c)(24),
        {
            hideControls: n,
            itemsLength: r,
            skeleton: i
        } = e,
        a = (0, K.useRef)(null),
        o;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = [0], t[0] = o) : o = t[0];
    let s = (0, K.useRef)(o),
        [c, u] = (0, K.useState)(0),
        [d, f] = (0, K.useState)(1),
        [p, m] = (0, K.useState)(1),
        h;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (h = l(G), t[1] = h) : h = t[1];
    let g = h,
        _;
    t[2] !== r || t[3] !== i ? (_ = () => i ?? r === 0, t[2] = r, t[3] = i, t[4] = _) : _ = t[4];
    let [v, ne] = (0, K.useState)(_), y;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (y = () => {
        let e = a.current;
        if (!e) return;
        let {
            itemsPerPage: t,
            pagePositions: n
        } = ge(e);
        s.current = n;
        let r = W(e.scrollLeft, n);
        (0, K.startTransition)(() => {
            m(t), f(n.length), u(r)
        })
    }, t[5] = y) : y = t[5];
    let b = y,
        x;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (x = () => {
        let e = a.current;
        if (!e) return;
        let t = W(e.scrollLeft, s.current);
        (0, K.startTransition)(() => {
            u(t)
        })
    }, t[6] = x) : x = t[6];
    let S = x,
        C;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (C = e => {
        let t = a.current;
        if (!t) return;
        let n = s.current,
            r = Math.max(n.length - 1, 0),
            i = Math.max(0, Math.min(e, r));
        (0, K.startTransition)(() => {
            u(i)
        }), t.scrollTo({
            left: n[i] ?? 0,
            behavior: g ? `auto` : `smooth`
        })
    }, t[7] = C) : C = t[7];
    let w = C,
        T, E;
    t[8] !== r || t[9] !== i ? (T = () => {
        (0, K.startTransition)(() => {
            ne(i ?? r === 0)
        })
    }, E = [r, i], t[8] = r, t[9] = i, t[10] = T, t[11] = E) : (T = t[10], E = t[11]), (0, K.useEffect)(T, E);
    let D, O;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (O = () => {
        if (te()) return;
        let e = a.current;
        if (!(!e || typeof ResizeObserver > `u`)) return ee({
            axis: `width`,
            onChange: () => {
                b()
            },
            target: e
        })
    }, D = [b], t[12] = D, t[13] = O) : (D = t[12], O = t[13]), (0, K.useEffect)(O, D);
    let k;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (k = () => {
        te() || b()
    }, t[14] = k) : k = t[14];
    let A;
    t[15] !== n || t[16] !== v || t[17] !== r ? (A = [n, v, r, b], t[15] = n, t[16] = v, t[17] = r, t[18] = A) : A = t[18], (0, K.useEffect)(k, A);
    let j;
    return t[19] !== v || t[20] !== p || t[21] !== d || t[22] !== c ? (j = {
        isSkeleton: v,
        pageCount: d,
        pageIndex: c,
        itemsPerPage: p,
        scrollContainerRef: a,
        scrollToPage: w,
        updatePageIndexFromScroll: S
    }, t[19] = v, t[20] = p, t[21] = d, t[22] = c, t[23] = j) : j = t[23], j
}

function G() {
    return y()
}

function ve(e) {
    "use forget";
    let t = (0, ye.c)(8),
        {
            hideControls: n,
            itemClassName: r,
            itemFrameClassName: i,
            labelPosition: a,
            showAllItems: o
        } = e,
        s = o && n ? J : n ? 10 : 11,
        c = o && n ? xe : void 0,
        l;
    t[0] === s ? l = t[1] : (l = Array.from({
        length: s
    }), t[0] = s, t[1] = l);
    let u;
    return t[2] !== r || t[3] !== i || t[4] !== a || t[5] !== c || t[6] !== l ? (u = l.map((e, t) => (0, q.jsx)(ae, {
        className: f(r, c != null && t >= c && `max-md:hidden`),
        frameClassName: i,
        skeleton: !0,
        label: (0, q.jsx)(S, {
            id: `imagegen.actions.add_yourself.label`,
            defaultMessage: `Add yourself`
        }),
        content: (0, q.jsx)(`img`, {
            src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAn8B9FY6SFwAAAAASUVORK5CYII=`,
            alt: ``,
            width: 1024,
            height: 1024,
            className: `invisible h-full w-full object-cover`
        }),
        labelPosition: a,
        type: `apply-style`
    }, t)), t[2] = r, t[3] = i, t[4] = a, t[5] = c, t[6] = l, t[7] = u) : u = t[7], u
}
var ye, K, q, be, J, xe, Y, X = e((() => {
    ye = D(), d(), K = n(E()), T(), oe(), V(), pe(), h(), m(), v(), r(), ie(), F(), q = x(), be = `-my-1.5 flex w-full gap-3 overflow-clip overflow-x-auto overscroll-x-contain py-1.5 contain-layout contain-paint contain-style [overflow-clip-margin:calc(var(--spacing)*1.5)] [scrollbar-width:none]`, J = 12, xe = 6, Y = e => {
        "use forget";
        let t = (0, ye.c)(92),
            {
                className: n,
                headerClassName: r,
                rateLimitMessageClassName: i,
                scrollContainerWrapperClassName: a,
                scrollContainerClassName: o,
                header: s,
                headerAction: c,
                showAllItems: l,
                hideControls: u,
                hideRateLimitMessage: d,
                items: p,
                isUploadDisabled: m,
                onEditPhoto: h,
                renderItem: g,
                skeleton: _,
                showDismissButton: ee
            } = e,
            v = l !== void 0 && l,
            ne = d !== void 0 && d,
            y = ee !== void 0 && ee,
            b = v ? `w-full min-w-0 md:flex-none md:shrink-0 md:basis-[calc((100%-(var(--spacing)*6))/4)]` : `shrink-0 basis-24 md:flex-none md:basis-[calc((100%-(var(--spacing)*12))/5)]`,
            x;
        t[0] === b ? x = t[1] : (x = f(`transition-discrete motion-safe:transition-opacity starting:opacity-0`, b), t[0] = b, t[1] = x);
        let C = x,
            w = v ? `max-md:w-full` : void 0,
            T;
        t[2] !== u || t[3] !== p.length || t[4] !== _ ? (T = {
            hideControls: u,
            itemsLength: p.length,
            skeleton: _
        }, t[2] = u, t[3] = p.length, t[4] = _, t[5] = T) : T = t[5];
        let {
            isSkeleton: E,
            pageCount: D,
            pageIndex: O,
            itemsPerPage: k,
            scrollContainerRef: A,
            scrollToPage: j,
            updatePageIndexFromScroll: re
        } = _e(T), ie = p.length + +!u, M = Math.min(O * k, Math.max(ie - k, 0)), N = Math.min(M + k - 1, ie - 1), oe;
        t[6] !== E || t[7] !== D || t[8] !== v ? (oe = !v && !te() && !E && D > 1, t[6] = E, t[7] = D, t[8] = v, t[9] = oe) : oe = t[9];
        let P = oe,
            ce = v && `w-full`,
            le = E && `group skeleton`,
            F;
        t[10] !== n || t[11] !== ce || t[12] !== le ? (F = f(`gap-4`, `my-1.5`, ce, le, n), t[10] = n, t[11] = ce, t[12] = le, t[13] = F) : F = t[13];
        let I;
        t[14] === r ? I = t[15] : (I = f(`flex min-h-9 items-center justify-between gap-4`, r), t[14] = r, t[15] = I);
        let L;
        t[16] !== ne || t[17] !== i ? (L = !ne && (0, q.jsx)(de, {
            className: i
        }), t[16] = ne, t[17] = i, t[18] = L) : L = t[18];
        let R;
        t[19] !== s || t[20] !== L ? (R = (0, q.jsxs)(`div`, {
            children: [s, L]
        }), t[19] = s, t[20] = L, t[21] = R) : R = t[21];
        let z = E ? null : c,
            B;
        t[22] !== D || t[23] !== O || t[24] !== j || t[25] !== v || t[26] !== y ? (B = !v && (0, q.jsx)(ue, {
            pageIndex: O,
            pageCount: D,
            onPreviousPage: () => j(O - 1),
            onNextPage: () => j(O + 1),
            showDismissButton: y
        }), t[22] = D, t[23] = O, t[24] = j, t[25] = v, t[26] = y, t[27] = B) : B = t[27];
        let V;
        t[28] !== z || t[29] !== B ? (V = (0, q.jsxs)(`div`, {
            className: `ms-auto flex items-center gap-3`,
            children: [z, B]
        }), t[28] = z, t[29] = B, t[30] = V) : V = t[30];
        let H;
        t[31] !== I || t[32] !== R || t[33] !== V ? (H = (0, q.jsxs)(`div`, {
            className: I,
            children: [R, V]
        }), t[31] = I, t[32] = R, t[33] = V, t[34] = H) : H = t[34];
        let U;
        t[35] === a ? U = t[36] : (U = f(a), t[35] = a, t[36] = U);
        let pe = v ? void 0 : re,
            me = E && `group skeleton`,
            he = v ? `grid w-full grid-cols-2 gap-2 md:flex md:flex-wrap` : be,
            W;
        t[37] !== o || t[38] !== me || t[39] !== he ? (W = f(me, he, o), t[37] = o, t[38] = me, t[39] = he, t[40] = W) : W = t[40];
        let ge = E ? `visible` : `hidden`,
            G;
        t[41] !== u || t[42] !== C || t[43] !== w || t[44] !== v ? (G = (0, q.jsx)(ve, {
            hideControls: u,
            itemClassName: C,
            itemFrameClassName: w,
            labelPosition: `overlay`,
            showAllItems: v
        }), t[41] = u, t[42] = C, t[43] = w, t[44] = v, t[45] = G) : G = t[45];
        let J;
        t[46] !== ge || t[47] !== G ? (J = (0, q.jsx)(K.Activity, {
            mode: ge,
            children: G
        }), t[46] = ge, t[47] = G, t[48] = J) : J = t[48];
        let xe = E ? `hidden` : `visible`,
            Y;
        t[49] !== M || t[50] !== u || t[51] !== m || t[52] !== C || t[53] !== w || t[54] !== N || t[55] !== h || t[56] !== P ? (Y = !u && (0, q.jsx)(ae, {
            ariaHidden: P && !(0 >= M && 0 <= N),
            className: C,
            disabled: m,
            frameClassName: w,
            label: (0, q.jsx)(S, {
                id: `imagegen.actions.upload_photo.label`,
                defaultMessage: `Upload a photo`
            }),
            onClick: h,
            content: (0, q.jsx)(`div`, {
                className: `flex h-full w-full items-center justify-center`,
                children: (0, q.jsx)(se, {
                    className: `icon size-6`
                })
            }),
            labelPosition: `overlay`,
            type: `add-photo`
        }), t[49] = M, t[50] = u, t[51] = m, t[52] = C, t[53] = w, t[54] = N, t[55] = h, t[56] = P, t[57] = Y) : Y = t[57];
        let X;
        if (t[58] !== M || t[59] !== u || t[60] !== C || t[61] !== w || t[62] !== p || t[63] !== N || t[64] !== g || t[65] !== P) {
            let e;
            t[67] !== M || t[68] !== u || t[69] !== C || t[70] !== w || t[71] !== N || t[72] !== g || t[73] !== P ? (e = (e, t) => (0, q.jsx)(`div`, {
                className: C,
                children: g({
                    item: e,
                    index: t,
                    itemClassName: C,
                    itemFrameClassName: w,
                    ariaHidden: P && !((u ? t : t + 1) >= M && (u ? t : t + 1) <= N)
                })
            }, e.id), t[67] = M, t[68] = u, t[69] = C, t[70] = w, t[71] = N, t[72] = g, t[73] = P, t[74] = e) : e = t[74], X = p.map(e), t[58] = M, t[59] = u, t[60] = C, t[61] = w, t[62] = p, t[63] = N, t[64] = g, t[65] = P, t[66] = X
        } else X = t[66];
        let Z;
        t[75] !== xe || t[76] !== Y || t[77] !== X ? (Z = (0, q.jsxs)(K.Activity, {
            mode: xe,
            children: [Y, X]
        }), t[75] = xe, t[76] = Y, t[77] = X, t[78] = Z) : Z = t[78];
        let Q;
        t[79] !== A || t[80] !== pe || t[81] !== W || t[82] !== J || t[83] !== Z ? (Q = (0, q.jsxs)(`div`, {
            ref: A,
            onScroll: pe,
            className: W,
            children: [J, Z]
        }), t[79] = A, t[80] = pe, t[81] = W, t[82] = J, t[83] = Z, t[84] = Q) : Q = t[84];
        let $;
        t[85] !== U || t[86] !== Q ? ($ = (0, q.jsx)(`div`, {
            className: U,
            children: Q
        }), t[85] = U, t[86] = Q, t[87] = $) : $ = t[87];
        let Se;
        return t[88] !== F || t[89] !== H || t[90] !== $ ? (Se = (0, q.jsxs)(fe, {
            className: F,
            children: [H, $]
        }), t[88] = F, t[89] = H, t[90] = $, t[91] = Se) : Se = t[91], Se
    }
}));
export {
    pe as a, fe as i, me as n, de as o, X as r, V as s, Y as t
};
//# sourceMappingURL=9521ff6d-fuq3xmlt7ao43pq4.js.map