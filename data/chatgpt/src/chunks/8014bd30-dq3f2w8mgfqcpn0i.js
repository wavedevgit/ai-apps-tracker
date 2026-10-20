const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/89350cb0-dm3o26u2fv8x4vc6.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css", "assets/c2675c8c-9bs3zsr3vq259es7.js", "assets/82782bc9-mb60yg1xlggwvqri.js", "assets/8b34dbc2-k1zgxrtsww83602u.js", "assets/global-modals-lv5n3ujm.css", "assets/b411f8ca-ofapfme3zu76fq12.js", "assets/b26e60ff-buooiibaqv0tlwsm.js", "assets/74bc827c-gg1ge2qvfknhn33r.js", "assets/4ed85438-ezidm3qm7yr0vslx.js", "assets/03a3ce2c-b5fqb8zsss3tvzok.js", "assets/63f6a4cc-dy5lcr5r0vqhnmv5.js", "assets/c65bcee1-hnjb6mc0fuirdb4i.js", "assets/46464433-g946xnvlgzfys2yo.js", "assets/35efed7b-pdzfbbj6w898u772.js", "assets/832dbd3a-kczb4igcdcx4itca.js", "assets/eec17ee5-ew2u75ezprtt5fk1.js", "assets/b7c53a83-f9g9gvgk4j59c3c0.js", "assets/e1258b01-e4w4cezsgms4ti7w.js", "assets/16e34fcb-gnzp094luetotemj.js", "assets/f4ec23bf-b9of8rfqpvbzz6no.js", "assets/46874983-bz3f79lnofdouqc4.js", "assets/99a48954-di1yvdw6ghqm4hqh.js", "assets/b00adf98-my1gjul6yvyuxofk.js", "assets/76b5a357-benxdh69028dkycz.js", "assets/51994dd8-iorpxuhvjfkp2ym1.js", "assets/56d77f0a-h4uvi08yvw48xs8d.js", "assets/62b1bc77-nn0f9z332hr2qeag.js", "assets/7517017f-m0e7hb8h6fyirvew.js", "assets/34f04bae-gq4q4vqkkmrvrml5.js", "assets/e048c888-dxkh44495ei6qa4g.js", "assets/c6f1b7b6-ljq4xbdiatnyd1wl.js", "assets/12ecfb5d-c2re9np5noq9a0yn.js", "assets/2ef4395c-er7bny3eer8c4di4.js", "assets/1fc9a22c-czfd83azx6f410kt.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    JT as r,
    X0 as i,
    Y0 as a,
    Y5 as o,
    qT as s
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    oKn as g,
    sKn as _
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    By as v,
    Rl as y,
    Vy as b,
    zl as x
} from "./30901919-7dzdc1ou0jtwkwpt.js";
var S, C = e((() => {
    i(), m(), S = a(() => p(() => import(`./89350cb0-dm3o26u2fv8x4vc6.js`).then(e => e.PluginAppConfigurationModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42])))
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
    A = h(), r(), _(), b(), x(), o(), j = t(f()), d(), M = c(), N = e => {
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
                field: r,
                filterKey: i,
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
        if (t[0] !== l || t[1] !== r.label || t[2] !== i || t[3] !== d || t[4] !== a.size) {
            let e = l.has(i),
                o = `filter-${i}-options`,
                s = !e,
                c;
            t[9] !== i || t[10] !== d ? (c = () => d(i), t[9] = i, t[10] = d, t[11] = c) : c = t[11];
            let g;
            t[12] === r.label ? g = t[13] : (g = (0, M.jsx)(u, {
                ...r.label
            }), t[12] = r.label, t[13] = g);
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
            t[23] === x ? m = t[24] : (m = n(`grid grid-rows-[0fr] transition-all duration-150`, x), t[23] = x, t[24] = m), f = n(`overflow-hidden transition-all duration-150`, e && `invisible`), t[0] = l, t[1] = r.label, t[2] = i, t[3] = d, t[4] = a.size, t[5] = f, t[6] = p, t[7] = m, t[8] = h
        } else f = t[5], p = t[6], m = t[7], h = t[8];
        let _;
        t[25] !== r.emptyMessage || t[26] !== r.selectionMode || t[27] !== i || t[28] !== c || t[29] !== a.size ? (_ = r.selectionMode === `single` && r.emptyMessage ? (0, M.jsx)(`li`, {
            className: `mb-1`,
            children: (0, M.jsxs)(`label`, {
                className: `focus-within:ring-token-border-accent inline-flex w-full cursor-pointer items-center gap-2 rounded-sm pe-4 text-sm font-normal focus-within:ring-2 focus-within:outline-none`,
                children: [(0, M.jsx)(L, {
                    id: `filter-${i}-option-all`,
                    name: `filter-${i}`,
                    checked: a.size === 0,
                    onChange: c
                }), (0, M.jsx)(`span`, {
                    children: r.emptyMessage
                })]
            })
        }) : null, t[25] = r.emptyMessage, t[26] = r.selectionMode, t[27] = i, t[28] = c, t[29] = a.size, t[30] = _) : _ = t[30];
        let b;
        if (t[31] !== r || t[32] !== i || t[33] !== s || t[34] !== o || t[35] !== a) {
            let e;
            t[37] !== r || t[38] !== i || t[39] !== s || t[40] !== a ? (e = (e, t) => {
                let n = r.messages(e),
                    o = a.has(e);
                return (0, M.jsx)(`li`, {
                    className: `mb-1`,
                    children: (0, M.jsxs)(`label`, {
                        className: `focus-within:ring-token-border-accent inline-flex w-full cursor-pointer items-center gap-2 rounded-sm pe-4 text-sm font-normal focus-within:ring-2 focus-within:outline-none`,
                        children: [r.selectionMode === `single` ? (0, M.jsx)(L, {
                            id: `filter-${i}-option-${t}`,
                            name: `filter-${i}`,
                            checked: o,
                            onChange: () => s(e)
                        }) : (0, M.jsx)(g, {
                            id: `filter-${i}-option-${t}`,
                            checked: o,
                            onChange: () => s(e),
                            className: `border-token-border-light bg-token-bg-primary text-token-bg-accent-static focus:ring-token-border-accent h-4 w-4 rounded`
                        }), (0, M.jsx)(`span`, {
                            children: n
                        })]
                    })
                }, t)
            }, t[37] = r, t[38] = i, t[39] = s, t[40] = a, t[41] = e) : e = t[41], b = o.map(e), t[31] = r, t[32] = i, t[33] = s, t[34] = o, t[35] = a, t[36] = b
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
                id: r,
                name: i,
                checked: a,
                onChange: o
            } = e,
            s;
        t[0] !== a || t[1] !== r || t[2] !== i || t[3] !== o ? (s = (0, M.jsx)(`input`, {
            id: r,
            type: `radio`,
            name: i,
            checked: a,
            onChange: o,
            className: `sr-only`
        }), t[0] = a, t[1] = r, t[2] = i, t[3] = o, t[4] = s) : s = t[4];
        let c = a ? `border-token-text-primary bg-token-text-primary` : `border-token-border-light bg-transparent`,
            l;
        t[5] === c ? l = t[6] : (l = n(`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2`, c), t[5] = c, t[6] = l);
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
                filters: n,
                onApply: r,
                filterFields: i,
                clearAllMessage: a
            } = e,
            o = a === void 0 ? z.clearAllFiltersButton : a,
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
        t[15] === o ? _ = t[16] : (_ = (0, M.jsx)(u, {
            ...o
        }), t[15] = o, t[16] = _);
        let v;
        t[17] !== h || t[18] !== g || t[19] !== _ ? (v = (0, M.jsx)(`li`, {
            className: `mt-1 flex justify-end`,
            children: (0, M.jsx)(s, {
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
//# sourceMappingURL=8014bd30-dq3f2w8mgfqcpn0i.js.map