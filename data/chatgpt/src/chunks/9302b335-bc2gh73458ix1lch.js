import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Ait as r,
    Fz as i,
    Iz as a,
    K5 as o,
    c7 as s,
    eE as c,
    kit as l,
    l7 as u,
    lF as ee,
    ost as d,
    q5 as te,
    sst as ne,
    vF as f
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    CNt as ie,
    EKn as b,
    GOt as ae,
    HOt as x,
    Nr as S,
    SNt as C,
    W5t as w,
    dr as T,
    ka as E,
    kr as oe,
    lr as se,
    q5t as ce,
    vUn as D,
    wKn as O,
    yUn as k
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    D as le,
    E as A,
    F as j,
    G as M,
    H as N,
    Hp as ue,
    N as de,
    O as P,
    T as F,
    U as fe,
    Up as pe,
    Wp as I,
    b as L,
    m as R,
    p as z,
    y as me
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    o as B,
    t as he
} from "./8c1c50db-htiyjay1j8cry110.js";
import {
    n as V,
    r as H,
    t as ge
} from "./02df22f1-d79c9pllv36pkuct.js";
import {
    n as U,
    t as _e
} from "./dee3edb9-nakjffi35fvg7lmj.js";
import {
    r as W,
    t as ve
} from "./5be378a2-bljf76uyx4s9pr7f.js";
import {
    n as G,
    t as ye
} from "./2d4fbc67-n3mhkj4ywucka1uz.js";
import {
    n as K,
    t as be
} from "./c157dfba-vso6wywnwy0ryh97.js";

