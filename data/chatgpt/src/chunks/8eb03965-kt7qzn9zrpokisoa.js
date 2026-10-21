import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fnt as n,
    Int as r,
    J3 as i,
    JT as a,
    Ji as o,
    Jl as s,
    Met as c,
    Mz as l,
    Pnt as u,
    R1 as d,
    Snt as f,
    TE as p,
    Tet as m,
    Ul as h,
    X5 as g,
    Xi as _,
    Xl as v,
    Xy as y,
    Y5 as b,
    YT as x,
    Yl as S,
    Ynt as C,
    Z1 as w,
    Z3 as T,
    Zy as E,
    aB as D,
    ert as O,
    jet as k,
    jz as A,
    oB as j,
    oct as M,
    ql as N,
    trt as ee,
    wE as te,
    wnt as ne,
    yst as re
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    At as ie,
    Bn as P,
    In as ae,
    Ln as F,
    Nn as I,
    Nt as oe,
    O as se,
    Q as L,
    Rn as R,
    Vn as ce,
    s as le,
    wn as z,
    zn as ue
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $cn as de,
    Cun as fe,
    Edn as B,
    Gn as V,
    Hcn as pe,
    Q_n as me,
    Qln as H,
    Tdn as he,
    Ucn as ge,
    Vcn as _e,
    Wcn as ve,
    Wn as ye,
    Xcn as be,
    Yn as xe,
    Zcn as U,
    Zn as Se,
    dn as Ce,
    drn as we,
    eln as Te,
    en as Ee,
    gun as De,
    kun as Oe,
    nN as ke,
    orn as Ae,
    p_n as je,
    rN as Me,
    tln as Ne,
    vun as Pe,
    xun as Fe,
    zcn as Ie
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    $d as Le,
    Gh as Re,
    Kh as ze,
    Mv as Be,
    Nv as Ve,
    ef as He
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    Ao as Ue,
    Cg as We,
    Co as Ge,
    Do as Ke,
    Eg as qe,
    Eo as Je,
    Ev as Ye,
    Fb as Xe,
    Fo as Ze,
    Io as Qe,
    Jg as $e,
    Kg as et,
    Lb as tt,
    Oo as nt,
    Po as rt,
    Ro as it,
    So as at,
    Tg as ot,
    To as st,
    Tv as ct,
    Zg as lt,
    _y as ut,
    gy as dt,
    ko as ft,
    wg as pt,
    wo as mt,
    xo as ht
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    f_ as gt,
    p_ as _t
} from "./8b34dbc2-ba6wt3zxvh7jce7p.js";
import {
    r as vt,
    t as yt
} from "./3e72bb91-l7qrdevu41zb70ky.js";
import {
    r as bt,
    t as xt
} from "./fab52ad7-pn49xkwssmm0erwp.js";
import {
    A as St,
    E as Ct,
    F as wt,
    L as Tt,
    N as Et,
    S as Dt,
    b as Ot,
    f as kt,
    g as At,
    i as jt,
    j as Mt,
    k as Nt,
    o as Pt,
    t as Ft,
    u as It,
    w as Lt,
    z as Rt
} from "./3d9e424f-o42xj3nbiw1tv8sv.js";
import {
    n as zt,
    r as Bt,
    t as Vt
} from "./35fc21ca-e9n8qk0qu1p67288.js";
import {
    a as Ht,
    n as Ut,
    r as Wt,
    t as Gt
} from "./b0c2397c-gzseaeqr0yijp0eh.js";
import {
    a as Kt,
    i as qt,
    n as Jt,
    o as Yt,
    r as Xt,
    t as Zt
} from "./fc35a31a-efu6gu9k73x2ysgd.js";
import {
    i as Qt,
    n as $t
} from "./5dc32f04-lyxbfh2aolo2qery.js";
import {
    n as en,
    t as tn
} from "./a4d2bcd2-zhrhyqhh06rm1s4s.js";

function nn(e) {
    let t = typeof e == `number` ? e : typeof e == `string` ? Number(e) : 0;
    return Number.isFinite(t) ? t : 0
}

function rn({
    response: e,
    isLoading: t,
    isError: n,
    seriesId: r,
    displayName: i,
    aggregation: a = `sum`
}) {
    if (t) return `loading`;
    if (e == null || e.data == null) return n ? on(r, i) : `loading`;
    let o = e.data,
        s = o.reduce((e, t) => e + t.value, 0),
        c = o.length,
        l = a === `average` && c > 0 ? Math.max(0, Math.round(s / c)) : s;
    return {
        data: o.map(({
            date: e,
            value: t
        }) => ({
            date: e,
            total: t,
            values: {
                [r]: t
            }
        })),
        metrics: {
            [r]: {
                total: l,
                displayName: i
            }
        }
    }
}

function an({
    response: e,
    isLoading: t,
    isError: n,
    seriesLabels: r
}) {
    if (t) return {
        chartData: sn(r),
        isLoading: !0
    };
    if (e == null || e.data == null) return {
        chartData: sn(r),
        isLoading: !n
    };
    let i = Object.keys(r),
        a = e.data.map(e => {
            let {
                date: t,
                values: n,
                tooltipMetricDisplayNames: r
            } = e, a = {}, o = 0;
            return i.forEach(e => {
                let t = nn(n[e]);
                a[e] = t, o += t
            }), {
                date: t,
                total: o,
                values: a,
                tooltipMetricDisplayNames: r
            }
        }),
        o = i.reduce((e, t) => (e[t] = a.reduce((e, n) => e + (n.values[t] ?? 0), 0), e), {}),
        s = a.length;
    return {
        chartData: {
            data: a,
            metrics: i.reduce((e, t) => {
                let n = o[t];
                return e[t] = {
                    total: s > 0 ? Math.max(0, Math.round(n / s)) : 0,
                    displayName: r[t]
                }, e
            }, {})
        },
        isLoading: !1
    }
}

function on(e, t) {
    return {
        data: [],
        metrics: {
            [e]: {
                total: 0,
                displayName: t
            }
        }
    }
}

function sn(e) {
    return {
        data: [],
        metrics: Object.entries(e).reduce((e, [t, n]) => (e[t] = {
            total: 0,
            displayName: n
        }, e), {})
    }
}

function cn({
    response: e,
    isLoading: t,
    isError: n,
    seriesLabels: r,
    extractSeriesValues: i
}) {
    let a = sn(r);
    return t ? {
        chartData: a,
        isLoading: !0
    } : e == null || e.data == null ? {
        chartData: a,
        isLoading: !n
    } : an({
        response: {
            data: e.data.map(e => ({
                date: e.date,
                values: i(e)
            }))
        },
        isLoading: !1,
        isError: !1,
        seriesLabels: r
    })
}

function ln({
    response: e,
    isLoading: t,
    isError: n,
    seriesLabels: r
}) {
    return cn({
        response: e,
        isLoading: t,
        isError: n,
        seriesLabels: r,
        extractSeriesValues: e => ({
            p0: e.n_comments_p0 ?? 0,
            p1: e.n_comments_p1 ?? 0,
            p2: e.n_comments_p2 ?? 0
        })
    })
}

function un({
    response: e,
    isLoading: t,
    isError: n,
    seriesLabels: r
}) {
    return cn({
        response: e,
        isLoading: t,
        isError: n,
        seriesLabels: r,
        extractSeriesValues: e => ({
            plus1: e.n_reactions_plus1 ?? 0,
            minus1: e.n_reactions_minus1 ?? 0,
            other: e.n_reactions_other ?? 0
        })
    })
}
var dn = e((() => {}));

function fn(e) {
    let t = Math.max(1, Math.ceil(e)),
        n = Math.min(t, hn.length) - 1,
        r = Object.values(mn)[n] ?? hn;
    return t <= hn.length ? r : [...r, ...gn.slice(0, t - hn.length)]
}

function pn(e) {
    let t = fn(e.length);
    return Object.fromEntries(e.map((e, n) => [e, t[n] ?? _n]))
}
var W, mn, hn, gn, _n, vn = e((() => {
        W = {
            blue75: `var(--blue-75)`,
            blue200: `var(--blue-200)`,
            blue400: `var(--blue-400)`,
            blue600: `var(--blue-600)`,
            purple100: `var(--purple-100)`,
            purple400: `var(--purple-400)`,
            purple600: `var(--purple-600)`,
            pink400: `var(--pink-400)`,
            pink600: `var(--pink-600)`,
            yellow200: `var(--yellow-200)`,
            orange400: `var(--orange-400)`
        }, mn = {
            1: [W.blue400],
            2: [W.blue400, W.blue600],
            3: [W.blue75, W.blue400, W.blue600],
            4: [W.blue75, W.blue400, W.blue600, W.purple400],
            5: [W.blue75, W.blue400, W.blue600, W.purple100, W.purple400],
            6: [W.blue75, W.blue400, W.blue600, W.purple100, W.purple400, W.purple600],
            7: [W.blue75, W.blue200, W.blue400, W.blue600, W.purple100, W.purple400, W.purple600],
            8: [W.blue75, W.blue400, W.blue600, W.purple100, W.purple400, W.pink400, W.yellow200, W.orange400],
            9: [W.blue75, W.blue200, W.blue400, W.blue600, W.purple100, W.purple400, W.pink400, W.yellow200, W.orange400],
            10: [W.blue75, W.blue200, W.blue400, W.blue600, W.purple100, W.purple400, W.pink400, W.pink600, W.yellow200, W.orange400]
        }, hn = mn[10], gn = [`var(--purple-300)`, `var(--gray-350)`, `var(--purple-75)`], _n = gn[gn.length - 1] ?? hn[hn.length - 1]
    })),
    G, yn = e((() => {
        G = {
            cli: `CODEX_CLI`,
            desktop: `CODEX_DESKTOP_APP`,
            web: `CODEX_WEB`,
            workDesktop: `CODEX_WORK_DESKTOP`,
            workMobile: `CODEX_WORK_MOBILE`,
            workWeb: `CODEX_WORK_WEB`,
            vscode: `CODEX_IDE_VSCODE`,
            github: `CODEX_GITHUB`,
            exec: `CODEX_SERVICE_EXEC`,
            sdk: `CODEX_SDK_TS`,
            unknown: `CODEX_UNKNOWN_DEFAULT`
        }, G.web, G.github, G.cli, G.desktop, G.vscode, G.exec, G.sdk, G.unknown
    }));

function bn(e) {
    return Object.prototype.hasOwnProperty.call(Tn, e)
}

function xn(e) {
    return bn(e) ? Tn[e] : Tn.unknown
}

function Sn(e, t) {
    let n = xn(t).label;
    return typeof n == `string` ? n : e.formatMessage(n)
}

function Cn(e, t) {
    return t === `unknown` ? Object.entries(e ?? {}).reduce((e, [t, n]) => t === `unknown` || !bn(t) ? e + Number(n ?? 0) : e, 0) : Number(e?.[t] ?? 0)
}
var wn, Tn, En = e((() => {
    R(), wn = F({
        web: {
            id: `codex.analytics.productSurface.label.workWeb`,
            defaultMessage: `Web`
        },
        mobile: {
            id: `codex.analytics.productSurface.label.workMobile`,
            defaultMessage: `Mobile`
        },
        desktop: {
            id: `codex.analytics.productSurface.label.workDesktop`,
            defaultMessage: `Desktop (Work)`
        }
    }), Tn = {
        web: {
            label: `Cloud`,
            color: `#1D4ED8`
        },
        work_web: {
            label: wn.web,
            color: `#3B82F6`
        },
        mobile: {
            label: `Mobile`,
            color: `#8B5CF6`
        },
        work_mobile: {
            label: wn.mobile,
            color: `#A78BFA`
        },
        cli: {
            label: `CLI`,
            color: `#EC4899`
        },
        vscode: {
            label: `Extension`,
            color: `#F97316`
        },
        jetbrains: {
            label: `JetBrains`,
            color: `#BE185D`
        },
        github: {
            label: `GitHub Turn`,
            color: `#16A34A`
        },
        github_code_review: {
            label: `GitHub Code Review`,
            color: `#84CC16`
        },
        codex_security_cloud: {
            label: ae({
                id: `codex.analytics.productSurface.label.codexSecurityCloud`,
                defaultMessage: `Codex Security Cloud`
            }),
            color: `#0F766E`
        },
        slack: {
            label: `Slack`,
            color: `#06B6D4`
        },
        linear: {
            label: `Linear`,
            color: `#06B6D4`
        },
        sdk: {
            label: `SDK`,
            color: `#0F766E`
        },
        exec: {
            label: `Exec`,
            color: `#7C2D12`
        },
        desktop_app: {
            label: `Desktop App`,
            color: `#DC2626`
        },
        work_desktop: {
            label: wn.desktop,
            color: `#EF4444`
        },
        agent_identity: {
            label: `Access tokens`,
            color: `#7C3AED`
        },
        unknown: {
            label: `Uncategorized`,
            color: `#6B7280`
        },
        other: {
            label: `Other`,
            color: `#9CA3AF`
        }
    }
}));

function Dn(e) {
    return Object.fromEntries(e.map((e, t) => [e, ar[t % ar.length]]))
}

function On(e) {
    let t = e.map(e => {
            let t = e.trim().toLowerCase(),
                n = t === `other` ? 4 : t.includes(`auto-review`) ? 5 : [`sol`, `gpt-5.5`, `terra`, `luna`].findIndex(e => (e === `gpt-5.5` ? t === e || t.startsWith(`${e}-`) : t.includes(e)) || e === `terra` && t === `persian`);
            return {
                identity: t,
                model: e,
                preferredIndex: n >= 0 ? n : ar.length + [...t].reduce((e, t) => Math.imul(e, 31) + t.charCodeAt(0) >>> 0, 0) % (or.length - ar.length),
                priority: n >= 0 ? 0 : 1
            }
        }),
        n = new Set,
        r = new Map;
    return Object.fromEntries(t.sort((e, t) => e.priority - t.priority || e.identity.localeCompare(t.identity)).map(({
        identity: e,
        model: t,
        preferredIndex: i
    }) => {
        let a = r.get(e);
        if (a == null) {
            let t = i;
            for (; n.size < or.length && n.has(t);) t = (t + 1) % or.length;
            n.add(t), a = or[t], r.set(e, a)
        }
        return [t, a]
    }))
}

function kn(e, t) {
    let n = e => {
            let t = e.normalize(`NFKC`).replace(/[\u200B-\u200F\u202A-\u202E\u2066-\u2069]/gu, ``).replace(/^connector\s+/iu, ``).replace(/\bopenai\b/giu, `OpenAI`).replace(/\s+/gu, ` `).trim(),
                n = t.indexOf(`:`);
            if (n < 0) return t;
            let r = t.slice(0, n).trim(),
                i = t.slice(n + 1).trim(),
                a = r.toLowerCase(),
                o = i.toLowerCase(),
                s = a.split(` `)[0];
            return o === a || s && o.startsWith(`${s} `) || a === `openai library` && o === `library` ? i : t
        },
        r = e => n(e).toLowerCase(),
        i = n(t),
        a = new Map,
        o = [];
    for (let [t, s] of Object.entries(e.metrics)) {
        let c = n(s.displayName);
        if (t === `other` || c.length === 0 || r(c) === r(i)) {
            o.push(t);
            continue
        }
        let l = e.data.reduce((e, {
            values: n
        }) => e + (n[t] ?? 0), 0);
        if (l <= 0) continue;
        let u = r(c),
            d = a.get(u);
        d ? (d.seriesKeys.push(t), d.total += l) : a.set(u, {
            displayName: c,
            seriesKeys: [t],
            total: l
        })
    }
    let s = [...a.values()].sort((e, t) => t.total - e.total),
        c = s.slice(0, 3),
        l = [...o, ...s.slice(3).flatMap(({
            seriesKeys: e
        }) => e)],
        u = e.data.reduce((e, {
            values: t
        }) => e + l.reduce((e, n) => e + (t[n] ?? 0), 0), 0),
        d = u > 0 ? [...c, {
            displayName: i,
            seriesKeys: l,
            total: u
        }] : c,
        f = ({
            seriesKeys: e
        }) => e === l ? `other` : e[0];
    return {
        data: e.data.map(({
            date: e,
            values: t
        }) => {
            let n = Object.fromEntries(d.map(e => [f(e), e.seriesKeys.reduce((e, n) => e + (t[n] ?? 0), 0)]));
            return {
                date: e,
                total: Object.values(n).reduce((e, t) => e + t, 0),
                values: n,
                tooltipMetricDisplayNames: Object.fromEntries(d.flatMap(e => {
                    let t = f(e);
                    return [
                        [t, e.displayName],
                        [`values.${t}`, e.displayName]
                    ]
                }))
            }
        }),
        metrics: Object.fromEntries(d.map(t => [f(t), {
            displayName: t.displayName,
            total: e.data.length > 0 ? Math.max(0, Math.round(t.total / e.data.length)) : 0
        }]))
    }
}

function An(e) {
    return typeof e == `string` ? e : e.toISOString().slice(0, 10)
}

function jn(e) {
    return e.toISOString().slice(0, 10)
}

function K(e) {
    let t = typeof e == `number` ? e : typeof e == `string` ? Number(e) : 0;
    return Number.isFinite(t) ? t : 0
}

function Mn(e, t) {
    return e?.clients.find(e => e.client_id === t)
}

function Nn(e, t, n) {
    return t.reduce((t, r) => t + (Mn(e, r)?.[n] ?? 0), 0)
}

function Pn(e, t) {
    return t.reduce((t, n) => t + (e.find(e => e.client_id === n)?.users ?? 0), 0)
}

function Fn(e) {
    return Object.values(e ?? {}).reduce((e, t) => e + K(t), 0)
}

function In(e, t) {
    return K(Cn(e?.premium_usage_values?.total_usage_credits, t))
}

function Ln(e) {
    return e ? `totals` in e ? {
        textOutputTokens: K(e.totals.text_output_tokens),
        uncachedTextInputTokens: K(e.totals.uncached_text_input_tokens),
        cachedTextInputTokens: K(e.totals.cached_text_input_tokens)
    } : {
        textOutputTokens: Fn(e.premium_usage_values?.text_output_tokens_by_surface),
        uncachedTextInputTokens: Fn(e.premium_usage_values?.uncached_text_input_tokens_by_surface),
        cachedTextInputTokens: Fn(e.premium_usage_values?.cached_text_input_tokens_by_surface)
    } : {
        textOutputTokens: 0,
        uncachedTextInputTokens: 0,
        cachedTextInputTokens: 0
    }
}

function Rn(e) {
    return K(e.text_total_tokens) || K(e.uncached_text_input_tokens) + K(e.cached_text_input_tokens) + K(e.text_output_tokens)
}

function zn({
    workspaceUsage: e,
    getValue: t,
    includeZeroTotals: n = !1
}) {
    let r = new Map;
    return e.data.forEach(e => {
        e.models?.forEach(e => {
            let n = K(t(e));
            r.set(e.model, (r.get(e.model) ?? 0) + n)
        })
    }), Array.from(r.entries()).filter(([, e]) => n || e > 0).sort(([e, t], [n, r]) => r === t ? e.localeCompare(n) : r - t).map(([e]) => e)
}

function Bn({
    dateRange: e,
    groupBy: t
}) {
    if (!e) return [];
    let n = new Date(`${e.startDate}T00:00:00.000Z`),
        r = new Date(`${e.endDate}T00:00:00.000Z`);
    if (t === `week`) {
        let e = new Date(n);
        e.setUTCDate(n.getUTCDate() - n.getUTCDay());
        let t = [];
        for (; e <= r;) t.push(jn(e)), e.setUTCDate(e.getUTCDate() + 7);
        return t
    }
    let i = [],
        a = new Date(n);
    for (; a <= r;) i.push(jn(a)), a.setUTCDate(a.getUTCDate() + 1);
    return i
}

function Vn({
    availableDateKeys: e,
    dateRange: t,
    groupBy: n
}) {
    let r = Bn({
        dateRange: t,
        groupBy: n
    });
    if (r.length === 0) return r;
    let i = new Set(e),
        a = Hn(n);
    return r.filter(e => e !== a || i.has(e))
}

function Hn(e) {
    let t = new Date;
    return t.setUTCHours(0, 0, 0, 0), e === `week` && t.setUTCDate(t.getUTCDate() - t.getUTCDay()), jn(t)
}

function Un({
    workspaceUsage: e,
    dateRange: t,
    groupBy: n
}) {
    return t ? Vn({
        availableDateKeys: e.data.map(e => An(e.date)),
        dateRange: t,
        groupBy: n
    }) : e.data.map(e => An(e.date))
}

function Wn(e, {
    dateRange: t,
    groupBy: n
} = {}) {
    if (e?.data == null) return;
    let r = new Map(e.data.map(e => [An(e.date), e])),
        i = Un({
            workspaceUsage: e,
            dateRange: t,
            groupBy: n
        });
    return {
        totalUsers: {
            data: i.map(e => ({
                date: e,
                value: r.get(e)?.totals.users ?? 0
            }))
        },
        web: {
            data: i.map(e => ({
                date: e,
                value: Nn(r.get(e), [G.web, G.workWeb], `users`)
            }))
        },
        mobile: {
            data: i.map(e => ({
                date: e,
                value: Nn(r.get(e), [G.workMobile], `users`)
            }))
        },
        desktop: {
            data: i.map(e => ({
                date: e,
                value: Nn(r.get(e), [G.desktop, G.workDesktop], `users`)
            }))
        },
        vscode: {
            data: i.map(e => ({
                date: e,
                value: Mn(r.get(e), G.vscode)?.users ?? 0
            }))
        },
        cli: {
            data: i.map(e => ({
                date: e,
                value: Mn(r.get(e), G.cli)?.users ?? 0
            }))
        },
        codeReview: {
            data: i.map(e => ({
                date: e,
                value: Mn(r.get(e), G.github)?.users ?? 0
            }))
        }
    }
}

function Gn(e, t, {
    dateRange: n,
    groupBy: r,
    separateWebClients: i = !1
} = {}) {
    if (e?.data == null) return;
    let a = new Map(e.data.map(e => [An(e.date), e]));
    return {
        data: Un({
            workspaceUsage: e,
            dateRange: n,
            groupBy: r
        }).map(e => {
            let n = a.get(e);
            return {
                date: e,
                values: {
                    codeReview: Mn(n, G.github)?.[t] ?? 0,
                    web: Nn(n, i ? [G.web] : [G.web, G.workWeb], t),
                    ...i ? {
                        workWeb: Mn(n, G.workWeb)?.[t] ?? 0
                    } : {},
                    mobile: Nn(n, [G.workMobile], t),
                    desktop: Nn(n, [G.desktop, G.workDesktop], t),
                    vscode: Mn(n, G.vscode)?.[t] ?? 0,
                    cli: Mn(n, G.cli)?.[t] ?? 0
                }
            }
        })
    }
}

function Kn(e, t, n) {
    if (e?.response == null || t == null) return e;
    let r = new Map(t.data.map(({
            date: e,
            totals: t
        }) => [An(e), K(t.turns)])),
        i = e.seriesOrder.find(e => e.toLowerCase() === `other`) ?? `other`,
        a = !1,
        o = e.response.data.map(e => {
            let t = Math.max(0, (r.get(An(e.date)) ?? 0) - Fn(e.values));
            return t === 0 ? e : (a = !0, {
                ...e,
                values: {
                    ...e.values,
                    [i]: K(e.values[i]) + t
                }
            })
        });
    if (!a) return e;
    let s = e.seriesLabels[i],
        c = s && s.toLowerCase() !== `other` ? s : n.formatMessage({
            id: `chatgpt.settings.analytics.product_activity.other.label`,
            defaultMessage: `Other`
        });
    return {
        ...e,
        response: {
            ...e.response,
            data: o
        },
        seriesLabels: {
            ...e.seriesLabels,
            [i]: c
        },
        seriesOrder: e.seriesOrder.includes(i) ? e.seriesOrder : [...e.seriesOrder, i]
    }
}

function qn(e, {
    dateRange: t,
    formatSurfaceLabel: n,
    groupBy: r
}) {
    if (e?.data == null) return;
    let i = new Map(e.data.map(e => [An(e.date), e])),
        a = Un({
            workspaceUsage: e,
            dateRange: t,
            groupBy: r
        }),
        o = sr.filter(t => e.data.some(e => In(e, t) > 0)),
        s = Object.fromEntries(o.map(e => [e, n(e)]));
    return {
        response: {
            data: a.map(e => {
                let t = i.get(e);
                return {
                    date: e,
                    values: Object.fromEntries(o.map(e => [e, In(t, e)]))
                }
            })
        },
        seriesLabels: s,
        seriesOrder: o
    }
}

function Jn(e, {
    dateRange: t,
    groupBy: n
} = {}) {
    if (e?.data == null) return;
    let r = new Map(e.data.map(e => [An(e.date), e])),
        i = Un({
            workspaceUsage: e,
            dateRange: t,
            groupBy: n
        }),
        a = zn({
            workspaceUsage: e,
            getValue: e => e.credits
        }),
        o = Object.fromEntries(a.map(e => [e, e]));
    return {
        response: {
            data: i.map(e => {
                let t = Object.fromEntries(a.map(e => [e, 0]));
                return r.get(e)?.models?.forEach(e => {
                    let n = K(e.credits);
                    a.includes(e.model) && (t[e.model] = (t[e.model] ?? 0) + n)
                }), {
                    date: e,
                    values: t
                }
            })
        },
        seriesLabels: o,
        seriesOrder: a
    }
}

