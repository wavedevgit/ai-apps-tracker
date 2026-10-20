import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BZ as n,
    Cc as r,
    JT as i,
    Yet as a,
    bP as o,
    eQ as s,
    fF as c,
    jP as l,
    mtt as u,
    qT as d,
    uF as f,
    utt as p,
    wc as m
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as h,
    Hn as g,
    Qt as _,
    Rn as v,
    Tn as y,
    Vn as b,
    in as x,
    zn as S
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    $4t as C,
    Q4t as w,
    e3t as T,
    r3t as E,
    s3t as D,
    t3t as O
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Sb as k,
    Xm as A,
    Zm as j,
    xb as M
} from "./30901919-jory365vq6ym5crx.js";
import {
    Om as N,
    km as P
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";

function F(e, t) {
    return {
        id: x(),
        author: {
            role: p.System
        },
        content: {
            content_type: a.Text,
            parts: Array.isArray(e) ? e : [e]
        },
        metadata: t
    }
}
var I, L, R = e((() => {
    I = y(), u(), N(), m(), c(), o(), s(), _(), L = (e, t, i, a) => {
        "use forget";
        let o = (0, I.c)(8),
            s;
        o[0] === e ? s = o[1] : (s = f(e), o[0] = e, o[1] = s);
        let c = s,
            u = l(),
            d;
        return o[2] !== c || o[3] !== t || o[4] !== i || o[5] !== a || o[6] !== u ? (d = (e, o) => {
            if (u) return;
            let s = F(`
        The user would like you to focus on a file from an earlier search result as you respond to their prompt: "${i.replaceAll(`"`,``)}". The file's ID is "${t.replaceAll(`"`,``)}".
        When you respond, try to acknowledge that you're focusing on the file if it's not clear from the context. For example, if you mclick the file, you could mention that you've looked at the file.
        `, {
                    exclude_after_next_user_message: !0
                }),
                l = r(c);
            P({
                callsiteId: `request_completion.contextual_answers.followups.use_create_follow_up_turn.1`,
                conversation: c,
                sourceEvent: e,
                promptMessage: n(o, {
                    retrieval_hint_file_data: {
                        id: t,
                        name: i,
                        url: a
                    }
                }),
                completionMetadata: l ? {
                    conversationMode: l
                } : void 0,
                appendMessages: [s]
            })
        }, o[2] = c, o[3] = t, o[4] = i, o[5] = a, o[6] = u, o[7] = d) : d = o[7], d
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
        l = h(),
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
    let g;
    return t[10] !== s || t[11] !== p || t[12] !== m ? (g = (0, G.jsx)(w, {
        for: q,
        onOpenChange: s,
        withProps: p,
        children: m
    }), t[10] = s, t[11] = p, t[12] = m, t[13] = g) : g = t[13], g
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
    return t[3] !== n || t[4] !== i ? (a = (0, G.jsx)(E, {
        icon: M,
        onClick: i,
        children: n
    }), t[3] = n, t[4] = i, t[5] = a) : a = t[5], a
}

function V(e) {
    "use forget";
    let t = (0, U.c)(15),
        {
            sendReply: n
        } = e,
        r = h(),
        [i, a] = (0, W.useState)(``),
        o;
    t[0] !== n || t[1] !== i ? (o = e => {
        e.preventDefault(), n(e, i), a(``)
    }, t[0] = n, t[1] = i, t[2] = o) : o = t[2];
    let s;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (s = e => a(e.target.value), t[3] = s) : s = t[3];
    let c;
    t[4] === r ? c = t[5] : (c = r.formatMessage({
        id: `tJa6v0`,
        defaultMessage: `Ask about this…`
    }), t[4] = r, t[5] = c);
    let l;
    t[6] !== c || t[7] !== i ? (l = (0, G.jsx)(`input`, {
        type: `text`,
        onChange: s,
        onKeyDown: H,
        className: `text-token-text-primary w-full flex-1 border-none bg-transparent p-0 text-sm font-normal ring-0 focus:border-none focus:shadow-none focus:ring-0`,
        placeholder: c,
        value: i
    }), t[6] = c, t[7] = i, t[8] = l) : l = t[8];
    let u = !i,
        f;
    t[9] === u ? f = t[10] : (f = (0, G.jsx)(d, {
        className: `flex-0`,
        disabled: u,
        icon: A,
        color: `primary`,
        size: `small`,
        type: `submit`
    }), t[9] = u, t[10] = f);
    let p;
    return t[11] !== o || t[12] !== l || t[13] !== f ? (p = (0, G.jsxs)(`form`, {
        onSubmit: o,
        className: `border-token-border-default flex flex-1 items-center gap-2 rounded-full border border-solid px-4 py-2 pe-2`,
        children: [l, f]
    }), t[11] = o, t[12] = l, t[13] = f, t[14] = p) : p = t[14], p
}

function H(e) {
    return e.stopPropagation()
}
var U, W, G, K, q, J, Y = e((() => {
    U = y(), i(), k(), j(), C(), D(), W = t(g()), S(), R(), G = b(), K = v({
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
            r = h(),
            i = (0, W.use)(O),
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
        return t[8] !== s || t[9] !== c ? (l = (0, G.jsxs)(T, {
            className: `min-w-[200px]`,
            children: [s, c]
        }), t[8] = s, t[9] = c, t[10] = l) : l = t[10], l
    }, {
        prefetch: async () => {},
        skipSuspense: () => {}
    }), J = v({
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
//# sourceMappingURL=25e69e8b-fbc5mkxakth6myx6.js.map