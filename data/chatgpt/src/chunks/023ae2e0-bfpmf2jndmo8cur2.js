import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jot as n,
    Om as r,
    Tm as i,
    Zot as a
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $dn as o,
    efn as s
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    n as c,
    t as l
} from "./5983c1e5-n6x2wdealcj7if8q.js";
var u = t({
        decodeCompressedWidgetState: () => h
    }),
    d, f, p, m, h, g = e((() => {
        r(), s(), a(), l(), d = `gzip-json-base64url-v1`, f = n(() => new o({
            capacity: 32
        })), p = e => !!e && typeof e == `object` && !Array.isArray(e), m = e => p(e) && e.__encoding === d && typeof e.__compressed == `string`, h = e => {
            if (e === void 0) return;
            if (!m(e)) return p(e) ? e : void 0;
            let t = f(),
                n = t.get(e.__compressed);
            if (n !== null) return n;
            let r;
            try {
                let t = i(e.__compressed),
                    n = new TextDecoder().decode(c(t)),
                    a = JSON.parse(n);
                r = p(a) ? a : void 0
            } catch (e) {
                console.warn(`Failed to decode compressed widget state`, e)
            }
            return t.set(e.__compressed, r), r
        }
    }));
export {
    h as n, g as r, u as t
};
//# sourceMappingURL=023ae2e0-bfpmf2jndmo8cur2.js.map