import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    $ot as i,
    Aat as a,
    Aw as o,
    Eat as s,
    Fit as c,
    GE as l,
    I8 as u,
    Iit as d,
    J7 as f,
    JE as ee,
    Jat as te,
    LU as ne,
    Ow as re,
    Q7 as ie,
    RU as p,
    SK as m,
    U1 as h,
    V1 as ae,
    Y7 as g,
    drt as oe,
    eE as _,
    eot as v,
    est as y,
    fat as b,
    hrt as x,
    k8 as S,
    kat as C,
    lrt as se,
    mat as w,
    q1 as ce,
    qE as le,
    xK as ue
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as de,
    Ln as T,
    Nn as E,
    Rn as fe,
    Vn as D,
    wn as O,
    zn as k
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Q as pe,
    $rt as me,
    Bst as A,
    FTn as j,
    Irt as M,
    Jrt as he,
    LWn as ge,
    Lrt as _e,
    Mit as ve,
    PTn as N,
    RQ as ye,
    RWn as be,
    Vst as xe,
    WQ as Se,
    e$ as Ce,
    jit as we,
    kFn as P,
    mFn as Te,
    pFn as Ee,
    rit as De,
    t$ as Oe,
    yFn as ke
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Cx as Ae,
    Hm as je,
    Kv as Me,
    Ky as Ne,
    Sx as Pe,
    Um as Fe,
    qv as F,
    qy as Ie
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    Bl as Le,
    Fl as Re,
    Hl as ze,
    Il as Be,
    Ll as Ve,
    Rl as He,
    Vl as Ue,
    ly as We,
    ny as I,
    zl as Ge
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    S as Ke,
    x as qe
} from "./82782bc9-ca5kcqz13rn6iprj.js";

