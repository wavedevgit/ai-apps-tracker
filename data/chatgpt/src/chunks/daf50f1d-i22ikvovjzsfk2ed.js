const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/fbf44c55-o2lsxc57nll08quu.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CN as n,
    Ch as r,
    Ow as i,
    X0 as a,
    X5 as o,
    Xy as s,
    Y5 as c,
    Z0 as l,
    Zy as u,
    aW as d,
    bN as f,
    iW as p,
    kw as m,
    xh as h
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as g,
    Kt as _,
    Rn as v,
    Vn as y,
    cn as b,
    ln as x,
    wn as S,
    zn as C
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    G7 as w,
    Gpn as T,
    Kpn as E,
    W7 as D,
    mfn as O,
    pfn as ee
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    n as k
} from "./d335a33e-o14cfyaeymryvgpo.js";
import {
    _ as A,
    a as j,
    c as M,
    d as N,
    f as P,
    g as te,
    h as ne,
    i as F,
    l as re,
    m as ie,
    n as ae,
    o as I,
    p as oe,
    r as se,
    s as ce,
    t as le,
    u as ue,
    v as de
} from "./e2a9a3b9-cfoojtenal73d9bh.js";

function fe(e) {
    var t = e.allowCreateWhileLoading,
        n = t !== void 0 && t,
        r = e.createOptionPosition,
        i = r === void 0 ? `last` : r,
        a = e.formatCreateLabel,
        o = a === void 0 ? B.formatCreateLabel : a,
        s = e.isValidNewOption,
        c = s === void 0 ? B.isValidNewOption : s,
        l = e.getNewOptionData,
        u = l === void 0 ? B.getNewOptionData : l,
        d = e.onCreateOption,
        f = e.options,
        p = f === void 0 ? [] : f,
        m = e.onChange,
        h = ne(e, R),
        g = h.getOptionValue,
        _ = g === void 0 ? j : g,
        v = h.getOptionLabel,
        y = v === void 0 ? F : v,
        b = h.inputValue,
        x = h.isLoading,
        S = h.isMulti,
        C = h.value,
        w = h.name,
        T = (0, L.useMemo)(function() {
            return c(b, ce(C), p, {
                getOptionValue: _,
                getOptionLabel: y
            }) ? u(b, o(b)) : void 0
        }, [o, u, y, _, b, c, p, C]),
        E = (0, L.useMemo)(function() {
            return (n || !x) && T ? i === `first` ? [T].concat(N(p)) : [].concat(N(p), [T]) : p
        }, [n, i, x, T, p]),
        D = (0, L.useCallback)(function(e, t) {
            if (t.action !== `select-option`) return m(e, t);
            var n = Array.isArray(e) ? e : [e];
            if (n[n.length - 1] === T) {
                if (d) d(b);
                else {
                    var r = u(b, b),
                        i = {
                            action: `create-option`,
                            name: w,
                            option: r
                        };
                    m(ue(S, [].concat(N(ce(C)), [r]), r), i)
                }
                return
            }
            m(e, t)
        }, [u, b, S, w, T, d, m, C]);
    return A(A({}, h), {}, {
        options: E,
        onChange: D
    })
}
var L, R, z, B, pe = e((() => {
        de(), P(), te(), L = t(y()), re(), I(), R = [`allowCreateWhileLoading`, `createOptionPosition`, `formatCreateLabel`, `isValidNewOption`, `getNewOptionData`, `onCreateOption`, `options`, `onChange`], z = function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ``,
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = String(e).toLowerCase(),
                i = String(n.getOptionValue(t)).toLowerCase(),
                a = String(n.getOptionLabel(t)).toLowerCase();
            return i === r || a === r
        }, B = {
            formatCreateLabel: function(e) {
                return `Create "${e}"`
            },
            isValidNewOption: function(e, t, n, r) {
                return !(!e || t.some(function(t) {
                    return z(e, t, r)
                }) || n.some(function(t) {
                    return z(e, t, r)
                }))
            },
            getNewOptionData: function(e, t) {
                return {
                    label: t,
                    value: e,
                    __isNew__: !0
                }
            }
        }
    })),
    V, H, U, me = e((() => {
        d(), V = t(y()), H = t(y()), I(), oe(), pe(), _(), k(), U = (0, H.forwardRef)(function(e, t) {
            var n = fe(ie(e));
            return V.createElement(se, p({
                ref: t
            }, n))
        })
    }));

