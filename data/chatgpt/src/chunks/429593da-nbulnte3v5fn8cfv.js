import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    I7 as r,
    K5 as i,
    LU as a,
    M7 as o,
    Nat as s,
    Qy as c,
    Zy as l,
    dq as u,
    j5 as d,
    jat as f,
    q5 as p,
    rq as m,
    yZ as h,
    zU as g
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as _,
    Nn as v,
    Rn as y,
    Vn as b,
    zn as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Tt as S,
    AGn as C,
    MUn as w,
    OGn as T,
    QTt as E,
    URn as D,
    VRn as O,
    Yht as k,
    aGn as A,
    bGn as j,
    cGn as M,
    cgn as N,
    cwn as P,
    dgn as F,
    fgn as I,
    jUn as L,
    lgn as R,
    lwn as ee,
    qht as te,
    sgn as ne,
    ugn as re,
    vGn as z
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Rp as B,
    zp as V
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    n as H,
    t as U
} from "./af004db9-ncue41w0x271s8a6.js";
import {
    n as W,
    t as G
} from "./fc5e7148-ngk3m8alrbrnccih.js";
import {
    n as K
} from "./44246d2c-map56gyrqbudlagr.js";
var q, J, Y = e((() => {
    F(), re(), N(), q = I({
        id: `writing-block-download-actions`,
        icons: {
            download: {
                normal: ne,
                small: R
            }
        }
    }), J = q.Download
}));

function X(e) {
    if (!e.includes(`contentReference`)) return e;
    let t = M().use(C).use(D, {
        singleTilde: !1
    }).use(k).use(ie).use(W).processSync(e);
    return String(t).trim()
}

function ie() {
    return e => {
        j(e, `textDirective`, e => {
            e.name !== `contentReference` && (e.type = `text`, e.value = `:` + e.name)
        })
    }
}
var Z = e((() => {
    G(), h(), te(), O(), T(), A(), z()
}));

function ae({
    conversation: e,
    messageId: t,
    index: n,
    libraryFileId: r,
    contentFileId: a,
    flushUnsavedEdits: s,
    resolveContentFileId: c,
    downloadLibraryMarkdown: p,
    markdownContent: m,
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
        [D, O] = (0, Q.useState)(!1),
        k = !d(u),
        A = d(() => e?.serverId$()),
        j = T.formatMessage({
            id: `writingblock.downloadFileError`,
            defaultMessage: `Download failed. Please try again.`
        });
    async function M(e) {
        let i = A == null && r != null;
        if (!(!i && (A == null || t == null || n == null))) {
            O(!0);
            try {
                await s?.();
                let l = r != null && c != null ? await c() : a;
                if (i && l == null) throw Error(`Library writing block content is unavailable.`);
                let u = i ? {
                        library_file_id: r,
                        content_file_id: l,
                        export_type: e
                    } : {
                        conversation_id: A?.toString(),
                        message_id: t,
                        index: n,
                        export_type: e
                    },
                    d = await o.safePost(`/export_doc/writing_block/file`, {
                        requestBody: u
                    }),
                    f = document.createElement(`a`);
                f.href = d.download_url, f.rel = `noopener`, document.body.appendChild(f), f.click(), f.remove()
            } catch (t) {
                f.addError(t, {
                    tags: [`type:writing_block_download_button`, `export_type:${e}`]
                }), w.danger(j)
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
        P(new Blob([X(m)], {
            type: `text/markdown;charset=utf-8`
        }), t)
    }
    let F = y || D || r == null && A == null || !!_,
        I = (0, $.jsxs)($.Fragment, {
            children: [p != null || m != null ? (0, $.jsx)(L.Item, {
                disabled: b && F,
                onSelect: e => {
                    b && e.preventDefault(), N()
                },
                icon: (0, $.jsx)(E, {
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
            }) : null, (0, $.jsx)(L.Item, {
                disabled: b && F,
                onSelect: e => {
                    b && e.preventDefault(), M(`pdf`)
                },
                icon: (0, $.jsx)(E, {
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
            }), (0, $.jsx)(L.Item, {
                disabled: b && F,
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
    return b ? (0, $.jsxs)(L.Sub, {
        children: [(0, $.jsx)(L.SubMenuTrigger, {
            icon: D ? (0, $.jsx)(U, {
                size: 20
            }) : J,
            className: S,
            size: C,
            label: T.formatMessage({
                id: `WritingBlockDownloadButton.menuTitle`,
                defaultMessage: `Download`
            }),
            disabled: F
        }), (0, $.jsx)(L.Portal, {
            children: (0, $.jsx)(L.SubContent, {
                align: `end`,
                children: I
            })
        })]
    }) : (0, $.jsxs)(L.Root, {
        children: [(0, $.jsx)(l, {
            sideOffset: 0,
            label: (0, $.jsx)(v, {
                id: `WritingBlockDownloadButton.downloadTooltip`,
                defaultMessage: `Download`
            }),
            children: (0, $.jsx)(L.BasicTrigger, {
                asChild: !0,
                children: (0, $.jsx)(`button`, {
                    className: i(`text-token-text-primary hover:bg-token-bg-tertiary flex size-9 items-center justify-center rounded-full p-1.5 transition-colors select-none disabled:opacity-40 disabled:hover:bg-transparent`),
                    disabled: F,
                    children: k ? D ? (0, $.jsx)(U, {
                        size: 16
                    }) : (0, $.jsx)(J, {
                        className: `block`
                    }) : (0, $.jsx)(`div`, {
                        className: i(`flex items-center gap-1`, `text-sm font-medium`, `font-normal`),
                        children: D ? (0, $.jsx)(U, {
                            size: 20
                        }) : (0, $.jsx)(J, {
                            className: `block`
                        })
                    })
                })
            })
        }), (0, $.jsx)(L.Portal, {
            children: (0, $.jsxs)(L.Content, {
                align: `end`,
                children: [(0, $.jsx)(L.Label, {
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
    H(), w(), Y(), B(), c(), S(), n(), a(), s(), ee(), m(), r(), Z(), K(), p(), Q = t(b()), y(), $ = _()
}));
export {
    J as a, X as i, oe as n, Y as o, Z as r, ae as t
};
//# sourceMappingURL=429593da-nbulnte3v5fn8cfv.js.map