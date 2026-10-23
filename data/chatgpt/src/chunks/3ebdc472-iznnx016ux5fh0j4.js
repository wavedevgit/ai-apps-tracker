import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bz as n,
    K5 as r,
    LU as i,
    NM as a,
    Nat as o,
    OM as s,
    Vz as c,
    jat as l,
    q5 as u,
    zU as d
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as f,
    Ln as p,
    Nn as m,
    Rn as h,
    Vn as g,
    zn as _
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    I7 as v,
    L7 as y,
    Y_n as ee,
    Z_n as te
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Bv as b,
    Vv as x
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    At as S,
    Dy as C,
    Ey as w,
    Ht as T,
    Jt as E,
    Kt as ne,
    Oy as D,
    Ut as re,
    Wt as ie,
    Zt as O,
    kt as ae,
    qt as oe
} from "./c2675c8c-oz03twoan08d72ud.js";

function se({
    data: e,
    mimeType: t,
    filename: n
}) {
    let r = document.createElement(`a`);
    r.href = `data:${t},${encodeURIComponent(e)}`, r.target = `_self`, r.download = n, r.click(), r.remove()
}
var k = e((() => {}));

function A() {
    let e = new Date,
        t = e.toISOString().slice(0, 10);
    return w(e) <= t ? e : D(t)
}

function j() {
    return D(w(te(A(), 1)))
}

function M({
    customDateRange: e,
    fallbackLabel: t,
    intl: n
}) {
    return e == null ? t : N({
        endDate: e.endDate,
        intl: n,
        startDate: e.startDate
    })
}

function N({
    endDate: e,
    intl: t,
    startDate: n
}) {
    let r = w(n) === w(e),
        i = n.getFullYear() === e.getFullYear();
    return r ? i ? t.formatDate(n, {
        day: `numeric`,
        month: `short`
    }) : t.formatDate(n, {
        day: `numeric`,
        month: `short`,
        year: `numeric`
    }) : i ? `${t.formatDate(n,{day:`numeric`,month:`short`})} - ${t.formatDate(e,{day:`numeric`,month:`short`})}` : `${t.formatDate(n,{day:`numeric`,month:`short`,year:`numeric`})} - ${t.formatDate(e,{day:`numeric`,month:`short`,year:`numeric`})}`
}
var P = e((() => {
    C(), ee()
}));

function F({
    isSelected: e,
    maximumDate: t = A(),
    onRangeSelected: i,
    selectedRange: a,
    trigger: o
}) {
    let s = _(),
        [c, l] = (0, W.useState)(!1),
        u = z(t),
        d = z(j()),
        f = a == null ? null : B(a);
    return (0, G.jsx)(v, {
        open: c,
        onOpenChange: l,
        size: `none`,
        sideOffset: 4,
        alignAgainstAnchor: `start`,
        disableAutofocus: !0,
        triggerButton: o,
        className: r(`z-[60] w-[320px] p-0`, e ? `ring-token-border-default ring-1` : void 0),
        children: (0, G.jsxs)(`div`, {
            className: `w-[320px] p-3`,
            children: [(0, G.jsxs)(`div`, {
                className: `mb-3`,
                children: [(0, G.jsx)(`div`, {
                    className: `text-sm font-medium`,
                    children: (0, G.jsx)(m, {
                        ...K.title
                    })
                }), (0, G.jsx)(`div`, {
                    className: `text-token-text-tertiary mt-1 text-xs`,
                    children: (0, G.jsx)(m, {
                        ...K.helper,
                        values: {
                            earliestDate: s.formatDate(j(), {
                                day: `numeric`,
                                month: `short`,
                                year: `numeric`
                            }),
                            latestDate: s.formatDate(t, {
                                day: `numeric`,
                                month: `short`,
                                year: `numeric`
                            })
                        }
                    })
                })]
            }), (0, G.jsxs)(ne, {
                "aria-label": s.formatMessage(K.ariaLabel),
                value: f,
                minValue: d,
                maxValue: u,
                onChange: e => {
                    i(R({
                        end: e.end,
                        start: e.start
                    })), l(!1)
                },
                children: [(0, G.jsxs)(`div`, {
                    className: `mb-2 flex items-center justify-between`,
                    children: [(0, G.jsx)(O, {
                        slot: `previous`,
                        className: `hover:bg-token-main-surface-secondary flex h-9 w-9 items-center justify-center rounded-full`,
                        children: (0, G.jsx)(b, {
                            "aria-hidden": !0,
                            className: `icon-sm`
                        })
                    }), (0, G.jsx)(S, {
                        className: `text-sm font-semibold`
                    }), (0, G.jsx)(O, {
                        slot: `next`,
                        className: `hover:bg-token-main-surface-secondary flex h-9 w-9 items-center justify-center rounded-full`,
                        children: (0, G.jsx)(n.ChevronRightSm, {
                            "aria-hidden": !0,
                            className: `icon-sm`
                        })
                    })]
                }), (0, G.jsxs)(re, {
                    className: `w-full table-fixed border-separate border-spacing-x-0 border-spacing-y-1`,
                    children: [(0, G.jsx)(T, {
                        children: e => (0, G.jsx)(oe, {
                            className: `text-token-text-tertiary h-9 text-center text-xs font-medium`,
                            children: e
                        })
                    }), (0, G.jsx)(E, {
                        children: e => (0, G.jsx)(ie, {
                            date: e,
                            className: e => I(e),
                            children: e => (0, G.jsx)(`div`, {
                                className: L(e),
                                children: e.formattedDate
                            })
                        })
                    })]
                })]
            })]
        })
    })
}