function Je({
    nativeEnabled: e,
    connectorType: t,
    workspaceId: n,
    requestBody: r
}) {
    return e && t === `SERVICE` && !!n && !L(r.logo_url) && !L(r.logo_url_dark) && B(n)
}
async function Ye({
    workspaceId: e,
    templateId: t,
    requestBody: n,
    onBeforeWrite: r,
    productSku: i = N.ADMIN_SETTING
}) {
    let a = z(e);
    if (!a || !R()) throw Error(`The current workspace administrator has changed.`);
    let o = await c({
            reason: `service_template_instantiation_before_write`,
            method: `POST`,
            path: `/backend-api/v2/apps/templates/{template_id}/instantiate`
        }),
        l = z(e);
    if (!o.ok || l?.accountUserId !== a.accountUserId || l?.actorUserId !== a.actorUserId) throw Error(`The current workspace administrator has changed.`);
    let u = ue(e);
    if (u == null) throw Error(`The current workspace administrator has changed.`);
    return Xe ??= new g({
        baseUrl: C.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), r?.(), Xe.safePost(`/v2/apps/templates/{template_id}/instantiate`, {
        authOption: s.Required,
        disableAutomaticRetry: !0,
        additionalHeaders: {
            ...u,
            [b]: i,
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
var Xe, L, R, z, B, Ze = e((() => {
    j(), ce(), d(), y(), a(), w(), ie(), m(), L = e => e?.trimStart().toLowerCase().startsWith(`data:`) === !0, R = () => {
        if (typeof window > `u`) return !1;
        let e = new URL(C, window.location.href);
        return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
    }, z = e => {
        let t = ae(),
            n = i();
        if (!(!e || !t?.normalizedAccountUserId || !n?.user?.id || n.account?.id !== e || t.authUserId !== n.user.id || t.getWorkspaceId() !== e || !t.isOwnerOfAccount() && !t.isAdminOfAccount())) return {
            accountUserId: t.normalizedAccountUserId,
            actorUserId: n.user.id
        }
    }, B = e => !!e && R() && z(e) != null && ue(e) != null
}));

function Qe({
    connector: e,
    setup: t
}) {
    return e.status === `ONLY_ME` && e.template_id === t.template.template_id && e.owners.length > 0 && e.owners.every(e => e.type === `USER`) && e.owners.some(e => e.id === t.workspaceUserId)
}
var $e = e((() => {})),
    et = t({
        CreateServiceConnectorFromTemplateModal: () => tt
    });

function tt(e) {
    "use forget";
    let t = (0, ct.c)(198),
        {
            template: n,
            onClose: a,
            onCreateAttempt: o,
            personalTemplateSetup: s,
            onCreated: c,
            onWorkspaceDraftCreated: l,
            onNativeDraftHandoffIncomplete: u
        } = e,
        d = k(),
        ee = Se(),
        ne = We(),
        ie = n.can_create === !1,
        m;
    t[0] === n.supported_auth_types ? m = t[1] : (m = n.supported_auth_types?.some(st) ?? !1, t[0] = n.supported_auth_types, t[1] = m);
    let h = m,
        g;
    t[2] === n.supported_auth_types ? g = t[3] : (g = n.supported_auth_types?.some(ot) ?? !1, t[2] = n.supported_auth_types, t[3] = g);
    let _ = g,
        v = n.template_id === lt,
        y = n.template_id === ut,
        b;
    t[4] !== y || t[5] !== n.template_id ? (b = y ? `https://help.openai.com/articles/20001487` : Be(n.template_id), t[4] = y, t[5] = n.template_id, t[6] = b) : b = t[6];
    let x = b,
        S;
    t[7] === n.link_params_schema ? S = t[8] : (S = ve(n.link_params_schema), t[7] = n.link_params_schema, t[8] = S);
    let C = S,
        [w, ce] = (0, V.useState)(!1),
        le = (0, V.useRef)(!0),
        ue = (0, V.useRef)(!1),
        de = (0, V.useRef)(null),
        T;
    t[9] !== s || t[10] !== n.template_id ? (T = s ? void 0 : bt(n.template_id), t[9] = s, t[10] = n.template_id, t[11] = T) : T = t[11];
    let fe = T,
        D;
    t[12] === fe ? D = t[13] : (D = () => xt(fe), t[12] = fe, t[13] = D);
    let O = (0, V.useSyncExternalStore)(vt, D, at),
        j = O != null,
        he = (0, V.useRef)(!1),
        _e;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (_e = {}, t[14] = _e) : _e = t[14];
    let [N, ye] = (0, V.useState)(_e), be;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (be = {}, t[15] = be) : be = t[15];
    let [xe, Ce] = (0, V.useState)(be), [P, Te] = (0, V.useState)(null), [Ee, ke] = (0, V.useState)(h), [Ae, je] = (0, V.useState)(!1), [F, Ie] = (0, V.useState)(null), [Ve, Ue] = (0, V.useState)(null), [I, Ge] = (0, V.useState)(null), qe = I?.connectorId, Xe;
    t[16] !== v || t[17] !== n.description || t[18] !== n.name || t[19] !== n.oauth_client_info?.default_scopes ? (Xe = () => ({
        name: n.name,
        description: n.description ?? ``,
        oauthClientId: ``,
        oauthClientSecret: ``,
        githubAppPrivateKey: ``,
        oauthClientScopes: (n.oauth_client_info?.default_scopes ?? []).join(`
`),
        gitlabHostname: ``,
        webhookSecret: v ? Dt() : ``
    }), t[16] = v, t[17] = n.description, t[18] = n.name, t[19] = n.oauth_client_info?.default_scopes, t[20] = Xe) : Xe = t[20];
    let [L, R] = (0, V.useState)(Xe), z;
    t[21] !== L.oauthClientId || t[22] !== L.oauthClientSecret ? (z = L.oauthClientId.trim().length > 0 || L.oauthClientSecret.trim().length > 0, t[21] = L.oauthClientId, t[22] = L.oauthClientSecret, t[23] = z) : z = t[23];
    let B = _ || z,
        Ze;
    t[24] !== C || t[25] !== xe ? (Ze = we(C, xe), t[24] = C, t[25] = xe, t[26] = Ze) : Ze = t[26];
    let $e = Ze,
        et = P ? He(P) ?? `` : ``,
        tt = qe ? Et(qe) : ``,
        ht, gt;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (ht = () => (le.current = !0, () => {
        le.current = !1;
        let e = de.current;
        e && !e.dispatched && Ct(e.key, e.reservation), de.current = null
    }), gt = [], t[27] = ht, t[28] = gt) : (ht = t[27], gt = t[28]), (0, V.useEffect)(ht, gt);
    let _t, U;
    t[29] === h ? (_t = t[30], U = t[31]) : (_t = () => {
        if (!h) {
            Te(null), ke(!1);
            return
        }
        let e = !1;
        return ke(!0), Te(null), Ot().then(t => {
            e || Te(t)
        }).catch(() => {
            e || Te(null)
        }).finally(() => {
            e || ke(!1)
        }), () => {
            e = !0
        }
    }, U = [h], t[29] = h, t[30] = _t, t[31] = U), (0, V.useEffect)(_t, U);
    let W, G;
    t[32] === F ? (W = t[33], G = t[34]) : (W = () => {
        if (F == null) return;
        let e = window.setTimeout(() => {
            Ie(null)
        }, 2e3);
        return () => window.clearTimeout(e)
    }, G = [F], t[32] = F, t[33] = W, t[34] = G), (0, V.useEffect)(W, G);
    let q;
    t[35] !== a || t[36] !== c || t[37] !== u || t[38] !== l || t[39] !== s ? (q = e => {
        let t = e.nativeDraftFallback,
            n = ae(),
            r = t && n?.getWorkspaceId() === t.workspaceId && n.normalizedAccountUserId === t.accountUserId && n.authUserId === t.actorUserId && i()?.account?.id === t.workspaceId && i()?.user?.id === t.actorUserId ? t.connectorId : void 0;
        t && !r ? a() : e.nativeDraftHandoffIncomplete ? u ? u(r) : a() : s && c && e.connector ? c(e.connector) : e.pluginId && l && e.connector ? l({
            connector: e.connector,
            pluginId: e.pluginId,
            connectorId: e.connectorId
        }) : a(e.connectorId)
    }, t[35] = a, t[36] = c, t[37] = u, t[38] = l, t[39] = s, t[40] = q) : q = t[40];
    let Y = q,
        At;
    t[41] !== I || t[42] !== Y || t[43] !== w || t[44] !== a ? (At = () => {
        w || (I ? Y(I) : a())
    }, t[41] = I, t[42] = Y, t[43] = w, t[44] = a, t[45] = At) : At = t[45];
    let jt = At,
        Mt;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (Mt = e => {
        ye(t => {
            if (!t[e]) return t;
            let n = {
                ...t
            };
            return delete n[e], n
        })
    }, t[46] = Mt) : Mt = t[46];
    let X = Mt,
        Nt = (e, t) => {
            Ce(n => ({
                ...n,
                [e]: t
            })), s && (e === `hostname` || e === `workspace_host`) && !he.current && R(e => ({
                ...e,
                name: pe(n.name, t)
            })), X(e)
        },
        Pt;
    t[47] === X ? Pt = t[48] : (Pt = async e => {
        try {
            let t = await Tt(e);
            R(e => ({
                ...e,
                githubAppPrivateKey: t
            })), Ue(e.name), X(`githubAppPrivateKey`)
        } catch {
            p.danger(J.githubAppPrivateKeyReadError)
        }
    }, t[47] = X, t[48] = Pt);
    let Ft = Pt,
        It;
    t[49] === Ft ? It = t[50] : (It = e => {
        e.length > 0 && Ft(e[0])
    }, t[49] = Ft, t[50] = It);
    let Lt;
    t[51] !== w || t[52] !== It ? (Lt = {
        accept: mt,
        disabled: w,
        multiple: !1,
        noClick: !0,
        noKeyboard: !0,
        onDropAccepted: It,
        onDropRejected: it
    }, t[51] = w, t[52] = It, t[53] = Lt) : Lt = t[53];
    let {
        getInputProps: Rt,
        getRootProps: zt,
        isDragActive: Bt,
        open: Vt
    } = Ke(Lt), Ht;
    t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (Ht = async (e, t) => {
        if (t) try {
            await navigator.clipboard.writeText(t), Ie(e)
        } catch {
            Ie(null)
        }
    }, t[54] = Ht) : Ht = t[54];
    let Ut = Ht,
        Wt;
    t[55] !== P || t[56] !== $e || t[57] !== Y || t[58] !== d || t[59] !== ne || t[60] !== y || t[61] !== v || t[62] !== C || t[63] !== ee || t[64] !== a || t[65] !== o || t[66] !== l || t[67] !== s || t[68] !== B || t[69] !== n || t[70] !== ie || t[71] !== L.description || t[72] !== L.githubAppPrivateKey || t[73] !== L.gitlabHostname || t[74] !== L.name || t[75] !== L.oauthClientId || t[76] !== L.oauthClientScopes || t[77] !== L.oauthClientSecret || t[78] !== L.webhookSecret ? (Wt = async e => {
        if (e?.preventDefault(), ie || ue.current) return;
        let t = s ? void 0 : bt(n.template_id),
            r = xt(t);
        if (r) {
            p.danger(d.formatMessage(r === `pending` ? J.nativeCreationPending : J.nativeCompletionUncertain));
            return
        }
        let c = {},
            u = L.name.trim(),
            re = L.description.trim(),
            m = L.oauthClientId.trim(),
            h = L.oauthClientSecret.trim(),
            g = L.githubAppPrivateKey.trim(),
            _ = L.gitlabHostname.trim(),
            b = v && B,
            x = L.webhookSecret.trim(),
            S = v;
        u || (c.name = d.formatMessage(J.requiredField)), B && (m || (c.oauthClientId = d.formatMessage(J.requiredField)), h || (c.oauthClientSecret = d.formatMessage(J.requiredField)), b && !g && (c.githubAppPrivateKey = d.formatMessage(J.requiredField)), P || (c.callbackId = d.formatMessage(y ? J.gitlabRedirectUriUnavailable : J.callbackUrlUnavailable))), y && !_ && (c.gitlabHostname = d.formatMessage(J.requiredField)), S && (x || (c.webhookSecret = d.formatMessage(J.requiredField)));
        let {
            sanitizedLinkParams: w,
            errors: T,
            hasPatternErrors: E
        } = De(C, $e, d);
        if (Object.assign(c, T), Object.keys(c).length > 0) {
            ye(c), Object.keys(T).length > 0 && p.danger(d.formatMessage(E ? me.invalidFieldsToast : me.requiredFieldsToast));
            return
        }
        ce(!0), ue.current = !0;
        let fe = {
                name: u,
                description: re,
                logo_url: n.logo_url,
                logo_url_dark: n.logo_url_dark,
                link_params: w,
                create_as_draft: !0
            },
            D = {};
        S && (D[ft] = x), b && (D[dt] = g), y && (D[pt] = _);
        let O = {
                ...fe,
                ...Object.keys(D).length > 0 ? {
                    additional_config: D
                } : {},
                ...B ? {
                    oauth_client_id: m,
                    oauth_client_secret: h,
                    oauth_client_scopes: wt(L.oauthClientScopes),
                    callback_id: P ?? void 0
                } : {}
            },
            k = s ? void 0 : ae()?.getWorkspaceId(),
            pe = !1,
            A = !1,
            j = !1,
            M;
        try {
            let e;
            if (s) {
                o?.();
                let t = await Oe(s, O);
                e = {
                    connectorId: t.connector.id,
                    connector: t.connector,
                    pluginId: t.plugin_id?.trim() || void 0
                }
            } else if (Je({
                    nativeEnabled: !0,
                    connectorType: n.connector_type,
                    workspaceId: k,
                    requestBody: O
                }) && oe().getContext().user.customIDs?.workspace_id === k && oe().getContext().user.userID === i()?.user?.id && t != null && se(yt)) {
                let r = Symbol(`service-template-prewrite`);
                M = r, de.current = {
                    key: t,
                    reservation: r,
                    dispatched: !1
                }, St(t, `pending`, r), pe = !0;
                let i = await Ye({
                    workspaceId: k ?? ``,
                    templateId: n.template_id,
                    requestBody: O,
                    onBeforeWrite: () => {
                        if (!le.current || de.current?.reservation !== r || K.get(window)?.get(t) !== r || xt(t) !== `pending`) throw Error(`The draft creation context has changed.`);
                        de.current.dispatched = !0, A = !0, o?.()
                    }
                });
                e = {
                    connectorId: i.connector_id,
                    connector: i.connector,
                    pluginId: i.plugin_id?.trim() || void 0
                }
            } else {
                o?.();
                let t = await f.safePost(`/aip/connectors/templates/{template_id}/instantiate`, {
                    parameters: {
                        path: {
                            template_id: n.template_id
                        }
                    },
                    requestBody: O
                });
                e = {
                    connectorId: t.connector.id,
                    connector: t.connector,
                    pluginId: t.plugin_id?.trim() || void 0
                }
            }
            let r = ae(),
                a = A && e.connector != null && e.connectorId.trim() !== `` && e.connector.id === e.connectorId && e.connector.connector_type === `SERVICE` && !!r?.normalizedAccountUserId && !!r.authUserId && !!i()?.user?.id && r.getWorkspaceId() === k && r.authUserId === i()?.user?.id && i()?.account?.id === k && Qe({
                    connector: e.connector,
                    setup: {
                        template: n,
                        workspaceUserId: r.normalizedAccountUserId
                    }
                }),
                c = A && l != null && (!e.pluginId || !a);
            if (e.nativeDraftHandoffIncomplete = c, e.nativeDraftFallback = a && r?.normalizedAccountUserId && r.authUserId && k ? {
                    connectorId: e.connectorId,
                    workspaceId: k,
                    actorUserId: r.authUserId,
                    accountUserId: r.normalizedAccountUserId
                } : void 0, !s) {
                if (await Promise.all([ne(), kt.refetch()]), ee(), A && !le.current) {
                    St(t, `uncertain`);
                    return
                }
                c ? (St(t, `uncertain`), p.danger(d.formatMessage(J.nativeCompletionUncertain))) : (A && Ct(t), p.success(d.formatMessage(J.success)))
            }
            S ? Ge(e) : Y(e)
        } catch (e) {
            let n = e,
                r = A && n instanceof te && !n.isTransportError && (n.status === 401 || n.status === 403 || ze(n));
            if (pe && !A ? Ct(t, M) : r ? Ct(t) : A && St(t, `uncertain`), pe && !le.current) return;
            p.danger(A && !r ? d.formatMessage(J.nativeCompletionUncertain) : Le(n, d), {
                toastId: `create_service_template_draft_error`,
                analyticsToastId: `create_service_template_draft_error`
            }), A && !r && (j = !0, S ? (Ge({
                connectorId: ``,
                nativeDraftHandoffIncomplete: !0
            }), ce(!1)) : a())
        }
        j || (ue.current = !1, ce(!1))
    }, t[55] = P, t[56] = $e, t[57] = Y, t[58] = d, t[59] = ne, t[60] = y, t[61] = v, t[62] = C, t[63] = ee, t[64] = a, t[65] = o, t[66] = l, t[67] = s, t[68] = B, t[69] = n, t[70] = ie, t[71] = L.description, t[72] = L.githubAppPrivateKey, t[73] = L.gitlabHostname, t[74] = L.name, t[75] = L.oauthClientId, t[76] = L.oauthClientScopes, t[77] = L.oauthClientSecret, t[78] = L.webhookSecret, t[79] = Wt) : Wt = t[79];
    let Gt = Wt,
        Kt;
    t[80] !== F || t[81] !== d ? (Kt = e => {
        let {
            setupValueKey: t,
            label: n,
            value: r,
            isLoading: i,
            loadingLabel: a,
            unavailableLabel: o,
            ariaLabel: s
        } = e, c = F === t, l = !!r && !i, u = i ? a : r || o;
        return (0, H.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, H.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3`,
                children: [(0, H.jsx)(`span`, {
                    className: `text-token-text-primary text-xs font-semibold`,
                    children: n
                }), (0, H.jsx)(`span`, {
                    className: `text-token-text-tertiary text-xs`,
                    children: (0, H.jsx)(E, {
                        ...c ? J.setupUrlCopied : l ? J.setupUrlCopyHint : J.setupUrlCopyUnavailable
                    })
                })]
            }), (0, H.jsxs)(`button`, {
                type: `button`,
                onClick: () => void Ut(t, r),
                disabled: !l,
                className: `border-token-border-light bg-token-bg-primary flex w-full items-center justify-between gap-3 rounded-md border px-3 py-2 text-start text-xs shadow-sm transition-colors ${l?`hover:bg-token-main-surface-secondary`:`cursor-default opacity-70`}`,
                "aria-label": s,
                title: l ? d.formatMessage(J.setupUrlCopyHint) : void 0,
                children: [(0, H.jsx)(`span`, {
                    className: `text-token-text-secondary font-mono break-all`,
                    children: u
                }), (0, H.jsx)(`span`, {
                    className: `border-token-border-light bg-token-bg-secondary text-token-text-secondary flex h-8 w-8 shrink-0 items-center justify-center rounded-md border`,
                    children: c ? (0, H.jsx)(Pe, {
                        className: `icon-sm`
                    }) : (0, H.jsx)(Ne, {
                        className: `icon-sm`
                    })
                })]
            })]
        })
    }, t[80] = F, t[81] = d, t[82] = Kt) : Kt = t[82];
    let Z = Kt;
    if (I) {
        let e = !qe,
            n = e ? J.githubWebhookUncertainTitle : J.githubWebhookReadyTitle,
            i;
        t[83] === n ? i = t[84] : (i = (0, H.jsx)(E, {
            ...n
        }), t[83] = n, t[84] = i);
        let a = e ? J.githubWebhookUncertainBody : J.githubWebhookReadyBody,
            o;
        t[85] === a ? o = t[86] : (o = (0, H.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, H.jsx)(E, {
                ...a
            })
        }), t[85] = a, t[86] = o);
        let s;
        t[87] !== d || t[88] !== v || t[89] !== Z || t[90] !== L.webhookSecret ? (s = v ? Z({
            setupValueKey: `webhookSecret`,
            label: (0, H.jsx)(E, {
                ...J.githubWebhookSecretLabel
            }),
            value: L.webhookSecret,
            isLoading: !1,
            loadingLabel: d.formatMessage(J.setupUrlLoading),
            unavailableLabel: d.formatMessage(J.githubWebhookSecretUnavailable),
            ariaLabel: d.formatMessage(J.copyGithubWebhookSecretAriaLabel)
        }) : null, t[87] = d, t[88] = v, t[89] = Z, t[90] = L.webhookSecret, t[91] = s) : s = t[91];
        let c;
        t[92] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, H.jsx)(E, {
            ...J.webhookUrlLabel
        }), t[92] = c) : c = t[92];
        let l;
        t[93] !== I || t[94] !== Y ? (l = () => Y(I), t[93] = I, t[94] = Y, t[95] = l) : l = t[95];
        let u;
        t[96] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, H.jsx)(E, {
            ...J.doneCta
        }), t[96] = u) : u = t[96];
        let f;
        return t[97] === l ? f = t[98] : (f = (0, H.jsx)(`div`, {
            className: `flex justify-end`,
            children: (0, H.jsx)(r, {
                color: `primary`,
                onClick: l,
                size: `large`,
                className: `w-full md:w-auto`,
                type: `button`,
                children: u
            })
        }), t[97] = l, t[98] = f), (0, H.jsx)(re, {
            title: i,
            isOpen: !0,
            onClose: jt,
            position: `center`,
            showCloseButton: !0,
            size: `custom`,
            className: `max-h-[90vh] w-full md:max-w-[448px]`,
            testId: `modal-create-service-connector-webhook-url`,
            children: (0, H.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [o, s, Z({
                    setupValueKey: `webhook`,
                    label: c,
                    value: tt,
                    isLoading: !1,
                    loadingLabel: d.formatMessage(J.setupUrlLoading),
                    unavailableLabel: d.formatMessage(J.setupUrlUnavailable),
                    ariaLabel: d.formatMessage(J.copyWebhookUrlAriaLabel)
                }), f]
            })
        })
    }
    let qt = re,
        Jt = s ? Re.connectTemplateAppModalTitle : Re.createTemplateAppModalTitle,
        Yt;
    t[99] === n.name ? Yt = t[100] : (Yt = {
        templateName: n.name
    }, t[99] = n.name, t[100] = Yt);
    let Xt;
    t[101] !== Jt || t[102] !== Yt ? (Xt = (0, H.jsx)(`span`, {
        className: `flex items-center gap-1`,
        children: (0, H.jsx)(E, {
            ...Jt,
            values: Yt
        })
    }), t[101] = Jt, t[102] = Yt, t[103] = Xt) : Xt = t[103];
    let Zt = !w,
        Qt;
    t[104] === w ? Qt = t[105] : (Qt = e => {
        w && e.preventDefault()
    }, t[104] = w, t[105] = Qt);
    let $t;
    t[106] !== s || t[107] !== _ || t[108] !== n.name ? ($t = s ? (0, H.jsx)(E, {
        id: `chatgpt.plugins.template_setup.description`,
        defaultMessage: `Enter your server settings, then continue to sign in.`
    }) : (0, H.jsx)(E, {
        ..._ ? J.bodyWithOauth : J.bodyWithoutOauth,
        values: {
            templateName: n.name
        }
    }), t[106] = s, t[107] = _, t[108] = n.name, t[109] = $t) : $t = t[109];
    let en;
    t[110] === x ? en = t[111] : (en = x ? (0, H.jsxs)(H.Fragment, {
        children: [` `, (0, H.jsxs)(ge, {
            href: x,
            openNewTab: !0,
            className: `text-token-text-tertiary inline-flex items-center gap-1 text-sm no-underline! hover:underline!`,
            children: [(0, H.jsx)(E, {
                ...J.setupGuideLink
            }), (0, H.jsx)(Me, {
                className: `h-3 w-3`
            })]
        })]
    }) : null, t[110] = x, t[111] = en);
    let tn;
    t[112] !== $t || t[113] !== en ? (tn = (0, H.jsxs)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: [$t, en]
    }), t[112] = $t, t[113] = en, t[114] = tn) : tn = t[114];
    let nn;
    t[115] !== j || t[116] !== O || t[117] !== n.template_id ? (nn = j ? (0, H.jsxs)(`div`, {
        className: `flex flex-col items-start gap-2`,
        children: [(0, H.jsx)(`p`, {
            className: `text-status-critical text-sm`,
            role: `alert`,
            children: (0, H.jsx)(E, {
                ...O === `pending` ? J.nativeCreationPending : J.nativeCompletionUncertain
            })
        }), O === `uncertain` ? (0, H.jsx)(r, {
            type: `button`,
            color: `secondary`,
            size: `small`,
            onClick: () => {
                let e = bt(n.template_id);
                xt(e) === `uncertain` && Ct(e)
            },
            children: (0, H.jsx)(E, {
                ...J.nativeRetryAfterReviewCta
            })
        }) : null]
    }) : null, t[115] = j, t[116] = O, t[117] = n.template_id, t[118] = nn) : nn = t[118];
    let rn;
    t[119] !== tn || t[120] !== nn ? (rn = (0, H.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [tn, nn]
    }), t[119] = tn, t[120] = nn, t[121] = rn) : rn = t[121];
    let an;
    t[122] === Symbol.for(`react.memo_cache_sentinel`) ? (an = (0, H.jsx)(`label`, {
        htmlFor: `service-template-name`,
        className: `mb-1 block text-sm font-medium`,
        children: (0, H.jsx)(E, {
            ...J.nameLabel
        })
    }), t[122] = an) : an = t[122];
    let on;
    t[123] === d ? on = t[124] : (on = d.formatMessage(J.nameLabel), t[123] = d, t[124] = on);
    let sn = s ? void 0 : `service-template-name-help`,
        cn;
    t[125] === X ? cn = t[126] : (cn = e => {
        he.current = !0, R(t => ({
            ...t,
            name: e.target.value
        })), X(`name`)
    }, t[125] = X, t[126] = cn);
    let ln;
    t[127] !== N.name || t[128] !== w || t[129] !== on || t[130] !== sn || t[131] !== cn || t[132] !== L.name ? (ln = (0, H.jsx)(M, {
        name: `service-template-name`,
        ariaLabel: on,
        "aria-describedby": sn,
        value: L.name,
        onChange: cn,
        disabled: w,
        error: N.name,
        inputClassName: `bg-token-bg-primary!`
    }), t[127] = N.name, t[128] = w, t[129] = on, t[130] = sn, t[131] = cn, t[132] = L.name, t[133] = ln) : ln = t[133];
    let Q;
    t[134] === s ? Q = t[135] : (Q = s ? null : (0, H.jsx)(`p`, {
        id: `service-template-name-help`,
        className: `text-token-text-tertiary mt-1 text-xs`,
        children: (0, H.jsx)(E, {
            ...J.nameDescription
        })
    }), t[134] = s, t[135] = Q);
    let un;
    t[136] !== ln || t[137] !== Q ? (un = (0, H.jsxs)(`div`, {
        children: [an, ln, Q]
    }), t[136] = ln, t[137] = Q, t[138] = un) : un = t[138];
    let dn;
    t[139] !== d || t[140] !== w || t[141] !== s || t[142] !== L.description ? (dn = s ? null : (0, H.jsxs)(`div`, {
        children: [(0, H.jsx)(`label`, {
            htmlFor: `service-template-description`,
            className: `mb-1 block text-sm font-medium`,
            children: (0, H.jsx)(E, {
                ...J.descriptionLabel
            })
        }), (0, H.jsx)(A, {
            name: `service-template-description`,
            ariaLabel: d.formatMessage(J.descriptionLabel),
            "aria-describedby": `service-template-description-help`,
            value: L.description,
            onChange: e => R(t => ({
                ...t,
                description: e.target.value
            })),
            disabled: w,
            inputClassName: `bg-token-bg-primary!`
        }), (0, H.jsx)(`p`, {
            id: `service-template-description-help`,
            className: `text-token-text-tertiary mt-1 text-xs`,
            children: (0, H.jsx)(E, {
                ...J.descriptionDescription
            })
        })]
    }), t[139] = d, t[140] = w, t[141] = s, t[142] = L.description, t[143] = dn) : dn = t[143];
    let fn;
    t[144] !== un || t[145] !== dn ? (fn = (0, H.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [un, dn]
    }), t[144] = un, t[145] = dn, t[146] = fn) : fn = t[146];
    let pn = C.length > 0 ? (0, H.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, H.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [(0, H.jsx)(`h3`, {
                    className: `text-sm font-semibold`,
                    children: (0, H.jsx)(E, {
                        ...me.sectionTitle
                    })
                }), (0, H.jsx)(`p`, {
                    className: `text-token-text-secondary text-xs`,
                    children: (0, H.jsx)(E, {
                        ...me.sectionDescription
                    })
                })]
            }), C.map(e => {
                let t = e.required ? d.formatMessage(me.fieldLabelRequired, {
                        label: e.title
                    }) : e.title,
                    n = N[e.name],
                    r = $e[e.name] ?? ``;
                return e.enumValues && e.enumValues.length > 0 ? (0, H.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, H.jsx)(`label`, {
                        htmlFor: `service-template-link-param-${e.name}`,
                        className: `text-sm font-medium`,
                        children: t
                    }), (0, H.jsx)(`select`, {
                        id: `service-template-link-param-${e.name}`,
                        className: `border-token-border-light bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:ring-1 focus:outline-none`,
                        value: r,
                        onChange: t => Nt(e.name, t.target.value),
                        disabled: w,
                        children: e.enumValues.map(rt)
                    }), e.description ? (0, H.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: e.description
                    }) : null, n ? (0, H.jsx)(`p`, {
                        className: `text-status-critical text-xs`,
                        children: n
                    }) : null]
                }, e.name) : (0, H.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, H.jsx)(`label`, {
                        htmlFor: `service-template-link-param-${e.name}`,
                        className: `mb-1 block text-sm font-medium`,
                        children: t
                    }), (0, H.jsx)(M, {
                        name: `service-template-link-param-${e.name}`,
                        ariaLabel: t,
                        value: r,
                        onChange: t => Nt(e.name, t.target.value),
                        disabled: w,
                        placeholder: d.formatMessage(me.fieldPlaceholder, {
                            label: e.example ?? e.title
                        }),
                        error: n,
                        inputClassName: `bg-token-bg-primary!`
                    }), e.description ? (0, H.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: e.description
                    }) : null]
                }, e.name)
            })]
        }) : null,
        mn;
    t[147] !== N.gitlabHostname || t[148] !== d || t[149] !== y || t[150] !== w || t[151] !== X || t[152] !== L.gitlabHostname ? (mn = y ? (0, H.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [(0, H.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, H.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, H.jsx)(E, {
                    ...J.gitlabInstanceSectionTitle
                })
            }), (0, H.jsx)(`p`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, H.jsx)(E, {
                    ...J.gitlabHostnameDescription
                })
            })]
        }), (0, H.jsxs)(`div`, {
            children: [(0, H.jsx)(`label`, {
                htmlFor: `service-template-gitlab-hostname`,
                className: `mb-1 block text-sm font-medium`,
                children: (0, H.jsx)(E, {
                    ...J.gitlabHostnameLabel
                })
            }), (0, H.jsx)(M, {
                name: `service-template-gitlab-hostname`,
                ariaLabel: d.formatMessage(J.gitlabHostnameLabel),
                value: L.gitlabHostname,
                onChange: e => {
                    R(t => ({
                        ...t,
                        gitlabHostname: e.target.value
                    })), X(`gitlabHostname`)
                },
                disabled: w,
                error: N.gitlabHostname,
                placeholder: d.formatMessage(J.gitlabHostnamePlaceholder),
                inputClassName: `bg-token-bg-primary!`
            })]
        })]
    }) : null, t[147] = N.gitlabHostname, t[148] = d, t[149] = y, t[150] = w, t[151] = X, t[152] = L.gitlabHostname, t[153] = mn) : mn = t[153];
    let hn;
    t[154] !== w || t[155] !== _ || t[156] !== Ae || t[157] !== h ? (hn = h && !_ ? (0, H.jsx)(`div`, {
        children: (0, H.jsx)(r, {
            color: `secondary`,
            size: `small`,
            type: `button`,
            "aria-expanded": Ae,
            onClick: () => je(nt),
            disabled: w,
            children: (0, H.jsx)(E, {
                ...Ae ? J.hideAdvancedSettings : J.showAdvancedSettings
            })
        })
    }) : null, t[154] = w, t[155] = _, t[156] = Ae, t[157] = h, t[158] = hn) : hn = t[158];
    let gn = h && (_ || Ae) ? (0, H.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, H.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, H.jsx)(E, {
                    ...J.oauthSectionTitle
                })
            }), Z({
                setupValueKey: `callback`,
                label: (0, H.jsx)(E, {
                    ...y ? J.gitlabOauthRedirectUriLabel : J.oauthCallbackUrlLabel
                }),
                value: et,
                isLoading: Ee,
                loadingLabel: d.formatMessage(J.setupUrlLoading),
                unavailableLabel: d.formatMessage(J.setupUrlUnavailable),
                ariaLabel: d.formatMessage(y ? J.copyGitlabOauthRedirectUriAriaLabel : J.copyOauthCallbackUrlAriaLabel)
            }), N.callbackId ? (0, H.jsx)(`p`, {
                className: `text-status-critical text-xs`,
                children: N.callbackId
            }) : null, (0, H.jsxs)(`div`, {
                children: [(0, H.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-id`,
                    className: `mb-1 block text-sm font-medium`,
                    children: (0, H.jsx)(E, {
                        ...J.oauthClientIdLabel
                    })
                }), (0, H.jsx)(M, {
                    name: `service-template-oauth-client-id`,
                    ariaLabel: d.formatMessage(J.oauthClientIdLabel),
                    value: L.oauthClientId,
                    onChange: e => {
                        R(t => ({
                            ...t,
                            oauthClientId: e.target.value
                        })), X(`oauthClientId`)
                    },
                    disabled: w,
                    error: N.oauthClientId,
                    inputClassName: `bg-token-bg-primary!`
                })]
            }), (0, H.jsxs)(`div`, {
                children: [(0, H.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-secret`,
                    className: `mb-1 block text-sm font-medium`,
                    children: (0, H.jsx)(E, {
                        ...J.oauthClientSecretLabel
                    })
                }), (0, H.jsx)(M, {
                    name: `service-template-oauth-client-secret`,
                    ariaLabel: d.formatMessage(J.oauthClientSecretLabel),
                    type: `password`,
                    value: L.oauthClientSecret,
                    onChange: e => {
                        R(t => ({
                            ...t,
                            oauthClientSecret: e.target.value
                        })), X(`oauthClientSecret`)
                    },
                    disabled: w,
                    error: N.oauthClientSecret,
                    inputClassName: `bg-token-bg-primary!`
                })]
            }), v ? (0, H.jsx)(`div`, {
                className: `flex flex-col gap-4`,
                children: (0, H.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, H.jsx)(`label`, {
                        htmlFor: `service-template-github-app-private-key`,
                        className: `text-sm font-medium`,
                        children: (0, H.jsx)(E, {
                            ...J.githubAppPrivateKeyLabel
                        })
                    }), (0, H.jsxs)(`div`, {
                        className: `flex flex-col gap-2`,
                        children: [(0, H.jsxs)(`div`, {
                            ...zt({
                                className: `border-token-border-light bg-token-bg-primary flex flex-col items-center gap-2 rounded-md border border-dashed px-4 py-5 text-center transition-colors ${Bt?`border-token-text-primary bg-token-main-surface-secondary`:``}`
                            }),
                            children: [(0, H.jsx)(`input`, {
                                ...Rt()
                            }), (0, H.jsx)(Fe, {
                                className: `text-token-text-secondary h-5 w-5`
                            }), (0, H.jsx)(`p`, {
                                className: `text-token-text-secondary text-sm`,
                                children: (0, H.jsx)(E, {
                                    ...J.githubAppPrivateKeyUploadLabel
                                })
                            }), (0, H.jsx)(r, {
                                type: `button`,
                                color: `secondary`,
                                size: `small`,
                                disabled: w,
                                onClick: () => Vt(),
                                children: (0, H.jsx)(E, {
                                    ...J.githubAppPrivateKeyUploadBrowseCta
                                })
                            })]
                        }), Ve ? (0, H.jsx)(`p`, {
                            className: `text-token-text-tertiary text-xs`,
                            children: (0, H.jsx)(E, {
                                ...J.githubAppPrivateKeyFileLoaded,
                                values: {
                                    fileName: Ve
                                }
                            })
                        }) : null]
                    }), (0, H.jsx)(`textarea`, {
                        id: `service-template-github-app-private-key`,
                        className: `border-token-border-light bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary w-full rounded-md border px-3 py-2 font-mono text-sm shadow-sm focus:ring-1 focus:outline-none`,
                        value: L.githubAppPrivateKey,
                        onChange: e => {
                            R(t => ({
                                ...t,
                                githubAppPrivateKey: e.target.value
                            })), Ue(null), X(`githubAppPrivateKey`)
                        },
                        rows: 5,
                        disabled: w,
                        placeholder: d.formatMessage(J.githubAppPrivateKeyPlaceholder),
                        "aria-label": d.formatMessage(J.githubAppPrivateKeyLabel)
                    }), (0, H.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: (0, H.jsx)(E, {
                            ...J.githubAppPrivateKeyDescription
                        })
                    }), N.githubAppPrivateKey ? (0, H.jsx)(`p`, {
                        className: `text-status-critical text-xs`,
                        children: N.githubAppPrivateKey
                    }) : null]
                })
            }) : null, (0, H.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [(0, H.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-scopes`,
                    className: `text-sm font-medium`,
                    children: (0, H.jsx)(E, {
                        ...y ? J.gitlabOauthClientScopesLabel : J.oauthClientScopesLabel
                    })
                }), (0, H.jsx)(`textarea`, {
                    id: `service-template-oauth-client-scopes`,
                    className: `border-token-border-light bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:ring-1 focus:outline-none`,
                    value: L.oauthClientScopes,
                    onChange: e => R(t => ({
                        ...t,
                        oauthClientScopes: e.target.value
                    })),
                    rows: 3,
                    disabled: w,
                    readOnly: y,
                    placeholder: d.formatMessage(J.oauthClientScopesPlaceholder)
                }), (0, H.jsx)(`p`, {
                    className: `text-token-text-tertiary text-xs`,
                    children: (0, H.jsx)(E, {
                        ...y ? J.gitlabOauthClientScopesDescription : J.oauthClientScopesDescription
                    })
                })]
            })]
        }) : null,
        _n;
    t[159] !== N.webhookSecret || t[160] !== d || t[161] !== v || t[162] !== Z || t[163] !== L.webhookSecret ? (_n = v ? (0, H.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [(0, H.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, H.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, H.jsx)(E, {
                    ...J.githubWebhookSectionTitle
                })
            }), (0, H.jsx)(`p`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, H.jsx)(E, {
                    ...J.githubWebhookSetupDescription
                })
            })]
        }), Z({
            setupValueKey: `webhookSecret`,
            label: (0, H.jsx)(E, {
                ...J.githubWebhookSecretLabel
            }),
            value: L.webhookSecret,
            isLoading: !1,
            loadingLabel: d.formatMessage(J.setupUrlLoading),
            unavailableLabel: d.formatMessage(J.githubWebhookSecretUnavailable),
            ariaLabel: d.formatMessage(J.copyGithubWebhookSecretAriaLabel)
        }), N.webhookSecret ? (0, H.jsx)(`p`, {
            className: `text-status-critical text-xs`,
            children: N.webhookSecret
        }) : null]
    }) : null, t[159] = N.webhookSecret, t[160] = d, t[161] = v, t[162] = Z, t[163] = L.webhookSecret, t[164] = _n) : _n = t[164];
    let vn;
    t[165] === a ? vn = t[166] : (vn = () => a(), t[165] = a, t[166] = vn);
    let yn;
    t[167] === Symbol.for(`react.memo_cache_sentinel`) ? (yn = (0, H.jsx)(E, {
        ...J.cancelCta
    }), t[167] = yn) : yn = t[167];
    let bn;
    t[168] !== w || t[169] !== vn ? (bn = (0, H.jsx)(r, {
        color: `secondary`,
        onClick: vn,
        size: `large`,
        className: `w-full md:w-auto`,
        type: `button`,
        disabled: w,
        children: yn
    }), t[168] = w, t[169] = vn, t[170] = bn) : bn = t[170];
    let xn = ie || j || w || B && Ee,
        Sn = s ? Re.continueSetupButton : J.createCta,
        Cn;
    t[171] === Sn ? Cn = t[172] : (Cn = (0, H.jsx)(E, {
        ...Sn
    }), t[171] = Sn, t[172] = Cn);
    let wn;
    t[173] !== w || t[174] !== xn || t[175] !== Cn ? (wn = (0, H.jsx)(r, {
        color: `primary`,
        size: `large`,
        className: `w-full min-w-[170px] md:w-auto`,
        loading: w,
        disabled: xn,
        type: `submit`,
        children: Cn
    }), t[173] = w, t[174] = xn, t[175] = Cn, t[176] = wn) : wn = t[176];
    let Tn;
    t[177] !== bn || t[178] !== wn ? (Tn = (0, H.jsxs)(`div`, {
        className: `flex flex-col-reverse gap-3 md:flex-row md:justify-end`,
        children: [bn, wn]
    }), t[177] = bn, t[178] = wn, t[179] = Tn) : Tn = t[179];
    let $;
    t[180] !== Gt || t[181] !== rn || t[182] !== fn || t[183] !== pn || t[184] !== mn || t[185] !== hn || t[186] !== gn || t[187] !== _n || t[188] !== Tn ? ($ = (0, H.jsxs)(`form`, {
        className: `flex flex-col gap-4`,
        onSubmit: Gt,
        children: [rn, fn, pn, mn, hn, gn, _n, Tn]
    }), t[180] = Gt, t[181] = rn, t[182] = fn, t[183] = pn, t[184] = mn, t[185] = hn, t[186] = gn, t[187] = _n, t[188] = Tn, t[189] = $) : $ = t[189];
    let En;
    return t[190] !== qt || t[191] !== jt || t[192] !== w || t[193] !== Xt || t[194] !== Zt || t[195] !== Qt || t[196] !== $ ? (En = (0, H.jsx)(qt, {
        title: Xt,
        isOpen: !0,
        onClose: jt,
        position: `center`,
        showCloseButton: Zt,
        shouldIgnoreClickOutside: w,
        onEscapeKeyDown: Qt,
        size: `custom`,
        className: `max-h-[90vh] w-full md:max-w-[448px]`,
        testId: `modal-create-service-connector-from-template`,
        children: $
    }), t[190] = qt, t[191] = jt, t[192] = w, t[193] = Xt, t[194] = Zt, t[195] = Qt, t[196] = $, t[197] = En) : En = t[197], En
}

