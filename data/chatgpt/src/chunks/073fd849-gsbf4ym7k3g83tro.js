import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Hot as t,
    Vot as n
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    cWn as r,
    lWn as i
} from "./conversation-small-dwpaie1hln28efxb.js";
var a, o, s = e((() => {
    i(), t(), a = class {
        constructor(e) {
            n(this, `params`, void 0), this.params = e
        }
        get isReadonly() {
            return Object.values(this.params).some(e => !!e)
        }
        get isHistoricalVersion() {
            return !!this.params.isHistoricalVersion
        }
        get isStreaming() {
            return !!this.params.isTextdocStreaming || !!this.params.isRequestActive
        }
        get isTextdocStreaming() {
            return !!this.params.isTextdocStreaming
        }
        get isStreamingFromNative() {
            return this.isStreaming && this.params.streamingSource === r.NATIVE
        }
        get isRestoring() {
            return !!this.params.isRestoring
        }
        get isShowingChanges() {
            return !!this.params.isShowingChanges
        }
        get isReadonlyFromQueryParam() {
            return !!this.params.isReadonlyFromQueryParam
        }
    }, o = e => new a(e)
}));
export {
    s as n, o as t
};
//# sourceMappingURL=073fd849-gsbf4ym7k3g83tro.js.map