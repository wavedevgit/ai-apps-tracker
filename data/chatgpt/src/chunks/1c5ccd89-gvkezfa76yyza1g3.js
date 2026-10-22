import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as n,
    $T as r,
    BO as i,
    GJ as a,
    Hv as o,
    I8 as s,
    IU as c,
    Iv as l,
    L5 as u,
    LU as d,
    LY as f,
    N1 as p,
    ND as m,
    QJ as h,
    Qy as g,
    R5 as _,
    R8 as v,
    RY as y,
    VO as b,
    Zy as ee,
    _D as x,
    c7 as te,
    dY as ne,
    dd as re,
    eE as S,
    eY as C,
    fd as w,
    git as T,
    k8 as E,
    ktt as D,
    l7 as O,
    lV as k,
    lY as ie,
    prt as A,
    q1 as j,
    q5 as M,
    rtt as N,
    sit as P,
    tV as F,
    urt as I
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as L,
    Ln as R,
    Nn as z,
    Rn as B,
    Vn as V,
    wn as H,
    zn as ae
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Kwn as U,
    OTt as W,
    TTt as oe,
    UPn as G,
    WPn as se,
    _Tn as K,
    __n as q,
    cit as ce,
    frt as le,
    h_n as ue,
    hrt as de,
    iit as fe,
    mrt as pe,
    nLn as me,
    nbt as he,
    prt as ge,
    qrt as _e,
    rLn as ve,
    rbt as ye,
    vTn as be,
    v_n as xe,
    zwn as Se
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    D_ as Ce,
    b_ as we,
    eh as Te,
    g_ as Ee,
    ih as De,
    k_ as Oe
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
import {
    i as ke,
    n as Ae,
    r as je,
    t as Me
} from "./f74d9a79-l5oy3sxzbx6w2jr9.js";

function Ne(e, t) {
    if (Pe(e.name)) return e.name;
    let n = p();
    if (!n) return e.id;
    let r = Fe({
        appId: e.id,
        accountId: n.id,
        workspace: n.isWorkspaceAccount(),
        locale: t
    }).data?.name;
    return r && Pe(r) ? r : e.id
}

function Pe(e) {
    return e.trim().length > 0 && !/(?:plugin_)?(?:asdk_app|connector)_[a-z0-9_-]+/i.test(e)
}
var Fe, Ie = e((() => {
    U(), be(), E(), j(), Fe = v(({
        appId: e,
        accountId: t,
        workspace: n,
        locale: r
    }) => s(() => Se(e, {
        accountId: t,
        workspace: n,
        locale: r,
        platform: `chat`,
        productSku: K.JIT_PLUGIN
    })))
}));

function Le() {
    "use no forget";
    return (0, Re.jsx)(`div`, {
        className: `h-full w-full divide-y divide-black/5 dark:divide-white/5`,
        children: Array.from({
            length: 5
        }).map((e, t) => (0, Re.jsxs)(`div`, {
            className: `flex items-center gap-4 p-4`,
            children: [(0, Re.jsx)(`div`, {
                className: `h-12 w-12 rounded-sm bg-black/[0.075] dark:bg-white/5`
            }), (0, Re.jsxs)(`div`, {
                className: `flex-1 space-y-1.5`,
                children: [(0, Re.jsx)(`div`, {
                    className: `h-4 w-3/5 rounded-sm bg-black/[0.075] dark:bg-white/5`
                }), (0, Re.jsx)(`div`, {
                    className: `h-4 w-2/5 rounded-sm bg-black/[0.075] dark:bg-white/5`
                })]
            }), (0, Re.jsx)(`div`, {
                className: `h-6 w-6 rounded-full border-2 border-black/10 dark:border-white/5`
            })]
        }, t))
    })
}
var Re, ze = e((() => {
    Re = L()
}));

