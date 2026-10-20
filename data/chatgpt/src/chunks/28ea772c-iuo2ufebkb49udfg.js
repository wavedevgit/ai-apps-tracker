const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/abd2ec81-j7lbs6tp64j37ltx.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/d329f11d-k7ew68fe8b44sors.js", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css", "assets/db34ae56-ep6hmoa37lvxhcmo.js", "assets/948fe603-ihl5i6wjdqpjpp6p.js", "assets/e9df0b0e-holfqe2y8h80h6tr.js", "assets/e8b55dd1-b3smow2b6xw7zdoi.js", "assets/9e18a103-bebnjxdzp57pobw5.js", "assets/3f385189-n3sls8prf0uwjnan.js", "assets/e7a416e4-ocuqjh7uemhhtwkt.js", "assets/5f4d7fa0-y1o3zavyaxi1zm3x.js", "assets/ab92372e-lqpip46xxvnvxu2e.js", "assets/0f28d127-edao9osrzesd6ggo.js", "assets/3a774aaf-lgf1bazaf2w9njko.js", "assets/c2675c8c-ejvs9hq3rwjwsbcv.js", "assets/82782bc9-fcii2id0x6lspwtj.js", "assets/8b34dbc2-dtawqv9t1aqckqj4.js", "assets/global-modals-lv5n3ujm.css", "assets/82d09521-k9j2ol738jas7s70.js", "assets/5b59f3e4-f9v1k69a0tdaqzc0.js", "assets/4e7cf3cf-g44oumhjv6s16gct.js", "assets/6ab34ef3-j08cv609bnjs26in.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    JT as r,
    X0 as i,
    YT as a,
    Z0 as o,
    n2 as s
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
        o(), p(), h = i(() => f(() => import(`./abd2ec81-j7lbs6tp64j37ltx.js`).then(e => e.AardvarkScanConfigurationSettingsDrawer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29])))
    })),
    _, v, y, b, x, S = e((() => {
        _ = m(), g(), a(), n(), v = t(d()), u(), y = c(), b = {
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
                    repoId: i,
                    repoFullName: a,
                    canEdit: o,
                    icon: c,
                    size: u
                } = e,
                d = o === void 0 || o,
                f = u === void 0 ? `small` : u,
                p;
            t[0] !== d || t[1] !== a || t[2] !== i ? (p = () => {
                (0, v.startTransition)(() => {
                    s(h, {
                        repoId: i,
                        repoFullName: a,
                        canEdit: d
                    })
                })
            }, t[0] = d, t[1] = a, t[2] = i, t[3] = p) : p = t[3];
            let m = p,
                g;
            t[4] !== d || t[5] !== n ? (g = n ?? (d ? (0, y.jsx)(l, {
                ...b.configure
            }) : (0, y.jsx)(l, {
                ...b.view
            })), t[4] = d, t[5] = n, t[6] = g) : g = t[6];
            let x;
            return t[7] !== m || t[8] !== c || t[9] !== f || t[10] !== g ? (x = (0, y.jsx)(r, {
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
//# sourceMappingURL=28ea772c-iuo2ufebkb49udfg.js.map