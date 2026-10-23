import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aw as n,
    IU as r,
    LU as i,
    Ow as a,
    Qy as o,
    Vw as s,
    Zy as c,
    cot as l,
    fB as u,
    not as d,
    pB as ee,
    zw as f
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as te,
    Ln as ne,
    Nn as p,
    Rn as m,
    Vn as h,
    wn as g,
    zn as re
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bst as _,
    Vst as v,
    cqn as y,
    sqn as b
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Bf as x,
    Hf as ie,
    Kf as S
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    n as C,
    t as w
} from "./b129bf1f-pelxy861w6783a6z.js";
import {
    a as T,
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
    u as I
} from "./54aa3ef4-fav52w3j6gevv1ad.js";

function L(e) {
    "use forget";
    let t = (0, H.c)(76),
        {
            isOpen: n,
            onCreate: i,
            onPrepare: o,
            onPhoneVerificationRequired: s,
            availableUseCases: c,
            initialUseCases: l,
            version: u,
            maxTtlSeconds: ee,
            onClose: te,
            onCreated: ne
        } = e,
        m = re(),
        h;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (h = r(), t[0] = h) : h = t[0];
    let g = h,
        _ = u === `v2` && o != null,
        v = _ ? `permissions` : `details`,
        y;
    t[1] === v ? y = t[2] : (y = {
        step: v
    }, t[1] = v, t[2] = y);
    let [b, x] = (0, U.useState)(y), [C, w] = (0, U.useState)(!1), [T, E] = (0, U.useState)(null), D = l.includes(`codex`), O = c.includes(`codex_security`) && l.includes(`codex_security`), k = l.includes(`workspace_agents`), A = u === `v2` ? Math.min(ee ?? ve, ve) : ee, j = pe({
        version: u,
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
    let N = ie({
            defaultValues: M,
            onSubmit: async e => {
                let {
                    value: t
                } = e;
                b.step === `details` && !R && await we(t)
            }
        }),
        P = S(N.store, le),
        F = S(N.store, ce),
        I = S(N.store, se),
        L = S(N.store, oe),
        R = T != null && T.length === L.length && T.every(e => L.includes(e)),
        fe = S(N.store, ae),
        z;
    t[5] !== c || t[6] !== L ? (z = L.length > 0 && L.every(e => c.includes(e)), t[5] = c, t[6] = L, t[7] = z) : z = t[7];
    let B = z,
        V = fe || C,
        G;
    t[8] !== I || t[9] !== A || t[10] !== F || t[11] !== B || t[12] !== V || t[13] !== P || t[14] !== u ? (G = P.trim().length === 0 || u === `v2` && !B || !he({
        expirationPreset: F,
        customExpirationDate: I,
        maxTtlSeconds: A
    }) || V, t[8] = I, t[9] = A, t[10] = F, t[11] = B, t[12] = V, t[13] = P, t[14] = u, t[15] = G) : G = t[15];
    let q = G,
        J, Y;
    t[16] !== N || t[17] !== _ || t[18] !== D || t[19] !== O || t[20] !== k || t[21] !== n || t[22] !== u ? (Y = () => {
        n || (N.reset({
            name: ``,
            useCases: pe({
                version: u,
                initiallyIncludesCodex: D,
                initiallyIncludesCodexSecurity: O,
                initiallyIncludesWorkspaceAgents: k
            }),
            expirationPreset: ``,
            customExpirationDate: ``
        }), x({
            step: _ ? `permissions` : `details`
        }), E(null))
    }, J = [N, _, D, O, k, n, u], t[16] = N, t[17] = _, t[18] = D, t[19] = O, t[20] = k, t[21] = n, t[22] = u, t[23] = J, t[24] = Y) : (J = t[23], Y = t[24]), (0, U.useEffect)(Y, J);
    let X;
    t[25] !== V || t[26] !== te ? (X = () => {
        V || te()
    }, t[25] = V, t[26] = te, t[27] = X) : X = t[27];
    let Z = X,
        ye;
    t[28] !== m || t[29] !== s || t[30] !== L ? (ye = async function() {
        w(!0);
        try {
            await s(L)
        } catch {
            g.danger(m.formatMessage(K.prepareError), {
                duration: 3
            })
        }
        w(!1)
    }, t[28] = m, t[29] = s, t[30] = L, t[31] = ye) : ye = t[31];
    let Q = ye,
        be;
    t[32] !== F || t[33] !== B || t[34] !== m || t[35] !== V || t[36] !== P || t[37] !== o || t[38] !== L || t[39] !== Q ? (be = async function() {
        if (!(!B || V || o == null)) {
            w(!0);
            try {
                await o(L), E(null), x({
                    step: `details`
                })
            } catch (e) {
                let t = e;
                t instanceof d && t.code === `phone_verification_required` ? P || F ? (E(L), x({
                    step: `details`
                })) : await Q() : g.danger(m.formatMessage(K.prepareError), {
                    duration: 3
                })
            }
            w(!1)
        }
    }, t[32] = F, t[33] = B, t[34] = m, t[35] = V, t[36] = P, t[37] = o, t[38] = L, t[39] = Q, t[40] = be) : be = t[40];
    let xe = be,
        Se;
    t[41] === N ? Se = t[42] : (Se = e => {
        e.preventDefault(), N.handleSubmit()
    }, t[41] = N, t[42] = Se);
    let Ce = Se;
    async function we(e) {
        let t = e.name.trim();
        if (!t) return;
        let n = _e(e, A);
        if (n == null || u === `v2` && !B) return;
        let r = u === `v2` ? e.useCases : [`codex`],
            a = {
                name: t,
                ttl: n,
                useCases: r,
                version: u
            };
        try {
            let e = await i(a);
            x({
                step: `generated`,
                generatedAccessToken: e.accessToken,
                useCases: r,
                version: u
            })
        } catch (e) {
            let t = e;
            if ((r.includes(`codex`) || r.includes(`codex_security`)) && t instanceof d && t.code === `phone_verification_required`) {
                E(r);
                return
            }
            g.danger(m.formatMessage(ge(t) ? K.expirationError : K.createError), {
                duration: 3
            })
        }
    }
    let Te;
    t[43] !== b.step || t[44] !== Z || t[45] !== ne ? (Te = () => {
        b.step === `generated` && ne(), Z()
    }, t[43] = b.step, t[44] = Z, t[45] = ne, t[46] = Te) : Te = t[46];
    let Ee = Te,
        De;
    t[47] !== c || t[48] !== b.generatedAccessToken || t[49] !== b.step || t[50] !== b.useCases || t[51] !== b.version || t[52] !== A || t[53] !== N || t[54] !== Z || t[55] !== Ce || t[56] !== Ee || t[57] !== xe || t[58] !== _ || t[59] !== B || t[60] !== m || t[61] !== V || t[62] !== q || t[63] !== C || t[64] !== R || t[65] !== Q || t[66] !== u ? (De = b.step === `generated` ? {
        title: m.formatMessage(K.generatedTitle),
        description: m.formatMessage(K.generatedDescription),
        primaryButton: (0, W.jsx)(f.Button, {
            title: m.formatMessage(K.done),
            color: `primary`,
            onClick: Ee
        }),
        secondaryButton: void 0,
        body: (0, W.jsx)(me, {
            generatedAccessToken: b.generatedAccessToken,
            useCases: b.useCases,
            version: b.version,
            onCopied: () => {
                g.success(m.formatMessage(K.copiedGeneratedAgentIdentity), {
                    duration: 3
                })
            }
        })
    } : b.step === `permissions` ? {
        title: m.formatMessage(K.createTitle),
        description: m.formatMessage(K.permissionsDescription),
        primaryButton: (0, W.jsx)(f.Button, {
            title: m.formatMessage(K.continue),
            color: `primary`,
            disabled: !B || V,
            loading: C,
            onClick: () => void xe()
        }),
        secondaryButton: (0, W.jsx)(f.Button, {
            title: m.formatMessage(K.cancel),
            color: `secondary`,
            disabled: V,
            onClick: Z
        }),
        body: (0, W.jsx)(ue, {
            form: N,
            availableUseCases: c,
            disabled: V
        })
    } : {
        title: m.formatMessage(K.createTitle),
        description: m.formatMessage(K.createDescription),
        primaryButton: (0, W.jsx)(f.Button, {
            title: m.formatMessage(R ? K.verifyPhone : K.create),
            color: `primary`,
            disabled: R ? V : q,
            loading: V,
            onClick: () => R ? void Q() : void N.handleSubmit()
        }),
        secondaryButton: (0, W.jsx)(f.Button, {
            title: m.formatMessage(_ ? K.back : K.cancel),
            color: `secondary`,
            disabled: V,
            onClick: () => _ ? x({
                step: `permissions`
            }) : Z()
        }),
        body: (0, W.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [R && (0, W.jsx)(`p`, {
                role: `alert`,
                children: (0, W.jsx)(p, {
                    ...K.verificationRequired
                })
            }), (0, W.jsx)(de, {
                form: N,
                scopesReadOnly: _,
                availableUseCases: c,
                maxTtlSeconds: A,
                onSubmit: Ce,
                version: u
            })]
        })
    }, t[47] = c, t[48] = b.generatedAccessToken, t[49] = b.step, t[50] = b.useCases, t[51] = b.version, t[52] = A, t[53] = N, t[54] = Z, t[55] = Ce, t[56] = Ee, t[57] = xe, t[58] = _, t[59] = B, t[60] = m, t[61] = V, t[62] = q, t[63] = C, t[64] = R, t[65] = Q, t[66] = u, t[67] = De) : De = t[67];
    let $ = De,
        Oe;
    return t[68] !== $.body || t[69] !== $.description || t[70] !== $.primaryButton || t[71] !== $.secondaryButton || t[72] !== $.title || t[73] !== Z || t[74] !== n ? (Oe = (0, W.jsx)(a, {
        testId: `modal-agent-identity-create`,
        isOpen: n,
        onClose: Z,
        showCloseButton: !0,
        title: $.title,
        description: $.description,
        primaryButton: $.primaryButton,
        secondaryButton: $.secondaryButton,
        allowVerticalContentToOverflow: !0,
        size: `large`,
        className: `text-token-text-secondary`,
        children: $.body
    }), t[68] = $.body, t[69] = $.description, t[70] = $.primaryButton, t[71] = $.secondaryButton, t[72] = $.title, t[73] = Z, t[74] = n, t[75] = Oe) : Oe = t[75], Oe
}

function ae(e) {
    return e.isSubmitting
}

function oe(e) {
    return e.values.useCases
}

function se(e) {
    return e.values.customExpirationDate
}

function ce(e) {
    return e.values.expirationPreset
}

function le(e) {
    return e.values.name
}

function ue({
    form: e,
    availableUseCases: t,
    disabled: n
}) {
    "use no forget";
    let r = re(),
        i = S(e.store, e => e.values.useCases),
        a = r.formatMessage(K.permissionsLabel),
        o = r.formatMessage(K.workspaceAgentsPermissionsLabel),
        s = r.formatMessage(K.workspaceAgentsPermissionsDescription),
        c = r.formatMessage(K.codexPermissionsLabel),
        l = r.formatMessage(K.codexPermissionsDescription, {
            minimumVersion: G
        }),
        u = r.formatMessage(K.codexSecurityPermissionsLabel),
        d = r.formatMessage(K.codexSecurityPermissionsDescription);
    return (0, W.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [(0, W.jsx)(`div`, {
            className: `text-token-text-secondary text-sm font-medium`,
            children: a
        }), (0, W.jsxs)(`div`, {
            className: `text-token-text-primary flex flex-col gap-3 text-sm`,
            children: [t.includes(`workspace_agents`) && (0, W.jsx)(b, {
                disabled: n,
                id: `access-token-use-case-workspace-agents`,
                checked: i.includes(`workspace_agents`),
                onChange: t => e.setFieldValue(`useCases`, z(i, `workspace_agents`, t.target.checked)),
                label: (0, W.jsx)(fe, {
                    title: o,
                    description: s
                })
            }), t.includes(`codex`) && (0, W.jsx)(b, {
                disabled: n,
                id: `access-token-use-case-codex`,
                checked: i.includes(`codex`),
                onChange: t => e.setFieldValue(`useCases`, z(i, `codex`, t.target.checked)),
                label: (0, W.jsx)(fe, {
                    title: c,
                    description: l
                })
            }), t.includes(`codex_security`) && (0, W.jsx)(b, {
                disabled: n,
                id: `access-token-use-case-codex-security`,
                checked: i.includes(`codex_security`),
                onChange: t => e.setFieldValue(`useCases`, z(i, `codex_security`, t.target.checked)),
                label: (0, W.jsx)(fe, {
                    title: u,
                    description: d
                })
            })]
        })]
    })
}

