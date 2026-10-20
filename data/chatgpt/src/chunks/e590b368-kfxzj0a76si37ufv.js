const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/3660315a-h9gbrbh6nmf4ykdr.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/1dc5ae5b-hj8zkrvx32574bcb.js", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css", "assets/06dfbf77-fe8jqxpmogp7hp3b.js", "assets/b2cbd5c7-b7smo6k8uxpi3t28.js", "assets/b5b42835-hp7ydc7aquhwe66i.js", "assets/b15d5b53-ohvi0fdkim9osf67.js", "assets/c2675c8c-ejvs9hq3rwjwsbcv.js", "assets/82782bc9-fcii2id0x6lspwtj.js", "assets/8b34dbc2-dtawqv9t1aqckqj4.js", "assets/global-modals-lv5n3ujm.css", "assets/94e0eb8c-lon6tazr2p489rlc.js", "assets/47ed0b35-or7q1bbfh0rntyfi.js", "assets/760cdbab-bh2w3v7dn4lpntpk.js", "assets/d5b03218-k4dxk7m2ijw2ab2t.js", "assets/7517017f-m0e7hb8h6fyirvew.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ot as n,
    $x as r,
    Aat as i,
    Ant as a,
    Cy as o,
    F7 as s,
    Fv as c,
    Gv as l,
    Iat as u,
    Ist as d,
    Jit as f,
    Jx as p,
    Kx as m,
    Mnt as h,
    Qv as g,
    Sy as ee,
    Wv as _,
    Wx as v,
    X0 as y,
    Xit as b,
    Xv as x,
    Xx as S,
    Y_ as te,
    Yv as ne,
    Yx as re,
    Z0 as C,
    Z_ as w,
    Zv as T,
    bnt as E,
    by as ie,
    eB as D,
    est as O,
    fS as k,
    fy as A,
    iS as j,
    jnt as M,
    lS as N,
    nB as P,
    nS as ae,
    nct as F,
    oS as I,
    pS as L,
    qx as R,
    rS as z,
    tB as B,
    uS as V,
    vnt as H,
    z7 as U
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as W,
    Ht as oe,
    Ln as se,
    N as ce,
    Nt as le,
    Q as ue,
    Rn as de,
    Vn as fe,
    cn as pe,
    kt as me,
    ln as he,
    pt as G,
    s as ge,
    wn as _e,
    zn as ve
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $vn as ye,
    Bit as be,
    Crt as K,
    Git as xe,
    Irt as Se,
    Lrt as Ce,
    Qvn as we,
    Rrt as Te,
    Trt as Ee,
    Uit as De,
    Vit as Oe,
    Wit as ke,
    vst as Ae,
    yst as je
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Bb as Me,
    Cb as Ne,
    Eb as Pe,
    Ob as Fe,
    Rb as q,
    kb as Ie,
    wb as Le
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    Bv as Re,
    Uv as ze
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
import {
    n as Be,
    t as J
} from "./af004db9-mmiugbs6durt9mav.js";
import {
    n as Ve,
    r as He,
    t as Ue
} from "./d6a45810-e6d8f93xxsny2zhb.js";
import {
    l as Y,
    n as We,
    o as Ge,
    r as Ke
} from "./501976a3-ear4j9ckig9yjkno.js";
import {
    c as qe,
    f as X,
    n as Je,
    p as Ye,
    t as Xe,
    u as Ze
} from "./a8575090-hdlhfml2ess5058y.js";

function Qe(e) {
    let t = new URL(e).searchParams.get(`state`);
    if (t == null) return !1;
    let n = `${et}:${t}`;
    return window.sessionStorage.getItem(n) == null ? (window.sessionStorage.setItem(n, `true`), !0) : !1
}

