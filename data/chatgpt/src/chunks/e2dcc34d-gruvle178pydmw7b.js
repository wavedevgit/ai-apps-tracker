import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jt as r,
    X5 as i,
    Y5 as a,
    cn as o,
    en as s,
    jt as c,
    nn as l
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as u,
    Ln as d,
    Rn as f,
    Vn as p,
    wn as m,
    zn as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as g,
    r as _
} from "./f9d93d16-bl3lj42pdmjt1abf.js";
import {
    TS as v,
    xS as y
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    r as b,
    t as x
} from "./ee72d6dc-c1ayrrzv24wzm50k.js";
import {
    l as S,
    u as C
} from "./c470f5ab-ab47eubabs8jspdc.js";
import {
    n as w,
    t as T
} from "./b2c255f5-dgzm1bcta7422yc7.js";
import {
    n as E,
    t as D
} from "./9e9d0eec-j24gxg6gi9duoed8.js";
import {
    n as O,
    t as k
} from "./9e38ec96-lf9tyby1b7iurr0s.js";
import {
    t as A
} from "./c7a90257-h8bu5i1psxpuvu4f.js";
import {
    c as j,
    s as M
} from "./0f2a693e-ixuu1upjhavxhvub.js";
import {
    n as N,
    r as P,
    t as F
} from "./3fb45623-np683wk0aap09dwf.js";
import {
    n as I,
    t as L
} from "./d25f8a5b-nxjvhzrnlt3mpx7j.js";
import {
    i as R,
    t as z
} from "./bfac314f-blouvrkeov0djtxr.js";
import {
    n as B,
    t as ee
} from "./98b68013-ovi6yki2c1a6mxnh.js";
import {
    n as V,
    t as H
} from "./c989edf1-dwdtrnhk8eff2cen.js";
import {
    n as U,
    r as W
} from "./2f949187-lgfjkv2sr8j8gygo.js";
var G, K, q, J, te, ne = e((() => {
        G = m(), y(), K = n(p()), c(), q = n(p()), E(), V(), J = u(), te = e => {
            "use forget";
            let t = (0, G.c)(34),
                {
                    placement: n,
                    animate: r,
                    switchCharacterLabel: i,
                    exciteOnToggle: a
                } = e,
                c = (0, q.useRef)(null),
                [u, d] = (0, q.useState)(!1),
                f, p;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = () => {
                let e = c.current;
                if (!e) return;
                let t = new IntersectionObserver(e => {
                    let [t] = e;
                    return d(t.isIntersecting)
                }, {
                    rootMargin: `160px`
                });
                return t.observe(e), () => t.disconnect()
            }, p = [], t[0] = f, t[1] = p) : (f = t[0], p = t[1]), (0, K.useEffect)(f, p);
            let m;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
                width: 0,
                height: 0
            }, t[2] = m) : m = t[2];
            let [h, g] = (0, q.useState)(m), [_, y] = (0, q.useState)(!1), b;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (b = {
                x: 0,
                y: 0
            }, t[3] = b) : b = t[3];
            let x = l(b),
                S = (0, q.useRef)(!1),
                C = (0, K.useContext)(D),
                w;
            t[4] === C.renderer ? w = t[5] : (w = C.renderer.shouldUseContinuousMotion(), t[4] = C.renderer, t[5] = w);
            let T = w,
                E = Math.min(h.width * n.width, n.maxWidth) * 1.6,
                O = h.width < 600 && n.compact ? n.compact : n,
                k = O.x * h.width,
                A = O.y * h.height,
                j;
            t[6] === E ? j = t[7] : (j = e => `translate3d(${e.x-E/2}px, ${e.y-E/2}px, 0)`, t[6] = E, t[7] = j);
            let M = s(x, j),
                N;
            t[8] !== h.height || t[9] !== h.width ? (N = e => ({
                x: (e.x - h.width / 2) / 100,
                y: (h.height / 2 - e.y) / 100
            }), t[8] = h.height, t[9] = h.width, t[10] = N) : N = t[10];
            let P = s(x, N),
                F, I;
            t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (I = () => {
                let e = c.current;
                if (!e) return;
                let t = new ResizeObserver(e => {
                        let [t] = e;
                        return g({
                            width: t.contentRect.width,
                            height: t.contentRect.height
                        })
                    }),
                    n = () => y(!document.hidden);
                return t.observe(e), n(), document.addEventListener(`visibilitychange`, n), () => {
                    t.disconnect(), document.removeEventListener(`visibilitychange`, n)
                }
            }, F = [c], t[11] = F, t[12] = I) : (F = t[11], I = t[12]), v(I, F);
            let L, R;
            t[13] !== r || t[14] !== T || t[15] !== _ || t[16] !== x || t[17] !== h.width || t[18] !== u || t[19] !== k || t[20] !== A ? (L = () => {
                if (!h.width) return;
                if (!S.current || !r || !T || !u || !_) {
                    x.set({
                        x: k,
                        y: A
                    }), S.current = !0;
                    return
                }
                let e = 0,
                    t = performance.now(),
                    n = r => {
                        let i = 1 - Math.exp(-10 * Math.min((r - t) / 1e3, .05));
                        t = r;
                        let a = x.get(),
                            o = {
                                x: a.x + (k - a.x) * i,
                                y: a.y + (A - a.y) * i
                            };
                        if (Math.abs(k - o.x) + Math.abs(A - o.y) < .01) {
                            x.set({
                                x: k,
                                y: A
                            });
                            return
                        }
                        x.set(o), e = requestAnimationFrame(n)
                    };
                return e = requestAnimationFrame(n), () => cancelAnimationFrame(e)
            }, R = [k, A, h.width, r, T, u, _, x], t[13] = r, t[14] = T, t[15] = _, t[16] = x, t[17] = h.width, t[18] = u, t[19] = k, t[20] = A, t[21] = L, t[22] = R) : (L = t[21], R = t[22]), v(L, R);
            let z;
            t[23] !== r || t[24] !== E || t[25] !== a || t[26] !== P || t[27] !== n || t[28] !== h.width || t[29] !== i || t[30] !== M ? (z = h.width > 0 && (0, J.jsx)(o.div, {
                className: `absolute top-0 left-0`,
                style: {
                    width: E,
                    height: E,
                    transform: M
                },
                children: (0, J.jsx)(H, {
                    className: `size-full`,
                    lightOrigin: P,
                    switchCharacterLabel: i,
                    exciteOnToggle: a,
                    placement: {
                        ...n,
                        compact: void 0,
                        x: .5,
                        y: .5,
                        width: .625,
                        animate: r
                    }
                })
            }), t[23] = r, t[24] = E, t[25] = a, t[26] = P, t[27] = n, t[28] = h.width, t[29] = i, t[30] = M, t[31] = z) : z = t[31];
            let B;
            return t[32] === z ? B = t[33] : (B = (0, J.jsx)(`div`, {
                ref: c,
                className: `pointer-events-none relative size-full`,
                children: z
            }), t[32] = z, t[33] = B), B
        }
    })),
    re, ie, Y, ae, X = e((() => {
        f(), re = d({
            imessageDescription: {
                id: `chatgpt.dots.messaging.imessageDescription`,
                defaultMessage: `iMessage conversation with {name}`
            },
            heartLabel: {
                id: `chatgpt.dots.messaging.heartLabel`,
                defaultMessage: `Heart reaction to {name}’s message: {message}`
            },
            delivered: {
                id: `chatgpt.dots.messaging.delivered`,
                defaultMessage: `Delivered`
            },
            workspace: {
                id: `chatgpt.dots.messaging.workspace`,
                defaultMessage: `Workspace`
            },
            messages: {
                id: `chatgpt.dots.messaging.messages`,
                defaultMessage: `Messages`
            },
            pins: {
                id: `chatgpt.dots.messaging.pins`,
                defaultMessage: `Pins`
            },
            files: {
                id: `chatgpt.dots.messaging.files`,
                defaultMessage: `Files`
            },
            today: {
                id: `chatgpt.dots.messaging.today`,
                defaultMessage: `Today`
            },
            appBadge: {
                id: `chatgpt.dots.messaging.appBadge`,
                defaultMessage: `APP`
            }
        }), ie = {
            ...re,
            chatDescription: void 0,
            slackDescription: void 0,
            teamsDescription: void 0,
            chatFirst: void 0,
            chatReply: void 0,
            chatDiagnosis: void 0,
            chatFixed: void 0,
            imessageIncoming: void 0,
            imessageReply: void 0,
            imessageTime: void 0,
            slackFirst: void 0,
            slackReply: void 0,
            slackDone: void 0,
            launchFaq: void 0,
            attachmentDetail: void 0
        }, Y = (e, t) => e.replace(/\{(name|message)\}/g, (e, n) => t[n] ?? e), ae = (e, t, n, r = {}) => {
            let i = e?.[t];
            if (i !== void 0) return Y(i, r);
            let a = ie[t];
            return a ? n(a, r) : ``
        }
    })),
    oe, se, ce, le, ue = e((() => {
        oe = m(), se = n(p()), w(), ce = u(), le = e => {
            "use forget";
            let t = (0, oe.c)(3),
                {
                    artwork: n
                } = (0, se.useContext)(T),
                r;
            return t[0] !== n.oLogo || t[1] !== e ? (r = n.oLogo ? (0, ce.jsx)(`img`, {
                ...e,
                src: n.oLogo,
                alt: ``
            }) : null, t[0] = n.oLogo, t[1] = e, t[2] = r) : r = t[2], r
        }
    })),
    de, fe, pe, me = e((() => {
        de = u(), p(), fe = e => (0, de.jsx)(`svg`, {
            xmlns: `http://www.w3.org/2000/svg`,
            width: 19.2,
            height: 12.226,
            fill: `none`,
            overflow: `visible`,
            preserveAspectRatio: `none`,
            style: {
                display: `block`
            },
            viewBox: `0 0 19.2 12.226`,
            ...e,
            children: (0, de.jsx)(`path`, {
                id: `Cellular Connection`,
                fill: `currentColor`,
                fillRule: `evenodd`,
                d: `M19.2 1.146C19.2.513 18.722 0 18.133 0h-1.066C16.477 0 16 .513 16 1.146v9.934c0 .633.478 1.146 1.067 1.146h1.066c.59 0 1.067-.513 1.067-1.146zm-7.434 1.3h1.067c.589 0 1.066.525 1.066 1.173v7.434c0 .648-.477 1.173-1.066 1.173h-1.067c-.59 0-1.067-.525-1.067-1.173V3.619c0-.648.478-1.174 1.067-1.174M7.434 5.093H6.367c-.589 0-1.066.533-1.066 1.189v4.755c0 .656.477 1.188 1.066 1.188h1.067c.59 0 1.067-.532 1.067-1.188V6.283c0-.656-.478-1.189-1.067-1.189m-5.3 2.446H1.066C.477 7.54 0 8.064 0 8.71v2.344c0 .647.478 1.171 1.067 1.171h1.066c.59 0 1.067-.524 1.067-1.171V8.71c0-.647-.478-1.171-1.067-1.171`,
                clipRule: `evenodd`
            })
        }), pe = fe
    })),
    he, ge, _e, ve = e((() => {
        he = u(), p(), ge = e => (0, he.jsx)(`svg`, {
            xmlns: `http://www.w3.org/2000/svg`,
            width: 17.142,
            height: 12.328,
            fill: `none`,
            overflow: `visible`,
            preserveAspectRatio: `none`,
            style: {
                display: `block`
            },
            viewBox: `0 0 17.142 12.328`,
            ...e,
            children: (0, he.jsx)(`path`, {
                id: `Wifi`,
                fill: `currentColor`,
                fillRule: `evenodd`,
                d: `M8.571 2.466c2.487 0 4.88.922 6.682 2.576a.355.355 0 0 0 .486-.004l1.298-1.263a.34.34 0 0 0-.003-.494c-4.731-4.375-12.195-4.375-16.926 0a.34.34 0 0 0-.003.494l1.298 1.263c.133.13.35.132.486.004C3.692 3.388 6.084 2.466 8.57 2.466m-.003 4.22c1.357 0 2.666.512 3.672 1.436.136.132.35.129.483-.006l1.288-1.32a.367.367 0 0 0-.006-.518 7.9 7.9 0 0 0-10.872 0 .367.367 0 0 0-.005.519l1.287 1.319a.34.34 0 0 0 .483.006 5.43 5.43 0 0 1 3.67-1.435m2.524 2.794a.4.4 0 0 1-.102.28l-2.177 2.456a.32.32 0 0 1-.241.112.32.32 0 0 1-.242-.112L6.153 9.76a.4.4 0 0 1-.102-.281.4.4 0 0 1 .113-.276c1.39-1.314 3.426-1.314 4.816 0 .07.071.11.17.112.276`,
                clipRule: `evenodd`
            })
        }), _e = ge
    })),
    ye, be, xe, Se = e((() => {
        ye = u(), p(), be = e => (0, ye.jsx)(`svg`, {
            xmlns: `http://www.w3.org/2000/svg`,
            width: 27.328,
            height: 13,
            fill: `none`,
            overflow: `visible`,
            preserveAspectRatio: `none`,
            style: {
                display: `block`
            },
            viewBox: `0 0 27.328 13`,
            ...e,
            children: (0, ye.jsxs)(`g`, {
                id: `Battery`,
                children: [(0, ye.jsx)(`rect`, {
                    id: `Border`,
                    width: 24,
                    height: 12,
                    x: .5,
                    y: .5,
                    stroke: `currentColor`,
                    opacity: .35,
                    rx: 3.8
                }), (0, ye.jsx)(`path`, {
                    id: `Cap`,
                    fill: `currentColor`,
                    d: `M26 4.781v4.076a2.21 2.21 0 0 0 1.328-2.038c0-.89-.523-1.693-1.328-2.038`,
                    opacity: .4
                }), (0, ye.jsx)(`rect`, {
                    id: `Capacity`,
                    width: 21,
                    height: 9,
                    x: 2,
                    y: 2,
                    fill: `currentColor`,
                    rx: 2.5
                })]
            })
        }), xe = be
    })),
    Ce, we, Te, Ee = e((() => {
        Ce = u(), p(), we = e => (0, Ce.jsx)(`svg`, {
            xmlns: `http://www.w3.org/2000/svg`,
            width: 19.2,
            height: 12.226,
            fill: `none`,
            overflow: `visible`,
            preserveAspectRatio: `none`,
            style: {
                display: `block`
            },
            viewBox: `0 0 19.2 12.226`,
            ...e,
            children: (0, Ce.jsx)(`path`, {
                id: `Cellular Connection`,
                fill: `currentColor`,
                fillRule: `evenodd`,
                d: `M19.2 1.146C19.2.513 18.722 0 18.133 0h-1.066C16.477 0 16 .513 16 1.146v9.934c0 .633.478 1.146 1.067 1.146h1.066c.59 0 1.067-.513 1.067-1.146zm-7.434 1.3h1.067c.589 0 1.066.525 1.066 1.173v7.434c0 .648-.477 1.173-1.066 1.173h-1.067c-.59 0-1.067-.525-1.067-1.173V3.619c0-.648.478-1.174 1.067-1.174M7.434 5.093H6.367c-.589 0-1.066.533-1.066 1.189v4.755c0 .656.477 1.188 1.066 1.188h1.067c.59 0 1.067-.532 1.067-1.188V6.283c0-.656-.478-1.189-1.067-1.189m-5.3 2.446H1.066C.477 7.54 0 8.064 0 8.71v2.344c0 .647.478 1.171 1.067 1.171h1.066c.59 0 1.067-.524 1.067-1.171V8.71c0-.647-.478-1.171-1.067-1.171`,
                clipRule: `evenodd`
            })
        }), Te = we
    })),
    De, Oe, ke, Ae = e((() => {
        De = u(), p(), Oe = e => (0, De.jsx)(`svg`, {
            xmlns: `http://www.w3.org/2000/svg`,
            width: 17.142,
            height: 12.328,
            fill: `none`,
            overflow: `visible`,
            preserveAspectRatio: `none`,
            style: {
                display: `block`
            },
            viewBox: `0 0 17.142 12.328`,
            ...e,
            children: (0, De.jsx)(`path`, {
                id: `Wifi`,
                fill: `currentColor`,
                fillRule: `evenodd`,
                d: `M8.571 2.466c2.487 0 4.88.922 6.682 2.576a.355.355 0 0 0 .486-.004l1.298-1.263a.34.34 0 0 0-.003-.494c-4.731-4.375-12.195-4.375-16.926 0a.34.34 0 0 0-.003.494l1.298 1.263c.133.13.35.132.486.004C3.692 3.388 6.084 2.466 8.57 2.466m-.003 4.22c1.357 0 2.666.512 3.672 1.436.136.132.35.129.483-.006l1.288-1.32a.367.367 0 0 0-.006-.518 7.9 7.9 0 0 0-10.872 0 .367.367 0 0 0-.005.519l1.287 1.319a.34.34 0 0 0 .483.006 5.43 5.43 0 0 1 3.67-1.435m2.524 2.794a.4.4 0 0 1-.102.28l-2.177 2.456a.32.32 0 0 1-.241.112.32.32 0 0 1-.242-.112L6.153 9.76a.4.4 0 0 1-.102-.281.4.4 0 0 1 .113-.276c1.39-1.314 3.426-1.314 4.816 0 .07.071.11.17.112.276`,
                clipRule: `evenodd`
            })
        }), ke = Oe
    })),
    je, Me, Ne, Pe = e((() => {
        je = u(), p(), Me = e => (0, je.jsx)(`svg`, {
            xmlns: `http://www.w3.org/2000/svg`,
            width: 27.328,
            height: 13,
            fill: `none`,
            overflow: `visible`,
            preserveAspectRatio: `none`,
            style: {
                display: `block`
            },
            viewBox: `0 0 27.328 13`,
            ...e,
            children: (0, je.jsxs)(`g`, {
                id: `Battery`,
                children: [(0, je.jsx)(`rect`, {
                    id: `Border`,
                    width: 24,
                    height: 12,
                    x: .5,
                    y: .5,
                    stroke: `currentColor`,
                    opacity: .35,
                    rx: 3.8
                }), (0, je.jsx)(`path`, {
                    id: `Cap`,
                    fill: `currentColor`,
                    d: `M26 4.781v4.076a2.21 2.21 0 0 0 1.328-2.038c0-.89-.523-1.693-1.328-2.038`,
                    opacity: .4
                }), (0, je.jsx)(`rect`, {
                    id: `Capacity`,
                    width: 21,
                    height: 9,
                    x: 2,
                    y: 2,
                    fill: `currentColor`,
                    rx: 2.5
                })]
            })
        }), Ne = Me
    })),
    Fe, Ie, Le, Re = e((() => {
        Fe = u(), p(), Ie = e => (0, Fe.jsx)(`svg`, {
            xmlns: `http://www.w3.org/2000/svg`,
            width: 24,
            height: 24,
            fill: `none`,
            viewBox: `0 0 24 24`,
            ...e,
            children: (0, Fe.jsx)(`path`, {
                fill: `currentColor`,
                d: `M14 15a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm6-8a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z`,
                style: {
                    fillOpacity: 1
                }
            })
        }), Le = Ie
    })),
    ze, Be, Ve, He = e((() => {
        ze = u(), p(), Be = e => (0, ze.jsx)(`svg`, {
            xmlns: `http://www.w3.org/2000/svg`,
            width: 24,
            height: 24,
            fill: `none`,
            viewBox: `0 0 24 24`,
            ...e,
            children: (0, ze.jsx)(`path`, {
                fill: `currentColor`,
                d: `M4.329 3.718a2.86 2.86 0 0 1 4.057 0l2.624 2.636a1.94 1.94 0 0 1 0 2.736l-.591.595c-.213.213-.31.393-.351.539a1 1 0 0 0 .016.543c.137.506.588 1.21 1.534 2.159.946.95 1.646 1.402 2.147 1.54a.96.96 0 0 0 .534.015c.144-.042.322-.138.535-.35l.591-.596a1.93 1.93 0 0 1 2.738 0l2.625 2.636a2.88 2.88 0 0 1 0 4.063l-.156.156c-1.87 1.879-4.197 2.092-6.5 1.303-2.24-.769-4.533-2.496-6.652-4.623-2.276-2.286-4.006-4.594-4.73-6.815-.368-1.125-.487-2.26-.26-3.363.228-1.11.792-2.123 1.683-3.019zm2.64 1.411a.86.86 0 0 0-1.223 0l-.156.155c-.648.652-1 1.324-1.141 2.01-.142.693-.082 1.47.202 2.341.579 1.773 2.044 3.812 4.246 6.024 2.03 2.038 4.065 3.518 5.884 4.142 1.757.602 3.225.393 4.434-.822l.156-.156a.88.88 0 0 0 0-1.24l-2.577-2.589-.543.547c-.399.4-.861.706-1.396.86a2.95 2.95 0 0 1-1.62-.006c-1.02-.28-2.026-1.045-3.034-2.058s-1.768-2.022-2.047-3.045a2.97 2.97 0 0 1-.008-1.62c.153-.535.457-.998.856-1.398l.548-.552z`,
                style: {
                    fillOpacity: 1
                }
            })
        }), Ve = Be
    })),
    Ue, We, Ge, Ke = e((() => {
        Ue = u(), p(), We = e => (0, Ue.jsxs)(`svg`, {
            xmlns: `http://www.w3.org/2000/svg`,
            width: 24,
            height: 24,
            fill: `none`,
            viewBox: `0 0 24 24`,
            ...e,
            children: [(0, Ue.jsx)(`path`, {
                fill: `#e01e5a`,
                d: `M6.36 14.577a2.047 2.047 0 1 1-4.095 0c0-1.133.915-2.05 2.048-2.05H6.36zm1.024 0a2.047 2.047 0 1 1 4.096 0v5.124a2.047 2.047 0 1 1-4.096 0z`,
                style: {
                    fill: `#e01e5a`,
                    fill: `color(display-p3 .8784 .1176 .3529)`,
                    fillOpacity: 1
                }
            }), (0, Ue.jsx)(`path`, {
                fill: `#36c5f0`,
                d: `M9.433 6.349a2.047 2.047 0 0 1-2.048-2.05 2.047 2.047 0 1 1 4.095 0v2.05zm0 1.04c1.132 0 2.047.916 2.047 2.05s-.915 2.049-2.047 2.049H4.298a2.047 2.047 0 0 1-2.048-2.05c0-1.133.915-2.049 2.048-2.049z`,
                style: {
                    fill: `#36c5f0`,
                    fill: `color(display-p3 .2118 .7725 .9412)`,
                    fillOpacity: 1
                }
            }), (0, Ue.jsx)(`path`, {
                fill: `#2eb67d`,
                d: `M17.639 9.438a2.047 2.047 0 1 1 4.095 0c0 1.134-.915 2.05-2.048 2.05H17.64zm-1.024 0a2.047 2.047 0 1 1-4.095 0V4.3a2.047 2.047 0 1 1 4.095 0z`,
                style: {
                    fill: `#2eb67d`,
                    fill: `color(display-p3 .1804 .7137 .4902)`,
                    fillOpacity: 1
                }
            }), (0, Ue.jsx)(`path`, {
                fill: `#ecb22e`,
                d: `M14.567 17.651c1.133 0 2.048.916 2.048 2.05a2.047 2.047 0 1 1-4.095 0v-2.05zm0-1.024a2.047 2.047 0 0 1-2.047-2.05c0-1.133.915-2.05 2.047-2.05h5.135c1.132 0 2.048.917 2.048 2.05 0 1.134-.916 2.05-2.048 2.05z`,
                style: {
                    fill: `#ecb22e`,
                    fill: `color(display-p3 .9255 .698 .1804)`,
                    fillOpacity: 1
                }
            })]
        }), Ge = We
    })),
    Z, qe = e((() => {
        Z = {
            phone: `dots-channel-phone-phone`,
            stage: `dots-channel-phone-stage`,
            dotsAvatar: `dots-channel-phone-dotsAvatar`,
            statusBar: `dots-channel-phone-statusBar`,
            statusLevels: `dots-channel-phone-statusLevels`,
            chatHeader: `dots-channel-phone-chatHeader`,
            menuButton: `dots-channel-phone-menuButton`,
            callButton: `dots-channel-phone-callButton`,
            chatProfile: `dots-channel-phone-chatProfile`,
            namePill: `dots-channel-phone-namePill`,
            bubble: `dots-channel-phone-bubble`,
            chatFirst: `dots-channel-phone-chatFirst`,
            chatReply: `dots-channel-phone-chatReply`,
            chatDiagnosis: `dots-channel-phone-chatDiagnosis`,
            chatFixed: `dots-channel-phone-chatFixed`,
            reaction: `dots-channel-phone-reaction`,
            typing: `dots-channel-phone-typing`,
            chatTyping: `dots-channel-phone-chatTyping`,
            imessageHeader: `dots-channel-phone-imessageHeader`,
            imessageControl: `dots-channel-phone-imessageControl`,
            contactName: `dots-channel-phone-contactName`,
            imessageBack: `dots-channel-phone-imessageBack`,
            imessageVideo: `dots-channel-phone-imessageVideo`,
            contact: `dots-channel-phone-contact`,
            contactAvatar: `dots-channel-phone-contactAvatar`,
            timestamp: `dots-channel-phone-timestamp`,
            imessageShift: `dots-channel-phone-imessageShift`,
            imessageIncoming: `dots-channel-phone-imessageIncoming`,
            tapback: `dots-channel-phone-tapback`,
            tapbackHeart: `dots-channel-phone-tapbackHeart`,
            imessageOutgoing: `dots-channel-phone-imessageOutgoing`,
            messageTail: `dots-channel-phone-messageTail`,
            delivered: `dots-channel-phone-delivered`,
            imessageTyping: `dots-channel-phone-imessageTyping`,
            workspace: `dots-channel-phone-workspace`,
            slackChannel: `dots-channel-phone-slackChannel`,
            slackTabs: `dots-channel-phone-slackTabs`,
            slackToday: `dots-channel-phone-slackToday`,
            slackConversation: `dots-channel-phone-slackConversation`,
            slackMessage: `dots-channel-phone-slackMessage`,
            slackBody: `dots-channel-phone-slackBody`,
            slackAuthor: `dots-channel-phone-slackAuthor`,
            appBadge: `dots-channel-phone-appBadge`,
            saraAvatar: `dots-channel-phone-saraAvatar`,
            document: `dots-channel-phone-document`,
            slackReply: `dots-channel-phone-slackReply`,
            slackDone: `dots-channel-phone-slackDone`
        }
    })),
    Je, Ye, Q, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct = e((() => {
        Je = m(), Ye = n(p()), w(), c(), f(), X(), ue(), me(), ve(), Se(), Ee(), Ae(), Pe(), Re(), He(), Ke(), C(), qe(), i(), Q = u(), Xe = {
            "ChatGPT App": `chatDescription`,
            iMessage: `imessageDescription`,
            Slack: `slackDescription`,
            Teams: `teamsDescription`
        }, Ze = e => {
            "use forget";
            let t = (0, Je.c)(7),
                {
                    imessage: n,
                    messages: r
                } = e,
                i = n !== void 0 && n,
                a = r?.statusTime ?? ``,
                o;
            t[0] === a ? o = t[1] : (o = (0, Q.jsx)(`span`, {
                children: a
            }), t[0] = a, t[1] = o);
            let s;
            t[2] === i ? s = t[3] : (s = (0, Q.jsxs)(`div`, {
                className: Z.statusLevels,
                children: [i ? (0, Q.jsx)(Te, {}) : (0, Q.jsx)(pe, {}), i ? (0, Q.jsx)(ke, {}) : (0, Q.jsx)(_e, {}), i ? (0, Q.jsx)(Ne, {}) : (0, Q.jsx)(xe, {})]
            }), t[2] = i, t[3] = s);
            let c;
            return t[4] !== o || t[5] !== s ? (c = (0, Q.jsxs)(`div`, {
                className: Z.statusBar,
                children: [o, s]
            }), t[4] = o, t[5] = s, t[6] = c) : c = t[6], c
        }, Qe = e => {
            "use forget";
            let t = (0, Je.c)(7),
                {
                    className: n
                } = e,
                r = n === void 0 ? `` : n,
                i;
            t[0] === r ? i = t[1] : (i = a(Z.typing, r), t[0] = r, t[1] = i);
            let o, s, c;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, Q.jsx)(`i`, {}), s = (0, Q.jsx)(`i`, {}), c = (0, Q.jsx)(`i`, {}), t[2] = o, t[3] = s, t[4] = c) : (o = t[2], s = t[3], c = t[4]);
            let l;
            return t[5] === i ? l = t[6] : (l = (0, Q.jsxs)(`div`, {
                className: i,
                "aria-hidden": `true`,
                children: [o, s, c]
            }), t[5] = i, t[6] = l), l
        }, $e = e => {
            "use forget";
            let t = (0, Je.c)(9),
                {
                    character: n,
                    className: r
                } = e,
                {
                    portraits: i,
                    icons: a
                } = (0, Ye.useContext)(T);
            if (n === `O`) {
                let e;
                return t[0] !== n || t[1] !== r ? (e = (0, Q.jsx)(le, {
                    className: r,
                    "data-profile": n,
                    width: `56`,
                    height: `56`
                }), t[0] = n, t[1] = r, t[2] = e) : e = t[2], e
            }
            let o = i[n] ?? a[n];
            if (!o) {
                let e;
                return t[3] === r ? e = t[4] : (e = (0, Q.jsx)(`span`, {
                    className: r,
                    "aria-hidden": !0
                }), t[3] = r, t[4] = e), e
            }
            let s;
            return t[5] !== n || t[6] !== r || t[7] !== o ? (s = (0, Q.jsx)(`img`, {
                className: r,
                src: o,
                alt: ``,
                "data-profile": n
            }), t[5] = n, t[6] = r, t[7] = o, t[8] = s) : s = t[8], s
        }, et = e => {
            "use forget";
            let t = (0, Je.c)(3),
                {
                    character: n
                } = e,
                r;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = a(Z.dotsAvatar, `size-9 rounded-lg bg-(--channel-accent-soft) object-contain`), t[0] = r) : r = t[0];
            let i;
            return t[1] === n ? i = t[2] : (i = (0, Q.jsx)($e, {
                character: n,
                className: r
            }), t[1] = n, t[2] = i), i
        }, tt = e => {
            "use forget";
            let t = (0, Je.c)(48),
                {
                    character: n,
                    messages: r
                } = e,
                {
                    artwork: i
                } = (0, Ye.useContext)(T),
                {
                    formatMessage: o
                } = h(),
                s = r?.name ?? ``,
                c;
            t[0] !== o || t[1] !== r || t[2] !== s ? (c = (e, t) => ae(r, e, o, {
                name: s,
                ...t === void 0 ? {} : t
            }), t[0] = o, t[1] = r, t[2] = s, t[3] = c) : c = t[3];
            let l = c,
                u;
            t[4] === r ? u = t[5] : (u = (0, Q.jsx)(Ze, {
                messages: r
            }), t[4] = r, t[5] = u);
            let d;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Q.jsx)(`span`, {
                className: Z.menuButton,
                children: (0, Q.jsx)(Le, {
                    "aria-hidden": !0
                })
            }), t[6] = d) : d = t[6];
            let f;
            t[7] === n ? f = t[8] : (f = (0, Q.jsx)($e, {
                className: Z.chatProfile,
                character: n
            }), t[7] = n, t[8] = f);
            let p;
            t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, Q.jsx)(`span`, {
                className: Z.callButton,
                children: (0, Q.jsx)(Ve, {
                    "aria-hidden": !0
                })
            }), t[9] = p) : p = t[9];
            let m;
            t[10] === s ? m = t[11] : (m = (0, Q.jsx)(`span`, {
                className: Z.namePill,
                children: s
            }), t[10] = s, t[11] = m);
            let g;
            t[12] !== f || t[13] !== m ? (g = (0, Q.jsxs)(`div`, {
                className: Z.chatHeader,
                children: [d, f, p, m]
            }), t[12] = f, t[13] = m, t[14] = g) : g = t[14];
            let _;
            t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = a(Z.bubble, Z.chatFirst), t[15] = _) : _ = t[15];
            let v;
            t[16] === l ? v = t[17] : (v = l(`chatFirst`), t[16] = l, t[17] = v);
            let y;
            t[18] === v ? y = t[19] : (y = (0, Q.jsx)(`div`, {
                className: _,
                children: v
            }), t[18] = v, t[19] = y);
            let b;
            t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (b = a(Z.bubble, Z.chatReply), t[20] = b) : b = t[20];
            let x;
            t[21] === l ? x = t[22] : (x = l(`chatReply`), t[21] = l, t[22] = x);
            let S;
            t[23] === x ? S = t[24] : (S = (0, Q.jsx)(`div`, {
                className: b,
                children: x
            }), t[23] = x, t[24] = S);
            let C, w;
            t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, Q.jsx)(Qe, {
                className: Z.chatTyping
            }), w = a(Z.bubble, Z.chatDiagnosis), t[25] = C, t[26] = w) : (C = t[25], w = t[26]);
            let E;
            t[27] === l ? E = t[28] : (E = l(`chatDiagnosis`), t[27] = l, t[28] = E);
            let D;
            t[29] === E ? D = t[30] : (D = (0, Q.jsx)(`div`, {
                className: w,
                children: E
            }), t[29] = E, t[30] = D);
            let O;
            t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (O = a(Z.bubble, Z.chatFixed), t[31] = O) : O = t[31];
            let k;
            t[32] === l ? k = t[33] : (k = l(`chatFixed`), t[32] = l, t[33] = k);
            let A;
            t[34] === i.messagingHeart ? A = t[35] : (A = i.messagingHeart && (0, Q.jsx)(`img`, {
                src: i.messagingHeart,
                alt: ``
            }), t[34] = i.messagingHeart, t[35] = A);
            let j;
            t[36] === A ? j = t[37] : (j = (0, Q.jsx)(`span`, {
                className: Z.reaction,
                children: A
            }), t[36] = A, t[37] = j);
            let M;
            t[38] !== k || t[39] !== j ? (M = (0, Q.jsxs)(`div`, {
                className: O,
                children: [k, j]
            }), t[38] = k, t[39] = j, t[40] = M) : M = t[40];
            let N;
            return t[41] !== y || t[42] !== S || t[43] !== D || t[44] !== u || t[45] !== M || t[46] !== g ? (N = (0, Q.jsxs)(Q.Fragment, {
                children: [u, g, y, S, C, D, M]
            }), t[41] = y, t[42] = S, t[43] = D, t[44] = u, t[45] = M, t[46] = g, t[47] = N) : N = t[47], N
        }, nt = e => {
            "use forget";
            let t = (0, Je.c)(77),
                {
                    character: n,
                    animate: r,
                    messages: i
                } = e,
                s = r !== void 0 && r,
                {
                    formatMessage: c
                } = h(),
                l = i?.name ?? ``,
                u;
            t[0] !== c || t[1] !== i || t[2] !== l ? (u = (e, t) => ae(i, e, c, {
                name: l,
                ...t === void 0 ? {} : t
            }), t[0] = c, t[1] = i, t[2] = l, t[3] = u) : u = t[3];
            let d = u,
                f;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (f = {
                selected: !1,
                animate: !1
            }, t[4] = f) : f = t[4];
            let [p, m] = (0, Ye.useState)(f), g = p.animate && s, _ = `translateY(${p.selected?12:0}px)`, v;
            t[5] === _ ? v = t[6] : (v = {
                transform: _
            }, t[5] = _, t[6] = v);
            let y = v,
                b;
            t[7] === g ? b = t[8] : (b = g ? {
                type: `spring`,
                stiffness: 420,
                damping: 26,
                mass: .8
            } : {
                duration: 0
            }, t[7] = g, t[8] = b);
            let x = b,
                S;
            t[9] === i ? S = t[10] : (S = (0, Q.jsx)(Ze, {
                imessage: !0,
                messages: i
            }), t[9] = i, t[10] = S);
            let C;
            t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (C = a(Z.imessageControl, Z.imessageBack), t[11] = C) : C = t[11];
            let w;
            t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, Q.jsx)(`span`, {
                className: C,
                children: (0, Q.jsx)(`svg`, {
                    width: `24`,
                    height: `24`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    "aria-hidden": `true`,
                    children: (0, Q.jsx)(`path`, {
                        d: `m15 4-8 8 8 8`,
                        stroke: `currentColor`,
                        strokeWidth: `2.5`,
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`
                    })
                })
            }), t[12] = w) : w = t[12];
            let T;
            t[13] === n ? T = t[14] : (T = (0, Q.jsx)(`span`, {
                className: Z.contactAvatar,
                children: (0, Q.jsx)($e, {
                    character: n
                })
            }), t[13] = n, t[14] = T);
            let E;
            t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, Q.jsx)(`svg`, {
                width: `8`,
                height: `13`,
                viewBox: `0 0 8 13`,
                fill: `none`,
                "aria-hidden": `true`,
                children: (0, Q.jsx)(`path`, {
                    d: `m2 2 4 4.5L2 11`,
                    stroke: `currentColor`,
                    strokeWidth: `2.5`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`
                })
            }), t[15] = E) : E = t[15];
            let D;
            t[16] === l ? D = t[17] : (D = (0, Q.jsxs)(`span`, {
                className: Z.contactName,
                children: [l, E]
            }), t[16] = l, t[17] = D);
            let O;
            t[18] !== T || t[19] !== D ? (O = (0, Q.jsxs)(`div`, {
                className: Z.contact,
                children: [T, D]
            }), t[18] = T, t[19] = D, t[20] = O) : O = t[20];
            let k;
            t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (k = a(Z.imessageControl, Z.imessageVideo), t[21] = k) : k = t[21];
            let A;
            t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (A = (0, Q.jsx)(`span`, {
                className: k,
                children: (0, Q.jsxs)(`svg`, {
                    width: `27`,
                    height: `24`,
                    viewBox: `0 0 27 24`,
                    fill: `none`,
                    "aria-hidden": `true`,
                    children: [(0, Q.jsx)(`rect`, {
                        x: `1.5`,
                        y: `5`,
                        width: `17`,
                        height: `14`,
                        rx: `3.5`,
                        stroke: `currentColor`,
                        strokeWidth: `1.8`
                    }), (0, Q.jsx)(`path`, {
                        d: `m18.5 9 6-4v14l-6-4`,
                        stroke: `currentColor`,
                        strokeWidth: `1.8`,
                        strokeLinejoin: `round`
                    })]
                })
            }), t[22] = A) : A = t[22];
            let j;
            t[23] !== O || t[24] !== S ? (j = (0, Q.jsxs)(`div`, {
                className: Z.imessageHeader,
                "aria-hidden": `true`,
                children: [S, w, O, A]
            }), t[23] = O, t[24] = S, t[25] = j) : j = t[25];
            let M = i?.imessageService ?? `iMessage`,
                N;
            t[26] === M ? N = t[27] : (N = (0, Q.jsx)(`span`, {
                children: M
            }), t[26] = M, t[27] = N);
            let P;
            t[28] === d ? P = t[29] : (P = d(`imessageTime`), t[28] = d, t[29] = P);
            let F;
            t[30] === P ? F = t[31] : (F = (0, Q.jsx)(`span`, {
                children: P
            }), t[30] = P, t[31] = F);
            let I;
            t[32] !== N || t[33] !== F ? (I = (0, Q.jsxs)(`div`, {
                className: Z.timestamp,
                "aria-hidden": `true`,
                children: [N, F]
            }), t[32] = N, t[33] = F, t[34] = I) : I = t[34];
            let L;
            t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, Q.jsx)(Qe, {
                className: Z.imessageTyping
            }), t[35] = L) : L = t[35];
            let R;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (R = a(Z.bubble, Z.imessageIncoming), t[36] = R) : R = t[36];
            let z;
            t[37] === d ? z = t[38] : (z = d(`heartLabel`, {
                message: d(`imessageIncoming`)
            }), t[37] = d, t[38] = z);
            let B = p.selected,
                ee;
            t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = e => {
                let t = e.detail > 0;
                m(e => ({
                    selected: !e.selected,
                    animate: t
                }))
            }, t[39] = ee) : ee = t[39];
            let V;
            t[40] === d ? V = t[41] : (V = d(`imessageIncoming`), t[40] = d, t[41] = V);
            let H;
            t[42] === Symbol.for(`react.memo_cache_sentinel`) ? (H = (0, Q.jsx)(rt, {}), t[42] = H) : H = t[42];
            let U;
            t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (U = (0, Q.jsx)(`span`, {
                className: Z.tapback,
                "aria-hidden": `true`,
                children: (0, Q.jsx)(`span`, {
                    className: Z.tapbackHeart,
                    children: `❤️`
                })
            }), t[43] = U) : U = t[43];
            let W;
            t[44] !== g || t[45] !== p.selected || t[46] !== z || t[47] !== V ? (W = (0, Q.jsxs)(`button`, {
                type: `button`,
                className: R,
                "aria-label": z,
                "aria-pressed": B,
                "data-reaction-animate": g,
                onClick: ee,
                children: [V, H, U]
            }), t[44] = g, t[45] = p.selected, t[46] = z, t[47] = V, t[48] = W) : W = t[48];
            let G;
            t[49] !== y || t[50] !== x || t[51] !== W ? (G = (0, Q.jsxs)(o.div, {
                className: Z.imessageShift,
                initial: !1,
                animate: y,
                transition: x,
                children: [L, W]
            }), t[49] = y, t[50] = x, t[51] = W, t[52] = G) : G = t[52];
            let K = g ? .065 : 0,
                q;
            t[53] !== x || t[54] !== K ? (q = {
                ...x,
                delay: K
            }, t[53] = x, t[54] = K, t[55] = q) : q = t[55];
            let J;
            t[56] === d ? J = t[57] : (J = d(`imessageReply`), t[56] = d, t[57] = J);
            let te;
            t[58] === Symbol.for(`react.memo_cache_sentinel`) ? (te = (0, Q.jsx)(rt, {}), t[58] = te) : te = t[58];
            let ne;
            t[59] === J ? ne = t[60] : (ne = (0, Q.jsxs)(`div`, {
                className: Z.bubble,
                children: [J, te]
            }), t[59] = J, t[60] = ne);
            let re;
            t[61] === d ? re = t[62] : (re = d(`delivered`), t[61] = d, t[62] = re);
            let ie;
            t[63] === re ? ie = t[64] : (ie = (0, Q.jsx)(`span`, {
                className: Z.delivered,
                children: re
            }), t[63] = re, t[64] = ie);
            let Y;
            t[65] !== ne || t[66] !== ie ? (Y = (0, Q.jsxs)(`div`, {
                className: Z.imessageOutgoing,
                children: [ne, ie]
            }), t[65] = ne, t[66] = ie, t[67] = Y) : Y = t[67];
            let X;
            t[68] !== y || t[69] !== q || t[70] !== Y ? (X = (0, Q.jsx)(o.div, {
                className: Z.imessageShift,
                initial: !1,
                animate: y,
                transition: q,
                children: Y
            }), t[68] = y, t[69] = q, t[70] = Y, t[71] = X) : X = t[71];
            let oe;
            return t[72] !== j || t[73] !== I || t[74] !== G || t[75] !== X ? (oe = (0, Q.jsxs)(Q.Fragment, {
                children: [j, I, G, X]
            }), t[72] = j, t[73] = I, t[74] = G, t[75] = X, t[76] = oe) : oe = t[76], oe
        }, rt = () => {
            "use forget";
            let e = (0, Je.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(`svg`, {
                className: Z.messageTail,
                width: `32`,
                height: `32`,
                viewBox: `0 0 32 32`,
                fill: `currentColor`,
                "aria-hidden": `true`,
                children: (0, Q.jsx)(`path`, {
                    d: `M32 0C32 10 30 15 23.2 19.8C19.2 22.6 19.2 25.4 22.4 29C23.2 30.1 22.2 30.6 20.8 30C16 28.2 12 25 8.8 24.1C8.2 24 7.6 24 6.4 24H0V0Z`
                })
            }), e[0] = t) : t = e[0], t
        }, it = e => {
            "use forget";
            let t = (0, Je.c)(29),
                {
                    character: n,
                    messages: r,
                    teammate: i,
                    time: o,
                    className: s,
                    children: c
                } = e,
                l = i !== void 0 && i,
                u = s === void 0 ? `` : s,
                {
                    formatMessage: d
                } = h(),
                f = r?.name ?? ``,
                p;
            t[0] !== d || t[1] !== r || t[2] !== f ? (p = (e, t) => ae(r, e, d, {
                name: f,
                ...t === void 0 ? {} : t
            }), t[0] = d, t[1] = r, t[2] = f, t[3] = p) : p = t[3];
            let m = p,
                g;
            t[4] === u ? g = t[5] : (g = a(Z.slackMessage, u), t[4] = u, t[5] = g);
            let _;
            t[6] !== n || t[7] !== r?.teammateInitials || t[8] !== r?.teammateName || t[9] !== l ? (_ = l ? (0, Q.jsx)(`span`, {
                className: Z.saraAvatar,
                children: r?.teammateInitials ?? Array.from(r?.teammateName ?? ``)[0]
            }) : (0, Q.jsx)(et, {
                character: n
            }), t[6] = n, t[7] = r?.teammateInitials, t[8] = r?.teammateName, t[9] = l, t[10] = _) : _ = t[10];
            let v = l ? r?.teammateName ?? `` : f,
                y;
            t[11] === v ? y = t[12] : (y = (0, Q.jsx)(`b`, {
                children: v
            }), t[11] = v, t[12] = y);
            let b;
            t[13] !== l || t[14] !== m ? (b = !l && (0, Q.jsx)(`span`, {
                className: Z.appBadge,
                children: m(`appBadge`)
            }), t[13] = l, t[14] = m, t[15] = b) : b = t[15];
            let x;
            t[16] === o ? x = t[17] : (x = (0, Q.jsx)(`time`, {
                children: o
            }), t[16] = o, t[17] = x);
            let S;
            t[18] !== y || t[19] !== b || t[20] !== x ? (S = (0, Q.jsxs)(`div`, {
                className: Z.slackAuthor,
                children: [y, b, x]
            }), t[18] = y, t[19] = b, t[20] = x, t[21] = S) : S = t[21];
            let C;
            t[22] !== c || t[23] !== S ? (C = (0, Q.jsxs)(`div`, {
                className: Z.slackBody,
                children: [S, c]
            }), t[22] = c, t[23] = S, t[24] = C) : C = t[24];
            let w;
            return t[25] !== C || t[26] !== g || t[27] !== _ ? (w = (0, Q.jsxs)(`div`, {
                className: g,
                children: [_, C]
            }), t[25] = C, t[26] = g, t[27] = _, t[28] = w) : w = t[28], w
        }, at = e => {
            "use forget";
            let t = (0, Je.c)(92),
                {
                    character: n,
                    messages: r,
                    teams: i
                } = e,
                a = i !== void 0 && i,
                {
                    formatMessage: o
                } = h(),
                s = r?.name ?? ``,
                c;
            t[0] !== o || t[1] !== r || t[2] !== s ? (c = (e, t) => ae(r, e, o, {
                name: s,
                ...t === void 0 ? {} : t
            }), t[0] = o, t[1] = r, t[2] = s, t[3] = c) : c = t[3];
            let l = c,
                u;
            t[4] === r ? u = t[5] : (u = (0, Q.jsx)(Ze, {
                messages: r
            }), t[4] = r, t[5] = u);
            let d;
            t[6] === a ? d = t[7] : (d = a ? (0, Q.jsx)(S, {
                "aria-hidden": !0
            }) : (0, Q.jsx)(Ge, {
                "aria-hidden": !0
            }), t[6] = a, t[7] = d);
            let f;
            t[8] !== r?.workspace || t[9] !== a || t[10] !== l ? (f = r?.workspace ?? (a ? `Microsoft Teams` : l(`workspace`)), t[8] = r?.workspace, t[9] = a, t[10] = l, t[11] = f) : f = t[11];
            let p;
            t[12] === f ? p = t[13] : (p = (0, Q.jsx)(`b`, {
                children: f
            }), t[12] = f, t[13] = p);
            let m;
            t[14] !== d || t[15] !== p ? (m = (0, Q.jsxs)(`div`, {
                className: Z.workspace,
                children: [d, p]
            }), t[14] = d, t[15] = p, t[16] = m) : m = t[16];
            let g = r?.workChannel ?? ``,
                _;
            t[17] === g ? _ = t[18] : (_ = (0, Q.jsx)(`b`, {
                children: g
            }), t[17] = g, t[18] = _);
            let v;
            t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, Q.jsx)(`span`, {
                children: `…`
            }), t[19] = v) : v = t[19];
            let y;
            t[20] === _ ? y = t[21] : (y = (0, Q.jsxs)(`div`, {
                className: Z.slackChannel,
                children: [_, v]
            }), t[20] = _, t[21] = y);
            let b;
            t[22] === l ? b = t[23] : (b = l(`messages`), t[22] = l, t[23] = b);
            let x;
            t[24] === b ? x = t[25] : (x = (0, Q.jsx)(`span`, {
                children: b
            }), t[24] = b, t[25] = x);
            let C;
            t[26] === l ? C = t[27] : (C = l(`pins`), t[26] = l, t[27] = C);
            let w;
            t[28] === C ? w = t[29] : (w = (0, Q.jsx)(`span`, {
                children: C
            }), t[28] = C, t[29] = w);
            let T;
            t[30] === l ? T = t[31] : (T = l(`files`), t[30] = l, t[31] = T);
            let E;
            t[32] === T ? E = t[33] : (E = (0, Q.jsx)(`span`, {
                children: T
            }), t[32] = T, t[33] = E);
            let D;
            t[34] !== x || t[35] !== w || t[36] !== E ? (D = (0, Q.jsxs)(`div`, {
                className: Z.slackTabs,
                children: [x, w, E]
            }), t[34] = x, t[35] = w, t[36] = E, t[37] = D) : D = t[37];
            let O;
            t[38] === l ? O = t[39] : (O = l(`today`), t[38] = l, t[39] = O);
            let k;
            t[40] === O ? k = t[41] : (k = (0, Q.jsx)(`div`, {
                className: Z.slackToday,
                children: O
            }), t[40] = O, t[41] = k);
            let A = r?.workTime0 ?? ``,
                j;
            t[42] === l ? j = t[43] : (j = l(`slackFirst`), t[42] = l, t[43] = j);
            let M;
            t[44] === j ? M = t[45] : (M = (0, Q.jsx)(`p`, {
                children: j
            }), t[44] = j, t[45] = M);
            let N;
            t[46] !== n || t[47] !== r || t[48] !== A || t[49] !== M ? (N = (0, Q.jsx)(it, {
                character: n,
                messages: r,
                time: A,
                children: M
            }), t[46] = n, t[47] = r, t[48] = A, t[49] = M, t[50] = N) : N = t[50];
            let P = r?.workTime1 ?? ``,
                F;
            t[51] === l ? F = t[52] : (F = l(`slackReply`), t[51] = l, t[52] = F);
            let I;
            t[53] === F ? I = t[54] : (I = (0, Q.jsx)(`p`, {
                children: F
            }), t[53] = F, t[54] = I);
            let L;
            t[55] !== n || t[56] !== r || t[57] !== P || t[58] !== I ? (L = (0, Q.jsx)(it, {
                character: n,
                messages: r,
                teammate: !0,
                time: P,
                className: Z.slackReply,
                children: I
            }), t[55] = n, t[56] = r, t[57] = P, t[58] = I, t[59] = L) : L = t[59];
            let R = r?.workTime2 ?? ``,
                z;
            t[60] === l ? z = t[61] : (z = l(`slackDone`), t[60] = l, t[61] = z);
            let B;
            t[62] === z ? B = t[63] : (B = (0, Q.jsx)(`p`, {
                children: z
            }), t[62] = z, t[63] = B);
            let ee;
            t[64] === l ? ee = t[65] : (ee = l(`launchFaq`), t[64] = l, t[65] = ee);
            let V;
            t[66] === ee ? V = t[67] : (V = (0, Q.jsx)(`b`, {
                children: ee
            }), t[66] = ee, t[67] = V);
            let H;
            t[68] === l ? H = t[69] : (H = l(`attachmentDetail`), t[68] = l, t[69] = H);
            let U;
            t[70] === H ? U = t[71] : (U = (0, Q.jsx)(`span`, {
                children: H
            }), t[70] = H, t[71] = U);
            let W;
            t[72] !== V || t[73] !== U ? (W = (0, Q.jsxs)(`div`, {
                className: Z.document,
                children: [V, U]
            }), t[72] = V, t[73] = U, t[74] = W) : W = t[74];
            let G;
            t[75] !== n || t[76] !== r || t[77] !== R || t[78] !== B || t[79] !== W ? (G = (0, Q.jsxs)(it, {
                character: n,
                messages: r,
                time: R,
                className: Z.slackDone,
                children: [B, W]
            }), t[75] = n, t[76] = r, t[77] = R, t[78] = B, t[79] = W, t[80] = G) : G = t[80];
            let K;
            t[81] !== N || t[82] !== L || t[83] !== G ? (K = (0, Q.jsxs)(`div`, {
                className: Z.slackConversation,
                children: [N, L, G]
            }), t[81] = N, t[82] = L, t[83] = G, t[84] = K) : K = t[84];
            let q;
            return t[85] !== y || t[86] !== D || t[87] !== k || t[88] !== u || t[89] !== K || t[90] !== m ? (q = (0, Q.jsxs)(Q.Fragment, {
                children: [u, m, y, D, k, K]
            }), t[85] = y, t[86] = D, t[87] = k, t[88] = u, t[89] = K, t[90] = m, t[91] = q) : q = t[91], q
        }, ot = e => {
            "use forget";
            let t = (0, Je.c)(2),
                n;
            return t[0] === e ? n = t[1] : (n = (0, Q.jsx)(at, {
                ...e,
                teams: !0
            }), t[0] = e, t[1] = n), n
        }, st = {
            "ChatGPT App": tt,
            iMessage: nt,
            Slack: at,
            Teams: ot
        }
    }));

