import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as n,
    Qtt as r,
    Ui as i,
    Wi as a,
    cot as o,
    cz as s,
    ent as c,
    lot as l,
    lz as u,
    mk as d,
    vk as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as p,
    Bn as ee,
    Bt as te,
    Pt as ne,
    Ut as re,
    Vn as m,
    Wt as h,
    _t as g,
    jt as _,
    ut as v,
    wn as ie,
    xt as y
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    AGn as b,
    Dl as x,
    El as S,
    HFt as C,
    MGn as w,
    RFt as ae,
    WFt as oe,
    jGn as se
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Bp as ce,
    D as T,
    G as E,
    O as D,
    Rp as O,
    U as k,
    Vp as A,
    W as j,
    b as M,
    bu as N,
    by as P,
    ey as F,
    xu as I,
    y as L,
    zp as R
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as z,
    t as B
} from "./f507a508-dv1rfyxvpkroj0s1.js";
import {
    r as V,
    t as H
} from "./db2560a5-hvp8sdtr5ycd1znw.js";
async function U({
    hash: e,
    params: t,
    request: n
}) {
    let r = new URL(n.url),
        i = e ?? r.hash;
    if (r.pathname === `/apps` || r.pathname === `/apps/`) return y(`/plugins${r.search}${i}`);
    if (!t.id || !/^\/apps\/[^/]+\/[^/]+\/?$/.test(r.pathname)) return null;
    let a = await F(t.id, H(r.searchParams), o().session?.account?.id, {
        enableInternalSsrRouting: !0
    }).catch(() => null);
    return y(`${a?`/plugins/${encodeURIComponent(a)}`:`/plugins`}${r.search}${i}`)
}

function W(e) {
    let t = new URL(e.url),
        n = window.__reactRouterDataRouter?.state.navigation.location;
    return n?.pathname === t.pathname && n.search === t.search ? n.hash : window.location.pathname === t.pathname && window.location.search === t.search ? window.location.hash : t.hash
}

