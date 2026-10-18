import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CX as t,
    Fet as n,
    Gat as r,
    MX as i,
    NX as a,
    OX as o,
    PX as s,
    TX as c,
    Uot as l,
    Wat as u,
    YX as d,
    _m as f,
    aQ as p,
    gm as m,
    iQ as h,
    qX as g,
    wX as _,
    wst as ee,
    zet as te
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Az as ne,
    BOt as re,
    Fz as ie,
    HDt as ae,
    KOt as oe,
    MP as se,
    Mz as ce,
    Nz as v,
    PIn as y,
    Pz as le,
    QJt as ue,
    QPn as de,
    QUn as fe,
    ROt as pe,
    VDt as me,
    WDt as he,
    XJt as ge,
    XPn as _e,
    ZJt as ve,
    bWn as ye,
    cWn as be,
    jP as b,
    kIn as xe,
    qOt as Se,
    tWn as Ce,
    uWn as x,
    vWn as we
} from "./conversation-small-fym1zmu9zimymmm1.js";

function S({
    fileId: e,
    libraryFileId: t,
    mountedLibraryFileId: n,
    libraryProvider: r
}) {
    let i = e => {
            if (typeof e == `string`) return e.startsWith(`file-library:`) ? e.slice(13) : e
        },
        a = i(e),
        o = i(t ?? e);
    return n == null && (r == null || r === `native`) && Se(o) && (!re(a) || a === o) ? o : void 0
}
var C = e((() => {
    pe(), oe()
}));

function Te(e, {
    isSharedConversation: n = !1
} = {}) {
    if (e.sharedLibraryFileId != null) return {
        kind: `shared_library`,
        fileId: e.id ?? e.sharedLibraryFileId,
        sharedLibraryFileId: e.sharedLibraryFileId
    };
    if (e.libraryFileId != null && e.id != null) {
        if (n && e.isAssistant !== !0 && e.mountedLibraryFileId == null && (e.libraryProvider == null || e.libraryProvider === `native`) && S({
                libraryFileId: e.libraryFileId
            }) != null) {
            let t = S({
                fileId: e.id,
                libraryFileId: e.libraryFileId
            });
            return t == null ? {
                kind: `unavailable`
            } : {
                kind: `shared_library`,
                fileId: t,
                sharedLibraryFileId: t
            }
        }
        return {
            kind: `library`,
            fileId: e.id,
            libraryFileId: e.libraryFileId
        }
    }
    if (e.id != null && t(e.id)) return {
        kind: `uploaded`,
        fileId: e.id
    };
    if (e.sandboxPath != null && e.messageId != null) return {
        kind: `sandbox`,
        filepath: e.sandboxPath,
        messageId: e.messageId
    };
    if (e.sourceUrl != null) {
        let t = w(e.sourceUrl);
        return t != null && Ee(e.id) === t ? {
            kind: `google_drive`,
            url: e.sourceUrl
        } : {
            kind: `unavailable`
        }
    }
    return e.messageId == null ? {
        kind: `unavailable`
    } : {
        kind: `message`,
        messageId: e.messageId
    }
}

function Ee(e) {
    return e?.startsWith(`external-gdrive:file:`) ? e.slice(21) : E.exec(e ?? ``)?.[1]
}

