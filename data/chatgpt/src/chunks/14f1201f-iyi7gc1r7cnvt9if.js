import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    Gnt as n,
    Hnt as r,
    I1 as i,
    Knt as a,
    S1 as o,
    b5 as s,
    f8 as c,
    j7 as l,
    p8 as u,
    v8 as d,
    x5 as f,
    x8 as p
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    s as m,
    x as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    fH as g
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    ol as _,
    sl as v
} from "./c2675c8c-fpv9s4kvd412dyap.js";

function y(e) {
    let t = o();
    return t?.id === e && t.isSelfServeBusiness() && t.isOwnerOfAccount()
}

function b(e) {
    return y(e) && C().user.customIDs?.workspace_id === e && n(`2420641598`).get(`enable_usage_requests`, !1)
}

function x(e, t) {
    s().setQueryData([`workspace-seat-upgrade-request-pages`, e], e => e?.pages.some(e => e.items.some(e => e.id === t)) ? {
        ...e,
        pages: e.pages.map(e => ({
            ...e,
            items: e.items.filter(e => e.id !== t),
            total: Math.max(0, e.total - 1)
        }))
    } : e)
}
async function S(e, t) {
    let n = s(),
        r = [`workspace`, e, `usage-requests`],
        i = E(e, t);
    await Promise.all([n.cancelQueries({
        queryKey: r,
        exact: !0
    }), n.cancelQueries({
        queryKey: i,
        exact: !0
    })]), n.setQueryData(r, e => e && {
        ...e,
        pages: e.pages.map(e => ({
            ...e,
            items: e.items.filter(e => e.id !== t)
        }))
    }), await n.invalidateQueries({
        queryKey: i,
        exact: !0,
        refetchType: `none`
    })
}
var C, w, T, E, D = e((() => {
    c(), i(), f(), t(), a(), m(), v(), C = u(() => r().getContext(), e => {
        let t = r();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }), w = p(e => d(() => h({
        queryKey: [`workspace`, e, `usage-requests`],
        initialPageParam: ``,
        queryFn: ({
            pageParam: t,
            signal: n
        }) => l.safeGet(`/accounts/{account_id}/admin/usage_requests`, {
            parameters: {
                path: {
                    account_id: e
                },
                query: {
                    limit: 50,
                    cursor: t || void 0
                }
            },
            signal: n
        }),
        getNextPageParam: e => e.next_cursor ?? void 0,
        staleTime: 3e4
    }))), T = p(e => d(() => h({
        queryKey: [`workspace-seat-upgrade-request-pages`, e],
        initialPageParam: 0,
        queryFn: ({
            pageParam: t
        }) => _(e, t, ``, `seat_upgrade`),
        getNextPageParam: (e, t) => {
            let n = new Set(t.flatMap(e => e.items.map(e => e.id))).size;
            return n < e.total ? n : void 0
        },
        staleTime: 3e4
    }))), E = (e, t, n) => t ? [`workspace`, e, `usage-request-detail`, t] : [`workspace`, e, `owner-usage-recovery`, ...n ? [n] : []]
}));

function O(e, t) {
    return !e.unlimited && e.limit != null && (t === `unlimited_platform_max` || typeof t == `number` && t > e.limit)
}

function k(e, t, n) {
    let r = t.current_usage?.credits,
        i = e.current_usage?.credits;
    return e.reason !== `STANDARD_SEAT_REQUESTED` && e.reason !== `PREMIUM_SEAT_REQUESTED` && e.status === `pending` && e.requester_is_active && e.requester_account_user_id === t.requester_account_user_id && r != null && i != null && O(r, i.unlimited ? `unlimited_platform_max` : i.limit ?? null) && (n === `unlimited_platform_max` ? i.unlimited : n == null || !i.unlimited && i.limit === n)
}

function A(e) {
    if (typeof e != `object` || !e || !(`usageRequestSeatUpgrade` in e)) return !1;
    let t = e.usageRequestSeatUpgrade;
    return typeof t == `object` && !!t && `workspaceId` in t && typeof t.workspaceId == `string` && `accountUserId` in t && typeof t.accountUserId == `string` && `seatType` in t && (t.seatType === "default" || t.seatType === `prolite`)
}

function j(e, t) {
    return `/admin/members?${new URLSearchParams({tab:`members`,search:t,manage_seats:e})}`
}
var M = e((() => {
    g()
}));
export {
    A as a, b as c, T as d, E as f, M as i, x as l, j as n, y as o, w as p, O as r, D as s, k as t, S as u
};
//# sourceMappingURL=14f1201f-iyi7gc1r7cnvt9if.js.map