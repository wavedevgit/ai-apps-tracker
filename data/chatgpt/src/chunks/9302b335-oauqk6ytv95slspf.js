import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dz as n,
    Hot as r,
    J5 as i,
    JT as a,
    M5 as o,
    N5 as ee,
    Oz as s,
    Vot as c,
    Y5 as l,
    dit as te,
    fF as u,
    qT as ne,
    rF as re,
    uit as d
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    B5t as ae,
    CNt as y,
    KOt as oe,
    L5t as b,
    NHn as x,
    Nr as S,
    PHn as C,
    UOt as w,
    VGn as T,
    dr as E,
    ka as D,
    kr as O,
    lr as se,
    wNt as ce,
    zGn as k
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Bp as le,
    D as ue,
    E as A,
    F as j,
    G as M,
    H as de,
    Hp as N,
    N as fe,
    O as P,
    T as F,
    U as pe,
    Vp as me,
    b as I,
    m as L,
    p as R,
    y as he
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    o as z,
    t as ge
} from "./8c1c50db-ktkk636k7ez3jino.js";
import {
    n as B,
    r as V,
    t as _e
} from "./02df22f1-fh6jqowc1mly95ls.js";
import {
    n as H,
    t as ve
} from "./dee3edb9-gijxkuall6khqgp7.js";
import {
    r as U,
    t as ye
} from "./5be378a2-x198uzma2jd4ox7y.js";
import {
    n as W,
    t as be
} from "./2d4fbc67-ku5iypm421zqz4uz.js";
import {
    n as G,
    t as K
} from "./c157dfba-nzekifpx88e4vmrx.js";

