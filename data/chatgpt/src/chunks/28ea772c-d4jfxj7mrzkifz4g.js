const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/abd2ec81-fazar0uyub8yupqq.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-i89nb6zlze66idsz.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/d329f11d-hgz5k34dnwl7pb7b.js", "assets/conversation-small-fh0oqifngkf5rvl1.js", "assets/30901919-cmi3nh547dwrqkxv.js", "assets/c470f5ab-ctk9cdujw17c2exz.js", "assets/0e5afe53-fofrudqqfgiodxgc.js", "assets/conversation-small-7l2sfhqg.css", "assets/db34ae56-hydp0rcejjkokrv1.js", "assets/948fe603-fn4az4d5sl11u1h2.js", "assets/e9df0b0e-mi2b5mvyywm9cici.js", "assets/e8b55dd1-far0ou312ztrtjr1.js", "assets/9e18a103-dde1wjftr25tfd5i.js", "assets/3f385189-n3sls8prf0uwjnan.js", "assets/e7a416e4-ln4qgbip5ogynq5o.js", "assets/5f4d7fa0-dmql0slc19dabffe.js", "assets/ab92372e-jb2vjro7gykvju5j.js", "assets/0f28d127-drqip5p1sq28j1wz.js", "assets/3a774aaf-e9y6ij2xd9mdrxry.js", "assets/c2675c8c-4fpunyxk1uf8cfp1.js", "assets/82782bc9-ivetrmhdn140ze7c.js", "assets/8b34dbc2-peb5nzi8z3rrflnv.js", "assets/global-modals-dxg9ukpk.css", "assets/82d09521-nbjsf61jyzu0lgyk.js", "assets/5b59f3e4-f9v1k69a0tdaqzc0.js", "assets/4e7cf3cf-nescxw6hxxq9mc7q.js", "assets/6ab34ef3-hm3la6aa4vkith56.js"]))) => i.map(i => d[i]);
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
} from "./4813494d-i89nb6zlze66idsz.js";
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
        s(), p(), h = r(() => f(() => import(`./abd2ec81-fazar0uyub8yupqq.js`).then(e => e.AardvarkScanConfigurationSettingsDrawer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29])))
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
//# sourceMappingURL=28ea772c-d4jfxj7mrzkifz4g.js.map