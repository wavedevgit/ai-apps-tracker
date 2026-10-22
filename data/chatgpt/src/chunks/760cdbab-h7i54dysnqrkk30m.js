import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as n,
    Nn as r,
    Rn as i,
    Vn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    P3t as o,
    j3t as s
} from "./conversation-small-m08q51xmfe7gjq3d.js";
var c, l, u, d, f, p = e((() => {
    o(), c = t(a()), i(), l = n(), u = e => {
        let t = [],
            n = /\[([^\]]+)\]\(([^)]+)\)/g,
            r = 0,
            i;
        for (;
            (i = n.exec(e)) !== null;) {
            i.index > r && t.push(e.slice(r, i.index));
            let [n, a, o] = i;
            t.push((0, l.jsx)(`a`, {
                href: o,
                target: `_blank`,
                rel: `noreferrer`,
                className: `underline`,
                children: a
            }, `${o}-${i.index}`)), r = i.index + n.length
        }
        return r < e.length && t.push(e.slice(r)), t.length === 0 ? e : t.length === 1 ? t[0] : t
    }, d = ({
        blurbs: e
    }) => (0, l.jsx)(`div`, {
        className: `border-token-border-default rounded-2xl border px-4 py-2`,
        children: Array.from({
            length: e?.length ?? 3
        }).map((t, n) => {
            let r = e?.[n];
            return (0, l.jsx)(`div`, {
                className: `border-token-border-default flex gap-4 border-b py-2 last-of-type:border-none`,
                children: r ? (0, l.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, l.jsx)(`div`, {
                        className: `pb-0.5 text-sm font-medium`,
                        children: r.title
                    }), (0, l.jsx)(`div`, {
                        className: `text-token-text-secondary text-xs`,
                        children: u(r.description)
                    })]
                }) : (0, l.jsx)(s, {
                    lines: 2
                })
            }, `${n}`)
        })
    }), f = ({
        blurbs: e,
        showTitles: t = !0
    }) => (0, l.jsx)(`div`, {
        className: `flex flex-col gap-2.5`,
        children: Array.from({
            length: e?.length ?? 3
        }).map((n, i) => {
            let a = e?.[i];
            return (0, l.jsx)(c.Fragment, {
                children: a ? (0, l.jsxs)(`div`, {
                    className: `text-token-text-tertiary text-xs leading-snug`,
                    children: [t && (0, l.jsxs)(`span`, {
                        className: `text-token-text-primary text-xs font-medium`,
                        children: [a.title, (0, l.jsx)(r, {
                            id: `CjgKTH`,
                            defaultMessage: `. `
                        })]
                    }), u(a.description)]
                }) : (0, l.jsx)(s, {
                    lines: 2
                })
            }, i)
        })
    })
}));
export {
    f as n, p as r, d as t
};
//# sourceMappingURL=760cdbab-h7i54dysnqrkk30m.js.map