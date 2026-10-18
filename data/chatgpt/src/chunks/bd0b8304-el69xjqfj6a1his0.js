import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as n,
    y5 as r
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as i,
    Vn as a,
    wn as o
} from "./2340486e-oc6d2eodbcrmxur3.js";
var s, c, l, u, d = e((() => {
    s = o(), n(), c = t(a()), l = i(), u = e => {
        "use forget";
        let t = (0, s.c)(9),
            {
                children: n,
                titleId: i,
                closeRef: a,
                className: o
            } = e,
            u = (0, c.useRef)(null),
            d, f;
        t[0] === a ? (d = t[1], f = t[2]) : (d = () => {
            let e = document.activeElement;
            a.current?.focus();
            let t = e => {
                if (e.defaultPrevented) return;
                let t = u.current;
                if (e.target instanceof Element && e.target.closest(`[role="dialog"], dialog`) !== t) return;
                if (e.key === `Escape`) {
                    e.preventDefault(), a.current?.click();
                    return
                }
                if (e.key !== `Tab`) return;
                let n = t?.querySelectorAll(`a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`),
                    r = n?.[0],
                    i = n?.[n.length - 1];
                if (t == null || r == null || i == null) return;
                let o = document.activeElement;
                e.shiftKey && (o === r || !t.contains(o)) ? (e.preventDefault(), i.focus()) : !e.shiftKey && (o === i || !t.contains(o)) && (e.preventDefault(), r.focus())
            };
            return document.addEventListener(`keydown`, t), () => {
                document.removeEventListener(`keydown`, t), e instanceof HTMLElement && e.isConnected && e.focus()
            }
        }, f = [a], t[0] = a, t[1] = d, t[2] = f), (0, c.useEffect)(d, f);
        let p;
        t[3] === o ? p = t[4] : (p = r(`bg-surface-primary relative flex h-[80dvh] w-full max-w-[clamp(570px,37.5vw,660px)] flex-col overflow-hidden rounded-3xl shadow-2xl sm:rounded-[32px] dark:bg-black`, o), t[3] = o, t[4] = p);
        let m;
        return t[5] !== n || t[6] !== p || t[7] !== i ? (m = (0, l.jsx)(`main`, {
            className: `text-token-text-primary fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-6`,
            children: (0, l.jsx)(`section`, {
                "aria-labelledby": i,
                "aria-modal": `true`,
                className: p,
                ref: u,
                role: `dialog`,
                children: n
            })
        }), t[5] = n, t[6] = p, t[7] = i, t[8] = m) : m = t[8], m
    }
}));
export {
    d as n, u as t
};
//# sourceMappingURL=bd0b8304-el69xjqfj6a1his0.js.map