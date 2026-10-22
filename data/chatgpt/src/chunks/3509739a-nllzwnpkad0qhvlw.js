import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cat as t,
    Drt as n,
    Ert as r,
    Int as i,
    Ort as a,
    Pnt as o,
    xat as s
} from "./4813494d-itnrgnth03y1sm9d.js";
var c, l = e((() => {
    i(), t(), r(), c = e => {
        switch (e.type) {
            case `hist`:
                return n.hist(a.WEB_SANDBOX, e.label, e.tags, e.value);
            case `count`: {
                let {
                    previewDiagnostics: t
                } = e;
                return t != null && [`html.preview_started`, `html.preview_ready`, `html.preview_startup_error`, `html.preview_runtime_error`, `html.preview_cdnjs_blocked`, `html.preview_script_blocked`].includes(e.label) && o.logStructuredEvent(`ChatgptCodeBlockPreviewDiagnostic`, {
                    category: e.label,
                    previewHost: `classic`,
                    startMode: t.startMode,
                    previewLanguage: t.previewLanguage
                }), n.count(a.WEB_SANDBOX, e.label, e.tags, e.count)
            }
            case `error`:
                return s.addError(e.message);
            default:
                break
        }
    }
}));
export {
    l as n, c as t
};
//# sourceMappingURL=3509739a-nllzwnpkad0qhvlw.js.map