function Yn(e, {
    dateRange: t,
    groupBy: n,
    hideAutoReviewModel: r = !1
} = {}) {
    if (e?.data == null) return;
    let i = new Map(e.data.map(e => [An(e.date), e])),
        a = Un({
            workspaceUsage: e,
            dateRange: t,
            groupBy: n
        }),
        o = e => r && e.trim().toLowerCase() === `codex-auto-review` ? `other` : e,
        s = Xn(Array.from(new Set(zn({
            workspaceUsage: e,
            getValue: e => K(e.turns)
        }).map(o)))),
        c = Object.fromEntries(s.map(e => [e, e]));
    return {
        response: {
            data: a.map(e => {
                let t = Object.fromEntries(s.map(e => [e, 0]));
                return i.get(e)?.models?.forEach(e => {
                    let n = K(e.turns),
                        r = o(e.model);
                    s.includes(r) && (t[r] = (t[r] ?? 0) + n)
                }), {
                    date: e,
                    values: t
                }
            })
        },
        seriesLabels: c,
        seriesOrder: s
    }
}

function Xn(e) {
    return e.includes(`other`) ? [...e.filter(e => e !== `other`), `other`] : e
}

function Zn(e) {
    return e?.data == null ? [] : zn({
        workspaceUsage: e,
        getValue: Rn,
        includeZeroTotals: !0
    })
}

function Qn(e, {
    dateRange: t,
    groupBy: n,
    hideAutoReviewModel: r = !1,
    otherLabel: i
} = {}) {
    if (e?.data == null) return;
    let a = new Map(e.data.map(e => [An(e.date), e])),
        o = Un({
            workspaceUsage: e,
            dateRange: t,
            groupBy: n
        }),
        s = zn({
            workspaceUsage: e,
            getValue: Rn,
            includeZeroTotals: !0
        }),
        c = e => {
            if (!r) return e;
            let t = e.trim().toLowerCase();
            return t === `codex-auto-review` || t === `other` ? `other` : e
        },
        l = r ? Xn(Array.from(new Set(s.map(c)))) : s,
        u = Object.fromEntries(l.map(e => [e, e === `other` ? i ?? e : e]));
    return {
        response: {
            data: o.map(e => {
                let t = Object.fromEntries(l.map(e => [e, 0]));
                return a.get(e)?.models?.forEach(e => {
                    let n = Rn(e),
                        r = c(e.model);
                    l.includes(r) && (t[r] = (t[r] ?? 0) + n)
                }), {
                    date: e,
                    values: t
                }
            })
        },
        seriesLabels: u,
        seriesOrder: l
    }
}

function $n(e, {
    dateRange: t,
    groupBy: n,
    model: r
} = {}) {
    if (e?.data == null) return;
    let i = new Map(e.data.map(e => [An(e.date), e]));
    return {
        data: Un({
            workspaceUsage: e,
            dateRange: t,
            groupBy: n
        }).map(e => {
            let t = i.get(e),
                n = r ? t?.models?.filter(e => e.model === r).reduce((e, t) => ({
                    textOutputTokens: e.textOutputTokens + K(t.text_output_tokens),
                    uncachedTextInputTokens: e.uncachedTextInputTokens + K(t.uncached_text_input_tokens),
                    cachedTextInputTokens: e.cachedTextInputTokens + K(t.cached_text_input_tokens)
                }), {
                    textOutputTokens: 0,
                    uncachedTextInputTokens: 0,
                    cachedTextInputTokens: 0
                }) : void 0,
                a = Ln(t);
            return {
                date: e,
                values: {
                    textOutputTokens: n?.textOutputTokens ?? a.textOutputTokens,
                    uncachedTextInputTokens: n?.uncachedTextInputTokens ?? a.uncachedTextInputTokens,
                    cachedTextInputTokens: n?.cachedTextInputTokens ?? a.cachedTextInputTokens
                }
            }
        })
    }
}

function er(e) {
    let t = e?.data;
    if (t == null) return;
    let n = 0,
        r = 0;
    return t.forEach(({
        value: e
    }) => {
        n += e, e > r && (r = e)
    }), {
        total: n,
        average: t.length > 0 ? n / t.length : 0,
        peakValue: r
    }
}

function tr(e, t) {
    let n = e?.active_users_summary;
    if (!n) return;
    if (t === `totalUsers`) return n.total_users;
    let r = {
        vscode: G.vscode,
        cli: G.cli,
        codeReview: G.github
    };
    if (t === `web`) return Pn(n.clients, [G.web, G.workWeb]);
    if (t === `mobile`) return Pn(n.clients, [G.workMobile]);
    if (t === `desktop`) return Pn(n.clients, [G.desktop, G.workDesktop]);
    let i = r[t];
    if (i) return n.clients.find(e => e.client_id === i)?.users ?? 0
}

function nr(e, t) {
    let n = er(e);
    if (t != null) return n ? {
        ...n,
        total: t
    } : {
        total: t,
        average: 0,
        peakValue: 0
    }
}

function rr(e) {
    if (e) return {
        data: e.data.map(e => {
            let {
                lines_of_code: t
            } = e.code_attribution;
            return {
                date: e.date,
                value: t.added ?? 0
            }
        })
    }
}

function ir(e) {
    let t = e?.data;
    if (t == null) return;
    let n = 0,
        r = 0,
        i = {
            p0: 0,
            p1: 0,
            p2: 0
        };
    return t.forEach(e => {
        let t = e.n_comments ?? 0,
            a = e.n_reviews ?? 0;
        n += t, r += a, i.p0 += e.n_comments_p0 ?? 0, i.p1 += e.n_comments_p1 ?? 0, i.p2 += e.n_comments_p2 ?? 0
    }), {
        issuesFound: {
            total: n,
            average: t.length > 0 ? n / t.length : 0
        },
        reviewsDone: {
            total: r,
            average: t.length > 0 ? r / t.length : 0
        },
        priorityTotals: i
    }
}
var ar, or, sr, cr = e((() => {
    yn(), En(), ar = [`var(--blue-400)`, `var(--green-400)`, `var(--orange-400)`, `var(--purple-400)`], or = [...ar, `var(--pink-400)`, `var(--yellow-400)`, `var(--red-400)`], sr = [`desktop_app`, `work_desktop`, `cli`, `vscode`, `web`, `work_web`, `mobile`, `work_mobile`, `agent_identity`, `github`, `github_code_review`, `codex_security_cloud`, `jetbrains`, `slack`, `linear`, `sdk`, `exec`, `unknown`, `other`]
}));

function lr({
    data: e,
    getSeriesValue: t,
    series: n
}) {
    "use no forget";
    let r = Nt(),
        i = e.find(({
            date: e
        }) => e === r);
    if (r == null || i == null) return null;
    let a = [],
        o = 0;
    for (let {
            color: e,
            key: r
        }
        of n) {
        let n = t(i, r);
        !Number.isFinite(n) || n <= 0 || (o += n, a.push({
            color: e,
            key: r,
            value: o
        }))
    }
    return (0, ur.jsx)(ur.Fragment, {
        children: a.map(({
            color: e,
            key: t,
            value: n
        }) => (0, ur.jsx)(Dt, {
            className: `recharts-active-dot`,
            fill: e,
            ifOverflow: `visible`,
            pointerEvents: `none`,
            r: 4,
            stroke: `var(--bg-elevated-primary)`,
            strokeWidth: 2,
            x: r,
            y: n
        }, t))
    })
}
var ur, dr = e((() => {
    Ft(), ur = P()
}));

function fr(e) {
    "use forget";
    let t = (0, pr.c)(9),
        {
            centerOnBar: n,
            data: r,
            fontSize: i,
            payload: a,
            tickFormatter: o,
            x: s,
            y: c
        } = e,
        l = n !== void 0 && n,
        u = i === void 0 ? 12 : i,
        d = a.value === r[0]?.date,
        f = a.value === r[r.length - 1]?.date,
        p = c + 10,
        m = l || d && f ? `middle` : d ? `start` : f ? `end` : `middle`,
        h;
    t[0] !== a.value || t[1] !== o ? (h = o(a.value), t[0] = a.value, t[1] = o, t[2] = h) : h = t[2];
    let g;
    return t[3] !== u || t[4] !== p || t[5] !== m || t[6] !== h || t[7] !== s ? (g = (0, mr.jsx)(`text`, {
        x: s,
        y: p,
        fill: `var(--text-secondary)`,
        textAnchor: m,
        fontSize: u,
        fontWeight: 400,
        children: h
    }), t[3] = u, t[4] = p, t[5] = m, t[6] = h, t[7] = s, t[8] = g) : g = t[8], g
}
var pr, mr, hr = e((() => {
    pr = z(), mr = P()
}));

function gr(e, t) {
    let n = t == null ? e.length <= 7 ? e.length : 5 : Math.min(e.length, t);
    return n <= 1 ? e.map(({
        date: e
    }) => e) : Array.from(new Set(Array.from({
        length: n
    }, (t, r) => e[Math.round(r * (e.length - 1) / (n - 1))]?.date).filter(e => e != null)))
}
var _r = e((() => {}));

function vr({
    compact: e = !1,
    chartHeight: t,
    title: n,
    description: r,
    data: i,
    headerLeadingControls: a,
    headerControls: o,
    hideLegend: s = !1,
    hideEmptySeries: c = !1,
    seriesColorMap: l,
    forceStack: u = !1,
    stackOrder: d,
    legendOrder: f,
    selectedSeriesKey: p,
    onSelectedSeriesChange: m,
    showLegendTotals: h = !1,
    showBarTotals: g = !1,
    compactBarRadius: _,
    filters: v,
    filterLabel: y,
    valueFormatter: b,
    tooltipRowValueFormatter: x,
    tooltipTotalLabel: S,
    tooltipSummaryFormatter: C,
    tooltipMetricKeysAtBottom: w,
    tooltipMetricOrder: T,
    tooltipShowZeroMetrics: E,
    labelFormatter: D,
    hideYAxis: O = !1,
    hideHeader: k = !1,
    hideReferenceLine: A = !1,
    legendVariant: j = `default`,
    compactSingleBucketBar: M = !1,
    yAxisMax: N,
    yAxisValueFormatter: ee,
    yAxisTickCount: te,
    xAxisTickCount: ne,
    xAxisTickAlignment: re = `edge`,
    xAxisDateFormat: ie = `shortMonth`,
    showHorizontalGrid: P = !1,
    visualization: ae = `bar`
}) {
    "use no forget";
    let [F, I] = (0, Tr.useState)(() => v?.[0]?.id), oe = b ?? kr, se = (0, Tr.useCallback)(e => {
        I(e)
    }, []), {
        activeData: L,
        processedSeriesData: R
    } = (0, Tr.useMemo)(() => {
        if (typeof i == `string`) return {
            activeData: `loading`,
            processedSeriesData: i
        };
        if (!v?.length) return {
            activeData: i,
            processedSeriesData: i.data
        };
        let e = F ?? v[0].id,
            t = v.find(t => t.id === e);
        if (!t) return {
            activeData: i,
            processedSeriesData: i.data
        };
        let n = t.apply(i);
        return {
            activeData: n,
            processedSeriesData: n.data
        }
    }, [v, F, i]), ce = v?.length ? F ?? v[0].id : ``, le = (0, Tr.useMemo)(() => u || !l ? !0 : Object.values(l).filter(e => typeof e == `string`).length <= 1, [u, l]), z = (0, Tr.useMemo)(() => {
        if (typeof R == `string`) return 0;
        let e = R.reduce((e, t) => Math.max(e, Nr(t, le) ?? 0), 0);
        return typeof N == `number` && N > 0 ? Math.max(e, N) : e
    }, [R, le, N]), ue = (0, Tr.useMemo)(() => {
        if (L === `loading` || typeof R == `string`) return {};
        let e = f ? new Map(f.map((e, t) => [e, t])) : void 0,
            t = Object.keys(L.metrics).map(e => {
                let t = R.reduce((t, n) => jr(n) ? t + (n.values[e] ?? 0) : t, 0);
                return {
                    displayName: L.metrics[e]?.displayName ?? e,
                    total: t,
                    groupKey: e
                }
            }).filter(({
                total: e
            }) => !c || e > 0).sort((t, n) => {
                if (e) {
                    let r = e.get(t.groupKey),
                        i = e.get(n.groupKey);
                    if (r !== void 0 && i !== void 0) return r - i;
                    if (r !== void 0) return -1;
                    if (i !== void 0) return 1
                }
                return n.total - t.total
            });
        return Object.fromEntries(t.map(({
            total: e,
            groupKey: t,
            displayName: n
        }, r) => [t, {
            displayName: n,
            total: e,
            color: l?.[t] ?? Ut[r % Ut.length]
        }]))
    }, [L, c, f, R, l]), de = (0, Tr.useMemo)(() => {
        let e = Object.entries(ue);
        return Object.fromEntries(e.flatMap(([e, t]) => [
            [e, t],
            [`values.${e}`, t]
        ]))
    }, [ue]);
    return (0, q.jsxs)(`div`, {
        className: e ? `flex flex-col gap-3` : `mb-4 flex min-h-[350px] flex-col pt-2 pb-4`,
        children: [k ? null : (0, q.jsx)(`div`, {
            className: `px-6`,
            children: (0, q.jsxs)(`div`, {
                className: `flex items-start justify-between gap-3`,
                children: [(0, q.jsxs)(`div`, {
                    className: `min-w-0`,
                    children: [(0, q.jsx)(`div`, {
                        className: `text-token-text-secondary text-sm`,
                        children: n ?? null
                    }), r ? (0, q.jsx)(`div`, {
                        className: `text-token-text-tertiary mt-1 text-xs`,
                        children: r
                    }) : null, a ? (0, q.jsx)(`div`, {
                        className: `mt-2`,
                        children: a
                    }) : null]
                }), o || v?.length ? (0, q.jsxs)(`div`, {
                    className: `flex shrink-0 items-center gap-2`,
                    children: [o, v?.length ? (0, q.jsxs)(gt.Root, {
                        value: ce,
                        onValueChange: se,
                        children: [(0, q.jsxs)(gt.Trigger, {
                            "aria-label": y,
                            className: `border-token-border-default text-token-text-primary bg-token-bg-primary flex h-7 items-center gap-2 rounded-full border px-3 text-xs font-medium`,
                            children: [(0, q.jsx)(gt.Value, {}), (0, q.jsx)(gt.Icon, {})]
                        }), (0, q.jsx)(gt.Portal, {
                            children: (0, q.jsx)(gt.Content, {
                                className: `min-w-[160px]`,
                                children: v.map(e => (0, q.jsx)(gt.Item, {
                                    value: e.id,
                                    children: e.label
                                }, e.id))
                            })
                        })]
                    }) : null]
                }) : null]
            })
        }), (0, q.jsx)(yr, {
            compact: e,
            chartHeight: t,
            processedData: R,
            maxTotal: z,
            seriesMetadata: ue,
            tooltipMetricToLabel: de,
            hideLegend: s,
            stackSeries: le,
            stackOrder: d,
            legendOrder: f,
            selectedSeriesKey: p,
            onSelectedSeriesChange: m,
            showLegendTotals: h,
            showBarTotals: g,
            compactBarRadius: _,
            valueFormatter: oe,
            tooltipRowValueFormatter: x,
            tooltipTotalLabel: S,
            tooltipSummaryFormatter: C,
            tooltipMetricKeysAtBottom: w,
            tooltipMetricOrder: T ?? f,
            tooltipShowZeroMetrics: E,
            labelFormatter: D,
            hideYAxis: O,
            hideReferenceLine: A,
            legendVariant: j,
            compactSingleBucketBar: M,
            yAxisValueFormatter: ee,
            yAxisTickCount: te,
            xAxisTickCount: ne,
            xAxisTickAlignment: re,
            xAxisDateFormat: ie,
            showHorizontalGrid: P,
            visualization: ae
        })]
    })
}

function yr({
    compact: e = !1,
    chartHeight: t,
    processedData: n,
    maxTotal: r,
    seriesMetadata: i,
    tooltipMetricToLabel: a,
    hideLegend: o,
    stackSeries: s,
    stackOrder: c,
    legendOrder: l,
    selectedSeriesKey: u,
    onSelectedSeriesChange: d,
    showLegendTotals: f = !1,
    showBarTotals: p = !1,
    compactBarRadius: m,
    valueFormatter: h,
    tooltipRowValueFormatter: g,
    tooltipTotalLabel: _,
    tooltipSummaryFormatter: v,
    tooltipMetricKeysAtBottom: y,
    tooltipMetricOrder: x,
    tooltipShowZeroMetrics: S,
    labelFormatter: C,
    hideYAxis: w = !1,
    hideReferenceLine: T = !1,
    legendVariant: E = `default`,
    compactSingleBucketBar: D = !1,
    yAxisValueFormatter: O,
    yAxisTickCount: k,
    xAxisTickCount: j,
    xAxisTickAlignment: M = `edge`,
    xAxisDateFormat: N = `shortMonth`,
    showHorizontalGrid: ee = !1,
    visualization: te = `bar`
}) {
    "use no forget";
    let [ne, re] = (0, Tr.useState)(), [ie, P] = (0, Tr.useState)(), ae = (0, Tr.useMemo)(() => {
        if (l) return new Map(l.map((e, t) => [e, t]))
    }, [l]), F = (0, Tr.useMemo)(() => Object.entries(i).sort(([e], [t]) => {
        if (e === `other` && t === `other`) return 0;
        if (e === `other`) return 1;
        if (t === `other`) return -1;
        if (ae) {
            let n = ae.get(e),
                r = ae.get(t);
            if (n !== void 0 && r !== void 0) return n - r;
            if (n !== void 0) return -1;
            if (r !== void 0) return 1
        }
        return 0
    }), [ae, i]), oe = (0, Tr.useMemo)(() => {
        let e = F.map(([e]) => e);
        if (!c || c.length === 0) return e;
        let t = new Set(c),
            n = [];
        return c.forEach(t => {
            e.includes(t) && n.push(t)
        }), e.forEach(e => {
            t.has(e) || n.push(e)
        }), n
    }, [F, c]), se = E === `codexAnalytics`, L = d == null ? ie : u, R = se && L && i[L] ? L : void 0, ce = e && ne && !oe.includes(ne) ? void 0 : ne, le = R ?? ce, z = R ? oe.filter(e => e === R) : oe;
    if (n === `loading`) return (0, q.jsx)(Ar, {
        className: e ? `shrink-0 text-xs leading-4` : `text-lg`,
        style: e ? {
            height: (t ?? 160) + (o ? 0 : 28)
        } : void 0,
        children: (0, q.jsx)(A, {})
    });
    if (n === `error`) return null;
    if (r === 0) return (0, q.jsx)(Ar, {
        className: e ? `shrink-0 text-xs leading-4` : `text-lg`,
        style: e ? {
            height: t ?? 160
        } : void 0,
        children: (0, q.jsx)(I, {
            id: `codex.analytics.multiBarOverview.noData`,
            defaultMessage: `No data for this period`
        })
    });
    let ue = e && te === `bar` ? (k == null ? r : wr(r, k).domainMax) / Math.max((t ?? 160) - (p ? 20 : 8) - 30, 1) : 0,
        de = s ? n.map(e => {
            if (!jr(e)) return;
            let t;
            for (let n = z.length - 1; n >= 0; --n) {
                let r = z[n],
                    i = e.values?.[r] ?? 0;
                if (!(i <= 0) && (t ??= r, i >= ue)) return r
            }
            return t
        }) : [],
        fe = n.length <= 1,
        B = D && fe,
        V = e || w || B,
        pe = e || T || B,
        me = p && R != null ? Math.max(1, ...n.map(e => Pr(e, R))) : r,
        H = [te, s ? `stacked` : `grouped`, n.length, n[0]?.date ?? ``, n[n.length - 1]?.date ?? ``, z.join(`,`)].join(`:`);
    return (0, q.jsxs)(q.Fragment, {
        children: [(0, q.jsx)(`div`, {
            className: b(Jt, e ? `flex shrink-0 items-center [&_.recharts-surface:focus:not(:focus-visible)]:outline-none` : `flex grow items-center`),
            onPointerEnter: e && ne ? () => re(void 0) : void 0,
            children: (0, q.jsx)(Tt, {
                width: `100%`,
                height: t ?? (e ? 160 : 220),
                children: te === `stackedArea` ? (0, q.jsxs)(jt, {
                    data: n,
                    margin: e ? {
                        left: 0,
                        top: 8,
                        right: 0,
                        bottom: 0
                    } : {
                        left: V ? 20 : -20,
                        top: 14,
                        right: 20
                    },
                    children: [ee ? (0, q.jsx)(Ot, {
                        vertical: !1,
                        stroke: e ? `var(--text-primary)` : Wt,
                        strokeDasharray: `3 3`,
                        strokeOpacity: e ? .1 : .2
                    }) : null, (0, q.jsx)(br, {
                        compact: e,
                        highlightedMetricKey: R,
                        includeHidden: R != null,
                        labelFormatter: C,
                        tooltipMetricKeysAtBottom: y,
                        tooltipMetricOrder: x,
                        tooltipMetricToLabel: a,
                        tooltipShowZeroMetrics: S,
                        tooltipTotalLabel: _,
                        tooltipSummaryFormatter: v,
                        tooltipRowValueFormatter: g,
                        valueFormatter: h
                    }), (0, q.jsx)(xr, {
                        compact: e,
                        dateFormat: N,
                        processedData: n,
                        tickCount: j,
                        tickAlignment: M,
                        useExplicitCompactTickCount: p
                    }), (0, q.jsx)(Sr, {
                        hideYAxis: V,
                        maxTotal: r,
                        valueFormatter: O ?? kr,
                        tickCount: k
                    }), oe.map(t => {
                        let n = le && le !== t,
                            r = i[t]?.color ?? `#979797`,
                            a = E === `codexAnalytics`;
                        return (0, q.jsx)(At, {
                            name: t,
                            type: a ? `bump` : `monotone`,
                            dataKey: e => Pr(e, t),
                            stackId: Er,
                            stroke: e ? `none` : r,
                            activeDot: !e && void 0,
                            strokeOpacity: n ? .35 : 1,
                            fill: r,
                            fillOpacity: n ? .16 : a ? 1 : .45,
                            hide: R != null && t !== R,
                            isAnimationActive: !1
                        }, t)
                    }), !pe && (0, q.jsx)(Cr, {
                        maxTotal: r
                    }), e ? (0, q.jsx)(lr, {
                        data: n,
                        getSeriesValue: Pr,
                        series: z.map(e => ({
                            color: i[e]?.color ?? `#979797`,
                            key: e
                        }))
                    }) : null]
                }, H) : (0, q.jsxs)(Pt, {
                    data: n,
                    margin: e ? {
                        left: 0,
                        top: p ? 20 : 8,
                        right: 0,
                        bottom: 0
                    } : {
                        left: V ? 20 : -20,
                        top: 14,
                        right: 20
                    },
                    maxBarSize: p ? Or : e || B ? Dr : void 0,
                    barGap: s ? 4 : 1,
                    children: [ee ? (0, q.jsx)(Ot, {
                        vertical: !1,
                        stroke: e ? `var(--text-primary)` : Wt,
                        strokeDasharray: `3 3`,
                        strokeOpacity: e ? .1 : .2
                    }) : null, (0, q.jsx)(br, {
                        compact: e,
                        highlightedMetricKey: R,
                        includeHidden: R != null,
                        labelFormatter: C,
                        tooltipMetricKeysAtBottom: y,
                        tooltipMetricOrder: x,
                        tooltipMetricToLabel: a,
                        tooltipShowZeroMetrics: S,
                        tooltipTotalLabel: _,
                        tooltipSummaryFormatter: v,
                        tooltipRowValueFormatter: g,
                        valueFormatter: h
                    }), (0, q.jsx)(xr, {
                        compact: e,
                        centerTickLabels: !0,
                        dateFormat: N,
                        processedData: n,
                        tickCount: j,
                        tickAlignment: M,
                        useExplicitCompactTickCount: p
                    }), (0, q.jsx)(Sr, {
                        hideYAxis: V,
                        maxTotal: me,
                        valueFormatter: O ?? kr,
                        tickCount: k
                    }), oe.map(t => {
                        let r = le && le !== t;
                        return (0, q.jsxs)(Ct, {
                            dataKey: e => Pr(e, t),
                            name: t,
                            stackId: s ? Er : void 0,
                            hide: R != null && t !== R,
                            isAnimationActive: !1,
                            children: [n.map((n, a) => {
                                let o = s && de[a] === t,
                                    c = e ? m ?? 3 : 4;
                                return (0, q.jsx)(wt, {
                                    radius: s ? o ? [c, c, 0, 0] : [0, 0, 0, 0] : [c, c, 0, 0],
                                    fill: r ? Gt : i[t]?.color ?? `#979797`,
                                    opacity: r ? .15 : 1
                                }, `cell-${t}-${a}`)
                            }), p ? (0, q.jsx)(Mt, {
                                position: `top`,
                                offset: 6,
                                fill: `var(--text-primary)`,
                                fontSize: 11,
                                fontWeight: 500,
                                valueAccessor: (e, r) => {
                                    if (de[r] !== t) return;
                                    let i = n[r];
                                    if (i == null) return;
                                    let a = z.reduce((e, t) => e + Pr(i, t), 0);
                                    return a > 0 ? kr(a) : void 0
                                }
                            }) : null]
                        }, t)
                    }), s ? (0, q.jsx)(Ct, {
                        dataKey: `blank`,
                        minPointSize: 1,
                        stackId: Er,
                        isAnimationActive: !1,
                        children: n.map((e, t) => (0, q.jsx)(wt, {
                            opacity: .5,
                            fill: `blank` in e && e.blank === 0 ? Wt : `transparent`
                        }, `cell-${t}`))
                    }) : null, !pe && (0, q.jsx)(Cr, {
                        maxTotal: r
                    })]
                }, H)
            })
        }), !o && (0, q.jsx)(`div`, {
            className: b(`flex w-full flex-wrap items-center justify-start`, E === `codexAnalytics` ? e ? `text-token-text-secondary min-h-4 gap-3 text-xs leading-4` : `text-token-text-secondary gap-4 px-8 text-[12px] sm:justify-center` : `text-token-text-primary gap-x-8 gap-y-1 px-6 text-sm`),
            children: F.map(([e, {
                displayName: t,
                color: n,
                total: r
            }]) => (0, q.jsxs)(`button`, {
                type: `button`,
                "aria-pressed": se ? R === e : void 0,
                className: b(`interactive-button cursor-pointer`, E === `codexAnalytics` ? `-mx-2 -my-1 inline-flex items-center gap-1.5 rounded-full px-2 py-1 transition-[background-color,color,opacity]` : `mb-1 flex items-center`, E === `codexAnalytics` && (le === e ? `bg-token-bg-tertiary text-token-text-primary opacity-100` : le ? `hover:text-token-text-primary opacity-35` : `hover:text-token-text-primary opacity-100`)),
                title: t,
                onClick: se ? () => {
                    let t = R === e ? void 0 : e;
                    if (d == null) {
                        P(t);
                        return
                    }
                    d(t)
                } : void 0,
                onBlur: () => re(void 0),
                onFocus: () => re(e),
                onMouseOut: () => re(void 0),
                onMouseOver: () => re(e),
                children: [(0, q.jsx)(`div`, {
                    className: b(E === `codexAnalytics` ? `size-2 shrink-0 rounded-full` : `me-1 h-2 w-2 rounded-[1px]`),
                    style: {
                        backgroundColor: n
                    }
                }), (0, q.jsx)(`span`, {
                    className: E === `codexAnalytics` ? `whitespace-nowrap` : `me-1 whitespace-nowrap`,
                    children: t
                }), f ? (0, q.jsx)(`span`, {
                    className: `text-token-text-primary font-medium tabular-nums`,
                    children: kr(r)
                }) : null]
            }, e))
        })]
    })
}

