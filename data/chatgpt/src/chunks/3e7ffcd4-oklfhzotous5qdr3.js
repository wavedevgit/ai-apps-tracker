import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bx as t,
    Fx as n,
    aS as r,
    eS as i,
    iS as a,
    uS as o
} from "./c2675c8c-otyjprdiowg2v8hl.js";

function s(e, t = !1) {
    return e === void 0 ? void 0 : (t ? u : l).parse(e)
}
var c, l, u, d = e((() => {
    n(), c = {
        kind: i(`personality_quiz`),
        mode: t([`quiz`, `result`])
    }, l = r({
        ...c,
        expected_revision: a().int().nonnegative().max(2 ** 53 - 1).optional()
    }).refine(e => e.mode !== `result` || e.expected_revision != null), u = r({
        ...c,
        result_id: o().uuid().optional()
    }).refine(e => e.mode !== `result` || e.result_id != null)
}));
export {
    s as n, d as t
};
//# sourceMappingURL=3e7ffcd4-oklfhzotous5qdr3.js.map