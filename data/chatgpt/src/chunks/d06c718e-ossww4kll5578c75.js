import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    C5 as n,
    E1 as r,
    G1 as i,
    I1 as a,
    Lot as o,
    M1 as s,
    Mot as c,
    O1 as l,
    Rot as u,
    S5 as d,
    cit as f,
    g5 as p,
    lit as m,
    m8 as h,
    n0 as g,
    t0 as _,
    x4 as v,
    x5 as y,
    y4 as b
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as x,
    St as S,
    xt as C
} from "./2340486e-komxp8tzs51ny4jj.js";

function w(e) {
    let t = new URL(e.url);
    throw C(`/auth/login?${new URLSearchParams({next:t.pathname+t.search})}`)
}

function T(e) {
    let t = new URL(e.url).searchParams.getAll(`account_id`),
        n = t[0]?.trim();
    if (t.length !== 1 || !n) throw C(`/`);
    return n
}
async function E(e) {
    let n = o();
    if (n.redirect != null) throw S(n.redirect.destination);
    m() || w(e);
    let a = T(e);
    await y(() => !p());
    let u = d(),
        f = r(await u.ensureQueryData(l())).find(e => e.id === a);
    if (f == null) throw C(`/`);
    if (!f.canAccessWithCurrentSession) {
        let t = c()?.user?.email;
        return await g({
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
    let h = s()?.id !== f.id || t()?.id !== f.id,
        _ = new URL(e.url);
    if (h && _.searchParams.get(`refresh_account`) === `true`) throw C(`/`);
    let {
        updatedAccount: v
    } = await i(u, f.id);
    if (!v) throw C(`/`);
    if (h) throw await b(), _.searchParams.set(`refresh_account`, `true`), S(_.pathname + _.search);
    return f
}
var D = e((() => {
    h(), a(), _(), f(), n(), v(), u(), x()
}));
export {
    E as n, D as t
};
//# sourceMappingURL=d06c718e-ossww4kll5578c75.js.map