function br({
    compact: e = !1,
    highlightedMetricKey: t,
    includeHidden: n = !1,
    labelFormatter: r,
    tooltipMetricKeysAtBottom: i,
    tooltipMetricOrder: a,
    tooltipMetricToLabel: o,
    tooltipShowZeroMetrics: s,
    tooltipTotalLabel: c,
    tooltipSummaryFormatter: l,
    tooltipRowValueFormatter: u,
    valueFormatter: d
}) {
    "use no forget";
    let f = Nt(),
        p = St(),
        m = p?.findIndex(e => String(e) === f) ?? -1;
    return (0, q.jsx)(Rt, {
        allowEscapeViewBox: e ? {
            x: !0,
            y: !1
        } : void 0,
        includeHidden: !e && n,
        isAnimationActive: !1,
        offset: e && (p?.length ?? 0) <= 7 ? 24 : void 0,
        position: e ? {
            y: -7
        } : void 0,
        reverseDirection: e ? {
            x: m >= (p?.length ?? 0) / 2,
            y: !1
        } : void 0,
        content: ({
            payload: n,
            active: f,
            label: p
        }) => (0, q.jsx)(Kt, {
            active: f,
            label: p,
            payload: n && [...n].reverse(),
            valueFormatter: d,
            rowValueFormatter: u,
            labelFormatter: r,
            metricToLabel: o,
            totalLabel: c,
            summaryFormatter: l,
            highlightedMetricKey: e ? void 0 : t,
            variant: e ? `settingsAnalytics` : `default`,
            metricKeysAtBottom: i,
            metricOrder: a,
            showZeroMetrics: s
        }),
        cursor: !e && {
            opacity: .2,
            fill: Wt
        }
    })
}

function xr({
    compact: e = !1,
    centerTickLabels: t = !1,
    dateFormat: n = `shortMonth`,
    processedData: r,
    tickCount: i,
    tickAlignment: a,
    useExplicitCompactTickCount: o = !1
}) {
    "use no forget";
    let s = i && i > 1 ? Math.max(0, Math.ceil(r.length / i) - 1) : r.length - 2,
        c = e ? gr(r, o ? i : void 0) : void 0;
    return (0, q.jsx)(kt, {
        dataKey: `date`,
        axisLine: !1,
        tickLine: !1,
        tick: i => {
            if (a !== `balanced`) return (0, q.jsx)(Xt, {
                ...i
            });
            if (e) return (0, q.jsx)(fr, {
                ...i,
                centerOnBar: t,
                data: r,
                fontSize: n === `numeric` ? 10 : 12
            });
            let {
                fill: o,
                x: s,
                y: c,
                payload: l,
                index: u,
                tickFormatter: d
            } = i, f = u === 0, p = u === r.length - 1;
            return (0, q.jsx)(`text`, {
                x: f ? s - 10 : p ? s + 10 : s,
                y: c + 10,
                fill: o ?? `#6E6E80`,
                textAnchor: f ? `start` : p ? `end` : `middle`,
                fontSize: n === `numeric` ? 10 : 12,
                fontWeight: 400,
                children: d(l.value)
            })
        },
        tickFormatter: e => ut(e).toLocaleDateString(void 0, {
            month: n === `numeric` ? `numeric` : `short`,
            day: `numeric`
        }),
        ticks: c,
        interval: e ? 0 : s,
        minTickGap: e ? 8 : void 0,
        padding: e && t ? {
            left: 12,
            right: 12
        } : void 0
    })
}

function Sr({
    hideYAxis: e,
    maxTotal: t,
    valueFormatter: n,
    tickCount: r
}) {
    "use no forget";
    let {
        domainMax: i,
        ticks: a
    } = r == null ? {
        domainMax: t,
        ticks: [0, t]
    } : wr(t, r);
    return (0, q.jsx)(It, {
        axisLine: !1,
        tickLine: !1,
        hide: e,
        domain: [0, i],
        ticks: a,
        fontSize: 11,
        fill: Wt,
        tick: e => (0, q.jsx)(Et, {
            ...e,
            textAnchor: `start`,
            y: e.payload.value === 0 ? e.y : e.y - 10,
            x: e.x - 10,
            fontWeight: 400,
            children: n(e.payload.value)
        })
    })
}

function Cr({
    maxTotal: e
}) {
    "use no forget";
    return (0, q.jsx)(Lt, {
        y: e,
        stroke: Wt,
        strokeDasharray: `3 3`,
        shape: e => (0, q.jsx)(`line`, {
            ...e,
            x1: 22
        })
    })
}

function wr(e, t) {
    if (e <= 0 || t <= 1) return {
        domainMax: e,
        ticks: [0, e]
    };
    let n = e / (t - 1),
        r = 10 ** Math.floor(Math.log10(n)),
        i = n / r,
        a = r;
    i > 5 ? a = 10 * r : i > 2 ? a = 5 * r : i > 1 && (a = 2 * r);
    let o = Math.ceil(e / a) * a;
    return {
        domainMax: o,
        ticks: Array.from({
            length: Math.floor(o / a) + 1
        }, (e, t) => t * a)
    }
}
var Tr, q, Er, Dr, Or, kr, Ar, jr, Mr, Nr, Pr, Fr = e((() => {
    Ht(), Yt(), qt(), _t(), l(), dt(), dr(), hr(), _r(), g(), Tr = t(ce()), R(), Ft(), p(), Zt(), q = P(), Er = `default`, Dr = 44, Or = 31, kr = e => e.toLocaleString(), Ar = te.div`flex h-full grow items-center justify-center text-token-text-tertiary`, jr = e => `values` in e, Mr = e => `blank` in e, Nr = (e, t) => {
        if (Mr(e)) return e.blank ?? 0;
        if (t) return e.total ?? 0;
        let n = 0;
        for (let t of Object.values(e.values ?? {})) typeof t == `number` && t > n && (n = t);
        return n
    }, Pr = (e, t) => jr(e) ? e.values[t] ?? 0 : 0, new Intl.NumberFormat(void 0, {
        notation: `compact`,
        maximumSignificantDigits: 3
    })
}));

function Ir({
    customDateRange: e,
    selectedDateRange: t
}) {
    return e ?? t
}

function Lr(e) {
    return !e.isOutsideMonth && e.date.toString() === Br()
}

function Rr(e) {
    return e.isOutsideMonth
}

function zr(e) {
    let t = e === `7d` ? 7 : 30,
        n = new Date(`${Br()}T00:00:00.000Z`),
        r = new Date(n);
    return r.setUTCDate(n.getUTCDate() - (t - 1)), {
        startDate: Hr(r),
        endDate: Hr(n)
    }
}

function Br() {
    let e = new Date;
    return e.setUTCHours(0, 0, 0, 0), Hr(e)
}

function Vr() {
    let e = new Date(`${Br()}T00:00:00.000Z`);
    return e.setUTCDate(e.getUTCDate() - 89), Hr(e)
}

function Hr(e) {
    return e.toISOString().slice(0, 10)
}
var Ur, Wr = e((() => {
    Ur = {
        isCompact: !0,
        size: `small`,
        className: `bg-token-bg-tertiary! inline-flex h-8 shrink-0 rounded-full p-0.5!`,
        itemClassName: `rounded-full`,
        itemButtonClassName: `h-7! min-w-10 rounded-full px-3! py-0! text-xs! leading-4! whitespace-nowrap`,
        highlightClassName: `rounded-full`,
        highlightTransition: {
            type: `spring`,
            duration: .28,
            bounce: 0
        }
    }
}));

function Gr(e) {
    "use forget";
    let t = (0, Kr.c)(19),
        {
            activeBreakdown: n,
            ariaLabel: r,
            compact: i,
            onBreakdownChange: a,
            surfaceLabel: o
        } = e,
        s = i !== void 0 && i,
        c = o === void 0 ? `surface` : o,
        l, u, d, f, p;
    if (t[0] !== n || t[1] !== r || t[2] !== s || t[3] !== a || t[4] !== c) {
        p = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            let e = [{
                    value: `model`,
                    label: {
                        id: `codex.analytics.productUsage.breakdown.model.redesign`,
                        defaultMessage: `By model`,
                        description: `Short segmented-control option on a redesigned Codex analytics usage chart. Selecting this groups the stacked chart series by model. The sibling option groups the same chart by product surface.`
                    }
                }, {
                    value: `surface`,
                    label: c === `product` ? Jr : {
                        id: `codex.analytics.productUsage.breakdown.surface.redesign`,
                        defaultMessage: `By surface`,
                        description: `Short segmented-control option on a redesigned Codex analytics usage chart. Selecting this groups the stacked chart series by product surface. The sibling option groups the same chart by model.`
                    }
                }],
                i = c === `product` ? [...e].reverse() : e,
                [o, m] = i;
            if (s && o && m) {
                p = (0, qr.jsx)(Xe, {
                    ...Ur,
                    ariaLabel: r,
                    leftItem: {
                        label: (0, qr.jsx)(I, {
                            ...o.label
                        }),
                        value: o.value
                    },
                    onChange: a,
                    rightItem: {
                        label: (0, qr.jsx)(I, {
                            ...m.label
                        }),
                        value: m.value
                    },
                    shouldToggleSelected: !1,
                    value: n
                });
                break bb0
            }
            l = `bg-token-bg-tertiary inline-flex items-center rounded-full p-0.5`,
            u = r,
            d = `group`;
            let h;t[10] !== n || t[11] !== s || t[12] !== a ? (h = e => {
                let t = n === e.value;
                return (0, qr.jsx)(`button`, {
                    type: `button`,
                    "aria-pressed": t,
                    onClick: () => a(e.value),
                    className: b(`inline-flex h-7 items-center justify-center rounded-full px-3 tracking-[-0.01em] transition-colors`, s ? `text-xs leading-4` : `text-[14px] leading-[22px]`, t ? `bg-token-bg-primary text-token-text-primary font-medium shadow-[0_1px_2px_rgba(0,0,0,0.08)]` : `text-token-text-secondary hover:text-token-text-primary font-normal`),
                    children: (0, qr.jsx)(I, {
                        ...e.label
                    })
                }, e.value)
            }, t[10] = n, t[11] = s, t[12] = a, t[13] = h) : h = t[13],
            f = i.map(h)
        }
        t[0] = n, t[1] = r, t[2] = s, t[3] = a, t[4] = c, t[5] = l, t[6] = u, t[7] = d, t[8] = f, t[9] = p
    } else l = t[5], u = t[6], d = t[7], f = t[8], p = t[9];
    if (p !== Symbol.for(`react.early_return_sentinel`)) return p;
    let m;
    return t[14] !== l || t[15] !== u || t[16] !== d || t[17] !== f ? (m = (0, qr.jsx)(`div`, {
        className: l,
        "aria-label": u,
        role: d,
        children: f
    }), t[14] = l, t[15] = u, t[16] = d, t[17] = f, t[18] = m) : m = t[18], m
}
var Kr, qr, Jr, Yr = e((() => {
    Kr = z(), tt(), Wr(), g(), R(), qr = P(), Jr = ae({
        id: `chatgpt.settings.analytics.usage_history.breakdown.product.label`,
        defaultMessage: `By product`
    })
}));

function Xr(e) {
    return ri[e]
}

function Zr(e) {
    switch (e.toLowerCase()) {
        case ri.usage:
            return `usage`;
        case ri.workspaceUsage:
            return `workspaceUsage`;
        case ri.personalUsage:
            return `personalUsage`;
        case ri.leaderboard:
            return `leaderboard`;
        case ri.codeReview:
            return `codeReview`;
        default:
            return null
    }
}

function Qr({
    hash: e,
    canShowCodeReviewTab: t,
    canShowLeaderboardTab: n
}) {
    let r = Zr(e) ?? `usage`;
    return r === `workspaceUsage` || r === `personalUsage` || r === `leaderboard` && !n || r === `codeReview` && !t ? `usage` : r
}

function $r({
    showAnalyticsRedesign: e,
    isWorkspacePlan: t,
    hasWorkspaceAnalyticsAccess: n
}) {
    return e && t && n
}

function ei(e, t = ``) {
    return `${ni}${t}${Xr(e)}`
}

function ti(e, t) {
    return {
        to: {
            pathname: e.pathname,
            search: e.search,
            hash: Xr(t)
        },
        state: e.state
    }
}
var ni, ri, ii = e((() => {
    ni = `/codex/cloud/settings/analytics`, ri = {
        usage: `#usage`,
        workspaceUsage: `#workspace-usage`,
        personalUsage: `#personal-usage`,
        leaderboard: `#leaderboard`,
        codeReview: `#code-review`
    }
}));

function ai(e, t) {
    t !== `7d` && t !== `30d` || f.logStructuredEvent(`ChatgptCodexUsageAnalyticsInteraction`, {
        action: `CHATGPT_CODEX_USAGE_ANALYTICS_ACTION_DATE_RANGE_CHANGED`,
        chart: ci[e],
        selection: t === `7d` ? `CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_SEVEN_DAYS` : `CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_THIRTY_DAYS`
    })
}

function oi(e, t, n) {
    f.logStructuredEvent(`ChatgptCodexUsageAnalyticsInteraction`, {
        action: `CHATGPT_CODEX_USAGE_ANALYTICS_ACTION_BREAKDOWN_CHANGED`,
        chart: ci[e],
        selection: t === `model` ? `CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_BY_MODEL` : n === `product` ? `CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_BY_PRODUCT` : `CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_BY_SURFACE`
    })
}

function si(e, t) {
    f.logStructuredEvent(`ChatgptCodexUsageAnalyticsInteraction`, {
        action: `CHATGPT_CODEX_USAGE_ANALYTICS_ACTION_SERIES_FILTER_CHANGED`,
        chart: ci[e],
        selection: t == null ? `CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_SERIES_CLEARED` : `CHATGPT_CODEX_USAGE_ANALYTICS_SELECTION_SERIES_SELECTED`
    })
}
var ci, li = e((() => {
    ne(), ci = {
        code_review: `CHATGPT_CODEX_USAGE_ANALYTICS_CHART_CODE_REVIEW`,
        code_review_priority: `CHATGPT_CODEX_USAGE_ANALYTICS_CHART_CODE_REVIEW_PRIORITY`,
        code_review_reactions: `CHATGPT_CODEX_USAGE_ANALYTICS_CHART_CODE_REVIEW_REACTIONS`,
        product_activity: `CHATGPT_CODEX_USAGE_ANALYTICS_CHART_PRODUCT_ACTIVITY`,
        tokens: `CHATGPT_CODEX_USAGE_ANALYTICS_CHART_TOKENS`,
        tool_activity: `CHATGPT_CODEX_USAGE_ANALYTICS_CHART_TOOL_ACTIVITY`,
        usage_history: `CHATGPT_CODEX_USAGE_ANALYTICS_CHART_USAGE_HISTORY`
    }
}));

function ui(e) {
    return e.status !== `pending` && e.fetchStatus === `idle`
}

function di(e) {
    return e.status === `error`
}

function fi(e) {
    return [e.dataUpdatedAt, e.errorUpdatedAt]
}
var pi, mi, hi, gi = e((() => {
    pi = z(), d(), ne(), li(), mi = t(ce()), hi = e => {
        "use forget";
        let t = (0, pi.c)(14),
            {
                chart: n,
                queries: r
            } = e,
            i = w()?.id,
            a = (0, mi.useRef)(null),
            o;
        t[0] === r ? o = t[1] : (o = r.length > 0 && r.every(ui), t[0] = r, t[1] = o);
        let s = o,
            c = r.some(di) ? `CHATGPT_CODEX_ANALYTICS_CHART_LOAD_OUTCOME_ERROR` : `CHATGPT_CODEX_ANALYTICS_CHART_LOAD_OUTCOME_SUCCESS`,
            l;
        t[2] !== i || t[3] !== n || t[4] !== c || t[5] !== r ? (l = JSON.stringify([i, n, c, r.map(fi)]), t[2] = i, t[3] = n, t[4] = c, t[5] = r, t[6] = l) : l = t[6];
        let u = l,
            d, p;
        return t[7] !== i || t[8] !== n || t[9] !== c || t[10] !== u || t[11] !== s ? (d = () => {
            !s || i == null || a.current === u || (a.current = u, f.logStructuredEvent(`ChatgptCodexAnalyticsChartLoadResult`, {
                chart: ci[n],
                outcome: c
            }))
        }, p = [i, n, c, u, s], t[7] = i, t[8] = n, t[9] = c, t[10] = u, t[11] = s, t[12] = d, t[13] = p) : (d = t[12], p = t[13]), (0, mi.useEffect)(d, p), null
    }
}));

function _i(e, t) {
    let n = Math.max(e.data.length - t, 0),
        r = e.data.slice(n);
    return {
        data: r,
        metrics: Object.fromEntries(Object.entries(e.metrics).map(([e, t]) => {
            let n = r.reduce((t, n) => t + (n.values[e] ?? 0), 0);
            return [e, {
                displayName: t.displayName,
                total: n
            }]
        }))
    }
}

function vi(e, t) {
    let n = {
        data: [],
        metrics: {}
    };
    if (!e?.data || e.data.length === 0) return {
        chartData: n,
        seriesColorMap: {},
        seriesOrder: []
    };
    let r = {};
    t.forEach(({
        key: e
    }) => {
        r[e] = 0
    });
    let i = e.data.map(e => {
            let n = {},
                i = 0;
            return t.forEach(({
                key: t,
                getValue: a
            }) => {
                let o = a(e);
                r[t] += o, n[t] = o, i += o
            }), {
                date: e.date,
                total: i,
                values: n
            }
        }),
        a = t.filter(({
            key: e
        }) => r[e] > 0);
    return {
        chartData: {
            data: i.map(({
                date: e,
                values: t
            }) => ({
                date: e,
                total: a.reduce((e, {
                    key: n
                }) => e + t[n], 0),
                values: Object.fromEntries(a.map(({
                    key: e
                }) => [e, t[e]]))
            })),
            metrics: Object.fromEntries(a.map(({
                key: e,
                label: t
            }) => [e, {
                total: r[e],
                displayName: t
            }]))
        },
        seriesColorMap: Object.fromEntries(a.map(({
            key: e,
            color: t
        }) => [e, t])),
        seriesOrder: a.map(({
            key: e
        }) => e)
    }
}

function yi(e, t) {
    return vi(e, ia.map(e => ({
        key: e,
        label: Sn(t, e),
        color: Tn[e].color,
        getValue: t => Cn(t.product_surface_usage_values, e)
    })))
}

function bi(e) {
    return [{
        key: `codex`,
        label: e.formatMessage({
            id: `chatgpt.settings.analytics.chart.product.codex`,
            defaultMessage: `Codex`
        }),
        color: `#BCD9FA`
    }, {
        key: `work`,
        label: e.formatMessage({
            id: `chatgpt.settings.analytics.chart.product.work`,
            defaultMessage: `Work`
        }),
        color: `#3B82F6`
    }]
}

function xi(e, t, n = `plan`) {
    return vi(e, bi(t).map(e => ({
        ...e,
        getValue: t => Object.entries(n === `credits` ? t.premium_usage_values?.credit_usage_credits ?? {} : t.product_surface_usage_values).reduce((t, [n, r]) => (e.key === `work` ? n.startsWith(`work_`) : !n.startsWith(`work_`)) ? t + Number(r ?? 0) : t, 0)
    })))
}

function Si({
    events: e,
    dateRange: t,
    groupBy: n,
    intl: r
}) {
    let i = new Map;
    for (let t of e ?? []) {
        let e = t.date.slice(0, 10),
            n = t.product_surface.startsWith(`work_`) ? `work` : `codex`,
            r = i.get(e) ?? {};
        r[n] = (r[n] ?? 0) + t.credit_amount, i.set(e, r)
    }
    let a = [...i.keys()],
        o = (t == null ? a.sort() : Vn({
            availableDateKeys: a,
            dateRange: t,
            groupBy: n
        })).map(e => {
            let t = i.get(e) ?? {};
            return {
                date: e,
                values: t,
                total: ua(t)
            }
        }),
        s = bi(r).filter(({
            key: e
        }) => o.some(({
            values: t
        }) => (t[e] ?? 0) > 0));
    return {
        chartData: {
            data: o,
            metrics: Object.fromEntries(s.map(({
                key: e,
                label: t
            }) => [e, {
                displayName: t,
                total: o.reduce((t, {
                    values: n
                }) => t + (n[e] ?? 0), 0)
            }]))
        },
        seriesColorMap: Object.fromEntries(s.map(({
            key: e,
            color: t
        }) => [e, t])),
        seriesOrder: s.map(({
            key: e
        }) => e)
    }
}

function Ci(e) {
    if (e.data.length !== 0) return e.data.reduce((e, t) => e + Object.values(t.values).reduce((e, t) => e + (t ?? 0), 0), 0)
}

function wi(e, t, n) {
    let r = Ci(e) ?? 0;
    if (!(r > 0)) return {
        chartData: e,
        seriesOrder: [...t]
    };
    let i = Object.fromEntries(t.map(t => [t, e.data.reduce((e, n) => e + (n.values[t] ?? 0), 0)])),
        a = new Set(t.filter(e => e.toLowerCase() === `other` || i[e] > 0 && i[e] * 100 < r));
    if (a.size === 0) return {
        chartData: e,
        seriesOrder: [...t]
    };
    let o = t.filter(e => !a.has(e)),
        s = [...a];
    return {
        chartData: {
            data: e.data.map(e => ({
                ...e,
                values: {
                    ...Object.fromEntries(o.map(t => [t, e.values[t] ?? 0])),
                    other: s.reduce((t, n) => t + (e.values[n] ?? 0), 0)
                }
            })),
            metrics: {
                ...Object.fromEntries(o.map(t => [t, e.metrics[t]])),
                other: {
                    displayName: n,
                    total: s.reduce((e, t) => e + i[t], 0)
                }
            }
        },
        seriesOrder: [...o, `other`]
    }
}

function Ti(e) {
    "use forget";
    let t = (0, ta.c)(9),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let r = n,
        i = w(),
        a;
    t[2] !== i || t[3] !== r.embeddedInSettings || t[4] !== r.showSettingsCredits ? (a = r.embeddedInSettings === !0 && r.showSettingsCredits === !0 && i?.isPersonalAccount() === !0, t[2] = i, t[3] = r.embeddedInSettings, t[4] = r.showSettingsCredits, t[5] = a) : a = t[5];
    let o = a,
        s;
    return t[6] !== o || t[7] !== r ? (s = o ? (0, J.jsx)(Ei, {
        ...r
    }) : (0, J.jsx)(Di, {
        ...r
    }), t[6] = o, t[7] = r, t[8] = s) : s = t[8], s
}

function Ei(e) {
    "use forget";
    let t = (0, ta.c)(4),
        n;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = {
        enabled: !0
    }, t[0] = n) : n = t[0];
    let r = De(n),
        i;
    return t[1] !== r || t[2] !== e ? (i = (0, J.jsx)(Di, {
        ...e,
        consumerCreditUsageQuery: r
    }), t[1] = r, t[2] = e, t[3] = i) : i = t[3], i
}

