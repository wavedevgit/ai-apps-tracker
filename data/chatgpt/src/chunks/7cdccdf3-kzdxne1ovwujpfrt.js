const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/277f528d-jnoulllsr9ux58ch.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css", "assets/8b34dbc2-k1zgxrtsww83602u.js", "assets/82782bc9-mb60yg1xlggwvqri.js", "assets/1ef76d03-l1aeqwqdwyaaligx.js", "assets/779905f4-gpirvlmqu3snexen.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Da as r,
    Ea as i,
    N5 as a,
    X0 as o,
    Y0 as s,
    h8 as c,
    i5 as l,
    nY as u,
    pY as d,
    qJ as f
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    B6 as x,
    BHt as S,
    G6 as C,
    L6 as w,
    R6 as T,
    V6 as E,
    Xj as D,
    Zj as O,
    z6 as k,
    zHt as A
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as j,
    r as M,
    t as N
} from "./d8c30629-fhtujzhh2wb60xhs.js";
import {
    r as P,
    t as F
} from "./1ef76d03-l1aeqwqdwyaaligx.js";
var I, L = e((() => {
    o(), _(), I = s(() => g(() => import(`./277f528d-jnoulllsr9ux58ch.js`).then(e => e.TPPSitePreviewModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
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
    H = y(), b(), j(), L(), P(), z(), E(), c(), u(), i(), v(), U = n(h()), w(), A(), W = p(), G = e => {
        "use forget";
        let t = (0, H.c)(7),
            {
                conversation: n
            } = e,
            r = a(C),
            i, o;
        if (t[0] === n ? (i = t[1], o = t[2]) : (i = () => l(() => {
                let e = k(n);
                if (e == null || n.serverId$() == null) return;
                let t = new AbortController;
                return T(n, e, t.signal), () => t.abort()
            }), o = [n], t[0] = n, t[1] = i, t[2] = o), (0, U.useEffect)(i, o), r?.conversationId !== n.id) return null;
        let s;
        return t[3] !== n || t[4] !== r.presentation || t[5] !== r.resource ? (s = (0, W.jsx)(K, {
            conversation: n,
            onClose: x,
            presentation: r.presentation,
            previewResource: r.resource
        }), t[3] = n, t[4] = r.presentation, t[5] = r.resource, t[6] = s) : s = t[6], s
    }, K = e => {
        "use forget";
        let t = (0, H.c)(23),
            {
                canManage: n,
                conversation: i,
                onClose: a,
                presentation: o,
                previewResource: s
            } = e,
            c = n === void 0 || n,
            l = o === void 0 ? `fullscreen` : o,
            u = d(i.id, f.getBranch),
            p = S(),
            h = r(),
            g = u.map(V).map(O),
            {
                latestResultRevision: _,
                latestUrlResultRevision: v,
                previewRevision: y,
                publishedRevision: b
            } = R(g, s.projectId),
            x = !h,
            C;
        t[0] !== p || t[1] !== s.projectId || t[2] !== x ? (C = N({
            accountId: p,
            enabled: x,
            projectId: s.projectId
        }), t[0] = p, t[1] = s.projectId, t[2] = x, t[3] = C) : C = t[3];
        let w = m(C),
            [T, E] = (0, U.useState)(() => ({
                initialLatestResultRevision: _,
                initialLatestUrlResultRevision: v,
                latestUrlResultRevision: v,
                preferredLiveUrlUpdatedAt: w.dataUpdatedAt,
                previewResource: s
            }));
        T.previewResource === s ? T.latestUrlResultRevision !== v && E({
            ...T,
            latestUrlResultRevision: v,
            preferredLiveUrlUpdatedAt: w.dataUpdatedAt
        }) : E({
            initialLatestResultRevision: _,
            initialLatestUrlResultRevision: v,
            latestUrlResultRevision: v,
            preferredLiveUrlUpdatedAt: w.dataUpdatedAt,
            previewResource: s
        });
        let k = T.previewResource === s ? T.initialLatestResultRevision : _,
            A = T.previewResource === s ? T.initialLatestUrlResultRevision : v,
            j = T.previewResource === s && T.latestUrlResultRevision === v ? T.preferredLiveUrlUpdatedAt : w.dataUpdatedAt,
            P = D(g, {
                allowAssistantLinkOverrides: !1
            }),
            L = i.config?.isStandaloneSitePreview === !0 && _ === k,
            z = i.config?.isStandaloneSitePreview === !0 && v !== A,
            B = w.dataUpdatedAt > j,
            G;
        t[4] !== P || t[5] !== s || t[6] !== L ? (G = P?.projectId === s.projectId ? L ? {
            ...P,
            accessMode: s.accessMode,
            privacyStatus: s.privacyStatus,
            slug: s.slug
        } : P : s, t[4] = P, t[5] = s, t[6] = L, t[7] = G) : G = t[7];
        let K = G,
            q = h || z && !B ? void 0 : w.data?.live_url,
            J;
        t[8] !== K || t[9] !== q ? (J = M(K, q), t[8] = K, t[9] = q, t[10] = J) : J = t[10];
        let Y = J;
        if (Y == null) return null;
        if (l === `side-pane`) {
            let e = b ?? y,
                n;
            return t[11] !== c || t[12] !== i || t[13] !== Y || t[14] !== a || t[15] !== e ? (n = (0, W.jsx)(F, {
                canManage: c,
                conversation: i,
                onClose: a,
                previewRevision: e,
                resource: Y
            }), t[11] = c, t[12] = i, t[13] = Y, t[14] = a, t[15] = e, t[16] = n) : n = t[16], n
        }
        let X;
        return t[17] !== c || t[18] !== i || t[19] !== Y || t[20] !== a || t[21] !== y ? (X = (0, W.jsx)(I, {
            canManage: c,
            conversation: i,
            onClose: a,
            previewRevision: y,
            resource: Y
        }), t[17] = c, t[18] = i, t[19] = Y, t[20] = a, t[21] = y, t[22] = X) : X = t[22], X
    }
}));
export {
    B as i, K as n, q as r, G as t
};
//# sourceMappingURL=7cdccdf3-kzdxne1ovwujpfrt.js.map