import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aw as n,
    IU as r,
    Kat as i,
    LU as a,
    Ow as o,
    Qat as s,
    Qy as c,
    Vw as l,
    Zy as u,
    fB as d,
    pB as ee,
    zw as f
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as p,
    Ln as m,
    Nn as h,
    Rn as g,
    Vn as _,
    wn as v,
    zn as te
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bst as y,
    DKn as b,
    EKn as x,
    zst as S
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Gf as C,
    Vf as ne,
    zf as w
} from "./c2675c8c-p3x4d0bnf7e77o1n.js";
import {
    n as T,
    t as E
} from "./b129bf1f-y5htjbn1aikgw9qx.js";
import {
    a as re,
    c as D,
    d as O,
    f as k,
    i as A,
    l as j,
    n as M,
    o as N,
    r as P,
    s as F,
    t as I,
    u as L
} from "./54aa3ef4-kqvutswvi2ccehya.js";

function R(e) {
    "use forget";
    let t = (0, W.c)(76),
        {
            isOpen: n,
            onCreate: a,
            onPrepare: s,
            onPhoneVerificationRequired: c,
            availableUseCases: l,
            initialUseCases: u,
            version: d,
            maxTtlSeconds: ee,
            onClose: p,
            onCreated: m
        } = e,
        g = te(),
        _;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = r(), t[0] = _) : _ = t[0];
    let v = _,
        y = d === `v2` && s != null,
        b = y ? `permissions` : `details`,
        x;
    t[1] === b ? x = t[2] : (x = {
        step: b
    }, t[1] = b, t[2] = x);
    let [S, w] = (0, G.useState)(x), [T, E] = (0, G.useState)(!1), [re, D] = (0, G.useState)(null), O = u.includes(`codex`), k = l.includes(`codex_security`) && u.includes(`codex_security`), A = u.includes(`workspace_agents`), j = d === `v2` ? Math.min(ee ?? ge, ge) : ee, M = de({
        version: d,
        initiallyIncludesCodex: O,
        initiallyIncludesCodexSecurity: k,
        initiallyIncludesWorkspaceAgents: A
    }), N;
    t[3] === M ? N = t[4] : (N = {
        name: ``,
        useCases: M,
        expirationPreset: ``,
        customExpirationDate: ``
    }, t[3] = M, t[4] = N);
    let P = ne({
            defaultValues: N,
            onSubmit: async e => {
                let {
                    value: t
                } = e;
                S.step === `details` && !z && await we(t)
            }
        }),
        F = C(P.store, ce),
        I = C(P.store, se),
        L = C(P.store, oe),
        R = C(P.store, ae),
        z = re != null && re.length === R.length && re.every(e => R.includes(e)),
        B = C(P.store, ie),
        V;
    t[5] !== l || t[6] !== R ? (V = R.length > 0 && R.every(e => l.includes(e)), t[5] = l, t[6] = R, t[7] = V) : V = t[7];
    let H = V,
        U = B || T,
        q;
    t[8] !== L || t[9] !== j || t[10] !== I || t[11] !== H || t[12] !== U || t[13] !== F || t[14] !== d ? (q = F.trim().length === 0 || d === `v2` && !H || !pe({
        expirationPreset: I,
        customExpirationDate: L,
        maxTtlSeconds: j
    }) || U, t[8] = L, t[9] = j, t[10] = I, t[11] = H, t[12] = U, t[13] = F, t[14] = d, t[15] = q) : q = t[15];
    let Y = q,
        X, _e;
    t[16] !== P || t[17] !== y || t[18] !== O || t[19] !== k || t[20] !== A || t[21] !== n || t[22] !== d ? (_e = () => {
        n || (P.reset({
            name: ``,
            useCases: de({
                version: d,
                initiallyIncludesCodex: O,
                initiallyIncludesCodexSecurity: k,
                initiallyIncludesWorkspaceAgents: A
            }),
            expirationPreset: ``,
            customExpirationDate: ``
        }), w({
            step: y ? `permissions` : `details`
        }), D(null))
    }, X = [P, y, O, k, A, n, d], t[16] = P, t[17] = y, t[18] = O, t[19] = k, t[20] = A, t[21] = n, t[22] = d, t[23] = X, t[24] = _e) : (X = t[23], _e = t[24]), (0, G.useEffect)(_e, X);
    let ve;
    t[25] !== U || t[26] !== p ? (ve = () => {
        U || p()
    }, t[25] = U, t[26] = p, t[27] = ve) : ve = t[27];
    let Z = ve,
        ye;
    t[28] !== g || t[29] !== c || t[30] !== R ? (ye = async function() {
        E(!0);
        try {
            await c(R)
        } catch {
            v.danger(g.formatMessage(J.prepareError), {
                duration: 3
            })
        }
        E(!1)
    }, t[28] = g, t[29] = c, t[30] = R, t[31] = ye) : ye = t[31];
    let Q = ye,
        be;
    t[32] !== I || t[33] !== H || t[34] !== g || t[35] !== U || t[36] !== F || t[37] !== s || t[38] !== R || t[39] !== Q ? (be = async function() {
        if (!(!H || U || s == null)) {
            E(!0);
            try {
                await s(R), D(null), w({
                    step: `details`
                })
            } catch (e) {
                let t = e;
                t instanceof i && t.code === `phone_verification_required` ? F || I ? (D(R), w({
                    step: `details`
                })) : await Q() : v.danger(g.formatMessage(J.prepareError), {
                    duration: 3
                })
            }
            E(!1)
        }
    }, t[32] = I, t[33] = H, t[34] = g, t[35] = U, t[36] = F, t[37] = s, t[38] = R, t[39] = Q, t[40] = be) : be = t[40];
    let xe = be,
        Se;
    t[41] === P ? Se = t[42] : (Se = e => {
        e.preventDefault(), P.handleSubmit()
    }, t[41] = P, t[42] = Se);
    let Ce = Se;
    async function we(e) {
        let t = e.name.trim();
        if (!t) return;
        let n = he(e, j);
        if (n == null || d === `v2` && !H) return;
        let r = d === `v2` ? e.useCases : [`codex`],
            o = {
                name: t,
                ttl: n,
                useCases: r,
                version: d
            };
        try {
            let e = await a(o);
            w({
                step: `generated`,
                generatedAccessToken: e.accessToken,
                useCases: r,
                version: d
            })
        } catch (e) {
            let t = e;
            if ((r.includes(`codex`) || r.includes(`codex_security`)) && t instanceof i && t.code === `phone_verification_required`) {
                D(r);
                return
            }
            v.danger(g.formatMessage(me(t) ? J.expirationError : J.createError), {
                duration: 3
            })
        }
    }
    let Te;
    t[43] !== S.step || t[44] !== Z || t[45] !== m ? (Te = () => {
        S.step === `generated` && m(), Z()
    }, t[43] = S.step, t[44] = Z, t[45] = m, t[46] = Te) : Te = t[46];
    let Ee = Te,
        De;
    t[47] !== l || t[48] !== S.generatedAccessToken || t[49] !== S.step || t[50] !== S.useCases || t[51] !== S.version || t[52] !== j || t[53] !== P || t[54] !== Z || t[55] !== Ce || t[56] !== Ee || t[57] !== xe || t[58] !== y || t[59] !== H || t[60] !== g || t[61] !== U || t[62] !== Y || t[63] !== T || t[64] !== z || t[65] !== Q || t[66] !== d ? (De = S.step === `generated` ? {
        title: g.formatMessage(J.generatedTitle),
        description: g.formatMessage(J.generatedDescription),
        primaryButton: (0, K.jsx)(f.Button, {
            title: g.formatMessage(J.done),
            color: `primary`,
            onClick: Ee
        }),
        secondaryButton: void 0,
        body: (0, K.jsx)(fe, {
            generatedAccessToken: S.generatedAccessToken,
            useCases: S.useCases,
            version: S.version,
            onCopied: () => {
                v.success(g.formatMessage(J.copiedGeneratedAgentIdentity), {
                    duration: 3
                })
            }
        })
    } : S.step === `permissions` ? {
        title: g.formatMessage(J.createTitle),
        description: g.formatMessage(J.permissionsDescription),
        primaryButton: (0, K.jsx)(f.Button, {
            title: g.formatMessage(J.continue),
            color: `primary`,
            disabled: !H || U,
            loading: T,
            onClick: () => void xe()
        }),
        secondaryButton: (0, K.jsx)(f.Button, {
            title: g.formatMessage(J.cancel),
            color: `secondary`,
            disabled: U,
            onClick: Z
        }),
        body: (0, K.jsx)(le, {
            form: P,
            availableUseCases: l,
            disabled: U
        })
    } : {
        title: g.formatMessage(J.createTitle),
        description: g.formatMessage(J.createDescription),
        primaryButton: (0, K.jsx)(f.Button, {
            title: g.formatMessage(z ? J.verifyPhone : J.create),
            color: `primary`,
            disabled: z ? U : Y,
            loading: U,
            onClick: () => z ? void Q() : void P.handleSubmit()
        }),
        secondaryButton: (0, K.jsx)(f.Button, {
            title: g.formatMessage(y ? J.back : J.cancel),
            color: `secondary`,
            disabled: U,
            onClick: () => y ? w({
                step: `permissions`
            }) : Z()
        }),
        body: (0, K.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [z && (0, K.jsx)(`p`, {
                role: `alert`,
                children: (0, K.jsx)(h, {
                    ...J.verificationRequired
                })
            }), (0, K.jsx)(ue, {
                form: P,
                scopesReadOnly: y,
                availableUseCases: l,
                maxTtlSeconds: j,
                onSubmit: Ce,
                version: d
            })]
        })
    }, t[47] = l, t[48] = S.generatedAccessToken, t[49] = S.step, t[50] = S.useCases, t[51] = S.version, t[52] = j, t[53] = P, t[54] = Z, t[55] = Ce, t[56] = Ee, t[57] = xe, t[58] = y, t[59] = H, t[60] = g, t[61] = U, t[62] = Y, t[63] = T, t[64] = z, t[65] = Q, t[66] = d, t[67] = De) : De = t[67];
    let $ = De,
        Oe;
    return t[68] !== $.body || t[69] !== $.description || t[70] !== $.primaryButton || t[71] !== $.secondaryButton || t[72] !== $.title || t[73] !== Z || t[74] !== n ? (Oe = (0, K.jsx)(o, {
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

function ie(e) {
    return e.isSubmitting
}

function ae(e) {
    return e.values.useCases
}

function oe(e) {
    return e.values.customExpirationDate
}

function se(e) {
    return e.values.expirationPreset
}

function ce(e) {
    return e.values.name
}

function le({
    form: e,
    availableUseCases: t,
    disabled: n
}) {
    "use no forget";
    let r = te(),
        i = C(e.store, e => e.values.useCases),
        a = r.formatMessage(J.permissionsLabel),
        o = r.formatMessage(J.workspaceAgentsPermissionsLabel),
        s = r.formatMessage(J.workspaceAgentsPermissionsDescription),
        c = r.formatMessage(J.codexPermissionsLabel),
        l = r.formatMessage(J.codexPermissionsDescription, {
            minimumVersion: q
        }),
        u = r.formatMessage(J.codexSecurityPermissionsLabel),
        d = r.formatMessage(J.codexSecurityPermissionsDescription);
    return (0, K.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [(0, K.jsx)(`div`, {
            className: `text-token-text-secondary text-sm font-medium`,
            children: a
        }), (0, K.jsxs)(`div`, {
            className: `text-token-text-primary flex flex-col gap-3 text-sm`,
            children: [t.includes(`workspace_agents`) && (0, K.jsx)(x, {
                disabled: n,
                id: `access-token-use-case-workspace-agents`,
                checked: i.includes(`workspace_agents`),
                onChange: t => e.setFieldValue(`useCases`, V(i, `workspace_agents`, t.target.checked)),
                label: (0, K.jsx)(B, {
                    title: o,
                    description: s
                })
            }), t.includes(`codex`) && (0, K.jsx)(x, {
                disabled: n,
                id: `access-token-use-case-codex`,
                checked: i.includes(`codex`),
                onChange: t => e.setFieldValue(`useCases`, V(i, `codex`, t.target.checked)),
                label: (0, K.jsx)(B, {
                    title: c,
                    description: l
                })
            }), t.includes(`codex_security`) && (0, K.jsx)(x, {
                disabled: n,
                id: `access-token-use-case-codex-security`,
                checked: i.includes(`codex_security`),
                onChange: t => e.setFieldValue(`useCases`, V(i, `codex_security`, t.target.checked)),
                label: (0, K.jsx)(B, {
                    title: u,
                    description: d
                })
            })]
        })]
    })
}

function ue({
    form: e,
    scopesReadOnly: t,
    availableUseCases: n,
    maxTtlSeconds: r,
    onSubmit: i,
    version: a
}) {
    "use no forget";
    let o = te(),
        s = j(),
        c = r == null ? null : D(r),
        l = re({
            intl: o,
            maxTtlSeconds: r,
            customLabel: o.formatMessage(J.customExpirationOption),
            showPresetDates: !0
        });
    return (0, K.jsxs)(`form`, {
        className: `flex flex-col gap-4`,
        onSubmit: i,
        children: [(0, K.jsx)(e.Field, {
            name: `name`,
            children: ({
                state: e,
                handleChange: t,
                handleBlur: n
            }) => (0, K.jsx)(S, {
                name: `agent-identity-name`,
                displayName: o.formatMessage(J.nameInputLabel),
                placeholder: o.formatMessage(J.nameInputPlaceholder),
                value: e.value,
                onBlur: n,
                onChange: e => t(e.target.value),
                inputClassName: `bg-transparent`
            })
        }), a === `v2` && (0, K.jsx)(le, {
            form: e,
            availableUseCases: n,
            disabled: t
        }), (0, K.jsx)(e.Field, {
            name: `expirationPreset`,
            children: ({
                state: t,
                handleChange: n
            }) => (0, K.jsxs)(`div`, {
                className: `grid grid-cols-1 gap-3 sm:grid-cols-2`,
                children: [(0, K.jsxs)(`div`, {
                    children: [(0, K.jsx)(`label`, {
                        id: `agent-identity-expiration-label`,
                        htmlFor: `agent-identity-expiration`,
                        onClick: e => e.preventDefault(),
                        className: `text-token-text-secondary mb-1.5 block text-sm font-medium`,
                        children: (0, K.jsx)(h, {
                            ...J.expirationInputLabel
                        })
                    }), (0, K.jsx)(I, {
                        value: t.value,
                        options: l,
                        placeholder: o.formatMessage(J.expirationInputPlaceholder),
                        labelId: `agent-identity-expiration-label`,
                        triggerId: `agent-identity-expiration`,
                        onChange: t => {
                            n(t), t !== `custom` && e.setFieldValue(`customExpirationDate`, ``)
                        }
                    })]
                }), t.value === `custom` && (0, K.jsx)(e.Field, {
                    name: `customExpirationDate`,
                    children: ({
                        state: e,
                        handleChange: t
                    }) => (0, K.jsxs)(`div`, {
                        children: [(0, K.jsx)(`label`, {
                            htmlFor: `agent-identity-custom-expiration-date`,
                            className: `text-token-text-secondary mb-1.5 block text-sm font-medium`,
                            children: (0, K.jsx)(h, {
                                ...J.customExpirationDateLabel
                            })
                        }), (0, K.jsx)(`input`, {
                            id: `agent-identity-custom-expiration-date`,
                            "data-testid": `custom-expiration-date`,
                            type: `date`,
                            min: N(s),
                            max: c == null ? void 0 : N(c),
                            value: e.value,
                            onChange: e => {
                                t(e.target.value)
                            },
                            className: `border-token-border-heavy bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary h-10 w-full rounded-xl border px-3 text-sm focus:ring-1 focus:outline-hidden`
                        })]
                    })
                }), O(t.value) && (0, K.jsx)(z, {
                    value: F(M[t.value], o)
                })]
            })
        })]
    })
}

function z(e) {
    "use forget";
    let t = (0, W.c)(3),
        {
            value: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, K.jsx)(`div`, {
        className: `text-token-text-secondary mb-1.5 block text-sm font-medium`,
        children: (0, K.jsx)(h, {
            ...J.expirationDateLabel
        })
    }), t[0] = r) : r = t[0];
    let i;
    return t[1] === n ? i = t[2] : (i = (0, K.jsxs)(`div`, {
        children: [r, (0, K.jsx)(`div`, {
            "data-testid": `preset-expiration-date`,
            className: `border-token-border-heavy bg-token-bg-primary text-token-text-primary flex h-10 w-full items-center rounded-xl border px-3 text-sm`,
            children: n
        })]
    }), t[1] = n, t[2] = i), i
}

function B(e) {
    "use forget";
    let t = (0, W.c)(11),
        {
            title: n,
            description: r
        } = e,
        i;
    t[0] === n ? i = t[1] : (i = (0, K.jsx)(`span`, {
        className: `text-token-text-primary font-medium`,
        children: n
    }), t[0] = n, t[1] = i);
    let a;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, K.jsx)(d, {
        className: `h-4 w-4 translate-y-[2px]`
    }), t[2] = a) : a = t[2];
    let o;
    t[3] === r ? o = t[4] : (o = (0, K.jsx)(`span`, {
        className: `text-token-text-tertiary inline-flex shrink-0 cursor-help items-center`,
        "aria-label": r,
        children: a
    }), t[3] = r, t[4] = o);
    let s;
    t[5] !== r || t[6] !== o ? (s = (0, K.jsx)(u, {
        label: r,
        side: `right`,
        align: `center`,
        sideOffset: 4,
        labelTextAlign: `left`,
        children: o
    }), t[5] = r, t[6] = o, t[7] = s) : s = t[7];
    let c;
    return t[8] !== i || t[9] !== s ? (c = (0, K.jsxs)(`div`, {
        className: `inline-flex items-center gap-2`,
        children: [i, s]
    }), t[8] = i, t[9] = s, t[10] = c) : c = t[10], c
}