function Di(e) {
    "use forget";
    let t = (0, ta.c)(365),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let {
        allowAutoDateRangeFallback: r,
        consumerCreditUsageQuery: i,
        dateRange: a,
        embeddedInSettings: o,
        groupBy: s,
        hideLocalTimeframeFilters: c,
        personalAgentUsageSection: l,
        showLegacyEnterpriseUsageDescription: u,
        showEnterprisePremiumUsage: d,
        showPersonalUsage: f,
        showSectionTitle: p,
        showSettingsCredits: m,
        showWorkspaceUsageTitle: h,
        showWorkspaceUsage: g,
        selectedWindowPreset: _,
        onAutoSelectThirtyDays: v,
        useTokenAreaChart: b,
        workspaceUser: x,
        workspaceAgentUsageSection: S,
        settingsTimeWindowControls: E
    } = n, O = r !== void 0 && r, k = o !== void 0 && o, j = c !== void 0 && c, M = d === void 0 || d, N = f === void 0 || f, ee = p === void 0 || p, te = m !== void 0 && m, ne = h === void 0 || h, re = g === void 0 || g, ie = b !== void 0 && b, P = x !== void 0 && x, ae = w(), F = ue(), [oe, se] = (0, na.useState)(`total_usage`), [L, R] = (0, na.useState)(k ? `surface` : `model`), [ce, le] = (0, na.useState)(`model`), [z, de] = (0, na.useState)(ra), B = P && ie, V = N && B, pe;
    t[2] !== ae || t[3] !== k || t[4] !== te ? (pe = k && te && ae?.isPersonalAccount() === !0, t[2] = ae, t[3] = k, t[4] = te, t[5] = pe) : pe = t[5];
    let H = pe,
        he;
    t[6] !== a || t[7] !== s || t[8] !== N ? (he = {
        enabled: N,
        dateRange: a,
        groupBy: s
    }, t[6] = a, t[7] = s, t[8] = N, t[9] = he) : he = t[9];
    let ge = Fe(he),
        {
            data: _e,
            isLoading: ve,
            error: ye
        } = ge,
        be;
    t[10] !== V || t[11] !== a || t[12] !== s ? (be = {
        enabled: V,
        dateRange: a,
        groupBy: s
    }, t[10] = V, t[11] = a, t[12] = s, t[13] = be) : be = t[13];
    let xe = fe(be),
        {
            data: U,
            isLoading: Se,
            error: Ce
        } = xe,
        we = i?.data,
        Te = i?.isLoading ?? !1,
        Ee = i?.error,
        De = bt(),
        Oe = re && De,
        ke;
    t[14] !== a || t[15] !== s || t[16] !== Oe ? (ke = {
        enabled: Oe,
        dateRange: a,
        groupBy: s
    }, t[14] = a, t[15] = s, t[16] = Oe, t[17] = ke) : ke = t[17];
    let {
        data: Ae,
        isLoading: je,
        error: Me
    } = Pe(ke), Ne;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (Ne = C(`3964716022`), t[18] = Ne) : Ne = t[18];
    let Ie = Ne,
        Le;
    t[19] !== Ae?.data || t[20] !== Oe ? (Le = Oe && !Ie && Ae?.data.some(Ii), t[19] = Ae?.data, t[20] = Oe, t[21] = Le) : Le = t[21];
    let Re = !!Le,
        ze = !!(M && Re),
        Be = ae?.planType,
        Ve;
    t[22] === Be ? Ve = t[23] : (Ve = T(Be), t[22] = Be, t[23] = Ve);
    let He = Ve,
        Ue = He ? `total_usage` : oe,
        We;
    t[24] !== _e || t[25] !== F ? (We = yi(_e, F), t[24] = _e, t[25] = F, t[26] = We) : We = t[26];
    let {
        chartData: Ge,
        seriesColorMap: Ke,
        seriesOrder: qe
    } = We, Je;
    t[27] !== _e || t[28] !== F ? (Je = xi(_e, F), t[27] = _e, t[28] = F, t[29] = Je) : Je = t[29];
    let {
        chartData: Ye,
        seriesColorMap: Ze,
        seriesOrder: Qe
    } = Je, $e;
    t[30] !== F || t[31] !== U ? ($e = xi(U, F, `credits`), t[30] = F, t[31] = U, t[32] = $e) : $e = t[32];
    let {
        chartData: et,
        seriesColorMap: tt,
        seriesOrder: nt
    } = $e, rt = we?.data, it;
    t[33] !== a || t[34] !== s || t[35] !== F || t[36] !== rt ? (it = Si({
        events: rt,
        dateRange: a,
        groupBy: s,
        intl: F
    }), t[33] = a, t[34] = s, t[35] = F, t[36] = rt, t[37] = it) : it = t[37];
    let {
        chartData: at,
        seriesColorMap: ot,
        seriesOrder: st
    } = it, ct;
    t[38] !== _e || t[39] !== a || t[40] !== s ? (ct = Jn(_e, {
        dateRange: a,
        groupBy: s
    }), t[38] = _e, t[39] = a, t[40] = s, t[41] = ct) : ct = t[41];
    let lt = ct,
        dt;
    t[42] !== a || t[43] !== k || t[44] !== s || t[45] !== U ? (dt = Jn(k && U != null ? {
        ...U,
        data: U.data.map(Pi)
    } : U, {
        dateRange: a,
        groupBy: s
    }), t[42] = a, t[43] = k, t[44] = s, t[45] = U, t[46] = dt) : dt = t[46];
    let ft = dt,
        pt;
    t[47] === F ? pt = t[48] : (pt = e => Sn(F, e), t[47] = F, t[48] = pt);
    let mt;
    t[49] !== a || t[50] !== s || t[51] !== pt || t[52] !== U ? (mt = qn(U, {
        dateRange: a,
        formatSurfaceLabel: pt,
        groupBy: s
    }), t[49] = a, t[50] = s, t[51] = pt, t[52] = U, t[53] = mt) : mt = t[53];
    let ht = mt,
        gt;
    t[54] !== a || t[55] !== s || t[56] !== U ? (gt = Qn(U, {
        dateRange: a,
        groupBy: s
    }), t[54] = a, t[55] = s, t[56] = U, t[57] = gt) : gt = t[57];
    let _t = gt,
        vt, yt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt;
    if (t[58] !== B || t[59] !== ye || t[60] !== _e?.units || t[61] !== a || t[62] !== k || t[63] !== Me || t[64] !== Ae || t[65] !== s || t[66] !== Re || t[67] !== F || t[68] !== Ge || t[69] !== lt || t[70] !== Ze || t[71] !== Qe || t[72] !== Ye || t[73] !== Ke || t[74] !== qe || t[75] !== L || t[76] !== z || t[77] !== Oe || t[78] !== u || t[79] !== ze || t[80] !== ft || t[81] !== ht || t[82] !== Ce || t[83] !== U || t[84] !== _t) {
        let e = lt?.seriesOrder ?? [],
            n;
        t[116] === ft?.seriesOrder ? n = t[117] : (n = ft?.seriesOrder ?? [], t[116] = ft?.seriesOrder, t[117] = n), qt = n;
        let r;
        t[118] === ht?.seriesOrder ? r = t[119] : (r = ht?.seriesOrder ?? [], t[118] = ht?.seriesOrder, t[119] = r), Yt = r;
        let i;
        t[120] === _t?.seriesOrder ? i = t[121] : (i = _t?.seriesOrder ?? [], t[120] = _t?.seriesOrder, t[121] = i);
        let o = i,
            c = lt?.response,
            l;
        t[122] !== lt?.seriesLabels || t[123] !== c ? (l = an({
            response: c,
            isLoading: !1,
            isError: !1,
            seriesLabels: lt?.seriesLabels ?? {}
        }), t[122] = lt?.seriesLabels, t[123] = c, t[124] = l) : l = t[124];
        let {
            chartData: d
        } = l, f = ft?.response, p;
        t[125] !== f || t[126] !== ft?.seriesLabels ? (p = an({
            response: f,
            isLoading: !1,
            isError: !1,
            seriesLabels: ft?.seriesLabels ?? {}
        }), t[125] = f, t[126] = ft?.seriesLabels, t[127] = p) : p = t[127], {
            chartData: Kt
        } = p;
        let m = ht?.response,
            h;
        t[128] !== m || t[129] !== ht?.seriesLabels ? (h = an({
            response: m,
            isLoading: !1,
            isError: !1,
            seriesLabels: ht?.seriesLabels ?? {}
        }), t[128] = m, t[129] = ht?.seriesLabels, t[130] = h) : h = t[130], {
            chartData: Jt
        } = h;
        let g = _t?.response,
            _;
        t[131] !== g || t[132] !== _t?.seriesLabels ? (_ = an({
            response: g,
            isLoading: !1,
            isError: !1,
            seriesLabels: _t?.seriesLabels ?? {}
        }), t[131] = g, t[132] = _t?.seriesLabels, t[133] = _) : _ = t[133];
        let {
            chartData: v
        } = _, y;
        t[134] === U ? y = t[135] : (y = Zn(U), t[134] = U, t[135] = y), Lt = y;
        let b = z === ra,
            x = b ? void 0 : z,
            S;
        t[136] !== a || t[137] !== s || t[138] !== x || t[139] !== U ? (S = $n(U, {
            dateRange: a,
            groupBy: s,
            model: x
        }), t[136] = a, t[137] = s, t[138] = x, t[139] = U, t[140] = S) : S = t[140];
        let C = S,
            w;
        t[141] === C ? w = t[142] : (w = an({
            response: C,
            isLoading: !1,
            isError: !1,
            seriesLabels: sa
        }), t[141] = C, t[142] = w);
        let {
            chartData: T
        } = w;
        It = b ? v : T;
        let E;
        t[143] !== b || t[144] !== o ? (E = b ? o : oa.map(Ni), t[143] = b, t[144] = o, t[145] = E) : E = t[145], zt = E;
        let D;
        t[146] === zt ? D = t[147] : (D = pn(zt), t[146] = zt, t[147] = D), Rt = D;
        let O;
        t[148] !== Ae || t[149] !== F ? (O = yi(Ae, F), t[148] = Ae, t[149] = F, t[150] = O) : O = t[150], {
            chartData: xt,
            seriesColorMap: jt,
            seriesOrder: Mt
        } = O;
        let A;
        if (t[151] !== Ae || t[152] !== F) {
            let e;
            t[154] === F ? e = t[155] : (e = e => ({
                key: e,
                label: Sn(F, e),
                color: Tn[e].color,
                getValue: t => da(Cn(t.premium_usage_values?.total_usage_credits, e))
            }), t[154] = F, t[155] = e), A = vi(Ae, ia.map(e)), t[151] = Ae, t[152] = F, t[153] = A
        } else A = t[153];
        ({
            chartData: Tt,
            seriesColorMap: Et,
            seriesOrder: Dt
        } = A);
        let j;
        if (t[156] !== Ae || t[157] !== F) {
            let e;
            t[159] === F ? e = t[160] : (e = e => ({
                key: e,
                label: Sn(F, e),
                color: Tn[e].color,
                getValue: t => da(Cn(t.premium_usage_values?.credit_usage_credits, e))
            }), t[159] = F, t[160] = e), j = vi(Ae, ia.map(e)), t[156] = Ae, t[157] = F, t[158] = j
        } else j = t[158];
        ({
            chartData: Ot,
            seriesColorMap: kt,
            seriesOrder: At
        } = j);
        let M;
        t[161] === Ae ? M = t[162] : (M = vi(Ae, aa.map(Mi)), t[161] = Ae, t[162] = M), {
            chartData: St,
            seriesColorMap: Ct,
            seriesOrder: wt
        } = M, Nt = !!ye, Ft = !!Ce, Pt = !!(Oe && Me);
        let N = Mt.length > 0;
        Wt = !Re || N, Ut = u ?? ze, Ht = _e?.units === `credits`, vt = (B || k) && e.length > 0, yt = vt ? k && L === `surface` && Qe.length === 0 ? `model` : L : `surface`;
        let ee = yt === `model` ? d : k ? Ye : Ge,
            te = yt === `model` ? e : k ? Qe : qe;
        ({
            chartData: Bt,
            seriesOrder: Vt
        } = k && !Ht && yt === `model` ? wi(ee, te, F.formatMessage({
            id: `chatgpt.settings.analytics.usage_history.plan.model.other`,
            defaultMessage: `Other`
        })) : {
            chartData: ee,
            seriesOrder: te
        }), Gt = k && yt === `surface` ? Ze : k ? On(Vt) : B ? pn(Vt) : Ke, t[58] = B, t[59] = ye, t[60] = _e?.units, t[61] = a, t[62] = k, t[63] = Me, t[64] = Ae, t[65] = s, t[66] = Re, t[67] = F, t[68] = Ge, t[69] = lt, t[70] = Ze, t[71] = Qe, t[72] = Ye, t[73] = Ke, t[74] = qe, t[75] = L, t[76] = z, t[77] = Oe, t[78] = u, t[79] = ze, t[80] = ft, t[81] = ht, t[82] = Ce, t[83] = U, t[84] = _t, t[85] = vt, t[86] = yt, t[87] = xt, t[88] = St, t[89] = Ct, t[90] = wt, t[91] = Tt, t[92] = Et, t[93] = Dt, t[94] = Ot, t[95] = kt, t[96] = At, t[97] = jt, t[98] = Mt, t[99] = Nt, t[100] = Pt, t[101] = Ft, t[102] = It, t[103] = Lt, t[104] = Rt, t[105] = zt, t[106] = Bt, t[107] = Vt, t[108] = Ht, t[109] = Ut, t[110] = Wt, t[111] = Gt, t[112] = Kt, t[113] = qt, t[114] = Jt, t[115] = Yt
    } else vt = t[85], yt = t[86], xt = t[87], St = t[88], Ct = t[89], wt = t[90], Tt = t[91], Et = t[92], Dt = t[93], Ot = t[94], kt = t[95], At = t[96], jt = t[97], Mt = t[98], Nt = t[99], Pt = t[100], Ft = t[101], It = t[102], Lt = t[103], Rt = t[104], zt = t[105], Bt = t[106], Vt = t[107], Ht = t[108], Ut = t[109], Wt = t[110], Gt = t[111], Kt = t[112], qt = t[113], Jt = t[114], Yt = t[115];
    let Xt = Gt,
        Zt = V && qt.length > 0,
        Qt = Zt ? ce : `surface`,
        $t = Qt === `model` ? Kt : Jt,
        en = Qt === `model` ? qt : Yt,
        tn;
    t[163] === en ? tn = t[164] : (tn = pn(en), t[163] = en, t[164] = tn);
    let nn = tn,
        rn = Vt.length > 0,
        on = Ht ? ca : la,
        sn, cn;
    t[165] !== Lt || t[166] !== z ? (sn = () => {
        z !== ra && !Lt.includes(z) && de(ra)
    }, cn = [Lt, z], t[165] = Lt, t[166] = z, t[167] = sn, t[168] = cn) : (sn = t[167], cn = t[168]), (0, na.useEffect)(sn, cn);
    let ln;
    t[169] === F ? ln = t[170] : (ln = F.formatMessage({
        id: `wham.usageDashboard.dailyUsage.timeframe.month`,
        defaultMessage: `30 days`
    }), t[169] = F, t[170] = ln);
    let un;
    t[171] === ln ? un = t[172] : (un = {
        id: `month`,
        label: ln,
        apply: ji
    }, t[171] = ln, t[172] = un);
    let dn;
    t[173] === F ? dn = t[174] : (dn = F.formatMessage({
        id: `wham.usageDashboard.dailyUsage.timeframe.week`,
        defaultMessage: `Week`
    }), t[173] = F, t[174] = dn);
    let fn;
    t[175] === dn ? fn = t[176] : (fn = {
        id: `week`,
        label: dn,
        apply: Ai
    }, t[175] = dn, t[176] = fn);
    let W;
    t[177] !== un || t[178] !== fn ? (W = [un, fn], t[177] = un, t[178] = fn, t[179] = W) : W = t[179];
    let mn = j ? void 0 : W,
        hn;
    t[180] === F ? hn = t[181] : (hn = (e, t) => F.formatNumber(e / t, {
        style: `percent`,
        maximumFractionDigits: 0
    }), t[180] = F, t[181] = hn);
    let gn = hn,
        _n;
    t[182] === F ? _n = t[183] : (_n = (e, t) => {
        let n = da(e);
        return F.formatMessage({
            id: `wham.usageDashboard.chart.credits`,
            defaultMessage: `{value, number} {value, plural, one {credit} other {credits}}`
        }, {
            value: n
        })
    }, t[182] = F, t[183] = _n);
    let vn = _n,
        G;
    t[184] === F ? G = t[185] : (G = (e, t) => {
        let n = Math.round(e);
        return F.formatMessage({
            id: `wham.usageDashboard.chart.tokens`,
            defaultMessage: `{value, number} {value, plural, one {token} other {tokens}}`
        }, {
            value: n
        })
    }, t[184] = F, t[185] = G);
    let yn = G,
        bn;
    t[186] === vn ? bn = t[187] : (bn = (e, t) => {
        let n = da(t.reduce(ki, 0));
        return `${me(ut(String(e)),`MMM d`)} (${vn(n,n)})`
    }, t[186] = vn, t[187] = bn);
    let xn = bn,
        wn;
    t[188] === yn ? wn = t[189] : (wn = (e, t) => {
        let n = t.reduce(Oi, 0);
        return `${me(ut(String(e)),`MMM d`)} (${yn(n,n)})`
    }, t[188] = yn, t[189] = wn);
    let En = wn,
        Dn;
    t[190] === F ? Dn = t[191] : (Dn = e => e == null ? `—` : F.formatNumber(Math.round(e)), t[190] = F, t[191] = Dn);
    let kn = Dn,
        An;
    t[192] === F ? An = t[193] : (An = e => e == null ? `—` : F.formatNumber(da(e)), t[192] = F, t[193] = An);
    let jn = An,
        K, Mn, Nn, Pn;
    if (t[194] !== O || t[195] !== Zt || t[196] !== vt || t[197] !== V || t[198] !== B || t[199] !== at || t[200] !== Ee || t[201] !== we || t[202] !== i || t[203] !== ot || t[204] !== st || t[205] !== ge || t[206] !== yt || t[207] !== mn || t[208] !== k || t[209] !== jn || t[210] !== vn || t[211] !== gn || t[212] !== kn || t[213] !== yn || t[214] !== s || t[215] !== Nt || t[216] !== Ft || t[217] !== F || t[218] !== Te || t[219] !== ve || t[220] !== Se || t[221] !== xn || t[222] !== En || t[223] !== v || t[224] !== l || t[225] !== ce || t[226] !== $t || t[227] !== nn || t[228] !== en || t[229] !== It || t[230] !== Lt || t[231] !== Rt || t[232] !== zt || t[233] !== L || t[234] !== Bt || t[235] !== rn || t[236] !== Xt || t[237] !== Vt || t[238] !== Ht || t[239] !== on || t[240] !== z || t[241] !== _ || t[242] !== E || t[243] !== H || t[244] !== N || t[245] !== ee || t[246] !== Kt || t[247] !== qt || t[248] !== xe || t[249] !== et || t[250] !== tt || t[251] !== nt) {
        Pn = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            let e = Ci($t),
                n = Ci(It);
            if (k) {
                let e = yt === `model` && qt.length > 0,
                    n = V ? e ? Kt : et : at,
                    r = V ? e ? qt : nt : st,
                    a;
                t[256] !== V || t[257] !== ot || t[258] !== r || t[259] !== e || t[260] !== tt ? (a = V ? e ? On(r) : tt : ot, t[256] = V, t[257] = ot, t[258] = r, t[259] = e, t[260] = tt, t[261] = a) : a = t[261];
                let o = a,
                    c, l, u, d, f, p;
                if (t[262] !== O || t[263] !== vt || t[264] !== V || t[265] !== Ee || t[266] !== we || t[267] !== i || t[268] !== n || t[269] !== o || t[270] !== r || t[271] !== ge || t[272] !== yt || t[273] !== jn || t[274] !== gn || t[275] !== s || t[276] !== Nt || t[277] !== Ft || t[278] !== F || t[279] !== Te || t[280] !== ve || t[281] !== Se || t[282] !== v || t[283] !== Bt || t[284] !== rn || t[285] !== Xt || t[286] !== Vt || t[287] !== Ht || t[288] !== _ || t[289] !== E || t[290] !== H || t[291] !== N || t[292] !== xe) {
                    let e = Ci(n) ?? 0,
                        a = Nt,
                        m = ve,
                        h = V ? Ft : !!Ee,
                        g = (V || H) && (e > 0 || h),
                        y = rn || e > 0,
                        b = vt && y,
                        x = H && Te || V && Se,
                        S = m || x,
                        C = !y && S,
                        w = !y && !a && !h;
                    u = `flex flex-col gap-4`;
                    let T;
                    t[299] !== ge || t[300] !== N ? (T = N ? [ge] : [], t[299] = ge, t[300] = N, t[301] = T) : T = t[301];
                    let D;
                    t[302] !== V || t[303] !== xe ? (D = V ? [xe] : [], t[302] = V, t[303] = xe, t[304] = D) : D = t[304];
                    let k;
                    t[305] !== i || t[306] !== H ? (k = H && i != null ? [i] : [], t[305] = i, t[306] = H, t[307] = k) : k = t[307], t[308] !== T || t[309] !== D || t[310] !== k ? (d = (0, J.jsx)(hi, {
                        chart: `usage_history`,
                        queries: [...T, ...D, ...k]
                    }), t[308] = T, t[309] = D, t[310] = k, t[311] = d) : d = t[311], t[312] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, J.jsx)(Hi, {
                        title: (0, J.jsx)(I, {
                            id: `chatgpt.settings.analytics.usage_history.section.title`,
                            defaultMessage: `Usage history`
                        }),
                        description: (0, J.jsx)(I, {
                            id: `chatgpt.settings.analytics.usage_history.section.description`,
                            defaultMessage: `See how plan usage and credits were consumed in Work, Codex, and other agentic tasks. Conversations in Chat are not included.`
                        })
                    }), t[312] = f) : f = t[312], t[313] !== yt || t[314] !== F || t[315] !== E || t[316] !== b ? (p = E != null || b ? (0, J.jsxs)(`div`, {
                        className: `flex flex-wrap items-center gap-2`,
                        children: [E, b ? (0, J.jsx)(Gr, {
                            activeBreakdown: yt,
                            ariaLabel: F.formatMessage({
                                id: `chatgpt.settings.analytics.usage_history.breakdown.accessible_label`,
                                defaultMessage: `Plan usage breakdown`
                            }),
                            compact: !0,
                            onBreakdownChange: e => {
                                R(e), oi(`usage_history`, e, `product`)
                            },
                            surfaceLabel: `product`
                        }) : null]
                    }) : null, t[313] = yt, t[314] = F, t[315] = E, t[316] = b, t[317] = p) : p = t[317], c = `flex flex-col gap-4 [interpolate-size:allow-keywords] motion-safe:transition-[height] motion-safe:duration-200 motion-safe:ease-out ${w?`h-[68px]`:`h-max`}`, l = w ? (0, J.jsx)(Ui, {
                        children: S ? (0, J.jsx)(A, {
                            className: `icon-sm`
                        }) : _ === `7d` && O && v != null ? (0, J.jsx)(Ri, {
                            consumerCreditUsageEvents: we,
                            groupBy: s,
                            onAutoSelectThirtyDays: v,
                            workspaceUser: V
                        }) : (0, J.jsx)(Li, {})
                    }) : (0, J.jsxs)(J.Fragment, {
                        children: [(0, J.jsxs)(Wi, {
                            children: [(0, J.jsx)(`div`, {
                                className: `text-token-text-primary text-sm font-medium`,
                                children: (0, J.jsx)(I, {
                                    id: `chatgpt.settings.analytics.usage_history.plan.chart.title`,
                                    defaultMessage: `Plan usage`
                                })
                            }), a ? (0, J.jsx)(ea, {
                                title: (0, J.jsx)(I, {
                                    id: `wham.usageDashboard.dailyUsage.error.title`,
                                    defaultMessage: `We couldn’t load your usage`
                                })
                            }) : (0, J.jsx)(vr, {
                                compact: !0,
                                chartHeight: 112,
                                data: m || C ? `loading` : Bt,
                                clientEventSource: `whamDailyTokenUsageBreakdown`,
                                forceStack: !0,
                                hideHeader: !0,
                                hideReferenceLine: !0,
                                hideYAxis: !0,
                                legendVariant: `codexAnalytics`,
                                legendOrder: Vt,
                                seriesColorMap: Xt,
                                stackOrder: Vt,
                                tooltipMetricOrder: Vt,
                                tooltipSummaryFormatter: Ht ? e => F.formatMessage({
                                    id: `chatgpt.settings.analytics.usage_history.plan.tooltip.credit_summary`,
                                    defaultMessage: `{amount} plan credits`
                                }, {
                                    amount: F.formatNumber(da(e))
                                }) : void 0,
                                valueFormatter: Ht ? e => F.formatNumber(da(e)) : gn,
                                showHorizontalGrid: !0,
                                visualization: `bar`,
                                xAxisTickAlignment: `balanced`,
                                xAxisDateFormat: `numeric`,
                                xAxisTickCount: 7,
                                yAxisTickCount: 4
                            })]
                        }), g ? (0, J.jsxs)(Wi, {
                            children: [(0, J.jsxs)(`div`, {
                                className: `flex flex-col gap-0.5`,
                                children: [(0, J.jsx)(`div`, {
                                    className: `text-token-text-primary text-sm leading-5 font-medium`,
                                    children: (0, J.jsx)(I, {
                                        id: `chatgpt.settings.analytics.usage_history.credits.chart.title`,
                                        defaultMessage: `Credits spent`
                                    })
                                }), (0, J.jsx)(`div`, {
                                    className: `text-token-text-primary text-lg leading-[26px] font-semibold tabular-nums`,
                                    children: jn(h || x ? void 0 : e)
                                })]
                            }), h ? (0, J.jsx)(ea, {
                                title: (0, J.jsx)(I, {
                                    id: `wham.usageDashboard.creditHistory.error.title`,
                                    defaultMessage: `We couldn’t load your credit usage`
                                })
                            }) : (0, J.jsx)(vr, {
                                compact: !0,
                                chartHeight: 112,
                                data: x || C ? `loading` : n,
                                clientEventSource: V ? `whamDailyWorkspaceUserTokenUsageBreakdownCredits` : `whamCreditUsageEvents`,
                                forceStack: !0,
                                hideHeader: !0,
                                hideLegend: !0,
                                hideReferenceLine: !0,
                                hideYAxis: !0,
                                legendOrder: r,
                                seriesColorMap: o,
                                stackOrder: r,
                                tooltipMetricOrder: r,
                                tooltipSummaryFormatter: e => F.formatMessage({
                                    id: `chatgpt.settings.analytics.usage_history.credits.tooltip.summary`,
                                    defaultMessage: `{credits, number} {credits, plural, one {credit} other {credits}}`
                                }, {
                                    credits: da(e)
                                }),
                                valueFormatter: e => F.formatNumber(da(e)),
                                showHorizontalGrid: !0,
                                visualization: `bar`,
                                xAxisTickAlignment: `balanced`,
                                xAxisDateFormat: `numeric`,
                                xAxisTickCount: 7,
                                yAxisTickCount: 4
                            })]
                        }) : null]
                    }), t[262] = O, t[263] = vt, t[264] = V, t[265] = Ee, t[266] = we, t[267] = i, t[268] = n, t[269] = o, t[270] = r, t[271] = ge, t[272] = yt, t[273] = jn, t[274] = gn, t[275] = s, t[276] = Nt, t[277] = Ft, t[278] = F, t[279] = Te, t[280] = ve, t[281] = Se, t[282] = v, t[283] = Bt, t[284] = rn, t[285] = Xt, t[286] = Vt, t[287] = Ht, t[288] = _, t[289] = E, t[290] = H, t[291] = N, t[292] = xe, t[293] = c, t[294] = l, t[295] = u, t[296] = d, t[297] = f, t[298] = p
                } else c = t[293], l = t[294], u = t[295], d = t[296], f = t[297], p = t[298];
                let m;
                t[318] !== c || t[319] !== l ? (m = (0, J.jsx)(`div`, {
                    className: c,
                    children: l
                }), t[318] = c, t[319] = l, t[320] = m) : m = t[320];
                let h;
                t[321] !== u || t[322] !== d || t[323] !== f || t[324] !== p || t[325] !== m ? (h = (0, J.jsxs)(`section`, {
                    className: u,
                    children: [d, f, p, m]
                }), t[321] = u, t[322] = d, t[323] = f, t[324] = p, t[325] = m, t[326] = h) : h = t[326], Pn = h;
                break bb0
            }
            K = `flex flex-col gap-6`,
            t[327] !== F || t[328] !== ee ? (Mn = ee ? (0, J.jsxs)(`h2`, {
                className: `flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-100`,
                children: [(0, J.jsx)(I, {
                    id: `wham.usageDashboard.section.personalUsage`,
                    defaultMessage: `Usage breakdown`
                }), (0, J.jsx)(y, {
                    label: F.formatMessage({
                        id: `wham.usageDashboard.usageChart.tooltip`,
                        defaultMessage: `Usage data is approximate. Data may be delayed by up to 6 hours.`
                    }),
                    children: (0, J.jsx)(D, {
                        className: `inline-block size-4`
                    })
                })]
            }) : null, t[327] = F, t[328] = ee, t[329] = Mn) : Mn = t[329],
            Nn = N ? (0, J.jsxs)(J.Fragment, {
                children: [(0, J.jsxs)(`div`, {
                    className: B ? `border-token-border-light flex flex-col gap-3 border-b pb-8` : `flex flex-col gap-3`,
                    children: [(0, J.jsxs)(`div`, {
                        className: B ? `flex flex-wrap items-center justify-between gap-3 px-6` : void 0,
                        children: [(0, J.jsx)(`h3`, {
                            className: `text-token-text-primary text-lg font-semibold`,
                            children: (0, J.jsx)(I, {
                                id: `wham.usageDashboard.section.dailyUsageChart`,
                                defaultMessage: `Personal usage`
                            })
                        }), vt ? (0, J.jsx)(Gr, {
                            activeBreakdown: L,
                            ariaLabel: F.formatMessage({
                                id: `wham.usageDashboard.dailyUsage.shareBreakdown.aria`,
                                defaultMessage: `Personal usage breakdown`
                            }),
                            onBreakdownChange: R
                        }) : null]
                    }), Nt ? (0, J.jsx)(ea, {
                        title: (0, J.jsx)(I, {
                            id: `wham.usageDashboard.dailyUsage.error.title`,
                            defaultMessage: `We couldn’t load your usage`
                        })
                    }) : (0, J.jsx)(vr, {
                        data: ve ? `loading` : Bt,
                        clientEventSource: `whamDailyTokenUsageBreakdown`,
                        forceStack: !0,
                        seriesColorMap: Xt,
                        stackOrder: Vt,
                        legendOrder: Vt,
                        tooltipMetricOrder: B ? Vt : void 0,
                        filters: B ? void 0 : mn,
                        filterLabel: B ? void 0 : F.formatMessage({
                            id: `wham.usageDashboard.dailyUsage.timeframe.aria`,
                            defaultMessage: `Select usage timeframe`
                        }),
                        valueFormatter: Ht ? vn : gn,
                        labelFormatter: Ht ? xn : void 0,
                        yAxisMax: Ht || !rn ? void 0 : 100,
                        yAxisValueFormatter: Ht || !rn ? void 0 : e => F.formatNumber(e / 100, {
                            style: `percent`,
                            maximumFractionDigits: 0
                        }),
                        hideReferenceLine: !0,
                        ...B ? on : {}
                    })]
                }), V ? Ft ? (0, J.jsx)(ea, {
                    title: (0, J.jsx)(I, {
                        id: `wham.usageDashboard.dailyUsage.error.title`,
                        defaultMessage: `We couldn’t load your usage`
                    })
                }) : (0, J.jsxs)(J.Fragment, {
                    children: [(0, J.jsxs)(`div`, {
                        className: `border-token-border-light flex flex-col gap-3 border-b pb-8`,
                        children: [(0, J.jsx)(Zi, {
                            controls: Zt ? (0, J.jsx)(Gr, {
                                activeBreakdown: ce,
                                ariaLabel: F.formatMessage({
                                    id: `wham.usageDashboard.dailyUsage.breakdown.aria`,
                                    defaultMessage: `Credits used breakdown`
                                }),
                                onBreakdownChange: le
                            }) : void 0,
                            label: (0, J.jsx)(I, {
                                id: `wham.usageDashboard.workspacePersonal.creditsUsed`,
                                defaultMessage: `Credits used`
                            }),
                            value: jn(e)
                        }), (0, J.jsx)(vr, {
                            data: Se ? `loading` : $t,
                            clientEventSource: `whamDailyWorkspaceUserTokenUsageBreakdownCredits`,
                            seriesColorMap: nn,
                            stackOrder: en,
                            legendOrder: en,
                            tooltipMetricOrder: en,
                            valueFormatter: vn,
                            labelFormatter: xn,
                            ...ca
                        })]
                    }), (0, J.jsxs)(`div`, {
                        className: `border-token-border-light flex flex-col gap-3 border-b pb-8`,
                        children: [(0, J.jsx)(Zi, {
                            controls: Lt.length > 0 ? (0, J.jsx)(Qi, {
                                modelOptions: Lt,
                                onModelChange: de,
                                selectedModelId: z
                            }) : void 0,
                            label: (0, J.jsx)(I, {
                                id: `wham.usageDashboard.workspacePersonal.tokensUsed`,
                                defaultMessage: `Tokens used`
                            }),
                            value: kn(n)
                        }), (0, J.jsx)(vr, {
                            data: Se ? `loading` : It,
                            clientEventSource: `whamDailyWorkspaceUserTokenUsageBreakdownTokens`,
                            seriesColorMap: Rt,
                            stackOrder: zt,
                            legendOrder: zt,
                            tooltipMetricOrder: zt,
                            tooltipTotalLabel: F.formatMessage({
                                id: `wham.usageDashboard.premiumUsage.tooltip.totalTokens`,
                                defaultMessage: `Text total tokens`
                            }),
                            valueFormatter: yn,
                            labelFormatter: En,
                            ...ca
                        })]
                    })]
                }) : null, l]
            }) : null
        }
        t[194] = O, t[195] = Zt, t[196] = vt, t[197] = V, t[198] = B, t[199] = at, t[200] = Ee, t[201] = we, t[202] = i, t[203] = ot, t[204] = st, t[205] = ge, t[206] = yt, t[207] = mn, t[208] = k, t[209] = jn, t[210] = vn, t[211] = gn, t[212] = kn, t[213] = yn, t[214] = s, t[215] = Nt, t[216] = Ft, t[217] = F, t[218] = Te, t[219] = ve, t[220] = Se, t[221] = xn, t[222] = En, t[223] = v, t[224] = l, t[225] = ce, t[226] = $t, t[227] = nn, t[228] = en, t[229] = It, t[230] = Lt, t[231] = Rt, t[232] = zt, t[233] = L, t[234] = Bt, t[235] = rn, t[236] = Xt, t[237] = Vt, t[238] = Ht, t[239] = on, t[240] = z, t[241] = _, t[242] = E, t[243] = H, t[244] = N, t[245] = ee, t[246] = Kt, t[247] = qt, t[248] = xe, t[249] = et, t[250] = tt, t[251] = nt, t[252] = K, t[253] = Mn, t[254] = Nn, t[255] = Pn
    } else K = t[252], Mn = t[253], Nn = t[254], Pn = t[255];
    if (Pn !== Symbol.for(`react.early_return_sentinel`)) return Pn;
    let Fn;
    t[330] !== Ue || t[331] !== mn || t[332] !== xt || t[333] !== St || t[334] !== Ct || t[335] !== wt || t[336] !== Tt || t[337] !== Et || t[338] !== Dt || t[339] !== Ot || t[340] !== kt || t[341] !== At || t[342] !== jt || t[343] !== Mt || t[344] !== vn || t[345] !== yn || t[346] !== Pt || t[347] !== F || t[348] !== je || t[349] !== He || t[350] !== xn || t[351] !== oe || t[352] !== Ut || t[353] !== Oe || t[354] !== Wt || t[355] !== ze || t[356] !== ne || t[357] !== ie || t[358] !== S ? (Fn = Oe && (Pt ? (0, J.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [ne ? (0, J.jsx)(`h3`, {
            className: `text-token-text-primary text-lg font-semibold`,
            children: (0, J.jsx)(I, {
                id: `wham.usageDashboard.section.teamUsageChart`,
                defaultMessage: `Workspace usage`
            })
        }) : null, (0, J.jsx)(ea, {
            title: (0, J.jsx)(I, {
                id: `wham.usageDashboard.dailyUsage.error.title`,
                defaultMessage: `We couldn’t load your usage`
            })
        })]
    }) : (0, J.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [ne ? (0, J.jsx)(`h3`, {
            className: `text-token-text-primary text-lg font-semibold`,
            children: (0, J.jsx)(I, {
                id: `wham.usageDashboard.section.teamUsageChart`,
                defaultMessage: `Workspace usage`
            })
        }) : null, ze ? (0, J.jsxs)(J.Fragment, {
            children: [(0, J.jsx)(vr, {
                data: je ? `loading` : Ue === `credits_used` ? Ot : Tt,
                clientEventSource: `whamDailyEnterprisePremiumUsageBreakdown`,
                headerControls: He ? null : (0, J.jsx)(Xe, {
                    ariaLabel: F.formatMessage({
                        id: `wham.usageDashboard.premiumUsage.creditMode.aria`,
                        defaultMessage: `Select premium usage metric`
                    }),
                    isCompact: !0,
                    size: `small`,
                    leftItem: {
                        ariaLabel: F.formatMessage({
                            id: `wham.usageDashboard.premiumUsage.creditMode.total`,
                            defaultMessage: `Total usage`
                        }),
                        label: F.formatMessage({
                            id: `wham.usageDashboard.premiumUsage.creditMode.total`,
                            defaultMessage: `Total usage`
                        }),
                        value: `total_usage`
                    },
                    onChange: se,
                    rightItem: {
                        ariaLabel: F.formatMessage({
                            id: `wham.usageDashboard.premiumUsage.creditMode.used`,
                            defaultMessage: `Credit usage`
                        }),
                        label: F.formatMessage({
                            id: `wham.usageDashboard.premiumUsage.creditMode.used`,
                            defaultMessage: `Credit usage`
                        }),
                        value: `credits_used`
                    },
                    value: oe
                }),
                forceStack: !0,
                seriesColorMap: Ue === `credits_used` ? kt : Et,
                stackOrder: Ue === `credits_used` ? At : Dt,
                legendOrder: Ue === `credits_used` ? At : Dt,
                filters: mn,
                filterLabel: F.formatMessage({
                    id: `wham.usageDashboard.dailyUsage.timeframe.aria`,
                    defaultMessage: `Select usage timeframe`
                }),
                valueFormatter: vn,
                labelFormatter: xn,
                hideReferenceLine: !0
            }), (0, J.jsx)(vr, {
                data: je ? `loading` : St,
                clientEventSource: `whamDailyEnterprisePremiumUsageBreakdown`,
                forceStack: !0,
                seriesColorMap: Ct,
                stackOrder: wt,
                legendOrder: wt,
                filters: mn,
                filterLabel: F.formatMessage({
                    id: `wham.usageDashboard.dailyUsage.timeframe.aria`,
                    defaultMessage: `Select usage timeframe`
                }),
                valueFormatter: yn,
                tooltipMetricOrder: wt,
                tooltipTotalLabel: F.formatMessage({
                    id: `wham.usageDashboard.premiumUsage.tooltip.totalTokens`,
                    defaultMessage: `Text total tokens`
                }),
                hideReferenceLine: !0,
                visualization: ie ? `stackedArea` : `bar`
            })]
        }) : null, Wt ? (0, J.jsx)(vr, {
            description: Ut ? (0, J.jsx)(I, {
                id: `wham.usageDashboard.section.teamUsageChart.description`,
                defaultMessage: `This chart reflects usage under the previous credits-based billing model`
            }) : void 0,
            data: je ? `loading` : xt,
            clientEventSource: `whamDailyEnterpriseTokenUsageBreakdown`,
            forceStack: !0,
            seriesColorMap: jt,
            stackOrder: Mt,
            legendOrder: Mt,
            filters: mn,
            filterLabel: F.formatMessage({
                id: `wham.usageDashboard.dailyUsage.timeframe.aria`,
                defaultMessage: `Select usage timeframe`
            }),
            valueFormatter: vn,
            labelFormatter: xn,
            hideReferenceLine: !0
        }) : null, S]
    })), t[330] = Ue, t[331] = mn, t[332] = xt, t[333] = St, t[334] = Ct, t[335] = wt, t[336] = Tt, t[337] = Et, t[338] = Dt, t[339] = Ot, t[340] = kt, t[341] = At, t[342] = jt, t[343] = Mt, t[344] = vn, t[345] = yn, t[346] = Pt, t[347] = F, t[348] = je, t[349] = He, t[350] = xn, t[351] = oe, t[352] = Ut, t[353] = Oe, t[354] = Wt, t[355] = ze, t[356] = ne, t[357] = ie, t[358] = S, t[359] = Fn) : Fn = t[359];
    let In;
    return t[360] !== K || t[361] !== Mn || t[362] !== Nn || t[363] !== Fn ? (In = (0, J.jsxs)(`section`, {
        className: K,
        children: [Mn, Nn, Fn]
    }), t[360] = K, t[361] = Mn, t[362] = Nn, t[363] = Fn, t[364] = In) : In = t[364], In
}

