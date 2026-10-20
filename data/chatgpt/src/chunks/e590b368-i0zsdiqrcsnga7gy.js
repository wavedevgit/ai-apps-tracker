const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/3660315a-m94t8dbct4jnsk3v.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-ed29bs6yiwucn7st.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/1dc5ae5b-ni9mgofkhf4ee76f.js", "assets/conversation-small-l6tnsr2xfn2d55kk.js", "assets/30901919-om7b3qf5hp4j9x4l.js", "assets/c470f5ab-d0jxi6yggehv1yt2.js", "assets/0e5afe53-goyw8fd3qndq8rq5.js", "assets/conversation-small-ixfdle4i.css", "assets/06dfbf77-cr250ye2ma8l0qcj.js", "assets/b2cbd5c7-cm7m8nsgjlc7qeyb.js", "assets/b5b42835-nvlsxd3iq7fy4jpl.js", "assets/b15d5b53-gonhprvrm8r6kd5g.js", "assets/c2675c8c-fpv9s4kvd412dyap.js", "assets/82782bc9-cz4jkhg31tycbqqf.js", "assets/8b34dbc2-j8rcexxiltkm8ucr.js", "assets/global-modals-lv5n3ujm.css", "assets/94e0eb8c-emr0f7qgwa31sqqx.js", "assets/47ed0b35-bj95sqryrx48zckh.js", "assets/760cdbab-nywajgj3w9y1wdks.js", "assets/d5b03218-fi4689ui2efdykgy.js", "assets/7517017f-m0e7hb8h6fyirvew.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $x as n,
    $z as r,
    Dnt as i,
    Ent as a,
    F7 as o,
    Git as s,
    Gx as c,
    J0 as l,
    J_ as u,
    Jot as d,
    Jv as f,
    Jx as ee,
    Kx as p,
    Pv as m,
    Sy as h,
    Tat as g,
    Tnt as _,
    Uit as v,
    Uv as y,
    Ux as b,
    Wv as x,
    X_ as S,
    Xv as C,
    Y0 as w,
    Yot as T,
    Yv as E,
    Yx as D,
    Zst as O,
    Zv as k,
    dy as A,
    eB as j,
    fS as M,
    hnt as N,
    iS as P,
    j7 as F,
    jat as I,
    jst as L,
    lS as R,
    nS as te,
    oS as ne,
    pS as re,
    pnt as z,
    qx as ie,
    rS as B,
    tB as V,
    uS as H,
    xy as ae,
    yy as oe
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as U,
    At as se,
    Bn as ce,
    Ln as le,
    N as ue,
    Pt as de,
    Rn as fe,
    Ut as pe,
    Vn as me,
    cn as he,
    ln as ge,
    mt as W,
    s as _e,
    wn as ve,
    zn as ye
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bit as be,
    Fit as xe,
    Iit as Se,
    Jvn as Ce,
    Mrt as we,
    Nrt as Te,
    Rit as Ee,
    brt as De,
    jrt as Oe,
    mst as ke,
    pst as Ae,
    qvn as je,
    vrt as G,
    zit as Me
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    _x as K,
    ax as Ne,
    cx as Pe,
    nx as Fe,
    rx as Ie,
    sx as Le,
    yx as Re
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    Hv as ze,
    zv as Be
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";
import {
    n as Ve,
    t as q
} from "./af004db9-kouk4100w6rgjqxb.js";
import {
    n as He,
    r as Ue,
    t as We
} from "./d6a45810-l270osqibgk9x6e2.js";
import {
    l as J,
    n as Ge,
    o as Ke,
    r as qe
} from "./501976a3-boo2ud66rmggoeo7.js";
import {
    c as Je,
    f as Y,
    n as Ye,
    p as Xe,
    t as Ze,
    u as Qe
} from "./a8575090-gr918xgnqimuyb6e.js";

function $e(e) {
    let t = new URL(e).searchParams.get(`state`);
    if (t == null) return !1;
    let n = `${X}:${t}`;
    return window.sessionStorage.getItem(n) == null ? (window.sessionStorage.setItem(n, `true`), !0) : !1
}

