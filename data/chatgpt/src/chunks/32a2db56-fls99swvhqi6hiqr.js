import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as t,
    GJ as n,
    eY as r
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    $En as i,
    $ct as a,
    Hct as o,
    Kct as s,
    Qct as c,
    Uct as l,
    Xct as u,
    Yct as d,
    Zct as f,
    eDn as p,
    elt as m,
    tlt as h
} from "./conversation-small-fh0oqifngkf5rvl1.js";

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
    openSource: s
}) {
    if (!g({
            conversation: e,
            isSharedConversation: i
        })) return;
    let u = n.getBranch(t(e.id));
    c(`codex_file_opened`, l({
        threadId: e.serverId$() ?? e.id,
        messages: u.map(e => e.message),
        messageId: a,
        fileName: r,
        ...o == null ? {} : {
            mimeType: o
        },
        openSource: s
    }))
}

function y({
    conversation: e,
    fileId: r,
    fileName: a,
    isSharedConversation: s,
    libraryFileId: l,
    messageId: d,
    mimeType: f
}) {
    if (!g({
            conversation: e,
            isSharedConversation: s
        })) return;
    let p = u({
        messages: n.getBranch(t(e.id)).map(e => e.message),
        targetMessageId: d,
        threadId: e.serverId$() ?? e.id
    });
    p != null && c(`codex_file_library_used`, o({
        action: i.CODEX_FILE_USAGE_ACTION_OPENED,
        context: p,
        file: {
            id: r,
            identity: `library:${l}`,
            libraryFileId: l,
            mimeType: f,
            name: a
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
    let o = S({
        artifactRole: e,
        fileName: n,
        route: a
    });
    return c(`codex_workspace_file_preview_attempted`, s({
        fileName: n,
        mimeType: i
    })), o
}

function x({
    conversation: e,
    isSharedConversation: t,
    pageCount: n
}) {
    !Number.isSafeInteger(n) || n <= 0 || !g({
        conversation: e,
        isSharedConversation: t
    }) || c(`codex_pdf_preview_viewed`, {
        pageCount: n
    })
}

function S({
    artifactRole: e,
    fileName: t,
    route: n
}) {
    let r = d(t),
        i = performance.now(),
        o = new Set,
        s = !1,
        c = !1,
        l = ({
            outcome: t,
            phase: c,
            terminal: l
        }) => {
            s || o.has(c) || (o.add(c), a({
                artifactKind: r,
                artifactRole: e,
                durationMs: Math.max(0, performance.now() - i),
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
    f(), m(), r(), p()
}));
export {
    x as i, _ as n, v as r, C as t
};
//# sourceMappingURL=32a2db56-fls99swvhqi6hiqr.js.map