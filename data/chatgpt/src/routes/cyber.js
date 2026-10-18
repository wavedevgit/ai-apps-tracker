const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/f21b234b-ivk3254dnrpbp8ud.js", "assets/f025431a-ehagpvg3m4e1cduv.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    B6 as r,
    Bz as i,
    FU as a,
    Gat as o,
    IU as s,
    KK as c,
    L8 as l,
    LU as u,
    NK as d,
    NU as f,
    Nrt as p,
    Prt as m,
    Qit as h,
    R8 as g,
    Sot as _,
    Wat as v,
    X$ as y,
    a7 as b,
    aN as x,
    b5 as S,
    fU as C,
    i5 as w,
    iat as T,
    iot as E,
    kT as D,
    l7 as O,
    pU as k,
    pnt as A,
    rot as j,
    tN as M,
    u1 as N,
    y5 as P,
    ynt as F,
    yot as I,
    zz as ee
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as L,
    Bn as R,
    Ln as z,
    Nn as B,
    O as V,
    Rn as te,
    Ut as ne,
    Vn as re,
    cn as ie,
    ln as ae,
    p as H,
    s as oe,
    wn as U,
    zn as se
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $st as ce,
    Hbt as le,
    Qst as ue,
    Ubt as de,
    Xst as fe,
    b8 as pe,
    x8 as me
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $g as he,
    Fv as ge,
    Gx as _e,
    Iv as ve,
    Qg as ye,
    Wx as be,
    br as xe,
    dy as Se,
    fy as Ce,
    yr as we
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    cd as Te,
    dd as Ee,
    fd as De,
    ld as Oe,
    pd as ke,
    ud as Ae
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    Dh as je,
    Th as Me
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as Ne,
    t as Pe
} from "./dd53ca11-idgt18k3cadtex3q.js";

function W(e, t, n) {
    return Math.min(n, Math.max(t, e))
}

function Fe(e) {
    let t = e.replace(`#`, ``).trim();
    return t.length === 3 ? {
        r: parseInt(t[0] + t[0], 16),
        g: parseInt(t[1] + t[1], 16),
        b: parseInt(t[2] + t[2], 16)
    } : t.length === 6 ? {
        r: parseInt(t.slice(0, 2), 16),
        g: parseInt(t.slice(2, 4), 16),
        b: parseInt(t.slice(4, 6), 16)
    } : null
}

function Ie(e) {
    let t = e.trim().match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    return t ? {
        r: Number(t[1]),
        g: Number(t[2]),
        b: Number(t[3])
    } : null
}

function Le(e, t, n) {
    let r = e => {
            let t = e / 255;
            return t <= .04045 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4
        },
        [i, a, o] = [r(e), r(t), r(n)];
    return .2126 * i + .7152 * a + .0722 * o
}

function Re() {
    let e = (0, G.useRef)(null),
        t = (0, G.useRef)(null),
        n = x(),
        r = w(() => c()),
        [i, a] = (0, G.useState)(!1);
    return (0, G.useEffect)(() => {
        a(n === `dark`)
    }, [n]), (0, G.useEffect)(() => {
        if (r) return;
        let i = e.current,
            o = t.current;
        if (!i || !o) return;
        let s = o.getContext(`2d`, {
            alpha: !0
        });
        if (!s) return;
        let c = Math.min(window.devicePixelRatio || 1, 1),
            l = 0,
            u = 0,
            d = 0,
            p = 0,
            m = 0,
            h = 0,
            g = !document.hidden,
            _ = !1,
            v = `rgba(0, 0, 0, 0.2)`,
            y = `rgb(88, 90, 115)`,
            b = .12,
            x = [],
            S = [],
            C = () => ({
                x: Math.random() * l,
                y: Math.random() * u * .82
            }),
            w = (e, t) => {
                let n = (t + .5) / 3 * l,
                    r = l / 3,
                    i = Math.min(l, u) * .28,
                    a = C();
                for (let t = 0; t < 10; t += 1) {
                    let t = {
                        x: W(n + (Math.random() - .5) * r * .9, 0, l),
                        y: Math.random() * u * .82
                    };
                    if (Math.hypot(t.x - e.x, t.y - e.y) >= i) return t;
                    a = t
                }
                return a
            },
            T = (e, t, n) => {
                let r = (t + .5) / 3 * l,
                    i = l / 3,
                    a = {
                        x: W(r + (Math.random() - .5) * i * .9, 0, l),
                        y: Math.random() * u * .82
                    },
                    o = n ? w(n, t) : a,
                    s = Math.hypot(l, u);
                return e === `small` ? {
                    x: o.x,
                    y: o.y,
                    radius: 0,
                    speed: .34 + Math.random() * .12,
                    band: 16 + Math.random() * 6,
                    baseStrength: .6,
                    strength: .6,
                    targetRadius: s * (.4 + Math.random() * .18)
                } : e === `medium` ? {
                    x: o.x,
                    y: o.y,
                    radius: 0,
                    speed: .28 + Math.random() * .1,
                    band: 22 + Math.random() * 8,
                    baseStrength: .82,
                    strength: .82,
                    targetRadius: s * (.62 + Math.random() * .18)
                } : {
                    x: o.x,
                    y: o.y,
                    radius: 0,
                    speed: .22 + Math.random() * .1,
                    band: 30 + Math.random() * 10,
                    baseStrength: 1,
                    strength: 1,
                    targetRadius: s * (.85 + Math.random() * .2)
                }
            },
            E = () => {
                let e = getComputedStyle(document.documentElement),
                    t = e.getPropertyValue(`--token-main-surface-primary`).trim() || e.backgroundColor || getComputedStyle(document.body).backgroundColor,
                    r = t.startsWith(`#`) ? Fe(t) : Ie(t),
                    i = r ? Le(r.r, r.g, r.b) : n === `dark` ? 0 : 1;
                if (_ = n === `dark` || n !== `light` && i < .45, a(_), r) {
                    let e = _ ? .18 : .08;
                    v = `rgba(${r.r}, ${r.g}, ${r.b}, ${e})`
                } else v = _ ? `rgba(0, 0, 0, 0.18)` : `rgba(255, 255, 255, 0.08)`;
                y = _ ? `rgb(108, 110, 138)` : `rgb(138, 140, 170)`, b = _ ? .06 : .02, s.shadowBlur = 0, s.shadowColor = `transparent`
            },
            D = () => {
                let e = W(Math.floor(d * p / 72), 56, 180);
                x = Array.from({
                    length: e
                }, () => ({
                    col: Math.floor(Math.random() * d),
                    row: Math.floor(Math.random() * p),
                    glyphOffset: Math.floor(Math.random() * 19),
                    hueOffset: Math.random() * 360,
                    drift: Math.random() * Math.PI * 2
                }));
                let t = T(`small`, 0),
                    n = T(`medium`, 1, {
                        x: t.x,
                        y: t.y
                    });
                S = [t, n, T(`large`, 2, {
                    x: n.x,
                    y: n.y
                })]
            },
            O = () => {
                let e = o.getBoundingClientRect();
                l = Math.max(1, e.width), u = Math.max(1, e.height), d = Math.max(1, Math.floor(l / 13)), p = Math.max(1, Math.floor(u / 13)), o.width = Math.floor(l * c), o.height = Math.floor(u * c), s.setTransform(1, 0, 0, 1, 0, 0), s.clearRect(0, 0, o.width, o.height), s.setTransform(c, 0, 0, c, 0, 0), s.font = `13px ui-monospace, SFMono-Regular, Menlo, monospace`, s.textBaseline = `top`, s.textAlign = `center`, D(), E()
            },
            k = () => {
                s.strokeStyle = y, s.globalAlpha = b, s.lineWidth = 1, s.beginPath();
                for (let e = 0; e <= l; e += 13) s.moveTo(e + 0, 0), s.lineTo(e + 0, u);
                for (let e = 0; e <= u; e += 13) s.moveTo(0, e + 0), s.lineTo(l, e + 0);
                s.stroke(), s.globalAlpha = 1
            },
            A = () => {
                let e = Math.floor(l / 13),
                    t = Math.floor(u / 13);
                for (let n = 0; n < t; n += 1)
                    for (let t = 0; t < e; t += 1) {
                        let e = t * 13 + 13 * .5,
                            r = n * 13 + 13 * .5,
                            i = 0;
                        for (let t of S) {
                            let n = Math.hypot(e - t.x, r - t.y),
                                a = Math.exp(-Math.abs(n - t.radius) / (t.band * 1.05)),
                                o = Math.exp(-Math.abs(n - (t.radius - 13 * 3.4)) / (t.band * 1.2)),
                                s = Math.exp(-Math.abs(n - (t.radius - 13 * 6.8)) / (t.band * 1.35));
                            i += (a + o * .62 + s * .38) * t.strength
                        }
                        if (i = W(i, 0, 1), i < .06) continue;
                        let a = (Math.hypot(e - S[0].x, r - S[0].y) * .14 + S[0].radius * .9) % 360,
                            o = i * (_ ? .06 : .08);
                        s.fillStyle = `hsla(${a}, 46%, ${_?60:52}%, ${o})`, s.fillRect(t * 13 + 1, n * 13 + 1, 11, 11)
                    }
            },
            j = e => {
                let t = Math.sin(e / 950);
                for (let e = 0; e < S.length; e += 1) {
                    let t = S[e];
                    t.radius += t.speed;
                    let n = W(t.radius / t.targetRadius, 0, 1);
                    t.strength = t.baseStrength * (1 - n) * (1 - n), t.radius >= t.targetRadius && (S[e] = T(e === 0 ? `small` : e === 1 ? `medium` : `large`, e, {
                        x: t.x,
                        y: t.y
                    }))
                }
                for (let n of x) {
                    n.drift += .08, Math.random() < .1 && (n.col = (n.col + (Math.random() < .5 ? -1 : 1) + d) % d, n.row = (n.row + (Math.random() < .5 ? -1 : 1) + p) % p), Math.random() < .012 && (n.col = Math.floor(Math.random() * d), n.row = Math.floor(Math.random() * p));
                    let r = n.col * 13 + 13 * .5,
                        i = n.row * 13,
                        a = 0,
                        o = 0,
                        c = 0,
                        l = 0;
                    for (let e of S) {
                        let t = r - e.x,
                            n = i - e.y;
                        l = Math.hypot(t, n);
                        let s = l > 1e-4 ? t / l : 0,
                            u = l > 1e-4 ? n / l : 0,
                            d = Math.exp(-Math.abs(l - e.radius) / e.band),
                            f = Math.exp(-Math.abs(l - (e.radius - 13 * 3.2)) / (e.band * 1.25)),
                            p = Math.exp(-Math.abs(l - (e.radius - 13 * 6.2)) / (e.band * 1.4)),
                            m = l * .065 - e.radius * .09,
                            h = d + f * .82 + p * .62,
                            g = Math.sin(m) * .1 * h,
                            _ = Math.max(0, h + g) * e.strength;
                        a += _;
                        let v = (d * 1.1 + f * .78 + p * .48) * 13 * .7 * e.strength;
                        o += s * v, c += u * v
                    }
                    let f = r + o,
                        m = i + c,
                        h = W(1 - m / (u * 1.06), .22, 1),
                        g = W(a * (.82 + .12 * t), 0, 1) * h,
                        v = Math.floor(n.glyphOffset + e / 220 + n.drift * 4 + l * .045 + S[2].radius * .04 + g * 19) % 19,
                        y = Be[(v + 19) % 19],
                        b = (n.hueOffset + e * .045 + g * 90) % 360,
                        x = _ ? 78 : 46;
                    if (g < .006) continue;
                    let C = W(.05 + g * .72, 0, .86);
                    s.fillStyle = `hsla(${b}, 100%, ${x}%, ${C})`, s.shadowBlur = 4 + g * 8, s.shadowColor = `hsla(${b}, 100%, ${_?72:46}%, ${.2+g*.24})`, s.fillText(y, f, m)
                }
                s.shadowBlur = 0, s.shadowColor = `transparent`, s.globalAlpha = 1
            },
            M = e => {
                if (!g) {
                    h = 0;
                    return
                }
                if (e - m < 41.666666666666664) {
                    h = window.requestAnimationFrame(M);
                    return
                }
                m = e, s.globalCompositeOperation = `source-over`, s.fillStyle = v, s.fillRect(0, 0, l, u), A(), k(), j(e), h = window.requestAnimationFrame(M)
            },
            N = () => {
                let e = !document.hidden;
                if (e !== g) {
                    if (g = e, !g) {
                        window.cancelAnimationFrame(h), h = 0;
                        return
                    }
                    m = 0, h = window.requestAnimationFrame(M)
                }
            };
        O(), g && (h = window.requestAnimationFrame(M));
        let P = f({
            axis: `width`,
            debounce: !0,
            target: i,
            onChange: () => {
                O()
            }
        });
        return document.addEventListener(`visibilitychange`, N), () => {
            g = !1, P?.(), document.removeEventListener(`visibilitychange`, N), window.cancelAnimationFrame(h)
        }
    }, [r, n]), (0, ze.jsx)(`div`, {
        ref: e,
        "aria-hidden": !0,
        className: P(`pointer-events-none absolute inset-x-0 top-0 z-0 overflow-hidden`, K),
        style: {
            backgroundColor: `var(--token-main-surface-primary)`,
            maskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 62%, rgba(0,0,0,0.7) 82%, rgba(0,0,0,0) 100%)`,
            WebkitMaskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 62%, rgba(0,0,0,0.7) 82%, rgba(0,0,0,0) 100%)`
        },
        children: (0, ze.jsx)(`canvas`, {
            ref: t,
            id: `cyber-ambient-overlay-canvas`,
            className: P(`absolute inset-x-0 top-0 w-full`, K),
            style: {
                opacity: i ? .68 : .72
            }
        })
    })
}
var G, ze, K, Be, Ve = e((() => {
    r(), a(), d(), M(), S(), G = t(re()), ze = R(), K = `h-[420px] md:h-[500px]`, Be = `.:-=+*#%@<>/\\[]{}01`
}));

