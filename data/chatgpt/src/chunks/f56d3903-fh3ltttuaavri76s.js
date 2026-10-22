import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CN as n,
    P5 as r,
    j5 as i,
    l7 as a,
    rq as o,
    tq as s,
    u7 as c,
    wN as l
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as u,
    Vn as d,
    wn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    fTt as p,
    nTt as m,
    tTt as h,
    uTt as g
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
var _, v, y, b, x, S = e((() => {
    _ = f(), h(), p(), i(), o(), n(), c(), v = t(d()), y = u(), b = {
        1: `h1`,
        2: `h2`,
        3: `h3`,
        4: `h4`,
        5: `h5`,
        6: `h6`
    }, x = e => {
        "use forget";
        let t = (0, _.c)(28),
            {
                children: n,
                className: i,
                contentClassName: o,
                defaultOpen: c,
                headingLevel: u,
                renderTitleAsChild: d,
                summaryClassName: f,
                title: p
            } = e,
            h = c !== void 0 && c,
            x = u === void 0 ? 3 : u,
            S = d !== void 0 && d,
            C = b[x],
            [w, T] = (0, v.useState)(h),
            E = (0, v.useRef)(null),
            D;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (D = () => {
            T(!0)
        }, t[0] = D) : D = t[0];
        let O = l(D),
            k;
        t[1] !== O || t[2] !== w ? (k = {
            contentRef: E,
            expand: O,
            isExpanded: w,
            rootRef: E
        }, t[1] = O, t[2] = w, t[3] = k) : k = t[3], m(k);
        let A, j;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (A = () => {
            let e;
            return r(s, t => {
                (0, v.startTransition)(() => {
                    T(n => t ? (e = n, !0) : e ?? !1)
                })
            })
        }, j = [], t[4] = A, t[5] = j) : (A = t[4], j = t[5]), (0, v.useEffect)(A, j);
        let M;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (M = e => {
            (0, v.startTransition)(() => T(e.currentTarget.open))
        }, t[6] = M) : M = t[6];
        let N;
        t[7] === i ? N = t[8] : (N = a(`chevron-marker flex flex-col justify-center gap-1`, `contain-[style_inline-size]`, `details-content:grid`, `details-content:grid-rows-[0fr]`, `details-content:overflow-clip`, `details-content:[overflow-clip-margin:6px]`, `details-content:transition-discrete`, `details-content:duration-300`, `details-content:[transition-property:content-visibility,grid-template-rows]`, `details-content:ease-spring-standard`, `motion-reduce::transition-none!`, `[&_.details-disclosure-content]:-translate-y-0.5`, `[&_.details-disclosure-content]:opacity-40`, `[&[open]::details-content]:grid-rows-[1fr]`, `[&[open]_.details-disclosure-content]:translate-y-0`, `[&[open]_.details-disclosure-content]:opacity-100`, i), t[7] = i, t[8] = N);
        let P;
        t[9] === f ? P = t[10] : (P = a(`interactive-label-secondary focus-visible:focus-ring corner-superellipse/1.1 w-fit cursor-pointer rounded-lg pe-1`, `[&>h1]:box-trim-0.25 [&>h1]:my-0 [&>h1]:ms-1 [&>h1]:inline`, `[&>h2]:box-trim-0.25 [&>h2]:my-0 [&>h2]:ms-1 [&>h2]:inline`, `[&>h3]:box-trim-0.25 [&>h3]:my-0 [&>h3]:ms-1 [&>h3]:inline`, `[&>h4]:box-trim-0.25 [&>h4]:my-0 [&>h4]:ms-1 [&>h4]:inline`, `[&>h5]:box-trim-0.25 [&>h5]:my-0 [&>h5]:ms-1 [&>h5]:inline`, `[&>h6]:box-trim-0.25 [&>h6]:my-0 [&>h6]:ms-1 [&>h6]:inline`, f), t[9] = f, t[10] = P);
        let F;
        t[11] !== C || t[12] !== S || t[13] !== p ? (F = S ? p : (0, y.jsx)(C, {
            className: `box-trim-0.25 ms-1 inline`,
            children: p
        }), t[11] = C, t[12] = S, t[13] = p, t[14] = F) : F = t[14];
        let I;
        t[15] !== P || t[16] !== F ? (I = (0, y.jsx)(`summary`, {
            className: P,
            children: F
        }), t[15] = P, t[16] = F, t[17] = I) : I = t[17];
        let L;
        t[18] === o ? L = t[19] : (L = a(`details-disclosure-content`, `contain-[style_inline-size]`, `origin-top-left duration-350`, `[transition-property:translate,opacity]`, `motion-reduce::transition-none!`, `ease-spring-standard`, o), t[18] = o, t[19] = L);
        let R;
        t[20] !== n || t[21] !== L ? (R = (0, y.jsx)(`div`, {
            className: `min-h-0 overflow-clip [overflow-clip-margin:6px]`,
            children: (0, y.jsx)(`div`, {
                className: L,
                children: n
            })
        }), t[20] = n, t[21] = L, t[22] = R) : R = t[22];
        let z;
        return t[23] !== w || t[24] !== I || t[25] !== R || t[26] !== N ? (z = (0, y.jsxs)(`details`, {
            ...g,
            ref: E,
            open: w,
            onToggle: M,
            className: N,
            children: [I, R]
        }), t[23] = w, t[24] = I, t[25] = R, t[26] = N, t[27] = z) : z = t[27], z
    }
}));
export {
    S as n, x as t
};
//# sourceMappingURL=f56d3903-fh3ltttuaavri76s.js.map