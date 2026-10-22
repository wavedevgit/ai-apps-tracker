import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Dit as r,
    Fz as i,
    Iz as a,
    K5 as o,
    Oit as ee,
    ast as s,
    c7 as c,
    eE as l,
    ist as u,
    l7 as d,
    lF as te,
    q5 as ne,
    vF as f
} from "./4813494d-itnrgnth03y1sm9d.js";
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
    HOt as ie,
    I5t as ae,
    N5t as b,
    Nr as x,
    bNt as oe,
    dr as S,
    ka as se,
    kr as ce,
    lKn as C,
    lr as w,
    nUn as T,
    sKn as E,
    tUn as D,
    yNt as O,
    zOt as k
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    D as le,
    E as A,
    F as j,
    G as M,
    H as ue,
    Hp as de,
    N as fe,
    O as N,
    T as P,
    U as pe,
    Up as me,
    Wp as F,
    b as I,
    m as L,
    p as R,
    y as he
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
import {
    o as z,
    t as ge
} from "./8c1c50db-je61ockg3o4ou36a.js";
import {
    n as B,
    r as V,
    t as _e
} from "./02df22f1-bvbsnudn7zt6bdel.js";
import {
    n as H,
    t as ve
} from "./dee3edb9-hsfg0h65hwlplpyr.js";
import {
    r as U,
    t as ye
} from "./5be378a2-ijc4ox6i02xluv72.js";
import {
    n as W,
    t as be
} from "./2d4fbc67-g2ewcv564davp6v2.js";
import {
    n as G,
    t as K
} from "./c157dfba-ix6fl3nwmzeaig2a.js";

