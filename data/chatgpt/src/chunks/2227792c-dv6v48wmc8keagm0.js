import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    N5 as r,
    Y5 as i,
    _nt as a,
    h8 as o,
    ynt as s
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as c,
    Nn as l,
    Rn as u,
    Vn as d,
    wn as f,
    zn as ee
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $jt as p,
    $mn as m,
    Dhn as te,
    ENt as h,
    Ehn as g,
    K9t as _,
    LNn as ne,
    NHn as v,
    PHn as y,
    PNt as b,
    Qmn as x,
    RNn as S,
    UNn as C,
    VNt as w,
    _hn as T,
    aEt as re,
    eMt as E,
    ehn as D,
    ghn as O,
    hhn as k,
    iEt as A,
    mhn as j,
    nMt as M,
    q9t as N,
    tMt as P,
    thn as F,
    zNt as ie
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Cp as I,
    Sp as ae,
    bp as L,
    xp as R
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    Ax as z,
    Mx as B
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    Lb as V
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    a as H,
    c as oe,
    s as se
} from "./37eb5e23-ky34sbhy3lsrtwq5.js";
import {
    n as U,
    t as ce
} from "./3b813a7d-hmrd9qtqimunl5qj.js";
import {
    i as W,
    n as G,
    r as K,
    t as le
} from "./7b147ad5-oixlpdfbaczoma2l.js";

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
    return e != null && e !== C.UNRECOGNIZED && e !== C.CHATGPT_FILE_LIBRARY_PROVIDER_UNSPECIFIED && e !== C.CHATGPT_FILE_LIBRARY_PROVIDER_LIBRARY ? S.CHATGPT_FILE_LIBRARY_MENU_KIND_PROVIDER_MORE : S.CHATGPT_FILE_LIBRARY_MENU_KIND_PAGE_MORE
}
var fe = e((() => {
        s(), V()
    })),
    q, J, pe, me, he, ge = e((() => {
        g(), M(), E(), T(), k(), K(), le(), D(), x(), q = te({
            id: `library-filter`,
            icons: {
                check: {
                    normal: p,
                    small: P
                },
                eye: {
                    normal: j,
                    small: O
                },
                "pencil-sparkle": {
                    normal: G,
                    small: W
                },
                trash: {
                    normal: m,
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
    return (0, Y.jsx)(A, {
        "aria-hidden": `true`,
        className: `icon text-token-text-primary`,
        iconKey: h[e],
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
            activeFilterCount: i,
            activeSourceFilters: a,
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
            menuKind: y,
            provider: b
        } = e,
        x = s !== void 0 && s,
        S = te === void 0 || te,
        C = ee(),
        w = (0, Te.useId)(),
        T;
    t[0] !== w || t[1] !== x ? (T = () => x ? se() === w : !1, t[0] = w, t[1] = x, t[2] = T) : T = t[2];
    let re = r(T),
        E = !x && (c || u),
        D = f && d == null,
        O = E || D,
        k;
    t[3] !== a || t[4] !== x ? (k = x ? a : a.slice(0, 1), t[3] = a, t[4] = x, t[5] = k) : k = t[5];
    let A = k,
        j;
    t[6] !== o || t[7] !== x ? (j = x ? o : o.slice(0, 1), t[6] = o, t[7] = x, t[8] = j) : j = t[8];
    let M = j,
        P = x ? re : void 0,
        F;
    t[9] !== _ || t[10] !== w || t[11] !== y || t[12] !== x || t[13] !== b ? (F = e => {
        x && oe(w, e), e && ue({
            analyticsSession: _,
            availableActionSet: [ne.CHATGPT_FILE_LIBRARY_MENU_ACTION_FILTER],
            menuKind: y ?? de(b),
            provider: b
        })
    }, t[9] = _, t[10] = w, t[11] = y, t[12] = x, t[13] = b, t[14] = F) : F = t[14];
    let I;
    t[15] !== i || t[16] !== C ? (I = C.formatMessage(N.openFilters, {
        activeFilterCount: i
    }), t[15] = i, t[16] = C, t[17] = I) : I = t[17];
    let L = i > 0 ? `bg-token-bg-tertiary text-token-text-primary` : `text-token-icon-tertiary`,
        R;
    t[18] === L ? R = t[19] : (R = n(`hover:bg-token-bg-tertiary hover:text-token-text-primary relative flex size-9 shrink-0 items-center justify-center rounded-full transition-colors`, `focus-visible:ring-token-ring focus-visible:ring-2 focus-visible:outline-none`, `data-[state=open]:bg-token-bg-tertiary data-[state=open]:text-token-text-primary`, L), t[18] = L, t[19] = R);
    let z;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (z = (0, Y.jsx)(ae, {
        className: `icon`,
        "aria-hidden": `true`
    }), t[20] = z) : z = t[20];
    let B;
    t[21] !== i || t[22] !== x ? (B = i > 0 ? (0, Y.jsx)(`span`, {
        "aria-hidden": `true`,
        className: n(`pointer-events-none absolute -end-1 -top-1 flex h-4 min-w-6 items-center justify-center rounded-full bg-black px-2 text-[12px] leading-none font-medium text-white dark:bg-white dark:text-black`, x && ce.refreshedHeaderFilterCount),
        children: i
    }) : null, t[21] = i, t[22] = x, t[23] = B) : B = t[23];
    let V;
    t[24] !== R || t[25] !== B || t[26] !== I ? (V = (0, Y.jsx)(v.BasicTrigger, {
        asChild: !0,
        children: (0, Y.jsxs)(`button`, {
            type: `button`,
            "aria-label": I,
            className: R,
            children: [z, B]
        })
    }), t[24] = R, t[25] = B, t[26] = I, t[27] = V) : V = t[27];
    let H;
    t[28] !== d || t[29] !== C || t[30] !== p || t[31] !== x || t[32] !== g || t[33] !== h || t[34] !== A || t[35] !== m ? (H = m ? (0, Y.jsxs)(v.Group, {
        children: [(0, Y.jsx)(v.Label, {
            className: `text-token-text-tertiary ps-3 pe-4 pt-3 pb-1 text-sm`,
            children: (0, Y.jsx)(l, {
                ...N.sourceFilter
            })
        }), De.map(e => {
            let t = (x || !p) && A.includes(e);
            return (0, Y.jsx)(v.CheckboxItem, {
                checked: t,
                size: `large`,
                className: `text-token-text-primary`,
                icon: be(e),
                label: C.formatMessage(e === `uploaded` ? N.sourceFilterUploaded : N.sourceFilterGenerated),
                trailing: t ? (0, Y.jsx)(J, {
                    className: `icon text-token-text-primary`
                }) : (0, Y.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `icon`
                }),
                onCheckedChange: t => {
                    let n = new URLSearchParams(h);
                    x ? xe(n, Z, e, t) : t ? n.set(Z, e) : n.delete(Z), x || n.delete(Q), g(d, n, !0, `source_filter`)
                }
            }, e)
        })]
    }) : null, t[28] = d, t[29] = C, t[30] = p, t[31] = x, t[32] = g, t[33] = h, t[34] = A, t[35] = m, t[36] = H) : H = t[36];
    let U;
    t[37] !== d || t[38] !== C || t[39] !== p || t[40] !== x || t[41] !== g || t[42] !== h || t[43] !== M || t[44] !== m || t[45] !== S ? (U = S && (0, Y.jsxs)(v.Group, {
        className: m ? `before:my-2` : ``,
        children: [(0, Y.jsx)(v.Label, {
            className: n(`text-token-text-tertiary ps-3 pe-4 pb-1 text-sm`, m ? `pt-1` : `pt-3`),
            children: (0, Y.jsx)(l, {
                ...N.fileTypeFilter
            })
        }), $.map(e => {
            let {
                value: t,
                label: n
            } = e, r = (x || !p) && M.includes(t);
            return (0, Y.jsx)(v.CheckboxItem, {
                checked: r,
                size: `large`,
                className: `text-token-text-primary`,
                icon: ye(t),
                label: C.formatMessage(n),
                trailing: r ? (0, Y.jsx)(J, {
                    className: `icon text-token-text-primary`
                }) : (0, Y.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `icon`
                }),
                onCheckedChange: e => {
                    let n = new URLSearchParams(h);
                    x ? xe(n, `category`, t, e) : e ? n.set(`category`, t) : n.delete(`category`), n.delete(`show_all_file_types`), x || n.delete(`deleted`), g(d, n, !0, `file_type_filter`)
                }
            }, t)
        })]
    }), t[37] = d, t[38] = C, t[39] = p, t[40] = x, t[41] = g, t[42] = h, t[43] = M, t[44] = m, t[45] = S, t[46] = U) : U = t[46];
    let W;
    t[47] !== d || t[48] !== C || t[49] !== p || t[50] !== u || t[51] !== g || t[52] !== h || t[53] !== E || t[54] !== O || t[55] !== D ? (W = O ? (0, Y.jsxs)(v.Group, {
        className: `before:my-2`,
        children: [E ? (0, Y.jsx)(v.CheckboxItem, {
            checked: u,
            size: `large`,
            className: `text-token-text-primary`,
            icon: (0, Y.jsx)(pe, {
                className: `icon text-token-text-primary`
            }),
            label: C.formatMessage(N.showAllFileTypesFilter),
            trailing: u ? (0, Y.jsx)(J, {
                className: `icon text-token-text-primary`
            }) : (0, Y.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `icon`
            }),
            onCheckedChange: e => {
                let t = new URLSearchParams(h);
                e ? (t.set(ie, `true`), t.delete(X), t.delete(`tab`)) : t.delete(ie), g(d, t, !0, `none`)
            }
        }) : null, D ? (0, Y.jsx)(v.CheckboxItem, {
            checked: p,
            size: `large`,
            className: `text-token-text-primary`,
            icon: (0, Y.jsx)(he, {
                className: `icon text-token-text-primary`
            }),
            label: C.formatMessage(N.recentlyDeletedFilter),
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
    }) : null, t[47] = d, t[48] = C, t[49] = p, t[50] = u, t[51] = g, t[52] = h, t[53] = E, t[54] = O, t[55] = D, t[56] = W) : W = t[56];
    let G;
    t[57] !== H || t[58] !== U || t[59] !== W ? (G = (0, Y.jsx)(v.Portal, {
        children: (0, Y.jsxs)(v.Content, {
            align: `end`,
            size: `large`,
            className: `w-[240px] max-w-[95vw]`,
            children: [H, U, W]
        })
    }), t[57] = H, t[58] = U, t[59] = W, t[60] = G) : G = t[60];
    let K;
    return t[61] !== V || t[62] !== G || t[63] !== P || t[64] !== F ? (K = (0, Y.jsxs)(v.Root, {
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
            let t = s.formatMessage(e === `uploaded` ? N.sourceFilterUploaded : N.sourceFilterGenerated);
            return (0, Y.jsx)(z, {
                label: t,
                onRemove: () => l(Z, e, `source_filter`),
                ariaLabel: s.formatMessage(N.clearFilterTag, {
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
                ariaLabel: s.formatMessage(N.clearFilterTag, {
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
    we = f(), y(), I(), L(), re(), ge(), B(), _(), H(), w(), b(), i(), Te = t(d()), u(), o(), U(), fe(), V(), Y = c(), Ee = `mode`, X = `category`, Z = `source`, Q = `deleted`, De = [`uploaded`, `generated`], $ = [{
        value: `images`,
        label: N.typeFilterImages
    }, {
        value: `documents`,
        label: N.typeFilterDocuments
    }, {
        value: `spreadsheets`,
        label: N.typeFilterSpreadsheets
    }, {
        value: `presentations`,
        label: N.typeFilterPresentations
    }, {
        value: `pdfs`,
        label: N.typeFilterPdfs
    }]
}));
export {
    Ee as a, _e as c, ue as d, Se as i, ve as l, Q as n, Z as o, Ce as r, Oe as s, X as t, fe as u
};
//# sourceMappingURL=2227792c-dv6v48wmc8keagm0.js.map