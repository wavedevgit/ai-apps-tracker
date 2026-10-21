import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BE as r,
    BU as i,
    Bat as a,
    Bot as o,
    C8 as s,
    Cw as c,
    F7 as l,
    HE as u,
    I7 as d,
    JT as f,
    M1 as p,
    P1 as ee,
    Pat as te,
    Qit as ne,
    R1 as re,
    Sit as m,
    TK as h,
    Tw as g,
    UE as _,
    VU as v,
    YT as y,
    Ynt as ie,
    Znt as ae,
    eat as b,
    fat as x,
    g8 as S,
    gat as C,
    hat as w,
    trt as T,
    wK as oe,
    xit as se,
    z7 as ce,
    zot as E
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as le,
    Ln as D,
    Nn as O,
    Rn as ue,
    Vn as k,
    wn as A,
    zn as j
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Q as de,
    Hrt as M,
    JPn as N,
    Kst as fe,
    Lit as pe,
    MPn as me,
    NPn as he,
    RPn as P,
    RQ as ge,
    Rit as _e,
    Urt as ve,
    WQ as ye,
    ait as be,
    e$ as xe,
    eit as Se,
    iTn as F,
    lit as Ce,
    nWn as we,
    qst as Te,
    rTn as Ee,
    rWn as De,
    t$ as Oe
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    Cx as ke,
    Hm as Ae,
    Kv as je,
    Ky as Me,
    Sx as Ne,
    Um as Pe,
    qv as I,
    qy as Fe
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    Bl as Ie,
    Fl as Le,
    Hl as Re,
    Il as ze,
    Ll as Be,
    Qv as Ve,
    Rl as He,
    Vl as L,
    ay as Ue,
    zl as We
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    S as Ge,
    x as Ke
} from "./82782bc9-idqd90kxtp4zogpp.js";

