import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    IU as n,
    LU as r,
    c7 as i,
    eE as a,
    k8 as o,
    l7 as s,
    q5 as c
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as l,
    Nn as u,
    Rn as d,
    wn as f,
    zn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Hn as m,
    QHn as h,
    c5 as g,
    d5 as _,
    eUn as v,
    f5 as y
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Jy as b,
    Yy as x
} from "./30901919-r9pahacmzqudnt4f.js";

function S(e) {
    return e.stopPropagation()
}

function C(e) {
    return e.currentTarget.blur()
}
var w, T, E, D = e((() => {
    w = f(), v(), a(), x(), r(), s(), o(), d(), y(), T = l(), E = e => {
        "use forget";
        let r = (0, w.c)(26),
            {
                source: a,
                disabled: o,
                inline: s,
                onChange: l
            } = e,
            d = o !== void 0 && o,
            f = s !== void 0 && s,
            v = p(),
            y;
        r[0] === a ? y = r[1] : (y = () => _(a), r[0] = a, r[1] = y);
        let x = c(y),
            {
                speed: E,
                busy: D
            } = c(x.state$),
            O;
        if (r[2] !== D || r[3] !== x || r[4] !== d || r[5] !== f || r[6] !== v || r[7] !== l || r[8] !== a || r[9] !== E) {
            let e = n(),
                o = d || D,
                s = f ? `h-10 bg-black/15! px-3! font-medium text-white! backdrop-blur-md hover:bg-black/30! focus:bg-black/30!` : `size-11 px-0!`,
                c = !f && String(E).length > 3 && `text-xs`,
                p;
            r[11] !== s || r[12] !== c ? (p = i(`pointer-events-auto shrink-0 rounded-full! py-0! tabular-nums`, s, c), r[11] = s, r[12] = c, r[13] = p) : p = r[13];
            let _;
            r[14] === v ? _ = r[15] : (_ = v.formatMessage({
                id: `gifEditor.speed`,
                defaultMessage: `Playback speed`
            }), r[14] = v, r[15] = _);
            let y;
            r[16] === E ? y = r[17] : (y = (0, T.jsx)(u, {
                id: `gifEditor.speedValue`,
                defaultMessage: `{speed}×`,
                values: {
                    speed: E
                }
            }), r[16] = E, r[17] = y);
            let w;
            r[18] !== D || r[19] !== y || r[20] !== o || r[21] !== p || r[22] !== _ ? (w = (0, T.jsx)(t, {
                type: `button`,
                color: `ghost`,
                onClick: S,
                onPointerUp: C,
                disabled: o,
                "aria-busy": D,
                className: p,
                "aria-label": _,
                children: y
            }), r[18] = D, r[19] = y, r[20] = o, r[21] = p, r[22] = _, r[23] = w) : w = r[23];
            let k;
            r[24] === f ? k = r[25] : (k = f && (0, T.jsx)(m.Label, {
                children: (0, T.jsx)(u, {
                    id: `gifEditor.speedMenuLabel`,
                    defaultMessage: `GIF speed`
                })
            }), r[24] = f, r[25] = k), O = (0, T.jsxs)(h, {
                side: `top`,
                contentAlign: f ? `start` : void 0,
                triggerButton: w,
                children: [k, g.map(t => (0, T.jsx)(m.Item, {
                    role: `menuitemradio`,
                    "aria-checked": E === t,
                    disabled: d || D,
                    trailing: E === t ? (0, T.jsx)(b, {
                        className: `icon-sm`
                    }) : void 0,
                    onClick: n => {
                        n.stopPropagation(), l?.(t), x.changeSpeed(t, a).then(() => {
                            x.state$().error && e.danger(v.formatMessage({
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
            }), r[2] = D, r[3] = x, r[4] = d, r[5] = f, r[6] = v, r[7] = l, r[8] = a, r[9] = E, r[10] = O
        } else O = r[10];
        return O
    }
}));
export {
    D as n, E as t
};
//# sourceMappingURL=429c9f5e-dkcl33w5iczkox8u.js.map