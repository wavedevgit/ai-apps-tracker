import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Btt as t,
    Htt as n,
    int as r,
    rnt as i
} from "./4813494d-cb22y2w19zwyshmt.js";

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
        position: r(e.position),
        platform: e.platform
    }
}

function c(e, n) {
    n !== `impression` && c(e, `impression`), o(JSON.stringify([e.conversationId, e.turnMessageId, e.turnExchangeId, e.carouselId, e.videoId, e.position, n]), () => {
        t.logStructuredEvent(`ChatgptVideoCarouselInteraction`, {
            ...s(e),
            action: n
        })
    })
}

function l(e, n) {
    let r = {
        ...s(e),
        action: n.action,
        playbackSessionId: n.playbackSessionId,
        metricValue: n.action === `watch_time` ? (n.watchTimeMs ?? 0) / 1e3 : 1,
        videoDurationMs: n.videoDurationMs,
        errorCode: n.errorCode
    };
    a(() => t.logStructuredEvent(`ChatgptVideoPlayback`, r)), n.action === `qualified` && e.turnExchangeId && o(JSON.stringify([e.conversationId, e.turnExchangeId, e.videoId, `qualified_video`]), () => {
        t.logStructuredEvent(`ChatgptVideoPlayback`, {
            ...r,
            action: `qualified_video`
        })
    })
}
var u, d = e((() => {
    i(), n()
}));
export {
    c as n, l as r, d as t
};
//# sourceMappingURL=469343f0-j8lz3w0xb41rlmyi.js.map