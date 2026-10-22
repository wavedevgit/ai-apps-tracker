import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bst as t,
    Hot as n,
    Im as r,
    JX as i,
    Lm as a,
    Mtt as o,
    OQ as s,
    Ott as c,
    QX as l,
    Vot as u,
    YX as d,
    _Z as f,
    iZ as p,
    kQ as m,
    nZ as h,
    qX as g,
    rZ as _,
    xct as ee,
    yZ as te
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    GDt as v,
    HOt as ne,
    JDt as re,
    KDt as ie,
    MP as y,
    NP as ae,
    PLn as b,
    QFn as oe,
    QWn as se,
    WOt as ce,
    XFn as le,
    XOt as ue,
    YWn as de,
    ZOt as fe,
    _Gn as pe,
    aB as me,
    aGn as he,
    cB as ge,
    dYt as _e,
    hGn as ve,
    kLn as ye,
    lYt as be,
    oB as x,
    rB as xe,
    sB as Se,
    sGn as S,
    uYt as Ce
} from "./conversation-small-fh0oqifngkf5rvl1.js";

function C({
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
    return n == null && (r == null || r === `native`) && fe(o) && (!ce(a) || a === o) ? o : void 0
}
var w = e((() => {
    ne(), ue()
}));

function we(e, {
    isSharedConversation: t = !1
} = {}) {
    if (e.sharedLibraryFileId != null) return {
        kind: `shared_library`,
        fileId: e.id ?? e.sharedLibraryFileId,
        sharedLibraryFileId: e.sharedLibraryFileId
    };
    if (e.libraryFileId != null && e.id != null) {
        if (t && e.isAssistant !== !0 && e.mountedLibraryFileId == null && (e.libraryProvider == null || e.libraryProvider === `native`) && C({
                libraryFileId: e.libraryFileId
            }) != null) {
            let t = C({
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
    if (e.id != null && g(e.id)) return {
        kind: `uploaded`,
        fileId: e.id
    };
    if (e.sandboxPath != null && e.messageId != null) return {
        kind: `sandbox`,
        filepath: e.sandboxPath,
        messageId: e.messageId
    };
    if (e.sourceUrl != null) {
        let t = T(e.sourceUrl);
        return t != null && Te(e.id) === t ? {
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

function Te(e) {
    return e?.startsWith(`external-gdrive:file:`) ? e.slice(21) : D.exec(e ?? ``)?.[1]
}

function T(e) {
    if (e.includes(`\\`) || /\s/u.test(e)) return;
    let t;
    try {
        t = new URL(e)
    } catch {
        return
    }
    let n = e.slice(e.indexOf(`//`) + 2).split(/[/?#]/u, 1)[0].toLowerCase();
    if (!(t.protocol !== `https:` || n !== t.hostname && n !== `${t.hostname}:443` || t.port !== `` || t.username !== `` || t.password !== ``)) return (t.hostname === `docs.google.com` ? O : t.hostname === `drive.google.com` ? k : void 0)?.exec(t.pathname)?.[1]
}
var E, D, O, k, A = e((() => {
    w(), i(), E = `external-gdrive:file:`, D = /^external-gdrive:account:[A-Za-z0-9_-]+:file:([A-Za-z0-9_-]+)$/u, O = /^\/(?:document|spreadsheets|presentation)\/d\/([\w-]+)(?:\/|$)/, k = /^\/file\/d\/([\w-]+)(?:\/|$)/
}));

function j(e) {
    return e.sharedLibraryFileId ?? e.libraryFileId ?? e.id ?? `${e.messageId??``}-${e.name}`
}
var M = e((() => {}));

function Ee(e) {
    return [...e.matchAll(N()), ...e.matchAll(P())].map(e => ({
        url: e[0],
        id: e[2],
        type: t.GDRIVE
    }))
}
var N, P, De = e((() => {
    ee(), N = () => /\bhttps:\/\/docs\.google\.com\/(document|spreadsheets|presentation)\/d\/([\w-]+)\/?(?:(?:edit|view)\/?)?(?:\?[\w\-.~%=]*)?(?:#[\w\-.~%=]*)?/g, P = () => /\bhttps:\/\/drive\.google\.com\/(file)\/d\/([\w-]+)\/?(?:(?:edit|view)\/?)?(?:\?[\w\-.~%=]*)?(?:#[\w\-.~%=]*)?/g
}));

function F(e) {
    let t = [e.sharedLibraryFileId == null ? null : `file:${e.sharedLibraryFileId}`, e.libraryFileId == null ? null : `file:${e.libraryFileId}`, e.id == null ? null : `file:${e.id}`, e.artifactId == null ? null : `file:${e.artifactId}`, e.sandboxPath == null ? null : `file:${e.sandboxPath}`].filter(e => e != null);
    return t.length > 0 || e.messageId == null ? t : [`message:${e.messageId}:${e.name}`]
}

function I(e, t, n) {
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

function Oe(e) {
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

function ke(e, t) {
    let n = e.name.lastIndexOf(`.`),
        r = e.name.slice(0, n > 0 ? n : e.name.length),
        i = n > 0 ? e.name.slice(n) : ``,
        a = t.name.slice(r.length, t.name.length - i.length),
        o = t.name.startsWith(r) && t.name.endsWith(i) && /^\([1-9]\d*\)$/.test(a);
    return (e.name === t.name || o) && (e.mimeType == null || t.mimeType == null || e.mimeType === t.mimeType) && (e.sizeBytes == null || t.sizeBytes == null || e.sizeBytes === t.sizeBytes)
}

function Ae(e, t, n, r, i) {
    let a = [...e.inputs],
        o = [...e.outputs],
        s = o.length,
        c = new Set,
        l = !1,
        u = new Set(e.inputs.flatMap(F));
    for (let e of t) {
        if (i?.has(e.libraryFileId ?? ``) || i?.has(e.id ?? ``)) continue;
        let t = e.originationThreadId === r && e.libraryArtifactType != null && e.libraryArtifactType !== `chat_message_snapshot`,
            d = F(e);
        if (e.isAssistant === !1 && !t) {
            if (e.libraryArtifactType === `chat_message_snapshot` || d.some(e => u.has(e)) || o.some(e => F(e).some(e => d.includes(e)))) continue;
            a.push(Oe(e)), d.forEach(e => u.add(e)), l = !0;
            continue
        }
        if (d.some(e => u.has(e))) continue;
        let f = o.findIndex(e => F(e).some(e => d.includes(e)));
        if (f !== -1) {
            c.add(f);
            let t = o[f];
            t != null && t.libraryFileId == null && e.libraryFileId != null && (o[f] = I(e, n, t), l = !0);
            continue
        }
        if (t) {
            let t = o.slice(0, s).flatMap((t, n) => !c.has(n) && ke(t, e) ? [n] : []),
                r = e.messageId === `` ? [] : t.filter(t => o[t].messageId === e.messageId),
                i = r.length > 0 ? r : t;
            if (i.length === 1) {
                let t = i[0];
                c.add(t), o[t] = I(e, n, o[t]), l = !0;
                continue
            }
        }
        o.push(I(e, n)), l = !0
    }
    return l ? {
        ...e,
        inputs: a,
        outputs: o
    } : e
}

function L(e) {
    return typeof e == `string` && e.trim() !== `` ? e : null
}

function R(e) {
    return typeof e == `number` && Number.isFinite(e) && e >= 0 ? e : void 0
}

function z(e) {
    return typeof e == `object` && !!e && !Array.isArray(e)
}

function B(e) {
    if (e.content.content_type === `code`) return e.content.text;
    if (e.content.content_type === `text`) {
        let t = e.content.parts.filter(e => typeof e == `string`);
        return t.length === e.content.parts.length ? t.join(``) : null
    }
    return null
}

function je(e) {
    let t = B(e);
    if (t == null) return null;
    let n = ge(e, t);
    return z(n) ? n : null
}

function Me(e) {
    let t = e.result;
    return z(t) && z(t.structuredContent) ? t.structuredContent : e
}

function V(e) {
    let t = je(e);
    return t == null ? null : Me(t)
}

function H(e, t) {
    let n = L(t.file_id),
        r = L(t.library_file_id),
        i = L(t.name);
    if (n == null || r == null || i == null) return null;
    let a = [t.cloud_doc_url, t.url, t.display_url],
        o = a.map(G).find(e => e?.virtualFileId === n || e?.virtualFileId === r),
        s = L(t.mounted_library_file_id) ?? (o == null ? [n, r].find(e => b({
            mountedLibraryFileId: e
        }) != null) : void 0),
        c = b({
            libraryProvider: L(t.library_provider) ?? L(t.provider),
            mountedLibraryFileId: s
        }),
        l = L(t.mounted_library_mime_type),
        u = o == null && c != null ? a.map(L).find(e => e != null) : void 0,
        d = o?.sourceMimeType ?? L(t.mime_type),
        f = R(t.file_size_bytes),
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

function Ne(e) {
    if (e.author.role !== c.Tool) return [];
    let t = e.metadata?.invoked_resource?.resource_uri === `/library/search`;
    if (!t) {
        let t = B(e);
        if (t == null || !t.includes(`files`) || !t.includes(`search`)) return []
    }
    let n = V(e),
        r = t || n?.api_tool_source === `files/search`;
    if (n == null || !r || !Array.isArray(n.results)) return [];
    let i = [];
    for (let t of n.results) {
        if (!z(t)) continue;
        let n = H(e.id, t);
        n != null && i.push(n)
    }
    return i
}

function Pe(e) {
    return U(e, `read`)
}

function Fe(e) {
    return U(e, `find`)
}

function U(e, t) {
    if (e.author.role !== c.Tool) return [];
    let n = e.metadata?.invoked_resource?.resource_uri,
        r = V(e),
        i = `/files/${t}`,
        a = `/library/${t}`;
    return !(r?.api_tool_source === `files/${t}` || n === i || n?.startsWith(`${i}/`) === !0 || n === a || n?.startsWith(`${a}/`) === !0 || n?.startsWith(`/connector_openai_library/`) === !0 && n.endsWith(`/${t}`)) || r == null || e.status != null && e.status !== `finished_successfully` || W(r) ? [] : (Array.isArray(r.results) ? r.results : [r]).flatMap(t => {
        if (!z(t) || W(t) || t.kind === `folder`) return [];
        let n = H(e.id, t);
        return n == null ? [] : [n]
    })
}

function W(e) {
    return e.status === `failed` || e.status === `error` || e.status === `skipped` || e.status === `cancelled`
}

function G(e) {
    let t = L(e);
    return t != null && t === t.trim() ? le(t, {
        allowGenericDriveFile: !0
    }) : void 0
}

function Ie(e) {
    if (e.author.role !== c.Tool) return [];
    let t = e.metadata?.invoked_resource,
        n = L(t?.resource_uri);
    if (t?.connector_id !== X || n == null) return [];
    let r = n.split(`/`),
        i = r.at(-1);
    if (r[0] !== `` || r[1] !== X || i !== `search` && i !== `list_folder` || r.length !== 3 && (r.length !== 4 || L(r[2]) == null)) return [];
    let a = i === `list_folder`,
        o = V(e),
        s = a ? o?.files : o?.results;
    if (!Array.isArray(s)) return [];
    let l = [];
    for (let e of s) {
        if (!z(e) || e.file_or_folder != null && e.file_or_folder !== `file` || e.mime_type === Z || e.mimeType === Z || a && e.can_download === !1) continue;
        let t = L(e.id),
            n = L(e.title) ?? L(e.display_title);
        if (t == null || n == null) continue;
        let r = `${E}${t}`,
            i = L(e.mime_type) ?? (a ? L(e.mimeType) : null),
            o = i?.split(`;`)[0]?.trim().toLowerCase();
        if (a && o?.startsWith(qe) && ie(i) == null) continue;
        let s = [e.url, e.display_url].filter(e => e != null && e !== ``).map(G);
        if (a && s.some(e => e?.virtualFileId !== r)) continue;
        let c = s.find(e => e?.virtualFileId === r) ?? (a && s.length === 0 ? G(v({
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

function K({
    cloudDocUrl: e,
    externalUrl: t,
    files: n,
    isGoogleDriveFile: r = !1,
    id: i,
    libraryFileId: a,
    messageId: o,
    name: s
}) {
    let c = L(i),
        l = L(s);
    if (c == null || l == null) return;
    let u = r && g(c),
        d = r && !c.startsWith(`external-gdrive:file:`) && !u ? `${E}${c}` : c,
        f = u && e != null && T(e) != null ? e : void 0,
        p = G(t),
        m = L(a),
        h = [d, m].find(e => e != null && b({
            mountedLibraryFileId: e
        }) != null),
        _ = p?.url ?? (!r && h != null ? L(t) : void 0);
    J(n, {
        id: d,
        messageId: o,
        name: l,
        ..._ == null ? {} : {
            externalUrl: _,
            ...p?.sourceMimeType ? {
                mimeType: p.sourceMimeType
            } : {}
        },
        ...m ? {
            libraryFileId: m
        } : {},
        ...f ? {
            sourceUrl: f
        } : {}
    }, `reference`)
}

function Le({
    files: e,
    message: t
}) {
    let n = t.metadata?.content_references ?? [],
        r = t.metadata?.citations ?? [],
        i = [...n.length === 0 && r.length > 0 ? d(x(t), r).contentReferences : n, ...Object.values(t.metadata?.content_references_by_file ?? {}).flat().filter(Boolean)];
    for (let n of i) {
        if (n?.type === `file`) {
            let r = n.cloud_doc_url ?? n.extra?.cloud_doc_url ?? n.url ?? n.fff_metadata?.url;
            K({
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
            for (let r of n.items) K({
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

function Re({
    files: e,
    message: t
}) {
    let n = t.metadata?.invoked_resource,
        r = n?.connector_created_files;
    if (!(t.author.role !== c.Tool || !Array.isArray(r) || n?.connector_id !== X))
        for (let n of r) {
            if (!z(n) || n.provider !== `google_drive` || n.connector_id !== X || n.operation !== `create_file`) continue;
            let r = L(n.file_id),
                i = L(n.name),
                a = L(n.mime_type),
                o = L(n.url);
            r == null || i == null || a == null || !Je.has(a) || o == null || T(o) !== r || J(e, {
                id: `${E}${r}`,
                isAssistant: !0,
                messageId: t.id,
                mimeType: a,
                name: i,
                sourceUrl: o
            })
        }
}

function q(e) {
    let t = e.sharedLibraryFileId ?? e.libraryFileId;
    return t ? `library:${t}` : e.sandboxPath ? `sandbox:${e.sandboxPath}` : j(e)
}

function ze(e, t, n) {
    if (e == null || n === `replacement`) return t;
    let {
        libraryProvider: r,
        mountedLibraryFileId: i,
        librarySourceMimeType: a,
        ...o
    } = e, s = n === `reference` ? {
        ...o,
        ...t
    } : t, c = L(t.id), l = c != null && c === e.id, u = (t.mountedLibraryFileId == null || t.mountedLibraryFileId === i) && (t.libraryProvider == null || t.libraryProvider === b(e));
    return !l || !u ? s : {
        ...s,
        libraryProvider: t.libraryProvider ?? r,
        mountedLibraryFileId: t.mountedLibraryFileId ?? i,
        librarySourceMimeType: t.librarySourceMimeType ?? a
    }
}

function J(e, t, n = `update`) {
    let r = L(t.id),
        i = e.get(q(t)) ?? (r == null ? void 0 : e.get(r)),
        a = ze(i, t, n),
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
    let s = q(a),
        c = L(a.id);
    return c != null && c !== s ? e.setReplacingAlias(s, c, a) : e.set(s, a), a
}

function Be({
    files: e,
    message: t
}) {
    for (let n of t.metadata?.attachments ?? []) {
        if (!n.name) continue;
        let r = G(n.context_connector_info?.source_url),
            i = r?.sourceMimeType == null ? G(v({
                mountedLibraryFileId: n.mounted_library_file_id,
                sourceMimeType: n.mounted_library_mime_type ?? n.mime_type
            })) : void 0,
            a = r ?? i;
        J(e, {
            ...a ? {
                externalUrl: a.url
            } : {},
            id: n.id,
            isAssistant: t.author.role === c.Assistant,
            ...t.author.role === c.Assistant && n.library_artifact_type === `image_gen` ? {
                isImageGen: !0
            } : {},
            libraryFileId: n.library_file_id,
            libraryProvider: n.library_provider,
            librarySourceMimeType: n.mounted_library_mime_type,
            messageId: t.id,
            mimeType: r?.sourceMimeType ?? i?.sourceMimeType ?? n.mime_type,
            mountedLibraryFileId: n.mounted_library_file_id,
            name: n.name,
            sizeBytes: n.size
        })
    }
}

function Ve({
    files: e,
    message: t
}) {
    for (let n of t.metadata?.shared_library_file_references ?? []) {
        let r = L(n.library_file_id),
            i = L(n.name);
        if (r == null || i == null) continue;
        let a = L(n.mime_type),
            o = R(n.size_bytes);
        J(e, {
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
                let n = y(r).trim();
                n && J(e, {
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
    if (t.author.role !== c.Assistant || t.metadata?.is_visually_hidden_from_conversation || t.content.content_type !== `text`) return;
    let n = x(t);
    if (!n.includes(`sandbox:`)) return;
    let r = Q.parse(_e(n)),
        i = n => {
            if (!n.startsWith(`sandbox:`) || !Ce(n)) return;
            let r = n.slice(f.length),
                i = y(r).trim();
            i && J(e, {
                isAssistant: !0,
                messageId: t.id,
                name: i,
                sandboxPath: r
            })
        };
    S(r, `link`, e => i(e.url)), S(r, `image`, e => i(e.url))
}

function We({
    files: e,
    message: t
}) {
    if (!p(t) || t.metadata?.is_visually_hidden_from_conversation) return;
    let n = l(t),
        i = s.getImageAssetPointers(t).filter(_);
    for (let [a, o] of i.entries()) {
        let i = r(o.asset_pointer);
        i && J(e, {
            artifactId: i,
            id: i,
            isAssistant: !0,
            isImageGen: !0,
            messageId: t.id,
            mimeType: `image/png`,
            name: n ?? `generated-image-${a+1}.png`,
            sizeBytes: o.size_bytes
        })
    }
}

function Ge(e) {
    return Ke(e.map(Y))
}

function Y(e) {
    let t = new $,
        n = new $;
    Le({
        files: t,
        message: e
    }), Re({
        files: n,
        message: e
    });
    let r = xe(e),
        i = [];
    return r.length === 0 && (i = [...Ne(e), ...Ie(e)], We({
        files: n,
        message: e
    }), e.author.role === c.User ? (Be({
        files: t,
        message: e
    }), Ve({
        files: t,
        message: e
    })) : e.author.role === c.Assistant && (Be({
        files: n,
        message: e
    }), Ue({
        files: n,
        message: e
    }), He({
        files: n,
        message: e
    }))), {
        assistantText: e.author.role === c.Assistant ? x(e) : void 0,
        inputs: [...t.values()],
        isUser: e.author.role === c.User,
        librarySearchResults: i,
        libraryWrites: r,
        messageId: e.id,
        outputs: [...n.values()]
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
        for (let e of u.inputs) J(t, e), o.set(q(e), f);
        if (u.libraryWrites.length > 0) {
            for (let e of u.libraryWrites) {
                i.add(e.fileId), e.sandboxPath && i.add(`sandbox:${e.sandboxPath}`);
                let t = e.versionNumber ?? -1;
                if (t < (l.get(e.libraryFileId) ?? -1)) continue;
                l.set(e.libraryFileId, t);
                let r = `library:${e.libraryFileId}`;
                e.sandboxPath ? a.set(r, `sandbox:${e.sandboxPath}`) : a.delete(r), J(n, {
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
            t ?? (t = new $, r.set(f, t)), J(t, e)
        }
        for (let e of u.outputs) J(n, e)
    }
    for (let [e, n] of r) {
        let r = c.get(e),
            i = r?.toLocaleLowerCase(),
            a = r == null ? void 0 : new Set(Ee(r).map(({
                id: e
            }) => e));
        for (let s of n.values()) {
            let n = q(s),
                c = L(s.id),
                l = s.externalUrl ?? s.sourceUrl,
                u = l == null ? void 0 : T(l),
                d = i?.includes(s.name.toLocaleLowerCase()) === !0 || l != null && r?.includes(l) === !0 || u != null && a?.has(u) === !0;
            if ((t.get(n) ?? (c == null ? void 0 : t.get(c))) == null && !d) continue;
            let f = o.get(n) ?? (c == null ? void 0 : o.get(c)),
                p = J(t, s, `reference`),
                m = d ? Math.max(f ?? e, e) : f;
            m != null && o.set(q(p), m)
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
        let r = q(e);
        if (e.sharedLibraryFileId != null) {
            n.delete(r);
            for (let r of [e.sharedLibraryFileId, e.id]) r != null && (t.delete(r), n.delete(r));
            continue
        }
        let i = L(e.id),
            a = e.libraryFileId != null && n.has(`library:${e.libraryFileId}`),
            c = e.sourceUrl == null ? void 0 : T(e.sourceUrl),
            l = i?.startsWith(`external-gdrive:file:`) === !0 ? i : c == null ? void 0 : `${E}${c}`,
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
    o(), me(), a(), ae(), te(), be(), oe(), h(), re(), ye(), M(), A(), Se(), i(), De(), m(), ve(), de(), he(), n(), X = `connector_5f3c8c41a1e54ad7a76272c89e2554fa`, Z = `application/vnd.google-apps.folder`, qe = `application/vnd.google-apps.`, Je = new Set([`application/vnd.google-apps.document`, `application/vnd.google-apps.spreadsheet`, `application/vnd.google-apps.presentation`]), Q = se().use(pe), $ = class {
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
    Y as a, j as c, T as d, we as f, w as h, Ke as i, M as l, C as m, Pe as n, Ye as o, A as p, Ge as r, Ae as s, Fe as t, E as u
};
//# sourceMappingURL=3c02c844-chkuv0iyrq09somp.js.map