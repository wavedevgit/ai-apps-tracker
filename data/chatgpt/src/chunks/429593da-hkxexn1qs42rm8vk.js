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
    zU as ee
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as g,
    Nn as _,
    Rn as v,
    Vn as y,
    zn as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Hn as x,
    AWn as S,
    BCn as C,
    Bhn as w,
    DWn as T,
    Hhn as E,
    LWn as D,
    Rhn as O,
    Uhn as k,
    Vhn as A,
    YWn as j,
    Yht as M,
    Zht as N,
    dRn as P,
    eEt as F,
    eUn as I,
    lRn as te,
    qWn as ne,
    tEt as re,
    zCn as L,
    zWn as R,
    zhn as z
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Bp as B,
    Vp as V
} from "./30901919-r9pahacmzqudnt4f.js";
import {
    n as H,
    t as U
} from "./af004db9-fzg2csyped3pyyuu.js";
import {
    n as W,
    t as G
} from "./fc5e7148-lqe2ufr19cak4t53.js";
import {
    n as K
} from "./44246d2c-i1s1f9tdl8rnu4sf.js";
var q, J, Y = e((() => {
    E(), A(), z(), q = k({
        id: `writing-block-download-actions`,
        icons: {
            download: {
                normal: O,
                small: w
            }
        }
    }), J = q.Download
}));

function X(e) {
    if (!e.includes(`contentReference`)) return e;
    let t = S().use(j).use(P, {
        singleTilde: !1
    }).use(N).use(ie).use(W).processSync(e);
    return String(t).trim()
}

function ie() {
    return e => {
        R(e, `textDirective`, e => {
            e.name !== `contentReference` && (e.type = `text`, e.value = `:` + e.name)
        })
    }
}
var Z = e((() => {
    G(), h(), M(), te(), ne(), T(), D()
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
    isStreaming: g,
    disabled: v = !1,
    renderAsSubmenu: y = !1,
    submenuItemClassName: S,
    submenuSize: C
}) {
    "use no forget";
    let w = ee(),
        T = b(),
        [E, D] = (0, Q.useState)(!1),
        O = !f(l),
        k = f(() => e?.serverId$()),
        A = T.formatMessage({
            id: `writingblock.downloadFileError`,
            defaultMessage: `Download failed. Please try again.`
        });
    async function j(e) {
        let s = k == null && i != null;
        if (!(!s && (k == null || t == null || n == null))) {
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
                        conversation_id: k?.toString(),
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
                }), w.danger(A)
            } finally {
                D(!1)
            }
        }
    }

    function M() {
        if (d != null) {
            d();
            return
        }
        if (p == null) return;
        let e = (h ?? `writing-block`).replaceAll(`/`, `-`).replaceAll(`\\`, `-`).trim(),
            t = /\.md$/i.test(e) ? e : `${e||`writing-block`}.md`;
        L(new Blob([X(p)], {
            type: `text/markdown;charset=utf-8`
        }), t)
    }
    let N = v || E || i == null && k == null || !!g,
        P = (0, $.jsxs)($.Fragment, {
            children: [d != null || p != null ? (0, $.jsx)(x.Item, {
                disabled: y && N,
                onSelect: e => {
                    y && e.preventDefault(), M()
                },
                icon: (0, $.jsx)(F, {
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
            }) : null, (0, $.jsx)(x.Item, {
                disabled: y && N,
                onSelect: e => {
                    y && e.preventDefault(), j(`pdf`)
                },
                icon: (0, $.jsx)(F, {
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
            }), (0, $.jsx)(x.Item, {
                disabled: y && N,
                onSelect: e => {
                    y && e.preventDefault(), j(`docx`)
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
    return y ? (0, $.jsxs)(x.Sub, {
        children: [(0, $.jsx)(x.SubMenuTrigger, {
            icon: E ? (0, $.jsx)(U, {
                size: 20
            }) : J,
            className: S,
            size: C,
            label: T.formatMessage({
                id: `WritingBlockDownloadButton.menuTitle`,
                defaultMessage: `Download`
            }),
            disabled: N
        }), (0, $.jsx)(x.Portal, {
            children: (0, $.jsx)(x.SubContent, {
                align: `end`,
                children: P
            })
        })]
    }) : (0, $.jsxs)(x.Root, {
        children: [(0, $.jsx)(s, {
            sideOffset: 0,
            label: (0, $.jsx)(_, {
                id: `WritingBlockDownloadButton.downloadTooltip`,
                defaultMessage: `Download`
            }),
            children: (0, $.jsx)(x.BasicTrigger, {
                asChild: !0,
                children: (0, $.jsx)(`button`, {
                    className: c(`text-token-text-primary hover:bg-token-bg-tertiary flex size-9 items-center justify-center rounded-full p-1.5 transition-colors select-none disabled:opacity-40 disabled:hover:bg-transparent`),
                    disabled: N,
                    children: O ? E ? (0, $.jsx)(U, {
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
        }), (0, $.jsx)(x.Portal, {
            children: (0, $.jsxs)(x.Content, {
                align: `end`,
                children: [(0, $.jsx)(x.Label, {
                    children: (0, $.jsx)(_, {
                        id: `WritingBlockDownloadButton.menuTitle`,
                        defaultMessage: `Download`
                    })
                }), P]
            })
        })]
    })
}
var Q, $, oe = e((() => {
    H(), I(), Y(), B(), o(), re(), u(), i(), n(), C(), p(), a(), Z(), K(), d(), Q = t(y()), v(), $ = g()
}));
export {
    J as a, X as i, oe as n, Y as o, Z as r, ae as t
};
//# sourceMappingURL=429593da-hkxexn1qs42rm8vk.js.map