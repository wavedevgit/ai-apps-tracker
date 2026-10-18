const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/85a70d5b-gz5bd67mpyncjh55.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/root-lelxp0l2.css", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/1c919af1-abbe8u4rjagje3yr.js", "assets/707eab0c-joqgzfzs0dn7ukcc.js", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css", "assets/9d60841e-bx3dwc8nyvp30a4s.js", "assets/bcae0416-eho3k65xd82h5dgh.js", "assets/d4c740a3-grm4mqv12ru1q0ee.js", "assets/Button-ijivgymd.css", "assets/a35abcd6-o5uzbzp1jprs3y1b.js", "assets/74a883a0-hvxle82pkyqdut0n.js", "assets/4b68ab38-e2jtqfi6qknkay6v.js", "assets/e981ddae-m7civn9ndz8nfodx.js", "assets/cb84f617-e4ca0kd9iysszy1q.js", "assets/36ecb4f8-ntqmqgucvlq1gwn6.js", "assets/Input-cmdkk215.css", "assets/5334be9f-djy2fi7sm9pkf7pi.js", "assets/14bfa043-j099hvf56gfathms.js", "assets/file-preview-states-nfjy1aeo.css", "assets/27597608-nmal3oiebufzvpby.js", "assets/bcae0416-g1p2muqcvrmck6942.js", "assets/pdf-file-preview-g0sia5td.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $M as n,
    B6 as r,
    B8 as i,
    C0 as a,
    J6 as o,
    S0 as s,
    dz as c,
    eN as l,
    fz as u,
    i5 as ee
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as d,
    Ln as f,
    Rn as p,
    Vn as m,
    cn as h,
    ln as g,
    wn as _,
    zn as te
} from "./2340486e-oc6d2eodbcrmxur3.js";
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
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    b as se,
    x as S
} from "./707eab0c-joqgzfzs0dn7ukcc.js";
import {
    a as C,
    d as ce,
    f as w,
    o as T,
    s as E,
    t as le,
    x as D
} from "./4285e798-mb6k70xz6sq0hl39.js";
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
} from "./8e7d0a25-o85cwyy659hwtt54.js";
import {
    c as A,
    i as j,
    l as Se,
    n as M,
    r as N,
    t as P,
    u as Ce
} from "./5334be9f-djy2fi7sm9pkf7pi.js";
import {
    a as we,
    i as Te,
    o as Ee,
    s as De,
    t as Oe
} from "./de67e829-c3f4jqyupsjeh20a.js";
import {
    n as ke,
    t as F
} from "./fe6483fa-k0psetsak7c8s7o7.js";

