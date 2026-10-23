import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A5 as r,
    Fz as i,
    Iz as a,
    K5 as o,
    Lit as s,
    Rit as ee,
    eE as c,
    hst as l,
    j5 as te,
    lF as ne,
    mst as u,
    q5 as d,
    vF as f
} from "./4813494d-mdvd4786a87166cc.js";
import {
    At as re,
    Bn as p,
    Nn as m,
    Q as h,
    Rn as g,
    Vn as _,
    wn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Aa as y,
    BKn as b,
    BOt as ie,
    HKn as x,
    K5t as S,
    LOt as C,
    MUn as w,
    Nr as T,
    Y5t as E,
    _Nt as ae,
    dr as D,
    gNt as O,
    jUn as k,
    ka as oe,
    kr as se,
    lr as ce
} from "./conversation-small-bcbq46iub1p0ca1t.js";
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
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    o as z,
    t as ge
} from "./8c1c50db-cbuurzbip2pl2c7i.js";
import {
    n as B,
    r as V,
    t as _e
} from "./02df22f1-lgaa397rk3neiqbf.js";
import {
    n as H,
    t as ve
} from "./dee3edb9-omotcfiskqjbvpy7.js";
import {
    r as U,
    t as ye
} from "./5be378a2-luurljuy7uhncj1t.js";
import {
    n as W,
    t as be
} from "./2d4fbc67-iezbbvkjt8sreox5.js";
import {
    n as G,
    t as K
} from "./c157dfba-o40ljr7mgioy7rlh.js";

