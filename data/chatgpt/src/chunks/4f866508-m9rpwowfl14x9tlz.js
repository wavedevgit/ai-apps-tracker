import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    mk as t,
    tk as n
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    DAt as r,
    EAt as i,
    IPn as a,
    Ikt as o,
    Lkt as s,
    Nkt as c,
    Pkt as l,
    Qkt as u,
    Wkt as d,
    qPn as f,
    tAt as p,
    wAt as m
} from "./conversation-small-ikg0dwuw782klweb.js";
async function h(e) {
    m() > 0 && i().invalidate(), await Promise.allSettled([e.invalidateQueries({
        queryKey: o
    }), e.invalidateQueries({
        queryKey: s
    }), e.invalidateQueries({
        queryKey: l
    }), e.invalidateQueries({
        queryKey: c
    }), e.invalidateQueries({
        queryKey: a(!1)
    }), e.invalidateQueries({
        queryKey: a(!0)
    })])
}
async function g(e) {
    await h(e), await Promise.allSettled([e.refetchQueries({
        queryKey: o,
        type: `active`
    }), e.refetchQueries({
        queryKey: s,
        type: `active`
    }), e.refetchQueries({
        queryKey: l,
        type: `active`
    }), e.refetchQueries({
        queryKey: c,
        type: `active`
    }), t(e)])
}

function _(e) {
    return e.fetchQuery({
        queryKey: o,
        queryFn: d,
        staleTime: 0
    })
}

function v(e) {
    return e.some(p) ? y : void 0
}
var y, b = e((() => {
    u(), f(), n(), r(), y = 3e4
}));
export {
    _ as a, g as i, b as n, h as r, v as t
};
//# sourceMappingURL=4f866508-m9rpwowfl14x9tlz.js.map