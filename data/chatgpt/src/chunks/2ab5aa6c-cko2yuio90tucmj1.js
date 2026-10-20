import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F0 as t,
    J5 as n,
    M5 as r,
    VU as i,
    _N as a,
    aC as o,
    crt as s,
    dY as c,
    k0 as l,
    lrt as u,
    m8 as d,
    nY as f,
    oC as p,
    q5 as m,
    srt as h,
    vN as g,
    zU as _
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as v,
    Tn as y,
    Vn as b,
    zn as x
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Fbt as S,
    Ibt as C,
    vL as w,
    yL as T
} from "./conversation-small-cawdu7il3ha6y70c.js";

function E(e) {
    "use forget";
    let n = (0, D.c)(18),
        {
            code: a,
            messageId: l,
            clientThreadId: d,
            disabled: f,
            className: p,
            withText: h
        } = e,
        _ = h !== void 0 && h,
        y = v(),
        b = i(),
        x = r(t),
        C = c(d),
        w;
    n[0] === y ? w = n[1] : (w = y.formatMessage({
        id: `CodeBlockCopyButton.copyCode`,
        defaultMessage: `Copy code`
    }), n[0] = y, n[1] = w);
    let E = w,
        k;
    n[2] !== a || n[3] !== x || n[4] !== l || n[5] !== C || n[6] !== b ? (k = e => {
        let t = {
            "text/plain": a
        };
        s.count(u.CODE_BLOCKS, `chatgpt_code_block_copy_button_clicked`), o(t, b, e), !(x || C == null || l == null) && T({
            source: `mouse`,
            type: `copy`,
            messageId: l,
            serverThreadId: C,
            selectedText: a,
            location: `code-block`,
            contentType: `code`
        })
    }, n[2] = a, n[3] = x, n[4] = l, n[5] = C, n[6] = b, n[7] = k) : k = n[7];
    let A = g(k),
        j = !_,
        M = _ ? E : void 0,
        N = _ ? `h-9 rounded-lg px-3 whitespace-nowrap` : `size-9 rounded-full px-2`,
        P = f && `cursor-not-allowed opacity-50 hover:bg-transparent`,
        F;
    n[8] !== p || n[9] !== N || n[10] !== P ? (F = m(p, `py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10`, N, P), n[8] = p, n[9] = N, n[10] = P, n[11] = F) : F = n[11];
    let I;
    return n[12] !== f || n[13] !== A || n[14] !== j || n[15] !== M || n[16] !== F ? (I = (0, O.jsx)(S, {
        onCopy: A,
        iconClassName: `icon-md`,
        disabled: f,
        iconOnly: j,
        buttonText: M,
        className: F
    }), n[12] = f, n[13] = A, n[14] = j, n[15] = M, n[16] = F, n[17] = I) : I = n[17], I
}
var D, O, k = e((() => {
    D = y(), C(), l(), w(), d(), f(), _(), p(), h(), a(), n(), x(), O = b()
}));
export {
    k as n, E as t
};
//# sourceMappingURL=2ab5aa6c-cko2yuio90tucmj1.js.map