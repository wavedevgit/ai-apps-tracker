import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $rt as n,
    BY as r,
    C1 as i,
    C5 as a,
    DD as ee,
    FO as o,
    Fv as s,
    J5 as c,
    JT as l,
    L1 as u,
    N5 as te,
    PO as d,
    RU as f,
    S8 as p,
    Vv as m,
    Wet as h,
    Wrt as g,
    Xnt as _,
    Xy as ne,
    Y5 as v,
    Zy as y,
    dD as re,
    dY as ie,
    dd as b,
    eY as x,
    gtt as S,
    h8 as C,
    nY as w,
    pY as T,
    qB as E,
    qJ as D,
    qT as ae,
    qnt as O,
    tV as k,
    tY as A,
    ud as oe,
    w5 as j,
    w8 as M,
    zU as N,
    zY as P
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as F,
    Ln as I,
    Nn as L,
    Rn as R,
    Vn as z,
    wn as B,
    zn as se
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $gn as V,
    FIn as H,
    MTt as U,
    PIn as ce,
    SPn as le,
    Swn as W,
    Zgn as ue,
    Zrt as G,
    _rt as K,
    cit as de,
    eTn as fe,
    e_n as pe,
    fit as me,
    grt as he,
    kTt as ge,
    kwn as _e,
    obt as ve,
    sbt as ye,
    tTn as be,
    vrt as xe,
    xPn as Se,
    yrt as Ce
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    D_ as we,
    Qm as Te,
    T_ as Ee,
    m_ as De,
    nh as Oe,
    v_ as ke
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    i as Ae,
    n as je,
    r as Me,
    t as Ne
} from "./f74d9a79-04w2jt8741ydhlxx.js";

function Pe(e, t) {
    if (Fe(e.name)) return e.name;
    let n = i();
    if (!n) return e.id;
    let r = Ie({
        appId: e.id,
        accountId: n.id,
        workspace: n.isWorkspaceAccount(),
        locale: t
    }).data?.name;
    return r && Fe(r) ? r : e.id
}

function Fe(e) {
    return e.trim().length > 0 && !/(?:plugin_)?(?:asdk_app|connector)_[a-z0-9_-]+/i.test(e)
}
var Ie, Le = e((() => {
    _e(), be(), C(), u(), Ie = M(({
        appId: e,
        accountId: t,
        workspace: n,
        locale: r
    }) => p(() => W(e, {
        accountId: t,
        workspace: n,
        locale: r,
        platform: `chat`,
        productSku: fe.JIT_PLUGIN
    })))
}));

