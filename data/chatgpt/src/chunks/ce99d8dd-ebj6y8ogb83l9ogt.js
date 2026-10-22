import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Gt as r,
    Jt as i,
    cn as a,
    en as o,
    hn as s,
    jt as ee,
    l7 as te,
    nn as ne,
    u7 as c,
    vn as l
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as u,
    Vn as d,
    wn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    TC as p,
    wC as re
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    n as m,
    t as h
} from "./10f2d773-bfzf78do6zzhmrrx.js";
import {
    n as g,
    t as ie
} from "./f95c8da2-j5eoc75kz2pyhzbu.js";
import {
    n as _,
    t as v
} from "./b2c255f5-dgzm1bcta7422yc7.js";
import {
    t as y
} from "./c7a90257-h8bu5i1psxpuvu4f.js";
import {
    i as ae,
    t as oe
} from "./061ab7e7-ige3x7xs6mb0luar.js";
import {
    n as se,
    t as ce
} from "./b1b1bdb4-lyu2zmh0f484plig.js";
var le, ue, de, fe, pe, me, he, ge, _e, ve = e((() => {
        le = 1.207, ue = {
            delay: .558,
            duration: .509,
            ease: [.19045, .58992, 0, .93507]
        }, de = {
            delay: .085,
            duration: 1.0916,
            times: [0, .29286, 1],
            ease: [
                [0, 1, .68448, 1],
                [.26245, 0, .08511, 1]
            ]
        }, fe = {
            delay: .586,
            duration: .43,
            ease: [.25, .1, .25, 1]
        }, pe = {
            ...ue,
            ease: [.14019, .48002, .29395, .9993]
        }, me = {
            delay: .5435,
            duration: .6106,
            ease: [.31143, 0, .25, 1]
        }, he = `inset(0px calc(50% - 29px) calc(100% - 58px + var(--surface-menu-height, 0px) * 0) calc(50% - 29px) round 29px)`, ge = `inset(0px calc(0% - 0px) calc(0% - 0px + var(--surface-menu-height, 0px) * 1) calc(0% - 0px) round 29px)`, _e = `inset(0px calc(0% - 0px) calc(0% - 0px + var(--surface-menu-height, 0px) * 0) calc(0% - 0px) round 29px)`
    })),
    b, ye = e((() => {
        b = {
            brandHome: `dots-sub-nav-brandHome`,
            mobileTrigger: `dots-sub-nav-mobileTrigger`,
            chevron: `dots-sub-nav-chevron`,
            mobileMenu: `dots-sub-nav-mobileMenu`,
            mobileLink: `dots-sub-nav-mobileLink`,
            container: `dots-sub-nav-container`,
            nav: `dots-sub-nav-nav`,
            surface: `dots-sub-nav-surface`,
            content: `dots-sub-nav-content`,
            brand: `dots-sub-nav-brand`,
            link: `dots-sub-nav-link`,
            download: `dots-sub-nav-download`,
            avatar: `dots-sub-nav-avatar`,
            links: `dots-sub-nav-links`,
            downloadSurface: `dots-sub-nav-downloadSurface`,
            downloadLabel: `dots-sub-nav-downloadLabel`
        }
    }));

function be(e, t, n) {
    if (!n.getClientRects().length) {
        t.matches(`:popover-open`) && t.hidePopover();
        return
    }
    let r = e.getBoundingClientRect(),
        i = `${t.offsetHeight}px`,
        a = window.visualViewport,
        o = a ? a.offsetTop + a.height : window.innerHeight,
        s = {
            top: `${r.bottom}px`,
            left: `${r.left}px`,
            width: `${r.width}px`,
            maxHeight: `${Math.max(0,o-r.bottom-16)}px`
        };
    for (let e of [`top`, `left`, `width`, `maxHeight`]) t.style[e] !== s[e] && (t.style[e] = s[e]);
    e.style.getPropertyValue(`--mobile-menu-height`) !== i && e.style.setProperty(`--mobile-menu-height`, i)
}

function xe(e) {
    return `translateX(calc(${-50*(1-e)}cqw + ${29*(1-e)}px))`
}

function Se(e) {
    return e >= 1 || e <= 0 ? 0 : 32 * Math.sin(Math.PI * e)
}

function Ce(e) {
    return `inset(0px 0px 0px ${32-e}px round 999px)`
}

