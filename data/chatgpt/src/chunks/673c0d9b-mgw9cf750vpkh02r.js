import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as n,
    C1 as r,
    DG as i,
    EG as a,
    Pit as o,
    S1 as s,
    aot as c,
    i1 as l,
    iot as u,
    o1 as d,
    oot as f,
    pnt as p,
    rot as m,
    u1 as h,
    ynt as g
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    N as _,
    O as v,
    Vn as y,
    X as b,
    s as x,
    w as S,
    wn as C
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    FMt as w,
    IMt as T
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    r as E,
    t as D
} from "./948fe603-jmn3j8ixfx3i0uqo.js";

function O() {
    return c() ? null : m()
}

function k(e) {
    function t() {
        let t = O(),
            n = l();
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
    h(), u(), o(), x(), E()
}));

function j() {
    return p(`601426104`)
}

function M() {
    "use forget";
    let e = (0, P.c)(22),
        t = s(),
        n = r(),
        i = (0, F.useSyncExternalStore)(f, O, O),
        o, c, l;
    e[0] !== n || e[1] !== i ? (o = n != null && i?.user?.id != null && n.authUserId === i.user.id ? {
        userId: i.user.id,
        accountId: n.id
    } : null, c = v, l = k(o), e[0] = n, e[1] = i, e[2] = o, e[3] = c, e[4] = l) : (o = e[2], c = e[3], l = e[4]);
    let u = c(l),
        p = _(),
        m = u.isError ? void 0 : u.data,
        h = m == null ? void 0 : m.security_access_permission === !0,
        g = m == null ? void 0 : m.security_admin_permission === !0,
        y = m?.is_workspace_allowed === !0,
        b;
    if (e[5] === Symbol.for(`react.memo_cache_sentinel`)) {
        let t = d();
        b = t?.isEnterprisey() === !0 || t?.isSelfServeBusiness() === !0 || t?.isEdu() === !0, e[5] = b
    } else b = e[5];
    let x = b,
        S = T(),
        C = S === `ENABLED` || S === `LOADING` && void 0,
        w = n == null && t.isError || u.isError,
        E = w || y && S === `ERROR`,
        D = !E && (u.isPending || S === `LOADING`),
        A;
    e[6] !== u || e[7] !== n || e[8] !== t || e[9] !== S || e[10] !== o || e[11] !== p ? (A = async () => {
        await Promise.all([o == null ? t.refetch({
            cancelRefetch: !1
        }) : u.refetch({
            cancelRefetch: !1
        }), S === `ERROR` ? p.refetchQueries({
            ...a(n?.getWorkspaceId()),
            exact: !0
        }) : void 0])
    }, e[6] = u, e[7] = n, e[8] = t, e[9] = S, e[10] = o, e[11] = p, e[12] = A) : A = e[12];
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
    P = C(), A(), i(), h(), u(), g(), w(), x(), F = t(y())
}));
export {
    M as n, N as r, I as t
};
//# sourceMappingURL=673c0d9b-mgw9cf750vpkh02r.js.map