function lt(e) {
    `animationName` in e && (e.currentTime = 0)
}

function ut(e) {
    return `animationName` in e && Number.isFinite(e.effect?.getComputedTiming().endTime)
}

function dt(e) {
    return e.playState === `finished`
}
var ft, pt, mt, ht, gt, _t = e((() => {
        ft = m(), y(), pt = n(p()), w(), mt = n(p()), f(), i(), j(), ct(), X(), qe(), ht = u(), gt = e => {
            "use forget";
            let t = (0, ft.c)(53),
                {
                    channel: n,
                    character: r,
                    accentColor: i,
                    active: o,
                    animate: s,
                    messages: c,
                    onStoryComplete: l,
                    storyVersion: u
                } = e,
                d = u === void 0 ? 0 : u,
                {
                    names: f
                } = (0, pt.useContext)(T),
                {
                    formatMessage: p
                } = h(),
                m = (0, pt.useRef)(null),
                [g, _] = (0, mt.useState)(!1),
                y, b;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (y = () => {
                let e = m.current;
                if (!e) return;
                let t = new IntersectionObserver(e => {
                    let [t] = e;
                    return _(t.isIntersecting)
                }, {
                    threshold: .25
                });
                return t.observe(e), () => t.disconnect()
            }, b = [], t[0] = y, t[1] = b) : (y = t[0], b = t[1]), (0, mt.useEffect)(y, b);
            let [x, S] = (0, mt.useState)(!1), [C, w] = (0, mt.useState)(s);
            o && C !== s && w(s);
            let E = o ? s : C,
                D;
            t[2] === l ? D = t[3] : (D = () => l?.(), t[2] = l, t[3] = D);
            let O = (0, pt.useEffectEvent)(D),
                k;
            t[4] !== o || t[5] !== s ? (k = () => {
                o && s && m.current?.getAnimations?.({
                    subtree: !0
                }).forEach(lt)
            }, t[4] = o, t[5] = s, t[6] = k) : k = t[6];
            let A;
            t[7] !== o || t[8] !== s || t[9] !== d ? (A = [o, s, m, d], t[7] = o, t[8] = s, t[9] = d, t[10] = A) : A = t[10], v(k, A);
            let j;
            t[11] !== o || t[12] !== s || t[13] !== O ? (j = () => {
                let e = m.current;
                if (!e || !o || !s) return;
                let t = 0,
                    n = !1,
                    r = () => {
                        t = 0;
                        let r = e.getAnimations({
                            subtree: !0
                        }).filter(ut);
                        !n && r.length && r.every(dt) && (n = !0, O())
                    },
                    i = () => {
                        t ||= requestAnimationFrame(r)
                    };
                for (let t of [`animationstart`, `animationend`, `animationcancel`]) e.addEventListener(t, i);
                return i(), () => {
                    cancelAnimationFrame(t);
                    for (let t of [`animationstart`, `animationend`, `animationcancel`]) e.removeEventListener(t, i)
                }
            }, t[11] = o, t[12] = s, t[13] = O, t[14] = j) : j = t[14];
            let N;
            t[15] !== o || t[16] !== s || t[17] !== d ? (N = [o, s, d], t[15] = o, t[16] = s, t[17] = d, t[18] = N) : N = t[18], (0, mt.useEffect)(j, N);
            let P, F;
            t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (F = () => {
                let e = m.current;
                if (!e) return;
                let t = new ResizeObserver(t => {
                        let [n] = t;
                        e.style.setProperty(`--phone-scale`, String(n.contentRect.width / 393))
                    }),
                    n = () => S(!document.hidden);
                return t.observe(e), n(), document.addEventListener(`visibilitychange`, n), () => {
                    t.disconnect(), document.removeEventListener(`visibilitychange`, n)
                }
            }, P = [m], t[19] = P, t[20] = F) : (P = t[19], F = t[20]), (0, mt.useEffect)(F, P);
            let I = st[n],
                L = c?.name ?? f[r] ?? ``,
                R;
            t[21] !== c || t[22] !== L ? (R = {
                ...c,
                name: L
            }, t[21] = c, t[22] = L, t[23] = R) : R = t[23];
            let z = R,
                B;
            t[24] !== n || t[25] !== p || t[26] !== c || t[27] !== L ? (B = c?.description === void 0 ? ae(c, Xe[n], p, {
                name: L
            }) : Y(c.description, {
                name: L
            }), t[24] = n, t[25] = p, t[26] = c, t[27] = L, t[28] = B) : B = t[28];
            let ee = B,
                V = o && `pointer-events-auto`,
                H;
            t[29] === V ? H = t[30] : (H = a(Z.phone, M, V), t[29] = V, t[30] = H);
            let U;
            t[31] === i ? U = t[32] : (U = {
                "--channel-accent": i
            }, t[31] = i, t[32] = U);
            let W = U,
                G = n === `iMessage` ? `group` : `img`,
                K = !o,
                q = n !== `iMessage`,
                J;
            t[33] !== I || t[34] !== r || t[35] !== z || t[36] !== E ? (J = (0, ht.jsx)(I, {
                character: r,
                animate: E,
                messages: z
            }), t[33] = I, t[34] = r, t[35] = z, t[36] = E, t[37] = J) : J = t[37];
            let te;
            t[38] !== q || t[39] !== J ? (te = (0, ht.jsx)(`div`, {
                className: Z.stage,
                "aria-hidden": q,
                children: J
            }), t[38] = q, t[39] = J, t[40] = te) : te = t[40];
            let ne;
            return t[41] !== o || t[42] !== n || t[43] !== ee || t[44] !== x || t[45] !== E || t[46] !== H || t[47] !== W || t[48] !== G || t[49] !== K || t[50] !== te || t[51] !== g ? (ne = (0, ht.jsx)(`div`, {
                ref: m,
                className: H,
                style: W,
                role: G,
                "aria-label": ee,
                inert: K,
                "data-channel": n,
                "data-dots-autoplay-pause": !0,
                "data-active": o,
                "data-animate": E,
                "data-visible": g,
                "data-page-visible": x,
                children: te
            }), t[41] = o, t[42] = n, t[43] = ee, t[44] = x, t[45] = E, t[46] = H, t[47] = W, t[48] = G, t[49] = K, t[50] = te, t[51] = g, t[52] = ne) : ne = t[52], ne
        }
    })),
    vt = t({
        default: () => Et
    });

