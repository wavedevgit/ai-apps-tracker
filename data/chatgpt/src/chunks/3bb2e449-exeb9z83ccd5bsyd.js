const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d7906bef-zdl9bdxh9ztozaj6.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-ed29bs6yiwucn7st.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/b2c255f5-jtb173lpkgg29zao.js", "assets/3a6eb079-hjakmv42muhkqjzj.js", "assets/9e9d0eec-nkmykeb4giti97x1.js", "assets/ea7792a2-d9m2q4bht39qycrh.js", "assets/c3104c13-celq2mcekzljf1n9.js", "assets/b093033a-epxrereq4u3bzh1b.js", "assets/7e5e046a-bkyd6zuo528w0v54.js", "assets/bcae0416-jl6eav11vidlcrsh.js", "assets/c2675c8c-fpv9s4kvd412dyap.js", "assets/conversation-small-l6tnsr2xfn2d55kk.js", "assets/30901919-om7b3qf5hp4j9x4l.js", "assets/c470f5ab-d0jxi6yggehv1yt2.js", "assets/0e5afe53-goyw8fd3qndq8rq5.js", "assets/conversation-small-ixfdle4i.css", "assets/82782bc9-cz4jkhg31tycbqqf.js", "assets/8b34dbc2-j8rcexxiltkm8ucr.js", "assets/global-modals-lv5n3ujm.css", "assets/c00ae0a6-bcxlhlv51zwey9vq.js", "assets/99299f16-ctebds7yn91cg81s.js", "assets/c871dc1d-lpy7e3u6bxclkcy0.js", "assets/27c30153-enyyisa1y0ydsji1.js", "assets/8f909c21-jqvb62ory59pv8q3.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    G5 as r,
    K5 as i,
    cn as a,
    hn as o,
    jt as s
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as c,
    Vn as l,
    cn as u,
    ln as d,
    wn as f
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    eC as p,
    iC as m
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    n as h,
    t as g
} from "./b2c255f5-jtb173lpkgg29zao.js";
import {
    i as ee,
    n as te
} from "./3a6eb079-hjakmv42muhkqjzj.js";
import {
    n as ne,
    t as re
} from "./9e9d0eec-nkmykeb4giti97x1.js";
import {
    r as _,
    t as ie
} from "./ea7792a2-d9m2q4bht39qycrh.js";
import {
    n as ae,
    t as oe
} from "./9e38ec96-duvmjkx79b210rzz.js";
import {
    c as se,
    s as ce
} from "./0f2a693e-ixuu1upjhavxhvub.js";
import {
    n as le,
    r as ue,
    t as de
} from "./3fb45623-ik7j8923cg5s8v43.js";
import {
    n as fe,
    t as pe
} from "./8b0ac3b9-g0omen200hfbavme.js";
import {
    n as me,
    t as he
} from "./293b9207-k5mdwpe6tsp0nubd.js";
import {
    i as v,
    r as y,
    t as ge
} from "./bfac314f-blouvrkeov0djtxr.js";
import {
    n as b,
    t as _e
} from "./ab530a13-h3ig46vj0to23s68.js";
import {
    n as x,
    t as ve
} from "./98b68013-drf1ab53c1j4lj4m.js";

function S(e, t) {
    let n = e.getBoundingClientRect(),
        r = e.firstChild,
        i = document.createRange(),
        a = new Intl.Segmenter(void 0, {
            granularity: `grapheme`
        }).segment(t),
        o = r ? Array.from(a, ({
            segment: e,
            index: t
        }) => (i.setStart(r, t), i.setEnd(r, t + e.length), {
            text: e,
            left: i.getBoundingClientRect().left - n.left
        })) : [];
    return {
        text: t,
        width: n.width,
        height: n.height,
        letters: o
    }
}

function C(e) {
    return {
        transition: {
            staggerChildren: e ? .03 : 0
        }
    }
}

function w(e) {
    return {
        transition: {
            staggerChildren: e ? .02 : 0
        }
    }
}

function T(e) {
    return {
        y: e ? `50%` : 0,
        opacity: +!e
    }
}

function E(e) {
    return {
        y: 0,
        opacity: 1,
        transition: {
            duration: e ? .3 : 0,
            ease: y
        }
    }
}

