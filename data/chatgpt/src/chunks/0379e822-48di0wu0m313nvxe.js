const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-gqfpouxeybbsnkkp.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css", "assets/8742b478-dn4h2mddd9nbsw05.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as t,
    X0 as n,
    Z0 as r,
    n2 as i
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    cn as a,
    ln as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    i as s,
    n as c,
    t as l
} from "./3ed411a3-miau4a3jx6gjr5qn.js";

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
        i(p, {
            urls: e,
            displayUrls: e
        });
        return
    }
    u(e)
}
var p, m = e((() => {
    t(), c(), r(), o(), p = n(() => a(() => import(`./a05edf66-gqfpouxeybbsnkkp.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))
}));
export {
    f as n, m as t
};
//# sourceMappingURL=0379e822-48di0wu0m313nvxe.js.map