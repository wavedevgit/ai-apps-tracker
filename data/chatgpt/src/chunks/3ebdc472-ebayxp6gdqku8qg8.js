import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    DM as n,
    J5 as r,
    Mz as i,
    Nz as a,
    SM as o,
    VU as s,
    iat as c,
    nat as l,
    q5 as u,
    zU as d
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as f,
    Hn as p,
    Pn as m,
    Rn as h,
    Vn as g,
    zn as _
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    H7 as v,
    V7 as y,
    d_n as ee,
    l_n as te
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Hv as ne,
    Uv as re
} from "./30901919-jory365vq6ym5crx.js";
import {
    At as ie,
    Ht as b,
    Hy as x,
    Jt as S,
    Kt as C,
    Ut as w,
    Uy as T,
    Wt as E,
    Wy as D,
    Zt as O,
    kt as k,
    qt as ae
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";

function oe({
    data: e,
    mimeType: t,
    filename: n
}) {
    let r = document.createElement(`a`);
    r.href = `data:${t},${encodeURIComponent(e)}`, r.target = `_self`, r.download = n, r.click(), r.remove()
}
var A = e((() => {}));

function j() {
    let e = new Date,
        t = e.toISOString().slice(0, 10);
    return x(e) <= t ? e : D(t)
}

function M() {
    return D(x(ee(j(), 1)))
}

function N({
    customDateRange: e,
    fallbackLabel: t,
    intl: n
}) {
    return e == null ? t : P({
        endDate: e.endDate,
        intl: n,
        startDate: e.startDate
    })
}

function P({
    endDate: e,
    intl: t,
    startDate: n
}) {
    let r = x(n) === x(e),
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
var F = e((() => {
    T(), te()
}));

function I({
    isSelected: e,
    maximumDate: t = j(),
    onRangeSelected: n,
    selectedRange: r,
    trigger: a
}) {
    let o = f(),
        [s, c] = (0, G.useState)(!1),
        l = B(t),
        d = B(M()),
        p = r == null ? null : V(r);
    return (0, K.jsx)(y, {
        open: s,
        onOpenChange: c,
        size: `none`,
        sideOffset: 4,
        alignAgainstAnchor: `start`,
        disableAutofocus: !0,
        triggerButton: a,
        className: u(`z-[60] w-[320px] p-0`, e ? `ring-token-border-default ring-1` : void 0),
        children: (0, K.jsxs)(`div`, {
            className: `w-[320px] p-3`,
            children: [(0, K.jsxs)(`div`, {
                className: `mb-3`,
                children: [(0, K.jsx)(`div`, {
                    className: `text-sm font-medium`,
                    children: (0, K.jsx)(m, {
                        ...q.title
                    })
                }), (0, K.jsx)(`div`, {
                    className: `text-token-text-tertiary mt-1 text-xs`,
                    children: (0, K.jsx)(m, {
                        ...q.helper,
                        values: {
                            earliestDate: o.formatDate(M(), {
                                day: `numeric`,
                                month: `short`,
                                year: `numeric`
                            }),
                            latestDate: o.formatDate(t, {
                                day: `numeric`,
                                month: `short`,
                                year: `numeric`
                            })
                        }
                    })
                })]
            }), (0, K.jsxs)(C, {
                "aria-label": o.formatMessage(q.ariaLabel),
                value: p,
                minValue: d,
                maxValue: l,
                onChange: e => {
                    n(z({
                        end: e.end,
                        start: e.start
                    })), c(!1)
                },
                children: [(0, K.jsxs)(`div`, {
                    className: `mb-2 flex items-center justify-between`,
                    children: [(0, K.jsx)(O, {
                        slot: `previous`,
                        className: `hover:bg-token-main-surface-secondary flex h-9 w-9 items-center justify-center rounded-full`,
                        children: (0, K.jsx)(ne, {
                            "aria-hidden": !0,
                            className: `icon-sm`
                        })
                    }), (0, K.jsx)(ie, {
                        className: `text-sm font-semibold`
                    }), (0, K.jsx)(O, {
                        slot: `next`,
                        className: `hover:bg-token-main-surface-secondary flex h-9 w-9 items-center justify-center rounded-full`,
                        children: (0, K.jsx)(i.ChevronRightSm, {
                            "aria-hidden": !0,
                            className: `icon-sm`
                        })
                    })]
                }), (0, K.jsxs)(w, {
                    className: `w-full table-fixed border-separate border-spacing-x-0 border-spacing-y-1`,
                    children: [(0, K.jsx)(b, {
                        children: e => (0, K.jsx)(ae, {
                            className: `text-token-text-tertiary h-9 text-center text-xs font-medium`,
                            children: e
                        })
                    }), (0, K.jsx)(S, {
                        children: e => (0, K.jsx)(E, {
                            date: e,
                            className: e => L(e),
                            children: e => (0, K.jsx)(`div`, {
                                className: R(e),
                                children: e.formattedDate
                            })
                        })
                    })]
                })]
            })]
        })
    })
}

function L(e) {
    let t = U(e.date),
        n = H(e.date),
        r = e.isSelectionStart || e.isSelectionEnd;
    return u(`relative flex h-10 w-full items-center justify-center outline-none`, e.isOutsideMonth && `text-token-text-tertiary/50`, e.isDisabled && `text-token-text-tertiary cursor-not-allowed`, e.isSelected && `bg-[#f5f5f5]`, e.isSelected && (e.isSelectionStart || t) && `rounded-s-[16px]`, e.isSelected && (e.isSelectionEnd || n) && `rounded-e-[16px]`, e.isFocusVisible && !r && `ring-2 ring-token-border-default`)
}

function R(e) {
    let t = e.isSelectionStart || e.isSelectionEnd;
    return u(`relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors`, !e.isDisabled && !e.isSelected && !e.isOutsideMonth && e.isHovered && `bg-token-main-surface-secondary cursor-pointer`, !e.isSelected && !e.isDisabled && !e.isOutsideMonth && `text-token-text-primary`, e.isSelected && !t && `text-token-text-primary`, t && `bg-[#262626] text-white`, e.isHovered && e.isSelectionEnd && `ring-2 ring-[#5a5a5a]`, e.isOutsideMonth && !e.isSelected && `text-token-text-tertiary/50`, e.isDisabled && `text-token-text-tertiary`)
}

function z(e) {
    return {
        endDate: D(e.end.toString()),
        startDate: D(e.start.toString())
    }
}

function B(e) {
    return n(x(e))
}

function V(e) {
    return {
        end: B(e.endDate),
        start: B(e.startDate)
    }
}

function H(e) {
    return W(e) === 6
}

function U(e) {
    return W(e) === 0
}

function W(e) {
    return new Date(`${e.toString()}T12:00:00Z`).getUTCDay()
}
var G, K, q, se = e((() => {
    F(), v(), re(), a(), T(), o(), r(), G = t(p()), k(), _(), K = g(), q = h({
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

function ce({
    ariaLabel: e,
    customControl: t,
    onChange: n,
    value: r
}) {
    let i = f();
    return (0, Y.jsxs)(`div`, {
        role: `group`,
        "aria-label": e ?? i.formatMessage(Q.ariaLabel),
        className: `text-token-text-tertiary inline-flex items-center rounded-full bg-[#e8e8e8] p-0.5 text-xs font-semibold dark:bg-[#393939]`,
        children: [X.map(e => (0, Y.jsx)(Z, {
            isSelected: e === r,
            onClick: () => n(e),
            children: (0, Y.jsx)(m, {
                ...Q[e]
            })
        }, e)), t]
    })
}
var J, Y, X, Z, Q, le = e((() => {
    r(), J = t(p()), _(), Y = g(), X = [`7d`, `1m`, `6m`, `12m`], Z = (0, J.forwardRef)(function({
        children: e,
        isSelected: t,
        type: n = `button`,
        ...r
    }, i) {
        return (0, Y.jsx)(`button`, {
            ref: i,
            type: n,
            className: u(`rounded-full px-3 py-1 text-xs font-semibold`, t ? `bg-token-bg-primary text-token-text-primary shadow-xxs` : `text-token-text-secondary hover:text-token-text-primary`),
            ...r,
            children: e
        })
    }), Q = h({
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

function ue(e, {
    toastId: t,
    message: n
} = {}) {
    let r = s(),
        i = f();
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
    d(), c(), _(), $ = h({
        defaultErrorToastMessage: {
            id: `defaultErrorToastMessage`,
            defaultMessage: `Something went wrong. If this issue persists please contact us through our help center at help.openai.com.`
        }
    })
}));
export {
    le as a, N as c, oe as d, A as f, Z as i, j as l, ue as n, I as o, ce as r, se as s, de as t, F as u
};
//# sourceMappingURL=3ebdc472-ebayxp6gdqku8qg8.js.map