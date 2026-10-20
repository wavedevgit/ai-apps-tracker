import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $rt as r,
    A0 as i,
    BA as a,
    C1 as o,
    C8 as s,
    Ci as c,
    Ew as l,
    Gs as u,
    I0 as d,
    JT as f,
    Ks as p,
    L1 as m,
    LA as h,
    N1 as g,
    N5 as _,
    RA as v,
    RU as y,
    Si as ee,
    Tw as te,
    VA as b,
    WA as ne,
    Wrt as re,
    Xs as x,
    _A as ie,
    _N as S,
    at as C,
    bA as w,
    bi as T,
    cL as E,
    fc as D,
    h5 as O,
    h8 as k,
    hc as ae,
    it as A,
    j1 as oe,
    mo as j,
    nt as M,
    ot as N,
    qT as P,
    sL as F,
    tt as I,
    vN as se,
    w8 as L,
    wi as R,
    x5 as ce,
    yA as z,
    zU as le
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    At as ue,
    Bn as de,
    Ln as B,
    N as fe,
    Nn as V,
    O as pe,
    Q as me,
    Rn as H,
    Vn as he,
    s as U,
    wn as ge,
    zn as _e
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Awn as ve,
    B9t as ye,
    BWt as be,
    Ejn as xe,
    JWt as Se,
    K9t as W,
    LUt as Ce,
    LWt as we,
    NHn as Te,
    PHn as G,
    QWt as Ee,
    RUt as K,
    RWt as q,
    U9t as J,
    UWt as De,
    XWt as Oe,
    YWt as ke,
    ZWt as Ae,
    eTn as je,
    j9t as Y,
    kwn as X,
    lSn as Z,
    oGt as Me,
    q9t as Ne,
    qWt as Pe,
    qjn as Fe,
    sGt as Ie,
    tTn as Le,
    xwn as Re,
    zWt as ze
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Gh as Be,
    Jy as Ve,
    Kh as He,
    Yy as Ue
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    Au as We,
    Lb as Ge,
    _c as Ke,
    gc as qe,
    ju as Je,
    ny as Ye,
    xy as Xe
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    i as Ze,
    t as Qe
} from "./55904901-jldq49nzssgkpqgh.js";
var $e = t({
    LibraryProviderConnectAction: () => at,
    LibraryProviderConnectionRow: () => ct,
    LibraryProviderPastedLinkConnectAnnouncement: () => st
});

function et(e) {
    return e.state.status === `error` && e.state.fetchStatus === `idle`
}

