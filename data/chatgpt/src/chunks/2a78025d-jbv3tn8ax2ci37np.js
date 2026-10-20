import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as n,
    Y5 as r
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $_t as o,
    B_t as s,
    T_t as c,
    Y_t as l,
    Z_t as u,
    avt as d,
    cvt as f,
    lvt as p,
    nvt as m,
    ovt as h
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    C as g,
    w as _
} from "./1c919af1-n3qwx9w7ipxrf1ap.js";
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
    y as T
} from "./707eab0c-irb6aeijstxf8tnp.js";
import {
    n as E,
    t as D
} from "./170322a3-osj2nsczby2m2x8s.js";
import {
    C as O,
    S as k,
    t as A,
    w as ee,
    x as j
} from "./bcae0416-dfov7rcayepv1i75.js";
import {
    n as M,
    t as te
} from "./d4c740a3-m98a0dejurzr8grq.js";
import {
    n as N,
    t as P
} from "./b08afc98-hhrzqa96jwiah246.js";
import {
    n as ne,
    t as F
} from "./36ecb4f8-l0imsksypg6q6gsu.js";
import {
    n as re,
    t as I
} from "./a7f9e0fc-njzzen8nnb4pxok8.js";
import {
    n as ie,
    t as L
} from "./85914cf1-fnfqu97rf9sh00xd.js";
var R, z, ae, B, oe, se, ce, le, V, ue, de, H, fe, pe, U, me, W, G, he, K, q, ge, _e, ve, J, ye, be, Y, X, Z, xe, Se, Ce, we, Te, Q, Ee, De, $, Oe, ke, Ae, je, Me, Ne, Pe = e((() => {
        n(), A(), R = t(a()), p(), C(), te(), P(), d(), l(), v(), E(), _(), F(), x(), I(), S(), c(), ie(), z = i(), ae = (0, R.createContext)(null), B = () => {
            let e = (0, R.use)(ae);
            if (!e) throw Error(`Select components must be wrapped in <Select />`);
            return e
        }, oe = ({
            label: e
        }) => (0, z.jsx)(z.Fragment, {
            children: e
        }), se = ({
            label: e
        }) => (0, z.jsx)(z.Fragment, {
            children: e
        }), ce = ({
            values: e,
            selectedAll: t
        }) => (0, z.jsx)(z.Fragment, {
            children: t ? `All selected` : e.length === 0 ? `Select...` : e.length === 1 ? e[0].label : `${e.length} selected`
        }), le = e => {
            let {
                id: t,
                "aria-label": n,
                "aria-labelledby": r,
                "aria-describedby": i,
                required: a,
                value: o,
                name: s,
                multiple: c,
                variant: l = `outline`,
                size: u = `md`,
                dropdownIconType: d = `dropdown`,
                loading: p = !1,
                open: m,
                onOpenChange: g,
                clearable: _ = !1,
                clearLabel: v,
                disabled: y = !1,
                invalid: b = !1,
                placeholder: x = `Select...`,
                loadingPlaceholder: S = `Loading...`,
                pill: C = f.pill,
                disablePressable: w,
                listWidth: T,
                listClassName: E,
                options: D,
                actions: O = [],
                side: k = `bottom`,
                avoidCollisions: A = !0,
                collisionPadding: ee,
                onChange: j,
                optionClassName: te,
                optionIndicatorPosition: P = `start`,
                OptionView: ne = oe,
                TriggerStartIcon: F,
                triggerClassName: re,
                onTriggerClickCapture: I,
                opticallyAlign: ie,
                TriggerView: L,
                searchPlaceholder: B = ``,
                searchValue: le,
                searchPredicate: V = Ce,
                searchEmptyMessage: de = `No results found.`,
                onSearchChange: H,
                searchable: pe,
                listMaxWidth: U = `auto`,
                __isWidget: me = !1,
                forceNativeSelect: W = !1
            } = e, G = e.block ?? l !== `ghost`, K = e.align ?? (G ? `center` : `start`), q = e.alignOffset ?? (K === `center` ? 0 : -5), ge = e.listMinWidth ?? (G ? `auto` : 300);
            if (W && c && h) throw Error("Select: `forceNativeSelect` is only supported when `multiple` is false.");
            let _e = M((e, t) => {
                    if (c) {
                        if (!e.value) {
                            j([]);
                            return
                        }
                        if (t) {
                            let t = o.filter(t => t !== e.value),
                                n = Ee(D, t);
                            j(n)
                        } else {
                            let t = Ee(D, o);
                            j(t.concat(e))
                        }
                    } else j(e)
                }),
                ve = N(e => g?.(e)),
                J = g ? ve : void 0,
                ye = N(e => H?.(e)),
                be = H ? ye : void 0,
                Y = N(e => I?.(e)),
                X = I ? Y : void 0,
                Z = (0, R.useRef)(V);
            Z.current = V;
            let xe = (0, R.useMemo)(() => O, [O.length]),
                Se = (0, R.useRef)(O);
            Se.current = O;
            let we = (0, R.useCallback)(e => {
                    Se.current.find(t => t.id === e)?.onSelect(e)
                }, []),
                Te = (0, R.useMemo)(() => he(D) ? D.reduce((e, t) => e + t.options.length, 0) : D.length, [D]),
                Q = `select-trigger-${(0,R.useId)()}`,
                De = pe ?? Te > 15,
                $ = (0, R.useMemo)(() => ({
                    "aria-label": n,
                    "aria-labelledby": r,
                    "aria-describedby": i
                }), [i, n, r]),
                Oe = (0, R.useMemo)(() => c ? {
                    multiple: !0,
                    value: o,
                    TriggerView: L ?? ce
                } : {
                    multiple: !1,
                    value: o,
                    TriggerView: L ?? se
                }, [c, o, L]),
                ke = (0, R.useMemo)(() => ({
                    ...Oe,
                    triggerId: Q,
                    id: t,
                    name: s,
                    required: a,
                    options: D,
                    placeholder: x,
                    loadingPlaceholder: S,
                    loading: p,
                    open: m,
                    onOpenChange: J,
                    clearable: _,
                    clearLabel: v,
                    variant: l,
                    pill: C,
                    disablePressable: w,
                    size: u,
                    dropdownIconType: d,
                    block: G,
                    align: K,
                    alignOffset: q,
                    side: k,
                    avoidCollisions: A,
                    collisionPadding: ee,
                    listWidth: T,
                    listClassName: E,
                    listMinWidth: ge,
                    listMaxWidth: U,
                    searchPlaceholder: B,
                    searchEmptyMessage: de,
                    onSearchChange: be,
                    TriggerStartIcon: F,
                    triggerClassName: re,
                    onTriggerClickCapture: X,
                    opticallyAlign: ie,
                    optionClassName: te,
                    optionIndicatorPosition: P,
                    OptionView: ne,
                    actions: xe,
                    onActionSelect: we,
                    onSelectRef: _e,
                    searchPredicateRef: Z,
                    searchable: De,
                    disabled: y,
                    invalid: b,
                    __isWidget: me,
                    forceNativeSelect: W
                }), [Oe, Q, t, a, s, D, x, S, p, m, J, _, v, l, C, w, u, d, G, K, q, k, A, ee, T, E, ge, U, B, de, be, F, re, X, ie, te, P, ne, xe, we, _e, De, y, b, me, W]);
            return (0, z.jsx)(ae.Provider, {
                value: ke,
                children: W ? (0, z.jsx)(ue, {
                    ariaProps: $
                }) : (0, z.jsx)(fe, {
                    ariaProps: $,
                    searchValue: le
                })
            })
        }, V = e => {
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
                TriggerView: T,
                onSelectRef: E,
                __isWidget: D,
                forceNativeSelect: O
            } = B(), {
                onOpenChange: k,
                ariaProps: A,
                ...ee
            } = e, j = A?.[`aria-label`], M = A?.[`aria-labelledby`], te = A?.[`aria-describedby`], N = a ? i[0] : i, P = s ? y : v, ne = (f || n) && !O, F = (0, R.useId)(), I = (0, R.useId)(), ie = (0, R.useMemo)(() => Q(o, N) || {
                value: ``,
                label: P
            }, [N, o, P]), L = a ? i.length > 0 : !!i, ae = s || !L, oe = (0, R.useMemo)(() => je(), []), se = (0, R.useMemo)(() => {
                if (!a) return {
                    values: [],
                    selectedAll: !1
                };
                let e = Ee(o, i),
                    t = o.flatMap(e => `options` in e ? e.options : e);
                return {
                    values: e.length ? e : [{
                        value: ``,
                        label: P
                    }],
                    selectedAll: t.length > 0 && t.length <= i.length
                }
            }, [a, o, i, P]);
            return (0, z.jsxs)(re, {
                id: t,
                "aria-labelledby": (0, R.useMemo)(() => {
                    if (M) return `${M} ${F}`;
                    if (j) return `${I} ${F}`
                }, [I, j, M, F]),
                "aria-describedby": te,
                className: S,
                selected: !ae,
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
                    E.current({
                        value: ``,
                        label: ``
                    }), k?.(!1)
                } : void 0,
                clearLabel: d,
                onInteract: k,
                onKeyDown: e => {
                    let t = e.key;
                    if (!a && Me(t)) {
                        let n = oe(t);
                        e.stopPropagation();
                        let r = Ne(o, n, N);
                        r && E.current(r)
                    }
                },
                "data-w-component": D ? `select` : void 0,
                ...ee,
                children: [j && !M && (0, z.jsx)(`span`, {
                    id: I,
                    className: `sr-only w-full h-0 left-0 bottom-0 pointer-events-none`,
                    children: j
                }), (0, z.jsx)(`span`, {
                    id: F,
                    children: a ? (0, z.jsx)(T, {
                        ...se
                    }) : (0, z.jsx)(T, {
                        ...ie
                    })
                }), ne && (0, z.jsx)(`input`, {
                    id: n,
                    name: f,
                    value: N,
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
        }, ue = ({
            ariaProps: e
        }) => {
            let {
                value: t,
                multiple: n,
                name: i,
                options: a,
                placeholder: o,
                block: s,
                loading: c,
                onSelectRef: l,
                onTriggerClickCapture: u
            } = B();
            if (n) throw Error("Rendered native select while using `multiple` selection mode.");
            return (0, z.jsx)(`div`, {
                className: `flex min-w-0`,
                children: (0, z.jsxs)(`div`, {
                    className: r(`relative max-w-full`, s && `w-full`),
                    children: [(0, z.jsxs)(`select`, {
                        name: i,
                        "aria-label": e[`aria-label`],
                        "aria-labelledby": e[`aria-labelledby`],
                        "aria-describedby": e[`aria-describedby`],
                        className: L.NativeSelect,
                        value: t,
                        onClickCapture: u,
                        onKeyDown: e => {
                            e.stopPropagation()
                        },
                        onChange: e => {
                            let t = e.target.value,
                                n = Q(a, t);
                            n && l.current(n)
                        },
                        disabled: c,
                        "data-native-selectcontrol": ``,
                        children: [!t && (0, z.jsx)(`option`, {
                            value: ``,
                            children: o
                        }), a.map(e => G(e) ? (0, z.jsx)(de, {
                            ...e
                        }, e.label) : (0, z.jsx)(H, {
                            ...e
                        }, e.value))]
                    }), (0, z.jsx)(V, {
                        ariaProps: e,
                        tabIndex: -1,
                        "aria-hidden": `true`
                    })]
                })
            })
        }, de = ({
            label: e,
            options: t
        }) => (0, z.jsx)(`optgroup`, {
            label: e,
            children: t.map(e => (0, z.jsx)(H, {
                ...e
            }, e.value))
        }), H = ({
            value: e,
            label: t,
            disabled: n
        }) => (0, z.jsx)(`option`, {
            value: e,
            disabled: n,
            children: t
        }), fe = ({
            ariaProps: e,
            searchValue: t
        }) => {
            let {
                triggerId: n,
                loading: i,
                open: a,
                onOpenChange: c,
                side: l,
                align: d,
                alignOffset: f,
                avoidCollisions: p,
                collisionPadding: m,
                listWidth: h,
                listClassName: g,
                listMinWidth: _,
                listMaxWidth: v
            } = B(), [y, b] = (0, R.useState)(!1), x = a ?? y, S = (0, R.useRef)(null), C = T(), E = e => {
                let t = e === void 0 ? !x : e;
                a === void 0 && b(t), c?.(t), t || setTimeout(() => {
                    if (!S.current) return;
                    let e = document.activeElement;
                    e && !S.current.contains(e) || document.getElementById(n)?.focus({
                        preventScroll: !0
                    })
                })
            };
            return w(x, () => {
                E(!1)
            }), (0, z.jsxs)(O, {
                open: x,
                onOpenChange: e => {
                    i && e || E(e)
                },
                modal: !1,
                children: [(0, z.jsx)(ee, {
                    asChild: !0,
                    children: (0, z.jsx)(V, {
                        ariaProps: e,
                        onOpenChange: E
                    })
                }), (0, z.jsx)(k, {
                    forceMount: !0,
                    container: C,
                    children: (0, z.jsx)(s, {
                        className: L.Menu,
                        enterDuration: 350,
                        exitDuration: 200,
                        children: x && (0, z.jsx)(j, {
                            ref: S,
                            forceMount: !0,
                            className: r(L.MenuList, g),
                            side: l,
                            sideOffset: 5,
                            align: d,
                            alignOffset: f,
                            avoidCollisions: p,
                            collisionPadding: m ?? {
                                bottom: 30,
                                top: 30
                            },
                            onOpenAutoFocus: u,
                            onCloseAutoFocus: u,
                            onEscapeKeyDown: u,
                            style: o({
                                "select-list-width": h,
                                "select-list-min-width": _,
                                "select-list-max-width": v
                            }),
                            children: (0, z.jsx)(me, {
                                searchValue: t,
                                onOpenChange: E
                            })
                        }, `dropdown`)
                    })
                })]
            })
        }, pe = (0, R.createContext)(null), U = () => {
            let e = (0, R.use)(pe);
            if (!e) throw Error(`CustomSelectMenu components must be wrapped in <CustomSelectMenu />`);
            return e
        }, me = ({
            searchValue: e,
            onOpenChange: t
        }) => {
            let {
                multiple: n,
                value: r,
                options: i,
                searchable: a,
                searchPredicateRef: o
            } = B(), s = (0, R.useRef)(() => t(!1)), c = (0, R.useRef)(null), l = (0, R.useRef)(null), u = (0, R.useRef)(null), [d, f] = (0, R.useState)(``), p = a ? e ?? d : ``, h = (0, R.useMemo)(() => je(), []), g = `select-list-${(0,R.useId)()}`, _ = (0, R.useRef)(n ? `` : r), v = (0, R.useMemo)(() => we(i, p, o.current), [i, p, o]), y = Te(v), [b, x] = (0, R.useState)(() => {
                let e = n ? r[0] : r;
                return Q(v, e)?.value ?? y?.value ?? ``
            }), S = (0, R.useRef)(!1), C = e => {
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
                        $(b, l)?.dispatchEvent(e)
                    },
                    f = (e, t) => {
                        x(e), t.scrollIntoView({
                            block: `nearest`
                        })
                    },
                    m = () => {
                        let e = n ? r[0] : r;
                        if (e) {
                            let t = $(e, l);
                            if (t) {
                                f(e, t);
                                return
                            }
                        }
                        if (y) {
                            let e = $(y.value, l);
                            e && f(y.value, e)
                        }
                    };
                switch (t) {
                    case `ArrowDown`: {
                        if (e.preventDefault(), !b || !$(b, l)) {
                            m();
                            return
                        }
                        let t = ke(b, l),
                            n = t?.getAttribute(`data-option-id`);
                        t && n && f(n, t);
                        return
                    }
                    case `ArrowUp`: {
                        if (e.preventDefault(), !b || !$(b, l)) {
                            m();
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
                        if (p.trim() && s) return;
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
                        let e = $(r.value, l);
                        e && (x(r.value), e.scrollIntoView({
                            block: `nearest`
                        }))
                    }
                }
            }, w = (0, R.useMemo)(() => ({
                valueRef: _,
                listId: g,
                highlightedValue: b,
                setHighlightedValue: x,
                requestCloseRef: s,
                searchTerm: p,
                setSearchTerm: f,
                searchInputRef: u,
                listRef: l
            }), [g, b, x, p, f]);
            return (0, R.useEffect)(() => (m(() => {
                let e = c.current,
                    t = l.current;
                if (!e || !t) return;
                let n = $(b, t);
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
            }), []), (0, R.useLayoutEffect)(() => {
                if (!S.current) {
                    S.current = !0;
                    return
                }
                l.current && (l.current.scrollTop = 0, x(Te(v)?.value ?? ``))
            }, [v]), (0, z.jsx)(pe, {
                value: w,
                children: (0, z.jsxs)(`div`, {
                    id: g,
                    className: L.MenuInner,
                    onKeyDown: C,
                    ref: c,
                    tabIndex: 0,
                    children: [a && (0, z.jsx)(W, {
                        value: p,
                        onChange: f
                    }), (0, z.jsx)(ge, {
                        filteredOptions: v
                    }), (0, z.jsx)(xe, {})]
                })
            })
        }, W = ({
            value: e,
            onChange: t
        }) => {
            let {
                searchPlaceholder: n,
                onSearchChange: r
            } = B(), {
                listId: i,
                searchInputRef: a
            } = U();
            return (0, z.jsx)(`div`, {
                className: L.Search,
                children: (0, z.jsx)(ne, {
                    className: L.SearchInput,
                    startAdornment: (0, z.jsx)(g, {
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
        }, G = e => `options` in e, he = e => e[0] && G(e[0]), K = 300, q = e => `select-option-${encodeURIComponent(e)}`, ge = ({
            filteredOptions: e
        }) => {
            let {
                searchEmptyMessage: t,
                multiple: n
            } = B(), {
                listId: r,
                highlightedValue: i,
                listRef: a
            } = U(), o = i ? q(i) : void 0;
            if (!e.length) return typeof t == `string` ? (0, z.jsx)(`p`, {
                className: L.SearchEmpty,
                "data-text-only": !0,
                children: t
            }) : (0, z.jsx)(`div`, {
                className: L.SearchEmpty,
                children: t
            });
            let s = he(e),
                c = !s && e.length > K,
                l = s ? e.map(e => (0, z.jsx)(ve, {
                    ...e
                }, e.label)) : e.slice(0, K).map(e => (0, z.jsx)(Z, {
                    ...e
                }, e.value));
            return (0, z.jsxs)(`div`, {
                id: r,
                className: L.OptionsList,
                ref: a,
                role: `listbox`,
                tabIndex: 0,
                "aria-activedescendant": o,
                "aria-multiselectable": n || void 0,
                children: [l, c && (0, z.jsx)(J, {
                    numHidden: e.length - K
                })]
            })
        }, _e = {
            limit: 100,
            label: `Show all`
        }, ve = ({
            label: e,
            options: t,
            optionsLimit: n = _e
        }) => {
            let r = (0, R.useId)(),
                {
                    optionIndicatorPosition: i
                } = B(),
                {
                    searchTerm: a,
                    setHighlightedValue: o
                } = U(),
                [s, c] = (0, R.useState)(!1),
                l = n.limit < t.length && !a && !s,
                u = K < t.length && !l,
                d = t;
            return l ? d = t.slice(0, n.limit) : u && (d = t.slice(0, K)), (0, z.jsxs)(z.Fragment, {
                children: [(0, z.jsxs)(`div`, {
                    className: L.OptionGroupHeading,
                    children: [i === `start` && (0, z.jsx)(Y, {
                        position: i
                    }), e, i === `end` && (0, z.jsx)(Y, {
                        position: i
                    })]
                }), d.map(e => (0, z.jsx)(Z, {
                    ...e
                }, e.value)), l && (0, z.jsx)(ye, {
                    value: `group-limit-${r}`,
                    label: n.label,
                    onPointerUp: () => {
                        c(!0), o(t[n.limit].value)
                    }
                }), u && (0, z.jsx)(J, {
                    numHidden: t.length - K
                })]
            })
        }, J = ({
            numHidden: e
        }) => {
            let {
                optionIndicatorPosition: t
            } = B();
            return (0, z.jsxs)(`div`, {
                className: L.OptionHardLimitHeading,
                children: [t === `start` && (0, z.jsx)(Y, {
                    position: t
                }), `…and ${e.toLocaleString()} more options. Use search to refine results further.`, t === `end` && (0, z.jsx)(Y, {
                    position: t
                })]
            })
        }, ye = ({
            value: e,
            label: t,
            onPointerUp: n
        }) => {
            let {
                optionIndicatorPosition: i
            } = B(), {
                highlightedValue: a,
                setHighlightedValue: o
            } = U(), s = e === a;
            return (0, z.jsx)(`div`, {
                className: r(L.Option, L.OptionsLimit),
                id: q(e),
                "data-option-id": e,
                "data-highlight": s ? `` : void 0,
                role: `option`,
                "aria-selected": !1,
                onPointerUp: n,
                onPointerMove: () => {
                    s || o(e)
                },
                onPointerLeave: () => {
                    o(t => t === e ? `` : t)
                },
                children: (0, z.jsxs)(`div`, {
                    className: r(L.PressableInner, L.OptionInner),
                    children: [i === `start` && (0, z.jsx)(Y, {
                        position: i
                    }), t, i === `end` && (0, z.jsx)(Y, {
                        position: i
                    })]
                })
            })
        }, be = `data-option-id`, Y = ({
            children: e,
            indicator: t = !1,
            position: n
        }) => (0, z.jsx)(`div`, {
            className: L.OptionIndicatorSlot,
            "data-option-indicator-position": n,
            "data-select-option-indicator": t ? `` : void 0,
            children: e
        }), X = ({
            isSelected: e,
            position: t
        }) => (0, z.jsx)(Y, {
            indicator: !0,
            position: t,
            children: e && (0, z.jsx)(y, {
                className: L.OptionCheck
            })
        }), Z = e => {
            let {
                optionClassName: t,
                OptionView: n,
                value: i,
                multiple: a,
                onSelectRef: o,
                optionIndicatorPosition: s
            } = B(), {
                valueRef: c,
                requestCloseRef: l,
                highlightedValue: u,
                setHighlightedValue: d
            } = U(), {
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
            return (0, z.jsx)(`div`, {
                className: r(L.Option, t),
                id: q(f),
                "data-highlight": _ ? `` : void 0,
                role: `option`,
                "aria-selected": g,
                "data-selected": g ? `` : void 0,
                [be]: f,
                onPointerUp: p ? void 0 : v,
                onPointerMove: p ? void 0 : y,
                onPointerLeave: p ? void 0 : x,
                "aria-disabled": p,
                "data-disabled": p ? `` : void 0,
                children: (0, z.jsxs)(`div`, {
                    className: L.PressableInner,
                    children: [(0, z.jsxs)(`div`, {
                        className: L.OptionInner,
                        children: [s === `start` && (0, z.jsx)(X, {
                            isSelected: g,
                            position: s
                        }), (0, z.jsx)(n, {
                            ...e
                        }), m && (0, z.jsx)(b, {
                            content: m.content,
                            maxWidth: m.maxWidth,
                            side: `right`,
                            children: (0, z.jsx)(D, {})
                        }), s === `end` && (0, z.jsx)(X, {
                            isSelected: g,
                            position: s
                        })]
                    }), e.description && (0, z.jsxs)(`div`, {
                        className: L.OptionInner,
                        children: [s === `start` && (0, z.jsx)(Y, {
                            position: s
                        }), e.description, s === `end` && (0, z.jsx)(Y, {
                            position: s
                        })]
                    })]
                })
            })
        }, xe = () => {
            let {
                actions: e
            } = B();
            return e.length === 0 ? null : (0, z.jsx)(`div`, {
                className: L.ActionsContainer,
                children: e.map(e => (0, z.jsx)(Se, {
                    ...e
                }, e.id))
            })
        }, Se = ({
            id: e,
            label: t,
            Icon: n,
            className: i
        }) => {
            let {
                onActionSelect: a
            } = B(), {
                requestCloseRef: o
            } = U(), s = e => {
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
            return (0, z.jsx)(`div`, {
                className: L.Action,
                onPointerUp: c,
                onKeyDown: s,
                tabIndex: 0,
                children: (0, z.jsxs)(`div`, {
                    className: r(L.ActionInner, i),
                    children: [n && (0, z.jsx)(n, {
                        role: `presentation`
                    }), t]
                })
            })
        }, Ce = (e, t) => e.label.toLowerCase().includes(t), we = (e, t, n) => {
            let r = t.trim().toLocaleLowerCase();
            if (!r) return e;
            let i = e => n(e, r);
            return he(e) ? e.reduce((e, t) => {
                let n = t.options.filter(i);
                return n.length && e.push({
                    ...t,
                    options: n
                }), e
            }, []) : e.reduce((e, t) => (i(t) && e.push(t), e), [])
        }, Te = e => {
            if (!e.length) return;
            let t;
            for (let n of e)
                if (G(n)) {
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
        }, Q = (e, t) => {
            let n;
            for (let r of e)
                if (G(r)) {
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
        }, Ee = (e, t) => {
            let n = [],
                r = new Set(t);
            for (let t of e)
                if (G(t)) {
                    let e = t.options.filter(e => r.has(e.value));
                    n = n.concat(e)
                } else r.has(t.value) && n.push(t);
            return n
        }, De = 40, $ = (e, t) => Array.from(t.querySelectorAll(`[data-option-id]`)).find(t => t.getAttribute(`data-option-id`) === e), Oe = e => e.matches(`[data-option-id]:not([data-disabled])`), ke = (e, t) => {
            let n = $(e, t)?.nextElementSibling,
                r = 0;
            for (; n && r < De;) {
                if (Oe(n)) return n;
                n = n.nextElementSibling, r += 1
            }
        }, Ae = (e, t) => {
            let n = $(e, t)?.previousElementSibling,
                r = 0;
            for (; n && r < De;) {
                if (Oe(n)) return n;
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
                if (G(t)) {
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
    le as n, Pe as r, Fe as t
};
//# sourceMappingURL=2a78025d-jbv3tn8ax2ci37np.js.map