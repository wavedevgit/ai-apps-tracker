import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Gat as t,
    Wat as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    hUn as r,
    mUn as i
} from "./conversation-small-fym1zmu9zimymmm1.js";
var a, o, s = e((() => {
    r(), t(), a = class {
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
//# sourceMappingURL=073fd849-npv0ykwfmvcugv1y.js.map