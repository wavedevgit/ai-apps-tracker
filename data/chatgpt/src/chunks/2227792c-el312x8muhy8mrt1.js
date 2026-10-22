import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Int as n,
    Rnt as r,
    c7 as i,
    k8 as a,
    l7 as o,
    q5 as s
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as c,
    Nn as l,
    Rn as u,
    Vn as d,
    wn as f,
    zn as ee
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $9t as p,
    $jt as m,
    BNt as te,
    CPn as h,
    Fhn as g,
    Ihn as _,
    NNt as v,
    Nhn as y,
    OPn as b,
    Phn as x,
    Qhn as S,
    Qjt as C,
    RNt as ne,
    SPn as re,
    TNt as w,
    Xhn as ie,
    Yhn as T,
    Zhn as E,
    cgn as D,
    eMt as O,
    een as k,
    iEt as A,
    rEt as j,
    sgn as M,
    tMt as N,
    vUn as P,
    yUn as F
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Cp as I,
    Sp as ae,
    bp as L,
    xp as R
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    Ax as z,
    Ox as B
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    zb as V
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    a as H,
    c as oe,
    s as se
} from "./37eb5e23-gcadf7l4w4s721dd.js";
import {
    n as U,
    t as ce
} from "./3b813a7d-hmrd9qtqimunl5qj.js";
import {
    i as W,
    n as G,
    r as K,
    t as le
} from "./7b147ad5-mwl9iypv8v7yq24p.js";

function ue({
    analyticsSession: e,
    availableActionSet: t,
    menuKind: r,
    provider: i
}) {
    e != null && n.logStructuredEvent(`ChatgptFileLibraryMenuShown`, {
        ...e,
        availableActionSet: t,
        menuKind: r,
        provider: i
    })
}

function de(e) {
    return e != null && e !== b.UNRECOGNIZED && e !== b.CHATGPT_FILE_LIBRARY_PROVIDER_UNSPECIFIED && e !== b.CHATGPT_FILE_LIBRARY_PROVIDER_LIBRARY ? h.CHATGPT_FILE_LIBRARY_MENU_KIND_PROVIDER_MORE : h.CHATGPT_FILE_LIBRARY_MENU_KIND_PAGE_MORE
}
var fe = e((() => {
        r(), V()
    })),
    q, J, pe, me, he, ge = e((() => {
        M(), N(), m(), S(), ie(), K(), le(), g(), y(), q = D({
            id: `library-filter`,
            icons: {
                check: {
                    normal: C,
                    small: O
                },
                eye: {
                    normal: T,
                    small: E
                },
                "pencil-sparkle": {
                    normal: G,
                    small: W
                },
                trash: {
                    normal: x,
                    small: _
                }
            }
        }), J = q.Check, pe = q.Eye, me = q.PencilSparkle, he = q.Trash
    }));

function _e(e) {
    let t = e?.trim().toLowerCase() ?? ``;
    if (t.length === 0) return null;
    if (t === `image`) return `images`;
    if (t === `pdf`) return `pdfs`;
    switch (t) {
        case `images`:
        case `documents`:
        case `spreadsheets`:
        case `presentations`:
        case `pdfs`:
            return t;
        default:
            return null
    }
}

function ve(e) {
    switch (e) {
        case `uploaded`:
        case `generated`:
            return e;
        default:
            return null
    }
}

function ye(e) {
    return (0, Y.jsx)(j, {
        "aria-hidden": `true`,
        className: `icon text-token-text-primary`,
        iconKey: w[e],
        variant: `monochrome`
    })
}

function be(e) {
    let t = `icon text-token-text-primary`;
    switch (e) {
        case `uploaded`:
            return (0, Y.jsx)(R, {
                "aria-hidden": `true`,
                className: t
            });
        case `generated`:
            return (0, Y.jsx)(me, {
                className: t
            });
        default:
            return (0, Y.jsx)(R, {
                "aria-hidden": `true`,
                className: t
            })
    }
}

function xe(e, t, n, r) {
    let i = e.getAll(t).filter(e => e !== n);
    r && i.push(n), e.delete(t);
    for (let n of i) e.append(t, n)
}

