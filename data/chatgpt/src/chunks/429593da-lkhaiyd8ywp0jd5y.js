import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    A8 as r,
    Eat as i,
    J5 as a,
    LU as o,
    Qy as s,
    Y7 as ee,
    Zy as c,
    dq as l,
    l7 as u,
    rq as d,
    u7 as f,
    wat as p,
    yZ as m,
    zU as h
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as g,
    Nn as _,
    Rn as v,
    Vn as y,
    zn as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    NRn as x,
    QWn as S,
    Qht as C,
    SUn as w,
    Xht as T,
    YWn as E,
    _Gn as D,
    aGn as O,
    cgn as k,
    cwn as A,
    dgn as j,
    hGn as M,
    iEt as N,
    jRn as P,
    lgn as F,
    ogn as te,
    rEt as I,
    sGn as ne,
    sgn as re,
    swn as L,
    ugn as R,
    xUn as z
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Bp as B,
    Vp as V
} from "./30901919-cmi3nh547dwrqkxv.js";
import {
    n as H,
    t as U
} from "./af004db9-f1581c9feezgu0j4.js";
import {
    n as W,
    t as G
} from "./fc5e7148-ffxfdsw45nr8nt2r.js";
import {
    n as K
} from "./44246d2c-i8814db627yufuxp.js";
var q, J, Y = e((() => {
    R(), F(), re(), q = j({
        id: `writing-block-download-actions`,
        icons: {
            download: {
                normal: te,
                small: k
            }
        }
    }), J = q.Download
}));

function X(e) {
    if (!e.includes(`contentReference`)) return e;
    let t = S().use(D).use(x, {
        singleTilde: !1
    }).use(C).use(ie).use(W).processSync(e);
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
    G(), m(), T(), P(), M(), E(), O()
}));

function ae({
    conversation: e,
    messageId: t,
    index: n,
    libraryFileId: r,
    contentFileId: i,
    flushUnsavedEdits: o,
    resolveContentFileId: s,
    downloadLibraryMarkdown: d,
    markdownContent: f,
    markdownFileName: m,
    isStreaming: g,
    disabled: v = !1,
    renderAsSubmenu: y = !1,
    submenuItemClassName: x,
    submenuSize: S
}) {
    "use no forget";
    let C = h(),
        w = b(),
        [T, E] = (0, Q.useState)(!1),
        D = !a(l),
        O = a(() => e?.serverId$()),
        k = w.formatMessage({
            id: `writingblock.downloadFileError`,
            defaultMessage: `Download failed. Please try again.`
        });
    async function A(e) {
        let a = O == null && r != null;
        if (!(!a && (O == null || t == null || n == null))) {
            E(!0);
            try {
                await o?.();
                let c = r != null && s != null ? await s() : i;
                if (a && c == null) throw Error(`Library writing block content is unavailable.`);
                let l = a ? {
                        library_file_id: r,
                        content_file_id: c,
                        export_type: e
                    } : {
                        conversation_id: O?.toString(),
                        message_id: t,
                        index: n,
                        export_type: e
                    },
                    u = await ee.safePost(`/export_doc/writing_block/file`, {
                        requestBody: l
                    }),
                    d = document.createElement(`a`);
                d.href = u.download_url, d.rel = `noopener`, document.body.appendChild(d), d.click(), d.remove()
            } catch (t) {
                p.addError(t, {
                    tags: [`type:writing_block_download_button`, `export_type:${e}`]
                }), C.danger(k)
            } finally {
                E(!1)
            }
        }
    }

    function j() {
        if (d != null) {
            d();
            return
        }
        if (f == null) return;
        let e = (m ?? `writing-block`).replaceAll(`/`, `-`).replaceAll(`\\`, `-`).trim(),
            t = /\.md$/i.test(e) ? e : `${e||`writing-block`}.md`;
        L(new Blob([X(f)], {
            type: `text/markdown;charset=utf-8`
        }), t)
    }
    let M = v || T || r == null && O == null || !!g,
        N = (0, $.jsxs)($.Fragment, {
            children: [d != null || f != null ? (0, $.jsx)(z.Item, {
                disabled: y && M,
                onSelect: e => {
                    y && e.preventDefault(), j()
                },
                icon: (0, $.jsx)(I, {
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
            }) : null, (0, $.jsx)(z.Item, {
                disabled: y && M,
                onSelect: e => {
                    y && e.preventDefault(), A(`pdf`)
                },
                icon: (0, $.jsx)(I, {
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
            }), (0, $.jsx)(z.Item, {
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
    return y ? (0, $.jsxs)(z.Sub, {
        children: [(0, $.jsx)(z.SubMenuTrigger, {
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
        }), (0, $.jsx)(z.Portal, {
            children: (0, $.jsx)(z.SubContent, {
                align: `end`,
                children: N
            })
        })]
    }) : (0, $.jsxs)(z.Root, {
        children: [(0, $.jsx)(c, {
            sideOffset: 0,
            label: (0, $.jsx)(_, {
                id: `WritingBlockDownloadButton.downloadTooltip`,
                defaultMessage: `Download`
            }),
            children: (0, $.jsx)(z.BasicTrigger, {
                asChild: !0,
                children: (0, $.jsx)(`button`, {
                    className: u(`text-token-text-primary hover:bg-token-bg-tertiary flex size-9 items-center justify-center rounded-full p-1.5 transition-colors select-none disabled:opacity-40 disabled:hover:bg-transparent`),
                    disabled: M,
                    children: D ? T ? (0, $.jsx)(U, {
                        size: 16
                    }) : (0, $.jsx)(J, {
                        className: `block`
                    }) : (0, $.jsx)(`div`, {
                        className: u(`flex items-center gap-1`, `text-sm font-medium`, `font-normal`),
                        children: T ? (0, $.jsx)(U, {
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
    H(), w(), Y(), B(), s(), N(), r(), o(), i(), A(), d(), n(), Z(), K(), f(), Q = t(y()), v(), $ = g()
}));
export {
    J as a, X as i, oe as n, Y as o, Z as r, ae as t
};
//# sourceMappingURL=429593da-lkhaiyd8ywp0jd5y.js.map