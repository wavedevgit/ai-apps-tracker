import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Ait as r,
    Fz as i,
    Iz as a,
    J5 as ee,
    cst as te,
    eE as o,
    jit as ne,
    l7 as s,
    lF as re,
    q5 as c,
    sst as l,
    u7 as u,
    vF as d
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    At as ie,
    Bn as f,
    Nn as p,
    Q as m,
    Rn as h,
    Vn as g,
    wn as _
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Aa as v,
    EKn as y,
    HOt as ae,
    K5t as oe,
    Nr as b,
    U5t as x,
    bNt as se,
    dr as S,
    ka as C,
    kr as ce,
    lr as w,
    vUn as T,
    wKn as E,
    yNt as D,
    yUn as O,
    zOt as k
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    D as le,
    E as A,
    F as j,
    G as M,
    Gp as N,
    H as ue,
    N as de,
    O as P,
    T as F,
    U as fe,
    Up as pe,
    Wp as me,
    b as I,
    m as L,
    p as R,
    y as he
} from "./8b34dbc2-bgocf3s6t6l67twq.js";
import {
    o as z,
    t as ge
} from "./8c1c50db-h1mjd45x1w3d9uto.js";
import {
    n as B,
    r as V,
    t as _e
} from "./02df22f1-mq6yav9awepdfhiy.js";
import {
    n as H,
    t as ve
} from "./dee3edb9-buepbqpeefndk83y.js";
import {
    r as U,
    t as ye
} from "./5be378a2-ekkjousky8xmrb7h.js";
import {
    n as W,
    t as be
} from "./2d4fbc67-gvldommw2ltuowhw.js";
import {
    n as G,
    t as K
} from "./c157dfba-d71d5v5hjxkij8fq.js";

