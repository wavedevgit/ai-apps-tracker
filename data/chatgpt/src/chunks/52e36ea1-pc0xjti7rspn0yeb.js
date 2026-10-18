import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    a as t,
    s as n
} from "./eec17ee5-lm6v8wlbrzui7fe1.js";

function r({
    queryClient: e,
    previous: n,
    next: r
}) {
    if (n.pluginId === r.pluginId && n.workspaceId === r.workspaceId && n.transport === r.transport && n.includeDependencies === r.includeDependencies) return;
    let i = t(n.pluginId, n.workspaceId, n.transport, n.includeDependencies),
        a = n.transport !== `sheep` || !n.includeDependencies;
    e.cancelQueries({
        queryKey: i,
        exact: a
    }), e.invalidateQueries({
        queryKey: i,
        exact: a,
        refetchType: `none`
    })
}
var i = e((() => {
    n()
}));
export {
    r as n, i as t
};
//# sourceMappingURL=52e36ea1-pc0xjti7rspn0yeb.js.map