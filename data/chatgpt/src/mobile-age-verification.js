export const __rspack_esm_ids = [594445];
export const __webpack_modules__ = {
    AnON: (function(e, r, s) {
        function a(e) {
            let {
                request: r
            } = e;
            var s = r;
            let a = new URL(s.url).searchParams.get("inquiry_id");
            if (!a) throw new Response("Missing inquiryId", {
                status: 400
            });
            return {
                inquiryId: a
            }
        }
        s.d(r, {
            a: () => a
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.4f53659142.js";
import * as r from "./594445.3689d3d064.js";
e.C(r);
var s = e(e.s = "AnON").a;
export {
    s as clientLoader
};