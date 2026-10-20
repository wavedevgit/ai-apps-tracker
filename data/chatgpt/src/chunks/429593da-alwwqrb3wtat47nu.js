import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    L7 as r,
    M5 as i,
    N7 as a,
    VU as o,
    Xy as s,
    Yy as c,
    aq as l,
    iat as u,
    m8 as d,
    nat as f,
    pq as ee,
    q5 as p,
    xZ as m,
    zU as h
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as g,
    Hn as _,
    Pn as v,
    Vn as y,
    zn as b
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    CCn as x,
    Chn as S,
    Ehn as C,
    JLn as w,
    MWn as T,
    PWn as E,
    Qht as D,
    RHn as O,
    SCn as k,
    SWn as A,
    Shn as j,
    Thn as M,
    XLn as N,
    Xht as P,
    fWn as F,
    hWn as I,
    nEt as te,
    tEt as L,
    wWn as ne,
    whn as re,
    xhn as R,
    zHn as z
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Bp as B,
    Vp as V
} from "./30901919-jory365vq6ym5crx.js";
import {
    n as H,
    t as U
} from "./af004db9-hzih3kfc8ppntedi.js";
import {
    n as W,
    t as G
} from "./fc5e7148-ept0fo97tlmzifty.js";
import {
    n as K
} from "./44246d2c-ggb4oykoqwdxgwhe.js";
var q, J, Y = e((() => {
    M(), re(), j(), q = C({
        id: `writing-block-download-actions`,
        icons: {
            download: {
                normal: R,
                small: S
            }
        }
    }), J = q.Download
}));

function X(e) {
    if (!e.includes(`contentReference`)) return e;
    let t = I().use(E).use(N, {
        singleTilde: !1
    }).use(D).use(ie).use(W).processSync(e);
    return String(t).trim()
}

function ie() {
    return e => {
        ne(e, `textDirective`, e => {
            e.name !== `contentReference` && (e.type = `text`, e.value = `:` + e.name)
        })
    }
}
var Z = e((() => {
    G(), m(), P(), w(), T(), F(), A()
}));

function ae({
    conversation: e,
    messageId: t,
    index: n,
    libraryFileId: r,
    contentFileId: s,
    flushUnsavedEdits: l,
    resolveContentFileId: u,
    downloadLibraryMarkdown: d,
    markdownContent: m,
    markdownFileName: h,
    isStreaming: _,
    disabled: y = !1,
    renderAsSubmenu: b = !1,
    submenuItemClassName: x,
    submenuSize: S
}) {
    "use no forget";
    let C = o(),
        w = g(),
        [T, E] = (0, Q.useState)(!1),
        D = !i(ee),
        A = i(() => e?.serverId$()),
        j = w.formatMessage({
            id: `writingblock.downloadFileError`,
            defaultMessage: `Download failed. Please try again.`
        });
    async function M(e) {
        let i = A == null && r != null;
        if (!(!i && (A == null || t == null || n == null))) {
            E(!0);
            try {
                await l?.();
                let o = r != null && u != null ? await u() : s;
                if (i && o == null) throw Error(`Library writing block content is unavailable.`);
                let c = i ? {
                        library_file_id: r,
                        content_file_id: o,
                        export_type: e
                    } : {
                        conversation_id: A?.toString(),
                        message_id: t,
                        index: n,
                        export_type: e
                    },
                    d = await a.safePost(`/export_doc/writing_block/file`, {
                        requestBody: c
                    }),
                    f = document.createElement(`a`);
                f.href = d.download_url, f.rel = `noopener`, document.body.appendChild(f), f.click(), f.remove()
            } catch (t) {
                f.addError(t, {
                    tags: [`type:writing_block_download_button`, `export_type:${e}`]
                }), C.danger(j)
            } finally {
                E(!1)
            }
        }
    }

    function N() {
        if (d != null) {
            d();
            return
        }
        if (m == null) return;
        let e = (h ?? `writing-block`).replaceAll(`/`, `-`).replaceAll(`\\`, `-`).trim(),
            t = /\.md$/i.test(e) ? e : `${e||`writing-block`}.md`;
        k(new Blob([X(m)], {
            type: `text/markdown;charset=utf-8`
        }), t)
    }
    let P = y || T || r == null && A == null || !!_,
        F = (0, $.jsxs)($.Fragment, {
            children: [d != null || m != null ? (0, $.jsx)(O.Item, {
                disabled: b && P,
                onSelect: e => {
                    b && e.preventDefault(), N()
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
            }) : null, (0, $.jsx)(O.Item, {
                disabled: b && P,
                onSelect: e => {
                    b && e.preventDefault(), M(`pdf`)
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
            }), (0, $.jsx)(O.Item, {
                disabled: b && P,
                onSelect: e => {
                    b && e.preventDefault(), M(`docx`)
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
    return b ? (0, $.jsxs)(O.Sub, {
        children: [(0, $.jsx)(O.SubMenuTrigger, {
            icon: T ? (0, $.jsx)(U, {
                size: 20
            }) : J,
            className: x,
            size: S,
            label: w.formatMessage({
                id: `WritingBlockDownloadButton.menuTitle`,
                defaultMessage: `Download`
            }),
            disabled: P
        }), (0, $.jsx)(O.Portal, {
            children: (0, $.jsx)(O.SubContent, {
                align: `end`,
                children: F
            })
        })]
    }) : (0, $.jsxs)(O.Root, {
        children: [(0, $.jsx)(c, {
            sideOffset: 0,
            label: (0, $.jsx)(v, {
                id: `WritingBlockDownloadButton.downloadTooltip`,
                defaultMessage: `Download`
            }),
            children: (0, $.jsx)(O.BasicTrigger, {
                asChild: !0,
                children: (0, $.jsx)(`button`, {
                    className: p(`text-token-text-primary hover:bg-token-bg-tertiary flex size-9 items-center justify-center rounded-full p-1.5 transition-colors select-none disabled:opacity-40 disabled:hover:bg-transparent`),
                    disabled: P,
                    children: D ? T ? (0, $.jsx)(U, {
                        size: 16
                    }) : (0, $.jsx)(J, {
                        className: `block`
                    }) : (0, $.jsx)(`div`, {
                        className: p(`flex items-center gap-1`, `text-sm font-medium`, `font-normal`),
                        children: T ? (0, $.jsx)(U, {
                            size: 20
                        }) : (0, $.jsx)(J, {
                            className: `block`
                        })
                    })
                })
            })
        }), (0, $.jsx)(O.Portal, {
            children: (0, $.jsxs)(O.Content, {
                align: `end`,
                children: [(0, $.jsx)(O.Label, {
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
    H(), z(), Y(), B(), s(), te(), d(), h(), u(), x(), l(), r(), Z(), K(), n(), Q = t(_()), b(), $ = y()
}));
export {
    J as a, X as i, oe as n, Y as o, Z as r, ae as t
};
//# sourceMappingURL=429593da-alwwqrb3wtat47nu.js.map