function Se(e) {
    "use forget";
    let t = (0, we.c)(66),
        {
            activeFilterCount: n,
            activeSourceFilters: r,
            activeCategories: a,
            multiSelect: o,
            showAllFileTypesFilter: c,
            isShowingAllFileTypes: u,
            currentDirectoryId: d,
            deletedFilesEnabled: f,
            isDeletedFilesView: p,
            showSourceFilters: m,
            showTypeFilters: te,
            searchParams: h,
            navigateWithinLibrary: g,
            analyticsSession: _,
            menuKind: v,
            provider: y
        } = e,
        b = o !== void 0 && o,
        x = te === void 0 || te,
        S = ee(),
        C = (0, Te.useId)(),
        w;
    t[0] !== C || t[1] !== b ? (w = () => b ? se() === C : !1, t[0] = C, t[1] = b, t[2] = w) : w = t[2];
    let ie = s(w),
        T = !b && (c || u),
        E = f && d == null,
        D = T || E,
        O;
    t[3] !== r || t[4] !== b ? (O = b ? r : r.slice(0, 1), t[3] = r, t[4] = b, t[5] = O) : O = t[5];
    let A = O,
        j;
    t[6] !== a || t[7] !== b ? (j = b ? a : a.slice(0, 1), t[6] = a, t[7] = b, t[8] = j) : j = t[8];
    let M = j,
        N = b ? ie : void 0,
        F;
    t[9] !== _ || t[10] !== C || t[11] !== v || t[12] !== b || t[13] !== y ? (F = e => {
        b && oe(C, e), e && ue({
            analyticsSession: _,
            availableActionSet: [re.CHATGPT_FILE_LIBRARY_MENU_ACTION_FILTER],
            menuKind: v ?? de(y),
            provider: y
        })
    }, t[9] = _, t[10] = C, t[11] = v, t[12] = b, t[13] = y, t[14] = F) : F = t[14];
    let I;
    t[15] !== n || t[16] !== S ? (I = S.formatMessage(k.openFilters, {
        activeFilterCount: n
    }), t[15] = n, t[16] = S, t[17] = I) : I = t[17];
    let L = n > 0 ? `bg-token-bg-tertiary text-token-text-primary` : `text-token-icon-tertiary`,
        R;
    t[18] === L ? R = t[19] : (R = i(`hover:bg-token-bg-tertiary hover:text-token-text-primary relative flex size-9 shrink-0 items-center justify-center rounded-full transition-colors`, `focus-visible:ring-token-ring focus-visible:ring-2 focus-visible:outline-none`, `data-[state=open]:bg-token-bg-tertiary data-[state=open]:text-token-text-primary`, L), t[18] = L, t[19] = R);
    let z;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (z = (0, Y.jsx)(ae, {
        className: `icon`,
        "aria-hidden": `true`
    }), t[20] = z) : z = t[20];
    let B;
    t[21] !== n || t[22] !== b ? (B = n > 0 ? (0, Y.jsx)(`span`, {
        "aria-hidden": `true`,
        className: i(`pointer-events-none absolute -end-1 -top-1 flex h-4 min-w-6 items-center justify-center rounded-full bg-black px-2 text-[12px] leading-none font-medium text-white dark:bg-white dark:text-black`, b && ce.refreshedHeaderFilterCount),
        children: n
    }) : null, t[21] = n, t[22] = b, t[23] = B) : B = t[23];
    let V;
    t[24] !== R || t[25] !== B || t[26] !== I ? (V = (0, Y.jsx)(P.BasicTrigger, {
        asChild: !0,
        children: (0, Y.jsxs)(`button`, {
            type: `button`,
            "aria-label": I,
            className: R,
            children: [z, B]
        })
    }), t[24] = R, t[25] = B, t[26] = I, t[27] = V) : V = t[27];
    let H;
    t[28] !== d || t[29] !== S || t[30] !== p || t[31] !== b || t[32] !== g || t[33] !== h || t[34] !== A || t[35] !== m ? (H = m ? (0, Y.jsxs)(P.Group, {
        children: [(0, Y.jsx)(P.Label, {
            className: `text-token-text-tertiary ps-3 pe-4 pt-3 pb-1 text-sm`,
            children: (0, Y.jsx)(l, {
                ...k.sourceFilter
            })
        }), De.map(e => {
            let t = (b || !p) && A.includes(e);
            return (0, Y.jsx)(P.CheckboxItem, {
                checked: t,
                size: `large`,
                className: `text-token-text-primary`,
                icon: be(e),
                label: S.formatMessage(e === `uploaded` ? k.sourceFilterUploaded : k.sourceFilterGenerated),
                trailing: t ? (0, Y.jsx)(J, {
                    className: `icon text-token-text-primary`
                }) : (0, Y.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `icon`
                }),
                onCheckedChange: t => {
                    let n = new URLSearchParams(h);
                    b ? xe(n, Z, e, t) : t ? n.set(Z, e) : n.delete(Z), b || n.delete(Q), g(d, n, !0, `source_filter`)
                }
            }, e)
        })]
    }) : null, t[28] = d, t[29] = S, t[30] = p, t[31] = b, t[32] = g, t[33] = h, t[34] = A, t[35] = m, t[36] = H) : H = t[36];
    let U;
    t[37] !== d || t[38] !== S || t[39] !== p || t[40] !== b || t[41] !== g || t[42] !== h || t[43] !== M || t[44] !== m || t[45] !== x ? (U = x && (0, Y.jsxs)(P.Group, {
        className: m ? `before:my-2` : ``,
        children: [(0, Y.jsx)(P.Label, {
            className: i(`text-token-text-tertiary ps-3 pe-4 pb-1 text-sm`, m ? `pt-1` : `pt-3`),
            children: (0, Y.jsx)(l, {
                ...k.fileTypeFilter
            })
        }), $.map(e => {
            let {
                value: t,
                label: n
            } = e, r = (b || !p) && M.includes(t);
            return (0, Y.jsx)(P.CheckboxItem, {
                checked: r,
                size: `large`,
                className: `text-token-text-primary`,
                icon: ye(t),
                label: S.formatMessage(n),
                trailing: r ? (0, Y.jsx)(J, {
                    className: `icon text-token-text-primary`
                }) : (0, Y.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `icon`
                }),
                onCheckedChange: e => {
                    let n = new URLSearchParams(h);
                    b ? xe(n, `category`, t, e) : e ? n.set(`category`, t) : n.delete(`category`), n.delete(`show_all_file_types`), b || n.delete(`deleted`), g(d, n, !0, `file_type_filter`)
                }
            }, t)
        })]
    }), t[37] = d, t[38] = S, t[39] = p, t[40] = b, t[41] = g, t[42] = h, t[43] = M, t[44] = m, t[45] = x, t[46] = U) : U = t[46];
    let W;
    t[47] !== d || t[48] !== S || t[49] !== p || t[50] !== u || t[51] !== g || t[52] !== h || t[53] !== T || t[54] !== D || t[55] !== E ? (W = D ? (0, Y.jsxs)(P.Group, {
        className: `before:my-2`,
        children: [T ? (0, Y.jsx)(P.CheckboxItem, {
            checked: u,
            size: `large`,
            className: `text-token-text-primary`,
            icon: (0, Y.jsx)(pe, {
                className: `icon text-token-text-primary`
            }),
            label: S.formatMessage(k.showAllFileTypesFilter),
            trailing: u ? (0, Y.jsx)(J, {
                className: `icon text-token-text-primary`
            }) : (0, Y.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `icon`
            }),
            onCheckedChange: e => {
                let t = new URLSearchParams(h);
                e ? (t.set(ne, `true`), t.delete(X), t.delete(`tab`)) : t.delete(ne), g(d, t, !0, `none`)
            }
        }) : null, E ? (0, Y.jsx)(P.CheckboxItem, {
            checked: p,
            size: `large`,
            className: `text-token-text-primary`,
            icon: (0, Y.jsx)(he, {
                className: `icon text-token-text-primary`
            }),
            label: S.formatMessage(k.recentlyDeletedFilter),
            trailing: p ? (0, Y.jsx)(J, {
                className: `icon text-token-text-primary`
            }) : (0, Y.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `icon`
            }),
            onCheckedChange: e => {
                let t = new URLSearchParams(h);
                e ? (t.set(Q, `true`), t.delete(Z), t.delete(X), t.delete(Ee)) : t.delete(Q), g(null, t, !1, `none`)
            }
        }) : null]
    }) : null, t[47] = d, t[48] = S, t[49] = p, t[50] = u, t[51] = g, t[52] = h, t[53] = T, t[54] = D, t[55] = E, t[56] = W) : W = t[56];
    let G;
    t[57] !== H || t[58] !== U || t[59] !== W ? (G = (0, Y.jsx)(P.Portal, {
        children: (0, Y.jsxs)(P.Content, {
            align: `end`,
            size: `large`,
            className: `w-[240px] max-w-[95vw]`,
            children: [H, U, W]
        })
    }), t[57] = H, t[58] = U, t[59] = W, t[60] = G) : G = t[60];
    let K;
    return t[61] !== V || t[62] !== G || t[63] !== N || t[64] !== F ? (K = (0, Y.jsxs)(P.Root, {
        open: N,
        onOpenChange: F,
        children: [V, G]
    }), t[61] = V, t[62] = G, t[63] = N, t[64] = F, t[65] = K) : K = t[65], K
}

