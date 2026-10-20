import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _nt as t,
    hnt as n,
    sR as r
} from "./4813494d-qsuygr73qjc6rh65.js";

function i({
    conversationId: e,
    libraryFileId: t,
    messageId: r,
    writingBlockId: i,
    impressionType: a
}) {
    n.logStructuredEvent(`ChatgptWritingBlockResumeExportImpression`, {
        conversationId: e ?? void 0,
        ...t == null ? {} : {
            libraryFileId: t
        },
        messageId: r,
        writingBlockId: i,
        impressionType: a
    })
}

function a({
    conversationId: e,
    libraryFileId: t,
    messageId: r,
    writingBlockId: i,
    clickType: a
}) {
    n.logStructuredEvent(`ChatgptWritingBlockResumeExportClick`, {
        conversationId: e ?? void 0,
        ...t == null ? {} : {
            libraryFileId: t
        },
        messageId: r,
        writingBlockId: i,
        clickType: a
    })
}
var o = e((() => {
    r(), t()
}));
export {
    a as n, i as r, o as t
};
//# sourceMappingURL=a91a940c-bhslc6i5tdcfd41k.js.map