import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Gtt as n,
    J5 as r,
    JT as i,
    Jtt as a,
    Ktt as o,
    N7 as s,
    Ol as c,
    R7 as l,
    SN as u,
    Sj as d,
    Y5 as f,
    aC as ee,
    cj as te,
    dW as p,
    dat as m,
    dnt as h,
    gj as ne,
    gnt as g,
    jl as _,
    kl as v,
    mj as y,
    oC as b,
    pnt as x,
    qT as S,
    sat as C,
    sj as re,
    uW as w,
    yN as ie
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    At as T,
    Bn as ae,
    Ln as E,
    Q as oe,
    Rn as D,
    Vn as O,
    p as k,
    s as se,
    wn as ce,
    zn as le
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $8t as ue,
    Brt as de,
    Z8t as fe,
    e5t as pe,
    r5t as me,
    t5t as he,
    zrt as A
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    By as ge,
    Jy as _e,
    Ky as ve,
    Rl as ye,
    Vy as j,
    Yy as M,
    qy as N,
    zl as P
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    MS as F,
    NS as be,
    VC as xe,
    dC as I
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    a as Se
} from "./9ac7a75a-n1ynto4h6ob9r4kj.js";
import {
    a as Ce,
    i as L,
    n as we,
    r as R,
    t as Te
} from "./9dade4c6-foshw0b8jqeov39d.js";
import {
    o as z
} from "./e19f3910-b7spt86odw5z3csr.js";
async function B({
    email: e,
    routePath: t,
    templateId: n
}) {
    let r = c(null, null, null, await v(W));
    return await s.safePost(`/codex/download-email`, {
        authOption: C.Anonymous,
        additionalHeaders: r,
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
            templateId: n,
            emailSendData: r
        } = e,
        i = (0, H.useRef)(null),
        a = (0, H.useRef)(!1),
        o = le(),
        s = T(),
        [c, l] = (0, H.useState)(``),
        [u, d] = (0, H.useState)(),
        [f, ee] = (0, H.useState)(!1),
        te;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (te = {
        key: `codex-mobile-start-legacy`,
        allowUnauthenticatedTracking: !0
    }, t[0] = te) : te = t[0];
    let {
        trackSelectedPixels: p
    } = be(te), m;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
        key: xe.CODEX_MOBILE_START,
        allowUnauthenticatedTracking: !0
    }, t[1] = m) : m = t[1];
    let {
        trackSelectedPixels: h
    } = be(m), ne;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = () => {
        ee(!0), d(void 0), l(``)
    }, t[2] = ne) : ne = t[2];
    let g;
    t[3] === o ? g = t[4] : (g = () => {
        ee(!1), d(o.formatMessage({
            id: `keVamY`,
            defaultMessage: `Failed to send email.`
        }))
    }, t[3] = o, t[4] = g);
    let _;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = () => {
        a.current = !1
    }, t[5] = _) : _ = t[5];
    let v;
    t[6] === g ? v = t[7] : (v = {
        mutationFn: B,
        onSuccess: ne,
        onError: g,
        onSettled: _
    }, t[6] = g, t[7] = v);
    let y = k(v),
        b;
    t[8] !== r?.successText || t[9] !== f || t[10] !== o ? (b = f && (0, U.jsxs)(U.Fragment, {
        children: [(0, U.jsx)(w, {
            fontSize: `small`
        }), (0, U.jsx)(`div`, {
            className: `text-mkt-h6 mt-2 font-semibold`,
            children: o.formatMessage({
                id: `codex.downloadEmail.success.title`,
                defaultMessage: `Check your inbox`
            })
        }), (0, U.jsx)(`div`, {
            className: `text-token-text-primary/60 mt-3 px-4`,
            children: r?.successText
        })]
    }), t[8] = r?.successText, t[9] = f, t[10] = o, t[11] = b) : b = t[11];
    let x;
    t[12] !== c || t[13] !== r || t[14] !== u || t[15] !== f || t[16] !== o || t[17] !== s || t[18] !== y || t[19] !== n || t[20] !== h || t[21] !== p ? (x = !f && (0, U.jsxs)(`form`, {
        className: `flex w-full flex-col items-center gap-4`,
        noValidate: !0,
        onSubmit: e => {
            if (e.preventDefault(), a.current || y.isPending) return;
            let t = i.current;
            if (t) {
                if (!t.checkValidity()) {
                    d(o.formatMessage({
                        id: `s1wH8Z`,
                        defaultMessage: `Enter a valid email address.`
                    }));
                    return
                }
                d(void 0), a.current = !0, n !== `chatgpt-dots-download-transactional` && (p(), h()), y.mutate({
                    email: c.trim(),
                    routePath: s.pathname,
                    templateId: n
                })
            }
        },
        children: [(0, U.jsxs)(`div`, {
            className: `flex w-full max-w-[275px] flex-col gap-2`,
            children: [r?.title && (0, U.jsx)(`div`, {
                className: `text-token-text-primary text-mkt-h5 font-semibold`,
                children: r.title
            }), (r?.subtitle ?? r?.heading) && (0, U.jsx)(`div`, {
                className: `text-token-text-secondary text-body-small`,
                children: r?.subtitle ?? r?.heading
            })]
        }), (0, U.jsxs)(`div`, {
            className: `flex w-full flex-col gap-2`,
            children: [(0, U.jsx)(A, {
                ariaLabel: o.formatMessage({
                    id: `Rr9CE5`,
                    defaultMessage: `Email address`
                }),
                autoComplete: `email`,
                className: `bg-token-bg-elevated-primary box-border flex h-11.5 flex-col justify-center rounded-full! px-6! py-2.5!`,
                error: u,
                inputClassName: `placeholder:text-body-small placeholder:text-token-text-tertiary bg-transparent!`,
                name: `codex-download-email`,
                onChange: e => {
                    l(e.target.value), u && d(void 0), f && ee(!1)
                },
                placeholder: o.formatMessage({
                    id: `So08Qm`,
                    defaultMessage: `Email address`
                }),
                ref: i,
                required: !0,
                type: `email`,
                value: c
            }), (0, U.jsx)(S, {
                fullWidth: !0,
                loading: y.isPending,
                size: `large`,
                type: `submit`,
                children: o.formatMessage({
                    id: `codex.downloadEmail.submit.label`,
                    defaultMessage: `Email me the link`
                })
            })]
        })]
    }), t[12] = c, t[13] = r, t[14] = u, t[15] = f, t[16] = o, t[17] = s, t[18] = y, t[19] = n, t[20] = h, t[21] = p, t[22] = x) : x = t[22];
    let C;
    return t[23] !== b || t[24] !== x ? (C = (0, U.jsxs)(`div`, {
        className: `border-token-border-light bg-token-bg-elevated-primary mt-10 box-border flex w-full flex-col items-center rounded-[36px] border px-4 pt-6 pb-4 text-center shadow-[0_4px_16px_0_rgba(0,0,0,0.05)]`,
        children: [b, x]
    }), t[23] = b, t[24] = x, t[25] = C) : C = t[25], C
}
var V, H, U, W, De = e((() => {
    V = ce(), F(), I(), i(), p(), de(), m(), l(), _(), se(), H = t(O()), D(), oe(), U = ae(), W = `codex_download_email`
}));

