import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    P7 as t,
    R7 as n
} from "./4813494d-dfpv67hlp00pbohr.js";

function r(e, n, r) {
    return t.safeGet(`/websites/{project_id}/access_request`, {
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
                token: n
            }
        }
    })
}

function i(e, n) {
    return t.safePost(`/websites/{project_id}/access_request`, {
        parameters: {
            path: {
                project_id: e
            }
        },
        requestBody: {
            token: n
        }
    })
}

function a(e, n) {
    return t.safeGet(`/websites/{project_id}`, {
        ...n == null ? {} : {
            additionalHeaders: {
                "ChatGPT-Account-ID": n
            }
        },
        parameters: {
            path: {
                project_id: e
            }
        }
    })
}
async function o(e, n) {
    let {
        slug_change: r,
        ...i
    } = await t.safePost(`/websites/{project_id}/metadata`, {
        parameters: {
            path: {
                project_id: e
            }
        },
        requestBody: {
            slug: n
        }
    });
    if (r == null) throw Error(`Slug update response did not include change state`);
    return {
        project: i,
        slugChange: r
    }
}
var s, c, l, u, d = e((() => {
    n(), s = (e, t) => [`appgen`, `site-settings`, e, t], c = (e, t) => [`appgen`, `site-environment`, e, t], l = (e, t, n) => [`appgen`, `site-slug-availability`, e, t, n], u = (e, t) => [`appgen`, `site-custom-domains`, e, t]
}));
export {
    u as a, l as c, d as i, o as l, r as n, c as o, a as r, s, i as t
};
//# sourceMappingURL=07c7be17-n79cxbhu0efmwgx5.js.map