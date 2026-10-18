import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as r,
    B6 as i,
    CE as a,
    Qit as o,
    X$ as s,
    a7 as c,
    git as l,
    hnt as u,
    i1 as ee,
    iat as d,
    iot as f,
    iw as te,
    kT as p,
    l7 as ne,
    mU as m,
    o1 as re,
    ow as ie,
    pU as h,
    pnt as ae,
    q6 as g,
    rot as _,
    u1 as v,
    vit as y,
    wE as b,
    xE as x,
    ynt as S
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as C,
    Ln as w,
    Nn as T,
    Rn as E,
    Vn as D,
    wn as oe,
    zn as se
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Ait as ce,
    Bst as le,
    Frt as O,
    Gwn as ue,
    Irt as de,
    JQ as fe,
    MPn as k,
    NQ as A,
    Qrt as pe,
    UUn as j,
    WUn as M,
    Wwn as N,
    XQ as me,
    YQ as he,
    gPn as ge,
    hPn as _e,
    jit as ve,
    nit as ye,
    qrt as P,
    xPn as be,
    zQ as xe,
    zst as Se
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Ex as Ce,
    Hm as we,
    Tx as Te,
    Um as Ee,
    Xv as De,
    Xy as F,
    Yv as Oe,
    Yy as ke
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Cu as Ae,
    Py as je,
    Tu as Me,
    Vy as Ne,
    _u as Pe,
    bu as Fe,
    pu as Ie,
    vu as Le,
    wu as Re,
    yu as ze
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    S as Be,
    x as Ve
} from "./82782bc9-h658ejxn3ufkvr7a.js";
import {
    c as I,
    s as He
} from "./122af5aa-ltlkro6lgoihtipj.js";
import {
    a as Ue,
    r as We,
    t as Ge
} from "./f688908b-olun6l0v9m0p5x9f.js";

function Ke({
    connector: e,
    setup: t
}) {
    return e.status === `ONLY_ME` && e.template_id === t.template.template_id && e.owners.length > 0 && e.owners.every(e => e.type === `USER`) && e.owners.some(e => e.id === t.workspaceUserId)
}

function qe(e, t, n) {
    let r = e.primaryConnector;
    return n != null && r.id === t.id && r.status === `ONLY_ME` && r.connector_type === `SERVICE` && r.template_id != null && r.owners.length > 0 && r.owners.every(e => e.type === `USER`) && r.owners.some(e => e.id === n)
}

function L({
    plugin: e,
    workspaceId: t,
    workspaceUserId: n
}) {
    let r = s();
    return e?.scope === `USER` && n != null && e.creator_account_user_id === n && r?.getWorkspaceId() === t && r.normalizedAccountUserId === n
}

function Je({
    plugin: e,
    directoryApp: t,
    appIds: n,
    workspaceId: r,
    workspaceUserId: i,
    isPending: a
}) {
    return e == null || !I(e) || e.scope !== `USER` || i == null || e.creator_account_user_id !== i || n.length !== 1 || n[0] !== t.id || t.status !== `ONLY_ME` || t.connector_type !== `SERVICE` || t.template_id == null || a ? null : {
        appId: t.id,
        directoryApp: t,
        mode: `publish`,
        skipImpact: !0,
        workspaceId: r,
        isAppEligible: e => qe(e, t, i)
    }
}

function Ye({
    plugin: e,
    directoryApp: t,
    appIds: n,
    workspaceId: r,
    workspaceUserId: i,
    pendingAppId: a,
    appConfiguration: o,
    onPublish: s
}) {
    let c = () => t == null ? null : Je({
        plugin: e,
        directoryApp: t,
        appIds: n,
        workspaceId: r,
        workspaceUserId: i,
        isPending: a != null || o != null
    });
    return {
        onPublishDraft: c() == null ? void 0 : () => {
            let t = c();
            t != null && L({
                plugin: e,
                workspaceId: r,
                workspaceUserId: i
            }) && s(t)
        },
        isCurrentActor: o?.isAppEligible == null ? void 0 : () => L({
            plugin: e,
            workspaceId: r,
            workspaceUserId: i
        })
    }
}
var Xe = e((() => {
        He(), v()
    })),
    R = t({
        CreateServiceConnectorFromTemplateModal: () => z
    });

