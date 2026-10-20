const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/85a70d5b-om1g991fun3oqrhq.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/root-lelxp0l2.css", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/1c919af1-md3slc2ht6it8c1k.js", "assets/707eab0c-hquix1of0ixypvkq.js", "assets/c2675c8c-nxl2ic2ofk2vw70s.js", "assets/82782bc9-jj605vonxg0iyc7p.js", "assets/8b34dbc2-d4icgkio4i3wfm6q.js", "assets/global-modals-lv5n3ujm.css", "assets/9d60841e-iq8jqsevylx8yfuv.js", "assets/bcae0416-id11cwjb6ybczrya.js", "assets/d4c740a3-ejmx8mw37mgqphty.js", "assets/Button-ijivgymd.css", "assets/a35abcd6-kcua9d3wne9fesqf.js", "assets/74a883a0-b8v1pxw5uk7r9z12.js", "assets/4b68ab38-jbucsll0fq82l60z.js", "assets/e981ddae-luylzpqk7blubktl.js", "assets/cb84f617-ehu83a3kxi4rlfir.js", "assets/36ecb4f8-bkwzzk2piicn5d88.js", "assets/Input-cmdkk215.css", "assets/5334be9f-d06alxi343hy21r6.js", "assets/14bfa043-j099hvf56gfathms.js", "assets/file-preview-states-nfjy1aeo.css", "assets/27597608-efy2okuyf0k1zehd.js", "assets/bcae0416-n4q8l93nedx7tote2.js", "assets/pdf-file-preview-g0sia5td.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Az as n,
    J0 as r,
    M5 as i,
    S8 as a,
    Y0 as o,
    _N as s,
    jz as c,
    m5 as l,
    m8 as u,
    vN as ee
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as te,
    Hn as d,
    Rn as f,
    Tn as p,
    Vn as m,
    ln as h,
    un as g,
    zn as _
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    TRt as v,
    bRt as ne,
    dzt as y,
    gRt as b,
    mRt as re,
    uRt as x,
    vzt as ie,
    wzt as ae,
    xHt as oe
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    b as se,
    x as S
} from "./707eab0c-hquix1of0ixypvkq.js";
import {
    a as C,
    d as ce,
    f as w,
    o as T,
    s as E,
    t as le,
    x as ue
} from "./4285e798-fz6qvtcc03ci3y1q.js";
import {
    C as de,
    D,
    M as fe,
    N as pe,
    T as me,
    b as O,
    d as he,
    i as ge,
    n as _e,
    t as ve,
    u as ye,
    v as be,
    x as xe,
    y as Se
} from "./8e7d0a25-c4oex49jr20n6c3r.js";
import {
    c as k,
    i as A,
    l as Ce,
    n as j,
    r as M,
    t as N,
    u as we
} from "./5334be9f-d06alxi343hy21r6.js";
import {
    a as Te,
    i as Ee,
    o as De,
    s as Oe,
    t as ke
} from "./de67e829-f68i24bijuhg1r85.js";
import {
    n as Ae,
    t as P
} from "./fe6483fa-fttrxpfgctyafgxz.js";

function je(e) {
    let t = Pe(e.name),
        n = t == null ? null : De[t];
    return Me(e) ? {
        kind: `pdf`
    } : Ne(e, t) ? {
        kind: `image`
    } : n != null && ke(n) ? {
        kind: `code`,
        language: n
    } : n != null && n === Te.other || Fe(e.mime_type) ? {
        kind: `text`
    } : null
}

function Me(e) {
    return F(e.mime_type) === `application/pdf` || Pe(e.name) === `pdf`
}

function Ne(e, t) {
    return F(e.mime_type)?.startsWith(`image/`) === !0 || t != null && Ie.has(t)
}

function Pe(e) {
    let t = e.lastIndexOf(`.`);
    return t <= 0 || t === e.length - 1 ? null : e.slice(t + 1).toLowerCase()
}

function Fe(e) {
    let t = F(e);
    return t == null ? !1 : t.startsWith(`text/`) || t === `application/json` || t === `application/x-yaml` || t === `application/xml`
}

