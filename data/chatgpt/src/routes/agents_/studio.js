import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cit as t,
    Fot as n,
    J8 as r,
    Nrt as i,
    Sit as a,
    Srt as o,
    Tit as s,
    Y8 as c,
    cot as l,
    lot as u,
    pnt as d,
    tot as f,
    u1 as p,
    wst as m,
    y1 as h,
    ynt as g
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as _,
    At as v,
    Bn as y,
    Bt as b,
    Ut as x,
    Wt as S,
    s as C,
    wn as w,
    xt as T,
    y as E
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    BIt as D,
    UIt as O,
    lRt as k,
    uRt as A
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    a as j,
    i as M,
    n as N,
    o as P,
    r as F,
    s as I,
    t as L
} from "./60f6763a-dgtz4nyexdjwej6v.js";
import {
    r as R,
    t as z
} from "./df6b0717-opliqdjxsgowr2ag.js";

function B(e, t) {
    throw e.searchParams.delete(`account_id`), t && e.searchParams.set(n, `true`), T(e.pathname + e.search + e.hash)
}
async function V({
    params: e,
    request: t
}) {
    if (!e.gptId) return;
    let n = new URL(t.url),
        i = n.searchParams.get(`account_id`);
    if (!i) return;
    i === a.getCookie(s.Workspace) && B(n, !1);
    let {
        updatedAccount: o
    } = await h(r(), i);
    if (!o) throw T(`/`);
    B(n, !0)
}
async function H(e) {
    let {
        params: t,
        request: n
    } = e;
    if (l().authStatus !== f.LoggedIn) {
        let e = new URL(n.url);
        throw T(`/auth/login/?${new URLSearchParams([[`next`,`${e.pathname}${e.search}`]]).toString()}`)
    }
    await V(e), d(`3710572384`) || F();
    let i = r();
    return t.gptId && await Promise.all([i.prefetchQuery(D(t.gptId, {
        syncResponseToStore: !1
    })), i.prefetchQuery(k({
        gptId: t.gptId,
        depth: null
    }))]), i
}
async function U(e) {
    return await H(e), {
        dehydratedState: null
    }
}
var W, G, K, q, J, Y = e((() => {
    _(), W = w(), j(), L(), I(), m(), o(), p(), i(), t(), g(), u(), R(), A(), O(), c(), C(), G = y(), K = () => !1, q = S(function() {
        "use forget";
        let e = (0, W.c)(1),
            t = b();
        if (N(t)) {
            let t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, G.jsx)(P, {}), e[0] = t) : t = e[0], t
        }
        throw t
    }), J = x(function() {
        "use forget";
        let e = (0, W.c)(3),
            t = v(),
            n;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, G.jsx)(M, {
            children: (0, G.jsx)(z, {})
        }), e[0] = n) : n = e[0];
        let r;
        return e[1] === t.dehydratedState ? r = e[2] : (r = (0, G.jsx)(E, {
            state: t.dehydratedState,
            children: n
        }), e[1] = t.dehydratedState, e[2] = r), r
    })
}));
e((() => {
    Y()
}))();
export {
    q as ErrorBoundary, U as clientLoader, J as
    default, K as shouldRevalidate
};
//# sourceMappingURL=agents_.studio-bc3aol9s.js.map