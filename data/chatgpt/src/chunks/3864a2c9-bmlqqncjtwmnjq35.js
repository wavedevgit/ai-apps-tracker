import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as r,
    $T as i,
    A8 as a,
    Aw as o,
    GE as s,
    JE as c,
    L8 as l,
    LU as u,
    Ow as ee,
    RU as te,
    U1 as ne,
    V1 as re,
    Y7 as ie,
    eE as ae,
    est as oe,
    hat as d,
    pat as f,
    q1 as p,
    qE as m,
    tst as h
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as g,
    Ln as _,
    Nn as v,
    Rn as y,
    Vn as b,
    wn as x,
    zn as S
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Q as se,
    $rt as C,
    Bst as ce,
    FTn as w,
    Irt as le,
    Jrt as ue,
    LWn as de,
    Lrt as fe,
    Mit as pe,
    PTn as me,
    RQ as he,
    RWn as ge,
    Vst as _e,
    WQ as ve,
    e$ as ye,
    jit as be,
    kFn as xe,
    mFn as T,
    pFn as Se,
    rit as Ce,
    t$ as we,
    yFn as Te
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Bm as Ee,
    Gv as De,
    Gy as E,
    Vm as Oe,
    Wv as ke,
    Wy as Ae,
    bx as je,
    xx as Me
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    Bl as Ne,
    Hl as Pe,
    Ll as Fe,
    Rl as Ie,
    Ul as Le,
    Vl as Re,
    cy as D,
    hy as ze,
    zl as Be
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";
import {
    S as Ve,
    x as O
} from "./82782bc9-loong612qtaq7sd9.js";
var He = t({
    CreateServiceConnectorFromTemplateModal: () => Ue
});

