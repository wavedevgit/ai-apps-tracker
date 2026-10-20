import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    On as t,
    Pn as n,
    Rn as r,
    Tn as i,
    Vn as a,
    zn as o
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    fSt as s,
    pSt as c
} from "./conversation-small-cawdu7il3ha6y70c.js";
var l, u, d, f = e((() => {
        l = i(), c(), o(), u = a(), d = e => {
            "use forget";
            let t = (0, l.c)(7),
                {
                    variant: r
                } = e,
                i = r === void 0 ? `modal` : r,
                a;
            t[0] === i ? a = t[1] : (a = i === `modal` && (0, u.jsx)(`p`, {
                className: `font-medium`,
                children: (0, u.jsx)(n, {
                    id: `gizmo.pluginMigration.dialog.files.profile.title`,
                    defaultMessage: `Profile picture wasn’t copied`
                })
            }), t[0] = i, t[1] = a);
            let o;
            t[2] === i ? o = t[3] : (o = (0, u.jsx)(`p`, {
                className: `text-token-text-secondary`,
                children: i === `details` ? (0, u.jsx)(n, {
                    id: `chatgpt.plugins.details.gpt_migration.profile_picture_notice.description`,
                    defaultMessage: `Your plugin was created, but we couldn’t copy the GPT’s profile picture. To add a logo, open your plugin and choose Edit plugin.`
                }) : (0, u.jsx)(n, {
                    id: `gizmo.pluginMigration.dialog.files.profile.description.add_logo`,
                    defaultMessage: `Your plugin was created without a profile picture. You can add a logo in Edit plugin.`
                })
            }), t[2] = i, t[3] = o);
            let c;
            return t[4] !== a || t[5] !== o ? (c = (0, u.jsx)(s, {
                type: `warning`,
                customIcon: null,
                className: `text-start`,
                children: (0, u.jsxs)(`div`, {
                    role: `alert`,
                    className: `text-token-text-primary flex flex-col gap-1 text-xs`,
                    children: [a, o]
                })
            }), t[4] = a, t[5] = o, t[6] = c) : c = t[6], c
        }
    })),
    p, m = e((() => {
        o(), p = r({
            description: {
                id: `gizmo.pluginMigration.dialog.files.skipped.description.unavailable`,
                defaultMessage: `{count, plural, one {Your plugin was created without a knowledge file that is no longer available.} other {Your plugin was created without # knowledge files that are no longer available.}} You can add replacement files in Edit plugin.`
            }
        })
    })),
    h, g, _, v = e((() => {
        h = i(), c(), m(), o(), g = a(), _ = e => {
            "use forget";
            let r = (0, h.c)(11),
                {
                    count: i,
                    filenames: a,
                    variant: o
                } = e,
                c = o === void 0 ? `modal` : o,
                l;
            r[0] !== i || r[1] !== c ? (l = c === `modal` && (0, g.jsx)(`p`, {
                className: `font-medium`,
                children: (0, g.jsx)(n, {
                    id: `gizmo.pluginMigration.dialog.files.skipped.title`,
                    defaultMessage: `{count, plural, one {A knowledge file wasn’t copied} other {Knowledge files weren’t copied}}`,
                    values: {
                        count: i
                    }
                })
            }), r[0] = i, r[1] = c, r[2] = l) : l = r[2];
            let u;
            r[3] === i ? u = r[4] : (u = (0, g.jsx)(`p`, {
                className: `text-token-text-secondary`,
                children: (0, g.jsx)(n, {
                    ...p.description,
                    values: {
                        count: i
                    }
                })
            }), r[3] = i, r[4] = u);
            let d;
            r[5] === a ? d = r[6] : (d = a != null && a.length > 0 && (0, g.jsx)(`p`, {
                className: `text-token-text-secondary`,
                children: (0, g.jsx)(`strong`, {
                    className: `font-medium select-text`,
                    children: (0, g.jsx)(t, {
                        type: `conjunction`,
                        value: a
                    })
                })
            }), r[5] = a, r[6] = d);
            let f;
            return r[7] !== l || r[8] !== u || r[9] !== d ? (f = (0, g.jsx)(s, {
                type: `warning`,
                customIcon: null,
                className: `text-start`,
                children: (0, g.jsxs)(`div`, {
                    role: `alert`,
                    className: `text-token-text-primary flex flex-col gap-1 text-xs wrap-anywhere`,
                    children: [l, u, d]
                })
            }), r[7] = l, r[8] = u, r[9] = d, r[10] = f) : f = r[10], f
        }
    }));
export {
    d as a, p as i, v as n, f as o, m as r, _ as t
};
//# sourceMappingURL=eadfdb53-t8nca3ylm8nqfou1.js.map