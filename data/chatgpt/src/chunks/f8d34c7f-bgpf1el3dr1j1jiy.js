import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Snt as t,
    grt as n,
    hrt as r,
    mrt as i,
    wnt as a
} from "./4813494d-tap9fxyhk4ehe0bs.js";

function o(e, {
    language: n,
    isCodeEdited: r,
    analyticsContext: i
}) {
    if (i == null) return;
    let {
        conversationId: a,
        messageId: o
    } = i;
    t.logStructuredEvent(`ChatgptCodeBlockPreviewRunFailed`, {
        conversationId: a,
        messageId: o,
        codeBlockLanguage: n,
        operation: e,
        isEdited: r
    }), e === `preview` && i.isSandboxFilePreview && t.logStructuredEvent(`ChatgptCodeBlockPreviewDiagnostic`, {
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
    r.count(n.CODE_BLOCKS, t, {
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
//# sourceMappingURL=f8d34c7f-bgpf1el3dr1j1jiy.js.map