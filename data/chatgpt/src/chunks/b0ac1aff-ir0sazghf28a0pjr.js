const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/4596b877-ehc260xz5jgbazqw.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-t80q9ew944ej0mgk.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/8b34dbc2-egl8cz04n8nmlktg.js", "assets/conversation-small-ocicxxw6jegn4vux.js", "assets/30901919-r9pahacmzqudnt4f.js", "assets/c470f5ab-py8gip6x11wq9s88.js", "assets/0e5afe53-bfccq9og5d2mon04.js", "assets/conversation-small-ht8gwtl7.css", "assets/82782bc9-dyzlhaxotei12n1t.js", "assets/0f28d127-nklp1mbg6pt8usv8.js", "assets/4f9f51e5-oiwcyrh9jr63gwza.js", "assets/ab335e4b-bxi9vwt6lqwyt2wb.js", "assets/5f4d7fa0-ozobd91aufocy1xp.js", "assets/ab92372e-h3j4qii1au9y3ur0.js"]))) => i.map(i => d[i]);
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
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Rn as l,
    cn as u,
    ln as d,
    zn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    r as p,
    t as m
} from "./0f28d127-nklp1mbg6pt8usv8.js";
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
    o(), r(), m(), c(), l(), d(), v = a(() => u(() => import(`./4596b877-ehc260xz5jgbazqw.js`).then(e => e.WhamKeyboardActionsModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])))
}));
export {
    _ as n, h as r, y as t
};
//# sourceMappingURL=b0ac1aff-ir0sazghf28a0pjr.js.map