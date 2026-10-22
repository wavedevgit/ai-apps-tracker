import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    SN as n,
    c7 as r,
    l7 as i,
    xN as a
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as o,
    Nn as s,
    Rn as c,
    Vn as l,
    zn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $8t as d,
    Aun as f,
    Bun as p,
    Jln as m,
    NUn as h,
    PUn as g,
    Vun as _,
    X8t as v,
    Y8t as y,
    Z8t as b
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Jb as x,
    Yb as S
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    n as C,
    t as w
} from "./af004db9-opqchae2bgeq185w.js";
import {
    n as T,
    t as E
} from "./e8b55dd1-jyenad5k8dduq0zw.js";
import {
    r as D,
    t as O
} from "./0eda9bd1-m9jv01vf69sqxqoe.js";
import {
    n as k,
    t as A
} from "./0b9bc04d-lv5j2qywjtarwfzh.js";
import {
    o as j,
    u as M
} from "./cf64444f-modbgm3900g9sfxp.js";

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
    D(), k(), a(), c(), P = o()
}));

function I({
    className: e
}) {
    let [t, n] = (0, L.useState)(!1), i = (0, L.useRef)(null), {
        data: a
    } = f(), o = _(e => e.pendingTaskIds), s = _(e => e.pendingCodeReviewIds), c = a?.pages.flatMap(e => e.items ?? []) ?? [], l = c.filter(e => !M(e)), d = c.filter(e => !!e.has_unread_turn), p = c.filter(e => !!e.has_unread_turn || !M(e)), m = Array.from(Object.values(o)).filter(e => !c.some(t => t.id === e)), g = Array.from(Object.values(s)).filter(e => !c.some(t => t.id === e)), S = [...m, ...g], C = l.length + S.length, T = u();
    return (0, R.jsxs)(v, {
        onOpenChange: n,
        children: [(0, R.jsx)(b, {
            asChild: !0,
            children: (0, R.jsx)(h, {
                "aria-label": T.formatMessage({
                    id: `wham.notificationPopover.openNotifications`,
                    defaultMessage: `Open notifications`
                }),
                className: r(e),
                children: C === 0 ? (0, R.jsxs)(`div`, {
                    className: `relative`,
                    children: [d.length > 0 && (0, R.jsx)(`div`, {
                        className: `absolute start-0 top-0 size-1.5 rounded-full bg-blue-500`
                    }), (0, R.jsx)(x, {
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
        }), (0, R.jsx)(y, {
            forceMount: !0,
            children: (0, R.jsx)(E, {
                isOpen: t,
                closePopover: () => n(!1),
                popoverContentRef: i,
                align: `end`,
                side: `bottom`,
                sideOffset: 8,
                alignOffset: -8,
                children: (0, R.jsx)(N, {
                    pendingTaskIds: S,
                    inProgressTasks: p,
                    closePopover: () => n(!1)
                })
            })
        })]
    })
}
var L, R, z = e((() => {
        C(), S(), g(), T(), F(), j(), m(), p(), d(), i(), L = t(l()), c(), R = o()
    })),
    B = e((() => {
        z()
    }));
export {
    I as n, z as r, B as t
};
//# sourceMappingURL=19189336-kyahpiqbwnqjc5z5.js.map