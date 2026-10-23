import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Gm as t,
    I7 as n,
    Km as r,
    M7 as i,
    Nat as a,
    Rat as o,
    S_ as s,
    Wm as c,
    cot as l,
    jat as u,
    not as d,
    q7 as f,
    x_ as p
} from "./4813494d-mdvd4786a87166cc.js";
async function m({
    roomId: e,
    path: t
}) {
    return await i.safePost(t, {
        parameters: {
            path: {
                room_id: e
            }
        }
    })
}

function h() {
    return s(async e => {
        try {
            return await m(e)
        } catch (e) {
            if (e instanceof d) {
                e.isTransportError && f(e);
                return
            }
            u.addError(e, {
                context: {
                    operation: `calpico_responding_heartbeat`
                }
            })
        }
    }, _, {
        trailing: !1
    })
}
async function g(e) {
    let n = await t(c.CreateRoom);
    return i.safePost(`/messaging/invite-links/{code}/accept`, {
        parameters: {
            path: {
                code: e
            }
        },
        additionalHeaders: n
    })
}
var _, v = e((() => {
    r(), o(), a(), l(), n(), p(), _ = 2e3
}));
export {
    h as n, v as r, g as t
};
//# sourceMappingURL=149834c7-msda0nwzr4hxk7xk.js.map