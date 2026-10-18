import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    J8 as n,
    K6 as r,
    V6 as i,
    X$ as a,
    Y6 as o,
    Y8 as s,
    a7 as c,
    hnt as l,
    l7 as u,
    u1 as d,
    vnt as f,
    ynt as p
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    s as m,
    x as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    uH as g
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    ol as _,
    sl as v
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

function y(e) {
    let t = a();
    return t?.id === e && t.isSelfServeBusiness() && t.isOwnerOfAccount()
}

function b(e) {
    return y(e) && C().user.customIDs?.workspace_id === e && f(`2420641598`).get(`enable_usage_requests`, !1)
}

function x(e, t) {
    n().setQueryData([`workspace-seat-upgrade-request-pages`, e], e => e?.pages.some(e => e.items.some(e => e.id === t)) ? {
        ...e,
        pages: e.pages.map(e => ({
            ...e,
            items: e.items.filter(e => e.id !== t),
            total: Math.max(0, e.total - 1)
        }))
    } : e)
}
async function S(e, t) {
    let r = n(),
        i = [`workspace`, e, `usage-requests`],
        a = E(e, t);
    await Promise.all([r.cancelQueries({
        queryKey: i,
        exact: !0
    }), r.cancelQueries({
        queryKey: a,
        exact: !0
    })]), r.setQueryData(i, e => e && {
        ...e,
        pages: e.pages.map(e => ({
            ...e,
            items: e.items.filter(e => e.id !== t)
        }))
    }), await r.invalidateQueries({
        queryKey: a,
        exact: !0,
        refetchType: `none`
    })
}
var C, w, T, E, D = e((() => {
    t(), d(), s(), u(), p(), m(), v(), C = i(() => l().getContext(), e => {
        let t = l();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }), w = o(e => r(() => h({
        queryKey: [`workspace`, e, `usage-requests`],
        initialPageParam: ``,
        queryFn: ({
            pageParam: t,
            signal: n
        }) => c.safeGet(`/accounts/{account_id}/admin/usage_requests`, {
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
    }))), T = o(e => r(() => h({
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
//# sourceMappingURL=14f1201f-coizqbbp4qlei36w.js.map