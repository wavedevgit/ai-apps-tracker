import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as t,
    Df as n,
    _R as r,
    f8 as i,
    jf as a,
    yR as o
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Ln as s,
    Rn as c,
    wn as l,
    zn as u
} from "./2340486e-oc6d2eodbcrmxur3.js";

function d() {
    "use forget";
    let e = (0, m.c)(9),
        n = u(),
        r = t(f),
        i = o(),
        a = r?.enabled === !1 ? `` : r?.nameUserMessage,
        s;
    e[0] !== n || e[1] !== a || e[2] !== i?.name ? (s = p({
        fallbackName: n.formatMessage(h.userFallbackName),
        nickname: a,
        profileName: i?.name
    }), e[0] = n, e[1] = a, e[2] = i?.name, e[3] = s) : s = e[3];
    let c;
    e[4] === i?.picture ? c = e[5] : (c = i?.picture?.trim() ?? null, e[4] = i?.picture, e[5] = c);
    let l;
    return e[6] !== s || e[7] !== c ? (l = {
        userName: s,
        userPictureUrl: c
    }, e[6] = s, e[7] = c, e[8] = l) : l = e[8], l
}

function f() {
    return a().data
}

function p({
    fallbackName: e,
    nickname: t,
    profileName: n
}) {
    return (t?.trim() ?? ``) || n?.trim() || e
}
var m, h, g = e((() => {
    m = l(), i(), r(), n(), c(), h = s({
        userFallbackName: {
            id: `Hermes.GptStudio.Builder.SlackPreviewUser.userFallbackName`,
            defaultMessage: `You`
        }
    })
}));
export {
    d as n, g as t
};
//# sourceMappingURL=6c02b080-jzw4ohve9a4zqt5v.js.map