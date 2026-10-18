import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    At as r,
    D8 as i,
    O8 as a,
    Ym as o,
    b5 as s,
    cn as c,
    dot as l,
    hn as u,
    ih as d,
    kT as f,
    mz as p,
    pz as m,
    uot as h,
    y5 as g
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as _,
    Rn as v,
    Vn as y,
    wn as ee,
    zn as te
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Kpn as ne,
    zpn as re
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    bg as ie,
    bv as b,
    yg as x,
    yv as S
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Mp as C,
    jp as w
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    c as T,
    s as ae
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    i as oe,
    n as se
} from "./dced7e81-jzt06wdzz118ufvf.js";
import {
    n as ce,
    t as E
} from "./e1a66d2b-dob1j28wge0fmdz8.js";
import {
    n as le
} from "./7517017f-ovzqz6cpfshem2iz.js";
import {
    n as D,
    t as ue
} from "./373ddd65-o5ueta5lk6m8a4cj.js";

function O(e) {
    switch (e) {
        case `dark_gray`:
            return {
                normal: `text-token-text-secondary dark:text-white-400`, hover: `cursor-pointer hover:text-token-text-primary group-hover:text-token-text-primary`
            };
        case `light_gray`:
            return {
                normal: `text-gray-400`, hover: `cursor-pointer hover:text-token-text-secondary group-hover:text-token-text-secondary`
            };
        case `error`:
            return {
                normal: `text-red-500`, hover: `cursor-pointer hover:text-red-500 group-hover:text-red-500`
            }
    }
}

function de({
    children: e,
    className: t,
    onClick: n,
    isClickable: r = !1,
    theme: i = `dark_gray`
}) {
    let a = O(i),
        o = (n != null || r) && a.hover;
    return (0, A.jsxs)(`div`, {
        className: g(`icon relative inline-block transition-opacity`, t, o, a.normal),
        onClick: n,
        children: [e ? (0, A.jsx)(x, {
            className: `icon`
        }) : (0, A.jsx)(S, {
            className: `icon`
        }), (0, A.jsx)(`span`, {
            className: g(`absolute inset-0 flex items-center justify-center text-[8px] font-black`, o, a.normal),
            children: e
        })]
    })
}

function k() {
    return (0, A.jsx)(de, {
        theme: `light_gray`,
        children: (0, A.jsx)(E, {})
    })
}

function fe({
    count: e,
    isLoading: t,
    onClick: n,
    isError: r = !1
}) {
    return t ? (0, A.jsx)(k, {}) : (0, A.jsx)(de, {
        onClick: n,
        theme: r ? `error` : `dark_gray`,
        children: e
    })
}

