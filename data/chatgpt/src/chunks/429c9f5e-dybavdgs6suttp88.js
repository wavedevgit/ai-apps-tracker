import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    A8 as n,
    IU as r,
    J5 as i,
    LU as a,
    eE as o,
    l7 as s,
    u7 as c
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as l,
    Nn as u,
    Rn as d,
    wn as f,
    zn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    SUn as m,
    bUn as h,
    f5 as g,
    l5 as _,
    p5 as v,
    xUn as y
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Jy as b,
    Yy as x
} from "./30901919-lc79rizhhepnsl3q.js";

function S(e) {
    return e.stopPropagation()
}

function C(e) {
    return e.currentTarget.blur()
}
var w, T, E, D = e((() => {
    w = f(), m(), o(), x(), a(), c(), n(), d(), v(), T = l(), E = e => {
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
            m = p(),
            v;
        n[0] === a ? v = n[1] : (v = () => g(a), n[0] = a, n[1] = v);
        let x = i(v),
            {
                speed: E,
                busy: D
            } = i(x.state$),
            O;
        if (n[2] !== D || n[3] !== x || n[4] !== d || n[5] !== f || n[6] !== m || n[7] !== l || n[8] !== a || n[9] !== E) {
            let e = r(),
                i = d || D,
                o = f ? `h-10 bg-black/15! px-3! font-medium text-white! backdrop-blur-md hover:bg-black/30! focus:bg-black/30!` : `size-11 px-0!`,
                c = !f && String(E).length > 3 && `text-xs`,
                p;
            n[11] !== o || n[12] !== c ? (p = s(`pointer-events-auto shrink-0 rounded-full! py-0! tabular-nums`, o, c), n[11] = o, n[12] = c, n[13] = p) : p = n[13];
            let g;
            n[14] === m ? g = n[15] : (g = m.formatMessage({
                id: `gifEditor.speed`,
                defaultMessage: `Playback speed`
            }), n[14] = m, n[15] = g);
            let v;
            n[16] === E ? v = n[17] : (v = (0, T.jsx)(u, {
                id: `gifEditor.speedValue`,
                defaultMessage: `{speed}×`,
                values: {
                    speed: E
                }
            }), n[16] = E, n[17] = v);
            let w;
            n[18] !== D || n[19] !== v || n[20] !== i || n[21] !== p || n[22] !== g ? (w = (0, T.jsx)(t, {
                type: `button`,
                color: `ghost`,
                onClick: S,
                onPointerUp: C,
                disabled: i,
                "aria-busy": D,
                className: p,
                "aria-label": g,
                children: v
            }), n[18] = D, n[19] = v, n[20] = i, n[21] = p, n[22] = g, n[23] = w) : w = n[23];
            let k;
            n[24] === f ? k = n[25] : (k = f && (0, T.jsx)(y.Label, {
                children: (0, T.jsx)(u, {
                    id: `gifEditor.speedMenuLabel`,
                    defaultMessage: `GIF speed`
                })
            }), n[24] = f, n[25] = k), O = (0, T.jsxs)(h, {
                side: `top`,
                contentAlign: f ? `start` : void 0,
                triggerButton: w,
                children: [k, _.map(t => (0, T.jsx)(y.Item, {
                    role: `menuitemradio`,
                    "aria-checked": E === t,
                    disabled: d || D,
                    trailing: E === t ? (0, T.jsx)(b, {
                        className: `icon-sm`
                    }) : void 0,
                    onClick: n => {
                        n.stopPropagation(), l?.(t), x.changeSpeed(t, a).then(() => {
                            x.state$().error && e.danger(m.formatMessage({
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
            }), n[2] = D, n[3] = x, n[4] = d, n[5] = f, n[6] = m, n[7] = l, n[8] = a, n[9] = E, n[10] = O
        } else O = n[10];
        return O
    }
}));
export {
    D as n, E as t
};
//# sourceMappingURL=429c9f5e-dybavdgs6suttp88.js.map