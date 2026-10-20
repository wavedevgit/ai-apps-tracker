const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/abd2ec81-gkgdk7777iuzwznv.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/d329f11d-di8gkxqnfari7y7p.js", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/db34ae56-birdw14k3b92yx72.js", "assets/948fe603-oe0e7k99k9t57ypu.js", "assets/e9df0b0e-cyq6hiho492mozyf.js", "assets/e8b55dd1-lx70etaut7vzbqlz.js", "assets/9e18a103-q7moiqommz7yhv30.js", "assets/3f385189-n3sls8prf0uwjnan.js", "assets/e7a416e4-n9pc4bwkiggsq0a6.js", "assets/5f4d7fa0-b7743t275etbjxn4.js", "assets/ab92372e-dodnn2y0eo4rnnj7.js", "assets/0f28d127-uf9ceiy73vx1km81.js", "assets/3a774aaf-jqjpnrrc0sodophq.js", "assets/c2675c8c-nxl2ic2ofk2vw70s.js", "assets/82782bc9-jj605vonxg0iyc7p.js", "assets/8b34dbc2-d4icgkio4i3wfm6q.js", "assets/global-modals-lv5n3ujm.css", "assets/82d09521-7ksvt7fttlcfghtn.js", "assets/5b59f3e4-f9v1k69a0tdaqzc0.js", "assets/4e7cf3cf-knnx783v20bmqs3v.js", "assets/6ab34ef3-lspud2fpgnvdjkrp.js"]))) => i.map(i => d[i]);
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
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Hn as c,
    Pn as l,
    Tn as u,
    Vn as d,
    ln as f,
    un as p,
    zn as m
} from "./2340486e-komxp8tzs51ny4jj.js";
var h, g = e((() => {
        i(), p(), h = n(() => f(() => import(`./abd2ec81-gkgdk7777iuzwznv.js`).then(e => e.AardvarkScanConfigurationSettingsDrawer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29])))
    })),
    _, v, y, b, x, S = e((() => {
        _ = u(), g(), r(), a(), v = t(c()), m(), y = d(), b = {
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
//# sourceMappingURL=28ea772c-hnw5bxg7tzzz3oxq.js.map