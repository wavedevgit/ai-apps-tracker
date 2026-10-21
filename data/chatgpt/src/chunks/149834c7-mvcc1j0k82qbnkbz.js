import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bat as t,
    F7 as n,
    Gm as r,
    Pat as i,
    Um as a,
    Wm as o,
    X7 as s,
    b_ as c,
    dat as l,
    gat as u,
    lat as d,
    x_ as f,
    z7 as p
} from "./4813494d-tap9fxyhk4ehe0bs.js";
async function m({
    roomId: e,
    path: t
}) {
    return await n.safePost(t, {
        parameters: {
            path: {
                room_id: e
            }
        }
    })
}

function h() {
    return f(async e => {
        try {
            return await m(e)
        } catch (e) {
            if (e instanceof i) {
                e.isTransportError && s(e);
                return
            }
            d.addError(e, {
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
    let t = await o(a.CreateRoom);
    return n.safePost(`/messaging/invite-links/{code}/accept`, {
        parameters: {
            path: {
                code: e
            }
        },
        additionalHeaders: t
    })
}
var _, v = e((() => {
    r(), u(), l(), t(), p(), c(), _ = 2e3
}));
export {
    h as n, v as r, g as t
};
//# sourceMappingURL=149834c7-mvcc1j0k82qbnkbz.js.map