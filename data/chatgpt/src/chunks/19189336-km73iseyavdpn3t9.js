import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    SN as n,
    l7 as r,
    u7 as i,
    xN as a
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as o,
    Nn as s,
    Rn as c,
    Vn as l,
    zn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Un as d,
    Xun as f,
    c5t as p,
    eWn as m,
    f5t as h,
    l5t as g,
    mun as _,
    odn as v,
    sdn as y,
    u5t as b
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Jb as x,
    Yb as S
} from "./30901919-cmi3nh547dwrqkxv.js";
import {
    n as C,
    t as w
} from "./af004db9-f1581c9feezgu0j4.js";
import {
    n as T,
    t as E
} from "./e8b55dd1-far0ou312ztrtjr1.js";
import {
    r as D,
    t as O
} from "./0eda9bd1-kc5piaz8n2hzhnac.js";
import {
    n as k,
    t as A
} from "./0b9bc04d-oh5g9v3up4bavia4.js";
import {
    o as j,
    u as M
} from "./cf64444f-n9whrsr8nhv5kg4f.js";

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
    } = f(), o = y(e => e.pendingTaskIds), s = y(e => e.pendingCodeReviewIds), c = a?.pages.flatMap(e => e.items ?? []) ?? [], l = c.filter(e => !M(e)), m = c.filter(e => !!e.has_unread_turn), h = c.filter(e => !!e.has_unread_turn || !M(e)), _ = Array.from(Object.values(o)).filter(e => !c.some(t => t.id === e)), v = Array.from(Object.values(s)).filter(e => !c.some(t => t.id === e)), S = [..._, ...v], C = l.length + S.length, T = u();
    return (0, R.jsxs)(g, {
        onOpenChange: n,
        children: [(0, R.jsx)(b, {
            asChild: !0,
            children: (0, R.jsx)(d, {
                "aria-label": T.formatMessage({
                    id: `wham.notificationPopover.openNotifications`,
                    defaultMessage: `Open notifications`
                }),
                className: r(e),
                children: C === 0 ? (0, R.jsxs)(`div`, {
                    className: `relative`,
                    children: [m.length > 0 && (0, R.jsx)(`div`, {
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
        }), (0, R.jsx)(p, {
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
                    inProgressTasks: h,
                    closePopover: () => n(!1)
                })
            })
        })]
    })
}
var L, R, z = e((() => {
        C(), S(), m(), T(), F(), j(), _(), v(), h(), i(), L = t(l()), c(), R = o()
    })),
    B = e((() => {
        z()
    }));
export {
    I as n, z as r, B as t
};
//# sourceMappingURL=19189336-km73iseyavdpn3t9.js.map