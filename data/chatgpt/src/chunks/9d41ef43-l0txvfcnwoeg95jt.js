import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    Jt as r,
    c7 as i,
    cn as a,
    l7 as o
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    At as s,
    Bn as c,
    Kt as l,
    Ln as u,
    Nn as d,
    Q as f,
    Rn as p,
    Vn as m,
    wn as h,
    zn as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Qm as _,
    Ym as v,
    ex as y,
    tx as b
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    TC as x,
    wC as S
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    Ax as C,
    kx as w
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    n as T,
    t as E
} from "./4b84ae07-d6jeytl51x9n6hpe.js";

function D(e) {
    "use forget";
    let t = (0, F.c)(6),
        {
            children: n,
            className: r,
            compact: a
        } = e,
        o = a !== void 0 && a ? `py-4` : `pt-4 pb-8 md:pt-10 md:pb-8`,
        s;
    t[0] !== r || t[1] !== o ? (s = i(`max-w-app-content mx-auto flex w-full flex-col gap-6 px-4`, o, r), t[0] = r, t[1] = o, t[2] = s) : s = t[2];
    let c;
    return t[3] !== n || t[4] !== s ? (c = (0, R.jsx)(`div`, {
        className: s,
        children: n
    }), t[3] = n, t[4] = s, t[5] = c) : c = t[5], c
}

function O(e) {
    "use forget";
    let t = (0, F.c)(10),
        {
            tabs: n,
            activeTabId: r,
            ariaLabel: i,
            onTabChange: a
        } = e,
        o;
    if (t[0] !== r || t[1] !== a || t[2] !== n) {
        let e;
        t[4] !== r || t[5] !== a ? (e = e => {
            let t = e.id === r;
            return (0, R.jsx)(v, {
                type: `button`,
                role: `tab`,
                "aria-selected": t,
                active: t,
                className: `shrink-0 whitespace-nowrap`,
                onClick: () => a(e.id),
                children: e.label
            }, e.id)
        }, t[4] = r, t[5] = a, t[6] = e) : e = t[6], o = n.map(e), t[0] = r, t[1] = a, t[2] = n, t[3] = o
    } else o = t[3];
    let s;
    return t[7] !== i || t[8] !== o ? (s = (0, R.jsx)(`div`, {
        role: `tablist`,
        "aria-label": i,
        className: `no-scrollbar flex w-full min-w-0 flex-nowrap items-center gap-0 overflow-x-auto p-px md:flex-wrap md:overflow-visible`,
        children: o
    }), t[7] = i, t[8] = o, t[9] = s) : s = t[9], s
}

function k() {
    "use forget";
    let e = (0, F.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, R.jsxs)(`div`, {
        "aria-hidden": `true`,
        "data-testid": `plugin-source-tabs-placeholder`,
        className: `no-scrollbar flex w-full min-w-0 flex-nowrap items-center gap-4 overflow-hidden p-px`,
        children: [(0, R.jsx)(`div`, {
            className: `bg-token-bg-tertiary h-9 w-[72px] shrink-0 rounded-full`
        }), (0, R.jsx)(`div`, {
            className: `bg-token-bg-tertiary h-9 w-[72px] shrink-0 rounded-full`
        })]
    }), e[0] = t) : t = e[0], t
}

