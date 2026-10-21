import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ap as t,
    QZ as n,
    Sot as r,
    Ttt as i,
    Up as a,
    YW as o,
    dF as s,
    ktt as c,
    qW as l,
    vF as u,
    xot as d
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    $x as ee,
    HF as f,
    IEt as p,
    Jl as m,
    L5t as h,
    MEt as g,
    N5t as _,
    PEt as te,
    TEt as v,
    VF as y,
    _N as b,
    aB as x,
    cOt as ne,
    eM as re,
    gN as ie,
    jEt as ae,
    lOt as S,
    nM as C,
    oB as w,
    ql as T,
    sB as E,
    sLn as D,
    tS as O,
    wEt as k,
    xLn as A
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    a as j,
    o as M
} from "./3c02c844-esz0lji6utytexji.js";
import {
    i as N,
    t as P
} from "./32a2db56-ce064xww4ocodie2.js";
import {
    r as F,
    s as I
} from "./70ccb607-k8unstn29wke56wn.js";
import {
    a as oe,
    c as L,
    d as R,
    n as z,
    t as B
} from "./4aa1bb90-nnrtcty9gzjc0p7m.js";

function V(e) {
    let t = e.mountedLibraryFileId ?? (A(e.libraryFileId) ? e.libraryFileId : A(e.fileId) ? e.fileId : null);
    return A(t) ? t : null
}

function H(e, t) {
    let n = e.librarySourceMimeType ?? (h(t) ? e.mimeType : void 0);
    return {
        mountedLibraryFileId: t,
        ...n ? {
            librarySourceMimeType: n
        } : {}
    }
}

function U(e) {
    let t = e.isSharedConversation === !0;
    t && e.sharedLibraryFileId != null && k(e.sharedLibraryFileId)();
    let n = V(e),
        {
            libraryFileId: r,
            ...i
        } = e,
        a = A(r) ? void 0 : r,
        s = (a != null || n != null) && p({
            fileName: e.fileName,
            mimeType: e.mimeType
        });
    return g({
        ...i,
        ...a == null ? {} : {
            libraryFileId: a
        },
        ...n && H(e, n),
        ...a != null && !t && W(e.fileName, e.mimeType) && o() && e.providesOpenLibraryFileContext == null ? {
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

function W(e, n) {
    let r = ne(e, n);
    if (r == null) return !1;
    let i = t(r);
    return i === `pptx` || i === `xlsx` || i === `csv` || i === `tsv`
}
var G = e((() => {
    S(), ae(), a(), _(), D(), v(), te(), P(), l()
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
    let a = {
            directTasks: n,
            messageId: e.id
        },
        o = r(e.author.name ?? e.recipient),
        s = o?.namespace === d.DE1D73E || o?.namespace === `automations`,
        c = e.author.role === i.Assistant && o?.functionName === `create`,
        l = e.author.role === i.Tool && (o?.functionName === `create` || o?.functionName === `update`);
    if (!s || !c && !l) return a;
    let u = E(e, x(e));
    if (typeof u != `object` || !u) return a;
    if (c) {
        let e = Reflect.get(u, `title`);
        return typeof e == `string` && e.trim() && (a.pendingCreate = {
            title: e.trim(),
            turnExchangeId: t?.turn_exchange_id
        }), a
    }
    return a.mutation = {
        automations: [Reflect.get(u, `jawbone`), Reflect.get(u, `automation`)].flatMap(e => typeof e != `object` || !e ? [] : [{
            id: Reflect.get(e, `id`),
            title: Reflect.get(e, `title`)
        }]),
        isError: Reflect.get(u, `status`) === `ERROR`,
        turnExchangeId: t?.turn_exchange_id
    }, a
}
var J = e((() => {
    c(), w(), n()
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
    let n = y(e),
        r = n.length > 0 ? n : void 0,
        a = L(e),
        o = z(e),
        s = B(e),
        c = T(e),
        l = e.author.role === i.Assistant && e.channel === `final` && e.recipient === `all` && e.status === `finished_successfully`,
        u = q(e),
        d = re(e),
        f = ie([e]).find(e => e.pluginId == null) ?? null,
        p = F(e),
        m = j(e),
        {
            assistantText: h,
            ...g
        } = m,
        _ = {
            browserScreenshots: r,
            completesTurnPlan: l,
            keys: {
                browserScreenshots: (r?.length ?? 0) > 0 ? Z(r) : void 0,
                plugin: a.catalogActions.length > 0 || a.invocation != null || a.privateConnectorId != null ? Z(a) : void 0,
                mcpResources: o == null ? s.length > 0 ? Z(s) : void 0 : Z(o),
                progress: c != null || l ? Z({
                    completesTurnPlan: l,
                    turnPlan: c
                }) : void 0,
                site: d.invocationCandidate != null || d.resultCandidate != null ? Z({
                    invocationCandidate: d.invocationCandidate,
                    resultCandidate: d.resultCandidate
                }) : void 0,
                skills: f == null ? void 0 : Z(f),
                subagents: p.activity != null || p.toolCall != null || p.isUser ? Z(p) : void 0,
                summary: Z(g),
                summaryAssistantText: h,
                tasks: u.directTasks.length > 0 || u.mutation != null || u.pendingCreate != null ? Z(u) : void 0,
                webSources: ee(e)
            },
            hasLibrarySearchResults: m.librarySearchResults.length > 0,
            mcpResources: o,
            plugin: a,
            site: d,
            skillSource: f,
            subagents: p,
            summary: m,
            tasks: u,
            turnPlan: c
        };
    return Q.set(e, _), _
}

function Z(e) {
    return JSON.stringify(e)
}
var Q, $, de = e((() => {
    c(), u(), b(), I(), C(), R(), O(), oe(), J(), M(), f(), m(), Q = new WeakMap, $ = s(() => se())
}));
export {
    G as a, J as i, de as n, W as o, K as r, U as s, ce as t
};
//# sourceMappingURL=23ad950b-lm9xuzh6lgk470ux.js.map