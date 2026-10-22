const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/192dc310-d44hcq1crtpsz581.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-i89nb6zlze66idsz.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fh0oqifngkf5rvl1.js", "assets/30901919-cmi3nh547dwrqkxv.js", "assets/c470f5ab-ctk9cdujw17c2exz.js", "assets/0e5afe53-fofrudqqfgiodxgc.js", "assets/conversation-small-7l2sfhqg.css", "assets/c2675c8c-4fpunyxk1uf8cfp1.js", "assets/82782bc9-ivetrmhdn140ze7c.js", "assets/8b34dbc2-peb5nzi8z3rrflnv.js", "assets/global-modals-dxg9ukpk.css", "assets/delete-recall-file-confirmation-modal-muywnwdm.css"]))) => i.map(i => d[i]);
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
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    cn as d,
    ln as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Gdt as p,
    Kdt as m
} from "./conversation-small-fh0oqifngkf5rvl1.js";

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
    o(), c(), f(), b = i(() => d(() => import(`./192dc310-d44hcq1crtpsz581.js`).then(e => e.DeleteRecallFileConfirmationModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])))
}));
export {
    _ as a, v as i, x as n, h as o, y as r, g as s, b as t
};
//# sourceMappingURL=eed8f529-o8yufszpkkmji1ws.js.map