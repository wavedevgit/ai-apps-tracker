const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/21c2b846-o2dcn3as12zjaew2.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/ea7792a2-d9m2q4bht39qycrh.js", "assets/c3104c13-celq2mcekzljf1n9.js", "assets/0293dbc0-ejy0st8w9anyaion.js", "assets/b093033a-m6cbsx636usydyrs.js", "assets/7e5e046a-bkyd6zuo528w0v54.js", "assets/bcae0416-pblhiabe5myymn9k.js", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css", "assets/8f909c21-jqvb62ory59pv8q3.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JU as n,
    b5 as r,
    qU as i,
    y5 as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as o,
    Vn as s,
    cn as c,
    ln as l,
    wn as u
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as d,
    t as f
} from "./9e9d0eec-nkmykeb4giti97x1.js";
import {
    r as p,
    t as m
} from "./ea7792a2-d9m2q4bht39qycrh.js";
import {
    c as h,
    s as g
} from "./0f2a693e-ixuu1upjhavxhvub.js";
var _, v, y, b, x, S, C = e((() => {
    _ = u(), r(), v = t(s()), y = t(s()), d(), n(), h(), p(), b = o(), l(), x = (0, v.lazy)(() => c(() => import(`./21c2b846-o2dcn3as12zjaew2.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]))), S = e => {
        "use forget";
        let t = (0, _.c)(36),
            {
                children: n,
                fallback: r,
                className: o,
                label: s,
                resolution: c,
                postprocessing: l,
                prepareSelection: u,
                onReady: d
            } = e,
            p = c === void 0 ? `section` : c,
            h = l === void 0 || l,
            S = u !== void 0 && u,
            C = (0, y.useContext)(m),
            {
                renderer: w
            } = (0, y.useContext)(f),
            T = (0, y.useId)(),
            [E, D] = (0, y.useState)(null),
            [O, k] = (0, y.useState)(!1),
            A, j;
        t[0] === E ? (A = t[1], j = t[2]) : (A = () => {
            if (!E) return;
            let e = new IntersectionObserver(t => {
                let [n] = t;
                n.isIntersecting && (k(!0), e.disconnect())
            }, {
                rootMargin: `160px`
            });
            return e.observe(E), () => e.disconnect()
        }, j = [E], t[0] = E, t[1] = A, t[2] = j), (0, y.useEffect)(A, j);
        let [M, N] = (0, y.useState)(!1), P;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (P = {
            width: 0,
            height: 0
        }, t[3] = P) : P = t[3];
        let [F, I] = (0, y.useState)(P), [L, R] = (0, y.useState)(!1), z = !!C?.enabled && O && !!E && F.width > 0 && F.height > 0, [B, V] = (0, y.useState)(z);
        B !== z && (V(z), R(!1));
        let H;
        t[4] === d ? H = t[5] : (H = () => {
            R(!0), d?.()
        }, t[4] = d, t[5] = H);
        let U = H,
            W, G;
        t[6] === E ? (W = t[7], G = t[8]) : (W = () => {
            if (!E) return;
            let e = new ResizeObserver(e => {
                    let [t] = e, {
                        width: n,
                        height: r
                    } = t.contentRect;
                    I(e => e.width === n && e.height === r ? e : {
                        width: n,
                        height: r
                    })
                }),
                t = new IntersectionObserver(e => {
                    let [t] = e;
                    return N(t.isIntersecting && t.intersectionRect.width > 0 && t.intersectionRect.height > 0)
                }, {
                    threshold: [0, .001]
                });
            return e.observe(E), t.observe(E), () => {
                e.disconnect(), t.disconnect()
            }
        }, G = [E], t[6] = E, t[7] = W, t[8] = G), (0, y.useEffect)(W, G);
        let K;
        t[9] === o ? K = t[10] : (K = a(`relative`, g, o), t[9] = o, t[10] = K);
        let q = z && L ? `webgl` : `fallback`,
            J;
        t[11] !== O || t[12] !== n || t[13] !== E || t[14] !== U || t[15] !== h || t[16] !== S || t[17] !== w || t[18] !== L || t[19] !== C || t[20] !== p || t[21] !== F || t[22] !== M ? (J = C?.enabled && O && E && F.width > 0 && F.height > 0 && (0, b.jsx)(i, {
            name: `DotsCanvasLoader`,
            onError: C.onError,
            children: (0, b.jsx)(v.Suspense, {
                fallback: null,
                children: (0, b.jsx)(x, {
                    element: E,
                    visible: M,
                    width: F.width,
                    height: F.height,
                    profile: w,
                    resolution: p,
                    postprocessing: h,
                    prepareSelection: S,
                    concealed: S && !L,
                    onError: C.onError,
                    onReady: U,
                    children: n
                })
            })
        }), t[11] = O, t[12] = n, t[13] = E, t[14] = U, t[15] = h, t[16] = S, t[17] = w, t[18] = L, t[19] = C, t[20] = p, t[21] = F, t[22] = M, t[23] = J) : J = t[23];
        let Y = z && L,
            X;
        t[24] === Y ? X = t[25] : (X = a(`absolute inset-0`, {
            invisible: Y
        }), t[24] = Y, t[25] = X);
        let Z;
        t[26] !== r || t[27] !== X ? (Z = (0, b.jsx)(`div`, {
            "aria-hidden": `true`,
            className: X,
            children: r
        }), t[26] = r, t[27] = X, t[28] = Z) : Z = t[28];
        let Q;
        return t[29] !== T || t[30] !== s || t[31] !== K || t[32] !== q || t[33] !== J || t[34] !== Z ? (Q = (0, b.jsxs)(`div`, {
            ref: D,
            className: K,
            role: `img`,
            "aria-label": s,
            "data-dots-view": T,
            "data-renderer": q,
            children: [J, Z]
        }), t[29] = T, t[30] = s, t[31] = K, t[32] = q, t[33] = J, t[34] = Z, t[35] = Q) : Q = t[35], Q
    }
}));
export {
    C as n, S as t
};
//# sourceMappingURL=8b0ac3b9-mgwcitlhq9phj0vc.js.map