import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $u as t,
    A8 as n,
    F8 as r,
    Mtt as i,
    Ott as a,
    Zu as o,
    qQ as s,
    uF as c,
    vF as l
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Qk as u,
    nFt as d,
    tFt as f
} from "./conversation-small-fh0oqifngkf5rvl1.js";

function p({
    messageId: e,
    refIndex: t
}) {
    return `appblock:${e}:${t}`
}
var m = e((() => {}));

function h(e) {
    return e === "default" || e === `open` ? e : null
}

function g({
    explicitStyleMode: e,
    libraryFileId: t
}) {
    return e ?? (t == null ? `default` : `open`)
}
var _ = e((() => {}));

function v(e) {
    let t = new Map,
        n = new Map,
        r = null,
        i = null;
    for (let o of e) {
        let e = o.metadata?.content_references;
        if (Array.isArray(e) && e.forEach((e, r) => {
                let i = x({
                    contentReference: e,
                    messageId: o.id,
                    refIndex: r
                });
                i != null && (t.set(i.appBlockId, i), i.libraryFileId != null && n.set(i.libraryFileId, i.appBlockId))
            }), o.author.role === a.User) {
            (o.metadata?.attachments ?? []).forEach((e, r) => {
                let i = b({
                    attachment: e,
                    messageId: o.id,
                    refIndex: r
                });
                i == null || i.libraryFileId == null || n.has(i.libraryFileId) || (t.set(i.appBlockId, i), n.set(i.libraryFileId, i.appBlockId))
            });
            let e = o.metadata?.focused_artifact;
            if (e != null) {
                let n = e.type === M ? t.get(e.artifact_id) ?? null : null;
                r = n != null && n.messageId === e.source_message_id && n.refIndex === e.source_ref_index && (n.libraryFileId == null || n.libraryFileId === e.library_file_id) ? n : null, i = r == null ? null : e.library_file_id
            } else {
                let e = o.metadata?.open_in_app_block_view,
                    n = e == null ? null : t.get(e.app_block_id) ?? null;
                r = e != null && n != null && n.messageId === e.message_id && n.refIndex === e.ref_index && (n.libraryFileId == null || e.library_file_id == null || n.libraryFileId === e.library_file_id) ? n : null, i = r == null ? null : e?.library_file_id ?? null
            }
        }
        let c = s(o);
        if (c?.status !== `created`) continue;
        let l = n.get(c.libraryFileId),
            u = l == null ? null : t.get(l) ?? null;
        if (u == null && c.origin != null) {
            let e = c.origin.messageId,
                n = [...t.values()].filter(t => t.messageId === e);
            u = n.length === 1 ? n[0] : null
        }
        u == null && l == null && r != null && r.libraryFileId == null && (i == null || i === c.libraryFileId) && (u = r), u != null && (u.libraryFileId == null && u.content != null && k(o) || (n.set(c.libraryFileId, u.appBlockId), t.set(u.appBlockId, {
            ...u,
            content: null,
            currentContentFileId: c.newContentFileId,
            latestPatchMessageId: o.id,
            libraryFileId: c.libraryFileId,
            libraryFileVersionNumber: c.newVersionNumber
        })))
    }
    return t
}

function y(e, t) {
    for (let n of e.values())
        if (n.libraryFileId === t) return n;
    return null
}

function b({
    attachment: e,
    messageId: t,
    refIndex: n
}) {
    return !d(e.library_artifact_type) || e.library_file_id == null ? null : {
        appBlockId: p({
            messageId: t,
            refIndex: n
        }),
        content: null,
        currentContentFileId: e.id ?? null,
        entrypoint: `index.html`,
        iconSvg: null,
        language: `html`,
        latestPatchMessageId: null,
        libraryFileId: e.library_file_id,
        libraryFileName: e.name,
        libraryFileVersionNumber: null,
        mimeType: e.mime_type ?? null,
        messageId: t,
        previewType: e.library_artifact_type === `site_preview` ? `sites` : void 0,
        refIndex: n,
        styleMode: null,
        title: e.name.replace(/\.html$/i, ``)
    }
}

