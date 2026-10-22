import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as t,
    Dn as n,
    Ln as r,
    Nn as i,
    Rn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    fSt as s,
    pSt as c
} from "./conversation-small-fh0oqifngkf5rvl1.js";
var l, u, d, f = e((() => {
        l = o(), c(), a(), u = t(), d = e => {
            "use forget";
            let t = (0, l.c)(7),
                {
                    variant: n
                } = e,
                r = n === void 0 ? `modal` : n,
                a;
            t[0] === r ? a = t[1] : (a = r === `modal` && (0, u.jsx)(`p`, {
                className: `font-medium`,
                children: (0, u.jsx)(i, {
                    id: `gizmo.pluginMigration.dialog.files.profile.title`,
                    defaultMessage: `Profile picture wasn’t copied`
                })
            }), t[0] = r, t[1] = a);
            let o;
            t[2] === r ? o = t[3] : (o = (0, u.jsx)(`p`, {
                className: `text-token-text-secondary`,
                children: r === `details` ? (0, u.jsx)(i, {
                    id: `chatgpt.plugins.details.gpt_migration.profile_picture_notice.description`,
                    defaultMessage: `Your plugin was created, but we couldn’t copy the GPT’s profile picture. To add a logo, open your plugin and choose Edit plugin.`
                }) : (0, u.jsx)(i, {
                    id: `gizmo.pluginMigration.dialog.files.profile.description.add_logo`,
                    defaultMessage: `Your plugin was created without a profile picture. You can add a logo in Edit plugin.`
                })
            }), t[2] = r, t[3] = o);
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
        a(), p = r({
            description: {
                id: `gizmo.pluginMigration.dialog.files.skipped.description.unavailable`,
                defaultMessage: `{count, plural, one {Your plugin was created without a knowledge file that is no longer available.} other {Your plugin was created without # knowledge files that are no longer available.}} You can add replacement files in Edit plugin.`
            }
        })
    })),
    h, g, _, v = e((() => {
        h = o(), c(), m(), a(), g = t(), _ = e => {
            "use forget";
            let t = (0, h.c)(11),
                {
                    count: r,
                    filenames: a,
                    variant: o
                } = e,
                c = o === void 0 ? `modal` : o,
                l;
            t[0] !== r || t[1] !== c ? (l = c === `modal` && (0, g.jsx)(`p`, {
                className: `font-medium`,
                children: (0, g.jsx)(i, {
                    id: `gizmo.pluginMigration.dialog.files.skipped.title`,
                    defaultMessage: `{count, plural, one {A knowledge file wasn’t copied} other {Knowledge files weren’t copied}}`,
                    values: {
                        count: r
                    }
                })
            }), t[0] = r, t[1] = c, t[2] = l) : l = t[2];
            let u;
            t[3] === r ? u = t[4] : (u = (0, g.jsx)(`p`, {
                className: `text-token-text-secondary`,
                children: (0, g.jsx)(i, {
                    ...p.description,
                    values: {
                        count: r
                    }
                })
            }), t[3] = r, t[4] = u);
            let d;
            t[5] === a ? d = t[6] : (d = a != null && a.length > 0 && (0, g.jsx)(`p`, {
                className: `text-token-text-secondary`,
                children: (0, g.jsx)(`strong`, {
                    className: `font-medium select-text`,
                    children: (0, g.jsx)(n, {
                        type: `conjunction`,
                        value: a
                    })
                })
            }), t[5] = a, t[6] = d);
            let f;
            return t[7] !== l || t[8] !== u || t[9] !== d ? (f = (0, g.jsx)(s, {
                type: `warning`,
                customIcon: null,
                className: `text-start`,
                children: (0, g.jsxs)(`div`, {
                    role: `alert`,
                    className: `text-token-text-primary flex flex-col gap-1 text-xs wrap-anywhere`,
                    children: [l, u, d]
                })
            }), t[7] = l, t[8] = u, t[9] = d, t[10] = f) : f = t[10], f
        }
    }));
export {
    d as a, p as i, v as n, f as o, m as r, _ as t
};
//# sourceMappingURL=eadfdb53-devaneveu2cbepbk.js.map