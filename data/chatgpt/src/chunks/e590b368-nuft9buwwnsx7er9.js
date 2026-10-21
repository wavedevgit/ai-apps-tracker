const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/3660315a-o8y0v3e3jiy2if7w.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-t80q9ew944ej0mgk.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/1dc5ae5b-bhdlcseqip3u28vu.js", "assets/conversation-small-ocicxxw6jegn4vux.js", "assets/30901919-r9pahacmzqudnt4f.js", "assets/c470f5ab-py8gip6x11wq9s88.js", "assets/0e5afe53-bfccq9og5d2mon04.js", "assets/conversation-small-ht8gwtl7.css", "assets/06dfbf77-jimnba3lmc9yninp.js", "assets/b2cbd5c7-nda6yazkoyc4aek7.js", "assets/b5b42835-ez9bmau4tu5ctwbq.js", "assets/b15d5b53-pb18ba7a2loy5tea.js", "assets/c2675c8c-p3x4d0bnf7e77o1n.js", "assets/82782bc9-dyzlhaxotei12n1t.js", "assets/8b34dbc2-egl8cz04n8nmlktg.js", "assets/global-modals-dxg9ukpk.css", "assets/94e0eb8c-myu6avee5xearotn.js", "assets/47ed0b35-o2yg1wt1vkp8rewz.js", "assets/760cdbab-d5r2qv9jav7diz3z.js", "assets/d5b03218-n8sfi7pdh9v1748n.js", "assets/7517017f-m0e7hb8h6fyirvew.js"]))) => i.map(i => d[i]);
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
    Jnt as l,
    Jx as u,
    Kat as d,
    Knt as f,
    Kv as p,
    Pnt as m,
    Q7 as h,
    Q_ as g,
    Qat as _,
    Qst as v,
    Qv as y,
    X_ as ee,
    Xv as te,
    Xx as ne,
    Yx as re,
    Zv as b,
    Zx as x,
    a2 as S,
    aS as ie,
    cB as C,
    dS as w,
    eS as T,
    fat as E,
    gst as D,
    hst as O,
    iS as k,
    lB as A,
    mS as j,
    o2 as M,
    pS as N,
    py as P,
    qnt as ae,
    qx as F,
    rS as oe,
    sB as I,
    sS as L,
    uS as R,
    uat as z,
    vct as B,
    wy as V,
    xy as se
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    Iit as Se,
    Lit as Ce,
    Nit as we,
    Pit as Te,
    Rit as Ee,
    dst as De,
    dyn as Oe,
    fst as ke,
    fyn as Ae,
    grt as W,
    jrt as je,
    krt as Me,
    vrt as Ne
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Ab as Pe,
    Db as Fe,
    Gb as Ie,
    Mb as Le,
    Nb as Re,
    Ob as ze,
    Ub as G
} from "./c2675c8c-p3x4d0bnf7e77o1n.js";
import {
    Bv as Be,
    Uv as Ve
} from "./8b34dbc2-egl8cz04n8nmlktg.js";
import {
    n as He,
    t as K
} from "./af004db9-fzg2csyped3pyyuu.js";
import {
    n as Ue,
    r as We,
    t as Ge
} from "./d6a45810-i4i8xeae527jkqha.js";
import {
    l as q,
    n as Ke,
    o as qe,
    r as Je
} from "./501976a3-ne7z2g91v8z24nhm.js";
import {
    c as Ye,
    f as J,
    n as Xe,
    p as Ze,
    t as Qe,
    u as $e
} from "./a8575090-dhx5hqoft2t3bxnd.js";

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
                [z]: `CONNECTOR_SETTING`
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
    let e = O(),
        t = be(),
        n = ge(),
        a = de(),
        o = Oe(),
        s = n?.nativeRedirectUrl,
        l = (0, Z.useRef)(!1),
        p = ue();
    return (0, Z.useEffect)(() => {
        if (l.current) return;
        l.current = !0;
        let n = i(window.location.href);
        if (n != null) {
            window.history.replaceState(null, ``, window.location.pathname), n.redirectUrl == null ? a(A(I.OAUTH_FAILED_GENERIC, `/#settings/${P.Connectors}`), {
                replace: !0
            }) : window.location.replace(n.redirectUrl);
            return
        }
        if (s) {
            tt(s);
            return
        }
        let h = y(window.location.href) ?? window.location.href;
        async function _() {
            let n = e => {
                    window.close(), window.setTimeout(() => {
                        a(e)
                    }, 150)
                },
                i = Ce(),
                s = i === `workspace_microsoft_auto_link` ? Ke() : null,
                l = s == null ? null : performance.now(),
                _ = i === `redirect` ? Se() : void 0,
                y = new URL(h).searchParams,
                b = y.get(`oauth_state_id`) ?? y.get(`state`),
                x = R(b),
                S = ie(b),
                C = x ? {
                    [z]: x
                } : void 0,
                w = S == null && s == null && (i === `popup` || o),
                T = S ?? (i === `recommended_onboarding_redirect` ? `/` : s?.returnPath ?? `#settings/${P.Connectors}`),
                E = Ye(h),
                D = we(h),
                O = E == null ? void 0 : Pe(E.oauthStateId),
                k = ({
                    outcome: e,
                    reason: t,
                    connectorId: n
                }) => {
                    s == null || l == null || (q({
                        phase: `oauth_callback`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: performance.now() - l
                    }), q({
                        phase: `end_to_end`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: Date.now() - s.startedAt
                    }))
                };
            try {
                if (E) {
                    let e = y.get(`tenant`);
                    if (e != null && E.approvedTenantId != null && e.toLowerCase() !== E.approvedTenantId.toLowerCase()) throw Error(`ADMIN_CONSENT_TENANT_MISMATCH`);
                    Re({
                        attemptId: O,
                        lifecycleStep: ze.callbackReceived,
                        callbackSource: Fe.callbackPage
                    });
                    let t = await Qe({
                            workspaceId: E.workspaceId ?? ``,
                            useDirectRouting: E.useDirectRouting ?? !1,
                            requestBody: {
                                full_redirect_url: te(h)
                            }
                        }),
                        [r, ...i] = E.remainingStages ?? [];
                    if (t.status === `COMPLETE` && r != null) {
                        if (e == null) throw Error(`ADMIN_CONSENT_TENANT_MISSING`);
                        let t = new URL(r.redirectUrl);
                        if (t.origin !== `https://login.microsoftonline.com` || t.pathname !== `/organizations/v2.0/adminconsent`) throw Error(`INVALID_ADMIN_CONSENT_REDIRECT`);
                        t.pathname = `/${e}/v2.0/adminconsent`, Ze({
                            oauthStateId: r.oauthStateId,
                            expiresAt: r.expiresAt,
                            useDirectRouting: E.useDirectRouting,
                            workspaceId: E.workspaceId,
                            finalOauthStateId: E.finalOauthStateId,
                            approvedTenantId: e,
                            remainingStages: i
                        }), window.location.replace(t.toString());
                        return
                    }
                    let a = E.finalOauthStateId ?? E.oauthStateId;
                    J({
                        oauthStateId: a,
                        result: {
                            ...t,
                            oauth_state_id: a
                        }
                    }), n(`/admin/apps`);
                    return
                }
                if (D) {
                    let e = await c.safePost(`/aip/connectors/links/oauth/verification/callback`, {
                        requestBody: {
                            full_redirect_url: h
                        },
                        additionalHeaders: C
                    });
                    if (w) {
                        let t = e => {
                            e.origin === window.location.origin && e.data.connectorId === D.connectorId && (F.removeEventListener(`message`, t, !1), window.location.href = e.data.redirectUrl)
                        };
                        F.addEventListener(`message`, t, !1), u({
                            success: !0,
                            connectorId: D.connectorId,
                            oauthStateId: D.oauthStateId,
                            verificationToken: e.verification_token
                        });
                        return
                    }
                    a(`#settings/${P.Connectors}`);
                    return
                }
                let i = await c.safePost(`/aip/connectors/links/oauth/callback`, {
                    requestBody: {
                        full_redirect_url: h
                    },
                    additionalHeaders: C
                });
                if (await p.invalidateQueries({
                        refetchType: `all`,
                        queryKey: [`fetchConnectorLinkData`]
                    }), !i?.post_auth_url) {
                    if (s != null) {
                        k({
                            outcome: `failure`,
                            reason: `missing_post_auth_url`,
                            connectorId: i?.link?.connector_id
                        }), a(s.returnPath, {
                            replace: !0
                        });
                        return
                    }
                    a(A(I.OAUTH_FAILED_GENERIC, G(T)));
                    return
                }
                let o = Ge({
                        enableMultiLinks: i.link.enable_multi_links,
                        url: new URL(i.post_auth_url, location.origin),
                        connectorId: i.link.connector_id,
                        linkId: i.link.id,
                        suggestedAccountName: i.suggested_account_name ?? void 0
                    }),
                    l = i?.link?.connector_id === g[v.GITHUB_CONNECTOR],
                    d = se(o.hash),
                    _ = d != null,
                    x = d === P.Connectors;
                if (!_) {
                    let e = ee[i.link.connector_id];
                    e && o.searchParams.set(`add_source`, e)
                }
                let S;
                if (x) {
                    let e = new URLSearchParams;
                    e.set(`connector`, i.link.connector_id), l && e.set(`github_onboarding`, `configure-repos`), S = U({
                        ...o,
                        search: ``,
                        hash: r(P.Connectors).hash + `?${e.toString()}`
                    })
                } else l && o.searchParams.set(`github_onboarding`, `configure-repos`), S = U({
                    pathname: o.pathname,
                    search: o.search,
                    hash: o.hash
                });
                f.removeItem(ae.ConnectorUpgradeToSyncRequest);
                let ie = i.link.connector_id === `connector_bd313622bce5485cb3d0b338715f7108` ? t.formatMessage($.chatGPTForSlackInstallSuccess) : t.formatMessage($.genericSuccess, {
                        connector: i.link.name
                    }),
                    {
                        microsoftTeamsUnavailable: M,
                        scopeCheckLink: N
                    } = ne({
                        link: i.link,
                        isMicrosoftConnector: ke(i.link.connector_id) && i.link.connector_id !== g[v.TEAMS_CONNECTOR]
                    }),
                    L = i.connected_connector_ids == null ? void 0 : new Set(i.connected_connector_ids).size,
                    R = s == null && (M && oe({
                        link: N
                    }) || await it(N)),
                    z = t.formatMessage($.partialSuccess, {
                        connector: i.link.name
                    }),
                    B = re({
                        intl: t,
                        connectorName: i.link.name,
                        microsoftTeamsUnavailable: M,
                        hasPotentialMissingScopes: R,
                        installedPluginCount: L
                    }) ?? (R ? z : ie);
                if (w) {
                    u({
                        success: !0,
                        connectorId: i.link.connector_id,
                        oauthStateId: b ?? void 0,
                        linkId: i.link.id,
                        suggestedAccountName: i.suggested_account_name ?? void 0,
                        hasPotentialMissingScopes: R,
                        microsoftTeamsUnavailable: M,
                        installedPluginCount: L
                    }), n(A(R ? I.CUSTOM_ERROR : I.CUSTOM_MSG, S, B));
                    return
                }
                let V = `chatgpt_connectors_oauth_connect_success`,
                    H = j(V, `succeeded`, i.link.connector_id);
                if (m.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: V,
                        data: {
                            success: !0,
                            type: i.link.connector_id
                        },
                        eventId: H
                    }), W.logOAuthCompleted({
                        connector_id_metadata: W.createIdMetadataFromId(e, i.link.connector_id, `unknown_referrer`),
                        referrer: `unknown_referrer`,
                        authType: `OAUTH`,
                        scopes: null,
                        success: !0
                    }), s != null) {
                    k({
                        outcome: `success`,
                        connectorId: i.link.connector_id
                    }), a(s.returnPath, {
                        replace: !0
                    });
                    return
                }
                a(A(R ? I.CUSTOM_ERROR : I.CUSTOM_MSG, S, B))
            } catch (e) {
                if (E) {
                    J({
                        oauthStateId: E.finalOauthStateId ?? E.oauthStateId,
                        error: e instanceof Error ? e.message : `Microsoft admin consent failed`
                    }), n(`/admin/apps`);
                    return
                }
                let t, r;
                try {
                    if (b) {
                        let e = await c.safeGet(`/aip/connectors/links/oauth/state/{oauth_state_id}`, {
                            parameters: {
                                path: {
                                    oauth_state_id: b
                                }
                            },
                            additionalHeaders: C
                        });
                        (e?.status === `PENDING` || e?.status === `COMPLETE` || e?.status === `ERROR`) && (r = e.status), e?.connector_id && (t = e.connector_id)
                    }
                } catch {}
                r === `ERROR` && f.removeItem(ae.ConnectorUpgradeToSyncRequest);
                let i = e instanceof d ? e.detail : void 0,
                    o = Ue(typeof i?.error_code == `string` ? i.error_code : void 0, i?.enable_multi_links === !0),
                    l = o === I.CUSTOM_ERROR && typeof i?.message == `string` ? i.message : e instanceof Error ? e.message : void 0,
                    p = o === I.OAUTH_FAILED_USER_CANCEL || o === I.CUSTOM_ERROR ? l : void 0;
                if (_ && t && xe({
                        connectorId: t,
                        installAttemptId: _
                    }) && (Be(_), Me(_)), w) {
                    u({
                        success: !1,
                        connectorId: D?.connectorId ?? t ?? ``,
                        oauthStateId: D?.oauthStateId ?? b ?? void 0,
                        errorType: o,
                        error: l
                    }), n(A(o, T, p));
                    return
                }
                let h = `chatgpt_connectors_oauth_connect_error`,
                    g = j(h, o === I.OAUTH_FAILED_USER_CANCEL ? `cancelled` : `failed`, t ?? `unknown`, o);
                if (m.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: h,
                        data: {
                            errorType: o,
                            success: !1,
                            type: t ?? `unknown`
                        },
                        eventId: g
                    }), s != null) {
                    k({
                        outcome: `failure`,
                        reason: `oauth_callback_failed`,
                        connectorId: t
                    }), a(s.returnPath, {
                        replace: !0
                    });
                    return
                }
                a(A(o, G(T), p))
            }
        }
        _().finally(() => {
            let e = new URL(h).searchParams;
            b(e.get(`oauth_state_id`) ?? e.get(`state`))
        })
    }, [e, o, t, s, a, p]), (0, Q.jsx)(`div`, {
        className: `flex h-screen w-screen items-center justify-center`,
        children: (0, Q.jsx)(K, {
            size: 36
        })
    })
}
var ot, Z, Q, $, st, ct, lt = e((() => {
    fe(), ot = ye(), M(), N(), B(), De(), qe(), k(), Je(), Ee(), w(), L(), Te(), He(), Le(), $e(), Xe(), s(), Ae(), x(), a(), je(), Ve(), Ie(), D(), V(), C(), o(), Ne(), n(), p(), rt(), _(), E(), l(), h(), ve(), Z = t(me()), pe(), We(), Q = H(), _e(), $ = le({
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
    }), st = S(async () => (await he(async () => {
        let {
            ConnectorAuthCallbackBoundary: e
        } = await import(`./3660315a-o8y0v3e3jiy2if7w.js`).then(e => (e.n(), e.r));
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
            url: typeof window > `u` ? `` : y(window.location.href) ?? window.location.href,
            children: (0, Q.jsx)(at, {})
        }), e[0] = t) : t = e[0], t
    })
}));
export {
    lt as n, ct as t
};
//# sourceMappingURL=e590b368-nuft9buwwnsx7er9.js.map