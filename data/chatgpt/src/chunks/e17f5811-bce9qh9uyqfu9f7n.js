import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as t,
    kT as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as r,
    Ln as i,
    Rn as a,
    wn as o,
    zn as s
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    DC as c,
    EC as l,
    TC as u,
    wC as d
} from "./30901919-e33mbl5u1y88w5wu.js";
var f, p, m, h, g = e((() => {
    f = o(), t(), c(), u(), a(), p = r(), m = e => {
        "use forget";
        let t = (0, f.c)(14),
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
        t[0] !== i || t[1] !== m || t[2] !== r ? (g = m.formatMessage(i ? h.collapseSection : h.expandSection, {
            section: r
        }), t[0] = i, t[1] = m, t[2] = r, t[3] = g) : g = t[3];
        let _ = g,
            v = i ? l : d,
            y;
        t[4] !== i || t[5] !== o ? (y = () => o(!i), t[4] = i, t[5] = o, t[6] = y) : y = t[6];
        let b;
        return t[7] !== a || t[8] !== u || t[9] !== i || t[10] !== _ || t[11] !== v || t[12] !== y ? (b = (0, p.jsx)(n, {
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
        }), t[7] = a, t[8] = u, t[9] = i, t[10] = _, t[11] = v, t[12] = y, t[13] = b) : b = t[13], b
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
//# sourceMappingURL=e17f5811-bce9qh9uyqfu9f7n.js.map