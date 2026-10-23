import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    At as r,
    K5 as i,
    cn as a,
    gq as o,
    hn as s,
    j5 as c,
    q5 as l,
    rq as u
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as d,
    Vn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    EGt as p,
    TGt as m,
    c5t as h,
    f5t as g,
    o5t as _,
    wGt as v
} from "./conversation-small-bcbq46iub1p0ca1t.js";
var y, b, x, S = e((() => {
    p(), n(), u(), g(), l(), r(), y = t(f()), b = d(), x = ({
        children: e,
        sideOffset: t = 6,
        isOpen: n,
        closePopover: r,
        popoverContentRef: l,
        ...u
    }) => {
        let d = c(o);
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
        }, [n, r]), (0, b.jsx)(h, {
            children: (0, b.jsx)(_, {
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
                    className: i(!n && `pointer-events-none`, `z-20`),
                    children: (0, b.jsx)(s, {
                        mode: `sync`,
                        children: n && (0, b.jsx)(a.div, {
                            className: i(`popover bg-token-main-surface-primary dark:bg-token-main-surface-primary shadow-long overflow-auto rounded-2xl bg-clip-padding`),
                            variants: {
                                open: {
                                    opacity: 1,
                                    y: 0,
                                    transition: d ? m : {
                                        ...v,
                                        duration: .1
                                    }
                                },
                                closed: {
                                    opacity: 0,
                                    y: -4,
                                    transition: d ? m : {
                                        ...v,
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
//# sourceMappingURL=e8b55dd1-dfgkzw9vw02a91pu.js.map