function Ue(e) {
    "use forget";
    let t = (0, Xe.c)(191),
        {
            template: n,
            onClose: r,
            onCreateAttempt: a,
            personalTemplateSetup: o,
            onCreated: s,
            onWorkspaceDraftCreated: c
        } = e,
        l = S(),
        u = ve(),
        ne = ze(),
        ae = n.can_create === !1,
        d;
    t[0] === n.supported_auth_types ? d = t[1] : (d = n.supported_auth_types?.some(Ye) ?? !1, t[0] = n.supported_auth_types, t[1] = d);
    let f = d,
        p;
    t[2] === n.supported_auth_types ? p = t[3] : (p = n.supported_auth_types?.some(Je) ?? !1, t[2] = n.supported_auth_types, t[3] = p);
    let m = p,
        h = n.template_id === Ze,
        g = n.template_id === Qe,
        _;
    t[4] !== g || t[5] !== n.template_id ? (_ = g ? `https://help.openai.com/articles/20001487` : Ie(n.template_id), t[4] = g, t[5] = n.template_id, t[6] = _) : _ = t[6];
    let y = _,
        b;
    t[7] === n.link_params_schema ? b = t[8] : (b = pe(n.link_params_schema), t[7] = n.link_params_schema, t[8] = b);
    let x = b,
        [w, ue] = (0, k.useState)(!1),
        fe = (0, k.useRef)(!1),
        me;
    t[9] !== o || t[10] !== n.template_id ? (me = o ? void 0 : st(n.template_id), t[9] = o, t[10] = n.template_id, t[11] = me) : me = t[11];
    let he = me,
        ge;
    t[12] === he ? ge = t[13] : (ge = () => ct(he), t[12] = he, t[13] = ge);
    let _e = (0, k.useSyncExternalStore)(ot, ge, qe),
        ye = (0, k.useRef)(!1),
        xe;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (xe = {}, t[14] = xe) : xe = t[14];
    let [T, Se] = (0, k.useState)(xe), Te;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (Te = {}, t[15] = Te) : Te = t[15];
    let [Ee, De] = (0, k.useState)(Te), [E, Me] = (0, k.useState)(null), [Le, Re] = (0, k.useState)(f), [D, Be] = (0, k.useState)(!1), [O, He] = (0, k.useState)(null), [Ue, rt] = (0, k.useState)(null), [j, it] = (0, k.useState)(null), at = j?.connectorId, M;
    t[16] !== h || t[17] !== n.description || t[18] !== n.name || t[19] !== n.oauth_client_info?.default_scopes ? (M = () => ({
        name: n.name,
        description: n.description ?? ``,
        oauthClientId: ``,
        oauthClientSecret: ``,
        githubAppPrivateKey: ``,
        oauthClientScopes: (n.oauth_client_info?.default_scopes ?? []).join(`
`),
        gitlabHostname: ``,
        webhookSecret: h ? ft() : ``
    }), t[16] = h, t[17] = n.description, t[18] = n.name, t[19] = n.oauth_client_info?.default_scopes, t[20] = M) : M = t[20];
    let [P, F] = (0, k.useState)(M), ht;
    t[21] !== P.oauthClientId || t[22] !== P.oauthClientSecret ? (ht = P.oauthClientId.trim().length > 0 || P.oauthClientSecret.trim().length > 0, t[21] = P.oauthClientId, t[22] = P.oauthClientSecret, t[23] = ht) : ht = t[23];
    let I = m || ht,
        gt;
    t[24] !== x || t[25] !== Ee ? (gt = be(x, Ee), t[24] = x, t[25] = Ee, t[26] = gt) : gt = t[26];
    let _t = gt,
        vt = E ? Ne(E) ?? `` : ``,
        yt = at ? dt(at) : ``,
        bt, xt;
    t[27] === f ? (bt = t[28], xt = t[29]) : (bt = () => {
        if (!f) {
            Me(null), Re(!1);
            return
        }
        let e = !1;
        return Re(!0), Me(null), pt().then(t => {
            e || Me(t)
        }).catch(() => {
            e || Me(null)
        }).finally(() => {
            e || Re(!1)
        }), () => {
            e = !0
        }
    }, xt = [f], t[27] = f, t[28] = bt, t[29] = xt), (0, k.useEffect)(bt, xt);
    let St, Ct;
    t[30] === O ? (St = t[31], Ct = t[32]) : (St = () => {
        if (O == null) return;
        let e = window.setTimeout(() => {
            He(null)
        }, 2e3);
        return () => window.clearTimeout(e)
    }, Ct = [O], t[30] = O, t[31] = St, t[32] = Ct), (0, k.useEffect)(St, Ct);
    let wt;
    t[33] !== r || t[34] !== s || t[35] !== c || t[36] !== o ? (wt = e => {
        let t = e.creationContext,
            n = re();
        t && (n?.getWorkspaceId() !== t.workspaceId || n.normalizedAccountUserId !== t.accountUserId || n.authUserId !== t.actorUserId || oe()?.account?.id !== t.workspaceId || oe()?.user?.id !== t.actorUserId) ? r() : o && s && e.connector ? s(e.connector) : e.pluginId && c && e.connector ? c({
            connector: e.connector,
            pluginId: e.pluginId,
            connectorId: e.connectorId
        }) : r(e.connectorId)
    }, t[33] = r, t[34] = s, t[35] = c, t[36] = o, t[37] = wt) : wt = t[37];
    let L = wt,
        Tt;
    t[38] !== j || t[39] !== L || t[40] !== w || t[41] !== r ? (Tt = () => {
        w || (j ? L(j) : r())
    }, t[38] = j, t[39] = L, t[40] = w, t[41] = r, t[42] = Tt) : Tt = t[42];
    let Et = Tt,
        Dt;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (Dt = e => {
        Se(t => {
            if (!t[e]) return t;
            let n = {
                ...t
            };
            return delete n[e], n
        })
    }, t[43] = Dt) : Dt = t[43];
    let R = Dt,
        Ot = (e, t) => {
            De(n => ({
                ...n,
                [e]: t
            })), o && (e === `hostname` || e === `workspace_host`) && !ye.current && F(e => ({
                ...e,
                name: se(n.name, t)
            })), R(e)
        },
        kt;
    t[44] === R ? kt = t[45] : (kt = async e => {
        try {
            let t = await ut(e);
            F(e => ({
                ...e,
                githubAppPrivateKey: t
            })), rt(e.name), R(`githubAppPrivateKey`)
        } catch {
            te.danger(N.githubAppPrivateKeyReadError)
        }
    }, t[44] = R, t[45] = kt);
    let At = kt,
        z;
    t[46] === At ? z = t[47] : (z = e => {
        e.length > 0 && At(e[0])
    }, t[46] = At, t[47] = z);
    let jt;
    t[48] !== w || t[49] !== z ? (jt = {
        accept: nt,
        disabled: w,
        multiple: !1,
        noClick: !0,
        noKeyboard: !0,
        onDropAccepted: z,
        onDropRejected: Ke
    }, t[48] = w, t[49] = z, t[50] = jt) : jt = t[50];
    let {
        getInputProps: Mt,
        getRootProps: Nt,
        isDragActive: Pt,
        open: Ft
    } = Ve(jt), It;
    t[51] === Symbol.for(`react.memo_cache_sentinel`) ? (It = async (e, t) => {
        if (t) try {
            await navigator.clipboard.writeText(t), He(e)
        } catch {
            He(null)
        }
    }, t[51] = It) : It = t[51];
    let Lt = It,
        Rt;
    t[52] !== E || t[53] !== _t || t[54] !== L || t[55] !== l || t[56] !== ne || t[57] !== g || t[58] !== h || t[59] !== x || t[60] !== u || t[61] !== a || t[62] !== o || t[63] !== I || t[64] !== n.logo_url || t[65] !== n.logo_url_dark || t[66] !== n.template_id || t[67] !== ae || t[68] !== P.description || t[69] !== P.githubAppPrivateKey || t[70] !== P.gitlabHostname || t[71] !== P.name || t[72] !== P.oauthClientId || t[73] !== P.oauthClientScopes || t[74] !== P.oauthClientSecret || t[75] !== P.webhookSecret ? (Rt = async e => {
        if (e?.preventDefault(), ae || fe.current) return;
        let t = o ? void 0 : st(n.template_id);
        if (ct(t)) {
            te.danger(l.formatMessage(N.nativeCompletionUncertain));
            return
        }
        let r = {},
            i = P.name.trim(),
            s = P.description.trim(),
            c = P.oauthClientId.trim(),
            ee = P.oauthClientSecret.trim(),
            oe = P.githubAppPrivateKey.trim(),
            d = P.gitlabHostname.trim(),
            f = h && I,
            p = P.webhookSecret.trim(),
            m = h;
        i || (r.name = l.formatMessage(N.requiredField)), I && (c || (r.oauthClientId = l.formatMessage(N.requiredField)), ee || (r.oauthClientSecret = l.formatMessage(N.requiredField)), f && !oe && (r.githubAppPrivateKey = l.formatMessage(N.requiredField)), E || (r.callbackId = l.formatMessage(g ? N.gitlabRedirectUriUnavailable : N.callbackUrlUnavailable))), g && !d && (r.gitlabHostname = l.formatMessage(N.requiredField)), m && (p || (r.webhookSecret = l.formatMessage(N.requiredField)));
        let {
            sanitizedLinkParams: _,
            errors: v,
            hasPatternErrors: y
        } = Ce(x, _t, l);
        if (Object.assign(r, v), Object.keys(r).length > 0) {
            Se(r), Object.keys(v).length > 0 && te.danger(l.formatMessage(y ? C.invalidFieldsToast : C.requiredFieldsToast));
            return
        }
        ue(!0), fe.current = !0;
        let b = {
                name: i,
                description: s,
                logo_url: n.logo_url,
                logo_url_dark: n.logo_url_dark,
                link_params: _,
                create_as_draft: !0
            },
            S = {};
        m && (S[et] = p), f && (S[$e] = oe), g && (S[tt] = d);
        let se = {
            ...b,
            ...Object.keys(S).length > 0 ? {
                additional_config: S
            } : {},
            ...I ? {
                oauth_client_id: c,
                oauth_client_secret: ee,
                oauth_client_scopes: lt(P.oauthClientScopes),
                callback_id: E ?? void 0
            } : {}
        };
        try {
            let e;
            if (o) {
                a?.();
                let t = await we(o, se);
                e = {
                    connectorId: t.connector.id,
                    connector: t.connector,
                    pluginId: t.plugin_id?.trim() || void 0
                }
            } else {
                let t = re(),
                    r = t?.getWorkspaceId(),
                    i = r && t?.normalizedAccountUserId && t.authUserId ? {
                        workspaceId: r,
                        accountUserId: t.normalizedAccountUserId,
                        actorUserId: t.authUserId
                    } : void 0;
                a?.();
                let o = await ie.safePost(`/aip/connectors/templates/{template_id}/instantiate`, {
                    parameters: {
                        path: {
                            template_id: n.template_id
                        }
                    },
                    requestBody: se
                });
                e = {
                    connectorId: o.connector.id,
                    connector: o.connector,
                    pluginId: o.plugin_id?.trim() || void 0,
                    creationContext: i
                }
            }
            o || (await Promise.all([ne(), mt.refetch()]), u(), te.success(l.formatMessage(N.success))), m ? it(e) : L(e)
        } catch (e) {
            let t = e;
            te.danger(Pe(t, l), {
                toastId: `create_service_template_draft_error`,
                analyticsToastId: `create_service_template_draft_error`
            })
        }
        fe.current = !1, ue(!1)
    }, t[52] = E, t[53] = _t, t[54] = L, t[55] = l, t[56] = ne, t[57] = g, t[58] = h, t[59] = x, t[60] = u, t[61] = a, t[62] = o, t[63] = I, t[64] = n.logo_url, t[65] = n.logo_url_dark, t[66] = n.template_id, t[67] = ae, t[68] = P.description, t[69] = P.githubAppPrivateKey, t[70] = P.gitlabHostname, t[71] = P.name, t[72] = P.oauthClientId, t[73] = P.oauthClientScopes, t[74] = P.oauthClientSecret, t[75] = P.webhookSecret, t[76] = Rt) : Rt = t[76];
    let zt = Rt,
        Bt;
    t[77] !== O || t[78] !== l ? (Bt = e => {
        let {
            setupValueKey: t,
            label: n,
            value: r,
            isLoading: i,
            loadingLabel: a,
            unavailableLabel: o,
            ariaLabel: s
        } = e, c = O === t, u = !!r && !i, ee = i ? a : r || o;
        return (0, A.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, A.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3`,
                children: [(0, A.jsx)(`span`, {
                    className: `text-token-text-primary text-xs font-semibold`,
                    children: n
                }), (0, A.jsx)(`span`, {
                    className: `text-token-text-tertiary text-xs`,
                    children: (0, A.jsx)(v, {
                        ...c ? N.setupUrlCopied : u ? N.setupUrlCopyHint : N.setupUrlCopyUnavailable
                    })
                })]
            }), (0, A.jsxs)(`button`, {
                type: `button`,
                onClick: () => void Lt(t, r),
                disabled: !u,
                className: `border-token-border-light bg-token-bg-primary flex w-full items-center justify-between gap-3 rounded-md border px-3 py-2 text-start text-xs shadow-sm transition-colors ${u?`hover:bg-token-main-surface-secondary`:`cursor-default opacity-70`}`,
                "aria-label": s,
                title: u ? l.formatMessage(N.setupUrlCopyHint) : void 0,
                children: [(0, A.jsx)(`span`, {
                    className: `text-token-text-secondary font-mono break-all`,
                    children: ee
                }), (0, A.jsx)(`span`, {
                    className: `border-token-border-light bg-token-bg-secondary text-token-text-secondary flex h-8 w-8 shrink-0 items-center justify-center rounded-md border`,
                    children: c ? (0, A.jsx)(je, {
                        className: `icon-sm`
                    }) : (0, A.jsx)(Ae, {
                        className: `icon-sm`
                    })
                })]
            })]
        })
    }, t[77] = O, t[78] = l, t[79] = Bt) : Bt = t[79];
    let B = Bt;
    if (j) {
        let e;
        t[80] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, A.jsx)(v, {
            ...N.githubWebhookReadyTitle
        }), t[80] = e) : e = t[80];
        let n;
        t[81] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, A.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, A.jsx)(v, {
                ...N.githubWebhookReadyBody
            })
        }), t[81] = n) : n = t[81];
        let r;
        t[82] !== l || t[83] !== h || t[84] !== B || t[85] !== P.webhookSecret ? (r = h ? B({
            setupValueKey: `webhookSecret`,
            label: (0, A.jsx)(v, {
                ...N.githubWebhookSecretLabel
            }),
            value: P.webhookSecret,
            isLoading: !1,
            loadingLabel: l.formatMessage(N.setupUrlLoading),
            unavailableLabel: l.formatMessage(N.githubWebhookSecretUnavailable),
            ariaLabel: l.formatMessage(N.copyGithubWebhookSecretAriaLabel)
        }) : null, t[82] = l, t[83] = h, t[84] = B, t[85] = P.webhookSecret, t[86] = r) : r = t[86];
        let a;
        t[87] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, A.jsx)(v, {
            ...N.webhookUrlLabel
        }), t[87] = a) : a = t[87];
        let o;
        t[88] !== j || t[89] !== L ? (o = () => L(j), t[88] = j, t[89] = L, t[90] = o) : o = t[90];
        let s;
        t[91] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, A.jsx)(v, {
            ...N.doneCta
        }), t[91] = s) : s = t[91];
        let c;
        return t[92] === o ? c = t[93] : (c = (0, A.jsx)(`div`, {
            className: `flex justify-end`,
            children: (0, A.jsx)(i, {
                color: `primary`,
                onClick: o,
                size: `large`,
                className: `w-full md:w-auto`,
                type: `button`,
                children: s
            })
        }), t[92] = o, t[93] = c), (0, A.jsx)(ee, {
            title: e,
            isOpen: !0,
            onClose: Et,
            position: `center`,
            showCloseButton: !0,
            size: `custom`,
            className: `max-h-[90vh] w-full md:max-w-[448px]`,
            testId: `modal-create-service-connector-webhook-url`,
            children: (0, A.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [n, r, B({
                    setupValueKey: `webhook`,
                    label: a,
                    value: yt,
                    isLoading: !1,
                    loadingLabel: l.formatMessage(N.setupUrlLoading),
                    unavailableLabel: l.formatMessage(N.setupUrlUnavailable),
                    ariaLabel: l.formatMessage(N.copyWebhookUrlAriaLabel)
                }), c]
            })
        })
    }
    let Vt = ee,
        Ht = o ? Fe.connectTemplateAppModalTitle : Fe.createTemplateAppModalTitle,
        V;
    t[94] === n.name ? V = t[95] : (V = {
        templateName: n.name
    }, t[94] = n.name, t[95] = V);
    let H;
    t[96] !== Ht || t[97] !== V ? (H = (0, A.jsx)(`span`, {
        className: `flex items-center gap-1`,
        children: (0, A.jsx)(v, {
            ...Ht,
            values: V
        })
    }), t[96] = Ht, t[97] = V, t[98] = H) : H = t[98];
    let Ut = !w,
        U;
    t[99] === w ? U = t[100] : (U = e => {
        w && e.preventDefault()
    }, t[99] = w, t[100] = U);
    let W;
    t[101] !== o || t[102] !== m || t[103] !== n.name ? (W = o ? (0, A.jsx)(v, {
        id: `chatgpt.plugins.template_setup.description`,
        defaultMessage: `Enter your server settings, then continue to sign in.`
    }) : (0, A.jsx)(v, {
        ...m ? N.bodyWithOauth : N.bodyWithoutOauth,
        values: {
            templateName: n.name
        }
    }), t[101] = o, t[102] = m, t[103] = n.name, t[104] = W) : W = t[104];
    let G;
    t[105] === y ? G = t[106] : (G = y ? (0, A.jsxs)(A.Fragment, {
        children: [` `, (0, A.jsxs)(de, {
            href: y,
            openNewTab: !0,
            className: `text-token-text-tertiary inline-flex items-center gap-1 text-sm no-underline! hover:underline!`,
            children: [(0, A.jsx)(v, {
                ...N.setupGuideLink
            }), (0, A.jsx)(ke, {
                className: `h-3 w-3`
            })]
        })]
    }) : null, t[105] = y, t[106] = G);
    let K;
    t[107] !== W || t[108] !== G ? (K = (0, A.jsxs)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: [W, G]
    }), t[107] = W, t[108] = G, t[109] = K) : K = t[109];
    let q;
    t[110] === _e ? q = t[111] : (q = _e ? (0, A.jsx)(`p`, {
        className: `text-status-critical text-sm`,
        role: `alert`,
        children: (0, A.jsx)(v, {
            ...N.nativeCompletionUncertain
        })
    }) : null, t[110] = _e, t[111] = q);
    let J;
    t[112] !== K || t[113] !== q ? (J = (0, A.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [K, q]
    }), t[112] = K, t[113] = q, t[114] = J) : J = t[114];
    let Wt;
    t[115] === Symbol.for(`react.memo_cache_sentinel`) ? (Wt = (0, A.jsx)(`label`, {
        htmlFor: `service-template-name`,
        className: `mb-1 block text-sm font-medium`,
        children: (0, A.jsx)(v, {
            ...N.nameLabel
        })
    }), t[115] = Wt) : Wt = t[115];
    let Y;
    t[116] === l ? Y = t[117] : (Y = l.formatMessage(N.nameLabel), t[116] = l, t[117] = Y);
    let Gt = o ? void 0 : `service-template-name-help`,
        X;
    t[118] === R ? X = t[119] : (X = e => {
        ye.current = !0, F(t => ({
            ...t,
            name: e.target.value
        })), R(`name`)
    }, t[118] = R, t[119] = X);
    let Z;
    t[120] !== T.name || t[121] !== w || t[122] !== Y || t[123] !== Gt || t[124] !== X || t[125] !== P.name ? (Z = (0, A.jsx)(le, {
        name: `service-template-name`,
        ariaLabel: Y,
        "aria-describedby": Gt,
        value: P.name,
        onChange: X,
        disabled: w,
        error: T.name,
        inputClassName: `bg-token-bg-primary!`
    }), t[120] = T.name, t[121] = w, t[122] = Y, t[123] = Gt, t[124] = X, t[125] = P.name, t[126] = Z) : Z = t[126];
    let Kt;
    t[127] === o ? Kt = t[128] : (Kt = o ? null : (0, A.jsx)(`p`, {
        id: `service-template-name-help`,
        className: `text-token-text-tertiary mt-1 text-xs`,
        children: (0, A.jsx)(v, {
            ...N.nameDescription
        })
    }), t[127] = o, t[128] = Kt);
    let qt;
    t[129] !== Z || t[130] !== Kt ? (qt = (0, A.jsxs)(`div`, {
        children: [Wt, Z, Kt]
    }), t[129] = Z, t[130] = Kt, t[131] = qt) : qt = t[131];
    let Jt;
    t[132] !== l || t[133] !== w || t[134] !== o || t[135] !== P.description ? (Jt = o ? null : (0, A.jsxs)(`div`, {
        children: [(0, A.jsx)(`label`, {
            htmlFor: `service-template-description`,
            className: `mb-1 block text-sm font-medium`,
            children: (0, A.jsx)(v, {
                ...N.descriptionLabel
            })
        }), (0, A.jsx)(ce, {
            name: `service-template-description`,
            ariaLabel: l.formatMessage(N.descriptionLabel),
            "aria-describedby": `service-template-description-help`,
            value: P.description,
            onChange: e => F(t => ({
                ...t,
                description: e.target.value
            })),
            disabled: w,
            inputClassName: `bg-token-bg-primary!`
        }), (0, A.jsx)(`p`, {
            id: `service-template-description-help`,
            className: `text-token-text-tertiary mt-1 text-xs`,
            children: (0, A.jsx)(v, {
                ...N.descriptionDescription
            })
        })]
    }), t[132] = l, t[133] = w, t[134] = o, t[135] = P.description, t[136] = Jt) : Jt = t[136];
    let Q;
    t[137] !== qt || t[138] !== Jt ? (Q = (0, A.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [qt, Jt]
    }), t[137] = qt, t[138] = Jt, t[139] = Q) : Q = t[139];
    let Yt = x.length > 0 ? (0, A.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, A.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [(0, A.jsx)(`h3`, {
                    className: `text-sm font-semibold`,
                    children: (0, A.jsx)(v, {
                        ...C.sectionTitle
                    })
                }), (0, A.jsx)(`p`, {
                    className: `text-token-text-secondary text-xs`,
                    children: (0, A.jsx)(v, {
                        ...C.sectionDescription
                    })
                })]
            }), x.map(e => {
                let t = e.required ? l.formatMessage(C.fieldLabelRequired, {
                        label: e.title
                    }) : e.title,
                    n = T[e.name],
                    r = _t[e.name] ?? ``;
                return e.enumValues && e.enumValues.length > 0 ? (0, A.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, A.jsx)(`label`, {
                        htmlFor: `service-template-link-param-${e.name}`,
                        className: `text-sm font-medium`,
                        children: t
                    }), (0, A.jsx)(`select`, {
                        id: `service-template-link-param-${e.name}`,
                        className: `border-token-border-light bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:ring-1 focus:outline-none`,
                        value: r,
                        onChange: t => Ot(e.name, t.target.value),
                        disabled: w,
                        children: e.enumValues.map(Ge)
                    }), e.description ? (0, A.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: e.description
                    }) : null, n ? (0, A.jsx)(`p`, {
                        className: `text-status-critical text-xs`,
                        children: n
                    }) : null]
                }, e.name) : (0, A.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, A.jsx)(`label`, {
                        htmlFor: `service-template-link-param-${e.name}`,
                        className: `mb-1 block text-sm font-medium`,
                        children: t
                    }), (0, A.jsx)(le, {
                        name: `service-template-link-param-${e.name}`,
                        ariaLabel: t,
                        value: r,
                        onChange: t => Ot(e.name, t.target.value),
                        disabled: w,
                        placeholder: l.formatMessage(C.fieldPlaceholder, {
                            label: e.example ?? e.title
                        }),
                        error: n,
                        inputClassName: `bg-token-bg-primary!`
                    }), e.description ? (0, A.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: e.description
                    }) : null]
                }, e.name)
            })]
        }) : null,
        Xt;
    t[140] !== T.gitlabHostname || t[141] !== l || t[142] !== g || t[143] !== w || t[144] !== R || t[145] !== P.gitlabHostname ? (Xt = g ? (0, A.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [(0, A.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, A.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, A.jsx)(v, {
                    ...N.gitlabInstanceSectionTitle
                })
            }), (0, A.jsx)(`p`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, A.jsx)(v, {
                    ...N.gitlabHostnameDescription
                })
            })]
        }), (0, A.jsxs)(`div`, {
            children: [(0, A.jsx)(`label`, {
                htmlFor: `service-template-gitlab-hostname`,
                className: `mb-1 block text-sm font-medium`,
                children: (0, A.jsx)(v, {
                    ...N.gitlabHostnameLabel
                })
            }), (0, A.jsx)(le, {
                name: `service-template-gitlab-hostname`,
                ariaLabel: l.formatMessage(N.gitlabHostnameLabel),
                value: P.gitlabHostname,
                onChange: e => {
                    F(t => ({
                        ...t,
                        gitlabHostname: e.target.value
                    })), R(`gitlabHostname`)
                },
                disabled: w,
                error: T.gitlabHostname,
                placeholder: l.formatMessage(N.gitlabHostnamePlaceholder),
                inputClassName: `bg-token-bg-primary!`
            })]
        })]
    }) : null, t[140] = T.gitlabHostname, t[141] = l, t[142] = g, t[143] = w, t[144] = R, t[145] = P.gitlabHostname, t[146] = Xt) : Xt = t[146];
    let Zt;
    t[147] !== w || t[148] !== m || t[149] !== D || t[150] !== f ? (Zt = f && !m ? (0, A.jsx)(`div`, {
        children: (0, A.jsx)(i, {
            color: `secondary`,
            size: `small`,
            type: `button`,
            "aria-expanded": D,
            onClick: () => Be(We),
            disabled: w,
            children: (0, A.jsx)(v, {
                ...D ? N.hideAdvancedSettings : N.showAdvancedSettings
            })
        })
    }) : null, t[147] = w, t[148] = m, t[149] = D, t[150] = f, t[151] = Zt) : Zt = t[151];
    let Qt = f && (m || D) ? (0, A.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, A.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, A.jsx)(v, {
                    ...N.oauthSectionTitle
                })
            }), B({
                setupValueKey: `callback`,
                label: (0, A.jsx)(v, {
                    ...g ? N.gitlabOauthRedirectUriLabel : N.oauthCallbackUrlLabel
                }),
                value: vt,
                isLoading: Le,
                loadingLabel: l.formatMessage(N.setupUrlLoading),
                unavailableLabel: l.formatMessage(N.setupUrlUnavailable),
                ariaLabel: l.formatMessage(g ? N.copyGitlabOauthRedirectUriAriaLabel : N.copyOauthCallbackUrlAriaLabel)
            }), T.callbackId ? (0, A.jsx)(`p`, {
                className: `text-status-critical text-xs`,
                children: T.callbackId
            }) : null, (0, A.jsxs)(`div`, {
                children: [(0, A.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-id`,
                    className: `mb-1 block text-sm font-medium`,
                    children: (0, A.jsx)(v, {
                        ...N.oauthClientIdLabel
                    })
                }), (0, A.jsx)(le, {
                    name: `service-template-oauth-client-id`,
                    ariaLabel: l.formatMessage(N.oauthClientIdLabel),
                    value: P.oauthClientId,
                    onChange: e => {
                        F(t => ({
                            ...t,
                            oauthClientId: e.target.value
                        })), R(`oauthClientId`)
                    },
                    disabled: w,
                    error: T.oauthClientId,
                    inputClassName: `bg-token-bg-primary!`
                })]
            }), (0, A.jsxs)(`div`, {
                children: [(0, A.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-secret`,
                    className: `mb-1 block text-sm font-medium`,
                    children: (0, A.jsx)(v, {
                        ...N.oauthClientSecretLabel
                    })
                }), (0, A.jsx)(le, {
                    name: `service-template-oauth-client-secret`,
                    ariaLabel: l.formatMessage(N.oauthClientSecretLabel),
                    type: `password`,
                    value: P.oauthClientSecret,
                    onChange: e => {
                        F(t => ({
                            ...t,
                            oauthClientSecret: e.target.value
                        })), R(`oauthClientSecret`)
                    },
                    disabled: w,
                    error: T.oauthClientSecret,
                    inputClassName: `bg-token-bg-primary!`
                })]
            }), h ? (0, A.jsx)(`div`, {
                className: `flex flex-col gap-4`,
                children: (0, A.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, A.jsx)(`label`, {
                        htmlFor: `service-template-github-app-private-key`,
                        className: `text-sm font-medium`,
                        children: (0, A.jsx)(v, {
                            ...N.githubAppPrivateKeyLabel
                        })
                    }), (0, A.jsxs)(`div`, {
                        className: `flex flex-col gap-2`,
                        children: [(0, A.jsxs)(`div`, {
                            ...Nt({
                                className: `border-token-border-light bg-token-bg-primary flex flex-col items-center gap-2 rounded-md border border-dashed px-4 py-5 text-center transition-colors ${Pt?`border-token-text-primary bg-token-main-surface-secondary`:``}`
                            }),
                            children: [(0, A.jsx)(`input`, {
                                ...Mt()
                            }), (0, A.jsx)(Oe, {
                                className: `text-token-text-secondary h-5 w-5`
                            }), (0, A.jsx)(`p`, {
                                className: `text-token-text-secondary text-sm`,
                                children: (0, A.jsx)(v, {
                                    ...N.githubAppPrivateKeyUploadLabel
                                })
                            }), (0, A.jsx)(i, {
                                type: `button`,
                                color: `secondary`,
                                size: `small`,
                                disabled: w,
                                onClick: () => Ft(),
                                children: (0, A.jsx)(v, {
                                    ...N.githubAppPrivateKeyUploadBrowseCta
                                })
                            })]
                        }), Ue ? (0, A.jsx)(`p`, {
                            className: `text-token-text-tertiary text-xs`,
                            children: (0, A.jsx)(v, {
                                ...N.githubAppPrivateKeyFileLoaded,
                                values: {
                                    fileName: Ue
                                }
                            })
                        }) : null]
                    }), (0, A.jsx)(`textarea`, {
                        id: `service-template-github-app-private-key`,
                        className: `border-token-border-light bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary w-full rounded-md border px-3 py-2 font-mono text-sm shadow-sm focus:ring-1 focus:outline-none`,
                        value: P.githubAppPrivateKey,
                        onChange: e => {
                            F(t => ({
                                ...t,
                                githubAppPrivateKey: e.target.value
                            })), rt(null), R(`githubAppPrivateKey`)
                        },
                        rows: 5,
                        disabled: w,
                        placeholder: l.formatMessage(N.githubAppPrivateKeyPlaceholder),
                        "aria-label": l.formatMessage(N.githubAppPrivateKeyLabel)
                    }), (0, A.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: (0, A.jsx)(v, {
                            ...N.githubAppPrivateKeyDescription
                        })
                    }), T.githubAppPrivateKey ? (0, A.jsx)(`p`, {
                        className: `text-status-critical text-xs`,
                        children: T.githubAppPrivateKey
                    }) : null]
                })
            }) : null, (0, A.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [(0, A.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-scopes`,
                    className: `text-sm font-medium`,
                    children: (0, A.jsx)(v, {
                        ...g ? N.gitlabOauthClientScopesLabel : N.oauthClientScopesLabel
                    })
                }), (0, A.jsx)(`textarea`, {
                    id: `service-template-oauth-client-scopes`,
                    className: `border-token-border-light bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:ring-1 focus:outline-none`,
                    value: P.oauthClientScopes,
                    onChange: e => F(t => ({
                        ...t,
                        oauthClientScopes: e.target.value
                    })),
                    rows: 3,
                    disabled: w,
                    readOnly: g,
                    placeholder: l.formatMessage(N.oauthClientScopesPlaceholder)
                }), (0, A.jsx)(`p`, {
                    className: `text-token-text-tertiary text-xs`,
                    children: (0, A.jsx)(v, {
                        ...g ? N.gitlabOauthClientScopesDescription : N.oauthClientScopesDescription
                    })
                })]
            })]
        }) : null,
        $t;
    t[152] !== T.webhookSecret || t[153] !== l || t[154] !== h || t[155] !== B || t[156] !== P.webhookSecret ? ($t = h ? (0, A.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [(0, A.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, A.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, A.jsx)(v, {
                    ...N.githubWebhookSectionTitle
                })
            }), (0, A.jsx)(`p`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, A.jsx)(v, {
                    ...N.githubWebhookSetupDescription
                })
            })]
        }), B({
            setupValueKey: `webhookSecret`,
            label: (0, A.jsx)(v, {
                ...N.githubWebhookSecretLabel
            }),
            value: P.webhookSecret,
            isLoading: !1,
            loadingLabel: l.formatMessage(N.setupUrlLoading),
            unavailableLabel: l.formatMessage(N.githubWebhookSecretUnavailable),
            ariaLabel: l.formatMessage(N.copyGithubWebhookSecretAriaLabel)
        }), T.webhookSecret ? (0, A.jsx)(`p`, {
            className: `text-status-critical text-xs`,
            children: T.webhookSecret
        }) : null]
    }) : null, t[152] = T.webhookSecret, t[153] = l, t[154] = h, t[155] = B, t[156] = P.webhookSecret, t[157] = $t) : $t = t[157];
    let en;
    t[158] === r ? en = t[159] : (en = () => r(), t[158] = r, t[159] = en);
    let tn;
    t[160] === Symbol.for(`react.memo_cache_sentinel`) ? (tn = (0, A.jsx)(v, {
        ...N.cancelCta
    }), t[160] = tn) : tn = t[160];
    let nn;
    t[161] !== w || t[162] !== en ? (nn = (0, A.jsx)(i, {
        color: `secondary`,
        onClick: en,
        size: `large`,
        className: `w-full md:w-auto`,
        type: `button`,
        disabled: w,
        children: tn
    }), t[161] = w, t[162] = en, t[163] = nn) : nn = t[163];
    let rn = ae || _e || w || I && Le,
        an = o ? Fe.continueSetupButton : N.createCta,
        on;
    t[164] === an ? on = t[165] : (on = (0, A.jsx)(v, {
        ...an
    }), t[164] = an, t[165] = on);
    let sn;
    t[166] !== w || t[167] !== rn || t[168] !== on ? (sn = (0, A.jsx)(i, {
        color: `primary`,
        size: `large`,
        className: `w-full min-w-[170px] md:w-auto`,
        loading: w,
        disabled: rn,
        type: `submit`,
        children: on
    }), t[166] = w, t[167] = rn, t[168] = on, t[169] = sn) : sn = t[169];
    let cn;
    t[170] !== nn || t[171] !== sn ? (cn = (0, A.jsxs)(`div`, {
        className: `flex flex-col-reverse gap-3 md:flex-row md:justify-end`,
        children: [nn, sn]
    }), t[170] = nn, t[171] = sn, t[172] = cn) : cn = t[172];
    let $;
    t[173] !== zt || t[174] !== J || t[175] !== Q || t[176] !== Yt || t[177] !== Xt || t[178] !== Zt || t[179] !== Qt || t[180] !== $t || t[181] !== cn ? ($ = (0, A.jsxs)(`form`, {
        className: `flex flex-col gap-4`,
        onSubmit: zt,
        children: [J, Q, Yt, Xt, Zt, Qt, $t, cn]
    }), t[173] = zt, t[174] = J, t[175] = Q, t[176] = Yt, t[177] = Xt, t[178] = Zt, t[179] = Qt, t[180] = $t, t[181] = cn, t[182] = $) : $ = t[182];
    let ln;
    return t[183] !== Vt || t[184] !== Et || t[185] !== w || t[186] !== H || t[187] !== Ut || t[188] !== U || t[189] !== $ ? (ln = (0, A.jsx)(Vt, {
        title: H,
        isOpen: !0,
        onClose: Et,
        position: `center`,
        showCloseButton: Ut,
        shouldIgnoreClickOutside: w,
        onEscapeKeyDown: U,
        size: `custom`,
        className: `max-h-[90vh] w-full md:max-w-[448px]`,
        testId: `modal-create-service-connector-from-template`,
        children: $
    }), t[183] = Vt, t[184] = Et, t[185] = w, t[186] = H, t[187] = Ut, t[188] = U, t[189] = $, t[190] = ln) : ln = t[190], ln
}

