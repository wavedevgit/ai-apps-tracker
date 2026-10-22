import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cat as n,
    J7 as r,
    LU as i,
    Q7 as a,
    Qy as o,
    Tat as s,
    Zy as c,
    c7 as l,
    dq as u,
    k8 as d,
    l7 as f,
    q5 as p,
    rq as m,
    yZ as h,
    zU as ee
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as g,
    Nn as _,
    Rn as v,
    Vn as y,
    zn as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    ARn as x,
    KWn as S,
    ORn as C,
    Qht as w,
    Xht as T,
    YWn as E,
    agn as D,
    awn as O,
    cgn as k,
    fGn as A,
    iEt as j,
    iGn as M,
    ign as N,
    iwn as P,
    mGn as F,
    nGn as I,
    ogn as te,
    rEt as L,
    rgn as ne,
    sgn as re,
    vUn as R,
    yUn as z
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Bp as B,
    Vp as V
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    n as H,
    t as U
} from "./af004db9-j8qp34bq3sgddxua.js";
import {
    n as W,
    t as G
} from "./fc5e7148-bzvf5x2jirg3dd13.js";
import {
    n as K
} from "./44246d2c-kf07zho2v741ronp.js";
var q, J, Y = e((() => {
    re(), te(), N(), q = k({
        id: `writing-block-download-actions`,
        icons: {
            download: {
                normal: ne,
                small: D
            }
        }
    }), J = q.Download
}));

function X(e) {
    if (!e.includes(`contentReference`)) return e;
    let t = E().use(F).use(x, {
        singleTilde: !1
    }).use(w).use(ie).use(W).processSync(e);
    return String(t).trim()
}

function ie() {
    return e => {
        M(e, `textDirective`, e => {
            e.name !== `contentReference` && (e.type = `text`, e.value = `:` + e.name)
        })
    }
}
var Z = e((() => {
    G(), h(), T(), C(), A(), S(), I()
}));

