import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as t,
    y5 as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as r
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    P_n as i,
    Ygn as a
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $y as o,
    Qy as s
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as c
} from "./b0c2397c-gzseaeqr0yijp0eh.js";
var l, u, d, f, p = e((() => {
        s(), t(), a(), l = r(), u = e => Number(Array.isArray(e) ? e[0] ?? 0 : e ?? 0), d = e => {
            if ((e => typeof e == `object` && !!e && `tooltipMetricDisplayNames` in e)(e)) return e.tooltipMetricDisplayNames
        }, f = ({
            active: e,
            payload: t,
            label: r,
            valueFormatter: a,
            rowValueFormatter: s,
            metricToLabel: c,
            totalLabel: f,
            metricKeysAtBottom: p,
            metricOrder: m,
            showZeroMetrics: h = !1,
            labelFormatter: g,
            summaryFormatter: _,
            highlightedMetricKey: v,
            variant: y = `default`
        }) => {
            if (!e || !t || !t.length || r == null) return null;
            let b = g ? g(String(r), t) : i(o(String(r)), `MMM d, yyyy`),
                x = t.reduce((e, t) => e + u(t.value), 0),
                S = new Set(p ?? []),
                C = new Map((m ?? []).map((e, t) => [e, t])),
                w = e => {
                    let t = String(e.dataKey ?? ``);
                    return t.startsWith(`values.`) ? t.slice(7) : String(e.name ?? t)
                },
                T = e => {
                    let t = w(e),
                        n = String(e.dataKey ?? ``);
                    return S.has(t) || S.has(n)
                },
                E = [...t].sort((e, t) => {
                    let n = T(e);
                    if (n !== T(t)) return n ? 1 : -1;
                    let r = w(e),
                        i = w(t),
                        a = C.get(r),
                        o = C.get(i);
                    return a !== void 0 && o !== void 0 ? a - o : a === void 0 ? o === void 0 ? u(t.value) - u(e.value) : 1 : -1
                });
            if (y === `settingsAnalytics`) {
                let e = E.filter(e => h || u(e.value) !== 0),
                    t = _?.(x, e) ?? (e.length === 0 ? a(0, 1) : void 0),
                    r = e.map((t, n) => ({
                        item: t,
                        index: n,
                        formattedValue: s ? s(u(t.value), x, e, n) : a(u(t.value), x)
                    })).filter(({
                        formattedValue: e
                    }) => e != null);
                return (0, l.jsxs)(`div`, {
                    className: n(`border-token-border-light bg-token-bg-elevated-primary relative z-100 flex w-[208px] flex-col rounded-[10px] border px-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.12)]`, t == null ? `gap-1 py-1.5` : `gap-1.5 py-2`),
                    children: [(0, l.jsxs)(`div`, {
                        className: `flex flex-col gap-px text-xs leading-4`,
                        children: [t == null ? null : (0, l.jsx)(`div`, {
                            className: `text-token-text-primary font-semibold`,
                            children: t
                        }), (0, l.jsx)(`div`, {
                            className: `text-token-text-tertiary`,
                            children: b
                        })]
                    }), t == null || r.length === 0 ? null : (0, l.jsx)(`div`, {
                        className: `bg-token-border-light h-px w-full`
                    }), (0, l.jsx)(`div`, {
                        className: r.length === 0 ? `hidden` : `flex flex-col gap-1`,
                        children: r.map(({
                            item: e,
                            index: t,
                            formattedValue: r
                        }) => {
                            let i = w(e),
                                a = d(e.payload)?.[i] ?? c[i]?.displayName ?? i,
                                o = e.color ?? c[i]?.color;
                            return (0, l.jsxs)(`div`, {
                                "data-testid": `chart-tooltip-row`,
                                className: n(`flex min-h-4 items-center justify-between gap-4 rounded-lg text-xs leading-4`, v === i && `bg-token-bg-tertiary`),
                                children: [(0, l.jsxs)(`div`, {
                                    className: `flex min-w-0 items-center gap-1.5`,
                                    children: [(0, l.jsx)(`span`, {
                                        className: `size-[7px] shrink-0 rounded-full`,
                                        style: {
                                            backgroundColor: o ?? `transparent`
                                        }
                                    }), (0, l.jsx)(`span`, {
                                        className: `text-token-text-secondary truncate`,
                                        "data-testid": `chart-tooltip-label`,
                                        children: a
                                    })]
                                }), (0, l.jsx)(`span`, {
                                    className: `text-token-text-primary shrink-0 text-end font-semibold tabular-nums`,
                                    children: r
                                })]
                            }, `${i}-${t}`)
                        })
                    })]
                })
            }
            return (0, l.jsxs)(`div`, {
                className: `border-token-border-heavy bg-token-bg-primary relative z-100 rounded-lg border p-2 shadow-md`,
                children: [(0, l.jsx)(`div`, {
                    className: `text-secondary flex flex-row items-stretch p-0.5 text-xs`,
                    children: (0, l.jsx)(`div`, {
                        className: n(`me-8 min-w-[100px] font-medium`),
                        children: b
                    })
                }), E.map((e, t) => {
                    if (!h && u(e.value) === 0) return null;
                    let r = w(e),
                        i = d(e.payload)?.[r] ?? c[r]?.displayName ?? r,
                        o = e.color ?? c[r]?.color;
                    return (0, l.jsxs)(`div`, {
                        "data-testid": `chart-tooltip-row`,
                        className: n(`text-tertiary flex flex-row items-stretch rounded-md p-0.5 text-xs`, v === r && `bg-token-bg-tertiary`),
                        children: [(0, l.jsxs)(`div`, {
                            className: `flex items-center`,
                            children: [(0, l.jsx)(`div`, {
                                className: `me-2 h-2.5 w-2.5`,
                                style: {
                                    backgroundColor: o ?? `transparent`
                                }
                            }), (0, l.jsx)(`div`, {
                                className: `me-8 min-w-[100px]`,
                                "data-testid": `chart-tooltip-label`,
                                children: i
                            })]
                        }), (0, l.jsx)(`div`, {
                            className: `grow text-end`,
                            children: a(u(e.value), x)
                        })]
                    }, t)
                }), f ? (0, l.jsxs)(`div`, {
                    "data-testid": `chart-tooltip-total-row`,
                    className: `text-secondary flex flex-row items-stretch p-0.5 text-xs font-medium`,
                    children: [(0, l.jsxs)(`div`, {
                        className: `flex items-center`,
                        children: [(0, l.jsx)(`div`, {
                            className: `me-2 h-2.5 w-2.5 opacity-0`
                        }), (0, l.jsx)(`div`, {
                            className: `me-8 min-w-[100px]`,
                            "data-testid": `chart-tooltip-total-label`,
                            children: f
                        })]
                    }), (0, l.jsx)(`div`, {
                        className: `grow text-end`,
                        children: a(x, x)
                    })]
                }) : null]
            })
        }
    })),
    m, h, g, _ = e((() => {
        c(), m = r(), h = 10, g = e => {
            let {
                fill: t,
                x: n,
                y: r,
                payload: i,
                index: a,
                tickFormatter: o
            } = e, s = n, c;
            return a === 0 ? (s -= h, c = `start`) : (s += h, c = `end`), (0, m.jsx)(`text`, {
                x: s,
                y: r + h,
                fill: t ?? `#6E6E80`,
                textAnchor: c,
                fontSize: 12,
                fontWeight: 400,
                children: o(i.value)
            })
        }
    })),
    v, y, b = e((() => {
        v = `vWs90q_RechartsContainer`, y = {
            RechartsContainer: v
        }
    }));
export {
    f as a, _ as i, y as n, p as o, g as r, b as t
};
//# sourceMappingURL=fc35a31a-h034naiagv1nmubg.js.map