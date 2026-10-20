import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as r,
    Jt as i,
    cn as a,
    en as o,
    jt as s,
    nn as c,
    q5 as l
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as ee,
    Hn as u,
    Rn as d,
    Tn as f,
    Vn as p,
    zn as m
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    n as h,
    r as g
} from "./f9d93d16-owbe787c89qcsunp.js";
import {
    nC as _,
    oC as v
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    r as y,
    t as b
} from "./ee72d6dc-f8cj7adv5uepyorb.js";
import {
    l as x,
    u as S
} from "./c470f5ab-in0lllrdrzeo67gs.js";
import {
    n as C,
    t as w
} from "./b2c255f5-h4g7j7aegxig8sr2.js";
import {
    n as T,
    t as E
} from "./9e9d0eec-9crh68563osmbgzl.js";
import {
    n as D,
    t as O
} from "./9e38ec96-dbmfvz58bri9hpdp.js";
import {
    t as k
} from "./c7a90257-h8bu5i1psxpuvu4f.js";
import {
    c as A,
    s as j
} from "./0f2a693e-ixuu1upjhavxhvub.js";
import {
    n as M,
    r as N,
    t as P
} from "./3fb45623-c8nw91w9a2dupdq6.js";
import {
    n as F,
    t as I
} from "./d25f8a5b-mw77t0ol7wnh7pxu.js";
import {
    i as L,
    t as R
} from "./bfac314f-blouvrkeov0djtxr.js";
import {
    n as z,
    t as B
} from "./98b68013-ohb5zcsm54dzzrmw.js";
import {
    n as V,
    t as H
} from "./c989edf1-f0u66lchibthyuuz.js";
import {
    n as U,
    r as W
} from "./2f949187-lgfjkv2sr8j8gygo.js";
var G, K, q, J, te, ne = e((() => {
        G = f(), _(), K = n(u()), s(), q = n(u()), T(), V(), J = p(), te = e => {
            "use forget";
            let t = (0, G.c)(34),
                {
                    placement: n,
                    animate: r,
                    switchCharacterLabel: i,
                    exciteOnToggle: s
                } = e,
                l = (0, q.useRef)(null),
                [ee, u] = (0, q.useState)(!1),
                d, f;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = () => {
                let e = l.current;
                if (!e) return;
                let t = new IntersectionObserver(e => {
                    let [t] = e;
                    return u(t.isIntersecting)
                }, {
                    rootMargin: `160px`
                });
                return t.observe(e), () => t.disconnect()
            }, f = [], t[0] = d, t[1] = f) : (d = t[0], f = t[1]), (0, K.useEffect)(d, f);
            let p;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
                width: 0,
                height: 0
            }, t[2] = p) : p = t[2];
            let [m, h] = (0, q.useState)(p), [g, _] = (0, q.useState)(!1), y;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (y = {
                x: 0,
                y: 0
            }, t[3] = y) : y = t[3];
            let b = c(y),
                x = (0, q.useRef)(!1),
                S = (0, K.useContext)(E),
                C;
            t[4] === S.renderer ? C = t[5] : (C = S.renderer.shouldUseContinuousMotion(), t[4] = S.renderer, t[5] = C);
            let w = C,
                T = Math.min(m.width * n.width, n.maxWidth) * 1.6,
                D = m.width < 600 && n.compact ? n.compact : n,
                O = D.x * m.width,
                k = D.y * m.height,
                A;
            t[6] === T ? A = t[7] : (A = e => `translate3d(${e.x-T/2}px, ${e.y-T/2}px, 0)`, t[6] = T, t[7] = A);
            let j = o(b, A),
                M;
            t[8] !== m.height || t[9] !== m.width ? (M = e => ({
                x: (e.x - m.width / 2) / 100,
                y: (m.height / 2 - e.y) / 100
            }), t[8] = m.height, t[9] = m.width, t[10] = M) : M = t[10];
            let N = o(b, M),
                P, F;
            t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (F = () => {
                let e = l.current;
                if (!e) return;
                let t = new ResizeObserver(e => {
                        let [t] = e;
                        return h({
                            width: t.contentRect.width,
                            height: t.contentRect.height
                        })
                    }),
                    n = () => _(!document.hidden);
                return t.observe(e), n(), document.addEventListener(`visibilitychange`, n), () => {
                    t.disconnect(), document.removeEventListener(`visibilitychange`, n)
                }
            }, P = [l], t[11] = P, t[12] = F) : (P = t[11], F = t[12]), v(F, P);
            let I, L;
            t[13] !== r || t[14] !== w || t[15] !== g || t[16] !== b || t[17] !== m.width || t[18] !== ee || t[19] !== O || t[20] !== k ? (I = () => {
                if (!m.width) return;
                if (!x.current || !r || !w || !ee || !g) {
                    b.set({
                        x: O,
                        y: k
                    }), x.current = !0;
                    return
                }
                let e = 0,
                    t = performance.now(),
                    n = r => {
                        let i = 1 - Math.exp(-10 * Math.min((r - t) / 1e3, .05));
                        t = r;
                        let a = b.get(),
                            o = {
                                x: a.x + (O - a.x) * i,
                                y: a.y + (k - a.y) * i
                            };
                        if (Math.abs(O - o.x) + Math.abs(k - o.y) < .01) {
                            b.set({
                                x: O,
                                y: k
                            });
                            return
                        }
                        b.set(o), e = requestAnimationFrame(n)
                    };
                return e = requestAnimationFrame(n), () => cancelAnimationFrame(e)
            }, L = [O, k, m.width, r, w, ee, g, b], t[13] = r, t[14] = w, t[15] = g, t[16] = b, t[17] = m.width, t[18] = ee, t[19] = O, t[20] = k, t[21] = I, t[22] = L) : (I = t[21], L = t[22]), v(I, L);
            let R;
            t[23] !== r || t[24] !== T || t[25] !== s || t[26] !== N || t[27] !== n || t[28] !== m.width || t[29] !== i || t[30] !== j ? (R = m.width > 0 && (0, J.jsx)(a.div, {
                className: `absolute top-0 left-0`,
                style: {
                    width: T,
                    height: T,
                    transform: j
                },
                children: (0, J.jsx)(H, {
                    className: `size-full`,
                    lightOrigin: N,
                    switchCharacterLabel: i,
                    exciteOnToggle: s,
                    placement: {
                        ...n,
                        compact: void 0,
                        x: .5,
                        y: .5,
                        width: .625,
                        animate: r
                    }
                })
            }), t[23] = r, t[24] = T, t[25] = s, t[26] = N, t[27] = n, t[28] = m.width, t[29] = i, t[30] = j, t[31] = R) : R = t[31];
            let z;
            return t[32] === R ? z = t[33] : (z = (0, J.jsx)(`div`, {
                ref: l,
                className: `pointer-events-none relative size-full`,
                children: R
            }), t[32] = R, t[33] = z), z
        }
    })),
    re, ie, Y, ae, X = e((() => {
        m(), re = d({
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
        oe = f(), se = n(u()), C(), ce = p(), le = e => {
            "use forget";
            let t = (0, oe.c)(3),
                {
                    artwork: n
                } = (0, se.useContext)(w),
                r;
            return t[0] !== n.oLogo || t[1] !== e ? (r = n.oLogo ? (0, ce.jsx)(`img`, {
                ...e,
                src: n.oLogo,
                alt: ``
            }) : null, t[0] = n.oLogo, t[1] = e, t[2] = r) : r = t[2], r
        }
    })),
    de, fe, pe, me = e((() => {
        de = p(), u(), fe = e => (0, de.jsx)(`svg`, {
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
        he = p(), u(), ge = e => (0, he.jsx)(`svg`, {
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
        ye = p(), u(), be = e => (0, ye.jsx)(`svg`, {
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
        Ce = p(), u(), we = e => (0, Ce.jsx)(`svg`, {
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
        De = p(), u(), Oe = e => (0, De.jsx)(`svg`, {
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
        je = p(), u(), Me = e => (0, je.jsx)(`svg`, {
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
        Fe = p(), u(), Ie = e => (0, Fe.jsx)(`svg`, {
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
        ze = p(), u(), Be = e => (0, ze.jsx)(`svg`, {
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
        Ue = p(), u(), We = e => (0, Ue.jsxs)(`svg`, {
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
        Je = f(), Ye = n(u()), C(), s(), m(), X(), ue(), me(), ve(), Se(), Ee(), Ae(), Pe(), Re(), He(), Ke(), S(), qe(), r(), Q = p(), Xe = {
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
            t[0] === r ? i = t[1] : (i = l(Z.typing, r), t[0] = r, t[1] = i);
            let a, o, s;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsx)(`i`, {}), o = (0, Q.jsx)(`i`, {}), s = (0, Q.jsx)(`i`, {}), t[2] = a, t[3] = o, t[4] = s) : (a = t[2], o = t[3], s = t[4]);
            let c;
            return t[5] === i ? c = t[6] : (c = (0, Q.jsxs)(`div`, {
                className: i,
                "aria-hidden": `true`,
                children: [a, o, s]
            }), t[5] = i, t[6] = c), c
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
                } = (0, Ye.useContext)(w);
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
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = l(Z.dotsAvatar, `size-9 rounded-lg bg-(--channel-accent-soft) object-contain`), t[0] = r) : r = t[0];
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
                } = (0, Ye.useContext)(w),
                {
                    formatMessage: a
                } = ee(),
                o = r?.name ?? ``,
                s;
            t[0] !== a || t[1] !== r || t[2] !== o ? (s = (e, t) => ae(r, e, a, {
                name: o,
                ...t === void 0 ? {} : t
            }), t[0] = a, t[1] = r, t[2] = o, t[3] = s) : s = t[3];
            let c = s,
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
            t[10] === o ? m = t[11] : (m = (0, Q.jsx)(`span`, {
                className: Z.namePill,
                children: o
            }), t[10] = o, t[11] = m);
            let h;
            t[12] !== f || t[13] !== m ? (h = (0, Q.jsxs)(`div`, {
                className: Z.chatHeader,
                children: [d, f, p, m]
            }), t[12] = f, t[13] = m, t[14] = h) : h = t[14];
            let g;
            t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (g = l(Z.bubble, Z.chatFirst), t[15] = g) : g = t[15];
            let _;
            t[16] === c ? _ = t[17] : (_ = c(`chatFirst`), t[16] = c, t[17] = _);
            let v;
            t[18] === _ ? v = t[19] : (v = (0, Q.jsx)(`div`, {
                className: g,
                children: _
            }), t[18] = _, t[19] = v);
            let y;
            t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (y = l(Z.bubble, Z.chatReply), t[20] = y) : y = t[20];
            let b;
            t[21] === c ? b = t[22] : (b = c(`chatReply`), t[21] = c, t[22] = b);
            let x;
            t[23] === b ? x = t[24] : (x = (0, Q.jsx)(`div`, {
                className: y,
                children: b
            }), t[23] = b, t[24] = x);
            let S, C;
            t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, Q.jsx)(Qe, {
                className: Z.chatTyping
            }), C = l(Z.bubble, Z.chatDiagnosis), t[25] = S, t[26] = C) : (S = t[25], C = t[26]);
            let T;
            t[27] === c ? T = t[28] : (T = c(`chatDiagnosis`), t[27] = c, t[28] = T);
            let E;
            t[29] === T ? E = t[30] : (E = (0, Q.jsx)(`div`, {
                className: C,
                children: T
            }), t[29] = T, t[30] = E);
            let D;
            t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (D = l(Z.bubble, Z.chatFixed), t[31] = D) : D = t[31];
            let O;
            t[32] === c ? O = t[33] : (O = c(`chatFixed`), t[32] = c, t[33] = O);
            let k;
            t[34] === i.messagingHeart ? k = t[35] : (k = i.messagingHeart && (0, Q.jsx)(`img`, {
                src: i.messagingHeart,
                alt: ``
            }), t[34] = i.messagingHeart, t[35] = k);
            let A;
            t[36] === k ? A = t[37] : (A = (0, Q.jsx)(`span`, {
                className: Z.reaction,
                children: k
            }), t[36] = k, t[37] = A);
            let j;
            t[38] !== O || t[39] !== A ? (j = (0, Q.jsxs)(`div`, {
                className: D,
                children: [O, A]
            }), t[38] = O, t[39] = A, t[40] = j) : j = t[40];
            let M;
            return t[41] !== v || t[42] !== x || t[43] !== E || t[44] !== u || t[45] !== j || t[46] !== h ? (M = (0, Q.jsxs)(Q.Fragment, {
                children: [u, h, v, x, S, E, j]
            }), t[41] = v, t[42] = x, t[43] = E, t[44] = u, t[45] = j, t[46] = h, t[47] = M) : M = t[47], M
        }, nt = e => {
            "use forget";
            let t = (0, Je.c)(77),
                {
                    character: n,
                    animate: r,
                    messages: i
                } = e,
                o = r !== void 0 && r,
                {
                    formatMessage: s
                } = ee(),
                c = i?.name ?? ``,
                u;
            t[0] !== s || t[1] !== i || t[2] !== c ? (u = (e, t) => ae(i, e, s, {
                name: c,
                ...t === void 0 ? {} : t
            }), t[0] = s, t[1] = i, t[2] = c, t[3] = u) : u = t[3];
            let d = u,
                f;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (f = {
                selected: !1,
                animate: !1
            }, t[4] = f) : f = t[4];
            let [p, m] = (0, Ye.useState)(f), h = p.animate && o, g = `translateY(${p.selected?12:0}px)`, _;
            t[5] === g ? _ = t[6] : (_ = {
                transform: g
            }, t[5] = g, t[6] = _);
            let v = _,
                y;
            t[7] === h ? y = t[8] : (y = h ? {
                type: `spring`,
                stiffness: 420,
                damping: 26,
                mass: .8
            } : {
                duration: 0
            }, t[7] = h, t[8] = y);
            let b = y,
                x;
            t[9] === i ? x = t[10] : (x = (0, Q.jsx)(Ze, {
                imessage: !0,
                messages: i
            }), t[9] = i, t[10] = x);
            let S;
            t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (S = l(Z.imessageControl, Z.imessageBack), t[11] = S) : S = t[11];
            let C;
            t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, Q.jsx)(`span`, {
                className: S,
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
            }), t[12] = C) : C = t[12];
            let w;
            t[13] === n ? w = t[14] : (w = (0, Q.jsx)(`span`, {
                className: Z.contactAvatar,
                children: (0, Q.jsx)($e, {
                    character: n
                })
            }), t[13] = n, t[14] = w);
            let T;
            t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, Q.jsx)(`svg`, {
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
            }), t[15] = T) : T = t[15];
            let E;
            t[16] === c ? E = t[17] : (E = (0, Q.jsxs)(`span`, {
                className: Z.contactName,
                children: [c, T]
            }), t[16] = c, t[17] = E);
            let D;
            t[18] !== w || t[19] !== E ? (D = (0, Q.jsxs)(`div`, {
                className: Z.contact,
                children: [w, E]
            }), t[18] = w, t[19] = E, t[20] = D) : D = t[20];
            let O;
            t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (O = l(Z.imessageControl, Z.imessageVideo), t[21] = O) : O = t[21];
            let k;
            t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, Q.jsx)(`span`, {
                className: O,
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
            }), t[22] = k) : k = t[22];
            let A;
            t[23] !== D || t[24] !== x ? (A = (0, Q.jsxs)(`div`, {
                className: Z.imessageHeader,
                "aria-hidden": `true`,
                children: [x, C, D, k]
            }), t[23] = D, t[24] = x, t[25] = A) : A = t[25];
            let j = i?.imessageService ?? `iMessage`,
                M;
            t[26] === j ? M = t[27] : (M = (0, Q.jsx)(`span`, {
                children: j
            }), t[26] = j, t[27] = M);
            let N;
            t[28] === d ? N = t[29] : (N = d(`imessageTime`), t[28] = d, t[29] = N);
            let P;
            t[30] === N ? P = t[31] : (P = (0, Q.jsx)(`span`, {
                children: N
            }), t[30] = N, t[31] = P);
            let F;
            t[32] !== M || t[33] !== P ? (F = (0, Q.jsxs)(`div`, {
                className: Z.timestamp,
                "aria-hidden": `true`,
                children: [M, P]
            }), t[32] = M, t[33] = P, t[34] = F) : F = t[34];
            let I;
            t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, Q.jsx)(Qe, {
                className: Z.imessageTyping
            }), t[35] = I) : I = t[35];
            let L;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (L = l(Z.bubble, Z.imessageIncoming), t[36] = L) : L = t[36];
            let R;
            t[37] === d ? R = t[38] : (R = d(`heartLabel`, {
                message: d(`imessageIncoming`)
            }), t[37] = d, t[38] = R);
            let z = p.selected,
                B;
            t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (B = e => {
                let t = e.detail > 0;
                m(e => ({
                    selected: !e.selected,
                    animate: t
                }))
            }, t[39] = B) : B = t[39];
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
            t[44] !== h || t[45] !== p.selected || t[46] !== R || t[47] !== V ? (W = (0, Q.jsxs)(`button`, {
                type: `button`,
                className: L,
                "aria-label": R,
                "aria-pressed": z,
                "data-reaction-animate": h,
                onClick: B,
                children: [V, H, U]
            }), t[44] = h, t[45] = p.selected, t[46] = R, t[47] = V, t[48] = W) : W = t[48];
            let G;
            t[49] !== v || t[50] !== b || t[51] !== W ? (G = (0, Q.jsxs)(a.div, {
                className: Z.imessageShift,
                initial: !1,
                animate: v,
                transition: b,
                children: [I, W]
            }), t[49] = v, t[50] = b, t[51] = W, t[52] = G) : G = t[52];
            let K = h ? .065 : 0,
                q;
            t[53] !== b || t[54] !== K ? (q = {
                ...b,
                delay: K
            }, t[53] = b, t[54] = K, t[55] = q) : q = t[55];
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
            t[68] !== v || t[69] !== q || t[70] !== Y ? (X = (0, Q.jsx)(a.div, {
                className: Z.imessageShift,
                initial: !1,
                animate: v,
                transition: q,
                children: Y
            }), t[68] = v, t[69] = q, t[70] = Y, t[71] = X) : X = t[71];
            let oe;
            return t[72] !== A || t[73] !== F || t[74] !== G || t[75] !== X ? (oe = (0, Q.jsxs)(Q.Fragment, {
                children: [A, F, G, X]
            }), t[72] = A, t[73] = F, t[74] = G, t[75] = X, t[76] = oe) : oe = t[76], oe
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
                    time: a,
                    className: o,
                    children: s
                } = e,
                c = i !== void 0 && i,
                u = o === void 0 ? `` : o,
                {
                    formatMessage: d
                } = ee(),
                f = r?.name ?? ``,
                p;
            t[0] !== d || t[1] !== r || t[2] !== f ? (p = (e, t) => ae(r, e, d, {
                name: f,
                ...t === void 0 ? {} : t
            }), t[0] = d, t[1] = r, t[2] = f, t[3] = p) : p = t[3];
            let m = p,
                h;
            t[4] === u ? h = t[5] : (h = l(Z.slackMessage, u), t[4] = u, t[5] = h);
            let g;
            t[6] !== n || t[7] !== r?.teammateInitials || t[8] !== r?.teammateName || t[9] !== c ? (g = c ? (0, Q.jsx)(`span`, {
                className: Z.saraAvatar,
                children: r?.teammateInitials ?? Array.from(r?.teammateName ?? ``)[0]
            }) : (0, Q.jsx)(et, {
                character: n
            }), t[6] = n, t[7] = r?.teammateInitials, t[8] = r?.teammateName, t[9] = c, t[10] = g) : g = t[10];
            let _ = c ? r?.teammateName ?? `` : f,
                v;
            t[11] === _ ? v = t[12] : (v = (0, Q.jsx)(`b`, {
                children: _
            }), t[11] = _, t[12] = v);
            let y;
            t[13] !== c || t[14] !== m ? (y = !c && (0, Q.jsx)(`span`, {
                className: Z.appBadge,
                children: m(`appBadge`)
            }), t[13] = c, t[14] = m, t[15] = y) : y = t[15];
            let b;
            t[16] === a ? b = t[17] : (b = (0, Q.jsx)(`time`, {
                children: a
            }), t[16] = a, t[17] = b);
            let x;
            t[18] !== v || t[19] !== y || t[20] !== b ? (x = (0, Q.jsxs)(`div`, {
                className: Z.slackAuthor,
                children: [v, y, b]
            }), t[18] = v, t[19] = y, t[20] = b, t[21] = x) : x = t[21];
            let S;
            t[22] !== s || t[23] !== x ? (S = (0, Q.jsxs)(`div`, {
                className: Z.slackBody,
                children: [x, s]
            }), t[22] = s, t[23] = x, t[24] = S) : S = t[24];
            let C;
            return t[25] !== S || t[26] !== h || t[27] !== g ? (C = (0, Q.jsxs)(`div`, {
                className: h,
                children: [g, S]
            }), t[25] = S, t[26] = h, t[27] = g, t[28] = C) : C = t[28], C
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
                } = ee(),
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
            t[6] === a ? d = t[7] : (d = a ? (0, Q.jsx)(x, {
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
            let h = r?.workChannel ?? ``,
                g;
            t[17] === h ? g = t[18] : (g = (0, Q.jsx)(`b`, {
                children: h
            }), t[17] = h, t[18] = g);
            let _;
            t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, Q.jsx)(`span`, {
                children: `…`
            }), t[19] = _) : _ = t[19];
            let v;
            t[20] === g ? v = t[21] : (v = (0, Q.jsxs)(`div`, {
                className: Z.slackChannel,
                children: [g, _]
            }), t[20] = g, t[21] = v);
            let y;
            t[22] === l ? y = t[23] : (y = l(`messages`), t[22] = l, t[23] = y);
            let b;
            t[24] === y ? b = t[25] : (b = (0, Q.jsx)(`span`, {
                children: y
            }), t[24] = y, t[25] = b);
            let S;
            t[26] === l ? S = t[27] : (S = l(`pins`), t[26] = l, t[27] = S);
            let C;
            t[28] === S ? C = t[29] : (C = (0, Q.jsx)(`span`, {
                children: S
            }), t[28] = S, t[29] = C);
            let w;
            t[30] === l ? w = t[31] : (w = l(`files`), t[30] = l, t[31] = w);
            let T;
            t[32] === w ? T = t[33] : (T = (0, Q.jsx)(`span`, {
                children: w
            }), t[32] = w, t[33] = T);
            let E;
            t[34] !== b || t[35] !== C || t[36] !== T ? (E = (0, Q.jsxs)(`div`, {
                className: Z.slackTabs,
                children: [b, C, T]
            }), t[34] = b, t[35] = C, t[36] = T, t[37] = E) : E = t[37];
            let D;
            t[38] === l ? D = t[39] : (D = l(`today`), t[38] = l, t[39] = D);
            let O;
            t[40] === D ? O = t[41] : (O = (0, Q.jsx)(`div`, {
                className: Z.slackToday,
                children: D
            }), t[40] = D, t[41] = O);
            let k = r?.workTime0 ?? ``,
                A;
            t[42] === l ? A = t[43] : (A = l(`slackFirst`), t[42] = l, t[43] = A);
            let j;
            t[44] === A ? j = t[45] : (j = (0, Q.jsx)(`p`, {
                children: A
            }), t[44] = A, t[45] = j);
            let M;
            t[46] !== n || t[47] !== r || t[48] !== k || t[49] !== j ? (M = (0, Q.jsx)(it, {
                character: n,
                messages: r,
                time: k,
                children: j
            }), t[46] = n, t[47] = r, t[48] = k, t[49] = j, t[50] = M) : M = t[50];
            let N = r?.workTime1 ?? ``,
                P;
            t[51] === l ? P = t[52] : (P = l(`slackReply`), t[51] = l, t[52] = P);
            let F;
            t[53] === P ? F = t[54] : (F = (0, Q.jsx)(`p`, {
                children: P
            }), t[53] = P, t[54] = F);
            let I;
            t[55] !== n || t[56] !== r || t[57] !== N || t[58] !== F ? (I = (0, Q.jsx)(it, {
                character: n,
                messages: r,
                teammate: !0,
                time: N,
                className: Z.slackReply,
                children: F
            }), t[55] = n, t[56] = r, t[57] = N, t[58] = F, t[59] = I) : I = t[59];
            let L = r?.workTime2 ?? ``,
                R;
            t[60] === l ? R = t[61] : (R = l(`slackDone`), t[60] = l, t[61] = R);
            let z;
            t[62] === R ? z = t[63] : (z = (0, Q.jsx)(`p`, {
                children: R
            }), t[62] = R, t[63] = z);
            let B;
            t[64] === l ? B = t[65] : (B = l(`launchFaq`), t[64] = l, t[65] = B);
            let V;
            t[66] === B ? V = t[67] : (V = (0, Q.jsx)(`b`, {
                children: B
            }), t[66] = B, t[67] = V);
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
            t[75] !== n || t[76] !== r || t[77] !== L || t[78] !== z || t[79] !== W ? (G = (0, Q.jsxs)(it, {
                character: n,
                messages: r,
                time: L,
                className: Z.slackDone,
                children: [z, W]
            }), t[75] = n, t[76] = r, t[77] = L, t[78] = z, t[79] = W, t[80] = G) : G = t[80];
            let K;
            t[81] !== M || t[82] !== I || t[83] !== G ? (K = (0, Q.jsxs)(`div`, {
                className: Z.slackConversation,
                children: [M, I, G]
            }), t[81] = M, t[82] = I, t[83] = G, t[84] = K) : K = t[84];
            let q;
            return t[85] !== v || t[86] !== E || t[87] !== O || t[88] !== u || t[89] !== K || t[90] !== m ? (q = (0, Q.jsxs)(Q.Fragment, {
                children: [u, m, v, E, O, K]
            }), t[85] = v, t[86] = E, t[87] = O, t[88] = u, t[89] = K, t[90] = m, t[91] = q) : q = t[91], q
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
        ft = f(), _(), pt = n(u()), C(), mt = n(u()), m(), r(), A(), ct(), X(), qe(), ht = p(), gt = e => {
            "use forget";
            let t = (0, ft.c)(53),
                {
                    channel: n,
                    character: r,
                    accentColor: i,
                    active: a,
                    animate: o,
                    messages: s,
                    onStoryComplete: c,
                    storyVersion: u
                } = e,
                d = u === void 0 ? 0 : u,
                {
                    names: f
                } = (0, pt.useContext)(w),
                {
                    formatMessage: p
                } = ee(),
                m = (0, pt.useRef)(null),
                [h, g] = (0, mt.useState)(!1),
                _, y;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = () => {
                let e = m.current;
                if (!e) return;
                let t = new IntersectionObserver(e => {
                    let [t] = e;
                    return g(t.isIntersecting)
                }, {
                    threshold: .25
                });
                return t.observe(e), () => t.disconnect()
            }, y = [], t[0] = _, t[1] = y) : (_ = t[0], y = t[1]), (0, mt.useEffect)(_, y);
            let [b, x] = (0, mt.useState)(!1), [S, C] = (0, mt.useState)(o);
            a && S !== o && C(o);
            let T = a ? o : S,
                E;
            t[2] === c ? E = t[3] : (E = () => c?.(), t[2] = c, t[3] = E);
            let D = (0, pt.useEffectEvent)(E),
                O;
            t[4] !== a || t[5] !== o ? (O = () => {
                a && o && m.current?.getAnimations?.({
                    subtree: !0
                }).forEach(lt)
            }, t[4] = a, t[5] = o, t[6] = O) : O = t[6];
            let k;
            t[7] !== a || t[8] !== o || t[9] !== d ? (k = [a, o, m, d], t[7] = a, t[8] = o, t[9] = d, t[10] = k) : k = t[10], v(O, k);
            let A;
            t[11] !== a || t[12] !== o || t[13] !== D ? (A = () => {
                let e = m.current;
                if (!e || !a || !o) return;
                let t = 0,
                    n = !1,
                    r = () => {
                        t = 0;
                        let r = e.getAnimations({
                            subtree: !0
                        }).filter(ut);
                        !n && r.length && r.every(dt) && (n = !0, D())
                    },
                    i = () => {
                        t ||= requestAnimationFrame(r)
                    };
                for (let t of [`animationstart`, `animationend`, `animationcancel`]) e.addEventListener(t, i);
                return i(), () => {
                    cancelAnimationFrame(t);
                    for (let t of [`animationstart`, `animationend`, `animationcancel`]) e.removeEventListener(t, i)
                }
            }, t[11] = a, t[12] = o, t[13] = D, t[14] = A) : A = t[14];
            let M;
            t[15] !== a || t[16] !== o || t[17] !== d ? (M = [a, o, d], t[15] = a, t[16] = o, t[17] = d, t[18] = M) : M = t[18], (0, mt.useEffect)(A, M);
            let N, P;
            t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (P = () => {
                let e = m.current;
                if (!e) return;
                let t = new ResizeObserver(t => {
                        let [n] = t;
                        e.style.setProperty(`--phone-scale`, String(n.contentRect.width / 393))
                    }),
                    n = () => x(!document.hidden);
                return t.observe(e), n(), document.addEventListener(`visibilitychange`, n), () => {
                    t.disconnect(), document.removeEventListener(`visibilitychange`, n)
                }
            }, N = [m], t[19] = N, t[20] = P) : (N = t[19], P = t[20]), (0, mt.useEffect)(P, N);
            let F = st[n],
                I = s?.name ?? f[r] ?? ``,
                L;
            t[21] !== s || t[22] !== I ? (L = {
                ...s,
                name: I
            }, t[21] = s, t[22] = I, t[23] = L) : L = t[23];
            let R = L,
                z;
            t[24] !== n || t[25] !== p || t[26] !== s || t[27] !== I ? (z = s?.description === void 0 ? ae(s, Xe[n], p, {
                name: I
            }) : Y(s.description, {
                name: I
            }), t[24] = n, t[25] = p, t[26] = s, t[27] = I, t[28] = z) : z = t[28];
            let B = z,
                V = a && `pointer-events-auto`,
                H;
            t[29] === V ? H = t[30] : (H = l(Z.phone, j, V), t[29] = V, t[30] = H);
            let U;
            t[31] === i ? U = t[32] : (U = {
                "--channel-accent": i
            }, t[31] = i, t[32] = U);
            let W = U,
                G = n === `iMessage` ? `group` : `img`,
                K = !a,
                q = n !== `iMessage`,
                J;
            t[33] !== F || t[34] !== r || t[35] !== R || t[36] !== T ? (J = (0, ht.jsx)(F, {
                character: r,
                animate: T,
                messages: R
            }), t[33] = F, t[34] = r, t[35] = R, t[36] = T, t[37] = J) : J = t[37];
            let te;
            t[38] !== q || t[39] !== J ? (te = (0, ht.jsx)(`div`, {
                className: Z.stage,
                "aria-hidden": q,
                children: J
            }), t[38] = q, t[39] = J, t[40] = te) : te = t[40];
            let ne;
            return t[41] !== a || t[42] !== n || t[43] !== B || t[44] !== b || t[45] !== T || t[46] !== H || t[47] !== W || t[48] !== G || t[49] !== K || t[50] !== te || t[51] !== h ? (ne = (0, ht.jsx)(`div`, {
                ref: m,
                className: H,
                style: W,
                role: G,
                "aria-label": B,
                inert: K,
                "data-channel": n,
                "data-dots-autoplay-pause": !0,
                "data-active": a,
                "data-animate": T,
                "data-visible": h,
                "data-page-visible": b,
                children: te
            }), t[41] = a, t[42] = n, t[43] = B, t[44] = b, t[45] = T, t[46] = H, t[47] = W, t[48] = G, t[49] = K, t[50] = te, t[51] = h, t[52] = ne) : ne = t[52], ne
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
    xt = f(), r(), s(), St = n(u()), T(), y(), h(), A(), z(), k(), N(), F(), ne(), _t(), D(), L(), U(), $ = p(), Ct = (e, t, n) => {
        let r = n.filter(e => e.reactComponent === `DotsMessagingChannel`).map(e => {
            let t = g(e.data, e.localizedStrings);
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
                media: r,
                subcomponents: o,
                embedded: s
            } = e,
            c = o === void 0 ? [] : o,
            ee = s !== void 0 && s,
            u = (0, St.useId)(),
            [d, f] = (0, St.useState)(),
            [p, m] = (0, St.useState)(!1),
            [h, g] = (0, St.useState)(!1),
            _ = (0, St.useRef)(null),
            [v, y] = (0, St.useState)(0),
            [x, S] = (0, St.useState)(),
            C = i(),
            w = (0, St.useContext)(O);
        if (!w) throw Error(`Dots sections require DotsPageShell`);
        let {
            selected: T
        } = w, D = (0, St.useContext)(E), k;
        t[0] === D.renderer ? k = t[1] : (k = D.renderer.shouldUseContinuousMotion(), t[0] = D.renderer, t[1] = k);
        let A = k,
            N = Ct(n, r, c),
            F = N.find(e => e.id === d) ?? N[0],
            L = F?.id,
            z = n?.autoAdvanceEnabled === !0,
            V = x === L,
            H;
        t[2] !== L || t[3] !== N || t[4] !== f || t[5] !== m || t[6] !== S || t[7] !== g ? (H = () => {
            let e = N.findIndex(e => e.id === L);
            S(void 0), m(!0), g(!1), f(N[(e + 1) % N.length].id)
        }, t[2] = L, t[3] = N, t[4] = f, t[5] = m, t[6] = S, t[7] = g, t[8] = H) : H = t[8];
        let U = (0, St.useEffectEvent)(H),
            G;
        t[9] !== U || t[10] !== A || t[11] !== z || t[12] !== N.length || t[13] !== C || t[14] !== V ? (G = () => {
            let e = _.current?.parentElement;
            if (!(!e || !_.current || !z || !A || C || !V || N.length < 2)) return W({
                viewport: _.current,
                region: e,
                delay: 0,
                advance: U
            })
        }, t[9] = U, t[10] = A, t[11] = z, t[12] = N.length, t[13] = C, t[14] = V, t[15] = G) : G = t[15];
        let K;
        if (t[16] !== A || t[17] !== z || t[18] !== L || t[19] !== N.length || t[20] !== C || t[21] !== V ? (K = [L, z, A, C, V, N.length], t[16] = A, t[17] = z, t[18] = L, t[19] = N.length, t[20] = C, t[21] = V, t[22] = K) : K = t[22], (0, St.useEffect)(G, K), !n || !F) return null;
        let q = R[T].color,
            J;
        t[23] === g ? J = t[24] : (J = e => {
            e.currentTarget.contains(e.relatedTarget) || g(!1)
        }, t[23] = g, t[24] = J);
        let ne = Tt[F.id] ?? Tt.imessage,
            re = A && p,
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
        t[30] === N ? X = t[31] : (X = N.map(yt), t[30] = N, t[31] = X);
        let oe;
        t[32] !== f || t[33] !== m || t[34] !== S || t[35] !== g || t[36] !== y ? (oe = (e, t) => {
            S(void 0), y(bt), m(t), g(!t), f(e)
        }, t[32] = f, t[33] = m, t[34] = S, t[35] = g, t[36] = y, t[37] = oe) : oe = t[37];
        let se;
        t[38] !== F.id || t[39] !== n.tabsLabel || t[40] !== u || t[41] !== X || t[42] !== oe ? (se = (0, $.jsx)(`div`, {
            className: `relative z-10`,
            children: (0, $.jsx)(B, {
                id: u,
                label: ae,
                choices: X,
                selected: F.id,
                onSelect: oe
            })
        }), t[38] = F.id, t[39] = n.tabsLabel, t[40] = u, t[41] = X, t[42] = oe, t[43] = se) : se = t[43];
        let ce;
        t[44] === Symbol.for(`react.memo_cache_sentinel`) ? (ce = (0, $.jsx)(`div`, {
            "aria-hidden": !0,
            className: `dots-messaging-phone-surface bg-token-bg-primary pointer-events-none relative mx-auto aspect-393/592 w-[68%] max-w-[344px] self-start rounded-t-[48px] [grid-area:1/1]`
        }), t[44] = ce) : ce = t[44];
        let le;
        if (t[45] !== A || t[46] !== p || t[47] !== F.id || t[48] !== N || t[49] !== q || t[50] !== u || t[51] !== h || t[52] !== T || t[53] !== S || t[54] !== v) {
            let e;
            t[56] !== A || t[57] !== p || t[58] !== F.id || t[59] !== q || t[60] !== u || t[61] !== h || t[62] !== T || t[63] !== S || t[64] !== v ? (e = e => {
                let t = e.mediaIndex === void 0 ? void 0 : e.media?.[e.mediaIndex],
                    n = e.presentation === `media` ? void 0 : wt[e.id],
                    r = e.id === F.id;
                return (0, $.jsxs)(a.div, {
                    role: `tabpanel`,
                    id: `${u}-${e.id}-panel`,
                    "aria-labelledby": `${u}-${e.id}`,
                    "aria-hidden": !r,
                    inert: !r,
                    tabIndex: r ? 0 : -1,
                    className: `pointer-events-none relative flex min-w-0 flex-col items-center gap-6 [grid-area:1/1]`,
                    initial: !1,
                    animate: {
                        opacity: +!!r
                    },
                    transition: {
                        duration: p ? A ? .24 : .12 : 0,
                        ease: [.25, .46, .45, .94]
                    },
                    children: [(0, $.jsx)(`div`, {
                        className: `dots-messaging-phone relative isolate w-full`,
                        children: n ? (0, $.jsx)(gt, {
                            channel: n,
                            storyVersion: v,
                            character: T,
                            accentColor: q,
                            active: r,
                            animate: A && !h,
                            messages: e.messages,
                            onStoryComplete: () => {
                                r && S(e.id)
                            }
                        }) : (0, $.jsx)(`div`, {
                            "data-dots-autoplay-pause": !0,
                            className: l(`dots-messaging-media relative mx-auto aspect-393/592 w-[68%] max-w-[344px] overflow-hidden rounded-t-[48px] border border-token-border-default bg-token-bg-primary`, j),
                            children: (t?.asset || t?.assetUrl || t?.videoEmbedUrl) && (0, $.jsx)(b, {
                                ...t,
                                className: r ? `pointer-events-auto` : void 0,
                                rounding: `none`
                            })
                        })
                    }), (0, $.jsxs)(`div`, {
                        "data-dots-autoplay-pause": !0,
                        className: l(`dots-messaging-caption relative z-10 max-w-[376px]`, r && `pointer-events-auto`, j),
                        children: [(0, $.jsx)(`h3`, {
                            className: `dots-h5`,
                            children: e.label
                        }), (0, $.jsx)(`p`, {
                            className: `dots-caption text-token-text-secondary mt-1`,
                            children: e.description
                        })]
                    })]
                }, e.id)
            }, t[56] = A, t[57] = p, t[58] = F.id, t[59] = q, t[60] = u, t[61] = h, t[62] = T, t[63] = S, t[64] = v, t[65] = e) : e = t[65], le = N.map(e), t[45] = A, t[46] = p, t[47] = F.id, t[48] = N, t[49] = q, t[50] = u, t[51] = h, t[52] = T, t[53] = S, t[54] = v, t[55] = le
        } else le = t[55];
        let ue;
        t[66] === le ? ue = t[67] : (ue = (0, $.jsxs)(`div`, {
            ref: _,
            className: `dots-messaging-stage relative mx-auto grid max-w-[650px]`,
            children: [ce, le]
        }), t[66] = le, t[67] = ue);
        let de;
        t[68] !== Y || t[69] !== se || t[70] !== ue || t[71] !== J ? (de = (0, $.jsx)(P, {
            as: `div`,
            className: `dots-messaging overflow-x-clip text-center`,
            children: (0, $.jsxs)(M, {
                className: `relative isolate`,
                onBlurCapture: J,
                children: [Y, se, ue]
            })
        }), t[68] = Y, t[69] = se, t[70] = ue, t[71] = J, t[72] = de) : de = t[72];
        let fe = de,
            pe;
        return t[73] !== fe || t[74] !== n.comingNext || t[75] !== n.description || t[76] !== n.heading || t[77] !== ee ? (pe = ee ? fe : (0, $.jsx)(I, {
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
        }), t[73] = fe, t[74] = n.comingNext, t[75] = n.description, t[76] = n.heading, t[77] = ee, t[78] = pe) : pe = t[78], pe
    }
}));
export {
    Dt as n, vt as r, Et as t
};
//# sourceMappingURL=e2dcc34d-yfygftk2vtqt9q9x.js.map