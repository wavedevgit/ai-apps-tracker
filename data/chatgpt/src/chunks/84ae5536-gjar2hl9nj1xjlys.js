import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    VU as t,
    fl as n,
    pl as r,
    zU as i
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as a,
    Ln as o,
    N as s,
    p as c,
    s as l,
    zn as u
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Jln as d,
    Zln as f
} from "./conversation-small-cawdu7il3ha6y70c.js";

function p({
    showToast: e = !0
} = {}) {
    let r = s(),
        i = t(),
        l = a();
    return c({
        mutationFn: e => n.updateUserPreferences(e),
        onSuccess: async () => {
            await f(r), e && i.success(l.formatMessage({
                id: `wham.preferencesPage.preferencesUpdated`,
                defaultMessage: `Preferences updated`
            }), {
                duration: 2
            })
        },
        onError: () => {
            i.danger(o({
                id: `wham.preferencesPage.preferencesUpdateError`,
                defaultMessage: `Failed to update preferences`
            }), {
                toastId: `wham_preferences_page_preferences_update_error`
            })
        }
    })
}
var m = e((() => {
    i(), d(), r(), l(), u()
}));
export {
    p as n, m as t
};
//# sourceMappingURL=84ae5536-gjar2hl9nj1xjlys.js.map