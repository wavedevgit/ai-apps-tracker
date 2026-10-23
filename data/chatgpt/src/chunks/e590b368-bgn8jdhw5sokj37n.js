const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/3660315a-jh0u75ipizhrcu67.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/1dc5ae5b-ggnn183oq0cj30tf.js", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/06dfbf77-mhdzmytsug0rvq1e.js", "assets/b2cbd5c7-5wvc8mg94bjjggd5.js", "assets/b5b42835-i3hx9z3qjolzt10o.js", "assets/b15d5b53-osnomyi8al1o7s4q.js", "assets/c2675c8c-oz03twoan08d72ud.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/global-modals-dxg9ukpk.css", "assets/94e0eb8c-m3ucblcofbvh9spg.js", "assets/47ed0b35-mtmk41pn6rh5nxnd.js", "assets/760cdbab-l8rnooprcys3ih2e.js", "assets/d5b03218-h30v4sebjgx3crvt.js", "assets/7517017f-m0e7hb8h6fyirvew.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $v as n,
    Cy as r,
    Est as i,
    Gv as a,
    Gx as o,
    I7 as s,
    Iv as c,
    Jx as l,
    Knt as u,
    Kv as d,
    M7 as f,
    Oct as p,
    Q_ as m,
    Qv as h,
    Sat as g,
    Tst as _,
    Wnt as v,
    X_ as ee,
    Xv as te,
    Xx as ne,
    Yx as re,
    Zv as y,
    Zx as b,
    a2 as x,
    aS as S,
    bat as C,
    cB as w,
    cct as ie,
    cot as T,
    dS as E,
    eS as D,
    iS as O,
    irt as k,
    lB as A,
    mS as j,
    not as M,
    nrt as ae,
    o2 as N,
    pS as P,
    py as F,
    qx as I,
    rS as oe,
    rrt as L,
    sB as R,
    sS as z,
    uS as B,
    wy as V,
    xy as se
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as H,
    Ht as ce,
    Ln as le,
    N as ue,
    Nt as de,
    Q as fe,
    Rn as pe,
    Vn as me,
    cn as he,
    kt as ge,
    ln as _e,
    pt as U,
    s as ve,
    wn as ye,
    zn as be
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Art as xe,
    Fit as Se,
    Fyn as Ce,
    Lit as we,
    Mrt as Te,
    Pit as Ee,
    Pyn as De,
    Rit as Oe,
    _rt as W,
    fst as ke,
    jrt as Ae,
    pst as je,
    yrt as Me,
    zit as Ne
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Bb as Pe,
    Fb as Fe,
    Lb as Ie,
    Pb as Le,
    Qb as Re,
    Xb as G,
    zb as ze
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    Kv as Be,
    Uv as Ve
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    n as He,
    t as K
} from "./af004db9-ncue41w0x271s8a6.js";
import {
    n as Ue,
    r as We,
    t as Ge
} from "./d6a45810-eyykvqsvgm795pkf.js";
import {
    l as q,
    n as Ke,
    o as qe,
    r as Je
} from "./501976a3-i3wddvw7bdujnjei.js";
import {
    c as Ye,
    f as J,
    n as Xe,
    p as Ze,
    t as Qe,
    u as $e
} from "./a8575090-n8bnjz8v1cxvkzob.js";

function et(e) {
    let t = new URL(e).searchParams.get(`state`);
    if (t == null) return !1;
    let n = `${Y}:${t}`;
    return window.sessionStorage.getItem(n) == null ? (window.sessionStorage.setItem(n, `true`), !0) : !1
}

