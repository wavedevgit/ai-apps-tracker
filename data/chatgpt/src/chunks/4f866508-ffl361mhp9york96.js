import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    mk as t,
    tk as n
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    DAt as r,
    EAt as i,
    Ikt as a,
    JPn as o,
    LPn as s,
    Lkt as c,
    Nkt as l,
    Pkt as u,
    Qkt as d,
    Wkt as f,
    tAt as p,
    wAt as m
} from "./conversation-small-kzsalymynzuddxee.js";
async function h(e) {
    m() > 0 && i().invalidate(), await Promise.allSettled([e.invalidateQueries({
        queryKey: a
    }), e.invalidateQueries({
        queryKey: c
    }), e.invalidateQueries({
        queryKey: u
    }), e.invalidateQueries({
        queryKey: l
    }), e.invalidateQueries({
        queryKey: s(!1)
    }), e.invalidateQueries({
        queryKey: s(!0)
    })])
}
async function g(e) {
    await h(e), await Promise.allSettled([e.refetchQueries({
        queryKey: a,
        type: `active`
    }), e.refetchQueries({
        queryKey: c,
        type: `active`
    }), e.refetchQueries({
        queryKey: u,
        type: `active`
    }), e.refetchQueries({
        queryKey: l,
        type: `active`
    }), t(e)])
}

function _(e) {
    return e.fetchQuery({
        queryKey: a,
        queryFn: f,
        staleTime: 0
    })
}

function v(e) {
    return e.some(p) ? y : void 0
}
var y, b = e((() => {
    d(), o(), n(), r(), y = 3e4
}));
export {
    _ as a, g as i, b as n, h as r, v as t
};
//# sourceMappingURL=4f866508-ffl361mhp9york96.js.map