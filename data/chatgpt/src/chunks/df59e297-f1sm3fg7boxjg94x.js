import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    At as r,
    Bz as i,
    Vz as a,
    _5 as o,
    c7 as s,
    cn as ee,
    eE as c,
    g5 as l,
    hh as u,
    hn as d,
    l7 as f,
    ost as p,
    sst as m,
    wh as h
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as g,
    Rn as _,
    Vn as v,
    wn as te,
    zn as ne
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bmn as re,
    Nmn as ie
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    _v as y,
    bg as ae,
    gv as b,
    yg as x
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    Fp as S,
    Pp as C
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    c as w,
    s as oe
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    i as se,
    n as ce
} from "./dced7e81-jvrrcxnvz22x23ei.js";
import {
    n as le,
    t as T
} from "./e1a66d2b-ost0qyl4eh9wemvy.js";
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
    return (0, A.jsxs)(`div`, {
        className: s(`icon relative inline-block transition-opacity`, t, o, a.normal),
        onClick: n,
        children: [e ? (0, A.jsx)(x, {
            className: `icon`
        }) : (0, A.jsx)(b, {
            className: `icon`
        }), (0, A.jsx)(`span`, {
            className: s(`absolute inset-0 flex items-center justify-center text-[8px] font-black`, o, a.normal),
            children: e
        })]
    })
}

function O() {
    return (0, A.jsx)(fe, {
        theme: `light_gray`,
        children: (0, A.jsx)(T, {})
    })
}

function pe({
    count: e,
    isLoading: t,
    onClick: n,
    isError: r = !1
}) {
    return t ? (0, A.jsx)(O, {}) : (0, A.jsx)(fe, {
        onClick: n,
        theme: r ? `error` : `dark_gray`,
        children: e
    })
}

