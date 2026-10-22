import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ai as n,
    Cst as r,
    Eat as i,
    Fi as a,
    Sst as o,
    wat as s
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Vn as c,
    wn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bzt as u,
    Vzt as d
} from "./conversation-small-m7dgsxtvvivh3e6t.js";

function f(e) {
    return {
        ...e,
        ignoreDisabledGroups: !0,
        action: t => (s.addAction(`wham_keyboard_shortcut`, {
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
    v = l(), n(), i(), u(), y = t(c()), r(), b = o(e => ({
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
            if (e.length !== 0) return a(...e.map(f))
        }, r = [e], t[0] = e, t[1] = n, t[2] = r), (0, y.useEffect)(n, r)
    }
}));
export {
    p as n, h as r, S as t
};
//# sourceMappingURL=0f28d127-yvl5zac19kiozrz9.js.map