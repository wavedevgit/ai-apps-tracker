import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Sot as t,
    xot as n
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    CUn as r,
    wUn as i
} from "./conversation-small-cy5f8pl0g26s86so.js";
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
//# sourceMappingURL=073fd849-mgani8emaqw2t5x7.js.map