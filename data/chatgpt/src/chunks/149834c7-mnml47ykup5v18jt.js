import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fat as t,
    Gm as n,
    P7 as r,
    R7 as i,
    Um as a,
    Wm as o,
    Y7 as s,
    b_ as c,
    dat as l,
    iat as u,
    kat as d,
    oat as f,
    x_ as p
} from "./4813494d-dfpv67hlp00pbohr.js";
async function m({
    roomId: e,
    path: t
}) {
    return await r.safePost(t, {
        parameters: {
            path: {
                room_id: e
            }
        }
    })
}

function h() {
    return p(async e => {
        try {
            return await m(e)
        } catch (e) {
            if (e instanceof d) {
                e.isTransportError && s(e);
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
    let t = await o(a.CreateRoom);
    return r.safePost(`/messaging/invite-links/{code}/accept`, {
        parameters: {
            path: {
                code: e
            }
        },
        additionalHeaders: t
    })
}
var _, v = e((() => {
    n(), l(), f(), t(), i(), c(), _ = 2e3
}));
export {
    h as n, v as r, g as t
};
//# sourceMappingURL=149834c7-mnml47ykup5v18jt.js.map