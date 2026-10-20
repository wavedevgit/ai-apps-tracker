import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as r,
    q5 as i
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as a,
    Hn as o,
    Tn as s,
    Vn as c,
    zn as l
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    bC as u,
    xC as d
} from "./30901919-jory365vq6ym5crx.js";
import {
    r as f,
    t as p
} from "./ee72d6dc-f8cj7adv5uepyorb.js";
import {
    t as m
} from "./bcae0416-ojxhpffjgpo2ol4n.js";
import {
    n as h,
    r as g,
    t as _
} from "./686b9e77-nmys6iw0fqrd268z.js";
var v = t({
    default: () => y
});

function y(e) {
    "use forget";
    let t = (0, b.c)(16),
        {
            messages: n,
            containerSize: r,
            className: o,
            hideBg: s,
            scrollToLastMessage: c,
            contentfulDebugAttributes: l
        } = e,
        d = r === void 0 ? `full` : r,
        f = (0, C.useRef)(null),
        m;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = [], t[0] = m) : m = t[0];
    let g = (0, C.useRef)(m),
        _ = h(),
        v = a(),
        y, E;
    t[1] === c ? (y = t[2], E = t[3]) : (y = () => {
        let e = f.current,
            t = g.current.at(-1);
        !c || !e || !t || (e.scrollTop = t.offsetTop - e.offsetTop - T)
    }, E = [c], t[1] = c, t[2] = y, t[3] = E), (0, C.useEffect)(y, E);
    let D = !s,
        O;
    t[4] !== o || t[5] !== D ? (O = i({
        "bg-token-bg-secondary/20 dark:bg-token-bg-secondary max-h-[28rem] w-full overflow-auto rounded-[20px] px-4 py-8 md:max-h-[40.625rem]": D
    }, o), t[4] = o, t[5] = D, t[6] = O) : O = t[6];
    let k = d === `small`,
        A;
    t[7] === k ? A = t[8] : (A = i(`mx-auto flex w-full max-w-[650px] flex-col`, {
        "sm:w-[80%]": k
    }), t[7] = k, t[8] = A);
    let j = n.map((e, t) => {
            let {
                variant: r,
                message: a
            } = e, o = n[t - 1]?.variant, s = n[t + 1]?.variant, c = !!s && r !== s;
            return (0, w.jsxs)(`div`, {
                className: i({
                    "flex gap-3": r === `response`,
                    contents: r !== `response`
                }),
                children: [r === `response` && (0, w.jsx)(`div`, {
                    className: i(`h-[33px] w-[33px] shrink-0`, {
                        "grid place-items-center rounded-full border border-gray-100 dark:border-gray-700": o !== r
                    }),
                    children: o !== r && (0, w.jsx)(u, {
                        alt: v.formatMessage({
                            id: `login.openAiLogo`,
                            defaultMessage: `OpenAI Logo`
                        }),
                        height: `19`,
                        width: `19`
                    })
                }), (0, w.jsx)(`div`, {
                    ref: e => {
                        e && (g.current[t] = e)
                    },
                    className: i(`prose text-mkt-p1 max-w-112.5`, {
                        "bg-token-bg-secondary dark:bg-token-bg-tertiary self-end rounded-[18px] [:not(:has(img))]:px-4 [:not(:has(img))]:py-3": r === `input`,
                        "w-0 flex-1": r === `response`,
                        "mb-3.5": r === s,
                        "mb-7": c && r === `input`,
                        "mb-12": c && r === `response`,
                        "ms-6 sm:ms-8": r === `input`
                    }),
                    children: (0, x.documentToReactComponents)(a, {
                        ..._,
                        renderNode: {
                            ..._.renderNode,
                            [S.BLOCKS.EMBEDDED_ASSET]: e => {
                                let {
                                    data: t
                                } = e;
                                return (0, w.jsx)(`div`, {
                                    style: {
                                        aspectRatio: t.target.fields.file.details.image.width / t.target.fields.file.details.image.height
                                    },
                                    className: i(`not-prose bg-token-bg-secondary dark:bg-token-bg-tertiary overflow-hidden rounded-[18px]`, {
                                        "w-40 sm:w-80": r === `response`,
                                        "w-40 sm:w-60": r === `input`
                                    }),
                                    children: (0, w.jsx)(p, {
                                        altText: t.target.fields.description,
                                        asset: t.target.fields
                                    })
                                })
                            }
                        }
                    })
                })]
            }, t)
        }),
        M;
    t[9] !== j || t[10] !== A ? (M = (0, w.jsx)(`div`, {
        className: A,
        children: j
    }), t[9] = j, t[10] = A, t[11] = M) : M = t[11];
    let N;
    return t[12] !== l || t[13] !== M || t[14] !== O ? (N = (0, w.jsx)(`div`, {
        ...l,
        ref: f,
        className: O,
        children: M
    }), t[12] = l, t[13] = M, t[14] = O, t[15] = N) : N = t[15], N
}
var b, x, S, C, w, T, E = e((() => {
    b = s(), f(), d(), g(), x = _(), S = m(), r(), C = n(o()), l(), w = c(), T = 220
}));
export {
    v as n, E as r, y as t
};
//# sourceMappingURL=8b34dbc2-doj3a7e8tyvxg79i.js.map