function z(e) {
    "use forget";
    let t = (0, rt.c)(198),
        {
            template: n,
            onClose: r,
            onCreateAttempt: i,
            personalTemplateSetup: a,
            onCreated: s,
            onWorkspaceDraftCreated: l,
            onNativeDraftHandoffIncomplete: d
        } = e,
        f = se(),
        ne = xe(),
        re = Ne(),
        ie = n.can_create === !1,
        h;
    t[0] === n.supported_auth_types ? h = t[1] : (h = n.supported_auth_types?.some(nt) ?? !1, t[0] = n.supported_auth_types, t[1] = h);
    let g = h,
        v;
    t[2] === n.supported_auth_types ? v = t[3] : (v = n.supported_auth_types?.some(tt) ?? !1, t[2] = n.supported_auth_types, t[3] = v);
    let y = v,
        b = n.template_id === it,
        x = n.template_id === at,
        S;
    t[4] !== x || t[5] !== n.template_id ? (S = x ? `https://help.openai.com/articles/20001487` : Pe(n.template_id), t[4] = x, t[5] = n.template_id, t[6] = S) : S = t[6];
    let C = S,
        w;
    t[7] === n.link_params_schema ? w = t[8] : (w = ve(n.link_params_schema), t[7] = n.link_params_schema, t[8] = w);
    let E = w,
        [D, oe] = (0, B.useState)(!1),
        le = (0, B.useRef)(!0),
        ue = (0, B.useRef)(!1),
        de = (0, B.useRef)(null),
        k;
    t[9] !== a || t[10] !== n.template_id ? (k = a ? void 0 : mt(n.template_id), t[9] = a, t[10] = n.template_id, t[11] = k) : k = t[11];
    let A = k,
        M;
    t[12] === A ? M = t[13] : (M = () => ht(A), t[12] = A, t[13] = M);
    let N = (0, B.useSyncExternalStore)(ft, M, et),
        he = N != null,
        ge = (0, B.useRef)(!1),
        _e;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (_e = {}, t[14] = _e) : _e = t[14];
    let [P, be] = (0, B.useState)(_e), Ce;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (Ce = {}, t[15] = Ce) : Ce = t[15];
    let [we, De] = (0, B.useState)(Ce), [F, je] = (0, B.useState)(null), [Fe, Le] = (0, B.useState)(g), [Re, Ve] = (0, B.useState)(!1), [I, He] = (0, B.useState)(null), [We, qe] = (0, B.useState)(null), [L, Je] = (0, B.useState)(null), Ye = L?.connectorId, Xe;
    t[16] !== b || t[17] !== n.description || t[18] !== n.name || t[19] !== n.oauth_client_info?.default_scopes ? (Xe = () => ({
        name: n.name,
        description: n.description ?? ``,
        oauthClientId: ``,
        oauthClientSecret: ``,
        githubAppPrivateKey: ``,
        oauthClientScopes: (n.oauth_client_info?.default_scopes ?? []).join(`
`),
        gitlabHostname: ``,
        webhookSecret: b ? xt() : ``
    }), t[16] = b, t[17] = n.description, t[18] = n.name, t[19] = n.oauth_client_info?.default_scopes, t[20] = Xe) : Xe = t[20];
    let [R, z] = (0, B.useState)(Xe), ut;
    t[21] !== R.oauthClientId || t[22] !== R.oauthClientSecret ? (ut = R.oauthClientId.trim().length > 0 || R.oauthClientSecret.trim().length > 0, t[21] = R.oauthClientId, t[22] = R.oauthClientSecret, t[23] = ut) : ut = t[23];
    let H = y || ut,
        dt;
    t[24] !== E || t[25] !== we ? (dt = ce(E, we), t[24] = E, t[25] = we, t[26] = dt) : dt = t[26];
    let U = dt,
        W = F ? ze(F) ?? `` : ``,
        G = Ye ? bt(Ye) : ``,
        q, wt;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (q = () => (le.current = !0, () => {
        le.current = !1;
        let e = de.current;
        e && !e.dispatched && _t(e.key, e.reservation), de.current = null
    }), wt = [], t[27] = q, t[28] = wt) : (q = t[27], wt = t[28]), (0, B.useEffect)(q, wt);
    let Tt, Et;
    t[29] === g ? (Tt = t[30], Et = t[31]) : (Tt = () => {
        if (!g) {
            je(null), Le(!1);
            return
        }
        let e = !1;
        return Le(!0), je(null), St().then(t => {
            e || je(t)
        }).catch(() => {
            e || je(null)
        }).finally(() => {
            e || Le(!1)
        }), () => {
            e = !0
        }
    }, Et = [g], t[29] = g, t[30] = Tt, t[31] = Et), (0, B.useEffect)(Tt, Et);
    let Dt, Ot;
    t[32] === I ? (Dt = t[33], Ot = t[34]) : (Dt = () => {
        if (I == null) return;
        let e = window.setTimeout(() => {
            He(null)
        }, 2e3);
        return () => window.clearTimeout(e)
    }, Ot = [I], t[32] = I, t[33] = Dt, t[34] = Ot), (0, B.useEffect)(Dt, Ot);
    let kt;
    t[35] !== r || t[36] !== s || t[37] !== d || t[38] !== l || t[39] !== a ? (kt = e => {
        let t = e.nativeDraftFallback,
            n = ee(),
            i = t && n?.getWorkspaceId() === t.workspaceId && n.normalizedAccountUserId === t.accountUserId && n.authUserId === t.actorUserId && _()?.account?.id === t.workspaceId && _()?.user?.id === t.actorUserId ? t.connectorId : void 0;
        t && !i ? r() : e.nativeDraftHandoffIncomplete ? d ? d(i) : r() : a && s && e.connector ? s(e.connector) : e.pluginId && l && e.connector ? l({
            connector: e.connector,
            pluginId: e.pluginId,
            connectorId: e.connectorId
        }) : r(e.connectorId)
    }, t[35] = r, t[36] = s, t[37] = d, t[38] = l, t[39] = a, t[40] = kt) : kt = t[40];
    let Y = kt,
        At;
    t[41] !== L || t[42] !== Y || t[43] !== D || t[44] !== r ? (At = () => {
        D || (L ? Y(L) : r())
    }, t[41] = L, t[42] = Y, t[43] = D, t[44] = r, t[45] = At) : At = t[45];
    let jt = At,
        Mt;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (Mt = e => {
        be(t => {
            if (!t[e]) return t;
            let n = {
                ...t
            };
            return delete n[e], n
        })
    }, t[46] = Mt) : Mt = t[46];
    let X = Mt,
        Nt = (e, t) => {
            De(n => ({
                ...n,
                [e]: t
            })), a && (e === `hostname` || e === `workspace_host`) && !ge.current && z(e => ({
                ...e,
                name: fe(n.name, t)
            })), X(e)
        },
        Pt;
    t[47] === X ? Pt = t[48] : (Pt = async e => {
        try {
            let t = await yt(e);
            z(e => ({
                ...e,
                githubAppPrivateKey: t
            })), qe(e.name), X(`githubAppPrivateKey`)
        } catch {
            m.danger(J.githubAppPrivateKeyReadError)
        }
    }, t[47] = X, t[48] = Pt);
    let Ft = Pt,
        It;
    t[49] === Ft ? It = t[50] : (It = e => {
        e.length > 0 && Ft(e[0])
    }, t[49] = Ft, t[50] = It);
    let Lt;
    t[51] !== D || t[52] !== It ? (Lt = {
        accept: lt,
        disabled: D,
        multiple: !1,
        noClick: !0,
        noKeyboard: !0,
        onDropAccepted: It,
        onDropRejected: $e
    }, t[51] = D, t[52] = It, t[53] = Lt) : Lt = t[53];
    let {
        getInputProps: Rt,
        getRootProps: zt,
        isDragActive: Bt,
        open: Vt
    } = Be(Lt), Ht;
    t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (Ht = async (e, t) => {
        if (t) try {
            await navigator.clipboard.writeText(t), He(e)
        } catch {
            He(null)
        }
    }, t[54] = Ht) : Ht = t[54];
    let Ut = Ht,
        Wt;
    t[55] !== F || t[56] !== U || t[57] !== Y || t[58] !== f || t[59] !== re || t[60] !== x || t[61] !== b || t[62] !== E || t[63] !== ne || t[64] !== r || t[65] !== i || t[66] !== l || t[67] !== a || t[68] !== H || t[69] !== n || t[70] !== ie || t[71] !== R.description || t[72] !== R.githubAppPrivateKey || t[73] !== R.gitlabHostname || t[74] !== R.name || t[75] !== R.oauthClientId || t[76] !== R.oauthClientScopes || t[77] !== R.oauthClientSecret || t[78] !== R.webhookSecret ? (Wt = async e => {
        if (e?.preventDefault(), ie || ue.current) return;
        let t = a ? void 0 : mt(n.template_id),
            s = ht(t);
        if (s) {
            m.danger(f.formatMessage(s === `pending` ? J.nativeCreationPending : J.nativeCompletionUncertain));
            return
        }
        let d = {},
            te = R.name.trim(),
            p = R.description.trim(),
            h = R.oauthClientId.trim(),
            g = R.oauthClientSecret.trim(),
            v = R.githubAppPrivateKey.trim(),
            y = R.gitlabHostname.trim(),
            S = b && H,
            C = R.webhookSecret.trim(),
            w = b;
        te || (d.name = f.formatMessage(J.requiredField)), H && (h || (d.oauthClientId = f.formatMessage(J.requiredField)), g || (d.oauthClientSecret = f.formatMessage(J.requiredField)), S && !v && (d.githubAppPrivateKey = f.formatMessage(J.requiredField)), F || (d.callbackId = f.formatMessage(x ? J.gitlabRedirectUriUnavailable : J.callbackUrlUnavailable))), x && !y && (d.gitlabHostname = f.formatMessage(J.requiredField)), w && (C || (d.webhookSecret = f.formatMessage(J.requiredField)));
        let {
            sanitizedLinkParams: T,
            errors: D,
            hasPatternErrors: se
        } = ye(E, U, f);
        if (Object.assign(d, D), Object.keys(d).length > 0) {
            be(d), Object.keys(D).length > 0 && m.danger(f.formatMessage(se ? pe.invalidFieldsToast : pe.requiredFieldsToast));
            return
        }
        oe(!0), ue.current = !0;
        let ce = {
                name: te,
                description: p,
                logo_url: n.logo_url,
                logo_url_dark: n.logo_url_dark,
                link_params: T,
                create_as_draft: !0
            },
            O = {};
        w && (O[st] = C), S && (O[ot] = v), x && (O[ct] = y);
        let fe = {
                ...ce,
                ...Object.keys(O).length > 0 ? {
                    additional_config: O
                } : {},
                ...H ? {
                    oauth_client_id: h,
                    oauth_client_secret: g,
                    oauth_client_scopes: vt(R.oauthClientScopes),
                    callback_id: F ?? void 0
                } : {}
            },
            k = a ? void 0 : ee()?.getWorkspaceId(),
            A = !1,
            j = !1,
            M = !1,
            N;
        try {
            let e;
            if (a) {
                i?.();
                let t = await me(a, fe);
                e = {
                    connectorId: t.connector.id,
                    connector: t.connector,
                    pluginId: t.plugin_id?.trim() || void 0
                }
            } else if (Ge({
                    nativeEnabled: !0,
                    connectorType: n.connector_type,
                    workspaceId: k,
                    requestBody: fe
                }) && u().getContext().user.customIDs?.workspace_id === k && u().getContext().user.userID === _()?.user?.id && t != null && ae(pt)) {
                let r = Symbol(`service-template-prewrite`);
                N = r, de.current = {
                    key: t,
                    reservation: r,
                    dispatched: !1
                }, gt(t, `pending`, r), A = !0;
                let a = await Ue({
                    workspaceId: k ?? ``,
                    templateId: n.template_id,
                    requestBody: fe,
                    onBeforeWrite: () => {
                        if (!le.current || de.current?.reservation !== r || K.get(window)?.get(t) !== r || ht(t) !== `pending`) throw Error(`The draft creation context has changed.`);
                        de.current.dispatched = !0, j = !0, i?.()
                    }
                });
                e = {
                    connectorId: a.connector_id,
                    connector: a.connector,
                    pluginId: a.plugin_id?.trim() || void 0
                }
            } else {
                i?.();
                let t = await c.safePost(`/aip/connectors/templates/{template_id}/instantiate`, {
                    parameters: {
                        path: {
                            template_id: n.template_id
                        }
                    },
                    requestBody: fe
                });
                e = {
                    connectorId: t.connector.id,
                    connector: t.connector,
                    pluginId: t.plugin_id?.trim() || void 0
                }
            }
            let r = ee(),
                o = j && e.connector != null && e.connectorId.trim() !== `` && e.connector.id === e.connectorId && e.connector.connector_type === `SERVICE` && !!r?.normalizedAccountUserId && !!r.authUserId && !!_()?.user?.id && r.getWorkspaceId() === k && r.authUserId === _()?.user?.id && _()?.account?.id === k && Ke({
                    connector: e.connector,
                    setup: {
                        template: n,
                        workspaceUserId: r.normalizedAccountUserId
                    }
                }),
                s = j && l != null && (!e.pluginId || !o);
            if (e.nativeDraftHandoffIncomplete = s, e.nativeDraftFallback = o && r?.normalizedAccountUserId && r.authUserId && k ? {
                    connectorId: e.connectorId,
                    workspaceId: k,
                    actorUserId: r.authUserId,
                    accountUserId: r.normalizedAccountUserId
                } : void 0, !a) {
                if (await Promise.all([re(), Ct.refetch()]), ne(), j && !le.current) {
                    gt(t, `uncertain`);
                    return
                }
                s ? (gt(t, `uncertain`), m.danger(f.formatMessage(J.nativeCompletionUncertain))) : (j && _t(t), m.success(f.formatMessage(J.success)))
            }
            w ? Je(e) : Y(e)
        } catch (e) {
            let n = e,
                i = j && n instanceof o && !n.isTransportError && (n.status === 401 || n.status === 403 || Me(n));
            if (A && !j ? _t(t, N) : i ? _t(t) : j && gt(t, `uncertain`), A && !le.current) return;
            m.danger(j && !i ? f.formatMessage(J.nativeCompletionUncertain) : Ae(n, f), {
                toastId: `create_service_template_draft_error`,
                analyticsToastId: `create_service_template_draft_error`
            }), j && !i && (M = !0, w ? (Je({
                connectorId: ``,
                nativeDraftHandoffIncomplete: !0
            }), oe(!1)) : r())
        }
        M || (ue.current = !1, oe(!1))
    }, t[55] = F, t[56] = U, t[57] = Y, t[58] = f, t[59] = re, t[60] = x, t[61] = b, t[62] = E, t[63] = ne, t[64] = r, t[65] = i, t[66] = l, t[67] = a, t[68] = H, t[69] = n, t[70] = ie, t[71] = R.description, t[72] = R.githubAppPrivateKey, t[73] = R.gitlabHostname, t[74] = R.name, t[75] = R.oauthClientId, t[76] = R.oauthClientScopes, t[77] = R.oauthClientSecret, t[78] = R.webhookSecret, t[79] = Wt) : Wt = t[79];
    let Gt = Wt,
        Kt;
    t[80] !== I || t[81] !== f ? (Kt = e => {
        let {
            setupValueKey: t,
            label: n,
            value: r,
            isLoading: i,
            loadingLabel: a,
            unavailableLabel: o,
            ariaLabel: s
        } = e, c = I === t, l = !!r && !i, u = i ? a : r || o;
        return (0, V.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, V.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3`,
                children: [(0, V.jsx)(`span`, {
                    className: `text-token-text-primary text-xs font-semibold`,
                    children: n
                }), (0, V.jsx)(`span`, {
                    className: `text-token-text-tertiary text-xs`,
                    children: (0, V.jsx)(T, {
                        ...c ? J.setupUrlCopied : l ? J.setupUrlCopyHint : J.setupUrlCopyUnavailable
                    })
                })]
            }), (0, V.jsxs)(`button`, {
                type: `button`,
                onClick: () => void Ut(t, r),
                disabled: !l,
                className: `border-token-border-light bg-token-bg-primary flex w-full items-center justify-between gap-3 rounded-md border px-3 py-2 text-start text-xs shadow-sm transition-colors ${l?`hover:bg-token-main-surface-secondary`:`cursor-default opacity-70`}`,
                "aria-label": s,
                title: l ? f.formatMessage(J.setupUrlCopyHint) : void 0,
                children: [(0, V.jsx)(`span`, {
                    className: `text-token-text-secondary font-mono break-all`,
                    children: u
                }), (0, V.jsx)(`span`, {
                    className: `border-token-border-light bg-token-bg-secondary text-token-text-secondary flex h-8 w-8 shrink-0 items-center justify-center rounded-md border`,
                    children: c ? (0, V.jsx)(Te, {
                        className: `icon-sm`
                    }) : (0, V.jsx)(ke, {
                        className: `icon-sm`
                    })
                })]
            })]
        })
    }, t[80] = I, t[81] = f, t[82] = Kt) : Kt = t[82];
    let Z = Kt;
    if (L) {
        let e = !Ye,
            n = e ? J.githubWebhookUncertainTitle : J.githubWebhookReadyTitle,
            r;
        t[83] === n ? r = t[84] : (r = (0, V.jsx)(T, {
            ...n
        }), t[83] = n, t[84] = r);
        let i = e ? J.githubWebhookUncertainBody : J.githubWebhookReadyBody,
            a;
        t[85] === i ? a = t[86] : (a = (0, V.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, V.jsx)(T, {
                ...i
            })
        }), t[85] = i, t[86] = a);
        let o;
        t[87] !== f || t[88] !== b || t[89] !== Z || t[90] !== R.webhookSecret ? (o = b ? Z({
            setupValueKey: `webhookSecret`,
            label: (0, V.jsx)(T, {
                ...J.githubWebhookSecretLabel
            }),
            value: R.webhookSecret,
            isLoading: !1,
            loadingLabel: f.formatMessage(J.setupUrlLoading),
            unavailableLabel: f.formatMessage(J.githubWebhookSecretUnavailable),
            ariaLabel: f.formatMessage(J.copyGithubWebhookSecretAriaLabel)
        }) : null, t[87] = f, t[88] = b, t[89] = Z, t[90] = R.webhookSecret, t[91] = o) : o = t[91];
        let s;
        t[92] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, V.jsx)(T, {
            ...J.webhookUrlLabel
        }), t[92] = s) : s = t[92];
        let c;
        t[93] !== L || t[94] !== Y ? (c = () => Y(L), t[93] = L, t[94] = Y, t[95] = c) : c = t[95];
        let l;
        t[96] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, V.jsx)(T, {
            ...J.doneCta
        }), t[96] = l) : l = t[96];
        let u;
        return t[97] === c ? u = t[98] : (u = (0, V.jsx)(`div`, {
            className: `flex justify-end`,
            children: (0, V.jsx)(p, {
                color: `primary`,
                onClick: c,
                size: `large`,
                className: `w-full md:w-auto`,
                type: `button`,
                children: l
            })
        }), t[97] = c, t[98] = u), (0, V.jsx)(te, {
            title: r,
            isOpen: !0,
            onClose: jt,
            position: `center`,
            showCloseButton: !0,
            size: `custom`,
            className: `max-h-[90vh] w-full md:max-w-[448px]`,
            testId: `modal-create-service-connector-webhook-url`,
            children: (0, V.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [a, o, Z({
                    setupValueKey: `webhook`,
                    label: s,
                    value: G,
                    isLoading: !1,
                    loadingLabel: f.formatMessage(J.setupUrlLoading),
                    unavailableLabel: f.formatMessage(J.setupUrlUnavailable),
                    ariaLabel: f.formatMessage(J.copyWebhookUrlAriaLabel)
                }), u]
            })
        })
    }
    let qt = te,
        Jt = a ? Ie.connectTemplateAppModalTitle : Ie.createTemplateAppModalTitle,
        Yt;
    t[99] === n.name ? Yt = t[100] : (Yt = {
        templateName: n.name
    }, t[99] = n.name, t[100] = Yt);
    let Xt;
    t[101] !== Jt || t[102] !== Yt ? (Xt = (0, V.jsx)(`span`, {
        className: `flex items-center gap-1`,
        children: (0, V.jsx)(T, {
            ...Jt,
            values: Yt
        })
    }), t[101] = Jt, t[102] = Yt, t[103] = Xt) : Xt = t[103];
    let Zt = !D,
        Qt;
    t[104] === D ? Qt = t[105] : (Qt = e => {
        D && e.preventDefault()
    }, t[104] = D, t[105] = Qt);
    let $t;
    t[106] !== a || t[107] !== y || t[108] !== n.name ? ($t = a ? (0, V.jsx)(T, {
        id: `chatgpt.plugins.template_setup.description`,
        defaultMessage: `Enter your server settings, then continue to sign in.`
    }) : (0, V.jsx)(T, {
        ...y ? J.bodyWithOauth : J.bodyWithoutOauth,
        values: {
            templateName: n.name
        }
    }), t[106] = a, t[107] = y, t[108] = n.name, t[109] = $t) : $t = t[109];
    let en;
    t[110] === C ? en = t[111] : (en = C ? (0, V.jsxs)(V.Fragment, {
        children: [` `, (0, V.jsxs)(j, {
            href: C,
            openNewTab: !0,
            className: `text-token-text-tertiary inline-flex items-center gap-1 text-sm no-underline! hover:underline!`,
            children: [(0, V.jsx)(T, {
                ...J.setupGuideLink
            }), (0, V.jsx)(Oe, {
                className: `h-3 w-3`
            })]
        })]
    }) : null, t[110] = C, t[111] = en);
    let tn;
    t[112] !== $t || t[113] !== en ? (tn = (0, V.jsxs)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: [$t, en]
    }), t[112] = $t, t[113] = en, t[114] = tn) : tn = t[114];
    let nn;
    t[115] !== he || t[116] !== N || t[117] !== n.template_id ? (nn = he ? (0, V.jsxs)(`div`, {
        className: `flex flex-col items-start gap-2`,
        children: [(0, V.jsx)(`p`, {
            className: `text-status-critical text-sm`,
            role: `alert`,
            children: (0, V.jsx)(T, {
                ...N === `pending` ? J.nativeCreationPending : J.nativeCompletionUncertain
            })
        }), N === `uncertain` ? (0, V.jsx)(p, {
            type: `button`,
            color: `secondary`,
            size: `small`,
            onClick: () => {
                let e = mt(n.template_id);
                ht(e) === `uncertain` && _t(e)
            },
            children: (0, V.jsx)(T, {
                ...J.nativeRetryAfterReviewCta
            })
        }) : null]
    }) : null, t[115] = he, t[116] = N, t[117] = n.template_id, t[118] = nn) : nn = t[118];
    let rn;
    t[119] !== tn || t[120] !== nn ? (rn = (0, V.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [tn, nn]
    }), t[119] = tn, t[120] = nn, t[121] = rn) : rn = t[121];
    let an;
    t[122] === Symbol.for(`react.memo_cache_sentinel`) ? (an = (0, V.jsx)(`label`, {
        htmlFor: `service-template-name`,
        className: `mb-1 block text-sm font-medium`,
        children: (0, V.jsx)(T, {
            ...J.nameLabel
        })
    }), t[122] = an) : an = t[122];
    let on;
    t[123] === f ? on = t[124] : (on = f.formatMessage(J.nameLabel), t[123] = f, t[124] = on);
    let sn = a ? void 0 : `service-template-name-help`,
        cn;
    t[125] === X ? cn = t[126] : (cn = e => {
        ge.current = !0, z(t => ({
            ...t,
            name: e.target.value
        })), X(`name`)
    }, t[125] = X, t[126] = cn);
    let ln;
    t[127] !== P.name || t[128] !== D || t[129] !== on || t[130] !== sn || t[131] !== cn || t[132] !== R.name ? (ln = (0, V.jsx)(O, {
        name: `service-template-name`,
        ariaLabel: on,
        "aria-describedby": sn,
        value: R.name,
        onChange: cn,
        disabled: D,
        error: P.name,
        inputClassName: `bg-token-bg-primary!`
    }), t[127] = P.name, t[128] = D, t[129] = on, t[130] = sn, t[131] = cn, t[132] = R.name, t[133] = ln) : ln = t[133];
    let Q;
    t[134] === a ? Q = t[135] : (Q = a ? null : (0, V.jsx)(`p`, {
        id: `service-template-name-help`,
        className: `text-token-text-tertiary mt-1 text-xs`,
        children: (0, V.jsx)(T, {
            ...J.nameDescription
        })
    }), t[134] = a, t[135] = Q);
    let un;
    t[136] !== ln || t[137] !== Q ? (un = (0, V.jsxs)(`div`, {
        children: [an, ln, Q]
    }), t[136] = ln, t[137] = Q, t[138] = un) : un = t[138];
    let dn;
    t[139] !== f || t[140] !== D || t[141] !== a || t[142] !== R.description ? (dn = a ? null : (0, V.jsxs)(`div`, {
        children: [(0, V.jsx)(`label`, {
            htmlFor: `service-template-description`,
            className: `mb-1 block text-sm font-medium`,
            children: (0, V.jsx)(T, {
                ...J.descriptionLabel
            })
        }), (0, V.jsx)(Se, {
            name: `service-template-description`,
            ariaLabel: f.formatMessage(J.descriptionLabel),
            "aria-describedby": `service-template-description-help`,
            value: R.description,
            onChange: e => z(t => ({
                ...t,
                description: e.target.value
            })),
            disabled: D,
            inputClassName: `bg-token-bg-primary!`
        }), (0, V.jsx)(`p`, {
            id: `service-template-description-help`,
            className: `text-token-text-tertiary mt-1 text-xs`,
            children: (0, V.jsx)(T, {
                ...J.descriptionDescription
            })
        })]
    }), t[139] = f, t[140] = D, t[141] = a, t[142] = R.description, t[143] = dn) : dn = t[143];
    let fn;
    t[144] !== un || t[145] !== dn ? (fn = (0, V.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [un, dn]
    }), t[144] = un, t[145] = dn, t[146] = fn) : fn = t[146];
    let pn = E.length > 0 ? (0, V.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, V.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [(0, V.jsx)(`h3`, {
                    className: `text-sm font-semibold`,
                    children: (0, V.jsx)(T, {
                        ...pe.sectionTitle
                    })
                }), (0, V.jsx)(`p`, {
                    className: `text-token-text-secondary text-xs`,
                    children: (0, V.jsx)(T, {
                        ...pe.sectionDescription
                    })
                })]
            }), E.map(e => {
                let t = e.required ? f.formatMessage(pe.fieldLabelRequired, {
                        label: e.title
                    }) : e.title,
                    n = P[e.name],
                    r = U[e.name] ?? ``;
                return e.enumValues && e.enumValues.length > 0 ? (0, V.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, V.jsx)(`label`, {
                        htmlFor: `service-template-link-param-${e.name}`,
                        className: `text-sm font-medium`,
                        children: t
                    }), (0, V.jsx)(`select`, {
                        id: `service-template-link-param-${e.name}`,
                        className: `border-token-border-light bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:ring-1 focus:outline-none`,
                        value: r,
                        onChange: t => Nt(e.name, t.target.value),
                        disabled: D,
                        children: e.enumValues.map(Qe)
                    }), e.description ? (0, V.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: e.description
                    }) : null, n ? (0, V.jsx)(`p`, {
                        className: `text-status-critical text-xs`,
                        children: n
                    }) : null]
                }, e.name) : (0, V.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, V.jsx)(`label`, {
                        htmlFor: `service-template-link-param-${e.name}`,
                        className: `mb-1 block text-sm font-medium`,
                        children: t
                    }), (0, V.jsx)(O, {
                        name: `service-template-link-param-${e.name}`,
                        ariaLabel: t,
                        value: r,
                        onChange: t => Nt(e.name, t.target.value),
                        disabled: D,
                        placeholder: f.formatMessage(pe.fieldPlaceholder, {
                            label: e.example ?? e.title
                        }),
                        error: n,
                        inputClassName: `bg-token-bg-primary!`
                    }), e.description ? (0, V.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: e.description
                    }) : null]
                }, e.name)
            })]
        }) : null,
        mn;
    t[147] !== P.gitlabHostname || t[148] !== f || t[149] !== x || t[150] !== D || t[151] !== X || t[152] !== R.gitlabHostname ? (mn = x ? (0, V.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [(0, V.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, V.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, V.jsx)(T, {
                    ...J.gitlabInstanceSectionTitle
                })
            }), (0, V.jsx)(`p`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, V.jsx)(T, {
                    ...J.gitlabHostnameDescription
                })
            })]
        }), (0, V.jsxs)(`div`, {
            children: [(0, V.jsx)(`label`, {
                htmlFor: `service-template-gitlab-hostname`,
                className: `mb-1 block text-sm font-medium`,
                children: (0, V.jsx)(T, {
                    ...J.gitlabHostnameLabel
                })
            }), (0, V.jsx)(O, {
                name: `service-template-gitlab-hostname`,
                ariaLabel: f.formatMessage(J.gitlabHostnameLabel),
                value: R.gitlabHostname,
                onChange: e => {
                    z(t => ({
                        ...t,
                        gitlabHostname: e.target.value
                    })), X(`gitlabHostname`)
                },
                disabled: D,
                error: P.gitlabHostname,
                placeholder: f.formatMessage(J.gitlabHostnamePlaceholder),
                inputClassName: `bg-token-bg-primary!`
            })]
        })]
    }) : null, t[147] = P.gitlabHostname, t[148] = f, t[149] = x, t[150] = D, t[151] = X, t[152] = R.gitlabHostname, t[153] = mn) : mn = t[153];
    let hn;
    t[154] !== D || t[155] !== y || t[156] !== Re || t[157] !== g ? (hn = g && !y ? (0, V.jsx)(`div`, {
        children: (0, V.jsx)(p, {
            color: `secondary`,
            size: `small`,
            type: `button`,
            "aria-expanded": Re,
            onClick: () => Ve(Ze),
            disabled: D,
            children: (0, V.jsx)(T, {
                ...Re ? J.hideAdvancedSettings : J.showAdvancedSettings
            })
        })
    }) : null, t[154] = D, t[155] = y, t[156] = Re, t[157] = g, t[158] = hn) : hn = t[158];
    let gn = g && (y || Re) ? (0, V.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, V.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, V.jsx)(T, {
                    ...J.oauthSectionTitle
                })
            }), Z({
                setupValueKey: `callback`,
                label: (0, V.jsx)(T, {
                    ...x ? J.gitlabOauthRedirectUriLabel : J.oauthCallbackUrlLabel
                }),
                value: W,
                isLoading: Fe,
                loadingLabel: f.formatMessage(J.setupUrlLoading),
                unavailableLabel: f.formatMessage(J.setupUrlUnavailable),
                ariaLabel: f.formatMessage(x ? J.copyGitlabOauthRedirectUriAriaLabel : J.copyOauthCallbackUrlAriaLabel)
            }), P.callbackId ? (0, V.jsx)(`p`, {
                className: `text-status-critical text-xs`,
                children: P.callbackId
            }) : null, (0, V.jsxs)(`div`, {
                children: [(0, V.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-id`,
                    className: `mb-1 block text-sm font-medium`,
                    children: (0, V.jsx)(T, {
                        ...J.oauthClientIdLabel
                    })
                }), (0, V.jsx)(O, {
                    name: `service-template-oauth-client-id`,
                    ariaLabel: f.formatMessage(J.oauthClientIdLabel),
                    value: R.oauthClientId,
                    onChange: e => {
                        z(t => ({
                            ...t,
                            oauthClientId: e.target.value
                        })), X(`oauthClientId`)
                    },
                    disabled: D,
                    error: P.oauthClientId,
                    inputClassName: `bg-token-bg-primary!`
                })]
            }), (0, V.jsxs)(`div`, {
                children: [(0, V.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-secret`,
                    className: `mb-1 block text-sm font-medium`,
                    children: (0, V.jsx)(T, {
                        ...J.oauthClientSecretLabel
                    })
                }), (0, V.jsx)(O, {
                    name: `service-template-oauth-client-secret`,
                    ariaLabel: f.formatMessage(J.oauthClientSecretLabel),
                    type: `password`,
                    value: R.oauthClientSecret,
                    onChange: e => {
                        z(t => ({
                            ...t,
                            oauthClientSecret: e.target.value
                        })), X(`oauthClientSecret`)
                    },
                    disabled: D,
                    error: P.oauthClientSecret,
                    inputClassName: `bg-token-bg-primary!`
                })]
            }), b ? (0, V.jsx)(`div`, {
                className: `flex flex-col gap-4`,
                children: (0, V.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, V.jsx)(`label`, {
                        htmlFor: `service-template-github-app-private-key`,
                        className: `text-sm font-medium`,
                        children: (0, V.jsx)(T, {
                            ...J.githubAppPrivateKeyLabel
                        })
                    }), (0, V.jsxs)(`div`, {
                        className: `flex flex-col gap-2`,
                        children: [(0, V.jsxs)(`div`, {
                            ...zt({
                                className: `border-token-border-light bg-token-bg-primary flex flex-col items-center gap-2 rounded-md border border-dashed px-4 py-5 text-center transition-colors ${Bt?`border-token-text-primary bg-token-main-surface-secondary`:``}`
                            }),
                            children: [(0, V.jsx)(`input`, {
                                ...Rt()
                            }), (0, V.jsx)(Ee, {
                                className: `text-token-text-secondary h-5 w-5`
                            }), (0, V.jsx)(`p`, {
                                className: `text-token-text-secondary text-sm`,
                                children: (0, V.jsx)(T, {
                                    ...J.githubAppPrivateKeyUploadLabel
                                })
                            }), (0, V.jsx)(p, {
                                type: `button`,
                                color: `secondary`,
                                size: `small`,
                                disabled: D,
                                onClick: () => Vt(),
                                children: (0, V.jsx)(T, {
                                    ...J.githubAppPrivateKeyUploadBrowseCta
                                })
                            })]
                        }), We ? (0, V.jsx)(`p`, {
                            className: `text-token-text-tertiary text-xs`,
                            children: (0, V.jsx)(T, {
                                ...J.githubAppPrivateKeyFileLoaded,
                                values: {
                                    fileName: We
                                }
                            })
                        }) : null]
                    }), (0, V.jsx)(`textarea`, {
                        id: `service-template-github-app-private-key`,
                        className: `border-token-border-light bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary w-full rounded-md border px-3 py-2 font-mono text-sm shadow-sm focus:ring-1 focus:outline-none`,
                        value: R.githubAppPrivateKey,
                        onChange: e => {
                            z(t => ({
                                ...t,
                                githubAppPrivateKey: e.target.value
                            })), qe(null), X(`githubAppPrivateKey`)
                        },
                        rows: 5,
                        disabled: D,
                        placeholder: f.formatMessage(J.githubAppPrivateKeyPlaceholder),
                        "aria-label": f.formatMessage(J.githubAppPrivateKeyLabel)
                    }), (0, V.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: (0, V.jsx)(T, {
                            ...J.githubAppPrivateKeyDescription
                        })
                    }), P.githubAppPrivateKey ? (0, V.jsx)(`p`, {
                        className: `text-status-critical text-xs`,
                        children: P.githubAppPrivateKey
                    }) : null]
                })
            }) : null, (0, V.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [(0, V.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-scopes`,
                    className: `text-sm font-medium`,
                    children: (0, V.jsx)(T, {
                        ...x ? J.gitlabOauthClientScopesLabel : J.oauthClientScopesLabel
                    })
                }), (0, V.jsx)(`textarea`, {
                    id: `service-template-oauth-client-scopes`,
                    className: `border-token-border-light bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:ring-1 focus:outline-none`,
                    value: R.oauthClientScopes,
                    onChange: e => z(t => ({
                        ...t,
                        oauthClientScopes: e.target.value
                    })),
                    rows: 3,
                    disabled: D,
                    readOnly: x,
                    placeholder: f.formatMessage(J.oauthClientScopesPlaceholder)
                }), (0, V.jsx)(`p`, {
                    className: `text-token-text-tertiary text-xs`,
                    children: (0, V.jsx)(T, {
                        ...x ? J.gitlabOauthClientScopesDescription : J.oauthClientScopesDescription
                    })
                })]
            })]
        }) : null,
        _n;
    t[159] !== P.webhookSecret || t[160] !== f || t[161] !== b || t[162] !== Z || t[163] !== R.webhookSecret ? (_n = b ? (0, V.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [(0, V.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, V.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, V.jsx)(T, {
                    ...J.githubWebhookSectionTitle
                })
            }), (0, V.jsx)(`p`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, V.jsx)(T, {
                    ...J.githubWebhookSetupDescription
                })
            })]
        }), Z({
            setupValueKey: `webhookSecret`,
            label: (0, V.jsx)(T, {
                ...J.githubWebhookSecretLabel
            }),
            value: R.webhookSecret,
            isLoading: !1,
            loadingLabel: f.formatMessage(J.setupUrlLoading),
            unavailableLabel: f.formatMessage(J.githubWebhookSecretUnavailable),
            ariaLabel: f.formatMessage(J.copyGithubWebhookSecretAriaLabel)
        }), P.webhookSecret ? (0, V.jsx)(`p`, {
            className: `text-status-critical text-xs`,
            children: P.webhookSecret
        }) : null]
    }) : null, t[159] = P.webhookSecret, t[160] = f, t[161] = b, t[162] = Z, t[163] = R.webhookSecret, t[164] = _n) : _n = t[164];
    let vn;
    t[165] === r ? vn = t[166] : (vn = () => r(), t[165] = r, t[166] = vn);
    let yn;
    t[167] === Symbol.for(`react.memo_cache_sentinel`) ? (yn = (0, V.jsx)(T, {
        ...J.cancelCta
    }), t[167] = yn) : yn = t[167];
    let bn;
    t[168] !== D || t[169] !== vn ? (bn = (0, V.jsx)(p, {
        color: `secondary`,
        onClick: vn,
        size: `large`,
        className: `w-full md:w-auto`,
        type: `button`,
        disabled: D,
        children: yn
    }), t[168] = D, t[169] = vn, t[170] = bn) : bn = t[170];
    let xn = ie || he || D || H && Fe,
        Sn = a ? Ie.continueSetupButton : J.createCta,
        Cn;
    t[171] === Sn ? Cn = t[172] : (Cn = (0, V.jsx)(T, {
        ...Sn
    }), t[171] = Sn, t[172] = Cn);
    let wn;
    t[173] !== D || t[174] !== xn || t[175] !== Cn ? (wn = (0, V.jsx)(p, {
        color: `primary`,
        size: `large`,
        className: `w-full min-w-[170px] md:w-auto`,
        loading: D,
        disabled: xn,
        type: `submit`,
        children: Cn
    }), t[173] = D, t[174] = xn, t[175] = Cn, t[176] = wn) : wn = t[176];
    let $;
    t[177] !== bn || t[178] !== wn ? ($ = (0, V.jsxs)(`div`, {
        className: `flex flex-col-reverse gap-3 md:flex-row md:justify-end`,
        children: [bn, wn]
    }), t[177] = bn, t[178] = wn, t[179] = $) : $ = t[179];
    let Tn;
    t[180] !== Gt || t[181] !== rn || t[182] !== fn || t[183] !== pn || t[184] !== mn || t[185] !== hn || t[186] !== gn || t[187] !== _n || t[188] !== $ ? (Tn = (0, V.jsxs)(`form`, {
        className: `flex flex-col gap-4`,
        onSubmit: Gt,
        children: [rn, fn, pn, mn, hn, gn, _n, $]
    }), t[180] = Gt, t[181] = rn, t[182] = fn, t[183] = pn, t[184] = mn, t[185] = hn, t[186] = gn, t[187] = _n, t[188] = $, t[189] = Tn) : Tn = t[189];
    let En;
    return t[190] !== qt || t[191] !== jt || t[192] !== D || t[193] !== Xt || t[194] !== Zt || t[195] !== Qt || t[196] !== Tn ? (En = (0, V.jsx)(qt, {
        title: Xt,
        isOpen: !0,
        onClose: jt,
        position: `center`,
        showCloseButton: Zt,
        shouldIgnoreClickOutside: D,
        onEscapeKeyDown: Qt,
        size: `custom`,
        className: `max-h-[90vh] w-full md:max-w-[448px]`,
        testId: `modal-create-service-connector-from-template`,
        children: Tn
    }), t[190] = qt, t[191] = jt, t[192] = D, t[193] = Xt, t[194] = Zt, t[195] = Qt, t[196] = Tn, t[197] = En) : En = t[197], En
}

