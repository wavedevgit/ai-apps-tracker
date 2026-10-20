import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CN as n,
    Cj as r,
    JT as i,
    Ktt as a,
    Ol as o,
    P7 as s,
    X5 as c,
    Y5 as l,
    YT as u,
    Ytt as d,
    _j as f,
    _nt as p,
    bN as m,
    cat as h,
    cj as g,
    dW as _,
    fW as v,
    fat as y,
    fnt as b,
    hj as x,
    jl as S,
    kl as C,
    lj as w,
    mnt as T,
    oC as E,
    qtt as ee,
    sC as te,
    z7 as ne
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    At as D,
    Bn as re,
    Ln as O,
    Q as ie,
    Rn as k,
    Vn as A,
    p as j,
    s as ae,
    wn as oe,
    zn as se
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Hrt as ce,
    Urt as le,
    e5t as ue,
    i5t as de,
    n5t as fe,
    o5t as pe,
    r5t as me
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    By as he,
    Jy as ge,
    Ky as _e,
    Rl as ve,
    Vy as M,
    Yy as N,
    qy as P,
    zl as F
} from "./30901919-e8h11sw136qen6v0.js";
import {
    MS as I,
    NS as ye,
    VC as be,
    dC as L
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    a as xe
} from "./9ac7a75a-wz31coczqbyok3qn.js";
import {
    a as Se,
    i as R,
    n as Ce,
    r as we,
    t as Te
} from "./9dade4c6-f01zoqheo8gfxc9z.js";
import {
    o as Ee
} from "./e19f3910-loev8shk5up3qwjb.js";
async function z({
    email: e,
    routePath: t,
    templateId: n
}) {
    let r = o(null, null, null, await C(U));
    return await s.safePost(`/codex/download-email`, {
        authOption: h.Anonymous,
        additionalHeaders: r,
        requestBody: {
            email: e,
            route_path: t,
            template_id: n
        }
    })
}

