import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $r as n,
    Kr as r,
    eX as i,
    nX as a,
    nY as o,
    qJ as s,
    tY as c
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as l,
    Vn as u,
    wn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    lQt as f,
    nVn as p,
    pQt as m,
    rVn as h
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    T_ as g,
    di as _,
    fi as v,
    w_ as y
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    a as b,
    t as x
} from "./05d28061-gcqou0c9m5id19tk.js";

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
            hasActiveRequest: a,
            conversation: o,
            allowOrphanMessages: l,
            preferProvidedMessages: u
        } = e,
        d;
    if (t[0] !== l || t[1] !== o || t[2] !== n || t[3] !== u) {
        bb0: {
            let e = c(o.id);
            if (e) {
                let t = [];
                for (let r of n) {
                    let n = r,
                        a = s.findMessage(e, e => r.id === e.id);
                    !a && !l || (a && !u && (n = a), t = i(t, n))
                }
                d = t;
                break bb0
            }
            let a;
            if (t[5] !== o || t[6] !== n) {
                let {
                    allConversationMessages: e,
                    threadResponse: s
                } = x(n);
                h(o, s);
                let c = [];
                for (let t of e) r(o, t.message), c = i(c, t.message);
                a = c.filter(w), t[5] = o, t[6] = n, t[7] = a
            } else a = t[7];d = a
        }
        t[0] = l,
        t[1] = o,
        t[2] = n,
        t[3] = u,
        t[4] = d
    }
    else d = t[4];
    let f = d,
        p;
    if (t[8] !== o || t[9] !== f || t[10] !== a) {
        let e;
        t[12] !== o || t[13] !== f.length || t[14] !== a ? (e = (e, t) => (0, D.jsx)(S, {
            turn: e,
            turnIndex: t,
            conversation: o,
            hasActiveRequest: a,
            isFinalTurn: t === f.length - 1
        }, e.messages[0].id), t[12] = o, t[13] = f.length, t[14] = a, t[15] = e) : e = t[15], p = f.map(e), t[8] = o, t[9] = f, t[10] = a, t[11] = p
    } else p = t[11];
    let m;
    t[16] === p ? m = t[17] : (m = (0, D.jsx)(`div`, {
        className: `space-y-2`,
        children: p
    }), t[16] = p, t[17] = m);
    let g;
    return t[18] !== o || t[19] !== m ? (g = (0, D.jsx)(y, {
        conversation: o,
        children: m
    }), t[18] = o, t[19] = m, t[20] = g) : g = t[20], g
}

function w(e) {
    return e.role !== `root`
}
var T, E, D, O, k = e((() => {
    T = d(), g(), n(), p(), a(), v(), b(), o(), f(), E = t(u()), D = l(), O = E.memo(C)
}));
export {
    k as n, O as t
};
//# sourceMappingURL=15dc2b23-dnpc6i964qlpyy4w.js.map