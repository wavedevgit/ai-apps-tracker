import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ok as t,
    yk as n
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Akt as r,
    Bkt as i,
    CAt as a,
    Jkt as o,
    Mkt as s,
    Nkt as c,
    SAt as l,
    Zkt as u,
    bAt as d,
    kFn as f,
    kkt as p,
    vFn as m
} from "./conversation-small-m08q51xmfe7gjq3d.js";
async function h(e) {
    d() > 0 && l().invalidate(), await Promise.allSettled([e.invalidateQueries({
        queryKey: s
    }), e.invalidateQueries({
        queryKey: c
    }), e.invalidateQueries({
        queryKey: r
    }), e.invalidateQueries({
        queryKey: p
    }), e.invalidateQueries({
        queryKey: m(!1)
    }), e.invalidateQueries({
        queryKey: m(!0)
    })])
}
async function g(e) {
    await h(e), await Promise.allSettled([e.refetchQueries({
        queryKey: s,
        type: `active`
    }), e.refetchQueries({
        queryKey: c,
        type: `active`
    }), e.refetchQueries({
        queryKey: r,
        type: `active`
    }), e.refetchQueries({
        queryKey: p,
        type: `active`
    }), n(e)])
}

function _(e) {
    return e.fetchQuery({
        queryKey: s,
        queryFn: i,
        staleTime: 0
    })
}

function v(e) {
    return e.some(u) ? y : void 0
}
var y, b = e((() => {
    o(), f(), t(), a(), y = 3e4
}));
export {
    _ as a, g as i, b as n, h as r, v as t
};
//# sourceMappingURL=4f866508-lwwle40ltedduaux.js.map