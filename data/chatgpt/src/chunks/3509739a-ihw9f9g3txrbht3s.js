import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _nt as t,
    drt as n,
    iat as r,
    lrt as i,
    oat as a,
    urt as o,
    ynt as s
} from "./4813494d-dfpv67hlp00pbohr.js";
var c, l = e((() => {
    s(), a(), i(), c = e => {
        switch (e.type) {
            case `hist`:
                return o.hist(n.WEB_SANDBOX, e.label, e.tags, e.value);
            case `count`: {
                let {
                    previewDiagnostics: r
                } = e;
                return r != null && [`html.preview_started`, `html.preview_ready`, `html.preview_startup_error`, `html.preview_runtime_error`, `html.preview_cdnjs_blocked`, `html.preview_script_blocked`].includes(e.label) && t.logStructuredEvent(`ChatgptCodeBlockPreviewDiagnostic`, {
                    category: e.label,
                    previewHost: `classic`,
                    startMode: r.startMode,
                    previewLanguage: r.previewLanguage
                }), o.count(n.WEB_SANDBOX, e.label, e.tags, e.count)
            }
            case `error`:
                return r.addError(e.message);
            default:
                break
        }
    }
}));
export {
    l as n, c as t
};
//# sourceMappingURL=3509739a-ihw9f9g3txrbht3s.js.map