function pe({
    isLoading: e = !1,
    onClick: t
}) {
    return e ? (0, A.jsx)(k, {}) : (0, A.jsx)(de, {
        isClickable: !0,
        onClick: t,
        theme: `light_gray`
    })
}
var A, j = e((() => {
        ce(), b(), ie(), s(), A = _()
    })),
    me, he, M, ge, _e, ve, N, ye, be, P, F, xe = e((() => {
        me = ee(), d(), n(), T(), ne(), p(), C(), a(), s(), r(), he = t(y()), v(), j(), le(), oe(), M = _(), {
            CrossSm: ge
        } = m, _e = {
            type: `spring`,
            bounce: .12,
            duration: .5
        }, ve = `opacity-50`, N = e => {
            "use forget";
            let t = (0, me.c)(16),
                {
                    position: n,
                    count: r,
                    offsetY: i,
                    isLoading: a,
                    onClick: o,
                    isError: s
                } = e,
                l = n === void 0 ? `absolute` : n,
                u = a !== void 0 && a,
                d = s !== void 0 && s,
                f;
            t[0] === l ? f = t[1] : (f = g(`flex`, l, ae.collapsedComment), t[0] = l, t[1] = f);
            let p, m;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
                opacity: 0
            }, m = {
                opacity: 1
            }, t[2] = p, t[3] = m) : (p = t[2], m = t[3]);
            let h;
            t[4] === i ? h = t[5] : (h = {
                translateY: i
            }, t[4] = i, t[5] = h);
            let _;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = {
                opacity: 0
            }, t[6] = _) : _ = t[6];
            let v;
            t[7] !== r || t[8] !== d || t[9] !== u || t[10] !== o ? (v = (0, M.jsx)(fe, {
                count: r,
                isLoading: u,
                onClick: o,
                isError: d
            }), t[7] = r, t[8] = d, t[9] = u, t[10] = o, t[11] = v) : v = t[11];
            let y;
            return t[12] !== f || t[13] !== h || t[14] !== v ? (y = (0, M.jsx)(c.div, {
                className: f,
                initial: p,
                animate: m,
                style: h,
                transition: _e,
                exit: _,
                children: v
            }), t[12] = f, t[13] = h, t[14] = v, t[15] = y) : y = t[15], y
        }, ye = ({
            isFocused: e,
            isHovered: t
        }) => (0, M.jsxs)(M.Fragment, {
            children: [(0, M.jsx)(`div`, {
                className: e || t ? `opacity-100 transition` : `opacity-75 transition`,
                children: (0, M.jsx)(`div`, {
                    className: `gizmo-bot-avatar rounded-full`,
                    children: (0, M.jsx)(o, {
                        iconName: `openai`
                    })
                })
            }), (0, M.jsx)(`span`, {
                className: e || t ? `grow font-medium text-token-text-primary transition-colors` : `grow font-medium text-token-text-secondary transition-colors`,
                children: `ChatGPT`
            })]
        }), be = ({
            comment: {
                diffStatus: e,
                content: t
            },
            isFocused: n,
            isSomeCommentFocused: r,
            isHovered: i
        }) => {
            let a = e === re.REMOVED;
            return (0, M.jsx)(`div`, {
                className: g(`text-token-text-primary mt-2 transition-all`, {
                    "opacity-80": !n && !r && !i && !a,
                    "opacity-40": !n && r && !i && !a,
                    [ve]: a
                }),
                children: (0, M.jsx)(w, {
                    text: t
                })
            })
        }, P = e => {
            "use forget";
            let t = (0, me.c)(80),
                {
                    acceptButtonLabel: n,
                    position: r,
                    left: i,
                    right: a,
                    comment: o,
                    disableAnimations: s,
                    onClick: l,
                    onMouseEnter: d,
                    onMouseLeave: p,
                    onAccept: m,
                    onDismiss: h,
                    translateY: _,
                    isFocused: v,
                    isSomeCommentFocused: y,
                    disableActions: ee,
                    isHovered: ne,
                    ref: ie
                } = e,
                b = r === void 0 ? `absolute` : r,
                x = s !== void 0 && s,
                S = v !== void 0 && v,
                C = y !== void 0 && y,
                w = ee !== void 0 && ee,
                T = ne !== void 0 && ne,
                [oe, se] = (0, he.useState)(!1),
                ce = o.diffStatus === re.ADDED,
                E = o.diffStatus === re.REMOVED,
                le = o.diffStatus != null,
                D;
            t[0] === d ? D = t[1] : (D = () => {
                se(!0), d?.()
            }, t[0] = d, t[1] = D);
            let ue = D,
                O;
            t[2] === p ? O = t[3] : (O = () => {
                se(!1), p?.()
            }, t[2] = p, t[3] = O);
            let de = O,
                k = te(),
                fe = S || oe && !C,
                pe = !S,
                A;
            t[4] !== S || t[5] !== T || t[6] !== b || t[7] !== pe ? (A = g(b, ae.expandedComment, {
                "cursor-default": S,
                "cursor-pointer": pe,
                [ae.expandedCommentFocused]: S,
                [ae.expandedCommentHovered]: T
            }), t[4] = S, t[5] = T, t[6] = b, t[7] = pe, t[8] = A) : A = t[8];
            let j;
            t[9] !== i || t[10] !== a ? (j = {
                left: i,
                right: a
            }, t[9] = i, t[10] = a, t[11] = j) : j = t[11];
            let N;
            t[12] !== x || t[13] !== _ ? (N = !x && {
                translateY: _,
                scale: .85,
                opacity: 0
            }, t[12] = x, t[13] = _, t[14] = N) : N = t[14];
            let P;
            t[15] !== x || t[16] !== S || t[17] !== _ ? (P = x ? void 0 : {
                translateY: _,
                scale: S ? 1 : .97,
                opacity: 1
            }, t[15] = x, t[16] = S, t[17] = _, t[18] = P) : P = t[18];
            let F;
            t[19] === x ? F = t[20] : (F = x ? void 0 : {
                scale: .85,
                opacity: 0,
                filter: `blur(16px)`
            }, t[19] = x, t[20] = F);
            let xe = w ? void 0 : ue,
                I = w ? void 0 : de,
                Se = o.id,
                L = !S && !T,
                R = T && !S,
                Ce = S || oe && !C,
                z;
            t[21] !== le || t[22] !== ce || t[23] !== E || t[24] !== L || t[25] !== R || t[26] !== Ce ? (z = g(`flex min-h-8 flex-col overflow-hidden rounded-2xl border p-4 pt-2 text-start text-sm transition-all`, {
                "border-transparent bg-gray-50 dark:bg-gray-800": L,
                "border-token-border-default bg-token-main-surface-primary": R,
                "border-token-border-default bg-token-main-surface-primary shadow-xl": Ce,
                "relative after:absolute after:start-0 after:top-0 after:bottom-0 after:w-1": le,
                "after:bg-green-500": ce,
                "after:bg-red-500": E
            }), t[21] = le, t[22] = ce, t[23] = E, t[24] = L, t[25] = R, t[26] = Ce, t[27] = z) : z = t[27];
            let B;
            t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (B = {
                width: 280
            }, t[28] = B) : B = t[28];
            let V;
            t[29] === E ? V = t[30] : (V = g(`flex h-8 flex-row items-center gap-2.5`, {
                [ve]: E
            }), t[29] = E, t[30] = V);
            let H;
            t[31] !== S || t[32] !== T ? (H = (0, M.jsx)(ye, {
                isFocused: S,
                isHovered: T
            }), t[31] = S, t[32] = T, t[33] = H) : H = t[33];
            let U = !w,
                W;
            t[34] !== w || t[35] !== U ? (W = g(`text-token-text-secondary -me-1 rounded-full bg-transparent p-1`, {
                "hover:text-token-text-primary cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700": U,
                "cursor-not-allowed": w
            }), t[34] = w, t[35] = U, t[36] = W) : W = t[36];
            let G;
            t[37] === k ? G = t[38] : (G = k.formatMessage({
                id: `fYDa3C`,
                defaultMessage: `Dismiss comment`
            }), t[37] = k, t[38] = G);
            let K;
            t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (K = (0, M.jsx)(ge, {
                className: `icon-sm`
            }), t[39] = K) : K = t[39];
            let q;
            t[40] !== w || t[41] !== h || t[42] !== W || t[43] !== G ? (q = (0, M.jsx)(`button`, {
                className: W,
                onClick: h,
                disabled: w,
                "aria-label": G,
                children: K
            }), t[40] = w, t[41] = h, t[42] = W, t[43] = G, t[44] = q) : q = t[44];
            let J;
            t[45] !== V || t[46] !== H || t[47] !== q ? (J = (0, M.jsxs)(`div`, {
                className: V,
                children: [H, q]
            }), t[45] = V, t[46] = H, t[47] = q, t[48] = J) : J = t[48];
            let Y;
            t[49] !== o || t[50] !== S || t[51] !== T || t[52] !== C ? (Y = (0, M.jsx)(be, {
                comment: o,
                isFocused: S,
                isHovered: T,
                isSomeCommentFocused: C
            }), t[49] = o, t[50] = S, t[51] = T, t[52] = C, t[53] = Y) : Y = t[53];
            let X;
            t[54] !== n || t[55] !== w || t[56] !== x || t[57] !== k || t[58] !== m || t[59] !== fe ? (X = fe && (0, M.jsx)(c.div, {
                initial: !x && {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: `auto`,
                    transition: {
                        opacity: {
                            delay: .14,
                            duration: .2
                        },
                        height: {
                            type: `spring`,
                            bounce: 0
                        }
                    }
                },
                exit: x ? void 0 : {
                    opacity: 0,
                    height: 0,
                    transition: {
                        opacity: {
                            duration: .08
                        },
                        height: {
                            type: `spring`,
                            bounce: 0
                        }
                    }
                },
                className: `flex items-center justify-start`,
                children: (0, M.jsx)(`div`, {
                    className: `mt-2.5`,
                    children: (0, M.jsx)(f, {
                        color: `secondary`,
                        onClick: m,
                        disabled: w,
                        children: n ?? k.formatMessage({
                            id: `WIW5OL`,
                            defaultMessage: `Apply`
                        })
                    })
                })
            }), t[54] = n, t[55] = w, t[56] = x, t[57] = k, t[58] = m, t[59] = fe, t[60] = X) : X = t[60];
            let Z;
            t[61] === X ? Z = t[62] : (Z = (0, M.jsx)(u, {
                initial: !1,
                children: X
            }), t[61] = X, t[62] = Z);
            let Q;
            t[63] !== z || t[64] !== J || t[65] !== Y || t[66] !== Z ? (Q = (0, M.jsxs)(`div`, {
                className: z,
                style: B,
                children: [J, Y, Z]
            }), t[63] = z, t[64] = J, t[65] = Y, t[66] = Z, t[67] = Q) : Q = t[67];
            let $;
            return t[68] !== o.id || t[69] !== l || t[70] !== ie || t[71] !== A || t[72] !== j || t[73] !== N || t[74] !== P || t[75] !== F || t[76] !== xe || t[77] !== I || t[78] !== Q ? ($ = (0, M.jsx)(c.div, {
                ref: ie,
                className: A,
                style: j,
                initial: N,
                animate: P,
                exit: F,
                transition: _e,
                onClick: l,
                onMouseEnter: xe,
                onMouseLeave: I,
                "data-comment-id": Se,
                children: Q
            }), t[68] = o.id, t[69] = l, t[70] = ie, t[71] = A, t[72] = j, t[73] = N, t[74] = P, t[75] = F, t[76] = xe, t[77] = I, t[78] = Q, t[79] = $) : $ = t[79], $
        }, F = ({
            offsetY: e,
            opensOverDocument: t = !1,
            disableActions: n = !1,
            isFocused: r = !1,
            isSomeCommentFocused: a = !1,
            onAccept: o,
            onClick: s,
            onDismiss: c,
            onMouseEnter: l,
            onMouseLeave: u,
            comment: d,
            isHovered: f = !1
        }) => {
            let p = (0, he.useRef)(null);
            return (0, he.useEffect)(() => i(document, {
                mousedown: ({
                    target: e
                }) => {
                    e instanceof HTMLElement && !e.closest(`[data-comment-id]`) && !p.current?.contains(e) && se.blurComment()
                }
            })), (0, M.jsx)(P, {
                ref: p,
                comment: d,
                disableActions: n,
                onAccept: o,
                onDismiss: c,
                onMouseEnter: l,
                onMouseLeave: u,
                isSomeCommentFocused: a,
                isHovered: f,
                onClick: s,
                translateY: e,
                isFocused: r,
                left: t ? void 0 : 36,
                right: t ? -24 : void 0
            })
        }
    }));

