import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Crt as n,
    F8 as r,
    I7 as i,
    Iv as a,
    L8 as o,
    M7 as s,
    N1 as c,
    Oct as l,
    P8 as u,
    Q8 as d,
    Q_ as f,
    R8 as ee,
    U1 as te,
    Z8 as ne,
    _rt as p,
    cct as m,
    irt as re,
    nrt as ie,
    p5 as h,
    q1 as g,
    rrt as _,
    z8 as ae
} from "./4813494d-mdvd4786a87166cc.js";
import {
    s as oe,
    w as se
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Fn as ce,
    CUt as le,
    DIn as ue,
    DUt as v,
    EIn as y,
    EUt as de,
    ILn as fe,
    JFn as b,
    JWt as x,
    LLn as S,
    XFn as C,
    XWt as w,
    YLn as T,
    YWt as pe,
    ZFn as me,
    eIn as he,
    gFn as E,
    kUt as D,
    qLn as O,
    tIn as k,
    yFn as A,
    zLn as j
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function M(e) {
    let t = (c() ?? te())?.normalizedAccountUserId;
    return t == null ? void 0 : P({
        normalizedAccountUserId: t,
        provider: e?.provider,
        linkId: e?.linkId
    })
}
var N, P, F = e((() => {
    t(), g(), i(), oe(), N = [`mounted-library-capabilities`], P = ae(({
        normalizedAccountUserId: e,
        provider: t,
        linkId: n
    }) => o(() => se({
        queryKey: [...N, e, ...t == null ? [] : [t, n]],
        queryFn: () => t == null ? s.safeGet(`/files/library/mounted/capabilities`) : s.safeGet(`/files/library/mounted/capabilities`, {
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
    return p(L)
}
var L, ge = e((() => {
    n(), L = `183402703`
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
    return k() && (t.add(`sharepoint`), t.add(`onedrive`)), t
}

function V(e, t = `search`) {
    let n = I(),
        r = t === `browse`,
        i = r ? new Set([...X()].filter(e => !T(e))) : B(X()),
        a = r ? [...new Set([...Q(), ...J().filter(({
            provider: e
        }) => T(e)).map(({
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
        }) => (e === `box` || e === `dropbox` || e === `sharepoint`) && D(e) && !a.includes(e)).map(({
            provider: e
        }) => e);
    return {
        hiddenProviders: i,
        hiddenSources: r ? new Set([...q()].filter(e => !T(R(e)))) : q(),
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
    de(), l(), A(), a(), F(), j(), pe(), fe(), b(), he(), ge(), y(), v(), me(), t(), re(), ne(), n(), H = [{
        provider: `google_drive`,
        connectorId: f[m.GDRIVE_ACTION_CONNECTOR],
        isEnabled: ue
    }, {
        provider: `box`,
        connectorId: f[m.BOX_CONNECTOR],
        isEnabled: S
    }, {
        provider: `dropbox`,
        connectorId: f[m.DROPBOX_CONNECTOR],
        isEnabled: () => p(`2060455659`)
    }, {
        provider: `sharepoint`,
        connectorId: f[m.SHAREPOINT_CONNECTOR],
        isEnabled: ce
    }, {
        provider: `onedrive`,
        connectorId: f[m.SHAREPOINT_CONNECTOR],
        isEnabled: C
    }, {
        provider: `imanage`,
        connectorId: x,
        isEnabled: w
    }], U = ee(null), W = u(_.LibraryShowHiddenFiles, () => !1, {
        coerceStoredValue: e => e === !0
    }), G = u(_.LibraryHiddenProvidersV2, () => [...z(typeof window > `u` ? null : ie.getItem(_.LibraryHiddenProviders)), `sharepoint`, `onedrive`], {
        coerceStoredValue: e => Array.isArray(e) ? z(e) : [`sharepoint`, `onedrive`]
    }), K = r(() => new Set(G()), {
        equals: d
    }), q = r(() => new Set([...K()].filter(e => e.includes(`:`) && D(R(e)))), {
        equals: d
    }), J = r(() => {
        let e = I(),
            t = new Set(H.filter(({
                provider: e
            }) => D(e)).map(({
                provider: e
            }) => e)),
            n = e ? M() : void 0,
            r = n?.error == null ? n?.data?.providers : void 0,
            i = !e || t.size > 0 ? E().data : void 0;
        return H.flatMap(({
            provider: n,
            connectorId: a,
            isEnabled: o
        }) => {
            if (!o()) return [];
            let s = i?.get(a)?.filter(e => e.auth_status === `ACTIVE`) ?? [],
                c = t.has(n) && (n === `box` || n === `dropbox` || n === `sharepoint`);
            c && (s = le(s).filter(e => e.unavailable_reason == null));
            let l = c ? new Map(s.filter(e => O(e.owner_profile?.id)).toSorted((e, t) => {
                let n = O(e.owner_profile?.id) ?? ``,
                    r = O(t.owner_profile?.id) ?? ``;
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
                let t = c ? O(e.owner_profile?.id) : e.owner_profile?.id;
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
    }), Y = r(() => k() ? [...new Set(J().map(({
        provider: e
    }) => e))].filter(T) : [], {
        equals: d
    }), X = r(() => {
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
    }), Z = r(() => {
        let e = K();
        return J().filter(t => !e.has(t.id) && !e.has(t.provider))
    }, {
        equals: d
    }), Q = r(() => [...new Set(Z().map(e => e.provider))], {
        equals: d
    }), $ = r(() => {
        let e = H.some(({
                provider: e
            }) => D(e)),
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
            let o = E();
            if (o.data == null && o.error == null) return {
                isReady: !1,
                providers: `all`,
                externalAccountKeys: void 0
            };
            if (o.data == null) t.add(e), i = !0;
            else {
                let s = [...new Set((o.data.get(a) ?? []).filter(e => e.auth_status === `ACTIVE`).map(t => e === `box` || e === `dropbox` || e === `sharepoint` ? O(t.owner_profile?.id) : t.owner_profile?.id).filter(e => e != null && e.length > 0))],
                    c = s.filter(t => !n.has(`${e}:${t}`));
                c.length < s.length && (c.length > 0 ? r = {
                    ...r,
                    [e]: c
                } : (t.add(e), i = !0))
            }
        }
        return {
            isReady: !0,
            providers: t.size === 0 ? C() ? H.map(({
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
//# sourceMappingURL=37eb5e23-isxum4g0kammmfbq.js.map