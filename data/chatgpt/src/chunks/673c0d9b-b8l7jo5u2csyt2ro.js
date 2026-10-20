import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $G as n,
    Fot as r,
    Iot as i,
    L1 as a,
    Lot as o,
    N1 as s,
    Pot as c,
    QG as l,
    Wnt as u,
    X1 as d,
    Xnt as f,
    Y1 as p,
    dat as m,
    j1 as h,
    sat as g
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    VMt as T
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    r as E,
    t as D
} from "./948fe603-cpky6ejpmy9ea971.js";

function O() {
    return i() ? null : c()
}

function k(e) {
    function t() {
        let t = O(),
            n = h();
        if (e == null || t?.user?.id !== e.userId || n?.authUserId !== e.userId || n.id !== e.accountId) throw Error(`Codex Security access identity is no longer active`);
        return t
    }
    return S({
        queryKey: [`workspace-settings`, e?.accountId, `codex-security-access`, e?.userId],
        queryFn: e == null ? b : async ({
            signal: n
        }) => {
            let r = t(),
                i = await D.safeGet(`/aardvark/plugin/access`, {
                    authOption: g.Required,
                    accessToken: r.accessToken,
                    additionalHeaders: {
                        "ChatGPT-Account-ID": e.accountId
                    },
                    preserveAccountIdOnRetry: !0,
                    signal: n
                });
            return t(), i
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
    a(), r(), m(), x(), E()
}));

function j() {
    return u(`601426104`)
}

function M() {
    "use forget";
    let e = (0, P.c)(22),
        t = p(),
        n = d(),
        r = (0, F.useSyncExternalStore)(o, O, O),
        i, a, c;
    e[0] !== n || e[1] !== r ? (i = n != null && r?.user?.id != null && n.authUserId === r.user.id ? {
        userId: r.user.id,
        accountId: n.id
    } : null, a = v, c = k(i), e[0] = n, e[1] = r, e[2] = i, e[3] = a, e[4] = c) : (i = e[2], a = e[3], c = e[4]);
    let u = a(c),
        f = _(),
        m = u.isError ? void 0 : u.data,
        h = m == null ? void 0 : m.security_access_permission === !0,
        g = m == null ? void 0 : m.security_admin_permission === !0,
        y = m?.is_workspace_allowed === !0,
        b;
    if (e[5] === Symbol.for(`react.memo_cache_sentinel`)) {
        let t = s();
        b = t?.isEnterprisey() === !0 || t?.isSelfServeBusiness() === !0 || t?.isEdu() === !0, e[5] = b
    } else b = e[5];
    let x = b,
        S = T(),
        C = S === `ENABLED` || S === `LOADING` && void 0,
        w = n == null && t.isError || u.isError,
        E = w || y && S === `ERROR`,
        D = !E && (u.isPending || S === `LOADING`),
        A;
    e[6] !== u || e[7] !== n || e[8] !== t || e[9] !== S || e[10] !== i || e[11] !== f ? (A = async () => {
        await Promise.all([i == null ? t.refetch({
            cancelRefetch: !1
        }) : u.refetch({
            cancelRefetch: !1
        }), S === `ERROR` ? f.refetchQueries({
            ...l(n?.getWorkspaceId()),
            exact: !0
        }) : void 0])
    }, e[6] = u, e[7] = n, e[8] = t, e[9] = S, e[10] = i, e[11] = f, e[12] = A) : A = e[12];
    let j;
    return e[13] !== h || e[14] !== g || e[15] !== C || e[16] !== E || e[17] !== w || e[18] !== y || e[19] !== D || e[20] !== A ? (j = {
        hasAccess: h,
        hasCodexCloudAccess: C,
        hasNewUiAccess: h,
        hasAdminAccess: g,
        isEligibleWorkspace: x,
        isWorkspaceAllowed: y,
        isLoading: D,
        isError: E,
        isSecurityAccessError: w,
        refetch: A
    }, e[13] = h, e[14] = g, e[15] = C, e[16] = E, e[17] = w, e[18] = y, e[19] = D, e[20] = A, e[21] = j) : j = e[21], j
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
    P = C(), A(), n(), a(), r(), f(), w(), x(), F = t(y())
}));
export {
    M as n, N as r, I as t
};
//# sourceMappingURL=673c0d9b-b8l7jo5u2csyt2ro.js.map