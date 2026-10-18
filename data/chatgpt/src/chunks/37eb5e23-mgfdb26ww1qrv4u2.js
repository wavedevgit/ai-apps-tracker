import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as t,
    B6 as n,
    B8 as r,
    G6 as i,
    J6 as a,
    M_ as o,
    Qtt as s,
    W6 as c,
    X$ as l,
    Y6 as u,
    a7 as d,
    c8 as f,
    ent as p,
    gv as m,
    ist as h,
    l7 as ee,
    o1 as te,
    pnt as g,
    q6 as ne,
    s8 as re,
    u1 as ie,
    wst as _,
    ynt as v
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    s as ae,
    w as oe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    AUt as se,
    BPn as y,
    DIn as b,
    DUt as x,
    EIn as ce,
    GPn as S,
    LIn as C,
    NUt as w,
    RPn as T,
    UPn as E,
    VPn as D,
    WPn as le,
    _Fn as ue,
    aPn as O,
    cPn as de,
    gFn as fe,
    jUt as pe,
    kIn as k,
    zIn as A
} from "./conversation-small-fym1zmu9zimymmm1.js";

function j(e) {
    let t = (l() ?? te())?.normalizedAccountUserId;
    return t == null ? void 0 : N({
        normalizedAccountUserId: t,
        provider: e?.provider,
        linkId: e?.linkId
    })
}
var M, N, P = e((() => {
    n(), ie(), ee(), ae(), M = [`mounted-library-capabilities`], N = u(({
        normalizedAccountUserId: e,
        provider: t,
        linkId: n
    }) => ne(() => oe({
        queryKey: [...M, e, ...t == null ? [] : [t, n]],
        queryFn: () => t == null ? d.safeGet(`/files/library/mounted/capabilities`) : d.safeGet(`/files/library/mounted/capabilities`, {
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

function F() {
    return g(I)
}
var I, L = e((() => {
    v(), I = `183402703`
}));

function R(e) {
    return H.find(({
        provider: t
    }) => e === t || e.startsWith(`${t}:`))?.provider
}

function z(e) {
    return Array.isArray(e) ? e.filter(e => typeof e == `string` && R(e) != null) : []
}

function me(e) {
    return [e.name === e.connector_name ? void 0 : e.name, e.owner_profile?.nickname, e.owner_profile?.email, e.owner_profile?.name].map(e => e?.trim()).find(e => e)
}

function B(e) {
    let t = new Set(H.map(({
        provider: e
    }) => e).filter(t => e.has(t)));
    return S() && (t.add(`sharepoint`), t.add(`onedrive`)), t
}

function V(e, t = `search`) {
    let n = F(),
        r = t === `browse`,
        i = r ? new Set([...X()].filter(e => !A(e))) : B(X()),
        a = r ? [...new Set([...Q(), ...J().filter(({
            provider: e
        }) => A(e)).map(({
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
        }) => (e === `box` || e === `dropbox` || e === `sharepoint`) && w(e) && !a.includes(e)).map(({
            provider: e
        }) => e);
    return {
        hiddenProviders: i,
        hiddenSources: r ? new Set([...q()].filter(e => !A(R(e)))) : q(),
        visibleProviders: c.length > 0 ? (s ?? H.map(({
            provider: e
        }) => e)).filter(e => !c.includes(e)) : s
    }
}

function he(e) {
    return {
        ...V(e),
        browseVisibility: V(e, `browse`),
        suggestedRequestSelection: e ? $() : void 0
    }
}

function ge(e, t) {
    t ? U.set(e) : U() === e && U.set(null)
}

function _e(e, t) {
    let n = new Set(K());
    if (t) {
        n.delete(e);
        let t = R(e),
            r = e.includes(`:`) && t != null && n.has(t) ? J().find(t => t.id === e) : void 0;
        if (r != null && n.delete(r.provider))
            for (let t of J()) t.provider === r.provider && t.id !== e && n.add(t.id)
    } else n.add(e);
    r(() => G.set([...n]))
}

function ve(e) {
    r(() => W.set(e))
}
var H, U, W, G, K, q, J, Y, X, Z, Q, $, ye = e((() => {
    se(), _(), de(), m(), P(), k(), ce(), T(), le(), L(), fe(), pe(), D(), n(), p(), re(), v(), H = [{
        provider: `google_drive`,
        connectorId: o[h.GDRIVE_ACTION_CONNECTOR],
        isEnabled: ue
    }, {
        provider: `box`,
        connectorId: o[h.BOX_CONNECTOR],
        isEnabled: b
    }, {
        provider: `dropbox`,
        connectorId: o[h.DROPBOX_CONNECTOR],
        isEnabled: () => g(`2060455659`)
    }, {
        provider: `sharepoint`,
        connectorId: o[h.SHAREPOINT_CONNECTOR],
        isEnabled: E
    }, {
        provider: `onedrive`,
        connectorId: o[h.SHAREPOINT_CONNECTOR],
        isEnabled: y
    }], U = a(null), W = c(t.LibraryShowHiddenFiles, () => !1, {
        coerceStoredValue: e => e === !0
    }), G = c(t.LibraryHiddenProvidersV2, () => [...z(typeof window > `u` ? null : s.getItem(t.LibraryHiddenProviders)), `sharepoint`, `onedrive`], {
        coerceStoredValue: e => Array.isArray(e) ? z(e) : [`sharepoint`, `onedrive`]
    }), K = i(() => new Set(G()), {
        equals: f
    }), q = i(() => new Set([...K()].filter(e => e.includes(`:`) && w(R(e)))), {
        equals: f
    }), J = i(() => {
        let e = F(),
            t = new Set(H.filter(({
                provider: e
            }) => w(e)).map(({
                provider: e
            }) => e)),
            n = e ? j() : void 0,
            r = n?.error == null ? n?.data?.providers : void 0,
            i = !e || t.size > 0 ? O().data : void 0;
        return H.flatMap(({
            provider: n,
            connectorId: a,
            isEnabled: o
        }) => {
            if (!o()) return [];
            let s = i?.get(a)?.filter(e => e.auth_status === `ACTIVE`) ?? [],
                c = t.has(n) && (n === `box` || n === `dropbox` || n === `sharepoint`);
            c && (s = x(s).filter(e => e.unavailable_reason == null));
            let l = c ? new Map(s.filter(e => C(e.owner_profile?.id)).toSorted((e, t) => {
                let n = C(e.owner_profile?.id) ?? ``,
                    r = C(t.owner_profile?.id) ?? ``;
                return n < r ? -1 : +(n > r)
            }).map((e, t) => [e.id, t + 1])) : void 0;
            e && c && (s = s.filter(e => {
                let t = j({
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
                let t = c ? C(e.owner_profile?.id) : e.owner_profile?.id;
                if (!t) continue;
                let r = `${n}:${t}`,
                    i = e.name?.trim() && e.name !== e.connector_name ? e.name : void 0,
                    a = c ? me(e) : void 0;
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
        equals: f
    }), Y = i(() => S() ? [...new Set(J().map(({
        provider: e
    }) => e))].filter(A) : [], {
        equals: f
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
        equals: f
    }), Z = i(() => {
        let e = K();
        return J().filter(t => !e.has(t.id) && !e.has(t.provider))
    }, {
        equals: f
    }), Q = i(() => [...new Set(Z().map(e => e.provider))], {
        equals: f
    }), $ = i(() => {
        let e = H.some(({
                provider: e
            }) => w(e)),
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
            let o = O();
            if (o.data == null && o.error == null) return {
                isReady: !1,
                providers: `all`,
                externalAccountKeys: void 0
            };
            if (o.data == null) t.add(e), i = !0;
            else {
                let s = [...new Set((o.data.get(a) ?? []).filter(e => e.auth_status === `ACTIVE`).map(t => e === `box` || e === `dropbox` || e === `sharepoint` ? C(t.owner_profile?.id) : t.owner_profile?.id).filter(e => e != null && e.length > 0))],
                    c = s.filter(t => !n.has(`${e}:${t}`));
                c.length < s.length && (c.length > 0 ? r = {
                    ...r,
                    [e]: c
                } : (t.add(e), i = !0))
            }
        }
        return {
            isReady: !0,
            providers: t.size === 0 ? y() ? H.map(({
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
    ye as a, ge as c, K as i, ve as l, Y as n, W as o, he as r, U as s, J as t, _e as u
};
//# sourceMappingURL=37eb5e23-mgfdb26ww1qrv4u2.js.map