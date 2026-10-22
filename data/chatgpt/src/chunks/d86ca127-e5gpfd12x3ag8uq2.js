import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    Y7 as n
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    s as r,
    w as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var a, o, s, c, l = e((() => {
    t(), r(), a = [`user-information-sharing`, `grants`], o = e => {
        "use no forget";
        return i({
            queryKey: [...a, e],
            queryFn: async () => (await n.safeGet(`/user_information/grants`)).grants,
            enabled: e != null
        })
    }, s = e => n.safePost(`/user_information/grants`, {
        requestBody: e
    }), c = e => n.safeDelete(`/user_information/grants/{grant_id}`, {
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
//# sourceMappingURL=d86ca127-e5gpfd12x3ag8uq2.js.map