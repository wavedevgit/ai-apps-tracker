import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dat as t,
    Hm as n,
    J7 as r,
    L7 as i,
    N7 as a,
    Nat as o,
    Um as s,
    Wm as c,
    b_ as l,
    iat as u,
    lat as d,
    nat as f,
    y_ as p
} from "./4813494d-qsuygr73qjc6rh65.js";
async function m({
    roomId: e,
    path: t
}) {
    return await a.safePost(t, {
        parameters: {
            path: {
                room_id: e
            }
        }
    })
}

function h() {
    return l(async e => {
        try {
            return await m(e)
        } catch (e) {
            if (e instanceof t) {
                e.isTransportError && r(e);
                return
            }
            f.addError(e, {
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
    let t = await s(n.CreateRoom);
    return a.safePost(`/messaging/invite-links/{code}/accept`, {
        parameters: {
            path: {
                code: e
            }
        },
        additionalHeaders: t
    })
}
var _, v = e((() => {
    c(), d(), u(), o(), i(), p(), _ = 2e3
}));
export {
    h as n, v as r, g as t
};
//# sourceMappingURL=149834c7-i5v58izn5rg11ahy.js.map