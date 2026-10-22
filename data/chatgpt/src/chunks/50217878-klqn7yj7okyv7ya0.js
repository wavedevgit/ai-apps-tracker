import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $T as r,
    Al as i,
    Dat as a,
    Int as o,
    J7 as s,
    Ml as c,
    Nnt as l,
    ON as ee,
    Oj as u,
    Sj as d,
    TN as f,
    bj as te,
    cW as p,
    dC as ne,
    dnt as re,
    eE as m,
    fC as h,
    fnt as g,
    jat as _,
    jnt as v,
    kl as y,
    l7 as b,
    lW as x,
    mj as S,
    mnt as C,
    pj as w,
    u7 as ie
} from "./4813494d-r54yv6lv29x4ew99.js";
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
    a5t as de,
    l5t as fe,
    o5t as pe,
    r5t as me,
    s5t as he
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Gy as j,
    Il as ge,
    Ky as _e,
    Ll as M,
    Ry as ve,
    Wy as ye,
    qy as N,
    zy as P
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    GC as be,
    IS as F,
    LS as xe,
    hC as I
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";
import {
    a as Se
} from "./9ac7a75a-crpgrc4bovdj6lu7.js";
import {
    a as Ce,
    i as L,
    n as we,
    r as R,
    t as Te
} from "./9dade4c6-g3abq0wbuagl3fpz.js";
import {
    o as z
} from "./e19f3910-om5goj2s40m5bbt4.js";
async function B({
    email: e,
    routePath: t,
    templateId: n
}) {
    let r = y(null, null, null, await i(W));
    return await s.safePost(`/codex/download-email`, {
        authOption: a.Anonymous,
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
            emailSendData: i
        } = e,
        a = (0, H.useRef)(null),
        o = (0, H.useRef)(!1),
        s = ce(),
        c = T(),
        [l, ee] = (0, H.useState)(``),
        [u, d] = (0, H.useState)(),
        [f, te] = (0, H.useState)(!1),
        ne;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = {
        key: `codex-mobile-start-legacy`,
        allowUnauthenticatedTracking: !0
    }, t[0] = ne) : ne = t[0];
    let {
        trackSelectedPixels: re
    } = xe(ne), m;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
        key: be.CODEX_MOBILE_START,
        allowUnauthenticatedTracking: !0
    }, t[1] = m) : m = t[1];
    let {
        trackSelectedPixels: h
    } = xe(m), g;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (g = () => {
        te(!0), d(void 0), ee(``)
    }, t[2] = g) : g = t[2];
    let _;
    t[3] === s ? _ = t[4] : (_ = () => {
        te(!1), d(s.formatMessage({
            id: `keVamY`,
            defaultMessage: `Failed to send email.`
        }))
    }, t[3] = s, t[4] = _);
    let v;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (v = () => {
        o.current = !1
    }, t[5] = v) : v = t[5];
    let y;
    t[6] === _ ? y = t[7] : (y = {
        mutationFn: B,
        onSuccess: g,
        onError: _,
        onSettled: v
    }, t[6] = _, t[7] = y);
    let b = A(y),
        x;
    t[8] !== i?.successText || t[9] !== f || t[10] !== s ? (x = f && (0, U.jsxs)(U.Fragment, {
        children: [(0, U.jsx)(p, {
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
    }), t[8] = i?.successText, t[9] = f, t[10] = s, t[11] = x) : x = t[11];
    let S;
    t[12] !== l || t[13] !== i || t[14] !== u || t[15] !== f || t[16] !== s || t[17] !== c || t[18] !== b || t[19] !== n || t[20] !== h || t[21] !== re ? (S = !f && (0, U.jsxs)(`form`, {
        className: `flex w-full flex-col items-center gap-4`,
        noValidate: !0,
        onSubmit: e => {
            if (e.preventDefault(), o.current || b.isPending) return;
            let t = a.current;
            if (t) {
                if (!t.checkValidity()) {
                    d(s.formatMessage({
                        id: `s1wH8Z`,
                        defaultMessage: `Enter a valid email address.`
                    }));
                    return
                }
                d(void 0), o.current = !0, n !== `chatgpt-dots-download-transactional` && (re(), h()), b.mutate({
                    email: l.trim(),
                    routePath: c.pathname,
                    templateId: n
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
                error: u,
                inputClassName: `placeholder:text-body-small placeholder:text-token-text-tertiary bg-transparent!`,
                name: `codex-download-email`,
                onChange: e => {
                    ee(e.target.value), u && d(void 0), f && te(!1)
                },
                placeholder: s.formatMessage({
                    id: `So08Qm`,
                    defaultMessage: `Email address`
                }),
                ref: a,
                required: !0,
                type: `email`,
                value: l
            }), (0, U.jsx)(r, {
                fullWidth: !0,
                loading: b.isPending,
                size: `large`,
                type: `submit`,
                children: s.formatMessage({
                    id: `codex.downloadEmail.submit.label`,
                    defaultMessage: `Email me the link`
                })
            })]
        })]
    }), t[12] = l, t[13] = i, t[14] = u, t[15] = f, t[16] = s, t[17] = c, t[18] = b, t[19] = n, t[20] = h, t[21] = re, t[22] = S) : S = t[22];
    let C;
    return t[23] !== x || t[24] !== S ? (C = (0, U.jsxs)(`div`, {
        className: `border-token-border-light bg-token-bg-elevated-primary mt-10 box-border flex w-full flex-col items-center rounded-[36px] border px-4 pt-6 pb-4 text-center shadow-[0_4px_16px_0_rgba(0,0,0,0.05)]`,
        children: [x, S]
    }), t[23] = x, t[24] = S, t[25] = C) : C = t[25], C
}
var V, H, U, W, De = e((() => {
    V = se(), F(), I(), m(), x(), ue(), _(), n(), c(), oe(), H = t(k()), O(), D(), U = ae(), W = `codex_download_email`
}));

