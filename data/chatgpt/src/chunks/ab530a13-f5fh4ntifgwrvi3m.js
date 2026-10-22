import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    cn as t,
    jt as n,
    l7 as r,
    u7 as i,
    vn as a
} from "./4813494d-r54yv6lv29x4ew99.js";
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
    p = s(), n(), i(), c(), m = o(), h = e => {
        "use forget";
        let n = (0, p.c)(22),
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
        n[0] === v ? y = n[1] : (y = {
            zIndex: v
        }, n[0] = v, n[1] = y);
        let b;
        n[2] === Symbol.for(`react.memo_cache_sentinel`) ? (b = {
            entering: u,
            visible: d,
            leaving: f
        }, n[2] = b) : b = n[2];
        let x;
        n[3] === i ? x = n[4] : (x = (0, m.jsx)(`p`, {
            children: i
        }), n[3] = i, n[4] = x);
        let S;
        if (n[5] !== s || n[6] !== h || n[7] !== g || n[8] !== o) {
            let e;
            n[10] !== s || n[11] !== h || n[12] !== g ? (e = (e, n) => (0, m.jsx)(t.span, {
                className: r(`border-(--dots-surface) dots-caption grid place-items-center rounded-full [&+span]:-ms-2.5`, typeof e == `string` ? `bg-token-bg-secondary size-9 border-[3px]` : `bg-token-bg-tertiary border-[2.5px] px-[5px] py-[2.5px]`),
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
                        delay: s ? .48 + n * .08 : 0,
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
            }, typeof e == `string` ? e : e.imageUrl), n[10] = s, n[11] = h, n[12] = g, n[13] = e) : e = n[13], S = o.map(e), n[5] = s, n[6] = h, n[7] = g, n[8] = o, n[9] = S
        } else S = n[9];
        let C;
        n[14] === S ? C = n[15] : (C = (0, m.jsx)(`div`, {
            "aria-hidden": !0,
            className: `absolute inset-e-3.5 -bottom-4.5 flex`,
            children: S
        }), n[14] = S, n[15] = C);
        let w;
        return n[16] !== s || n[17] !== _ || n[18] !== y || n[19] !== x || n[20] !== C ? (w = (0, m.jsxs)(t.div, {
            "aria-hidden": _,
            className: `origin-start-bottom bg-token-bg-secondary dots-caption relative self-start rounded-3xl px-5 pt-4 pb-5 text-start [grid-area:1/1]`,
            style: y,
            custom: s,
            initial: `entering`,
            animate: `visible`,
            exit: `leaving`,
            variants: b,
            children: [x, C]
        }), n[16] = s, n[17] = _, n[18] = y, n[19] = x, n[20] = C, n[21] = w) : w = n[21], w
    }
}));
export {
    g as n, h as t
};
//# sourceMappingURL=ab530a13-f5fh4ntifgwrvi3m.js.map