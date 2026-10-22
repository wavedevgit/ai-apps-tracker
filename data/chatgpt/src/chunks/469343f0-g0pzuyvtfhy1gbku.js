import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $nt as t,
    Int as n,
    Rnt as r,
    ert as i
} from "./4813494d-nxpmzchfjvwqts17.js";

function a(e) {
    try {
        return e(), !0
    } catch {
        return !1
    }
}

function o(e, t) {
    if (!u) try {
        let e = JSON.parse(window.sessionStorage.getItem(`video-analytics-v1`) ?? `[]`);
        u = new Set(Array.isArray(e) ? e.filter(e => typeof e == `string`) : [])
    } catch {
        u = new Set
    }
    if (!(u.has(e) || !a(t))) {
        if (u.add(e), u.size > 1e4) {
            let e = u.values().next().value;
            e !== void 0 && u.delete(e)
        }
        try {
            window.sessionStorage.setItem(`video-analytics-v1`, JSON.stringify([...u]))
        } catch {}
    }
}

function s(e) {
    return {
        conversationId: e.conversationId,
        turnMessageId: e.turnMessageId,
        turnExchangeId: e.turnExchangeId,
        carouselId: e.carouselId,
        videoId: e.videoId,
        position: i(e.position),
        platform: e.platform
    }
}

function c(e, t) {
    t !== `impression` && c(e, `impression`), o(JSON.stringify([e.conversationId, e.turnMessageId, e.turnExchangeId, e.carouselId, e.videoId, e.position, t]), () => {
        n.logStructuredEvent(`ChatgptVideoCarouselInteraction`, {
            ...s(e),
            action: t
        })
    })
}

function l(e, t) {
    let r = {
        ...s(e),
        action: t.action,
        playbackSessionId: t.playbackSessionId,
        metricValue: t.action === `watch_time` ? (t.watchTimeMs ?? 0) / 1e3 : 1,
        videoDurationMs: t.videoDurationMs,
        errorCode: t.errorCode
    };
    a(() => n.logStructuredEvent(`ChatgptVideoPlayback`, r)), t.action === `qualified` && e.turnExchangeId && o(JSON.stringify([e.conversationId, e.turnExchangeId, e.videoId, `qualified_video`]), () => {
        n.logStructuredEvent(`ChatgptVideoPlayback`, {
            ...r,
            action: `qualified_video`
        })
    })
}
var u, d = e((() => {
    t(), r()
}));
export {
    c as n, l as r, d as t
};
//# sourceMappingURL=469343f0-g0pzuyvtfhy1gbku.js.map