function le() {
    r.setItem(n.AppDirectoryVisited, !0)
}
var G, K, q, J, Y, X, Z, Q, $, ue = e((() => {
    p(), G = ie(), V(), I(), E(), a(), D(), z(), P(), ae(), f(), M(), w(), x(), u(), A(), c(), l(), K = t(m()), q = ee(), J = {
        title: `ChatGPT Apps | Browse and chat with your favorite apps in ChatGPT`,
        description: `Discover and connect powerful apps like Canva, Photoshop, and Zillow to create, learn, and do more right in your ChatGPT conversations.`,
        image: {
            url: `https://cdn.openai.com/chatgpt/app_directory/chatgpt_apps_open_graph.jpg`,
            width: 1200,
            height: 630,
            alt: `Row of circular app icons on an abstract background with the ChatGPT Apps icon in the center.`
        }
    }, Y = () => [{
        title: J.title
    }, {
        name: `description`,
        content: J.description
    }, {
        property: `og:type`,
        content: `website`
    }, {
        property: `og:title`,
        content: J.title
    }, {
        property: `og:description`,
        content: J.description
    }, {
        property: `og:image`,
        content: J.image.url
    }, {
        property: `og:image:width`,
        content: J.image.width.toString()
    }, {
        property: `og:image:height`,
        content: J.image.height.toString()
    }, {
        property: `og:image:alt`,
        content: J.image.alt
    }, {
        name: `twitter:title`,
        content: J.title
    }, {
        name: `twitter:description`,
        content: J.description
    }, {
        name: `twitter:card`,
        content: `summary_large_image`
    }, {
        name: `twitter:site`,
        content: `@ChatGPTapp`
    }, {
        name: `twitter:image`,
        content: J.image.url
    }, {
        name: `twitter:image:alt`,
        content: J.image.alt
    }], X = async ({
        params: e,
        request: t,
        serverLoader: n
    }) => {
        if (oe() && C()) {
            let n = await U({
                hash: W(t),
                params: e,
                request: t
            });
            if (n) return n
        }
        return n()
    }, Z = ({
        currentUrl: e,
        nextUrl: t
    }) => {
        if (e.pathname !== t.pathname) return !0;
        let n = new URLSearchParams(e.search),
            r = new URLSearchParams(t.search);
        return n.delete(`q`), n.delete(`category`), r.delete(`q`), r.delete(`category`), n.toString() !== r.toString()
    }, Q = re(function() {
        "use forget";
        let e = (0, G.c)(8),
            t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = [], e[0] = t) : t = e[0], (0, K.useEffect)(le, t);
        let n;
        e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = d(), e[1] = n) : n = e[1];
        let r = n,
            i = _();
        if (new URLSearchParams(i.search).get(`native_mobile_view`) === `true`) {
            let t, n;
            e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (t = {}, n = (0, q.jsx)(S, {}), e[2] = t, e[3] = n) : (t = e[2], n = e[3]);
            let r;
            return e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, q.jsxs)(q.Fragment, {
                children: [(0, q.jsx)(se, {
                    children: (0, q.jsxs)(`div`, {
                        suppressHydrationWarning: !0,
                        ...t,
                        children: [n, (0, q.jsxs)(`main`, {
                            className: `@container/main relative z-0`,
                            id: `main`,
                            tabIndex: -1,
                            "z-index": `-1`,
                            children: [(0, q.jsx)(N, {
                                page: `chat`
                            }), (0, q.jsx)(v, {})]
                        })]
                    })
                }), (0, q.jsx)(`style`, {
                    children: `
            html.dark {
              --bg-primary: #000;
            }
          `
                })]
            }), e[4] = r) : r = e[4], r
        }
        let a;
        e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, q.jsx)(S, {}), e[5] = a) : a = e[5];
        let o;
        e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, q.jsx)(b.Heading, {
            children: (0, q.jsx)(s, {
                children: (0, q.jsx)(L, {})
            })
        }), e[6] = o) : o = e[6];
        let c;
        return e[7] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, q.jsxs)(q.Fragment, {
            children: [a, (0, q.jsxs)(b, {
                children: [o, (0, q.jsx)(b.Navbar, {
                    children: (0, q.jsx)(R, {
                        children: (0, q.jsx)(T, {
                            navHeader: (0, q.jsx)(k, {}),
                            children: (0, q.jsx)(j, {
                                isProjectsEnabled: r
                            })
                        })
                    })
                }), (0, q.jsx)(N, {
                    page: `chat`
                }), (0, q.jsx)(v, {})]
            })]
        }), e[7] = c) : c = e[7], c
    }), $ = h(() => {
        "use forget";
        let e = (0, G.c)(14),
            t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = d(), e[0] = t) : t = e[0];
        let n = t,
            r = _(),
            a = ne(),
            o;
        e[1] === r.search ? o = e[2] : (o = new URLSearchParams(r.search).get(`native_mobile_view`), e[1] = r.search, e[2] = o);
        let s = o === `true`,
            c = te(),
            l;
        e[3] === s ? l = e[4] : (l = !s && (0, q.jsx)(b.Navbar, {
            children: (0, q.jsx)(R, {
                children: (0, q.jsx)(T, {
                    navHeader: (0, q.jsx)(k, {}),
                    children: (0, q.jsx)(j, {
                        isProjectsEnabled: n
                    })
                })
            })
        }), e[3] = s, e[4] = l);
        let u;
        e[5] === s ? u = e[6] : (u = !s && (0, q.jsx)(b.Header, {
            children: (0, q.jsx)(O, {
                children: (0, q.jsx)(ce, {})
            })
        }), e[5] = s, e[6] = u);
        let f;
        e[7] !== c || e[8] !== a ? (f = g(c) ? c.status === 404 ? (0, q.jsx)(B, {}) : (0, q.jsx)(i, {
            error: Error(`Route Error (${c.status} ${c.statusText}): ${c.message}`),
            resetError: () => a(0)
        }) : (0, q.jsx)(i, {
            error: c,
            resetError: () => a(0)
        }), e[7] = c, e[8] = a, e[9] = f) : f = e[9];
        let p;
        return e[10] !== l || e[11] !== u || e[12] !== f ? (p = (0, q.jsxs)(b, {
            children: [l, u, f]
        }), e[10] = l, e[11] = u, e[12] = f, e[13] = p) : p = e[13], p
    })
}));
e((() => {
    ue()
}))();
export {
    $ as ErrorBoundary, X as clientLoader, Q as
    default, Y as meta, Z as shouldRevalidate
};
//# sourceMappingURL=apps-khew6o0d.js.map