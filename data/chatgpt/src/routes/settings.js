import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    B6 as n,
    Cit as r,
    H8 as i,
    J8 as a,
    Nrt as o,
    Prt as s,
    Sit as c,
    Tit as l,
    X$ as u,
    Y2 as d,
    Y8 as f,
    Z2 as p,
    cot as m,
    e1 as h,
    iy as g,
    k1 as _,
    lot as v,
    n1 as y,
    o1 as b,
    q2 as x,
    q8 as S,
    qv as C,
    rot as w,
    u1 as T,
    y1 as E
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as D,
    St as O,
    Ut as k,
    xt as A
} from "./2340486e-oc6d2eodbcrmxur3.js";

function j(e) {
    let [, ...t] = e.pathname.replace(/^\/+|\/+$/g, ``).split(`/`).map(e => e.toLowerCase());
    if (t.length === 0) return C.General;
    let n = t.join(`/`);
    return P.get(n) ?? F.get(n) ?? C.General
}

function M(e) {
    let t = j(e),
        n = t === C.General ? `#settings` : `#settings/${t}`;
    return `/${e.search}${n}`
}

function N(e) {
    if (e.pathname !== `/settings/Connectors` || e.searchParams.get(`source`) !== `codex-code-attribution`) return null;
    let t = e.searchParams.getAll(`account_id`),
        n = e.searchParams.getAll(`connector`),
        r = t[0],
        i = n[0],
        a = /^[a-zA-Z0-9_-]{1,255}$/;
    if (e.searchParams.getAll(`source`).length !== 1 || t.length !== 1 || !r || !a.test(r) || n.length > 1 || i !== void 0 && !a.test(i)) throw new Response(`Invalid connector settings target`, {
        status: 400
    });
    let o = new URLSearchParams({
        "product-sku": `CODEX`
    });
    return i && o.set(`connector`, i), {
        workspaceId: r,
        redirectTo: `/#settings/Connectors?${o}`
    }
}
var P, F, I = e((() => {
    g(), P = new Map([
        [`data-controls`, C.DataControls],
        [`parental-controls`, C.ParentalControls]
    ]), F = new Map(Object.values(C).map(e => [e.toLowerCase(), e]))
}));

function L(e, t) {
    let n = new URL(`/settings/Connectors`, e);
    n.searchParams.set(`source`, `codex-code-attribution`), n.searchParams.set(`account_id`, t);
    let r = e.searchParams.get(`connector`);
    return r && n.searchParams.set(`connector`, r), n
}

function R(e, t) {
    let n = new URL(e, t);
    return n.origin === t.origin && n.pathname.replace(/\/$/, ``) === `/auth/login` ? (n.searchParams.set(`next`, t.pathname + t.search), n.pathname + n.search + n.hash) : e
}
var z, B, V = e((() => {
    D(), n(), T(), _(), o(), r(), f(), d(), v(), I(), z = async ({
        request: e
    }) => {
        let n = new URL(e.url),
            r = N(n);
        if (!r) throw A(M(n));
        let o = L(n, r.workspaceId),
            d = m().redirect?.destination ?? (s() ? void 0 : `/auth/login`);
        if (d) throw O(R(d, o));
        let f = w()?.user?.id,
            g = !1,
            _ = p(() => {
                g = !0
            }),
            v = () => {
                if (g || !f || w()?.user?.id !== f) throw new DOMException(`Settings handoff session changed`, `AbortError`)
            },
            C = () => {
                e.signal.throwIfAborted(), v()
            };
        try {
            C(), await S(() => !i()), C();
            let s = a(),
                d = await s.fetchQuery({
                    ...y(),
                    staleTime: 0
                });
            C();
            let f = h(d).find(e => e.id === r.workspaceId);
            if (d.accounts[r.workspaceId]?.account.account_id !== r.workspaceId || !f || f.isDeactivated()) throw A(`/`);
            if (!f.canAccessWithCurrentSession) return await t({
                fallbackScreenHint: `login`,
                callbackUrl: o.toString(),
                ...f.ssoConnectionName == null ? {} : {
                    additionalAuthParams: {
                        connection: f.ssoConnectionName
                    }
                }
            }), null;
            let p = b()?.id !== f.id || u()?.id !== f.id;
            if (p && n.searchParams.get(`refresh_account`) === `true`) throw A(`/`);
            let {
                updatedAccount: m
            } = await E(s, f.id);
            if (v(), !m) throw C(), A(`/`);
            if (p) {
                let t = c.getCookie(l.ClientSessionEpoch);
                if (_(), await x(), v(), c.getCookie(l.ClientSessionEpoch) !== t) throw new DOMException(`Settings handoff session changed`, `AbortError`);
                return o.searchParams.set(`refresh_account`, `true`), window.location.assign(e.signal.aborted ? `/?refresh_account=true` : o.pathname + o.search), null
            }
            throw C(), O(r.redirectTo)
        } finally {
            _()
        }
    }, z.hydrate = !0, B = k(function() {
        "use forget";
        return null
    })
}));
e((() => {
    V()
}))();
export {
    z as clientLoader, B as
    default
};
//# sourceMappingURL=settings-fyu0l8wy.js.map