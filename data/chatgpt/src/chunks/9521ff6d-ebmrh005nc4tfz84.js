import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as r,
    Aet as i,
    Aq as a,
    Bnt as o,
    EP as s,
    K5 as c,
    WP as l,
    aW as u,
    ctt as d,
    gq as f,
    gtt as p,
    j5 as m,
    jet as h,
    q5 as g,
    qP as _,
    rW as ee,
    rq as v,
    wet as y,
    wq as b,
    xnt as x,
    y5 as te
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as S,
    Nn as C,
    Nt as w,
    Q as T,
    Rn as E,
    Vn as D,
    wn as O,
    zn as k
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Hdn as A,
    N_n as j,
    P_n as M,
    Udn as ne,
    ah as re,
    brn as N,
    hrn as P,
    rh as ie
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Uh as ae,
    Wh as oe
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Ac as F,
    jc as se,
    kc as ce
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    n as I,
    t as le
} from "./4775c8e0-m42eilol9g4co5oa.js";

function L(e) {
    "use forget";
    let t = (0, z.c)(5),
        {
            children: n
        } = e,
        r = w(),
        i;
    t[0] === r ? i = t[1] : (i = () => {
        N({
            navigate: r,
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: A.CHAT,
                checkoutOriginDeliverySurface: `web`
            },
            openModalLocation: V
        })
    }, t[0] = r, t[1] = i);
    let a;
    return t[2] !== n || t[3] !== i ? (a = (0, B.jsx)(`button`, {
        type: `button`,
        className: `text-blue-400`,
        onClick: i,
        children: n
    }), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a
}

function R(e) {
    return e.feature_name === d.IMAGE_GEN
}
var z, B, V, ue, H = e((() => {
    z = O(), p(), ne(), g(), E(), T(), j(), y(), P(), r(), s(), a(), ce(), B = S(), V = h.ImageGenPromptItemCardRow, ue = e => {
        "use forget";
        let t = (0, z.c)(10),
            {
                className: n
            } = e,
            r = m(M),
            {
                isBlocked: a
            } = se(b.PictureV2),
            o = _(),
            s;
        t[0] === o ? s = t[1] : (s = F(o) ? o : null, t[0] = o, t[1] = s);
        let u = s,
            d = l(R),
            f = k(),
            p;
        if (t[2] === Symbol.for(`react.memo_cache_sentinel`)) {
            let e = i({
                openModalLocation: V
            });
            p = t => e ? (0, B.jsx)(L, {
                children: t
            }) : (0, B.jsx)(B.Fragment, {
                children: t
            }), t[2] = p
        } else p = t[2];
        let h = p,
            g;
        return t[3] !== n || t[4] !== d || t[5] !== f || t[6] !== r || t[7] !== a || t[8] !== u ? (g = r ? (0, B.jsx)(`div`, {
            className: c(`text-token-text-secondary text-sm`, n),
            children: (0, B.jsx)(C, {
                id: `chatgpt.imagegen.prompt_item_card_row.unavailable.description`,
                defaultMessage: `Image creation isn’t available for this account`
            })
        }) : u ? (0, B.jsx)(`div`, {
            className: c(`text-token-text-secondary text-sm`, n),
            children: (0, B.jsx)(C, {
                id: `chatgpt.imagegen.prompt_item_card_row.mini_model_dependency.description`,
                defaultMessage: `Image creation isn’t available with this model. Try again when Instant usage resets at {resetTime}, or <upgradeLink>upgrade to continue</upgradeLink>.`,
                values: {
                    resetTime: new Date(u.resets_after).toLocaleTimeString(f.locale, {
                        hour: `numeric`,
                        minute: `2-digit`
                    }),
                    upgradeLink: h
                }
            })
        }) : a && d ? (0, B.jsx)(`div`, {
            className: c(`text-token-text-secondary text-sm`, n),
            children: (0, B.jsx)(C, {
                id: `imagegen.promptItemCardRow.rateLimitedUpgradeMessage`,
                defaultMessage: `{remaining} images left. Wait for your usage to reset at {resetTime}, or <upgradeLink>upgrade for more.</upgradeLink>`,
                values: {
                    remaining: d.remaining,
                    resetTime: new Date(d.reset_after).toLocaleTimeString(f.locale, {
                        hour: `numeric`,
                        minute: `2-digit`
                    }),
                    upgradeLink: h
                }
            })
        }) : null, t[3] = n, t[4] = d, t[5] = f, t[6] = r, t[7] = a, t[8] = u, t[9] = g) : g = t[9], g
    }
}));

