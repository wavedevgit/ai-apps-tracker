import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as n,
    Dz as r,
    G5 as i,
    JT as a,
    K5 as o,
    Lot as s,
    Oz as c,
    Rot as ee,
    fF as l,
    k5 as u,
    oit as d,
    qT as te,
    rF as ne,
    sit as re
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as f,
    Bn as p,
    Nn as m,
    Rn as h,
    Vn as g,
    jt as ie,
    wn as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Aa as v,
    BOt as y,
    F5t as b,
    GGn as x,
    LHn as S,
    Nr as C,
    R5t as ae,
    RHn as w,
    UGn as T,
    UOt as oe,
    bNt as E,
    dr as D,
    ka as O,
    kr as se,
    lr as ce,
    xNt as le
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Bp as ue,
    D as de,
    E as k,
    F as A,
    G as j,
    H as fe,
    N as pe,
    O as M,
    T as N,
    U as me,
    Vp as P,
    b as F,
    m as I,
    p as L,
    y as R,
    zp as he
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";
import {
    o as z,
    t as ge
} from "./8c1c50db-mkw16svtmmk1vznq.js";
import {
    n as B,
    r as V,
    t as _e
} from "./02df22f1-owuhvuexvdhzr2tq.js";
import {
    n as H,
    t as ve
} from "./dee3edb9-h41f8bh55h3xqjpl.js";
import {
    r as U,
    t as ye
} from "./5be378a2-f3s8bwi5ygayw36x.js";
import {
    n as W,
    t as be
} from "./2d4fbc67-fkyl38d50wqvk4so.js";
import {
    n as G,
    t as K
} from "./c157dfba-e0bdyj0gdqgmlrfh.js";

