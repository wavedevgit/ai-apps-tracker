import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cat as t,
    Hst as n,
    J7 as r,
    Np as i,
    Q7 as a,
    Up as o,
    vct as s,
    xat as c
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Ln as l,
    Rn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $en as d,
    Jvt as f,
    Qen as p,
    czt as m,
    nyt as h,
    szt as g,
    tyt as _
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    A_ as v,
    F_ as y,
    M_ as b,
    N_ as x,
    P_ as S,
    j_ as C
} from "./c2675c8c-d62p1sdq1sy52umm.js";
async function w(e, t) {
    let n = C(e.files);
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
    if (!t?.aborted) return v(new TextDecoder(`utf-8`).decode(a))
}
async function T({
    file: e,
    filename: t,
    contentType: n
}) {
    let i = (await _([{
        filename: t,
        content_type: n
    }])).uploads?.[0];
    if (!i) throw Error(`Failed to initialize upload`);
    return await m.put(i.upload_url, e, {
        headers: p(i.upload_url, n)
    }), await r.safePost(`/hazelnuts/uploads/finish`, {
        requestBody: {
            file_id: i.file_id
        }
    }), i.file_id
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
    if (t.status !== n.Success || !t.download_url) throw Error(`Unable to fetch download URL`);
    let r = await fetch(t.download_url, {
        headers: {}
    });
    if (!r.ok) throw Error(`Unable to download file content`);
    let a = await r.arrayBuffer();
    return new TextDecoder(`utf-8`).decode(a)
}
var k, A, j, M = e((() => {
    s(), d(), o(), x(), h(), t(), a(), g(), u(), k = async (e, t, n, r, i) => {
        let a = new Set(i.map(e => S(e.path || e.filename).toLowerCase())),
            o = e.map(e => e.webkitRelativePath && e.webkitRelativePath.length > 0 ? e.webkitRelativePath : void 0),
            s = o.every(e => typeof e == `string` && e.length > 0),
            l = null;
        s && o[0] && (l = o[0].replace(/\\/g, `/`).split(`/`)[0] || null);
        for (let i = 0; i < e.length; i++) {
            let u = e[i],
                d, f = o[i];
            if (s && f) {
                let e = f.replace(/\\/g, `/`);
                d = S(l ? e.split(`/`).slice(1).join(`/`) : e)
            } else d = y(u.name);
            let p = S(d).toLowerCase();
            if (a.has(p)) {
                r.danger(n.formatMessage(A.uploadDuplicateName, {
                    name: d
                }));
                continue
            }
            a.add(p);
            let m = b();
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
                c.addError(e), t(e => e.map(e => e.clientId === m ? {
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
//# sourceMappingURL=6fd89734-h0kp8fwh8mnhj1wm.js.map