function qe({
    nativeEnabled: e,
    connectorType: t,
    workspaceId: n,
    requestBody: r
}) {
    return e && t === `SERVICE` && !!n && !R(r.logo_url) && !R(r.logo_url_dark) && V(n)
}
async function Je({
    workspaceId: e,
    templateId: t,
    requestBody: n,
    onBeforeWrite: r,
    productSku: i = Ee.ADMIN_SETTING
}) {
    let a = B(e);
    if (!a || !z()) throw Error(`The current workspace administrator has changed.`);
    let o = await se({
            reason: `service_template_instantiation_before_write`,
            method: `POST`,
            path: `/backend-api/v2/apps/templates/{template_id}/instantiate`
        }),
        s = B(e);
    if (!o.ok || s?.accountUserId !== a.accountUserId || s?.actorUserId !== a.actorUserId) throw Error(`The current workspace administrator has changed.`);
    let c = oe(e);
    if (c == null) throw Error(`The current workspace administrator has changed.`);
    return Ye ??= new d({
        baseUrl: w.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), r?.(), Ye.safePost(`/v2/apps/templates/{template_id}/instantiate`, {
        authOption: x.Required,
        disableAutomaticRetry: !0,
        additionalHeaders: {
            ...c,
            [ne]: i,
            "x-openai-use-sheep": `1`
        },
        parameters: {
            path: {
                template_id: t
            }
        },
        requestBody: n
    })
}
var Ye, R, z, B, V, Xe = e((() => {
    F(), re(), m(), o(), C(), b(), ce(), h(), R = e => e?.trimStart().toLowerCase().startsWith(`data:`) === !0, z = () => {
        if (typeof window > `u`) return !1;
        let e = new URL(w, window.location.href);
        return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
    }, B = e => {
        let t = p(),
            n = E();
        if (!(!e || !t?.normalizedAccountUserId || !n?.user?.id || n.account?.id !== e || t.authUserId !== n.user.id || t.getWorkspaceId() !== e || !t.isOwnerOfAccount() && !t.isAdminOfAccount())) return {
            accountUserId: t.normalizedAccountUserId,
            actorUserId: n.user.id
        }
    }, V = e => !!e && z() && B(e) != null && oe(e) != null
}));

function Ze({
    connector: e,
    setup: t
}) {
    return e.status === `ONLY_ME` && e.template_id === t.template.template_id && e.owners.length > 0 && e.owners.every(e => e.type === `USER`) && e.owners.some(e => e.id === t.workspaceUserId)
}
var Qe = e((() => {})),
    $e = t({
        CreateServiceConnectorFromTemplateModal: () => et
    });

function et(e) {
    "use forget";
    let t = (0, st.c)(198),
        {
            template: n,
            onClose: r,
            onCreateAttempt: i,
            personalTemplateSetup: a,
            onCreated: o,
            onWorkspaceDraftCreated: s,
            onNativeDraftHandoffIncomplete: u
        } = e,
        d = j(),
        ee = ye(),
        ne = Ue(),
        re = n.can_create === !1,
        m;
    t[0] === n.supported_auth_types ? m = t[1] : (m = n.supported_auth_types?.some(ot) ?? !1, t[0] = n.supported_auth_types, t[1] = m);
    let h = m,
        g;
    t[2] === n.supported_auth_types ? g = t[3] : (g = n.supported_auth_types?.some(at) ?? !1, t[2] = n.supported_auth_types, t[3] = g);
    let _ = g,
        y = n.template_id === ct,
        b = n.template_id === lt,
        x;
    t[4] !== b || t[5] !== n.template_id ? (x = b ? `https://help.openai.com/articles/20001487` : ze(n.template_id), t[4] = b, t[5] = n.template_id, t[6] = x) : x = t[6];
    let S = x,
        C;
    t[7] === n.link_params_schema ? C = t[8] : (C = _e(n.link_params_schema), t[7] = n.link_params_schema, t[8] = C);
    let w = C,
        [T, oe] = (0, H.useState)(!1),
        se = (0, H.useRef)(!0),
        ce = (0, H.useRef)(!1),
        le = (0, H.useRef)(null),
        D;
    t[9] !== a || t[10] !== n.template_id ? (D = a ? void 0 : yt(n.template_id), t[9] = a, t[10] = n.template_id, t[11] = D) : D = t[11];
    let ue = D,
        k;
    t[12] === ue ? k = t[13] : (k = () => bt(ue), t[12] = ue, t[13] = k);
    let A = (0, H.useSyncExternalStore)(_t, k, it),
        N = A != null,
        me = (0, H.useRef)(!1),
        he;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (he = {}, t[14] = he) : he = t[14];
    let [P, ge] = (0, H.useState)(he), ve;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (ve = {}, t[15] = ve) : ve = t[15];
    let [xe, Se] = (0, H.useState)(ve), [F, Te] = (0, H.useState)(null), [Ee, De] = (0, H.useState)(h), [ke, Ae] = (0, H.useState)(!1), [I, Fe] = (0, H.useState)(null), [Be, Ve] = (0, H.useState)(null), [L, We] = (0, H.useState)(null), Ke = L?.connectorId, Ye;
    t[16] !== y || t[17] !== n.description || t[18] !== n.name || t[19] !== n.oauth_client_info?.default_scopes ? (Ye = () => ({
        name: n.name,
        description: n.description ?? ``,
        oauthClientId: ``,
        oauthClientSecret: ``,
        githubAppPrivateKey: ``,
        oauthClientScopes: (n.oauth_client_info?.default_scopes ?? []).join(`
`),
        gitlabHostname: ``,
        webhookSecret: y ? Et() : ``
    }), t[16] = y, t[17] = n.description, t[18] = n.name, t[19] = n.oauth_client_info?.default_scopes, t[20] = Ye) : Ye = t[20];
    let [R, z] = (0, H.useState)(Ye), B;
    t[21] !== R.oauthClientId || t[22] !== R.oauthClientSecret ? (B = R.oauthClientId.trim().length > 0 || R.oauthClientSecret.trim().length > 0, t[21] = R.oauthClientId, t[22] = R.oauthClientSecret, t[23] = B) : B = t[23];
    let V = _ || B,
        Xe;
    t[24] !== w || t[25] !== xe ? (Xe = pe(w, xe), t[24] = w, t[25] = xe, t[26] = Xe) : Xe = t[26];
    let Qe = Xe,
        $e = F ? He(F) ?? `` : ``,
        et = Ke ? Tt(Ke) : ``,
        mt, ht;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (mt = () => (se.current = !0, () => {
        se.current = !1;
        let e = le.current;
        e && !e.dispatched && St(e.key, e.reservation), le.current = null
    }), ht = [], t[27] = mt, t[28] = ht) : (mt = t[27], ht = t[28]), (0, H.useEffect)(mt, ht);
    let gt, W;
    t[29] === h ? (gt = t[30], W = t[31]) : (gt = () => {
        if (!h) {
            Te(null), De(!1);
            return
        }
        let e = !1;
        return De(!0), Te(null), Dt().then(t => {
            e || Te(t)
        }).catch(() => {
            e || Te(null)
        }).finally(() => {
            e || De(!1)
        }), () => {
            e = !0
        }
    }, W = [h], t[29] = h, t[30] = gt, t[31] = W), (0, H.useEffect)(gt, W);
    let G, K;
    t[32] === I ? (G = t[33], K = t[34]) : (G = () => {
        if (I == null) return;
        let e = window.setTimeout(() => {
            Fe(null)
        }, 2e3);
        return () => window.clearTimeout(e)
    }, K = [I], t[32] = I, t[33] = G, t[34] = K), (0, H.useEffect)(G, K);
    let J;
    t[35] !== r || t[36] !== o || t[37] !== u || t[38] !== s || t[39] !== a ? (J = e => {
        let t = e.nativeDraftFallback,
            n = p(),
            i = t && n?.getWorkspaceId() === t.workspaceId && n.normalizedAccountUserId === t.accountUserId && n.authUserId === t.actorUserId && E()?.account?.id === t.workspaceId && E()?.user?.id === t.actorUserId ? t.connectorId : void 0;
        t && !i ? r() : e.nativeDraftHandoffIncomplete ? u ? u(i) : r() : a && o && e.connector ? o(e.connector) : e.pluginId && s && e.connector ? s({
            connector: e.connector,
            pluginId: e.pluginId,
            connectorId: e.connectorId
        }) : r(e.connectorId)
    }, t[35] = r, t[36] = o, t[37] = u, t[38] = s, t[39] = a, t[40] = J) : J = t[40];
    let X = J,
        kt;
    t[41] !== L || t[42] !== X || t[43] !== T || t[44] !== r ? (kt = () => {
        T || (L ? X(L) : r())
    }, t[41] = L, t[42] = X, t[43] = T, t[44] = r, t[45] = kt) : kt = t[45];
    let At = kt,
        jt;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (jt = e => {
        ge(t => {
            if (!t[e]) return t;
            let n = {
                ...t
            };
            return delete n[e], n
        })
    }, t[46] = jt) : jt = t[46];
    let Z = jt,
        Mt = (e, t) => {
            Se(n => ({
                ...n,
                [e]: t
            })), a && (e === `hostname` || e === `workspace_host`) && !me.current && z(e => ({
                ...e,
                name: de(n.name, t)
            })), Z(e)
        },
        Nt;
    t[47] === Z ? Nt = t[48] : (Nt = async e => {
        try {
            let t = await wt(e);
            z(e => ({
                ...e,
                githubAppPrivateKey: t
            })), Ve(e.name), Z(`githubAppPrivateKey`)
        } catch {
            v.danger(Y.githubAppPrivateKeyReadError)
        }
    }, t[47] = Z, t[48] = Nt);
    let Pt = Nt,
        Ft;
    t[49] === Pt ? Ft = t[50] : (Ft = e => {
        e.length > 0 && Pt(e[0])
    }, t[49] = Pt, t[50] = Ft);
    let It;
    t[51] !== T || t[52] !== Ft ? (It = {
        accept: pt,
        disabled: T,
        multiple: !1,
        noClick: !0,
        noKeyboard: !0,
        onDropAccepted: Ft,
        onDropRejected: rt
    }, t[51] = T, t[52] = Ft, t[53] = It) : It = t[53];
    let {
        getInputProps: Lt,
        getRootProps: Rt,
        isDragActive: zt,
        open: Bt
    } = Ge(It), Vt;
    t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (Vt = async (e, t) => {
        if (t) try {
            await navigator.clipboard.writeText(t), Fe(e)
        } catch {
            Fe(null)
        }
    }, t[54] = Vt) : Vt = t[54];
    let Ht = Vt,
        Ut;
    t[55] !== F || t[56] !== Qe || t[57] !== X || t[58] !== d || t[59] !== ne || t[60] !== b || t[61] !== y || t[62] !== w || t[63] !== ee || t[64] !== r || t[65] !== i || t[66] !== s || t[67] !== a || t[68] !== V || t[69] !== n || t[70] !== re || t[71] !== R.description || t[72] !== R.githubAppPrivateKey || t[73] !== R.gitlabHostname || t[74] !== R.name || t[75] !== R.oauthClientId || t[76] !== R.oauthClientScopes || t[77] !== R.oauthClientSecret || t[78] !== R.webhookSecret ? (Ut = async e => {
        if (e?.preventDefault(), re || ce.current) return;
        let t = a ? void 0 : yt(n.template_id),
            o = bt(t);
        if (o) {
            v.danger(d.formatMessage(o === `pending` ? Y.nativeCreationPending : Y.nativeCompletionUncertain));
            return
        }
        let c = {},
            u = R.name.trim(),
            f = R.description.trim(),
            m = R.oauthClientId.trim(),
            h = R.oauthClientSecret.trim(),
            g = R.githubAppPrivateKey.trim(),
            _ = R.gitlabHostname.trim(),
            x = y && V,
            S = R.webhookSecret.trim(),
            C = y;
        u || (c.name = d.formatMessage(Y.requiredField)), V && (m || (c.oauthClientId = d.formatMessage(Y.requiredField)), h || (c.oauthClientSecret = d.formatMessage(Y.requiredField)), x && !g && (c.githubAppPrivateKey = d.formatMessage(Y.requiredField)), F || (c.callbackId = d.formatMessage(b ? Y.gitlabRedirectUriUnavailable : Y.callbackUrlUnavailable))), b && !_ && (c.gitlabHostname = d.formatMessage(Y.requiredField)), C && (S || (c.webhookSecret = d.formatMessage(Y.requiredField)));
        let {
            sanitizedLinkParams: T,
            errors: D,
            hasPatternErrors: O
        } = Ce(w, Qe, d);
        if (Object.assign(c, D), Object.keys(c).length > 0) {
            ge(c), Object.keys(D).length > 0 && v.danger(d.formatMessage(O ? be.invalidFieldsToast : be.requiredFieldsToast));
            return
        }
        oe(!0), ce.current = !0;
        let ue = {
                name: u,
                description: f,
                logo_url: n.logo_url,
                logo_url_dark: n.logo_url_dark,
                link_params: T,
                create_as_draft: !0
            },
            k = {};
        C && (k[dt] = S), x && (k[ut] = g), b && (k[ft] = _);
        let A = {
                ...ue,
                ...Object.keys(k).length > 0 ? {
                    additional_config: k
                } : {},
                ...V ? {
                    oauth_client_id: m,
                    oauth_client_secret: h,
                    oauth_client_scopes: Ct(R.oauthClientScopes),
                    callback_id: F ?? void 0
                } : {}
            },
            j = a ? void 0 : p()?.getWorkspaceId(),
            de = !1,
            M = !1,
            N = !1,
            fe;
        try {
            let e;
            if (a) {
                i?.();
                let t = await Oe(a, A);
                e = {
                    connectorId: t.connector.id,
                    connector: t.connector,
                    pluginId: t.plugin_id?.trim() || void 0
                }
            } else if (qe({
                    nativeEnabled: !0,
                    connectorType: n.connector_type,
                    workspaceId: j,
                    requestBody: A
                }) && ae().getContext().user.customIDs?.workspace_id === j && ae().getContext().user.userID === E()?.user?.id && t != null && ie(vt)) {
                let r = Symbol(`service-template-prewrite`);
                fe = r, le.current = {
                    key: t,
                    reservation: r,
                    dispatched: !1
                }, xt(t, `pending`, r), de = !0;
                let a = await Je({
                    workspaceId: j ?? ``,
                    templateId: n.template_id,
                    requestBody: A,
                    onBeforeWrite: () => {
                        if (!se.current || le.current?.reservation !== r || q.get(window)?.get(t) !== r || bt(t) !== `pending`) throw Error(`The draft creation context has changed.`);
                        le.current.dispatched = !0, M = !0, i?.()
                    }
                });
                e = {
                    connectorId: a.connector_id,
                    connector: a.connector,
                    pluginId: a.plugin_id?.trim() || void 0
                }
            } else {
                i?.();
                let t = await l.safePost(`/aip/connectors/templates/{template_id}/instantiate`, {
                    parameters: {
                        path: {
                            template_id: n.template_id
                        }
                    },
                    requestBody: A
                });
                e = {
                    connectorId: t.connector.id,
                    connector: t.connector,
                    pluginId: t.plugin_id?.trim() || void 0
                }
            }
            let r = p(),
                o = M && e.connector != null && e.connectorId.trim() !== `` && e.connector.id === e.connectorId && e.connector.connector_type === `SERVICE` && !!r?.normalizedAccountUserId && !!r.authUserId && !!E()?.user?.id && r.getWorkspaceId() === j && r.authUserId === E()?.user?.id && E()?.account?.id === j && Ze({
                    connector: e.connector,
                    setup: {
                        template: n,
                        workspaceUserId: r.normalizedAccountUserId
                    }
                }),
                c = M && s != null && (!e.pluginId || !o);
            if (e.nativeDraftHandoffIncomplete = c, e.nativeDraftFallback = o && r?.normalizedAccountUserId && r.authUserId && j ? {
                    connectorId: e.connectorId,
                    workspaceId: j,
                    actorUserId: r.authUserId,
                    accountUserId: r.normalizedAccountUserId
                } : void 0, !a) {
                if (await Promise.all([ne(), Ot.refetch()]), ee(), M && !se.current) {
                    xt(t, `uncertain`);
                    return
                }
                c ? (xt(t, `uncertain`), v.danger(d.formatMessage(Y.nativeCompletionUncertain))) : (M && St(t), v.success(d.formatMessage(Y.success)))
            }
            C ? We(e) : X(e)
        } catch (e) {
            let n = e,
                i = M && n instanceof te && !n.isTransportError && (n.status === 401 || n.status === 403 || Re(n));
            if (de && !M ? St(t, fe) : i ? St(t) : M && xt(t, `uncertain`), de && !se.current) return;
            v.danger(M && !i ? d.formatMessage(Y.nativeCompletionUncertain) : Ie(n, d), {
                toastId: `create_service_template_draft_error`,
                analyticsToastId: `create_service_template_draft_error`
            }), M && !i && (N = !0, C ? (We({
                connectorId: ``,
                nativeDraftHandoffIncomplete: !0
            }), oe(!1)) : r())
        }
        N || (ce.current = !1, oe(!1))
    }, t[55] = F, t[56] = Qe, t[57] = X, t[58] = d, t[59] = ne, t[60] = b, t[61] = y, t[62] = w, t[63] = ee, t[64] = r, t[65] = i, t[66] = s, t[67] = a, t[68] = V, t[69] = n, t[70] = re, t[71] = R.description, t[72] = R.githubAppPrivateKey, t[73] = R.gitlabHostname, t[74] = R.name, t[75] = R.oauthClientId, t[76] = R.oauthClientScopes, t[77] = R.oauthClientSecret, t[78] = R.webhookSecret, t[79] = Ut) : Ut = t[79];
    let Wt = Ut,
        Gt;
    t[80] !== I || t[81] !== d ? (Gt = e => {
        let {
            setupValueKey: t,
            label: n,
            value: r,
            isLoading: i,
            loadingLabel: a,
            unavailableLabel: o,
            ariaLabel: s
        } = e, c = I === t, l = !!r && !i, u = i ? a : r || o;
        return (0, U.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, U.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3`,
                children: [(0, U.jsx)(`span`, {
                    className: `text-token-text-primary text-xs font-semibold`,
                    children: n
                }), (0, U.jsx)(`span`, {
                    className: `text-token-text-tertiary text-xs`,
                    children: (0, U.jsx)(O, {
                        ...c ? Y.setupUrlCopied : l ? Y.setupUrlCopyHint : Y.setupUrlCopyUnavailable
                    })
                })]
            }), (0, U.jsxs)(`button`, {
                type: `button`,
                onClick: () => void Ht(t, r),
                disabled: !l,
                className: `border-token-border-light bg-token-bg-primary flex w-full items-center justify-between gap-3 rounded-md border px-3 py-2 text-start text-xs shadow-sm transition-colors ${l?`hover:bg-token-main-surface-secondary`:`cursor-default opacity-70`}`,
                "aria-label": s,
                title: l ? d.formatMessage(Y.setupUrlCopyHint) : void 0,
                children: [(0, U.jsx)(`span`, {
                    className: `text-token-text-secondary font-mono break-all`,
                    children: u
                }), (0, U.jsx)(`span`, {
                    className: `border-token-border-light bg-token-bg-secondary text-token-text-secondary flex h-8 w-8 shrink-0 items-center justify-center rounded-md border`,
                    children: c ? (0, U.jsx)(Ne, {
                        className: `icon-sm`
                    }) : (0, U.jsx)(Me, {
                        className: `icon-sm`
                    })
                })]
            })]
        })
    }, t[80] = I, t[81] = d, t[82] = Gt) : Gt = t[82];
    let Q = Gt;
    if (L) {
        let e = !Ke,
            n = e ? Y.githubWebhookUncertainTitle : Y.githubWebhookReadyTitle,
            r;
        t[83] === n ? r = t[84] : (r = (0, U.jsx)(O, {
            ...n
        }), t[83] = n, t[84] = r);
        let i = e ? Y.githubWebhookUncertainBody : Y.githubWebhookReadyBody,
            a;
        t[85] === i ? a = t[86] : (a = (0, U.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, U.jsx)(O, {
                ...i
            })
        }), t[85] = i, t[86] = a);
        let o;
        t[87] !== d || t[88] !== y || t[89] !== Q || t[90] !== R.webhookSecret ? (o = y ? Q({
            setupValueKey: `webhookSecret`,
            label: (0, U.jsx)(O, {
                ...Y.githubWebhookSecretLabel
            }),
            value: R.webhookSecret,
            isLoading: !1,
            loadingLabel: d.formatMessage(Y.setupUrlLoading),
            unavailableLabel: d.formatMessage(Y.githubWebhookSecretUnavailable),
            ariaLabel: d.formatMessage(Y.copyGithubWebhookSecretAriaLabel)
        }) : null, t[87] = d, t[88] = y, t[89] = Q, t[90] = R.webhookSecret, t[91] = o) : o = t[91];
        let s;
        t[92] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, U.jsx)(O, {
            ...Y.webhookUrlLabel
        }), t[92] = s) : s = t[92];
        let l;
        t[93] !== L || t[94] !== X ? (l = () => X(L), t[93] = L, t[94] = X, t[95] = l) : l = t[95];
        let u;
        t[96] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, U.jsx)(O, {
            ...Y.doneCta
        }), t[96] = u) : u = t[96];
        let p;
        return t[97] === l ? p = t[98] : (p = (0, U.jsx)(`div`, {
            className: `flex justify-end`,
            children: (0, U.jsx)(f, {
                color: `primary`,
                onClick: l,
                size: `large`,
                className: `w-full md:w-auto`,
                type: `button`,
                children: u
            })
        }), t[97] = l, t[98] = p), (0, U.jsx)(c, {
            title: r,
            isOpen: !0,
            onClose: At,
            position: `center`,
            showCloseButton: !0,
            size: `custom`,
            className: `max-h-[90vh] w-full md:max-w-[448px]`,
            testId: `modal-create-service-connector-webhook-url`,
            children: (0, U.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [a, o, Q({
                    setupValueKey: `webhook`,
                    label: s,
                    value: et,
                    isLoading: !1,
                    loadingLabel: d.formatMessage(Y.setupUrlLoading),
                    unavailableLabel: d.formatMessage(Y.setupUrlUnavailable),
                    ariaLabel: d.formatMessage(Y.copyWebhookUrlAriaLabel)
                }), p]
            })
        })
    }
    let Kt = c,
        qt = a ? Le.connectTemplateAppModalTitle : Le.createTemplateAppModalTitle,
        Jt;
    t[99] === n.name ? Jt = t[100] : (Jt = {
        templateName: n.name
    }, t[99] = n.name, t[100] = Jt);
    let Yt;
    t[101] !== qt || t[102] !== Jt ? (Yt = (0, U.jsx)(`span`, {
        className: `flex items-center gap-1`,
        children: (0, U.jsx)(O, {
            ...qt,
            values: Jt
        })
    }), t[101] = qt, t[102] = Jt, t[103] = Yt) : Yt = t[103];
    let Xt = !T,
        Zt;
    t[104] === T ? Zt = t[105] : (Zt = e => {
        T && e.preventDefault()
    }, t[104] = T, t[105] = Zt);
    let Qt;
    t[106] !== a || t[107] !== _ || t[108] !== n.name ? (Qt = a ? (0, U.jsx)(O, {
        id: `chatgpt.plugins.template_setup.description`,
        defaultMessage: `Enter your server settings, then continue to sign in.`
    }) : (0, U.jsx)(O, {
        ..._ ? Y.bodyWithOauth : Y.bodyWithoutOauth,
        values: {
            templateName: n.name
        }
    }), t[106] = a, t[107] = _, t[108] = n.name, t[109] = Qt) : Qt = t[109];
    let $t;
    t[110] === S ? $t = t[111] : ($t = S ? (0, U.jsxs)(U.Fragment, {
        children: [` `, (0, U.jsxs)(we, {
            href: S,
            openNewTab: !0,
            className: `text-token-text-tertiary inline-flex items-center gap-1 text-sm no-underline! hover:underline!`,
            children: [(0, U.jsx)(O, {
                ...Y.setupGuideLink
            }), (0, U.jsx)(je, {
                className: `h-3 w-3`
            })]
        })]
    }) : null, t[110] = S, t[111] = $t);
    let en;
    t[112] !== Qt || t[113] !== $t ? (en = (0, U.jsxs)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: [Qt, $t]
    }), t[112] = Qt, t[113] = $t, t[114] = en) : en = t[114];
    let tn;
    t[115] !== N || t[116] !== A || t[117] !== n.template_id ? (tn = N ? (0, U.jsxs)(`div`, {
        className: `flex flex-col items-start gap-2`,
        children: [(0, U.jsx)(`p`, {
            className: `text-status-critical text-sm`,
            role: `alert`,
            children: (0, U.jsx)(O, {
                ...A === `pending` ? Y.nativeCreationPending : Y.nativeCompletionUncertain
            })
        }), A === `uncertain` ? (0, U.jsx)(f, {
            type: `button`,
            color: `secondary`,
            size: `small`,
            onClick: () => {
                let e = yt(n.template_id);
                bt(e) === `uncertain` && St(e)
            },
            children: (0, U.jsx)(O, {
                ...Y.nativeRetryAfterReviewCta
            })
        }) : null]
    }) : null, t[115] = N, t[116] = A, t[117] = n.template_id, t[118] = tn) : tn = t[118];
    let nn;
    t[119] !== en || t[120] !== tn ? (nn = (0, U.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [en, tn]
    }), t[119] = en, t[120] = tn, t[121] = nn) : nn = t[121];
    let rn;
    t[122] === Symbol.for(`react.memo_cache_sentinel`) ? (rn = (0, U.jsx)(`label`, {
        htmlFor: `service-template-name`,
        className: `mb-1 block text-sm font-medium`,
        children: (0, U.jsx)(O, {
            ...Y.nameLabel
        })
    }), t[122] = rn) : rn = t[122];
    let an;
    t[123] === d ? an = t[124] : (an = d.formatMessage(Y.nameLabel), t[123] = d, t[124] = an);
    let on = a ? void 0 : `service-template-name-help`,
        sn;
    t[125] === Z ? sn = t[126] : (sn = e => {
        me.current = !0, z(t => ({
            ...t,
            name: e.target.value
        })), Z(`name`)
    }, t[125] = Z, t[126] = sn);
    let cn;
    t[127] !== P.name || t[128] !== T || t[129] !== an || t[130] !== on || t[131] !== sn || t[132] !== R.name ? (cn = (0, U.jsx)(M, {
        name: `service-template-name`,
        ariaLabel: an,
        "aria-describedby": on,
        value: R.name,
        onChange: sn,
        disabled: T,
        error: P.name,
        inputClassName: `bg-token-bg-primary!`
    }), t[127] = P.name, t[128] = T, t[129] = an, t[130] = on, t[131] = sn, t[132] = R.name, t[133] = cn) : cn = t[133];
    let $;
    t[134] === a ? $ = t[135] : ($ = a ? null : (0, U.jsx)(`p`, {
        id: `service-template-name-help`,
        className: `text-token-text-tertiary mt-1 text-xs`,
        children: (0, U.jsx)(O, {
            ...Y.nameDescription
        })
    }), t[134] = a, t[135] = $);
    let ln;
    t[136] !== cn || t[137] !== $ ? (ln = (0, U.jsxs)(`div`, {
        children: [rn, cn, $]
    }), t[136] = cn, t[137] = $, t[138] = ln) : ln = t[138];
    let un;
    t[139] !== d || t[140] !== T || t[141] !== a || t[142] !== R.description ? (un = a ? null : (0, U.jsxs)(`div`, {
        children: [(0, U.jsx)(`label`, {
            htmlFor: `service-template-description`,
            className: `mb-1 block text-sm font-medium`,
            children: (0, U.jsx)(O, {
                ...Y.descriptionLabel
            })
        }), (0, U.jsx)(fe, {
            name: `service-template-description`,
            ariaLabel: d.formatMessage(Y.descriptionLabel),
            "aria-describedby": `service-template-description-help`,
            value: R.description,
            onChange: e => z(t => ({
                ...t,
                description: e.target.value
            })),
            disabled: T,
            inputClassName: `bg-token-bg-primary!`
        }), (0, U.jsx)(`p`, {
            id: `service-template-description-help`,
            className: `text-token-text-tertiary mt-1 text-xs`,
            children: (0, U.jsx)(O, {
                ...Y.descriptionDescription
            })
        })]
    }), t[139] = d, t[140] = T, t[141] = a, t[142] = R.description, t[143] = un) : un = t[143];
    let dn;
    t[144] !== ln || t[145] !== un ? (dn = (0, U.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [ln, un]
    }), t[144] = ln, t[145] = un, t[146] = dn) : dn = t[146];
    let fn = w.length > 0 ? (0, U.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, U.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [(0, U.jsx)(`h3`, {
                    className: `text-sm font-semibold`,
                    children: (0, U.jsx)(O, {
                        ...be.sectionTitle
                    })
                }), (0, U.jsx)(`p`, {
                    className: `text-token-text-secondary text-xs`,
                    children: (0, U.jsx)(O, {
                        ...be.sectionDescription
                    })
                })]
            }), w.map(e => {
                let t = e.required ? d.formatMessage(be.fieldLabelRequired, {
                        label: e.title
                    }) : e.title,
                    n = P[e.name],
                    r = Qe[e.name] ?? ``;
                return e.enumValues && e.enumValues.length > 0 ? (0, U.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, U.jsx)(`label`, {
                        htmlFor: `service-template-link-param-${e.name}`,
                        className: `text-sm font-medium`,
                        children: t
                    }), (0, U.jsx)(`select`, {
                        id: `service-template-link-param-${e.name}`,
                        className: `border-token-border-light bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:ring-1 focus:outline-none`,
                        value: r,
                        onChange: t => Mt(e.name, t.target.value),
                        disabled: T,
                        children: e.enumValues.map(nt)
                    }), e.description ? (0, U.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: e.description
                    }) : null, n ? (0, U.jsx)(`p`, {
                        className: `text-status-critical text-xs`,
                        children: n
                    }) : null]
                }, e.name) : (0, U.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, U.jsx)(`label`, {
                        htmlFor: `service-template-link-param-${e.name}`,
                        className: `mb-1 block text-sm font-medium`,
                        children: t
                    }), (0, U.jsx)(M, {
                        name: `service-template-link-param-${e.name}`,
                        ariaLabel: t,
                        value: r,
                        onChange: t => Mt(e.name, t.target.value),
                        disabled: T,
                        placeholder: d.formatMessage(be.fieldPlaceholder, {
                            label: e.example ?? e.title
                        }),
                        error: n,
                        inputClassName: `bg-token-bg-primary!`
                    }), e.description ? (0, U.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: e.description
                    }) : null]
                }, e.name)
            })]
        }) : null,
        pn;
    t[147] !== P.gitlabHostname || t[148] !== d || t[149] !== b || t[150] !== T || t[151] !== Z || t[152] !== R.gitlabHostname ? (pn = b ? (0, U.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [(0, U.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, U.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, U.jsx)(O, {
                    ...Y.gitlabInstanceSectionTitle
                })
            }), (0, U.jsx)(`p`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, U.jsx)(O, {
                    ...Y.gitlabHostnameDescription
                })
            })]
        }), (0, U.jsxs)(`div`, {
            children: [(0, U.jsx)(`label`, {
                htmlFor: `service-template-gitlab-hostname`,
                className: `mb-1 block text-sm font-medium`,
                children: (0, U.jsx)(O, {
                    ...Y.gitlabHostnameLabel
                })
            }), (0, U.jsx)(M, {
                name: `service-template-gitlab-hostname`,
                ariaLabel: d.formatMessage(Y.gitlabHostnameLabel),
                value: R.gitlabHostname,
                onChange: e => {
                    z(t => ({
                        ...t,
                        gitlabHostname: e.target.value
                    })), Z(`gitlabHostname`)
                },
                disabled: T,
                error: P.gitlabHostname,
                placeholder: d.formatMessage(Y.gitlabHostnamePlaceholder),
                inputClassName: `bg-token-bg-primary!`
            })]
        })]
    }) : null, t[147] = P.gitlabHostname, t[148] = d, t[149] = b, t[150] = T, t[151] = Z, t[152] = R.gitlabHostname, t[153] = pn) : pn = t[153];
    let mn;
    t[154] !== T || t[155] !== _ || t[156] !== ke || t[157] !== h ? (mn = h && !_ ? (0, U.jsx)(`div`, {
        children: (0, U.jsx)(f, {
            color: `secondary`,
            size: `small`,
            type: `button`,
            "aria-expanded": ke,
            onClick: () => Ae(tt),
            disabled: T,
            children: (0, U.jsx)(O, {
                ...ke ? Y.hideAdvancedSettings : Y.showAdvancedSettings
            })
        })
    }) : null, t[154] = T, t[155] = _, t[156] = ke, t[157] = h, t[158] = mn) : mn = t[158];
    let hn = h && (_ || ke) ? (0, U.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, U.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, U.jsx)(O, {
                    ...Y.oauthSectionTitle
                })
            }), Q({
                setupValueKey: `callback`,
                label: (0, U.jsx)(O, {
                    ...b ? Y.gitlabOauthRedirectUriLabel : Y.oauthCallbackUrlLabel
                }),
                value: $e,
                isLoading: Ee,
                loadingLabel: d.formatMessage(Y.setupUrlLoading),
                unavailableLabel: d.formatMessage(Y.setupUrlUnavailable),
                ariaLabel: d.formatMessage(b ? Y.copyGitlabOauthRedirectUriAriaLabel : Y.copyOauthCallbackUrlAriaLabel)
            }), P.callbackId ? (0, U.jsx)(`p`, {
                className: `text-status-critical text-xs`,
                children: P.callbackId
            }) : null, (0, U.jsxs)(`div`, {
                children: [(0, U.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-id`,
                    className: `mb-1 block text-sm font-medium`,
                    children: (0, U.jsx)(O, {
                        ...Y.oauthClientIdLabel
                    })
                }), (0, U.jsx)(M, {
                    name: `service-template-oauth-client-id`,
                    ariaLabel: d.formatMessage(Y.oauthClientIdLabel),
                    value: R.oauthClientId,
                    onChange: e => {
                        z(t => ({
                            ...t,
                            oauthClientId: e.target.value
                        })), Z(`oauthClientId`)
                    },
                    disabled: T,
                    error: P.oauthClientId,
                    inputClassName: `bg-token-bg-primary!`
                })]
            }), (0, U.jsxs)(`div`, {
                children: [(0, U.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-secret`,
                    className: `mb-1 block text-sm font-medium`,
                    children: (0, U.jsx)(O, {
                        ...Y.oauthClientSecretLabel
                    })
                }), (0, U.jsx)(M, {
                    name: `service-template-oauth-client-secret`,
                    ariaLabel: d.formatMessage(Y.oauthClientSecretLabel),
                    type: `password`,
                    value: R.oauthClientSecret,
                    onChange: e => {
                        z(t => ({
                            ...t,
                            oauthClientSecret: e.target.value
                        })), Z(`oauthClientSecret`)
                    },
                    disabled: T,
                    error: P.oauthClientSecret,
                    inputClassName: `bg-token-bg-primary!`
                })]
            }), y ? (0, U.jsx)(`div`, {
                className: `flex flex-col gap-4`,
                children: (0, U.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, U.jsx)(`label`, {
                        htmlFor: `service-template-github-app-private-key`,
                        className: `text-sm font-medium`,
                        children: (0, U.jsx)(O, {
                            ...Y.githubAppPrivateKeyLabel
                        })
                    }), (0, U.jsxs)(`div`, {
                        className: `flex flex-col gap-2`,
                        children: [(0, U.jsxs)(`div`, {
                            ...Rt({
                                className: `border-token-border-light bg-token-bg-primary flex flex-col items-center gap-2 rounded-md border border-dashed px-4 py-5 text-center transition-colors ${zt?`border-token-text-primary bg-token-main-surface-secondary`:``}`
                            }),
                            children: [(0, U.jsx)(`input`, {
                                ...Lt()
                            }), (0, U.jsx)(Pe, {
                                className: `text-token-text-secondary h-5 w-5`
                            }), (0, U.jsx)(`p`, {
                                className: `text-token-text-secondary text-sm`,
                                children: (0, U.jsx)(O, {
                                    ...Y.githubAppPrivateKeyUploadLabel
                                })
                            }), (0, U.jsx)(f, {
                                type: `button`,
                                color: `secondary`,
                                size: `small`,
                                disabled: T,
                                onClick: () => Bt(),
                                children: (0, U.jsx)(O, {
                                    ...Y.githubAppPrivateKeyUploadBrowseCta
                                })
                            })]
                        }), Be ? (0, U.jsx)(`p`, {
                            className: `text-token-text-tertiary text-xs`,
                            children: (0, U.jsx)(O, {
                                ...Y.githubAppPrivateKeyFileLoaded,
                                values: {
                                    fileName: Be
                                }
                            })
                        }) : null]
                    }), (0, U.jsx)(`textarea`, {
                        id: `service-template-github-app-private-key`,
                        className: `border-token-border-light bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary w-full rounded-md border px-3 py-2 font-mono text-sm shadow-sm focus:ring-1 focus:outline-none`,
                        value: R.githubAppPrivateKey,
                        onChange: e => {
                            z(t => ({
                                ...t,
                                githubAppPrivateKey: e.target.value
                            })), Ve(null), Z(`githubAppPrivateKey`)
                        },
                        rows: 5,
                        disabled: T,
                        placeholder: d.formatMessage(Y.githubAppPrivateKeyPlaceholder),
                        "aria-label": d.formatMessage(Y.githubAppPrivateKeyLabel)
                    }), (0, U.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: (0, U.jsx)(O, {
                            ...Y.githubAppPrivateKeyDescription
                        })
                    }), P.githubAppPrivateKey ? (0, U.jsx)(`p`, {
                        className: `text-status-critical text-xs`,
                        children: P.githubAppPrivateKey
                    }) : null]
                })
            }) : null, (0, U.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [(0, U.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-scopes`,
                    className: `text-sm font-medium`,
                    children: (0, U.jsx)(O, {
                        ...b ? Y.gitlabOauthClientScopesLabel : Y.oauthClientScopesLabel
                    })
                }), (0, U.jsx)(`textarea`, {
                    id: `service-template-oauth-client-scopes`,
                    className: `border-token-border-light bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:ring-1 focus:outline-none`,
                    value: R.oauthClientScopes,
                    onChange: e => z(t => ({
                        ...t,
                        oauthClientScopes: e.target.value
                    })),
                    rows: 3,
                    disabled: T,
                    readOnly: b,
                    placeholder: d.formatMessage(Y.oauthClientScopesPlaceholder)
                }), (0, U.jsx)(`p`, {
                    className: `text-token-text-tertiary text-xs`,
                    children: (0, U.jsx)(O, {
                        ...b ? Y.gitlabOauthClientScopesDescription : Y.oauthClientScopesDescription
                    })
                })]
            })]
        }) : null,
        gn;
    t[159] !== P.webhookSecret || t[160] !== d || t[161] !== y || t[162] !== Q || t[163] !== R.webhookSecret ? (gn = y ? (0, U.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [(0, U.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, U.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, U.jsx)(O, {
                    ...Y.githubWebhookSectionTitle
                })
            }), (0, U.jsx)(`p`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, U.jsx)(O, {
                    ...Y.githubWebhookSetupDescription
                })
            })]
        }), Q({
            setupValueKey: `webhookSecret`,
            label: (0, U.jsx)(O, {
                ...Y.githubWebhookSecretLabel
            }),
            value: R.webhookSecret,
            isLoading: !1,
            loadingLabel: d.formatMessage(Y.setupUrlLoading),
            unavailableLabel: d.formatMessage(Y.githubWebhookSecretUnavailable),
            ariaLabel: d.formatMessage(Y.copyGithubWebhookSecretAriaLabel)
        }), P.webhookSecret ? (0, U.jsx)(`p`, {
            className: `text-status-critical text-xs`,
            children: P.webhookSecret
        }) : null]
    }) : null, t[159] = P.webhookSecret, t[160] = d, t[161] = y, t[162] = Q, t[163] = R.webhookSecret, t[164] = gn) : gn = t[164];
    let _n;
    t[165] === r ? _n = t[166] : (_n = () => r(), t[165] = r, t[166] = _n);
    let vn;
    t[167] === Symbol.for(`react.memo_cache_sentinel`) ? (vn = (0, U.jsx)(O, {
        ...Y.cancelCta
    }), t[167] = vn) : vn = t[167];
    let yn;
    t[168] !== T || t[169] !== _n ? (yn = (0, U.jsx)(f, {
        color: `secondary`,
        onClick: _n,
        size: `large`,
        className: `w-full md:w-auto`,
        type: `button`,
        disabled: T,
        children: vn
    }), t[168] = T, t[169] = _n, t[170] = yn) : yn = t[170];
    let bn = re || N || T || V && Ee,
        xn = a ? Le.continueSetupButton : Y.createCta,
        Sn;
    t[171] === xn ? Sn = t[172] : (Sn = (0, U.jsx)(O, {
        ...xn
    }), t[171] = xn, t[172] = Sn);
    let Cn;
    t[173] !== T || t[174] !== bn || t[175] !== Sn ? (Cn = (0, U.jsx)(f, {
        color: `primary`,
        size: `large`,
        className: `w-full min-w-[170px] md:w-auto`,
        loading: T,
        disabled: bn,
        type: `submit`,
        children: Sn
    }), t[173] = T, t[174] = bn, t[175] = Sn, t[176] = Cn) : Cn = t[176];
    let wn;
    t[177] !== yn || t[178] !== Cn ? (wn = (0, U.jsxs)(`div`, {
        className: `flex flex-col-reverse gap-3 md:flex-row md:justify-end`,
        children: [yn, Cn]
    }), t[177] = yn, t[178] = Cn, t[179] = wn) : wn = t[179];
    let Tn;
    t[180] !== Wt || t[181] !== nn || t[182] !== dn || t[183] !== fn || t[184] !== pn || t[185] !== mn || t[186] !== hn || t[187] !== gn || t[188] !== wn ? (Tn = (0, U.jsxs)(`form`, {
        className: `flex flex-col gap-4`,
        onSubmit: Wt,
        children: [nn, dn, fn, pn, mn, hn, gn, wn]
    }), t[180] = Wt, t[181] = nn, t[182] = dn, t[183] = fn, t[184] = pn, t[185] = mn, t[186] = hn, t[187] = gn, t[188] = wn, t[189] = Tn) : Tn = t[189];
    let En;
    return t[190] !== Kt || t[191] !== At || t[192] !== T || t[193] !== Yt || t[194] !== Xt || t[195] !== Zt || t[196] !== Tn ? (En = (0, U.jsx)(Kt, {
        title: Yt,
        isOpen: !0,
        onClose: At,
        position: `center`,
        showCloseButton: Xt,
        shouldIgnoreClickOutside: T,
        onEscapeKeyDown: Zt,
        size: `custom`,
        className: `max-h-[90vh] w-full md:max-w-[448px]`,
        testId: `modal-create-service-connector-from-template`,
        children: Tn
    }), t[190] = Kt, t[191] = At, t[192] = T, t[193] = Yt, t[194] = Xt, t[195] = Zt, t[196] = Tn, t[197] = En) : En = t[197], En
}