function De(e) {
    "use forget";
    let t = (0, B.c)(26),
        {
            templateId: n,
            emailSendData: r
        } = e,
        a = (0, V.useRef)(null),
        o = (0, V.useRef)(!1),
        s = se(),
        c = D(),
        [l, u] = (0, V.useState)(``),
        [d, f] = (0, V.useState)(),
        [p, m] = (0, V.useState)(!1),
        h;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
        key: `codex-mobile-start-legacy`,
        allowUnauthenticatedTracking: !0
    }, t[0] = h) : h = t[0];
    let {
        trackSelectedPixels: g
    } = ye(h), v;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (v = {
        key: be.CODEX_MOBILE_START,
        allowUnauthenticatedTracking: !0
    }, t[1] = v) : v = t[1];
    let {
        trackSelectedPixels: y
    } = ye(v), b;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (b = () => {
        m(!0), f(void 0), u(``)
    }, t[2] = b) : b = t[2];
    let x;
    t[3] === s ? x = t[4] : (x = () => {
        m(!1), f(s.formatMessage({
            id: `keVamY`,
            defaultMessage: `Failed to send email.`
        }))
    }, t[3] = s, t[4] = x);
    let S;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (S = () => {
        o.current = !1
    }, t[5] = S) : S = t[5];
    let C;
    t[6] === x ? C = t[7] : (C = {
        mutationFn: z,
        onSuccess: b,
        onError: x,
        onSettled: S
    }, t[6] = x, t[7] = C);
    let w = j(C),
        T;
    t[8] !== r?.successText || t[9] !== p || t[10] !== s ? (T = p && (0, H.jsxs)(H.Fragment, {
        children: [(0, H.jsx)(_, {
            fontSize: `small`
        }), (0, H.jsx)(`div`, {
            className: `text-mkt-h6 mt-2 font-semibold`,
            children: s.formatMessage({
                id: `codex.downloadEmail.success.title`,
                defaultMessage: `Check your inbox`
            })
        }), (0, H.jsx)(`div`, {
            className: `text-token-text-primary/60 mt-3 px-4`,
            children: r?.successText
        })]
    }), t[8] = r?.successText, t[9] = p, t[10] = s, t[11] = T) : T = t[11];
    let E;
    t[12] !== l || t[13] !== r || t[14] !== d || t[15] !== p || t[16] !== s || t[17] !== c || t[18] !== w || t[19] !== n || t[20] !== y || t[21] !== g ? (E = !p && (0, H.jsxs)(`form`, {
        className: `flex w-full flex-col items-center gap-4`,
        noValidate: !0,
        onSubmit: e => {
            if (e.preventDefault(), o.current || w.isPending) return;
            let t = a.current;
            if (t) {
                if (!t.checkValidity()) {
                    f(s.formatMessage({
                        id: `s1wH8Z`,
                        defaultMessage: `Enter a valid email address.`
                    }));
                    return
                }
                f(void 0), o.current = !0, n !== `chatgpt-dots-download-transactional` && (g(), y()), w.mutate({
                    email: l.trim(),
                    routePath: c.pathname,
                    templateId: n
                })
            }
        },
        children: [(0, H.jsxs)(`div`, {
            className: `flex w-full max-w-[275px] flex-col gap-2`,
            children: [r?.title && (0, H.jsx)(`div`, {
                className: `text-token-text-primary text-mkt-h5 font-semibold`,
                children: r.title
            }), (r?.subtitle ?? r?.heading) && (0, H.jsx)(`div`, {
                className: `text-token-text-secondary text-body-small`,
                children: r?.subtitle ?? r?.heading
            })]
        }), (0, H.jsxs)(`div`, {
            className: `flex w-full flex-col gap-2`,
            children: [(0, H.jsx)(ce, {
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
            }), (0, H.jsx)(i, {
                fullWidth: !0,
                loading: w.isPending,
                size: `large`,
                type: `submit`,
                children: s.formatMessage({
                    id: `codex.downloadEmail.submit.label`,
                    defaultMessage: `Email me the link`
                })
            })]
        })]
    }), t[12] = l, t[13] = r, t[14] = d, t[15] = p, t[16] = s, t[17] = c, t[18] = w, t[19] = n, t[20] = y, t[21] = g, t[22] = E) : E = t[22];
    let ee;
    return t[23] !== T || t[24] !== E ? (ee = (0, H.jsxs)(`div`, {
        className: `border-token-border-light bg-token-bg-elevated-primary mt-10 box-border flex w-full flex-col items-center rounded-[36px] border px-4 pt-6 pb-4 text-center shadow-[0_4px_16px_0_rgba(0,0,0,0.05)]`,
        children: [T, E]
    }), t[23] = T, t[24] = E, t[25] = ee) : ee = t[25], ee
}
var B, V, H, U, Oe = e((() => {
    B = oe(), I(), L(), u(), v(), le(), y(), ne(), S(), ae(), V = t(A()), k(), ie(), H = re(), U = `codex_download_email`
}));

function ke(e, t, n) {
    return e === `purple` ? `purple` : e === `primary` ? `primary` : e === `secondary` ? t ? `primary` : `secondary` : e === `link` ? `ghost` : t ? n ?? `secondary` : `primary`
}

