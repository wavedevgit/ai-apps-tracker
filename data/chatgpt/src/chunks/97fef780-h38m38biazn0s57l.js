import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as n,
    Hn as r,
    Pn as i,
    Rn as a,
    Vn as o,
    zn as s
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    M5 as c,
    N5 as l,
    RHn as u,
    zHn as d
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Ax as f,
    cp as p,
    eb as m,
    kx as h,
    sp as g,
    tb as _
} from "./30901919-jory365vq6ym5crx.js";
var v, y, b, x, S = e((() => {
    l(), d(), f(), _(), g(), v = t(r()), s(), y = o(), b = a({
        dropdownName: {
            id: `imagegen.watermark.dropdownName`,
            defaultMessage: `More Download options`
        },
        withoutWatermark: {
            id: `imagegen.watermark.withoutWatermark`,
            defaultMessage: `without watermark`
        },
        downloadWithoutLogo: {
            id: `imagegen.watermark.downloadWithoutLogo`,
            defaultMessage: `Download without logo`
        },
        upgradePlan: {
            id: `imagegen.watermark.upgradePlan`,
            defaultMessage: `Upgrade plan`
        }
    }), x = ({
        isAnimated: e = !1,
        onOpenChange: t,
        onDownload: r,
        onDownloadWithoutWatermark: a,
        showWithoutWatermarkLabel: o = !0,
        triggerClassName: s,
        iconClassName: l,
        dropdownClassName: d
    }) => {
        let f = n(),
            [g, _] = (0, v.useState)(!1),
            x = (0, v.useCallback)(e => {
                _(e), t?.(e)
            }, [t]),
            S = (0, v.useCallback)(e => {
                e.preventDefault(), e.stopPropagation(), r?.(), x(!1)
            }, [r, x]),
            C = (0, v.useCallback)(e => {
                e.preventDefault(), e.stopPropagation(), a?.(), x(!1)
            }, [a, x]);
        return (0, y.jsxs)(u.Root, {
            open: g,
            onOpenChange: x,
            children: [(0, y.jsx)(u.Trigger, {
                "aria-label": f.formatMessage(b.dropdownName),
                className: s,
                tabIndex: 0,
                children: (0, y.jsx)(h, {
                    style: {
                        filter: `drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.20))`
                    },
                    className: l
                })
            }), (0, y.jsx)(u.Portal, {
                children: (0, y.jsxs)(u.Content, {
                    className: d,
                    side: `bottom`,
                    align: `end`,
                    children: [(0, y.jsx)(u.Item, {
                        className: `py-2`,
                        children: (0, y.jsxs)(`button`, {
                            type: `button`,
                            onClick: S,
                            className: `row text-token-text-primary flex items-center gap-2`,
                            children: [(0, y.jsx)(m, {}), o && a == null ? (0, y.jsxs)(`div`, {
                                className: `flex flex-col items-start`,
                                children: [(0, y.jsx)(`span`, {
                                    className: `font-semibold`,
                                    children: (0, y.jsx)(i, {
                                        ...c({
                                            isAnimated: e
                                        }).downloadLabel
                                    })
                                }), (0, y.jsx)(`span`, {
                                    className: `text-token-text-secondary`,
                                    children: (0, y.jsx)(i, {
                                        ...b.withoutWatermark
                                    })
                                })]
                            }) : (0, y.jsx)(`span`, {
                                className: `font-semibold`,
                                children: (0, y.jsx)(i, {
                                    ...c({
                                        isAnimated: e
                                    }).downloadLabel
                                })
                            })]
                        })
                    }), a != null && (0, y.jsxs)(y.Fragment, {
                        children: [(0, y.jsx)(u.Separator, {}), (0, y.jsx)(u.Item, {
                            className: `py-2`,
                            children: (0, y.jsxs)(`button`, {
                                type: `button`,
                                onClick: C,
                                className: `row text-token-text-primary flex items-center gap-2`,
                                children: [(0, y.jsx)(p, {}), (0, y.jsxs)(`div`, {
                                    className: `flex flex-col items-start`,
                                    children: [(0, y.jsx)(`span`, {
                                        className: `font-semibold`,
                                        children: (0, y.jsx)(i, {
                                            ...b.downloadWithoutLogo
                                        })
                                    }), (0, y.jsx)(`span`, {
                                        className: `text-token-text-secondary`,
                                        children: (0, y.jsx)(i, {
                                            ...b.upgradePlan
                                        })
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            })]
        })
    }
}));
export {
    S as n, b as r, x as t
};
//# sourceMappingURL=97fef780-h38m38biazn0s57l.js.map