const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/12cc112f-ke1wk3g74v45e9wi.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as n,
    C0 as r,
    J$ as i,
    S0 as a,
    X$ as o,
    Xnt as s,
    i5 as c,
    n1 as l,
    u1 as u
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as d,
    Bn as f,
    Ht as p,
    It as m,
    N as h,
    Nn as g,
    Rn as _,
    Vn as v,
    cn as y,
    jt as b,
    ln as x,
    lt as S,
    s as C,
    wn as w,
    zn as T
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    QSn as E,
    eGn as D,
    nCn as O
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    cn as k
} from "./1c919af1-abbe8u4rjagje3yr.js";
import {
    b as A,
    d as j,
    f as M,
    t as N,
    x as P
} from "./707eab0c-joqgzfzs0dn7ukcc.js";
import {
    t as F
} from "./a35abcd6-o5uzbzp1jprs3y1b.js";
var I, L, R, z, B, V, H, U = e((() => {
    I = w(), L = t(v()), d(), R = [`productivity`, `creativity`, `developer tools`, `finance`, `entertainment`, `healthcare`, `other`], z = [`apps`, `skills`], B = (e, t, n, r) => {
        let i = new URLSearchParams(e);
        if (e.get(`catalog`) === `GLOBAL` && i.delete(`marketplaceSource`), `view` in t && (t.view === `marketplaces` ? i.set(`view`, `marketplaces`) : i.delete(`view`)), `marketplaceSourceId` in t) {
            let e = t.marketplaceSourceId?.trim();
            e ? i.set(`marketplace`, e) : i.delete(`marketplace`)
        }
        if ((`view` in t || `marketplaceSourceId` in t) && !(`searchTerm` in t)) {
            let t = e => n && (e.get(`view`) === `marketplaces` || !!e.get(`marketplace`)?.trim());
            t(e) !== t(i) && i.delete(`q`)
        }
        if (`searchTerm` in t && (t.searchTerm ? i.set(`q`, t.searchTerm) : i.delete(`q`)), `catalog` in t && (t.catalog ? i.set(`catalog`, t.catalog) : i.delete(`catalog`)), `marketplaceFilterId` in t) {
            let e = t.marketplaceFilterId?.trim();
            e ? i.set(`marketplaceSource`, e) : i.delete(`marketplaceSource`)
        }
        if (i.get(`catalog`) === `GLOBAL` && i.delete(`marketplaceSource`), `instanceAppId` in t) {
            let e = t.instanceAppId?.trim();
            e ? i.set(`instance`, e) : i.delete(`instance`)
        }
        if (`status` in t && (t.status ? i.set(`status`, t.status) : i.delete(`status`)), r) {
            if (`accessRoleId` in t) {
                let e = t.accessRoleId?.trim();
                e ? i.set(`accessRoleId`, e) : i.delete(`accessRoleId`)
            }
            `installationPolicy` in t && (t.installationPolicy ? i.set(`installationPolicy`, t.installationPolicy) : i.delete(`installationPolicy`)), (`status` in t || `accessRoleId` in t || `installationPolicy` in t) && (!i.get(`accessRoleId`)?.trim() || ![`enabled`, `custom`].includes(i.get(`status`) ?? ``)) && i.delete(`installationPolicy`)
        }
        if (`verified` in t && (t.verified == null ? i.delete(`verified`) : i.set(`verified`, String(t.verified))), `workspaceLinks` in t && (t.workspaceLinks ? i.set(`workspaceLinks`, `true`) : i.delete(`workspaceLinks`)), `categories` in t) {
            i.delete(`categories`);
            for (let e of t.categories ?? []) i.append(`categories`, e)
        }
        if (`contains` in t) {
            i.delete(`contains`);
            for (let e of t.contains ?? []) i.append(`contains`, e)
        }
        return `sortDirection` in t && (t.sortDirection ? (i.set(`sortBy`, t.sortBy ?? `updated_at`), i.set(`sortDirection`, t.sortDirection)) : (i.delete(`sortBy`), i.delete(`sortDirection`))), i
    }, V = (e, t) => {
        let n = e.get(`instance`)?.trim(),
            r = e.get(`marketplace`)?.trim(),
            i = e.get(`marketplaceSource`)?.trim(),
            a = e.get(`status`),
            o = e.get(`verified`),
            s = e.get(`accessRoleId`)?.trim() || void 0,
            c = e.get(`installationPolicy`),
            l = e.get(`sortBy`),
            u = e.get(`sortDirection`),
            d = l === `name` && u === `asc` || l === `updated_at` && (u === `asc` || u === `desc`),
            f = R.filter(t => e.getAll(`categories`).includes(t)),
            p = z.filter(t => e.getAll(`contains`).includes(t));
        return {
            ...t ? {
                accessRoleId: s,
                installationPolicy: s && (a === `enabled` || a === `custom`) && (c === `available` || c === `installed`) ? c : void 0
            } : {},
            view: e.get(`view`) === `marketplaces` ? `marketplaces` : void 0,
            searchTerm: e.get(`q`) ?? void 0,
            catalog: e.get(`catalog`) ?? void 0,
            marketplaceSourceId: r || void 0,
            marketplaceFilterId: e.get(`catalog`) === `GLOBAL` ? void 0 : i || void 0,
            instanceAppId: n || void 0,
            status: a === `enabled` || a === `disabled` || a === `draft` || t && s != null && a === `custom` ? a : void 0,
            verified: o === `true` || o !== `false` && void 0,
            workspaceLinks: e.get(`workspaceLinks`) === `true` || void 0,
            categories: f.length > 0 ? f : void 0,
            contains: p.length > 0 ? p : void 0,
            sortBy: d ? l : void 0,
            sortDirection: d ? u : void 0
        }
    }, H = e => {
        "use forget";
        let t = (0, I.c)(35),
            n;
        t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
        let {
            marketplacesEnabled: r,
            roleFilterEnabled: i
        } = n, a = r === void 0 || r, o = i !== void 0 && i, {
            pathname: s,
            key: c
        } = b(), l = m(), [u, d] = p(), [f, h] = (0, L.useState)(u), g = (0, L.useRef)(u), _;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = [], t[2] = _) : _ = t[2];
        let v = (0, L.useRef)(_),
            y;
        t[3] !== l || t[4] !== u ? (y = () => {
            let e = v.current.indexOf(u.toString());
            if (l !== `POP` && e !== -1) {
                v.current.splice(0, e + 1);
                return
            }
            v.current = [], g.current = u, h(u)
        }, t[3] = l, t[4] = u, t[5] = y) : y = t[5];
        let x;
        t[6] !== c || t[7] !== l || t[8] !== u ? (x = [c, l, u], t[6] = c, t[7] = l, t[8] = u, t[9] = x) : x = t[9], (0, L.useEffect)(y, x);
        let S;
        t[10] !== f || t[11] !== o ? (S = V(f, o), t[10] = f, t[11] = o, t[12] = S) : S = t[12];
        let C = S,
            w;
        t[13] !== a || t[14] !== o || t[15] !== d ? (w = (e, t) => {
            let {
                replace: n
            } = t === void 0 ? {} : t, r = n === void 0 || n, i = B(g.current, e, a, o);
            i.toString() !== g.current.toString() && (v.current.push(i.toString()), g.current = i, h(i), d(i, {
                replace: r
            }))
        }, t[13] = a, t[14] = o, t[15] = d, t[16] = w) : w = t[16];
        let T = w,
            E;
        t[17] !== a || t[18] !== f || t[19] !== s || t[20] !== o ? (E = (e, t) => {
            let n = e === void 0 ? {} : e,
                r = t === void 0 ? s : t,
                i = B(f, n, a, o).toString();
            return `${r}${i?`?${i}`:``}`
        }, t[17] = a, t[18] = f, t[19] = s, t[20] = o, t[21] = E) : E = t[21];
        let D = E,
            O;
        t[22] === f ? O = t[23] : (O = f.get(`catalog`) === `GLOBAL` && f.has(`marketplaceSource`), t[22] = f, t[23] = O);
        let k = O,
            A;
        t[24] === T ? A = t[25] : (A = () => T({
            marketplaceFilterId: null
        }), t[24] = T, t[25] = A);
        let j = (0, L.useEffectEvent)(A),
            M;
        t[26] !== j || t[27] !== k ? (M = () => {
            k && j()
        }, t[26] = j, t[27] = k, t[28] = M) : M = t[28];
        let N;
        t[29] === k ? N = t[30] : (N = [k], t[29] = k, t[30] = N), (0, L.useEffect)(M, N);
        let P;
        return t[31] !== D || t[32] !== C || t[33] !== T ? (P = {
            params: C,
            setParams: T,
            buildLink: D
        }, t[31] = D, t[32] = C, t[33] = T, t[34] = P) : P = t[34], P
    }
}));

