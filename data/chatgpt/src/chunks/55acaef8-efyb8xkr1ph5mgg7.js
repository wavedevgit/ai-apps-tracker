import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $N as n,
    Ait as r,
    Cat as i,
    DF as a,
    Dst as o,
    EF as s,
    Int as c,
    Jit as l,
    M4 as u,
    N4 as d,
    Nit as ee,
    Nst as f,
    OF as p,
    Ost as m,
    P4 as h,
    QN as g,
    Rnt as _,
    Tat as v,
    XN as y,
    Xit as b,
    Yit as te,
    ZN as ne,
    bct as re,
    c7 as x,
    cP as S,
    eat as C,
    g6 as w,
    kit as T,
    l6 as E,
    l7 as D,
    oat as O,
    qit as k,
    rP as A,
    rat as j,
    s6 as M,
    sP as N,
    tP as P,
    u6 as F
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as I,
    Ln as ie,
    Nn as L,
    Rn as ae,
    Vn as oe,
    wn as se,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Jy as le,
    Yy as ue
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    Fx as de,
    Gx as fe,
    Kx as R,
    Wx as pe,
    aS as me,
    eS as he,
    uS as ge
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    a as _e,
    c as ve,
    l as ye,
    n as be,
    o as xe,
    s as Se,
    t as Ce,
    u as we
} from "./74a883a0-0bl4w620esk73bmz.js";
import {
    a as Te,
    i as Ee,
    n as De,
    o as Oe,
    r as ke,
    t as Ae
} from "./8d3260bc-np6v8cydoj4utapm.js";
import {
    n as z,
    t as je
} from "./4d183cec-7dhahwmkptbxzs6s.js";
import {
    n as B,
    t as Me
} from "./cb9c87a9-iwfsag0y6bn45f2n.js";

function Ne(e, t = !1) {
    return Pe(e ? `${W}?${new URLSearchParams({organization_id:e})}` : W, t)
}

function V(e) {
    let t = e.replace(/\/$/, ``);
    return t === `/rosalind/application` || t === Ie || t === `/rosalind-application/apply`
}

function H(e) {
    let t = e.replace(/\/$/, ``);
    return t === W || t === `${Ie}/status` || t === `/rosalind-application/status`
}

function Pe(e, t) {
    return t ? `${e}${e.includes(`?`)?`&`:`?`}embedded=codex` : e
}
var U, W, Fe, Ie, Le = e((() => {
    U = `/rosalind/application`, W = `${U}/status`, Fe = `${U}/submit`, Ie = `/r/b749fb02595e04c3007a54375f3f4374`
}));

function Re(e) {
    let t = window.location.origin,
        n = new URL(U, t);
    try {
        let r = new URL(e, t);
        r.origin === t && (V(r.pathname) || H(r.pathname)) && (n = r)
    } catch {}
    return n.searchParams.delete(`refresh_account`), n.searchParams.set(`account_switch`, `true`), n.toString()
}
async function ze(e, t, i) {
    let o = window.location,
        s = V(o.pathname) || H(o.pathname) ? `${o.pathname}${o.search}${o.hash}` : U;
    if (e?.startsWith(`/`) && !e.startsWith(`//`)) try {
        let t = new URL(e, o.origin);
        t.origin === o.origin && (V(t.pathname) || H(t.pathname)) && (s = `${t.pathname}${t.search}${t.hash}`)
    } catch {}
    let c = t?.trim().toLowerCase(),
        l = c ? P().find(e => e.email?.trim().toLowerCase() !== c && !!e.email && !!e.sessionToken && (i === void 0 || e.sessionToken === i.sessionToken && (i.workspaceAccountId === void 0 || e.workspaces.some(e => e.workspaceAccountId === i.workspaceAccountId)))) : void 0;
    if (i !== void 0 && l === void 0) throw Error(`Account switch target is unavailable.`);
    if (l !== void 0) {
        let e = new URL(Re(s));
        a();
        try {
            try {
                i?.workspaceAccountId === void 0 ? await S(l.sessionToken) : await S(l.sessionToken, i.workspaceAccountId)
            } catch (e) {
                throw N(l.sessionToken), e
            }
            d(e.toString())
        } catch (e) {
            throw p(), e
        }
        return
    }
    let ee = Date.now(),
        f = r(),
        h = `/auth/login?next=${encodeURIComponent(s)}`;
    k(), b(o.hostname, C.AccountSwitcher);
    let g = await O({
        reason: C.AccountSwitcher,
        source: `rosalind_access.switch_account`
    }, () => n({
        redirect: !1,
        callbackUrl: h
    }));
    m({
        authStateBeforeLogout: f ? `APP_ENTRY_AUTH_HISTORY_AUTH_STATE_LOGGED_IN` : `APP_ENTRY_AUTH_HISTORY_AUTH_STATE_LOGGED_OUT`,
        lastLogoutReason: `APP_ENTRY_AUTH_HISTORY_LOGOUT_REASON_ACCOUNT_SWITCH`
    }, ee), y(), await u(), window.location.assign(g.url)
}
var Be = e((() => {
    o(), T(), s(), A(), l(), te(), j(), g(), h(), ne(), Le()
}));

function Ve(e) {
    return e === document.activeElement
}

function He(e) {
    return !e
}

function Ue(e) {
    return e.isDeactivated !== !0
}

