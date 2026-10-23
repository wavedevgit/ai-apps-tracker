import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jt as r,
    K5 as i,
    Lw as a,
    Rw as o,
    jt as s,
    q5 as c
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as l,
    Nn as u,
    Rn as d,
    Vn as f,
    wn as p,
    zn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    bC as ee,
    xC as h
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    r as g,
    t as _
} from "./ee72d6dc-lrvejwb3ptu5oyu2.js";
import {
    t as v
} from "./c7a90257-h8bu5i1psxpuvu4f.js";
import {
    i as y,
    t as te
} from "./061ab7e7-hs26n09fnveall89.js";
import {
    c as ne,
    s as re
} from "./0f2a693e-ixuu1upjhavxhvub.js";
import {
    n as ie,
    r as b,
    t as ae
} from "./3fb45623-m3512jknvdhcxezi.js";
import {
    n as x,
    t as oe
} from "./d25f8a5b-oqbndra2wbq4vim1.js";
import {
    n as S,
    r as se,
    t as ce
} from "./2f949187-lgfjkv2sr8j8gygo.js";
var C, w, le, T = e((() => {
        C = p(), o(), h(), d(), c(), w = l(), le = e => {
            "use forget";
            let t = (0, C.c)(22),
                {
                    className: n,
                    isPrevDisabled: r,
                    isNextDisabled: o,
                    onPrevClick: s,
                    onNextClick: c
                } = e,
                l;
            t[0] === n ? l = t[1] : (l = i(`flex`, n), t[0] = n, t[1] = l);
            let d;
            t[2] !== r || t[3] !== s ? (d = () => {
                r || s()
            }, t[2] = r, t[3] = s, t[4] = d) : d = t[4];
            let f;
            t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, w.jsx)(a, {
                className: `icon rtl:rotate-180`
            }), t[5] = f) : f = t[5];
            let p;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, w.jsx)(`span`, {
                className: `sr-only`,
                children: (0, w.jsx)(u, {
                    id: `chatgpt.dots.carousel.button.previous`,
                    defaultMessage: `Previous`
                })
            }), t[6] = p) : p = t[6];
            let m;
            t[7] !== r || t[8] !== d ? (m = (0, w.jsxs)(`button`, {
                type: `button`,
                className: `interactive-button interactive-button-secondary flex size-11 items-center justify-center rounded-full`,
                "aria-disabled": r,
                onClick: d,
                children: [f, p]
            }), t[7] = r, t[8] = d, t[9] = m) : m = t[9];
            let h;
            t[10] !== o || t[11] !== c ? (h = () => {
                o || c()
            }, t[10] = o, t[11] = c, t[12] = h) : h = t[12];
            let g;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, w.jsx)(ee, {
                className: `icon rtl:rotate-180`
            }), t[13] = g) : g = t[13];
            let _;
            t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, w.jsx)(`span`, {
                className: `sr-only`,
                children: (0, w.jsx)(u, {
                    id: `chatgpt.dots.carousel.button.next`,
                    defaultMessage: `Next`
                })
            }), t[14] = _) : _ = t[14];
            let v;
            t[15] !== o || t[16] !== h ? (v = (0, w.jsxs)(`button`, {
                type: `button`,
                className: `interactive-button interactive-button-secondary flex size-11 items-center justify-center rounded-full`,
                "aria-disabled": o,
                onClick: h,
                children: [g, _]
            }), t[15] = o, t[16] = h, t[17] = v) : v = t[17];
            let y;
            return t[18] !== l || t[19] !== m || t[20] !== v ? (y = (0, w.jsxs)(`div`, {
                className: l,
                children: [m, v]
            }), t[18] = l, t[19] = m, t[20] = v, t[21] = y) : y = t[21], y
        }
    })),
    E, D = e((() => {
        E = {
            card: `dots-use-case-card`,
            media: `dots-use-case-media`,
            caption: `dots-use-case-caption`,
            heading: `dots-use-case-heading`,
            description: `dots-use-case-description`,
            viewport: `dots-use-cases-viewport`
        }
    })),
    O = t({
        default: () => j
    });

