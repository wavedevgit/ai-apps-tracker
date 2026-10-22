const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/85a70d5b-ns6jpyhmfivscsw4.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/root-lelxp0l2.css", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css", "assets/1c919af1-n3qwx9w7ipxrf1ap.js", "assets/707eab0c-iziu4upusihd9xbv.js", "assets/c2675c8c-9bs3zsr3vq259es7.js", "assets/82782bc9-mb60yg1xlggwvqri.js", "assets/8b34dbc2-k1zgxrtsww83602u.js", "assets/global-modals-lv5n3ujm.css", "assets/9d60841e-e49t3yx590vsf159.js", "assets/bcae0416-ehgxvm7t7gkttx8l.js", "assets/d4c740a3-m98a0dejurzr8grq.js", "assets/Button-ijivgymd.css", "assets/a35abcd6-fl6iafxr1mqknzi0.js", "assets/74a883a0-0bl4w620esk73bmz.js", "assets/4b68ab38-hqs0yc0b0yhvv7p6.js", "assets/e981ddae-jmgg6ibiidqeeif6.js", "assets/36ecb4f8-e1jwtc094r3awv2p.js", "assets/Input-cmdkk215.css", "assets/5334be9f-db1kenujzgsf9rep.js", "assets/14bfa043-j099hvf56gfathms.js", "assets/file-preview-states-nfjy1aeo.css", "assets/27597608-fhg6qgnxkbiplu1g.js", "assets/bcae0416-hkxvza4bxqp7nvav.js", "assets/pdf-file-preview-g0sia5td.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Az as n,
    C8 as r,
    N5 as i,
    X0 as a,
    Y0 as o,
    _N as s,
    h5 as c,
    h8 as l,
    jz as u,
    vN as d
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as f,
    Ln as p,
    Rn as m,
    Vn as h,
    cn as g,
    ln as _,
    wn as v,
    zn as ee
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CRt as te,
    Dzt as y,
    ORt as b,
    _Rt as ne,
    mzt as x,
    pRt as S,
    wHt as re,
    xzt as ie,
    yRt as C
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    b as ae,
    x as w
} from "./707eab0c-iziu4upusihd9xbv.js";
import {
    a as T,
    d as oe,
    f as E,
    o as D,
    s as O,
    t as se,
    x as k
} from "./4285e798-gdl12dl0yi3x94rm.js";
import {
    C as ce,
    D as A,
    M as le,
    N as ue,
    T as de,
    b as j,
    d as fe,
    i as pe,
    n as me,
    t as he,
    u as ge,
    v as _e,
    x as ve,
    y as ye
} from "./8e7d0a25-dv486t3dl7v5p6ha.js";
import {
    c as M,
    i as N,
    l as be,
    n as P,
    r as F,
    t as I,
    u as xe
} from "./5334be9f-db1kenujzgsf9rep.js";
import {
    a as Se,
    i as Ce,
    o as we,
    s as Te,
    t as Ee
} from "./de67e829-d9i1s7hxc1h1wmd0.js";
import {
    n as De,
    t as Oe
} from "./fe6483fa-ol1ei054s3v4sn83.js";

function ke(e) {
    let t = Me(e.name),
        n = t == null ? null : we[t];
    return Ae(e) ? {
        kind: `pdf`
    } : je(e, t) ? {
        kind: `image`
    } : n != null && Ee(n) ? {
        kind: `code`,
        language: n
    } : n != null && n === Se.other || Ne(e.mime_type) ? {
        kind: `text`
    } : null
}

function Ae(e) {
    return L(e.mime_type) === `application/pdf` || Me(e.name) === `pdf`
}

function je(e, t) {
    return L(e.mime_type)?.startsWith(`image/`) === !0 || t != null && Pe.has(t)
}

function Me(e) {
    let t = e.lastIndexOf(`.`);
    return t <= 0 || t === e.length - 1 ? null : e.slice(t + 1).toLowerCase()
}

function Ne(e) {
    let t = L(e);
    return t == null ? !1 : t.startsWith(`text/`) || t === `application/json` || t === `application/x-yaml` || t === `application/xml`
}