function tt(e) {
    et(e) && (window.location.assign(e), window.setTimeout(() => {
        window.location.replace(nt)
    }, X))
}
var Y, X, nt, rt = e((() => {
    Y = `codex_oauth_relayed_state`, X = 1e3, nt = `/plugins`
}));
async function it(e) {
    if (e.auth_type !== `OAUTH` || !e.connector_id) return !1;
    try {
        let [t, n] = await Promise.all([f.safeGet(`/aip/connectors/{connector_id}`, {
            parameters: {
                path: {
                    connector_id: e.connector_id
                },
                query: {
                    include_actions: !1
                }
            }
        }), f.safeGet(`/aip/connectors/{connector_id}/actions`, {
            parameters: {
                path: {
                    connector_id: e.connector_id
                }
            },
            additionalHeaders: {
                [C]: `CONNECTOR_SETTING`
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
    let e = _(),
        t = be(),
        n = ge(),
        i = de(),
        o = De(),
        s = n?.nativeRedirectUrl,
        c = (0, Z.useRef)(!1),
        u = ue();
    return (0, Z.useEffect)(() => {
        if (c.current) return;
        c.current = !0;
        let n = a(window.location.href);
        if (n != null) {
            window.history.replaceState(null, ``, window.location.pathname), n.redirectUrl == null ? i(A(R.OAUTH_FAILED_GENERIC, `/#settings/${F.Connectors}`), {
                replace: !0
            }) : window.location.replace(n.redirectUrl);
            return
        }
        if (s) {
            tt(s);
            return
        }
        let d = h(window.location.href) ?? window.location.href;
        async function p() {
            let n = e => {
                    window.close(), window.setTimeout(() => {
                        i(e)
                    }, 150)
                },
                a = Oe(),
                s = a === `workspace_microsoft_auto_link` ? Ke() : null,
                c = s == null ? null : performance.now(),
                p = a === `redirect` ? we() : void 0,
                h = new URL(d).searchParams,
                g = h.get(`oauth_state_id`) ?? h.get(`state`),
                _ = B(g),
                y = S(g),
                b = _ ? {
                    [C]: _
                } : void 0,
                x = y == null && s == null && (a === `popup` || o),
                w = y ?? (a === `recommended_onboarding_redirect` ? `/` : s?.returnPath ?? `#settings/${F.Connectors}`),
                T = Ye(d),
                E = Ee(d),
                D = T == null ? void 0 : Ie(T.oauthStateId),
                O = ({
                    outcome: e,
                    reason: t,
                    connectorId: n
                }) => {
                    s == null || c == null || (q({
                        phase: `oauth_callback`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: performance.now() - c
                    }), q({
                        phase: `end_to_end`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: Date.now() - s.startedAt
                    }))
                };
            try {
                if (T) {
                    let e = h.get(`tenant`);
                    if (e != null && T.approvedTenantId != null && e.toLowerCase() !== T.approvedTenantId.toLowerCase()) throw Error(`ADMIN_CONSENT_TENANT_MISMATCH`);
                    Pe({
                        attemptId: D,
                        lifecycleStep: Fe.callbackReceived,
                        callbackSource: Le.callbackPage
                    });
                    let t = await Qe({
                            workspaceId: T.workspaceId ?? ``,
                            useDirectRouting: T.useDirectRouting ?? !1,
                            requestBody: {
                                full_redirect_url: te(d)
                            }
                        }),
                        [r, ...i] = T.remainingStages ?? [];
                    if (t.status === `COMPLETE` && r != null) {
                        if (e == null) throw Error(`ADMIN_CONSENT_TENANT_MISSING`);
                        let t = new URL(r.redirectUrl);
                        if (t.origin !== `https://login.microsoftonline.com` || t.pathname !== `/organizations/v2.0/adminconsent`) throw Error(`INVALID_ADMIN_CONSENT_REDIRECT`);
                        t.pathname = `/${e}/v2.0/adminconsent`, Ze({
                            oauthStateId: r.oauthStateId,
                            expiresAt: r.expiresAt,
                            useDirectRouting: T.useDirectRouting,
                            workspaceId: T.workspaceId,
                            finalOauthStateId: T.finalOauthStateId,
                            approvedTenantId: e,
                            remainingStages: i
                        }), window.location.replace(t.toString());
                        return
                    }
                    let a = T.finalOauthStateId ?? T.oauthStateId;
                    J({
                        oauthStateId: a,
                        result: {
                            ...t,
                            oauth_state_id: a
                        }
                    }), n(`/admin/apps`);
                    return
                }
                if (E) {
                    let e = await f.safePost(`/aip/connectors/links/oauth/verification/callback`, {
                        requestBody: {
                            full_redirect_url: d
                        },
                        additionalHeaders: b
                    });
                    if (x) {
                        let t = e => {
                            e.origin === window.location.origin && e.data.connectorId === E.connectorId && (I.removeEventListener(`message`, t, !1), window.location.href = e.data.redirectUrl)
                        };
                        I.addEventListener(`message`, t, !1), l({
                            success: !0,
                            connectorId: E.connectorId,
                            oauthStateId: E.oauthStateId,
                            verificationToken: e.verification_token
                        });
                        return
                    }
                    i(`#settings/${F.Connectors}`);
                    return
                }
                let a = await f.safePost(`/aip/connectors/links/oauth/callback`, {
                    requestBody: {
                        full_redirect_url: d
                    },
                    additionalHeaders: b
                });
                if (await u.invalidateQueries({
                        refetchType: `all`,
                        queryKey: [`fetchConnectorLinkData`]
                    }), !a?.post_auth_url) {
                    if (s != null) {
                        O({
                            outcome: `failure`,
                            reason: `missing_post_auth_url`,
                            connectorId: a?.link?.connector_id
                        }), i(s.returnPath, {
                            replace: !0
                        });
                        return
                    }
                    i(A(R.OAUTH_FAILED_GENERIC, G(w)));
                    return
                }
                let o = Ge({
                        enableMultiLinks: a.link.enable_multi_links,
                        url: new URL(a.post_auth_url, location.origin),
                        connectorId: a.link.connector_id,
                        linkId: a.link.id,
                        suggestedAccountName: a.suggested_account_name ?? void 0
                    }),
                    c = a?.link?.connector_id === m[ie.GITHUB_CONNECTOR],
                    p = se(o.hash),
                    _ = p != null,
                    y = p === F.Connectors;
                if (!_) {
                    let e = ee[a.link.connector_id];
                    e && o.searchParams.set(`add_source`, e)
                }
                let S;
                if (y) {
                    let e = new URLSearchParams;
                    e.set(`connector`, a.link.connector_id), c && e.set(`github_onboarding`, `configure-repos`), S = U({
                        ...o,
                        search: ``,
                        hash: r(F.Connectors).hash + `?${e.toString()}`
                    })
                } else c && o.searchParams.set(`github_onboarding`, `configure-repos`), S = U({
                    pathname: o.pathname,
                    search: o.search,
                    hash: o.hash
                });
                ae.removeItem(L.ConnectorUpgradeToSyncRequest);
                let C = a.link.connector_id === `connector_bd313622bce5485cb3d0b338715f7108` ? t.formatMessage($.chatGPTForSlackInstallSuccess) : t.formatMessage($.genericSuccess, {
                        connector: a.link.name
                    }),
                    {
                        microsoftTeamsUnavailable: k,
                        scopeCheckLink: M
                    } = ne({
                        link: a.link,
                        isMicrosoftConnector: je(a.link.connector_id) && a.link.connector_id !== m[ie.TEAMS_CONNECTOR]
                    }),
                    N = a.connected_connector_ids == null ? void 0 : new Set(a.connected_connector_ids).size,
                    P = s == null && (k && oe({
                        link: M
                    }) || await it(M)),
                    z = t.formatMessage($.partialSuccess, {
                        connector: a.link.name
                    }),
                    B = re({
                        intl: t,
                        connectorName: a.link.name,
                        microsoftTeamsUnavailable: k,
                        hasPotentialMissingScopes: P,
                        installedPluginCount: N
                    }) ?? (P ? z : C);
                if (x) {
                    l({
                        success: !0,
                        connectorId: a.link.connector_id,
                        oauthStateId: g ?? void 0,
                        linkId: a.link.id,
                        suggestedAccountName: a.suggested_account_name ?? void 0,
                        hasPotentialMissingScopes: P,
                        microsoftTeamsUnavailable: k,
                        installedPluginCount: N
                    }), n(A(P ? R.CUSTOM_ERROR : R.CUSTOM_MSG, S, B));
                    return
                }
                let V = `chatgpt_connectors_oauth_connect_success`,
                    H = j(V, `succeeded`, a.link.connector_id);
                if (v.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: V,
                        data: {
                            success: !0,
                            type: a.link.connector_id
                        },
                        eventId: H
                    }), W.logOAuthCompleted({
                        connector_id_metadata: W.createIdMetadataFromId(e, a.link.connector_id, `unknown_referrer`),
                        referrer: `unknown_referrer`,
                        authType: `OAUTH`,
                        scopes: null,
                        success: !0
                    }), s != null) {
                    O({
                        outcome: `success`,
                        connectorId: a.link.connector_id
                    }), i(s.returnPath, {
                        replace: !0
                    });
                    return
                }
                i(A(P ? R.CUSTOM_ERROR : R.CUSTOM_MSG, S, B))
            } catch (e) {
                if (T) {
                    J({
                        oauthStateId: T.finalOauthStateId ?? T.oauthStateId,
                        error: e instanceof Error ? e.message : `Microsoft admin consent failed`
                    }), n(`/admin/apps`);
                    return
                }
                let t, r;
                try {
                    if (g) {
                        let e = await f.safeGet(`/aip/connectors/links/oauth/state/{oauth_state_id}`, {
                            parameters: {
                                path: {
                                    oauth_state_id: g
                                }
                            },
                            additionalHeaders: b
                        });
                        (e?.status === `PENDING` || e?.status === `COMPLETE` || e?.status === `ERROR`) && (r = e.status), e?.connector_id && (t = e.connector_id)
                    }
                } catch {}
                r === `ERROR` && ae.removeItem(L.ConnectorUpgradeToSyncRequest);
                let a = e instanceof M ? e.detail : void 0,
                    o = Ue(typeof a?.error_code == `string` ? a.error_code : void 0, a?.enable_multi_links === !0),
                    c = o === R.CUSTOM_ERROR && typeof a?.message == `string` ? a.message : e instanceof Error ? e.message : void 0,
                    u = o === R.OAUTH_FAILED_USER_CANCEL || o === R.CUSTOM_ERROR ? c : void 0;
                if (p && t && Ae({
                        connectorId: t,
                        installAttemptId: p
                    }) && (Ve(p), xe(p)), x) {
                    l({
                        success: !1,
                        connectorId: E?.connectorId ?? t ?? ``,
                        oauthStateId: E?.oauthStateId ?? g ?? void 0,
                        errorType: o,
                        error: c
                    }), n(A(o, w, u));
                    return
                }
                let d = `chatgpt_connectors_oauth_connect_error`,
                    m = j(d, o === R.OAUTH_FAILED_USER_CANCEL ? `cancelled` : `failed`, t ?? `unknown`, o);
                if (v.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: d,
                        data: {
                            errorType: o,
                            success: !1,
                            type: t ?? `unknown`
                        },
                        eventId: m
                    }), s != null) {
                    O({
                        outcome: `failure`,
                        reason: `oauth_callback_failed`,
                        connectorId: t
                    }), i(s.returnPath, {
                        replace: !0
                    });
                    return
                }
                i(A(o, G(w), u))
            }
        }
        p().finally(() => {
            let e = new URL(d).searchParams;
            y(e.get(`oauth_state_id`) ?? e.get(`state`))
        })
    }, [e, o, t, s, i, u]), (0, Q.jsx)(`div`, {
        className: `flex h-screen w-screen items-center justify-center`,
        children: (0, Q.jsx)(K, {
            size: 36
        })
    })
}
var ot, Z, Q, $, st, ct, lt = e((() => {
    fe(), ot = ye(), N(), P(), p(), ke(), qe(), O(), Je(), Ne(), E(), z(), Se(), He(), ze(), $e(), Xe(), c(), Ce(), b(), o(), Te(), Be(), Re(), i(), V(), w(), u(), Me(), n(), d(), rt(), T(), g(), k(), s(), ve(), Z = t(me()), pe(), We(), Q = H(), _e(), $ = le({
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
    }), st = x(async () => (await he(async () => {
        let {
            ConnectorAuthCallbackBoundary: e
        } = await import(`./3660315a-jh0u75ipizhrcu67.js`).then(e => (e.n(), e.r));
        return {
            ConnectorAuthCallbackBoundary: e
        }
    }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]))).ConnectorAuthCallbackBoundary, {
        loading: () => (0, Q.jsx)(K, {
            size: 36
        })
    }), ct = ce(function() {
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
//# sourceMappingURL=e590b368-bgn8jdhw5sokj37n.js.map