import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    R8t as t,
    z8t as n
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Sx as r,
    Tx as i
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";

function a(e, n) {
    if (!e) return null;
    let i = new URL(n, `https://chatgpt.com`);
    if (i.origin !== `https://chatgpt.com` || i.search || i.hash) return null;
    let a = i.pathname === `/admin/billing` ? `/billing` : i.pathname === `/admin/permissions` ? `/permissions` : r(i)?.path;
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
    n(), i()
}));
export {
    a as n, s as r, o as t
};
//# sourceMappingURL=d848de1a-jvqez4zk5hv8l51j.js.map