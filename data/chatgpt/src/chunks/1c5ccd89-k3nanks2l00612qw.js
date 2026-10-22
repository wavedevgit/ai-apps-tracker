import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as n,
    $T as r,
    A8 as i,
    BO as a,
    GJ as ee,
    Hv as o,
    IU as s,
    Iv as c,
    J5 as l,
    L8 as u,
    LU as d,
    LY as f,
    Mtt as p,
    N1 as m,
    ND as h,
    QJ as g,
    Qy as _,
    R5 as v,
    RY as te,
    VO as y,
    Zy as ne,
    _D as b,
    dY as re,
    dd as ie,
    eE as x,
    eY as S,
    fd as C,
    grt as w,
    l7 as ae,
    lV as T,
    lY as oe,
    ott as E,
    prt as D,
    q1 as O,
    tV as k,
    u7 as A,
    uit as se,
    yit as j,
    z5 as M,
    z8 as N
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as P,
    Ln as F,
    Nn as I,
    Rn as L,
    Vn as R,
    wn as z,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CLn as B,
    F_n as le,
    Jrt as V,
    LTn as H,
    L_n as U,
    OTt as ue,
    RTn as W,
    R_n as de,
    SLn as fe,
    aTn as G,
    ait as pe,
    fTn as K,
    grt as q,
    hrt as me,
    ibt as he,
    jTt as ge,
    lFn as _e,
    lit as ve,
    mrt as ye,
    prt as be,
    rbt as xe,
    uFn as Se
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    A_ as Ce,
    O_ as we,
    __ as Te,
    ah as Ee,
    th as De,
    x_ as Oe
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    i as ke,
    n as Ae,
    r as je,
    t as Me
} from "./f74d9a79-gobjgfkxc6bunb8c.js";

