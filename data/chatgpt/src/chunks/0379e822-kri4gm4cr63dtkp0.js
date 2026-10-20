const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-ih7uzopt7zad60du.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/8742b478-n9ctg1vxa2pdnusu.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J0 as t,
    Y0 as n,
    Z0 as r,
    e2 as i
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    ln as a,
    un as o
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    i as s,
    n as c,
    t as l
} from "./3ed411a3-e9fz4l2rt3pjugcf.js";

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
    r(), c(), n(), o(), p = t(() => a(() => import(`./a05edf66-ih7uzopt7zad60du.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))
}));
export {
    f as n, m as t
};
//# sourceMappingURL=0379e822-kri4gm4cr63dtkp0.js.map