function Oi(e, t) {
    return e + Number(t.value ?? 0)
}

function ki(e, t) {
    return e + Number(t.value ?? 0)
}

function Ai(e) {
    return _i(e, 7)
}

function ji(e) {
    return e
}

function Mi(e) {
    let {
        key: t,
        label: n,
        color: r
    } = e;
    return {
        key: t,
        label: n,
        color: r,
        getValue: e => ua(t === `uncached_input_tokens` ? e.premium_usage_values?.uncached_text_input_tokens_by_surface : t === `cached_input_tokens` ? e.premium_usage_values?.cached_text_input_tokens_by_surface : e.premium_usage_values?.text_output_tokens_by_surface)
    }
}

function Ni(e) {
    let {
        key: t
    } = e;
    return t
}

function Pi(e) {
    return {
        ...e,
        models: e.models?.map(Fi)
    }
}

function Fi(e) {
    return {
        ...e,
        credits: e.on_demand_credits ?? 0
    }
}

function Ii(e) {
    return e.premium_usage_values != null
}

function Li() {
    "use forget";
    let e = (0, ta.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, J.jsx)(I, {
        id: `chatgpt.settings.analytics.usage_history.empty_state`,
        defaultMessage: `No plan usage or credits consumed during this period`
    }), e[0] = t) : t = e[0], t
}

function Ri(e) {
    "use forget";
    let t = (0, ta.c)(25),
        {
            consumerCreditUsageEvents: n,
            groupBy: r,
            onAutoSelectThirtyDays: i,
            workspaceUser: a
        } = e,
        o = ue(),
        s = (0, na.useRef)(!1),
        [c] = (0, na.useState)(Vi),
        l;
    t[0] !== c || t[1] !== r ? (l = {
        dateRange: c,
        groupBy: r
    }, t[0] = c, t[1] = r, t[2] = l) : l = t[2];
    let {
        data: u,
        isLoading: d
    } = Fe(l), f;
    t[3] !== c || t[4] !== r || t[5] !== a ? (f = {
        dateRange: c,
        enabled: a,
        groupBy: r
    }, t[3] = c, t[4] = r, t[5] = a, t[6] = f) : f = t[6];
    let {
        data: p,
        isLoading: m
    } = fe(f), h;
    t[7] !== c || t[8] !== r || t[9] !== o || t[10] !== u ? (h = xi(u, o).seriesOrder.length > 0 || (Jn(u, {
        dateRange: c,
        groupBy: r
    })?.seriesOrder.length ?? 0) > 0, t[7] = c, t[8] = r, t[9] = o, t[10] = u, t[11] = h) : h = t[11];
    let g = h,
        _;
    t[12] !== n?.data || t[13] !== c || t[14] !== r || t[15] !== o || t[16] !== p || t[17] !== a ? (_ = a ? xi(p, o, `credits`).seriesOrder.length > 0 || (p?.data.some(zi) ?? !1) : Si({
        dateRange: c,
        events: n?.data,
        groupBy: r,
        intl: o
    }).seriesOrder.length > 0, t[12] = n?.data, t[13] = c, t[14] = r, t[15] = o, t[16] = p, t[17] = a, t[18] = _) : _ = t[18];
    let v = _,
        y = d || a && m,
        b = g || v,
        x, S;
    if (t[19] !== b || t[20] !== i ? (x = () => {
            b && !s.current && (s.current = !0, i())
        }, S = [b, i], t[19] = b, t[20] = i, t[21] = x, t[22] = S) : (x = t[21], S = t[22]), (0, na.useEffect)(x, S), y || b) {
        let e;
        return t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(A, {
            className: `icon-sm`
        }), t[23] = e) : e = t[23], e
    }
    let C;
    return t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, J.jsx)(Li, {}), t[24] = C) : C = t[24], C
}

function zi(e) {
    let {
        models: t
    } = e;
    return t?.some(Bi)
}

function Bi(e) {
    return Number(e.on_demand_credits ?? 0) > 0
}

function Vi() {
    return zr(`30d`)
}

function Hi(e) {
    "use forget";
    let t = (0, ta.c)(10),
        {
            controls: n,
            title: r,
            description: i
        } = e,
        a;
    t[0] === r ? a = t[1] : (a = (0, J.jsx)(`h2`, {
        className: `text-token-text-primary text-lg leading-7 font-normal`,
        children: r
    }), t[0] = r, t[1] = a);
    let o;
    t[2] !== n || t[3] !== a ? (o = (0, J.jsxs)(`div`, {
        className: `flex min-w-0 items-center justify-between gap-2`,
        children: [a, n]
    }), t[2] = n, t[3] = a, t[4] = o) : o = t[4];
    let s;
    t[5] === i ? s = t[6] : (s = (0, J.jsx)(`p`, {
        className: `text-token-text-tertiary text-xs leading-4`,
        children: i
    }), t[5] = i, t[6] = s);
    let c;
    return t[7] !== o || t[8] !== s ? (c = (0, J.jsxs)(`header`, {
        className: `border-token-border-default flex min-h-[60px] w-full flex-col gap-0.5 border-b py-3`,
        children: [o, s]
    }), t[7] = o, t[8] = s, t[9] = c) : c = t[9], c
}

function Ui(e) {
    "use forget";
    let t = (0, ta.c)(2),
        {
            children: n
        } = e,
        r;
    return t[0] === n ? r = t[1] : (r = (0, J.jsx)(Wi, {
        children: (0, J.jsx)(`div`, {
            className: `text-token-text-tertiary flex min-h-9 items-center justify-center text-center text-xs leading-4`,
            children: n
        })
    }), t[0] = n, t[1] = r), r
}

function Wi(e) {
    "use forget";
    let t = (0, ta.c)(2),
        {
            children: n
        } = e,
        r;
    return t[0] === n ? r = t[1] : (r = (0, J.jsx)($t, {
        rootClassName: `border-token-border-light bg-token-bg-elevated-primary w-full rounded-2xl border p-[15px]`,
        variant: `plain`,
        children: (0, J.jsx)(`div`, {
            className: `flex min-w-0 flex-col gap-3`,
            children: n
        })
    }), t[0] = n, t[1] = r), r
}

function Gi(e) {
    "use forget";
    let t = (0, ta.c)(17),
        {
            groupBy: n,
            workspaceUser: r
        } = e,
        i = r !== void 0 && r,
        a = ue(),
        [o, s] = (0, na.useState)(`7d`),
        [c, l] = (0, na.useState)(!1),
        u;
    t[0] === o ? u = t[1] : (u = zr(o), t[0] = o, t[1] = u);
    let d = u,
        f;
    t[2] === a ? f = t[3] : (f = a.formatMessage({
        id: `chatgpt.settings.analytics.tokens.section.title`,
        defaultMessage: `Tokens by model`
    }), t[2] = a, t[3] = f);
    let p, m, h;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
        label: (0, J.jsx)(I, {
            id: `chatgpt.settings.analytics.date_range.seven_days.label`,
            defaultMessage: `7d`
        }),
        value: `7d`
    }, m = e => {
        l(!0), s(e), ai(`tokens`, e)
    }, h = {
        label: (0, J.jsx)(I, {
            id: `chatgpt.settings.analytics.date_range.thirty_days.label`,
            defaultMessage: `30d`
        }),
        value: `30d`
    }, t[4] = p, t[5] = m, t[6] = h) : (p = t[4], m = t[5], h = t[6]);
    let g;
    t[7] !== o || t[8] !== f ? (g = (0, J.jsx)(`div`, {
        className: `flex flex-wrap items-center gap-2`,
        children: (0, J.jsx)(Xe, {
            ...Ur,
            ariaLabel: f,
            leftItem: p,
            onChange: m,
            rightItem: h,
            shouldToggleSelected: !1,
            value: o
        })
    }), t[7] = o, t[8] = f, t[9] = g) : g = t[9];
    let _ = g,
        v;
    return t[10] !== d || t[11] !== n || t[12] !== c || t[13] !== o || t[14] !== _ || t[15] !== i ? (v = i ? (0, J.jsx)(Ki, {
        allowAutoDateRangeFallback: o === `7d` && !c,
        dateRange: d,
        groupBy: n,
        onAutoSelectThirtyDays: () => s(`30d`),
        settingsTimeWindowControls: _
    }) : (0, J.jsx)(Yi, {
        dateRange: d,
        groupBy: n,
        settingsTimeWindowControls: _
    }), t[10] = d, t[11] = n, t[12] = c, t[13] = o, t[14] = _, t[15] = i, t[16] = v) : v = t[16], v
}

function Ki(e) {
    "use forget";
    let t = (0, ta.c)(33),
        {
            allowAutoDateRangeFallback: n,
            dateRange: r,
            groupBy: i,
            onAutoSelectThirtyDays: a,
            settingsTimeWindowControls: o
        } = e,
        s = n !== void 0 && n,
        c;
    t[0] !== r || t[1] !== i ? (c = {
        dateRange: r,
        groupBy: i
    }, t[0] = r, t[1] = i, t[2] = c) : c = t[2];
    let l = fe(c),
        {
            data: u,
            isLoading: d,
            error: f
        } = l,
        [p] = (0, na.useState)(qi),
        m = (0, na.useRef)(!1),
        h;
    t[3] !== s || t[4] !== u || t[5] !== f || t[6] !== d ? (h = s && u != null && !d && f == null && !Ji(u), t[3] = s, t[4] = u, t[5] = f, t[6] = d, t[7] = h) : h = t[7];
    let g = h,
        _;
    t[8] !== p || t[9] !== i || t[10] !== g ? (_ = {
        dateRange: p,
        enabled: g,
        groupBy: i
    }, t[8] = p, t[9] = i, t[10] = g, t[11] = _) : _ = t[11];
    let {
        data: v,
        error: y,
        isLoading: b
    } = fe(_), x;
    t[12] === v ? x = t[13] : (x = Ji(v), t[12] = v, t[13] = x);
    let S = x,
        C, w;
    t[14] !== y || t[15] !== S || t[16] !== b || t[17] !== a || t[18] !== g ? (C = () => {
        g && !b && y == null && S && !m.current && (m.current = !0, a?.())
    }, w = [y, S, b, a, g], t[14] = y, t[15] = S, t[16] = b, t[17] = a, t[18] = g, t[19] = C, t[20] = w) : (C = t[19], w = t[20]), (0, na.useEffect)(C, w);
    let T;
    t[21] === l ? T = t[22] : (T = (0, J.jsx)(hi, {
        chart: `tokens`,
        queries: [l]
    }), t[21] = l, t[22] = T);
    let E = d || g && (b || S),
        D;
    t[23] !== u || t[24] !== r || t[25] !== f || t[26] !== i || t[27] !== o || t[28] !== E ? (D = (0, J.jsx)(Xi, {
        data: u,
        dateRange: r,
        error: f,
        groupBy: i,
        isLoading: E,
        settingsTimeWindowControls: o,
        workspaceUser: !0
    }), t[23] = u, t[24] = r, t[25] = f, t[26] = i, t[27] = o, t[28] = E, t[29] = D) : D = t[29];
    let O;
    return t[30] !== D || t[31] !== T ? (O = (0, J.jsxs)(J.Fragment, {
        children: [T, D]
    }), t[30] = D, t[31] = T, t[32] = O) : O = t[32], O
}

