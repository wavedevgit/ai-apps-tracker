import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aw as r,
    LU as i,
    Nat as a,
    Np as o,
    Ow as s,
    Rz as c,
    Up as l,
    eE as u,
    jat as d,
    zU as f,
    zz as p
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as m,
    Ln as h,
    Nn as g,
    Rn as _,
    Vn as v,
    wn as y,
    zn as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Gvt as x,
    Jvt as S,
    Qvt as C,
    ai as w,
    ti as T
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Rx as E,
    zx as D
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    f as O,
    r as k
} from "./bcae0416-julz0t7gkkqoediq.js";
import {
    n as A,
    t as j
} from "./ecfbef4f-guicygoc4y3a8muo.js";
import {
    i as M,
    n as N,
    r as P,
    t as F
} from "./328817d4-b4mfy1w2r2slvrkr.js";
import {
    i as I,
    n as L,
    t as R
} from "./6fd89734-fg0klobnz43q67to.js";

function z(e, t) {
    return [t ?? ``, e.clientId, e.fileId ?? ``, e.size, e.range?.start ?? ``, e.range?.length ?? ``].join(`:`)
}

function B() {
    "use forget";
    let e = (0, q.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Y.jsxs)(`div`, {
        role: `status`,
        "aria-live": `polite`,
        className: `text-token-text-secondary flex min-h-72 w-full items-center justify-center gap-2 px-6 py-10 text-sm`,
        children: [(0, Y.jsx)(c, {
            className: `h-4 w-4 shrink-0`
        }), (0, Y.jsx)(g, {
            ...X.canvasLoadingFile
        })]
    }), e[0] = t) : t = e[0], t
}

function V({
    clientId: e,
    fileName: t,
    defaultContent: n,
    language: r,
    isLoading: i = !1,
    placeholder: a,
    error: o,
    onRetry: s,
    hideLineNumbers: c = !1,
    useSystemFont: l = !1,
    readOnlyReason: u = null,
    onSave: d
}) {
    "use no forget";
    let f = (0, J.useRef)(e),
        p = (0, J.useRef)(n),
        [m, h] = (0, J.useState)(n);
    (0, J.useEffect)(() => {
        if (!i) {
            if (f.current === e && p.current === n) return;
            h(n), f.current = e, p.current = n
        }
    }, [n, i, e]);
    let _ = (0, J.useCallback)(() => {
            d(m)
        }, [d, m]),
        v = (0, J.useMemo)(() => [k.lineWrapping, k.contentAttributes.of({
            style: `padding-top: 0 !important; padding-bottom: 1rem !important;`
        }), k.theme({
            "&": {
                height: `auto`,
                maxWidth: `100%`
            },
            ".cm-scroller": {
                height: `auto`,
                overflowX: `clip`,
                overflowY: `visible`
            },
            ".cm-content": {
                maxWidth: `100%`,
                minHeight: `0`,
                minWidth: `0`
            }
        })], []);
    return (0, Y.jsx)(`div`, {
        className: `w-full min-w-0 shrink-0 overflow-x-clip`,
        children: (0, Y.jsx)(`div`, {
            className: `min-w-0 overflow-x-clip`,
            children: (0, J.useMemo)(() => i ? (0, Y.jsx)(B, {}) : o ? (0, Y.jsxs)(`div`, {
                className: `flex h-full w-full flex-col items-center justify-center gap-3 text-center text-sm`,
                children: [(0, Y.jsx)(`p`, {
                    className: `text-token-text-tertiary`,
                    children: o
                }), (0, Y.jsx)(`div`, {
                    className: `flex gap-2`,
                    children: s && (0, Y.jsx)(T, {
                        onClick: s,
                        children: (0, Y.jsx)(g, {
                            ...X.canvasRetry
                        })
                    })
                })]
            }) : (0, Y.jsx)(j, {
                id: `file-${t}-code`,
                comments: [],
                readonlyReason: u,
                value: m,
                language: r ?? void 0,
                onChange: e => {
                    let t = e.doc.toString();
                    p.current = t, h(t), d(t)
                },
                placeholder: a,
                onSave: _,
                hideAccelerators: !0,
                hideToolbar: !0,
                hideLineNumbers: c,
                useSystemFont: l,
                extensions: v
            }), [m, v, o, t, _, i, r, s, d, a, u, c, l])
        })
    })
}