function de(e) {
    "use forget";
    let t = (0, U.c)(5),
        {
            children: n,
            className: r
        } = e,
        i;
    t[0] === r ? i = t[1] : (i = c(`flex flex-col gap-3`, r), t[0] = r, t[1] = i);
    let a;
    return t[2] !== n || t[3] !== i ? (a = (0, W.jsx)(`section`, {
        className: i,
        children: n
    }), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a
}
var U, W, fe = e((() => {
        U = O(), g(), W = S()
    })),
    pe = t({
        ImageGenPromptItemCardRow: () => X
    });

function me(e) {
    return Array.from(e.querySelectorAll(`button`)).filter(e => e.getClientRects().length > 0)
}

function G(e, t) {
    return t.reduce((n, r, i) => Math.abs(r - e) < Math.abs(t[n] - e) ? i : n, 0)
}

function he(e) {
    let t = me(e),
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

function ge(e) {
    "use forget";
    let t = (0, ve.c)(24),
        {
            hideControls: n,
            itemsLength: r,
            skeleton: i
        } = e,
        a = (0, q.useRef)(null),
        s;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = [0], t[0] = s) : s = t[0];
    let c = (0, q.useRef)(s),
        [l, u] = (0, q.useState)(0),
        [d, f] = (0, q.useState)(1),
        [p, m] = (0, q.useState)(1),
        h;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (h = te(K), t[1] = h) : h = t[1];
    let g = h,
        _;
    t[2] !== r || t[3] !== i ? (_ = () => i ?? r === 0, t[2] = r, t[3] = i, t[4] = _) : _ = t[4];
    let [v, y] = (0, q.useState)(_), b;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (b = () => {
        let e = a.current;
        if (!e) return;
        let {
            itemsPerPage: t,
            pagePositions: n
        } = he(e);
        c.current = n;
        let r = G(e.scrollLeft, n);
        (0, q.startTransition)(() => {
            m(t), f(n.length), u(r)
        })
    }, t[5] = b) : b = t[5];
    let x = b,
        S;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (S = () => {
        let e = a.current;
        if (!e) return;
        let t = G(e.scrollLeft, c.current);
        (0, q.startTransition)(() => {
            u(t)
        })
    }, t[6] = S) : S = t[6];
    let C = S,
        w;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (w = e => {
        let t = a.current;
        if (!t) return;
        let n = c.current,
            r = Math.max(n.length - 1, 0),
            i = Math.max(0, Math.min(e, r));
        (0, q.startTransition)(() => {
            u(i)
        }), t.scrollTo({
            left: n[i] ?? 0,
            behavior: g ? `auto` : `smooth`
        })
    }, t[7] = w) : w = t[7];
    let T = w,
        E, D;
    t[8] !== r || t[9] !== i ? (E = () => {
        (0, q.startTransition)(() => {
            y(i ?? r === 0)
        })
    }, D = [r, i], t[8] = r, t[9] = i, t[10] = E, t[11] = D) : (E = t[10], D = t[11]), (0, q.useEffect)(E, D);
    let O, k;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (k = () => {
        if (o()) return;
        let e = a.current;
        if (!(!e || typeof ResizeObserver > `u`)) return ee({
            axis: `width`,
            onChange: () => {
                x()
            },
            target: e
        })
    }, O = [x], t[12] = O, t[13] = k) : (O = t[12], k = t[13]), (0, q.useEffect)(k, O);
    let A;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (A = () => {
        o() || x()
    }, t[14] = A) : A = t[14];
    let j;
    t[15] !== n || t[16] !== v || t[17] !== r ? (j = [n, v, r, x], t[15] = n, t[16] = v, t[17] = r, t[18] = j) : j = t[18], (0, q.useEffect)(A, j);
    let M;
    return t[19] !== v || t[20] !== p || t[21] !== d || t[22] !== l ? (M = {
        isSkeleton: v,
        pageCount: d,
        pageIndex: l,
        itemsPerPage: p,
        scrollContainerRef: a,
        scrollToPage: T,
        updatePageIndexFromScroll: C
    }, t[19] = v, t[20] = p, t[21] = d, t[22] = l, t[23] = M) : M = t[23], M
}

function K() {
    return f()
}

function _e(e) {
    "use forget";
    let t = (0, ve.c)(8),
        {
            hideControls: n,
            itemClassName: r,
            itemFrameClassName: i,
            labelPosition: a,
            showAllItems: o
        } = e,
        s = o && n ? Y : n ? 10 : 11,
        l = o && n ? be : void 0,
        u;
    t[0] === s ? u = t[1] : (u = Array.from({
        length: s
    }), t[0] = s, t[1] = u);
    let d;
    return t[2] !== r || t[3] !== i || t[4] !== a || t[5] !== l || t[6] !== u ? (d = u.map((e, t) => (0, J.jsx)(ie, {
        className: c(r, l != null && t >= l && `max-md:hidden`),
        frameClassName: i,
        skeleton: !0,
        label: (0, J.jsx)(C, {
            id: `imagegen.actions.add_yourself.label`,
            defaultMessage: `Add yourself`
        }),
        content: (0, J.jsx)(`img`, {
            src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAn8B9FY6SFwAAAAASUVORK5CYII=`,
            alt: ``,
            width: 1024,
            height: 1024,
            className: `invisible h-full w-full object-cover`
        }),
        labelPosition: a,
        type: `apply-style`
    }, t)), t[2] = r, t[3] = i, t[4] = a, t[5] = l, t[6] = u, t[7] = d) : d = t[7], d
}
var ve, q, J, ye, Y, be, X, Z = e((() => {
    ve = O(), g(), q = n(D()), E(), ae(), H(), fe(), r(), u(), v(), x(), re(), I(), J = S(), ye = `-my-1.5 flex w-full gap-3 overflow-clip overflow-x-auto overscroll-x-contain py-1.5 contain-layout contain-paint contain-style [overflow-clip-margin:calc(var(--spacing)*1.5)] [scrollbar-width:none]`, Y = 12, be = 6, X = e => {
        "use forget";
        let t = (0, ve.c)(92),
            {
                className: n,
                headerClassName: r,
                rateLimitMessageClassName: i,
                scrollContainerWrapperClassName: a,
                scrollContainerClassName: s,
                header: l,
                headerAction: u,
                showAllItems: d,
                hideControls: f,
                hideRateLimitMessage: p,
                items: m,
                isUploadDisabled: h,
                onEditPhoto: g,
                renderItem: _,
                skeleton: ee,
                showDismissButton: v
            } = e,
            y = d !== void 0 && d,
            b = p !== void 0 && p,
            x = v !== void 0 && v,
            te = y ? `w-full min-w-0 md:flex-none md:shrink-0 md:basis-[calc((100%-(var(--spacing)*6))/4)]` : `shrink-0 basis-24 md:flex-none md:basis-[calc((100%-(var(--spacing)*12))/5)]`,
            S;
        t[0] === te ? S = t[1] : (S = c(`transition-discrete motion-safe:transition-opacity starting:opacity-0`, te), t[0] = te, t[1] = S);
        let w = S,
            T = y ? `max-md:w-full` : void 0,
            E;
        t[2] !== f || t[3] !== m.length || t[4] !== ee ? (E = {
            hideControls: f,
            itemsLength: m.length,
            skeleton: ee
        }, t[2] = f, t[3] = m.length, t[4] = ee, t[5] = E) : E = t[5];
        let {
            isSkeleton: D,
            pageCount: O,
            pageIndex: k,
            itemsPerPage: A,
            scrollContainerRef: j,
            scrollToPage: M,
            updatePageIndexFromScroll: ne
        } = ge(E), re = m.length + +!f, N = Math.min(k * A, Math.max(re - A, 0)), P = Math.min(N + A - 1, re - 1), ae;
        t[6] !== D || t[7] !== O || t[8] !== y ? (ae = !y && !o() && !D && O > 1, t[6] = D, t[7] = O, t[8] = y, t[9] = ae) : ae = t[9];
        let F = ae,
            se = y && `w-full`,
            ce = D && `group skeleton`,
            I;
        t[10] !== n || t[11] !== se || t[12] !== ce ? (I = c(`gap-4`, `my-1.5`, se, ce, n), t[10] = n, t[11] = se, t[12] = ce, t[13] = I) : I = t[13];
        let L;
        t[14] === r ? L = t[15] : (L = c(`flex min-h-9 items-center justify-between gap-4`, r), t[14] = r, t[15] = L);
        let R;
        t[16] !== b || t[17] !== i ? (R = !b && (0, J.jsx)(ue, {
            className: i
        }), t[16] = b, t[17] = i, t[18] = R) : R = t[18];
        let z;
        t[19] !== l || t[20] !== R ? (z = (0, J.jsxs)(`div`, {
            children: [l, R]
        }), t[19] = l, t[20] = R, t[21] = z) : z = t[21];
        let B = D ? null : u,
            V;
        t[22] !== O || t[23] !== k || t[24] !== M || t[25] !== y || t[26] !== x ? (V = !y && (0, J.jsx)(le, {
            pageIndex: k,
            pageCount: O,
            onPreviousPage: () => M(k - 1),
            onNextPage: () => M(k + 1),
            showDismissButton: x
        }), t[22] = O, t[23] = k, t[24] = M, t[25] = y, t[26] = x, t[27] = V) : V = t[27];
        let H;
        t[28] !== B || t[29] !== V ? (H = (0, J.jsxs)(`div`, {
            className: `ms-auto flex items-center gap-3`,
            children: [B, V]
        }), t[28] = B, t[29] = V, t[30] = H) : H = t[30];
        let U;
        t[31] !== L || t[32] !== z || t[33] !== H ? (U = (0, J.jsxs)(`div`, {
            className: L,
            children: [z, H]
        }), t[31] = L, t[32] = z, t[33] = H, t[34] = U) : U = t[34];
        let W;
        t[35] === a ? W = t[36] : (W = c(a), t[35] = a, t[36] = W);
        let fe = y ? void 0 : ne,
            pe = D && `group skeleton`,
            me = y ? `grid w-full grid-cols-2 gap-2 md:flex md:flex-wrap` : ye,
            G;
        t[37] !== s || t[38] !== pe || t[39] !== me ? (G = c(pe, me, s), t[37] = s, t[38] = pe, t[39] = me, t[40] = G) : G = t[40];
        let he = D ? `visible` : `hidden`,
            K;
        t[41] !== f || t[42] !== w || t[43] !== T || t[44] !== y ? (K = (0, J.jsx)(_e, {
            hideControls: f,
            itemClassName: w,
            itemFrameClassName: T,
            labelPosition: `overlay`,
            showAllItems: y
        }), t[41] = f, t[42] = w, t[43] = T, t[44] = y, t[45] = K) : K = t[45];
        let Y;
        t[46] !== he || t[47] !== K ? (Y = (0, J.jsx)(q.Activity, {
            mode: he,
            children: K
        }), t[46] = he, t[47] = K, t[48] = Y) : Y = t[48];
        let be = D ? `hidden` : `visible`,
            X;
        t[49] !== N || t[50] !== f || t[51] !== h || t[52] !== w || t[53] !== T || t[54] !== P || t[55] !== g || t[56] !== F ? (X = !f && (0, J.jsx)(ie, {
            ariaHidden: F && !(0 >= N && 0 <= P),
            className: w,
            disabled: h,
            frameClassName: T,
            label: (0, J.jsx)(C, {
                id: `imagegen.actions.upload_photo.label`,
                defaultMessage: `Upload a photo`
            }),
            onClick: g,
            content: (0, J.jsx)(`div`, {
                className: `flex h-full w-full items-center justify-center`,
                children: (0, J.jsx)(oe, {
                    className: `icon size-6`
                })
            }),
            labelPosition: `overlay`,
            type: `add-photo`
        }), t[49] = N, t[50] = f, t[51] = h, t[52] = w, t[53] = T, t[54] = P, t[55] = g, t[56] = F, t[57] = X) : X = t[57];
        let Z;
        if (t[58] !== N || t[59] !== f || t[60] !== w || t[61] !== T || t[62] !== m || t[63] !== P || t[64] !== _ || t[65] !== F) {
            let e;
            t[67] !== N || t[68] !== f || t[69] !== w || t[70] !== T || t[71] !== P || t[72] !== _ || t[73] !== F ? (e = (e, t) => (0, J.jsx)(`div`, {
                className: w,
                children: _({
                    item: e,
                    index: t,
                    itemClassName: w,
                    itemFrameClassName: T,
                    ariaHidden: F && !((f ? t : t + 1) >= N && (f ? t : t + 1) <= P)
                })
            }, e.id), t[67] = N, t[68] = f, t[69] = w, t[70] = T, t[71] = P, t[72] = _, t[73] = F, t[74] = e) : e = t[74], Z = m.map(e), t[58] = N, t[59] = f, t[60] = w, t[61] = T, t[62] = m, t[63] = P, t[64] = _, t[65] = F, t[66] = Z
        } else Z = t[66];
        let Q;
        t[75] !== be || t[76] !== X || t[77] !== Z ? (Q = (0, J.jsxs)(q.Activity, {
            mode: be,
            children: [X, Z]
        }), t[75] = be, t[76] = X, t[77] = Z, t[78] = Q) : Q = t[78];
        let $;
        t[79] !== j || t[80] !== fe || t[81] !== G || t[82] !== Y || t[83] !== Q ? ($ = (0, J.jsxs)(`div`, {
            ref: j,
            onScroll: fe,
            className: G,
            children: [Y, Q]
        }), t[79] = j, t[80] = fe, t[81] = G, t[82] = Y, t[83] = Q, t[84] = $) : $ = t[84];
        let xe;
        t[85] !== W || t[86] !== $ ? (xe = (0, J.jsx)(`div`, {
            className: W,
            children: $
        }), t[85] = W, t[86] = $, t[87] = xe) : xe = t[87];
        let Se;
        return t[88] !== I || t[89] !== U || t[90] !== xe ? (Se = (0, J.jsxs)(de, {
            className: I,
            children: [U, xe]
        }), t[88] = I, t[89] = U, t[90] = xe, t[91] = Se) : Se = t[91], Se
    }
}));
export {
    fe as a, de as i, pe as n, ue as o, Z as r, H as s, X as t
};
//# sourceMappingURL=9521ff6d-ebmrh005nc4tfz84.js.map