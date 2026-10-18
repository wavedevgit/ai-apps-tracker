import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    Ait as r,
    HS as i,
    Itt as a,
    Pit as o,
    Ptt as s,
    QA as c,
    RU as l,
    UA as u,
    VS as ee,
    WA as d,
    XA as f,
    _tt as p,
    b5 as m,
    fl as h,
    htt as te,
    i7 as g,
    iN as ne,
    ij as _,
    kT as v,
    l7 as y,
    ll as b,
    mtt as x,
    tN as S,
    ul as C,
    y5 as w,
    zU as re,
    ztt as ie
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as T,
    Bn as ae,
    Ln as E,
    Rn as D,
    Vn as O,
    jt as k,
    p as A,
    s as oe,
    wn as se,
    zn as ce
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    C0t as le,
    Frt as ue,
    Irt as de,
    S0t as fe,
    T0t as pe,
    x0t as me,
    y0t as he
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Qy as j,
    Rl as ge,
    Uy as _e,
    Wy as M,
    Xy as N,
    Yy as ve,
    Zy as ye,
    zl as P
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    hw as be,
    oC as F,
    sC as xe,
    zC as I
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as Se
} from "./9ac7a75a-fqy7qnhwh7jd5rfv.js";
import {
    a as Ce,
    i as L,
    n as we,
    r as R,
    t as Te
} from "./9dade4c6-kl4b5zuolnzbjrn0.js";
import {
    o as z
} from "./e19f3910-nriy7br1qc4gkn80.js";
async function B({
    email: e,
    routePath: t,
    templateId: n
}) {
    let i = b(null, null, null, await C(W));
    return await g.safePost(`/codex/download-email`, {
        authOption: r.Anonymous,
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
            templateId: n,
            emailSendData: r
        } = e,
        i = (0, H.useRef)(null),
        a = (0, H.useRef)(!1),
        o = ce(),
        s = k(),
        [c, u] = (0, H.useState)(``),
        [ee, d] = (0, H.useState)(),
        [f, p] = (0, H.useState)(!1),
        m;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
        key: `codex-mobile-start-legacy`,
        allowUnauthenticatedTracking: !0
    }, t[0] = m) : m = t[0];
    let {
        trackSelectedPixels: h
    } = xe(m), te;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (te = {
        key: be.CODEX_MOBILE_START,
        allowUnauthenticatedTracking: !0
    }, t[1] = te) : te = t[1];
    let {
        trackSelectedPixels: g
    } = xe(te), ne;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = () => {
        p(!0), d(void 0), u(``)
    }, t[2] = ne) : ne = t[2];
    let _;
    t[3] === o ? _ = t[4] : (_ = () => {
        p(!1), d(o.formatMessage({
            id: `keVamY`,
            defaultMessage: `Failed to send email.`
        }))
    }, t[3] = o, t[4] = _);
    let y;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (y = () => {
        a.current = !1
    }, t[5] = y) : y = t[5];
    let b;
    t[6] === _ ? b = t[7] : (b = {
        mutationFn: B,
        onSuccess: ne,
        onError: _,
        onSettled: y
    }, t[6] = _, t[7] = b);
    let x = A(b),
        S;
    t[8] !== r?.successText || t[9] !== f || t[10] !== o ? (S = f && (0, U.jsxs)(U.Fragment, {
        children: [(0, U.jsx)(l, {
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
    }), t[8] = r?.successText, t[9] = f, t[10] = o, t[11] = S) : S = t[11];
    let C;
    t[12] !== c || t[13] !== r || t[14] !== ee || t[15] !== f || t[16] !== o || t[17] !== s || t[18] !== x || t[19] !== n || t[20] !== g || t[21] !== h ? (C = !f && (0, U.jsxs)(`form`, {
        className: `flex w-full flex-col items-center gap-4`,
        noValidate: !0,
        onSubmit: e => {
            if (e.preventDefault(), a.current || x.isPending) return;
            let t = i.current;
            if (t) {
                if (!t.checkValidity()) {
                    d(o.formatMessage({
                        id: `s1wH8Z`,
                        defaultMessage: `Enter a valid email address.`
                    }));
                    return
                }
                d(void 0), a.current = !0, n !== `chatgpt-dots-download-transactional` && (h(), g()), x.mutate({
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
            children: [(0, U.jsx)(ue, {
                ariaLabel: o.formatMessage({
                    id: `Rr9CE5`,
                    defaultMessage: `Email address`
                }),
                autoComplete: `email`,
                className: `bg-token-bg-elevated-primary box-border flex h-11.5 flex-col justify-center rounded-full! px-6! py-2.5!`,
                error: ee,
                inputClassName: `placeholder:text-body-small placeholder:text-token-text-tertiary bg-transparent!`,
                name: `codex-download-email`,
                onChange: e => {
                    u(e.target.value), ee && d(void 0), f && p(!1)
                },
                placeholder: o.formatMessage({
                    id: `So08Qm`,
                    defaultMessage: `Email address`
                }),
                ref: i,
                required: !0,
                type: `email`,
                value: c
            }), (0, U.jsx)(v, {
                fullWidth: !0,
                loading: x.isPending,
                size: `large`,
                type: `submit`,
                children: o.formatMessage({
                    id: `codex.downloadEmail.submit.label`,
                    defaultMessage: `Email me the link`
                })
            })]
        })]
    }), t[12] = c, t[13] = r, t[14] = ee, t[15] = f, t[16] = o, t[17] = s, t[18] = x, t[19] = n, t[20] = g, t[21] = h, t[22] = C) : C = t[22];
    let w;
    return t[23] !== S || t[24] !== C ? (w = (0, U.jsxs)(`div`, {
        className: `border-token-border-light bg-token-bg-elevated-primary mt-10 box-border flex w-full flex-col items-center rounded-[36px] border px-4 pt-6 pb-4 text-center shadow-[0_4px_16px_0_rgba(0,0,0,0.05)]`,
        children: [S, C]
    }), t[23] = S, t[24] = C, t[25] = w) : w = t[25], w
}
var V, H, U, W, De = e((() => {
    V = se(), F(), I(), n(), re(), de(), o(), y(), h(), oe(), H = t(O()), D(), T(), U = ae(), W = `codex_download_email`
}));

function Oe(e, t, n) {
    return e === `purple` ? `purple` : e === `primary` ? `primary` : e === `secondary` ? t ? `primary` : `secondary` : e === `link` ? `ghost` : t ? n ?? `secondary` : `primary`
}

function G(e) {
    "use forget";
    let t = (0, Re.c)(106),
        {
            data: n,
            platformOverride: r,
            onLinkClick: i,
            className: a,
            buttonWidthClassName: o,
            defaultDarkModeButtonColor: s,
            marketingDownloadSource: l
        } = e,
        u = o === void 0 ? `w-56` : o,
        p = ce(),
        m = ne(),
        [h, g] = (0, J.useState)(null),
        [y, b] = (0, J.useState)(null),
        [S, C] = (0, J.useState)(r ?? null),
        [re, ie] = (0, J.useState)(null),
        [T, ae] = (0, J.useState)(null),
        E;
    t[0] === n?.mac ? E = t[1] : (E = n?.mac.some(Ie) ?? !1, t[0] = n?.mac, t[1] = E);
    let D = E,
        O;
    t[2] !== n?.mac || t[3] !== l || t[4] !== S ? (O = S === `mac` && l != null && (n?.mac.some(Pe) ?? !1), t[2] = n?.mac, t[3] = l, t[4] = S, t[5] = O) : O = t[5];
    let k = O,
        A = k && T === `micro_installer`,
        oe;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (oe = {
        key: `chatgpt-codex-download`,
        allowUnauthenticatedTracking: !0
    }, t[6] = oe) : oe = t[6];
    let {
        trackSelectedPixels: se
    } = xe(oe), ue;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (ue = {
        key: be.CODEX_DOWNLOAD,
        allowUnauthenticatedTracking: !0
    }, t[7] = ue) : ue = t[7];
    let {
        trackSelectedPixels: de
    } = xe(ue), pe;
    t[8] !== de || t[9] !== se ? (pe = () => {
        de(), se()
    }, t[8] = de, t[9] = se, t[10] = pe) : pe = t[10];
    let j = pe,
        M, N;
    t[11] === r ? (M = t[12], N = t[13]) : (M = () => {
        if (r) {
            C(r);
            return
        }
        C(ze())
    }, N = [r], t[11] = r, t[12] = M, t[13] = N), (0, J.useEffect)(M, N);
    let P, F;
    t[14] !== D || t[15] !== k || t[16] !== S ? (F = () => {
        let e = !1;
        return (async () => {
            if (S !== `mac` || !D) return {
                mode: null,
                architecture: null
            };
            let e = k ? we() : `full_app`;
            return {
                mode: e,
                architecture: e === `micro_installer` ? null : await te()
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
    }, P = [S, D, k], t[14] = D, t[15] = k, t[16] = S, t[17] = P, t[18] = F) : (P = t[17], F = t[18]), (0, J.useEffect)(F, P);
    let I, R;
    t[19] === y ? (I = t[20], R = t[21]) : (I = () => {
        if (!y) return;
        let e = setTimeout(() => {
            b(null)
        }, 2e3);
        return () => clearTimeout(e)
    }, R = [y], t[19] = y, t[20] = I, t[21] = R), (0, J.useEffect)(I, R);
    let z;
    t[22] !== n || t[23] !== S ? (z = S == null ? [] : Ue(n, S), t[22] = n, t[23] = S, t[24] = z) : z = t[24];
    let B = z,
        V;
    t[25] !== i || t[26] !== j ? (V = (e, t, n) => {
        i?.(e), j(), ee(n).then(() => b(t)).catch(Ne)
    }, t[25] = i, t[26] = j, t[27] = V) : V = t[27];
    let H = V,
        U;
    t[28] === p ? U = t[29] : (U = e => typeof e == `string` ? e : p.formatMessage(e), t[28] = p, t[29] = U);
    let W = U,
        De;
    t[30] !== s || t[31] !== m ? (De = e => Oe(e, m, s), t[30] = s, t[31] = m, t[32] = De) : De = t[32];
    let G = De,
        Me;
    t[33] !== T || t[34] !== l || t[35] !== j ? (Me = (e, t) => {
        let n = l ? Ce(e, l, T ?? `full_app`, t) : e;
        d({
            downloadUrl: n,
            surface: `codex_app_announcement`
        }), window.location.assign(n), window.setTimeout(j, He)
    }, t[33] = T, t[34] = l, t[35] = j, t[36] = Me) : Me = t[36];
    let K = Me,
        Fe;
    t[37] !== K || t[38] !== T || t[39] !== k || t[40] !== i || t[41] !== S || t[42] !== j || t[43] !== A ? (Fe = async e => {
        if (!Be(e.href) && !(k && L(e.href) && T == null) && (i?.(e), !(typeof window > `u`))) {
            if (A && L(e.href)) {
                K(e.href, e.analyticsAction);
                return
            }
            if (S !== `desktop` && _(e.href)) {
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
    }, t[37] = K, t[38] = T, t[39] = k, t[40] = i, t[41] = S, t[42] = j, t[43] = A, t[44] = Fe) : Fe = t[44];
    let q = Fe,
        Le;
    t[45] !== K || t[46] !== u || t[47] !== p || t[48] !== i || t[49] !== G ? (Le = (e, t, n) => {
        let r = [{
            label: Z.downloadAppleSilicon,
            url: f,
            color: G(n)
        }, {
            label: Z.downloadIntelMac,
            url: c,
            color: G(`secondary`)
        }];
        return (0, Y.jsx)(`div`, {
            className: w(`flex gap-3`, {
                "w-full flex-col": t,
                "flex-row flex-wrap items-center justify-center": !t
            }),
            children: r.map(n => (0, Y.jsx)(v, {
                type: `button`,
                size: `large`,
                color: n.color,
                className: w(t ? `w-full` : u),
                "data-analytics-action": e.analyticsAction,
                onClick: () => {
                    i?.(e), !(typeof window > `u`) && K(n.url, e.analyticsAction)
                },
                children: p.formatMessage(n.label)
            }, n.url))
        })
    }, t[45] = K, t[46] = u, t[47] = p, t[48] = i, t[49] = G, t[50] = Le) : Le = t[50];
    let X = Le,
        We;
    t[51] !== u || t[52] !== y || t[53] !== H || t[54] !== G || t[55] !== W ? (We = (e, t, n, r, i) => {
        let a = y === n ? ye : ve,
            o = W(e.label);
        return (0, Y.jsx)(v, {
            type: `button`,
            size: `large`,
            color: G(r),
            className: w(`[container-type:inline-size] font-mono text-[clamp(10px,1.8vw,14px)]`, {
                "w-full": t
            }, !t && u),
            "data-analytics-action": e.analyticsAction,
            onClick: () => H(e, n, e.copyValue ?? ``),
            children: (0, Y.jsxs)(`span`, {
                className: w(`flex w-full items-center gap-[calc(0.3em+4px)]`, {
                    "justify-start": i,
                    "justify-center": !i
                }),
                children: [(0, Y.jsx)(`span`, {
                    className: `text-[clamp(10px,3.4cqw,14px)] whitespace-nowrap`,
                    children: o
                }), (0, Y.jsx)(a, {
                    className: `icon-sm`
                })]
            })
        })
    }, t[51] = u, t[52] = y, t[53] = H, t[54] = G, t[55] = W, t[56] = We) : We = t[56];
    let Ge = We,
        Ke;
    t[57] !== u || t[58] !== G || t[59] !== W ? (Ke = (e, t, n) => {
        let r = W(e.label);
        return (0, Y.jsx)(v, {
            type: `button`,
            size: `large`,
            disabled: !0,
            color: G(n),
            className: w(t ? `w-full` : u),
            children: r
        })
    }, t[57] = u, t[58] = G, t[59] = W, t[60] = Ke) : Ke = t[60];
    let qe = Ke,
        Je;
    t[61] !== re || t[62] !== u || t[63] !== q || t[64] !== p || t[65] !== l || t[66] !== S || t[67] !== Ge || t[68] !== X || t[69] !== qe || t[70] !== G || t[71] !== W || t[72] !== A ? (Je = (e, t) => {
        let n = t.fullWidth ?? !1,
            r = !Be(e.href),
            i = t.ctaStyle,
            a = t.ctaStyle === `link`,
            o = A && !e.copyValue && L(e.href),
            s = o ? p.formatMessage(Te.downloadMac) : W(e.label);
        if (e.copyValue) {
            let t = `${s}-${e.copyValue}`;
            return Ge(e, n, t, i, a)
        }
        if (!r) return S === `mobile` && l === `contentful_ctas` ? (0, Y.jsx)(`p`, {
            className: `text-token-text-secondary text-center text-sm leading-relaxed`,
            children: s
        }) : qe(e, n, i);
        if (S === `mac` && _(e.href) && !o) {
            if (re == null) return qe({
                ...e,
                label: Z.loading
            }, n, i);
            if (re === x.UNKNOWN) return X(e, n, i)
        }
        return (0, Y.jsx)(v, {
            type: `button`,
            size: `large`,
            color: G(i),
            className: w(n ? `w-full` : u),
            "data-analytics-action": e.analyticsAction,
            onClick: () => q(e),
            children: s
        })
    }, t[61] = re, t[62] = u, t[63] = q, t[64] = p, t[65] = l, t[66] = S, t[67] = Ge, t[68] = X, t[69] = qe, t[70] = G, t[71] = W, t[72] = A, t[73] = Je) : Je = t[73];
    let Ye = Je,
        Xe;
    t[74] !== u || t[75] !== y || t[76] !== H || t[77] !== q || t[78] !== p || t[79] !== h || t[80] !== G || t[81] !== W || t[82] !== A ? (Xe = (e, t, n) => {
        let r = t.fullWidth ?? !1,
            i = t.dropdownCtaLabel ?? e[0]?.label,
            a = i ? W(i) : ``,
            o = h === n,
            s = G(t.ctaStyle);
        return i ? (0, Y.jsxs)(fe, {
            open: o,
            onOpenChange: e => {
                g(t => e ? n : t === n ? null : t)
            },
            children: [(0, Y.jsx)(le, {
                asChild: !0,
                children: (0, Y.jsx)(v, {
                    type: `button`,
                    size: `large`,
                    color: s,
                    className: w(r ? `w-full` : u),
                    children: (0, Y.jsxs)(`span`, {
                        className: `flex w-full items-center justify-center gap-2`,
                        children: [(0, Y.jsx)(`span`, {
                            className: `truncate`,
                            children: a
                        }), o ? (0, Y.jsx)(ge, {
                            className: `icon-sm`
                        }) : (0, Y.jsx)(_e, {
                            className: `icon-sm`
                        })]
                    })
                })
            }), (0, Y.jsx)(me, {
                children: (0, Y.jsx)(he, {
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
                                            n ? H(e, a, e.copyValue ?? ``) : q(e), g(null)
                                        },
                                        children: [(0, Y.jsx)(`span`, {
                                            children: i
                                        }), n ? (0, Y.jsx)(`span`, {
                                            className: `text-token-text-tertiary`,
                                            children: y === a ? p.formatMessage(Z.copied) : p.formatMessage(Z.copy)
                                        }) : null]
                                    })
                                }, `${i}-${t}`)
                            })
                        })
                    })
                })
            })]
        }) : null
    }, t[74] = u, t[75] = y, t[76] = H, t[77] = q, t[78] = p, t[79] = h, t[80] = G, t[81] = W, t[82] = A, t[83] = Xe) : Xe = t[83];
    let Ze = Xe,
        Qe;
    t[84] !== Ze || t[85] !== Ye || t[86] !== A ? (Qe = (e, t, n) => {
        let r = !1,
            i = (e.links ?? []).filter(e => !A || e.copyValue || !L(e.href) ? !0 : r ? !1 : (r = !0, !0));
        return i.length ? i.length > 1 ? Ze(i, e, `${t}-${n}`) : Ye(i[0], e) : null
    }, t[84] = Ze, t[85] = Ye, t[86] = A, t[87] = Qe) : Qe = t[87];
    let $e = Qe;
    if (S != null && !B.length) return null;
    let Q, $;
    if (t[88] !== u || t[89] !== a || t[90] !== p || t[91] !== m || t[92] !== S || t[93] !== B || t[94] !== $e) {
        let e = B.some(je);
        t[97] !== u || t[98] !== a || t[99] !== p || t[100] !== m || t[101] !== S ? (Q = S == null ? (0, Y.jsx)(`div`, {
            className: w(`flex flex-col gap-3`, a),
            children: (0, Y.jsx)(`div`, {
                className: `relative z-10 flex flex-row flex-wrap items-center justify-center gap-3`,
                children: (0, Y.jsx)(v, {
                    type: `button`,
                    size: `large`,
                    disabled: !0,
                    loading: !0,
                    color: Oe(`primary`, m),
                    className: w(`min-w-40`, u),
                    children: p.formatMessage(Z.loading)
                })
            })
        }) : null, t[97] = u, t[98] = a, t[99] = p, t[100] = m, t[101] = S, t[102] = Q) : Q = t[102], $ = S == null ? null : (0, Y.jsx)(`div`, {
            className: w(`flex flex-col gap-3`, e && `w-full flex-1`, a),
            children: B.map((e, t) => {
                let n = e.some(Ae),
                    r = e.find(ke)?.alignmentCollapsed;
                return (0, Y.jsx)(`div`, {
                    className: w(`relative z-10 flex gap-3`, {
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
                            className: w({
                                "w-full": n
                            }),
                            children: i
                        }, `cta-${t}-${r}`) : null
                    })
                }, `cta-row-${t}`)
            })
        }), t[88] = u, t[89] = a, t[90] = p, t[91] = m, t[92] = S, t[93] = B, t[94] = $e, t[95] = Q, t[96] = $
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
    return !e.copyValue && _(e.href)
}
var Re, J, Y, ze, Be, X, Ve, He, Ue, Z, We = e((() => {
    Re = se(), F(), I(), n(), j(), M(), P(), N(), i(), S(), p(), z(), u(), R(), pe(), m(), J = t(O()), D(), De(), Y = ae(), ze = () => typeof navigator > `u` ? `desktop` : a() ? `mobile` : ie() ? `windows` : s() ? `mac` : `desktop`, Be = e => e.trim().length === 0, X = e => /^https?:\/\//i.test(e) || e.startsWith(`//`), Ve = e => X(e), He = 50, Ue = (e, t) => e ? t === `mobile` ? e.mobile ?? [] : t === `mac` ? e.mac ?? [] : t === `windows` ? e.windows ?? e.desktop ?? [] : e.desktop ?? [] : [], Z = E({
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
//# sourceMappingURL=50217878-lz2bqkpw2xcytqxi.js.map