function x({
    contentReference: e,
    messageId: t,
    refIndex: n
}) {
    if (typeof e != `object` || !e || !(`type` in e) || !(`category` in e) || e.type !== N || e.category !== M || !(`data` in e)) return null;
    let r = e.data;
    if (typeof r != `object` || !r) return null;
    let i = S(r, `content`),
        a = S(r, `entrypoint`) ?? `index.html`,
        o = D(r, a),
        s = w(o, `library_file_id`);
    return i == null && s == null ? null : {
        appBlockId: S(r, `app_block_id`) ?? p({
            messageId: t,
            refIndex: n
        }),
        bundleVersion: C(r, `bundle_version`) ?? void 0,
        content: i,
        currentContentFileId: w(o, `current_content_file_id`),
        entrypoint: a,
        iconSvg: S(r, `icon_svg`),
        previewType: S(r, `preview_type`) === `sites` ? `sites` : void 0,
        language: O(),
        latestPatchMessageId: null,
        libraryFileId: s,
        libraryFileName: w(o, `library_file_name`),
        libraryFileVersionNumber: E(T(o, `library_file_version_number`)),
        mimeType: w(o, `mime_type`),
        messageId: t,
        refIndex: n,
        styleMode: h(S(r, `style_mode`)),
        title: S(r, `display_name`) ?? S(r, `title`)
    }
}

function S(e, t) {
    let n = null;
    return t === `app_block_id` && `app_block_id` in e && (n = e.app_block_id), t === `content` && `content` in e && (n = e.content), t === `current_content_file_id` && `current_content_file_id` in e && (n = e.current_content_file_id), t === `display_name` && `display_name` in e && (n = e.display_name), t === `entrypoint` && `entrypoint` in e && (n = e.entrypoint), t === `icon_svg` && `icon_svg` in e && (n = e.icon_svg), t === `library_file_id` && `library_file_id` in e && (n = e.library_file_id), t === `library_file_name` && `library_file_name` in e && (n = e.library_file_name), t === `mime_type` && `mime_type` in e && (n = e.mime_type), t === `path` && `path` in e && (n = e.path), t === `preview_type` && `preview_type` in e && (n = e.preview_type), t === `style_mode` && `style_mode` in e && (n = e.style_mode), t === `title` && `title` in e && (n = e.title), typeof n == `string` && n.trim() !== `` ? n : null
}

function C(e, t) {
    if (t === `bundle_version` && `bundle_version` in e) {
        let t = e.bundle_version;
        if (typeof t == `number`) return t
    }
    if (t === `library_file_version_number` && `library_file_version_number` in e) {
        let t = e.library_file_version_number;
        if (typeof t == `number`) return t
    }
    return null
}

function w(e, t) {
    return typeof e != `object` || !e ? null : S(e, t)
}

function T(e, t) {
    return typeof e != `object` || !e ? null : C(e, t)
}

function E(...e) {
    for (let t of e)
        if (t != null) return t;
    return null
}

function D(e, t) {
    if (!(`files` in e) || !Array.isArray(e.files)) return null;
    let n = null;
    for (let r of e.files)
        if (!(typeof r != `object` || !r) && S(r, `library_file_id`) != null && (n ??= r, S(r, `path`) === t)) return r;
    return n
}

function O() {
    return `html`
}

function k(e) {
    let t = e.metadata?.shared_conversation_id;
    return typeof t == `string` && t.trim() !== ``
}

function A(e, t) {
    return e.appBlockId === t.appBlockId && e.bundleVersion === t.bundleVersion && e.content === t.content && e.currentContentFileId === t.currentContentFileId && e.entrypoint === t.entrypoint && e.iconSvg === t.iconSvg && e.language === t.language && e.latestPatchMessageId === t.latestPatchMessageId && e.libraryFileId === t.libraryFileId && e.libraryFileName === t.libraryFileName && e.libraryFileVersionNumber === t.libraryFileVersionNumber && e.mimeType === t.mimeType && e.messageId === t.messageId && e.previewType === t.previewType && e.refIndex === t.refIndex && e.styleMode === t.styleMode && e.title === t.title
}

function j(e, t) {
    if (e.size !== t.size) return !1;
    for (let [n, r] of e) {
        let e = t.get(n);
        if (e == null || !A(r, e)) return !1
    }
    return !0
}
var M, N, P, F = e((() => {
    f(), i(), l(), t(), u(), n(), m(), _(), M = `app_block`, N = `client_defined_widget`, P = c(e => r(() => v(o(e).flatMap(e => e.messages)), {
        equals: j
    }))
}));
export {
    h as a, m as c, _ as i, y as n, g as o, F as r, p as s, P as t
};
//# sourceMappingURL=56dee4d8-ij879drkbxno9ah5.js.map