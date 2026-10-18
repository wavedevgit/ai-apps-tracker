import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    Ji as r,
    Xi as i,
    b5 as a,
    kT as o,
    vN as s,
    y5 as c,
    yN as l
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as u,
    Bn as d,
    In as f,
    Ln as p,
    Nn as m,
    Rn as h,
    Vn as g,
    at as _,
    wn as v,
    zn as y
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Ojt as b,
    dat as x,
    fat as S,
    kjt as C
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Ex as w,
    Ey as T,
    Tx as E,
    Ty as D
} from "./30901919-e33mbl5u1y88w5wu.js";

function O(e, t) {
    let n = new Map;
    for (let t of e)
        for (let e of t.categories) {
            let r = n.get(e.id);
            r || (r = {
                ...e,
                providers: []
            }, n.set(e.id, r)), r.providers.some(e => e.id === t.id) || r.providers.push(t)
        }
    return [...n.values()].sort((e, n) => e.label.localeCompare(n.label, t))
}

function k(e, t, n, r) {
    if (e.reduce((e, t) => e + t, 0) + Math.max(0, e.length - 1) * r <= t) return e.length;
    let i = n,
        a = 0;
    for (let n of e) {
        if (i + r + n > t) break;
        i += r + n, a++
    }
    return a
}
var A = e((() => {}));

function j(e) {
    return !e
}

function M(e) {
    return e.getBoundingClientRect().width
}