function A(e) {
    "use forget";
    let t = (0, F.c)(24),
        {
            activeTab: n,
            className: o
        } = e,
        c = g(),
        l = s(),
        u = (0, I.useId)(),
        f = r(),
        [p, m] = (0, I.useState)(n),
        h, _;
    t[0] === n ? (h = t[1], _ = t[2]) : (h = () => {
        m(n)
    }, _ = [n], t[0] = n, t[1] = h, t[2] = _), (0, I.useEffect)(h, _);
    let v;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (v = {
        id: `plugins`,
        label: (0, R.jsx)(d, {
            ...B.pluginsTab
        }),
        to: `/plugins`
    }, t[3] = v) : v = t[3];
    let y;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (y = [v, {
        id: `skills`,
        label: (0, R.jsx)(d, {
            ...B.skillsTab
        }),
        to: `/skills`
    }], t[4] = y) : y = t[4];
    let b = y,
        x;
    t[5] === c ? x = t[6] : (x = c.formatMessage(B.switcherLabel), t[5] = c, t[6] = x);
    let S;
    t[7] === o ? S = t[8] : (S = i(`flex justify-center`, o), t[7] = o, t[8] = S);
    let C;
    t[9] === c ? C = t[10] : (C = c.formatMessage(B.switcherLabel), t[9] = c, t[10] = C);
    let w;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, R.jsx)(`div`, {
        className: `bg-token-text-primary/3 pointer-events-none absolute inset-px rounded-full dark:bg-[#131313]`
    }), t[11] = w) : w = t[11];
    let T;
    t[12] !== p || t[13] !== u || t[14] !== l || t[15] !== f ? (T = (0, R.jsx)(`div`, {
        className: `relative grid h-full grid-cols-2 gap-0`,
        children: b.map(e => {
            let t = e.id === p;
            return (0, R.jsxs)(`div`, {
                className: `relative z-10 h-full rounded-full text-center font-medium`,
                children: [(0, R.jsx)(E, {
                    to: e.to,
                    state: l.state,
                    role: `tab`,
                    "aria-selected": t,
                    "aria-current": t ? `page` : void 0,
                    className: i(`box-border flex h-full w-full items-center justify-center rounded-[inherit] px-6 py-2 text-[14px]`, `focus-visible:ring-token-text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-1`, t ? `text-token-text-primary` : `text-token-text-secondary hover:text-token-text-primary`),
                    onClick: t => {
                        j(t) && e.id !== p && (0, L.flushSync)(() => m(e.id))
                    },
                    children: e.label
                }), t ? (0, R.jsx)(a.div, {
                    "data-testid": `ecosystem-directory-switcher-highlight`,
                    initial: !1,
                    layoutId: u,
                    transition: {
                        duration: f ? 0 : .05
                    },
                    className: `bg-token-bg-primary dark:bg-token-bg-elevated-primary absolute inset-0 -z-10 box-content h-full rounded-full border-[0.5px] border-[rgba(0,0,0,0.10)] shadow-[0_1px_6px_0_rgba(0,0,0,0.05)] dark:border-transparent dark:shadow-none`
                }) : null]
            }, e.id)
        })
    }), t[12] = p, t[13] = u, t[14] = l, t[15] = f, t[16] = T) : T = t[16];
    let D;
    t[17] !== C || t[18] !== T ? (D = (0, R.jsxs)(`div`, {
        role: `tablist`,
        "aria-label": C,
        className: `pointer-events-auto relative cursor-pointer rounded-full p-0 select-none`,
        children: [w, T]
    }), t[17] = C, t[18] = T, t[19] = D) : D = t[19];
    let O;
    return t[20] !== D || t[21] !== x || t[22] !== S ? (O = (0, R.jsx)(`nav`, {
        "aria-label": x,
        className: S,
        children: D
    }), t[20] = D, t[21] = x, t[22] = S, t[23] = O) : O = t[23], O
}

function j(e) {
    return !e.defaultPrevented && e.button === 0 && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey
}

