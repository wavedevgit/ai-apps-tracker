import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $G as n,
    Fot as r,
    Gnt as i,
    Iot as a,
    Lot as o,
    M1 as s,
    P1 as c,
    R1 as l,
    Rot as u,
    X1 as d,
    Z1 as f,
    Znt as p,
    cat as m,
    eK as h,
    fat as g
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
    UMt as w,
    WMt as T
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    r as E,
    t as D
} from "./948fe603-ihl5i6wjdqpjpp6p.js";

function O() {
    return o() ? null : r()
}

function k(e) {
    function t() {
        let t = O(),
            n = s();
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
                    authOption: m.Required,
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
    l(), a(), g(), x(), E()
}));

function j() {
    return i(`601426104`)
}

function M() {
    "use forget";
    let e = (0, P.c)(22),
        t = d(),
        r = f(),
        i = (0, F.useSyncExternalStore)(u, O, O),
        a, o, s;
    e[0] !== r || e[1] !== i ? (a = r != null && i?.user?.id != null && r.authUserId === i.user.id ? {
        userId: i.user.id,
        accountId: r.id
    } : null, o = v, s = k(a), e[0] = r, e[1] = i, e[2] = a, e[3] = o, e[4] = s) : (a = e[2], o = e[3], s = e[4]);
    let l = o(s),
        p = _(),
        m = l.isError ? void 0 : l.data,
        h = m == null ? void 0 : m.security_access_permission === !0,
        g = m == null ? void 0 : m.security_admin_permission === !0,
        y = m?.is_workspace_allowed === !0,
        b;
    if (e[5] === Symbol.for(`react.memo_cache_sentinel`)) {
        let t = c();
        b = t?.isEnterprisey() === !0 || t?.isSelfServeBusiness() === !0 || t?.isEdu() === !0, e[5] = b
    } else b = e[5];
    let x = b,
        S = T(),
        C = S === `ENABLED` || S === `LOADING` && void 0,
        w = r == null && t.isError || l.isError,
        E = w || y && S === `ERROR`,
        D = !E && (l.isPending || S === `LOADING`),
        A;
    e[6] !== l || e[7] !== r || e[8] !== t || e[9] !== S || e[10] !== a || e[11] !== p ? (A = async () => {
        await Promise.all([a == null ? t.refetch({
            cancelRefetch: !1
        }) : l.refetch({
            cancelRefetch: !1
        }), S === `ERROR` ? p.refetchQueries({
            ...n(r?.getWorkspaceId()),
            exact: !0
        }) : void 0])
    }, e[6] = l, e[7] = r, e[8] = t, e[9] = S, e[10] = a, e[11] = p, e[12] = A) : A = e[12];
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
    P = C(), A(), h(), l(), a(), p(), w(), x(), F = t(y())
}));
export {
    M as n, N as r, I as t
};
//# sourceMappingURL=673c0d9b-lrojaas10la4mx4n.js.map