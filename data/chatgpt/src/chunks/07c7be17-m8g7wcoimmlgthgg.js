import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    Y7 as n
} from "./4813494d-i89nb6zlze66idsz.js";

function r(e, t, r) {
    return n.safeGet(`/websites/{project_id}/access_request`, {
        ...r == null ? {} : {
            additionalHeaders: {
                "ChatGPT-Account-ID": r
            }
        },
        parameters: {
            path: {
                project_id: e
            },
            query: {
                token: t
            }
        }
    })
}

function i(e, t) {
    return n.safePost(`/websites/{project_id}/access_request`, {
        parameters: {
            path: {
                project_id: e
            }
        },
        requestBody: {
            token: t
        }
    })
}

function a(e, t) {
    return n.safeGet(`/websites/{project_id}`, {
        ...t == null ? {} : {
            additionalHeaders: {
                "ChatGPT-Account-ID": t
            }
        },
        parameters: {
            path: {
                project_id: e
            }
        }
    })
}
async function o(e, t) {
    let {
        slug_change: r,
        ...i
    } = await n.safePost(`/websites/{project_id}/metadata`, {
        parameters: {
            path: {
                project_id: e
            }
        },
        requestBody: {
            slug: t
        }
    });
    if (r == null) throw Error(`Slug update response did not include change state`);
    return {
        project: i,
        slugChange: r
    }
}
var s, c, l, u, d = e((() => {
    t(), s = (e, t) => [`appgen`, `site-settings`, e, t], c = (e, t) => [`appgen`, `site-environment`, e, t], l = (e, t, n) => [`appgen`, `site-slug-availability`, e, t, n], u = (e, t) => [`appgen`, `site-custom-domains`, e, t]
}));
export {
    u as a, l as c, d as i, o as l, r as n, c as o, a as r, s, i as t
};
//# sourceMappingURL=07c7be17-m8g7wcoimmlgthgg.js.map