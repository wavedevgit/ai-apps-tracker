import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dit as t,
    I5 as n,
    L1 as r,
    L5 as i,
    M4 as a,
    Oit as o,
    P4 as s,
    R5 as c,
    U1 as l,
    V1 as u,
    Zot as d,
    f0 as f,
    j5 as p,
    k8 as m,
    n0 as h,
    nst as g,
    p0 as _,
    q1 as v,
    rst as y,
    z1 as b
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    let t = g();
    if (t.redirect != null) throw C(t.redirect.destination);
    o() || w(e);
    let s = T(e);
    await n(() => !p());
    let c = i(),
        f = r(await c.ensureQueryData(b())).find(e => e.id === s);
    if (f == null) throw S(`/`);
    if (!f.canAccessWithCurrentSession) {
        let t = d()?.user?.email;
        return await _({
            fallbackScreenHint: `login`,
            callbackUrl: e.url,
            additionalAuthParams: {
                current_workspace_id: f.id,
                ...t ? {
                    login_hint: t
                } : {},
                ...f.ssoConnectionName == null ? {} : {
                    connection: f.ssoConnectionName
                }
            }
        }), null
    }
    let m = l()?.id !== f.id || u()?.id !== f.id,
        v = new URL(e.url);
    if (m && v.searchParams.get(`refresh_account`) === `true`) throw S(`/`);
    let {
        updatedAccount: y
    } = await h(c, f.id);
    if (!y) throw S(`/`);
    if (m) throw await a(), v.searchParams.set(`refresh_account`, `true`), C(v.pathname + v.search);
    return f
}
var D = e((() => {
    m(), v(), f(), t(), c(), s(), y(), x()
}));
export {
    E as n, D as t
};
//# sourceMappingURL=d06c718e-pevjaafyq6y5bt3o.js.map