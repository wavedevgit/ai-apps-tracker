import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Al as r,
    Bnt as i,
    I7 as a,
    K5 as o,
    Ml as s,
    ON as c,
    Oj as l,
    Pat as u,
    Rat as d,
    Rnt as f,
    Sj as p,
    TN as m,
    Unt as h,
    bj as ee,
    cW as g,
    dC as te,
    eE as _,
    fC as v,
    j7 as y,
    kl as b,
    lW as x,
    mj as S,
    pj as C,
    q5 as w,
    vnt as ne,
    xnt as re,
    ynt as ie
} from "./4813494d-mdvd4786a87166cc.js";
import {
    At as T,
    Bn as ae,
    Ln as E,
    Q as D,
    Rn as O,
    Vn as k,
    p as A,
    s as oe,
    wn as se,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Irt as le,
    Lrt as ue,
    c5t as de,
    f5t as fe,
    l5t as pe,
    o5t as me,
    u5t as he
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Gy as j,
    Il as ge,
    Ky as _e,
    Ll as M,
    Ry as ve,
    Wy as ye,
    qy as N,
    zy as P
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    KC as be,
    LS as F,
    RS as xe,
    gC as I
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    a as Se
} from "./9ac7a75a-b2xe2u6rqme9vdc9.js";
import {
    a as Ce,
    i as L,
    n as we,
    r as R,
    t as Te
} from "./9dade4c6-cs2qsay8wqzsw30v.js";
import {
    o as z
} from "./e19f3910-nqncd9m6rjdlfk2l.js";
async function B({
    email: e,
    routePath: t,
    templateId: n
}) {
    let i = b(null, null, null, await r(W));
    return await y.safePost(`/codex/download-email`, {
        authOption: u.Anonymous,
        additionalHeaders: i,
        requestBody: {
            email: e,
            route_path: t,
            template_id: n
        }
    })
}