function q(e) {
    "use forget";
    let t = (0, J.c)(66),
        {
            children: r
        } = e,
        a = (0, Y.use)(re),
        o;
    t[0] === a ? o = t[1] : (o = te(a), t[0] = a, t[1] = o);
    let c = o,
        l;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = ne(), t[2] = l) : l = t[2];
    let u = l,
        d = ee(xe),
        {
            pathname: f,
            search: m
        } = ie(),
        h = /(?:^|\/)library(?:\/|$)/.test(f) ? `library` : /(?:^|\/)sites(?:\/|$)/.test(f) ? `sites` : `other`,
        g = h === `library`,
        _;
    t[3] === m ? _ = t[4] : (_ = se(new URLSearchParams(m)), t[3] = m, t[4] = _);
    let v = _,
        y = d?.desktopBreadcrumbs,
        b;
    t[5] !== f || t[6] !== y || t[7] !== d ? (b = y != null || d == null && oe(ae(f).directoryId), t[5] = f, t[6] = y, t[7] = d, t[8] = b) : b = t[8];
    let x = b,
        S, D, O, k, A, j, M, N, P;
    if (t[9] !== c || t[10] !== g || t[11] !== h || t[12] !== y || t[13] !== d || t[14] !== x) {
        let e = y == null ? [] : _e(y);
        k = d?.showUploadButton !== !1;
        let n;
        t[24] === d ? n = t[25] : (n = d == null || d.titlePlaceholder != null ? void 0 : d.title ?? (0, X.jsx)(p, {
            id: `artifacts.surface.page.title`,
            defaultMessage: `Library`
        }), t[24] = d, t[25] = n), O = n, t[26] === c ? A = t[27] : (A = (0, X.jsx)(R, {
            conversation: c
        }), t[26] = c, t[27] = A), D = E, M = `recall`, N = g, t[28] === c.id ? P = t[29] : (P = u && (0, X.jsx)(E.Navbar, {
            children: (0, X.jsx)(pe, {
                insetBg: (0, X.jsx)(`div`, {
                    className: `absolute inset-0 backdrop-blur-xs`
                }),
                children: (0, X.jsx)(le, {
                    navHeader: (0, X.jsx)(fe, {}),
                    children: (0, X.jsx)(ue, {
                        clientThreadId: c.id
                    })
                })
            })
        }), t[28] = c.id, t[29] = P), S = E.Header, j = x ? (0, X.jsx)(`div`, {
            "data-testid": `recall-desktop-breadcrumbs`,
            className: s(`has-[.persistent-page-header-upgrade-pill]:bg-primary hidden has-[.persistent-page-header-upgrade-pill]:sticky has-[.persistent-page-header-upgrade-pill]:top-0 has-[.persistent-page-header-upgrade-pill]:z-20 md:block`, ce),
            children: (0, X.jsxs)(`div`, {
                className: `h-header-height flex w-full items-center justify-between ps-4 pe-2`,
                children: [(0, X.jsx)(`nav`, {
                    className: `flex min-w-0 items-center gap-1 overflow-hidden whitespace-nowrap`,
                    children: e.map((e, t) => {
                        let n = t > 0;
                        if (e.type === `collapsed`) return (0, X.jsxs)(`div`, {
                            className: `contents`,
                            children: [n ? (0, X.jsx)(`span`, {
                                "aria-hidden": `true`,
                                className: `text-token-text-tertiary px-1 text-sm leading-5`,
                                children: y?.separator
                            }) : null, (0, X.jsxs)(T.Root, {
                                children: [(0, X.jsx)(T.BasicTrigger, {
                                    asChild: !0,
                                    children: (0, X.jsx)(`button`, {
                                        type: `button`,
                                        "aria-label": y?.openParentFoldersLabel,
                                        className: `text-token-text-secondary hover:bg-token-bg-tertiary hover:text-token-text-primary focus-visible:ring-token-ring max-w-full min-w-0 shrink overflow-hidden rounded-lg px-2 py-1 text-start text-sm leading-5 transition-colors focus-visible:ring-2 focus-visible:outline-none`,
                                        children: Z
                                    })
                                }), (0, X.jsx)(T.Portal, {
                                    children: (0, X.jsx)(T.Content, {
                                        align: `start`,
                                        size: `medium`,
                                        className: `max-w-[min(320px,95vw)]`,
                                        children: e.hiddenItems.map(e => {
                                            let {
                                                item: t,
                                                itemIndex: n
                                            } = e;
                                            return (0, X.jsx)(T.Item, {
                                                size: `large`,
                                                className: `text-token-text-primary`,
                                                label: t.name,
                                                onSelect: () => {
                                                    y?.onSelect(t.id, n)
                                                }
                                            }, `${t.id??`root`}-${n}`)
                                        })
                                    })
                                })]
                            })]
                        }, `collapsed-ancestors`);
                        let {
                            item: r,
                            itemIndex: i
                        } = e, a = i === y?.activeIndex;
                        return (0, X.jsxs)(`div`, {
                            className: `contents`,
                            children: [n ? (0, X.jsx)(`span`, {
                                className: `text-token-text-tertiary px-1 text-sm leading-5`,
                                children: y?.separator
                            }) : null, (0, X.jsx)(`button`, {
                                type: `button`,
                                disabled: a,
                                className: s(`max-w-full min-w-0 shrink overflow-hidden rounded-lg py-1 text-start text-sm leading-5 transition-colors`, i === 0 ? `ms-1 px-1.5` : `px-1.5`, a ? `text-token-text-primary cursor-default` : `text-token-text-secondary hover:bg-token-bg-tertiary hover:text-token-text-primary`),
                                onClick: () => {
                                    y?.onSelect(r.id, i)
                                },
                                children: (0, X.jsx)(ge, {
                                    fileName: r.name
                                })
                            })]
                        }, `${r.id??`root`}-${i}`)
                    })
                }), u && (0, X.jsx)(F, {
                    surface: h
                })]
            })
        }) : u && d != null ? (0, X.jsx)(F, {
            surface: h,
            standalone: !0
        }) : null, t[9] = c, t[10] = g, t[11] = h, t[12] = y, t[13] = d, t[14] = x, t[15] = S, t[16] = D, t[17] = O, t[18] = k, t[19] = A, t[20] = j, t[21] = M, t[22] = N, t[23] = P
    } else S = t[15], D = t[16], O = t[17], k = t[18], A = t[19], j = t[20], M = t[21], N = t[22], P = t[23];
    let I;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, X.jsx)(i, {
        children: (0, X.jsx)(he, {})
    }), t[30] = I) : I = t[30];
    let L;
    t[31] !== d || t[32] !== O || t[33] !== v || t[34] !== k ? (L = (u || d != null) && !v && (0, X.jsx)(ve, {
        navigationButton: u ? (0, X.jsx)(me, {}) : void 0,
        title: O,
        titlePrefix: d?.titlePrefix,
        titlePlaceholder: d?.titlePlaceholder,
        rightContent: d?.rightContent ?? (d && k ? (0, X.jsx)(n, {
            size: `medium`,
            "aria-disabled": d.uploadDisabled,
            onClick: e => {
                if (d.uploadDisabled) {
                    e.preventDefault();
                    return
                }
                d.onUpload()
            },
            children: (0, X.jsx)(p, {
                id: `artifacts.surface.upload_files`,
                defaultMessage: `Upload`
            })
        }) : void 0)
    }), t[31] = d, t[32] = O, t[33] = v, t[34] = k, t[35] = L) : L = t[35];
    let z;
    t[36] !== S || t[37] !== L || t[38] !== j ? (z = (0, X.jsxs)(S, {
        children: [j, I, L]
    }), t[36] = S, t[37] = L, t[38] = j, t[39] = z) : z = t[39];
    let B;
    t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, X.jsx)(C, {}), t[40] = B) : B = t[40];
    let V;
    t[41] === c ? V = t[42] : (V = (0, X.jsx)(i, {
        children: (0, X.jsx)(de, {
            conversation: c
        })
    }), t[41] = c, t[42] = V);
    let H, U, W;
    t[43] === c.id ? (H = t[44], U = t[45], W = t[46]) : (H = (0, X.jsx)(ye, {
        clientThreadId: c.id
    }), U = (0, X.jsx)(be, {
        clientThreadId: c.id
    }), W = (0, X.jsx)(K, {
        clientThreadId: c.id
    }), t[43] = c.id, t[44] = H, t[45] = U, t[46] = W);
    let G;
    t[47] !== V || t[48] !== H || t[49] !== U || t[50] !== W ? (G = (0, X.jsxs)(E.ContentSidebar, {
        children: [V, H, U, W]
    }), t[47] = V, t[48] = H, t[49] = U, t[50] = W, t[51] = G) : G = t[51];
    let q;
    t[52] !== D || t[53] !== r || t[54] !== z || t[55] !== G || t[56] !== M || t[57] !== N || t[58] !== P ? (q = (0, X.jsxs)(D, {
        className: M,
        enableSidePaneShell: N,
        children: [P, z, r, B, G]
    }), t[52] = D, t[53] = r, t[54] = z, t[55] = G, t[56] = M, t[57] = N, t[58] = P, t[59] = q) : q = t[59];
    let Q;
    t[60] === c ? Q = t[61] : (Q = (0, X.jsx)(w, {
        conversation: c
    }), t[60] = c, t[61] = Q);
    let $;
    return t[62] !== A || t[63] !== q || t[64] !== Q ? ($ = (0, X.jsxs)(X.Fragment, {
        children: [A, q, Q]
    }), t[62] = A, t[63] = q, t[64] = Q, t[65] = $) : $ = t[65], $
}

function xe() {
    return V()
}
var J, Y, X, Z, Q = e((() => {
    J = _(), o(), M(), L(), v(), a(), N(), j(), S(), d(), b(), O(), U(), P(), W(), H(), A(), z(), x(), k(), B(), D(), I(), y(), c(), r(), l(), G(), u(), Y = t(g()), h(), m(), X = f(), Z = `...`
}));
export {
    Q as n, q as t
};
//# sourceMappingURL=9302b335-l5xszrdhkc2hpvmg.js.map