function de({
    form: e,
    scopesReadOnly: t,
    availableUseCases: n,
    maxTtlSeconds: r,
    onSubmit: i,
    version: a
}) {
    "use no forget";
    let o = re(),
        s = A(),
        c = r == null ? null : E(r),
        l = T({
            intl: o,
            maxTtlSeconds: r,
            customLabel: o.formatMessage(K.customExpirationOption),
            showPresetDates: !0
        });
    return (0, W.jsxs)(`form`, {
        className: `flex flex-col gap-4`,
        onSubmit: i,
        children: [(0, W.jsx)(e.Field, {
            name: `name`,
            children: ({
                state: e,
                handleChange: t,
                handleBlur: n
            }) => (0, W.jsx)(_, {
                name: `agent-identity-name`,
                displayName: o.formatMessage(K.nameInputLabel),
                placeholder: o.formatMessage(K.nameInputPlaceholder),
                value: e.value,
                onBlur: n,
                onChange: e => t(e.target.value),
                inputClassName: `bg-transparent`
            })
        }), a === `v2` && (0, W.jsx)(ue, {
            form: e,
            availableUseCases: n,
            disabled: t
        }), (0, W.jsx)(e.Field, {
            name: `expirationPreset`,
            children: ({
                state: t,
                handleChange: n
            }) => (0, W.jsxs)(`div`, {
                className: `grid grid-cols-1 gap-3 sm:grid-cols-2`,
                children: [(0, W.jsxs)(`div`, {
                    children: [(0, W.jsx)(`label`, {
                        id: `agent-identity-expiration-label`,
                        htmlFor: `agent-identity-expiration`,
                        onClick: e => e.preventDefault(),
                        className: `text-token-text-secondary mb-1.5 block text-sm font-medium`,
                        children: (0, W.jsx)(p, {
                            ...K.expirationInputLabel
                        })
                    }), (0, W.jsx)(F, {
                        value: t.value,
                        options: l,
                        placeholder: o.formatMessage(K.expirationInputPlaceholder),
                        labelId: `agent-identity-expiration-label`,
                        triggerId: `agent-identity-expiration`,
                        onChange: t => {
                            n(t), t !== `custom` && e.setFieldValue(`customExpirationDate`, ``)
                        }
                    })]
                }), t.value === `custom` && (0, W.jsx)(e.Field, {
                    name: `customExpirationDate`,
                    children: ({
                        state: e,
                        handleChange: t
                    }) => (0, W.jsxs)(`div`, {
                        children: [(0, W.jsx)(`label`, {
                            htmlFor: `agent-identity-custom-expiration-date`,
                            className: `text-token-text-secondary mb-1.5 block text-sm font-medium`,
                            children: (0, W.jsx)(p, {
                                ...K.customExpirationDateLabel
                            })
                        }), (0, W.jsx)(`input`, {
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
                }), D(t.value) && (0, W.jsx)(R, {
                    value: P(j[t.value], o)
                })]
            })
        })]
    })
}

function R(e) {
    "use forget";
    let t = (0, H.c)(3),
        {
            value: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, W.jsx)(`div`, {
        className: `text-token-text-secondary mb-1.5 block text-sm font-medium`,
        children: (0, W.jsx)(p, {
            ...K.expirationDateLabel
        })
    }), t[0] = r) : r = t[0];
    let i;
    return t[1] === n ? i = t[2] : (i = (0, W.jsxs)(`div`, {
        children: [r, (0, W.jsx)(`div`, {
            "data-testid": `preset-expiration-date`,
            className: `border-token-border-heavy bg-token-bg-primary text-token-text-primary flex h-10 w-full items-center rounded-xl border px-3 text-sm`,
            children: n
        })]
    }), t[1] = n, t[2] = i), i
}

function fe(e) {
    "use forget";
    let t = (0, H.c)(11),
        {
            title: n,
            description: r
        } = e,
        i;
    t[0] === n ? i = t[1] : (i = (0, W.jsx)(`span`, {
        className: `text-token-text-primary font-medium`,
        children: n
    }), t[0] = n, t[1] = i);
    let a;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, W.jsx)(u, {
        className: `h-4 w-4 translate-y-[2px]`
    }), t[2] = a) : a = t[2];
    let o;
    t[3] === r ? o = t[4] : (o = (0, W.jsx)(`span`, {
        className: `text-token-text-tertiary inline-flex shrink-0 cursor-help items-center`,
        "aria-label": r,
        children: a
    }), t[3] = r, t[4] = o);
    let s;
    t[5] !== r || t[6] !== o ? (s = (0, W.jsx)(c, {
        label: r,
        side: `right`,
        align: `center`,
        sideOffset: 4,
        labelTextAlign: `left`,
        children: o
    }), t[5] = r, t[6] = o, t[7] = s) : s = t[7];
    let l;
    return t[8] !== i || t[9] !== s ? (l = (0, W.jsxs)(`div`, {
        className: `inline-flex items-center gap-2`,
        children: [i, s]
    }), t[8] = i, t[9] = s, t[10] = l) : l = t[10], l
}

function pe({
    version: e,
    initiallyIncludesCodex: t,
    initiallyIncludesCodexSecurity: n,
    initiallyIncludesWorkspaceAgents: r
}) {
    return e === `v1` ? [`codex`] : [...r ? [`workspace_agents`] : [], ...t ? [`codex`] : [], ...n ? [`codex_security`] : []]
}

function me(e) {
    "use forget";
    let t = (0, H.c)(9),
        {
            generatedAccessToken: n,
            useCases: r,
            version: i,
            onCopied: a
        } = e,
        o = i === `v1` ? K.generatedCodexAccessTokenDescription : r.includes(`codex_security`) ? K.generatedCodexSecurityAccessTokenDescription : r.includes(`codex`) && r.includes(`workspace_agents`) ? K.generatedWorkspaceAgentsAndCodexAccessTokenDescription : r.includes(`workspace_agents`) ? K.generatedWorkspaceAgentsAccessTokenDescription : K.generatedCodexV2AccessTokenDescription,
        s;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = {
        minimumVersion: G
    }, t[0] = s) : s = t[0];
    let c;
    t[1] === o ? c = t[2] : (c = (0, W.jsx)(p, {
        ...o,
        values: s
    }), t[1] = o, t[2] = c);
    let l;
    t[3] !== n || t[4] !== a ? (l = (0, W.jsx)(w, {
        value: n,
        onCopied: a
    }), t[3] = n, t[4] = a, t[5] = l) : l = t[5];
    let u;
    return t[6] !== c || t[7] !== l ? (u = (0, W.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [c, l]
    }), t[6] = c, t[7] = l, t[8] = u) : u = t[8], u
}

