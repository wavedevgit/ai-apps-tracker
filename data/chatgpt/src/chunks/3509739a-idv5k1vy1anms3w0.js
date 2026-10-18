import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Btt as t,
    Dit as n,
    Htt as r,
    Mnt as i,
    Nnt as a,
    Pnt as o,
    kit as s
} from "./4813494d-cb22y2w19zwyshmt.js";
var c, l = e((() => {
    r(), s(), i(), c = e => {
        switch (e.type) {
            case `hist`:
                return a.hist(o.WEB_SANDBOX, e.label, e.tags, e.value);
            case `count`: {
                let {
                    previewDiagnostics: n
                } = e;
                return n != null && [`html.preview_started`, `html.preview_ready`, `html.preview_startup_error`, `html.preview_runtime_error`, `html.preview_cdnjs_blocked`, `html.preview_script_blocked`].includes(e.label) && t.logStructuredEvent(`ChatgptCodeBlockPreviewDiagnostic`, {
                    category: e.label,
                    previewHost: `classic`,
                    startMode: n.startMode,
                    previewLanguage: n.previewLanguage
                }), a.count(o.WEB_SANDBOX, e.label, e.tags, e.count)
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
//# sourceMappingURL=3509739a-idv5k1vy1anms3w0.js.map