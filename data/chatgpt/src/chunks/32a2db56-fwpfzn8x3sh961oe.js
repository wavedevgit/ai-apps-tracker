import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as t,
    GJ as n,
    eY as r
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    $ct as i,
    Hct as a,
    Kct as o,
    Qct as s,
    Uct as c,
    XEn as l,
    Xct as u,
    Yct as d,
    ZEn as f,
    Zct as p,
    elt as m,
    tlt as h
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function g({
    conversation: e,
    isSharedConversation: t
}) {
    return h({
        conversation: e,
        isInSharedPost: t
    })
}

function _(e) {
    if (e.action === `preview`) return e.isOutputArtifact && v({
        conversation: e.conversation,
        fileName: e.fileName,
        isSharedConversation: e.isSharedConversation,
        messageId: e.messageId,
        mimeType: e.mimeType,
        openSource: e.openSource
    }), e.libraryFileId != null && y({
        conversation: e.conversation,
        fileId: e.fileId,
        fileName: e.fileName,
        isSharedConversation: e.isSharedConversation,
        libraryFileId: e.libraryFileId,
        messageId: e.messageId,
        mimeType: e.mimeType
    }), b({
        artifactRole: e.isOutputArtifact ? `output` : `input`,
        conversation: e.conversation,
        fileName: e.fileName,
        isSharedConversation: e.isSharedConversation,
        mimeType: e.mimeType,
        route: e.openSource
    })
}

function v({
    conversation: e,
    fileName: r,
    isSharedConversation: i,
    messageId: a,
    mimeType: o,
    openSource: l
}) {
    if (!g({
            conversation: e,
            isSharedConversation: i
        })) return;
    let u = n.getBranch(t(e.id));
    s(`codex_file_opened`, c({
        threadId: e.serverId$() ?? e.id,
        messages: u.map(e => e.message),
        messageId: a,
        fileName: r,
        ...o == null ? {} : {
            mimeType: o
        },
        openSource: l
    }))
}

function y({
    conversation: e,
    fileId: r,
    fileName: i,
    isSharedConversation: o,
    libraryFileId: c,
    messageId: d,
    mimeType: f
}) {
    if (!g({
            conversation: e,
            isSharedConversation: o
        })) return;
    let p = u({
        messages: n.getBranch(t(e.id)).map(e => e.message),
        targetMessageId: d,
        threadId: e.serverId$() ?? e.id
    });
    p != null && s(`codex_file_library_used`, a({
        action: l.CODEX_FILE_USAGE_ACTION_OPENED,
        context: p,
        file: {
            id: r,
            identity: `library:${c}`,
            libraryFileId: c,
            mimeType: f,
            name: i
        }
    }))
}

function b({
    artifactRole: e,
    conversation: t,
    fileName: n,
    isSharedConversation: r,
    mimeType: i,
    route: a
}) {
    if (!g({
            conversation: t,
            isSharedConversation: r
        })) return;
    let c = S({
        artifactRole: e,
        fileName: n,
        route: a
    });
    return s(`codex_workspace_file_preview_attempted`, o({
        fileName: n,
        mimeType: i
    })), c
}

function x({
    conversation: e,
    isSharedConversation: t,
    pageCount: n
}) {
    !Number.isSafeInteger(n) || n <= 0 || !g({
        conversation: e,
        isSharedConversation: t
    }) || s(`codex_pdf_preview_viewed`, {
        pageCount: n
    })
}

function S({
    artifactRole: e,
    fileName: t,
    route: n
}) {
    let r = d(t),
        a = performance.now(),
        o = new Set,
        s = !1,
        c = !1,
        l = ({
            outcome: t,
            phase: c,
            terminal: l
        }) => {
            s || o.has(c) || (o.add(c), i({
                artifactKind: r,
                artifactRole: e,
                durationMs: Math.max(0, performance.now() - a),
                outcome: t,
                phase: c,
                route: n
            }), l && (s = !0))
        };
    return {
        onDataReady: e => {
            l({
                outcome: `success`,
                phase: `data_ready`,
                terminal: !e
            }), !s && e && (c = !0)
        },
        onLoadError: () => {
            l({
                outcome: `error`,
                phase: `load`,
                terminal: !0
            })
        },
        onPdfRendererReady: e => {
            !Number.isSafeInteger(e) || e <= 0 || l({
                outcome: `success`,
                phase: `renderer_ready`,
                terminal: !0
            })
        },
        onPdfRendererError: () => {
            l({
                outcome: `error`,
                phase: `renderer_ready`,
                terminal: !0
            })
        },
        onSuperseded: () => {
            l({
                outcome: `superseded`,
                phase: c ? `renderer_ready` : `load`,
                terminal: !0
            })
        }
    }
}
var C = e((() => {
    p(), m(), r(), f()
}));
export {
    x as i, _ as n, v as r, C as t
};
//# sourceMappingURL=32a2db56-fwpfzn8x3sh961oe.js.map