import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as t,
    JT as n,
    N5 as r,
    RU as i,
    Y5 as a,
    h8 as o,
    qT as s,
    zU as c
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as l,
    Nn as u,
    Rn as d,
    wn as f,
    zn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    MHn as m,
    NHn as h,
    PHn as g,
    o5 as _,
    r5 as v,
    s5 as y
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Jy as b,
    Yy as x
} from "./30901919-7dzdc1ou0jtwkwpt.js";

function S(e) {
    return e.stopPropagation()
}

function C(e) {
    return e.currentTarget.blur()
}
var w, T, E, D = e((() => {
    w = f(), g(), n(), x(), c(), a(), o(), d(), y(), T = l(), E = e => {
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
            g = p(),
            y;
        n[0] === a ? y = n[1] : (y = () => _(a), n[0] = a, n[1] = y);
        let x = r(y),
            {
                speed: E,
                busy: D
            } = r(x.state$),
            O;
        if (n[2] !== D || n[3] !== x || n[4] !== d || n[5] !== f || n[6] !== g || n[7] !== l || n[8] !== a || n[9] !== E) {
            let e = i(),
                r = d || D,
                o = f ? `h-10 bg-black/15! px-3! font-medium text-white! backdrop-blur-md hover:bg-black/30! focus:bg-black/30!` : `size-11 px-0!`,
                c = !f && String(E).length > 3 && `text-xs`,
                p;
            n[11] !== o || n[12] !== c ? (p = t(`pointer-events-auto shrink-0 rounded-full! py-0! tabular-nums`, o, c), n[11] = o, n[12] = c, n[13] = p) : p = n[13];
            let _;
            n[14] === g ? _ = n[15] : (_ = g.formatMessage({
                id: `gifEditor.speed`,
                defaultMessage: `Playback speed`
            }), n[14] = g, n[15] = _);
            let y;
            n[16] === E ? y = n[17] : (y = (0, T.jsx)(u, {
                id: `gifEditor.speedValue`,
                defaultMessage: `{speed}×`,
                values: {
                    speed: E
                }
            }), n[16] = E, n[17] = y);
            let w;
            n[18] !== D || n[19] !== y || n[20] !== r || n[21] !== p || n[22] !== _ ? (w = (0, T.jsx)(s, {
                type: `button`,
                color: `ghost`,
                onClick: S,
                onPointerUp: C,
                disabled: r,
                "aria-busy": D,
                className: p,
                "aria-label": _,
                children: y
            }), n[18] = D, n[19] = y, n[20] = r, n[21] = p, n[22] = _, n[23] = w) : w = n[23];
            let k;
            n[24] === f ? k = n[25] : (k = f && (0, T.jsx)(h.Label, {
                children: (0, T.jsx)(u, {
                    id: `gifEditor.speedMenuLabel`,
                    defaultMessage: `GIF speed`
                })
            }), n[24] = f, n[25] = k), O = (0, T.jsxs)(m, {
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
                        n.stopPropagation(), l?.(t), x.changeSpeed(t, a).then(() => {
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
            }), n[2] = D, n[3] = x, n[4] = d, n[5] = f, n[6] = g, n[7] = l, n[8] = a, n[9] = E, n[10] = O
        } else O = n[10];
        return O
    }
}));
export {
    D as n, E as t
};
//# sourceMappingURL=429c9f5e-ebprh0kerza3bl1v.js.map