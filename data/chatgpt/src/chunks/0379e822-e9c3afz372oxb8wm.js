const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-hhqkq5ff44o43iar.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/8742b478-ja0nh126im8iybw2.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C0 as t,
    O0 as n,
    S0 as r,
    T0 as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    cn as a,
    ln as o
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    i as s,
    n as c,
    t as l
} from "./3ed411a3-iqxlocnjdudkmqcn.js";

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
        n(p, {
            urls: e,
            displayUrls: e
        });
        return
    }
    u(e)
}
var p, m = e((() => {
    i(), c(), t(), o(), p = r(() => a(() => import(`./a05edf66-hhqkq5ff44o43iar.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))
}));
export {
    f as n, m as t
};
//# sourceMappingURL=0379e822-e9c3afz372oxb8wm.js.map