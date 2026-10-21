import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as n,
    Nn as r,
    Rn as i,
    Vn as a,
    zn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    IHn as s,
    LHn as c,
    RHn as l
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    M as u,
    N as d,
    P as f,
    j as p
} from "./9e18a103-jfr20n92xyedw9a7.js";

function m({
    unifiedDiff: e,
    setUnifiedDiff: t,
    showFullDiff: n,
    setShowFullDiff: i
}) {
    let a = o(),
        [l, d] = (0, h.useState)(!1);
    return (0, g.jsxs)(s, {
        open: l,
        onOpenChange: d,
        contentAlign: `end`,
        sideOffset: 8,
        modal: !0,
        triggerButton: (0, g.jsx)(`button`, {
            type: `button`,
            onClick: () => d(!0),
            className: `hover:bg-token-border-light flex items-center justify-center rounded p-3`,
            "aria-label": a.formatMessage({
                id: `wham.diffModeDropdown.openMenu`,
                defaultMessage: `Open diff settings menu`
            }),
            children: (0, g.jsx)(f, {
                className: `icon`
            })
        }),
        children: [(0, g.jsxs)(c.RadioGroup, {
            value: e ? `unified` : `split`,
            onValueChange: e => t(e === `unified`),
            onClick: e => e.stopPropagation(),
            children: [(0, g.jsx)(c.RadioItem, {
                value: `split`,
                onClick: e => e.stopPropagation(),
                children: (0, g.jsxs)(`div`, {
                    className: `text-token-text-primary flex items-center gap-3`,
                    children: [(0, g.jsx)(f, {
                        className: `icon`
                    }), (0, g.jsx)(r, {
                        id: `wham.message.modal.footer.splitDiff`,
                        defaultMessage: `Split diff`
                    })]
                })
            }), (0, g.jsx)(c.RadioItem, {
                value: `unified`,
                onClick: e => e.stopPropagation(),
                children: (0, g.jsxs)(`div`, {
                    className: `text-token-text-primary flex items-center gap-3`,
                    children: [(0, g.jsx)(u, {
                        className: `icon`
                    }), (0, g.jsx)(r, {
                        id: `wham.message.modal.footer.unifiedDiff`,
                        defaultMessage: `Unified diff`
                    })]
                })
            })]
        }), (0, g.jsx)(c.Separator, {}), (0, g.jsxs)(c.RadioGroup, {
            value: n ? `full` : `latest`,
            onValueChange: e => i(e === `full`),
            onClick: e => {
                e.stopPropagation()
            },
            children: [(0, g.jsx)(c.RadioItem, {
                value: `full`,
                children: (0, g.jsx)(r, {
                    id: `wham.copyFile.showFullDiff`,
                    defaultMessage: `Full diff`
                })
            }), (0, g.jsx)(c.RadioItem, {
                value: `latest`,
                children: (0, g.jsx)(r, {
                    id: `wham.copyFile.showLatestCommit`,
                    defaultMessage: `Incremental diff`
                })
            })]
        })]
    })
}
var h, g, _ = e((() => {
    l(), d(), p(), h = t(a()), i(), g = n()
}));
export {
    _ as n, m as t
};
//# sourceMappingURL=18d4c67e-o2uwuowhlccr42m5.js.map