function He(e) {
    return (0, J.jsx)(`a`, {
        href: `https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/`,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `text-token-text-primary underline underline-offset-4`,
        children: e
    })
}

function Ue(e) {
    return (0, J.jsx)(`a`, {
        className: `text-token-text-primary underline underline-offset-4`,
        href: De(),
        target: `_blank`,
        rel: `noopener noreferrer`,
        children: e
    })
}

function We(e) {
    let {
        id: t,
        icon: n,
        title: r,
        body: i
    } = e;
    return (0, J.jsxs)(`div`, {
        className: `shadow-elevation-01 border-token-border-default bg-token-bg-primary flex h-full w-full flex-col gap-3 rounded-3xl border p-6`,
        children: [(0, J.jsx)(n, {
            className: `h-6 w-6`
        }), (0, J.jsx)(`div`, {
            className: `text-lg font-semibold`,
            children: r
        }), (0, J.jsx)(`div`, {
            className: `text-token-text-secondary text-sm`,
            children: i
        })]
    }, t)
}
var q, J, Ge, Ke, qe, Je, Ye, Xe = e((() => {
    q = U(), n(), me(), ve(), he(), we(), Se(), be(), s(), Ve(), je(), ke(), S(), te(), J = R(), Ge = `mx-auto max-w-(--breakpoint-2xl) px-4 md:px-8`, Ke = z({
        complete: {
            id: `cyberVerificationPage.final_p0.card.step.status.complete`,
            defaultMessage: `Completed`
        },
        pending: {
            id: `cyberVerificationPage.final_p0.card.step.status.pending`,
            defaultMessage: `Pending`
        },
        warning: {
            id: `cyberVerificationPage.final_p0.card.step.status.warning`,
            defaultMessage: `Needs attention`
        },
        failed: {
            id: `cyberVerificationPage.final_p0.card.step.status.failed`,
            defaultMessage: `Failed`
        },
        unknown: {
            id: `cyberVerificationPage.final_p0.card.step.status.unknown`,
            defaultMessage: `Not checked`
        }
    }), qe = e => {
        "use forget";
        let t = (0, q.c)(15),
            {
                label: n,
                status: r
            } = e,
            i;
        t[0] === r ? i = t[1] : (i = r === `complete` ? (0, J.jsx)(ge, {
            "aria-hidden": `true`,
            className: `icon text-green-600 dark:text-green-400`
        }) : r === `warning` ? (0, J.jsx)(u, {
            "aria-hidden": `true`,
            className: `icon text-token-icon-status-warning`,
            "data-testid": `cyber-checklist-warning-icon`
        }) : r === `failed` ? (0, J.jsx)(ye, {
            "aria-hidden": `true`,
            className: `icon interactive-label-warning-secondary`
        }) : (0, J.jsx)(`span`, {
            "aria-hidden": `true`,
            className: `border-token-border-heavy h-4 w-4 rounded-full border`
        }), t[0] = r, t[1] = i);
        let a = Ke[r],
            o;
        t[2] === a ? o = t[3] : (o = (0, J.jsx)(`span`, {
            className: `sr-only`,
            children: (0, J.jsx)(B, {
                ...a
            })
        }), t[2] = a, t[3] = o);
        let s;
        t[4] !== i || t[5] !== o ? (s = (0, J.jsxs)(`span`, {
            className: `relative flex h-5 w-5 shrink-0 items-center justify-center`,
            children: [i, o]
        }), t[4] = i, t[5] = o, t[6] = s) : s = t[6];
        let c = r === `complete` || r === `warning` ? `text-token-text-primary` : r === `failed` ? `interactive-label-warning-secondary` : `text-token-text-secondary`,
            l;
        t[7] === c ? l = t[8] : (l = P(`text-sm`, c), t[7] = c, t[8] = l);
        let d;
        t[9] !== n || t[10] !== l ? (d = (0, J.jsx)(`span`, {
            className: l,
            children: n
        }), t[9] = n, t[10] = l, t[11] = d) : d = t[11];
        let f;
        return t[12] !== s || t[13] !== d ? (f = (0, J.jsxs)(`li`, {
            className: `flex items-center gap-3 py-3`,
            children: [s, d]
        }), t[12] = s, t[13] = d, t[14] = f) : f = t[14], f
    }, Je = e => {
        "use forget";
        let t = (0, q.c)(24),
            {
                isAuthenticated: n,
                children: r,
                information: i
            } = e,
            a = se(),
            o;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, J.jsx)(Re, {}), t[0] = o) : o = t[0];
        let s;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (s = P(Ge, `flex items-center justify-between`), t[1] = s) : s = t[1];
        let c;
        t[2] === a ? c = t[3] : (c = a.formatMessage({
            id: `cyberVerificationPage.homeLinkLabel`,
            defaultMessage: `ChatGPT Home`
        }), t[2] = a, t[3] = c);
        let l;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, J.jsx)(pe, {}), t[4] = l) : l = t[4];
        let u;
        t[5] === c ? u = t[6] : (u = (0, J.jsx)(`a`, {
            href: `/`,
            "aria-label": c,
            children: l
        }), t[5] = c, t[6] = u);
        let d;
        t[7] === n ? d = t[8] : (d = n && (0, J.jsx)(Me, {}), t[7] = n, t[8] = d);
        let f;
        t[9] !== u || t[10] !== d ? (f = (0, J.jsx)(`nav`, {
            className: `bg-token-bg-primary/90 fixed start-0 end-0 top-0 z-20 border-b border-transparent py-4 backdrop-blur-sm`,
            children: (0, J.jsxs)(`div`, {
                className: s,
                children: [u, d]
            })
        }), t[9] = u, t[10] = d, t[11] = f) : f = t[11];
        let p;
        t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, J.jsx)(`h1`, {
            className: `text-4xl font-semibold tracking-tight text-balance md:text-5xl`,
            children: (0, J.jsx)(B, {
                id: `cyberVerificationPage.daybreak.title`,
                defaultMessage: `Daybreak`
            })
        }), t[12] = p) : p = t[12];
        let m;
        t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, J.jsx)(`p`, {
            className: `text-token-text-secondary mt-4 max-w-[500px] text-base leading-6 text-balance`,
            children: (0, J.jsx)(B, {
                id: `cyberVerificationPage.daybreak.hero.subtitleWithLearnMore`,
                defaultMessage: `Daybreak enables advanced capabilities for authorized cybersecurity work <learnMore>Learn more</learnMore>`,
                values: {
                    learnMore: He
                }
            })
        }), t[13] = m) : m = t[13];
        let h;
        t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, J.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, J.jsx)(B, {
                id: `cyberVerificationPage.daybreak.teamCta`,
                defaultMessage: `Need Daybreak access for your organization?`
            })
        }), t[14] = h) : h = t[14];
        let g;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, J.jsxs)(`footer`, {
            className: `mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center`,
            children: [h, (0, J.jsx)(D, {
                as: `a`,
                to: `https://openai.com/form/enterprise-trusted-access-for-cyber`,
                openNewTab: !0,
                rel: `noopener noreferrer`,
                size: `large`,
                color: `ghost`,
                className: `px-5 py-2.5 text-sm`,
                children: (0, J.jsx)(B, {
                    id: `cyberVerificationPage.teamCtaText`,
                    defaultMessage: `Request access`
                })
            })]
        }), t[15] = g) : g = t[15];
        let _;
        t[16] === r ? _ = t[17] : (_ = (0, J.jsx)(`main`, {
            className: `relative z-10 flex flex-col items-center px-4 pt-44 pb-10`,
            children: (0, J.jsxs)(`div`, {
                className: `flex w-full max-w-[640px] flex-col items-center text-center`,
                children: [p, m, r, g]
            })
        }), t[16] = r, t[17] = _);
        let v;
        t[18] === i ? v = t[19] : (v = (0, J.jsx)(`div`, {
            className: `relative z-10`,
            children: i
        }), t[18] = i, t[19] = v);
        let y;
        return t[20] !== _ || t[21] !== v || t[22] !== f ? (y = (0, J.jsxs)(`div`, {
            className: `font-oai text-token-text-primary relative isolate min-h-dvh w-screen overflow-hidden`,
            children: [o, f, _, v]
        }), t[20] = _, t[21] = v, t[22] = f, t[23] = y) : y = t[23], y
    }, Ye = e => {
        "use forget";
        let t = (0, q.c)(11),
            {
                includeAccountSecurity: n,
                sectionRef: r
            } = e,
            i;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = {
            id: `identity`,
            icon: Ce,
            title: (0, J.jsx)(B, {
                id: `cyberVerificationPage.value1Title`,
                defaultMessage: `Why do I need to verify?`
            }),
            body: (0, J.jsx)(B, {
                id: `cyberVerificationPage.value1Body`,
                defaultMessage: `We verify identity to enable developers to continue doing authorized security work, while reducing misuse risk.`
            })
        }, t[0] = i) : i = t[0];
        let a;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = {
            id: `verification-flow`,
            icon: xe,
            title: (0, J.jsx)(B, {
                id: `cyberVerificationPage.value3Title`,
                defaultMessage: `The verification flow`
            }),
            body: (0, J.jsx)(B, {
                id: `cyberVerificationPage.daybreak.value3Body`,
                defaultMessage: `After setting up account security, complete an identity check. Most users finish the identity check in a few minutes.`
            })
        }, t[1] = a) : a = t[1];
        let o;
        t[2] === n ? o = t[3] : (o = [i, a, ...n ? [{
            id: `account-security`,
            icon: _e,
            title: (0, J.jsx)(B, {
                id: `cyberVerificationPage.value2Title`,
                defaultMessage: `What is Advanced Account Security?`
            }),
            body: (0, J.jsx)(B, {
                id: `cyberVerificationPage.daybreak.accountSecurity.body`,
                defaultMessage: `Advanced Account Security helps protect your account from takeover. While it's enabled, you'll sign in with an enrolled passkey or security key. Password sign-in, email and SMS sign-in codes, and email-based account recovery are disabled. Your conversations won't be used to train our models. <learnMore>Learn more</learnMore>`,
                values: {
                    learnMore: Ue
                }
            })
        }] : []], t[2] = n, t[3] = o);
        let s = o,
            c;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (c = P(Ge, `flex flex-col gap-8 py-16 md:py-20`), t[4] = c) : c = t[4];
        let l;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, J.jsx)(`h2`, {
            className: `text-center text-2xl md:text-3xl`,
            children: (0, J.jsx)(B, {
                id: `cyberVerificationPage.valueTitle`,
                defaultMessage: `How it works`
            })
        }), t[5] = l) : l = t[5];
        let u;
        t[6] === s ? u = t[7] : (u = (0, J.jsx)(`div`, {
            className: `mx-auto grid max-w-[900px] gap-6 md:grid-cols-2 md:place-items-center`,
            children: s.map(We)
        }), t[6] = s, t[7] = u);
        let d;
        return t[8] !== r || t[9] !== u ? (d = (0, J.jsxs)(`section`, {
            ref: r,
            className: c,
            children: [l, u]
        }), t[8] = r, t[9] = u, t[10] = d) : d = t[10], d
    }
}));