function Be() {
    "use no forget";
    return (0, J.jsxs)(`div`, {
        className: `min-h-[460px] w-full`,
        children: [(0, J.jsxs)(`div`, {
            className: `absolute inset-0 z-10 flex h-full w-full flex-col`,
            children: [(0, J.jsx)(`div`, {
                className: `flex-auto`
            }), (0, J.jsxs)(`div`, {
                className: `flex h-14 w-full flex-row items-center justify-center gap-5 border-t-3 border-white/50 bg-black/50 px-6 opacity-50 dark:bg-white/10 dark:opacity-30`,
                children: [(0, J.jsx)(`svg`, {
                    width: `24`,
                    height: `24`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    xmlns: `http://www.w3.org/2000/svg`,
                    children: (0, J.jsx)(`path`, {
                        d: `M4.99988 19.0842V4.91552C4.99988 3.43597 6.63329 2.53932 7.88152 3.33365L19.0141 10.418C20.1719 11.1548 20.1719 12.845 19.0141 13.5817L7.88152 20.6661C6.63329 21.4604 4.99988 20.5638 4.99988 19.0842Z`,
                        stroke: `white`,
                        "stroke-width": `1.8`
                    })
                }), (0, J.jsxs)(`svg`, {
                    width: `24`,
                    height: `24`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    xmlns: `http://www.w3.org/2000/svg`,
                    children: [(0, J.jsx)(`path`, {
                        d: `M9.98641 3.80421L7.32575 6.24314C6.79463 6.73001 6.1003 7.00009 5.3798 7.00009C3.78933 7.00009 2.5 8.28942 2.5 9.87989V14.1203C2.5 15.7108 3.78933 17.0001 5.3798 17.0001C6.1003 17.0001 6.79463 17.2702 7.32575 17.757L9.98641 20.196C10.9485 21.0779 12.5 20.3954 12.5 19.0902V4.90994C12.5 3.60478 10.9485 2.92228 9.98641 3.80421Z`,
                        stroke: `white`,
                        "stroke-width": `1.8`,
                        "stroke-linecap": `round`,
                        "stroke-linejoin": `round`
                    }), (0, J.jsx)(`path`, {
                        d: `M16.4004 8.69995C17.0909 9.61918 17.5 10.7618 17.5 12C17.5 13.1119 17.17 14.1467 16.6027 15.0119`,
                        stroke: `white`,
                        "stroke-width": `1.8`,
                        "stroke-linecap": `round`,
                        "stroke-linejoin": `round`
                    })]
                }), (0, J.jsx)(`div`, {
                    className: `flex-auto`
                }), (0, J.jsxs)(`svg`, {
                    width: `24`,
                    height: `24`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    xmlns: `http://www.w3.org/2000/svg`,
                    children: [(0, J.jsx)(`path`, {
                        d: `M11.6098 2.75C10.9 2.75 10.2433 3.12626 9.88435 3.73867L9.12759 5.02982C8.77158 5.63721 8.12244 6.01268 7.41844 6.01842L5.93201 6.03054C5.22221 6.03633 4.56866 6.4179 4.21471 7.03318L3.81835 7.72217C3.46605 8.33458 3.46299 9.08743 3.81032 9.70268L4.55218 11.0168C4.89667 11.627 4.89667 12.373 4.55218 12.9832L3.81032 14.2973C3.46299 14.9126 3.46605 15.6654 3.81835 16.2779L4.21471 16.9668C4.56866 17.5821 5.22221 17.9637 5.93201 17.9695L7.41845 17.9816C8.12246 17.9873 8.77159 18.3628 9.1276 18.9702L9.88435 20.2613C10.2433 20.8737 10.9 21.25 11.6098 21.25H12.3901C13.1 21.25 13.7566 20.8737 14.1156 20.2613L14.8723 18.9702C15.2283 18.3628 15.8775 17.9873 16.5815 17.9816L18.068 17.9695C18.7778 17.9637 19.4313 17.5821 19.7853 16.9668L20.1816 16.2779C20.534 15.6654 20.537 14.9126 20.1897 14.2973L19.4478 12.9832C19.1033 12.373 19.1033 11.627 19.4478 11.0168L20.1897 9.70268C20.537 9.08743 20.534 8.33458 20.1816 7.72217L19.7853 7.03318C19.4313 6.4179 18.7778 6.03633 18.068 6.03054L16.5815 6.01842C15.8775 6.01268 15.2283 5.63721 14.8723 5.02982L14.1156 3.73867C13.7566 3.12626 13.1 2.75 12.3901 2.75H11.6098Z`,
                        stroke: `white`,
                        "stroke-width": `1.8`,
                        "stroke-linejoin": `round`
                    }), (0, J.jsx)(`circle`, {
                        cx: `12`,
                        cy: `12`,
                        r: `2.7`,
                        stroke: `white`,
                        "stroke-width": `1.8`
                    })]
                }), (0, J.jsx)(`svg`, {
                    width: `24`,
                    height: `24`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    xmlns: `http://www.w3.org/2000/svg`,
                    children: (0, J.jsx)(`path`, {
                        d: `M8 4H7C5.34315 4 4 5.34315 4 7V8M16 4H17C18.6569 4 20 5.34315 20 7V8M20 16V17C20 18.6569 18.6569 20 17 20H16M8 20H7C5.34315 20 4 18.6569 4 17V16`,
                        stroke: `white`,
                        "stroke-width": `1.8`,
                        "stroke-linecap": `round`
                    })
                })]
            })]
        }), (0, J.jsx)(`div`, {
            className: `absolute inset-0 h-full w-full bg-cover bg-center opacity-80 dark:opacity-40`,
            style: {
                backgroundImage: `url(https://persistent.oaistatic.com/static-nux/partner3-preview.png)`
            }
        })]
    })
}
var J, Ve = e((() => {
    J = L()
}));

function He() {
    "use no forget";
    return (0, Ue.jsx)(`div`, {
        className: `relative h-[400px] w-full overflow-hidden py-5 sm:h-[440px]`,
        children: (0, Ue.jsx)(`div`, {
            className: `absolute inset-0 h-full w-full scale-105 bg-cover bg-center opacity-80 dark:opacity-65`,
            style: {
                backgroundImage: `url(https://persistent.oaistatic.com/static-nux/partner5.png)`
            }
        })
    })
}
var Ue, We = e((() => {
    Ue = L()
}));

function Ge() {
    "use no forget";
    return (0, Y.jsxs)(`div`, {
        className: `relative h-[440px] w-full py-6`,
        children: [(0, Y.jsx)(`div`, {
            className: `absolute inset-0`
        }), (0, Y.jsx)(`div`, {
            className: `relative z-10 flex h-full w-full items-center justify-center px-3`,
            children: (0, Y.jsx)(`div`, {
                className: `flex h-full w-full items-stretch justify-center gap-6`,
                children: [0, 1, 2].map(e => (0, Y.jsxs)(`div`, {
                    className: `flex h-full w-56 flex-col items-stretch gap-3`,
                    children: [(0, Y.jsx)(`div`, {
                        className: `aspect-square w-full rounded-xl bg-black/[0.075] dark:bg-white/5`
                    }), (0, Y.jsx)(`div`, {
                        className: `h-4 w-4/5 rounded-lg bg-black/[0.075] dark:bg-white/5`
                    }), (0, Y.jsx)(`div`, {
                        className: `h-4 w-3/5 rounded-lg bg-black/[0.075] dark:bg-white/5`
                    }), (0, Y.jsx)(`div`, {
                        className: `h-4 w-3/5 rounded-lg bg-black/[0.075] dark:bg-white/5`
                    }), (0, Y.jsx)(`div`, {
                        className: `mt-auto`,
                        children: (0, Y.jsx)(`div`, {
                            className: `h-9 w-3/5 rounded-full bg-black/[0.075] dark:bg-white/5`
                        })
                    })]
                }, e))
            })
        })]
    })
}
var Y, Ke = e((() => {
    Y = L()
}));