function N(e) {
    return e.providers.length > 0
}
var P, F, I, L, R, z, B, V, H, U = e((() => {
    P = v(), C(), w(), x(), s(), a(), F = t(g()), h(), u(), A(), I = d(), L = `inline-flex h-8 shrink-0 items-center gap-1 rounded-full border ps-2 pe-3 text-sm whitespace-nowrap`, R = f({
        id: `plugins.dependencies.overflow.count`,
        defaultMessage: `+{count, number}`
    }), z = e => {
        "use forget";
        let t = (0, P.c)(22),
            {
                provider: n,
                userHoverStates: r,
                nameRef: i
            } = e,
            a = n.name,
            o = n.iconUrl,
            s = n.iconUrlDark,
            l = n.muted && (r ? `opacity-40` : `opacity-50`),
            u = r && n.muted && `grayscale`,
            d;
        t[0] !== l || t[1] !== u ? (d = c(`size-5! [&_svg]:size-4!`, l, u), t[0] = l, t[1] = u, t[2] = d) : d = t[2];
        let f;
        t[3] !== n.iconUrl || t[4] !== n.iconUrlDark || t[5] !== n.name || t[6] !== d ? (f = (0, I.jsx)(S, {
            name: a,
            iconUrl: o,
            iconDarkUrl: s,
            variant: `inline`,
            className: d,
            isNextToLabel: !0
        }), t[3] = n.iconUrl, t[4] = n.iconUrlDark, t[5] = n.name, t[6] = d, t[7] = f) : f = t[7];
        let p = n.muted && (r ? `text-token-text-tertiary` : `text-token-text-secondary`),
            m;
        t[8] === p ? m = t[9] : (m = c(`truncate`, p), t[8] = p, t[9] = m);
        let h;
        t[10] !== i || t[11] !== n.name || t[12] !== m ? (h = (0, I.jsx)(`span`, {
            ref: i,
            className: m,
            children: n.name
        }), t[10] = i, t[11] = n.name, t[12] = m, t[13] = h) : h = t[13];
        let g;
        t[14] !== n.isInstalled || t[15] !== n.muted || t[16] !== r ? (g = r && n.isInstalled && !n.muted && (0, I.jsx)(E, {
            className: `icon-sm text-token-text-tertiary shrink-0`,
            "aria-hidden": `true`
        }), t[14] = n.isInstalled, t[15] = n.muted, t[16] = r, t[17] = g) : g = t[17];
        let _;
        return t[18] !== h || t[19] !== g || t[20] !== f ? (_ = (0, I.jsxs)(I.Fragment, {
            children: [f, h, g]
        }), t[18] = h, t[19] = g, t[20] = f, t[21] = _) : _ = t[21], _
    }, B = e => {
        "use forget";
        let t = (0, P.c)(23),
            {
                provider: n,
                userHoverStates: r
            } = e,
            i = y(),
            [a, o] = (0, F.useState)(!1),
            s = (0, F.useRef)(!1),
            u = (0, F.useRef)(null),
            [d, f] = (0, F.useState)(!1),
            p = !r || n.muted ? n.statusLabel : void 0,
            m;
        t[0] !== i || t[1] !== n.name || t[2] !== p ? (m = p ? i.formatMessage({
            id: `plugins.dependencies.chip.accessible_label`,
            defaultMessage: `{name}, {status}`
        }, {
            name: n.name,
            status: p
        }) : n.name, t[0] = i, t[1] = n.name, t[2] = p, t[3] = m) : m = t[3];
        let h = m,
            g = d ? h : p,
            v = r && !!g,
            x = n.href ? `a` : v ? `button` : `span`,
            S, C;
        t[4] === a ? (S = t[5], C = t[6]) : (S = () => {
            let e = u.current?.parentElement;
            if (!a || !e) return;
            let t = t => {
                    t.composedPath().includes(e) || o(!1)
                },
                n = e.ownerDocument;
            return n.addEventListener(`pointerdown`, t, !0), () => {
                n.removeEventListener(`pointerdown`, t, !0)
            }
        }, C = [a], t[4] = a, t[5] = S, t[6] = C), (0, F.useEffect)(S, C);
        let w;
        t[7] !== p || t[8] !== r ? (w = () => {
            let e = u.current;
            if (!r || !e) return;
            let t = () => {
                let t = e.scrollWidth > e.clientWidth;
                f(t), !t && !p && o(!1)
            };
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect()
        }, t[7] = p, t[8] = r, t[9] = w) : w = t[9];
        let T;
        t[10] !== x || t[11] !== n.name || t[12] !== p || t[13] !== r ? (T = [n.name, p, r, x], t[10] = x, t[11] = n.name, t[12] = p, t[13] = r, t[14] = T) : T = t[14], l(w, T);
        let E;
        if (t[15] !== x || t[16] !== v || t[17] !== h || t[18] !== n || t[19] !== a || t[20] !== g || t[21] !== r) {
            let e = c(L, `max-w-full`, r && `interactive-button interactive-outline-secondary focus-visible:outline-token-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2`, r && (n.muted ? `interactive-button-muted` : `border-token-border-light bg-token-bg-primary text-token-text-primary hover:bg-token-bg-secondary`)),
                i = x === `button` ? `button` : `span`,
                l = t => n.href ? (0, I.jsx)(_, {
                    ...t,
                    to: n.href,
                    state: n.navigationState,
                    "aria-label": r ? n.name : h,
                    "aria-description": r ? n.statusLabel : void 0,
                    title: r ? void 0 : h,
                    className: c(e, `interactive-button interactive-outline-secondary`, !r && `interactive-button-secondary`),
                    children: (0, I.jsx)(z, {
                        provider: n,
                        userHoverStates: r,
                        nameRef: u
                    })
                }) : (0, I.jsx)(i, {
                    ...t,
                    ref: e => {
                        if (e) return s.current && e.focus(), s.current = !1, () => {
                            s.current = e === e.ownerDocument.activeElement
                        }
                    },
                    type: v ? `button` : void 0,
                    "data-dependency-chip": !0,
                    "data-state": a ? `open` : void 0,
                    tabIndex: v ? 0 : -1,
                    onClick: v ? () => o(j) : void 0,
                    onBlur: () => o(!1),
                    onKeyDown: e => {
                        r && e.key === `Escape` && o(!1)
                    },
                    className: c(e, !r && `border-token-border-light bg-token-bg-primary text-token-text-primary`),
                    title: r ? void 0 : h,
                    "aria-label": r ? n.name : h,
                    "aria-description": r ? n.statusLabel : void 0,
                    children: (0, I.jsx)(z, {
                        provider: n,
                        userHoverStates: r,
                        nameRef: u
                    })
                });
            E = r ? (0, I.jsx)(b, {
                content: g,
                disabled: !g,
                showOnTouch: !n.href,
                forceOpen: a,
                children: l
            }) : l(), t[15] = x, t[16] = v, t[17] = h, t[18] = n, t[19] = a, t[20] = g, t[21] = r, t[22] = E
        } else E = t[22];
        return E
    }, V = e => {
        "use forget";
        let t = (0, P.c)(88),
            {
                group: n,
                userHoverStates: r
            } = e,
            i = y(),
            a = (0, F.useId)(),
            o = (0, F.useRef)(null),
            s = (0, F.useRef)(null),
            u = (0, F.useRef)(null),
            d = (0, F.useRef)(null),
            f = (0, F.useRef)(null),
            [p, m] = (0, F.useState)(0),
            [h, g] = (0, F.useState)(!1),
            {
                providers: _
            } = n,
            v;
        t[0] !== h || t[1] !== _.length ? (v = () => {
            let e = o.current,
                t = s.current;
            if (!e || !t) return;
            let n = () => {
                let n = [...t.children],
                    r = n.pop();
                if (!r) return;
                let i = k(n.map(M), e.getBoundingClientRect().width, r.getBoundingClientRect().width, parseFloat(getComputedStyle(e).columnGap) || 0),
                    a = [...e.querySelectorAll(`:scope > a, :scope > span, :scope > button[data-dependency-chip]`)].findIndex(t => t === e.ownerDocument.activeElement);
                !h && a >= i && a >= 0 ? d.current = `overflow` : !h && i === _.length && e.ownerDocument.activeElement === u.current && (d.current = `row`), m(i)
            };
            n();
            let r = new ResizeObserver(n);
            r.observe(e);
            for (let e of t.children) r.observe(e);
            return () => r.disconnect()
        }, t[0] = h, t[1] = _.length, t[2] = v) : v = t[2];
        let b;
        t[3] !== h || t[4] !== _ ? (b = [_, h], t[3] = h, t[4] = _, t[5] = b) : b = t[5], l(v, b);
        let x;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (x = () => {
            let e = f.current;
            f.current = null, e != null && (o.current?.querySelectorAll(`:scope > a, :scope > span, :scope > button[data-dependency-chip]`)?.[e] ?? u.current)?.focus();
            let t = d.current;
            if (d.current = null, t === `overflow` && u.current?.focus(), t === `row`) {
                let e = o.current;
                (e?.querySelector(`a`) ?? e)?.focus()
            }
        }, t[6] = x) : x = t[6];
        let S;
        t[7] !== h || t[8] !== p ? (S = [p, h], t[7] = h, t[8] = p, t[9] = S) : S = t[9], l(x, S);
        let C;
        t[10] !== h || t[11] !== _.length || t[12] !== p ? (C = e => {
            h && !e && (d.current = p < _.length ? `overflow` : `row`), e ? f.current = p : p === _.length && u.current === o.current?.ownerDocument.activeElement && (d.current = `row`), g(e)
        }, t[10] = h, t[11] = _.length, t[12] = p, t[13] = C) : C = t[13];
        let w = C,
            T, E, D, O, A, j, N, z, V, H, U, W;
        if (t[14] !== w || t[15] !== n.label || t[16] !== i || t[17] !== a || t[18] !== h || t[19] !== _ || t[20] !== r || t[21] !== p) {
            let e = _.slice(0, h ? _.length : p);
            T = _.length - e.length;
            let s;
            t[34] !== n.label || t[35] !== T || t[36] !== i ? (s = i.formatMessage({
                id: `plugins.dependencies.overflow.label`,
                defaultMessage: `{count, plural, one {Show # more plugin in {category}} other {Show # more plugins in {category}}}`
            }, {
                count: T,
                category: n.label
            }), t[34] = n.label, t[35] = T, t[36] = i, t[37] = s) : s = t[37], E = s;
            let l = h ? `items-start` : `items-center`;
            t[38] === l ? N = t[39] : (N = c(`grid min-w-0 grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-4 sm:grid-cols-[131px_minmax(0,1fr)]`, l), t[38] = l, t[39] = N), t[40] !== n.label || t[41] !== a ? (z = (0, I.jsx)(`dt`, {
                id: a,
                className: `text-token-text-secondary text-sm break-words`,
                children: n.label
            }), t[40] = n.label, t[41] = a, t[42] = z) : z = t[42], j = `relative min-w-0`, V = o, H = `group`, U = -1;
            let u = h && `flex-wrap`;
            t[43] === u ? W = t[44] : (W = c(`flex min-w-0 items-center gap-2`, u), t[43] = u, t[44] = W), t[45] !== w || t[46] !== h ? (D = e => {
                h && e.key === `Escape` && (e.preventDefault(), w(!1))
            }, t[45] = w, t[46] = h, t[47] = D) : D = t[47], O = a;
            let d;
            t[48] === r ? d = t[49] : (d = e => (0, I.jsx)(B, {
                provider: e,
                userHoverStates: r
            }, e.id), t[48] = r, t[49] = d), A = e.map(d), t[14] = w, t[15] = n.label, t[16] = i, t[17] = a, t[18] = h, t[19] = _, t[20] = r, t[21] = p, t[22] = T, t[23] = E, t[24] = D, t[25] = O, t[26] = A, t[27] = j, t[28] = N, t[29] = z, t[30] = V, t[31] = H, t[32] = U, t[33] = W
        } else T = t[22], E = t[23], D = t[24], O = t[25], A = t[26], j = t[27], N = t[28], z = t[29], V = t[30], H = t[31], U = t[32], W = t[33];
        let G;
        t[50] !== w || t[51] !== n.label || t[52] !== T || t[53] !== i || t[54] !== h || t[55] !== E ? (G = (T > 0 || h) && (0, I.jsx)(I.Fragment, {
            children: (0, I.jsx)(`button`, {
                ref: u,
                type: `button`,
                "aria-label": h ? i.formatMessage({
                    id: `plugins.dependencies.overflow.collapse_label`,
                    defaultMessage: `Show fewer plugins in {category}`
                }, {
                    category: n.label
                }) : E,
                "aria-expanded": h,
                onClick: () => w(!h),
                onKeyDown: e => {
                    e.key === `Escape` && w(!1)
                },
                className: c(L, `interactive-button interactive-button-secondary interactive-outline-secondary px-3 tabular-nums`),
                children: h ? i.formatMessage({
                    id: `plugins.dependencies.overflow.collapse`,
                    defaultMessage: `Show less`
                }) : i.formatMessage(R, {
                    count: T
                })
            })
        }), t[50] = w, t[51] = n.label, t[52] = T, t[53] = i, t[54] = h, t[55] = E, t[56] = G) : G = t[56];
        let K;
        t[57] !== D || t[58] !== O || t[59] !== A || t[60] !== G || t[61] !== V || t[62] !== H || t[63] !== U || t[64] !== W ? (K = (0, I.jsxs)(`div`, {
            ref: V,
            role: H,
            tabIndex: U,
            className: W,
            onKeyDown: D,
            "aria-labelledby": O,
            children: [A, G]
        }), t[57] = D, t[58] = O, t[59] = A, t[60] = G, t[61] = V, t[62] = H, t[63] = U, t[64] = W, t[65] = K) : K = t[65];
        let q;
        if (t[66] !== _ || t[67] !== r) {
            let e;
            t[69] === r ? e = t[70] : (e = e => (0, I.jsxs)(`span`, {
                className: L,
                children: [(0, I.jsx)(`span`, {
                    className: `size-5 shrink-0`
                }), (0, I.jsx)(`span`, {
                    children: e.name
                }), r && e.isInstalled && !e.muted && (0, I.jsx)(`span`, {
                    className: `size-4 shrink-0`
                })]
            }, e.id), t[69] = r, t[70] = e), q = _.map(e), t[66] = _, t[67] = r, t[68] = q
        } else q = t[68];
        let J;
        t[71] === Symbol.for(`react.memo_cache_sentinel`) ? (J = c(L, `px-3 tabular-nums`), t[71] = J) : J = t[71];
        let Y;
        t[72] !== i || t[73] !== _.length ? (Y = i.formatMessage(R, {
            count: _.length
        }), t[72] = i, t[73] = _.length, t[74] = Y) : Y = t[74];
        let X;
        t[75] === Y ? X = t[76] : (X = (0, I.jsx)(`span`, {
            className: J,
            children: Y
        }), t[75] = Y, t[76] = X);
        let Z;
        t[77] !== q || t[78] !== X ? (Z = (0, I.jsxs)(`div`, {
            ref: s,
            "aria-hidden": `true`,
            inert: !0,
            className: `pointer-events-none invisible absolute inset-x-0 top-0 flex h-0 items-center gap-2 overflow-hidden`,
            children: [q, X]
        }), t[77] = q, t[78] = X, t[79] = Z) : Z = t[79];
        let Q;
        t[80] !== j || t[81] !== K || t[82] !== Z ? (Q = (0, I.jsxs)(`dd`, {
            className: j,
            children: [K, Z]
        }), t[80] = j, t[81] = K, t[82] = Z, t[83] = Q) : Q = t[83];
        let $;
        return t[84] !== N || t[85] !== z || t[86] !== Q ? ($ = (0, I.jsxs)(`div`, {
            className: N,
            children: [z, Q]
        }), t[84] = N, t[85] = z, t[86] = Q, t[87] = $) : $ = t[87], $
    }, H = e => {
        "use forget";
        let t = (0, P.c)(10),
            {
                groups: n,
                userHoverStates: r
            } = e,
            i = r !== void 0 && r,
            a, o, s;
        if (t[0] !== n || t[1] !== i) {
            s = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = n.filter(N);
                if (e.length === 0) {
                    s = null;
                    break bb0
                }
                a = `space-y-3 py-3`;
                let r;t[5] === i ? r = t[6] : (r = e => (0, I.jsx)(V, {
                    group: e,
                    userHoverStates: i
                }, e.id), t[5] = i, t[6] = r),
                o = e.map(r)
            }
            t[0] = n, t[1] = i, t[2] = a, t[3] = o, t[4] = s
        } else a = t[2], o = t[3], s = t[4];
        if (s !== Symbol.for(`react.early_return_sentinel`)) return s;
        let c;
        return t[7] !== a || t[8] !== o ? (c = (0, I.jsx)(`dl`, {
            className: a,
            children: o
        }), t[7] = a, t[8] = o, t[9] = c) : c = t[9], c
    }
}));

