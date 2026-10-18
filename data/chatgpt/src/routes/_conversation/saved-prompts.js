import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    B6 as r,
    Btt as i,
    Htt as a,
    JP as o,
    My as s,
    O0 as c,
    Srt as l,
    T0 as u,
    b5 as d,
    bH as f,
    dot as p,
    dz as m,
    fz as h,
    hU as g,
    hh as _,
    i5 as v,
    iw as y,
    jy as b,
    kT as x,
    mh as S,
    ow as C,
    pU as w,
    prt as T,
    uot as E,
    y5 as D,
    yH as O,
    zP as k
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as A,
    Bn as j,
    Ht as M,
    N,
    Nn as P,
    Pt as ee,
    Rn as F,
    Ut as I,
    Vn as L,
    s as R,
    wn as z,
    zn as te
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    AQ as B,
    AX as V,
    Bst as H,
    CQ as U,
    DQ as W,
    Gwn as G,
    OQ as K,
    OX as ne,
    Qb as q,
    TQ as J,
    Uwn as Y,
    Zb as re,
    _gn as ie,
    bgn as ae,
    cX as oe,
    egn as se,
    iX as ce,
    lX as le,
    nX as ue,
    oX as de,
    rX as fe,
    sX as pe,
    tX as me,
    tgn as he,
    vbn as ge,
    xbn as _e,
    zst as ve
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Dv as ye,
    Ov as be,
    Sv as xe,
    _v as Se,
    vv as Ce,
    xv as we
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    n as Te,
    t as Ee
} from "./29946bd6-eht1pls0zer7dntb.js";

function De(e, t) {
    try {
        let n = e.trim().replace(`#`, ``);
        return n.length === 3 && (n = n.split(``).map(e => `${e}${e}`).join(``)), `rgba(${Number.parseInt(n.substring(0,2),16)}, ${Number.parseInt(n.substring(2,4),16)}, ${Number.parseInt(n.substring(4,6),16)}, ${Math.max(0,Math.min(1,t))})`
    } catch {
        return e
    }
}
var Oe = e((() => {})),
    ke, X, Ae, je = e((() => {
        ke = z(), n(), l(), C(), w(), a(), R(), F(), J(), X = j(), Ae = e => {
            "use forget";
            let t = (0, ke.c)(40),
                {
                    onClose: n,
                    onDeleted: r,
                    promptId: a,
                    promptTitle: o,
                    promptSystemHint: s,
                    promptSources: c
                } = e,
                l = te(),
                u = g(),
                d = N(),
                f;
            t[0] !== l || t[1] !== u ? (f = () => {
                u.danger(l.formatMessage({
                    id: `gYG9AO`,
                    defaultMessage: `Failed to delete prompt`
                }))
            }, t[0] = l, t[1] = u, t[2] = f) : f = t[2];
            let p;
            t[3] !== l || t[4] !== n || t[5] !== r || t[6] !== c || t[7] !== s || t[8] !== o || t[9] !== d || t[10] !== u ? (p = () => {
                i.logEventWithStatsig(`chatgpt_web_prompt_deleted`, `chatgpt_web_prompt_deleted`, {
                    hint: s ?? `none`,
                    hasSources: (c?.length ?? 0) > 0,
                    sources: c ?? ``,
                    sourceCount: c?.length ?? 0
                }), r?.(), n(!1), u.success(l.formatMessage({
                    id: `cptqwY`,
                    defaultMessage: `{promptTitle} was deleted`
                }, {
                    promptTitle: o
                })), d.invalidateQueries({
                    queryKey: [`prompt-templates`],
                    exact: !1
                })
            }, t[3] = l, t[4] = n, t[5] = r, t[6] = c, t[7] = s, t[8] = o, t[9] = d, t[10] = u, t[11] = p) : p = t[11];
            let m;
            t[12] !== f || t[13] !== p ? (m = {
                onError: f,
                onSuccess: p
            }, t[12] = f, t[13] = p, t[14] = m) : m = t[14];
            let {
                mutate: h,
                isPending: _
            } = W(m), v;
            t[15] === n ? v = t[16] : (v = () => n(!1), t[15] = n, t[16] = v);
            let b;
            t[17] !== l || t[18] !== o ? (b = l.formatMessage({
                id: `rGrRdA`,
                defaultMessage: `Delete {promptTitle}?`
            }, {
                promptTitle: o
            }), t[17] = l, t[18] = o, t[19] = b) : b = t[19];
            let S;
            t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, X.jsx)(`div`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, X.jsx)(P, {
                    id: `ODmsWc`,
                    defaultMessage: `This cannot be undone.`
                })
            }), t[20] = S) : S = t[20];
            let C;
            t[21] === n ? C = t[22] : (C = () => n(!1), t[21] = n, t[22] = C);
            let w;
            t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, X.jsx)(P, {
                ...T.cancelButtonText
            }), t[23] = w) : w = t[23];
            let E;
            t[24] === C ? E = t[25] : (E = (0, X.jsx)(x, {
                color: `secondary`,
                onClick: C,
                children: w
            }), t[24] = C, t[25] = E);
            let D;
            t[26] !== h || t[27] !== a ? (D = () => h(a), t[26] = h, t[27] = a, t[28] = D) : D = t[28];
            let O;
            t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, X.jsx)(P, {
                id: `x3h5Nl`,
                defaultMessage: `Delete`
            }), t[29] = O) : O = t[29];
            let k;
            t[30] !== _ || t[31] !== D ? (k = (0, X.jsx)(x, {
                color: `danger`,
                disabled: _,
                loading: _,
                onClick: D,
                children: O
            }), t[30] = _, t[31] = D, t[32] = k) : k = t[32];
            let A;
            t[33] !== k || t[34] !== E ? (A = (0, X.jsxs)(`div`, {
                className: `flex flex-col gap-6`,
                children: [S, (0, X.jsxs)(`div`, {
                    className: `flex flex-row justify-end gap-2`,
                    children: [E, k]
                })]
            }), t[33] = k, t[34] = E, t[35] = A) : A = t[35];
            let j;
            return t[36] !== A || t[37] !== v || t[38] !== b ? (j = (0, X.jsx)(y, {
                isOpen: !0,
                onClose: v,
                title: b,
                testId: `modal-delete-prompt`,
                type: `danger`,
                size: `custom`,
                className: `max-w-[400px] p-2`,
                children: A
            }), t[36] = A, t[37] = v, t[38] = b, t[39] = j) : j = t[39], j
        }
    }));