function I(e) {
    if (e.type.name !== `text`) {
        let {
            start: t,
            end: n
        } = e.attrs;
        return t == null || n == null ? null : {
            start: t,
            end: n
        }
    }
    let t = e.marks.find(e => e.type.name === ue.proseMirrorMarkName());
    if (!t) return null;
    let {
        start: n,
        end: r
    } = t.attrs;
    return n == null || r == null ? null : {
        start: n,
        end: r
    }
}
var Se = e((() => {
    D()
}));

function L(e, t) {
    let {
        parent: n,
        textOffset: r
    } = t, i = e.nodeAt(t.pos);
    if (!i) return l(I(n)).end;
    let {
        start: a
    } = l(I(i));
    return a + r
}

function R(e, t) {
    let n = e.nodeAt(t.pos);
    if (n) {
        let {
            start: e
        } = l(I(n));
        return e + t.textOffset
    }
    return l(I(t.parent)).end
}

function Ce(e, t) {
    let n = new Map;
    for (let [r, i] of t) {
        let t = L(e, e.resolve(i.start)),
            a = R(e, e.resolve(i.end));
        n.set(r, {
            start: t,
            end: a
        })
    }
    return n
}
var z = e((() => {
        Se(), h()
    })),
    B, V, H, U, W, G, K, q = e((() => {
        B = t(y()), V = (0, B.createContext)(() => null), H = (0, B.createContext)(null), U = (0, B.createContext)(0), W = () => (0, B.useContext)(V), G = () => (0, B.useContext)(H), K = () => (0, B.useContext)(U)
    })),
    J, Y, X, Z, Q, $, we = e((() => {
        J = t(y()), Y = (0, J.createContext)(() => null), X = (0, J.createContext)(null), Z = (0, J.createContext)(0), Q = () => (0, J.useContext)(Y), $ = () => (0, J.useContext)(X)
    }));
export {
    xe as C, j as E, P as S, k as T, L as _, $ as a, N as b, V as c, G as d, K as f, R as g, Ce as h, we as i, U as l, z as m, Y as n, Q as o, W as p, Z as r, H as s, X as t, q as u, I as v, pe as w, F as x, Se as y
};
//# sourceMappingURL=df59e297-cim8xjtcq0aw73x8.js.map