function Ze(e) {
    return !e
}

function Qe(e) {
    return (0, V.jsx)(`option`, {
        value: e,
        children: e
    }, e)
}

function $e() {
    m.danger(J.githubAppPrivateKeyInvalidFile)
}

function et() {}

function tt(e) {
    return e.type === `OAUTH` && e.client_credentials_required !== !1
}

function nt(e) {
    return e.type === `OAUTH`
}
var rt, B, V, it, at, ot, st, ct, lt, ut, H, dt, U, W, G, K, ft, q, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, J, wt = e((() => {
    rt = oe(), Le(), he(), P(), Re(), We(), Fe(), r(), je(), De(), Ce(), F(), we(), ie(), le(), de(), M(), Xe(), A(), ue(), f(), d(), k(), _e(), i(), v(), h(), b(), y(), ne(), S(), B = n(D()), Ve(), E(), V = C(), it = `templated_apps_GitHubEnterprise`, at = `templated_apps_GitLab`, ot = `private_key`, st = `webhook_secret`, ct = `hostname`, lt = {
        "application/octet-stream": [`.pem`],
        "application/pem-certificate-chain": [`.pem`],
        "application/x-pem-file": [`.pem`],
        "text/plain": [`.pem`]
    }, ut = `https://connectors.api.openai.com`, H = 32, dt = `chatgpt.service-template-native-create-uncertain:`, U = `chatgpt:service-template-create-lock`, W = new WeakMap, G = new WeakMap, K = new WeakMap, ft = e => typeof window > `u` ? () => {} : (window.addEventListener(U, e), () => window.removeEventListener(U, e)), q = () => {
        window.dispatchEvent(new Event(U))
    }, pt = `3541874775`, mt = e => {
        let t = ee(),
            n = _(),
            r = t?.getWorkspaceId();
        if (!(!r || !t?.normalizedAccountUserId || !n?.user?.id || t.authUserId !== n.user.id || n.account?.id !== r)) return `${dt}${JSON.stringify([r,t.normalizedAccountUserId,n.user.id,e])}`
    }, ht = e => {
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
    }, gt = (e, t, n) => {
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
    }, _t = (e, t) => {
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
    }, vt = e => {
        let t = new Set,
            n = [];
        for (let r of e.split(/\r?\n|,/)) {
            let e = r.trim();
            !e || t.has(e) || (t.add(e), n.push(e))
        }
        return n
    }, yt = e => new Promise((t, n) => {
        let r = new FileReader;
        r.onerror = () => n(Error(`Unable to read file.`)), r.onload = () => {
            if (typeof r.result == `string`) {
                t(r.result);
                return
            }
            n(Error(`File contents unavailable.`))
        }, r.readAsText(e)
    }), bt = e => `${ut}/connectors/${encodeURIComponent(e)}/webhook`, xt = () => {
        if (!globalThis.crypto?.getRandomValues) return ``;
        let e = new Uint8Array(H);
        return globalThis.crypto.getRandomValues(e), Array.from(e, e => e.toString(16).padStart(2, `0`)).join(``)
    }, St = async () => (await c.safeGet(`/aip/connectors/oauth/callback_id`, {})).callback_id ?? null, Ct = g(() => ({
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
                        [l]: N.ADMIN_SETTING
                    }
                }),
                t = a();
            return {
                connectors: (e.connectors ?? []).map(e => x(e, {
                    preferIconAssets: t
                })),
                templates: e.app_templates ?? []
            }
        },
        enabled: re()?.normalizedAccountUserId != null && ge()
    })), J = w({
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
    Xe as a, Ye as i, R as n, Ke as o, wt as r, z as t
};
//# sourceMappingURL=3864a2c9-na31hteqo9antrn2.js.map