function we(e) {
    return `translateX(${-e/2}px)`
}
var Te, x, S, Ee, De, Oe, C = e((() => {
        Te = f(), ee(), x = n(d()), _(), p(), ae(), se(), ve(), ye(), y(), S = u(), Ee = a.create(ce), De = a.create(oe), Oe = e => {
            "use forget";
            let t = (0, Te.c)(139),
                {
                    id: n,
                    data: s,
                    reducedMotion: ee
                } = e,
                {
                    artwork: te
                } = (0, x.useContext)(v),
                c = i(),
                u = ee || c,
                d = l(),
                f = (0, x.useRef)(null),
                p = (0, x.useRef)(null),
                m = (0, x.useRef)(null),
                h = (0, x.useId)(),
                [g, ie] = (0, x.useState)(!1),
                [_, y] = (0, x.useState)(!1),
                ae, oe;
            t[0] === g ? (ae = t[1], oe = t[2]) : (ae = () => {
                let e = f.current,
                    t = p.current,
                    n = m.current;
                if (!e || !t || !n) return;
                let r, i = () => {
                        r === void 0 && (r = requestAnimationFrame(() => {
                            r = void 0, be(e, t, n)
                        }))
                    },
                    a = new ResizeObserver(i);
                a.observe(e), a.observe(t), window.addEventListener(`resize`, i);
                let o = window.visualViewport;
                return g && (o?.addEventListener(`resize`, i), o?.addEventListener(`scroll`, i)), i(), () => {
                    a.disconnect(), r !== void 0 && cancelAnimationFrame(r), window.removeEventListener(`resize`, i), o?.removeEventListener(`resize`, i), o?.removeEventListener(`scroll`, i)
                }
            }, oe = [g], t[0] = g, t[1] = ae, t[2] = oe), (0, x.useEffect)(ae, oe);
            let se, ve;
            t[3] === d ? (se = t[4], ve = t[5]) : (se = () => {
                !d && p.current?.matches(`:popover-open`) && p.current.hidePopover()
            }, ve = [d], t[3] = d, t[4] = se, t[5] = ve), (0, x.useEffect)(se, ve);
            let [ye, Oe] = (0, x.useState)(!1), C = ne(+!!u), ke = o(C, xe), Ae = o(C, Se), w = o(Ae, Ce), T = o(Ae, we), E, D;
            t[6] !== C || t[7] !== u ? (E = () => {
                if (u) {
                    C.set(1);
                    return
                }
                let e = r(C, 1, pe),
                    t = window.setTimeout(() => Oe(!0), le * 1e3);
                return () => {
                    e.stop(), window.clearTimeout(t)
                }
            }, D = [C, u], t[6] = C, t[7] = u, t[8] = E, t[9] = D) : (E = t[8], D = t[9]), (0, x.useEffect)(E, D);
            let O = (s.links.length - 1) / 2,
                k = Math.max(0, Math.floor(O)),
                A = Math.min(.08, .577 / (k + 2)),
                je;
            t[10] === u ? je = t[11] : (je = u ? {
                duration: .18
            } : fe, t[10] = u, t[11] = je);
            let j = je,
                Me = _ ? `instant` : void 0,
                Ne, Pe;
            t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (Pe = () => y(!0), Ne = () => y(!1), t[12] = Ne, t[13] = Pe) : (Ne = t[12], Pe = t[13]);
            let Fe = s.label,
                Ie = !ye && !u || !d,
                Le = u ? 0 : -180,
                M;
            t[14] === Le ? M = t[15] : (M = {
                opacity: 0,
                y: Le
            }, t[14] = Le, t[15] = M);
            let N;
            t[16] === u ? N = t[17] : (N = u ? 0 : [-180, 72, 0], t[16] = u, t[17] = N);
            let P;
            t[18] === N ? P = t[19] : (P = {
                opacity: 1,
                y: N
            }, t[18] = N, t[19] = P);
            let Re;
            t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (Re = {
                opacity: 0,
                transition: {
                    duration: .15
                }
            }, t[20] = Re) : Re = t[20];
            let ze = u ? .18 : .08,
                F;
            t[21] === ze ? F = t[22] : (F = {
                duration: ze
            }, t[21] = ze, t[22] = F);
            let I;
            t[23] === u ? I = t[24] : (I = u ? {
                duration: 0
            } : de, t[23] = u, t[24] = I);
            let Be;
            t[25] !== F || t[26] !== I ? (Be = {
                opacity: F,
                y: I
            }, t[25] = F, t[26] = I, t[27] = Be) : Be = t[27];
            let L;
            t[28] === u ? L = t[29] : (L = !u && {
                clipPath: he
            }, t[28] = u, t[29] = L);
            let Ve = g ? _e : ge,
                R;
            t[30] === Ve ? R = t[31] : (R = {
                clipPath: Ve
            }, t[30] = Ve, t[31] = R);
            let z;
            t[32] !== ye || t[33] !== _ || t[34] !== g || t[35] !== u ? (z = u || _ ? {
                duration: 0
            } : ye ? {
                duration: g ? .28 : .24,
                ease: [.25, 1, .5, 1]
            } : ue, t[32] = ye, t[33] = _, t[34] = g, t[35] = u, t[36] = z) : z = t[36];
            let B;
            t[37] !== L || t[38] !== R || t[39] !== z ? (B = (0, S.jsx)(a.div, {
                "aria-hidden": `true`,
                className: b.surface,
                initial: L,
                animate: R,
                transition: z
            }), t[37] = L, t[38] = R, t[39] = z, t[40] = B) : B = t[40];
            let V;
            t[41] === u ? V = t[42] : (V = !u && {
                transform: `translateX(calc((50cqw - 20px - var(--brand-padding-start, 8px)) * 1))`
            }, t[41] = u, t[42] = V);
            let He;
            t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (He = {
                transform: `translateX(calc((50cqw - 20px - var(--brand-padding-start, 8px)) * 0))`
            }, t[43] = He) : He = t[43];
            let H;
            t[44] === u ? H = t[45] : (H = u ? {
                duration: 0
            } : ue, t[44] = u, t[45] = H);
            let U;
            t[46] === u ? U = t[47] : (U = !u && {
                scale: 1.815
            }, t[46] = u, t[47] = U);
            let Ue;
            t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (Ue = {
                scale: 1
            }, t[48] = Ue) : Ue = t[48];
            let We = u ? 0 : .35,
                Ge;
            t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (Ge = [.22, 1, .36, 1], t[49] = Ge) : Ge = t[49];
            let W;
            t[50] === We ? W = t[51] : (W = {
                delay: .2,
                duration: We,
                ease: Ge
            }, t[50] = We, t[51] = W);
            let G;
            t[52] === te.navMark ? G = t[53] : (G = te.navMark && (0, S.jsx)(`img`, {
                src: te.navMark,
                alt: ``,
                className: `size-full object-contain dark:invert`
            }), t[52] = te.navMark, t[53] = G);
            let K;
            t[54] !== U || t[55] !== W || t[56] !== G ? (K = (0, S.jsx)(a.span, {
                className: `size-6 shrink-0`,
                "aria-hidden": !0,
                initial: U,
                animate: Ue,
                transition: W,
                children: G
            }), t[54] = U, t[55] = W, t[56] = G, t[57] = K) : K = t[57];
            let Ke, qe;
            t[58] === Symbol.for(`react.memo_cache_sentinel`) ? (Ke = {
                opacity: 0
            }, qe = {
                opacity: 1
            }, t[58] = Ke, t[59] = qe) : (Ke = t[58], qe = t[59]);
            let q;
            t[60] === j ? q = t[61] : (q = {
                opacity: j
            }, t[60] = j, t[61] = q);
            let Je;
            t[62] === Symbol.for(`react.memo_cache_sentinel`) ? (Je = (0, S.jsx)(re, {
                className: `${b.chevron} icon-sm`,
                "aria-hidden": !0
            }), t[62] = Je) : Je = t[62];
            let J;
            t[63] !== s.label || t[64] !== q ? (J = (0, S.jsxs)(a.span, {
                className: b.avatar,
                initial: Ke,
                animate: qe,
                transition: q,
                children: [s.label, Je]
            }), t[63] = s.label, t[64] = q, t[65] = J) : J = t[65];
            let Y;
            t[66] !== s.homeHref || t[67] !== s.label ? (Y = (0, S.jsx)(ce, {
                className: `${b.brandHome} interactive-button`,
                href: s.homeHref,
                ariaLabel: s.label
            }), t[66] = s.homeHref, t[67] = s.label, t[68] = Y) : Y = t[68];
            let Ye = s.menuLabel ?? s.label,
                X;
            t[69] !== h || t[70] !== g || t[71] !== Ye ? (X = (0, S.jsx)(`button`, {
                ref: m,
                className: `${b.mobileTrigger} interactive-button`,
                type: `button`,
                "aria-label": Ye,
                "aria-expanded": g,
                "aria-controls": h,
                popoverTarget: h
            }), t[69] = h, t[70] = g, t[71] = Ye, t[72] = X) : X = t[72];
            let Z;
            t[73] !== V || t[74] !== H || t[75] !== K || t[76] !== J || t[77] !== Y || t[78] !== X ? (Z = (0, S.jsxs)(a.div, {
                className: b.brand,
                initial: V,
                animate: He,
                transition: H,
                children: [K, J, Y, X]
            }), t[73] = V, t[74] = H, t[75] = K, t[76] = J, t[77] = Y, t[78] = X, t[79] = Z) : Z = t[79];
            let Xe;
            if (t[80] !== s.links || t[81] !== j || t[82] !== O || t[83] !== A || t[84] !== k || t[85] !== u) {
                let e;
                t[87] !== j || t[88] !== O || t[89] !== A || t[90] !== k || t[91] !== u ? (e = (e, t) => (0, S.jsx)(Ee, {
                    className: b.link,
                    href: e.href,
                    initial: {
                        opacity: 0,
                        x: u ? 0 : (O - t) * 20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        opacity: u ? j : {
                            ease: [.25, .1, .25, 1],
                            delay: .63 + Math.floor(Math.abs(t - O)) * A,
                            duration: .577 - k * A
                        },
                        x: u ? {
                            duration: 0
                        } : me
                    },
                    children: e.label
                }, e.href), t[87] = j, t[88] = O, t[89] = A, t[90] = k, t[91] = u, t[92] = e) : e = t[92], Xe = s.links.map(e), t[80] = s.links, t[81] = j, t[82] = O, t[83] = A, t[84] = k, t[85] = u, t[86] = Xe
            } else Xe = t[86];
            let Ze;
            t[93] === Xe ? Ze = t[94] : (Ze = (0, S.jsx)(`div`, {
                className: b.links,
                children: Xe
            }), t[93] = Xe, t[94] = Ze);
            let Qe = `dots-${n??`subnav`}-navigation-cta`,
                $e;
            t[95] === ke ? $e = t[96] : ($e = {
                transform: ke
            }, t[95] = ke, t[96] = $e);
            let et, tt;
            t[97] === Symbol.for(`react.memo_cache_sentinel`) ? (et = {
                opacity: 0
            }, tt = {
                opacity: 1
            }, t[97] = et, t[98] = tt) : (et = t[97], tt = t[98]);
            let nt;
            t[99] === j ? nt = t[100] : (nt = {
                opacity: j
            }, t[99] = j, t[100] = nt);
            let Q;
            t[101] === w ? Q = t[102] : (Q = (0, S.jsx)(a.span, {
                "aria-hidden": `true`,
                className: b.downloadSurface,
                style: {
                    clipPath: w
                }
            }), t[101] = w, t[102] = Q);
            let rt;
            t[103] === T ? rt = t[104] : (rt = {
                transform: T
            }, t[103] = T, t[104] = rt);
            let it;
            t[105] !== s.ctaLabel || t[106] !== rt ? (it = (0, S.jsx)(a.span, {
                className: b.downloadLabel,
                style: rt,
                children: s.ctaLabel
            }), t[105] = s.ctaLabel, t[106] = rt, t[107] = it) : it = t[107];
            let at;
            t[108] !== s.ctaHref || t[109] !== Qe || t[110] !== $e || t[111] !== nt || t[112] !== Q || t[113] !== it ? (at = (0, S.jsxs)(De, {
                className: b.download,
                analyticsIdentifier: Qe,
                href: s.ctaHref,
                style: $e,
                initial: et,
                animate: tt,
                transition: nt,
                children: [Q, it]
            }), t[108] = s.ctaHref, t[109] = Qe, t[110] = $e, t[111] = nt, t[112] = Q, t[113] = it, t[114] = at) : at = t[114];
            let ot;
            t[115] !== Z || t[116] !== Ze || t[117] !== at ? (ot = (0, S.jsxs)(`div`, {
                className: b.content,
                children: [Z, Ze, at]
            }), t[115] = Z, t[116] = Ze, t[117] = at, t[118] = ot) : ot = t[118];
            let st = !g,
                ct;
            t[119] === Symbol.for(`react.memo_cache_sentinel`) ? (ct = e => {
                e.newState === `open` && f.current && p.current && m.current && be(f.current, p.current, m.current), ie(e.newState === `open`)
            }, t[119] = ct) : ct = t[119];
            let lt;
            t[120] === s.links ? lt = t[121] : (lt = s.links.map(e => (0, S.jsx)(ce, {
                className: `${b.mobileLink} interactive-button`,
                href: e.href,
                onClick: () => p.current?.hidePopover(),
                children: e.label
            }, e.href)), t[120] = s.links, t[121] = lt);
            let ut;
            t[122] !== h || t[123] !== st || t[124] !== lt ? (ut = (0, S.jsx)(`div`, {
                ref: p,
                id: h,
                popover: `auto`,
                inert: st,
                className: b.mobileMenu,
                onBeforeToggle: ct,
                children: lt
            }), t[122] = h, t[123] = st, t[124] = lt, t[125] = ut) : ut = t[125];
            let $;
            t[126] !== s.label || t[127] !== Ie || t[128] !== M || t[129] !== P || t[130] !== Be || t[131] !== B || t[132] !== ot || t[133] !== ut ? ($ = (0, S.jsxs)(a.nav, {
                "aria-label": Fe,
                className: b.nav,
                inert: Ie,
                initial: M,
                animate: P,
                exit: Re,
                transition: Be,
                children: [B, ot, ut]
            }), t[126] = s.label, t[127] = Ie, t[128] = M, t[129] = P, t[130] = Be, t[131] = B, t[132] = ot, t[133] = ut, t[134] = $) : $ = t[134];
            let dt;
            return t[135] !== g || t[136] !== $ || t[137] !== Me ? (dt = (0, S.jsx)(`div`, {
                ref: f,
                className: b.container,
                "data-menu-open": g,
                "data-menu-motion": Me,
                onKeyDownCapture: Pe,
                onPointerDownCapture: Ne,
                children: $
            }), t[135] = g, t[136] = $, t[137] = Me, t[138] = dt) : dt = t[138], dt
        }
    })),
    ke = t({
        default: () => D
    }),
    Ae, w, T, E, D, O = e((() => {
        Ae = f(), c(), ee(), w = n(d()), g(), m(), C(), T = u(), E = e => {
            "use forget";
            let t = (0, Ae.c)(19),
                {
                    id: n,
                    data: r,
                    reducedMotion: i
                } = e,
                [a, o] = (0, w.useState)(!1),
                ee = (0, w.useRef)(null),
                {
                    isNavigationMobileOpen: ne
                } = (0, w.useContext)(h),
                c = a && !ne,
                {
                    setReplaced: l
                } = (0, w.useContext)(ie),
                u, d;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = () => {
                let e = ee.current;
                if (!e) return;
                let t = new IntersectionObserver(e => {
                    let [t] = e;
                    return o(t.boundingClientRect.bottom <= 0)
                });
                return t.observe(e), () => t.disconnect()
            }, d = [], t[0] = u, t[1] = d) : (u = t[0], d = t[1]), (0, w.useEffect)(u, d);
            let f, p;
            t[2] !== l || t[3] !== c ? (f = () => (l(c), () => l(!1)), p = [c, l], t[2] = l, t[3] = c, t[4] = f, t[5] = p) : (f = t[4], p = t[5]), (0, w.useEffect)(f, p);
            let re = Math.max(0, r.revealAfter ?? 160),
                m;
            t[6] === re ? m = t[7] : (m = (0, T.jsx)(`span`, {
                ref: ee,
                "aria-hidden": `true`,
                className: `pointer-events-none absolute size-px`,
                style: {
                    top: re
                }
            }), t[6] = re, t[7] = m);
            let g;
            t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (g = te(`pointer-events-none fixed inset-x-0 top-2 mx-auto w-[calc(100%-32px)] max-w-[727px]`, `z-50`), t[8] = g) : g = t[8];
            let _;
            t[9] !== r || t[10] !== n || t[11] !== i || t[12] !== c ? (_ = c && (0, T.jsx)(Oe, {
                id: n,
                data: r,
                reducedMotion: i
            }, `dots-navigation`), t[9] = r, t[10] = n, t[11] = i, t[12] = c, t[13] = _) : _ = t[13];
            let v;
            t[14] === _ ? v = t[15] : (v = (0, T.jsx)(`div`, {
                className: g,
                children: (0, T.jsx)(s, {
                    children: _
                })
            }), t[14] = _, t[15] = v);
            let y;
            return t[16] !== m || t[17] !== v ? (y = (0, T.jsxs)(`div`, {
                className: `relative h-0`,
                "data-dots-subnav": !0,
                children: [m, v]
            }), t[16] = m, t[17] = v, t[18] = y) : y = t[18], y
        }, D = e => {
            "use forget";
            let t = (0, Ae.c)(4),
                {
                    id: n,
                    data: r,
                    reducedMotion: i
                } = e,
                a;
            return t[0] !== r || t[1] !== n || t[2] !== i ? (a = r?.label ? (0, T.jsx)(E, {
                id: n,
                data: r,
                reducedMotion: i
            }) : null, t[0] = r, t[1] = n, t[2] = i, t[3] = a) : a = t[3], a
        }
    }));
export {
    O as n, ke as r, D as t
};
//# sourceMappingURL=ce99d8dd-ebj6y8ogb83l9ogt.js.map