function H(e) {
    "use forget";
    let t = (0, q.c)(18),
        {
            fileName: n,
            fileSize: r
        } = e,
        i = b(),
        a = n ?? ``,
        o;
    t[0] === a ? o = t[1] : (o = F(a), t[0] = a, t[1] = o);
    let s = o,
        c;
    t[2] === s ? c = t[3] : (c = (0, Y.jsx)(s, {
        className: `text-token-interactive-icon-tertiary-default h-4 w-4`
    }), t[2] = s, t[3] = c);
    let l = n ?? ``,
        u;
    t[4] === l ? u = t[5] : (u = (0, Y.jsx)(`span`, {
        className: `truncate text-xs font-medium`,
        children: l
    }), t[4] = l, t[5] = u);
    let d;
    t[6] !== c || t[7] !== u ? (d = (0, Y.jsxs)(`div`, {
        className: `bg-token-bg-primary text-token-text-secondary border-token-border-light flex items-center gap-2 rounded-t-xl border-b px-4 py-2`,
        children: [c, u]
    }), t[6] = c, t[7] = u, t[8] = d) : d = t[8];
    let f;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Y.jsx)(`p`, {
        children: (0, Y.jsx)(g, {
            ...X.noPreviewAvailable
        })
    }), t[9] = f) : f = t[9];
    let p;
    t[10] !== r || t[11] !== i ? (p = typeof r == `number` && (0, Y.jsx)(`p`, {
        children: E(i, r)
    }), t[10] = r, t[11] = i, t[12] = p) : p = t[12];
    let m;
    t[13] === p ? m = t[14] : (m = (0, Y.jsxs)(`div`, {
        className: `flex h-32 flex-col items-center justify-center px-4 text-center`,
        children: [f, p]
    }), t[13] = p, t[14] = m);
    let h;
    return t[15] !== d || t[16] !== m ? (h = (0, Y.jsx)(`div`, {
        className: `flex h-full items-center justify-center`,
        children: (0, Y.jsxs)(`div`, {
            className: `bg-token-bg-tertiary border-token-border-light text-token-text-tertiary flex w-64 flex-col rounded-xl border text-sm`,
            children: [d, m]
        })
    }), t[15] = d, t[16] = m, t[17] = h) : h = t[17], h
}

function U(e) {
    let t = N(e.filename);
    if (t !== `application/octet-stream`) return t;
    let n = e.contentType.split(`;`)[0].trim().toLowerCase();
    return n.length > 0 ? n : `application/octet-stream`
}
async function W(e, t) {
    let n = {},
        r = 0,
        i = 0;
    t && typeof t.start == `number` && typeof t.length == `number` && t.length > 0 && (r = Math.max(0, t.start), i = r + t.length - 1, n.Range = `bytes=${r}-${i}`);
    let a = await fetch(e, {
        headers: n
    });
    if (!a.ok) throw Error(`Unable to download file content`);
    let o = await a.arrayBuffer();
    if (t && t.length > 0 && a.status !== 206) {
        let e = r + t.length;
        o.byteLength >= e && (o = o.slice(r, e))
    }
    return o
}

