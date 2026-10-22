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
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as l,
    Nn as u,
    Rn as d,
    wn as f,
    zn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    _Un as m,
    f5 as h,
    l5 as g,
    p5 as _,
    vUn as v,
    yUn as y
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Ky as b,
    qy as x
} from "./30901919-k5uqyx4vyplt9toa.js";

function S(e) {
    return e.stopPropagation()
}

function C(e) {
    return e.currentTarget.blur()
}
var w, T, E, D = e((() => {
    w = f(), y(), o(), x(), a(), c(), n(), d(), _(), T = l(), E = e => {
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
            _ = p(),
            y;
        n[0] === a ? y = n[1] : (y = () => h(a), n[0] = a, n[1] = y);
        let x = i(y),
            {
                speed: E,
                busy: D
            } = i(x.state$),
            O;
        if (n[2] !== D || n[3] !== x || n[4] !== d || n[5] !== f || n[6] !== _ || n[7] !== l || n[8] !== a || n[9] !== E) {
            let e = r(),
                i = d || D,
                o = f ? `h-10 bg-black/15! px-3! font-medium text-white! backdrop-blur-md hover:bg-black/30! focus:bg-black/30!` : `size-11 px-0!`,
                c = !f && String(E).length > 3 && `text-xs`,
                p;
            n[11] !== o || n[12] !== c ? (p = s(`pointer-events-auto shrink-0 rounded-full! py-0! tabular-nums`, o, c), n[11] = o, n[12] = c, n[13] = p) : p = n[13];
            let h;
            n[14] === _ ? h = n[15] : (h = _.formatMessage({
                id: `gifEditor.speed`,
                defaultMessage: `Playback speed`
            }), n[14] = _, n[15] = h);
            let y;
            n[16] === E ? y = n[17] : (y = (0, T.jsx)(u, {
                id: `gifEditor.speedValue`,
                defaultMessage: `{speed}×`,
                values: {
                    speed: E
                }
            }), n[16] = E, n[17] = y);
            let w;
            n[18] !== D || n[19] !== y || n[20] !== i || n[21] !== p || n[22] !== h ? (w = (0, T.jsx)(t, {
                type: `button`,
                color: `ghost`,
                onClick: S,
                onPointerUp: C,
                disabled: i,
                "aria-busy": D,
                className: p,
                "aria-label": h,
                children: y
            }), n[18] = D, n[19] = y, n[20] = i, n[21] = p, n[22] = h, n[23] = w) : w = n[23];
            let k;
            n[24] === f ? k = n[25] : (k = f && (0, T.jsx)(v.Label, {
                children: (0, T.jsx)(u, {
                    id: `gifEditor.speedMenuLabel`,
                    defaultMessage: `GIF speed`
                })
            }), n[24] = f, n[25] = k), O = (0, T.jsxs)(m, {
                side: `top`,
                contentAlign: f ? `start` : void 0,
                triggerButton: w,
                children: [k, g.map(t => (0, T.jsx)(v.Item, {
                    role: `menuitemradio`,
                    "aria-checked": E === t,
                    disabled: d || D,
                    trailing: E === t ? (0, T.jsx)(b, {
                        className: `icon-sm`
                    }) : void 0,
                    onClick: n => {
                        n.stopPropagation(), l?.(t), x.changeSpeed(t, a).then(() => {
                            x.state$().error && e.danger(_.formatMessage({
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
            }), n[2] = D, n[3] = x, n[4] = d, n[5] = f, n[6] = _, n[7] = l, n[8] = a, n[9] = E, n[10] = O
        } else O = n[10];
        return O
    }
}));
export {
    D as n, E as t
};
//# sourceMappingURL=429c9f5e-ocmrswn83mtuwll0.js.map