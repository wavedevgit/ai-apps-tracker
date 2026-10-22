import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Art as n,
    B0 as r,
    CN as i,
    J5 as a,
    K0 as o,
    LU as s,
    dC as c,
    eY as l,
    fC as u,
    jrt as d,
    krt as f,
    l7 as p,
    lY as m,
    u7 as h,
    wN as g,
    zU as _
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as v,
    Rn as y,
    wn as b,
    zn as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Fbt as S,
    Ibt as C,
    _L as w,
    vL as T
} from "./conversation-small-fh0oqifngkf5rvl1.js";

function E(e) {
    "use forget";
    let t = (0, D.c)(18),
        {
            code: r,
            messageId: i,
            clientThreadId: s,
            disabled: l,
            className: u,
            withText: f
        } = e,
        h = f !== void 0 && f,
        v = x(),
        y = _(),
        b = a(o),
        C = m(s),
        w;
    t[0] === v ? w = t[1] : (w = v.formatMessage({
        id: `CodeBlockCopyButton.copyCode`,
        defaultMessage: `Copy code`
    }), t[0] = v, t[1] = w);
    let E = w,
        k;
    t[2] !== r || t[3] !== b || t[4] !== i || t[5] !== C || t[6] !== y ? (k = e => {
        let t = {
            "text/plain": r
        };
        n.count(d.CODE_BLOCKS, `chatgpt_code_block_copy_button_clicked`), c(t, y, e), !(b || C == null || i == null) && T({
            source: `mouse`,
            type: `copy`,
            messageId: i,
            serverThreadId: C,
            selectedText: r,
            location: `code-block`,
            contentType: `code`
        })
    }, t[2] = r, t[3] = b, t[4] = i, t[5] = C, t[6] = y, t[7] = k) : k = t[7];
    let A = g(k),
        j = !h,
        M = h ? E : void 0,
        N = h ? `h-9 rounded-lg px-3 whitespace-nowrap` : `size-9 rounded-full px-2`,
        P = l && `cursor-not-allowed opacity-50 hover:bg-transparent`,
        F;
    t[8] !== u || t[9] !== N || t[10] !== P ? (F = p(u, `py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10`, N, P), t[8] = u, t[9] = N, t[10] = P, t[11] = F) : F = t[11];
    let I;
    return t[12] !== l || t[13] !== A || t[14] !== j || t[15] !== M || t[16] !== F ? (I = (0, O.jsx)(S, {
        onCopy: A,
        iconClassName: `icon-md`,
        disabled: l,
        iconOnly: j,
        buttonText: M,
        className: F
    }), t[12] = l, t[13] = A, t[14] = j, t[15] = M, t[16] = F, t[17] = I) : I = t[17], I
}
var D, O, k = e((() => {
    D = b(), C(), r(), w(), t(), l(), s(), u(), f(), i(), h(), y(), O = v()
}));
export {
    k as n, E as t
};
//# sourceMappingURL=2ab5aa6c-d76l9jkbg267z3iv.js.map