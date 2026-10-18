import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $r as n,
    AJ as r,
    AY as i,
    Kr as a,
    OY as o,
    kJ as s,
    xJ as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as l,
    Vn as u,
    wn as d
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    GBn as f,
    WBn as p,
    rQt as m,
    sQt as h
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    C_ as g,
    di as _,
    fi as v,
    w_ as y
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    a as b,
    t as x
} from "./05d28061-n98p570a7q8nzidj.js";

function S({
    turn: e,
    turnIndex: t,
    conversation: n,
    hasActiveRequest: r,
    isFinalTurn: i
}) {
    let a = h(e),
        o = a ? e.messages.at(-1)?.metadata?.turn_exchange_id : void 0;
    return (0, D.jsx)(_, {
        turnIndex: t,
        conversation: n,
        groupedMessagesToRender: e.messageGroups,
        allGroupedMessages: e.messageGroups,
        allMessages: e.messages,
        isUserTurn: e.role === `user`,
        isFinalUserTurn: !1,
        isFinalAssistantTurn: !1,
        isFinalTurn: i,
        isCompletionRequestInProgress: !1,
        isFeedbackEnabled: !1,
        hasActiveRequest: r,
        onRequestCompletion: () => {},
        renderingView: `share-modal`,
        isSteeringEnabledTurn: a,
        turnExchangeId: o
    })
}

function C(e) {
    "use forget";
    let t = (0, T.c)(21),
        {
            messages: n,
            hasActiveRequest: r,
            conversation: i,
            allowOrphanMessages: l,
            preferProvidedMessages: u
        } = e,
        d;
    if (t[0] !== l || t[1] !== i || t[2] !== n || t[3] !== u) {
        bb0: {
            let e = s(i.id);
            if (e) {
                let t = [];
                for (let r of n) {
                    let n = r,
                        i = c.findMessage(e, e => r.id === e.id);
                    !i && !l || (i && !u && (n = i), t = o(t, n))
                }
                d = t;
                break bb0
            }
            let r;
            if (t[5] !== i || t[6] !== n) {
                let {
                    allConversationMessages: e,
                    threadResponse: s
                } = x(n);
                f(i, s);
                let c = [];
                for (let t of e) a(i, t.message), c = o(c, t.message);
                r = c.filter(w), t[5] = i, t[6] = n, t[7] = r
            } else r = t[7];d = r
        }
        t[0] = l,
        t[1] = i,
        t[2] = n,
        t[3] = u,
        t[4] = d
    }
    else d = t[4];
    let p = d,
        m;
    if (t[8] !== i || t[9] !== p || t[10] !== r) {
        let e;
        t[12] !== i || t[13] !== p.length || t[14] !== r ? (e = (e, t) => (0, D.jsx)(S, {
            turn: e,
            turnIndex: t,
            conversation: i,
            hasActiveRequest: r,
            isFinalTurn: t === p.length - 1
        }, e.messages[0].id), t[12] = i, t[13] = p.length, t[14] = r, t[15] = e) : e = t[15], m = p.map(e), t[8] = i, t[9] = p, t[10] = r, t[11] = m
    } else m = t[11];
    let h;
    t[16] === m ? h = t[17] : (h = (0, D.jsx)(`div`, {
        className: `space-y-2`,
        children: m
    }), t[16] = m, t[17] = h);
    let _;
    return t[18] !== i || t[19] !== h ? (_ = (0, D.jsx)(g, {
        conversation: i,
        children: h
    }), t[18] = i, t[19] = h, t[20] = _) : _ = t[20], _
}

function w(e) {
    return e.role !== `root`
}
var T, E, D, O, k = e((() => {
    T = d(), y(), n(), p(), i(), v(), b(), r(), m(), E = t(u()), D = l(), O = E.memo(C)
}));
export {
    k as n, O as t
};
//# sourceMappingURL=15dc2b23-l02ih7ru5yegdzd1.js.map