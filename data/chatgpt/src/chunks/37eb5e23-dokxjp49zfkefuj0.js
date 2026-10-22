import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    A5 as n,
    A8 as r,
    F8 as i,
    Iv as a,
    L8 as o,
    N1 as s,
    P8 as c,
    Q8 as l,
    Q_ as u,
    R8 as d,
    U1 as ee,
    Xnt as f,
    Y7 as p,
    Ynt as m,
    Z8 as te,
    Znt as ne,
    grt as h,
    q1 as re,
    tct as g,
    urt as _,
    xct as ie,
    z8 as v
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    s as y,
    w as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AUt as x,
    BFn as S,
    DLn as C,
    ELn as ae,
    GFn as w,
    IUt as T,
    LLn as E,
    NUt as D,
    PUt as O,
    RFn as oe,
    UFn as se,
    VFn as ce,
    WFn as le,
    _In as ue,
    gIn as de,
    kLn as fe,
    lFn as pe,
    nGt as me,
    oFn as k,
    rGt as he,
    tGt as A,
    zLn as j
} from "./conversation-small-fh0oqifngkf5rvl1.js";

function M(e) {
    let t = (s() ?? ee())?.normalizedAccountUserId;
    return t == null ? void 0 : P({
        normalizedAccountUserId: t,
        provider: e?.provider,
        linkId: e?.linkId
    })
}
var N, P, F = e((() => {
    r(), re(), t(), y(), N = [`mounted-library-capabilities`], P = v(({
        normalizedAccountUserId: e,
        provider: t,
        linkId: n
    }) => o(() => b({
        queryKey: [...N, e, ...t == null ? [] : [t, n]],
        queryFn: () => t == null ? p.safeGet(`/files/library/mounted/capabilities`) : p.safeGet(`/files/library/mounted/capabilities`, {
            parameters: {
                query: {
                    provider: t,
                    link_id: n
                }
            }
        }),
        refetchOnWindowFocus: !1,
        refetchOnReconnect: `always`
    })))
}));

function I() {
    return _(L)
}
var L, ge = e((() => {
    h(), L = `183402703`
}));

function R(e) {
    return H.find(({
        provider: t
    }) => e === t || e.startsWith(`${t}:`))?.provider
}

function z(e) {
    return Array.isArray(e) ? e.filter(e => typeof e == `string` && R(e) != null) : []
}

function _e(e) {
    return [e.name === e.connector_name ? void 0 : e.name, e.owner_profile?.nickname, e.owner_profile?.email, e.owner_profile?.name].map(e => e?.trim()).find(e => e)
}

function B(e) {
    let t = new Set(H.map(({
        provider: e
    }) => e).filter(t => e.has(t)));
    return w() && (t.add(`sharepoint`), t.add(`onedrive`)), t
}

function V(e, t = `search`) {
    let n = I(),
        r = t === `browse`,
        i = r ? new Set([...X()].filter(e => !j(e))) : B(X()),
        a = r ? [...new Set([...Q(), ...J().filter(({
            provider: e
        }) => j(e)).map(({
            provider: e
        }) => e)])] : Q(),
        o = e || n ? a : void 0,
        s = !n && o?.length === 0 && J().length === 0 ? i.size > 0 ? H.filter(({
            provider: e
        }) => !i.has(e)).map(({
            provider: e
        }) => e) : void 0 : o,
        c = H.filter(({
            provider: e
        }) => (e === `box` || e === `dropbox` || e === `sharepoint`) && T(e) && !a.includes(e)).map(({
            provider: e
        }) => e);
    return {
        hiddenProviders: i,
        hiddenSources: r ? new Set([...q()].filter(e => !j(R(e)))) : q(),
        visibleProviders: c.length > 0 ? (s ?? H.map(({
            provider: e
        }) => e)).filter(e => !c.includes(e)) : s
    }
}

function ve(e) {
    return {
        ...V(e),
        browseVisibility: V(e, `browse`),
        suggestedRequestSelection: e ? $() : void 0
    }
}

function ye(e, t) {
    t ? U.set(e) : U() === e && U.set(null)
}

function be(e, t) {
    let r = new Set(K());
    if (t) {
        r.delete(e);
        let t = R(e),
            n = e.includes(`:`) && t != null && r.has(t) ? J().find(t => t.id === e) : void 0;
        if (n != null && r.delete(n.provider))
            for (let t of J()) t.provider === n.provider && t.id !== e && r.add(t.id)
    } else r.add(e);
    n(() => G.set([...r]))
}