function D(e) {
    return {
        y: e ? `-50%` : 0,
        opacity: 0,
        transition: {
            duration: e ? .2 : 0,
            ease: y
        }
    }
}
var O, k, A, ye, j = e((() => {
        O = f(), p(), s(), k = n(l()), v(), A = c(), ye = e => {
            "use forget";
            let t = (0, O.c)(16),
                {
                    name: n,
                    color: r,
                    animate: i
                } = e,
                s = (0, k.useRef)(null),
                [c, l] = (0, k.useState)(null),
                u, d;
            t[0] === n ? (u = t[1], d = t[2]) : (u = () => {
                let e = s.current;
                if (!e) return;
                let t = !0,
                    r = () => {
                        if (!t) return;
                        let r = S(e, n);
                        l(e => e?.text === r.text && e.width === r.width && e.height === r.height && e.letters.every((e, t) => e.left === r.letters[t]?.left) ? e : r)
                    };
                r();
                let i = new ResizeObserver(r);
                return i.observe(e), document.fonts.addEventListener(`loadingdone`, r), document.fonts.ready.then(r), () => {
                    t = !1, i.disconnect(), document.fonts.removeEventListener(`loadingdone`, r)
                }
            }, d = [n], t[0] = n, t[1] = u, t[2] = d), m(u, d);
            let f;
            t[3] === r ? f = t[4] : (f = {
                color: r
            }, t[3] = r, t[4] = f);
            let p;
            t[5] === n ? p = t[6] : (p = (0, A.jsx)(`span`, {
                ref: s,
                className: `pointer-events-none invisible absolute inset-s-0 top-0 w-max whitespace-pre`,
                children: n
            }), t[5] = n, t[6] = p);
            let h;
            t[7] !== i || t[8] !== r || t[9] !== c || t[10] !== n ? (h = c ? (0, A.jsx)(a.span, {
                className: `relative inline-block text-start align-bottom`,
                initial: !1,
                animate: {
                    width: c.width,
                    height: c.height
                },
                transition: {
                    duration: i ? .3 : 0,
                    ease: y
                },
                children: (0, A.jsx)(o, {
                    initial: !1,
                    custom: i,
                    children: (0, A.jsx)(a.span, {
                        className: `absolute inset-s-0 top-0`,
                        style: {
                            width: c.width,
                            height: c.height
                        },
                        initial: `entering`,
                        animate: `visible`,
                        exit: `leaving`,
                        custom: i,
                        variants: {
                            visible: C,
                            leaving: w
                        },
                        children: c.letters.map((e, t) => (0, A.jsx)(a.span, {
                            className: `absolute top-0 inline-block`,
                            style: {
                                left: e.left,
                                color: r
                            },
                            custom: i,
                            variants: {
                                entering: T,
                                visible: E,
                                leaving: D
                            },
                            children: e.text
                        }, t))
                    }, c.text)
                })
            }) : n, t[7] = i, t[8] = r, t[9] = c, t[10] = n, t[11] = h) : h = t[11];
            let g;
            return t[12] !== f || t[13] !== p || t[14] !== h ? (g = (0, A.jsxs)(`span`, {
                "aria-hidden": !0,
                dir: `ltr`,
                className: `relative inline-block align-bottom whitespace-pre`,
                style: f,
                children: [p, h]
            }), t[12] = f, t[13] = p, t[14] = h, t[15] = g) : g = t[15], g
        }
    })),
    M, N, P, F, be, I = e((() => {
        M = f(), N = n(l()), x(), h(), P = c(), F = [`Alfred`, `Iggy`, `Felipe`, `Todd`], be = e => {
            "use forget";
            let t = (0, M.c)(8),
                {
                    id: n,
                    label: r,
                    selected: i,
                    onSelect: a
                } = e,
                {
                    names: o
                } = (0, N.useContext)(g),
                s;
            t[0] === o ? s = t[1] : (s = F.flatMap(e => {
                let t = o[e];
                return t ? [{
                    value: e,
                    label: t
                }] : []
            }), t[0] = o, t[1] = s);
            let c = s,
                l;
            return t[2] !== c || t[3] !== n || t[4] !== r || t[5] !== a || t[6] !== i ? (l = (0, P.jsx)(ve, {
                id: n,
                label: r,
                choices: c,
                selected: i,
                onSelect: a
            }), t[2] = c, t[3] = n, t[4] = r, t[5] = a, t[6] = i, t[7] = l) : l = t[7], l
        }
    })),
    L = t({
        default: () => B
    }),
    xe, Se, R, z, Ce, B, V = e((() => {
        xe = f(), h(), Se = n(l()), i(), s(), R = n(l()), ne(), se(), ee(), me(), _(), fe(), j(), b(), I(), ae(), ue(), v(), z = c(), d(), Ce = (0, R.lazy)(() => u(() => import(`./d7906bef-zdl9bdxh9ztozaj6.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]))), B = e => {
            "use forget";
            let t = (0, xe.c)(119),
                {
                    data: n
                } = e,
                {
                    models: i
                } = (0, R.useContext)(g),
                s = (0, R.useContext)(oe);
            if (!s) throw Error(`Dots sections require DotsPageShell`);
            let {
                selected: c,
                select: l
            } = s, [u, d] = (0, R.useState)(c === `O` ? `Alfred` : c);
            c !== `O` && c !== u && d(c);
            let f = c === `O` ? u : c,
                [p, m] = (0, R.useState)(f),
                [h, ee] = (0, R.useState)(!1),
                ne = (0, Se.useRef)(null),
                [_, ae] = (0, R.useState)(!1),
                se, ue;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (se = () => {
                let e = ne.current;
                if (!e) return;
                let t = new IntersectionObserver(e => {
                    let [n] = e;
                    n.isIntersecting && (ae(!0), t.disconnect())
                }, {
                    threshold: .35
                });
                return t.observe(e), () => t.disconnect()
            }, ue = [], t[0] = se, t[1] = ue) : (se = t[0], ue = t[1]), (0, R.useEffect)(se, ue);
            let fe = (0, R.useContext)(ie),
                me = (0, R.useContext)(re),
                v;
            t[2] === me.renderer ? v = t[3] : (v = me.renderer.shouldUseContinuousMotion(), t[2] = me.renderer, t[3] = v);
            let y = v,
                b = i && fe?.enabled && y && h ? p : f,
                x;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (x = e => {
                e !== `O` && (m(e), ee(!0))
            }, t[4] = x) : x = t[4];
            let ve = x,
                S = (0, R.useId)(),
                C = n?.characters?.[b];
            if (!C || !n) return null;
            let w = ge[b],
                T, E, D, O, k, A, j, M, N, P, F, I, L, B, V, H, U, W;
            if (t[5] !== y || t[6] !== C.artworkLabel || t[7] !== C.heading || t[8] !== C.message || t[9] !== C.poster || t[10] !== C.reactions || t[11] !== n.showMessage || t[12] !== b || t[13] !== S || t[14] !== _ || t[15] !== i || t[16] !== w || t[17] !== f) {
                let e = C.heading.indexOf(b),
                    a;
                t[36] !== C.poster || t[37] !== b ? (a = (0, z.jsx)(`div`, {
                    className: `mx-auto h-full max-w-[300px] p-6`,
                    children: (0, z.jsx)(he, {
                        name: b,
                        src: C.poster
                    })
                }), t[36] = C.poster, t[37] = b, t[38] = a) : a = t[38];
                let s = a;
                E = de, I = `dots-characters`, L = `${S}-heading`, B = `gap-y-8 text-center`, T = le, O = `medium`, k = `${S}-${f}-panel`, A = `tabpanel`, j = `${S}-${f}`, M = 0, N = `w-full`;
                let c;
                t[39] !== C.artworkLabel || t[40] !== s || t[41] !== i || t[42] !== f ? (c = i ? (0, z.jsx)(pe, {
                    className: `h-[clamp(260px,42svh,360px)] w-full`,
                    label: C.artworkLabel,
                    fallback: s,
                    children: (0, z.jsx)(Ce, {
                        selected: f,
                        onReveal: ve
                    })
                }) : (0, z.jsx)(`div`, {
                    className: `relative h-[clamp(260px,42svh,360px)] w-full`,
                    role: `img`,
                    "aria-label": C.artworkLabel,
                    children: s
                }), t[39] = C.artworkLabel, t[40] = s, t[41] = i, t[42] = f, t[43] = c) : c = t[43];
                let l;
                t[44] === Symbol.for(`react.memo_cache_sentinel`) ? (l = r(`pointer-events-none absolute inset-e-0 top-0 grid w-[210px] max-w-[65%] md:w-[230px]`, ce), t[44] = l) : l = t[44];
                let u;
                t[45] !== y || t[46] !== C.message || t[47] !== C.reactions || t[48] !== n.showMessage || t[49] !== b || t[50] !== _ || t[51] !== w ? (u = n.showMessage !== !1 && (_ || !y) && (0, z.jsx)(_e, {
                    message: C.message,
                    reactions: C.reactions ?? w.reactions,
                    animate: y
                }, b), t[45] = y, t[46] = C.message, t[47] = C.reactions, t[48] = n.showMessage, t[49] = b, t[50] = _, t[51] = w, t[52] = u) : u = t[52];
                let d;
                t[53] !== y || t[54] !== u ? (d = (0, z.jsx)(`div`, {
                    className: l,
                    children: (0, z.jsx)(o, {
                        initial: !1,
                        custom: y,
                        children: u
                    })
                }), t[53] = y, t[54] = u, t[55] = d) : d = t[55], t[56] !== c || t[57] !== d ? (P = (0, z.jsxs)(`div`, {
                    ref: ne,
                    className: `relative w-full pt-14 md:pt-10`,
                    children: [c, d]
                }), t[56] = c, t[57] = d, t[58] = P) : P = t[58];
                let p;
                t[59] === C.heading ? p = t[60] : (p = (0, z.jsx)(`p`, {
                    children: C.heading
                }), t[59] = C.heading, t[60] = p);
                let m;
                t[61] !== C.message || t[62] !== n.showMessage ? (m = n.showMessage !== !1 && (0, z.jsx)(`p`, {
                    children: C.message
                }), t[61] = C.message, t[62] = n.showMessage, t[63] = m) : m = t[63], t[64] !== p || t[65] !== m ? (F = (0, z.jsxs)(`div`, {
                    role: `status`,
                    "aria-atomic": !0,
                    className: `sr-only`,
                    children: [p, m]
                }), t[64] = p, t[65] = m, t[66] = F) : F = t[66], U = `${S}-heading`, t[67] === Symbol.for(`react.memo_cache_sentinel`) ? (W = r(`mt-6 dots-h2 text-balance md:dots-h1`, ce), t[67] = W) : W = t[67], t[68] === C.heading ? D = t[69] : (D = (0, z.jsx)(`span`, {
                    className: `sr-only`,
                    children: C.heading
                }), t[68] = C.heading, t[69] = D), V = !0, H = e >= 0 ? (0, z.jsxs)(z.Fragment, {
                    children: [C.heading.slice(0, e), (0, z.jsx)(ye, {
                        name: b,
                        color: w.color,
                        animate: y
                    }), C.heading.slice(e + b.length)]
                }) : C.heading, t[5] = y, t[6] = C.artworkLabel, t[7] = C.heading, t[8] = C.message, t[9] = C.poster, t[10] = C.reactions, t[11] = n.showMessage, t[12] = b, t[13] = S, t[14] = _, t[15] = i, t[16] = w, t[17] = f, t[18] = T, t[19] = E, t[20] = D, t[21] = O, t[22] = k, t[23] = A, t[24] = j, t[25] = M, t[26] = N, t[27] = P, t[28] = F, t[29] = I, t[30] = L, t[31] = B, t[32] = V, t[33] = H, t[34] = U, t[35] = W
            } else T = t[18], E = t[19], D = t[20], O = t[21], k = t[22], A = t[23], j = t[24], M = t[25], N = t[26], P = t[27], F = t[28], I = t[29], L = t[30], B = t[31], V = t[32], H = t[33], U = t[34], W = t[35];
            let G;
            t[70] !== V || t[71] !== H ? (G = (0, z.jsx)(`span`, {
                "aria-hidden": V,
                children: H
            }), t[70] = V, t[71] = H, t[72] = G) : G = t[72];
            let K;
            t[73] !== D || t[74] !== G || t[75] !== U || t[76] !== W ? (K = (0, z.jsxs)(`h2`, {
                id: U,
                className: W,
                children: [D, G]
            }), t[73] = D, t[74] = G, t[75] = U, t[76] = W, t[77] = K) : K = t[77];
            let we;
            t[78] === Symbol.for(`react.memo_cache_sentinel`) ? (we = r(`mx-auto mt-4 grid max-w-152 dots-body text-balance text-token-text-secondary`, ce), t[78] = we) : we = t[78];
            let q;
            t[79] === n.characters ? q = t[80] : (q = te.map(e => (0, z.jsx)(`p`, {
                "aria-hidden": !0,
                className: `pointer-events-none invisible [grid-area:1/1]`,
                children: n.characters[e]?.description
            }, e)), t[79] = n.characters, t[80] = q);
            let Te = +!y,
                J;
            t[81] === Te ? J = t[82] : (J = {
                opacity: Te
            }, t[81] = Te, t[82] = J);
            let Ee, De;
            t[83] === Symbol.for(`react.memo_cache_sentinel`) ? (Ee = {
                opacity: 1
            }, De = {
                opacity: 0
            }, t[83] = Ee, t[84] = De) : (Ee = t[83], De = t[84]);
            let Oe = y ? .14 : 0,
                Y;
            t[85] === Oe ? Y = t[86] : (Y = {
                duration: Oe,
                ease: `easeOut`
            }, t[85] = Oe, t[86] = Y);
            let X;
            t[87] !== C.description || t[88] !== b || t[89] !== J || t[90] !== Y ? (X = (0, z.jsx)(o, {
                initial: !1,
                children: (0, z.jsx)(a.p, {
                    className: `[grid-area:1/1]`,
                    initial: J,
                    animate: Ee,
                    exit: De,
                    transition: Y,
                    children: C.description
                }, b)
            }), t[87] = C.description, t[88] = b, t[89] = J, t[90] = Y, t[91] = X) : X = t[91];
            let Z;
            t[92] !== q || t[93] !== X ? (Z = (0, z.jsxs)(`div`, {
                className: we,
                children: [q, X]
            }), t[92] = q, t[93] = X, t[94] = Z) : Z = t[94];
            let Q;
            t[95] !== T || t[96] !== O || t[97] !== k || t[98] !== A || t[99] !== j || t[100] !== M || t[101] !== N || t[102] !== P || t[103] !== F || t[104] !== K || t[105] !== Z ? (Q = (0, z.jsxs)(T, {
                width: O,
                id: k,
                role: A,
                "aria-labelledby": j,
                tabIndex: M,
                className: N,
                children: [P, F, K, Z]
            }), t[95] = T, t[96] = O, t[97] = k, t[98] = A, t[99] = j, t[100] = M, t[101] = N, t[102] = P, t[103] = F, t[104] = K, t[105] = Z, t[106] = Q) : Q = t[106];
            let $;
            t[107] !== n.selectorLabel || t[108] !== S || t[109] !== f || t[110] !== l ? ($ = (0, z.jsx)(le, {
                width: `medium`,
                children: (0, z.jsx)(be, {
                    id: S,
                    label: n.selectorLabel,
                    selected: f,
                    onSelect: l
                })
            }), t[107] = n.selectorLabel, t[108] = S, t[109] = f, t[110] = l, t[111] = $) : $ = t[111];
            let ke;
            return t[112] !== E || t[113] !== I || t[114] !== L || t[115] !== B || t[116] !== Q || t[117] !== $ ? (ke = (0, z.jsxs)(E, {
                id: I,
                "aria-labelledby": L,
                className: B,
                children: [Q, $]
            }), t[112] = E, t[113] = I, t[114] = L, t[115] = B, t[116] = Q, t[117] = $, t[118] = ke) : ke = t[118], ke
        }
    }));
export {
    L as n, V as r, B as t
};
//# sourceMappingURL=3bb2e449-exeb9z83ccd5bsyd.js.map