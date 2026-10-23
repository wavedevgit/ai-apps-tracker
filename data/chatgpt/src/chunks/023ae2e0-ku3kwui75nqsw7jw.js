import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Am as n,
    Cst as r,
    Dm as i,
    Est as a
} from "./4813494d-mdvd4786a87166cc.js";
import {
    bfn as o,
    xfn as s
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    n as c,
    t as l
} from "./5983c1e5-n6x2wdealcj7if8q.js";
var u = t({
        decodeCompressedWidgetState: () => h
    }),
    d, f, p, m, h, g = e((() => {
        n(), s(), a(), l(), d = `gzip-json-base64url-v1`, f = r(() => new o({
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
//# sourceMappingURL=023ae2e0-ku3kwui75nqsw7jw.js.map