function ae({
    conversation: e,
    messageId: t,
    index: i,
    libraryFileId: a,
    contentFileId: o,
    flushUnsavedEdits: s,
    resolveContentFileId: d,
    downloadLibraryMarkdown: f,
    markdownContent: m,
    markdownFileName: h,
    isStreaming: g,
    disabled: v = !1,
    renderAsSubmenu: y = !1,
    submenuItemClassName: x,
    submenuSize: S
}) {
    "use no forget";
    let C = ee(),
        w = b(),
        [T, E] = (0, Q.useState)(!1),
        D = !p(u),
        O = p(() => e?.serverId$()),
        k = w.formatMessage({
            id: `writingblock.downloadFileError`,
            defaultMessage: `Download failed. Please try again.`
        });
    async function A(e) {
        let c = O == null && a != null;
        if (!(!c && (O == null || t == null || i == null))) {
            E(!0);
            try {
                await s?.();
                let n = a != null && d != null ? await d() : o;
                if (c && n == null) throw Error(`Library writing block content is unavailable.`);
                let l = c ? {
                        library_file_id: a,
                        content_file_id: n,
                        export_type: e
                    } : {
                        conversation_id: O?.toString(),
                        message_id: t,
                        index: i,
                        export_type: e
                    },
                    u = await r.safePost(`/export_doc/writing_block/file`, {
                        requestBody: l
                    }),
                    f = document.createElement(`a`);
                f.href = u.download_url, f.rel = `noopener`, document.body.appendChild(f), f.click(), f.remove()
            } catch (t) {
                n.addError(t, {
                    tags: [`type:writing_block_download_button`, `export_type:${e}`]
                }), C.danger(k)
            } finally {
                E(!1)
            }
        }
    }

    function j() {
        if (f != null) {
            f();
            return
        }
        if (m == null) return;
        let e = (h ?? `writing-block`).replaceAll(`/`, `-`).replaceAll(`\\`, `-`).trim(),
            t = /\.md$/i.test(e) ? e : `${e||`writing-block`}.md`;
        P(new Blob([X(m)], {
            type: `text/markdown;charset=utf-8`
        }), t)
    }
    let M = v || T || a == null && O == null || !!g,
        N = (0, $.jsxs)($.Fragment, {
            children: [f != null || m != null ? (0, $.jsx)(R.Item, {
                disabled: y && M,
                onSelect: e => {
                    y && e.preventDefault(), j()
                },
                icon: (0, $.jsx)(L, {
                    "aria-hidden": `true`,
                    className: `icon`,
                    iconKey: `text`
                }),
                label: w.formatMessage({
                    id: `WritingBlockDownloadButton.downloadMarkdown.label`,
                    defaultMessage: `Markdown document`
                }),
                trailing: (0, $.jsx)(`span`, {
                    children: w.formatMessage({
                        id: `WritingBlockDownloadButton.downloadMarkdown.ext`,
                        defaultMessage: `.md`
                    })
                })
            }) : null, (0, $.jsx)(R.Item, {
                disabled: y && M,
                onSelect: e => {
                    y && e.preventDefault(), A(`pdf`)
                },
                icon: (0, $.jsx)(L, {
                    "aria-hidden": `true`,
                    className: `icon`,
                    iconKey: `pdf`
                }),
                label: w.formatMessage({
                    id: `WritingBlockDownloadButton.downloadPdf.label`,
                    defaultMessage: `PDF document`
                }),
                trailing: (0, $.jsx)(`span`, {
                    children: w.formatMessage({
                        id: `WritingBlockDownloadButton.downloadPdf.ext`,
                        defaultMessage: `.pdf`
                    })
                })
            }), (0, $.jsx)(R.Item, {
                disabled: y && M,
                onSelect: e => {
                    y && e.preventDefault(), A(`docx`)
                },
                icon: V,
                label: w.formatMessage({
                    id: `WritingBlockDownloadButton.downloadDocx.label`,
                    defaultMessage: `Microsoft Word`
                }),
                trailing: (0, $.jsx)(`span`, {
                    children: w.formatMessage({
                        id: `WritingBlockDownloadButton.downloadDocx.ext`,
                        defaultMessage: `.docx`
                    })
                })
            })]
        });
    return y ? (0, $.jsxs)(R.Sub, {
        children: [(0, $.jsx)(R.SubMenuTrigger, {
            icon: T ? (0, $.jsx)(U, {
                size: 20
            }) : J,
            className: x,
            size: S,
            label: w.formatMessage({
                id: `WritingBlockDownloadButton.menuTitle`,
                defaultMessage: `Download`
            }),
            disabled: M
        }), (0, $.jsx)(R.Portal, {
            children: (0, $.jsx)(R.SubContent, {
                align: `end`,
                children: N
            })
        })]
    }) : (0, $.jsxs)(R.Root, {
        children: [(0, $.jsx)(c, {
            sideOffset: 0,
            label: (0, $.jsx)(_, {
                id: `WritingBlockDownloadButton.downloadTooltip`,
                defaultMessage: `Download`
            }),
            children: (0, $.jsx)(R.BasicTrigger, {
                asChild: !0,
                children: (0, $.jsx)(`button`, {
                    className: l(`text-token-text-primary hover:bg-token-bg-tertiary flex size-9 items-center justify-center rounded-full p-1.5 transition-colors select-none disabled:opacity-40 disabled:hover:bg-transparent`),
                    disabled: M,
                    children: D ? T ? (0, $.jsx)(U, {
                        size: 16
                    }) : (0, $.jsx)(J, {
                        className: `block`
                    }) : (0, $.jsx)(`div`, {
                        className: l(`flex items-center gap-1`, `text-sm font-medium`, `font-normal`),
                        children: T ? (0, $.jsx)(U, {
                            size: 20
                        }) : (0, $.jsx)(J, {
                            className: `block`
                        })
                    })
                })
            })
        }), (0, $.jsx)(R.Portal, {
            children: (0, $.jsxs)(R.Content, {
                align: `end`,
                children: [(0, $.jsx)(R.Label, {
                    children: (0, $.jsx)(_, {
                        id: `WritingBlockDownloadButton.menuTitle`,
                        defaultMessage: `Download`
                    })
                }), N]
            })
        })]
    })
}
var Q, $, oe = e((() => {
    H(), z(), Y(), B(), o(), j(), d(), i(), s(), O(), m(), a(), Z(), K(), f(), Q = t(y()), v(), $ = g()
}));
export {
    J as a, X as i, oe as n, Y as o, Z as r, ae as t
};
//# sourceMappingURL=429593da-bwv77qbj8388r169.js.map