function qe() {
    "use no forget";
    return (0, X.jsxs)(`div`, {
        className: `bg-token-bg-tertiary dark:bg-token-bg-primary relative h-[400px] w-full sm:h-[480px]`,
        children: [(0, X.jsx)(`div`, {
            className: `absolute inset-0 bg-[radial-gradient(circle,_#aaaaaa_0.75px,_transparent_0.75px)] bg-[length:12px_12px] dark:bg-[radial-gradient(circle,_#4a4a4a_0.75px,_transparent_0.75px)]`
        }), (0, X.jsxs)(`div`, {
            className: `bg-token-bg-primary dark:bg-token-bg-secondary pointer-events-none absolute end-[10px] bottom-[10px] z-10 flex hidden h-[40px] w-[80px] flex-row items-center justify-center divide-x divide-black/15 rounded-full shadow-sm ring-1 ring-black/5 sm:flex dark:divide-white/15 dark:ring-white/15`,
            children: [(0, X.jsx)(`div`, {
                className: `flex h-full flex-auto items-center justify-center`,
                children: (0, X.jsx)(`svg`, {
                    width: `18`,
                    height: `18`,
                    viewBox: `0 0 18 18`,
                    fill: `none`,
                    xmlns: `http://www.w3.org/2000/svg`,
                    children: (0, X.jsx)(`path`, {
                        d: `M14.863 8.27637L14.8503 8.40039L14.863 8.27734L14.9832 8.28906L14.9958 8.29102L15.115 8.32617C15.3835 8.43183 15.574 8.69377 15.574 9C15.5739 9.34975 15.3254 9.64145 14.9958 9.70898L14.9832 9.71094L14.863 9.72266L14.8503 9.72363H3.15015C2.75061 9.72363 2.42657 9.39957 2.42651 9C2.42651 8.60042 2.75057 8.27637 3.15015 8.27637H14.863Z`,
                        className: `dark:fill-white/50`,
                        fill: `#444444`,
                        stroke: `black`,
                        "stroke-width": `0.25`
                    })
                })
            }), (0, X.jsx)(`div`, {
                className: `flex h-full flex-auto items-center justify-center`,
                children: (0, X.jsx)(`svg`, {
                    width: `18`,
                    height: `18`,
                    viewBox: `0 0 18 18`,
                    fill: `none`,
                    xmlns: `http://www.w3.org/2000/svg`,
                    children: (0, X.jsx)(`path`, {
                        d: `M8.99976 2.42651C9.39937 2.42651 9.72339 2.75058 9.72339 3.15015V8.27612H14.863L14.8503 8.40015L14.863 8.2771L14.9832 8.28979L14.9958 8.29077L14.9705 8.41382L14.9958 8.29175C15.3253 8.35928 15.5738 8.65013 15.574 8.99976C15.574 9.34953 15.3254 9.64117 14.9958 9.70874L14.9832 9.71167V9.71069L14.863 9.72339L14.8503 9.72437V9.72339H9.72339V14.8503C9.72323 15.2498 9.39926 15.574 8.99976 15.574C8.60042 15.5738 8.27628 15.2497 8.27612 14.8503V9.72339H3.15015C2.75058 9.72339 2.42651 9.39937 2.42651 8.99976C2.42667 8.60031 2.75067 8.27612 3.15015 8.27612H8.27612V3.15015C8.27612 2.75067 8.60031 2.42667 8.99976 2.42651Z`,
                        className: `dark:fill-white/50`,
                        fill: `#444444`,
                        stroke: `black`,
                        "stroke-width": `0.25`
                    })
                })
            })]
        }), (0, X.jsx)(`div`, {
            className: `bg-token-bg-primary dark:bg-token-bg-secondary pointer-events-none absolute end-[10px] top-[10px] z-10 flex h-[40px] w-[40px] items-center justify-center rounded-full shadow-sm ring-1 ring-black/5 dark:ring-white/15`,
            children: (0, X.jsx)(`svg`, {
                width: `20`,
                height: `20`,
                viewBox: `0 0 20 20`,
                fill: `none`,
                xmlns: `http://www.w3.org/2000/svg`,
                children: (0, X.jsx)(`path`, {
                    d: `M8.03003 11.0291C8.28994 10.7698 8.71102 10.7703 8.97046 11.0301C9.22989 11.2901 9.22945 11.7111 8.96948 11.9706L5.26733 15.6649H8.99976L9.13354 15.6786C9.43674 15.7404 9.66476 16.0085 9.66479 16.3299C9.66479 16.6514 9.43675 16.9194 9.13354 16.9813L8.99976 16.995H3.65991C3.29264 16.995 2.99487 16.6972 2.99487 16.3299V10.9998C2.99495 10.6326 3.29269 10.3348 3.65991 10.3348C4.02713 10.3348 4.32488 10.6326 4.32495 10.9998V14.7264L8.03003 11.0291ZM16.9949 8.99989C16.9949 9.36716 16.6971 9.66493 16.3298 9.66493C15.9626 9.66487 15.6648 9.36712 15.6648 8.99989V5.26746L11.9705 8.96961C11.711 9.22958 11.29 9.23001 11.03 8.97058C10.7702 8.71114 10.7697 8.29008 11.0291 8.03016L14.7263 4.32507H10.9998C10.6326 4.32497 10.3347 4.02725 10.3347 3.66004C10.3347 3.29284 10.6326 2.9951 10.9998 2.995H16.3298L16.4636 3.00868C16.7668 3.07057 16.9949 3.33858 16.9949 3.66004V8.99989Z`,
                    className: `dark:fill-white/50`,
                    fill: `#444444`
                })
            })
        })]
    })
}
var X, Je = e((() => {
    X = L()
}));