function qi() {
    return zr(`30d`)
}

function Ji(e) {
    return e?.data.some(({
        models: e
    }) => e?.some(e => Number(e.text_total_tokens ?? 0) > 0 || Number(e.uncached_text_input_tokens ?? 0) + Number(e.cached_text_input_tokens ?? 0) + Number(e.text_output_tokens ?? 0) > 0)) ?? !1
}

function Yi(e) {
    "use forget";
    let t = (0, ta.c)(15),
        {
            dateRange: n,
            groupBy: r,
            settingsTimeWindowControls: i
        } = e,
        a;
    t[0] !== n || t[1] !== r ? (a = {
        dateRange: n,
        groupBy: r
    }, t[0] = n, t[1] = r, t[2] = a) : a = t[2];
    let o = Fe(a),
        {
            data: s,
            isLoading: c,
            error: l
        } = o,
        u;
    t[3] === o ? u = t[4] : (u = (0, J.jsx)(hi, {
        chart: `tokens`,
        queries: [o]
    }), t[3] = o, t[4] = u);
    let d;
    t[5] !== s || t[6] !== n || t[7] !== l || t[8] !== r || t[9] !== c || t[10] !== i ? (d = Ji(s) ? (0, J.jsx)(Xi, {
        data: s,
        dateRange: n,
        error: l,
        groupBy: r,
        isLoading: c,
        settingsTimeWindowControls: i,
        workspaceUser: !1
    }) : null, t[5] = s, t[6] = n, t[7] = l, t[8] = r, t[9] = c, t[10] = i, t[11] = d) : d = t[11];
    let f;
    return t[12] !== u || t[13] !== d ? (f = (0, J.jsxs)(J.Fragment, {
        children: [u, d]
    }), t[12] = u, t[13] = d, t[14] = f) : f = t[14], f
}

function Xi(e) {
    "use forget";
    let t = (0, ta.c)(31),
        {
            data: n,
            dateRange: r,
            error: i,
            groupBy: a,
            isLoading: o,
            settingsTimeWindowControls: s,
            workspaceUser: c
        } = e,
        l = ue(),
        u;
    t[0] === l ? u = t[1] : (u = e => l.formatNumber(e, {
        notation: `compact`,
        maximumFractionDigits: 1
    }), t[0] = l, t[1] = u);
    let d = u,
        [f, p] = (0, na.useState)(),
        m;
    t[2] !== n || t[3] !== r || t[4] !== a || t[5] !== l ? (m = Qn(n, {
        dateRange: r,
        groupBy: a,
        hideAutoReviewModel: !0,
        otherLabel: l.formatMessage({
            id: `chatgpt.settings.analytics.product_activity.other.label`,
            defaultMessage: `Other`
        })
    }), t[2] = n, t[3] = r, t[4] = a, t[5] = l, t[6] = m) : m = t[6];
    let h = m,
        g = h?.response,
        _ = !!i,
        v;
    t[7] !== o || t[8] !== h?.seriesLabels || t[9] !== g || t[10] !== _ ? (v = an({
        response: g,
        isLoading: o,
        isError: _,
        seriesLabels: h?.seriesLabels ?? {}
    }), t[7] = o, t[8] = h?.seriesLabels, t[9] = g, t[10] = _, t[11] = v) : v = t[11];
    let {
        chartData: y
    } = v, b;
    if (t[12] !== y || t[13] !== i || t[14] !== d || t[15] !== l || t[16] !== o || t[17] !== h?.seriesOrder || t[18] !== f || t[19] !== s || t[20] !== c) {
        let e = Ci(y) ?? 0,
            n;
        t[22] === h?.seriesOrder ? n = t[23] : (n = h?.seriesOrder ?? [], t[22] = h?.seriesOrder, t[23] = n);
        let r = n,
            a;
        t[24] !== y || t[25] !== f || t[26] !== r ? (a = f != null && r.includes(f) && y.data.some(e => {
            let {
                values: t
            } = e;
            return (t[f] ?? 0) > 0
        }) ? f : void 0, t[24] = y, t[25] = f, t[26] = r, t[27] = a) : a = t[27];
        let u = a,
            m = u == null ? e : y.data.reduce((e, t) => {
                let {
                    values: n
                } = t;
                return e + (n[u] ?? 0)
            }, 0),
            g;
        t[28] === r ? g = t[29] : (g = On(r), t[28] = r, t[29] = g);
        let _ = g,
            v;
        t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, J.jsx)(Hi, {
            title: (0, J.jsx)(I, {
                id: `chatgpt.settings.analytics.tokens.section.title`,
                defaultMessage: `Tokens by model`
            }),
            description: (0, J.jsx)(I, {
                id: `chatgpt.settings.analytics.tokens.section.description`,
                defaultMessage: `Input, output, and cache tokens used by each model.`
            })
        }), t[30] = v) : v = t[30], b = (0, J.jsxs)(`section`, {
            className: `flex flex-col gap-4`,
            children: [v, s, i == null ? e === 0 ? (0, J.jsx)(Ui, {
                children: o ? (0, J.jsx)(A, {
                    className: `icon-sm`
                }) : (0, J.jsx)(I, {
                    id: `chatgpt.settings.analytics.tokens.empty_state`,
                    defaultMessage: `No tokens used during this period`
                })
            }) : (0, J.jsxs)(Wi, {
                children: [(0, J.jsxs)(`div`, {
                    className: `flex flex-col gap-0.5`,
                    children: [(0, J.jsx)(`div`, {
                        className: `text-token-text-primary text-sm leading-5 font-medium`,
                        children: (0, J.jsx)(I, {
                            id: `chatgpt.settings.analytics.tokens.chart.title`,
                            defaultMessage: `Total tokens`
                        })
                    }), (0, J.jsx)(`div`, {
                        className: `text-token-text-primary text-lg leading-[26px] font-semibold tabular-nums`,
                        children: d(m)
                    })]
                }), (0, J.jsx)(vr, {
                    compact: !0,
                    data: o ? `loading` : y,
                    clientEventSource: c ? `whamDailyWorkspaceUserTokenUsageBreakdownTokens` : `whamDailyTokenUsageBreakdownTokens`,
                    forceStack: !0,
                    hideEmptySeries: !0,
                    hideHeader: !0,
                    hideReferenceLine: !0,
                    hideYAxis: !0,
                    legendVariant: `codexAnalytics`,
                    legendOrder: r,
                    selectedSeriesKey: u,
                    onSelectedSeriesChange: e => {
                        p(e), si(`tokens`, e)
                    },
                    stackOrder: r,
                    tooltipMetricOrder: r,
                    seriesColorMap: _,
                    tooltipSummaryFormatter: e => l.formatMessage({
                        id: `chatgpt.settings.analytics.tokens.tooltip.summary`,
                        defaultMessage: `{tokens} tokens`
                    }, {
                        tokens: d(e)
                    }),
                    valueFormatter: d,
                    showHorizontalGrid: !0,
                    visualization: `stackedArea`,
                    xAxisTickAlignment: `balanced`,
                    xAxisTickCount: 7,
                    yAxisTickCount: 4
                })]
            }) : (0, J.jsx)(Ui, {
                children: (0, J.jsx)(I, {
                    id: `wham.usageDashboard.dailyUsage.error.title`,
                    defaultMessage: `We couldn’t load your usage`
                })
            })]
        }), t[12] = y, t[13] = i, t[14] = d, t[15] = l, t[16] = o, t[17] = h?.seriesOrder, t[18] = f, t[19] = s, t[20] = c, t[21] = b
    } else b = t[21];
    return b
}

function Zi(e) {
    "use forget";
    let t = (0, ta.c)(10),
        {
            controls: n,
            label: r,
            value: i
        } = e,
        a;
    t[0] === r ? a = t[1] : (a = (0, J.jsx)(`div`, {
        className: `text-token-text-primary text-base leading-6 font-medium tracking-[-0.01em]`,
        children: r
    }), t[0] = r, t[1] = a);
    let o;
    t[2] === i ? o = t[3] : (o = (0, J.jsx)(`div`, {
        className: `text-token-text-primary mt-1 text-3xl leading-9 font-normal tabular-nums`,
        children: i
    }), t[2] = i, t[3] = o);
    let s;
    t[4] !== a || t[5] !== o ? (s = (0, J.jsxs)(`div`, {
        children: [a, o]
    }), t[4] = a, t[5] = o, t[6] = s) : s = t[6];
    let c;
    return t[7] !== n || t[8] !== s ? (c = (0, J.jsxs)(`div`, {
        className: `flex flex-wrap items-start justify-between gap-3 px-6`,
        children: [s, n]
    }), t[7] = n, t[8] = s, t[9] = c) : c = t[9], c
}

function Qi(e) {
    "use forget";
    let t = (0, ta.c)(16),
        {
            modelOptions: n,
            onModelChange: r,
            selectedModelId: i
        } = e,
        a = ue(),
        o;
    t[0] === a ? o = t[1] : (o = a.formatMessage({
        id: `wham.usageDashboard.workspacePersonal.tokens.modelFilter.aria`,
        defaultMessage: `Filter tokens chart by model`
    }), t[0] = a, t[1] = o);
    let s, c;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, J.jsx)(gt.Value, {}), c = (0, J.jsx)(gt.Icon, {}), t[2] = s, t[3] = c) : (s = t[2], c = t[3]);
    let l;
    t[4] === o ? l = t[5] : (l = (0, J.jsxs)(gt.Trigger, {
        "aria-label": o,
        className: `border-token-border-default text-token-text-primary bg-token-bg-primary flex h-7 items-center gap-2 rounded-full border px-3 text-xs font-medium`,
        children: [s, c]
    }), t[4] = o, t[5] = l);
    let u;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, J.jsx)(gt.Item, {
        value: ra,
        children: (0, J.jsx)(I, {
            id: `wham.usageDashboard.workspacePersonal.tokens.modelFilter.all`,
            defaultMessage: `All models`
        })
    }), t[6] = u) : u = t[6];
    let d;
    t[7] === n ? d = t[8] : (d = n.map($i), t[7] = n, t[8] = d);
    let f;
    t[9] === d ? f = t[10] : (f = (0, J.jsx)(gt.Portal, {
        children: (0, J.jsxs)(gt.Content, {
            className: `min-w-[160px]`,
            children: [u, d]
        })
    }), t[9] = d, t[10] = f);
    let p;
    return t[11] !== r || t[12] !== i || t[13] !== l || t[14] !== f ? (p = (0, J.jsxs)(gt.Root, {
        value: i,
        onValueChange: r,
        children: [l, f]
    }), t[11] = r, t[12] = i, t[13] = l, t[14] = f, t[15] = p) : p = t[15], p
}

function $i(e) {
    return (0, J.jsx)(gt.Item, {
        value: e,
        children: e
    }, e)
}

function ea(e) {
    "use forget";
    let t = (0, ta.c)(10),
        {
            title: n,
            description: r,
            action: i
        } = e,
        a;
    t[0] === n ? a = t[1] : (a = (0, J.jsx)(`h2`, {
        className: `text-token-text-primary text-base font-medium`,
        children: n
    }), t[0] = n, t[1] = a);
    let o;
    t[2] === r ? o = t[3] : (o = r ? (0, J.jsx)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: r
    }) : null, t[2] = r, t[3] = o);
    let s;
    t[4] === i ? s = t[5] : (s = i ? (0, J.jsx)(`div`, {
        className: `pt-1`,
        children: i
    }) : null, t[4] = i, t[5] = s);
    let c;
    return t[6] !== a || t[7] !== o || t[8] !== s ? (c = (0, J.jsxs)(`article`, {
        className: `border-token-border-subtle bg-token-bg-primary flex flex-col gap-3 rounded-3xl border p-6 shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)]`,
        children: [a, o, s]
    }), t[6] = a, t[7] = o, t[8] = s, t[9] = c) : c = t[9], c
}
var ta, na, J, ra, ia, aa, oa, sa, ca, la, ua, da, fa = e((() => {
    ta = z(), j(), E(), tt(), _t(), l(), d(), dt(), i(), ee(), Qt(), xt(), dn(), Yr(), vn(), cr(), Wr(), li(), gi(), Fr(), En(), H(), je(), na = t(ce()), R(), J = P(), ra = `all`, ia = [`desktop_app`, `work_desktop`, `cli`, `vscode`, `web`, `work_web`, `mobile`, `work_mobile`, `agent_identity`, `github`, `github_code_review`, `codex_security_cloud`, `jetbrains`, `slack`, `linear`, `sdk`, `exec`, `unknown`, `other`], aa = [{
        key: `output_tokens`,
        label: `Text output tokens`,
        color: `#F97316`
    }, {
        key: `uncached_input_tokens`,
        label: `Text uncached input tokens`,
        color: `#1D4ED8`
    }, {
        key: `cached_input_tokens`,
        label: `Text cached input tokens`,
        color: `#06B6D4`
    }], oa = [{
        key: `textOutputTokens`,
        label: `Text output tokens`
    }, {
        key: `uncachedTextInputTokens`,
        label: `Text uncached input tokens`
    }, {
        key: `cachedTextInputTokens`,
        label: `Text cached input tokens`
    }], sa = Object.fromEntries(oa.map(({
        key: e,
        label: t
    }) => [e, t])), ca = {
        compactSingleBucketBar: !0,
        forceStack: !0,
        hideHeader: !0,
        hideReferenceLine: !0,
        legendVariant: `codexAnalytics`,
        showHorizontalGrid: !0,
        visualization: `stackedArea`,
        xAxisTickAlignment: `balanced`,
        xAxisTickCount: 7,
        yAxisTickCount: 4
    }, la = {
        ...ca,
        hideYAxis: !0,
        visualization: `bar`
    }, ua = e => Object.values(e ?? {}).reduce((e, t) => e + Number(t), 0), da = e => {
        let t = Math.round(e * 10) / 10;
        return Object.is(t, -0) ? 0 : t
    }
}));

function pa(e) {
    return Math.floor(Number(e ?? 0))
}

function ma(e) {
    return new Intl.NumberFormat(void 0, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        maximumSignificantDigits: 10
    }).format(pa(e))
}

function ha(e) {
    "use forget";
    let t = (0, ga.c)(31),
        {
            creditDetails: n,
            creditPurchaseDiscountPercent: r
        } = e,
        i = r === void 0 ? null : r,
        o = ot() === We.enabled,
        [s, c] = (0, _a.useState)(!1),
        l = n?.balance,
        u;
    t[0] === l ? u = t[1] : (u = pa(l), t[0] = l, t[1] = u);
    let d = u,
        f = n?.balance,
        p;
    t[2] === f ? p = t[3] : (p = ma(f), t[2] = f, t[3] = p);
    let m = p,
        h;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, Y.jsx)(`p`, {
        className: `text-token-text-tertiary text-sm font-medium`,
        children: (0, Y.jsx)(I, {
            id: `wham.usageDashboard.metric.rcreditsRemainingLabel`,
            defaultMessage: `Credits remaining`
        })
    }), t[4] = h) : h = t[4];
    let g;
    t[5] !== o || t[6] !== i || t[7] !== s ? (g = o ? (0, Y.jsxs)(`div`, {
        className: i == null ? `contents` : `flex items-center gap-2`,
        children: [i == null ? null : (0, Y.jsx)(Ke, {
            discountPercent: i
        }), (0, Y.jsx)(a, {
            loading: s,
            onClick: () => {
                _e(ge, {
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: he.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    onCheckoutPresented: () => c(!1),
                    onCustomCheckoutEnd: () => c(!1),
                    onCustomCheckoutStart: () => c(!0)
                })
            },
            size: `small`,
            icon: ze
        })]
    }) : null, t[5] = o, t[6] = i, t[7] = s, t[8] = g) : g = t[8];
    let _;
    t[9] === g ? _ = t[10] : (_ = (0, Y.jsxs)(`div`, {
        className: `flex w-full items-center justify-between`,
        children: [h, g]
    }), t[9] = g, t[10] = _);
    let v;
    t[11] !== n?.unlimited || t[12] !== m ? (v = n?.unlimited ? (0, Y.jsx)(I, {
        id: `wham.usageDashboard.metric.creditsUnlimited`,
        defaultMessage: `Unlimited`
    }) : m, t[11] = n?.unlimited, t[12] = m, t[13] = v) : v = t[13];
    let b;
    t[14] === v ? b = t[15] : (b = (0, Y.jsx)(`div`, {
        className: `text-token-text-primary flex items-baseline gap-1`,
        children: (0, Y.jsx)(`span`, {
            className: `text-2xl font-semibold`,
            children: v
        })
    }), t[14] = v, t[15] = b);
    let x;
    t[16] !== b || t[17] !== _ ? (x = (0, Y.jsx)(`div`, {
        className: `flex items-center justify-between`,
        children: (0, Y.jsxs)(`header`, {
            className: `flex w-full flex-col gap-1`,
            children: [_, b]
        })
    }), t[16] = b, t[17] = _, t[18] = x) : x = t[18];
    let S;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, Y.jsx)(I, {
        id: `wham.usageDashboard.metric.creditsUsageDescription.v2`,
        defaultMessage: `Credits extend usage beyond your plan limits.`
    }), t[19] = S) : S = t[19];
    let C;
    t[20] !== d || t[21] !== n ? (C = d !== 0 && n?.approx_local_messages && n?.approx_cloud_messages && (0, Y.jsx)(y, {
        label: (0, Y.jsxs)(`div`, {
            className: `flex flex-col items-start`,
            children: [(0, Y.jsx)(`p`, {
                children: (0, Y.jsx)(I, {
                    id: `wham.usageDashboard.metric.creditsUsageTooltip`,
                    defaultMessage: `From remaining credits`
                })
            }), (0, Y.jsx)(`p`, {
                children: (0, Y.jsx)(I, {
                    id: `wham.usageDashboard.metric.creditsLocalUsageTooltip`,
                    defaultMessage: `Local: ~{messagesLowerBound}-{messagesUpperBound} messages`,
                    values: {
                        messagesLowerBound: n.approx_local_messages?.[0] ?? 0,
                        messagesUpperBound: n.approx_local_messages?.[1] ?? 0
                    }
                })
            }), (0, Y.jsx)(`p`, {
                children: (0, Y.jsx)(I, {
                    id: `wham.usageDashboard.metric.creditsCloudUsageTooltip`,
                    defaultMessage: `Cloud: ~{messagesLowerBound}-{messagesUpperBound} messages`,
                    values: {
                        messagesLowerBound: n.approx_cloud_messages?.[0] ?? 0,
                        messagesUpperBound: n.approx_cloud_messages?.[1] ?? 0
                    }
                })
            })]
        }),
        children: (0, Y.jsx)(`span`, {
            className: `ms-1 text-base font-normal`,
            children: (0, Y.jsx)(D, {
                className: `inline-block size-4`
            })
        })
    }), t[20] = d, t[21] = n, t[22] = C) : C = t[22];
    let w;
    t[23] === C ? w = t[24] : (w = (0, Y.jsxs)(`span`, {
        children: [S, C]
    }), t[23] = C, t[24] = w);
    let T;
    t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, Y.jsx)(`span`, {
        className: `bg-token-border-subtle mx-2 inline-block h-1 w-1 rounded-full`,
        "aria-hidden": !0
    }), t[25] = T) : T = t[25];
    let E;
    t[26] === w ? E = t[27] : (E = (0, Y.jsxs)(`div`, {
        className: `text-token-text-tertiary flex items-center gap-1 text-xs`,
        children: [w, T]
    }), t[26] = w, t[27] = E);
    let O;
    return t[28] !== x || t[29] !== E ? (O = (0, Y.jsxs)(`article`, {
        className: `border-token-border-subtle bg-token-bg-primary flex flex-col gap-4 rounded-3xl border p-6 shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)]`,
        children: [x, E]
    }), t[28] = x, t[29] = E, t[30] = O) : O = t[30], O
}
var ga, _a, Y, va = e((() => {
    ga = z(), B(), x(), Ie(), j(), Re(), E(), pt(), ve(), nt(), _a = t(ce()), R(), Y = P()
}));

function ya(e) {
    "use forget";
    let t = (0, Ca.c)(67),
        {
            formattedCreditBalance: n
        } = e,
        r = ot() === We.enabled,
        i = ue(),
        [o, s] = (0, wa.useState)(!1),
        {
            data: c,
            isLoading: l,
            error: u,
            refetch: d,
            isFetching: f
        } = De(),
        p;
    t[0] === c?.data ? p = t[1] : (p = c?.data ?? [], t[0] = c?.data, t[1] = p);
    let m = p,
        [h, g] = (0, wa.useState)(1),
        _;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = () => {
        g(1)
    }, t[2] = _) : _ = t[2];
    let v;
    t[3] === m ? v = t[4] : (v = [m], t[3] = m, t[4] = v), (0, wa.useEffect)(_, v);
    let y = Math.max(1, Math.ceil(m.length / Ta)),
        b = Math.min(h, y),
        x = m.length === 0 ? 0 : (b - 1) * Ta,
        S = Math.min(x + Ta, m.length),
        C;
    t[5] !== S || t[6] !== m || t[7] !== x ? (C = m.slice(x, S), t[5] = S, t[6] = m, t[7] = x, t[8] = C) : C = t[8];
    let w;
    t[9] !== S || t[10] !== b || t[11] !== x || t[12] !== C || t[13] !== y ? (w = {
        pageRows: C,
        start: x,
        end: S,
        safePage: b,
        pageCount: y
    }, t[9] = S, t[10] = b, t[11] = x, t[12] = C, t[13] = y, t[14] = w) : w = t[14];
    let {
        pageRows: T,
        start: E,
        end: D,
        safePage: O,
        pageCount: k
    } = w, A;
    t[15] !== c || t[16] !== u || t[17] !== f || t[18] !== d ? (A = u ? (0, X.jsx)(ea, {
        title: (0, X.jsx)(I, {
            id: `wham.usageDashboard.creditHistory.error.title`,
            defaultMessage: `We couldn’t load your credit usage`
        }),
        description: c == null ? (0, X.jsx)(I, {
            id: `wham.usageDashboard.creditHistory.error.body`,
            defaultMessage: `Please try again or contact support if the issue persists.`
        }) : (0, X.jsx)(I, {
            id: `wham.usageDashboard.creditHistory.error.staleBody`,
            defaultMessage: `Showing previously loaded credit usage. This history may be outdated. Try again to refresh it.`
        }),
        action: (0, X.jsx)(a, {
            type: `button`,
            color: `secondary`,
            loading: f,
            onClick: () => {
                d()
            },
            children: (0, X.jsx)(I, {
                id: `wham.usageDashboard.creditHistory.retry`,
                defaultMessage: `Try again`
            })
        })
    }) : null, t[15] = c, t[16] = u, t[17] = f, t[18] = d, t[19] = A) : A = t[19];
    let j = A;
    if (u && c == null) return j;
    let M = !l && m.length === 0,
        N = f && !l,
        ee;
    t[20] !== r || t[21] !== u || t[22] !== n || t[23] !== o ? (ee = u ? null : (0, X.jsxs)(`div`, {
        className: `flex w-full items-center justify-between p-6`,
        children: [(0, X.jsxs)(`div`, {
            className: `flex flex-col items-start gap-2`,
            children: [(0, X.jsx)(`p`, {
                className: `text-token-text-tertiary text-sm font-medium`,
                children: (0, X.jsx)(I, {
                    id: `wham.usageDashboard.creditHistory.title`,
                    defaultMessage: `Credits remaining`
                })
            }), (0, X.jsx)(`p`, {
                className: `text-token-text-secondary text-lg font-medium`,
                children: n
            })]
        }), r ? (0, X.jsx)(a, {
            color: `secondary`,
            loading: o,
            onPointerOver: pe,
            onFocus: pe,
            onClick: () => {
                _e(ge, {
                    checkoutOriginProvenance: {
                        checkoutOriginProductExperience: he.CODEX,
                        checkoutOriginDeliverySurface: `web`
                    },
                    onCheckoutPresented: () => s(!1),
                    onCustomCheckoutEnd: () => s(!1),
                    onCustomCheckoutStart: () => s(!0)
                })
            },
            children: (0, X.jsx)(I, {
                id: `wham.usageDashboard.creditHistory.addMore`,
                defaultMessage: `Add more`
            })
        }) : null]
    }), t[20] = r, t[21] = u, t[22] = n, t[23] = o, t[24] = ee) : ee = t[24];
    let te;
    t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (te = (0, X.jsx)(ct.HeaderCell, {
        className: `ps-4 text-sm`,
        children: (0, X.jsx)(I, {
            id: `wham.usageDashboard.creditHistory.date`,
            defaultMessage: `Date`
        })
    }), t[25] = te) : te = t[25];
    let ne;
    t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = (0, X.jsx)(ct.HeaderCell, {
        className: `ps-4 text-sm`,
        children: (0, X.jsx)(I, {
            id: `wham.usageDashboard.creditHistory.surface`,
            defaultMessage: `Service`
        })
    }), t[26] = ne) : ne = t[26];
    let re;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (re = (0, X.jsxs)(ct.Header, {
        children: [te, ne, (0, X.jsx)(ct.HeaderCell, {
            className: `ps-4 text-sm`,
            children: (0, X.jsx)(I, {
                id: `wham.usageDashboard.creditHistory.credits`,
                defaultMessage: `Credits used`
            })
        })]
    }), t[27] = re) : re = t[27];
    let ie;
    t[28] === l ? ie = t[29] : (ie = l ? Array.from({
        length: Ta
    }).map(Sa) : null, t[28] = l, t[29] = ie);
    let P;
    t[30] === M ? P = t[31] : (P = M ? (0, X.jsx)(ct.Row, {
        children: (0, X.jsx)(ct.Cell, {
            colSpan: 4,
            divClassName: `flex h-16 items-center justify-center text-sm`,
            children: (0, X.jsx)(I, {
                id: `wham.usageDashboard.creditHistory.empty`,
                defaultMessage: `No credit usage recorded yet`
            })
        })
    }) : null, t[30] = M, t[31] = P);
    let ae;
    if (t[32] !== i || t[33] !== T) {
        let e;
        t[35] === i ? e = t[36] : (e = (e, t) => {
            let n = Sn(i, e.product_surface),
                r = i.formatMessage({
                    id: `wham.usageDashboard.creditHistory.creditsValue`,
                    defaultMessage: `{value, number} {value, plural, one {credit} other {credits}}`
                }, {
                    value: e.credit_amount
                }),
                a = i.formatDate(new Date(e.date), {
                    month: `short`,
                    day: `numeric`,
                    year: `numeric`
                });
            return (0, X.jsxs)(ct.Row, {
                children: [(0, X.jsx)(ct.Cell, {
                    divClassName: `flex h-14 items-center ps-4`,
                    children: (0, X.jsx)(`span`, {
                        className: `text-sm`,
                        children: a
                    })
                }), (0, X.jsx)(ct.Cell, {
                    divClassName: `flex h-14 flex-col justify-center ps-4`,
                    children: (0, X.jsx)(`span`, {
                        className: `text-sm font-medium`,
                        children: n
                    })
                }), (0, X.jsx)(ct.Cell, {
                    divClassName: `flex h-14 items-center ps-4`,
                    children: (0, X.jsx)(`span`, {
                        className: `text-sm font-medium`,
                        children: r
                    })
                })]
            }, `${e.usage_id??`usage`}-${e.date}-${t}`)
        }, t[35] = i, t[36] = e), ae = T.map(e), t[32] = i, t[33] = T, t[34] = ae
    } else ae = t[34];
    let F;
    t[37] !== ie || t[38] !== P || t[39] !== ae ? (F = (0, X.jsxs)(ct.Root, {
        className: `overflow-x-auto overflow-y-clip rounded-2xl`,
        disableScroll: !0,
        children: [re, (0, X.jsxs)(ct.Body, {
            children: [ie, P, ae]
        })]
    }), t[37] = ie, t[38] = P, t[39] = ae, t[40] = F) : F = t[40];
    let oe = `border-token-border-light flex items-center justify-between border-t px-4 py-3 text-xs ${N?`opacity-70`:``}`,
        se = m.length === 0 ? 0 : E + 1,
        L;
    t[41] !== D || t[42] !== m.length || t[43] !== se ? (L = (0, X.jsx)(`div`, {
        className: `text-token-text-tertiary`,
        children: (0, X.jsx)(I, {
            id: `wham.usageDashboard.creditHistory.range`,
            defaultMessage: `{from}-{to} of {total} usage events`,
            values: {
                from: se,
                to: D,
                total: m.length
            }
        })
    }), t[41] = D, t[42] = m.length, t[43] = se, t[44] = L) : L = t[44];
    let R = l || O <= 1,
        ce, le;
    t[45] === Symbol.for(`react.memo_cache_sentinel`) ? (ce = () => g(xa), le = (0, X.jsx)(I, {
        id: `wham.usageDashboard.creditHistory.prev`,
        defaultMessage: `Previous`
    }), t[45] = ce, t[46] = le) : (ce = t[45], le = t[46]);
    let z;
    t[47] === R ? z = t[48] : (z = (0, X.jsx)(a, {
        as: `button`,
        size: `small`,
        color: `secondary`,
        disabled: R,
        onClick: ce,
        children: le
    }), t[47] = R, t[48] = z);
    let de = l || O >= k,
        fe, B;
    t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (fe = () => g(ba), B = (0, X.jsx)(I, {
        id: `wham.usageDashboard.creditHistory.next`,
        defaultMessage: `Next`
    }), t[49] = fe, t[50] = B) : (fe = t[49], B = t[50]);
    let V;
    t[51] === de ? V = t[52] : (V = (0, X.jsx)(a, {
        as: `button`,
        size: `small`,
        color: `secondary`,
        disabled: de,
        onClick: fe,
        children: B
    }), t[51] = de, t[52] = V);
    let me;
    t[53] !== z || t[54] !== V ? (me = (0, X.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [z, V]
    }), t[53] = z, t[54] = V, t[55] = me) : me = t[55];
    let H;
    t[56] !== oe || t[57] !== L || t[58] !== me ? (H = (0, X.jsxs)(`div`, {
        className: oe,
        children: [L, me]
    }), t[56] = oe, t[57] = L, t[58] = me, t[59] = H) : H = t[59];
    let ve;
    t[60] !== F || t[61] !== H || t[62] !== ee ? (ve = (0, X.jsxs)(`div`, {
        className: `border-token-border-light bg-token-bg-primary rounded-2xl border shadow-sm`,
        children: [ee, F, H]
    }), t[60] = F, t[61] = H, t[62] = ee, t[63] = ve) : ve = t[63];
    let ye = ve,
        be;
    return t[64] !== j || t[65] !== ye ? (be = (0, X.jsxs)(X.Fragment, {
        children: [j, ye]
    }), t[64] = j, t[65] = ye, t[66] = be) : be = t[66], be
}

