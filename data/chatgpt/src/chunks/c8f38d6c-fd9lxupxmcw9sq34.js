import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Att as n,
    K5 as r,
    LU as i,
    Mtt as a,
    Wtt as o,
    dC as s,
    fC as c,
    q5 as l,
    zU as u
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as d,
    Vn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Abt as p,
    jbt as m
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    CC as h,
    SC as g,
    hh as _,
    mh as v
} from "./30901919-s8bko9nrkqwv6i4f.js";
var y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, F = e((() => {
    n(), m(), _(), h(), i(), c(), l(), y = t(f()), b = d(), x = e => Array.isArray(e) || a(e) || e instanceof Map || e instanceof Set, S = e => e == null || typeof e == `string` || typeof e == `number` || typeof e == `boolean`, C = e => a(e) ? Object.entries(e) : Array.from(e.entries()), w = e => `${typeof e}:${typeof e==`object`?JSON.stringify(e):e}`, T = ({
        isPreview: e = !1,
        isInitialLevelExpanded: t = !1,
        unwrap: n = !1,
        value: i,
        className: a
    }) => {
        let [o, s] = (0, y.useState)(t);
        if (S(i)) {
            let e = (0, b.jsx)(k, {
                value: i,
                depth: 0
            });
            return a ? (0, b.jsx)(`span`, {
                className: a,
                children: e
            }) : e
        }
        return x(i) ? n ? (0, b.jsx)(`span`, {
            className: r(`text-sm`, a),
            children: (0, b.jsx)(O, {
                value: i,
                depth: 0
            })
        }) : (0, b.jsxs)(`span`, {
            className: r(`relative z-0 max-w-full font-mono text-sm leading-6`, o && `w-full flex-auto`, a),
            children: [(0, b.jsxs)(`span`, {
                role: `button`,
                className: `group/row flex flex-wrap items-center gap-x-1`,
                onClick: () => s(!o),
                children: [!e && (0, b.jsx)(N, {
                    isExpanded: o
                }), (0, b.jsx)(D, {
                    value: i,
                    depth: 0
                }), (0, b.jsx)(P, {
                    value: i
                })]
            }), o && !e && (0, b.jsx)(`div`, {
                className: `ps-6`,
                children: (0, b.jsx)(O, {
                    value: i,
                    depth: 0
                })
            })]
        }) : (0, b.jsx)(`span`, {
            className: r(`truncate`, a),
            children: String(i)
        })
    }, E = ({
        value: e,
        depth: t = 0
    }) => x(e) ? (0, b.jsx)(O, {
        depth: t,
        value: e
    }) : S(e) ? (0, b.jsx)(k, {
        depth: t,
        value: e
    }) : (0, b.jsx)(`span`, {
        className: `truncate`,
        children: String(e)
    }), D = ({
        value: e,
        depth: t = 0
    }) => {
        let n = Array.isArray(e),
            r = C(e);
        return (0, b.jsxs)(`div`, {
            className: `inline-flex max-w-fit min-w-0 grow basis-0`,
            children: [!a(e) && (0, b.jsx)(j, {
                isShort: !0,
                isSecondary: !0,
                collection: e
            }), n ? `[` : `{`, (0, b.jsx)(`span`, {
                className: `inline-flex max-w-fit min-w-0 shrink grow basis-0 overflow-hidden`,
                children: r.map(([n, i], o) => {
                    let s = null;
                    return s = x(i) ? (0, b.jsx)(j, {
                        collection: i
                    }) : S(i) ? (0, b.jsx)(k, {
                        truncate: !0,
                        depth: t + 1,
                        value: i
                    }) : (0, b.jsx)(E, {
                        depth: t + 1,
                        value: i
                    }), (0, b.jsxs)(y.Fragment, {
                        children: [(a(e) || e instanceof Map) && (0, b.jsx)(`span`, {
                            className: `text-token-text-secondary min-w-[2em] shrink truncate whitespace-pre`,
                            children: (0, b.jsx)(M, {
                                value: e,
                                propertyKey: n
                            })
                        }), s, o < r.length - 1 && (0, b.jsx)(`span`, {
                            className: `whitespace-pre`,
                            children: `, `
                        })]
                    }, w(n))
                })
            }), n ? `]` : `}`]
        })
    }, O = ({
        value: e,
        depth: t = 0
    }) => {
        let [n, i] = (0, y.useState)(() => new Set);
        return (0, b.jsx)(`ol`, {
            className: `flex flex-col ps-6 font-mono`,
            children: C(e).map(([o, s]) => {
                let c = w(o),
                    l = n.has(c),
                    u = x(s);
                return (0, b.jsxs)(`li`, {
                    className: r(`flex ps-1 whitespace-nowrap`, u && `flex-col`, !u && `group/row flex-wrap`),
                    onClick: e => e.stopPropagation(),
                    children: [(0, b.jsxs)(`span`, {
                        onClick: u ? () => {
                            i(e => {
                                let t = new Set(e);
                                return t.has(c) ? t.delete(c) : t.add(c), t
                            })
                        } : void 0,
                        role: u ? `button` : void 0,
                        className: r(`group/row z-10 -ms-1 min-w-0 items-center gap-x-1`, u ? `flex` : `inline-flex`),
                        children: [u && (0, b.jsxs)(b.Fragment, {
                            children: [(0, b.jsx)(A, {}), (0, b.jsx)(N, {
                                shiftLeft: !0,
                                isExpanded: l
                            })]
                        }), (0, b.jsx)(`span`, {
                            className: r(`font-bold`, (a(e) || Array.isArray(e)) && `text-red-900 dark:text-blue-400`),
                            children: (0, b.jsx)(M, {
                                value: e,
                                propertyKey: o
                            })
                        }), u && !l && (0, b.jsx)(D, {
                            value: s,
                            depth: t + 1
                        }), u && l && (0, b.jsx)(j, {
                            isSecondary: !0,
                            collection: s
                        }), u && (0, b.jsx)(P, {
                            value: s
                        })]
                    }), (!u || l) && (0, b.jsx)(E, {
                        value: s,
                        depth: t + 1
                    }), (typeof s == `string` || typeof s == `number`) && (0, b.jsx)(P, {
                        value: s
                    })]
                }, c)
            })
        })
    }, k = ({
        value: e,
        truncate: t = !1
    }) => typeof e == `string` ? (0, b.jsxs)(`span`, {
        className: r(`dark:text-blue-75 text-red-500`, t && `max-w-fit min-w-[2em] shrink-0 grow basis-0 overflow-hidden text-ellipsis whitespace-nowrap`, !t && `break-words break-all whitespace-normal`),
        children: [`"`, e, `"`]
    }) : (0, b.jsx)(`span`, {
        className: r(`whitespace-nowrap`, e == null ? `text-token-text-secondary` : `dark:text-brand-purple-600 text-blue-500`),
        children: String(e)
    }), A = () => (0, b.jsx)(`span`, {
        className: `absolute start-0 end-0 z-[-1] h-6 rounded-md group-hover/row:bg-gray-50 dark:group-hover/row:bg-gray-700`
    }), j = ({
        collection: e,
        isSecondary: t = !1,
        isShort: n = !1
    }) => {
        let i = null;
        return Array.isArray(e) && e.length > 0 ? i = n ? `(${e.length})` : `Array(${e.length})` : e instanceof Set ? i = `Set(${e.size})` : e instanceof Map ? i = `Map(${e.size})` : a(e) && (i = `{…}`), i && (0, b.jsx)(`span`, {
            className: r(t && `text-token-text-secondary`),
            children: i
        })
    }, M = ({
        value: e,
        propertyKey: t
    }) => a(e) || Array.isArray(e) ? `${o(t)}: ` : e instanceof Map ? (0, b.jsxs)(`span`, {
        className: `inline-flex items-center gap-1`,
        children: [S(t) ? (0, b.jsx)(k, {
            value: t,
            depth: 0
        }) : (0, b.jsx)(`span`, {
            className: `text-token-text-secondary`,
            children: JSON.stringify(t)
        }), (0, b.jsx)(v, {
            className: `icon-sm text-token-text-secondary`
        })]
    }) : null, N = ({
        isExpanded: e,
        shiftLeft: t = !1
    }) => (0, b.jsx)(`button`, {
        className: r(`flex h-5 shrink-0 items-center overflow-hidden`, t && `ms-[-16px]`),
        children: (0, b.jsx)(g, {
            className: r(`icon-sm text-token-text-secondary transition-transform`, e && `rotate-90`)
        })
    }), P = ({
        value: e
    }) => {
        let t = u();
        return (0, b.jsx)(`span`, {
            className: r(`text-token-text-secondary relative inline-block h-4 self-center opacity-0 transition-opacity`, `group-hover/row:opacity-100 group-hover/row:delay-500`, `hover:after:bg-token-main-surface-tertiary after:pointer-events-none after:absolute after:inset-[-4px] after:z-0 after:rounded-lg after:content-['']`),
            children: (0, b.jsx)(p, {
                iconClassName: `icon-sm z-10`,
                iconOnly: !0,
                onCopy: () => {
                    s(JSON.stringify(e), t)
                }
            })
        })
    }
}));
export {
    F as n, T as t
};
//# sourceMappingURL=c8f38d6c-fd9lxupxmcw9sq34.js.map