function We(e) {
    return e.workspaces.some(Ue)
}
var Ge, G, K, Ke, qe, Je, Ye, Xe = e((() => {
    Ge = se(), ue(), T(), we(), ve(), Oe(), xe(), Ee(), be(), De(), D(), G = t(oe()), ae(), je(), Me(), K = I(), Ke = e => {
        let t = e.fullName?.trim() || e.displayName?.trim();
        return t ? t.trim().split(/\s+/).filter(Boolean).slice(0, 2).map(e => e[0]?.toUpperCase() ?? ``).join(``) : e.email[0]?.toUpperCase() ?? `O`
    }, qe = e => e.ssoConnectionName ? z.switchWorkspaceWithSso : z.authenticateWorkspace, Je = e => {
        "use forget";
        let t = (0, Ge.c)(4),
            {
                children: n,
                href: r
            } = e,
            i;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, K.jsx)(Se, {
            "aria-hidden": `true`
        }), t[0] = i) : i = t[0];
        let a;
        return t[1] !== n || t[2] !== r ? (a = (0, K.jsxs)(`a`, {
            className: B.accountMenuItem,
            href: r,
            rel: `noopener noreferrer`,
            role: `menuitem`,
            target: `_blank`,
            children: [n, ` `, i]
        }), t[1] = n, t[2] = r, t[3] = a) : a = t[3], a
    }, Ye = e => {
        "use forget";
        let t = (0, Ge.c)(43),
            {
                user: n,
                workspaceAccounts: r,
                currentWorkspaceAccountId: i,
                accountSwitchingEnabled: a,
                savedAccountSwitchSessions: o,
                disabled: s,
                onBeforeSignOut: c,
                onSwitchAccount: l,
                onSwitchWorkspace: u
            } = e,
            d;
        t[0] === r ? d = t[1] : (d = r === void 0 ? [] : r, t[0] = r, t[1] = d);
        let f = d,
            p = a !== void 0 && a,
            m;
        t[2] === o ? m = t[3] : (m = o === void 0 ? [] : o, t[2] = o, t[3] = m);
        let h = m,
            g = s !== void 0 && s,
            _ = ce(),
            [v, y] = (0, G.useState)(!1),
            b = (0, G.useId)(),
            te = (0, G.useRef)(null),
            ne = (0, G.useRef)(null),
            re = (0, G.useRef)(null),
            S = (0, G.useRef)(null),
            C, w;
        t[4] === v ? (C = t[5], w = t[6]) : (C = () => {
            if (!v) return;
            let e = () => Array.from(re.current?.querySelectorAll(`[role="menuitem"]:not(:disabled)`) ?? []);
            if (S.current) {
                let t = e(),
                    n = S.current === `last` ? t.at(-1) : t[0];
                S.current = null, n?.focus()
            }
            let t = e => {
                    e.target instanceof Node && !te.current?.contains(e.target) && y(!1)
                },
                n = t => {
                    if (t.key === `Escape`) {
                        t.preventDefault(), y(!1), ne.current?.focus();
                        return
                    }
                    if (![`ArrowDown`, `ArrowUp`, `Home`, `End`].includes(t.key) || !te.current?.contains(document.activeElement)) return;
                    let n = e();
                    if (n.length === 0) return;
                    if (t.preventDefault(), t.key === `Home`) {
                        n[0]?.focus();
                        return
                    }
                    if (t.key === `End`) {
                        n.at(-1)?.focus();
                        return
                    }
                    let r = n.findIndex(Ve),
                        i = t.key === `ArrowDown` ? 1 : -1;
                    n[r === -1 ? i === 1 ? 0 : n.length - 1 : (r + i + n.length) % n.length]?.focus()
                };
            return document.addEventListener(`pointerdown`, t), document.addEventListener(`keydown`, n), () => {
                document.removeEventListener(`pointerdown`, t), document.removeEventListener(`keydown`, n)
            }
        }, w = [v], t[4] = v, t[5] = C, t[6] = w), (0, G.useEffect)(C, w);
        let T;
        t[7] === v ? T = t[8] : (T = e => {
            e.key !== `ArrowDown` && e.key !== `ArrowUp` || (e.preventDefault(), !v && (S.current = e.key === `ArrowUp` ? `last` : `first`, y(!0)))
        }, t[7] = v, t[8] = T);
        let E = T,
            D;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (D = e => {
            e.currentTarget.contains(e.relatedTarget) || y(!1)
        }, t[9] = D) : D = t[9];
        let O;
        t[10] !== _ || t[11] !== n.email ? (O = _.formatMessage(z.accountMenuLabel, {
            email: n.email
        }), t[10] = _, t[11] = n.email, t[12] = O) : O = t[12];
        let k;
        t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (k = x(`interactive-button`, B.accountChip), t[13] = k) : k = t[13];
        let A = v ? `open` : `closed`,
            j;
        t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (j = () => y(He), t[14] = j) : j = t[14];
        let M;
        t[15] === n ? M = t[16] : (M = Ke(n), t[15] = n, t[16] = M);
        let N;
        t[17] === M ? N = t[18] : (N = (0, K.jsx)(`span`, {
            "aria-hidden": `true`,
            className: B.avatar,
            children: M
        }), t[17] = M, t[18] = N);
        let P;
        t[19] !== g || t[20] !== b || t[21] !== E || t[22] !== v || t[23] !== O || t[24] !== A || t[25] !== N ? (P = (0, K.jsx)(`button`, {
            "aria-controls": b,
            "aria-expanded": v,
            "aria-haspopup": `menu`,
            "aria-label": O,
            className: k,
            "data-state": A,
            disabled: g,
            onClick: j,
            onKeyDown: E,
            ref: ne,
            type: `button`,
            children: N
        }), t[19] = g, t[20] = b, t[21] = E, t[22] = v, t[23] = O, t[24] = A, t[25] = N, t[26] = P) : P = t[26];
        let F;
        t[27] !== p || t[28] !== i || t[29] !== g || t[30] !== _ || t[31] !== b || t[32] !== c || t[33] !== l || t[34] !== u || t[35] !== v || t[36] !== h || t[37] !== n || t[38] !== f ? (F = v && (0, K.jsxs)(`div`, {
            "aria-label": _.formatMessage(z.accountMenuOptions),
            className: B.accountMenu,
            id: b,
            ref: re,
            role: `menu`,
            children: [(0, K.jsxs)(`div`, {
                className: B.accountMenuIdentity,
                children: [(0, K.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: B.accountMenuAvatar,
                    children: Ke(n)
                }), (0, K.jsxs)(`span`, {
                    className: B.accountMenuIdentityCopy,
                    children: [(0, K.jsx)(`span`, {
                        className: B.accountMenuName,
                        children: n.fullName?.trim() || n.displayName?.trim() || n.email
                    }), (0, K.jsx)(`span`, {
                        className: B.accountMenuEmail,
                        children: n.email
                    })]
                })]
            }), (0, K.jsx)(`div`, {
                className: B.accountMenuDivider,
                role: `separator`
            }), f.length > 0 && (0, K.jsxs)(K.Fragment, {
                children: [f.map(e => {
                    let t = e.id === i;
                    return (0, K.jsxs)(`button`, {
                        "aria-current": t ? `true` : void 0,
                        className: x(`interactive-button`, B.accountMenuItem),
                        disabled: g,
                        onClick: () => {
                            t || u(e)
                        },
                        role: `menuitem`,
                        type: `button`,
                        children: [(0, K.jsx)(`span`, {
                            "aria-hidden": `true`,
                            className: B.menuIcon,
                            children: e.canAccessWithCurrentSession ? (0, K.jsx)(ye, {}) : (0, K.jsx)(_e, {})
                        }), e.canAccessWithCurrentSession ? e.name?.trim() || e.organizationId || e.id : (0, K.jsx)(L, {
                            ...qe(e),
                            values: {
                                name: e.name?.trim() || e.organizationId || e.id
                            }
                        }), t && (0, K.jsx)(le, {
                            "aria-hidden": `true`,
                            className: `icon-sm`
                        })]
                    }, e.id)
                }), (0, K.jsx)(`div`, {
                    className: B.accountMenuDivider,
                    role: `separator`
                })]
            }), (0, K.jsxs)(`a`, {
                className: B.accountMenuItem,
                href: `/#settings`,
                role: `menuitem`,
                children: [(0, K.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: B.menuIcon,
                    children: (0, K.jsx)(Ce, {})
                }), (0, K.jsx)(L, {
                    ...z.settings
                })]
            }), (0, K.jsxs)(Je, {
                href: `https://help.openai.com/`,
                children: [(0, K.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: B.menuIcon,
                    children: (0, K.jsx)(Te, {})
                }), (0, K.jsx)(L, {
                    ...z.help
                })]
            }), (0, K.jsxs)(Je, {
                href: `https://openai.com/policies/privacy-policy/`,
                children: [(0, K.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: B.menuIcon,
                    children: (0, K.jsx)(_e, {})
                }), (0, K.jsx)(L, {
                    ...z.privacyPolicy
                })]
            }), (0, K.jsx)(`div`, {
                className: B.accountMenuDivider,
                role: `separator`
            }), p && h.map(e => (0, K.jsxs)(G.Fragment, {
                children: [(0, K.jsx)(`div`, {
                    className: B.accountMenuIdentity,
                    role: `presentation`,
                    children: (0, K.jsxs)(`span`, {
                        className: B.accountMenuIdentityCopy,
                        children: [e.name?.trim() && (0, K.jsx)(`span`, {
                            className: B.accountMenuName,
                            children: e.name
                        }), e.email?.trim() && (0, K.jsx)(`span`, {
                            className: B.accountMenuEmail,
                            children: e.email
                        })]
                    })
                }), e.workspaces.map(t => (0, K.jsxs)(`button`, {
                    "aria-label": _.formatMessage(z.switchWorkspace, {
                        name: [t.workspaceName?.trim() || t.workspaceAccountId, e.email?.trim() || e.name?.trim()].filter(Boolean).join(` · `)
                    }),
                    className: x(`interactive-button`, B.accountMenuItem),
                    disabled: g || t.isDeactivated === !0,
                    onClick: () => {
                        l(e, t.workspaceAccountId)
                    },
                    role: `menuitem`,
                    type: `button`,
                    children: [(0, K.jsx)(`span`, {
                        "aria-hidden": `true`,
                        className: B.menuIcon,
                        children: (0, K.jsx)(ye, {})
                    }), t.workspaceName?.trim() || e.name?.trim() || e.email?.trim() || t.workspaceAccountId]
                }, t.workspaceAccountId))]
            }, e.userId ?? e.email)), p && !h.some(We) && (0, K.jsxs)(`button`, {
                className: x(`interactive-button`, B.accountMenuItem),
                onClick: () => {
                    l()
                },
                role: `menuitem`,
                type: `button`,
                children: [(0, K.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: B.menuIcon,
                    children: (0, K.jsx)(Ae, {})
                }), (0, K.jsx)(L, {
                    ...z.switchAccount
                })]
            }), (0, K.jsxs)(`button`, {
                className: x(`interactive-button`, B.accountMenuItem, B.accountMenuSignOut),
                onClick: () => {
                    c?.(), ee({
                        source: `rosalind_access.account_menu`,
                        authHistoryReason: `APP_ENTRY_AUTH_HISTORY_LOGOUT_REASON_LOGOUT`
                    })
                },
                role: `menuitem`,
                type: `button`,
                children: [(0, K.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: B.menuIcon,
                    children: (0, K.jsx)(ke, {})
                }), (0, K.jsx)(L, {
                    ...z.signOut
                })]
            })]
        }), t[27] = p, t[28] = i, t[29] = g, t[30] = _, t[31] = b, t[32] = c, t[33] = l, t[34] = u, t[35] = v, t[36] = h, t[37] = n, t[38] = f, t[39] = F) : F = t[39];
        let I;
        return t[40] !== P || t[41] !== F ? (I = (0, K.jsxs)(`div`, {
            className: B.accountMenuContainer,
            onBlur: D,
            ref: te,
            children: [P, F]
        }), t[40] = P, t[41] = F, t[42] = I) : I = t[42], I
    }
}));

