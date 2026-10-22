import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as r,
    Aq as i,
    Bet as a,
    EP as o,
    I5 as s,
    J5 as c,
    Ket as l,
    Mtt as u,
    Nnt as d,
    WP as f,
    aW as p,
    gq as m,
    l7 as h,
    mnt as g,
    qP as _,
    qet as v,
    rW as ee,
    rq as y,
    u7 as b,
    wq as x,
    wtt as S
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as C,
    Nn as w,
    Nt as T,
    Q as E,
    Rn as D,
    Vn as O,
    wn as k,
    zn as A
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Hdn as j,
    M_n as M,
    N_n as N,
    Vdn as te,
    ah as ne,
    brn as P,
    hrn as F,
    rh as re
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Gh as ie,
    Kh as ae
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    Ac as I,
    jc as oe,
    kc as se
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    n as L,
    t as ce
} from "./4775c8e0-d22srwqxb4le79jb.js";

function R(e) {
    "use forget";
    let t = (0, B.c)(5),
        {
            children: n
        } = e,
        r = T(),
        i;
    t[0] === r ? i = t[1] : (i = () => {
        P({
            navigate: r,
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: te.CHAT,
                checkoutOriginDeliverySurface: `web`
            },
            openModalLocation: H
        })
    }, t[0] = r, t[1] = i);
    let a;
    return t[2] !== n || t[3] !== i ? (a = (0, V.jsx)(`button`, {
        type: `button`,
        className: `text-blue-400`,
        onClick: i,
        children: n
    }), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a
}

function z(e) {
    return e.feature_name === S.IMAGE_GEN
}
var B, V, H, le, U = e((() => {
    B = k(), u(), j(), b(), D(), E(), M(), a(), F(), r(), o(), i(), se(), V = C(), H = v.ImageGenPromptItemCardRow, le = e => {
        "use forget";
        let t = (0, B.c)(10),
            {
                className: n
            } = e,
            r = c(N),
            {
                isBlocked: i
            } = oe(x.PictureV2),
            a = _(),
            o;
        t[0] === a ? o = t[1] : (o = I(a) ? a : null, t[0] = a, t[1] = o);
        let s = o,
            u = f(z),
            d = A(),
            p;
        if (t[2] === Symbol.for(`react.memo_cache_sentinel`)) {
            let e = l({
                openModalLocation: H
            });
            p = t => e ? (0, V.jsx)(R, {
                children: t
            }) : (0, V.jsx)(V.Fragment, {
                children: t
            }), t[2] = p
        } else p = t[2];
        let m = p,
            g;
        return t[3] !== n || t[4] !== u || t[5] !== d || t[6] !== r || t[7] !== i || t[8] !== s ? (g = r ? (0, V.jsx)(`div`, {
            className: h(`text-token-text-secondary text-sm`, n),
            children: (0, V.jsx)(w, {
                id: `chatgpt.imagegen.prompt_item_card_row.unavailable.description`,
                defaultMessage: `Image creation isn’t available for this account`
            })
        }) : s ? (0, V.jsx)(`div`, {
            className: h(`text-token-text-secondary text-sm`, n),
            children: (0, V.jsx)(w, {
                id: `chatgpt.imagegen.prompt_item_card_row.mini_model_dependency.description`,
                defaultMessage: `Image creation isn’t available with this model. Try again when Instant usage resets at {resetTime}, or <upgradeLink>upgrade to continue</upgradeLink>.`,
                values: {
                    resetTime: new Date(s.resets_after).toLocaleTimeString(d.locale, {
                        hour: `numeric`,
                        minute: `2-digit`
                    }),
                    upgradeLink: m
                }
            })
        }) : i && u ? (0, V.jsx)(`div`, {
            className: h(`text-token-text-secondary text-sm`, n),
            children: (0, V.jsx)(w, {
                id: `imagegen.promptItemCardRow.rateLimitedUpgradeMessage`,
                defaultMessage: `{remaining} images left. Wait for your usage to reset at {resetTime}, or <upgradeLink>upgrade for more.</upgradeLink>`,
                values: {
                    remaining: u.remaining,
                    resetTime: new Date(u.reset_after).toLocaleTimeString(d.locale, {
                        hour: `numeric`,
                        minute: `2-digit`
                    }),
                    upgradeLink: m
                }
            })
        }) : null, t[3] = n, t[4] = u, t[5] = d, t[6] = r, t[7] = i, t[8] = s, t[9] = g) : g = t[9], g
    }
}));