function Ye() {
    "use no forget";
    return (0, Xe.jsxs)(`div`, {
        className: `h-full min-h-[480px] w-full divide-y divide-black/5 dark:divide-white/5`,
        children: [(0, Xe.jsx)(`div`, {
            className: `absolute inset-0 h-full w-full bg-cover bg-center dark:hidden`,
            style: {
                backgroundImage: `url(https://persistent.oaistatic.com/static-nux/map-light.png)`
            }
        }), (0, Xe.jsx)(`div`, {
            className: `absolute inset-0 hidden h-full w-full bg-cover bg-center dark:block`,
            style: {
                backgroundImage: `url(https://persistent.oaistatic.com/static-nux/map-dark.png)`
            }
        })]
    })
}
var Xe, Ze = e((() => {
    Xe = L()
}));

function Qe(e) {
    return Object.prototype.hasOwnProperty.call(nt, e)
}

function $e(e) {
    "use forget";
    let t = (0, et.c)(21),
        {
            connector: n,
            connectorId: r,
            children: i,
            hasWidget: a
        } = e,
        [o, s] = (0, tt.useState)(!1),
        c;
    if (t[0] !== n?.id || t[1] !== r) {
        let e = I(`3075710337`),
            i = n?.id ?? r,
            a = i == null ? null : e.get(i);
        c = a != null && Qe(a) ? a : null, t[0] = n?.id, t[1] = r, t[2] = c
    } else c = t[2];
    let l = c,
        u;
    t[3] !== a || t[4] !== l ? (u = l == null ? a ? (0, Z.jsx)(Ge, {}) : void 0 : nt[l], t[3] = a, t[4] = l, t[5] = u) : u = t[5];
    let d = u,
        f, p;
    if (t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (f = () => {
            let e = requestAnimationFrame(() => s(!0));
            return () => cancelAnimationFrame(e)
        }, p = [], t[6] = f, t[7] = p) : (f = t[6], p = t[7]), (0, tt.useEffect)(f, p), !d) {
        let e;
        return t[8] === i ? e = t[9] : (e = (0, Z.jsx)(Z.Fragment, {
            children: i
        }), t[8] = i, t[9] = e), e
    }
    let m = +!!o,
        h;
    t[10] === m ? h = t[11] : (h = {
        opacity: m,
        transition: `opacity 0.6s ease`
    }, t[10] = m, t[11] = h);
    let g;
    t[12] === d ? g = t[13] : (g = (0, Z.jsx)(`div`, {
        className: `pointer-events-none relative w-full select-none`,
        children: d
    }), t[12] = d, t[13] = g);
    let _;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, Z.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 z-10 bg-[#f6f6f6]/40 select-none dark:bg-[#262626]/50`
    }), t[14] = _) : _ = t[14];
    let v;
    t[15] === i ? v = t[16] : (v = (0, Z.jsx)(`div`, {
        className: `absolute inset-0 z-10 flex w-full items-center justify-center`,
        children: i
    }), t[15] = i, t[16] = v);
    let y;
    return t[17] !== h || t[18] !== g || t[19] !== v ? (y = (0, Z.jsxs)(`div`, {
        className: `bg-tertiary relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-black/[0.075] sm:rounded-3xl dark:border-white/5`,
        style: h,
        children: [g, _, v]
    }), t[17] = h, t[18] = g, t[19] = v, t[20] = y) : y = t[20], y
}
var et, tt, Z, nt, rt = e((() => {
    et = H(), tt = t(V()), A(), ze(), Ve(), We(), Ke(), Je(), Ze(), Z = L(), nt = {
        1: (0, Z.jsx)(Le, {}),
        2: (0, Z.jsx)(Ye, {}),
        3: (0, Z.jsx)(Be, {}),
        4: (0, Z.jsx)(qe, {}),
        5: (0, Z.jsx)(He, {})
    }
}));

