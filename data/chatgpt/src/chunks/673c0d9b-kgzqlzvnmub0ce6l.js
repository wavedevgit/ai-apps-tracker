import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dat as n,
    U1 as r,
    V1 as i,
    XG as a,
    ZG as o,
    a0 as s,
    est as c,
    grt as l,
    jat as u,
    nst as d,
    o0 as f,
    q1 as p,
    rst as m,
    tst as h,
    urt as g
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    N as _,
    O as v,
    Vn as y,
    Y as b,
    s as x,
    w as S,
    wn as C
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    BMt as w,
    zMt as T
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    r as E,
    t as D
} from "./948fe603-fn4az4d5sl11u1h2.js";

function O() {
    return d() ? null : c()
}

function k(e) {
    function t() {
        let t = O(),
            n = i();
        if (e == null || t?.user?.id !== e.userId || n?.authUserId !== e.userId || n.id !== e.accountId) throw Error(`Codex Security access identity is no longer active`);
        return t
    }
    return S({
        queryKey: [`workspace-settings`, e?.accountId, `codex-security-access`, e?.userId],
        queryFn: e == null ? b : async ({
            signal: r
        }) => {
            let i = t(),
                a = await D.safeGet(`/aardvark/plugin/access`, {
                    authOption: n.Required,
                    accessToken: i.accessToken,
                    additionalHeaders: {
                        "ChatGPT-Account-ID": e.accountId
                    },
                    preserveAccountIdOnRetry: !0,
                    signal: r
                });
            return t(), a
        },
        enabled: e != null,
        placeholderData: void 0,
        staleTime: 3e4,
        retry: !1,
        throwOnError: !1,
        refetchOnMount: !0,
        refetchOnWindowFocus: !0,
        refetchOnReconnect: !0
    })
}
var A = e((() => {
    p(), h(), u(), x(), E()
}));

function j() {
    return g(`601426104`)
}

function M() {
    "use forget";
    let e = (0, P.c)(22),
        t = s(),
        n = f(),
        i = (0, F.useSyncExternalStore)(m, O, O),
        o, c, l;
    e[0] !== n || e[1] !== i ? (o = n != null && i?.user?.id != null && n.authUserId === i.user.id ? {
        userId: i.user.id,
        accountId: n.id
    } : null, c = v, l = k(o), e[0] = n, e[1] = i, e[2] = o, e[3] = c, e[4] = l) : (o = e[2], c = e[3], l = e[4]);
    let u = c(l),
        d = _(),
        p = u.isError ? void 0 : u.data,
        h = p == null ? void 0 : p.security_access_permission === !0,
        g = p == null ? void 0 : p.security_admin_permission === !0,
        y = p?.is_workspace_allowed === !0,
        b;
    if (e[5] === Symbol.for(`react.memo_cache_sentinel`)) {
        let t = r();
        b = t?.isEnterprisey() === !0 || t?.isSelfServeBusiness() === !0 || t?.isEdu() === !0, e[5] = b
    } else b = e[5];
    let x = b,
        S = w(),
        C = S === `ENABLED` || S === `LOADING` && void 0,
        T = n == null && t.isError || u.isError,
        E = T || y && S === `ERROR`,
        D = !E && (u.isPending || S === `LOADING`),
        A;
    e[6] !== u || e[7] !== n || e[8] !== t || e[9] !== S || e[10] !== o || e[11] !== d ? (A = async () => {
        await Promise.all([o == null ? t.refetch({
            cancelRefetch: !1
        }) : u.refetch({
            cancelRefetch: !1
        }), S === `ERROR` ? d.refetchQueries({
            ...a(n?.getWorkspaceId()),
            exact: !0
        }) : void 0])
    }, e[6] = u, e[7] = n, e[8] = t, e[9] = S, e[10] = o, e[11] = d, e[12] = A) : A = e[12];
    let j;
    return e[13] !== h || e[14] !== g || e[15] !== C || e[16] !== E || e[17] !== T || e[18] !== y || e[19] !== D || e[20] !== A ? (j = {
        hasAccess: h,
        hasCodexCloudAccess: C,
        hasNewUiAccess: h,
        hasAdminAccess: g,
        isEligibleWorkspace: x,
        isWorkspaceAllowed: y,
        isLoading: D,
        isError: E,
        isSecurityAccessError: T,
        refetch: A
    }, e[13] = h, e[14] = g, e[15] = C, e[16] = E, e[17] = T, e[18] = y, e[19] = D, e[20] = A, e[21] = j) : j = e[21], j
}

function N() {
    "use forget";
    let e = (0, P.c)(7),
        {
            hasAccess: t,
            isLoading: n,
            isSecurityAccessError: r,
            refetch: i
        } = M(),
        a;
    e[0] === t ? a = e[1] : (a = t == null ? void 0 : t && j(), e[0] = t, e[1] = a);
    let o = a,
        s;
    return e[2] !== o || e[3] !== n || e[4] !== r || e[5] !== i ? (s = {
        hasMalwareAccess: o,
        isLoading: n,
        isError: r,
        refetch: i
    }, e[2] = o, e[3] = n, e[4] = r, e[5] = i, e[6] = s) : s = e[6], s
}
var P, F, I = e((() => {
    P = C(), A(), o(), p(), h(), l(), T(), x(), F = t(y())
}));
export {
    M as n, N as r, I as t
};
//# sourceMappingURL=673c0d9b-kgzqlzvnmub0ce6l.js.map