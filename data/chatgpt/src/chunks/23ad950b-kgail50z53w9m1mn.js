import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Hp as t,
    QW as n,
    XW as r,
    _tt as i,
    aot as a,
    kp as o,
    oF as s,
    oot as c,
    pF as l,
    ptt as u,
    tQ as d
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    $x as ee,
    B5t as f,
    Bz as p,
    Jl as m,
    KF as h,
    MEt as g,
    REt as _,
    Rz as v,
    UEt as y,
    VEt as b,
    W5t as x,
    WIn as te,
    _N as ne,
    eM as re,
    gN as ie,
    gOt as ae,
    hOt as S,
    iLn as C,
    jEt as w,
    nM as T,
    qF as E,
    ql as D,
    tS as O,
    zEt as k,
    zz as A
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    a as j,
    o as M
} from "./3c02c844-fytllqenjw0va0ry.js";
import {
    i as N,
    t as P
} from "./32a2db56-m9t6tu6p5pj82dyc.js";
import {
    r as F,
    s as I
} from "./70ccb607-ihiu74pziaevahc6.js";
import {
    i as oe,
    n as L,
    s as R,
    t as z,
    u as B
} from "./4aa1bb90-jsagv24h33hlpxos.js";

function V(e) {
    let t = e.mountedLibraryFileId ?? (C(e.libraryFileId) ? e.libraryFileId : C(e.fileId) ? e.fileId : null);
    return C(t) ? t : null
}

function H(e, t) {
    let n = e.librarySourceMimeType ?? (x(t) ? e.mimeType : void 0);
    return {
        mountedLibraryFileId: t,
        ...n ? {
            librarySourceMimeType: n
        } : {}
    }
}

function U(e) {
    let t = e.isSharedConversation === !0;
    t && e.sharedLibraryFileId != null && w(e.sharedLibraryFileId)();
    let r = V(e),
        {
            libraryFileId: i,
            ...a
        } = e,
        o = C(i) ? void 0 : i,
        s = (o != null || r != null) && y({
            fileName: e.fileName,
            mimeType: e.mimeType
        });
    return k({
        ...a,
        ...o == null ? {} : {
            libraryFileId: o
        },
        ...r && H(e, r),
        ...o != null && !t && W(e.fileName, e.mimeType) && n() && e.providesOpenLibraryFileContext == null ? {
            providesOpenLibraryFileContext: !0
        } : {},
        onPdfPreviewViewed: n => {
            N({
                conversation: e.conversation,
                isSharedConversation: t,
                pageCount: n
            })
        },
        ...s ? {
            preferSidebarForMarkdown: !0,
            ...e.providesOpenLibraryFileContext == null ? {
                providesOpenLibraryFileContext: !0
            } : {}
        } : {},
        previewMode: e.libraryImageViewer == null ? `sidebar` : `legacy-modal`
    })
}

function W(e, t) {
    let n = S(e, t);
    if (n == null) return !1;
    let r = o(n);
    return r === `pptx` || r === `xlsx` || r === `csv` || r === `tsv`
}
var G = e((() => {
    ae(), _(), t(), f(), te(), g(), b(), P(), r()
}));

function K(e, t, n = {}) {
    let r = [],
        i = new Set,
        a = [],
        o = t == null ? -1 : e.findIndex(e => e.messageId === t),
        s = ({
            fallbackTitle: e,
            id: t,
            title: a
        }) => {
            if (typeof t != `string` || !t || i.has(t)) return !1;
            let o = n[t]?.title.trim(),
                s = typeof a == `string` && a.trim() ? a.trim() : o ?? e;
            return i.add(t), r.push({
                id: t,
                ...s ? {
                    title: s
                } : {}
            }), !0
        };
    for (let t of e.slice(o === -1 ? 0 : o)) {
        for (let e of t.directTasks) s(e);
        if (t.pendingCreate != null) {
            a.push({
                ...t.pendingCreate,
                settled: !1
            });
            continue
        }
        let e = t.mutation;
        if (e == null) continue;
        let n;
        for (let t = a.length - 1; t >= 0; t--) {
            let r = a[t];
            if (!r.settled && (e.turnExchangeId == null || r.turnExchangeId == null || r.turnExchangeId === e.turnExchangeId)) {
                n = r;
                break
            }
        }
        if (e.isError) {
            n != null && (n.settled = !0);
            continue
        }
        let r = !1;
        for (let t of e.automations) r = s({
            fallbackTitle: n?.title,
            id: t.id,
            title: t.title
        }) || r;
        r && n != null && (n.settled = !0)
    }
    return r
}

