const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/89350cb0-o5ajlxxcbbe0ildk.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m08q51xmfe7gjq3d.js", "assets/30901919-lgbmg5s09xld40kt.js", "assets/c470f5ab-hgik953cu5ujlhdm.js", "assets/0e5afe53-i4tqvmyg38miikw0.js", "assets/conversation-small-dtc7tvsx.css", "assets/c2675c8c-otyjprdiowg2v8hl.js", "assets/82782bc9-ca5kcqz13rn6iprj.js", "assets/8b34dbc2-n194ohawifys3bko.js", "assets/global-modals-dxg9ukpk.css", "assets/b411f8ca-lqjgcidqs8y1f1yf.js", "assets/6fd89734-l8h178glfzpxynlr.js", "assets/b26e60ff-ik100bcoukpbcnag.js", "assets/74bc827c-dtwhgy8cexhxx01e.js", "assets/4ed85438-d3sye83b17odxk30.js", "assets/03a3ce2c-0c5jgeaqzf3ixucu.js", "assets/63f6a4cc-m75urhphyabs9wtu.js", "assets/c65bcee1-mou9obit1ooiwgsq.js", "assets/46464433-dwdz5ec7iqncacxe.js", "assets/35efed7b-hon82vzwy5pzdozz.js", "assets/832dbd3a-o3jozafw0zbo48m4.js", "assets/eec17ee5-o8e9qvbq3i6ltg2q.js", "assets/b7c53a83-hcts135f8hiib80z.js", "assets/e1258b01-f6805c7kkko5egq3.js", "assets/16e34fcb-iz9kwlgfpzvuztsq.js", "assets/f4ec23bf-b9of8rfqpvbzz6no.js", "assets/46874983-lhwh72mr11l3pg6n.js", "assets/99a48954-c3chku9kaz5xncgc.js", "assets/b00adf98-e7i2vyaa2vgd87e3.js", "assets/76b5a357-benxdh69028dkycz.js", "assets/51994dd8-cneecn7zwtlqfyji.js", "assets/56d77f0a-lxgh1l3asyyo4wab.js", "assets/62b1bc77-ju57fgz8nh8hm0gq.js", "assets/7517017f-m0e7hb8h6fyirvew.js", "assets/34f04bae-obphxtlb6w7yhao8.js", "assets/e048c888-mv7m5jtbpuuli8n4.js", "assets/c6f1b7b6-cxjacc6lyyzhn3xz.js", "assets/12ecfb5d-c2re9np5noq9a0yn.js", "assets/2ef4395c-meymwr80k8yh7jxu.js", "assets/1fc9a22c-m97h415jts8e1qlf.js"]))) => i.map(i => d[i]);
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
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    GKn as g,
    KKn as _
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    By as v,
    Rl as y,
    Vy as b,
    zl as x
} from "./30901919-lgbmg5s09xld40kt.js";
var S, C = e((() => {
    s(), m(), S = r(() => p(() => import(`./89350cb0-o5ajlxxcbbe0ildk.js`).then(e => e.PluginAppConfigurationModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43])))
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
//# sourceMappingURL=8014bd30-b4s0q7j03dk8oeje.js.map