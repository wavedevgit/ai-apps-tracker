import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as n,
    Bat as r,
    Cw as i,
    Iw as a,
    Pat as o,
    Pw as s,
    Tw as c,
    Xy as l,
    Zy as u,
    aB as d,
    oB as ee,
    zU as te
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as f,
    Ln as p,
    Nn as m,
    Rn as h,
    Vn as g,
    wn as _,
    zn as ne
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Kst as v,
    dKn as y,
    qst as b,
    uKn as x
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    Gf as S,
    Vf as re,
    zf as C
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    n as w,
    t as T
} from "./b129bf1f-lp99sxs37f3ppm2g.js";
import {
    a as ie,
    c as E,
    d as D,
    f as O,
    i as k,
    l as A,
    n as j,
    o as M,
    r as N,
    s as P,
    t as F,
    u as ae
} from "./54aa3ef4-h30ix3yc1bxs8asw.js";

function I(e) {
    "use forget";
    let t = (0, V.c)(76),
        {
            isOpen: n,
            onCreate: r,
            onPrepare: a,
            onPhoneVerificationRequired: c,
            availableUseCases: l,
            initialUseCases: u,
            version: d,
            maxTtlSeconds: ee,
            onClose: f,
            onCreated: p
        } = e,
        h = ne(),
        g;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (g = te(), t[0] = g) : g = t[0];
    let _ = g,
        v = d === `v2` && a != null,
        y = v ? `permissions` : `details`,
        b;
    t[1] === y ? b = t[2] : (b = {
        step: y
    }, t[1] = y, t[2] = b);
    let [x, C] = (0, H.useState)(b), [w, T] = (0, H.useState)(!1), [ie, E] = (0, H.useState)(null), D = u.includes(`codex`), O = l.includes(`codex_security`) && u.includes(`codex_security`), k = u.includes(`workspace_agents`), A = d === `v2` ? Math.min(ee ?? ye, ye) : ee, j = me({
        version: d,
        initiallyIncludesCodex: D,
        initiallyIncludesCodexSecurity: O,
        initiallyIncludesWorkspaceAgents: k
    }), M;
    t[3] === j ? M = t[4] : (M = {
        name: ``,
        useCases: j,
        expirationPreset: ``,
        customExpirationDate: ``
    }, t[3] = j, t[4] = M);
    let N = re({
            defaultValues: M,
            onSubmit: async e => {
                let {
                    value: t
                } = e;
                x.step === `details` && !L && await we(t)
            }
        }),
        P = S(N.store, ue),
        F = S(N.store, le),
        ae = S(N.store, ce),
        I = S(N.store, se),
        L = ie != null && ie.length === I.length && ie.every(e => I.includes(e)),
        pe = S(N.store, oe),
        R;
    t[5] !== l || t[6] !== I ? (R = I.length > 0 && I.every(e => l.includes(e)), t[5] = l, t[6] = I, t[7] = R) : R = t[7];
    let z = R,
        B = pe || w,
        W;
    t[8] !== ae || t[9] !== A || t[10] !== F || t[11] !== z || t[12] !== B || t[13] !== P || t[14] !== d ? (W = P.trim().length === 0 || d === `v2` && !z || !ge({
        expirationPreset: F,
        customExpirationDate: ae,
        maxTtlSeconds: A
    }) || B, t[8] = ae, t[9] = A, t[10] = F, t[11] = z, t[12] = B, t[13] = P, t[14] = d, t[15] = W) : W = t[15];
    let K = W,
        q, J;
    t[16] !== N || t[17] !== v || t[18] !== D || t[19] !== O || t[20] !== k || t[21] !== n || t[22] !== d ? (J = () => {
        n || (N.reset({
            name: ``,
            useCases: me({
                version: d,
                initiallyIncludesCodex: D,
                initiallyIncludesCodexSecurity: O,
                initiallyIncludesWorkspaceAgents: k
            }),
            expirationPreset: ``,
            customExpirationDate: ``
        }), C({
            step: v ? `permissions` : `details`
        }), E(null))
    }, q = [N, v, D, O, k, n, d], t[16] = N, t[17] = v, t[18] = D, t[19] = O, t[20] = k, t[21] = n, t[22] = d, t[23] = q, t[24] = J) : (q = t[23], J = t[24]), (0, H.useEffect)(J, q);
    let Y;
    t[25] !== B || t[26] !== f ? (Y = () => {
        B || f()
    }, t[25] = B, t[26] = f, t[27] = Y) : Y = t[27];
    let X = Y,
        Z;
    t[28] !== h || t[29] !== c || t[30] !== I ? (Z = async function() {
        T(!0);
        try {
            await c(I)
        } catch {
            _.danger(h.formatMessage(G.prepareError), {
                duration: 3
            })
        }
        T(!1)
    }, t[28] = h, t[29] = c, t[30] = I, t[31] = Z) : Z = t[31];
    let Q = Z,
        be;
    t[32] !== F || t[33] !== z || t[34] !== h || t[35] !== B || t[36] !== P || t[37] !== a || t[38] !== I || t[39] !== Q ? (be = async function() {
        if (!(!z || B || a == null)) {
            T(!0);
            try {
                await a(I), E(null), C({
                    step: `details`
                })
            } catch (e) {
                let t = e;
                t instanceof o && t.code === `phone_verification_required` ? P || F ? (E(I), C({
                    step: `details`
                })) : await Q() : _.danger(h.formatMessage(G.prepareError), {
                    duration: 3
                })
            }
            T(!1)
        }
    }, t[32] = F, t[33] = z, t[34] = h, t[35] = B, t[36] = P, t[37] = a, t[38] = I, t[39] = Q, t[40] = be) : be = t[40];
    let xe = be,
        Se;
    t[41] === N ? Se = t[42] : (Se = e => {
        e.preventDefault(), N.handleSubmit()
    }, t[41] = N, t[42] = Se);
    let Ce = Se;
    async function we(e) {
        let t = e.name.trim();
        if (!t) return;
        let n = ve(e, A);
        if (n == null || d === `v2` && !z) return;
        let i = d === `v2` ? e.useCases : [`codex`],
            a = {
                name: t,
                ttl: n,
                useCases: i,
                version: d
            };
        try {
            let e = await r(a);
            C({
                step: `generated`,
                generatedAccessToken: e.accessToken,
                useCases: i,
                version: d
            })
        } catch (e) {
            let t = e;
            if ((i.includes(`codex`) || i.includes(`codex_security`)) && t instanceof o && t.code === `phone_verification_required`) {
                E(i);
                return
            }
            _.danger(h.formatMessage(_e(t) ? G.expirationError : G.createError), {
                duration: 3
            })
        }
    }
    let Te;
    t[43] !== x.step || t[44] !== X || t[45] !== p ? (Te = () => {
        x.step === `generated` && p(), X()
    }, t[43] = x.step, t[44] = X, t[45] = p, t[46] = Te) : Te = t[46];
    let Ee = Te,
        De;
    t[47] !== l || t[48] !== x.generatedAccessToken || t[49] !== x.step || t[50] !== x.useCases || t[51] !== x.version || t[52] !== A || t[53] !== N || t[54] !== X || t[55] !== Ce || t[56] !== Ee || t[57] !== xe || t[58] !== v || t[59] !== z || t[60] !== h || t[61] !== B || t[62] !== K || t[63] !== w || t[64] !== L || t[65] !== Q || t[66] !== d ? (De = x.step === `generated` ? {
        title: h.formatMessage(G.generatedTitle),
        description: h.formatMessage(G.generatedDescription),
        primaryButton: (0, U.jsx)(s.Button, {
            title: h.formatMessage(G.done),
            color: `primary`,
            onClick: Ee
        }),
        secondaryButton: void 0,
        body: (0, U.jsx)(he, {
            generatedAccessToken: x.generatedAccessToken,
            useCases: x.useCases,
            version: x.version,
            onCopied: () => {
                _.success(h.formatMessage(G.copiedGeneratedAgentIdentity), {
                    duration: 3
                })
            }
        })
    } : x.step === `permissions` ? {
        title: h.formatMessage(G.createTitle),
        description: h.formatMessage(G.permissionsDescription),
        primaryButton: (0, U.jsx)(s.Button, {
            title: h.formatMessage(G.continue),
            color: `primary`,
            disabled: !z || B,
            loading: w,
            onClick: () => void xe()
        }),
        secondaryButton: (0, U.jsx)(s.Button, {
            title: h.formatMessage(G.cancel),
            color: `secondary`,
            disabled: B,
            onClick: X
        }),
        body: (0, U.jsx)(de, {
            form: N,
            availableUseCases: l,
            disabled: B
        })
    } : {
        title: h.formatMessage(G.createTitle),
        description: h.formatMessage(G.createDescription),
        primaryButton: (0, U.jsx)(s.Button, {
            title: h.formatMessage(L ? G.verifyPhone : G.create),
            color: `primary`,
            disabled: L ? B : K,
            loading: B,
            onClick: () => L ? void Q() : void N.handleSubmit()
        }),
        secondaryButton: (0, U.jsx)(s.Button, {
            title: h.formatMessage(v ? G.back : G.cancel),
            color: `secondary`,
            disabled: B,
            onClick: () => v ? C({
                step: `permissions`
            }) : X()
        }),
        body: (0, U.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [L && (0, U.jsx)(`p`, {
                role: `alert`,
                children: (0, U.jsx)(m, {
                    ...G.verificationRequired
                })
            }), (0, U.jsx)(fe, {
                form: N,
                scopesReadOnly: v,
                availableUseCases: l,
                maxTtlSeconds: A,
                onSubmit: Ce,
                version: d
            })]
        })
    }, t[47] = l, t[48] = x.generatedAccessToken, t[49] = x.step, t[50] = x.useCases, t[51] = x.version, t[52] = A, t[53] = N, t[54] = X, t[55] = Ce, t[56] = Ee, t[57] = xe, t[58] = v, t[59] = z, t[60] = h, t[61] = B, t[62] = K, t[63] = w, t[64] = L, t[65] = Q, t[66] = d, t[67] = De) : De = t[67];
    let $ = De,
        Oe;
    return t[68] !== $.body || t[69] !== $.description || t[70] !== $.primaryButton || t[71] !== $.secondaryButton || t[72] !== $.title || t[73] !== X || t[74] !== n ? (Oe = (0, U.jsx)(i, {
        testId: `modal-agent-identity-create`,
        isOpen: n,
        onClose: X,
        showCloseButton: !0,
        title: $.title,
        description: $.description,
        primaryButton: $.primaryButton,
        secondaryButton: $.secondaryButton,
        allowVerticalContentToOverflow: !0,
        size: `large`,
        className: `text-token-text-secondary`,
        children: $.body
    }), t[68] = $.body, t[69] = $.description, t[70] = $.primaryButton, t[71] = $.secondaryButton, t[72] = $.title, t[73] = X, t[74] = n, t[75] = Oe) : Oe = t[75], Oe
}