function M(e) {
    "use forget";
    let t = (0, F.c)(32),
        {
            searchQuery: n,
            onSearchChange: r,
            placeholder: a,
            ariaLabel: o,
            clearLabel: s,
            className: c,
            inputId: l
        } = e,
        u = l === void 0 ? `directory-search` : l,
        [d, f] = (0, I.useState)(n),
        p = (0, I.useRef)(null),
        m = (0, I.useRef)(!1),
        h = b(d, z),
        g = d.length === 0 ? d : h,
        _;
    t[0] !== r || t[1] !== n ? (_ = e => {
        let t = p.current;
        e === t || t === null && e === n || (p.current = e, r(e))
    }, t[0] = r, t[1] = n, t[2] = _) : _ = t[2];
    let v = _,
        y = (0, I.useEffectEvent)(v),
        x, S;
    t[3] === n ? (x = t[4], S = t[5]) : (x = () => {
        if (n === p.current) {
            p.current = null;
            return
        }
        p.current = null, m.current = !0, f(n)
    }, S = [n], t[3] = n, t[4] = x, t[5] = S), (0, I.useEffect)(x, S);
    let C;
    t[6] !== y || t[7] !== g || t[8] !== d || t[9] !== n ? (C = () => {
        g === d && (g === n && (m.current = !1), !m.current && y(g))
    }, t[6] = y, t[7] = g, t[8] = d, t[9] = n, t[10] = C) : C = t[10];
    let T;
    t[11] !== g || t[12] !== d || t[13] !== n ? (T = [g, d, n], t[11] = g, t[12] = d, t[13] = n, t[14] = T) : T = t[14], (0, I.useEffect)(C, T);
    let E;
    t[15] === c ? E = t[16] : (E = i(`flex w-full min-w-0 items-center`, c), t[15] = c, t[16] = E);
    let D;
    t[17] !== v || t[18] !== d ? (D = e => {
        e.preventDefault(), m.current = !1, v(d)
    }, t[17] = v, t[18] = d, t[19] = D) : D = t[19];
    let O, k;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (k = e => f(e.target.value), O = () => f(``), t[20] = O, t[21] = k) : (O = t[20], k = t[21]);
    let A;
    t[22] !== o || t[23] !== s || t[24] !== u || t[25] !== a || t[26] !== d ? (A = (0, R.jsx)(w, {
        id: u,
        name: u,
        label: o,
        clearLabel: s,
        placeholder: a,
        value: d,
        onChange: k,
        onClear: O
    }), t[22] = o, t[23] = s, t[24] = u, t[25] = a, t[26] = d, t[27] = A) : A = t[27];
    let j;
    return t[28] !== A || t[29] !== E || t[30] !== D ? (j = (0, R.jsx)(`form`, {
        role: `search`,
        className: E,
        onSubmit: D,
        children: A
    }), t[28] = A, t[29] = E, t[30] = D, t[31] = j) : j = t[31], j
}

function N(e) {
    "use forget";
    let t = (0, F.c)(18),
        {
            itemNames: n,
            to: r,
            hasMore: i,
            iconPreviews: a,
            linkState: o,
            onLinkClick: s
        } = e,
        c = i !== void 0 && i,
        l = g();
    if (n.length === 0 && !c) return null;
    let u = Math.max(n.length - 2, 0),
        f;
    t[0] !== c || t[1] !== l || t[2] !== n || t[3] !== u ? (f = l.formatList(n.slice(0, 2), {
        style: u > 0 || c ? `narrow` : `long`,
        type: `conjunction`
    }), t[0] = c, t[1] = l, t[2] = n, t[3] = u, t[4] = f) : f = t[4];
    let p = f,
        m;
    t[5] === a ? m = t[6] : (m = a == null ? null : (0, R.jsx)(`span`, {
        "aria-hidden": `true`,
        className: `flex shrink-0 items-center pe-1`,
        children: a
    }), t[5] = a, t[6] = m);
    let h = n.length > 0,
        _;
    t[7] !== c || t[8] !== p || t[9] !== u || t[10] !== h ? (_ = (0, R.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: (0, R.jsx)(d, {
            id: `chatgpt.ecosystem.directory.section.overflow.link.label`,
            defaultMessage: `{hasNames, select, true {See {itemNames}{hasMore, select, true {, and more} other {{remainingCount, plural, =0 {} one {, and # more} other {, and # more}}}}} other {See more}}`,
            values: {
                hasNames: h,
                itemNames: p,
                hasMore: c,
                remainingCount: u
            }
        })
    }), t[7] = c, t[8] = p, t[9] = u, t[10] = h, t[11] = _) : _ = t[11];
    let v;
    return t[12] !== o || t[13] !== s || t[14] !== m || t[15] !== _ || t[16] !== r ? (v = (0, R.jsxs)(E, {
        to: r,
        state: o,
        onClick: s,
        className: `interactive-button text-token-text-secondary hover:text-token-text-primary focus-visible:ring-token-text-primary -ms-2 mt-4 flex min-h-12 w-full items-center gap-3 rounded-2xl px-2 py-2 text-start text-sm outline-none focus-visible:ring-1 focus-visible:ring-offset-1`,
        children: [m, _]
    }), t[12] = o, t[13] = s, t[14] = m, t[15] = _, t[16] = r, t[17] = v) : v = t[17], v
}