function ba(e) {
    return e + 1
}

function xa(e) {
    return Math.max(1, e - 1)
}

function Sa(e, t) {
    return (0, X.jsx)(ct.Row, {
        children: (0, X.jsx)(ct.Cell, {
            colSpan: 4,
            divClassName: `p-4`,
            children: (0, X.jsx)(`div`, {
                className: `bg-token-bg-tertiary border-token-border-light h-6 w-full animate-pulse rounded-md border`
            })
        })
    }, `credit-usage-loading-${t}`)
}
var Ca, wa, X, Ta, Ea = e((() => {
    Ca = z(), B(), x(), Ie(), Ye(), pt(), ve(), En(), fa(), H(), wa = t(ce()), R(), X = P(), Ta = 10
}));

function Da(e) {
    "use forget";
    let t = (0, Oa.c)(13),
        {
            rateLimit: n
        } = e,
        r = ue(),
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, ka.jsx)(I, {
        id: `wham.usageDashboard.section.creditUsageHistory`,
        defaultMessage: `Credits usage history`
    }), t[0] = i) : i = t[0];
    let a;
    t[1] === r ? a = t[2] : (a = r.formatMessage({
        id: `wham.usageDashboard.creditHistory.tooltip`,
        defaultMessage: `Data may be delayed by up to 6 hours.`
    }), t[1] = r, t[2] = a);
    let o;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, ka.jsx)(D, {
        className: `inline-block size-4`
    }), t[3] = o) : o = t[3];
    let s;
    t[4] === a ? s = t[5] : (s = (0, ka.jsxs)(`h2`, {
        className: `flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-100`,
        children: [i, (0, ka.jsx)(y, {
            label: a,
            children: o
        })]
    }), t[4] = a, t[5] = s);
    let c = n?.credits?.balance,
        l;
    t[6] === c ? l = t[7] : (l = ma(c), t[6] = c, t[7] = l);
    let u;
    t[8] === l ? u = t[9] : (u = (0, ka.jsx)(ya, {
        formattedCreditBalance: l
    }), t[8] = l, t[9] = u);
    let d;
    return t[10] !== s || t[11] !== u ? (d = (0, ka.jsxs)(`section`, {
        className: `flex flex-col gap-6 pb-12`,
        children: [s, u]
    }), t[10] = s, t[11] = u, t[12] = d) : d = t[12], d
}
var Oa, ka, Aa = e((() => {
    Oa = z(), j(), E(), va(), Ea(), R(), ka = P()
}));

function ja({
    enabled: e,
    canManagePaymentMethod: t,
    enableAutoTopOffPaymentMethodWarning: n
}) {
    let r = e && t && Se(),
        i = e && n && C(Ma);
    return {
        enabled: e,
        includePaymentMethod: r || i
    }
}
var Ma, Na = e((() => {
    ee(), xe(), Ma = `3713711303`
}));

function Pa() {
    return O(Fa).get(Ia, !1)
}
var Fa, Ia, La = e((() => {
    ee(), Fa = `902959228`, Ia = `show_recommended_treatment`
}));

function Ra(e) {
    "use forget";
    let t = (0, Ga.c)(37),
        {
            enabled: n,
            enableAutoTopOffPaymentMethodWarning: r,
            hasCreditPurchaseDiscountOffer: i,
            autoReloadDiscountPercent: a,
            autoTopOffSettingsQueryOptions: o
        } = e,
        s = n === void 0 || n,
        c = r !== void 0 && r,
        l = i !== void 0 && i,
        u = a === void 0 ? null : a,
        d = w(),
        f;
    t[0] === d ? f = t[1] : (f = d?.isOwnerOfAccount(), t[0] = d, t[1] = f);
    let p = f === !0,
        m;
    t[2] !== o || t[3] !== p || t[4] !== c || t[5] !== s ? (m = o ?? ja({
        enabled: s,
        canManagePaymentMethod: p,
        enableAutoTopOffPaymentMethodWarning: c
    }), t[2] = o, t[3] = p, t[4] = c, t[5] = s, t[6] = m) : m = t[6];
    let h = de(m),
        g;
    t[7] === d?.id ? g = t[8] : (g = () => Qe(d?.id) != null, t[7] = d?.id, t[8] = g);
    let _ = (0, Ka.useSyncExternalStore)(it, g, za),
        v;
    t[9] === d?.id ? v = t[10] : (v = () => {
        rt(d?.id)
    }, t[9] = d?.id, t[10] = v);
    let y = d?.id,
        b;
    t[11] !== _ || t[12] !== y ? (b = [y, _], t[11] = _, t[12] = y, t[13] = b) : b = t[13], (0, Ka.useEffect)(v, b);
    let [x, S] = (0, Ka.useState)(), C = x ?? _, T = (0, Ka.useRef)(!1), E, D;
    if (t[14] !== h.data || t[15] !== s ? (E = () => {
            T.current || !s || h.data == null || (T.current = !0, Ne({
                autoTopOffServerState: h.data,
                analyticsSurface: `wham_usage_dashboard`
            }))
        }, D = [h.data, s], t[14] = h.data, t[15] = s, t[16] = E, t[17] = D) : (E = t[16], D = t[17]), (0, Ka.useEffect)(E, D), h.isLoading && !h.data) {
        let e;
        return t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Z.jsx)(Ba, {
            mode: `loading`
        }), t[18] = e) : e = t[18], e
    }
    if (h.isError && !h.data) {
        let e;
        return t[19] === h ? e = t[20] : (e = (0, Z.jsx)(Ba, {
            mode: `load-error`,
            onRetryLoad: () => {
                h.refetch()
            }
        }), t[19] = h, t[20] = e), e
    }
    if (!h.data) return null;
    let O;
    t[21] !== h.data.isEnabled || t[22] !== l ? (O = !h.data.isEnabled && !l && Pa(), t[21] = h.data.isEnabled, t[22] = l, t[23] = O) : O = t[23];
    let k = O,
        A;
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (A = () => {
        S(!0)
    }, t[24] = A) : A = t[24];
    let j;
    t[25] !== u || t[26] !== h.data || t[27] !== c || t[28] !== k ? (j = (0, Z.jsx)(Ba, {
        mode: `ready`,
        autoTopOffServerState: h.data,
        isPaymentMethodWarningEligible: c,
        showRecommendedTreatment: k,
        autoReloadDiscountPercent: u,
        onOpenSettings: A
    }), t[25] = u, t[26] = h.data, t[27] = c, t[28] = k, t[29] = j) : j = t[29];
    let M;
    t[30] !== h.data || t[31] !== p || t[32] !== C ? (M = C ? (0, Z.jsx)(ye, {
        open: C,
        serverState: h.data,
        analyticsSurface: `wham_usage_dashboard`,
        accountScope: `personal`,
        canManagePaymentMethod: p,
        onOpenChange: S
    }, Ee(h.data)) : null, t[30] = h.data, t[31] = p, t[32] = C, t[33] = M) : M = t[33];
    let N;
    return t[34] !== j || t[35] !== M ? (N = (0, Z.jsxs)(Z.Fragment, {
        children: [j, M]
    }), t[34] = j, t[35] = M, t[36] = N) : N = t[36], N
}

function za() {
    return !1
}

function Ba(e) {
    "use forget";
    let t = (0, Ga.c)(9),
        n;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Z.jsx)(`h2`, {
        className: `text-xl font-semibold text-gray-900 dark:text-gray-100`,
        children: (0, Z.jsx)(I, {
            id: `wham.usageDashboard.autoTopOff.sectionTitle`,
            defaultMessage: `Auto-reload`
        })
    }), t[0] = n) : n = t[0];
    let r;
    return t[1] !== e.autoReloadDiscountPercent || t[2] !== e.autoTopOffServerState || t[3] !== e.isPaymentMethodWarningEligible || t[4] !== e.mode || t[5] !== e.onOpenSettings || t[6] !== e.onRetryLoad || t[7] !== e.showRecommendedTreatment ? (r = (0, Z.jsxs)(`section`, {
        className: `mt-6 flex flex-col gap-6`,
        children: [n, (0, Z.jsx)(`article`, {
            className: `border-token-border-subtle bg-token-bg-primary overflow-hidden rounded-3xl border shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)]`,
            children: e.mode === `loading` ? (0, Z.jsx)(Va, {
                label: (0, Z.jsx)(I, {
                    id: `wham.usageDashboard.autoTopOff.loading`,
                    defaultMessage: `Loading auto reload settings...`
                })
            }) : e.mode === `load-error` ? (0, Z.jsx)(Va, {
                label: (0, Z.jsx)(I, {
                    id: `wham.usageDashboard.autoTopOff.loadError`,
                    defaultMessage: `Could not load auto reload settings.`
                }),
                action: (0, Z.jsx)(a, {
                    type: `button`,
                    color: `secondary`,
                    size: `small`,
                    onClick: e.onRetryLoad,
                    children: (0, Z.jsx)(I, {
                        id: `wham.usageDashboard.autoTopOff.retry`,
                        defaultMessage: `Retry`
                    })
                })
            }) : (0, Z.jsxs)(Z.Fragment, {
                children: [(0, Z.jsx)(Ha, {
                    isEnabled: e.autoTopOffServerState.isEnabled,
                    showRecommendedTreatment: e.showRecommendedTreatment,
                    autoReloadDiscountPercent: e.autoReloadDiscountPercent,
                    onOpenSettings: e.onOpenSettings
                }), (0, Z.jsx)(tn, {
                    autoTopOffServerState: e.autoTopOffServerState,
                    analyticsSurface: `wham_usage_dashboard`,
                    isPaymentMethodWarningEligible: e.isPaymentMethodWarningEligible,
                    className: `mx-6 mb-6`
                })]
            })
        })]
    }), t[1] = e.autoReloadDiscountPercent, t[2] = e.autoTopOffServerState, t[3] = e.isPaymentMethodWarningEligible, t[4] = e.mode, t[5] = e.onOpenSettings, t[6] = e.onRetryLoad, t[7] = e.showRecommendedTreatment, t[8] = r) : r = t[8], r
}

function Va(e) {
    "use forget";
    let t = (0, Ga.c)(7),
        {
            label: n,
            action: r
        } = e,
        i;
    t[0] === n ? i = t[1] : (i = (0, Z.jsx)(`div`, {
        className: `text-token-text-secondary text-sm`,
        children: n
    }), t[0] = n, t[1] = i);
    let a;
    t[2] === r ? a = t[3] : (a = r ? (0, Z.jsx)(`div`, {
        className: `shrink-0`,
        children: r
    }) : null, t[2] = r, t[3] = a);
    let o;
    return t[4] !== i || t[5] !== a ? (o = (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between gap-4 p-6`,
        children: [i, a]
    }), t[4] = i, t[5] = a, t[6] = o) : o = t[6], o
}

function Ha(e) {
    "use forget";
    let t = (0, Ga.c)(18),
        {
            isEnabled: n,
            showRecommendedTreatment: r,
            autoReloadDiscountPercent: i,
            onOpenSettings: o
        } = e,
        s = !n && r,
        c;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Z.jsx)(`span`, {
        children: (0, Z.jsx)(I, {
            id: `wham.usageDashboard.autoTopOff.title`,
            defaultMessage: `Auto-reload credits`
        })
    }), t[0] = c) : c = t[0];
    let l;
    t[1] !== i || t[2] !== n || t[3] !== s ? (l = n ? (0, Z.jsx)(Ua, {}) : i == null ? s ? (0, Z.jsx)(Wa, {}) : null : (0, Z.jsx)(Ke, {
        discountPercent: i
    }), t[1] = i, t[2] = n, t[3] = s, t[4] = l) : l = t[4];
    let u;
    t[5] === l ? u = t[6] : (u = (0, Z.jsxs)(`div`, {
        className: `text-token-text-primary flex items-center gap-2 text-base font-medium`,
        children: [c, l]
    }), t[5] = l, t[6] = u);
    let d;
    t[7] === s ? d = t[8] : (d = (0, Z.jsx)(`div`, {
        className: `text-token-text-secondary mt-1 text-sm`,
        children: s ? (0, Z.jsx)(I, {
            id: `wham.usageDashboard.autoTopOff.description.recommendedTreatment`,
            defaultMessage: `Automatically add credits when your balance runs low`
        }) : (0, Z.jsx)(I, {
            id: `wham.usageDashboard.autoTopOff.description`,
            defaultMessage: `Automatically add credit when you reach your minimum balance.`
        })
    }), t[7] = s, t[8] = d);
    let f;
    t[9] !== u || t[10] !== d ? (f = (0, Z.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [u, d]
    }), t[9] = u, t[10] = d, t[11] = f) : f = t[11];
    let p;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, Z.jsx)(I, {
        id: `wham.usageDashboard.autoTopOff.settings`,
        defaultMessage: `Settings`
    }), t[12] = p) : p = t[12];
    let m;
    t[13] === o ? m = t[14] : (m = (0, Z.jsx)(`div`, {
        className: `shrink-0`,
        children: (0, Z.jsx)(a, {
            type: `button`,
            color: `secondary`,
            size: `small`,
            onClick: o,
            children: p
        })
    }), t[13] = o, t[14] = m);
    let h;
    return t[15] !== f || t[16] !== m ? (h = (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between gap-4 p-6`,
        children: [f, m]
    }), t[15] = f, t[16] = m, t[17] = h) : h = t[17], h
}

function Ua() {
    "use forget";
    let e = (0, Ga.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Z.jsxs)(`span`, {
        className: `inline-flex items-center gap-1 text-sm text-[#0f9f6e] dark:text-[#56d89c]`,
        children: [(0, Z.jsx)(Be, {
            className: `icon-xs shrink-0`
        }), (0, Z.jsx)(I, {
            id: `wham.usageDashboard.autoTopOff.active`,
            defaultMessage: `Active`
        })]
    }), e[0] = t) : t = e[0], t
}

function Wa() {
    "use forget";
    let e = (0, Ga.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Z.jsx)(Je, {
        children: (0, Z.jsx)(I, {
            id: `wham.usageDashboard.autoTopOff.badge.recommended`,
            defaultMessage: `Recommended`
        })
    }), e[0] = t) : t = e[0], t
}
var Ga, Ka, Z, qa = e((() => {
    Ga = z(), Ze(), x(), Ve(), d(), Te(), U(), V(), Na(), Ce(), en(), La(), nt(), Ka = t(ce()), R(), Z = P()
}));

function Ja() {
    "use forget";
    let e = (0, Ya.c)(2),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Xa.jsx)(`div`, {
        className: `bg-token-bg-tertiary text-token-text-primary flex h-9 w-9 items-center justify-center rounded-full`,
        children: (0, Xa.jsx)(Le, {
            className: `icon`,
            "aria-hidden": !0
        })
    }), e[0] = t) : t = e[0];
    let n;
    return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Xa.jsx)(o, {
        className: `shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)]`,
        icon: t,
        title: null,
        content: (0, Xa.jsx)(I, {
            id: `wham.usageDashboard.doubleLimits.title`,
            defaultMessage: `Currently enjoying 2x rate limits until April 2nd.`
        })
    }), e[1] = n) : n = e[1], n
}
var Ya, Xa, Za = e((() => {
    Ya = z(), _(), He(), R(), Xa = P()
}));

function Qa(e) {
    return Math.min(Math.max(Math.round(e), 0), 100)
}

function $a(e) {
    return e <= yo ? `bg-[#f87171]` : `bg-[#22c55e]`
}

function eo(e) {
    let t = Number(e ?? 0);
    return Number.isFinite(t) ? Math.max(t, 0) : 0
}

function to(e, t) {
    return e.formatNumber(t, {
        minimumFractionDigits: 0,
        maximumFractionDigits: t >= 10 ? 0 : 2
    })
}

function no(e, t, n, r) {
    let i = Qa(100 - (t.used_percent ?? 0));
    return {
        id: n,
        label: r,
        remainingPercent: i,
        resetLabel: ro(e, t.reset_after_seconds),
        barColorClassName: $a(i)
    }
}

function ro(e, t) {
    let n = h(e, t);
    return e.formatMessage({
        id: `wham.usageDashboard.metric.resetsAt`,
        defaultMessage: `Resets {label}`
    }, {
        label: n
    })
}

function io(e, t) {
    return ro(e, Math.max(Math.ceil(t - Date.now() / 1e3), 0))
}

function ao(e, t) {
    let n = e.limit_window_seconds;
    return oo(n, go) ? t.formatMessage({
        id: `wham.usageDashboard.metric.window.5hour`,
        defaultMessage: `5 hour usage limit`
    }) : oo(n, vo) ? t.formatMessage({
        id: `wham.usageDashboard.metric.window.monthly`,
        defaultMessage: `Monthly usage limit`
    }) : oo(n, ho) ? t.formatMessage({
        id: `wham.usageDashboard.metric.window.weekly`,
        defaultMessage: `Weekly usage limit`
    }) : oo(n, _o) ? t.formatMessage({
        id: `wham.usageDashboard.metric.window.daily`,
        defaultMessage: `Daily usage limit`
    }) : t.formatMessage({
        id: `wham.usageDashboard.metric.window.generic`,
        defaultMessage: `Usage limit`
    })
}

function oo(e, t) {
    return !Number.isFinite(e) || e <= 0 ? !1 : Math.abs(e - t) <= t * .05
}

function so(e) {
    "use forget";
    let t = (0, mo.c)(51),
        {
            rateLimit: n,
            codeReviewRateLimit: r,
            creditDetails: i,
            individualLimitDetails: a,
            showCreditMetricCard: o,
            creditPurchaseDiscountPercent: s
        } = e,
        c = s === void 0 ? null : s,
        l = ue(),
        u = Ge(a?.source) ? a : null,
        d = n?.primary_window ?? null,
        f = n?.secondary_window ?? null,
        p;
    if (t[0] !== l || t[1] !== d || t[2] !== f) {
        if (p = [], d) {
            let e;
            t[4] !== l || t[5] !== d ? (e = no(l, d, `quota-primary`, ao(d, l)), t[4] = l, t[5] = d, t[6] = e) : e = t[6], p.push(e)
        }
        if (f) {
            let e;
            t[7] !== l || t[8] !== f ? (e = no(l, f, `quota-secondary`, ao(f, l)), t[7] = l, t[8] = f, t[9] = e) : e = t[9], p.push(e)
        }
        t[0] = l, t[1] = d, t[2] = f, t[3] = p
    } else p = t[3];
    let m;
    if (t[10] !== r || t[11] !== l) {
        let e = l.formatMessage({
            id: `wham.usageDashboard.metric.window.codeReview`,
            defaultMessage: `Code review`
        });
        m = r?.primary_window ? no(l, r.primary_window, `code-review-primary`, e) : null, t[10] = r, t[11] = l, t[12] = m
    } else m = t[12];
    let h = m;
    if (!(p.length > 0 || h != null || o || u != null)) return null;
    let g;
    t[13] === l ? g = t[14] : (g = l.formatMessage({
        id: `wham.usageDashboard.section.quota`,
        defaultMessage: `Balance`
    }), t[13] = l, t[14] = g);
    let _;
    t[15] === g ? _ = t[16] : (_ = (0, Q.jsx)(`h2`, {
        className: `text-xl font-semibold text-gray-900 dark:text-gray-100`,
        children: g
    }), t[15] = g, t[16] = _);
    let v;
    t[17] === l ? v = t[18] : (v = l.formatMessage({
        id: `wham.usageDashboard.section.quota.description.codexAndWork`,
        defaultMessage: `Codex and Work share the same usage limit.`
    }), t[17] = l, t[18] = v);
    let b;
    t[19] === v ? b = t[20] : (b = (0, Q.jsx)(`span`, {
        children: v
    }), t[19] = v, t[20] = b);
    let x;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, Q.jsx)(I, {
        id: `wham.usageDashboard.section.quota.description.tooltip.codexAndWork`,
        defaultMessage: `<codexUsageLimits>Codex and Work usage limits</codexUsageLimits> are shared across Codex, ChatGPT Work, <chatGPTForExcel>ChatGPT for Excel</chatGPTForExcel>, and Workspace Agents. Chat conversations aren't included.`,
        values: {
            codexUsageLimits: uo,
            chatGPTForExcel: lo
        }
    }), t[21] = x) : x = t[21];
    let S;
    t[22] === l ? S = t[23] : (S = l.formatMessage({
        id: `wham.usageDashboard.section.quota.description.tooltipTrigger.codexAndWork`,
        defaultMessage: `More about Codex and Work usage limits`
    }), t[22] = l, t[23] = S);
    let C;
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, Q.jsx)(D, {
        className: `inline-block size-4`
    }), t[24] = C) : C = t[24];
    let w;
    t[25] === S ? w = t[26] : (w = (0, Q.jsx)(y, {
        label: x,
        labelTextAlign: `left`,
        interactive: !0,
        wide: !0,
        children: (0, Q.jsx)(`button`, {
            type: `button`,
            "aria-label": S,
            className: `text-token-text-tertiary flex`,
            children: C
        })
    }), t[25] = S, t[26] = w);
    let T;
    t[27] !== w || t[28] !== b ? (T = (0, Q.jsxs)(`p`, {
        className: `text-token-text-secondary flex items-center gap-1 text-sm`,
        children: [b, w]
    }), t[27] = w, t[28] = b, t[29] = T) : T = t[29];
    let E;
    t[30] !== T || t[31] !== _ ? (E = (0, Q.jsxs)(`header`, {
        className: `flex flex-col gap-1`,
        children: [_, T]
    }), t[30] = T, t[31] = _, t[32] = E) : E = t[32];
    let O;
    t[33] === p ? O = t[34] : (O = p.map(co), t[33] = p, t[34] = O);
    let k;
    t[35] === h ? k = t[36] : (k = h ? (0, Q.jsx)(fo, {
        metric: h
    }, h.id) : null, t[35] = h, t[36] = k);
    let A;
    t[37] !== i || t[38] !== c || t[39] !== o ? (A = o && (0, Q.jsx)(ha, {
        creditDetails: i,
        creditPurchaseDiscountPercent: c
    }), t[37] = i, t[38] = c, t[39] = o, t[40] = A) : A = t[40];
    let j;
    t[41] === u ? j = t[42] : (j = u == null ? null : (0, Q.jsx)(po, {
        individualLimitDetails: u
    }), t[41] = u, t[42] = j);
    let M;
    t[43] !== O || t[44] !== k || t[45] !== A || t[46] !== j ? (M = (0, Q.jsxs)(`div`, {
        className: `grid gap-4 md:grid-cols-2`,
        children: [O, k, A, j]
    }), t[43] = O, t[44] = k, t[45] = A, t[46] = j, t[47] = M) : M = t[47];
    let N;
    return t[48] !== E || t[49] !== M ? (N = (0, Q.jsxs)(`section`, {
        className: `mt-6 flex flex-col gap-6`,
        children: [E, M]
    }), t[48] = E, t[49] = M, t[50] = N) : N = t[50], N
}

