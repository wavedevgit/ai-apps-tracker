import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bot as t,
    C5 as n,
    D1 as r,
    K1 as i,
    L1 as a,
    N1 as o,
    Pot as s,
    S4 as c,
    S5 as l,
    _5 as u,
    b4 as d,
    dit as f,
    h8 as p,
    j1 as m,
    k1 as h,
    n0 as g,
    r0 as _,
    uit as v,
    w5 as y,
    zot as b
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    let t = b();
    if (t.redirect != null) throw C(t.redirect.destination);
    f() || w(e);
    let a = T(e);
    await l(() => !u());
    let c = n(),
        p = r(await c.ensureQueryData(h())).find(e => e.id === a);
    if (p == null) throw S(`/`);
    if (!p.canAccessWithCurrentSession) {
        let t = s()?.user?.email;
        return await _({
            fallbackScreenHint: `login`,
            callbackUrl: e.url,
            additionalAuthParams: {
                current_workspace_id: p.id,
                ...t ? {
                    login_hint: t
                } : {},
                ...p.ssoConnectionName == null ? {} : {
                    connection: p.ssoConnectionName
                }
            }
        }), null
    }
    let g = o()?.id !== p.id || m()?.id !== p.id,
        v = new URL(e.url);
    if (g && v.searchParams.get(`refresh_account`) === `true`) throw S(`/`);
    let {
        updatedAccount: y
    } = await i(c, p.id);
    if (!y) throw S(`/`);
    if (g) throw await d(), v.searchParams.set(`refresh_account`, `true`), C(v.pathname + v.search);
    return p
}
var D = e((() => {
    p(), a(), g(), v(), y(), c(), t(), x()
}));
export {
    E as n, D as t
};
//# sourceMappingURL=d06c718e-hkt7y9b6o933cpci.js.map