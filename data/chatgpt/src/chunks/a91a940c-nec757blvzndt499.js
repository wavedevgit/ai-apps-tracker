import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Knt as t,
    Wnt as n,
    pR as r
} from "./4813494d-mdvd4786a87166cc.js";

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
//# sourceMappingURL=a91a940c-nec757blvzndt499.js.map