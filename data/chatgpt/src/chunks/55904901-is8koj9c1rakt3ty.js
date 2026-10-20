import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ci as t,
    Iat as n,
    S5 as r,
    g8 as i,
    zat as a
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    FUt as o,
    IUt as s,
    sUt as c
} from "./conversation-small-ikg0dwuw782klweb.js";

function l(e) {
    return r(() => u(e))
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
    let r = a(t);
    if (r != null) {
        e.danger(r);
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
//# sourceMappingURL=55904901-is8koj9c1rakt3ty.js.map