function G({
    hazelnutId: e,
    file: t,
    previewCache: n
}) {
    "use no forget";
    let r = b(),
        i = z(t, e),
        a = n?.media.get(i) ?? null,
        [s, c] = (0, J.useState)(a ? `ready` : `loading`),
        [l, u] = (0, J.useState)(void 0),
        [f, p] = (0, J.useState)(a),
        m = (0, J.useRef)(null),
        h = (0, J.useRef)(0),
        _ = P(t),
        v = (0, J.useCallback)(() => {
            m.current &&= (URL.revokeObjectURL(m.current), null)
        }, []),
        y = (0, J.useCallback)(async () => {
            let a = ++h.current;
            if (v(), u(void 0), t.status === `uploading`) {
                c(`loading`);
                return
            }
            if (t.status === `error`) {
                c(`error`), u(t.error ?? r.formatMessage(X.canvasLoadFailed));
                return
            }
            let s = n?.media.get(i);
            if (s) {
                p(s), c(`ready`);
                return
            }
            c(`loading`);
            try {
                let r = null;
                if (t.localFile) r = t.localFile;
                else if (t.status === `inmemory`) {
                    if (!t.content) throw Error(`Missing file content`);
                    r = t.content
                } else if (t.status === `bytes`) {
                    if (t.bytes.length === 0) throw Error(`Missing file bytes`);
                    r = new Uint8Array(t.bytes)
                } else if (t.fileId)
                    if (t.status === `saved`) {
                        if (!e) throw Error(`Missing hazelnut id`);
                        let n = await S(e, t.fileId);
                        if (!n.download_url) throw Error(`Missing download URL`);
                        r = await W(n.download_url, t.range)
                    } else {
                        let e = await o(t.fileId, {
                            showInline: !0
                        });
                        if (e.status !== `success` || !e.download_url) throw Error(`Missing download URL`);
                        r = await W(e.download_url, void 0)
                    }
                else e && t.path && (r = await x(e, t.path));
                if (!r) throw Error(`Missing file preview content`);
                if (a !== h.current) return;
                let s = new Blob([r], {
                        type: U(t)
                    }),
                    l = URL.createObjectURL(s);
                n ? n.media.set(i, l) : m.current = l, p(l), c(`ready`)
            } catch (e) {
                if (a !== h.current) return;
                d.addError(e), c(`error`), u(r.formatMessage(X.canvasLoadFailed))
            }
        }, [i, t, e, r, n, v]);
    return (0, J.useEffect)(() => (y(), () => {
        h.current += 1, v()
    }), [t.clientId, y, v]), s === `loading` ? (0, Y.jsx)(B, {}) : s === `error` ? (0, Y.jsxs)(`div`, {
        className: `flex h-full w-full flex-col items-center justify-center gap-3 text-center text-sm`,
        children: [(0, Y.jsx)(`p`, {
            className: `text-token-text-tertiary`,
            children: l ?? r.formatMessage(X.canvasLoadFailed)
        }), (0, Y.jsx)(`div`, {
            className: `flex gap-2`,
            children: (0, Y.jsx)(T, {
                onClick: y,
                children: (0, Y.jsx)(g, {
                    ...X.canvasRetry
                })
            })
        })]
    }) : (0, Y.jsx)(`div`, {
        className: `flex h-full w-full items-center justify-center p-4`,
        children: f && _?.kind === `image` ? (0, Y.jsx)(`img`, {
            src: f,
            alt: t.filename,
            className: `h-full max-h-64 w-full max-w-64 rounded-lg object-contain`,
            onError: () => {
                u(r.formatMessage(X.canvasLoadFailed)), c(`error`)
            }
        }) : f && _?.kind === `pdf` ? (0, Y.jsx)(`iframe`, {
            src: f,
            title: t.filename,
            className: `h-full w-full rounded-lg border-0`
        }) : f && _?.kind === `audio` ? (0, Y.jsx)(`audio`, {
            src: f,
            "aria-label": t.filename,
            className: `w-full max-w-lg`,
            controls: !0
        }) : f && _?.kind === `video` ? (0, Y.jsx)(`video`, {
            src: f,
            "aria-label": t.filename,
            className: `max-h-full max-w-full rounded-lg`,
            controls: !0
        }) : null
    })
}

