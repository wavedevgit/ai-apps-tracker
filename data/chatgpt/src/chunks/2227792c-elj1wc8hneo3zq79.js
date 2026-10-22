import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    J5 as r,
    Lnt as i,
    l7 as a,
    u7 as o,
    znt as s
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as c,
    Nn as l,
    Rn as u,
    Vn as d,
    wn as f,
    zn as ee
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $hn as p,
    $jt as m,
    BNt as te,
    EPn as h,
    Ihn as g,
    Lhn as _,
    NNt as v,
    Qhn as y,
    Qjt as b,
    RNt as ne,
    Rhn as x,
    SUn as S,
    TNt as C,
    TPn as re,
    dgn as w,
    eMt as ie,
    egn as T,
    iEt as E,
    jPn as D,
    nen as O,
    rEt as k,
    tMt as A,
    ten as j,
    tgn as M,
    ugn as N,
    xUn as P,
    zhn as F
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Cp as I,
    Sp as ae,
    bp as L,
    xp as R
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    Ix as z,
    Px as B
} from "./c2675c8c-f8x469cgefxzeo6l.js";
import {
    Bb as V
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    a as H,
    c as oe,
    s as se
} from "./37eb5e23-hddupcdfzjtg2zzv.js";
import {
    n as U,
    t as ce
} from "./3b813a7d-hmrd9qtqimunl5qj.js";
import {
    i as W,
    n as G,
    r as K,
    t as le
} from "./7b147ad5-nqsz1cxzu1fjz5zq.js";

function ue({
    analyticsSession: e,
    availableActionSet: t,
    menuKind: n,
    provider: r
}) {
    e != null && i.logStructuredEvent(`ChatgptFileLibraryMenuShown`, {
        ...e,
        availableActionSet: t,
        menuKind: n,
        provider: r
    })
}

function de(e) {
    return e != null && e !== D.UNRECOGNIZED && e !== D.CHATGPT_FILE_LIBRARY_PROVIDER_UNSPECIFIED && e !== D.CHATGPT_FILE_LIBRARY_PROVIDER_LIBRARY ? h.CHATGPT_FILE_LIBRARY_MENU_KIND_PROVIDER_MORE : h.CHATGPT_FILE_LIBRARY_MENU_KIND_PAGE_MORE
}
var fe = e((() => {
        s(), V()
    })),
    q, J, pe, me, he, ge = e((() => {
        N(), A(), m(), M(), p(), K(), le(), x(), g(), q = w({
            id: `library-filter`,
            icons: {
                check: {
                    normal: b,
                    small: ie
                },
                eye: {
                    normal: y,
                    small: T
                },
                "pencil-sparkle": {
                    normal: G,
                    small: W
                },
                trash: {
                    normal: _,
                    small: F
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
    return (0, Y.jsx)(k, {
        "aria-hidden": `true`,
        className: `icon text-token-text-primary`,
        iconKey: C[e],
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
            activeSourceFilters: i,
            activeCategories: o,
            multiSelect: s,
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
        b = s !== void 0 && s,
        x = te === void 0 || te,
        S = ee(),
        C = (0, Te.useId)(),
        w;
    t[0] !== C || t[1] !== b ? (w = () => b ? se() === C : !1, t[0] = C, t[1] = b, t[2] = w) : w = t[2];
    let ie = r(w),
        T = !b && (c || u),
        E = f && d == null,
        D = T || E,
        k;
    t[3] !== i || t[4] !== b ? (k = b ? i : i.slice(0, 1), t[3] = i, t[4] = b, t[5] = k) : k = t[5];
    let A = k,
        j;
    t[6] !== o || t[7] !== b ? (j = b ? o : o.slice(0, 1), t[6] = o, t[7] = b, t[8] = j) : j = t[8];
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
    t[15] !== n || t[16] !== S ? (I = S.formatMessage(O.openFilters, {
        activeFilterCount: n
    }), t[15] = n, t[16] = S, t[17] = I) : I = t[17];
    let L = n > 0 ? `bg-token-bg-tertiary text-token-text-primary` : `text-token-icon-tertiary`,
        R;
    t[18] === L ? R = t[19] : (R = a(`hover:bg-token-bg-tertiary hover:text-token-text-primary relative flex size-9 shrink-0 items-center justify-center rounded-full transition-colors`, `focus-visible:ring-token-ring focus-visible:ring-2 focus-visible:outline-none`, `data-[state=open]:bg-token-bg-tertiary data-[state=open]:text-token-text-primary`, L), t[18] = L, t[19] = R);
    let z;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (z = (0, Y.jsx)(ae, {
        className: `icon`,
        "aria-hidden": `true`
    }), t[20] = z) : z = t[20];
    let B;
    t[21] !== n || t[22] !== b ? (B = n > 0 ? (0, Y.jsx)(`span`, {
        "aria-hidden": `true`,
        className: a(`pointer-events-none absolute -end-1 -top-1 flex h-4 min-w-6 items-center justify-center rounded-full bg-black px-2 text-[12px] leading-none font-medium text-white dark:bg-white dark:text-black`, b && ce.refreshedHeaderFilterCount),
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
                ...O.sourceFilter
            })
        }), De.map(e => {
            let t = (b || !p) && A.includes(e);
            return (0, Y.jsx)(P.CheckboxItem, {
                checked: t,
                size: `large`,
                className: `text-token-text-primary`,
                icon: be(e),
                label: S.formatMessage(e === `uploaded` ? O.sourceFilterUploaded : O.sourceFilterGenerated),
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
            className: a(`text-token-text-tertiary ps-3 pe-4 pb-1 text-sm`, m ? `pt-1` : `pt-3`),
            children: (0, Y.jsx)(l, {
                ...O.fileTypeFilter
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
            label: S.formatMessage(O.showAllFileTypesFilter),
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
            label: S.formatMessage(O.recentlyDeletedFilter),
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
            let t = s.formatMessage(e === `uploaded` ? O.sourceFilterUploaded : O.sourceFilterGenerated);
            return (0, Y.jsx)(B, {
                label: t,
                onRemove: () => l(Z, e, `source_filter`),
                ariaLabel: s.formatMessage(O.clearFilterTag, {
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
                ariaLabel: s.formatMessage(O.clearFilterTag, {
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
    we = f(), S(), I(), L(), E(), ge(), z(), j(), H(), te(), v(), o(), Te = t(d()), u(), n(), U(), fe(), V(), Y = c(), Ee = `mode`, X = `category`, Z = `source`, Q = `deleted`, De = [`uploaded`, `generated`], $ = [{
        value: `images`,
        label: O.typeFilterImages
    }, {
        value: `documents`,
        label: O.typeFilterDocuments
    }, {
        value: `spreadsheets`,
        label: O.typeFilterSpreadsheets
    }, {
        value: `presentations`,
        label: O.typeFilterPresentations
    }, {
        value: `pdfs`,
        label: O.typeFilterPdfs
    }]
}));
export {
    Ee as a, _e as c, ue as d, Se as i, ve as l, Q as n, Z as o, Ce as r, Oe as s, X as t, fe as u
};
//# sourceMappingURL=2227792c-elj1wc8hneo3zq79.js.map