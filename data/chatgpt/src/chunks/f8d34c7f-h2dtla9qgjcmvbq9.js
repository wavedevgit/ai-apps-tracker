import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Irt as t,
    Knt as n,
    Lrt as r,
    Rrt as i,
    Wnt as a
} from "./4813494d-mdvd4786a87166cc.js";

function o(e, {
    language: t,
    isCodeEdited: n,
    analyticsContext: r
}) {
    if (r == null) return;
    let {
        conversationId: i,
        messageId: o
    } = r;
    a.logStructuredEvent(`ChatgptCodeBlockPreviewRunFailed`, {
        conversationId: i,
        messageId: o,
        codeBlockLanguage: t,
        operation: e,
        isEdited: n
    }), e === `preview` && r.isSandboxFilePreview && a.logStructuredEvent(`ChatgptCodeBlockPreviewDiagnostic`, {
        category: `file_preview_legacy_failure`,
        previewHost: `classic`
    })
}

function s(e, t, {
    outcome: n,
    language: a,
    isCodeEdited: s,
    analyticsContext: c
}) {
    r.count(i.CODE_BLOCKS, t, {
        outcome: n,
        language: a,
        is_edited: String(s)
    }), n === `failure` && o(e, {
        language: a,
        isCodeEdited: s,
        analyticsContext: c
    })
}

function c(e) {
    s(`preview`, `chatgpt_code_block.preview.outcome`, e)
}

function l(e) {
    s(`run`, `chatgpt_code_block.run.outcome`, e)
}
var u = e((() => {
    n(), t()
}));
export {
    c as n, l as r, u as t
};
//# sourceMappingURL=f8d34c7f-h2dtla9qgjcmvbq9.js.map