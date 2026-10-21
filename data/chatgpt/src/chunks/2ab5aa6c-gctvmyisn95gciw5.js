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
    fY as s,
    g8 as c,
    grt as l,
    hrt as u,
    j0 as d,
    mrt as f,
    oC as p,
    rY as m,
    sC as h,
    vN as g,
    yN as _
} from "./4813494d-tap9fxyhk4ehe0bs.js";
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
} from "./conversation-small-nmt18uiom3b14vca.js";

function E(e) {
    "use forget";
    let t = (0, D.c)(18),
        {
            code: a,
            messageId: c,
            clientThreadId: d,
            disabled: f,
            className: m,
            withText: h
        } = e,
        g = h !== void 0 && h,
        v = x(),
        y = n(),
        b = i(r),
        S = s(d),
        T;
    t[0] === v ? T = t[1] : (T = v.formatMessage({
        id: `CodeBlockCopyButton.copyCode`,
        defaultMessage: `Copy code`
    }), t[0] = v, t[1] = T);
    let E = T,
        k;
    t[2] !== a || t[3] !== b || t[4] !== c || t[5] !== S || t[6] !== y ? (k = e => {
        let t = {
            "text/plain": a
        };
        u.count(l.CODE_BLOCKS, `chatgpt_code_block_copy_button_clicked`), p(t, y, e), !(b || S == null || c == null) && C({
            source: `mouse`,
            type: `copy`,
            messageId: c,
            serverThreadId: S,
            selectedText: a,
            location: `code-block`,
            contentType: `code`
        })
    }, t[2] = a, t[3] = b, t[4] = c, t[5] = S, t[6] = y, t[7] = k) : k = t[7];
    let A = _(k),
        j = !g,
        M = g ? E : void 0,
        N = g ? `h-9 rounded-lg px-3 whitespace-nowrap` : `size-9 rounded-full px-2`,
        P = f && `cursor-not-allowed opacity-50 hover:bg-transparent`,
        F;
    t[8] !== m || t[9] !== N || t[10] !== P ? (F = o(m, `py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10`, N, P), t[8] = m, t[9] = N, t[10] = P, t[11] = F) : F = t[11];
    let I;
    return t[12] !== f || t[13] !== A || t[14] !== j || t[15] !== M || t[16] !== F ? (I = (0, O.jsx)(w, {
        onCopy: A,
        iconClassName: `icon-md`,
        disabled: f,
        iconOnly: j,
        buttonText: M,
        className: F
    }), t[12] = f, t[13] = A, t[14] = j, t[15] = M, t[16] = F, t[17] = I) : I = t[17], I
}
var D, O, k = e((() => {
    D = b(), S(), d(), T(), c(), m(), t(), h(), f(), g(), a(), y(), O = v()
}));
export {
    k as n, E as t
};
//# sourceMappingURL=2ab5aa6c-gctvmyisn95gciw5.js.map