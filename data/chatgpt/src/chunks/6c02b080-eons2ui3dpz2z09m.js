import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CR as t,
    Nf as n,
    TR as r,
    k8 as i,
    kf as a,
    q5 as o
} from "./4813494d-t80q9ew944ej0mgk.js";
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
        n = o(f),
        i = r(),
        a = n?.enabled === !1 ? `` : n?.nameUserMessage,
        s;
    e[0] !== t || e[1] !== a || e[2] !== i?.name ? (s = p({
        fallbackName: t.formatMessage(h.userFallbackName),
        nickname: a,
        profileName: i?.name
    }), e[0] = t, e[1] = a, e[2] = i?.name, e[3] = s) : s = e[3];
    let c;
    e[4] === i?.picture ? c = e[5] : (c = i?.picture?.trim() ?? null, e[4] = i?.picture, e[5] = c);
    let l;
    return e[6] !== s || e[7] !== c ? (l = {
        userName: s,
        userPictureUrl: c
    }, e[6] = s, e[7] = c, e[8] = l) : l = e[8], l
}

function f() {
    return n().data
}

function p({
    fallbackName: e,
    nickname: t,
    profileName: n
}) {
    return (t?.trim() ?? ``) || n?.trim() || e
}
var m, h, g = e((() => {
    m = l(), i(), t(), a(), c(), h = s({
        userFallbackName: {
            id: `Hermes.GptStudio.Builder.SlackPreviewUser.userFallbackName`,
            defaultMessage: `You`
        }
    })
}));
export {
    d as n, g as t
};
//# sourceMappingURL=6c02b080-eons2ui3dpz2z09m.js.map