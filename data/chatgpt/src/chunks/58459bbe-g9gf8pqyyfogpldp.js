import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    G0 as t,
    W0 as n
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Ein as r,
    Oin as i
} from "./conversation-small-ikg0dwuw782klweb.js";

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

function o(e, t) {
    let r = new URLSearchParams({
        surface: `work`,
        [s]: t.libraryFileId,
        site_account: t.accountId,
        site_library_file: t.libraryFileId,
        site_file_name: t.fileName
    });
    return t.temporaryChat && r.set(n, `true`), `/branch/${encodeURIComponent(e)}/${encodeURIComponent(t.branchMessageId)}?${r}`
}
var s, c = e((() => {
    t(), r(), s = `site_preview`
}));
export {
    c as i, a as n, o as r, s as t
};
//# sourceMappingURL=58459bbe-g9gf8pqyyfogpldp.js.map