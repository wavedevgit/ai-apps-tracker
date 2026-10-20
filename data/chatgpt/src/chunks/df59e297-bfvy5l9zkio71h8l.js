import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    Ch as r,
    Hot as i,
    JT as a,
    Nz as o,
    Pz as s,
    Uot as c,
    X5 as l,
    Y5 as u,
    YT as d,
    cn as f,
    hn as p,
    i5 as m,
    mh as h,
    r5 as g
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as _,
    Rn as v,
    Vn as y,
    wn as ee,
    zn as te
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    rmn as ne,
    umn as re
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    _v as ie,
    bg as ae,
    gv as b,
    yg as x
} from "./30901919-e8h11sw136qen6v0.js";
import {
    Mp as S,
    Np as C
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
import {
    c as w,
    s as oe
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    i as se,
    n as ce
} from "./dced7e81-b1h5myj7rhldv9ex.js";
import {
    n as le,
    t as T
} from "./e1a66d2b-jbxbfdrhakcg9jxz.js";
import {
    n as ue
} from "./7517017f-ovzqz6cpfshem2iz.js";
import {
    n as E,
    t as de
} from "./373ddd65-o5ueta5lk6m8a4cj.js";

function D(e) {
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

function fe({
    children: e,
    className: t,
    onClick: n,
    isClickable: r = !1,
    theme: i = `dark_gray`
}) {
    let a = D(i),
        o = (n != null || r) && a.hover;
    return (0, k.jsxs)(`div`, {
        className: u(`icon relative inline-block transition-opacity`, t, o, a.normal),
        onClick: n,
        children: [e ? (0, k.jsx)(x, {
            className: `icon`
        }) : (0, k.jsx)(b, {
            className: `icon`
        }), (0, k.jsx)(`span`, {
            className: u(`absolute inset-0 flex items-center justify-center text-[8px] font-black`, o, a.normal),
            children: e
        })]
    })
}

function O() {
    return (0, k.jsx)(fe, {
        theme: `light_gray`,
        children: (0, k.jsx)(T, {})
    })
}

function pe({
    count: e,
    isLoading: t,
    onClick: n,
    isError: r = !1
}) {
    return t ? (0, k.jsx)(O, {}) : (0, k.jsx)(fe, {
        onClick: n,
        theme: r ? `error` : `dark_gray`,
        children: e
    })
}

function me({
    isLoading: e = !1,
    onClick: t
}) {
    return e ? (0, k.jsx)(O, {}) : (0, k.jsx)(fe, {
        isClickable: !0,
        onClick: t,
        theme: `light_gray`
    })
}
var k, A = e((() => {
        le(), ie(), ae(), l(), k = _()
    })),
    he, j, M, ge, _e, ve, N, ye, be, P, F, xe = e((() => {
        he = ee(), r(), d(), w(), re(), s(), C(), m(), l(), n(), j = t(y()), v(), A(), ue(), se(), M = _(), {
            CrossSm: ge
        } = o, _e = {
            type: `spring`,
            bounce: .12,
            duration: .5
        }, ve = `opacity-50`, N = e => {
            "use forget";
            let t = (0, he.c)(16),
                {
                    position: n,
                    count: r,
                    offsetY: i,
                    isLoading: a,
                    onClick: o,
                    isError: s
                } = e,
                c = n === void 0 ? `absolute` : n,
                l = a !== void 0 && a,
                d = s !== void 0 && s,
                p;
            t[0] === c ? p = t[1] : (p = u(`flex`, c, oe.collapsedComment), t[0] = c, t[1] = p);
            let m, h;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
                opacity: 0
            }, h = {
                opacity: 1
            }, t[2] = m, t[3] = h) : (m = t[2], h = t[3]);
            let g;
            t[4] === i ? g = t[5] : (g = {
                translateY: i
            }, t[4] = i, t[5] = g);
            let _;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = {
                opacity: 0
            }, t[6] = _) : _ = t[6];
            let v;
            t[7] !== r || t[8] !== d || t[9] !== l || t[10] !== o ? (v = (0, M.jsx)(pe, {
                count: r,
                isLoading: l,
                onClick: o,
                isError: d
            }), t[7] = r, t[8] = d, t[9] = l, t[10] = o, t[11] = v) : v = t[11];
            let y;
            return t[12] !== p || t[13] !== g || t[14] !== v ? (y = (0, M.jsx)(f.div, {
                className: p,
                initial: m,
                animate: h,
                style: g,
                transition: _e,
                exit: _,
                children: v
            }), t[12] = p, t[13] = g, t[14] = v, t[15] = y) : y = t[15], y
        }, ye = ({
            isFocused: e,
            isHovered: t
        }) => (0, M.jsxs)(M.Fragment, {
            children: [(0, M.jsx)(`div`, {
                className: e || t ? `opacity-100 transition` : `opacity-75 transition`,
                children: (0, M.jsx)(`div`, {
                    className: `gizmo-bot-avatar rounded-full`,
                    children: (0, M.jsx)(h, {
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
            let a = e === ne.REMOVED;
            return (0, M.jsx)(`div`, {
                className: u(`text-token-text-primary mt-2 transition-all`, {
                    "opacity-80": !n && !r && !i && !a,
                    "opacity-40": !n && r && !i && !a,
                    [ve]: a
                }),
                children: (0, M.jsx)(S, {
                    text: t
                })
            })
        }, P = e => {
            "use forget";
            let t = (0, he.c)(80),
                {
                    acceptButtonLabel: n,
                    position: r,
                    left: i,
                    right: o,
                    comment: s,
                    disableAnimations: c,
                    onClick: l,
                    onMouseEnter: d,
                    onMouseLeave: m,
                    onAccept: h,
                    onDismiss: g,
                    translateY: _,
                    isFocused: v,
                    isSomeCommentFocused: y,
                    disableActions: ee,
                    isHovered: re,
                    ref: ie
                } = e,
                ae = r === void 0 ? `absolute` : r,
                b = c !== void 0 && c,
                x = v !== void 0 && v,
                S = y !== void 0 && y,
                C = ee !== void 0 && ee,
                w = re !== void 0 && re,
                [se, ce] = (0, j.useState)(!1),
                le = s.diffStatus === ne.ADDED,
                T = s.diffStatus === ne.REMOVED,
                ue = s.diffStatus != null,
                E;
            t[0] === d ? E = t[1] : (E = () => {
                ce(!0), d?.()
            }, t[0] = d, t[1] = E);
            let de = E,
                D;
            t[2] === m ? D = t[3] : (D = () => {
                ce(!1), m?.()
            }, t[2] = m, t[3] = D);
            let fe = D,
                O = te(),
                pe = x || se && !S,
                me = !x,
                k;
            t[4] !== x || t[5] !== w || t[6] !== ae || t[7] !== me ? (k = u(ae, oe.expandedComment, {
                "cursor-default": x,
                "cursor-pointer": me,
                [oe.expandedCommentFocused]: x,
                [oe.expandedCommentHovered]: w
            }), t[4] = x, t[5] = w, t[6] = ae, t[7] = me, t[8] = k) : k = t[8];
            let A;
            t[9] !== i || t[10] !== o ? (A = {
                left: i,
                right: o
            }, t[9] = i, t[10] = o, t[11] = A) : A = t[11];
            let N;
            t[12] !== b || t[13] !== _ ? (N = !b && {
                translateY: _,
                scale: .85,
                opacity: 0
            }, t[12] = b, t[13] = _, t[14] = N) : N = t[14];
            let P;
            t[15] !== b || t[16] !== x || t[17] !== _ ? (P = b ? void 0 : {
                translateY: _,
                scale: x ? 1 : .97,
                opacity: 1
            }, t[15] = b, t[16] = x, t[17] = _, t[18] = P) : P = t[18];
            let F;
            t[19] === b ? F = t[20] : (F = b ? void 0 : {
                scale: .85,
                opacity: 0,
                filter: `blur(16px)`
            }, t[19] = b, t[20] = F);
            let xe = C ? void 0 : de,
                I = C ? void 0 : fe,
                Se = s.id,
                L = !x && !w,
                R = w && !x,
                Ce = x || se && !S,
                z;
            t[21] !== ue || t[22] !== le || t[23] !== T || t[24] !== L || t[25] !== R || t[26] !== Ce ? (z = u(`flex min-h-8 flex-col overflow-hidden rounded-2xl border p-4 pt-2 text-start text-sm transition-all`, {
                "border-transparent bg-gray-50 dark:bg-gray-800": L,
                "border-token-border-default bg-token-main-surface-primary": R,
                "border-token-border-default bg-token-main-surface-primary shadow-xl": Ce,
                "relative after:absolute after:start-0 after:top-0 after:bottom-0 after:w-1": ue,
                "after:bg-green-500": le,
                "after:bg-red-500": T
            }), t[21] = ue, t[22] = le, t[23] = T, t[24] = L, t[25] = R, t[26] = Ce, t[27] = z) : z = t[27];
            let B;
            t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (B = {
                width: 280
            }, t[28] = B) : B = t[28];
            let V;
            t[29] === T ? V = t[30] : (V = u(`flex h-8 flex-row items-center gap-2.5`, {
                [ve]: T
            }), t[29] = T, t[30] = V);
            let H;
            t[31] !== x || t[32] !== w ? (H = (0, M.jsx)(ye, {
                isFocused: x,
                isHovered: w
            }), t[31] = x, t[32] = w, t[33] = H) : H = t[33];
            let U = !C,
                W;
            t[34] !== C || t[35] !== U ? (W = u(`text-token-text-secondary -me-1 rounded-full bg-transparent p-1`, {
                "hover:text-token-text-primary cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700": U,
                "cursor-not-allowed": C
            }), t[34] = C, t[35] = U, t[36] = W) : W = t[36];
            let G;
            t[37] === O ? G = t[38] : (G = O.formatMessage({
                id: `fYDa3C`,
                defaultMessage: `Dismiss comment`
            }), t[37] = O, t[38] = G);
            let K;
            t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (K = (0, M.jsx)(ge, {
                className: `icon-sm`
            }), t[39] = K) : K = t[39];
            let q;
            t[40] !== C || t[41] !== g || t[42] !== W || t[43] !== G ? (q = (0, M.jsx)(`button`, {
                className: W,
                onClick: g,
                disabled: C,
                "aria-label": G,
                children: K
            }), t[40] = C, t[41] = g, t[42] = W, t[43] = G, t[44] = q) : q = t[44];
            let J;
            t[45] !== V || t[46] !== H || t[47] !== q ? (J = (0, M.jsxs)(`div`, {
                className: V,
                children: [H, q]
            }), t[45] = V, t[46] = H, t[47] = q, t[48] = J) : J = t[48];
            let Y;
            t[49] !== s || t[50] !== x || t[51] !== w || t[52] !== S ? (Y = (0, M.jsx)(be, {
                comment: s,
                isFocused: x,
                isHovered: w,
                isSomeCommentFocused: S
            }), t[49] = s, t[50] = x, t[51] = w, t[52] = S, t[53] = Y) : Y = t[53];
            let X;
            t[54] !== n || t[55] !== C || t[56] !== b || t[57] !== O || t[58] !== h || t[59] !== pe ? (X = pe && (0, M.jsx)(f.div, {
                initial: !b && {
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
                exit: b ? void 0 : {
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
                    children: (0, M.jsx)(a, {
                        color: `secondary`,
                        onClick: h,
                        disabled: C,
                        children: n ?? O.formatMessage({
                            id: `WIW5OL`,
                            defaultMessage: `Apply`
                        })
                    })
                })
            }), t[54] = n, t[55] = C, t[56] = b, t[57] = O, t[58] = h, t[59] = pe, t[60] = X) : X = t[60];
            let Z;
            t[61] === X ? Z = t[62] : (Z = (0, M.jsx)(p, {
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
            return t[68] !== s.id || t[69] !== l || t[70] !== ie || t[71] !== k || t[72] !== A || t[73] !== N || t[74] !== P || t[75] !== F || t[76] !== xe || t[77] !== I || t[78] !== Q ? ($ = (0, M.jsx)(f.div, {
                ref: ie,
                className: k,
                style: A,
                initial: N,
                animate: P,
                exit: F,
                transition: _e,
                onClick: l,
                onMouseEnter: xe,
                onMouseLeave: I,
                "data-comment-id": Se,
                children: Q
            }), t[68] = s.id, t[69] = l, t[70] = ie, t[71] = k, t[72] = A, t[73] = N, t[74] = P, t[75] = F, t[76] = xe, t[77] = I, t[78] = Q, t[79] = $) : $ = t[79], $
        }, F = ({
            offsetY: e,
            opensOverDocument: t = !1,
            disableActions: n = !1,
            isFocused: r = !1,
            isSomeCommentFocused: i = !1,
            onAccept: a,
            onClick: o,
            onDismiss: s,
            onMouseEnter: c,
            onMouseLeave: l,
            comment: u,
            isHovered: d = !1
        }) => {
            let f = (0, j.useRef)(null);
            return (0, j.useEffect)(() => g(document, {
                mousedown: ({
                    target: e
                }) => {
                    e instanceof HTMLElement && !e.closest(`[data-comment-id]`) && !f.current?.contains(e) && ce.blurComment()
                }
            })), (0, M.jsx)(P, {
                ref: f,
                comment: u,
                disableActions: n,
                onAccept: a,
                onDismiss: s,
                onMouseEnter: c,
                onMouseLeave: l,
                isSomeCommentFocused: i,
                isHovered: d,
                onClick: o,
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
    let t = e.marks.find(e => e.type.name === de.proseMirrorMarkName());
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
    E()
}));

function L(e, t) {
    let {
        parent: n,
        textOffset: r
    } = t, i = e.nodeAt(t.pos);
    if (!i) return c(I(n)).end;
    let {
        start: a
    } = c(I(i));
    return a + r
}

function R(e, t) {
    let n = e.nodeAt(t.pos);
    if (n) {
        let {
            start: e
        } = c(I(n));
        return e + t.textOffset
    }
    return c(I(t.parent)).end
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
        Se(), i()
    })),
    B, V, H, U, W, G, K, q = e((() => {
        B = t(y()), V = (0, B.createContext)(() => null), H = (0, B.createContext)(null), U = (0, B.createContext)(0), W = () => (0, B.useContext)(V), G = () => (0, B.useContext)(H), K = () => (0, B.useContext)(U)
    })),
    J, Y, X, Z, Q, $, we = e((() => {
        J = t(y()), Y = (0, J.createContext)(() => null), X = (0, J.createContext)(null), Z = (0, J.createContext)(0), Q = () => (0, J.useContext)(Y), $ = () => (0, J.useContext)(X)
    }));
export {
    xe as C, A as E, P as S, O as T, L as _, $ as a, N as b, V as c, G as d, K as f, R as g, Ce as h, we as i, U as l, z as m, Y as n, Q as o, W as p, Z as r, H as s, X as t, q as u, I as v, me as w, F as x, Se as y
};
//# sourceMappingURL=df59e297-bfvy5l9zkio71h8l.js.map