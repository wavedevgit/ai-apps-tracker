import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B8t as t,
    z8t as n
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Vb as r,
    Wb as i
} from "./c2675c8c-9bs3zsr3vq259es7.js";

function a(e, t) {
    if (!e) return null;
    let i = new URL(t, `https://chatgpt.com`);
    if (i.origin !== `https://chatgpt.com` || i.search || i.hash) return null;
    let a = i.pathname === `/admin/billing` ? `/billing` : i.pathname === `/admin/permissions` ? `/permissions` : r(i)?.path;
    return a == null ? null : n(a, e)
}

function o(e, t = ``) {
    let n = `/admin/access-tokens${t}`;
    return {
        legacyUrl: n,
        adminConsoleUrl: a(e, n)
    }
}
var s = e((() => {
    t(), i()
}));
export {
    a as n, s as r, o as t
};
//# sourceMappingURL=d848de1a-hkyhx2xpy3i3arje.js.map