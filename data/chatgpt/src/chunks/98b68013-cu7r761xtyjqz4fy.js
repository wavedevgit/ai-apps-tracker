import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as n,
    Vn as r,
    wn as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as a,
    t as o
} from "./7508386a-hg90vrdgh6l7jvko.js";
var s, c, l, u, d = e((() => {
    s = i(), c = t(r()), a(), l = n(), u = e => {
        "use forget";
        let t = (0, s.c)(16),
            {
                id: n,
                label: r,
                choices: i,
                selected: a,
                onSelect: u
            } = e,
            d;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = [], t[0] = d) : d = t[0];
        let f = (0, c.useRef)(d),
            p;
        t[1] !== i || t[2] !== u ? (p = e => {
            if (!(e.target instanceof HTMLButtonElement)) return;
            let t = f.current.indexOf(e.target);
            if (t < 0) return;
            let n = getComputedStyle(e.currentTarget).direction === `rtl`,
                r = e.key === `ArrowRight` ? n ? -1 : 1 : e.key === `ArrowLeft` ? n ? 1 : -1 : 0,
                a = e.key === `Home` ? 0 : e.key === `End` ? i.length - 1 : r ? (t + r + i.length) % i.length : -1;
            a < 0 || (e.preventDefault(), u(i[a].value, !1), f.current[a]?.focus({
                preventScroll: !0
            }), f.current[a]?.scrollIntoView({
                block: `nearest`,
                inline: `nearest`,
                behavior: `instant`
            }))
        }, t[1] = i, t[2] = u, t[3] = p) : p = t[3];
        let m;
        t[4] !== i || t[5] !== n || t[6] !== u || t[7] !== a ? (m = i.map((e, t) => {
            let {
                value: r,
                label: i
            } = e;
            return (0, l.jsx)(o, {
                id: `${n}-${r}`,
                label: i,
                className: `dots-tab interactive-button`,
                active: a === r,
                tabIndex: a === r ? 0 : -1,
                onClick: e => u(r, e.detail > 0),
                ref: e => {
                    f.current[t] = e
                }
            }, r)
        }), t[4] = i, t[5] = n, t[6] = u, t[7] = a, t[8] = m) : m = t[8];
        let h;
        t[9] !== r || t[10] !== m ? (h = (0, l.jsx)(`div`, {
            role: `tablist`,
            "aria-label": r,
            className: `dots-tab-list flex`,
            children: m
        }), t[9] = r, t[10] = m, t[11] = h) : h = t[11];
        let g;
        return t[12] !== r || t[13] !== p || t[14] !== h ? (g = (0, l.jsx)(`div`, {
            className: `dots-choice-tabs w-full`,
            role: `group`,
            "aria-label": r,
            onKeyDown: p,
            children: h
        }), t[12] = r, t[13] = p, t[14] = h, t[15] = g) : g = t[15], g
    }
}));
export {
    d as n, u as t
};
//# sourceMappingURL=98b68013-cu7r761xtyjqz4fy.js.map