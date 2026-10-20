import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dnt as n,
    Ew as r,
    JT as i,
    L7 as a,
    N7 as o,
    Ont as s,
    RU as c,
    S8 as l,
    Tw as u,
    aat as d,
    dY as f,
    knt as p,
    lat as m,
    m8 as h,
    nY as g,
    pY as _,
    qJ as v,
    qT as y,
    zU as b
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as x,
    Hn as S,
    Pn as C,
    Rn as w,
    Tn as T,
    Vn as E,
    p as D,
    s as O,
    zn as k
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    aT as A,
    iT as j
} from "./conversation-small-cawdu7il3ha6y70c.js";

function M(e, t) {
    let n = e.metadata == null ? {} : {
        target_metadata: e.metadata
    };
    switch (e.kind) {
        case `app_block`:
            return {
                code_block_type: `app_block`, language: `html`, ...n
            };
        case `chart`:
            return {
                code_block_type: `chart_widget`, language: `recharts`, user_edited_code_block: t, ...n
            }
    }
}
var N = e((() => {}));

function P(e) {
    "use forget";
    let t = (0, F.c)(8),
        {
            reference: n,
            target: r
        } = e,
        i;
    t[0] === n.messageId ? i = t[1] : (i = e => {
        if (e) return v.getTree(e).getMaybeMessage(n.messageId)
    }, t[0] = n.messageId, t[1] = i);
    let a = _(n.clientThreadId, i)?.metadata?.code_blocks?.[n.referenceIndex]?.content !== void 0,
        s = f(n.clientThreadId),
        c;
    return t[2] !== a || t[3] !== n.messageId || t[4] !== n.referenceIndex || t[5] !== s || t[6] !== r ? (c = {
        mutationFn: async e => {
            try {
                await o.safePost(`/conversation/message/code-blocks/feedback`, {
                    requestBody: {
                        message_id: n.messageId,
                        conversation_id: s ?? `unknown`,
                        code_block_index: String(n.referenceIndex),
                        feedback: e,
                        ...M(r, a)
                    },
                    authOption: d.SendIfAvailable
                })
            } catch {}
        }
    }, t[2] = a, t[3] = n.messageId, t[4] = n.referenceIndex, t[5] = s, t[6] = r, t[7] = c) : c = t[7], D(c)
}
var F, I = e((() => {
    F = T(), g(), m(), a(), O(), N()
}));