function oe(e) {
    return e.isSubmitting
}

function se(e) {
    return e.values.useCases
}

function ce(e) {
    return e.values.customExpirationDate
}

function le(e) {
    return e.values.expirationPreset
}

function ue(e) {
    return e.values.name
}

function de({
    form: e,
    availableUseCases: t,
    disabled: n
}) {
    "use no forget";
    let r = ne(),
        i = S(e.store, e => e.values.useCases),
        a = r.formatMessage(G.permissionsLabel),
        o = r.formatMessage(G.workspaceAgentsPermissionsLabel),
        s = r.formatMessage(G.workspaceAgentsPermissionsDescription),
        c = r.formatMessage(G.codexPermissionsLabel),
        l = r.formatMessage(G.codexPermissionsDescription, {
            minimumVersion: W
        }),
        u = r.formatMessage(G.codexSecurityPermissionsLabel),
        d = r.formatMessage(G.codexSecurityPermissionsDescription);
    return (0, U.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [(0, U.jsx)(`div`, {
            className: `text-token-text-secondary text-sm font-medium`,
            children: a
        }), (0, U.jsxs)(`div`, {
            className: `text-token-text-primary flex flex-col gap-3 text-sm`,
            children: [t.includes(`workspace_agents`) && (0, U.jsx)(x, {
                disabled: n,
                id: `access-token-use-case-workspace-agents`,
                checked: i.includes(`workspace_agents`),
                onChange: t => e.setFieldValue(`useCases`, R(i, `workspace_agents`, t.target.checked)),
                label: (0, U.jsx)(pe, {
                    title: o,
                    description: s
                })
            }), t.includes(`codex`) && (0, U.jsx)(x, {
                disabled: n,
                id: `access-token-use-case-codex`,
                checked: i.includes(`codex`),
                onChange: t => e.setFieldValue(`useCases`, R(i, `codex`, t.target.checked)),
                label: (0, U.jsx)(pe, {
                    title: c,
                    description: l
                })
            }), t.includes(`codex_security`) && (0, U.jsx)(x, {
                disabled: n,
                id: `access-token-use-case-codex-security`,
                checked: i.includes(`codex_security`),
                onChange: t => e.setFieldValue(`useCases`, R(i, `codex_security`, t.target.checked)),
                label: (0, U.jsx)(pe, {
                    title: u,
                    description: d
                })
            })]
        })]
    })
}

