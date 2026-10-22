const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/85a70d5b-d9myjxanmzviorvu.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/conversation-small-m7dgsxtvvivh3e6t.js", "assets/4813494d-d7xm9wsvhdfbag9a.js", "assets/root-lelxp0l2.css", "assets/30901919-lc79rizhhepnsl3q.js", "assets/c470f5ab-lnsrbaizit3lulwq.js", "assets/0e5afe53-lar0ol3v36kqq3ou.js", "assets/conversation-small-ertg9659.css", "assets/1c919af1-l4n6ac3ef72w21fi.js", "assets/707eab0c-gri10pp28kmmyx2c.js", "assets/c2675c8c-f8x469cgefxzeo6l.js", "assets/82782bc9-cyj0qqxyrvk6mamy.js", "assets/8b34dbc2-ik628tlti8ozm9vq.js", "assets/global-modals-dxg9ukpk.css", "assets/9d60841e-e49t3yx590vsf159.js", "assets/bcae0416-coo684zjcsjqyfuy.js", "assets/d4c740a3-m98a0dejurzr8grq.js", "assets/Button-ijivgymd.css", "assets/a35abcd6-ckxh13c2nv3bytau.js", "assets/74a883a0-0bl4w620esk73bmz.js", "assets/4b68ab38-hqs0yc0b0yhvv7p6.js", "assets/e981ddae-jmgg6ibiidqeeif6.js", "assets/29887a5f-jeepwxn9a2n5e544.js", "assets/36ecb4f8-kelvnsncscih3rjl.js", "assets/Input-cmdkk215.css", "assets/5334be9f-erkzd6jb5kw6k65g.js", "assets/14bfa043-j099hvf56gfathms.js", "assets/file-preview-states-nfjy1aeo.css", "assets/27597608-lsrk2ik2e21ag6u7.js", "assets/bcae0416-misou7aehkxsgrb2.js", "assets/pdf-file-preview-g0sia5td.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as n,
    A8 as r,
    CN as i,
    J5 as a,
    R8 as o,
    Rz as s,
    a2 as c,
    o2 as l,
    wN as u,
    zz as d
} from "./4813494d-d7xm9wsvhdfbag9a.js";
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
    yRt as ae
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    b as oe,
    x as C
} from "./707eab0c-gri10pp28kmmyx2c.js";
import {
    a as w,
    d as se,
    f as T,
    o as E,
    s as D,
    t as ce,
    x as le
} from "./4285e798-j46duup4je4kn2k3.js";
import {
    C as ue,
    D as O,
    M as de,
    N as fe,
    T as pe,
    b as k,
    d as me,
    i as he,
    n as ge,
    t as _e,
    u as ve,
    v as ye,
    x as be,
    y as xe
} from "./8e7d0a25-lil60ls70b75jmqj.js";
import {
    c as Se,
    i as A,
    l as Ce,
    n as j,
    r as M,
    t as N,
    u as we
} from "./5334be9f-erkzd6jb5kw6k65g.js";
import {
    a as Te,
    i as Ee,
    o as De,
    s as Oe,
    t as ke
} from "./de67e829-c33h6hysbymgql2w.js";
import {
    n as Ae,
    t as je
} from "./fe6483fa-jbxf4nq903ksr2lj.js";

function Me(e) {
    let t = Fe(e.name),
        n = t == null ? null : De[t];
    return Ne(e) ? {
        kind: `pdf`
    } : Pe(e, t) ? {
        kind: `image`
    } : n != null && ke(n) ? {
        kind: `code`,
        language: n
    } : n != null && n === Te.other || Ie(e.mime_type) ? {
        kind: `text`
    } : null
}

function Ne(e) {
    return P(e.mime_type) === `application/pdf` || Fe(e.name) === `pdf`
}

function Pe(e, t) {
    return P(e.mime_type)?.startsWith(`image/`) === !0 || t != null && F.has(t)
}

function Fe(e) {
    let t = e.lastIndexOf(`.`);
    return t <= 0 || t === e.length - 1 ? null : e.slice(t + 1).toLowerCase()
}

function Ie(e) {
    let t = P(e);
    return t == null ? !1 : t.startsWith(`text/`) || t === `application/json` || t === `application/x-yaml` || t === `application/xml`
}

