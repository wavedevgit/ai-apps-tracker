import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Btt as t,
    Htt as n,
    Mnt as r,
    Nnt as i,
    Pnt as a
} from "./4813494d-cb22y2w19zwyshmt.js";

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
    outcome: n,
    language: r,
    isCodeEdited: s,
    analyticsContext: c
}) {
    i.count(a.CODE_BLOCKS, t, {
        outcome: n,
        language: r,
        is_edited: String(s)
    }), n === `failure` && o(e, {
        language: r,
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
    n(), r()
}));
export {
    c as n, l as r, u as t
};
//# sourceMappingURL=f8d34c7f-h0af0173qpvdoovr.js.map