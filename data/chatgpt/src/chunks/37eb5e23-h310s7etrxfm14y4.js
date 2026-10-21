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
    X8 as te,
    Z8 as m,
    k5 as h,
    k8 as g,
    prt as _,
    q1 as ne,
    qnt as v,
    srt as y,
    vct as re
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    s as b,
    w as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Wt as ie,
    AUt as ae,
    CFn as S,
    EUt as C,
    JFn as w,
    MUt as T,
    QWt as E,
    RPn as D,
    SFn as oe,
    VPn as se,
    YFn as ce,
    ZWt as le,
    _Ln as O,
    aLn as ue,
    gFn as de,
    hLn as k,
    iLn as fe,
    kUt as pe,
    sLn as me,
    vFn as A,
    xFn as he,
    yFn as j
} from "./conversation-small-ocicxxw6jegn4vux.js";

function M(e) {
    let t = (s() ?? ee())?.normalizedAccountUserId;
    return t == null ? void 0 : P({
        normalizedAccountUserId: t,
        provider: e?.provider,
        linkId: e?.linkId
    })
}
var N, P, F = e((() => {
    g(), ne(), u(), b(), N = [`mounted-library-capabilities`], P = p(({
        normalizedAccountUserId: e,
        provider: n,
        linkId: i
    }) => t(() => x({
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
    return y(L)
}
var L, ge = e((() => {
    _(), L = `183402703`
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
    return S() && (t.add(`sharepoint`), t.add(`onedrive`)), t
}

function V(e, t = `search`) {
    let n = I(),
        r = t === `browse`,
        i = r ? new Set([...X()].filter(e => !O(e))) : B(X()),
        a = r ? [...new Set([...Q(), ...J().filter(({
            provider: e
        }) => O(e)).map(({
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
        hiddenSources: r ? new Set([...q()].filter(e => !O(R(e)))) : q(),
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
    pe(), re(), se(), n(), F(), me(), E(), fe(), de(), oe(), ge(), w(), ae(), j(), g(), i(), te(), _(), H = [{
        provider: `google_drive`,
        connectorId: d[f.GDRIVE_ACTION_CONNECTOR],
        isEnabled: ce
    }, {
        provider: `box`,
        connectorId: d[f.BOX_CONNECTOR],
        isEnabled: ue
    }, {
        provider: `dropbox`,
        connectorId: d[f.DROPBOX_CONNECTOR],
        isEnabled: () => y(`2060455659`)
    }, {
        provider: `sharepoint`,
        connectorId: d[f.SHAREPOINT_CONNECTOR],
        isEnabled: he
    }, {
        provider: `onedrive`,
        connectorId: d[f.SHAREPOINT_CONNECTOR],
        isEnabled: A
    }, {
        provider: `imanage`,
        connectorId: le,
        isEnabled: ie
    }], U = o(null), W = c(v.LibraryShowHiddenFiles, () => !1, {
        coerceStoredValue: e => e === !0
    }), G = c(v.LibraryHiddenProvidersV2, () => [...z(typeof window > `u` ? null : a.getItem(v.LibraryHiddenProviders)), `sharepoint`, `onedrive`], {
        coerceStoredValue: e => Array.isArray(e) ? z(e) : [`sharepoint`, `onedrive`]
    }), K = l(() => new Set(G()), {
        equals: m
    }), q = l(() => new Set([...K()].filter(e => e.includes(`:`) && T(R(e)))), {
        equals: m
    }), J = l(() => {
        let e = I(),
            t = new Set(H.filter(({
                provider: e
            }) => T(e)).map(({
                provider: e
            }) => e)),
            n = e ? M() : void 0,
            r = n?.error == null ? n?.data?.providers : void 0,
            i = !e || t.size > 0 ? D().data : void 0;
        return H.flatMap(({
            provider: n,
            connectorId: a,
            isEnabled: o
        }) => {
            if (!o()) return [];
            let s = i?.get(a)?.filter(e => e.auth_status === `ACTIVE`) ?? [],
                c = t.has(n) && (n === `box` || n === `dropbox` || n === `sharepoint`);
            c && (s = C(s).filter(e => e.unavailable_reason == null));
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
        equals: m
    }), Y = l(() => S() ? [...new Set(J().map(({
        provider: e
    }) => e))].filter(O) : [], {
        equals: m
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
        equals: m
    }), Z = l(() => {
        let e = K();
        return J().filter(t => !e.has(t.id) && !e.has(t.provider))
    }, {
        equals: m
    }), Q = l(() => [...new Set(Z().map(e => e.provider))], {
        equals: m
    }), $ = l(() => {
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
            let o = D();
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
//# sourceMappingURL=37eb5e23-h310s7etrxfm14y4.js.map