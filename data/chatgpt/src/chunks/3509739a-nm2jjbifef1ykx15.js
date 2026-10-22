import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Art as t,
    Eat as n,
    Lnt as r,
    jrt as i,
    krt as a,
    wat as o,
    znt as s
} from "./4813494d-i89nb6zlze66idsz.js";
var c, l = e((() => {
    s(), n(), a(), c = e => {
        switch (e.type) {
            case `hist`:
                return t.hist(i.WEB_SANDBOX, e.label, e.tags, e.value);
            case `count`: {
                let {
                    previewDiagnostics: n
                } = e;
                return n != null && [`html.preview_started`, `html.preview_ready`, `html.preview_startup_error`, `html.preview_runtime_error`, `html.preview_cdnjs_blocked`, `html.preview_script_blocked`].includes(e.label) && r.logStructuredEvent(`ChatgptCodeBlockPreviewDiagnostic`, {
                    category: e.label,
                    previewHost: `classic`,
                    startMode: n.startMode,
                    previewLanguage: n.previewLanguage
                }), t.count(i.WEB_SANDBOX, e.label, e.tags, e.count)
            }
            case `error`:
                return o.addError(e.message);
            default:
                break
        }
    }
}));
export {
    l as n, c as t
};
//# sourceMappingURL=3509739a-nm2jjbifef1ykx15.js.map