function L(e) {
    "use forget";
    let t = (0, R.c)(49),
        {
            onClose: n,
            onSubmitted: r,
            reference: i,
            target: a
        } = e,
        o = x(),
        s = (0, z.useId)(),
        [l, d] = (0, z.useState)(``),
        f;
    t[0] !== i || t[1] !== a ? (f = {
        reference: i,
        target: a
    }, t[0] = i, t[1] = a, t[2] = f) : f = t[2];
    let {
        mutate: p
    } = P(f), m;
    t[3] === l ? m = t[4] : (m = l.trim(), t[3] = l, t[4] = m);
    let h = m === ``,
        g;
    t[5] !== l || t[6] !== o || t[7] !== n || t[8] !== r || t[9] !== p ? (g = () => {
        let e = l.trim();
        e !== `` && (p(e), c().success(o.formatMessage(V.toastSubmitted)), d(``), r(), n())
    }, t[5] = l, t[6] = o, t[7] = n, t[8] = r, t[9] = p, t[10] = g) : g = t[10];
    let _ = g,
        v;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, B.jsx)(`div`, {
        className: `flex-1 font-bold`,
        children: (0, B.jsx)(C, {
            ...V.title
        })
    }), t[11] = v) : v = t[11];
    let b;
    t[12] === o ? b = t[13] : (b = o.formatMessage(V.closePopupAriaLabel), t[12] = o, t[13] = b);
    let S;
    t[14] !== n || t[15] !== b ? (S = (0, B.jsxs)(`div`, {
        className: `mb-2 flex items-start justify-between gap-2`,
        children: [v, (0, B.jsx)(u, {
            onClick: n,
            "aria-label": b,
            className: `text-token-text-primary -m-1 -me-2 rounded-full!`
        })]
    }), t[14] = n, t[15] = b, t[16] = S) : S = t[16];
    let w;
    t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, B.jsx)(`div`, {
        className: `text-xs leading-relaxed`,
        children: (0, B.jsx)(C, {
            ...V.description
        })
    }), t[17] = w) : w = t[17];
    let T;
    t[18] === S ? T = t[19] : (T = (0, B.jsxs)(`div`, {
        className: `mx-2 pt-1 pb-3 text-sm`,
        children: [S, w]
    }), t[18] = S, t[19] = T);
    let E;
    t[20] === _ ? E = t[21] : (E = e => {
        e.preventDefault(), _()
    }, t[20] = _, t[21] = E);
    let D;
    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (D = (0, B.jsx)(C, {
        id: `codeBlocks.feedback.additionalLabel`,
        defaultMessage: `Additional feedback`
    }), t[22] = D) : D = t[22];
    let O;
    t[23] === s ? O = t[24] : (O = (0, B.jsx)(`label`, {
        htmlFor: s,
        className: `sr-only`,
        children: D
    }), t[23] = s, t[24] = O);
    let k;
    t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (k = e => d(e.target.value), t[25] = k) : k = t[25];
    let A;
    t[26] === o ? A = t[27] : (A = o.formatMessage(V.placeholder), t[26] = o, t[27] = A);
    let M;
    t[28] !== l || t[29] !== s || t[30] !== A ? (M = (0, B.jsx)(j, {
        autoFocus: !0,
        id: s,
        name: `block-feedback-text`,
        value: l,
        onChange: k,
        placeholder: A,
        rows: 3,
        className: `border-token-border-heavy mt-1 self-stretch rounded-md bg-transparent px-2 py-2 text-sm focus:ring-0 focus:outline-none focus-visible:ring-0`
    }), t[28] = l, t[29] = s, t[30] = A, t[31] = M) : M = t[31];
    let N;
    t[32] === h ? N = t[33] : (N = e => {
        h && e.preventDefault()
    }, t[32] = h, t[33] = N);
    let F;
    t[34] === o ? F = t[35] : (F = o.formatMessage({
        id: `codeBlocks.feedback.submitAriaLabel`,
        defaultMessage: `Submit`
    }), t[34] = o, t[35] = F);
    let I;
    t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, B.jsx)(C, {
        id: `codeBlocks.feedback.submitLabel`,
        defaultMessage: `Give feedback`
    }), t[36] = I) : I = t[36];
    let L;
    t[37] !== h || t[38] !== N || t[39] !== F ? (L = (0, B.jsx)(y, {
        type: `submit`,
        size: `small`,
        className: `mt-2 mb-1 self-center px-4 py-2`,
        visuallyDisabled: h,
        "aria-disabled": h,
        onClick: N,
        "aria-label": F,
        children: I
    }), t[37] = h, t[38] = N, t[39] = F, t[40] = L) : L = t[40];
    let H;
    t[41] !== O || t[42] !== M || t[43] !== L || t[44] !== E ? (H = (0, B.jsx)(`div`, {
        className: `relative flex flex-col justify-between rounded-lg`,
        children: (0, B.jsxs)(`form`, {
            className: `relative flex flex-col px-2`,
            onSubmit: E,
            children: [O, M, L]
        })
    }), t[41] = O, t[42] = M, t[43] = L, t[44] = E, t[45] = H) : H = t[45];
    let U;
    return t[46] !== H || t[47] !== T ? (U = (0, B.jsxs)(B.Fragment, {
        children: [T, H]
    }), t[46] = H, t[47] = T, t[48] = U) : U = t[48], U
}
var R, z, B, V, H = e((() => {
    R = T(), i(), I(), r(), A(), b(), z = t(S()), k(), B = E(), V = w({
        closePopupAriaLabel: {
            id: `codeBlocks.visualizationFeedback.closePopupAriaLabel`,
            defaultMessage: `Close visualization feedback popup`
        },
        description: {
            id: `codeBlocks.visualizationFeedback.description`,
            defaultMessage: `Tell us what’s working and what’s not about this visualization. The more specific the feedback, the better.`
        },
        placeholder: {
            id: `codeBlocks.visualizationFeedback.placeholder`,
            defaultMessage: `What did you like or dislike about this visualization?`
        },
        title: {
            id: `codeBlocks.visualizationFeedback.title`,
            defaultMessage: `This is a visualization, a new feature we’re testing`
        },
        toastSubmitted: {
            id: `codeBlocks.feedback.toastSubmitted`,
            defaultMessage: `Your feedback has been submitted`
        }
    })
}));

function U(e) {
    let t = n.getItem(e);
    if (typeof t != `string`) return !1;
    let r = Date.parse(t);
    return Number.isNaN(r) || Date.now() >= r + G ? (n.removeItem(e), !1) : !0
}

function W() {
    K.set(!0), n.setItem(s.HideVisualizationFeedback, new Date().toISOString())
}
var G, K, q = e((() => {
    h(), p(), G = 10080 * 60 * 1e3, K = l(() => U(s.HideVisualizationFeedback), {
        getServerFallback: () => !1
    })
}));
export {
    H as a, L as i, q as n, K as r, W as t
};
//# sourceMappingURL=58bafdef-e37ztwhy6y06i0v6.js.map