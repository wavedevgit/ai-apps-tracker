import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ as n,
    At as r,
    Bn as i,
    Bt as a,
    In as o,
    Rn as s,
    Ut as c,
    Vn as l,
    Wt as u,
    _t as d,
    jt as f,
    lt as p,
    ut as m,
    wn as h,
    yt as g,
    zn as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Al as v,
    Cl as y,
    El as b,
    is as x,
    kl as S,
    ns as C,
    wl as w
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    d as T,
    u as E
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as D,
    t as O
} from "./e18c46cf-fjyf5ehpuodlki4v.js";

function k(e) {
    return g([{
        path: `/admin/groups/*`
    }], e) != null
}

function A(e, t) {
    if (e.startsWith(`/admin/plugins/`)) return `Plugins`;
    if (e.startsWith(`/admin/apps/`)) return `Connectors`;
    if (e.startsWith(`/admin/usage/`)) return `User Analytics`;
    if (e.startsWith(`/admin/usage-limits/`)) return `Usage limits`;
    if (e.startsWith(`/admin/service-accounts/`)) return `Service accounts`;
    switch (e) {
        case `/admin`:
            return `General`;
        case `/admin/members`:
            return `Members`;
        case `/admin/models`:
            return `Models`;
        case `/admin/analytics`:
            return `Analytics`;
        case `/admin/usage`:
            return `User Analytics`;
        case `/admin/usage-limits`:
            return `Usage limits`;
        case `/admin/billing`:
            return `Billing`;
        case `/admin/billing/credit_grants`:
            return `Credit grants`;
        case `/admin/billing/manage_member_usage_limit`:
            return `Per user override`;
        case `/admin/usage-limits`:
            return `Usage limits`;
        case `/admin/gpts`:
            return `GPTs`;
        case `/admin/groups`:
            return `Groups`;
        case `/admin/identity`:
            return `Identity & Access`;
        case `/admin/access-tokens`:
            return `Access tokens`;
        case `/admin/service-accounts`:
            return `Service accounts`;
        case `/admin/status-and-access`:
            return t.formatMessage(F);
        case `/admin/sites`:
            return `Sites`;
        case `/admin/ip-allowlist`:
            return `IP allowlist`;
        case `/admin/permissions`:
            return `Permissions`;
        case `/admin/plugins`:
            return `Plugins`;
        case `/admin/skills`:
            return `Skills`;
        case `/admin/apps`:
        case `/admin/ca`:
        case `/admin/connectors`:
            return `Connectors`;
        default:
            return `Admin`
    }
}
var j, M, N, P, F, I, L, R = e((() => {
    n(), j = h(), w(), x(), S(), D(), E(), M = t(l()), s(), N = i(), P = ({
        currentUrl: e,
        nextUrl: t
    }) => {
        if (e.pathname === t.pathname && v(e.pathname) === `/admin/members` && (e.searchParams.has(`manage_seats`) && !t.searchParams.has(`manage_seats`) || e.searchParams.get(`manage_usage`) === `1` && !t.searchParams.has(`manage_usage`))) {
            let n = new URLSearchParams(e.searchParams);
            if (t.searchParams.has(`manage_seats`) || n.delete(`manage_seats`), t.searchParams.has(`manage_usage`) || n.delete(`manage_usage`), n.toString() === t.searchParams.toString()) return !1
        }
        return (e.pathname !== t.pathname || e.search !== t.search) && (k(t.pathname) || b(t) != null)
    }, o({
        id: `chatgpt.admin.apps.sync_details.mobile_page_title`,
        defaultMessage: `Manage Sync`
    }), F = o({
        id: `chatgpt.admin.organization_status.mobile_page_title`,
        defaultMessage: `Status & access`
    }), I = c(function() {
        "use forget";
        let e = (0, j.c)(22);
        T();
        let t = f(),
            n = _(),
            i = r(),
            a = (0, M.useRef)(null);
        if (i?.shouldHideAdminPages && v(t.pathname) !== `/admin/status-and-access`) {
            let t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, N.jsx)(p, {
                replace: !0,
                to: `/`
            }), e[0] = t) : t = e[0], t
        }
        let o = i?.currentWorkspaceId,
            s = i?.role,
            c = i?.workspaceName,
            l = i?.profilePicId,
            u = i?.profilePicUrl,
            d = i?.cloudConsoleM3Enrolled ?? !1,
            h = i?.workloadIdentityEnabled ?? !1,
            g;
        e[1] === i?.adminConsoleRedirects ? g = e[2] : (g = i?.adminConsoleRedirects ?? {}, e[1] = i?.adminConsoleRedirects, e[2] = g);
        let b = i?.organizationAccountStatusEnabled ?? !1,
            x;
        e[3] !== o || e[4] !== s || e[5] !== c || e[6] !== l || e[7] !== u || e[8] !== d || e[9] !== h || e[10] !== g || e[11] !== b ? (x = {
            currentWorkspaceId: o,
            role: s,
            workspaceName: c,
            profilePicId: l,
            profilePicUrl: u,
            cloudConsoleM3Enrolled: d,
            workloadIdentityEnabled: h,
            adminConsoleRedirects: g,
            organizationAccountStatusEnabled: b,
            beforeWorkspaceSwitchRef: a
        }, e[3] = o, e[4] = s, e[5] = c, e[6] = l, e[7] = u, e[8] = d, e[9] = h, e[10] = g, e[11] = b, e[12] = x) : x = e[12];
        let S = x,
            w;
        e[13] !== n || e[14] !== t.pathname ? (w = A(t.pathname, n), e[13] = n, e[14] = t.pathname, e[15] = w) : w = e[15];
        let E;
        e[16] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, N.jsx)(m, {}), e[16] = E) : E = e[16];
        let D;
        e[17] === w ? D = e[18] : (D = (0, N.jsx)(C, {
            mobilePageTitle: w,
            children: E
        }), e[17] = w, e[18] = D);
        let O;
        return e[19] !== S || e[20] !== D ? (O = (0, N.jsx)(y.Provider, {
            value: S,
            children: D
        }), e[19] = S, e[20] = D, e[21] = O) : O = e[21], O
    }), L = u(function() {
        "use forget";
        let e = (0, j.c)(1),
            t = a();
        if (d(t) && t.status === 404) {
            let t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, N.jsx)(O, {}), e[0] = t) : t = e[0], t
        }
        throw t
    })
}));
e((() => {
    R()
}))();
export {
    L as ErrorBoundary, I as
    default, P as shouldRevalidate
};
//# sourceMappingURL=admin-qkra5y82.js.map