import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    Y7 as n
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    s as r,
    w as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function a(e) {
    return c.has(e)
}

function o(e) {
    return n.safeGet(`/files/library/files/{library_file_id}/deep-research`, {
        parameters: {
            path: {
                library_file_id: e
            }
        }
    })
}

function s(e, t, r) {
    if (!a(t)) throw Error(`Unsupported deep research Library tool: ${t}`);
    let i = {
        args: {}
    };
    return Object.assign(i.args, r), n.safePost(`/files/library/files/{library_file_id}/deep-research/tools/{tool_name}`, {
        parameters: {
            path: {
                library_file_id: e,
                tool_name: t
            }
        },
        requestBody: i
    })
}
var c, l, u = e((() => {
    t(), r(), c = new Set([`get_state`, `get_inline_images`, `export`]), l = e => i({
        queryKey: [`deep-research-library-preview`, e],
        queryFn: () => o(e)
    })
}));
export {
    u as i, o as n, l as r, s as t
};
//# sourceMappingURL=fdefd9fe-bclro5py94v0mppp.js.map