import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J8 as n,
    Nrt as r,
    Prt as i,
    Rot as a,
    Y8 as o,
    cot as s,
    cz as c,
    h as l,
    i1 as u,
    lot as d,
    lz as f,
    m as p,
    u1 as m,
    wst as h
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as g,
    At as _,
    Bn as v,
    Ht as y,
    Rt as b,
    Ut as x,
    Vn as S,
    nt as C,
    s as w,
    wn as T,
    y as E
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    ECn as D,
    Gwn as O,
    RFt as k,
    SCn as A,
    VFt as ee,
    Wwn as j
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Fv as M,
    Iv as N,
    by as P,
    sy as F
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as I,
    t as L
} from "./e18c46cf-fjyf5ehpuodlki4v.js";
import {
    i as R,
    n as z,
    r as B
} from "./18931466-e28s4g1thvso33ew.js";

function V(e) {
    return e != null && J.has(e)
}

function H(e) {
    return D(e) ? e : Z.test(e) ? `${e}@openai-curated-remote` : e
}

function U(e, t) {
    let r = s(),
        o = u(),
        c = i();
    if (c && o == null) return null;
    let l = o?.structure === a.WORKSPACE,
        d = l ? o?.id : void 0;
    return {
        ...F(n(), e, {
            country: t.get(`country`),
            platform: `chat`,
            locale: t.get(`locale`) ?? r.locale,
            hasWorkspace: l,
            accountId: o?.id,
            workspaceId: d,
            productSku: j.CONNECTOR_SETTING
        }, {
            includeInstalledPlugins: c,
            enableInternalSsrRouting: !0
        })
    }
}

function W(e, t, n) {
    if (V(e)) throw new Response(`Not Found`, {
        status: 404
    });
    return n && e ? U(H(e), new URL(t.url).searchParams) : null
}
var G, K, q, J, Y, X, Z, Q, $, te = e((() => {
    g(), G = T(), h(), f(), I(), R(), O(), A(), P(), M(), k(), l(), m(), r(), o(), d(), w(), K = t(S()), q = v(), J = new Set([`debugger`, `manage`]), Y = `open_in_app`, X = `open_in_codex`, Z = /^[a-z0-9](?:[a-z0-9_-]*[a-z0-9])?$/, Q = ({
        params: e,
        request: t
    }) => {
        let r = W(e.pluginId, t, ee());
        return r && n().prefetchQuery(r), {
            dehydratedState: null
        }
    }, $ = x(function() {
        "use forget";
        let e = (0, G.c)(26),
            t = _(),
            {
                pluginId: n
            } = b(),
            [r] = y();
        if (!n || V(n)) {
            let t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, q.jsx)(L, {}), e[0] = t) : t = e[0], t
        }
        let i, a, o;
        if (e[1] !== n || e[2] !== r) {
            a = H(n);
            let t;
            e[6] === r ? t = e[7] : (t = N(r), e[6] = r, e[7] = t), i = t, o = U(a, r), e[1] = n, e[2] = r, e[3] = i, e[4] = a, e[5] = o
        } else i = e[3], a = e[4], o = e[5];
        let s = o,
            l;
        e[8] === r ? l = e[9] : (l = r.has(Y) || r.has(X), e[8] = r, e[9] = l);
        let u;
        e[10] !== i || e[11] !== a || e[12] !== l ? (u = (0, q.jsx)(B, {
            pluginId: a,
            productSku: j.CONNECTOR_SETTING,
            openInCodex: l,
            hideBackButton: i
        }), e[10] = i, e[11] = a, e[12] = l, e[13] = u) : u = e[13];
        let d = u,
            f;
        e[14] === i ? f = e[15] : (f = (0, q.jsx)(z, {
            hideBackButton: i
        }), e[14] = i, e[15] = f);
        let m = f,
            h;
        e[16] !== d || e[17] !== m || e[18] !== s ? (h = e => (0, q.jsxs)(E, {
            state: e,
            children: [s ? (0, q.jsx)(p, {
                queryOptions: s
            }) : null, e ? d : (0, q.jsx)(c, {
                fallback: m,
                children: d
            })]
        }), e[16] = d, e[17] = m, e[18] = s, e[19] = h) : h = e[19];
        let g;
        e[20] !== t.dehydratedState || e[21] !== h ? (g = (0, q.jsx)(C, {
            resolve: t.dehydratedState,
            children: h
        }), e[20] = t.dehydratedState, e[21] = h, e[22] = g) : g = e[22];
        let v;
        return e[23] !== m || e[24] !== g ? (v = (0, q.jsx)(K.Suspense, {
            fallback: m,
            children: g
        }), e[23] = m, e[24] = g, e[25] = v) : v = e[25], v
    })
}));
e((() => {
    te()
}))();
export {
    Q as clientLoader, $ as
    default
};
//# sourceMappingURL=plugins._pluginId-of0p477n.js.map