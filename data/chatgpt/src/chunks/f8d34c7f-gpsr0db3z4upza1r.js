import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Art as t,
    Lnt as n,
    jrt as r,
    krt as i,
    znt as a
} from "./4813494d-d7xm9wsvhdfbag9a.js";

function o(e, {
    language: t,
    isCodeEdited: r,
    analyticsContext: i
}) {
    if (i == null) return;
    let {
        conversationId: a,
        messageId: o
    } = i;
    n.logStructuredEvent(`ChatgptCodeBlockPreviewRunFailed`, {
        conversationId: a,
        messageId: o,
        codeBlockLanguage: t,
        operation: e,
        isEdited: r
    }), e === `preview` && i.isSandboxFilePreview && n.logStructuredEvent(`ChatgptCodeBlockPreviewDiagnostic`, {
        category: `file_preview_legacy_failure`,
        previewHost: `classic`
    })
}

function s(e, n, {
    outcome: i,
    language: a,
    isCodeEdited: s,
    analyticsContext: c
}) {
    t.count(r.CODE_BLOCKS, n, {
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
    a(), i()
}));
export {
    c as n, l as r, u as t
};
//# sourceMappingURL=f8d34c7f-gpsr0db3z4upza1r.js.map