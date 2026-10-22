import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Em as n,
    ist as r,
    km as i,
    tst as a
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    ifn as o,
    rfn as s
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    n as c,
    t as l
} from "./5983c1e5-n6x2wdealcj7if8q.js";
var u = t({
        decodeCompressedWidgetState: () => h
    }),
    d, f, p, m, h, g = e((() => {
        i(), o(), r(), l(), d = `gzip-json-base64url-v1`, f = a(() => new s({
            capacity: 32
        })), p = e => !!e && typeof e == `object` && !Array.isArray(e), m = e => p(e) && e.__encoding === d && typeof e.__compressed == `string`, h = e => {
            if (e === void 0) return;
            if (!m(e)) return p(e) ? e : void 0;
            let t = f(),
                r = t.get(e.__compressed);
            if (r !== null) return r;
            let i;
            try {
                let t = n(e.__compressed),
                    r = new TextDecoder().decode(c(t)),
                    a = JSON.parse(r);
                i = p(a) ? a : void 0
            } catch (e) {
                console.warn(`Failed to decode compressed widget state`, e)
            }
            return t.set(e.__compressed, i), i
        }
    }));
export {
    h as n, g as r, u as t
};
//# sourceMappingURL=023ae2e0-lwfq2iqz0icia88t.js.map