function de({
    version: e,
    initiallyIncludesCodex: t,
    initiallyIncludesCodexSecurity: n,
    initiallyIncludesWorkspaceAgents: r
}) {
    return e === `v1` ? [`codex`] : [...r ? [`workspace_agents`] : [], ...t ? [`codex`] : [], ...n ? [`codex_security`] : []]
}

function fe(e) {
    "use forget";
    let t = (0, W.c)(9),
        {
            generatedAccessToken: n,
            useCases: r,
            version: i,
            onCopied: a
        } = e,
        o = i === `v1` ? J.generatedCodexAccessTokenDescription : r.includes(`codex_security`) ? J.generatedCodexSecurityAccessTokenDescription : r.includes(`codex`) && r.includes(`workspace_agents`) ? J.generatedWorkspaceAgentsAndCodexAccessTokenDescription : r.includes(`workspace_agents`) ? J.generatedWorkspaceAgentsAccessTokenDescription : J.generatedCodexV2AccessTokenDescription,
        s;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = {
        minimumVersion: q
    }, t[0] = s) : s = t[0];
    let c;
    t[1] === o ? c = t[2] : (c = (0, K.jsx)(h, {
        ...o,
        values: s
    }), t[1] = o, t[2] = c);
    let l;
    t[3] !== n || t[4] !== a ? (l = (0, K.jsx)(E, {
        value: n,
        onCopied: a
    }), t[3] = n, t[4] = a, t[5] = l) : l = t[5];
    let u;
    return t[6] !== c || t[7] !== l ? (u = (0, K.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [c, l]
    }), t[6] = c, t[7] = l, t[8] = u) : u = t[8], u
}

