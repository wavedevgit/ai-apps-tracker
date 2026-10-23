import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    cot as n,
    dot as r,
    wi as i,
    y5 as a
} from "./4813494d-mdvd4786a87166cc.js";
import {
    EUt as o,
    TUt as s,
    ZHt as c
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function l(e) {
    return a(() => u(e))
}

function u(e) {
    let t = s(e);
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

function p(e, t, n, r) {
    e.setQueriesData({
        queryKey: [i]
    }, e => {
        if (e == null) return e;
        let i = !1,
            a = e.pages.map(e => {
                let a = !1,
                    o = e.items.map(e => e.kind !== `directory` || e.id !== t || e.name === n ? e : (i = !0, a = !0, {
                        ...e,
                        name: n,
                        updated_at: r ?? e.updated_at
                    }));
                return a ? {
                    ...e,
                    items: o
                } : e
            });
        return i ? {
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
    t(), o(), c(), n(), g = `recall-folder-path`
}));
export {
    m as a, p as c, _ as i, f as l, l as n, d as o, u as r, h as s, g as t
};
//# sourceMappingURL=55904901-djadg0k20igv00dk.js.map