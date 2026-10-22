const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/4596b877-b0ptxxmhalvkplyh.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/8b34dbc2-n194ohawifys3bko.js", "assets/conversation-small-m08q51xmfe7gjq3d.js", "assets/30901919-lgbmg5s09xld40kt.js", "assets/c470f5ab-hgik953cu5ujlhdm.js", "assets/0e5afe53-i4tqvmyg38miikw0.js", "assets/conversation-small-dtc7tvsx.css", "assets/82782bc9-ca5kcqz13rn6iprj.js", "assets/0f28d127-jp21smkll63c8dwa.js", "assets/4f9f51e5-oiwcyrh9jr63gwza.js", "assets/ab335e4b-kzjvvoehd1ep90s2.js", "assets/5f4d7fa0-lv5dqr39i3rotm55.js", "assets/ab92372e-iclt8thnn00e7ucs.js"]))) => i.map(i => d[i]);
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
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Rn as l,
    cn as u,
    ln as d,
    zn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    r as p,
    t as m
} from "./0f28d127-jp21smkll63c8dwa.js";
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
    o(), r(), m(), c(), l(), d(), v = a(() => u(() => import(`./4596b877-b0ptxxmhalvkplyh.js`).then(e => e.WhamKeyboardActionsModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])))
}));
export {
    _ as n, h as r, y as t
};
//# sourceMappingURL=b0ac1aff-k8912bf9kf0uemc1.js.map