function V(e, t, n) {
    return n ? e.includes(t) ? e : [...e, t] : e.filter(e => e !== t)
}

function pe({
    expirationPreset: e,
    customExpirationDate: t,
    maxTtlSeconds: n
}) {
    return e ? e === `custom` ? he({
        name: ``,
        useCases: [`codex`],
        expirationPreset: e,
        customExpirationDate: t
    }, n) != null : he({
        name: ``,
        useCases: [`codex`],
        expirationPreset: e,
        customExpirationDate: ``
    }, n) != null : !1
}

function H(e) {
    let t = k(e);
    return t != null && t.getTime() >= j().getTime()
}

function U(e, t) {
    if (t == null) return !0;
    let n = k(e);
    return n != null && n.getTime() <= D(t).getTime()
}

function me(e) {
    return e instanceof i ? e.code === `invalid_user_auth_credential_ttl` || e.status === 422 && Array.isArray(e.detail) && e.detail.some(e => typeof e == `object` && !!e && `loc` in e && Array.isArray(e.loc) && e.loc[0] === `body` && e.loc[1] === `ttl`) : !1
}

function he(e, t) {
    let n;
    if (O(e.expirationPreset)) n = M[e.expirationPreset] * A;
    else if (e.expirationPreset === `none`) n = void 0;
    else if (e.expirationPreset !== `custom`) n = void 0;
    else {
        if (!H(e.customExpirationDate) || !U(e.customExpirationDate, t)) return;
        let r = k(e.customExpirationDate);
        if (r == null) return;
        let i = new Date,
            a = new Date(r.getFullYear(), r.getMonth(), r.getDate(), i.getHours(), i.getMinutes(), i.getSeconds(), i.getMilliseconds()).getTime();
        if (Number.isNaN(a)) return;
        n = Math.max(P, Math.ceil((a - Date.now()) / 1e3))
    }
    if (n != null && !(t != null && n > t)) return n
}
var W, G, K, q, ge, J, Y = e((() => {
    W = v(), T(), y(), b(), l(), ee(), n(), c(), a(), s(), w(), G = t(_()), g(), L(), K = p(), q = `0.138.0-alpha.6`, ge = 364 * A, J = m({
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
    Y as n, R as t
};
//# sourceMappingURL=7f7d91ee-fx8currwmpzuk5kb.js.map