function $e(e) {
    Qe(e) && (window.location.assign(e), window.setTimeout(() => {
        window.location.replace(nt)
    }, tt))
}
var et, tt, nt, rt = e((() => {
    et = `codex_oauth_relayed_state`, tt = 1e3, nt = `/plugins`
}));
async function it(e) {
    if (e.auth_type !== `OAUTH` || !e.connector_id) return !1;
    try {
        let [t, n] = await Promise.all([s.safeGet(`/aip/connectors/{connector_id}`, {
            parameters: {
                path: {
                    connector_id: e.connector_id
                },
                query: {
                    include_actions: !1
                }
            }
        }), s.safeGet(`/aip/connectors/{connector_id}/actions`, {
            parameters: {
                path: {
                    connector_id: e.connector_id
                }
            },
            additionalHeaders: {
                [f]: `CONNECTOR_SETTING`
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
    let e = n(),
        t = ve(),
        r = me(),
        o = le(),
        c = we(),
        l = r?.nativeRedirectUrl,
        u = (0, Z.useRef)(!1),
        h = ce();
    return (0, Z.useEffect)(() => {
        if (u.current) return;
        u.current = !0;
        let n = _(window.location.href);
        if (n != null) {
            window.history.replaceState(null, ``, window.location.pathname), n.redirectUrl == null ? o(P(D.OAUTH_FAILED_GENERIC, `/#settings/${A.Connectors}`), {
                replace: !0
            }) : window.location.replace(n.redirectUrl);
            return
        }
        if (l) {
            $e(l);
            return
        }
        let r = T(window.location.href) ?? window.location.href;
        async function g() {
            let n = e => {
                    window.close(), window.setTimeout(() => {
                        o(e)
                    }, 150)
                },
                l = ke(),
                u = l === `workspace_microsoft_auto_link` ? We() : null,
                g = u == null ? null : performance.now(),
                _ = l === `redirect` ? De() : void 0,
                v = new URL(r).searchParams,
                y = v.get(`oauth_state_id`) ?? v.get(`state`),
                b = N(y),
                x = j(y),
                S = b ? {
                    [f]: b
                } : void 0,
                C = x == null && u == null && (l === `popup` || c),
                T = x ?? (l === `recommended_onboarding_redirect` ? `/` : u?.returnPath ?? `#settings/${A.Connectors}`),
                E = qe(r),
                O = be(r),
                k = E == null ? void 0 : Pe(E.oauthStateId),
                F = ({
                    outcome: e,
                    reason: t,
                    connectorId: n
                }) => {
                    u == null || g == null || (Y({
                        phase: `oauth_callback`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: performance.now() - g
                    }), Y({
                        phase: `end_to_end`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: Date.now() - u.startedAt
                    }))
                };
            try {
                if (E) {
                    let e = v.get(`tenant`);
                    if (e != null && E.approvedTenantId != null && e.toLowerCase() !== E.approvedTenantId.toLowerCase()) throw Error(`ADMIN_CONSENT_TENANT_MISMATCH`);
                    Ie({
                        attemptId: k,
                        lifecycleStep: Le.callbackReceived,
                        callbackSource: Ne.callbackPage
                    });
                    let t = await Xe({
                            workspaceId: E.workspaceId ?? ``,
                            useDirectRouting: E.useDirectRouting ?? !1,
                            requestBody: {
                                full_redirect_url: ne(r)
                            }
                        }),
                        [i, ...a] = E.remainingStages ?? [];
                    if (t.status === `COMPLETE` && i != null) {
                        if (e == null) throw Error(`ADMIN_CONSENT_TENANT_MISSING`);
                        let t = new URL(i.redirectUrl);
                        if (t.origin !== `https://login.microsoftonline.com` || t.pathname !== `/organizations/v2.0/adminconsent`) throw Error(`INVALID_ADMIN_CONSENT_REDIRECT`);
                        t.pathname = `/${e}/v2.0/adminconsent`, Ye({
                            oauthStateId: i.oauthStateId,
                            expiresAt: i.expiresAt,
                            useDirectRouting: E.useDirectRouting,
                            workspaceId: E.workspaceId,
                            finalOauthStateId: E.finalOauthStateId,
                            approvedTenantId: e,
                            remainingStages: a
                        }), window.location.replace(t.toString());
                        return
                    }
                    let o = E.finalOauthStateId ?? E.oauthStateId;
                    X({
                        oauthStateId: o,
                        result: {
                            ...t,
                            oauth_state_id: o
                        }
                    }), n(`/admin/apps`);
                    return
                }
                if (O) {
                    let e = await s.safePost(`/aip/connectors/links/oauth/verification/callback`, {
                        requestBody: {
                            full_redirect_url: r
                        },
                        additionalHeaders: S
                    });
                    if (C) {
                        let t = e => {
                            e.origin === window.location.origin && e.data.connectorId === O.connectorId && (m.removeEventListener(`message`, t, !1), window.location.href = e.data.redirectUrl)
                        };
                        m.addEventListener(`message`, t, !1), R({
                            success: !0,
                            connectorId: O.connectorId,
                            oauthStateId: O.oauthStateId,
                            verificationToken: e.verification_token
                        });
                        return
                    }
                    o(`#settings/${A.Connectors}`);
                    return
                }
                let i = await s.safePost(`/aip/connectors/links/oauth/callback`, {
                    requestBody: {
                        full_redirect_url: r
                    },
                    additionalHeaders: S
                });
                if (await h.invalidateQueries({
                        refetchType: `all`,
                        queryKey: [`fetchConnectorLinkData`]
                    }), !i?.post_auth_url) {
                    if (u != null) {
                        F({
                            outcome: `failure`,
                            reason: `missing_post_auth_url`,
                            connectorId: i?.link?.connector_id
                        }), o(u.returnPath, {
                            replace: !0
                        });
                        return
                    }
                    o(P(D.OAUTH_FAILED_GENERIC, q(T)));
                    return
                }
                let c = Ue({
                        enableMultiLinks: i.link.enable_multi_links,
                        url: new URL(i.post_auth_url, location.origin),
                        connectorId: i.link.connector_id,
                        linkId: i.link.id,
                        suggestedAccountName: i.suggested_account_name ?? void 0
                    }),
                    l = i?.link?.connector_id === w[d.GITHUB_CONNECTOR],
                    f = ie(c.hash),
                    g = f != null,
                    _ = f === A.Connectors;
                if (!g) {
                    let e = te[i.link.connector_id];
                    e && c.searchParams.set(`add_source`, e)
                }
                let b;
                if (_) {
                    let e = new URLSearchParams;
                    e.set(`connector`, i.link.connector_id), l && e.set(`github_onboarding`, `configure-repos`), b = G({
                        ...c,
                        search: ``,
                        hash: ee(A.Connectors).hash + `?${e.toString()}`
                    })
                } else l && c.searchParams.set(`github_onboarding`, `configure-repos`), b = G({
                    pathname: c.pathname,
                    search: c.search,
                    hash: c.hash
                });
                a.removeItem(M.ConnectorUpgradeToSyncRequest);
                let x = i.link.connector_id === `connector_bd313622bce5485cb3d0b338715f7108` ? t.formatMessage($.chatGPTForSlackInstallSuccess) : t.formatMessage($.genericSuccess, {
                        connector: i.link.name
                    }),
                    {
                        microsoftTeamsUnavailable: j,
                        scopeCheckLink: N
                    } = re({
                        link: i.link,
                        isMicrosoftConnector: je(i.link.connector_id) && i.link.connector_id !== w[d.TEAMS_CONNECTOR]
                    }),
                    I = i.connected_connector_ids == null ? void 0 : new Set(i.connected_connector_ids).size,
                    z = u == null && (j && ae({
                        link: N
                    }) || await it(N)),
                    B = t.formatMessage($.partialSuccess, {
                        connector: i.link.name
                    }),
                    V = p({
                        intl: t,
                        connectorName: i.link.name,
                        microsoftTeamsUnavailable: j,
                        hasPotentialMissingScopes: z,
                        installedPluginCount: I
                    }) ?? (z ? B : x);
                if (C) {
                    R({
                        success: !0,
                        connectorId: i.link.connector_id,
                        oauthStateId: y ?? void 0,
                        linkId: i.link.id,
                        suggestedAccountName: i.suggested_account_name ?? void 0,
                        hasPotentialMissingScopes: z,
                        microsoftTeamsUnavailable: j,
                        installedPluginCount: I
                    }), n(P(z ? D.CUSTOM_ERROR : D.CUSTOM_MSG, b, V));
                    return
                }
                let U = `chatgpt_connectors_oauth_connect_success`,
                    W = L(U, `succeeded`, i.link.connector_id);
                if (H.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: U,
                        data: {
                            success: !0,
                            type: i.link.connector_id
                        },
                        eventId: W
                    }), K.logOAuthCompleted({
                        connector_id_metadata: K.createIdMetadataFromId(e, i.link.connector_id, `unknown_referrer`),
                        referrer: `unknown_referrer`,
                        authType: `OAUTH`,
                        scopes: null,
                        success: !0
                    }), u != null) {
                    F({
                        outcome: `success`,
                        connectorId: i.link.connector_id
                    }), o(u.returnPath, {
                        replace: !0
                    });
                    return
                }
                o(P(z ? D.CUSTOM_ERROR : D.CUSTOM_MSG, b, V))
            } catch (e) {
                if (E) {
                    X({
                        oauthStateId: E.finalOauthStateId ?? E.oauthStateId,
                        error: e instanceof Error ? e.message : `Microsoft admin consent failed`
                    }), n(`/admin/apps`);
                    return
                }
                let t, r;
                try {
                    if (y) {
                        let e = await s.safeGet(`/aip/connectors/links/oauth/state/{oauth_state_id}`, {
                            parameters: {
                                path: {
                                    oauth_state_id: y
                                }
                            },
                            additionalHeaders: S
                        });
                        (e?.status === `PENDING` || e?.status === `COMPLETE` || e?.status === `ERROR`) && (r = e.status), e?.connector_id && (t = e.connector_id)
                    }
                } catch {}
                r === `ERROR` && a.removeItem(M.ConnectorUpgradeToSyncRequest);
                let c = e instanceof i ? e.detail : void 0,
                    l = Ve(typeof c?.error_code == `string` ? c.error_code : void 0, c?.enable_multi_links === !0),
                    d = l === D.CUSTOM_ERROR && typeof c?.message == `string` ? c.message : e instanceof Error ? e.message : void 0,
                    f = l === D.OAUTH_FAILED_USER_CANCEL || l === D.CUSTOM_ERROR ? d : void 0;
                if (_ && t && Ce({
                        connectorId: t,
                        installAttemptId: _
                    }) && (Re(_), Se(_)), C) {
                    R({
                        success: !1,
                        connectorId: O?.connectorId ?? t ?? ``,
                        oauthStateId: O?.oauthStateId ?? y ?? void 0,
                        errorType: l,
                        error: d
                    }), n(P(l, T, f));
                    return
                }
                let p = `chatgpt_connectors_oauth_connect_error`,
                    m = L(p, l === D.OAUTH_FAILED_USER_CANCEL ? `cancelled` : `failed`, t ?? `unknown`, l);
                if (H.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: p,
                        data: {
                            errorType: l,
                            success: !1,
                            type: t ?? `unknown`
                        },
                        eventId: m
                    }), u != null) {
                    F({
                        outcome: `failure`,
                        reason: `oauth_callback_failed`,
                        connectorId: t
                    }), o(u.returnPath, {
                        replace: !0
                    });
                    return
                }
                o(P(l, q(T), f))
            }
        }
        g().finally(() => {
            let e = new URL(r).searchParams;
            x(e.get(`oauth_state_id`) ?? e.get(`state`))
        })
    }, [e, c, t, l, o, h]), (0, Q.jsx)(`div`, {
        className: `flex h-screen w-screen items-center justify-center`,
        children: (0, Q.jsx)(J, {
            size: 36
        })
    })
}
var ot, Z, Q, $, st, ct, lt = e((() => {
    ue(), ot = _e(), C(), k(), F(), Ae(), Ge(), z(), Ke(), xe(), V(), I(), Oe(), Be(), Fe(), Ze(), Je(), c(), ye(), S(), v(), Te(), ze(), Me(), O(), o(), B(), E(), Ee(), g(), l(), rt(), u(), b(), h(), U(), ge(), Z = t(fe()), de(), He(), Q = W(), he(), $ = se({
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
    }), st = y(async () => (await pe(async () => {
        let {
            ConnectorAuthCallbackBoundary: e
        } = await import(`./3660315a-h9gbrbh6nmf4ykdr.js`).then(e => (e.n(), e.r));
        return {
            ConnectorAuthCallbackBoundary: e
        }
    }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]))).ConnectorAuthCallbackBoundary, {
        loading: () => (0, Q.jsx)(J, {
            size: 36
        })
    }), ct = oe(function() {
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
//# sourceMappingURL=e590b368-kfxzj0a76si37ufv.js.map