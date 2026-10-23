import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BSt as t,
    KSt as n
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function r(e) {
    let n = e.address ? e.name ? `${e.name}, ${e.address}` : e.address : `${e.latitude},${e.longitude}`,
        r = new URLSearchParams({
            api: `1`,
            destination: n
        }),
        i = new URL(t(`https://www.google.com/maps/dir/?${r.toString()}`));
    return i.search = i.searchParams.toString().replaceAll(`%7E`, `~`).replaceAll(`*`, `%2A`), i.toString()
}
var i = e((() => {
    n()
}));
export {
    i as n, r as t
};
//# sourceMappingURL=4b38d6b2-dgul982xp1y9blpi.js.map