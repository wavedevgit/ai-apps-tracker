import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as n,
    F7 as ee,
    HU as r,
    P5 as i,
    SZ as a,
    X5 as o,
    Xy as s,
    Y5 as c,
    Zy as l,
    aat as u,
    g8 as d,
    mq as f,
    oq as p,
    sat as m,
    z7 as h
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as g,
    Nn as _,
    Rn as v,
    Vn as y,
    zn as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AWn as x,
    Ahn as S,
    DCn as C,
    Dhn as w,
    ECn as T,
    Ehn as E,
    IHn as D,
    JLn as O,
    KLn as k,
    LHn as A,
    MWn as j,
    Ohn as M,
    SWn as N,
    Thn as P,
    bWn as F,
    cEt as I,
    igt as L,
    khn as te,
    ngt as ne,
    pWn as re,
    sEt as R,
    uWn as z
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Bp as B,
    Vp as V
} from "./30901919-e8h11sw136qen6v0.js";
import {
    n as H,
    t as U
} from "./af004db9-mmiugbs6durt9mav.js";
import {
    n as W,
    t as G
} from "./fc5e7148-bhe4ccbcnw08cauz.js";
import {
    n as K
} from "./44246d2c-gearb5lszerw5txv.js";
var q, J, Y = e((() => {
    te(), M(), E(), q = S({
        id: `writing-block-download-actions`,
        icons: {
            download: {
                normal: P,
                small: w
            }
        }
    }), J = q.Download
}));

function X(e) {
    if (!e.includes(`contentReference`)) return e;
    let t = re().use(j).use(O, {
        singleTilde: !1
    }).use(L).use(ie).use(W).processSync(e);
    return String(t).trim()
}

function ie() {
    return e => {
        N(e, `textDirective`, e => {
            e.name !== `contentReference` && (e.type = `text`, e.value = `:` + e.name)
        })
    }
}
var Z = e((() => {
    G(), a(), ne(), k(), x(), z(), F()
}));

function ae({
    conversation: e,
    messageId: t,
    index: n,
    libraryFileId: a,
    contentFileId: o,
    flushUnsavedEdits: l,
    resolveContentFileId: d,
    downloadLibraryMarkdown: p,
    markdownContent: m,
    markdownFileName: h,
    isStreaming: g,
    disabled: v = !1,
    renderAsSubmenu: y = !1,
    submenuItemClassName: x,
    submenuSize: S
}) {
    "use no forget";
    let C = r(),
        w = b(),
        [E, O] = (0, Q.useState)(!1),
        k = !i(f),
        A = i(() => e?.serverId$()),
        j = w.formatMessage({
            id: `writingblock.downloadFileError`,
            defaultMessage: `Download failed. Please try again.`
        });
    async function M(e) {
        let r = A == null && a != null;
        if (!(!r && (A == null || t == null || n == null))) {
            O(!0);
            try {
                await l?.();
                let i = a != null && d != null ? await d() : o;
                if (r && i == null) throw Error(`Library writing block content is unavailable.`);
                let s = r ? {
                        library_file_id: a,
                        content_file_id: i,
                        export_type: e
                    } : {
                        conversation_id: A?.toString(),
                        message_id: t,
                        index: n,
                        export_type: e
                    },
                    c = await ee.safePost(`/export_doc/writing_block/file`, {
                        requestBody: s
                    }),
                    u = document.createElement(`a`);
                u.href = c.download_url, u.rel = `noopener`, document.body.appendChild(u), u.click(), u.remove()
            } catch (t) {
                u.addError(t, {
                    tags: [`type:writing_block_download_button`, `export_type:${e}`]
                }), C.danger(j)
            } finally {
                O(!1)
            }
        }
    }

    function N() {
        if (p != null) {
            p();
            return
        }
        if (m == null) return;
        let e = (h ?? `writing-block`).replaceAll(`/`, `-`).replaceAll(`\\`, `-`).trim(),
            t = /\.md$/i.test(e) ? e : `${e||`writing-block`}.md`;
        T(new Blob([X(m)], {
            type: `text/markdown;charset=utf-8`
        }), t)
    }
    let P = v || E || a == null && A == null || !!g,
        F = (0, $.jsxs)($.Fragment, {
            children: [p != null || m != null ? (0, $.jsx)(D.Item, {
                disabled: y && P,
                onSelect: e => {
                    y && e.preventDefault(), N()
                },
                icon: (0, $.jsx)(R, {
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
            }) : null, (0, $.jsx)(D.Item, {
                disabled: y && P,
                onSelect: e => {
                    y && e.preventDefault(), M(`pdf`)
                },
                icon: (0, $.jsx)(R, {
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
            }), (0, $.jsx)(D.Item, {
                disabled: y && P,
                onSelect: e => {
                    y && e.preventDefault(), M(`docx`)
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
    return y ? (0, $.jsxs)(D.Sub, {
        children: [(0, $.jsx)(D.SubMenuTrigger, {
            icon: E ? (0, $.jsx)(U, {
                size: 20
            }) : J,
            className: x,
            size: S,
            label: w.formatMessage({
                id: `WritingBlockDownloadButton.menuTitle`,
                defaultMessage: `Download`
            }),
            disabled: P
        }), (0, $.jsx)(D.Portal, {
            children: (0, $.jsx)(D.SubContent, {
                align: `end`,
                children: F
            })
        })]
    }) : (0, $.jsxs)(D.Root, {
        children: [(0, $.jsx)(s, {
            sideOffset: 0,
            label: (0, $.jsx)(_, {
                id: `WritingBlockDownloadButton.downloadTooltip`,
                defaultMessage: `Download`
            }),
            children: (0, $.jsx)(D.BasicTrigger, {
                asChild: !0,
                children: (0, $.jsx)(`button`, {
                    className: c(`text-token-text-primary hover:bg-token-bg-tertiary flex size-9 items-center justify-center rounded-full p-1.5 transition-colors select-none disabled:opacity-40 disabled:hover:bg-transparent`),
                    disabled: P,
                    children: k ? E ? (0, $.jsx)(U, {
                        size: 16
                    }) : (0, $.jsx)(J, {
                        className: `block`
                    }) : (0, $.jsx)(`div`, {
                        className: c(`flex items-center gap-1`, `text-sm font-medium`, `font-normal`),
                        children: E ? (0, $.jsx)(U, {
                            size: 20
                        }) : (0, $.jsx)(J, {
                            className: `block`
                        })
                    })
                })
            })
        }), (0, $.jsx)(D.Portal, {
            children: (0, $.jsxs)(D.Content, {
                align: `end`,
                children: [(0, $.jsx)(D.Label, {
                    children: (0, $.jsx)(_, {
                        id: `WritingBlockDownloadButton.menuTitle`,
                        defaultMessage: `Download`
                    })
                }), F]
            })
        })]
    })
}
var Q, $, oe = e((() => {
    H(), A(), Y(), B(), l(), I(), d(), n(), m(), C(), p(), h(), Z(), K(), o(), Q = t(y()), v(), $ = g()
}));
export {
    J as a, X as i, oe as n, Y as o, Z as r, ae as t
};
//# sourceMappingURL=429593da-bcf0ec8pyji1luws.js.map