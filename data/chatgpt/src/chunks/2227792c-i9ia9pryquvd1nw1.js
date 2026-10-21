import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    P5 as n,
    Snt as r,
    X5 as i,
    Y5 as a,
    g8 as o,
    wnt as s
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as c,
    Nn as l,
    Rn as u,
    Vn as d,
    wn as f,
    zn as ee
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ahn as p,
    HNn as m,
    HNt as te,
    LHn as h,
    LNt as ne,
    RHn as g,
    VNn as re,
    WNt as _,
    X9t as v,
    Y9t as y,
    _hn as b,
    aMt as x,
    bhn as S,
    cEt as C,
    iMt as w,
    ihn as T,
    kNt as E,
    khn as ie,
    nMt as D,
    nhn as O,
    qNn as k,
    rMt as A,
    rhn as j,
    sEt as M,
    thn as N,
    vhn as P,
    yhn as F
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    Cp as I,
    Sp as ae,
    bp as L,
    xp as R
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    Ax as z,
    Mx as B
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    Lb as V
} from "./8b34dbc2-ba6wt3zxvh7jce7p.js";
import {
    a as H,
    c as oe,
    s as se
} from "./37eb5e23-c0q3i3ngcayjax20.js";
import {
    n as U,
    t as W
} from "./3b813a7d-hmrd9qtqimunl5qj.js";
import {
    i as G,
    n as K,
    r as q,
    t as ce
} from "./7b147ad5-oishrlghhz0q0of1.js";

function le({
    analyticsSession: e,
    availableActionSet: t,
    menuKind: n,
    provider: i
}) {
    e != null && r.logStructuredEvent(`ChatgptFileLibraryMenuShown`, {
        ...e,
        availableActionSet: t,
        menuKind: n,
        provider: i
    })
}

function ue(e) {
    return e != null && e !== k.UNRECOGNIZED && e !== k.CHATGPT_FILE_LIBRARY_PROVIDER_UNSPECIFIED && e !== k.CHATGPT_FILE_LIBRARY_PROVIDER_LIBRARY ? m.CHATGPT_FILE_LIBRARY_MENU_KIND_PROVIDER_MORE : m.CHATGPT_FILE_LIBRARY_MENU_KIND_PAGE_MORE
}
var de = e((() => {
        s(), V()
    })),
    J, Y, fe, pe, me, he = e((() => {
        ie(), x(), A(), S(), P(), q(), ce(), j(), N(), J = p({
            id: `library-filter`,
            icons: {
                check: {
                    normal: D,
                    small: w
                },
                eye: {
                    normal: b,
                    small: F
                },
                "pencil-sparkle": {
                    normal: K,
                    small: G
                },
                trash: {
                    normal: O,
                    small: T
                }
            }
        }), Y = J.Check, fe = J.Eye, pe = J.PencilSparkle, me = J.Trash
    }));

