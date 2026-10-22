const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d7906bef-h4zmu7jp2jxi3lrh.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-i89nb6zlze66idsz.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/b2c255f5-dgzm1bcta7422yc7.js", "assets/3a6eb079-hjakmv42muhkqjzj.js", "assets/9e9d0eec-j24gxg6gi9duoed8.js", "assets/ea7792a2-hplb1nd79ppn7q2q.js", "assets/c3104c13-ftst8gn2av6dk9x3.js", "assets/b093033a-ksxd72zmyfdjgsdq.js", "assets/7e5e046a-g9x9bmdo3xbp5kep.js", "assets/bcae0416-omrfwufah28p1bj8.js", "assets/c2675c8c-4fpunyxk1uf8cfp1.js", "assets/conversation-small-fh0oqifngkf5rvl1.js", "assets/30901919-cmi3nh547dwrqkxv.js", "assets/c470f5ab-ctk9cdujw17c2exz.js", "assets/0e5afe53-fofrudqqfgiodxgc.js", "assets/conversation-small-7l2sfhqg.css", "assets/82782bc9-ivetrmhdn140ze7c.js", "assets/8b34dbc2-peb5nzi8z3rrflnv.js", "assets/global-modals-dxg9ukpk.css", "assets/c00ae0a6-or96kvt6e443eucz.js", "assets/99299f16-nd5u9ufiu1r5eudo.js", "assets/c871dc1d-f3fxp9mjiy0uesja.js", "assets/27c30153-ku4bwy1dnw8u3efo.js", "assets/8f909c21-jqvb62ory59pv8q3.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    cn as n,
    en as ee,
    jt as r,
    l7 as i,
    nn as te,
    u7 as a
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as o,
    Rn as s,
    Vn as c,
    cn as l,
    ln as u,
    wn as d,
    zn as ne
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as f,
    t as p
} from "./b2c255f5-dgzm1bcta7422yc7.js";
import {
    n as m,
    t as h
} from "./9e38ec96-lf9tyby1b7iurr0s.js";
import {
    n as g,
    t as _
} from "./8b0ac3b9-nan5edi91r861q5v.js";
import {
    n as v,
    t as y
} from "./293b9207-ouwnijh1ojvad62x.js";
var b, x, S, C, w, T = e((() => {
    b = d(), f(), r(), x = t(c()), a(), s(), v(), g(), m(), S = o(), u(), C = (0, x.lazy)(() => l(() => import(`./d7906bef-h4zmu7jp2jxi3lrh.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]))), w = e => {
        "use forget";
        let t = (0, b.c)(46),
            {
                className: r,
                offset: a,
                progress: o,
                lean: s,
                placement: c,
                lightOrigin: l,
                switchCharacterLabel: u,
                exciteOnToggle: d
            } = e,
            f = a === void 0 ? 0 : a,
            m = d !== void 0 && d,
            g = (0, x.useId)(),
            {
                models: v
            } = (0, x.useContext)(p),
            w = (0, x.useContext)(h);
        if (!w) throw Error(`Dots sections require DotsPageShell`);
        let {
            selected: T,
            sourceId: E,
            animateSelection: D,
            cycle: O
        } = w, k = ne(), A = te(.5), j, M;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (j = [0, 1], M = [`25%`, `75%`], t[0] = j, t[1] = M) : (j = t[0], M = t[1]);
        let N = ee(o ?? A, j, M),
            P = `${(c?.x??.5)*100}%`,
            F = `${(c?.y??.5)*100}%`,
            I = `${(c?.compact?.x??.5)*100}%`,
            L = `${(c?.compact?.y??.5)*100}%`,
            R = `${c?c.width*60:40}%`,
            z = `${c?c.maxWidth*.6:228}px`,
            B;
        t[2] !== z || t[3] !== P || t[4] !== F || t[5] !== I || t[6] !== L || t[7] !== R ? (B = {
            "--companion-x": P,
            "--companion-y": F,
            "--companion-mobile-x": I,
            "--companion-mobile-y": L,
            "--companion-width": R,
            "--companion-max-width": z
        }, t[2] = z, t[3] = P, t[4] = F, t[5] = I, t[6] = L, t[7] = R, t[8] = B) : B = t[8];
        let V = B,
            H = c ? void 0 : N,
            U;
        t[9] !== V || t[10] !== H ? (U = {
            ...V,
            insetInlineStart: H
        }, t[9] = V, t[10] = H, t[11] = U) : U = t[11];
        let W = U,
            G;
        t[12] === r ? G = t[13] : (G = i(`pointer-events-none relative`, r), t[12] = r, t[13] = G);
        let K = m ? `absolute inset-x-0 top-1/2 h-[200%] -translate-y-1/2` : `size-full`,
            q;
        t[14] !== D || t[15] !== W || t[16] !== m || t[17] !== g || t[18] !== s || t[19] !== l || t[20] !== v || t[21] !== f || t[22] !== c || t[23] !== o || t[24] !== T || t[25] !== E ? (q = v ? (0, S.jsx)(_, {
            className: `size-full`,
            label: T,
            prepareSelection: !0,
            fallback: (0, S.jsx)(n.div, {
                className: `absolute inset-s-(--companion-x) top-(--companion-y) aspect-square w-(--companion-width) max-w-(--companion-max-width) -translate-1/2 max-[600px]:inset-s-(--companion-mobile-x) max-[600px]:top-(--companion-mobile-y)`,
                style: W,
                children: (0, S.jsx)(y, {
                    name: T
                })
            }),
            children: (0, S.jsx)(C, {
                selected: T,
                offset: f,
                progress: o,
                lean: s,
                placement: c,
                lightOrigin: l,
                interactive: !1,
                animateSelection: D,
                exciteOnToggle: E === g && m,
                stageHeightRatio: m ? .5 : 1
            })
        }) : (0, S.jsx)(n.div, {
            className: `absolute inset-s-(--companion-x) top-(--companion-y) aspect-square w-(--companion-width) max-w-(--companion-max-width) -translate-1/2 max-[600px]:inset-s-(--companion-mobile-x) max-[600px]:top-(--companion-mobile-y)`,
            style: W,
            children: (0, S.jsx)(y, {
                name: T
            })
        }), t[14] = D, t[15] = W, t[16] = m, t[17] = g, t[18] = s, t[19] = l, t[20] = v, t[21] = f, t[22] = c, t[23] = o, t[24] = T, t[25] = E, t[26] = q) : q = t[26];
        let J;
        t[27] !== K || t[28] !== q ? (J = (0, S.jsx)(`div`, {
            className: K,
            children: q
        }), t[27] = K, t[28] = q, t[29] = J) : J = t[29];
        let Y;
        t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (Y = i(`absolute inset-s-(--companion-x) top-(--companion-y) aspect-square w-(--companion-width) max-w-(--companion-max-width) -translate-1/2 max-[600px]:inset-s-(--companion-mobile-x) max-[600px]:top-(--companion-mobile-y)`, `interactive-button pointer-events-auto min-h-11 min-w-11 rounded-full border-0 bg-transparent p-0`), t[30] = Y) : Y = t[30];
        let X;
        t[31] !== k || t[32] !== u ? (X = u ?? k.formatMessage({
            id: `chatgpt.dots.character_switch.button.label`,
            defaultMessage: `Change character across the page`
        }), t[31] = k, t[32] = u, t[33] = X) : X = t[33];
        let Z;
        t[34] !== O || t[35] !== g ? (Z = e => O(e.detail !== 0, void 0, g), t[34] = O, t[35] = g, t[36] = Z) : Z = t[36];
        let Q;
        t[37] !== W || t[38] !== X || t[39] !== Z ? (Q = (0, S.jsx)(n.button, {
            type: `button`,
            className: Y,
            style: W,
            "aria-label": X,
            onClick: Z
        }), t[37] = W, t[38] = X, t[39] = Z, t[40] = Q) : Q = t[40];
        let $;
        return t[41] !== T || t[42] !== G || t[43] !== J || t[44] !== Q ? ($ = (0, S.jsxs)(`div`, {
            className: G,
            "data-selected-character": T,
            children: [J, Q]
        }), t[41] = T, t[42] = G, t[43] = J, t[44] = Q, t[45] = $) : $ = t[45], $
    }
}));
export {
    T as n, w as t
};
//# sourceMappingURL=c989edf1-l4lf4l2o4c75mo5r.js.map