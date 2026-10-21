import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    YSt as t,
    tCt as n
} from "./conversation-small-nmt18uiom3b14vca.js";

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
//# sourceMappingURL=4b38d6b2-kxl2liqwm2mhlyfg.js.map