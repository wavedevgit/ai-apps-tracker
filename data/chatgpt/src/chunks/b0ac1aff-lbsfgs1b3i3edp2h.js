const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/4596b877-nl6os8787yzhgrsy.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/0f28d127-laypgwdxjcvsjidb.js", "assets/4f9f51e5-oiwcyrh9jr63gwza.js", "assets/ab335e4b-o3cpvhx7q0fve4s8.js", "assets/5f4d7fa0-c53njl56by21uf8z.js", "assets/ab92372e-o4jvgv4y4zodpseo.js"]))) => i.map(i => d[i]);
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
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Rn as l,
    cn as u,
    ln as d,
    zn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    r as p,
    t as m
} from "./0f28d127-laypgwdxjcvsjidb.js";
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
    o(), r(), m(), c(), l(), d(), v = a(() => u(() => import(`./4596b877-nl6os8787yzhgrsy.js`).then(e => e.WhamKeyboardActionsModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])))
}));
export {
    _ as n, h as r, y as t
};
//# sourceMappingURL=b0ac1aff-lbsfgs1b3i3edp2h.js.map