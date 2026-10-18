import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    Cit as n,
    J8 as r,
    Sit as i,
    Tit as a,
    Y2 as o,
    Y8 as s,
    e1 as c,
    k1 as l,
    n1 as u,
    q2 as d,
    u1 as f,
    y1 as p
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as m,
    St as h,
    xt as g
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    c as _,
    s as v
} from "./conversation-small-fym1zmu9zimymmm1.js";

function y() {
    "use forget";
    return null
}
e((() => {}));

function b(e) {
    let t = e.searchParams.get(`next`) ?? `/`;
    if (t.length > 2048 || !t.startsWith(`/`) || t.startsWith(`//`) || Array.from(t).some(e => e <= ` ` || e === `` || e === `\\`)) return `/`;
    let n = new URL(t, e.origin);
    return n.origin !== e.origin || !x.test(n.pathname) || [...n.searchParams.keys()].some(e => !S.has(e)) || n.hash !== `` && !/^#settings(?:\/[A-Za-z0-9_-]+)*$/.test(n.hash) ? `/` : n.pathname + n.search + n.hash
}
var x, S, C, w = e((() => {
    f(), l(), n(), s(), o(), v(), m(), x = /^\/(?:c\/[A-Za-z0-9_-]+|g\/[A-Za-z0-9_-]+(?:\/c\/[A-Za-z0-9_-]+|\/project)?|(?:apps|connectors|settings|project|space)(?:\/[A-Za-z0-9_-]+)*)?\/?$/, S = new Set([`model`, `temporary-chat`, `tab`]), C = async ({
        request: e,
        serverLoader: n
    }) => {
        _(), await n();
        let o = new URL(e.url),
            s = o.searchParams.get(`workspace_id`);
        if (s == null || !/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/.test(s)) throw g(`/`);
        let l = r(),
            f = c(await l.ensureQueryData(u())).find(e => e.id === s && !e.isPersonalAccount());
        if (f == null) throw g(`/`);
        if (!f.canAccessWithCurrentSession) return await t({
            fallbackScreenHint: `login`,
            callbackUrl: e.url,
            ...f.ssoConnectionName == null ? {} : {
                additionalAuthParams: {
                    connection: f.ssoConnectionName
                }
            }
        }), null;
        if (i.getCookie(a.Workspace) === f.id) throw g(b(o));
        let {
            updatedAccount: m
        } = await p(l, f.id);
        throw m ? (await d(), h(b(o))) : g(`/`)
    }, C.hydrate = !0
}));
e((() => {
    w()
}))();
export {
    C as clientLoader, y as
    default
};
//# sourceMappingURL=workspace-request-hdeeoiqf.js.map