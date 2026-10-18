import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $M as r,
    $k as i,
    AT as a,
    B6 as o,
    B8 as s,
    CA as c,
    Ci as l,
    EA as u,
    Gs as d,
    HI as f,
    J6 as p,
    K8 as m,
    SA as h,
    Si as g,
    Srt as _,
    UI as v,
    Ws as y,
    X$ as ee,
    Y6 as b,
    Ys as te,
    at as x,
    bA as ne,
    bi as re,
    cw as S,
    dc as C,
    eN as ie,
    fU as ae,
    i1 as oe,
    i5 as se,
    it as ce,
    kT as w,
    l0 as le,
    mc as T,
    nA as E,
    nt as D,
    o1 as O,
    ot as k,
    pU as A,
    po as j,
    prt as M,
    r0 as N,
    sw as ue,
    tA as de,
    tt as P,
    u1 as fe,
    wi as F,
    yA as I
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as pe,
    Bn as L,
    Ln as me,
    N as he,
    Nn as R,
    O as ge,
    Rn as z,
    Vn as B,
    jt as _e,
    s as V,
    wn as H,
    zn as ve
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    A9t as U,
    BWt as ye,
    D9t as be,
    FUt as W,
    FWt as G,
    Fjn as xe,
    GWt as Se,
    Gwn as K,
    IWt as Ce,
    JWt as q,
    Jxn as we,
    KWt as Te,
    LWt as Ee,
    N9t as De,
    P9t as Oe,
    PUt as ke,
    PWt as Ae,
    THn as J,
    WWt as je,
    Wwn as Me,
    YWt as Ne,
    bwn as Pe,
    dwn as Fe,
    eGt as Ie,
    mjn as Le,
    qWt as Y,
    tGt as X,
    v9t as Re,
    wHn as ze,
    ywn as Be
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Gh as Ve,
    Kh as He,
    Qy as Ue,
    Zy as We
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Au as Ge,
    Lb as Ke,
    _c as qe,
    by as Je,
    gc as Ye,
    ju as Xe,
    ty as Ze
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    i as Qe,
    t as $e
} from "./55904901-ijw2tgije8ad24dr.js";
var et = t({
    LibraryProviderConnectAction: () => at,
    LibraryProviderConnectionRow: () => ct,
    LibraryProviderPastedLinkConnectAnnouncement: () => st
});

function tt(e) {
    return e.state.status === `error` && e.state.fetchStatus === `idle`
}

