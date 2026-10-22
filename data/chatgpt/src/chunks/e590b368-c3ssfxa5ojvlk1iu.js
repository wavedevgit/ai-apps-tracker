const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/3660315a-i6of93n0svrhxzso.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/1dc5ae5b-k5s5s0j1daup41ti.js", "assets/conversation-small-m08q51xmfe7gjq3d.js", "assets/30901919-lgbmg5s09xld40kt.js", "assets/c470f5ab-hgik953cu5ujlhdm.js", "assets/0e5afe53-i4tqvmyg38miikw0.js", "assets/conversation-small-dtc7tvsx.css", "assets/06dfbf77-upybysb97b43q9bo.js", "assets/b2cbd5c7-fzfs2y6bewpxhodm.js", "assets/b5b42835-b37673veup3vzppr.js", "assets/b15d5b53-ddufw1667wk5jqls.js", "assets/c2675c8c-otyjprdiowg2v8hl.js", "assets/82782bc9-ca5kcqz13rn6iprj.js", "assets/8b34dbc2-n194ohawifys3bko.js", "assets/global-modals-dxg9ukpk.css", "assets/94e0eb8c-deqz7js9q13jbi2m.js", "assets/47ed0b35-bw34hvjz8cuagnzo.js", "assets/760cdbab-h7i54dysnqrkk30m.js", "assets/d5b03218-f03bwtopl1qmt6ik.js", "assets/7517017f-m0e7hb8h6fyirvew.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $v as n,
    Cy as r,
    Gv as i,
    Gx as a,
    Int as o,
    Iv as s,
    J7 as c,
    Jat as l,
    Jnt as u,
    Jx as d,
    Kv as f,
    Q7 as p,
    Q_ as m,
    Qv as h,
    Rnt as g,
    X_ as _,
    Xnt as v,
    Xv as ee,
    Xx as te,
    Ynt as y,
    Yx as ne,
    Zv as b,
    Zx as x,
    _st as S,
    a2 as C,
    aS as re,
    bct as w,
    cB as T,
    dS as E,
    eS as D,
    ect as O,
    eot as k,
    fat as A,
    iS as j,
    lB as M,
    mS as ie,
    mat as N,
    o2 as P,
    pS as F,
    py as I,
    qx as L,
    rS as ae,
    sB as R,
    sS as z,
    uS as B,
    vst as V,
    wy as H,
    xy as oe
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as U,
    Ht as se,
    Ln as ce,
    N as le,
    Nt as ue,
    Q as de,
    Rn as fe,
    Vn as pe,
    cn as me,
    kt as he,
    ln as ge,
    pt as W,
    s as _e,
    wn as ve,
    zn as ye
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Art as be,
    Ayn as xe,
    Fit as Se,
    Lit as Ce,
    Mrt as we,
    Pit as Te,
    Rit as Ee,
    _rt as G,
    fst as De,
    jrt as Oe,
    jyn as ke,
    pst as Ae,
    yrt as je,
    zit as Me
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Ab as Ne,
    Db as Pe,
    Gb as Fe,
    Mb as Ie,
    Nb as Le,
    Ob as Re,
    Ub as K
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    Gv as ze,
    Hv as Be
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    n as Ve,
    t as q
} from "./af004db9-j8qp34bq3sgddxua.js";
import {
    n as He,
    r as Ue,
    t as We
} from "./d6a45810-k0v1fnn60acmgk79.js";
import {
    l as J,
    n as Ge,
    o as Ke,
    r as qe
} from "./501976a3-hq1h4psw7i6tvchq.js";
import {
    c as Je,
    f as Y,
    n as Ye,
    p as Xe,
    t as Ze,
    u as Qe
} from "./a8575090-dh4537h1z9yq0m1s.js";

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
        let [t, n] = await Promise.all([c.safeGet(`/aip/connectors/{connector_id}`, {
            parameters: {
                path: {
                    connector_id: e.connector_id
                },
                query: {
                    include_actions: !1
                }
            }
        }), c.safeGet(`/aip/connectors/{connector_id}/actions`, {
            parameters: {
                path: {
                    connector_id: e.connector_id
                }
            },
            additionalHeaders: {
                [A]: `CONNECTOR_SETTING`
            }
        })]);
        return D({
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
    let e = S(),
        t = ye(),
        n = he(),
        a = ue(),
        s = xe(),
        f = n?.nativeRedirectUrl,
        p = (0, Z.useRef)(!1),
        g = le();
    return (0, Z.useEffect)(() => {
        if (p.current) return;
        p.current = !0;
        let n = i(window.location.href);
        if (n != null) {
            window.history.replaceState(null, ``, window.location.pathname), n.redirectUrl == null ? a(M(R.OAUTH_FAILED_GENERIC, `/#settings/${I.Connectors}`), {
                replace: !0
            }) : window.location.replace(n.redirectUrl);
            return
        }
        if (f) {
            et(f);
            return
        }
        let v = h(window.location.href) ?? window.location.href;
        async function x() {
            let n = e => {
                    window.close(), window.setTimeout(() => {
                        a(e)
                    }, 150)
                },
                i = Ee(),
                f = i === `workspace_microsoft_auto_link` ? Ge() : null,
                p = f == null ? null : performance.now(),
                h = i === `redirect` ? Ce() : void 0,
                b = new URL(v).searchParams,
                x = b.get(`oauth_state_id`) ?? b.get(`state`),
                S = B(x),
                C = re(x),
                w = S ? {
                    [A]: S
                } : void 0,
                T = C == null && f == null && (i === `popup` || s),
                E = C ?? (i === `recommended_onboarding_redirect` ? `/` : f?.returnPath ?? `#settings/${I.Connectors}`),
                D = Je(v),
                k = Te(v),
                j = D == null ? void 0 : Ne(D.oauthStateId),
                N = ({
                    outcome: e,
                    reason: t,
                    connectorId: n
                }) => {
                    f == null || p == null || (J({
                        phase: `oauth_callback`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: performance.now() - p
                    }), J({
                        phase: `end_to_end`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: Date.now() - f.startedAt
                    }))
                };
            try {
                if (D) {
                    let e = b.get(`tenant`);
                    if (e != null && D.approvedTenantId != null && e.toLowerCase() !== D.approvedTenantId.toLowerCase()) throw Error(`ADMIN_CONSENT_TENANT_MISMATCH`);
                    Le({
                        attemptId: j,
                        lifecycleStep: Re.callbackReceived,
                        callbackSource: Pe.callbackPage
                    });
                    let t = await Ze({
                            workspaceId: D.workspaceId ?? ``,
                            useDirectRouting: D.useDirectRouting ?? !1,
                            requestBody: {
                                full_redirect_url: ee(v)
                            }
                        }),
                        [r, ...i] = D.remainingStages ?? [];
                    if (t.status === `COMPLETE` && r != null) {
                        if (e == null) throw Error(`ADMIN_CONSENT_TENANT_MISSING`);
                        let t = new URL(r.redirectUrl);
                        if (t.origin !== `https://login.microsoftonline.com` || t.pathname !== `/organizations/v2.0/adminconsent`) throw Error(`INVALID_ADMIN_CONSENT_REDIRECT`);
                        t.pathname = `/${e}/v2.0/adminconsent`, Xe({
                            oauthStateId: r.oauthStateId,
                            expiresAt: r.expiresAt,
                            useDirectRouting: D.useDirectRouting,
                            workspaceId: D.workspaceId,
                            finalOauthStateId: D.finalOauthStateId,
                            approvedTenantId: e,
                            remainingStages: i
                        }), window.location.replace(t.toString());
                        return
                    }
                    let a = D.finalOauthStateId ?? D.oauthStateId;
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
                    let e = await c.safePost(`/aip/connectors/links/oauth/verification/callback`, {
                        requestBody: {
                            full_redirect_url: v
                        },
                        additionalHeaders: w
                    });
                    if (T) {
                        let t = e => {
                            e.origin === window.location.origin && e.data.connectorId === k.connectorId && (L.removeEventListener(`message`, t, !1), window.location.href = e.data.redirectUrl)
                        };
                        L.addEventListener(`message`, t, !1), d({
                            success: !0,
                            connectorId: k.connectorId,
                            oauthStateId: k.oauthStateId,
                            verificationToken: e.verification_token
                        });
                        return
                    }
                    a(`#settings/${I.Connectors}`);
                    return
                }
                let i = await c.safePost(`/aip/connectors/links/oauth/callback`, {
                    requestBody: {
                        full_redirect_url: v
                    },
                    additionalHeaders: w
                });
                if (await g.invalidateQueries({
                        refetchType: `all`,
                        queryKey: [`fetchConnectorLinkData`]
                    }), !i?.post_auth_url) {
                    if (f != null) {
                        N({
                            outcome: `failure`,
                            reason: `missing_post_auth_url`,
                            connectorId: i?.link?.connector_id
                        }), a(f.returnPath, {
                            replace: !0
                        });
                        return
                    }
                    a(M(R.OAUTH_FAILED_GENERIC, K(E)));
                    return
                }
                let s = We({
                        enableMultiLinks: i.link.enable_multi_links,
                        url: new URL(i.post_auth_url, location.origin),
                        connectorId: i.link.connector_id,
                        linkId: i.link.id,
                        suggestedAccountName: i.suggested_account_name ?? void 0
                    }),
                    l = i?.link?.connector_id === m[O.GITHUB_CONNECTOR],
                    p = oe(s.hash),
                    h = p != null,
                    S = p === I.Connectors;
                if (!h) {
                    let e = _[i.link.connector_id];
                    e && s.searchParams.set(`add_source`, e)
                }
                let C;
                if (S) {
                    let e = new URLSearchParams;
                    e.set(`connector`, i.link.connector_id), l && e.set(`github_onboarding`, `configure-repos`), C = W({
                        ...s,
                        search: ``,
                        hash: r(I.Connectors).hash + `?${e.toString()}`
                    })
                } else l && s.searchParams.set(`github_onboarding`, `configure-repos`), C = W({
                    pathname: s.pathname,
                    search: s.search,
                    hash: s.hash
                });
                u.removeItem(y.ConnectorUpgradeToSyncRequest);
                let re = i.link.connector_id === `connector_bd313622bce5485cb3d0b338715f7108` ? t.formatMessage($.chatGPTForSlackInstallSuccess) : t.formatMessage($.genericSuccess, {
                        connector: i.link.name
                    }),
                    {
                        microsoftTeamsUnavailable: A,
                        scopeCheckLink: P
                    } = te({
                        link: i.link,
                        isMicrosoftConnector: Ae(i.link.connector_id) && i.link.connector_id !== m[O.TEAMS_CONNECTOR]
                    }),
                    F = i.connected_connector_ids == null ? void 0 : new Set(i.connected_connector_ids).size,
                    z = f == null && (A && ae({
                        link: P
                    }) || await it(P)),
                    B = t.formatMessage($.partialSuccess, {
                        connector: i.link.name
                    }),
                    V = ne({
                        intl: t,
                        connectorName: i.link.name,
                        microsoftTeamsUnavailable: A,
                        hasPotentialMissingScopes: z,
                        installedPluginCount: F
                    }) ?? (z ? B : re);
                if (T) {
                    d({
                        success: !0,
                        connectorId: i.link.connector_id,
                        oauthStateId: x ?? void 0,
                        linkId: i.link.id,
                        suggestedAccountName: i.suggested_account_name ?? void 0,
                        hasPotentialMissingScopes: z,
                        microsoftTeamsUnavailable: A,
                        installedPluginCount: F
                    }), n(M(z ? R.CUSTOM_ERROR : R.CUSTOM_MSG, C, V));
                    return
                }
                let H = `chatgpt_connectors_oauth_connect_success`,
                    U = ie(H, `succeeded`, i.link.connector_id);
                if (o.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: H,
                        data: {
                            success: !0,
                            type: i.link.connector_id
                        },
                        eventId: U
                    }), G.logOAuthCompleted({
                        connector_id_metadata: G.createIdMetadataFromId(e, i.link.connector_id, `unknown_referrer`),
                        referrer: `unknown_referrer`,
                        authType: `OAUTH`,
                        scopes: null,
                        success: !0
                    }), f != null) {
                    N({
                        outcome: `success`,
                        connectorId: i.link.connector_id
                    }), a(f.returnPath, {
                        replace: !0
                    });
                    return
                }
                a(M(z ? R.CUSTOM_ERROR : R.CUSTOM_MSG, C, V))
            } catch (e) {
                if (D) {
                    Y({
                        oauthStateId: D.finalOauthStateId ?? D.oauthStateId,
                        error: e instanceof Error ? e.message : `Microsoft admin consent failed`
                    }), n(`/admin/apps`);
                    return
                }
                let t, r;
                try {
                    if (x) {
                        let e = await c.safeGet(`/aip/connectors/links/oauth/state/{oauth_state_id}`, {
                            parameters: {
                                path: {
                                    oauth_state_id: x
                                }
                            },
                            additionalHeaders: w
                        });
                        (e?.status === `PENDING` || e?.status === `COMPLETE` || e?.status === `ERROR`) && (r = e.status), e?.connector_id && (t = e.connector_id)
                    }
                } catch {}
                r === `ERROR` && u.removeItem(y.ConnectorUpgradeToSyncRequest);
                let i = e instanceof l ? e.detail : void 0,
                    s = He(typeof i?.error_code == `string` ? i.error_code : void 0, i?.enable_multi_links === !0),
                    p = s === R.CUSTOM_ERROR && typeof i?.message == `string` ? i.message : e instanceof Error ? e.message : void 0,
                    m = s === R.OAUTH_FAILED_USER_CANCEL || s === R.CUSTOM_ERROR ? p : void 0;
                if (h && t && Oe({
                        connectorId: t,
                        installAttemptId: h
                    }) && (Be(h), be(h)), T) {
                    d({
                        success: !1,
                        connectorId: k?.connectorId ?? t ?? ``,
                        oauthStateId: k?.oauthStateId ?? x ?? void 0,
                        errorType: s,
                        error: p
                    }), n(M(s, E, m));
                    return
                }
                let g = `chatgpt_connectors_oauth_connect_error`,
                    _ = ie(g, s === R.OAUTH_FAILED_USER_CANCEL ? `cancelled` : `failed`, t ?? `unknown`, s);
                if (o.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: g,
                        data: {
                            errorType: s,
                            success: !1,
                            type: t ?? `unknown`
                        },
                        eventId: _
                    }), f != null) {
                    N({
                        outcome: `failure`,
                        reason: `oauth_callback_failed`,
                        connectorId: t
                    }), a(f.returnPath, {
                        replace: !0
                    });
                    return
                }
                a(M(s, K(E), m))
            }
        }
        x().finally(() => {
            let e = new URL(v).searchParams;
            b(e.get(`oauth_state_id`) ?? e.get(`state`))
        })
    }, [e, s, t, f, a, g]), (0, Q.jsx)(`div`, {
        className: `flex h-screen w-screen items-center justify-center`,
        children: (0, Q.jsx)(q, {
            size: 36
        })
    })
}
var ot, Z, Q, $, st, ct, lt = e((() => {
    de(), ot = ve(), P(), F(), w(), De(), Ke(), j(), qe(), Me(), E(), z(), Se(), Ve(), Ie(), Qe(), Ye(), s(), ke(), x(), a(), we(), ze(), Fe(), V(), H(), T(), g(), je(), n(), f(), rt(), k(), N(), v(), p(), _e(), Z = t(pe()), fe(), Ue(), Q = U(), ge(), $ = ce({
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
    }), st = C(async () => (await me(async () => {
        let {
            ConnectorAuthCallbackBoundary: e
        } = await import(`./3660315a-i6of93n0svrhxzso.js`).then(e => (e.n(), e.r));
        return {
            ConnectorAuthCallbackBoundary: e
        }
    }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]))).ConnectorAuthCallbackBoundary, {
        loading: () => (0, Q.jsx)(q, {
            size: 36
        })
    }), ct = se(function() {
        "use forget";
        let e = (0, ot.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(st, {
            url: typeof window > `u` ? `` : h(window.location.href) ?? window.location.href,
            children: (0, Q.jsx)(at, {})
        }), e[0] = t) : t = e[0], t
    })
}));
export {
    lt as n, ct as t
};
//# sourceMappingURL=e590b368-c3ssfxa5ojvlk1iu.js.map