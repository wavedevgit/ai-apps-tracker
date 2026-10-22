import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    Eat as n,
    Gst as r,
    Np as i,
    Up as a,
    Y7 as o,
    wat as s,
    xct as c
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Ln as l,
    Rn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $vt as d,
    Kvt as f,
    ctn as p,
    czt as m,
    eyt as h,
    ltn as g,
    lzt as _
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    B_ as v,
    I_ as y,
    L_ as b,
    R_ as x,
    V_ as S,
    z_ as C
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";
async function w(e, t) {
    let n = b(e.files);
    if (!n) return;
    let [r, i] = n;
    if (!i || typeof i.start != `number` || typeof i.length != `number` || i.length <= 0) return;
    let a = await f({
        hazelnutId: e.id,
        path: r,
        range: {
            start: Math.max(0, i.start),
            length: i.length
        },
        sedimentId: e.sediment_id,
        signal: t
    });
    if (!t?.aborted) return y(new TextDecoder(`utf-8`).decode(a))
}
async function T({
    file: e,
    filename: t,
    contentType: n
}) {
    let r = (await d([{
        filename: t,
        content_type: n
    }])).uploads?.[0];
    if (!r) throw Error(`Failed to initialize upload`);
    return await _.put(r.upload_url, e, {
        headers: p(r.upload_url, n)
    }), await o.safePost(`/hazelnuts/uploads/finish`, {
        requestBody: {
            file_id: r.file_id
        }
    }), r.file_id
}

function E(e, t, n) {
    let r = t.trim();
    if (!r) return e.formatMessage(j.validationPathEmpty);
    let i = r.replace(/\\/g, `/`);
    if (i.startsWith(`/`)) return e.formatMessage(j.validationPathAbsolute);
    let a = i.split(`/`);
    return a.some(e => e === `` || e === `.`) || a.some(e => e === `..`) ? e.formatMessage(j.validationPathDot) : i.trim().toLowerCase() === `skill.md` ? e.formatMessage(j.validationPathSkillMd) : n > 1 ? e.formatMessage(j.validationPathDuplicate) : null
}
async function D(e, t, n, r) {
    let i = await f({
        hazelnutId: e,
        path: r,
        range: n && typeof n.start == `number` && typeof n.length == `number` && n.length > 0 ? {
            start: Math.max(0, n.start),
            length: n.length
        } : void 0,
        sedimentId: t
    });
    return new TextDecoder(`utf-8`).decode(i)
}
async function O(e) {
    if (!e) throw Error(`Missing file id`);
    let t = await i(e, {
        downloadIntent: !1
    });
    if (t.status !== r.Success || !t.download_url) throw Error(`Unable to fetch download URL`);
    let n = await fetch(t.download_url, {
        headers: {}
    });
    if (!n.ok) throw Error(`Unable to download file content`);
    let a = await n.arrayBuffer();
    return new TextDecoder(`utf-8`).decode(a)
}
var k, A, j, M = e((() => {
    c(), g(), a(), C(), h(), n(), t(), m(), u(), k = async (e, t, n, r, i) => {
        let a = new Set(i.map(e => v(e.path || e.filename).toLowerCase())),
            o = e.map(e => e.webkitRelativePath && e.webkitRelativePath.length > 0 ? e.webkitRelativePath : void 0),
            c = o.every(e => typeof e == `string` && e.length > 0),
            l = null;
        c && o[0] && (l = o[0].replace(/\\/g, `/`).split(`/`)[0] || null);
        for (let i = 0; i < e.length; i++) {
            let u = e[i],
                d, f = o[i];
            if (c && f) {
                let e = f.replace(/\\/g, `/`);
                d = v(l ? e.split(`/`).slice(1).join(`/`) : e)
            } else d = S(u.name);
            let p = v(d).toLowerCase();
            if (a.has(p)) {
                r.danger(n.formatMessage(A.uploadDuplicateName, {
                    name: d
                }));
                continue
            }
            a.add(p);
            let m = x();
            t(e => [...e, {
                clientId: m,
                filename: u.name,
                size: u.size,
                contentType: u.type || `application/octet-stream`,
                path: d,
                localFile: u,
                status: `uploading`
            }]);
            try {
                let e = await T({
                    file: u,
                    filename: u.name,
                    contentType: u.type || `application/octet-stream`
                });
                t(t => t.map(t => t.clientId === m ? {
                    ...t,
                    fileId: e,
                    status: `uploaded`
                } : t))
            } catch (e) {
                s.addError(e), t(e => e.map(e => e.clientId === m ? {
                    ...e,
                    status: `error`,
                    error: n.formatMessage(A.uploadFailed)
                } : e)), r.danger(n.formatMessage(A.uploadFailed))
            }
        }
    }, A = l({
        uploadFailed: {
            id: `363wGD`,
            defaultMessage: `Failed to upload file.`
        },
        uploadDuplicateName: {
            id: `TqOtV2`,
            defaultMessage: `File name already exists: {name}.`
        }
    }), j = l({
        validationPathEmpty: {
            id: `Z7PcWS`,
            defaultMessage: `Path cannot be empty.`
        },
        validationPathAbsolute: {
            id: `X9fb9/`,
            defaultMessage: `Path cannot start with a '/'.`
        },
        validationPathDot: {
            id: `LhWbnQ`,
            defaultMessage: `Path cannot contain '.' or '..' segments.`
        },
        validationPathSkillMd: {
            id: `eQhwwM`,
            defaultMessage: `Path cannot be 'SKILL.md'.`
        },
        validationPathDuplicate: {
            id: `v/Kr1j`,
            defaultMessage: `Path is duplicated.`
        }
    })
}));
export {
    k as a, M as i, O as n, T as o, w as r, E as s, D as t
};
//# sourceMappingURL=6fd89734-hx18fsrvpvryrm9i.js.map