function L(e) {
    return e?.split(`;`)[0]?.trim().toLowerCase() || null
}
var Pe, Fe = e((() => {
        Te(), Ce(), Pe = new Set([`avif`, `bmp`, `gif`, `ico`, `jpeg`, `jpg`, `png`, `webp`])
    })),
    Ie, R, Le = e((() => {
        Ie = `TUsMmG_EditorShell`, R = {
            EditorShell: Ie
        }
    })),
    Re, ze, Be, z, Ve = e((() => {
        Re = `WKHE-W_EditorShell`, ze = `WKHE-W_ImagePreview`, Be = `WKHE-W_ImagePreviewShell`, z = {
            EditorShell: Re,
            ImagePreview: ze,
            ImagePreviewShell: Be
        }
    }));

function He(e) {
    "use forget";
    let t = (0, B.c)(5),
        {
            fileName: n,
            mimeType: r,
            previewSource: i
        } = e,
        a = i?.kind === `buffer` ? i.buffer : null,
        [o, s] = (0, V.useState)(null),
        c, l;
    return t[0] !== n || t[1] !== r || t[2] !== a ? (c = () => {
        if (a == null) {
            s(Ue);
            return
        }
        let e = URL.createObjectURL(new Blob([a], {
            type: We({
                mimeType: r,
                fileName: n
            }) ?? void 0
        }));
        return s({
            buffer: a,
            src: e
        }), () => {
            URL.revokeObjectURL(e)
        }
    }, l = [n, r, a], t[0] = n, t[1] = r, t[2] = a, t[3] = c, t[4] = l) : (c = t[3], l = t[4]), (0, V.useEffect)(c, l), i?.kind === `download_url` ? i.downloadUrl : i?.kind === `buffer` && o?.buffer === a ? o.src : null
}

function Ue(e) {
    return e == null ? e : null
}

