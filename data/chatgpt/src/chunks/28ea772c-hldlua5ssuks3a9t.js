const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/abd2ec81-dflh802ux0hur4r4.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/d329f11d-oagncjighedmjrz3.js", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/db34ae56-ev66fexm35fr5b84.js", "assets/948fe603-r9e0wcvjpd8t98jm.js", "assets/e9df0b0e-bmrrk8cs3jox1m88.js", "assets/e8b55dd1-dfgkzw9vw02a91pu.js", "assets/9e18a103-h1quzy0ff906eufh.js", "assets/3f385189-n3sls8prf0uwjnan.js", "assets/e7a416e4-e6470wlhu847v802.js", "assets/5f4d7fa0-c53njl56by21uf8z.js", "assets/ab92372e-o4jvgv4y4zodpseo.js", "assets/0f28d127-laypgwdxjcvsjidb.js", "assets/3a774aaf-churgleks2pimmk5.js", "assets/c2675c8c-oz03twoan08d72ud.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/global-modals-dxg9ukpk.css", "assets/82d09521-j0zwhjr2o39m5j3e.js", "assets/5b59f3e4-f9v1k69a0tdaqzc0.js", "assets/4e7cf3cf-orbuc0o99tork4xg.js", "assets/6ab34ef3-hguwpxkdkyx2l3j4.js"]))) => i.map(i => d[i]);
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
} from "./4813494d-mdvd4786a87166cc.js";
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
        s(), p(), h = r(() => f(() => import(`./abd2ec81-dflh802ux0hur4r4.js`).then(e => e.AardvarkScanConfigurationSettingsDrawer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29])))
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
//# sourceMappingURL=28ea772c-hldlua5ssuks3a9t.js.map