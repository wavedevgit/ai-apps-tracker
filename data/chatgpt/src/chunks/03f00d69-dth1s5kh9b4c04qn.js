import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    A5 as i,
    A8 as a,
    B0 as o,
    CA as s,
    CN as c,
    Ci as l,
    EA as u,
    I5 as d,
    IU as f,
    J5 as p,
    K0 as m,
    KA as h,
    Ks as g,
    LU as _,
    Mw as v,
    N1 as y,
    R8 as b,
    TA as x,
    Ti as S,
    U1 as C,
    UA as ee,
    V1 as te,
    WA as w,
    XA as ne,
    Zs as T,
    at as E,
    eE as D,
    gc as re,
    ho as O,
    it as k,
    jw as ie,
    mL as A,
    nt as j,
    ot as ae,
    pL as M,
    pc as N,
    q1 as P,
    qA as oe,
    qs as F,
    tt as I,
    uit as L,
    wN as se,
    wi as ce,
    xi as le,
    yit as R,
    z8 as ue
} from "./4813494d-r54yv6lv29x4ew99.js";
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
    $9t as ve,
    AMn as ye,
    BWt as be,
    FTn as W,
    FUt as G,
    FWt as K,
    GWt as xe,
    IWt as Se,
    JWt as q,
    K9t as Ce,
    KWt as we,
    L9t as J,
    LWt as Te,
    PTn as Ee,
    PUt as De,
    PWt as Oe,
    Q9t as ke,
    WSn as Ae,
    WWt as je,
    Y9t as Y,
    YWt as Me,
    iGt as X,
    lTn as Z,
    qWt as Ne,
    rGt as Pe,
    tTn as Fe,
    uMn as Ie,
    uTn as Le,
    vUn as Re,
    yUn as ze
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Ky as Be,
    Uh as Ve,
    Wh as He,
    qy as Ue
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    Bb as We,
    Nu as Ge,
    Pu as Ke,
    _c as qe,
    ay as Je,
    vc as Ye,
    wy as Xe
} from "./8b34dbc2-bgocf3s6t6l67twq.js";
import {
    i as Ze,
    t as Qe
} from "./55904901-bw59ulw6e6pu0dqc.js";
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
    nt = ge(), Z(), J(), D(), v(), O(), u(), G(), h(), R(), ze(), o(), Ue(), Ve(), W(), Ge(), Xe(), Ae(), qe(), K(), ke(), X(), Ze(), S(), Ne(), Y(), q(), A(), a(), P(), _(), N(), c(), j(), F(), We(), U(), rt = n(he()), H(), V(), Q = fe(), $ = z({
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
    }), it = ue(e => b(null)), at = e => {
        "use forget";
        let t = (0, nt.c)(107),
            {
                provider: n,
                disabled: a,
                fallback: o,
                isVisible: s,
                onConnected: c,
                onDismiss: u,
                onShow: m,
                onboardingJourney: h,
                onboardingSource: g,
                variant: _
            } = e,
            v = o === void 0 ? null : o,
            b = _e(),
            x = de(),
            S = pe(),
            ee = p(y) ?? C(),
            w = ee?.id,
            ne;
        t[0] === n ? ne = t[1] : (ne = () => Me(n), t[0] = n, t[1] = ne);
        let T = p(ne),
            E = xe(n),
            D = s && T && w != null,
            re = we(w),
            O = me({
                ...re,
                enabled: D
            }),
            k = Fe(E, {
                accountId: w,
                workspace: !!ee?.getWorkspaceId(),
                locale: b.locale,
                platform: `chat`,
                productSku: Ee.CONNECTOR_SETTING
            }),
            A;
        t[2] !== k || t[3] !== D ? (A = {
            ...k,
            enabled: D
        }, t[2] = k, t[3] = D, t[4] = A) : A = t[4];
        let j = me(A),
            ae;
        if (t[5] !== w || t[6] !== j.data || t[7] !== j.error || t[8] !== E || t[9] !== O.data || t[10] !== O.error || t[11] !== T) {
            let e = O.data == null ? void 0 : O.data[E] ?? [];
            ae = je({
                enabled: T && w != null,
                availability: j.data,
                links: e,
                availabilityError: j.error,
                linksError: O.error
            }), t[5] = w, t[6] = j.data, t[7] = j.error, t[8] = E, t[9] = O.data, t[10] = O.error, t[11] = T, t[12] = ae
        } else ae = t[12];
        let N = ae,
            P = N === `connectable` || N === `reconnectable`,
            oe;
        t[13] !== w || t[14] !== n ? (oe = () => it(`${w}:${n}`) != null, t[13] = w, t[14] = n, t[15] = oe) : oe = t[15];
        let F = p(oe),
            I;
        t[16] !== w || t[17] !== k || t[18] !== P || t[19] !== E || t[20] !== a || t[21] !== T || t[22] !== b || t[23] !== re || t[24] !== x || t[25] !== c || t[26] !== h || t[27] !== g || t[28] !== n || t[29] !== S || t[30] !== _ ? (I = async () => {
            let e = te() ?? C(),
                t = `${e?.id}:${n}`;
            if (a || !T || !Me(n) || !P || e == null || w == null || e.id !== w || d(() => it(t)) != null) return;
            let r = Symbol();
            i(() => it.set(t, r));
            let o = h ?? (_ === `menu` && g != null ? Oe(g, `drive_only`) : void 0);
            _ === `menu` && Te(o), be(o, n);
            let s = !1,
                u = e => {
                    s || (s = !0, Se(o, n, e))
                },
                p = () => f().danger(b.formatMessage(L.somethingWentWrong));
            (_ === `composer` || _ === `floating-composer`) && Ye(n, ye.CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED);
            let m = {
                    accountId: e?.id,
                    hasWorkspace: !!e?.getWorkspaceId(),
                    locale: b.locale,
                    platform: `chat`,
                    productSku: Ee.CONNECTOR_SETTING
                },
                v = Je(E, m);
            await S.fetchQuery(v).then(async e => {
                if (!Me(n) || (te() ?? C())?.id !== m.accountId) {
                    u(`cancelled`);
                    return
                }
                if (e == null) {
                    S.removeQueries({
                        queryKey: v.queryKey,
                        exact: !0
                    }), u(`unavailable`), p();
                    return
                }
                await Ke({
                    queryClient: S,
                    pluginId: e,
                    sourceAttributionId: o?.journeyId,
                    installAccountId: m.accountId,
                    requestContext: m,
                    closeOnCompletion: !0,
                    requireActiveConnectorLinks: !0,
                    pathname: x.pathname,
                    search: x.search,
                    searchParams: new URLSearchParams(x.search),
                    intl: b,
                    surface: Ie.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_LIBRARY,
                    onConnectionResult: e => {
                        if (u(e), !(!Me(n) || (te() ?? C())?.id !== m.accountId))
                            if (e === `connected`) {
                                le();
                                for (let e of [re.queryKey, k.queryKey, [`connected-resource-link-connections`],
                                        [ce],
                                        [l],
                                        [Qe]
                                    ]) S.invalidateQueries({
                                    queryKey: e
                                });
                                c?.()
                            } else e === `unavailable` && p()
                    }
                })
            }).catch(() => {
                u(`retryable_error`), (te() ?? C())?.id === m.accountId && p()
            }).finally(() => {
                i(() => it.set(t, e => e === r ? null : e))
            })
        }, t[16] = w, t[17] = k, t[18] = P, t[19] = E, t[20] = a, t[21] = T, t[22] = b, t[23] = re, t[24] = x, t[25] = c, t[26] = h, t[27] = g, t[28] = n, t[29] = S, t[30] = _, t[31] = I) : I = t[31];
        let R = se(I),
            ue, fe;
        if (t[32] !== P || t[33] !== T || t[34] !== s || t[35] !== m || t[36] !== _ ? (ue = () => {
                _ === `composer` && s && T && P && !M() && m?.()
            }, fe = [P, T, s, m, _], t[32] = P, t[33] = T, t[34] = s, t[35] = m, t[36] = _, t[37] = ue, t[38] = fe) : (ue = t[37], fe = t[38]), (0, rt.useEffect)(ue, fe), !s || !T) return null;
        if (_ === `picker`) {
            if (j.isSuccess && !Le(j.data) || N === `unavailable`) return null;
            let e;
            t[39] !== j || t[40] !== O ? (e = () => {
                j.refetch(), O.refetch()
            }, t[39] = j, t[40] = O, t[41] = e) : e = t[41];
            let r;
            return t[42] !== a || t[43] !== R || t[44] !== F || t[45] !== n || t[46] !== N || t[47] !== e ? (r = (0, Q.jsx)(ct, {
                provider: n,
                state: N,
                disabled: a,
                isConnecting: F,
                onConnect: R,
                onRetry: e
            }), t[42] = a, t[43] = R, t[44] = F, t[45] = n, t[46] = N, t[47] = e, t[48] = r) : r = t[48], r
        }
        if (!P) return N === `loading` || N === `error` ? null : v;
        let z, V;
        if (t[49] !== a || t[50] !== R || t[51] !== b || t[52] !== F || t[53] !== n || t[54] !== N || t[55] !== _) {
            z = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = b.formatMessage(Ce(n).label),
                    i = N === `reconnectable` ? b.formatMessage($.reconnectAction, {
                        provider: e
                    }) : n === `google_drive` ? b.formatMessage(ve.connectGoogleDriveAction) : b.formatMessage($.connect, {
                        provider: e
                    });
                if (_ === `menu`) {
                    let e;
                    t[58] === n ? e = t[59] : (e = (0, Q.jsx)(Pe, {
                        provider: n,
                        "aria-hidden": `true`,
                        className: `icon`
                    }), t[58] = n, t[59] = e), z = (0, Q.jsx)(Re.Item, {
                        fillContainer: !0,
                        disabled: a || F,
                        className: `text-token-text-primary`,
                        icon: e,
                        label: i,
                        onSelect: R
                    });
                    break bb0
                }
                if (_ === `modal`) {
                    z = (0, Q.jsx)(r, {
                        className: `rounded-full px-6 max-sm:w-full`,
                        color: `primary`,
                        "aria-disabled": a || F,
                        visuallyDisabled: a || F,
                        loading: F,
                        onClick: R,
                        size: `large`,
                        type: `button`,
                        children: i
                    });
                    break bb0
                }
                if (M()) {
                    z = null;
                    break bb0
                }
                V = N === `reconnectable` ? b.formatMessage($.reconnectPastedLinkTitle, {
                    provider: e
                }) : n === `google_drive` ? b.formatMessage(ve.googleDriveConnectPastedLinkTitle) : b.formatMessage($.pastedLinkTitle, {
                    provider: e
                })
            }
            t[49] = a, t[50] = R, t[51] = b, t[52] = F, t[53] = n, t[54] = N, t[55] = _, t[56] = z, t[57] = V
        } else z = t[56], V = t[57];
        if (z !== Symbol.for(`react.early_return_sentinel`)) return z;
        let H = V,
            he;
        t[60] !== b || t[61] !== n ? (he = n === `google_drive` ? b.formatMessage(ve.googleDriveConnectBeaconDescription) : b.formatMessage($.pastedLinkDescription), t[60] = b, t[61] = n, t[62] = he) : he = t[62];
        let U = he,
            ge;
        t[63] === n ? ge = t[64] : (ge = n.replaceAll(`_`, `-`), t[63] = n, t[64] = ge);
        let W = `composer-${ge}-connect-prompt`;
        if (_ === `floating-composer`) {
            let e = a || F,
                r = N === `reconnectable` ? $.reconnect : L.connect,
                i;
            t[65] !== R || t[66] !== e || t[67] !== r ? (i = {
                primaryAction: {
                    disabled: e,
                    onClick: R,
                    text: r
                }
            }, t[65] = R, t[66] = e, t[67] = r, t[68] = i) : i = t[68];
            let o;
            t[69] === n ? o = t[70] : (o = (0, Q.jsx)(Pe, {
                provider: n,
                "aria-hidden": `true`,
                className: `size-6`
            }), t[69] = n, t[70] = o);
            let s;
            t[71] !== U || t[72] !== u || t[73] !== m || t[74] !== i || t[75] !== o || t[76] !== H ? (s = (0, Q.jsx)(De, {
                actions: i,
                description: U,
                icon: o,
                onDismiss: u,
                onShow: m,
                title: H
            }), t[71] = U, t[72] = u, t[73] = m, t[74] = i, t[75] = o, t[76] = H, t[77] = s) : s = t[77];
            let c;
            return t[78] !== s || t[79] !== W ? (c = (0, Q.jsx)(`div`, {
                "data-testid": W,
                children: s
            }), t[78] = s, t[79] = W, t[80] = c) : c = t[80], c
        }
        let G;
        t[81] === n ? G = t[82] : (G = (0, Q.jsx)(Pe, {
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
        let ke = a || F,
            Ae = N === `reconnectable` ? $.reconnect : L.connect,
            Y;
        t[90] === Ae ? Y = t[91] : (Y = (0, Q.jsx)(B, {
            ...Ae
        }), t[90] = Ae, t[91] = Y);
        let X;
        t[92] !== R || t[93] !== F || t[94] !== ke || t[95] !== Y ? (X = (0, Q.jsx)(r, {
            className: `shrink-0 max-sm:ms-9`,
            color: `secondary`,
            disabled: ke,
            loading: F,
            onClick: R,
            size: `medium`,
            type: `button`,
            children: Y
        }), t[92] = R, t[93] = F, t[94] = ke, t[95] = Y, t[96] = X) : X = t[96];
        let Z;
        t[97] !== u || t[98] !== n ? (Z = n !== `google_drive` && u != null && (0, Q.jsx)(ie, {
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
                onShow: c,
                onDismiss: l
            } = e,
            u = ot[n],
            {
                pathname: d
            } = de(),
            {
                eligible: f,
                isLoading: h
            } = ae(u),
            _ = (0, rt.useRef)(!1),
            [v, y] = (0, rt.useState)(!1),
            b = T(g.Beacons),
            S = pe(),
            D;
        t[0] === S ? D = t[1] : (D = S.getQueryCache(), t[0] = S, t[1] = D);
        let O = D,
            ie;
        t[2] === d ? ie = t[3] : (ie = () => w({
            pathname: d,
            isWorkMode: re()
        }), t[2] = d, t[3] = ie);
        let A = p(ie),
            j;
        t[4] === O ? j = t[5] : (j = e => O.subscribe(t => {
            t.query.queryKey[0] === ee[0] && e()
        }), t[4] = O, t[5] = j);
        let M;
        t[6] !== A || t[7] !== d || t[8] !== O ? (M = () => {
            let e = O.findAll({
                queryKey: [...ee, null, d, A],
                type: `active`
            });
            return e.length > 0 && e.every(et)
        }, t[6] = A, t[7] = d, t[8] = O, t[9] = M) : M = t[9];
        let N = (0, rt.useSyncExternalStore)(j, M, tt),
            P;
        t[10] !== N || t[11] !== d ? (P = () => E() || x() != null || s() != null || oe(d) && !m() && ne().status === `pending` && !N, t[10] = N, t[11] = d, t[12] = P) : P = t[12];
        let F = p(P),
            I;
        t[13] !== r || t[14] !== u || t[15] !== c || t[16] !== n ? (I = () => {
            _.current || (te() ?? C())?.id !== r || (_.current = !0, y(!0), Ye(n, ye.CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED), k(u), c())
        }, t[13] = r, t[14] = u, t[15] = c, t[16] = n, t[17] = I) : I = t[17];
        let L = se(I);
        if (b || a || F || !Me(n) || !v && (!f || h)) return null;
        let ce = o ? `floating-composer` : `composer`,
            le;
        return t[18] !== i || t[19] !== L || t[20] !== l || t[21] !== n || t[22] !== ce ? (le = (0, Q.jsx)(at, {
            provider: n,
            disabled: i,
            isVisible: !0,
            onShow: L,
            onDismiss: l,
            variant: ce
        }), t[18] = i, t[19] = L, t[20] = l, t[21] = n, t[22] = ce, t[23] = le) : le = t[23], le
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
            children: (0, Q.jsx)(Pe, {
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
//# sourceMappingURL=03f00d69-dth1s5kh9b4c04qn.js.map