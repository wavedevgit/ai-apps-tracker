const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/277f528d-ml6yu87lgpc102yt.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-ed29bs6yiwucn7st.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-l6tnsr2xfn2d55kk.js", "assets/30901919-om7b3qf5hp4j9x4l.js", "assets/c470f5ab-d0jxi6yggehv1yt2.js", "assets/0e5afe53-goyw8fd3qndq8rq5.js", "assets/conversation-small-ixfdle4i.css", "assets/8b34dbc2-j8rcexxiltkm8ucr.js", "assets/82782bc9-cz4jkhg31tycbqqf.js", "assets/1ef76d03-dfwniswdpjekx20i.js", "assets/779905f4-lgobfqb0kofm8sdk.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as r,
    Da as i,
    Ea as a,
    J0 as o,
    Y0 as s,
    f8 as c,
    nY as l,
    pY as u,
    qJ as d,
    t5 as f
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as p,
    O as m,
    Vn as h,
    cn as g,
    ln as _,
    s as v,
    wn as y
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $j as b,
    B6 as x,
    G6 as S,
    IHt as C,
    L6 as w,
    LHt as T,
    R6 as E,
    V6 as D,
    Xj as O,
    Zj as k,
    z6 as A
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    n as j,
    r as M,
    t as N
} from "./d8c30629-cnw6tw1m11yv0lz4.js";
import {
    r as P,
    t as F
} from "./1ef76d03-dfwniswdpjekx20i.js";
var I, L = e((() => {
    s(), _(), I = o(() => g(() => import(`./277f528d-ml6yu87lgpc102yt.js`).then(e => e.TPPSitePreviewModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
}));

function R(e, t) {
    let n, r = t,
        i = t,
        a = t,
        o;
    for (let s of e) {
        let {
            invocationCandidate: e,
            message: c,
            resultCandidate: l
        } = s;
        e?.projectId != null && (n = e.projectId);
        let u = l?.projectId ?? n;
        u === t && l != null && (l.publishedRevision != null && (o = JSON.stringify([t, `published`, l.publishedRevision])), r = JSON.stringify([c.id, u, l.accessMode, l.availableAccessModes, l.archivePath, l.privacyStatus, l.title, l.url]), l.url != null && (i = JSON.stringify([c.id, u, l.url]), a = c.id))
    }
    return {
        latestResultRevision: r,
        latestUrlResultRevision: i,
        previewRevision: a,
        publishedRevision: o
    }
}
var z = e((() => {})),
    B = t({
        TPPSitePreviewController: () => G,
        TPPSitePreviewResourceController: () => K
    });

function V(e) {
    return e.message
}
var H, U, W, G, K, q = e((() => {
    H = y(), b(), j(), L(), P(), z(), D(), c(), l(), a(), v(), U = n(h()), w(), C(), W = p(), G = e => {
        "use forget";
        let t = (0, H.c)(7),
            {
                conversation: n
            } = e,
            i = r(S),
            a, o;
        if (t[0] === n ? (a = t[1], o = t[2]) : (a = () => f(() => {
                let e = A(n);
                if (e == null || n.serverId$() == null) return;
                let t = new AbortController;
                return E(n, e, t.signal), () => t.abort()
            }), o = [n], t[0] = n, t[1] = a, t[2] = o), (0, U.useEffect)(a, o), i?.conversationId !== n.id) return null;
        let s;
        return t[3] !== n || t[4] !== i.presentation || t[5] !== i.resource ? (s = (0, W.jsx)(K, {
            conversation: n,
            onClose: x,
            presentation: i.presentation,
            previewResource: i.resource
        }), t[3] = n, t[4] = i.presentation, t[5] = i.resource, t[6] = s) : s = t[6], s
    }, K = e => {
        "use forget";
        let t = (0, H.c)(23),
            {
                canManage: n,
                conversation: r,
                onClose: a,
                presentation: o,
                previewResource: s
            } = e,
            c = n === void 0 || n,
            l = o === void 0 ? `fullscreen` : o,
            f = u(r.id, d.getBranch),
            p = T(),
            h = i(),
            g = f.map(V).map(k),
            {
                latestResultRevision: _,
                latestUrlResultRevision: v,
                previewRevision: y,
                publishedRevision: b
            } = R(g, s.projectId),
            x = !h,
            S;
        t[0] !== p || t[1] !== s.projectId || t[2] !== x ? (S = N({
            accountId: p,
            enabled: x,
            projectId: s.projectId
        }), t[0] = p, t[1] = s.projectId, t[2] = x, t[3] = S) : S = t[3];
        let C = m(S),
            [w, E] = (0, U.useState)(() => ({
                initialLatestResultRevision: _,
                initialLatestUrlResultRevision: v,
                latestUrlResultRevision: v,
                preferredLiveUrlUpdatedAt: C.dataUpdatedAt,
                previewResource: s
            }));
        w.previewResource === s ? w.latestUrlResultRevision !== v && E({
            ...w,
            latestUrlResultRevision: v,
            preferredLiveUrlUpdatedAt: C.dataUpdatedAt
        }) : E({
            initialLatestResultRevision: _,
            initialLatestUrlResultRevision: v,
            latestUrlResultRevision: v,
            preferredLiveUrlUpdatedAt: C.dataUpdatedAt,
            previewResource: s
        });
        let D = w.previewResource === s ? w.initialLatestResultRevision : _,
            A = w.previewResource === s ? w.initialLatestUrlResultRevision : v,
            j = w.previewResource === s && w.latestUrlResultRevision === v ? w.preferredLiveUrlUpdatedAt : C.dataUpdatedAt,
            P = O(g, {
                allowAssistantLinkOverrides: !1
            }),
            L = r.config?.isStandaloneSitePreview === !0 && _ === D,
            z = r.config?.isStandaloneSitePreview === !0 && v !== A,
            B = C.dataUpdatedAt > j,
            G;
        t[4] !== P || t[5] !== s || t[6] !== L ? (G = P?.projectId === s.projectId ? L ? {
            ...P,
            accessMode: s.accessMode,
            privacyStatus: s.privacyStatus,
            slug: s.slug
        } : P : s, t[4] = P, t[5] = s, t[6] = L, t[7] = G) : G = t[7];
        let K = G,
            q = h || z && !B ? void 0 : C.data?.live_url,
            J;
        t[8] !== K || t[9] !== q ? (J = M(K, q), t[8] = K, t[9] = q, t[10] = J) : J = t[10];
        let Y = J;
        if (Y == null) return null;
        if (l === `side-pane`) {
            let e = b ?? y,
                n;
            return t[11] !== c || t[12] !== r || t[13] !== Y || t[14] !== a || t[15] !== e ? (n = (0, W.jsx)(F, {
                canManage: c,
                conversation: r,
                onClose: a,
                previewRevision: e,
                resource: Y
            }), t[11] = c, t[12] = r, t[13] = Y, t[14] = a, t[15] = e, t[16] = n) : n = t[16], n
        }
        let X;
        return t[17] !== c || t[18] !== r || t[19] !== Y || t[20] !== a || t[21] !== y ? (X = (0, W.jsx)(I, {
            canManage: c,
            conversation: r,
            onClose: a,
            previewRevision: y,
            resource: Y
        }), t[17] = c, t[18] = r, t[19] = Y, t[20] = a, t[21] = y, t[22] = X) : X = t[22], X
    }
}));
export {
    B as i, K as n, q as r, G as t
};
//# sourceMappingURL=7cdccdf3-lws1f8mtseownbv9.js.map