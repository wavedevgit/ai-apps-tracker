import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    Hm as n,
    K7 as r,
    Tat as i,
    Um as a,
    Wm as o,
    b_ as s,
    eat as c,
    j7 as l,
    jat as u,
    nat as d,
    sat as f,
    y_ as p
} from "./4813494d-ed29bs6yiwucn7st.js";
async function m({
    roomId: e,
    path: t
}) {
    return await l.safePost(t, {
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
            if (e instanceof i) {
                e.isTransportError && r(e);
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
    let t = await a(n.CreateRoom);
    return l.safePost(`/messaging/invite-links/{code}/accept`, {
        parameters: {
            path: {
                code: e
            }
        },
        additionalHeaders: t
    })
}
var _, v = e((() => {
    o(), f(), d(), u(), t(), p(), _ = 2e3
}));
export {
    h as n, v as r, g as t
};
//# sourceMappingURL=149834c7-mrceqp4tsiibu39q.js.map