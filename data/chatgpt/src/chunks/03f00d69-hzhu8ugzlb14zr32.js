import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    B0 as i,
    CA as a,
    CN as o,
    Ci as s,
    EA as c,
    F5 as l,
    IU as u,
    K0 as d,
    KA as f,
    Ks as p,
    L8 as m,
    LU as h,
    Mw as g,
    N1 as _,
    R8 as v,
    TA as y,
    Ti as b,
    U1 as x,
    UA as ee,
    V1 as te,
    WA as S,
    XA as ne,
    Zs as C,
    at as w,
    eE as T,
    gc as re,
    git as E,
    ho as D,
    it as O,
    jw as ie,
    k5 as ae,
    k8 as k,
    mL as A,
    nt as j,
    ot as M,
    pL as N,
    pc as P,
    q1 as F,
    q5 as oe,
    qA as se,
    qs as I,
    sit as L,
    tt as R,
    wN as ce,
    wi as le,
    xi as ue
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    At as de,
    Bn as fe,
    Ln as z,
    N as pe,
    Nn as B,
    O as me,
    Q as he,
    Rn as V,
    Vn as ge,
    s as H,
    wn as U,
    zn as _e
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Hn as ve,
    D9t as W,
    FWt as ye,
    GWt as be,
    Gjn as xe,
    Gwn as Se,
    H9t as G,
    I9t as Ce,
    IWt as we,
    Iwn as Te,
    JWt as Ee,
    KWt as K,
    NUt as De,
    NWt as Oe,
    PUt as q,
    PWt as J,
    TSn as ke,
    U9t as Ae,
    UWt as je,
    WWt as Me,
    Wwn as Ne,
    eUn as Y,
    fMn as Pe,
    gTn as X,
    hTn as Fe,
    nGt as Ie,
    qWt as Z,
    rGt as Le,
    z9t as Re,
    zWt as ze
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Gh as Be,
    Jy as Ve,
    Kh as He,
    Yy as Ue
} from "./30901919-r9pahacmzqudnt4f.js";
import {
    Au as We,
    Lb as Ge,
    _c as Ke,
    gc as qe,
    ju as Je,
    ny as Ye,
    xy as Xe
} from "./8b34dbc2-egl8cz04n8nmlktg.js";
import {
    i as Ze,
    t as Qe
} from "./55904901-dwsf7nh8hiucw8c6.js";
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
    nt = U(), Ne(), W(), T(), g(), D(), c(), q(), f(), E(), Y(), i(), Ue(), Be(), X(), We(), Xe(), ke(), qe(), J(), G(), Le(), Ze(), b(), K(), Re(), Z(), A(), k(), F(), h(), P(), o(), j(), I(), Ge(), H(), rt = n(ge()), V(), he(), Q = fe(), $ = z({
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
    }), it = v(e => m(null)), at = e => {
        "use forget";
        let t = (0, nt.c)(107),
            {
                provider: n,
                disabled: i,
                fallback: a,
                isVisible: o,
                onConnected: c,
                onDismiss: d,
                onShow: f,
                onboardingJourney: p,
                onboardingSource: m,
                variant: h
            } = e,
            g = a === void 0 ? null : a,
            v = _e(),
            y = de(),
            b = pe(),
            ee = oe(_) ?? x(),
            S = ee?.id,
            ne;
        t[0] === n ? ne = t[1] : (ne = () => Ee(n), t[0] = n, t[1] = ne);
        let C = oe(ne),
            w = Me(n),
            T = o && C && S != null,
            re = be(S),
            E = me({
                ...re,
                enabled: T
            }),
            D = Te(w, {
                accountId: S,
                workspace: !!ee?.getWorkspaceId(),
                locale: v.locale,
                platform: `chat`,
                productSku: Fe.CONNECTOR_SETTING
            }),
            O;
        t[2] !== D || t[3] !== T ? (O = {
            ...D,
            enabled: T
        }, t[2] = D, t[3] = T, t[4] = O) : O = t[4];
        let k = me(O),
            A;
        if (t[5] !== S || t[6] !== k.data || t[7] !== k.error || t[8] !== w || t[9] !== E.data || t[10] !== E.error || t[11] !== C) {
            let e = E.data == null ? void 0 : E.data[w] ?? [];
            A = je({
                enabled: C && S != null,
                availability: k.data,
                links: e,
                availabilityError: k.error,
                linksError: E.error
            }), t[5] = S, t[6] = k.data, t[7] = k.error, t[8] = w, t[9] = E.data, t[10] = E.error, t[11] = C, t[12] = A
        } else A = t[12];
        let j = A,
            M = j === `connectable` || j === `reconnectable`,
            P;
        t[13] !== S || t[14] !== n ? (P = () => it(`${S}:${n}`) != null, t[13] = S, t[14] = n, t[15] = P) : P = t[15];
        let F = oe(P),
            se;
        t[16] !== S || t[17] !== D || t[18] !== M || t[19] !== w || t[20] !== i || t[21] !== C || t[22] !== v || t[23] !== re || t[24] !== y || t[25] !== c || t[26] !== p || t[27] !== m || t[28] !== n || t[29] !== b || t[30] !== h ? (se = async () => {
            let e = te() ?? x(),
                t = `${e?.id}:${n}`;
            if (i || !C || !Ee(n) || !M || e == null || S == null || e.id !== S || l(() => it(t)) != null) return;
            let r = Symbol();
            ae(() => it.set(t, r));
            let a = p ?? (h === `menu` && m != null ? Oe(m, `drive_only`) : void 0);
            h === `menu` && we(a), ze(a, n);
            let o = !1,
                d = e => {
                    o || (o = !0, ye(a, n, e))
                },
                f = () => u().danger(v.formatMessage(L.somethingWentWrong));
            (h === `composer` || h === `floating-composer`) && Ke(n, Pe.CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED);
            let g = {
                    accountId: e?.id,
                    hasWorkspace: !!e?.getWorkspaceId(),
                    locale: v.locale,
                    platform: `chat`,
                    productSku: Fe.CONNECTOR_SETTING
                },
                _ = Ye(w, g);
            await b.fetchQuery(_).then(async e => {
                if (!Ee(n) || (te() ?? x())?.id !== g.accountId) {
                    d(`cancelled`);
                    return
                }
                if (e == null) {
                    b.removeQueries({
                        queryKey: _.queryKey,
                        exact: !0
                    }), d(`unavailable`), f();
                    return
                }
                await Je({
                    queryClient: b,
                    pluginId: e,
                    sourceAttributionId: a?.journeyId,
                    installAccountId: g.accountId,
                    requestContext: g,
                    closeOnCompletion: !0,
                    requireActiveConnectorLinks: !0,
                    pathname: y.pathname,
                    search: y.search,
                    searchParams: new URLSearchParams(y.search),
                    intl: v,
                    surface: xe.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_LIBRARY,
                    onConnectionResult: e => {
                        if (d(e), !(!Ee(n) || (te() ?? x())?.id !== g.accountId))
                            if (e === `connected`) {
                                ue();
                                for (let e of [re.queryKey, D.queryKey, [`connected-resource-link-connections`],
                                        [le],
                                        [s],
                                        [Qe]
                                    ]) b.invalidateQueries({
                                    queryKey: e
                                });
                                c?.()
                            } else e === `unavailable` && f()
                    }
                })
            }).catch(() => {
                d(`retryable_error`), (te() ?? x())?.id === g.accountId && f()
            }).finally(() => {
                ae(() => it.set(t, e => e === r ? null : e))
            })
        }, t[16] = S, t[17] = D, t[18] = M, t[19] = w, t[20] = i, t[21] = C, t[22] = v, t[23] = re, t[24] = y, t[25] = c, t[26] = p, t[27] = m, t[28] = n, t[29] = b, t[30] = h, t[31] = se) : se = t[31];
        let I = ce(se),
            R, fe;
        if (t[32] !== M || t[33] !== C || t[34] !== o || t[35] !== f || t[36] !== h ? (R = () => {
                h === `composer` && o && C && M && !N() && f?.()
            }, fe = [M, C, o, f, h], t[32] = M, t[33] = C, t[34] = o, t[35] = f, t[36] = h, t[37] = R, t[38] = fe) : (R = t[37], fe = t[38]), (0, rt.useEffect)(R, fe), !o || !C) return null;
        if (h === `picker`) {
            if (k.isSuccess && !Se(k.data) || j === `unavailable`) return null;
            let e;
            t[39] !== k || t[40] !== E ? (e = () => {
                k.refetch(), E.refetch()
            }, t[39] = k, t[40] = E, t[41] = e) : e = t[41];
            let r;
            return t[42] !== i || t[43] !== I || t[44] !== F || t[45] !== n || t[46] !== j || t[47] !== e ? (r = (0, Q.jsx)(ct, {
                provider: n,
                state: j,
                disabled: i,
                isConnecting: F,
                onConnect: I,
                onRetry: e
            }), t[42] = i, t[43] = I, t[44] = F, t[45] = n, t[46] = j, t[47] = e, t[48] = r) : r = t[48], r
        }
        if (!M) return j === `loading` || j === `error` ? null : g;
        let z, he;
        if (t[49] !== i || t[50] !== I || t[51] !== v || t[52] !== F || t[53] !== n || t[54] !== j || t[55] !== h) {
            z = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = v.formatMessage(Ce(n).label),
                    a = j === `reconnectable` ? v.formatMessage($.reconnectAction, {
                        provider: e
                    }) : n === `google_drive` ? v.formatMessage(Ae.connectGoogleDriveAction) : v.formatMessage($.connect, {
                        provider: e
                    });
                if (h === `menu`) {
                    let e;
                    t[58] === n ? e = t[59] : (e = (0, Q.jsx)(Ie, {
                        provider: n,
                        "aria-hidden": `true`,
                        className: `icon`
                    }), t[58] = n, t[59] = e), z = (0, Q.jsx)(ve.Item, {
                        fillContainer: !0,
                        disabled: i || F,
                        className: `text-token-text-primary`,
                        icon: e,
                        label: a,
                        onSelect: I
                    });
                    break bb0
                }
                if (h === `modal`) {
                    z = (0, Q.jsx)(r, {
                        className: `rounded-full px-6 max-sm:w-full`,
                        color: `primary`,
                        "aria-disabled": i || F,
                        visuallyDisabled: i || F,
                        loading: F,
                        onClick: I,
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
                he = j === `reconnectable` ? v.formatMessage($.reconnectPastedLinkTitle, {
                    provider: e
                }) : n === `google_drive` ? v.formatMessage(Ae.googleDriveConnectPastedLinkTitle) : v.formatMessage($.pastedLinkTitle, {
                    provider: e
                })
            }
            t[49] = i, t[50] = I, t[51] = v, t[52] = F, t[53] = n, t[54] = j, t[55] = h, t[56] = z, t[57] = he
        } else z = t[56], he = t[57];
        if (z !== Symbol.for(`react.early_return_sentinel`)) return z;
        let V = he,
            ge;
        t[60] !== v || t[61] !== n ? (ge = n === `google_drive` ? v.formatMessage(Ae.googleDriveConnectBeaconDescription) : v.formatMessage($.pastedLinkDescription), t[60] = v, t[61] = n, t[62] = ge) : ge = t[62];
        let H = ge,
            U;
        t[63] === n ? U = t[64] : (U = n.replaceAll(`_`, `-`), t[63] = n, t[64] = U);
        let W = `composer-${U}-connect-prompt`;
        if (h === `floating-composer`) {
            let e = i || F,
                r = j === `reconnectable` ? $.reconnect : L.connect,
                a;
            t[65] !== I || t[66] !== e || t[67] !== r ? (a = {
                primaryAction: {
                    disabled: e,
                    onClick: I,
                    text: r
                }
            }, t[65] = I, t[66] = e, t[67] = r, t[68] = a) : a = t[68];
            let o;
            t[69] === n ? o = t[70] : (o = (0, Q.jsx)(Ie, {
                provider: n,
                "aria-hidden": `true`,
                className: `size-6`
            }), t[69] = n, t[70] = o);
            let s;
            t[71] !== H || t[72] !== d || t[73] !== f || t[74] !== a || t[75] !== o || t[76] !== V ? (s = (0, Q.jsx)(De, {
                actions: a,
                description: H,
                icon: o,
                onDismiss: d,
                onShow: f,
                title: V
            }), t[71] = H, t[72] = d, t[73] = f, t[74] = a, t[75] = o, t[76] = V, t[77] = s) : s = t[77];
            let c;
            return t[78] !== s || t[79] !== W ? (c = (0, Q.jsx)(`div`, {
                "data-testid": W,
                children: s
            }), t[78] = s, t[79] = W, t[80] = c) : c = t[80], c
        }
        let G;
        t[81] === n ? G = t[82] : (G = (0, Q.jsx)(Ie, {
            provider: n,
            "aria-hidden": `true`,
            className: `size-6 shrink-0`
        }), t[81] = n, t[82] = G);
        let K;
        t[83] === V ? K = t[84] : (K = (0, Q.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-semibold`,
            children: V
        }), t[83] = V, t[84] = K);
        let q;
        t[85] === H ? q = t[86] : (q = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: H
        }), t[85] = H, t[86] = q);
        let J;
        t[87] !== K || t[88] !== q ? (J = (0, Q.jsxs)(`div`, {
            className: `min-w-0 flex-1 max-sm:basis-[calc(100%-3rem)]`,
            children: [K, q]
        }), t[87] = K, t[88] = q, t[89] = J) : J = t[89];
        let ke = i || F,
            Ne = j === `reconnectable` ? $.reconnect : L.connect,
            Y;
        t[90] === Ne ? Y = t[91] : (Y = (0, Q.jsx)(B, {
            ...Ne
        }), t[90] = Ne, t[91] = Y);
        let X;
        t[92] !== I || t[93] !== F || t[94] !== ke || t[95] !== Y ? (X = (0, Q.jsx)(r, {
            className: `shrink-0 max-sm:ms-9`,
            color: `secondary`,
            disabled: ke,
            loading: F,
            onClick: I,
            size: `medium`,
            type: `button`,
            children: Y
        }), t[92] = I, t[93] = F, t[94] = ke, t[95] = Y, t[96] = X) : X = t[96];
        let Z;
        t[97] !== d || t[98] !== n ? (Z = n !== `google_drive` && d != null && (0, Q.jsx)(ie, {
            onClick: d,
            iconSize: `sm`
        }), t[97] = d, t[98] = n, t[99] = Z) : Z = t[99];
        let Le;
        return t[100] !== G || t[101] !== J || t[102] !== X || t[103] !== Z || t[104] !== W || t[105] !== V ? (Le = (0, Q.jsxs)(`section`, {
            "aria-label": V,
            className: `border-token-border-light bg-token-bg-primary dark:bg-token-bg-elevated-primary mb-2 flex items-center gap-3 rounded-2xl border p-3 shadow-[0_4px_16px_0_rgba(0,0,0,0.05)] max-sm:flex-wrap`,
            "data-testid": W,
            children: [G, J, X, Z]
        }), t[100] = G, t[101] = J, t[102] = X, t[103] = Z, t[104] = W, t[105] = V, t[106] = Le) : Le = t[106], Le
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
                hasConversationBeacon: o,
                isNewThread: s,
                onShow: c,
                onDismiss: l
            } = e,
            u = ot[n],
            {
                pathname: f
            } = de(),
            {
                eligible: m,
                isLoading: h
            } = M(u),
            g = (0, rt.useRef)(!1),
            [_, v] = (0, rt.useState)(!1),
            b = C(p.Beacons),
            T = pe(),
            E;
        t[0] === T ? E = t[1] : (E = T.getQueryCache(), t[0] = T, t[1] = E);
        let D = E,
            ie;
        t[2] === f ? ie = t[3] : (ie = () => S({
            pathname: f,
            isWorkMode: re()
        }), t[2] = f, t[3] = ie);
        let ae = oe(ie),
            k;
        t[4] === D ? k = t[5] : (k = e => D.subscribe(t => {
            t.query.queryKey[0] === ee[0] && e()
        }), t[4] = D, t[5] = k);
        let A;
        t[6] !== ae || t[7] !== f || t[8] !== D ? (A = () => {
            let e = D.findAll({
                queryKey: [...ee, null, f, ae],
                type: `active`
            });
            return e.length > 0 && e.every(et)
        }, t[6] = ae, t[7] = f, t[8] = D, t[9] = A) : A = t[9];
        let j = (0, rt.useSyncExternalStore)(k, A, tt),
            N;
        t[10] !== j || t[11] !== f ? (N = () => w() || y() != null || a() != null || se(f) && !d() && ne().status === `pending` && !j, t[10] = j, t[11] = f, t[12] = N) : N = t[12];
        let P = oe(N),
            F;
        t[13] !== r || t[14] !== u || t[15] !== c || t[16] !== n ? (F = () => {
            g.current || (te() ?? x())?.id !== r || (g.current = !0, v(!0), Ke(n, Pe.CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED), O(u), c())
        }, t[13] = r, t[14] = u, t[15] = c, t[16] = n, t[17] = F) : F = t[17];
        let I = ce(F);
        if (b || o || P || !Ee(n) || !_ && (!m || h)) return null;
        let L = s ? `floating-composer` : `composer`,
            R;
        return t[18] !== i || t[19] !== I || t[20] !== l || t[21] !== n || t[22] !== L ? (R = (0, Q.jsx)(at, {
            provider: n,
            disabled: i,
            isVisible: !0,
            onShow: I,
            onDismiss: l,
            variant: L
        }), t[18] = i, t[19] = I, t[20] = l, t[21] = n, t[22] = L, t[23] = R) : R = t[23], R
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
        t[0] !== l || t[1] !== d || t[2] !== u || t[3] !== n || t[4] !== i ? (m = d.formatMessage(Ce(n).label), f = l || u || i !== `connectable` && i !== `reconnectable`, p = i === `loading` || u, h = p ? d.formatMessage($.loading) : d.formatMessage($.connect, {
            provider: m
        }), t[0] = l, t[1] = d, t[2] = u, t[3] = n, t[4] = i, t[5] = f, t[6] = p, t[7] = m, t[8] = h) : (f = t[5], p = t[6], m = t[7], h = t[8]);
        let g = h,
            _;
        t[9] === n ? _ = t[10] : (_ = (0, Q.jsx)(`span`, {
            className: `border-token-border-default bg-token-bg-primary flex size-[45px] shrink-0 items-center justify-center rounded-full border`,
            children: (0, Q.jsx)(Ie, {
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
                children: [(0, Q.jsx)(Ve, {
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
//# sourceMappingURL=03f00d69-hzhu8ugzlb14zr32.js.map