function Ee(e) {
    "use forget";
    let t = (0, V.c)(26),
        {
            templateId: r,
            emailSendData: i
        } = e,
        a = (0, H.useRef)(null),
        o = (0, H.useRef)(!1),
        s = ce(),
        c = T(),
        [l, u] = (0, H.useState)(``),
        [d, f] = (0, H.useState)(),
        [p, m] = (0, H.useState)(!1),
        h;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
        key: `codex-mobile-start-legacy`,
        allowUnauthenticatedTracking: !0
    }, t[0] = h) : h = t[0];
    let {
        trackSelectedPixels: ee
    } = xe(h), te;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (te = {
        key: be.CODEX_MOBILE_START,
        allowUnauthenticatedTracking: !0
    }, t[1] = te) : te = t[1];
    let {
        trackSelectedPixels: _
    } = xe(te), v;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (v = () => {
        m(!0), f(void 0), u(``)
    }, t[2] = v) : v = t[2];
    let y;
    t[3] === s ? y = t[4] : (y = () => {
        m(!1), f(s.formatMessage({
            id: `keVamY`,
            defaultMessage: `Failed to send email.`
        }))
    }, t[3] = s, t[4] = y);
    let b;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (b = () => {
        o.current = !1
    }, t[5] = b) : b = t[5];
    let x;
    t[6] === y ? x = t[7] : (x = {
        mutationFn: B,
        onSuccess: v,
        onError: y,
        onSettled: b
    }, t[6] = y, t[7] = x);
    let S = A(x),
        C;
    t[8] !== i?.successText || t[9] !== p || t[10] !== s ? (C = p && (0, U.jsxs)(U.Fragment, {
        children: [(0, U.jsx)(g, {
            fontSize: `small`
        }), (0, U.jsx)(`div`, {
            className: `text-mkt-h6 mt-2 font-semibold`,
            children: s.formatMessage({
                id: `codex.downloadEmail.success.title`,
                defaultMessage: `Check your inbox`
            })
        }), (0, U.jsx)(`div`, {
            className: `text-token-text-primary/60 mt-3 px-4`,
            children: i?.successText
        })]
    }), t[8] = i?.successText, t[9] = p, t[10] = s, t[11] = C) : C = t[11];
    let w;
    t[12] !== l || t[13] !== i || t[14] !== d || t[15] !== p || t[16] !== s || t[17] !== c || t[18] !== S || t[19] !== r || t[20] !== _ || t[21] !== ee ? (w = !p && (0, U.jsxs)(`form`, {
        className: `flex w-full flex-col items-center gap-4`,
        noValidate: !0,
        onSubmit: e => {
            if (e.preventDefault(), o.current || S.isPending) return;
            let t = a.current;
            if (t) {
                if (!t.checkValidity()) {
                    f(s.formatMessage({
                        id: `s1wH8Z`,
                        defaultMessage: `Enter a valid email address.`
                    }));
                    return
                }
                f(void 0), o.current = !0, r !== `chatgpt-dots-download-transactional` && (ee(), _()), S.mutate({
                    email: l.trim(),
                    routePath: c.pathname,
                    templateId: r
                })
            }
        },
        children: [(0, U.jsxs)(`div`, {
            className: `flex w-full max-w-[275px] flex-col gap-2`,
            children: [i?.title && (0, U.jsx)(`div`, {
                className: `text-token-text-primary text-mkt-h5 font-semibold`,
                children: i.title
            }), (i?.subtitle ?? i?.heading) && (0, U.jsx)(`div`, {
                className: `text-token-text-secondary text-body-small`,
                children: i?.subtitle ?? i?.heading
            })]
        }), (0, U.jsxs)(`div`, {
            className: `flex w-full flex-col gap-2`,
            children: [(0, U.jsx)(le, {
                ariaLabel: s.formatMessage({
                    id: `Rr9CE5`,
                    defaultMessage: `Email address`
                }),
                autoComplete: `email`,
                className: `bg-token-bg-elevated-primary box-border flex h-11.5 flex-col justify-center rounded-full! px-6! py-2.5!`,
                error: d,
                inputClassName: `placeholder:text-body-small placeholder:text-token-text-tertiary bg-transparent!`,
                name: `codex-download-email`,
                onChange: e => {
                    u(e.target.value), d && f(void 0), p && m(!1)
                },
                placeholder: s.formatMessage({
                    id: `So08Qm`,
                    defaultMessage: `Email address`
                }),
                ref: a,
                required: !0,
                type: `email`,
                value: l
            }), (0, U.jsx)(n, {
                fullWidth: !0,
                loading: S.isPending,
                size: `large`,
                type: `submit`,
                children: s.formatMessage({
                    id: `codex.downloadEmail.submit.label`,
                    defaultMessage: `Email me the link`
                })
            })]
        })]
    }), t[12] = l, t[13] = i, t[14] = d, t[15] = p, t[16] = s, t[17] = c, t[18] = S, t[19] = r, t[20] = _, t[21] = ee, t[22] = w) : w = t[22];
    let ne;
    return t[23] !== C || t[24] !== w ? (ne = (0, U.jsxs)(`div`, {
        className: `border-token-border-light bg-token-bg-elevated-primary mt-10 box-border flex w-full flex-col items-center rounded-[36px] border px-4 pt-6 pb-4 text-center shadow-[0_4px_16px_0_rgba(0,0,0,0.05)]`,
        children: [C, w]
    }), t[23] = C, t[24] = w, t[25] = ne) : ne = t[25], ne
}
var V, H, U, W, De = e((() => {
    V = se(), F(), I(), _(), x(), ue(), d(), a(), s(), oe(), H = t(k()), O(), D(), U = ae(), W = `codex_download_email`
}));

function Oe(e, t, n) {
    return e === `purple` ? `purple` : e === `primary` ? `primary` : e === `secondary` ? t ? `primary` : `secondary` : e === `link` ? `ghost` : t ? n ?? `secondary` : `primary`
}

