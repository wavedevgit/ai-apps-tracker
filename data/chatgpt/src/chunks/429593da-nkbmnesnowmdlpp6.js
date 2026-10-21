import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    N5 as r,
    P7 as i,
    R7 as a,
    VU as o,
    Xy as s,
    Y5 as c,
    Zy as l,
    aq as u,
    h8 as d,
    iat as f,
    oat as p,
    pq as m,
    xZ as h,
    zU as g
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as _,
    Nn as v,
    Rn as y,
    Vn as b,
    zn as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $ht as S,
    CCn as C,
    Chn as w,
    DWn as T,
    Dhn as E,
    Ehn as D,
    GLn as O,
    NHn as k,
    PHn as A,
    Shn as j,
    Thn as M,
    ULn as N,
    _Wn as P,
    aEt as F,
    iEt as I,
    kWn as L,
    sWn as ee,
    tgt as te,
    uWn as ne,
    wCn as re,
    whn as R,
    yWn as z
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Bp as B,
    Vp as V
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    n as H,
    t as U
} from "./af004db9-jdoi5p0ftep3sdlx.js";
import {
    n as W,
    t as G
} from "./fc5e7148-t5k6griuqp3fbbf6.js";
import {
    n as K
} from "./44246d2c-dgp7kxutj9d3oogu.js";
var q, J, Y = e((() => {
    D(), M(), w(), q = E({
        id: `writing-block-download-actions`,
        icons: {
            download: {
                normal: j,
                small: R
            }
        }
    }), J = q.Download
}));

function X(e) {
    if (!e.includes(`contentReference`)) return e;
    let t = ne().use(L).use(O, {
        singleTilde: !1
    }).use(te).use(ie).use(W).processSync(e);
    return String(t).trim()
}

function ie() {
    return e => {
        z(e, `textDirective`, e => {
            e.name !== `contentReference` && (e.type = `text`, e.value = `:` + e.name)
        })
    }
}
var Z = e((() => {
    G(), h(), S(), N(), T(), ee(), P()
}));

function ae({
    conversation: e,
    messageId: t,
    index: a,
    libraryFileId: c,
    contentFileId: l,
    flushUnsavedEdits: u,
    resolveContentFileId: d,
    downloadLibraryMarkdown: p,
    markdownContent: h,
    markdownFileName: g,
    isStreaming: _,
    disabled: y = !1,
    renderAsSubmenu: b = !1,
    submenuItemClassName: S,
    submenuSize: w
}) {
    "use no forget";
    let T = o(),
        E = x(),
        [D, O] = (0, Q.useState)(!1),
        A = !r(m),
        j = r(() => e?.serverId$()),
        M = E.formatMessage({
            id: `writingblock.downloadFileError`,
            defaultMessage: `Download failed. Please try again.`
        });
    async function N(e) {
        let n = j == null && c != null;
        if (!(!n && (j == null || t == null || a == null))) {
            O(!0);
            try {
                await u?.();
                let r = c != null && d != null ? await d() : l;
                if (n && r == null) throw Error(`Library writing block content is unavailable.`);
                let o = n ? {
                        library_file_id: c,
                        content_file_id: r,
                        export_type: e
                    } : {
                        conversation_id: j?.toString(),
                        message_id: t,
                        index: a,
                        export_type: e
                    },
                    s = await i.safePost(`/export_doc/writing_block/file`, {
                        requestBody: o
                    }),
                    f = document.createElement(`a`);
                f.href = s.download_url, f.rel = `noopener`, document.body.appendChild(f), f.click(), f.remove()
            } catch (t) {
                f.addError(t, {
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
        if (h == null) return;
        let e = (g ?? `writing-block`).replaceAll(`/`, `-`).replaceAll(`\\`, `-`).trim(),
            t = /\.md$/i.test(e) ? e : `${e||`writing-block`}.md`;
        C(new Blob([X(h)], {
            type: `text/markdown;charset=utf-8`
        }), t)
    }
    let F = y || D || c == null && j == null || !!_,
        L = (0, $.jsxs)($.Fragment, {
            children: [p != null || h != null ? (0, $.jsx)(k.Item, {
                disabled: b && F,
                onSelect: e => {
                    b && e.preventDefault(), P()
                },
                icon: (0, $.jsx)(I, {
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
            }) : null, (0, $.jsx)(k.Item, {
                disabled: b && F,
                onSelect: e => {
                    b && e.preventDefault(), N(`pdf`)
                },
                icon: (0, $.jsx)(I, {
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
            }), (0, $.jsx)(k.Item, {
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
    return b ? (0, $.jsxs)(k.Sub, {
        children: [(0, $.jsx)(k.SubMenuTrigger, {
            icon: D ? (0, $.jsx)(U, {
                size: 20
            }) : J,
            className: S,
            size: w,
            label: E.formatMessage({
                id: `WritingBlockDownloadButton.menuTitle`,
                defaultMessage: `Download`
            }),
            disabled: F
        }), (0, $.jsx)(k.Portal, {
            children: (0, $.jsx)(k.SubContent, {
                align: `end`,
                children: L
            })
        })]
    }) : (0, $.jsxs)(k.Root, {
        children: [(0, $.jsx)(s, {
            sideOffset: 0,
            label: (0, $.jsx)(v, {
                id: `WritingBlockDownloadButton.downloadTooltip`,
                defaultMessage: `Download`
            }),
            children: (0, $.jsx)(k.BasicTrigger, {
                asChild: !0,
                children: (0, $.jsx)(`button`, {
                    className: n(`text-token-text-primary hover:bg-token-bg-tertiary flex size-9 items-center justify-center rounded-full p-1.5 transition-colors select-none disabled:opacity-40 disabled:hover:bg-transparent`),
                    disabled: F,
                    children: A ? D ? (0, $.jsx)(U, {
                        size: 16
                    }) : (0, $.jsx)(J, {
                        className: `block`
                    }) : (0, $.jsx)(`div`, {
                        className: n(`flex items-center gap-1`, `text-sm font-medium`, `font-normal`),
                        children: D ? (0, $.jsx)(U, {
                            size: 20
                        }) : (0, $.jsx)(J, {
                            className: `block`
                        })
                    })
                })
            })
        }), (0, $.jsx)(k.Portal, {
            children: (0, $.jsxs)(k.Content, {
                align: `end`,
                children: [(0, $.jsx)(k.Label, {
                    children: (0, $.jsx)(v, {
                        id: `WritingBlockDownloadButton.menuTitle`,
                        defaultMessage: `Download`
                    })
                }), L]
            })
        })]
    })
}
var Q, $, oe = e((() => {
    H(), A(), Y(), B(), l(), F(), d(), g(), p(), re(), u(), a(), Z(), K(), c(), Q = t(b()), y(), $ = _()
}));
export {
    J as a, X as i, oe as n, Y as o, Z as r, ae as t
};
//# sourceMappingURL=429593da-nkbmnesnowmdlpp6.js.map