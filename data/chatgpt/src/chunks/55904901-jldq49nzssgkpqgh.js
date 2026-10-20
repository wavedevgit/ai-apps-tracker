import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ci as t,
    Fat as n,
    Rat as r,
    h8 as i,
    x5 as a
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    MUt as o,
    NUt as s,
    iUt as c
} from "./conversation-small-cy5f8pl0g26s86so.js";

function l(e) {
    return a(() => u(e))
}

function u(e) {
    let t = o(e);
    return [g, e, ...t == null ? [] : [t]]
}

function d(e, t, n) {
    t != null && e.setQueryData(l(t), {
        items: n
    })
}

function f(e, t, n) {
    e.setQueriesData({
        queryKey: [g]
    }, e => {
        if (e == null) return e;
        let r = !1,
            i = e.items.map(e => e.id !== t || e.name === n ? e : (r = !0, {
                ...e,
                name: n
            }));
        return r ? {
            items: i
        } : e
    })
}

function p(e, n, r, i) {
    e.setQueriesData({
        queryKey: [t]
    }, e => {
        if (e == null) return e;
        let t = !1,
            a = e.pages.map(e => {
                let a = !1,
                    o = e.items.map(e => e.kind !== `directory` || e.id !== n || e.name === r ? e : (t = !0, a = !0, {
                        ...e,
                        name: r,
                        updated_at: i ?? e.updated_at
                    }));
                return a ? {
                    ...e,
                    items: o
                } : e
            });
        return t ? {
            ...e,
            pages: a
        } : e
    })
}

function m(e, t, n, r = null) {
    if (typeof e != `object` || !e) return null;
    let i = Reflect.get(e, `id`);
    if (!(typeof i == `string` && i.length > 0)) return null;
    let a = Reflect.get(e, `name`),
        o = typeof a == `string` && a.length > 0 ? a : t,
        s = n,
        c = Reflect.get(e, `parent_directory_id`);
    n == null ? s = null : typeof c == `string` ? s = c : Object.is(c, null) && (s = null);
    let l = Reflect.get(e, `updated_at`);
    return {
        id: i,
        isPending: !1,
        name: o,
        parent_directory_id: s,
        updated_at: typeof l == `string` ? l : r
    }
}

function h(e, t, n) {
    let i = r(t);
    if (i != null) {
        e.danger(i);
        return
    }
    e.danger(n, {
        error: t
    })
}
var g, _ = e((() => {
    i(), s(), c(), n(), g = `recall-folder-path`
}));
export {
    m as a, p as c, _ as i, f as l, l as n, d as o, u as r, h as s, g as t
};
//# sourceMappingURL=55904901-jldq49nzssgkpqgh.js.map