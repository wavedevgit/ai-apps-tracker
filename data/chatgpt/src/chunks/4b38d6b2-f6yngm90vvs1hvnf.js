import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    GSt as t,
    ZSt as n
} from "./conversation-small-fh0oqifngkf5rvl1.js";

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
//# sourceMappingURL=4b38d6b2-f6yngm90vvs1hvnf.js.map