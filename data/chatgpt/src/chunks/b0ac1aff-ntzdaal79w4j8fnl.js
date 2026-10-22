const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/4596b877-n57tw860awee6n96.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-d7xm9wsvhdfbag9a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/8b34dbc2-ik628tlti8ozm9vq.js", "assets/conversation-small-m7dgsxtvvivh3e6t.js", "assets/30901919-lc79rizhhepnsl3q.js", "assets/c470f5ab-lnsrbaizit3lulwq.js", "assets/0e5afe53-lar0ol3v36kqq3ou.js", "assets/conversation-small-ertg9659.css", "assets/82782bc9-cyj0qqxyrvk6mamy.js", "assets/0f28d127-yvl5zac19kiozrz9.js", "assets/4f9f51e5-oiwcyrh9jr63gwza.js", "assets/ab335e4b-dmp4ndfhc281o827.js", "assets/5f4d7fa0-lmwguqqs8sde7d1l.js", "assets/ab92372e-ftp346fqkk2jaw2a.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fx as n,
    Lx as r,
    Px as i,
    a2 as a,
    c2 as o,
    d2 as s,
    o2 as c
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Rn as l,
    cn as u,
    ln as d,
    zn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    r as p,
    t as m
} from "./0f28d127-yvl5zac19kiozrz9.js";
var h = t({
    WhamKeyboardActionsModal: () => v,
    useSetupBaseWhamKeyboardActions: () => _
});

function g(e) {
    return [{
        key: `toggleKeyboardActions`,
        action: () => s(v),
        actionMessageDescriptor: e.formatMessage({
            id: `wham.keyboardActions.toggleKeyboardActions`,
            defaultMessage: `Show shortcuts`
        }),
        group: i.Settings,
        bindings: [{
            binding: [n.Mod, `/`]
        }]
    }]
}

function _() {
    p(g(f()))
}
var v, y = e((() => {
    o(), r(), m(), c(), l(), d(), v = a(() => u(() => import(`./4596b877-n57tw860awee6n96.js`).then(e => e.WhamKeyboardActionsModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])))
}));
export {
    _ as n, h as r, y as t
};
//# sourceMappingURL=b0ac1aff-ntzdaal79w4j8fnl.js.map