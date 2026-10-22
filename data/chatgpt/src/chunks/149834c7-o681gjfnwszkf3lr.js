import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cat as t,
    Gm as n,
    J7 as r,
    Kat as i,
    Km as a,
    Oat as o,
    Q7 as s,
    Qat as c,
    S_ as l,
    Wm as u,
    l9 as d,
    x_ as f,
    xat as p
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    return l(async e => {
        try {
            return await m(e)
        } catch (e) {
            if (e instanceof i) {
                e.isTransportError && d(e);
                return
            }
            p.addError(e, {
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
    let t = await n(u.CreateRoom);
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
    a(), o(), t(), c(), s(), f(), _ = 2e3
}));
export {
    h as n, v as r, g as t
};
//# sourceMappingURL=149834c7-o681gjfnwszkf3lr.js.map