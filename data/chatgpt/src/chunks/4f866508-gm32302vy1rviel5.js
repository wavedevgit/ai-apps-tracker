import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ek as t,
    pk as n
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Akt as r,
    Dkt as i,
    Kkt as a,
    LPn as o,
    Okt as s,
    Rkt as c,
    YPn as l,
    Ykt as u,
    bAt as d,
    jkt as f,
    vAt as p,
    xAt as m
} from "./conversation-small-cawdu7il3ha6y70c.js";
async function h(e) {
    p() > 0 && d().invalidate(), await Promise.allSettled([e.invalidateQueries({
        queryKey: r
    }), e.invalidateQueries({
        queryKey: f
    }), e.invalidateQueries({
        queryKey: s
    }), e.invalidateQueries({
        queryKey: i
    }), e.invalidateQueries({
        queryKey: o(!1)
    }), e.invalidateQueries({
        queryKey: o(!0)
    })])
}
async function g(e) {
    await h(e), await Promise.allSettled([e.refetchQueries({
        queryKey: r,
        type: `active`
    }), e.refetchQueries({
        queryKey: f,
        type: `active`
    }), e.refetchQueries({
        queryKey: s,
        type: `active`
    }), e.refetchQueries({
        queryKey: i,
        type: `active`
    }), n(e)])
}

function _(e) {
    return e.fetchQuery({
        queryKey: r,
        queryFn: c,
        staleTime: 0
    })
}

function v(e) {
    return e.some(u) ? y : void 0
}
var y, b = e((() => {
    a(), l(), t(), m(), y = 3e4
}));
export {
    _ as a, g as i, b as n, h as r, v as t
};
//# sourceMappingURL=4f866508-gm32302vy1rviel5.js.map