function it(e) {
    "use forget";
    let t = (0, ct.c)(68),
        {
            connector: n,
            onConnect: i,
            onCancel: a,
            onProceedWithoutConnecting: s,
            clientThreadId: c,
            hasWidget: l,
            authReason: u,
            descriptionOverride: d,
            loading: f,
            linkName: p,
            profileEmail: m
        } = e,
        h = f !== void 0 && f,
        g = ae(),
        [_, v] = (0, lt.useState)(!1),
        y = ie(c),
        b;
    t[0] !== n || t[1] !== g ? (b = () => n ? Ne(n, g.locale) : ``, t[0] = n, t[1] = g, t[2] = b) : b = t[2];
    let ee = M(b),
        x, ne;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (x = () => {
        let e = requestAnimationFrame(() => v(!0));
        return () => cancelAnimationFrame(e)
    }, ne = [], t[3] = x, t[4] = ne) : (x = t[3], ne = t[4]), (0, lt.useEffect)(x, ne);
    let re, S;
    if (t[5] !== n || t[6] !== y ? (re = () => {
            n && xe(n.id, ue.ConnectorPromptShown, me({
                clientThreadId: y
            }))
        }, S = [n, y], t[5] = n, t[6] = y, t[7] = re, t[8] = S) : (re = t[7], S = t[8]), (0, lt.useEffect)(re, S), !n) return null;
    let C;
    t[9] !== ee || t[10] !== g ? (C = o(ee, g), t[9] = ee, t[10] = g, t[11] = C) : C = t[11];
    let w = C,
        T;
    t[12] !== n || t[13] !== w ? (T = {
        ...n,
        name: w
    }, t[12] = n, t[13] = w, t[14] = T) : T = t[14];
    let E = T,
        D;
    t[15] === u ? D = t[16] : (D = at(u), t[15] = u, t[16] = D);
    let O = D,
        k;
    t[17] !== u || t[18] !== p || t[19] !== m ? (k = (u === `reauthentication_required` || u === `oauth_upgrade_required`) && !!(p?.trim() || m?.trim()), t[17] = u, t[18] = p, t[19] = m, t[20] = k) : k = t[20];
    let A = k,
        j = h ? a : void 0,
        N = j ?? s,
        F;
    t[21] !== n || t[22] !== w || t[23] !== O.description || t[24] !== d ? (F = d ?? (O.description == null ? n.description : (0, Q.jsx)(z, {
        ...O.description,
        values: {
            connectorName: w
        }
    })), t[21] = n, t[22] = w, t[23] = O.description, t[24] = d, t[25] = F) : F = t[25];
    let I = F,
        L = _ ? `scale-100 opacity-100` : `scale-95 opacity-0`,
        R;
    t[26] === L ? R = t[27] : (R = te(`border-token-border-heavy bg-token-bg-primary flex w-full translate-y-[1px] flex-col gap-3 rounded-3xl border-[0.5px] px-5 pt-5 text-start transition-opacity transition-transform duration-300`, L), t[26] = L, t[27] = R);
    let B;
    t[28] !== w || t[29] !== E || t[30] !== p || t[31] !== m || t[32] !== A ? (B = A ? (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        children: [(0, Q.jsx)(`div`, {
            className: `border-token-border-light flex size-[50px] shrink-0 items-center justify-center rounded-xl border`,
            children: (0, Q.jsx)(oe, {
                connector: E,
                size: `large`
            })
        }), (0, Q.jsxs)(`div`, {
            className: `min-w-0`,
            children: [(0, Q.jsx)(`div`, {
                className: `text-token-text-tertiary text-xl tracking-wide`,
                children: w
            }), (0, Q.jsx)(je, {
                linkName: p,
                profileEmail: m
            })]
        })]
    }) : (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [(0, Q.jsx)(oe, {
            connector: E,
            size: `small`
        }), (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary text-base tracking-wide`,
            children: w
        })]
    }), t[28] = w, t[29] = E, t[30] = p, t[31] = m, t[32] = A, t[33] = B) : B = t[33];
    let V;
    t[34] === w ? V = t[35] : (V = {
        connectorName: w
    }, t[34] = w, t[35] = V);
    let H;
    t[36] !== O.header || t[37] !== V ? (H = (0, Q.jsx)(`h2`, {
        className: `text-token-text-primary text-base font-medium`,
        children: (0, Q.jsx)(z, {
            ...O.header,
            values: V
        })
    }), t[36] = O.header, t[37] = V, t[38] = H) : H = t[38];
    let U;
    t[39] === I ? U = t[40] : (U = I && (0, Q.jsx)(`p`, {
        className: `text-token-text-secondary text-base [overflow-wrap:anywhere] break-words`,
        children: I
    }), t[39] = I, t[40] = U);
    let W;
    t[41] !== H || t[42] !== U ? (W = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-2 px-1`,
        children: [H, U]
    }), t[41] = H, t[42] = U, t[43] = W) : W = t[43];
    let G;
    t[44] !== j || t[45] !== O.secondaryAction || t[46] !== h || t[47] !== N ? (G = N !== void 0 && (0, Q.jsx)(r, {
        className: `w-full sm:w-auto`,
        color: `secondary`,
        size: `medium`,
        disabled: h && !j,
        onClick: N,
        children: (0, Q.jsx)(z, {
            ...j ? P.cancel : O.secondaryAction
        })
    }), t[44] = j, t[45] = O.secondaryAction, t[46] = h, t[47] = N, t[48] = G) : G = t[48];
    let se = h || void 0,
        K;
    t[49] === O.primaryAction ? K = t[50] : (K = (0, Q.jsx)(z, {
        ...O.primaryAction
    }), t[49] = O.primaryAction, t[50] = K);
    let q;
    t[51] !== h || t[52] !== i || t[53] !== se || t[54] !== K ? (q = (0, Q.jsx)(r, {
        "aria-busy": se,
        className: `w-full sm:w-auto`,
        size: `medium`,
        color: `primary`,
        loading: h,
        onClick: i,
        children: K
    }), t[51] = h, t[52] = i, t[53] = se, t[54] = K, t[55] = q) : q = t[55];
    let ce;
    t[56] !== G || t[57] !== q ? (ce = (0, Q.jsxs)(`div`, {
        className: `border-token-border-light -mx-5 mt-2 flex flex-col gap-3 border-t px-5 py-3 sm:flex-row sm:justify-end`,
        children: [G, q]
    }), t[56] = G, t[57] = q, t[58] = ce) : ce = t[58];
    let le;
    t[59] !== R || t[60] !== B || t[61] !== W || t[62] !== ce ? (le = (0, Q.jsxs)(`div`, {
        className: R,
        children: [B, W, ce]
    }), t[59] = R, t[60] = B, t[61] = W, t[62] = ce, t[63] = le) : le = t[63];
    let de = le,
        fe;
    return t[64] !== de || t[65] !== E || t[66] !== l ? (fe = (0, Q.jsx)($e, {
        connector: E,
        hasWidget: l,
        children: de
    }), t[64] = de, t[65] = E, t[66] = l, t[67] = fe) : fe = t[67], fe
}

