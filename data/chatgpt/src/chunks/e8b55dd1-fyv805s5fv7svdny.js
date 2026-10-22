import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    At as r,
    J5 as i,
    cn as a,
    gq as o,
    hn as s,
    l7 as c,
    rq as l,
    u7 as u
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as d,
    Vn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AGt as p,
    a5t as m,
    jGt as h,
    kGt as g,
    l5t as _,
    r5t as v
} from "./conversation-small-dwpaie1hln28efxb.js";
var y, b, x, S = e((() => {
    h(), n(), l(), _(), u(), r(), y = t(f()), b = d(), x = ({
        children: e,
        sideOffset: t = 6,
        isOpen: n,
        closePopover: r,
        popoverContentRef: l,
        ...u
    }) => {
        let d = i(o);
        return (0, y.useEffect)(() => {
            if (!n) return;
            let e = e => {
                e.key === `Escape` && r()
            };
            return document.addEventListener(`keydown`, e, {
                capture: !0,
                passive: !0
            }), () => document.removeEventListener(`keydown`, e, {
                capture: !0
            })
        }, [n, r]), (0, b.jsx)(m, {
            children: (0, b.jsx)(v, {
                forceMount: !0,
                asChild: !0,
                align: `center`,
                sideOffset: t,
                onOpenAutoFocus: e => {
                    e.preventDefault()
                },
                ...u,
                style: {
                    ...u.style ?? {},
                    zIndex: 60
                },
                children: (0, b.jsx)(`div`, {
                    ref: l,
                    className: c(!n && `pointer-events-none`, `z-20`),
                    children: (0, b.jsx)(s, {
                        mode: `sync`,
                        children: n && (0, b.jsx)(a.div, {
                            className: c(`popover bg-token-main-surface-primary dark:bg-token-main-surface-primary shadow-long overflow-auto rounded-2xl bg-clip-padding`),
                            variants: {
                                open: {
                                    opacity: 1,
                                    y: 0,
                                    transition: d ? p : {
                                        ...g,
                                        duration: .1
                                    }
                                },
                                closed: {
                                    opacity: 0,
                                    y: -4,
                                    transition: d ? p : {
                                        ...g,
                                        duration: .1
                                    }
                                }
                            },
                            initial: `closed`,
                            animate: `open`,
                            exit: `closed`,
                            children: e
                        })
                    })
                })
            })
        })
    }
}));
export {
    S as n, x as t
};
//# sourceMappingURL=e8b55dd1-fyv805s5fv7svdny.js.map