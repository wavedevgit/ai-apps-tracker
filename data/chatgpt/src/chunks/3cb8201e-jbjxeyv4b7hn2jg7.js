import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Vn as n
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    J_t as r,
    K_t as i
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function a() {
    let [e, t] = (0, s.useState)(o);
    return (0, s.useEffect)(() => {
        if (!i || typeof MutationObserver > `u`) return;
        let e = new MutationObserver(() => {
            t(o())
        });
        return e.observe(document.documentElement, {
            attributes: !0,
            attributeFilter: [`data-theme`, `class`],
            characterData: !1,
            childList: !1,
            subtree: !1
        }), () => e.disconnect()
    }), e
}

function o() {
    if (!i) return `light`;
    let e = document.documentElement.getAttribute(`data-theme`);
    return e === `dark` || e === `light` ? e : document.documentElement.classList.contains(`dark`) ? `dark` : `light`
}
var s, c = e((() => {
    s = t(n()), r()
}));
export {
    a as n, c as t
};
//# sourceMappingURL=3cb8201e-jbjxeyv4b7hn2jg7.js.map