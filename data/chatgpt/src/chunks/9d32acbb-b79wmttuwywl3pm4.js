import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ast as t,
    ost as n
} from "./4813494d-i89nb6zlze66idsz.js";

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
//# sourceMappingURL=9d32acbb-b79wmttuwywl3pm4.js.map