function Oe(e, t, n) {
    return e === `purple` ? `purple` : e === `primary` ? `primary` : e === `secondary` ? t ? `primary` : `secondary` : e === `link` ? `ghost` : t ? n ?? `secondary` : `primary`
}

function G(e) {
    "use forget";
    let t = (0, Re.c)(106),
        {
            data: i,
            platformOverride: a,
            onLinkClick: s,
            className: c,
            buttonWidthClassName: l,
            defaultDarkModeButtonColor: f,
            marketingDownloadSource: p
        } = e,
        m = l === void 0 ? `w-56` : l,
        h = le(),
        g = u(),
        [_, v] = (0, J.useState)(null),
        [b, x] = (0, J.useState)(null),
        [C, re] = (0, J.useState)(a ?? null),
        [w, ie] = (0, J.useState)(null),
        [T, ae] = (0, J.useState)(null),
        E;
    t[0] === i?.mac ? E = t[1] : (E = i?.mac.some(Ie) ?? !1, t[0] = i?.mac, t[1] = E);
    let oe = E,
        D;
    t[2] !== i?.mac || t[3] !== p || t[4] !== C ? (D = C === `mac` && p != null && (i?.mac.some(Pe) ?? !1), t[2] = i?.mac, t[3] = p, t[4] = C, t[5] = D) : D = t[5];
    let O = D,
        k = O && T === `micro_installer`,
        se;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (se = {
        key: `chatgpt-codex-download`,
        allowUnauthenticatedTracking: !0
    }, t[6] = se) : se = t[6];
    let {
        trackSelectedPixels: ce
    } = be(se), de;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (de = {
        key: xe.CODEX_DOWNLOAD,
        allowUnauthenticatedTracking: !0
    }, t[7] = de) : de = t[7];
    let {
        trackSelectedPixels: me
    } = be(de), A;
    t[8] !== me || t[9] !== ce ? (A = () => {
        me(), ce()
    }, t[8] = me, t[9] = ce, t[10] = A) : A = t[10];
    let j = A,
        M, N;
    t[11] === a ? (M = t[12], N = t[13]) : (M = () => {
        if (a) {
            re(a);
            return
        }
        re(ze())
    }, N = [a], t[11] = a, t[12] = M, t[13] = N), (0, J.useEffect)(M, N);
    let P, F;
    t[14] !== oe || t[15] !== O || t[16] !== C ? (F = () => {
        let e = !1;
        return (async () => {
            if (C !== `mac` || !oe) return {
                mode: null,
                architecture: null
            };
            let e = O ? we() : `full_app`;
            return {
                mode: e,
                architecture: e === `micro_installer` ? null : await o()
            }
        })().then(t => {
            let {
                mode: n,
                architecture: r
            } = t;
            e || (ae(n), ie(r))
        }), () => {
            e = !0
        }
    }, P = [C, oe, O], t[14] = oe, t[15] = O, t[16] = C, t[17] = P, t[18] = F) : (P = t[17], F = t[18]), (0, J.useEffect)(F, P);
    let I, R;
    t[19] === b ? (I = t[20], R = t[21]) : (I = () => {
        if (!b) return;
        let e = setTimeout(() => {
            x(null)
        }, 2e3);
        return () => clearTimeout(e)
    }, R = [b], t[19] = b, t[20] = I, t[21] = R), (0, J.useEffect)(I, R);
    let z;
    t[22] !== i || t[23] !== C ? (z = C == null ? [] : Ue(i, C), t[22] = i, t[23] = C, t[24] = z) : z = t[24];
    let B = z,
        V;
    t[25] !== s || t[26] !== j ? (V = (e, t, n) => {
        s?.(e), j(), ee(n).then(() => x(t)).catch(Ne)
    }, t[25] = s, t[26] = j, t[27] = V) : V = t[27];
    let H = V,
        U;
    t[28] === h ? U = t[29] : (U = e => typeof e == `string` ? e : h.formatMessage(e), t[28] = h, t[29] = U);
    let W = U,
        De;
    t[30] !== f || t[31] !== g ? (De = e => Oe(e, g, f), t[30] = f, t[31] = g, t[32] = De) : De = t[32];
    let G = De,
        Me;
    t[33] !== T || t[34] !== p || t[35] !== j ? (Me = (e, t) => {
        let n = p ? Ce(e, p, T ?? `full_app`, t) : e;
        te({
            downloadUrl: n,
            surface: `codex_app_announcement`
        }), window.location.assign(n), window.setTimeout(j, He)
    }, t[33] = T, t[34] = p, t[35] = j, t[36] = Me) : Me = t[36];
    let K = Me,
        Fe;
    t[37] !== K || t[38] !== T || t[39] !== O || t[40] !== s || t[41] !== C || t[42] !== j || t[43] !== k ? (Fe = async e => {
        if (!Be(e.href) && !(O && L(e.href) && T == null) && (s?.(e), !(typeof window > `u`))) {
            if (k && L(e.href)) {
                K(e.href, e.analyticsAction);
                return
            }
            if (C !== `desktop` && d(e.href)) {
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
    }, t[37] = K, t[38] = T, t[39] = O, t[40] = s, t[41] = C, t[42] = j, t[43] = k, t[44] = Fe) : Fe = t[44];
    let q = Fe,
        Le;
    t[45] !== K || t[46] !== m || t[47] !== h || t[48] !== s || t[49] !== G ? (Le = (e, t, n) => {
        let i = [{
            label: Z.downloadAppleSilicon,
            url: y,
            color: G(n)
        }, {
            label: Z.downloadIntelMac,
            url: ne,
            color: G(`secondary`)
        }];
        return (0, Y.jsx)(`div`, {
            className: r(`flex gap-3`, {
                "w-full flex-col": t,
                "flex-row flex-wrap items-center justify-center": !t
            }),
            children: i.map(n => (0, Y.jsx)(S, {
                type: `button`,
                size: `large`,
                color: n.color,
                className: r(t ? `w-full` : m),
                "data-analytics-action": e.analyticsAction,
                onClick: () => {
                    s?.(e), !(typeof window > `u`) && K(n.url, e.analyticsAction)
                },
                children: h.formatMessage(n.label)
            }, n.url))
        })
    }, t[45] = K, t[46] = m, t[47] = h, t[48] = s, t[49] = G, t[50] = Le) : Le = t[50];
    let X = Le,
        We;
    t[51] !== m || t[52] !== b || t[53] !== H || t[54] !== G || t[55] !== W ? (We = (e, t, n, i, a) => {
        let o = b === n ? _e : ve,
            s = W(e.label);
        return (0, Y.jsx)(S, {
            type: `button`,
            size: `large`,
            color: G(i),
            className: r(`[container-type:inline-size] font-mono text-[clamp(10px,1.8vw,14px)]`, {
                "w-full": t
            }, !t && m),
            "data-analytics-action": e.analyticsAction,
            onClick: () => H(e, n, e.copyValue ?? ``),
            children: (0, Y.jsxs)(`span`, {
                className: r(`flex w-full items-center gap-[calc(0.3em+4px)]`, {
                    "justify-start": a,
                    "justify-center": !a
                }),
                children: [(0, Y.jsx)(`span`, {
                    className: `text-[clamp(10px,3.4cqw,14px)] whitespace-nowrap`,
                    children: s
                }), (0, Y.jsx)(o, {
                    className: `icon-sm`
                })]
            })
        })
    }, t[51] = m, t[52] = b, t[53] = H, t[54] = G, t[55] = W, t[56] = We) : We = t[56];
    let Ge = We,
        Ke;
    t[57] !== m || t[58] !== G || t[59] !== W ? (Ke = (e, t, n) => {
        let i = W(e.label);
        return (0, Y.jsx)(S, {
            type: `button`,
            size: `large`,
            disabled: !0,
            color: G(n),
            className: r(t ? `w-full` : m),
            children: i
        })
    }, t[57] = m, t[58] = G, t[59] = W, t[60] = Ke) : Ke = t[60];
    let qe = Ke,
        Je;
    t[61] !== w || t[62] !== m || t[63] !== q || t[64] !== h || t[65] !== p || t[66] !== C || t[67] !== Ge || t[68] !== X || t[69] !== qe || t[70] !== G || t[71] !== W || t[72] !== k ? (Je = (e, t) => {
        let i = t.fullWidth ?? !1,
            a = !Be(e.href),
            o = t.ctaStyle,
            s = t.ctaStyle === `link`,
            c = k && !e.copyValue && L(e.href),
            l = c ? h.formatMessage(Te.downloadMac) : W(e.label);
        if (e.copyValue) {
            let t = `${l}-${e.copyValue}`;
            return Ge(e, i, t, o, s)
        }
        if (!a) return C === `mobile` && p === `contentful_ctas` ? (0, Y.jsx)(`p`, {
            className: `text-token-text-secondary text-center text-sm leading-relaxed`,
            children: l
        }) : qe(e, i, o);
        if (C === `mac` && d(e.href) && !c) {
            if (w == null) return qe({
                ...e,
                label: Z.loading
            }, i, o);
            if (w === n.UNKNOWN) return X(e, i, o)
        }
        return (0, Y.jsx)(S, {
            type: `button`,
            size: `large`,
            color: G(o),
            className: r(i ? `w-full` : m),
            "data-analytics-action": e.analyticsAction,
            onClick: () => q(e),
            children: l
        })
    }, t[61] = w, t[62] = m, t[63] = q, t[64] = h, t[65] = p, t[66] = C, t[67] = Ge, t[68] = X, t[69] = qe, t[70] = G, t[71] = W, t[72] = k, t[73] = Je) : Je = t[73];
    let Ye = Je,
        Xe;
    t[74] !== m || t[75] !== b || t[76] !== H || t[77] !== q || t[78] !== h || t[79] !== _ || t[80] !== G || t[81] !== W || t[82] !== k ? (Xe = (e, t, n) => {
        let i = t.fullWidth ?? !1,
            a = t.dropdownCtaLabel ?? e[0]?.label,
            o = a ? W(a) : ``,
            s = _ === n,
            c = G(t.ctaStyle);
        return a ? (0, Y.jsxs)(pe, {
            open: s,
            onOpenChange: e => {
                v(t => e ? n : t === n ? null : t)
            },
            children: [(0, Y.jsx)(he, {
                asChild: !0,
                children: (0, Y.jsx)(S, {
                    type: `button`,
                    size: `large`,
                    color: c,
                    className: r(i ? `w-full` : m),
                    children: (0, Y.jsxs)(`span`, {
                        className: `flex w-full items-center justify-center gap-2`,
                        children: [(0, Y.jsx)(`span`, {
                            className: `truncate`,
                            children: o
                        }), s ? (0, Y.jsx)(ye, {
                            className: `icon-sm`
                        }) : (0, Y.jsx)(ge, {
                            className: `icon-sm`
                        })]
                    })
                })
            }), (0, Y.jsx)(ue, {
                children: (0, Y.jsx)(fe, {
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
                                    i = k && !n && L(e.href) ? h.formatMessage(Te.downloadMac) : W(e.label),
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
                                            children: b === a ? h.formatMessage(Z.copied) : h.formatMessage(Z.copy)
                                        }) : null]
                                    })
                                }, `${i}-${t}`)
                            })
                        })
                    })
                })
            })]
        }) : null
    }, t[74] = m, t[75] = b, t[76] = H, t[77] = q, t[78] = h, t[79] = _, t[80] = G, t[81] = W, t[82] = k, t[83] = Xe) : Xe = t[83];
    let Ze = Xe,
        Qe;
    t[84] !== Ze || t[85] !== Ye || t[86] !== k ? (Qe = (e, t, n) => {
        let r = !1,
            i = (e.links ?? []).filter(e => !k || e.copyValue || !L(e.href) ? !0 : r ? !1 : (r = !0, !0));
        return i.length ? i.length > 1 ? Ze(i, e, `${t}-${n}`) : Ye(i[0], e) : null
    }, t[84] = Ze, t[85] = Ye, t[86] = k, t[87] = Qe) : Qe = t[87];
    let $e = Qe;
    if (C != null && !B.length) return null;
    let Q, $;
    if (t[88] !== m || t[89] !== c || t[90] !== h || t[91] !== g || t[92] !== C || t[93] !== B || t[94] !== $e) {
        let e = B.some(je);
        t[97] !== m || t[98] !== c || t[99] !== h || t[100] !== g || t[101] !== C ? (Q = C == null ? (0, Y.jsx)(`div`, {
            className: r(`flex flex-col gap-3`, c),
            children: (0, Y.jsx)(`div`, {
                className: `relative z-10 flex flex-row flex-wrap items-center justify-center gap-3`,
                children: (0, Y.jsx)(S, {
                    type: `button`,
                    size: `large`,
                    disabled: !0,
                    loading: !0,
                    color: Oe(`primary`, g),
                    className: r(`min-w-40`, m),
                    children: h.formatMessage(Z.loading)
                })
            })
        }) : null, t[97] = m, t[98] = c, t[99] = h, t[100] = g, t[101] = C, t[102] = Q) : Q = t[102], $ = C == null ? null : (0, Y.jsx)(`div`, {
            className: r(`flex flex-col gap-3`, e && `w-full flex-1`, c),
            children: B.map((e, t) => {
                let n = e.some(Ae),
                    i = e.find(ke)?.alignmentCollapsed;
                return (0, Y.jsx)(`div`, {
                    className: r(`relative z-10 flex gap-3`, {
                        "w-full flex-col items-stretch": n,
                        "flex-row flex-wrap items-center justify-center": !n,
                        "justify-start": i === `start` && !n,
                        "justify-center": i === `center` && !n,
                        "justify-end": i === `end` && !n
                    }),
                    children: e.map((e, i) => {
                        if (e.emailSendType) return (0, Y.jsx)(Ee, {
                            templateId: e.emailSendType,
                            emailSendData: e.emailSendData
                        }, `cta-${t}-${i}`);
                        let a = $e(e, t, i);
                        return a ? (0, Y.jsx)(`div`, {
                            className: r({
                                "w-full": n
                            }),
                            children: a
                        }, `cta-${t}-${i}`) : null
                    })
                }, `cta-row-${t}`)
            })
        }), t[88] = m, t[89] = c, t[90] = h, t[91] = g, t[92] = C, t[93] = B, t[94] = $e, t[95] = Q, t[96] = $
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
    return !e.copyValue && d(e.href)
}
var Re, J, Y, ze, Be, X, Ve, He, Ue, Z, We = e((() => {
    Re = ce(), F(), I(), i(), M(), j(), P(), N(), b(), ie(), a(), z(), re(), R(), me(), f(), J = t(O()), D(), De(), Y = ae(), ze = () => typeof navigator > `u` ? `desktop` : x() ? `mobile` : g() ? `windows` : h() ? `mac` : `desktop`, Be = e => e.trim().length === 0, X = e => /^https?:\/\//i.test(e) || e.startsWith(`//`), Ve = e => X(e), He = 50, Ue = (e, t) => e ? t === `mobile` ? e.mobile ?? [] : t === `mac` ? e.mac ?? [] : t === `windows` ? e.windows ?? e.desktop ?? [] : e.desktop ?? [] : [], Z = E({
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
//# sourceMappingURL=50217878-cd23hoi0omdi5djr.js.map