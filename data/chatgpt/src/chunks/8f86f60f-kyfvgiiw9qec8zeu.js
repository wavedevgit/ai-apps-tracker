import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as t,
    M_ as n,
    dz as r,
    fz as i,
    gv as a,
    ist as o,
    iw as s,
    kT as c,
    ow as l,
    wst as u
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as d,
    Nn as f,
    Rn as p,
    wn as m,
    zn as h
} from "./2340486e-oc6d2eodbcrmxur3.js";

function g(e) {
    for (let t of [`sharepoint_admin`, `teams_admin`, `outlook_email_admin`])
        if (e.knowledgeConfig.some(({
                key: e
            }) => e === t)) return t
}

function _(e) {
    return n[y[e]]
}

function v(e, t) {
    return t.get(_(e))
}
var y, b = e((() => {
        u(), a(), y = {
            sharepoint_admin: o.SHAREPOINT_ADMIN_CONNECTOR,
            teams_admin: o.TEAMS_ADMIN_CONNECTOR,
            outlook_email_admin: o.OUTLOOK_EMAIL_ADMIN_CONNECTOR
        }
    })),
    x, S, C, w = e((() => {
        x = m(), t(), l(), i(), p(), S = d(), C = e => {
            "use forget";
            let t = (0, x.c)(12),
                {
                    onClose: n,
                    hasError: i,
                    onRetry: a
                } = e,
                o = i !== void 0 && i,
                l = h(),
                u;
            t[0] === l ? u = t[1] : (u = l.formatMessage({
                id: `contextual-answers.admin.sync.setup.loading.title`,
                defaultMessage: `Sync setup`
            }), t[0] = l, t[1] = u);
            let d = o ? `alert` : `status`,
                p;
            t[2] !== o || t[3] !== a ? (p = o ? (0, S.jsxs)(S.Fragment, {
                children: [(0, S.jsx)(f, {
                    id: `contextual-answers.admin.sync.setup.loading.error`,
                    defaultMessage: `We couldn't load sync setup. Please try again.`
                }), a && (0, S.jsx)(c, {
                    color: `secondary`,
                    onClick: a,
                    children: (0, S.jsx)(f, {
                        id: `contextual-answers.admin.sync.setup.loading.retry`,
                        defaultMessage: `Retry`
                    })
                })]
            }) : (0, S.jsxs)(S.Fragment, {
                children: [(0, S.jsx)(r, {}), (0, S.jsx)(f, {
                    id: `contextual-answers.admin.sync.setup.loading.status`,
                    defaultMessage: `Loading sync setup…`
                })]
            }), t[2] = o, t[3] = a, t[4] = p) : p = t[4];
            let m;
            t[5] !== d || t[6] !== p ? (m = (0, S.jsx)(`div`, {
                className: `flex min-h-40 flex-col items-center justify-center gap-4 p-6 text-center`,
                role: d,
                children: p
            }), t[5] = d, t[6] = p, t[7] = m) : m = t[7];
            let g;
            return t[8] !== n || t[9] !== u || t[10] !== m ? (g = (0, S.jsx)(s, {
                testId: `modal-microsoft-admin-sync-loading`,
                isOpen: !0,
                onClose: n,
                size: `custom`,
                className: `max-w-[420px]`,
                title: u,
                children: m
            }), t[8] = n, t[9] = u, t[10] = m, t[11] = g) : g = t[11], g
        }
    }));
export {
    g as a, _ as i, w as n, b as o, v as r, C as t
};
//# sourceMappingURL=8f86f60f-kyfvgiiw9qec8zeu.js.map