function Ze() {
    try {
        let e = globalThis.crypto?.randomUUID?.();
        return typeof e == `string` && lt.test(e) ? e : void 0
    } catch {
        return
    }
}

function Qe(e) {
    switch (e) {
        case `VALIDATION`:
        case `UNAVAILABLE`:
        case `AUTHENTICATION_REQUIRED`:
        case `ORGANIZATION_UNAVAILABLE`:
        case `APPLICATION_CONFLICT`:
        case `IDEMPOTENCY_CONFLICT`:
        case `APPLICATION_HISTORY_LIMIT`:
        case `APPLICATION_UNPROCESSABLE`:
        case `CANCELLATION_FORBIDDEN`:
        case `INVALID_RESPONSE`:
        case `REQUEST_FAILED`:
        case `SECURE_SUBMISSION_UNAVAILABLE`:
            return !0;
        default:
            return !1
    }
}

function $e(e) {
    switch (e) {
        case `REQUIRED`:
        case `INVALID_TYPE`:
        case `TOO_SMALL`:
        case `TOO_BIG`:
        case `INVALID_FORMAT`:
        case `INVALID_VALUE`:
        case `OTHER`:
            return !0;
        default:
            return !1
    }
}

function et(e) {
    let t = [];
    try {
        if (!Array.isArray(e)) return t;
        for (let n of e.slice(0, Object.keys(ct).length)) try {
            let {
                field: e,
                issue: r
            } = n;
            Object.prototype.hasOwnProperty.call(ct, e) && $e(r) && t.push({
                field: e,
                issue: r
            })
        } catch {}
    } catch {
        return t
    }
    return t
}

function tt(e) {
    return e instanceof Error ? e.name === `AbortError` ? `abort_error` : e.name === `TimeoutError` ? `timeout_error` : e instanceof SyntaxError ? `syntax_error` : e instanceof TypeError ? `type_error` : `error` : `unknown`
}

function nt(e) {
    switch (e) {
        case `invalid_application`:
        case `invalid_idempotency_key`:
        case `application_too_large`:
            return `VALIDATION`;
        case `backend_unavailable`:
        case `submissions_disabled`:
            return `UNAVAILABLE`;
        case `organization_unavailable`:
            return `ORGANIZATION_UNAVAILABLE`;
        case `application_conflict`:
            return `APPLICATION_CONFLICT`;
        case `idempotency_conflict`:
            return `IDEMPOTENCY_CONFLICT`;
        case `application_history_limit`:
            return `APPLICATION_HISTORY_LIMIT`;
        case `application_unprocessable`:
            return `APPLICATION_UNPROCESSABLE`;
        case `cancellation_forbidden`:
            return `CANCELLATION_FORBIDDEN`;
        case `invalid_backend_response`:
            return `INVALID_RESPONSE`;
        default:
            return `REQUEST_FAILED`
    }
}

function rt(e) {
    try {
        let {
            eligibility: t,
            reason: n,
            organizationSource: r,
            personaEnabled: a,
            organizationLookupPending: o,
            applicationHistoryPending: s,
            applicationHistoryUnavailable: c,
            submissionEnabled: l,
            workspaceMatchesSelected: u,
            workspaceRecoveryPending: d
        } = e;
        if (![`unknown`, `eligible`, `ineligible`].includes(t) || ![`ready`, `lookup_pending`, `lookup_unavailable`, `explicit_ineligible`, `workspace_auth_required`].includes(n) || ![`verified`, `account-preview`, `unavailable`].includes(r) || [a, o, s, c, l, u, d].some(e => typeof e != `boolean`)) return;
        i.addAction(`rosalind.application.organization.eligibility`, {
            eligibility: t,
            reason: n,
            organization_source: r,
            persona_enabled: a,
            organization_lookup_pending: o,
            application_history_pending: s,
            application_history_unavailable: c,
            submission_enabled: l,
            workspace_matches_selected: u,
            workspace_recovery_pending: d
        })
    } catch {}
}

