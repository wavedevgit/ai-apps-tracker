import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dit as n,
    Eot as r,
    Pi as i,
    Tot as a,
    ki as o,
    kit as s
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Vn as c,
    wn as l
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Lzt as u,
    Rzt as d
} from "./conversation-small-fym1zmu9zimymmm1.js";

function f(e) {
    return {
        ...e,
        ignoreDisabledGroups: !0,
        action: t => (n.addAction(`wham_keyboard_shortcut`, {
            keyboardActionKey: e.key
        }), e.action(t))
    }
}

function p() {
    "use forget";
    return b(m)
}

function m(e) {
    return e.actions
}

function h(e) {
    "use forget";
    let t = (0, v.c)(7),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? [] : e, t[0] = e, t[1] = n);
    let r = n,
        i = b(_),
        a = b(g),
        o, s;
    t[2] !== r || t[3] !== i || t[4] !== a ? (o = () => (i(r), () => a(r)), s = [r, i, a], t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s) : (o = t[5], s = t[6]), (0, y.useEffect)(o, s), x(r)
}

function g(e) {
    return e.removeActionsActions
}

function _(e) {
    return e.addActionsActions
}
var v, y, b, x, S = e((() => {
    v = l(), o(), s(), u(), y = t(c()), r(), b = a(e => ({
        actions: [],
        addActionsActions: t => e(e => ({
            actions: d([...e.actions, ...t], e => e.key)
        })),
        removeActionsActions: t => {
            let n = t.map(e => e.key);
            return e(e => ({
                actions: e.actions.filter(e => !n.includes(e.key))
            }))
        }
    })), x = e => {
        "use forget";
        let t = (0, v.c)(3),
            n, r;
        t[0] === e ? (n = t[1], r = t[2]) : (n = () => {
            if (e.length !== 0) return i(...e.map(f))
        }, r = [e], t[0] = e, t[1] = n, t[2] = r), (0, y.useEffect)(n, r)
    }
}));
export {
    p as n, h as r, S as t
};
//# sourceMappingURL=0f28d127-g7pcd3sfhh818mzy.js.map