function tt() {
    return !1
}
var nt, rt, Q, $, it, at, ot, st, ct, lt = e((() => {
    nt = ge(), X(), Y(), f(), l(), j(), w(), K(), a(), r(), G(), i(), Ue(), Be(), Le(), We(), Xe(), Z(), qe(), q(), W(), Ie(), Ze(), R(), Oe(), J(), Ae(), E(), k(), m(), le(), D(), S(), M(), p(), Ge(), U(), rt = n(he()), H(), me(), Q = de(), $ = B({
        connect: {
            id: `artifacts.library.providers.connect_action.label`,
            defaultMessage: `Connect {provider}`
        },
        reconnectAction: {
            id: `artifacts.library.providers.reconnect_action.label`,
            defaultMessage: `Reconnect {provider}`
        },
        reconnect: {
            id: `artifacts.library.providers.connection_status.reconnect`,
            defaultMessage: `Reconnect`
        },
        reconnectPastedLinkTitle: {
            id: `artifacts.library.providers.reconnect_prompt.title`,
            defaultMessage: `Reconnect {provider} to work with this link`
        },
        pastedLinkTitle: {
            id: `artifacts.library.providers.connect_prompt.title`,
            defaultMessage: `Connect {provider} to work with this link`
        },
        pastedLinkDescription: {
            id: `artifacts.library.providers.connect_prompt.description`,
            defaultMessage: `Search your files, ask questions, and use tools without leaving ChatGPT`
        },
        connected: {
            id: `artifacts.library.providers.connection_status.connected`,
            defaultMessage: `Connected`
        },
        unavailable: {
            id: `artifacts.library.providers.connection_status.unavailable`,
            defaultMessage: `Unavailable`
        },
        loading: {
            id: `artifacts.library.providers.connection_status.loading`,
            defaultMessage: `Loading…`
        },
        retry: {
            id: `artifacts.library.providers.connection_status.retry`,
            defaultMessage: `Retry`
        }
    }), it = L(e => s(null)), at = e => {
        "use forget";
        let t = (0, nt.c)(107),
            {
                provider: n,
                disabled: r,
                fallback: i,
                isVisible: a,
                onConnected: s,
                onDismiss: l,
                onShow: u,
                onboardingJourney: d,
                onboardingSource: f,
                variant: p
            } = e,
            m = i === void 0 ? null : i,
            h = _e(),
            v = ue(),
            b = fe(),
            ne = _(o) ?? g(),
            x = ne?.id,
            ie;
        t[0] === n ? ie = t[1] : (ie = () => Ee(n), t[0] = n, t[1] = ie);
        let S = _(ie),
            C = Se(n),
            w = a && S && x != null,
            E = ke(x),
            D = pe({
                ...E,
                enabled: w
            }),
            k = Re(C, {
                accountId: x,
                workspace: !!ne?.getWorkspaceId(),
                locale: h.locale,
                platform: `chat`,
                productSku: je.CONNECTOR_SETTING
            }),
            ae;
        t[2] !== k || t[3] !== w ? (ae = {
            ...k,
            enabled: w
        }, t[2] = k, t[3] = w, t[4] = ae) : ae = t[4];
        let A = pe(ae),
            j;
        if (t[5] !== x || t[6] !== A.data || t[7] !== A.error || t[8] !== C || t[9] !== D.data || t[10] !== D.error || t[11] !== S) {
            let e = D.data == null ? void 0 : D.data[C] ?? [];
            j = Pe({
                enabled: S && x != null,
                availability: A.data,
                links: e,
                availabilityError: A.error,
                linksError: D.error
            }), t[5] = x, t[6] = A.data, t[7] = A.error, t[8] = C, t[9] = D.data, t[10] = D.error, t[11] = S, t[12] = j
        } else j = t[12];
        let M = j,
            N = M === `connectable` || M === `reconnectable`,
            I;
        t[13] !== x || t[14] !== n ? (I = () => it(`${x}:${n}`) != null, t[13] = x, t[14] = n, t[15] = I) : I = t[15];
        let L = _(I),
            R;
        t[16] !== x || t[17] !== k || t[18] !== N || t[19] !== C || t[20] !== r || t[21] !== S || t[22] !== h || t[23] !== E || t[24] !== v || t[25] !== s || t[26] !== d || t[27] !== f || t[28] !== n || t[29] !== b || t[30] !== p ? (R = async () => {
            let e = oe() ?? g(),
                t = `${e?.id}:${n}`;
            if (r || !S || !Ee(n) || !N || e == null || x == null || e.id !== x || ce(() => it(t)) != null) return;
            let i = Symbol();
            O(() => it.set(t, i));
            let a = d ?? (p === `menu` && f != null ? we(f, `drive_only`) : void 0);
            p === `menu` && be(a), De(a, n);
            let o = !1,
                l = e => {
                    o || (o = !0, ze(a, n, e))
                },
                u = () => y().danger(h.formatMessage(re.somethingWentWrong));
            (p === `composer` || p === `floating-composer`) && Ke(n, Fe.CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED);
            let m = {
                    accountId: e?.id,
                    hasWorkspace: !!e?.getWorkspaceId(),
                    locale: h.locale,
                    platform: `chat`,
                    productSku: je.CONNECTOR_SETTING
                },
                _ = Ye(C, m);
            await b.fetchQuery(_).then(async e => {
                if (!Ee(n) || (oe() ?? g())?.id !== m.accountId) {
                    l(`cancelled`);
                    return
                }
                if (e == null) {
                    b.removeQueries({
                        queryKey: _.queryKey,
                        exact: !0
                    }), l(`unavailable`), u();
                    return
                }
                await Je({
                    queryClient: b,
                    pluginId: e,
                    sourceAttributionId: a?.journeyId,
                    installAccountId: m.accountId,
                    requestContext: m,
                    closeOnCompletion: !0,
                    requireActiveConnectorLinks: !0,
                    pathname: v.pathname,
                    search: v.search,
                    searchParams: new URLSearchParams(v.search),
                    intl: h,
                    surface: xe.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_LIBRARY,
                    onConnectionResult: e => {
                        if (l(e), !(!Ee(n) || (oe() ?? g())?.id !== m.accountId))
                            if (e === `connected`) {
                                T();
                                for (let e of [E.queryKey, k.queryKey, [`connected-resource-link-connections`],
                                        [c],
                                        [ee],
                                        [Qe]
                                    ]) b.invalidateQueries({
                                    queryKey: e
                                });
                                s?.()
                            } else e === `unavailable` && u()
                    }
                })
            }).catch(() => {
                l(`retryable_error`), (oe() ?? g())?.id === m.accountId && u()
            }).finally(() => {
                O(() => it.set(t, e => e === i ? null : e))
            })
        }, t[16] = x, t[17] = k, t[18] = N, t[19] = C, t[20] = r, t[21] = S, t[22] = h, t[23] = E, t[24] = v, t[25] = s, t[26] = d, t[27] = f, t[28] = n, t[29] = b, t[30] = p, t[31] = R) : R = t[31];
        let z = se(R),
            le, de;
        if (t[32] !== N || t[33] !== S || t[34] !== a || t[35] !== u || t[36] !== p ? (le = () => {
                p === `composer` && a && S && N && !F() && u?.()
            }, de = [N, S, a, u, p], t[32] = N, t[33] = S, t[34] = a, t[35] = u, t[36] = p, t[37] = le, t[38] = de) : (le = t[37], de = t[38]), (0, rt.useEffect)(le, de), !a || !S) return null;
        if (p === `picker`) {
            if (A.isSuccess && !ve(A.data) || M === `unavailable`) return null;
            let e;
            t[39] !== A || t[40] !== D ? (e = () => {
                A.refetch(), D.refetch()
            }, t[39] = A, t[40] = D, t[41] = e) : e = t[41];
            let i;
            return t[42] !== r || t[43] !== z || t[44] !== L || t[45] !== n || t[46] !== M || t[47] !== e ? (i = (0, Q.jsx)(ct, {
                provider: n,
                state: M,
                disabled: r,
                isConnecting: L,
                onConnect: z,
                onRetry: e
            }), t[42] = r, t[43] = z, t[44] = L, t[45] = n, t[46] = M, t[47] = e, t[48] = i) : i = t[48], i
        }
        if (!N) return M === `loading` || M === `error` ? null : m;
        let B, me;
        if (t[49] !== r || t[50] !== z || t[51] !== h || t[52] !== L || t[53] !== n || t[54] !== M || t[55] !== p) {
            B = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = h.formatMessage(ye(n).label),
                    i = M === `reconnectable` ? h.formatMessage($.reconnectAction, {
                        provider: e
                    }) : n === `google_drive` ? h.formatMessage(Ne.connectGoogleDriveAction) : h.formatMessage($.connect, {
                        provider: e
                    });
                if (p === `menu`) {
                    let e;
                    t[58] === n ? e = t[59] : (e = (0, Q.jsx)(Me, {
                        provider: n,
                        "aria-hidden": `true`,
                        className: `icon`
                    }), t[58] = n, t[59] = e), B = (0, Q.jsx)(Te.Item, {
                        fillContainer: !0,
                        disabled: r || L,
                        className: `text-token-text-primary`,
                        icon: e,
                        label: i,
                        onSelect: z
                    });
                    break bb0
                }
                if (p === `modal`) {
                    B = (0, Q.jsx)(P, {
                        className: `rounded-full px-6 max-sm:w-full`,
                        color: `primary`,
                        "aria-disabled": r || L,
                        visuallyDisabled: r || L,
                        loading: L,
                        onClick: z,
                        size: `large`,
                        type: `button`,
                        children: i
                    });
                    break bb0
                }
                if (F()) {
                    B = null;
                    break bb0
                }
                me = M === `reconnectable` ? h.formatMessage($.reconnectPastedLinkTitle, {
                    provider: e
                }) : n === `google_drive` ? h.formatMessage(Ne.googleDriveConnectPastedLinkTitle) : h.formatMessage($.pastedLinkTitle, {
                    provider: e
                })
            }
            t[49] = r, t[50] = z, t[51] = h, t[52] = L, t[53] = n, t[54] = M, t[55] = p, t[56] = B, t[57] = me
        } else B = t[56], me = t[57];
        if (B !== Symbol.for(`react.early_return_sentinel`)) return B;
        let H = me,
            he;
        t[60] !== h || t[61] !== n ? (he = n === `google_drive` ? h.formatMessage(Ne.googleDriveConnectBeaconDescription) : h.formatMessage($.pastedLinkDescription), t[60] = h, t[61] = n, t[62] = he) : he = t[62];
        let U = he,
            ge;
        t[63] === n ? ge = t[64] : (ge = n.replaceAll(`_`, `-`), t[63] = n, t[64] = ge);
        let W = `composer-${ge}-connect-prompt`;
        if (p === `floating-composer`) {
            let e = r || L,
                i = M === `reconnectable` ? $.reconnect : re.connect,
                a;
            t[65] !== z || t[66] !== e || t[67] !== i ? (a = {
                primaryAction: {
                    disabled: e,
                    onClick: z,
                    text: i
                }
            }, t[65] = z, t[66] = e, t[67] = i, t[68] = a) : a = t[68];
            let o;
            t[69] === n ? o = t[70] : (o = (0, Q.jsx)(Me, {
                provider: n,
                "aria-hidden": `true`,
                className: `size-6`
            }), t[69] = n, t[70] = o);
            let s;
            t[71] !== U || t[72] !== l || t[73] !== u || t[74] !== a || t[75] !== o || t[76] !== H ? (s = (0, Q.jsx)(Ce, {
                actions: a,
                description: U,
                icon: o,
                onDismiss: l,
                onShow: u,
                title: H
            }), t[71] = U, t[72] = l, t[73] = u, t[74] = a, t[75] = o, t[76] = H, t[77] = s) : s = t[77];
            let c;
            return t[78] !== s || t[79] !== W ? (c = (0, Q.jsx)(`div`, {
                "data-testid": W,
                children: s
            }), t[78] = s, t[79] = W, t[80] = c) : c = t[80], c
        }
        let G;
        t[81] === n ? G = t[82] : (G = (0, Q.jsx)(Me, {
            provider: n,
            "aria-hidden": `true`,
            className: `size-6 shrink-0`
        }), t[81] = n, t[82] = G);
        let K;
        t[83] === H ? K = t[84] : (K = (0, Q.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-semibold`,
            children: H
        }), t[83] = H, t[84] = K);
        let q;
        t[85] === U ? q = t[86] : (q = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: U
        }), t[85] = U, t[86] = q);
        let J;
        t[87] !== K || t[88] !== q ? (J = (0, Q.jsxs)(`div`, {
            className: `min-w-0 flex-1 max-sm:basis-[calc(100%-3rem)]`,
            children: [K, q]
        }), t[87] = K, t[88] = q, t[89] = J) : J = t[89];
        let Oe = r || L,
            Ae = M === `reconnectable` ? $.reconnect : re.connect,
            Y;
        t[90] === Ae ? Y = t[91] : (Y = (0, Q.jsx)(V, {
            ...Ae
        }), t[90] = Ae, t[91] = Y);
        let X;
        t[92] !== z || t[93] !== L || t[94] !== Oe || t[95] !== Y ? (X = (0, Q.jsx)(P, {
            className: `shrink-0 max-sm:ms-9`,
            color: `secondary`,
            disabled: Oe,
            loading: L,
            onClick: z,
            size: `medium`,
            type: `button`,
            children: Y
        }), t[92] = z, t[93] = L, t[94] = Oe, t[95] = Y, t[96] = X) : X = t[96];
        let Z;
        t[97] !== l || t[98] !== n ? (Z = n !== `google_drive` && l != null && (0, Q.jsx)(te, {
            onClick: l,
            iconSize: `sm`
        }), t[97] = l, t[98] = n, t[99] = Z) : Z = t[99];
        let Ie;
        return t[100] !== G || t[101] !== J || t[102] !== X || t[103] !== Z || t[104] !== W || t[105] !== H ? (Ie = (0, Q.jsxs)(`section`, {
            "aria-label": H,
            className: `border-token-border-light bg-token-bg-primary dark:bg-token-bg-elevated-primary mb-2 flex items-center gap-3 rounded-2xl border p-3 shadow-[0_4px_16px_0_rgba(0,0,0,0.05)] max-sm:flex-wrap`,
            "data-testid": W,
            children: [G, J, X, Z]
        }), t[100] = G, t[101] = J, t[102] = X, t[103] = Z, t[104] = W, t[105] = H, t[106] = Ie) : Ie = t[106], Ie
    }, ot = {
        sharepoint: I.hasSeenLibrarySharePointPastedLinkConnect,
        onedrive: I.hasSeenLibrarySharePointPastedLinkConnect,
        dropbox: I.hasSeenLibraryDropboxPastedLinkConnect,
        box: I.hasSeenLibraryBoxPastedLinkConnect
    }, st = e => {
        "use forget";
        let t = (0, nt.c)(24),
            {
                provider: n,
                accountId: r,
                disabled: i,
                hasConversationBeacon: a,
                isNewThread: o,
                onShow: s,
                onDismiss: c
            } = e,
            l = ot[n],
            {
                pathname: f
            } = ue(),
            {
                eligible: p,
                isLoading: m
            } = N(l),
            y = (0, rt.useRef)(!1),
            [ee, te] = (0, rt.useState)(!1),
            re = x(u.Beacons),
            S = fe(),
            w;
        t[0] === S ? w = t[1] : (w = S.getQueryCache(), t[0] = S, t[1] = w);
        let T = w,
            E;
        t[2] === f ? E = t[3] : (E = () => v({
            pathname: f,
            isWorkMode: ae()
        }), t[2] = f, t[3] = E);
        let D = _(E),
            O;
        t[4] === T ? O = t[5] : (O = e => T.subscribe(t => {
            t.query.queryKey[0] === h[0] && e()
        }), t[4] = T, t[5] = O);
        let k;
        t[6] !== D || t[7] !== f || t[8] !== T ? (k = () => {
            let e = T.findAll({
                queryKey: [...h, null, f, D],
                type: `active`
            });
            return e.length > 0 && e.every(et)
        }, t[6] = D, t[7] = f, t[8] = T, t[9] = k) : k = t[9];
        let j = (0, rt.useSyncExternalStore)(O, k, tt),
            M;
        t[10] !== j || t[11] !== f ? (M = () => C() || z() != null || ie() != null || b(f) && !d() && ne().status === `pending` && !j, t[10] = j, t[11] = f, t[12] = M) : M = t[12];
        let P = _(M),
            F;
        t[13] !== r || t[14] !== l || t[15] !== s || t[16] !== n ? (F = () => {
            y.current || (oe() ?? g())?.id !== r || (y.current = !0, te(!0), Ke(n, Fe.CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED), A(l), s())
        }, t[13] = r, t[14] = l, t[15] = s, t[16] = n, t[17] = F) : F = t[17];
        let I = se(F);
        if (re || a || P || !Ee(n) || !ee && (!p || m)) return null;
        let L = o ? `floating-composer` : `composer`,
            R;
        return t[18] !== i || t[19] !== I || t[20] !== c || t[21] !== n || t[22] !== L ? (R = (0, Q.jsx)(at, {
            provider: n,
            disabled: i,
            isVisible: !0,
            onShow: I,
            onDismiss: c,
            variant: L
        }), t[18] = i, t[19] = I, t[20] = c, t[21] = n, t[22] = L, t[23] = R) : R = t[23], R
    }, ct = e => {
        "use forget";
        let t = (0, nt.c)(27),
            {
                provider: n,
                state: r,
                disabled: i,
                isConnecting: a,
                onConnect: o,
                onRetry: s
            } = e,
            c = i !== void 0 && i,
            l = a !== void 0 && a,
            u = _e(),
            d, f, p, m;
        t[0] !== c || t[1] !== u || t[2] !== l || t[3] !== n || t[4] !== r ? (p = u.formatMessage(ye(n).label), d = c || l || r !== `connectable` && r !== `reconnectable`, f = r === `loading` || l, m = f ? u.formatMessage($.loading) : u.formatMessage($.connect, {
            provider: p
        }), t[0] = c, t[1] = u, t[2] = l, t[3] = n, t[4] = r, t[5] = d, t[6] = f, t[7] = p, t[8] = m) : (d = t[5], f = t[6], p = t[7], m = t[8]);
        let h = m,
            g;
        t[9] === n ? g = t[10] : (g = (0, Q.jsx)(`span`, {
            className: `border-token-border-default bg-token-bg-primary flex size-[45px] shrink-0 items-center justify-center rounded-full border`,
            children: (0, Q.jsx)(Me, {
                provider: n,
                "aria-hidden": `true`,
                className: `size-6`
            })
        }), t[9] = n, t[10] = g);
        let _;
        t[11] === p ? _ = t[12] : (_ = (0, Q.jsx)(`span`, {
            className: `text-token-text-primary text-body-regular min-w-0 flex-1`,
            children: p
        }), t[11] = p, t[12] = _);
        let v;
        t[13] !== h || t[14] !== d || t[15] !== u || t[16] !== l || t[17] !== f || t[18] !== p || t[19] !== o || t[20] !== s || t[21] !== r ? (v = r === `reconnectable` ? (0, Q.jsx)(P, {
            "aria-label": u.formatMessage($.reconnectAction, {
                provider: p
            }),
            "aria-disabled": d,
            "aria-busy": l,
            color: `secondary`,
            visuallyDisabled: d,
            onClick: e => {
                d ? e.preventDefault() : o()
            },
            size: `small`,
            type: `button`,
            children: l ? (0, Q.jsx)(V, {
                ...$.loading
            }) : (0, Q.jsx)(V, {
                ...$.reconnect
            })
        }) : r === `connectable` || r === `loading` ? (0, Q.jsx)(P, {
            label: h,
            "aria-disabled": d,
            "aria-busy": f,
            className: `size-8 shrink-0 rounded-full p-0!`,
            color: `secondary`,
            icon: He,
            loading: f,
            visuallyDisabled: d,
            onClick: e => {
                d ? e.preventDefault() : o()
            },
            size: `small`,
            type: `button`
        }) : r === `error` ? (0, Q.jsx)(P, {
            color: `secondary`,
            onClick: s,
            size: `small`,
            type: `button`,
            children: (0, Q.jsx)(V, {
                ...$.retry
            })
        }) : (0, Q.jsx)(`span`, {
            "aria-live": `polite`,
            className: r === `connected` ? `bg-token-text-primary text-token-text-inverted flex size-8 shrink-0 items-center justify-center rounded-full` : `text-token-text-secondary text-xs`,
            children: r === `connected` ? (0, Q.jsxs)(Q.Fragment, {
                children: [(0, Q.jsx)(Ve, {
                    "aria-hidden": `true`,
                    className: `icon-sm`
                }), (0, Q.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, Q.jsx)(V, {
                        ...$.connected
                    })
                })]
            }) : (0, Q.jsx)(V, {
                ...$.unavailable
            })
        }), t[13] = h, t[14] = d, t[15] = u, t[16] = l, t[17] = f, t[18] = p, t[19] = o, t[20] = s, t[21] = r, t[22] = v) : v = t[22];
        let y;
        return t[23] !== g || t[24] !== _ || t[25] !== v ? (y = (0, Q.jsxs)(`li`, {
            className: `flex items-center gap-3 py-3`,
            children: [g, _, v]
        }), t[23] = g, t[24] = _, t[25] = v, t[26] = y) : y = t[26], y
    }
}));
export {
    lt as n, $e as r, at as t
};
//# sourceMappingURL=03f00d69-abllrgd7q075akmm.js.map