function ue(e) {
    "use forget";
    let t = (0, W.c)(5),
        {
            children: n,
            className: r
        } = e,
        i;
    t[0] === r ? i = t[1] : (i = h(`flex flex-col gap-3`, r), t[0] = r, t[1] = i);
    let a;
    return t[2] !== n || t[3] !== i ? (a = (0, G.jsx)(`section`, {
        className: i,
        children: n
    }), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a
}
var W, G, de = e((() => {
        W = k(), b(), G = C()
    })),
    fe = t({
        ImageGenPromptItemCardRow: () => Z
    });

function pe(e) {
    return Array.from(e.querySelectorAll(`button`)).filter(e => e.getClientRects().length > 0)
}

function K(e, t) {
    return t.reduce((n, r, i) => Math.abs(r - e) < Math.abs(t[n] - e) ? i : n, 0)
}

function me(e) {
    let t = pe(e),
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

function he(e) {
    "use forget";
    let t = (0, _e.c)(24),
        {
            hideControls: n,
            itemsLength: r,
            skeleton: i
        } = e,
        a = (0, J.useRef)(null),
        o;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = [0], t[0] = o) : o = t[0];
    let c = (0, J.useRef)(o),
        [l, u] = (0, J.useState)(0),
        [f, p] = (0, J.useState)(1),
        [m, h] = (0, J.useState)(1),
        g;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (g = s(q), t[1] = g) : g = t[1];
    let _ = g,
        v;
    t[2] !== r || t[3] !== i ? (v = () => i ?? r === 0, t[2] = r, t[3] = i, t[4] = v) : v = t[4];
    let [y, b] = (0, J.useState)(v), x;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (x = () => {
        let e = a.current;
        if (!e) return;
        let {
            itemsPerPage: t,
            pagePositions: n
        } = me(e);
        c.current = n;
        let r = K(e.scrollLeft, n);
        (0, J.startTransition)(() => {
            h(t), p(n.length), u(r)
        })
    }, t[5] = x) : x = t[5];
    let S = x,
        C;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (C = () => {
        let e = a.current;
        if (!e) return;
        let t = K(e.scrollLeft, c.current);
        (0, J.startTransition)(() => {
            u(t)
        })
    }, t[6] = C) : C = t[6];
    let w = C,
        T;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (T = e => {
        let t = a.current;
        if (!t) return;
        let n = c.current,
            r = Math.max(n.length - 1, 0),
            i = Math.max(0, Math.min(e, r));
        (0, J.startTransition)(() => {
            u(i)
        }), t.scrollTo({
            left: n[i] ?? 0,
            behavior: _ ? `auto` : `smooth`
        })
    }, t[7] = T) : T = t[7];
    let E = T,
        D, O;
    t[8] !== r || t[9] !== i ? (D = () => {
        (0, J.startTransition)(() => {
            b(i ?? r === 0)
        })
    }, O = [r, i], t[8] = r, t[9] = i, t[10] = D, t[11] = O) : (D = t[10], O = t[11]), (0, J.useEffect)(D, O);
    let k, A;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (A = () => {
        if (d()) return;
        let e = a.current;
        if (!(!e || typeof ResizeObserver > `u`)) return ee({
            axis: `width`,
            onChange: () => {
                S()
            },
            target: e
        })
    }, k = [S], t[12] = k, t[13] = A) : (k = t[12], A = t[13]), (0, J.useEffect)(A, k);
    let j;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (j = () => {
        d() || S()
    }, t[14] = j) : j = t[14];
    let M;
    t[15] !== n || t[16] !== y || t[17] !== r ? (M = [n, y, r, S], t[15] = n, t[16] = y, t[17] = r, t[18] = M) : M = t[18], (0, J.useEffect)(j, M);
    let N;
    return t[19] !== y || t[20] !== m || t[21] !== f || t[22] !== l ? (N = {
        isSkeleton: y,
        pageCount: f,
        pageIndex: l,
        itemsPerPage: m,
        scrollContainerRef: a,
        scrollToPage: E,
        updatePageIndexFromScroll: w
    }, t[19] = y, t[20] = m, t[21] = f, t[22] = l, t[23] = N) : N = t[23], N
}

function q() {
    return m()
}

function ge(e) {
    "use forget";
    let t = (0, _e.c)(8),
        {
            hideControls: n,
            itemClassName: r,
            itemFrameClassName: i,
            labelPosition: a,
            showAllItems: o
        } = e,
        s = o && n ? X : n ? 10 : 11,
        c = o && n ? ye : void 0,
        l;
    t[0] === s ? l = t[1] : (l = Array.from({
        length: s
    }), t[0] = s, t[1] = l);
    let u;
    return t[2] !== r || t[3] !== i || t[4] !== a || t[5] !== c || t[6] !== l ? (u = l.map((e, t) => (0, Y.jsx)(re, {
        className: h(r, c != null && t >= c && `max-md:hidden`),
        frameClassName: i,
        skeleton: !0,
        label: (0, Y.jsx)(w, {
            id: `imagegen.actions.add_yourself.label`,
            defaultMessage: `Add yourself`
        }),
        content: (0, Y.jsx)(`img`, {
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
var _e, J, Y, ve, X, ye, Z, Q = e((() => {
    _e = k(), b(), J = n(O()), D(), ie(), U(), de(), r(), p(), y(), g(), ne(), L(), Y = C(), ve = `-my-1.5 flex w-full gap-3 overflow-clip overflow-x-auto overscroll-x-contain py-1.5 contain-layout contain-paint contain-style [overflow-clip-margin:calc(var(--spacing)*1.5)] [scrollbar-width:none]`, X = 12, ye = 6, Z = e => {
        "use forget";
        let t = (0, _e.c)(92),
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
                hideRateLimitMessage: f,
                items: p,
                isUploadDisabled: m,
                onEditPhoto: g,
                renderItem: _,
                skeleton: v,
                showDismissButton: ee
            } = e,
            y = l !== void 0 && l,
            b = f !== void 0 && f,
            x = ee !== void 0 && ee,
            S = y ? `w-full min-w-0 md:flex-none md:shrink-0 md:basis-[calc((100%-(var(--spacing)*6))/4)]` : `shrink-0 basis-24 md:flex-none md:basis-[calc((100%-(var(--spacing)*12))/5)]`,
            C;
        t[0] === S ? C = t[1] : (C = h(`transition-discrete motion-safe:transition-opacity starting:opacity-0`, S), t[0] = S, t[1] = C);
        let T = C,
            E = y ? `max-md:w-full` : void 0,
            D;
        t[2] !== u || t[3] !== p.length || t[4] !== v ? (D = {
            hideControls: u,
            itemsLength: p.length,
            skeleton: v
        }, t[2] = u, t[3] = p.length, t[4] = v, t[5] = D) : D = t[5];
        let {
            isSkeleton: O,
            pageCount: k,
            pageIndex: A,
            itemsPerPage: j,
            scrollContainerRef: M,
            scrollToPage: N,
            updatePageIndexFromScroll: te
        } = he(D), ne = p.length + +!u, P = Math.min(A * j, Math.max(ne - j, 0)), F = Math.min(P + j - 1, ne - 1), ie;
        t[6] !== O || t[7] !== k || t[8] !== y ? (ie = !y && !d() && !O && k > 1, t[6] = O, t[7] = k, t[8] = y, t[9] = ie) : ie = t[9];
        let I = ie,
            oe = y && `w-full`,
            se = O && `group skeleton`,
            L;
        t[10] !== n || t[11] !== oe || t[12] !== se ? (L = h(`gap-4`, `my-1.5`, oe, se, n), t[10] = n, t[11] = oe, t[12] = se, t[13] = L) : L = t[13];
        let R;
        t[14] === r ? R = t[15] : (R = h(`flex min-h-9 items-center justify-between gap-4`, r), t[14] = r, t[15] = R);
        let z;
        t[16] !== b || t[17] !== i ? (z = !b && (0, Y.jsx)(le, {
            className: i
        }), t[16] = b, t[17] = i, t[18] = z) : z = t[18];
        let B;
        t[19] !== s || t[20] !== z ? (B = (0, Y.jsxs)(`div`, {
            children: [s, z]
        }), t[19] = s, t[20] = z, t[21] = B) : B = t[21];
        let V = O ? null : c,
            H;
        t[22] !== k || t[23] !== A || t[24] !== N || t[25] !== y || t[26] !== x ? (H = !y && (0, Y.jsx)(ce, {
            pageIndex: A,
            pageCount: k,
            onPreviousPage: () => N(A - 1),
            onNextPage: () => N(A + 1),
            showDismissButton: x
        }), t[22] = k, t[23] = A, t[24] = N, t[25] = y, t[26] = x, t[27] = H) : H = t[27];
        let U;
        t[28] !== V || t[29] !== H ? (U = (0, Y.jsxs)(`div`, {
            className: `ms-auto flex items-center gap-3`,
            children: [V, H]
        }), t[28] = V, t[29] = H, t[30] = U) : U = t[30];
        let W;
        t[31] !== R || t[32] !== B || t[33] !== U ? (W = (0, Y.jsxs)(`div`, {
            className: R,
            children: [B, U]
        }), t[31] = R, t[32] = B, t[33] = U, t[34] = W) : W = t[34];
        let G;
        t[35] === a ? G = t[36] : (G = h(a), t[35] = a, t[36] = G);
        let de = y ? void 0 : te,
            fe = O && `group skeleton`,
            pe = y ? `grid w-full grid-cols-2 gap-2 md:flex md:flex-wrap` : ve,
            K;
        t[37] !== o || t[38] !== fe || t[39] !== pe ? (K = h(fe, pe, o), t[37] = o, t[38] = fe, t[39] = pe, t[40] = K) : K = t[40];
        let me = O ? `visible` : `hidden`,
            q;
        t[41] !== u || t[42] !== T || t[43] !== E || t[44] !== y ? (q = (0, Y.jsx)(ge, {
            hideControls: u,
            itemClassName: T,
            itemFrameClassName: E,
            labelPosition: `overlay`,
            showAllItems: y
        }), t[41] = u, t[42] = T, t[43] = E, t[44] = y, t[45] = q) : q = t[45];
        let X;
        t[46] !== me || t[47] !== q ? (X = (0, Y.jsx)(J.Activity, {
            mode: me,
            children: q
        }), t[46] = me, t[47] = q, t[48] = X) : X = t[48];
        let ye = O ? `hidden` : `visible`,
            Z;
        t[49] !== P || t[50] !== u || t[51] !== m || t[52] !== T || t[53] !== E || t[54] !== F || t[55] !== g || t[56] !== I ? (Z = !u && (0, Y.jsx)(re, {
            ariaHidden: I && !(0 >= P && 0 <= F),
            className: T,
            disabled: m,
            frameClassName: E,
            label: (0, Y.jsx)(w, {
                id: `imagegen.actions.upload_photo.label`,
                defaultMessage: `Upload a photo`
            }),
            onClick: g,
            content: (0, Y.jsx)(`div`, {
                className: `flex h-full w-full items-center justify-center`,
                children: (0, Y.jsx)(ae, {
                    className: `icon size-6`
                })
            }),
            labelPosition: `overlay`,
            type: `add-photo`
        }), t[49] = P, t[50] = u, t[51] = m, t[52] = T, t[53] = E, t[54] = F, t[55] = g, t[56] = I, t[57] = Z) : Z = t[57];
        let Q;
        if (t[58] !== P || t[59] !== u || t[60] !== T || t[61] !== E || t[62] !== p || t[63] !== F || t[64] !== _ || t[65] !== I) {
            let e;
            t[67] !== P || t[68] !== u || t[69] !== T || t[70] !== E || t[71] !== F || t[72] !== _ || t[73] !== I ? (e = (e, t) => (0, Y.jsx)(`div`, {
                className: T,
                children: _({
                    item: e,
                    index: t,
                    itemClassName: T,
                    itemFrameClassName: E,
                    ariaHidden: I && !((u ? t : t + 1) >= P && (u ? t : t + 1) <= F)
                })
            }, e.id), t[67] = P, t[68] = u, t[69] = T, t[70] = E, t[71] = F, t[72] = _, t[73] = I, t[74] = e) : e = t[74], Q = p.map(e), t[58] = P, t[59] = u, t[60] = T, t[61] = E, t[62] = p, t[63] = F, t[64] = _, t[65] = I, t[66] = Q
        } else Q = t[66];
        let $;
        t[75] !== ye || t[76] !== Z || t[77] !== Q ? ($ = (0, Y.jsxs)(J.Activity, {
            mode: ye,
            children: [Z, Q]
        }), t[75] = ye, t[76] = Z, t[77] = Q, t[78] = $) : $ = t[78];
        let be;
        t[79] !== M || t[80] !== de || t[81] !== K || t[82] !== X || t[83] !== $ ? (be = (0, Y.jsxs)(`div`, {
            ref: M,
            onScroll: de,
            className: K,
            children: [X, $]
        }), t[79] = M, t[80] = de, t[81] = K, t[82] = X, t[83] = $, t[84] = be) : be = t[84];
        let xe;
        t[85] !== G || t[86] !== be ? (xe = (0, Y.jsx)(`div`, {
            className: G,
            children: be
        }), t[85] = G, t[86] = be, t[87] = xe) : xe = t[87];
        let Se;
        return t[88] !== L || t[89] !== W || t[90] !== xe ? (Se = (0, Y.jsxs)(ue, {
            className: L,
            children: [W, xe]
        }), t[88] = L, t[89] = W, t[90] = xe, t[91] = Se) : Se = t[91], Se
    }
}));
export {
    de as a, ue as i, fe as n, le as o, Q as r, U as s, Z as t
};
//# sourceMappingURL=9521ff6d-eheu436d75qx4573.js.map