function q(e) {
    let t = e.metadata,
        n = [];
    typeof t?.automation_id == `string` && t.automation_id.length > 0 && n.push({
        id: t.automation_id,
        title: t.automation_title
    }), t?.real_author_type === `automation` && typeof t.real_author_id == `string` && t.real_author_id.length > 0 && n.push({
        id: t.real_author_id,
        title: t.real_author_title
    });
    let r = {
            directTasks: n,
            messageId: e.id
        },
        i = c(e.author.name ?? e.recipient),
        o = i?.namespace === a.DE1D73E || i?.namespace === `automations`,
        s = e.author.role === u.Assistant && i?.functionName === `create`,
        l = e.author.role === u.Tool && (i?.functionName === `create` || i?.functionName === `update`);
    if (!o || !s && !l) return r;
    let d = p(e, v(e));
    if (typeof d != `object` || !d) return r;
    if (s) {
        let e = Reflect.get(d, `title`);
        return typeof e == `string` && e.trim() && (r.pendingCreate = {
            title: e.trim(),
            turnExchangeId: t?.turn_exchange_id
        }), r
    }
    return r.mutation = {
        automations: [Reflect.get(d, `jawbone`), Reflect.get(d, `automation`)].flatMap(e => typeof e != `object` || !e ? [] : [{
            id: Reflect.get(e, `id`),
            title: Reflect.get(e, `title`)
        }]),
        isError: Reflect.get(d, `status`) === `ERROR`,
        turnExchangeId: t?.turn_exchange_id
    }, r
}
var J = e((() => {
    i(), A(), d()
}));

function se() {
    let e, t;
    return n => {
        if (n === e && t != null) return t;
        let r = e ?? [],
            i = t?.contributions ?? [],
            a = ue(),
            o = n.length !== i.length,
            s = n.length !== i.length,
            c = !1,
            l = !1,
            u = n.map((e, t) => {
                let n = e === r[t] ? i[t] ?? X(e) : X(e),
                    u = i[t];
                return o ||= n !== u, s ||= n.summary.messageId !== u?.summary.messageId, Y(a, u, n), c ||= n.hasLibrarySearchResults, l ||= n.plugin.invocation != null || n.keys.mcpResources != null, n
            });
        for (let e = u.length; e < i.length; e += 1) Y(a, i[e], void 0);
        if (e = n, !o && t != null) return t;
        let d = {
            contributions: u,
            hasLibrarySearchResults: c,
            hasPluginInvocations: l,
            revisions: le(t?.revisions, a, s)
        };
        return t = d, d
    }
}

function ce(e, t) {
    return $(e)(t)
}

function le(e, t, n) {
    return {
        browserScreenshots: (e?.browserScreenshots ?? 0) + Number(t.browserScreenshots),
        messageIds: (e?.messageIds ?? 0) + Number(n),
        mcpResources: (e?.mcpResources ?? 0) + Number(t.mcpResources),
        plugin: (e?.plugin ?? 0) + Number(t.plugin),
        progress: (e?.progress ?? 0) + Number(t.progress),
        site: (e?.site ?? 0) + Number(t.site),
        skills: (e?.skills ?? 0) + Number(t.skills),
        subagents: (e?.subagents ?? 0) + Number(t.subagents),
        summary: (e?.summary ?? 0) + Number(t.summary),
        summaryAssistantText: (e?.summaryAssistantText ?? 0) + Number(t.summaryAssistantText),
        tasks: (e?.tasks ?? 0) + Number(t.tasks),
        webSources: (e?.webSources ?? 0) + Number(t.webSources)
    }
}

