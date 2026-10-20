const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d7906bef-kig9g8xmh4hnu5gd.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/b2c255f5-dgzm1bcta7422yc7.js", "assets/3a6eb079-hjakmv42muhkqjzj.js", "assets/9e9d0eec-j24gxg6gi9duoed8.js", "assets/ea7792a2-hplb1nd79ppn7q2q.js", "assets/c3104c13-celq2mcekzljf1n9.js", "assets/b093033a-ckl04stpftr36j1g.js", "assets/7e5e046a-g9x9bmdo3xbp5kep.js", "assets/bcae0416-m5746l5rsjcs0jyy.js", "assets/c2675c8c-ejvs9hq3rwjwsbcv.js", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css", "assets/82782bc9-fcii2id0x6lspwtj.js", "assets/8b34dbc2-dtawqv9t1aqckqj4.js", "assets/global-modals-lv5n3ujm.css", "assets/c00ae0a6-fhisqr460405bcnh.js", "assets/99299f16-hhl13doq3jwhvc5a.js", "assets/c871dc1d-lpy7e3u6bxclkcy0.js", "assets/27c30153-iytzq9sk8nmu8m68.js", "assets/8f909c21-jqvb62ory59pv8q3.js", "assets/21c2b846-cdkocf3mqrq2hfz6.js", "assets/0293dbc0-ejy0st8w9anyaion.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    EN as r,
    FH as i,
    Lt as a,
    MH as o,
    TN as s,
    X5 as c,
    Y5 as l,
    bN as u,
    cn as d,
    en as f,
    in as p,
    jt as m,
    wN as h
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as g,
    Kt as _,
    Vn as v,
    cn as y,
    ln as b,
    wn as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as S,
    t as C
} from "./b2c255f5-dgzm1bcta7422yc7.js";
import {
    i as w,
    r as T
} from "./3a6eb079-hjakmv42muhkqjzj.js";
import {
    n as E,
    t as ee
} from "./9e9d0eec-j24gxg6gi9duoed8.js";
import {
    r as D,
    t as te
} from "./ea7792a2-hplb1nd79ppn7q2q.js";
import {
    n as ne,
    t as re
} from "./9e38ec96-lf9tyby1b7iurr0s.js";
import {
    i as O,
    n as ie,
    r as ae,
    t as oe
} from "./061ab7e7-i5t149fl4lc08jca.js";
import {
    n as k,
    t as A
} from "./b1b1bdb4-o705gxhupdiaku34.js";
import {
    n as j,
    t as se
} from "./8b0ac3b9-cloiidc50t0ytyvq.js";
import {
    n as M,
    t as ce
} from "./293b9207-ouwnijh1ojvad62x.js";
var le = e((() => {})),
    ue = e((() => {})),
    N, de = e((() => {
        ue(), N = `/cdn/assets/hero-intro-cddbuni9.css`
    }));

