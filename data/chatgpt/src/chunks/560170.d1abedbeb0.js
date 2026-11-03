export const __rspack_esm_ids = [560170];
export const __webpack_modules__ = {
    e7Sz: (function(r, e, f) {
        var o = f("Racj"),
            n = Math.floor,
            t = Math.min;
        r.exports = function(r, e, f, a) {
            var l = 0,
                _ = null == r ? 0 : r.length;
            if (0 === _) return 0;
            for (var s = (e = f(e)) != e, i = null === e, u = o(e), v = void 0 === e; l < _;) {
                var c = n((l + _) / 2),
                    p = f(r[c]),
                    d = void 0 !== p,
                    x = null === p,
                    h = p == p,
                    m = o(p);
                if (s) var k = a || h;
                else k = v ? h && (a || d) : i ? h && d && (a || !x) : u ? h && d && !x && (a || !m) : !x && !m && (a ? p <= e : p < e);
                k ? l = c + 1 : _ = c
            }
            return t(_, 0xfffffffe)
        }
    })
};