function et(e) {
    $e(e) && (window.location.assign(e), window.setTimeout(() => {
        window.location.replace(nt)
    }, tt))
}
var X, tt, nt, rt = e((() => {
    X = `codex_oauth_relayed_state`, tt = 1e3, nt = `/plugins`
}));
async function it(e) {
    if (e.auth_type !== `OAUTH` || !e.connector_id) return !1;
    try {
        let [t, r] = await Promise.all([F.safeGet(`/aip/connectors/{connector_id}`, {
            parameters: {
                path: {
                    connector_id: e.connector_id
                },
                query: {
                    include_actions: !1
                }
            }
        }), F.safeGet(`/aip/connectors/{connector_id}/actions`, {
            parameters: {
                path: {
                    connector_id: e.connector_id
                }
            },
            additionalHeaders: {
                [v]: `CONNECTOR_SETTING`
            }
        })]);
        return n({
            actions: r.actions ?? [],
            connector: t,
            link: e,
            includeNetNewOAuthScopes: !1
        })
    } catch {
        return !1
    }
}

function at() {
    "use no forget";
    let e = d(),
        t = ye(),
        n = se(),
        i = de(),
        o = je(),
        s = n?.nativeRedirectUrl,
        l = (0, Z.useRef)(!1),
        m = ue();
    return (0, Z.useEffect)(() => {
        if (l.current) return;
        l.current = !0;
        let n = y(window.location.href);
        if (n != null) {
            window.history.replaceState(null, ``, window.location.pathname), n.redirectUrl == null ? i(V(r.OAUTH_FAILED_GENERIC, `/#settings/${A.Connectors}`), {
                replace: !0
            }) : window.location.replace(n.redirectUrl);
            return
        }
        if (s) {
            et(s);
            return
        }
        let d = C(window.location.href) ?? window.location.href;
        async function h() {
            let n = e => {
                    window.close(), window.setTimeout(() => {
                        i(e)
                    }, 150)
                },
                s = Me(),
                l = s === `workspace_microsoft_auto_link` ? Ge() : null,
                h = l == null ? null : performance.now(),
                y = s === `redirect` ? Ee() : void 0,
                b = new URL(d).searchParams,
                x = b.get(`oauth_state_id`) ?? b.get(`state`),
                C = R(x),
                w = P(x),
                T = C ? {
                    [v]: C
                } : void 0,
                E = w == null && l == null && (s === `popup` || o),
                D = w ?? (s === `recommended_onboarding_redirect` ? `/` : l?.returnPath ?? `#settings/${A.Connectors}`),
                O = Je(d),
                k = xe(d),
                j = O == null ? void 0 : Ne(O.oauthStateId),
                M = ({
                    outcome: e,
                    reason: t,
                    connectorId: n
                }) => {
                    l == null || h == null || (J({
                        phase: `oauth_callback`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: performance.now() - h
                    }), J({
                        phase: `end_to_end`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: Date.now() - l.startedAt
                    }))
                };
            try {
                if (O) {
                    let e = b.get(`tenant`);
                    if (e != null && O.approvedTenantId != null && e.toLowerCase() !== O.approvedTenantId.toLowerCase()) throw Error(`ADMIN_CONSENT_TENANT_MISMATCH`);
                    Pe({
                        attemptId: j,
                        lifecycleStep: Ie.callbackReceived,
                        callbackSource: Fe.callbackPage
                    });
                    let t = await Ze({
                            workspaceId: O.workspaceId ?? ``,
                            useDirectRouting: O.useDirectRouting ?? !1,
                            requestBody: {
                                full_redirect_url: f(d)
                            }
                        }),
                        [r, ...i] = O.remainingStages ?? [];
                    if (t.status === `COMPLETE` && r != null) {
                        if (e == null) throw Error(`ADMIN_CONSENT_TENANT_MISSING`);
                        let t = new URL(r.redirectUrl);
                        if (t.origin !== `https://login.microsoftonline.com` || t.pathname !== `/organizations/v2.0/adminconsent`) throw Error(`INVALID_ADMIN_CONSENT_REDIRECT`);
                        t.pathname = `/${e}/v2.0/adminconsent`, Xe({
                            oauthStateId: r.oauthStateId,
                            expiresAt: r.expiresAt,
                            useDirectRouting: O.useDirectRouting,
                            workspaceId: O.workspaceId,
                            finalOauthStateId: O.finalOauthStateId,
                            approvedTenantId: e,
                            remainingStages: i
                        }), window.location.replace(t.toString());
                        return
                    }
                    let a = O.finalOauthStateId ?? O.oauthStateId;
                    Y({
                        oauthStateId: a,
                        result: {
                            ...t,
                            oauth_state_id: a
                        }
                    }), n(`/admin/apps`);
                    return
                }
                if (k) {
                    let e = await F.safePost(`/aip/connectors/links/oauth/verification/callback`, {
                        requestBody: {
                            full_redirect_url: d
                        },
                        additionalHeaders: T
                    });
                    if (E) {
                        let t = e => {
                            e.origin === window.location.origin && e.data.connectorId === k.connectorId && (c.removeEventListener(`message`, t, !1), window.location.href = e.data.redirectUrl)
                        };
                        c.addEventListener(`message`, t, !1), p({
                            success: !0,
                            connectorId: k.connectorId,
                            oauthStateId: k.oauthStateId,
                            verificationToken: e.verification_token
                        });
                        return
                    }
                    i(`#settings/${A.Connectors}`);
                    return
                }
                let o = await F.safePost(`/aip/connectors/links/oauth/callback`, {
                    requestBody: {
                        full_redirect_url: d
                    },
                    additionalHeaders: T
                });
                if (await m.invalidateQueries({
                        refetchType: `all`,
                        queryKey: [`fetchConnectorLinkData`]
                    }), !o?.post_auth_url) {
                    if (l != null) {
                        M({
                            outcome: `failure`,
                            reason: `missing_post_auth_url`,
                            connectorId: o?.link?.connector_id
                        }), i(l.returnPath, {
                            replace: !0
                        });
                        return
                    }
                    i(V(r.OAUTH_FAILED_GENERIC, K(D)));
                    return
                }
                let s = We({
                        enableMultiLinks: o.link.enable_multi_links,
                        url: new URL(o.post_auth_url, location.origin),
                        connectorId: o.link.connector_id,
                        linkId: o.link.id,
                        suggestedAccountName: o.suggested_account_name ?? void 0
                    }),
                    h = o?.link?.connector_id === S[L.GITHUB_CONNECTOR],
                    g = oe(s.hash),
                    v = g != null,
                    y = g === A.Connectors;
                if (!v) {
                    let e = u[o.link.connector_id];
                    e && s.searchParams.set(`add_source`, e)
                }
                let C;
                if (y) {
                    let e = new URLSearchParams;
                    e.set(`connector`, o.link.connector_id), h && e.set(`github_onboarding`, `configure-repos`), C = W({
                        ...s,
                        search: ``,
                        hash: ae(A.Connectors).hash + `?${e.toString()}`
                    })
                } else h && s.searchParams.set(`github_onboarding`, `configure-repos`), C = W({
                    pathname: s.pathname,
                    search: s.search,
                    hash: s.hash
                });
                _.removeItem(a.ConnectorUpgradeToSyncRequest);
                let w = o.link.connector_id === `connector_bd313622bce5485cb3d0b338715f7108` ? t.formatMessage($.chatGPTForSlackInstallSuccess) : t.formatMessage($.genericSuccess, {
                        connector: o.link.name
                    }),
                    {
                        microsoftTeamsUnavailable: N,
                        scopeCheckLink: P
                    } = ee({
                        link: o.link,
                        isMicrosoftConnector: ke(o.link.connector_id) && o.link.connector_id !== S[L.TEAMS_CONNECTOR]
                    }),
                    I = o.connected_connector_ids == null ? void 0 : new Set(o.connected_connector_ids).size,
                    R = l == null && (N && te({
                        link: P
                    }) || await it(P)),
                    ne = t.formatMessage($.partialSuccess, {
                        connector: o.link.name
                    }),
                    B = ie({
                        intl: t,
                        connectorName: o.link.name,
                        microsoftTeamsUnavailable: N,
                        hasPotentialMissingScopes: R,
                        installedPluginCount: I
                    }) ?? (R ? ne : w);
                if (E) {
                    p({
                        success: !0,
                        connectorId: o.link.connector_id,
                        oauthStateId: x ?? void 0,
                        linkId: o.link.id,
                        suggestedAccountName: o.suggested_account_name ?? void 0,
                        hasPotentialMissingScopes: R,
                        microsoftTeamsUnavailable: N,
                        installedPluginCount: I
                    }), n(V(R ? r.CUSTOM_ERROR : r.CUSTOM_MSG, C, B));
                    return
                }
                let H = `chatgpt_connectors_oauth_connect_success`,
                    U = re(H, `succeeded`, o.link.connector_id);
                if (z.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: H,
                        data: {
                            success: !0,
                            type: o.link.connector_id
                        },
                        eventId: U
                    }), G.logOAuthCompleted({
                        connector_id_metadata: G.createIdMetadataFromId(e, o.link.connector_id, `unknown_referrer`),
                        referrer: `unknown_referrer`,
                        authType: `OAUTH`,
                        scopes: null,
                        success: !0
                    }), l != null) {
                    M({
                        outcome: `success`,
                        connectorId: o.link.connector_id
                    }), i(l.returnPath, {
                        replace: !0
                    });
                    return
                }
                i(V(R ? r.CUSTOM_ERROR : r.CUSTOM_MSG, C, B))
            } catch (e) {
                if (O) {
                    Y({
                        oauthStateId: O.finalOauthStateId ?? O.oauthStateId,
                        error: e instanceof Error ? e.message : `Microsoft admin consent failed`
                    }), n(`/admin/apps`);
                    return
                }
                let t, o;
                try {
                    if (x) {
                        let e = await F.safeGet(`/aip/connectors/links/oauth/state/{oauth_state_id}`, {
                            parameters: {
                                path: {
                                    oauth_state_id: x
                                }
                            },
                            additionalHeaders: T
                        });
                        (e?.status === `PENDING` || e?.status === `COMPLETE` || e?.status === `ERROR`) && (o = e.status), e?.connector_id && (t = e.connector_id)
                    }
                } catch {}
                o === `ERROR` && _.removeItem(a.ConnectorUpgradeToSyncRequest);
                let s = e instanceof g ? e.detail : void 0,
                    c = He(typeof s?.error_code == `string` ? s.error_code : void 0, s?.enable_multi_links === !0),
                    u = c === r.CUSTOM_ERROR && typeof s?.message == `string` ? s.message : e instanceof Error ? e.message : void 0,
                    d = c === r.OAUTH_FAILED_USER_CANCEL || c === r.CUSTOM_ERROR ? u : void 0;
                if (y && t && we({
                        connectorId: t,
                        installAttemptId: y
                    }) && (Be(y), Oe(y)), E) {
                    p({
                        success: !1,
                        connectorId: k?.connectorId ?? t ?? ``,
                        oauthStateId: k?.oauthStateId ?? x ?? void 0,
                        errorType: c,
                        error: u
                    }), n(V(c, D, d));
                    return
                }
                let f = `chatgpt_connectors_oauth_connect_error`,
                    ee = re(f, c === r.OAUTH_FAILED_USER_CANCEL ? `cancelled` : `failed`, t ?? `unknown`, c);
                if (z.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: f,
                        data: {
                            errorType: c,
                            success: !1,
                            type: t ?? `unknown`
                        },
                        eventId: ee
                    }), l != null) {
                    M({
                        outcome: `failure`,
                        reason: `oauth_callback_failed`,
                        connectorId: t
                    }), i(l.returnPath, {
                        replace: !0
                    });
                    return
                }
                i(V(c, K(D), d))
            }
        }
        h().finally(() => {
            let e = new URL(d).searchParams;
            E(e.get(`oauth_state_id`) ?? e.get(`state`))
        })
    }, [e, o, t, s, i, m]), (0, Q.jsx)(`div`, {
        className: `flex h-screen w-screen items-center justify-center`,
        children: (0, Q.jsx)(q, {
            size: 36
        })
    })
}
var ot, Z, Q, $, st, ct, lt = e((() => {
    U(), ot = ve(), w(), M(), O(), Ae(), Ke(), B(), qe(), be(), H(), ne(), Se(), Ve(), Le(), Qe(), Ye(), m(), Ce(), D(), b(), Te(), ze(), Re(), T(), h(), j(), N(), De(), k(), x(), rt(), I(), s(), i(), o(), _e(), Z = t(me()), fe(), Ue(), Q = ce(), ge(), $ = le({
        genericSuccess: {
            id: `connectorPlatformOauthRedirect.genericSuccess`,
            defaultMessage: `{connector} is now connected`
        },
        chatGPTForSlackInstallSuccess: {
            id: `connectorPlatformOauthRedirect.chatGPTForSlackInstallSuccess`,
            defaultMessage: `ChatGPT for Slack is now installed`
        },
        partialSuccess: {
            id: `connectorPlatformOauthRedirect.partialSuccess`,
            defaultMessage: `{connector} is connected, but not all requested permissions were granted. Some actions may not work until you reconnect.`
        }
    }), st = l(async () => (await he(async () => {
        let {
            ConnectorAuthCallbackBoundary: e
        } = await import(`./3660315a-m94t8dbct4jnsk3v.js`).then(e => (e.n(), e.r));
        return {
            ConnectorAuthCallbackBoundary: e
        }
    }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]))).ConnectorAuthCallbackBoundary, {
        loading: () => (0, Q.jsx)(q, {
            size: 36
        })
    }), ct = pe(function() {
        "use forget";
        let e = (0, ot.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(st, {
            url: typeof window > `u` ? `` : C(window.location.href) ?? window.location.href,
            children: (0, Q.jsx)(at, {})
        }), e[0] = t) : t = e[0], t
    })
}));
export {
    lt as n, ct as t
};
//# sourceMappingURL=e590b368-i0zsdiqrcsnga7gy.js.map