function yt(e) {
    return {
        value: e.id,
        label: e.label
    }
}

function bt(e) {
    return e + 1
}
var xt, St, $, Ct, wt, Tt, Et, Dt = e((() => {
    xt = m(), i(), c(), St = n(p()), E(), b(), g(), j(), B(), A(), P(), I(), ne(), _t(), O(), R(), U(), $ = u(), Ct = (e, t, n) => {
        let r = n.filter(e => e.reactComponent === `DotsMessagingChannel`).map(e => {
            let t = _(e.data, e.localizedStrings);
            return t?.id ? {
                ...t,
                media: e.media,
                mediaIndex: t.mediaIndex ?? 0
            } : void 0
        }).filter(e => e !== void 0).filter(e => e.id !== `email`);
        return r.length ? r : (e?.channels ?? []).filter(e => e.id !== `email`).map(e => ({
            ...e,
            media: t
        }))
    }, wt = {
        chatgpt: `ChatGPT App`,
        imessage: `iMessage`,
        slack: `Slack`,
        teams: `Teams`
    }, Tt = {
        teams: {
            x: .76,
            y: .21,
            tilt: 12,
            facing: -18,
            width: .4,
            maxWidth: 164,
            compact: {
                x: .87,
                y: .4
            }
        },
        slack: {
            x: .24,
            y: .29,
            tilt: -12,
            facing: 14,
            width: .4,
            maxWidth: 164,
            compact: {
                x: .87,
                y: .28
            }
        },
        imessage: {
            x: .22,
            y: .55,
            tilt: -8,
            facing: 18,
            width: .4,
            maxWidth: 164,
            compact: {
                x: .13,
                y: .34
            }
        },
        chatgpt: {
            x: .77,
            y: .52,
            tilt: 8,
            facing: -18,
            width: .4,
            maxWidth: 164,
            compact: {
                x: .87,
                y: .56
            }
        }
    }, Et = e => {
        "use forget";
        let t = (0, xt.c)(79),
            {
                data: n,
                media: i,
                subcomponents: s,
                embedded: c
            } = e,
            l = s === void 0 ? [] : s,
            u = c !== void 0 && c,
            d = (0, St.useId)(),
            [f, p] = (0, St.useState)(),
            [m, h] = (0, St.useState)(!1),
            [g, _] = (0, St.useState)(!1),
            v = (0, St.useRef)(null),
            [y, b] = (0, St.useState)(0),
            [S, C] = (0, St.useState)(),
            w = r(),
            T = (0, St.useContext)(k);
        if (!T) throw Error(`Dots sections require DotsPageShell`);
        let {
            selected: E
        } = T, O = (0, St.useContext)(D), A;
        t[0] === O.renderer ? A = t[1] : (A = O.renderer.shouldUseContinuousMotion(), t[0] = O.renderer, t[1] = A);
        let j = A,
            P = Ct(n, i, l),
            I = P.find(e => e.id === f) ?? P[0],
            R = I?.id,
            B = n?.autoAdvanceEnabled === !0,
            V = S === R,
            H;
        t[2] !== R || t[3] !== P || t[4] !== p || t[5] !== h || t[6] !== C || t[7] !== _ ? (H = () => {
            let e = P.findIndex(e => e.id === R);
            C(void 0), h(!0), _(!1), p(P[(e + 1) % P.length].id)
        }, t[2] = R, t[3] = P, t[4] = p, t[5] = h, t[6] = C, t[7] = _, t[8] = H) : H = t[8];
        let U = (0, St.useEffectEvent)(H),
            G;
        t[9] !== U || t[10] !== j || t[11] !== B || t[12] !== P.length || t[13] !== w || t[14] !== V ? (G = () => {
            let e = v.current?.parentElement;
            if (!(!e || !v.current || !B || !j || w || !V || P.length < 2)) return W({
                viewport: v.current,
                region: e,
                delay: 0,
                advance: U
            })
        }, t[9] = U, t[10] = j, t[11] = B, t[12] = P.length, t[13] = w, t[14] = V, t[15] = G) : G = t[15];
        let K;
        if (t[16] !== j || t[17] !== B || t[18] !== R || t[19] !== P.length || t[20] !== w || t[21] !== V ? (K = [R, B, j, w, V, P.length], t[16] = j, t[17] = B, t[18] = R, t[19] = P.length, t[20] = w, t[21] = V, t[22] = K) : K = t[22], (0, St.useEffect)(G, K), !n || !I) return null;
        let q = z[E].color,
            J;
        t[23] === _ ? J = t[24] : (J = e => {
            e.currentTarget.contains(e.relatedTarget) || _(!1)
        }, t[23] = _, t[24] = J);
        let ne = Tt[I.id] ?? Tt.imessage,
            re = j && m,
            ie = n.exciteOnToggle === !0,
            Y;
        t[25] !== n.switchCharacterLabel || t[26] !== re || t[27] !== ie || t[28] !== ne ? (Y = (0, $.jsx)(`div`, {
            className: `dots-messaging-companion pointer-events-none absolute inset-0 z-1`,
            children: (0, $.jsx)(te, {
                placement: ne,
                animate: re,
                switchCharacterLabel: n.switchCharacterLabel,
                exciteOnToggle: ie
            })
        }), t[25] = n.switchCharacterLabel, t[26] = re, t[27] = ie, t[28] = ne, t[29] = Y) : Y = t[29];
        let ae = n.tabsLabel,
            X;
        t[30] === P ? X = t[31] : (X = P.map(yt), t[30] = P, t[31] = X);
        let oe;
        t[32] !== p || t[33] !== h || t[34] !== C || t[35] !== _ || t[36] !== b ? (oe = (e, t) => {
            C(void 0), b(bt), h(t), _(!t), p(e)
        }, t[32] = p, t[33] = h, t[34] = C, t[35] = _, t[36] = b, t[37] = oe) : oe = t[37];
        let se;
        t[38] !== I.id || t[39] !== n.tabsLabel || t[40] !== d || t[41] !== X || t[42] !== oe ? (se = (0, $.jsx)(`div`, {
            className: `relative z-10`,
            children: (0, $.jsx)(ee, {
                id: d,
                label: ae,
                choices: X,
                selected: I.id,
                onSelect: oe
            })
        }), t[38] = I.id, t[39] = n.tabsLabel, t[40] = d, t[41] = X, t[42] = oe, t[43] = se) : se = t[43];
        let ce;
        t[44] === Symbol.for(`react.memo_cache_sentinel`) ? (ce = (0, $.jsx)(`div`, {
            "aria-hidden": !0,
            className: `dots-messaging-phone-surface bg-token-bg-primary pointer-events-none relative mx-auto aspect-393/592 w-[68%] max-w-[344px] self-start rounded-t-[48px] [grid-area:1/1]`
        }), t[44] = ce) : ce = t[44];
        let le;
        if (t[45] !== j || t[46] !== m || t[47] !== I.id || t[48] !== P || t[49] !== q || t[50] !== d || t[51] !== g || t[52] !== E || t[53] !== C || t[54] !== y) {
            let e;
            t[56] !== j || t[57] !== m || t[58] !== I.id || t[59] !== q || t[60] !== d || t[61] !== g || t[62] !== E || t[63] !== C || t[64] !== y ? (e = e => {
                let t = e.mediaIndex === void 0 ? void 0 : e.media?.[e.mediaIndex],
                    n = e.presentation === `media` ? void 0 : wt[e.id],
                    r = e.id === I.id;
                return (0, $.jsxs)(o.div, {
                    role: `tabpanel`,
                    id: `${d}-${e.id}-panel`,
                    "aria-labelledby": `${d}-${e.id}`,
                    "aria-hidden": !r,
                    inert: !r,
                    tabIndex: r ? 0 : -1,
                    className: `pointer-events-none relative flex min-w-0 flex-col items-center gap-6 [grid-area:1/1]`,
                    initial: !1,
                    animate: {
                        opacity: +!!r
                    },
                    transition: {
                        duration: m ? j ? .24 : .12 : 0,
                        ease: [.25, .46, .45, .94]
                    },
                    children: [(0, $.jsx)(`div`, {
                        className: `dots-messaging-phone relative isolate w-full`,
                        children: n ? (0, $.jsx)(gt, {
                            channel: n,
                            storyVersion: y,
                            character: E,
                            accentColor: q,
                            active: r,
                            animate: j && !g,
                            messages: e.messages,
                            onStoryComplete: () => {
                                r && C(e.id)
                            }
                        }) : (0, $.jsx)(`div`, {
                            "data-dots-autoplay-pause": !0,
                            className: a(`dots-messaging-media relative mx-auto aspect-393/592 w-[68%] max-w-[344px] overflow-hidden rounded-t-[48px] border border-token-border-default bg-token-bg-primary`, M),
                            children: (t?.asset || t?.assetUrl || t?.videoEmbedUrl) && (0, $.jsx)(x, {
                                ...t,
                                className: r ? `pointer-events-auto` : void 0,
                                rounding: `none`
                            })
                        })
                    }), (0, $.jsxs)(`div`, {
                        "data-dots-autoplay-pause": !0,
                        className: a(`dots-messaging-caption relative z-10 max-w-[376px]`, r && `pointer-events-auto`, M),
                        children: [(0, $.jsx)(`h3`, {
                            className: `dots-h5`,
                            children: e.label
                        }), (0, $.jsx)(`p`, {
                            className: `dots-caption text-token-text-secondary mt-1`,
                            children: e.description
                        })]
                    })]
                }, e.id)
            }, t[56] = j, t[57] = m, t[58] = I.id, t[59] = q, t[60] = d, t[61] = g, t[62] = E, t[63] = C, t[64] = y, t[65] = e) : e = t[65], le = P.map(e), t[45] = j, t[46] = m, t[47] = I.id, t[48] = P, t[49] = q, t[50] = d, t[51] = g, t[52] = E, t[53] = C, t[54] = y, t[55] = le
        } else le = t[55];
        let ue;
        t[66] === le ? ue = t[67] : (ue = (0, $.jsxs)(`div`, {
            ref: v,
            className: `dots-messaging-stage relative mx-auto grid max-w-[650px]`,
            children: [ce, le]
        }), t[66] = le, t[67] = ue);
        let de;
        t[68] !== Y || t[69] !== se || t[70] !== ue || t[71] !== J ? (de = (0, $.jsx)(F, {
            as: `div`,
            className: `dots-messaging overflow-x-clip text-center`,
            children: (0, $.jsxs)(N, {
                className: `relative isolate`,
                onBlurCapture: J,
                children: [Y, se, ue]
            })
        }), t[68] = Y, t[69] = se, t[70] = ue, t[71] = J, t[72] = de) : de = t[72];
        let fe = de,
            pe;
        return t[73] !== fe || t[74] !== n.comingNext || t[75] !== n.description || t[76] !== n.heading || t[77] !== u ? (pe = u ? fe : (0, $.jsx)(L, {
            id: `messaging`,
            className: `dots-messaging-section`,
            headerExtra: n.comingNext ? (0, $.jsx)(`p`, {
                className: `dots-body dots-coming-next`,
                children: n.comingNext
            }) : void 0,
            title: n.heading,
            subtitle: n.description,
            variant: `medium`,
            children: fe
        }), t[73] = fe, t[74] = n.comingNext, t[75] = n.description, t[76] = n.heading, t[77] = u, t[78] = pe) : pe = t[78], pe
    }
}));
export {
    Dt as n, vt as r, Et as t
};
//# sourceMappingURL=e2dcc34d-gruvle178pydmw7b.js.map