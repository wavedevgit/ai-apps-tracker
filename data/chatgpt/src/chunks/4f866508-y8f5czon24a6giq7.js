import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ok as t,
    yk as n
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Akt as r,
    Dkt as i,
    Ekt as a,
    Gkt as o,
    Jkt as s,
    Lkt as c,
    _At as l,
    bAt as u,
    fFn as d,
    kkt as f,
    tFn as p,
    yAt as m
} from "./conversation-small-i79e9c315w50am5f.js";
async function h(e) {
    l() > 0 && m().invalidate(), await Promise.allSettled([e.invalidateQueries({
        queryKey: f
    }), e.invalidateQueries({
        queryKey: r
    }), e.invalidateQueries({
        queryKey: i
    }), e.invalidateQueries({
        queryKey: a
    }), e.invalidateQueries({
        queryKey: p(!1)
    }), e.invalidateQueries({
        queryKey: p(!0)
    })])
}
async function g(e) {
    await h(e), await Promise.allSettled([e.refetchQueries({
        queryKey: f,
        type: `active`
    }), e.refetchQueries({
        queryKey: r,
        type: `active`
    }), e.refetchQueries({
        queryKey: i,
        type: `active`
    }), e.refetchQueries({
        queryKey: a,
        type: `active`
    }), n(e)])
}

function _(e) {
    return e.fetchQuery({
        queryKey: f,
        queryFn: c,
        staleTime: 0
    })
}

function v(e) {
    return e.some(s) ? y : void 0
}
var y, b = e((() => {
    o(), d(), t(), u(), y = 3e4
}));
export {
    _ as a, g as i, b as n, h as r, v as t
};
//# sourceMappingURL=4f866508-y8f5czon24a6giq7.js.map