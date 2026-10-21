import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ok as t,
    yk as n
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    $Pn as r,
    Akt as i,
    Dkt as a,
    Ekt as o,
    Gkt as s,
    Jkt as c,
    Lkt as l,
    _At as u,
    bAt as d,
    kkt as f,
    uFn as p,
    yAt as m
} from "./conversation-small-ocicxxw6jegn4vux.js";
async function h(e) {
    u() > 0 && m().invalidate(), await Promise.allSettled([e.invalidateQueries({
        queryKey: f
    }), e.invalidateQueries({
        queryKey: i
    }), e.invalidateQueries({
        queryKey: a
    }), e.invalidateQueries({
        queryKey: o
    }), e.invalidateQueries({
        queryKey: r(!1)
    }), e.invalidateQueries({
        queryKey: r(!0)
    })])
}
async function g(e) {
    await h(e), await Promise.allSettled([e.refetchQueries({
        queryKey: f,
        type: `active`
    }), e.refetchQueries({
        queryKey: i,
        type: `active`
    }), e.refetchQueries({
        queryKey: a,
        type: `active`
    }), e.refetchQueries({
        queryKey: o,
        type: `active`
    }), n(e)])
}

function _(e) {
    return e.fetchQuery({
        queryKey: f,
        queryFn: l,
        staleTime: 0
    })
}

function v(e) {
    return e.some(c) ? y : void 0
}
var y, b = e((() => {
    s(), p(), t(), d(), y = 3e4
}));
export {
    _ as a, g as i, b as n, h as r, v as t
};
//# sourceMappingURL=4f866508-fikfrp15mv2bsf0c.js.map