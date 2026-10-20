import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    aat as t,
    bnt as n,
    drt as r,
    frt as i,
    sat as a,
    urt as o,
    vnt as s
} from "./4813494d-bo7e0c29ngt4zgx0.js";
var c, l = e((() => {
    n(), a(), o(), c = e => {
        switch (e.type) {
            case `hist`:
                return r.hist(i.WEB_SANDBOX, e.label, e.tags, e.value);
            case `count`: {
                let {
                    previewDiagnostics: t
                } = e;
                return t != null && [`html.preview_started`, `html.preview_ready`, `html.preview_startup_error`, `html.preview_runtime_error`, `html.preview_cdnjs_blocked`, `html.preview_script_blocked`].includes(e.label) && s.logStructuredEvent(`ChatgptCodeBlockPreviewDiagnostic`, {
                    category: e.label,
                    previewHost: `classic`,
                    startMode: t.startMode,
                    previewLanguage: t.previewLanguage
                }), r.count(i.WEB_SANDBOX, e.label, e.tags, e.count)
            }
            case `error`:
                return t.addError(e.message);
            default:
                break
        }
    }
}));
export {
    l as n, c as t
};
//# sourceMappingURL=3509739a-h5innwsguyrtzkmg.js.map