function ge(e) {
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

function _e(e) {
    switch (e) {
        case `uploaded`:
        case `generated`:
            return e;
        default:
            return null
    }
}

function ve(e) {
    return (0, X.jsx)(M, {
        "aria-hidden": `true`,
        className: `icon text-token-text-primary`,
        iconKey: E[e],
        variant: `monochrome`
    })
}

function ye(e) {
    let t = `icon text-token-text-primary`;
    switch (e) {
        case `uploaded`:
            return (0, X.jsx)(R, {
                "aria-hidden": `true`,
                className: t
            });
        case `generated`:
            return (0, X.jsx)(pe, {
                className: t
            });
        default:
            return (0, X.jsx)(R, {
                "aria-hidden": `true`,
                className: t
            })
    }
}

function be(e, t, n, r) {
    let i = e.getAll(t).filter(e => e !== n);
    r && i.push(n), e.delete(t);
    for (let n of i) e.append(t, n)
}

function xe(e) {
    "use forget";
    let t = (0, Ce.c)(66),
        {
            activeFilterCount: r,
            activeSourceFilters: i,
            activeCategories: o,
            multiSelect: s,
            showAllFileTypesFilter: c,
            isShowingAllFileTypes: u,
            currentDirectoryId: d,
            deletedFilesEnabled: f,
            isDeletedFilesView: p,
            showSourceFilters: m,
            showTypeFilters: ne,
            searchParams: g,
            navigateWithinLibrary: _,
            analyticsSession: y,
            menuKind: b,
            provider: x
        } = e,
        S = s !== void 0 && s,
        C = ne === void 0 || ne,
        w = ee(),
        T = (0, we.useId)(),
        E;
    t[0] !== T || t[1] !== S ? (E = () => S ? se() === T : !1, t[0] = T, t[1] = S, t[2] = E) : E = t[2];
    let ie = n(E),
        D = !S && (c || u),
        O = f && d == null,
        k = D || O,
        A;
    t[3] !== i || t[4] !== S ? (A = S ? i : i.slice(0, 1), t[3] = i, t[4] = S, t[5] = A) : A = t[5];
    let j = A,
        M;
    t[6] !== o || t[7] !== S ? (M = S ? o : o.slice(0, 1), t[6] = o, t[7] = S, t[8] = M) : M = t[8];
    let N = M,
        P = S ? ie : void 0,
        F;
    t[9] !== y || t[10] !== T || t[11] !== b || t[12] !== S || t[13] !== x ? (F = e => {
        S && oe(T, e), e && le({
            analyticsSession: y,
            availableActionSet: [re.CHATGPT_FILE_LIBRARY_MENU_ACTION_FILTER],
            menuKind: b ?? ue(x),
            provider: x
        })
    }, t[9] = y, t[10] = T, t[11] = b, t[12] = S, t[13] = x, t[14] = F) : F = t[14];
    let I;
    t[15] !== r || t[16] !== w ? (I = w.formatMessage(v.openFilters, {
        activeFilterCount: r
    }), t[15] = r, t[16] = w, t[17] = I) : I = t[17];
    let L = r > 0 ? `bg-token-bg-tertiary text-token-text-primary` : `text-token-icon-tertiary`,
        R;
    t[18] === L ? R = t[19] : (R = a(`hover:bg-token-bg-tertiary hover:text-token-text-primary relative flex size-9 shrink-0 items-center justify-center rounded-full transition-colors`, `focus-visible:ring-token-ring focus-visible:ring-2 focus-visible:outline-none`, `data-[state=open]:bg-token-bg-tertiary data-[state=open]:text-token-text-primary`, L), t[18] = L, t[19] = R);
    let z;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (z = (0, X.jsx)(ae, {
        className: `icon`,
        "aria-hidden": `true`
    }), t[20] = z) : z = t[20];
    let B;
    t[21] !== r || t[22] !== S ? (B = r > 0 ? (0, X.jsx)(`span`, {
        "aria-hidden": `true`,
        className: a(`pointer-events-none absolute -end-1 -top-1 flex h-4 min-w-6 items-center justify-center rounded-full bg-black px-2 text-[12px] leading-none font-medium text-white dark:bg-white dark:text-black`, S && W.refreshedHeaderFilterCount),
        children: r
    }) : null, t[21] = r, t[22] = S, t[23] = B) : B = t[23];
    let V;
    t[24] !== R || t[25] !== B || t[26] !== I ? (V = (0, X.jsx)(h.BasicTrigger, {
        asChild: !0,
        children: (0, X.jsxs)(`button`, {
            type: `button`,
            "aria-label": I,
            className: R,
            children: [z, B]
        })
    }), t[24] = R, t[25] = B, t[26] = I, t[27] = V) : V = t[27];
    let H;
    t[28] !== d || t[29] !== w || t[30] !== p || t[31] !== S || t[32] !== _ || t[33] !== g || t[34] !== j || t[35] !== m ? (H = m ? (0, X.jsxs)(h.Group, {
        children: [(0, X.jsx)(h.Label, {
            className: `text-token-text-tertiary ps-3 pe-4 pt-3 pb-1 text-sm`,
            children: (0, X.jsx)(l, {
                ...v.sourceFilter
            })
        }), Ee.map(e => {
            let t = (S || !p) && j.includes(e);
            return (0, X.jsx)(h.CheckboxItem, {
                checked: t,
                size: `large`,
                className: `text-token-text-primary`,
                icon: ye(e),
                label: w.formatMessage(e === `uploaded` ? v.sourceFilterUploaded : v.sourceFilterGenerated),
                trailing: t ? (0, X.jsx)(Y, {
                    className: `icon text-token-text-primary`
                }) : (0, X.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `icon`
                }),
                onCheckedChange: t => {
                    let n = new URLSearchParams(g);
                    S ? be(n, Q, e, t) : t ? n.set(Q, e) : n.delete(Q), S || n.delete($), _(d, n, !0, `source_filter`)
                }
            }, e)
        })]
    }) : null, t[28] = d, t[29] = w, t[30] = p, t[31] = S, t[32] = _, t[33] = g, t[34] = j, t[35] = m, t[36] = H) : H = t[36];
    let U;
    t[37] !== d || t[38] !== w || t[39] !== p || t[40] !== S || t[41] !== _ || t[42] !== g || t[43] !== N || t[44] !== m || t[45] !== C ? (U = C && (0, X.jsxs)(h.Group, {
        className: m ? `before:my-2` : ``,
        children: [(0, X.jsx)(h.Label, {
            className: a(`text-token-text-tertiary ps-3 pe-4 pb-1 text-sm`, m ? `pt-1` : `pt-3`),
            children: (0, X.jsx)(l, {
                ...v.fileTypeFilter
            })
        }), De.map(e => {
            let {
                value: t,
                label: n
            } = e, r = (S || !p) && N.includes(t);
            return (0, X.jsx)(h.CheckboxItem, {
                checked: r,
                size: `large`,
                className: `text-token-text-primary`,
                icon: ve(t),
                label: w.formatMessage(n),
                trailing: r ? (0, X.jsx)(Y, {
                    className: `icon text-token-text-primary`
                }) : (0, X.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `icon`
                }),
                onCheckedChange: e => {
                    let n = new URLSearchParams(g);
                    S ? be(n, `category`, t, e) : e ? n.set(`category`, t) : n.delete(`category`), n.delete(`show_all_file_types`), S || n.delete(`deleted`), _(d, n, !0, `file_type_filter`)
                }
            }, t)
        })]
    }), t[37] = d, t[38] = w, t[39] = p, t[40] = S, t[41] = _, t[42] = g, t[43] = N, t[44] = m, t[45] = C, t[46] = U) : U = t[46];
    let G;
    t[47] !== d || t[48] !== w || t[49] !== p || t[50] !== u || t[51] !== _ || t[52] !== g || t[53] !== D || t[54] !== k || t[55] !== O ? (G = k ? (0, X.jsxs)(h.Group, {
        className: `before:my-2`,
        children: [D ? (0, X.jsx)(h.CheckboxItem, {
            checked: u,
            size: `large`,
            className: `text-token-text-primary`,
            icon: (0, X.jsx)(fe, {
                className: `icon text-token-text-primary`
            }),
            label: w.formatMessage(v.showAllFileTypesFilter),
            trailing: u ? (0, X.jsx)(Y, {
                className: `icon text-token-text-primary`
            }) : (0, X.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `icon`
            }),
            onCheckedChange: e => {
                let t = new URLSearchParams(g);
                e ? (t.set(te, `true`), t.delete(Z), t.delete(`tab`)) : t.delete(te), _(d, t, !0, `none`)
            }
        }) : null, O ? (0, X.jsx)(h.CheckboxItem, {
            checked: p,
            size: `large`,
            className: `text-token-text-primary`,
            icon: (0, X.jsx)(me, {
                className: `icon text-token-text-primary`
            }),
            label: w.formatMessage(v.recentlyDeletedFilter),
            trailing: p ? (0, X.jsx)(Y, {
                className: `icon text-token-text-primary`
            }) : (0, X.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `icon`
            }),
            onCheckedChange: e => {
                let t = new URLSearchParams(g);
                e ? (t.set($, `true`), t.delete(Q), t.delete(Z), t.delete(Te)) : t.delete($), _(null, t, !1, `none`)
            }
        }) : null]
    }) : null, t[47] = d, t[48] = w, t[49] = p, t[50] = u, t[51] = _, t[52] = g, t[53] = D, t[54] = k, t[55] = O, t[56] = G) : G = t[56];
    let K;
    t[57] !== H || t[58] !== U || t[59] !== G ? (K = (0, X.jsx)(h.Portal, {
        children: (0, X.jsxs)(h.Content, {
            align: `end`,
            size: `large`,
            className: `w-[240px] max-w-[95vw]`,
            children: [H, U, G]
        })
    }), t[57] = H, t[58] = U, t[59] = G, t[60] = K) : K = t[60];
    let q;
    return t[61] !== V || t[62] !== K || t[63] !== P || t[64] !== F ? (q = (0, X.jsxs)(h.Root, {
        open: P,
        onOpenChange: F,
        children: [V, K]
    }), t[61] = V, t[62] = K, t[63] = P, t[64] = F, t[65] = q) : q = t[65], q
}

