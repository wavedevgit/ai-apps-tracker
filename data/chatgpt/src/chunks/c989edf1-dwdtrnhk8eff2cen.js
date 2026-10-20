const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d7906bef-kig9g8xmh4hnu5gd.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/b2c255f5-dgzm1bcta7422yc7.js", "assets/3a6eb079-hjakmv42muhkqjzj.js", "assets/9e9d0eec-j24gxg6gi9duoed8.js", "assets/ea7792a2-hplb1nd79ppn7q2q.js", "assets/c3104c13-celq2mcekzljf1n9.js", "assets/b093033a-ckl04stpftr36j1g.js", "assets/7e5e046a-g9x9bmdo3xbp5kep.js", "assets/bcae0416-m5746l5rsjcs0jyy.js", "assets/c2675c8c-ejvs9hq3rwjwsbcv.js", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css", "assets/82782bc9-fcii2id0x6lspwtj.js", "assets/8b34dbc2-dtawqv9t1aqckqj4.js", "assets/global-modals-lv5n3ujm.css", "assets/c00ae0a6-fhisqr460405bcnh.js", "assets/99299f16-hhl13doq3jwhvc5a.js", "assets/c871dc1d-lpy7e3u6bxclkcy0.js", "assets/27c30153-iytzq9sk8nmu8m68.js", "assets/8f909c21-jqvb62ory59pv8q3.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as n,
    Y5 as r,
    cn as i,
    en as a,
    jt as o,
    nn as ee
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as s,
    Rn as c,
    Vn as l,
    cn as u,
    ln as d,
    wn as f,
    zn as te
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as p,
    t as m
} from "./b2c255f5-dgzm1bcta7422yc7.js";
import {
    n as h,
    t as g
} from "./9e38ec96-lf9tyby1b7iurr0s.js";
import {
    n as _,
    t as ne
} from "./8b0ac3b9-cloiidc50t0ytyvq.js";
import {
    n as v,
    t as y
} from "./293b9207-ouwnijh1ojvad62x.js";
var b, x, S, C, w, T = e((() => {
    b = f(), p(), o(), x = t(l()), n(), c(), v(), _(), h(), S = s(), d(), C = (0, x.lazy)(() => u(() => import(`./d7906bef-kig9g8xmh4hnu5gd.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]))), w = e => {
        "use forget";
        let t = (0, b.c)(46),
            {
                className: n,
                offset: o,
                progress: s,
                lean: c,
                placement: l,
                lightOrigin: u,
                switchCharacterLabel: d,
                exciteOnToggle: f
            } = e,
            p = o === void 0 ? 0 : o,
            h = f !== void 0 && f,
            _ = (0, x.useId)(),
            {
                models: v
            } = (0, x.useContext)(m),
            w = (0, x.useContext)(g);
        if (!w) throw Error(`Dots sections require DotsPageShell`);
        let {
            selected: T,
            sourceId: E,
            animateSelection: D,
            cycle: O
        } = w, k = te(), A = ee(.5), j, M;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (j = [0, 1], M = [`25%`, `75%`], t[0] = j, t[1] = M) : (j = t[0], M = t[1]);
        let N = a(s ?? A, j, M),
            P = `${(l?.x??.5)*100}%`,
            F = `${(l?.y??.5)*100}%`,
            I = `${(l?.compact?.x??.5)*100}%`,
            L = `${(l?.compact?.y??.5)*100}%`,
            R = `${l?l.width*60:40}%`,
            z = `${l?l.maxWidth*.6:228}px`,
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
            H = l ? void 0 : N,
            U;
        t[9] !== V || t[10] !== H ? (U = {
            ...V,
            insetInlineStart: H
        }, t[9] = V, t[10] = H, t[11] = U) : U = t[11];
        let W = U,
            G;
        t[12] === n ? G = t[13] : (G = r(`pointer-events-none relative`, n), t[12] = n, t[13] = G);
        let K = h ? `absolute inset-x-0 top-1/2 h-[200%] -translate-y-1/2` : `size-full`,
            q;
        t[14] !== D || t[15] !== W || t[16] !== h || t[17] !== _ || t[18] !== c || t[19] !== u || t[20] !== v || t[21] !== p || t[22] !== l || t[23] !== s || t[24] !== T || t[25] !== E ? (q = v ? (0, S.jsx)(ne, {
            className: `size-full`,
            label: T,
            prepareSelection: !0,
            fallback: (0, S.jsx)(i.div, {
                className: `absolute inset-s-(--companion-x) top-(--companion-y) aspect-square w-(--companion-width) max-w-(--companion-max-width) -translate-1/2 max-[600px]:inset-s-(--companion-mobile-x) max-[600px]:top-(--companion-mobile-y)`,
                style: W,
                children: (0, S.jsx)(y, {
                    name: T
                })
            }),
            children: (0, S.jsx)(C, {
                selected: T,
                offset: p,
                progress: s,
                lean: c,
                placement: l,
                lightOrigin: u,
                interactive: !1,
                animateSelection: D,
                exciteOnToggle: E === _ && h,
                stageHeightRatio: h ? .5 : 1
            })
        }) : (0, S.jsx)(i.div, {
            className: `absolute inset-s-(--companion-x) top-(--companion-y) aspect-square w-(--companion-width) max-w-(--companion-max-width) -translate-1/2 max-[600px]:inset-s-(--companion-mobile-x) max-[600px]:top-(--companion-mobile-y)`,
            style: W,
            children: (0, S.jsx)(y, {
                name: T
            })
        }), t[14] = D, t[15] = W, t[16] = h, t[17] = _, t[18] = c, t[19] = u, t[20] = v, t[21] = p, t[22] = l, t[23] = s, t[24] = T, t[25] = E, t[26] = q) : q = t[26];
        let J;
        t[27] !== K || t[28] !== q ? (J = (0, S.jsx)(`div`, {
            className: K,
            children: q
        }), t[27] = K, t[28] = q, t[29] = J) : J = t[29];
        let Y;
        t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (Y = r(`absolute inset-s-(--companion-x) top-(--companion-y) aspect-square w-(--companion-width) max-w-(--companion-max-width) -translate-1/2 max-[600px]:inset-s-(--companion-mobile-x) max-[600px]:top-(--companion-mobile-y)`, `interactive-button pointer-events-auto min-h-11 min-w-11 rounded-full border-0 bg-transparent p-0`), t[30] = Y) : Y = t[30];
        let X;
        t[31] !== k || t[32] !== d ? (X = d ?? k.formatMessage({
            id: `chatgpt.dots.character_switch.button.label`,
            defaultMessage: `Change character across the page`
        }), t[31] = k, t[32] = d, t[33] = X) : X = t[33];
        let Z;
        t[34] !== O || t[35] !== _ ? (Z = e => O(e.detail !== 0, void 0, _), t[34] = O, t[35] = _, t[36] = Z) : Z = t[36];
        let Q;
        t[37] !== W || t[38] !== X || t[39] !== Z ? (Q = (0, S.jsx)(i.button, {
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
//# sourceMappingURL=c989edf1-dwdtrnhk8eff2cen.js.map