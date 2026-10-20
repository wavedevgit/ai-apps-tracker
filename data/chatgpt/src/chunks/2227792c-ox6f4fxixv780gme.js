import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    M5 as r,
    _nt as i,
    hnt as a,
    m8 as o,
    q5 as s
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as ee,
    Hn as c,
    Pn as l,
    Tn as u,
    Vn as d,
    zn as f
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    $jt as p,
    $mn as m,
    CNt as te,
    Ehn as h,
    G9t as g,
    HNn as _,
    INt as ne,
    K9t as v,
    Qjt as y,
    Qmn as b,
    RHn as x,
    RNt as S,
    Thn as C,
    VNn as re,
    Xjt as w,
    Zjt as T,
    Zmn as E,
    ehn as ie,
    ghn as D,
    hhn as O,
    jNt as k,
    mhn as A,
    nEt as j,
    phn as M,
    qNn as N,
    tEt as P,
    zHn as F
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Cp as I,
    Sp as ae,
    bp as L,
    xp as R
} from "./30901919-jory365vq6ym5crx.js";
import {
    dS as z,
    pS as B
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    Lb as V
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    a as H,
    c as oe,
    s as se
} from "./37eb5e23-bcpe31ousmy4ztds.js";
import {
    n as U,
    t as ce
} from "./3b813a7d-hmrd9qtqimunl5qj.js";
import {
    i as W,
    n as G,
    r as K,
    t as le
} from "./7b147ad5-pdj98rm1g26wq7rz.js";

function ue({
    analyticsSession: e,
    availableActionSet: t,
    menuKind: n,
    provider: r
}) {
    e != null && a.logStructuredEvent(`ChatgptFileLibraryMenuShown`, {
        ...e,
        availableActionSet: t,
        menuKind: n,
        provider: r
    })
}

