import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    L1 as n,
    Lit as r,
    M4 as i,
    P4 as a,
    Rit as o,
    S5 as s,
    U1 as c,
    V1 as l,
    b5 as u,
    f0 as d,
    fst as f,
    h5 as p,
    n0 as m,
    p0 as h,
    pst as g,
    q1 as _,
    sst as v,
    x5 as y,
    z1 as b
} from "./4813494d-mdvd4786a87166cc.js";
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
    let t = f();
    if (t.redirect != null) throw C(t.redirect.destination);
    o() || w(e);
    let r = T(e);
    await u(() => !p());
    let a = y(),
        s = n(await a.ensureQueryData(b())).find(e => e.id === r);
    if (s == null) throw S(`/`);
    if (!s.canAccessWithCurrentSession) {
        let t = v()?.user?.email;
        return await h({
            fallbackScreenHint: `login`,
            callbackUrl: e.url,
            additionalAuthParams: {
                current_workspace_id: s.id,
                ...t ? {
                    login_hint: t
                } : {},
                ...s.ssoConnectionName == null ? {} : {
                    connection: s.ssoConnectionName
                }
            }
        }), null
    }
    let d = c()?.id !== s.id || l()?.id !== s.id,
        g = new URL(e.url);
    if (d && g.searchParams.get(`refresh_account`) === `true`) throw S(`/`);
    let {
        updatedAccount: _
    } = await m(a, s.id);
    if (!_) throw S(`/`);
    if (d) throw await i(), g.searchParams.set(`refresh_account`, `true`), C(g.pathname + g.search);
    return s
}
var D = e((() => {
    t(), _(), d(), r(), s(), a(), g(), x()
}));
export {
    E as n, D as t
};
//# sourceMappingURL=d06c718e-dpo7s38bqefpsxq7.js.map