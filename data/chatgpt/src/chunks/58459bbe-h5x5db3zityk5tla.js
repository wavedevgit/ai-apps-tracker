import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as t,
    e2 as n
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Fin as r,
    Nin as i
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function a(e, t) {
    let n = new URLSearchParams(e),
        i = {
            accountId: n.get(`site_account`),
            libraryFileId: n.get(`site_library_file`),
            fileName: n.get(`site_file_name`),
            branchMessageId: t,
            temporaryChat: n.get(`temporary-chat`) === `true` || n.get(`training_disabled`) === `true`
        };
    return r(i) ? i : null
}

function o(e, n) {
    let r = new URLSearchParams({
        surface: `work`,
        [s]: n.libraryFileId,
        site_account: n.accountId,
        site_library_file: n.libraryFileId,
        site_file_name: n.fileName
    });
    return n.temporaryChat && r.set(t, `true`), `/branch/${encodeURIComponent(e)}/${encodeURIComponent(n.branchMessageId)}?${r}`
}
var s, c = e((() => {
    n(), i(), s = `site_preview`
}));
export {
    c as i, a as n, o as r, s as t
};
//# sourceMappingURL=58459bbe-h5x5db3zityk5tla.js.map