function P(e) {
    return e instanceof CSSAnimation && e.animationName === `dots-hero-intro-clock`
}
var fe, F, pe, I, me, L, he = e((() => {
    fe = x(), F = n(v()), pe = n(_()), r(), u(), S(), le(), de(), I = g(), me = `(prefers-reduced-motion: no-preference)`, L = e => {
        "use forget";
        let t = (0, fe.c)(28),
            {
                src: n,
                srcDark: r,
                durationMs: i,
                poster: a,
                onComplete: o
            } = e,
            {
                posters: c,
                artwork: l
            } = (0, F.useContext)(C),
            u = a || c.O || l.oLogo,
            d = (0, F.useRef)(null),
            f = h(),
            p = (0, F.useContext)(s),
            m = (0, F.useRef)(!1),
            [g, _] = (0, F.useState)(!1);
        for (let e of r ? [n, r] : [n])(0, pe.preload)(e, {
            as: `image`,
            fetchPriority: `high`,
            media: me
        });
        let v;
        t[0] !== p || t[1] !== i || t[2] !== g || t[3] !== o || t[4] !== f || t[5] !== r ? (v = () => {
            let e = d.current?.closest(`.light, .dark`),
                t = e ? e.classList.contains(`dark`) : f === `dark` || !f && p,
                n = r && t ? `dark` : `light`,
                a = d.current?.querySelector(`picture[data-theme="${n}"]`),
                s = a?.querySelector(`img`);
            if (!s || !a) return;
            let c = window.matchMedia(me),
                l, u = e => {
                    let t = e === void 0 ? performance.now() : e;
                    l !== void 0 && clearTimeout(l), clearTimeout(b), !m.current && (m.current = !0, o(t))
                },
                h = () => {
                    if (m.current) return;
                    if (clearTimeout(b), !c.matches || g) {
                        u();
                        return
                    }
                    l !== void 0 && clearTimeout(l);
                    let e = a.getAnimations().find(P),
                        t = performance.now(),
                        n = document.timeline.currentTime,
                        r = typeof e?.startTime == `number` && typeof n == `number` ? Math.max(0, n - e.startTime) : typeof e?.currentTime == `number` ? e.currentTime : 0,
                        o = performance.getEntriesByName(s.currentSrc),
                        d = o[o.length - 1],
                        f = d instanceof PerformanceResourceTiming ? Math.max(0, t - d.responseEnd) : 0,
                        p = t + i - Math.min(r, f);
                    l = setTimeout(() => u(p), Math.max(0, p - t))
                },
                v = () => {
                    m.current || (_(!0), u())
                },
                y = () => {
                    c.matches || u()
                };
            s.addEventListener(`load`, h), s.addEventListener(`error`, v), c.addEventListener(`change`, y);
            let b = setTimeout(v, 15e3);
            return !c.matches || g ? u() : s.complete && (s.naturalWidth > 0 ? h() : v()), () => {
                l !== void 0 && clearTimeout(l), clearTimeout(b), s.removeEventListener(`load`, h), s.removeEventListener(`error`, v), c.removeEventListener(`change`, y)
            }
        }, t[0] = p, t[1] = i, t[2] = g, t[3] = o, t[4] = f, t[5] = r, t[6] = v) : v = t[6];
        let y;
        t[7] !== p || t[8] !== i || t[9] !== g || t[10] !== o || t[11] !== f || t[12] !== n || t[13] !== r ? (y = [g, o, i, n, r, f, p], t[7] = p, t[8] = i, t[9] = g, t[10] = o, t[11] = f, t[12] = n, t[13] = r, t[14] = y) : y = t[14], (0, F.useEffect)(v, y);
        let b;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, I.jsx)(`link`, {
            rel: `stylesheet`,
            href: N,
            precedence: `default`
        }), t[15] = b) : b = t[15];
        let x = !!r || void 0,
            S;
        t[16] === r ? S = t[17] : (S = r ? [`light`, `dark`] : [`light`], t[16] = r, t[17] = S);
        let w;
        t[18] !== i || t[19] !== g || t[20] !== n || t[21] !== r || t[22] !== u || t[23] !== S ? (w = S.map(e => (0, I.jsxs)(`picture`, {
            "data-theme": e,
            className: `dots-hero-intro`,
            "data-static": g || void 0,
            style: {
                animationDuration: `${i}ms`
            },
            children: [!g && (0, I.jsx)(`source`, {
                media: me,
                srcSet: e === `dark` ? r : n
            }), (0, I.jsx)(`img`, {
                src: u,
                alt: ``,
                width: 286,
                height: 220,
                fetchPriority: `high`,
                loading: `eager`
            })]
        }, e)), t[18] = i, t[19] = g, t[20] = n, t[21] = r, t[22] = u, t[23] = S, t[24] = w) : w = t[24];
        let T;
        return t[25] !== x || t[26] !== w ? (T = (0, I.jsxs)(I.Fragment, {
            children: [b, (0, I.jsx)(`div`, {
                ref: d,
                className: `dots-hero-intro-themed`,
                "data-themed": x,
                children: w
            })]
        }), t[25] = x, t[26] = w, t[27] = T) : T = t[27], T
    }
}));