function G(e) {
    "use forget";
    let t = (0, Re.c)(106),
        {
            data: r,
            platformOverride: i,
            onLinkClick: a,
            className: s,
            buttonWidthClassName: u,
            defaultDarkModeButtonColor: d,
            marketingDownloadSource: f
        } = e,
        m = u === void 0 ? `w-56` : u,
        h = ce(),
        g = c(),
        [_, v] = (0, J.useState)(null),
        [y, b] = (0, J.useState)(null),
        [x, C] = (0, J.useState)(i ?? null),
        [w, re] = (0, J.useState)(null),
        [T, ae] = (0, J.useState)(null),
        E;
    t[0] === r?.mac ? E = t[1] : (E = r?.mac.some(Ie) ?? !1, t[0] = r?.mac, t[1] = E);
    let D = E,
        O;
    t[2] !== r?.mac || t[3] !== f || t[4] !== x ? (O = x === `mac` && f != null && (r?.mac.some(Pe) ?? !1), t[2] = r?.mac, t[3] = f, t[4] = x, t[5] = O) : O = t[5];
    let k = O,
        A = k && T === `micro_installer`,
        oe;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (oe = {
        key: `chatgpt-codex-download`,
        allowUnauthenticatedTracking: !0
    }, t[6] = oe) : oe = t[6];
    let {
        trackSelectedPixels: se
    } = xe(oe), le;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (le = {
        key: be.CODEX_DOWNLOAD,
        allowUnauthenticatedTracking: !0
    }, t[7] = le) : le = t[7];
    let {
        trackSelectedPixels: ue
    } = xe(le), fe;
    t[8] !== ue || t[9] !== se ? (fe = () => {
        ue(), se()
    }, t[8] = ue, t[9] = se, t[10] = fe) : fe = t[10];
    let j = fe,
        M, N;
    t[11] === i ? (M = t[12], N = t[13]) : (M = () => {
        if (i) {
            C(i);
            return
        }
        C(ze())
    }, N = [i], t[11] = i, t[12] = M, t[13] = N), (0, J.useEffect)(M, N);
    let P, F;
    t[14] !== D || t[15] !== k || t[16] !== x ? (F = () => {
        let e = !1;
        return (async () => {
            if (x !== `mac` || !D) return {
                mode: null,
                architecture: null
            };
            let e = k ? we() : `full_app`;
            return {
                mode: e,
                architecture: e === `micro_installer` ? null : await ie()
            }
        })().then(t => {
            let {
                mode: n,
                architecture: r
            } = t;
            e || (ae(n), re(r))
        }), () => {
            e = !0
        }
    }, P = [x, D, k], t[14] = D, t[15] = k, t[16] = x, t[17] = P, t[18] = F) : (P = t[17], F = t[18]), (0, J.useEffect)(F, P);
    let I, R;
    t[19] === y ? (I = t[20], R = t[21]) : (I = () => {
        if (!y) return;
        let e = setTimeout(() => {
            b(null)
        }, 2e3);
        return () => clearTimeout(e)
    }, R = [y], t[19] = y, t[20] = I, t[21] = R), (0, J.useEffect)(I, R);
    let z;
    t[22] !== r || t[23] !== x ? (z = x == null ? [] : Ue(r, x), t[22] = r, t[23] = x, t[24] = z) : z = t[24];
    let B = z,
        V;
    t[25] !== a || t[26] !== j ? (V = (e, t, n) => {
        a?.(e), j(), te(n).then(() => b(t)).catch(Ne)
    }, t[25] = a, t[26] = j, t[27] = V) : V = t[27];
    let H = V,
        U;
    t[28] === h ? U = t[29] : (U = e => typeof e == `string` ? e : h.formatMessage(e), t[28] = h, t[29] = U);
    let W = U,
        De;
    t[30] !== d || t[31] !== g ? (De = e => Oe(e, g, d), t[30] = d, t[31] = g, t[32] = De) : De = t[32];
    let G = De,
        Me;
    t[33] !== T || t[34] !== f || t[35] !== j ? (Me = (e, t) => {
        let n = f ? Ce(e, f, T ?? `full_app`, t) : e;
        S({
            downloadUrl: n,
            surface: `codex_app_announcement`
        }), window.location.assign(n), window.setTimeout(j, He)
    }, t[33] = T, t[34] = f, t[35] = j, t[36] = Me) : Me = t[36];
    let K = Me,
        Fe;
    t[37] !== K || t[38] !== T || t[39] !== k || t[40] !== a || t[41] !== x || t[42] !== j || t[43] !== A ? (Fe = async e => {
        if (!Be(e.href) && !(k && L(e.href) && T == null) && (a?.(e), !(typeof window > `u`))) {
            if (A && L(e.href)) {
                K(e.href, e.analyticsAction);
                return
            }
            if (x !== `desktop` && l(e.href)) {
                let t = await Se();
                if (t == null) return;
                K(t, e.analyticsAction);
                return
            }
            if (j(), Ve(e.href)) {
                window.open(e.href, `_blank`, `noopener,noreferrer`);
                return
            }
            window.location.assign(e.href)
        }
    }, t[37] = K, t[38] = T, t[39] = k, t[40] = a, t[41] = x, t[42] = j, t[43] = A, t[44] = Fe) : Fe = t[44];
    let q = Fe,
        Le;
    t[45] !== K || t[46] !== m || t[47] !== h || t[48] !== a || t[49] !== G ? (Le = (e, t, r) => {
        let i = [{
            label: Z.downloadAppleSilicon,
            url: ee,
            color: G(r)
        }, {
            label: Z.downloadIntelMac,
            url: p,
            color: G(`secondary`)
        }];
        return (0, Y.jsx)(`div`, {
            className: o(`flex gap-3`, {
                "w-full flex-col": t,
                "flex-row flex-wrap items-center justify-center": !t
            }),
            children: i.map(r => (0, Y.jsx)(n, {
                type: `button`,
                size: `large`,
                color: r.color,
                className: o(t ? `w-full` : m),
                "data-analytics-action": e.analyticsAction,
                onClick: () => {
                    a?.(e), !(typeof window > `u`) && K(r.url, e.analyticsAction)
                },
                children: h.formatMessage(r.label)
            }, r.url))
        })
    }, t[45] = K, t[46] = m, t[47] = h, t[48] = a, t[49] = G, t[50] = Le) : Le = t[50];
    let X = Le,
        We;
    t[51] !== m || t[52] !== y || t[53] !== H || t[54] !== G || t[55] !== W ? (We = (e, t, r, i, a) => {
        let s = y === r ? _e : ye,
            c = W(e.label);
        return (0, Y.jsx)(n, {
            type: `button`,
            size: `large`,
            color: G(i),
            className: o(`[container-type:inline-size] font-mono text-[clamp(10px,1.8vw,14px)]`, {
                "w-full": t
            }, !t && m),
            "data-analytics-action": e.analyticsAction,
            onClick: () => H(e, r, e.copyValue ?? ``),
            children: (0, Y.jsxs)(`span`, {
                className: o(`flex w-full items-center gap-[calc(0.3em+4px)]`, {
                    "justify-start": a,
                    "justify-center": !a
                }),
                children: [(0, Y.jsx)(`span`, {
                    className: `text-[clamp(10px,3.4cqw,14px)] whitespace-nowrap`,
                    children: c
                }), (0, Y.jsx)(s, {
                    className: `icon-sm`
                })]
            })
        })
    }, t[51] = m, t[52] = y, t[53] = H, t[54] = G, t[55] = W, t[56] = We) : We = t[56];
    let Ge = We,
        Ke;
    t[57] !== m || t[58] !== G || t[59] !== W ? (Ke = (e, t, r) => {
        let i = W(e.label);
        return (0, Y.jsx)(n, {
            type: `button`,
            size: `large`,
            disabled: !0,
            color: G(r),
            className: o(t ? `w-full` : m),
            children: i
        })
    }, t[57] = m, t[58] = G, t[59] = W, t[60] = Ke) : Ke = t[60];
    let qe = Ke,
        Je;
    t[61] !== w || t[62] !== m || t[63] !== q || t[64] !== h || t[65] !== f || t[66] !== x || t[67] !== Ge || t[68] !== X || t[69] !== qe || t[70] !== G || t[71] !== W || t[72] !== A ? (Je = (e, t) => {
        let r = t.fullWidth ?? !1,
            i = !Be(e.href),
            a = t.ctaStyle,
            s = t.ctaStyle === `link`,
            c = A && !e.copyValue && L(e.href),
            u = c ? h.formatMessage(Te.downloadMac) : W(e.label);
        if (e.copyValue) {
            let t = `${u}-${e.copyValue}`;
            return Ge(e, r, t, a, s)
        }
        if (!i) return x === `mobile` && f === `contentful_ctas` ? (0, Y.jsx)(`p`, {
            className: `text-token-text-secondary text-center text-sm leading-relaxed`,
            children: u
        }) : qe(e, r, a);
        if (x === `mac` && l(e.href) && !c) {
            if (w == null) return qe({
                ...e,
                label: Z.loading
            }, r, a);
            if (w === ne.UNKNOWN) return X(e, r, a)
        }
        return (0, Y.jsx)(n, {
            type: `button`,
            size: `large`,
            color: G(a),
            className: o(r ? `w-full` : m),
            "data-analytics-action": e.analyticsAction,
            onClick: () => q(e),
            children: u
        })
    }, t[61] = w, t[62] = m, t[63] = q, t[64] = h, t[65] = f, t[66] = x, t[67] = Ge, t[68] = X, t[69] = qe, t[70] = G, t[71] = W, t[72] = A, t[73] = Je) : Je = t[73];
    let Ye = Je,
        Xe;
    t[74] !== m || t[75] !== y || t[76] !== H || t[77] !== q || t[78] !== h || t[79] !== _ || t[80] !== G || t[81] !== W || t[82] !== A ? (Xe = (e, t, r) => {
        let i = t.fullWidth ?? !1,
            a = t.dropdownCtaLabel ?? e[0]?.label,
            s = a ? W(a) : ``,
            c = _ === r,
            l = G(t.ctaStyle);
        return a ? (0, Y.jsxs)(pe, {
            open: c,
            onOpenChange: e => {
                v(t => e ? r : t === r ? null : t)
            },
            children: [(0, Y.jsx)(he, {
                asChild: !0,
                children: (0, Y.jsx)(n, {
                    type: `button`,
                    size: `large`,
                    color: l,
                    className: o(i ? `w-full` : m),
                    children: (0, Y.jsxs)(`span`, {
                        className: `flex w-full items-center justify-center gap-2`,
                        children: [(0, Y.jsx)(`span`, {
                            className: `truncate`,
                            children: s
                        }), c ? (0, Y.jsx)(ge, {
                            className: `icon-sm`
                        }) : (0, Y.jsx)(ve, {
                            className: `icon-sm`
                        })]
                    })
                })
            }), (0, Y.jsx)(de, {
                children: (0, Y.jsx)(me, {
                    sideOffset: 8,
                    align: `start`,
                    className: `z-50 w-[var(--radix-popover-trigger-width)] min-w-[var(--radix-popover-trigger-width)]`,
                    children: (0, Y.jsx)(`div`, {
                        className: `border-token-border-light bg-token-bg-primary text-token-text-primary w-full rounded-lg border p-1 shadow-lg`,
                        children: (0, Y.jsx)(`ul`, {
                            className: `flex flex-col`,
                            children: e.map((e, t) => {
                                let n = !!e.copyValue,
                                    r = Be(e.href) && !n,
                                    i = A && !n && L(e.href) ? h.formatMessage(Te.downloadMac) : W(e.label),
                                    a = `${i}-${e.copyValue??``}`;
                                return r ? (0, Y.jsx)(`li`, {
                                    children: (0, Y.jsx)(`span`, {
                                        className: `text-token-text-tertiary block rounded-md px-3 py-2 text-sm`,
                                        children: i
                                    })
                                }, `${i}-${t}`) : (0, Y.jsx)(`li`, {
                                    children: (0, Y.jsxs)(`button`, {
                                        type: `button`,
                                        className: `hover:bg-token-bg-tertiary focus-visible:bg-token-bg-tertiary flex w-full items-center justify-between rounded-md px-3 py-2 text-start text-sm`,
                                        "data-analytics-action": e.analyticsAction,
                                        onClick: () => {
                                            n ? H(e, a, e.copyValue ?? ``) : q(e), v(null)
                                        },
                                        children: [(0, Y.jsx)(`span`, {
                                            children: i
                                        }), n ? (0, Y.jsx)(`span`, {
                                            className: `text-token-text-tertiary`,
                                            children: y === a ? h.formatMessage(Z.copied) : h.formatMessage(Z.copy)
                                        }) : null]
                                    })
                                }, `${i}-${t}`)
                            })
                        })
                    })
                })
            })]
        }) : null
    }, t[74] = m, t[75] = y, t[76] = H, t[77] = q, t[78] = h, t[79] = _, t[80] = G, t[81] = W, t[82] = A, t[83] = Xe) : Xe = t[83];
    let Ze = Xe,
        Qe;
    t[84] !== Ze || t[85] !== Ye || t[86] !== A ? (Qe = (e, t, n) => {
        let r = !1,
            i = (e.links ?? []).filter(e => !A || e.copyValue || !L(e.href) ? !0 : r ? !1 : (r = !0, !0));
        return i.length ? i.length > 1 ? Ze(i, e, `${t}-${n}`) : Ye(i[0], e) : null
    }, t[84] = Ze, t[85] = Ye, t[86] = A, t[87] = Qe) : Qe = t[87];
    let $e = Qe;
    if (x != null && !B.length) return null;
    let Q, $;
    if (t[88] !== m || t[89] !== s || t[90] !== h || t[91] !== g || t[92] !== x || t[93] !== B || t[94] !== $e) {
        let e = B.some(je);
        t[97] !== m || t[98] !== s || t[99] !== h || t[100] !== g || t[101] !== x ? (Q = x == null ? (0, Y.jsx)(`div`, {
            className: o(`flex flex-col gap-3`, s),
            children: (0, Y.jsx)(`div`, {
                className: `relative z-10 flex flex-row flex-wrap items-center justify-center gap-3`,
                children: (0, Y.jsx)(n, {
                    type: `button`,
                    size: `large`,
                    disabled: !0,
                    loading: !0,
                    color: Oe(`primary`, g),
                    className: o(`min-w-40`, m),
                    children: h.formatMessage(Z.loading)
                })
            })
        }) : null, t[97] = m, t[98] = s, t[99] = h, t[100] = g, t[101] = x, t[102] = Q) : Q = t[102], $ = x == null ? null : (0, Y.jsx)(`div`, {
            className: o(`flex flex-col gap-3`, e && `w-full flex-1`, s),
            children: B.map((e, t) => {
                let n = e.some(Ae),
                    r = e.find(ke)?.alignmentCollapsed;
                return (0, Y.jsx)(`div`, {
                    className: o(`relative z-10 flex gap-3`, {
                        "w-full flex-col items-stretch": n,
                        "flex-row flex-wrap items-center justify-center": !n,
                        "justify-start": r === `start` && !n,
                        "justify-center": r === `center` && !n,
                        "justify-end": r === `end` && !n
                    }),
                    children: e.map((e, r) => {
                        if (e.emailSendType) return (0, Y.jsx)(Ee, {
                            templateId: e.emailSendType,
                            emailSendData: e.emailSendData
                        }, `cta-${t}-${r}`);
                        let i = $e(e, t, r);
                        return i ? (0, Y.jsx)(`div`, {
                            className: o({
                                "w-full": n
                            }),
                            children: i
                        }, `cta-${t}-${r}`) : null
                    })
                }, `cta-row-${t}`)
            })
        }), t[88] = m, t[89] = s, t[90] = h, t[91] = g, t[92] = x, t[93] = B, t[94] = $e, t[95] = Q, t[96] = $
    } else Q = t[95], $ = t[96];
    let et;
    return t[103] !== Q || t[104] !== $ ? (et = (0, Y.jsxs)(Y.Fragment, {
        children: [Q, $]
    }), t[103] = Q, t[104] = $, t[105] = et) : et = t[105], et
}

