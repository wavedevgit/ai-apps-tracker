const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/3660315a-fp5ivsljxdkz96bs.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/1dc5ae5b-dnthzn1aqsxuya3m.js", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css", "assets/06dfbf77-llkkytqrdw75van2.js", "assets/b2cbd5c7-lhap1zsj5rctb6w7.js", "assets/b5b42835-dbjlxj9je1ukaipu.js", "assets/b15d5b53-w8mc90fmmyasohpi.js", "assets/c2675c8c-9bs3zsr3vq259es7.js", "assets/82782bc9-mb60yg1xlggwvqri.js", "assets/8b34dbc2-k1zgxrtsww83602u.js", "assets/global-modals-lv5n3ujm.css", "assets/94e0eb8c-nchhidvr05of5v3v.js", "assets/47ed0b35-ab3xvs4n3zx2n12i.js", "assets/760cdbab-nu0ry154ftv2n5mc.js", "assets/d5b03218-c45heztijcfd6vsn.js", "assets/7517017f-m0e7hb8h6fyirvew.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ot as n,
    $x as r,
    $z as i,
    Ant as a,
    Cy as o,
    Fat as s,
    Fst as c,
    Fv as l,
    Gv as u,
    Jx as d,
    Kx as f,
    P7 as p,
    Qot as m,
    Qv as h,
    R7 as g,
    Sy as ee,
    Wv as _,
    Wx as v,
    X0 as y,
    Xv as b,
    Xx as x,
    Y0 as S,
    Y_ as te,
    Yit as C,
    Yv as ne,
    Yx as re,
    Z_ as w,
    Zv as T,
    _nt as ie,
    by as ae,
    eB as E,
    fS as D,
    fy as O,
    iS as k,
    jnt as A,
    kat as j,
    knt as oe,
    lS as M,
    nS as se,
    oS as N,
    pS as P,
    qit as F,
    qx as I,
    rS as L,
    tB as R,
    tct as z,
    uS as B,
    ynt as V
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    Bit as xe,
    Frt as Se,
    Hit as Ce,
    Lit as we,
    Nrt as Te,
    Prt as Ee,
    Rit as De,
    Srt as Oe,
    Vit as ke,
    Xvn as Ae,
    Yvn as je,
    brt as W,
    gst as Me,
    hst as Ne
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Bb as Pe,
    Cb as Fe,
    Eb as Ie,
    Ob as Le,
    Rb as G,
    kb as Re,
    wb as ze
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    Bv as Be,
    Uv as Ve
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    n as He,
    t as K
} from "./af004db9-jdoi5p0ftep3sdlx.js";
import {
    n as Ue,
    r as We,
    t as Ge
} from "./d6a45810-v4fjigbzy7i8bukc.js";
import {
    l as q,
    n as Ke,
    o as qe,
    r as Je
} from "./501976a3-c1mzub6ebyjtuebf.js";
import {
    c as Ye,
    f as J,
    n as Xe,
    p as Ze,
    t as Qe,
    u as $e
} from "./a8575090-w8al218e9s1e6ru1.js";

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
        let [t, n] = await Promise.all([p.safeGet(`/aip/connectors/{connector_id}`, {
            parameters: {
                path: {
                    connector_id: e.connector_id
                },
                query: {
                    include_actions: !1
                }
            }
        }), p.safeGet(`/aip/connectors/{connector_id}/actions`, {
            parameters: {
                path: {
                    connector_id: e.connector_id
                }
            },
            additionalHeaders: {
                [F]: `CONNECTOR_SETTING`
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
    let e = m(),
        t = be(),
        n = ge(),
        r = de(),
        o = je(),
        s = n?.nativeRedirectUrl,
        l = (0, Z.useRef)(!1),
        u = ue();
    return (0, Z.useEffect)(() => {
        if (l.current) return;
        l.current = !0;
        let n = _(window.location.href);
        if (n != null) {
            window.history.replaceState(null, ``, window.location.pathname), n.redirectUrl == null ? r(R(i.OAUTH_FAILED_GENERIC, `/#settings/${O.Connectors}`), {
                replace: !0
            }) : window.location.replace(n.redirectUrl);
            return
        }
        if (s) {
            tt(s);
            return
        }
        let m = T(window.location.href) ?? window.location.href;
        async function h() {
            let n = e => {
                    window.close(), window.setTimeout(() => {
                        r(e)
                    }, 150)
                },
                s = ke(),
                l = s === `workspace_microsoft_auto_link` ? Ke() : null,
                h = l == null ? null : performance.now(),
                g = s === `redirect` ? xe() : void 0,
                _ = new URL(m).searchParams,
                v = _.get(`oauth_state_id`) ?? _.get(`state`),
                y = M(v),
                b = k(v),
                x = y ? {
                    [F]: y
                } : void 0,
                S = b == null && l == null && (s === `popup` || o),
                C = b ?? (s === `recommended_onboarding_redirect` ? `/` : l?.returnPath ?? `#settings/${O.Connectors}`),
                T = Ye(m),
                E = we(m),
                D = T == null ? void 0 : Ie(T.oauthStateId),
                A = ({
                    outcome: e,
                    reason: t,
                    connectorId: n
                }) => {
                    l == null || h == null || (q({
                        phase: `oauth_callback`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: performance.now() - h
                    }), q({
                        phase: `end_to_end`,
                        outcome: e,
                        reason: t,
                        connectorId: n,
                        durationMs: Date.now() - l.startedAt
                    }))
                };
            try {
                if (T) {
                    let e = _.get(`tenant`);
                    if (e != null && T.approvedTenantId != null && e.toLowerCase() !== T.approvedTenantId.toLowerCase()) throw Error(`ADMIN_CONSENT_TENANT_MISMATCH`);
                    Re({
                        attemptId: D,
                        lifecycleStep: ze.callbackReceived,
                        callbackSource: Fe.callbackPage
                    });
                    let t = await Qe({
                            workspaceId: T.workspaceId ?? ``,
                            useDirectRouting: T.useDirectRouting ?? !1,
                            requestBody: {
                                full_redirect_url: ne(m)
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
                    let e = await p.safePost(`/aip/connectors/links/oauth/verification/callback`, {
                        requestBody: {
                            full_redirect_url: m
                        },
                        additionalHeaders: x
                    });
                    if (S) {
                        let t = e => {
                            e.origin === window.location.origin && e.data.connectorId === E.connectorId && (f.removeEventListener(`message`, t, !1), window.location.href = e.data.redirectUrl)
                        };
                        f.addEventListener(`message`, t, !1), I({
                            success: !0,
                            connectorId: E.connectorId,
                            oauthStateId: E.oauthStateId,
                            verificationToken: e.verification_token
                        });
                        return
                    }
                    r(`#settings/${O.Connectors}`);
                    return
                }
                let o = await p.safePost(`/aip/connectors/links/oauth/callback`, {
                    requestBody: {
                        full_redirect_url: m
                    },
                    additionalHeaders: x
                });
                if (await u.invalidateQueries({
                        refetchType: `all`,
                        queryKey: [`fetchConnectorLinkData`]
                    }), !o?.post_auth_url) {
                    if (l != null) {
                        A({
                            outcome: `failure`,
                            reason: `missing_post_auth_url`,
                            connectorId: o?.link?.connector_id
                        }), r(l.returnPath, {
                            replace: !0
                        });
                        return
                    }
                    r(R(i.OAUTH_FAILED_GENERIC, G(C)));
                    return
                }
                let s = Ge({
                        enableMultiLinks: o.link.enable_multi_links,
                        url: new URL(o.post_auth_url, location.origin),
                        connectorId: o.link.connector_id,
                        linkId: o.link.id,
                        suggestedAccountName: o.suggested_account_name ?? void 0
                    }),
                    h = o?.link?.connector_id === w[c.GITHUB_CONNECTOR],
                    g = ae(s.hash),
                    y = g != null,
                    b = g === O.Connectors;
                if (!y) {
                    let e = te[o.link.connector_id];
                    e && s.searchParams.set(`add_source`, e)
                }
                let k;
                if (b) {
                    let e = new URLSearchParams;
                    e.set(`connector`, o.link.connector_id), h && e.set(`github_onboarding`, `configure-repos`), k = U({
                        ...s,
                        search: ``,
                        hash: ee(O.Connectors).hash + `?${e.toString()}`
                    })
                } else h && s.searchParams.set(`github_onboarding`, `configure-repos`), k = U({
                    pathname: s.pathname,
                    search: s.search,
                    hash: s.hash
                });
                oe.removeItem(a.ConnectorUpgradeToSyncRequest);
                let j = o.link.connector_id === `connector_bd313622bce5485cb3d0b338715f7108` ? t.formatMessage($.chatGPTForSlackInstallSuccess) : t.formatMessage($.genericSuccess, {
                        connector: o.link.name
                    }),
                    {
                        microsoftTeamsUnavailable: M,
                        scopeCheckLink: N
                    } = re({
                        link: o.link,
                        isMicrosoftConnector: Me(o.link.connector_id) && o.link.connector_id !== w[c.TEAMS_CONNECTOR]
                    }),
                    F = o.connected_connector_ids == null ? void 0 : new Set(o.connected_connector_ids).size,
                    L = l == null && (M && se({
                        link: N
                    }) || await it(N)),
                    z = t.formatMessage($.partialSuccess, {
                        connector: o.link.name
                    }),
                    B = d({
                        intl: t,
                        connectorName: o.link.name,
                        microsoftTeamsUnavailable: M,
                        hasPotentialMissingScopes: L,
                        installedPluginCount: F
                    }) ?? (L ? z : j);
                if (S) {
                    I({
                        success: !0,
                        connectorId: o.link.connector_id,
                        oauthStateId: v ?? void 0,
                        linkId: o.link.id,
                        suggestedAccountName: o.suggested_account_name ?? void 0,
                        hasPotentialMissingScopes: L,
                        microsoftTeamsUnavailable: M,
                        installedPluginCount: F
                    }), n(R(L ? i.CUSTOM_ERROR : i.CUSTOM_MSG, k, B));
                    return
                }
                let V = `chatgpt_connectors_oauth_connect_success`,
                    H = P(V, `succeeded`, o.link.connector_id);
                if (ie.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: V,
                        data: {
                            success: !0,
                            type: o.link.connector_id
                        },
                        eventId: H
                    }), W.logOAuthCompleted({
                        connector_id_metadata: W.createIdMetadataFromId(e, o.link.connector_id, `unknown_referrer`),
                        referrer: `unknown_referrer`,
                        authType: `OAUTH`,
                        scopes: null,
                        success: !0
                    }), l != null) {
                    A({
                        outcome: `success`,
                        connectorId: o.link.connector_id
                    }), r(l.returnPath, {
                        replace: !0
                    });
                    return
                }
                r(R(L ? i.CUSTOM_ERROR : i.CUSTOM_MSG, k, B))
            } catch (e) {
                if (T) {
                    J({
                        oauthStateId: T.finalOauthStateId ?? T.oauthStateId,
                        error: e instanceof Error ? e.message : `Microsoft admin consent failed`
                    }), n(`/admin/apps`);
                    return
                }
                let t, o;
                try {
                    if (v) {
                        let e = await p.safeGet(`/aip/connectors/links/oauth/state/{oauth_state_id}`, {
                            parameters: {
                                path: {
                                    oauth_state_id: v
                                }
                            },
                            additionalHeaders: x
                        });
                        (e?.status === `PENDING` || e?.status === `COMPLETE` || e?.status === `ERROR`) && (o = e.status), e?.connector_id && (t = e.connector_id)
                    }
                } catch {}
                o === `ERROR` && oe.removeItem(a.ConnectorUpgradeToSyncRequest);
                let s = e instanceof j ? e.detail : void 0,
                    c = Ue(typeof s?.error_code == `string` ? s.error_code : void 0, s?.enable_multi_links === !0),
                    u = c === i.CUSTOM_ERROR && typeof s?.message == `string` ? s.message : e instanceof Error ? e.message : void 0,
                    d = c === i.OAUTH_FAILED_USER_CANCEL || c === i.CUSTOM_ERROR ? u : void 0;
                if (g && t && Ee({
                        connectorId: t,
                        installAttemptId: g
                    }) && (Be(g), Te(g)), S) {
                    I({
                        success: !1,
                        connectorId: E?.connectorId ?? t ?? ``,
                        oauthStateId: E?.oauthStateId ?? v ?? void 0,
                        errorType: c,
                        error: u
                    }), n(R(c, C, d));
                    return
                }
                let f = `chatgpt_connectors_oauth_connect_error`,
                    m = P(f, c === i.OAUTH_FAILED_USER_CANCEL ? `cancelled` : `failed`, t ?? `unknown`, c);
                if (ie.logValueEventWithStatsig({
                        segmentEventName: `Connector OAuth Connect`,
                        statsigEventName: f,
                        data: {
                            errorType: c,
                            success: !1,
                            type: t ?? `unknown`
                        },
                        eventId: m
                    }), l != null) {
                    A({
                        outcome: `failure`,
                        reason: `oauth_callback_failed`,
                        connectorId: t
                    }), r(l.returnPath, {
                        replace: !0
                    });
                    return
                }
                r(R(c, G(C), d))
            }
        }
        h().finally(() => {
            let e = new URL(m).searchParams;
            b(e.get(`oauth_state_id`) ?? e.get(`state`))
        })
    }, [e, o, t, s, r, u]), (0, Q.jsx)(`div`, {
        className: `flex h-screen w-screen items-center justify-center`,
        children: (0, Q.jsx)(K, {
            size: 36
        })
    })
}
var ot, Z, Q, $, st, ct, lt = e((() => {
    fe(), ot = ye(), y(), D(), z(), Ne(), qe(), L(), Je(), Ce(), B(), N(), De(), He(), Le(), $e(), Xe(), l(), Ae(), x(), v(), Se(), Ve(), Pe(), n(), o(), E(), V(), Oe(), h(), u(), rt(), s(), C(), A(), g(), ve(), Z = t(me()), pe(), We(), Q = H(), _e(), $ = le({
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
        } = await import(`./3660315a-fp5ivsljxdkz96bs.js`).then(e => (e.n(), e.r));
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
            url: typeof window > `u` ? `` : T(window.location.href) ?? window.location.href,
            children: (0, Q.jsx)(at, {})
        }), e[0] = t) : t = e[0], t
    })
}));
export {
    lt as n, ct as t
};
//# sourceMappingURL=e590b368-n6clpt77hvi87jjp.js.map