const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/85a70d5b-ok8clk1y9vepsw00.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/conversation-small-l6tnsr2xfn2d55kk.js", "assets/4813494d-ed29bs6yiwucn7st.js", "assets/root-lelxp0l2.css", "assets/30901919-om7b3qf5hp4j9x4l.js", "assets/c470f5ab-d0jxi6yggehv1yt2.js", "assets/0e5afe53-goyw8fd3qndq8rq5.js", "assets/conversation-small-ixfdle4i.css", "assets/1c919af1-abbe8u4rjagje3yr.js", "assets/707eab0c-co82iasy3ghgw11m.js", "assets/c2675c8c-fpv9s4kvd412dyap.js", "assets/82782bc9-cz4jkhg31tycbqqf.js", "assets/8b34dbc2-j8rcexxiltkm8ucr.js", "assets/global-modals-lv5n3ujm.css", "assets/9d60841e-bx3dwc8nyvp30a4s.js", "assets/bcae0416-hw074mfyxypgqrid.js", "assets/d4c740a3-grm4mqv12ru1q0ee.js", "assets/Button-ijivgymd.css", "assets/a35abcd6-o5uzbzp1jprs3y1b.js", "assets/74a883a0-hvxle82pkyqdut0n.js", "assets/4b68ab38-e2jtqfi6qknkay6v.js", "assets/e981ddae-m7civn9ndz8nfodx.js", "assets/cb84f617-e4ca0kd9iysszy1q.js", "assets/36ecb4f8-isjf0qo9jn05gfs9.js", "assets/Input-cmdkk215.css", "assets/5334be9f-mqrz1kgmpd7v4vii.js", "assets/14bfa043-j099hvf56gfathms.js", "assets/file-preview-states-nfjy1aeo.css", "assets/27597608-j1ukkblax11653h6.js", "assets/bcae0416-nf3iq2rkjqyy0d5t2.js", "assets/pdf-file-preview-g0sia5td.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as n,
    Az as r,
    J0 as i,
    Y0 as a,
    _N as o,
    b8 as s,
    f5 as c,
    f8 as l,
    jz as u,
    vN as d
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as f,
    Ln as p,
    Rn as m,
    Vn as h,
    cn as g,
    ln as _,
    wn as v,
    zn as ee
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    TRt as y,
    bRt as te,
    dzt as b,
    gRt as x,
    mRt as ne,
    uRt as S,
    vzt as re,
    wzt as ie,
    xHt as ae
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    b as oe,
    x as C
} from "./707eab0c-co82iasy3ghgw11m.js";
import {
    a as w,
    d as se,
    f as T,
    o as E,
    s as D,
    t as ce,
    x as O
} from "./4285e798-jv6dhkkljo44ybd3.js";
import {
    C as le,
    D as k,
    M as ue,
    N as de,
    T as fe,
    b as A,
    d as pe,
    i as me,
    n as he,
    t as ge,
    u as _e,
    v as ve,
    x as ye,
    y as be
} from "./8e7d0a25-c039aqe9g57cci8q.js";
import {
    c as j,
    i as M,
    l as xe,
    n as N,
    r as P,
    t as F,
    u as Se
} from "./5334be9f-mqrz1kgmpd7v4vii.js";
import {
    a as Ce,
    i as we,
    o as Te,
    s as Ee,
    t as De
} from "./de67e829-dt6fz2i792esi5uu.js";
import {
    n as Oe,
    t as ke
} from "./fe6483fa-ot9t5mm5cdmvgf6z.js";

function Ae(e) {
    let t = Ne(e.name),
        n = t == null ? null : Te[t];
    return je(e) ? {
        kind: `pdf`
    } : Me(e, t) ? {
        kind: `image`
    } : n != null && De(n) ? {
        kind: `code`,
        language: n
    } : n != null && n === Ce.other || Pe(e.mime_type) ? {
        kind: `text`
    } : null
}

function je(e) {
    return I(e.mime_type) === `application/pdf` || Ne(e.name) === `pdf`
}

