import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A6t as t,
    E6t as n
} from "./conversation-small-m7dgsxtvvivh3e6t.js";

function r(e) {
    return ({
        queryKey: n
    }) => t(n, e)
}

function i(e, t, n) {
    if (e == null) return e;
    let r = e.items.findIndex(e => e.id === t);
    if (r === -1) return e;
    let i = [...e.items];
    return i[r] = {
        ...i[r],
        credit_limits: n
    }, {
        ...e,
        items: i
    }
}

function a({
    queryClient: e,
    workspaceId: t
}) {
    let n = r(t);
    return e.getQueriesData({
        predicate: n
    })
}

function o({
    queryClient: e,
    snapshot: t
}) {
    t.forEach(([t, n]) => {
        e.setQueryData(t, n)
    })
}

function s({
    queryClient: e,
    workspaceId: t,
    userId: n,
    creditLimits: a
}) {
    let o = r(t);
    e.setQueriesData({
        predicate: o
    }, e => i(e, n, a))
}
async function c({
    queryClient: e,
    workspaceId: t
}) {
    let n = r(t);
    await e.cancelQueries({
        predicate: n
    })
}
async function l({
    queryClient: e,
    workspaceId: t,
    refetchType: n = `active`
}) {
    let i = r(t);
    await e.invalidateQueries({
        predicate: i,
        refetchType: n
    })
}
var u = e((() => {
    n()
}));
export {
    o as a, l as i, a as n, s as o, u as r, c as t
};
//# sourceMappingURL=af584902-n064zf6slnlfjs15.js.map