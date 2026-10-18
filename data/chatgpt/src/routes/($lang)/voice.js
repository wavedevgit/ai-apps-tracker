import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $V as t,
    QV as n,
    RV as r,
    iH as i,
    o as a,
    s as o,
    tH as s,
    zV as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as l,
    Bn as u,
    Ut as d,
    Wt as f,
    wn as p
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    i as m,
    o as h
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
var g, _, v, y, b, x, S = e((() => {
    l(), g = p(), c(), i(), o(), h(), _ = u(), v = {
        hasRouteMeta: !0
    }, y = ({
        data: e,
        location: i
    }) => {
        let a = e?.voiceMetadata;
        return [{
            title: a?.title ?? `ChatGPT`
        }, ...a?.description == null ? [] : [{
            name: `description`,
            content: a.description
        }, {
            property: `og:title`,
            content: a.title
        }, {
            property: `og:description`,
            content: a.description
        }, {
            name: `twitter:title`,
            content: a.title
        }, {
            name: `twitter:description`,
            content: a.description
        }], ...s(n), t(i.pathname), ...a?.description == null ? [] : r(`/voice/`, {
            useAllProductLocales: !0
        })]
    }, b = d(function() {
        "use forget";
        let e = (0, g.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, _.jsx)(m, {}), e[0] = t) : t = e[0], t
    }), x = f(a)
}));
e((() => {
    S()
}))();
export {
    x as ErrorBoundary, b as
    default, v as handle, y as meta
};
//# sourceMappingURL=(_lang).voice-nqp9097f.js.map