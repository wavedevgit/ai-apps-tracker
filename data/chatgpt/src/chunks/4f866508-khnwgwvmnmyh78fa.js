import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IO as t,
    YO as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Ekt as r,
    Ikt as i,
    MPn as a,
    Okt as o,
    Tkt as s,
    Wkt as c,
    bPn as l,
    gAt as u,
    kkt as d,
    qkt as f,
    vAt as p,
    yAt as m
} from "./conversation-small-fym1zmu9zimymmm1.js";
async function h(e) {
    u() > 0 && p().invalidate(), await Promise.allSettled([e.invalidateQueries({
        queryKey: o
    }), e.invalidateQueries({
        queryKey: d
    }), e.invalidateQueries({
        queryKey: r
    }), e.invalidateQueries({
        queryKey: s
    }), e.invalidateQueries({
        queryKey: l(!1)
    }), e.invalidateQueries({
        queryKey: l(!0)
    })])
}
async function g(e) {
    await h(e), await Promise.allSettled([e.refetchQueries({
        queryKey: o,
        type: `active`
    }), e.refetchQueries({
        queryKey: d,
        type: `active`
    }), e.refetchQueries({
        queryKey: r,
        type: `active`
    }), e.refetchQueries({
        queryKey: s,
        type: `active`
    }), n(e)])
}

function _(e) {
    return e.fetchQuery({
        queryKey: o,
        queryFn: i,
        staleTime: 0
    })
}

function v(e) {
    return e.some(f) ? y : void 0
}
var y, b = e((() => {
    c(), a(), t(), m(), y = 3e4
}));
export {
    _ as a, g as i, b as n, h as r, v as t
};
//# sourceMappingURL=4f866508-khnwgwvmnmyh78fa.js.map