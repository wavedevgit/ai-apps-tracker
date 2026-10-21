import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    Bat as r,
    C4 as i,
    Cw as a,
    F7 as o,
    JT as s,
    Mz as c,
    Pat as l,
    R1 as u,
    S4 as d,
    Tw as f,
    YT as p,
    aB as ee,
    dW as te,
    fW as m,
    i0 as h,
    jz as g,
    lW as _,
    oB as ne,
    q1 as re,
    r0 as v,
    uW as ie,
    z7 as y
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as b,
    Ht as x,
    N as ae,
    Nn as S,
    O as oe,
    Q as C,
    Rn as w,
    Vn as T,
    Vt as se,
    p as ce,
    s as E,
    wn as D
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Blt as le,
    Hlt as O
} from "./conversation-small-nmt18uiom3b14vca.js";

function k(e) {
    return Math.max(fe - (Date.now() - e), 0)
}
async function A(e, t) {
    let n;
    try {
        return await Promise.race([e, new Promise((e, r) => {
            n = setTimeout(() => r(Error(j)), t)
        })])
    } finally {
        n != null && clearTimeout(n)
    }
}
async function ue(e, t, r = re) {
    let i = Date.now();
    for (;;) {
        let a = k(i);
        if (a === 0) throw Error(j);
        try {
            await A(e.refetchQueries({
                queryKey: n().queryKey
            }), a)
        } catch {}
        let o = k(i);
        if (o === 0) throw Error(j);
        let {
            updatedAccount: s
        } = await A(r(e, t), o);
        if (s) return;
        let c = k(i);
        if (c === 0) throw Error(j);
        await new Promise(e => setTimeout(e, Math.min(de, c)))
    }
}
var de, fe, j, M = e((() => {
    u(), de = 500, fe = 1e4, j = `Timed out waiting for the accepted Science workspace.`
}));

function pe(e) {
    switch (e) {
        case `pending`:
            return `pending`;
        case `verified`:
            return `verified`;
        case `error`:
            return `error`;
        case `none`:
        case null:
        case void 0:
            return `needs-verification`
    }
}

function me() {
    d()
}

function he() {
    return h({
        fallbackScreenHint: `login`,
        useFallbackScreenHint: !0,
        callbackUrl: window.location.href,
        skipLoginModal: !0
    })
}

function ge() {}