function it(e) {
    try {
        let t = st[e];
        if (t === void 0) return;
        c.logStructuredEvent(`ChatgptWebRosalindApplicationStepViewed`, {
            step: t
        })
    } catch {
        return
    }
}

function at({
    surface: e,
    action: t,
    result: n,
    step: r,
    failureReason: a,
    submissionAttemptId: o,
    approvalAttemptId: s,
    validationDetails: l,
    httpStatus: u,
    error: d
}) {
    try {
        c.logStructuredEvent(`ChatgptWebRosalindApplicationAction`, {
            surface: `CHATGPT_WEB_ROSALIND_APPLICATION_SURFACE_${e}`,
            action: `CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_TYPE_${t}`,
            result: `CHATGPT_WEB_ROSALIND_APPLICATION_ACTION_RESULT_${n}`,
            step: r === void 0 ? void 0 : st[r],
            failureReason: a === void 0 ? void 0 : `CHATGPT_WEB_ROSALIND_APPLICATION_FAILURE_REASON_${a}`,
            submissionAttemptId: o,
            ...typeof s == `string` && lt.test(s) ? {
                approvalAttemptId: s
            } : {},
            validationDetails: l?.map(e => ({
                field: `CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_FIELD_${ct[e.field]}`,
                issue: `CHATGPT_WEB_ROSALIND_APPLICATION_VALIDATION_ISSUE_${e.issue}`
            }))
        })
    } catch {}
    if (!(n !== `BLOCKED` && n !== `FAILED` || t !== `SUBMIT` && t !== `SUBMISSION_CONFIRMATION`)) try {
        if (e !== `FORM` && e !== `STATUS` || !Qe(a)) return;
        let r = et(l);
        i.addAction(`rosalind.application.submit.failure`, {
            surface: e,
            action: t,
            result: n,
            failure_reason: a,
            ...typeof o == `string` && lt.test(o) ? {
                submission_attempt_id: o
            } : {},
            ...typeof u == `number` && Number.isInteger(u) && u >= 100 && u <= 599 ? {
                http_status: u
            } : {},
            ...d === void 0 ? {} : {
                error_type: tt(d)
            },
            ...r.length === 0 ? {} : {
                validation_details: r
            }
        })
    } catch {
        return
    }
}