function q(e) {
    "use forget";
    let t = (0, J.c)(66),
        {
            children: a
        } = e,
        o = (0, Y.use)(re),
        s;
    t[0] === o ? s = t[1] : (s = r(o), t[0] = o, t[1] = s);
    let c = s,
        l;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = te(), t[2] = l) : l = t[2];
    let u = l,
        d = ee(xe),
        {
            pathname: f,
            search: m
        } = ie(),
        h = /(?:^|\/)library(?:\/|$)/.test(f) ? `library` : /(?:^|\/)sites(?:\/|$)/.test(f) ? `sites` : `other`,
        g = h === `library`,
        _;
    t[3] === m ? _ = t[4] : (_ = ce(new URLSearchParams(m)), t[3] = m, t[4] = _);
    let v = _,
        y = d?.desktopBreadcrumbs,
        b;
    t[5] !== f || t[6] !== y || t[7] !== d ? (b = y != null || d == null && ae(oe(f).directoryId), t[5] = f, t[6] = y, t[7] = d, t[8] = b) : b = t[8];
    let S = b,
        C, w, T, E, A, j, M, N, P;
    if (t[9] !== c || t[10] !== g || t[11] !== h || t[12] !== y || t[13] !== d || t[14] !== S) {
        let e = y == null ? [] : _e(y);
        E = d?.showUploadButton !== !1;
        let n;
        t[24] === d ? n = t[25] : (n = d == null || d.titlePlaceholder != null ? void 0 : d.title ?? (0, X.jsx)(p, {
            id: `artifacts.surface.page.title`,
            defaultMessage: `Library`
        }), t[24] = d, t[25] = n), T = n, t[26] === c ? A = t[27] : (A = (0, X.jsx)(R, {
            conversation: c
        }), t[26] = c, t[27] = A), w = k, M = `recall`, N = g, t[28] === c.id ? P = t[29] : (P = u && (0, X.jsx)(k.Navbar, {
            children: (0, X.jsx)(le, {
                insetBg: (0, X.jsx)(`div`, {
                    className: `absolute inset-0 backdrop-blur-xs`
                }),
                children: (0, X.jsx)(ue, {
                    navHeader: (0, X.jsx)(pe, {}),
                    children: (0, X.jsx)(de, {
                        clientThreadId: c.id
                    })
                })
            })
        }), t[28] = c.id, t[29] = P), C = k.Header, j = S ? (0, X.jsx)(`div`, {
            "data-testid": `recall-desktop-breadcrumbs`,
            className: i(`has-[.persistent-page-header-upgrade-pill]:bg-primary hidden has-[.persistent-page-header-upgrade-pill]:sticky has-[.persistent-page-header-upgrade-pill]:top-0 has-[.persistent-page-header-upgrade-pill]:z-20 md:block`, O),
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
                            }) : null, (0, X.jsxs)(x.Root, {
                                children: [(0, X.jsx)(x.BasicTrigger, {
                                    asChild: !0,
                                    children: (0, X.jsx)(`button`, {
                                        type: `button`,
                                        "aria-label": y?.openParentFoldersLabel,
                                        className: `text-token-text-secondary hover:bg-token-bg-tertiary hover:text-token-text-primary focus-visible:ring-token-ring max-w-full min-w-0 shrink overflow-hidden rounded-lg px-2 py-1 text-start text-sm leading-5 transition-colors focus-visible:ring-2 focus-visible:outline-none`,
                                        children: Z
                                    })
                                }), (0, X.jsx)(x.Portal, {
                                    children: (0, X.jsx)(x.Content, {
                                        align: `start`,
                                        size: `medium`,
                                        className: `max-w-[min(320px,95vw)]`,
                                        children: e.hiddenItems.map(e => {
                                            let {
                                                item: t,
                                                itemIndex: n
                                            } = e;
                                            return (0, X.jsx)(x.Item, {
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
                }), u && (0, X.jsx)(F, {
                    surface: h
                })]
            })
        }) : u && d != null ? (0, X.jsx)(F, {
            surface: h,
            standalone: !0
        }) : null, t[9] = c, t[10] = g, t[11] = h, t[12] = y, t[13] = d, t[14] = S, t[15] = C, t[16] = w, t[17] = T, t[18] = E, t[19] = A, t[20] = j, t[21] = M, t[22] = N, t[23] = P
    } else C = t[15], w = t[16], T = t[17], E = t[18], A = t[19], j = t[20], M = t[21], N = t[22], P = t[23];
    let I;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, X.jsx)(n, {
        children: (0, X.jsx)(he, {})
    }), t[30] = I) : I = t[30];
    let L;
    t[31] !== d || t[32] !== T || t[33] !== v || t[34] !== E ? (L = (u || d != null) && !v && (0, X.jsx)(ve, {
        navigationButton: u ? (0, X.jsx)(me, {}) : void 0,
        title: T,
        titlePrefix: d?.titlePrefix,
        titlePlaceholder: d?.titlePlaceholder,
        rightContent: d?.rightContent ?? (d && E ? (0, X.jsx)(ne, {
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
    }), t[31] = d, t[32] = T, t[33] = v, t[34] = E, t[35] = L) : L = t[35];
    let z;
    t[36] !== C || t[37] !== L || t[38] !== j ? (z = (0, X.jsxs)(C, {
        children: [j, I, L]
    }), t[36] = C, t[37] = L, t[38] = j, t[39] = z) : z = t[39];
    let B;
    t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, X.jsx)(D, {}), t[40] = B) : B = t[40];
    let V;
    t[41] === c ? V = t[42] : (V = (0, X.jsx)(n, {
        children: (0, X.jsx)(fe, {
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
    t[47] !== V || t[48] !== H || t[49] !== U || t[50] !== W ? (G = (0, X.jsxs)(k.ContentSidebar, {
        children: [V, H, U, W]
    }), t[47] = V, t[48] = H, t[49] = U, t[50] = W, t[51] = G) : G = t[51];
    let q;
    t[52] !== w || t[53] !== a || t[54] !== z || t[55] !== G || t[56] !== M || t[57] !== N || t[58] !== P ? (q = (0, X.jsxs)(w, {
        className: M,
        enableSidePaneShell: N,
        children: [P, z, a, B, G]
    }), t[52] = w, t[53] = a, t[54] = z, t[55] = G, t[56] = M, t[57] = N, t[58] = P, t[59] = q) : q = t[59];
    let Q;
    t[60] === c ? Q = t[61] : (Q = (0, X.jsx)(se, {
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
    J = _(), a(), M(), L(), v(), s(), N(), j(), E(), u(), S(), C(), U(), P(), W(), H(), A(), z(), b(), w(), B(), y(), I(), T(), o(), d(), c(), G(), l(), Y = t(g()), h(), m(), X = f(), Z = `...`
}));
export {
    Q as n, q as t
};
//# sourceMappingURL=9302b335-oauqk6ytv95slspf.js.map