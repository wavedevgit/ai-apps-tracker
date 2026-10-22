const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/277f528d-oipase91yyh8b5rt.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-i79e9c315w50am5f.js", "assets/30901919-ikyi1r55w2i02fom.js", "assets/c470f5ab-lpy67c9in1skobas.js", "assets/0e5afe53-jfvcgv06snw44wce.js", "assets/conversation-small-dl8qqd6x.css", "assets/8b34dbc2-m4883pai3e8fx8q6.js", "assets/82782bc9-o75a7wf6pmueiskp.js", "assets/1ef76d03-e0e1l7za4vvr60wb.js", "assets/779905f4-bi6wktwjet0gmgpz.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Da as r,
    GJ as i,
    Oa as a,
    a2 as o,
    dY as s,
    eY as c,
    k8 as l,
    o2 as u,
    q5 as d,
    v5 as f
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as p,
    O as m,
    Vn as h,
    cn as g,
    ln as _,
    s as v,
    wn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $j as b,
    FHt as x,
    G6 as S,
    H6 as C,
    IHt as w,
    K6 as T,
    U6 as E,
    W6 as D,
    X6 as O,
    eM as k,
    nM as A
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    n as j,
    r as M,
    t as N
} from "./d8c30629-fu908mlxfw66o1qd.js";
import {
    r as P,
    t as F
} from "./1ef76d03-e0e1l7za4vvr60wb.js";
var I, L = e((() => {
    u(), _(), I = o(() => g(() => import(`./277f528d-oipase91yyh8b5rt.js`).then(e => e.TPPSitePreviewModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
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
    H = y(), A(), j(), L(), P(), z(), T(), l(), c(), r(), v(), U = n(h()), C(), x(), W = p(), G = e => {
        "use forget";
        let t = (0, H.c)(7),
            {
                conversation: n
            } = e,
            r = d(O),
            i, a;
        if (t[0] === n ? (i = t[1], a = t[2]) : (i = () => f(() => {
                let e = D(n);
                if (e == null || n.serverId$() == null) return;
                let t = new AbortController;
                return E(n, e, t.signal), () => t.abort()
            }), a = [n], t[0] = n, t[1] = i, t[2] = a), (0, U.useEffect)(i, a), r?.conversationId !== n.id) return null;
        let o;
        return t[3] !== n || t[4] !== r.presentation || t[5] !== r.resource ? (o = (0, W.jsx)(K, {
            conversation: n,
            onClose: S,
            presentation: r.presentation,
            previewResource: r.resource
        }), t[3] = n, t[4] = r.presentation, t[5] = r.resource, t[6] = o) : o = t[6], o
    }, K = e => {
        "use forget";
        let t = (0, H.c)(23),
            {
                canManage: n,
                conversation: r,
                onClose: o,
                presentation: c,
                previewResource: l
            } = e,
            u = n === void 0 || n,
            d = c === void 0 ? `fullscreen` : c,
            f = s(r.id, i.getBranch),
            p = w(),
            h = a(),
            g = f.map(V).map(k),
            {
                latestResultRevision: _,
                latestUrlResultRevision: v,
                previewRevision: y,
                publishedRevision: x
            } = R(g, l.projectId),
            S = !h,
            C;
        t[0] !== p || t[1] !== l.projectId || t[2] !== S ? (C = N({
            accountId: p,
            enabled: S,
            projectId: l.projectId
        }), t[0] = p, t[1] = l.projectId, t[2] = S, t[3] = C) : C = t[3];
        let T = m(C),
            [E, D] = (0, U.useState)(() => ({
                initialLatestResultRevision: _,
                initialLatestUrlResultRevision: v,
                latestUrlResultRevision: v,
                preferredLiveUrlUpdatedAt: T.dataUpdatedAt,
                previewResource: l
            }));
        E.previewResource === l ? E.latestUrlResultRevision !== v && D({
            ...E,
            latestUrlResultRevision: v,
            preferredLiveUrlUpdatedAt: T.dataUpdatedAt
        }) : D({
            initialLatestResultRevision: _,
            initialLatestUrlResultRevision: v,
            latestUrlResultRevision: v,
            preferredLiveUrlUpdatedAt: T.dataUpdatedAt,
            previewResource: l
        });
        let O = E.previewResource === l ? E.initialLatestResultRevision : _,
            A = E.previewResource === l ? E.initialLatestUrlResultRevision : v,
            j = E.previewResource === l && E.latestUrlResultRevision === v ? E.preferredLiveUrlUpdatedAt : T.dataUpdatedAt,
            P = b(g, {
                allowAssistantLinkOverrides: !1
            }),
            L = r.config?.isStandaloneSitePreview === !0 && _ === O,
            z = r.config?.isStandaloneSitePreview === !0 && v !== A,
            B = T.dataUpdatedAt > j,
            G;
        t[4] !== P || t[5] !== l || t[6] !== L ? (G = P?.projectId === l.projectId ? L ? {
            ...P,
            accessMode: l.accessMode,
            privacyStatus: l.privacyStatus,
            slug: l.slug
        } : P : l, t[4] = P, t[5] = l, t[6] = L, t[7] = G) : G = t[7];
        let K = G,
            q = h || z && !B ? void 0 : T.data?.live_url,
            J;
        t[8] !== K || t[9] !== q ? (J = M(K, q), t[8] = K, t[9] = q, t[10] = J) : J = t[10];
        let Y = J;
        if (Y == null) return null;
        if (d === `side-pane`) {
            let e = x ?? y,
                n;
            return t[11] !== u || t[12] !== r || t[13] !== Y || t[14] !== o || t[15] !== e ? (n = (0, W.jsx)(F, {
                canManage: u,
                conversation: r,
                onClose: o,
                previewRevision: e,
                resource: Y
            }), t[11] = u, t[12] = r, t[13] = Y, t[14] = o, t[15] = e, t[16] = n) : n = t[16], n
        }
        let X;
        return t[17] !== u || t[18] !== r || t[19] !== Y || t[20] !== o || t[21] !== y ? (X = (0, W.jsx)(I, {
            canManage: u,
            conversation: r,
            onClose: o,
            previewRevision: y,
            resource: Y
        }), t[17] = u, t[18] = r, t[19] = Y, t[20] = o, t[21] = y, t[22] = X) : X = t[22], X
    }
}));
export {
    B as i, K as n, q as r, G as t
};
//# sourceMappingURL=7cdccdf3-opljf1lcrfy2qz1e.js.map