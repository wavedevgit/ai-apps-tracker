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
    Grt as c,
    Gs as l,
    HA as u,
    JT as d,
    Ks as f,
    L0 as p,
    M1 as m,
    P1 as h,
    P5 as g,
    R1 as _,
    RA as v,
    S5 as y,
    Si as b,
    T8 as ee,
    VA as x,
    Xs as S,
    YT as C,
    at as te,
    bA as w,
    bi as ne,
    cL as re,
    eit as T,
    fc as E,
    g5 as D,
    g8 as O,
    hc as ie,
    it as ae,
    j0 as k,
    lL as A,
    mo as j,
    nt as M,
    ot as oe,
    tt as N,
    vA as P,
    vN as F,
    w1 as se,
    w8 as I,
    wi as L,
    xA as R,
    yN as ce,
    zA as le,
    zU as ue
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
    $Wt as W,
    BUt as ve,
    BWt as ye,
    HWt as be,
    IHn as xe,
    K9t as G,
    KWt as Se,
    LHn as K,
    Mwn as q,
    Nwn as Ce,
    P9t as J,
    QWt as we,
    U9t as Te,
    UWt as Ee,
    VUt as De,
    VWt as Oe,
    X9t as ke,
    XWt as Ae,
    Xjn as je,
    Y9t as Y,
    ZWt as Me,
    eGt as X,
    fSn as Z,
    iTn as Ne,
    kjn as Pe,
    lGt as Fe,
    rTn as Ie,
    tGt as Le,
    uGt as Re,
    wwn as ze
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Gh as Be,
    Jy as Ve,
    Kh as He,
    Yy as Ue
} from "./30901919-e8h11sw136qen6v0.js";
import {
    Au as We,
    Lb as Ge,
    _c as Ke,
    gc as qe,
    ju as Je,
    ny as Ye,
    xy as Xe
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
import {
    i as Ze,
    t as Qe
} from "./55904901-is8koj9c1rakt3ty.js";
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
    nt = ge(), q(), J(), C(), a(), j(), R(), De(), x(), T(), K(), k(), Ue(), Be(), Ne(), We(), Xe(), Z(), qe(), Oe(), Y(), Re(), Ze(), L(), W(), G(), X(), A(), O(), _(), r(), E(), F(), M(), f(), Ge(), U(), rt = n(he()), H(), V(), Q = fe(), $ = z({
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
    }), it = ee(e => I(null)), at = e => {
        "use forget";
        let t = (0, nt.c)(107),
            {
                provider: n,
                disabled: r,
                fallback: a,
                isVisible: s,
                onConnected: l,
                onDismiss: u,
                onShow: f,
                onboardingJourney: p,
                onboardingSource: _,
                variant: v
            } = e,
            ee = a === void 0 ? null : a,
            x = _e(),
            S = de(),
            C = pe(),
            te = g(se) ?? h(),
            w = te?.id,
            T;
        t[0] === n ? T = t[1] : (T = () => Le(n), t[0] = n, t[1] = T);
        let E = g(T),
            O = Me(n),
            ie = s && E && w != null,
            ae = we(w),
            k = me({
                ...ae,
                enabled: ie
            }),
            A = ze(O, {
                accountId: w,
                workspace: !!te?.getWorkspaceId(),
                locale: x.locale,
                platform: `chat`,
                productSku: Ie.CONNECTOR_SETTING
            }),
            j;
        t[2] !== A || t[3] !== ie ? (j = {
            ...A,
            enabled: ie
        }, t[2] = A, t[3] = ie, t[4] = j) : j = t[4];
        let M = me(j),
            oe;
        if (t[5] !== w || t[6] !== M.data || t[7] !== M.error || t[8] !== O || t[9] !== k.data || t[10] !== k.error || t[11] !== E) {
            let e = k.data == null ? void 0 : k.data[O] ?? [];
            oe = Ae({
                enabled: E && w != null,
                availability: M.data,
                links: e,
                availabilityError: M.error,
                linksError: k.error
            }), t[5] = w, t[6] = M.data, t[7] = M.error, t[8] = O, t[9] = k.data, t[10] = k.error, t[11] = E, t[12] = oe
        } else oe = t[12];
        let N = oe,
            P = N === `connectable` || N === `reconnectable`,
            F;
        t[13] !== w || t[14] !== n ? (F = () => it(`${w}:${n}`) != null, t[13] = w, t[14] = n, t[15] = F) : F = t[15];
        let I = g(F),
            L;
        t[16] !== w || t[17] !== A || t[18] !== P || t[19] !== O || t[20] !== r || t[21] !== E || t[22] !== x || t[23] !== ae || t[24] !== S || t[25] !== l || t[26] !== p || t[27] !== _ || t[28] !== n || t[29] !== C || t[30] !== v ? (L = async () => {
            let e = m() ?? h(),
                t = `${e?.id}:${n}`;
            if (r || !E || !Le(n) || !P || e == null || w == null || e.id !== w || y(() => it(t)) != null) return;
            let a = Symbol();
            D(() => it.set(t, a));
            let o = p ?? (v === `menu` && _ != null ? ye(_, `drive_only`) : void 0);
            v === `menu` && Ee(o), Se(o, n);
            let s = !1,
                u = e => {
                    s || (s = !0, be(o, n, e))
                },
                d = () => ue().danger(x.formatMessage(c.somethingWentWrong));
            (v === `composer` || v === `floating-composer`) && Ke(n, je.CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED);
            let f = {
                    accountId: e?.id,
                    hasWorkspace: !!e?.getWorkspaceId(),
                    locale: x.locale,
                    platform: `chat`,
                    productSku: Ie.CONNECTOR_SETTING
                },
                g = Ye(O, f);
            await C.fetchQuery(g).then(async e => {
                if (!Le(n) || (m() ?? h())?.id !== f.accountId) {
                    u(`cancelled`);
                    return
                }
                if (e == null) {
                    C.removeQueries({
                        queryKey: g.queryKey,
                        exact: !0
                    }), u(`unavailable`), d();
                    return
                }
                await Je({
                    queryClient: C,
                    pluginId: e,
                    sourceAttributionId: o?.journeyId,
                    installAccountId: f.accountId,
                    requestContext: f,
                    closeOnCompletion: !0,
                    requireActiveConnectorLinks: !0,
                    pathname: S.pathname,
                    search: S.search,
                    searchParams: new URLSearchParams(S.search),
                    intl: x,
                    surface: Pe.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_LIBRARY,
                    onConnectionResult: e => {
                        if (u(e), !(!Le(n) || (m() ?? h())?.id !== f.accountId))
                            if (e === `connected`) {
                                ne();
                                for (let e of [ae.queryKey, A.queryKey, [`connected-resource-link-connections`],
                                        [i],
                                        [b],
                                        [Qe]
                                    ]) C.invalidateQueries({
                                    queryKey: e
                                });
                                l?.()
                            } else e === `unavailable` && d()
                    }
                })
            }).catch(() => {
                u(`retryable_error`), (m() ?? h())?.id === f.accountId && d()
            }).finally(() => {
                D(() => it.set(t, e => e === a ? null : e))
            })
        }, t[16] = w, t[17] = A, t[18] = P, t[19] = O, t[20] = r, t[21] = E, t[22] = x, t[23] = ae, t[24] = S, t[25] = l, t[26] = p, t[27] = _, t[28] = n, t[29] = C, t[30] = v, t[31] = L) : L = t[31];
        let R = ce(L),
            le, fe;
        if (t[32] !== P || t[33] !== E || t[34] !== s || t[35] !== f || t[36] !== v ? (le = () => {
                v === `composer` && s && E && P && !re() && f?.()
            }, fe = [P, E, s, f, v], t[32] = P, t[33] = E, t[34] = s, t[35] = f, t[36] = v, t[37] = le, t[38] = fe) : (le = t[37], fe = t[38]), (0, rt.useEffect)(le, fe), !s || !E) return null;
        if (v === `picker`) {
            if (M.isSuccess && !Ce(M.data) || N === `unavailable`) return null;
            let e;
            t[39] !== M || t[40] !== k ? (e = () => {
                M.refetch(), k.refetch()
            }, t[39] = M, t[40] = k, t[41] = e) : e = t[41];
            let i;
            return t[42] !== r || t[43] !== R || t[44] !== I || t[45] !== n || t[46] !== N || t[47] !== e ? (i = (0, Q.jsx)(ct, {
                provider: n,
                state: N,
                disabled: r,
                isConnecting: I,
                onConnect: R,
                onRetry: e
            }), t[42] = r, t[43] = R, t[44] = I, t[45] = n, t[46] = N, t[47] = e, t[48] = i) : i = t[48], i
        }
        if (!P) return N === `loading` || N === `error` ? null : ee;
        let z, V;
        if (t[49] !== r || t[50] !== R || t[51] !== x || t[52] !== I || t[53] !== n || t[54] !== N || t[55] !== v) {
            z = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = x.formatMessage(Te(n).label),
                    i = N === `reconnectable` ? x.formatMessage($.reconnectAction, {
                        provider: e
                    }) : n === `google_drive` ? x.formatMessage(ke.connectGoogleDriveAction) : x.formatMessage($.connect, {
                        provider: e
                    });
                if (v === `menu`) {
                    let e;
                    t[58] === n ? e = t[59] : (e = (0, Q.jsx)(Fe, {
                        provider: n,
                        "aria-hidden": `true`,
                        className: `icon`
                    }), t[58] = n, t[59] = e), z = (0, Q.jsx)(xe.Item, {
                        fillContainer: !0,
                        disabled: r || I,
                        className: `text-token-text-primary`,
                        icon: e,
                        label: i,
                        onSelect: R
                    });
                    break bb0
                }
                if (v === `modal`) {
                    z = (0, Q.jsx)(d, {
                        className: `rounded-full px-6 max-sm:w-full`,
                        color: `primary`,
                        "aria-disabled": r || I,
                        visuallyDisabled: r || I,
                        loading: I,
                        onClick: R,
                        size: `large`,
                        type: `button`,
                        children: i
                    });
                    break bb0
                }
                if (re()) {
                    z = null;
                    break bb0
                }
                V = N === `reconnectable` ? x.formatMessage($.reconnectPastedLinkTitle, {
                    provider: e
                }) : n === `google_drive` ? x.formatMessage(ke.googleDriveConnectPastedLinkTitle) : x.formatMessage($.pastedLinkTitle, {
                    provider: e
                })
            }
            t[49] = r, t[50] = R, t[51] = x, t[52] = I, t[53] = n, t[54] = N, t[55] = v, t[56] = z, t[57] = V
        } else z = t[56], V = t[57];
        if (z !== Symbol.for(`react.early_return_sentinel`)) return z;
        let H = V,
            he;
        t[60] !== x || t[61] !== n ? (he = n === `google_drive` ? x.formatMessage(ke.googleDriveConnectBeaconDescription) : x.formatMessage($.pastedLinkDescription), t[60] = x, t[61] = n, t[62] = he) : he = t[62];
        let U = he,
            ge;
        t[63] === n ? ge = t[64] : (ge = n.replaceAll(`_`, `-`), t[63] = n, t[64] = ge);
        let W = `composer-${ge}-connect-prompt`;
        if (v === `floating-composer`) {
            let e = r || I,
                i = N === `reconnectable` ? $.reconnect : c.connect,
                a;
            t[65] !== R || t[66] !== e || t[67] !== i ? (a = {
                primaryAction: {
                    disabled: e,
                    onClick: R,
                    text: i
                }
            }, t[65] = R, t[66] = e, t[67] = i, t[68] = a) : a = t[68];
            let o;
            t[69] === n ? o = t[70] : (o = (0, Q.jsx)(Fe, {
                provider: n,
                "aria-hidden": `true`,
                className: `size-6`
            }), t[69] = n, t[70] = o);
            let s;
            t[71] !== U || t[72] !== u || t[73] !== f || t[74] !== a || t[75] !== o || t[76] !== H ? (s = (0, Q.jsx)(ve, {
                actions: a,
                description: U,
                icon: o,
                onDismiss: u,
                onShow: f,
                title: H
            }), t[71] = U, t[72] = u, t[73] = f, t[74] = a, t[75] = o, t[76] = H, t[77] = s) : s = t[77];
            let l;
            return t[78] !== s || t[79] !== W ? (l = (0, Q.jsx)(`div`, {
                "data-testid": W,
                children: s
            }), t[78] = s, t[79] = W, t[80] = l) : l = t[80], l
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
        let De = r || I,
            Oe = N === `reconnectable` ? $.reconnect : c.connect,
            Y;
        t[90] === Oe ? Y = t[91] : (Y = (0, Q.jsx)(B, {
            ...Oe
        }), t[90] = Oe, t[91] = Y);
        let X;
        t[92] !== R || t[93] !== I || t[94] !== De || t[95] !== Y ? (X = (0, Q.jsx)(d, {
            className: `shrink-0 max-sm:ms-9`,
            color: `secondary`,
            disabled: De,
            loading: I,
            onClick: R,
            size: `medium`,
            type: `button`,
            children: Y
        }), t[92] = R, t[93] = I, t[94] = De, t[95] = Y, t[96] = X) : X = t[96];
        let Z;
        t[97] !== u || t[98] !== n ? (Z = n !== `google_drive` && u != null && (0, Q.jsx)(o, {
            onClick: u,
            iconSize: `sm`
        }), t[97] = u, t[98] = n, t[99] = Z) : Z = t[99];
        let Ne;
        return t[100] !== G || t[101] !== J || t[102] !== X || t[103] !== Z || t[104] !== W || t[105] !== H ? (Ne = (0, Q.jsxs)(`section`, {
            "aria-label": H,
            className: `border-token-border-light bg-token-bg-primary dark:bg-token-bg-elevated-primary mb-2 flex items-center gap-3 rounded-2xl border p-3 shadow-[0_4px_16px_0_rgba(0,0,0,0.05)] max-sm:flex-wrap`,
            "data-testid": W,
            children: [G, J, X, Z]
        }), t[100] = G, t[101] = J, t[102] = X, t[103] = Z, t[104] = W, t[105] = H, t[106] = Ne) : Ne = t[106], Ne
    }, ot = {
        sharepoint: N.hasSeenLibrarySharePointPastedLinkConnect,
        onedrive: N.hasSeenLibrarySharePointPastedLinkConnect,
        dropbox: N.hasSeenLibraryDropboxPastedLinkConnect,
        box: N.hasSeenLibraryBoxPastedLinkConnect
    }, st = e => {
        "use forget";
        let t = (0, nt.c)(24),
            {
                provider: n,
                accountId: r,
                disabled: i,
                hasConversationBeacon: a,
                isNewThread: o,
                onShow: c,
                onDismiss: d
            } = e,
            f = ot[n],
            {
                pathname: _
            } = de(),
            {
                eligible: y,
                isLoading: b
            } = oe(f),
            ee = (0, rt.useRef)(!1),
            [x, C] = (0, rt.useState)(!1),
            ne = S(l.Beacons),
            re = pe(),
            T;
        t[0] === re ? T = t[1] : (T = re.getQueryCache(), t[0] = re, t[1] = T);
        let E = T,
            D;
        t[2] === _ ? D = t[3] : (D = () => le({
            pathname: _,
            isWorkMode: ie()
        }), t[2] = _, t[3] = D);
        let O = g(D),
            k;
        t[4] === E ? k = t[5] : (k = e => E.subscribe(t => {
            t.query.queryKey[0] === v[0] && e()
        }), t[4] = E, t[5] = k);
        let A;
        t[6] !== O || t[7] !== _ || t[8] !== E ? (A = () => {
            let e = E.findAll({
                queryKey: [...v, null, _, O],
                type: `active`
            });
            return e.length > 0 && e.every(et)
        }, t[6] = O, t[7] = _, t[8] = E, t[9] = A) : A = t[9];
        let j = (0, rt.useSyncExternalStore)(k, A, tt),
            M;
        t[10] !== j || t[11] !== _ ? (M = () => te() || w() != null || P() != null || u(_) && !p() && s().status === `pending` && !j, t[10] = j, t[11] = _, t[12] = M) : M = t[12];
        let N = g(M),
            F;
        t[13] !== r || t[14] !== f || t[15] !== c || t[16] !== n ? (F = () => {
            ee.current || (m() ?? h())?.id !== r || (ee.current = !0, C(!0), Ke(n, je.CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED), ae(f), c())
        }, t[13] = r, t[14] = f, t[15] = c, t[16] = n, t[17] = F) : F = t[17];
        let se = ce(F);
        if (ne || a || N || !Le(n) || !x && (!y || b)) return null;
        let I = o ? `floating-composer` : `composer`,
            L;
        return t[18] !== i || t[19] !== se || t[20] !== d || t[21] !== n || t[22] !== I ? (L = (0, Q.jsx)(at, {
            provider: n,
            disabled: i,
            isVisible: !0,
            onShow: se,
            onDismiss: d,
            variant: I
        }), t[18] = i, t[19] = se, t[20] = d, t[21] = n, t[22] = I, t[23] = L) : L = t[23], L
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
            f, p, m, h;
        t[0] !== c || t[1] !== u || t[2] !== l || t[3] !== n || t[4] !== r ? (m = u.formatMessage(Te(n).label), f = c || l || r !== `connectable` && r !== `reconnectable`, p = r === `loading` || l, h = p ? u.formatMessage($.loading) : u.formatMessage($.connect, {
            provider: m
        }), t[0] = c, t[1] = u, t[2] = l, t[3] = n, t[4] = r, t[5] = f, t[6] = p, t[7] = m, t[8] = h) : (f = t[5], p = t[6], m = t[7], h = t[8]);
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
        t[13] !== g || t[14] !== f || t[15] !== u || t[16] !== l || t[17] !== p || t[18] !== m || t[19] !== o || t[20] !== s || t[21] !== r ? (y = r === `reconnectable` ? (0, Q.jsx)(d, {
            "aria-label": u.formatMessage($.reconnectAction, {
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
            children: l ? (0, Q.jsx)(B, {
                ...$.loading
            }) : (0, Q.jsx)(B, {
                ...$.reconnect
            })
        }) : r === `connectable` || r === `loading` ? (0, Q.jsx)(d, {
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
        }) : r === `error` ? (0, Q.jsx)(d, {
            color: `secondary`,
            onClick: s,
            size: `small`,
            type: `button`,
            children: (0, Q.jsx)(B, {
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
                    children: (0, Q.jsx)(B, {
                        ...$.connected
                    })
                })]
            }) : (0, Q.jsx)(B, {
                ...$.unavailable
            })
        }), t[13] = g, t[14] = f, t[15] = u, t[16] = l, t[17] = p, t[18] = m, t[19] = o, t[20] = s, t[21] = r, t[22] = y) : y = t[22];
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
//# sourceMappingURL=03f00d69-ioyi8pyw5iwwua2j.js.map