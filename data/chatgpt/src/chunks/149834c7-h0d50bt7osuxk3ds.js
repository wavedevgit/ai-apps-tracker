import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as t,
    F7 as n,
    Gm as r,
    Iat as i,
    Um as a,
    Wm as o,
    X7 as s,
    aat as c,
    b_ as l,
    fat as u,
    sat as d,
    x_ as f,
    z7 as p
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
            if (e instanceof t) {
                e.isTransportError && s(e);
                return
            }
            c.addError(e, {
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
    r(), u(), d(), i(), p(), l(), _ = 2e3
}));
export {
    h as n, v as r, g as t
};
//# sourceMappingURL=149834c7-h0d50bt7osuxk3ds.js.map