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
    Zy as s,
    c7 as c,
    dq as l,
    k8 as u,
    l7 as d,
    q5 as f,
    rq as p,
    xat as m,
    yZ as h,
    zU as g
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as _,
    Nn as v,
    Rn as y,
    Vn as b,
    zn as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bhn as S,
    Ghn as C,
    HCn as w,
    Hhn as T,
    MWn as E,
    Uhn as D,
    VCn as O,
    VWn as k,
    Vhn as A,
    Whn as j,
    YWn as M,
    Yht as N,
    ZWn as P,
    Zht as F,
    dRn as I,
    eEt as L,
    kWn as ee,
    nUn as te,
    pRn as ne,
    tEt as re,
    tUn as R,
    zWn as z
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Bp as B,
    Vp as V
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    n as H,
    t as U
} from "./af004db9-opqchae2bgeq185w.js";
import {
    n as W,
    t as G
} from "./fc5e7148-dtkln6uuv66snw9m.js";
import {
    n as K
} from "./44246d2c-pc19w1cn4kzjjw33.js";
var q, J, Y = e((() => {
    j(), D(), A(), q = C({
        id: `writing-block-download-actions`,
        icons: {
            download: {
                normal: S,
                small: T
            }
        }
    }), J = q.Download
}));

function X(e) {
    if (!e.includes(`contentReference`)) return e;
    let t = E().use(P).use(ne, {
        singleTilde: !1
    }).use(F).use(ie).use(W).processSync(e);
    return String(t).trim()
}

function ie() {
    return e => {
        k(e, `textDirective`, e => {
            e.name !== `contentReference` && (e.type = `text`, e.value = `:` + e.name)
        })
    }
}
var Z = e((() => {
    G(), h(), N(), I(), M(), ee(), z()
}));

function ae({
    conversation: e,
    messageId: t,
    index: n,
    libraryFileId: i,
    contentFileId: a,
    flushUnsavedEdits: o,
    resolveContentFileId: u,
    downloadLibraryMarkdown: d,
    markdownContent: p,
    markdownFileName: h,
    isStreaming: _,
    disabled: y = !1,
    renderAsSubmenu: b = !1,
    submenuItemClassName: S,
    submenuSize: C
}) {
    "use no forget";
    let w = g(),
        T = x(),
        [E, D] = (0, Q.useState)(!1),
        k = !f(l),
        A = f(() => e?.serverId$()),
        j = T.formatMessage({
            id: `writingblock.downloadFileError`,
            defaultMessage: `Download failed. Please try again.`
        });
    async function M(e) {
        let s = A == null && i != null;
        if (!(!s && (A == null || t == null || n == null))) {
            D(!0);
            try {
                await o?.();
                let c = i != null && u != null ? await u() : a;
                if (s && c == null) throw Error(`Library writing block content is unavailable.`);
                let l = s ? {
                        library_file_id: i,
                        content_file_id: c,
                        export_type: e
                    } : {
                        conversation_id: A?.toString(),
                        message_id: t,
                        index: n,
                        export_type: e
                    },
                    d = await r.safePost(`/export_doc/writing_block/file`, {
                        requestBody: l
                    }),
                    f = document.createElement(`a`);
                f.href = d.download_url, f.rel = `noopener`, document.body.appendChild(f), f.click(), f.remove()
            } catch (t) {
                m.addError(t, {
                    tags: [`type:writing_block_download_button`, `export_type:${e}`]
                }), w.danger(j)
            } finally {
                D(!1)
            }
        }
    }

    function N() {
        if (d != null) {
            d();
            return
        }
        if (p == null) return;
        let e = (h ?? `writing-block`).replaceAll(`/`, `-`).replaceAll(`\\`, `-`).trim(),
            t = /\.md$/i.test(e) ? e : `${e||`writing-block`}.md`;
        O(new Blob([X(p)], {
            type: `text/markdown;charset=utf-8`
        }), t)
    }
    let P = y || E || i == null && A == null || !!_,
        F = (0, $.jsxs)($.Fragment, {
            children: [d != null || p != null ? (0, $.jsx)(R.Item, {
                disabled: b && P,
                onSelect: e => {
                    b && e.preventDefault(), N()
                },
                icon: (0, $.jsx)(L, {
                    "aria-hidden": `true`,
                    className: `icon`,
                    iconKey: `text`
                }),
                label: T.formatMessage({
                    id: `WritingBlockDownloadButton.downloadMarkdown.label`,
                    defaultMessage: `Markdown document`
                }),
                trailing: (0, $.jsx)(`span`, {
                    children: T.formatMessage({
                        id: `WritingBlockDownloadButton.downloadMarkdown.ext`,
                        defaultMessage: `.md`
                    })
                })
            }) : null, (0, $.jsx)(R.Item, {
                disabled: b && P,
                onSelect: e => {
                    b && e.preventDefault(), M(`pdf`)
                },
                icon: (0, $.jsx)(L, {
                    "aria-hidden": `true`,
                    className: `icon`,
                    iconKey: `pdf`
                }),
                label: T.formatMessage({
                    id: `WritingBlockDownloadButton.downloadPdf.label`,
                    defaultMessage: `PDF document`
                }),
                trailing: (0, $.jsx)(`span`, {
                    children: T.formatMessage({
                        id: `WritingBlockDownloadButton.downloadPdf.ext`,
                        defaultMessage: `.pdf`
                    })
                })
            }), (0, $.jsx)(R.Item, {
                disabled: b && P,
                onSelect: e => {
                    b && e.preventDefault(), M(`docx`)
                },
                icon: V,
                label: T.formatMessage({
                    id: `WritingBlockDownloadButton.downloadDocx.label`,
                    defaultMessage: `Microsoft Word`
                }),
                trailing: (0, $.jsx)(`span`, {
                    children: T.formatMessage({
                        id: `WritingBlockDownloadButton.downloadDocx.ext`,
                        defaultMessage: `.docx`
                    })
                })
            })]
        });
    return b ? (0, $.jsxs)(R.Sub, {
        children: [(0, $.jsx)(R.SubMenuTrigger, {
            icon: E ? (0, $.jsx)(U, {
                size: 20
            }) : J,
            className: S,
            size: C,
            label: T.formatMessage({
                id: `WritingBlockDownloadButton.menuTitle`,
                defaultMessage: `Download`
            }),
            disabled: P
        }), (0, $.jsx)(R.Portal, {
            children: (0, $.jsx)(R.SubContent, {
                align: `end`,
                children: F
            })
        })]
    }) : (0, $.jsxs)(R.Root, {
        children: [(0, $.jsx)(s, {
            sideOffset: 0,
            label: (0, $.jsx)(v, {
                id: `WritingBlockDownloadButton.downloadTooltip`,
                defaultMessage: `Download`
            }),
            children: (0, $.jsx)(R.BasicTrigger, {
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
        }), (0, $.jsx)(R.Portal, {
            children: (0, $.jsxs)(R.Content, {
                align: `end`,
                children: [(0, $.jsx)(R.Label, {
                    children: (0, $.jsx)(v, {
                        id: `WritingBlockDownloadButton.menuTitle`,
                        defaultMessage: `Download`
                    })
                }), F]
            })
        })]
    })
}
var Q, $, oe = e((() => {
    H(), te(), Y(), B(), o(), re(), u(), i(), n(), w(), p(), a(), Z(), K(), d(), Q = t(b()), y(), $ = _()
}));
export {
    J as a, X as i, oe as n, Y as o, Z as r, ae as t
};
//# sourceMappingURL=429593da-lfiwqx9wi3ftzyph.js.map