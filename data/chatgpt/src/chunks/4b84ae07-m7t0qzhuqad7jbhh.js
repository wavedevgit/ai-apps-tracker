import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ as t,
    Bn as n,
    Ht as r,
    Pt as i,
    at as a,
    wn as o
} from "./2340486e-oc6d2eodbcrmxur3.js";
var s, c, l, u, d, f = e((() => {
    s = o(), t(), c = n(), l = (e, t) => {
        if (!t.isNativeMobileView && !t.showChatButton) return e;
        let n = e.indexOf(`#`),
            r = n === -1 ? e : e.slice(0, n),
            i = n === -1 ? `` : e.slice(n),
            a = r.indexOf(`?`),
            o = a === -1 ? r : r.slice(0, a),
            s = new URLSearchParams(a === -1 ? `` : r.slice(a + 1));
        t.isNativeMobileView && s.set(`native_mobile_view`, `true`), t.showChatButton && s.set(`show_chat_button`, `true`);
        let c = s.toString();
        return `${o}${c?`?${c}`:``}${i}`
    }, u = e => {
        "use forget";
        let t = (0, s.c)(16),
            n, i, o;
        t[0] === e ? (n = t[1], i = t[2], o = t[3]) : ({
            to: o,
            children: n,
            ...i
        } = e, t[0] = e, t[1] = n, t[2] = i, t[3] = o);
        let [u] = r(), d;
        t[4] === u ? d = t[5] : (d = u.get(`native_mobile_view`), t[4] = u, t[5] = d);
        let f = d === `true`,
            p;
        t[6] === u ? p = t[7] : (p = u.get(`show_chat_button`), t[6] = u, t[7] = p);
        let m = p === `true`,
            h;
        t[8] !== f || t[9] !== m || t[10] !== o ? (h = l(o, {
            isNativeMobileView: f,
            showChatButton: m
        }), t[8] = f, t[9] = m, t[10] = o, t[11] = h) : h = t[11];
        let g;
        return t[12] !== n || t[13] !== i || t[14] !== h ? (g = (0, c.jsx)(a, {
            to: h,
            ...i,
            children: n
        }), t[12] = n, t[13] = i, t[14] = h, t[15] = g) : g = t[15], g
    }, d = () => {
        "use forget";
        let e = (0, s.c)(8),
            [t] = r(),
            n = i(),
            a;
        e[0] === t ? a = e[1] : (a = t.get(`native_mobile_view`), e[0] = t, e[1] = a);
        let o = a === `true`,
            c;
        e[2] === t ? c = e[3] : (c = t.get(`show_chat_button`), e[2] = t, e[3] = c);
        let u = c === `true`,
            d;
        return e[4] !== o || e[5] !== n || e[6] !== u ? (d = e => {
            n(l(e, {
                isNativeMobileView: o,
                showChatButton: u
            }))
        }, e[4] = o, e[5] = n, e[6] = u, e[7] = d) : d = e[7], d
    }
}));
export {
    f as n, d as r, u as t
};
//# sourceMappingURL=4b84ae07-m7t0qzhuqad7jbhh.js.map