function k({
    isLoading: e = !1,
    onClick: t
}) {
    return e ? (0, A.jsx)(O, {}) : (0, A.jsx)(fe, {
        isClickable: !0,
        onClick: t,
        theme: `light_gray`
    })
}
var A, j = e((() => {
        le(), y(), ae(), f(), A = g()
    })),
    me, he, M, ge, _e, ve, N, ye, be, P, F, xe = e((() => {
        me = te(), h(), c(), w(), re(), a(), S(), o(), f(), r(), he = t(v()), _(), j(), ue(), se(), M = g(), {
            CrossSm: ge
        } = i, _e = {
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
                    isError: c
                } = e,
                l = n === void 0 ? `absolute` : n,
                u = a !== void 0 && a,
                d = c !== void 0 && c,
                f;
            t[0] === l ? f = t[1] : (f = s(`flex`, l, oe.collapsedComment), t[0] = l, t[1] = f);
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
            let g;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (g = {
                opacity: 0
            }, t[6] = g) : g = t[6];
            let _;
            t[7] !== r || t[8] !== d || t[9] !== u || t[10] !== o ? (_ = (0, M.jsx)(pe, {
                count: r,
                isLoading: u,
                onClick: o,
                isError: d
            }), t[7] = r, t[8] = d, t[9] = u, t[10] = o, t[11] = _) : _ = t[11];
            let v;
            return t[12] !== f || t[13] !== h || t[14] !== _ ? (v = (0, M.jsx)(ee.div, {
                className: f,
                initial: p,
                animate: m,
                style: h,
                transition: _e,
                exit: g,
                children: _
            }), t[12] = f, t[13] = h, t[14] = _, t[15] = v) : v = t[15], v
        }, ye = ({
            isFocused: e,
            isHovered: t
        }) => (0, M.jsxs)(M.Fragment, {
            children: [(0, M.jsx)(`div`, {
                className: e || t ? `opacity-100 transition` : `opacity-75 transition`,
                children: (0, M.jsx)(`div`, {
                    className: `gizmo-bot-avatar rounded-full`,
                    children: (0, M.jsx)(u, {
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
            let a = e === ie.REMOVED;
            return (0, M.jsx)(`div`, {
                className: s(`text-token-text-primary mt-2 transition-all`, {
                    "opacity-80": !n && !r && !i && !a,
                    "opacity-40": !n && r && !i && !a,
                    [ve]: a
                }),
                children: (0, M.jsx)(C, {
                    text: t
                })
            })
        }, P = e => {
            "use forget";
            let t = (0, me.c)(80),
                {
                    acceptButtonLabel: r,
                    position: i,
                    left: a,
                    right: o,
                    comment: c,
                    disableAnimations: l,
                    onClick: u,
                    onMouseEnter: f,
                    onMouseLeave: p,
                    onAccept: m,
                    onDismiss: h,
                    translateY: g,
                    isFocused: _,
                    isSomeCommentFocused: v,
                    disableActions: te,
                    isHovered: re,
                    ref: y
                } = e,
                ae = i === void 0 ? `absolute` : i,
                b = l !== void 0 && l,
                x = _ !== void 0 && _,
                S = v !== void 0 && v,
                C = te !== void 0 && te,
                w = re !== void 0 && re,
                [se, ce] = (0, he.useState)(!1),
                le = c.diffStatus === ie.ADDED,
                T = c.diffStatus === ie.REMOVED,
                ue = c.diffStatus != null,
                E;
            t[0] === f ? E = t[1] : (E = () => {
                ce(!0), f?.()
            }, t[0] = f, t[1] = E);
            let de = E,
                D;
            t[2] === p ? D = t[3] : (D = () => {
                ce(!1), p?.()
            }, t[2] = p, t[3] = D);
            let fe = D,
                O = ne(),
                pe = x || se && !S,
                k = !x,
                A;
            t[4] !== x || t[5] !== w || t[6] !== ae || t[7] !== k ? (A = s(ae, oe.expandedComment, {
                "cursor-default": x,
                "cursor-pointer": k,
                [oe.expandedCommentFocused]: x,
                [oe.expandedCommentHovered]: w
            }), t[4] = x, t[5] = w, t[6] = ae, t[7] = k, t[8] = A) : A = t[8];
            let j;
            t[9] !== a || t[10] !== o ? (j = {
                left: a,
                right: o
            }, t[9] = a, t[10] = o, t[11] = j) : j = t[11];
            let N;
            t[12] !== b || t[13] !== g ? (N = !b && {
                translateY: g,
                scale: .85,
                opacity: 0
            }, t[12] = b, t[13] = g, t[14] = N) : N = t[14];
            let P;
            t[15] !== b || t[16] !== x || t[17] !== g ? (P = b ? void 0 : {
                translateY: g,
                scale: x ? 1 : .97,
                opacity: 1
            }, t[15] = b, t[16] = x, t[17] = g, t[18] = P) : P = t[18];
            let F;
            t[19] === b ? F = t[20] : (F = b ? void 0 : {
                scale: .85,
                opacity: 0,
                filter: `blur(16px)`
            }, t[19] = b, t[20] = F);
            let xe = C ? void 0 : de,
                I = C ? void 0 : fe,
                Se = c.id,
                L = !x && !w,
                R = w && !x,
                Ce = x || se && !S,
                z;
            t[21] !== ue || t[22] !== le || t[23] !== T || t[24] !== L || t[25] !== R || t[26] !== Ce ? (z = s(`flex min-h-8 flex-col overflow-hidden rounded-2xl border p-4 pt-2 text-start text-sm transition-all`, {
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
            t[29] === T ? V = t[30] : (V = s(`flex h-8 flex-row items-center gap-2.5`, {
                [ve]: T
            }), t[29] = T, t[30] = V);
            let H;
            t[31] !== x || t[32] !== w ? (H = (0, M.jsx)(ye, {
                isFocused: x,
                isHovered: w
            }), t[31] = x, t[32] = w, t[33] = H) : H = t[33];
            let U = !C,
                W;
            t[34] !== C || t[35] !== U ? (W = s(`text-token-text-secondary -me-1 rounded-full bg-transparent p-1`, {
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
            t[40] !== C || t[41] !== h || t[42] !== W || t[43] !== G ? (q = (0, M.jsx)(`button`, {
                className: W,
                onClick: h,
                disabled: C,
                "aria-label": G,
                children: K
            }), t[40] = C, t[41] = h, t[42] = W, t[43] = G, t[44] = q) : q = t[44];
            let J;
            t[45] !== V || t[46] !== H || t[47] !== q ? (J = (0, M.jsxs)(`div`, {
                className: V,
                children: [H, q]
            }), t[45] = V, t[46] = H, t[47] = q, t[48] = J) : J = t[48];
            let Y;
            t[49] !== c || t[50] !== x || t[51] !== w || t[52] !== S ? (Y = (0, M.jsx)(be, {
                comment: c,
                isFocused: x,
                isHovered: w,
                isSomeCommentFocused: S
            }), t[49] = c, t[50] = x, t[51] = w, t[52] = S, t[53] = Y) : Y = t[53];
            let X;
            t[54] !== r || t[55] !== C || t[56] !== b || t[57] !== O || t[58] !== m || t[59] !== pe ? (X = pe && (0, M.jsx)(ee.div, {
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
                    children: (0, M.jsx)(n, {
                        color: `secondary`,
                        onClick: m,
                        disabled: C,
                        children: r ?? O.formatMessage({
                            id: `WIW5OL`,
                            defaultMessage: `Apply`
                        })
                    })
                })
            }), t[54] = r, t[55] = C, t[56] = b, t[57] = O, t[58] = m, t[59] = pe, t[60] = X) : X = t[60];
            let Z;
            t[61] === X ? Z = t[62] : (Z = (0, M.jsx)(d, {
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
            return t[68] !== c.id || t[69] !== u || t[70] !== y || t[71] !== A || t[72] !== j || t[73] !== N || t[74] !== P || t[75] !== F || t[76] !== xe || t[77] !== I || t[78] !== Q ? ($ = (0, M.jsx)(ee.div, {
                ref: y,
                className: A,
                style: j,
                initial: N,
                animate: P,
                exit: F,
                transition: _e,
                onClick: u,
                onMouseEnter: xe,
                onMouseLeave: I,
                "data-comment-id": Se,
                children: Q
            }), t[68] = c.id, t[69] = u, t[70] = y, t[71] = A, t[72] = j, t[73] = N, t[74] = P, t[75] = F, t[76] = xe, t[77] = I, t[78] = Q, t[79] = $) : $ = t[79], $
        }, F = ({
            offsetY: e,
            opensOverDocument: t = !1,
            disableActions: n = !1,
            isFocused: r = !1,
            isSomeCommentFocused: i = !1,
            onAccept: a,
            onClick: o,
            onDismiss: s,
            onMouseEnter: ee,
            onMouseLeave: c,
            comment: u,
            isHovered: d = !1
        }) => {
            let f = (0, he.useRef)(null);
            return (0, he.useEffect)(() => l(document, {
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
                onMouseEnter: ee,
                onMouseLeave: c,
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
    if (!i) return m(I(n)).end;
    let {
        start: a
    } = m(I(i));
    return a + r
}

function R(e, t) {
    let n = e.nodeAt(t.pos);
    if (n) {
        let {
            start: e
        } = m(I(n));
        return e + t.textOffset
    }
    return m(I(t.parent)).end
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
        Se(), p()
    })),
    B, V, H, U, W, G, K, q = e((() => {
        B = t(v()), V = (0, B.createContext)(() => null), H = (0, B.createContext)(null), U = (0, B.createContext)(0), W = () => (0, B.useContext)(V), G = () => (0, B.useContext)(H), K = () => (0, B.useContext)(U)
    })),
    J, Y, X, Z, Q, $, we = e((() => {
        J = t(v()), Y = (0, J.createContext)(() => null), X = (0, J.createContext)(null), Z = (0, J.createContext)(0), Q = () => (0, J.useContext)(Y), $ = () => (0, J.useContext)(X)
    }));
export {
    xe as C, j as E, P as S, O as T, L as _, $ as a, N as b, V as c, G as d, K as f, R as g, Ce as h, we as i, U as l, z as m, Y as n, Q as o, W as p, Z as r, H as s, X as t, q as u, I as v, k as w, F as x, Se as y
};
//# sourceMappingURL=df59e297-f1sm3fg7boxjg94x.js.map