import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jc as t,
    Yc as n,
    hU as r,
    pU as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    In as a,
    N as o,
    Rn as s,
    p as c,
    s as l,
    zn as u
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Lln as d,
    Pln as f
} from "./conversation-small-fym1zmu9zimymmm1.js";

function p({
    showToast: e = !0
} = {}) {
    let n = o(),
        i = r(),
        s = u();
    return c({
        mutationFn: e => t.updateUserPreferences(e),
        onSuccess: async () => {
            await d(n), e && i.success(s.formatMessage({
                id: `wham.preferencesPage.preferencesUpdated`,
                defaultMessage: `Preferences updated`
            }), {
                duration: 2
            })
        },
        onError: () => {
            i.danger(a({
                id: `wham.preferencesPage.preferencesUpdateError`,
                defaultMessage: `Failed to update preferences`
            }), {
                toastId: `wham_preferences_page_preferences_update_error`
            })
        }
    })
}
var m = e((() => {
    i(), f(), n(), l(), s()
}));
export {
    p as n, m as t
};
//# sourceMappingURL=84ae5536-k47w7ps4m6grzri2.js.map