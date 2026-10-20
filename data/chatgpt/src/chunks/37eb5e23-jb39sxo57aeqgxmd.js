import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ant as t,
    C8 as n,
    F7 as r,
    Fv as i,
    Gnt as a,
    Ist as o,
    L8 as s,
    Mnt as c,
    P1 as l,
    R1 as u,
    R8 as d,
    T8 as ee,
    Z_ as f,
    Znt as p,
    b8 as m,
    g5 as h,
    g8 as g,
    jnt as _,
    nct as te,
    w1 as ne,
    w8 as re,
    x8 as v,
    z7 as y
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    s as ie,
    w as ae
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Pn as oe,
    HIn as se,
    IUt as b,
    LUt as x,
    MFn as ce,
    NUt as le,
    QIn as S,
    VIn as ue,
    WIn as C,
    aFn as w,
    aGt as T,
    eLn as E,
    iFn as D,
    iGt as de,
    jFn as fe,
    nFn as pe,
    oFn as O,
    oGt as me,
    tFn as k,
    wPn as he,
    xPn as A,
    zUt as j
} from "./conversation-small-ikg0dwuw782klweb.js";

function M(e) {
    let t = (ne() ?? l())?.normalizedAccountUserId;
    return t == null ? void 0 : P({
        normalizedAccountUserId: t,
        provider: e?.provider,
        linkId: e?.linkId
    })
}
var N, P, F = e((() => {
    g(), u(), y(), ie(), N = [`mounted-library-capabilities`], P = ee(({
        normalizedAccountUserId: e,
        provider: t,
        linkId: i
    }) => n(() => ae({
        queryKey: [...N, e, ...t == null ? [] : [t, i]],
        queryFn: () => t == null ? r.safeGet(`/files/library/mounted/capabilities`) : r.safeGet(`/files/library/mounted/capabilities`, {
            parameters: {
                query: {
                    provider: t,
                    link_id: i
                }
            }
        }),
        refetchOnWindowFocus: !1,
        refetchOnReconnect: `always`
    })))
}));

function I() {
    return a(L)
}
var L, ge = e((() => {
    p(), L = `183402703`
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
    return O() && (t.add(`sharepoint`), t.add(`onedrive`)), t
}

function V(e, t = `search`) {
    let n = I(),
        r = t === `browse`,
        i = r ? new Set([...X()].filter(e => !E(e))) : B(X()),
        a = r ? [...new Set([...Q(), ...J().filter(({
            provider: e
        }) => E(e)).map(({
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
        }) => (e === `box` || e === `dropbox` || e === `sharepoint`) && j(e) && !a.includes(e)).map(({
            provider: e
        }) => e);
    return {
        hiddenProviders: i,
        hiddenSources: r ? new Set([...q()].filter(e => !E(R(e)))) : q(),
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
    let n = new Set(K());
    if (t) {
        n.delete(e);
        let t = R(e),
            r = e.includes(`:`) && t != null && n.has(t) ? J().find(t => t.id === e) : void 0;
        if (r != null && n.delete(r.provider))
            for (let t of J()) t.provider === r.provider && t.id !== e && n.add(t.id)
    } else n.add(e);
    h(() => G.set([...n]))
}

function xe(e) {
    h(() => W.set(e))
}
var H, U, W, G, K, q, J, Y, X, Z, Q, $, Se = e((() => {
    b(), te(), he(), i(), F(), C(), T(), ue(), oe(), w(), ge(), fe(), x(), pe(), g(), c(), s(), p(), H = [{
        provider: `google_drive`,
        connectorId: f[o.GDRIVE_ACTION_CONNECTOR],
        isEnabled: ce
    }, {
        provider: `box`,
        connectorId: f[o.BOX_CONNECTOR],
        isEnabled: se
    }, {
        provider: `dropbox`,
        connectorId: f[o.DROPBOX_CONNECTOR],
        isEnabled: () => a(`2060455659`)
    }, {
        provider: `sharepoint`,
        connectorId: f[o.SHAREPOINT_CONNECTOR],
        isEnabled: D
    }, {
        provider: `onedrive`,
        connectorId: f[o.SHAREPOINT_CONNECTOR],
        isEnabled: k
    }, {
        provider: `imanage`,
        connectorId: de,
        isEnabled: me
    }], U = re(null), W = m(_.LibraryShowHiddenFiles, () => !1, {
        coerceStoredValue: e => e === !0
    }), G = m(_.LibraryHiddenProvidersV2, () => [...z(typeof window > `u` ? null : t.getItem(_.LibraryHiddenProviders)), `sharepoint`, `onedrive`], {
        coerceStoredValue: e => Array.isArray(e) ? z(e) : [`sharepoint`, `onedrive`]
    }), K = v(() => new Set(G()), {
        equals: d
    }), q = v(() => new Set([...K()].filter(e => e.includes(`:`) && j(R(e)))), {
        equals: d
    }), J = v(() => {
        let e = I(),
            t = new Set(H.filter(({
                provider: e
            }) => j(e)).map(({
                provider: e
            }) => e)),
            n = e ? M() : void 0,
            r = n?.error == null ? n?.data?.providers : void 0,
            i = !e || t.size > 0 ? A().data : void 0;
        return H.flatMap(({
            provider: n,
            connectorId: a,
            isEnabled: o
        }) => {
            if (!o()) return [];
            let s = i?.get(a)?.filter(e => e.auth_status === `ACTIVE`) ?? [],
                c = t.has(n) && (n === `box` || n === `dropbox` || n === `sharepoint`);
            c && (s = le(s).filter(e => e.unavailable_reason == null));
            let l = c ? new Map(s.filter(e => S(e.owner_profile?.id)).toSorted((e, t) => {
                let n = S(e.owner_profile?.id) ?? ``,
                    r = S(t.owner_profile?.id) ?? ``;
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
                let t = c ? S(e.owner_profile?.id) : e.owner_profile?.id;
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
        equals: d
    }), Y = v(() => O() ? [...new Set(J().map(({
        provider: e
    }) => e))].filter(E) : [], {
        equals: d
    }), X = v(() => {
        let e = K();
        if (e.size === 0) return new Set;
        let t = J();
        return new Set(H.filter(({
            provider: n
        }) => e.has(n) || t.some(e => e.provider === n) && t.filter(e => e.provider === n).every(t => e.has(t.id))).map(({
            provider: e
        }) => e))
    }, {
        equals: d
    }), Z = v(() => {
        let e = K();
        return J().filter(t => !e.has(t.id) && !e.has(t.provider))
    }, {
        equals: d
    }), Q = v(() => [...new Set(Z().map(e => e.provider))], {
        equals: d
    }), $ = v(() => {
        let e = H.some(({
                provider: e
            }) => j(e)),
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
            let o = A();
            if (o.data == null && o.error == null) return {
                isReady: !1,
                providers: `all`,
                externalAccountKeys: void 0
            };
            if (o.data == null) t.add(e), i = !0;
            else {
                let s = [...new Set((o.data.get(a) ?? []).filter(e => e.auth_status === `ACTIVE`).map(t => e === `box` || e === `dropbox` || e === `sharepoint` ? S(t.owner_profile?.id) : t.owner_profile?.id).filter(e => e != null && e.length > 0))],
                    c = s.filter(t => !n.has(`${e}:${t}`));
                c.length < s.length && (c.length > 0 ? r = {
                    ...r,
                    [e]: c
                } : (t.add(e), i = !0))
            }
        }
        return {
            isReady: !0,
            providers: t.size === 0 ? k() ? H.map(({
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
//# sourceMappingURL=37eb5e23-jb39sxo57aeqgxmd.js.map