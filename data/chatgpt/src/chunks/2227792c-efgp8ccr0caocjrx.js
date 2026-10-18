import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as n,
    Btt as r,
    Htt as i,
    b5 as a,
    i5 as o,
    y5 as s
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as c,
    Nn as l,
    Rn as u,
    Vn as d,
    wn as f,
    zn as ee
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $Tt as p,
    $mn as m,
    ANn as h,
    Bmn as g,
    INt as _,
    Jjt as v,
    Lmn as y,
    N9t as b,
    P9t as x,
    PNt as te,
    Rmn as S,
    THn as C,
    TNn as w,
    Xjt as T,
    Yjt as E,
    Zjt as ne,
    dhn as D,
    eEt as O,
    ehn as k,
    fhn as A,
    kNt as j,
    nhn as M,
    thn as N,
    wHn as P,
    wNn as re,
    xNt as F,
    zmn as I
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Cp as L,
    Sp as ie,
    bp as R,
    xp as z
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    iS as B,
    oS as V
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    Lb as H
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    a as U,
    c as ae,
    s as oe
} from "./37eb5e23-mgfdb26ww1qrv4u2.js";
import {
    n as W,
    t as se
} from "./3b813a7d-hmrd9qtqimunl5qj.js";
import {
    i as G,
    n as K,
    r as q,
    t as ce
} from "./7b147ad5-erok3u4a7u0s1ucq.js";

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
    return e != null && e !== h.UNRECOGNIZED && e !== h.CHATGPT_FILE_LIBRARY_PROVIDER_UNSPECIFIED && e !== h.CHATGPT_FILE_LIBRARY_PROVIDER_LIBRARY ? w.CHATGPT_FILE_LIBRARY_MENU_KIND_PROVIDER_MORE : w.CHATGPT_FILE_LIBRARY_MENU_KIND_PAGE_MORE
}
var de = e((() => {
        i(), H()
    })),
    J, Y, fe, pe, me, he = e((() => {
        D(), ne(), E(), M(), k(), q(), ce(), I(), y(), J = A({
            id: `library-filter`,
            icons: {
                check: {
                    normal: v,
                    small: T
                },
                eye: {
                    normal: m,
                    small: N
                },
                "pencil-sparkle": {
                    normal: K,
                    small: G
                },
                trash: {
                    normal: S,
                    small: g
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
    return (0, X.jsx)(p, {
        "aria-hidden": `true`,
        className: `icon text-token-text-primary`,
        iconKey: F[e],
        variant: `monochrome`
    })
}

function ye(e) {
    let t = `icon text-token-text-primary`;
    switch (e) {
        case `uploaded`:
            return (0, X.jsx)(z, {
                "aria-hidden": `true`,
                className: t
            });
        case `generated`:
            return (0, X.jsx)(pe, {
                className: t
            });
        default:
            return (0, X.jsx)(z, {
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
            activeFilterCount: n,
            activeSourceFilters: r,
            activeCategories: i,
            multiSelect: a,
            showAllFileTypesFilter: c,
            isShowingAllFileTypes: u,
            currentDirectoryId: d,
            deletedFilesEnabled: f,
            isDeletedFilesView: p,
            showSourceFilters: m,
            showTypeFilters: h,
            searchParams: g,
            navigateWithinLibrary: _,
            analyticsSession: v,
            menuKind: y,
            provider: b
        } = e,
        S = a !== void 0 && a,
        C = h === void 0 || h,
        w = ee(),
        T = (0, we.useId)(),
        E;
    t[0] !== T || t[1] !== S ? (E = () => S ? oe() === T : !1, t[0] = T, t[1] = S, t[2] = E) : E = t[2];
    let ne = o(E),
        D = !S && (c || u),
        O = f && d == null,
        k = D || O,
        A;
    t[3] !== r || t[4] !== S ? (A = S ? r : r.slice(0, 1), t[3] = r, t[4] = S, t[5] = A) : A = t[5];
    let j = A,
        M;
    t[6] !== i || t[7] !== S ? (M = S ? i : i.slice(0, 1), t[6] = i, t[7] = S, t[8] = M) : M = t[8];
    let N = M,
        F = S ? ne : void 0,
        I;
    t[9] !== v || t[10] !== T || t[11] !== y || t[12] !== S || t[13] !== b ? (I = e => {
        S && ae(T, e), e && le({
            analyticsSession: v,
            availableActionSet: [re.CHATGPT_FILE_LIBRARY_MENU_ACTION_FILTER],
            menuKind: y ?? ue(b),
            provider: b
        })
    }, t[9] = v, t[10] = T, t[11] = y, t[12] = S, t[13] = b, t[14] = I) : I = t[14];
    let L;
    t[15] !== n || t[16] !== w ? (L = w.formatMessage(x.openFilters, {
        activeFilterCount: n
    }), t[15] = n, t[16] = w, t[17] = L) : L = t[17];
    let R = n > 0 ? `bg-token-bg-tertiary text-token-text-primary` : `text-token-icon-tertiary`,
        z;
    t[18] === R ? z = t[19] : (z = s(`hover:bg-token-bg-tertiary hover:text-token-text-primary relative flex size-9 shrink-0 items-center justify-center rounded-full transition-colors`, `focus-visible:ring-token-ring focus-visible:ring-2 focus-visible:outline-none`, `data-[state=open]:bg-token-bg-tertiary data-[state=open]:text-token-text-primary`, R), t[18] = R, t[19] = z);
    let B;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, X.jsx)(ie, {
        className: `icon`,
        "aria-hidden": `true`
    }), t[20] = B) : B = t[20];
    let V;
    t[21] !== n || t[22] !== S ? (V = n > 0 ? (0, X.jsx)(`span`, {
        "aria-hidden": `true`,
        className: s(`pointer-events-none absolute -end-1 -top-1 flex h-4 min-w-6 items-center justify-center rounded-full bg-black px-2 text-[12px] leading-none font-medium text-white dark:bg-white dark:text-black`, S && se.refreshedHeaderFilterCount),
        children: n
    }) : null, t[21] = n, t[22] = S, t[23] = V) : V = t[23];
    let H;
    t[24] !== z || t[25] !== V || t[26] !== L ? (H = (0, X.jsx)(P.BasicTrigger, {
        asChild: !0,
        children: (0, X.jsxs)(`button`, {
            type: `button`,
            "aria-label": L,
            className: z,
            children: [B, V]
        })
    }), t[24] = z, t[25] = V, t[26] = L, t[27] = H) : H = t[27];
    let U;
    t[28] !== d || t[29] !== w || t[30] !== p || t[31] !== S || t[32] !== _ || t[33] !== g || t[34] !== j || t[35] !== m ? (U = m ? (0, X.jsxs)(P.Group, {
        children: [(0, X.jsx)(P.Label, {
            className: `text-token-text-tertiary ps-3 pe-4 pt-3 pb-1 text-sm`,
            children: (0, X.jsx)(l, {
                ...x.sourceFilter
            })
        }), Ee.map(e => {
            let t = (S || !p) && j.includes(e);
            return (0, X.jsx)(P.CheckboxItem, {
                checked: t,
                size: `large`,
                className: `text-token-text-primary`,
                icon: ye(e),
                label: w.formatMessage(e === `uploaded` ? x.sourceFilterUploaded : x.sourceFilterGenerated),
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
    }) : null, t[28] = d, t[29] = w, t[30] = p, t[31] = S, t[32] = _, t[33] = g, t[34] = j, t[35] = m, t[36] = U) : U = t[36];
    let W;
    t[37] !== d || t[38] !== w || t[39] !== p || t[40] !== S || t[41] !== _ || t[42] !== g || t[43] !== N || t[44] !== m || t[45] !== C ? (W = C && (0, X.jsxs)(P.Group, {
        className: m ? `before:my-2` : ``,
        children: [(0, X.jsx)(P.Label, {
            className: s(`text-token-text-tertiary ps-3 pe-4 pb-1 text-sm`, m ? `pt-1` : `pt-3`),
            children: (0, X.jsx)(l, {
                ...x.fileTypeFilter
            })
        }), De.map(e => {
            let {
                value: t,
                label: n
            } = e, r = (S || !p) && N.includes(t);
            return (0, X.jsx)(P.CheckboxItem, {
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
    }), t[37] = d, t[38] = w, t[39] = p, t[40] = S, t[41] = _, t[42] = g, t[43] = N, t[44] = m, t[45] = C, t[46] = W) : W = t[46];
    let G;
    t[47] !== d || t[48] !== w || t[49] !== p || t[50] !== u || t[51] !== _ || t[52] !== g || t[53] !== D || t[54] !== k || t[55] !== O ? (G = k ? (0, X.jsxs)(P.Group, {
        className: `before:my-2`,
        children: [D ? (0, X.jsx)(P.CheckboxItem, {
            checked: u,
            size: `large`,
            className: `text-token-text-primary`,
            icon: (0, X.jsx)(fe, {
                className: `icon text-token-text-primary`
            }),
            label: w.formatMessage(x.showAllFileTypesFilter),
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
        }) : null, O ? (0, X.jsx)(P.CheckboxItem, {
            checked: p,
            size: `large`,
            className: `text-token-text-primary`,
            icon: (0, X.jsx)(me, {
                className: `icon text-token-text-primary`
            }),
            label: w.formatMessage(x.recentlyDeletedFilter),
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
    t[57] !== U || t[58] !== W || t[59] !== G ? (K = (0, X.jsx)(P.Portal, {
        children: (0, X.jsxs)(P.Content, {
            align: `end`,
            size: `large`,
            className: `w-[240px] max-w-[95vw]`,
            children: [U, W, G]
        })
    }), t[57] = U, t[58] = W, t[59] = G, t[60] = K) : K = t[60];
    let q;
    return t[61] !== H || t[62] !== K || t[63] !== F || t[64] !== I ? (q = (0, X.jsxs)(P.Root, {
        open: F,
        onOpenChange: I,
        children: [H, K]
    }), t[61] = H, t[62] = K, t[63] = F, t[64] = I, t[65] = q) : q = t[65], q
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
            let t = s.formatMessage(e === `uploaded` ? x.sourceFilterUploaded : x.sourceFilterGenerated);
            return (0, X.jsx)(B, {
                label: t,
                onRemove: () => l(Q, e, `source_filter`),
                ariaLabel: s.formatMessage(x.clearFilterTag, {
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
            return (0, X.jsx)(B, {
                label: n,
                onRemove: () => l(Z, e, `file_type_filter`),
                ariaLabel: s.formatMessage(x.clearFilterTag, {
                    label: n
                })
            }, e)
        }, t[15] = s, t[16] = l, t[17] = e) : e = t[17], d = r.map(e), t[11] = r, t[12] = s, t[13] = l, t[14] = d
    } else d = t[14];
    let f;
    return t[18] !== u || t[19] !== d ? (f = (0, X.jsx)(`div`, {
        className: se.refreshedHeaderFilterTags,
        children: (0, X.jsxs)(`div`, {
            className: se.refreshedHeaderFilterTagsContent,
            children: [u, d]
        })
    }), t[18] = u, t[19] = d, t[20] = f) : f = t[20], f
}
var Ce, we, X, Te, Z, Q, $, Ee, De, Oe = e((() => {
    Ce = f(), C(), L(), R(), O(), he(), V(), b(), U(), _(), j(), a(), we = t(d()), u(), n(), W(), de(), H(), X = c(), Te = `mode`, Z = `category`, Q = `source`, $ = `deleted`, Ee = [`uploaded`, `generated`], De = [{
        value: `images`,
        label: x.typeFilterImages
    }, {
        value: `documents`,
        label: x.typeFilterDocuments
    }, {
        value: `spreadsheets`,
        label: x.typeFilterSpreadsheets
    }, {
        value: `presentations`,
        label: x.typeFilterPresentations
    }, {
        value: `pdfs`,
        label: x.typeFilterPdfs
    }]
}));
export {
    Te as a, ge as c, le as d, xe as i, _e as l, $ as n, Q as o, Se as r, Oe as s, Z as t, de as u
};
//# sourceMappingURL=2227792c-efgp8ccr0caocjrx.js.map