export const __rspack_esm_ids = [594445];
export const __webpack_modules__ = {
    uVLV: (function(e, r, s) {
        function t(e) {
            let {
                request: r
            } = e;
            var s = r;
            let t = new URL(s.url).searchParams.get("inquiry_id");
            if (!t) throw new Response("Missing inquiryId", {
                status: 400
            });
            return {
                inquiryId: t
            }
        }
        s.d(r, {
            a: () => t
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.6428a93122.js";
import * as r from "./594445.36863b50bf.js";
e.C(r);
var s = e(e.s = "uVLV").a;
export {
    s as clientLoader
};