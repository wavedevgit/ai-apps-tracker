const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-e1xi342cs8q8fx50.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m08q51xmfe7gjq3d.js", "assets/30901919-lgbmg5s09xld40kt.js", "assets/c470f5ab-hgik953cu5ujlhdm.js", "assets/0e5afe53-i4tqvmyg38miikw0.js", "assets/conversation-small-dtc7tvsx.css", "assets/8742b478-jj0s7j062zyuagle.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    a2 as t,
    c2 as n,
    d2 as r,
    o2 as i
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    cn as a,
    ln as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    i as s,
    n as c,
    t as l
} from "./3ed411a3-bir32qfoow57sy42.js";

function u(e) {
    window.open(e, `_blank`, `noopener,noreferrer`)
}
async function d(e, t) {
    if (e == null) try {
        return !await s(t)
    } catch {
        return !0
    }
    try {
        return (await l(e.id, [t])).length > 0
    } catch {
        return !0
    }
}
async function f({
    href: e,
    conversation: t
}) {
    if (await d(t, e)) {
        r(p, {
            urls: e,
            displayUrls: e
        });
        return
    }
    u(e)
}
var p, m = e((() => {
    n(), c(), i(), o(), p = t(() => a(() => import(`./a05edf66-e1xi342cs8q8fx50.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))
}));
export {
    f as n, m as t
};
//# sourceMappingURL=0379e822-fs752jt9f9ta0e81.js.map