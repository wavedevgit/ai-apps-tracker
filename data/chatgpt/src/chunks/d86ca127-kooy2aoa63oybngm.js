import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    z7 as n
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    s as r,
    w as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var a, o, s, c, l = e((() => {
    n(), r(), a = [`user-information-sharing`, `grants`], o = e => {
        "use no forget";
        return i({
            queryKey: [...a, e],
            queryFn: async () => (await t.safeGet(`/user_information/grants`)).grants,
            enabled: e != null
        })
    }, s = e => t.safePost(`/user_information/grants`, {
        requestBody: e
    }), c = e => t.safeDelete(`/user_information/grants/{grant_id}`, {
        parameters: {
            path: {
                grant_id: e
            }
        }
    })
}));
export {
    o as i, l as n, c as r, s as t
};
//# sourceMappingURL=d86ca127-kooy2aoa63oybngm.js.map