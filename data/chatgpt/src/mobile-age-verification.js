export const __rspack_esm_ids = [594445];
export const __webpack_modules__ = {
    BvIT: (function(a, b, c) {
        function d(a) {
            let {
                request: b
            } = a;
            var c = b;
            let d = new URL(c.url).searchParams.get("inquiry_id");
            if (!d) throw new Response("Missing inquiryId", {
                status: 400
            });
            return {
                inquiryId: d
            }
        }
        c.d(b, {
            a: () => d
        })
    })
};
import {
    __webpack_require__ as a
} from "./633146.44c41f9881.js";
import * as b from "./594445.dfa143aff1.js";
a.C(b);
var c = a(a.s = "BvIT").a;
export {
    c as clientLoader
};