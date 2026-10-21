import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Av as t,
    Fv as n
} from "./4813494d-bo7e0c29ngt4zgx0.js";

function r(e, n) {
    let r = t(`installations/select_target`);
    if (e.length > 1) return r;
    let i = e[0];
    return n ? i.account_type === `user` ? `https://github.com/settings/installations/${i.id}/permissions/update` : `https://github.com/organizations/${i.account_login}/settings/installations/${i.id}/permissions/update` : `https://github.com/settings/installations/${i.id}`
}

function i(e) {
    if (!e) return null;
    let t = e.repo_id?.startsWith(`gitlab-`);
    if (t && e.repo_id?.includes(`:`)) return null;
    let {
        repository_full_name: n,
        pr_number: r,
        comment_id: i,
        comment_type: a
    } = e;
    return !n || !r || !i ? null : t ? `https://gitlab.com/${n}/-/${a===`issue`?`issues`:`merge_requests`}/${r}#note_${i}` : `${`https://github.com/${n}/pull/${r}`}${a===`review`?`#discussion_r${i}`:`#issuecomment-${i}`}`
}
var a = e((() => {
    n()
}));
export {
    r as n, a as r, i as t
};
//# sourceMappingURL=0bf4501c-l902h61wxnkahfa2.js.map