function Ze() {
    return typeof window < `u` && window.localStorage !== void 0
}

function Qe(e) {
    return e ? `${nt}/${e}` : null
}

function $e(e) {
    let t = Qe(e);
    return !Ze() || t == null ? null : window.localStorage.getItem(t)
}

function et(e, t) {
    let n = Qe(t);
    !Ze() || n == null || window.localStorage.setItem(n, e)
}

function tt(e) {
    let t = Qe(e);
    !Ze() || t == null || window.localStorage.removeItem(t)
}
var nt, rt = e((() => {
        nt = `cyberVerificationInquiryId`
    })),
    it, at, ot, st = e((() => {
        _(), l(), ce(), N(), E(), O(), rt(), ae(), it = () => ie(async () => {
            let {
                default: e
            } = await import(`./f21b234b-ivk3254dnrpbp8ud.js`).then(e => t(e.default));
            return {
                default: e
            }
        }, __vite__mapDeps([0, 1])).then(({
            default: e
        }) => e.Client), at = e => {
            let t = null,
                n = !1;

            function r() {
                n = !0, t?.destroy(), t = null
            }
            async function i() {
                try {
                    let i = j()?.user?.id;
                    it().catch(() => {});
                    let a = await ot().mutate();
                    if (a.isError || !a.data) {
                        if (n) return;
                        r(), e.onSessionError?.(a.error);
                        return
                    }
                    let {
                        id: o
                    } = a.data;
                    if (et(o, i), n) return;
                    let s = await ue({
                        ...e,
                        inquiryId: o,
                        onCancel: (...t) => {
                            r(), e?.onCancel?.(...t)
                        },
                        onComplete: (...t) => {
                            r(), e?.onComplete?.(...t)
                        }
                    }, () => !n);
                    if (n) {
                        s.destroy();
                        return
                    }
                    t = s, t.open(), fe(t)
                } catch (t) {
                    if (n) return;
                    r(), e.onSessionError?.(t)
                }
            }
            return i(), () => r()
        }, ot = I(() => g({
            mutationFn: async () => {
                let e = y(),
                    t = {};
                return e && (t[`Chatgpt-Account-Id`] = e.id), await b.safePost(`/compliance/cyber_verification/persona/inquiries`, {
                    additionalHeaders: t,
                    requestBody: {
                        enabled: !0
                    }
                })
            }
        }))
    }));
async function ct(e, t) {
    let n = Date.now(),
        r = await e();
    for (let i of [1e4, 2e4, 3e4, 4e4]) {
        if (r?.metadata?.verification_status !== `pending` || !t() || (await new Promise(e => {
                setTimeout(e, Math.max(0, n + i - Date.now()))
            }), !t())) break;
        r = await e()
    }
    return r
}
var lt = e((() => {}));

function ut(e) {
    return Number.isSafeInteger(e) && e >= 0
}
async function dt(e, t) {
    try {
        let n = () => b.safePost(`/cyber_verification/refresh_status`, {
            requestBody: {
                inquiry_id: e
            }
        });
        return {
            data: t ? await ct(n, t) : await n(),
            inquiryId: e
        }
    } catch (t) {
        throw new Ct(t, e)
    }
}

function ft() {
    return j()?.user?.id
}

function pt(e) {
    return typeof e == `object` && !!e && !Array.isArray(e)
}

function mt(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}

function ht(e) {
    if (e === null) return !0;
    if (!pt(e)) return !1;
    let t = t => !mt(e, t) || e[t] === null || typeof e[t] == `string`,
        n = e.verification_status;
    return t(`inquiry_id`) && t(`finalized_at`) && (!mt(e, `verification_status`) || n === null || n === `pending` || n === `verified` || n === `failed` || n === `blocked`)
}

function gt(e) {
    return pt(e) ? !mt(e, `metadata`) || ht(e.metadata) : !1
}

function _t(e) {
    if (!gt(e)) return {
        name: `unavailable`
    };
    let t = mt(e, `aas`),
        n = mt(e, `passkeys`);
    if (!t && !n || t && n && e.aas === null && e.passkeys === null) return {
        name: `gate-off`
    };
    if (!t || !n) return {
        name: `unavailable`
    };
    let {
        aas: r,
        passkeys: i
    } = e;
    if (!pt(r) || !pt(i) || typeof r.status != `boolean` || typeof i.qualifying_count != `number` || typeof i.non_qualifying_count != `number` || !ut(i.qualifying_count) || !ut(i.non_qualifying_count)) return {
        name: `unavailable`
    };
    let a = i.qualifying_count >= 2 && i.non_qualifying_count === 0;
    return r.status ? i.qualifying_count + i.non_qualifying_count === 0 ? {
        name: `no_passkeys`
    } : i.non_qualifying_count > 0 ? {
        name: `hardware_backing_unconfirmed`
    } : i.qualifying_count < 2 ? {
        name: `insufficient_hardware_keys`
    } : {
        name: `eligible`
    } : {
        name: `not_enrolled`,
        hardwareKeysSatisfied: a
    }
}

function vt(e) {
    if (!gt(e)) return null;
    switch (e.individual_eligibility_status) {
        case `eligible`:
        case `non_social_email_domain`:
        case `business_account`:
        case `unavailable`:
            return e.individual_eligibility_status;
        default:
            return null
    }
}

