import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Btt as n,
    F1 as r,
    Htt as i,
    N1 as a,
    cH as o,
    dH as s,
    iH as c,
    j1 as l,
    tH as u
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as d,
    At as f,
    Bn as p,
    Rn as m,
    Rt as h,
    Ut as g,
    Vn as _,
    wn as v,
    zn as y
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gjn as b,
    Hz as x,
    Wz as S,
    gfn as C,
    hfn as w,
    mfn as T,
    okt as E,
    skt as D
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Lb as O
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as k,
    t as A
} from "./9f7bb6d3-l9ls9y254izawjwa.js";
import {
    c as j,
    n as M,
    o as N,
    s as P,
    t as F
} from "./18432d2f-ok5rpq65i2y70o4a.js";
import {
    n as I,
    t as L
} from "./3f84cbf0-b8zazjbpaafc5ldx.js";

function R() {
    let e = a(`source`) ?? b.CHATGPT_IMAGE_HOME_NAVIGATION_SOURCE_TYPE_UNSPECIFIED;
    l(`source`), n.logStructuredEvent(`ChatgptImageHomeImpression`, {
        source: e
    })
}
var z, B, V, H, U, W, G = e((() => {
    d(), z = v(), k(), C(), j(), M(), I(), x(), i(), o(), c(), r(), E(), O(), B = t(_()), m(), V = p(), H = `/images/prompt`, U = ({
        data: e,
        location: t,
        params: n
    }) => {
        let r = e?.promptItem,
            i = r ? w(r) : null,
            a = typeof i == `string` && i.length > 0 && r ? [{
                property: `og:type`,
                content: `website`
            }, {
                property: `og:image`,
                content: i
            }, {
                property: `og:image:alt`,
                content: T(r)
            }, {
                name: `twitter:card`,
                content: `summary_large_image`
            }, {
                name: `twitter:site`,
                content: `@ChatGPTapp`
            }, {
                name: `twitter:image`,
                content: i
            }, {
                name: `twitter:image:alt`,
                content: T(r)
            }] : u(P),
            o = n.slug ?? ``,
            c = `https://chatgpt.com${s(t.pathname||`${H}/${o}`)}`;
        return [...a, {
            rel: `canonical`,
            href: c
        }]
    }, W = g(function() {
        "use forget";
        let e = (0, z.c)(36),
            t = y(),
            {
                isNoAuthImageGenPromptCarryoverEnabled: n,
                promptItem: r,
                showAllPromptItems: i
            } = f(),
            {
                conversationId: a
            } = h(),
            o;
        e[0] !== t || e[1] !== r.title ? (o = t.formatMessage(N.title, {
            trendTitle: r.title
        }), e[0] = t, e[1] = r.title, e[2] = o) : o = e[2];
        let s = o,
            c;
        e[3] === t ? c = e[4] : (c = t.formatMessage(N.description), e[3] = t, e[4] = c);
        let l = c,
            u, d;
        e[5] === n ? (u = e[6], d = e[7]) : (u = () => {
            S(n)
        }, d = [n], e[5] = n, e[6] = u, e[7] = d), (0, B.useEffect)(u, d), D(R);
        let p;
        e[8] === s ? p = e[9] : (p = (0, V.jsx)(`title`, {
            children: s
        }), e[8] = s, e[9] = p);
        let m;
        e[10] === l ? m = e[11] : (m = (0, V.jsx)(`meta`, {
            name: `description`,
            content: l
        }), e[10] = l, e[11] = m);
        let g;
        e[12] === s ? g = e[13] : (g = (0, V.jsx)(`meta`, {
            property: `og:title`,
            content: s
        }), e[12] = s, e[13] = g);
        let _;
        e[14] === l ? _ = e[15] : (_ = (0, V.jsx)(`meta`, {
            property: `og:description`,
            content: l
        }), e[14] = l, e[15] = _);
        let v;
        e[16] === s ? v = e[17] : (v = (0, V.jsx)(`meta`, {
            name: `twitter:title`,
            content: s
        }), e[16] = s, e[17] = v);
        let b;
        e[18] === l ? b = e[19] : (b = (0, V.jsx)(`meta`, {
            name: `twitter:description`,
            content: l
        }), e[18] = l, e[19] = b);
        let x;
        e[20] !== p || e[21] !== m || e[22] !== g || e[23] !== _ || e[24] !== v || e[25] !== b ? (x = (0, V.jsxs)(`head`, {
            children: [p, m, g, _, v, b]
        }), e[20] = p, e[21] = m, e[22] = g, e[23] = _, e[24] = v, e[25] = b, e[26] = x) : x = e[26];
        let C;
        e[27] !== r || e[28] !== i ? (C = (0, V.jsx)(F, {
            hideMobileHeaderUnderline: !0,
            children: (0, V.jsx)(L, {
                promptItem: r,
                showAllPromptItems: i
            })
        }), e[27] = r, e[28] = i, e[29] = C) : C = e[29];
        let w;
        e[30] !== a || e[31] !== C ? (w = (0, V.jsx)(A, {
            conversationId: a,
            children: C
        }), e[30] = a, e[31] = C, e[32] = w) : w = e[32];
        let T;
        return e[33] !== x || e[34] !== w ? (T = (0, V.jsxs)(V.Fragment, {
            children: [x, w]
        }), e[33] = x, e[34] = w, e[35] = T) : T = e[35], T
    })
}));
e((() => {
    G()
}))();
export {
    W as
    default, U as meta
};
//# sourceMappingURL=(_lang).images.prompt._slug-mqhz6119.js.map