function W({
    hasError: e
}) {
    let t = h(),
        [n, r] = (0, q.useState)(!1),
        [i, a] = (0, q.useState)(0);
    (0, q.useEffect)(() => {
        let e = window.setTimeout(() => r(!0), 15e3);
        return () => window.clearTimeout(e)
    }, [i]);
    let o = e || n;
    return (0, J.jsx)(`div`, {
        role: o ? `alert` : `status`,
        "aria-busy": !o,
        className: `flex min-h-60 flex-1 flex-col items-center justify-center gap-3 text-center`,
        children: o ? (0, J.jsxs)(J.Fragment, {
            children: [(0, J.jsx)(g, {
                id: `admin.plugins.access.loading.failure`,
                defaultMessage: `Workspace access could not be confirmed. Check your connection and try again.`
            }), (0, J.jsx)(j, {
                color: `secondary`,
                size: `sm`,
                variant: `outline`,
                onClick: () => {
                    r(!1), a(e => e + 1), t.cancelQueries({
                        queryKey: l().queryKey,
                        exact: !0
                    }).then(() => t.refetchQueries({
                        queryKey: l().queryKey,
                        exact: !0,
                        type: `active`
                    }))
                },
                children: (0, J.jsx)(g, {
                    id: `admin.plugins.access.loading.retry`,
                    defaultMessage: `Try again`
                })
            })]
        }) : (0, J.jsxs)(J.Fragment, {
            children: [(0, J.jsx)(P, {
                size: 20
            }), (0, J.jsx)(g, {
                id: `admin.plugins.access.loading`,
                defaultMessage: `Loading workspace access...`
            })]
        })
    })
}