function W(e) {
    let t = e => e.metadata.type === `stdio` || e.metadata.type == null && typeof e.metadata.command == `string`;
    return {
        directMcpServers: e.filter(e => !t(e)),
        stdioMcpServers: e.filter(t)
    }
}
var G, K = e((() => {
        h(), G = p({
            directHeading: {
                id: `chatgpt.plugins.details.mcp.direct.heading`,
                defaultMessage: `MCP Servers`
            },
            stdioHeading: {
                id: `chatgpt.plugins.details.mcp.stdio.heading`,
                defaultMessage: `{serverCount, plural, one {Local MCP Server (STDIO)} other {Local MCP Servers (STDIO)}}`
            }
        })
    })),
    q, J, Y, X, Z = e((() => {
        q = v(), n(), i(), D(), C(), h(), J = d(), Y = e => {
            "use forget";
            let t = (0, q.c)(20),
                {
                    canShare: n,
                    isEditing: i,
                    editDisabledTooltip: a,
                    onEdit: s,
                    onShare: c,
                    onRetry: l,
                    icon: u
                } = e,
                d = i !== void 0 && i,
                f = y(),
                p = !n && l == null,
                h = l == null ? X.migrationSharePlugin : X.migrationShareRetry,
                g;
            t[0] === u ? g = t[1] : (g = u === void 0 ? (0, J.jsx)(T, {
                "aria-hidden": `true`,
                className: `icon text-token-text-secondary shrink-0`
            }) : u, t[0] = u, t[1] = g);
            let _;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, J.jsx)(m, {
                id: `chatgpt.plugins.details.gpt_migration.sharing_notice.success.title`,
                defaultMessage: `Your plugin was successfully migrated`
            }), t[2] = _) : _ = t[2];
            let v;
            t[3] !== n || t[4] !== c ? (v = !n || c == null ? (0, J.jsx)(m, {
                id: `chatgpt.plugins.details.gpt_migration.sharing_notice.description.without_sharing`,
                defaultMessage: `Review and test your migrated plugin`
            }) : (0, J.jsx)(m, {
                id: `chatgpt.plugins.details.gpt_migration.sharing_notice.description`,
                defaultMessage: `Review and test your migrated plugin, then share it when you're ready.`
            }), t[3] = n, t[4] = c, t[5] = v) : v = t[5];
            let x;
            t[6] !== n || t[7] !== a || t[8] !== f || t[9] !== d || t[10] !== p || t[11] !== s || t[12] !== l || t[13] !== c || t[14] !== h ? (x = s || c ? (0, J.jsxs)(`div`, {
                className: `flex flex-wrap items-center gap-2`,
                children: [s && (0, J.jsx)(b, {
                    disabled: a == null,
                    content: a,
                    contentLayout: `multi-line`,
                    children: e => (0, J.jsx)(o, {
                        ...e,
                        type: `button`,
                        color: `primary`,
                        className: `shrink-0`,
                        loading: d,
                        "aria-label": f.formatMessage(X.migrationEditPlugin),
                        "aria-disabled": a != null,
                        visuallyDisabled: a != null,
                        onClick: e => {
                            if (a != null) {
                                e.preventDefault();
                                return
                            }
                            s()
                        },
                        children: (0, J.jsx)(m, {
                            ...X.migrationEditPlugin
                        })
                    })
                }), c && (0, J.jsx)(b, {
                    disabled: !p,
                    content: (0, J.jsx)(m, {
                        id: `chatgpt.plugins.details.gpt_migration.sharing_notice.button.disabled_tooltip.sharing_unavailable`,
                        defaultMessage: `Plugin sharing isn't enabled for your role or workspace`
                    }),
                    children: e => (0, J.jsx)(o, {
                        ...e,
                        type: `button`,
                        color: `secondary`,
                        className: `shrink-0`,
                        "aria-label": f.formatMessage(h),
                        "aria-disabled": p,
                        visuallyDisabled: p,
                        onClick: e => {
                            if (l != null) {
                                l();
                                return
                            }
                            if (!n) {
                                e.preventDefault();
                                return
                            }
                            c()
                        },
                        children: (0, J.jsx)(m, {
                            ...h
                        })
                    })
                })]
            }) : void 0, t[6] = n, t[7] = a, t[8] = f, t[9] = d, t[10] = p, t[11] = s, t[12] = l, t[13] = c, t[14] = h, t[15] = x) : x = t[15];
            let S;
            return t[16] !== g || t[17] !== v || t[18] !== x ? (S = (0, J.jsx)(r, {
                type: `normal`,
                icon: g,
                titleClassName: `font-medium`,
                title: _,
                content: v,
                customCtas: x
            }), t[16] = g, t[17] = v, t[18] = x, t[19] = S) : S = t[19], S
        }, X = p({
            migrationShareRetry: {
                id: `chatgpt.plugins.details.gpt_migration.sharing_notice.button.retry`,
                defaultMessage: `Couldn't load sharing. Retry`
            },
            migrationEditPlugin: {
                id: `chatgpt.plugins.details.gpt_migration.sharing_notice.button.edit`,
                defaultMessage: `Edit plugin`
            },
            migrationSharePlugin: {
                id: `chatgpt.plugins.details.gpt_migration.sharing_notice.button.label`,
                defaultMessage: `Share plugin`
            }
        })
    }));
export {
    G as a, O as c, K as i, A as l, Z as n, H as o, W as r, U as s, Y as t
};
//# sourceMappingURL=52668a57-g7z6idxhgq9tpqer.js.map