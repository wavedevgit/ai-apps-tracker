import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as t,
    G5 as n,
    JT as r,
    K5 as i,
    RU as a,
    f8 as o,
    qT as s,
    zU as c
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as l,
    Nn as u,
    Rn as d,
    wn as f,
    zn as p
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    IHn as m,
    LHn as h,
    RHn as g,
    o5 as _,
    r5 as v,
    s5 as y
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Jy as b,
    Yy as x
} from "./30901919-om7b3qf5hp4j9x4l.js";

function S(e) {
    return e.stopPropagation()
}

function C(e) {
    return e.currentTarget.blur()
}
var w, T, E, D = e((() => {
    w = f(), g(), r(), x(), c(), i(), o(), d(), y(), T = l(), E = e => {
        "use forget";
        let r = (0, w.c)(26),
            {
                source: i,
                disabled: o,
                inline: c,
                onChange: l
            } = e,
            d = o !== void 0 && o,
            f = c !== void 0 && c,
            g = p(),
            y;
        r[0] === i ? y = r[1] : (y = () => _(i), r[0] = i, r[1] = y);
        let x = t(y),
            {
                speed: E,
                busy: D
            } = t(x.state$),
            O;
        if (r[2] !== D || r[3] !== x || r[4] !== d || r[5] !== f || r[6] !== g || r[7] !== l || r[8] !== i || r[9] !== E) {
            let e = a(),
                t = d || D,
                o = f ? `h-10 bg-black/15! px-3! font-medium text-white! backdrop-blur-md hover:bg-black/30! focus:bg-black/30!` : `size-11 px-0!`,
                c = !f && String(E).length > 3 && `text-xs`,
                p;
            r[11] !== o || r[12] !== c ? (p = n(`pointer-events-auto shrink-0 rounded-full! py-0! tabular-nums`, o, c), r[11] = o, r[12] = c, r[13] = p) : p = r[13];
            let _;
            r[14] === g ? _ = r[15] : (_ = g.formatMessage({
                id: `gifEditor.speed`,
                defaultMessage: `Playback speed`
            }), r[14] = g, r[15] = _);
            let y;
            r[16] === E ? y = r[17] : (y = (0, T.jsx)(u, {
                id: `gifEditor.speedValue`,
                defaultMessage: `{speed}×`,
                values: {
                    speed: E
                }
            }), r[16] = E, r[17] = y);
            let w;
            r[18] !== D || r[19] !== y || r[20] !== t || r[21] !== p || r[22] !== _ ? (w = (0, T.jsx)(s, {
                type: `button`,
                color: `ghost`,
                onClick: S,
                onPointerUp: C,
                disabled: t,
                "aria-busy": D,
                className: p,
                "aria-label": _,
                children: y
            }), r[18] = D, r[19] = y, r[20] = t, r[21] = p, r[22] = _, r[23] = w) : w = r[23];
            let k;
            r[24] === f ? k = r[25] : (k = f && (0, T.jsx)(h.Label, {
                children: (0, T.jsx)(u, {
                    id: `gifEditor.speedMenuLabel`,
                    defaultMessage: `GIF speed`
                })
            }), r[24] = f, r[25] = k), O = (0, T.jsxs)(m, {
                side: `top`,
                contentAlign: f ? `start` : void 0,
                triggerButton: w,
                children: [k, v.map(t => (0, T.jsx)(h.Item, {
                    role: `menuitemradio`,
                    "aria-checked": E === t,
                    disabled: d || D,
                    trailing: E === t ? (0, T.jsx)(b, {
                        className: `icon-sm`
                    }) : void 0,
                    onClick: n => {
                        n.stopPropagation(), l?.(t), x.changeSpeed(t, i).then(() => {
                            x.state$().error && e.danger(g.formatMessage({
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
            }), r[2] = D, r[3] = x, r[4] = d, r[5] = f, r[6] = g, r[7] = l, r[8] = i, r[9] = E, r[10] = O
        } else O = r[10];
        return O
    }
}));
export {
    D as n, E as t
};
//# sourceMappingURL=429c9f5e-jy1skaj3v66kv0xk.js.map