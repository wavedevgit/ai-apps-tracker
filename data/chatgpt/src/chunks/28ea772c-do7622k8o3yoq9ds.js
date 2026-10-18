const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/abd2ec81-cckok9gars2rufew.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/d329f11d-f3jqyhwii9qke9xg.js", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/db34ae56-hqewgeeuyr011e84.js", "assets/948fe603-jmn3j8ixfx3i0uqo.js", "assets/e9df0b0e-d1weo5rhf9ifr6qg.js", "assets/e8b55dd1-kppmc5q1mw2sht6j.js", "assets/9e18a103-lu5tm6szxryelo1d.js", "assets/3f385189-n3sls8prf0uwjnan.js", "assets/e7a416e4-kuwsbzsm2eulf2ua.js", "assets/5f4d7fa0-h884rob3aq4wlepb.js", "assets/ab92372e-glzrgn0c7jblr8e0.js", "assets/0f28d127-g7pcd3sfhh818mzy.js", "assets/3a774aaf-jtilbrgvl6xaoa8n.js", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css", "assets/82d09521-e4s1atz8rfooze7z.js", "assets/5b59f3e4-f9v1k69a0tdaqzc0.js", "assets/4e7cf3cf-bytq9jsazycjc5xj.js", "assets/6ab34ef3-bk9py1koawgm2ukb.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    C0 as r,
    O0 as i,
    S0 as a,
    T0 as o,
    kT as s
} from "./4813494d-cb22y2w19zwyshmt.js";
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
        r(), p(), h = a(() => f(() => import(`./abd2ec81-cckok9gars2rufew.js`).then(e => e.AardvarkScanConfigurationSettingsDrawer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29])))
    })),
    _, v, y, b, x, S = e((() => {
        _ = m(), g(), n(), o(), v = t(d()), u(), y = c(), b = {
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
                    repoFullName: a,
                    canEdit: o,
                    icon: c,
                    size: u
                } = e,
                d = o === void 0 || o,
                f = u === void 0 ? `small` : u,
                p;
            t[0] !== d || t[1] !== a || t[2] !== r ? (p = () => {
                (0, v.startTransition)(() => {
                    i(h, {
                        repoId: r,
                        repoFullName: a,
                        canEdit: d
                    })
                })
            }, t[0] = d, t[1] = a, t[2] = r, t[3] = p) : p = t[3];
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
//# sourceMappingURL=28ea772c-do7622k8o3yoq9ds.js.map