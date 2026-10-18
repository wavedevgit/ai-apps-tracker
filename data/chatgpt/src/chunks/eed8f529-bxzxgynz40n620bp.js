const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/192dc310-l9o825p06lzhj1zc.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css", "assets/delete-recall-file-confirmation-modal-muywnwdm.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C0 as t,
    Lg as n,
    O0 as r,
    S0 as i,
    T0 as a,
    eV as o,
    hk as s,
    qB as c,
    vk as l,
    wg as u
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    cn as d,
    ln as f
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gdt as p,
    Wdt as m
} from "./conversation-small-fym1zmu9zimymmm1.js";

function h(e, {
    libraryFileId: t,
    projectGizmoId: n
}) {
    if (!s()) return;
    let r = o(n);
    if (!t && !r) return;
    let i = e.getQueryData([u]);
    if (i == null) return;
    let a = [],
        c = new Set;
    for (let e of i.pages.flatMap(e => e.items.map(e => e.gizmo))) {
        let i = e.gizmo.id;
        if (c.has(i) || !(r && i === n || t != null && e.files.some(e => m(e) === t))) continue;
        let o = e.gizmo.display.name.trim();
        o.length !== 0 && (a.push(o), c.add(i))
    }
    return a.length > 0 ? {
        projectNames: a
    } : void 0
}
var g = e((() => {
    n(), l(), c(), p()
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
        getRetryContent: i,
        ...a
    } = e, o = a;

    function s() {
        r(b, {
            ...o,
            onConfirmDelete: async () => {
                let t = await e.onConfirmDelete();
                if (t) n(!0);
                else {
                    let e = i?.();
                    e != null && (o = {
                        ...o,
                        ...e
                    }, s())
                }
                return t
            },
            onClose: () => {
                n(!1)
            }
        })
    }
    return s(), t
}
var b, x = e((() => {
    a(), t(), f(), b = i(() => d(() => import(`./192dc310-l9o825p06lzhj1zc.js`).then(e => e.DeleteRecallFileConfirmationModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])))
}));
export {
    _ as a, v as i, x as n, h as o, y as r, g as s, b as t
};
//# sourceMappingURL=eed8f529-bxzxgynz40n620bp.js.map