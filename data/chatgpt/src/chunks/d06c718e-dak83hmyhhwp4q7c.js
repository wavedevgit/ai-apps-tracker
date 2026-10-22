import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Ait as n,
    L1 as r,
    L5 as i,
    M4 as a,
    M5 as o,
    P4 as s,
    R5 as c,
    U1 as l,
    V1 as u,
    ast as d,
    est as f,
    f0 as p,
    jit as m,
    n0 as h,
    ost as g,
    p0 as _,
    q1 as v,
    z1 as y,
    z5 as b
} from "./4813494d-r54yv6lv29x4ew99.js";
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
    let t = d();
    if (t.redirect != null) throw C(t.redirect.destination);
    m() || w(e);
    let n = T(e);
    await i(() => !o());
    let s = c(),
        p = r(await s.ensureQueryData(y())).find(e => e.id === n);
    if (p == null) throw S(`/`);
    if (!p.canAccessWithCurrentSession) {
        let t = f()?.user?.email;
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
    let g = l()?.id !== p.id || u()?.id !== p.id,
        v = new URL(e.url);
    if (g && v.searchParams.get(`refresh_account`) === `true`) throw S(`/`);
    let {
        updatedAccount: b
    } = await h(s, p.id);
    if (!b) throw S(`/`);
    if (g) throw await a(), v.searchParams.set(`refresh_account`, `true`), C(v.pathname + v.search);
    return p
}
var D = e((() => {
    t(), v(), p(), n(), b(), s(), g(), x()
}));
export {
    E as n, D as t
};
//# sourceMappingURL=d06c718e-dak83hmyhhwp4q7c.js.map