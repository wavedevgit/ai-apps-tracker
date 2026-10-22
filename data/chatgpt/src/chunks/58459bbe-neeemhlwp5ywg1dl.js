import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as t,
    e2 as n
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Sin as r,
    win as i
} from "./conversation-small-i79e9c315w50am5f.js";

function a(e, t) {
    let n = new URLSearchParams(e),
        r = {
            accountId: n.get(`site_account`),
            libraryFileId: n.get(`site_library_file`),
            fileName: n.get(`site_file_name`),
            branchMessageId: t,
            temporaryChat: n.get(`temporary-chat`) === `true` || n.get(`training_disabled`) === `true`
        };
    return i(r) ? r : null
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
    n(), r(), s = `site_preview`
}));
export {
    c as i, a as n, o as r, s as t
};
//# sourceMappingURL=58459bbe-neeemhlwp5ywg1dl.js.map