function R(e, t) {
    let n = matchMedia(`(prefers-reduced-motion: reduce)`),
        r = !1,
        i = () => {
            r = !0, clearTimeout(u), e.removeEventListener(`playing`, o), e.removeEventListener(`ended`, s), e.removeEventListener(`error`, c, !0), n.removeEventListener(`change`, l)
        },
        a = t => {
            r || (i(), e.pause(), t())
        },
        o = () => {
            clearTimeout(u);
            let t = Number.isFinite(e.duration) ? Math.max(0, e.duration - e.currentTime) * 1e3 : 0;
            u = setTimeout(c, t + 15e3)
        },
        s = () => {
            a(() => t.complete(performance.now()))
        },
        c = () => a(t.fallback),
        l = () => {
            n.matches && a(t.static)
        },
        u = setTimeout(c, 15e3);
    return e.addEventListener(`playing`, o), e.addEventListener(`ended`, s), e.addEventListener(`error`, c, !0), n.addEventListener(`change`, l), n.matches ? l() : e.ended ? a(() => t.complete(performance.now(), !0)) : e.error ? c() : (e.muted = !0, !e.paused && e.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && o(), e.play().catch(e => {
        a(e instanceof DOMException && e.name === `NotAllowedError` ? t.static : t.fallback)
    })), i
}
var ge = e((() => {})),
    z, B, V, _e, ve, ye = e((() => {
        z = x(), B = n(v()), r(), u(), E(), S(), he(), ge(), le(), de(), V = g(), _e = e => {
            "use forget";
            let t = (0, z.c)(37),
                {
                    src: n,
                    srcDark: r,
                    videoSrcLight: i,
                    videoSrcDark: a,
                    durationMs: o,
                    poster: c,
                    onComplete: l
                } = e,
                u = (0, B.useRef)(null),
                d = (0, B.useRef)(!1),
                [f, p] = (0, B.useState)(),
                [m, g] = (0, B.useState)(null),
                [_, v] = (0, B.useState)(!1),
                [y, b] = (0, B.useState)(`video`),
                {
                    reducedMotion: x,
                    status: S
                } = (0, B.useContext)(ee),
                C = h(),
                w = (0, B.useContext)(s),
                T = (0, B.useRef)(!1),
                E;
            t[0] === l ? E = t[1] : (E = (e, t) => {
                let n = e === void 0 ? performance.now() : e,
                    r = t !== void 0 && t;
                T.current || (T.current = !0, l(n, r))
            }, t[0] = l, t[1] = E);
            let D = E,
                te, ne;
            t[2] !== w || t[3] !== D || t[4] !== S || t[5] !== y || t[6] !== x || t[7] !== C || t[8] !== f || t[9] !== m || t[10] !== a || t[11] !== i ? (te = () => {
                let e = !1;
                return queueMicrotask(() => {
                    if (e) return;
                    let t = u.current;
                    if (y !== `video` || !t) return;
                    let n = t.closest(`.light, .dark`),
                        r = n ? n.classList.contains(`dark`) : C === `dark` || !C && w,
                        o = r ? `dark` : `light`;
                    if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches || S !== `loading` && x) {
                        m?.pause(), b(`static`), D();
                        return
                    }
                    let s = r ? a : i;
                    if (!(f?.theme === o && f.url === s)) {
                        if (d.current) {
                            m?.pause(), b(`static`), D();
                            return
                        }
                        if (!s) {
                            b(`webp`);
                            return
                        }
                        v(!1), p({
                            theme: o,
                            url: s
                        })
                    }
                }), () => {
                    e = !0
                }
            }, ne = [y, f, m, D, C, w, S, x, i, a], t[2] = w, t[3] = D, t[4] = S, t[5] = y, t[6] = x, t[7] = C, t[8] = f, t[9] = m, t[10] = a, t[11] = i, t[12] = te, t[13] = ne) : (te = t[12], ne = t[13]), (0, B.useEffect)(te, ne);
            let re, O;
            if (t[14] !== D || t[15] !== y || t[16] !== f || t[17] !== m ? (re = () => {
                    if (!(y !== `video` || !f) && !(!m || m.getAttribute(`src`) !== f.url)) return R(m, {
                        complete: D,
                        fallback: () => b(`webp`),
                        static: () => {
                            b(`static`), D()
                        }
                    })
                }, O = [y, f, m, D], t[14] = D, t[15] = y, t[16] = f, t[17] = m, t[18] = re, t[19] = O) : (re = t[18], O = t[19]), (0, B.useEffect)(re, O), y === `webp`) {
                let e;
                return t[20] !== o || t[21] !== D || t[22] !== c || t[23] !== n || t[24] !== r ? (e = (0, V.jsx)(L, {
                    src: n,
                    srcDark: r,
                    durationMs: o,
                    poster: c,
                    onComplete: D
                }), t[20] = o, t[21] = D, t[22] = c, t[23] = n, t[24] = r, t[25] = e) : e = t[25], e
            }
            let ie;
            t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (ie = (0, V.jsx)(`link`, {
                rel: `stylesheet`,
                href: N,
                precedence: `default`
            }), t[26] = ie) : ie = t[26];
            let ae = y !== `video` || !_ || void 0,
                oe = y === `video` && _ || void 0,
                k;
            t[27] === c ? k = t[28] : (k = c && (0, V.jsx)(`img`, {
                src: c,
                alt: ``,
                width: 114,
                height: 114,
                fetchPriority: `high`
            }), t[27] = c, t[28] = k);
            let A;
            t[29] !== y || t[30] !== f ? (A = y === `video` && f?.url && (0, V.jsx)(`video`, {
                ref: g,
                src: f.url,
                "data-theme": f.theme,
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                preload: `auto`,
                width: 400,
                height: 304,
                onPlaying: () => {
                    d.current = !0, v(!0)
                }
            }, f.url), t[29] = y, t[30] = f, t[31] = A) : A = t[31];
            let j;
            return t[32] !== A || t[33] !== ae || t[34] !== oe || t[35] !== k ? (j = (0, V.jsxs)(V.Fragment, {
                children: [ie, (0, V.jsxs)(`div`, {
                    ref: u,
                    className: `dots-hero-intro dots-hero-intro-video`,
                    "data-static": ae,
                    "data-playing": oe,
                    "aria-hidden": `true`,
                    children: [k, A]
                })]
            }), t[32] = A, t[33] = ae, t[34] = oe, t[35] = k, t[36] = j) : j = t[36], j
        }, ve = e => {
            "use forget";
            let t = (0, z.c)(10),
                n, r, i, a;
            t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({
                videoSrcLight: a,
                videoSrcDark: i,
                poster: n,
                ...r
            } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
            let {
                posters: o,
                artwork: s
            } = (0, B.useContext)(C), c = n || o.O || s.oLogo, l;
            return t[5] !== r || t[6] !== c || t[7] !== i || t[8] !== a ? (l = a || i ? (0, V.jsx)(_e, {
                ...r,
                poster: c,
                videoSrcLight: a,
                videoSrcDark: i
            }) : (0, V.jsx)(L, {
                ...r,
                poster: c
            }), t[5] = r, t[6] = c, t[7] = i, t[8] = a, t[9] = l) : l = t[9], l
        }
    })),
    H = t({
        default: () => we
    });

