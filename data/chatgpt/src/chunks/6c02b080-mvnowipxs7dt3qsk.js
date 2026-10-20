import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Df as t,
    M5 as n,
    _R as r,
    jf as i,
    m8 as a,
    yR as o
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as s,
    Rn as c,
    Tn as l,
    zn as u
} from "./2340486e-komxp8tzs51ny4jj.js";

function d() {
    "use forget";
    let e = (0, m.c)(9),
        t = s(),
        r = n(f),
        i = o(),
        a = r?.enabled === !1 ? `` : r?.nameUserMessage,
        c;
    e[0] !== t || e[1] !== a || e[2] !== i?.name ? (c = p({
        fallbackName: t.formatMessage(h.userFallbackName),
        nickname: a,
        profileName: i?.name
    }), e[0] = t, e[1] = a, e[2] = i?.name, e[3] = c) : c = e[3];
    let l;
    e[4] === i?.picture ? l = e[5] : (l = i?.picture?.trim() ?? null, e[4] = i?.picture, e[5] = l);
    let u;
    return e[6] !== c || e[7] !== l ? (u = {
        userName: c,
        userPictureUrl: l
    }, e[6] = c, e[7] = l, e[8] = u) : u = e[8], u
}

function f() {
    return i().data
}

function p({
    fallbackName: e,
    nickname: t,
    profileName: n
}) {
    return (t?.trim() ?? ``) || n?.trim() || e
}
var m, h, g = e((() => {
    m = l(), a(), r(), t(), u(), h = c({
        userFallbackName: {
            id: `Hermes.GptStudio.Builder.SlackPreviewUser.userFallbackName`,
            defaultMessage: `You`
        }
    })
}));
export {
    d as n, g as t
};
//# sourceMappingURL=6c02b080-mvnowipxs7dt3qsk.js.map