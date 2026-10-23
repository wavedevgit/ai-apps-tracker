import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as n,
    GJ as r,
    QY as i,
    eX as a,
    eY as o,
    ei as s,
    qr as c
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as l,
    Vn as u,
    wn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    eHn as f,
    lQt as p,
    pQt as m,
    tHn as h
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    D_ as g,
    O_ as _,
    di as v,
    fi as y
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    a as b,
    t as x
} from "./05d28061-lit11g3m3ly3h2ce.js";

function S({
    turn: e,
    turnIndex: t,
    conversation: n,
    hasActiveRequest: r,
    isFinalTurn: i
}) {
    let a = m(e),
        o = a ? e.messages.at(-1)?.metadata?.turn_exchange_id : void 0;
    return (0, D.jsx)(v, {
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
            messages: a,
            hasActiveRequest: o,
            conversation: s,
            allowOrphanMessages: l,
            preferProvidedMessages: u
        } = e,
        d;
    if (t[0] !== l || t[1] !== s || t[2] !== a || t[3] !== u) {
        bb0: {
            let e = n(s.id);
            if (e) {
                let t = [];
                for (let n of a) {
                    let a = n,
                        o = r.findMessage(e, e => n.id === e.id);
                    !o && !l || (o && !u && (a = o), t = i(t, a))
                }
                d = t;
                break bb0
            }
            let o;
            if (t[5] !== s || t[6] !== a) {
                let {
                    allConversationMessages: e,
                    threadResponse: n
                } = x(a);
                h(s, n);
                let r = [];
                for (let t of e) c(s, t.message), r = i(r, t.message);
                o = r.filter(w), t[5] = s, t[6] = a, t[7] = o
            } else o = t[7];d = o
        }
        t[0] = l,
        t[1] = s,
        t[2] = a,
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
    let _;
    return t[18] !== s || t[19] !== m ? (_ = (0, D.jsx)(g, {
        conversation: s,
        children: m
    }), t[18] = s, t[19] = m, t[20] = _) : _ = t[20], _
}

function w(e) {
    return e.role !== `root`
}
var T, E, D, O, k = e((() => {
    T = d(), _(), s(), f(), a(), y(), b(), o(), p(), E = t(u()), D = l(), O = E.memo(C)
}));
export {
    k as n, O as t
};
//# sourceMappingURL=15dc2b23-c2my8damkitrwjn0.js.map