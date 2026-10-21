import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    Aw as i,
    Dat as a,
    GE as o,
    I8 as s,
    J7 as c,
    JE as l,
    Kat as ee,
    LU as u,
    Nit as d,
    Oat as te,
    Ow as ne,
    Pit as re,
    Q7 as ie,
    Qat as f,
    Qot as p,
    RU as m,
    SK as h,
    U1 as g,
    V1 as ae,
    Y7 as _,
    Zot as v,
    eE as y,
    fat as b,
    k8 as x,
    lrt as oe,
    prt as S,
    q1 as C,
    qE as w,
    srt as se,
    uat as ce,
    wat as T,
    xK as le
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as ue,
    Ln as E,
    Nn as D,
    Rn as de,
    Vn as O,
    wn as k,
    zn as A
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Q as j,
    Ait as M,
    Bst as fe,
    Frt as N,
    Irt as pe,
    JPn as P,
    LQ as me,
    QQ as he,
    Qrt as ge,
    UQ as _e,
    YPn as ve,
    e$ as ye,
    eFn as be,
    gTn as xe,
    hTn as F,
    jit as Se,
    nit as Ce,
    qrt as we,
    uFn as Te,
    vWn as Ee,
    yWn as De,
    zst as Oe
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Cx as ke,
    Hm as Ae,
    Kv as je,
    Ky as Me,
    Sx as Ne,
    Um as Pe,
    qv as I,
    qy as Fe
} from "./30901919-r9pahacmzqudnt4f.js";
import {
    Bl as Ie,
    Fl as Le,
    Hl as Re,
    Il as ze,
    Ll as Be,
    Rl as Ve,
    Vl as He,
    ly as Ue,
    ny as L,
    zl as We
} from "./c2675c8c-p3x4d0bnf7e77o1n.js";
import {
    S as Ge,
    x as Ke
} from "./82782bc9-dyzlhaxotei12n1t.js";

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
    productSku: i = F.ADMIN_SETTING
}) {
    let o = B(e);
    if (!o || !z()) throw Error(`The current workspace administrator has changed.`);
    let s = await d({
            reason: `service_template_instantiation_before_write`,
            method: `POST`,
            path: `/backend-api/v2/apps/templates/{template_id}/instantiate`
        }),
        c = B(e);
    if (!s.ok || c?.accountUserId !== o.accountUserId || c?.actorUserId !== o.actorUserId) throw Error(`The current workspace administrator has changed.`);
    let l = le(e);
    if (l == null) throw Error(`The current workspace administrator has changed.`);
    return Ye ??= new _({
        baseUrl: a.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), r?.(), Ye.safePost(`/v2/apps/templates/{template_id}/instantiate`, {
        authOption: T.Required,
        disableAutomaticRetry: !0,
        additionalHeaders: {
            ...l,
            [ce]: i,
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
    xe(), C(), re(), p(), te(), b(), ie(), h(), R = e => e?.trimStart().toLowerCase().startsWith(`data:`) === !0, z = () => {
        if (typeof window > `u`) return !1;
        let e = new URL(a, window.location.href);
        return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
    }, B = e => {
        let t = ae(),
            n = v();
        if (!(!e || !t?.normalizedAccountUserId || !n?.user?.id || n.account?.id !== e || t.authUserId !== n.user.id || t.getWorkspaceId() !== e || !t.isOwnerOfAccount() && !t.isAdminOfAccount())) return {
            accountUserId: t.normalizedAccountUserId,
            actorUserId: n.user.id
        }
    }, V = e => !!e && z() && B(e) != null && le(e) != null
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
            onClose: i,
            onCreateAttempt: a,
            personalTemplateSetup: o,
            onCreated: s,
            onWorkspaceDraftCreated: l,
            onNativeDraftHandoffIncomplete: u
        } = e,
        d = A(),
        te = _e(),
        re = Ue(),
        ie = n.can_create === !1,
        f;
    t[0] === n.supported_auth_types ? f = t[1] : (f = n.supported_auth_types?.some(ot) ?? !1, t[0] = n.supported_auth_types, t[1] = f);
    let p = f,
        h;
    t[2] === n.supported_auth_types ? h = t[3] : (h = n.supported_auth_types?.some(at) ?? !1, t[2] = n.supported_auth_types, t[3] = h);
    let g = h,
        _ = n.template_id === ct,
        y = n.template_id === lt,
        b;
    t[4] !== y || t[5] !== n.template_id ? (b = y ? `https://help.openai.com/articles/20001487` : ze(n.template_id), t[4] = y, t[5] = n.template_id, t[6] = b) : b = t[6];
    let x = b,
        S;
    t[7] === n.link_params_schema ? S = t[8] : (S = Se(n.link_params_schema), t[7] = n.link_params_schema, t[8] = S);
    let C = S,
        [w, ce] = (0, H.useState)(!1),
        T = (0, H.useRef)(!0),
        le = (0, H.useRef)(!1),
        ue = (0, H.useRef)(null),
        E;
    t[9] !== o || t[10] !== n.template_id ? (E = o ? void 0 : yt(n.template_id), t[9] = o, t[10] = n.template_id, t[11] = E) : E = t[11];
    let de = E,
        O;
    t[12] === de ? O = t[13] : (O = () => bt(de), t[12] = de, t[13] = O);
    let k = (0, H.useSyncExternalStore)(_t, O, it),
        j = k != null,
        fe = (0, H.useRef)(!1),
        pe;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (pe = {}, t[14] = pe) : pe = t[14];
    let [P, me] = (0, H.useState)(pe), ve;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (ve = {}, t[15] = ve) : ve = t[15];
    let [be, xe] = (0, H.useState)(ve), [F, we] = (0, H.useState)(null), [Te, De] = (0, H.useState)(p), [ke, Ae] = (0, H.useState)(!1), [I, Fe] = (0, H.useState)(null), [Be, He] = (0, H.useState)(null), [L, We] = (0, H.useState)(null), Ke = L?.connectorId, Ye;
    t[16] !== _ || t[17] !== n.description || t[18] !== n.name || t[19] !== n.oauth_client_info?.default_scopes ? (Ye = () => ({
        name: n.name,
        description: n.description ?? ``,
        oauthClientId: ``,
        oauthClientSecret: ``,
        githubAppPrivateKey: ``,
        oauthClientScopes: (n.oauth_client_info?.default_scopes ?? []).join(`
`),
        gitlabHostname: ``,
        webhookSecret: _ ? Et() : ``
    }), t[16] = _, t[17] = n.description, t[18] = n.name, t[19] = n.oauth_client_info?.default_scopes, t[20] = Ye) : Ye = t[20];
    let [R, z] = (0, H.useState)(Ye), B;
    t[21] !== R.oauthClientId || t[22] !== R.oauthClientSecret ? (B = R.oauthClientId.trim().length > 0 || R.oauthClientSecret.trim().length > 0, t[21] = R.oauthClientId, t[22] = R.oauthClientSecret, t[23] = B) : B = t[23];
    let V = g || B,
        Xe;
    t[24] !== C || t[25] !== be ? (Xe = M(C, be), t[24] = C, t[25] = be, t[26] = Xe) : Xe = t[26];
    let Qe = Xe,
        $e = F ? Ve(F) ?? `` : ``,
        et = Ke ? Tt(Ke) : ``,
        mt, ht;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (mt = () => (T.current = !0, () => {
        T.current = !1;
        let e = ue.current;
        e && !e.dispatched && St(e.key, e.reservation), ue.current = null
    }), ht = [], t[27] = mt, t[28] = ht) : (mt = t[27], ht = t[28]), (0, H.useEffect)(mt, ht);
    let gt, W;
    t[29] === p ? (gt = t[30], W = t[31]) : (gt = () => {
        if (!p) {
            we(null), De(!1);
            return
        }
        let e = !1;
        return De(!0), we(null), Dt().then(t => {
            e || we(t)
        }).catch(() => {
            e || we(null)
        }).finally(() => {
            e || De(!1)
        }), () => {
            e = !0
        }
    }, W = [p], t[29] = p, t[30] = gt, t[31] = W), (0, H.useEffect)(gt, W);
    let G, K;
    t[32] === I ? (G = t[33], K = t[34]) : (G = () => {
        if (I == null) return;
        let e = window.setTimeout(() => {
            Fe(null)
        }, 2e3);
        return () => window.clearTimeout(e)
    }, K = [I], t[32] = I, t[33] = G, t[34] = K), (0, H.useEffect)(G, K);
    let J;
    t[35] !== i || t[36] !== s || t[37] !== u || t[38] !== l || t[39] !== o ? (J = e => {
        let t = e.nativeDraftFallback,
            n = ae(),
            r = t && n?.getWorkspaceId() === t.workspaceId && n.normalizedAccountUserId === t.accountUserId && n.authUserId === t.actorUserId && v()?.account?.id === t.workspaceId && v()?.user?.id === t.actorUserId ? t.connectorId : void 0;
        t && !r ? i() : e.nativeDraftHandoffIncomplete ? u ? u(r) : i() : o && s && e.connector ? s(e.connector) : e.pluginId && l && e.connector ? l({
            connector: e.connector,
            pluginId: e.pluginId,
            connectorId: e.connectorId
        }) : i(e.connectorId)
    }, t[35] = i, t[36] = s, t[37] = u, t[38] = l, t[39] = o, t[40] = J) : J = t[40];
    let X = J,
        kt;
    t[41] !== L || t[42] !== X || t[43] !== w || t[44] !== i ? (kt = () => {
        w || (L ? X(L) : i())
    }, t[41] = L, t[42] = X, t[43] = w, t[44] = i, t[45] = kt) : kt = t[45];
    let At = kt,
        jt;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (jt = e => {
        me(t => {
            if (!t[e]) return t;
            let n = {
                ...t
            };
            return delete n[e], n
        })
    }, t[46] = jt) : jt = t[46];
    let Z = jt,
        Mt = (e, t) => {
            xe(n => ({
                ...n,
                [e]: t
            })), o && (e === `hostname` || e === `workspace_host`) && !fe.current && z(e => ({
                ...e,
                name: he(n.name, t)
            })), Z(e)
        },
        Nt;
    t[47] === Z ? Nt = t[48] : (Nt = async e => {
        try {
            let t = await wt(e);
            z(e => ({
                ...e,
                githubAppPrivateKey: t
            })), He(e.name), Z(`githubAppPrivateKey`)
        } catch {
            m.danger(Y.githubAppPrivateKeyReadError)
        }
    }, t[47] = Z, t[48] = Nt);
    let Pt = Nt,
        Ft;
    t[49] === Pt ? Ft = t[50] : (Ft = e => {
        e.length > 0 && Pt(e[0])
    }, t[49] = Pt, t[50] = Ft);
    let It;
    t[51] !== w || t[52] !== Ft ? (It = {
        accept: pt,
        disabled: w,
        multiple: !1,
        noClick: !0,
        noKeyboard: !0,
        onDropAccepted: Ft,
        onDropRejected: rt
    }, t[51] = w, t[52] = Ft, t[53] = It) : It = t[53];
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
    t[55] !== F || t[56] !== Qe || t[57] !== X || t[58] !== d || t[59] !== re || t[60] !== y || t[61] !== _ || t[62] !== C || t[63] !== te || t[64] !== i || t[65] !== a || t[66] !== l || t[67] !== o || t[68] !== V || t[69] !== n || t[70] !== ie || t[71] !== R.description || t[72] !== R.githubAppPrivateKey || t[73] !== R.gitlabHostname || t[74] !== R.name || t[75] !== R.oauthClientId || t[76] !== R.oauthClientScopes || t[77] !== R.oauthClientSecret || t[78] !== R.webhookSecret ? (Ut = async e => {
        if (e?.preventDefault(), ie || le.current) return;
        let t = o ? void 0 : yt(n.template_id),
            r = bt(t);
        if (r) {
            m.danger(d.formatMessage(r === `pending` ? Y.nativeCreationPending : Y.nativeCompletionUncertain));
            return
        }
        let s = {},
            u = R.name.trim(),
            ne = R.description.trim(),
            f = R.oauthClientId.trim(),
            p = R.oauthClientSecret.trim(),
            h = R.githubAppPrivateKey.trim(),
            g = R.gitlabHostname.trim(),
            b = _ && V,
            x = R.webhookSecret.trim(),
            S = _;
        u || (s.name = d.formatMessage(Y.requiredField)), V && (f || (s.oauthClientId = d.formatMessage(Y.requiredField)), p || (s.oauthClientSecret = d.formatMessage(Y.requiredField)), b && !h && (s.githubAppPrivateKey = d.formatMessage(Y.requiredField)), F || (s.callbackId = d.formatMessage(y ? Y.gitlabRedirectUriUnavailable : Y.callbackUrlUnavailable))), y && !g && (s.gitlabHostname = d.formatMessage(Y.requiredField)), S && (x || (s.webhookSecret = d.formatMessage(Y.requiredField)));
        let {
            sanitizedLinkParams: w,
            errors: E,
            hasPatternErrors: D
        } = Ce(C, Qe, d);
        if (Object.assign(s, E), Object.keys(s).length > 0) {
            me(s), Object.keys(E).length > 0 && m.danger(d.formatMessage(D ? ge.invalidFieldsToast : ge.requiredFieldsToast));
            return
        }
        ce(!0), le.current = !0;
        let de = {
                name: u,
                description: ne,
                logo_url: n.logo_url,
                logo_url_dark: n.logo_url_dark,
                link_params: w,
                create_as_draft: !0
            },
            O = {};
        S && (O[dt] = x), b && (O[ut] = h), y && (O[ft] = g);
        let k = {
                ...de,
                ...Object.keys(O).length > 0 ? {
                    additional_config: O
                } : {},
                ...V ? {
                    oauth_client_id: f,
                    oauth_client_secret: p,
                    oauth_client_scopes: Ct(R.oauthClientScopes),
                    callback_id: F ?? void 0
                } : {}
            },
            A = o ? void 0 : ae()?.getWorkspaceId(),
            j = !1,
            M = !1,
            fe = !1,
            N;
        try {
            let e;
            if (o) {
                a?.();
                let t = await ye(o, k);
                e = {
                    connectorId: t.connector.id,
                    connector: t.connector,
                    pluginId: t.plugin_id?.trim() || void 0
                }
            } else if (qe({
                    nativeEnabled: !0,
                    connectorType: n.connector_type,
                    workspaceId: A,
                    requestBody: k
                }) && oe().getContext().user.customIDs?.workspace_id === A && oe().getContext().user.userID === v()?.user?.id && t != null && se(vt)) {
                let r = Symbol(`service-template-prewrite`);
                N = r, ue.current = {
                    key: t,
                    reservation: r,
                    dispatched: !1
                }, xt(t, `pending`, r), j = !0;
                let i = await Je({
                    workspaceId: A ?? ``,
                    templateId: n.template_id,
                    requestBody: k,
                    onBeforeWrite: () => {
                        if (!T.current || ue.current?.reservation !== r || q.get(window)?.get(t) !== r || bt(t) !== `pending`) throw Error(`The draft creation context has changed.`);
                        ue.current.dispatched = !0, M = !0, a?.()
                    }
                });
                e = {
                    connectorId: i.connector_id,
                    connector: i.connector,
                    pluginId: i.plugin_id?.trim() || void 0
                }
            } else {
                a?.();
                let t = await c.safePost(`/aip/connectors/templates/{template_id}/instantiate`, {
                    parameters: {
                        path: {
                            template_id: n.template_id
                        }
                    },
                    requestBody: k
                });
                e = {
                    connectorId: t.connector.id,
                    connector: t.connector,
                    pluginId: t.plugin_id?.trim() || void 0
                }
            }
            let r = ae(),
                i = M && e.connector != null && e.connectorId.trim() !== `` && e.connector.id === e.connectorId && e.connector.connector_type === `SERVICE` && !!r?.normalizedAccountUserId && !!r.authUserId && !!v()?.user?.id && r.getWorkspaceId() === A && r.authUserId === v()?.user?.id && v()?.account?.id === A && Ze({
                    connector: e.connector,
                    setup: {
                        template: n,
                        workspaceUserId: r.normalizedAccountUserId
                    }
                }),
                s = M && l != null && (!e.pluginId || !i);
            if (e.nativeDraftHandoffIncomplete = s, e.nativeDraftFallback = i && r?.normalizedAccountUserId && r.authUserId && A ? {
                    connectorId: e.connectorId,
                    workspaceId: A,
                    actorUserId: r.authUserId,
                    accountUserId: r.normalizedAccountUserId
                } : void 0, !o) {
                if (await Promise.all([re(), Ot.refetch()]), te(), M && !T.current) {
                    xt(t, `uncertain`);
                    return
                }
                s ? (xt(t, `uncertain`), m.danger(d.formatMessage(Y.nativeCompletionUncertain))) : (M && St(t), m.success(d.formatMessage(Y.success)))
            }
            S ? We(e) : X(e)
        } catch (e) {
            let n = e,
                r = M && n instanceof ee && !n.isTransportError && (n.status === 401 || n.status === 403 || Re(n));
            if (j && !M ? St(t, N) : r ? St(t) : M && xt(t, `uncertain`), j && !T.current) return;
            m.danger(M && !r ? d.formatMessage(Y.nativeCompletionUncertain) : Ie(n, d), {
                toastId: `create_service_template_draft_error`,
                analyticsToastId: `create_service_template_draft_error`
            }), M && !r && (fe = !0, S ? (We({
                connectorId: ``,
                nativeDraftHandoffIncomplete: !0
            }), ce(!1)) : i())
        }
        fe || (le.current = !1, ce(!1))
    }, t[55] = F, t[56] = Qe, t[57] = X, t[58] = d, t[59] = re, t[60] = y, t[61] = _, t[62] = C, t[63] = te, t[64] = i, t[65] = a, t[66] = l, t[67] = o, t[68] = V, t[69] = n, t[70] = ie, t[71] = R.description, t[72] = R.githubAppPrivateKey, t[73] = R.gitlabHostname, t[74] = R.name, t[75] = R.oauthClientId, t[76] = R.oauthClientScopes, t[77] = R.oauthClientSecret, t[78] = R.webhookSecret, t[79] = Ut) : Ut = t[79];
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
        } = e, c = I === t, l = !!r && !i, ee = i ? a : r || o;
        return (0, U.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, U.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3`,
                children: [(0, U.jsx)(`span`, {
                    className: `text-token-text-primary text-xs font-semibold`,
                    children: n
                }), (0, U.jsx)(`span`, {
                    className: `text-token-text-tertiary text-xs`,
                    children: (0, U.jsx)(D, {
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
                    children: ee
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
            i;
        t[83] === n ? i = t[84] : (i = (0, U.jsx)(D, {
            ...n
        }), t[83] = n, t[84] = i);
        let a = e ? Y.githubWebhookUncertainBody : Y.githubWebhookReadyBody,
            o;
        t[85] === a ? o = t[86] : (o = (0, U.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, U.jsx)(D, {
                ...a
            })
        }), t[85] = a, t[86] = o);
        let s;
        t[87] !== d || t[88] !== _ || t[89] !== Q || t[90] !== R.webhookSecret ? (s = _ ? Q({
            setupValueKey: `webhookSecret`,
            label: (0, U.jsx)(D, {
                ...Y.githubWebhookSecretLabel
            }),
            value: R.webhookSecret,
            isLoading: !1,
            loadingLabel: d.formatMessage(Y.setupUrlLoading),
            unavailableLabel: d.formatMessage(Y.githubWebhookSecretUnavailable),
            ariaLabel: d.formatMessage(Y.copyGithubWebhookSecretAriaLabel)
        }) : null, t[87] = d, t[88] = _, t[89] = Q, t[90] = R.webhookSecret, t[91] = s) : s = t[91];
        let c;
        t[92] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, U.jsx)(D, {
            ...Y.webhookUrlLabel
        }), t[92] = c) : c = t[92];
        let l;
        t[93] !== L || t[94] !== X ? (l = () => X(L), t[93] = L, t[94] = X, t[95] = l) : l = t[95];
        let ee;
        t[96] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = (0, U.jsx)(D, {
            ...Y.doneCta
        }), t[96] = ee) : ee = t[96];
        let u;
        return t[97] === l ? u = t[98] : (u = (0, U.jsx)(`div`, {
            className: `flex justify-end`,
            children: (0, U.jsx)(r, {
                color: `primary`,
                onClick: l,
                size: `large`,
                className: `w-full md:w-auto`,
                type: `button`,
                children: ee
            })
        }), t[97] = l, t[98] = u), (0, U.jsx)(ne, {
            title: i,
            isOpen: !0,
            onClose: At,
            position: `center`,
            showCloseButton: !0,
            size: `custom`,
            className: `max-h-[90vh] w-full md:max-w-[448px]`,
            testId: `modal-create-service-connector-webhook-url`,
            children: (0, U.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [o, s, Q({
                    setupValueKey: `webhook`,
                    label: c,
                    value: et,
                    isLoading: !1,
                    loadingLabel: d.formatMessage(Y.setupUrlLoading),
                    unavailableLabel: d.formatMessage(Y.setupUrlUnavailable),
                    ariaLabel: d.formatMessage(Y.copyWebhookUrlAriaLabel)
                }), u]
            })
        })
    }
    let Kt = ne,
        qt = o ? Le.connectTemplateAppModalTitle : Le.createTemplateAppModalTitle,
        Jt;
    t[99] === n.name ? Jt = t[100] : (Jt = {
        templateName: n.name
    }, t[99] = n.name, t[100] = Jt);
    let Yt;
    t[101] !== qt || t[102] !== Jt ? (Yt = (0, U.jsx)(`span`, {
        className: `flex items-center gap-1`,
        children: (0, U.jsx)(D, {
            ...qt,
            values: Jt
        })
    }), t[101] = qt, t[102] = Jt, t[103] = Yt) : Yt = t[103];
    let Xt = !w,
        Zt;
    t[104] === w ? Zt = t[105] : (Zt = e => {
        w && e.preventDefault()
    }, t[104] = w, t[105] = Zt);
    let Qt;
    t[106] !== o || t[107] !== g || t[108] !== n.name ? (Qt = o ? (0, U.jsx)(D, {
        id: `chatgpt.plugins.template_setup.description`,
        defaultMessage: `Enter your server settings, then continue to sign in.`
    }) : (0, U.jsx)(D, {
        ...g ? Y.bodyWithOauth : Y.bodyWithoutOauth,
        values: {
            templateName: n.name
        }
    }), t[106] = o, t[107] = g, t[108] = n.name, t[109] = Qt) : Qt = t[109];
    let $t;
    t[110] === x ? $t = t[111] : ($t = x ? (0, U.jsxs)(U.Fragment, {
        children: [` `, (0, U.jsxs)(Ee, {
            href: x,
            openNewTab: !0,
            className: `text-token-text-tertiary inline-flex items-center gap-1 text-sm no-underline! hover:underline!`,
            children: [(0, U.jsx)(D, {
                ...Y.setupGuideLink
            }), (0, U.jsx)(je, {
                className: `h-3 w-3`
            })]
        })]
    }) : null, t[110] = x, t[111] = $t);
    let en;
    t[112] !== Qt || t[113] !== $t ? (en = (0, U.jsxs)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: [Qt, $t]
    }), t[112] = Qt, t[113] = $t, t[114] = en) : en = t[114];
    let tn;
    t[115] !== j || t[116] !== k || t[117] !== n.template_id ? (tn = j ? (0, U.jsxs)(`div`, {
        className: `flex flex-col items-start gap-2`,
        children: [(0, U.jsx)(`p`, {
            className: `text-status-critical text-sm`,
            role: `alert`,
            children: (0, U.jsx)(D, {
                ...k === `pending` ? Y.nativeCreationPending : Y.nativeCompletionUncertain
            })
        }), k === `uncertain` ? (0, U.jsx)(r, {
            type: `button`,
            color: `secondary`,
            size: `small`,
            onClick: () => {
                let e = yt(n.template_id);
                bt(e) === `uncertain` && St(e)
            },
            children: (0, U.jsx)(D, {
                ...Y.nativeRetryAfterReviewCta
            })
        }) : null]
    }) : null, t[115] = j, t[116] = k, t[117] = n.template_id, t[118] = tn) : tn = t[118];
    let nn;
    t[119] !== en || t[120] !== tn ? (nn = (0, U.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [en, tn]
    }), t[119] = en, t[120] = tn, t[121] = nn) : nn = t[121];
    let rn;
    t[122] === Symbol.for(`react.memo_cache_sentinel`) ? (rn = (0, U.jsx)(`label`, {
        htmlFor: `service-template-name`,
        className: `mb-1 block text-sm font-medium`,
        children: (0, U.jsx)(D, {
            ...Y.nameLabel
        })
    }), t[122] = rn) : rn = t[122];
    let an;
    t[123] === d ? an = t[124] : (an = d.formatMessage(Y.nameLabel), t[123] = d, t[124] = an);
    let on = o ? void 0 : `service-template-name-help`,
        sn;
    t[125] === Z ? sn = t[126] : (sn = e => {
        fe.current = !0, z(t => ({
            ...t,
            name: e.target.value
        })), Z(`name`)
    }, t[125] = Z, t[126] = sn);
    let cn;
    t[127] !== P.name || t[128] !== w || t[129] !== an || t[130] !== on || t[131] !== sn || t[132] !== R.name ? (cn = (0, U.jsx)(N, {
        name: `service-template-name`,
        ariaLabel: an,
        "aria-describedby": on,
        value: R.name,
        onChange: sn,
        disabled: w,
        error: P.name,
        inputClassName: `bg-token-bg-primary!`
    }), t[127] = P.name, t[128] = w, t[129] = an, t[130] = on, t[131] = sn, t[132] = R.name, t[133] = cn) : cn = t[133];
    let $;
    t[134] === o ? $ = t[135] : ($ = o ? null : (0, U.jsx)(`p`, {
        id: `service-template-name-help`,
        className: `text-token-text-tertiary mt-1 text-xs`,
        children: (0, U.jsx)(D, {
            ...Y.nameDescription
        })
    }), t[134] = o, t[135] = $);
    let ln;
    t[136] !== cn || t[137] !== $ ? (ln = (0, U.jsxs)(`div`, {
        children: [rn, cn, $]
    }), t[136] = cn, t[137] = $, t[138] = ln) : ln = t[138];
    let un;
    t[139] !== d || t[140] !== w || t[141] !== o || t[142] !== R.description ? (un = o ? null : (0, U.jsxs)(`div`, {
        children: [(0, U.jsx)(`label`, {
            htmlFor: `service-template-description`,
            className: `mb-1 block text-sm font-medium`,
            children: (0, U.jsx)(D, {
                ...Y.descriptionLabel
            })
        }), (0, U.jsx)(Oe, {
            name: `service-template-description`,
            ariaLabel: d.formatMessage(Y.descriptionLabel),
            "aria-describedby": `service-template-description-help`,
            value: R.description,
            onChange: e => z(t => ({
                ...t,
                description: e.target.value
            })),
            disabled: w,
            inputClassName: `bg-token-bg-primary!`
        }), (0, U.jsx)(`p`, {
            id: `service-template-description-help`,
            className: `text-token-text-tertiary mt-1 text-xs`,
            children: (0, U.jsx)(D, {
                ...Y.descriptionDescription
            })
        })]
    }), t[139] = d, t[140] = w, t[141] = o, t[142] = R.description, t[143] = un) : un = t[143];
    let dn;
    t[144] !== ln || t[145] !== un ? (dn = (0, U.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [ln, un]
    }), t[144] = ln, t[145] = un, t[146] = dn) : dn = t[146];
    let fn = C.length > 0 ? (0, U.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, U.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [(0, U.jsx)(`h3`, {
                    className: `text-sm font-semibold`,
                    children: (0, U.jsx)(D, {
                        ...ge.sectionTitle
                    })
                }), (0, U.jsx)(`p`, {
                    className: `text-token-text-secondary text-xs`,
                    children: (0, U.jsx)(D, {
                        ...ge.sectionDescription
                    })
                })]
            }), C.map(e => {
                let t = e.required ? d.formatMessage(ge.fieldLabelRequired, {
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
                        disabled: w,
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
                    }), (0, U.jsx)(N, {
                        name: `service-template-link-param-${e.name}`,
                        ariaLabel: t,
                        value: r,
                        onChange: t => Mt(e.name, t.target.value),
                        disabled: w,
                        placeholder: d.formatMessage(ge.fieldPlaceholder, {
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
    t[147] !== P.gitlabHostname || t[148] !== d || t[149] !== y || t[150] !== w || t[151] !== Z || t[152] !== R.gitlabHostname ? (pn = y ? (0, U.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [(0, U.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, U.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, U.jsx)(D, {
                    ...Y.gitlabInstanceSectionTitle
                })
            }), (0, U.jsx)(`p`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, U.jsx)(D, {
                    ...Y.gitlabHostnameDescription
                })
            })]
        }), (0, U.jsxs)(`div`, {
            children: [(0, U.jsx)(`label`, {
                htmlFor: `service-template-gitlab-hostname`,
                className: `mb-1 block text-sm font-medium`,
                children: (0, U.jsx)(D, {
                    ...Y.gitlabHostnameLabel
                })
            }), (0, U.jsx)(N, {
                name: `service-template-gitlab-hostname`,
                ariaLabel: d.formatMessage(Y.gitlabHostnameLabel),
                value: R.gitlabHostname,
                onChange: e => {
                    z(t => ({
                        ...t,
                        gitlabHostname: e.target.value
                    })), Z(`gitlabHostname`)
                },
                disabled: w,
                error: P.gitlabHostname,
                placeholder: d.formatMessage(Y.gitlabHostnamePlaceholder),
                inputClassName: `bg-token-bg-primary!`
            })]
        })]
    }) : null, t[147] = P.gitlabHostname, t[148] = d, t[149] = y, t[150] = w, t[151] = Z, t[152] = R.gitlabHostname, t[153] = pn) : pn = t[153];
    let mn;
    t[154] !== w || t[155] !== g || t[156] !== ke || t[157] !== p ? (mn = p && !g ? (0, U.jsx)(`div`, {
        children: (0, U.jsx)(r, {
            color: `secondary`,
            size: `small`,
            type: `button`,
            "aria-expanded": ke,
            onClick: () => Ae(tt),
            disabled: w,
            children: (0, U.jsx)(D, {
                ...ke ? Y.hideAdvancedSettings : Y.showAdvancedSettings
            })
        })
    }) : null, t[154] = w, t[155] = g, t[156] = ke, t[157] = p, t[158] = mn) : mn = t[158];
    let hn = p && (g || ke) ? (0, U.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, U.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, U.jsx)(D, {
                    ...Y.oauthSectionTitle
                })
            }), Q({
                setupValueKey: `callback`,
                label: (0, U.jsx)(D, {
                    ...y ? Y.gitlabOauthRedirectUriLabel : Y.oauthCallbackUrlLabel
                }),
                value: $e,
                isLoading: Te,
                loadingLabel: d.formatMessage(Y.setupUrlLoading),
                unavailableLabel: d.formatMessage(Y.setupUrlUnavailable),
                ariaLabel: d.formatMessage(y ? Y.copyGitlabOauthRedirectUriAriaLabel : Y.copyOauthCallbackUrlAriaLabel)
            }), P.callbackId ? (0, U.jsx)(`p`, {
                className: `text-status-critical text-xs`,
                children: P.callbackId
            }) : null, (0, U.jsxs)(`div`, {
                children: [(0, U.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-id`,
                    className: `mb-1 block text-sm font-medium`,
                    children: (0, U.jsx)(D, {
                        ...Y.oauthClientIdLabel
                    })
                }), (0, U.jsx)(N, {
                    name: `service-template-oauth-client-id`,
                    ariaLabel: d.formatMessage(Y.oauthClientIdLabel),
                    value: R.oauthClientId,
                    onChange: e => {
                        z(t => ({
                            ...t,
                            oauthClientId: e.target.value
                        })), Z(`oauthClientId`)
                    },
                    disabled: w,
                    error: P.oauthClientId,
                    inputClassName: `bg-token-bg-primary!`
                })]
            }), (0, U.jsxs)(`div`, {
                children: [(0, U.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-secret`,
                    className: `mb-1 block text-sm font-medium`,
                    children: (0, U.jsx)(D, {
                        ...Y.oauthClientSecretLabel
                    })
                }), (0, U.jsx)(N, {
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
                    disabled: w,
                    error: P.oauthClientSecret,
                    inputClassName: `bg-token-bg-primary!`
                })]
            }), _ ? (0, U.jsx)(`div`, {
                className: `flex flex-col gap-4`,
                children: (0, U.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, U.jsx)(`label`, {
                        htmlFor: `service-template-github-app-private-key`,
                        className: `text-sm font-medium`,
                        children: (0, U.jsx)(D, {
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
                                children: (0, U.jsx)(D, {
                                    ...Y.githubAppPrivateKeyUploadLabel
                                })
                            }), (0, U.jsx)(r, {
                                type: `button`,
                                color: `secondary`,
                                size: `small`,
                                disabled: w,
                                onClick: () => Bt(),
                                children: (0, U.jsx)(D, {
                                    ...Y.githubAppPrivateKeyUploadBrowseCta
                                })
                            })]
                        }), Be ? (0, U.jsx)(`p`, {
                            className: `text-token-text-tertiary text-xs`,
                            children: (0, U.jsx)(D, {
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
                            })), He(null), Z(`githubAppPrivateKey`)
                        },
                        rows: 5,
                        disabled: w,
                        placeholder: d.formatMessage(Y.githubAppPrivateKeyPlaceholder),
                        "aria-label": d.formatMessage(Y.githubAppPrivateKeyLabel)
                    }), (0, U.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: (0, U.jsx)(D, {
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
                    children: (0, U.jsx)(D, {
                        ...y ? Y.gitlabOauthClientScopesLabel : Y.oauthClientScopesLabel
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
                    disabled: w,
                    readOnly: y,
                    placeholder: d.formatMessage(Y.oauthClientScopesPlaceholder)
                }), (0, U.jsx)(`p`, {
                    className: `text-token-text-tertiary text-xs`,
                    children: (0, U.jsx)(D, {
                        ...y ? Y.gitlabOauthClientScopesDescription : Y.oauthClientScopesDescription
                    })
                })]
            })]
        }) : null,
        gn;
    t[159] !== P.webhookSecret || t[160] !== d || t[161] !== _ || t[162] !== Q || t[163] !== R.webhookSecret ? (gn = _ ? (0, U.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [(0, U.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, U.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, U.jsx)(D, {
                    ...Y.githubWebhookSectionTitle
                })
            }), (0, U.jsx)(`p`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, U.jsx)(D, {
                    ...Y.githubWebhookSetupDescription
                })
            })]
        }), Q({
            setupValueKey: `webhookSecret`,
            label: (0, U.jsx)(D, {
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
    }) : null, t[159] = P.webhookSecret, t[160] = d, t[161] = _, t[162] = Q, t[163] = R.webhookSecret, t[164] = gn) : gn = t[164];
    let _n;
    t[165] === i ? _n = t[166] : (_n = () => i(), t[165] = i, t[166] = _n);
    let vn;
    t[167] === Symbol.for(`react.memo_cache_sentinel`) ? (vn = (0, U.jsx)(D, {
        ...Y.cancelCta
    }), t[167] = vn) : vn = t[167];
    let yn;
    t[168] !== w || t[169] !== _n ? (yn = (0, U.jsx)(r, {
        color: `secondary`,
        onClick: _n,
        size: `large`,
        className: `w-full md:w-auto`,
        type: `button`,
        disabled: w,
        children: vn
    }), t[168] = w, t[169] = _n, t[170] = yn) : yn = t[170];
    let bn = ie || j || w || V && Te,
        xn = o ? Le.continueSetupButton : Y.createCta,
        Sn;
    t[171] === xn ? Sn = t[172] : (Sn = (0, U.jsx)(D, {
        ...xn
    }), t[171] = xn, t[172] = Sn);
    let Cn;
    t[173] !== w || t[174] !== bn || t[175] !== Sn ? (Cn = (0, U.jsx)(r, {
        color: `primary`,
        size: `large`,
        className: `w-full min-w-[170px] md:w-auto`,
        loading: w,
        disabled: bn,
        type: `submit`,
        children: Sn
    }), t[173] = w, t[174] = bn, t[175] = Sn, t[176] = Cn) : Cn = t[176];
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
    return t[190] !== Kt || t[191] !== At || t[192] !== w || t[193] !== Yt || t[194] !== Xt || t[195] !== Zt || t[196] !== Tn ? (En = (0, U.jsx)(Kt, {
        title: Yt,
        isOpen: !0,
        onClose: At,
        position: `center`,
        showCloseButton: Xt,
        shouldIgnoreClickOutside: w,
        onEscapeKeyDown: Zt,
        size: `custom`,
        className: `max-h-[90vh] w-full md:max-w-[448px]`,
        testId: `modal-create-service-connector-from-template`,
        children: Tn
    }), t[190] = Kt, t[191] = At, t[192] = w, t[193] = Yt, t[194] = Xt, t[195] = Zt, t[196] = Tn, t[197] = En) : En = t[197], En
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
    m.danger(Y.githubAppPrivateKeyInvalidFile)
}

function it() {}

function at(e) {
    return e.type === `OAUTH` && e.client_credentials_required !== !1
}

function ot(e) {
    return e.type === `OAUTH`
}
var st, H, U, ct, lt, ut, dt, ft, pt, mt, ht, gt, W, G, K, q, _t, J, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, Y, X = e((() => {
    st = k(), Be(), j(), we(), He(), Xe(), We(), y(), L(), I(), ke(), Fe(), Ae(), i(), fe(), pe(), De(), Qe(), me(), xe(), p(), f(), Te(), P(), x(), C(), u(), l(), b(), ie(), S(), H = n(O()), Ke(), de(), U = ue(), ct = `templated_apps_GitHubEnterprise`, lt = `templated_apps_GitLab`, ut = `private_key`, dt = `webhook_secret`, ft = `hostname`, pt = {
        "application/octet-stream": [`.pem`],
        "application/pem-certificate-chain": [`.pem`],
        "application/x-pem-file": [`.pem`],
        "text/plain": [`.pem`]
    }, mt = `https://connectors.api.openai.com`, ht = 32, gt = `chatgpt.service-template-native-create-uncertain:`, W = `chatgpt:service-template-create-lock`, G = new WeakMap, K = new WeakMap, q = new WeakMap, _t = e => typeof window > `u` ? () => {} : (window.addEventListener(W, e), () => window.removeEventListener(W, e)), J = () => {
        window.dispatchEvent(new Event(W))
    }, vt = `3541874775`, yt = e => {
        let t = ae(),
            n = v(),
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
    }, Dt = async () => (await c.safeGet(`/aip/connectors/oauth/callback_id`, {})).callback_id ?? null, Ot = s(() => ({
        queryKey: be(`workspace_settings`, !0, !1),
        queryFn: async () => {
            let e = await c.safePost(`/aip/connectors/list_accessible`, {
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
                        [ce]: F.ADMIN_SETTING
                    }
                }),
                t = w();
            return {
                connectors: (e.connectors ?? []).map(e => o(e, {
                    preferIconAssets: t
                })),
                templates: e.app_templates ?? []
            }
        },
        enabled: g()?.normalizedAccountUserId != null && ve()
    })), Y = E({
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
//# sourceMappingURL=3864a2c9-gyq2kbbq40wroadu.js.map