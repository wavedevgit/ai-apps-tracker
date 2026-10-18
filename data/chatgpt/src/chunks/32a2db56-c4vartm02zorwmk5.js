import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as t,
    kJ as n,
    xJ as r
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ct as i,
    Gct as a,
    Hct as o,
    Jct as s,
    Qct as c,
    Vct as l,
    Xct as u,
    Yct as d,
    Zct as f,
    aEn as p,
    elt as m,
    iEn as h
} from "./conversation-small-fym1zmu9zimymmm1.js";

function g({
    conversation: e,
    isSharedConversation: t
}) {
    return m({
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
    fileName: t,
    isSharedConversation: i,
    messageId: a,
    mimeType: s,
    openSource: c
}) {
    if (!g({
            conversation: e,
            isSharedConversation: i
        })) return;
    let l = r.getBranch(n(e.id));
    f(`codex_file_opened`, o({
        threadId: e.serverId$() ?? e.id,
        messages: l.map(e => e.message),
        messageId: a,
        fileName: t,
        ...s == null ? {} : {
            mimeType: s
        },
        openSource: c
    }))
}

function y({
    conversation: e,
    fileId: t,
    fileName: i,
    isSharedConversation: a,
    libraryFileId: o,
    messageId: s,
    mimeType: c
}) {
    if (!g({
            conversation: e,
            isSharedConversation: a
        })) return;
    let u = d({
        messages: r.getBranch(n(e.id)).map(e => e.message),
        targetMessageId: s,
        threadId: e.serverId$() ?? e.id
    });
    u != null && f(`codex_file_library_used`, l({
        action: h.CODEX_FILE_USAGE_ACTION_OPENED,
        context: u,
        file: {
            id: t,
            identity: `library:${o}`,
            libraryFileId: o,
            mimeType: c,
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
    route: o
}) {
    if (!g({
            conversation: t,
            isSharedConversation: r
        })) return;
    let s = S({
        artifactRole: e,
        fileName: n,
        route: o
    });
    return f(`codex_workspace_file_preview_attempted`, a({
        fileName: n,
        mimeType: i
    })), s
}

function x({
    conversation: e,
    isSharedConversation: t,
    pageCount: n
}) {
    !Number.isSafeInteger(n) || n <= 0 || !g({
        conversation: e,
        isSharedConversation: t
    }) || f(`codex_pdf_preview_viewed`, {
        pageCount: n
    })
}

function S({
    artifactRole: e,
    fileName: t,
    route: n
}) {
    let r = s(t),
        i = performance.now(),
        a = new Set,
        o = !1,
        l = !1,
        u = ({
            outcome: t,
            phase: s,
            terminal: l
        }) => {
            o || a.has(s) || (a.add(s), c({
                artifactKind: r,
                artifactRole: e,
                durationMs: Math.max(0, performance.now() - i),
                outcome: t,
                phase: s,
                route: n
            }), l && (o = !0))
        };
    return {
        onDataReady: e => {
            u({
                outcome: `success`,
                phase: `data_ready`,
                terminal: !e
            }), !o && e && (l = !0)
        },
        onLoadError: () => {
            u({
                outcome: `error`,
                phase: `load`,
                terminal: !0
            })
        },
        onPdfRendererReady: e => {
            !Number.isSafeInteger(e) || e <= 0 || u({
                outcome: `success`,
                phase: `renderer_ready`,
                terminal: !0
            })
        },
        onPdfRendererError: () => {
            u({
                outcome: `error`,
                phase: `renderer_ready`,
                terminal: !0
            })
        },
        onSuperseded: () => {
            u({
                outcome: `superseded`,
                phase: l ? `renderer_ready` : `load`,
                terminal: !0
            })
        }
    }
}
var C = e((() => {
    u(), i(), t(), p()
}));
export {
    x as i, _ as n, v as r, C as t
};
//# sourceMappingURL=32a2db56-c4vartm02zorwmk5.js.map