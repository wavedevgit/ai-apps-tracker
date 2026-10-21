import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    P5 as r,
    X5 as i,
    Y5 as a,
    cn as o,
    g8 as s,
    hn as c,
    oq as l,
    yq as u
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as d,
    Vn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FGt as p,
    IGt as m,
    LGt as h,
    e5t as g,
    n5t as _,
    o5t as v
} from "./conversation-small-ikg0dwuw782klweb.js";
var y, b, x, S = e((() => {
    h(), s(), l(), v(), i(), n(), y = t(f()), b = d(), x = ({
        children: e,
        sideOffset: t = 6,
        isOpen: n,
        closePopover: i,
        popoverContentRef: s,
        ...l
    }) => {
        let d = r(u);
        return (0, y.useEffect)(() => {
            if (!n) return;
            let e = e => {
                e.key === `Escape` && i()
            };
            return document.addEventListener(`keydown`, e, {
                capture: !0,
                passive: !0
            }), () => document.removeEventListener(`keydown`, e, {
                capture: !0
            })
        }, [n, i]), (0, b.jsx)(_, {
            children: (0, b.jsx)(g, {
                forceMount: !0,
                asChild: !0,
                align: `center`,
                sideOffset: t,
                onOpenAutoFocus: e => {
                    e.preventDefault()
                },
                ...l,
                style: {
                    ...l.style ?? {},
                    zIndex: 60
                },
                children: (0, b.jsx)(`div`, {
                    ref: s,
                    className: a(!n && `pointer-events-none`, `z-20`),
                    children: (0, b.jsx)(c, {
                        mode: `sync`,
                        children: n && (0, b.jsx)(o.div, {
                            className: a(`popover bg-token-main-surface-primary dark:bg-token-main-surface-primary shadow-long overflow-auto rounded-2xl bg-clip-padding`),
                            variants: {
                                open: {
                                    opacity: 1,
                                    y: 0,
                                    transition: d ? m : {
                                        ...p,
                                        duration: .1
                                    }
                                },
                                closed: {
                                    opacity: 0,
                                    y: -4,
                                    transition: d ? m : {
                                        ...p,
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
//# sourceMappingURL=e8b55dd1-b3smow2b6xw7zdoi.js.map