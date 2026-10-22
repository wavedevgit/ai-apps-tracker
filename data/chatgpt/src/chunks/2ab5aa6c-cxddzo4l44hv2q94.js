import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Art as t,
    B0 as n,
    CN as r,
    K0 as i,
    LU as a,
    Ort as o,
    c7 as s,
    dC as c,
    eY as l,
    fC as u,
    k8 as d,
    krt as f,
    l7 as p,
    lY as m,
    q5 as h,
    wN as g,
    zU as _
} from "./4813494d-nxpmzchfjvwqts17.js";
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
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function E(e) {
    "use forget";
    let n = (0, D.c)(18),
        {
            code: r,
            messageId: a,
            clientThreadId: o,
            disabled: l,
            className: u,
            withText: d
        } = e,
        p = d !== void 0 && d,
        v = x(),
        y = _(),
        b = h(i),
        C = m(o),
        w;
    n[0] === v ? w = n[1] : (w = v.formatMessage({
        id: `CodeBlockCopyButton.copyCode`,
        defaultMessage: `Copy code`
    }), n[0] = v, n[1] = w);
    let E = w,
        k;
    n[2] !== r || n[3] !== b || n[4] !== a || n[5] !== C || n[6] !== y ? (k = e => {
        let n = {
            "text/plain": r
        };
        f.count(t.CODE_BLOCKS, `chatgpt_code_block_copy_button_clicked`), c(n, y, e), !(b || C == null || a == null) && T({
            source: `mouse`,
            type: `copy`,
            messageId: a,
            serverThreadId: C,
            selectedText: r,
            location: `code-block`,
            contentType: `code`
        })
    }, n[2] = r, n[3] = b, n[4] = a, n[5] = C, n[6] = y, n[7] = k) : k = n[7];
    let A = g(k),
        j = !p,
        M = p ? E : void 0,
        N = p ? `h-9 rounded-lg px-3 whitespace-nowrap` : `size-9 rounded-full px-2`,
        P = l && `cursor-not-allowed opacity-50 hover:bg-transparent`,
        F;
    n[8] !== u || n[9] !== N || n[10] !== P ? (F = s(u, `py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10`, N, P), n[8] = u, n[9] = N, n[10] = P, n[11] = F) : F = n[11];
    let I;
    return n[12] !== l || n[13] !== A || n[14] !== j || n[15] !== M || n[16] !== F ? (I = (0, O.jsx)(S, {
        onCopy: A,
        iconClassName: `icon-md`,
        disabled: l,
        iconOnly: j,
        buttonText: M,
        className: F
    }), n[12] = l, n[13] = A, n[14] = j, n[15] = M, n[16] = F, n[17] = I) : I = n[17], I
}
var D, O, k = e((() => {
    D = b(), C(), n(), w(), d(), l(), a(), u(), o(), r(), p(), y(), O = v()
}));
export {
    k as n, E as t
};
//# sourceMappingURL=2ab5aa6c-cxddzo4l44hv2q94.js.map