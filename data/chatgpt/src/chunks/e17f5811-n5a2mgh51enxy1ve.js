import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    eE as n
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as r,
    Ln as i,
    Rn as a,
    wn as o,
    zn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CC as c,
    SC as l,
    TC as u,
    wC as d
} from "./30901919-k5uqyx4vyplt9toa.js";
var f, p, m, h, g = e((() => {
    f = o(), n(), u(), c(), a(), p = r(), m = e => {
        "use forget";
        let n = (0, f.c)(14),
            {
                sectionTitle: r,
                expanded: i,
                controlsId: a,
                onExpandedChange: o,
                disabled: c
            } = e,
            u = c !== void 0 && c,
            m = s(),
            g;
        n[0] !== i || n[1] !== m || n[2] !== r ? (g = m.formatMessage(i ? h.collapseSection : h.expandSection, {
            section: r
        }), n[0] = i, n[1] = m, n[2] = r, n[3] = g) : g = n[3];
        let _ = g,
            v = i ? d : l,
            y;
        n[4] !== i || n[5] !== o ? (y = () => o(!i), n[4] = i, n[5] = o, n[6] = y) : y = n[6];
        let b;
        return n[7] !== a || n[8] !== u || n[9] !== i || n[10] !== _ || n[11] !== v || n[12] !== y ? (b = (0, p.jsx)(t, {
            type: `button`,
            color: `ghost`,
            size: `small`,
            icon: v,
            label: _,
            "aria-expanded": i,
            "aria-controls": a,
            disabled: u,
            onClick: y,
            className: `size-8 min-h-8 p-0`,
            iconClassName: `icon-sm`
        }), n[7] = a, n[8] = u, n[9] = i, n[10] = _, n[11] = v, n[12] = y, n[13] = b) : b = n[13], b
    }, h = i({
        expandSection: {
            id: `chatgpt.admin.permissions.role.section.expand`,
            defaultMessage: `Expand {section}`
        },
        collapseSection: {
            id: `chatgpt.admin.permissions.role.section.collapse`,
            defaultMessage: `Collapse {section}`
        }
    })
}));
export {
    g as n, m as t
};
//# sourceMappingURL=e17f5811-n5a2mgh51enxy1ve.js.map