import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    bnt as t,
    drt as n,
    frt as r,
    urt as i,
    vnt as a
} from "./4813494d-bo7e0c29ngt4zgx0.js";

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
    outcome: i,
    language: a,
    isCodeEdited: s,
    analyticsContext: c
}) {
    n.count(r.CODE_BLOCKS, t, {
        outcome: i,
        language: a,
        is_edited: String(s)
    }), i === `failure` && o(e, {
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
    t(), i()
}));
export {
    c as n, l as r, u as t
};
//# sourceMappingURL=f8d34c7f-mqpddi0yer6xzaux.js.map