import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as t,
    B6 as n,
    b5 as r,
    fU as i,
    i5 as a,
    kT as o,
    pU as s,
    y5 as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as l,
    Nn as u,
    Rn as d,
    wn as f,
    zn as p
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    CHn as m,
    THn as h,
    a5 as g,
    i5 as _,
    t5 as v,
    wHn as y
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Qy as b,
    Zy as x
} from "./30901919-e33mbl5u1y88w5wu.js";

function S(e) {
    return e.stopPropagation()
}

function C(e) {
    return e.currentTarget.blur()
}
var w, T, E, D = e((() => {
    w = f(), h(), t(), b(), s(), r(), n(), d(), g(), T = l(), E = e => {
        "use forget";
        let t = (0, w.c)(26),
            {
                source: n,
                disabled: r,
                inline: s,
                onChange: l
            } = e,
            d = r !== void 0 && r,
            f = s !== void 0 && s,
            h = p(),
            g;
        t[0] === n ? g = t[1] : (g = () => _(n), t[0] = n, t[1] = g);
        let b = a(g),
            {
                speed: E,
                busy: D
            } = a(b.state$),
            O;
        if (t[2] !== D || t[3] !== b || t[4] !== d || t[5] !== f || t[6] !== h || t[7] !== l || t[8] !== n || t[9] !== E) {
            let e = i(),
                r = d || D,
                a = f ? `h-10 bg-black/15! px-3! font-medium text-white! backdrop-blur-md hover:bg-black/30! focus:bg-black/30!` : `size-11 px-0!`,
                s = !f && String(E).length > 3 && `text-xs`,
                p;
            t[11] !== a || t[12] !== s ? (p = c(`pointer-events-auto shrink-0 rounded-full! py-0! tabular-nums`, a, s), t[11] = a, t[12] = s, t[13] = p) : p = t[13];
            let g;
            t[14] === h ? g = t[15] : (g = h.formatMessage({
                id: `gifEditor.speed`,
                defaultMessage: `Playback speed`
            }), t[14] = h, t[15] = g);
            let _;
            t[16] === E ? _ = t[17] : (_ = (0, T.jsx)(u, {
                id: `gifEditor.speedValue`,
                defaultMessage: `{speed}×`,
                values: {
                    speed: E
                }
            }), t[16] = E, t[17] = _);
            let w;
            t[18] !== D || t[19] !== _ || t[20] !== r || t[21] !== p || t[22] !== g ? (w = (0, T.jsx)(o, {
                type: `button`,
                color: `ghost`,
                onClick: S,
                onPointerUp: C,
                disabled: r,
                "aria-busy": D,
                className: p,
                "aria-label": g,
                children: _
            }), t[18] = D, t[19] = _, t[20] = r, t[21] = p, t[22] = g, t[23] = w) : w = t[23];
            let k;
            t[24] === f ? k = t[25] : (k = f && (0, T.jsx)(y.Label, {
                children: (0, T.jsx)(u, {
                    id: `gifEditor.speedMenuLabel`,
                    defaultMessage: `GIF speed`
                })
            }), t[24] = f, t[25] = k), O = (0, T.jsxs)(m, {
                side: `top`,
                contentAlign: f ? `start` : void 0,
                triggerButton: w,
                children: [k, v.map(t => (0, T.jsx)(y.Item, {
                    role: `menuitemradio`,
                    "aria-checked": E === t,
                    disabled: d || D,
                    trailing: E === t ? (0, T.jsx)(x, {
                        className: `icon-sm`
                    }) : void 0,
                    onClick: r => {
                        r.stopPropagation(), l?.(t), b.changeSpeed(t, n).then(() => {
                            b.state$().error && e.danger(h.formatMessage({
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
            }), t[2] = D, t[3] = b, t[4] = d, t[5] = f, t[6] = h, t[7] = l, t[8] = n, t[9] = E, t[10] = O
        } else O = t[10];
        return O
    }
}));
export {
    D as n, E as t
};
//# sourceMappingURL=429c9f5e-eahacevj3ceu5yzs.js.map