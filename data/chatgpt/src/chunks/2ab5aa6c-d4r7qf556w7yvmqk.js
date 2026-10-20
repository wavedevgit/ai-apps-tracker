import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as t,
    HU as n,
    L0 as r,
    P5 as i,
    X5 as a,
    Y5 as o,
    drt as s,
    fY as c,
    frt as l,
    g8 as u,
    j0 as d,
    oC as f,
    rY as p,
    sC as m,
    urt as h,
    vN as g,
    yN as _
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as v,
    Rn as y,
    wn as b,
    zn as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Hbt as S,
    SL as C,
    Vbt as w,
    xL as T
} from "./conversation-small-ikg0dwuw782klweb.js";

function E(e) {
    "use forget";
    let t = (0, D.c)(18),
        {
            code: a,
            messageId: u,
            clientThreadId: d,
            disabled: p,
            className: m,
            withText: h
        } = e,
        g = h !== void 0 && h,
        v = x(),
        y = n(),
        b = i(r),
        S = c(d),
        T;
    t[0] === v ? T = t[1] : (T = v.formatMessage({
        id: `CodeBlockCopyButton.copyCode`,
        defaultMessage: `Copy code`
    }), t[0] = v, t[1] = T);
    let E = T,
        k;
    t[2] !== a || t[3] !== b || t[4] !== u || t[5] !== S || t[6] !== y ? (k = e => {
        let t = {
            "text/plain": a
        };
        s.count(l.CODE_BLOCKS, `chatgpt_code_block_copy_button_clicked`), f(t, y, e), !(b || S == null || u == null) && C({
            source: `mouse`,
            type: `copy`,
            messageId: u,
            serverThreadId: S,
            selectedText: a,
            location: `code-block`,
            contentType: `code`
        })
    }, t[2] = a, t[3] = b, t[4] = u, t[5] = S, t[6] = y, t[7] = k) : k = t[7];
    let A = _(k),
        j = !g,
        M = g ? E : void 0,
        N = g ? `h-9 rounded-lg px-3 whitespace-nowrap` : `size-9 rounded-full px-2`,
        P = p && `cursor-not-allowed opacity-50 hover:bg-transparent`,
        F;
    t[8] !== m || t[9] !== N || t[10] !== P ? (F = o(m, `py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10`, N, P), t[8] = m, t[9] = N, t[10] = P, t[11] = F) : F = t[11];
    let I;
    return t[12] !== p || t[13] !== A || t[14] !== j || t[15] !== M || t[16] !== F ? (I = (0, O.jsx)(w, {
        onCopy: A,
        iconClassName: `icon-md`,
        disabled: p,
        iconOnly: j,
        buttonText: M,
        className: F
    }), t[12] = p, t[13] = A, t[14] = j, t[15] = M, t[16] = F, t[17] = I) : I = t[17], I
}
var D, O, k = e((() => {
    D = b(), S(), d(), T(), u(), p(), t(), m(), h(), g(), a(), y(), O = v()
}));
export {
    k as n, E as t
};
//# sourceMappingURL=2ab5aa6c-d4r7qf556w7yvmqk.js.map