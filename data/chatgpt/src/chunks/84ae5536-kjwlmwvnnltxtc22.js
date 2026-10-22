import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    LU as t,
    hl as n,
    ml as r,
    zU as i
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    In as a,
    N as o,
    Rn as s,
    p as c,
    s as l,
    zn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    _un as d,
    mun as f
} from "./conversation-small-m7dgsxtvvivh3e6t.js";

function p({
    showToast: e = !0
} = {}) {
    let t = o(),
        n = i(),
        s = u();
    return c({
        mutationFn: e => r.updateUserPreferences(e),
        onSuccess: async () => {
            await d(t), e && n.success(s.formatMessage({
                id: `wham.preferencesPage.preferencesUpdated`,
                defaultMessage: `Preferences updated`
            }), {
                duration: 2
            })
        },
        onError: () => {
            n.danger(a({
                id: `wham.preferencesPage.preferencesUpdateError`,
                defaultMessage: `Failed to update preferences`
            }), {
                toastId: `wham_preferences_page_preferences_update_error`
            })
        }
    })
}
var m = e((() => {
    t(), f(), n(), l(), s()
}));
export {
    p as n, m as t
};
//# sourceMappingURL=84ae5536-kjwlmwvnnltxtc22.js.map