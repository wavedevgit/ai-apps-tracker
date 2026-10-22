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
    Y7 as c,
    Zy as l,
    dq as u,
    l7 as d,
    rq as f,
    u7 as p,
    wat as m,
    yZ as h,
    zU as g
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as _,
    Nn as v,
    Rn as y,
    Vn as b,
    zn as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    ARn as S,
    KWn as C,
    ORn as w,
    YWn as T,
    Yht as E,
    agn as D,
    awn as O,
    cgn as k,
    eEt as A,
    fGn as j,
    iGn as M,
    ign as N,
    iwn as P,
    mGn as F,
    nGn as I,
    ogn as ee,
    qht as te,
    rgn as ne,
    sgn as re,
    tEt as L,
    vUn as R,
    yUn as z
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Rp as B,
    zp as V
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    n as H,
    t as U
} from "./af004db9-lua5wlg6u0i1v7xx.js";
import {
    n as W,
    t as G
} from "./fc5e7148-dmws1ihmy0jqoelw.js";
import {
    n as K
} from "./44246d2c-bved29h4nmn4usec.js";
var q, J, Y = e((() => {
    re(), ee(), N(), q = k({
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
    let t = T().use(F).use(S, {
        singleTilde: !1
    }).use(E).use(ie).use(W).processSync(e);
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
    G(), h(), te(), w(), j(), C(), I()
}));

function ae({
    conversation: e,
    messageId: t,
    index: n,
    libraryFileId: r,
    contentFileId: i,
    flushUnsavedEdits: o,
    resolveContentFileId: s,
    downloadLibraryMarkdown: f,
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
        O = !a(u),
        k = a(() => e?.serverId$()),
        j = T.formatMessage({
            id: `writingblock.downloadFileError`,
            defaultMessage: `Download failed. Please try again.`
        });
    async function M(e) {
        let a = k == null && r != null;
        if (!(!a && (k == null || t == null || n == null))) {
            D(!0);
            try {
                await o?.();
                let l = r != null && s != null ? await s() : i;
                if (a && l == null) throw Error(`Library writing block content is unavailable.`);
                let u = a ? {
                        library_file_id: r,
                        content_file_id: l,
                        export_type: e
                    } : {
                        conversation_id: k?.toString(),
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
                m.addError(t, {
                    tags: [`type:writing_block_download_button`, `export_type:${e}`]
                }), w.danger(j)
            } finally {
                D(!1)
            }
        }
    }

    function N() {
        if (f != null) {
            f();
            return
        }
        if (p == null) return;
        let e = (h ?? `writing-block`).replaceAll(`/`, `-`).replaceAll(`\\`, `-`).trim(),
            t = /\.md$/i.test(e) ? e : `${e||`writing-block`}.md`;
        P(new Blob([X(p)], {
            type: `text/markdown;charset=utf-8`
        }), t)
    }
    let F = y || E || r == null && k == null || !!_,
        I = (0, $.jsxs)($.Fragment, {
            children: [f != null || p != null ? (0, $.jsx)(R.Item, {
                disabled: b && F,
                onSelect: e => {
                    b && e.preventDefault(), N()
                },
                icon: (0, $.jsx)(A, {
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
                disabled: b && F,
                onSelect: e => {
                    b && e.preventDefault(), M(`pdf`)
                },
                icon: (0, $.jsx)(A, {
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
            disabled: F
        }), (0, $.jsx)(R.Portal, {
            children: (0, $.jsx)(R.SubContent, {
                align: `end`,
                children: I
            })
        })]
    }) : (0, $.jsxs)(R.Root, {
        children: [(0, $.jsx)(l, {
            sideOffset: 0,
            label: (0, $.jsx)(v, {
                id: `WritingBlockDownloadButton.downloadTooltip`,
                defaultMessage: `Download`
            }),
            children: (0, $.jsx)(R.BasicTrigger, {
                asChild: !0,
                children: (0, $.jsx)(`button`, {
                    className: d(`text-token-text-primary hover:bg-token-bg-tertiary flex size-9 items-center justify-center rounded-full p-1.5 transition-colors select-none disabled:opacity-40 disabled:hover:bg-transparent`),
                    disabled: F,
                    children: O ? E ? (0, $.jsx)(U, {
                        size: 16
                    }) : (0, $.jsx)(J, {
                        className: `block`
                    }) : (0, $.jsx)(`div`, {
                        className: d(`flex items-center gap-1`, `text-sm font-medium`, `font-normal`),
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
                }), I]
            })
        })]
    })
}
var Q, $, oe = e((() => {
    H(), z(), Y(), B(), s(), L(), r(), o(), i(), O(), f(), n(), Z(), K(), p(), Q = t(b()), y(), $ = _()
}));
export {
    J as a, X as i, oe as n, Y as o, Z as r, ae as t
};
//# sourceMappingURL=429593da-c6djvgmgx648hpdb.js.map