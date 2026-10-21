import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as t
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    F_ as n,
    P_ as r
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";

function i(...e) {
    return e.filter(Boolean).join(` `)
}
var a = e((() => {})),
    o, s, c, l = e((() => {
        o = `YPs4NW_bottomShadow`, s = `YPs4NW_topShadow`, c = {
            bottomShadow: o,
            topShadow: s
        }
    }));

function u({
    className: e,
    ...t
}) {
    return (0, f.jsx)(`div`, {
        ...t,
        className: i(`z-50 grid h-full w-full grid-cols-[10px_1fr_10px] grid-rows-[minmax(10px,1fr)_auto_minmax(10px,1fr)] overflow-y-auto md:grid-rows-[minmax(20px,0.8fr)_auto_minmax(20px,1fr)]`, e)
    })
}

function d({
    title: e,
    titleId: t,
    TitleComponent: r = `h2`,
    closeButton: a,
    children: o,
    footer: s,
    footerRef: l,
    portalContainer: u,
    isNewCardSelected: d = !1
}) {
    let p = (0, f.jsxs)(`div`, {
        className: `flex h-full min-h-0 flex-col tracking-normal [&_iframe]:transition-none!`,
        children: [(0, f.jsxs)(`header`, {
            className: `relative flex h-16 shrink-0 items-center px-6`,
            children: [a, (0, f.jsx)(r, {
                ...t == null ? {} : {
                    id: t
                },
                className: `translate-y-0.5 pe-10 text-lg leading-6.5 font-semibold tracking-[-0.45px] text-token-text-primary`,
                children: e
            })]
        }), (0, f.jsxs)(`div`, {
            className: `min-h-0 flex-1 overflow-y-auto overscroll-contain`,
            "data-testid": `standalone-credit-checkout-modal-scroll-body`,
            children: [(0, f.jsx)(`div`, {
                className: c.topShadow,
                children: (0, f.jsx)(`div`, {})
            }), (0, f.jsx)(`div`, {
                className: `px-6`,
                "data-testid": `standalone-credit-checkout-modal-scroll-content`,
                children: o
            }), (0, f.jsx)(`div`, {
                className: c.bottomShadow,
                children: (0, f.jsx)(`div`, {})
            })]
        }), (0, f.jsxs)(`footer`, {
            className: i(`border-token-border-default flex shrink-0 flex-col gap-2 border-t px-6 [--credit-checkout-modal-actions-gap:8px]`, d ? `py-3` : `py-4`),
            children: [(0, f.jsx)(`div`, {
                ref: l
            }), s]
        })]
    });
    return u === void 0 ? p : (0, f.jsx)(n, {
        radixPortalContainer: u ?? void 0,
        children: p
    })
}
var f, p = e((() => {
    r(), a(), l(), f = t()
}));
export {
    d as n, p as r, u as t
};
//# sourceMappingURL=1dc5ae5b-hm05xhzr14g61j0y.js.map