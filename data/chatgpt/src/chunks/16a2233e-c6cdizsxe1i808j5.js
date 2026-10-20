import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JT as t,
    RU as n,
    aC as r,
    oC as i,
    qT as a,
    zU as o
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as s,
    Pn as c,
    Tn as l,
    Vn as u,
    zn as d
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    FS as f,
    IS as p
} from "./30901919-jory365vq6ym5crx.js";
var m, h, g, _ = e((() => {
    m = l(), t(), f(), o(), i(), d(), h = u(), g = e => {
        "use forget";
        let t = (0, m.c)(7),
            {
                adminReviewUrl: i
            } = e,
            o = s(),
            l;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, h.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, h.jsx)(c, {
                id: `chatgpt.plugins.details.apps.workspace_approval.admin_link.description`,
                defaultMessage: `Send this link to a workspace admin for app approval.`
            })
        }), t[0] = l) : l = t[0];
        let u;
        t[1] !== i || t[2] !== o ? (u = () => {
            r(new URL(i, window.location.origin).toString()).then(() => n().success(o.formatMessage({
                id: `chatgpt.plugins.details.apps.workspace_approval.admin_link.copy.toast.success`,
                defaultMessage: `Admin review link copied`
            }))).catch(() => n().danger(o.formatMessage({
                id: `chatgpt.plugins.details.apps.workspace_approval.admin_link.copy.toast.error`,
                defaultMessage: `Couldn't copy admin review link`
            })))
        }, t[1] = i, t[2] = o, t[3] = u) : u = t[3];
        let d;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, h.jsx)(c, {
            id: `chatgpt.plugins.details.apps.workspace_approval.admin_link.copy.button.label`,
            defaultMessage: `Copy admin review link`
        }), t[4] = d) : d = t[4];
        let f;
        return t[5] === u ? f = t[6] : (f = (0, h.jsxs)(`div`, {
            className: `flex flex-col items-start gap-3`,
            children: [l, (0, h.jsx)(a, {
                color: `secondary`,
                icon: p,
                size: `small`,
                type: `button`,
                onClick: u,
                children: d
            })]
        }), t[5] = u, t[6] = f), f
    }
}));
export {
    _ as n, g as t
};
//# sourceMappingURL=16a2233e-c6cdizsxe1i808j5.js.map