function We(e) {
    return !e
}

function Ge(e) {
    return (0, A.jsx)(`option`, {
        value: e,
        children: e
    }, e)
}

function Ke() {
    te.danger(N.githubAppPrivateKeyInvalidFile)
}

function qe() {
    return !1
}

function Je(e) {
    return e.type === `OAUTH` && e.client_credentials_required !== !1
}

function Ye(e) {
    return e.type === `OAUTH`
}
var Xe, k, A, Ze, Qe, $e, et, tt, nt, rt, j, it, at, M, ot, st, ct, lt, ut, dt, ft, pt, mt, N, P = e((() => {
    Xe = x(), Be(), ye(), ue(), Le(), Re(), ae(), D(), De(), Me(), E(), Ee(), o(), _e(), fe(), ge(), he(), w(), h(), xe(), Se(), a(), p(), u(), c(), d(), r(), k = n(b()), O(), y(), A = g(), Ze = `templated_apps_GitHubEnterprise`, Qe = `templated_apps_GitLab`, $e = `private_key`, et = `webhook_secret`, tt = `hostname`, nt = {
        "application/octet-stream": [`.pem`],
        "application/pem-certificate-chain": [`.pem`],
        "application/x-pem-file": [`.pem`],
        "text/plain": [`.pem`]
    }, rt = `https://connectors.api.openai.com`, j = 32, it = `chatgpt.service-template-native-create-uncertain:`, at = `chatgpt:service-template-create-lock`, M = new WeakMap, ot = e => typeof window > `u` ? () => {} : (window.addEventListener(at, e), window.addEventListener(`storage`, e), () => {
        window.removeEventListener(at, e), window.removeEventListener(`storage`, e)
    }), st = e => {
        let t = re(),
            n = oe(),
            r = t?.getWorkspaceId();
        if (!(!r || !t?.normalizedAccountUserId || !n?.user?.id || t.authUserId !== n.user.id || n.account?.id !== r)) return `${it}${JSON.stringify([r,t.normalizedAccountUserId,n.user.id,e])}`
    }, ct = e => {
        if (!e || typeof window > `u`) return !1;
        let t = M.get(window) ?? new Set;
        try {
            let n = window.sessionStorage.getItem(e);
            (n === `pending` || n === `uncertain`) && (t.add(e), M.set(window, t))
        } catch {}
        return t.has(e)
    }, lt = e => {
        let t = new Set,
            n = [];
        for (let r of e.split(/\r?\n|,/)) {
            let e = r.trim();
            !e || t.has(e) || (t.add(e), n.push(e))
        }
        return n
    }, ut = e => new Promise((t, n) => {
        let r = new FileReader;
        r.onerror = () => n(Error(`Unable to read file.`)), r.onload = () => {
            if (typeof r.result == `string`) {
                t(r.result);
                return
            }
            n(Error(`File contents unavailable.`))
        }, r.readAsText(e)
    }), dt = e => `${rt}/connectors/${encodeURIComponent(e)}/webhook`, ft = () => {
        if (!globalThis.crypto?.getRandomValues) return ``;
        let e = new Uint8Array(j);
        return globalThis.crypto.getRandomValues(e), Array.from(e, e => e.toString(16).padStart(2, `0`)).join(``)
    }, pt = async () => (await ie.safeGet(`/aip/connectors/oauth/callback_id`, {})).callback_id ?? null, mt = l(() => ({
        queryKey: Te(`workspace_settings`, !0, !1),
        queryFn: async () => {
            let e = await ie.safePost(`/aip/connectors/list_accessible`, {
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
                        [f]: me.ADMIN_SETTING
                    }
                }),
                t = m();
            return {
                connectors: (e.connectors ?? []).map(e => s(e, {
                    preferIconAssets: t
                })),
                templates: e.app_templates ?? []
            }
        },
        enabled: ne()?.normalizedAccountUserId != null && T()
    })), N = _({
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
            id: `chatgpt.connector_settings.service_template.creation_disabled.alert`,
            defaultMessage: `A previous attempt may have created a draft. Check your drafts. Creation is disabled here to avoid making a duplicate.`
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
    He as n, P as r, Ue as t
};
//# sourceMappingURL=3864a2c9-bmlqqncjtwmnjq35.js.map