function W({
    value: e,
    onChange: t,
    ariaLabel: n,
    closeMenuOnSelect: r = !1,
    disabled: a = !1,
    inputId: o,
    name: l,
    options: u,
    onSearch: d,
    placeholder: f,
    trailingComponent: p,
    isLoading: m,
    menuIsOpen: h,
    menuPlacement: g,
    maxMenuHeight: _,
    onMenuOpen: v,
    blurInputOnSelect: y,
    classNames: b,
    noOptionsMessage: x,
    loadingMessage: S,
    inputValue: w,
    onKeyDown: T,
    showOptionAvatars: E = !1,
    getMultiValueConfig: O
}) {
    let k = C(),
        A = k.formatMessage({
            id: `F+GhgL`,
            defaultMessage: `People outside of your workspace cannot be added`
        }),
        j = (0, K.useRef)(O);
    j.current = O;
    let N = (0, K.useRef)(E);
    N.current = E;
    let P = (0, K.useRef)(p);
    P.current = p;
    let te = (0, K.useRef)(e => (0, q.jsx)(M.IndicatorsContainer, {
            ...e,
            children: P.current
        })).current,
        ne = (0, K.useRef)(e => {
            let t = e.data,
                n = j.current?.(t),
                r = n?.tone ?? `default`,
                a = n?.removeOnChipClick ?? !0,
                o = n?.label ?? e.children,
                l = n?.showAvatar ? (0, q.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `shrink-0`,
                    children: (0, q.jsx)(Q, {
                        option: t
                    })
                }) : null,
                u = e.removeProps,
                d = {
                    danger: `bg-token-bg-status-error text-token-interactive-label-danger-secondary-default border-token-interactive-border-danger-secondary-default`,
                    default: `text-token-text-primary bg-token-bg-tertiary border-transparent hover:bg-token-bg-secondary hover-border-token-border-light`
                },
                f = c(`m-1 rounded-md border px-1.5 py-1 text-sm transition-colors`, a ? `cursor-pointer` : `cursor-default`, d[r] ?? d.default, e.isFocused && n?.selectedClassName, n?.className),
                p = a ? (0, q.jsx)(`div`, {
                    className: f,
                    role: `button`,
                    tabIndex: 0,
                    ...e.removeProps,
                    children: (0, q.jsxs)(`span`, {
                        className: `flex min-w-0 items-center gap-1`,
                        children: [n?.leadingIcon, l, (0, q.jsx)(`span`, {
                            className: `min-w-0`,
                            children: o
                        }), n?.trailingIcon, (0, q.jsx)(i, {
                            className: `icon-sm`
                        })]
                    })
                }) : (0, q.jsx)(`div`, {
                    className: f,
                    role: n?.popover ? `button` : void 0,
                    tabIndex: n?.popover ? 0 : void 0,
                    children: (0, q.jsxs)(`span`, {
                        className: `flex min-w-0 items-center gap-1`,
                        children: [n?.leadingIcon, l, (0, q.jsx)(`span`, {
                            className: `min-w-0`,
                            children: o
                        }), n?.trailingIcon, (0, q.jsx)(`button`, {
                            type: `button`,
                            className: `inline-flex cursor-pointer items-center border-0 bg-transparent p-0`,
                            ...u,
                            onClick: e => {
                                e.stopPropagation(), u.onClick?.(e)
                            },
                            onPointerDown: e => {
                                e.stopPropagation(), u.onPointerDown?.(e)
                            },
                            children: (0, q.jsx)(i, {
                                className: `icon-sm`
                            })
                        })]
                    })
                });
            return n?.popover ? (0, q.jsx)(M.MultiValue, {
                ...e,
                children: (0, q.jsx)(D, {
                    triggerButton: p,
                    size: `none`,
                    className: `overflow-visible! rounded-3xl p-0 shadow-none!`,
                    sideOffset: 4,
                    disableAutofocus: !0,
                    contentAriaLabel: n.popoverAriaLabel,
                    children: n.popover
                })
            }) : n?.tooltip ? (0, q.jsx)(M.MultiValue, {
                ...e,
                children: (0, q.jsx)(s, {
                    label: n.tooltip,
                    side: `top`,
                    delayDuration: 150,
                    children: p
                })
            }) : (0, q.jsx)(M.MultiValue, {
                ...e,
                children: p
            })
        }).current,
        F = (0, K.useRef)(e => (0, q.jsx)(ye, {
            ...e,
            showOptionAvatars: N.current
        })).current;
    return {
        className: `react-select-container min-w-0`,
        classNamePrefix: `react-select`,
        isMulti: !0,
        isDisabled: a,
        isClearable: !1,
        isLoading: m,
        inputId: o,
        name: l,
        menuIsOpen: h,
        menuPlacement: g,
        maxMenuHeight: _,
        options: u,
        value: e,
        classNames: b,
        inputValue: w,
        "aria-label": n,
        getOptionValue: e => `${e.kind}:${e.id}`,
        getOptionLabel: e => e.label,
        onChange: e => t(e),
        onInputChange: (e, t) => {
            t.action !== `menu-close` && t.action !== `input-blur` && d(e, t)
        },
        placeholder: f,
        openMenuOnFocus: !0,
        openMenuOnClick: !0,
        hideSelectedOptions: !1,
        closeMenuOnSelect: r,
        backspaceRemovesValue: !0,
        controlShouldRenderValue: !0,
        components: (0, K.useRef)({
            DropdownIndicator: Y,
            ClearIndicator: Y,
            IndicatorsContainer: te,
            MultiValue: ne,
            Option: F,
            MultiValueRemove: Y
        }).current,
        formatOptionLabel: (e, t) => $(e, t, E),
        noOptionsMessage: e => x ? x(e) : A,
        loadingMessage: e => S ? S(e) : k.formatMessage(ee.loading),
        filterOption: (e, t) => e.data.label.toLowerCase().includes(t.toLowerCase()) || (e.data.sublabel ?? ``).toLowerCase().includes(t.toLowerCase()),
        onKeyDown: T,
        onMenuOpen: v,
        blurInputOnSelect: y
    }
}

