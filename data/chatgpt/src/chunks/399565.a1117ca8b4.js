export const __rspack_esm_id = 399565;
export const __rspack_esm_ids = [399565];
export const __webpack_modules__ = {
    wJ7: (function(e, t, s) {
        let o = ["; wv", "webview", "fbav", "fb_iab", "fban", "instagram", "line/", "kakaotalk", "snapchat", "tiktok"];

        function i(e) {
            let t = e.trim(),
                s = /iPhone|iPad|iPod/.test(t) && !/Safari/.test(t) || /Android/.test(t) && /Version\/\d+\.\d+/.test(t) || o.some(e => t.toLowerCase().includes(e));
            return /\bAndroid\b/i.test(e) && /\bChrome\/\d/i.test(e) && !/\b(?:EdgA|SamsungBrowser|OPR|Opera|Firefox|FxiOS|HuaweiBrowser|YaBrowser|DuckDuckGo)\//i.test(e) && !s
        }
        s.d(t, {
            a: () => i
        })
    })
};