function nt() {
    return !1
}
var rt, it, Z, Q, $, at, ot, st, ct, lt = e((() => {
    rt = H(), Be(), Re(), a(), S(), j(), E(), W(), h(), _(), J(), N(), Ue(), Ve(), K(), Ge(), Je(), we(), Ye(), G(), De(), X(), Qe(), F(), Y(), U(), q(), v(), o(), fe(), A(), C(), r(), D(), d(), Ke(), V(), it = n(B()), z(), pe(), Z = L(), Q = me({
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
    }), $ = b(e => p(null)), at = e => {
        "use forget";
        let t = (0, rt.c)(107),
            {
                provider: n,
                disabled: r,
                fallback: i,
                isVisible: a,
                onConnected: o,
                onDismiss: c,
                onShow: u,
                onboardingJourney: d,
                onboardingSource: p,
                variant: h
            } = e,
            _ = i === void 0 ? null : i,
            v = ve(),
            y = _e(),
            b = he(),
            te = se(ee) ?? O(),
            x = te?.id,
            ne;
        t[0] === n ? ne = t[1] : (ne = () => Ne(n), t[0] = n, t[1] = ne);
        let S = se(ne),
            C = Se(n),
            ce = a && S && x != null,
            le = Te(x),
            T = ge({
                ...le,
                enabled: ce
            }),
            E = Fe(C, {
                accountId: x,
                workspace: !!te?.getWorkspaceId(),
                locale: v.locale,
                platform: `chat`,
                productSku: Me.CONNECTOR_SETTING
            }),
            D;
        t[2] !== E || t[3] !== ce ? (D = {
            ...E,
            enabled: ce
        }, t[2] = E, t[3] = ce, t[4] = D) : D = t[4];
        let k = ge(D),
            A;
        if (t[5] !== x || t[6] !== k.data || t[7] !== k.error || t[8] !== C || t[9] !== T.data || t[10] !== T.error || t[11] !== S) {
            let e = T.data == null ? void 0 : T.data[C] ?? [];
            A = je({
                enabled: S && x != null,
                availability: k.data,
                links: e,
                availabilityError: k.error,
                linksError: T.error
            }), t[5] = x, t[6] = k.data, t[7] = k.error, t[8] = C, t[9] = T.data, t[10] = T.error, t[11] = S, t[12] = A
        } else A = t[12];
        let j = A,
            N = j === `connectable` || j === `reconnectable`,
            de;
        t[13] !== x || t[14] !== n ? (de = () => $(`${x}:${n}`) != null, t[13] = x, t[14] = n, t[15] = de) : de = t[15];
        let P = se(de),
            fe;
        t[16] !== x || t[17] !== E || t[18] !== N || t[19] !== C || t[20] !== r || t[21] !== S || t[22] !== v || t[23] !== le || t[24] !== y || t[25] !== o || t[26] !== d || t[27] !== p || t[28] !== n || t[29] !== b || t[30] !== h ? (fe = async () => {
            let e = oe() ?? O(),
                t = `${e?.id}:${n}`;
            if (r || !S || !Ne(n) || !N || e == null || x == null || e.id !== x || m(() => $(t)) != null) return;
            let i = Symbol();
            s(() => $.set(t, i));
            let a = d ?? (h === `menu` && p != null ? Ae(p, `drive_only`) : void 0);
            h === `menu` && Ee(a), ye(a, n);
            let c = !1,
                u = e => {
                    c || (c = !0, Ce(a, n, e))
                },
                f = () => ae().danger(v.formatMessage(M.somethingWentWrong));
            (h === `composer` || h === `floating-composer`) && qe(n, xe.CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED);
            let _ = {
                    accountId: e?.id,
                    hasWorkspace: !!e?.getWorkspaceId(),
                    locale: v.locale,
                    platform: `chat`,
                    productSku: Me.CONNECTOR_SETTING
                },
                ee = Ze(C, _);
            await b.fetchQuery(ee).then(async e => {
                if (!Ne(n) || (oe() ?? O())?.id !== _.accountId) {
                    u(`cancelled`);
                    return
                }
                if (e == null) {
                    b.removeQueries({
                        queryKey: ee.queryKey,
                        exact: !0
                    }), u(`unavailable`), f();
                    return
                }
                await Xe({
                    queryClient: b,
                    pluginId: e,
                    sourceAttributionId: a?.journeyId,
                    installAccountId: _.accountId,
                    requestContext: _,
                    closeOnCompletion: !0,
                    requireActiveConnectorLinks: !0,
                    pathname: y.pathname,
                    search: y.search,
                    searchParams: new URLSearchParams(y.search),
                    intl: v,
                    surface: Le.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_LIBRARY,
                    onConnectionResult: e => {
                        if (u(e), !(!Ne(n) || (oe() ?? O())?.id !== _.accountId))
                            if (e === `connected`) {
                                re();
                                for (let e of [le.queryKey, E.queryKey, [`connected-resource-link-connections`],
                                        [l],
                                        [g],
                                        [$e]
                                    ]) b.invalidateQueries({
                                    queryKey: e
                                });
                                o?.()
                            } else e === `unavailable` && f()
                    }
                })
            }).catch(() => {
                u(`retryable_error`), (oe() ?? O())?.id === _.accountId && f()
            }).finally(() => {
                s(() => $.set(t, e => e === i ? null : e))
            })
        }, t[16] = x, t[17] = E, t[18] = N, t[19] = C, t[20] = r, t[21] = S, t[22] = v, t[23] = le, t[24] = y, t[25] = o, t[26] = d, t[27] = p, t[28] = n, t[29] = b, t[30] = h, t[31] = fe) : fe = t[31];
        let F = ie(fe),
            I, pe;
        if (t[32] !== N || t[33] !== S || t[34] !== a || t[35] !== u || t[36] !== h ? (I = () => {
                h === `composer` && a && S && N && !f() && u?.()
            }, pe = [N, S, a, u, h], t[32] = N, t[33] = S, t[34] = a, t[35] = u, t[36] = h, t[37] = I, t[38] = pe) : (I = t[37], pe = t[38]), (0, it.useEffect)(I, pe), !a || !S) return null;
        if (h === `picker`) {
            if (k.isSuccess && !Pe(k.data) || j === `unavailable`) return null;
            let e;
            t[39] !== k || t[40] !== T ? (e = () => {
                k.refetch(), T.refetch()
            }, t[39] = k, t[40] = T, t[41] = e) : e = t[41];
            let i;
            return t[42] !== r || t[43] !== F || t[44] !== P || t[45] !== n || t[46] !== j || t[47] !== e ? (i = (0, Z.jsx)(ct, {
                provider: n,
                state: j,
                disabled: r,
                isConnecting: P,
                onConnect: F,
                onRetry: e
            }), t[42] = r, t[43] = F, t[44] = P, t[45] = n, t[46] = j, t[47] = e, t[48] = i) : i = t[48], i
        }
        if (!N) return j === `loading` || j === `error` ? null : _;
        let L, me;
        if (t[49] !== r || t[50] !== F || t[51] !== v || t[52] !== P || t[53] !== n || t[54] !== j || t[55] !== h) {
            L = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = v.formatMessage(be(n).label),
                    i = j === `reconnectable` ? v.formatMessage(Q.reconnectAction, {
                        provider: e
                    }) : n === `google_drive` ? v.formatMessage(Oe.connectGoogleDriveAction) : v.formatMessage(Q.connect, {
                        provider: e
                    });
                if (h === `menu`) {
                    let e;
                    t[58] === n ? e = t[59] : (e = (0, Z.jsx)(Ie, {
                        provider: n,
                        "aria-hidden": `true`,
                        className: `icon`
                    }), t[58] = n, t[59] = e), L = (0, Z.jsx)(ze.Item, {
                        fillContainer: !0,
                        disabled: r || P,
                        className: `text-token-text-primary`,
                        icon: e,
                        label: i,
                        onSelect: F
                    });
                    break bb0
                }
                if (h === `modal`) {
                    L = (0, Z.jsx)(w, {
                        className: `rounded-full px-6 max-sm:w-full`,
                        color: `primary`,
                        "aria-disabled": r || P,
                        visuallyDisabled: r || P,
                        loading: P,
                        onClick: F,
                        size: `large`,
                        type: `button`,
                        children: i
                    });
                    break bb0
                }
                if (f()) {
                    L = null;
                    break bb0
                }
                me = j === `reconnectable` ? v.formatMessage(Q.reconnectPastedLinkTitle, {
                    provider: e
                }) : n === `google_drive` ? v.formatMessage(Oe.googleDriveConnectPastedLinkTitle) : v.formatMessage(Q.pastedLinkTitle, {
                    provider: e
                })
            }
            t[49] = r, t[50] = F, t[51] = v, t[52] = P, t[53] = n, t[54] = j, t[55] = h, t[56] = L, t[57] = me
        } else L = t[56], me = t[57];
        if (L !== Symbol.for(`react.early_return_sentinel`)) return L;
        let z = me,
            B;
        t[60] !== v || t[61] !== n ? (B = n === `google_drive` ? v.formatMessage(Oe.googleDriveConnectBeaconDescription) : v.formatMessage(Q.pastedLinkDescription), t[60] = v, t[61] = n, t[62] = B) : B = t[62];
        let V = B,
            H;
        t[63] === n ? H = t[64] : (H = n.replaceAll(`_`, `-`), t[63] = n, t[64] = H);
        let U = `composer-${H}-connect-prompt`;
        if (h === `floating-composer`) {
            let e = r || P,
                i = j === `reconnectable` ? Q.reconnect : M.connect,
                a;
            t[65] !== F || t[66] !== e || t[67] !== i ? (a = {
                primaryAction: {
                    disabled: e,
                    onClick: F,
                    text: i
                }
            }, t[65] = F, t[66] = e, t[67] = i, t[68] = a) : a = t[68];
            let o;
            t[69] === n ? o = t[70] : (o = (0, Z.jsx)(Ie, {
                provider: n,
                "aria-hidden": `true`,
                className: `size-6`
            }), t[69] = n, t[70] = o);
            let s;
            t[71] !== V || t[72] !== c || t[73] !== u || t[74] !== a || t[75] !== o || t[76] !== z ? (s = (0, Z.jsx)(ke, {
                actions: a,
                description: V,
                icon: o,
                onDismiss: c,
                onShow: u,
                title: z
            }), t[71] = V, t[72] = c, t[73] = u, t[74] = a, t[75] = o, t[76] = z, t[77] = s) : s = t[77];
            let l;
            return t[78] !== s || t[79] !== U ? (l = (0, Z.jsx)(`div`, {
                "data-testid": U,
                children: s
            }), t[78] = s, t[79] = U, t[80] = l) : l = t[80], l
        }
        let W;
        t[81] === n ? W = t[82] : (W = (0, Z.jsx)(Ie, {
            provider: n,
            "aria-hidden": `true`,
            className: `size-6 shrink-0`
        }), t[81] = n, t[82] = W);
        let G;
        t[83] === z ? G = t[84] : (G = (0, Z.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-semibold`,
            children: z
        }), t[83] = z, t[84] = G);
        let K;
        t[85] === V ? K = t[86] : (K = (0, Z.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: V
        }), t[85] = V, t[86] = K);
        let q;
        t[87] !== G || t[88] !== K ? (q = (0, Z.jsxs)(`div`, {
            className: `min-w-0 flex-1 max-sm:basis-[calc(100%-3rem)]`,
            children: [G, K]
        }), t[87] = G, t[88] = K, t[89] = q) : q = t[89];
        let we = r || P,
            De = j === `reconnectable` ? Q.reconnect : M.connect,
            J;
        t[90] === De ? J = t[91] : (J = (0, Z.jsx)(R, {
            ...De
        }), t[90] = De, t[91] = J);
        let Y;
        t[92] !== F || t[93] !== P || t[94] !== we || t[95] !== J ? (Y = (0, Z.jsx)(w, {
            className: `shrink-0 max-sm:ms-9`,
            color: `secondary`,
            disabled: we,
            loading: P,
            onClick: F,
            size: `medium`,
            type: `button`,
            children: J
        }), t[92] = F, t[93] = P, t[94] = we, t[95] = J, t[96] = Y) : Y = t[96];
        let X;
        t[97] !== c || t[98] !== n ? (X = n !== `google_drive` && c != null && (0, Z.jsx)(ue, {
            onClick: c,
            iconSize: `sm`
        }), t[97] = c, t[98] = n, t[99] = X) : X = t[99];
        let Re;
        return t[100] !== W || t[101] !== q || t[102] !== Y || t[103] !== X || t[104] !== U || t[105] !== z ? (Re = (0, Z.jsxs)(`section`, {
            "aria-label": z,
            className: `border-token-border-light bg-token-bg-primary dark:bg-token-bg-elevated-primary mb-2 flex items-center gap-3 rounded-2xl border p-3 shadow-[0_4px_16px_0_rgba(0,0,0,0.05)] max-sm:flex-wrap`,
            "data-testid": U,
            children: [W, q, Y, X]
        }), t[100] = W, t[101] = q, t[102] = Y, t[103] = X, t[104] = U, t[105] = z, t[106] = Re) : Re = t[106], Re
    }, ot = {
        sharepoint: P.hasSeenLibrarySharePointPastedLinkConnect,
        onedrive: P.hasSeenLibrarySharePointPastedLinkConnect,
        dropbox: P.hasSeenLibraryDropboxPastedLinkConnect,
        box: P.hasSeenLibraryBoxPastedLinkConnect
    }, st = e => {
        "use forget";
        let t = (0, rt.c)(24),
            {
                provider: n,
                accountId: r,
                disabled: a,
                hasConversationBeacon: o,
                isNewThread: s,
                onShow: l,
                onDismiss: d
            } = e,
            f = ot[n],
            {
                pathname: p
            } = _e(),
            {
                eligible: m,
                isLoading: h
            } = k(f),
            g = (0, it.useRef)(!1),
            [_, v] = (0, it.useState)(!1),
            ee = te(y.Beacons),
            b = he(),
            re;
        t[0] === b ? re = t[1] : (re = b.getQueryCache(), t[0] = b, t[1] = re);
        let S = re,
            C;
        t[2] === p ? C = t[3] : (C = () => ne({
            pathname: p,
            isWorkMode: T()
        }), t[2] = p, t[3] = C);
        let ae = se(C),
            w;
        t[4] === S ? w = t[5] : (w = e => S.subscribe(t => {
            t.query.queryKey[0] === I[0] && e()
        }), t[4] = S, t[5] = w);
        let E;
        t[6] !== ae || t[7] !== p || t[8] !== S ? (E = () => {
            let e = S.findAll({
                queryKey: [...I, null, p, ae],
                type: `active`
            });
            return e.length > 0 && e.every(tt)
        }, t[6] = ae, t[7] = p, t[8] = S, t[9] = E) : E = t[9];
        let D = (0, it.useSyncExternalStore)(w, E, nt),
            A;
        t[10] !== D || t[11] !== p ? (A = () => x() || de() != null || i() != null || c(p) && !le() && u().status === `pending` && !D, t[10] = D, t[11] = p, t[12] = A) : A = t[12];
        let j = se(A),
            M;
        t[13] !== r || t[14] !== f || t[15] !== l || t[16] !== n ? (M = () => {
            g.current || (oe() ?? O())?.id !== r || (g.current = !0, v(!0), qe(n, xe.CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED), ce(f), l())
        }, t[13] = r, t[14] = f, t[15] = l, t[16] = n, t[17] = M) : M = t[17];
        let N = ie(M);
        if (ee || o || j || !Ne(n) || !_ && (!m || h)) return null;
        let ue = s ? `floating-composer` : `composer`,
            P;
        return t[18] !== a || t[19] !== N || t[20] !== d || t[21] !== n || t[22] !== ue ? (P = (0, Z.jsx)(at, {
            provider: n,
            disabled: a,
            isVisible: !0,
            onShow: N,
            onDismiss: d,
            variant: ue
        }), t[18] = a, t[19] = N, t[20] = d, t[21] = n, t[22] = ue, t[23] = P) : P = t[23], P
    }, ct = e => {
        "use forget";
        let t = (0, rt.c)(27),
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
            u = ve(),
            d, f, p, m;
        t[0] !== c || t[1] !== u || t[2] !== l || t[3] !== n || t[4] !== r ? (p = u.formatMessage(be(n).label), d = c || l || r !== `connectable` && r !== `reconnectable`, f = r === `loading` || l, m = f ? u.formatMessage(Q.loading) : u.formatMessage(Q.connect, {
            provider: p
        }), t[0] = c, t[1] = u, t[2] = l, t[3] = n, t[4] = r, t[5] = d, t[6] = f, t[7] = p, t[8] = m) : (d = t[5], f = t[6], p = t[7], m = t[8]);
        let h = m,
            g;
        t[9] === n ? g = t[10] : (g = (0, Z.jsx)(`span`, {
            className: `border-token-border-default bg-token-bg-primary flex size-[45px] shrink-0 items-center justify-center rounded-full border`,
            children: (0, Z.jsx)(Ie, {
                provider: n,
                "aria-hidden": `true`,
                className: `size-6`
            })
        }), t[9] = n, t[10] = g);
        let _;
        t[11] === p ? _ = t[12] : (_ = (0, Z.jsx)(`span`, {
            className: `text-token-text-primary text-body-regular min-w-0 flex-1`,
            children: p
        }), t[11] = p, t[12] = _);
        let v;
        t[13] !== h || t[14] !== d || t[15] !== u || t[16] !== l || t[17] !== f || t[18] !== p || t[19] !== o || t[20] !== s || t[21] !== r ? (v = r === `reconnectable` ? (0, Z.jsx)(w, {
            "aria-label": u.formatMessage(Q.reconnectAction, {
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
            children: l ? (0, Z.jsx)(R, {
                ...Q.loading
            }) : (0, Z.jsx)(R, {
                ...Q.reconnect
            })
        }) : r === `connectable` || r === `loading` ? (0, Z.jsx)(w, {
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
        }) : r === `error` ? (0, Z.jsx)(w, {
            color: `secondary`,
            onClick: s,
            size: `small`,
            type: `button`,
            children: (0, Z.jsx)(R, {
                ...Q.retry
            })
        }) : (0, Z.jsx)(`span`, {
            "aria-live": `polite`,
            className: r === `connected` ? `bg-token-text-primary text-token-text-inverted flex size-8 shrink-0 items-center justify-center rounded-full` : `text-token-text-secondary text-xs`,
            children: r === `connected` ? (0, Z.jsxs)(Z.Fragment, {
                children: [(0, Z.jsx)(We, {
                    "aria-hidden": `true`,
                    className: `icon-sm`
                }), (0, Z.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, Z.jsx)(R, {
                        ...Q.connected
                    })
                })]
            }) : (0, Z.jsx)(R, {
                ...Q.unavailable
            })
        }), t[13] = h, t[14] = d, t[15] = u, t[16] = l, t[17] = f, t[18] = p, t[19] = o, t[20] = s, t[21] = r, t[22] = v) : v = t[22];
        let y;
        return t[23] !== g || t[24] !== _ || t[25] !== v ? (y = (0, Z.jsxs)(`li`, {
            className: `flex items-center gap-3 py-3`,
            children: [g, _, v]
        }), t[23] = g, t[24] = _, t[25] = v, t[26] = y) : y = t[26], y
    }
}));
export {
    lt as n, et as r, at as t
};
//# sourceMappingURL=03f00d69-pdjrkzag358zyul3.js.map