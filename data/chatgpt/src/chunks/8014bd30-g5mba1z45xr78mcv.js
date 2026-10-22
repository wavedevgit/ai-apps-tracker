const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/89350cb0-h15i4n0aur5dmoiw.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-i79e9c315w50am5f.js", "assets/30901919-ikyi1r55w2i02fom.js", "assets/c470f5ab-lpy67c9in1skobas.js", "assets/0e5afe53-jfvcgv06snw44wce.js", "assets/conversation-small-dl8qqd6x.css", "assets/c2675c8c-d62p1sdq1sy52umm.js", "assets/82782bc9-o75a7wf6pmueiskp.js", "assets/8b34dbc2-m4883pai3e8fx8q6.js", "assets/global-modals-dxg9ukpk.css", "assets/b411f8ca-etyixtlhhe9zenvx.js", "assets/6fd89734-l8h178glfzpxynlr.js", "assets/b26e60ff-o0fkyj8iu7skd8n9.js", "assets/74bc827c-bufimsqtrqf1man5.js", "assets/4ed85438-d3iehz718flwc6ou.js", "assets/03a3ce2c-lpeua4y0obk3y2td.js", "assets/63f6a4cc-v9fivgq78ptiv9ln.js", "assets/c65bcee1-iup96xe1z8l6avnr.js", "assets/46464433-gd4l72ulldog8da4.js", "assets/35efed7b-moefmf8xzi74r2k9.js", "assets/832dbd3a-hr2f7nt6qa1t7a5r.js", "assets/eec17ee5-ki7oimmow52vvbkt.js", "assets/b7c53a83-f8ov434yx5hdmi5t.js", "assets/e1258b01-jdqyg86kgujku4v3.js", "assets/16e34fcb-lba4484s26o3hap9.js", "assets/f4ec23bf-b9of8rfqpvbzz6no.js", "assets/46874983-ng4tinv7mwft23le.js", "assets/99a48954-ehrq2ggbboscx5gi.js", "assets/b00adf98-mbtj8gmkzad4v3jx.js", "assets/76b5a357-benxdh69028dkycz.js", "assets/51994dd8-ld5ed2fuy4h768iv.js", "assets/56d77f0a-mqwmka0li40lvlzm.js", "assets/62b1bc77-n9gt3xioya6nekxh.js", "assets/7517017f-m0e7hb8h6fyirvew.js", "assets/34f04bae-gv8xi2woa847rdht.js", "assets/e048c888-fu31qiumzd84qp8c.js", "assets/c6f1b7b6-ogtwqnt6u3u436zf.js", "assets/12ecfb5d-c2re9np5noq9a0yn.js", "assets/2ef4395c-ir17gtzo9tn9rume.js", "assets/1fc9a22c-mvanfuz98o9mbx9h.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    a2 as r,
    c7 as i,
    eE as a,
    l7 as o,
    o2 as s
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as c,
    Ln as l,
    Nn as u,
    Rn as d,
    Vn as f,
    cn as p,
    ln as m,
    wn as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    OKn as g,
    kKn as _
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    By as v,
    Rl as y,
    Vy as b,
    zl as x
} from "./30901919-ikyi1r55w2i02fom.js";
var S, C = e((() => {
    s(), m(), S = r(() => p(() => import(`./89350cb0-h15i4n0aur5dmoiw.js`).then(e => e.PluginAppConfigurationModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43])))
}));

function w(e) {
    return e
}

function T(e, t) {
    return e + Number(t.size > 0)
}

function E(e) {
    let [, t] = e;
    return t.defaultClosed
}

function D(e) {
    let [t] = e;
    return t
}

function O(e) {
    let [, t] = e;
    return t.options.length > 0
}