function Ne(e, t) {
    if (Pe(e.name)) return e.name;
    let n = m();
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
    K(), W(), i(), O(), Fe = N(({
        appId: e,
        accountId: t,
        workspace: n,
        locale: r
    }) => u(() => G(e, {
        accountId: t,
        workspace: n,
        locale: r,
        platform: `chat`,
        productSku: H.JIT_PLUGIN
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
    Re = P()
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
    J = P()
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
    Ue = P()
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
    Y = P()
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
    X = P()
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
    Xe = P()
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
        [ee, o] = (0, tt.useState)(!1),
        s;
    if (t[0] !== n?.id || t[1] !== r) {
        let e = D(`3075710337`),
            i = n?.id ?? r,
            a = i == null ? null : e.get(i);
        s = a != null && Qe(a) ? a : null, t[0] = n?.id, t[1] = r, t[2] = s
    } else s = t[2];
    let c = s,
        l;
    t[3] !== a || t[4] !== c ? (l = c == null ? a ? (0, Z.jsx)(Ge, {}) : void 0 : nt[c], t[3] = a, t[4] = c, t[5] = l) : l = t[5];
    let u = l,
        d, f;
    if (t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (d = () => {
            let e = requestAnimationFrame(() => o(!0));
            return () => cancelAnimationFrame(e)
        }, f = [], t[6] = d, t[7] = f) : (d = t[6], f = t[7]), (0, tt.useEffect)(d, f), !u) {
        let e;
        return t[8] === i ? e = t[9] : (e = (0, Z.jsx)(Z.Fragment, {
            children: i
        }), t[8] = i, t[9] = e), e
    }
    let p = +!!ee,
        m;
    t[10] === p ? m = t[11] : (m = {
        opacity: p,
        transition: `opacity 0.6s ease`
    }, t[10] = p, t[11] = m);
    let h;
    t[12] === u ? h = t[13] : (h = (0, Z.jsx)(`div`, {
        className: `pointer-events-none relative w-full select-none`,
        children: u
    }), t[12] = u, t[13] = h);
    let g;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, Z.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 z-10 bg-[#f6f6f6]/40 select-none dark:bg-[#262626]/50`
    }), t[14] = g) : g = t[14];
    let _;
    t[15] === i ? _ = t[16] : (_ = (0, Z.jsx)(`div`, {
        className: `absolute inset-0 z-10 flex w-full items-center justify-center`,
        children: i
    }), t[15] = i, t[16] = _);
    let v;
    return t[17] !== m || t[18] !== h || t[19] !== _ ? (v = (0, Z.jsxs)(`div`, {
        className: `bg-tertiary relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-black/[0.075] sm:rounded-3xl dark:border-white/5`,
        style: m,
        children: [h, g, _]
    }), t[17] = m, t[18] = h, t[19] = _, t[20] = v) : v = t[20], v
}
var et, tt, Z, nt, rt = e((() => {
    et = z(), tt = t(R()), w(), ze(), Ve(), We(), Ke(), Je(), Ze(), Z = P(), nt = {
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
            onProceedWithoutConnecting: ee,
            clientThreadId: s,
            hasWidget: c,
            authReason: u,
            descriptionOverride: d,
            loading: f,
            linkName: p,
            profileEmail: m
        } = e,
        h = f !== void 0 && f,
        g = ce(),
        [_, v] = (0, lt.useState)(!1),
        te = oe(s),
        y;
    t[0] !== n || t[1] !== g ? (y = () => n ? Ne(n, g.locale) : ``, t[0] = n, t[1] = g, t[2] = y) : y = t[2];
    let ne = l(y),
        b, re;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (b = () => {
        let e = requestAnimationFrame(() => v(!0));
        return () => cancelAnimationFrame(e)
    }, re = [], t[3] = b, t[4] = re) : (b = t[3], re = t[4]), (0, lt.useEffect)(b, re);
    let ie, x;
    if (t[5] !== n || t[6] !== te ? (ie = () => {
            n && de(n.id, le.ConnectorPromptShown, fe({
                clientThreadId: te
            }))
        }, x = [n, te], t[5] = n, t[6] = te, t[7] = ie, t[8] = x) : (ie = t[7], x = t[8]), (0, lt.useEffect)(ie, x), !n) return null;
    let S;
    t[9] !== ne || t[10] !== g ? (S = o(ne, g), t[9] = ne, t[10] = g, t[11] = S) : S = t[11];
    let C = S,
        w;
    t[12] !== n || t[13] !== C ? (w = {
        ...n,
        name: C
    }, t[12] = n, t[13] = C, t[14] = w) : w = t[14];
    let T = w,
        E;
    t[15] === u ? E = t[16] : (E = at(u), t[15] = u, t[16] = E);
    let D = E,
        O;
    t[17] !== u || t[18] !== p || t[19] !== m ? (O = (u === `reauthentication_required` || u === `oauth_upgrade_required`) && !!(p?.trim() || m?.trim()), t[17] = u, t[18] = p, t[19] = m, t[20] = O) : O = t[20];
    let k = O,
        A = h ? a : void 0,
        j = A ?? ee,
        M;
    t[21] !== n || t[22] !== C || t[23] !== D.description || t[24] !== d ? (M = d ?? (D.description == null ? n.description : (0, Q.jsx)(I, {
        ...D.description,
        values: {
            connectorName: C
        }
    })), t[21] = n, t[22] = C, t[23] = D.description, t[24] = d, t[25] = M) : M = t[25];
    let N = M,
        P = _ ? `scale-100 opacity-100` : `scale-95 opacity-0`,
        F;
    t[26] === P ? F = t[27] : (F = ae(`border-token-border-heavy bg-token-bg-primary flex w-full translate-y-[1px] flex-col gap-3 rounded-3xl border-[0.5px] px-5 pt-5 text-start transition-opacity transition-transform duration-300`, P), t[26] = P, t[27] = F);
    let L;
    t[28] !== C || t[29] !== T || t[30] !== p || t[31] !== m || t[32] !== k ? (L = k ? (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        children: [(0, Q.jsx)(`div`, {
            className: `border-token-border-light flex size-[50px] shrink-0 items-center justify-center rounded-xl border`,
            children: (0, Q.jsx)(ue, {
                connector: T,
                size: `large`
            })
        }), (0, Q.jsxs)(`div`, {
            className: `min-w-0`,
            children: [(0, Q.jsx)(`div`, {
                className: `text-token-text-tertiary text-xl tracking-wide`,
                children: C
            }), (0, Q.jsx)(je, {
                linkName: p,
                profileEmail: m
            })]
        })]
    }) : (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [(0, Q.jsx)(ue, {
            connector: T,
            size: `small`
        }), (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary text-base tracking-wide`,
            children: C
        })]
    }), t[28] = C, t[29] = T, t[30] = p, t[31] = m, t[32] = k, t[33] = L) : L = t[33];
    let R;
    t[34] === C ? R = t[35] : (R = {
        connectorName: C
    }, t[34] = C, t[35] = R);
    let z;
    t[36] !== D.header || t[37] !== R ? (z = (0, Q.jsx)(`h2`, {
        className: `text-token-text-primary text-base font-medium`,
        children: (0, Q.jsx)(I, {
            ...D.header,
            values: R
        })
    }), t[36] = D.header, t[37] = R, t[38] = z) : z = t[38];
    let B;
    t[39] === N ? B = t[40] : (B = N && (0, Q.jsx)(`p`, {
        className: `text-token-text-secondary text-base [overflow-wrap:anywhere] break-words`,
        children: N
    }), t[39] = N, t[40] = B);
    let V;
    t[41] !== z || t[42] !== B ? (V = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-2 px-1`,
        children: [z, B]
    }), t[41] = z, t[42] = B, t[43] = V) : V = t[43];
    let H;
    t[44] !== A || t[45] !== D.secondaryAction || t[46] !== h || t[47] !== j ? (H = j !== void 0 && (0, Q.jsx)(r, {
        className: `w-full sm:w-auto`,
        color: `secondary`,
        size: `medium`,
        disabled: h && !A,
        onClick: j,
        children: (0, Q.jsx)(I, {
            ...A ? se.cancel : D.secondaryAction
        })
    }), t[44] = A, t[45] = D.secondaryAction, t[46] = h, t[47] = j, t[48] = H) : H = t[48];
    let U = h || void 0,
        W;
    t[49] === D.primaryAction ? W = t[50] : (W = (0, Q.jsx)(I, {
        ...D.primaryAction
    }), t[49] = D.primaryAction, t[50] = W);
    let G;
    t[51] !== h || t[52] !== i || t[53] !== U || t[54] !== W ? (G = (0, Q.jsx)(r, {
        "aria-busy": U,
        className: `w-full sm:w-auto`,
        size: `medium`,
        color: `primary`,
        loading: h,
        onClick: i,
        children: W
    }), t[51] = h, t[52] = i, t[53] = U, t[54] = W, t[55] = G) : G = t[55];
    let pe;
    t[56] !== H || t[57] !== G ? (pe = (0, Q.jsxs)(`div`, {
        className: `border-token-border-light -mx-5 mt-2 flex flex-col gap-3 border-t px-5 py-3 sm:flex-row sm:justify-end`,
        children: [H, G]
    }), t[56] = H, t[57] = G, t[58] = pe) : pe = t[58];
    let K;
    t[59] !== F || t[60] !== L || t[61] !== V || t[62] !== pe ? (K = (0, Q.jsxs)(`div`, {
        className: F,
        children: [L, V, pe]
    }), t[59] = F, t[60] = L, t[61] = V, t[62] = pe, t[63] = K) : K = t[63];
    let q = K,
        me;
    return t[64] !== q || t[65] !== T || t[66] !== c ? (me = (0, Q.jsx)($e, {
        connector: T,
        hasWidget: c,
        children: q
    }), t[64] = q, t[65] = T, t[66] = c, t[67] = me) : me = t[67], me
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
    let i = n(t),
        ee = g(t),
        o = i?.mode?.kind === E.GizmoTest,
        s = ee && !o ? k(ee, {
            gizmo: r
        }) : window.location.href;
    e.gizmo_id === `FAKE_PLUGIN_GIZMO` ? be({
        id: e.gizmo_action_id
    }, s) : a.doOAuthRedirect(e.gizmo_id, e.gizmo_action_id, e.domain, s, o)
}

function st(e) {
    return e.action.type === `allow` && e.action.remember_answer === !0
}
var ct, lt, Q, ut, $, dt = e((() => {
    ct = z(), p(), ge(), V(), x(), C(), j(), _(), he(), q(), b(), y(), f(), ke(), c(), _e(), ye(), we(), Oe(), S(), U(), d(), B(), M(), T(), i(), A(), lt = t(R()), L(), Ae(), Ie(), rt(), De(), Q = P(), ut = e => {
        "use forget";
        let t = (0, ct.c)(112),
            {
                clientThreadId: n,
                action: i,
                messages: a,
                replyTargetMessage: o,
                onRequestCompletion: c,
                handleUserAction: l,
                domain: u,
                rememberAnswer: d,
                isApprovalActionPending: f,
                setIsApprovalActionPending: p
            } = e,
            m = d !== void 0 && d,
            g = ce(),
            _;
        t[0] === a ? _ = t[1] : (_ = Ee(a), t[0] = a, t[1] = _);
        let {
            assistantMessage: y
        } = _, b = te(), x;
        t[2] !== y.metadata?.gizmo_id || t[3] !== b ? (x = e => {
            let t = y.metadata?.gizmo_id ?? (e ? ee.getGizmoId(e) : b);
            return [t, me(e?.mode, t)]
        }, t[2] = y.metadata?.gizmo_id, t[3] = b, t[4] = x) : x = t[4];
        let [S, C] = re(n, x), w;
        t[5] !== C || t[6] !== S ? (w = xe(C) && C.gizmo_id === S, t[5] = C, t[6] = S, t[7] = w) : w = t[7];
        let ae = h(S, w)?.data,
            T = Ce(),
            E;
        t[8] === T ? E = t[9] : (E = () => T ? Te(T) : null, t[8] = T, t[9] = E);
        let D = E,
            O = oe(n),
            k = i.type === `allow` && i.name === `allow_low_risk`,
            A = i.type === `allow` && i.split_action_options?.length ? i.split_action_options : void 0,
            se;
        t[10] !== m || t[11] !== A ? (se = m ? A?.find(st) : void 0, t[10] = m, t[11] = A, t[12] = se) : se = t[12];
        let j = se,
            M;
        t[13] !== j || t[14] !== A ? (M = j ? A?.filter(e => e !== j) : A, t[13] = j, t[14] = A, t[15] = M) : M = t[15];
        let N = M,
            P;
        t[16] !== i.name || t[17] !== i.type || t[18] !== k || t[19] !== j?.label ? (P = i.type === `allow` ? j?.label ?? (0, Q.jsx)(I, {
            ...k ? $.allowLowRiskActions : i.name === `allow_once` ? $.allowOnce : $.allow
        }) : null, t[16] = i.name, t[17] = i.type, t[18] = k, t[19] = j?.label, t[20] = P) : P = t[20];
        let F = P,
            L;
        t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, Q.jsx)(I, {
            ...$.alwaysAllow
        }), t[21] = L) : L = t[21];
        let R = L,
            z = `style` in i ? i.style : void 0,
            B = i.confirm_description,
            le;
        t[22] !== i.allow || t[23] !== i.type || t[24] !== j ? (le = i.type === `allow` ? {
            type: `allow`,
            target_message_id: i.allow.target_message_id,
            remember_answer: j?.action.type === `allow` ? j.action.remember_answer ?? !1 : !1
        } : null, t[22] = i.allow, t[23] = i.type, t[24] = j, t[25] = le) : le = t[25];
        let V = le,
            H;
        t[26] !== i.allow || t[27] !== i.type || t[28] !== V || t[29] !== y || t[30] !== n || t[31] !== D || t[32] !== l || t[33] !== g || t[34] !== k || t[35] !== f || t[36] !== a || t[37] !== c || t[38] !== o || t[39] !== O || t[40] !== p ? (H = async e => {
            if (V != null) {
                if (k && i.type === `allow`) {
                    let t = i.allow.link_id;
                    if (t == null || f) return;
                    e.persist(), p(!0);
                    try {
                        await ve(t, `review_important_actions`)
                    } catch {
                        s().danger(g.formatMessage($.permissionsUpdateFailed)), p(!1);
                        return
                    }
                    let r = v();
                    pe(r, t, `review_important_actions`), Se({
                        queryClient: r,
                        isRequestActive$: () => ie(O ?? n)
                    }), l({
                        clientThreadId: n,
                        sourceEvent: e,
                        onRequestCompletion: c,
                        assistantMessage: y,
                        allMessages: a,
                        replyTargetMessage: o,
                        actionData: V,
                        activeSystemHint: D()
                    }), p(!1);
                    return
                }
                l({
                    clientThreadId: n,
                    sourceEvent: e,
                    onRequestCompletion: c,
                    assistantMessage: y,
                    allMessages: a,
                    replyTargetMessage: o,
                    actionData: V,
                    activeSystemHint: D()
                })
            }
        }, t[26] = i.allow, t[27] = i.type, t[28] = V, t[29] = y, t[30] = n, t[31] = D, t[32] = l, t[33] = g, t[34] = k, t[35] = f, t[36] = a, t[37] = c, t[38] = o, t[39] = O, t[40] = p, t[41] = H) : H = t[41];
        let U = H,
            ue;
        t[42] !== i.always_allow || t[43] !== i.type || t[44] !== y || t[45] !== n || t[46] !== D || t[47] !== l || t[48] !== a || t[49] !== c || t[50] !== o || t[51] !== O ? (ue = e => {
            if (i.type !== `always_allow`) return;
            let t = {
                type: `always_allow`,
                ...i.always_allow
            };
            Se({
                queryClient: v(),
                isRequestActive$: () => ie(O ?? n)
            }), l({
                clientThreadId: n,
                sourceEvent: e,
                onRequestCompletion: c,
                assistantMessage: y,
                allMessages: a,
                replyTargetMessage: o,
                actionData: t,
                activeSystemHint: D()
            })
        }, t[42] = i.always_allow, t[43] = i.type, t[44] = y, t[45] = n, t[46] = D, t[47] = l, t[48] = a, t[49] = c, t[50] = o, t[51] = O, t[52] = ue) : ue = t[52];
        let W = ue,
            de;
        t[53] !== y || t[54] !== n || t[55] !== D || t[56] !== l || t[57] !== a || t[58] !== c || t[59] !== o || t[60] !== O ? (de = (e, t) => {
            t.type === `always_allow` && Se({
                queryClient: v(),
                isRequestActive$: () => ie(O ?? n)
            }), l({
                clientThreadId: n,
                sourceEvent: e,
                onRequestCompletion: c,
                assistantMessage: y,
                allMessages: a,
                replyTargetMessage: o,
                actionData: t,
                activeSystemHint: D()
            })
        }, t[53] = y, t[54] = n, t[55] = D, t[56] = l, t[57] = a, t[58] = c, t[59] = o, t[60] = O, t[61] = de) : de = t[61];
        let fe = de,
            G;
        t[62] !== i.deny || t[63] !== i.type || t[64] !== y || t[65] !== n || t[66] !== D || t[67] !== l || t[68] !== a || t[69] !== c || t[70] !== o ? (G = e => {
            i.type === `deny` && l({
                clientThreadId: n,
                sourceEvent: e,
                onRequestCompletion: c,
                assistantMessage: y,
                allMessages: a,
                replyTargetMessage: o,
                actionData: {
                    type: `deny`,
                    ...i.deny,
                    remember_answer: !1
                },
                activeSystemHint: D()
            })
        }, t[62] = i.deny, t[63] = i.type, t[64] = y, t[65] = n, t[66] = D, t[67] = l, t[68] = a, t[69] = c, t[70] = o, t[71] = G) : G = t[71];
        let K = G,
            q;
        t[72] !== i.oauth_redirect || t[73] !== i.type || t[74] !== n || t[75] !== ae ? (q = e => {
            i.type === `oauth_redirect` && ot(i.oauth_redirect, n, ae)
        }, t[72] = i.oauth_redirect, t[73] = i.type, t[74] = n, t[75] = ae, t[76] = q) : q = t[76];
        let he = q,
            ge;
        t[77] !== i.contact_gizmo || t[78] !== i.type || t[79] !== y || t[80] !== n || t[81] !== D || t[82] !== l || t[83] !== a || t[84] !== c ? (ge = e => {
            i.type === `contact_gizmo` && l({
                clientThreadId: n,
                sourceEvent: e,
                onRequestCompletion: c,
                assistantMessage: y,
                allMessages: a,
                actionData: {
                    type: `contact_gizmo`,
                    ...i.contact_gizmo
                },
                activeSystemHint: D()
            })
        }, t[77] = i.contact_gizmo, t[78] = i.type, t[79] = y, t[80] = n, t[81] = D, t[82] = l, t[83] = a, t[84] = c, t[85] = ge) : ge = t[85];
        let _e = ge,
            ye;
        t[86] !== i.name || t[87] !== i.type ? (ye = i.type === `deny` ? (0, Q.jsx)(I, {
            ...i.name === `decline` ? $.decline : $.deny
        }) : null, t[86] = i.name, t[87] = i.type, t[88] = ye) : ye = t[88];
        let be = ye,
            we;
        t[89] !== i.type || t[90] !== u ? (we = i.type === `oauth_redirect` ? (0, Q.jsx)(I, {
            ...$.signInButton,
            values: {
                domain: u
            }
        }) : null, t[89] = i.type, t[90] = u, t[91] = we) : we = t[91];
        let De = we,
            Oe;
        t[92] === i.type ? Oe = t[93] : (Oe = i.type === `contact_gizmo` ? (0, Q.jsx)(I, {
            ...$.allow
        }) : null, t[92] = i.type, t[93] = Oe);
        let ke = Oe,
            Ae;
        t[94] !== i.type || t[95] !== z || t[96] !== F || t[97] !== ke || t[98] !== be || t[99] !== N || t[100] !== U || t[101] !== W || t[102] !== _e || t[103] !== K || t[104] !== he || t[105] !== fe || t[106] !== f || t[107] !== De ? (Ae = i.type === `deny` ? (0, Q.jsx)(r, {
            color: z ?? `secondary`,
            size: `small`,
            disabled: f,
            onClick: K,
            children: be
        }) : N != null && N.length > 0 && i.type === `allow` ? (0, Q.jsx)(Me, {
            color: z ?? `primary`,
            disabled: f,
            onPrimaryAction: U,
            onSelectOption: fe,
            size: `small`,
            splitActionOptions: N,
            children: F
        }) : i.type === `allow` ? (0, Q.jsx)(r, {
            color: z ?? `primary`,
            size: `small`,
            disabled: f,
            onClick: U,
            children: F
        }) : i.type === `always_allow` ? (0, Q.jsx)(r, {
            color: z ?? `primary`,
            size: `small`,
            disabled: f,
            contentsFullWidth: !0,
            contentWrapperClassName: `min-w-0`,
            onClick: W,
            children: (0, Q.jsx)(`span`, {
                className: `min-w-0 flex-1 truncate text-center`,
                children: R
            })
        }) : i.type === `oauth_redirect` ? (0, Q.jsx)(r, {
            color: `primary`,
            size: `small`,
            disabled: f,
            onClick: he,
            children: De
        }) : i.type === `contact_gizmo` ? (0, Q.jsx)(r, {
            color: `secondary`,
            size: `small`,
            disabled: f,
            onClick: _e,
            children: ke
        }) : null, t[94] = i.type, t[95] = z, t[96] = F, t[97] = ke, t[98] = be, t[99] = N, t[100] = U, t[101] = W, t[102] = _e, t[103] = K, t[104] = he, t[105] = fe, t[106] = f, t[107] = De, t[108] = Ae) : Ae = t[108];
        let je = Ae;
        if (je != null && B && A == null) {
            let e;
            return t[109] !== je || t[110] !== B ? (e = (0, Q.jsx)(ne, {
                label: B,
                side: `top`,
                align: `end`,
                triggerAs: null,
                labelTextAlign: `left`,
                children: je
            }), t[109] = je, t[110] = B, t[111] = e) : e = t[111], e
        }
        return je
    }, $ = F({
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
//# sourceMappingURL=1c5ccd89-k3nanks2l00612qw.js.map