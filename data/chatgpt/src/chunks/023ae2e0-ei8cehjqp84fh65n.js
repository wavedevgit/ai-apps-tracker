import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ot as n,
    Em as r,
    Xot as i,
    km as a
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    efn as o,
    tfn as s
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as c,
    t as l
} from "./5983c1e5-n6x2wdealcj7if8q.js";
var u = t({
        decodeCompressedWidgetState: () => h
    }),
    d, f, p, m, h, g = e((() => {
        a(), s(), n(), l(), d = `gzip-json-base64url-v1`, f = i(() => new o({
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
//# sourceMappingURL=023ae2e0-ei8cehjqp84fh65n.js.map