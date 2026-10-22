import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jt as r,
    Lw as i,
    Rw as a,
    c7 as o,
    jt as s,
    l7 as c
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as l,
    Nn as u,
    Rn as d,
    Vn as f,
    wn as p,
    zn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CC as h,
    SC as g
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    r as _,
    t as v
} from "./ee72d6dc-df8ms5e0harr0ux3.js";
import {
    t as y
} from "./c7a90257-h8bu5i1psxpuvu4f.js";
import {
    i as b,
    t as ee
} from "./061ab7e7-c1r8lseddhaox2h6.js";
import {
    c as te,
    s as ne
} from "./0f2a693e-ixuu1upjhavxhvub.js";
import {
    n as re,
    r as x,
    t as ie
} from "./3fb45623-pdrwgy982nr0z8xj.js";
import {
    n as S,
    t as ae
} from "./d25f8a5b-fhwu3rtmko7xc2c4.js";
import {
    n as C,
    r as oe,
    t as se
} from "./2f949187-lgfjkv2sr8j8gygo.js";
var w, T, ce, E = e((() => {
        w = p(), a(), h(), d(), c(), T = l(), ce = e => {
            "use forget";
            let t = (0, w.c)(22),
                {
                    className: n,
                    isPrevDisabled: r,
                    isNextDisabled: a,
                    onPrevClick: s,
                    onNextClick: c
                } = e,
                l;
            t[0] === n ? l = t[1] : (l = o(`flex`, n), t[0] = n, t[1] = l);
            let d;
            t[2] !== r || t[3] !== s ? (d = () => {
                r || s()
            }, t[2] = r, t[3] = s, t[4] = d) : d = t[4];
            let f;
            t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, T.jsx)(i, {
                className: `icon rtl:rotate-180`
            }), t[5] = f) : f = t[5];
            let p;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, T.jsx)(`span`, {
                className: `sr-only`,
                children: (0, T.jsx)(u, {
                    id: `chatgpt.dots.carousel.button.previous`,
                    defaultMessage: `Previous`
                })
            }), t[6] = p) : p = t[6];
            let m;
            t[7] !== r || t[8] !== d ? (m = (0, T.jsxs)(`button`, {
                type: `button`,
                className: `interactive-button interactive-button-secondary flex size-11 items-center justify-center rounded-full`,
                "aria-disabled": r,
                onClick: d,
                children: [f, p]
            }), t[7] = r, t[8] = d, t[9] = m) : m = t[9];
            let h;
            t[10] !== a || t[11] !== c ? (h = () => {
                a || c()
            }, t[10] = a, t[11] = c, t[12] = h) : h = t[12];
            let _;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, T.jsx)(g, {
                className: `icon rtl:rotate-180`
            }), t[13] = _) : _ = t[13];
            let v;
            t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, T.jsx)(`span`, {
                className: `sr-only`,
                children: (0, T.jsx)(u, {
                    id: `chatgpt.dots.carousel.button.next`,
                    defaultMessage: `Next`
                })
            }), t[14] = v) : v = t[14];
            let y;
            t[15] !== a || t[16] !== h ? (y = (0, T.jsxs)(`button`, {
                type: `button`,
                className: `interactive-button interactive-button-secondary flex size-11 items-center justify-center rounded-full`,
                "aria-disabled": a,
                onClick: h,
                children: [_, v]
            }), t[15] = a, t[16] = h, t[17] = y) : y = t[17];
            let b;
            return t[18] !== l || t[19] !== m || t[20] !== y ? (b = (0, T.jsxs)(`div`, {
                className: l,
                children: [m, y]
            }), t[18] = l, t[19] = m, t[20] = y, t[21] = b) : b = t[21], b
        }
    })),
    D, O = e((() => {
        D = {
            card: `dots-use-case-card`,
            media: `dots-use-case-media`,
            caption: `dots-use-case-caption`,
            heading: `dots-use-case-heading`,
            description: `dots-use-case-description`,
            viewport: `dots-use-cases-viewport`
        }
    })),
    k = t({
        default: () => M
    });