function ot(e) {
    try {
        c.logStructuredEvent(`ChatgptWebRosalindApplicationStatusViewed`, {
            view: `CHATGPT_WEB_ROSALIND_APPLICATION_STATUS_VIEW_${e}`
        })
    } catch {
        return
    }
}
var st, ct, lt, ut = e((() => {
        _(), v(), st = [`CHATGPT_WEB_ROSALIND_APPLICATION_STEP_ORGANIZATION`, `CHATGPT_WEB_ROSALIND_APPLICATION_STEP_RESEARCH`, `CHATGPT_WEB_ROSALIND_APPLICATION_STEP_LOCATIONS_AND_SAFEGUARDS`, `CHATGPT_WEB_ROSALIND_APPLICATION_STEP_REVIEW`], ct = {
            organizationId: `ORGANIZATION_ID`,
            requestedResearchMode: `REQUESTED_RESEARCH_MODE`,
            products: `PRODUCTS`,
            researchPurpose: `RESEARCH_PURPOSE`,
            researchScopes: `RESEARCH_SCOPES`,
            primaryCountry: `PRIMARY_COUNTRY`,
            additionalLocations: `ADDITIONAL_LOCATIONS`,
            additionalCountries: `ADDITIONAL_COUNTRIES`,
            confirmResearchSafeguards: `CONFIRM_RESEARCH_SAFEGUARDS`,
            selectedSafeguards: `SELECTED_SAFEGUARDS`,
            otherSafeguardDetails: `OTHER_SAFEGUARD_DETAILS`,
            acceptAddendum: `ACCEPT_ADDENDUM`,
            certifyAccuracy: `CERTIFY_ACCURACY`,
            certifyAuthority: `CERTIFY_AUTHORITY`
        }, lt = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
    })),
    dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt = e((() => {
        dt = {
            AdditionalLocationsStatus: {
                enum: [`no`, `yes`, `unsure`],
                title: `AdditionalLocationsStatus`,
                type: `string`
            },
            RequestedAccessSurface: {
                enum: [`chatgpt-codex`, `internal-api`, `external-api`],
                title: `RequestedAccessSurface`,
                type: `string`
            },
            ResearchSafeguard: {
                enum: [`authorized-personnel`, `institutional-oversight`, `training-and-sops`, `secure-research-data`, `human-review`, `incident-reporting`, `dual-use-review`, `other`],
                title: `ResearchSafeguard`,
                type: `string`
            },
            ResearchScope: {
                enum: [`regulated-materials`, `pathogen-engineering`, `biological-toxins`, `high-containment`, `gene-drive`, `human-animal-infection`, `wet-lab`, `none`],
                title: `ResearchScope`,
                type: `string`
            },
            RosalindRequestedResearchMode: {
                description: `Research modes requiring an organization-scoped application.`,
                enum: [`research_non_zdr`, `research_zdr`],
                title: `RosalindRequestedResearchMode`,
                type: `string`
            }
        }, ft = `urn:openai:rosalind:application-form:gpt-rosalind-access-v2`, pt = `https://json-schema.org/draft/2020-12/schema`, mt = [{
            else: {
                not: {
                    required: [`additionalCountries`]
                }
            },
            if: {
                properties: {
                    additionalLocations: {
                        const: `yes`
                    }
                },
                required: [`additionalLocations`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        type: `array`
                    }
                },
                required: [`additionalCountries`]
            }
        }, {
            else: {
                not: {
                    required: [`otherSafeguardDetails`]
                }
            },
            if: {
                properties: {
                    selectedSafeguards: {
                        contains: {
                            const: `other`
                        }
                    }
                },
                required: [`selectedSafeguards`]
            },
            then: {
                properties: {
                    otherSafeguardDetails: {
                        type: `string`
                    }
                },
                required: [`otherSafeguardDetails`]
            }
        }, {
            if: {
                properties: {
                    researchScopes: {
                        contains: {
                            const: `none`
                        }
                    }
                },
                required: [`researchScopes`]
            },
            then: {
                properties: {
                    researchScopes: {
                        maxItems: 1
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `AD`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `AD`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `AE`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `AE`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `AF`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `AF`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `AG`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `AG`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `AI`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `AI`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `AL`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `AL`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `AM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `AM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `AO`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `AO`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `AQ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `AQ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `AR`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `AR`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `AS`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `AS`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `AT`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `AT`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `AU`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `AU`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `AW`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `AW`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `AX`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `AX`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `AZ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `AZ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BA`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BA`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BB`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BB`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BD`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BD`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BE`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BE`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BF`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BF`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BG`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BG`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BH`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BH`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BI`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BI`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BJ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BJ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BL`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BL`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BN`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BN`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BO`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BO`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BQ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BQ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BR`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BR`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BS`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BS`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BT`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BT`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BV`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BV`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BW`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BW`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BY`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BY`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `BZ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `BZ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CA`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CA`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CC`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CC`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CD`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CD`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CF`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CF`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CG`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CG`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CH`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CH`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CI`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CI`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CK`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CK`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CL`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CL`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CN`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CN`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CO`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CO`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CR`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CR`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CU`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CU`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CV`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CV`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CW`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CW`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CX`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CX`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CY`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CY`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `CZ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `CZ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `DE`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `DE`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `DJ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `DJ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `DK`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `DK`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `DM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `DM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `DO`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `DO`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `DZ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `DZ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `EC`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `EC`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `EE`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `EE`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `EG`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `EG`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `EH`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `EH`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `ER`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `ER`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `ES`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `ES`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `ET`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `ET`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `FI`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `FI`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `FJ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `FJ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `FK`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `FK`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `FM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `FM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `FO`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `FO`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `FR`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `FR`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GA`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GA`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GB`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GB`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GD`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GD`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GE`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GE`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GF`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GF`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GG`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GG`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GH`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GH`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GI`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GI`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GL`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GL`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GN`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GN`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GP`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GP`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GQ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GQ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GR`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GR`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GS`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GS`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GT`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GT`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GU`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GU`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GW`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GW`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `GY`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `GY`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `HK`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `HK`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `HM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `HM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `HN`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `HN`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `HR`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `HR`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `HT`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `HT`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `HU`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `HU`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `ID`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `ID`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `IE`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `IE`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `IL`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `IL`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `IM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `IM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `IN`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `IN`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `IO`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `IO`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `IQ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `IQ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `IR`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `IR`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `IS`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `IS`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `IT`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `IT`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `JE`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `JE`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `JM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `JM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `JO`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `JO`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `JP`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `JP`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `KE`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `KE`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `KG`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `KG`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `KH`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `KH`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `KI`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `KI`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `KM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `KM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `KN`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `KN`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `KP`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `KP`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `KR`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `KR`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `KW`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `KW`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `KY`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `KY`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `KZ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `KZ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `LA`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `LA`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `LB`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `LB`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `LC`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `LC`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `LI`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `LI`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `LK`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `LK`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `LR`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `LR`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `LS`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `LS`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `LT`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `LT`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `LU`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `LU`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `LV`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `LV`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `LY`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `LY`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MA`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MA`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MC`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MC`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MD`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MD`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `ME`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `ME`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MF`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MF`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MG`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MG`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MH`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MH`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MK`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MK`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `ML`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `ML`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MN`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MN`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MO`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MO`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MP`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MP`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MQ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MQ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MR`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MR`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MS`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MS`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MT`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MT`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MU`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MU`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MV`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MV`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MW`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MW`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MX`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MX`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MY`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MY`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `MZ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `MZ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `NA`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `NA`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `NC`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `NC`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `NE`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `NE`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `NF`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `NF`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `NG`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `NG`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `NI`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `NI`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `NL`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `NL`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `NO`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `NO`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `NP`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `NP`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `NR`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `NR`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `NU`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `NU`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `NZ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `NZ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `OM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `OM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `PA`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `PA`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `PE`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `PE`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `PF`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `PF`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `PG`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `PG`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `PH`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `PH`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `PK`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `PK`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `PL`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `PL`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `PM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `PM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `PN`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `PN`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `PR`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `PR`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `PS`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `PS`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `PT`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `PT`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `PW`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `PW`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `PY`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `PY`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `QA`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `QA`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `RE`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `RE`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `RO`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `RO`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `RS`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `RS`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `RU`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `RU`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `RW`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `RW`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SA`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SA`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SB`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SB`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SC`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SC`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SD`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SD`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SE`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SE`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SG`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SG`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SH`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SH`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SI`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SI`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SJ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SJ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SK`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SK`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SL`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SL`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SN`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SN`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SO`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SO`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SR`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SR`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SS`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SS`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `ST`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `ST`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SV`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SV`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SX`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SX`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SY`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SY`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `SZ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `SZ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `TC`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `TC`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `TD`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `TD`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `TF`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `TF`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `TG`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `TG`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `TH`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `TH`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `TJ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `TJ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `TK`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `TK`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `TL`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `TL`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `TM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `TM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `TN`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `TN`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `TO`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `TO`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `TR`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `TR`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `TT`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `TT`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `TV`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `TV`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `TW`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `TW`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `TZ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `TZ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `UA`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `UA`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `UG`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `UG`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `UM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `UM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `US`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `US`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `UY`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `UY`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `UZ`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `UZ`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `VA`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `VA`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `VC`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `VC`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `VE`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `VE`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `VG`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `VG`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `VI`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `VI`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `VN`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `VN`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `VU`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `VU`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `WF`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `WF`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `WS`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `WS`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `XK`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `XK`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `YE`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `YE`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `YT`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `YT`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `ZA`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `ZA`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `ZM`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `ZM`
                            }
                        }
                    }
                }
            }
        }, {
            if: {
                properties: {
                    primaryCountry: {
                        const: `ZW`
                    }
                },
                required: [`primaryCountry`, `additionalCountries`]
            },
            then: {
                properties: {
                    additionalCountries: {
                        not: {
                            contains: {
                                const: `ZW`
                            }
                        }
                    }
                }
            }
        }], ht = `A production-form submission whose identity still requires independent verification.`, gt = {
            acceptAddendum: {
                default: !1,
                title: `Acceptaddendum`,
                type: `boolean`,
                "x-ui": {
                    control: `hidden`,
                    order: 2,
                    step: 3
                }
            },
            additionalCountries: {
                anyOf: [{
                    items: {
                        enum: `AD.AE.AF.AG.AI.AL.AM.AO.AQ.AR.AS.AT.AU.AW.AX.AZ.BA.BB.BD.BE.BF.BG.BH.BI.BJ.BL.BM.BN.BO.BQ.BR.BS.BT.BV.BW.BY.BZ.CA.CC.CD.CF.CG.CH.CI.CK.CL.CM.CN.CO.CR.CU.CV.CW.CX.CY.CZ.DE.DJ.DK.DM.DO.DZ.EC.EE.EG.EH.ER.ES.ET.FI.FJ.FK.FM.FO.FR.GA.GB.GD.GE.GF.GG.GH.GI.GL.GM.GN.GP.GQ.GR.GS.GT.GU.GW.GY.HK.HM.HN.HR.HT.HU.ID.IE.IL.IM.IN.IO.IQ.IR.IS.IT.JE.JM.JO.JP.KE.KG.KH.KI.KM.KN.KP.KR.KW.KY.KZ.LA.LB.LC.LI.LK.LR.LS.LT.LU.LV.LY.MA.MC.MD.ME.MF.MG.MH.MK.ML.MM.MN.MO.MP.MQ.MR.MS.MT.MU.MV.MW.MX.MY.MZ.NA.NC.NE.NF.NG.NI.NL.NO.NP.NR.NU.NZ.OM.PA.PE.PF.PG.PH.PK.PL.PM.PN.PR.PS.PT.PW.PY.QA.RE.RO.RS.RU.RW.SA.SB.SC.SD.SE.SG.SH.SI.SJ.SK.SL.SM.SN.SO.SR.SS.ST.SV.SX.SY.SZ.TC.TD.TF.TG.TH.TJ.TK.TL.TM.TN.TO.TR.TT.TV.TW.TZ.UA.UG.UM.US.UY.UZ.VA.VC.VE.VG.VI.VN.VU.WF.WS.XK.YE.YT.ZA.ZM.ZW`.split(`.`),
                        maxLength: 2,
                        minLength: 2,
                        pattern: `^[A-Z]{2}$`,
                        type: `string`
                    },
                    maxItems: 250,
                    minItems: 1,
                    type: `array`,
                    uniqueItems: !0
                }, {
                    type: `null`
                }],
                default: null,
                title: `Additionalcountries`,
                "x-disallow-field-value": `primaryCountry`,
                "x-ui": {
                    control: `country-multiselect`,
                    order: 5,
                    step: 2,
                    visibleWhen: {
                        field: `additionalLocations`,
                        values: [`yes`]
                    }
                }
            },
            additionalLocations: {
                $ref: `#/$defs/AdditionalLocationsStatus`,
                "x-ui": {
                    control: `radio-group`,
                    order: 4,
                    step: 2
                }
            },
            certifyAccuracy: {
                const: !0,
                title: `Certifyaccuracy`,
                type: `boolean`,
                "x-ui": {
                    control: `checkbox`,
                    order: 0,
                    step: 3
                }
            },
            certifyAuthority: {
                const: !0,
                title: `Certifyauthority`,
                type: `boolean`,
                "x-ui": {
                    control: `checkbox`,
                    order: 1,
                    step: 3
                }
            },
            confirmResearchSafeguards: {
                const: !0,
                title: `Confirmresearchsafeguards`,
                type: `boolean`,
                "x-ui": {
                    control: `checkbox`,
                    order: 0,
                    step: 2
                }
            },
            organizationId: {
                maxLength: 128,
                minLength: 5,
                pattern: `^org[-_][A-Za-z0-9_-]+$`,
                title: `Organizationid`,
                type: `string`,
                "x-ui": {
                    control: `organization-select`,
                    order: 0,
                    step: 0
                }
            },
            otherSafeguardDetails: {
                anyOf: [{
                    maxLength: 4e3,
                    minLength: 1,
                    pattern: `^\\S(?:[\\s\\S]*\\S)?$(?![\\s\\S])`,
                    type: `string`
                }, {
                    type: `null`
                }],
                default: null,
                title: `Othersafeguarddetails`,
                "x-ui": {
                    control: `textarea`,
                    order: 2,
                    step: 2,
                    visibleWhen: {
                        contains: `other`,
                        field: `selectedSafeguards`
                    }
                }
            },
            primaryCountry: {
                enum: `AD.AE.AF.AG.AI.AL.AM.AO.AQ.AR.AS.AT.AU.AW.AX.AZ.BA.BB.BD.BE.BF.BG.BH.BI.BJ.BL.BM.BN.BO.BQ.BR.BS.BT.BV.BW.BY.BZ.CA.CC.CD.CF.CG.CH.CI.CK.CL.CM.CN.CO.CR.CU.CV.CW.CX.CY.CZ.DE.DJ.DK.DM.DO.DZ.EC.EE.EG.EH.ER.ES.ET.FI.FJ.FK.FM.FO.FR.GA.GB.GD.GE.GF.GG.GH.GI.GL.GM.GN.GP.GQ.GR.GS.GT.GU.GW.GY.HK.HM.HN.HR.HT.HU.ID.IE.IL.IM.IN.IO.IQ.IR.IS.IT.JE.JM.JO.JP.KE.KG.KH.KI.KM.KN.KP.KR.KW.KY.KZ.LA.LB.LC.LI.LK.LR.LS.LT.LU.LV.LY.MA.MC.MD.ME.MF.MG.MH.MK.ML.MM.MN.MO.MP.MQ.MR.MS.MT.MU.MV.MW.MX.MY.MZ.NA.NC.NE.NF.NG.NI.NL.NO.NP.NR.NU.NZ.OM.PA.PE.PF.PG.PH.PK.PL.PM.PN.PR.PS.PT.PW.PY.QA.RE.RO.RS.RU.RW.SA.SB.SC.SD.SE.SG.SH.SI.SJ.SK.SL.SM.SN.SO.SR.SS.ST.SV.SX.SY.SZ.TC.TD.TF.TG.TH.TJ.TK.TL.TM.TN.TO.TR.TT.TV.TW.TZ.UA.UG.UM.US.UY.UZ.VA.VC.VE.VG.VI.VN.VU.WF.WS.XK.YE.YT.ZA.ZM.ZW`.split(`.`),
                maxLength: 2,
                minLength: 2,
                pattern: `^[A-Z]{2}$`,
                title: `Primarycountry`,
                type: `string`,
                "x-ui": {
                    control: `country-select`,
                    order: 3,
                    step: 2
                }
            },
            products: {
                items: {
                    $ref: `#/$defs/RequestedAccessSurface`
                },
                maxItems: 3,
                minItems: 1,
                title: `Products`,
                type: `array`,
                uniqueItems: !0,
                "x-ui": {
                    control: `checkbox-group`,
                    order: 0,
                    step: 1
                }
            },
            requestedResearchMode: {
                $ref: `#/$defs/RosalindRequestedResearchMode`,
                default: `research_non_zdr`,
                "x-ui": {
                    control: `radio-group`,
                    order: 1,
                    step: 0
                }
            },
            researchPurpose: {
                maxLength: 1e4,
                minLength: 40,
                pattern: `^\\S(?:[\\s\\S]*\\S)?$(?![\\s\\S])`,
                title: `Researchpurpose`,
                type: `string`,
                "x-ui": {
                    control: `textarea`,
                    order: 1,
                    step: 1
                }
            },
            researchScopes: {
                items: {
                    $ref: `#/$defs/ResearchScope`
                },
                maxItems: 5,
                minItems: 1,
                title: `Researchscopes`,
                type: `array`,
                uniqueItems: !0,
                "x-ui": {
                    control: `checkbox-group`,
                    order: 2,
                    step: 1
                }
            },
            selectedSafeguards: {
                items: {
                    $ref: `#/$defs/ResearchSafeguard`
                },
                maxItems: 8,
                title: `Selectedsafeguards`,
                type: `array`,
                uniqueItems: !0,
                "x-ui": {
                    control: `checkbox-group`,
                    order: 1,
                    step: 2
                }
            }
        }, _t = [`products`, `researchPurpose`, `researchScopes`, `primaryCountry`, `additionalLocations`, `confirmResearchSafeguards`, `certifyAccuracy`, `certifyAuthority`, `organizationId`], vt = `CreateApplicationRequest`, yt = `object`, bt = {
            $defs: dt,
            $id: ft,
            $schema: pt,
            additionalProperties: !1,
            allOf: mt,
            description: ht,
            properties: gt,
            required: _t,
            title: vt,
            type: yt,
            "x-form-schema-version": `gpt-rosalind-access-v2`,
            "x-ui": {
                steps: [{
                    id: `organization`,
                    order: 0,
                    title: `Organization`
                }, {
                    id: `research`,
                    order: 1,
                    title: `Research`
                }, {
                    id: `locations_and_safeguards`,
                    order: 2,
                    title: `Locations and safeguards`
                }, {
                    id: `review_and_terms`,
                    order: 3,
                    title: `Review and terms`
                }]
            }
        }
    }));

