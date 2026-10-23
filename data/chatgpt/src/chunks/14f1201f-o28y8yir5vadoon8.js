import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Crt as n,
    I7 as r,
    I8 as i,
    M7 as a,
    N1 as o,
    S5 as s,
    Srt as c,
    j8 as l,
    q1 as u,
    x5 as d,
    yrt as f,
    z8 as p
} from "./4813494d-mdvd4786a87166cc.js";
import {
    s as m,
    x as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    HH as g
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Jc as _,
    Yc as v
} from "./c2675c8c-oz03twoan08d72ud.js";

function y(e) {
    let t = o();
    return t?.id === e && t.isSelfServeBusiness() && t.isOwnerOfAccount()
}

function b(e) {
    return y(e) && C().user.customIDs?.workspace_id === e && c(`2420641598`).get(`enable_usage_requests`, !1)
}

function x(e, t) {
    d().setQueryData([`workspace-seat-upgrade-request-pages`, e], e => e?.pages.some(e => e.items.some(e => e.id === t)) ? {
        ...e,
        pages: e.pages.map(e => ({
            ...e,
            items: e.items.filter(e => e.id !== t),
            total: Math.max(0, e.total - 1)
        }))
    } : e)
}
async function S(e, t) {
    let n = d(),
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
    t(), u(), s(), r(), n(), m(), v(), C = l(() => f().getContext(), e => {
        let t = f();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }), w = p(e => i(() => h({
        queryKey: [`workspace`, e, `usage-requests`],
        initialPageParam: ``,
        queryFn: ({
            pageParam: t,
            signal: n
        }) => a.safeGet(`/accounts/{account_id}/admin/usage_requests`, {
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
    }))), T = p(e => i(() => h({
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
//# sourceMappingURL=14f1201f-o28y8yir5vadoon8.js.map