function W(e) {
    "use forget";
    let t = (0, ze.c)(106),
        {
            data: o,
            platformOverride: s,
            onLinkClick: c,
            className: u,
            buttonWidthClassName: d,
            defaultDarkModeButtonColor: p,
            marketingDownloadSource: m
        } = e,
        h = d === void 0 ? `w-56` : d,
        g = se(),
        _ = n(),
        [v, y] = (0, q.useState)(null),
        [b, S] = (0, q.useState)(null),
        [C, T] = (0, q.useState)(s ?? null),
        [te, ne] = (0, q.useState)(null),
        [D, re] = (0, q.useState)(null),
        O;
    t[0] === o?.mac ? O = t[1] : (O = o?.mac.some(Le) ?? !1, t[0] = o?.mac, t[1] = O);
    let ie = O,
        k;
    t[2] !== o?.mac || t[3] !== m || t[4] !== C ? (k = C === `mac` && m != null && (o?.mac.some(Fe) ?? !1), t[2] = o?.mac, t[3] = m, t[4] = C, t[5] = k) : k = t[5];
    let A = k,
        j = A && D === `micro_installer`,
        ae;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (ae = {
        key: `chatgpt-codex-download`,
        allowUnauthenticatedTracking: !0
    }, t[6] = ae) : ae = t[6];
    let {
        trackSelectedPixels: oe
    } = ye(ae), ce;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (ce = {
        key: be.CODEX_DOWNLOAD,
        allowUnauthenticatedTracking: !0
    }, t[7] = ce) : ce = t[7];
    let {
        trackSelectedPixels: le
    } = ye(ce), pe;
    t[8] !== le || t[9] !== oe ? (pe = () => {
        le(), oe()
    }, t[8] = le, t[9] = oe, t[10] = pe) : pe = t[10];
    let M = pe,
        N, P;
    t[11] === s ? (N = t[12], P = t[13]) : (N = () => {
        if (s) {
            T(s);
            return
        }
        T(Be())
    }, P = [s], t[11] = s, t[12] = N, t[13] = P), (0, q.useEffect)(N, P);
    let F, I;
    t[14] !== ie || t[15] !== A || t[16] !== C ? (I = () => {
        let e = !1;
        return (async () => {
            if (C !== `mac` || !ie) return {
                mode: null,
                architecture: null
            };
            let e = A ? Ce() : `full_app`;
            return {
                mode: e,
                architecture: e === `micro_installer` ? null : await ee()
            }
        })().then(t => {
            let {
                mode: n,
                architecture: r
            } = t;
            e || (re(n), ne(r))
        }), () => {
            e = !0
        }
    }, F = [C, ie, A], t[14] = ie, t[15] = A, t[16] = C, t[17] = F, t[18] = I) : (F = t[17], I = t[18]), (0, q.useEffect)(I, F);
    let L, we;
    t[19] === b ? (L = t[20], we = t[21]) : (L = () => {
        if (!b) return;
        let e = setTimeout(() => {
            S(null)
        }, 2e3);
        return () => clearTimeout(e)
    }, we = [b], t[19] = b, t[20] = L, t[21] = we), (0, q.useEffect)(L, we);
    let Ee;
    t[22] !== o || t[23] !== C ? (Ee = C == null ? [] : We(o, C), t[22] = o, t[23] = C, t[24] = Ee) : Ee = t[24];
    let z = Ee,
        B;
    t[25] !== c || t[26] !== M ? (B = (e, t, n) => {
        c?.(e), M(), E(n).then(() => S(t)).catch(Pe)
    }, t[25] = c, t[26] = M, t[27] = B) : B = t[27];
    let V = B,
        H;
    t[28] === g ? H = t[29] : (H = e => typeof e == `string` ? e : g.formatMessage(e), t[28] = g, t[29] = H);
    let U = H,
        Oe;
    t[30] !== p || t[31] !== _ ? (Oe = e => ke(e, _, p), t[30] = p, t[31] = _, t[32] = Oe) : Oe = t[32];
    let W = Oe,
        Ne;
    t[33] !== D || t[34] !== m || t[35] !== M ? (Ne = (e, t) => {
        let n = m ? Se(e, m, D ?? `full_app`, t) : e;
        w({
            downloadUrl: n,
            surface: `codex_app_announcement`
        }), window.location.assign(n), window.setTimeout(M, Ue)
    }, t[33] = D, t[34] = m, t[35] = M, t[36] = Ne) : Ne = t[36];
    let G = Ne,
        Ie;
    t[37] !== G || t[38] !== D || t[39] !== A || t[40] !== c || t[41] !== C || t[42] !== M || t[43] !== j ? (Ie = async e => {
        if (!Ve(e.href) && !(A && R(e.href) && D == null) && (c?.(e), !(typeof window > `u`))) {
            if (j && R(e.href)) {
                G(e.href, e.analyticsAction);
                return
            }
            if (C !== `desktop` && r(e.href)) {
                let t = await xe();
                if (t == null) return;
                G(t, e.analyticsAction);
                return
            }
            if (M(), He(e.href)) {
                window.open(e.href, `_blank`, `noopener,noreferrer`);
                return
            }
            window.location.assign(e.href)
        }
    }, t[37] = G, t[38] = D, t[39] = A, t[40] = c, t[41] = C, t[42] = M, t[43] = j, t[44] = Ie) : Ie = t[44];
    let K = Ie,
        Re;
    t[45] !== G || t[46] !== h || t[47] !== g || t[48] !== c || t[49] !== W ? (Re = (e, t, n) => {
        let r = [{
            label: X.downloadAppleSilicon,
            url: x,
            color: W(n)
        }, {
            label: X.downloadIntelMac,
            url: f,
            color: W(`secondary`)
        }];
        return (0, J.jsx)(`div`, {
            className: l(`flex gap-3`, {
                "w-full flex-col": t,
                "flex-row flex-wrap items-center justify-center": !t
            }),
            children: r.map(n => (0, J.jsx)(i, {
                type: `button`,
                size: `large`,
                color: n.color,
                className: l(t ? `w-full` : h),
                "data-analytics-action": e.analyticsAction,
                onClick: () => {
                    c?.(e), !(typeof window > `u`) && G(n.url, e.analyticsAction)
                },
                children: g.formatMessage(n.label)
            }, n.url))
        })
    }, t[45] = G, t[46] = h, t[47] = g, t[48] = c, t[49] = W, t[50] = Re) : Re = t[50];
    let Y = Re,
        Z;
    t[51] !== h || t[52] !== b || t[53] !== V || t[54] !== W || t[55] !== U ? (Z = (e, t, n, r, a) => {
        let o = b === n ? ge : _e,
            s = U(e.label);
        return (0, J.jsx)(i, {
            type: `button`,
            size: `large`,
            color: W(r),
            className: l(`[container-type:inline-size] font-mono text-[clamp(10px,1.8vw,14px)]`, {
                "w-full": t
            }, !t && h),
            "data-analytics-action": e.analyticsAction,
            onClick: () => V(e, n, e.copyValue ?? ``),
            children: (0, J.jsxs)(`span`, {
                className: l(`flex w-full items-center gap-[calc(0.3em+4px)]`, {
                    "justify-start": a,
                    "justify-center": !a
                }),
                children: [(0, J.jsx)(`span`, {
                    className: `text-[clamp(10px,3.4cqw,14px)] whitespace-nowrap`,
                    children: s
                }), (0, J.jsx)(o, {
                    className: `icon-sm`
                })]
            })
        })
    }, t[51] = h, t[52] = b, t[53] = V, t[54] = W, t[55] = U, t[56] = Z) : Z = t[56];
    let Ge = Z,
        Ke;
    t[57] !== h || t[58] !== W || t[59] !== U ? (Ke = (e, t, n) => {
        let r = U(e.label);
        return (0, J.jsx)(i, {
            type: `button`,
            size: `large`,
            disabled: !0,
            color: W(n),
            className: l(t ? `w-full` : h),
            children: r
        })
    }, t[57] = h, t[58] = W, t[59] = U, t[60] = Ke) : Ke = t[60];
    let qe = Ke,
        Je;
    t[61] !== te || t[62] !== h || t[63] !== K || t[64] !== g || t[65] !== m || t[66] !== C || t[67] !== Ge || t[68] !== Y || t[69] !== qe || t[70] !== W || t[71] !== U || t[72] !== j ? (Je = (e, t) => {
        let n = t.fullWidth ?? !1,
            o = !Ve(e.href),
            s = t.ctaStyle,
            c = t.ctaStyle === `link`,
            u = j && !e.copyValue && R(e.href),
            d = u ? g.formatMessage(Te.downloadMac) : U(e.label);
        if (e.copyValue) {
            let t = `${d}-${e.copyValue}`;
            return Ge(e, n, t, s, c)
        }
        if (!o) return C === `mobile` && m === `contentful_ctas` ? (0, J.jsx)(`p`, {
            className: `text-token-text-secondary text-center text-sm leading-relaxed`,
            children: d
        }) : qe(e, n, s);
        if (C === `mac` && r(e.href) && !u) {
            if (te == null) return qe({
                ...e,
                label: X.loading
            }, n, s);
            if (te === a.UNKNOWN) return Y(e, n, s)
        }
        return (0, J.jsx)(i, {
            type: `button`,
            size: `large`,
            color: W(s),
            className: l(n ? `w-full` : h),
            "data-analytics-action": e.analyticsAction,
            onClick: () => K(e),
            children: d
        })
    }, t[61] = te, t[62] = h, t[63] = K, t[64] = g, t[65] = m, t[66] = C, t[67] = Ge, t[68] = Y, t[69] = qe, t[70] = W, t[71] = U, t[72] = j, t[73] = Je) : Je = t[73];
    let Ye = Je,
        Xe;
    t[74] !== h || t[75] !== b || t[76] !== V || t[77] !== K || t[78] !== g || t[79] !== v || t[80] !== W || t[81] !== U || t[82] !== j ? (Xe = (e, t, n) => {
        let r = t.fullWidth ?? !1,
            a = t.dropdownCtaLabel ?? e[0]?.label,
            o = a ? U(a) : ``,
            s = v === n,
            c = W(t.ctaStyle);
        return a ? (0, J.jsxs)(me, {
            open: s,
            onOpenChange: e => {
                y(t => e ? n : t === n ? null : t)
            },
            children: [(0, J.jsx)(de, {
                asChild: !0,
                children: (0, J.jsx)(i, {
                    type: `button`,
                    size: `large`,
                    color: c,
                    className: l(r ? `w-full` : h),
                    children: (0, J.jsxs)(`span`, {
                        className: `flex w-full items-center justify-center gap-2`,
                        children: [(0, J.jsx)(`span`, {
                            className: `truncate`,
                            children: o
                        }), s ? (0, J.jsx)(ve, {
                            className: `icon-sm`
                        }) : (0, J.jsx)(he, {
                            className: `icon-sm`
                        })]
                    })
                })
            }), (0, J.jsx)(fe, {
                children: (0, J.jsx)(ue, {
                    sideOffset: 8,
                    align: `start`,
                    className: `z-50 w-[var(--radix-popover-trigger-width)] min-w-[var(--radix-popover-trigger-width)]`,
                    children: (0, J.jsx)(`div`, {
                        className: `border-token-border-light bg-token-bg-primary text-token-text-primary w-full rounded-lg border p-1 shadow-lg`,
                        children: (0, J.jsx)(`ul`, {
                            className: `flex flex-col`,
                            children: e.map((e, t) => {
                                let n = !!e.copyValue,
                                    r = Ve(e.href) && !n,
                                    i = j && !n && R(e.href) ? g.formatMessage(Te.downloadMac) : U(e.label),
                                    a = `${i}-${e.copyValue??``}`;
                                return r ? (0, J.jsx)(`li`, {
                                    children: (0, J.jsx)(`span`, {
                                        className: `text-token-text-tertiary block rounded-md px-3 py-2 text-sm`,
                                        children: i
                                    })
                                }, `${i}-${t}`) : (0, J.jsx)(`li`, {
                                    children: (0, J.jsxs)(`button`, {
                                        type: `button`,
                                        className: `hover:bg-token-bg-tertiary focus-visible:bg-token-bg-tertiary flex w-full items-center justify-between rounded-md px-3 py-2 text-start text-sm`,
                                        "data-analytics-action": e.analyticsAction,
                                        onClick: () => {
                                            n ? V(e, a, e.copyValue ?? ``) : K(e), y(null)
                                        },
                                        children: [(0, J.jsx)(`span`, {
                                            children: i
                                        }), n ? (0, J.jsx)(`span`, {
                                            className: `text-token-text-tertiary`,
                                            children: b === a ? g.formatMessage(X.copied) : g.formatMessage(X.copy)
                                        }) : null]
                                    })
                                }, `${i}-${t}`)
                            })
                        })
                    })
                })
            })]
        }) : null
    }, t[74] = h, t[75] = b, t[76] = V, t[77] = K, t[78] = g, t[79] = v, t[80] = W, t[81] = U, t[82] = j, t[83] = Xe) : Xe = t[83];
    let Ze = Xe,
        Qe;
    t[84] !== Ze || t[85] !== Ye || t[86] !== j ? (Qe = (e, t, n) => {
        let r = !1,
            i = (e.links ?? []).filter(e => !j || e.copyValue || !R(e.href) ? !0 : r ? !1 : (r = !0, !0));
        return i.length ? i.length > 1 ? Ze(i, e, `${t}-${n}`) : Ye(i[0], e) : null
    }, t[84] = Ze, t[85] = Ye, t[86] = j, t[87] = Qe) : Qe = t[87];
    let $e = Qe;
    if (C != null && !z.length) return null;
    let Q, $;
    if (t[88] !== h || t[89] !== u || t[90] !== g || t[91] !== _ || t[92] !== C || t[93] !== z || t[94] !== $e) {
        let e = z.some(Me);
        t[97] !== h || t[98] !== u || t[99] !== g || t[100] !== _ || t[101] !== C ? (Q = C == null ? (0, J.jsx)(`div`, {
            className: l(`flex flex-col gap-3`, u),
            children: (0, J.jsx)(`div`, {
                className: `relative z-10 flex flex-row flex-wrap items-center justify-center gap-3`,
                children: (0, J.jsx)(i, {
                    type: `button`,
                    size: `large`,
                    disabled: !0,
                    loading: !0,
                    color: ke(`primary`, _),
                    className: l(`min-w-40`, h),
                    children: g.formatMessage(X.loading)
                })
            })
        }) : null, t[97] = h, t[98] = u, t[99] = g, t[100] = _, t[101] = C, t[102] = Q) : Q = t[102], $ = C == null ? null : (0, J.jsx)(`div`, {
            className: l(`flex flex-col gap-3`, e && `w-full flex-1`, u),
            children: z.map((e, t) => {
                let n = e.some(je),
                    r = e.find(Ae)?.alignmentCollapsed;
                return (0, J.jsx)(`div`, {
                    className: l(`relative z-10 flex gap-3`, {
                        "w-full flex-col items-stretch": n,
                        "flex-row flex-wrap items-center justify-center": !n,
                        "justify-start": r === `start` && !n,
                        "justify-center": r === `center` && !n,
                        "justify-end": r === `end` && !n
                    }),
                    children: e.map((e, r) => {
                        if (e.emailSendType) return (0, J.jsx)(De, {
                            templateId: e.emailSendType,
                            emailSendData: e.emailSendData
                        }, `cta-${t}-${r}`);
                        let i = $e(e, t, r);
                        return i ? (0, J.jsx)(`div`, {
                            className: l({
                                "w-full": n
                            }),
                            children: i
                        }, `cta-${t}-${r}`) : null
                    })
                }, `cta-row-${t}`)
            })
        }), t[88] = h, t[89] = u, t[90] = g, t[91] = _, t[92] = C, t[93] = z, t[94] = $e, t[95] = Q, t[96] = $
    } else Q = t[95], $ = t[96];
    let et;
    return t[103] !== Q || t[104] !== $ ? (et = (0, J.jsxs)(J.Fragment, {
        children: [Q, $]
    }), t[103] = Q, t[104] = $, t[105] = et) : et = t[105], et
}