function I(e) {
    let t = H(e.date),
        n = V(e.date),
        i = e.isSelectionStart || e.isSelectionEnd;
    return r(`relative flex h-10 w-full items-center justify-center outline-none`, e.isOutsideMonth && `text-token-text-tertiary/50`, e.isDisabled && `text-token-text-tertiary cursor-not-allowed`, e.isSelected && `bg-[#f5f5f5]`, e.isSelected && (e.isSelectionStart || t) && `rounded-s-[16px]`, e.isSelected && (e.isSelectionEnd || n) && `rounded-e-[16px]`, e.isFocusVisible && !i && `ring-2 ring-token-border-default`)
}

function L(e) {
    let t = e.isSelectionStart || e.isSelectionEnd;
    return r(`relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors`, !e.isDisabled && !e.isSelected && !e.isOutsideMonth && e.isHovered && `bg-token-main-surface-secondary cursor-pointer`, !e.isSelected && !e.isDisabled && !e.isOutsideMonth && `text-token-text-primary`, e.isSelected && !t && `text-token-text-primary`, t && `bg-[#262626] text-white`, e.isHovered && e.isSelectionEnd && `ring-2 ring-[#5a5a5a]`, e.isOutsideMonth && !e.isSelected && `text-token-text-tertiary/50`, e.isDisabled && `text-token-text-tertiary`)
}

function R(e) {
    return {
        endDate: D(e.end.toString()),
        startDate: D(e.start.toString())
    }
}

function z(e) {
    return a(w(e))
}

function B(e) {
    return {
        end: z(e.endDate),
        start: z(e.startDate)
    }
}

function V(e) {
    return U(e) === 6
}

function H(e) {
    return U(e) === 0
}

function U(e) {
    return new Date(`${e.toString()}T12:00:00Z`).getUTCDay()
}
var W, G, K, ce = e((() => {
    P(), y(), x(), c(), C(), s(), u(), W = t(g()), ae(), h(), G = f(), K = p({
        ariaLabel: {
            id: `workspaceUsage.exportModal.customDateRangePicker.ariaLabel`,
            defaultMessage: `Select custom export date range`
        },
        helper: {
            id: `workspaceUsage.exportModal.customDateRangePicker.helper`,
            defaultMessage: `Pick any two dates between {earliestDate} and {latestDate}.`
        },
        title: {
            id: `workspaceUsage.exportModal.customDateRangePicker.title`,
            defaultMessage: `Custom range`
        }
    })
}));

function le({
    ariaLabel: e,
    customControl: t,
    onChange: n,
    value: r
}) {
    let i = _();
    return (0, J.jsxs)(`div`, {
        role: `group`,
        "aria-label": e ?? i.formatMessage(Z.ariaLabel),
        className: `text-token-text-tertiary inline-flex items-center rounded-full bg-[#e8e8e8] p-0.5 text-xs font-semibold dark:bg-[#393939]`,
        children: [Y.map(e => (0, J.jsx)(X, {
            isSelected: e === r,
            onClick: () => n(e),
            children: (0, J.jsx)(m, {
                ...Z[e]
            })
        }, e)), t]
    })
}
var q, J, Y, X, Z, ue = e((() => {
    u(), q = t(g()), h(), J = f(), Y = [`7d`, `1m`, `6m`, `12m`], X = (0, q.forwardRef)(function({
        children: e,
        isSelected: t,
        type: n = `button`,
        ...i
    }, a) {
        return (0, J.jsx)(`button`, {
            ref: a,
            type: n,
            className: r(`rounded-full px-3 py-1 text-xs font-semibold`, t ? `bg-token-bg-primary text-token-text-primary shadow-xxs` : `text-token-text-secondary hover:text-token-text-primary`),
            ...i,
            children: e
        })
    }), Z = p({
        ariaLabel: {
            id: `workspaceUsage.overview.timeRangeSelector.ariaLabel`,
            defaultMessage: `Analytics time range`
        },
        "7d": {
            id: `workspaceUsage.overview.timeRangeSelector.7d`,
            defaultMessage: `7D`
        },
        "1m": {
            id: `workspaceUsage.overview.timeRangeSelector.1m`,
            defaultMessage: `1M`
        },
        "6m": {
            id: `workspaceUsage.overview.timeRangeSelector.6m`,
            defaultMessage: `6M`
        },
        "12m": {
            id: `workspaceUsage.overview.timeRangeSelector.12m`,
            defaultMessage: `12M`
        }
    })
}));

function Q(e, {
    toastId: t,
    message: n
} = {}) {
    let r = d(),
        i = _();
    return async (...a) => {
        try {
            return await e(...a)
        } catch (e) {
            throw r.danger(i.formatMessage(n ?? $.defaultErrorToastMessage), {
                id: t,
                loggingTitle: n && typeof n.defaultMessage == `string` ? n.defaultMessage : $.defaultErrorToastMessage.defaultMessage
            }), l.addError(e), e
        }
    }
}
var $, de = e((() => {
    i(), o(), h(), $ = p({
        defaultErrorToastMessage: {
            id: `defaultErrorToastMessage`,
            defaultMessage: `Something went wrong. If this issue persists please contact us through our help center at help.openai.com.`
        }
    })
}));
export {
    ue as a, M as c, se as d, k as f, X as i, A as l, Q as n, F as o, le as r, ce as s, de as t, P as u
};
//# sourceMappingURL=3ebdc472-iznnx016ux5fh0j4.js.map