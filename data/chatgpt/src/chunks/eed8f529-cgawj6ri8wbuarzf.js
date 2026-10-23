const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/192dc310-f2ikpubzh6rqj5t1.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/c2675c8c-oz03twoan08d72ud.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/global-modals-dxg9ukpk.css", "assets/delete-recall-file-confirmation-modal-muywnwdm.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    DV as t,
    Hk as n,
    Wg as r,
    a2 as i,
    bV as a,
    c2 as o,
    d2 as s,
    o2 as c,
    r_ as l,
    zk as u
} from "./4813494d-mdvd4786a87166cc.js";
import {
    cn as d,
    ln as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Hdt as p,
    Udt as m
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function h(e, {
    libraryFileId: n,
    projectGizmoId: i
}) {
    if (!u()) return;
    let a = t(i);
    if (!n && !a) return;
    let o = e.getQueryData([r]);
    if (o == null) return;
    let s = [],
        c = new Set;
    for (let e of o.pages.flatMap(e => e.items.map(e => e.gizmo))) {
        let t = e.gizmo.id;
        if (c.has(t) || !(a && t === i || n != null && e.files.some(e => p(e) === n))) continue;
        let r = e.gizmo.display.name.trim();
        r.length !== 0 && (s.push(r), c.add(t))
    }
    return s.length > 0 ? {
        projectNames: s
    } : void 0
}
var g = e((() => {
    l(), n(), a(), m()
}));

function _() {
    return !0
}
var v = e((() => {}));

function y(e) {
    let {
        promise: t,
        resolve: n
    } = Promise.withResolvers(), {
        getRetryContent: r,
        ...i
    } = e, a = i;

    function o() {
        s(b, {
            ...a,
            onConfirmDelete: async () => {
                let t = await e.onConfirmDelete();
                if (t) n(!0);
                else {
                    let e = r?.();
                    e != null && (a = {
                        ...a,
                        ...e
                    }, o())
                }
                return t
            },
            onClose: () => {
                n(!1)
            }
        })
    }
    return o(), t
}
var b, x = e((() => {
    o(), c(), f(), b = i(() => d(() => import(`./192dc310-f2ikpubzh6rqj5t1.js`).then(e => e.DeleteRecallFileConfirmationModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])))
}));
export {
    _ as a, v as i, x as n, h as o, y as r, g as s, b as t
};
//# sourceMappingURL=eed8f529-cgawj6ri8wbuarzf.js.map