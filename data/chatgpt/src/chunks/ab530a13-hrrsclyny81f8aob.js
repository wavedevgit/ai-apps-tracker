import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as t,
    Y5 as n,
    cn as r,
    jt as i,
    vn as a
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as o,
    wn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    i as c,
    n as l
} from "./bfac314f-blouvrkeov0djtxr.js";

function u(e) {
    return {
        opacity: +!e,
        y: e ? 96 : 0,
        scale: e ? .88 : 1
    }
}

function d(e) {
    return {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: e ? .44 : 0,
            ease: l
        }
    }
}

function f(e) {
    return {
        opacity: 0,
        y: e ? -12 : 0,
        scale: e ? .96 : 1,
        transition: {
            duration: e ? .2 : 0,
            ease: [.22, .68, .3, 1]
        }
    }
}
var p, m, h, g = e((() => {
    p = s(), i(), t(), c(), m = o(), h = e => {
        "use forget";
        let t = (0, p.c)(22),
            {
                message: i,
                reactions: o,
                animate: s,
                animateReactions: c
            } = e,
            h = c === void 0 || c,
            g = a(),
            _ = !g,
            v = +!!g,
            y;
        t[0] === v ? y = t[1] : (y = {
            zIndex: v
        }, t[0] = v, t[1] = y);
        let b;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (b = {
            entering: u,
            visible: d,
            leaving: f
        }, t[2] = b) : b = t[2];
        let x;
        t[3] === i ? x = t[4] : (x = (0, m.jsx)(`p`, {
            children: i
        }), t[3] = i, t[4] = x);
        let S;
        if (t[5] !== s || t[6] !== h || t[7] !== g || t[8] !== o) {
            let e;
            t[10] !== s || t[11] !== h || t[12] !== g ? (e = (e, t) => (0, m.jsx)(r.span, {
                className: n(`border-(--dots-surface) dots-caption grid place-items-center rounded-full [&+span]:-ms-2.5`, typeof e == `string` ? `bg-token-bg-secondary size-9 border-[3px]` : `bg-token-bg-tertiary border-[2.5px] px-[5px] py-[2.5px]`),
                initial: h ? {
                    opacity: +!s,
                    scale: s ? .9 : 1,
                    y: s ? 4 : 0
                } : !1,
                animate: h ? g ? {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                        delay: s ? .48 + t * .08 : 0,
                        duration: s ? .22 : 0,
                        ease: l
                    }
                } : {
                    opacity: 0,
                    transition: {
                        duration: s ? .1 : 0
                    }
                } : void 0,
                exit: h ? {
                    opacity: 0,
                    transition: {
                        duration: s ? .1 : 0
                    }
                } : void 0,
                children: typeof e == `string` ? e : (0, m.jsx)(`img`, {
                    src: e.imageUrl,
                    alt: ``,
                    width: e.size ?? 20,
                    height: e.size ?? 20,
                    className: `block max-w-none object-contain`,
                    draggable: !1
                })
            }, typeof e == `string` ? e : e.imageUrl), t[10] = s, t[11] = h, t[12] = g, t[13] = e) : e = t[13], S = o.map(e), t[5] = s, t[6] = h, t[7] = g, t[8] = o, t[9] = S
        } else S = t[9];
        let C;
        t[14] === S ? C = t[15] : (C = (0, m.jsx)(`div`, {
            "aria-hidden": !0,
            className: `absolute inset-e-3.5 -bottom-4.5 flex`,
            children: S
        }), t[14] = S, t[15] = C);
        let w;
        return t[16] !== s || t[17] !== _ || t[18] !== y || t[19] !== x || t[20] !== C ? (w = (0, m.jsxs)(r.div, {
            "aria-hidden": _,
            className: `origin-start-bottom bg-token-bg-secondary dots-caption relative self-start rounded-3xl px-5 pt-4 pb-5 text-start [grid-area:1/1]`,
            style: y,
            custom: s,
            initial: `entering`,
            animate: `visible`,
            exit: `leaving`,
            variants: b,
            children: [x, C]
        }), t[16] = s, t[17] = _, t[18] = y, t[19] = x, t[20] = C, t[21] = w) : w = t[21], w
    }
}));
export {
    g as n, h as t
};
//# sourceMappingURL=ab530a13-hrrsclyny81f8aob.js.map