import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    z7 as n
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    s as r,
    w as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function a(e) {
    return c.has(e)
}

function o(e) {
    return t.safeGet(`/files/library/files/{library_file_id}/deep-research`, {
        parameters: {
            path: {
                library_file_id: e
            }
        }
    })
}

function s(e, n, r) {
    if (!a(n)) throw Error(`Unsupported deep research Library tool: ${n}`);
    let i = {
        args: {}
    };
    return Object.assign(i.args, r), t.safePost(`/files/library/files/{library_file_id}/deep-research/tools/{tool_name}`, {
        parameters: {
            path: {
                library_file_id: e,
                tool_name: n
            }
        },
        requestBody: i
    })
}
var c, l, u = e((() => {
    n(), r(), c = new Set([`get_state`, `get_inline_images`, `export`]), l = e => i({
        queryKey: [`deep-research-library-preview`, e],
        queryFn: () => o(e)
    })
}));
export {
    u as i, o as n, l as r, s as t
};
//# sourceMappingURL=fdefd9fe-nuubzmcm10k8yk2l.js.map