function St(e) {
    return typeof e == `string` && Mt.has(e)
}

function Ct(e, t) {
    return e === `rosalind-provisioning-no-separate-charge-v1` && t.pricingVersion === `rosalind-provisioning-agreement-pricing-v1` && t.pricingStatus === `final` && t.separateCharge === !0
}

function wt(e) {
    return typeof e == `string` && Bt.has(e)
}

function Tt(e, t, n) {
    return ge().refine(n => {
        let r = Array.from(n).length;
        return r >= e && r <= t
    }).regex(new RegExp(n))
}

function Et(e, t, n) {
    return pe(R(t => typeof t == `string` && e.has(t))).min(t).max(n).refine(e => new Set(e).size === e.length)
}

function Dt(e) {
    switch (e) {
        case `invalid_type`:
            return `INVALID_TYPE`;
        case `too_small`:
            return `TOO_SMALL`;
        case `too_big`:
            return `TOO_BIG`;
        case `invalid_format`:
            return `INVALID_FORMAT`;
        case `invalid_value`:
        case `custom`:
            return `INVALID_VALUE`;
        default:
            return `OTHER`
    }
}

function Ot(e) {
    let t = Gt.safeParse(e);
    if (t.success) return [];
    let n = [],
        r = new Set;
    for (let i of t.error.issues) {
        let t = i.path[0];
        if (typeof t != `string` || !Kt.has(t)) continue;
        let a = i.code === `invalid_type` && typeof e == `object` && e && !Object.prototype.hasOwnProperty.call(e, t) ? `REQUIRED` : Dt(i.code),
            o = `${t}:${a}`;
        if (!r.has(o) && (r.add(o), n.push({
                field: t,
                issue: a
            }), n.length >= Kt.size)) break
    }
    return n
}

