import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    A8 as n,
    IU as r,
    K5 as i,
    LU as a,
    eE as o,
    j5 as s,
    q5 as c
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as l,
    Nn as u,
    Rn as d,
    wn as f,
    zn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AUn as m,
    MUn as h,
    f5 as g,
    jUn as _,
    l5 as v,
    p5 as y
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Ky as b,
    qy as x
} from "./30901919-s8bko9nrkqwv6i4f.js";

function S(e) {
    return e.stopPropagation()
}

function C(e) {
    return e.currentTarget.blur()
}
var w, T, E, D = e((() => {
    w = f(), h(), o(), x(), a(), c(), n(), d(), y(), T = l(), E = e => {
        "use forget";
        let n = (0, w.c)(26),
            {
                source: a,
                disabled: o,
                inline: c,
                onChange: l
            } = e,
            d = o !== void 0 && o,
            f = c !== void 0 && c,
            h = p(),
            y;
        n[0] === a ? y = n[1] : (y = () => g(a), n[0] = a, n[1] = y);
        let x = s(y),
            {
                speed: E,
                busy: D
            } = s(x.state$),
            O;
        if (n[2] !== D || n[3] !== x || n[4] !== d || n[5] !== f || n[6] !== h || n[7] !== l || n[8] !== a || n[9] !== E) {
            let e = r(),
                o = d || D,
                s = f ? `h-10 bg-black/15! px-3! font-medium text-white! backdrop-blur-md hover:bg-black/30! focus:bg-black/30!` : `size-11 px-0!`,
                c = !f && String(E).length > 3 && `text-xs`,
                p;
            n[11] !== s || n[12] !== c ? (p = i(`pointer-events-auto shrink-0 rounded-full! py-0! tabular-nums`, s, c), n[11] = s, n[12] = c, n[13] = p) : p = n[13];
            let g;
            n[14] === h ? g = n[15] : (g = h.formatMessage({
                id: `gifEditor.speed`,
                defaultMessage: `Playback speed`
            }), n[14] = h, n[15] = g);
            let y;
            n[16] === E ? y = n[17] : (y = (0, T.jsx)(u, {
                id: `gifEditor.speedValue`,
                defaultMessage: `{speed}×`,
                values: {
                    speed: E
                }
            }), n[16] = E, n[17] = y);
            let w;
            n[18] !== D || n[19] !== y || n[20] !== o || n[21] !== p || n[22] !== g ? (w = (0, T.jsx)(t, {
                type: `button`,
                color: `ghost`,
                onClick: S,
                onPointerUp: C,
                disabled: o,
                "aria-busy": D,
                className: p,
                "aria-label": g,
                children: y
            }), n[18] = D, n[19] = y, n[20] = o, n[21] = p, n[22] = g, n[23] = w) : w = n[23];
            let k;
            n[24] === f ? k = n[25] : (k = f && (0, T.jsx)(_.Label, {
                children: (0, T.jsx)(u, {
                    id: `gifEditor.speedMenuLabel`,
                    defaultMessage: `GIF speed`
                })
            }), n[24] = f, n[25] = k), O = (0, T.jsxs)(m, {
                side: `top`,
                contentAlign: f ? `start` : void 0,
                triggerButton: w,
                children: [k, v.map(t => (0, T.jsx)(_.Item, {
                    role: `menuitemradio`,
                    "aria-checked": E === t,
                    disabled: d || D,
                    trailing: E === t ? (0, T.jsx)(b, {
                        className: `icon-sm`
                    }) : void 0,
                    onClick: n => {
                        n.stopPropagation(), l?.(t), x.changeSpeed(t, a).then(() => {
                            x.state$().error && e.danger(h.formatMessage({
                                id: `gifEditor.saveSpeedFailed`,
                                defaultMessage: `Couldn’t save GIF speed. Try again`
                            }), {
                                toastId: `gifEditor.saveSpeedFailed`
                            })
                        })
                    },
                    children: (0, T.jsx)(u, {
                        id: `gifEditor.speedValue`,
                        defaultMessage: `{speed}×`,
                        values: {
                            speed: t
                        }
                    })
                }, t))]
            }), n[2] = D, n[3] = x, n[4] = d, n[5] = f, n[6] = h, n[7] = l, n[8] = a, n[9] = E, n[10] = O
        } else O = n[10];
        return O
    }
}));
export {
    D as n, E as t
};
//# sourceMappingURL=429c9f5e-w4f7zzxzbrcu9103.js.map