import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fnt as t,
    Pnt as n,
    _nt as r,
    ynt as i
} from "./4813494d-dfpv67hlp00pbohr.js";

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
        position: t(e.position),
        platform: e.platform
    }
}

function c(e, t) {
    t !== `impression` && c(e, `impression`), o(JSON.stringify([e.conversationId, e.turnMessageId, e.turnExchangeId, e.carouselId, e.videoId, e.position, t]), () => {
        r.logStructuredEvent(`ChatgptVideoCarouselInteraction`, {
            ...s(e),
            action: t
        })
    })
}

function l(e, t) {
    let n = {
        ...s(e),
        action: t.action,
        playbackSessionId: t.playbackSessionId,
        metricValue: t.action === `watch_time` ? (t.watchTimeMs ?? 0) / 1e3 : 1,
        videoDurationMs: t.videoDurationMs,
        errorCode: t.errorCode
    };
    a(() => r.logStructuredEvent(`ChatgptVideoPlayback`, n)), t.action === `qualified` && e.turnExchangeId && o(JSON.stringify([e.conversationId, e.turnExchangeId, e.videoId, `qualified_video`]), () => {
        r.logStructuredEvent(`ChatgptVideoPlayback`, {
            ...n,
            action: `qualified_video`
        })
    })
}
var u, d = e((() => {
    n(), i()
}));
export {
    c as n, l as r, d as t
};
//# sourceMappingURL=469343f0-et5eo4ur4vbpizwy.js.map