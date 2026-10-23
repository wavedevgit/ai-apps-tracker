import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    EP as r,
    Ec as i,
    LP as a,
    QZ as o,
    RZ as s,
    Tc as c,
    Zet as l,
    eE as u,
    ftt as d,
    gF as f,
    gtt as p,
    vF as m
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as h,
    Ln as g,
    Rn as _,
    Vn as v,
    Zt as y,
    rn as b,
    wn as x,
    zn as S
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    i3t as C,
    n3t as w,
    o3t as T,
    r3t as E,
    t3t as D,
    u3t as O
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Jm as k,
    Ym as A,
    bb as j,
    yb as M
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Mm as N,
    Nm as P
} from "./8b34dbc2-lmwubajnld74ksfm.js";

function F(e, t) {
    return {
        id: b(),
        author: {
            role: d.System
        },
        content: {
            content_type: l.Text,
            parts: Array.isArray(e) ? e : [e]
        },
        metadata: t
    }
}
var I, L, R = e((() => {
    I = x(), p(), N(), i(), m(), r(), o(), y(), L = (e, t, n, r) => {
        "use forget";
        let i = (0, I.c)(8),
            o;
        i[0] === e ? o = i[1] : (o = f(e), i[0] = e, i[1] = o);
        let l = o,
            u = a(),
            d;
        return i[2] !== l || i[3] !== t || i[4] !== n || i[5] !== r || i[6] !== u ? (d = (e, i) => {
            if (u) return;
            let a = F(`
        The user would like you to focus on a file from an earlier search result as you respond to their prompt: "${n.replaceAll(`"`,``)}". The file's ID is "${t.replaceAll(`"`,``)}".
        When you respond, try to acknowledge that you're focusing on the file if it's not clear from the context. For example, if you mclick the file, you could mention that you've looked at the file.
        `, {
                    exclude_after_next_user_message: !0
                }),
                o = c(l);
            P({
                callsiteId: `request_completion.contextual_answers.followups.use_create_follow_up_turn.1`,
                conversation: l,
                sourceEvent: e,
                promptMessage: s(i, {
                    retrieval_hint_file_data: {
                        id: t,
                        name: n,
                        url: r
                    }
                }),
                completionMetadata: o ? {
                    conversationMode: o
                } : void 0,
                appendMessages: [a]
            })
        }, i[2] = l, i[3] = t, i[4] = n, i[5] = r, i[6] = u, i[7] = d) : d = i[7], d
    }
}));

function z(e) {
    "use forget";
    let t = (0, U.c)(14),
        {
            className: n,
            clientThreadId: r,
            fileCloudDocUrl: i,
            fileId: a,
            fileName: o,
            setIsFollowupMenuOpen: s,
            trackFileSourceFollowup: c
        } = e,
        l = S(),
        u = L(r, a, o, i),
        d;
    t[0] !== u || t[1] !== s || t[2] !== c ? (d = (e, t) => {
        t.length && (u(e, t), s(!1), c?.())
    }, t[0] = u, t[1] = s, t[2] = c, t[3] = d) : d = t[3];
    let f = d,
        p;
    t[4] === f ? p = t[5] : (p = {
        sendReply: f
    }, t[4] = f, t[5] = p);
    let m;
    t[6] !== n || t[7] !== o || t[8] !== l ? (m = e => (0, G.jsx)(`button`, {
        ...e,
        type: `button`,
        "aria-label": l.formatMessage(K.fileFollowupMenuTriggerLabel, {
            fileName: o
        }),
        className: n == null ? `cursor-pointer appearance-none border-0` : `cursor-pointer appearance-none border-0 ${n}`,
        children: (0, G.jsx)(M, {
            className: `icon`
        })
    }), t[6] = n, t[7] = o, t[8] = l, t[9] = m) : m = t[9];
    let h;
    return t[10] !== s || t[11] !== p || t[12] !== m ? (h = (0, G.jsx)(D, {
        for: q,
        onOpenChange: s,
        withProps: p,
        children: m
    }), t[10] = s, t[11] = p, t[12] = m, t[13] = h) : h = t[13], h
}

function B(e) {
    "use forget";
    let t = (0, U.c)(6),
        {
            suggestedText: n,
            sendReply: r
        } = e,
        i;
    t[0] !== r || t[1] !== n ? (i = e => r(e, n), t[0] = r, t[1] = n, t[2] = i) : i = t[2];
    let a;
    return t[3] !== n || t[4] !== i ? (a = (0, G.jsx)(T, {
        icon: M,
        onClick: i,
        children: n
    }), t[3] = n, t[4] = i, t[5] = a) : a = t[5], a
}

function V(e) {
    "use forget";
    let t = (0, U.c)(15),
        {
            sendReply: r
        } = e,
        i = S(),
        [a, o] = (0, W.useState)(``),
        s;
    t[0] !== r || t[1] !== a ? (s = e => {
        e.preventDefault(), r(e, a), o(``)
    }, t[0] = r, t[1] = a, t[2] = s) : s = t[2];
    let c;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = e => o(e.target.value), t[3] = c) : c = t[3];
    let l;
    t[4] === i ? l = t[5] : (l = i.formatMessage({
        id: `tJa6v0`,
        defaultMessage: `Ask about this…`
    }), t[4] = i, t[5] = l);
    let u;
    t[6] !== l || t[7] !== a ? (u = (0, G.jsx)(`input`, {
        type: `text`,
        onChange: c,
        onKeyDown: H,
        className: `text-token-text-primary w-full flex-1 border-none bg-transparent p-0 text-sm font-normal ring-0 focus:border-none focus:shadow-none focus:ring-0`,
        placeholder: l,
        value: a
    }), t[6] = l, t[7] = a, t[8] = u) : u = t[8];
    let d = !a,
        f;
    t[9] === d ? f = t[10] : (f = (0, G.jsx)(n, {
        className: `flex-0`,
        disabled: d,
        icon: k,
        color: `primary`,
        size: `small`,
        type: `submit`
    }), t[9] = d, t[10] = f);
    let p;
    return t[11] !== s || t[12] !== u || t[13] !== f ? (p = (0, G.jsxs)(`form`, {
        onSubmit: s,
        className: `border-token-border-default flex flex-1 items-center gap-2 rounded-full border border-solid px-4 py-2 pe-2`,
        children: [u, f]
    }), t[11] = s, t[12] = u, t[13] = f, t[14] = p) : p = t[14], p
}

function H(e) {
    return e.stopPropagation()
}
var U, W, G, K, q, J, Y = e((() => {
    U = x(), u(), j(), A(), w(), O(), W = t(v()), _(), R(), G = h(), K = g({
        fileFollowupMenuTriggerLabel: {
            id: `WObYaw`,
            defaultMessage: `Open follow-up menu for {fileName}`
        }
    }), q = Object.assign(function(e) {
        "use forget";
        let t = (0, U.c)(11),
            {
                sendReply: n
            } = e,
            r = S(),
            i = (0, W.use)(C),
            a;
        t[0] !== i || t[1] !== n ? (a = (e, t) => {
            t.length && (n(e, t), i?.())
        }, t[0] = i, t[1] = n, t[2] = a) : a = t[2];
        let o = a,
            s;
        t[3] !== r || t[4] !== n ? (s = Object.values(J).map(e => (0, G.jsx)(B, {
            sendReply: n,
            suggestedText: r.formatMessage(e)
        }, e.defaultMessage)), t[3] = r, t[4] = n, t[5] = s) : s = t[5];
        let c;
        t[6] === o ? c = t[7] : (c = (0, G.jsx)(`div`, {
            className: `mx-1.5 flex cursor-pointer flex-row items-center gap-2 p-2.5 px-3 py-2.5 text-sm`,
            children: (0, G.jsx)(V, {
                sendReply: o
            })
        }), t[6] = o, t[7] = c);
        let l;
        return t[8] !== s || t[9] !== c ? (l = (0, G.jsxs)(E, {
            className: `min-w-[200px]`,
            children: [s, c]
        }), t[8] = s, t[9] = c, t[10] = l) : l = t[10], l
    }, {
        prefetch: async () => {},
        skipSuspense: () => {}
    }), J = g({
        fileFollowupSuggestionTellMeMore: {
            id: `skmNc0`,
            defaultMessage: `Tell me more about this.`
        },
        fileFollowupSuggestionSummarize: {
            id: `BiNEEG`,
            defaultMessage: `Summarize this.`
        }
    })
}));
export {
    L as a, R as i, V as n, Y as r, z as t
};
//# sourceMappingURL=25e69e8b-gekbvrju0bgrvxn8.js.map