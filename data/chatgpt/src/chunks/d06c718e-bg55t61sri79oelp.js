import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ot as t,
    Ait as n,
    I5 as r,
    L1 as i,
    L5 as a,
    M4 as o,
    P4 as s,
    R5 as c,
    U1 as l,
    V1 as u,
    ast as d,
    f0 as f,
    ist as p,
    j5 as m,
    k8 as h,
    kit as g,
    n0 as _,
    p0 as v,
    q1 as y,
    z1 as b
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    let s = p();
    if (s.redirect != null) throw C(s.redirect.destination);
    n() || w(e);
    let c = T(e);
    await r(() => !m());
    let d = a(),
        f = i(await d.ensureQueryData(b())).find(e => e.id === c);
    if (f == null) throw S(`/`);
    if (!f.canAccessWithCurrentSession) {
        let n = t()?.user?.email;
        return await v({
            fallbackScreenHint: `login`,
            callbackUrl: e.url,
            additionalAuthParams: {
                current_workspace_id: f.id,
                ...n ? {
                    login_hint: n
                } : {},
                ...f.ssoConnectionName == null ? {} : {
                    connection: f.ssoConnectionName
                }
            }
        }), null
    }
    let h = l()?.id !== f.id || u()?.id !== f.id,
        g = new URL(e.url);
    if (h && g.searchParams.get(`refresh_account`) === `true`) throw S(`/`);
    let {
        updatedAccount: y
    } = await _(d, f.id);
    if (!y) throw S(`/`);
    if (h) throw await o(), g.searchParams.set(`refresh_account`, `true`), C(g.pathname + g.search);
    return f
}
var D = e((() => {
    h(), y(), f(), g(), c(), s(), d(), x()
}));
export {
    E as n, D as t
};
//# sourceMappingURL=d06c718e-bg55t61sri79oelp.js.map