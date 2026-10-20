import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ek as t,
    pk as n
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Akt as r,
    CAt as i,
    NPn as a,
    Nkt as o,
    Pkt as s,
    Qkt as c,
    Vkt as l,
    WPn as u,
    Ykt as d,
    jkt as f,
    wAt as p,
    xAt as m
} from "./conversation-small-cy5f8pl0g26s86so.js";
async function h(e) {
    m() > 0 && i().invalidate(), await Promise.allSettled([e.invalidateQueries({
        queryKey: o
    }), e.invalidateQueries({
        queryKey: s
    }), e.invalidateQueries({
        queryKey: f
    }), e.invalidateQueries({
        queryKey: r
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
        queryKey: f,
        type: `active`
    }), e.refetchQueries({
        queryKey: r,
        type: `active`
    }), n(e)])
}

function _(e) {
    return e.fetchQuery({
        queryKey: o,
        queryFn: l,
        staleTime: 0
    })
}

function v(e) {
    return e.some(c) ? y : void 0
}
var y, b = e((() => {
    d(), u(), t(), p(), y = 3e4
}));
export {
    _ as a, g as i, b as n, h as r, v as t
};
//# sourceMappingURL=4f866508-ok01gojch43k1jc4.js.map