function yt(e) {
    "use forget";
    let t = (0, St.c)(36),
        n;
    t[0] === e?.isUnauthenticatedOverride ? n = t[1] : (n = e?.isUnauthenticatedOverride ?? !m(), t[0] = e?.isUnauthenticatedOverride, t[1] = n);
    let r = n,
        [i, a] = (0, Y.useState)(null),
        [o, s] = (0, Y.useState)(!1),
        c;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = {
        name: `gate-off`
    }, t[2] = c) : c = t[2];
    let [l, u] = (0, Y.useState)(c), [d, f] = (0, Y.useState)(null), [p, g] = (0, Y.useState)(!1), [_, v] = (0, Y.useState)(!1), [y, b] = (0, Y.useState)(0), x = (0, Y.useRef)(!0), S = (0, Y.useRef)(0), C = (0, Y.useRef)(null), w = (0, Y.useRef)(0), T;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (T = {
        mutationFn: async e => {
            let {
                inquiryId: t,
                authUserId: n,
                requestId: r,
                retryPending: i
            } = e;
            try {
                return await dt(t, i ? () => C.current?.requestId === r && S.current === r && ft() === n && $e(n) === t : void 0)
            } catch (e) {
                let i = e,
                    a = i instanceof Ct ? i.originalError : i;
                if (t !== null && a instanceof h && a.status === 403 && r === S.current && ft() === n && $e(n) === t) try {
                    let e = await dt(null);
                    return r === S.current && ft() === n && $e(n) === t && tt(n), e
                } catch {
                    throw i
                }
                throw i
            }
        },
        onSettled: (e, t, n) => {
            let {
                requestId: r
            } = n;
            C.current?.requestId === r && (C.current = null)
        },
        onSuccess: (e, t) => {
            let {
                data: n,
                inquiryId: r
            } = e, {
                authUserId: i,
                requestId: o
            } = t;
            if (o !== S.current) return;
            if (ft() !== i || $e(i) !== r) {
                b(xt);
                return
            }
            if (v(!1), !gt(n)) {
                a(null), s(!1), u({
                    name: `unavailable`
                }), f(null), g(!0);
                return
            }
            let c = _t(n),
                l = vt(n),
                d = n.metadata ?? null;
            d?.verification_status === `verified` ? tt(i) : d?.inquiry_id && et(d.inquiry_id, i), a(d), s(n.daybreak_access_enabled === !0), u(c), f(l), g(!0)
        },
        onError: (e, t) => {
            let {
                authUserId: n,
                inquiryId: r,
                requestId: i
            } = t, o = e instanceof Ct ? e.originalError : e, s = e instanceof Ct ? e.inquiryId : r;
            if (i === S.current) {
                if (ft() !== n || $e(n) !== s) {
                    b(bt);
                    return
                }
                if (u({
                        name: `unavailable`
                    }), o instanceof h && o.status === 503) {
                    g(!0);
                    return
                }
                a(null), v(!0), g(!0)
            }
        }
    }, t[3] = T) : T = t[3];
    let E = H(T),
        {
            mutate: D
        } = E,
        O;
    t[4] === D ? O = t[5] : (O = e => {
        let {
            retryPending: t
        } = e === void 0 ? {} : e, n = t !== void 0 && t, r = ft(), i = $e(r);
        if (!n && C.current?.requestId === S.current && C.current.authUserId === r && C.current.inquiryId === i) return;
        let a = S.current + 1;
        S.current = a, n && (C.current = {
            requestId: a,
            inquiryId: i,
            authUserId: r
        }), D({
            inquiryId: i,
            authUserId: r,
            requestId: a,
            retryPending: n
        })
    }, t[4] = D, t[5] = O);
    let k = O,
        A, j;
    t[6] !== r || t[7] !== k ? (A = () => (!r && x.current && (x.current = !1, k()), () => {
        C.current?.requestId === S.current && (S.current += 1), C.current = null
    }), j = [r, k], t[6] = r, t[7] = k, t[8] = A, t[9] = j) : (A = t[8], j = t[9]), (0, Y.useEffect)(A, j);
    let M, N;
    t[10] !== r || t[11] !== k || t[12] !== y ? (M = () => {
        r || y === w.current || (w.current = y, k())
    }, N = [r, k, y], t[10] = r, t[11] = k, t[12] = y, t[13] = M, t[14] = N) : (M = t[13], N = t[14]), (0, Y.useEffect)(M, N);
    let P, F;
    t[15] === r ? (P = t[16], F = t[17]) : (P = () => {
        r && (x.current = !0, S.current += 1, g(!1), v(!1), a(null), s(!1), u({
            name: `gate-off`
        }), f(null))
    }, F = [r], t[15] = r, t[16] = P, t[17] = F), (0, Y.useEffect)(P, F);
    let I;
    bb0: {
        if (r) {
            let e;
            t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                name: `logged-out`
            }, t[18] = e) : e = t[18], I = e;
            break bb0
        }
        if (!p) {
            let e;
            t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                name: `loading`
            }, t[19] = e) : e = t[19], I = e;
            break bb0
        }
        if (_) {
            let e;
            t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                name: `refresh-error`
            }, t[20] = e) : e = t[20], I = e;
            break bb0
        }
        if (!i) {
            let e;
            t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                name: `needs-verification`
            }, t[21] = e) : e = t[21], I = e;
            break bb0
        }
        let e = i.inquiry_id ?? null;
        switch (i.verification_status) {
            case `verified`: {
                let n;
                t[22] === e ? n = t[23] : (n = {
                    name: `verified`,
                    inquiryId: e
                }, t[22] = e, t[23] = n), I = n;
                break bb0
            }
            case `failed`:
            case `blocked`: {
                let n;
                t[24] === e ? n = t[25] : (n = {
                    name: `failed`,
                    inquiryId: e
                }, t[24] = e, t[25] = n), I = n;
                break bb0
            }
            case `pending`: {
                let n;
                t[26] === e ? n = t[27] : (n = {
                    name: `pending`,
                    inquiryId: e
                }, t[26] = e, t[27] = n), I = n;
                break bb0
            }
            default: {
                let e;
                t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                    name: `needs-verification`
                }, t[28] = e) : e = t[28], I = e
            }
        }
    }
    let ee = I,
        L;
    return t[29] !== o || t[30] !== d || t[31] !== l || t[32] !== k || t[33] !== E.isPending || t[34] !== ee ? (L = {
        verificationState: ee,
        daybreakAccessEnabled: o,
        personaEligibilityState: l,
        individualEligibilityStatus: d,
        refreshStatus: k,
        isRefreshing: E.isPending
    }, t[29] = o, t[30] = d, t[31] = l, t[32] = k, t[33] = E.isPending, t[34] = ee, t[35] = L) : L = t[35], L
}

function bt(e) {
    return e + 1
}

function xt(e) {
    return e + 1
}
var St, Y, Ct, wt = e((() => {
    St = U(), p(), E(), T(), O(), oe(), Y = t(re()), rt(), lt(), o(), Ct = class extends Error {
        constructor(e, t) {
            super(`Cyber verification status refresh failed`), v(this, `originalError`, void 0), v(this, `inquiryId`, void 0), this.originalError = e, this.inquiryId = t
        }
    }
}));

function Tt(e) {
    return e instanceof h && e.code === jt ? `organization-required` : e instanceof h && e.code === At ? `precheck-failed` : `unknown`
}

