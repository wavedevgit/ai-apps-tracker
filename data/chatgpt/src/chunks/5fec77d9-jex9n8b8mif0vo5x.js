import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C1 as n,
    Nrt as r,
    Prt as i,
    u1 as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as o,
    Bn as s,
    Ht as c,
    O as l,
    Pt as u,
    Rn as d,
    Rt as f,
    Ut as p,
    Vn as m,
    jt as h,
    s as g,
    ut as _,
    wn as v,
    xt as y,
    zn as b
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    USn as x,
    WSn as S,
    cNt as C,
    dwn as w,
    eIt as T,
    fwn as E,
    oIt as D,
    oNt as O,
    ywn as k
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as A,
    t as j
} from "./e18c46cf-fjyf5ehpuodlki4v.js";
import {
    n as M,
    r as N
} from "./db2560a5-hvp8sdtr5ycd1znw.js";
import {
    i as P,
    t as F
} from "./7b12be43-kepqnlg4u21x4d0g.js";

function I(e) {
    "use forget";
    let t = (0, L.c)(21),
        {
            routeSuffix: r
        } = e,
        a = r === void 0 ? `` : r,
        o = h(),
        s = b(),
        d = u(),
        {
            id: p,
            name: m
        } = f(),
        [g] = c(),
        _;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = i(), t[0] = _) : _ = t[0];
    let v = _,
        y = n(),
        S = !v || y != null,
        T = M({
            defaultPlatform: `chat`,
            locale: s.locale,
            searchParams: g
        }),
        O = C(),
        k = O || S,
        A = l({
            ...E(p, O ? T : {
                ...T,
                workspace: y?.isWorkspaceAccount() ?? !1
            }, O ? `directoryDetails` : `appsContent`),
            enabled: !!p && k
        }),
        N = A.data,
        F = N?.id === p,
        I = w(p, T),
        B = v && !!p && F,
        V;
    t[1] !== I || t[2] !== B ? (V = {
        ...I,
        enabled: B
    }, t[1] = I, t[2] = B, t[3] = V) : V = t[3];
    let H = l(V),
        U, W;
    if (t[4] !== N || t[5] !== p || t[6] !== o.hash || t[7] !== o.state || t[8] !== m || t[9] !== d || t[10] !== a || t[11] !== g ? (U = () => {
            if (!N || !m) return;
            let e = x(N.name),
                t = g.has(`workspace`);
            if (e === m && N.id === p && !t) return;
            let n = new URLSearchParams(g);
            n.delete(`category`), n.delete(`q`), n.delete(`workspace`);
            let r = n.toString();
            d(`/apps/${e}/${N.id}${a}${r?`?${r}`:``}${o.hash}`, {
                replace: !0,
                state: o.state
            })
        }, W = [N, p, o.hash, o.state, m, d, a, g], t[4] = N, t[5] = p, t[6] = o.hash, t[7] = o.state, t[8] = m, t[9] = d, t[10] = a, t[11] = g, t[12] = U, t[13] = W) : (U = t[12], W = t[13]), (0, R.useEffect)(U, W), D(!!N && F, p), !p || !m) {
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
        L = v(), k(), N(), F(), S(), T(), A(), a(), r(), O(), g(), R = t(m()), d(), o(), z = s()
    })),
    V, H, U, W, G, K = e((() => {
        o(), V = v(), B(), H = s(), U = e => /\/connect\/?$/.test(e) ? `/connect` : ``, W = ({
            params: e,
            serverLoader: t
        }) => {
            let {
                id: n,
                name: r
            } = e;
            if (!n || !r) throw y(`/apps`);
            return t()
        }, G = p(function(e) {
            "use forget";
            let t = (0, V.c)(10),
                n;
            t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
            let {
                pathSuffix: r
            } = n, i = h(), a;
            t[2] !== i || t[3] !== r ? (a = r ?? U(i.pathname), t[2] = i, t[3] = r, t[4] = a) : a = t[4];
            let o = a,
                s;
            t[5] === o ? s = t[6] : (s = (0, H.jsx)(I, {
                routeSuffix: o
            }), t[5] = o, t[6] = s);
            let c;
            t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, H.jsx)(_, {}), t[7] = c) : c = t[7];
            let l;
            return t[8] === s ? l = t[9] : (l = (0, H.jsxs)(H.Fragment, {
                children: [s, c]
            }), t[8] = s, t[9] = l), l
        })
    }));
export {
    W as n, K as r, G as t
};
//# sourceMappingURL=5fec77d9-jex9n8b8mif0vo5x.js.map