function kt(e) {
    return Gt.safeParse(e).success
}
var q, At, jt, Mt, J, Y, X, Z, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt = e((() => {
        if (de(), xt(), q = bt, At = q[`x-form-schema-version`], jt = [`submitted`, `in_progress`, `action_required`, `approved`, `access_granted`, `denied`, `revoked`], Mt = new Set(jt), J = q.properties, Y = J.additionalCountries.anyOf.find(e => e.type === `array`), X = J.otherSafeguardDetails.anyOf.find(e => e.type === `string`), !Y?.items || !J.primaryCountry.enum || !Y.items.enum || J.primaryCountry.enum.length !== Y.items.enum.length || J.primaryCountry.enum.some((e, t) => e !== Y.items.enum[t]) || Y.minItems === void 0 || Y.maxItems === void 0 || !X || X.minLength === void 0 || X.maxLength === void 0) throw Error(`The canonical Rosalind application schema is invalid.`);
        Z = {
            organizationId: {
                min: J.organizationId.minLength,
                max: J.organizationId.maxLength
            },
            researchPurpose: {
                min: J.researchPurpose.minLength,
                max: J.researchPurpose.maxLength
            },
            primaryCountry: {
                min: J.primaryCountry.minLength,
                max: J.primaryCountry.maxLength
            },
            additionalCountries: {
                min: Y.minItems,
                max: Y.maxItems
            },
            otherSafeguardDetails: {
                min: X.minLength,
                max: X.maxLength
            }
        }, Nt = q.$defs.RequestedAccessSurface.enum, Pt = q.$defs.RosalindRequestedResearchMode.enum, Ft = q.$defs.ResearchScope.enum, It = q.$defs.ResearchSafeguard.enum, Lt = q.$defs.AdditionalLocationsStatus.enum, Rt = J.primaryCountry.enum, zt = new Set(Nt), Bt = new Set(Pt), Vt = new Set(Ft), Ht = new Set(It), Ut = new Set(Lt), Wt = new Set(Rt), Gt = me({
            organizationId: ge().min(Z.organizationId.min).max(Z.organizationId.max).regex(new RegExp(J.organizationId.pattern)),
            requestedResearchMode: R(wt),
            products: Et(zt, J.products.minItems, J.products.maxItems),
            researchPurpose: Tt(Z.researchPurpose.min, Z.researchPurpose.max, J.researchPurpose.pattern),
            researchScopes: Et(Vt, J.researchScopes.minItems, J.researchScopes.maxItems),
            primaryCountry: R(e => typeof e == `string` && Wt.has(e)),
            additionalLocations: R(e => typeof e == `string` && Ut.has(e)),
            additionalCountries: Et(Wt, Z.additionalCountries.min, Z.additionalCountries.max).optional(),
            confirmResearchSafeguards: he(!0),
            selectedSafeguards: Et(Ht, 0, J.selectedSafeguards.maxItems).default([]),
            otherSafeguardDetails: Tt(Z.otherSafeguardDetails.min, Z.otherSafeguardDetails.max, X.pattern).optional(),
            acceptAddendum: fe().optional(),
            certifyAccuracy: he(!0),
            certifyAuthority: he(!0)
        }).strict().superRefine((e, t) => {
            e.researchScopes.includes(`none`) && e.researchScopes.length !== 1 && t.addIssue({
                code: `custom`,
                message: `'None' cannot be combined with another research scope.`,
                path: [`researchScopes`]
            }), e.additionalLocations === `yes` ? e.additionalCountries ? e.additionalCountries.includes(e.primaryCountry) && t.addIssue({
                code: `custom`,
                message: `The primary country cannot also be an additional country.`,
                path: [`additionalCountries`]
            }) : t.addIssue({
                code: `custom`,
                message: `Select at least one additional access country.`,
                path: [`additionalCountries`]
            }) : e.additionalCountries !== void 0 && t.addIssue({
                code: `custom`,
                message: `Additional countries must be omitted when not applicable.`,
                path: [`additionalCountries`]
            }), e.selectedSafeguards.includes(`other`) ? e.otherSafeguardDetails || t.addIssue({
                code: `custom`,
                message: `Describe the other research safeguards currently in place.`,
                path: [`otherSafeguardDetails`]
            }) : e.otherSafeguardDetails !== void 0 && t.addIssue({
                code: `custom`,
                message: `Other safeguard details must be omitted when not applicable.`,
                path: [`otherSafeguardDetails`]
            })
        }), Kt = new Set(Object.keys(J))
    })),
    Jt, Q, Yt, Xt, Zt, Qt = e((() => {
        Jt = se(), ae(), je(), Me(), Q = I(), Yt = `https://help.openai.com/en/articles/11481834-chatgpt-rate-card-business-enterpriseedu-credit-based-pricing`, Xt = `https://developers.openai.com/api/docs/pricing?latest-pricing=standard`, Zt = e => {
            "use forget";
            let t = (0, Jt.c)(4),
                {
                    message: n
                } = e,
                r;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsx)(`a`, {
                className: B.inlineLegalLink,
                href: Yt,
                rel: `noopener noreferrer`,
                target: `_blank`,
                children: (0, Q.jsx)(L, {
                    ...z.pricingChatgptRateCardLink
                })
            }), t[0] = r) : r = t[0];
            let i;
            t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (i = {
                chatgptRateCard: r,
                apiPricing: (0, Q.jsx)(`a`, {
                    className: B.inlineLegalLink,
                    href: Xt,
                    rel: `noopener noreferrer`,
                    target: `_blank`,
                    children: (0, Q.jsx)(L, {
                        ...z.pricingApiLink
                    })
                })
            }, t[1] = i) : i = t[1];
            let a;
            return t[2] === n ? a = t[3] : (a = (0, Q.jsx)(L, {
                ...n,
                values: i
            }), t[2] = n, t[3] = a), a
        }
    }));

