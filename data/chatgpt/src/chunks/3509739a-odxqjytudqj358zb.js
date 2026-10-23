import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Irt as t,
    Knt as n,
    Lrt as r,
    Nat as i,
    Rrt as a,
    Wnt as o,
    jat as s
} from "./4813494d-mdvd4786a87166cc.js";
var c, l = e((() => {
    n(), i(), t(), c = e => {
        switch (e.type) {
            case `hist`:
                return r.hist(a.WEB_SANDBOX, e.label, e.tags, e.value);
            case `count`: {
                let {
                    previewDiagnostics: t
                } = e;
                return t != null && [`html.preview_started`, `html.preview_ready`, `html.preview_startup_error`, `html.preview_runtime_error`, `html.preview_cdnjs_blocked`, `html.preview_script_blocked`].includes(e.label) && o.logStructuredEvent(`ChatgptCodeBlockPreviewDiagnostic`, {
                    category: e.label,
                    previewHost: `classic`,
                    startMode: t.startMode,
                    previewLanguage: t.previewLanguage
                }), r.count(a.WEB_SANDBOX, e.label, e.tags, e.count)
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
//# sourceMappingURL=3509739a-odxqjytudqj358zb.js.map