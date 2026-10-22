const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/abd2ec81-e6dp0mlfzcgqnlck.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/d329f11d-klzg8fhenp40pqxn.js", "assets/conversation-small-m08q51xmfe7gjq3d.js", "assets/30901919-lgbmg5s09xld40kt.js", "assets/c470f5ab-hgik953cu5ujlhdm.js", "assets/0e5afe53-i4tqvmyg38miikw0.js", "assets/conversation-small-dtc7tvsx.css", "assets/db34ae56-dbqipxzlbv91ajsu.js", "assets/948fe603-hmusu36oq8g5vvqo.js", "assets/e9df0b0e-bnvssa5nc586v6ol.js", "assets/e8b55dd1-ll6mdlclb267m78t.js", "assets/9e18a103-b7l6w61418lt0j8d.js", "assets/3f385189-n3sls8prf0uwjnan.js", "assets/e7a416e4-mdm0o3w68cu220y9.js", "assets/5f4d7fa0-lv5dqr39i3rotm55.js", "assets/ab92372e-iclt8thnn00e7ucs.js", "assets/0f28d127-jp21smkll63c8dwa.js", "assets/3a774aaf-nndokukd3i3bdb08.js", "assets/c2675c8c-otyjprdiowg2v8hl.js", "assets/82782bc9-ca5kcqz13rn6iprj.js", "assets/8b34dbc2-n194ohawifys3bko.js", "assets/global-modals-dxg9ukpk.css", "assets/82d09521-kquo05mdf60w3wje.js", "assets/5b59f3e4-f9v1k69a0tdaqzc0.js", "assets/4e7cf3cf-hxh9mc7kxy4x24f4.js", "assets/6ab34ef3-dp44r1jh7zwagznw.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    a2 as r,
    c2 as i,
    d2 as a,
    eE as o,
    o2 as s
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as c,
    Nn as l,
    Rn as u,
    Vn as d,
    cn as f,
    ln as p,
    wn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var h, g = e((() => {
        s(), p(), h = r(() => f(() => import(`./abd2ec81-e6dp0mlfzcgqnlck.js`).then(e => e.AardvarkScanConfigurationSettingsDrawer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29])))
    })),
    _, v, y, b, x, S = e((() => {
        _ = m(), g(), o(), i(), v = t(d()), u(), y = c(), b = {
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
                    children: r,
                    repoId: i,
                    repoFullName: o,
                    canEdit: s,
                    icon: c,
                    size: u
                } = e,
                d = s === void 0 || s,
                f = u === void 0 ? `small` : u,
                p;
            t[0] !== d || t[1] !== o || t[2] !== i ? (p = () => {
                (0, v.startTransition)(() => {
                    a(h, {
                        repoId: i,
                        repoFullName: o,
                        canEdit: d
                    })
                })
            }, t[0] = d, t[1] = o, t[2] = i, t[3] = p) : p = t[3];
            let m = p,
                g;
            t[4] !== d || t[5] !== r ? (g = r ?? (d ? (0, y.jsx)(l, {
                ...b.configure
            }) : (0, y.jsx)(l, {
                ...b.view
            })), t[4] = d, t[5] = r, t[6] = g) : g = t[6];
            let x;
            return t[7] !== m || t[8] !== c || t[9] !== f || t[10] !== g ? (x = (0, y.jsx)(n, {
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
//# sourceMappingURL=28ea772c-k2xbyn3d2xso0lln.js.map