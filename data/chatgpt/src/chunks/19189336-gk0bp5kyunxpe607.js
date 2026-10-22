import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    SN as n,
    c7 as r,
    l7 as i,
    xN as a
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as o,
    Nn as s,
    Rn as c,
    Vn as l,
    zn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    XUn as d,
    ZUn as f,
    c5t as p,
    dun as m,
    idn as h,
    o5t as g,
    qun as _,
    rdn as v,
    s5t as y,
    u5t as b
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Jb as x,
    Yb as S
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    n as C,
    t as w
} from "./af004db9-j8qp34bq3sgddxua.js";
import {
    n as T,
    t as E
} from "./e8b55dd1-ll6mdlclb267m78t.js";
import {
    r as D,
    t as O
} from "./0eda9bd1-8coeo401ymdc7dtn.js";
import {
    n as k,
    t as A
} from "./0b9bc04d-kank2yibzzzxbws2.js";
import {
    o as j,
    u as M
} from "./cf64444f-epla8f91jbgb43zn.js";

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
    } = _(), o = h(e => e.pendingTaskIds), s = h(e => e.pendingCodeReviewIds), c = a?.pages.flatMap(e => e.items ?? []) ?? [], l = c.filter(e => !M(e)), f = c.filter(e => !!e.has_unread_turn), m = c.filter(e => !!e.has_unread_turn || !M(e)), v = Array.from(Object.values(o)).filter(e => !c.some(t => t.id === e)), b = Array.from(Object.values(s)).filter(e => !c.some(t => t.id === e)), S = [...v, ...b], C = l.length + S.length, T = u();
    return (0, R.jsxs)(y, {
        onOpenChange: n,
        children: [(0, R.jsx)(p, {
            asChild: !0,
            children: (0, R.jsx)(d, {
                "aria-label": T.formatMessage({
                    id: `wham.notificationPopover.openNotifications`,
                    defaultMessage: `Open notifications`
                }),
                className: r(e),
                children: C === 0 ? (0, R.jsxs)(`div`, {
                    className: `relative`,
                    children: [f.length > 0 && (0, R.jsx)(`div`, {
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
        }), (0, R.jsx)(g, {
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
                    inProgressTasks: m,
                    closePopover: () => n(!1)
                })
            })
        })]
    })
}
var L, R, z = e((() => {
        C(), S(), f(), T(), F(), j(), m(), v(), b(), i(), L = t(l()), c(), R = o()
    })),
    B = e((() => {
        z()
    }));
export {
    I as n, z as r, B as t
};
//# sourceMappingURL=19189336-gk0bp5kyunxpe607.js.map