function P(e) {
    "use forget";
    let t = (0, F.c)(13),
        {
            title: n,
            isLoading: r,
            titleUrl: a,
            titleLinkState: o,
            onTitleLinkClick: s,
            onTitleLinkIntent: c,
            isLinkDisabled: l,
            className: u
        } = e,
        d = r !== void 0 && r,
        f = l !== void 0 && l,
        p;
    t[0] === u ? p = t[1] : (p = i(`pb-2`, u), t[0] = u, t[1] = p);
    let m;
    t[2] !== f || t[3] !== d || t[4] !== s || t[5] !== c || t[6] !== n || t[7] !== o || t[8] !== a ? (m = (0, R.jsx)(`div`, {
        className: `flex items-center justify-between gap-4`,
        children: (0, R.jsx)(`div`, {
            className: `min-w-0`,
            children: d ? (0, R.jsx)(`div`, {
                className: `flex h-5 items-center`,
                "data-testid": `directory-section-heading-skeleton`,
                children: (0, R.jsx)(`div`, {
                    className: `bg-token-bg-tertiary h-3.5 w-24 rounded-md`
                })
            }) : a && !f ? (0, R.jsx)(`h2`, {
                className: `text-token-text-primary text-sm leading-5 font-medium`,
                children: (0, R.jsxs)(E, {
                    to: a,
                    state: o,
                    onClick: s,
                    onMouseEnter: c,
                    onFocus: c,
                    className: `group inline-flex min-w-0 cursor-pointer items-center gap-0.5 transition-[gap] duration-200 ease-out hover:gap-1 focus-visible:gap-1 motion-reduce:transition-none`,
                    children: [(0, R.jsx)(`span`, {
                        className: `truncate`,
                        children: n
                    }), (0, R.jsx)(S, {
                        className: `text-token-text-tertiary group-hover:text-token-text-primary group-focus-visible:text-token-text-primary h-4 w-4 shrink-0 transition-colors duration-200 ease-out motion-reduce:transition-none`
                    })]
                })
            }) : (0, R.jsx)(`h2`, {
                className: `text-token-text-primary text-sm leading-5 font-medium`,
                children: n
            })
        })
    }), t[2] = f, t[3] = d, t[4] = s, t[5] = c, t[6] = n, t[7] = o, t[8] = a, t[9] = m) : m = t[9];
    let h;
    return t[10] !== p || t[11] !== m ? (h = (0, R.jsx)(`div`, {
        className: p,
        children: m
    }), t[10] = p, t[11] = m, t[12] = h) : h = t[12], h
}
var F, I, L, R, z, B, V = e((() => {
    F = h(), T(), x(), C(), _(), y(), o(), n(), I = t(m()), L = t(l()), p(), f(), R = c(), z = 300, B = u({
        switcherLabel: {
            id: `chatgpt.ecosystem.directory.switcher.aria_label`,
            defaultMessage: `Directory type`
        },
        pluginsTab: {
            id: `chatgpt.ecosystem.directory.switcher.plugins.label`,
            defaultMessage: `Plugins`
        },
        skillsTab: {
            id: `chatgpt.ecosystem.directory.switcher.skills.label`,
            defaultMessage: `Skills`
        }
    })
}));
export {
    O as a, V as c, N as i, M as n, A as o, P as r, k as s, D as t
};
//# sourceMappingURL=9d41ef43-l0txvfcnwoeg95jt.js.map