function Et(e) {
    "use forget";
    let t = (0, Dt.c)(134),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let r = n,
        i = se(),
        a = (0, X.useRef)(null),
        [o, s] = (0, X.useState)(0),
        [c, l] = (0, X.useState)(!1),
        [u, d] = (0, X.useState)(!1),
        [f, p] = (0, X.useState)(null),
        {
            verificationState: h,
            personaEligibilityState: g,
            individualEligibilityStatus: _,
            refreshStatus: v,
            isRefreshing: y
        } = yt(),
        b;
    t[2] === r.previewStateOverride?.isAuthenticated ? b = t[3] : (b = r.previewStateOverride?.isAuthenticated ?? m(), t[2] = r.previewStateOverride?.isAuthenticated, t[3] = b);
    let x = b,
        S = r.previewStateOverride !== void 0,
        C = r.previewStateOverride?.verificationState ?? h,
        w = r.previewStateOverride?.personaEligibilityState ?? g,
        T = S ? r.previewStateOverride?.individualEligibilityStatus ?? null : _,
        E = r.previewStateOverride?.isRefreshing ?? y,
        O = c && !u || E,
        k = C.name === `loading`,
        j = C.name === `pending` || C.name === `failed`,
        M = C.name === `failed`,
        N = C.name === `verified`,
        F = f === `organization-required` || T === `business_account` || T === `non_social_email_domain`,
        I;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (I = A(Nt), t[4] = I) : I = t[4];
    let ee = I,
        L = ee && w.name !== `gate-off`,
        R = L && w.name === `eligible`,
        z = L && w.name === `unavailable`,
        V = !F && (!L || R),
        te;
    t[5] === w.name ? te = t[6] : (te = w.name === `not_enrolled` ? De({
        originator: Ee
    }) : Oe(), t[5] = w.name, t[6] = te);
    let ne = te,
        re = ee && x && L && !k && !F,
        ie = N && !F ? Q.verifiedTitle : Q.title,
        ae = F ? Q.organizationRequiredDescription : N ? Q.verifiedDescription : M ? Q.failedDescription : j ? Q.retryDescription : Q.description,
        H = F ? Q.teamCtaText : N ? Q.verifiedCta : x ? z ? Q.retryEligibilityCta : L && !R ? Q.openSecuritySettingsCta : !L && f ? Q.primaryCta : M ? Q.failedCta : j ? Q.retryCta : Q.primaryCta : Q.loginCta,
        oe = N && !F ? Q.verifiedDisclaimer : Q.disclaimer,
        U = F ? Q.sessionOrganizationRequiredError : f === `precheck-failed` ? Q.sessionPrecheckError : Q.sessionStartError,
        ce = w.name === `eligible` ? Q.eligibilityEligibleDescription : w.name === `not_enrolled` ? Q.eligibilityNotEnrolledDescription : w.name === `no_passkeys` ? Q.eligibilityNoPasskeysDescription : w.name === `hardware_backing_unconfirmed` ? Q.eligibilityHardwareBackingUnconfirmedDescription : w.name === `insufficient_hardware_keys` ? Q.eligibilityInsufficientHardwareKeysDescription : Q.eligibilityUnavailableDescription,
        le, ue;
    t[7] !== S || t[8] !== v || t[9] !== x ? (le = () => {
        if (!x || S) return;
        let e = () => {
            v()
        };
        return window.addEventListener(`focus`, e), () => {
            window.removeEventListener(`focus`, e)
        }
    }, ue = [S, v, x], t[7] = S, t[8] = v, t[9] = x, t[10] = le, t[11] = ue) : (le = t[10], ue = t[11]), (0, X.useEffect)(le, ue);
    let de, fe;
    t[12] !== V || t[13] !== c ? (de = () => {
        !c || V || (l(!1), d(!1))
    }, fe = [V, c], t[12] = V, t[13] = c, t[14] = de, t[15] = fe) : (de = t[14], fe = t[15]), (0, X.useEffect)(de, fe);
    let me, he;
    t[16] !== V || t[17] !== S || t[18] !== v || t[19] !== x || t[20] !== c ? (he = () => {
        if (!x || !c || !V) return;
        let e = !0,
            t = at({
                onLoad: () => {
                    e && (p(null), d(!0))
                },
                onComplete: () => {
                    e && (l(!1), d(!1), p(null), S || v({
                        retryPending: !0
                    }))
                },
                onCancel: () => {
                    e && (l(!1), d(!1))
                },
                onSessionError: t => {
                    if (!e) return;
                    let n = Tt(t);
                    l(!1), d(!1), p(n), n === `precheck-failed` && !S && v()
                }
            });
        return () => {
            e = !1, t()
        }
    }, me = [x, c, V, S, v], t[16] = V, t[17] = S, t[18] = v, t[19] = x, t[20] = c, t[21] = me, t[22] = he) : (me = t[21], he = t[22]), (0, X.useEffect)(he, me);
    let ge;
    t[23] === i ? ge = t[24] : (ge = i.formatMessage(Q.faq1Question), t[23] = i, t[24] = ge);
    let _e;
    t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (_e = (0, Z.jsx)(B, {
        ...Q.faq1Answer
    }), t[25] = _e) : _e = t[25];
    let ve;
    t[26] === ge ? ve = t[27] : (ve = {
        question: ge,
        answer: _e
    }, t[26] = ge, t[27] = ve);
    let ye;
    t[28] === i ? ye = t[29] : (ye = i.formatMessage(Q.faq2Question), t[28] = i, t[29] = ye);
    let be;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (be = (0, Z.jsx)(B, {
        ...Q.faq2Answer
    }), t[30] = be) : be = t[30];
    let xe;
    t[31] === ye ? xe = t[32] : (xe = {
        question: ye,
        answer: be
    }, t[31] = ye, t[32] = xe);
    let Se;
    t[33] === i ? Se = t[34] : (Se = i.formatMessage(Q.faq3Question), t[33] = i, t[34] = Se);
    let Ce;
    t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (Ce = (0, Z.jsx)(B, {
        ...Q.faq3Answer
    }), t[35] = Ce) : Ce = t[35];
    let we;
    t[36] === Se ? we = t[37] : (we = {
        question: Se,
        answer: Ce
    }, t[36] = Se, t[37] = we);
    let Te;
    t[38] !== ve || t[39] !== xe || t[40] !== we ? (Te = [ve, xe, we], t[38] = ve, t[39] = xe, t[40] = we, t[41] = Te) : Te = t[41];
    let ke = Te,
        Ae, je;
    t[42] === Symbol.for(`react.memo_cache_sentinel`) ? (Ae = P(Ot, `mx-auto flex max-w-[760px] flex-col gap-8 py-10 md:py-16`), je = (0, Z.jsx)(`h2`, {
        className: P(kt, `text-center`),
        children: (0, Z.jsx)(B, {
            ...Q.faqTitle
        })
    }), t[42] = Ae, t[43] = je) : (Ae = t[42], je = t[43]);
    let Ne;
    t[44] !== ke || t[45] !== o ? (Ne = (0, Z.jsxs)(`section`, {
        id: `faq`,
        className: Ae,
        children: [je, (0, Z.jsx)(`div`, {
            children: ke.map((e, t) => (0, Z.jsx)(Pe, {
                id: `cyber-faq-${t}`,
                question: e.question,
                answer: e.answer,
                isOpen: o === t,
                onToggle: () => s(e => e === t ? -1 : t)
            }, e.question))
        })]
    }), t[44] = ke, t[45] = o, t[46] = Ne) : Ne = t[46];
    let W = Ne,
        Fe;
    t[47] === re ? Fe = t[48] : (Fe = (0, Z.jsx)(Ye, {
        includeAccountSecurity: re,
        sectionRef: a
    }), t[47] = re, t[48] = Fe);
    let Ie;
    t[49] !== W || t[50] !== Fe ? (Ie = (0, Z.jsxs)(Z.Fragment, {
        children: [Fe, W]
    }), t[49] = W, t[50] = Fe, t[51] = Ie) : Ie = t[51];
    let Le = Ie;
    if (re) {
        let e = w.name === `eligible` || w.name === `no_passkeys` || w.name === `hardware_backing_unconfirmed` || w.name === `insufficient_hardware_keys`,
            n = w.name === `eligible` || w.name === `not_enrolled` && w.hardwareKeysSatisfied,
            r = N && R,
            i = N ? `complete` : M ? `failed` : `pending`,
            a = z ? `unknown` : e ? `complete` : `pending`,
            o = z ? `unknown` : n ? `complete` : w.name === `hardware_backing_unconfirmed` ? `warning` : `pending`,
            s = r ? Q.finalP0VerifiedCardTitle : Q.finalP0CardTitle,
            c = r ? Q.finalP0CardDescriptionVerified : z ? ce : w.name === `not_enrolled` ? Q.finalP0CardDescriptionNotEnrolled : w.name === `hardware_backing_unconfirmed` ? Q.eligibilityHardwareBackingUnconfirmedDescription : R ? M ? Q.finalP0CardDescriptionFailed : j ? Q.finalP0CardDescriptionPending : Q.finalP0CardDescriptionEligible : Q.finalP0CardDescriptionHardwareKeysRequired,
            u = w.name === `not_enrolled` ? Q.finalP0SetupAasCta : w.name === `hardware_backing_unconfirmed` ? Q.openSecuritySettingsCta : !R && !z ? Q.finalP0AddSecurityKeysCta : H,
            d = z ? `polite` : void 0,
            m = z ? `alert` : void 0,
            h;
        t[52] === s ? h = t[53] : (h = (0, Z.jsx)(`h2`, {
            className: `text-xl font-semibold tracking-tight`,
            children: (0, Z.jsx)(B, {
                ...s
            })
        }), t[52] = s, t[53] = h);
        let g;
        t[54] === c ? g = t[55] : (g = (0, Z.jsx)(`p`, {
            className: `text-token-text-secondary mt-2 text-sm leading-5`,
            children: (0, Z.jsx)(B, {
                ...c
            })
        }), t[54] = c, t[55] = g);
        let _;
        t[56] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, Z.jsx)(B, {
            ...Q.finalP0AasStep
        }), t[56] = _) : _ = t[56];
        let y;
        t[57] === a ? y = t[58] : (y = (0, Z.jsx)(qe, {
            status: a,
            label: _
        }), t[57] = a, t[58] = y);
        let b;
        t[59] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, Z.jsx)(B, {
            ...Q.finalP0HardwareKeysStep
        }), t[59] = b) : b = t[59];
        let x;
        t[60] === o ? x = t[61] : (x = (0, Z.jsx)(qe, {
            status: o,
            label: b
        }), t[60] = o, t[61] = x);
        let S;
        t[62] === C.name ? S = t[63] : (S = C.name === `pending` ? (0, Z.jsx)(B, {
            ...Q.finalP0IdentityStepPending
        }) : (0, Z.jsx)(B, {
            ...Q.finalP0IdentityStep
        }), t[62] = C.name, t[63] = S);
        let T;
        t[64] !== i || t[65] !== S ? (T = (0, Z.jsx)(qe, {
            status: i,
            label: S
        }), t[64] = i, t[65] = S, t[66] = T) : T = t[66];
        let k;
        t[67] !== y || t[68] !== x || t[69] !== T ? (k = (0, Z.jsxs)(`ol`, {
            className: `border-token-border-default mt-5 divide-y border-y`,
            children: [y, x, T]
        }), t[67] = y, t[68] = x, t[69] = T, t[70] = k) : k = t[70];
        let A;
        t[71] !== f || t[72] !== U ? (A = f ? (0, Z.jsx)(`div`, {
            role: `alert`,
            "aria-live": `polite`,
            className: `bg-token-bg-critical-subtle interactive-label-warning-secondary border-token-border-default mt-4 rounded-2xl border px-4 py-3 text-sm leading-relaxed`,
            children: (0, Z.jsx)(B, {
                ...U,
                values: {
                    supportLink: Pt
                }
            })
        }) : null, t[71] = f, t[72] = U, t[73] = A) : A = t[73];
        let P;
        t[74] !== V || t[75] !== u || t[76] !== r || t[77] !== v || t[78] !== z || t[79] !== R || t[80] !== O || t[81] !== E || t[82] !== ne || t[83] !== f ? (P = (0, Z.jsx)(`div`, {
            className: `mt-5`,
            children: r ? (0, Z.jsx)(D, {
                as: `a`,
                to: `/codex/cloud`,
                size: `large`,
                color: `primary`,
                className: `w-full`,
                children: (0, Z.jsx)(B, {
                    ...Q.verifiedCta
                })
            }) : z ? (0, Z.jsx)(D, {
                type: `button`,
                size: `large`,
                color: `primary`,
                className: `w-full`,
                loading: E,
                onClick: () => {
                    v()
                },
                children: (0, Z.jsx)(B, {
                    ...u
                })
            }) : R ? (0, Z.jsx)(D, {
                type: `button`,
                size: `large`,
                color: `primary`,
                className: `w-full`,
                loading: O,
                visuallyDisabled: f != null,
                onClick: () => {
                    V && (p(null), l(!0))
                },
                children: (0, Z.jsx)(B, {
                    ...u
                })
            }) : (0, Z.jsx)(D, {
                as: `a`,
                to: ne,
                size: `large`,
                color: `primary`,
                className: `w-full`,
                children: (0, Z.jsx)(B, {
                    ...u
                })
            })
        }), t[74] = V, t[75] = u, t[76] = r, t[77] = v, t[78] = z, t[79] = R, t[80] = O, t[81] = E, t[82] = ne, t[83] = f, t[84] = P) : P = t[84];
        let F;
        t[85] !== d || t[86] !== m || t[87] !== h || t[88] !== g || t[89] !== k || t[90] !== A || t[91] !== P ? (F = (0, Z.jsxs)(`section`, {
            "aria-live": d,
            role: m,
            className: `border-token-border-default bg-token-bg-primary mt-8 w-full max-w-[400px] rounded-3xl border px-6 pt-6 pb-5 text-start shadow-[0_12px_32px_rgba(0,0,0,0.06)]`,
            children: [h, g, k, A, P]
        }), t[85] = d, t[86] = m, t[87] = h, t[88] = g, t[89] = k, t[90] = A, t[91] = P, t[92] = F) : F = t[92];
        let I;
        return t[93] !== Le || t[94] !== F ? (I = (0, Z.jsx)(Je, {
            isAuthenticated: !0,
            information: Le,
            children: F
        }), t[93] = Le, t[94] = F, t[95] = I) : I = t[95], I
    }
    let G;
    t[96] === Symbol.for(`react.memo_cache_sentinel`) ? (G = (0, Z.jsx)(Re, {}), t[96] = G) : G = t[96];
    let ze;
    t[97] === Symbol.for(`react.memo_cache_sentinel`) ? (ze = P(Ot, `flex items-center justify-between`), t[97] = ze) : ze = t[97];
    let K;
    t[98] === i ? K = t[99] : (K = i.formatMessage(Q.homeLinkLabel), t[98] = i, t[99] = K);
    let Be;
    t[100] === Symbol.for(`react.memo_cache_sentinel`) ? (Be = (0, Z.jsx)(pe, {}), t[100] = Be) : Be = t[100];
    let Ve;
    t[101] === K ? Ve = t[102] : (Ve = (0, Z.jsx)(`a`, {
        href: `/`,
        "aria-label": K,
        children: Be
    }), t[101] = K, t[102] = Ve);
    let He;
    t[103] === x ? He = t[104] : (He = x ? (0, Z.jsx)(Me, {}) : (0, Z.jsx)(D, {
        as: `a`,
        to: `/auth/login/?next=%2Fcyber`,
        color: `ghost`,
        size: `small`,
        children: (0, Z.jsx)(B, {
            ...Q.loginCta
        })
    }), t[103] = x, t[104] = He);
    let Ue;
    t[105] !== Ve || t[106] !== He ? (Ue = (0, Z.jsx)(`nav`, {
        className: `bg-token-main-surface-primary fixed start-0 end-0 top-0 z-10 border-b border-transparent py-4`,
        children: (0, Z.jsxs)(`div`, {
            className: ze,
            children: [Ve, He]
        })
    }), t[105] = Ve, t[106] = He, t[107] = Ue) : Ue = t[107];
    let We;
    t[108] === Symbol.for(`react.memo_cache_sentinel`) ? (We = P(Ot, `flex flex-col items-center gap-4 pt-16 text-center md:pt-20`), t[108] = We) : We = t[108];
    let q;
    t[109] !== V || t[110] !== ae || t[111] !== oe || t[112] !== v || t[113] !== M || t[114] !== k || t[115] !== F || t[116] !== L || t[117] !== z || t[118] !== R || t[119] !== O || t[120] !== E || t[121] !== x || t[122] !== N || t[123] !== ce || t[124] !== H || t[125] !== ne || t[126] !== ie || t[127] !== f || t[128] !== U ? (q = (0, Z.jsx)(`section`, {
        className: We,
        children: k ? (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(`div`, {
                className: `bg-token-bg-tertiary h-12 w-[min(620px,90%)] animate-pulse rounded-xl`
            }), (0, Z.jsx)(`div`, {
                className: `bg-token-bg-tertiary h-5 w-[min(560px,85%)] animate-pulse rounded-md`
            }), (0, Z.jsx)(`div`, {
                className: `bg-token-bg-tertiary h-5 w-[min(420px,65%)] animate-pulse rounded-md`
            }), (0, Z.jsxs)(`div`, {
                className: `mt-2 flex w-full max-w-[560px] flex-col gap-3 sm:flex-row sm:justify-center`,
                children: [(0, Z.jsx)(`div`, {
                    className: `bg-token-bg-tertiary h-10 flex-1 animate-pulse rounded-xl`
                }), (0, Z.jsx)(`div`, {
                    className: `bg-token-bg-tertiary h-10 flex-1 animate-pulse rounded-xl`
                })]
            }), (0, Z.jsx)(`div`, {
                className: `bg-token-bg-tertiary mt-2 h-20 w-full max-w-[540px] animate-pulse rounded-3xl`
            })]
        }) : (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(`h1`, {
                className: `text-4xl text-balance md:text-5xl`,
                children: (0, Z.jsx)(B, {
                    ...ie
                })
            }), (0, Z.jsx)(`p`, {
                className: `text-token-text-secondary max-w-[540px] text-base md:text-lg`,
                children: M && !F ? (0, Z.jsx)(B, {
                    ...Q.failedDescription,
                    values: {
                        supportLink: Pt
                    }
                }) : (0, Z.jsx)(B, {
                    ...ae
                })
            }), L && !N && !F ? (0, Z.jsx)(`div`, {
                className: `mt-2 max-w-[540px]`,
                children: (0, Z.jsxs)(`div`, {
                    role: z ? `alert` : void 0,
                    "aria-live": z ? `polite` : void 0,
                    className: P(`rounded-3xl border px-5 py-4 text-start text-sm leading-relaxed`, z ? `border-token-border-default bg-token-bg-critical-subtle interactive-label-warning-secondary` : `border-token-border-default bg-token-bg-tertiary text-token-text-secondary`),
                    children: [(0, Z.jsx)(`div`, {
                        className: `text-token-text-primary mb-1 font-semibold`,
                        children: (0, Z.jsx)(B, {
                            ...Q.eligibilityTitle
                        })
                    }), (0, Z.jsx)(B, {
                        ...ce
                    })]
                })
            }) : null, (0, Z.jsxs)(`div`, {
                className: `mt-2 flex w-full max-w-[560px] flex-col gap-3 sm:flex-row sm:justify-center`,
                children: [F ? (0, Z.jsx)(D, {
                    as: `a`,
                    to: Mt,
                    openNewTab: !0,
                    rel: `noopener noreferrer`,
                    size: `medium`,
                    color: `primary`,
                    className: `px-5 py-2.5 text-sm`,
                    children: (0, Z.jsx)(B, {
                        ...H
                    })
                }) : N ? (0, Z.jsx)(D, {
                    as: `a`,
                    to: `/codex/cloud`,
                    size: `medium`,
                    color: `green`,
                    className: `px-5 py-2.5 text-sm`,
                    children: (0, Z.jsx)(B, {
                        ...H
                    })
                }) : x ? z ? (0, Z.jsx)(D, {
                    type: `button`,
                    size: `medium`,
                    color: `primary`,
                    className: `px-5 py-2.5 text-sm`,
                    loading: E,
                    onClick: () => {
                        v()
                    },
                    children: (0, Z.jsx)(B, {
                        ...H
                    })
                }) : L && !R ? (0, Z.jsx)(D, {
                    as: `a`,
                    to: ne,
                    size: `medium`,
                    color: `primary`,
                    className: `px-5 py-2.5 text-sm`,
                    children: (0, Z.jsx)(B, {
                        ...H
                    })
                }) : (0, Z.jsx)(D, {
                    type: `button`,
                    size: `medium`,
                    color: `primary`,
                    className: `px-5 py-2.5 text-sm`,
                    loading: O,
                    visuallyDisabled: f != null,
                    onClick: () => {
                        V && (p(null), l(!0))
                    },
                    children: (0, Z.jsx)(B, {
                        ...H
                    })
                }) : (0, Z.jsx)(D, {
                    as: `a`,
                    to: `/auth/login/?next=%2Fcyber`,
                    size: `medium`,
                    color: `primary`,
                    className: `px-5 py-2.5 text-sm`,
                    children: (0, Z.jsx)(B, {
                        ...H
                    })
                }), (0, Z.jsx)(D, {
                    as: `a`,
                    to: `https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/`,
                    openNewTab: !0,
                    rel: `noopener noreferrer`,
                    size: `large`,
                    color: `ghost`,
                    className: `px-5 py-2.5 text-sm`,
                    children: (0, Z.jsx)(B, {
                        ...Q.learnMoreCta
                    })
                })]
            }), F || f ? (0, Z.jsx)(`div`, {
                role: `alert`,
                "aria-live": `polite`,
                className: `border-token-surface-error/15 bg-token-surface-error/5 text-token-text-error mt-1 max-w-[540px] rounded-2xl border px-4 py-3 text-sm leading-relaxed`,
                children: (0, Z.jsx)(B, {
                    ...U,
                    values: {
                        supportLink: Pt
                    }
                })
            }) : null, (0, Z.jsx)(`div`, {
                className: `bg-token-main-surface-secondary text-token-text-secondary mt-4 max-w-[540px] rounded-3xl px-5 py-4 text-sm leading-relaxed`,
                children: (0, Z.jsx)(B, {
                    ...oe
                })
            }), (0, Z.jsxs)(`div`, {
                className: `mt-2 flex w-full max-w-[560px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-center`,
                children: [(0, Z.jsx)(`p`, {
                    className: `text-token-text-secondary text-base md:text-sm`,
                    children: (0, Z.jsx)(B, {
                        ...Q.teamCta
                    })
                }), (0, Z.jsx)(D, {
                    as: `a`,
                    to: Mt,
                    openNewTab: !0,
                    rel: `noopener noreferrer`,
                    size: `large`,
                    color: `ghost`,
                    className: `px-5 py-2.5 text-sm`,
                    children: (0, Z.jsx)(B, {
                        ...Q.teamCtaText
                    })
                })]
            })]
        })
    }), t[109] = V, t[110] = ae, t[111] = oe, t[112] = v, t[113] = M, t[114] = k, t[115] = F, t[116] = L, t[117] = z, t[118] = R, t[119] = O, t[120] = E, t[121] = x, t[122] = N, t[123] = ce, t[124] = H, t[125] = ne, t[126] = ie, t[127] = f, t[128] = U, t[129] = q) : q = t[129];
    let J;
    return t[130] !== Le || t[131] !== Ue || t[132] !== q ? (J = (0, Z.jsxs)(`div`, {
        className: `font-oai relative overflow-hidden pt-[72px] pb-12`,
        children: [G, (0, Z.jsxs)(`div`, {
            className: `relative z-10`,
            children: [Ue, q, Le]
        })]
    }), t[130] = Le, t[131] = Ue, t[132] = q, t[133] = J) : J = t[133], J
}
var Dt, X, Z, Ot, kt, At, jt, Mt, Nt, Q, Pt, Ft = e((() => {
    Dt = U(), n(), me(), Xe(), st(), wt(), je(), ke(), Ae(), Ne(), p(), T(), F(), S(), X = t(re()), te(), Ve(), Z = R(), Ot = `mx-auto max-w-(--breakpoint-2xl) px-4 md:px-8`, kt = `text-2xl md:text-3xl`, At = `cyber_verification_precheck_failed`, jt = `cyber_verification_organization_required`, Mt = `https://openai.com/form/enterprise-trusted-access-for-cyber`, Nt = `3160264802`, Q = z({
        homeLinkLabel: {
            id: `cyberVerificationPage.homeLinkLabel`,
            defaultMessage: `ChatGPT Home`
        },
        title: {
            id: `cyberVerificationPage.daybreak.title`,
            defaultMessage: `Daybreak`
        },
        verifiedTitle: {
            id: `cyberVerificationPage.verifiedTitle`,
            defaultMessage: `You're verified`
        },
        description: {
            id: `cyberVerificationPage.daybreak.description`,
            defaultMessage: `Verify your identity to access advanced capabilities for authorized cybersecurity work with Daybreak.`
        },
        verifiedDescription: {
            id: `cyberVerificationPage.daybreak.verifiedDescription`,
            defaultMessage: `Your identity is verified and your Daybreak access is now active.`
        },
        retryDescription: {
            id: `cyberVerificationPage.retryDescription`,
            defaultMessage: `Your identity isn't verified yet, please try again below.`
        },
        organizationRequiredDescription: {
            id: `cyberVerificationPage.daybreak.organizationRequiredDescription`,
            defaultMessage: `Individual verification isn't available for this account. Request Daybreak access through your organization below.`
        },
        failedDescription: {
            id: `cyberVerificationPage.failedDescription`,
            defaultMessage: `Your identity couldn't be verified or your account is ineligible at this time. If you think this is a mistake, please contact <supportLink>support</supportLink>.`
        },
        sessionPrecheckError: {
            id: `cyberVerificationPage.sessionPrecheckError`,
            defaultMessage: `We couldn't start verification. You may not be eligible for this verification flow right now. Please try again later, or contact <supportLink>support</supportLink> if you think this is a mistake.`
        },
        sessionOrganizationRequiredError: {
            id: `cyberVerificationPage.daybreak.sessionError.organizationRequired`,
            defaultMessage: `This individual verification flow isn't available when you use a company, government, or education email address, or belong to an Enterprise or Education workspace. To request Daybreak access through your organization, select Request access below.`
        },
        sessionStartError: {
            id: `cyberVerificationPage.sessionStartError`,
            defaultMessage: `We couldn't start verification. You may not be eligible for this verification flow right now. Please try again later, or contact <supportLink>support</supportLink> if the issue continues.`
        },
        eligibilityTitle: {
            id: `cyberVerificationPage.eligibility.title`,
            defaultMessage: `Before you start verification`
        },
        eligibilityEligibleDescription: {
            id: `cyberVerificationPage.eligibility.description.eligible`,
            defaultMessage: `Your account meets the security requirements. You can start identity verification.`
        },
        eligibilityNotEnrolledDescription: {
            id: `cyberVerificationPage.eligibility.description.not_enrolled`,
            defaultMessage: `Turn on Advanced Account Security before you start identity verification.`
        },
        eligibilityNoPasskeysDescription: {
            id: `cyberVerificationPage.eligibility.description.no_passkeys`,
            defaultMessage: `Add two passkeys on hardware-backed authenticators, such as security keys, before you start identity verification.`
        },
        eligibilityHardwareBackingUnconfirmedDescription: {
            id: `cyberVerificationPage.eligibility.description.hardware_backing_unconfirmed`,
            defaultMessage: `We couldn't confirm that all of your passkeys use hardware-backed authenticators. Review your security settings before you continue.`
        },
        eligibilityInsufficientHardwareKeysDescription: {
            id: `cyberVerificationPage.eligibility.description.insufficient_hardware_keys`,
            defaultMessage: `Add at least two passkeys on hardware-backed authenticators, such as security keys, before you start identity verification.`
        },
        eligibilityUnavailableDescription: {
            id: `cyberVerificationPage.eligibility.description.unavailable`,
            defaultMessage: `We couldn't check your security settings right now. Please try again.`
        },
        openSecuritySettingsCta: {
            id: `cyberVerificationPage.eligibility.open_security_settings.button.label`,
            defaultMessage: `Open security settings`
        },
        retryEligibilityCta: {
            id: `cyberVerificationPage.eligibility.retry.button.label`,
            defaultMessage: `Try again`
        },
        primaryCta: {
            id: `cyberVerificationPage.primaryCta`,
            defaultMessage: `Start verification`
        },
        loginCta: {
            id: `cyberVerificationPage.loginCta`,
            defaultMessage: `Log in`
        },
        retryCta: {
            id: `cyberVerificationPage.retryCta`,
            defaultMessage: `Restart verification`
        },
        failedCta: {
            id: `cyberVerificationPage.failedCta`,
            defaultMessage: `Restart verification`
        },
        verifiedCta: {
            id: `cyberVerificationPage.verifiedCta`,
            defaultMessage: `Go to Codex`
        },
        learnMoreCta: {
            id: `cyberVerificationPage.learnMoreCta`,
            defaultMessage: `Learn more`
        },
        finalP0CardTitle: {
            id: `cyberVerificationPage.final_p0.card.title.eligibility`,
            defaultMessage: `Your eligibility`
        },
        finalP0VerifiedCardTitle: {
            id: `cyberVerificationPage.final_p0.card.title.verified`,
            defaultMessage: `You're all set`
        },
        finalP0CardDescriptionEligible: {
            id: `cyberVerificationPage.daybreak.final_p0.card.description.eligible`,
            defaultMessage: `One step left. Verify your identity to access Daybreak.`
        },
        finalP0CardDescriptionNotEnrolled: {
            id: `cyberVerificationPage.daybreak.final_p0.card.description.not_enrolled`,
            defaultMessage: `To access Daybreak, enroll in Advanced Account Security with two hardware security keys. Then, verify your identity.`
        },
        finalP0CardDescriptionHardwareKeysRequired: {
            id: `cyberVerificationPage.final_p0.card.description.hardware_keys_required`,
            defaultMessage: `Two steps left. Add hardware security keys as your login method, then verify your identity.`
        },
        finalP0CardDescriptionPending: {
            id: `cyberVerificationPage.final_p0.card.description.verification_pending`,
            defaultMessage: `Your ID verification is pending. Restart verification if you need to submit again.`
        },
        finalP0CardDescriptionFailed: {
            id: `cyberVerificationPage.final_p0.card.description.verification_failed`,
            defaultMessage: `Your ID wasn't verified. Restart verification to try again.`
        },
        finalP0CardDescriptionVerified: {
            id: `cyberVerificationPage.daybreak.final_p0.card.description.verified`,
            defaultMessage: `You've completed all required steps. Your Daybreak access is now active.`
        },
        finalP0SetupAasCta: {
            id: `cyberVerificationPage.final_p0.card.cta.setup_aas`,
            defaultMessage: `Set up Advanced Account Security`
        },
        finalP0AddSecurityKeysCta: {
            id: `cyberVerificationPage.final_p0.card.cta.add_security_keys`,
            defaultMessage: `Add security keys`
        },
        finalP0AasStep: {
            id: `cyberVerificationPage.final_p0.card.step.advanced_account_security.label`,
            defaultMessage: `Enroll in Advanced Account Security`
        },
        finalP0HardwareKeysStep: {
            id: `cyberVerificationPage.final_p0.card.step.hardware_security_keys.label`,
            defaultMessage: `Only use hardware security keys for login`
        },
        finalP0IdentityStep: {
            id: `cyberVerificationPage.final_p0.card.step.identity_verification.label`,
            defaultMessage: `Verify your identity`
        },
        finalP0IdentityStepPending: {
            id: `cyberVerificationPage.final_p0.card.step.identity_verification.label.pending`,
            defaultMessage: `Verify your identity (pending)`
        },
        disclaimer: {
            id: `cyberVerificationPage.daybreak.disclaimer`,
            defaultMessage: `To access Daybreak, you’ll need to verify your identity with a government-issued ID and meet the program’s eligibility and security requirements.`
        },
        verifiedDisclaimer: {
            id: `cyberVerificationPage.daybreak.verifiedDisclaimer`,
            defaultMessage: `Daybreak supports authorized cybersecurity work, including finding and patching vulnerabilities, secure code review, and incident response. Use is limited to systems you own or are explicitly authorized to assess.`
        },
        teamCta: {
            id: `cyberVerificationPage.daybreak.teamCta`,
            defaultMessage: `Need Daybreak access for your organization?`
        },
        teamCtaText: {
            id: `cyberVerificationPage.teamCtaText`,
            defaultMessage: `Request access`
        },
        faqTitle: {
            id: `cyberVerificationPage.faqTitle`,
            defaultMessage: `FAQs`
        },
        faq1Question: {
            id: `cyberVerificationPage.faq1Question`,
            defaultMessage: `What do I need to verify?`
        },
        faq1Answer: {
            id: `cyberVerificationPage.daybreak.faq1Answer`,
            defaultMessage: `You’ll need a government-issued ID and Advanced Account Security with two hardware security keys. You’ll also need to meet the program’s eligibility requirements.`
        },
        faq2Question: {
            id: `cyberVerificationPage.faq2Question`,
            defaultMessage: `What happens after verification?`
        },
        faq2Answer: {
            id: `cyberVerificationPage.daybreak.faq2Answer`,
            defaultMessage: `Once you meet the security requirements and verify your identity, you can use Daybreak for authorized cybersecurity work, such as finding and patching vulnerabilities.`
        },
        faq3Question: {
            id: `cyberVerificationPage.faq3Question`,
            defaultMessage: `How long does verification take?`
        },
        faq3Answer: {
            id: `cyberVerificationPage.faq3Answer`,
            defaultMessage: `Most users can complete Persona verification in just a few minutes. We refresh your status as soon as the flow finishes.`
        }
    }), Pt = e => (0, Z.jsx)(`a`, {
        className: `underline`,
        href: `https://help.openai.com`,
        target: `_blank`,
        rel: `noopener noreferrer`,
        children: e
    })
}));

