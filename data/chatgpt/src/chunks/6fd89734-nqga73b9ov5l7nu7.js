import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    Vp as n,
    Zst as r,
    eat as i,
    j7 as a,
    jp as o,
    nat as s,
    xst as c
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Ln as l,
    Rn as u
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Yvt as d,
    czt as f,
    lzt as p,
    ntn as m,
    nyt as h,
    ryt as g,
    ttn as _
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    $_ as v,
    Q_ as y,
    Z_ as b,
    ev as x,
    nv as S,
    tv as C
} from "./c2675c8c-fpv9s4kvd412dyap.js";
async function w(e, t) {
    let n = y(e.files);
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
    if (!t?.aborted) return b(new TextDecoder(`utf-8`).decode(a))
}
async function T({
    file: e,
    filename: t,
    contentType: n
}) {
    let r = (await h([{
        filename: t,
        content_type: n
    }])).uploads?.[0];
    if (!r) throw Error(`Failed to initialize upload`);
    return await p.put(r.upload_url, e, {
        headers: _(r.upload_url, n)
    }), await a.safePost(`/hazelnuts/uploads/finish`, {
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
    let t = await o(e, {
        downloadIntent: !1
    });
    if (t.status !== c.Success || !t.download_url) throw Error(`Unable to fetch download URL`);
    let n = await fetch(t.download_url, {
        headers: {}
    });
    if (!n.ok) throw Error(`Unable to download file content`);
    let r = await n.arrayBuffer();
    return new TextDecoder(`utf-8`).decode(r)
}
var k, A, j, M = e((() => {
    r(), m(), n(), x(), g(), s(), t(), f(), u(), k = async (e, t, n, r, a) => {
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
                r.danger(n.formatMessage(A.uploadDuplicateName, {
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
                i.addError(e), t(e => e.map(e => e.clientId === m ? {
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
//# sourceMappingURL=6fd89734-nqga73b9ov5l7nu7.js.map