function co(e) {
    return (0, Q.jsx)(fo, {
        metric: e
    }, e.id)
}

function lo(e) {
    return (0, Q.jsx)(`a`, {
        href: `https://help.openai.com/en/articles/20001063`,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `underline`,
        children: e
    })
}

function uo(e) {
    return (0, Q.jsx)(`a`, {
        href: `https://developers.openai.com/codex/pricing#what-are-the-usage-limits-for-my-plan`,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `underline`,
        children: e
    })
}

function fo(e) {
    "use forget";
    let t = (0, mo.c)(32),
        {
            metric: n
        } = e,
        r = ue(),
        {
            label: i,
            remainingPercent: a,
            resetLabel: o,
            barColorClassName: s
        } = n,
        c;
    t[0] === a ? c = t[1] : (c = Math.round(a), t[0] = a, t[1] = c);
    let l = Math.min(Math.max(c, 0), 100),
        u;
    t[2] !== r || t[3] !== l ? (u = r.formatNumber(l / 100, {
        style: `percent`,
        maximumFractionDigits: 0
    }), t[2] = r, t[3] = l, t[4] = u) : u = t[4];
    let d = u,
        f;
    t[5] === r ? f = t[6] : (f = r.formatMessage({
        id: `wham.usageDashboard.metric.remainingLabel`,
        defaultMessage: `remaining`
    }), t[5] = r, t[6] = f);
    let p = f,
        m;
    t[7] === i ? m = t[8] : (m = (0, Q.jsx)(`p`, {
        className: `text-token-text-tertiary text-sm font-medium`,
        children: i
    }), t[7] = i, t[8] = m);
    let h;
    t[9] === d ? h = t[10] : (h = (0, Q.jsx)(`span`, {
        className: `text-2xl font-semibold`,
        children: d
    }), t[9] = d, t[10] = h);
    let g;
    t[11] === p ? g = t[12] : (g = (0, Q.jsxs)(`span`, {
        className: `text-base font-normal`,
        children: [` `, p, ` `]
    }), t[11] = p, t[12] = g);
    let _;
    t[13] === n.tooltip ? _ = t[14] : (_ = n.tooltip ? (0, Q.jsx)(y, {
        label: n.tooltip,
        children: (0, Q.jsx)(`span`, {
            className: `text-base font-normal`,
            children: (0, Q.jsx)(D, {
                className: `inline-block size-4`
            })
        })
    }) : null, t[13] = n.tooltip, t[14] = _);
    let v;
    t[15] !== h || t[16] !== g || t[17] !== _ ? (v = (0, Q.jsxs)(`div`, {
        className: `text-token-text-primary flex items-baseline gap-1`,
        children: [h, g, _]
    }), t[15] = h, t[16] = g, t[17] = _, t[18] = v) : v = t[18];
    let b;
    t[19] !== m || t[20] !== v ? (b = (0, Q.jsxs)(`header`, {
        className: `flex flex-col gap-1`,
        children: [m, v]
    }), t[19] = m, t[20] = v, t[21] = b) : b = t[21];
    let x = `${s} rounded-full${l===0?` hidden`:``}`,
        S;
    t[22] !== l || t[23] !== x ? (S = (0, Q.jsx)(ke, {
        percentage: l,
        height: 12,
        backgroundClassName: `rounded-full bg-[#ebebf0]`,
        barClassName: x
    }), t[22] = l, t[23] = x, t[24] = S) : S = t[24];
    let C;
    t[25] !== l || t[26] !== o ? (C = l < 100 ? (0, Q.jsxs)(`div`, {
        className: `text-token-text-tertiary flex items-center text-xs`,
        children: [(0, Q.jsx)(`span`, {
            children: o
        }), (0, Q.jsx)(`span`, {
            className: `bg-token-border-subtle mx-2 inline-block h-1 w-1 rounded-full`,
            "aria-hidden": !0
        })]
    }) : null, t[25] = l, t[26] = o, t[27] = C) : C = t[27];
    let w;
    return t[28] !== S || t[29] !== C || t[30] !== b ? (w = (0, Q.jsxs)(`article`, {
        className: `border-token-border-subtle bg-token-bg-primary flex flex-col gap-4 rounded-3xl border p-6 shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)]`,
        children: [b, S, C]
    }), t[28] = S, t[29] = C, t[30] = b, t[31] = w) : w = t[31], w
}

function po(e) {
    "use forget";
    let t = (0, mo.c)(53),
        {
            individualLimitDetails: n
        } = e,
        r = ue(),
        i, a, o, s, c, l, u, d, f, p;
    if (t[0] !== n.limit || t[1] !== n.remaining_percent || t[2] !== n.reset_at || t[3] !== n.used || t[4] !== n.used_percent || t[5] !== r) {
        let e = eo(n.used),
            m = eo(n.limit);
        a = Qa(n.remaining_percent ?? 100 - (n.used_percent ?? 0));
        let h = r.formatNumber(a / 100, {
                style: `percent`,
                maximumFractionDigits: 0
            }),
            g;
        t[16] === r ? g = t[17] : (g = r.formatMessage({
            id: `wham.usageDashboard.metric.workspaceMonthlyCreditLimit`,
            defaultMessage: `Workspace monthly credit limit`
        }), t[16] = r, t[17] = g);
        let _ = g,
            v;
        t[18] === r ? v = t[19] : (v = r.formatMessage({
            id: `wham.usageDashboard.metric.remainingLabel`,
            defaultMessage: `remaining`
        }), t[18] = r, t[19] = v);
        let y = v;
        p = r.formatMessage({
            id: `wham.usageDashboard.metric.creditLimitUsage`,
            defaultMessage: `{used} of {limit} credits used`
        }, {
            used: to(r, e),
            limit: to(r, m)
        });
        let b = n.reset_at ?? 0,
            x;
        t[20] !== r || t[21] !== b ? (x = io(r, b), t[20] = r, t[21] = b, t[22] = x) : x = t[22], o = x, d = `border-token-border-subtle bg-token-bg-primary flex flex-col gap-4 rounded-3xl border p-6 shadow-[0_16px_32px_-24px_rgba(15,23,42,0.25)]`;
        let S;
        t[23] === _ ? S = t[24] : (S = (0, Q.jsx)(`p`, {
            className: `text-token-text-tertiary text-sm font-medium`,
            children: _
        }), t[23] = _, t[24] = S);
        let C;
        t[25] === h ? C = t[26] : (C = (0, Q.jsx)(`span`, {
            className: `text-2xl font-semibold`,
            children: h
        }), t[25] = h, t[26] = C);
        let w;
        t[27] === y ? w = t[28] : (w = (0, Q.jsxs)(`span`, {
            className: `text-base font-normal`,
            children: [` `, y, ` `]
        }), t[27] = y, t[28] = w);
        let T;
        t[29] !== C || t[30] !== w ? (T = (0, Q.jsxs)(`div`, {
            className: `text-token-text-primary flex items-baseline gap-1`,
            children: [C, w]
        }), t[29] = C, t[30] = w, t[31] = T) : T = t[31], t[32] !== S || t[33] !== T ? (f = (0, Q.jsxs)(`header`, {
            className: `flex flex-col gap-1`,
            children: [S, T]
        }), t[32] = S, t[33] = T, t[34] = f) : f = t[34], i = ke, c = a, l = 12, u = `rounded-full bg-[#ebebf0]`, s = $a(a), t[0] = n.limit, t[1] = n.remaining_percent, t[2] = n.reset_at, t[3] = n.used, t[4] = n.used_percent, t[5] = r, t[6] = i, t[7] = a, t[8] = o, t[9] = s, t[10] = c, t[11] = l, t[12] = u, t[13] = d, t[14] = f, t[15] = p
    } else i = t[6], a = t[7], o = t[8], s = t[9], c = t[10], l = t[11], u = t[12], d = t[13], f = t[14], p = t[15];
    let m = `${s} rounded-full${a===0?` hidden`:``}`,
        h;
    t[35] !== i || t[36] !== c || t[37] !== l || t[38] !== u || t[39] !== m ? (h = (0, Q.jsx)(i, {
        percentage: c,
        height: l,
        backgroundClassName: u,
        barClassName: m
    }), t[35] = i, t[36] = c, t[37] = l, t[38] = u, t[39] = m, t[40] = h) : h = t[40];
    let g;
    t[41] === o ? g = t[42] : (g = (0, Q.jsx)(`span`, {
        children: o
    }), t[41] = o, t[42] = g);
    let _;
    t[43] === p ? _ = t[44] : (_ = (0, Q.jsx)(`span`, {
        className: `text-end`,
        children: p
    }), t[43] = p, t[44] = _);
    let v;
    t[45] !== _ || t[46] !== g ? (v = (0, Q.jsxs)(`div`, {
        className: `text-token-text-tertiary flex items-center justify-between gap-3 text-xs`,
        children: [g, _]
    }), t[45] = _, t[46] = g, t[47] = v) : v = t[47];
    let y;
    return t[48] !== v || t[49] !== d || t[50] !== f || t[51] !== h ? (y = (0, Q.jsxs)(`article`, {
        className: d,
        children: [f, h, v]
    }), t[48] = v, t[49] = d, t[50] = f, t[51] = h, t[52] = y) : y = t[52], y
}
var mo, Q, ho, go, _o, vo, yo, bo = e((() => {
    mo = z(), R(), j(), E(), Me(), va(), at(), N(), Q = P(), ho = 604800, go = 18e3, _o = 24 * 3600, vo = 720 * 60 * 60, yo = 30
}));

function xo() {
    "use forget";
    let e = (0, To.c)(25),
        t = ie(),
        n = oe(),
        r;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = {
        poll: !0
    }, e[0] = r) : r = e[0];
    let {
        data: i,
        isLoading: a,
        error: o,
        refetch: s
    } = Oe(r), c = ot(), l = c === We.enabled || i?.credits?.balance != null, u;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (u = [], e[1] = u) : u = e[1], (0, Eo.useEffect)(So, u);
    let d, f;
    e[2] !== c || e[3] !== t.hash || e[4] !== t.pathname || e[5] !== t.search || e[6] !== t.state || e[7] !== n ? (d = () => {
        let e = new URLSearchParams(t.search),
            r = e.get(`credit_modal`) === `true` && c === We.enabled,
            i = e.get(`upgrade_modal`) === `true`,
            a = () => {
                let e = new URLSearchParams(t.search);
                e.delete(`credit_modal`), e.delete(`credits_modal`), e.delete(`upgrade_modal`);
                let r = e.toString();
                return n({
                    pathname: t.pathname,
                    search: r ? `?${r}` : ``,
                    hash: t.hash
                }, {
                    replace: !0,
                    state: t.state
                })
            };
        r ? _e(ge, {
            clearCreditModalDeepLink: !0,
            creditPurchaseButtonClickLogged: !0,
            onClose: async () => {
                await a()
            }
        }) : e.get(`credit_modal`) === `true` && c !== We.loading ? a() : i && (k({
            openModalLocation: Do
        }) ? we({
            navigate: n,
            openModalLocation: Do
        }) : a())
    }, f = [c, t.hash, t.pathname, t.search, t.state, n], e[2] = c, e[3] = t.hash, e[4] = t.pathname, e[5] = t.search, e[6] = t.state, e[7] = n, e[8] = d, e[9] = f) : (d = e[8], f = e[9]), (0, Eo.useEffect)(d, f);
    let p;
    e[10] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, $.jsx)(`header`, {
        className: `border-token-border-heavy flex flex-col border-b`,
        children: (0, $.jsx)(`h1`, {
            className: `text-token-text-primary py-2 text-xl leading-7 font-medium`,
            children: (0, $.jsx)(I, {
                id: `wham.usageDashboard.title`,
                defaultMessage: `Usage dashboard`
            })
        })
    }), e[10] = p) : p = e[10];
    let m;
    e[11] === s ? m = e[12] : (m = async () => {
        await s()
    }, e[11] = s, e[12] = m);
    let h;
    e[13] !== a || e[14] !== i || e[15] !== o || e[16] !== m ? (h = (0, $.jsx)(wo, {
        rateLimitData: i,
        isRateLimitLoading: a,
        rateLimitError: o,
        onRefreshUsage: m
    }), e[13] = a, e[14] = i, e[15] = o, e[16] = m, e[17] = h) : h = e[17];
    let g;
    e[18] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, $.jsx)(`div`, {
        className: `flex flex-col gap-10`,
        children: (0, $.jsx)(Ti, {})
    }), e[18] = g) : g = e[18];
    let _;
    e[19] !== l || e[20] !== i ? (_ = l && (0, $.jsx)(Da, {
        rateLimit: i
    }), e[19] = l, e[20] = i, e[21] = _) : _ = e[21];
    let v;
    return e[22] !== h || e[23] !== _ ? (v = (0, $.jsx)(yt, {
        topPadding: !0,
        children: (0, $.jsxs)(`div`, {
            className: `mx-auto flex h-full max-w-screen-xl flex-1 flex-col gap-10 ps-4 pe-12 pb-16`,
            children: [p, (0, $.jsxs)(`div`, {
                className: `flex flex-col gap-10`,
                children: [h, g, _]
            })]
        })
    }), e[22] = h, e[23] = _, e[24] = v) : v = e[24], v
}

function So() {
    u.removeItem(n.CreditCheckoutRedirectPath)
}

function Co(e) {
    "use forget";
    let t = (0, To.c)(12),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let {
        className: r,
        enableAutoTopOffPaymentMethodWarning: i
    } = n, a = i !== void 0 && i, o;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = {
        poll: !0
    }, t[2] = o) : o = t[2];
    let {
        data: s,
        isLoading: c,
        error: l,
        refetch: u
    } = Oe(o), d;
    t[3] === u ? d = t[4] : (d = async () => {
        await u()
    }, t[3] = u, t[4] = d);
    let f;
    return t[5] !== r || t[6] !== a || t[7] !== c || t[8] !== s || t[9] !== l || t[10] !== d ? (f = (0, $.jsx)(wo, {
        rateLimitData: s,
        isRateLimitLoading: c,
        rateLimitError: l,
        onRefreshUsage: d,
        className: r,
        enableAutoTopOffPaymentMethodWarning: a
    }), t[5] = r, t[6] = a, t[7] = c, t[8] = s, t[9] = l, t[10] = d, t[11] = f) : f = t[11], f
}

function wo(e) {
    "use forget";
    let t = (0, To.c)(81),
        {
            rateLimitData: n,
            isRateLimitLoading: r,
            rateLimitError: i,
            onRefreshUsage: o,
            className: c,
            enableAutoTopOffPaymentMethodWarning: l
        } = e,
        u = l !== void 0 && l,
        d = qe(),
        f = w(),
        p = ot(),
        m = $e(),
        h = lt(),
        g;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (g = C(`2451719447`), t[0] = g) : g = t[0];
    let _ = g,
        y = p === We.enabled,
        b = f?.id ?? `account`,
        x;
    t[1] !== y || t[2] !== f ? (x = y && f?.isWorkspaceAccount() === !1, t[1] = y, t[2] = f, t[3] = x) : x = t[3];
    let T;
    t[4] !== b || t[5] !== x ? (T = be({
        accountKey: b,
        enabled: x
    }), t[4] = b, t[5] = x, t[6] = T) : T = t[6];
    let E = se(T),
        D = E.data?.one_time.tiers,
        O;
    t[7] === D ? O = t[8] : (O = mt(D), t[7] = D, t[8] = O);
    let k = O,
        j = E.data?.auto_reload?.tiers,
        M;
    t[9] === j ? M = t[10] : (M = mt(j), t[9] = j, t[10] = M);
    let N = M,
        ee = d || h || m,
        te = n?.rate_limit ?? null,
        ne = n?.rate_limit_reset_credits,
        ie = ne?.available_count ?? 0,
        P = te?.primary_window?.limit_window_seconds,
        ae = te?.secondary_window?.limit_window_seconds,
        F;
    t[11] !== P || t[12] !== ae ? (F = [P, ae], t[11] = P, t[12] = ae, t[13] = F) : F = t[13];
    let oe = F,
        L = oe.includes(18e3) && oe.includes(604800),
        R = n?.code_review_rate_limit ?? null,
        ce = n?.credits ?? null,
        le = y || ce?.balance != null,
        z = (n?.spend_control ?? null)?.individual_limit ?? null,
        ue;
    t[14] !== h || t[15] !== z ? (ue = ht({
        individualLimit: z,
        isSelfServeBusiness: h
    }), t[14] = h, t[15] = z, t[16] = ue) : ue = t[16];
    let fe = ue,
        B;
    t[17] !== f || t[18] !== n ? (B = f?.planType === re.ENT26 && f.id === n?.account_id && v(n), t[17] = f, t[18] = n, t[19] = B) : B = t[19];
    let V = B,
        pe;
    t[20] !== n || t[21] !== V ? (pe = S(n) || V, t[20] = n, t[21] = V, t[22] = pe) : pe = t[22];
    let me = pe,
        H;
    t[23] === n ? H = t[24] : (H = !!n && s(n), t[23] = n, t[24] = H);
    let he = H,
        ge = te != null || fe != null,
        _e = y && ge,
        ve;
    t[25] === f ? ve = t[26] : (ve = f?.isOwnerOfAccount(), t[25] = f, t[26] = ve);
    let ye = ve === !0,
        xe;
    t[27] !== u || t[28] !== _e || t[29] !== ye ? (xe = ja({
        enabled: _e,
        canManagePaymentMethod: ye,
        enableAutoTopOffPaymentMethodWarning: u
    }), t[27] = u, t[28] = _e, t[29] = ye, t[30] = xe) : xe = t[30];
    let U = xe,
        {
            data: Se
        } = de(U),
        Ce = N != null && Se?.isEnabled === !1,
        we = !!(n && !ge && !V && ne?.available_count === 0),
        Te = !!(i && n == null),
        Ee;
    if (r && n == null) {
        let e;
        t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(A, {
            className: `icon me-2`
        }), t[31] = e) : e = t[31];
        let n;
        t[32] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsxs)(`div`, {
            className: `flex w-full items-center justify-center py-16`,
            children: [e, (0, $.jsx)(`span`, {
                className: `text-token-text-secondary text-sm font-medium`,
                children: (0, $.jsx)(I, {
                    id: `wham.usageDashboard.loading`,
                    defaultMessage: `Loading usage data`
                })
            })]
        }), t[32] = n) : n = t[32], Ee = n
    } else if (we) return null;
    else if (Te) {
        let e, n;
        t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(I, {
            id: `wham.usageDashboard.error.title`,
            defaultMessage: `We couldn’t load your usage data`
        }), n = (0, $.jsx)(I, {
            id: `wham.usageDashboard.error.body`,
            defaultMessage: `Please try again. If the issue continues, contact support.`
        }), t[33] = e, t[34] = n) : (e = t[33], n = t[34]);
        let r;
        t[35] === o ? r = t[36] : (r = () => {
            o()
        }, t[35] = o, t[36] = r);
        let i;
        t[37] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, $.jsx)(I, {
            id: `wham.usageDashboard.error.button.retry`,
            defaultMessage: `Try again`
        }), t[37] = i) : i = t[37];
        let s;
        t[38] === r ? s = t[39] : (s = (0, $.jsx)(ea, {
            title: e,
            description: n,
            action: (0, $.jsx)(a, {
                type: `button`,
                color: `secondary`,
                onClick: r,
                children: i
            })
        }), t[38] = r, t[39] = s), Ee = s
    } else {
        let e;
        t[40] === ee ? e = t[41] : (e = ee && _ && (0, $.jsx)(Ja, {}), t[40] = ee, t[41] = e);
        let r;
        t[42] !== n || t[43] !== me ? (r = me && n && (0, $.jsx)(zt, {
            rateLimit: n
        }), t[42] = n, t[43] = me, t[44] = r) : r = t[44];
        let i;
        t[45] !== n || t[46] !== he || t[47] !== me ? (i = he && !me && n && (0, $.jsx)(Vt, {
            rateLimit: n
        }), t[45] = n, t[46] = he, t[47] = me, t[48] = i) : i = t[48];
        let a;
        t[49] !== le || t[50] !== R || t[51] !== k || t[52] !== ce || t[53] !== ge || t[54] !== fe || t[55] !== te || t[56] !== Ce ? (a = ge ? (0, $.jsx)(so, {
            rateLimit: te,
            codeReviewRateLimit: R,
            creditDetails: ce,
            individualLimitDetails: fe,
            showCreditMetricCard: le,
            creditPurchaseDiscountPercent: Ce ? null : k
        }) : null, t[49] = le, t[50] = R, t[51] = k, t[52] = ce, t[53] = ge, t[54] = fe, t[55] = te, t[56] = Ce, t[57] = a) : a = t[57];
        let s = f?.id,
            c;
        t[58] !== ie || t[59] !== o || t[60] !== s || t[61] !== L ? (c = (0, $.jsx)(ft, {
            initialAvailableCount: ie,
            onRefreshUsage: o,
            redesigned: !0,
            usesWeeklyAndFiveHourLimits: L
        }, s), t[58] = ie, t[59] = o, t[60] = s, t[61] = L, t[62] = c) : c = t[62];
        let l;
        t[63] !== N || t[64] !== U || t[65] !== y || t[66] !== E.isLoading || t[67] !== k || t[68] !== u || t[69] !== ge ? (l = y && ge ? (0, $.jsx)(Ra, {
            autoReloadDiscountPercent: N,
            autoTopOffSettingsQueryOptions: U,
            hasCreditPurchaseDiscountOffer: E.isLoading || k != null,
            enableAutoTopOffPaymentMethodWarning: u
        }) : null, t[63] = N, t[64] = U, t[65] = y, t[66] = E.isLoading, t[67] = k, t[68] = u, t[69] = ge, t[70] = l) : l = t[70];
        let d;
        t[71] !== e || t[72] !== r || t[73] !== i || t[74] !== a || t[75] !== c || t[76] !== l ? (d = (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [e, r, i, a, c, l]
        }), t[71] = e, t[72] = r, t[73] = i, t[74] = a, t[75] = c, t[76] = l, t[77] = d) : d = t[77], Ee = d
    }
    if (!c) return Ee;
    let De;
    return t[78] !== c || t[79] !== Ee ? (De = (0, $.jsx)(`div`, {
        className: c,
        children: Ee
    }), t[78] = c, t[79] = Ee, t[80] = De) : De = t[80], De
}
var To, Eo, $, Do, Oo = e((() => {
    To = z(), M(), x(), Ie(), m(), Ae(), Ue(), l(), d(), r(), ee(), vt(), et(), pt(), qa(), U(), Na(), ve(), st(), Aa(), Za(), bo(), fa(), at(), Bt(), N(), H(), le(), Eo = t(ce()), R(), L(), $ = P(), Do = c.WhamUsageDashboardUpgradeModal
}));
export {
    kn as $, Br as A, hr as B, Qr as C, Ur as D, Yr as E, vr as F, ir as G, dr as H, Fr as I, Dn as J, Gn as K, gr as L, Wr as M, Rr as N, Ir as O, Lr as P, tr as Q, _r as R, Zr as S, Gr as T, Kn as U, lr as V, rr as W, Yn as X, Wn as Y, Vn as Z, si as _, Aa as a, un as at, Xr as b, Hi as c, rn as ct, fa as d, cr as et, hi as f, ai as g, oi as h, Da as i, ln as it, Vr as j, zr as k, Gi as l, li as m, Co as n, pn as nt, Wi as o, dn as ot, gi as p, On as q, Oo as r, vn as rt, Ui as s, an as st, xo as t, nr as tt, Ti as u, ti as v, ii as w, ei as x, $r as y, fr as z
};
//# sourceMappingURL=8eb03965-kt7qzn9zrpokisoa.js.map