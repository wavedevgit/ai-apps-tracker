import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ast as t,
    ist as n
} from "./4813494d-nxpmzchfjvwqts17.js";

function r() {
    return new Promise(e => {
        if (window.YT?.Player) return e();
        let t = window.onYouTubeIframeAPIReady;
        if (window.onYouTubeIframeAPIReady = () => {
                t?.(), e(), window.onYouTubeIframeAPIReady = t || (() => {})
            }, !document.querySelector(`script[src*='youtube.com/iframe_api']`)) {
            let e = document.createElement(`script`);
            e.src = `https://www.youtube.com/iframe_api`, e.nonce = n().cspScriptNonce, document.head.appendChild(e)
        }
    })
}
var i = e((() => {
    t()
}));
export {
    r as n, i as t
};
//# sourceMappingURL=9d32acbb-d1awipkemg9n9spa.js.map