function Ce(e) {
    "use forget";
    let t = (0, we.c)(21),
        {
            sourceFilters: n,
            categories: r,
            currentDirectoryId: i,
            searchParams: a,
            navigateWithinLibrary: o
        } = e,
        s = ee(),
        c;
    t[0] !== i || t[1] !== o || t[2] !== a ? (c = (e, t, n) => {
        let r = new URLSearchParams(a);
        xe(r, e, t, !1), o(i, r, !0, n)
    }, t[0] = i, t[1] = o, t[2] = a, t[3] = c) : c = t[3];
    let l = c,
        u;
    if (t[4] !== s || t[5] !== l || t[6] !== n) {
        let e;
        t[8] !== s || t[9] !== l ? (e = e => {
            let t = s.formatMessage(e === `uploaded` ? k.sourceFilterUploaded : k.sourceFilterGenerated);
            return (0, Y.jsx)(B, {
                label: t,
                onRemove: () => l(Z, e, `source_filter`),
                ariaLabel: s.formatMessage(k.clearFilterTag, {
                    label: t
                })
            }, e)
        }, t[8] = s, t[9] = l, t[10] = e) : e = t[10], u = n.map(e), t[4] = s, t[5] = l, t[6] = n, t[7] = u
    } else u = t[7];
    let d;
    if (t[11] !== r || t[12] !== s || t[13] !== l) {
        let e;
        t[15] !== s || t[16] !== l ? (e = e => {
            let t = $.find(t => {
                    let {
                        value: n
                    } = t;
                    return n === e
                }),
                n = t == null ? e : s.formatMessage(t.label);
            return (0, Y.jsx)(B, {
                label: n,
                onRemove: () => l(X, e, `file_type_filter`),
                ariaLabel: s.formatMessage(k.clearFilterTag, {
                    label: n
                })
            }, e)
        }, t[15] = s, t[16] = l, t[17] = e) : e = t[17], d = r.map(e), t[11] = r, t[12] = s, t[13] = l, t[14] = d
    } else d = t[14];
    let f;
    return t[18] !== u || t[19] !== d ? (f = (0, Y.jsx)(`div`, {
        className: ce.refreshedHeaderFilterTags,
        children: (0, Y.jsxs)(`div`, {
            className: ce.refreshedHeaderFilterTagsContent,
            children: [u, d]
        })
    }), t[18] = u, t[19] = d, t[20] = f) : f = t[20], f
}
var we, Te, Y, Ee, X, Z, Q, De, $, Oe = e((() => {
    we = f(), F(), I(), L(), A(), ge(), z(), p(), H(), te(), v(), o(), Te = t(d()), u(), a(), U(), fe(), V(), Y = c(), Ee = `mode`, X = `category`, Z = `source`, Q = `deleted`, De = [`uploaded`, `generated`], $ = [{
        value: `images`,
        label: k.typeFilterImages
    }, {
        value: `documents`,
        label: k.typeFilterDocuments
    }, {
        value: `spreadsheets`,
        label: k.typeFilterSpreadsheets
    }, {
        value: `presentations`,
        label: k.typeFilterPresentations
    }, {
        value: `pdfs`,
        label: k.typeFilterPdfs
    }]
}));
export {
    Ee as a, _e as c, ue as d, Se as i, ve as l, Q as n, Z as o, Ce as r, Oe as s, X as t, fe as u
};
//# sourceMappingURL=2227792c-el312x8muhy8mrt1.js.map