function q(e) {
    "use forget";
    let t = (0, J.c)(66),
        {
            children: r
        } = e,
        a = (0, Y.use)(ne),
        s;
    t[0] === a ? s = t[1] : (s = l(a), t[0] = a, t[1] = s);
    let c = s,
        u;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (u = ee(), t[2] = u) : u = t[2];
    let d = u,
        f = te(xe),
        {
            pathname: p,
            search: h
        } = re(),
        g = /(?:^|\/)library(?:\/|$)/.test(p) ? `library` : /(?:^|\/)sites(?:\/|$)/.test(p) ? `sites` : `other`,
        _ = g === `library`,
        v;
    t[3] === h ? v = t[4] : (v = ae(new URLSearchParams(h)), t[3] = h, t[4] = v);
    let y = v,
        x = f?.desktopBreadcrumbs,
        S;
    t[5] !== p || t[6] !== x || t[7] !== f ? (S = x != null || f == null && E(ie(p).directoryId), t[5] = p, t[6] = x, t[7] = f, t[8] = S) : S = t[8];
    let C = S,
        w, T, D, O, A, j, M, N, P;
    if (t[9] !== c || t[10] !== _ || t[11] !== g || t[12] !== x || t[13] !== f || t[14] !== C) {
        let e = x == null ? [] : _e(x);
        O = f?.showUploadButton !== !1;
        let n;
        t[24] === f ? n = t[25] : (n = f == null || f.titlePlaceholder != null ? void 0 : f.title ?? (0, X.jsx)(m, {
            id: `artifacts.surface.page.title`,
            defaultMessage: `Library`
        }), t[24] = f, t[25] = n), D = n, t[26] === c ? A = t[27] : (A = (0, X.jsx)(R, {
            conversation: c
        }), t[26] = c, t[27] = A), T = b, M = `recall`, N = _, t[28] === c.id ? P = t[29] : (P = d && (0, X.jsx)(b.Navbar, {
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
        }), t[28] = c.id, t[29] = P), w = b.Header, j = C ? (0, X.jsx)(`div`, {
            "data-testid": `recall-desktop-breadcrumbs`,
            className: o(`has-[.persistent-page-header-upgrade-pill]:bg-primary hidden has-[.persistent-page-header-upgrade-pill]:sticky has-[.persistent-page-header-upgrade-pill]:top-0 has-[.persistent-page-header-upgrade-pill]:z-20 md:block`, se),
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
                                children: x?.separator
                            }) : null, (0, X.jsxs)(k.Root, {
                                children: [(0, X.jsx)(k.BasicTrigger, {
                                    asChild: !0,
                                    children: (0, X.jsx)(`button`, {
                                        type: `button`,
                                        "aria-label": x?.openParentFoldersLabel,
                                        className: `text-token-text-secondary hover:bg-token-bg-tertiary hover:text-token-text-primary focus-visible:ring-token-ring max-w-full min-w-0 shrink overflow-hidden rounded-lg px-2 py-1 text-start text-sm leading-5 transition-colors focus-visible:ring-2 focus-visible:outline-none`,
                                        children: Z
                                    })
                                }), (0, X.jsx)(k.Portal, {
                                    children: (0, X.jsx)(k.Content, {
                                        align: `start`,
                                        size: `medium`,
                                        className: `max-w-[min(320px,95vw)]`,
                                        children: e.hiddenItems.map(e => {
                                            let {
                                                item: t,
                                                itemIndex: n
                                            } = e;
                                            return (0, X.jsx)(k.Item, {
                                                size: `large`,
                                                className: `text-token-text-primary`,
                                                label: t.name,
                                                onSelect: () => {
                                                    x?.onSelect(t.id, n)
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
                        } = e, a = i === x?.activeIndex;
                        return (0, X.jsxs)(`div`, {
                            className: `contents`,
                            children: [n ? (0, X.jsx)(`span`, {
                                className: `text-token-text-tertiary px-1 text-sm leading-5`,
                                children: x?.separator
                            }) : null, (0, X.jsx)(`button`, {
                                type: `button`,
                                disabled: a,
                                className: o(`max-w-full min-w-0 shrink overflow-hidden rounded-lg py-1 text-start text-sm leading-5 transition-colors`, i === 0 ? `ms-1 px-1.5` : `px-1.5`, a ? `text-token-text-primary cursor-default` : `text-token-text-secondary hover:bg-token-bg-tertiary hover:text-token-text-primary`),
                                onClick: () => {
                                    x?.onSelect(r.id, i)
                                },
                                children: (0, X.jsx)(ge, {
                                    fileName: r.name
                                })
                            })]
                        }, `${r.id??`root`}-${i}`)
                    })
                }), d && (0, X.jsx)(F, {
                    surface: g
                })]
            })
        }) : d && f != null ? (0, X.jsx)(F, {
            surface: g,
            standalone: !0
        }) : null, t[9] = c, t[10] = _, t[11] = g, t[12] = x, t[13] = f, t[14] = C, t[15] = w, t[16] = T, t[17] = D, t[18] = O, t[19] = A, t[20] = j, t[21] = M, t[22] = N, t[23] = P
    } else w = t[15], T = t[16], D = t[17], O = t[18], A = t[19], j = t[20], M = t[21], N = t[22], P = t[23];
    let I;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, X.jsx)(i, {
        children: (0, X.jsx)(he, {})
    }), t[30] = I) : I = t[30];
    let L;
    t[31] !== f || t[32] !== D || t[33] !== y || t[34] !== O ? (L = (d || f != null) && !y && (0, X.jsx)(ve, {
        navigationButton: d ? (0, X.jsx)(me, {}) : void 0,
        title: D,
        titlePrefix: f?.titlePrefix,
        titlePlaceholder: f?.titlePlaceholder,
        rightContent: f?.rightContent ?? (f && O ? (0, X.jsx)(n, {
            size: `medium`,
            "aria-disabled": f.uploadDisabled,
            onClick: e => {
                if (f.uploadDisabled) {
                    e.preventDefault();
                    return
                }
                f.onUpload()
            },
            children: (0, X.jsx)(m, {
                id: `artifacts.surface.upload_files`,
                defaultMessage: `Upload`
            })
        }) : void 0)
    }), t[31] = f, t[32] = D, t[33] = y, t[34] = O, t[35] = L) : L = t[35];
    let z;
    t[36] !== w || t[37] !== L || t[38] !== j ? (z = (0, X.jsxs)(w, {
        children: [j, I, L]
    }), t[36] = w, t[37] = L, t[38] = j, t[39] = z) : z = t[39];
    let B;
    t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, X.jsx)(oe, {}), t[40] = B) : B = t[40];
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
    t[47] !== V || t[48] !== H || t[49] !== U || t[50] !== W ? (G = (0, X.jsxs)(b.ContentSidebar, {
        children: [V, H, U, W]
    }), t[47] = V, t[48] = H, t[49] = U, t[50] = W, t[51] = G) : G = t[51];
    let q;
    t[52] !== T || t[53] !== r || t[54] !== z || t[55] !== G || t[56] !== M || t[57] !== N || t[58] !== P ? (q = (0, X.jsxs)(T, {
        className: M,
        enableSidePaneShell: N,
        children: [P, z, r, B, G]
    }), t[52] = T, t[53] = r, t[54] = z, t[55] = G, t[56] = M, t[57] = N, t[58] = P, t[59] = q) : q = t[59];
    let Q;
    t[60] === c ? Q = t[61] : (Q = (0, X.jsx)(ce, {
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
    J = v(), c(), M(), L(), y(), a(), N(), j(), D(), f(), T(), w(), U(), P(), W(), H(), A(), z(), S(), C(), B(), O(), I(), x(), r(), s(), u(), G(), d(), Y = t(_()), g(), h(), X = p(), Z = `...`
}));
export {
    Q as n, q as t
};
//# sourceMappingURL=9302b335-gr1ajj0ofafgnksb.js.map