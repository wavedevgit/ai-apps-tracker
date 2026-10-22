import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F8t as t,
    I8t as n
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Jb as r,
    Kb as i
} from "./c2675c8c-d62p1sdq1sy52umm.js";

function a(e, n) {
    if (!e) return null;
    let r = new URL(n, `https://chatgpt.com`);
    if (r.origin !== `https://chatgpt.com` || r.search || r.hash) return null;
    let a = r.pathname === `/admin/billing` ? `/billing` : r.pathname === `/admin/permissions` ? `/permissions` : i(r)?.path;
    return a == null ? null : t(a, e)
}

function o(e, t = ``) {
    let n = `/admin/access-tokens${t}`;
    return {
        legacyUrl: n,
        adminConsoleUrl: a(e, n)
    }
}
var s = e((() => {
    n(), r()
}));
export {
    a as n, s as r, o as t
};
//# sourceMappingURL=d848de1a-njv6s6zeert6yin6.js.map