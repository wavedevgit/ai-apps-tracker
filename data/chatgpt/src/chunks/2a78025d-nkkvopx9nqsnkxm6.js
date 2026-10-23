import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    K5 as n,
    q5 as r
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    B_t as o,
    G_t as s,
    H_t as c,
    J_t as l,
    Q_t as u,
    R_t as d,
    Y_t as f,
    Z_t as p,
    k_t as m,
    m_t as h
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    n as g,
    t as _
} from "./9d60841e-e49t3yx590vsf159.js";
import {
    a as v,
    g as y,
    i as b,
    l as x,
    u as S,
    y as C
} from "./707eab0c-iv8ek9kc5qu6c0ky.js";
import {
    n as w,
    t as T
} from "./170322a3-osj2nsczby2m2x8s.js";
import {
    i as E,
    r as D
} from "./29887a5f-grm59ned1wm0yr8e.js";
import {
    C as O,
    S as k,
    t as A,
    w as ee,
    x as j
} from "./bcae0416-irbi1zql5j1lffpc.js";
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
} from "./36ecb4f8-6735f7qa0pgc5djk.js";
import {
    a as I,
    t as re
} from "./064f6ac1-kt6m76z0ppnpeilw.js";
import {
    n as ie,
    t as ae
} from "./a7f9e0fc-e56020ldb2jwt48h.js";
import {
    n as oe,
    t as L
} from "./85914cf1-fnfqu97rf9sh00xd.js";
var R, z, se, B, ce, le, ue, de, V, fe, pe, H, me, he, U, ge, W, G, _e, K, q, ve, ye, be, J, xe, Se, Y, Ce, we, Te, Ee, De, Oe, ke, X, Z, Ae, je, Q, $, Me, Ne, Pe, Fe, Ie, Le = e((() => {
        r(), A(), R = t(a()), u(), x(), te(), P(), l(), d(), g(), w(), E(), F(), y(), re(), ae(), b(), h(), oe(), z = i(), se = (0, R.createContext)(null), B = () => {
            let e = (0, R.use)(se);
            if (!e) throw Error(`Select components must be wrapped in <Select />`);
            return e
        }, ce = ({
            label: e
        }) => (0, z.jsx)(z.Fragment, {
            children: e
        }), le = ({
            label: e
        }) => (0, z.jsx)(z.Fragment, {
            children: e
        }), ue = ({
            values: e,
            selectedAll: t
        }) => (0, z.jsx)(z.Fragment, {
            children: t ? `All selected` : e.length === 0 ? `Select...` : e.length === 1 ? e[0].label : `${e.length} selected`
        }), de = e => {
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
                loading: m = !1,
                open: h,
                onOpenChange: g,
                clearable: _ = !1,
                clearLabel: v,
                disabled: y = !1,
                invalid: b = !1,
                placeholder: x = `Select...`,
                loadingPlaceholder: S = `Loading...`,
                pill: C = p.pill,
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
                OptionView: ne = ce,
                renderOptionPreview: F,
                optionPreviewSide: I = `right`,
                TriggerStartIcon: re,
                triggerClassName: ie,
                onTriggerClickCapture: ae,
                opticallyAlign: oe,
                TriggerView: L,
                searchPlaceholder: B = ``,
                searchValue: de,
                searchPredicate: V = Oe,
                searchEmptyMessage: pe = `No results found.`,
                onSearchChange: H,
                searchable: he,
                listMaxWidth: U = `auto`,
                __isWidget: ge = !1,
                forceNativeSelect: W = !1
            } = e, G = e.block ?? l !== `ghost`, K = e.align ?? (G ? `center` : `start`), q = e.alignOffset ?? (K === `center` ? 0 : -5), ve = e.listMinWidth ?? (G ? `auto` : 300);
            if (W && c && f) throw Error("Select: `forceNativeSelect` is only supported when `multiple` is false.");
            let ye = M((e, t) => {
                    if (c) {
                        if (!e.value) {
                            j([]);
                            return
                        }
                        if (t) {
                            let t = o.filter(t => t !== e.value),
                                n = Ae(D, t);
                            j(n)
                        } else {
                            let t = Ae(D, o);
                            j(t.concat(e))
                        }
                    } else j(e)
                }),
                be = N(e => g?.(e)),
                J = g ? be : void 0,
                xe = N(e => H?.(e)),
                Se = H ? xe : void 0,
                Y = N(e => ae?.(e)),
                Ce = ae ? Y : void 0,
                we = (0, R.useRef)(V);
            we.current = V;
            let Te = (0, R.useMemo)(() => O, [O.length]),
                Ee = (0, R.useRef)(O);
            Ee.current = O;
            let De = (0, R.useCallback)(e => {
                    Ee.current.find(t => t.id === e)?.onSelect(e)
                }, []),
                ke = (0, R.useMemo)(() => _e(D) ? D.reduce((e, t) => e + t.options.length, 0) : D.length, [D]),
                X = `select-trigger-${(0,R.useId)()}`,
                Z = he ?? ke > 15,
                je = (0, R.useMemo)(() => ({
                    "aria-label": n,
                    "aria-labelledby": r,
                    "aria-describedby": i
                }), [i, n, r]),
                Q = (0, R.useMemo)(() => c ? {
                    multiple: !0,
                    value: o,
                    TriggerView: L ?? ue
                } : {
                    multiple: !1,
                    value: o,
                    TriggerView: L ?? le
                }, [c, o, L]),
                $ = (0, R.useMemo)(() => ({
                    ...Q,
                    triggerId: X,
                    id: t,
                    name: s,
                    required: a,
                    options: D,
                    placeholder: x,
                    loadingPlaceholder: S,
                    loading: m,
                    open: h,
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
                    listMinWidth: ve,
                    listMaxWidth: U,
                    searchPlaceholder: B,
                    searchEmptyMessage: pe,
                    onSearchChange: Se,
                    TriggerStartIcon: re,
                    triggerClassName: ie,
                    onTriggerClickCapture: Ce,
                    opticallyAlign: oe,
                    optionClassName: te,
                    optionIndicatorPosition: P,
                    OptionView: ne,
                    renderOptionPreview: F,
                    optionPreviewSide: I,
                    actions: Te,
                    onActionSelect: De,
                    onSelectRef: ye,
                    searchPredicateRef: we,
                    searchable: Z,
                    disabled: y,
                    invalid: b,
                    __isWidget: ge,
                    forceNativeSelect: W
                }), [Q, X, t, a, s, D, x, S, m, h, J, _, v, l, C, w, u, d, G, K, q, k, A, ee, T, E, ve, U, B, pe, Se, re, ie, Ce, oe, te, P, ne, F, I, Te, De, ye, Z, y, b, ge, W]);
            return (0, z.jsx)(se.Provider, {
                value: $,
                children: W ? (0, z.jsx)(fe, {
                    ariaProps: je
                }) : (0, z.jsx)(me, {
                    ariaProps: je,
                    searchValue: de
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
            } = e, j = A?.[`aria-label`], M = A?.[`aria-labelledby`], te = A?.[`aria-describedby`], N = a ? i[0] : i, P = s ? y : v, ne = (f || n) && !O, F = (0, R.useId)(), I = (0, R.useId)(), re = (0, R.useMemo)(() => Z(o, N) || {
                value: ``,
                label: P
            }, [N, o, P]), ae = a ? i.length > 0 : !!i, oe = s || !ae, L = (0, R.useMemo)(() => Pe(), []), se = (0, R.useMemo)(() => {
                if (!a) return {
                    values: [],
                    selectedAll: !1
                };
                let e = Ae(o, i),
                    t = o.flatMap(e => `options` in e ? e.options : e);
                return {
                    values: e.length ? e : [{
                        value: ``,
                        label: P
                    }],
                    selectedAll: t.length > 0 && t.length <= i.length
                }
            }, [a, o, i, P]);
            return (0, z.jsxs)(ie, {
                id: t,
                "aria-labelledby": (0, R.useMemo)(() => {
                    if (M) return `${M} ${F}`;
                    if (j) return `${I} ${F}`
                }, [I, j, M, F]),
                "aria-describedby": te,
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
                    E.current({
                        value: ``,
                        label: ``
                    }), k?.(!1)
                } : void 0,
                clearLabel: d,
                onInteract: k,
                onKeyDown: e => {
                    let t = e.key;
                    if (!a && Fe(t)) {
                        let n = L(t);
                        e.stopPropagation();
                        let r = Ie(o, n, N);
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
                        ...re
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
        }, fe = ({
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
            } = B();
            if (r) throw Error("Rendered native select while using `multiple` selection mode.");
            return (0, z.jsx)(`div`, {
                className: `flex min-w-0`,
                children: (0, z.jsxs)(`div`, {
                    className: n(`relative max-w-full`, s && `w-full`),
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
                                n = Z(a, t);
                            n && l.current(n)
                        },
                        disabled: c,
                        "data-native-selectcontrol": ``,
                        children: [!t && (0, z.jsx)(`option`, {
                            value: ``,
                            children: o
                        }), a.map(e => G(e) ? (0, z.jsx)(pe, {
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
        }, pe = ({
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
        }), me = ({
            ariaProps: e,
            searchValue: t
        }) => {
            let {
                triggerId: r,
                loading: i,
                open: a,
                onOpenChange: s,
                side: l,
                align: u,
                alignOffset: d,
                avoidCollisions: f,
                collisionPadding: p,
                listWidth: h,
                listClassName: g,
                listMinWidth: _,
                listMaxWidth: v
            } = B(), [y, b] = (0, R.useState)(!1), x = a ?? y, w = (0, R.useRef)(null), T = C(), E = e => {
                let t = e === void 0 ? !x : e;
                a === void 0 && b(t), s?.(t), t || setTimeout(() => {
                    if (!w.current) return;
                    let e = document.activeElement;
                    e && !w.current.contains(e) || document.getElementById(r)?.focus({
                        preventScroll: !0
                    })
                })
            };
            return S(x, () => {
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
                    container: T,
                    children: (0, z.jsx)(m, {
                        className: L.Menu,
                        enterDuration: 350,
                        exitDuration: 200,
                        children: x && (0, z.jsx)(j, {
                            ref: w,
                            forceMount: !0,
                            className: n(L.MenuList, g),
                            side: l,
                            sideOffset: 5,
                            align: u,
                            alignOffset: d,
                            avoidCollisions: f,
                            collisionPadding: p ?? {
                                bottom: 30,
                                top: 30
                            },
                            onOpenAutoFocus: o,
                            onCloseAutoFocus: o,
                            onEscapeKeyDown: o,
                            style: c({
                                "select-list-width": h,
                                "select-list-min-width": _,
                                "select-list-max-width": v
                            }),
                            children: (0, z.jsx)(ge, {
                                searchValue: t,
                                onOpenChange: E
                            })
                        }, `dropdown`)
                    })
                })]
            })
        }, he = (0, R.createContext)(null), U = () => {
            let e = (0, R.use)(he);
            if (!e) throw Error(`CustomSelectMenu components must be wrapped in <CustomSelectMenu />`);
            return e
        }, ge = ({
            searchValue: e,
            onOpenChange: t
        }) => {
            let {
                multiple: n,
                value: r,
                options: i,
                searchable: a,
                searchPredicateRef: o,
                renderOptionPreview: c
            } = B(), l = (0, R.useRef)(() => t(!1)), u = (0, R.useRef)(null), d = (0, R.useRef)(null), f = (0, R.useRef)(null), [p, m] = (0, R.useState)(``), h = a ? e ?? p : ``, g = (0, R.useMemo)(() => Pe(), []), _ = `select-list-${(0,R.useId)()}`, v = (0, R.useRef)(n ? `` : r), y = (0, R.useMemo)(() => ke(i, h, o.current), [i, h, o]), b = X(y), [x, S] = (0, R.useState)(() => {
                let e = n ? r[0] : r;
                return Z(y, e)?.value ?? b?.value ?? ``
            }), [C, w] = (0, R.useState)(null), T = M(c ? C : null), E = c ? h : void 0, D = (0, R.useRef)(E), O = (0, R.useRef)(!1), k = e => {
                let t = e.key,
                    a = n ? r[0] : r,
                    o = x || b?.value || a,
                    s = document.activeElement === f.current,
                    l = u.current;
                if (!l || c && !l.contains(e.target)) return;
                let d = () => {
                        let e = new PointerEvent(`pointerup`, {
                            bubbles: !0,
                            cancelable: !0,
                            pointerType: `mouse`
                        });
                        Q(x, l)?.dispatchEvent(e)
                    },
                    p = (e, t) => {
                        S(e), c && w(e), t.scrollIntoView({
                            block: `nearest`
                        })
                    },
                    m = () => {
                        let e = n ? r[0] : r;
                        if (e) {
                            let t = Q(e, l);
                            if (t) {
                                p(e, t);
                                return
                            }
                        }
                        if (b) {
                            let e = Q(b.value, l);
                            e && p(b.value, e)
                        }
                    };
                switch (t) {
                    case `ArrowDown`: {
                        if (e.preventDefault(), c && w(o), !x || !Q(x, l)) {
                            m();
                            return
                        }
                        let t = Me(x, l),
                            n = t?.getAttribute(`data-option-id`);
                        t && n && p(n, t);
                        return
                    }
                    case `ArrowUp`: {
                        if (e.preventDefault(), c && w(o), !x || !Q(x, l)) {
                            m();
                            return
                        }
                        let t = Ne(o, l),
                            n = t?.getAttribute(`data-option-id`);
                        t && n && p(n, t);
                        return
                    }
                    case `Enter`:
                        e.preventDefault(), d();
                        return;
                    case ` `:
                        if (h.trim() && s) return;
                        e.preventDefault(), d();
                        return;
                    default:
                        break
                }
                if (Fe(t)) {
                    if (s) return;
                    let n = g(t);
                    e.stopPropagation();
                    let r = Ie(i, n, x);
                    if (r) {
                        let e = Q(r.value, l);
                        e && p(r.value, e)
                    }
                }
            }, A = (0, R.useMemo)(() => ({
                valueRef: v,
                listId: _,
                highlightedValue: x,
                setHighlightedValue: S,
                previewedValue: C,
                setPreviewedValue: w,
                requestCloseRef: l,
                searchTerm: h,
                setSearchTerm: m,
                searchInputRef: f,
                menuRef: u,
                listRef: d
            }), [_, x, S, C, h, m]);
            return (0, R.useEffect)(() => (s(() => {
                let e = u.current,
                    t = d.current;
                if (!e || !t) return;
                let n = Q(x, t);
                if (n) {
                    let e = t.clientHeight,
                        r = n.offsetTop,
                        i = n.offsetHeight,
                        a = r - e / 2 + i / 2,
                        o = t.scrollHeight - e;
                    t.scrollTop = Math.max(0, Math.min(a, o))
                }
            }), (f.current || d.current || u.current)?.focus({
                preventScroll: !0
            }), () => {
                O.current = !1
            }), []), (0, R.useLayoutEffect)(() => {
                let e = D.current !== E;
                if (D.current = E, !O.current) {
                    O.current = !0;
                    return
                }
                if (!d.current) {
                    T.current != null && w(null);
                    return
                }
                let t = T.current == null ? void 0 : Q(T.current, d.current);
                !e && t?.hasAttribute(`data-option-preview`) && $(t) || (d.current.scrollTop = 0, S(X(y)?.value ?? ``), w(null))
            }, [y, E, c, T]), (0, z.jsx)(he, {
                value: A,
                children: (0, z.jsxs)(`div`, {
                    id: _,
                    className: L.MenuInner,
                    onKeyDown: k,
                    ref: u,
                    tabIndex: 0,
                    children: [a && (0, z.jsx)(W, {
                        value: h,
                        onChange: m
                    }), (0, z.jsx)(ve, {
                        filteredOptions: y
                    }), (0, z.jsx)(Ee, {})]
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
                    startAdornment: (0, z.jsx)(D, {
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
        }, G = e => `options` in e, _e = e => e[0] && G(e[0]), K = 300, q = e => `select-option-${encodeURIComponent(e)}`, ve = ({
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
            let s = _e(e),
                c = !s && e.length > K,
                l = s ? e.map(e => (0, z.jsx)(be, {
                    ...e
                }, e.label)) : e.slice(0, K).map(e => (0, z.jsx)(we, {
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
        }, ye = {
            limit: 100,
            label: `Show all`
        }, be = ({
            label: e,
            options: t,
            optionsLimit: n = ye
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
                }), d.map(e => (0, z.jsx)(we, {
                    ...e
                }, e.value)), l && (0, z.jsx)(xe, {
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
        }, xe = ({
            value: e,
            label: t,
            onPointerUp: r
        }) => {
            let {
                optionIndicatorPosition: i
            } = B(), {
                highlightedValue: a,
                setHighlightedValue: o
            } = U(), s = e === a;
            return (0, z.jsx)(`div`, {
                className: n(L.Option, L.OptionsLimit),
                id: q(e),
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
                children: (0, z.jsxs)(`div`, {
                    className: n(L.PressableInner, L.OptionInner),
                    children: [i === `start` && (0, z.jsx)(Y, {
                        position: i
                    }), t, i === `end` && (0, z.jsx)(Y, {
                        position: i
                    })]
                })
            })
        }, Se = `data-option-id`, Y = ({
            children: e,
            indicator: t = !1,
            position: n
        }) => (0, z.jsx)(`div`, {
            className: L.OptionIndicatorSlot,
            "data-option-indicator-position": n,
            "data-select-option-indicator": t ? `` : void 0,
            children: e
        }), Ce = ({
            isSelected: e,
            position: t
        }) => (0, z.jsx)(Y, {
            indicator: !0,
            position: t,
            children: e && (0, z.jsx)(_, {
                className: L.OptionCheck
            })
        }), we = e => {
            let {
                optionClassName: t,
                OptionView: r,
                value: i,
                multiple: a,
                onSelectRef: o,
                optionIndicatorPosition: s,
                renderOptionPreview: c
            } = B(), {
                valueRef: l,
                requestCloseRef: u,
                highlightedValue: d,
                setHighlightedValue: f,
                previewedValue: p,
                setPreviewedValue: m
            } = U(), {
                value: h,
                disabled: g,
                tooltip: _
            } = e, y = g ? null : c?.(e), b = y != null && typeof y != `boolean`, x = l.current, S = a ? i.includes(h) : h === x, C = h === d, w = () => {
                a ? o.current(e, S) : (o.current(e), u.current?.())
            }, E = () => {
                p !== h && m(null), !C && f(h)
            }, D = () => {
                b && p === h || f(e => e === h ? `` : e)
            }, O = (0, z.jsx)(`div`, {
                className: n(L.Option, t),
                id: q(h),
                "data-highlight": C ? `` : void 0,
                role: `option`,
                "aria-selected": S,
                "aria-haspopup": void 0,
                "aria-expanded": void 0,
                "aria-controls": void 0,
                "data-selected": S ? `` : void 0,
                [Se]: h,
                "data-option-preview": b ? `` : void 0,
                onPointerUp: g ? void 0 : w,
                onPointerMove: g ? void 0 : E,
                onPointerLeave: g ? void 0 : D,
                "aria-disabled": g,
                "data-disabled": g ? `` : void 0,
                children: (0, z.jsxs)(`div`, {
                    className: L.PressableInner,
                    children: [(0, z.jsxs)(`div`, {
                        className: L.OptionInner,
                        children: [s === `start` && (0, z.jsx)(Ce, {
                            isSelected: S,
                            position: s
                        }), (0, z.jsx)(r, {
                            ...e
                        }), _ && (0, z.jsx)(v, {
                            content: _.content,
                            maxWidth: _.maxWidth,
                            side: `right`,
                            children: (0, z.jsx)(T, {})
                        }), s === `end` && (0, z.jsx)(Ce, {
                            isSelected: S,
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
            });
            return b ? (0, z.jsx)(Te, {
                value: h,
                label: e.label,
                preview: y,
                children: O
            }) : O
        }, Te = ({
            value: e,
            label: t,
            preview: n,
            children: r
        }) => {
            let {
                optionPreviewSide: i
            } = B(), {
                highlightedValue: a,
                previewedValue: o,
                setPreviewedValue: s,
                searchInputRef: c,
                listRef: l,
                menuRef: u
            } = U(), d = (0, R.useRef)(null), f = (0, R.useRef)(!1), p = (0, R.useCallback)(e => {
                e || (f.current = d.current?.contains(document.activeElement) ?? !1), d.current = e
            }, []), m = o === e;
            return (0, z.jsxs)(I, {
                showOnHover: !0,
                open: m,
                onOpenChange: t => {
                    if (t) {
                        a === e && s(e);
                        return
                    }
                    d.current?.contains(document.activeElement) && (c.current || l.current || u.current)?.focus({
                        preventScroll: !0
                    }), s(t => t === e ? null : t)
                },
                children: [(0, z.jsx)(I.Trigger, {
                    onClick: e => e.preventDefault(),
                    children: r
                }), m && (0, z.jsx)(I.Content, {
                    "aria-label": t,
                    side: i,
                    align: `start`,
                    minWidth: `auto`,
                    onCloseAutoFocus: e => {
                        e.preventDefault(), f.current && document.activeElement === document.body && (c.current || l.current || u.current)?.focus({
                            preventScroll: !0
                        })
                    },
                    children: (0, z.jsx)(`div`, {
                        ref: p,
                        children: n
                    })
                })]
            })
        }, Ee = () => {
            let {
                actions: e
            } = B();
            return e.length === 0 ? null : (0, z.jsx)(`div`, {
                className: L.ActionsContainer,
                children: e.map(e => (0, z.jsx)(De, {
                    ...e
                }, e.id))
            })
        }, De = ({
            id: e,
            label: t,
            Icon: r,
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
                    className: n(L.ActionInner, i),
                    children: [r && (0, z.jsx)(r, {
                        role: `presentation`
                    }), t]
                })
            })
        }, Oe = (e, t) => e.label.toLowerCase().includes(t), ke = (e, t, n) => {
            let r = t.trim().toLocaleLowerCase();
            if (!r) return e;
            let i = e => n(e, r);
            return _e(e) ? e.reduce((e, t) => {
                let n = t.options.filter(i);
                return n.length && e.push({
                    ...t,
                    options: n
                }), e
            }, []) : e.reduce((e, t) => (i(t) && e.push(t), e), [])
        }, X = e => {
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
        }, Z = (e, t) => {
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
        }, Ae = (e, t) => {
            let n = [],
                r = new Set(t);
            for (let t of e)
                if (G(t)) {
                    let e = t.options.filter(e => r.has(e.value));
                    n = n.concat(e)
                } else r.has(t.value) && n.push(t);
            return n
        }, je = 40, Q = (e, t) => Array.from(t.querySelectorAll(`[data-option-id]`)).find(t => t.getAttribute(`data-option-id`) === e), $ = e => e.matches(`[data-option-id]:not([data-disabled])`), Me = (e, t) => {
            let n = Q(e, t)?.nextElementSibling,
                r = 0;
            for (; n && r < je;) {
                if ($(n)) return n;
                n = n.nextElementSibling, r += 1
            }
        }, Ne = (e, t) => {
            let n = Q(e, t)?.previousElementSibling,
                r = 0;
            for (; n && r < je;) {
                if ($(n)) return n;
                n = n.previousElementSibling, r += 1
            }
        }, Pe = () => {
            let e = ``,
                t;
            return n => (n = n.toLowerCase(), e += n, t && clearTimeout(t), t = setTimeout(() => {
                e = ``
            }, 500), n.repeat(e.length) === e ? n : e)
        }, Fe = e => /^[a-zA-Z0-9]$/.test(e), Ie = (e, t, n) => {
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
    Re = e((() => {
        Le()
    }));
export {
    de as n, Le as r, Re as t
};
//# sourceMappingURL=2a78025d-nkkvopx9nqsnkxm6.js.map