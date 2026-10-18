import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    JP as r,
    Nrt as i,
    Prt as a,
    b5 as o,
    cz as s,
    dot as ee,
    i5 as te,
    kT as ne,
    lz as c,
    r5 as l,
    uot as u,
    y5 as d,
    zP as re
} from "./4813494d-cb22y2w19zwyshmt.js";
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
    AGn as v,
    Aa as y,
    D5t as ae,
    MGn as b,
    Nr as x,
    ROt as S,
    THn as C,
    VOt as w,
    dr as T,
    ka as oe,
    kr as se,
    lr as ce,
    vNt as E,
    w5t as D,
    wHn as O,
    yNt as le
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Bp as ue,
    D as de,
    E as k,
    F as A,
    G as j,
    H as M,
    N,
    O as P,
    T as F,
    U as I,
    Vp as L,
    b as R,
    m as z,
    p as fe,
    y as pe,
    zp as me
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    o as B,
    t as he
} from "./8c1c50db-kojg6ubaoclc4wf4.js";
import {
    n as V,
    r as H,
    t as ge
} from "./02df22f1-hwozk71o4lp1b1lx.js";
import {
    n as U,
    t as _e
} from "./dee3edb9-e5vsst7kpbi6gler.js";
import {
    r as W,
    t as ve
} from "./5be378a2-l1vegm9qq2nwk6ud.js";
import {
    n as G,
    t as ye
} from "./2d4fbc67-dajgm8a8ebbuw8q0.js";
import {
    n as K,
    t as be
} from "./c157dfba-lklqdkx5otfdq0gh.js";

