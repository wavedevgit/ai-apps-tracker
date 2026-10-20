import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    J5 as r,
    M5 as i,
    aq as a,
    cn as o,
    hn as s,
    m8 as c,
    q5 as l,
    vq as u
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Hn as d,
    Vn as f
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    AGt as p,
    Q8t as m,
    X8t as h,
    jGt as g,
    kGt as _,
    n5t as v
} from "./conversation-small-cawdu7il3ha6y70c.js";
var y, b, x, S = e((() => {
    g(), c(), a(), v(), r(), n(), y = t(d()), b = f(), x = ({
        children: e,
        sideOffset: t = 6,
        isOpen: n,
        closePopover: r,
        popoverContentRef: a,
        ...c
    }) => {
        let d = i(u);
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
            children: (0, b.jsx)(h, {
                forceMount: !0,
                asChild: !0,
                align: `center`,
                sideOffset: t,
                onOpenAutoFocus: e => {
                    e.preventDefault()
                },
                ...c,
                style: {
                    ...c.style ?? {},
                    zIndex: 60
                },
                children: (0, b.jsx)(`div`, {
                    ref: a,
                    className: l(!n && `pointer-events-none`, `z-20`),
                    children: (0, b.jsx)(s, {
                        mode: `sync`,
                        children: n && (0, b.jsx)(o.div, {
                            className: l(`popover bg-token-main-surface-primary dark:bg-token-main-surface-primary shadow-long overflow-auto rounded-2xl bg-clip-padding`),
                            variants: {
                                open: {
                                    opacity: 1,
                                    y: 0,
                                    transition: d ? p : {
                                        ..._,
                                        duration: .1
                                    }
                                },
                                closed: {
                                    opacity: 0,
                                    y: -4,
                                    transition: d ? p : {
                                        ..._,
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
//# sourceMappingURL=e8b55dd1-lx70etaut7vzbqlz.js.map