function z(e, t, n) {
    return n ? e.includes(t) ? e : [...e, t] : e.filter(e => e !== t)
}

function he({
    expirationPreset: e,
    customExpirationDate: t,
    maxTtlSeconds: n
}) {
    return e ? e === `custom` ? _e({
        name: ``,
        useCases: [`codex`],
        expirationPreset: e,
        customExpirationDate: t
    }, n) != null : _e({
        name: ``,
        useCases: [`codex`],
        expirationPreset: e,
        customExpirationDate: ``
    }, n) != null : !1
}

function B(e) {
    let t = O(e);
    return t != null && t.getTime() >= A().getTime()
}

function V(e, t) {
    if (t == null) return !0;
    let n = O(e);
    return n != null && n.getTime() <= E(t).getTime()
}

function ge(e) {
    return e instanceof d ? e.code === `invalid_user_auth_credential_ttl` || e.status === 422 && Array.isArray(e.detail) && e.detail.some(e => typeof e == `object` && !!e && `loc` in e && Array.isArray(e.loc) && e.loc[0] === `body` && e.loc[1] === `ttl`) : !1
}

function _e(e, t) {
    let n;
    if (D(e.expirationPreset)) n = j[e.expirationPreset] * k;
    else if (e.expirationPreset === `none`) n = void 0;
    else if (e.expirationPreset !== `custom`) n = void 0;
    else {
        if (!B(e.customExpirationDate) || !V(e.customExpirationDate, t)) return;
        let r = O(e.customExpirationDate);
        if (r == null) return;
        let i = new Date,
            a = new Date(r.getFullYear(), r.getMonth(), r.getDate(), i.getHours(), i.getMinutes(), i.getSeconds(), i.getMilliseconds()).getTime();
        if (Number.isNaN(a)) return;
        n = Math.max(N, Math.ceil((a - Date.now()) / 1e3))
    }
    if (n != null && !(t != null && n > t)) return n
}
var H, U, W, G, ve, K, q = e((() => {
    H = g(), C(), v(), y(), s(), ee(), n(), o(), i(), l(), x(), U = t(h()), m(), I(), W = te(), G = `0.138.0-alpha.6`, ve = 364 * k, K = ne({
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
    q as n, L as t
};
//# sourceMappingURL=7f7d91ee-k4c4kbtr9g036fpl.js.map