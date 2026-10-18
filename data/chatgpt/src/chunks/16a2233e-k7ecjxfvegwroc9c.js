import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as t,
    HS as n,
    VS as r,
    fU as i,
    kT as a,
    pU as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u,
    zn as d
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    FS as f,
    IS as p
} from "./30901919-e33mbl5u1y88w5wu.js";
var m, h, g, _ = e((() => {
    m = u(), t(), f(), o(), n(), l(), h = s(), g = e => {
        "use forget";
        let t = (0, m.c)(7),
            {
                adminReviewUrl: n
            } = e,
            o = d(),
            s;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, h.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, h.jsx)(c, {
                id: `chatgpt.plugins.details.apps.workspace_approval.admin_link.description`,
                defaultMessage: `Send this link to a workspace admin for app approval.`
            })
        }), t[0] = s) : s = t[0];
        let l;
        t[1] !== n || t[2] !== o ? (l = () => {
            r(new URL(n, window.location.origin).toString()).then(() => i().success(o.formatMessage({
                id: `chatgpt.plugins.details.apps.workspace_approval.admin_link.copy.toast.success`,
                defaultMessage: `Admin review link copied`
            }))).catch(() => i().danger(o.formatMessage({
                id: `chatgpt.plugins.details.apps.workspace_approval.admin_link.copy.toast.error`,
                defaultMessage: `Couldn't copy admin review link`
            })))
        }, t[1] = n, t[2] = o, t[3] = l) : l = t[3];
        let u;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, h.jsx)(c, {
            id: `chatgpt.plugins.details.apps.workspace_approval.admin_link.copy.button.label`,
            defaultMessage: `Copy admin review link`
        }), t[4] = u) : u = t[4];
        let f;
        return t[5] === l ? f = t[6] : (f = (0, h.jsxs)(`div`, {
            className: `flex flex-col items-start gap-3`,
            children: [s, (0, h.jsx)(a, {
                color: `secondary`,
                icon: p,
                size: `small`,
                type: `button`,
                onClick: l,
                children: u
            })]
        }), t[5] = l, t[6] = f), f
    }
}));
export {
    _ as n, g as t
};
//# sourceMappingURL=16a2233e-k7ecjxfvegwroc9c.js.map