function It() {
    "use forget";
    let e = (0, Rt.c)(47),
        t = se(),
        n;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = C(), e[0] = n) : n = e[0];
    let r = n,
        {
            signInForReauth: i
        } = de(),
        {
            verificationState: a,
            daybreakAccessEnabled: o,
            personaEligibilityState: s,
            individualEligibilityStatus: c,
            isRefreshing: l,
            refreshStatus: u
        } = yt(),
        d = j()?.user?.id,
        f;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (f = {
        queryKey: [`cyber-verification-daybreak-legacy-access`, d],
        queryFn: Lt,
        enabled: d != null,
        staleTime: 18e4,
        retry: !1
    }, e[1] = f) : f = e[1];
    let p = V(f),
        [m, h] = (0, zt.useState)(!1),
        g = a.name === `logged-out`,
        _ = a.name === `loading`,
        v = a.name === `refresh-error` || s.name === `unavailable` || o && !_ && s.name === `gate-off` || c === `unavailable`,
        y = c === `business_account` || c === `non_social_email_domain`,
        b = o && !v && !y,
        x = s.name === `eligible` || s.name === `no_passkeys` || s.name === `hardware_backing_unconfirmed` || s.name === `insufficient_hardware_keys`,
        S = b && x,
        w = !_ && p.data?.tac1_enabled === !0 && !S && !v && !y,
        T = b && s.name === `not_enrolled`,
        E;
    e[2] !== t || e[3] !== i ? (E = async function(e) {
        let n = e !== void 0 && e;
        h(!0);
        try {
            await i({
                callbackUrl: Te,
                authorizationParams: {
                    ...n ? {
                        post_login_manage_daybreak_access: `true`
                    } : {
                        post_login_setup_daybreak_access: `true`
                    },
                    originator: Ee
                }
            })
        } catch {
            h(!1), r.danger(n ? t.formatMessage({
                id: `cyberVerificationPage.daybreak.management.toast.startFailed`,
                defaultMessage: `We couldn't open Daybreak key management. Please try again.`
            }) : t.formatMessage({
                id: `cyberVerificationPage.daybreak.enrollment.toast.start_failed`,
                defaultMessage: `We couldn't start Daybreak setup. Please try again.`
            }), {
                hasCloseButton: !0
            })
        }
    }, e[2] = t, e[3] = i, e[4] = E) : E = e[4];
    let O = E;
    if (g) {
        let t;
        e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(Ye, {
            includeAccountSecurity: !0
        }), e[5] = t) : t = e[5];
        let n;
        return e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(Je, {
            isAuthenticated: !1,
            information: t,
            children: (0, $.jsx)(D, {
                as: `a`,
                to: `/auth/login/?next=%2Fcyber`,
                color: `primary`,
                size: `large`,
                className: `mt-8`,
                children: (0, $.jsx)(B, {
                    id: `cyberVerificationPage.daybreak.enrollment.button.login`,
                    defaultMessage: `Log in`
                })
            })
        }), e[6] = n) : n = e[6], n
    }
    let k;
    e[7] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, $.jsx)(Ye, {
        includeAccountSecurity: !0
    }), e[7] = k) : k = e[7];
    let A = v ? `polite` : void 0,
        M = v ? `alert` : void 0,
        N;
    e[8] === S ? N = e[9] : (N = (0, $.jsx)(`h2`, {
        className: `text-xl font-semibold tracking-tight`,
        children: S ? (0, $.jsx)(B, {
            id: `cyberVerificationPage.final_p0.card.title.verified`,
            defaultMessage: `You're all set`
        }) : (0, $.jsx)(B, {
            id: `cyberVerificationPage.final_p0.card.title.eligibility`,
            defaultMessage: `Your eligibility`
        })
    }), e[8] = S, e[9] = N);
    let P;
    e[10] !== S || e[11] !== y || e[12] !== v || e[13] !== T ? (P = (0, $.jsx)(`p`, {
        className: `text-token-text-secondary mt-2 text-sm leading-5`,
        children: S ? (0, $.jsx)(B, {
            id: `cyberVerificationPage.daybreak.enrollment.description.enabled_with_hardware_key`,
            defaultMessage: `You've completed all required steps. Use a verified hardware security key to access Daybreak.`
        }) : y ? (0, $.jsx)(B, {
            id: `cyberVerificationPage.daybreak.organizationRequiredDescription`,
            defaultMessage: `Individual verification isn't available for this account. Request Daybreak access through your organization below.`
        }) : v ? (0, $.jsx)(B, {
            id: `cyberVerificationPage.daybreak.enrollment.description.unavailable`,
            defaultMessage: `We couldn't check your Daybreak access right now. Please try again.`
        }) : T ? (0, $.jsx)(B, {
            id: `cyberVerificationPage.daybreak.enrollment.description.aas_required`,
            defaultMessage: `Enroll in Advanced Account Security to access Daybreak.`
        }) : (0, $.jsx)(B, {
            id: `cyberVerificationPage.daybreak.enrollment.description.setup`,
            defaultMessage: `Set up Advanced Account Security, verify your identity, and choose the hardware keys you’ll use for Daybreak.`
        })
    }), e[10] = S, e[11] = y, e[12] = v, e[13] = T, e[14] = P) : P = e[14];
    let F;
    e[15] === w ? F = e[16] : (F = w && (0, $.jsxs)(`div`, {
        className: `border-token-theme-blue-default/40 bg-token-theme-blue-background/25 mt-3 rounded-xl border px-4 pt-[10px] pb-2`,
        children: [(0, $.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, $.jsx)(ee, {
                "aria-hidden": `true`,
                className: `icon-lg text-token-theme-blue-default shrink-0`
            }), (0, $.jsx)(`p`, {
                className: `text-token-text-primary m-0 text-[13px] font-semibold`,
                children: (0, $.jsx)(B, {
                    id: `cyberVerificationPage.daybreak.enrollment.legacy_access_deadline.title`,
                    defaultMessage: `Complete setup before 1 October`
                })
            })]
        }), (0, $.jsx)(`p`, {
            className: `text-token-text-secondary mt-0 mb-0 ps-8 text-xs leading-[17px]`,
            children: (0, $.jsx)(B, {
                id: `cyberVerificationPage.daybreak.enrollment.legacy_access_deadline.description`,
                defaultMessage: `From October 1, you will require AAS to be enabled with a supported hardware key to continue to access Daybreak Blue. Your access to Daybreak Blue remains unchanged until then.`
            })
        })]
    }), e[15] = w, e[16] = F);
    let I;
    e[17] !== b || e[18] !== x || e[19] !== y || e[20] !== p ? (I = !y && (0, $.jsxs)(`ol`, {
        className: `border-token-border-default mt-5 divide-y border-y`,
        children: [(0, $.jsx)(qe, {
            status: x ? `complete` : `unknown`,
            label: (0, $.jsx)(B, {
                id: `cyberVerificationPage.final_p0.card.step.advanced_account_security.label`,
                defaultMessage: `Enroll in Advanced Account Security`
            })
        }), (0, $.jsx)(qe, {
            status: p.data?.tac1_enabled === !0 ? `complete` : `unknown`,
            label: (0, $.jsx)(B, {
                id: `cyberVerificationPage.final_p0.card.step.identity_verification.label`,
                defaultMessage: `Verify your identity`
            })
        }), (0, $.jsx)(qe, {
            status: b ? `complete` : `unknown`,
            label: (0, $.jsx)(B, {
                id: `cyberVerificationPage.daybreak.enrollment.step.daybreak_keys.label`,
                defaultMessage: `Set up your Daybreak keys`
            })
        })]
    }), e[17] = b, e[18] = x, e[19] = y, e[20] = p, e[21] = I) : I = e[21];
    let L;
    e[22] !== S || e[23] !== _ || e[24] !== y || e[25] !== l || e[26] !== m || e[27] !== v || e[28] !== T || e[29] !== u || e[30] !== O ? (L = (0, $.jsx)(`div`, {
        className: `mt-5`,
        children: y ? (0, $.jsx)(D, {
            as: `a`,
            to: `https://openai.com/form/enterprise-trusted-access-for-cyber`,
            color: `primary`,
            size: `large`,
            className: `w-full`,
            children: (0, $.jsx)(B, {
                id: `cyberVerificationPage.daybreak.enrollment.button.organization`,
                defaultMessage: `Request access`
            })
        }) : v ? (0, $.jsx)(D, {
            type: `button`,
            color: `primary`,
            size: `large`,
            className: `w-full`,
            loading: l,
            onClick: () => u(),
            children: (0, $.jsx)(B, {
                id: `cyberVerificationPage.daybreak.enrollment.button.retry`,
                defaultMessage: `Try again`
            })
        }) : T ? (0, $.jsx)(D, {
            as: `a`,
            to: De({
                originator: Ee
            }),
            color: `primary`,
            size: `large`,
            className: `w-full`,
            children: (0, $.jsx)(B, {
                id: `cyberVerificationPage.final_p0.card.cta.setup_aas`,
                defaultMessage: `Set up Advanced Account Security`
            })
        }) : S ? (0, $.jsx)(D, {
            as: `a`,
            to: `/codex/cloud`,
            color: `primary`,
            size: `large`,
            className: `w-full`,
            children: (0, $.jsx)(B, {
                id: `cyberVerificationPage.verifiedCta`,
                defaultMessage: `Go to Codex`
            })
        }) : (0, $.jsx)(D, {
            type: `button`,
            color: `primary`,
            size: `large`,
            className: `w-full`,
            loading: _ || l || m,
            disabled: _ || l || m,
            onClick: () => void O(),
            children: (0, $.jsx)(B, {
                id: `cyberVerificationPage.daybreak.enrollment.button.setup`,
                defaultMessage: `Set up Daybreak`
            })
        })
    }), e[22] = S, e[23] = _, e[24] = y, e[25] = l, e[26] = m, e[27] = v, e[28] = T, e[29] = u, e[30] = O, e[31] = L) : L = e[31];
    let R;
    e[32] !== o || e[33] !== x || e[34] !== m || e[35] !== v || e[36] !== O ? (R = o && x && !v && (0, $.jsx)(D, {
        type: `button`,
        color: `secondary`,
        size: `large`,
        className: `mt-3 w-full`,
        loading: m,
        disabled: m,
        onClick: () => void O(!0),
        children: (0, $.jsx)(B, {
            id: `cyberVerificationPage.daybreak.enrollment.button.manageKeys`,
            defaultMessage: `Manage Daybreak keys`
        })
    }), e[32] = o, e[33] = x, e[34] = m, e[35] = v, e[36] = O, e[37] = R) : R = e[37];
    let z;
    return e[38] !== L || e[39] !== R || e[40] !== A || e[41] !== M || e[42] !== N || e[43] !== P || e[44] !== F || e[45] !== I ? (z = (0, $.jsx)(Je, {
        isAuthenticated: !0,
        information: k,
        children: (0, $.jsxs)(`section`, {
            "aria-live": A,
            role: M,
            className: `border-token-border-default bg-token-bg-primary mt-8 w-full max-w-[400px] rounded-3xl border px-6 pt-6 pb-5 text-start shadow-[0_12px_32px_rgba(0,0,0,0.06)]`,
            children: [N, P, F, I, L, R]
        })
    }), e[38] = L, e[39] = R, e[40] = A, e[41] = M, e[42] = N, e[43] = P, e[44] = F, e[45] = I, e[46] = z) : z = e[46], z
}

function Lt() {
    return b.safeGet(`/cyber_verification/status`, {})
}
var Rt, zt, $, Bt = e((() => {
        Rt = U(), le(), n(), i(), Xe(), wt(), ke(), Ae(), k(), E(), O(), oe(), zt = t(re()), te(), $ = R()
    })),
    Vt, Ht, Ut, Wt = e((() => {
        L(), Vt = U(), Ft(), Bt(), F(), Ht = R(), Ut = ne(function() {
            "use forget";
            let e = (0, Vt.c)(2);
            if (A(`3160264802`)) {
                let t;
                return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Ht.jsx)(It, {}), e[0] = t) : t = e[0], t
            }
            let t;
            return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Ht.jsx)(Et, {}), e[1] = t) : t = e[1], t
        })
    }));
e((() => {
    Wt()
}))();
export {
    Ut as
    default
};
//# sourceMappingURL=cyber-eq1fyp1g.js.map