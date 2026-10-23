import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jot as t,
    Yot as n
} from "./4813494d-mdvd4786a87166cc.js";
import {
    SWn as r,
    xWn as i
} from "./conversation-small-bcbq46iub1p0ca1t.js";
var a, o, s = e((() => {
    r(), n(), a = class {
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
            return this.isStreaming && this.params.streamingSource === i.NATIVE
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
//# sourceMappingURL=073fd849-fdkg4spwe61sp7mn.js.map