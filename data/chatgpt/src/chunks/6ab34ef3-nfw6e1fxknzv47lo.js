import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    jat as t,
    pl as n,
    ul as r
} from "./4813494d-ed29bs6yiwucn7st.js";

function i(e) {
    if (e instanceof r) return e.payload.message;
    let t = e?.message ?? ``;
    return t.trim().startsWith(`500`) ? `Internal server error. Check console for details.` : t.length > 140 ? t.slice(0, 140) + `...` : t
}
var a = e((() => {
    t(), n()
}));
export {
    a as n, i as t
};
//# sourceMappingURL=6ab34ef3-nfw6e1fxknzv47lo.js.map