function Ae(e) {
    return e.alignmentCollapsed
}

function je(e) {
    return e.fullWidth
}

function Me(e) {
    return e.some(Ne)
}

function Ne(e) {
    return e.fullWidth
}

function Pe() {}

function Fe(e) {
    return e.some(G)
}

function G(e) {
    return e.links?.some(Ie)
}

function Ie(e) {
    return !e.copyValue && R(e.href)
}

function Le(e) {
    return e.some(K)
}

function K(e) {
    return e.links?.some(Re)
}

function Re(e) {
    return !e.copyValue && r(e.href)
}
var ze, q, J, Be, Ve, Y, He, Ue, We, X, Z = e((() => {
    ze = oe(), I(), L(), u(), N(), M(), F(), P(), te(), m(), d(), Ee(), g(), we(), pe(), c(), q = t(A()), k(), Oe(), J = re(), Be = () => typeof navigator > `u` ? `desktop` : T() ? `mobile` : p() ? `windows` : b() ? `mac` : `desktop`, Ve = e => e.trim().length === 0, Y = e => /^https?:\/\//i.test(e) || e.startsWith(`//`), He = e => Y(e), Ue = 50, We = (e, t) => e ? t === `mobile` ? e.mobile ?? [] : t === `mac` ? e.mac ?? [] : t === `windows` ? e.windows ?? e.desktop ?? [] : e.desktop ?? [] : [], X = O({
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
    Z as n, W as t
};
//# sourceMappingURL=50217878-g5pay92vkc184hvd.js.map