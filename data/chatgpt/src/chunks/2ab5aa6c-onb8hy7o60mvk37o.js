import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $M as t,
    AJ as n,
    B6 as r,
    HS as i,
    Mnt as a,
    Nnt as o,
    Pnt as s,
    VS as c,
    b5 as l,
    eN as u,
    hU as d,
    i5 as f,
    l0 as p,
    pU as m,
    r0 as h,
    y5 as g,
    zJ as _
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as v,
    Rn as y,
    wn as b,
    zn as x
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Nbt as S,
    Pbt as C,
    _L as w,
    gL as T
} from "./conversation-small-fym1zmu9zimymmm1.js";

function E(e) {
    "use forget";
    let t = (0, D.c)(18),
        {
            code: n,
            messageId: r,
            clientThreadId: i,
            disabled: a,
            className: l,
            withText: m
        } = e,
        h = m !== void 0 && m,
        v = x(),
        y = d(),
        b = f(p),
        C = _(i),
        T;
    t[0] === v ? T = t[1] : (T = v.formatMessage({
        id: `CodeBlockCopyButton.copyCode`,
        defaultMessage: `Copy code`
    }), t[0] = v, t[1] = T);
    let E = T,
        k;
    t[2] !== n || t[3] !== b || t[4] !== r || t[5] !== C || t[6] !== y ? (k = e => {
        let t = {
            "text/plain": n
        };
        o.count(s.CODE_BLOCKS, `chatgpt_code_block_copy_button_clicked`), c(t, y, e), !(b || C == null || r == null) && w({
            source: `mouse`,
            type: `copy`,
            messageId: r,
            serverThreadId: C,
            selectedText: n,
            location: `code-block`,
            contentType: `code`
        })
    }, t[2] = n, t[3] = b, t[4] = r, t[5] = C, t[6] = y, t[7] = k) : k = t[7];
    let A = u(k),
        j = !h,
        M = h ? E : void 0,
        N = h ? `h-9 rounded-lg px-3 whitespace-nowrap` : `size-9 rounded-full px-2`,
        P = a && `cursor-not-allowed opacity-50 hover:bg-transparent`,
        F;
    t[8] !== l || t[9] !== N || t[10] !== P ? (F = g(l, `py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10`, N, P), t[8] = l, t[9] = N, t[10] = P, t[11] = F) : F = t[11];
    let I;
    return t[12] !== a || t[13] !== A || t[14] !== j || t[15] !== M || t[16] !== F ? (I = (0, O.jsx)(S, {
        onCopy: A,
        iconClassName: `icon-md`,
        disabled: a,
        iconOnly: j,
        buttonText: M,
        className: F
    }), t[12] = a, t[13] = A, t[14] = j, t[15] = M, t[16] = F, t[17] = I) : I = t[17], I
}
var D, O, k = e((() => {
    D = b(), C(), h(), T(), r(), n(), m(), i(), a(), t(), l(), y(), O = v()
}));
export {
    k as n, E as t
};
//# sourceMappingURL=2ab5aa6c-onb8hy7o60mvk37o.js.map