function fe({
    form: e,
    scopesReadOnly: t,
    availableUseCases: n,
    maxTtlSeconds: r,
    onSubmit: i,
    version: a
}) {
    "use no forget";
    let o = ne(),
        s = A(),
        c = r == null ? null : E(r),
        l = ie({
            intl: o,
            maxTtlSeconds: r,
            customLabel: o.formatMessage(G.customExpirationOption),
            showPresetDates: !0
        });
    return (0, U.jsxs)(`form`, {
        className: `flex flex-col gap-4`,
        onSubmit: i,
        children: [(0, U.jsx)(e.Field, {
            name: `name`,
            children: ({
                state: e,
                handleChange: t,
                handleBlur: n
            }) => (0, U.jsx)(v, {
                name: `agent-identity-name`,
                displayName: o.formatMessage(G.nameInputLabel),
                placeholder: o.formatMessage(G.nameInputPlaceholder),
                value: e.value,
                onBlur: n,
                onChange: e => t(e.target.value),
                inputClassName: `bg-transparent`
            })
        }), a === `v2` && (0, U.jsx)(de, {
            form: e,
            availableUseCases: n,
            disabled: t
        }), (0, U.jsx)(e.Field, {
            name: `expirationPreset`,
            children: ({
                state: t,
                handleChange: n
            }) => (0, U.jsxs)(`div`, {
                className: `grid grid-cols-1 gap-3 sm:grid-cols-2`,
                children: [(0, U.jsxs)(`div`, {
                    children: [(0, U.jsx)(`label`, {
                        id: `agent-identity-expiration-label`,
                        htmlFor: `agent-identity-expiration`,
                        onClick: e => e.preventDefault(),
                        className: `text-token-text-secondary mb-1.5 block text-sm font-medium`,
                        children: (0, U.jsx)(m, {
                            ...G.expirationInputLabel
                        })
                    }), (0, U.jsx)(F, {
                        value: t.value,
                        options: l,
                        placeholder: o.formatMessage(G.expirationInputPlaceholder),
                        labelId: `agent-identity-expiration-label`,
                        triggerId: `agent-identity-expiration`,
                        onChange: t => {
                            n(t), t !== `custom` && e.setFieldValue(`customExpirationDate`, ``)
                        }
                    })]
                }), t.value === `custom` && (0, U.jsx)(e.Field, {
                    name: `customExpirationDate`,
                    children: ({
                        state: e,
                        handleChange: t
                    }) => (0, U.jsxs)(`div`, {
                        children: [(0, U.jsx)(`label`, {
                            htmlFor: `agent-identity-custom-expiration-date`,
                            className: `text-token-text-secondary mb-1.5 block text-sm font-medium`,
                            children: (0, U.jsx)(m, {
                                ...G.customExpirationDateLabel
                            })
                        }), (0, U.jsx)(`input`, {
                            id: `agent-identity-custom-expiration-date`,
                            "data-testid": `custom-expiration-date`,
                            type: `date`,
                            min: M(s),
                            max: c == null ? void 0 : M(c),
                            value: e.value,
                            onChange: e => {
                                t(e.target.value)
                            },
                            className: `border-token-border-heavy bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary h-10 w-full rounded-xl border px-3 text-sm focus:ring-1 focus:outline-hidden`
                        })]
                    })
                }), D(t.value) && (0, U.jsx)(L, {
                    value: P(j[t.value], o)
                })]
            })
        })]
    })
}

