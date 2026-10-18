import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    Ci as n,
    K8 as r,
    iat as i,
    sat as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    AUt as o,
    kUt as s,
    tUt as c
} from "./conversation-small-fym1zmu9zimymmm1.js";

function l(e) {
    return r(() => u(e))
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

function p(e, t, r, i) {
    e.setQueriesData({
        queryKey: [n]
    }, e => {
        if (e == null) return e;
        let n = !1,
            a = e.pages.map(e => {
                let a = !1,
                    o = e.items.map(e => e.kind !== `directory` || e.id !== t || e.name === r ? e : (n = !0, a = !0, {
                        ...e,
                        name: r,
                        updated_at: i ?? e.updated_at
                    }));
                return a ? {
                    ...e,
                    items: o
                } : e
            });
        return n ? {
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
    t(), o(), c(), i(), g = `recall-folder-path`
}));
export {
    m as a, p as c, _ as i, f as l, l as n, d as o, u as r, h as s, g as t
};
//# sourceMappingURL=55904901-ijw2tgije8ad24dr.js.map