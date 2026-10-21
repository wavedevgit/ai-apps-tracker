const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/abd2ec81-pfi2w2km05o7ho2w.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-ed29bs6yiwucn7st.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/d329f11d-gcbo65bf4rjk64kc.js", "assets/conversation-small-l6tnsr2xfn2d55kk.js", "assets/30901919-om7b3qf5hp4j9x4l.js", "assets/c470f5ab-d0jxi6yggehv1yt2.js", "assets/0e5afe53-goyw8fd3qndq8rq5.js", "assets/conversation-small-ixfdle4i.css", "assets/db34ae56-mrzsb0729xt0r3jp.js", "assets/948fe603-fakjy1ezhrfoxwqt.js", "assets/e9df0b0e-5cs5dqlmiqnsg0uv.js", "assets/e8b55dd1-bv9p77dbpxf5l5tk.js", "assets/9e18a103-k713d1yermbdqxul.js", "assets/3f385189-n3sls8prf0uwjnan.js", "assets/e7a416e4-jm0d0ndelqjnyznu.js", "assets/5f4d7fa0-of1sp15pu7a85xey.js", "assets/ab92372e-g9d37bir33ofc9lb.js", "assets/0f28d127-k6vgy7y272illkti.js", "assets/3a774aaf-evkoo6ibnbok8gsc.js", "assets/c2675c8c-fpv9s4kvd412dyap.js", "assets/82782bc9-cz4jkhg31tycbqqf.js", "assets/8b34dbc2-j8rcexxiltkm8ucr.js", "assets/global-modals-lv5n3ujm.css", "assets/82d09521-kzo1w974bbv3j7hg.js", "assets/5b59f3e4-f9v1k69a0tdaqzc0.js", "assets/4e7cf3cf-old492xav8khiceo.js", "assets/6ab34ef3-nfw6e1fxknzv47lo.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J0 as n,
    JT as r,
    Y0 as i,
    Z0 as a,
    e2 as o,
    qT as s
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as c,
    Nn as l,
    Rn as u,
    Vn as d,
    cn as f,
    ln as p,
    wn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
var h, g = e((() => {
        i(), p(), h = n(() => f(() => import(`./abd2ec81-pfi2w2km05o7ho2w.js`).then(e => e.AardvarkScanConfigurationSettingsDrawer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29])))
    })),
    _, v, y, b, x, S = e((() => {
        _ = m(), g(), r(), a(), v = t(d()), u(), y = c(), b = {
            configure: {
                id: `aardvark.whamRepos.configureButton`,
                defaultMessage: `Configure`,
                description: `Button label on the Scans page configured repositories table that opens the full scan settings drawer for owners/editors. Triggered by clicking this button in the table row. Audience: repository owners/editors. Short call-to-action with no placeholders or punctuation.`
            },
            view: {
                id: `aardvark.whamRepos.viewSettings`,
                defaultMessage: `View`,
                description: `Button label on the Scans page configured repositories table that opens the full scan settings drawer in read-only mode. Triggered by clicking this button in the table row. Audience: read-only workspace members. Short CTA text with no placeholders or punctuation.`
            }
        }, x = e => {
            "use forget";
            let t = (0, _.c)(12),
                {
                    children: n,
                    repoId: r,
                    repoFullName: i,
                    canEdit: a,
                    icon: c,
                    size: u
                } = e,
                d = a === void 0 || a,
                f = u === void 0 ? `small` : u,
                p;
            t[0] !== d || t[1] !== i || t[2] !== r ? (p = () => {
                (0, v.startTransition)(() => {
                    o(h, {
                        repoId: r,
                        repoFullName: i,
                        canEdit: d
                    })
                })
            }, t[0] = d, t[1] = i, t[2] = r, t[3] = p) : p = t[3];
            let m = p,
                g;
            t[4] !== d || t[5] !== n ? (g = n ?? (d ? (0, y.jsx)(l, {
                ...b.configure
            }) : (0, y.jsx)(l, {
                ...b.view
            })), t[4] = d, t[5] = n, t[6] = g) : g = t[6];
            let x;
            return t[7] !== m || t[8] !== c || t[9] !== f || t[10] !== g ? (x = (0, y.jsx)(s, {
                as: `button`,
                color: `secondary`,
                icon: c,
                size: f,
                type: `button`,
                onClick: m,
                children: g
            }), t[7] = m, t[8] = c, t[9] = f, t[10] = g, t[11] = x) : x = t[11], x
        }
    }));
export {
    S as n, x as t
};
//# sourceMappingURL=28ea772c-cdvtipqsx18xoqrf.js.map