function Se(e) {
    "use forget";
    let t = (0, Ce.c)(21),
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
        be(r, e, t, !1), o(i, r, !0, n)
    }, t[0] = i, t[1] = o, t[2] = a, t[3] = c) : c = t[3];
    let l = c,
        u;
    if (t[4] !== s || t[5] !== l || t[6] !== n) {
        let e;
        t[8] !== s || t[9] !== l ? (e = e => {
            let t = s.formatMessage(e === `uploaded` ? v.sourceFilterUploaded : v.sourceFilterGenerated);
            return (0, X.jsx)(z, {
                label: t,
                onRemove: () => l(Q, e, `source_filter`),
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
            let t = De.find(t => {
                    let {
                        value: n
                    } = t;
                    return n === e
                }),
                n = t == null ? e : s.formatMessage(t.label);
            return (0, X.jsx)(z, {
                label: n,
                onRemove: () => l(Z, e, `file_type_filter`),
                ariaLabel: s.formatMessage(v.clearFilterTag, {
                    label: n
                })
            }, e)
        }, t[15] = s, t[16] = l, t[17] = e) : e = t[17], d = r.map(e), t[11] = r, t[12] = s, t[13] = l, t[14] = d
    } else d = t[14];
    let f;
    return t[18] !== u || t[19] !== d ? (f = (0, X.jsx)(`div`, {
        className: W.refreshedHeaderFilterTags,
        children: (0, X.jsxs)(`div`, {
            className: W.refreshedHeaderFilterTagsContent,
            children: [u, d]
        })
    }), t[18] = u, t[19] = d, t[20] = f) : f = t[20], f
}
var Ce, we, X, Te, Z, Q, $, Ee, De, Oe = e((() => {
    Ce = f(), g(), I(), L(), C(), he(), B(), y(), H(), _(), ne(), i(), we = t(d()), u(), o(), U(), de(), V(), X = c(), Te = `mode`, Z = `category`, Q = `source`, $ = `deleted`, Ee = [`uploaded`, `generated`], De = [{
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
    Te as a, ge as c, le as d, xe as i, _e as l, $ as n, Q as o, Se as r, Oe as s, Z as t, de as u
};
//# sourceMappingURL=2227792c-i9ia9pryquvd1nw1.js.map