function q(e) {
    "use forget";
    let t = (0, J.c)(66),
        {
            children: a
        } = e,
        o = (0, Y.use)(ee),
        c;
    t[0] === o ? c = t[1] : (c = ne(o), t[0] = o, t[1] = c);
    let l = c,
        u;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (u = r(), t[2] = u) : u = t[2];
    let d = u,
        f = te(xe),
        {
            pathname: p,
            search: h
        } = re(),
        g = /(?:^|\/)library(?:\/|$)/.test(p) ? `library` : /(?:^|\/)sites(?:\/|$)/.test(p) ? `sites` : `other`,
        _ = g === `library`,
        v;
    t[3] === h ? v = t[4] : (v = ie(new URLSearchParams(h)), t[3] = h, t[4] = v);
    let y = v,
        b = f?.desktopBreadcrumbs,
        x;
    t[5] !== p || t[6] !== b || t[7] !== f ? (x = b != null || f == null && ce(ae(p).directoryId), t[5] = p, t[6] = b, t[7] = f, t[8] = x) : x = t[8];
    let S = x,
        C, w, T, k, A, j, M, P, I;
    if (t[9] !== l || t[10] !== _ || t[11] !== g || t[12] !== b || t[13] !== f || t[14] !== S) {
        let e = b == null ? [] : ge(b);
        k = f?.showUploadButton !== !1;
        let n;
        t[24] === f ? n = t[25] : (n = f == null || f.titlePlaceholder != null ? void 0 : f.title ?? (0, X.jsx)(m, {
            id: `artifacts.surface.page.title`,
            defaultMessage: `Library`
        }), t[24] = f, t[25] = n), T = n, t[26] === l ? A = t[27] : (A = (0, X.jsx)(z, {
            conversation: l
        }), t[26] = l, t[27] = A), w = O, M = `recall`, P = _, t[28] === l.id ? I = t[29] : (I = d && (0, X.jsx)(O.Navbar, {
            children: (0, X.jsx)(ue, {
                insetBg: (0, X.jsx)(`div`, {
                    className: `absolute inset-0 backdrop-blur-xs`
                }),
                children: (0, X.jsx)(le, {
                    navHeader: (0, X.jsx)(fe, {}),
                    children: (0, X.jsx)(N, {
                        clientThreadId: l.id
                    })
                })
            })
        }), t[28] = l.id, t[29] = I), C = O.Header, j = S ? (0, X.jsx)(`div`, {
            "data-testid": `recall-desktop-breadcrumbs`,
            className: s(`has-[.persistent-page-header-upgrade-pill]:bg-primary hidden has-[.persistent-page-header-upgrade-pill]:sticky has-[.persistent-page-header-upgrade-pill]:top-0 has-[.persistent-page-header-upgrade-pill]:z-20 md:block`, oe),
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
                                className: s(`max-w-full min-w-0 shrink overflow-hidden rounded-lg py-1 text-start text-sm leading-5 transition-colors`, i === 0 ? `ms-1 px-1.5` : `px-1.5`, a ? `text-token-text-primary cursor-default` : `text-token-text-secondary hover:bg-token-bg-tertiary hover:text-token-text-primary`),
                                onClick: () => {
                                    b?.onSelect(r.id, i)
                                },
                                children: (0, X.jsx)(he, {
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
        }) : null, t[9] = l, t[10] = _, t[11] = g, t[12] = b, t[13] = f, t[14] = S, t[15] = C, t[16] = w, t[17] = T, t[18] = k, t[19] = A, t[20] = j, t[21] = M, t[22] = P, t[23] = I
    } else C = t[15], w = t[16], T = t[17], k = t[18], A = t[19], j = t[20], M = t[21], P = t[22], I = t[23];
    let L;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, X.jsx)(i, {
        children: (0, X.jsx)(me, {})
    }), t[30] = L) : L = t[30];
    let R;
    t[31] !== f || t[32] !== T || t[33] !== y || t[34] !== k ? (R = (d || f != null) && !y && (0, X.jsx)(_e, {
        navigationButton: d ? (0, X.jsx)(pe, {}) : void 0,
        title: T,
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
    }), t[31] = f, t[32] = T, t[33] = y, t[34] = k, t[35] = R) : R = t[35];
    let B;
    t[36] !== C || t[37] !== R || t[38] !== j ? (B = (0, X.jsxs)(C, {
        children: [j, L, R]
    }), t[36] = C, t[37] = R, t[38] = j, t[39] = B) : B = t[39];
    let V;
    t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (V = (0, X.jsx)(E, {}), t[40] = V) : V = t[40];
    let H;
    t[41] === l ? H = t[42] : (H = (0, X.jsx)(i, {
        children: (0, X.jsx)(de, {
            conversation: l
        })
    }), t[41] = l, t[42] = H);
    let U, W, G;
    t[43] === l.id ? (U = t[44], W = t[45], G = t[46]) : (U = (0, X.jsx)(ve, {
        clientThreadId: l.id
    }), W = (0, X.jsx)(ye, {
        clientThreadId: l.id
    }), G = (0, X.jsx)(be, {
        clientThreadId: l.id
    }), t[43] = l.id, t[44] = U, t[45] = W, t[46] = G);
    let K;
    t[47] !== H || t[48] !== U || t[49] !== W || t[50] !== G ? (K = (0, X.jsxs)(O.ContentSidebar, {
        children: [H, U, W, G]
    }), t[47] = H, t[48] = U, t[49] = W, t[50] = G, t[51] = K) : K = t[51];
    let q;
    t[52] !== w || t[53] !== a || t[54] !== B || t[55] !== K || t[56] !== M || t[57] !== P || t[58] !== I ? (q = (0, X.jsxs)(w, {
        className: M,
        enableSidePaneShell: P,
        children: [I, B, a, V, K]
    }), t[52] = w, t[53] = a, t[54] = B, t[55] = K, t[56] = M, t[57] = P, t[58] = I, t[59] = q) : q = t[59];
    let Q;
    t[60] === l ? Q = t[61] : (Q = (0, X.jsx)(se, {
        conversation: l
    }), t[60] = l, t[61] = Q);
    let $;
    return t[62] !== A || t[63] !== q || t[64] !== Q ? ($ = (0, X.jsxs)(X.Fragment, {
        children: [A, q, Q]
    }), t[62] = A, t[63] = q, t[64] = Q, t[65] = $) : $ = t[65], $
}

function xe() {
    return H()
}
var J, Y, X, Z, Q = e((() => {
    J = v(), c(), M(), R(), y(), a(), I(), j(), T(), f(), S(), k(), W(), P(), G(), U(), A(), B(), w(), x(), V(), C(), L(), b(), o(), l(), d(), K(), u(), Y = t(_()), g(), h(), X = p(), Z = `...`
}));
export {
    Q as n, q as t
};
//# sourceMappingURL=9302b335-bc2gh73458ix1lch.js.map