function be() {}
var xe, U, W, G, Se, Ce, we, Te = e((() => {
    xe = x(), U = n(v()), m(), c(), i(), O(), j(), D(), E(), w(), M(), ye(), k(), ne(), S(), W = g(), b(), G = () => y(() => import(`./d7906bef-kig9g8xmh4hnu5gd.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26])), Se = (0, U.lazy)(G), Ce = e => Promise.all([y(() => import(`./21c2b846-cdkocf3mqrq2hfz6.js`), __vite__mapDeps([27, 1, 2, 3, 4, 8, 9, 28, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 26])), G(), y(async () => {
        let {
            preloadCharacterModels: e
        } = await import(`./27c30153-iytzq9sk8nmu8m68.js`);
        return {
            preloadCharacterModels: e
        }
    }, __vite__mapDeps([25, 1, 6, 10, 3, 11, 9, 12, 13, 2, 4, 14, 15, 16, 17, 18, 19, 20, 21, 22])).then(({
        preloadCharacterModels: t
    }) => t(e))]), we = e => {
        "use forget";
        let t = (0, xe.c)(181),
            {
                id: n,
                data: r,
                media: i
            } = e,
            s = (0, U.useId)(),
            c = (0, U.useId)(),
            u = (0, U.useRef)(null),
            m = (0, U.useContext)(re);
        if (!m) throw Error(`Dots sections require DotsPageShell`);
        let {
            selected: h,
            manual: g,
            sourceId: _,
            animateSelection: v,
            cycle: y,
            selectAutomatically: b
        } = m, x = (0, U.useContext)(C), {
            models: S
        } = x, {
            renderer: w,
            reducedMotion: E,
            status: D
        } = (0, U.useContext)(ee), ne = (0, U.useContext)(te), O;
        t[0] === w ? O = t[1] : (O = w.shouldUseContinuousMotion(), t[0] = w, t[1] = O);
        let k = O,
            j = !!r?.title,
            [M, le] = (0, U.useState)(`O`),
            ue = (0, U.useRef)(null),
            [N, de] = (0, U.useState)(!1),
            [P, fe] = (0, U.useState)(!1),
            F;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (F = {
            amount: .5
        }, t[2] = F) : F = t[2];
        let pe = a(u, F),
            I;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (I = e => {
            le(e)
        }, t[3] = I) : I = t[3];
        let me = I,
            [L, he] = (0, U.useState)(!1),
            [R, ge] = (0, U.useState)(!1),
            z;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (z = () => ge(!0), t[4] = z) : z = t[4];
        let B = z,
            V;
        t[5] !== c || t[6] !== g || t[7] !== b ? (V = () => {
            he(!0), !g && (b(`Alfred`, !1, c), de(!0))
        }, t[5] = c, t[6] = g, t[7] = b, t[8] = V) : V = t[8];
        let _e = V,
            ye;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (ye = {
            target: u,
            offset: [`start start`, `end start`]
        }, t[9] = ye) : ye = t[9];
        let {
            scrollYProgress: H
        } = p(ye), G;
        t[10] !== k || t[11] !== H ? (G = () => {
            let e = k ? H.get() : 0;
            return `translateY(${-100*e}px) scale(${1+.1*e})`
        }, t[10] = k, t[11] = H, t[12] = G) : G = t[12];
        let we = f(G),
            Te;
        t[13] !== k || t[14] !== H ? (Te = () => k ? H.get() * -72 : 0, t[13] = k, t[14] = H, t[15] = Te) : Te = t[15];
        let Ee = f(Te),
            De;
        t[16] !== k || t[17] !== H ? (De = () => k ? H.get() * -48 : 0, t[16] = k, t[17] = H, t[18] = De) : De = t[18];
        let Oe = f(De),
            ke;
        t[19] !== k || t[20] !== H ? (ke = () => k ? H.get() * -24 : 0, t[19] = k, t[20] = H, t[21] = ke) : ke = t[21];
        let Ae = f(ke),
            je = g || !R ? h : M,
            K = r?.introMediaIndex === void 0 ? void 0 : i?.[r.introMediaIndex],
            Me;
        t[22] === K ? Me = t[23] : (Me = K?.assetUrl ?? (K?.asset?.file.url ? o(K.asset.file.url) : void 0), t[22] = K, t[23] = Me);
        let q = Me,
            Ne = K?.assetDarkUrl ?? K?.assetDark?.file.url,
            Pe = r?.introVideoMediaIndex === void 0 ? void 0 : i?.[r.introVideoMediaIndex],
            Fe = Pe?.assetUrl ?? Pe?.asset?.file.url,
            Ie = Pe?.assetDarkUrl ?? Pe?.assetDark?.file.url,
            Le = g,
            J = !q || L || Le,
            Re, ze;
        t[24] !== j || t[25] !== S || t[26] !== J || t[27] !== E ? (Re = () => {
            !J || !j || E || !S || Ce(S).catch(be)
        }, ze = [J, j, E, S], t[24] = j, t[25] = S, t[26] = J, t[27] = E, t[28] = Re, t[29] = ze) : (Re = t[28], ze = t[29]), (0, U.useEffect)(Re, ze);
        let Be = !!S && !R && (D === `loading` || ne?.enabled === !0),
            Y = !!q && !Le && (!L || Be),
            X = j && r?.autoCharacterSwapEnabled === !0,
            Ve = r?.autoCharacterSwapIntervalMs,
            He;
        t[30] === Ve ? He = t[31] : (He = typeof Ve == `number` && Number.isFinite(Ve) ? Math.min(6e4, Math.max(1e3, Ve)) : 3e3, t[30] = Ve, t[31] = He);
        let Ue = He,
            We, Ge;
        t[32] !== X || t[33] !== P ? (We = () => {
            if (!X || P) return;
            let e = () => fe(!0);
            return window.scrollY > 0 && e(), window.addEventListener(`scroll`, e, {
                passive: !0
            }), () => window.removeEventListener(`scroll`, e)
        }, Ge = [X, P], t[32] = X, t[33] = P, t[34] = We, t[35] = Ge) : (We = t[34], Ge = t[35]), (0, U.useEffect)(We, Ge);
        let Ke, qe;
        t[36] !== j || t[37] !== N || t[38] !== c || t[39] !== q || t[40] !== g || t[41] !== b ? (Ke = () => {
            if (!j || g || N || q) return;
            let e = !1;
            return queueMicrotask(() => {
                e || (b(`Alfred`, !1, c), de(!0))
            }), () => {
                e = !0
            }
        }, qe = [j, g, N, q, b, c], t[36] = j, t[37] = N, t[38] = c, t[39] = q, t[40] = g, t[41] = b, t[42] = Ke, t[43] = qe) : (Ke = t[42], qe = t[43]), (0, U.useEffect)(Ke, qe);
        let Je, Ye;
        if (t[44] !== X || t[45] !== M || t[46] !== Ue || t[47] !== P || t[48] !== pe || t[49] !== N || t[50] !== c || t[51] !== g || t[52] !== E || t[53] !== R || t[54] !== b || t[55] !== h ? (Je = () => {
                if (!X || g || P || E || !pe || !N || !R || M !== h) {
                    ue.current = null;
                    return
                }
                ue.current ??= performance.now();
                let e, t = () => clearTimeout(e),
                    n = () => {
                        t(), !(document.hidden || !R) && (e = setTimeout(() => {
                            ue.current = performance.now(), b(T[(T.indexOf(h) + 1) % T.length], !1, c)
                        }, Math.max(0, (ue.current ?? performance.now()) + Ue - performance.now())))
                    },
                    r = () => {
                        ue.current = performance.now(), n()
                    };
                return n(), window.addEventListener(`pointermove`, r, {
                    passive: !0
                }), window.addEventListener(`pointerdown`, r, {
                    passive: !0
                }), window.addEventListener(`keydown`, r), document.addEventListener(`visibilitychange`, r), () => {
                    t(), window.removeEventListener(`pointermove`, r), window.removeEventListener(`pointerdown`, r), window.removeEventListener(`keydown`, r), document.removeEventListener(`visibilitychange`, r)
                }
            }, Ye = [X, g, P, E, pe, R, N, h, M, Ue, c, b], t[44] = X, t[45] = M, t[46] = Ue, t[47] = P, t[48] = pe, t[49] = N, t[50] = c, t[51] = g, t[52] = E, t[53] = R, t[54] = b, t[55] = h, t[56] = Je, t[57] = Ye) : (Je = t[56], Ye = t[57]), (0, U.useEffect)(Je, Ye), !r?.title) return null;
        let Xe;
        t[58] === r.eyebrow ? Xe = t[59] : (Xe = r.eyebrow?.trim(), t[58] = r.eyebrow, t[59] = Xe);
        let Z = Xe,
            Ze = h,
            Qe = r.exciteOnToggle === !0,
            $e = N && !g && h === `Alfred`,
            et = N || Qe,
            tt = et ? `top-[52%] h-[39%]` : `top-[54%] h-[78%]`,
            nt;
        t[60] === tt ? nt = t[61] : (nt = l(`absolute start-1/2 aspect-square -translate-x-1/2 -translate-y-1/2`, tt), t[60] = tt, t[61] = nt);
        let rt = r.posters?.[Ze] ?? x.posters[Ze],
            it;
        t[62] !== Ze || t[63] !== rt ? (it = (0, W.jsx)(ce, {
            name: Ze,
            src: rt
        }), t[62] = Ze, t[63] = rt, t[64] = it) : it = t[64];
        let at;
        t[65] !== nt || t[66] !== it ? (at = (0, W.jsx)(`div`, {
            className: nt,
            children: it
        }), t[65] = nt, t[66] = it, t[67] = at) : at = t[67];
        let ot = at,
            st = r.anchor,
            Q;
        t[68] === we ? Q = t[69] : (Q = {
            transform: we
        }, t[68] = we, t[69] = Q);
        let ct = et ? `absolute inset-x-0 top-1/2 h-[200%] -translate-y-1/2` : `size-full`,
            lt = Y && `opacity-0`,
            ut;
        t[70] !== ct || t[71] !== lt ? (ut = l(ct, lt), t[70] = ct, t[71] = lt, t[72] = ut) : ut = t[72];
        let dt;
        t[73] !== v || t[74] !== L || t[75] !== r.artworkLabel || t[76] !== Qe || t[77] !== et || t[78] !== ot || t[79] !== $e || t[80] !== c || t[81] !== q || t[82] !== g || t[83] !== S || t[84] !== J || t[85] !== R || t[86] !== h || t[87] !== Y || t[88] !== _ ? (dt = S && J ? (0, W.jsx)(se, {
            resolution: `hero`,
            className: `size-full`,
            label: r.artworkLabel,
            prepareSelection: !0,
            onReady: B,
            fallback: ot,
            children: (0, W.jsx)(Se, {
                selected: Y && !R ? `O` : h,
                playIntro: !1,
                exciteOnToggle: _ === c && (Qe || $e),
                stageHeightRatio: et ? .5 : 1,
                animateSelection: !g || v,
                interactive: g || L || !q,
                onReveal: me
            })
        }) : ot, t[73] = v, t[74] = L, t[75] = r.artworkLabel, t[76] = Qe, t[77] = et, t[78] = ot, t[79] = $e, t[80] = c, t[81] = q, t[82] = g, t[83] = S, t[84] = J, t[85] = R, t[86] = h, t[87] = Y, t[88] = _, t[89] = dt) : dt = t[89];
        let ft;
        t[90] !== ut || t[91] !== dt ? (ft = (0, W.jsx)(`div`, {
            className: ut,
            children: dt
        }), t[90] = ut, t[91] = dt, t[92] = ft) : ft = t[92];
        let pt;
        t[93] !== r.introDurationMs || t[94] !== r.posters?.O || t[95] !== q || t[96] !== Ne || t[97] !== _e || t[98] !== x.posters || t[99] !== Y || t[100] !== Ie || t[101] !== Fe ? (pt = Y && q && (0, W.jsx)(ve, {
            src: q,
            srcDark: Ne ? o(Ne) : void 0,
            videoSrcLight: Fe ? o(Fe) : void 0,
            videoSrcDark: Ie ? o(Ie) : void 0,
            durationMs: r.introDurationMs ?? 3374,
            poster: r.posters?.O ?? x.posters.O,
            onComplete: _e
        }, q), t[93] = r.introDurationMs, t[94] = r.posters?.O, t[95] = q, t[96] = Ne, t[97] = _e, t[98] = x.posters, t[99] = Y, t[100] = Ie, t[101] = Fe, t[102] = pt) : pt = t[102];
        let mt;
        t[103] !== ft || t[104] !== pt ? (mt = (0, W.jsxs)(`div`, {
            className: `pointer-events-none absolute start-1/2 top-1/2 h-[123px] w-[160px] -translate-x-1/2 -translate-y-[54%] min-[600px]:h-[146px] min-[600px]:w-[190px] rtl:translate-x-1/2`,
            children: [ft, pt]
        }), t[103] = ft, t[104] = pt, t[105] = mt) : mt = t[105];
        let ht = r.switchCharacterLabel ?? r.artworkLabel,
            gt;
        t[106] !== je || t[107] !== y || t[108] !== c ? (gt = e => {
            y(e.detail !== 0, je, c)
        }, t[106] = je, t[107] = y, t[108] = c, t[109] = gt) : gt = t[109];
        let _t;
        t[110] !== ht || t[111] !== gt ? (_t = (0, W.jsx)(`button`, {
            type: `button`,
            className: `interactive-button absolute inset-0 rounded-full border-0 bg-transparent p-0`,
            "aria-label": ht,
            onClick: gt
        }), t[110] = ht, t[111] = gt, t[112] = _t) : _t = t[112];
        let vt;
        t[113] !== L || t[114] !== M || t[115] !== h || t[116] !== Q || t[117] !== mt || t[118] !== _t ? (vt = (0, W.jsxs)(d.div, {
            className: `relative size-24 shrink-0 min-[600px]:size-[114px]`,
            style: Q,
            "data-character": M,
            "data-selected-character": h,
            "data-cycle-complete": L,
            children: [mt, _t]
        }), t[113] = L, t[114] = M, t[115] = h, t[116] = Q, t[117] = mt, t[118] = _t, t[119] = vt) : vt = t[119];
        let yt;
        t[120] !== r.modelHref || t[121] !== r.modelLabel || t[122] !== r.poweredBy || t[123] !== Z || t[124] !== Ee ? (yt = !Z && (r.poweredBy || r.modelLabel) && (0, W.jsxs)(d.div, {
            className: `text-token-text-tertiary text-mkt-p2 flex flex-wrap items-center justify-center gap-2 leading-[1.64] tracking-[-0.01em]`,
            style: {
                y: Ee
            },
            children: [r.poweredBy && (0, W.jsx)(`span`, {
                children: r.poweredBy
            }), r.modelLabel && (r.modelHref ? (0, W.jsx)(A, {
                href: r.modelHref,
                className: `border-token-border-heavy text-mkt-p2 flex h-[23px] items-center justify-center rounded-full border px-1 leading-[1.64] font-semibold tracking-[-0.01em]`,
                children: r.modelLabel
            }) : (0, W.jsx)(`span`, {
                className: `border-token-border-heavy text-mkt-p2 flex h-[23px] items-center justify-center rounded-full border px-1 leading-[1.64] font-semibold tracking-[-0.01em]`,
                children: r.modelLabel
            }))]
        }), t[120] = r.modelHref, t[121] = r.modelLabel, t[122] = r.poweredBy, t[123] = Z, t[124] = Ee, t[125] = yt) : yt = t[125];
        let bt;
        t[126] !== vt || t[127] !== yt ? (bt = (0, W.jsxs)(`div`, {
            className: `flex w-full flex-col items-center gap-6`,
            children: [vt, yt]
        }), t[126] = vt, t[127] = yt, t[128] = bt) : bt = t[128];
        let xt = r.titleSize === `h1` ? `max-w-[768px]` : `max-w-[572px]`,
            St = Z ? `gap-6` : `gap-4`,
            Ct;
        t[129] !== xt || t[130] !== St ? (Ct = l(`flex w-full flex-col items-center`, xt, St), t[129] = xt, t[130] = St, t[131] = Ct) : Ct = t[131];
        let wt;
        t[132] === Oe ? wt = t[133] : (wt = {
            y: Oe
        }, t[132] = Oe, t[133] = wt);
        let Tt;
        t[134] === Z ? Tt = t[135] : (Tt = Z && (0, W.jsx)(`p`, {
            className: `text-token-text-secondary text-[1rem] leading-[1.3] font-medium tracking-[-0.01em] min-[600px]:text-[1.125rem]`,
            children: Z
        }), t[134] = Z, t[135] = Tt);
        let Et = r.titleSize === `h1` ? `text-[36px] leading-[1.14] font-medium tracking-[-0.02em] min-[900px]:text-[80px] min-[900px]:leading-[1.1]` : `text-[64px] leading-none font-medium tracking-[-0.02em] min-[600px]:text-[112px]`,
            Dt;
        t[136] === Et ? Dt = t[137] : (Dt = l(`text-token-text-primary`, Et), t[136] = Et, t[137] = Dt);
        let Ot;
        t[138] !== r.title || t[139] !== Dt || t[140] !== s ? (Ot = (0, W.jsx)(`h1`, {
            id: s,
            className: Dt,
            children: r.title
        }), t[138] = r.title, t[139] = Dt, t[140] = s, t[141] = Ot) : Ot = t[141];
        let kt;
        t[142] !== wt || t[143] !== Tt || t[144] !== Ot ? (kt = (0, W.jsxs)(d.div, {
            className: `flex flex-col items-center gap-2`,
            style: wt,
            children: [Tt, Ot]
        }), t[142] = wt, t[143] = Tt, t[144] = Ot, t[145] = kt) : kt = t[145];
        let At;
        t[146] === Ae ? At = t[147] : (At = {
            y: Ae
        }, t[146] = Ae, t[147] = At);
        let jt;
        t[148] !== r.description || t[149] !== At ? (jt = (0, W.jsx)(d.p, {
            className: `text-token-text-tertiary max-w-[572px] text-[1.5rem] leading-[1.2] font-medium tracking-[-0.02em] text-balance min-[600px]:text-[36px]`,
            style: At,
            children: r.description
        }), t[148] = r.description, t[149] = At, t[150] = jt) : jt = t[150];
        let Mt;
        t[151] !== Ct || t[152] !== kt || t[153] !== jt ? (Mt = (0, W.jsxs)(`div`, {
            className: Ct,
            children: [kt, jt]
        }), t[151] = Ct, t[152] = kt, t[153] = jt, t[154] = Mt) : Mt = t[154];
        let Nt;
        t[155] !== r.ctaLabel || t[156] !== n ? (Nt = r.ctaLabel ? (0, W.jsx)(ae, {
            analyticsIdentifier: `dots-${n??`hero`}-hero-mobile-cta`,
            children: r.ctaLabel
        }) : void 0, t[155] = r.ctaLabel, t[156] = n, t[157] = Nt) : Nt = t[157];
        let Pt;
        t[158] !== r.ctaHref || t[159] !== r.ctaLabel || t[160] !== n ? (Pt = r.ctaLabel && r.ctaHref && (0, W.jsx)(oe, {
            href: r.ctaHref,
            variant: `accent-button`,
            analyticsIdentifier: `dots-${n??`hero`}-hero-cta`,
            children: r.ctaLabel
        }), t[158] = r.ctaHref, t[159] = r.ctaLabel, t[160] = n, t[161] = Pt) : Pt = t[161];
        let Ft;
        t[162] !== r.secondaryCtaDownloadMode || t[163] !== r.secondaryCtaHref || t[164] !== r.secondaryCtaLabel || t[165] !== r.secondaryCtaPlatformHrefs || t[166] !== r.secondaryCtaPlatformLabels || t[167] !== n ? (Ft = r.secondaryCtaLabel && r.secondaryCtaHref && (0, W.jsx)(oe, {
            href: r.secondaryCtaHref,
            platformLabels: r.secondaryCtaPlatformLabels,
            downloadMode: r.secondaryCtaDownloadMode,
            platformHrefs: r.secondaryCtaPlatformHrefs,
            variant: `primary-button`,
            analyticsIdentifier: `dots-${n??`hero`}-hero-secondary-cta`,
            children: r.secondaryCtaLabel
        }), t[162] = r.secondaryCtaDownloadMode, t[163] = r.secondaryCtaHref, t[164] = r.secondaryCtaLabel, t[165] = r.secondaryCtaPlatformHrefs, t[166] = r.secondaryCtaPlatformLabels, t[167] = n, t[168] = Ft) : Ft = t[168];
        let $;
        t[169] !== Nt || t[170] !== Pt || t[171] !== Ft ? ($ = (0, W.jsx)(`div`, {
            className: `flex w-full justify-center`,
            children: (0, W.jsxs)(ie, {
                mobile: Nt,
                children: [Pt, Ft]
            })
        }), t[169] = Nt, t[170] = Pt, t[171] = Ft, t[172] = $) : $ = t[172];
        let It;
        t[173] !== Mt || t[174] !== $ ? (It = (0, W.jsxs)(`div`, {
            className: `flex w-full flex-col items-center gap-8`,
            children: [Mt, $]
        }), t[173] = Mt, t[174] = $, t[175] = It) : It = t[175];
        let Lt;
        return t[176] !== r.anchor || t[177] !== bt || t[178] !== It || t[179] !== s ? (Lt = (0, W.jsxs)(`section`, {
            ref: u,
            id: st,
            "aria-labelledby": s,
            className: `dots-compact-hero relative mx-auto flex w-full flex-col items-center gap-10 px-4 pt-16 pb-24 text-center min-[600px]:pt-24 min-[600px]:pb-32`,
            children: [bt, It]
        }), t[176] = r.anchor, t[177] = bt, t[178] = It, t[179] = s, t[180] = Lt) : Lt = t[180], Lt
    }
}));
export {
    H as n, Te as r, we as t
};
//# sourceMappingURL=ae6c79d1-osm2ep1tmdl8nxki.js.map