function ue(e) {
    return e.getBoundingClientRect()
}
var de, k, A, j, M = e((() => {
    de = p(), c(), ne(), y(), T(), g(), b(), x(), D(), v(), k = n(f()), s(), d(), S(), A = l(), j = e => {
        "use forget";
        let t = (0, de.c)(71),
            {
                id: n,
                data: a,
                media: o,
                embedded: s
            } = e,
            c = s !== void 0 && s,
            l = (0, k.useRef)(null),
            u = (0, k.useRef)(null),
            d = (0, k.useRef)(null),
            f = (0, k.useRef)(null),
            [p, ee] = (0, k.useState)(!0),
            [h, g] = (0, k.useState)(!1),
            [v, y] = (0, k.useState)(0),
            {
                locale: ne
            } = m(),
            b = /^(ar|fa|he|ur)(-|$)/.test(ne) ? `rtl` : `ltr`,
            x = r(),
            S = a?.cards.length ?? 0,
            C;
        t[0] === a ? C = t[1] : (C = ce(a), t[0] = a, t[1] = C);
        let w = C,
            T;
        t[2] !== b || t[3] !== x ? (T = e => {
            let t = l.current,
                n = t?.querySelectorAll(`:scope > .${E.card}`)?.[e];
            if (!t || !n) return;
            let r = t.getBoundingClientRect(),
                i = parseFloat(getComputedStyle(t).paddingInlineStart) || 0,
                a = n.getBoundingClientRect();
            t.scrollBy({
                left: b === `rtl` ? a.right - (r.right - i) : a.left - (r.left + i),
                behavior: x ? `instant` : `smooth`
            })
        }, t[2] = b, t[3] = x, t[4] = T) : T = t[4];
        let D = T,
            O;
        t[5] !== v || t[6] !== S || t[7] !== D ? (O = () => D((v + 1) % S), t[5] = v, t[6] = S, t[7] = D, t[8] = O) : O = t[8];
        let j = (0, k.useEffectEvent)(O),
            M;
        t[9] !== j || t[10] !== w || t[11] !== S || t[12] !== x ? (M = () => {
            let e = l.current,
                t = u.current;
            if (!(!e || !t || !w || x || S < 2)) return se({
                viewport: e,
                region: t,
                delay: w,
                advance: j
            })
        }, t[9] = j, t[10] = w, t[11] = S, t[12] = x, t[13] = M) : M = t[13];
        let N;
        t[14] !== v || t[15] !== w || t[16] !== S || t[17] !== x ? (N = [v, w, x, S], t[14] = v, t[15] = w, t[16] = S, t[17] = x, t[18] = N) : N = t[18], (0, k.useEffect)(M, N);
        let P;
        t[19] === b ? P = t[20] : (P = () => {
            let e = l.current;
            if (!e) return;
            let t = Array.from(e.querySelectorAll(`:scope > .${E.card}`)),
                n = -1,
                r = 0,
                i = () => {
                    r = 0;
                    let i = e.getBoundingClientRect(),
                        a = getComputedStyle(e),
                        o = parseFloat(a.paddingInlineStart) || 0,
                        s = parseFloat(a.paddingInlineEnd) || 0,
                        c = b === `rtl` ? i.right - o : i.left + o,
                        l = b === `rtl` ? i.left + s : i.right - s,
                        u = t.map(ue),
                        d = u[0],
                        f = u.at(-1);
                    if (!d || !f) return;
                    let p = b === `rtl` ? d.right <= c + 1 : d.left >= c - 1,
                        m = b === `rtl` ? f.left >= l - 1 : f.right <= l + 1;
                    ee(p), g(m);
                    let h = m && !p ? t.length - 1 : 0,
                        _ = 1 / 0;
                    if (!p && !m)
                        for (let [e, t] of u.entries()) {
                            let n = Math.abs((b === `rtl` ? t.right : t.left) - c);
                            n < _ && (h = e, _ = n)
                        }
                    h !== n && (n = h, y(h))
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
        }, t[19] = b, t[20] = P);
        let F;
        t[21] !== S || t[22] !== b ? (F = [S, b], t[21] = S, t[22] = b, t[23] = F) : F = t[23], (0, k.useEffect)(P, F);
        let I;
        t[24] !== b || t[25] !== x ? (I = e => {
            let t = l.current,
                n = d.current;
            if (!t || !n) return;
            let r = parseFloat(getComputedStyle(t).columnGap) || 0;
            t.scrollBy({
                left: (n.getBoundingClientRect().width + r) * (e ? 1 : -1) * (b === `rtl` ? -1 : 1),
                behavior: x ? `instant` : `smooth`
            })
        }, t[24] = b, t[25] = x, t[26] = I) : I = t[26];
        let L = I;
        if (!a?.cards.length) return null;
        let R;
        t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (R = i(`dots-use-cases-controls flex items-center justify-between gap-4`, re), t[27] = R) : R = t[27];
        let z;
        t[28] === a.navigationLabel ? z = t[29] : (z = a.navigationLabel && (0, A.jsx)(`p`, {
            className: `dots-use-cases-label text-token-text-secondary`,
            children: a.navigationLabel
        }), t[28] = a.navigationLabel, t[29] = z);
        let B, V;
        t[30] === L ? (B = t[31], V = t[32]) : (B = () => L(!1), V = () => L(!0), t[30] = L, t[31] = B, t[32] = V);
        let H;
        t[33] !== h || t[34] !== p || t[35] !== B || t[36] !== V ? (H = (0, A.jsx)(le, {
            className: `ms-auto gap-2`,
            isPrevDisabled: p,
            isNextDisabled: h,
            onPrevClick: B,
            onNextClick: V
        }), t[33] = h, t[34] = p, t[35] = B, t[36] = V, t[37] = H) : H = t[37];
        let U;
        t[38] !== z || t[39] !== H ? (U = (0, A.jsx)(ae, {
            as: `div`,
            children: (0, A.jsxs)(ie, {
                className: R,
                children: [z, H]
            })
        }), t[38] = z, t[39] = H, t[40] = U) : U = t[40];
        let W;
        t[41] === Symbol.for(`react.memo_cache_sentinel`) ? (W = i(`no-scrollbar relative mt-6 flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain`, re, E.viewport), t[41] = W) : W = t[41];
        let fe = a.heading,
            G, K, q;
        t[42] === Symbol.for(`react.memo_cache_sentinel`) ? (G = e => {
            f.current = e.isPrimary && e.button === 0 ? {
                pointerId: e.pointerId,
                x: e.clientX,
                y: e.clientY,
                scrollLeft: e.currentTarget.scrollLeft,
                moved: !1
            } : null
        }, K = e => {
            let t = f.current;
            !t || t.pointerId !== e.pointerId || Math.hypot(e.clientX - t.x, e.clientY - t.y) > 6 && (t.moved = !0)
        }, q = () => {
            f.current && (f.current.moved = !0)
        }, t[42] = G, t[43] = K, t[44] = q) : (G = t[42], K = t[43], q = t[44]);
        let J;
        t[45] !== v || t[46] !== D ? (J = e => {
            let t = f.current;
            if (f.current = null, e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || !(e.target instanceof Element) || e.target.closest(`a, button, input, select, textarea, video, [role=button], [contenteditable=true]`)) return;
            let n = window.getSelection();
            if (n && !n.isCollapsed && e.currentTarget.contains(n.anchorNode) || e.detail !== 0 && (!t || t.moved || Math.hypot(e.clientX - t.x, e.clientY - t.y) > 6 || Math.abs(e.currentTarget.scrollLeft - t.scrollLeft) > 6)) return;
            let r = e.target.closest(`article.${E.card}`);
            if (r?.parentElement !== e.currentTarget) return;
            let i = Number(r.dataset.cardIndex);
            Math.abs(i - v) === 1 && D(i)
        }, t[45] = v, t[46] = D, t[47] = J) : J = t[47];
        let Y;
        t[48] !== b || t[49] !== L ? (Y = e => {
            e.target === e.currentTarget && (e.key === `ArrowRight` || e.key === `ArrowLeft`) && (e.preventDefault(), L(e.key === `ArrowRight` == (b === `ltr`)))
        }, t[48] = b, t[49] = L, t[50] = Y) : Y = t[50];
        let X;
        t[51] !== v || t[52] !== a.cards || t[53] !== n || t[54] !== o ? (X = a.cards.map((e, t) => {
            let r = e.mediaIndex === void 0 ? void 0 : o?.[e.mediaIndex];
            return (0, A.jsxs)(`article`, {
                ref: e => {
                    t === 0 && (d.current = e)
                },
                className: i(E.card, Math.abs(t - v) === 1 && `cursor-pointer`),
                "data-card-index": t,
                "data-active": t === v,
                "data-dots-autoplay-pause": !0,
                children: [(0, A.jsx)(`div`, {
                    className: E.media,
                    children: (r?.asset || r?.assetUrl || r?.videoEmbedUrl) && (0, A.jsx)(_, {
                        ...r,
                        className: `dots-use-case-artwork`,
                        ratio: void 0,
                        ratioMobile: void 0,
                        mediaClassName: `size-full object-cover`,
                        rounding: `none`
                    })
                }), (0, A.jsxs)(`div`, {
                    className: E.caption,
                    children: [(0, A.jsx)(`h3`, {
                        className: i(`dots-h4`, E.heading),
                        children: e.heading
                    }), e.description && (0, A.jsx)(`p`, {
                        className: i(`dots-body text-token-text-secondary mt-3`, E.description),
                        children: e.description
                    }), e.ctaLabel && e.ctaHref && (0, A.jsx)(`div`, {
                        className: `mt-6 flex md:mt-8`,
                        children: (0, A.jsx)(te, {
                            href: e.ctaHref,
                            analyticsIdentifier: e.ctaAnalyticsIdentifier ?? `dots-${n??`use-cases`}-cta`,
                            variant: `primary-button`,
                            className: `border-token-border-default hover:bg-token-bg-secondary border bg-transparent`,
                            children: e.ctaLabel
                        })
                    })]
                })]
            }, t)
        }), t[51] = v, t[52] = a.cards, t[53] = n, t[54] = o, t[55] = X) : X = t[55];
        let Z;
        t[56] !== a.heading || t[57] !== b || t[58] !== J || t[59] !== Y || t[60] !== X ? (Z = (0, A.jsx)(`div`, {
            ref: l,
            role: `group`,
            dir: b,
            className: W,
            "aria-label": fe,
            tabIndex: 0,
            onPointerDownCapture: G,
            onPointerMoveCapture: K,
            onPointerCancelCapture: q,
            onClick: J,
            onKeyDown: Y,
            children: X
        }), t[56] = a.heading, t[57] = b, t[58] = J, t[59] = Y, t[60] = X, t[61] = Z) : Z = t[61];
        let Q;
        t[62] !== U || t[63] !== Z ? (Q = (0, A.jsxs)(`div`, {
            ref: u,
            className: `@container w-full`,
            children: [U, Z]
        }), t[62] = U, t[63] = Z, t[64] = Q) : Q = t[64];
        let $ = Q,
            pe;
        return t[65] !== $ || t[66] !== a.anchor || t[67] !== a.description || t[68] !== a.heading || t[69] !== c ? (pe = c ? $ : (0, A.jsx)(oe, {
            id: a.anchor ?? `use-cases`,
            className: `dots-use-cases-section`,
            title: a.heading,
            subtitle: a.description,
            variant: `two-column`,
            children: $
        }), t[65] = $, t[66] = a.anchor, t[67] = a.description, t[68] = a.heading, t[69] = c, t[70] = pe) : pe = t[70], pe
    }
}));
export {
    M as n, O as r, j as t
};
//# sourceMappingURL=2290d7d7-h7nenoe971gxi7f7.js.map