function P(e) {
    return e?.split(`;`)[0]?.trim().toLowerCase() || null
}
var F, Le = e((() => {
        Oe(), Ee(), F = new Set([`avif`, `bmp`, `gif`, `ico`, `jpeg`, `jpg`, `png`, `webp`])
    })),
    I, L, Re = e((() => {
        I = `TUsMmG_EditorShell`, L = {
            EditorShell: I
        }
    })),
    ze, Be, Ve, R, He = e((() => {
        ze = `WKHE-W_EditorShell`, Be = `WKHE-W_ImagePreview`, Ve = `WKHE-W_ImagePreviewShell`, R = {
            EditorShell: ze,
            ImagePreview: Be,
            ImagePreviewShell: Ve
        }
    }));

function z(e) {
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
        B = v(), Se(), S(), V = t(h()), A(), He(), H = f(), Ge = e => {
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
            let s = ae(o),
                c;
            t[5] !== i.mime_type || t[6] !== i.name || t[7] !== s.data ? (c = {
                fileName: i.name,
                mimeType: i.mime_type,
                previewSource: s.data
            }, t[5] = i.mime_type, t[6] = i.name, t[7] = s.data, t[8] = c) : c = t[8];
            let l = z(c);
            if (s.isError) {
                let e;
                return t[9] !== s.isRefetching || t[10] !== s.refetch ? (e = (0, H.jsx)(`div`, {
                    className: R.EditorShell,
                    children: (0, H.jsx)(N, {
                        onRetry: s.refetch,
                        isRefetching: s.isRefetching
                    })
                }), t[9] = s.isRefetching, t[10] = s.refetch, t[11] = e) : e = t[11], e
            }
            if (s.isLoading || l == null) {
                let e;
                return t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, H.jsx)(`div`, {
                    className: R.EditorShell,
                    children: (0, H.jsx)(M, {})
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
            let s = we(o),
                c;
            t[4] !== r.mime_type || t[5] !== r.name || t[6] !== s.data ? (c = {
                fileName: r.name,
                mimeType: r.mime_type,
                previewSource: s.data
            }, t[4] = r.mime_type, t[5] = r.name, t[6] = s.data, t[7] = c) : c = t[7];
            let l = z(c);
            if (s.isError) {
                let e;
                return t[8] !== s.isRefetching || t[9] !== s.refetch ? (e = (0, H.jsx)(`div`, {
                    className: R.EditorShell,
                    children: (0, H.jsx)(N, {
                        onRetry: s.refetch,
                        isRefetching: s.isRefetching
                    })
                }), t[8] = s.isRefetching, t[9] = s.refetch, t[10] = e) : e = t[10], e
            }
            if (s.isLoading || l == null) {
                let e;
                return t[11] === i ? e = t[12] : (e = (0, H.jsx)(`div`, {
                    className: R.EditorShell,
                    children: (0, H.jsx)(M, {
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
                return t[0] === n ? e = t[1] : (e = (0, H.jsx)(j, {
                    node: n
                }), t[0] = n, t[1] = e), e
            }
            let o;
            t[2] === r ? o = t[3] : (o = () => a(r), t[2] = r, t[3] = o);
            let s;
            return t[4] !== n.name || t[5] !== r || t[6] !== o ? (s = (0, H.jsx)(`div`, {
                className: R.ImagePreviewShell,
                children: (0, H.jsx)(`img`, {
                    className: R.ImagePreview,
                    src: r,
                    alt: n.name,
                    decoding: `async`,
                    onError: o
                })
            }), t[4] = n.name, t[5] = r, t[6] = o, t[7] = s) : s = t[7], s
        }
    })),
    W, Ye, Xe, G, Ze = e((() => {
        W = `TM7Ijq_LoadingIndicator`, Ye = `TM7Ijq_PdfPreviewContent`, Xe = `TM7Ijq_PdfPreviewShell`, G = {
            LoadingIndicator: W,
            PdfPreviewContent: Ye,
            PdfPreviewShell: Xe
        }
    })),
    K, q, Qe, $e, et, tt, nt = e((() => {
        K = v(), d(), oe(), l(), Ze(), q = f(), _(), Qe = c(() => g(() => import(`./85a70d5b-d9myjxanmzviorvu.js`).then(e => e.PDFViewer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])), {
            loading: () => null
        }), $e = c(() => g(() => import(`./85a70d5b-d9myjxanmzviorvu.js`).then(e => e.PersistentFolderPDFViewer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])), {
            loading: () => null
        }), et = e => {
            "use forget";
            let t = (0, K.c)(10),
                n, r;
            t[0] === e ? (n = t[1], r = t[2]) : ({
                isAgentStartPage: n,
                ...r
            } = e, t[0] = e, t[1] = n, t[2] = r);
            let i;
            t[3] === n ? i = t[4] : (i = (0, q.jsx)(`div`, {
                className: G.LoadingIndicator,
                children: n ? (0, q.jsx)(s, {}) : (0, q.jsx)(C, {})
            }), t[3] = n, t[4] = i);
            let a;
            t[5] === r ? a = t[6] : (a = (0, q.jsx)(`div`, {
                className: G.PdfPreviewContent,
                children: (0, q.jsx)(Qe, {
                    ...r
                })
            }), t[5] = r, t[6] = a);
            let o;
            return t[7] !== i || t[8] !== a ? (o = (0, q.jsxs)(`div`, {
                className: G.PdfPreviewShell,
                children: [i, a]
            }), t[7] = i, t[8] = a, t[9] = o) : o = t[9], o
        }, tt = e => {
            "use forget";
            let t = (0, K.c)(10),
                n, r;
            t[0] === e ? (n = t[1], r = t[2]) : ({
                isAgentStartPage: n,
                ...r
            } = e, t[0] = e, t[1] = n, t[2] = r);
            let i;
            t[3] === n ? i = t[4] : (i = (0, q.jsx)(`div`, {
                className: G.LoadingIndicator,
                children: n ? (0, q.jsx)(s, {}) : (0, q.jsx)(C, {})
            }), t[3] = n, t[4] = i);
            let a;
            t[5] === r ? a = t[6] : (a = (0, q.jsx)(`div`, {
                className: G.PdfPreviewContent,
                children: (0, q.jsx)($e, {
                    ...r
                })
            }), t[5] = r, t[6] = a);
            let o;
            return t[7] !== i || t[8] !== a ? (o = (0, q.jsxs)(`div`, {
                className: G.PdfPreviewShell,
                children: [i, a]
            }), t[7] = i, t[8] = a, t[9] = o) : o = t[9], o
        }
    }));

function J(e, t) {
    n(() => {
        Z.set(n => {
            let r = n.get(e);
            if (t == null && r == null || t != null && r?.content === t.content && r?.message === t.message) return n;
            let i = new Map(n);
            return t == null ? i.delete(e) : i.set(e, t), i
        })
    })
}

function rt(e) {
    return e.kind === `folder` ? T.FOLDER : T.FILE
}

function it(e) {
    return e == null ? le.FILES_DETAIL : le.SKILL_DETAIL
}

function at() {}

function ot() {}
var st, Y, X, Z, ct, lt, ut, dt = e((() => {
        st = v(), Se(), ce(), ve(), ge(), S(), de(), pe(), xe(), y(), r(), i(), Y = t(h()), m(), Ae(), b(), A(), X = f(), Z = o(() => new Map), ct = ({
            node: e,
            editorMode: t,
            gptId: n,
            versionId: r,
            skillId: i,
            isReadonly: o
        }) => {
            "use no forget";
            let s = ee(),
                {
                    isPending: c
                } = me(),
                l = fe(),
                d = ne({
                    gptId: n,
                    versionId: r,
                    skillId: i,
                    node: e,
                    enabled: e.upload_status !== `pending`
                }),
                f = d.data,
                p = _e({
                    gptId: n,
                    skillId: i,
                    nodeId: e.id
                }),
                m = a(() => Z().get(p) ?? null),
                [h, g] = (0, Y.useState)(m?.content ?? f ?? ``),
                _ = (0, Y.useRef)(m?.content ?? null),
                v = (0, Y.useRef)(f ?? ``),
                y = (0, Y.useRef)(!1),
                b = (0, Y.useRef)(m == null ? null : {
                    saveKey: p,
                    message: m.message
                }),
                S = o !== !0,
                ae = !S || c,
                oe = ue(p);
            (0, Y.useEffect)(() => {
                if (f == null) return;
                let e = v.current;
                v.current = f, _.current == null && !k(p) && O({
                    gptId: n,
                    isDirty: !1,
                    skillId: i
                });
                let t = Z().has(p);
                g(n => _.current == null && !t && n === e ? f : n)
            }, [n, p, f, i]);
            let C = u(t => {
                    let a = Z().get(p);
                    if (a != null && J(p, {
                            ...a,
                            content: t
                        }), _.current = t, t === v.current) {
                        if (_.current = null, ye(p) || !k(p)) {
                            O({
                                gptId: n,
                                isDirty: !1,
                                skillId: i
                            });
                            let e = b.current ?? (a == null ? null : {
                                    saveKey: p,
                                    message: a.message
                                }),
                                {
                                    saveError: t,
                                    saveErrorRetry: r
                                } = ie().displayState;
                            e != null && e.saveKey === p && t === e.message && r == null && x.setSaveError(null), b.current = null, J(p, null);
                            return
                        }
                        O({
                            gptId: n,
                            isDirty: !0,
                            skillId: i
                        })
                    }

                    function o() {
                        if (k(p)) return;
                        let e = b.current,
                            r = !y.current && e != null;
                        if (!(r && Z().get(p)?.content !== t) && _.current === t)
                            if (_.current = null, v.current = t, O({
                                    gptId: n,
                                    isDirty: !1,
                                    skillId: i
                                }), b.current = null, J(p, null), r && e != null) {
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
                                i = r ? s.formatMessage(n.messageDescriptor) : s.formatMessage(ut.fileSaveFailed, {
                                    fileName: e.name
                                });
                            b.current = r ? {
                                saveKey: p,
                                message: i
                            } : null, r && J(p, {
                                content: t,
                                message: i
                            }), x.setSaveError(i), k(p) || u()
                        }
                    }

                    function u() {
                        he({
                            content: t,
                            flushGptBuilderAutosave: l,
                            node: e,
                            gptId: n,
                            versionId: r,
                            skillId: i
                        }).then(o, c)
                    }
                    u()
                }),
                T = u(() => {
                    S && be(n)
                });
            return (0, Y.useEffect)(() => (y.current = !0, () => {
                y.current = !1, T()
            }), [T]), oe && m == null ? (0, X.jsx)(M, {}) : d.isError ? (0, X.jsx)(N, {
                onRetry: async () => {
                    let t = re(),
                        r = {
                            source: it(i),
                            agentId: n ?? void 0,
                            file: {
                                fileNodeId: e.id,
                                parentFileNodeId: e.parent_node_id ?? void 0,
                                fileKind: rt(e)
                            },
                            ...i == null ? {} : {
                                skill: {
                                    skillId: i
                                }
                            }
                        };
                    w({
                        actionType: E.FILE_LOAD_RETRY,
                        actionResult: D.STARTED,
                        actionInstanceId: t.actionInstanceId,
                        ...r
                    });
                    try {
                        let e = await d.refetch(),
                            n = e.isError ? e.error : void 0;
                        w({
                            actionType: E.FILE_LOAD_RETRY,
                            actionResult: n == null ? D.SUCCEEDED : D.FAILED,
                            ...r,
                            request: t(n == null ? void 0 : {
                                error: n
                            })
                        })
                    } catch (e) {
                        w({
                            actionType: E.FILE_LOAD_RETRY,
                            actionResult: D.FAILED,
                            ...r,
                            request: t({
                                error: e
                            })
                        })
                    }
                },
                isRefetching: d.isRefetching
            }) : f == null ? (0, X.jsx)(M, {}) : (0, X.jsx)(je, {
                value: m?.content ?? h,
                language: t.kind === `code` ? t.language : null,
                isReadonly: ae,
                onChange: t => {
                    w({
                        actionType: E.FILE_CONTENT_EDIT,
                        source: it(i),
                        agentId: n ?? void 0,
                        file: {
                            fileNodeId: e.id,
                            parentFileNodeId: e.parent_node_id ?? void 0,
                            fileKind: rt(e)
                        },
                        editor: {
                            field: se.FILE_CONTENT
                        },
                        ...i == null ? {} : {
                            skill: {
                                skillId: i
                            }
                        }
                    }), g(t), O({
                        gptId: n,
                        isDirty: t !== v.current,
                        skillId: i
                    }), C(t)
                },
                onBlur: T
            })
        }, lt = e => {
            "use forget";
            let t = (0, st.c)(12),
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
            let c = Ce(s);
            if (c.isError) {
                let e;
                return t[4] !== c.isRefetching || t[5] !== c.refetch ? (e = (0, X.jsx)(N, {
                    onRetry: c.refetch,
                    isRefetching: c.isRefetching
                }), t[4] = c.isRefetching, t[5] = c.refetch, t[6] = e) : e = t[6], e
            }
            if (c.isLoading || c.data == null) {
                let e;
                return t[7] === a ? e = t[8] : (e = (0, X.jsx)(M, {
                    isAgentStartPage: a
                }), t[7] = a, t[8] = e), e
            }
            let l = i.kind === `code` ? i.language : null,
                u;
            return t[9] !== c.data || t[10] !== l ? (u = (0, X.jsx)(je, {
                value: c.data,
                language: l,
                isReadonly: !0,
                onChange: at,
                onBlur: ot
            }), t[9] = c.data, t[10] = l, t[11] = u) : u = t[11], u
        }, ut = p({
            fileSaveFailed: {
                id: `Hermes.GptStudio.Builder.FilePreview.fileSaveFailed`,
                defaultMessage: `Couldn't save changes to {fileName}`
            }
        })
    })),
    Q, $, ft, pt, mt = e((() => {
        Q = v(), Le(), A(), Re(), Je(), nt(), dt(), $ = f(), ft = e => {
            "use forget";
            let t = (0, Q.c)(19),
                {
                    node: n,
                    gptId: r,
                    versionId: i,
                    skillId: a,
                    isReadonly: o
                } = e,
                s;
            t[0] === n ? s = t[1] : (s = Me(n), t[0] = n, t[1] = s);
            let c = s;
            if (c == null) {
                let e;
                return t[2] === n ? e = t[3] : (e = (0, $.jsx)(`div`, {
                    className: L.EditorShell,
                    children: (0, $.jsx)(j, {
                        node: n
                    })
                }), t[2] = n, t[3] = e), e
            }
            if (c.kind === `pdf`) {
                let e;
                return t[4] !== r || t[5] !== n || t[6] !== a ? (e = (0, $.jsx)(`div`, {
                    className: L.EditorShell,
                    children: (0, $.jsx)(et, {
                        gptId: r,
                        skillId: a,
                        node: n
                    })
                }), t[4] = r, t[5] = n, t[6] = a, t[7] = e) : e = t[7], e
            }
            if (c.kind === `image`) {
                let e;
                return t[8] !== r || t[9] !== n || t[10] !== a ? (e = (0, $.jsx)(Ge, {
                    gptId: r,
                    skillId: a,
                    node: n
                }), t[8] = r, t[9] = n, t[10] = a, t[11] = e) : e = t[11], e
            }
            let l;
            return t[12] !== c || t[13] !== r || t[14] !== o || t[15] !== n || t[16] !== a || t[17] !== i ? (l = (0, $.jsx)(`div`, {
                className: L.EditorShell,
                "data-type": `text`,
                children: (0, $.jsx)(ct, {
                    node: n,
                    editorMode: c,
                    gptId: r,
                    versionId: i,
                    skillId: a,
                    isReadonly: o
                })
            }), t[12] = c, t[13] = r, t[14] = o, t[15] = n, t[16] = a, t[17] = i, t[18] = l) : l = t[18], l
        }, pt = e => {
            "use forget";
            let t = (0, Q.c)(17),
                {
                    agentId: n,
                    node: r,
                    isAgentStartPage: i
                } = e,
                a;
            t[0] === r ? a = t[1] : (a = Me(r), t[0] = r, t[1] = a);
            let o = a;
            if (o == null || r.file_id == null) {
                let e;
                return t[2] === r ? e = t[3] : (e = (0, $.jsx)(`div`, {
                    className: L.EditorShell,
                    children: (0, $.jsx)(j, {
                        node: r
                    })
                }), t[2] = r, t[3] = e), e
            }
            if (o.kind === `pdf`) {
                let e;
                return t[4] !== n || t[5] !== i || t[6] !== r ? (e = (0, $.jsx)(`div`, {
                    className: L.EditorShell,
                    children: (0, $.jsx)(tt, {
                        isAgentStartPage: i,
                        agentId: n,
                        node: r
                    })
                }), t[4] = n, t[5] = i, t[6] = r, t[7] = e) : e = t[7], e
            }
            if (o.kind === `image`) {
                let e;
                return t[8] !== n || t[9] !== i || t[10] !== r ? (e = (0, $.jsx)(Ke, {
                    isAgentStartPage: i,
                    agentId: n,
                    node: r
                }), t[8] = n, t[9] = i, t[10] = r, t[11] = e) : e = t[11], e
            }
            let s;
            return t[12] !== n || t[13] !== o || t[14] !== i || t[15] !== r ? (s = (0, $.jsx)(`div`, {
                className: L.EditorShell,
                "data-type": `text`,
                children: (0, $.jsx)(lt, {
                    agentId: n,
                    node: r,
                    editorMode: o,
                    isAgentStartPage: i
                })
            }), t[12] = n, t[13] = o, t[14] = i, t[15] = r, t[16] = s) : s = t[16], s
        }
    }));
export {
    pt as n, mt as r, ft as t
};
//# sourceMappingURL=eab609b4-n2iv54e03jjztusb.js.map