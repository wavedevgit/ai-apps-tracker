import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aat as r,
    Al as i,
    Ant as a,
    Eat as o,
    Fnt as s,
    Ml as c,
    Mnt as l,
    ON as ee,
    Oj as u,
    Q7 as d,
    Sj as f,
    TN as p,
    bj as te,
    c7 as m,
    cW as h,
    dC as ne,
    dnt as re,
    eE as g,
    fC as _,
    kl as v,
    l7 as y,
    lW as b,
    mj as x,
    pj as S,
    pnt as C,
    q7 as ie,
    unt as ae
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    At as w,
    Bn as oe,
    Ln as T,
    Q as E,
    Rn as D,
    Vn as O,
    p as k,
    s as se,
    wn as ce,
    zn as le
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Irt as ue,
    Lrt as de,
    c5t as fe,
    i5t as pe,
    o5t as me,
    s5t as he,
    u5t as ge
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    By as _e,
    Jy as ve,
    Ky as ye,
    Rl as be,
    Vy as A,
    Yy as j,
    qy as M,
    zl as N
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    AS as P,
    jS as xe,
    lC as F,
    zC as Se
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    a as Ce
} from "./9ac7a75a-chp6ksomhx4r867p.js";
import {
    a as we,
    i as I,
    n as Te,
    r as L,
    t as Ee
} from "./9dade4c6-u0fdvd0b6ffceo87.js";
import {
    o as R
} from "./e19f3910-bvgbooeepbr0f3hn.js";
async function z({
    email: e,
    routePath: t,
    templateId: n
}) {
    let r = v(null, null, null, await i(U));
    return await ie.safePost(`/codex/download-email`, {
        authOption: o.Anonymous,
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
            templateId: r,
            emailSendData: i
        } = e,
        a = (0, V.useRef)(null),
        o = (0, V.useRef)(!1),
        s = le(),
        c = w(),
        [l, ee] = (0, V.useState)(``),
        [u, d] = (0, V.useState)(),
        [f, p] = (0, V.useState)(!1),
        te;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (te = {
        key: `codex-mobile-start-legacy`,
        allowUnauthenticatedTracking: !0
    }, t[0] = te) : te = t[0];
    let {
        trackSelectedPixels: m
    } = xe(te), ne;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = {
        key: Se.CODEX_MOBILE_START,
        allowUnauthenticatedTracking: !0
    }, t[1] = ne) : ne = t[1];
    let {
        trackSelectedPixels: re
    } = xe(ne), g;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (g = () => {
        p(!0), d(void 0), ee(``)
    }, t[2] = g) : g = t[2];
    let _;
    t[3] === s ? _ = t[4] : (_ = () => {
        p(!1), d(s.formatMessage({
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
        mutationFn: z,
        onSuccess: g,
        onError: _,
        onSettled: v
    }, t[6] = _, t[7] = y);
    let b = k(y),
        x;
    t[8] !== i?.successText || t[9] !== f || t[10] !== s ? (x = f && (0, H.jsxs)(H.Fragment, {
        children: [(0, H.jsx)(h, {
            fontSize: `small`
        }), (0, H.jsx)(`div`, {
            className: `text-mkt-h6 mt-2 font-semibold`,
            children: s.formatMessage({
                id: `codex.downloadEmail.success.title`,
                defaultMessage: `Check your inbox`
            })
        }), (0, H.jsx)(`div`, {
            className: `text-token-text-primary/60 mt-3 px-4`,
            children: i?.successText
        })]
    }), t[8] = i?.successText, t[9] = f, t[10] = s, t[11] = x) : x = t[11];
    let S;
    t[12] !== l || t[13] !== i || t[14] !== u || t[15] !== f || t[16] !== s || t[17] !== c || t[18] !== b || t[19] !== r || t[20] !== re || t[21] !== m ? (S = !f && (0, H.jsxs)(`form`, {
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
                d(void 0), o.current = !0, r !== `chatgpt-dots-download-transactional` && (m(), re()), b.mutate({
                    email: l.trim(),
                    routePath: c.pathname,
                    templateId: r
                })
            }
        },
        children: [(0, H.jsxs)(`div`, {
            className: `flex w-full max-w-[275px] flex-col gap-2`,
            children: [i?.title && (0, H.jsx)(`div`, {
                className: `text-token-text-primary text-mkt-h5 font-semibold`,
                children: i.title
            }), (i?.subtitle ?? i?.heading) && (0, H.jsx)(`div`, {
                className: `text-token-text-secondary text-body-small`,
                children: i?.subtitle ?? i?.heading
            })]
        }), (0, H.jsxs)(`div`, {
            className: `flex w-full flex-col gap-2`,
            children: [(0, H.jsx)(ue, {
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
                    ee(e.target.value), u && d(void 0), f && p(!1)
                },
                placeholder: s.formatMessage({
                    id: `So08Qm`,
                    defaultMessage: `Email address`
                }),
                ref: a,
                required: !0,
                type: `email`,
                value: l
            }), (0, H.jsx)(n, {
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
    }), t[12] = l, t[13] = i, t[14] = u, t[15] = f, t[16] = s, t[17] = c, t[18] = b, t[19] = r, t[20] = re, t[21] = m, t[22] = S) : S = t[22];
    let C;
    return t[23] !== x || t[24] !== S ? (C = (0, H.jsxs)(`div`, {
        className: `border-token-border-light bg-token-bg-elevated-primary mt-10 box-border flex w-full flex-col items-center rounded-[36px] border px-4 pt-6 pb-4 text-center shadow-[0_4px_16px_0_rgba(0,0,0,0.05)]`,
        children: [x, S]
    }), t[23] = x, t[24] = S, t[25] = C) : C = t[25], C
}
var B, V, H, U, Oe = e((() => {
    B = ce(), P(), F(), g(), b(), de(), r(), d(), c(), se(), V = t(O()), D(), E(), H = oe(), U = `codex_download_email`
}));

function ke(e, t, n) {
    return e === `purple` ? `purple` : e === `primary` ? `primary` : e === `secondary` ? t ? `primary` : `secondary` : e === `link` ? `ghost` : t ? n ?? `secondary` : `primary`
}

function W(e) {
    "use forget";
    let t = (0, ze.c)(106),
        {
            data: r,
            platformOverride: i,
            onLinkClick: a,
            className: o,
            buttonWidthClassName: s,
            defaultDarkModeButtonColor: c,
            marketingDownloadSource: l
        } = e,
        d = s === void 0 ? `w-56` : s,
        p = le(),
        h = ee(),
        [g, _] = (0, q.useState)(null),
        [v, y] = (0, q.useState)(null),
        [b, S] = (0, q.useState)(i ?? null),
        [C, ie] = (0, q.useState)(null),
        [w, oe] = (0, q.useState)(null),
        T;
    t[0] === r?.mac ? T = t[1] : (T = r?.mac.some(Le) ?? !1, t[0] = r?.mac, t[1] = T);
    let E = T,
        D;
    t[2] !== r?.mac || t[3] !== l || t[4] !== b ? (D = b === `mac` && l != null && (r?.mac.some(Fe) ?? !1), t[2] = r?.mac, t[3] = l, t[4] = b, t[5] = D) : D = t[5];
    let O = D,
        k = O && w === `micro_installer`,
        se;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (se = {
        key: `chatgpt-codex-download`,
        allowUnauthenticatedTracking: !0
    }, t[6] = se) : se = t[6];
    let {
        trackSelectedPixels: ce
    } = xe(se), ue;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (ue = {
        key: Se.CODEX_DOWNLOAD,
        allowUnauthenticatedTracking: !0
    }, t[7] = ue) : ue = t[7];
    let {
        trackSelectedPixels: de
    } = xe(ue), ge;
    t[8] !== de || t[9] !== ce ? (ge = () => {
        de(), ce()
    }, t[8] = de, t[9] = ce, t[10] = ge) : ge = t[10];
    let A = ge,
        j, M;
    t[11] === i ? (j = t[12], M = t[13]) : (j = () => {
        if (i) {
            S(i);
            return
        }
        S(Be())
    }, M = [i], t[11] = i, t[12] = j, t[13] = M), (0, q.useEffect)(j, M);
    let N, P;
    t[14] !== E || t[15] !== O || t[16] !== b ? (P = () => {
        let e = !1;
        return (async () => {
            if (b !== `mac` || !E) return {
                mode: null,
                architecture: null
            };
            let e = O ? Te() : `full_app`;
            return {
                mode: e,
                architecture: e === `micro_installer` ? null : await re()
            }
        })().then(t => {
            let {
                mode: n,
                architecture: r
            } = t;
            e || (oe(n), ie(r))
        }), () => {
            e = !0
        }
    }, N = [b, E, O], t[14] = E, t[15] = O, t[16] = b, t[17] = N, t[18] = P) : (N = t[17], P = t[18]), (0, q.useEffect)(P, N);
    let F, L;
    t[19] === v ? (F = t[20], L = t[21]) : (F = () => {
        if (!v) return;
        let e = setTimeout(() => {
            y(null)
        }, 2e3);
        return () => clearTimeout(e)
    }, L = [v], t[19] = v, t[20] = F, t[21] = L), (0, q.useEffect)(F, L);
    let R;
    t[22] !== r || t[23] !== b ? (R = b == null ? [] : We(r, b), t[22] = r, t[23] = b, t[24] = R) : R = t[24];
    let z = R,
        B;
    t[25] !== a || t[26] !== A ? (B = (e, t, n) => {
        a?.(e), A(), ne(n).then(() => y(t)).catch(Pe)
    }, t[25] = a, t[26] = A, t[27] = B) : B = t[27];
    let V = B,
        H;
    t[28] === p ? H = t[29] : (H = e => typeof e == `string` ? e : p.formatMessage(e), t[28] = p, t[29] = H);
    let U = H,
        Oe;
    t[30] !== c || t[31] !== h ? (Oe = e => ke(e, h, c), t[30] = c, t[31] = h, t[32] = Oe) : Oe = t[32];
    let W = Oe,
        Ne;
    t[33] !== w || t[34] !== l || t[35] !== A ? (Ne = (e, t) => {
        let n = l ? we(e, l, w ?? `full_app`, t) : e;
        x({
            downloadUrl: n,
            surface: `codex_app_announcement`
        }), window.location.assign(n), window.setTimeout(A, Ue)
    }, t[33] = w, t[34] = l, t[35] = A, t[36] = Ne) : Ne = t[36];
    let G = Ne,
        Ie;
    t[37] !== G || t[38] !== w || t[39] !== O || t[40] !== a || t[41] !== b || t[42] !== A || t[43] !== k ? (Ie = async e => {
        if (!Ve(e.href) && !(O && I(e.href) && w == null) && (a?.(e), !(typeof window > `u`))) {
            if (k && I(e.href)) {
                G(e.href, e.analyticsAction);
                return
            }
            if (b !== `desktop` && u(e.href)) {
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
    }, t[37] = G, t[38] = w, t[39] = O, t[40] = a, t[41] = b, t[42] = A, t[43] = k, t[44] = Ie) : Ie = t[44];
    let K = Ie,
        Re;
    t[45] !== G || t[46] !== d || t[47] !== p || t[48] !== a || t[49] !== W ? (Re = (e, t, r) => {
        let i = [{
            label: X.downloadAppleSilicon,
            url: te,
            color: W(r)
        }, {
            label: X.downloadIntelMac,
            url: f,
            color: W(`secondary`)
        }];
        return (0, J.jsx)(`div`, {
            className: m(`flex gap-3`, {
                "w-full flex-col": t,
                "flex-row flex-wrap items-center justify-center": !t
            }),
            children: i.map(r => (0, J.jsx)(n, {
                type: `button`,
                size: `large`,
                color: r.color,
                className: m(t ? `w-full` : d),
                "data-analytics-action": e.analyticsAction,
                onClick: () => {
                    a?.(e), !(typeof window > `u`) && G(r.url, e.analyticsAction)
                },
                children: p.formatMessage(r.label)
            }, r.url))
        })
    }, t[45] = G, t[46] = d, t[47] = p, t[48] = a, t[49] = W, t[50] = Re) : Re = t[50];
    let Y = Re,
        Z;
    t[51] !== d || t[52] !== v || t[53] !== V || t[54] !== W || t[55] !== U ? (Z = (e, t, r, i, a) => {
        let o = v === r ? ve : ye,
            s = U(e.label);
        return (0, J.jsx)(n, {
            type: `button`,
            size: `large`,
            color: W(i),
            className: m(`[container-type:inline-size] font-mono text-[clamp(10px,1.8vw,14px)]`, {
                "w-full": t
            }, !t && d),
            "data-analytics-action": e.analyticsAction,
            onClick: () => V(e, r, e.copyValue ?? ``),
            children: (0, J.jsxs)(`span`, {
                className: m(`flex w-full items-center gap-[calc(0.3em+4px)]`, {
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
    }, t[51] = d, t[52] = v, t[53] = V, t[54] = W, t[55] = U, t[56] = Z) : Z = t[56];
    let Ge = Z,
        Ke;
    t[57] !== d || t[58] !== W || t[59] !== U ? (Ke = (e, t, r) => {
        let i = U(e.label);
        return (0, J.jsx)(n, {
            type: `button`,
            size: `large`,
            disabled: !0,
            color: W(r),
            className: m(t ? `w-full` : d),
            children: i
        })
    }, t[57] = d, t[58] = W, t[59] = U, t[60] = Ke) : Ke = t[60];
    let qe = Ke,
        Je;
    t[61] !== C || t[62] !== d || t[63] !== K || t[64] !== p || t[65] !== l || t[66] !== b || t[67] !== Ge || t[68] !== Y || t[69] !== qe || t[70] !== W || t[71] !== U || t[72] !== k ? (Je = (e, t) => {
        let r = t.fullWidth ?? !1,
            i = !Ve(e.href),
            a = t.ctaStyle,
            o = t.ctaStyle === `link`,
            s = k && !e.copyValue && I(e.href),
            c = s ? p.formatMessage(Ee.downloadMac) : U(e.label);
        if (e.copyValue) {
            let t = `${c}-${e.copyValue}`;
            return Ge(e, r, t, a, o)
        }
        if (!i) return b === `mobile` && l === `contentful_ctas` ? (0, J.jsx)(`p`, {
            className: `text-token-text-secondary text-center text-sm leading-relaxed`,
            children: c
        }) : qe(e, r, a);
        if (b === `mac` && u(e.href) && !s) {
            if (C == null) return qe({
                ...e,
                label: X.loading
            }, r, a);
            if (C === ae.UNKNOWN) return Y(e, r, a)
        }
        return (0, J.jsx)(n, {
            type: `button`,
            size: `large`,
            color: W(a),
            className: m(r ? `w-full` : d),
            "data-analytics-action": e.analyticsAction,
            onClick: () => K(e),
            children: c
        })
    }, t[61] = C, t[62] = d, t[63] = K, t[64] = p, t[65] = l, t[66] = b, t[67] = Ge, t[68] = Y, t[69] = qe, t[70] = W, t[71] = U, t[72] = k, t[73] = Je) : Je = t[73];
    let Ye = Je,
        Xe;
    t[74] !== d || t[75] !== v || t[76] !== V || t[77] !== K || t[78] !== p || t[79] !== g || t[80] !== W || t[81] !== U || t[82] !== k ? (Xe = (e, t, r) => {
        let i = t.fullWidth ?? !1,
            a = t.dropdownCtaLabel ?? e[0]?.label,
            o = a ? U(a) : ``,
            s = g === r,
            c = W(t.ctaStyle);
        return a ? (0, J.jsxs)(he, {
            open: s,
            onOpenChange: e => {
                _(t => e ? r : t === r ? null : t)
            },
            children: [(0, J.jsx)(fe, {
                asChild: !0,
                children: (0, J.jsx)(n, {
                    type: `button`,
                    size: `large`,
                    color: c,
                    className: m(i ? `w-full` : d),
                    children: (0, J.jsxs)(`span`, {
                        className: `flex w-full items-center justify-center gap-2`,
                        children: [(0, J.jsx)(`span`, {
                            className: `truncate`,
                            children: o
                        }), s ? (0, J.jsx)(be, {
                            className: `icon-sm`
                        }) : (0, J.jsx)(_e, {
                            className: `icon-sm`
                        })]
                    })
                })
            }), (0, J.jsx)(me, {
                children: (0, J.jsx)(pe, {
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
                                    i = k && !n && I(e.href) ? p.formatMessage(Ee.downloadMac) : U(e.label),
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
                                            n ? V(e, a, e.copyValue ?? ``) : K(e), _(null)
                                        },
                                        children: [(0, J.jsx)(`span`, {
                                            children: i
                                        }), n ? (0, J.jsx)(`span`, {
                                            className: `text-token-text-tertiary`,
                                            children: v === a ? p.formatMessage(X.copied) : p.formatMessage(X.copy)
                                        }) : null]
                                    })
                                }, `${i}-${t}`)
                            })
                        })
                    })
                })
            })]
        }) : null
    }, t[74] = d, t[75] = v, t[76] = V, t[77] = K, t[78] = p, t[79] = g, t[80] = W, t[81] = U, t[82] = k, t[83] = Xe) : Xe = t[83];
    let Ze = Xe,
        Qe;
    t[84] !== Ze || t[85] !== Ye || t[86] !== k ? (Qe = (e, t, n) => {
        let r = !1,
            i = (e.links ?? []).filter(e => !k || e.copyValue || !I(e.href) ? !0 : r ? !1 : (r = !0, !0));
        return i.length ? i.length > 1 ? Ze(i, e, `${t}-${n}`) : Ye(i[0], e) : null
    }, t[84] = Ze, t[85] = Ye, t[86] = k, t[87] = Qe) : Qe = t[87];
    let $e = Qe;
    if (b != null && !z.length) return null;
    let Q, $;
    if (t[88] !== d || t[89] !== o || t[90] !== p || t[91] !== h || t[92] !== b || t[93] !== z || t[94] !== $e) {
        let e = z.some(Me);
        t[97] !== d || t[98] !== o || t[99] !== p || t[100] !== h || t[101] !== b ? (Q = b == null ? (0, J.jsx)(`div`, {
            className: m(`flex flex-col gap-3`, o),
            children: (0, J.jsx)(`div`, {
                className: `relative z-10 flex flex-row flex-wrap items-center justify-center gap-3`,
                children: (0, J.jsx)(n, {
                    type: `button`,
                    size: `large`,
                    disabled: !0,
                    loading: !0,
                    color: ke(`primary`, h),
                    className: m(`min-w-40`, d),
                    children: p.formatMessage(X.loading)
                })
            })
        }) : null, t[97] = d, t[98] = o, t[99] = p, t[100] = h, t[101] = b, t[102] = Q) : Q = t[102], $ = b == null ? null : (0, J.jsx)(`div`, {
            className: m(`flex flex-col gap-3`, e && `w-full flex-1`, o),
            children: z.map((e, t) => {
                let n = e.some(je),
                    r = e.find(Ae)?.alignmentCollapsed;
                return (0, J.jsx)(`div`, {
                    className: m(`relative z-10 flex gap-3`, {
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
                            className: m({
                                "w-full": n
                            }),
                            children: i
                        }, `cta-${t}-${r}`) : null
                    })
                }, `cta-row-${t}`)
            })
        }), t[88] = d, t[89] = o, t[90] = p, t[91] = h, t[92] = b, t[93] = z, t[94] = $e, t[95] = Q, t[96] = $
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
    return !e.copyValue && u(e.href)
}
var ze, q, J, Be, Ve, Y, He, Ue, We, X, Z = e((() => {
    ze = ce(), P(), F(), g(), j(), A(), N(), M(), _(), p(), C(), R(), S(), L(), ge(), y(), q = t(O()), D(), Oe(), J = oe(), Be = () => typeof navigator > `u` ? `desktop` : l() ? `mobile` : s() ? `windows` : a() ? `mac` : `desktop`, Ve = e => e.trim().length === 0, Y = e => /^https?:\/\//i.test(e) || e.startsWith(`//`), He = e => Y(e), Ue = 50, We = (e, t) => e ? t === `mobile` ? e.mobile ?? [] : t === `mac` ? e.mac ?? [] : t === `windows` ? e.windows ?? e.desktop ?? [] : e.desktop ?? [] : [], X = T({
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
//# sourceMappingURL=50217878-jk7kk16paopw643l.js.map