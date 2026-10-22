const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/3660315a-dr85k2yjbfh82rdm.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-d7xm9wsvhdfbag9a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/1dc5ae5b-ie7i13mmx1y5x8rr.js", "assets/conversation-small-m7dgsxtvvivh3e6t.js", "assets/30901919-lc79rizhhepnsl3q.js", "assets/c470f5ab-lnsrbaizit3lulwq.js", "assets/0e5afe53-lar0ol3v36kqq3ou.js", "assets/conversation-small-ertg9659.css", "assets/06dfbf77-ky5ze5h6or1kdqwv.js", "assets/b2cbd5c7-jn40ux47l814knoa.js", "assets/b5b42835-norjlxwub3l96fq1.js", "assets/b15d5b53-hrzd1ks2s6lryl6b.js", "assets/c2675c8c-f8x469cgefxzeo6l.js", "assets/82782bc9-cyj0qqxyrvk6mamy.js", "assets/8b34dbc2-ik628tlti8ozm9vq.js", "assets/global-modals-dxg9ukpk.css", "assets/94e0eb8c-fqr4q3j4kakah3x9.js", "assets/47ed0b35-hl8xgj713d19h8zt.js", "assets/760cdbab-n0etjytcn4p9yvj9.js", "assets/d5b03218-ck79dhfdd9fhojld.js", "assets/7517017f-m0e7hb8h6fyirvew.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $v as r,
    Cy as i,
    Gv as a,
    Gx as o,
    Iv as s,
    Jx as c,
    Kv as l,
    Lnt as u,
    Q_ as d,
    Qv as f,
    X_ as p,
    Xnt as m,
    Xv as h,
    Xx as ee,
    Y7 as g,
    Yat as _,
    Ynt as te,
    Yx as ne,
    Znt as v,
    Zv as y,
    Zx as b,
    a2 as x,
    aS as S,
    cB as C,
    dS as w,
    eS as T,
    hat as E,
    iS as D,
    lB as O,
    mS as k,
    o2 as A,
    pS as j,
    pat as M,
    py as N,
    qx as re,
    rS as ie,
    sB as P,
    sS as F,
    tct as I,
    tot as L,
    uS as R,
    vst as z,
    wy as B,
    xct as V,
    xy as ae,
    yst as H,
    znt as U
} from "./4813494d-d7xm9wsvhdfbag9a.js";
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
    Art as ye,
    Fit as be,
    Lit as xe,
    Mrt as Se,
    Nyn as Ce,
    Pit as we,
    Pyn as Te,
    Rit as Ee,
    _rt as K,
    fst as De,
    jrt as Oe,
    pst as ke,
    yrt as Ae,
    zit as je
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Ib as Me,
    Nb as Ne,
    Pb as Pe,
    Rb as Fe,
    Yb as q,
    Zb as Ie,
    zb as Le
} from "./c2675c8c-f8x469cgefxzeo6l.js";
import {
    Kv as Re,
    Uv as ze
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    n as Be,
    t as J
} from "./af004db9-or24ta4smylekdpb.js";
import {
    n as Ve,
    r as He,
    t as Ue
} from "./d6a45810-lt0mkuwlgzkwctwf.js";
import {
    l as Y,
    n as We,
    o as Ge,
    r as Ke
} from "./501976a3-fvcn1wzfy6qb190f.js";
import {
    c as qe,
    f as X,
    n as Je,
    p as Ye,
    t as Xe,
    u as Ze
} from "./a8575090-fiperv0effq8te1j.js";

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
        let [t, n] = await Promise.all([g.safeGet(`/aip/connectors/{connector_id}`, {
            parameters: {
                path: {
                    connector_id: e.connector_id
                },
                query: {
                    include_actions: !1
                }
            }
        }), g.safeGet(`/aip/connectors/{connector_id}/actions`, {
            parameters: {
                path: {
                    connector_id: e.connector_id
                }
            },
            additionalHeaders: {
                [M]: `CONNECTOR_SETTING`
            }
        })]);
        return T({
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
    let e = z(),
        t = ve(),
        n = me(),
        r = le(),
        o = Ce(),
        s = n?.nativeRedirectUrl,
        l = (0, Z.useRef)(!1),
        v = ce();
    return (0, Z.useEffect)(() => {
        if (l.current) return;
        l.current = !0;
        let n = a(window.location.href);
        if (n != null) {
            window.history.replaceState(null, ``, window.location.pathname), n.redirectUrl == null ? r(O(P.OAUTH_FAILED_GENERIC, `/#settings/${N.Connectors}`), {
                replace: !0
            }) : window.location.replace(n.redirectUrl);
            return
        }
        if (s) {
            $e(s);
            return
        }
        let b = f(window.location.href) ?? window.location.href;
        async function x() {
            let n = e => {
                    window.close(), window.setTimeout(() => {
                        r(e)
                    }, 150)
                },
                a = Ee(),
                s = a === `workspace_microsoft_auto_link` ? We() : null,
                l = s == null ? null : performance.now(),
                f = a === `redirect` ? xe() : void 0,
                y = new URL(b).searchParams,
                x = y.get(`oauth_state_id`) ?? y.get(`state`),
                C = R(x),
                w = S(x),
                T = C ? {
                    [M]: C
                } : void 0,
                E = w == null && s == null && (a === `popup` || o),
                D = w ?? (a === `recommended_onboarding_redirect` ? `/` : s?.returnPath ?? `#settings/${N.Connectors}`),
                A = qe(b),
                j = we(b),
                F = A == null ? void 0 : Me(A.oauthStateId),
                L = ({
                    outcome: e,
                    reason: t,
                    connectorId: n
                }) => {
                    s == null || l == null || (Y({
                        phase: `oauth_callback`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: performance.now() - l
                    }), Y({
                        phase: `end_to_end`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: Date.now() - s.startedAt
                    }))
                };
            try {
                if (A) {
                    let e = y.get(`tenant`);
                    if (e != null && A.approvedTenantId != null && e.toLowerCase() !== A.approvedTenantId.toLowerCase()) throw Error(`ADMIN_CONSENT_TENANT_MISMATCH`);
                    Le({
                        attemptId: F,
                        lifecycleStep: Pe.callbackReceived,
                        callbackSource: Ne.callbackPage
                    });
                    let t = await Xe({
                            workspaceId: A.workspaceId ?? ``,
                            useDirectRouting: A.useDirectRouting ?? !1,
                            requestBody: {
                                full_redirect_url: h(b)
                            }
                        }),
                        [r, ...i] = A.remainingStages ?? [];
                    if (t.status === `COMPLETE` && r != null) {
                        if (e == null) throw Error(`ADMIN_CONSENT_TENANT_MISSING`);
                        let t = new URL(r.redirectUrl);
                        if (t.origin !== `https://login.microsoftonline.com` || t.pathname !== `/organizations/v2.0/adminconsent`) throw Error(`INVALID_ADMIN_CONSENT_REDIRECT`);
                        t.pathname = `/${e}/v2.0/adminconsent`, Ye({
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
                    X({
                        oauthStateId: a,
                        result: {
                            ...t,
                            oauth_state_id: a
                        }
                    }), n(`/admin/apps`);
                    return
                }
                if (j) {
                    let e = await g.safePost(`/aip/connectors/links/oauth/verification/callback`, {
                        requestBody: {
                            full_redirect_url: b
                        },
                        additionalHeaders: T
                    });
                    if (E) {
                        let t = e => {
                            e.origin === window.location.origin && e.data.connectorId === j.connectorId && (re.removeEventListener(`message`, t, !1), window.location.href = e.data.redirectUrl)
                        };
                        re.addEventListener(`message`, t, !1), c({
                            success: !0,
                            connectorId: j.connectorId,
                            oauthStateId: j.oauthStateId,
                            verificationToken: e.verification_token
                        });
                        return
                    }
                    r(`#settings/${N.Connectors}`);
                    return
                }
                let a = await g.safePost(`/aip/connectors/links/oauth/callback`, {
                    requestBody: {
                        full_redirect_url: b
                    },
                    additionalHeaders: T
                });
                if (await v.invalidateQueries({
                        refetchType: `all`,
                        queryKey: [`fetchConnectorLinkData`]
                    }), !a?.post_auth_url) {
                    if (s != null) {
                        L({
                            outcome: `failure`,
                            reason: `missing_post_auth_url`,
                            connectorId: a?.link?.connector_id
                        }), r(s.returnPath, {
                            replace: !0
                        });
                        return
                    }
                    r(O(P.OAUTH_FAILED_GENERIC, q(D)));
                    return
                }
                let o = Ue({
                        enableMultiLinks: a.link.enable_multi_links,
                        url: new URL(a.post_auth_url, location.origin),
                        connectorId: a.link.connector_id,
                        linkId: a.link.id,
                        suggestedAccountName: a.suggested_account_name ?? void 0
                    }),
                    l = a?.link?.connector_id === d[I.GITHUB_CONNECTOR],
                    f = ae(o.hash),
                    _ = f != null,
                    S = f === N.Connectors;
                if (!_) {
                    let e = p[a.link.connector_id];
                    e && o.searchParams.set(`add_source`, e)
                }
                let C;
                if (S) {
                    let e = new URLSearchParams;
                    e.set(`connector`, a.link.connector_id), l && e.set(`github_onboarding`, `configure-repos`), C = G({
                        ...o,
                        search: ``,
                        hash: i(N.Connectors).hash + `?${e.toString()}`
                    })
                } else l && o.searchParams.set(`github_onboarding`, `configure-repos`), C = G({
                    pathname: o.pathname,
                    search: o.search,
                    hash: o.hash
                });
                te.removeItem(m.ConnectorUpgradeToSyncRequest);
                let w = a.link.connector_id === `connector_bd313622bce5485cb3d0b338715f7108` ? t.formatMessage($.chatGPTForSlackInstallSuccess) : t.formatMessage($.genericSuccess, {
                        connector: a.link.name
                    }),
                    {
                        microsoftTeamsUnavailable: M,
                        scopeCheckLink: R
                    } = ee({
                        link: a.link,
                        isMicrosoftConnector: ke(a.link.connector_id) && a.link.connector_id !== d[I.TEAMS_CONNECTOR]
                    }),
                    z = a.connected_connector_ids == null ? void 0 : new Set(a.connected_connector_ids).size,
                    B = s == null && (M && ie({
                        link: R
                    }) || await it(R)),
                    V = t.formatMessage($.partialSuccess, {
                        connector: a.link.name
                    }),
                    H = ne({
                        intl: t,
                        connectorName: a.link.name,
                        microsoftTeamsUnavailable: M,
                        hasPotentialMissingScopes: B,
                        installedPluginCount: z
                    }) ?? (B ? V : w);
                if (E) {
                    c({
                        success: !0,
                        connectorId: a.link.connector_id,
                        oauthStateId: x ?? void 0,
                        linkId: a.link.id,
                        suggestedAccountName: a.suggested_account_name ?? void 0,
                        hasPotentialMissingScopes: B,
                        microsoftTeamsUnavailable: M,
                        installedPluginCount: z
                    }), n(O(B ? P.CUSTOM_ERROR : P.CUSTOM_MSG, C, H));
                    return
                }
                let U = `chatgpt_connectors_oauth_connect_success`,
                    W = k(U, `succeeded`, a.link.connector_id);
                if (u.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: U,
                        data: {
                            success: !0,
                            type: a.link.connector_id
                        },
                        eventId: W
                    }), K.logOAuthCompleted({
                        connector_id_metadata: K.createIdMetadataFromId(e, a.link.connector_id, `unknown_referrer`),
                        referrer: `unknown_referrer`,
                        authType: `OAUTH`,
                        scopes: null,
                        success: !0
                    }), s != null) {
                    L({
                        outcome: `success`,
                        connectorId: a.link.connector_id
                    }), r(s.returnPath, {
                        replace: !0
                    });
                    return
                }
                r(O(B ? P.CUSTOM_ERROR : P.CUSTOM_MSG, C, H))
            } catch (e) {
                if (A) {
                    X({
                        oauthStateId: A.finalOauthStateId ?? A.oauthStateId,
                        error: e instanceof Error ? e.message : `Microsoft admin consent failed`
                    }), n(`/admin/apps`);
                    return
                }
                let t, i;
                try {
                    if (x) {
                        let e = await g.safeGet(`/aip/connectors/links/oauth/state/{oauth_state_id}`, {
                            parameters: {
                                path: {
                                    oauth_state_id: x
                                }
                            },
                            additionalHeaders: T
                        });
                        (e?.status === `PENDING` || e?.status === `COMPLETE` || e?.status === `ERROR`) && (i = e.status), e?.connector_id && (t = e.connector_id)
                    }
                } catch {}
                i === `ERROR` && te.removeItem(m.ConnectorUpgradeToSyncRequest);
                let a = e instanceof _ ? e.detail : void 0,
                    o = Ve(typeof a?.error_code == `string` ? a.error_code : void 0, a?.enable_multi_links === !0),
                    l = o === P.CUSTOM_ERROR && typeof a?.message == `string` ? a.message : e instanceof Error ? e.message : void 0,
                    d = o === P.OAUTH_FAILED_USER_CANCEL || o === P.CUSTOM_ERROR ? l : void 0;
                if (f && t && Oe({
                        connectorId: t,
                        installAttemptId: f
                    }) && (ze(f), ye(f)), E) {
                    c({
                        success: !1,
                        connectorId: j?.connectorId ?? t ?? ``,
                        oauthStateId: j?.oauthStateId ?? x ?? void 0,
                        errorType: o,
                        error: l
                    }), n(O(o, D, d));
                    return
                }
                let p = `chatgpt_connectors_oauth_connect_error`,
                    h = k(p, o === P.OAUTH_FAILED_USER_CANCEL ? `cancelled` : `failed`, t ?? `unknown`, o);
                if (u.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: p,
                        data: {
                            errorType: o,
                            success: !1,
                            type: t ?? `unknown`
                        },
                        eventId: h
                    }), s != null) {
                    L({
                        outcome: `failure`,
                        reason: `oauth_callback_failed`,
                        connectorId: t
                    }), r(s.returnPath, {
                        replace: !0
                    });
                    return
                }
                r(O(o, q(D), d))
            }
        }
        x().finally(() => {
            let e = new URL(b).searchParams;
            y(e.get(`oauth_state_id`) ?? e.get(`state`))
        })
    }, [e, o, t, s, r, v]), (0, Q.jsx)(`div`, {
        className: `flex h-screen w-screen items-center justify-center`,
        children: (0, Q.jsx)(J, {
            size: 36
        })
    })
}
var ot, Z, Q, $, st, ct, lt = e((() => {
    ue(), ot = _e(), A(), j(), V(), De(), Ge(), D(), Ke(), je(), w(), F(), be(), Be(), Fe(), Ze(), Je(), s(), Te(), b(), o(), Se(), Re(), Ie(), H(), B(), C(), U(), Ae(), r(), l(), rt(), L(), E(), v(), n(), ge(), Z = t(fe()), de(), He(), Q = W(), he(), $ = se({
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
    }), st = x(async () => (await pe(async () => {
        let {
            ConnectorAuthCallbackBoundary: e
        } = await import(`./3660315a-dr85k2yjbfh82rdm.js`).then(e => (e.n(), e.r));
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
            url: typeof window > `u` ? `` : f(window.location.href) ?? window.location.href,
            children: (0, Q.jsx)(at, {})
        }), e[0] = t) : t = e[0], t
    })
}));
export {
    lt as n, ct as t
};
//# sourceMappingURL=e590b368-mhvraw3rqsn5106h.js.map