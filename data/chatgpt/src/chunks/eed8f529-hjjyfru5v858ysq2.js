const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/192dc310-llsx4nwep4hb5a5n.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css", "assets/c2675c8c-ejvs9hq3rwjwsbcv.js", "assets/82782bc9-fcii2id0x6lspwtj.js", "assets/8b34dbc2-dtawqv9t1aqckqj4.js", "assets/global-modals-lv5n3ujm.css", "assets/delete-recall-file-confirmation-modal-muywnwdm.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as t,
    Lk as n,
    Pk as r,
    Ug as i,
    X0 as a,
    Z0 as o,
    bV as s,
    n2 as c,
    n_ as l,
    pV as u
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    cn as d,
    ln as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Qdt as p,
    Zdt as m
} from "./conversation-small-ikg0dwuw782klweb.js";

function h(e, {
    libraryFileId: t,
    projectGizmoId: n
}) {
    if (!r()) return;
    let a = s(n);
    if (!t && !a) return;
    let o = e.getQueryData([i]);
    if (o == null) return;
    let c = [],
        l = new Set;
    for (let e of o.pages.flatMap(e => e.items.map(e => e.gizmo))) {
        let r = e.gizmo.id;
        if (l.has(r) || !(a && r === n || t != null && e.files.some(e => m(e) === t))) continue;
        let i = e.gizmo.display.name.trim();
        i.length !== 0 && (c.push(i), l.add(r))
    }
    return c.length > 0 ? {
        projectNames: c
    } : void 0
}
var g = e((() => {
    l(), n(), u(), p()
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
        c(b, {
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
    t(), o(), f(), b = a(() => d(() => import(`./192dc310-llsx4nwep4hb5a5n.js`).then(e => e.DeleteRecallFileConfirmationModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])))
}));
export {
    _ as a, v as i, x as n, h as o, y as r, g as s, b as t
};
//# sourceMappingURL=eed8f529-hjjyfru5v858ysq2.js.map