import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Art as t,
    Cat as n,
    Int as r,
    Ort as i,
    Rnt as a,
    Tat as o,
    krt as s
} from "./4813494d-nxpmzchfjvwqts17.js";
var c, l = e((() => {
    a(), o(), i(), c = e => {
        switch (e.type) {
            case `hist`:
                return s.hist(t.WEB_SANDBOX, e.label, e.tags, e.value);
            case `count`: {
                let {
                    previewDiagnostics: n
                } = e;
                return n != null && [`html.preview_started`, `html.preview_ready`, `html.preview_startup_error`, `html.preview_runtime_error`, `html.preview_cdnjs_blocked`, `html.preview_script_blocked`].includes(e.label) && r.logStructuredEvent(`ChatgptCodeBlockPreviewDiagnostic`, {
                    category: e.label,
                    previewHost: `classic`,
                    startMode: n.startMode,
                    previewLanguage: n.previewLanguage
                }), s.count(t.WEB_SANDBOX, e.label, e.tags, e.count)
            }
            case `error`:
                return n.addError(e.message);
            default:
                break
        }
    }
}));
export {
    l as n, c as t
};
//# sourceMappingURL=3509739a-ehtys765uf1y3aba.js.map