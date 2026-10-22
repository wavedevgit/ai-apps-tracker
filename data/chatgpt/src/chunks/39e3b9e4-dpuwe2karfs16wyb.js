import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $T as r,
    Aw as i,
    N4 as a,
    Ow as o,
    P4 as s,
    Rz as c,
    Y7 as l,
    Yat as u,
    cW as d,
    eE as f,
    f0 as p,
    fB as m,
    lW as h,
    n0 as g,
    oW as _,
    p0 as v,
    pB as y,
    q1 as ee,
    sW as te,
    tot as ne,
    z1 as b,
    zz as re
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as x,
    Ht as S,
    N as ie,
    Nn as C,
    O as ae,
    Q as w,
    Rn as T,
    Vn as E,
    Vt as oe,
    p as se,
    s as ce,
    wn as D
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ilt as O,
    Plt as le
} from "./conversation-small-fh0oqifngkf5rvl1.js";

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
async function ue(e, t, n = g) {
    let r = Date.now();
    for (;;) {
        let i = k(r);
        if (i === 0) throw Error(j);
        try {
            await A(e.refetchQueries({
                queryKey: b().queryKey
            }), i)
        } catch {}
        let a = k(r);
        if (a === 0) throw Error(j);
        let {
            updatedAccount: o
        } = await A(n(e, t), a);
        if (o) return;
        let s = k(r);
        if (s === 0) throw Error(j);
        await new Promise(e => setTimeout(e, Math.min(de, s)))
    }
}
var de, fe, j, M = e((() => {
    ee(), de = 500, fe = 1e4, j = `Timed out waiting for the accepted Science workspace.`
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
    a()
}

function he() {
    return v({
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
        P = D(), f(), h(), y(), _(), i(), O(), re(), M(), p(), ne(), s(), n(), ce(), F = t(E()), T(), w(), I = x(), L = () => {
            "use forget";
            let e = (0, P.c)(124),
                t = ie(),
                [n] = oe(),
                i;
            e[0] === n ? i = e[1] : (i = n.get(`aiId`), e[0] = n, e[1] = i);
            let a = i,
                o = (0, F.useRef)(0),
                [s, f] = (0, F.useState)(!1),
                [p, m] = (0, F.useState)(!1),
                [h, g] = (0, F.useState)(!1),
                [_, v] = (0, F.useState)(!1),
                [y, ee] = (0, F.useState)(null),
                [ne, b] = (0, F.useState)(null),
                re = a != null,
                x, S;
            e[2] === a ? (x = e[3], S = e[4]) : (x = [`sophia-invite-status`, a], S = () => l.safePost(`/sophia/refresh_invite_status`, {
                requestBody: {
                    account_invite_id: a ?? ``
                }
            }), e[2] = a, e[3] = x, e[4] = S);
            let w;
            e[5] !== re || e[6] !== x || e[7] !== S ? (w = {
                enabled: re,
                queryKey: x,
                queryFn: S,
                retry: !1,
                refetchOnWindowFocus: `always`
            }, e[5] = re, e[6] = x, e[7] = S, e[8] = w) : w = e[8];
            let T = ae(w),
                E = T.data?.metadata,
                ce = E?.verification_status,
                D;
            e[9] === ce ? D = e[10] : (D = pe(ce), e[9] = ce, e[10] = D);
            let O = D,
                k = E?.verification_error_reason === `email_mismatch`,
                A = E?.eligibility_source ?? null,
                de = A != null,
                fe = E?.workspace_membership_error_code === `sci_workspace_membership_conflict`,
                j;
            e[11] === a ? j = e[12] : (j = e => {
                let {
                    verificationType: t
                } = e;
                return l.safePost(`/sophia/create_verification`, {
                    requestBody: {
                        redirect_url: window.location.href,
                        ...a == null ? {} : {
                            account_invite_id: a
                        },
                        verification_type: t
                    }
                })
            }, e[11] = a, e[12] = j);
            let M;
            e[13] === T ? M = e[14] : (M = (e, t) => {
                let {
                    requestId: n
                } = t;
                if (n === o.current) {
                    if (f(!1), e.verification_status === `verified`) {
                        b(null), g(!1), T.refetch();
                        return
                    }
                    if (e.verification_url != null) {
                        b({
                            verificationId: e.verification_id,
                            verificationUrl: e.verification_url
                        });
                        return
                    }
                    f(!0)
                }
            }, e[13] = T, e[14] = M);
            let N;
            e[15] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (e, t) => {
                let {
                    requestId: n
                } = t;
                n === o.current && f(!0)
            }, e[15] = N) : N = e[15];
            let L;
            e[16] !== j || e[17] !== M ? (L = {
                mutationFn: j,
                onSuccess: M,
                onError: N
            }, e[16] = j, e[17] = M, e[18] = L) : L = e[18];
            let z = se(L),
                B;
            e[19] !== a || e[20] !== t ? (B = async () => {
                v(!1);
                let {
                    workspace_id: e
                } = await l.safePost(`/sophia/accept_invite`, {
                    requestBody: {
                        account_invite_id: a ?? ``
                    }
                });
                if (v(!0), e != null) try {
                    await ue(t, e)
                } catch {}
            }, e[19] = a, e[20] = t, e[21] = B) : B = e[21];
            let V;
            e[22] === Symbol.for(`react.memo_cache_sentinel`) ? (V = () => {
                v(!1)
            }, e[22] = V) : V = e[22];
            let H;
            e[23] === B ? H = e[24] : (H = {
                mutationFn: B,
                onSuccess: me,
                onError: V
            }, e[23] = B, e[24] = H);
            let U = se(H),
                W = z.isPending,
                G = U.isPending || _,
                ve;
            e[25] !== U.error || e[26] !== U.isError ? (ve = U.isError ? U.error instanceof u && U.error.code === `sci_workspace_membership_conflict` ? (0, I.jsx)(C, {
                id: `chatgpt.sophia.invite.accept_error.workspace_membership`,
                defaultMessage: `You already belong to an Academic Researcher workspace.`
            }) : (0, I.jsx)(C, {
                id: `chatgpt.sophia.invite.accept_error.description`,
                defaultMessage: `We couldn’t accept your invite. Please try again.`
            }) : null, e[25] = U.error, e[26] = U.isError, e[27] = ve) : ve = e[27];
            let K = ve,
                ye;
            e[28] === _ ? ye = e[29] : (ye = _ ? (0, I.jsx)(C, {
                id: `chatgpt.sophia.invite.workspace_switch.status`,
                defaultMessage: `Your invite was accepted. We’re switching you to the workspace. Please keep this page open. This should only take a moment.`
            }) : null, e[28] = _, e[29] = ye);
            let q = ye,
                be;
            e[30] === Symbol.for(`react.memo_cache_sentinel`) ? (be = () => {
                g(!0)
            }, e[30] = be) : be = e[30];
            let xe = be,
                Se;
            e[31] === T ? Se = e[32] : (Se = async () => {
                let e = await T.refetch();
                m(e.data?.metadata?.verification_status === `pending`)
            }, e[31] = T, e[32] = Se);
            let Ce = Se,
                we;
            e[33] === z ? we = e[34] : (we = e => {
                let t = o.current += 1;
                ee(e), b(null), f(!1), z.mutate({
                    requestId: t,
                    verificationType: e
                })
            }, e[33] = z, e[34] = we);
            let Te = we,
                Ee;
            e[35] === Symbol.for(`react.memo_cache_sentinel`) ? (Ee = e => {
                o.current += 1, ee(e), b(null), f(!1)
            }, e[35] = Ee) : Ee = e[35];
            let De = Ee,
                Oe;
            e[36] === Symbol.for(`react.memo_cache_sentinel`) ? (Oe = () => {
                o.current += 1, ee(null), b(null), f(!1)
            }, e[36] = Oe) : Oe = e[36];
            let ke = Oe,
                J;
            if (a == null) {
                let t;
                e[37] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(R, {
                    title: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.missing_id.title`,
                        defaultMessage: `This invite link is incomplete`
                    }),
                    description: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.missing_id.description`,
                        defaultMessage: `Open the link from your invitation email and try again.`
                    })
                }), e[37] = t) : t = e[37], J = t
            } else if (T.isPending) {
                let t;
                e[38] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(R, {
                    icon: (0, I.jsx)(c, {
                        className: `icon-lg text-token-text-secondary`
                    }),
                    title: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.loading.title`,
                        defaultMessage: `Checking your invitation`
                    }),
                    description: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.loading.description`,
                        defaultMessage: `This should only take a moment.`
                    })
                }), e[38] = t) : t = e[38], J = t
            } else if (T.isError) {
                let t, n;
                e[39] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.load_error.title`,
                    defaultMessage: `We couldn’t check your invitation`
                }), n = (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.load_error.description`,
                    defaultMessage: `Try checking again.`
                }), e[39] = t, e[40] = n) : (t = e[39], n = e[40]);
                let i;
                e[41] === T ? i = e[42] : (i = () => {
                    T.refetch()
                }, e[41] = T, e[42] = i);
                let a;
                e[43] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.load_error.button.retry`,
                    defaultMessage: `Try again`
                }), e[43] = a) : a = e[43];
                let o;
                e[44] === i ? o = e[45] : (o = (0, I.jsx)(R, {
                    title: t,
                    description: n,
                    action: (0, I.jsx)(r, {
                        color: `primary`,
                        type: `button`,
                        onClick: i,
                        children: a
                    })
                }), e[44] = i, e[45] = o), J = o
            } else if (E?.invite_status === `not_found`) {
                let t;
                e[46] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(R, {
                    title: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.not_found.title`,
                        defaultMessage: `Invite not found`
                    }),
                    description: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.not_found.description`,
                        defaultMessage: `Ask the workspace owner to send you a new invitation.`
                    })
                }), e[46] = t) : t = e[46], J = t
            } else if (E?.invite_status === `wrong_user`) {
                let t, n, i;
                e[47] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(te, {
                    "aria-hidden": !0,
                    className: `icon-lg text-token-icon-status-warning`
                }), n = (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.wrong_user.title`,
                    defaultMessage: `Sign in with the invited email`
                }), i = (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.wrong_user.description`,
                    defaultMessage: `You’re signed in with a different email address. Sign in to ChatGPT with the email address this invitation was sent to, then try again.`
                }), e[47] = t, e[48] = n, e[49] = i) : (t = e[47], n = e[48], i = e[49]);
                let a;
                e[50] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, I.jsx)(R, {
                    icon: t,
                    title: n,
                    description: i,
                    action: (0, I.jsx)(r, {
                        color: `primary`,
                        type: `button`,
                        onClick: he,
                        children: (0, I.jsx)(C, {
                            id: `chatgpt.sophia.invite.wrong_user.button.switch_account`,
                            defaultMessage: `Switch account`
                        })
                    })
                }), e[50] = a) : a = e[50], J = a
            } else if (E?.invite_status === `expired`) {
                let t;
                e[51] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(R, {
                    title: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.expired.title`,
                        defaultMessage: `This invite has expired`
                    }),
                    description: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.expired.description`,
                        defaultMessage: `Ask the workspace owner to send you a new invitation.`
                    })
                }), e[51] = t) : t = e[51], J = t
            } else if (E?.invite_status === `accepted`) {
                let t, n;
                e[52] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.accepted.title`,
                    defaultMessage: `You’ve already accepted this invite`
                }), n = (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.accepted.description`,
                    defaultMessage: `You can continue to ChatGPT.`
                }), e[52] = t, e[53] = n) : (t = e[52], n = e[53]);
                let i;
                e[54] === U ? i = e[55] : (i = () => U.mutate(), e[54] = U, e[55] = i);
                let a;
                e[56] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.accepted.button.continue`,
                    defaultMessage: `Continue to ChatGPT`
                }), e[56] = a) : a = e[56];
                let o;
                e[57] !== G || e[58] !== i ? (o = (0, I.jsx)(r, {
                    color: `primary`,
                    loading: G,
                    type: `button`,
                    onClick: i,
                    children: a
                }), e[57] = G, e[58] = i, e[59] = o) : o = e[59];
                let s;
                e[60] !== K || e[61] !== o || e[62] !== q ? (s = (0, I.jsx)(R, {
                    title: t,
                    description: n,
                    status: q,
                    action: o,
                    error: K
                }), e[60] = K, e[61] = o, e[62] = q, e[63] = s) : s = e[63], J = s
            } else if (E?.invite_status === `invalid`) {
                let t;
                e[64] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(R, {
                    title: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.invalid.title`,
                        defaultMessage: `This invite can’t be accepted`
                    }),
                    description: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.invalid.description`,
                        defaultMessage: `Ask the workspace owner to send you a new invitation.`
                    })
                }), e[64] = t) : t = e[64], J = t
            } else if (fe) {
                let t;
                e[65] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(R, {
                    icon: (0, I.jsx)(te, {
                        "aria-hidden": !0,
                        className: `icon-lg text-token-icon-status-warning`
                    }),
                    title: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.workspace_membership_conflict.title`,
                        defaultMessage: `You can’t join this workspace`
                    }),
                    description: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.workspace_membership_conflict.description`,
                        defaultMessage: `You already belong to an Academic Researcher workspace.`
                    })
                }), e[65] = t) : t = e[65], J = t
            } else if (de) {
                let t, n;
                e[66] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(d, {
                    "aria-hidden": !0,
                    className: `icon-lg text-token-text-success`
                }), n = (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.ready.title`,
                    defaultMessage: `You’re ready to join`
                }), e[66] = t, e[67] = n) : (t = e[66], n = e[67]);
                let i;
                e[68] === A ? i = e[69] : (i = A === `admin` ? (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.ready.description.admin`,
                    defaultMessage: `Your eligibility was approved by OpenAI. Accept the invite to join the Academic Researcher workspace.`
                }) : (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.ready.description.sheer_id`,
                    defaultMessage: `Your eligibility is verified. Accept the invite to join the Academic Researcher workspace.`
                }), e[68] = A, e[69] = i);
                let a;
                e[70] === U ? a = e[71] : (a = () => U.mutate(), e[70] = U, e[71] = a);
                let o;
                e[72] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.ready.button.accept`,
                    defaultMessage: `Accept invite`
                }), e[72] = o) : o = e[72];
                let s;
                e[73] !== G || e[74] !== a ? (s = (0, I.jsx)(r, {
                    color: `primary`,
                    loading: G,
                    type: `button`,
                    onClick: a,
                    children: o
                }), e[73] = G, e[74] = a, e[75] = s) : s = e[75];
                let c;
                e[76] !== K || e[77] !== i || e[78] !== s || e[79] !== q ? (c = (0, I.jsx)(R, {
                    icon: t,
                    title: n,
                    description: i,
                    status: q,
                    action: s,
                    error: K
                }), e[76] = K, e[77] = i, e[78] = s, e[79] = q, e[80] = c) : c = e[80], J = c
            } else {
                let t;
                e[81] === k ? t = e[82] : (t = k ? (0, I.jsx)(te, {
                    "aria-hidden": !0,
                    className: `icon-lg text-token-icon-status-warning`
                }) : void 0, e[81] = k, e[82] = t);
                let n;
                e[83] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.verify.title`,
                    defaultMessage: `Verify your eligibility`
                }), e[83] = n) : n = e[83];
                let i;
                e[84] !== p || e[85] !== k || e[86] !== O ? (i = k ? (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.verify.error.email_mismatch`,
                    defaultMessage: `The email you used in SheerID doesn’t match this invitation. Contact support to reset your verification before using the invited email address.`
                }) : O === `error` ? (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.verify.error.generic`,
                    defaultMessage: `We couldn’t complete your verification. Contact support if you think this is a mistake.`
                }) : O === `pending` ? p ? (0, I.jsx)(`span`, {
                    role: `status`,
                    children: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.verify.pending_after_check`,
                        defaultMessage: `Your verification is still in progress. Complete it in SheerID, then check again.`
                    })
                }) : (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.verify.pending`,
                    defaultMessage: `Your verification isn’t finished yet. Continue when you’re ready.`
                }) : (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.verify.description`,
                    defaultMessage: `Complete institutional verification with the same email address as this invitation before you can join.`
                }), e[84] = p, e[85] = k, e[86] = O, e[87] = i) : i = e[87];
                let a;
                e[88] !== Ce || e[89] !== T.isFetching || e[90] !== W || e[91] !== O ? (a = O === `error` ? (0, I.jsx)(r, {
                    color: `secondary`,
                    loading: T.isFetching,
                    type: `button`,
                    onClick: () => {
                        Ce()
                    },
                    children: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.verify.button.check_status_after_error`,
                        defaultMessage: `Check verification status`
                    })
                }) : (0, I.jsxs)(`div`, {
                    className: `flex flex-wrap gap-2`,
                    children: [(0, I.jsx)(r, {
                        color: `primary`,
                        loading: W,
                        type: `button`,
                        onClick: xe,
                        children: (0, I.jsx)(C, {
                            id: `chatgpt.sophia.invite.verify.button.continue`,
                            defaultMessage: `Continue verification`
                        })
                    }), (0, I.jsx)(r, {
                        color: `secondary`,
                        loading: T.isFetching,
                        type: `button`,
                        onClick: () => {
                            Ce()
                        },
                        children: (0, I.jsx)(C, {
                            id: `chatgpt.sophia.invite.verify.button.check_status`,
                            defaultMessage: `I’ve completed verification`
                        })
                    })]
                }), e[88] = Ce, e[89] = T.isFetching, e[90] = W, e[91] = O, e[92] = a) : a = e[92];
                let o;
                e[93] === s ? o = e[94] : (o = s ? (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.verify.create_error`,
                    defaultMessage: `We couldn’t start verification. Contact support if you think this is a mistake.`
                }) : null, e[93] = s, e[94] = o);
                let c;
                e[95] !== t || e[96] !== i || e[97] !== a || e[98] !== o ? (c = (0, I.jsx)(R, {
                    icon: t,
                    title: n,
                    description: i,
                    action: a,
                    error: o
                }), e[95] = t, e[96] = i, e[97] = a, e[98] = o, e[99] = c) : c = e[99], J = c
            }
            let Ae;
            e[100] === Symbol.for(`react.memo_cache_sentinel`) ? (Ae = (0, I.jsx)(C, {
                id: `chatgpt.sophia.invite.page.title`,
                defaultMessage: `Join an Academic Researcher workspace`
            }), e[100] = Ae) : Ae = e[100];
            let je;
            e[101] === Symbol.for(`react.memo_cache_sentinel`) ? (je = (0, I.jsx)(`header`, {
                className: `flex h-16 items-center px-6`,
                children: (0, I.jsx)(`a`, {
                    className: `text-token-text-primary text-lg font-semibold tracking-tight`,
                    href: `/`,
                    children: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.header.product_name`,
                        defaultMessage: `ChatGPT`
                    })
                })
            }), e[101] = je) : je = e[101];
            let Me;
            e[102] === Symbol.for(`react.memo_cache_sentinel`) ? (Me = (0, I.jsx)(`h1`, {
                className: `text-3xl leading-9 font-semibold tracking-tight text-balance sm:text-4xl sm:leading-10`,
                children: (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.page.title`,
                    defaultMessage: `Join an Academic Researcher workspace`
                })
            }), e[102] = Me) : Me = e[102];
            let Y;
            e[103] === E ? Y = e[104] : (Y = E?.workspace_name ? (0, I.jsx)(`p`, {
                className: `text-token-text-secondary mt-4 text-lg leading-7`,
                children: (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.page.workspace_name`,
                    defaultMessage: `You’ve been invited to join {workspaceName}.`,
                    values: {
                        workspaceName: E.workspace_name
                    }
                })
            }) : null, e[103] = E, e[104] = Y);
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
            let Ne = ne?.verificationUrl ?? null,
                Pe;
            e[110] === Symbol.for(`react.memo_cache_sentinel`) ? (Pe = () => g(!1), e[110] = Pe) : Pe = e[110];
            let Q;
            e[111] !== y || e[112] !== Te ? (Q = () => {
                y != null && Te(y)
            }, e[111] = y, e[112] = Te, e[113] = Q) : Q = e[113];
            let $;
            e[114] !== s || e[115] !== W || e[116] !== h || e[117] !== y || e[118] !== Ne || e[119] !== Q ? ($ = (0, I.jsx)(_e, {
                hasError: s,
                isLoading: W,
                isOpen: h,
                selectedVerificationType: y,
                verificationUrl: Ne,
                onClose: Pe,
                onChooseDifferentOption: ke,
                onStart: Q,
                onSelectVerificationType: De
            }), e[114] = s, e[115] = W, e[116] = h, e[117] = y, e[118] = Ne, e[119] = Q, e[120] = $) : $ = e[120];
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
                l;
            t[0] !== n || t[1] !== r ? (l = (0, I.jsxs)(`h2`, {
                className: `text-token-text-primary flex items-center gap-2 text-lg font-semibold`,
                children: [n, r]
            }), t[0] = n, t[1] = r, t[2] = l) : l = t[2];
            let u;
            t[3] === i ? u = t[4] : (u = (0, I.jsx)(`p`, {
                className: `text-token-text-secondary mt-2 text-sm leading-6`,
                children: i
            }), t[3] = i, t[4] = u);
            let d;
            t[5] === a ? d = t[6] : (d = a ? (0, I.jsxs)(`div`, {
                className: `border-token-border-light bg-token-bg-secondary text-token-text-primary mt-4 flex items-start gap-2.5 rounded-xl border p-4 text-sm leading-6`,
                role: `status`,
                children: [(0, I.jsx)(c, {
                    "aria-hidden": `true`,
                    className: `icon-sm mt-0.5 shrink-0`
                }), (0, I.jsx)(`p`, {
                    className: `min-w-0`,
                    children: a
                })]
            }) : null, t[5] = a, t[6] = d);
            let f;
            t[7] === s ? f = t[8] : (f = s ? (0, I.jsx)(`p`, {
                className: `text-token-interactive-label-warning-secondary mt-4 text-sm leading-6`,
                role: `alert`,
                children: s
            }) : null, t[7] = s, t[8] = f);
            let p;
            t[9] === o ? p = t[10] : (p = o ? (0, I.jsx)(`div`, {
                className: `mt-5`,
                children: o
            }) : null, t[9] = o, t[10] = p);
            let m;
            return t[11] !== l || t[12] !== u || t[13] !== d || t[14] !== f || t[15] !== p ? (m = (0, I.jsxs)(`section`, {
                className: `border-token-border-light bg-token-bg-primary rounded-2xl border p-6 shadow-sm`,
                children: [l, u, d, f, p]
            }), t[11] = l, t[12] = u, t[13] = d, t[14] = f, t[15] = p, t[16] = m) : m = t[16], m
        }, _e = e => {
            "use forget";
            let t = (0, P.c)(26),
                {
                    hasError: n,
                    isLoading: i,
                    isOpen: a,
                    selectedVerificationType: s,
                    verificationUrl: c,
                    onClose: l,
                    onChooseDifferentOption: u,
                    onStart: d,
                    onSelectVerificationType: f
                } = e,
                p;
            t[0] !== n || t[1] !== i || t[2] !== l || t[3] !== d || t[4] !== s || t[5] !== c ? (p = s == null ? void 0 : c == null ? n ? void 0 : i ? (0, I.jsx)(r, {
                color: `primary`,
                disabled: !0,
                loading: i,
                type: `button`,
                children: (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.modal.button.preparing`,
                    defaultMessage: `Preparing verification…`
                })
            }) : (0, I.jsx)(r, {
                color: `primary`,
                type: `button`,
                onClick: d,
                children: (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.modal.button.start`,
                    defaultMessage: `Continue to verification`
                })
            }) : (0, I.jsx)(r, {
                as: `a`,
                color: `primary`,
                openNewTab: !0,
                rel: `noopener noreferrer`,
                to: c,
                onClick: l,
                children: (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.modal.button.continue`,
                    defaultMessage: `Continue to verification`
                })
            }), t[0] = n, t[1] = i, t[2] = l, t[3] = d, t[4] = s, t[5] = c, t[6] = p) : p = t[6];
            let h = p,
                g;
            t[7] === s ? g = t[8] : (g = s == null ? (0, I.jsx)(C, {
                id: `chatgpt.sophia.invite.modal.verification_type.title`,
                defaultMessage: `Choose how to verify your eligibility`
            }) : (0, I.jsx)(C, {
                id: `chatgpt.sophia.invite.modal.title`,
                defaultMessage: `Before you continue`
            }), t[7] = s, t[8] = g);
            let _;
            t[9] !== n || t[10] !== i || t[11] !== u || t[12] !== l || t[13] !== s || t[14] !== c ? (_ = s == null ? (0, I.jsx)(r, {
                color: `secondary`,
                type: `button`,
                onClick: l,
                children: (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.modal.button.cancel`,
                    defaultMessage: `Cancel`
                })
            }) : c == null && !i && !n ? (0, I.jsx)(r, {
                color: `secondary`,
                type: `button`,
                onClick: u,
                children: (0, I.jsx)(C, {
                    id: `chatgpt.sophia.invite.modal.button.choose_different_option`,
                    defaultMessage: `Choose a different option`
                })
            }) : void 0, t[9] = n, t[10] = i, t[11] = u, t[12] = l, t[13] = s, t[14] = c, t[15] = _) : _ = t[15];
            let v;
            t[16] !== f || t[17] !== s ? (v = s == null ? (0, I.jsxs)(`div`, {
                className: `space-y-4`,
                children: [(0, I.jsx)(`p`, {
                    className: `text-token-text-primary text-sm leading-6`,
                    children: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.modal.verification_type.description`,
                        defaultMessage: `To join this Academic Researcher workspace, choose the option that best describes your current status. We’ll use it to open the matching SheerID verification flow. Choosing the wrong option may prevent verification.`
                    })
                }), (0, I.jsxs)(`div`, {
                    className: `space-y-3`,
                    children: [(0, I.jsx)(z, {
                        description: (0, I.jsx)(C, {
                            id: `chatgpt.sophia.invite.modal.verification_type.educator.description`,
                            defaultMessage: `Choose this if you’re eligible through your educator, faculty, or academic staff status.`
                        }),
                        title: (0, I.jsx)(C, {
                            id: `chatgpt.sophia.invite.modal.verification_type.educator.title`,
                            defaultMessage: `I’m an educator`
                        }),
                        onClick: () => f(`educator`)
                    }), (0, I.jsx)(z, {
                        description: (0, I.jsx)(C, {
                            id: `chatgpt.sophia.invite.modal.verification_type.student.description`,
                            defaultMessage: `Choose this if you’re currently enrolled at an eligible educational institution.`
                        }),
                        title: (0, I.jsx)(C, {
                            id: `chatgpt.sophia.invite.modal.verification_type.student.title`,
                            defaultMessage: `I’m a student`
                        }),
                        onClick: () => f(`student`)
                    })]
                }), (0, I.jsx)(`p`, {
                    className: `text-token-text-secondary text-xs leading-5`,
                    children: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.modal.verification_type.note`,
                        defaultMessage: `This choice only affects eligibility verification. It does not change your workspace role.`
                    })
                })]
            }) : (0, I.jsxs)(`div`, {
                className: `space-y-4`,
                children: [(0, I.jsxs)(`div`, {
                    className: `border-token-border-light bg-token-bg-secondary text-token-text-primary flex items-start gap-2.5 rounded-xl border p-4 text-sm leading-5`,
                    children: [(0, I.jsx)(m, {
                        "aria-hidden": `true`,
                        className: `icon-sm mt-0.5 shrink-0`
                    }), (0, I.jsx)(`p`, {
                        className: `min-w-0`,
                        children: (0, I.jsx)(C, {
                            id: `chatgpt.sophia.invite.modal.email_match_reminder`,
                            defaultMessage: `<strong>Use the same email address as this invitation and your ChatGPT account.</strong> If they’re different, sign in to ChatGPT with the matching account before continuing.`,
                            values: {
                                strong: N
                            }
                        })
                    })]
                }), (0, I.jsx)(`p`, {
                    className: `text-token-text-primary text-sm leading-6`,
                    children: (0, I.jsx)(C, {
                        id: `chatgpt.sophia.invite.modal.new_tab_instructions`,
                        defaultMessage: `Verification will open in a new tab. Return to this page when you’re done.`
                    })
                })]
            }), t[16] = f, t[17] = s, t[18] = v) : v = t[18];
            let y;
            return t[19] !== a || t[20] !== l || t[21] !== h || t[22] !== g || t[23] !== _ || t[24] !== v ? (y = (0, I.jsx)(o, {
                testId: `modal-sophia-invite-verification-instructions`,
                rootClassName: `z-[130]`,
                isOpen: a,
                onClose: l,
                showCloseButton: !0,
                title: g,
                primaryButton: h,
                secondaryButton: _,
                children: v
            }), t[19] = a, t[20] = l, t[21] = h, t[22] = g, t[23] = _, t[24] = v, t[25] = y) : y = t[25], y
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
        w(), V = D(), B(), H = x(), U = {
            hasRouteMeta: !0,
            useScrollRestoration: !0
        }, W = S(function() {
            "use forget";
            let e = (0, V.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, H.jsx)(L, {}), e[0] = t) : t = e[0], t
        })
    }));
export {
    G as n, W as r, U as t
};
//# sourceMappingURL=39e3b9e4-dpuwe2karfs16wyb.js.map