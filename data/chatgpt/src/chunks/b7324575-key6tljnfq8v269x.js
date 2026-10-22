import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    wn as t
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Cg as n,
    _g as r,
    wg as i,
    yg as a
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    r as o,
    t as s
} from "./24ecc29f-oasziq1p4m981leh.js";
import {
    n as c,
    t as l
} from "./cec13ce4-i25e8h18l2yy88qx.js";

function u(e) {
    "use forget";
    let t = (0, d.c)(16),
        r, i;
    if (t[0] !== e) {
        let {
            eventHandlers: n,
            ...a
        } = e;
        r = n, i = l(a), t[0] = e, t[1] = r, t[2] = i
    } else r = t[1], i = t[2];
    let {
        fetch: s,
        key: c
    } = i, u;
    t[3] === s ? u = t[4] : (u = s ? () => s(n()) : null, t[3] = s, t[4] = u);
    let p = u,
        m;
    t[5] === s ? m = t[6] : (m = async e => {
        if (!s || !o()) return null;
        let t = await (await s(e)).blob();
        return t.type ? t : new Blob([t], {
            type: f(e)
        })
    }, t[5] = s, t[6] = m);
    let h = m,
        g = a(p, c, r),
        _, v;
    t[7] === g ? (_ = t[8], v = t[9]) : ({
        togglePlayback: _,
        ...v
    } = g, t[7] = g, t[8] = _, t[9] = v);
    let y;
    t[10] === _ ? y = t[11] : (y = () => {
        o() && _()
    }, t[10] = _, t[11] = y);
    let b = y,
        x;
    return t[12] !== h || t[13] !== b || t[14] !== v ? (x = {
        ...v,
        loadAudioBlobForFormat: h,
        togglePlayback: b
    }, t[12] = h, t[13] = b, t[14] = v, t[15] = x) : x = t[15], x
}
var d, f, p = e((() => {
    d = t(), s(), c(), r(), i(), f = e => {
        switch (e) {
            case `aac`:
                return `audio/aac`;
            case `mp3`:
                return `audio/mpeg`;
            case `opus`:
                return `audio/ogg`;
            default:
                return `audio/mpeg`
        }
    }
}));
export {
    u as n, p as t
};
//# sourceMappingURL=b7324575-key6tljnfq8v269x.js.map