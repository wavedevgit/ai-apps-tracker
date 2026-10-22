import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as t,
    Cat as n,
    Gm as r,
    J7 as i,
    Jat as a,
    Km as o,
    Q7 as s,
    S_ as c,
    Tat as l,
    Wm as u,
    eot as d,
    l9 as f,
    x_ as p
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    return c(async e => {
        try {
            return await m(e)
        } catch (e) {
            if (e instanceof a) {
                e.isTransportError && f(e);
                return
            }
            n.addError(e, {
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
    let t = await r(u.CreateRoom);
    return i.safePost(`/messaging/invite-links/{code}/accept`, {
        parameters: {
            path: {
                code: e
            }
        },
        additionalHeaders: t
    })
}
var _, v = e((() => {
    o(), t(), l(), d(), s(), p(), _ = 2e3
}));
export {
    h as n, v as r, g as t
};
//# sourceMappingURL=149834c7-i9l94zy7tj39l9qg.js.map