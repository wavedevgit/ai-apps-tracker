import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Hx as t,
    _S as n,
    dS as r,
    fS as i,
    qx as a,
    sS as o
} from "./c2675c8c-oz03twoan08d72ud.js";

function s(e, t = !1) {
    return e === void 0 ? void 0 : (t ? u : l).parse(e)
}
var c, l, u, d = e((() => {
    t(), c = {
        kind: o(`personality_quiz`),
        mode: a([`quiz`, `result`])
    }, l = i({
        ...c,
        expected_revision: r().int().nonnegative().max(2 ** 53 - 1).optional()
    }).refine(e => e.mode !== `result` || e.expected_revision != null), u = i({
        ...c,
        result_id: n().uuid().optional()
    }).refine(e => e.mode !== `result` || e.result_id != null)
}));
export {
    s as n, d as t
};
//# sourceMappingURL=3e7ffcd4-b9aobadm236usm5h.js.map