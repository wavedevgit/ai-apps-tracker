const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/3660315a-nw1xalnigu2ubohi.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/1dc5ae5b-j0yhqp9n3qqw7x37.js", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/06dfbf77-ccpm2eo5a4df2zww.js", "assets/b2cbd5c7-m8w403w5kiq0u2w6.js", "assets/b5b42835-fmsn5ldafjkha1xl.js", "assets/b15d5b53-dc3ccc7s4e22frpt.js", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css", "assets/94e0eb8c-bt3osepxf0748soh.js", "assets/47ed0b35-ju28grcwo7z0qhyt.js", "assets/760cdbab-j3xiau99es34zdrv.js", "assets/d5b03218-knpkk3kr8qzc2jcv.js", "assets/7517017f-m0e7hb8h6fyirvew.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as n,
    A_ as r,
    Av as i,
    Ax as a,
    Btt as ee,
    Bx as o,
    C0 as s,
    Dx as c,
    Ev as l,
    Fx as u,
    Fz as d,
    Gx as f,
    Htt as p,
    Hx as m,
    Iz as h,
    Jx as g,
    Kx as _,
    M_ as v,
    Mv as y,
    Nv as b,
    Ox as x,
    Pz as S,
    Qit as C,
    Qtt as te,
    Rx as ne,
    S0 as w,
    Sot as T,
    Tv as E,
    Tx as D,
    Yx as O,
    a7 as k,
    ent as A,
    git as j,
    gv as M,
    iat as N,
    ist as P,
    iy as F,
    jv as re,
    jx as I,
    kx as ie,
    l7 as L,
    qv as R,
    ry as ae,
    ty as oe,
    vit as z,
    wst as B,
    xot as V,
    zx as H
} from "./4813494d-cb22y2w19zwyshmt.js";
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
    Art as be,
    Fvn as xe,
    Iit as Se,
    Lit as Ce,
    Nit as we,
    Pit as Te,
    Pvn as Ee,
    Rit as De,
    dst as Oe,
    fst as ke,
    grt as G,
    jrt as Ae,
    krt as je,
    vrt as Me
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Ax as Ne,
    Ox as K,
    gx as Pe,
    mx as Fe,
    px as Ie,
    vx as Le,
    yx as Re
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    Hv as ze,
    zv as Be
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as Ve,
    t as q
} from "./af004db9-6w68dbz1fjui3k0e.js";
import {
    n as He,
    r as Ue,
    t as We
} from "./d6a45810-j9a4snk8fe6cmgrg.js";
import {
    l as J,
    n as Ge,
    o as Ke,
    r as qe
} from "./501976a3-gjmfneiy4rjf9szl.js";
import {
    c as Je,
    f as Y,
    n as Ye,
    p as Xe,
    t as Ze,
    u as Qe
} from "./a8575090-mf3fsl2mr35fe15f.js";

function $e(e) {
    let t = new URL(e).searchParams.get(`state`);
    if (t == null) return !1;
    let n = `${tt}:${t}`;
    return window.sessionStorage.getItem(n) == null ? (window.sessionStorage.setItem(n, `true`), !0) : !1
}

function et(e) {
    $e(e) && (window.location.assign(e), window.setTimeout(() => {
        window.location.replace(rt)
    }, nt))
}
var tt, nt, rt, it = e((() => {
    tt = `codex_oauth_relayed_state`, nt = 1e3, rt = `/plugins`
}));
async function at(e) {
    if (e.auth_type !== `OAUTH` || !e.connector_id) return !1;
    try {
        let [t, n] = await Promise.all([k.safeGet(`/aip/connectors/{connector_id}`, {
            parameters: {
                path: {
                    connector_id: e.connector_id
                },
                query: {
                    include_actions: !1
                }
            }
        }), k.safeGet(`/aip/connectors/{connector_id}/actions`, {
            parameters: {
                path: {
                    connector_id: e.connector_id
                }
            },
            additionalHeaders: {
                [j]: `CONNECTOR_SETTING`
            }
        })]);
        return u({
            actions: n.actions ?? [],
            connector: t,
            link: e,
            includeNetNewOAuthScopes: !1
        })
    } catch {
        return !1
    }
}