function ue() {
    return {
        browserScreenshots: !1,
        mcpResources: !1,
        plugin: !1,
        progress: !1,
        site: !1,
        skills: !1,
        subagents: !1,
        summary: !1,
        summaryAssistantText: !1,
        tasks: !1,
        webSources: !1
    }
}

function Y(e, t, n) {
    e.browserScreenshots ||= t?.keys.browserScreenshots !== n?.keys.browserScreenshots, e.plugin ||= t?.keys.plugin !== n?.keys.plugin, e.mcpResources ||= t?.keys.mcpResources !== n?.keys.mcpResources, e.progress ||= t?.keys.progress !== n?.keys.progress, e.site ||= t?.keys.site !== n?.keys.site, e.skills ||= t?.keys.skills !== n?.keys.skills, e.subagents ||= t?.keys.subagents !== n?.keys.subagents, e.summary ||= t?.keys.summary !== n?.keys.summary, e.summaryAssistantText ||= t?.keys.summaryAssistantText !== n?.keys.summaryAssistantText, e.tasks ||= t?.keys.tasks !== n?.keys.tasks, e.webSources ||= t?.keys.webSources !== n?.keys.webSources
}

function X(e) {
    let t = Q.get(e);
    if (t != null) return t;
    let n = h(e),
        r = n.length > 0 ? n : void 0,
        i = R(e),
        a = L(e),
        o = z(e),
        s = D(e),
        c = e.author.role === u.Assistant && e.channel === `final` && e.recipient === `all` && e.status === `finished_successfully`,
        l = q(e),
        d = re(e),
        f = ie([e]).find(e => e.pluginId == null) ?? null,
        p = F(e),
        m = j(e),
        {
            assistantText: g,
            ..._
        } = m,
        v = {
            browserScreenshots: r,
            completesTurnPlan: c,
            keys: {
                browserScreenshots: (r?.length ?? 0) > 0 ? Z(r) : void 0,
                plugin: i.catalogActions.length > 0 || i.invocation != null || i.privateConnectorId != null ? Z(i) : void 0,
                mcpResources: a == null ? o.length > 0 ? Z(o) : void 0 : Z(a),
                progress: s != null || c ? Z({
                    completesTurnPlan: c,
                    turnPlan: s
                }) : void 0,
                site: d.invocationCandidate != null || d.resultCandidate != null ? Z({
                    invocationCandidate: d.invocationCandidate,
                    resultCandidate: d.resultCandidate
                }) : void 0,
                skills: f == null ? void 0 : Z(f),
                subagents: p.activity != null || p.toolCall != null || p.isUser ? Z(p) : void 0,
                summary: Z(_),
                summaryAssistantText: g,
                tasks: l.directTasks.length > 0 || l.mutation != null || l.pendingCreate != null ? Z(l) : void 0,
                webSources: ee(e)
            },
            hasLibrarySearchResults: m.librarySearchResults.length > 0,
            mcpResources: a,
            plugin: i,
            site: d,
            skillSource: f,
            subagents: p,
            summary: m,
            tasks: l,
            turnPlan: s
        };
    return Q.set(e, v), v
}

function Z(e) {
    return JSON.stringify(e)
}
var Q, $, de = e((() => {
    i(), l(), ne(), I(), T(), B(), O(), oe(), J(), M(), E(), m(), Q = new WeakMap, $ = s(() => se())
}));
export {
    G as a, J as i, de as n, W as o, K as r, U as s, ce as t
};
//# sourceMappingURL=23ad950b-kgail50z53w9m1mn.js.map