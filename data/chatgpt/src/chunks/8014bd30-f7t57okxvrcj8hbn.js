const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/89350cb0-f87o2leetmuxfkvu.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css", "assets/b411f8ca-gxdzxq28yv3oaqos.js", "assets/b26e60ff-md253wx0ie8rb93v.js", "assets/74bc827c-gcx6g1r7qy0xkkjp.js", "assets/4ed85438-j32h7byl3jel8uhr.js", "assets/03a3ce2c-j7wzxjqo40snjirc.js", "assets/63f6a4cc-m1zithitonrh3vsl.js", "assets/c65bcee1-iqb2wk9s9q71m4ks.js", "assets/46464433-i8k628j3n5wwc6bl.js", "assets/35efed7b-maxibsyj8u9alggl.js", "assets/832dbd3a-8ils21g1hok0as2u.js", "assets/5afd4cd2-ho4qltbdt92gbm9u.js", "assets/eec17ee5-lm6v8wlbrzui7fe1.js", "assets/8f86f60f-kyfvgiiw9qec8zeu.js", "assets/56d77f0a-mygmkjeex8fwpulz.js", "assets/62b1bc77-co12ysbfd3dutqn5.js", "assets/7517017f-m0e7hb8h6fyirvew.js", "assets/e1258b01-dvyn277oke1zy2e2.js", "assets/51994dd8-f73dt6fz3csyx3bu.js", "assets/99a48954-kcp7qbxopdlqkg42.js", "assets/58f127ca-obgb448743afeso0.js", "assets/12ecfb5d-noztpx42cigxuot7.js", "assets/16e34fcb-fvkkfa9ku41olykd.js", "assets/b7c53a83-lhcect8zx8cx8epz.js", "assets/f4ec23bf-b9of8rfqpvbzz6no.js", "assets/46874983-cu5i3arl9lfdbstt.js", "assets/b00adf98-fnhp57eutjqatp7r.js", "assets/76b5a357-benxdh69028dkycz.js", "assets/34f04bae-lptevzatty7ag2ry.js", "assets/e048c888-c5axk8w5li6vkydp.js", "assets/9d2fe035-mjwuqgsxuqosyae2.js", "assets/2ef4395c-iv1xchszymsxjiiu.js", "assets/1fc9a22c-e1zej8rvtll4nra0.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    C0 as r,
    S0 as i,
    b5 as a,
    kT as o,
    y5 as s
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as c,
    Ln as l,
    Nn as u,
    Rn as d,
    Vn as f,
    cn as p,
    ln as m,
    wn as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    QGn as g,
    ZGn as _
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Rl as v,
    Uy as y,
    Wy as b,
    zl as x
} from "./30901919-e33mbl5u1y88w5wu.js";
var S, C = e((() => {
    r(), m(), S = i(() => p(() => import(`./89350cb0-f87o2leetmuxfkvu.js`).then(e => e.PluginAppConfigurationModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45])))
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
    A = h(), n(), g(), b(), x(), a(), j = t(f()), d(), M = c(), N = e => {
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
                selectedValues: i,
                options: a,
                onToggleValue: o,
                onClearValues: c
            } = e,
            {
                closedSections: l,
                onToggleSection: d
            } = (0, j.useContext)(P),
            f, p, m, h;
        if (t[0] !== l || t[1] !== n.label || t[2] !== r || t[3] !== d || t[4] !== i.size) {
            let e = l.has(r),
                a = `filter-${r}-options`,
                o = !e,
                c;
            t[9] !== r || t[10] !== d ? (c = () => d(r), t[9] = r, t[10] = d, t[11] = c) : c = t[11];
            let g;
            t[12] === n.label ? g = t[13] : (g = (0, M.jsx)(u, {
                ...n.label
            }), t[12] = n.label, t[13] = g);
            let _;
            t[14] === i.size ? _ = t[15] : (_ = i.size > 0 && (0, M.jsx)(`div`, {
                className: `bg-token-bg-accent-static absolute -start-1 h-1.5 w-1.5 rounded-full`
            }), t[14] = i.size, t[15] = _);
            let b = e ? (0, M.jsx)(y, {
                className: `icon h-4 w-4`
            }) : (0, M.jsx)(v, {
                className: `icon h-4 w-4`
            });
            t[16] !== a || t[17] !== o || t[18] !== c || t[19] !== g || t[20] !== _ || t[21] !== b ? (h = (0, M.jsx)(`legend`, {
                className: `w-full`,
                children: (0, M.jsxs)(`button`, {
                    type: `button`,
                    className: `interactive-button interactive-button-secondary interactive-outline-secondary relative flex w-full cursor-pointer items-center justify-between gap-4 rounded-md p-2 text-sm font-medium`,
                    "aria-expanded": o,
                    "aria-controls": a,
                    onClick: c,
                    children: [g, _, b]
                })
            }), t[16] = a, t[17] = o, t[18] = c, t[19] = g, t[20] = _, t[21] = b, t[22] = h) : h = t[22], p = a;
            let x = !e && `grid-rows-[1fr]`;
            t[23] === x ? m = t[24] : (m = s(`grid grid-rows-[0fr] transition-all duration-150`, x), t[23] = x, t[24] = m), f = s(`overflow-hidden transition-all duration-150`, e && `invisible`), t[0] = l, t[1] = n.label, t[2] = r, t[3] = d, t[4] = i.size, t[5] = f, t[6] = p, t[7] = m, t[8] = h
        } else f = t[5], p = t[6], m = t[7], h = t[8];
        let g;
        t[25] !== n.emptyMessage || t[26] !== n.selectionMode || t[27] !== r || t[28] !== c || t[29] !== i.size ? (g = n.selectionMode === `single` && n.emptyMessage ? (0, M.jsx)(`li`, {
            className: `mb-1`,
            children: (0, M.jsxs)(`label`, {
                className: `focus-within:ring-token-border-accent inline-flex w-full cursor-pointer items-center gap-2 rounded-sm pe-4 text-sm font-normal focus-within:ring-2 focus-within:outline-none`,
                children: [(0, M.jsx)(L, {
                    id: `filter-${r}-option-all`,
                    name: `filter-${r}`,
                    checked: i.size === 0,
                    onChange: c
                }), (0, M.jsx)(`span`, {
                    children: n.emptyMessage
                })]
            })
        }) : null, t[25] = n.emptyMessage, t[26] = n.selectionMode, t[27] = r, t[28] = c, t[29] = i.size, t[30] = g) : g = t[30];
        let b;
        if (t[31] !== n || t[32] !== r || t[33] !== o || t[34] !== a || t[35] !== i) {
            let e;
            t[37] !== n || t[38] !== r || t[39] !== o || t[40] !== i ? (e = (e, t) => {
                let a = n.messages(e),
                    s = i.has(e);
                return (0, M.jsx)(`li`, {
                    className: `mb-1`,
                    children: (0, M.jsxs)(`label`, {
                        className: `focus-within:ring-token-border-accent inline-flex w-full cursor-pointer items-center gap-2 rounded-sm pe-4 text-sm font-normal focus-within:ring-2 focus-within:outline-none`,
                        children: [n.selectionMode === `single` ? (0, M.jsx)(L, {
                            id: `filter-${r}-option-${t}`,
                            name: `filter-${r}`,
                            checked: s,
                            onChange: () => o(e)
                        }) : (0, M.jsx)(_, {
                            id: `filter-${r}-option-${t}`,
                            checked: s,
                            onChange: () => o(e),
                            className: `border-token-border-light bg-token-bg-primary text-token-bg-accent-static focus:ring-token-border-accent h-4 w-4 rounded`
                        }), (0, M.jsx)(`span`, {
                            children: a
                        })]
                    })
                }, t)
            }, t[37] = n, t[38] = r, t[39] = o, t[40] = i, t[41] = e) : e = t[41], b = a.map(e), t[31] = n, t[32] = r, t[33] = o, t[34] = a, t[35] = i, t[36] = b
        } else b = t[36];
        let x;
        t[42] !== g || t[43] !== b ? (x = (0, M.jsxs)(`ul`, {
            className: `my-0.5 px-2`,
            children: [g, b]
        }), t[42] = g, t[43] = b, t[44] = x) : x = t[44];
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
                checked: i,
                onChange: a
            } = e,
            o;
        t[0] !== i || t[1] !== n || t[2] !== r || t[3] !== a ? (o = (0, M.jsx)(`input`, {
            id: n,
            type: `radio`,
            name: r,
            checked: i,
            onChange: a,
            className: `sr-only`
        }), t[0] = i, t[1] = n, t[2] = r, t[3] = a, t[4] = o) : o = t[4];
        let c = i ? `border-token-text-primary bg-token-text-primary` : `border-token-border-light bg-transparent`,
            l;
        t[5] === c ? l = t[6] : (l = s(`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2`, c), t[5] = c, t[6] = l);
        let u;
        t[7] === i ? u = t[8] : (u = i ? (0, M.jsx)(`span`, {
            className: `bg-token-bg-primary block h-2 w-2 rounded-full`
        }) : null, t[7] = i, t[8] = u);
        let d;
        t[9] !== l || t[10] !== u ? (d = (0, M.jsx)(`span`, {
            "aria-hidden": `true`,
            className: l,
            children: u
        }), t[9] = l, t[10] = u, t[11] = d) : d = t[11];
        let f;
        return t[12] !== o || t[13] !== d ? (f = (0, M.jsxs)(M.Fragment, {
            children: [o, d]
        }), t[12] = o, t[13] = d, t[14] = f) : f = t[14], f
    }, R = e => {
        "use forget";
        let t = (0, A.c)(24),
            {
                filters: n,
                onApply: r,
                filterFields: i,
                clearAllMessage: a
            } = e,
            s = a === void 0 ? z.clearAllFiltersButton : a,
            c;
        t[0] !== n || t[1] !== r ? (c = (e, t, i) => {
            let a = {
                    ...n
                },
                o = new Set(a[e]);
            o.has(i) ? o.delete(i) : (t.selectionMode === `single` && o.clear(), o.add(i)), a[e] = o, r(a)
        }, t[0] = n, t[1] = r, t[2] = c) : c = t[2];
        let l = c,
            d;
        t[3] !== n || t[4] !== r ? (d = e => {
            r({
                ...n,
                [e]: new Set
            })
        }, t[3] = n, t[4] = r, t[5] = d) : d = t[5];
        let f = d,
            p;
        t[6] === i ? p = t[7] : (p = Object.entries(i).filter(O), t[6] = i, t[7] = p);
        let m;
        t[8] !== n || t[9] !== f || t[10] !== l || t[11] !== p ? (m = p.map(e => {
            let [t, r] = e;
            return (0, M.jsx)(I, {
                filterKey: t,
                field: r,
                selectedValues: n[t] ?? new Set,
                options: r.options,
                onToggleValue: e => l(t, r, e),
                onClearValues: () => f(t)
            }, t)
        }), t[8] = n, t[9] = f, t[10] = l, t[11] = p, t[12] = m) : m = t[12];
        let h;
        t[13] === r ? h = t[14] : (h = () => r({}), t[13] = r, t[14] = h);
        let g = Object.values(n).every(k),
            _;
        t[15] === s ? _ = t[16] : (_ = (0, M.jsx)(u, {
            ...s
        }), t[15] = s, t[16] = _);
        let v;
        t[17] !== h || t[18] !== g || t[19] !== _ ? (v = (0, M.jsx)(`li`, {
            className: `mt-1 flex justify-end`,
            children: (0, M.jsx)(o, {
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
//# sourceMappingURL=8014bd30-f7t57okxvrcj8hbn.js.map