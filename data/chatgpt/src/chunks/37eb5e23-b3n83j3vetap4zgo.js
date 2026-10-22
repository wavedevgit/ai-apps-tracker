import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    I8 as t,
    Iv as n,
    J7 as r,
    Jnt as i,
    Knt as a,
    L8 as o,
    N1 as s,
    N8 as c,
    P8 as l,
    Q7 as u,
    Q_ as d,
    Qst as f,
    R8 as p,
    U1 as ee,
    X8 as m,
    Z8 as h,
    k5 as g,
    k8 as _,
    prt as v,
    q1 as te,
    qnt as y,
    srt as b,
    vct as ne
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    s as x,
    w as S
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Wt as re,
    AUt as ie,
    BPn as C,
    CFn as w,
    EUt as T,
    MUt as E,
    QWt as D,
    TFn as O,
    UPn as ae,
    XFn as oe,
    ZFn as se,
    ZWt as ce,
    _Ln as k,
    bFn as A,
    kUt as le,
    lLn as ue,
    oLn as de,
    sLn as fe,
    vFn as pe,
    wFn as me,
    xFn as he,
    yLn as j
} from "./conversation-small-i79e9c315w50am5f.js";

function M(e) {
    let t = (s() ?? ee())?.normalizedAccountUserId;
    return t == null ? void 0 : P({
        normalizedAccountUserId: t,
        provider: e?.provider,
        linkId: e?.linkId
    })
}
var N, P, F = e((() => {
    _(), te(), u(), x(), N = [`mounted-library-capabilities`], P = p(({
        normalizedAccountUserId: e,
        provider: n,
        linkId: i
    }) => t(() => S({
        queryKey: [...N, e, ...n == null ? [] : [n, i]],
        queryFn: () => n == null ? r.safeGet(`/files/library/mounted/capabilities`) : r.safeGet(`/files/library/mounted/capabilities`, {
            parameters: {
                query: {
                    provider: n,
                    link_id: i
                }
            }
        }),
        refetchOnWindowFocus: !1,
        refetchOnReconnect: `always`
    })))
}));

function I() {
    return b(L)
}
var L, ge = e((() => {
    v(), L = `183402703`
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
        }) => (e === `box` || e === `dropbox` || e === `sharepoint`) && E(e) && !a.includes(e)).map(({
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
    let n = new Set(K());
    if (t) {
        n.delete(e);
        let t = R(e),
            r = e.includes(`:`) && t != null && n.has(t) ? J().find(t => t.id === e) : void 0;
        if (r != null && n.delete(r.provider))
            for (let t of J()) t.provider === r.provider && t.id !== e && n.add(t.id)
    } else n.add(e);
    g(() => G.set([...n]))
}

function xe(e) {
    g(() => W.set(e))
}
var H, U, W, G, K, q, J, Y, X, Z, Q, $, Se = e((() => {
    le(), ne(), ae(), n(), F(), ue(), D(), de(), pe(), me(), ge(), oe(), ie(), he(), _(), i(), m(), v(), H = [{
        provider: `google_drive`,
        connectorId: d[f.GDRIVE_ACTION_CONNECTOR],
        isEnabled: se
    }, {
        provider: `box`,
        connectorId: d[f.BOX_CONNECTOR],
        isEnabled: fe
    }, {
        provider: `dropbox`,
        connectorId: d[f.DROPBOX_CONNECTOR],
        isEnabled: () => b(`2060455659`)
    }, {
        provider: `sharepoint`,
        connectorId: d[f.SHAREPOINT_CONNECTOR],
        isEnabled: w
    }, {
        provider: `onedrive`,
        connectorId: d[f.SHAREPOINT_CONNECTOR],
        isEnabled: A
    }, {
        provider: `imanage`,
        connectorId: ce,
        isEnabled: re
    }], U = o(null), W = c(y.LibraryShowHiddenFiles, () => !1, {
        coerceStoredValue: e => e === !0
    }), G = c(y.LibraryHiddenProvidersV2, () => [...z(typeof window > `u` ? null : a.getItem(y.LibraryHiddenProviders)), `sharepoint`, `onedrive`], {
        coerceStoredValue: e => Array.isArray(e) ? z(e) : [`sharepoint`, `onedrive`]
    }), K = l(() => new Set(G()), {
        equals: h
    }), q = l(() => new Set([...K()].filter(e => e.includes(`:`) && E(R(e)))), {
        equals: h
    }), J = l(() => {
        let e = I(),
            t = new Set(H.filter(({
                provider: e
            }) => E(e)).map(({
                provider: e
            }) => e)),
            n = e ? M() : void 0,
            r = n?.error == null ? n?.data?.providers : void 0,
            i = !e || t.size > 0 ? C().data : void 0;
        return H.flatMap(({
            provider: n,
            connectorId: a,
            isEnabled: o
        }) => {
            if (!o()) return [];
            let s = i?.get(a)?.filter(e => e.auth_status === `ACTIVE`) ?? [],
                c = t.has(n) && (n === `box` || n === `dropbox` || n === `sharepoint`);
            c && (s = T(s).filter(e => e.unavailable_reason == null));
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
        equals: h
    }), Y = l(() => O() ? [...new Set(J().map(({
        provider: e
    }) => e))].filter(j) : [], {
        equals: h
    }), X = l(() => {
        let e = K();
        if (e.size === 0) return new Set;
        let t = J();
        return new Set(H.filter(({
            provider: n
        }) => e.has(n) || t.some(e => e.provider === n) && t.filter(e => e.provider === n).every(t => e.has(t.id))).map(({
            provider: e
        }) => e))
    }, {
        equals: h
    }), Z = l(() => {
        let e = K();
        return J().filter(t => !e.has(t.id) && !e.has(t.provider))
    }, {
        equals: h
    }), Q = l(() => [...new Set(Z().map(e => e.provider))], {
        equals: h
    }), $ = l(() => {
        let e = H.some(({
                provider: e
            }) => E(e)),
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
            let o = C();
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
            providers: t.size === 0 ? A() ? H.map(({
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
//# sourceMappingURL=37eb5e23-b3n83j3vetap4zgo.js.map