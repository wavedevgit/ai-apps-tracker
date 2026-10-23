import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ok as t,
    yk as n
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Dkt as r,
    Fkt as i,
    HFn as a,
    Kkt as o,
    Okt as s,
    Tkt as c,
    Ukt as l,
    _At as u,
    gAt as d,
    jFn as f,
    mAt as p,
    wkt as m
} from "./conversation-small-bcbq46iub1p0ca1t.js";
async function h(e) {
    p() > 0 && d().invalidate(), await Promise.allSettled([e.invalidateQueries({
        queryKey: r
    }), e.invalidateQueries({
        queryKey: s
    }), e.invalidateQueries({
        queryKey: c
    }), e.invalidateQueries({
        queryKey: m
    }), e.invalidateQueries({
        queryKey: f(!1)
    }), e.invalidateQueries({
        queryKey: f(!0)
    })])
}
async function g(e) {
    await h(e), await Promise.allSettled([e.refetchQueries({
        queryKey: r,
        type: `active`
    }), e.refetchQueries({
        queryKey: s,
        type: `active`
    }), e.refetchQueries({
        queryKey: c,
        type: `active`
    }), e.refetchQueries({
        queryKey: m,
        type: `active`
    }), n(e)])
}

function _(e) {
    return e.fetchQuery({
        queryKey: r,
        queryFn: i,
        staleTime: 0
    })
}

function v(e) {
    return e.some(o) ? y : void 0
}
var y, b = e((() => {
    l(), a(), t(), u(), y = 3e4
}));
export {
    _ as a, g as i, b as n, h as r, v as t
};
//# sourceMappingURL=4f866508-nx1lmkigi4ro0s38.js.map