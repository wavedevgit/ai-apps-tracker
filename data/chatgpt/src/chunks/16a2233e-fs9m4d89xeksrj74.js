import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    IU as n,
    LU as r,
    dC as i,
    eE as a,
    fC as o
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u,
    zn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FS as f,
    IS as p
} from "./30901919-r9pahacmzqudnt4f.js";
var m, h, g, _ = e((() => {
    m = u(), a(), f(), r(), o(), l(), h = s(), g = e => {
        "use forget";
        let r = (0, m.c)(7),
            {
                adminReviewUrl: a
            } = e,
            o = d(),
            s;
        r[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, h.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, h.jsx)(c, {
                id: `chatgpt.plugins.details.apps.workspace_approval.admin_link.description`,
                defaultMessage: `Send this link to a workspace admin for app approval.`
            })
        }), r[0] = s) : s = r[0];
        let l;
        r[1] !== a || r[2] !== o ? (l = () => {
            i(new URL(a, window.location.origin).toString()).then(() => n().success(o.formatMessage({
                id: `chatgpt.plugins.details.apps.workspace_approval.admin_link.copy.toast.success`,
                defaultMessage: `Admin review link copied`
            }))).catch(() => n().danger(o.formatMessage({
                id: `chatgpt.plugins.details.apps.workspace_approval.admin_link.copy.toast.error`,
                defaultMessage: `Couldn't copy admin review link`
            })))
        }, r[1] = a, r[2] = o, r[3] = l) : l = r[3];
        let u;
        r[4] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, h.jsx)(c, {
            id: `chatgpt.plugins.details.apps.workspace_approval.admin_link.copy.button.label`,
            defaultMessage: `Copy admin review link`
        }), r[4] = u) : u = r[4];
        let f;
        return r[5] === l ? f = r[6] : (f = (0, h.jsxs)(`div`, {
            className: `flex flex-col items-start gap-3`,
            children: [s, (0, h.jsx)(t, {
                color: `secondary`,
                icon: p,
                size: `small`,
                type: `button`,
                onClick: l,
                children: u
            })]
        }), r[5] = l, r[6] = f), f
    }
}));
export {
    _ as n, g as t
};
//# sourceMappingURL=16a2233e-fs9m4d89xeksrj74.js.map