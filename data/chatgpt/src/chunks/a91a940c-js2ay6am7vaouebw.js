import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    bnt as t,
    cR as n,
    vnt as r
} from "./4813494d-bo7e0c29ngt4zgx0.js";

function i({
    conversationId: e,
    libraryFileId: t,
    messageId: n,
    writingBlockId: i,
    impressionType: a
}) {
    r.logStructuredEvent(`ChatgptWritingBlockResumeExportImpression`, {
        conversationId: e ?? void 0,
        ...t == null ? {} : {
            libraryFileId: t
        },
        messageId: n,
        writingBlockId: i,
        impressionType: a
    })
}

function a({
    conversationId: e,
    libraryFileId: t,
    messageId: n,
    writingBlockId: i,
    clickType: a
}) {
    r.logStructuredEvent(`ChatgptWritingBlockResumeExportClick`, {
        conversationId: e ?? void 0,
        ...t == null ? {} : {
            libraryFileId: t
        },
        messageId: n,
        writingBlockId: i,
        clickType: a
    })
}
var o = e((() => {
    n(), t()
}));
export {
    a as n, i as r, o as t
};
//# sourceMappingURL=a91a940c-js2ay6am7vaouebw.js.map