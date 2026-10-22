const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/3660315a-bzpqo3v1upvxpflw.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/1dc5ae5b-lbh95zlacjj39fll.js", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/06dfbf77-h0lre1ra65kdsbtv.js", "assets/b2cbd5c7-hd37ib03ip1ftahc.js", "assets/b5b42835-fu3out7yc55qvy2s.js", "assets/b15d5b53-e6cp4e2z003z2wgw.js", "assets/c2675c8c-nxl2ic2ofk2vw70s.js", "assets/82782bc9-jj605vonxg0iyc7p.js", "assets/8b34dbc2-d4icgkio4i3wfm6q.js", "assets/global-modals-lv5n3ujm.css", "assets/94e0eb8c-ythfm4ybtszwhr06.js", "assets/47ed0b35-bw9gmwpxovpkglbv.js", "assets/760cdbab-f8c494pab89fqmuf.js", "assets/d5b03218-btuc4i67rdlk712k.js", "assets/7517017f-m0e7hb8h6fyirvew.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $st as n,
    $x as r,
    $z as i,
    Dat as a,
    Dnt as o,
    Git as s,
    Gx as c,
    J0 as l,
    J_ as u,
    Jv as d,
    Jx as f,
    Kx as p,
    L7 as m,
    N7 as h,
    Nat as g,
    Nst as _,
    Ont as ee,
    Pv as v,
    Sy as y,
    Uv as b,
    Ux as x,
    Wv as S,
    X_ as C,
    Xot as w,
    Xv as T,
    Y0 as E,
    Yv as D,
    Yx as O,
    Zot as k,
    Zv as A,
    _nt as j,
    dy as M,
    eB as te,
    fS as N,
    hnt as P,
    iS as F,
    knt as I,
    lS as L,
    nS as ne,
    oS as R,
    pS as re,
    qit as z,
    qx as ie,
    rS as B,
    tB as V,
    uS as H,
    xy as ae,
    yy as oe
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as U,
    At as se,
    Bn as ce,
    Hn as le,
    N as ue,
    Pt as de,
    Rn as fe,
    Tn as pe,
    Ut as me,
    Vn as he,
    ln as ge,
    mt as W,
    s as _e,
    un as ve,
    zn as ye
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Bit as be,
    Fit as xe,
    Iit as Se,
    Jvn as Ce,
    Mrt as we,
    Nrt as Te,
    Rit as Ee,
    Yvn as De,
    brt as Oe,
    jrt as ke,
    mst as Ae,
    pst as je,
    vrt as G,
    zit as Me
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    ax as Ne,
    ix as Pe,
    lx as Fe,
    sx as Ie,
    ux as Le,
    xx as Re,
    yx as K
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    Hv as ze,
    zv as Be
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    n as Ve,
    t as q
} from "./af004db9-hzih3kfc8ppntedi.js";
import {
    n as He,
    r as Ue,
    t as We
} from "./d6a45810-fxs27gzbygac817v.js";
import {
    l as J,
    n as Ge,
    o as Ke,
    r as qe
} from "./501976a3-m5q1s2yttmasvlb4.js";
import {
    c as Je,
    f as Y,
    n as Ye,
    p as Xe,
    t as Ze,
    u as Qe
} from "./a8575090-e48utia3ir5ico2d.js";

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
        let [t, n] = await Promise.all([h.safeGet(`/aip/connectors/{connector_id}`, {
            parameters: {
                path: {
                    connector_id: e.connector_id
                },
                query: {
                    include_actions: !1
                }
            }
        }), h.safeGet(`/aip/connectors/{connector_id}/actions`, {
            parameters: {
                path: {
                    connector_id: e.connector_id
                }
            },
            additionalHeaders: {
                [s]: `CONNECTOR_SETTING`
            }
        })]);
        return r({
            actions: n.actions ?? [],
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
    let e = w(),
        t = ce(),
        n = se(),
        r = de(),
        l = Ce(),
        m = n?.nativeRedirectUrl,
        g = (0, Z.useRef)(!1),
        v = ue();
    return (0, Z.useEffect)(() => {
        if (g.current) return;
        g.current = !0;
        let n = b(window.location.href);
        if (n != null) {
            window.history.replaceState(null, ``, window.location.pathname), n.redirectUrl == null ? r(V(i.OAUTH_FAILED_GENERIC, `/#settings/${M.Connectors}`), {
                replace: !0
            }) : window.location.replace(n.redirectUrl);
            return
        }
        if (m) {
            et(m);
            return
        }
        let y = T(window.location.href) ?? window.location.href;
        async function x() {
            let n = e => {
                    window.close(), window.setTimeout(() => {
                        r(e)
                    }, 150)
                },
                m = Me(),
                g = m === `workspace_microsoft_auto_link` ? Ge() : null,
                b = g == null ? null : performance.now(),
                x = m === `redirect` ? Ee() : void 0,
                S = new URL(y).searchParams,
                w = S.get(`oauth_state_id`) ?? S.get(`state`),
                T = L(w),
                E = F(w),
                D = T ? {
                    [s]: T
                } : void 0,
                O = E == null && g == null && (m === `popup` || l),
                k = E ?? (m === `recommended_onboarding_redirect` ? `/` : g?.returnPath ?? `#settings/${M.Connectors}`),
                A = Je(y),
                j = xe(y),
                te = A == null ? void 0 : Ie(A.oauthStateId),
                N = ({
                    outcome: e,
                    reason: t,
                    connectorId: n
                }) => {
                    g == null || b == null || (J({
                        phase: `oauth_callback`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: performance.now() - b
                    }), J({
                        phase: `end_to_end`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: Date.now() - g.startedAt
                    }))
                };
            try {
                if (A) {
                    let e = S.get(`tenant`);
                    if (e != null && A.approvedTenantId != null && e.toLowerCase() !== A.approvedTenantId.toLowerCase()) throw Error(`ADMIN_CONSENT_TENANT_MISMATCH`);
                    Le({
                        attemptId: te,
                        lifecycleStep: Ne.callbackReceived,
                        callbackSource: Pe.callbackPage
                    });
                    let t = await Ze({
                            workspaceId: A.workspaceId ?? ``,
                            useDirectRouting: A.useDirectRouting ?? !1,
                            requestBody: {
                                full_redirect_url: d(y)
                            }
                        }),
                        [r, ...i] = A.remainingStages ?? [];
                    if (t.status === `COMPLETE` && r != null) {
                        if (e == null) throw Error(`ADMIN_CONSENT_TENANT_MISSING`);
                        let t = new URL(r.redirectUrl);
                        if (t.origin !== `https://login.microsoftonline.com` || t.pathname !== `/organizations/v2.0/adminconsent`) throw Error(`INVALID_ADMIN_CONSENT_REDIRECT`);
                        t.pathname = `/${e}/v2.0/adminconsent`, Xe({
                            oauthStateId: r.oauthStateId,
                            expiresAt: r.expiresAt,
                            useDirectRouting: A.useDirectRouting,
                            workspaceId: A.workspaceId,
                            finalOauthStateId: A.finalOauthStateId,
                            approvedTenantId: e,
                            remainingStages: i
                        }), window.location.replace(t.toString());
                        return
                    }
                    let a = A.finalOauthStateId ?? A.oauthStateId;
                    Y({
                        oauthStateId: a,
                        result: {
                            ...t,
                            oauth_state_id: a
                        }
                    }), n(`/admin/apps`);
                    return
                }
                if (j) {
                    let e = await h.safePost(`/aip/connectors/links/oauth/verification/callback`, {
                        requestBody: {
                            full_redirect_url: y
                        },
                        additionalHeaders: D
                    });
                    if (O) {
                        let t = e => {
                            e.origin === window.location.origin && e.data.connectorId === j.connectorId && (c.removeEventListener(`message`, t, !1), window.location.href = e.data.redirectUrl)
                        };
                        c.addEventListener(`message`, t, !1), p({
                            success: !0,
                            connectorId: j.connectorId,
                            oauthStateId: j.oauthStateId,
                            verificationToken: e.verification_token
                        });
                        return
                    }
                    r(`#settings/${M.Connectors}`);
                    return
                }
                let a = await h.safePost(`/aip/connectors/links/oauth/callback`, {
                    requestBody: {
                        full_redirect_url: y
                    },
                    additionalHeaders: D
                });
                if (await v.invalidateQueries({
                        refetchType: `all`,
                        queryKey: [`fetchConnectorLinkData`]
                    }), !a?.post_auth_url) {
                    if (g != null) {
                        N({
                            outcome: `failure`,
                            reason: `missing_post_auth_url`,
                            connectorId: a?.link?.connector_id
                        }), r(g.returnPath, {
                            replace: !0
                        });
                        return
                    }
                    r(V(i.OAUTH_FAILED_GENERIC, K(k)));
                    return
                }
                let s = We({
                        enableMultiLinks: a.link.enable_multi_links,
                        url: new URL(a.post_auth_url, location.origin),
                        connectorId: a.link.connector_id,
                        linkId: a.link.id,
                        suggestedAccountName: a.suggested_account_name ?? void 0
                    }),
                    l = a?.link?.connector_id === C[_.GITHUB_CONNECTOR],
                    m = oe(s.hash),
                    b = m != null,
                    x = m === M.Connectors;
                if (!b) {
                    let e = u[a.link.connector_id];
                    e && s.searchParams.set(`add_source`, e)
                }
                let T;
                if (x) {
                    let e = new URLSearchParams;
                    e.set(`connector`, a.link.connector_id), l && e.set(`github_onboarding`, `configure-repos`), T = W({
                        ...s,
                        search: ``,
                        hash: ae(M.Connectors).hash + `?${e.toString()}`
                    })
                } else l && s.searchParams.set(`github_onboarding`, `configure-repos`), T = W({
                    pathname: s.pathname,
                    search: s.search,
                    hash: s.hash
                });
                o.removeItem(ee.ConnectorUpgradeToSyncRequest);
                let E = a.link.connector_id === `connector_bd313622bce5485cb3d0b338715f7108` ? t.formatMessage($.chatGPTForSlackInstallSuccess) : t.formatMessage($.genericSuccess, {
                        connector: a.link.name
                    }),
                    {
                        microsoftTeamsUnavailable: F,
                        scopeCheckLink: I
                    } = f({
                        link: a.link,
                        isMicrosoftConnector: Ae(a.link.connector_id) && a.link.connector_id !== C[_.TEAMS_CONNECTOR]
                    }),
                    L = a.connected_connector_ids == null ? void 0 : new Set(a.connected_connector_ids).size,
                    R = g == null && (F && ne({
                        link: I
                    }) || await it(I)),
                    z = t.formatMessage($.partialSuccess, {
                        connector: a.link.name
                    }),
                    B = ie({
                        intl: t,
                        connectorName: a.link.name,
                        microsoftTeamsUnavailable: F,
                        hasPotentialMissingScopes: R,
                        installedPluginCount: L
                    }) ?? (R ? z : E);
                if (O) {
                    p({
                        success: !0,
                        connectorId: a.link.connector_id,
                        oauthStateId: w ?? void 0,
                        linkId: a.link.id,
                        suggestedAccountName: a.suggested_account_name ?? void 0,
                        hasPotentialMissingScopes: R,
                        microsoftTeamsUnavailable: F,
                        installedPluginCount: L
                    }), n(V(R ? i.CUSTOM_ERROR : i.CUSTOM_MSG, T, B));
                    return
                }
                let H = `chatgpt_connectors_oauth_connect_success`,
                    U = re(H, `succeeded`, a.link.connector_id);
                if (P.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: H,
                        data: {
                            success: !0,
                            type: a.link.connector_id
                        },
                        eventId: U
                    }), G.logOAuthCompleted({
                        connector_id_metadata: G.createIdMetadataFromId(e, a.link.connector_id, `unknown_referrer`),
                        referrer: `unknown_referrer`,
                        authType: `OAUTH`,
                        scopes: null,
                        success: !0
                    }), g != null) {
                    N({
                        outcome: `success`,
                        connectorId: a.link.connector_id
                    }), r(g.returnPath, {
                        replace: !0
                    });
                    return
                }
                r(V(R ? i.CUSTOM_ERROR : i.CUSTOM_MSG, T, B))
            } catch (e) {
                if (A) {
                    Y({
                        oauthStateId: A.finalOauthStateId ?? A.oauthStateId,
                        error: e instanceof Error ? e.message : `Microsoft admin consent failed`
                    }), n(`/admin/apps`);
                    return
                }
                let t, s;
                try {
                    if (w) {
                        let e = await h.safeGet(`/aip/connectors/links/oauth/state/{oauth_state_id}`, {
                            parameters: {
                                path: {
                                    oauth_state_id: w
                                }
                            },
                            additionalHeaders: D
                        });
                        (e?.status === `PENDING` || e?.status === `COMPLETE` || e?.status === `ERROR`) && (s = e.status), e?.connector_id && (t = e.connector_id)
                    }
                } catch {}
                s === `ERROR` && o.removeItem(ee.ConnectorUpgradeToSyncRequest);
                let c = e instanceof a ? e.detail : void 0,
                    l = He(typeof c?.error_code == `string` ? c.error_code : void 0, c?.enable_multi_links === !0),
                    u = l === i.CUSTOM_ERROR && typeof c?.message == `string` ? c.message : e instanceof Error ? e.message : void 0,
                    d = l === i.OAUTH_FAILED_USER_CANCEL || l === i.CUSTOM_ERROR ? u : void 0;
                if (x && t && we({
                        connectorId: t,
                        installAttemptId: x
                    }) && (Be(x), ke(x)), O) {
                    p({
                        success: !1,
                        connectorId: j?.connectorId ?? t ?? ``,
                        oauthStateId: j?.oauthStateId ?? w ?? void 0,
                        errorType: l,
                        error: u
                    }), n(V(l, k, d));
                    return
                }
                let f = `chatgpt_connectors_oauth_connect_error`,
                    m = re(f, l === i.OAUTH_FAILED_USER_CANCEL ? `cancelled` : `failed`, t ?? `unknown`, l);
                if (P.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: f,
                        data: {
                            errorType: l,
                            success: !1,
                            type: t ?? `unknown`
                        },
                        eventId: m
                    }), g != null) {
                    N({
                        outcome: `failure`,
                        reason: `oauth_callback_failed`,
                        connectorId: t
                    }), r(g.returnPath, {
                        replace: !0
                    });
                    return
                }
                r(V(l, K(k), d))
            }
        }
        x().finally(() => {
            let e = new URL(y).searchParams;
            D(e.get(`oauth_state_id`) ?? e.get(`state`))
        })
    }, [e, l, t, m, r, v]), (0, Q.jsx)(`div`, {
        className: `flex h-screen w-screen items-center justify-center`,
        children: (0, Q.jsx)(q, {
            size: 36
        })
    })
}
var ot, Z, Q, $, st, ct, lt = e((() => {
    U(), ot = pe(), E(), N(), n(), je(), Ke(), B(), qe(), be(), H(), R(), Se(), Ve(), Fe(), Qe(), Ye(), v(), De(), O(), x(), Te(), ze(), Re(), k(), y(), te(), j(), Oe(), A(), S(), rt(), g(), z(), I(), m(), _e(), Z = t(le()), ye(), Ue(), Q = he(), ve(), $ = fe({
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
    }), st = l(async () => (await ge(async () => {
        let {
            ConnectorAuthCallbackBoundary: e
        } = await import(`./3660315a-bzpqo3v1upvxpflw.js`).then(e => (e.n(), e.r));
        return {
            ConnectorAuthCallbackBoundary: e
        }
    }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]))).ConnectorAuthCallbackBoundary, {
        loading: () => (0, Q.jsx)(q, {
            size: 36
        })
    }), ct = me(function() {
        "use forget";
        let e = (0, ot.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(st, {
            url: typeof window > `u` ? `` : T(window.location.href) ?? window.location.href,
            children: (0, Q.jsx)(at, {})
        }), e[0] = t) : t = e[0], t
    })
}));
export {
    lt as n, ct as t
};
//# sourceMappingURL=e590b368-j6x84j1zeape8ork.js.map