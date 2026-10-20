import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CS as t,
    HS as n,
    LS as r,
    VS as i,
    qS as a,
    vS as o
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";

function s(e, t = !1) {
    return e === void 0 ? void 0 : (t ? u : l).parse(e)
}
var c, l, u, d = e((() => {
    o(), c = {
        kind: r(`personality_quiz`),
        mode: t([`quiz`, `result`])
    }, l = n({
        ...c,
        expected_revision: i().int().nonnegative().max(2 ** 53 - 1).optional()
    }).refine(e => e.mode !== `result` || e.expected_revision != null), u = n({
        ...c,
        result_id: a().uuid().optional()
    }).refine(e => e.mode !== `result` || e.result_id != null)
}));
export {
    s as n, d as t
};
//# sourceMappingURL=3e7ffcd4-by76fkkk4vyinfpc.js.map