function L(e) {
    "use forget";
    let t = (0, V.c)(3),
        {
            value: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, U.jsx)(`div`, {
        className: `text-token-text-secondary mb-1.5 block text-sm font-medium`,
        children: (0, U.jsx)(m, {
            ...G.expirationDateLabel
        })
    }), t[0] = r) : r = t[0];
    let i;
    return t[1] === n ? i = t[2] : (i = (0, U.jsxs)(`div`, {
        children: [r, (0, U.jsx)(`div`, {
            "data-testid": `preset-expiration-date`,
            className: `border-token-border-heavy bg-token-bg-primary text-token-text-primary flex h-10 w-full items-center rounded-xl border px-3 text-sm`,
            children: n
        })]
    }), t[1] = n, t[2] = i), i
}

function pe(e) {
    "use forget";
    let t = (0, V.c)(11),
        {
            title: n,
            description: r
        } = e,
        i;
    t[0] === n ? i = t[1] : (i = (0, U.jsx)(`span`, {
        className: `text-token-text-primary font-medium`,
        children: n
    }), t[0] = n, t[1] = i);
    let a;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, U.jsx)(d, {
        className: `h-4 w-4 translate-y-[2px]`
    }), t[2] = a) : a = t[2];
    let o;
    t[3] === r ? o = t[4] : (o = (0, U.jsx)(`span`, {
        className: `text-token-text-tertiary inline-flex shrink-0 cursor-help items-center`,
        "aria-label": r,
        children: a
    }), t[3] = r, t[4] = o);
    let s;
    t[5] !== r || t[6] !== o ? (s = (0, U.jsx)(l, {
        label: r,
        side: `right`,
        align: `center`,
        sideOffset: 4,
        labelTextAlign: `left`,
        children: o
    }), t[5] = r, t[6] = o, t[7] = s) : s = t[7];
    let c;
    return t[8] !== i || t[9] !== s ? (c = (0, U.jsxs)(`div`, {
        className: `inline-flex items-center gap-2`,
        children: [i, s]
    }), t[8] = i, t[9] = s, t[10] = c) : c = t[10], c
}

