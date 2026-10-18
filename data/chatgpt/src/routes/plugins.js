import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J8 as n,
    Pi as r,
    Y8 as i,
    cot as a,
    ki as o,
    lot as s,
    o1 as c,
    u1 as l
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as u,
    At as d,
    Bn as f,
    Ht as ee,
    N as te,
    Pt as p,
    Rn as m,
    Ut as h,
    Vn as g,
    s as _,
    ut as v,
    wn as y,
    xt as b,
    y as x,
    zn as ne
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Hfn as re,
    Mrt as S,
    Nrt as C,
    RFt as ie,
    Ufn as ae,
    VFt as oe,
    a as se,
    egn as ce,
    jrt as le,
    krt as w,
    o as T,
    tgn as E
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Cv as D,
    Fv as O,
    Hv as k,
    Ig as A,
    Pv as j,
    Rg as M,
    Wv as N,
    by as P,
    dv as F,
    dy as I,
    gy as L,
    my as R,
    oy as ue,
    ry as z,
    vy as B
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as V,
    r as H,
    t as U
} from "./55be7374-gvdthqnsy7avjfwo.js";

function de() {
    "use forget";
    let e = (0, W.c)(21),
        t = ne(),
        n = te(),
        [r, i] = ee(),
        a = (0, G.useRef)(!1),
        o = (0, G.useRef)(void 0),
        s;
    e[0] === r ? s = e[1] : (s = j(r), e[0] = r, e[1] = s);
    let l = s.isNativeMobileView,
        u;
    e[2] === r ? u = e[3] : (u = D(r), e[2] = r, e[3] = u);
    let d = u,
        f;
    e[4] === r ? f = e[5] : (f = r.get(`country`), e[4] = r, e[5] = f);
    let p = f,
        m;
    e[6] === r ? m = e[7] : (m = r.get(`platform`) ?? `chat`, e[6] = r, e[7] = m);
    let h = m,
        g;
    e[8] !== t || e[9] !== r ? (g = r.get(`locale`) ?? t.locale, e[8] = t, e[9] = r, e[10] = g) : g = e[10];
    let _ = g,
        v;
    e[11] === Symbol.for(`react.memo_cache_sentinel`) ? (v = c()?.isWorkspaceAccount() ?? !1, e[11] = v) : v = e[11];
    let y = v,
        b, x;
    return e[12] !== p || e[13] !== d || e[14] !== l || e[15] !== _ || e[16] !== h || e[17] !== n || e[18] !== i ? (b = () => {
        !l || a.current && (!d || o.current === d) || (a.current = !0, o.current = d, N({
            queryClient: n,
            requestContext: {
                country: p,
                platform: h,
                locale: _,
                hasWorkspace: y
            }
        }).then(e => {
            let {
                appId: t,
                connectorLinked: r,
                installResult: i
            } = e;
            if (!t || !r) {
                if (!t && i === `absent` && C({
                        installAttemptId: d,
                        queryClient: n
                    })) return;
                w(d);
                return
            }
            S({
                connectorId: t,
                installAttemptId: d,
                installResult: i
            })
        }).finally(() => {
            i(fe, {
                replace: !0
            })
        }))
    }, x = [p, y, d, l, _, h, n, i], e[12] = p, e[13] = d, e[14] = l, e[15] = _, e[16] = h, e[17] = n, e[18] = i, e[19] = b, e[20] = x) : (b = e[19], x = e[20]), (0, G.useEffect)(b, x), null
}

function fe(e) {
    let t = new URLSearchParams(e);
    return t.delete(F), t
}
var W, G, pe = e((() => {
        W = y(), le(), k(), O(), l(), _(), G = t(g()), m(), u()
    })),
    K, q, me = e((() => {
        K = {
            title: `ChatGPT Plugins | Browse and add plugins to ChatGPT`,
            description: `Discover and add plugins that extend ChatGPT with new tools, capabilities, and workflows.`,
            image: {
                url: `https://cdn.openai.com/chatgpt/share-og.png`,
                width: 1600,
                height: 900,
                alt: `Abstract art with orange gradients on a blue background and the white ChatGPT logo.`
            }
        }, q = () => [{
            title: K.title
        }, {
            name: `description`,
            content: K.description
        }, {
            property: `og:type`,
            content: `website`
        }, {
            property: `og:title`,
            content: K.title
        }, {
            property: `og:description`,
            content: K.description
        }, {
            property: `og:image`,
            content: K.image.url
        }, {
            property: `og:image:width`,
            content: K.image.width.toString()
        }, {
            property: `og:image:height`,
            content: K.image.height.toString()
        }, {
            property: `og:image:alt`,
            content: K.image.alt
        }, {
            name: `twitter:title`,
            content: K.title
        }, {
            name: `twitter:description`,
            content: K.description
        }, {
            name: `twitter:card`,
            content: `summary_large_image`
        }, {
            name: `twitter:site`,
            content: `@ChatGPTapp`
        }, {
            name: `twitter:image`,
            content: K.image.url
        }, {
            name: `twitter:image:alt`,
            content: K.image.alt
        }]
    }));

function he(e) {
    throw b(`/apps${new URL(e.url).search}`)
}
async function ge(e) {
    if (!H(e)) return null;
    let t = n(),
        r = U(e),
        i = t.prefetchQuery(I(r, {
            enableInternalSsrRouting: !0
        }));
    return a().session?.user != null && (t.prefetchQuery(ue(r)), t.prefetchInfiniteQuery(L(r)), r.hasWorkspace && (t.prefetchInfiniteQuery(B(r)), t.prefetchInfiniteQuery(z(r)), t.prefetchInfiniteQuery(R(r)))), await i, t
}
var J, Y, X, Z, Q, $, _e = e((() => {
    u(), J = y(), ce(), o(), ae(), ie(), V(), pe(), T(), P(), i(), M(), s(), _(), Y = t(g()), X = f(), me(), Z = ({
        request: e
    }) => (oe() || he(e), ge(e), {
        dehydratedState: null
    }), Q = () => !1, $ = h(function() {
        "use forget";
        let e = (0, J.c)(8),
            t = d(),
            n = p(),
            i, a;
        e[0] === n ? (i = e[1], a = e[2]) : (i = () => r(A(e => {
            re(e, {
                location: `Keyboard command`
            }), e.defaultPrevented || E(n)
        })), a = [n], e[0] = n, e[1] = i, e[2] = a), (0, Y.useEffect)(i, a);
        let o, s, c;
        e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, X.jsx)(de, {}), s = (0, X.jsx)(se, {}), c = (0, X.jsx)(v, {}), e[3] = o, e[4] = s, e[5] = c) : (o = e[3], s = e[4], c = e[5]);
        let l;
        return e[6] === t.dehydratedState ? l = e[7] : (l = (0, X.jsxs)(x, {
            state: t.dehydratedState,
            children: [o, s, c]
        }), e[6] = t.dehydratedState, e[7] = l), l
    })
}));
e((() => {
    _e()
}))();
export {
    Z as clientLoader, $ as
    default, q as meta, Q as shouldRevalidate
};
//# sourceMappingURL=plugins-nc6xeday.js.map