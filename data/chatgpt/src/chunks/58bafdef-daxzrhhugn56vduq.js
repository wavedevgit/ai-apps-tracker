import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as n,
    AJ as r,
    AT as i,
    Ait as a,
    B6 as o,
    J6 as s,
    Pit as c,
    Qtt as l,
    VJ as u,
    a7 as d,
    cw as f,
    ent as p,
    fU as m,
    kT as h,
    l7 as g,
    pU as _,
    sw as v,
    xJ as y,
    zJ as b
} from "./4813494d-cb22y2w19zwyshmt.js";
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
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    nT as A,
    rT as j
} from "./conversation-small-fym1zmu9zimymmm1.js";

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
        if (e) return y.getTree(e).getMaybeMessage(n.messageId)
    }, t[0] = n.messageId, t[1] = i);
    let o = u(n.clientThreadId, i)?.metadata?.code_blocks?.[n.referenceIndex]?.content !== void 0,
        s = b(n.clientThreadId),
        c;
    return t[2] !== o || t[3] !== n.messageId || t[4] !== n.referenceIndex || t[5] !== s || t[6] !== r ? (c = {
        mutationFn: async e => {
            try {
                await d.safePost(`/conversation/message/code-blocks/feedback`, {
                    requestBody: {
                        message_id: n.messageId,
                        conversation_id: s ?? `unknown`,
                        code_block_index: String(n.referenceIndex),
                        feedback: e,
                        ...M(r, o)
                    },
                    authOption: a.SendIfAvailable
                })
            } catch {}
        }
    }, t[2] = o, t[3] = n.messageId, t[4] = n.referenceIndex, t[5] = s, t[6] = r, t[7] = c) : c = t[7], E(c)
}
var F, I = e((() => {
    F = O(), r(), c(), g(), D(), N()
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
        o = k(),
        s = (0, z.useId)(),
        [c, l] = (0, z.useState)(``),
        u;
    t[0] !== i || t[1] !== a ? (u = {
        reference: i,
        target: a
    }, t[0] = i, t[1] = a, t[2] = u) : u = t[2];
    let {
        mutate: d
    } = P(u), f;
    t[3] === c ? f = t[4] : (f = c.trim(), t[3] = c, t[4] = f);
    let p = f === ``,
        g;
    t[5] !== c || t[6] !== o || t[7] !== n || t[8] !== r || t[9] !== d ? (g = () => {
        let e = c.trim();
        e !== `` && (d(e), m().success(o.formatMessage(V.toastSubmitted)), l(``), r(), n())
    }, t[5] = c, t[6] = o, t[7] = n, t[8] = r, t[9] = d, t[10] = g) : g = t[10];
    let _ = g,
        y;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, B.jsx)(`div`, {
        className: `flex-1 font-bold`,
        children: (0, B.jsx)(C, {
            ...V.title
        })
    }), t[11] = y) : y = t[11];
    let b;
    t[12] === o ? b = t[13] : (b = o.formatMessage(V.closePopupAriaLabel), t[12] = o, t[13] = b);
    let x;
    t[14] !== n || t[15] !== b ? (x = (0, B.jsxs)(`div`, {
        className: `mb-2 flex items-start justify-between gap-2`,
        children: [y, (0, B.jsx)(v, {
            onClick: n,
            "aria-label": b,
            className: `text-token-text-primary -m-1 -me-2 rounded-full!`
        })]
    }), t[14] = n, t[15] = b, t[16] = x) : x = t[16];
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
    t[20] === _ ? T = t[21] : (T = e => {
        e.preventDefault(), _()
    }, t[20] = _, t[21] = T);
    let E;
    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, B.jsx)(C, {
        id: `codeBlocks.feedback.additionalLabel`,
        defaultMessage: `Additional feedback`
    }), t[22] = E) : E = t[22];
    let D;
    t[23] === s ? D = t[24] : (D = (0, B.jsx)(`label`, {
        htmlFor: s,
        className: `sr-only`,
        children: E
    }), t[23] = s, t[24] = D);
    let O;
    t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (O = e => l(e.target.value), t[25] = O) : O = t[25];
    let j;
    t[26] === o ? j = t[27] : (j = o.formatMessage(V.placeholder), t[26] = o, t[27] = j);
    let M;
    t[28] !== c || t[29] !== s || t[30] !== j ? (M = (0, B.jsx)(A, {
        autoFocus: !0,
        id: s,
        name: `block-feedback-text`,
        value: c,
        onChange: O,
        placeholder: j,
        rows: 3,
        className: `border-token-border-heavy mt-1 self-stretch rounded-md bg-transparent px-2 py-2 text-sm focus:ring-0 focus:outline-none focus-visible:ring-0`
    }), t[28] = c, t[29] = s, t[30] = j, t[31] = M) : M = t[31];
    let N;
    t[32] === p ? N = t[33] : (N = e => {
        p && e.preventDefault()
    }, t[32] = p, t[33] = N);
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
    t[37] !== p || t[38] !== N || t[39] !== F ? (L = (0, B.jsx)(h, {
        type: `submit`,
        size: `small`,
        className: `mt-2 mb-1 self-center px-4 py-2`,
        visuallyDisabled: p,
        "aria-disabled": p,
        onClick: N,
        "aria-label": F,
        children: I
    }), t[37] = p, t[38] = N, t[39] = F, t[40] = L) : L = t[40];
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
    R = O(), i(), I(), f(), j(), _(), z = t(T()), w(), B = x(), V = S({
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
    let t = l.getItem(e);
    if (typeof t != `string`) return !1;
    let n = Date.parse(t);
    return Number.isNaN(n) || Date.now() >= n + G ? (l.removeItem(e), !1) : !0
}

function W() {
    K.set(!0), l.setItem(n.HideVisualizationFeedback, new Date().toISOString())
}
var G, K, q = e((() => {
    o(), p(), G = 10080 * 60 * 1e3, K = s(() => U(n.HideVisualizationFeedback), {
        getServerFallback: () => !1
    })
}));
export {
    H as a, L as i, q as n, K as r, W as t
};
//# sourceMappingURL=58bafdef-daxzrhhugn56vduq.js.map