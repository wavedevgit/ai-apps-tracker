import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ok as t,
    yk as n
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Akt as r,
    Bkt as i,
    CAt as a,
    Jkt as o,
    MFn as s,
    Mkt as c,
    Nkt as l,
    SAt as u,
    Zkt as d,
    bAt as f,
    kkt as p,
    xFn as m
} from "./conversation-small-fh0oqifngkf5rvl1.js";
async function h(e) {
    f() > 0 && u().invalidate(), await Promise.allSettled([e.invalidateQueries({
        queryKey: c
    }), e.invalidateQueries({
        queryKey: l
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
        queryKey: c,
        type: `active`
    }), e.refetchQueries({
        queryKey: l,
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
        queryKey: c,
        queryFn: i,
        staleTime: 0
    })
}

function v(e) {
    return e.some(d) ? y : void 0
}
var y, b = e((() => {
    o(), s(), t(), a(), y = 3e4
}));
export {
    _ as a, g as i, b as n, h as r, v as t
};
//# sourceMappingURL=4f866508-db2hlkp9ibsclbd7.js.map