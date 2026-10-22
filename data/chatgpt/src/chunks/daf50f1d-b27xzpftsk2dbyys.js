const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/fbf44c55-o2lsxc57nll08quu.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Nw as n,
    ON as r,
    Pw as i,
    Qy as a,
    Sh as o,
    TN as s,
    Zy as c,
    a2 as l,
    c7 as u,
    l7 as d,
    nW as f,
    o2 as p,
    tW as m,
    wh as h
} from "./4813494d-itnrgnth03y1sm9d.js";
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
    F7 as w,
    I7 as T,
    amn as E,
    imn as D,
    lfn as ee,
    ufn as O
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    n as k
} from "./d335a33e-o14cfyaeymryvgpo.js";
import {
    _ as A,
    a as j,
    c as M,
    d as N,
    f as P,
    g as F,
    h as I,
    i as L,
    l as te,
    m as ne,
    n as re,
    o as ie,
    p as ae,
    r as oe,
    s as se,
    t as ce,
    u as le,
    v as ue
} from "./e2a9a3b9-h8tyfflq2mz92yhk.js";

function de(e) {
    var t = e.allowCreateWhileLoading,
        n = t !== void 0 && t,
        r = e.createOptionPosition,
        i = r === void 0 ? `last` : r,
        a = e.formatCreateLabel,
        o = a === void 0 ? V.formatCreateLabel : a,
        s = e.isValidNewOption,
        c = s === void 0 ? V.isValidNewOption : s,
        l = e.getNewOptionData,
        u = l === void 0 ? V.getNewOptionData : l,
        d = e.onCreateOption,
        f = e.options,
        p = f === void 0 ? [] : f,
        m = e.onChange,
        h = I(e, z),
        g = h.getOptionValue,
        _ = g === void 0 ? j : g,
        v = h.getOptionLabel,
        y = v === void 0 ? L : v,
        b = h.inputValue,
        x = h.isLoading,
        S = h.isMulti,
        C = h.value,
        w = h.name,
        T = (0, R.useMemo)(function() {
            return c(b, se(C), p, {
                getOptionValue: _,
                getOptionLabel: y
            }) ? u(b, o(b)) : void 0
        }, [o, u, y, _, b, c, p, C]),
        E = (0, R.useMemo)(function() {
            return (n || !x) && T ? i === `first` ? [T].concat(N(p)) : [].concat(N(p), [T]) : p
        }, [n, i, x, T, p]),
        D = (0, R.useCallback)(function(e, t) {
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
                    m(le(S, [].concat(N(se(C)), [r]), r), i)
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
var R, z, B, V, fe = e((() => {
        ue(), P(), F(), R = t(y()), te(), ie(), z = [`allowCreateWhileLoading`, `createOptionPosition`, `formatCreateLabel`, `isValidNewOption`, `getNewOptionData`, `onCreateOption`, `options`, `onChange`], B = function() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ``,
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = String(e).toLowerCase(),
                i = String(n.getOptionValue(t)).toLowerCase(),
                a = String(n.getOptionLabel(t)).toLowerCase();
            return i === r || a === r
        }, V = {
            formatCreateLabel: function(e) {
                return `Create "${e}"`
            },
            isValidNewOption: function(e, t, n, r) {
                return !(!e || t.some(function(t) {
                    return B(e, t, r)
                }) || n.some(function(t) {
                    return B(e, t, r)
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
    H, U, W, pe = e((() => {
        f(), H = t(y()), U = t(y()), ie(), ae(), fe(), _(), k(), W = (0, U.forwardRef)(function(e, t) {
            var n = de(ne(e));
            return H.createElement(oe, m({
                ref: t
            }, n))
        })
    }));

function G({
    value: e,
    onChange: t,
    ariaLabel: r,
    closeMenuOnSelect: i = !1,
    disabled: a = !1,
    inputId: o,
    name: s,
    options: l,
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
    inputValue: T,
    onKeyDown: E,
    showOptionAvatars: D = !1,
    getMultiValueConfig: O
}) {
    let k = C(),
        A = k.formatMessage({
            id: `F+GhgL`,
            defaultMessage: `People outside of your workspace cannot be added`
        }),
        j = (0, q.useRef)(O);
    j.current = O;
    let N = (0, q.useRef)(D);
    N.current = D;
    let P = (0, q.useRef)(p);
    P.current = p;
    let F = (0, q.useRef)(e => (0, J.jsx)(M.IndicatorsContainer, {
            ...e,
            children: P.current
        })).current,
        I = (0, q.useRef)(e => {
            let t = e.data,
                r = j.current?.(t),
                i = r?.tone ?? `default`,
                a = r?.removeOnChipClick ?? !0,
                o = r?.label ?? e.children,
                s = r?.showAvatar ? (0, J.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `shrink-0`,
                    children: (0, J.jsx)(Q, {
                        option: t
                    })
                }) : null,
                l = e.removeProps,
                d = {
                    danger: `bg-token-bg-status-error text-token-interactive-label-danger-secondary-default border-token-interactive-border-danger-secondary-default`,
                    default: `text-token-text-primary bg-token-bg-tertiary border-transparent hover:bg-token-bg-secondary hover-border-token-border-light`
                },
                f = u(`m-1 rounded-md border px-1.5 py-1 text-sm transition-colors`, a ? `cursor-pointer` : `cursor-default`, d[i] ?? d.default, e.isFocused && r?.selectedClassName, r?.className),
                p = a ? (0, J.jsx)(`div`, {
                    className: f,
                    role: `button`,
                    tabIndex: 0,
                    ...e.removeProps,
                    children: (0, J.jsxs)(`span`, {
                        className: `flex min-w-0 items-center gap-1`,
                        children: [r?.leadingIcon, s, (0, J.jsx)(`span`, {
                            className: `min-w-0`,
                            children: o
                        }), r?.trailingIcon, (0, J.jsx)(n, {
                            className: `icon-sm`
                        })]
                    })
                }) : (0, J.jsx)(`div`, {
                    className: f,
                    role: r?.popover ? `button` : void 0,
                    tabIndex: r?.popover ? 0 : void 0,
                    children: (0, J.jsxs)(`span`, {
                        className: `flex min-w-0 items-center gap-1`,
                        children: [r?.leadingIcon, s, (0, J.jsx)(`span`, {
                            className: `min-w-0`,
                            children: o
                        }), r?.trailingIcon, (0, J.jsx)(`button`, {
                            type: `button`,
                            className: `inline-flex cursor-pointer items-center border-0 bg-transparent p-0`,
                            ...l,
                            onClick: e => {
                                e.stopPropagation(), l.onClick?.(e)
                            },
                            onPointerDown: e => {
                                e.stopPropagation(), l.onPointerDown?.(e)
                            },
                            children: (0, J.jsx)(n, {
                                className: `icon-sm`
                            })
                        })]
                    })
                });
            return r?.popover ? (0, J.jsx)(M.MultiValue, {
                ...e,
                children: (0, J.jsx)(w, {
                    triggerButton: p,
                    size: `none`,
                    className: `overflow-visible! rounded-3xl p-0 shadow-none!`,
                    sideOffset: 4,
                    disableAutofocus: !0,
                    contentAriaLabel: r.popoverAriaLabel,
                    children: r.popover
                })
            }) : r?.tooltip ? (0, J.jsx)(M.MultiValue, {
                ...e,
                children: (0, J.jsx)(c, {
                    label: r.tooltip,
                    side: `top`,
                    delayDuration: 150,
                    children: p
                })
            }) : (0, J.jsx)(M.MultiValue, {
                ...e,
                children: p
            })
        }).current,
        L = (0, q.useRef)(e => (0, J.jsx)(ye, {
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
        name: s,
        menuIsOpen: h,
        menuPlacement: g,
        maxMenuHeight: _,
        options: l,
        value: e,
        classNames: b,
        inputValue: T,
        "aria-label": r,
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
        closeMenuOnSelect: i,
        backspaceRemovesValue: !0,
        controlShouldRenderValue: !0,
        components: (0, q.useRef)({
            DropdownIndicator: Y,
            ClearIndicator: Y,
            IndicatorsContainer: F,
            MultiValue: I,
            Option: L,
            MultiValueRemove: Y
        }).current,
        formatOptionLabel: (e, t) => $(e, t, D),
        noOptionsMessage: e => x ? x(e) : A,
        loadingMessage: e => S ? S(e) : k.formatMessage(ee.loading),
        filterOption: (e, t) => e.data.label.toLowerCase().includes(t.toLowerCase()) || (e.data.sublabel ?? ``).toLowerCase().includes(t.toLowerCase()),
        onKeyDown: E,
        onMenuOpen: v,
        blurInputOnSelect: y
    }
}

function me(e) {
    "use forget";
    let t = (0, K.c)(2),
        n = G(e),
        r;
    return t[0] === n ? r = t[1] : (r = (0, J.jsx)(ce, {
        ...n
    }), t[0] = n, t[1] = r), r
}

function he(e) {
    "use forget";
    let t = (0, K.c)(16),
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
    let c = G(s),
        l;
    t[9] === i ? l = t[10] : (l = (e, t, n) => i?.(e) ?? !0, t[9] = i, t[10] = l);
    let u;
    return t[11] !== c || t[12] !== n || t[13] !== a || t[14] !== l ? (u = (0, J.jsx)(W, {
        ...c,
        onCreateOption: a,
        isValidNewOption: l,
        formatCreateLabel: n
    }), t[11] = c, t[12] = n, t[13] = a, t[14] = l, t[15] = u) : u = t[15], u
}
var K, q, J, ge, Y, X, _e, Z, ve, Q, $, ye, be = e((() => {
    K = S(), h(), a(), T(), i(), O(), s(), p(), d(), q = t(y()), v(), E(), re(), pe(), J = g(), x(), ge = l(() => b(() => import(`./fbf44c55-o2lsxc57nll08quu.js`).then(e => e.DirectorySyncResourceManagedIndication), __vite__mapDeps([0, 1, 2]))), Y = () => null, X = [D.blue, D.green, D.yellow, D.orange, D.purple, D.pink], _e = (e, t) => {
        let n = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
        return X[n % X.length][t ? `500` : `400`]
    }, Z = (e, t, n, r, i) => {
        let a = e.trim().charAt(0).toUpperCase() || `?`;
        return (0, J.jsx)(`span`, {
            "aria-label": t,
            className: u(`flex shrink-0 items-center justify-center rounded-full font-medium text-white`, n, i == null ? void 0 : o(i)),
            role: `img`,
            style: i == null ? {
                backgroundColor: _e(e, r)
            } : void 0,
            children: a
        })
    }, ve = e => {
        "use forget";
        let t = (0, K.c)(6),
            {
                avatarUrl: n,
                className: r,
                fallback: i
            } = e,
            [a, o] = (0, q.useState)(!1);
        if (a) return i;
        let s;
        t[0] === r ? s = t[1] : (s = u(`shrink-0 rounded-full object-cover`, r), t[0] = r, t[1] = s);
        let c;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = () => o(!0), t[2] = c) : c = t[2];
        let l;
        return t[3] !== n || t[4] !== s ? (l = (0, J.jsx)(`img`, {
            src: n,
            alt: ``,
            className: s,
            onError: c,
            referrerPolicy: `no-referrer`
        }), t[3] = n, t[4] = s, t[5] = l) : l = t[5], l
    }, Q = e => {
        "use forget";
        let t = (0, K.c)(18),
            {
                option: n,
                size: i
            } = e,
            a = i === void 0 ? `small` : i,
            o = C(),
            s = r(),
            c, l, u, d, f, p;
        if (t[0] !== o || t[1] !== s || t[2] !== n.avatarColorKey || t[3] !== n.avatarUrl || t[4] !== n.label || t[5] !== a) {
            p = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = o.formatMessage({
                        id: `gPcAh5`,
                        defaultMessage: `Profile avatar`
                    }),
                    t = a === `large` ? `h-14 w-14 text-xl` : a === `medium` ? `h-7 w-7 text-sm` : `h-5 w-5 text-xs`;
                if (n.avatarUrl == null) {
                    p = Z(n.label, e, t, s, n.avatarColorKey);
                    break bb0
                }
                c = ve,
                l = n.avatarUrl,
                u = n.avatarUrl,
                d = t,
                f = Z(n.label, e, t, s, n.avatarColorKey)
            }
            t[0] = o, t[1] = s, t[2] = n.avatarColorKey, t[3] = n.avatarUrl, t[4] = n.label, t[5] = a, t[6] = c, t[7] = l, t[8] = u, t[9] = d, t[10] = f, t[11] = p
        } else c = t[6], l = t[7], u = t[8], d = t[9], f = t[10], p = t[11];
        if (p !== Symbol.for(`react.early_return_sentinel`)) return p;
        let m;
        return t[12] !== c || t[13] !== l || t[14] !== u || t[15] !== d || t[16] !== f ? (m = (0, J.jsx)(c, {
            avatarUrl: u,
            className: d,
            fallback: f
        }, l), t[12] = c, t[13] = l, t[14] = u, t[15] = d, t[16] = f, t[17] = m) : m = t[17], m
    }, $ = (e, t, n) => t.context === `value` ? e.label : (0, J.jsxs)(`div`, {
        className: u(`flex items-center gap-2`, n && `h-8`),
        children: [n ? (0, J.jsx)(Q, {
            option: e,
            size: e.kind === `user` ? `medium` : `small`
        }) : null, (0, J.jsxs)(`div`, {
            className: u(`flex flex-col`, n && `min-w-0 justify-center leading-tight`),
            children: [(0, J.jsx)(`span`, {
                className: `text-sm`,
                children: e.label
            }), e.sublabel && (0, J.jsx)(`span`, {
                className: `text-token-text-secondary text-xs`,
                children: e.sublabel
            })]
        }), e.kind === `group` && e.isScimManaged && (0, J.jsx)(ge, {})]
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
            ...c
        } = i;
        return (0, J.jsx)(`div`, {
            ...c,
            ref: a,
            onClick: s,
            onPointerDown: e => {
                e.preventDefault()
            },
            onTouchEnd: e => {
                e.preventDefault(), e.stopPropagation(), s?.(e)
            },
            className: u(`cursor-pointer rounded-md px-2 py-2`, r ? `bg-token-interactive-bg-secondary-press` : n ? `bg-token-interactive-bg-secondary-hover` : `bg-transparent`),
            children: $(o, {
                context: `menu`
            }, e)
        })
    }
}));
export {
    be as i, Q as n, me as r, he as t
};
//# sourceMappingURL=daf50f1d-b27xzpftsk2dbyys.js.map