import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Crt as n,
    Pat as r,
    Rat as i,
    U1 as a,
    V1 as o,
    XG as s,
    ZG as c,
    _rt as l,
    a0 as u,
    cst as d,
    lst as f,
    o0 as p,
    q1 as m,
    sst as h,
    ust as g
} from "./4813494d-mdvd4786a87166cc.js";
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
    NMt as w,
    PMt as T
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    r as E,
    t as D
} from "./948fe603-r9e0wcvjpd8t98jm.js";

function O() {
    return f() ? null : h()
}

function k(e) {
    function t() {
        let t = O(),
            n = o();
        if (e == null || t?.user?.id !== e.userId || n?.authUserId !== e.userId || n.id !== e.accountId) throw Error(`Codex Security access identity is no longer active`);
        return t
    }
    return S({
        queryKey: [`workspace-settings`, e?.accountId, `codex-security-access`, e?.userId],
        queryFn: e == null ? b : async ({
            signal: n
        }) => {
            let i = t(),
                a = await D.safeGet(`/aardvark/plugin/access`, {
                    authOption: r.Required,
                    accessToken: i.accessToken,
                    additionalHeaders: {
                        "ChatGPT-Account-ID": e.accountId
                    },
                    preserveAccountIdOnRetry: !0,
                    signal: n
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
    m(), d(), i(), x(), E()
}));

function j() {
    return l(`601426104`)
}

function M() {
    "use forget";
    let e = (0, P.c)(22),
        t = u(),
        n = p(),
        r = (0, F.useSyncExternalStore)(g, O, O),
        i, o, c;
    e[0] !== n || e[1] !== r ? (i = n != null && r?.user?.id != null && n.authUserId === r.user.id ? {
        userId: r.user.id,
        accountId: n.id
    } : null, o = v, c = k(i), e[0] = n, e[1] = r, e[2] = i, e[3] = o, e[4] = c) : (i = e[2], o = e[3], c = e[4]);
    let l = o(c),
        d = _(),
        f = l.isError ? void 0 : l.data,
        m = f == null ? void 0 : f.security_access_permission === !0,
        h = f == null ? void 0 : f.security_admin_permission === !0,
        y = f?.is_workspace_allowed === !0,
        b;
    if (e[5] === Symbol.for(`react.memo_cache_sentinel`)) {
        let t = a();
        b = t?.isEnterprisey() === !0 || t?.isSelfServeBusiness() === !0 || t?.isEdu() === !0, e[5] = b
    } else b = e[5];
    let x = b,
        S = T(),
        C = S === `ENABLED` || S === `LOADING` && void 0,
        w = n == null && t.isError || l.isError,
        E = w || y && S === `ERROR`,
        D = !E && (l.isPending || S === `LOADING`),
        A;
    e[6] !== l || e[7] !== n || e[8] !== t || e[9] !== S || e[10] !== i || e[11] !== d ? (A = async () => {
        await Promise.all([i == null ? t.refetch({
            cancelRefetch: !1
        }) : l.refetch({
            cancelRefetch: !1
        }), S === `ERROR` ? d.refetchQueries({
            ...s(n?.getWorkspaceId()),
            exact: !0
        }) : void 0])
    }, e[6] = l, e[7] = n, e[8] = t, e[9] = S, e[10] = i, e[11] = d, e[12] = A) : A = e[12];
    let j;
    return e[13] !== m || e[14] !== h || e[15] !== C || e[16] !== E || e[17] !== w || e[18] !== y || e[19] !== D || e[20] !== A ? (j = {
        hasAccess: m,
        hasCodexCloudAccess: C,
        hasNewUiAccess: m,
        hasAdminAccess: h,
        isEligibleWorkspace: x,
        isWorkspaceAllowed: y,
        isLoading: D,
        isError: E,
        isSecurityAccessError: w,
        refetch: A
    }, e[13] = m, e[14] = h, e[15] = C, e[16] = E, e[17] = w, e[18] = y, e[19] = D, e[20] = A, e[21] = j) : j = e[21], j
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
    P = C(), A(), c(), m(), d(), n(), w(), x(), F = t(y())
}));
export {
    M as n, N as r, I as t
};
//# sourceMappingURL=673c0d9b-dg1a8y9uzorizeey.js.map