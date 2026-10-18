import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _0 as t,
    g0 as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    din as r,
    lin as i
} from "./conversation-small-fym1zmu9zimymmm1.js";

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
    t(), i(), s = `site_preview`
}));
export {
    c as i, a as n, o as r, s as t
};
//# sourceMappingURL=58459bbe-oiqyxcbpm6us4dkw.js.map