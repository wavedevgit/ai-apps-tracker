import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Snt as t,
    dat as n,
    grt as r,
    hrt as i,
    lat as a,
    mrt as o,
    wnt as s
} from "./4813494d-tap9fxyhk4ehe0bs.js";
var c, l = e((() => {
    s(), n(), o(), c = e => {
        switch (e.type) {
            case `hist`:
                return i.hist(r.WEB_SANDBOX, e.label, e.tags, e.value);
            case `count`: {
                let {
                    previewDiagnostics: n
                } = e;
                return n != null && [`html.preview_started`, `html.preview_ready`, `html.preview_startup_error`, `html.preview_runtime_error`, `html.preview_cdnjs_blocked`, `html.preview_script_blocked`].includes(e.label) && t.logStructuredEvent(`ChatgptCodeBlockPreviewDiagnostic`, {
                    category: e.label,
                    previewHost: `classic`,
                    startMode: n.startMode,
                    previewLanguage: n.previewLanguage
                }), i.count(r.WEB_SANDBOX, e.label, e.tags, e.count)
            }
            case `error`:
                return a.addError(e.message);
            default:
                break
        }
    }
}));
export {
    l as n, c as t
};
//# sourceMappingURL=3509739a-gb8oe5tf557ghgtp.js.map