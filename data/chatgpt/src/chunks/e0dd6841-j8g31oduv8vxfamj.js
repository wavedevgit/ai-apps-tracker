import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as n,
    y5 as r
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as i,
    Ln as a,
    Nn as o,
    Rn as s,
    Vn as c,
    wn as l,
    zn as u
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    QGn as d,
    ZGn as f
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    DC as p,
    EC as m,
    Kc as ee,
    Qv as h,
    Zv as te,
    qc as g
} from "./30901919-e33mbl5u1y88w5wu.js";

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
    v = l(), d(), p(), g(), h(), n(), y = t(c()), s(), b = i(), se = (e, t) => Number(!!e) - Number(!!t) || (e && t ? e < t ? -1 : 1 : 0), x = (0, y.createContext)({
        selection: new Set
    }), S = e => {
        "use forget";
        let t = (0, v.c)(108),
            {
                columns: n,
                rows: i,
                onSelection: a,
                emptyMessage: s,
                className: c,
                headerCellClassName: l,
                rowKey: d,
                visibleKeys: p,
                children: h
            } = e,
            g = (0, y.useId)(),
            S;
        t[0] === n ? S = t[1] : (S = n.filter(ne), t[0] = n, t[1] = S);
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
            k;
        t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (k = new Set, t[25] = k) : k = t[25];
        let [A, _e] = (0, y.useState)(k), j;
        t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (j = {}, t[26] = j) : j = t[26];
        let [M, ve] = (0, y.useState)(j), ye = (0, y.useRef)(null), N;
        t[27] !== E || t[28] !== a ? (N = e => {
            a && _e(t => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), a(Array.from(n).map(e => E.get(e)).filter(ie)), n
            })
        }, t[27] = E, t[28] = a, t[29] = N) : N = t[29];
        let be = N,
            P;
        t[30] !== E || t[31] !== a || t[32] !== A || t[33] !== p ? (P = a && (p ?? new Set(E.keys()))?.isSubsetOf(A) && !!(p ?? E).size, t[30] = E, t[31] = a, t[32] = A, t[33] = p, t[34] = P) : P = t[34];
        let F = P,
            I;
        t[35] !== F || t[36] !== E || t[37] !== a || t[38] !== A || t[39] !== p ? (I = a && !F && !!(p ?? new Set(E.keys())).intersection(A).size, t[35] = F, t[36] = E, t[37] = a, t[38] = A, t[39] = p, t[40] = I) : I = t[40];
        let xe = I,
            L;
        t[41] !== F || t[42] !== E || t[43] !== a || t[44] !== p ? (L = () => {
            a && _e(e => {
                let t = new Set(e);
                return (p ?? E.keys()).forEach(e => {
                    F ? t.delete(e) : t.add(e)
                }), a(Array.from(t).map(e => E.get(e)).filter(ae)), t
            })
        }, t[41] = F, t[42] = E, t[43] = a, t[44] = p, t[45] = L) : L = t[45];
        let Se = L,
            R;
        t[46] === a ? R = t[47] : (R = () => {
            _e(new Set), a?.([])
        }, t[46] = a, t[47] = R);
        let Ce = R,
            z;
        t[48] === M ? z = t[49] : (z = (e, t) => {
            let n = M[e] ?? t;
            if (n) return {
                width: `${n}px`,
                minWidth: `${n}px`
            }
        }, t[48] = M, t[49] = z);
        let B = z,
            we;
        t[50] === M ? we = t[51] : (we = Object.keys(M), t[50] = M, t[51] = we);
        let Te = we.length,
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
                let e = ye.current;
                if (!e) return;
                let t = e.querySelectorAll(`th[data-field]`);
                if (t.length === 0) return;
                ve(e => {
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
                te = h.cursor,
                g = h.userSelect;
            h.cursor = `col-resize`, h.userSelect = `none`, Ee(!0);
            let ne = t => {
                    let n = r.getBoundingClientRect().width,
                        i = Math.round(a + t.clientX - m);
                    if (n > ee && n > i) return;
                    ee = i;
                    let o = s + i - a,
                        c = o < l && p ? Math.round(p + (l - o)) : p;
                    ve(t => {
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
                _ = () => {
                    document.removeEventListener(`pointermove`, ne), document.removeEventListener(`pointerup`, _), document.removeEventListener(`pointercancel`, _), h.cursor = te, h.userSelect = g, Ee(!1)
                };
            document.addEventListener(`pointermove`, ne), document.addEventListener(`pointerup`, _), document.addEventListener(`pointercancel`, _)
        }, t[52] = Te, t[53] = H);
        let U = H,
            W = u(),
            De = a ? be : void 0,
            Oe = a ? Ce : void 0,
            G;
        t[54] === C ? G = t[55] : (G = new Set(C.map(oe)), t[54] = C, t[55] = G);
        let K;
        t[56] !== A || t[57] !== De || t[58] !== Oe || t[59] !== G ? (K = {
            select: De,
            clearSelection: Oe,
            selection: A,
            visibleColumns: G
        }, t[56] = A, t[57] = De, t[58] = Oe, t[59] = G, t[60] = K) : K = t[60];
        let ke = a && `lg:-ms-8`,
            q;
        t[61] !== c || t[62] !== ke ? (q = r(`relative min-w-full table-fixed border-separate border-spacing-0`, ke, c), t[61] = c, t[62] = ke, t[63] = q) : q = t[63];
        let J;
        t[64] !== F || t[65] !== l || t[66] !== g || t[67] !== E || t[68] !== a || t[69] !== xe || t[70] !== Se || t[71] !== p ? (J = a && (0, b.jsx)(`th`, {
            className: r(`w-8 min-w-8`, l),
            children: (0, b.jsx)(`label`, {
                className: `bg-token-bg-elevated-secondary dark:bg-token-bg-elevated-primary relative -ms-4 flex cursor-pointer items-center py-2 ps-4 text-center`,
                children: (0, b.jsx)(f, {
                    id: `${g}-select-all`,
                    checked: F,
                    onChange: Se,
                    disabled: (p ?? E).size === 0,
                    containerClassName: `justify-center`,
                    indeterminate: xe
                })
            })
        }), t[64] = F, t[65] = l, t[66] = g, t[67] = E, t[68] = a, t[69] = xe, t[70] = Se, t[71] = p, t[72] = J) : J = t[72];
        let Y;
        if (t[73] !== n || t[74] !== B || t[75] !== U || t[76] !== W || t[77] !== V || t[78] !== D?.direction || t[79] !== D?.field || t[80] !== O) {
            let e;
            t[82] !== B || t[83] !== U || t[84] !== W || t[85] !== V || t[86] !== D?.direction || t[87] !== D?.field || t[88] !== O ? (e = e => {
                let t = D?.field === e.field,
                    n = t ? D?.direction : void 0,
                    i = e.header ?? e.field,
                    a = e.hidden ? void 0 : B(e.field, e.width);
                return e.hidden ? (0, b.jsx)(`th`, {}, e.field) : (0, b.jsx)(`th`, {
                    className: r(`bg-token-bg-elevated-secondary dark:bg-token-bg-elevated-primary w-full text-start text-sm font-medium whitespace-nowrap select-none last:pe-0`, t && `text-token-text-secondary`),
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
                                children: n === `asc` ? (0, b.jsx)(te, {
                                    className: `h-3 w-3`
                                }) : n === `desc` ? (0, b.jsx)(m, {
                                    className: `h-3 w-3`
                                }) : (0, b.jsx)(ee, {
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
                                className: r(`bg-token-bg-secondary h-4 w-0.5 rounded-full transition-opacity`, V ? `opacity-100` : `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`)
                            })
                        })]
                    })
                }, e.field)
            }, t[82] = B, t[83] = U, t[84] = W, t[85] = V, t[86] = D?.direction, t[87] = D?.field, t[88] = O, t[89] = e) : e = t[89], Y = n.map(e), t[73] = n, t[74] = B, t[75] = U, t[76] = W, t[77] = V, t[78] = D?.direction, t[79] = D?.field, t[80] = O, t[81] = Y
        } else Y = t[81];
        let X;
        t[90] !== J || t[91] !== Y ? (X = (0, b.jsx)(`thead`, {
            ref: ye,
            className: `text-token-text-tertiary group relative w-full`,
            children: (0, b.jsxs)(`tr`, {
                className: `h-0`,
                children: [J, Y]
            })
        }), t[90] = J, t[91] = Y, t[92] = X) : X = t[92];
        let Z;
        t[93] !== h || t[94] !== s || t[95] !== E || t[96] !== ge || t[97] !== p ? (Z = (p ?? E).size === 0 ? (0, b.jsx)(`tr`, {
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
        }) : h(ge), t[93] = h, t[94] = s, t[95] = E, t[96] = ge, t[97] = p, t[98] = Z) : Z = t[98];
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
            n, i, a, o;
        t[0] === e ? (n = t[1], i = t[2], a = t[3], o = t[4]) : ({
            rowKey: o,
            children: n,
            className: i,
            ...a
        } = e, t[0] = e, t[1] = n, t[2] = i, t[3] = a, t[4] = o);
        let {
            selection: s,
            select: c
        } = (0, y.useContext)(x), l;
        t[5] !== o || t[6] !== s ? (l = s.has(o), t[5] = o, t[6] = s, t[7] = l) : l = t[7];
        let u = l,
            d;
        t[8] === i ? d = t[9] : (d = r(`group h-0`, i), t[8] = i, t[9] = d);
        let p;
        t[10] !== u || t[11] !== o || t[12] !== c ? (p = c && (0, b.jsx)(`td`, {
            className: `h-[inherit] w-12 pe-0 text-center align-middle [tr:last-child_&]:border-b-0`,
            children: (0, b.jsx)(`label`, {
                className: `flex h-full cursor-pointer items-center [tr[data-disabled=true]_&]:opacity-50`,
                children: (0, b.jsx)(f, {
                    id: `row-${o}`,
                    checked: u,
                    onChange: () => c(o),
                    containerClassName: `justify-center`
                })
            })
        }), t[10] = u, t[11] = o, t[12] = c, t[13] = p) : p = t[13];
        let m;
        return t[14] !== n || t[15] !== a || t[16] !== d || t[17] !== p ? (m = (0, b.jsxs)(`tr`, {
            className: d,
            ...a,
            children: [p, n]
        }), t[14] = n, t[15] = a, t[16] = d, t[17] = p, t[18] = m) : m = t[18], m
    }, w = e => {
        "use forget";
        let t = (0, v.c)(14),
            n, i, a, o;
        t[0] === e ? (n = t[1], i = t[2], a = t[3], o = t[4]) : ({
            field: a,
            children: n,
            className: i,
            ...o
        } = e, t[0] = e, t[1] = n, t[2] = i, t[3] = a, t[4] = o);
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
        t[6] === i ? c = t[7] : (c = r(`border-token-border-light min-w-fit shrink-0 border-b pe-4 text-start align-middle last:pe-0 [tr:last-child_&]:border-b-0`, i), t[6] = i, t[7] = c);
        let l;
        t[8] === n ? l = t[9] : (l = (0, b.jsx)(`div`, {
            className: `flex items-center [tr[data-disabled=true]_&]:opacity-50`,
            children: n
        }), t[8] = n, t[9] = l);
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
//# sourceMappingURL=e0dd6841-j8g31oduv8vxfamj.js.map