function q(e) {
    "use forget";
    let t = (0, J.c)(66),
        {
            children: a
        } = e,
        o = (0, Y.use)(ne),
        s;
    t[0] === o ? s = t[1] : (s = ee(o), t[0] = o, t[1] = s);
    let c = s,
        l;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = re(), t[2] = l) : l = t[2];
    let u = l,
        d = n(xe),
        {
            pathname: f,
            search: p
        } = ie(),
        h = /(?:^|\/)library(?:\/|$)/.test(f) ? `library` : /(?:^|\/)sites(?:\/|$)/.test(f) ? `sites` : `other`,
        g = h === `library`,
        _;
    t[3] === p ? _ = t[4] : (_ = le(new URLSearchParams(p)), t[3] = p, t[4] = _);
    let v = _,
        y = d?.desktopBreadcrumbs,
        b;
    t[5] !== f || t[6] !== y || t[7] !== d ? (b = y != null || d == null && ae(oe(f).directoryId), t[5] = f, t[6] = y, t[7] = d, t[8] = b) : b = t[8];
    let x = b,
        C, w, E, D, k, A, j, M, P;
    if (t[9] !== c || t[10] !== g || t[11] !== h || t[12] !== y || t[13] !== d || t[14] !== x) {
        let e = y == null ? [] : _e(y);
        D = d?.showUploadButton !== !1;
        let n;
        t[24] === d ? n = t[25] : (n = d == null || d.titlePlaceholder != null ? void 0 : d.title ?? (0, X.jsx)(m, {
            id: `artifacts.surface.page.title`,
            defaultMessage: `Library`
        }), t[24] = d, t[25] = n), E = n, t[26] === c ? k = t[27] : (k = (0, X.jsx)(L, {
            conversation: c
        }), t[26] = c, t[27] = k), w = T, j = `recall`, M = g, t[28] === c.id ? P = t[29] : (P = u && (0, X.jsx)(T.Navbar, {
            children: (0, X.jsx)(he, {
                insetBg: (0, X.jsx)(`div`, {
                    className: `absolute inset-0 backdrop-blur-xs`
                }),
                children: (0, X.jsx)(de, {
                    navHeader: (0, X.jsx)(me, {}),
                    children: (0, X.jsx)(fe, {
                        clientThreadId: c.id
                    })
                })
            })
        }), t[28] = c.id, t[29] = P), C = T.Header, A = x ? (0, X.jsx)(`div`, {
            "data-testid": `recall-desktop-breadcrumbs`,
            className: i(`has-[.persistent-page-header-upgrade-pill]:bg-primary hidden has-[.persistent-page-header-upgrade-pill]:sticky has-[.persistent-page-header-upgrade-pill]:top-0 has-[.persistent-page-header-upgrade-pill]:z-20 md:block`, se),
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
                            }) : null, (0, X.jsxs)(S.Root, {
                                children: [(0, X.jsx)(S.BasicTrigger, {
                                    asChild: !0,
                                    children: (0, X.jsx)(`button`, {
                                        type: `button`,
                                        "aria-label": y?.openParentFoldersLabel,
                                        className: `text-token-text-secondary hover:bg-token-bg-tertiary hover:text-token-text-primary focus-visible:ring-token-ring max-w-full min-w-0 shrink overflow-hidden rounded-lg px-2 py-1 text-start text-sm leading-5 transition-colors focus-visible:ring-2 focus-visible:outline-none`,
                                        children: Z
                                    })
                                }), (0, X.jsx)(S.Portal, {
                                    children: (0, X.jsx)(S.Content, {
                                        align: `start`,
                                        size: `medium`,
                                        className: `max-w-[min(320px,95vw)]`,
                                        children: e.hiddenItems.map(e => {
                                            let {
                                                item: t,
                                                itemIndex: n
                                            } = e;
                                            return (0, X.jsx)(S.Item, {
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
                            itemIndex: a
                        } = e, o = a === y?.activeIndex;
                        return (0, X.jsxs)(`div`, {
                            className: `contents`,
                            children: [n ? (0, X.jsx)(`span`, {
                                className: `text-token-text-tertiary px-1 text-sm leading-5`,
                                children: y?.separator
                            }) : null, (0, X.jsx)(`button`, {
                                type: `button`,
                                disabled: o,
                                className: i(`max-w-full min-w-0 shrink overflow-hidden rounded-lg py-1 text-start text-sm leading-5 transition-colors`, a === 0 ? `ms-1 px-1.5` : `px-1.5`, o ? `text-token-text-primary cursor-default` : `text-token-text-secondary hover:bg-token-bg-tertiary hover:text-token-text-primary`),
                                onClick: () => {
                                    y?.onSelect(r.id, a)
                                },
                                children: (0, X.jsx)(ge, {
                                    fileName: r.name
                                })
                            })]
                        }, `${r.id??`root`}-${a}`)
                    })
                }), u && (0, X.jsx)(N, {
                    surface: h
                })]
            })
        }) : u && d != null ? (0, X.jsx)(N, {
            surface: h,
            standalone: !0
        }) : null, t[9] = c, t[10] = g, t[11] = h, t[12] = y, t[13] = d, t[14] = x, t[15] = C, t[16] = w, t[17] = E, t[18] = D, t[19] = k, t[20] = A, t[21] = j, t[22] = M, t[23] = P
    } else C = t[15], w = t[16], E = t[17], D = t[18], k = t[19], A = t[20], j = t[21], M = t[22], P = t[23];
    let F;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, X.jsx)(r, {
        children: (0, X.jsx)(R, {})
    }), t[30] = F) : F = t[30];
    let I;
    t[31] !== d || t[32] !== E || t[33] !== v || t[34] !== D ? (I = (u || d != null) && !v && (0, X.jsx)(ve, {
        navigationButton: u ? (0, X.jsx)(ue, {}) : void 0,
        title: E,
        titlePrefix: d?.titlePrefix,
        titlePlaceholder: d?.titlePlaceholder,
        rightContent: d?.rightContent ?? (d && D ? (0, X.jsx)(te, {
            size: `medium`,
            "aria-disabled": d.uploadDisabled,
            onClick: e => {
                if (d.uploadDisabled) {
                    e.preventDefault();
                    return
                }
                d.onUpload()
            },
            children: (0, X.jsx)(m, {
                id: `artifacts.surface.upload_files`,
                defaultMessage: `Upload`
            })
        }) : void 0)
    }), t[31] = d, t[32] = E, t[33] = v, t[34] = D, t[35] = I) : I = t[35];
    let z;
    t[36] !== C || t[37] !== I || t[38] !== A ? (z = (0, X.jsxs)(C, {
        children: [A, F, I]
    }), t[36] = C, t[37] = I, t[38] = A, t[39] = z) : z = t[39];
    let B;
    t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, X.jsx)(O, {}), t[40] = B) : B = t[40];
    let V;
    t[41] === c ? V = t[42] : (V = (0, X.jsx)(r, {
        children: (0, X.jsx)(pe, {
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
    t[47] !== V || t[48] !== H || t[49] !== U || t[50] !== W ? (G = (0, X.jsxs)(T.ContentSidebar, {
        children: [V, H, U, W]
    }), t[47] = V, t[48] = H, t[49] = U, t[50] = W, t[51] = G) : G = t[51];
    let q;
    t[52] !== w || t[53] !== a || t[54] !== z || t[55] !== G || t[56] !== j || t[57] !== M || t[58] !== P ? (q = (0, X.jsxs)(w, {
        className: j,
        enableSidePaneShell: M,
        children: [P, z, a, B, G]
    }), t[52] = w, t[53] = a, t[54] = z, t[55] = G, t[56] = j, t[57] = M, t[58] = P, t[59] = q) : q = t[59];
    let Q;
    t[60] === c ? Q = t[61] : (Q = (0, X.jsx)(ce, {
        conversation: c
    }), t[60] = c, t[61] = Q);
    let $;
    return t[62] !== k || t[63] !== q || t[64] !== Q ? ($ = (0, X.jsxs)(X.Fragment, {
        children: [k, q, Q]
    }), t[62] = k, t[63] = q, t[64] = Q, t[65] = $) : $ = t[65], $
}

function xe() {
    return V()
}
var J, Y, X, Z, Q = e((() => {
    J = _(), a(), j(), I(), v(), c(), P(), A(), D(), l(), C(), w(), U(), M(), W(), H(), k(), z(), b(), y(), B(), E(), F(), x(), u(), d(), s(), G(), o(), Y = t(g()), h(), f(), X = p(), Z = `...`
}));
export {
    Q as n, q as t
};
//# sourceMappingURL=9302b335-itjdchuzmrx6o9p0.js.map