function tt(e) {
    return !e
}

function nt(e) {
    return (0, U.jsx)(`option`, {
        value: e,
        children: e
    }, e)
}

function rt() {
    v.danger(Y.githubAppPrivateKeyInvalidFile)
}

function it() {}

function at(e) {
    return e.type === `OAUTH` && e.client_credentials_required !== !1
}

function ot(e) {
    return e.type === `OAUTH`
}
var st, H, U, ct, lt, ut, dt, ft, pt, mt, ht, gt, W, G, K, q, _t, J, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, Y, X = e((() => {
    st = A(), Be(), xe(), Se(), L(), Xe(), We(), y(), Ve(), I(), ke(), Fe(), Ae(), g(), Te(), ve(), De(), Qe(), ge(), F(), o(), a(), N(), me(), S(), re(), i(), _(), b(), ce(), T(), H = n(k()), Ke(), ue(), U = le(), ct = `templated_apps_GitHubEnterprise`, lt = `templated_apps_GitLab`, ut = `private_key`, dt = `webhook_secret`, ft = `hostname`, pt = {
        "application/octet-stream": [`.pem`],
        "application/pem-certificate-chain": [`.pem`],
        "application/x-pem-file": [`.pem`],
        "text/plain": [`.pem`]
    }, mt = `https://connectors.api.openai.com`, ht = 32, gt = `chatgpt.service-template-native-create-uncertain:`, W = `chatgpt:service-template-create-lock`, G = new WeakMap, K = new WeakMap, q = new WeakMap, _t = e => typeof window > `u` ? () => {} : (window.addEventListener(W, e), () => window.removeEventListener(W, e)), J = () => {
        window.dispatchEvent(new Event(W))
    }, vt = `3541874775`, yt = e => {
        let t = p(),
            n = E(),
            r = t?.getWorkspaceId();
        if (!(!r || !t?.normalizedAccountUserId || !n?.user?.id || t.authUserId !== n.user.id || n.account?.id !== r)) return `${gt}${JSON.stringify([r,t.normalizedAccountUserId,n.user.id,e])}`
    }, bt = e => {
        if (!e || typeof window > `u`) return;
        let t = G.get(window)?.get(e);
        if (t !== `cleared`) try {
            let n = window.sessionStorage.getItem(e),
                r = q.get(window)?.has(e) === !0;
            if (n == null && r) return `pending`;
            let i = t ?? (n === `pending` || n === `uncertain` ? n : K.get(window)?.get(e));
            if (i != null) {
                let t = K.get(window) ?? new Map;
                t.set(e, i), K.set(window, t)
            } else n ?? K.get(window)?.delete(e);
            return i === `pending` && !r ? `uncertain` : i
        } catch {
            let n = t ?? K.get(window)?.get(e);
            return n === `pending` && !q.get(window)?.has(e) ? `uncertain` : n
        }
    }, xt = (e, t, n) => {
        if (!e || typeof window > `u`) return;
        let r = q.get(window) ?? new Map;
        t === `pending` && n ? r.set(e, n) : r.delete(e), q.set(window, r);
        let i = K.get(window) ?? new Map;
        i.set(e, t), K.set(window, i);
        try {
            window.sessionStorage.setItem(e, t), G.get(window)?.delete(e)
        } catch {
            let n = G.get(window) ?? new Map;
            n.set(e, t), G.set(window, n)
        }
        J()
    }, St = (e, t) => {
        if (!(!e || typeof window > `u`) && !(t && q.get(window)?.get(e) !== t)) {
            q.get(window)?.delete(e), K.get(window)?.delete(e), G.get(window)?.delete(e);
            try {
                window.sessionStorage.removeItem(e)
            } catch {
                let t = G.get(window) ?? new Map;
                t.set(e, `cleared`), G.set(window, t)
            }
            J()
        }
    }, Ct = e => {
        let t = new Set,
            n = [];
        for (let r of e.split(/\r?\n|,/)) {
            let e = r.trim();
            !e || t.has(e) || (t.add(e), n.push(e))
        }
        return n
    }, wt = e => new Promise((t, n) => {
        let r = new FileReader;
        r.onerror = () => n(Error(`Unable to read file.`)), r.onload = () => {
            if (typeof r.result == `string`) {
                t(r.result);
                return
            }
            n(Error(`File contents unavailable.`))
        }, r.readAsText(e)
    }), Tt = e => `${mt}/connectors/${encodeURIComponent(e)}/webhook`, Et = () => {
        if (!globalThis.crypto?.getRandomValues) return ``;
        let e = new Uint8Array(ht);
        return globalThis.crypto.getRandomValues(e), Array.from(e, e => e.toString(16).padStart(2, `0`)).join(``)
    }, Dt = async () => (await l.safeGet(`/aip/connectors/oauth/callback_id`, {})).callback_id ?? null, Ot = s(() => ({
        queryKey: P(`workspace_settings`, !0, !1),
        queryFn: async () => {
            let e = await l.safePost(`/aip/connectors/list_accessible`, {
                    requestBody: {
                        principals: [],
                        purpose: `workspace_settings`
                    },
                    parameters: {
                        query: {
                            include_actions: !1,
                            external_logos: !0
                        }
                    },
                    additionalHeaders: {
                        [ne]: Ee.ADMIN_SETTING
                    }
                }),
                t = u();
            return {
                connectors: (e.connectors ?? []).map(e => r(e, {
                    preferIconAssets: t
                })),
                templates: e.app_templates ?? []
            }
        },
        enabled: ee()?.normalizedAccountUserId != null && he()
    })), Y = D({
        bodyWithOauth: {
            id: `GO4JyL`,
            defaultMessage: `Enter your organization's OAuth client details and provider settings. This creates a workspace-specific draft app that can be published afterward.`
        },
        bodyWithoutOauth: {
            id: `5I6YP9`,
            defaultMessage: `Enter your organization's provider settings. This creates a workspace-specific draft app that can be published afterward.`
        },
        setupGuideLink: {
            id: `chatgpt.connector_settings.service_template.setup_guide.link.label`,
            defaultMessage: `Learn more`
        },
        showAdvancedSettings: {
            id: `zSj6if`,
            defaultMessage: `Advanced settings`
        },
        hideAdvancedSettings: {
            id: `gKf0vS`,
            defaultMessage: `Hide advanced settings`
        },
        nameLabel: {
            id: `hGnzkR`,
            defaultMessage: `Name`
        },
        nameDescription: {
            id: `chatgpt.connector_settings.service_template.name.help_text`,
            defaultMessage: `Use a clear, descriptive name. Workspace members will see it, and ChatGPT uses it to decide when to use this app.`
        },
        descriptionLabel: {
            id: `W/yg6K`,
            defaultMessage: `Description`
        },
        descriptionDescription: {
            id: `chatgpt.connector_settings.service_template.description.help_text`,
            defaultMessage: `Describe what the app connects to and what it should be used for. This is shown to workspace members and used by ChatGPT.`
        },
        oauthSectionTitle: {
            id: `HMeJ7H`,
            defaultMessage: `OAuth client`
        },
        oauthClientIdLabel: {
            id: `bLXOJj`,
            defaultMessage: `OAuth client ID`
        },
        oauthClientSecretLabel: {
            id: `w2sU1b`,
            defaultMessage: `OAuth client secret`
        },
        githubAppPrivateKeyLabel: {
            id: `daxGvr`,
            defaultMessage: `GitHub App private key`
        },
        githubAppPrivateKeyUploadLabel: {
            id: `Er2aY/`,
            defaultMessage: `Drag and drop a .pem file here`
        },
        githubAppPrivateKeyUploadBrowseCta: {
            id: `cR2tO3`,
            defaultMessage: `Browse files`
        },
        githubAppPrivateKeyFileLoaded: {
            id: `maykO5`,
            defaultMessage: `Loaded {fileName}`
        },
        githubAppPrivateKeyInvalidFile: {
            id: `i+lAXo`,
            defaultMessage: `Upload a single .pem file.`
        },
        githubAppPrivateKeyReadError: {
            id: `4xlBSI`,
            defaultMessage: `Couldn't read the private key file.`
        },
        githubAppPrivateKeyPlaceholder: {
            id: `hARtyn`,
            defaultMessage: `Paste the private key generated for your GitHub App`
        },
        githubAppPrivateKeyDescription: {
            id: `fFvuel`,
            defaultMessage: `Used to mint short-lived installation tokens for repository operations.`
        },
        oauthClientScopesLabel: {
            id: `miFMbN`,
            defaultMessage: `Scopes (optional)`
        },
        oauthClientScopesPlaceholder: {
            id: `lr0K4D`,
            defaultMessage: `One value per line or comma-separated`
        },
        oauthClientScopesDescription: {
            id: `LttEvR`,
            defaultMessage: `Leave this as-is to use the template defaults, or override with your own requested scopes.`
        },
        gitlabOauthClientScopesLabel: {
            id: `A6nUJ+`,
            defaultMessage: `Scopes`
        },
        gitlabOauthClientScopesDescription: {
            id: `chatgpt.connector_settings.service_template.gitlab_oauth.scopes.help_text`,
            defaultMessage: `Enable these scopes for your GitLab OAuth application.`
        },
        oauthCallbackUrlLabel: {
            id: `acyK0J`,
            defaultMessage: `Callback URL`
        },
        gitlabOauthRedirectUriLabel: {
            id: `chatgpt.connector_settings.service_template.gitlab_oauth.redirect_uri.label`,
            defaultMessage: `Redirect URI`
        },
        callbackUrlUnavailable: {
            id: `/A0zHY`,
            defaultMessage: `Callback URL unavailable. Refresh and try again.`
        },
        gitlabRedirectUriUnavailable: {
            id: `chatgpt.connector_settings.service_template.gitlab_oauth.redirect_uri.error.unavailable`,
            defaultMessage: `Redirect URI unavailable. Refresh and try again.`
        },
        setupUrlLoading: {
            id: `mgZGUY`,
            defaultMessage: `Loading setup URL...`
        },
        setupUrlUnavailable: {
            id: `blpCdz`,
            defaultMessage: `Setup URL unavailable`
        },
        setupUrlCopied: {
            id: `nKUV24`,
            defaultMessage: `Copied`
        },
        setupUrlCopyHint: {
            id: `uDO8rc`,
            defaultMessage: `Copy`
        },
        setupUrlCopyUnavailable: {
            id: `0HX4iy`,
            defaultMessage: `Unavailable`
        },
        copyOauthCallbackUrlAriaLabel: {
            id: `ML0Qz2`,
            defaultMessage: `Copy OAuth callback URL`
        },
        copyGitlabOauthRedirectUriAriaLabel: {
            id: `chatgpt.connector_settings.service_template.gitlab_oauth.redirect_uri.copy_button.aria_label`,
            defaultMessage: `Copy OAuth redirect URI`
        },
        githubWebhookSectionTitle: {
            id: `chatgpt.connector_settings.service_template.github_webhook.section.title`,
            defaultMessage: `Webhook`
        },
        githubWebhookSetupDescription: {
            id: `chatgpt.connector_settings.service_template.github_webhook.setup.description`,
            defaultMessage: `Copy this generated secret into your GitHub App webhook settings. After creation, copy the webhook URL into the same settings.`
        },
        webhookUrlLabel: {
            id: `chatgpt.connector_settings.service_template.github_webhook.url.label`,
            defaultMessage: `Webhook URL`
        },
        githubWebhookReadyTitle: {
            id: `chatgpt.connector_settings.service_template.github_webhook.ready.title`,
            defaultMessage: `Webhook settings`
        },
        githubWebhookReadyBody: {
            id: `chatgpt.connector_settings.service_template.github_webhook.ready.body`,
            defaultMessage: `Copy these values into your GitHub App webhook settings.`
        },
        githubWebhookUncertainTitle: {
            id: `YJXHtu`,
            defaultMessage: `Keep your GitHub webhook secret`
        },
        githubWebhookUncertainBody: {
            id: `dWx7rw`,
            defaultMessage: `The draft may have been created. Save this secret, then check your drafts before trying again. The webhook URL is unavailable until the draft is confirmed.`
        },
        githubWebhookSecretLabel: {
            id: `chatgpt.connector_settings.service_template.github_webhook.secret.label`,
            defaultMessage: `Webhook secret`
        },
        gitlabInstanceSectionTitle: {
            id: `chatgpt.connector_settings.service_template.gitlab_instance.section.title`,
            defaultMessage: `GitLab instance`
        },
        gitlabHostnameLabel: {
            id: `chatgpt.connector_settings.service_template.gitlab_instance.hostname.label`,
            defaultMessage: `GitLab hostname`
        },
        gitlabHostnamePlaceholder: {
            id: `chatgpt.connector_settings.service_template.gitlab_instance.hostname.placeholder`,
            defaultMessage: `gitlab.example.com`
        },
        gitlabHostnameDescription: {
            id: `chatgpt.connector_settings.service_template.gitlab_instance.hostname.description`,
            defaultMessage: `Enter the hostname for your self-managed or Dedicated GitLab instance. Do not use gitlab.com.`
        },
        githubWebhookSecretUnavailable: {
            id: `chatgpt.connector_settings.service_template.github_webhook.secret.unavailable`,
            defaultMessage: `Webhook secret unavailable. Refresh and try again.`
        },
        copyWebhookUrlAriaLabel: {
            id: `o1YLPD`,
            defaultMessage: `Copy webhook URL`
        },
        copyGithubWebhookSecretAriaLabel: {
            id: `chatgpt.connector_settings.service_template.github_webhook.secret.copy.aria_label`,
            defaultMessage: `Copy GitHub webhook secret`
        },
        requiredField: {
            id: `KIFAz+`,
            defaultMessage: `This field is required.`
        },
        success: {
            id: `o15jgZ`,
            defaultMessage: `Draft app created`
        },
        nativeCompletionUncertain: {
            id: `gp7EnO`,
            defaultMessage: `We couldn't confirm the draft's setup. Check your drafts before trying again.`
        },
        nativeCreationPending: {
            id: `zpL/4i`,
            defaultMessage: `Draft creation is still processing. Check your drafts after it finishes.`
        },
        nativeRetryAfterReviewCta: {
            id: `eYajt+`,
            defaultMessage: `I checked drafts and found no new app`
        },
        cancelCta: {
            id: `lYbIy2`,
            defaultMessage: `Cancel`
        },
        doneCta: {
            id: `hSoBau`,
            defaultMessage: `Done`
        },
        createCta: {
            id: `+0AYMn`,
            defaultMessage: `Create draft`
        }
    })
}));
export {
    Ze as a, Qe as i, $e as n, X as r, et as t
};
//# sourceMappingURL=3864a2c9-klcsvope2yhqhg6c.js.map