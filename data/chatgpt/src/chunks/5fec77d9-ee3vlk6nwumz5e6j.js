import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dit as n,
    Oit as r,
    o0 as i,
    q1 as a
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    At as o,
    Bn as s,
    Ht as c,
    Lt as l,
    Nt as u,
    O as d,
    Q as f,
    Rn as p,
    Vn as m,
    Vt as h,
    bt as g,
    lt as _,
    s as v,
    wn as y,
    zn as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Ft as x,
    Iwn as S,
    Lwn as C,
    Wwn as w,
    aIt as T,
    bCn as E,
    lNt as D,
    sNt as O,
    xCn as k
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    n as A,
    t as j
} from "./e18c46cf-bt3m8w1aayyn7o6n.js";
import {
    n as M,
    r as N
} from "./db2560a5-i2du0t816h1ja3pd.js";
import {
    i as P,
    t as F
} from "./7b12be43-bsrymhei92u3i8aq.js";

function I(e) {
    "use forget";
    let t = (0, L.c)(21),
        {
            routeSuffix: n
        } = e,
        a = n === void 0 ? `` : n,
        s = o(),
        c = b(),
        f = u(),
        {
            id: p,
            name: m
        } = l(),
        [g] = h(),
        _;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = r(), t[0] = _) : _ = t[0];
    let v = _,
        y = i(),
        x = !v || y != null,
        w = M({
            defaultPlatform: `chat`,
            locale: c.locale,
            searchParams: g
        }),
        O = D(),
        k = O || x,
        A = d({
            ...C(p, O ? w : {
                ...w,
                workspace: y?.isWorkspaceAccount() ?? !1
            }, O ? `directoryDetails` : `appsContent`),
            enabled: !!p && k
        }),
        N = A.data,
        F = N?.id === p,
        I = S(p, w),
        B = v && !!p && F,
        V;
    t[1] !== I || t[2] !== B ? (V = {
        ...I,
        enabled: B
    }, t[1] = I, t[2] = B, t[3] = V) : V = t[3];
    let H = d(V),
        U, W;
    if (t[4] !== N || t[5] !== p || t[6] !== s.hash || t[7] !== s.state || t[8] !== m || t[9] !== f || t[10] !== a || t[11] !== g ? (U = () => {
            if (!N || !m) return;
            let e = E(N.name),
                t = g.has(`workspace`);
            if (e === m && N.id === p && !t) return;
            let n = new URLSearchParams(g);
            n.delete(`category`), n.delete(`q`), n.delete(`workspace`);
            let r = n.toString();
            f(`/apps/${e}/${N.id}${a}${r?`?${r}`:``}${s.hash}`, {
                replace: !0,
                state: s.state
            })
        }, W = [N, p, s.hash, s.state, m, f, a, g], t[4] = N, t[5] = p, t[6] = s.hash, t[7] = s.state, t[8] = m, t[9] = f, t[10] = a, t[11] = g, t[12] = U, t[13] = W) : (U = t[12], W = t[13]), (0, R.useEffect)(U, W), T(!!N && F, p), !p || !m) {
        let e;
        return t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, z.jsx)(j, {}), t[14] = e) : e = t[14], e
    }
    if (!N && k && !A.isLoading) {
        let e;
        return t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, z.jsx)(j, {}), t[15] = e) : e = t[15], e
    }
    let G = v && H.isLoading,
        K = v && H.isError,
        q;
    return t[16] !== N || t[17] !== H.data || t[18] !== G || t[19] !== K ? (q = (0, z.jsx)(P, {
        app: N,
        availability: H.data,
        availabilityLoading: G,
        availabilityError: K
    }), t[16] = N, t[17] = H.data, t[18] = G, t[19] = K, t[20] = q) : q = t[20], q
}
var L, R, z, B = e((() => {
        L = y(), w(), N(), F(), k(), x(), A(), a(), n(), O(), v(), R = t(m()), p(), f(), z = s()
    })),
    V, H, U, W, G, K = e((() => {
        f(), V = y(), B(), H = s(), U = e => /\/connect\/?$/.test(e) ? `/connect` : ``, W = ({
            params: e,
            serverLoader: t
        }) => {
            let {
                id: n,
                name: r
            } = e;
            if (!n || !r) throw g(`/apps`);
            return t()
        }, G = c(function(e) {
            "use forget";
            let t = (0, V.c)(10),
                n;
            t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
            let {
                pathSuffix: r
            } = n, i = o(), a;
            t[2] !== i || t[3] !== r ? (a = r ?? U(i.pathname), t[2] = i, t[3] = r, t[4] = a) : a = t[4];
            let s = a,
                c;
            t[5] === s ? c = t[6] : (c = (0, H.jsx)(I, {
                routeSuffix: s
            }), t[5] = s, t[6] = c);
            let l;
            t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, H.jsx)(_, {}), t[7] = l) : l = t[7];
            let u;
            return t[8] === c ? u = t[9] : (u = (0, H.jsxs)(H.Fragment, {
                children: [c, l]
            }), t[8] = c, t[9] = u), u
        })
    }));
export {
    W as n, K as r, G as t
};
//# sourceMappingURL=5fec77d9-ee3vlk6nwumz5e6j.js.map