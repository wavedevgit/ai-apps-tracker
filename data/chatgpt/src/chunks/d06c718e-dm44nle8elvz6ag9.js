import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    B6 as n,
    H8 as r,
    J8 as i,
    Nrt as a,
    Prt as o,
    Y2 as s,
    Y8 as c,
    cot as l,
    e1 as u,
    i1 as d,
    k1 as f,
    lot as p,
    n1 as m,
    o1 as h,
    q2 as g,
    q8 as _,
    rot as v,
    u1 as y,
    y1 as b
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as x,
    St as S,
    xt as C
} from "./2340486e-oc6d2eodbcrmxur3.js";

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
    let n = l();
    if (n.redirect != null) throw S(n.redirect.destination);
    o() || w(e);
    let a = T(e);
    await _(() => !r());
    let s = i(),
        c = u(await s.ensureQueryData(m())).find(e => e.id === a);
    if (c == null) throw C(`/`);
    if (!c.canAccessWithCurrentSession) {
        let n = v()?.user?.email;
        return await t({
            fallbackScreenHint: `login`,
            callbackUrl: e.url,
            additionalAuthParams: {
                current_workspace_id: c.id,
                ...n ? {
                    login_hint: n
                } : {},
                ...c.ssoConnectionName == null ? {} : {
                    connection: c.ssoConnectionName
                }
            }
        }), null
    }
    let f = h()?.id !== c.id || d()?.id !== c.id,
        p = new URL(e.url);
    if (f && p.searchParams.get(`refresh_account`) === `true`) throw C(`/`);
    let {
        updatedAccount: y
    } = await b(s, c.id);
    if (!y) throw C(`/`);
    if (f) throw await g(), p.searchParams.set(`refresh_account`, `true`), S(p.pathname + p.search);
    return c
}
var D = e((() => {
    n(), y(), f(), a(), c(), s(), p(), x()
}));
export {
    E as n, D as t
};
//# sourceMappingURL=d06c718e-dm44nle8elvz6ag9.js.map