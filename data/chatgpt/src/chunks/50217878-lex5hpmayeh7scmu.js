import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A7 as n,
    Al as r,
    Dl as i,
    F7 as a,
    G5 as o,
    Htt as s,
    JT as c,
    K5 as l,
    Ol as u,
    SN as d,
    Sj as f,
    Vtt as ee,
    Wtt as p,
    aC as te,
    cj as m,
    dW as h,
    fnt as g,
    gj as _,
    lnt as v,
    mj as ne,
    oC as y,
    qT as b,
    rat as x,
    sat as S,
    sj as C,
    snt as re,
    uW as w,
    yN as ie
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as T,
    Bn as ae,
    Ln as oe,
    Rn as E,
    Vn as D,
    jt as O,
    p as k,
    s as se,
    wn as ce,
    zn as le
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $8t as ue,
    Lrt as de,
    Q8t as fe,
    Rrt as pe,
    Y8t as me,
    Z8t as he,
    t5t as ge
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    By as _e,
    Jy as ve,
    Ky as ye,
    Rl as be,
    Vy as A,
    Yy as j,
    qy as M,
    zl as N
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    WC as P,
    bw as xe,
    dC as F,
    fC as Se
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    a as Ce
} from "./9ac7a75a-jtc585w9qerwt9l2.js";
import {
    a as we,
    i as I,
    n as Te,
    r as L,
    t as Ee
} from "./9dade4c6-ofm6xsdqkiylvdpa.js";
import {
    o as R
} from "./e19f3910-e4e73fwjl8xw3qih.js";
async function z({
    email: e,
    routePath: t,
    templateId: r
}) {
    let a = i(null, null, null, await u(U));
    return await n.safePost(`/codex/download-email`, {
        authOption: x.Anonymous,
        additionalHeaders: a,
        requestBody: {
            email: e,
            route_path: t,
            template_id: r
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
        i = (0, V.useRef)(null),
        a = (0, V.useRef)(!1),
        o = le(),
        s = O(),
        [c, l] = (0, V.useState)(``),
        [u, d] = (0, V.useState)(),
        [f, ee] = (0, V.useState)(!1),
        p;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
        key: `codex-mobile-start-legacy`,
        allowUnauthenticatedTracking: !0
    }, t[0] = p) : p = t[0];
    let {
        trackSelectedPixels: te
    } = Se(p), m;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
        key: xe.CODEX_MOBILE_START,
        allowUnauthenticatedTracking: !0
    }, t[1] = m) : m = t[1];
    let {
        trackSelectedPixels: h
    } = Se(m), g;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (g = () => {
        ee(!0), d(void 0), l(``)
    }, t[2] = g) : g = t[2];
    let _;
    t[3] === o ? _ = t[4] : (_ = () => {
        ee(!1), d(o.formatMessage({
            id: `keVamY`,
            defaultMessage: `Failed to send email.`
        }))
    }, t[3] = o, t[4] = _);
    let v;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (v = () => {
        a.current = !1
    }, t[5] = v) : v = t[5];
    let ne;
    t[6] === _ ? ne = t[7] : (ne = {
        mutationFn: z,
        onSuccess: g,
        onError: _,
        onSettled: v
    }, t[6] = _, t[7] = ne);
    let y = k(ne),
        x;
    t[8] !== r?.successText || t[9] !== f || t[10] !== o ? (x = f && (0, H.jsxs)(H.Fragment, {
        children: [(0, H.jsx)(w, {
            fontSize: `small`
        }), (0, H.jsx)(`div`, {
            className: `text-mkt-h6 mt-2 font-semibold`,
            children: o.formatMessage({
                id: `codex.downloadEmail.success.title`,
                defaultMessage: `Check your inbox`
            })
        }), (0, H.jsx)(`div`, {
            className: `text-token-text-primary/60 mt-3 px-4`,
            children: r?.successText
        })]
    }), t[8] = r?.successText, t[9] = f, t[10] = o, t[11] = x) : x = t[11];
    let S;
    t[12] !== c || t[13] !== r || t[14] !== u || t[15] !== f || t[16] !== o || t[17] !== s || t[18] !== y || t[19] !== n || t[20] !== h || t[21] !== te ? (S = !f && (0, H.jsxs)(`form`, {
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
                d(void 0), a.current = !0, n !== `chatgpt-dots-download-transactional` && (te(), h()), y.mutate({
                    email: c.trim(),
                    routePath: s.pathname,
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
            children: [(0, H.jsx)(de, {
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
            }), (0, H.jsx)(b, {
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
    }), t[12] = c, t[13] = r, t[14] = u, t[15] = f, t[16] = o, t[17] = s, t[18] = y, t[19] = n, t[20] = h, t[21] = te, t[22] = S) : S = t[22];
    let C;
    return t[23] !== x || t[24] !== S ? (C = (0, H.jsxs)(`div`, {
        className: `border-token-border-light bg-token-bg-elevated-primary mt-10 box-border flex w-full flex-col items-center rounded-[36px] border px-4 pt-6 pb-4 text-center shadow-[0_4px_16px_0_rgba(0,0,0,0.05)]`,
        children: [x, S]
    }), t[23] = x, t[24] = S, t[25] = C) : C = t[25], C
}
var B, V, H, U, Oe = e((() => {
    B = ce(), F(), P(), c(), h(), pe(), S(), a(), r(), se(), V = t(D()), E(), T(), H = ae(), U = `codex_download_email`
}));

function ke(e, t, n) {
    return e === `purple` ? `purple` : e === `primary` ? `primary` : e === `secondary` ? t ? `primary` : `secondary` : e === `link` ? `ghost` : t ? n ?? `secondary` : `primary`
}

function W(e) {
    "use forget";
    let t = (0, ze.c)(106),
        {
            data: n,
            platformOverride: r,
            onLinkClick: i,
            className: a,
            buttonWidthClassName: c,
            defaultDarkModeButtonColor: l,
            marketingDownloadSource: u
        } = e,
        p = c === void 0 ? `w-56` : c,
        h = le(),
        g = d(),
        [v, y] = (0, q.useState)(null),
        [x, S] = (0, q.useState)(null),
        [C, re] = (0, q.useState)(r ?? null),
        [w, ie] = (0, q.useState)(null),
        [T, ae] = (0, q.useState)(null),
        oe;
    t[0] === n?.mac ? oe = t[1] : (oe = n?.mac.some(Le) ?? !1, t[0] = n?.mac, t[1] = oe);
    let E = oe,
        D;
    t[2] !== n?.mac || t[3] !== u || t[4] !== C ? (D = C === `mac` && u != null && (n?.mac.some(Fe) ?? !1), t[2] = n?.mac, t[3] = u, t[4] = C, t[5] = D) : D = t[5];
    let O = D,
        k = O && T === `micro_installer`,
        se;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (se = {
        key: `chatgpt-codex-download`,
        allowUnauthenticatedTracking: !0
    }, t[6] = se) : se = t[6];
    let {
        trackSelectedPixels: ce
    } = Se(se), de;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (de = {
        key: xe.CODEX_DOWNLOAD,
        allowUnauthenticatedTracking: !0
    }, t[7] = de) : de = t[7];
    let {
        trackSelectedPixels: pe
    } = Se(de), ge;
    t[8] !== pe || t[9] !== ce ? (ge = () => {
        pe(), ce()
    }, t[8] = pe, t[9] = ce, t[10] = ge) : ge = t[10];
    let A = ge,
        j, M;
    t[11] === r ? (j = t[12], M = t[13]) : (j = () => {
        if (r) {
            re(r);
            return
        }
        re(Be())
    }, M = [r], t[11] = r, t[12] = j, t[13] = M), (0, q.useEffect)(j, M);
    let N, P;
    t[14] !== E || t[15] !== O || t[16] !== C ? (P = () => {
        let e = !1;
        return (async () => {
            if (C !== `mac` || !E) return {
                mode: null,
                architecture: null
            };
            let e = O ? Te() : `full_app`;
            return {
                mode: e,
                architecture: e === `micro_installer` ? null : await s()
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
    }, N = [C, E, O], t[14] = E, t[15] = O, t[16] = C, t[17] = N, t[18] = P) : (N = t[17], P = t[18]), (0, q.useEffect)(P, N);
    let F, L;
    t[19] === x ? (F = t[20], L = t[21]) : (F = () => {
        if (!x) return;
        let e = setTimeout(() => {
            S(null)
        }, 2e3);
        return () => clearTimeout(e)
    }, L = [x], t[19] = x, t[20] = F, t[21] = L), (0, q.useEffect)(F, L);
    let R;
    t[22] !== n || t[23] !== C ? (R = C == null ? [] : We(n, C), t[22] = n, t[23] = C, t[24] = R) : R = t[24];
    let z = R,
        B;
    t[25] !== i || t[26] !== A ? (B = (e, t, n) => {
        i?.(e), A(), te(n).then(() => S(t)).catch(Pe)
    }, t[25] = i, t[26] = A, t[27] = B) : B = t[27];
    let V = B,
        H;
    t[28] === h ? H = t[29] : (H = e => typeof e == `string` ? e : h.formatMessage(e), t[28] = h, t[29] = H);
    let U = H,
        Oe;
    t[30] !== l || t[31] !== g ? (Oe = e => ke(e, g, l), t[30] = l, t[31] = g, t[32] = Oe) : Oe = t[32];
    let W = Oe,
        Ne;
    t[33] !== T || t[34] !== u || t[35] !== A ? (Ne = (e, t) => {
        let n = u ? we(e, u, T ?? `full_app`, t) : e;
        m({
            downloadUrl: n,
            surface: `codex_app_announcement`
        }), window.location.assign(n), window.setTimeout(A, Ue)
    }, t[33] = T, t[34] = u, t[35] = A, t[36] = Ne) : Ne = t[36];
    let G = Ne,
        Ie;
    t[37] !== G || t[38] !== T || t[39] !== O || t[40] !== i || t[41] !== C || t[42] !== A || t[43] !== k ? (Ie = async e => {
        if (!Ve(e.href) && !(O && I(e.href) && T == null) && (i?.(e), !(typeof window > `u`))) {
            if (k && I(e.href)) {
                G(e.href, e.analyticsAction);
                return
            }
            if (C !== `desktop` && f(e.href)) {
                let t = await Ce();
                if (t == null) return;
                G(t, e.analyticsAction);
                return
            }
            if (A(), He(e.href)) {
                window.open(e.href, `_blank`, `noopener,noreferrer`);
                return
            }
            window.location.assign(e.href)
        }
    }, t[37] = G, t[38] = T, t[39] = O, t[40] = i, t[41] = C, t[42] = A, t[43] = k, t[44] = Ie) : Ie = t[44];
    let K = Ie,
        Re;
    t[45] !== G || t[46] !== p || t[47] !== h || t[48] !== i || t[49] !== W ? (Re = (e, t, n) => {
        let r = [{
            label: X.downloadAppleSilicon,
            url: ne,
            color: W(n)
        }, {
            label: X.downloadIntelMac,
            url: _,
            color: W(`secondary`)
        }];
        return (0, J.jsx)(`div`, {
            className: o(`flex gap-3`, {
                "w-full flex-col": t,
                "flex-row flex-wrap items-center justify-center": !t
            }),
            children: r.map(n => (0, J.jsx)(b, {
                type: `button`,
                size: `large`,
                color: n.color,
                className: o(t ? `w-full` : p),
                "data-analytics-action": e.analyticsAction,
                onClick: () => {
                    i?.(e), !(typeof window > `u`) && G(n.url, e.analyticsAction)
                },
                children: h.formatMessage(n.label)
            }, n.url))
        })
    }, t[45] = G, t[46] = p, t[47] = h, t[48] = i, t[49] = W, t[50] = Re) : Re = t[50];
    let Y = Re,
        Z;
    t[51] !== p || t[52] !== x || t[53] !== V || t[54] !== W || t[55] !== U ? (Z = (e, t, n, r, i) => {
        let a = x === n ? ve : ye,
            s = U(e.label);
        return (0, J.jsx)(b, {
            type: `button`,
            size: `large`,
            color: W(r),
            className: o(`[container-type:inline-size] font-mono text-[clamp(10px,1.8vw,14px)]`, {
                "w-full": t
            }, !t && p),
            "data-analytics-action": e.analyticsAction,
            onClick: () => V(e, n, e.copyValue ?? ``),
            children: (0, J.jsxs)(`span`, {
                className: o(`flex w-full items-center gap-[calc(0.3em+4px)]`, {
                    "justify-start": i,
                    "justify-center": !i
                }),
                children: [(0, J.jsx)(`span`, {
                    className: `text-[clamp(10px,3.4cqw,14px)] whitespace-nowrap`,
                    children: s
                }), (0, J.jsx)(a, {
                    className: `icon-sm`
                })]
            })
        })
    }, t[51] = p, t[52] = x, t[53] = V, t[54] = W, t[55] = U, t[56] = Z) : Z = t[56];
    let Ge = Z,
        Ke;
    t[57] !== p || t[58] !== W || t[59] !== U ? (Ke = (e, t, n) => {
        let r = U(e.label);
        return (0, J.jsx)(b, {
            type: `button`,
            size: `large`,
            disabled: !0,
            color: W(n),
            className: o(t ? `w-full` : p),
            children: r
        })
    }, t[57] = p, t[58] = W, t[59] = U, t[60] = Ke) : Ke = t[60];
    let qe = Ke,
        Je;
    t[61] !== w || t[62] !== p || t[63] !== K || t[64] !== h || t[65] !== u || t[66] !== C || t[67] !== Ge || t[68] !== Y || t[69] !== qe || t[70] !== W || t[71] !== U || t[72] !== k ? (Je = (e, t) => {
        let n = t.fullWidth ?? !1,
            r = !Ve(e.href),
            i = t.ctaStyle,
            a = t.ctaStyle === `link`,
            s = k && !e.copyValue && I(e.href),
            c = s ? h.formatMessage(Ee.downloadMac) : U(e.label);
        if (e.copyValue) {
            let t = `${c}-${e.copyValue}`;
            return Ge(e, n, t, i, a)
        }
        if (!r) return C === `mobile` && u === `contentful_ctas` ? (0, J.jsx)(`p`, {
            className: `text-token-text-secondary text-center text-sm leading-relaxed`,
            children: c
        }) : qe(e, n, i);
        if (C === `mac` && f(e.href) && !s) {
            if (w == null) return qe({
                ...e,
                label: X.loading
            }, n, i);
            if (w === ee.UNKNOWN) return Y(e, n, i)
        }
        return (0, J.jsx)(b, {
            type: `button`,
            size: `large`,
            color: W(i),
            className: o(n ? `w-full` : p),
            "data-analytics-action": e.analyticsAction,
            onClick: () => K(e),
            children: c
        })
    }, t[61] = w, t[62] = p, t[63] = K, t[64] = h, t[65] = u, t[66] = C, t[67] = Ge, t[68] = Y, t[69] = qe, t[70] = W, t[71] = U, t[72] = k, t[73] = Je) : Je = t[73];
    let Ye = Je,
        Xe;
    t[74] !== p || t[75] !== x || t[76] !== V || t[77] !== K || t[78] !== h || t[79] !== v || t[80] !== W || t[81] !== U || t[82] !== k ? (Xe = (e, t, n) => {
        let r = t.fullWidth ?? !1,
            i = t.dropdownCtaLabel ?? e[0]?.label,
            a = i ? U(i) : ``,
            s = v === n,
            c = W(t.ctaStyle);
        return i ? (0, J.jsxs)(fe, {
            open: s,
            onOpenChange: e => {
                y(t => e ? n : t === n ? null : t)
            },
            children: [(0, J.jsx)(ue, {
                asChild: !0,
                children: (0, J.jsx)(b, {
                    type: `button`,
                    size: `large`,
                    color: c,
                    className: o(r ? `w-full` : p),
                    children: (0, J.jsxs)(`span`, {
                        className: `flex w-full items-center justify-center gap-2`,
                        children: [(0, J.jsx)(`span`, {
                            className: `truncate`,
                            children: a
                        }), s ? (0, J.jsx)(be, {
                            className: `icon-sm`
                        }) : (0, J.jsx)(_e, {
                            className: `icon-sm`
                        })]
                    })
                })
            }), (0, J.jsx)(he, {
                children: (0, J.jsx)(me, {
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
                                    i = k && !n && I(e.href) ? h.formatMessage(Ee.downloadMac) : U(e.label),
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
                                            children: x === a ? h.formatMessage(X.copied) : h.formatMessage(X.copy)
                                        }) : null]
                                    })
                                }, `${i}-${t}`)
                            })
                        })
                    })
                })
            })]
        }) : null
    }, t[74] = p, t[75] = x, t[76] = V, t[77] = K, t[78] = h, t[79] = v, t[80] = W, t[81] = U, t[82] = k, t[83] = Xe) : Xe = t[83];
    let Ze = Xe,
        Qe;
    t[84] !== Ze || t[85] !== Ye || t[86] !== k ? (Qe = (e, t, n) => {
        let r = !1,
            i = (e.links ?? []).filter(e => !k || e.copyValue || !I(e.href) ? !0 : r ? !1 : (r = !0, !0));
        return i.length ? i.length > 1 ? Ze(i, e, `${t}-${n}`) : Ye(i[0], e) : null
    }, t[84] = Ze, t[85] = Ye, t[86] = k, t[87] = Qe) : Qe = t[87];
    let $e = Qe;
    if (C != null && !z.length) return null;
    let Q, $;
    if (t[88] !== p || t[89] !== a || t[90] !== h || t[91] !== g || t[92] !== C || t[93] !== z || t[94] !== $e) {
        let e = z.some(Me);
        t[97] !== p || t[98] !== a || t[99] !== h || t[100] !== g || t[101] !== C ? (Q = C == null ? (0, J.jsx)(`div`, {
            className: o(`flex flex-col gap-3`, a),
            children: (0, J.jsx)(`div`, {
                className: `relative z-10 flex flex-row flex-wrap items-center justify-center gap-3`,
                children: (0, J.jsx)(b, {
                    type: `button`,
                    size: `large`,
                    disabled: !0,
                    loading: !0,
                    color: ke(`primary`, g),
                    className: o(`min-w-40`, p),
                    children: h.formatMessage(X.loading)
                })
            })
        }) : null, t[97] = p, t[98] = a, t[99] = h, t[100] = g, t[101] = C, t[102] = Q) : Q = t[102], $ = C == null ? null : (0, J.jsx)(`div`, {
            className: o(`flex flex-col gap-3`, e && `w-full flex-1`, a),
            children: z.map((e, t) => {
                let n = e.some(je),
                    r = e.find(Ae)?.alignmentCollapsed;
                return (0, J.jsx)(`div`, {
                    className: o(`relative z-10 flex gap-3`, {
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
                            className: o({
                                "w-full": n
                            }),
                            children: i
                        }, `cta-${t}-${r}`) : null
                    })
                }, `cta-row-${t}`)
            })
        }), t[88] = p, t[89] = a, t[90] = h, t[91] = g, t[92] = C, t[93] = z, t[94] = $e, t[95] = Q, t[96] = $
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
    return !e.copyValue && I(e.href)
}

function Le(e) {
    return e.some(K)
}

function K(e) {
    return e.links?.some(Re)
}

function Re(e) {
    return !e.copyValue && f(e.href)
}
var ze, q, J, Be, Ve, Y, He, Ue, We, X, Z = e((() => {
    ze = ce(), F(), P(), c(), j(), A(), N(), M(), y(), ie(), p(), R(), C(), L(), ge(), l(), q = t(D()), E(), Oe(), J = ae(), Be = () => typeof navigator > `u` ? `desktop` : v() ? `mobile` : g() ? `windows` : re() ? `mac` : `desktop`, Ve = e => e.trim().length === 0, Y = e => /^https?:\/\//i.test(e) || e.startsWith(`//`), He = e => Y(e), Ue = 50, We = (e, t) => e ? t === `mobile` ? e.mobile ?? [] : t === `mac` ? e.mac ?? [] : t === `windows` ? e.windows ?? e.desktop ?? [] : e.desktop ?? [] : [], X = oe({
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
//# sourceMappingURL=50217878-lex5hpmayeh7scmu.js.map