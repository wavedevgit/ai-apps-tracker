import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c7 as n,
    l7 as r
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $_t as o,
    H_t as s,
    K_t as c,
    N_t as l,
    Q_t as u,
    W_t as d,
    Y_t as f,
    nvt as p,
    tvt as m,
    v_t as h
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    S as g,
    x as _
} from "./1c919af1-l4n6ac3ef72w21fi.js";
import {
    n as v,
    t as y
} from "./9d60841e-e49t3yx590vsf159.js";
import {
    a as b,
    g as x,
    i as S,
    l as C,
    u as w,
    y as ee
} from "./707eab0c-eqm4zmw552znkezy.js";
import {
    n as T,
    t as E
} from "./170322a3-osj2nsczby2m2x8s.js";
import {
    C as D,
    S as O,
    t as k,
    w as te,
    x as A
} from "./bcae0416-frx726h3ax995aos.js";
import {
    n as j,
    t as ne
} from "./d4c740a3-m98a0dejurzr8grq.js";
import {
    n as M,
    t as N
} from "./b08afc98-hhrzqa96jwiah246.js";
import {
    n as re,
    t as P
} from "./36ecb4f8-kiembzmxgbkp9ori.js";
import {
    n as ie,
    t as F
} from "./a7f9e0fc-ou1rconw7phza3ng.js";
import {
    n as ae,
    t as I
} from "./85914cf1-fnfqu97rf9sh00xd.js";
var L, R, oe, z, se, ce, le, ue, B, de, fe, V, pe, me, H, he, U, W, ge, G, K, _e, ve, ye, q, be, xe, J, Y, X, Se, Ce, we, Te, Ee, Z, De, Oe, Q, $, ke, Ae, je, Me, Ne, Pe = e((() => {
        r(), k(), L = t(a()), p(), C(), ne(), N(), u(), s(), v(), T(), g(), P(), x(), F(), S(), h(), ae(), R = i(), oe = (0, L.createContext)(null), z = () => {
            let e = (0, L.use)(oe);
            if (!e) throw Error(`Select components must be wrapped in <Select />`);
            return e
        }, se = ({
            label: e
        }) => (0, R.jsx)(R.Fragment, {
            children: e
        }), ce = ({
            label: e
        }) => (0, R.jsx)(R.Fragment, {
            children: e
        }), le = ({
            values: e,
            selectedAll: t
        }) => (0, R.jsx)(R.Fragment, {
            children: t ? `All selected` : e.length === 0 ? `Select...` : e.length === 1 ? e[0].label : `${e.length} selected`
        }), ue = e => {
            let {
                id: t,
                "aria-label": n,
                "aria-labelledby": r,
                "aria-describedby": i,
                required: a,
                value: s,
                name: c,
                multiple: l,
                variant: u = `outline`,
                size: d = `md`,
                dropdownIconType: f = `dropdown`,
                loading: p = !1,
                open: h,
                onOpenChange: g,
                clearable: _ = !1,
                clearLabel: v,
                disabled: y = !1,
                invalid: b = !1,
                placeholder: x = `Select...`,
                loadingPlaceholder: S = `Loading...`,
                pill: C = m.pill,
                disablePressable: w,
                listWidth: ee,
                listClassName: T,
                options: E,
                actions: D = [],
                side: O = `bottom`,
                avoidCollisions: k = !0,
                collisionPadding: te,
                onChange: A,
                optionClassName: ne,
                optionIndicatorPosition: N = `start`,
                OptionView: re = se,
                TriggerStartIcon: P,
                triggerClassName: ie,
                onTriggerClickCapture: F,
                opticallyAlign: ae,
                TriggerView: I,
                searchPlaceholder: z = ``,
                searchValue: ue,
                searchPredicate: B = we,
                searchEmptyMessage: fe = `No results found.`,
                onSearchChange: V,
                searchable: me,
                listMaxWidth: H = `auto`,
                __isWidget: he = !1,
                forceNativeSelect: U = !1
            } = e, W = e.block ?? u !== `ghost`, G = e.align ?? (W ? `center` : `start`), K = e.alignOffset ?? (G === `center` ? 0 : -5), _e = e.listMinWidth ?? (W ? `auto` : 300);
            if (U && l && o) throw Error("Select: `forceNativeSelect` is only supported when `multiple` is false.");
            let ve = j((e, t) => {
                    if (l) {
                        if (!e.value) {
                            A([]);
                            return
                        }
                        if (t) {
                            let t = s.filter(t => t !== e.value),
                                n = De(E, t);
                            A(n)
                        } else {
                            let t = De(E, s);
                            A(t.concat(e))
                        }
                    } else A(e)
                }),
                ye = M(e => g?.(e)),
                q = g ? ye : void 0,
                be = M(e => V?.(e)),
                xe = V ? be : void 0,
                J = M(e => F?.(e)),
                Y = F ? J : void 0,
                X = (0, L.useRef)(B);
            X.current = B;
            let Se = (0, L.useMemo)(() => D, [D.length]),
                Ce = (0, L.useRef)(D);
            Ce.current = D;
            let Te = (0, L.useCallback)(e => {
                    Ce.current.find(t => t.id === e)?.onSelect(e)
                }, []),
                Ee = (0, L.useMemo)(() => ge(E) ? E.reduce((e, t) => e + t.options.length, 0) : E.length, [E]),
                Z = `select-trigger-${(0,L.useId)()}`,
                Oe = me ?? Ee > 15,
                Q = (0, L.useMemo)(() => ({
                    "aria-label": n,
                    "aria-labelledby": r,
                    "aria-describedby": i
                }), [i, n, r]),
                $ = (0, L.useMemo)(() => l ? {
                    multiple: !0,
                    value: s,
                    TriggerView: I ?? le
                } : {
                    multiple: !1,
                    value: s,
                    TriggerView: I ?? ce
                }, [l, s, I]),
                ke = (0, L.useMemo)(() => ({
                    ...$,
                    triggerId: Z,
                    id: t,
                    name: c,
                    required: a,
                    options: E,
                    placeholder: x,
                    loadingPlaceholder: S,
                    loading: p,
                    open: h,
                    onOpenChange: q,
                    clearable: _,
                    clearLabel: v,
                    variant: u,
                    pill: C,
                    disablePressable: w,
                    size: d,
                    dropdownIconType: f,
                    block: W,
                    align: G,
                    alignOffset: K,
                    side: O,
                    avoidCollisions: k,
                    collisionPadding: te,
                    listWidth: ee,
                    listClassName: T,
                    listMinWidth: _e,
                    listMaxWidth: H,
                    searchPlaceholder: z,
                    searchEmptyMessage: fe,
                    onSearchChange: xe,
                    TriggerStartIcon: P,
                    triggerClassName: ie,
                    onTriggerClickCapture: Y,
                    opticallyAlign: ae,
                    optionClassName: ne,
                    optionIndicatorPosition: N,
                    OptionView: re,
                    actions: Se,
                    onActionSelect: Te,
                    onSelectRef: ve,
                    searchPredicateRef: X,
                    searchable: Oe,
                    disabled: y,
                    invalid: b,
                    __isWidget: he,
                    forceNativeSelect: U
                }), [$, Z, t, a, c, E, x, S, p, h, q, _, v, u, C, w, d, f, W, G, K, O, k, te, ee, T, _e, H, z, fe, xe, P, ie, Y, ae, ne, N, re, Se, Te, ve, Oe, y, b, he, U]);
            return (0, R.jsx)(oe.Provider, {
                value: ke,
                children: U ? (0, R.jsx)(de, {
                    ariaProps: Q
                }) : (0, R.jsx)(pe, {
                    ariaProps: Q,
                    searchValue: ue
                })
            })
        }, B = e => {
            let {
                triggerId: t,
                id: n,
                required: r,
                value: i,
                multiple: a,
                options: o,
                loading: s,
                disabled: c,
                invalid: l,
                clearable: u,
                clearLabel: d,
                name: f,
                variant: p,
                pill: m,
                disablePressable: h,
                size: g,
                dropdownIconType: _,
                placeholder: v,
                loadingPlaceholder: y,
                block: b,
                opticallyAlign: x,
                triggerClassName: S,
                onTriggerClickCapture: C,
                TriggerStartIcon: w,
                TriggerView: ee,
                onSelectRef: T,
                __isWidget: E,
                forceNativeSelect: D
            } = z(), {
                onOpenChange: O,
                ariaProps: k,
                ...te
            } = e, A = k?.[`aria-label`], j = k?.[`aria-labelledby`], ne = k?.[`aria-describedby`], M = a ? i[0] : i, N = s ? y : v, re = (f || n) && !D, P = (0, L.useId)(), F = (0, L.useId)(), ae = (0, L.useMemo)(() => Z(o, M) || {
                value: ``,
                label: N
            }, [M, o, N]), I = a ? i.length > 0 : !!i, oe = s || !I, se = (0, L.useMemo)(() => je(), []), ce = (0, L.useMemo)(() => {
                if (!a) return {
                    values: [],
                    selectedAll: !1
                };
                let e = De(o, i),
                    t = o.flatMap(e => `options` in e ? e.options : e);
                return {
                    values: e.length ? e : [{
                        value: ``,
                        label: N
                    }],
                    selectedAll: t.length > 0 && t.length <= i.length
                }
            }, [a, o, i, N]);
            return (0, R.jsxs)(ie, {
                id: t,
                "aria-labelledby": (0, L.useMemo)(() => {
                    if (j) return `${j} ${P}`;
                    if (A) return `${F} ${P}`
                }, [F, A, j, P]),
                "aria-describedby": ne,
                className: S,
                selected: !oe,
                variant: p,
                pill: m,
                disablePressable: h,
                block: b,
                size: g,
                disabled: c,
                invalid: l,
                loading: s,
                StartIcon: w,
                opticallyAlign: x,
                onClickCapture: C,
                dropdownIconType: _,
                onClearClick: u ? () => {
                    T.current({
                        value: ``,
                        label: ``
                    }), O?.(!1)
                } : void 0,
                clearLabel: d,
                onInteract: O,
                onKeyDown: e => {
                    let t = e.key;
                    if (!a && Me(t)) {
                        let n = se(t);
                        e.stopPropagation();
                        let r = Ne(o, n, M);
                        r && T.current(r)
                    }
                },
                "data-w-component": E ? `select` : void 0,
                ...te,
                children: [A && !j && (0, R.jsx)(`span`, {
                    id: F,
                    className: `sr-only w-full h-0 left-0 bottom-0 pointer-events-none`,
                    children: A
                }), (0, R.jsx)(`span`, {
                    id: P,
                    children: a ? (0, R.jsx)(ee, {
                        ...ce
                    }) : (0, R.jsx)(ee, {
                        ...ae
                    })
                }), re && (0, R.jsx)(`input`, {
                    id: n,
                    name: f,
                    value: M,
                    tabIndex: -1,
                    onFocus: () => {
                        document.getElementById(t)?.focus({
                            preventScroll: !0
                        })
                    },
                    onChange: () => {},
                    required: r,
                    className: `sr-only w-full h-0 left-0 bottom-0 pointer-events-none`,
                    "aria-hidden": `true`
                })]
            })
        }, de = ({
            ariaProps: e
        }) => {
            let {
                value: t,
                multiple: r,
                name: i,
                options: a,
                placeholder: o,
                block: s,
                loading: c,
                onSelectRef: l,
                onTriggerClickCapture: u
            } = z();
            if (r) throw Error("Rendered native select while using `multiple` selection mode.");
            return (0, R.jsx)(`div`, {
                className: `flex min-w-0`,
                children: (0, R.jsxs)(`div`, {
                    className: n(`relative max-w-full`, s && `w-full`),
                    children: [(0, R.jsxs)(`select`, {
                        name: i,
                        "aria-label": e[`aria-label`],
                        "aria-labelledby": e[`aria-labelledby`],
                        "aria-describedby": e[`aria-describedby`],
                        className: I.NativeSelect,
                        value: t,
                        onClickCapture: u,
                        onKeyDown: e => {
                            e.stopPropagation()
                        },
                        onChange: e => {
                            let t = e.target.value,
                                n = Z(a, t);
                            n && l.current(n)
                        },
                        disabled: c,
                        "data-native-selectcontrol": ``,
                        children: [!t && (0, R.jsx)(`option`, {
                            value: ``,
                            children: o
                        }), a.map(e => W(e) ? (0, R.jsx)(fe, {
                            ...e
                        }, e.label) : (0, R.jsx)(V, {
                            ...e
                        }, e.value))]
                    }), (0, R.jsx)(B, {
                        ariaProps: e,
                        tabIndex: -1,
                        "aria-hidden": `true`
                    })]
                })
            })
        }, fe = ({
            label: e,
            options: t
        }) => (0, R.jsx)(`optgroup`, {
            label: e,
            children: t.map(e => (0, R.jsx)(V, {
                ...e
            }, e.value))
        }), V = ({
            value: e,
            label: t,
            disabled: n
        }) => (0, R.jsx)(`option`, {
            value: e,
            disabled: n,
            children: t
        }), pe = ({
            ariaProps: e,
            searchValue: t
        }) => {
            let {
                triggerId: r,
                loading: i,
                open: a,
                onOpenChange: o,
                side: s,
                align: u,
                alignOffset: f,
                avoidCollisions: p,
                collisionPadding: m,
                listWidth: h,
                listClassName: g,
                listMinWidth: _,
                listMaxWidth: v
            } = z(), [y, b] = (0, L.useState)(!1), x = a ?? y, S = (0, L.useRef)(null), C = ee(), T = e => {
                let t = e === void 0 ? !x : e;
                a === void 0 && b(t), o?.(t), t || setTimeout(() => {
                    if (!S.current) return;
                    let e = document.activeElement;
                    e && !S.current.contains(e) || document.getElementById(r)?.focus({
                        preventScroll: !0
                    })
                })
            };
            return w(x, () => {
                T(!1)
            }), (0, R.jsxs)(D, {
                open: x,
                onOpenChange: e => {
                    i && e || T(e)
                },
                modal: !1,
                children: [(0, R.jsx)(te, {
                    asChild: !0,
                    children: (0, R.jsx)(B, {
                        ariaProps: e,
                        onOpenChange: T
                    })
                }), (0, R.jsx)(O, {
                    forceMount: !0,
                    container: C,
                    children: (0, R.jsx)(l, {
                        className: I.Menu,
                        enterDuration: 350,
                        exitDuration: 200,
                        children: x && (0, R.jsx)(A, {
                            ref: S,
                            forceMount: !0,
                            className: n(I.MenuList, g),
                            side: s,
                            sideOffset: 5,
                            align: u,
                            alignOffset: f,
                            avoidCollisions: p,
                            collisionPadding: m ?? {
                                bottom: 30,
                                top: 30
                            },
                            onOpenAutoFocus: d,
                            onCloseAutoFocus: d,
                            onEscapeKeyDown: d,
                            style: c({
                                "select-list-width": h,
                                "select-list-min-width": _,
                                "select-list-max-width": v
                            }),
                            children: (0, R.jsx)(he, {
                                searchValue: t,
                                onOpenChange: T
                            })
                        }, `dropdown`)
                    })
                })]
            })
        }, me = (0, L.createContext)(null), H = () => {
            let e = (0, L.use)(me);
            if (!e) throw Error(`CustomSelectMenu components must be wrapped in <CustomSelectMenu />`);
            return e
        }, he = ({
            searchValue: e,
            onOpenChange: t
        }) => {
            let {
                multiple: n,
                value: r,
                options: i,
                searchable: a,
                searchPredicateRef: o
            } = z(), s = (0, L.useRef)(() => t(!1)), c = (0, L.useRef)(null), l = (0, L.useRef)(null), u = (0, L.useRef)(null), [d, p] = (0, L.useState)(``), m = a ? e ?? d : ``, h = (0, L.useMemo)(() => je(), []), g = `select-list-${(0,L.useId)()}`, _ = (0, L.useRef)(n ? `` : r), v = (0, L.useMemo)(() => Te(i, m, o.current), [i, m, o]), y = Ee(v), [b, x] = (0, L.useState)(() => {
                let e = n ? r[0] : r;
                return Z(v, e)?.value ?? y?.value ?? ``
            }), S = (0, L.useRef)(!1), C = e => {
                let t = e.key,
                    a = n ? r[0] : r,
                    o = b || y?.value || a,
                    s = document.activeElement === u.current,
                    l = c.current;
                if (!l) return;
                let d = () => {
                        let e = new PointerEvent(`pointerup`, {
                            bubbles: !0,
                            cancelable: !0,
                            pointerType: `mouse`
                        });
                        Q(b, l)?.dispatchEvent(e)
                    },
                    f = (e, t) => {
                        x(e), t.scrollIntoView({
                            block: `nearest`
                        })
                    },
                    p = () => {
                        let e = n ? r[0] : r;
                        if (e) {
                            let t = Q(e, l);
                            if (t) {
                                f(e, t);
                                return
                            }
                        }
                        if (y) {
                            let e = Q(y.value, l);
                            e && f(y.value, e)
                        }
                    };
                switch (t) {
                    case `ArrowDown`: {
                        if (e.preventDefault(), !b || !Q(b, l)) {
                            p();
                            return
                        }
                        let t = ke(b, l),
                            n = t?.getAttribute(`data-option-id`);
                        t && n && f(n, t);
                        return
                    }
                    case `ArrowUp`: {
                        if (e.preventDefault(), !b || !Q(b, l)) {
                            p();
                            return
                        }
                        let t = Ae(o, l),
                            n = t?.getAttribute(`data-option-id`);
                        t && n && f(n, t);
                        return
                    }
                    case `Enter`:
                        e.preventDefault(), d();
                        return;
                    case ` `:
                        if (m.trim() && s) return;
                        e.preventDefault(), d();
                        return;
                    default:
                        break
                }
                if (Me(t)) {
                    if (s) return;
                    let n = h(t);
                    e.stopPropagation();
                    let r = Ne(i, n, b);
                    if (r) {
                        let e = Q(r.value, l);
                        e && (x(r.value), e.scrollIntoView({
                            block: `nearest`
                        }))
                    }
                }
            }, w = (0, L.useMemo)(() => ({
                valueRef: _,
                listId: g,
                highlightedValue: b,
                setHighlightedValue: x,
                requestCloseRef: s,
                searchTerm: m,
                setSearchTerm: p,
                searchInputRef: u,
                listRef: l
            }), [g, b, x, m, p]);
            return (0, L.useEffect)(() => (f(() => {
                let e = c.current,
                    t = l.current;
                if (!e || !t) return;
                let n = Q(b, t);
                if (n) {
                    let e = t.clientHeight,
                        r = n.offsetTop,
                        i = n.offsetHeight,
                        a = r - e / 2 + i / 2,
                        o = t.scrollHeight - e;
                    t.scrollTop = Math.max(0, Math.min(a, o))
                }
            }), (u.current || l.current || c.current)?.focus({
                preventScroll: !0
            }), () => {
                S.current = !1
            }), []), (0, L.useLayoutEffect)(() => {
                if (!S.current) {
                    S.current = !0;
                    return
                }
                l.current && (l.current.scrollTop = 0, x(Ee(v)?.value ?? ``))
            }, [v]), (0, R.jsx)(me, {
                value: w,
                children: (0, R.jsxs)(`div`, {
                    id: g,
                    className: I.MenuInner,
                    onKeyDown: C,
                    ref: c,
                    tabIndex: 0,
                    children: [a && (0, R.jsx)(U, {
                        value: m,
                        onChange: p
                    }), (0, R.jsx)(_e, {
                        filteredOptions: v
                    }), (0, R.jsx)(Se, {})]
                })
            })
        }, U = ({
            value: e,
            onChange: t
        }) => {
            let {
                searchPlaceholder: n,
                onSearchChange: r
            } = z(), {
                listId: i,
                searchInputRef: a
            } = H();
            return (0, R.jsx)(`div`, {
                className: I.Search,
                children: (0, R.jsx)(re, {
                    className: I.SearchInput,
                    startAdornment: (0, R.jsx)(_, {
                        width: 16,
                        height: 16,
                        className: `fill-secondary`
                    }),
                    ref: a,
                    value: e,
                    placeholder: n,
                    onChange: e => {
                        let n = e.target.value;
                        t(n), r?.(n)
                    },
                    autoComplete: `off`,
                    autoCorrect: `off`,
                    spellCheck: !1,
                    "aria-autocomplete": `list`,
                    role: `combobox`,
                    "aria-controls": i,
                    "aria-expanded": !0
                })
            })
        }, W = e => `options` in e, ge = e => e[0] && W(e[0]), G = 300, K = e => `select-option-${encodeURIComponent(e)}`, _e = ({
            filteredOptions: e
        }) => {
            let {
                searchEmptyMessage: t,
                multiple: n
            } = z(), {
                listId: r,
                highlightedValue: i,
                listRef: a
            } = H(), o = i ? K(i) : void 0;
            if (!e.length) return typeof t == `string` ? (0, R.jsx)(`p`, {
                className: I.SearchEmpty,
                "data-text-only": !0,
                children: t
            }) : (0, R.jsx)(`div`, {
                className: I.SearchEmpty,
                children: t
            });
            let s = ge(e),
                c = !s && e.length > G,
                l = s ? e.map(e => (0, R.jsx)(ye, {
                    ...e
                }, e.label)) : e.slice(0, G).map(e => (0, R.jsx)(X, {
                    ...e
                }, e.value));
            return (0, R.jsxs)(`div`, {
                id: r,
                className: I.OptionsList,
                ref: a,
                role: `listbox`,
                tabIndex: 0,
                "aria-activedescendant": o,
                "aria-multiselectable": n || void 0,
                children: [l, c && (0, R.jsx)(q, {
                    numHidden: e.length - G
                })]
            })
        }, ve = {
            limit: 100,
            label: `Show all`
        }, ye = ({
            label: e,
            options: t,
            optionsLimit: n = ve
        }) => {
            let r = (0, L.useId)(),
                {
                    optionIndicatorPosition: i
                } = z(),
                {
                    searchTerm: a,
                    setHighlightedValue: o
                } = H(),
                [s, c] = (0, L.useState)(!1),
                l = n.limit < t.length && !a && !s,
                u = G < t.length && !l,
                d = t;
            return l ? d = t.slice(0, n.limit) : u && (d = t.slice(0, G)), (0, R.jsxs)(R.Fragment, {
                children: [(0, R.jsxs)(`div`, {
                    className: I.OptionGroupHeading,
                    children: [i === `start` && (0, R.jsx)(J, {
                        position: i
                    }), e, i === `end` && (0, R.jsx)(J, {
                        position: i
                    })]
                }), d.map(e => (0, R.jsx)(X, {
                    ...e
                }, e.value)), l && (0, R.jsx)(be, {
                    value: `group-limit-${r}`,
                    label: n.label,
                    onPointerUp: () => {
                        c(!0), o(t[n.limit].value)
                    }
                }), u && (0, R.jsx)(q, {
                    numHidden: t.length - G
                })]
            })
        }, q = ({
            numHidden: e
        }) => {
            let {
                optionIndicatorPosition: t
            } = z();
            return (0, R.jsxs)(`div`, {
                className: I.OptionHardLimitHeading,
                children: [t === `start` && (0, R.jsx)(J, {
                    position: t
                }), `…and ${e.toLocaleString()} more options. Use search to refine results further.`, t === `end` && (0, R.jsx)(J, {
                    position: t
                })]
            })
        }, be = ({
            value: e,
            label: t,
            onPointerUp: r
        }) => {
            let {
                optionIndicatorPosition: i
            } = z(), {
                highlightedValue: a,
                setHighlightedValue: o
            } = H(), s = e === a;
            return (0, R.jsx)(`div`, {
                className: n(I.Option, I.OptionsLimit),
                id: K(e),
                "data-option-id": e,
                "data-highlight": s ? `` : void 0,
                role: `option`,
                "aria-selected": !1,
                onPointerUp: r,
                onPointerMove: () => {
                    s || o(e)
                },
                onPointerLeave: () => {
                    o(t => t === e ? `` : t)
                },
                children: (0, R.jsxs)(`div`, {
                    className: n(I.PressableInner, I.OptionInner),
                    children: [i === `start` && (0, R.jsx)(J, {
                        position: i
                    }), t, i === `end` && (0, R.jsx)(J, {
                        position: i
                    })]
                })
            })
        }, xe = `data-option-id`, J = ({
            children: e,
            indicator: t = !1,
            position: n
        }) => (0, R.jsx)(`div`, {
            className: I.OptionIndicatorSlot,
            "data-option-indicator-position": n,
            "data-select-option-indicator": t ? `` : void 0,
            children: e
        }), Y = ({
            isSelected: e,
            position: t
        }) => (0, R.jsx)(J, {
            indicator: !0,
            position: t,
            children: e && (0, R.jsx)(y, {
                className: I.OptionCheck
            })
        }), X = e => {
            let {
                optionClassName: t,
                OptionView: r,
                value: i,
                multiple: a,
                onSelectRef: o,
                optionIndicatorPosition: s
            } = z(), {
                valueRef: c,
                requestCloseRef: l,
                highlightedValue: u,
                setHighlightedValue: d
            } = H(), {
                value: f,
                disabled: p,
                tooltip: m
            } = e, h = c.current, g = a ? i.includes(f) : f === h, _ = f === u, v = () => {
                a ? o.current(e, g) : (o.current(e), l.current?.())
            }, y = () => {
                _ || d(f)
            }, x = () => {
                d(e => e === f ? `` : e)
            };
            return (0, R.jsx)(`div`, {
                className: n(I.Option, t),
                id: K(f),
                "data-highlight": _ ? `` : void 0,
                role: `option`,
                "aria-selected": g,
                "data-selected": g ? `` : void 0,
                [xe]: f,
                onPointerUp: p ? void 0 : v,
                onPointerMove: p ? void 0 : y,
                onPointerLeave: p ? void 0 : x,
                "aria-disabled": p,
                "data-disabled": p ? `` : void 0,
                children: (0, R.jsxs)(`div`, {
                    className: I.PressableInner,
                    children: [(0, R.jsxs)(`div`, {
                        className: I.OptionInner,
                        children: [s === `start` && (0, R.jsx)(Y, {
                            isSelected: g,
                            position: s
                        }), (0, R.jsx)(r, {
                            ...e
                        }), m && (0, R.jsx)(b, {
                            content: m.content,
                            maxWidth: m.maxWidth,
                            side: `right`,
                            children: (0, R.jsx)(E, {})
                        }), s === `end` && (0, R.jsx)(Y, {
                            isSelected: g,
                            position: s
                        })]
                    }), e.description && (0, R.jsxs)(`div`, {
                        className: I.OptionInner,
                        children: [s === `start` && (0, R.jsx)(J, {
                            position: s
                        }), e.description, s === `end` && (0, R.jsx)(J, {
                            position: s
                        })]
                    })]
                })
            })
        }, Se = () => {
            let {
                actions: e
            } = z();
            return e.length === 0 ? null : (0, R.jsx)(`div`, {
                className: I.ActionsContainer,
                children: e.map(e => (0, R.jsx)(Ce, {
                    ...e
                }, e.id))
            })
        }, Ce = ({
            id: e,
            label: t,
            Icon: r,
            className: i
        }) => {
            let {
                onActionSelect: a
            } = z(), {
                requestCloseRef: o
            } = H(), s = e => {
                switch (e.key) {
                    case `Tab`:
                        break;
                    case `Enter`:
                    case ` `:
                        e.stopPropagation(), c();
                        break;
                    default:
                        e.stopPropagation()
                }
            }, c = () => {
                a(e), o.current?.()
            };
            return (0, R.jsx)(`div`, {
                className: I.Action,
                onPointerUp: c,
                onKeyDown: s,
                tabIndex: 0,
                children: (0, R.jsxs)(`div`, {
                    className: n(I.ActionInner, i),
                    children: [r && (0, R.jsx)(r, {
                        role: `presentation`
                    }), t]
                })
            })
        }, we = (e, t) => e.label.toLowerCase().includes(t), Te = (e, t, n) => {
            let r = t.trim().toLocaleLowerCase();
            if (!r) return e;
            let i = e => n(e, r);
            return ge(e) ? e.reduce((e, t) => {
                let n = t.options.filter(i);
                return n.length && e.push({
                    ...t,
                    options: n
                }), e
            }, []) : e.reduce((e, t) => (i(t) && e.push(t), e), [])
        }, Ee = e => {
            if (!e.length) return;
            let t;
            for (let n of e)
                if (W(n)) {
                    let e = n.options.find(e => !e.disabled);
                    if (e) {
                        t = e;
                        break
                    }
                } else if (!n.disabled) {
                t = n;
                break
            }
            return t
        }, Z = (e, t) => {
            let n;
            for (let r of e)
                if (W(r)) {
                    let e = r.options.find(e => e.value === t);
                    if (e) {
                        n = e;
                        break
                    }
                } else if (r.value === t) {
                n = r;
                break
            }
            return n
        }, De = (e, t) => {
            let n = [],
                r = new Set(t);
            for (let t of e)
                if (W(t)) {
                    let e = t.options.filter(e => r.has(e.value));
                    n = n.concat(e)
                } else r.has(t.value) && n.push(t);
            return n
        }, Oe = 40, Q = (e, t) => Array.from(t.querySelectorAll(`[data-option-id]`)).find(t => t.getAttribute(`data-option-id`) === e), $ = e => e.matches(`[data-option-id]:not([data-disabled])`), ke = (e, t) => {
            let n = Q(e, t)?.nextElementSibling,
                r = 0;
            for (; n && r < Oe;) {
                if ($(n)) return n;
                n = n.nextElementSibling, r += 1
            }
        }, Ae = (e, t) => {
            let n = Q(e, t)?.previousElementSibling,
                r = 0;
            for (; n && r < Oe;) {
                if ($(n)) return n;
                n = n.previousElementSibling, r += 1
            }
        }, je = () => {
            let e = ``,
                t;
            return n => (n = n.toLowerCase(), e += n, t && clearTimeout(t), t = setTimeout(() => {
                e = ``
            }, 500), n.repeat(e.length) === e ? n : e)
        }, Me = e => /^[a-zA-Z0-9]$/.test(e), Ne = (e, t, n) => {
            if (!e.length) return;
            let r, i, a = !n,
                o = ({
                    disabled: e,
                    label: r,
                    value: i
                }) => i === n ? (a = !0, !1) : !e && r.toLowerCase().startsWith(t);
            for (let t of e)
                if (W(t)) {
                    for (let e of t.options)
                        if (o(e))
                            if (a) {
                                i = e;
                                break
                            } else r ||= e
                } else if (o(t))
                if (a) {
                    i = t;
                    break
                } else r ||= t;
            return i || r
        }
    })),
    Fe = e((() => {
        Pe()
    }));
export {
    ue as n, Pe as r, Fe as t
};
//# sourceMappingURL=2a78025d-dltvible6t5so1ky.js.map