function q(e) {
    "use forget";
    let t = (0, J.c)(66),
        {
            children: n
        } = e,
        r = (0, Y.use)(re),
        i;
    t[0] === r ? i = t[1] : (i = ee(r), t[0] = r, t[1] = i);
    let o = i,
        c;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = a(), t[2] = c) : c = t[2];
    let l = c,
        u = te(xe),
        {
            pathname: f,
            search: p
        } = ie(),
        h = /(?:^|\/)library(?:\/|$)/.test(f) ? `library` : /(?:^|\/)sites(?:\/|$)/.test(f) ? `sites` : `other`,
        g = h === `library`,
        _;
    t[3] === p ? _ = t[4] : (_ = le(new URLSearchParams(p)), t[3] = p, t[4] = _);
    let y = _,
        b = u?.desktopBreadcrumbs,
        x;
    t[5] !== f || t[6] !== b || t[7] !== u ? (x = b != null || u == null && ae(w(f).directoryId), t[5] = f, t[6] = b, t[7] = u, t[8] = x) : x = t[8];
    let S = x,
        C, T, E, D, k, A, j, P, L;
    if (t[9] !== o || t[10] !== g || t[11] !== h || t[12] !== b || t[13] !== u || t[14] !== S) {
        let e = b == null ? [] : ge(b);
        D = u?.showUploadButton !== !1;
        let n;
        t[24] === u ? n = t[25] : (n = u == null || u.titlePlaceholder != null ? void 0 : u.title ?? (0, X.jsx)(m, {
            id: `artifacts.surface.page.title`,
            defaultMessage: `Library`
        }), t[24] = u, t[25] = n), E = n, t[26] === o ? k = t[27] : (k = (0, X.jsx)(fe, {
            conversation: o
        }), t[26] = o, t[27] = k), T = v, j = `recall`, P = g, t[28] === o.id ? L = t[29] : (L = l && (0, X.jsx)(v.Navbar, {
            children: (0, X.jsx)(me, {
                insetBg: (0, X.jsx)(`div`, {
                    className: `absolute inset-0 backdrop-blur-xs`
                }),
                children: (0, X.jsx)(de, {
                    navHeader: (0, X.jsx)(I, {}),
                    children: (0, X.jsx)(M, {
                        clientThreadId: o.id
                    })
                })
            })
        }), t[28] = o.id, t[29] = L), C = v.Header, A = S ? (0, X.jsx)(`div`, {
            "data-testid": `recall-desktop-breadcrumbs`,
            className: d(`has-[.persistent-page-header-upgrade-pill]:bg-primary hidden has-[.persistent-page-header-upgrade-pill]:sticky has-[.persistent-page-header-upgrade-pill]:top-0 has-[.persistent-page-header-upgrade-pill]:z-20 md:block`, se),
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
                            }) : null, (0, X.jsxs)(O.Root, {
                                children: [(0, X.jsx)(O.BasicTrigger, {
                                    asChild: !0,
                                    children: (0, X.jsx)(`button`, {
                                        type: `button`,
                                        "aria-label": b?.openParentFoldersLabel,
                                        className: `text-token-text-secondary hover:bg-token-bg-tertiary hover:text-token-text-primary focus-visible:ring-token-ring max-w-full min-w-0 shrink overflow-hidden rounded-lg px-2 py-1 text-start text-sm leading-5 transition-colors focus-visible:ring-2 focus-visible:outline-none`,
                                        children: Z
                                    })
                                }), (0, X.jsx)(O.Portal, {
                                    children: (0, X.jsx)(O.Content, {
                                        align: `start`,
                                        size: `medium`,
                                        className: `max-w-[min(320px,95vw)]`,
                                        children: e.hiddenItems.map(e => {
                                            let {
                                                item: t,
                                                itemIndex: n
                                            } = e;
                                            return (0, X.jsx)(O.Item, {
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
                                className: d(`max-w-full min-w-0 shrink overflow-hidden rounded-lg py-1 text-start text-sm leading-5 transition-colors`, i === 0 ? `ms-1 px-1.5` : `px-1.5`, a ? `text-token-text-primary cursor-default` : `text-token-text-secondary hover:bg-token-bg-tertiary hover:text-token-text-primary`),
                                onClick: () => {
                                    b?.onSelect(r.id, i)
                                },
                                children: (0, X.jsx)(he, {
                                    fileName: r.name
                                })
                            })]
                        }, `${r.id??`root`}-${i}`)
                    })
                }), l && (0, X.jsx)(F, {
                    surface: h
                })]
            })
        }) : l && u != null ? (0, X.jsx)(F, {
            surface: h,
            standalone: !0
        }) : null, t[9] = o, t[10] = g, t[11] = h, t[12] = b, t[13] = u, t[14] = S, t[15] = C, t[16] = T, t[17] = E, t[18] = D, t[19] = k, t[20] = A, t[21] = j, t[22] = P, t[23] = L
    } else C = t[15], T = t[16], E = t[17], D = t[18], k = t[19], A = t[20], j = t[21], P = t[22], L = t[23];
    let R;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, X.jsx)(s, {
        children: (0, X.jsx)(pe, {})
    }), t[30] = R) : R = t[30];
    let z;
    t[31] !== u || t[32] !== E || t[33] !== y || t[34] !== D ? (z = (l || u != null) && !y && (0, X.jsx)(_e, {
        navigationButton: l ? (0, X.jsx)(ue, {}) : void 0,
        title: E,
        titlePrefix: u?.titlePrefix,
        titlePlaceholder: u?.titlePlaceholder,
        rightContent: u?.rightContent ?? (u && D ? (0, X.jsx)(ne, {
            size: `medium`,
            "aria-disabled": u.uploadDisabled,
            onClick: e => {
                if (u.uploadDisabled) {
                    e.preventDefault();
                    return
                }
                u.onUpload()
            },
            children: (0, X.jsx)(m, {
                id: `artifacts.surface.upload_files`,
                defaultMessage: `Upload`
            })
        }) : void 0)
    }), t[31] = u, t[32] = E, t[33] = y, t[34] = D, t[35] = z) : z = t[35];
    let B;
    t[36] !== C || t[37] !== z || t[38] !== A ? (B = (0, X.jsxs)(C, {
        children: [A, R, z]
    }), t[36] = C, t[37] = z, t[38] = A, t[39] = B) : B = t[39];
    let V;
    t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (V = (0, X.jsx)(oe, {}), t[40] = V) : V = t[40];
    let H;
    t[41] === o ? H = t[42] : (H = (0, X.jsx)(s, {
        children: (0, X.jsx)(N, {
            conversation: o
        })
    }), t[41] = o, t[42] = H);
    let U, W, G;
    t[43] === o.id ? (U = t[44], W = t[45], G = t[46]) : (U = (0, X.jsx)(ve, {
        clientThreadId: o.id
    }), W = (0, X.jsx)(ye, {
        clientThreadId: o.id
    }), G = (0, X.jsx)(be, {
        clientThreadId: o.id
    }), t[43] = o.id, t[44] = U, t[45] = W, t[46] = G);
    let K;
    t[47] !== H || t[48] !== U || t[49] !== W || t[50] !== G ? (K = (0, X.jsxs)(v.ContentSidebar, {
        children: [H, U, W, G]
    }), t[47] = H, t[48] = U, t[49] = W, t[50] = G, t[51] = K) : K = t[51];
    let q;
    t[52] !== T || t[53] !== n || t[54] !== B || t[55] !== K || t[56] !== j || t[57] !== P || t[58] !== L ? (q = (0, X.jsxs)(T, {
        className: j,
        enableSidePaneShell: P,
        children: [L, B, n, V, K]
    }), t[52] = T, t[53] = n, t[54] = B, t[55] = K, t[56] = j, t[57] = P, t[58] = L, t[59] = q) : q = t[59];
    let Q;
    t[60] === o ? Q = t[61] : (Q = (0, X.jsx)(ce, {
        conversation: o
    }), t[60] = o, t[61] = Q);
    let $;
    return t[62] !== k || t[63] !== q || t[64] !== Q ? ($ = (0, X.jsxs)(X.Fragment, {
        children: [k, q, Q]
    }), t[62] = k, t[63] = q, t[64] = Q, t[65] = $) : $ = t[65], $
}

function xe() {
    return H()
}
var J, Y, X, Z, Q = e((() => {
    J = _(), n(), j(), z(), y(), c(), L(), A(), T(), r(), x(), C(), W(), P(), G(), U(), k(), B(), D(), S(), V(), E(), R(), b(), l(), i(), u(), K(), o(), Y = t(g()), h(), f(), X = p(), Z = `...`
}));
export {
    Q as n, q as t
};
//# sourceMappingURL=9302b335-mgxovmvaj6t7rcdg.js.map