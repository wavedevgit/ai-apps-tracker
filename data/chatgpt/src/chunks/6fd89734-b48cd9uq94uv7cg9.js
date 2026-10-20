import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Est as t,
    F7 as n,
    Hp as r,
    Mp as i,
    aat as a,
    nct as o,
    sat as s,
    z7 as c
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Ln as l,
    Rn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    cyt as d,
    hzt as f,
    lyt as p,
    mzt as m,
    otn as h,
    stn as g,
    tyt as _
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    A_ as v,
    D_ as y,
    E_ as b,
    O_ as x,
    j_ as S,
    k_ as C
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
async function w(e, t) {
    let n = y(e.files);
    if (!n) return;
    let [r, i] = n;
    if (!i || typeof i.start != `number` || typeof i.length != `number` || i.length <= 0) return;
    let a = await _({
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
    contentType: r
}) {
    let i = (await d([{
        filename: t,
        content_type: r
    }])).uploads?.[0];
    if (!i) throw Error(`Failed to initialize upload`);
    return await f.put(i.upload_url, e, {
        headers: h(i.upload_url, r)
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
    let i = await _({
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
    let n = await i(e, {
        downloadIntent: !1
    });
    if (n.status !== t.Success || !n.download_url) throw Error(`Unable to fetch download URL`);
    let r = await fetch(n.download_url, {
        headers: {}
    });
    if (!r.ok) throw Error(`Unable to download file content`);
    let a = await r.arrayBuffer();
    return new TextDecoder(`utf-8`).decode(a)
}
var k, A, j, M = e((() => {
    o(), g(), r(), C(), p(), s(), c(), m(), u(), k = async (e, t, n, r, i) => {
        let o = new Set(i.map(e => v(e.path || e.filename).toLowerCase())),
            s = e.map(e => e.webkitRelativePath && e.webkitRelativePath.length > 0 ? e.webkitRelativePath : void 0),
            c = s.every(e => typeof e == `string` && e.length > 0),
            l = null;
        c && s[0] && (l = s[0].replace(/\\/g, `/`).split(`/`)[0] || null);
        for (let i = 0; i < e.length; i++) {
            let u = e[i],
                d, f = s[i];
            if (c && f) {
                let e = f.replace(/\\/g, `/`);
                d = v(l ? e.split(`/`).slice(1).join(`/`) : e)
            } else d = S(u.name);
            let p = v(d).toLowerCase();
            if (o.has(p)) {
                r.danger(n.formatMessage(A.uploadDuplicateName, {
                    name: d
                }));
                continue
            }
            o.add(p);
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
                a.addError(e), t(e => e.map(e => e.clientId === m ? {
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
//# sourceMappingURL=6fd89734-b48cd9uq94uv7cg9.js.map