function xe(e) {
    n(() => W.set(e))
}
var H, U, W, G, K, q, J, Y, X, Z, Q, $, Se = e((() => {
    D(), ie(), pe(), a(), F(), fe(), me(), ae(), oe(), le(), ge(), de(), O(), ce(), r(), ne(), te(), h(), H = [{
        provider: `google_drive`,
        connectorId: u[g.GDRIVE_ACTION_CONNECTOR],
        isEnabled: ue
    }, {
        provider: `box`,
        connectorId: u[g.BOX_CONNECTOR],
        isEnabled: C
    }, {
        provider: `dropbox`,
        connectorId: u[g.DROPBOX_CONNECTOR],
        isEnabled: () => _(`2060455659`)
    }, {
        provider: `sharepoint`,
        connectorId: u[g.SHAREPOINT_CONNECTOR],
        isEnabled: se
    }, {
        provider: `onedrive`,
        connectorId: u[g.SHAREPOINT_CONNECTOR],
        isEnabled: S
    }, {
        provider: `imanage`,
        connectorId: A,
        isEnabled: he
    }], U = d(null), W = c(f.LibraryShowHiddenFiles, () => !1, {
        coerceStoredValue: e => e === !0
    }), G = c(f.LibraryHiddenProvidersV2, () => [...z(typeof window > `u` ? null : m.getItem(f.LibraryHiddenProviders)), `sharepoint`, `onedrive`], {
        coerceStoredValue: e => Array.isArray(e) ? z(e) : [`sharepoint`, `onedrive`]
    }), K = i(() => new Set(G()), {
        equals: l
    }), q = i(() => new Set([...K()].filter(e => e.includes(`:`) && T(R(e)))), {
        equals: l
    }), J = i(() => {
        let e = I(),
            t = new Set(H.filter(({
                provider: e
            }) => T(e)).map(({
                provider: e
            }) => e)),
            n = e ? M() : void 0,
            r = n?.error == null ? n?.data?.providers : void 0,
            i = !e || t.size > 0 ? k().data : void 0;
        return H.flatMap(({
            provider: n,
            connectorId: a,
            isEnabled: o
        }) => {
            if (!o()) return [];
            let s = i?.get(a)?.filter(e => e.auth_status === `ACTIVE`) ?? [],
                c = t.has(n) && (n === `box` || n === `dropbox` || n === `sharepoint`);
            c && (s = x(s).filter(e => e.unavailable_reason == null));
            let l = c ? new Map(s.filter(e => E(e.owner_profile?.id)).toSorted((e, t) => {
                let n = E(e.owner_profile?.id) ?? ``,
                    r = E(t.owner_profile?.id) ?? ``;
                return n < r ? -1 : +(n > r)
            }).map((e, t) => [e.id, t + 1])) : void 0;
            e && c && (s = s.filter(e => {
                let t = M({
                    provider: n,
                    linkId: e.id
                });
                return t?.error == null && t?.data?.providers[n]?.capabilities.library_browsing.state === `available`
            }));
            let u = r?.[n === `onedrive` ? `sharepoint` : n]?.capabilities;
            if (!(e && !c ? u?.library_browsing.state === `available` : s.length > 0)) return [];
            if (!t.has(n)) return [{
                id: n,
                provider: n
            }];
            let d = new Map;
            for (let e of s.toSorted((e, t) => Date.parse(e.auth_status_updated_at ?? e.created_at) - Date.parse(t.auth_status_updated_at ?? t.created_at))) {
                let t = c ? E(e.owner_profile?.id) : e.owner_profile?.id;
                if (!t) continue;
                let r = `${n}:${t}`,
                    i = e.name?.trim() && e.name !== e.connector_name ? e.name : void 0,
                    a = c ? _e(e) : void 0;
                d.set(r, {
                    id: r,
                    provider: n,
                    accountKey: t,
                    ...c ? {
                        accountLabel: a,
                        ...a == null ? {
                            accountNumber: l?.get(e.id)
                        } : {}
                    } : {
                        accountLabel: i ?? e.owner_profile?.nickname ?? e.owner_profile?.email ?? e.owner_profile?.name ?? t ?? void 0
                    }
                })
            }
            return d.size > 0 ? [...d.values()] : [{
                id: n,
                provider: n
            }]
        })
    }, {
        equals: l
    }), Y = i(() => w() ? [...new Set(J().map(({
        provider: e
    }) => e))].filter(j) : [], {
        equals: l
    }), X = i(() => {
        let e = K();
        if (e.size === 0) return new Set;
        let t = J();
        return new Set(H.filter(({
            provider: n
        }) => e.has(n) || t.some(e => e.provider === n) && t.filter(e => e.provider === n).every(t => e.has(t.id))).map(({
            provider: e
        }) => e))
    }, {
        equals: l
    }), Z = i(() => {
        let e = K();
        return J().filter(t => !e.has(t.id) && !e.has(t.provider))
    }, {
        equals: l
    }), Q = i(() => [...new Set(Z().map(e => e.provider))], {
        equals: l
    }), $ = i(() => {
        let e = H.some(({
                provider: e
            }) => T(e)),
            t = B(K()),
            n = q(),
            r = e ? {} : void 0,
            i = !1;
        for (let {
                provider: e,
                connectorId: a
            }
            of H) {
            if (t.has(e) || ![...n].some(t => t.startsWith(`${e}:`))) continue;
            let o = k();
            if (o.data == null && o.error == null) return {
                isReady: !1,
                providers: `all`,
                externalAccountKeys: void 0
            };
            if (o.data == null) t.add(e), i = !0;
            else {
                let s = [...new Set((o.data.get(a) ?? []).filter(e => e.auth_status === `ACTIVE`).map(t => e === `box` || e === `dropbox` || e === `sharepoint` ? E(t.owner_profile?.id) : t.owner_profile?.id).filter(e => e != null && e.length > 0))],
                    c = s.filter(t => !n.has(`${e}:${t}`));
                c.length < s.length && (c.length > 0 ? r = {
                    ...r,
                    [e]: c
                } : (t.add(e), i = !0))
            }
        }
        return {
            isReady: !0,
            providers: t.size === 0 ? S() ? H.map(({
                provider: e
            }) => e) : `all` : H.filter(({
                provider: e,
                isEnabled: n
            }) => n() && !t.has(e)).map(({
                provider: e
            }) => e),
            externalAccountKeys: i && Object.keys(r ?? {}).length === 0 ? void 0 : r
        }
    })
}));
export {
    Se as a, ye as c, K as i, xe as l, Y as n, W as o, ve as r, U as s, J as t, be as u
};
//# sourceMappingURL=37eb5e23-dokxjp49zfkefuj0.js.map