function Me({
    conversation: e
}) {
    "use no forget";
    let t = te(),
        [n, r] = (0, Q.useState)(``),
        a = q(n, 300).trim(),
        o = a.length > 0,
        [s] = M(),
        {
            data: c,
            isLoading: l,
            isFetchingNextPage: u,
            hasNextPage: d,
            fetchNextPage: f
        } = K({
            enabled: !0
        }),
        {
            data: p,
            isLoading: h,
            isFetchingNextPage: g,
            hasNextPage: v,
            fetchNextPage: y,
            isError: b
        } = B({
            search: a,
            enabled: o
        }),
        x = c ? O(c.pages.map(e => e.prompts)) : [],
        S = p ? O(p.pages.map(e => e.prompts)) : [],
        C = o ? S : x,
        w = o ? h : l,
        T = o ? !!v : !!d,
        E = !o && !l && x.length === 0,
        k = o && !h && !b && S.length === 0,
        A = o && b && !w,
        j = o ? g : u,
        N = o ? y : f;
    return (0, Q.useEffect)(() => {
        let e = s.get(`referer`) ?? `none`;
        i.logEventWithStatsig(`chatgpt_web_prompt_page_visited`, `chatgpt_web_prompt_page_visited`, {
            referer: e
        })
    }, [s]), (0, $.jsx)(`div`, {
        className: `flex h-full w-full flex-1 flex-col items-center justify-self-center`,
        children: (0, $.jsxs)(`div`, {
            className: D(`flex h-full min-h-0 w-full max-w-[960px] flex-1 flex-col px-4`),
            children: [(0, $.jsxs)(`div`, {
                className: `mt-10 px-4 md:px-0`,
                children: [(0, $.jsx)(`div`, {
                    className: `flex flex-wrap items-start justify-between gap-4`,
                    children: (0, $.jsxs)(`div`, {
                        className: `min-w-0`,
                        children: [(0, $.jsx)(`h1`, {
                            className: `text-token-text-primary text-2xl font-semibold md:text-3xl`,
                            children: (0, $.jsx)(P, {
                                id: `en2k6R`,
                                defaultMessage: `Saved prompts`
                            })
                        }), (0, $.jsx)(`p`, {
                            className: `text-token-text-secondary mt-2 max-w-2xl text-sm`,
                            children: (0, $.jsx)(P, {
                                id: `chatgpt.saved_prompts.page.subtitle`,
                                defaultMessage: `Find and reuse your saved prompts across tasks and workflows.`
                            })
                        })]
                    })
                }), (0, $.jsx)(`div`, {
                    className: `mt-6`,
                    children: (0, $.jsx)(ve, {
                        name: `prompt-search`,
                        type: `text`,
                        role: `searchbox`,
                        color: `search`,
                        className: `w-full`,
                        containerInputClassName: `w-full`,
                        inputClassName: `ps-7 pe-10`,
                        ariaLabel: t.formatMessage({
                            id: `xx/Zuh`,
                            defaultMessage: `Search prompts...`
                        }),
                        placeholder: t.formatMessage({
                            id: `w8YxB0`,
                            defaultMessage: `Search prompts...`
                        }),
                        value: n,
                        onChange: e => r(e.target.value),
                        insideContainerChildren: (0, $.jsxs)($.Fragment, {
                            children: [(0, $.jsx)(_, {
                                className: `text-token-text-tertiary pointer-events-none absolute start-0 top-1/2 h-4 w-4 -translate-y-1/2`,
                                "aria-hidden": `true`
                            }), n ? (0, $.jsx)(`button`, {
                                type: `button`,
                                className: `text-token-text-tertiary hover:text-token-text-secondary absolute end-0 top-1/2 me-4 -translate-y-1/2 rounded-full p-1`,
                                onClick: () => r(``),
                                "aria-label": t.formatMessage({
                                    id: `13DqN2`,
                                    defaultMessage: `Clear search`
                                }),
                                children: (0, $.jsx)(Se, {
                                    className: `h-3.5 w-3.5`
                                })
                            }) : null]
                        })
                    })
                })]
            }), (0, $.jsx)(`div`, {
                className: `relative mt-8 flex min-h-[320px] flex-1 flex-col`,
                children: E ? (0, $.jsx)(`div`, {
                    className: `absolute inset-0 flex items-center justify-center`,
                    children: (0, $.jsx)(Le, {})
                }) : w ? (0, $.jsx)(`div`, {
                    className: `mt-8 flex flex-col items-center justify-center gap-2`,
                    children: (0, $.jsx)(m, {
                        className: `h-4 w-4`
                    })
                }) : A ? (0, $.jsx)(`div`, {
                    className: `text-token-text-tertiary mt-10 text-center text-sm md:px-0`,
                    children: (0, $.jsx)(P, {
                        id: `pNu5Ej`,
                        defaultMessage: `Something went wrong while searching. Try again later.`
                    })
                }) : k ? (0, $.jsx)(`div`, {
                    className: `text-token-text-secondary mt-10 text-center text-sm md:px-0`,
                    children: (0, $.jsx)(P, {
                        id: `Iv6guV`,
                        defaultMessage: `No prompts matched your search.`
                    })
                }) : (0, $.jsxs)($.Fragment, {
                    children: [(0, $.jsx)(`div`, {
                        children: C.map((t, n) => (0, $.jsx)(Re, {
                            conversation: e,
                            prompt: t,
                            isFirst: n === 0
                        }, `templated_prompt_${t.id??n}`))
                    }), (!o || !b) && (0, $.jsx)(`div`, {
                        className: `pb-10`,
                        children: (0, $.jsx)(oe, {
                            isFetchingNextPage: j,
                            hasNextPage: T,
                            fetchNextPage: N
                        })
                    })]
                })
            })]
        })
    })
}

