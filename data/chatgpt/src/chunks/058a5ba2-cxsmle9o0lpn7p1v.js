import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    eE as n
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as r,
    Ln as i,
    Nn as a,
    Rn as o,
    wn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function c(e) {
    "use forget";
    let n = (0, l.c)(10),
        {
            message: r,
            isRetryable: i,
            onRetry: o,
            onClose: s
        } = e,
        c;
    n[0] === r ? c = n[1] : (c = (0, u.jsx)(`div`, {
        className: `text-token-text-primary text-sm`,
        children: r
    }), n[0] = r, n[1] = c);
    let f = i ? o : s,
        p = i ? d.tryAgain : d.closePreview,
        m;
    n[2] === p ? m = n[3] : (m = (0, u.jsx)(a, {
        ...p
    }), n[2] = p, n[3] = m);
    let h;
    n[4] !== f || n[5] !== m ? (h = (0, u.jsx)(t, {
        type: `button`,
        color: `secondary`,
        onClick: f,
        children: m
    }), n[4] = f, n[5] = m, n[6] = h) : h = n[6];
    let g;
    return n[7] !== c || n[8] !== h ? (g = (0, u.jsxs)(`div`, {
        className: `flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center`,
        children: [c, h]
    }), n[7] = c, n[8] = h, n[9] = g) : g = n[9], g
}
var l, u, d, f = e((() => {
    l = s(), n(), o(), u = r(), d = i({
        tryAgain: {
            id: `recall.artifact_viewer.preview_try_again`,
            defaultMessage: `Try again`
        },
        closePreview: {
            id: `recall.artifact_viewer.preview_close`,
            defaultMessage: `Close`
        }
    })
}));
export {
    f as n, c as t
};
//# sourceMappingURL=058a5ba2-cxsmle9o0lpn7p1v.js.map