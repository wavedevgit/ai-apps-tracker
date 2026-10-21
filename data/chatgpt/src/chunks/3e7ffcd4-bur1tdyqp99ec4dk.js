import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $x as t,
    Px as n,
    iS as r,
    lS as i,
    rS as a,
    zx as o
} from "./c2675c8c-p3x4d0bnf7e77o1n.js";

function s(e, t = !1) {
    return e === void 0 ? void 0 : (t ? u : l).parse(e)
}
var c, l, u, d = e((() => {
    n(), c = {
        kind: t(`personality_quiz`),
        mode: o([`quiz`, `result`])
    }, l = r({
        ...c,
        expected_revision: a().int().nonnegative().max(2 ** 53 - 1).optional()
    }).refine(e => e.mode !== `result` || e.expected_revision != null), u = r({
        ...c,
        result_id: i().uuid().optional()
    }).refine(e => e.mode !== `result` || e.result_id != null)
}));
export {
    s as n, d as t
};
//# sourceMappingURL=3e7ffcd4-bur1tdyqp99ec4dk.js.map