function Oe(e, t, n) {
    return e === `purple` ? `purple` : e === `primary` ? `primary` : e === `secondary` ? t ? `primary` : `secondary` : e === `link` ? `ghost` : t ? n ?? `secondary` : `primary`
}

function G(e) {
    "use forget";
    let t = (0, Re.c)(106),
        {
            data: n,
            platformOverride: i,
            onLinkClick: a,
            className: o,
            buttonWidthClassName: s,
            defaultDarkModeButtonColor: c,
            marketingDownloadSource: l
        } = e,
        f = s === void 0 ? `w-56` : s,
        p = ce(),
        m = ee(),
        [h, _] = (0, J.useState)(null),
        [v, y] = (0, J.useState)(null),
        [x, C] = (0, J.useState)(i ?? null),
        [w, ie] = (0, J.useState)(null),
        [T, ae] = (0, J.useState)(null),
        E;
    t[0] === n?.mac ? E = t[1] : (E = n?.mac.some(Ie) ?? !1, t[0] = n?.mac, t[1] = E);
    let D = E,
        O;
    t[2] !== n?.mac || t[3] !== l || t[4] !== x ? (O = x === `mac` && l != null && (n?.mac.some(Pe) ?? !1), t[2] = n?.mac, t[3] = l, t[4] = x, t[5] = O) : O = t[5];
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
                architecture: e === `micro_installer` ? null : await g()
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
    }, P = [x, D, k], t[14] = D, t[15] = k, t[16] = x, t[17] = P, t[18] = F) : (P = t[17], F = t[18]), (0, J.useEffect)(F, P);
    let I, R;
    t[19] === v ? (I = t[20], R = t[21]) : (I = () => {
        if (!v) return;
        let e = setTimeout(() => {
            y(null)
        }, 2e3);
        return () => clearTimeout(e)
    }, R = [v], t[19] = v, t[20] = I, t[21] = R), (0, J.useEffect)(I, R);
    let z;
    t[22] !== n || t[23] !== x ? (z = x == null ? [] : Ue(n, x), t[22] = n, t[23] = x, t[24] = z) : z = t[24];
    let B = z,
        V;
    t[25] !== a || t[26] !== j ? (V = (e, t, n) => {
        a?.(e), j(), ne(n).then(() => y(t)).catch(Ne)
    }, t[25] = a, t[26] = j, t[27] = V) : V = t[27];
    let H = V,
        U;
    t[28] === p ? U = t[29] : (U = e => typeof e == `string` ? e : p.formatMessage(e), t[28] = p, t[29] = U);
    let W = U,
        De;
    t[30] !== c || t[31] !== m ? (De = e => Oe(e, m, c), t[30] = c, t[31] = m, t[32] = De) : De = t[32];
    let G = De,
        Me;
    t[33] !== T || t[34] !== l || t[35] !== j ? (Me = (e, t) => {
        let n = l ? Ce(e, l, T ?? `full_app`, t) : e;
        S({
            downloadUrl: n,
            surface: `codex_app_announcement`
        }), window.location.assign(n), window.setTimeout(j, He)
    }, t[33] = T, t[34] = l, t[35] = j, t[36] = Me) : Me = t[36];
    let K = Me,
        Fe;
    t[37] !== K || t[38] !== T || t[39] !== k || t[40] !== a || t[41] !== x || t[42] !== j || t[43] !== A ? (Fe = async e => {
        if (!Be(e.href) && !(k && L(e.href) && T == null) && (a?.(e), !(typeof window > `u`))) {
            if (A && L(e.href)) {
                K(e.href, e.analyticsAction);
                return
            }
            if (x !== `desktop` && u(e.href)) {
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
    t[45] !== K || t[46] !== f || t[47] !== p || t[48] !== a || t[49] !== G ? (Le = (e, t, n) => {
        let i = [{
            label: Z.downloadAppleSilicon,
            url: te,
            color: G(n)
        }, {
            label: Z.downloadIntelMac,
            url: d,
            color: G(`secondary`)
        }];
        return (0, Y.jsx)(`div`, {
            className: b(`flex gap-3`, {
                "w-full flex-col": t,
                "flex-row flex-wrap items-center justify-center": !t
            }),
            children: i.map(n => (0, Y.jsx)(r, {
                type: `button`,
                size: `large`,
                color: n.color,
                className: b(t ? `w-full` : f),
                "data-analytics-action": e.analyticsAction,
                onClick: () => {
                    a?.(e), !(typeof window > `u`) && K(n.url, e.analyticsAction)
                },
                children: p.formatMessage(n.label)
            }, n.url))
        })
    }, t[45] = K, t[46] = f, t[47] = p, t[48] = a, t[49] = G, t[50] = Le) : Le = t[50];
    let X = Le,
        We;
    t[51] !== f || t[52] !== v || t[53] !== H || t[54] !== G || t[55] !== W ? (We = (e, t, n, i, a) => {
        let o = v === n ? _e : ye,
            s = W(e.label);
        return (0, Y.jsx)(r, {
            type: `button`,
            size: `large`,
            color: G(i),
            className: b(`[container-type:inline-size] font-mono text-[clamp(10px,1.8vw,14px)]`, {
                "w-full": t
            }, !t && f),
            "data-analytics-action": e.analyticsAction,
            onClick: () => H(e, n, e.copyValue ?? ``),
            children: (0, Y.jsxs)(`span`, {
                className: b(`flex w-full items-center gap-[calc(0.3em+4px)]`, {
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
    }, t[51] = f, t[52] = v, t[53] = H, t[54] = G, t[55] = W, t[56] = We) : We = t[56];
    let Ge = We,
        Ke;
    t[57] !== f || t[58] !== G || t[59] !== W ? (Ke = (e, t, n) => {
        let i = W(e.label);
        return (0, Y.jsx)(r, {
            type: `button`,
            size: `large`,
            disabled: !0,
            color: G(n),
            className: b(t ? `w-full` : f),
            children: i
        })
    }, t[57] = f, t[58] = G, t[59] = W, t[60] = Ke) : Ke = t[60];
    let qe = Ke,
        Je;
    t[61] !== w || t[62] !== f || t[63] !== q || t[64] !== p || t[65] !== l || t[66] !== x || t[67] !== Ge || t[68] !== X || t[69] !== qe || t[70] !== G || t[71] !== W || t[72] !== A ? (Je = (e, t) => {
        let n = t.fullWidth ?? !1,
            i = !Be(e.href),
            a = t.ctaStyle,
            o = t.ctaStyle === `link`,
            s = A && !e.copyValue && L(e.href),
            c = s ? p.formatMessage(Te.downloadMac) : W(e.label);
        if (e.copyValue) {
            let t = `${c}-${e.copyValue}`;
            return Ge(e, n, t, a, o)
        }
        if (!i) return x === `mobile` && l === `contentful_ctas` ? (0, Y.jsx)(`p`, {
            className: `text-token-text-secondary text-center text-sm leading-relaxed`,
            children: c
        }) : qe(e, n, a);
        if (x === `mac` && u(e.href) && !s) {
            if (w == null) return qe({
                ...e,
                label: Z.loading
            }, n, a);
            if (w === re.UNKNOWN) return X(e, n, a)
        }
        return (0, Y.jsx)(r, {
            type: `button`,
            size: `large`,
            color: G(a),
            className: b(n ? `w-full` : f),
            "data-analytics-action": e.analyticsAction,
            onClick: () => q(e),
            children: c
        })
    }, t[61] = w, t[62] = f, t[63] = q, t[64] = p, t[65] = l, t[66] = x, t[67] = Ge, t[68] = X, t[69] = qe, t[70] = G, t[71] = W, t[72] = A, t[73] = Je) : Je = t[73];
    let Ye = Je,
        Xe;
    t[74] !== f || t[75] !== v || t[76] !== H || t[77] !== q || t[78] !== p || t[79] !== h || t[80] !== G || t[81] !== W || t[82] !== A ? (Xe = (e, t, n) => {
        let i = t.fullWidth ?? !1,
            a = t.dropdownCtaLabel ?? e[0]?.label,
            o = a ? W(a) : ``,
            s = h === n,
            c = G(t.ctaStyle);
        return a ? (0, Y.jsxs)(pe, {
            open: s,
            onOpenChange: e => {
                _(t => e ? n : t === n ? null : t)
            },
            children: [(0, Y.jsx)(he, {
                asChild: !0,
                children: (0, Y.jsx)(r, {
                    type: `button`,
                    size: `large`,
                    color: c,
                    className: b(i ? `w-full` : f),
                    children: (0, Y.jsxs)(`span`, {
                        className: `flex w-full items-center justify-center gap-2`,
                        children: [(0, Y.jsx)(`span`, {
                            className: `truncate`,
                            children: o
                        }), s ? (0, Y.jsx)(ge, {
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
                                    i = A && !n && L(e.href) ? p.formatMessage(Te.downloadMac) : W(e.label),
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
                                            n ? H(e, a, e.copyValue ?? ``) : q(e), _(null)
                                        },
                                        children: [(0, Y.jsx)(`span`, {
                                            children: i
                                        }), n ? (0, Y.jsx)(`span`, {
                                            className: `text-token-text-tertiary`,
                                            children: v === a ? p.formatMessage(Z.copied) : p.formatMessage(Z.copy)
                                        }) : null]
                                    })
                                }, `${i}-${t}`)
                            })
                        })
                    })
                })
            })]
        }) : null
    }, t[74] = f, t[75] = v, t[76] = H, t[77] = q, t[78] = p, t[79] = h, t[80] = G, t[81] = W, t[82] = A, t[83] = Xe) : Xe = t[83];
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
    if (t[88] !== f || t[89] !== o || t[90] !== p || t[91] !== m || t[92] !== x || t[93] !== B || t[94] !== $e) {
        let e = B.some(je);
        t[97] !== f || t[98] !== o || t[99] !== p || t[100] !== m || t[101] !== x ? (Q = x == null ? (0, Y.jsx)(`div`, {
            className: b(`flex flex-col gap-3`, o),
            children: (0, Y.jsx)(`div`, {
                className: `relative z-10 flex flex-row flex-wrap items-center justify-center gap-3`,
                children: (0, Y.jsx)(r, {
                    type: `button`,
                    size: `large`,
                    disabled: !0,
                    loading: !0,
                    color: Oe(`primary`, m),
                    className: b(`min-w-40`, f),
                    children: p.formatMessage(Z.loading)
                })
            })
        }) : null, t[97] = f, t[98] = o, t[99] = p, t[100] = m, t[101] = x, t[102] = Q) : Q = t[102], $ = x == null ? null : (0, Y.jsx)(`div`, {
            className: b(`flex flex-col gap-3`, e && `w-full flex-1`, o),
            children: B.map((e, t) => {
                let n = e.some(Ae),
                    r = e.find(ke)?.alignmentCollapsed;
                return (0, Y.jsx)(`div`, {
                    className: b(`relative z-10 flex gap-3`, {
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
                            className: b({
                                "w-full": n
                            }),
                            children: i
                        }, `cta-${t}-${r}`) : null
                    })
                }, `cta-row-${t}`)
            })
        }), t[88] = f, t[89] = o, t[90] = p, t[91] = m, t[92] = x, t[93] = B, t[94] = $e, t[95] = Q, t[96] = $
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
    return !e.copyValue && u(e.href)
}
var Re, J, Y, ze, Be, X, Ve, He, Ue, Z, We = e((() => {
    Re = se(), F(), I(), m(), N(), P(), M(), j(), h(), f(), C(), z(), w(), R(), fe(), ie(), J = t(k()), O(), De(), Y = ae(), ze = () => typeof navigator > `u` ? `desktop` : l() ? `mobile` : o() ? `windows` : v() ? `mac` : `desktop`, Be = e => e.trim().length === 0, X = e => /^https?:\/\//i.test(e) || e.startsWith(`//`), Ve = e => X(e), He = 50, Ue = (e, t) => e ? t === `mobile` ? e.mobile ?? [] : t === `mac` ? e.mac ?? [] : t === `windows` ? e.windows ?? e.desktop ?? [] : e.desktop ?? [] : [], Z = E({
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
//# sourceMappingURL=50217878-klqn7yj7okyv7ya0.js.map