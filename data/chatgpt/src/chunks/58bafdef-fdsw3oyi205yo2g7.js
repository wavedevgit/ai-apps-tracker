import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A8 as r,
    GJ as i,
    I7 as a,
    IU as o,
    LU as s,
    M7 as c,
    Mw as l,
    Pat as u,
    R8 as d,
    Rat as f,
    dY as p,
    eE as m,
    eY as h,
    irt as g,
    jw as _,
    lY as v,
    nrt as y,
    rrt as b
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as x,
    Ln as S,
    Nn as C,
    Rn as w,
    Vn as T,
    p as E,
    s as D,
    wn as O,
    zn as k
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    aT as A,
    oT as j
} from "./conversation-small-bcbq46iub1p0ca1t.js";

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
        a;
    t[0] === n.messageId ? a = t[1] : (a = e => {
        if (e) return i.getTree(e).getMaybeMessage(n.messageId)
    }, t[0] = n.messageId, t[1] = a);
    let o = p(n.clientThreadId, a)?.metadata?.code_blocks?.[n.referenceIndex]?.content !== void 0,
        s = v(n.clientThreadId),
        l;
    return t[2] !== o || t[3] !== n.messageId || t[4] !== n.referenceIndex || t[5] !== s || t[6] !== r ? (l = {
        mutationFn: async e => {
            try {
                await c.safePost(`/conversation/message/code-blocks/feedback`, {
                    requestBody: {
                        message_id: n.messageId,
                        conversation_id: s ?? `unknown`,
                        code_block_index: String(n.referenceIndex),
                        feedback: e,
                        ...M(r, o)
                    },
                    authOption: u.SendIfAvailable
                })
            } catch {}
        }
    }, t[2] = o, t[3] = n.messageId, t[4] = n.referenceIndex, t[5] = s, t[6] = r, t[7] = l) : l = t[7], E(l)
}
var F, I = e((() => {
    F = O(), h(), f(), a(), D(), N()
}));