function nt(e) {
    return !e
}

function rt(e) {
    return (0, H.jsx)(`option`, {
        value: e,
        children: e
    }, e)
}

function it() {
    p.danger(J.githubAppPrivateKeyInvalidFile)
}

function at() {}

function ot(e) {
    return e.type === `OAUTH` && e.client_credentials_required !== !1
}

function st(e) {
    return e.type === `OAUTH`
}
var ct, V, H, lt, ut, dt, ft, pt, mt, ht, gt, _t, U, W, G, K, vt, q, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, J, Y = e((() => {
    ct = O(), Ve(), Ce(), he(), Ue(), Ze(), Ge(), _(), I(), F(), Ae(), Ie(), je(), o(), xe(), _e(), be(), $e(), ye(), j(), y(), v(), P(), Ee(), S(), ce(), ne(), ee(), w(), ie(), x(), V = n(D()), qe(), fe(), H = de(), lt = `templated_apps_GitHubEnterprise`, ut = `templated_apps_GitLab`, dt = `private_key`, ft = `webhook_secret`, pt = `hostname`, mt = {
        "application/octet-stream": [`.pem`],
        "application/pem-certificate-chain": [`.pem`],
        "application/x-pem-file": [`.pem`],
        "text/plain": [`.pem`]
    }, ht = `https://connectors.api.openai.com`, gt = 32, _t = `chatgpt.service-template-native-create-uncertain:`, U = `chatgpt:service-template-create-lock`, W = new WeakMap, G = new WeakMap, K = new WeakMap, vt = e => typeof window > `u` ? () => {} : (window.addEventListener(U, e), () => window.removeEventListener(U, e)), q = () => {
        window.dispatchEvent(new Event(U))
    }, yt = `3541874775`, bt = e => {
        let t = ae(),
            n = i(),
            r = t?.getWorkspaceId();
        if (!(!r || !t?.normalizedAccountUserId || !n?.user?.id || t.authUserId !== n.user.id || n.account?.id !== r)) return `${_t}${JSON.stringify([r,t.normalizedAccountUserId,n.user.id,e])}`
    }, xt = e => {
        if (!e || typeof window > `u`) return;
        let t = W.get(window)?.get(e);
        if (t !== `cleared`) try {
            let n = window.sessionStorage.getItem(e),
                r = K.get(window)?.has(e) === !0;
            if (n == null && r) return `pending`;
            let i = t ?? (n === `pending` || n === `uncertain` ? n : G.get(window)?.get(e));
            if (i != null) {
                let t = G.get(window) ?? new Map;
                t.set(e, i), G.set(window, t)
            } else n ?? G.get(window)?.delete(e);
            return i === `pending` && !r ? `uncertain` : i
        } catch {
            let n = t ?? G.get(window)?.get(e);
            return n === `pending` && !K.get(window)?.has(e) ? `uncertain` : n
        }
    }, St = (e, t, n) => {
        if (!e || typeof window > `u`) return;
        let r = K.get(window) ?? new Map;
        t === `pending` && n ? r.set(e, n) : r.delete(e), K.set(window, r);
        let i = G.get(window) ?? new Map;
        i.set(e, t), G.set(window, i);
        try {
            window.sessionStorage.setItem(e, t), W.get(window)?.delete(e)
        } catch {
            let n = W.get(window) ?? new Map;
            n.set(e, t), W.set(window, n)
        }
        q()
    }, Ct = (e, t) => {
        if (!(!e || typeof window > `u`) && !(t && K.get(window)?.get(e) !== t)) {
            K.get(window)?.delete(e), G.get(window)?.delete(e), W.get(window)?.delete(e);
            try {
                window.sessionStorage.removeItem(e)
            } catch {
                let t = W.get(window) ?? new Map;
                t.set(e, `cleared`), W.set(window, t)
            }
            q()
        }
    }, wt = e => {
        let t = new Set,
            n = [];
        for (let r of e.split(/\r?\n|,/)) {
            let e = r.trim();
            !e || t.has(e) || (t.add(e), n.push(e))
        }
        return n
    }, Tt = e => new Promise((t, n) => {
        let r = new FileReader;
        r.onerror = () => n(Error(`Unable to read file.`)), r.onload = () => {
            if (typeof r.result == `string`) {
                t(r.result);
                return
            }
            n(Error(`File contents unavailable.`))
        }, r.readAsText(e)
    }), Et = e => `${ht}/connectors/${encodeURIComponent(e)}/webhook`, Dt = () => {
        if (!globalThis.crypto?.getRandomValues) return ``;
        let e = new Uint8Array(gt);
        return globalThis.crypto.getRandomValues(e), Array.from(e, e => e.toString(16).padStart(2, `0`)).join(``)
    }, Ot = async () => (await f.safeGet(`/aip/connectors/oauth/callback_id`, {})).callback_id ?? null, kt = u(() => ({
        queryKey: ke(`workspace_settings`, !0, !1),
        queryFn: async () => {
            let e = await f.safePost(`/aip/connectors/list_accessible`, {
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
                        [b]: N.ADMIN_SETTING
                    }
                }),
                t = le();
            return {
                connectors: (e.connectors ?? []).map(e => l(e, {
                    preferIconAssets: t
                })),
                templates: e.app_templates ?? []
            }
        },
        enabled: h()?.normalizedAccountUserId != null && Te()
    })), J = T({
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
    Qe as a, $e as i, et as n, Y as r, tt as t
};
//# sourceMappingURL=3864a2c9-lyuwxh6apntyph44.js.map