function F(e) {
    return e?.split(`;`)[0]?.trim().toLowerCase() || null
}
var Ie, Le = e((() => {
        Oe(), Ee(), Ie = new Set([`avif`, `bmp`, `gif`, `ico`, `jpeg`, `jpg`, `png`, `webp`])
    })),
    Re, I, ze = e((() => {
        Re = `TUsMmG_EditorShell`, I = {
            EditorShell: Re
        }
    })),
    Be, Ve, L, R, He = e((() => {
        Be = `WKHE-W_EditorShell`, Ve = `WKHE-W_ImagePreview`, L = `WKHE-W_ImagePreviewShell`, R = {
            EditorShell: Be,
            ImagePreview: Ve,
            ImagePreviewShell: L
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
    return r <= 0 || r === t.length - 1 ? null : Ke[t.slice(r + 1).toLowerCase()] ?? null
}
var B, V, H, Ge, U, Ke, W, qe = e((() => {
        B = p(), k(), x(), V = t(d()), A(), He(), H = m(), Ge = e => {
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
            let s = b(o),
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
            return t[13] !== l || t[14] !== i ? (u = (0, H.jsx)(W, {
                node: i,
                src: l
            }), t[13] = l, t[14] = i, t[15] = u) : u = t[15], u
        }, U = e => {
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
            return t[13] !== l || t[14] !== r ? (u = (0, H.jsx)(W, {
                node: r,
                src: l
            }), t[13] = l, t[14] = r, t[15] = u) : u = t[15], u
        }, Ke = {
            avif: `image/avif`,
            bmp: `image/bmp`,
            gif: `image/gif`,
            ico: `image/x-icon`,
            jpeg: `image/jpeg`,
            jpg: `image/jpeg`,
            png: `image/png`,
            webp: `image/webp`
        }, W = e => {
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
    Je, Ye, Xe, G, Ze = e((() => {
        Je = `TM7Ijq_LoadingIndicator`, Ye = `TM7Ijq_PdfPreviewContent`, Xe = `TM7Ijq_PdfPreviewShell`, G = {
            LoadingIndicator: Je,
            PdfPreviewContent: Ye,
            PdfPreviewShell: Xe
        }
    })),
    K, q, Qe, $e, et, tt, nt = e((() => {
        K = p(), c(), se(), o(), Ze(), q = m(), g(), Qe = r(() => h(() => import(`./85a70d5b-om1g991fun3oqrhq.js`).then(e => e.PDFViewer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])), {
            loading: () => null
        }), $e = r(() => h(() => import(`./85a70d5b-om1g991fun3oqrhq.js`).then(e => e.PersistentFolderPDFViewer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])), {
            loading: () => null
        }), et = e => {
            "use forget";
            let t = (0, K.c)(10),
                r, i;
            t[0] === e ? (r = t[1], i = t[2]) : ({
                isAgentStartPage: r,
                ...i
            } = e, t[0] = e, t[1] = r, t[2] = i);
            let a;
            t[3] === r ? a = t[4] : (a = (0, q.jsx)(`div`, {
                className: G.LoadingIndicator,
                children: r ? (0, q.jsx)(n, {}) : (0, q.jsx)(S, {})
            }), t[3] = r, t[4] = a);
            let o;
            t[5] === i ? o = t[6] : (o = (0, q.jsx)(`div`, {
                className: G.PdfPreviewContent,
                children: (0, q.jsx)(Qe, {
                    ...i
                })
            }), t[5] = i, t[6] = o);
            let s;
            return t[7] !== a || t[8] !== o ? (s = (0, q.jsxs)(`div`, {
                className: G.PdfPreviewShell,
                children: [a, o]
            }), t[7] = a, t[8] = o, t[9] = s) : s = t[9], s
        }, tt = e => {
            "use forget";
            let t = (0, K.c)(10),
                r, i;
            t[0] === e ? (r = t[1], i = t[2]) : ({
                isAgentStartPage: r,
                ...i
            } = e, t[0] = e, t[1] = r, t[2] = i);
            let a;
            t[3] === r ? a = t[4] : (a = (0, q.jsx)(`div`, {
                className: G.LoadingIndicator,
                children: r ? (0, q.jsx)(n, {}) : (0, q.jsx)(S, {})
            }), t[3] = r, t[4] = a);
            let o;
            t[5] === i ? o = t[6] : (o = (0, q.jsx)(`div`, {
                className: G.PdfPreviewContent,
                children: (0, q.jsx)($e, {
                    ...i
                })
            }), t[5] = i, t[6] = o);
            let s;
            return t[7] !== a || t[8] !== o ? (s = (0, q.jsxs)(`div`, {
                className: G.PdfPreviewShell,
                children: [a, o]
            }), t[7] = a, t[8] = o, t[9] = s) : s = t[9], s
        }
    }));

function J(e, t) {
    l(() => {
        Z.set(n => {
            let r = n.get(e);
            if (t == null && r == null || t != null && r?.content === t.content && r?.message === t.message) return n;
            let i = new Map(n);
            return t == null ? i.delete(e) : i.set(e, t), i
        })
    })
}

function rt(e) {
    return e.kind === `folder` ? w.FOLDER : w.FILE
}

function it(e) {
    return e == null ? ue.FILES_DETAIL : ue.SKILL_DETAIL
}

function at() {}

function ot() {}
var st, Y, X, Z, ct, lt, ut, dt = e((() => {
        st = p(), k(), le(), ye(), _e(), x(), fe(), me(), Se(), ae(), u(), s(), Y = t(d()), _(), Ae(), v(), A(), X = m(), Z = a(() => new Map), ct = ({
            node: e,
            editorMode: t,
            gptId: n,
            versionId: r,
            skillId: a,
            isReadonly: o
        }) => {
            "use no forget";
            let s = te(),
                {
                    isPending: c
                } = he(),
                l = pe(),
                u = re({
                    gptId: n,
                    versionId: r,
                    skillId: a,
                    node: e,
                    enabled: e.upload_status !== `pending`
                }),
                d = u.data,
                f = ve({
                    gptId: n,
                    skillId: a,
                    nodeId: e.id
                }),
                p = i(() => Z().get(f) ?? null),
                [m, h] = (0, Y.useState)(p?.content ?? d ?? ``),
                g = (0, Y.useRef)(p?.content ?? null),
                _ = (0, Y.useRef)(d ?? ``),
                v = (0, Y.useRef)(!1),
                b = (0, Y.useRef)(p == null ? null : {
                    saveKey: f,
                    message: p.message
                }),
                x = o !== !0,
                ae = !x || c,
                se = de(f);
            (0, Y.useEffect)(() => {
                if (d == null) return;
                let e = _.current;
                _.current = d, g.current == null && !O(f) && D({
                    gptId: n,
                    isDirty: !1,
                    skillId: a
                });
                let t = Z().has(f);
                h(n => g.current == null && !t && n === e ? d : n)
            }, [n, f, d, a]);
            let S = ee(t => {
                    let i = Z().get(f);
                    if (i != null && J(f, {
                            ...i,
                            content: t
                        }), g.current = t, t === _.current) {
                        if (g.current = null, be(f) || !O(f)) {
                            D({
                                gptId: n,
                                isDirty: !1,
                                skillId: a
                            });
                            let e = b.current ?? (i == null ? null : {
                                    saveKey: f,
                                    message: i.message
                                }),
                                {
                                    saveError: t,
                                    saveErrorRetry: r
                                } = ie().displayState;
                            e != null && e.saveKey === f && t === e.message && r == null && y.setSaveError(null), b.current = null, J(f, null);
                            return
                        }
                        D({
                            gptId: n,
                            isDirty: !0,
                            skillId: a
                        })
                    }

                    function o() {
                        if (O(f)) return;
                        let e = b.current,
                            r = !v.current && e != null;
                        if (!(r && Z().get(f)?.content !== t) && g.current === t)
                            if (g.current = null, _.current = t, D({
                                    gptId: n,
                                    isDirty: !1,
                                    skillId: a
                                }), b.current = null, J(f, null), r && e != null) {
                                let {
                                    saveError: t,
                                    saveErrorRetry: n
                                } = ie().displayState;
                                e.saveKey === f && t === e.message && n == null && y.setSaveError(null)
                            } else y.setSaveError(null)
                    }

                    function c(n) {
                        if (g.current === t) {
                            let r = n instanceof ne,
                                i = r ? s.formatMessage(n.messageDescriptor) : s.formatMessage(ut.fileSaveFailed, {
                                    fileName: e.name
                                });
                            b.current = r ? {
                                saveKey: f,
                                message: i
                            } : null, r && J(f, {
                                content: t,
                                message: i
                            }), y.setSaveError(i), O(f) || u()
                        }
                    }

                    function u() {
                        ge({
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
                w = ee(() => {
                    x && xe(n)
                });
            return (0, Y.useEffect)(() => (v.current = !0, () => {
                v.current = !1, w()
            }), [w]), se && p == null ? (0, X.jsx)(M, {}) : u.isError ? (0, X.jsx)(N, {
                onRetry: async () => {
                    let t = oe(),
                        r = {
                            source: it(a),
                            agentId: n ?? void 0,
                            file: {
                                fileNodeId: e.id,
                                parentFileNodeId: e.parent_node_id ?? void 0,
                                fileKind: rt(e)
                            },
                            ...a == null ? {} : {
                                skill: {
                                    skillId: a
                                }
                            }
                        };
                    C({
                        actionType: T.FILE_LOAD_RETRY,
                        actionResult: E.STARTED,
                        actionInstanceId: t.actionInstanceId,
                        ...r
                    });
                    try {
                        let e = await u.refetch(),
                            n = e.isError ? e.error : void 0;
                        C({
                            actionType: T.FILE_LOAD_RETRY,
                            actionResult: n == null ? E.SUCCEEDED : E.FAILED,
                            ...r,
                            request: t(n == null ? void 0 : {
                                error: n
                            })
                        })
                    } catch (e) {
                        C({
                            actionType: T.FILE_LOAD_RETRY,
                            actionResult: E.FAILED,
                            ...r,
                            request: t({
                                error: e
                            })
                        })
                    }
                },
                isRefetching: u.isRefetching
            }) : d == null ? (0, X.jsx)(M, {}) : (0, X.jsx)(P, {
                value: p?.content ?? m,
                language: t.kind === `code` ? t.language : null,
                isReadonly: ae,
                onChange: t => {
                    C({
                        actionType: T.FILE_CONTENT_EDIT,
                        source: it(a),
                        agentId: n ?? void 0,
                        file: {
                            fileNodeId: e.id,
                            parentFileNodeId: e.parent_node_id ?? void 0,
                            fileKind: rt(e)
                        },
                        editor: {
                            field: ce.FILE_CONTENT
                        },
                        ...a == null ? {} : {
                            skill: {
                                skillId: a
                            }
                        }
                    }), h(t), D({
                        gptId: n,
                        isDirty: t !== _.current,
                        skillId: a
                    }), S(t)
                },
                onBlur: w
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
            return t[9] !== c.data || t[10] !== l ? (u = (0, X.jsx)(P, {
                value: c.data,
                language: l,
                isReadonly: !0,
                onChange: at,
                onBlur: ot
            }), t[9] = c.data, t[10] = l, t[11] = u) : u = t[11], u
        }, ut = f({
            fileSaveFailed: {
                id: `Hermes.GptStudio.Builder.FilePreview.fileSaveFailed`,
                defaultMessage: `Couldn't save changes to {fileName}`
            }
        })
    })),
    Q, $, ft, pt, mt = e((() => {
        Q = p(), Le(), A(), ze(), qe(), nt(), dt(), $ = m(), ft = e => {
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
            t[0] === n ? s = t[1] : (s = je(n), t[0] = n, t[1] = s);
            let c = s;
            if (c == null) {
                let e;
                return t[2] === n ? e = t[3] : (e = (0, $.jsx)(`div`, {
                    className: I.EditorShell,
                    children: (0, $.jsx)(j, {
                        node: n
                    })
                }), t[2] = n, t[3] = e), e
            }
            if (c.kind === `pdf`) {
                let e;
                return t[4] !== r || t[5] !== n || t[6] !== a ? (e = (0, $.jsx)(`div`, {
                    className: I.EditorShell,
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
                className: I.EditorShell,
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
            t[0] === r ? a = t[1] : (a = je(r), t[0] = r, t[1] = a);
            let o = a;
            if (o == null || r.file_id == null) {
                let e;
                return t[2] === r ? e = t[3] : (e = (0, $.jsx)(`div`, {
                    className: I.EditorShell,
                    children: (0, $.jsx)(j, {
                        node: r
                    })
                }), t[2] = r, t[3] = e), e
            }
            if (o.kind === `pdf`) {
                let e;
                return t[4] !== n || t[5] !== i || t[6] !== r ? (e = (0, $.jsx)(`div`, {
                    className: I.EditorShell,
                    children: (0, $.jsx)(tt, {
                        isAgentStartPage: i,
                        agentId: n,
                        node: r
                    })
                }), t[4] = n, t[5] = i, t[6] = r, t[7] = e) : e = t[7], e
            }
            if (o.kind === `image`) {
                let e;
                return t[8] !== n || t[9] !== i || t[10] !== r ? (e = (0, $.jsx)(U, {
                    isAgentStartPage: i,
                    agentId: n,
                    node: r
                }), t[8] = n, t[9] = i, t[10] = r, t[11] = e) : e = t[11], e
            }
            let s;
            return t[12] !== n || t[13] !== o || t[14] !== i || t[15] !== r ? (s = (0, $.jsx)(`div`, {
                className: I.EditorShell,
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
//# sourceMappingURL=eab609b4-et153i6w29hmtk5j.js.map