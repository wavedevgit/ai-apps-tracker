import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ap as t,
    Mot as n,
    QZ as r,
    Up as i,
    YW as a,
    dF as o,
    ftt as s,
    gtt as c,
    jot as l,
    qW as u,
    vF as d
} from "./4813494d-mdvd4786a87166cc.js";
import {
    $Ln as f,
    $x as p,
    AEt as m,
    CEt as h,
    HF as ee,
    Jl as g,
    K5t as _,
    MEt as v,
    PEt as y,
    SEt as b,
    UF as te,
    X5t as ne,
    _N as re,
    cB as ie,
    kEt as ae,
    oB as x,
    oOt as S,
    ql as C,
    rM as w,
    sB as T,
    sOt as E,
    tM as D,
    tS as O,
    vN as k,
    zLn as A
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    a as j,
    o as M
} from "./3c02c844-edmbtumtn5l6fthl.js";
import {
    i as N,
    t as P
} from "./32a2db56-l86rc67xcwf9txk5.js";
import {
    r as F,
    s as I
} from "./70ccb607-csigu294r8xn3655.js";
import {
    a as L,
    c as R,
    d as z,
    n as oe,
    t as B
} from "./4aa1bb90-mcgszh2xjsh5dcxk.js";

function V(e) {
    let t = e.mountedLibraryFileId ?? (f(e.libraryFileId) ? e.libraryFileId : f(e.fileId) ? e.fileId : null);
    return f(t) ? t : null
}

function H(e, t) {
    let n = e.librarySourceMimeType ?? (ne(t) ? e.mimeType : void 0);
    return {
        mountedLibraryFileId: t,
        ...n ? {
            librarySourceMimeType: n
        } : {}
    }
}

function U(e) {
    let t = e.isSharedConversation === !0;
    t && e.sharedLibraryFileId != null && b(e.sharedLibraryFileId)();
    let n = V(e),
        {
            libraryFileId: r,
            ...i
        } = e,
        o = f(r) ? void 0 : r,
        s = (o != null || n != null) && y({
            fileName: e.fileName,
            mimeType: e.mimeType
        });
    return m({
        ...i,
        ...o == null ? {} : {
            libraryFileId: o
        },
        ...n && H(e, n),
        ...o != null && !t && W(e.fileName, e.mimeType) && a() && e.providesOpenLibraryFileContext == null ? {
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
    let r = S(e, n);
    if (r == null) return !1;
    let i = t(r);
    return i === `pptx` || i === `xlsx` || i === `csv` || i === `tsv`
}
var G = e((() => {
    E(), ae(), i(), _(), A(), h(), v(), P(), u()
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
        r = [];
    typeof t?.automation_id == `string` && t.automation_id.length > 0 && r.push({
        id: t.automation_id,
        title: t.automation_title
    }), t?.real_author_type === `automation` && typeof t.real_author_id == `string` && t.real_author_id.length > 0 && r.push({
        id: t.real_author_id,
        title: t.real_author_title
    });
    let i = {
            directTasks: r,
            messageId: e.id
        },
        a = n(e.author.name ?? e.recipient),
        o = a?.namespace === l.DE1D73E || a?.namespace === `automations`,
        c = e.author.role === s.Assistant && a?.functionName === `create`,
        u = e.author.role === s.Tool && (a?.functionName === `create` || a?.functionName === `update`);
    if (!o || !c && !u) return i;
    let d = ie(e, x(e));
    if (typeof d != `object` || !d) return i;
    if (c) {
        let e = Reflect.get(d, `title`);
        return typeof e == `string` && e.trim() && (i.pendingCreate = {
            title: e.trim(),
            turnExchangeId: t?.turn_exchange_id
        }), i
    }
    return i.mutation = {
        automations: [Reflect.get(d, `jawbone`), Reflect.get(d, `automation`)].flatMap(e => typeof e != `object` || !e ? [] : [{
            id: Reflect.get(e, `id`),
            title: Reflect.get(e, `title`)
        }]),
        isError: Reflect.get(d, `status`) === `ERROR`,
        turnExchangeId: t?.turn_exchange_id
    }, i
}
var J = e((() => {
    c(), T(), r()
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
    let n = ee(e),
        r = n.length > 0 ? n : void 0,
        i = R(e),
        a = oe(e),
        o = B(e),
        c = C(e),
        l = e.author.role === s.Assistant && e.channel === `final` && e.recipient === `all` && e.status === `finished_successfully`,
        u = q(e),
        d = D(e),
        f = re([e]).find(e => e.pluginId == null) ?? null,
        m = F(e),
        h = j(e),
        {
            assistantText: g,
            ..._
        } = h,
        v = {
            browserScreenshots: r,
            completesTurnPlan: l,
            keys: {
                browserScreenshots: (r?.length ?? 0) > 0 ? Z(r) : void 0,
                plugin: i.catalogActions.length > 0 || i.invocation != null || i.privateConnectorId != null ? Z(i) : void 0,
                mcpResources: a == null ? o.length > 0 ? Z(o) : void 0 : Z(a),
                progress: c != null || l ? Z({
                    completesTurnPlan: l,
                    turnPlan: c
                }) : void 0,
                site: d.invocationCandidate != null || d.resultCandidate != null ? Z({
                    invocationCandidate: d.invocationCandidate,
                    resultCandidate: d.resultCandidate
                }) : void 0,
                skills: f == null ? void 0 : Z(f),
                subagents: m.activity != null || m.toolCall != null || m.isUser ? Z(m) : void 0,
                summary: Z(_),
                summaryAssistantText: g,
                tasks: u.directTasks.length > 0 || u.mutation != null || u.pendingCreate != null ? Z(u) : void 0,
                webSources: p(e)
            },
            hasLibrarySearchResults: h.librarySearchResults.length > 0,
            mcpResources: a,
            plugin: i,
            site: d,
            skillSource: f,
            subagents: m,
            summary: h,
            tasks: u,
            turnPlan: c
        };
    return Q.set(e, v), v
}

function Z(e) {
    return JSON.stringify(e)
}
var Q, $, de = e((() => {
    c(), d(), k(), I(), w(), z(), O(), L(), J(), M(), te(), g(), Q = new WeakMap, $ = o(() => se())
}));
export {
    G as a, J as i, de as n, W as o, K as r, U as s, ce as t
};
//# sourceMappingURL=23ad950b-e3ecq5p47jsj1hnh.js.map