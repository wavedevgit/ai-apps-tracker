import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    Bot as n,
    C4 as r,
    C5 as i,
    Fot as a,
    M1 as o,
    O1 as s,
    P1 as c,
    R1 as l,
    T5 as u,
    Vot as d,
    dit as f,
    fit as p,
    g8 as m,
    i0 as h,
    q1 as g,
    r0 as _,
    v5 as v,
    w5 as y,
    x4 as b
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
    let r = n();
    if (r.redirect != null) throw C(r.redirect.destination);
    p() || w(e);
    let l = T(e);
    await i(() => !v());
    let u = y(),
        d = s(await u.ensureQueryData(t())).find(e => e.id === l);
    if (d == null) throw S(`/`);
    if (!d.canAccessWithCurrentSession) {
        let t = a()?.user?.email;
        return await h({
            fallbackScreenHint: `login`,
            callbackUrl: e.url,
            additionalAuthParams: {
                current_workspace_id: d.id,
                ...t ? {
                    login_hint: t
                } : {},
                ...d.ssoConnectionName == null ? {} : {
                    connection: d.ssoConnectionName
                }
            }
        }), null
    }
    let f = c()?.id !== d.id || o()?.id !== d.id,
        m = new URL(e.url);
    if (f && m.searchParams.get(`refresh_account`) === `true`) throw S(`/`);
    let {
        updatedAccount: _
    } = await g(u, d.id);
    if (!_) throw S(`/`);
    if (f) throw await b(), m.searchParams.set(`refresh_account`, `true`), C(m.pathname + m.search);
    return d
}
var D = e((() => {
    m(), l(), _(), f(), u(), r(), d(), x()
}));
export {
    E as n, D as t
};
//# sourceMappingURL=d06c718e-ivyph76r66fp1wp5.js.map