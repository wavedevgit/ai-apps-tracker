import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C1 as n,
    J8 as r,
    Y8 as i,
    a7 as a,
    fz as o,
    i1 as s,
    l7 as c,
    u1 as l,
    uz as u
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as d,
    At as f,
    Bn as p,
    Pt as m,
    St as h,
    Ut as g,
    Vn as _,
    wn as v,
    xt as y
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    H8t as b,
    Scn as x,
    bcn as S,
    i8t as C,
    q8t as w,
    t8t as T,
    xcn as E,
    ycn as D
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Dh as O,
    Th as k
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    r as A,
    t as j
} from "./285386de-m7kwltk05jukm71w.js";
import {
    n as M,
    t as N
} from "./d06c718e-dm44nle8elvz6ag9.js";
import {
    n as P,
    t as F
} from "./9cc78d41-l6outi3xyrhzw2nn.js";
async function I({
    request: e
}) {
    let t = await M(e);
    if (t == null) return null;
    let n = new URL(e.url).searchParams,
        i = n.get(`source`) === V && n.get(`audience`) === `workspace`;
    if (i && n.get(`return_to`) === H) throw h(b(`/billing`, t.id));
    let o = new URLSearchParams({
            account_id: t.id,
            audience: `workspace`,
            source: V,
            return_to: H
        }),
        c = i ? `/pricing/credits?` + o : B;
    if (!t.isSelfServeBusiness() || !t.isOwnerOfAccount()) throw y(c);
    let l = a.safeGet(`/pageConfigs/billing`, {});
    D.prefetch(), r().prefetchQuery(F({
        accountId: t.id
    }));
    let u = T((await l).credits);
    if (s()?.id !== t.id || u?.kind !== `business` || !u.can_purchase_credits) throw y(c);
    return A(), {
        accountId: t.id,
        billingReturnPath: c
    }
}
var L, R, z, B, V, H, U, W, G, K = e((() => {
    d(), L = v(), w(), C(), S(), O(), P(), E(), j(), l(), i(), c(), R = t(_()), N(), z = p(), o(), B = `/admin/billing`, V = `admin_portal`, H = `workspace_billing`, I.hydrate = !0, U = e => {
        "use forget";
        let t = (0, L.c)(6),
            n, r;
        t[0] === e ? (n = t[1], r = t[2]) : ({
            billingReturnPath: n,
            ...r
        } = e, t[0] = e, t[1] = n, t[2] = r);
        let i;
        return t[3] !== n || t[4] !== r ? (i = (0, z.jsx)(D, {
            ...r,
            checkoutUiMode: `custom`,
            checkoutReturnPath: n
        }), t[3] = n, t[4] = r, t[5] = i) : i = t[5], i
    }, W = () => {
        "use forget";
        let e = (0, L.c)(10),
            t = f(),
            r = n(),
            i = m(),
            a = (0, R.useRef)(!1),
            o = t?.accountId,
            s = t?.billingReturnPath,
            c;
        e[0] !== o || e[1] !== r ? (c = o != null && r?.id === o && r.isSelfServeBusiness() && r.isOwnerOfAccount(), e[0] = o, e[1] = r, e[2] = c) : c = e[2];
        let l = c,
            u, d;
        e[3] !== o || e[4] !== s || e[5] !== l || e[6] !== i ? (u = () => {
            !l || !s || a.current || (a.current = !0, x(e => (0, z.jsx)(U, {
                ...e,
                billingReturnPath: s
            }), {
                expectedAccountId: o,
                successReturnPath: s,
                onClose: () => i(s, {
                    replace: !0
                })
            }))
        }, d = [o, s, l, i], e[3] = o, e[4] = s, e[5] = l, e[6] = i, e[7] = u, e[8] = d) : (u = e[7], d = e[8]), (0, R.useEffect)(u, d);
        let p;
        return e[9] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, z.jsx)(k, {
            context: `credits`
        }), e[9] = p) : p = e[9], p
    }, G = g(W)
}));
e((() => {
    K()
}))();
export {
    u as HydrateFallback, I as clientLoader, G as
    default
};
//# sourceMappingURL=pricing.credits-f3jnfvqk.js.map