function Ne() {
    return ie()
}

function Pe(e) {
    return Y[e]?.icon
}

function Fe(e, t) {
    return e ? (0, $.jsx)(e, {
        className: `h-5 w-5`
    }, t) : null
}
var Z, Q, $, Ie, Le, Re, ze = e((() => {
        Z = z(), n(), se(), be(), Ce(), S(), we(), le(), u(), s(), H(), G(), _e(), pe(), r(), h(), V(), ae(), a(), Oe(), re(), d(), f(), Q = t(L()), F(), A(), je(), J(), ce(), $ = j(), Ie = e => {
            "use forget";
            let t = (0, Z.c)(9),
                {
                    tooltip: n,
                    ariaLabel: r,
                    onClick: i,
                    children: a
                } = e,
                o;
            t[0] === i ? o = t[1] : (o = e => {
                e.stopPropagation(), i()
            }, t[0] = i, t[1] = o);
            let s = o,
                c;
            t[2] !== r || t[3] !== a || t[4] !== s ? (c = (0, $.jsx)(`button`, {
                className: `hover:bg-token-bg-secondary flex h-8 w-8 items-center justify-center rounded-md transition-colors`,
                onClick: s,
                "aria-label": r,
                children: a
            }), t[2] = r, t[3] = a, t[4] = s, t[5] = c) : c = t[5];
            let l;
            return t[6] !== c || t[7] !== n ? (l = (0, $.jsx)(b, {
                label: n,
                triggerAs: null,
                children: c
            }), t[6] = c, t[7] = n, t[8] = l) : l = t[8], l
        }, Le = () => {
            "use forget";
            let e = (0, Z.c)(2),
                t;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(`div`, {
                className: `bg-token-bg-tertiary flex h-[48px] w-[48px] items-center justify-center rounded-full`,
                children: (0, $.jsx)(ye, {
                    className: `h-6 w-6`
                })
            }), e[0] = t) : t = e[0];
            let n;
            return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(`div`, {
                className: `flex w-full max-w-[520px] flex-col items-center rounded-xl p-8`,
                children: (0, $.jsxs)(`div`, {
                    className: `flex max-w-[500px] flex-col items-center justify-end gap-2`,
                    children: [t, (0, $.jsx)(`div`, {
                        className: `text-token-text-secondary text-xl`,
                        children: (0, $.jsx)(P, {
                            id: `chatgpt.saved_prompts.empty.title`,
                            defaultMessage: `No saved prompts`
                        })
                    })]
                })
            }), e[1] = n) : n = e[1], n
        }, Re = e => {
            "use forget";
            let t = (0, Z.c)(79),
                {
                    conversation: n,
                    prompt: r,
                    isFirst: i
                } = e,
                a = te(),
                o = ee(),
                s = v(Ne),
                l = ue(),
                u;
            bb0: {
                if (!r.system_hint) {
                    u = null;
                    break bb0
                }
                let e;t[0] !== r.system_hint || t[1] !== s ? (e = s?.find(e => e.systemHint === r.system_hint), t[0] = r.system_hint, t[1] = s, t[2] = e) : e = t[2],
                u = e
            }
            let d = u,
                f = me[fe(r.id ?? r.name ?? `fallback`)],
                p = r.symbol,
                m = p?.type === `icon` && p?.icon_color ? p?.icon_color : null,
                h;
            t[3] === m ? h = t[4] : (h = m ? De(m, .12) : null, t[3] = m, t[4] = h);
            let g = h,
                _;
            t[5] === m ? _ = t[6] : (_ = m ? De(m, .1) : null, t[5] = m, t[6] = _);
            let y = _,
                b;
            t[7] !== n.id || t[8] !== o || t[9] !== r ? (b = () => {
                ge({
                    prompt: r,
                    referer: `library`,
                    conversationId: n.id
                }), he(o)
            }, t[7] = n.id, t[8] = o, t[9] = r, t[10] = b) : b = t[10];
            let S = b,
                C;
            bb1: {
                if (!r.sources) {
                    let e;
                    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
                        icons: [],
                        text: null
                    }, t[11] = e) : e = t[11], C = e;
                    break bb1
                }
                if (r.sources.length === 1) {
                    let e = Y[r.sources[0]]?.icon,
                        n;
                    t[12] === e ? n = t[13] : (n = [e], t[12] = e, t[13] = n);
                    let i = Y[r.sources[0]]?.title,
                        a;
                    t[14] !== n || t[15] !== i ? (a = {
                        icons: n,
                        text: i
                    }, t[14] = n, t[15] = i, t[16] = a) : a = t[16], C = a;
                    break bb1
                }
                let e;t[17] === r.sources ? e = t[18] : (e = r.sources.map(Pe), t[17] = r.sources, t[18] = e);
                let n;t[19] === e ? n = t[20] : (n = {
                    icons: e,
                    text: null
                }, t[19] = e, t[20] = n),
                C = n
            }
            let w = C,
                T;
            if (l)
                if (p?.type === `emoji`) {
                    let e;
                    t[21] === p.name ? e = t[22] : (e = (0, $.jsx)(`span`, {
                        role: `img`,
                        "aria-label": p.name,
                        className: `flex h-[18px] w-[18px] items-center justify-center text-[18px] leading-none`,
                        children: p.name
                    }), t[21] = p.name, t[22] = e), T = e
                } else if (p?.type === `icon`) {
                let e;
                t[23] === p.name ? e = t[24] : (e = de(p.name), t[23] = p.name, t[24] = e);
                let n = e.icon,
                    r = p.icon_color ?? `var(--icon-primary)`,
                    i;
                t[25] === r ? i = t[26] : (i = {
                    color: r
                }, t[25] = r, t[26] = i);
                let a;
                t[27] !== n || t[28] !== i ? (a = (0, $.jsx)(n, {
                    className: `h-[18px] w-[18px]`,
                    style: i
                }), t[27] = n, t[28] = i, t[29] = a) : a = t[29], T = a
            } else {
                let e;
                t[30] === f ? e = t[31] : (e = (0, $.jsx)(f, {
                    className: `h-[18px] w-[18px]`
                }), t[30] = f, t[31] = e), T = e
            } else {
                let e;
                t[32] === d ? e = t[33] : (e = d?.logo ? (0, $.jsx)(ne, {
                    hint: d,
                    isNextToLabel: !1,
                    className: `h-[18px] w-[18px]`
                }) : (0, $.jsx)(ye, {
                    className: `h-[18px] w-[18px]`
                }), t[32] = d, t[33] = e), T = e
            }
            let E = l && g ? `bg-[var(--prompt-icon-bg)]` : `bg-token-bg-tertiary/60`,
                O;
            t[34] === E ? O = t[35] : (O = D(`border-token-border-secondary flex h-10 w-10 items-center justify-center rounded-lg border outline-none`, E), t[34] = E, t[35] = O);
            let k = O,
                A = g ?? void 0,
                j = l && y ? y : void 0,
                M;
            t[36] !== A || t[37] !== j ? (M = {
                "--prompt-icon-bg": A,
                borderColor: j
            }, t[36] = A, t[37] = j, t[38] = M) : M = t[38];
            let N = M,
                F;
            t[39] === i ? F = t[40] : (F = !i && (0, $.jsx)(`div`, {
                className: `prompt-item-divider border-token-border-secondary absolute start-4 end-4 top-0 border-t transition-opacity`
            }), t[39] = i, t[40] = F);
            let I;
            t[41] !== k || t[42] !== N || t[43] !== T ? (I = (0, $.jsx)(`div`, {
                className: k,
                style: N,
                children: T
            }), t[41] = k, t[42] = N, t[43] = T, t[44] = I) : I = t[44];
            let L;
            t[45] === r.name ? L = t[46] : (L = (0, $.jsx)(`div`, {
                className: `text-token-text-primary truncate leading-tight font-semibold`,
                children: r.name
            }), t[45] = r.name, t[46] = L);
            let R;
            t[47] === w ? R = t[48] : (R = w?.icons?.length ? (0, $.jsx)(`div`, {
                className: `text-token-text-secondary flex items-center gap-1`,
                children: w.icons.map(Fe)
            }) : null, t[47] = w, t[48] = R);
            let z;
            t[49] !== L || t[50] !== R ? (z = (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [L, R]
            }), t[49] = L, t[50] = R, t[51] = z) : z = t[51];
            let B;
            t[52] === r.prompt ? B = t[53] : (B = (0, $.jsx)(`div`, {
                className: `text-token-text-secondary line-clamp-2 text-sm break-words whitespace-pre-wrap`,
                children: r.prompt
            }), t[52] = r.prompt, t[53] = B);
            let V;
            t[54] !== z || t[55] !== B ? (V = (0, $.jsx)(`div`, {
                className: `min-w-0 flex-1`,
                children: (0, $.jsxs)(`div`, {
                    className: `flex min-w-0 flex-col gap-1`,
                    children: [z, B]
                })
            }), t[54] = z, t[55] = B, t[56] = V) : V = t[56];
            let H;
            t[57] !== I || t[58] !== V ? (H = (0, $.jsxs)(`div`, {
                className: `flex min-h-[72px] items-center gap-5 pe-44 md:pe-56`,
                children: [I, V]
            }), t[57] = I, t[58] = V, t[59] = H) : H = t[59];
            let U;
            t[60] !== a || t[61] !== r.id || t[62] !== r.name || t[63] !== r.relationship || t[64] !== r.sources || t[65] !== r.system_hint ? (U = r.relationship === `own` && (0, $.jsx)($.Fragment, {
                children: (0, $.jsx)(Ie, {
                    tooltip: a.formatMessage({
                        id: `fZNNxL`,
                        defaultMessage: `Delete prompt`
                    }),
                    ariaLabel: a.formatMessage({
                        id: `TJZi61`,
                        defaultMessage: `Delete prompt`
                    }),
                    onClick: () => {
                        c(Ae, {
                            promptId: String(r.id ?? ``),
                            promptTitle: r.name ?? ``,
                            promptSystemHint: r.system_hint ?? null,
                            promptSources: (r.sources ?? []).join(`,`)
                        })
                    },
                    children: (0, $.jsx)(xe, {
                        className: `text-token-text-primary h-5 w-5`
                    })
                })
            }), t[60] = a, t[61] = r.id, t[62] = r.name, t[63] = r.relationship, t[64] = r.sources, t[65] = r.system_hint, t[66] = U) : U = t[66];
            let W;
            t[67] === S ? W = t[68] : (W = e => {
                e.stopPropagation(), S()
            }, t[67] = S, t[68] = W);
            let G;
            t[69] === Symbol.for(`react.memo_cache_sentinel`) ? (G = (0, $.jsx)(P, {
                id: `YB8gk2`,
                defaultMessage: `Try it`
            }), t[69] = G) : G = t[69];
            let K;
            t[70] === W ? K = t[71] : (K = (0, $.jsx)(x, {
                onClick: W,
                color: `primary`,
                children: G
            }), t[70] = W, t[71] = K);
            let q;
            t[72] !== U || t[73] !== K ? (q = (0, $.jsx)(`div`, {
                className: `absolute end-4 top-1/2 flex -translate-y-1/2 items-center gap-2`,
                children: (0, $.jsxs)(`div`, {
                    className: `pointer-events-none flex items-center gap-2 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100`,
                    children: [U, K]
                })
            }), t[72] = U, t[73] = K, t[74] = q) : q = t[74];
            let J;
            return t[75] !== F || t[76] !== H || t[77] !== q ? (J = (0, $.jsxs)(`div`, {
                className: `group peer hover:bg-token-interactive-bg-secondary-hover relative rounded-2xl px-4 py-5 transition-colors peer-hover:[&_.prompt-item-divider]:opacity-0 hover:[&_.prompt-item-divider]:opacity-0`,
                children: [F, H, q]
            }), t[75] = F, t[76] = H, t[77] = q, t[78] = J) : J = t[78], J
        }
    })),
    Be, Ve, He, Ue, We, Ge, Ke = e((() => {
        A(), Be = z(), o(), J(), ze(), E(), Ee(), Ve = t(L()), He = j(), Ue = {
            hasRouteMeta: !1,
            useScrollRestoration: !0
        }, We = () => ({
            isOutletBasedRoute: !0,
            pageType: `saved-prompts`
        }), Ge = I(function() {
            "use forget";
            let e = (0, Be.c)(5),
                t;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = U(), e[0] = t) : t = e[0];
            let n = t;
            if (Te(n), !n) return null;
            let r = (0, Ve.use)(k),
                i;
            e[1] === r ? i = e[2] : (i = p(r), e[1] = r, e[2] = i);
            let a = i,
                o;
            return e[3] === a ? o = e[4] : (o = (0, He.jsx)(Me, {
                conversation: a
            }), e[3] = a, e[4] = o), o
        })
    }));
e((() => {
    Ke()
}))();
export {
    We as clientLoader, Ge as
    default, Ue as handle
};
//# sourceMappingURL=_conversation.saved-prompts-gxatirro.js.map