function Ae(e) {
    let t = Ne(e.name),
        n = t == null ? null : Ee[t];
    return je(e) ? {
        kind: `pdf`
    } : Me(e, t) ? {
        kind: `image`
    } : n != null && Oe(n) ? {
        kind: `code`,
        language: n
    } : n != null && n === we.other || Pe(e.mime_type) ? {
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
        De(), Te(), Fe = new Set([`avif`, `bmp`, `gif`, `ico`, `jpeg`, `jpg`, `png`, `webp`])
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
        B = _(), A(), x(), V = t(m()), j(), He(), H = d(), Ge = e => {
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
                    children: (0, H.jsx)(P, {
                        onRetry: s.refetch,
                        isRefetching: s.isRefetching
                    })
                }), t[9] = s.isRefetching, t[10] = s.refetch, t[11] = e) : e = t[11], e
            }
            if (s.isLoading || l == null) {
                let e;
                return t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, H.jsx)(`div`, {
                    className: R.EditorShell,
                    children: (0, H.jsx)(N, {})
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
            let s = Ce(o),
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
                    children: (0, H.jsx)(P, {
                        onRetry: s.refetch,
                        isRefetching: s.isRefetching
                    })
                }), t[8] = s.isRefetching, t[9] = s.refetch, t[10] = e) : e = t[10], e
            }
            if (s.isLoading || l == null) {
                let e;
                return t[11] === i ? e = t[12] : (e = (0, H.jsx)(`div`, {
                    className: R.EditorShell,
                    children: (0, H.jsx)(N, {
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
                return t[0] === n ? e = t[1] : (e = (0, H.jsx)(M, {
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
        G = _(), u(), se(), a(), Qe(), K = d(), g(), $e = s(() => h(() => import(`./85a70d5b-gz5bd67mpyncjh55.js`).then(e => e.PDFViewer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])), {
            loading: () => null
        }), et = s(() => h(() => import(`./85a70d5b-gz5bd67mpyncjh55.js`).then(e => e.PersistentFolderPDFViewer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])), {
            loading: () => null
        }), tt = e => {
            "use forget";
            let t = (0, G.c)(10),
                n, r;
            t[0] === e ? (n = t[1], r = t[2]) : ({
                isAgentStartPage: n,
                ...r
            } = e, t[0] = e, t[1] = n, t[2] = r);
            let i;
            t[3] === n ? i = t[4] : (i = (0, K.jsx)(`div`, {
                className: W.LoadingIndicator,
                children: n ? (0, K.jsx)(c, {}) : (0, K.jsx)(S, {})
            }), t[3] = n, t[4] = i);
            let a;
            t[5] === r ? a = t[6] : (a = (0, K.jsx)(`div`, {
                className: W.PdfPreviewContent,
                children: (0, K.jsx)($e, {
                    ...r
                })
            }), t[5] = r, t[6] = a);
            let o;
            return t[7] !== i || t[8] !== a ? (o = (0, K.jsxs)(`div`, {
                className: W.PdfPreviewShell,
                children: [i, a]
            }), t[7] = i, t[8] = a, t[9] = o) : o = t[9], o
        }, nt = e => {
            "use forget";
            let t = (0, G.c)(10),
                n, r;
            t[0] === e ? (n = t[1], r = t[2]) : ({
                isAgentStartPage: n,
                ...r
            } = e, t[0] = e, t[1] = n, t[2] = r);
            let i;
            t[3] === n ? i = t[4] : (i = (0, K.jsx)(`div`, {
                className: W.LoadingIndicator,
                children: n ? (0, K.jsx)(c, {}) : (0, K.jsx)(S, {})
            }), t[3] = n, t[4] = i);
            let a;
            t[5] === r ? a = t[6] : (a = (0, K.jsx)(`div`, {
                className: W.PdfPreviewContent,
                children: (0, K.jsx)(et, {
                    ...r
                })
            }), t[5] = r, t[6] = a);
            let o;
            return t[7] !== i || t[8] !== a ? (o = (0, K.jsxs)(`div`, {
                className: W.PdfPreviewShell,
                children: [i, a]
            }), t[7] = i, t[8] = a, t[9] = o) : o = t[9], o
        }
    }));

function q(e, t) {
    i(() => {
        X.set(n => {
            let r = n.get(e);
            if (t == null && r == null || t != null && r?.content === t.content && r?.message === t.message) return n;
            let i = new Map(n);
            return t == null ? i.delete(e) : i.set(e, t), i
        })
    })
}

function it(e) {
    return e.kind === `folder` ? w.FOLDER : w.FILE
}

function at(e) {
    return e == null ? D.FILES_DETAIL : D.SKILL_DETAIL
}

function ot() {}

function st() {}
var ct, J, Y, X, lt, ut, dt, ft = e((() => {
        ct = _(), A(), le(), ve(), ge(), x(), de(), pe(), xe(), ae(), r(), n(), J = t(m()), p(), ke(), v(), j(), Y = d(), X = o(() => new Map), lt = ({
            node: e,
            editorMode: t,
            gptId: n,
            versionId: r,
            skillId: i,
            isReadonly: a
        }) => {
            "use no forget";
            let o = te(),
                {
                    isPending: s
                } = me(),
                c = fe(),
                u = re({
                    gptId: n,
                    versionId: r,
                    skillId: i,
                    node: e,
                    enabled: e.upload_status !== `pending`
                }),
                d = u.data,
                f = _e({
                    gptId: n,
                    skillId: i,
                    nodeId: e.id
                }),
                p = ee(() => X().get(f) ?? null),
                [m, h] = (0, J.useState)(p?.content ?? d ?? ``),
                g = (0, J.useRef)(p?.content ?? null),
                _ = (0, J.useRef)(d ?? ``),
                v = (0, J.useRef)(!1),
                b = (0, J.useRef)(p == null ? null : {
                    saveKey: f,
                    message: p.message
                }),
                x = a !== !0,
                ae = !x || s,
                se = ue(f);
            (0, J.useEffect)(() => {
                if (d == null) return;
                let e = _.current;
                _.current = d, g.current == null && !k(f) && O({
                    gptId: n,
                    isDirty: !1,
                    skillId: i
                });
                let t = X().has(f);
                h(n => g.current == null && !t && n === e ? d : n)
            }, [n, f, d, i]);
            let S = l(t => {
                    let a = X().get(f);
                    if (a != null && q(f, {
                            ...a,
                            content: t
                        }), g.current = t, t === _.current) {
                        if (g.current = null, ye(f) || !k(f)) {
                            O({
                                gptId: n,
                                isDirty: !1,
                                skillId: i
                            });
                            let e = b.current ?? (a == null ? null : {
                                    saveKey: f,
                                    message: a.message
                                }),
                                {
                                    saveError: t,
                                    saveErrorRetry: r
                                } = ie().displayState;
                            e != null && e.saveKey === f && t === e.message && r == null && y.setSaveError(null), b.current = null, q(f, null);
                            return
                        }
                        O({
                            gptId: n,
                            isDirty: !0,
                            skillId: i
                        })
                    }

                    function s() {
                        if (k(f)) return;
                        let e = b.current,
                            r = !v.current && e != null;
                        if (!(r && X().get(f)?.content !== t) && g.current === t)
                            if (g.current = null, _.current = t, O({
                                    gptId: n,
                                    isDirty: !1,
                                    skillId: i
                                }), b.current = null, q(f, null), r && e != null) {
                                let {
                                    saveError: t,
                                    saveErrorRetry: n
                                } = ie().displayState;
                                e.saveKey === f && t === e.message && n == null && y.setSaveError(null)
                            } else y.setSaveError(null)
                    }

                    function l(n) {
                        if (g.current === t) {
                            let r = n instanceof ne,
                                i = r ? o.formatMessage(n.messageDescriptor) : o.formatMessage(dt.fileSaveFailed, {
                                    fileName: e.name
                                });
                            b.current = r ? {
                                saveKey: f,
                                message: i
                            } : null, r && q(f, {
                                content: t,
                                message: i
                            }), y.setSaveError(i), k(f) || u()
                        }
                    }

                    function u() {
                        he({
                            content: t,
                            flushGptBuilderAutosave: c,
                            node: e,
                            gptId: n,
                            versionId: r,
                            skillId: i
                        }).then(s, l)
                    }
                    u()
                }),
                w = l(() => {
                    x && be(n)
                });
            return (0, J.useEffect)(() => (v.current = !0, () => {
                v.current = !1, w()
            }), [w]), se && p == null ? (0, Y.jsx)(N, {}) : u.isError ? (0, Y.jsx)(P, {
                onRetry: async () => {
                    let t = oe(),
                        r = {
                            source: at(i),
                            agentId: n ?? void 0,
                            file: {
                                fileNodeId: e.id,
                                parentFileNodeId: e.parent_node_id ?? void 0,
                                fileKind: it(e)
                            },
                            ...i == null ? {} : {
                                skill: {
                                    skillId: i
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
            }) : d == null ? (0, Y.jsx)(N, {}) : (0, Y.jsx)(F, {
                value: p?.content ?? m,
                language: t.kind === `code` ? t.language : null,
                isReadonly: ae,
                onChange: t => {
                    C({
                        actionType: T.FILE_CONTENT_EDIT,
                        source: at(i),
                        agentId: n ?? void 0,
                        file: {
                            fileNodeId: e.id,
                            parentFileNodeId: e.parent_node_id ?? void 0,
                            fileKind: it(e)
                        },
                        editor: {
                            field: ce.FILE_CONTENT
                        },
                        ...i == null ? {} : {
                            skill: {
                                skillId: i
                            }
                        }
                    }), h(t), O({
                        gptId: n,
                        isDirty: t !== _.current,
                        skillId: i
                    }), S(t)
                },
                onBlur: w
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
            let c = Se(s);
            if (c.isError) {
                let e;
                return t[4] !== c.isRefetching || t[5] !== c.refetch ? (e = (0, Y.jsx)(P, {
                    onRetry: c.refetch,
                    isRefetching: c.isRefetching
                }), t[4] = c.isRefetching, t[5] = c.refetch, t[6] = e) : e = t[6], e
            }
            if (c.isLoading || c.data == null) {
                let e;
                return t[7] === a ? e = t[8] : (e = (0, Y.jsx)(N, {
                    isAgentStartPage: a
                }), t[7] = a, t[8] = e), e
            }
            let l = i.kind === `code` ? i.language : null,
                u;
            return t[9] !== c.data || t[10] !== l ? (u = (0, Y.jsx)(F, {
                value: c.data,
                language: l,
                isReadonly: !0,
                onChange: ot,
                onBlur: st
            }), t[9] = c.data, t[10] = l, t[11] = u) : u = t[11], u
        }, dt = f({
            fileSaveFailed: {
                id: `Hermes.GptStudio.Builder.FilePreview.fileSaveFailed`,
                defaultMessage: `Couldn't save changes to {fileName}`
            }
        })
    })),
    Z, Q, pt, $, mt = e((() => {
        Z = _(), Ie(), j(), Re(), Je(), rt(), ft(), Q = d(), pt = e => {
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
                    children: (0, Q.jsx)(M, {
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
                    children: (0, Q.jsx)(M, {
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
//# sourceMappingURL=eab609b4-cwo8v65mfnn879dz.js.map