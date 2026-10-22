import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cat as t,
    J7 as n,
    Np as r,
    Q7 as i,
    Tat as a,
    Up as o,
    Wst as s,
    bct as c
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Ln as l,
    Rn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Yvt as d,
    dzt as f,
    fzt as p,
    ltn as m,
    nyt as h,
    ryt as g,
    utn as _
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    A_ as v,
    F_ as y,
    M_ as b,
    N_ as x,
    P_ as S,
    j_ as C
} from "./c2675c8c-otyjprdiowg2v8hl.js";
async function w(e, t) {
    let n = C(e.files);
    if (!n) return;
    let [r, i] = n;
    if (!i || typeof i.start != `number` || typeof i.length != `number` || i.length <= 0) return;
    let a = await d({
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
    contentType: r
}) {
    let i = (await h([{
        filename: t,
        content_type: r
    }])).uploads?.[0];
    if (!i) throw Error(`Failed to initialize upload`);
    return await p.put(i.upload_url, e, {
        headers: m(i.upload_url, r)
    }), await n.safePost(`/hazelnuts/uploads/finish`, {
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
    let i = await d({
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
    let t = await r(e, {
        downloadIntent: !1
    });
    if (t.status !== s.Success || !t.download_url) throw Error(`Unable to fetch download URL`);
    let n = await fetch(t.download_url, {
        headers: {}
    });
    if (!n.ok) throw Error(`Unable to download file content`);
    let i = await n.arrayBuffer();
    return new TextDecoder(`utf-8`).decode(i)
}
var k, A, j, M = e((() => {
    c(), _(), o(), x(), g(), a(), i(), f(), u(), k = async (e, n, r, i, a) => {
        let o = new Set(a.map(e => S(e.path || e.filename).toLowerCase())),
            s = e.map(e => e.webkitRelativePath && e.webkitRelativePath.length > 0 ? e.webkitRelativePath : void 0),
            c = s.every(e => typeof e == `string` && e.length > 0),
            l = null;
        c && s[0] && (l = s[0].replace(/\\/g, `/`).split(`/`)[0] || null);
        for (let a = 0; a < e.length; a++) {
            let u = e[a],
                d, f = s[a];
            if (c && f) {
                let e = f.replace(/\\/g, `/`);
                d = S(l ? e.split(`/`).slice(1).join(`/`) : e)
            } else d = y(u.name);
            let p = S(d).toLowerCase();
            if (o.has(p)) {
                i.danger(r.formatMessage(A.uploadDuplicateName, {
                    name: d
                }));
                continue
            }
            o.add(p);
            let m = b();
            n(e => [...e, {
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
                n(t => t.map(t => t.clientId === m ? {
                    ...t,
                    fileId: e,
                    status: `uploaded`
                } : t))
            } catch (e) {
                t.addError(e), n(e => e.map(e => e.clientId === m ? {
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
//# sourceMappingURL=6fd89734-k5osyi678q97bj4p.js.map