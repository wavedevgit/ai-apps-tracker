import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cp as t,
    Dit as n,
    Jot as r,
    a7 as i,
    kit as a,
    l7 as o,
    pp as s,
    wst as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Ln as l,
    Rn as u
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Uen as d,
    Wen as f,
    czt as p,
    eyt as m,
    lzt as h,
    qvt as g,
    tyt as _
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $_ as v,
    Q_ as y,
    Z_ as b,
    ev as x,
    nv as S,
    tv as C
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
async function w(e, t) {
    let n = y(e.files);
    if (!n) return;
    let [r, i] = n;
    if (!i || typeof i.start != `number` || typeof i.length != `number` || i.length <= 0) return;
    let a = await g({
        hazelnutId: e.id,
        path: r,
        range: {
            start: Math.max(0, i.start),
            length: i.length
        },
        sedimentId: e.sediment_id,
        signal: t
    });
    if (!t?.aborted) return b(new TextDecoder(`utf-8`).decode(a))
}
async function T({
    file: e,
    filename: t,
    contentType: n
}) {
    let r = (await m([{
        filename: t,
        content_type: n
    }])).uploads?.[0];
    if (!r) throw Error(`Failed to initialize upload`);
    return await h.put(r.upload_url, e, {
        headers: d(r.upload_url, n)
    }), await i.safePost(`/hazelnuts/uploads/finish`, {
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
    let i = await g({
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
    let t = await s(e, {
        downloadIntent: !1
    });
    if (t.status !== r.Success || !t.download_url) throw Error(`Unable to fetch download URL`);
    let n = await fetch(t.download_url, {
        headers: {}
    });
    if (!n.ok) throw Error(`Unable to download file content`);
    let i = await n.arrayBuffer();
    return new TextDecoder(`utf-8`).decode(i)
}
var k, A, j, M = e((() => {
    c(), f(), t(), x(), _(), a(), o(), p(), u(), k = async (e, t, r, i, a) => {
        let o = new Set(a.map(e => C(e.path || e.filename).toLowerCase())),
            s = e.map(e => e.webkitRelativePath && e.webkitRelativePath.length > 0 ? e.webkitRelativePath : void 0),
            c = s.every(e => typeof e == `string` && e.length > 0),
            l = null;
        c && s[0] && (l = s[0].replace(/\\/g, `/`).split(`/`)[0] || null);
        for (let a = 0; a < e.length; a++) {
            let u = e[a],
                d, f = s[a];
            if (c && f) {
                let e = f.replace(/\\/g, `/`);
                d = C(l ? e.split(`/`).slice(1).join(`/`) : e)
            } else d = S(u.name);
            let p = C(d).toLowerCase();
            if (o.has(p)) {
                i.danger(r.formatMessage(A.uploadDuplicateName, {
                    name: d
                }));
                continue
            }
            o.add(p);
            let m = v();
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
                n.addError(e), t(e => e.map(e => e.clientId === m ? {
                    ...e,
                    status: `error`,
                    error: r.formatMessage(A.uploadFailed)
                } : e)), i.danger(r.formatMessage(A.uploadFailed))
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
//# sourceMappingURL=6fd89734-f3vhrjep38ec1ped.js.map