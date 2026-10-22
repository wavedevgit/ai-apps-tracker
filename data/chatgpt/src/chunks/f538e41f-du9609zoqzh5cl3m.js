import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as n,
    Vn as r
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function i({
    value: e,
    children: t
}) {
    return (0, s.jsx)(c.Provider, {
        value: e,
        children: t
    })
}

function a() {
    let e = (0, o.useContext)(c);
    if (!e) throw Error(`useWhamTaskPageContext must be used within its provider`);
    return e
}
var o, s, c, l = e((() => {
    o = t(r()), s = n(), c = (0, o.createContext)(null)
}));

function u({
    value: e,
    children: t
}) {
    return (0, p.jsx)(m.Provider, {
        value: e,
        children: t
    })
}

function d() {
    let e = (0, f.useContext)(m);
    if (!e) throw Error(`useTaskComments must be used within a TaskCommentsProvider`);
    return e
}
var f, p, m, h = e((() => {
    f = t(r()), p = n(), m = (0, f.createContext)(null)
}));
export {
    l as a, i, h as n, a as o, d as r, u as t
};
//# sourceMappingURL=f538e41f-du9609zoqzh5cl3m.js.map