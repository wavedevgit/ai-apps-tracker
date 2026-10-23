import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    A8 as i,
    Aw as a,
    GE as o,
    I7 as s,
    JE as c,
    L8 as l,
    LU as u,
    M7 as ee,
    Ow as te,
    RU as ne,
    Sat as re,
    U1 as ie,
    V1 as ae,
    bat as d,
    cst as f,
    eE as p,
    q1 as m,
    qE as h,
    sst as g
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as _,
    Ln as v,
    Nn as y,
    Rn as b,
    Vn as x,
    wn as S,
    zn as C
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Q as oe,
    $rt as w,
    Bst as se,
    DFn as T,
    EFn as ce,
    HFn as le,
    Irt as ue,
    Jrt as de,
    Lrt as fe,
    MFn as pe,
    Mit as me,
    RQ as he,
    RTn as ge,
    Vst as _e,
    WQ as ve,
    XWn as ye,
    ZWn as E,
    e$ as be,
    jit as xe,
    rit as Se,
    t$ as Ce,
    zTn as we
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Bm as Te,
    Gv as Ee,
    Gy as D,
    Vm as De,
    Wv as Oe,
    Wy as ke,
    bx as Ae,
    xx as je
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Bl as Me,
    Hl as Ne,
    Ll as Pe,
    Rl as Fe,
    Ul as Ie,
    Vl as Le,
    gy as Re,
    ly as O,
    zl as ze
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    S as Be,
    x as k
} from "./82782bc9-b4xbouzwkkyrfqq2.js";
var Ve = t({
    CreateServiceConnectorFromTemplateModal: () => He
});

