import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    C4 as n,
    C5 as r,
    Got as i,
    M1 as a,
    O1 as o,
    P1 as s,
    R1 as c,
    T5 as l,
    Wot as u,
    g8 as d,
    git as f,
    hit as p,
    i0 as m,
    q1 as h,
    r0 as g,
    v5 as _,
    w5 as v,
    x4 as y,
    zot as b
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Q as x,
    bt as S,
    xt as C
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function w(e) {
    let t = new URL(e.url);
    throw S(`/auth/login?${new URLSearchParams({next:t.pathname+t.search})}`)
}

function T(e) {
    let t = new URL(e.url).searchParams.getAll(`account_id`),
        n = t[0]?.trim();
    if (t.length !== 1 || !n) throw S(`/`);
    return n
}
async function E(e) {
    let n = u();
    if (n.redirect != null) throw C(n.redirect.destination);
    f() || w(e);
    let i = T(e);
    await r(() => !_());
    let c = v(),
        l = o(await c.ensureQueryData(t())).find(e => e.id === i);
    if (l == null) throw S(`/`);
    if (!l.canAccessWithCurrentSession) {
        let t = b()?.user?.email;
        return await m({
            fallbackScreenHint: `login`,
            callbackUrl: e.url,
            additionalAuthParams: {
                current_workspace_id: l.id,
                ...t ? {
                    login_hint: t
                } : {},
                ...l.ssoConnectionName == null ? {} : {
                    connection: l.ssoConnectionName
                }
            }
        }), null
    }
    let d = s()?.id !== l.id || a()?.id !== l.id,
        p = new URL(e.url);
    if (d && p.searchParams.get(`refresh_account`) === `true`) throw S(`/`);
    let {
        updatedAccount: g
    } = await h(c, l.id);
    if (!g) throw S(`/`);
    if (d) throw await y(), p.searchParams.set(`refresh_account`, `true`), C(p.pathname + p.search);
    return l
}
var D = e((() => {
    d(), c(), g(), p(), l(), n(), i(), x()
}));
export {
    E as n, D as t
};
//# sourceMappingURL=d06c718e-d1wun8y1ccz32wbo.js.map