function $t(e) {
    return Object.hasOwn(tn, e)
}

function en(e) {
    if (e.state !== `action_required` || e.actionOwner !== `applicant` || e.requiredAction === void 0 || e.requiredAction === `upload_verification_documents`) return;
    if (!$t(e.requiredAction)) return {
        title: $.genericActionTitle,
        description: $.genericActionDescription,
        descriptionValues: {
            action: e.requiredAction.replaceAll(`_`, ` `)
        }
    };
    let t = tn[e.requiredAction];
    if (!(e.requiredAction === `sign_enterprise_zdr_agreement` && e.requestedResearchMode !== `research_zdr`)) return e.requiredAction === `provide_additional_information` ? e.canCancel ? {
        ...t,
        buttonLabel: $.additionalInformationButton
    } : {
        ...t,
        description: $.additionalInformationUnauthorizedDescription
    } : e.requiredAction === `cancel_and_reapply_persona_verification` ? e.canCancel ? {
        ...t,
        buttonLabel: $.expiredVerificationButton,
        href: U
    } : {
        ...t,
        description: $.expiredVerificationUnauthorizedDescription
    } : t
}
var $, tn, nn = e((() => {
    ae(), Le(), $ = ie({
        expiredVerificationTitle: {
            id: `chatgpt.rosalind_access.tracking.action.expired_verification.title`,
            defaultMessage: `Your organization verification expired`
        },
        expiredVerificationDescription: {
            id: `chatgpt.rosalind_access.tracking.action.expired_verification.description`,
            defaultMessage: `Cancel this application and start a new one to complete your organization's business verification.`
        },
        expiredVerificationUnauthorizedDescription: {
            id: `chatgpt.rosalind_access.tracking.action.expired_verification.description.unauthorized`,
            defaultMessage: `Your organization's verification expired. Ask an authorized organization administrator to cancel this application and submit a new one.`
        },
        expiredVerificationButton: {
            id: `chatgpt.rosalind_access.tracking.action.expired_verification.button.label`,
            defaultMessage: `Review application options`
        },
        organizationVerificationTitle: {
            id: `chatgpt.rosalind_access.tracking.action.organization_verification.title`,
            defaultMessage: `Complete Persona verification`
        },
        organizationVerificationDescription: {
            id: `chatgpt.rosalind_access.tracking.action.organization_verification.email.description`,
            defaultMessage: `Please go to your email to continue with Persona.`
        },
        additionalInformationTitle: {
            id: `chatgpt.rosalind_access.tracking.action.additional_information.title`,
            defaultMessage: `Complete application information`
        },
        additionalInformationDescription: {
            id: `chatgpt.rosalind_access.tracking.action.additional_information.description`,
            defaultMessage: `Some application information is missing or incomplete. Cancel this application, then submit a new application with the complete information.`
        },
        additionalInformationUnauthorizedDescription: {
            id: `chatgpt.rosalind_access.tracking.action.additional_information.description.unauthorized`,
            defaultMessage: `Some application information is missing or incomplete. Ask an authorized organization member to cancel this application and submit a new one.`
        },
        additionalInformationButton: {
            id: `chatgpt.rosalind_access.tracking.action.additional_information.button.cancel_and_reapply.label`,
            defaultMessage: `Cancel and reapply`
        },
        enterpriseAgreementTitle: {
            id: `chatgpt.rosalind_access.tracking.action.enterprise_agreement.enhanced_privacy.title`,
            defaultMessage: `Enterprise agreement required for Enhanced Privacy`
        },
        enterpriseAgreementDescription: {
            id: `chatgpt.rosalind_access.tracking.action.enterprise_agreement.enhanced_privacy.description`,
            defaultMessage: `Your organization requested Enhanced Privacy. An Enterprise agreement must be signed and OpenAI approval is required before access can be granted.`
        },
        enterpriseAgreementButton: {
            id: `chatgpt.rosalind_access.tracking.action.enterprise_agreement.button.label`,
            defaultMessage: `Review and sign forms`
        },
        genericActionTitle: {
            id: `chatgpt.rosalind_access.tracking.action.other.title`,
            defaultMessage: `Additional action required`
        },
        genericActionDescription: {
            id: `chatgpt.rosalind_access.tracking.action.other.description`,
            defaultMessage: `Next step: {action}`
        }
    }), tn = {
        cancel_and_reapply_persona_verification: {
            title: $.expiredVerificationTitle,
            description: $.expiredVerificationDescription
        },
        complete_organization_verification: {
            title: $.organizationVerificationTitle,
            description: $.organizationVerificationDescription
        },
        provide_organization_verification: {
            title: $.organizationVerificationTitle,
            description: $.organizationVerificationDescription
        },
        provide_additional_information: {
            title: $.additionalInformationTitle,
            description: $.additionalInformationDescription
        },
        sign_enterprise_zdr_agreement: {
            title: $.enterpriseAgreementTitle,
            description: $.enterpriseAgreementDescription,
            buttonLabel: $.enterpriseAgreementButton
        }
    }
}));

function rn(e) {
    return w(e) || F(e) || E(e) && e !== f.K12
}

function an(e) {
    let t = e.organizationId;
    if (t === void 0 || !on.test(t) || !sn.test(e.id) || e.isPersonalAccount() || e.isDeactivated() || !e.isOwnerOfAccount() && !e.isAdminOfAccount() && !e.isStandardUserOfAccount() || !rn(e.planType)) return;
    let n = e.name?.trim();
    return {
        id: t,
        name: n && n.length <= 240 ? n : t,
        canAccessWithCurrentSession: e.canAccessWithCurrentSession
    }
}
var on, sn, cn = e((() => {
    re(), M(), on = /^org[-_][A-Za-z0-9_-]+$/, sn = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
}));
export {
    ze as A, ot as C, Xe as D, Ye as E, Le as F, V as I, H as L, W as M, Fe as N, Re as O, Ne as P, Pe as R, at as S, rt as T, St as _, Zt as a, Ze as b, Z as c, Nt as d, It as f, Ct as g, qt as h, en as i, U as j, Be as k, Rt as l, Ot as m, cn as n, Qt as o, Ft as p, nn as r, Lt as s, an as t, At as u, kt as v, it as w, ut as x, nt as y
};
//# sourceMappingURL=55acaef8-efyb8xkr1ph5mgg7.js.map