function me({
    version: e,
    initiallyIncludesCodex: t,
    initiallyIncludesCodexSecurity: n,
    initiallyIncludesWorkspaceAgents: r
}) {
    return e === `v1` ? [`codex`] : [...r ? [`workspace_agents`] : [], ...t ? [`codex`] : [], ...n ? [`codex_security`] : []]
}

function he(e) {
    "use forget";
    let t = (0, V.c)(9),
        {
            generatedAccessToken: n,
            useCases: r,
            version: i,
            onCopied: a
        } = e,
        o = i === `v1` ? G.generatedCodexAccessTokenDescription : r.includes(`codex_security`) ? G.generatedCodexSecurityAccessTokenDescription : r.includes(`codex`) && r.includes(`workspace_agents`) ? G.generatedWorkspaceAgentsAndCodexAccessTokenDescription : r.includes(`workspace_agents`) ? G.generatedWorkspaceAgentsAccessTokenDescription : G.generatedCodexV2AccessTokenDescription,
        s;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = {
        minimumVersion: W
    }, t[0] = s) : s = t[0];
    let c;
    t[1] === o ? c = t[2] : (c = (0, U.jsx)(m, {
        ...o,
        values: s
    }), t[1] = o, t[2] = c);
    let l;
    t[3] !== n || t[4] !== a ? (l = (0, U.jsx)(T, {
        value: n,
        onCopied: a
    }), t[3] = n, t[4] = a, t[5] = l) : l = t[5];
    let u;
    return t[6] !== c || t[7] !== l ? (u = (0, U.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [c, l]
    }), t[6] = c, t[7] = l, t[8] = u) : u = t[8], u
}

function R(e, t, n) {
    return n ? e.includes(t) ? e : [...e, t] : e.filter(e => e !== t)
}

