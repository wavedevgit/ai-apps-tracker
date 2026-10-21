import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    L7 as t,
    N7 as n
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    s as r,
    w as i
} from "./2340486e-komxp8tzs51ny4jj.js";
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
//# sourceMappingURL=d86ca127-d55ax0k5ee6blnx4.js.map