import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as n,
    Dit as r,
    My as i,
    NK as a,
    VK as o,
    YX as s,
    a7 as c,
    b5 as l,
    hU as u,
    i5 as d,
    jy as f,
    kit as p,
    l7 as m,
    pU as h,
    y5 as g
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as _,
    Nn as v,
    Rn as y,
    Vn as b,
    zn as x
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $Tt as S,
    Jht as C,
    NLn as w,
    QUn as T,
    THn as E,
    Xht as D,
    bWn as O,
    cCn as k,
    cWn as A,
    chn as j,
    dhn as M,
    eEt as N,
    fhn as P,
    jLn as F,
    lCn as I,
    lhn as L,
    shn as R,
    tWn as ee,
    uWn as te,
    uhn as ne,
    vWn as re,
    wHn as z
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Bp as B,
    Vp as V
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    n as H,
    t as U
} from "./af004db9-6w68dbz1fjui3k0e.js";
import {
    n as W,
    t as G
} from "./fc5e7148-gni0iub3x2kgluhl.js";
import {
    n as K
} from "./44246d2c-dsovbpoi8e622gum.js";
var q, J, Y = e((() => {
    M(), ne(), j(), q = P({
        id: `writing-block-download-actions`,
        icons: {
            download: {
                normal: R,
                small: L
            }
        }
    }), J = q.Download
}));

function X(e) {
    if (!e.includes(`contentReference`)) return e;
    let t = ee().use(O).use(w, {
        singleTilde: !1
    }).use(D).use(ie).use(W).processSync(e);
    return String(t).trim()
}

function ie() {
    return e => {
        te(e, `textDirective`, e => {
            e.name !== `contentReference` && (e.type = `text`, e.value = `:` + e.name)
        })
    }
}
var Z = e((() => {
    G(), s(), C(), F(), re(), T(), A()
}));

