import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    B6 as r,
    KK as i,
    NK as a,
    b5 as o,
    cn as s,
    hn as c,
    i5 as l,
    y5 as u
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as d,
    Vn as f
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    DGt as p,
    EGt as m,
    OGt as h,
    T0t as g,
    x0t as _,
    y0t as v
} from "./conversation-small-fym1zmu9zimymmm1.js";
var y, b, x, S = e((() => {
    h(), r(), a(), g(), o(), n(), y = t(f()), b = d(), x = ({
        children: e,
        sideOffset: t = 6,
        isOpen: n,
        closePopover: r,
        popoverContentRef: a,
        ...o
    }) => {
        let d = l(i);
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
        }, [n, r]), (0, b.jsx)(_, {
            children: (0, b.jsx)(v, {
                forceMount: !0,
                asChild: !0,
                align: `center`,
                sideOffset: t,
                onOpenAutoFocus: e => {
                    e.preventDefault()
                },
                ...o,
                style: {
                    ...o.style ?? {},
                    zIndex: 60
                },
                children: (0, b.jsx)(`div`, {
                    ref: a,
                    className: u(!n && `pointer-events-none`, `z-20`),
                    children: (0, b.jsx)(c, {
                        mode: `sync`,
                        children: n && (0, b.jsx)(s.div, {
                            className: u(`popover bg-token-main-surface-primary dark:bg-token-main-surface-primary shadow-long overflow-auto rounded-2xl bg-clip-padding`),
                            variants: {
                                open: {
                                    opacity: 1,
                                    y: 0,
                                    transition: d ? p : {
                                        ...m,
                                        duration: .1
                                    }
                                },
                                closed: {
                                    opacity: 0,
                                    y: -4,
                                    transition: d ? p : {
                                        ...m,
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
//# sourceMappingURL=e8b55dd1-kppmc5q1mw2sht6j.js.map