function ge({
    expirationPreset: e,
    customExpirationDate: t,
    maxTtlSeconds: n
}) {
    return e ? e === `custom` ? ve({
        name: ``,
        useCases: [`codex`],
        expirationPreset: e,
        customExpirationDate: t
    }, n) != null : ve({
        name: ``,
        useCases: [`codex`],
        expirationPreset: e,
        customExpirationDate: ``
    }, n) != null : !1
}

function z(e) {
    let t = O(e);
    return t != null && t.getTime() >= A().getTime()
}

function B(e, t) {
    if (t == null) return !0;
    let n = O(e);
    return n != null && n.getTime() <= E(t).getTime()
}

function _e(e) {
    return e instanceof o ? e.code === `invalid_user_auth_credential_ttl` || e.status === 422 && Array.isArray(e.detail) && e.detail.some(e => typeof e == `object` && !!e && `loc` in e && Array.isArray(e.loc) && e.loc[0] === `body` && e.loc[1] === `ttl`) : !1
}

function ve(e, t) {
    let n;
    if (D(e.expirationPreset)) n = j[e.expirationPreset] * k;
    else if (e.expirationPreset === `none`) n = void 0;
    else if (e.expirationPreset !== `custom`) n = void 0;
    else {
        if (!z(e.customExpirationDate) || !B(e.customExpirationDate, t)) return;
        let r = O(e.customExpirationDate);
        if (r == null) return;
        let i = new Date,
            a = new Date(r.getFullYear(), r.getMonth(), r.getDate(), i.getHours(), i.getMinutes(), i.getSeconds(), i.getMilliseconds()).getTime();
        if (Number.isNaN(a)) return;
        n = Math.max(N, Math.ceil((a - Date.now()) / 1e3))
    }
    if (n != null && !(t != null && n > t)) return n
}
var V, H, U, W, ye, G, K = e((() => {
    V = _(), w(), b(), y(), a(), ee(), c(), u(), n(), r(), C(), H = t(g()), h(), ae(), U = f(), W = `0.138.0-alpha.6`, ye = 364 * k, G = p({
        permissionsDescription: {
            id: `chatgpt.access_tokens.create_modal.permissions.description`,
            defaultMessage: `Choose where to use this token. You may need to verify your phone before entering token details.`
        },
        continue: {
            id: `chatgpt.access_tokens.create_modal.permissions.continue`,
            defaultMessage: `Continue`
        },
        back: {
            id: `chatgpt.access_tokens.create_modal.details.back`,
            defaultMessage: `Back`
        },
        prepareError: {
            id: `chatgpt.access_tokens.create_modal.permissions.prepare_error`,
            defaultMessage: `Couldn't prepare access token creation`
        },
        verifyPhone: {
            id: `chatgpt.access_tokens.create_modal.details.verify_phone`,
            defaultMessage: `Verify phone`
        },
        verificationRequired: {
            id: `chatgpt.access_tokens.create_modal.details.verification_required`,
            defaultMessage: `Your token wasn't created. Phone verification is required again. After verifying, you'll need to enter the token name and expiration again.`
        },
        createTitle: {
            id: `chatgpt.access_tokens.create_modal.title`,
            defaultMessage: `Create access token`
        },
        generatedTitle: {
            id: `chatgpt.access_tokens.create_modal.generated.title`,
            defaultMessage: `Copy access token`
        },
        createDescription: {
            id: `chatgpt.access_tokens.create_modal.details.description`,
            defaultMessage: `Name this access token and choose when it expires.`
        },
        generatedDescription: {
            id: `chatgpt.access_tokens.create_modal.generated.description`,
            defaultMessage: `Copy this access token now. You won't be able to view it again.`
        },
        nameInputLabel: {
            id: `chatgpt.access_tokens.create_modal.name.input.label`,
            defaultMessage: `Name`
        },
        nameInputPlaceholder: {
            id: `chatgpt.access_tokens.create_modal.name.input.placeholder`,
            defaultMessage: `Access token`
        },
        expirationInputLabel: {
            id: `chatgpt.access_tokens.create_modal.expiration.input.label`,
            defaultMessage: `Expiration`
        },
        expirationInputPlaceholder: {
            id: `chatgpt.access_tokens.create_modal.expiration.input.placeholder`,
            defaultMessage: `Select date`
        },
        expirationDateLabel: {
            id: `chatgpt.access_tokens.create_modal.expiration.date.label`,
            defaultMessage: `Expiration date`
        },
        customExpirationOption: {
            id: `chatgpt.access_tokens.create_modal.expiration.custom.option`,
            defaultMessage: `Custom`
        },
        customExpirationDateLabel: {
            id: `chatgpt.access_tokens.create_modal.expiration.custom_date.label`,
            defaultMessage: `Select date`
        },
        permissionsLabel: {
            id: `chatgpt.access_tokens.create_modal.permissions.label`,
            defaultMessage: `Scopes`
        },
        workspaceAgentsPermissionsLabel: {
            id: `chatgpt.access_tokens.create_modal.permissions.workspace_agents.label`,
            defaultMessage: `Workspace Agents`
        },
        workspaceAgentsPermissionsDescription: {
            id: `chatgpt.access_tokens.create_modal.permissions.workspace_agents.description`,
            defaultMessage: `Use for Workspace Agent API Triggers`
        },
        codexPermissionsLabel: {
            id: `chatgpt.access_tokens.create_modal.permissions.codex.label`,
            defaultMessage: `Codex`
        },
        codexPermissionsDescription: {
            id: `chatgpt.access_tokens.create_modal.permissions.codex.description.minimum_version`,
            defaultMessage: `Use for Codex CLI {minimumVersion} or later and automations.`
        },
        codexSecurityPermissionsLabel: {
            id: `chatgpt.access_tokens.create_modal.permissions.codex_security.label`,
            defaultMessage: `Codex Security`
        },
        codexSecurityPermissionsDescription: {
            id: `chatgpt.access_tokens.create_modal.permissions.codex_security.description`,
            defaultMessage: `Use for the Codex Security API and security automations.`
        },
        generatedWorkspaceAgentsAccessTokenDescription: {
            id: `chatgpt.access_tokens.create_modal.generated.copy_field.workspace_agent_api_triggers.instructions`,
            defaultMessage: `Use this value with Workspace Agent API Triggers. Please store it securely.`
        },
        generatedCodexAccessTokenDescription: {
            id: `chatgpt.access_tokens.create_modal.generated.copy_field.instructions`,
            defaultMessage: `Use this value as the access token for your Codex automation. Please store it securely.`
        },
        generatedCodexV2AccessTokenDescription: {
            id: `chatgpt.access_tokens.create_modal.generated.copy_field.codex_v2.instructions`,
            defaultMessage: `Use this value with Codex CLI {minimumVersion} or later. Please store it securely.`
        },
        generatedCodexSecurityAccessTokenDescription: {
            id: `chatgpt.access_tokens.create_modal.generated.copy_field.codex_security.instructions`,
            defaultMessage: `Use this value with the Codex Security API and any other selected products. Please store it securely.`
        },
        generatedWorkspaceAgentsAndCodexAccessTokenDescription: {
            id: `chatgpt.access_tokens.create_modal.generated.copy_field.workspace_agents_and_codex.instructions`,
            defaultMessage: `Use this value with Workspace Agent API Triggers and Codex CLI {minimumVersion} or later. Please store it securely.`
        },
        copiedGeneratedAgentIdentity: {
            id: `chatgpt.access_tokens.create_modal.generated.toast.copied`,
            defaultMessage: `Access token copied`
        },
        createError: {
            id: `chatgpt.access_tokens.create_modal.create.toast.error`,
            defaultMessage: `Couldn't create access token`
        },
        expirationError: {
            id: `chatgpt.access_tokens.create_modal.create.toast.expiration_error`,
            defaultMessage: `Choose an expiration date within the allowed range, then try again.`
        },
        create: {
            id: `chatgpt.access_tokens.create_modal.create.button`,
            defaultMessage: `Create`
        },
        done: {
            id: `chatgpt.access_tokens.create_modal.done.button`,
            defaultMessage: `Done`
        },
        cancel: {
            id: `chatgpt.access_tokens.create_modal.cancel.button`,
            defaultMessage: `Cancel`
        }
    })
}));
export {
    K as n, I as t
};
//# sourceMappingURL=7f7d91ee-ik319l1pczn0u74m.js.map