function G(e) {
    "use forget";
    let t = (0, K.c)(12),
        {
            surface: n,
            children: r
        } = e,
        a = n === void 0 ? `plugins` : n,
        l;
    t[0] === a ? l = t[1] : (l = () => E(a), t[0] = a, t[1] = l);
    let u = c(l),
        d = c(i),
        f = c(o)?.id,
        p = b();
    if (u === `loading`) {
        let e;
        return t[2] !== d.isError || t[3] !== f ? (e = (0, J.jsx)(W, {
            hasError: d.isError
        }, f), t[2] = d.isError, t[3] = f, t[4] = e) : e = t[4], e
    }
    if (u === `locked`) {
        let e;
        return t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(Y, {}), t[5] = e) : e = t[5], e
    }
    if (u === `fedramp`) {
        let e = `/admin/apps${p.search}${p.hash}`,
            n;
        return t[6] === e ? n = t[7] : (n = (0, J.jsx)(S, {
            replace: !0,
            to: e
        }), t[6] = e, t[7] = n), n
    }
    if (u !== `allowed`) {
        let e;
        t[8] === p.search ? e = t[9] : (e = s(`/admin/members`, p.search), t[8] = p.search, t[9] = e);
        let n;
        return t[10] === e ? n = t[11] : (n = (0, J.jsx)(S, {
            replace: !0,
            to: e
        }), t[10] = e, t[11] = n), n
    }
    return r
}
var K, q, J, Y, X = e((() => {
        K = w(), D(), N(), A(), r(), n(), u(), C(), q = t(v()), _(), d(), O(), J = f(), x(), Y = a(() => y(() => import(`./12cc112f-ke1wk3g74v45e9wi.js`).then(e => (e.r(), e.n)).then(e => e.FreeWorkspaceLockedSection), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
    })),
    Z, Q, $, ee = e((() => {
        Z = w(), N(), F(), _(), Q = f(), $ = e => {
            "use forget";
            let t = (0, Z.c)(11),
                {
                    pluginName: n,
                    pluginsUrl: r,
                    parentPlugin: i,
                    listLabel: a
                } = e,
                o = T(),
                s;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Q.jsx)(g, {
                id: `admin.plugins.v2.header.breadcrumb.plugins.label`,
                defaultMessage: `Plugins`
            }), t[0] = s) : s = t[0];
            let c = s,
                l;
            t[1] === o ? l = t[2] : (l = o.formatMessage({
                id: `admin.plugins.v2.header.breadcrumb.navigation.label`,
                defaultMessage: `Plugin navigation`
            }), t[1] = o, t[2] = l);
            let u;
            t[3] !== a || t[4] !== i || t[5] !== n || t[6] !== r ? (u = r ? (0, Q.jsxs)(Q.Fragment, {
                children: [(0, Q.jsx)(M, {
                    color: `secondary`,
                    variant: `ghost`,
                    size: `md`,
                    to: r,
                    opticallyAlign: `start`,
                    children: (0, Q.jsx)(`span`, {
                        className: `text-lg leading-[29px] font-normal`,
                        children: a ?? c
                    })
                }), (0, Q.jsx)(k, {
                    "aria-hidden": !0,
                    className: `text-token-text-tertiary icon-sm shrink-0`
                }), i ? (0, Q.jsxs)(Q.Fragment, {
                    children: [(0, Q.jsx)(M, {
                        color: `secondary`,
                        variant: `ghost`,
                        size: `md`,
                        to: i.url,
                        children: (0, Q.jsx)(`span`, {
                            className: `text-lg leading-[29px] font-normal`,
                            children: i.name
                        })
                    }), (0, Q.jsx)(k, {
                        "aria-hidden": !0,
                        className: `text-token-text-tertiary icon-sm shrink-0`
                    })]
                }) : null, (0, Q.jsx)(`span`, {
                    "aria-current": `page`,
                    className: `text-token-text-primary truncate px-3 text-lg leading-[29px] font-normal`,
                    children: n ?? (0, Q.jsx)(`span`, {
                        "aria-hidden": !0,
                        className: `group skeleton inline-flex [--skeleton-opacity:0.75]`,
                        children: (0, Q.jsx)(`span`, {
                            className: `skeleton-child h-5 w-24 rounded-md`
                        })
                    })
                })]
            }) : (0, Q.jsx)(`h1`, {
                className: `text-token-text-primary text-lg leading-[29px] font-normal`,
                children: c
            }), t[3] = a, t[4] = i, t[5] = n, t[6] = r, t[7] = u) : u = t[7];
            let d;
            return t[8] !== l || t[9] !== u ? (d = (0, Q.jsx)(`nav`, {
                "aria-label": l,
                className: `font-oai flex min-w-0 items-center gap-1`,
                children: u
            }), t[8] = l, t[9] = u, t[10] = d) : d = t[10], d
        }
    }));
export {
    U as a, X as i, ee as n, H as o, G as r, $ as t
};
//# sourceMappingURL=9db786f2-4qs26u1amym0sj6b.js.map