function k(e) {
    return e.size === 0
}
var A, j, M, N, P, F, I, L, R, z, B = e((() => {
    A = h(), a(), _(), b(), x(), o(), j = t(f()), d(), M = c(), N = e => {
        "use forget";
        let t = (0, A.c)(7),
            n;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = {}, t[0] = n) : n = t[0];
        let [r, i] = (0, j.useState)(n), a;
        t[1] === r ? a = t[2] : (a = Object.values(r).reduce(T, 0), t[1] = r, t[2] = a);
        let o;
        return t[3] !== e || t[4] !== r || t[5] !== a ? (o = {
            filters: r,
            setFilters: i,
            activeFilterCount: a,
            filterFields: e
        }, t[3] = e, t[4] = r, t[5] = a, t[6] = o) : o = t[6], o
    }, P = (0, j.createContext)({
        closedSections: new Set,
        onToggleSection: () => {}
    }), F = e => {
        "use forget";
        let t = (0, A.c)(8),
            {
                children: n,
                filterFields: r
            } = e,
            i;
        t[0] === r ? i = t[1] : (i = new Set(Object.entries(r ?? {}).filter(E).map(D)), t[0] = r, t[1] = i);
        let [a, o] = (0, j.useState)(i), s;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = e => {
            o(t => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n
            })
        }, t[2] = s) : s = t[2];
        let c = s,
            l;
        t[3] === a ? l = t[4] : (l = {
            closedSections: a,
            onToggleSection: c
        }, t[3] = a, t[4] = l);
        let u;
        return t[5] !== n || t[6] !== l ? (u = (0, M.jsx)(P.Provider, {
            value: l,
            children: n
        }), t[5] = n, t[6] = l, t[7] = u) : u = t[7], u
    }, I = e => {
        "use forget";
        let t = (0, A.c)(55),
            {
                field: n,
                filterKey: r,
                selectedValues: a,
                options: o,
                onToggleValue: s,
                onClearValues: c
            } = e,
            {
                closedSections: l,
                onToggleSection: d
            } = (0, j.useContext)(P),
            f, p, m, h;
        if (t[0] !== l || t[1] !== n.label || t[2] !== r || t[3] !== d || t[4] !== a.size) {
            let e = l.has(r),
                o = `filter-${r}-options`,
                s = !e,
                c;
            t[9] !== r || t[10] !== d ? (c = () => d(r), t[9] = r, t[10] = d, t[11] = c) : c = t[11];
            let g;
            t[12] === n.label ? g = t[13] : (g = (0, M.jsx)(u, {
                ...n.label
            }), t[12] = n.label, t[13] = g);
            let _;
            t[14] === a.size ? _ = t[15] : (_ = a.size > 0 && (0, M.jsx)(`div`, {
                className: `bg-token-bg-accent-static absolute -start-1 h-1.5 w-1.5 rounded-full`
            }), t[14] = a.size, t[15] = _);
            let b = e ? (0, M.jsx)(v, {
                className: `icon h-4 w-4`
            }) : (0, M.jsx)(y, {
                className: `icon h-4 w-4`
            });
            t[16] !== o || t[17] !== s || t[18] !== c || t[19] !== g || t[20] !== _ || t[21] !== b ? (h = (0, M.jsx)(`legend`, {
                className: `w-full`,
                children: (0, M.jsxs)(`button`, {
                    type: `button`,
                    className: `interactive-button interactive-button-secondary interactive-outline-secondary relative flex w-full cursor-pointer items-center justify-between gap-4 rounded-md p-2 text-sm font-medium`,
                    "aria-expanded": s,
                    "aria-controls": o,
                    onClick: c,
                    children: [g, _, b]
                })
            }), t[16] = o, t[17] = s, t[18] = c, t[19] = g, t[20] = _, t[21] = b, t[22] = h) : h = t[22], p = o;
            let x = !e && `grid-rows-[1fr]`;
            t[23] === x ? m = t[24] : (m = i(`grid grid-rows-[0fr] transition-all duration-150`, x), t[23] = x, t[24] = m), f = i(`overflow-hidden transition-all duration-150`, e && `invisible`), t[0] = l, t[1] = n.label, t[2] = r, t[3] = d, t[4] = a.size, t[5] = f, t[6] = p, t[7] = m, t[8] = h
        } else f = t[5], p = t[6], m = t[7], h = t[8];
        let _;
        t[25] !== n.emptyMessage || t[26] !== n.selectionMode || t[27] !== r || t[28] !== c || t[29] !== a.size ? (_ = n.selectionMode === `single` && n.emptyMessage ? (0, M.jsx)(`li`, {
            className: `mb-1`,
            children: (0, M.jsxs)(`label`, {
                className: `focus-within:ring-token-border-accent inline-flex w-full cursor-pointer items-center gap-2 rounded-sm pe-4 text-sm font-normal focus-within:ring-2 focus-within:outline-none`,
                children: [(0, M.jsx)(L, {
                    id: `filter-${r}-option-all`,
                    name: `filter-${r}`,
                    checked: a.size === 0,
                    onChange: c
                }), (0, M.jsx)(`span`, {
                    children: n.emptyMessage
                })]
            })
        }) : null, t[25] = n.emptyMessage, t[26] = n.selectionMode, t[27] = r, t[28] = c, t[29] = a.size, t[30] = _) : _ = t[30];
        let b;
        if (t[31] !== n || t[32] !== r || t[33] !== s || t[34] !== o || t[35] !== a) {
            let e;
            t[37] !== n || t[38] !== r || t[39] !== s || t[40] !== a ? (e = (e, t) => {
                let i = n.messages(e),
                    o = a.has(e);
                return (0, M.jsx)(`li`, {
                    className: `mb-1`,
                    children: (0, M.jsxs)(`label`, {
                        className: `focus-within:ring-token-border-accent inline-flex w-full cursor-pointer items-center gap-2 rounded-sm pe-4 text-sm font-normal focus-within:ring-2 focus-within:outline-none`,
                        children: [n.selectionMode === `single` ? (0, M.jsx)(L, {
                            id: `filter-${r}-option-${t}`,
                            name: `filter-${r}`,
                            checked: o,
                            onChange: () => s(e)
                        }) : (0, M.jsx)(g, {
                            id: `filter-${r}-option-${t}`,
                            checked: o,
                            onChange: () => s(e),
                            className: `border-token-border-light bg-token-bg-primary text-token-bg-accent-static focus:ring-token-border-accent h-4 w-4 rounded`
                        }), (0, M.jsx)(`span`, {
                            children: i
                        })]
                    })
                }, t)
            }, t[37] = n, t[38] = r, t[39] = s, t[40] = a, t[41] = e) : e = t[41], b = o.map(e), t[31] = n, t[32] = r, t[33] = s, t[34] = o, t[35] = a, t[36] = b
        } else b = t[36];
        let x;
        t[42] !== _ || t[43] !== b ? (x = (0, M.jsxs)(`ul`, {
            className: `my-0.5 px-2`,
            children: [_, b]
        }), t[42] = _, t[43] = b, t[44] = x) : x = t[44];
        let S;
        t[45] !== f || t[46] !== x ? (S = (0, M.jsx)(`div`, {
            className: f,
            children: x
        }), t[45] = f, t[46] = x, t[47] = S) : S = t[47];
        let C;
        t[48] !== p || t[49] !== m || t[50] !== S ? (C = (0, M.jsx)(`div`, {
            id: p,
            className: m,
            children: S
        }), t[48] = p, t[49] = m, t[50] = S, t[51] = C) : C = t[51];
        let w;
        return t[52] !== h || t[53] !== C ? (w = (0, M.jsx)(`li`, {
            children: (0, M.jsxs)(`fieldset`, {
                children: [h, C]
            })
        }), t[52] = h, t[53] = C, t[54] = w) : w = t[54], w
    }, L = e => {
        "use forget";
        let t = (0, A.c)(15),
            {
                id: n,
                name: r,
                checked: a,
                onChange: o
            } = e,
            s;
        t[0] !== a || t[1] !== n || t[2] !== r || t[3] !== o ? (s = (0, M.jsx)(`input`, {
            id: n,
            type: `radio`,
            name: r,
            checked: a,
            onChange: o,
            className: `sr-only`
        }), t[0] = a, t[1] = n, t[2] = r, t[3] = o, t[4] = s) : s = t[4];
        let c = a ? `border-token-text-primary bg-token-text-primary` : `border-token-border-light bg-transparent`,
            l;
        t[5] === c ? l = t[6] : (l = i(`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2`, c), t[5] = c, t[6] = l);
        let u;
        t[7] === a ? u = t[8] : (u = a ? (0, M.jsx)(`span`, {
            className: `bg-token-bg-primary block h-2 w-2 rounded-full`
        }) : null, t[7] = a, t[8] = u);
        let d;
        t[9] !== l || t[10] !== u ? (d = (0, M.jsx)(`span`, {
            "aria-hidden": `true`,
            className: l,
            children: u
        }), t[9] = l, t[10] = u, t[11] = d) : d = t[11];
        let f;
        return t[12] !== s || t[13] !== d ? (f = (0, M.jsxs)(M.Fragment, {
            children: [s, d]
        }), t[12] = s, t[13] = d, t[14] = f) : f = t[14], f
    }, R = e => {
        "use forget";
        let t = (0, A.c)(24),
            {
                filters: r,
                onApply: i,
                filterFields: a,
                clearAllMessage: o
            } = e,
            s = o === void 0 ? z.clearAllFiltersButton : o,
            c;
        t[0] !== r || t[1] !== i ? (c = (e, t, n) => {
            let a = {
                    ...r
                },
                o = new Set(a[e]);
            o.has(n) ? o.delete(n) : (t.selectionMode === `single` && o.clear(), o.add(n)), a[e] = o, i(a)
        }, t[0] = r, t[1] = i, t[2] = c) : c = t[2];
        let l = c,
            d;
        t[3] !== r || t[4] !== i ? (d = e => {
            i({
                ...r,
                [e]: new Set
            })
        }, t[3] = r, t[4] = i, t[5] = d) : d = t[5];
        let f = d,
            p;
        t[6] === a ? p = t[7] : (p = Object.entries(a).filter(O), t[6] = a, t[7] = p);
        let m;
        t[8] !== r || t[9] !== f || t[10] !== l || t[11] !== p ? (m = p.map(e => {
            let [t, n] = e;
            return (0, M.jsx)(I, {
                filterKey: t,
                field: n,
                selectedValues: r[t] ?? new Set,
                options: n.options,
                onToggleValue: e => l(t, n, e),
                onClearValues: () => f(t)
            }, t)
        }), t[8] = r, t[9] = f, t[10] = l, t[11] = p, t[12] = m) : m = t[12];
        let h;
        t[13] === i ? h = t[14] : (h = () => i({}), t[13] = i, t[14] = h);
        let g = Object.values(r).every(k),
            _;
        t[15] === s ? _ = t[16] : (_ = (0, M.jsx)(u, {
            ...s
        }), t[15] = s, t[16] = _);
        let v;
        t[17] !== h || t[18] !== g || t[19] !== _ ? (v = (0, M.jsx)(`li`, {
            className: `mt-1 flex justify-end`,
            children: (0, M.jsx)(n, {
                color: `ghost`,
                size: `small`,
                onClick: h,
                disabled: g,
                children: _
            })
        }), t[17] = h, t[18] = g, t[19] = _, t[20] = v) : v = t[20];
        let y;
        return t[21] !== m || t[22] !== v ? (y = (0, M.jsxs)(`ul`, {
            className: `py-1 ps-3 pe-2`,
            children: [m, v]
        }), t[21] = m, t[22] = v, t[23] = y) : y = t[23], y
    }, z = l({
        clearAllFiltersButton: {
            id: `RRGuYA`,
            defaultMessage: `Clear all`
        }
    })
}));
export {
    N as a, B as i, F as n, S as o, w as r, C as s, R as t
};
//# sourceMappingURL=8014bd30-g5mba1z45xr78mcv.js.map