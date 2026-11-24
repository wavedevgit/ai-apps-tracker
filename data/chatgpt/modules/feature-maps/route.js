export const __rspack_esm_ids = [517355];
export const __webpack_modules__ = {
    JcDD: (function(a, b, c) {
        c.d(b, {
            a: () => d
        });
        let d = a => {
            let {
                loaderData: b
            } = a, c = [{
                title: "ChatGPT Maps"
            }, {
                name: "robots",
                content: "noindex, nofollow, noarchive"
            }];
            if (b?.place == null) return c;
            let {
                place: d,
                canonicalUrl: e,
                image: f,
                richLinkRendersEnabled: g
            } = b, h = `${d.name} | ChatGPT Maps`, i = g ? d.name : h;
            return c[0] = {
                title: h
            }, c.push({
                property: "og:type",
                content: "website"
            }, ...g ? [{
                property: "og:site_name",
                content: "ChatGPT"
            }] : [], {
                property: "og:title",
                content: i
            }, {
                property: "og:url",
                content: e
            }, {
                tagName: "link",
                rel: "canonical",
                href: e
            }, {
                name: "twitter:title",
                content: i
            }), d.description && c.push({
                name: "description",
                content: d.description
            }, {
                property: "og:description",
                content: d.description
            }, {
                name: "twitter:description",
                content: d.description
            }), null != f && c.push({
                property: "og:image",
                content: f.url
            }, ...f.url.startsWith("https://") ? [{
                property: "og:image:secure_url",
                content: f.url
            }] : [], ...g ? [{
                property: "og:image:type",
                content: "image/png"
            }] : [], ...null != f.width && null != f.height ? [{
                property: "og:image:width",
                content: f.width
            }, {
                property: "og:image:height",
                content: f.height
            }] : [], {
                property: "og:image:alt",
                content: f.alt
            }, {
                name: "twitter:card",
                content: "summary_large_image"
            }, {
                name: "twitter:image",
                content: f.url
            }, {
                name: "twitter:image:alt",
                content: f.alt
            }), c
        }
    })
};
import {
    __webpack_require__ as a
} from "./633146.192293cdfd.js";
import * as b from "./517355.12351d2fc0.js";
a.C(b);
var c = a(a.s = "JcDD").a;
export {
    c as meta
};