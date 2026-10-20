import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JT as t,
    qT as n
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as r,
    Rn as i,
    Tn as a,
    Vn as o,
    zn as s
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    DC as c,
    EC as l,
    TC as u,
    wC as d
} from "./30901919-jory365vq6ym5crx.js";
var f, p, m, h, g = e((() => {
    f = a(), t(), c(), u(), s(), p = o(), m = e => {
        "use forget";
        let t = (0, f.c)(14),
            {
                sectionTitle: i,
                expanded: a,
                controlsId: o,
                onExpandedChange: s,
                disabled: c
            } = e,
            u = c !== void 0 && c,
            m = r(),
            g;
        t[0] !== a || t[1] !== m || t[2] !== i ? (g = m.formatMessage(a ? h.collapseSection : h.expandSection, {
            section: i
        }), t[0] = a, t[1] = m, t[2] = i, t[3] = g) : g = t[3];
        let _ = g,
            v = a ? l : d,
            y;
        t[4] !== a || t[5] !== s ? (y = () => s(!a), t[4] = a, t[5] = s, t[6] = y) : y = t[6];
        let b;
        return t[7] !== o || t[8] !== u || t[9] !== a || t[10] !== _ || t[11] !== v || t[12] !== y ? (b = (0, p.jsx)(n, {
            type: `button`,
            color: `ghost`,
            size: `small`,
            icon: v,
            label: _,
            "aria-expanded": a,
            "aria-controls": o,
            disabled: u,
            onClick: y,
            className: `size-8 min-h-8 p-0`,
            iconClassName: `icon-sm`
        }), t[7] = o, t[8] = u, t[9] = a, t[10] = _, t[11] = v, t[12] = y, t[13] = b) : b = t[13], b
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
//# sourceMappingURL=e17f5811-hq4oa7m8twmoarsm.js.map