function N(e) {
    return (0, I.jsx)(`strong`, {
        className: `font-semibold`,
        children: e
    })
}
var P, F, I, L, R, _e, z, B = e((() => {
        P = D(), p(), m(), ne(), _(), f(), O(), c(), M(), v(), r(), i(), y(), E(), F = t(T()), w(), C(), I = b(), L = () => {
            "use forget";
            let e = (0, P.c)(124),
                t = ae(),
                [n] = se(),
                r;
            e[0] === n ? r = e[1] : (r = n.get(`aiId`), e[0] = n, e[1] = r);
            let i = r,
                a = (0, F.useRef)(0),
                [c, u] = (0, F.useState)(!1),
                [d, f] = (0, F.useState)(!1),
                [p, ee] = (0, F.useState)(!1),
                [m, h] = (0, F.useState)(!1),
                [_, ne] = (0, F.useState)(null),
                [re, v] = (0, F.useState)(null),
                y = i != null,
                b, x;
            e[2] === i ? (b = e[3], x = e[4]) : (b = [`sophia-invite-status`, i], x = () => o.safePost(`/sophia/refresh_invite_status`, {
                requestBody: {
                    account_invite_id: i ?? ``
                }
            }), e[2] = i, e[3] = b, e[4] = x);
            let C;
            e[5] !== y || e[6] !== b || e[7] !== x ? (C = {
                enabled: y,
                queryKey: b,
                queryFn: x,
                retry: !1,
                refetchOnWindowFocus: `always`
            }, e[5] = y, e[6] = b, e[7] = x, e[8] = C) : C = e[8];
            let w = oe(C),
                T = w.data?.metadata,
                E = T?.verification_status,
                D;
            e[9] === E ? D = e[10] : (D = pe(E), e[9] = E, e[10] = D);
            let O = D,
                k = T?.verification_error_reason === `email_mismatch`,
                A = T?.eligibility_source ?? null,
                de = A != null,
                fe = T?.workspace_membership_error_code === `sci_workspace_membership_conflict`,
                j;
            e[11] === i ? j = e[12] : (j = e => {
                let {
                    verificationType: t
                } = e;
                return o.safePost(`/sophia/create_verification`, {
                    requestBody: {
                        redirect_url: window.location.href,
                        ...i == null ? {} : {
                            account_invite_id: i
                        },
                        verification_type: t
                    }
                })
            }, e[11] = i, e[12] = j);
            let M;
            e[13] === w ? M = e[14] : (M = (e, t) => {
                let {
                    requestId: n
                } = t;
                if (n === a.current) {
                    if (u(!1), e.verification_status === `verified`) {
                        v(null), ee(!1), w.refetch();
                        return
                    }
                    if (e.verification_url != null) {
                        v({
                            verificationId: e.verification_id,
                            verificationUrl: e.verification_url
                        });
                        return
                    }
                    u(!0)
                }
            }, e[13] = w, e[14] = M);
            let N;
            e[15] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (e, t) => {
                let {
                    requestId: n
                } = t;
                n === a.current && u(!0)
            }, e[15] = N) : N = e[15];
            let L;
            e[16] !== j || e[17] !== M ? (L = {
                mutationFn: j,
                onSuccess: M,
                onError: N
            }, e[16] = j, e[17] = M, e[18] = L) : L = e[18];
            let z = ce(L),
                B;
            e[19] !== i || e[20] !== t ? (B = async () => {
                h(!1);
                let {
                    workspace_id: e
                } = await o.safePost(`/sophia/accept_invite`, {
                    requestBody: {
                        account_invite_id: i ?? ``
                    }
                });
                if (h(!0), e != null) try {
                    await ue(t, e)
                } catch {}
            }, e[19] = i, e[20] = t, e[21] = B) : B = e[21];
            let V;
            e[22] === Symbol.for(`react.memo_cache_sentinel`) ? (V = () => {
                h(!1)
            }, e[22] = V) : V = e[22];
            let H;
            e[23] === B ? H = e[24] : (H = {
                mutationFn: B,
                onSuccess: me,
                onError: V
            }, e[23] = B, e[24] = H);
            let U = ce(H),
                W = z.isPending,
                G = U.isPending || m,
                ve;
            e[25] !== U.error || e[26] !== U.isError ? (ve = U.isError ? U.error instanceof l && U.error.code === `sci_workspace_membership_conflict` ? (0, I.jsx)(S, {
                id: `chatgpt.sophia.invite.accept_error.workspace_membership`,
                defaultMessage: `You already belong to an Academic Researcher workspace.`
            }) : (0, I.jsx)(S, {
                id: `chatgpt.sophia.invite.accept_error.description`,
                defaultMessage: `We couldn’t accept your invite. Please try again.`
            }) : null, e[25] = U.error, e[26] = U.isError, e[27] = ve) : ve = e[27];
            let K = ve,
                ye;
            e[28] === m ? ye = e[29] : (ye = m ? (0, I.jsx)(S, {
                id: `chatgpt.sophia.invite.workspace_switch.status`,
                defaultMessage: `Your invite was accepted. We’re switching you to the workspace. Please keep this page open. This should only take a moment.`
            }) : null, e[28] = m, e[29] = ye);
            let q = ye,
                be;
            e[30] === Symbol.for(`react.memo_cache_sentinel`) ? (be = () => {
                ee(!0)
            }, e[30] = be) : be = e[30];
            let xe = be,
                Se;
            e[31] === w ? Se = e[32] : (Se = async () => {
                let e = await w.refetch();
                f(e.data?.metadata?.verification_status === `pending`)
            }, e[31] = w, e[32] = Se);
            let Ce = Se,
                we;
            e[33] === z ? we = e[34] : (we = e => {
                let t = a.current += 1;
                ne(e), v(null), u(!1), z.mutate({
                    requestId: t,
                    verificationType: e
                })
            }, e[33] = z, e[34] = we);
            let Te = we,
                Ee;
            e[35] === Symbol.for(`react.memo_cache_sentinel`) ? (Ee = e => {
                a.current += 1, ne(e), v(null), u(!1)
            }, e[35] = Ee) : Ee = e[35];
            let De = Ee,
                Oe;
            e[36] === Symbol.for(`react.memo_cache_sentinel`) ? (Oe = () => {
                a.current += 1, ne(null), v(null), u(!1)
            }, e[36] = Oe) : Oe = e[36];
            let ke = Oe,
                J;
            if (i == null) {
                let t;
                e[37] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(R, {
                    title: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.missing_id.title`,
                        defaultMessage: `This invite link is incomplete`
                    }),
                    description: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.missing_id.description`,
                        defaultMessage: `Open the link from your invitation email and try again.`
                    })
                }), e[37] = t) : t = e[37], J = t
            } else if (w.isPending) {
                let t;
                e[38] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(R, {
                    icon: (0, I.jsx)(g, {
                        className: `icon-lg text-token-text-secondary`
                    }),
                    title: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.loading.title`,
                        defaultMessage: `Checking your invitation`
                    }),
                    description: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.loading.description`,
                        defaultMessage: `This should only take a moment.`
                    })
                }), e[38] = t) : t = e[38], J = t
            } else if (w.isError) {
                let t, n;
                e[39] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.load_error.title`,
                    defaultMessage: `We couldn’t check your invitation`
                }), n = (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.load_error.description`,
                    defaultMessage: `Try checking again.`
                }), e[39] = t, e[40] = n) : (t = e[39], n = e[40]);
                let r;
                e[41] === w ? r = e[42] : (r = () => {
                    w.refetch()
                }, e[41] = w, e[42] = r);
                let i;
                e[43] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.load_error.button.retry`,
                    defaultMessage: `Try again`
                }), e[43] = i) : i = e[43];
                let a;
                e[44] === r ? a = e[45] : (a = (0, I.jsx)(R, {
                    title: t,
                    description: n,
                    action: (0, I.jsx)(s, {
                        color: `primary`,
                        type: `button`,
                        onClick: r,
                        children: i
                    })
                }), e[44] = r, e[45] = a), J = a
            } else if (T?.invite_status === `not_found`) {
                let t;
                e[46] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(R, {
                    title: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.not_found.title`,
                        defaultMessage: `Invite not found`
                    }),
                    description: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.not_found.description`,
                        defaultMessage: `Ask the workspace owner to send you a new invitation.`
                    })
                }), e[46] = t) : t = e[46], J = t
            } else if (T?.invite_status === `wrong_user`) {
                let t, n, r;
                e[47] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(ie, {
                    "aria-hidden": !0,
                    className: `icon-lg text-token-icon-status-warning`
                }), n = (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.wrong_user.title`,
                    defaultMessage: `Sign in with the invited email`
                }), r = (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.wrong_user.description`,
                    defaultMessage: `You’re signed in with a different email address. Sign in to ChatGPT with the email address this invitation was sent to, then try again.`
                }), e[47] = t, e[48] = n, e[49] = r) : (t = e[47], n = e[48], r = e[49]);
                let i;
                e[50] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, I.jsx)(R, {
                    icon: t,
                    title: n,
                    description: r,
                    action: (0, I.jsx)(s, {
                        color: `primary`,
                        type: `button`,
                        onClick: he,
                        children: (0, I.jsx)(S, {
                            id: `chatgpt.sophia.invite.wrong_user.button.switch_account`,
                            defaultMessage: `Switch account`
                        })
                    })
                }), e[50] = i) : i = e[50], J = i
            } else if (T?.invite_status === `expired`) {
                let t;
                e[51] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(R, {
                    title: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.expired.title`,
                        defaultMessage: `This invite has expired`
                    }),
                    description: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.expired.description`,
                        defaultMessage: `Ask the workspace owner to send you a new invitation.`
                    })
                }), e[51] = t) : t = e[51], J = t
            } else if (T?.invite_status === `accepted`) {
                let t, n;
                e[52] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.accepted.title`,
                    defaultMessage: `You’ve already accepted this invite`
                }), n = (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.accepted.description`,
                    defaultMessage: `You can continue to ChatGPT.`
                }), e[52] = t, e[53] = n) : (t = e[52], n = e[53]);
                let r;
                e[54] === U ? r = e[55] : (r = () => U.mutate(), e[54] = U, e[55] = r);
                let i;
                e[56] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.accepted.button.continue`,
                    defaultMessage: `Continue to ChatGPT`
                }), e[56] = i) : i = e[56];
                let a;
                e[57] !== G || e[58] !== r ? (a = (0, I.jsx)(s, {
                    color: `primary`,
                    loading: G,
                    type: `button`,
                    onClick: r,
                    children: i
                }), e[57] = G, e[58] = r, e[59] = a) : a = e[59];
                let o;
                e[60] !== K || e[61] !== a || e[62] !== q ? (o = (0, I.jsx)(R, {
                    title: t,
                    description: n,
                    status: q,
                    action: a,
                    error: K
                }), e[60] = K, e[61] = a, e[62] = q, e[63] = o) : o = e[63], J = o
            } else if (T?.invite_status === `invalid`) {
                let t;
                e[64] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(R, {
                    title: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.invalid.title`,
                        defaultMessage: `This invite can’t be accepted`
                    }),
                    description: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.invalid.description`,
                        defaultMessage: `Ask the workspace owner to send you a new invitation.`
                    })
                }), e[64] = t) : t = e[64], J = t
            } else if (fe) {
                let t;
                e[65] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(R, {
                    icon: (0, I.jsx)(ie, {
                        "aria-hidden": !0,
                        className: `icon-lg text-token-icon-status-warning`
                    }),
                    title: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.workspace_membership_conflict.title`,
                        defaultMessage: `You can’t join this workspace`
                    }),
                    description: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.workspace_membership_conflict.description`,
                        defaultMessage: `You already belong to an Academic Researcher workspace.`
                    })
                }), e[65] = t) : t = e[65], J = t
            } else if (de) {
                let t, n;
                e[66] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(te, {
                    "aria-hidden": !0,
                    className: `icon-lg text-token-text-success`
                }), n = (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.ready.title`,
                    defaultMessage: `You’re ready to join`
                }), e[66] = t, e[67] = n) : (t = e[66], n = e[67]);
                let r;
                e[68] === A ? r = e[69] : (r = A === `admin` ? (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.ready.description.admin`,
                    defaultMessage: `Your eligibility was approved by OpenAI. Accept the invite to join the Academic Researcher workspace.`
                }) : (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.ready.description.sheer_id`,
                    defaultMessage: `Your eligibility is verified. Accept the invite to join the Academic Researcher workspace.`
                }), e[68] = A, e[69] = r);
                let i;
                e[70] === U ? i = e[71] : (i = () => U.mutate(), e[70] = U, e[71] = i);
                let a;
                e[72] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.ready.button.accept`,
                    defaultMessage: `Accept invite`
                }), e[72] = a) : a = e[72];
                let o;
                e[73] !== G || e[74] !== i ? (o = (0, I.jsx)(s, {
                    color: `primary`,
                    loading: G,
                    type: `button`,
                    onClick: i,
                    children: a
                }), e[73] = G, e[74] = i, e[75] = o) : o = e[75];
                let c;
                e[76] !== K || e[77] !== r || e[78] !== o || e[79] !== q ? (c = (0, I.jsx)(R, {
                    icon: t,
                    title: n,
                    description: r,
                    status: q,
                    action: o,
                    error: K
                }), e[76] = K, e[77] = r, e[78] = o, e[79] = q, e[80] = c) : c = e[80], J = c
            } else {
                let t;
                e[81] === k ? t = e[82] : (t = k ? (0, I.jsx)(ie, {
                    "aria-hidden": !0,
                    className: `icon-lg text-token-icon-status-warning`
                }) : void 0, e[81] = k, e[82] = t);
                let n;
                e[83] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.verify.title`,
                    defaultMessage: `Verify your eligibility`
                }), e[83] = n) : n = e[83];
                let r;
                e[84] !== d || e[85] !== k || e[86] !== O ? (r = k ? (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.verify.error.email_mismatch`,
                    defaultMessage: `The email you used in SheerID doesn’t match this invitation. Contact support to reset your verification before using the invited email address.`
                }) : O === `error` ? (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.verify.error.generic`,
                    defaultMessage: `We couldn’t complete your verification. Contact support if you think this is a mistake.`
                }) : O === `pending` ? d ? (0, I.jsx)(`span`, {
                    role: `status`,
                    children: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.verify.pending_after_check`,
                        defaultMessage: `Your verification is still in progress. Complete it in SheerID, then check again.`
                    })
                }) : (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.verify.pending`,
                    defaultMessage: `Your verification isn’t finished yet. Continue when you’re ready.`
                }) : (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.verify.description`,
                    defaultMessage: `Complete institutional verification with the same email address as this invitation before you can join.`
                }), e[84] = d, e[85] = k, e[86] = O, e[87] = r) : r = e[87];
                let i;
                e[88] !== Ce || e[89] !== w.isFetching || e[90] !== W || e[91] !== O ? (i = O === `error` ? (0, I.jsx)(s, {
                    color: `secondary`,
                    loading: w.isFetching,
                    type: `button`,
                    onClick: () => {
                        Ce()
                    },
                    children: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.verify.button.check_status_after_error`,
                        defaultMessage: `Check verification status`
                    })
                }) : (0, I.jsxs)(`div`, {
                    className: `flex flex-wrap gap-2`,
                    children: [(0, I.jsx)(s, {
                        color: `primary`,
                        loading: W,
                        type: `button`,
                        onClick: xe,
                        children: (0, I.jsx)(S, {
                            id: `chatgpt.sophia.invite.verify.button.continue`,
                            defaultMessage: `Continue verification`
                        })
                    }), (0, I.jsx)(s, {
                        color: `secondary`,
                        loading: w.isFetching,
                        type: `button`,
                        onClick: () => {
                            Ce()
                        },
                        children: (0, I.jsx)(S, {
                            id: `chatgpt.sophia.invite.verify.button.check_status`,
                            defaultMessage: `I’ve completed verification`
                        })
                    })]
                }), e[88] = Ce, e[89] = w.isFetching, e[90] = W, e[91] = O, e[92] = i) : i = e[92];
                let a;
                e[93] === c ? a = e[94] : (a = c ? (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.verify.create_error`,
                    defaultMessage: `We couldn’t start verification. Contact support if you think this is a mistake.`
                }) : null, e[93] = c, e[94] = a);
                let o;
                e[95] !== t || e[96] !== r || e[97] !== i || e[98] !== a ? (o = (0, I.jsx)(R, {
                    icon: t,
                    title: n,
                    description: r,
                    action: i,
                    error: a
                }), e[95] = t, e[96] = r, e[97] = i, e[98] = a, e[99] = o) : o = e[99], J = o
            }
            let Ae;
            e[100] === Symbol.for(`react.memo_cache_sentinel`) ? (Ae = (0, I.jsx)(S, {
                id: `chatgpt.sophia.invite.page.title`,
                defaultMessage: `Join an Academic Researcher workspace`
            }), e[100] = Ae) : Ae = e[100];
            let je;
            e[101] === Symbol.for(`react.memo_cache_sentinel`) ? (je = (0, I.jsx)(`header`, {
                className: `flex h-16 items-center px-6`,
                children: (0, I.jsx)(`a`, {
                    className: `text-token-text-primary text-lg font-semibold tracking-tight`,
                    href: `/`,
                    children: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.header.product_name`,
                        defaultMessage: `ChatGPT`
                    })
                })
            }), e[101] = je) : je = e[101];
            let Me;
            e[102] === Symbol.for(`react.memo_cache_sentinel`) ? (Me = (0, I.jsx)(`h1`, {
                className: `text-3xl leading-9 font-semibold tracking-tight text-balance sm:text-4xl sm:leading-10`,
                children: (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.page.title`,
                    defaultMessage: `Join an Academic Researcher workspace`
                })
            }), e[102] = Me) : Me = e[102];
            let Y;
            e[103] === T ? Y = e[104] : (Y = T?.workspace_name ? (0, I.jsx)(`p`, {
                className: `text-token-text-secondary mt-4 text-lg leading-7`,
                children: (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.page.workspace_name`,
                    defaultMessage: `You’ve been invited to join {workspaceName}.`,
                    values: {
                        workspaceName: T.workspace_name
                    }
                })
            }) : null, e[103] = T, e[104] = Y);
            let X;
            e[105] === J ? X = e[106] : (X = (0, I.jsx)(`div`, {
                className: `mt-8 text-start`,
                children: J
            }), e[105] = J, e[106] = X);
            let Z;
            e[107] !== Y || e[108] !== X ? (Z = (0, I.jsx)(`main`, {
                className: `flex flex-1 items-center justify-center px-6 py-12`,
                children: (0, I.jsxs)(`div`, {
                    className: `w-full max-w-xl text-center`,
                    children: [Me, Y, X]
                })
            }), e[107] = Y, e[108] = X, e[109] = Z) : Z = e[109];
            let Ne = re?.verificationUrl ?? null,
                Pe;
            e[110] === Symbol.for(`react.memo_cache_sentinel`) ? (Pe = () => ee(!1), e[110] = Pe) : Pe = e[110];
            let Q;
            e[111] !== _ || e[112] !== Te ? (Q = () => {
                _ != null && Te(_)
            }, e[111] = _, e[112] = Te, e[113] = Q) : Q = e[113];
            let $;
            e[114] !== c || e[115] !== W || e[116] !== p || e[117] !== _ || e[118] !== Ne || e[119] !== Q ? ($ = (0, I.jsx)(_e, {
                hasError: c,
                isLoading: W,
                isOpen: p,
                selectedVerificationType: _,
                verificationUrl: Ne,
                onClose: Pe,
                onChooseDifferentOption: ke,
                onStart: Q,
                onSelectVerificationType: De
            }), e[114] = c, e[115] = W, e[116] = p, e[117] = _, e[118] = Ne, e[119] = Q, e[120] = $) : $ = e[120];
            let Fe;
            return e[121] !== Z || e[122] !== $ ? (Fe = (0, I.jsx)(le, {
                open: !0,
                onOpenChange: ge,
                accessibleTitle: Ae,
                children: (0, I.jsxs)(le.Contents, {
                    className: `bg-primary text-token-text-primary flex flex-col`,
                    children: [je, Z, $]
                })
            }), e[121] = Z, e[122] = $, e[123] = Fe) : Fe = e[123], Fe
        }, R = e => {
            "use forget";
            let t = (0, P.c)(17),
                {
                    icon: n,
                    title: r,
                    description: i,
                    status: a,
                    action: o,
                    error: s
                } = e,
                c;
            t[0] !== n || t[1] !== r ? (c = (0, I.jsxs)(`h2`, {
                className: `text-token-text-primary flex items-center gap-2 text-lg font-semibold`,
                children: [n, r]
            }), t[0] = n, t[1] = r, t[2] = c) : c = t[2];
            let l;
            t[3] === i ? l = t[4] : (l = (0, I.jsx)(`p`, {
                className: `text-token-text-secondary mt-2 text-sm leading-6`,
                children: i
            }), t[3] = i, t[4] = l);
            let u;
            t[5] === a ? u = t[6] : (u = a ? (0, I.jsxs)(`div`, {
                className: `border-token-border-light bg-token-bg-secondary text-token-text-primary mt-4 flex items-start gap-2.5 rounded-xl border p-4 text-sm leading-6`,
                role: `status`,
                children: [(0, I.jsx)(g, {
                    "aria-hidden": `true`,
                    className: `icon-sm mt-0.5 shrink-0`
                }), (0, I.jsx)(`p`, {
                    className: `min-w-0`,
                    children: a
                })]
            }) : null, t[5] = a, t[6] = u);
            let d;
            t[7] === s ? d = t[8] : (d = s ? (0, I.jsx)(`p`, {
                className: `text-token-interactive-label-warning-secondary mt-4 text-sm leading-6`,
                role: `alert`,
                children: s
            }) : null, t[7] = s, t[8] = d);
            let f;
            t[9] === o ? f = t[10] : (f = o ? (0, I.jsx)(`div`, {
                className: `mt-5`,
                children: o
            }) : null, t[9] = o, t[10] = f);
            let p;
            return t[11] !== c || t[12] !== l || t[13] !== u || t[14] !== d || t[15] !== f ? (p = (0, I.jsxs)(`section`, {
                className: `border-token-border-light bg-token-bg-primary rounded-2xl border p-6 shadow-sm`,
                children: [c, l, u, d, f]
            }), t[11] = c, t[12] = l, t[13] = u, t[14] = d, t[15] = f, t[16] = p) : p = t[16], p
        }, _e = e => {
            "use forget";
            let t = (0, P.c)(26),
                {
                    hasError: n,
                    isLoading: r,
                    isOpen: i,
                    selectedVerificationType: o,
                    verificationUrl: c,
                    onClose: l,
                    onChooseDifferentOption: u,
                    onStart: d,
                    onSelectVerificationType: f
                } = e,
                p;
            t[0] !== n || t[1] !== r || t[2] !== l || t[3] !== d || t[4] !== o || t[5] !== c ? (p = o == null ? void 0 : c == null ? n ? void 0 : r ? (0, I.jsx)(s, {
                color: `primary`,
                disabled: !0,
                loading: r,
                type: `button`,
                children: (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.modal.button.preparing`,
                    defaultMessage: `Preparing verification…`
                })
            }) : (0, I.jsx)(s, {
                color: `primary`,
                type: `button`,
                onClick: d,
                children: (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.modal.button.start`,
                    defaultMessage: `Continue to verification`
                })
            }) : (0, I.jsx)(s, {
                as: `a`,
                color: `primary`,
                openNewTab: !0,
                rel: `noopener noreferrer`,
                to: c,
                onClick: l,
                children: (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.modal.button.continue`,
                    defaultMessage: `Continue to verification`
                })
            }), t[0] = n, t[1] = r, t[2] = l, t[3] = d, t[4] = o, t[5] = c, t[6] = p) : p = t[6];
            let te = p,
                m;
            t[7] === o ? m = t[8] : (m = o == null ? (0, I.jsx)(S, {
                id: `chatgpt.sophia.invite.modal.verification_type.title`,
                defaultMessage: `Choose how to verify your eligibility`
            }) : (0, I.jsx)(S, {
                id: `chatgpt.sophia.invite.modal.title`,
                defaultMessage: `Before you continue`
            }), t[7] = o, t[8] = m);
            let h;
            t[9] !== n || t[10] !== r || t[11] !== u || t[12] !== l || t[13] !== o || t[14] !== c ? (h = o == null ? (0, I.jsx)(s, {
                color: `secondary`,
                type: `button`,
                onClick: l,
                children: (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.modal.button.cancel`,
                    defaultMessage: `Cancel`
                })
            }) : c == null && !r && !n ? (0, I.jsx)(s, {
                color: `secondary`,
                type: `button`,
                onClick: u,
                children: (0, I.jsx)(S, {
                    id: `chatgpt.sophia.invite.modal.button.choose_different_option`,
                    defaultMessage: `Choose a different option`
                })
            }) : void 0, t[9] = n, t[10] = r, t[11] = u, t[12] = l, t[13] = o, t[14] = c, t[15] = h) : h = t[15];
            let g;
            t[16] !== f || t[17] !== o ? (g = o == null ? (0, I.jsxs)(`div`, {
                className: `space-y-4`,
                children: [(0, I.jsx)(`p`, {
                    className: `text-token-text-primary text-sm leading-6`,
                    children: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.modal.verification_type.description`,
                        defaultMessage: `To join this Academic Researcher workspace, choose the option that best describes your current status. We’ll use it to open the matching SheerID verification flow. Choosing the wrong option may prevent verification.`
                    })
                }), (0, I.jsxs)(`div`, {
                    className: `space-y-3`,
                    children: [(0, I.jsx)(z, {
                        description: (0, I.jsx)(S, {
                            id: `chatgpt.sophia.invite.modal.verification_type.educator.description`,
                            defaultMessage: `Choose this if you’re eligible through your educator, faculty, or academic staff status.`
                        }),
                        title: (0, I.jsx)(S, {
                            id: `chatgpt.sophia.invite.modal.verification_type.educator.title`,
                            defaultMessage: `I’m an educator`
                        }),
                        onClick: () => f(`educator`)
                    }), (0, I.jsx)(z, {
                        description: (0, I.jsx)(S, {
                            id: `chatgpt.sophia.invite.modal.verification_type.student.description`,
                            defaultMessage: `Choose this if you’re currently enrolled at an eligible educational institution.`
                        }),
                        title: (0, I.jsx)(S, {
                            id: `chatgpt.sophia.invite.modal.verification_type.student.title`,
                            defaultMessage: `I’m a student`
                        }),
                        onClick: () => f(`student`)
                    })]
                }), (0, I.jsx)(`p`, {
                    className: `text-token-text-secondary text-xs leading-5`,
                    children: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.modal.verification_type.note`,
                        defaultMessage: `This choice only affects eligibility verification. It does not change your workspace role.`
                    })
                })]
            }) : (0, I.jsxs)(`div`, {
                className: `space-y-4`,
                children: [(0, I.jsxs)(`div`, {
                    className: `border-token-border-light bg-token-bg-secondary text-token-text-primary flex items-start gap-2.5 rounded-xl border p-4 text-sm leading-5`,
                    children: [(0, I.jsx)(ee, {
                        "aria-hidden": `true`,
                        className: `icon-sm mt-0.5 shrink-0`
                    }), (0, I.jsx)(`p`, {
                        className: `min-w-0`,
                        children: (0, I.jsx)(S, {
                            id: `chatgpt.sophia.invite.modal.email_match_reminder`,
                            defaultMessage: `<strong>Use the same email address as this invitation and your ChatGPT account.</strong> If they’re different, sign in to ChatGPT with the matching account before continuing.`,
                            values: {
                                strong: N
                            }
                        })
                    })]
                }), (0, I.jsx)(`p`, {
                    className: `text-token-text-primary text-sm leading-6`,
                    children: (0, I.jsx)(S, {
                        id: `chatgpt.sophia.invite.modal.new_tab_instructions`,
                        defaultMessage: `Verification will open in a new tab. Return to this page when you’re done.`
                    })
                })]
            }), t[16] = f, t[17] = o, t[18] = g) : g = t[18];
            let _;
            return t[19] !== i || t[20] !== l || t[21] !== te || t[22] !== m || t[23] !== h || t[24] !== g ? (_ = (0, I.jsx)(a, {
                testId: `modal-sophia-invite-verification-instructions`,
                rootClassName: `z-[130]`,
                isOpen: i,
                onClose: l,
                showCloseButton: !0,
                title: m,
                primaryButton: te,
                secondaryButton: h,
                children: g
            }), t[19] = i, t[20] = l, t[21] = te, t[22] = m, t[23] = h, t[24] = g, t[25] = _) : _ = t[25], _
        }, z = e => {
            "use forget";
            let t = (0, P.c)(8),
                {
                    description: n,
                    title: r,
                    onClick: i
                } = e,
                a;
            t[0] === r ? a = t[1] : (a = (0, I.jsx)(`span`, {
                className: `text-token-text-primary block text-sm font-semibold`,
                children: r
            }), t[0] = r, t[1] = a);
            let o;
            t[2] === n ? o = t[3] : (o = (0, I.jsx)(`span`, {
                className: `text-token-text-secondary mt-1 block text-sm leading-5`,
                children: n
            }), t[2] = n, t[3] = o);
            let s;
            return t[4] !== i || t[5] !== a || t[6] !== o ? (s = (0, I.jsxs)(`button`, {
                className: `border-token-border-light hover:bg-token-bg-secondary focus-visible:ring-token-ring w-full rounded-xl border p-4 text-start transition focus-visible:ring-2 focus-visible:outline-hidden`,
                type: `button`,
                onClick: i,
                children: [a, o]
            }), t[4] = i, t[5] = a, t[6] = o, t[7] = s) : s = t[7], s
        }
    })),
    V, H, U, W, G = e((() => {
        C(), V = D(), B(), H = b(), U = {
            hasRouteMeta: !0,
            useScrollRestoration: !0
        }, W = x(function() {
            "use forget";
            let e = (0, V.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, H.jsx)(L, {}), e[0] = t) : t = e[0], t
        })
    }));
export {
    G as n, W as r, U as t
};
//# sourceMappingURL=39e3b9e4-dpc9n3tuw9e3ijbp.js.map