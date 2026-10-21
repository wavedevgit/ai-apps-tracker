const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/192dc310-j30klf0u4g4emh17.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-tap9fxyhk4ehe0bs.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-nmt18uiom3b14vca.js", "assets/30901919-niqyapppecmq5jkn.js", "assets/c470f5ab-uuoa2gfm4goj6p9f.js", "assets/0e5afe53-f7up6uuou2fv3lyg.js", "assets/conversation-small-bwtqiuwj.css", "assets/c2675c8c-h5ybkhdzcoblzzdu.js", "assets/82782bc9-g3liom11amtlr9kq.js", "assets/8b34dbc2-ojcl97ddvu2212q0.js", "assets/global-modals-lv5n3ujm.css", "assets/delete-recall-file-confirmation-modal-muywnwdm.css"]))) => i.map(i => d[i]);
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
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    cn as d,
    ln as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Qdt as p,
    Zdt as m
} from "./conversation-small-nmt18uiom3b14vca.js";

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
    t(), o(), f(), b = a(() => d(() => import(`./192dc310-j30klf0u4g4emh17.js`).then(e => e.DeleteRecallFileConfirmationModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])))
}));
export {
    _ as a, v as i, x as n, h as o, y as r, g as s, b as t
};
//# sourceMappingURL=eed8f529-gmvnsyqoh95eoqrj.js.map