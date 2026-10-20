import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as n,
    Ln as r,
    Nn as i,
    Rn as a,
    Vn as o,
    zn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    M5 as c,
    N5 as l,
    NHn as u,
    PHn as d
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Ax as f,
    cp as p,
    eb as m,
    kx as h,
    sp as g,
    tb as _
} from "./30901919-7dzdc1ou0jtwkwpt.js";
var v, y, b, x, S = e((() => {
    l(), d(), f(), _(), g(), v = t(o()), a(), y = n(), b = r({
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
        onDownload: n,
        onDownloadWithoutWatermark: r,
        showWithoutWatermarkLabel: a = !0,
        triggerClassName: o,
        iconClassName: l,
        dropdownClassName: d
    }) => {
        let f = s(),
            [g, _] = (0, v.useState)(!1),
            x = (0, v.useCallback)(e => {
                _(e), t?.(e)
            }, [t]),
            S = (0, v.useCallback)(e => {
                e.preventDefault(), e.stopPropagation(), n?.(), x(!1)
            }, [n, x]),
            C = (0, v.useCallback)(e => {
                e.preventDefault(), e.stopPropagation(), r?.(), x(!1)
            }, [r, x]);
        return (0, y.jsxs)(u.Root, {
            open: g,
            onOpenChange: x,
            children: [(0, y.jsx)(u.Trigger, {
                "aria-label": f.formatMessage(b.dropdownName),
                className: o,
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
                            children: [(0, y.jsx)(m, {}), a && r == null ? (0, y.jsxs)(`div`, {
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
                    }), r != null && (0, y.jsxs)(y.Fragment, {
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
//# sourceMappingURL=97fef780-dce3c95gl1j00guf.js.map