import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    B0 as n,
    CN as r,
    Irt as i,
    K0 as a,
    K5 as o,
    LU as s,
    Lrt as c,
    Rrt as l,
    dC as u,
    eY as d,
    fC as f,
    j5 as p,
    lY as m,
    q5 as h,
    wN as g,
    zU as _
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as v,
    Rn as y,
    wn as b,
    zn as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Abt as S,
    _L as C,
    jbt as w,
    vL as T
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function E(e) {
    "use forget";
    let t = (0, D.c)(18),
        {
            code: n,
            messageId: r,
            clientThreadId: i,
            disabled: s,
            className: d,
            withText: f
        } = e,
        h = f !== void 0 && f,
        v = x(),
        y = _(),
        b = p(a),
        C = m(i),
        w;
    t[0] === v ? w = t[1] : (w = v.formatMessage({
        id: `CodeBlockCopyButton.copyCode`,
        defaultMessage: `Copy code`
    }), t[0] = v, t[1] = w);
    let E = w,
        k;
    t[2] !== n || t[3] !== b || t[4] !== r || t[5] !== C || t[6] !== y ? (k = e => {
        let t = {
            "text/plain": n
        };
        c.count(l.CODE_BLOCKS, `chatgpt_code_block_copy_button_clicked`), u(t, y, e), !(b || C == null || r == null) && T({
            source: `mouse`,
            type: `copy`,
            messageId: r,
            serverThreadId: C,
            selectedText: n,
            location: `code-block`,
            contentType: `code`
        })
    }, t[2] = n, t[3] = b, t[4] = r, t[5] = C, t[6] = y, t[7] = k) : k = t[7];
    let A = g(k),
        j = !h,
        M = h ? E : void 0,
        N = h ? `h-9 rounded-lg px-3 whitespace-nowrap` : `size-9 rounded-full px-2`,
        P = s && `cursor-not-allowed opacity-50 hover:bg-transparent`,
        F;
    t[8] !== d || t[9] !== N || t[10] !== P ? (F = o(d, `py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10`, N, P), t[8] = d, t[9] = N, t[10] = P, t[11] = F) : F = t[11];
    let I;
    return t[12] !== s || t[13] !== A || t[14] !== j || t[15] !== M || t[16] !== F ? (I = (0, O.jsx)(S, {
        onCopy: A,
        iconClassName: `icon-md`,
        disabled: s,
        iconOnly: j,
        buttonText: M,
        className: F
    }), t[12] = s, t[13] = A, t[14] = j, t[15] = M, t[16] = F, t[17] = I) : I = t[17], I
}
var D, O, k = e((() => {
    D = b(), w(), n(), C(), t(), d(), s(), f(), i(), r(), h(), y(), O = v()
}));
export {
    k as n, E as t
};
//# sourceMappingURL=2ab5aa6c-b9jxmwevrdxoirtf.js.map