function We({
    mimeType: e,
    fileName: t
}) {
    let n = e?.split(`;`)[0]?.trim().toLowerCase();
    if (n != null && n.length > 0) return n;
    let r = t.lastIndexOf(`.`);
    return r <= 0 || r === t.length - 1 ? null : qe[t.slice(r + 1).toLowerCase()] ?? null
}
var B, V, H, Ge, Ke, qe, U, Je = e((() => {
        B = v(), M(), S(), V = t(h()), N(), Ve(), H = f(), Ge = e => {
            "use forget";
            let t = (0, B.c)(16),
                {
                    gptId: n,
                    skillId: r,
                    node: i
                } = e,
                a = i.upload_status !== `pending`,
                o;
            t[0] !== n || t[1] !== i || t[2] !== r || t[3] !== a ? (o = {
                gptId: n,
                skillId: r,
                node: i,
                enabled: a
            }, t[0] = n, t[1] = i, t[2] = r, t[3] = a, t[4] = o) : o = t[4];
            let s = C(o),
                c;
            t[5] !== i.mime_type || t[6] !== i.name || t[7] !== s.data ? (c = {
                fileName: i.name,
                mimeType: i.mime_type,
                previewSource: s.data
            }, t[5] = i.mime_type, t[6] = i.name, t[7] = s.data, t[8] = c) : c = t[8];
            let l = He(c);
            if (s.isError) {
                let e;
                return t[9] !== s.isRefetching || t[10] !== s.refetch ? (e = (0, H.jsx)(`div`, {
                    className: z.EditorShell,
                    children: (0, H.jsx)(I, {
                        onRetry: s.refetch,
                        isRefetching: s.isRefetching
                    })
                }), t[9] = s.isRefetching, t[10] = s.refetch, t[11] = e) : e = t[11], e
            }
            if (s.isLoading || l == null) {
                let e;
                return t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, H.jsx)(`div`, {
                    className: z.EditorShell,
                    children: (0, H.jsx)(F, {})
                }), t[12] = e) : e = t[12], e
            }
            let u;
            return t[13] !== l || t[14] !== i ? (u = (0, H.jsx)(U, {
                node: i,
                src: l
            }), t[13] = l, t[14] = i, t[15] = u) : u = t[15], u
        }, Ke = e => {
            "use forget";
            let t = (0, B.c)(16),
                {
                    agentId: n,
                    node: r,
                    isAgentStartPage: i
                } = e,
                a = r.file_id != null,
                o;
            t[0] !== n || t[1] !== r || t[2] !== a ? (o = {
                agentId: n,
                node: r,
                enabled: a
            }, t[0] = n, t[1] = r, t[2] = a, t[3] = o) : o = t[3];
            let s = xe(o),
                c;
            t[4] !== r.mime_type || t[5] !== r.name || t[6] !== s.data ? (c = {
                fileName: r.name,
                mimeType: r.mime_type,
                previewSource: s.data
            }, t[4] = r.mime_type, t[5] = r.name, t[6] = s.data, t[7] = c) : c = t[7];
            let l = He(c);
            if (s.isError) {
                let e;
                return t[8] !== s.isRefetching || t[9] !== s.refetch ? (e = (0, H.jsx)(`div`, {
                    className: z.EditorShell,
                    children: (0, H.jsx)(I, {
                        onRetry: s.refetch,
                        isRefetching: s.isRefetching
                    })
                }), t[8] = s.isRefetching, t[9] = s.refetch, t[10] = e) : e = t[10], e
            }
            if (s.isLoading || l == null) {
                let e;
                return t[11] === i ? e = t[12] : (e = (0, H.jsx)(`div`, {
                    className: z.EditorShell,
                    children: (0, H.jsx)(F, {
                        isAgentStartPage: i
                    })
                }), t[11] = i, t[12] = e), e
            }
            let u;
            return t[13] !== l || t[14] !== r ? (u = (0, H.jsx)(U, {
                node: r,
                src: l
            }), t[13] = l, t[14] = r, t[15] = u) : u = t[15], u
        }, qe = {
            avif: `image/avif`,
            bmp: `image/bmp`,
            gif: `image/gif`,
            ico: `image/x-icon`,
            jpeg: `image/jpeg`,
            jpg: `image/jpeg`,
            png: `image/png`,
            webp: `image/webp`
        }, U = e => {
            "use forget";
            let t = (0, B.c)(8),
                {
                    node: n,
                    src: r
                } = e,
                [i, a] = (0, V.useState)(null);
            if (i === r) {
                let e;
                return t[0] === n ? e = t[1] : (e = (0, H.jsx)(P, {
                    node: n
                }), t[0] = n, t[1] = e), e
            }
            let o;
            t[2] === r ? o = t[3] : (o = () => a(r), t[2] = r, t[3] = o);
            let s;
            return t[4] !== n.name || t[5] !== r || t[6] !== o ? (s = (0, H.jsx)(`div`, {
                className: z.ImagePreviewShell,
                children: (0, H.jsx)(`img`, {
                    className: z.ImagePreview,
                    src: r,
                    alt: n.name,
                    decoding: `async`,
                    onError: o
                })
            }), t[4] = n.name, t[5] = r, t[6] = o, t[7] = s) : s = t[7], s
        }
    })),
    Ye, Xe, Ze, W, Qe = e((() => {
        Ye = `TM7Ijq_LoadingIndicator`, Xe = `TM7Ijq_PdfPreviewContent`, Ze = `TM7Ijq_PdfPreviewShell`, W = {
            LoadingIndicator: Ye,
            PdfPreviewContent: Xe,
            PdfPreviewShell: Ze
        }
    })),
    G, K, $e, et, tt, nt, rt = e((() => {
        G = v(), u(), ae(), a(), Qe(), K = f(), _(), $e = o(() => g(() => import(`./85a70d5b-ns6jpyhmfivscsw4.js`).then(e => e.PDFViewer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])), {
            loading: () => null
        }), et = o(() => g(() => import(`./85a70d5b-ns6jpyhmfivscsw4.js`).then(e => e.PersistentFolderPDFViewer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])), {
            loading: () => null
        }), tt = e => {
            "use forget";
            let t = (0, G.c)(10),
                r, i;
            t[0] === e ? (r = t[1], i = t[2]) : ({
                isAgentStartPage: r,
                ...i
            } = e, t[0] = e, t[1] = r, t[2] = i);
            let a;
            t[3] === r ? a = t[4] : (a = (0, K.jsx)(`div`, {
                className: W.LoadingIndicator,
                children: r ? (0, K.jsx)(n, {}) : (0, K.jsx)(w, {})
            }), t[3] = r, t[4] = a);
            let o;
            t[5] === i ? o = t[6] : (o = (0, K.jsx)(`div`, {
                className: W.PdfPreviewContent,
                children: (0, K.jsx)($e, {
                    ...i
                })
            }), t[5] = i, t[6] = o);
            let s;
            return t[7] !== a || t[8] !== o ? (s = (0, K.jsxs)(`div`, {
                className: W.PdfPreviewShell,
                children: [a, o]
            }), t[7] = a, t[8] = o, t[9] = s) : s = t[9], s
        }, nt = e => {
            "use forget";
            let t = (0, G.c)(10),
                r, i;
            t[0] === e ? (r = t[1], i = t[2]) : ({
                isAgentStartPage: r,
                ...i
            } = e, t[0] = e, t[1] = r, t[2] = i);
            let a;
            t[3] === r ? a = t[4] : (a = (0, K.jsx)(`div`, {
                className: W.LoadingIndicator,
                children: r ? (0, K.jsx)(n, {}) : (0, K.jsx)(w, {})
            }), t[3] = r, t[4] = a);
            let o;
            t[5] === i ? o = t[6] : (o = (0, K.jsx)(`div`, {
                className: W.PdfPreviewContent,
                children: (0, K.jsx)(et, {
                    ...i
                })
            }), t[5] = i, t[6] = o);
            let s;
            return t[7] !== a || t[8] !== o ? (s = (0, K.jsxs)(`div`, {
                className: W.PdfPreviewShell,
                children: [a, o]
            }), t[7] = a, t[8] = o, t[9] = s) : s = t[9], s
        }
    }));