function Me(e, t) {
    return I(e.mime_type)?.startsWith(`image/`) === !0 || t != null && Fe.has(t)
}

function Ne(e) {
    let t = e.lastIndexOf(`.`);
    return t <= 0 || t === e.length - 1 ? null : e.slice(t + 1).toLowerCase()
}

function Pe(e) {
    let t = I(e);
    return t == null ? !1 : t.startsWith(`text/`) || t === `application/json` || t === `application/x-yaml` || t === `application/xml`
}

function I(e) {
    return e?.split(`;`)[0]?.trim().toLowerCase() || null
}
var Fe, Ie = e((() => {
        Ee(), we(), Fe = new Set([`avif`, `bmp`, `gif`, `ico`, `jpeg`, `jpg`, `png`, `webp`])
    })),
    Le, L, Re = e((() => {
        Le = `TUsMmG_EditorShell`, L = {
            EditorShell: Le
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
        B = v(), j(), S(), V = t(h()), M(), He(), H = f(), Ge = e => {
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
            let s = x(o),
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
                    children: (0, H.jsx)(F, {
                        onRetry: s.refetch,
                        isRefetching: s.isRefetching
                    })
                }), t[9] = s.isRefetching, t[10] = s.refetch, t[11] = e) : e = t[11], e
            }
            if (s.isLoading || l == null) {
                let e;
                return t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, H.jsx)(`div`, {
                    className: R.EditorShell,
                    children: (0, H.jsx)(P, {})
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
            let s = Se(o),
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
                    children: (0, H.jsx)(F, {
                        onRetry: s.refetch,
                        isRefetching: s.isRefetching
                    })
                }), t[8] = s.isRefetching, t[9] = s.refetch, t[10] = e) : e = t[10], e
            }
            if (s.isLoading || l == null) {
                let e;
                return t[11] === i ? e = t[12] : (e = (0, H.jsx)(`div`, {
                    className: R.EditorShell,
                    children: (0, H.jsx)(P, {
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
                return t[0] === n ? e = t[1] : (e = (0, H.jsx)(N, {
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
    Ye, Xe, Ze, W, Qe = e((() => {
        Ye = `TM7Ijq_LoadingIndicator`, Xe = `TM7Ijq_PdfPreviewContent`, Ze = `TM7Ijq_PdfPreviewShell`, W = {
            LoadingIndicator: Ye,
            PdfPreviewContent: Xe,
            PdfPreviewShell: Ze
        }
    })),
    G, K, $e, et, tt, nt, rt = e((() => {
        G = v(), u(), oe(), a(), Qe(), K = f(), _(), $e = i(() => g(() => import(`./85a70d5b-ok8clk1y9vepsw00.js`).then(e => e.PDFViewer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])), {
            loading: () => null
        }), et = i(() => g(() => import(`./85a70d5b-ok8clk1y9vepsw00.js`).then(e => e.PersistentFolderPDFViewer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])), {
            loading: () => null
        }), tt = e => {
            "use forget";
            let t = (0, G.c)(10),
                n, i;
            t[0] === e ? (n = t[1], i = t[2]) : ({
                isAgentStartPage: n,
                ...i
            } = e, t[0] = e, t[1] = n, t[2] = i);
            let a;
            t[3] === n ? a = t[4] : (a = (0, K.jsx)(`div`, {
                className: W.LoadingIndicator,
                children: n ? (0, K.jsx)(r, {}) : (0, K.jsx)(C, {})
            }), t[3] = n, t[4] = a);
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
                n, i;
            t[0] === e ? (n = t[1], i = t[2]) : ({
                isAgentStartPage: n,
                ...i
            } = e, t[0] = e, t[1] = n, t[2] = i);
            let a;
            t[3] === n ? a = t[4] : (a = (0, K.jsx)(`div`, {
                className: W.LoadingIndicator,
                children: n ? (0, K.jsx)(r, {}) : (0, K.jsx)(C, {})
            }), t[3] = n, t[4] = a);
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
    return e.kind === `folder` ? T.FOLDER : T.FILE
}

function at(e) {
    return e == null ? O.FILES_DETAIL : O.SKILL_DETAIL
}

function ot() {}

function st() {}
var ct, J, Y, X, lt, ut, dt, ft = e((() => {
        ct = v(), j(), ce(), _e(), he(), S(), ue(), fe(), be(), ie(), l(), o(), J = t(h()), m(), Oe(), y(), M(), Y = f(), X = s(() => new Map), lt = ({
            node: e,
            editorMode: t,
            gptId: r,
            versionId: i,
            skillId: a,
            isReadonly: o
        }) => {
            "use no forget";
            let s = ee(),
                {
                    isPending: c
                } = pe(),
                l = de(),
                u = ne({
                    gptId: r,
                    versionId: i,
                    skillId: a,
                    node: e,
                    enabled: e.upload_status !== `pending`
                }),
                f = u.data,
                p = ge({
                    gptId: r,
                    skillId: a,
                    nodeId: e.id
                }),
                m = n(() => X().get(p) ?? null),
                [h, g] = (0, J.useState)(m?.content ?? f ?? ``),
                _ = (0, J.useRef)(m?.content ?? null),
                v = (0, J.useRef)(f ?? ``),
                y = (0, J.useRef)(!1),
                x = (0, J.useRef)(m == null ? null : {
                    saveKey: p,
                    message: m.message
                }),
                S = o !== !0,
                ie = !S || c,
                oe = le(p);
            (0, J.useEffect)(() => {
                if (f == null) return;
                let e = v.current;
                v.current = f, _.current == null && !A(p) && k({
                    gptId: r,
                    isDirty: !1,
                    skillId: a
                });
                let t = X().has(p);
                g(n => _.current == null && !t && n === e ? f : n)
            }, [r, p, f, a]);
            let C = d(t => {
                    let n = X().get(p);
                    if (n != null && q(p, {
                            ...n,
                            content: t
                        }), _.current = t, t === v.current) {
                        if (_.current = null, ve(p) || !A(p)) {
                            k({
                                gptId: r,
                                isDirty: !1,
                                skillId: a
                            });
                            let e = x.current ?? (n == null ? null : {
                                    saveKey: p,
                                    message: n.message
                                }),
                                {
                                    saveError: t,
                                    saveErrorRetry: i
                                } = re().displayState;
                            e != null && e.saveKey === p && t === e.message && i == null && b.setSaveError(null), x.current = null, q(p, null);
                            return
                        }
                        k({
                            gptId: r,
                            isDirty: !0,
                            skillId: a
                        })
                    }

                    function o() {
                        if (A(p)) return;
                        let e = x.current,
                            n = !y.current && e != null;
                        if (!(n && X().get(p)?.content !== t) && _.current === t)
                            if (_.current = null, v.current = t, k({
                                    gptId: r,
                                    isDirty: !1,
                                    skillId: a
                                }), x.current = null, q(p, null), n && e != null) {
                                let {
                                    saveError: t,
                                    saveErrorRetry: n
                                } = re().displayState;
                                e.saveKey === p && t === e.message && n == null && b.setSaveError(null)
                            } else b.setSaveError(null)
                    }

                    function c(n) {
                        if (_.current === t) {
                            let r = n instanceof te,
                                i = r ? s.formatMessage(n.messageDescriptor) : s.formatMessage(dt.fileSaveFailed, {
                                    fileName: e.name
                                });
                            x.current = r ? {
                                saveKey: p,
                                message: i
                            } : null, r && q(p, {
                                content: t,
                                message: i
                            }), b.setSaveError(i), A(p) || u()
                        }
                    }

                    function u() {
                        me({
                            content: t,
                            flushGptBuilderAutosave: l,
                            node: e,
                            gptId: r,
                            versionId: i,
                            skillId: a
                        }).then(o, c)
                    }
                    u()
                }),
                T = d(() => {
                    S && ye(r)
                });
            return (0, J.useEffect)(() => (y.current = !0, () => {
                y.current = !1, T()
            }), [T]), oe && m == null ? (0, Y.jsx)(P, {}) : u.isError ? (0, Y.jsx)(F, {
                onRetry: async () => {
                    let t = ae(),
                        n = {
                            source: at(a),
                            agentId: r ?? void 0,
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
                    w({
                        actionType: E.FILE_LOAD_RETRY,
                        actionResult: D.STARTED,
                        actionInstanceId: t.actionInstanceId,
                        ...n
                    });
                    try {
                        let e = await u.refetch(),
                            r = e.isError ? e.error : void 0;
                        w({
                            actionType: E.FILE_LOAD_RETRY,
                            actionResult: r == null ? D.SUCCEEDED : D.FAILED,
                            ...n,
                            request: t(r == null ? void 0 : {
                                error: r
                            })
                        })
                    } catch (e) {
                        w({
                            actionType: E.FILE_LOAD_RETRY,
                            actionResult: D.FAILED,
                            ...n,
                            request: t({
                                error: e
                            })
                        })
                    }
                },
                isRefetching: u.isRefetching
            }) : f == null ? (0, Y.jsx)(P, {}) : (0, Y.jsx)(ke, {
                value: m?.content ?? h,
                language: t.kind === `code` ? t.language : null,
                isReadonly: ie,
                onChange: t => {
                    w({
                        actionType: E.FILE_CONTENT_EDIT,
                        source: at(a),
                        agentId: r ?? void 0,
                        file: {
                            fileNodeId: e.id,
                            parentFileNodeId: e.parent_node_id ?? void 0,
                            fileKind: it(e)
                        },
                        editor: {
                            field: se.FILE_CONTENT
                        },
                        ...a == null ? {} : {
                            skill: {
                                skillId: a
                            }
                        }
                    }), g(t), k({
                        gptId: r,
                        isDirty: t !== v.current,
                        skillId: a
                    }), C(t)
                },
                onBlur: T
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
            let c = xe(s);
            if (c.isError) {
                let e;
                return t[4] !== c.isRefetching || t[5] !== c.refetch ? (e = (0, Y.jsx)(F, {
                    onRetry: c.refetch,
                    isRefetching: c.isRefetching
                }), t[4] = c.isRefetching, t[5] = c.refetch, t[6] = e) : e = t[6], e
            }
            if (c.isLoading || c.data == null) {
                let e;
                return t[7] === a ? e = t[8] : (e = (0, Y.jsx)(P, {
                    isAgentStartPage: a
                }), t[7] = a, t[8] = e), e
            }
            let l = i.kind === `code` ? i.language : null,
                u;
            return t[9] !== c.data || t[10] !== l ? (u = (0, Y.jsx)(ke, {
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
        Z = v(), Ie(), M(), Re(), Je(), rt(), ft(), Q = f(), pt = e => {
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
            t[0] === n ? s = t[1] : (s = Ae(n), t[0] = n, t[1] = s);
            let c = s;
            if (c == null) {
                let e;
                return t[2] === n ? e = t[3] : (e = (0, Q.jsx)(`div`, {
                    className: L.EditorShell,
                    children: (0, Q.jsx)(N, {
                        node: n
                    })
                }), t[2] = n, t[3] = e), e
            }
            if (c.kind === `pdf`) {
                let e;
                return t[4] !== r || t[5] !== n || t[6] !== a ? (e = (0, Q.jsx)(`div`, {
                    className: L.EditorShell,
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
                className: L.EditorShell,
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
            t[0] === r ? a = t[1] : (a = Ae(r), t[0] = r, t[1] = a);
            let o = a;
            if (o == null || r.file_id == null) {
                let e;
                return t[2] === r ? e = t[3] : (e = (0, Q.jsx)(`div`, {
                    className: L.EditorShell,
                    children: (0, Q.jsx)(N, {
                        node: r
                    })
                }), t[2] = r, t[3] = e), e
            }
            if (o.kind === `pdf`) {
                let e;
                return t[4] !== n || t[5] !== i || t[6] !== r ? (e = (0, Q.jsx)(`div`, {
                    className: L.EditorShell,
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
                className: L.EditorShell,
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
//# sourceMappingURL=eab609b4-kydm5rfgdch6nfpk.js.map