function at(e) {
    switch (e) {
        case `oauth_upgrade_required`:
            return {
                header: $.additionalAccessHeader, description: $.additionalAccessDescription, primaryAction: $.additionalAccessButton, secondaryAction: $.additionalAccessNotNow
            };
        case `reauthentication_required`:
            return {
                header: $.reconnectHeader, description: $.reconnectDescription, primaryAction: $.reconnectButton, secondaryAction: $.additionalAccessNotNow
            };
        default:
            return {
                header: $.connectHeader, description: $.connectDescription, primaryAction: $.connectButton, secondaryAction: $.notNow
            }
    }
}

function ot(e, t, r) {
    let a = n(t),
        o = h(t),
        s = a?.mode?.kind === N.GizmoTest,
        c = o && !s ? F(o, {
            gizmo: r
        }) : window.location.href;
    e.gizmo_id === `FAKE_PLUGIN_GIZMO` ? le({
        id: e.gizmo_action_id
    }, c) : i.doOAuthRedirect(e.gizmo_id, e.gizmo_action_id, e.domain, c, s)
}

function st(e) {
    return e.action.type === `allow` && e.action.remember_answer === !0
}
var ct, lt, Q, ut, $, dt = e((() => {
    ct = H(), D(), W(), _e(), S(), w(), T(), g(), ye(), de(), x(), b(), f(), ke(), l(), G(), ge(), Ce(), we(), C(), q(), d(), ve(), _(), k(), E(), O(), lt = t(V()), B(), Ae(), Ie(), rt(), Te(), Q = L(), ut = e => {
        "use forget";
        let t = (0, ct.c)(112),
            {
                clientThreadId: n,
                action: i,
                messages: o,
                replyTargetMessage: s,
                onRequestCompletion: l,
                handleUserAction: d,
                domain: f,
                rememberAnswer: p,
                isApprovalActionPending: h,
                setIsApprovalActionPending: g
            } = e,
            _ = p !== void 0 && p,
            v = ae(),
            b;
        t[0] === o ? b = t[1] : (b = De(o), t[0] = o, t[1] = b);
        let {
            assistantMessage: x
        } = b, te = y(), S;
        t[2] !== x.metadata?.gizmo_id || t[3] !== te ? (S = e => {
            let t = x.metadata?.gizmo_id ?? (e ? a.getGizmoId(e) : te);
            return [t, pe(e?.mode, t)]
        }, t[2] = x.metadata?.gizmo_id, t[3] = te, t[4] = S) : S = t[4];
        let [C, w] = ne(n, S), T;
        t[5] !== w || t[6] !== C ? (T = he(w) && w.gizmo_id === C, t[5] = w, t[6] = C, t[7] = T) : T = t[7];
        let E = m(C, T)?.data,
            D = Oe(),
            O;
        t[8] === D ? O = t[9] : (O = () => D ? Ee(D) : null, t[8] = D, t[9] = O);
        let k = O,
            A = ie(n),
            j = i.type === `allow` && i.name === `allow_low_risk`,
            M = i.type === `allow` && i.split_action_options?.length ? i.split_action_options : void 0,
            N;
        t[10] !== _ || t[11] !== M ? (N = _ ? M?.find(st) : void 0, t[10] = _, t[11] = M, t[12] = N) : N = t[12];
        let P = N,
            F;
        t[13] !== P || t[14] !== M ? (F = P ? M?.filter(e => e !== P) : M, t[13] = P, t[14] = M, t[15] = F) : F = t[15];
        let I = F,
            L;
        t[16] !== i.name || t[17] !== i.type || t[18] !== j || t[19] !== P?.label ? (L = i.type === `allow` ? P?.label ?? (0, Q.jsx)(z, {
            ...j ? $.allowLowRiskActions : i.name === `allow_once` ? $.allowOnce : $.allow
        }) : null, t[16] = i.name, t[17] = i.type, t[18] = j, t[19] = P?.label, t[20] = L) : L = t[20];
        let R = L,
            B;
        t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, Q.jsx)(z, {
            ...$.alwaysAllow
        }), t[21] = B) : B = t[21];
        let V = B,
            H = `style` in i ? i.style : void 0,
            U = i.confirm_description,
            W;
        t[22] !== i.allow || t[23] !== i.type || t[24] !== P ? (W = i.type === `allow` ? {
            type: `allow`,
            target_message_id: i.allow.target_message_id,
            remember_answer: P?.action.type === `allow` ? P.action.remember_answer ?? !1 : !1
        } : null, t[22] = i.allow, t[23] = i.type, t[24] = P, t[25] = W) : W = t[25];
        let oe = W,
            G;
        t[26] !== i.allow || t[27] !== i.type || t[28] !== oe || t[29] !== x || t[30] !== n || t[31] !== k || t[32] !== d || t[33] !== v || t[34] !== j || t[35] !== h || t[36] !== o || t[37] !== l || t[38] !== s || t[39] !== A || t[40] !== g ? (G = async e => {
            if (oe != null) {
                if (j && i.type === `allow`) {
                    let t = i.allow.link_id;
                    if (t == null || h) return;
                    e.persist(), g(!0);
                    try {
                        await ce(t, `review_important_actions`)
                    } catch {
                        c().danger(v.formatMessage($.permissionsUpdateFailed)), g(!1);
                        return
                    }
                    let r = u();
                    fe(r, t, `review_important_actions`), se({
                        queryClient: r,
                        isRequestActive$: () => re(A ?? n)
                    }), d({
                        clientThreadId: n,
                        sourceEvent: e,
                        onRequestCompletion: l,
                        assistantMessage: x,
                        allMessages: o,
                        replyTargetMessage: s,
                        actionData: oe,
                        activeSystemHint: k()
                    }), g(!1);
                    return
                }
                d({
                    clientThreadId: n,
                    sourceEvent: e,
                    onRequestCompletion: l,
                    assistantMessage: x,
                    allMessages: o,
                    replyTargetMessage: s,
                    actionData: oe,
                    activeSystemHint: k()
                })
            }
        }, t[26] = i.allow, t[27] = i.type, t[28] = oe, t[29] = x, t[30] = n, t[31] = k, t[32] = d, t[33] = v, t[34] = j, t[35] = h, t[36] = o, t[37] = l, t[38] = s, t[39] = A, t[40] = g, t[41] = G) : G = t[41];
        let K = G,
            q;
        t[42] !== i.always_allow || t[43] !== i.type || t[44] !== x || t[45] !== n || t[46] !== k || t[47] !== d || t[48] !== o || t[49] !== l || t[50] !== s || t[51] !== A ? (q = e => {
            if (i.type !== `always_allow`) return;
            let t = {
                type: `always_allow`,
                ...i.always_allow
            };
            se({
                queryClient: u(),
                isRequestActive$: () => re(A ?? n)
            }), d({
                clientThreadId: n,
                sourceEvent: e,
                onRequestCompletion: l,
                assistantMessage: x,
                allMessages: o,
                replyTargetMessage: s,
                actionData: t,
                activeSystemHint: k()
            })
        }, t[42] = i.always_allow, t[43] = i.type, t[44] = x, t[45] = n, t[46] = k, t[47] = d, t[48] = o, t[49] = l, t[50] = s, t[51] = A, t[52] = q) : q = t[52];
        let le = q,
            ue;
        t[53] !== x || t[54] !== n || t[55] !== k || t[56] !== d || t[57] !== o || t[58] !== l || t[59] !== s || t[60] !== A ? (ue = (e, t) => {
            t.type === `always_allow` && se({
                queryClient: u(),
                isRequestActive$: () => re(A ?? n)
            }), d({
                clientThreadId: n,
                sourceEvent: e,
                onRequestCompletion: l,
                assistantMessage: x,
                allMessages: o,
                replyTargetMessage: s,
                actionData: t,
                activeSystemHint: k()
            })
        }, t[53] = x, t[54] = n, t[55] = k, t[56] = d, t[57] = o, t[58] = l, t[59] = s, t[60] = A, t[61] = ue) : ue = t[61];
        let de = ue,
            me;
        t[62] !== i.deny || t[63] !== i.type || t[64] !== x || t[65] !== n || t[66] !== k || t[67] !== d || t[68] !== o || t[69] !== l || t[70] !== s ? (me = e => {
            i.type === `deny` && d({
                clientThreadId: n,
                sourceEvent: e,
                onRequestCompletion: l,
                assistantMessage: x,
                allMessages: o,
                replyTargetMessage: s,
                actionData: {
                    type: `deny`,
                    ...i.deny,
                    remember_answer: !1
                },
                activeSystemHint: k()
            })
        }, t[62] = i.deny, t[63] = i.type, t[64] = x, t[65] = n, t[66] = k, t[67] = d, t[68] = o, t[69] = l, t[70] = s, t[71] = me) : me = t[71];
        let ge = me,
            _e;
        t[72] !== i.oauth_redirect || t[73] !== i.type || t[74] !== n || t[75] !== E ? (_e = e => {
            i.type === `oauth_redirect` && ot(i.oauth_redirect, n, E)
        }, t[72] = i.oauth_redirect, t[73] = i.type, t[74] = n, t[75] = E, t[76] = _e) : _e = t[76];
        let ve = _e,
            ye;
        t[77] !== i.contact_gizmo || t[78] !== i.type || t[79] !== x || t[80] !== n || t[81] !== k || t[82] !== d || t[83] !== o || t[84] !== l ? (ye = e => {
            i.type === `contact_gizmo` && d({
                clientThreadId: n,
                sourceEvent: e,
                onRequestCompletion: l,
                assistantMessage: x,
                allMessages: o,
                actionData: {
                    type: `contact_gizmo`,
                    ...i.contact_gizmo
                },
                activeSystemHint: k()
            })
        }, t[77] = i.contact_gizmo, t[78] = i.type, t[79] = x, t[80] = n, t[81] = k, t[82] = d, t[83] = o, t[84] = l, t[85] = ye) : ye = t[85];
        let be = ye,
            xe;
        t[86] !== i.name || t[87] !== i.type ? (xe = i.type === `deny` ? (0, Q.jsx)(z, {
            ...i.name === `decline` ? $.decline : $.deny
        }) : null, t[86] = i.name, t[87] = i.type, t[88] = xe) : xe = t[88];
        let Se = xe,
            Ce;
        t[89] !== i.type || t[90] !== f ? (Ce = i.type === `oauth_redirect` ? (0, Q.jsx)(z, {
            ...$.signInButton,
            values: {
                domain: f
            }
        }) : null, t[89] = i.type, t[90] = f, t[91] = Ce) : Ce = t[91];
        let we = Ce,
            Te;
        t[92] === i.type ? Te = t[93] : (Te = i.type === `contact_gizmo` ? (0, Q.jsx)(z, {
            ...$.allow
        }) : null, t[92] = i.type, t[93] = Te);
        let ke = Te,
            Ae;
        t[94] !== i.type || t[95] !== H || t[96] !== R || t[97] !== ke || t[98] !== Se || t[99] !== I || t[100] !== K || t[101] !== le || t[102] !== be || t[103] !== ge || t[104] !== ve || t[105] !== de || t[106] !== h || t[107] !== we ? (Ae = i.type === `deny` ? (0, Q.jsx)(r, {
            color: H ?? `secondary`,
            size: `small`,
            disabled: h,
            onClick: ge,
            children: Se
        }) : I != null && I.length > 0 && i.type === `allow` ? (0, Q.jsx)(Me, {
            color: H ?? `primary`,
            disabled: h,
            onPrimaryAction: K,
            onSelectOption: de,
            size: `small`,
            splitActionOptions: I,
            children: R
        }) : i.type === `allow` ? (0, Q.jsx)(r, {
            color: H ?? `primary`,
            size: `small`,
            disabled: h,
            onClick: K,
            children: R
        }) : i.type === `always_allow` ? (0, Q.jsx)(r, {
            color: H ?? `primary`,
            size: `small`,
            disabled: h,
            contentsFullWidth: !0,
            contentWrapperClassName: `min-w-0`,
            onClick: le,
            children: (0, Q.jsx)(`span`, {
                className: `min-w-0 flex-1 truncate text-center`,
                children: V
            })
        }) : i.type === `oauth_redirect` ? (0, Q.jsx)(r, {
            color: `primary`,
            size: `small`,
            disabled: h,
            onClick: ve,
            children: we
        }) : i.type === `contact_gizmo` ? (0, Q.jsx)(r, {
            color: `secondary`,
            size: `small`,
            disabled: h,
            onClick: be,
            children: ke
        }) : null, t[94] = i.type, t[95] = H, t[96] = R, t[97] = ke, t[98] = Se, t[99] = I, t[100] = K, t[101] = le, t[102] = be, t[103] = ge, t[104] = ve, t[105] = de, t[106] = h, t[107] = we, t[108] = Ae) : Ae = t[108];
        let je = Ae;
        if (je != null && U && M == null) {
            let e;
            return t[109] !== je || t[110] !== U ? (e = (0, Q.jsx)(ee, {
                label: U,
                side: `top`,
                align: `end`,
                triggerAs: null,
                labelTextAlign: `left`,
                children: je
            }), t[109] = je, t[110] = U, t[111] = e) : e = t[111], e
        }
        return je
    }, $ = R({
        connectHeader: {
            id: `jitPluginMessage.connectorAuth.missingConnection.title`,
            defaultMessage: `Connect {connectorName}`
        },
        connectDescription: {
            id: `jitPluginMessage.connectorAuth.missingConnection.description`,
            defaultMessage: `ChatGPT needs access to {connectorName} to help with this request.`
        },
        additionalAccessHeader: {
            id: `jitPluginMessage.connectorAuth.additionalAccess.title`,
            defaultMessage: `ChatGPT needs more {connectorName} access`
        },
        additionalAccessDescription: {
            id: `jitPluginMessage.connectorAuth.additionalAccess.description`,
            defaultMessage: `Your current connection doesn't include the permissions needed for this request.`
        },
        reconnectHeader: {
            id: `jitPluginMessage.connectorAuth.reconnect.title`,
            defaultMessage: `Reconnect {connectorName}`
        },
        reconnectDescription: {
            id: `jitPluginMessage.connectorAuth.reconnect.description`,
            defaultMessage: `Your {connectorName} connection has expired. Reconnect it before ChatGPT can use it for this request.`
        },
        alwaysAllow: {
            id: `jitPluginMessage.alwaysAllow`,
            defaultMessage: `Always allow`
        },
        allowLowRiskActions: {
            id: `jitPluginMessage.allowLowRiskActions`,
            defaultMessage: `Allow low-risk tools`
        },
        permissionsUpdateFailed: {
            id: `jitPluginMessage.allowLowRiskActions.updateFailed`,
            defaultMessage: `We couldn't update app permissions. Please try again.`
        },
        allow: {
            id: `jitPluginMessage.allow`,
            defaultMessage: `Allow`
        },
        allowOnce: {
            id: `jitPluginMessage.allowOnce`,
            defaultMessage: `Allow once`
        },
        decline: {
            id: `jitPluginMessage.decline`,
            defaultMessage: `Decline`
        },
        deny: {
            id: `jitPluginMessage.deny`,
            defaultMessage: `Deny`
        },
        signInButton: {
            id: `jitPluginMessage.signInButton`,
            defaultMessage: `Sign in with {domain}`
        },
        connectButton: {
            id: `jitPluginMessage.connectorAuth.missingConnection.button.label`,
            defaultMessage: `Connect`
        },
        additionalAccessButton: {
            id: `jitPluginMessage.connectorAuth.additionalAccess.button.label`,
            defaultMessage: `Update access`
        },
        reconnectButton: {
            id: `jitPluginMessage.connectorAuth.reconnect.button.label`,
            defaultMessage: `Reconnect`
        },
        notNow: {
            id: `jitPluginMessage.connectorAuth.notNow.button.label`,
            defaultMessage: `Not now`
        },
        additionalAccessNotNow: {
            id: `jitPluginMessage.connectorAuth.additionalAccess.notNow.button.label`,
            defaultMessage: `Not now`
        }
    })
}));
export {
    rt as a, $e as i, it as n, Ne as o, dt as r, Ie as s, ut as t
};
//# sourceMappingURL=1c5ccd89-gvkezfa76yyza1g3.js.map