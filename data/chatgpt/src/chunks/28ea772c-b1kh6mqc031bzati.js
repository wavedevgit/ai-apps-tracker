const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/abd2ec81-chufkr8wkkqznbxq.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-tap9fxyhk4ehe0bs.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/d329f11d-hvh9bs63xbbwey6h.js", "assets/conversation-small-nmt18uiom3b14vca.js", "assets/30901919-niqyapppecmq5jkn.js", "assets/c470f5ab-uuoa2gfm4goj6p9f.js", "assets/0e5afe53-f7up6uuou2fv3lyg.js", "assets/conversation-small-bwtqiuwj.css", "assets/db34ae56-c5higps8toizu2y7.js", "assets/948fe603-orh1h0nmbzil5lh0.js", "assets/e9df0b0e-nqe9mnm0e3g4atrv.js", "assets/e8b55dd1-n5kaljiedpg9155g.js", "assets/9e18a103-jfr20n92xyedw9a7.js", "assets/3f385189-n3sls8prf0uwjnan.js", "assets/e7a416e4-danln7hfvq7g8q7v.js", "assets/5f4d7fa0-cfnccctp9kn5bxge.js", "assets/ab92372e-bwyzbely1r25mun1.js", "assets/0f28d127-lk1hb9sac5xbjyf1.js", "assets/3a774aaf-h9teupkktl16xrzn.js", "assets/c2675c8c-h5ybkhdzcoblzzdu.js", "assets/82782bc9-g3liom11amtlr9kq.js", "assets/8b34dbc2-ojcl97ddvu2212q0.js", "assets/global-modals-lv5n3ujm.css", "assets/82d09521-ne0u2uwabtk0fj3e.js", "assets/5b59f3e4-f9v1k69a0tdaqzc0.js", "assets/4e7cf3cf-n5b6ob5ak9khuvte.js", "assets/6ab34ef3-abjqcmus3gfhsdu3.js"]))) => i.map(i => d[i]);
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
} from "./4813494d-tap9fxyhk4ehe0bs.js";
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
        o(), p(), h = i(() => f(() => import(`./abd2ec81-chufkr8wkkqznbxq.js`).then(e => e.AardvarkScanConfigurationSettingsDrawer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29])))
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
//# sourceMappingURL=28ea772c-b1kh6mqc031bzati.js.map