function Re() {
    "use no forget";
    return (0, q.jsx)(`div`, {
        className: `h-full w-full divide-y divide-black/5 dark:divide-white/5`,
        children: Array.from({
            length: 5
        }).map((e, t) => (0, q.jsxs)(`div`, {
            className: `flex items-center gap-4 p-4`,
            children: [(0, q.jsx)(`div`, {
                className: `h-12 w-12 rounded-sm bg-black/[0.075] dark:bg-white/5`
            }), (0, q.jsxs)(`div`, {
                className: `flex-1 space-y-1.5`,
                children: [(0, q.jsx)(`div`, {
                    className: `h-4 w-3/5 rounded-sm bg-black/[0.075] dark:bg-white/5`
                }), (0, q.jsx)(`div`, {
                    className: `h-4 w-2/5 rounded-sm bg-black/[0.075] dark:bg-white/5`
                })]
            }), (0, q.jsx)(`div`, {
                className: `h-6 w-6 rounded-full border-2 border-black/10 dark:border-white/5`
            })]
        }, t))
    })
}
var q, ze = e((() => {
    q = F()
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
    J = F()
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
    Ue = F()
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
    Y = F()
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
    X = F()
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
    Xe = F()
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
        let e = O(`3075710337`),
            i = n?.id ?? r,
            a = i == null ? null : e.get(i);
        s = a != null && Qe(a) ? a : null, t[0] = n?.id, t[1] = r, t[2] = s
    } else s = t[2];
    let c = s,
        l;
    t[3] !== a || t[4] !== c ? (l = c == null ? a ? (0, Z.jsx)(Ge, {}) : void 0 : nt[c], t[3] = a, t[4] = c, t[5] = l) : l = t[5];
    let u = l,
        te, d;
    if (t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (te = () => {
            let e = requestAnimationFrame(() => o(!0));
            return () => cancelAnimationFrame(e)
        }, d = [], t[6] = te, t[7] = d) : (te = t[6], d = t[7]), (0, tt.useEffect)(te, d), !u) {
        let e;
        return t[8] === i ? e = t[9] : (e = (0, Z.jsx)(Z.Fragment, {
            children: i
        }), t[8] = i, t[9] = e), e
    }
    let f = +!!ee,
        p;
    t[10] === f ? p = t[11] : (p = {
        opacity: f,
        transition: `opacity 0.6s ease`
    }, t[10] = f, t[11] = p);
    let m;
    t[12] === u ? m = t[13] : (m = (0, Z.jsx)(`div`, {
        className: `pointer-events-none relative w-full select-none`,
        children: u
    }), t[12] = u, t[13] = m);
    let h;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, Z.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 z-10 bg-[#f6f6f6]/40 select-none dark:bg-[#262626]/50`
    }), t[14] = h) : h = t[14];
    let g;
    t[15] === i ? g = t[16] : (g = (0, Z.jsx)(`div`, {
        className: `absolute inset-0 z-10 flex w-full items-center justify-center`,
        children: i
    }), t[15] = i, t[16] = g);
    let _;
    return t[17] !== p || t[18] !== m || t[19] !== g ? (_ = (0, Z.jsxs)(`div`, {
        className: `bg-tertiary relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-black/[0.075] sm:rounded-3xl dark:border-white/5`,
        style: p,
        children: [m, h, g]
    }), t[17] = p, t[18] = m, t[19] = g, t[20] = _) : _ = t[20], _
}
var et, tt, Z, nt, rt = e((() => {
    et = B(), tt = t(z()), _(), ze(), Ve(), We(), Ke(), Je(), Ze(), Z = F(), nt = {
        1: (0, Z.jsx)(Re, {}),
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
            onConnect: r,
            onCancel: i,
            onProceedWithoutConnecting: a,
            clientThreadId: ee,
            hasWidget: o,
            authReason: s,
            descriptionOverride: l,
            loading: u,
            linkName: d,
            profileEmail: f
        } = e,
        p = u !== void 0 && u,
        h = se(),
        [_, ne] = (0, lt.useState)(!1),
        v = ie(ee),
        y;
    t[0] !== n || t[1] !== h ? (y = () => n ? Pe(n, h.locale) : ``, t[0] = n, t[1] = h, t[2] = y) : y = t[2];
    let re = te(y),
        b, x;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (b = () => {
        let e = requestAnimationFrame(() => ne(!0));
        return () => cancelAnimationFrame(e)
    }, x = [], t[3] = b, t[4] = x) : (b = t[3], x = t[4]), (0, lt.useEffect)(b, x);
    let S, C;
    if (t[5] !== n || t[6] !== v ? (S = () => {
            n && pe(n.id, ue.ConnectorPromptShown, ce({
                clientThreadId: v
            }))
        }, C = [n, v], t[5] = n, t[6] = v, t[7] = S, t[8] = C) : (S = t[7], C = t[8]), (0, lt.useEffect)(S, C), !n) return null;
    let w;
    t[9] !== re || t[10] !== h ? (w = m(re, h), t[9] = re, t[10] = h, t[11] = w) : w = t[11];
    let T = w,
        E;
    t[12] !== n || t[13] !== T ? (E = {
        ...n,
        name: T
    }, t[12] = n, t[13] = T, t[14] = E) : E = t[14];
    let D = E,
        O;
    t[15] === s ? O = t[16] : (O = at(s), t[15] = s, t[16] = O);
    let k = O,
        A;
    t[17] !== s || t[18] !== d || t[19] !== f ? (A = (s === `reauthentication_required` || s === `oauth_upgrade_required`) && !!(d?.trim() || f?.trim()), t[17] = s, t[18] = d, t[19] = f, t[20] = A) : A = t[20];
    let oe = A,
        j = p ? i : void 0,
        M = j ?? a,
        N;
    t[21] !== n || t[22] !== T || t[23] !== k.description || t[24] !== l ? (N = l ?? (k.description == null ? n.description : (0, Q.jsx)(L, {
        ...k.description,
        values: {
            connectorName: T
        }
    })), t[21] = n, t[22] = T, t[23] = k.description, t[24] = l, t[25] = N) : N = t[25];
    let P = N,
        F = _ ? `scale-100 opacity-100` : `scale-95 opacity-0`,
        I;
    t[26] === F ? I = t[27] : (I = c(`border-token-border-heavy bg-token-bg-primary flex w-full translate-y-[1px] flex-col gap-3 rounded-3xl border-[0.5px] px-5 pt-5 text-start transition-opacity transition-transform duration-300`, F), t[26] = F, t[27] = I);
    let R;
    t[28] !== T || t[29] !== D || t[30] !== d || t[31] !== f || t[32] !== oe ? (R = oe ? (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        children: [(0, Q.jsx)(`div`, {
            className: `border-token-border-light flex size-[50px] shrink-0 items-center justify-center rounded-xl border`,
            children: (0, Q.jsx)(ge, {
                connector: D,
                size: `large`
            })
        }), (0, Q.jsxs)(`div`, {
            className: `min-w-0`,
            children: [(0, Q.jsx)(`div`, {
                className: `text-token-text-tertiary text-xl tracking-wide`,
                children: T
            }), (0, Q.jsx)(Me, {
                linkName: d,
                profileEmail: f
            })]
        })]
    }) : (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [(0, Q.jsx)(ge, {
            connector: D,
            size: `small`
        }), (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary text-base tracking-wide`,
            children: T
        })]
    }), t[28] = T, t[29] = D, t[30] = d, t[31] = f, t[32] = oe, t[33] = R) : R = t[33];
    let z;
    t[34] === T ? z = t[35] : (z = {
        connectorName: T
    }, t[34] = T, t[35] = z);
    let B;
    t[36] !== k.header || t[37] !== z ? (B = (0, Q.jsx)(`h2`, {
        className: `text-token-text-primary text-base font-medium`,
        children: (0, Q.jsx)(L, {
            ...k.header,
            values: z
        })
    }), t[36] = k.header, t[37] = z, t[38] = B) : B = t[38];
    let V;
    t[39] === P ? V = t[40] : (V = P && (0, Q.jsx)(`p`, {
        className: `text-token-text-secondary text-base [overflow-wrap:anywhere] break-words`,
        children: P
    }), t[39] = P, t[40] = V);
    let H;
    t[41] !== B || t[42] !== V ? (H = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-2 px-1`,
        children: [B, V]
    }), t[41] = B, t[42] = V, t[43] = H) : H = t[43];
    let U;
    t[44] !== j || t[45] !== k.secondaryAction || t[46] !== p || t[47] !== M ? (U = M !== void 0 && (0, Q.jsx)(ae, {
        className: `w-full sm:w-auto`,
        color: `secondary`,
        size: `medium`,
        disabled: p && !j,
        onClick: M,
        children: (0, Q.jsx)(L, {
            ...j ? g.cancel : k.secondaryAction
        })
    }), t[44] = j, t[45] = k.secondaryAction, t[46] = p, t[47] = M, t[48] = U) : U = t[48];
    let le = p || void 0,
        W;
    t[49] === k.primaryAction ? W = t[50] : (W = (0, Q.jsx)(L, {
        ...k.primaryAction
    }), t[49] = k.primaryAction, t[50] = W);
    let G;
    t[51] !== p || t[52] !== r || t[53] !== le || t[54] !== W ? (G = (0, Q.jsx)(ae, {
        "aria-busy": le,
        className: `w-full sm:w-auto`,
        size: `medium`,
        color: `primary`,
        loading: p,
        onClick: r,
        children: W
    }), t[51] = p, t[52] = r, t[53] = le, t[54] = W, t[55] = G) : G = t[55];
    let K;
    t[56] !== U || t[57] !== G ? (K = (0, Q.jsxs)(`div`, {
        className: `border-token-border-light -mx-5 mt-2 flex flex-col gap-3 border-t px-5 py-3 sm:flex-row sm:justify-end`,
        children: [U, G]
    }), t[56] = U, t[57] = G, t[58] = K) : K = t[58];
    let de;
    t[59] !== I || t[60] !== R || t[61] !== H || t[62] !== K ? (de = (0, Q.jsxs)(`div`, {
        className: I,
        children: [R, H, K]
    }), t[59] = I, t[60] = R, t[61] = H, t[62] = K, t[63] = de) : de = t[63];
    let fe = de,
        me;
    return t[64] !== fe || t[65] !== D || t[66] !== o ? (me = (0, Q.jsx)($e, {
        connector: D,
        hasWidget: o,
        children: fe
    }), t[64] = fe, t[65] = D, t[66] = o, t[67] = me) : me = t[67], me
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

function ot(e, t, n) {
    let r = A(t),
        i = x(t),
        a = r?.mode?.kind === h.GizmoTest,
        ee = i && !a ? E(i, {
            gizmo: n
        }) : window.location.href;
    e.gizmo_id === `FAKE_PLUGIN_GIZMO` ? he({
        id: e.gizmo_action_id
    }, ee) : d.doOAuthRedirect(e.gizmo_id, e.gizmo_action_id, e.domain, ee, a)
}

function st(e) {
    return e.action.type === `allow` && e.action.remember_answer === !0
}
var ct, lt, Q, ut, $, dt = e((() => {
    ct = B(), S(), U(), G(), l(), b(), n(), y(), ye(), Ce(), re(), o(), P(), Ae(), s(), Se(), K(), Ee(), ke(), w(), V(), N(), H(), j(), k(), C(), v(), lt = t(z()), R(), je(), Le(), rt(), Te(), Q = F(), ut = e => {
        "use forget";
        let t = (0, ct.c)(112),
            {
                clientThreadId: n,
                action: i,
                messages: o,
                replyTargetMessage: s,
                onRequestCompletion: c,
                handleUserAction: l,
                domain: u,
                rememberAnswer: te,
                isApprovalActionPending: d,
                setIsApprovalActionPending: p
            } = e,
            m = te !== void 0 && te,
            h = se(),
            g;
        t[0] === o ? g = t[1] : (g = Oe(o), t[0] = o, t[1] = g);
        let {
            assistantMessage: _
        } = g, v = r(), y;
        t[2] !== _.metadata?.gizmo_id || t[3] !== v ? (y = e => {
            let t = _.metadata?.gizmo_id ?? (e ? D.getGizmoId(e) : v);
            return [t, xe(e?.mode, t)]
        }, t[2] = _.metadata?.gizmo_id, t[3] = v, t[4] = y) : y = t[4];
        let [re, b] = T(n, y), x;
        t[5] !== b || t[6] !== re ? (x = ve(b) && b.gizmo_id === re, t[5] = b, t[6] = re, t[7] = x) : x = t[7];
        let S = ee(re, x)?.data,
            C = we(),
            w;
        t[8] === C ? w = t[9] : (w = () => C ? De(C) : null, t[8] = C, t[9] = w);
        let E = w,
            O = ie(n),
            k = i.type === `allow` && i.name === `allow_low_risk`,
            A = i.type === `allow` && i.split_action_options?.length ? i.split_action_options : void 0,
            j;
        t[10] !== m || t[11] !== A ? (j = m ? A?.find(st) : void 0, t[10] = m, t[11] = A, t[12] = j) : j = t[12];
        let M = j,
            N;
        t[13] !== M || t[14] !== A ? (N = M ? A?.filter(e => e !== M) : A, t[13] = M, t[14] = A, t[15] = N) : N = t[15];
        let P = N,
            F;
        t[16] !== i.name || t[17] !== i.type || t[18] !== k || t[19] !== M?.label ? (F = i.type === `allow` ? M?.label ?? (0, Q.jsx)(L, {
            ...k ? $.allowLowRiskActions : i.name === `allow_once` ? $.allowOnce : $.allow
        }) : null, t[16] = i.name, t[17] = i.type, t[18] = k, t[19] = M?.label, t[20] = F) : F = t[20];
        let I = F,
            R;
        t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, Q.jsx)(L, {
            ...$.alwaysAllow
        }), t[21] = R) : R = t[21];
        let z = R,
            B = `style` in i ? i.style : void 0,
            V = i.confirm_description,
            H;
        t[22] !== i.allow || t[23] !== i.type || t[24] !== M ? (H = i.type === `allow` ? {
            type: `allow`,
            target_message_id: i.allow.target_message_id,
            remember_answer: M?.action.type === `allow` ? M.action.remember_answer ?? !1 : !1
        } : null, t[22] = i.allow, t[23] = i.type, t[24] = M, t[25] = H) : H = t[25];
        let U = H,
            ce;
        t[26] !== i.allow || t[27] !== i.type || t[28] !== U || t[29] !== _ || t[30] !== n || t[31] !== E || t[32] !== l || t[33] !== h || t[34] !== k || t[35] !== d || t[36] !== o || t[37] !== c || t[38] !== s || t[39] !== O || t[40] !== p ? (ce = async e => {
            if (U != null) {
                if (k && i.type === `allow`) {
                    let t = i.allow.link_id;
                    if (t == null || d) return;
                    e.persist(), p(!0);
                    try {
                        await me(t, `review_important_actions`)
                    } catch {
                        f().danger(h.formatMessage($.permissionsUpdateFailed)), p(!1);
                        return
                    }
                    let r = a();
                    de(r, t, `review_important_actions`), le({
                        queryClient: r,
                        isRequestActive$: () => oe(O ?? n)
                    }), l({
                        clientThreadId: n,
                        sourceEvent: e,
                        onRequestCompletion: c,
                        assistantMessage: _,
                        allMessages: o,
                        replyTargetMessage: s,
                        actionData: U,
                        activeSystemHint: E()
                    }), p(!1);
                    return
                }
                l({
                    clientThreadId: n,
                    sourceEvent: e,
                    onRequestCompletion: c,
                    assistantMessage: _,
                    allMessages: o,
                    replyTargetMessage: s,
                    actionData: U,
                    activeSystemHint: E()
                })
            }
        }, t[26] = i.allow, t[27] = i.type, t[28] = U, t[29] = _, t[30] = n, t[31] = E, t[32] = l, t[33] = h, t[34] = k, t[35] = d, t[36] = o, t[37] = c, t[38] = s, t[39] = O, t[40] = p, t[41] = ce) : ce = t[41];
        let W = ce,
            ue;
        t[42] !== i.always_allow || t[43] !== i.type || t[44] !== _ || t[45] !== n || t[46] !== E || t[47] !== l || t[48] !== o || t[49] !== c || t[50] !== s || t[51] !== O ? (ue = e => {
            if (i.type !== `always_allow`) return;
            let t = {
                type: `always_allow`,
                ...i.always_allow
            };
            le({
                queryClient: a(),
                isRequestActive$: () => oe(O ?? n)
            }), l({
                clientThreadId: n,
                sourceEvent: e,
                onRequestCompletion: c,
                assistantMessage: _,
                allMessages: o,
                replyTargetMessage: s,
                actionData: t,
                activeSystemHint: E()
            })
        }, t[42] = i.always_allow, t[43] = i.type, t[44] = _, t[45] = n, t[46] = E, t[47] = l, t[48] = o, t[49] = c, t[50] = s, t[51] = O, t[52] = ue) : ue = t[52];
        let G = ue,
            K;
        t[53] !== _ || t[54] !== n || t[55] !== E || t[56] !== l || t[57] !== o || t[58] !== c || t[59] !== s || t[60] !== O ? (K = (e, t) => {
            t.type === `always_allow` && le({
                queryClient: a(),
                isRequestActive$: () => oe(O ?? n)
            }), l({
                clientThreadId: n,
                sourceEvent: e,
                onRequestCompletion: c,
                assistantMessage: _,
                allMessages: o,
                replyTargetMessage: s,
                actionData: t,
                activeSystemHint: E()
            })
        }, t[53] = _, t[54] = n, t[55] = E, t[56] = l, t[57] = o, t[58] = c, t[59] = s, t[60] = O, t[61] = K) : K = t[61];
        let fe = K,
            pe;
        t[62] !== i.deny || t[63] !== i.type || t[64] !== _ || t[65] !== n || t[66] !== E || t[67] !== l || t[68] !== o || t[69] !== c || t[70] !== s ? (pe = e => {
            i.type === `deny` && l({
                clientThreadId: n,
                sourceEvent: e,
                onRequestCompletion: c,
                assistantMessage: _,
                allMessages: o,
                replyTargetMessage: s,
                actionData: {
                    type: `deny`,
                    ...i.deny,
                    remember_answer: !1
                },
                activeSystemHint: E()
            })
        }, t[62] = i.deny, t[63] = i.type, t[64] = _, t[65] = n, t[66] = E, t[67] = l, t[68] = o, t[69] = c, t[70] = s, t[71] = pe) : pe = t[71];
        let he = pe,
            ge;
        t[72] !== i.oauth_redirect || t[73] !== i.type || t[74] !== n || t[75] !== S ? (ge = e => {
            i.type === `oauth_redirect` && ot(i.oauth_redirect, n, S)
        }, t[72] = i.oauth_redirect, t[73] = i.type, t[74] = n, t[75] = S, t[76] = ge) : ge = t[76];
        let _e = ge,
            ye;
        t[77] !== i.contact_gizmo || t[78] !== i.type || t[79] !== _ || t[80] !== n || t[81] !== E || t[82] !== l || t[83] !== o || t[84] !== c ? (ye = e => {
            i.type === `contact_gizmo` && l({
                clientThreadId: n,
                sourceEvent: e,
                onRequestCompletion: c,
                assistantMessage: _,
                allMessages: o,
                actionData: {
                    type: `contact_gizmo`,
                    ...i.contact_gizmo
                },
                activeSystemHint: E()
            })
        }, t[77] = i.contact_gizmo, t[78] = i.type, t[79] = _, t[80] = n, t[81] = E, t[82] = l, t[83] = o, t[84] = c, t[85] = ye) : ye = t[85];
        let be = ye,
            Se;
        t[86] !== i.name || t[87] !== i.type ? (Se = i.type === `deny` ? (0, Q.jsx)(L, {
            ...i.name === `decline` ? $.decline : $.deny
        }) : null, t[86] = i.name, t[87] = i.type, t[88] = Se) : Se = t[88];
        let Ce = Se,
            Te;
        t[89] !== i.type || t[90] !== u ? (Te = i.type === `oauth_redirect` ? (0, Q.jsx)(L, {
            ...$.signInButton,
            values: {
                domain: u
            }
        }) : null, t[89] = i.type, t[90] = u, t[91] = Te) : Te = t[91];
        let Ee = Te,
            ke;
        t[92] === i.type ? ke = t[93] : (ke = i.type === `contact_gizmo` ? (0, Q.jsx)(L, {
            ...$.allow
        }) : null, t[92] = i.type, t[93] = ke);
        let Ae = ke,
            je;
        t[94] !== i.type || t[95] !== B || t[96] !== I || t[97] !== Ae || t[98] !== Ce || t[99] !== P || t[100] !== W || t[101] !== G || t[102] !== be || t[103] !== he || t[104] !== _e || t[105] !== fe || t[106] !== d || t[107] !== Ee ? (je = i.type === `deny` ? (0, Q.jsx)(ae, {
            color: B ?? `secondary`,
            size: `small`,
            disabled: d,
            onClick: he,
            children: Ce
        }) : P != null && P.length > 0 && i.type === `allow` ? (0, Q.jsx)(Ne, {
            color: B ?? `primary`,
            disabled: d,
            onPrimaryAction: W,
            onSelectOption: fe,
            size: `small`,
            splitActionOptions: P,
            children: I
        }) : i.type === `allow` ? (0, Q.jsx)(ae, {
            color: B ?? `primary`,
            size: `small`,
            disabled: d,
            onClick: W,
            children: I
        }) : i.type === `always_allow` ? (0, Q.jsx)(ae, {
            color: B ?? `primary`,
            size: `small`,
            disabled: d,
            contentsFullWidth: !0,
            contentWrapperClassName: `min-w-0`,
            onClick: G,
            children: (0, Q.jsx)(`span`, {
                className: `min-w-0 flex-1 truncate text-center`,
                children: z
            })
        }) : i.type === `oauth_redirect` ? (0, Q.jsx)(ae, {
            color: `primary`,
            size: `small`,
            disabled: d,
            onClick: _e,
            children: Ee
        }) : i.type === `contact_gizmo` ? (0, Q.jsx)(ae, {
            color: `secondary`,
            size: `small`,
            disabled: d,
            onClick: be,
            children: Ae
        }) : null, t[94] = i.type, t[95] = B, t[96] = I, t[97] = Ae, t[98] = Ce, t[99] = P, t[100] = W, t[101] = G, t[102] = be, t[103] = he, t[104] = _e, t[105] = fe, t[106] = d, t[107] = Ee, t[108] = je) : je = t[108];
        let Me = je;
        if (Me != null && V && A == null) {
            let e;
            return t[109] !== Me || t[110] !== V ? (e = (0, Q.jsx)(ne, {
                label: V,
                side: `top`,
                align: `end`,
                triggerAs: null,
                labelTextAlign: `left`,
                children: Me
            }), t[109] = Me, t[110] = V, t[111] = e) : e = t[111], e
        }
        return Me
    }, $ = I({
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
    rt as a, $e as i, it as n, Pe as o, dt as r, Le as s, ut as t
};
//# sourceMappingURL=1c5ccd89-nx4gg6i29byiq5n5.js.map