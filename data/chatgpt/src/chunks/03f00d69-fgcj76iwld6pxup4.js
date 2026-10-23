import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    A8 as i,
    B0 as a,
    CA as o,
    CN as s,
    Ci as c,
    EA as l,
    Eit as u,
    IU as d,
    K0 as f,
    KA as p,
    Ks as m,
    LU as h,
    Mw as g,
    N1 as _,
    R8 as v,
    TA as y,
    Ti as b,
    U1 as x,
    UA as S,
    V1 as ee,
    WA as te,
    XA as C,
    Zs as w,
    _it as T,
    at as ne,
    eE as E,
    gc as D,
    ho as O,
    it as re,
    j5 as ie,
    jw as ae,
    mL as k,
    nt as A,
    ot as j,
    p5 as M,
    pL as N,
    pc as P,
    q1 as F,
    qA as I,
    qs as L,
    tt as R,
    wN as oe,
    wi as se,
    xi as ce,
    y5 as le,
    z8 as ue
} from "./4813494d-mdvd4786a87166cc.js";
import {
    At as de,
    Bn as fe,
    Ln as z,
    N as pe,
    Nn as B,
    O as me,
    Q as V,
    Rn as H,
    Vn as he,
    s as U,
    wn as ge,
    zn as _e
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Wt as ve,
    AUt as ye,
    AWt as be,
    B9t as W,
    BWt as xe,
    GWt as Se,
    HMn as Ce,
    HWt as we,
    IWt as Te,
    JSn as G,
    MUn as K,
    MWt as Ee,
    NWt as De,
    Q9t as q,
    RTn as Oe,
    UWt as J,
    VWt as ke,
    WWt as Ae,
    Y9t as je,
    aTn as Me,
    eGt as Ne,
    jUn as Pe,
    jUt as Y,
    jWt as X,
    mTn as Fe,
    nen as Ie,
    pTn as Z,
    ten as Le,
    xMn as Re,
    zTn as ze
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Ky as Be,
    Uh as Ve,
    Wh as He,
    qy as Ue
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Bb as We,
    Nu as Ge,
    Pu as Ke,
    _c as qe,
    ay as Je,
    vc as Ye,
    wy as Xe
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    i as Ze,
    t as Qe
} from "./55904901-djadg0k20igv00dk.js";
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
    nt = ge(), Z(), W(), E(), g(), O(), l(), Y(), p(), u(), K(), a(), Ue(), Ve(), ze(), Ge(), Xe(), G(), qe(), X(), Le(), Ne(), Ze(), b(), J(), q(), Ae(), k(), i(), F(), h(), P(), s(), A(), L(), We(), U(), rt = n(he()), H(), V(), Q = fe(), $ = z({
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
    }), it = ue(e => v(null)), at = e => {
        "use forget";
        let t = (0, nt.c)(107),
            {
                provider: n,
                disabled: i,
                fallback: a,
                isVisible: o,
                onConnected: s,
                onDismiss: l,
                onShow: u,
                onboardingJourney: f,
                onboardingSource: p,
                variant: m
            } = e,
            h = a === void 0 ? null : a,
            g = _e(),
            v = de(),
            y = pe(),
            b = ie(_) ?? x(),
            S = b?.id,
            te;
        t[0] === n ? te = t[1] : (te = () => Se(n), t[0] = n, t[1] = te);
        let C = ie(te),
            w = ke(n),
            ne = o && C && S != null,
            E = we(S),
            D = me({
                ...E,
                enabled: ne
            }),
            O = Me(w, {
                accountId: S,
                workspace: !!b?.getWorkspaceId(),
                locale: g.locale,
                platform: `chat`,
                productSku: Oe.CONNECTOR_SETTING
            }),
            re;
        t[2] !== O || t[3] !== ne ? (re = {
            ...O,
            enabled: ne
        }, t[2] = O, t[3] = ne, t[4] = re) : re = t[4];
        let k = me(re),
            A;
        if (t[5] !== S || t[6] !== k.data || t[7] !== k.error || t[8] !== w || t[9] !== D.data || t[10] !== D.error || t[11] !== C) {
            let e = D.data == null ? void 0 : D.data[w] ?? [];
            A = xe({
                enabled: C && S != null,
                availability: k.data,
                links: e,
                availabilityError: k.error,
                linksError: D.error
            }), t[5] = S, t[6] = k.data, t[7] = k.error, t[8] = w, t[9] = D.data, t[10] = D.error, t[11] = C, t[12] = A
        } else A = t[12];
        let j = A,
            P = j === `connectable` || j === `reconnectable`,
            F;
        t[13] !== S || t[14] !== n ? (F = () => it(`${S}:${n}`) != null, t[13] = S, t[14] = n, t[15] = F) : F = t[15];
        let I = ie(F),
            L;
        t[16] !== S || t[17] !== O || t[18] !== P || t[19] !== w || t[20] !== i || t[21] !== C || t[22] !== g || t[23] !== E || t[24] !== v || t[25] !== s || t[26] !== f || t[27] !== p || t[28] !== n || t[29] !== y || t[30] !== m ? (L = async () => {
            let e = ee() ?? x(),
                t = `${e?.id}:${n}`;
            if (i || !C || !Se(n) || !P || e == null || S == null || e.id !== S || le(() => it(t)) != null) return;
            let r = Symbol();
            M(() => it.set(t, r));
            let a = f ?? (m === `menu` && p != null ? be(p, `drive_only`) : void 0);
            m === `menu` && De(a), Te(a, n);
            let o = !1,
                l = e => {
                    o || (o = !0, Ee(a, n, e))
                },
                u = () => d().danger(g.formatMessage(T.somethingWentWrong));
            (m === `composer` || m === `floating-composer`) && Ye(n, Ce.CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED);
            let h = {
                    accountId: e?.id,
                    hasWorkspace: !!e?.getWorkspaceId(),
                    locale: g.locale,
                    platform: `chat`,
                    productSku: Oe.CONNECTOR_SETTING
                },
                _ = Je(w, h);
            await y.fetchQuery(_).then(async e => {
                if (!Se(n) || (ee() ?? x())?.id !== h.accountId) {
                    l(`cancelled`);
                    return
                }
                if (e == null) {
                    y.removeQueries({
                        queryKey: _.queryKey,
                        exact: !0
                    }), l(`unavailable`), u();
                    return
                }
                await Ke({
                    queryClient: y,
                    pluginId: e,
                    sourceAttributionId: a?.journeyId,
                    installAccountId: h.accountId,
                    requestContext: h,
                    closeOnCompletion: !0,
                    requireActiveConnectorLinks: !0,
                    pathname: v.pathname,
                    search: v.search,
                    searchParams: new URLSearchParams(v.search),
                    intl: g,
                    surface: Re.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_LIBRARY,
                    onConnectionResult: e => {
                        if (l(e), !(!Se(n) || (ee() ?? x())?.id !== h.accountId))
                            if (e === `connected`) {
                                ce();
                                for (let e of [E.queryKey, O.queryKey, [`connected-resource-link-connections`],
                                        [se],
                                        [c],
                                        [Qe]
                                    ]) y.invalidateQueries({
                                    queryKey: e
                                });
                                s?.()
                            } else e === `unavailable` && u()
                    }
                })
            }).catch(() => {
                l(`retryable_error`), (ee() ?? x())?.id === h.accountId && u()
            }).finally(() => {
                M(() => it.set(t, e => e === r ? null : e))
            })
        }, t[16] = S, t[17] = O, t[18] = P, t[19] = w, t[20] = i, t[21] = C, t[22] = g, t[23] = E, t[24] = v, t[25] = s, t[26] = f, t[27] = p, t[28] = n, t[29] = y, t[30] = m, t[31] = L) : L = t[31];
        let R = oe(L),
            ue, fe;
        if (t[32] !== P || t[33] !== C || t[34] !== o || t[35] !== u || t[36] !== m ? (ue = () => {
                m === `composer` && o && C && P && !N() && u?.()
            }, fe = [P, C, o, u, m], t[32] = P, t[33] = C, t[34] = o, t[35] = u, t[36] = m, t[37] = ue, t[38] = fe) : (ue = t[37], fe = t[38]), (0, rt.useEffect)(ue, fe), !o || !C) return null;
        if (m === `picker`) {
            if (k.isSuccess && !Fe(k.data) || j === `unavailable`) return null;
            let e;
            t[39] !== k || t[40] !== D ? (e = () => {
                k.refetch(), D.refetch()
            }, t[39] = k, t[40] = D, t[41] = e) : e = t[41];
            let r;
            return t[42] !== i || t[43] !== R || t[44] !== I || t[45] !== n || t[46] !== j || t[47] !== e ? (r = (0, Q.jsx)(ct, {
                provider: n,
                state: j,
                disabled: i,
                isConnecting: I,
                onConnect: R,
                onRetry: e
            }), t[42] = i, t[43] = R, t[44] = I, t[45] = n, t[46] = j, t[47] = e, t[48] = r) : r = t[48], r
        }
        if (!P) return j === `loading` || j === `error` ? null : h;
        let z, V;
        if (t[49] !== i || t[50] !== R || t[51] !== g || t[52] !== I || t[53] !== n || t[54] !== j || t[55] !== m) {
            z = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = g.formatMessage(je(n).label),
                    a = j === `reconnectable` ? g.formatMessage($.reconnectAction, {
                        provider: e
                    }) : n === `google_drive` ? g.formatMessage(Ie.connectGoogleDriveAction) : g.formatMessage($.connect, {
                        provider: e
                    });
                if (m === `menu`) {
                    let e;
                    t[58] === n ? e = t[59] : (e = (0, Q.jsx)(ve, {
                        provider: n,
                        "aria-hidden": `true`,
                        className: `icon`
                    }), t[58] = n, t[59] = e), z = (0, Q.jsx)(Pe.Item, {
                        fillContainer: !0,
                        disabled: i || I,
                        className: `text-token-text-primary`,
                        icon: e,
                        label: a,
                        onSelect: R
                    });
                    break bb0
                }
                if (m === `modal`) {
                    z = (0, Q.jsx)(r, {
                        className: `rounded-full px-6 max-sm:w-full`,
                        color: `primary`,
                        "aria-disabled": i || I,
                        visuallyDisabled: i || I,
                        loading: I,
                        onClick: R,
                        size: `large`,
                        type: `button`,
                        children: a
                    });
                    break bb0
                }
                if (N()) {
                    z = null;
                    break bb0
                }
                V = j === `reconnectable` ? g.formatMessage($.reconnectPastedLinkTitle, {
                    provider: e
                }) : n === `google_drive` ? g.formatMessage(Ie.googleDriveConnectPastedLinkTitle) : g.formatMessage($.pastedLinkTitle, {
                    provider: e
                })
            }
            t[49] = i, t[50] = R, t[51] = g, t[52] = I, t[53] = n, t[54] = j, t[55] = m, t[56] = z, t[57] = V
        } else z = t[56], V = t[57];
        if (z !== Symbol.for(`react.early_return_sentinel`)) return z;
        let H = V,
            he;
        t[60] !== g || t[61] !== n ? (he = n === `google_drive` ? g.formatMessage(Ie.googleDriveConnectBeaconDescription) : g.formatMessage($.pastedLinkDescription), t[60] = g, t[61] = n, t[62] = he) : he = t[62];
        let U = he,
            ge;
        t[63] === n ? ge = t[64] : (ge = n.replaceAll(`_`, `-`), t[63] = n, t[64] = ge);
        let W = `composer-${ge}-connect-prompt`;
        if (m === `floating-composer`) {
            let e = i || I,
                r = j === `reconnectable` ? $.reconnect : T.connect,
                a;
            t[65] !== R || t[66] !== e || t[67] !== r ? (a = {
                primaryAction: {
                    disabled: e,
                    onClick: R,
                    text: r
                }
            }, t[65] = R, t[66] = e, t[67] = r, t[68] = a) : a = t[68];
            let o;
            t[69] === n ? o = t[70] : (o = (0, Q.jsx)(ve, {
                provider: n,
                "aria-hidden": `true`,
                className: `size-6`
            }), t[69] = n, t[70] = o);
            let s;
            t[71] !== U || t[72] !== l || t[73] !== u || t[74] !== a || t[75] !== o || t[76] !== H ? (s = (0, Q.jsx)(ye, {
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
        t[81] === n ? G = t[82] : (G = (0, Q.jsx)(ve, {
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
        let Ae = i || I,
            Ne = j === `reconnectable` ? $.reconnect : T.connect,
            Y;
        t[90] === Ne ? Y = t[91] : (Y = (0, Q.jsx)(B, {
            ...Ne
        }), t[90] = Ne, t[91] = Y);
        let X;
        t[92] !== R || t[93] !== I || t[94] !== Ae || t[95] !== Y ? (X = (0, Q.jsx)(r, {
            className: `shrink-0 max-sm:ms-9`,
            color: `secondary`,
            disabled: Ae,
            loading: I,
            onClick: R,
            size: `medium`,
            type: `button`,
            children: Y
        }), t[92] = R, t[93] = I, t[94] = Ae, t[95] = Y, t[96] = X) : X = t[96];
        let Z;
        t[97] !== l || t[98] !== n ? (Z = n !== `google_drive` && l != null && (0, Q.jsx)(ae, {
            onClick: l,
            iconSize: `sm`
        }), t[97] = l, t[98] = n, t[99] = Z) : Z = t[99];
        let Le;
        return t[100] !== G || t[101] !== J || t[102] !== X || t[103] !== Z || t[104] !== W || t[105] !== H ? (Le = (0, Q.jsxs)(`section`, {
            "aria-label": H,
            className: `border-token-border-light bg-token-bg-primary dark:bg-token-bg-elevated-primary mb-2 flex items-center gap-3 rounded-2xl border p-3 shadow-[0_4px_16px_0_rgba(0,0,0,0.05)] max-sm:flex-wrap`,
            "data-testid": W,
            children: [G, J, X, Z]
        }), t[100] = G, t[101] = J, t[102] = X, t[103] = Z, t[104] = W, t[105] = H, t[106] = Le) : Le = t[106], Le
    }, ot = {
        sharepoint: R.hasSeenLibrarySharePointPastedLinkConnect,
        onedrive: R.hasSeenLibrarySharePointPastedLinkConnect,
        dropbox: R.hasSeenLibraryDropboxPastedLinkConnect,
        box: R.hasSeenLibraryBoxPastedLinkConnect
    }, st = e => {
        "use forget";
        let t = (0, nt.c)(24),
            {
                provider: n,
                accountId: r,
                disabled: i,
                hasConversationBeacon: a,
                isNewThread: s,
                onShow: c,
                onDismiss: l
            } = e,
            u = ot[n],
            {
                pathname: d
            } = de(),
            {
                eligible: p,
                isLoading: h
            } = j(u),
            g = (0, rt.useRef)(!1),
            [_, v] = (0, rt.useState)(!1),
            b = w(m.Beacons),
            T = pe(),
            E;
        t[0] === T ? E = t[1] : (E = T.getQueryCache(), t[0] = T, t[1] = E);
        let O = E,
            ae;
        t[2] === d ? ae = t[3] : (ae = () => te({
            pathname: d,
            isWorkMode: D()
        }), t[2] = d, t[3] = ae);
        let k = ie(ae),
            A;
        t[4] === O ? A = t[5] : (A = e => O.subscribe(t => {
            t.query.queryKey[0] === S[0] && e()
        }), t[4] = O, t[5] = A);
        let M;
        t[6] !== k || t[7] !== d || t[8] !== O ? (M = () => {
            let e = O.findAll({
                queryKey: [...S, null, d, k],
                type: `active`
            });
            return e.length > 0 && e.every(et)
        }, t[6] = k, t[7] = d, t[8] = O, t[9] = M) : M = t[9];
        let N = (0, rt.useSyncExternalStore)(A, M, tt),
            P;
        t[10] !== N || t[11] !== d ? (P = () => ne() || y() != null || o() != null || I(d) && !f() && C().status === `pending` && !N, t[10] = N, t[11] = d, t[12] = P) : P = t[12];
        let F = ie(P),
            L;
        t[13] !== r || t[14] !== u || t[15] !== c || t[16] !== n ? (L = () => {
            g.current || (ee() ?? x())?.id !== r || (g.current = !0, v(!0), Ye(n, Ce.CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED), re(u), c())
        }, t[13] = r, t[14] = u, t[15] = c, t[16] = n, t[17] = L) : L = t[17];
        let R = oe(L);
        if (b || a || F || !Se(n) || !_ && (!p || h)) return null;
        let se = s ? `floating-composer` : `composer`,
            ce;
        return t[18] !== i || t[19] !== R || t[20] !== l || t[21] !== n || t[22] !== se ? (ce = (0, Q.jsx)(at, {
            provider: n,
            disabled: i,
            isVisible: !0,
            onShow: R,
            onDismiss: l,
            variant: se
        }), t[18] = i, t[19] = R, t[20] = l, t[21] = n, t[22] = se, t[23] = ce) : ce = t[23], ce
    }, ct = e => {
        "use forget";
        let t = (0, nt.c)(27),
            {
                provider: n,
                state: i,
                disabled: a,
                isConnecting: o,
                onConnect: s,
                onRetry: c
            } = e,
            l = a !== void 0 && a,
            u = o !== void 0 && o,
            d = _e(),
            f, p, m, h;
        t[0] !== l || t[1] !== d || t[2] !== u || t[3] !== n || t[4] !== i ? (m = d.formatMessage(je(n).label), f = l || u || i !== `connectable` && i !== `reconnectable`, p = i === `loading` || u, h = p ? d.formatMessage($.loading) : d.formatMessage($.connect, {
            provider: m
        }), t[0] = l, t[1] = d, t[2] = u, t[3] = n, t[4] = i, t[5] = f, t[6] = p, t[7] = m, t[8] = h) : (f = t[5], p = t[6], m = t[7], h = t[8]);
        let g = h,
            _;
        t[9] === n ? _ = t[10] : (_ = (0, Q.jsx)(`span`, {
            className: `border-token-border-default bg-token-bg-primary flex size-[45px] shrink-0 items-center justify-center rounded-full border`,
            children: (0, Q.jsx)(ve, {
                provider: n,
                "aria-hidden": `true`,
                className: `size-6`
            })
        }), t[9] = n, t[10] = _);
        let v;
        t[11] === m ? v = t[12] : (v = (0, Q.jsx)(`span`, {
            className: `text-token-text-primary text-body-regular min-w-0 flex-1`,
            children: m
        }), t[11] = m, t[12] = v);
        let y;
        t[13] !== g || t[14] !== f || t[15] !== d || t[16] !== u || t[17] !== p || t[18] !== m || t[19] !== s || t[20] !== c || t[21] !== i ? (y = i === `reconnectable` ? (0, Q.jsx)(r, {
            "aria-label": d.formatMessage($.reconnectAction, {
                provider: m
            }),
            "aria-disabled": f,
            "aria-busy": u,
            color: `secondary`,
            visuallyDisabled: f,
            onClick: e => {
                f ? e.preventDefault() : s()
            },
            size: `small`,
            type: `button`,
            children: u ? (0, Q.jsx)(B, {
                ...$.loading
            }) : (0, Q.jsx)(B, {
                ...$.reconnect
            })
        }) : i === `connectable` || i === `loading` ? (0, Q.jsx)(r, {
            label: g,
            "aria-disabled": f,
            "aria-busy": p,
            className: `size-8 shrink-0 rounded-full p-0!`,
            color: `secondary`,
            icon: He,
            loading: p,
            visuallyDisabled: f,
            onClick: e => {
                f ? e.preventDefault() : s()
            },
            size: `small`,
            type: `button`
        }) : i === `error` ? (0, Q.jsx)(r, {
            color: `secondary`,
            onClick: c,
            size: `small`,
            type: `button`,
            children: (0, Q.jsx)(B, {
                ...$.retry
            })
        }) : (0, Q.jsx)(`span`, {
            "aria-live": `polite`,
            className: i === `connected` ? `bg-token-text-primary text-token-text-inverted flex size-8 shrink-0 items-center justify-center rounded-full` : `text-token-text-secondary text-xs`,
            children: i === `connected` ? (0, Q.jsxs)(Q.Fragment, {
                children: [(0, Q.jsx)(Be, {
                    "aria-hidden": `true`,
                    className: `icon-sm`
                }), (0, Q.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, Q.jsx)(B, {
                        ...$.connected
                    })
                })]
            }) : (0, Q.jsx)(B, {
                ...$.unavailable
            })
        }), t[13] = g, t[14] = f, t[15] = d, t[16] = u, t[17] = p, t[18] = m, t[19] = s, t[20] = c, t[21] = i, t[22] = y) : y = t[22];
        let b;
        return t[23] !== _ || t[24] !== v || t[25] !== y ? (b = (0, Q.jsxs)(`li`, {
            className: `flex items-center gap-3 py-3`,
            children: [_, v, y]
        }), t[23] = _, t[24] = v, t[25] = y, t[26] = b) : b = t[26], b
    }
}));
export {
    lt as n, $e as r, at as t
};
//# sourceMappingURL=03f00d69-fgcj76iwld6pxup4.js.map