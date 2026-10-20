import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A0 as t,
    I0 as n,
    J5 as r,
    N5 as i,
    VU as a,
    Y5 as o,
    _N as s,
    aC as c,
    dY as l,
    drt as u,
    h8 as d,
    lrt as f,
    nY as p,
    oC as m,
    urt as h,
    vN as g,
    zU as _
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as v,
    Rn as y,
    wn as b,
    zn as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Rbt as S,
    vL as C,
    yL as w,
    zbt as T
} from "./conversation-small-cy5f8pl0g26s86so.js";

function E(e) {
    "use forget";
    let t = (0, D.c)(18),
        {
            code: o,
            messageId: s,
            clientThreadId: d,
            disabled: f,
            className: p,
            withText: m
        } = e,
        _ = m !== void 0 && m,
        v = x(),
        y = a(),
        b = i(n),
        C = l(d),
        T;
    t[0] === v ? T = t[1] : (T = v.formatMessage({
        id: `CodeBlockCopyButton.copyCode`,
        defaultMessage: `Copy code`
    }), t[0] = v, t[1] = T);
    let E = T,
        k;
    t[2] !== o || t[3] !== b || t[4] !== s || t[5] !== C || t[6] !== y ? (k = e => {
        let t = {
            "text/plain": o
        };
        h.count(u.CODE_BLOCKS, `chatgpt_code_block_copy_button_clicked`), c(t, y, e), !(b || C == null || s == null) && w({
            source: `mouse`,
            type: `copy`,
            messageId: s,
            serverThreadId: C,
            selectedText: o,
            location: `code-block`,
            contentType: `code`
        })
    }, t[2] = o, t[3] = b, t[4] = s, t[5] = C, t[6] = y, t[7] = k) : k = t[7];
    let A = g(k),
        j = !_,
        M = _ ? E : void 0,
        N = _ ? `h-9 rounded-lg px-3 whitespace-nowrap` : `size-9 rounded-full px-2`,
        P = f && `cursor-not-allowed opacity-50 hover:bg-transparent`,
        F;
    t[8] !== p || t[9] !== N || t[10] !== P ? (F = r(p, `py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10`, N, P), t[8] = p, t[9] = N, t[10] = P, t[11] = F) : F = t[11];
    let I;
    return t[12] !== f || t[13] !== A || t[14] !== j || t[15] !== M || t[16] !== F ? (I = (0, O.jsx)(S, {
        onCopy: A,
        iconClassName: `icon-md`,
        disabled: f,
        iconOnly: j,
        buttonText: M,
        className: F
    }), t[12] = f, t[13] = A, t[14] = j, t[15] = M, t[16] = F, t[17] = I) : I = t[17], I
}
var D, O, k = e((() => {
    D = b(), T(), t(), C(), d(), p(), _(), m(), f(), s(), o(), y(), O = v()
}));
export {
    k as n, E as t
};
//# sourceMappingURL=2ab5aa6c-f3kllhtmp12bbtek.js.map