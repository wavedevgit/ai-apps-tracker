import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c7 as n,
    l7 as r
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    DKn as d,
    EKn as f
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    DC as p,
    EC as m,
    Jv as ee,
    Kc as h,
    Yv as g,
    qc as _
} from "./30901919-r9pahacmzqudnt4f.js";

function te(e) {
    return !e.hidden
}

function v(e) {
    return e.sortable
}

function ne(e) {
    return e.defaultSortDirection
}

function re(e) {
    return e !== void 0
}

function ie(e) {
    return e !== void 0
}

function ae(e) {
    return e.field
}
var y, b, x, oe, S, C, w, T, se, ce, E = e((() => {
    y = l(), d(), p(), _(), g(), r(), b = t(c()), s(), x = i(), oe = (e, t) => Number(!!e) - Number(!!t) || (e && t ? e < t ? -1 : 1 : 0), S = (0, b.createContext)({
        selection: new Set
    }), C = e => {
        "use forget";
        let t = (0, y.c)(108),
            {
                columns: r,
                rows: i,
                onSelection: a,
                emptyMessage: s,
                className: c,
                headerCellClassName: l,
                rowKey: d,
                visibleKeys: p,
                children: g
            } = e,
            _ = (0, b.useId)(),
            C;
        t[0] === r ? C = t[1] : (C = r.filter(te), t[0] = r, t[1] = C);
        let w = C,
            T;
        t[2] === w ? T = t[3] : (T = {}, w.forEach(e => {
            T[e.field] = e
        }), t[2] = w, t[3] = T);
        let se = T,
            E;
        if (t[4] !== d || t[5] !== i) {
            let e;
            t[7] === d ? e = t[8] : (e = e => [d(e), e], t[7] = d, t[8] = e), E = new Map(i.map(e)), t[4] = d, t[5] = i, t[6] = E
        } else E = t[6];
        let D = E,
            le;
        t[9] === w ? le = t[10] : (le = w.filter(v), t[9] = w, t[10] = le);
        let ue = le,
            de;
        bb0: {
            let e;t[11] === w ? e = t[12] : (e = w.find(ne), t[11] = w, t[12] = e);
            let n = e;
            if (!n || !n.defaultSortDirection) {
                de = null;
                break bb0
            }
            let r;t[13] !== n.defaultSortDirection || t[14] !== n.field ? (r = {
                field: n.field,
                direction: n.defaultSortDirection
            }, t[13] = n.defaultSortDirection, t[14] = n.field, t[15] = r) : r = t[15],
            de = r
        }
        let [O, fe] = (0, b.useState)(de), pe;
        t[16] === ue ? pe = t[17] : (pe = e => {
            let t = ue.find(t => t.field === e);
            t && fe(n => !n || n.field !== e ? {
                field: e,
                direction: t.defaultSortDirection ?? `asc`
            } : {
                field: e,
                direction: n.direction === `asc` ? `desc` : `asc`
            })
        }, t[16] = ue, t[17] = pe);
        let k = pe,
            me;
        bb1: {
            if (!O) {
                me = i;
                break bb1
            }
            let e = se[O.field];
            if (!e) {
                me = i;
                break bb1
            }
            let n;
            if (t[18] !== e || t[19] !== i || t[20] !== O.direction) {
                let r;
                t[22] !== e || t[23] !== O.direction ? (r = (t, n) => {
                    let r = O.direction === `asc` ? 1 : -1;
                    return oe(e.value?.(t), e.value?.(n)) * r
                }, t[22] = e, t[23] = O.direction, t[24] = r) : r = t[24], n = [...i].sort(r), t[18] = e, t[19] = i, t[20] = O.direction, t[21] = n
            } else n = t[21];me = n
        }
        let he = me,
            ge;
        t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (ge = new Set, t[25] = ge) : ge = t[25];
        let [A, _e] = (0, b.useState)(ge), ve;
        t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (ve = {}, t[26] = ve) : ve = t[26];
        let [j, ye] = (0, b.useState)(ve), be = (0, b.useRef)(null), M;
        t[27] !== D || t[28] !== a ? (M = e => {
            a && _e(t => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), a(Array.from(n).map(e => D.get(e)).filter(re)), n
            })
        }, t[27] = D, t[28] = a, t[29] = M) : M = t[29];
        let xe = M,
            N;
        t[30] !== D || t[31] !== a || t[32] !== A || t[33] !== p ? (N = a && (p ?? new Set(D.keys()))?.isSubsetOf(A) && !!(p ?? D).size, t[30] = D, t[31] = a, t[32] = A, t[33] = p, t[34] = N) : N = t[34];
        let P = N,
            F;
        t[35] !== P || t[36] !== D || t[37] !== a || t[38] !== A || t[39] !== p ? (F = a && !P && !!(p ?? new Set(D.keys())).intersection(A).size, t[35] = P, t[36] = D, t[37] = a, t[38] = A, t[39] = p, t[40] = F) : F = t[40];
        let Se = F,
            I;
        t[41] !== P || t[42] !== D || t[43] !== a || t[44] !== p ? (I = () => {
            a && _e(e => {
                let t = new Set(e);
                return (p ?? D.keys()).forEach(e => {
                    P ? t.delete(e) : t.add(e)
                }), a(Array.from(t).map(e => D.get(e)).filter(ie)), t
            })
        }, t[41] = P, t[42] = D, t[43] = a, t[44] = p, t[45] = I) : I = t[45];
        let Ce = I,
            L;
        t[46] === a ? L = t[47] : (L = () => {
            _e(new Set), a?.([])
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
            [V, Ee] = (0, b.useState)(!1),
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
                d = u instanceof HTMLTableCellElement ? u : null,
                f = d?.dataset.field,
                p = d?.getBoundingClientRect().width,
                m = t.clientX,
                ee = a,
                h = document.body.style,
                g = h.cursor,
                _ = h.userSelect;
            h.cursor = `col-resize`, h.userSelect = `none`, Ee(!0);
            let te = t => {
                    let n = r.getBoundingClientRect().width,
                        i = Math.round(a + t.clientX - m);
                    if (n > ee && n > i) return;
                    ee = i;
                    let o = s + i - a,
                        c = o < l && p ? Math.round(p + (l - o)) : p;
                    ye(t => {
                        let n = t[e],
                            r = f == null ? void 0 : t[f];
                        if (n === i && r === c) return t;
                        let a = {
                            ...t,
                            [e]: i
                        };
                        return f && c != null && (a[f] = c), a
                    })
                },
                v = () => {
                    document.removeEventListener(`pointermove`, te), document.removeEventListener(`pointerup`, v), document.removeEventListener(`pointercancel`, v), h.cursor = g, h.userSelect = _, Ee(!1)
                };
            document.addEventListener(`pointermove`, te), document.addEventListener(`pointerup`, v), document.addEventListener(`pointercancel`, v)
        }, t[52] = Te, t[53] = H);
        let U = H,
            W = u(),
            De = a ? xe : void 0,
            Oe = a ? we : void 0,
            G;
        t[54] === w ? G = t[55] : (G = new Set(w.map(ae)), t[54] = w, t[55] = G);
        let K;
        t[56] !== A || t[57] !== De || t[58] !== Oe || t[59] !== G ? (K = {
            select: De,
            clearSelection: Oe,
            selection: A,
            visibleColumns: G
        }, t[56] = A, t[57] = De, t[58] = Oe, t[59] = G, t[60] = K) : K = t[60];
        let ke = a && `lg:-ms-8`,
            q;
        t[61] !== c || t[62] !== ke ? (q = n(`relative min-w-full table-fixed border-separate border-spacing-0`, ke, c), t[61] = c, t[62] = ke, t[63] = q) : q = t[63];
        let J;
        t[64] !== P || t[65] !== l || t[66] !== _ || t[67] !== D || t[68] !== a || t[69] !== Se || t[70] !== Ce || t[71] !== p ? (J = a && (0, x.jsx)(`th`, {
            className: n(`w-8 min-w-8`, l),
            children: (0, x.jsx)(`label`, {
                className: `bg-token-bg-elevated-secondary dark:bg-token-bg-elevated-primary relative -ms-4 flex cursor-pointer items-center py-2 ps-4 text-center`,
                children: (0, x.jsx)(f, {
                    id: `${_}-select-all`,
                    checked: P,
                    onChange: Ce,
                    disabled: (p ?? D).size === 0,
                    containerClassName: `justify-center`,
                    indeterminate: Se
                })
            })
        }), t[64] = P, t[65] = l, t[66] = _, t[67] = D, t[68] = a, t[69] = Se, t[70] = Ce, t[71] = p, t[72] = J) : J = t[72];
        let Y;
        if (t[73] !== r || t[74] !== z || t[75] !== U || t[76] !== W || t[77] !== V || t[78] !== O?.direction || t[79] !== O?.field || t[80] !== k) {
            let e;
            t[82] !== z || t[83] !== U || t[84] !== W || t[85] !== V || t[86] !== O?.direction || t[87] !== O?.field || t[88] !== k ? (e = e => {
                let t = O?.field === e.field,
                    r = t ? O?.direction : void 0,
                    i = e.header ?? e.field,
                    a = e.hidden ? void 0 : z(e.field, e.width);
                return e.hidden ? (0, x.jsx)(`th`, {}, e.field) : (0, x.jsx)(`th`, {
                    className: n(`bg-token-bg-elevated-secondary dark:bg-token-bg-elevated-primary w-full text-start text-sm font-medium whitespace-nowrap select-none last:pe-0`, t && `text-token-text-secondary`),
                    "data-field": e.resizable ? e.field : void 0,
                    style: a,
                    children: (0, x.jsxs)(`div`, {
                        className: `relative`,
                        children: [e.sortable ? (0, x.jsxs)(`button`, {
                            type: `button`,
                            onClick: () => k(e.field),
                            className: `group -ring-offset-2 outline-token-border-accent relative -ms-1 me-4 inline-flex h-9 w-full items-center gap-1 rounded-none py-2 ps-1 text-start -outline-offset-[1.5px] focus:outline-[1.5px]`,
                            "aria-label": W.formatMessage(ce.sortByColumn, {
                                column: typeof i == `string` ? i : e.field
                            }),
                            children: [(0, x.jsx)(`span`, {
                                children: i
                            }), (0, x.jsx)(`span`, {
                                className: `inline-flex items-center rounded p-0.5`,
                                children: r === `asc` ? (0, x.jsx)(ee, {
                                    className: `h-3 w-3`
                                }) : r === `desc` ? (0, x.jsx)(m, {
                                    className: `h-3 w-3`
                                }) : (0, x.jsx)(h, {
                                    className: `h-3 w-3 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100`
                                })
                            })]
                        }) : i, e.resizable && (0, x.jsx)(`div`, {
                            className: `text-token-icon-tertiary hover:bg-token-interactive-bg-tertiary absolute end-0 top-0 flex h-full w-6 cursor-col-resize items-center justify-center rounded-sm select-none`,
                            role: `separator`,
                            "aria-orientation": `vertical`,
                            "aria-hidden": `true`,
                            onPointerDown: U(e.field),
                            children: (0, x.jsx)(`div`, {
                                className: n(`bg-token-bg-secondary h-4 w-0.5 rounded-full transition-opacity`, V ? `opacity-100` : `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`)
                            })
                        })]
                    })
                }, e.field)
            }, t[82] = z, t[83] = U, t[84] = W, t[85] = V, t[86] = O?.direction, t[87] = O?.field, t[88] = k, t[89] = e) : e = t[89], Y = r.map(e), t[73] = r, t[74] = z, t[75] = U, t[76] = W, t[77] = V, t[78] = O?.direction, t[79] = O?.field, t[80] = k, t[81] = Y
        } else Y = t[81];
        let X;
        t[90] !== J || t[91] !== Y ? (X = (0, x.jsx)(`thead`, {
            ref: be,
            className: `text-token-text-tertiary group relative w-full`,
            children: (0, x.jsxs)(`tr`, {
                className: `h-0`,
                children: [J, Y]
            })
        }), t[90] = J, t[91] = Y, t[92] = X) : X = t[92];
        let Z;
        t[93] !== g || t[94] !== s || t[95] !== D || t[96] !== he || t[97] !== p ? (Z = (p ?? D).size === 0 ? (0, x.jsx)(`tr`, {
            children: (0, x.jsx)(`td`, {
                colSpan: 9999,
                className: `border-token-border-light border-b pe-4 last:pe-0 [tr:last-child_&]:border-b-0`,
                children: (0, x.jsx)(`div`, {
                    className: `text-token-text-secondary py-6 text-center text-sm`,
                    children: s ?? (0, x.jsx)(o, {
                        ...ce.noMatchingResults
                    })
                })
            })
        }) : g(he), t[93] = g, t[94] = s, t[95] = D, t[96] = he, t[97] = p, t[98] = Z) : Z = t[98];
        let Q;
        t[99] === Z ? Q = t[100] : (Q = (0, x.jsx)(`tbody`, {
            children: Z
        }), t[99] = Z, t[100] = Q);
        let $;
        t[101] !== q || t[102] !== X || t[103] !== Q ? ($ = (0, x.jsxs)(`table`, {
            className: q,
            children: [X, Q]
        }), t[101] = q, t[102] = X, t[103] = Q, t[104] = $) : $ = t[104];
        let Ae;
        return t[105] !== K || t[106] !== $ ? (Ae = (0, x.jsx)(S.Provider, {
            value: K,
            children: $
        }), t[105] = K, t[106] = $, t[107] = Ae) : Ae = t[107], Ae
    }, w = e => {
        "use forget";
        let t = (0, y.c)(19),
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
        } = (0, b.useContext)(S), l;
        t[5] !== o || t[6] !== s ? (l = s.has(o), t[5] = o, t[6] = s, t[7] = l) : l = t[7];
        let u = l,
            d;
        t[8] === i ? d = t[9] : (d = n(`group h-0`, i), t[8] = i, t[9] = d);
        let p;
        t[10] !== u || t[11] !== o || t[12] !== c ? (p = c && (0, x.jsx)(`td`, {
            className: `h-[inherit] w-12 pe-0 text-center align-middle [tr:last-child_&]:border-b-0`,
            children: (0, x.jsx)(`label`, {
                className: `flex h-full cursor-pointer items-center [tr[data-disabled=true]_&]:opacity-50`,
                children: (0, x.jsx)(f, {
                    id: `row-${o}`,
                    checked: u,
                    onChange: () => c(o),
                    containerClassName: `justify-center`
                })
            })
        }), t[10] = u, t[11] = o, t[12] = c, t[13] = p) : p = t[13];
        let m;
        return t[14] !== r || t[15] !== a || t[16] !== d || t[17] !== p ? (m = (0, x.jsxs)(`tr`, {
            className: d,
            ...a,
            children: [p, r]
        }), t[14] = r, t[15] = a, t[16] = d, t[17] = p, t[18] = m) : m = t[18], m
    }, T = e => {
        "use forget";
        let t = (0, y.c)(14),
            r, i, a, o;
        t[0] === e ? (r = t[1], i = t[2], a = t[3], o = t[4]) : ({
            field: a,
            children: r,
            className: i,
            ...o
        } = e, t[0] = e, t[1] = r, t[2] = i, t[3] = a, t[4] = o);
        let {
            visibleColumns: s
        } = (0, b.useContext)(S);
        if (a && s && !s.has(a)) {
            let e;
            return t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, x.jsx)(`td`, {
                className: `border-token-border-light border-b`
            }), t[5] = e) : e = t[5], e
        }
        let c;
        t[6] === i ? c = t[7] : (c = n(`border-token-border-light min-w-fit shrink-0 border-b pe-4 text-start align-middle last:pe-0 [tr:last-child_&]:border-b-0`, i), t[6] = i, t[7] = c);
        let l;
        t[8] === r ? l = t[9] : (l = (0, x.jsx)(`div`, {
            className: `flex items-center [tr[data-disabled=true]_&]:opacity-50`,
            children: r
        }), t[8] = r, t[9] = l);
        let u;
        return t[10] !== o || t[11] !== c || t[12] !== l ? (u = (0, x.jsx)(`td`, {
            className: c,
            ...o,
            children: l
        }), t[10] = o, t[11] = c, t[12] = l, t[13] = u) : u = t[13], u
    }, se = {
        Root: C,
        Row: w,
        Cell: T
    }, ce = a({
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
    S as n, E as r, se as t
};
//# sourceMappingURL=e0dd6841-kzdyroauvlmueln7.js.map