function ae({
    conversation: e,
    messageId: t,
    index: n,
    libraryFileId: i,
    contentFileId: a,
    flushUnsavedEdits: s,
    resolveContentFileId: l,
    downloadLibraryMarkdown: p,
    markdownContent: m,
    markdownFileName: h,
    isStreaming: _,
    disabled: y = !1,
    renderAsSubmenu: b = !1,
    submenuItemClassName: C,
    submenuSize: w
}) {
    "use no forget";
    let T = u(),
        E = x(),
        [D, O] = (0, Q.useState)(!1),
        A = !d(o),
        j = d(() => e?.serverId$()),
        M = E.formatMessage({
            id: `writingblock.downloadFileError`,
            defaultMessage: `Download failed. Please try again.`
        });
    async function N(e) {
        let o = j == null && i != null;
        if (!(!o && (j == null || t == null || n == null))) {
            O(!0);
            try {
                await s?.();
                let r = i != null && l != null ? await l() : a;
                if (o && r == null) throw Error(`Library writing block content is unavailable.`);
                let u = o ? {
                        library_file_id: i,
                        content_file_id: r,
                        export_type: e
                    } : {
                        conversation_id: j?.toString(),
                        message_id: t,
                        index: n,
                        export_type: e
                    },
                    d = await c.safePost(`/export_doc/writing_block/file`, {
                        requestBody: u
                    }),
                    f = document.createElement(`a`);
                f.href = d.download_url, f.rel = `noopener`, document.body.appendChild(f), f.click(), f.remove()
            } catch (t) {
                r.addError(t, {
                    tags: [`type:writing_block_download_button`, `export_type:${e}`]
                }), T.danger(M)
            } finally {
                O(!1)
            }
        }
    }

    function P() {
        if (p != null) {
            p();
            return
        }
        if (m == null) return;
        let e = (h ?? `writing-block`).replaceAll(`/`, `-`).replaceAll(`\\`, `-`).trim(),
            t = /\.md$/i.test(e) ? e : `${e||`writing-block`}.md`;
        k(new Blob([X(m)], {
            type: `text/markdown;charset=utf-8`
        }), t)
    }
    let F = y || D || i == null && j == null || !!_,
        I = (0, $.jsxs)($.Fragment, {
            children: [p != null || m != null ? (0, $.jsx)(z.Item, {
                disabled: b && F,
                onSelect: e => {
                    b && e.preventDefault(), P()
                },
                icon: (0, $.jsx)(S, {
                    "aria-hidden": `true`,
                    className: `icon`,
                    iconKey: `text`
                }),
                label: E.formatMessage({
                    id: `WritingBlockDownloadButton.downloadMarkdown.label`,
                    defaultMessage: `Markdown document`
                }),
                trailing: (0, $.jsx)(`span`, {
                    children: E.formatMessage({
                        id: `WritingBlockDownloadButton.downloadMarkdown.ext`,
                        defaultMessage: `.md`
                    })
                })
            }) : null, (0, $.jsx)(z.Item, {
                disabled: b && F,
                onSelect: e => {
                    b && e.preventDefault(), N(`pdf`)
                },
                icon: (0, $.jsx)(S, {
                    "aria-hidden": `true`,
                    className: `icon`,
                    iconKey: `pdf`
                }),
                label: E.formatMessage({
                    id: `WritingBlockDownloadButton.downloadPdf.label`,
                    defaultMessage: `PDF document`
                }),
                trailing: (0, $.jsx)(`span`, {
                    children: E.formatMessage({
                        id: `WritingBlockDownloadButton.downloadPdf.ext`,
                        defaultMessage: `.pdf`
                    })
                })
            }), (0, $.jsx)(z.Item, {
                disabled: b && F,
                onSelect: e => {
                    b && e.preventDefault(), N(`docx`)
                },
                icon: V,
                label: E.formatMessage({
                    id: `WritingBlockDownloadButton.downloadDocx.label`,
                    defaultMessage: `Microsoft Word`
                }),
                trailing: (0, $.jsx)(`span`, {
                    children: E.formatMessage({
                        id: `WritingBlockDownloadButton.downloadDocx.ext`,
                        defaultMessage: `.docx`
                    })
                })
            })]
        });
    return b ? (0, $.jsxs)(z.Sub, {
        children: [(0, $.jsx)(z.SubMenuTrigger, {
            icon: D ? (0, $.jsx)(U, {
                size: 20
            }) : J,
            className: C,
            size: w,
            label: E.formatMessage({
                id: `WritingBlockDownloadButton.menuTitle`,
                defaultMessage: `Download`
            }),
            disabled: F
        }), (0, $.jsx)(z.Portal, {
            children: (0, $.jsx)(z.SubContent, {
                align: `end`,
                children: I
            })
        })]
    }) : (0, $.jsxs)(z.Root, {
        children: [(0, $.jsx)(f, {
            sideOffset: 0,
            label: (0, $.jsx)(v, {
                id: `WritingBlockDownloadButton.downloadTooltip`,
                defaultMessage: `Download`
            }),
            children: (0, $.jsx)(z.BasicTrigger, {
                asChild: !0,
                children: (0, $.jsx)(`button`, {
                    className: g(`text-token-text-primary hover:bg-token-bg-tertiary flex size-9 items-center justify-center rounded-full p-1.5 transition-colors select-none disabled:opacity-40 disabled:hover:bg-transparent`),
                    disabled: F,
                    children: A ? D ? (0, $.jsx)(U, {
                        size: 16
                    }) : (0, $.jsx)(J, {
                        className: `block`
                    }) : (0, $.jsx)(`div`, {
                        className: g(`flex items-center gap-1`, `text-sm font-medium`, `font-normal`),
                        children: D ? (0, $.jsx)(U, {
                            size: 20
                        }) : (0, $.jsx)(J, {
                            className: `block`
                        })
                    })
                })
            })
        }), (0, $.jsx)(z.Portal, {
            children: (0, $.jsxs)(z.Content, {
                align: `end`,
                children: [(0, $.jsx)(z.Label, {
                    children: (0, $.jsx)(v, {
                        id: `WritingBlockDownloadButton.menuTitle`,
                        defaultMessage: `Download`
                    })
                }), I]
            })
        })]
    })
}
var Q, $, oe = e((() => {
    H(), E(), Y(), B(), i(), N(), n(), h(), p(), I(), a(), m(), Z(), K(), l(), Q = t(b()), y(), $ = _()
}));
export {
    J as a, X as i, oe as n, Y as o, Z as r, ae as t
};
//# sourceMappingURL=429593da-jc18susvxggo0epu.js.map