function he(e) {
    "use forget";
    let t = (0, G.c)(2),
        n = W(e),
        r;
    return t[0] === n ? r = t[1] : (r = (0, q.jsx)(le, {
        ...n
    }), t[0] = n, t[1] = r), r
}

function ge(e) {
    "use forget";
    let t = (0, G.c)(16),
        n, r, i, a, o;
    t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5]) : ({
        onCreateOption: a,
        isValidNewOption: i,
        formatCreateLabel: n,
        getMultiValueConfig: r,
        ...o
    } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o);
    let s;
    t[6] !== r || t[7] !== o ? (s = {
        ...o,
        getMultiValueConfig: r
    }, t[6] = r, t[7] = o, t[8] = s) : s = t[8];
    let c = W(s),
        l;
    t[9] === i ? l = t[10] : (l = (e, t, n) => i?.(e) ?? !0, t[9] = i, t[10] = l);
    let u;
    return t[11] !== c || t[12] !== n || t[13] !== a || t[14] !== l ? (u = (0, q.jsx)(U, {
        ...c,
        onCreateOption: a,
        isValidNewOption: l,
        formatCreateLabel: n
    }), t[11] = c, t[12] = n, t[13] = a, t[14] = l, t[15] = u) : u = t[15], u
}
var G, K, q, J, Y, X, _e, Z, ve, Q, $, ye, be = e((() => {
    G = S(), r(), u(), w(), m(), O(), f(), l(), o(), K = t(y()), v(), E(), ae(), me(), q = g(), x(), J = a(() => b(() => import(`./fbf44c55-o2lsxc57nll08quu.js`).then(e => e.DirectorySyncResourceManagedIndication), __vite__mapDeps([0, 1, 2]))), Y = () => null, X = [T.blue, T.green, T.yellow, T.orange, T.purple, T.pink], _e = (e, t) => {
        let n = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
        return X[n % X.length][t ? `500` : `400`]
    }, Z = (e, t, n, r, i) => {
        let a = e.trim().charAt(0).toUpperCase() || `?`;
        return (0, q.jsx)(`span`, {
            "aria-label": t,
            className: c(`flex shrink-0 items-center justify-center rounded-full font-medium text-white`, n, i == null ? void 0 : h(i)),
            role: `img`,
            style: i == null ? {
                backgroundColor: _e(e, r)
            } : void 0,
            children: a
        })
    }, ve = e => {
        "use forget";
        let t = (0, G.c)(6),
            {
                avatarUrl: n,
                className: r,
                fallback: i
            } = e,
            [a, o] = (0, K.useState)(!1);
        if (a) return i;
        let s;
        t[0] === r ? s = t[1] : (s = c(`shrink-0 rounded-full object-cover`, r), t[0] = r, t[1] = s);
        let l;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = () => o(!0), t[2] = l) : l = t[2];
        let u;
        return t[3] !== n || t[4] !== s ? (u = (0, q.jsx)(`img`, {
            src: n,
            alt: ``,
            className: s,
            onError: l,
            referrerPolicy: `no-referrer`
        }), t[3] = n, t[4] = s, t[5] = u) : u = t[5], u
    }, Q = e => {
        "use forget";
        let t = (0, G.c)(18),
            {
                option: r,
                size: i
            } = e,
            a = i === void 0 ? `small` : i,
            o = C(),
            s = n(),
            c, l, u, d, f, p;
        if (t[0] !== o || t[1] !== s || t[2] !== r.avatarColorKey || t[3] !== r.avatarUrl || t[4] !== r.label || t[5] !== a) {
            p = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = o.formatMessage({
                        id: `gPcAh5`,
                        defaultMessage: `Profile avatar`
                    }),
                    t = a === `large` ? `h-14 w-14 text-xl` : a === `medium` ? `h-7 w-7 text-sm` : `h-5 w-5 text-xs`;
                if (r.avatarUrl == null) {
                    p = Z(r.label, e, t, s, r.avatarColorKey);
                    break bb0
                }
                c = ve,
                l = r.avatarUrl,
                u = r.avatarUrl,
                d = t,
                f = Z(r.label, e, t, s, r.avatarColorKey)
            }
            t[0] = o, t[1] = s, t[2] = r.avatarColorKey, t[3] = r.avatarUrl, t[4] = r.label, t[5] = a, t[6] = c, t[7] = l, t[8] = u, t[9] = d, t[10] = f, t[11] = p
        } else c = t[6], l = t[7], u = t[8], d = t[9], f = t[10], p = t[11];
        if (p !== Symbol.for(`react.early_return_sentinel`)) return p;
        let m;
        return t[12] !== c || t[13] !== l || t[14] !== u || t[15] !== d || t[16] !== f ? (m = (0, q.jsx)(c, {
            avatarUrl: u,
            className: d,
            fallback: f
        }, l), t[12] = c, t[13] = l, t[14] = u, t[15] = d, t[16] = f, t[17] = m) : m = t[17], m
    }, $ = (e, t, n) => t.context === `value` ? e.label : (0, q.jsxs)(`div`, {
        className: c(`flex items-center gap-2`, n && `h-8`),
        children: [n ? (0, q.jsx)(Q, {
            option: e,
            size: e.kind === `user` ? `medium` : `small`
        }) : null, (0, q.jsxs)(`div`, {
            className: c(`flex flex-col`, n && `min-w-0 justify-center leading-tight`),
            children: [(0, q.jsx)(`span`, {
                className: `text-sm`,
                children: e.label
            }), e.sublabel && (0, q.jsx)(`span`, {
                className: `text-token-text-secondary text-xs`,
                children: e.sublabel
            })]
        }), e.kind === `group` && e.isScimManaged && (0, q.jsx)(J, {})]
    }), ye = ({
        showOptionAvatars: e,
        ...t
    }) => {
        let {
            isFocused: n,
            isSelected: r,
            innerProps: i,
            innerRef: a,
            data: o
        } = t, {
            onClick: s,
            ...l
        } = i;
        return (0, q.jsx)(`div`, {
            ...l,
            ref: a,
            onClick: s,
            onPointerDown: e => {
                e.preventDefault()
            },
            onTouchEnd: e => {
                e.preventDefault(), e.stopPropagation(), s?.(e)
            },
            className: c(`cursor-pointer rounded-md px-2 py-2`, r ? `bg-token-interactive-bg-secondary-press` : n ? `bg-token-interactive-bg-secondary-hover` : `bg-transparent`),
            children: $(o, {
                context: `menu`
            }, e)
        })
    }
}));
export {
    be as i, Q as n, he as r, ge as t
};
//# sourceMappingURL=daf50f1d-i22ikvovjzsfk2ed.js.map