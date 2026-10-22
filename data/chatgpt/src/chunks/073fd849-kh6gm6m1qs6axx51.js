import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Rot as t,
    zot as n
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    GUn as r,
    KUn as i
} from "./conversation-small-i79e9c315w50am5f.js";
var a, o, s = e((() => {
    i(), n(), a = class {
        constructor(e) {
            t(this, `params`, void 0), this.params = e
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
//# sourceMappingURL=073fd849-kh6gm6m1qs6axx51.js.map