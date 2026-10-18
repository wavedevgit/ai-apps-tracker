const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d0ef0c6d-ihrh5pin2cexvraw.js", "assets/f025431a-ehagpvg3m4e1cduv.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as r,
    Vn as i,
    cn as a,
    ln as o,
    wn as s
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as c,
    t as l
} from "./f95c8da2-nufmskrv6g15liyr.js";
import {
    i as u,
    r as d
} from "./3a6eb079-hjakmv42muhkqjzj.js";
import {
    n as f,
    t as p
} from "./9225e854-duvmjkx79b210rzz.js";
import {
    a as m,
    i as h,
    n as g,
    r as ee,
    t as _
} from "./9e9d0eec-nkmykeb4giti97x1.js";
import {
    r as v,
    t as te
} from "./ea7792a2-d9m2q4bht39qycrh.js";
import {
    n as ne,
    t as re
} from "./9e38ec96-duvmjkx79b210rzz.js";
import {
    t as ie
} from "./1dc5ae5b-m4zpgpi28ytp6g05.js";
import {
    t as ae
} from "./c7a90257-h8bu5i1psxpuvu4f.js";
var oe = e((() => {})),
    se = e((() => {})),
    y, ce = e((() => {
        se(), y = `/cdn/assets/dots-fex97gwt.css`
    }));

function b() {
    return typeof window < `u`
}

function le(e) {
    return e <= 0 ? 0 : e === 1 || e === 2 || e === 3 ? e : 1
}

function ue(e) {
    if (!b()) return null;
    try {
        return window.localStorage.getItem(e)
    } catch {
        return null
    }
}

function de(e, t) {
    if (b()) try {
        window.localStorage.setItem(e, t)
    } catch {}
}

function x(e) {
    return e === `0` || e === `1` || e === `2` || e === `3` ? Number(e) : null
}

function S() {
    return b() ? window.matchMedia?.(`(hover: none) and (pointer: coarse)`).matches || navigator.maxTouchPoints > 0 : !1
}

function fe() {
    return b() ? x(new URLSearchParams(window.location.search).get(A)) : null
}

function pe() {
    return fe() ?? x(ue(k))
}

function me(e, t = Date.now()) {
    return {
        createdAt: t,
        isMobile: S(),
        source: `override`,
        supportsWebGL: e > 0,
        tier: e
    }
}

function he() {
    let e = ue(O);
    if (!e) return null;
    try {
        let t = JSON.parse(e);
        if (t && typeof t.createdAt == `number` && typeof t.isMobile == `boolean` && typeof t.supportsWebGL == `boolean`) return {
            ...t,
            tier: le(t.tier)
        }
    } catch {
        return null
    }
    return null
}

function ge(e, t) {
    e.source !== `override` && de(O, JSON.stringify({
        ...e,
        expiresAt: t + D
    }))
}

function C(e, t) {
    return {
        createdAt: e.createdAt,
        device: e.device,
        error: e.error,
        fps: e.fps,
        isMobile: e.isMobile,
        renderer: e.renderer,
        source: t,
        supportsWebGL: e.supportsWebGL,
        tier: e.tier
    }
}

function w({
    error: e,
    now: t,
    source: n = `fallback`
}) {
    return {
        createdAt: t,
        error: e,
        isMobile: S(),
        source: n,
        supportsWebGL: !0,
        tier: 1
    }
}

function _e(e) {
    switch (e) {
        case `BENCHMARK`:
            return `benchmark`;
        case `BENCHMARK_FETCH_FAILED`:
            return `benchmark-fetch-failed`;
        case `BLOCKLISTED`:
            return `blocklisted`;
        case `FALLBACK`:
            return `fallback`;
        case `SSR`:
            return `ssr`;
        case `WEBGL_UNSUPPORTED`:
            return `unsupported`
    }
}

