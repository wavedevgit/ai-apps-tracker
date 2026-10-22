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
    U1 as ee,
    UA as te,
    V1 as ne,
    WA as x,
    XA as re,
    Zs as S,
    at as C,
    eE as w,
    gc as ie,
    ho as T,
    it as E,
    jw as D,
    k5 as ae,
    k8 as O,
    lit as k,
    mL as A,
    nt as j,
    ot as M,
    pL as N,
    pc as P,
    q1 as F,
    q5 as oe,
    qA as I,
    qs as L,
    tt as R,
    vit as z,
    wN as se,
    wi as ce,
    xi as le
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    $9t as W,
    AMn as ve,
    BWt as ye,
    FTn as G,
    JWt as be,
    LUt as xe,
    LWt as Se,
    PTn as Ce,
    QWt as we,
    R9t as K,
    RUt as q,
    RWt as J,
    UWt as Te,
    WSn as Ee,
    X9t as De,
    XWt as Y,
    YWt as Oe,
    ZWt as X,
    een as ke,
    lTn as Z,
    oGt as Ae,
    q9t as je,
    qWt as Me,
    sGt as Ne,
    tTn as Pe,
    uMn as Fe,
    uTn as Ie,
    vUn as Le,
    yUn as Re,
    zWt as ze
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Gh as Be,
    Jy as Ve,
    Kh as He,
    Yy as Ue
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    Cy as We,
    Mu as Ge,
    Nu as Ke,
    _c as qe,
    gc as Je,
    iy as Ye,
    zb as Xe
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    i as Ze,
    t as Qe
} from "./55904901-emabet3jkciurjy4.js";
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
    nt = ge(), Z(), K(), w(), g(), T(), c(), q(), f(), z(), Re(), i(), Ue(), Be(), G(), Ge(), We(), Ee(), Je(), J(), W(), Ne(), Ze(), b(), Y(), De(), X(), A(), O(), F(), h(), P(), o(), j(), L(), Xe(), U(), rt = n(he()), H(), me(), Q = de(), $ = B({
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
            y = ue(),
            b = fe(),
            te = oe(_) ?? ee(),
            x = te?.id,
            re;
        t[0] === n ? re = t[1] : (re = () => we(n), t[0] = n, t[1] = re);
        let S = oe(re),
            C = be(n),
            w = o && S && x != null,
            ie = Oe(x),
            T = pe({
                ...ie,
                enabled: w
            }),
            E = Pe(C, {
                accountId: x,
                workspace: !!te?.getWorkspaceId(),
                locale: v.locale,
                platform: `chat`,
                productSku: Ce.CONNECTOR_SETTING
            }),
            O;
        t[2] !== E || t[3] !== w ? (O = {
            ...E,
            enabled: w
        }, t[2] = E, t[3] = w, t[4] = O) : O = t[4];
        let A = pe(O),
            j;
        if (t[5] !== x || t[6] !== A.data || t[7] !== A.error || t[8] !== C || t[9] !== T.data || t[10] !== T.error || t[11] !== S) {
            let e = T.data == null ? void 0 : T.data[C] ?? [];
            j = Me({
                enabled: S && x != null,
                availability: A.data,
                links: e,
                availabilityError: A.error,
                linksError: T.error
            }), t[5] = x, t[6] = A.data, t[7] = A.error, t[8] = C, t[9] = T.data, t[10] = T.error, t[11] = S, t[12] = j
        } else j = t[12];
        let M = j,
            P = M === `connectable` || M === `reconnectable`,
            F;
        t[13] !== x || t[14] !== n ? (F = () => it(`${x}:${n}`) != null, t[13] = x, t[14] = n, t[15] = F) : F = t[15];
        let I = oe(F),
            L;
        t[16] !== x || t[17] !== E || t[18] !== P || t[19] !== C || t[20] !== i || t[21] !== S || t[22] !== v || t[23] !== ie || t[24] !== y || t[25] !== c || t[26] !== p || t[27] !== m || t[28] !== n || t[29] !== b || t[30] !== h ? (L = async () => {
            let e = ne() ?? ee(),
                t = `${e?.id}:${n}`;
            if (i || !S || !we(n) || !P || e == null || x == null || e.id !== x || l(() => it(t)) != null) return;
            let r = Symbol();
            ae(() => it.set(t, r));
            let a = p ?? (h === `menu` && m != null ? Se(m, `drive_only`) : void 0);
            h === `menu` && ye(a), Te(a, n);
            let o = !1,
                d = e => {
                    o || (o = !0, ze(a, n, e))
                },
                f = () => u().danger(v.formatMessage(k.somethingWentWrong));
            (h === `composer` || h === `floating-composer`) && qe(n, ve.CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED);
            let g = {
                    accountId: e?.id,
                    hasWorkspace: !!e?.getWorkspaceId(),
                    locale: v.locale,
                    platform: `chat`,
                    productSku: Ce.CONNECTOR_SETTING
                },
                _ = Ye(C, g);
            await b.fetchQuery(_).then(async e => {
                if (!we(n) || (ne() ?? ee())?.id !== g.accountId) {
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
                await Ke({
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
                    surface: Fe.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_LIBRARY,
                    onConnectionResult: e => {
                        if (d(e), !(!we(n) || (ne() ?? ee())?.id !== g.accountId))
                            if (e === `connected`) {
                                le();
                                for (let e of [ie.queryKey, E.queryKey, [`connected-resource-link-connections`],
                                        [ce],
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
                d(`retryable_error`), (ne() ?? ee())?.id === g.accountId && f()
            }).finally(() => {
                ae(() => it.set(t, e => e === r ? null : e))
            })
        }, t[16] = x, t[17] = E, t[18] = P, t[19] = C, t[20] = i, t[21] = S, t[22] = v, t[23] = ie, t[24] = y, t[25] = c, t[26] = p, t[27] = m, t[28] = n, t[29] = b, t[30] = h, t[31] = L) : L = t[31];
        let R = se(L),
            z, de;
        if (t[32] !== P || t[33] !== S || t[34] !== o || t[35] !== f || t[36] !== h ? (z = () => {
                h === `composer` && o && S && P && !N() && f?.()
            }, de = [P, S, o, f, h], t[32] = P, t[33] = S, t[34] = o, t[35] = f, t[36] = h, t[37] = z, t[38] = de) : (z = t[37], de = t[38]), (0, rt.useEffect)(z, de), !o || !S) return null;
        if (h === `picker`) {
            if (A.isSuccess && !Ie(A.data) || M === `unavailable`) return null;
            let e;
            t[39] !== A || t[40] !== T ? (e = () => {
                A.refetch(), T.refetch()
            }, t[39] = A, t[40] = T, t[41] = e) : e = t[41];
            let r;
            return t[42] !== i || t[43] !== R || t[44] !== I || t[45] !== n || t[46] !== M || t[47] !== e ? (r = (0, Q.jsx)(ct, {
                provider: n,
                state: M,
                disabled: i,
                isConnecting: I,
                onConnect: R,
                onRetry: e
            }), t[42] = i, t[43] = R, t[44] = I, t[45] = n, t[46] = M, t[47] = e, t[48] = r) : r = t[48], r
        }
        if (!P) return M === `loading` || M === `error` ? null : g;
        let B, me;
        if (t[49] !== i || t[50] !== R || t[51] !== v || t[52] !== I || t[53] !== n || t[54] !== M || t[55] !== h) {
            B = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = v.formatMessage(je(n).label),
                    a = M === `reconnectable` ? v.formatMessage($.reconnectAction, {
                        provider: e
                    }) : n === `google_drive` ? v.formatMessage(ke.connectGoogleDriveAction) : v.formatMessage($.connect, {
                        provider: e
                    });
                if (h === `menu`) {
                    let e;
                    t[58] === n ? e = t[59] : (e = (0, Q.jsx)(Ae, {
                        provider: n,
                        "aria-hidden": `true`,
                        className: `icon`
                    }), t[58] = n, t[59] = e), B = (0, Q.jsx)(Le.Item, {
                        fillContainer: !0,
                        disabled: i || I,
                        className: `text-token-text-primary`,
                        icon: e,
                        label: a,
                        onSelect: R
                    });
                    break bb0
                }
                if (h === `modal`) {
                    B = (0, Q.jsx)(r, {
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
                    B = null;
                    break bb0
                }
                me = M === `reconnectable` ? v.formatMessage($.reconnectPastedLinkTitle, {
                    provider: e
                }) : n === `google_drive` ? v.formatMessage(ke.googleDriveConnectPastedLinkTitle) : v.formatMessage($.pastedLinkTitle, {
                    provider: e
                })
            }
            t[49] = i, t[50] = R, t[51] = v, t[52] = I, t[53] = n, t[54] = M, t[55] = h, t[56] = B, t[57] = me
        } else B = t[56], me = t[57];
        if (B !== Symbol.for(`react.early_return_sentinel`)) return B;
        let H = me,
            he;
        t[60] !== v || t[61] !== n ? (he = n === `google_drive` ? v.formatMessage(ke.googleDriveConnectBeaconDescription) : v.formatMessage($.pastedLinkDescription), t[60] = v, t[61] = n, t[62] = he) : he = t[62];
        let U = he,
            ge;
        t[63] === n ? ge = t[64] : (ge = n.replaceAll(`_`, `-`), t[63] = n, t[64] = ge);
        let W = `composer-${ge}-connect-prompt`;
        if (h === `floating-composer`) {
            let e = i || I,
                r = M === `reconnectable` ? $.reconnect : k.connect,
                a;
            t[65] !== R || t[66] !== e || t[67] !== r ? (a = {
                primaryAction: {
                    disabled: e,
                    onClick: R,
                    text: r
                }
            }, t[65] = R, t[66] = e, t[67] = r, t[68] = a) : a = t[68];
            let o;
            t[69] === n ? o = t[70] : (o = (0, Q.jsx)(Ae, {
                provider: n,
                "aria-hidden": `true`,
                className: `size-6`
            }), t[69] = n, t[70] = o);
            let s;
            t[71] !== U || t[72] !== d || t[73] !== f || t[74] !== a || t[75] !== o || t[76] !== H ? (s = (0, Q.jsx)(xe, {
                actions: a,
                description: U,
                icon: o,
                onDismiss: d,
                onShow: f,
                title: H
            }), t[71] = U, t[72] = d, t[73] = f, t[74] = a, t[75] = o, t[76] = H, t[77] = s) : s = t[77];
            let c;
            return t[78] !== s || t[79] !== W ? (c = (0, Q.jsx)(`div`, {
                "data-testid": W,
                children: s
            }), t[78] = s, t[79] = W, t[80] = c) : c = t[80], c
        }
        let G;
        t[81] === n ? G = t[82] : (G = (0, Q.jsx)(Ae, {
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
        let Ee = i || I,
            De = M === `reconnectable` ? $.reconnect : k.connect,
            Y;
        t[90] === De ? Y = t[91] : (Y = (0, Q.jsx)(V, {
            ...De
        }), t[90] = De, t[91] = Y);
        let X;
        t[92] !== R || t[93] !== I || t[94] !== Ee || t[95] !== Y ? (X = (0, Q.jsx)(r, {
            className: `shrink-0 max-sm:ms-9`,
            color: `secondary`,
            disabled: Ee,
            loading: I,
            onClick: R,
            size: `medium`,
            type: `button`,
            children: Y
        }), t[92] = R, t[93] = I, t[94] = Ee, t[95] = Y, t[96] = X) : X = t[96];
        let Z;
        t[97] !== d || t[98] !== n ? (Z = n !== `google_drive` && d != null && (0, Q.jsx)(D, {
            onClick: d,
            iconSize: `sm`
        }), t[97] = d, t[98] = n, t[99] = Z) : Z = t[99];
        let Ne;
        return t[100] !== G || t[101] !== J || t[102] !== X || t[103] !== Z || t[104] !== W || t[105] !== H ? (Ne = (0, Q.jsxs)(`section`, {
            "aria-label": H,
            className: `border-token-border-light bg-token-bg-primary dark:bg-token-bg-elevated-primary mb-2 flex items-center gap-3 rounded-2xl border p-3 shadow-[0_4px_16px_0_rgba(0,0,0,0.05)] max-sm:flex-wrap`,
            "data-testid": W,
            children: [G, J, X, Z]
        }), t[100] = G, t[101] = J, t[102] = X, t[103] = Z, t[104] = W, t[105] = H, t[106] = Ne) : Ne = t[106], Ne
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
            } = ue(),
            {
                eligible: m,
                isLoading: h
            } = M(u),
            g = (0, rt.useRef)(!1),
            [_, v] = (0, rt.useState)(!1),
            b = S(p.Beacons),
            w = fe(),
            T;
        t[0] === w ? T = t[1] : (T = w.getQueryCache(), t[0] = w, t[1] = T);
        let D = T,
            ae;
        t[2] === f ? ae = t[3] : (ae = () => x({
            pathname: f,
            isWorkMode: ie()
        }), t[2] = f, t[3] = ae);
        let O = oe(ae),
            k;
        t[4] === D ? k = t[5] : (k = e => D.subscribe(t => {
            t.query.queryKey[0] === te[0] && e()
        }), t[4] = D, t[5] = k);
        let A;
        t[6] !== O || t[7] !== f || t[8] !== D ? (A = () => {
            let e = D.findAll({
                queryKey: [...te, null, f, O],
                type: `active`
            });
            return e.length > 0 && e.every(et)
        }, t[6] = O, t[7] = f, t[8] = D, t[9] = A) : A = t[9];
        let j = (0, rt.useSyncExternalStore)(k, A, tt),
            N;
        t[10] !== j || t[11] !== f ? (N = () => C() || y() != null || a() != null || I(f) && !d() && re().status === `pending` && !j, t[10] = j, t[11] = f, t[12] = N) : N = t[12];
        let P = oe(N),
            F;
        t[13] !== r || t[14] !== u || t[15] !== c || t[16] !== n ? (F = () => {
            g.current || (ne() ?? ee())?.id !== r || (g.current = !0, v(!0), qe(n, ve.CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED), E(u), c())
        }, t[13] = r, t[14] = u, t[15] = c, t[16] = n, t[17] = F) : F = t[17];
        let L = se(F);
        if (b || o || P || !we(n) || !_ && (!m || h)) return null;
        let R = s ? `floating-composer` : `composer`,
            z;
        return t[18] !== i || t[19] !== L || t[20] !== l || t[21] !== n || t[22] !== R ? (z = (0, Q.jsx)(at, {
            provider: n,
            disabled: i,
            isVisible: !0,
            onShow: L,
            onDismiss: l,
            variant: R
        }), t[18] = i, t[19] = L, t[20] = l, t[21] = n, t[22] = R, t[23] = z) : z = t[23], z
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
            children: (0, Q.jsx)(Ae, {
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
            children: u ? (0, Q.jsx)(V, {
                ...$.loading
            }) : (0, Q.jsx)(V, {
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
            children: (0, Q.jsx)(V, {
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
                    children: (0, Q.jsx)(V, {
                        ...$.connected
                    })
                })]
            }) : (0, Q.jsx)(V, {
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
//# sourceMappingURL=03f00d69-bv9rb7krctwfib5e.js.map