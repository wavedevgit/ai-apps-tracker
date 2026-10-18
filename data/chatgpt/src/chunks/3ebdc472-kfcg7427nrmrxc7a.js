import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dit as n,
    b5 as r,
    hU as i,
    iM as a,
    kit as o,
    lM as s,
    mz as c,
    pU as l,
    pz as u,
    y5 as d
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as f,
    Ln as p,
    Nn as m,
    Rn as h,
    Vn as g,
    zn as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    B7 as v,
    Ygn as y,
    Zgn as ee,
    z7 as te
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Gv as ne,
    Kv as re
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    $y as b,
    At as x,
    Ht as S,
    Jt as C,
    Kt as w,
    Qy as T,
    Ut as E,
    Wt as D,
    Zt as O,
    Zy as k,
    kt as ie,
    qt as ae
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

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
    return k(e) <= t ? e : b(t)
}

function M() {
    return b(k(ee(j(), 1)))
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
    let r = k(n) === k(e),
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
    T(), y()
}));

function I({
    isSelected: e,
    maximumDate: t = j(),
    onRangeSelected: n,
    selectedRange: r,
    trigger: i
}) {
    let a = _(),
        [o, s] = (0, G.useState)(!1),
        c = B(t),
        l = B(M()),
        f = r == null ? null : V(r);
    return (0, K.jsx)(te, {
        open: o,
        onOpenChange: s,
        size: `none`,
        sideOffset: 4,
        alignAgainstAnchor: `start`,
        disableAutofocus: !0,
        triggerButton: i,
        className: d(`z-[60] w-[320px] p-0`, e ? `ring-token-border-default ring-1` : void 0),
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
                            earliestDate: a.formatDate(M(), {
                                day: `numeric`,
                                month: `short`,
                                year: `numeric`
                            }),
                            latestDate: a.formatDate(t, {
                                day: `numeric`,
                                month: `short`,
                                year: `numeric`
                            })
                        }
                    })
                })]
            }), (0, K.jsxs)(w, {
                "aria-label": a.formatMessage(q.ariaLabel),
                value: f,
                minValue: l,
                maxValue: c,
                onChange: e => {
                    n(z({
                        end: e.end,
                        start: e.start
                    })), s(!1)
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
                    }), (0, K.jsx)(x, {
                        className: `text-sm font-semibold`
                    }), (0, K.jsx)(O, {
                        slot: `next`,
                        className: `hover:bg-token-main-surface-secondary flex h-9 w-9 items-center justify-center rounded-full`,
                        children: (0, K.jsx)(u.ChevronRightSm, {
                            "aria-hidden": !0,
                            className: `icon-sm`
                        })
                    })]
                }), (0, K.jsxs)(E, {
                    className: `w-full table-fixed border-separate border-spacing-x-0 border-spacing-y-1`,
                    children: [(0, K.jsx)(S, {
                        children: e => (0, K.jsx)(ae, {
                            className: `text-token-text-tertiary h-9 text-center text-xs font-medium`,
                            children: e
                        })
                    }), (0, K.jsx)(C, {
                        children: e => (0, K.jsx)(D, {
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
    return d(`relative flex h-10 w-full items-center justify-center outline-none`, e.isOutsideMonth && `text-token-text-tertiary/50`, e.isDisabled && `text-token-text-tertiary cursor-not-allowed`, e.isSelected && `bg-[#f5f5f5]`, e.isSelected && (e.isSelectionStart || t) && `rounded-s-[16px]`, e.isSelected && (e.isSelectionEnd || n) && `rounded-e-[16px]`, e.isFocusVisible && !r && `ring-2 ring-token-border-default`)
}

function R(e) {
    let t = e.isSelectionStart || e.isSelectionEnd;
    return d(`relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors`, !e.isDisabled && !e.isSelected && !e.isOutsideMonth && e.isHovered && `bg-token-main-surface-secondary cursor-pointer`, !e.isSelected && !e.isDisabled && !e.isOutsideMonth && `text-token-text-primary`, e.isSelected && !t && `text-token-text-primary`, t && `bg-[#262626] text-white`, e.isHovered && e.isSelectionEnd && `ring-2 ring-[#5a5a5a]`, e.isOutsideMonth && !e.isSelected && `text-token-text-tertiary/50`, e.isDisabled && `text-token-text-tertiary`)
}

function z(e) {
    return {
        endDate: b(e.end.toString()),
        startDate: b(e.start.toString())
    }
}

function B(e) {
    return s(k(e))
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
    F(), v(), re(), c(), T(), a(), r(), G = t(g()), ie(), h(), K = f(), q = p({
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
    let i = _();
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
    r(), J = t(g()), h(), Y = f(), X = [`7d`, `1m`, `6m`, `12m`], Z = (0, J.forwardRef)(function({
        children: e,
        isSelected: t,
        type: n = `button`,
        ...r
    }, i) {
        return (0, Y.jsx)(`button`, {
            ref: i,
            type: n,
            className: d(`rounded-full px-3 py-1 text-xs font-semibold`, t ? `bg-token-bg-primary text-token-text-primary shadow-xxs` : `text-token-text-secondary hover:text-token-text-primary`),
            ...r,
            children: e
        })
    }), Q = p({
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
    message: r
} = {}) {
    let a = i(),
        o = _();
    return async (...i) => {
        try {
            return await e(...i)
        } catch (e) {
            throw a.danger(o.formatMessage(r ?? $.defaultErrorToastMessage), {
                id: t,
                loggingTitle: r && typeof r.defaultMessage == `string` ? r.defaultMessage : $.defaultErrorToastMessage.defaultMessage
            }), n.addError(e), e
        }
    }
}
var $, de = e((() => {
    l(), o(), h(), $ = p({
        defaultErrorToastMessage: {
            id: `defaultErrorToastMessage`,
            defaultMessage: `Something went wrong. If this issue persists please contact us through our help center at help.openai.com.`
        }
    })
}));
export {
    le as a, N as c, oe as d, A as f, Z as i, j as l, ue as n, I as o, ce as r, se as s, de as t, F as u
};
//# sourceMappingURL=3ebdc472-kfcg7427nrmrxc7a.js.map