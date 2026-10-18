import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    QM as n,
    ZM as r,
    b5 as i,
    y5 as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as o,
    Nn as s,
    Rn as c,
    Vn as l,
    zn as u
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    C0t as d,
    Dun as f,
    Eun as p,
    Pln as m,
    S0t as h,
    T0t as g,
    gun as _,
    nUn as v,
    rUn as y,
    x0t as b
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Qb as x,
    Zb as S
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    n as C,
    t as w
} from "./af004db9-6w68dbz1fjui3k0e.js";
import {
    n as T,
    t as E
} from "./e8b55dd1-kppmc5q1mw2sht6j.js";
import {
    r as D,
    t as O
} from "./0eda9bd1-pag9sfwu5sisajp5.js";
import {
    n as k,
    t as A
} from "./0b9bc04d-nf9dbb000yyruxom.js";
import {
    o as j,
    u as M
} from "./cf64444f-jch0myr3a8q4imcr.js";

function N({
    pendingTaskIds: e,
    inProgressTasks: t,
    closePopover: r
}) {
    return !t.length && !e.length ? (0, P.jsx)(`div`, {
        className: `flex min-w-48 items-center justify-center py-5`,
        children: (0, P.jsx)(s, {
            id: `+xSTVR`,
            defaultMessage: `No pending work`
        })
    }) : (0, P.jsxs)(`ol`, {
        className: `max-h-[600px] w-[450px] overflow-y-auto p-2`,
        children: [e.map(e => (0, P.jsx)(O, {}, e)), t.map((e, i) => (0, P.jsx)(`li`, {
            onClick: r,
            children: (0, P.jsx)(A, {
                index: i,
                taskListItem: e,
                isCompact: !0,
                disableFocusStyle: !0,
                hoveredIndex: null,
                onMouseEnter: n,
                onMouseLeave: n,
                hideBorder: i === t.length - 1,
                currentFilter: `current`
            })
        }, e.id))]
    })
}
var P, F = e((() => {
    D(), k(), r(), c(), P = o()
}));

function I({
    className: e
}) {
    let [t, n] = (0, L.useState)(!1), r = (0, L.useRef)(null), {
        data: i
    } = _(), o = f(e => e.pendingTaskIds), s = f(e => e.pendingCodeReviewIds), c = i?.pages.flatMap(e => e.items ?? []) ?? [], l = c.filter(e => !M(e)), p = c.filter(e => !!e.has_unread_turn), m = c.filter(e => !!e.has_unread_turn || !M(e)), g = Array.from(Object.values(o)).filter(e => !c.some(t => t.id === e)), y = Array.from(Object.values(s)).filter(e => !c.some(t => t.id === e)), x = [...g, ...y], C = l.length + x.length, T = u();
    return (0, R.jsxs)(h, {
        onOpenChange: n,
        children: [(0, R.jsx)(d, {
            asChild: !0,
            children: (0, R.jsx)(v, {
                "aria-label": T.formatMessage({
                    id: `wham.notificationPopover.openNotifications`,
                    defaultMessage: `Open notifications`
                }),
                className: a(e),
                children: C === 0 ? (0, R.jsxs)(`div`, {
                    className: `relative`,
                    children: [p.length > 0 && (0, R.jsx)(`div`, {
                        className: `absolute start-0 top-0 size-1.5 rounded-full bg-blue-500`
                    }), (0, R.jsx)(S, {
                        className: `icon-sm`
                    })]
                }) : (0, R.jsx)(w, {
                    size: 24,
                    arcPercentage: t ? 1 : .25,
                    children: (0, R.jsx)(`span`, {
                        className: `text-xs`,
                        children: C
                    })
                })
            })
        }), (0, R.jsx)(b, {
            forceMount: !0,
            children: (0, R.jsx)(E, {
                isOpen: t,
                closePopover: () => n(!1),
                popoverContentRef: r,
                align: `end`,
                side: `bottom`,
                sideOffset: 8,
                alignOffset: -8,
                children: (0, R.jsx)(N, {
                    pendingTaskIds: x,
                    inProgressTasks: m,
                    closePopover: () => n(!1)
                })
            })
        })]
    })
}
var L, R, z = e((() => {
        C(), x(), y(), T(), F(), j(), m(), p(), g(), i(), L = t(l()), c(), R = o()
    })),
    B = e((() => {
        z()
    }));
export {
    I as n, z as r, B as t
};
//# sourceMappingURL=19189336-bysrxf9oyc07nbq7.js.map