function He(e) {
    "use forget";
    let t = (0, Ye.c)(191),
        {
            template: n,
            onClose: i,
            onCreateAttempt: a,
            personalTemplateSetup: o,
            onCreated: s,
            onWorkspaceDraftCreated: c
        } = e,
        l = C(),
        u = ve(),
        re = Re(),
        ie = n.can_create === !1,
        d;
    t[0] === n.supported_auth_types ? d = t[1] : (d = n.supported_auth_types?.some(Je) ?? !1, t[0] = n.supported_auth_types, t[1] = d);
    let f = d,
        p;
    t[2] === n.supported_auth_types ? p = t[3] : (p = n.supported_auth_types?.some(qe) ?? !1, t[2] = n.supported_auth_types, t[3] = p);
    let m = p,
        h = n.template_id === Xe,
        _ = n.template_id === Ze,
        v;
    t[4] !== _ || t[5] !== n.template_id ? (v = _ ? `https://help.openai.com/articles/20001487` : Fe(n.template_id), t[4] = _, t[5] = n.template_id, t[6] = v) : v = t[6];
    let b = v,
        x;
    t[7] === n.link_params_schema ? x = t[8] : (x = me(n.link_params_schema), t[7] = n.link_params_schema, t[8] = x);
    let S = x,
        [T, ce] = (0, A.useState)(!1),
        le = (0, A.useRef)(!1),
        de;
    t[9] !== o || t[10] !== n.template_id ? (de = o ? void 0 : ot(n.template_id), t[9] = o, t[10] = n.template_id, t[11] = de) : de = t[11];
    let fe = de,
        pe;
    t[12] === fe ? pe = t[13] : (pe = () => st(fe), t[12] = fe, t[13] = pe);
    let he = (0, A.useSyncExternalStore)(at, pe, Ke),
        ge = (0, A.useRef)(!1),
        _e;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (_e = {}, t[14] = _e) : _e = t[14];
    let [E, be] = (0, A.useState)(_e), we;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (we = {}, t[15] = we) : we = t[15];
    let [Te, Ee] = (0, A.useState)(we), [D, je] = (0, A.useState)(null), [Ie, Le] = (0, A.useState)(f), [O, ze] = (0, A.useState)(!1), [k, Ve] = (0, A.useState)(null), [He, nt] = (0, A.useState)(null), [M, rt] = (0, A.useState)(null), it = M?.connectorId, N;
    t[16] !== h || t[17] !== n.description || t[18] !== n.name || t[19] !== n.oauth_client_info?.default_scopes ? (N = () => ({
        name: n.name,
        description: n.description ?? ``,
        oauthClientId: ``,
        oauthClientSecret: ``,
        githubAppPrivateKey: ``,
        oauthClientScopes: (n.oauth_client_info?.default_scopes ?? []).join(`
`),
        gitlabHostname: ``,
        webhookSecret: h ? dt() : ``
    }), t[16] = h, t[17] = n.description, t[18] = n.name, t[19] = n.oauth_client_info?.default_scopes, t[20] = N) : N = t[20];
    let [F, I] = (0, A.useState)(N), mt;
    t[21] !== F.oauthClientId || t[22] !== F.oauthClientSecret ? (mt = F.oauthClientId.trim().length > 0 || F.oauthClientSecret.trim().length > 0, t[21] = F.oauthClientId, t[22] = F.oauthClientSecret, t[23] = mt) : mt = t[23];
    let L = m || mt,
        ht;
    t[24] !== S || t[25] !== Te ? (ht = xe(S, Te), t[24] = S, t[25] = Te, t[26] = ht) : ht = t[26];
    let gt = ht,
        _t = D ? Me(D) ?? `` : ``,
        vt = it ? ut(it) : ``,
        yt, bt;
    t[27] === f ? (yt = t[28], bt = t[29]) : (yt = () => {
        if (!f) {
            je(null), Le(!1);
            return
        }
        let e = !1;
        return Le(!0), je(null), ft().then(t => {
            e || je(t)
        }).catch(() => {
            e || je(null)
        }).finally(() => {
            e || Le(!1)
        }), () => {
            e = !0
        }
    }, bt = [f], t[27] = f, t[28] = yt, t[29] = bt), (0, A.useEffect)(yt, bt);
    let xt, St;
    t[30] === k ? (xt = t[31], St = t[32]) : (xt = () => {
        if (k == null) return;
        let e = window.setTimeout(() => {
            Ve(null)
        }, 2e3);
        return () => window.clearTimeout(e)
    }, St = [k], t[30] = k, t[31] = xt, t[32] = St), (0, A.useEffect)(xt, St);
    let Ct;
    t[33] !== i || t[34] !== s || t[35] !== c || t[36] !== o ? (Ct = e => {
        let t = e.creationContext,
            n = ae();
        t && (n?.getWorkspaceId() !== t.workspaceId || n.normalizedAccountUserId !== t.accountUserId || n.authUserId !== t.actorUserId || g()?.account?.id !== t.workspaceId || g()?.user?.id !== t.actorUserId) ? i() : o && s && e.connector ? s(e.connector) : e.pluginId && c && e.connector ? c({
            connector: e.connector,
            pluginId: e.pluginId,
            connectorId: e.connectorId
        }) : i(e.connectorId)
    }, t[33] = i, t[34] = s, t[35] = c, t[36] = o, t[37] = Ct) : Ct = t[37];
    let R = Ct,
        wt;
    t[38] !== M || t[39] !== R || t[40] !== T || t[41] !== i ? (wt = () => {
        T || (M ? R(M) : i())
    }, t[38] = M, t[39] = R, t[40] = T, t[41] = i, t[42] = wt) : wt = t[42];
    let Tt = wt,
        Et;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (Et = e => {
        be(t => {
            if (!t[e]) return t;
            let n = {
                ...t
            };
            return delete n[e], n
        })
    }, t[43] = Et) : Et = t[43];
    let z = Et,
        Dt = (e, t) => {
            Ee(n => ({
                ...n,
                [e]: t
            })), o && (e === `hostname` || e === `workspace_host`) && !ge.current && I(e => ({
                ...e,
                name: oe(n.name, t)
            })), z(e)
        },
        Ot;
    t[44] === z ? Ot = t[45] : (Ot = async e => {
        try {
            let t = await lt(e);
            I(e => ({
                ...e,
                githubAppPrivateKey: t
            })), nt(e.name), z(`githubAppPrivateKey`)
        } catch {
            ne.danger(P.githubAppPrivateKeyReadError)
        }
    }, t[44] = z, t[45] = Ot);
    let kt = Ot,
        B;
    t[46] === kt ? B = t[47] : (B = e => {
        e.length > 0 && kt(e[0])
    }, t[46] = kt, t[47] = B);
    let At;
    t[48] !== T || t[49] !== B ? (At = {
        accept: tt,
        disabled: T,
        multiple: !1,
        noClick: !0,
        noKeyboard: !0,
        onDropAccepted: B,
        onDropRejected: Ge
    }, t[48] = T, t[49] = B, t[50] = At) : At = t[50];
    let {
        getInputProps: jt,
        getRootProps: Mt,
        isDragActive: Nt,
        open: Pt
    } = Be(At), Ft;
    t[51] === Symbol.for(`react.memo_cache_sentinel`) ? (Ft = async (e, t) => {
        if (t) try {
            await navigator.clipboard.writeText(t), Ve(e)
        } catch {
            Ve(null)
        }
    }, t[51] = Ft) : Ft = t[51];
    let It = Ft,
        Lt;
    t[52] !== D || t[53] !== gt || t[54] !== R || t[55] !== l || t[56] !== re || t[57] !== _ || t[58] !== h || t[59] !== S || t[60] !== u || t[61] !== a || t[62] !== o || t[63] !== L || t[64] !== n.logo_url || t[65] !== n.logo_url_dark || t[66] !== n.template_id || t[67] !== ie || t[68] !== F.description || t[69] !== F.githubAppPrivateKey || t[70] !== F.gitlabHostname || t[71] !== F.name || t[72] !== F.oauthClientId || t[73] !== F.oauthClientScopes || t[74] !== F.oauthClientSecret || t[75] !== F.webhookSecret ? (Lt = async e => {
        if (e?.preventDefault(), ie || le.current) return;
        let t = o ? void 0 : ot(n.template_id);
        if (st(t)) {
            ne.danger(l.formatMessage(P.nativeCompletionUncertain));
            return
        }
        let r = {},
            i = F.name.trim(),
            s = F.description.trim(),
            c = F.oauthClientId.trim(),
            te = F.oauthClientSecret.trim(),
            d = F.githubAppPrivateKey.trim(),
            f = F.gitlabHostname.trim(),
            p = h && L,
            m = F.webhookSecret.trim(),
            g = h;
        i || (r.name = l.formatMessage(P.requiredField)), L && (c || (r.oauthClientId = l.formatMessage(P.requiredField)), te || (r.oauthClientSecret = l.formatMessage(P.requiredField)), p && !d && (r.githubAppPrivateKey = l.formatMessage(P.requiredField)), D || (r.callbackId = l.formatMessage(_ ? P.gitlabRedirectUriUnavailable : P.callbackUrlUnavailable))), _ && !f && (r.gitlabHostname = l.formatMessage(P.requiredField)), g && (m || (r.webhookSecret = l.formatMessage(P.requiredField)));
        let {
            sanitizedLinkParams: v,
            errors: y,
            hasPatternErrors: b
        } = Se(S, gt, l);
        if (Object.assign(r, y), Object.keys(r).length > 0) {
            be(r), Object.keys(y).length > 0 && ne.danger(l.formatMessage(b ? w.invalidFieldsToast : w.requiredFieldsToast));
            return
        }
        ce(!0), le.current = !0;
        let x = {
                name: i,
                description: s,
                logo_url: n.logo_url,
                logo_url_dark: n.logo_url_dark,
                link_params: v,
                create_as_draft: !0
            },
            C = {};
        g && (C[$e] = m), p && (C[Qe] = d), _ && (C[et] = f);
        let oe = {
            ...x,
            ...Object.keys(C).length > 0 ? {
                additional_config: C
            } : {},
            ...L ? {
                oauth_client_id: c,
                oauth_client_secret: te,
                oauth_client_scopes: ct(F.oauthClientScopes),
                callback_id: D ?? void 0
            } : {}
        };
        try {
            let e;
            if (o) {
                a?.();
                let t = await Ce(o, oe);
                e = {
                    connectorId: t.connector.id,
                    connector: t.connector,
                    pluginId: t.plugin_id?.trim() || void 0
                }
            } else {
                let t = ae(),
                    r = t?.getWorkspaceId(),
                    i = r && t?.normalizedAccountUserId && t.authUserId ? {
                        workspaceId: r,
                        accountUserId: t.normalizedAccountUserId,
                        actorUserId: t.authUserId
                    } : void 0;
                a?.();
                let o = await ee.safePost(`/aip/connectors/templates/{template_id}/instantiate`, {
                    parameters: {
                        path: {
                            template_id: n.template_id
                        }
                    },
                    requestBody: oe
                });
                e = {
                    connectorId: o.connector.id,
                    connector: o.connector,
                    pluginId: o.plugin_id?.trim() || void 0,
                    creationContext: i
                }
            }
            o || (await Promise.all([re(), pt.refetch()]), u(), ne.success(l.formatMessage(P.success))), g ? rt(e) : R(e)
        } catch (e) {
            let t = e;
            ne.danger(Ne(t, l), {
                toastId: `create_service_template_draft_error`,
                analyticsToastId: `create_service_template_draft_error`
            })
        }
        le.current = !1, ce(!1)
    }, t[52] = D, t[53] = gt, t[54] = R, t[55] = l, t[56] = re, t[57] = _, t[58] = h, t[59] = S, t[60] = u, t[61] = a, t[62] = o, t[63] = L, t[64] = n.logo_url, t[65] = n.logo_url_dark, t[66] = n.template_id, t[67] = ie, t[68] = F.description, t[69] = F.githubAppPrivateKey, t[70] = F.gitlabHostname, t[71] = F.name, t[72] = F.oauthClientId, t[73] = F.oauthClientScopes, t[74] = F.oauthClientSecret, t[75] = F.webhookSecret, t[76] = Lt) : Lt = t[76];
    let Rt = Lt,
        zt;
    t[77] !== k || t[78] !== l ? (zt = e => {
        let {
            setupValueKey: t,
            label: n,
            value: r,
            isLoading: i,
            loadingLabel: a,
            unavailableLabel: o,
            ariaLabel: s
        } = e, c = k === t, u = !!r && !i, ee = i ? a : r || o;
        return (0, j.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, j.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3`,
                children: [(0, j.jsx)(`span`, {
                    className: `text-token-text-primary text-xs font-semibold`,
                    children: n
                }), (0, j.jsx)(`span`, {
                    className: `text-token-text-tertiary text-xs`,
                    children: (0, j.jsx)(y, {
                        ...c ? P.setupUrlCopied : u ? P.setupUrlCopyHint : P.setupUrlCopyUnavailable
                    })
                })]
            }), (0, j.jsxs)(`button`, {
                type: `button`,
                onClick: () => void It(t, r),
                disabled: !u,
                className: `border-token-border-light bg-token-bg-primary flex w-full items-center justify-between gap-3 rounded-md border px-3 py-2 text-start text-xs shadow-sm transition-colors ${u?`hover:bg-token-main-surface-secondary`:`cursor-default opacity-70`}`,
                "aria-label": s,
                title: u ? l.formatMessage(P.setupUrlCopyHint) : void 0,
                children: [(0, j.jsx)(`span`, {
                    className: `text-token-text-secondary font-mono break-all`,
                    children: ee
                }), (0, j.jsx)(`span`, {
                    className: `border-token-border-light bg-token-bg-secondary text-token-text-secondary flex h-8 w-8 shrink-0 items-center justify-center rounded-md border`,
                    children: c ? (0, j.jsx)(Ae, {
                        className: `icon-sm`
                    }) : (0, j.jsx)(ke, {
                        className: `icon-sm`
                    })
                })]
            })]
        })
    }, t[77] = k, t[78] = l, t[79] = zt) : zt = t[79];
    let V = zt;
    if (M) {
        let e;
        t[80] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, j.jsx)(y, {
            ...P.githubWebhookReadyTitle
        }), t[80] = e) : e = t[80];
        let n;
        t[81] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, j.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, j.jsx)(y, {
                ...P.githubWebhookReadyBody
            })
        }), t[81] = n) : n = t[81];
        let i;
        t[82] !== l || t[83] !== h || t[84] !== V || t[85] !== F.webhookSecret ? (i = h ? V({
            setupValueKey: `webhookSecret`,
            label: (0, j.jsx)(y, {
                ...P.githubWebhookSecretLabel
            }),
            value: F.webhookSecret,
            isLoading: !1,
            loadingLabel: l.formatMessage(P.setupUrlLoading),
            unavailableLabel: l.formatMessage(P.githubWebhookSecretUnavailable),
            ariaLabel: l.formatMessage(P.copyGithubWebhookSecretAriaLabel)
        }) : null, t[82] = l, t[83] = h, t[84] = V, t[85] = F.webhookSecret, t[86] = i) : i = t[86];
        let a;
        t[87] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, j.jsx)(y, {
            ...P.webhookUrlLabel
        }), t[87] = a) : a = t[87];
        let o;
        t[88] !== M || t[89] !== R ? (o = () => R(M), t[88] = M, t[89] = R, t[90] = o) : o = t[90];
        let s;
        t[91] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, j.jsx)(y, {
            ...P.doneCta
        }), t[91] = s) : s = t[91];
        let c;
        return t[92] === o ? c = t[93] : (c = (0, j.jsx)(`div`, {
            className: `flex justify-end`,
            children: (0, j.jsx)(r, {
                color: `primary`,
                onClick: o,
                size: `large`,
                className: `w-full md:w-auto`,
                type: `button`,
                children: s
            })
        }), t[92] = o, t[93] = c), (0, j.jsx)(te, {
            title: e,
            isOpen: !0,
            onClose: Tt,
            position: `center`,
            showCloseButton: !0,
            size: `custom`,
            className: `max-h-[90vh] w-full md:max-w-[448px]`,
            testId: `modal-create-service-connector-webhook-url`,
            children: (0, j.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [n, i, V({
                    setupValueKey: `webhook`,
                    label: a,
                    value: vt,
                    isLoading: !1,
                    loadingLabel: l.formatMessage(P.setupUrlLoading),
                    unavailableLabel: l.formatMessage(P.setupUrlUnavailable),
                    ariaLabel: l.formatMessage(P.copyWebhookUrlAriaLabel)
                }), c]
            })
        })
    }
    let Bt = te,
        Vt = o ? Pe.connectTemplateAppModalTitle : Pe.createTemplateAppModalTitle,
        H;
    t[94] === n.name ? H = t[95] : (H = {
        templateName: n.name
    }, t[94] = n.name, t[95] = H);
    let U;
    t[96] !== Vt || t[97] !== H ? (U = (0, j.jsx)(`span`, {
        className: `flex items-center gap-1`,
        children: (0, j.jsx)(y, {
            ...Vt,
            values: H
        })
    }), t[96] = Vt, t[97] = H, t[98] = U) : U = t[98];
    let Ht = !T,
        Ut;
    t[99] === T ? Ut = t[100] : (Ut = e => {
        T && e.preventDefault()
    }, t[99] = T, t[100] = Ut);
    let W;
    t[101] !== o || t[102] !== m || t[103] !== n.name ? (W = o ? (0, j.jsx)(y, {
        id: `chatgpt.plugins.template_setup.description`,
        defaultMessage: `Enter your server settings, then continue to sign in.`
    }) : (0, j.jsx)(y, {
        ...m ? P.bodyWithOauth : P.bodyWithoutOauth,
        values: {
            templateName: n.name
        }
    }), t[101] = o, t[102] = m, t[103] = n.name, t[104] = W) : W = t[104];
    let G;
    t[105] === b ? G = t[106] : (G = b ? (0, j.jsxs)(j.Fragment, {
        children: [` `, (0, j.jsxs)(ye, {
            href: b,
            openNewTab: !0,
            className: `text-token-text-tertiary inline-flex items-center gap-1 text-sm no-underline! hover:underline!`,
            children: [(0, j.jsx)(y, {
                ...P.setupGuideLink
            }), (0, j.jsx)(Oe, {
                className: `h-3 w-3`
            })]
        })]
    }) : null, t[105] = b, t[106] = G);
    let K;
    t[107] !== W || t[108] !== G ? (K = (0, j.jsxs)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: [W, G]
    }), t[107] = W, t[108] = G, t[109] = K) : K = t[109];
    let q;
    t[110] === he ? q = t[111] : (q = he ? (0, j.jsx)(`p`, {
        className: `text-status-critical text-sm`,
        role: `alert`,
        children: (0, j.jsx)(y, {
            ...P.nativeCompletionUncertain
        })
    }) : null, t[110] = he, t[111] = q);
    let J;
    t[112] !== K || t[113] !== q ? (J = (0, j.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [K, q]
    }), t[112] = K, t[113] = q, t[114] = J) : J = t[114];
    let Wt;
    t[115] === Symbol.for(`react.memo_cache_sentinel`) ? (Wt = (0, j.jsx)(`label`, {
        htmlFor: `service-template-name`,
        className: `mb-1 block text-sm font-medium`,
        children: (0, j.jsx)(y, {
            ...P.nameLabel
        })
    }), t[115] = Wt) : Wt = t[115];
    let Y;
    t[116] === l ? Y = t[117] : (Y = l.formatMessage(P.nameLabel), t[116] = l, t[117] = Y);
    let Gt = o ? void 0 : `service-template-name-help`,
        X;
    t[118] === z ? X = t[119] : (X = e => {
        ge.current = !0, I(t => ({
            ...t,
            name: e.target.value
        })), z(`name`)
    }, t[118] = z, t[119] = X);
    let Z;
    t[120] !== E.name || t[121] !== T || t[122] !== Y || t[123] !== Gt || t[124] !== X || t[125] !== F.name ? (Z = (0, j.jsx)(ue, {
        name: `service-template-name`,
        ariaLabel: Y,
        "aria-describedby": Gt,
        value: F.name,
        onChange: X,
        disabled: T,
        error: E.name,
        inputClassName: `bg-token-bg-primary!`
    }), t[120] = E.name, t[121] = T, t[122] = Y, t[123] = Gt, t[124] = X, t[125] = F.name, t[126] = Z) : Z = t[126];
    let Kt;
    t[127] === o ? Kt = t[128] : (Kt = o ? null : (0, j.jsx)(`p`, {
        id: `service-template-name-help`,
        className: `text-token-text-tertiary mt-1 text-xs`,
        children: (0, j.jsx)(y, {
            ...P.nameDescription
        })
    }), t[127] = o, t[128] = Kt);
    let qt;
    t[129] !== Z || t[130] !== Kt ? (qt = (0, j.jsxs)(`div`, {
        children: [Wt, Z, Kt]
    }), t[129] = Z, t[130] = Kt, t[131] = qt) : qt = t[131];
    let Jt;
    t[132] !== l || t[133] !== T || t[134] !== o || t[135] !== F.description ? (Jt = o ? null : (0, j.jsxs)(`div`, {
        children: [(0, j.jsx)(`label`, {
            htmlFor: `service-template-description`,
            className: `mb-1 block text-sm font-medium`,
            children: (0, j.jsx)(y, {
                ...P.descriptionLabel
            })
        }), (0, j.jsx)(se, {
            name: `service-template-description`,
            ariaLabel: l.formatMessage(P.descriptionLabel),
            "aria-describedby": `service-template-description-help`,
            value: F.description,
            onChange: e => I(t => ({
                ...t,
                description: e.target.value
            })),
            disabled: T,
            inputClassName: `bg-token-bg-primary!`
        }), (0, j.jsx)(`p`, {
            id: `service-template-description-help`,
            className: `text-token-text-tertiary mt-1 text-xs`,
            children: (0, j.jsx)(y, {
                ...P.descriptionDescription
            })
        })]
    }), t[132] = l, t[133] = T, t[134] = o, t[135] = F.description, t[136] = Jt) : Jt = t[136];
    let Q;
    t[137] !== qt || t[138] !== Jt ? (Q = (0, j.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [qt, Jt]
    }), t[137] = qt, t[138] = Jt, t[139] = Q) : Q = t[139];
    let Yt = S.length > 0 ? (0, j.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, j.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [(0, j.jsx)(`h3`, {
                    className: `text-sm font-semibold`,
                    children: (0, j.jsx)(y, {
                        ...w.sectionTitle
                    })
                }), (0, j.jsx)(`p`, {
                    className: `text-token-text-secondary text-xs`,
                    children: (0, j.jsx)(y, {
                        ...w.sectionDescription
                    })
                })]
            }), S.map(e => {
                let t = e.required ? l.formatMessage(w.fieldLabelRequired, {
                        label: e.title
                    }) : e.title,
                    n = E[e.name],
                    r = gt[e.name] ?? ``;
                return e.enumValues && e.enumValues.length > 0 ? (0, j.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, j.jsx)(`label`, {
                        htmlFor: `service-template-link-param-${e.name}`,
                        className: `text-sm font-medium`,
                        children: t
                    }), (0, j.jsx)(`select`, {
                        id: `service-template-link-param-${e.name}`,
                        className: `border-token-border-light bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:ring-1 focus:outline-none`,
                        value: r,
                        onChange: t => Dt(e.name, t.target.value),
                        disabled: T,
                        children: e.enumValues.map(We)
                    }), e.description ? (0, j.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: e.description
                    }) : null, n ? (0, j.jsx)(`p`, {
                        className: `text-status-critical text-xs`,
                        children: n
                    }) : null]
                }, e.name) : (0, j.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, j.jsx)(`label`, {
                        htmlFor: `service-template-link-param-${e.name}`,
                        className: `mb-1 block text-sm font-medium`,
                        children: t
                    }), (0, j.jsx)(ue, {
                        name: `service-template-link-param-${e.name}`,
                        ariaLabel: t,
                        value: r,
                        onChange: t => Dt(e.name, t.target.value),
                        disabled: T,
                        placeholder: l.formatMessage(w.fieldPlaceholder, {
                            label: e.example ?? e.title
                        }),
                        error: n,
                        inputClassName: `bg-token-bg-primary!`
                    }), e.description ? (0, j.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: e.description
                    }) : null]
                }, e.name)
            })]
        }) : null,
        Xt;
    t[140] !== E.gitlabHostname || t[141] !== l || t[142] !== _ || t[143] !== T || t[144] !== z || t[145] !== F.gitlabHostname ? (Xt = _ ? (0, j.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [(0, j.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, j.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, j.jsx)(y, {
                    ...P.gitlabInstanceSectionTitle
                })
            }), (0, j.jsx)(`p`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, j.jsx)(y, {
                    ...P.gitlabHostnameDescription
                })
            })]
        }), (0, j.jsxs)(`div`, {
            children: [(0, j.jsx)(`label`, {
                htmlFor: `service-template-gitlab-hostname`,
                className: `mb-1 block text-sm font-medium`,
                children: (0, j.jsx)(y, {
                    ...P.gitlabHostnameLabel
                })
            }), (0, j.jsx)(ue, {
                name: `service-template-gitlab-hostname`,
                ariaLabel: l.formatMessage(P.gitlabHostnameLabel),
                value: F.gitlabHostname,
                onChange: e => {
                    I(t => ({
                        ...t,
                        gitlabHostname: e.target.value
                    })), z(`gitlabHostname`)
                },
                disabled: T,
                error: E.gitlabHostname,
                placeholder: l.formatMessage(P.gitlabHostnamePlaceholder),
                inputClassName: `bg-token-bg-primary!`
            })]
        })]
    }) : null, t[140] = E.gitlabHostname, t[141] = l, t[142] = _, t[143] = T, t[144] = z, t[145] = F.gitlabHostname, t[146] = Xt) : Xt = t[146];
    let Zt;
    t[147] !== T || t[148] !== m || t[149] !== O || t[150] !== f ? (Zt = f && !m ? (0, j.jsx)(`div`, {
        children: (0, j.jsx)(r, {
            color: `secondary`,
            size: `small`,
            type: `button`,
            "aria-expanded": O,
            onClick: () => ze(Ue),
            disabled: T,
            children: (0, j.jsx)(y, {
                ...O ? P.hideAdvancedSettings : P.showAdvancedSettings
            })
        })
    }) : null, t[147] = T, t[148] = m, t[149] = O, t[150] = f, t[151] = Zt) : Zt = t[151];
    let Qt = f && (m || O) ? (0, j.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, j.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, j.jsx)(y, {
                    ...P.oauthSectionTitle
                })
            }), V({
                setupValueKey: `callback`,
                label: (0, j.jsx)(y, {
                    ..._ ? P.gitlabOauthRedirectUriLabel : P.oauthCallbackUrlLabel
                }),
                value: _t,
                isLoading: Ie,
                loadingLabel: l.formatMessage(P.setupUrlLoading),
                unavailableLabel: l.formatMessage(P.setupUrlUnavailable),
                ariaLabel: l.formatMessage(_ ? P.copyGitlabOauthRedirectUriAriaLabel : P.copyOauthCallbackUrlAriaLabel)
            }), E.callbackId ? (0, j.jsx)(`p`, {
                className: `text-status-critical text-xs`,
                children: E.callbackId
            }) : null, (0, j.jsxs)(`div`, {
                children: [(0, j.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-id`,
                    className: `mb-1 block text-sm font-medium`,
                    children: (0, j.jsx)(y, {
                        ...P.oauthClientIdLabel
                    })
                }), (0, j.jsx)(ue, {
                    name: `service-template-oauth-client-id`,
                    ariaLabel: l.formatMessage(P.oauthClientIdLabel),
                    value: F.oauthClientId,
                    onChange: e => {
                        I(t => ({
                            ...t,
                            oauthClientId: e.target.value
                        })), z(`oauthClientId`)
                    },
                    disabled: T,
                    error: E.oauthClientId,
                    inputClassName: `bg-token-bg-primary!`
                })]
            }), (0, j.jsxs)(`div`, {
                children: [(0, j.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-secret`,
                    className: `mb-1 block text-sm font-medium`,
                    children: (0, j.jsx)(y, {
                        ...P.oauthClientSecretLabel
                    })
                }), (0, j.jsx)(ue, {
                    name: `service-template-oauth-client-secret`,
                    ariaLabel: l.formatMessage(P.oauthClientSecretLabel),
                    type: `password`,
                    value: F.oauthClientSecret,
                    onChange: e => {
                        I(t => ({
                            ...t,
                            oauthClientSecret: e.target.value
                        })), z(`oauthClientSecret`)
                    },
                    disabled: T,
                    error: E.oauthClientSecret,
                    inputClassName: `bg-token-bg-primary!`
                })]
            }), h ? (0, j.jsx)(`div`, {
                className: `flex flex-col gap-4`,
                children: (0, j.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, j.jsx)(`label`, {
                        htmlFor: `service-template-github-app-private-key`,
                        className: `text-sm font-medium`,
                        children: (0, j.jsx)(y, {
                            ...P.githubAppPrivateKeyLabel
                        })
                    }), (0, j.jsxs)(`div`, {
                        className: `flex flex-col gap-2`,
                        children: [(0, j.jsxs)(`div`, {
                            ...Mt({
                                className: `border-token-border-light bg-token-bg-primary flex flex-col items-center gap-2 rounded-md border border-dashed px-4 py-5 text-center transition-colors ${Nt?`border-token-text-primary bg-token-main-surface-secondary`:``}`
                            }),
                            children: [(0, j.jsx)(`input`, {
                                ...jt()
                            }), (0, j.jsx)(De, {
                                className: `text-token-text-secondary h-5 w-5`
                            }), (0, j.jsx)(`p`, {
                                className: `text-token-text-secondary text-sm`,
                                children: (0, j.jsx)(y, {
                                    ...P.githubAppPrivateKeyUploadLabel
                                })
                            }), (0, j.jsx)(r, {
                                type: `button`,
                                color: `secondary`,
                                size: `small`,
                                disabled: T,
                                onClick: () => Pt(),
                                children: (0, j.jsx)(y, {
                                    ...P.githubAppPrivateKeyUploadBrowseCta
                                })
                            })]
                        }), He ? (0, j.jsx)(`p`, {
                            className: `text-token-text-tertiary text-xs`,
                            children: (0, j.jsx)(y, {
                                ...P.githubAppPrivateKeyFileLoaded,
                                values: {
                                    fileName: He
                                }
                            })
                        }) : null]
                    }), (0, j.jsx)(`textarea`, {
                        id: `service-template-github-app-private-key`,
                        className: `border-token-border-light bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary w-full rounded-md border px-3 py-2 font-mono text-sm shadow-sm focus:ring-1 focus:outline-none`,
                        value: F.githubAppPrivateKey,
                        onChange: e => {
                            I(t => ({
                                ...t,
                                githubAppPrivateKey: e.target.value
                            })), nt(null), z(`githubAppPrivateKey`)
                        },
                        rows: 5,
                        disabled: T,
                        placeholder: l.formatMessage(P.githubAppPrivateKeyPlaceholder),
                        "aria-label": l.formatMessage(P.githubAppPrivateKeyLabel)
                    }), (0, j.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: (0, j.jsx)(y, {
                            ...P.githubAppPrivateKeyDescription
                        })
                    }), E.githubAppPrivateKey ? (0, j.jsx)(`p`, {
                        className: `text-status-critical text-xs`,
                        children: E.githubAppPrivateKey
                    }) : null]
                })
            }) : null, (0, j.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [(0, j.jsx)(`label`, {
                    htmlFor: `service-template-oauth-client-scopes`,
                    className: `text-sm font-medium`,
                    children: (0, j.jsx)(y, {
                        ..._ ? P.gitlabOauthClientScopesLabel : P.oauthClientScopesLabel
                    })
                }), (0, j.jsx)(`textarea`, {
                    id: `service-template-oauth-client-scopes`,
                    className: `border-token-border-light bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:ring-1 focus:outline-none`,
                    value: F.oauthClientScopes,
                    onChange: e => I(t => ({
                        ...t,
                        oauthClientScopes: e.target.value
                    })),
                    rows: 3,
                    disabled: T,
                    readOnly: _,
                    placeholder: l.formatMessage(P.oauthClientScopesPlaceholder)
                }), (0, j.jsx)(`p`, {
                    className: `text-token-text-tertiary text-xs`,
                    children: (0, j.jsx)(y, {
                        ..._ ? P.gitlabOauthClientScopesDescription : P.oauthClientScopesDescription
                    })
                })]
            })]
        }) : null,
        $t;
    t[152] !== E.webhookSecret || t[153] !== l || t[154] !== h || t[155] !== V || t[156] !== F.webhookSecret ? ($t = h ? (0, j.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [(0, j.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, j.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, j.jsx)(y, {
                    ...P.githubWebhookSectionTitle
                })
            }), (0, j.jsx)(`p`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, j.jsx)(y, {
                    ...P.githubWebhookSetupDescription
                })
            })]
        }), V({
            setupValueKey: `webhookSecret`,
            label: (0, j.jsx)(y, {
                ...P.githubWebhookSecretLabel
            }),
            value: F.webhookSecret,
            isLoading: !1,
            loadingLabel: l.formatMessage(P.setupUrlLoading),
            unavailableLabel: l.formatMessage(P.githubWebhookSecretUnavailable),
            ariaLabel: l.formatMessage(P.copyGithubWebhookSecretAriaLabel)
        }), E.webhookSecret ? (0, j.jsx)(`p`, {
            className: `text-status-critical text-xs`,
            children: E.webhookSecret
        }) : null]
    }) : null, t[152] = E.webhookSecret, t[153] = l, t[154] = h, t[155] = V, t[156] = F.webhookSecret, t[157] = $t) : $t = t[157];
    let en;
    t[158] === i ? en = t[159] : (en = () => i(), t[158] = i, t[159] = en);
    let tn;
    t[160] === Symbol.for(`react.memo_cache_sentinel`) ? (tn = (0, j.jsx)(y, {
        ...P.cancelCta
    }), t[160] = tn) : tn = t[160];
    let nn;
    t[161] !== T || t[162] !== en ? (nn = (0, j.jsx)(r, {
        color: `secondary`,
        onClick: en,
        size: `large`,
        className: `w-full md:w-auto`,
        type: `button`,
        disabled: T,
        children: tn
    }), t[161] = T, t[162] = en, t[163] = nn) : nn = t[163];
    let rn = ie || he || T || L && Ie,
        an = o ? Pe.continueSetupButton : P.createCta,
        on;
    t[164] === an ? on = t[165] : (on = (0, j.jsx)(y, {
        ...an
    }), t[164] = an, t[165] = on);
    let sn;
    t[166] !== T || t[167] !== rn || t[168] !== on ? (sn = (0, j.jsx)(r, {
        color: `primary`,
        size: `large`,
        className: `w-full min-w-[170px] md:w-auto`,
        loading: T,
        disabled: rn,
        type: `submit`,
        children: on
    }), t[166] = T, t[167] = rn, t[168] = on, t[169] = sn) : sn = t[169];
    let cn;
    t[170] !== nn || t[171] !== sn ? (cn = (0, j.jsxs)(`div`, {
        className: `flex flex-col-reverse gap-3 md:flex-row md:justify-end`,
        children: [nn, sn]
    }), t[170] = nn, t[171] = sn, t[172] = cn) : cn = t[172];
    let $;
    t[173] !== Rt || t[174] !== J || t[175] !== Q || t[176] !== Yt || t[177] !== Xt || t[178] !== Zt || t[179] !== Qt || t[180] !== $t || t[181] !== cn ? ($ = (0, j.jsxs)(`form`, {
        className: `flex flex-col gap-4`,
        onSubmit: Rt,
        children: [J, Q, Yt, Xt, Zt, Qt, $t, cn]
    }), t[173] = Rt, t[174] = J, t[175] = Q, t[176] = Yt, t[177] = Xt, t[178] = Zt, t[179] = Qt, t[180] = $t, t[181] = cn, t[182] = $) : $ = t[182];
    let ln;
    return t[183] !== Bt || t[184] !== Tt || t[185] !== T || t[186] !== U || t[187] !== Ht || t[188] !== Ut || t[189] !== $ ? (ln = (0, j.jsx)(Bt, {
        title: U,
        isOpen: !0,
        onClose: Tt,
        position: `center`,
        showCloseButton: Ht,
        shouldIgnoreClickOutside: T,
        onEscapeKeyDown: Ut,
        size: `custom`,
        className: `max-h-[90vh] w-full md:max-w-[448px]`,
        testId: `modal-create-service-connector-from-template`,
        children: $
    }), t[183] = Bt, t[184] = Tt, t[185] = T, t[186] = U, t[187] = Ht, t[188] = Ut, t[189] = $, t[190] = ln) : ln = t[190], ln
}

function Ue(e) {
    return !e
}

function We(e) {
    return (0, j.jsx)(`option`, {
        value: e,
        children: e
    }, e)
}

function Ge() {
    ne.danger(P.githubAppPrivateKeyInvalidFile)
}

function Ke() {
    return !1
}

function qe(e) {
    return e.type === `OAUTH` && e.client_credentials_required !== !1
}

function Je(e) {
    return e.type === `OAUTH`
}
var Ye, A, j, Xe, Ze, Qe, $e, et, tt, nt, M, rt, it, N, at, ot, st, ct, lt, ut, dt, ft, pt, P, F = e((() => {
    Ye = S(), ze(), be(), de(), Ie(), Le(), p(), O(), Ee(), je(), D(), Te(), a(), _e(), fe(), E(), he(), we(), f(), le(), ce(), i(), m(), u(), c(), re(), s(), A = n(x()), k(), b(), j = _(), Xe = `templated_apps_GitHubEnterprise`, Ze = `templated_apps_GitLab`, Qe = `private_key`, $e = `webhook_secret`, et = `hostname`, tt = {
        "application/octet-stream": [`.pem`],
        "application/pem-certificate-chain": [`.pem`],
        "application/x-pem-file": [`.pem`],
        "text/plain": [`.pem`]
    }, nt = `https://connectors.api.openai.com`, M = 32, rt = `chatgpt.service-template-native-create-uncertain:`, it = `chatgpt:service-template-create-lock`, N = new WeakMap, at = e => typeof window > `u` ? () => {} : (window.addEventListener(it, e), window.addEventListener(`storage`, e), () => {
        window.removeEventListener(it, e), window.removeEventListener(`storage`, e)
    }), ot = e => {
        let t = ae(),
            n = g(),
            r = t?.getWorkspaceId();
        if (!(!r || !t?.normalizedAccountUserId || !n?.user?.id || t.authUserId !== n.user.id || n.account?.id !== r)) return `${rt}${JSON.stringify([r,t.normalizedAccountUserId,n.user.id,e])}`
    }, st = e => {
        if (!e || typeof window > `u`) return !1;
        let t = N.get(window) ?? new Set;
        try {
            let n = window.sessionStorage.getItem(e);
            (n === `pending` || n === `uncertain`) && (t.add(e), N.set(window, t))
        } catch {}
        return t.has(e)
    }, ct = e => {
        let t = new Set,
            n = [];
        for (let r of e.split(/\r?\n|,/)) {
            let e = r.trim();
            !e || t.has(e) || (t.add(e), n.push(e))
        }
        return n
    }, lt = e => new Promise((t, n) => {
        let r = new FileReader;
        r.onerror = () => n(Error(`Unable to read file.`)), r.onload = () => {
            if (typeof r.result == `string`) {
                t(r.result);
                return
            }
            n(Error(`File contents unavailable.`))
        }, r.readAsText(e)
    }), ut = e => `${nt}/connectors/${encodeURIComponent(e)}/webhook`, dt = () => {
        if (!globalThis.crypto?.getRandomValues) return ``;
        let e = new Uint8Array(M);
        return globalThis.crypto.getRandomValues(e), Array.from(e, e => e.toString(16).padStart(2, `0`)).join(``)
    }, ft = async () => (await ee.safeGet(`/aip/connectors/oauth/callback_id`, {})).callback_id ?? null, pt = l(() => ({
        queryKey: pe(`workspace_settings`, !0, !1),
        queryFn: async () => {
            let e = await ee.safePost(`/aip/connectors/list_accessible`, {
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
                        [d]: ge.ADMIN_SETTING
                    }
                }),
                t = h();
            return {
                connectors: (e.connectors ?? []).map(e => o(e, {
                    preferIconAssets: t
                })),
                templates: e.app_templates ?? []
            }
        },
        enabled: ie()?.normalizedAccountUserId != null && T()
    })), P = v({
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
    Ve as n, F as r, He as t
};
//# sourceMappingURL=3864a2c9-d72fjcenuowoe9jq.js.map