function le(e) {
    return e.getBoundingClientRect()
}
var ue, A, j, M, N = e((() => {
    ue = p(), c(), te(), b(), E(), _(), x(), S(), O(), y(), A = n(f()), s(), d(), C(), j = l(), M = e => {
        "use forget";
        let t = (0, ue.c)(71),
            {
                id: n,
                data: i,
                media: a,
                embedded: s
            } = e,
            c = s !== void 0 && s,
            l = (0, A.useRef)(null),
            u = (0, A.useRef)(null),
            d = (0, A.useRef)(null),
            f = (0, A.useRef)(null),
            [p, h] = (0, A.useState)(!0),
            [g, _] = (0, A.useState)(!1),
            [y, b] = (0, A.useState)(0),
            {
                locale: te
            } = m(),
            x = /^(ar|fa|he|ur)(-|$)/.test(te) ? `rtl` : `ltr`,
            S = r(),
            C = i?.cards.length ?? 0,
            w;
        t[0] === i ? w = t[1] : (w = se(i), t[0] = i, t[1] = w);
        let T = w,
            E;
        t[2] !== x || t[3] !== S ? (E = e => {
            let t = l.current,
                n = t?.querySelectorAll(`:scope > .${D.card}`)?.[e];
            if (!t || !n) return;
            let r = t.getBoundingClientRect(),
                i = parseFloat(getComputedStyle(t).paddingInlineStart) || 0,
                a = n.getBoundingClientRect();
            t.scrollBy({
                left: x === `rtl` ? a.right - (r.right - i) : a.left - (r.left + i),
                behavior: S ? `instant` : `smooth`
            })
        }, t[2] = x, t[3] = S, t[4] = E) : E = t[4];
        let O = E,
            k;
        t[5] !== y || t[6] !== C || t[7] !== O ? (k = () => O((y + 1) % C), t[5] = y, t[6] = C, t[7] = O, t[8] = k) : k = t[8];
        let M = (0, A.useEffectEvent)(k),
            N;
        t[9] !== M || t[10] !== T || t[11] !== C || t[12] !== S ? (N = () => {
            let e = l.current,
                t = u.current;
            if (!(!e || !t || !T || S || C < 2)) return oe({
                viewport: e,
                region: t,
                delay: T,
                advance: M
            })
        }, t[9] = M, t[10] = T, t[11] = C, t[12] = S, t[13] = N) : N = t[13];
        let P;
        t[14] !== y || t[15] !== T || t[16] !== C || t[17] !== S ? (P = [y, T, S, C], t[14] = y, t[15] = T, t[16] = C, t[17] = S, t[18] = P) : P = t[18], (0, A.useEffect)(N, P);
        let F;
        t[19] === x ? F = t[20] : (F = () => {
            let e = l.current;
            if (!e) return;
            let t = Array.from(e.querySelectorAll(`:scope > .${D.card}`)),
                n = -1,
                r = 0,
                i = () => {
                    r = 0;
                    let i = e.getBoundingClientRect(),
                        a = getComputedStyle(e),
                        o = parseFloat(a.paddingInlineStart) || 0,
                        s = parseFloat(a.paddingInlineEnd) || 0,
                        c = x === `rtl` ? i.right - o : i.left + o,
                        l = x === `rtl` ? i.left + s : i.right - s,
                        u = t.map(le),
                        d = u[0],
                        f = u.at(-1);
                    if (!d || !f) return;
                    let p = x === `rtl` ? d.right <= c + 1 : d.left >= c - 1,
                        m = x === `rtl` ? f.left >= l - 1 : f.right <= l + 1;
                    h(p), _(m);
                    let g = m && !p ? t.length - 1 : 0,
                        v = 1 / 0;
                    if (!p && !m)
                        for (let [e, t] of u.entries()) {
                            let n = Math.abs((x === `rtl` ? t.right : t.left) - c);
                            n < v && (g = e, v = n)
                        }
                    g !== n && (n = g, b(g))
                },
                a = () => {
                    r ||= requestAnimationFrame(i)
                },
                o = new ResizeObserver(a);
            return o.observe(e), e.addEventListener(`scroll`, a, {
                passive: !0
            }), i(), () => {
                o.disconnect(), e.removeEventListener(`scroll`, a), cancelAnimationFrame(r)
            }
        }, t[19] = x, t[20] = F);
        let I;
        t[21] !== C || t[22] !== x ? (I = [C, x], t[21] = C, t[22] = x, t[23] = I) : I = t[23], (0, A.useEffect)(F, I);
        let L;
        t[24] !== x || t[25] !== S ? (L = e => {
            let t = l.current,
                n = d.current;
            if (!t || !n) return;
            let r = parseFloat(getComputedStyle(t).columnGap) || 0;
            t.scrollBy({
                left: (n.getBoundingClientRect().width + r) * (e ? 1 : -1) * (x === `rtl` ? -1 : 1),
                behavior: S ? `instant` : `smooth`
            })
        }, t[24] = x, t[25] = S, t[26] = L) : L = t[26];
        let R = L;
        if (!i?.cards.length) return null;
        let z;
        t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (z = o(`dots-use-cases-controls flex items-center justify-between gap-4`, ne), t[27] = z) : z = t[27];
        let B;
        t[28] === i.navigationLabel ? B = t[29] : (B = i.navigationLabel && (0, j.jsx)(`p`, {
            className: `dots-use-cases-label text-token-text-secondary`,
            children: i.navigationLabel
        }), t[28] = i.navigationLabel, t[29] = B);
        let V, H;
        t[30] === R ? (V = t[31], H = t[32]) : (V = () => R(!1), H = () => R(!0), t[30] = R, t[31] = V, t[32] = H);
        let U;
        t[33] !== g || t[34] !== p || t[35] !== V || t[36] !== H ? (U = (0, j.jsx)(ce, {
            className: `ms-auto gap-2`,
            isPrevDisabled: p,
            isNextDisabled: g,
            onPrevClick: V,
            onNextClick: H
        }), t[33] = g, t[34] = p, t[35] = V, t[36] = H, t[37] = U) : U = t[37];
        let W;
        t[38] !== B || t[39] !== U ? (W = (0, j.jsx)(ie, {
            as: `div`,
            children: (0, j.jsxs)(re, {
                className: z,
                children: [B, U]
            })
        }), t[38] = B, t[39] = U, t[40] = W) : W = t[40];
        let G;
        t[41] === Symbol.for(`react.memo_cache_sentinel`) ? (G = o(`no-scrollbar relative mt-6 flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain`, ne, D.viewport), t[41] = G) : G = t[41];
        let de = i.heading,
            K, q, J;
        t[42] === Symbol.for(`react.memo_cache_sentinel`) ? (K = e => {
            f.current = e.isPrimary && e.button === 0 ? {
                pointerId: e.pointerId,
                x: e.clientX,
                y: e.clientY,
                scrollLeft: e.currentTarget.scrollLeft,
                moved: !1
            } : null
        }, q = e => {
            let t = f.current;
            !t || t.pointerId !== e.pointerId || Math.hypot(e.clientX - t.x, e.clientY - t.y) > 6 && (t.moved = !0)
        }, J = () => {
            f.current && (f.current.moved = !0)
        }, t[42] = K, t[43] = q, t[44] = J) : (K = t[42], q = t[43], J = t[44]);
        let Y;
        t[45] !== y || t[46] !== O ? (Y = e => {
            let t = f.current;
            if (f.current = null, e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || !(e.target instanceof Element) || e.target.closest(`a, button, input, select, textarea, video, [role=button], [contenteditable=true]`)) return;
            let n = window.getSelection();
            if (n && !n.isCollapsed && e.currentTarget.contains(n.anchorNode) || e.detail !== 0 && (!t || t.moved || Math.hypot(e.clientX - t.x, e.clientY - t.y) > 6 || Math.abs(e.currentTarget.scrollLeft - t.scrollLeft) > 6)) return;
            let r = e.target.closest(`article.${D.card}`);
            if (r?.parentElement !== e.currentTarget) return;
            let i = Number(r.dataset.cardIndex);
            Math.abs(i - y) === 1 && O(i)
        }, t[45] = y, t[46] = O, t[47] = Y) : Y = t[47];
        let X;
        t[48] !== x || t[49] !== R ? (X = e => {
            e.target === e.currentTarget && (e.key === `ArrowRight` || e.key === `ArrowLeft`) && (e.preventDefault(), R(e.key === `ArrowRight` == (x === `ltr`)))
        }, t[48] = x, t[49] = R, t[50] = X) : X = t[50];
        let Z;
        t[51] !== y || t[52] !== i.cards || t[53] !== n || t[54] !== a ? (Z = i.cards.map((e, t) => {
            let r = e.mediaIndex === void 0 ? void 0 : a?.[e.mediaIndex];
            return (0, j.jsxs)(`article`, {
                ref: e => {
                    t === 0 && (d.current = e)
                },
                className: o(D.card, Math.abs(t - y) === 1 && `cursor-pointer`),
                "data-card-index": t,
                "data-active": t === y,
                "data-dots-autoplay-pause": !0,
                children: [(0, j.jsx)(`div`, {
                    className: D.media,
                    children: (r?.asset || r?.assetUrl || r?.videoEmbedUrl) && (0, j.jsx)(v, {
                        ...r,
                        className: `dots-use-case-artwork`,
                        ratio: void 0,
                        ratioMobile: void 0,
                        mediaClassName: `size-full object-cover`,
                        rounding: `none`
                    })
                }), (0, j.jsxs)(`div`, {
                    className: D.caption,
                    children: [(0, j.jsx)(`h3`, {
                        className: o(`dots-h4`, D.heading),
                        children: e.heading
                    }), e.description && (0, j.jsx)(`p`, {
                        className: o(`dots-body text-token-text-secondary mt-3`, D.description),
                        children: e.description
                    }), e.ctaLabel && e.ctaHref && (0, j.jsx)(`div`, {
                        className: `mt-6 flex md:mt-8`,
                        children: (0, j.jsx)(ee, {
                            href: e.ctaHref,
                            analyticsIdentifier: e.ctaAnalyticsIdentifier ?? `dots-${n??`use-cases`}-cta`,
                            variant: `primary-button`,
                            className: `border-token-border-default hover:bg-token-bg-secondary border bg-transparent`,
                            children: e.ctaLabel
                        })
                    })]
                })]
            }, t)
        }), t[51] = y, t[52] = i.cards, t[53] = n, t[54] = a, t[55] = Z) : Z = t[55];
        let Q;
        t[56] !== i.heading || t[57] !== x || t[58] !== Y || t[59] !== X || t[60] !== Z ? (Q = (0, j.jsx)(`div`, {
            ref: l,
            role: `group`,
            dir: x,
            className: G,
            "aria-label": de,
            tabIndex: 0,
            onPointerDownCapture: K,
            onPointerMoveCapture: q,
            onPointerCancelCapture: J,
            onClick: Y,
            onKeyDown: X,
            children: Z
        }), t[56] = i.heading, t[57] = x, t[58] = Y, t[59] = X, t[60] = Z, t[61] = Q) : Q = t[61];
        let fe;
        t[62] !== W || t[63] !== Q ? (fe = (0, j.jsxs)(`div`, {
            ref: u,
            className: `@container w-full`,
            children: [W, Q]
        }), t[62] = W, t[63] = Q, t[64] = fe) : fe = t[64];
        let pe = fe,
            $;
        return t[65] !== pe || t[66] !== i.anchor || t[67] !== i.description || t[68] !== i.heading || t[69] !== c ? ($ = c ? pe : (0, j.jsx)(ae, {
            id: i.anchor ?? `use-cases`,
            className: `dots-use-cases-section`,
            title: i.heading,
            subtitle: i.description,
            variant: `two-column`,
            children: pe
        }), t[65] = pe, t[66] = i.anchor, t[67] = i.description, t[68] = i.heading, t[69] = c, t[70] = $) : $ = t[70], $
    }
}));
export {
    N as n, k as r, M as t
};
//# sourceMappingURL=2290d7d7-mrax8mvhzwia4qew.js.map