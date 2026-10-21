import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    SN as n,
    c7 as r,
    l7 as i,
    xN as a
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    MUn as h,
    Vun as g,
    X8t as _,
    Y8t as v,
    Z8t as y,
    jUn as b
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Jb as x,
    Yb as S
} from "./30901919-r9pahacmzqudnt4f.js";
import {
    n as C,
    t as w
} from "./af004db9-fzg2csyped3pyyuu.js";
import {
    n as T,
    t as E
} from "./e8b55dd1-lgpe1zu98vd1sxh3.js";
import {
    r as D,
    t as O
} from "./0eda9bd1-bxv643wkhtasmlvu.js";
import {
    n as k,
    t as A
} from "./0b9bc04d-d11dj7fgbkszm38f.js";
import {
    o as j,
    u as M
} from "./cf64444f-ep6gmpa64rsgpb30.js";

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
    } = f(), o = g(e => e.pendingTaskIds), s = g(e => e.pendingCodeReviewIds), c = a?.pages.flatMap(e => e.items ?? []) ?? [], l = c.filter(e => !M(e)), d = c.filter(e => !!e.has_unread_turn), p = c.filter(e => !!e.has_unread_turn || !M(e)), m = Array.from(Object.values(o)).filter(e => !c.some(t => t.id === e)), h = Array.from(Object.values(s)).filter(e => !c.some(t => t.id === e)), S = [...m, ...h], C = l.length + S.length, T = u();
    return (0, R.jsxs)(_, {
        onOpenChange: n,
        children: [(0, R.jsx)(y, {
            asChild: !0,
            children: (0, R.jsx)(b, {
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
        }), (0, R.jsx)(v, {
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
        C(), S(), h(), T(), F(), j(), m(), p(), d(), i(), L = t(l()), c(), R = o()
    })),
    B = e((() => {
        z()
    }));
export {
    I as n, z as r, B as t
};
//# sourceMappingURL=19189336-k2phecsrw2z9845i.js.map