function w(e) {
    if (e.includes(`\\`) || /\s/u.test(e)) return;
    let t;
    try {
        t = new URL(e)
    } catch {
        return
    }
    let n = e.slice(e.indexOf(`//`) + 2).split(/[/?#]/u, 1)[0].toLowerCase();
    if (!(t.protocol !== `https:` || n !== t.hostname && n !== `${t.hostname}:443` || t.port !== `` || t.username !== `` || t.password !== ``)) return (t.hostname === `docs.google.com` ? D : t.hostname === `drive.google.com` ? O : void 0)?.exec(t.pathname)?.[1]
}
var T, E, D, O, k = e((() => {
    C(), _(), T = `external-gdrive:file:`, E = /^external-gdrive:account:[A-Za-z0-9_-]+:file:([A-Za-z0-9_-]+)$/u, D = /^\/(?:document|spreadsheets|presentation)\/d\/([\w-]+)(?:\/|$)/, O = /^\/file\/d\/([\w-]+)(?:\/|$)/
}));

function A(e) {
    return e.sharedLibraryFileId ?? e.libraryFileId ?? e.id ?? `${e.messageId??``}-${e.name}`
}
var j = e((() => {}));

function De(e) {
    return [...e.matchAll(M()), ...e.matchAll(N())].map(e => ({
        url: e[0],
        id: e[2],
        type: l.GDRIVE
    }))
}
var M, N, Oe = e((() => {
    ee(), M = () => /\bhttps:\/\/docs\.google\.com\/(document|spreadsheets|presentation)\/d\/([\w-]+)\/?(?:(?:edit|view)\/?)?(?:\?[\w\-.~%=]*)?(?:#[\w\-.~%=]*)?/g, N = () => /\bhttps:\/\/drive\.google\.com\/(file)\/d\/([\w-]+)\/?(?:(?:edit|view)\/?)?(?:\?[\w\-.~%=]*)?(?:#[\w\-.~%=]*)?/g
}));

function P(e) {
    let t = [e.sharedLibraryFileId == null ? null : `file:${e.sharedLibraryFileId}`, e.libraryFileId == null ? null : `file:${e.libraryFileId}`, e.id == null ? null : `file:${e.id}`, e.artifactId == null ? null : `file:${e.artifactId}`, e.sandboxPath == null ? null : `file:${e.sandboxPath}`].filter(e => e != null);
    return t.length > 0 || e.messageId == null ? t : [`message:${e.messageId}:${e.name}`]
}

function F(e, t, n) {
    return {
        artifactId: e.artifactId ?? n?.artifactId,
        gizmoId: e.gizmoId ?? t ?? n?.gizmoId,
        id: e.id ?? n?.id,
        ...e.isAssistant == null && n?.isAssistant == null ? {} : {
            isAssistant: !0
        },
        ...e.libraryArtifactType === `image_gen` || n?.isImageGen === !0 ? {
            isImageGen: !0
        } : {},
        libraryFileId: e.libraryFileId,
        librarySourceMimeType: n?.librarySourceMimeType,
        messageId: e.messageId || n?.messageId,
        mimeType: e.mimeType ?? n?.mimeType,
        mountedLibraryFileId: n?.mountedLibraryFileId,
        name: e.name,
        sandboxPath: e.sandboxPath ?? n?.sandboxPath,
        sizeBytes: e.sizeBytes ?? n?.sizeBytes
    }
}

function ke(e) {
    return {
        artifactId: e.artifactId,
        gizmoId: e.gizmoId,
        id: e.id,
        isAssistant: !1,
        libraryFileId: e.libraryFileId,
        librarySourceMimeType: e.librarySourceMimeType,
        messageId: e.messageId,
        mimeType: e.mimeType,
        mountedLibraryFileId: e.mountedLibraryFileId,
        name: e.name,
        sandboxPath: e.sandboxPath,
        sizeBytes: e.sizeBytes
    }
}

function Ae(e, t) {
    let n = e.name.lastIndexOf(`.`),
        r = e.name.slice(0, n > 0 ? n : e.name.length),
        i = n > 0 ? e.name.slice(n) : ``,
        a = t.name.slice(r.length, t.name.length - i.length),
        o = t.name.startsWith(r) && t.name.endsWith(i) && /^\([1-9]\d*\)$/.test(a);
    return (e.name === t.name || o) && (e.mimeType == null || t.mimeType == null || e.mimeType === t.mimeType) && (e.sizeBytes == null || t.sizeBytes == null || e.sizeBytes === t.sizeBytes)
}

function je(e, t, n, r, i) {
    let a = [...e.inputs],
        o = [...e.outputs],
        s = o.length,
        c = new Set,
        l = !1,
        u = new Set(e.inputs.flatMap(P));
    for (let e of t) {
        if (i?.has(e.libraryFileId ?? ``) || i?.has(e.id ?? ``)) continue;
        let t = e.originationThreadId === r && e.libraryArtifactType != null && e.libraryArtifactType !== `chat_message_snapshot`,
            d = P(e);
        if (e.isAssistant === !1 && !t) {
            if (e.libraryArtifactType === `chat_message_snapshot` || d.some(e => u.has(e)) || o.some(e => P(e).some(e => d.includes(e)))) continue;
            a.push(ke(e)), d.forEach(e => u.add(e)), l = !0;
            continue
        }
        if (d.some(e => u.has(e))) continue;
        let f = o.findIndex(e => P(e).some(e => d.includes(e)));
        if (f !== -1) {
            c.add(f);
            let t = o[f];
            t != null && t.libraryFileId == null && e.libraryFileId != null && (o[f] = F(e, n, t), l = !0);
            continue
        }
        if (t) {
            let t = o.slice(0, s).flatMap((t, n) => !c.has(n) && Ae(t, e) ? [n] : []),
                r = e.messageId === `` ? [] : t.filter(t => o[t].messageId === e.messageId),
                i = r.length > 0 ? r : t;
            if (i.length === 1) {
                let t = i[0];
                c.add(t), o[t] = F(e, n, o[t]), l = !0;
                continue
            }
        }
        o.push(F(e, n)), l = !0
    }
    return l ? {
        ...e,
        inputs: a,
        outputs: o
    } : e
}

function I(e) {
    return typeof e == `string` && e.trim() !== `` ? e : null
}

function L(e) {
    return typeof e == `number` && Number.isFinite(e) && e >= 0 ? e : void 0
}

function R(e) {
    return typeof e == `object` && !!e && !Array.isArray(e)
}

function z(e) {
    if (e.content.content_type === `code`) return e.content.text;
    if (e.content.content_type === `text`) {
        let t = e.content.parts.filter(e => typeof e == `string`);
        return t.length === e.content.parts.length ? t.join(``) : null
    }
    return null
}

function Me(e) {
    let t = z(e);
    if (t == null) return null;
    let n = ie(e, t);
    return R(n) ? n : null
}

function Ne(e) {
    let t = e.result;
    return R(t) && R(t.structuredContent) ? t.structuredContent : e
}

function B(e) {
    let t = Me(e);
    return t == null ? null : Ne(t)
}

function V(e, t) {
    let n = I(t.file_id),
        r = I(t.library_file_id),
        i = I(t.name);
    if (n == null || r == null || i == null) return null;
    let a = [t.cloud_doc_url, t.url, t.display_url],
        o = a.map(W).find(e => e?.virtualFileId === n || e?.virtualFileId === r),
        s = I(t.mounted_library_file_id) ?? (o == null ? [n, r].find(e => y({
            mountedLibraryFileId: e
        }) != null) : void 0),
        c = y({
            libraryProvider: I(t.library_provider) ?? I(t.provider),
            mountedLibraryFileId: s
        }),
        l = I(t.mounted_library_mime_type),
        u = o == null && c != null ? a.map(I).find(e => e != null) : void 0,
        d = o?.sourceMimeType ?? I(t.mime_type),
        f = L(t.file_size_bytes),
        p = o?.url ?? u;
    return {
        ...p == null ? {} : {
            externalUrl: p
        },
        id: n,
        libraryFileId: r,
        ...c == null ? {} : {
            libraryProvider: c
        },
        ...l == null ? {} : {
            librarySourceMimeType: l
        },
        messageId: e,
        ...d ? {
            mimeType: d
        } : {},
        ...s == null ? {} : {
            mountedLibraryFileId: s
        },
        name: i,
        ...f == null ? {} : {
            sizeBytes: f
        },
        ...u == null ? {} : {
            sourceUrl: u
        }
    }
}

function Pe(e) {
    if (e.author.role !== n.Tool) return [];
    let t = e.metadata?.invoked_resource?.resource_uri === `/library/search`;
    if (!t) {
        let t = z(e);
        if (t == null || !t.includes(`files`) || !t.includes(`search`)) return []
    }
    let r = B(e),
        i = t || r?.api_tool_source === `files/search`;
    if (r == null || !i || !Array.isArray(r.results)) return [];
    let a = [];
    for (let t of r.results) {
        if (!R(t)) continue;
        let n = V(e.id, t);
        n != null && a.push(n)
    }
    return a
}

function Fe(e) {
    return H(e, `read`)
}

function Ie(e) {
    return H(e, `find`)
}

function H(e, t) {
    if (e.author.role !== n.Tool) return [];
    let r = e.metadata?.invoked_resource?.resource_uri,
        i = B(e),
        a = `/files/${t}`,
        o = `/library/${t}`;
    return !(i?.api_tool_source === `files/${t}` || r === a || r?.startsWith(`${a}/`) === !0 || r === o || r?.startsWith(`${o}/`) === !0 || r?.startsWith(`/connector_openai_library/`) === !0 && r.endsWith(`/${t}`)) || i == null || e.status != null && e.status !== `finished_successfully` || U(i) ? [] : (Array.isArray(i.results) ? i.results : [i]).flatMap(t => {
        if (!R(t) || U(t) || t.kind === `folder`) return [];
        let n = V(e.id, t);
        return n == null ? [] : [n]
    })
}

function U(e) {
    return e.status === `failed` || e.status === `error` || e.status === `skipped` || e.status === `cancelled`
}

function W(e) {
    let t = I(e);
    return t != null && t === t.trim() ? _e(t, {
        allowGenericDriveFile: !0
    }) : void 0
}

function Le(e) {
    if (e.author.role !== n.Tool) return [];
    let t = e.metadata?.invoked_resource,
        r = I(t?.resource_uri);
    if (t?.connector_id !== X || r == null) return [];
    let i = r.split(`/`),
        a = i.at(-1);
    if (i[0] !== `` || i[1] !== X || a !== `search` && a !== `list_folder` || i.length !== 3 && (i.length !== 4 || I(i[2]) == null)) return [];
    let o = a === `list_folder`,
        s = B(e),
        c = o ? s?.files : s?.results;
    if (!Array.isArray(c)) return [];
    let l = [];
    for (let e of c) {
        if (!R(e) || e.file_or_folder != null && e.file_or_folder !== `file` || e.mime_type === Z || e.mimeType === Z || o && e.can_download === !1) continue;
        let t = I(e.id),
            n = I(e.title) ?? I(e.display_title);
        if (t == null || n == null) continue;
        let r = `${T}${t}`,
            i = I(e.mime_type) ?? (o ? I(e.mimeType) : null),
            a = i?.split(`;`)[0]?.trim().toLowerCase();
        if (o && a?.startsWith(qe) && ae(i) == null) continue;
        let s = [e.url, e.display_url].filter(e => e != null && e !== ``).map(W);
        if (o && s.some(e => e?.virtualFileId !== r)) continue;
        let c = s.find(e => e?.virtualFileId === r) ?? (o && s.length === 0 ? W(me({
            mountedLibraryFileId: r,
            sourceMimeType: i ?? void 0
        })) : void 0);
        if (c == null) continue;
        let u = c.sourceMimeType ?? i;
        l.push({
            externalUrl: c.url,
            id: c.virtualFileId,
            ...u ? {
                mimeType: u
            } : {},
            name: n
        })
    }
    return l
}

function G({
    cloudDocUrl: e,
    externalUrl: n,
    files: r,
    isGoogleDriveFile: i = !1,
    id: a,
    libraryFileId: o,
    messageId: s,
    name: c
}) {
    let l = I(a),
        u = I(c);
    if (l == null || u == null) return;
    let d = i && t(l),
        f = i && !l.startsWith(`external-gdrive:file:`) && !d ? `${T}${l}` : l,
        p = d && e != null && w(e) != null ? e : void 0,
        m = W(n),
        h = I(o),
        g = [f, h].find(e => e != null && y({
            mountedLibraryFileId: e
        }) != null),
        _ = m?.url ?? (!i && g != null ? I(n) : void 0);
    q(r, {
        id: f,
        messageId: s,
        name: u,
        ..._ == null ? {} : {
            externalUrl: _,
            ...m?.sourceMimeType ? {
                mimeType: m.sourceMimeType
            } : {}
        },
        ...h ? {
            libraryFileId: h
        } : {},
        ...p ? {
            sourceUrl: p
        } : {}
    }, `reference`)
}

function Re({
    files: e,
    message: t
}) {
    let n = t.metadata?.content_references ?? [],
        r = t.metadata?.citations ?? [],
        i = [...n.length === 0 && r.length > 0 ? c(v(t), r).contentReferences : n, ...Object.values(t.metadata?.content_references_by_file ?? {}).flat().filter(Boolean)];
    for (let n of i) {
        if (n?.type === `file`) {
            let r = n.cloud_doc_url ?? n.extra?.cloud_doc_url ?? n.url ?? n.fff_metadata?.url;
            G({
                cloudDocUrl: r,
                externalUrl: r,
                files: e,
                id: n.id,
                isGoogleDriveFile: n.source === `google_drive` || n.connector_id === X,
                libraryFileId: n.library_file_id,
                messageId: t.id,
                name: n.name
            });
            continue
        }
        if (n?.type === `file_navlist`)
            for (let r of n.items) G({
                cloudDocUrl: r.cloud_doc_url,
                externalUrl: r.cloud_doc_url,
                files: e,
                id: r.id,
                isGoogleDriveFile: r.source_type === `google_drive`,
                libraryFileId: r.library_file_id,
                messageId: t.id,
                name: r.name
            })
    }
}

function ze({
    files: e,
    message: t
}) {
    let r = t.metadata?.invoked_resource,
        i = r?.connector_created_files;
    if (!(t.author.role !== n.Tool || !Array.isArray(i) || r?.connector_id !== X))
        for (let n of i) {
            if (!R(n) || n.provider !== `google_drive` || n.connector_id !== X || n.operation !== `create_file`) continue;
            let r = I(n.file_id),
                i = I(n.name),
                a = I(n.mime_type),
                o = I(n.url);
            r == null || i == null || a == null || !Je.has(a) || o == null || w(o) !== r || q(e, {
                id: `${T}${r}`,
                isAssistant: !0,
                messageId: t.id,
                mimeType: a,
                name: i,
                sourceUrl: o
            })
        }
}

function K(e) {
    let t = e.sharedLibraryFileId ?? e.libraryFileId;
    return t ? `library:${t}` : e.sandboxPath ? `sandbox:${e.sandboxPath}` : A(e)
}

function Be(e, t, n) {
    if (e == null || n === `replacement`) return t;
    let {
        libraryProvider: r,
        mountedLibraryFileId: i,
        librarySourceMimeType: a,
        ...o
    } = e, s = n === `reference` ? {
        ...o,
        ...t
    } : t, c = I(t.id), l = c != null && c === e.id, u = (t.mountedLibraryFileId == null || t.mountedLibraryFileId === i) && (t.libraryProvider == null || t.libraryProvider === y(e));
    return !l || !u ? s : {
        ...s,
        libraryProvider: t.libraryProvider ?? r,
        mountedLibraryFileId: t.mountedLibraryFileId ?? i,
        librarySourceMimeType: t.librarySourceMimeType ?? a
    }
}

function q(e, t, n = `update`) {
    let r = I(t.id),
        i = e.get(K(t)) ?? (r == null ? void 0 : e.get(r)),
        a = Be(i, t, n),
        o = a.sharedLibraryFileId ?? i?.sharedLibraryFileId;
    if (o != null) {
        let {
            libraryFileId: e,
            ...t
        } = a;
        a = {
            ...t,
            sharedLibraryFileId: o
        }
    }
    let s = K(a),
        c = I(a.id);
    return c != null && c !== s ? e.setReplacingAlias(s, c, a) : e.set(s, a), a
}

function J({
    files: e,
    message: t
}) {
    for (let r of t.metadata?.attachments ?? []) {
        if (!r.name) continue;
        let i = W(r.context_connector_info?.source_url),
            a = i?.sourceMimeType == null ? W(me({
                mountedLibraryFileId: r.mounted_library_file_id,
                sourceMimeType: r.mounted_library_mime_type ?? r.mime_type
            })) : void 0,
            o = i ?? a;
        q(e, {
            ...o ? {
                externalUrl: o.url
            } : {},
            id: r.id,
            isAssistant: t.author.role === n.Assistant,
            ...t.author.role === n.Assistant && r.library_artifact_type === `image_gen` ? {
                isImageGen: !0
            } : {},
            libraryFileId: r.library_file_id,
            libraryProvider: r.library_provider,
            librarySourceMimeType: r.mounted_library_mime_type,
            messageId: t.id,
            mimeType: i?.sourceMimeType ?? a?.sourceMimeType ?? r.mime_type,
            mountedLibraryFileId: r.mounted_library_file_id,
            name: r.name,
            sizeBytes: r.size
        })
    }
}

function Ve({
    files: e,
    message: t
}) {
    for (let n of t.metadata?.shared_library_file_references ?? []) {
        let r = I(n.library_file_id),
            i = I(n.name);
        if (r == null || i == null) continue;
        let a = I(n.mime_type),
            o = L(n.size_bytes);
        q(e, {
            id: r,
            messageId: t.id,
            name: i,
            sharedLibraryFileId: r,
            ...a == null ? {} : {
                mimeType: a
            },
            ...o == null ? {} : {
                sizeBytes: o
            }
        })
    }
}

function He({
    files: e,
    message: t
}) {
    for (let n of [t.metadata?.code_interpreter_file_links, t.metadata?.__internal?.code_interpreter_file_links])
        if (n != null)
            for (let [r, i] of Object.entries(n)) {
                let n = b(r).trim();
                n && q(e, {
                    artifactId: i,
                    id: i,
                    isAssistant: !0,
                    messageId: t.id,
                    name: n,
                    sandboxPath: r
                })
            }
}

function Ue({
    files: e,
    message: t
}) {
    if (t.author.role !== n.Assistant || t.metadata?.is_visually_hidden_from_conversation || t.content.content_type !== `text`) return;
    let r = v(t);
    if (!r.includes(`sandbox:`)) return;
    let i = Q.parse(ue(r)),
        a = n => {
            if (!n.startsWith(`sandbox:`) || !ve(n)) return;
            let r = n.slice(g.length),
                i = b(r).trim();
            i && q(e, {
                isAssistant: !0,
                messageId: t.id,
                name: i,
                sandboxPath: r
            })
        };
    x(i, `link`, e => a(e.url)), x(i, `image`, e => a(e.url))
}

function We({
    files: e,
    message: t
}) {
    if (!s(t) || t.metadata?.is_visually_hidden_from_conversation) return;
    let n = o(t),
        r = h.getImageAssetPointers(t).filter(a);
    for (let [i, a] of r.entries()) {
        let r = m(a.asset_pointer);
        r && q(e, {
            artifactId: r,
            id: r,
            isAssistant: !0,
            isImageGen: !0,
            messageId: t.id,
            mimeType: `image/png`,
            name: n ?? `generated-image-${i+1}.png`,
            sizeBytes: a.size_bytes
        })
    }
}

function Ge(e) {
    return Ke(e.map(Y))
}

function Y(e) {
    let t = new $,
        r = new $;
    Re({
        files: t,
        message: e
    }), ze({
        files: r,
        message: e
    });
    let i = ne(e),
        a = [];
    return i.length === 0 && (a = [...Pe(e), ...Le(e)], We({
        files: r,
        message: e
    }), e.author.role === n.User ? (J({
        files: t,
        message: e
    }), Ve({
        files: t,
        message: e
    })) : e.author.role === n.Assistant && (J({
        files: r,
        message: e
    }), Ue({
        files: r,
        message: e
    }), He({
        files: r,
        message: e
    }))), {
        assistantText: e.author.role === n.Assistant ? v(e) : void 0,
        inputs: [...t.values()],
        isUser: e.author.role === n.User,
        librarySearchResults: a,
        libraryWrites: i,
        messageId: e.id,
        outputs: [...r.values()]
    }
}

function Ke(e) {
    let t = new $,
        n = new $,
        r = new Map,
        i = new Set,
        a = new Map,
        o = new Map,
        s = new Map,
        c = new Map,
        l = new Map,
        u = e.findLastIndex(e => e.isUser),
        d = new Set(e.slice(u === -1 ? 0 : u).map(e => e.messageId)),
        f = 0;
    for (let u of e) {
        u.isUser && (f += 1), s.set(u.messageId, f), u.assistantText != null && c.set(f, `${c.get(f)??``}\n${u.assistantText}`);
        for (let e of u.inputs) q(t, e), o.set(K(e), f);
        if (u.libraryWrites.length > 0) {
            for (let e of u.libraryWrites) {
                i.add(e.fileId), e.sandboxPath && i.add(`sandbox:${e.sandboxPath}`);
                let t = e.versionNumber ?? -1;
                if (t < (l.get(e.libraryFileId) ?? -1)) continue;
                l.set(e.libraryFileId, t);
                let r = `library:${e.libraryFileId}`;
                e.sandboxPath ? a.set(r, `sandbox:${e.sandboxPath}`) : a.delete(r), q(n, {
                    artifactId: e.fileId,
                    id: e.fileId,
                    isAssistant: !0,
                    libraryFileId: e.libraryFileId,
                    messageId: e.messageId,
                    mimeType: e.mimeType,
                    name: e.fileName,
                    sizeBytes: e.sizeBytes
                }, `replacement`)
            }
            continue
        }
        for (let e of u.librarySearchResults) {
            let t = r.get(f);
            t ?? (t = new $, r.set(f, t)), q(t, e)
        }
        for (let e of u.outputs) q(n, e)
    }
    for (let [e, n] of r) {
        let r = c.get(e),
            i = r?.toLocaleLowerCase(),
            a = r == null ? void 0 : new Set(De(r).map(({
                id: e
            }) => e));
        for (let s of n.values()) {
            let n = K(s),
                c = I(s.id),
                l = s.externalUrl ?? s.sourceUrl,
                u = l == null ? void 0 : w(l),
                d = i?.includes(s.name.toLocaleLowerCase()) === !0 || l != null && r?.includes(l) === !0 || u != null && a?.has(u) === !0;
            if ((t.get(n) ?? (c == null ? void 0 : t.get(c))) == null && !d) continue;
            let f = o.get(n) ?? (c == null ? void 0 : o.get(c)),
                p = q(t, s, `reference`),
                m = d ? Math.max(f ?? e, e) : f;
            m != null && o.set(K(p), m)
        }
    }
    for (let [e, t] of a) {
        let r = n.get(t),
            i = n.get(e);
        r?.sandboxPath && i && n.set(e, {
            ...i,
            messageId: r.messageId ?? i.messageId,
            sandboxPath: r.sandboxPath
        })
    }
    for (let e of i) n.delete(e);
    for (let e of t.values()) {
        let r = K(e);
        if (e.sharedLibraryFileId != null) {
            n.delete(r);
            for (let r of [e.sharedLibraryFileId, e.id]) r != null && (t.delete(r), n.delete(r));
            continue
        }
        let i = I(e.id),
            a = e.libraryFileId != null && n.has(`library:${e.libraryFileId}`),
            c = e.sourceUrl == null ? void 0 : w(e.sourceUrl),
            l = i?.startsWith(`external-gdrive:file:`) === !0 ? i : c == null ? void 0 : `${T}${c}`,
            u = l == null ? void 0 : n.get(l),
            d = u?.messageId == null ? void 0 : s.get(u.messageId),
            f = d != null && d === o.get(r);
        !a && !f || t.delete(r)
    }
    return {
        inputs: [...t.values()],
        latestTurnMessageIds: [...d],
        outputs: [...n.values()]
    }
}
var X, Z, qe, Je, Q, $, Ye = e((() => {
    te(), ce(), f(), se(), d(), ge(), de(), i(), he(), xe(), j(), k(), le(), _(), Oe(), p(), we(), fe(), be(), r(), X = `connector_5f3c8c41a1e54ad7a76272c89e2554fa`, Z = `application/vnd.google-apps.folder`, qe = `application/vnd.google-apps.`, Je = new Set([`application/vnd.google-apps.document`, `application/vnd.google-apps.spreadsheet`, `application/vnd.google-apps.presentation`]), Q = Ce().use(ye), $ = class {
        constructor() {
            u(this, `files`, []), u(this, `indexByIdentity`, new Map)
        }
        delete(e) {
            let t = this.indexByIdentity.get(e);
            return t == null ? !1 : (this.indexByIdentity.delete(e), this.files[t] = void 0, !0)
        }
        get(e) {
            let t = this.indexByIdentity.get(e);
            return t == null ? void 0 : this.files[t]
        }
        has(e) {
            return this.indexByIdentity.has(e)
        }
        set(e, t) {
            let n = this.indexByIdentity.get(e);
            if (n == null) {
                this.indexByIdentity.set(e, this.files.length), this.files.push(t);
                return
            }
            this.files[n] = t
        }
        setReplacingAlias(e, t, n) {
            if (e === t) {
                this.set(e, n);
                return
            }
            let r = this.indexByIdentity.get(e),
                i = this.indexByIdentity.get(t);
            if (r == null && i == null) {
                this.set(e, n);
                return
            }
            let a = r == null ? i : i == null ? r : Math.min(r, i);
            a != null && (r != null && r !== a && (this.files[r] = void 0), i != null && i !== a && (this.files[i] = void 0), this.indexByIdentity.delete(t), this.indexByIdentity.set(e, a), this.files[a] = n)
        }* values() {
            for (let e of this.files) e != null && (yield e)
        }
    }
}));
export {
    Y as a, A as c, w as d, Te as f, C as h, Ke as i, j as l, S as m, Fe as n, Ye as o, k as p, Ge as r, je as s, Ie as t, T as u
};
//# sourceMappingURL=3c02c844-42a6wh00isrejewa.js.map