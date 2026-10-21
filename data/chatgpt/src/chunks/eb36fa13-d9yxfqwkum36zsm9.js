import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    a as t,
    i as n,
    n as r,
    t as i
} from "./282bcbc3-jw1cz1bzaznmgw1z.js";

function a(e, t, n) {
    return [r(e).slice(1) || `home`, t, n].filter(Boolean).join(`-`)
}

function o({
    slug: e,
    entryId: n,
    role: o,
    destination: s
}) {
    return r(e) === `/business` && o === `primary` && t(s) === i.CHATGPT_TEAM_ENTRY ? `business-feature-section-try-chat-gpt-business` : a(e, `feature-section-${o}-cta`, n)
}
var s = e((() => {
    n()
}));
export {
    o as n, s as r, a as t
};
//# sourceMappingURL=eb36fa13-d9yxfqwkum36zsm9.js.map