import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dit as t,
    Em as n,
    Pit as r,
    Qit as i,
    Tm as a,
    a7 as o,
    b7 as s,
    iat as c,
    kit as l,
    l7 as u,
    n_ as d,
    t_ as f,
    wm as p
} from "./4813494d-cb22y2w19zwyshmt.js";
async function m({
    roomId: e,
    path: t
}) {
    return await o.safePost(t, {
        parameters: {
            path: {
                room_id: e
            }
        }
    })
}

function h() {
    return d(async e => {
        try {
            return await m(e)
        } catch (e) {
            if (e instanceof i) {
                e.isTransportError && s(e);
                return
            }
            t.addError(e, {
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
    let t = await a(p.CreateRoom);
    return o.safePost(`/messaging/invite-links/{code}/accept`, {
        parameters: {
            path: {
                code: e
            }
        },
        additionalHeaders: t
    })
}
var _, v = e((() => {
    n(), r(), l(), c(), u(), f(), _ = 2e3
}));
export {
    h as n, v as r, g as t
};
//# sourceMappingURL=149834c7-ke43zu3bod0dbk2p.js.map