function K({
    hazelnutId: e,
    file: t,
    previewCache: n,
    readOnlyReason: r = null,
    onSave: i
}) {
    "use no forget";
    let a = b(),
        o = f(),
        s = z(t, e),
        c = n?.text.get(s),
        [l, u] = (0, J.useState)(c === void 0 ? `loading` : `ready`),
        p = (0, J.useMemo)(() => P(t), [t]),
        [m, h] = (0, J.useState)(void 0),
        [g, _] = (0, J.useState)(c ?? ``),
        v = (0, J.useRef)(0),
        y = (0, J.useCallback)(e => {
            u(`error`), h(e)
        }, []),
        x = (0, J.useCallback)(async () => {
            let r = ++v.current;
            if (!p || p.kind !== `text`) {
                let e = a.formatMessage(X.canvasUnsupportedFile);
                y(e), o.danger(e);
                return
            }
            let i = n?.text.get(s);
            if (i !== void 0) {
                _(i), u(`ready`), h(void 0);
                return
            }
            u(`loading`), h(void 0);
            try {
                let i;
                if (t.status === `inmemory`) i = t.content;
                else if (t.status === `bytes`) i = new TextDecoder(`utf-8`).decode(t.bytes);
                else if (t.localFile) i = await t.localFile.text();
                else if (t.fileId && t.status === `saved`) {
                    if (!e) throw Error(`Missing hazelnut id`);
                    i = await R(e, t.fileId, t.range, t.path)
                } else i = t.fileId ? await L(t.fileId) : ``;
                if (r !== v.current) return;
                n?.text.set(s, i), u(`ready`), _(i)
            } catch (e) {
                if (r !== v.current) return;
                d.addError(e);
                let t = a.formatMessage(X.canvasLoadFailed);
                y(t), o.danger(t)
            }
        }, [s, p, t, e, a, n, y, o]);
    (0, J.useEffect)(() => {
        let e = setTimeout(() => {
            x()
        }, 0);
        return () => {
            clearTimeout(e), v.current += 1
        }
    }, [t.clientId, t.fileId, x]);
    let S = (0, J.useCallback)(e => {
        i(e)
    }, [i]);
    return (0, Y.jsx)(V, {
        clientId: t.clientId,
        fileName: t.filename,
        filePath: t.path,
        defaultContent: g,
        language: p?.kind === `text` ? p.language : null,
        readOnlyReason: r,
        isLoading: l === `loading`,
        error: l === `error` ? m ?? a.formatMessage(X.canvasLoadFailed) : null,
        onRetry: l === `error` ? x : void 0,
        onSave: S
    })
}
var q, J, Y, X, Z, Q = e((() => {
    q = y(), u(), A(), r(), l(), w(), M(), I(), C(), D(), p(), i(), a(), O(), J = t(v()), _(), Y = m(), X = h({
        instructionsPlaceholder: {
            defaultMessage: `Write skill instructions…`,
            id: `skillEditor.instructionsPlaceholder`
        },
        canvasUnsupportedFile: {
            defaultMessage: `Preview not available for this file.`,
            id: `skillEditor.canvasUnsupportedFile`
        },
        canvasLoadFailed: {
            defaultMessage: `Unable to load the file. Please try again.`,
            id: `skillEditor.canvasLoadFailed`
        },
        canvasUnsavedWarningTitle: {
            defaultMessage: `Discard unsaved changes?`,
            id: `skillEditor.canvasUnsavedWarningTitle`
        },
        canvasUnsavedWarningBody: {
            defaultMessage: `You have unsaved changes. If you go back, your edits will be discarded.`,
            id: `skillEditor.canvasUnsavedWarningBody`
        },
        canvasUnsavedContinueEditing: {
            defaultMessage: `Continue editing`,
            id: `skillEditor.canvasUnsavedContinueEditing`
        },
        canvasUnsavedDiscard: {
            defaultMessage: `Discard changes`,
            id: `skillEditor.canvasUnsavedDiscard`
        },
        canvasLoadingFile: {
            defaultMessage: `Loading file…`,
            id: `skillEditor.canvasLoadingFile`
        },
        canvasRetry: {
            defaultMessage: `Retry`,
            id: `skillEditor.canvasRetry`
        },
        noPreviewAvailable: {
            defaultMessage: `Preview not available for this file.`,
            id: `skillEditor.noPreviewAvailable`
        }
    }), Z = ({
        onContinueEditing: e,
        onDiscardChanges: t
    }) => {
        "use no forget";
        return (0, Y.jsxs)(s, {
            isOpen: !0,
            testId: `modal-unsaved-change`,
            title: (0, Y.jsx)(g, {
                ...X.canvasUnsavedWarningTitle
            }),
            onClose: e,
            children: [(0, Y.jsx)(`p`, {
                className: `text-token-text-tertiary text-sm`,
                children: (0, Y.jsx)(g, {
                    ...X.canvasUnsavedWarningBody
                })
            }), (0, Y.jsxs)(`div`, {
                className: `mt-4 flex justify-end gap-2`,
                children: [(0, Y.jsx)(n, {
                    color: `ghost`,
                    onClick: e,
                    children: (0, Y.jsx)(g, {
                        ...X.canvasUnsavedContinueEditing
                    })
                }), (0, Y.jsx)(T, {
                    color: `danger`,
                    onClick: t,
                    children: (0, Y.jsx)(g, {
                        ...X.canvasUnsavedDiscard
                    })
                })]
            })]
        })
    }
}));
export {
    Z as a, G as i, K as n, X as o, V as r, Q as s, H as t
};
//# sourceMappingURL=4e0528a1-kdigzwymvzc0xhmu.js.map