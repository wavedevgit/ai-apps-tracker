import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    dat as t,
    lat as n
} from "./4813494d-tap9fxyhk4ehe0bs.js";

function r(e, t, r) {
    n.addAction(o(e, t), r)
}

function i(e, t, r, i) {
    let a = o(e, t);
    n.addAction(a, {
        ...i,
        severity: `error`
    }), n.addError(r, {
        ...i,
        metric: a
    })
}
var a, o, s = e((() => {
    t(), a = `k12_ui`, o = (e, t) => `${a}_${e}_${t}`
}));
export {
    i as n, r, s as t
};
//# sourceMappingURL=bcd16462-g3agplmuybsph7sm.js.map