function q(e) {
    "use forget";
    let t = (0, J.c)(66),
        {
            children: r
        } = e,
        a = (0, Y.use)(te),
        o;
    t[0] === a ? o = t[1] : (o = s(a), t[0] = a, t[1] = o);
    let l = o,
        u;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (u = ee(), t[2] = u) : u = t[2];
    let d = u,
        f = ne(xe),
        {
            pathname: p,
            search: h
        } = re(),
        g = /(?:^|\/)library(?:\/|$)/.test(p) ? `library` : /(?:^|\/)sites(?:\/|$)/.test(p) ? `sites` : `other`,
        _ = g === `library`,
        v;
    t[3] === h ? v = t[4] : (v = oe(new URLSearchParams(h)), t[3] = h, t[4] = v);
    let y = v,
        b = f?.desktopBreadcrumbs,
        x;
    t[5] !== p || t[6] !== b || t[7] !== f ? (x = b != null || f == null && ae(ie(p).directoryId), t[5] = p, t[6] = b, t[7] = f, t[8] = x) : x = t[8];
    let S = x,
        C, T, O, k, A, j, M, N, F;
    if (t[9] !== l || t[10] !== _ || t[11] !== g || t[12] !== b || t[13] !== f || t[14] !== S) {
        let e = b == null ? [] : _e(b);
        k = f?.showUploadButton !== !1;
        let n;
        t[24] === f ? n = t[25] : (n = f == null || f.titlePlaceholder != null ? void 0 : f.title ?? (0, X.jsx)(m, {
            id: `artifacts.surface.page.title`,
            defaultMessage: `Library`
        }), t[24] = f, t[25] = n), O = n, t[26] === l ? A = t[27] : (A = (0, X.jsx)(R, {
            conversation: l
        }), t[26] = l, t[27] = A), T = E, M = `recall`, N = _, t[28] === l.id ? F = t[29] : (F = d && (0, X.jsx)(E.Navbar, {
            children: (0, X.jsx)(de, {
                insetBg: (0, X.jsx)(`div`, {
                    className: `absolute inset-0 backdrop-blur-xs`
                }),
                children: (0, X.jsx)(le, {
                    navHeader: (0, X.jsx)(pe, {}),
                    children: (0, X.jsx)(ue, {
                        clientThreadId: l.id
                    })
                })
            })
        }), t[28] = l.id, t[29] = F), C = E.Header, j = S ? (0, X.jsx)(`div`, {
            "data-testid": `recall-desktop-breadcrumbs`,
            className: c(`has-[.persistent-page-header-upgrade-pill]:bg-primary hidden has-[.persistent-page-header-upgrade-pill]:sticky has-[.persistent-page-header-upgrade-pill]:top-0 has-[.persistent-page-header-upgrade-pill]:z-20 md:block`, ce),
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
                                children: b?.separator
                            }) : null, (0, X.jsxs)(D.Root, {
                                children: [(0, X.jsx)(D.BasicTrigger, {
                                    asChild: !0,
                                    children: (0, X.jsx)(`button`, {
                                        type: `button`,
                                        "aria-label": b?.openParentFoldersLabel,
                                        className: `text-token-text-secondary hover:bg-token-bg-tertiary hover:text-token-text-primary focus-visible:ring-token-ring max-w-full min-w-0 shrink overflow-hidden rounded-lg px-2 py-1 text-start text-sm leading-5 transition-colors focus-visible:ring-2 focus-visible:outline-none`,
                                        children: Z
                                    })
                                }), (0, X.jsx)(D.Portal, {
                                    children: (0, X.jsx)(D.Content, {
                                        align: `start`,
                                        size: `medium`,
                                        className: `max-w-[min(320px,95vw)]`,
                                        children: e.hiddenItems.map(e => {
                                            let {
                                                item: t,
                                                itemIndex: n
                                            } = e;
                                            return (0, X.jsx)(D.Item, {
                                                size: `large`,
                                                className: `text-token-text-primary`,
                                                label: t.name,
                                                onSelect: () => {
                                                    b?.onSelect(t.id, n)
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
                        } = e, a = i === b?.activeIndex;
                        return (0, X.jsxs)(`div`, {
                            className: `contents`,
                            children: [n ? (0, X.jsx)(`span`, {
                                className: `text-token-text-tertiary px-1 text-sm leading-5`,
                                children: b?.separator
                            }) : null, (0, X.jsx)(`button`, {
                                type: `button`,
                                disabled: a,
                                className: c(`max-w-full min-w-0 shrink overflow-hidden rounded-lg py-1 text-start text-sm leading-5 transition-colors`, i === 0 ? `ms-1 px-1.5` : `px-1.5`, a ? `text-token-text-primary cursor-default` : `text-token-text-secondary hover:bg-token-bg-tertiary hover:text-token-text-primary`),
                                onClick: () => {
                                    b?.onSelect(r.id, i)
                                },
                                children: (0, X.jsx)(ge, {
                                    fileName: r.name
                                })
                            })]
                        }, `${r.id??`root`}-${i}`)
                    })
                }), d && (0, X.jsx)(P, {
                    surface: g
                })]
            })
        }) : d && f != null ? (0, X.jsx)(P, {
            surface: g,
            standalone: !0
        }) : null, t[9] = l, t[10] = _, t[11] = g, t[12] = b, t[13] = f, t[14] = S, t[15] = C, t[16] = T, t[17] = O, t[18] = k, t[19] = A, t[20] = j, t[21] = M, t[22] = N, t[23] = F
    } else C = t[15], T = t[16], O = t[17], k = t[18], A = t[19], j = t[20], M = t[21], N = t[22], F = t[23];
    let I;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, X.jsx)(i, {
        children: (0, X.jsx)(he, {})
    }), t[30] = I) : I = t[30];
    let L;
    t[31] !== f || t[32] !== O || t[33] !== y || t[34] !== k ? (L = (d || f != null) && !y && (0, X.jsx)(ve, {
        navigationButton: d ? (0, X.jsx)(me, {}) : void 0,
        title: O,
        titlePrefix: f?.titlePrefix,
        titlePlaceholder: f?.titlePlaceholder,
        rightContent: f?.rightContent ?? (f && k ? (0, X.jsx)(n, {
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
    }), t[31] = f, t[32] = O, t[33] = y, t[34] = k, t[35] = L) : L = t[35];
    let z;
    t[36] !== C || t[37] !== L || t[38] !== j ? (z = (0, X.jsxs)(C, {
        children: [j, I, L]
    }), t[36] = C, t[37] = L, t[38] = j, t[39] = z) : z = t[39];
    let B;
    t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, X.jsx)(se, {}), t[40] = B) : B = t[40];
    let V;
    t[41] === l ? V = t[42] : (V = (0, X.jsx)(i, {
        children: (0, X.jsx)(fe, {
            conversation: l
        })
    }), t[41] = l, t[42] = V);
    let H, U, W;
    t[43] === l.id ? (H = t[44], U = t[45], W = t[46]) : (H = (0, X.jsx)(ye, {
        clientThreadId: l.id
    }), U = (0, X.jsx)(be, {
        clientThreadId: l.id
    }), W = (0, X.jsx)(K, {
        clientThreadId: l.id
    }), t[43] = l.id, t[44] = H, t[45] = U, t[46] = W);
    let G;
    t[47] !== V || t[48] !== H || t[49] !== U || t[50] !== W ? (G = (0, X.jsxs)(E.ContentSidebar, {
        children: [V, H, U, W]
    }), t[47] = V, t[48] = H, t[49] = U, t[50] = W, t[51] = G) : G = t[51];
    let q;
    t[52] !== T || t[53] !== r || t[54] !== z || t[55] !== G || t[56] !== M || t[57] !== N || t[58] !== F ? (q = (0, X.jsxs)(T, {
        className: M,
        enableSidePaneShell: N,
        children: [F, z, r, B, G]
    }), t[52] = T, t[53] = r, t[54] = z, t[55] = G, t[56] = M, t[57] = N, t[58] = F, t[59] = q) : q = t[59];
    let Q;
    t[60] === l ? Q = t[61] : (Q = (0, X.jsx)(w, {
        conversation: l
    }), t[60] = l, t[61] = Q);
    let $;
    return t[62] !== A || t[63] !== q || t[64] !== Q ? ($ = (0, X.jsxs)(X.Fragment, {
        children: [A, q, Q]
    }), t[62] = A, t[63] = q, t[64] = Q, t[65] = $) : $ = t[65], $
}

function xe() {
    return V()
}
var J, Y, X, Z, Q = e((() => {
    J = v(), l(), M(), L(), y(), a(), F(), j(), S(), f(), x(), T(), U(), N(), W(), H(), A(), z(), b(), k(), B(), O(), I(), C(), o(), r(), u(), G(), d(), Y = t(_()), g(), h(), X = p(), Z = `...`
}));
export {
    Q as n, q as t
};
//# sourceMappingURL=9302b335-d2a9ssdd90sdm3xc.js.map