const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/4596b877-fnsgblj65gi3aar1.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-i89nb6zlze66idsz.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/8b34dbc2-peb5nzi8z3rrflnv.js", "assets/conversation-small-fh0oqifngkf5rvl1.js", "assets/30901919-cmi3nh547dwrqkxv.js", "assets/c470f5ab-ctk9cdujw17c2exz.js", "assets/0e5afe53-fofrudqqfgiodxgc.js", "assets/conversation-small-7l2sfhqg.css", "assets/82782bc9-ivetrmhdn140ze7c.js", "assets/0f28d127-drqip5p1sq28j1wz.js", "assets/4f9f51e5-oiwcyrh9jr63gwza.js", "assets/ab335e4b-c22y7k1vd92g39x0.js", "assets/5f4d7fa0-dmql0slc19dabffe.js", "assets/ab92372e-jb2vjro7gykvju5j.js"]))) => i.map(i => d[i]);
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
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Rn as l,
    cn as u,
    ln as d,
    zn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    r as p,
    t as m
} from "./0f28d127-drqip5p1sq28j1wz.js";
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
    o(), r(), m(), c(), l(), d(), v = a(() => u(() => import(`./4596b877-fnsgblj65gi3aar1.js`).then(e => e.WhamKeyboardActionsModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])))
}));
export {
    _ as n, h as r, y as t
};
//# sourceMappingURL=b0ac1aff-iz0nnl8kkjobax54.js.map