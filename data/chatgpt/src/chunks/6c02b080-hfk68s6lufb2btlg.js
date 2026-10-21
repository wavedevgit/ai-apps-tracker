import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Mf as t,
    Of as n,
    P5 as r,
    bR as i,
    g8 as a,
    vR as o
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
        n = r(f),
        a = i(),
        o = n?.enabled === !1 ? `` : n?.nameUserMessage,
        s;
    e[0] !== t || e[1] !== o || e[2] !== a?.name ? (s = p({
        fallbackName: t.formatMessage(h.userFallbackName),
        nickname: o,
        profileName: a?.name
    }), e[0] = t, e[1] = o, e[2] = a?.name, e[3] = s) : s = e[3];
    let c;
    e[4] === a?.picture ? c = e[5] : (c = a?.picture?.trim() ?? null, e[4] = a?.picture, e[5] = c);
    let l;
    return e[6] !== s || e[7] !== c ? (l = {
        userName: s,
        userPictureUrl: c
    }, e[6] = s, e[7] = c, e[8] = l) : l = e[8], l
}

function f() {
    return t().data
}

function p({
    fallbackName: e,
    nickname: t,
    profileName: n
}) {
    return (t?.trim() ?? ``) || n?.trim() || e
}
var m, h, g = e((() => {
    m = l(), a(), o(), n(), c(), h = s({
        userFallbackName: {
            id: `Hermes.GptStudio.Builder.SlackPreviewUser.userFallbackName`,
            defaultMessage: `You`
        }
    })
}));
export {
    d as n, g as t
};
//# sourceMappingURL=6c02b080-hfk68s6lufb2btlg.js.map