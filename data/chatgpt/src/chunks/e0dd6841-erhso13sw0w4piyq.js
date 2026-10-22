import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    l7 as n,
    u7 as r
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as i,
    Ln as a,
    Nn as o,
    Rn as s,
    Vn as c,
    wn as l,
    zn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    JKn as ee,
    YKn as d
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    DC as f,
    EC as p,
    Jv as te,
    Kc as m,
    Yv as h,
    qc as g
} from "./30901919-lc79rizhhepnsl3q.js";

function ne(e) {
    return !e.hidden
}

function _(e) {
    return e.sortable
}

function re(e) {
    return e.defaultSortDirection
}

function ie(e) {
    return e !== void 0
}

function ae(e) {
    return e !== void 0
}

function oe(e) {
    return e.field
}
var v, y, b, se, x, S, C, w, ce, le, T = e((() => {
    v = l(), d(), f(), g(), h(), r(), y = t(c()), s(), b = i(), se = (e, t) => Number(!!e) - Number(!!t) || (e && t ? e < t ? -1 : 1 : 0), x = (0, y.createContext)({
        selection: new Set
    }), S = e => {
        "use forget";
        let t = (0, v.c)(108),
            {
                columns: r,
                rows: i,
                onSelection: a,
                emptyMessage: s,
                className: c,
                headerCellClassName: l,
                rowKey: d,
                visibleKeys: f,
                children: h
            } = e,
            g = (0, y.useId)(),
            S;
        t[0] === r ? S = t[1] : (S = r.filter(ne), t[0] = r, t[1] = S);
        let C = S,
            w;
        t[2] === C ? w = t[3] : (w = {}, C.forEach(e => {
            w[e.field] = e
        }), t[2] = C, t[3] = w);
        let ce = w,
            T;
        if (t[4] !== d || t[5] !== i) {
            let e;
            t[7] === d ? e = t[8] : (e = e => [d(e), e], t[7] = d, t[8] = e), T = new Map(i.map(e)), t[4] = d, t[5] = i, t[6] = T
        } else T = t[6];
        let E = T,
            ue;
        t[9] === C ? ue = t[10] : (ue = C.filter(_), t[9] = C, t[10] = ue);
        let de = ue,
            fe;
        bb0: {
            let e;t[11] === C ? e = t[12] : (e = C.find(re), t[11] = C, t[12] = e);
            let n = e;
            if (!n || !n.defaultSortDirection) {
                fe = null;
                break bb0
            }
            let r;t[13] !== n.defaultSortDirection || t[14] !== n.field ? (r = {
                field: n.field,
                direction: n.defaultSortDirection
            }, t[13] = n.defaultSortDirection, t[14] = n.field, t[15] = r) : r = t[15],
            fe = r
        }
        let [D, pe] = (0, y.useState)(fe), me;
        t[16] === de ? me = t[17] : (me = e => {
            let t = de.find(t => t.field === e);
            t && pe(n => !n || n.field !== e ? {
                field: e,
                direction: t.defaultSortDirection ?? `asc`
            } : {
                field: e,
                direction: n.direction === `asc` ? `desc` : `asc`
            })
        }, t[16] = de, t[17] = me);
        let O = me,
            he;
        bb1: {
            if (!D) {
                he = i;
                break bb1
            }
            let e = ce[D.field];
            if (!e) {
                he = i;
                break bb1
            }
            let n;
            if (t[18] !== e || t[19] !== i || t[20] !== D.direction) {
                let r;
                t[22] !== e || t[23] !== D.direction ? (r = (t, n) => {
                    let r = D.direction === `asc` ? 1 : -1;
                    return se(e.value?.(t), e.value?.(n)) * r
                }, t[22] = e, t[23] = D.direction, t[24] = r) : r = t[24], n = [...i].sort(r), t[18] = e, t[19] = i, t[20] = D.direction, t[21] = n
            } else n = t[21];he = n
        }
        let ge = he,
            _e;
        t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (_e = new Set, t[25] = _e) : _e = t[25];
        let [k, ve] = (0, y.useState)(_e), A;
        t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (A = {}, t[26] = A) : A = t[26];
        let [j, ye] = (0, y.useState)(A), be = (0, y.useRef)(null), M;
        t[27] !== E || t[28] !== a ? (M = e => {
            a && ve(t => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), a(Array.from(n).map(e => E.get(e)).filter(ie)), n
            })
        }, t[27] = E, t[28] = a, t[29] = M) : M = t[29];
        let xe = M,
            N;
        t[30] !== E || t[31] !== a || t[32] !== k || t[33] !== f ? (N = a && (f ?? new Set(E.keys()))?.isSubsetOf(k) && !!(f ?? E).size, t[30] = E, t[31] = a, t[32] = k, t[33] = f, t[34] = N) : N = t[34];
        let P = N,
            F;
        t[35] !== P || t[36] !== E || t[37] !== a || t[38] !== k || t[39] !== f ? (F = a && !P && !!(f ?? new Set(E.keys())).intersection(k).size, t[35] = P, t[36] = E, t[37] = a, t[38] = k, t[39] = f, t[40] = F) : F = t[40];
        let Se = F,
            I;
        t[41] !== P || t[42] !== E || t[43] !== a || t[44] !== f ? (I = () => {
            a && ve(e => {
                let t = new Set(e);
                return (f ?? E.keys()).forEach(e => {
                    P ? t.delete(e) : t.add(e)
                }), a(Array.from(t).map(e => E.get(e)).filter(ae)), t
            })
        }, t[41] = P, t[42] = E, t[43] = a, t[44] = f, t[45] = I) : I = t[45];
        let Ce = I,
            L;
        t[46] === a ? L = t[47] : (L = () => {
            ve(new Set), a?.([])
        }, t[46] = a, t[47] = L);
        let we = L,
            R;
        t[48] === j ? R = t[49] : (R = (e, t) => {
            let n = j[e] ?? t;
            if (n) return {
                width: `${n}px`,
                minWidth: `${n}px`
            }
        }, t[48] = j, t[49] = R);
        let z = R,
            B;
        t[50] === j ? B = t[51] : (B = Object.keys(j), t[50] = j, t[51] = B);
        let Te = B.length,
            [V, Ee] = (0, y.useState)(!1),
            H;
        t[52] === Te ? H = t[53] : (H = e => t => {
            if (typeof window > `u`) return;
            let n = t.currentTarget;
            t.preventDefault(), t.stopPropagation();
            let r = n.closest(`th`),
                i = r?.closest(`table`);
            if (!r || !i) return;
            if (Te === 0) {
                let e = be.current;
                if (!e) return;
                let t = e.querySelectorAll(`th[data-field]`);
                if (t.length === 0) return;
                ye(e => {
                    let n = {
                        ...e
                    };
                    return t.forEach(e => {
                        let t = e.dataset.field;
                        !t || n[t] || (n[t] = Math.round(e.getBoundingClientRect().width))
                    }), n
                })
            }
            let a = r.getBoundingClientRect().width,
                o = i?.parentElement ?? i,
                s = i?.getBoundingClientRect().width,
                c = window.getComputedStyle(o),
                l = o.clientWidth - parseFloat(c.paddingLeft) - parseFloat(c.paddingRight),
                u = r.nextElementSibling,
                ee = u instanceof HTMLTableCellElement ? u : null,
                d = ee?.dataset.field,
                f = ee?.getBoundingClientRect().width,
                p = t.clientX,
                te = a,
                m = document.body.style,
                h = m.cursor,
                g = m.userSelect;
            m.cursor = `col-resize`, m.userSelect = `none`, Ee(!0);
            let ne = t => {
                    let n = r.getBoundingClientRect().width,
                        i = Math.round(a + t.clientX - p);
                    if (n > te && n > i) return;
                    te = i;
                    let o = s + i - a,
                        c = o < l && f ? Math.round(f + (l - o)) : f;
                    ye(t => {
                        let n = t[e],
                            r = d == null ? void 0 : t[d];
                        if (n === i && r === c) return t;
                        let a = {
                            ...t,
                            [e]: i
                        };
                        return d && c != null && (a[d] = c), a
                    })
                },
                _ = () => {
                    document.removeEventListener(`pointermove`, ne), document.removeEventListener(`pointerup`, _), document.removeEventListener(`pointercancel`, _), m.cursor = h, m.userSelect = g, Ee(!1)
                };
            document.addEventListener(`pointermove`, ne), document.addEventListener(`pointerup`, _), document.addEventListener(`pointercancel`, _)
        }, t[52] = Te, t[53] = H);
        let U = H,
            W = u(),
            De = a ? xe : void 0,
            Oe = a ? we : void 0,
            G;
        t[54] === C ? G = t[55] : (G = new Set(C.map(oe)), t[54] = C, t[55] = G);
        let K;
        t[56] !== k || t[57] !== De || t[58] !== Oe || t[59] !== G ? (K = {
            select: De,
            clearSelection: Oe,
            selection: k,
            visibleColumns: G
        }, t[56] = k, t[57] = De, t[58] = Oe, t[59] = G, t[60] = K) : K = t[60];
        let ke = a && `lg:-ms-8`,
            q;
        t[61] !== c || t[62] !== ke ? (q = n(`relative min-w-full table-fixed border-separate border-spacing-0`, ke, c), t[61] = c, t[62] = ke, t[63] = q) : q = t[63];
        let J;
        t[64] !== P || t[65] !== l || t[66] !== g || t[67] !== E || t[68] !== a || t[69] !== Se || t[70] !== Ce || t[71] !== f ? (J = a && (0, b.jsx)(`th`, {
            className: n(`w-8 min-w-8`, l),
            children: (0, b.jsx)(`label`, {
                className: `bg-token-bg-elevated-secondary dark:bg-token-bg-elevated-primary relative -ms-4 flex cursor-pointer items-center py-2 ps-4 text-center`,
                children: (0, b.jsx)(ee, {
                    id: `${g}-select-all`,
                    checked: P,
                    onChange: Ce,
                    disabled: (f ?? E).size === 0,
                    containerClassName: `justify-center`,
                    indeterminate: Se
                })
            })
        }), t[64] = P, t[65] = l, t[66] = g, t[67] = E, t[68] = a, t[69] = Se, t[70] = Ce, t[71] = f, t[72] = J) : J = t[72];
        let Y;
        if (t[73] !== r || t[74] !== z || t[75] !== U || t[76] !== W || t[77] !== V || t[78] !== D?.direction || t[79] !== D?.field || t[80] !== O) {
            let e;
            t[82] !== z || t[83] !== U || t[84] !== W || t[85] !== V || t[86] !== D?.direction || t[87] !== D?.field || t[88] !== O ? (e = e => {
                let t = D?.field === e.field,
                    r = t ? D?.direction : void 0,
                    i = e.header ?? e.field,
                    a = e.hidden ? void 0 : z(e.field, e.width);
                return e.hidden ? (0, b.jsx)(`th`, {}, e.field) : (0, b.jsx)(`th`, {
                    className: n(`bg-token-bg-elevated-secondary dark:bg-token-bg-elevated-primary w-full text-start text-sm font-medium whitespace-nowrap select-none last:pe-0`, t && `text-token-text-secondary`),
                    "data-field": e.resizable ? e.field : void 0,
                    style: a,
                    children: (0, b.jsxs)(`div`, {
                        className: `relative`,
                        children: [e.sortable ? (0, b.jsxs)(`button`, {
                            type: `button`,
                            onClick: () => O(e.field),
                            className: `group -ring-offset-2 outline-token-border-accent relative -ms-1 me-4 inline-flex h-9 w-full items-center gap-1 rounded-none py-2 ps-1 text-start -outline-offset-[1.5px] focus:outline-[1.5px]`,
                            "aria-label": W.formatMessage(le.sortByColumn, {
                                column: typeof i == `string` ? i : e.field
                            }),
                            children: [(0, b.jsx)(`span`, {
                                children: i
                            }), (0, b.jsx)(`span`, {
                                className: `inline-flex items-center rounded p-0.5`,
                                children: r === `asc` ? (0, b.jsx)(te, {
                                    className: `h-3 w-3`
                                }) : r === `desc` ? (0, b.jsx)(p, {
                                    className: `h-3 w-3`
                                }) : (0, b.jsx)(m, {
                                    className: `h-3 w-3 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100`
                                })
                            })]
                        }) : i, e.resizable && (0, b.jsx)(`div`, {
                            className: `text-token-icon-tertiary hover:bg-token-interactive-bg-tertiary absolute end-0 top-0 flex h-full w-6 cursor-col-resize items-center justify-center rounded-sm select-none`,
                            role: `separator`,
                            "aria-orientation": `vertical`,
                            "aria-hidden": `true`,
                            onPointerDown: U(e.field),
                            children: (0, b.jsx)(`div`, {
                                className: n(`bg-token-bg-secondary h-4 w-0.5 rounded-full transition-opacity`, V ? `opacity-100` : `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`)
                            })
                        })]
                    })
                }, e.field)
            }, t[82] = z, t[83] = U, t[84] = W, t[85] = V, t[86] = D?.direction, t[87] = D?.field, t[88] = O, t[89] = e) : e = t[89], Y = r.map(e), t[73] = r, t[74] = z, t[75] = U, t[76] = W, t[77] = V, t[78] = D?.direction, t[79] = D?.field, t[80] = O, t[81] = Y
        } else Y = t[81];
        let X;
        t[90] !== J || t[91] !== Y ? (X = (0, b.jsx)(`thead`, {
            ref: be,
            className: `text-token-text-tertiary group relative w-full`,
            children: (0, b.jsxs)(`tr`, {
                className: `h-0`,
                children: [J, Y]
            })
        }), t[90] = J, t[91] = Y, t[92] = X) : X = t[92];
        let Z;
        t[93] !== h || t[94] !== s || t[95] !== E || t[96] !== ge || t[97] !== f ? (Z = (f ?? E).size === 0 ? (0, b.jsx)(`tr`, {
            children: (0, b.jsx)(`td`, {
                colSpan: 9999,
                className: `border-token-border-light border-b pe-4 last:pe-0 [tr:last-child_&]:border-b-0`,
                children: (0, b.jsx)(`div`, {
                    className: `text-token-text-secondary py-6 text-center text-sm`,
                    children: s ?? (0, b.jsx)(o, {
                        ...le.noMatchingResults
                    })
                })
            })
        }) : h(ge), t[93] = h, t[94] = s, t[95] = E, t[96] = ge, t[97] = f, t[98] = Z) : Z = t[98];
        let Q;
        t[99] === Z ? Q = t[100] : (Q = (0, b.jsx)(`tbody`, {
            children: Z
        }), t[99] = Z, t[100] = Q);
        let $;
        t[101] !== q || t[102] !== X || t[103] !== Q ? ($ = (0, b.jsxs)(`table`, {
            className: q,
            children: [X, Q]
        }), t[101] = q, t[102] = X, t[103] = Q, t[104] = $) : $ = t[104];
        let Ae;
        return t[105] !== K || t[106] !== $ ? (Ae = (0, b.jsx)(x.Provider, {
            value: K,
            children: $
        }), t[105] = K, t[106] = $, t[107] = Ae) : Ae = t[107], Ae
    }, C = e => {
        "use forget";
        let t = (0, v.c)(19),
            r, i, a, o;
        t[0] === e ? (r = t[1], i = t[2], a = t[3], o = t[4]) : ({
            rowKey: o,
            children: r,
            className: i,
            ...a
        } = e, t[0] = e, t[1] = r, t[2] = i, t[3] = a, t[4] = o);
        let {
            selection: s,
            select: c
        } = (0, y.useContext)(x), l;
        t[5] !== o || t[6] !== s ? (l = s.has(o), t[5] = o, t[6] = s, t[7] = l) : l = t[7];
        let u = l,
            d;
        t[8] === i ? d = t[9] : (d = n(`group h-0`, i), t[8] = i, t[9] = d);
        let f;
        t[10] !== u || t[11] !== o || t[12] !== c ? (f = c && (0, b.jsx)(`td`, {
            className: `h-[inherit] w-12 pe-0 text-center align-middle [tr:last-child_&]:border-b-0`,
            children: (0, b.jsx)(`label`, {
                className: `flex h-full cursor-pointer items-center [tr[data-disabled=true]_&]:opacity-50`,
                children: (0, b.jsx)(ee, {
                    id: `row-${o}`,
                    checked: u,
                    onChange: () => c(o),
                    containerClassName: `justify-center`
                })
            })
        }), t[10] = u, t[11] = o, t[12] = c, t[13] = f) : f = t[13];
        let p;
        return t[14] !== r || t[15] !== a || t[16] !== d || t[17] !== f ? (p = (0, b.jsxs)(`tr`, {
            className: d,
            ...a,
            children: [f, r]
        }), t[14] = r, t[15] = a, t[16] = d, t[17] = f, t[18] = p) : p = t[18], p
    }, w = e => {
        "use forget";
        let t = (0, v.c)(14),
            r, i, a, o;
        t[0] === e ? (r = t[1], i = t[2], a = t[3], o = t[4]) : ({
            field: a,
            children: r,
            className: i,
            ...o
        } = e, t[0] = e, t[1] = r, t[2] = i, t[3] = a, t[4] = o);
        let {
            visibleColumns: s
        } = (0, y.useContext)(x);
        if (a && s && !s.has(a)) {
            let e;
            return t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, b.jsx)(`td`, {
                className: `border-token-border-light border-b`
            }), t[5] = e) : e = t[5], e
        }
        let c;
        t[6] === i ? c = t[7] : (c = n(`border-token-border-light min-w-fit shrink-0 border-b pe-4 text-start align-middle last:pe-0 [tr:last-child_&]:border-b-0`, i), t[6] = i, t[7] = c);
        let l;
        t[8] === r ? l = t[9] : (l = (0, b.jsx)(`div`, {
            className: `flex items-center [tr[data-disabled=true]_&]:opacity-50`,
            children: r
        }), t[8] = r, t[9] = l);
        let u;
        return t[10] !== o || t[11] !== c || t[12] !== l ? (u = (0, b.jsx)(`td`, {
            className: c,
            ...o,
            children: l
        }), t[10] = o, t[11] = c, t[12] = l, t[13] = u) : u = t[13], u
    }, ce = {
        Root: S,
        Row: C,
        Cell: w
    }, le = a({
        noMatchingResults: {
            id: `lo084r`,
            defaultMessage: `No matching results`
        },
        sortByColumn: {
            id: `c9gwvG`,
            defaultMessage: `Sort by {column}`
        }
    })
}));
export {
    x as n, T as r, ce as t
};
//# sourceMappingURL=e0dd6841-erhso13sw0w4piyq.js.map