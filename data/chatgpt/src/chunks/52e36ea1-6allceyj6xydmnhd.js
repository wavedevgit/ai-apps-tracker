import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    a as t,
    s as n
} from "./eec17ee5-pfmqng99zntx5uvn.js";

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
//# sourceMappingURL=52e36ea1-6allceyj6xydmnhd.js.map