function ot() {
    "use no forget";
    let e = V(),
        t = ye(),
        s = se(),
        l = de(),
        u = Ee(),
        d = s?.nativeRedirectUrl,
        p = (0, X.useRef)(!1),
        m = ue();
    return (0, X.useEffect)(() => {
        if (p.current) return;
        p.current = !0;
        let s = E(window.location.href);
        if (s != null) {
            window.history.replaceState(null, ``, window.location.pathname), s.redirectUrl == null ? l(h(S.OAUTH_FAILED_GENERIC, `/#settings/${R.Connectors}`), {
                replace: !0
            }) : window.location.replace(s.redirectUrl);
            return
        }
        if (d) {
            et(d);
            return
        }
        let g = y(window.location.href) ?? window.location.href;
        async function _() {
            let s = e => {
                    window.close(), window.setTimeout(() => {
                        l(e)
                    }, 150)
                },
                d = Ce(),
                p = d === `workspace_microsoft_auto_link` ? Ge() : null,
                _ = p == null ? null : performance.now(),
                y = d === `redirect` ? Se() : void 0,
                b = new URL(g).searchParams,
                w = b.get(`oauth_state_id`) ?? b.get(`state`),
                T = f(w),
                E = o(w),
                D = T ? {
                    [j]: T
                } : void 0,
                A = E == null && p == null && (d === `popup` || u),
                M = E ?? (d === `recommended_onboarding_redirect` ? `/` : p?.returnPath ?? `#settings/${R.Connectors}`),
                N = Je(g),
                F = we(g),
                re = N == null ? void 0 : Pe(N.oauthStateId),
                I = ({
                    outcome: e,
                    reason: t,
                    connectorId: n
                }) => {
                    p == null || _ == null || (J({
                        phase: `oauth_callback`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: performance.now() - _
                    }), J({
                        phase: `end_to_end`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: Date.now() - p.startedAt
                    }))
                };
            try {
                if (N) {
                    let e = b.get(`tenant`);
                    if (e != null && N.approvedTenantId != null && e.toLowerCase() !== N.approvedTenantId.toLowerCase()) throw Error(`ADMIN_CONSENT_TENANT_MISMATCH`);
                    Re({
                        attemptId: re,
                        lifecycleStep: Fe.callbackReceived,
                        callbackSource: Ie.callbackPage
                    });
                    let t = await Ze({
                            workspaceId: N.workspaceId ?? ``,
                            useDirectRouting: N.useDirectRouting ?? !1,
                            requestBody: {
                                full_redirect_url: i(g)
                            }
                        }),
                        [n, ...r] = N.remainingStages ?? [];
                    if (t.status === `COMPLETE` && n != null) {
                        if (e == null) throw Error(`ADMIN_CONSENT_TENANT_MISSING`);
                        let t = new URL(n.redirectUrl);
                        if (t.origin !== `https://login.microsoftonline.com` || t.pathname !== `/organizations/v2.0/adminconsent`) throw Error(`INVALID_ADMIN_CONSENT_REDIRECT`);
                        t.pathname = `/${e}/v2.0/adminconsent`, Xe({
                            oauthStateId: n.oauthStateId,
                            expiresAt: n.expiresAt,
                            useDirectRouting: N.useDirectRouting,
                            workspaceId: N.workspaceId,
                            finalOauthStateId: N.finalOauthStateId,
                            approvedTenantId: e,
                            remainingStages: r
                        }), window.location.replace(t.toString());
                        return
                    }
                    let a = N.finalOauthStateId ?? N.oauthStateId;
                    Y({
                        oauthStateId: a,
                        result: {
                            ...t,
                            oauth_state_id: a
                        }
                    }), s(`/admin/apps`);
                    return
                }
                if (F) {
                    let e = await k.safePost(`/aip/connectors/links/oauth/verification/callback`, {
                        requestBody: {
                            full_redirect_url: g
                        },
                        additionalHeaders: D
                    });
                    if (A) {
                        let t = e => {
                            e.origin === window.location.origin && e.data.connectorId === F.connectorId && (c.removeEventListener(`message`, t, !1), window.location.href = e.data.redirectUrl)
                        };
                        c.addEventListener(`message`, t, !1), x({
                            success: !0,
                            connectorId: F.connectorId,
                            oauthStateId: F.oauthStateId,
                            verificationToken: e.verification_token
                        });
                        return
                    }
                    l(`#settings/${R.Connectors}`);
                    return
                }
                let o = await k.safePost(`/aip/connectors/links/oauth/callback`, {
                    requestBody: {
                        full_redirect_url: g
                    },
                    additionalHeaders: D
                });
                if (await m.invalidateQueries({
                        refetchType: `all`,
                        queryKey: [`fetchConnectorLinkData`]
                    }), !o?.post_auth_url) {
                    if (p != null) {
                        I({
                            outcome: `failure`,
                            reason: `missing_post_auth_url`,
                            connectorId: o?.link?.connector_id
                        }), l(p.returnPath, {
                            replace: !0
                        });
                        return
                    }
                    l(h(S.OAUTH_FAILED_GENERIC, K(M)));
                    return
                }
                let u = We({
                        enableMultiLinks: o.link.enable_multi_links,
                        url: new URL(o.post_auth_url, location.origin),
                        connectorId: o.link.connector_id,
                        linkId: o.link.id,
                        suggestedAccountName: o.suggested_account_name ?? void 0
                    }),
                    d = o?.link?.connector_id === v[P.GITHUB_CONNECTOR],
                    f = oe(u.hash),
                    _ = f != null,
                    y = f === R.Connectors;
                if (!_) {
                    let e = r[o.link.connector_id];
                    e && u.searchParams.set(`add_source`, e)
                }
                let C;
                if (y) {
                    let e = new URLSearchParams;
                    e.set(`connector`, o.link.connector_id), d && e.set(`github_onboarding`, `configure-repos`), C = W({
                        ...u,
                        search: ``,
                        hash: ae(R.Connectors).hash + `?${e.toString()}`
                    })
                } else d && u.searchParams.set(`github_onboarding`, `configure-repos`), C = W({
                    pathname: u.pathname,
                    search: u.search,
                    hash: u.hash
                });
                te.removeItem(n.ConnectorUpgradeToSyncRequest);
                let T = o.link.connector_id === `connector_bd313622bce5485cb3d0b338715f7108` ? t.formatMessage(Q.chatGPTForSlackInstallSuccess) : t.formatMessage(Q.genericSuccess, {
                        connector: o.link.name
                    }),
                    {
                        microsoftTeamsUnavailable: E,
                        scopeCheckLink: j
                    } = a({
                        link: o.link,
                        isMicrosoftConnector: ke(o.link.connector_id) && o.link.connector_id !== v[P.TEAMS_CONNECTOR]
                    }),
                    L = o.connected_connector_ids == null ? void 0 : new Set(o.connected_connector_ids).size,
                    z = p == null && (E && ne({
                        link: j
                    }) || await at(j)),
                    B = t.formatMessage(Q.partialSuccess, {
                        connector: o.link.name
                    }),
                    V = ie({
                        intl: t,
                        connectorName: o.link.name,
                        microsoftTeamsUnavailable: E,
                        hasPotentialMissingScopes: z,
                        installedPluginCount: L
                    }) ?? (z ? B : T);
                if (A) {
                    x({
                        success: !0,
                        connectorId: o.link.connector_id,
                        oauthStateId: w ?? void 0,
                        linkId: o.link.id,
                        suggestedAccountName: o.suggested_account_name ?? void 0,
                        hasPotentialMissingScopes: z,
                        microsoftTeamsUnavailable: E,
                        installedPluginCount: L
                    }), s(h(z ? S.CUSTOM_ERROR : S.CUSTOM_MSG, C, V));
                    return
                }
                let H = `chatgpt_connectors_oauth_connect_success`,
                    U = O(H, `succeeded`, o.link.connector_id);
                if (ee.logValueEventWithStatsig({
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
                    }), p != null) {
                    I({
                        outcome: `success`,
                        connectorId: o.link.connector_id
                    }), l(p.returnPath, {
                        replace: !0
                    });
                    return
                }
                l(h(z ? S.CUSTOM_ERROR : S.CUSTOM_MSG, C, V))
            } catch (e) {
                if (N) {
                    Y({
                        oauthStateId: N.finalOauthStateId ?? N.oauthStateId,
                        error: e instanceof Error ? e.message : `Microsoft admin consent failed`
                    }), s(`/admin/apps`);
                    return
                }
                let t, r;
                try {
                    if (w) {
                        let e = await k.safeGet(`/aip/connectors/links/oauth/state/{oauth_state_id}`, {
                            parameters: {
                                path: {
                                    oauth_state_id: w
                                }
                            },
                            additionalHeaders: D
                        });
                        (e?.status === `PENDING` || e?.status === `COMPLETE` || e?.status === `ERROR`) && (r = e.status), e?.connector_id && (t = e.connector_id)
                    }
                } catch {}
                r === `ERROR` && te.removeItem(n.ConnectorUpgradeToSyncRequest);
                let i = e instanceof C ? e.detail : void 0,
                    a = He(typeof i?.error_code == `string` ? i.error_code : void 0, i?.enable_multi_links === !0),
                    o = a === S.CUSTOM_ERROR && typeof i?.message == `string` ? i.message : e instanceof Error ? e.message : void 0,
                    c = a === S.OAUTH_FAILED_USER_CANCEL || a === S.CUSTOM_ERROR ? o : void 0;
                if (y && t && be({
                        connectorId: t,
                        installAttemptId: y
                    }) && (Be(y), je(y)), A) {
                    x({
                        success: !1,
                        connectorId: F?.connectorId ?? t ?? ``,
                        oauthStateId: F?.oauthStateId ?? w ?? void 0,
                        errorType: a,
                        error: o
                    }), s(h(a, M, c));
                    return
                }
                let u = `chatgpt_connectors_oauth_connect_error`,
                    d = O(u, a === S.OAUTH_FAILED_USER_CANCEL ? `cancelled` : `failed`, t ?? `unknown`, a);
                if (ee.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: u,
                        data: {
                            errorType: a,
                            success: !1,
                            type: t ?? `unknown`
                        },
                        eventId: d
                    }), p != null) {
                    I({
                        outcome: `failure`,
                        reason: `oauth_callback_failed`,
                        connectorId: t
                    }), l(p.returnPath, {
                        replace: !0
                    });
                    return
                }
                l(h(a, K(M), c))
            }
        }
        _().finally(() => {
            let e = new URL(g).searchParams;
            re(e.get(`oauth_state_id`) ?? e.get(`state`))
        })
    }, [e, u, t, d, l, m]), (0, Z.jsx)(`div`, {
        className: `flex h-screen w-screen items-center justify-center`,
        children: (0, Z.jsx)(q, {
            size: 36
        })
    })
}
var st, X, Z, Q, ct, $, lt = e((() => {
    U(), st = ve(), s(), g(), B(), Oe(), Ke(), H(), qe(), De(), _(), m(), Te(), Ve(), Le(), Qe(), Ye(), M(), xe(), I(), D(), Ae(), ze(), Ne(), T(), F(), d(), p(), Me(), b(), l(), it(), N(), z(), A(), L(), _e(), X = t(me()), fe(), Ue(), Z = ce(), ge(), Q = le({
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
    }), ct = w(async () => (await he(async () => {
        let {
            ConnectorAuthCallbackBoundary: e
        } = await import(`./3660315a-nw1xalnigu2ubohi.js`).then(e => (e.n(), e.r));
        return {
            ConnectorAuthCallbackBoundary: e
        }
    }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]))).ConnectorAuthCallbackBoundary, {
        loading: () => (0, Z.jsx)(q, {
            size: 36
        })
    }), $ = pe(function() {
        "use forget";
        let e = (0, st.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Z.jsx)(ct, {
            url: typeof window > `u` ? `` : y(window.location.href) ?? window.location.href,
            children: (0, Z.jsx)(ot, {})
        }), e[0] = t) : t = e[0], t
    })
}));
export {
    lt as n, $ as t
};
//# sourceMappingURL=e590b368-b45kzq7eg0959rhe.js.map