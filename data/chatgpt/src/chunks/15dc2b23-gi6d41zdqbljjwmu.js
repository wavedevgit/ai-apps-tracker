import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $r as n,
    JJ as r,
    Kr as i,
    nY as a,
    rX as o,
    rY as s,
    tX as c
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as l,
    Vn as u,
    wn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    aVn as f,
    fQt as p,
    gQt as m,
    oVn as h
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    T_ as g,
    di as _,
    fi as v,
    w_ as y
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
import {
    a as b,
    t as x
} from "./05d28061-b0anzznbj9li3ddl.js";

function S({
    turn: e,
    turnIndex: t,
    conversation: n,
    hasActiveRequest: r,
    isFinalTurn: i
}) {
    let a = m(e),
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
            hasActiveRequest: o,
            conversation: s,
            allowOrphanMessages: l,
            preferProvidedMessages: u
        } = e,
        d;
    if (t[0] !== l || t[1] !== s || t[2] !== n || t[3] !== u) {
        bb0: {
            let e = a(s.id);
            if (e) {
                let t = [];
                for (let i of n) {
                    let n = i,
                        a = r.findMessage(e, e => i.id === e.id);
                    !a && !l || (a && !u && (n = a), t = c(t, n))
                }
                d = t;
                break bb0
            }
            let o;
            if (t[5] !== s || t[6] !== n) {
                let {
                    allConversationMessages: e,
                    threadResponse: r
                } = x(n);
                h(s, r);
                let a = [];
                for (let t of e) i(s, t.message), a = c(a, t.message);
                o = a.filter(w), t[5] = s, t[6] = n, t[7] = o
            } else o = t[7];d = o
        }
        t[0] = l,
        t[1] = s,
        t[2] = n,
        t[3] = u,
        t[4] = d
    }
    else d = t[4];
    let f = d,
        p;
    if (t[8] !== s || t[9] !== f || t[10] !== o) {
        let e;
        t[12] !== s || t[13] !== f.length || t[14] !== o ? (e = (e, t) => (0, D.jsx)(S, {
            turn: e,
            turnIndex: t,
            conversation: s,
            hasActiveRequest: o,
            isFinalTurn: t === f.length - 1
        }, e.messages[0].id), t[12] = s, t[13] = f.length, t[14] = o, t[15] = e) : e = t[15], p = f.map(e), t[8] = s, t[9] = f, t[10] = o, t[11] = p
    } else p = t[11];
    let m;
    t[16] === p ? m = t[17] : (m = (0, D.jsx)(`div`, {
        className: `space-y-2`,
        children: p
    }), t[16] = p, t[17] = m);
    let g;
    return t[18] !== s || t[19] !== m ? (g = (0, D.jsx)(y, {
        conversation: s,
        children: m
    }), t[18] = s, t[19] = m, t[20] = g) : g = t[20], g
}

function w(e) {
    return e.role !== `root`
}
var T, E, D, O, k = e((() => {
    T = d(), g(), n(), f(), o(), v(), b(), s(), p(), E = t(u()), D = l(), O = E.memo(C)
}));
export {
    k as n, O as t
};
//# sourceMappingURL=15dc2b23-gi6d41zdqbljjwmu.js.map