function L(e) {
    "use forget";
    let t = (0, R.c)(49),
        {
            onClose: r,
            onSubmitted: i,
            reference: a,
            target: s
        } = e,
        c = k(),
        l = (0, z.useId)(),
        [u, d] = (0, z.useState)(``),
        f;
    t[0] !== a || t[1] !== s ? (f = {
        reference: a,
        target: s
    }, t[0] = a, t[1] = s, t[2] = f) : f = t[2];
    let {
        mutate: p
    } = P(f), m;
    t[3] === u ? m = t[4] : (m = u.trim(), t[3] = u, t[4] = m);
    let h = m === ``,
        g;
    t[5] !== u || t[6] !== c || t[7] !== r || t[8] !== i || t[9] !== p ? (g = () => {
        let e = u.trim();
        e !== `` && (p(e), o().success(c.formatMessage(V.toastSubmitted)), d(``), i(), r())
    }, t[5] = u, t[6] = c, t[7] = r, t[8] = i, t[9] = p, t[10] = g) : g = t[10];
    let v = g,
        y;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, B.jsx)(`div`, {
        className: `flex-1 font-bold`,
        children: (0, B.jsx)(C, {
            ...V.title
        })
    }), t[11] = y) : y = t[11];
    let b;
    t[12] === c ? b = t[13] : (b = c.formatMessage(V.closePopupAriaLabel), t[12] = c, t[13] = b);
    let x;
    t[14] !== r || t[15] !== b ? (x = (0, B.jsxs)(`div`, {
        className: `mb-2 flex items-start justify-between gap-2`,
        children: [y, (0, B.jsx)(_, {
            onClick: r,
            "aria-label": b,
            className: `text-token-text-primary -m-1 -me-2 rounded-full!`
        })]
    }), t[14] = r, t[15] = b, t[16] = x) : x = t[16];
    let S;
    t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, B.jsx)(`div`, {
        className: `text-xs leading-relaxed`,
        children: (0, B.jsx)(C, {
            ...V.description
        })
    }), t[17] = S) : S = t[17];
    let w;
    t[18] === x ? w = t[19] : (w = (0, B.jsxs)(`div`, {
        className: `mx-2 pt-1 pb-3 text-sm`,
        children: [x, S]
    }), t[18] = x, t[19] = w);
    let T;
    t[20] === v ? T = t[21] : (T = e => {
        e.preventDefault(), v()
    }, t[20] = v, t[21] = T);
    let E;
    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, B.jsx)(C, {
        id: `codeBlocks.feedback.additionalLabel`,
        defaultMessage: `Additional feedback`
    }), t[22] = E) : E = t[22];
    let D;
    t[23] === l ? D = t[24] : (D = (0, B.jsx)(`label`, {
        htmlFor: l,
        className: `sr-only`,
        children: E
    }), t[23] = l, t[24] = D);
    let O;
    t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (O = e => d(e.target.value), t[25] = O) : O = t[25];
    let j;
    t[26] === c ? j = t[27] : (j = c.formatMessage(V.placeholder), t[26] = c, t[27] = j);
    let M;
    t[28] !== u || t[29] !== l || t[30] !== j ? (M = (0, B.jsx)(A, {
        autoFocus: !0,
        id: l,
        name: `block-feedback-text`,
        value: u,
        onChange: O,
        placeholder: j,
        rows: 3,
        className: `border-token-border-heavy mt-1 self-stretch rounded-md bg-transparent px-2 py-2 text-sm focus:ring-0 focus:outline-none focus-visible:ring-0`
    }), t[28] = u, t[29] = l, t[30] = j, t[31] = M) : M = t[31];
    let N;
    t[32] === h ? N = t[33] : (N = e => {
        h && e.preventDefault()
    }, t[32] = h, t[33] = N);
    let F;
    t[34] === c ? F = t[35] : (F = c.formatMessage({
        id: `codeBlocks.feedback.submitAriaLabel`,
        defaultMessage: `Submit`
    }), t[34] = c, t[35] = F);
    let I;
    t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, B.jsx)(C, {
        id: `codeBlocks.feedback.submitLabel`,
        defaultMessage: `Give feedback`
    }), t[36] = I) : I = t[36];
    let L;
    t[37] !== h || t[38] !== N || t[39] !== F ? (L = (0, B.jsx)(n, {
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
    t[41] !== D || t[42] !== M || t[43] !== L || t[44] !== T ? (H = (0, B.jsx)(`div`, {
        className: `relative flex flex-col justify-between rounded-lg`,
        children: (0, B.jsxs)(`form`, {
            className: `relative flex flex-col px-2`,
            onSubmit: T,
            children: [D, M, L]
        })
    }), t[41] = D, t[42] = M, t[43] = L, t[44] = T, t[45] = H) : H = t[45];
    let U;
    return t[46] !== H || t[47] !== w ? (U = (0, B.jsxs)(B.Fragment, {
        children: [w, H]
    }), t[46] = H, t[47] = w, t[48] = U) : U = t[48], U
}
var R, z, B, V, H = e((() => {
    R = O(), m(), I(), l(), j(), s(), z = t(T()), w(), B = x(), V = S({
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
    let t = y.getItem(e);
    if (typeof t != `string`) return !1;
    let n = Date.parse(t);
    return Number.isNaN(n) || Date.now() >= n + G ? (y.removeItem(e), !1) : !0
}

function W() {
    K.set(!0), y.setItem(b.HideVisualizationFeedback, new Date().toISOString())
}
var G, K, q = e((() => {
    r(), g(), G = 10080 * 60 * 1e3, K = d(() => U(b.HideVisualizationFeedback), {
        getServerFallback: () => !1
    })
}));
export {
    H as a, L as i, q as n, K as r, W as t
};
//# sourceMappingURL=58bafdef-fdsw3oyi205yo2g7.js.map