import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JJ as t,
    nY as n,
    rY as r
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Jct as i,
    Qct as a,
    Yct as o,
    _En as s,
    alt as c,
    ilt as l,
    nlt as u,
    olt as d,
    rlt as f,
    slt as p,
    tlt as m,
    vEn as h
} from "./conversation-small-ikg0dwuw782klweb.js";

function g({
    conversation: e,
    isSharedConversation: t
}) {
    return p({
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
    mimeType: s,
    openSource: c
}) {
    if (!g({
            conversation: e,
            isSharedConversation: i
        })) return;
    let u = t.getBranch(n(e.id));
    l(`codex_file_opened`, o({
        threadId: e.serverId$() ?? e.id,
        messages: u.map(e => e.message),
        messageId: a,
        fileName: r,
        ...s == null ? {} : {
            mimeType: s
        },
        openSource: c
    }))
}

function y({
    conversation: e,
    fileId: r,
    fileName: a,
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
        messages: t.getBranch(n(e.id)).map(e => e.message),
        targetMessageId: d,
        threadId: e.serverId$() ?? e.id
    });
    p != null && l(`codex_file_library_used`, i({
        action: s.CODEX_FILE_USAGE_ACTION_OPENED,
        context: p,
        file: {
            id: r,
            identity: `library:${c}`,
            libraryFileId: c,
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
    return l(`codex_workspace_file_preview_attempted`, a({
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
    }) || l(`codex_pdf_preview_viewed`, {
        pageCount: n
    })
}

function S({
    artifactRole: e,
    fileName: t,
    route: n
}) {
    let r = m(t),
        i = performance.now(),
        a = new Set,
        o = !1,
        s = !1,
        l = ({
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
            l({
                outcome: `success`,
                phase: `data_ready`,
                terminal: !e
            }), !o && e && (s = !0)
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
                phase: s ? `renderer_ready` : `load`,
                terminal: !0
            })
        }
    }
}
var C = e((() => {
    f(), d(), r(), h()
}));
export {
    x as i, _ as n, v as r, C as t
};
//# sourceMappingURL=32a2db56-m9t6tu6p5pj82dyc.js.map