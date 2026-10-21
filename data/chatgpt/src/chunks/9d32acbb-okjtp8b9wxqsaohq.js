import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    nst as t,
    rst as n
} from "./4813494d-t80q9ew944ej0mgk.js";

function r() {
    return new Promise(e => {
        if (window.YT?.Player) return e();
        let n = window.onYouTubeIframeAPIReady;
        if (window.onYouTubeIframeAPIReady = () => {
                n?.(), e(), window.onYouTubeIframeAPIReady = n || (() => {})
            }, !document.querySelector(`script[src*='youtube.com/iframe_api']`)) {
            let e = document.createElement(`script`);
            e.src = `https://www.youtube.com/iframe_api`, e.nonce = t().cspScriptNonce, document.head.appendChild(e)
        }
    })
}
var i = e((() => {
    n()
}));
export {
    r as n, i as t
};
//# sourceMappingURL=9d32acbb-okjtp8b9wxqsaohq.js.map