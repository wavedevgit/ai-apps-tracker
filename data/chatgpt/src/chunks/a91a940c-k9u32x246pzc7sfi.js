import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _nt as t,
    sR as n,
    ynt as r
} from "./4813494d-dfpv67hlp00pbohr.js";

function i({
    conversationId: e,
    libraryFileId: n,
    messageId: r,
    writingBlockId: i,
    impressionType: a
}) {
    t.logStructuredEvent(`ChatgptWritingBlockResumeExportImpression`, {
        conversationId: e ?? void 0,
        ...n == null ? {} : {
            libraryFileId: n
        },
        messageId: r,
        writingBlockId: i,
        impressionType: a
    })
}

function a({
    conversationId: e,
    libraryFileId: n,
    messageId: r,
    writingBlockId: i,
    clickType: a
}) {
    t.logStructuredEvent(`ChatgptWritingBlockResumeExportClick`, {
        conversationId: e ?? void 0,
        ...n == null ? {} : {
            libraryFileId: n
        },
        messageId: r,
        writingBlockId: i,
        clickType: a
    })
}
var o = e((() => {
    n(), r()
}));
export {
    a as n, i as r, o as t
};
//# sourceMappingURL=a91a940c-k9u32x246pzc7sfi.js.map