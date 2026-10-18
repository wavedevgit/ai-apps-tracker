import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Btt as t,
    HL as n,
    Htt as r
} from "./4813494d-cb22y2w19zwyshmt.js";

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
//# sourceMappingURL=a91a940c-jjjzr51gn72fn0lf.js.map