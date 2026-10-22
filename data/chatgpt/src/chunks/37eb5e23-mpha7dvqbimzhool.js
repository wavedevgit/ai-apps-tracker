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
    Ynt as te,
    Z8 as ne,
    Znt as re,
    grt as m,
    q1 as ie,
    tct as h,
    urt as g,
    xct as ae,
    z8 as _
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    s as v,
    w as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Wt as b,
    AUt as oe,
    BFn as se,
    CLn as x,
    DUt as S,
    ELn as C,
    FFn as w,
    HFn as T,
    ILn as E,
    LFn as D,
    NUt as O,
    PLn as k,
    QWt as ce,
    RFn as le,
    VFn as ue,
    eGt as de,
    jUt as fe,
    mIn as pe,
    oFn as me,
    pIn as he,
    rFn as A,
    wLn as j
} from "./conversation-small-dwpaie1hln28efxb.js";

function M(e) {
    let t = (s() ?? ee())?.normalizedAccountUserId;
    return t == null ? void 0 : P({
        normalizedAccountUserId: t,
        provider: e?.provider,
        linkId: e?.linkId
    })
}
var N, P, F = e((() => {
    r(), ie(), t(), v(), N = [`mounted-library-capabilities`], P = _(({
        normalizedAccountUserId: e,
        provider: t,
        linkId: n
    }) => o(() => y({
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
    return g(L)
}
var L, ge = e((() => {
    m(), L = `183402703`
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
    return T() && (t.add(`sharepoint`), t.add(`onedrive`)), t
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
        }) => (e === `box` || e === `dropbox` || e === `sharepoint`) && O(e) && !a.includes(e)).map(({
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
    oe(), ae(), me(), a(), F(), C(), b(), x(), w(), ue(), ge(), he(), fe(), le(), r(), re(), ne(), m(), H = [{
        provider: `google_drive`,
        connectorId: u[h.GDRIVE_ACTION_CONNECTOR],
        isEnabled: pe
    }, {
        provider: `box`,
        connectorId: u[h.BOX_CONNECTOR],
        isEnabled: j
    }, {
        provider: `dropbox`,
        connectorId: u[h.DROPBOX_CONNECTOR],
        isEnabled: () => g(`2060455659`)
    }, {
        provider: `sharepoint`,
        connectorId: u[h.SHAREPOINT_CONNECTOR],
        isEnabled: se
    }, {
        provider: `onedrive`,
        connectorId: u[h.SHAREPOINT_CONNECTOR],
        isEnabled: D
    }, {
        provider: `imanage`,
        connectorId: ce,
        isEnabled: de
    }], U = d(null), W = c(f.LibraryShowHiddenFiles, () => !1, {
        coerceStoredValue: e => e === !0
    }), G = c(f.LibraryHiddenProvidersV2, () => [...z(typeof window > `u` ? null : te.getItem(f.LibraryHiddenProviders)), `sharepoint`, `onedrive`], {
        coerceStoredValue: e => Array.isArray(e) ? z(e) : [`sharepoint`, `onedrive`]
    }), K = i(() => new Set(G()), {
        equals: l
    }), q = i(() => new Set([...K()].filter(e => e.includes(`:`) && O(R(e)))), {
        equals: l
    }), J = i(() => {
        let e = I(),
            t = new Set(H.filter(({
                provider: e
            }) => O(e)).map(({
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
            c && (s = S(s).filter(e => e.unavailable_reason == null));
            let l = c ? new Map(s.filter(e => k(e.owner_profile?.id)).toSorted((e, t) => {
                let n = k(e.owner_profile?.id) ?? ``,
                    r = k(t.owner_profile?.id) ?? ``;
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
                let t = c ? k(e.owner_profile?.id) : e.owner_profile?.id;
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
    }), Y = i(() => T() ? [...new Set(J().map(({
        provider: e
    }) => e))].filter(E) : [], {
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
            }) => O(e)),
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
                let s = [...new Set((o.data.get(a) ?? []).filter(e => e.auth_status === `ACTIVE`).map(t => e === `box` || e === `dropbox` || e === `sharepoint` ? k(t.owner_profile?.id) : t.owner_profile?.id).filter(e => e != null && e.length > 0))],
                    c = s.filter(t => !n.has(`${e}:${t}`));
                c.length < s.length && (c.length > 0 ? r = {
                    ...r,
                    [e]: c
                } : (t.add(e), i = !0))
            }
        }
        return {
            isReady: !0,
            providers: t.size === 0 ? D() ? H.map(({
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
//# sourceMappingURL=37eb5e23-mpha7dvqbimzhool.js.map