const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d7906bef-oofsz1hmlw82rtlu.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/b2c255f5-jtb173lpkgg29zao.js", "assets/3a6eb079-hjakmv42muhkqjzj.js", "assets/9e9d0eec-nkmykeb4giti97x1.js", "assets/ea7792a2-d9m2q4bht39qycrh.js", "assets/c3104c13-celq2mcekzljf1n9.js", "assets/b093033a-m6cbsx636usydyrs.js", "assets/7e5e046a-bkyd6zuo528w0v54.js", "assets/bcae0416-pblhiabe5myymn9k.js", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css", "assets/c00ae0a6-ikpmdcblt4iczj6s.js", "assets/99299f16-htblw95rr0bd3dy3.js", "assets/c871dc1d-lpy7e3u6bxclkcy0.js", "assets/27c30153-gk5goiyh0qlj2ezx.js", "assets/8f909c21-jqvb62ory59pv8q3.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as r,
    y5 as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as a,
    Vn as o,
    cn as s,
    ln as c,
    wn as l
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as u,
    t as d
} from "./b2c255f5-jtb173lpkgg29zao.js";
import {
    i as f,
    r as p
} from "./3a6eb079-hjakmv42muhkqjzj.js";
import {
    n as m,
    t as h
} from "./9e38ec96-duvmjkx79b210rzz.js";
import {
    c as g,
    s as _
} from "./0f2a693e-ixuu1upjhavxhvub.js";
import {
    n as v,
    r as y,
    t as b
} from "./3fb45623-edwh319q7lpya1c2.js";
import {
    n as x,
    t as S
} from "./8b0ac3b9-mgwcitlhq9phj0vc.js";
import {
    n as C,
    t as w
} from "./293b9207-k5mdwpe6tsp0nubd.js";
var T, E, D, O, k = e((() => {
        T = l(), E = n(o()), u(), D = a(), O = e => {
            "use forget";
            let t = (0, T.c)(4),
                {
                    name: n
                } = e,
                {
                    icons: r
                } = (0, E.useContext)(d),
                i = r[n];
            if (!i) {
                let e;
                return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, D.jsx)(`span`, {
                    className: `inline-block h-10 w-[58px]`,
                    "aria-hidden": !0
                }), t[0] = e) : e = t[0], e
            }
            let a;
            return t[1] !== n || t[2] !== i ? (a = n === `O` ? (0, D.jsx)(`span`, {
                className: `flex h-10 w-[58px] items-center justify-center dark:invert`,
                children: (0, D.jsx)(`img`, {
                    src: i,
                    alt: ``
                })
            }) : (0, D.jsx)(`img`, {
                src: i,
                alt: ``
            }), t[1] = n, t[2] = i, t[3] = a) : a = t[3], a
        }
    })),
    A, j, M, N, P = e((() => {
        A = l(), j = n(o()), r(), g(), f(), k(), M = a(), N = e => {
            "use forget";
            let t = (0, A.c)(13),
                {
                    id: n,
                    label: r,
                    options: a,
                    selected: o,
                    onSelect: s
                } = e,
                c;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = [], t[0] = c) : c = t[0];
            let l = (0, j.useRef)(c),
                u;
            t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (u = i(`inline-flex max-w-full items-center rounded-full border border-token-border-default p-1`, _), t[1] = u) : u = t[1];
            let d;
            t[2] === s ? d = t[3] : (d = e => {
                if (!(e.target instanceof HTMLButtonElement)) return;
                let t = l.current.indexOf(e.target);
                if (t < 0) return;
                let n = getComputedStyle(e.currentTarget).direction === `rtl`,
                    r = e.key === `ArrowRight` ? n ? -1 : 1 : e.key === `ArrowLeft` ? n ? 1 : -1 : 0,
                    i = e.key === `Home` ? 0 : e.key === `End` ? p.length - 1 : r ? (t + r + p.length) % p.length : -1;
                i < 0 || (e.preventDefault(), s(p[i], !1), l.current[i]?.focus())
            }, t[2] = s, t[3] = d);
            let f;
            t[4] !== n || t[5] !== s || t[6] !== a || t[7] !== o ? (f = p.map((e, t) => (0, M.jsx)(`button`, {
                ref: e => {
                    l.current[t] = e
                },
                type: `button`,
                role: `tab`,
                id: `${n}-${e}`,
                "aria-label": a[e].label,
                "aria-controls": `${n}-${e}-panel`,
                "aria-selected": o === e,
                tabIndex: o === e ? 0 : -1,
                className: i(`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-text-primary`, {
                    "bg-token-bg-secondary": o === e,
                    "hover:bg-token-bg-secondary": o !== e
                }),
                onClick: t => s(e, t.detail > 0),
                children: (0, M.jsx)(`span`, {
                    "aria-hidden": `true`,
                    children: (0, M.jsx)(O, {
                        name: e
                    })
                })
            }, e)), t[4] = n, t[5] = s, t[6] = a, t[7] = o, t[8] = f) : f = t[8];
            let m;
            return t[9] !== r || t[10] !== d || t[11] !== f ? (m = (0, M.jsx)(`div`, {
                className: `flex w-full justify-center`,
                children: (0, M.jsx)(`div`, {
                    role: `tablist`,
                    "aria-label": r,
                    className: u,
                    onKeyDown: d,
                    children: f
                })
            }), t[9] = r, t[10] = d, t[11] = f, t[12] = m) : m = t[12], m
        }
    })),
    F = t({
        default: () => B
    }),
    I, L, R, z, B, V = e((() => {
        I = l(), u(), L = n(o()), r(), g(), P(), C(), x(), y(), m(), R = a(), c(), z = (0, L.lazy)(() => s(() => import(`./d7906bef-oofsz1hmlw82rtlu.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]))), B = e => {
            "use forget";
            let t = (0, I.c)(37),
                {
                    data: n
                } = e,
                {
                    models: r
                } = (0, L.useContext)(d),
                a = (0, L.useContext)(h);
            if (!a) throw Error(`Dots sections require DotsPageShell`);
            let {
                selected: o,
                select: s
            } = a, [c, l] = (0, L.useState)(o), [u, f] = (0, L.useState)(!0), p = (0, L.useId)();
            if (!n?.heading || !n.options?.[o]) return null;
            let m = n.options[o],
                g;
            t[0] !== m.poster || t[1] !== o ? (g = (0, R.jsx)(`div`, {
                className: `absolute inset-x-0 top-1/2 mx-auto h-[62.5%] max-w-[300px] -translate-y-1/2 p-6`,
                children: (0, R.jsx)(w, {
                    name: o,
                    src: m.poster
                })
            }), t[0] = m.poster, t[1] = o, t[2] = g) : g = t[2];
            let y = g,
                x = `${p}-heading`,
                C = `${p}-${o}-panel`,
                T = `${p}-${o}`,
                E;
            t[3] !== u || t[4] !== c || t[5] !== y || t[6] !== r || t[7] !== m.artworkLabel || t[8] !== o ? (E = (0, R.jsx)(`div`, {
                className: `absolute inset-x-0 top-[-30%] h-[160%]`,
                children: r ? (0, R.jsx)(S, {
                    className: `size-full`,
                    label: m.artworkLabel,
                    postprocessing: c !== `O`,
                    fallback: y,
                    children: (0, R.jsx)(z, {
                        selected: o,
                        onReveal: l,
                        animateSelection: u,
                        stageHeightRatio: .625
                    })
                }) : (0, R.jsx)(`div`, {
                    className: `relative size-full`,
                    role: `img`,
                    "aria-label": m.artworkLabel,
                    children: y
                })
            }), t[3] = u, t[4] = c, t[5] = y, t[6] = r, t[7] = m.artworkLabel, t[8] = o, t[9] = E) : E = t[9];
            let D;
            t[10] !== C || t[11] !== T || t[12] !== E ? (D = (0, R.jsx)(`div`, {
                id: C,
                role: `tabpanel`,
                "aria-labelledby": T,
                tabIndex: 0,
                className: `relative mx-auto h-[340px] max-w-[572px] md:h-[400px]`,
                children: E
            }), t[10] = C, t[11] = T, t[12] = E, t[13] = D) : D = t[13];
            let O = `${p}-heading`,
                k;
            t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (k = i(`mt-8 dots-h2 text-balance`, _), t[14] = k) : k = t[14];
            let A;
            t[15] !== n.heading || t[16] !== O ? (A = (0, R.jsx)(`h2`, {
                id: O,
                className: k,
                children: n.heading
            }), t[15] = n.heading, t[16] = O, t[17] = A) : A = t[17];
            let j;
            t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (j = i(`mx-auto mt-6 max-w-[572px] dots-body text-balance text-token-text-secondary`, _), t[18] = j) : j = t[18];
            let M;
            t[19] === n.description ? M = t[20] : (M = (0, R.jsx)(`p`, {
                className: j,
                children: n.description
            }), t[19] = n.description, t[20] = M);
            let P;
            t[21] !== M || t[22] !== D || t[23] !== A ? (P = (0, R.jsxs)(v, {
                width: `medium`,
                className: `w-full`,
                children: [D, A, M]
            }), t[21] = M, t[22] = D, t[23] = A, t[24] = P) : P = t[24];
            let F;
            t[25] === s ? F = t[26] : (F = (e, t) => {
                f(t), s(e)
            }, t[25] = s, t[26] = F);
            let B;
            t[27] !== n.options || t[28] !== n.selectorLabel || t[29] !== p || t[30] !== o || t[31] !== F ? (B = (0, R.jsx)(v, {
                width: `medium`,
                children: (0, R.jsx)(N, {
                    id: p,
                    label: n.selectorLabel,
                    selected: o,
                    onSelect: F,
                    options: n.options
                })
            }), t[27] = n.options, t[28] = n.selectorLabel, t[29] = p, t[30] = o, t[31] = F, t[32] = B) : B = t[32];
            let V;
            return t[33] !== P || t[34] !== B || t[35] !== x ? (V = (0, R.jsxs)(b, {
                id: `customize-o`,
                "aria-labelledby": x,
                className: `gap-y-8 text-center`,
                children: [P, B]
            }), t[33] = P, t[34] = B, t[35] = x, t[36] = V) : V = t[36], V
        }
    }));
export {
    F as n, V as r, B as t
};
//# sourceMappingURL=99f71fc2-dapppb70w6os83xt.js.map