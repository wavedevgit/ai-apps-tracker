import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    CR as n,
    Nf as r,
    TR as i,
    j5 as a,
    kf as o
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Ln as s,
    Rn as c,
    wn as l,
    zn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function d() {
    "use forget";
    let e = (0, m.c)(9),
        t = u(),
        n = a(f),
        r = i(),
        o = n?.enabled === !1 ? `` : n?.nameUserMessage,
        s;
    e[0] !== t || e[1] !== o || e[2] !== r?.name ? (s = p({
        fallbackName: t.formatMessage(h.userFallbackName),
        nickname: o,
        profileName: r?.name
    }), e[0] = t, e[1] = o, e[2] = r?.name, e[3] = s) : s = e[3];
    let c;
    e[4] === r?.picture ? c = e[5] : (c = r?.picture?.trim() ?? null, e[4] = r?.picture, e[5] = c);
    let l;
    return e[6] !== s || e[7] !== c ? (l = {
        userName: s,
        userPictureUrl: c
    }, e[6] = s, e[7] = c, e[8] = l) : l = e[8], l
}

function f() {
    return r().data
}

function p({
    fallbackName: e,
    nickname: t,
    profileName: n
}) {
    return (t?.trim() ?? ``) || n?.trim() || e
}
var m, h, g = e((() => {
    m = l(), t(), n(), o(), c(), h = s({
        userFallbackName: {
            id: `Hermes.GptStudio.Builder.SlackPreviewUser.userFallbackName`,
            defaultMessage: `You`
        }
    })
}));
export {
    d as n, g as t
};
//# sourceMappingURL=6c02b080-kp5zs83pc1k9l92d.js.map