function de(e) {
    return e != null && e !== N.UNRECOGNIZED && e !== N.CHATGPT_FILE_LIBRARY_PROVIDER_UNSPECIFIED && e !== N.CHATGPT_FILE_LIBRARY_PROVIDER_LIBRARY ? _.CHATGPT_FILE_LIBRARY_MENU_KIND_PROVIDER_MORE : _.CHATGPT_FILE_LIBRARY_MENU_KIND_PAGE_MORE
}
var fe = e((() => {
        i(), V()
    })),
    q, J, pe, me, he, ge = e((() => {
        C(), p(), T(), D(), A(), K(), le(), m(), E(), q = h({
            id: `library-filter`,
            icons: {
                check: {
                    normal: w,
                    small: y
                },
                eye: {
                    normal: M,
                    small: O
                },
                "pencil-sparkle": {
                    normal: G,
                    small: W
                },
                trash: {
                    normal: b,
                    small: ie
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
    return (0, Y.jsx)(P, {
        "aria-hidden": `true`,
        className: `icon text-token-text-primary`,
        iconKey: te[e],
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
            menuKind: y,
            provider: b
        } = e,
        S = o !== void 0 && o,
        C = te === void 0 || te,
        w = ee(),
        T = (0, Te.useId)(),
        E;
    t[0] !== T || t[1] !== S ? (E = () => S ? se() === T : !1, t[0] = T, t[1] = S, t[2] = E) : E = t[2];
    let ie = r(E),
        D = !S && (c || u),
        O = f && d == null,
        k = D || O,
        A;
    t[3] !== i || t[4] !== S ? (A = S ? i : i.slice(0, 1), t[3] = i, t[4] = S, t[5] = A) : A = t[5];
    let j = A,
        M;
    t[6] !== a || t[7] !== S ? (M = S ? a : a.slice(0, 1), t[6] = a, t[7] = S, t[8] = M) : M = t[8];
    let N = M,
        P = S ? ie : void 0,
        F;
    t[9] !== _ || t[10] !== T || t[11] !== y || t[12] !== S || t[13] !== b ? (F = e => {
        S && oe(T, e), e && ue({
            analyticsSession: _,
            availableActionSet: [re.CHATGPT_FILE_LIBRARY_MENU_ACTION_FILTER],
            menuKind: y ?? de(b),
            provider: b
        })
    }, t[9] = _, t[10] = T, t[11] = y, t[12] = S, t[13] = b, t[14] = F) : F = t[14];
    let I;
    t[15] !== n || t[16] !== w ? (I = w.formatMessage(v.openFilters, {
        activeFilterCount: n
    }), t[15] = n, t[16] = w, t[17] = I) : I = t[17];
    let L = n > 0 ? `bg-token-bg-tertiary text-token-text-primary` : `text-token-icon-tertiary`,
        R;
    t[18] === L ? R = t[19] : (R = s(`hover:bg-token-bg-tertiary hover:text-token-text-primary relative flex size-9 shrink-0 items-center justify-center rounded-full transition-colors`, `focus-visible:ring-token-ring focus-visible:ring-2 focus-visible:outline-none`, `data-[state=open]:bg-token-bg-tertiary data-[state=open]:text-token-text-primary`, L), t[18] = L, t[19] = R);
    let z;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (z = (0, Y.jsx)(ae, {
        className: `icon`,
        "aria-hidden": `true`
    }), t[20] = z) : z = t[20];
    let B;
    t[21] !== n || t[22] !== S ? (B = n > 0 ? (0, Y.jsx)(`span`, {
        "aria-hidden": `true`,
        className: s(`pointer-events-none absolute -end-1 -top-1 flex h-4 min-w-6 items-center justify-center rounded-full bg-black px-2 text-[12px] leading-none font-medium text-white dark:bg-white dark:text-black`, S && ce.refreshedHeaderFilterCount),
        children: n
    }) : null, t[21] = n, t[22] = S, t[23] = B) : B = t[23];
    let V;
    t[24] !== R || t[25] !== B || t[26] !== I ? (V = (0, Y.jsx)(x.BasicTrigger, {
        asChild: !0,
        children: (0, Y.jsxs)(`button`, {
            type: `button`,
            "aria-label": I,
            className: R,
            children: [z, B]
        })
    }), t[24] = R, t[25] = B, t[26] = I, t[27] = V) : V = t[27];
    let H;
    t[28] !== d || t[29] !== w || t[30] !== p || t[31] !== S || t[32] !== g || t[33] !== h || t[34] !== j || t[35] !== m ? (H = m ? (0, Y.jsxs)(x.Group, {
        children: [(0, Y.jsx)(x.Label, {
            className: `text-token-text-tertiary ps-3 pe-4 pt-3 pb-1 text-sm`,
            children: (0, Y.jsx)(l, {
                ...v.sourceFilter
            })
        }), De.map(e => {
            let t = (S || !p) && j.includes(e);
            return (0, Y.jsx)(x.CheckboxItem, {
                checked: t,
                size: `large`,
                className: `text-token-text-primary`,
                icon: be(e),
                label: w.formatMessage(e === `uploaded` ? v.sourceFilterUploaded : v.sourceFilterGenerated),
                trailing: t ? (0, Y.jsx)(J, {
                    className: `icon text-token-text-primary`
                }) : (0, Y.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `icon`
                }),
                onCheckedChange: t => {
                    let n = new URLSearchParams(h);
                    S ? xe(n, Z, e, t) : t ? n.set(Z, e) : n.delete(Z), S || n.delete(Q), g(d, n, !0, `source_filter`)
                }
            }, e)
        })]
    }) : null, t[28] = d, t[29] = w, t[30] = p, t[31] = S, t[32] = g, t[33] = h, t[34] = j, t[35] = m, t[36] = H) : H = t[36];
    let U;
    t[37] !== d || t[38] !== w || t[39] !== p || t[40] !== S || t[41] !== g || t[42] !== h || t[43] !== N || t[44] !== m || t[45] !== C ? (U = C && (0, Y.jsxs)(x.Group, {
        className: m ? `before:my-2` : ``,
        children: [(0, Y.jsx)(x.Label, {
            className: s(`text-token-text-tertiary ps-3 pe-4 pb-1 text-sm`, m ? `pt-1` : `pt-3`),
            children: (0, Y.jsx)(l, {
                ...v.fileTypeFilter
            })
        }), $.map(e => {
            let {
                value: t,
                label: n
            } = e, r = (S || !p) && N.includes(t);
            return (0, Y.jsx)(x.CheckboxItem, {
                checked: r,
                size: `large`,
                className: `text-token-text-primary`,
                icon: ye(t),
                label: w.formatMessage(n),
                trailing: r ? (0, Y.jsx)(J, {
                    className: `icon text-token-text-primary`
                }) : (0, Y.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `icon`
                }),
                onCheckedChange: e => {
                    let n = new URLSearchParams(h);
                    S ? xe(n, `category`, t, e) : e ? n.set(`category`, t) : n.delete(`category`), n.delete(`show_all_file_types`), S || n.delete(`deleted`), g(d, n, !0, `file_type_filter`)
                }
            }, t)
        })]
    }), t[37] = d, t[38] = w, t[39] = p, t[40] = S, t[41] = g, t[42] = h, t[43] = N, t[44] = m, t[45] = C, t[46] = U) : U = t[46];
    let W;
    t[47] !== d || t[48] !== w || t[49] !== p || t[50] !== u || t[51] !== g || t[52] !== h || t[53] !== D || t[54] !== k || t[55] !== O ? (W = k ? (0, Y.jsxs)(x.Group, {
        className: `before:my-2`,
        children: [D ? (0, Y.jsx)(x.CheckboxItem, {
            checked: u,
            size: `large`,
            className: `text-token-text-primary`,
            icon: (0, Y.jsx)(pe, {
                className: `icon text-token-text-primary`
            }),
            label: w.formatMessage(v.showAllFileTypesFilter),
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
        }) : null, O ? (0, Y.jsx)(x.CheckboxItem, {
            checked: p,
            size: `large`,
            className: `text-token-text-primary`,
            icon: (0, Y.jsx)(he, {
                className: `icon text-token-text-primary`
            }),
            label: w.formatMessage(v.recentlyDeletedFilter),
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
    }) : null, t[47] = d, t[48] = w, t[49] = p, t[50] = u, t[51] = g, t[52] = h, t[53] = D, t[54] = k, t[55] = O, t[56] = W) : W = t[56];
    let G;
    t[57] !== H || t[58] !== U || t[59] !== W ? (G = (0, Y.jsx)(x.Portal, {
        children: (0, Y.jsxs)(x.Content, {
            align: `end`,
            size: `large`,
            className: `w-[240px] max-w-[95vw]`,
            children: [H, U, W]
        })
    }), t[57] = H, t[58] = U, t[59] = W, t[60] = G) : G = t[60];
    let K;
    return t[61] !== V || t[62] !== G || t[63] !== P || t[64] !== F ? (K = (0, Y.jsxs)(x.Root, {
        open: P,
        onOpenChange: F,
        children: [V, G]
    }), t[61] = V, t[62] = G, t[63] = P, t[64] = F, t[65] = K) : K = t[65], K
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
            let t = s.formatMessage(e === `uploaded` ? v.sourceFilterUploaded : v.sourceFilterGenerated);
            return (0, Y.jsx)(z, {
                label: t,
                onRemove: () => l(Z, e, `source_filter`),
                ariaLabel: s.formatMessage(v.clearFilterTag, {
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
            return (0, Y.jsx)(z, {
                label: n,
                onRemove: () => l(X, e, `file_type_filter`),
                ariaLabel: s.formatMessage(v.clearFilterTag, {
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
    we = u(), F(), I(), L(), j(), ge(), B(), g(), H(), S(), k(), n(), Te = t(c()), f(), o(), U(), fe(), V(), Y = d(), Ee = `mode`, X = `category`, Z = `source`, Q = `deleted`, De = [`uploaded`, `generated`], $ = [{
        value: `images`,
        label: v.typeFilterImages
    }, {
        value: `documents`,
        label: v.typeFilterDocuments
    }, {
        value: `spreadsheets`,
        label: v.typeFilterSpreadsheets
    }, {
        value: `presentations`,
        label: v.typeFilterPresentations
    }, {
        value: `pdfs`,
        label: v.typeFilterPdfs
    }]
}));
export {
    Ee as a, _e as c, ue as d, Se as i, ve as l, Q as n, Z as o, Ce as r, Oe as s, X as t, fe as u
};
//# sourceMappingURL=2227792c-ox6f4fxixv780gme.js.map