import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as r,
    Ci as i,
    Dw as a,
    Ew as o,
    GA as s,
    Gs as c,
    HA as l,
    JT as u,
    Ks as d,
    L0 as f,
    M1 as p,
    P1 as m,
    P5 as h,
    R1 as g,
    RA as _,
    S5 as v,
    Si as y,
    T8 as b,
    VA as x,
    Xs as S,
    YT as C,
    Yrt as ee,
    at as te,
    bA as w,
    bi as ne,
    cL as re,
    fc as T,
    g5 as E,
    g8 as D,
    hc as O,
    iit as k,
    it as ie,
    j0 as A,
    lL as j,
    mo as M,
    nt as N,
    ot as ae,
    tt as P,
    vA as F,
    vN as I,
    w1 as oe,
    w8 as L,
    wi as R,
    xA as z,
    yN as se,
    zA as ce,
    zU as le
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
    $Wt as W,
    Ajn as ve,
    BUt as ye,
    BWt as be,
    HWt as xe,
    K9t as G,
    KWt as Se,
    LHn as Ce,
    Mwn as K,
    Nwn as we,
    P9t as q,
    QWt as Te,
    RHn as J,
    U9t as Ee,
    UWt as De,
    VUt as Oe,
    VWt as ke,
    X9t as Ae,
    XWt as je,
    Y9t as Y,
    ZWt as Me,
    Zjn as Ne,
    eGt as X,
    fSn as Z,
    iTn as Pe,
    lGt as Fe,
    rTn as Ie,
    tGt as Le,
    uGt as Re,
    wwn as ze
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    Gh as Be,
    Jy as Ve,
    Kh as He,
    Yy as Ue
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    Au as We,
    Lb as Ge,
    _c as Ke,
    gc as qe,
    ju as Je,
    ny as Ye,
    xy as Xe
} from "./8b34dbc2-ba6wt3zxvh7jce7p.js";
import {
    i as Ze,
    t as Qe
} from "./55904901-kynxb804wx5jca51.js";
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
    nt = ge(), K(), q(), C(), a(), M(), z(), Oe(), x(), k(), J(), A(), Ue(), Be(), Pe(), We(), Xe(), Z(), qe(), ke(), Y(), Re(), Ze(), R(), W(), G(), X(), j(), D(), g(), r(), T(), I(), N(), d(), Ge(), U(), rt = n(he()), H(), me(), Q = de(), $ = B({
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
    }), it = b(e => L(null)), at = e => {
        "use forget";
        let t = (0, nt.c)(107),
            {
                provider: n,
                disabled: r,
                fallback: a,
                isVisible: s,
                onConnected: c,
                onDismiss: l,
                onShow: d,
                onboardingJourney: f,
                onboardingSource: g,
                variant: _
            } = e,
            b = a === void 0 ? null : a,
            x = _e(),
            S = ue(),
            C = fe(),
            te = h(oe) ?? m(),
            w = te?.id,
            T;
        t[0] === n ? T = t[1] : (T = () => Le(n), t[0] = n, t[1] = T);
        let D = h(T),
            O = Me(n),
            k = s && D && w != null,
            ie = Te(w),
            A = pe({
                ...ie,
                enabled: k
            }),
            j = ze(O, {
                accountId: w,
                workspace: !!te?.getWorkspaceId(),
                locale: x.locale,
                platform: `chat`,
                productSku: Ie.CONNECTOR_SETTING
            }),
            M;
        t[2] !== j || t[3] !== k ? (M = {
            ...j,
            enabled: k
        }, t[2] = j, t[3] = k, t[4] = M) : M = t[4];
        let N = pe(M),
            ae;
        if (t[5] !== w || t[6] !== N.data || t[7] !== N.error || t[8] !== O || t[9] !== A.data || t[10] !== A.error || t[11] !== D) {
            let e = A.data == null ? void 0 : A.data[O] ?? [];
            ae = je({
                enabled: D && w != null,
                availability: N.data,
                links: e,
                availabilityError: N.error,
                linksError: A.error
            }), t[5] = w, t[6] = N.data, t[7] = N.error, t[8] = O, t[9] = A.data, t[10] = A.error, t[11] = D, t[12] = ae
        } else ae = t[12];
        let P = ae,
            F = P === `connectable` || P === `reconnectable`,
            I;
        t[13] !== w || t[14] !== n ? (I = () => it(`${w}:${n}`) != null, t[13] = w, t[14] = n, t[15] = I) : I = t[15];
        let L = h(I),
            R;
        t[16] !== w || t[17] !== j || t[18] !== F || t[19] !== O || t[20] !== r || t[21] !== D || t[22] !== x || t[23] !== ie || t[24] !== S || t[25] !== c || t[26] !== f || t[27] !== g || t[28] !== n || t[29] !== C || t[30] !== _ ? (R = async () => {
            let e = p() ?? m(),
                t = `${e?.id}:${n}`;
            if (r || !D || !Le(n) || !F || e == null || w == null || e.id !== w || v(() => it(t)) != null) return;
            let a = Symbol();
            E(() => it.set(t, a));
            let o = f ?? (_ === `menu` && g != null ? be(g, `drive_only`) : void 0);
            _ === `menu` && De(o), Se(o, n);
            let s = !1,
                l = e => {
                    s || (s = !0, xe(o, n, e))
                },
                u = () => le().danger(x.formatMessage(ee.somethingWentWrong));
            (_ === `composer` || _ === `floating-composer`) && Ke(n, Ne.CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED);
            let d = {
                    accountId: e?.id,
                    hasWorkspace: !!e?.getWorkspaceId(),
                    locale: x.locale,
                    platform: `chat`,
                    productSku: Ie.CONNECTOR_SETTING
                },
                h = Ye(O, d);
            await C.fetchQuery(h).then(async e => {
                if (!Le(n) || (p() ?? m())?.id !== d.accountId) {
                    l(`cancelled`);
                    return
                }
                if (e == null) {
                    C.removeQueries({
                        queryKey: h.queryKey,
                        exact: !0
                    }), l(`unavailable`), u();
                    return
                }
                await Je({
                    queryClient: C,
                    pluginId: e,
                    sourceAttributionId: o?.journeyId,
                    installAccountId: d.accountId,
                    requestContext: d,
                    closeOnCompletion: !0,
                    requireActiveConnectorLinks: !0,
                    pathname: S.pathname,
                    search: S.search,
                    searchParams: new URLSearchParams(S.search),
                    intl: x,
                    surface: ve.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_LIBRARY,
                    onConnectionResult: e => {
                        if (l(e), !(!Le(n) || (p() ?? m())?.id !== d.accountId))
                            if (e === `connected`) {
                                ne();
                                for (let e of [ie.queryKey, j.queryKey, [`connected-resource-link-connections`],
                                        [i],
                                        [y],
                                        [Qe]
                                    ]) C.invalidateQueries({
                                    queryKey: e
                                });
                                c?.()
                            } else e === `unavailable` && u()
                    }
                })
            }).catch(() => {
                l(`retryable_error`), (p() ?? m())?.id === d.accountId && u()
            }).finally(() => {
                E(() => it.set(t, e => e === a ? null : e))
            })
        }, t[16] = w, t[17] = j, t[18] = F, t[19] = O, t[20] = r, t[21] = D, t[22] = x, t[23] = ie, t[24] = S, t[25] = c, t[26] = f, t[27] = g, t[28] = n, t[29] = C, t[30] = _, t[31] = R) : R = t[31];
        let z = se(R),
            ce, de;
        if (t[32] !== F || t[33] !== D || t[34] !== s || t[35] !== d || t[36] !== _ ? (ce = () => {
                _ === `composer` && s && D && F && !re() && d?.()
            }, de = [F, D, s, d, _], t[32] = F, t[33] = D, t[34] = s, t[35] = d, t[36] = _, t[37] = ce, t[38] = de) : (ce = t[37], de = t[38]), (0, rt.useEffect)(ce, de), !s || !D) return null;
        if (_ === `picker`) {
            if (N.isSuccess && !we(N.data) || P === `unavailable`) return null;
            let e;
            t[39] !== N || t[40] !== A ? (e = () => {
                N.refetch(), A.refetch()
            }, t[39] = N, t[40] = A, t[41] = e) : e = t[41];
            let i;
            return t[42] !== r || t[43] !== z || t[44] !== L || t[45] !== n || t[46] !== P || t[47] !== e ? (i = (0, Q.jsx)(ct, {
                provider: n,
                state: P,
                disabled: r,
                isConnecting: L,
                onConnect: z,
                onRetry: e
            }), t[42] = r, t[43] = z, t[44] = L, t[45] = n, t[46] = P, t[47] = e, t[48] = i) : i = t[48], i
        }
        if (!F) return P === `loading` || P === `error` ? null : b;
        let B, me;
        if (t[49] !== r || t[50] !== z || t[51] !== x || t[52] !== L || t[53] !== n || t[54] !== P || t[55] !== _) {
            B = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = x.formatMessage(Ee(n).label),
                    i = P === `reconnectable` ? x.formatMessage($.reconnectAction, {
                        provider: e
                    }) : n === `google_drive` ? x.formatMessage(Ae.connectGoogleDriveAction) : x.formatMessage($.connect, {
                        provider: e
                    });
                if (_ === `menu`) {
                    let e;
                    t[58] === n ? e = t[59] : (e = (0, Q.jsx)(Fe, {
                        provider: n,
                        "aria-hidden": `true`,
                        className: `icon`
                    }), t[58] = n, t[59] = e), B = (0, Q.jsx)(Ce.Item, {
                        fillContainer: !0,
                        disabled: r || L,
                        className: `text-token-text-primary`,
                        icon: e,
                        label: i,
                        onSelect: z
                    });
                    break bb0
                }
                if (_ === `modal`) {
                    B = (0, Q.jsx)(u, {
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
                if (re()) {
                    B = null;
                    break bb0
                }
                me = P === `reconnectable` ? x.formatMessage($.reconnectPastedLinkTitle, {
                    provider: e
                }) : n === `google_drive` ? x.formatMessage(Ae.googleDriveConnectPastedLinkTitle) : x.formatMessage($.pastedLinkTitle, {
                    provider: e
                })
            }
            t[49] = r, t[50] = z, t[51] = x, t[52] = L, t[53] = n, t[54] = P, t[55] = _, t[56] = B, t[57] = me
        } else B = t[56], me = t[57];
        if (B !== Symbol.for(`react.early_return_sentinel`)) return B;
        let H = me,
            he;
        t[60] !== x || t[61] !== n ? (he = n === `google_drive` ? x.formatMessage(Ae.googleDriveConnectBeaconDescription) : x.formatMessage($.pastedLinkDescription), t[60] = x, t[61] = n, t[62] = he) : he = t[62];
        let U = he,
            ge;
        t[63] === n ? ge = t[64] : (ge = n.replaceAll(`_`, `-`), t[63] = n, t[64] = ge);
        let W = `composer-${ge}-connect-prompt`;
        if (_ === `floating-composer`) {
            let e = r || L,
                i = P === `reconnectable` ? $.reconnect : ee.connect,
                a;
            t[65] !== z || t[66] !== e || t[67] !== i ? (a = {
                primaryAction: {
                    disabled: e,
                    onClick: z,
                    text: i
                }
            }, t[65] = z, t[66] = e, t[67] = i, t[68] = a) : a = t[68];
            let o;
            t[69] === n ? o = t[70] : (o = (0, Q.jsx)(Fe, {
                provider: n,
                "aria-hidden": `true`,
                className: `size-6`
            }), t[69] = n, t[70] = o);
            let s;
            t[71] !== U || t[72] !== l || t[73] !== d || t[74] !== a || t[75] !== o || t[76] !== H ? (s = (0, Q.jsx)(ye, {
                actions: a,
                description: U,
                icon: o,
                onDismiss: l,
                onShow: d,
                title: H
            }), t[71] = U, t[72] = l, t[73] = d, t[74] = a, t[75] = o, t[76] = H, t[77] = s) : s = t[77];
            let c;
            return t[78] !== s || t[79] !== W ? (c = (0, Q.jsx)(`div`, {
                "data-testid": W,
                children: s
            }), t[78] = s, t[79] = W, t[80] = c) : c = t[80], c
        }
        let G;
        t[81] === n ? G = t[82] : (G = (0, Q.jsx)(Fe, {
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
            ke = P === `reconnectable` ? $.reconnect : ee.connect,
            Y;
        t[90] === ke ? Y = t[91] : (Y = (0, Q.jsx)(V, {
            ...ke
        }), t[90] = ke, t[91] = Y);
        let X;
        t[92] !== z || t[93] !== L || t[94] !== Oe || t[95] !== Y ? (X = (0, Q.jsx)(u, {
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
        t[97] !== l || t[98] !== n ? (Z = n !== `google_drive` && l != null && (0, Q.jsx)(o, {
            onClick: l,
            iconSize: `sm`
        }), t[97] = l, t[98] = n, t[99] = Z) : Z = t[99];
        let Pe;
        return t[100] !== G || t[101] !== J || t[102] !== X || t[103] !== Z || t[104] !== W || t[105] !== H ? (Pe = (0, Q.jsxs)(`section`, {
            "aria-label": H,
            className: `border-token-border-light bg-token-bg-primary dark:bg-token-bg-elevated-primary mb-2 flex items-center gap-3 rounded-2xl border p-3 shadow-[0_4px_16px_0_rgba(0,0,0,0.05)] max-sm:flex-wrap`,
            "data-testid": W,
            children: [G, J, X, Z]
        }), t[100] = G, t[101] = J, t[102] = X, t[103] = Z, t[104] = W, t[105] = H, t[106] = Pe) : Pe = t[106], Pe
    }, ot = {
        sharepoint: P.hasSeenLibrarySharePointPastedLinkConnect,
        onedrive: P.hasSeenLibrarySharePointPastedLinkConnect,
        dropbox: P.hasSeenLibraryDropboxPastedLinkConnect,
        box: P.hasSeenLibraryBoxPastedLinkConnect
    }, st = e => {
        "use forget";
        let t = (0, nt.c)(24),
            {
                provider: n,
                accountId: r,
                disabled: i,
                hasConversationBeacon: a,
                isNewThread: o,
                onShow: u,
                onDismiss: d
            } = e,
            g = ot[n],
            {
                pathname: v
            } = ue(),
            {
                eligible: y,
                isLoading: b
            } = ae(g),
            x = (0, rt.useRef)(!1),
            [C, ee] = (0, rt.useState)(!1),
            ne = S(c.Beacons),
            re = fe(),
            T;
        t[0] === re ? T = t[1] : (T = re.getQueryCache(), t[0] = re, t[1] = T);
        let E = T,
            D;
        t[2] === v ? D = t[3] : (D = () => ce({
            pathname: v,
            isWorkMode: O()
        }), t[2] = v, t[3] = D);
        let k = h(D),
            A;
        t[4] === E ? A = t[5] : (A = e => E.subscribe(t => {
            t.query.queryKey[0] === _[0] && e()
        }), t[4] = E, t[5] = A);
        let j;
        t[6] !== k || t[7] !== v || t[8] !== E ? (j = () => {
            let e = E.findAll({
                queryKey: [..._, null, v, k],
                type: `active`
            });
            return e.length > 0 && e.every(et)
        }, t[6] = k, t[7] = v, t[8] = E, t[9] = j) : j = t[9];
        let M = (0, rt.useSyncExternalStore)(A, j, tt),
            N;
        t[10] !== M || t[11] !== v ? (N = () => te() || w() != null || F() != null || l(v) && !f() && s().status === `pending` && !M, t[10] = M, t[11] = v, t[12] = N) : N = t[12];
        let P = h(N),
            I;
        t[13] !== r || t[14] !== g || t[15] !== u || t[16] !== n ? (I = () => {
            x.current || (p() ?? m())?.id !== r || (x.current = !0, ee(!0), Ke(n, Ne.CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED), ie(g), u())
        }, t[13] = r, t[14] = g, t[15] = u, t[16] = n, t[17] = I) : I = t[17];
        let oe = se(I);
        if (ne || a || P || !Le(n) || !C && (!y || b)) return null;
        let L = o ? `floating-composer` : `composer`,
            R;
        return t[18] !== i || t[19] !== oe || t[20] !== d || t[21] !== n || t[22] !== L ? (R = (0, Q.jsx)(at, {
            provider: n,
            disabled: i,
            isVisible: !0,
            onShow: oe,
            onDismiss: d,
            variant: L
        }), t[18] = i, t[19] = oe, t[20] = d, t[21] = n, t[22] = L, t[23] = R) : R = t[23], R
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
            d = _e(),
            f, p, m, h;
        t[0] !== c || t[1] !== d || t[2] !== l || t[3] !== n || t[4] !== r ? (m = d.formatMessage(Ee(n).label), f = c || l || r !== `connectable` && r !== `reconnectable`, p = r === `loading` || l, h = p ? d.formatMessage($.loading) : d.formatMessage($.connect, {
            provider: m
        }), t[0] = c, t[1] = d, t[2] = l, t[3] = n, t[4] = r, t[5] = f, t[6] = p, t[7] = m, t[8] = h) : (f = t[5], p = t[6], m = t[7], h = t[8]);
        let g = h,
            _;
        t[9] === n ? _ = t[10] : (_ = (0, Q.jsx)(`span`, {
            className: `border-token-border-default bg-token-bg-primary flex size-[45px] shrink-0 items-center justify-center rounded-full border`,
            children: (0, Q.jsx)(Fe, {
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
        t[13] !== g || t[14] !== f || t[15] !== d || t[16] !== l || t[17] !== p || t[18] !== m || t[19] !== o || t[20] !== s || t[21] !== r ? (y = r === `reconnectable` ? (0, Q.jsx)(u, {
            "aria-label": d.formatMessage($.reconnectAction, {
                provider: m
            }),
            "aria-disabled": f,
            "aria-busy": l,
            color: `secondary`,
            visuallyDisabled: f,
            onClick: e => {
                f ? e.preventDefault() : o()
            },
            size: `small`,
            type: `button`,
            children: l ? (0, Q.jsx)(V, {
                ...$.loading
            }) : (0, Q.jsx)(V, {
                ...$.reconnect
            })
        }) : r === `connectable` || r === `loading` ? (0, Q.jsx)(u, {
            label: g,
            "aria-disabled": f,
            "aria-busy": p,
            className: `size-8 shrink-0 rounded-full p-0!`,
            color: `secondary`,
            icon: He,
            loading: p,
            visuallyDisabled: f,
            onClick: e => {
                f ? e.preventDefault() : o()
            },
            size: `small`,
            type: `button`
        }) : r === `error` ? (0, Q.jsx)(u, {
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
        }), t[13] = g, t[14] = f, t[15] = d, t[16] = l, t[17] = p, t[18] = m, t[19] = o, t[20] = s, t[21] = r, t[22] = y) : y = t[22];
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
//# sourceMappingURL=03f00d69-gr2hn36n9acjse2f.js.map