function q(e, t) {
    c(() => {
        X.set(n => {
            let r = n.get(e);
            if (t == null && r == null || t != null && r?.content === t.content && r?.message === t.message) return n;
            let i = new Map(n);
            return t == null ? i.delete(e) : i.set(e, t), i
        })
    })
}

function it(e) {
    return e.kind === `folder` ? E.FOLDER : E.FILE
}

function at(e) {
    return e == null ? k.FILES_DETAIL : k.SKILL_DETAIL
}

function ot() {}

function st() {}
var ct, J, Y, X, lt, ut, dt, ft = e((() => {
        ct = v(), M(), se(), ge(), me(), S(), le(), de(), ye(), y(), l(), s(), J = t(h()), m(), De(), b(), N(), Y = f(), X = r(() => new Map), lt = ({
            node: e,
            editorMode: t,
            gptId: n,
            versionId: r,
            skillId: a,
            isReadonly: o
        }) => {
            "use no forget";
            let s = ee(),
                {
                    isPending: c
                } = fe(),
                l = ue(),
                u = ne({
                    gptId: n,
                    versionId: r,
                    skillId: a,
                    node: e,
                    enabled: e.upload_status !== `pending`
                }),
                f = u.data,
                p = he({
                    gptId: n,
                    skillId: a,
                    nodeId: e.id
                }),
                m = i(() => X().get(p) ?? null),
                [h, g] = (0, J.useState)(m?.content ?? f ?? ``),
                _ = (0, J.useRef)(m?.content ?? null),
                v = (0, J.useRef)(f ?? ``),
                y = (0, J.useRef)(!1),
                b = (0, J.useRef)(m == null ? null : {
                    saveKey: p,
                    message: m.message
                }),
                S = o !== !0,
                C = !S || c,
                ae = ce(p);
            (0, J.useEffect)(() => {
                if (f == null) return;
                let e = v.current;
                v.current = f, _.current == null && !j(p) && A({
                    gptId: n,
                    isDirty: !1,
                    skillId: a
                });
                let t = X().has(p);
                g(n => _.current == null && !t && n === e ? f : n)
            }, [n, p, f, a]);
            let w = d(t => {
                    let i = X().get(p);
                    if (i != null && q(p, {
                            ...i,
                            content: t
                        }), _.current = t, t === v.current) {
                        if (_.current = null, _e(p) || !j(p)) {
                            A({
                                gptId: n,
                                isDirty: !1,
                                skillId: a
                            });
                            let e = b.current ?? (i == null ? null : {
                                    saveKey: p,
                                    message: i.message
                                }),
                                {
                                    saveError: t,
                                    saveErrorRetry: r
                                } = ie().displayState;
                            e != null && e.saveKey === p && t === e.message && r == null && x.setSaveError(null), b.current = null, q(p, null);
                            return
                        }
                        A({
                            gptId: n,
                            isDirty: !0,
                            skillId: a
                        })
                    }

                    function o() {
                        if (j(p)) return;
                        let e = b.current,
                            r = !y.current && e != null;
                        if (!(r && X().get(p)?.content !== t) && _.current === t)
                            if (_.current = null, v.current = t, A({
                                    gptId: n,
                                    isDirty: !1,
                                    skillId: a
                                }), b.current = null, q(p, null), r && e != null) {
                                let {
                                    saveError: t,
                                    saveErrorRetry: n
                                } = ie().displayState;
                                e.saveKey === p && t === e.message && n == null && x.setSaveError(null)
                            } else x.setSaveError(null)
                    }

                    function c(n) {
                        if (_.current === t) {
                            let r = n instanceof te,
                                i = r ? s.formatMessage(n.messageDescriptor) : s.formatMessage(dt.fileSaveFailed, {
                                    fileName: e.name
                                });
                            b.current = r ? {
                                saveKey: p,
                                message: i
                            } : null, r && q(p, {
                                content: t,
                                message: i
                            }), x.setSaveError(i), j(p) || u()
                        }
                    }

                    function u() {
                        pe({
                            content: t,
                            flushGptBuilderAutosave: l,
                            node: e,
                            gptId: n,
                            versionId: r,
                            skillId: a
                        }).then(o, c)
                    }
                    u()
                }),
                E = d(() => {
                    S && ve(n)
                });
            return (0, J.useEffect)(() => (y.current = !0, () => {
                y.current = !1, E()
            }), [E]), ae && m == null ? (0, Y.jsx)(F, {}) : u.isError ? (0, Y.jsx)(I, {
                onRetry: async () => {
                    let t = re(),
                        r = {
                            source: at(a),
                            agentId: n ?? void 0,
                            file: {
                                fileNodeId: e.id,
                                parentFileNodeId: e.parent_node_id ?? void 0,
                                fileKind: it(e)
                            },
                            ...a == null ? {} : {
                                skill: {
                                    skillId: a
                                }
                            }
                        };
                    T({
                        actionType: D.FILE_LOAD_RETRY,
                        actionResult: O.STARTED,
                        actionInstanceId: t.actionInstanceId,
                        ...r
                    });
                    try {
                        let e = await u.refetch(),
                            n = e.isError ? e.error : void 0;
                        T({
                            actionType: D.FILE_LOAD_RETRY,
                            actionResult: n == null ? O.SUCCEEDED : O.FAILED,
                            ...r,
                            request: t(n == null ? void 0 : {
                                error: n
                            })
                        })
                    } catch (e) {
                        T({
                            actionType: D.FILE_LOAD_RETRY,
                            actionResult: O.FAILED,
                            ...r,
                            request: t({
                                error: e
                            })
                        })
                    }
                },
                isRefetching: u.isRefetching
            }) : f == null ? (0, Y.jsx)(F, {}) : (0, Y.jsx)(Oe, {
                value: m?.content ?? h,
                language: t.kind === `code` ? t.language : null,
                isReadonly: C,
                onChange: t => {
                    T({
                        actionType: D.FILE_CONTENT_EDIT,
                        source: at(a),
                        agentId: n ?? void 0,
                        file: {
                            fileNodeId: e.id,
                            parentFileNodeId: e.parent_node_id ?? void 0,
                            fileKind: it(e)
                        },
                        editor: {
                            field: oe.FILE_CONTENT
                        },
                        ...a == null ? {} : {
                            skill: {
                                skillId: a
                            }
                        }
                    }), g(t), A({
                        gptId: n,
                        isDirty: t !== v.current,
                        skillId: a
                    }), w(t)
                },
                onBlur: E
            })
        }, ut = e => {
            "use forget";
            let t = (0, ct.c)(12),
                {
                    agentId: n,
                    node: r,
                    editorMode: i,
                    isAgentStartPage: a
                } = e,
                o = r.file_id != null,
                s;
            t[0] !== n || t[1] !== r || t[2] !== o ? (s = {
                agentId: n,
                node: r,
                enabled: o
            }, t[0] = n, t[1] = r, t[2] = o, t[3] = s) : s = t[3];
            let c = be(s);
            if (c.isError) {
                let e;
                return t[4] !== c.isRefetching || t[5] !== c.refetch ? (e = (0, Y.jsx)(I, {
                    onRetry: c.refetch,
                    isRefetching: c.isRefetching
                }), t[4] = c.isRefetching, t[5] = c.refetch, t[6] = e) : e = t[6], e
            }
            if (c.isLoading || c.data == null) {
                let e;
                return t[7] === a ? e = t[8] : (e = (0, Y.jsx)(F, {
                    isAgentStartPage: a
                }), t[7] = a, t[8] = e), e
            }
            let l = i.kind === `code` ? i.language : null,
                u;
            return t[9] !== c.data || t[10] !== l ? (u = (0, Y.jsx)(Oe, {
                value: c.data,
                language: l,
                isReadonly: !0,
                onChange: ot,
                onBlur: st
            }), t[9] = c.data, t[10] = l, t[11] = u) : u = t[11], u
        }, dt = p({
            fileSaveFailed: {
                id: `Hermes.GptStudio.Builder.FilePreview.fileSaveFailed`,
                defaultMessage: `Couldn't save changes to {fileName}`
            }
        })
    })),
    Z, Q, pt, $, mt = e((() => {
        Z = v(), Fe(), N(), Le(), Je(), rt(), ft(), Q = f(), pt = e => {
            "use forget";
            let t = (0, Z.c)(19),
                {
                    node: n,
                    gptId: r,
                    versionId: i,
                    skillId: a,
                    isReadonly: o
                } = e,
                s;
            t[0] === n ? s = t[1] : (s = ke(n), t[0] = n, t[1] = s);
            let c = s;
            if (c == null) {
                let e;
                return t[2] === n ? e = t[3] : (e = (0, Q.jsx)(`div`, {
                    className: R.EditorShell,
                    children: (0, Q.jsx)(P, {
                        node: n
                    })
                }), t[2] = n, t[3] = e), e
            }
            if (c.kind === `pdf`) {
                let e;
                return t[4] !== r || t[5] !== n || t[6] !== a ? (e = (0, Q.jsx)(`div`, {
                    className: R.EditorShell,
                    children: (0, Q.jsx)(tt, {
                        gptId: r,
                        skillId: a,
                        node: n
                    })
                }), t[4] = r, t[5] = n, t[6] = a, t[7] = e) : e = t[7], e
            }
            if (c.kind === `image`) {
                let e;
                return t[8] !== r || t[9] !== n || t[10] !== a ? (e = (0, Q.jsx)(Ge, {
                    gptId: r,
                    skillId: a,
                    node: n
                }), t[8] = r, t[9] = n, t[10] = a, t[11] = e) : e = t[11], e
            }
            let l;
            return t[12] !== c || t[13] !== r || t[14] !== o || t[15] !== n || t[16] !== a || t[17] !== i ? (l = (0, Q.jsx)(`div`, {
                className: R.EditorShell,
                "data-type": `text`,
                children: (0, Q.jsx)(lt, {
                    node: n,
                    editorMode: c,
                    gptId: r,
                    versionId: i,
                    skillId: a,
                    isReadonly: o
                })
            }), t[12] = c, t[13] = r, t[14] = o, t[15] = n, t[16] = a, t[17] = i, t[18] = l) : l = t[18], l
        }, $ = e => {
            "use forget";
            let t = (0, Z.c)(17),
                {
                    agentId: n,
                    node: r,
                    isAgentStartPage: i
                } = e,
                a;
            t[0] === r ? a = t[1] : (a = ke(r), t[0] = r, t[1] = a);
            let o = a;
            if (o == null || r.file_id == null) {
                let e;
                return t[2] === r ? e = t[3] : (e = (0, Q.jsx)(`div`, {
                    className: R.EditorShell,
                    children: (0, Q.jsx)(P, {
                        node: r
                    })
                }), t[2] = r, t[3] = e), e
            }
            if (o.kind === `pdf`) {
                let e;
                return t[4] !== n || t[5] !== i || t[6] !== r ? (e = (0, Q.jsx)(`div`, {
                    className: R.EditorShell,
                    children: (0, Q.jsx)(nt, {
                        isAgentStartPage: i,
                        agentId: n,
                        node: r
                    })
                }), t[4] = n, t[5] = i, t[6] = r, t[7] = e) : e = t[7], e
            }
            if (o.kind === `image`) {
                let e;
                return t[8] !== n || t[9] !== i || t[10] !== r ? (e = (0, Q.jsx)(Ke, {
                    isAgentStartPage: i,
                    agentId: n,
                    node: r
                }), t[8] = n, t[9] = i, t[10] = r, t[11] = e) : e = t[11], e
            }
            let s;
            return t[12] !== n || t[13] !== o || t[14] !== i || t[15] !== r ? (s = (0, Q.jsx)(`div`, {
                className: R.EditorShell,
                "data-type": `text`,
                children: (0, Q.jsx)(ut, {
                    agentId: n,
                    node: r,
                    editorMode: o,
                    isAgentStartPage: i
                })
            }), t[12] = n, t[13] = o, t[14] = i, t[15] = r, t[16] = s) : s = t[16], s
        }
    }));
export {
    $ as n, mt as r, pt as t
};
//# sourceMappingURL=eab609b4-dq8slswvryz159ar.js.map