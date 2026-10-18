import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Sot as n,
    sm as r,
    um as i,
    yot as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bdn as o,
    zdn as s
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as c,
    t as l
} from "./5983c1e5-n6x2wdealcj7if8q.js";
var u = t({
        decodeCompressedWidgetState: () => h
    }),
    d, f, p, m, h, g = e((() => {
        i(), o(), n(), l(), d = `gzip-json-base64url-v1`, f = a(() => new s({
            capacity: 32
        })), p = e => !!e && typeof e == `object` && !Array.isArray(e), m = e => p(e) && e.__encoding === d && typeof e.__compressed == `string`, h = e => {
            if (e === void 0) return;
            if (!m(e)) return p(e) ? e : void 0;
            let t = f(),
                n = t.get(e.__compressed);
            if (n !== null) return n;
            let i;
            try {
                let t = r(e.__compressed),
                    n = new TextDecoder().decode(c(t)),
                    a = JSON.parse(n);
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
//# sourceMappingURL=023ae2e0-cb51ck5oetayyina.js.map