function ve(e, t) {
    let n = _e(e.type),
        r = e.type !== `WEBGL_UNSUPPORTED` && e.type !== `BLOCKLISTED` && e.type !== `SSR`;
    return {
        createdAt: t,
        device: e.device,
        fps: e.fps,
        isMobile: e.isMobile ?? S(),
        renderer: e.gpu,
        source: n,
        supportsWebGL: r,
        tier: r ? le(e.tier) : 0
    }
}
async function ye() {
    return (await a(() => import(`./d0ef0c6d-ihrh5pin2cexvraw.js`), __vite__mapDeps([0, 1]))).getGPUTier
}
async function be(e, t) {
    let n = new AbortController,
        r = setTimeout(() => n.abort(), E);
    try {
        let r = await fetch(`${e}/${t}`, {
            signal: n.signal
        });
        if (!r.ok) throw Error(`GPU benchmarks could not be loaded`);
        let [i, ...a] = await r.json();
        if (Number.parseInt(i.split(`.`)[0], 10) < 4) throw Error(`GPU benchmark data is out of date`);
        return a
    } finally {
        clearTimeout(r)
    }
}
async function xe({
    benchmarksURL: e,
    cachedProfile: t,
    getGPUTier: n,
    now: r
}) {
    if (!e && !n) return t ? C(t, `stale-cache`) : w({
        error: j,
        now: r,
        source: `benchmark-fetch-failed`
    });
    try {
        let i = ve(await (n ?? await ye())({
            benchmarksURL: e ?? ``,
            failIfMajorPerformanceCaveat: !1,
            override: {
                loadBenchmarks: t => be(e ?? ``, t)
            }
        }), r);
        return i.source === `benchmark-fetch-failed` ? t ? C(t, `stale-cache`) : w({
            now: r,
            source: `benchmark-fetch-failed`
        }) : (ge(i, r), i)
    } catch (e) {
        return t ? C(t, `stale-cache`) : w({
            error: e instanceof Error ? e.message : String(e),
            now: r,
            source: `error`
        })
    }
}
async function Se({
    benchmarksURL: e,
    forceRefresh: t = !1,
    getGPUTier: n,
    ignoreOverride: r = !1,
    mode: i = `passive`,
    now: a
} = {}) {
    let o = a ?? Date.now();
    if (typeof window > `u`) return {
        createdAt: o,
        isMobile: !1,
        source: `ssr`,
        supportsWebGL: !1,
        tier: 1
    };
    let s = r ? null : pe();
    if (s !== null) return me(s, o);
    let c = he(),
        l = c?.expiresAt !== void 0 && c.expiresAt > o;
    if (!t && i === `passive` && c && l) return C(c, `cache`);
    let u = (e ?? T).trim() || null,
        d = !t && !n && !r && i === `passive` && a === void 0 && u !== null;
    if (d && u) {
        let e = M.get(u);
        if (e) return e
    }
    let f = xe({
        benchmarksURL: u,
        cachedProfile: c,
        getGPUTier: n,
        now: o
    });
    if (!d || !u) return f;
    let p = f.finally(() => {
        M.get(u) === p && M.delete(u)
    });
    return M.set(u, p), p
}
var T, E, D, O, k, A, j, M, Ce = e((() => {
        o(), T = `https://cdn.openai.com/webgl/detect-gpu`, E = 2e3, D = 10080 * 60 * 1e3, O = `openai.gpuPerformance.v1`, k = `openai.gpuPerformance.override.v1`, A = `gpuTier`, j = `GPU benchmark CDN URL is not configured`, M = new Map
    })),
    N, P, F, I, we = e((() => {
        N = s(), g(), P = n(i()), Ce(), m(), F = r(), I = e => {
            "use forget";
            let t = (0, N.c)(12),
                {
                    children: n,
                    reducedMotion: r
                } = e,
                [i, a] = (0, P.useState)(),
                [o, s] = (0, P.useState)(`loading`),
                [c, l] = (0, P.useState)(!0),
                u, d;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = () => {
                let e = window.matchMedia(`(prefers-reduced-motion: reduce)`),
                    t = () => l(e.matches);
                t(), e.addEventListener(`change`, t);
                let n = !1;
                return Se().then(e => {
                    n || (a(e), s(`ready`))
                }).catch(() => {
                    n || s(`error`)
                }), () => {
                    n = !0, e.removeEventListener(`change`, t)
                }
            }, d = [], t[0] = u, t[1] = d) : (u = t[0], d = t[1]), (0, P.useEffect)(u, d);
            let f = r ?? c,
                p;
            t[2] !== f || t[3] !== i ? (p = i ? h(i, {
                reducedMotion: f
            }) : ee, t[2] = f, t[3] = i, t[4] = p) : p = t[4];
            let m = p,
                g;
            t[5] !== f || t[6] !== m || t[7] !== o ? (g = {
                status: o,
                renderer: m,
                reducedMotion: f
            }, t[5] = f, t[6] = m, t[7] = o, t[8] = g) : g = t[8];
            let v;
            return t[9] !== n || t[10] !== g ? (v = (0, F.jsx)(_.Provider, {
                value: g,
                children: n
            }), t[9] = n, t[10] = g, t[11] = v) : v = t[11], v
        }
    })),
    L, R, z, B, V, Te = e((() => {
        L = s(), R = n(i()), we(), g(), v(), z = r(), B = e => {
            "use forget";
            let t = (0, L.c)(14),
                {
                    children: n
                } = e,
                {
                    renderer: r,
                    status: i,
                    reducedMotion: a
                } = (0, R.useContext)(_),
                [o, s] = (0, R.useState)(!1),
                c;
            t[0] !== o || t[1] !== r || t[2] !== a || t[3] !== i ? (c = i === `ready` && r.canUseWebGL() && !a && !o, t[0] = o, t[1] = r, t[2] = a, t[3] = i, t[4] = c) : c = t[4];
            let l = c,
                u;
            t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (u = () => s(!0), t[5] = u) : u = t[5];
            let d = u,
                f;
            t[6] === l ? f = t[7] : (f = {
                enabled: l,
                onError: d
            }, t[6] = l, t[7] = f);
            let p;
            t[8] !== n || t[9] !== r.tier ? (p = (0, z.jsx)(`div`, {
                className: `relative isolate`,
                "data-dots-shell": !0,
                "data-gpu-tier": r.tier,
                children: n
            }), t[8] = n, t[9] = r.tier, t[10] = p) : p = t[10];
            let m;
            return t[11] !== f || t[12] !== p ? (m = (0, z.jsx)(te.Provider, {
                value: f,
                children: p
            }), t[11] = f, t[12] = p, t[13] = m) : m = t[13], m
        }, V = e => {
            "use forget";
            let t = (0, L.c)(5),
                {
                    children: n,
                    reducedMotion: r
                } = e,
                i;
            t[0] === n ? i = t[1] : (i = (0, z.jsx)(B, {
                children: n
            }), t[0] = n, t[1] = i);
            let a;
            return t[2] !== r || t[3] !== i ? (a = (0, z.jsx)(I, {
                reducedMotion: r,
                children: i
            }), t[2] = r, t[3] = i, t[4] = a) : a = t[4], a
        }
    })),
    H, U, W, G, Ee = e((() => {
        H = s(), U = n(i()), f(), oe(), ce(), Te(), W = r(), G = e => {
            "use forget";
            let t = (0, H.c)(21),
                {
                    children: n,
                    background: r
                } = e,
                [i, a] = (0, U.useState)(),
                o, s, c, l, u, d;
            if (t[0] !== i || t[1] !== r) {
                let e = {
                    activeTabId: i
                };
                s = p.Provider, u = {
                    scene: e,
                    setActiveTab: a
                }, t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, W.jsx)(`link`, {
                    rel: `stylesheet`,
                    href: y,
                    precedence: `default`
                }), t[8] = d) : d = t[8], l = `font-oai dots-page`, o = V, c = r && (0, W.jsx)(`div`, {
                    className: `dots-background`,
                    "aria-hidden": `true`,
                    children: r(e)
                }), t[0] = i, t[1] = r, t[2] = o, t[3] = s, t[4] = c, t[5] = l, t[6] = u, t[7] = d
            } else o = t[2], s = t[3], c = t[4], l = t[5], u = t[6], d = t[7];
            let f;
            t[9] !== o || t[10] !== n || t[11] !== c ? (f = (0, W.jsxs)(o, {
                children: [c, n]
            }), t[9] = o, t[10] = n, t[11] = c, t[12] = f) : f = t[12];
            let m;
            t[13] !== l || t[14] !== f ? (m = (0, W.jsx)(`div`, {
                className: l,
                children: f
            }), t[13] = l, t[14] = f, t[15] = m) : m = t[15];
            let h;
            return t[16] !== s || t[17] !== u || t[18] !== d || t[19] !== m ? (h = (0, W.jsxs)(s, {
                value: u,
                children: [d, m]
            }), t[16] = s, t[17] = u, t[18] = d, t[19] = m, t[20] = h) : h = t[20], h
        }
    })),
    K, q, J, Y, De = e((() => {
        K = s(), ne(), q = n(i()), u(), J = r(), Y = e => {
            "use forget";
            let t = (0, K.c)(10),
                {
                    children: n,
                    initialCharacter: r
                } = e,
                i = r === void 0 ? `O` : r,
                a;
            t[0] === i ? a = t[1] : (a = {
                selected: i,
                manual: !1,
                animateSelection: !0,
                sourceId: null
            }, t[0] = i, t[1] = a);
            let [o, s] = (0, q.useState)(a), c;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (e, t) => {
                s({
                    selected: e,
                    manual: !0,
                    animateSelection: t === void 0 || t,
                    sourceId: null
                })
            }, t[2] = c) : c = t[2];
            let l = c,
                u;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (e, t, n) => {
                let r = e === void 0 || e,
                    i = n === void 0 ? null : n;
                s(e => ({
                    selected: d[(d.indexOf(t ?? e.selected) + 1) % d.length],
                    manual: !0,
                    animateSelection: r,
                    sourceId: i
                }))
            }, t[3] = u) : u = t[3];
            let f = u,
                p;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (e, t, n) => {
                let r = t !== void 0 && t,
                    i = n === void 0 ? null : n;
                s(t => t.manual ? t : {
                    selected: e,
                    manual: r,
                    animateSelection: !r,
                    sourceId: r ? null : i
                })
            }, t[4] = p) : p = t[4];
            let m = p,
                h;
            t[5] === o ? h = t[6] : (h = {
                ...o,
                select: l,
                cycle: f,
                selectAutomatically: m
            }, t[5] = o, t[6] = h);
            let g;
            return t[7] !== n || t[8] !== h ? (g = (0, J.jsx)(re.Provider, {
                value: h,
                children: n
            }), t[7] = n, t[8] = h, t[9] = g) : g = t[9], g
        }
    })),
    Oe = e((() => {})),
    ke = e((() => {})),
    X, Ae = e((() => {
        ke(), X = `/cdn/assets/layout-dpob9t8h.css`
    })),
    je = e((() => {})),
    Z, Me = e((() => {
        je(), Z = `/cdn/assets/interactions-hy4ve8ll.css`
    })),
    Ne = e((() => {})),
    Pe, Fe = e((() => {
        Ne(), Pe = `/cdn/assets/dots-scenes-b65xtw6k.css`
    })),
    Ie = t({
        DotsPageShell: () => $
    }),
    Le, Re, Q, $, ze = e((() => {
        Le = s(), Re = n(i()), Ee(), c(), De(), Oe(), ie(), ae(), Ae(), Me(), Fe(), Q = r(), $ = e => {
            "use forget";
            let t = (0, Le.c)(14),
                {
                    children: n,
                    background: r
                } = e,
                [i, a] = (0, Re.useState)(!1),
                o;
            t[0] === i ? o = t[1] : (o = {
                replaced: i,
                setReplaced: a
            }, t[0] = i, t[1] = o);
            let s, c, u;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Q.jsx)(`link`, {
                rel: `stylesheet`,
                href: Pe,
                precedence: `default`
            }), c = (0, Q.jsx)(`link`, {
                rel: `stylesheet`,
                href: X,
                precedence: `default`
            }), u = (0, Q.jsx)(`link`, {
                rel: `stylesheet`,
                href: Z,
                precedence: `default`
            }), t[2] = s, t[3] = c, t[4] = u) : (s = t[2], c = t[3], u = t[4]);
            let d;
            t[5] !== n || t[6] !== i ? (d = (0, Q.jsx)(`div`, {
                "data-dots-brand-shell": !0,
                "data-header-replaced": i,
                children: n
            }), t[5] = n, t[6] = i, t[7] = d) : d = t[7];
            let f;
            t[8] !== r || t[9] !== d ? (f = (0, Q.jsxs)(G, {
                background: r,
                children: [s, c, u, d]
            }), t[8] = r, t[9] = d, t[10] = f) : f = t[10];
            let p;
            return t[11] !== o || t[12] !== f ? (p = (0, Q.jsx)(Y, {
                children: (0, Q.jsx)(l.Provider, {
                    value: o,
                    children: f
                })
            }), t[11] = o, t[12] = f, t[13] = p) : p = t[13], p
        }
    }));
export {
    ze as n, Ie as r, $ as t
};
//# sourceMappingURL=78f263ec-orbywzelc8ywyxe3.js.map