function ke(e) {
    return e.alignmentCollapsed
}

function Ae(e) {
    return e.fullWidth
}

function je(e) {
    return e.some(Me)
}

function Me(e) {
    return e.fullWidth
}

function Ne() {}

function Pe(e) {
    return e.some(K)
}

function K(e) {
    return e.links?.some(Fe)
}

function Fe(e) {
    return !e.copyValue && L(e.href)
}

function Ie(e) {
    return e.some(q)
}

function q(e) {
    return e.links?.some(Le)
}

function Le(e) {
    return !e.copyValue && l(e.href)
}
var Re, J, Y, ze, Be, X, Ve, He, Ue, Z, We = e((() => {
    Re = se(), F(), I(), _(), N(), P(), M(), j(), v(), m(), re(), z(), C(), R(), fe(), w(), J = t(k()), O(), De(), Y = ae(), ze = () => typeof navigator > `u` ? `desktop` : i() ? `mobile` : h() ? `windows` : f() ? `mac` : `desktop`, Be = e => e.trim().length === 0, X = e => /^https?:\/\//i.test(e) || e.startsWith(`//`), Ve = e => X(e), He = 50, Ue = (e, t) => e ? t === `mobile` ? e.mobile ?? [] : t === `mac` ? e.mac ?? [] : t === `windows` ? e.windows ?? e.desktop ?? [] : e.desktop ?? [] : [], Z = E({
        loading: {
            id: `wham.codexAppAnnouncement.cta.loading`,
            defaultMessage: `Loading`
        },
        downloadAppleSilicon: {
            id: `wham.codexAppAnnouncement.cta.downloadAppleSilicon`,
            defaultMessage: `Download for Apple Silicon`
        },
        downloadIntelMac: {
            id: `wham.codexAppAnnouncement.cta.downloadIntelMac`,
            defaultMessage: `Download for Intel Mac`
        },
        copy: {
            id: `wham.codexAppAnnouncement.cta.copy`,
            defaultMessage: `Copy`
        },
        copied: {
            id: `wham.codexAppAnnouncement.cta.copied`,
            defaultMessage: `Copied`
        }
    })
}));
export {
    We as n, G as t
};
//# sourceMappingURL=50217878-n04sj0jm4npgyvrv.js.map