const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/abd2ec81-eg90oby2kr89pda1.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-lxa3wniynbx9ka2a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/d329f11d-jd8lnznm4730ptez.js", "assets/conversation-small-kzsalymynzuddxee.js", "assets/30901919-i8ip8r0znvgcym38.js", "assets/c470f5ab-poh7ivjvb3j2jlfz.js", "assets/0e5afe53-dz59mkfveu52getp.js", "assets/conversation-small-bwtqiuwj.css", "assets/db34ae56-grdrextr6er48w1y.js", "assets/948fe603-hh15olqbscdhlfy5.js", "assets/e9df0b0e-ozryisgig49a1a51.js", "assets/e8b55dd1-o7aoh2qmdluj0b7k.js", "assets/9e18a103-jtuicgh1jg6dzyxh.js", "assets/3f385189-n3sls8prf0uwjnan.js", "assets/e7a416e4-lbn5l0ib09fhyyoo.js", "assets/5f4d7fa0-iup2y8safm6e3rns.js", "assets/ab92372e-hjdw4ozpna7s95h0.js", "assets/0f28d127-nerckj7ev4uundx3.js", "assets/3a774aaf-dgl55v5x565r14mh.js", "assets/c2675c8c-ossqum2x3eut0sh8.js", "assets/82782bc9-idqd90kxtp4zogpp.js", "assets/8b34dbc2-ba6wt3zxvh7jce7p.js", "assets/global-modals-lv5n3ujm.css", "assets/82d09521-ie7gnb8hhbkjhnft.js", "assets/5b59f3e4-f9v1k69a0tdaqzc0.js", "assets/4e7cf3cf-jivzad1f2rrh8a2m.js", "assets/6ab34ef3-n85za9h2nnvkr012.js"]))) => i.map(i => d[i]);
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
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
        o(), p(), h = i(() => f(() => import(`./abd2ec81-eg90oby2kr89pda1.js`).then(e => e.AardvarkScanConfigurationSettingsDrawer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29])))
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
//# sourceMappingURL=28ea772c-nerm2mrq5vaqniwq.js.map