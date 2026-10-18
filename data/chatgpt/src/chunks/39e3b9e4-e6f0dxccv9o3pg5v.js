import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    AT as r,
    Bz as i,
    IU as a,
    J2 as o,
    LU as s,
    Qit as c,
    RU as l,
    Y2 as u,
    a7 as d,
    dz as f,
    fz as p,
    iat as m,
    iw as ee,
    k1 as h,
    kT as g,
    l7 as _,
    n1 as te,
    ow as v,
    u1 as ne,
    y1 as re,
    zU as y,
    zz as ie
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as b,
    Bn as x,
    Ht as ae,
    N as oe,
    Nn as S,
    O as se,
    Rn as C,
    Ut as w,
    Vn as T,
    p as ce,
    s as le,
    wn as E
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Flt as D,
    Nlt as ue
} from "./conversation-small-fym1zmu9zimymmm1.js";

function O(e) {
    return Math.max(pe - (Date.now() - e), 0)
}
async function k(e, t) {
    let n;
    try {
        return await Promise.race([e, new Promise((e, r) => {
            n = setTimeout(() => r(Error(A)), t)
        })])
    } finally {
        n != null && clearTimeout(n)
    }
}
async function de(e, t, n = re) {
    let r = Date.now();
    for (;;) {
        let i = O(r);
        if (i === 0) throw Error(A);
        try {
            await k(e.refetchQueries({
                queryKey: te().queryKey
            }), i)
        } catch {}
        let a = O(r);
        if (a === 0) throw Error(A);
        let {
            updatedAccount: o
        } = await k(n(e, t), a);
        if (o) return;
        let s = O(r);
        if (s === 0) throw Error(A);
        await new Promise(e => setTimeout(e, Math.min(fe, s)))
    }
}
var fe, pe, A, j = e((() => {
    ne(), fe = 500, pe = 1e4, A = `Timed out waiting for the accepted Science workspace.`
}));

function me(e) {
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

function he() {
    o()
}

function ge() {
    return n({
        fallbackScreenHint: `login`,
        useFallbackScreenHint: !0,
        callbackUrl: window.location.href,
        skipLoginModal: !0
    })
}

function _e() {}

function M(e) {
    return (0, F.jsx)(`strong`, {
        className: `font-semibold`,
        children: e
    })
}
var N, P, F, I, L, ve, R, z = e((() => {
        N = E(), r(), y(), i(), a(), v(), D(), p(), j(), h(), m(), u(), _(), le(), P = t(T()), C(), b(), F = x(), I = () => {
            "use forget";
            let e = (0, N.c)(124),
                t = oe(),
                [n] = ae(),
                r;
            e[0] === n ? r = e[1] : (r = n.get(`aiId`), e[0] = n, e[1] = r);
            let i = r,
                a = (0, P.useRef)(0),
                [o, u] = (0, P.useState)(!1),
                [p, m] = (0, P.useState)(!1),
                [ee, h] = (0, P.useState)(!1),
                [_, te] = (0, P.useState)(!1),
                [v, ne] = (0, P.useState)(null),
                [re, y] = (0, P.useState)(null),
                ie = i != null,
                b, x;
            e[2] === i ? (b = e[3], x = e[4]) : (b = [`sophia-invite-status`, i], x = () => d.safePost(`/sophia/refresh_invite_status`, {
                requestBody: {
                    account_invite_id: i ?? ``
                }
            }), e[2] = i, e[3] = b, e[4] = x);
            let C;
            e[5] !== ie || e[6] !== b || e[7] !== x ? (C = {
                enabled: ie,
                queryKey: b,
                queryFn: x,
                retry: !1,
                refetchOnWindowFocus: `always`
            }, e[5] = ie, e[6] = b, e[7] = x, e[8] = C) : C = e[8];
            let w = se(C),
                T = w.data?.metadata,
                le = T?.verification_status,
                E;
            e[9] === le ? E = e[10] : (E = me(le), e[9] = le, e[10] = E);
            let D = E,
                O = T?.verification_error_reason === `email_mismatch`,
                k = T?.eligibility_source ?? null,
                fe = k != null,
                pe = T?.workspace_membership_error_code === `sci_workspace_membership_conflict`,
                A;
            e[11] === i ? A = e[12] : (A = e => {
                let {
                    verificationType: t
                } = e;
                return d.safePost(`/sophia/create_verification`, {
                    requestBody: {
                        redirect_url: window.location.href,
                        ...i == null ? {} : {
                            account_invite_id: i
                        },
                        verification_type: t
                    }
                })
            }, e[11] = i, e[12] = A);
            let j;
            e[13] === w ? j = e[14] : (j = (e, t) => {
                let {
                    requestId: n
                } = t;
                if (n === a.current) {
                    if (u(!1), e.verification_status === `verified`) {
                        y(null), h(!1), w.refetch();
                        return
                    }
                    if (e.verification_url != null) {
                        y({
                            verificationId: e.verification_id,
                            verificationUrl: e.verification_url
                        });
                        return
                    }
                    u(!0)
                }
            }, e[13] = w, e[14] = j);
            let M;
            e[15] === Symbol.for(`react.memo_cache_sentinel`) ? (M = (e, t) => {
                let {
                    requestId: n
                } = t;
                n === a.current && u(!0)
            }, e[15] = M) : M = e[15];
            let I;
            e[16] !== A || e[17] !== j ? (I = {
                mutationFn: A,
                onSuccess: j,
                onError: M
            }, e[16] = A, e[17] = j, e[18] = I) : I = e[18];
            let R = ce(I),
                z;
            e[19] !== i || e[20] !== t ? (z = async () => {
                te(!1);
                let {
                    workspace_id: e
                } = await d.safePost(`/sophia/accept_invite`, {
                    requestBody: {
                        account_invite_id: i ?? ``
                    }
                });
                if (te(!0), e != null) try {
                    await de(t, e)
                } catch {}
            }, e[19] = i, e[20] = t, e[21] = z) : z = e[21];
            let B;
            e[22] === Symbol.for(`react.memo_cache_sentinel`) ? (B = () => {
                te(!1)
            }, e[22] = B) : B = e[22];
            let V;
            e[23] === z ? V = e[24] : (V = {
                mutationFn: z,
                onSuccess: he,
                onError: B
            }, e[23] = z, e[24] = V);
            let H = ce(V),
                U = R.isPending,
                W = H.isPending || _,
                ye;
            e[25] !== H.error || e[26] !== H.isError ? (ye = H.isError ? H.error instanceof c && H.error.code === `sci_workspace_membership_conflict` ? (0, F.jsx)(S, {
                id: `chatgpt.sophia.invite.accept_error.workspace_membership`,
                defaultMessage: `You already belong to an Academic Researcher workspace.`
            }) : (0, F.jsx)(S, {
                id: `chatgpt.sophia.invite.accept_error.description`,
                defaultMessage: `We couldn’t accept your invite. Please try again.`
            }) : null, e[25] = H.error, e[26] = H.isError, e[27] = ye) : ye = e[27];
            let G = ye,
                be;
            e[28] === _ ? be = e[29] : (be = _ ? (0, F.jsx)(S, {
                id: `chatgpt.sophia.invite.workspace_switch.status`,
                defaultMessage: `Your invite was accepted. We’re switching you to the workspace. Please keep this page open. This should only take a moment.`
            }) : null, e[28] = _, e[29] = be);
            let K = be,
                xe;
            e[30] === Symbol.for(`react.memo_cache_sentinel`) ? (xe = () => {
                h(!0)
            }, e[30] = xe) : xe = e[30];
            let Se = xe,
                q;
            e[31] === w ? q = e[32] : (q = async () => {
                let e = await w.refetch();
                m(e.data?.metadata?.verification_status === `pending`)
            }, e[31] = w, e[32] = q);
            let Ce = q,
                we;
            e[33] === R ? we = e[34] : (we = e => {
                let t = a.current += 1;
                ne(e), y(null), u(!1), R.mutate({
                    requestId: t,
                    verificationType: e
                })
            }, e[33] = R, e[34] = we);
            let Te = we,
                Ee;
            e[35] === Symbol.for(`react.memo_cache_sentinel`) ? (Ee = e => {
                a.current += 1, ne(e), y(null), u(!1)
            }, e[35] = Ee) : Ee = e[35];
            let De = Ee,
                Oe;
            e[36] === Symbol.for(`react.memo_cache_sentinel`) ? (Oe = () => {
                a.current += 1, ne(null), y(null), u(!1)
            }, e[36] = Oe) : Oe = e[36];
            let ke = Oe,
                J;
            if (i == null) {
                let t;
                e[37] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, F.jsx)(L, {
                    title: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.missing_id.title`,
                        defaultMessage: `This invite link is incomplete`
                    }),
                    description: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.missing_id.description`,
                        defaultMessage: `Open the link from your invitation email and try again.`
                    })
                }), e[37] = t) : t = e[37], J = t
            } else if (w.isPending) {
                let t;
                e[38] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, F.jsx)(L, {
                    icon: (0, F.jsx)(f, {
                        className: `icon-lg text-token-text-secondary`
                    }),
                    title: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.loading.title`,
                        defaultMessage: `Checking your invitation`
                    }),
                    description: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.loading.description`,
                        defaultMessage: `This should only take a moment.`
                    })
                }), e[38] = t) : t = e[38], J = t
            } else if (w.isError) {
                let t, n;
                e[39] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.load_error.title`,
                    defaultMessage: `We couldn’t check your invitation`
                }), n = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.load_error.description`,
                    defaultMessage: `Try checking again.`
                }), e[39] = t, e[40] = n) : (t = e[39], n = e[40]);
                let r;
                e[41] === w ? r = e[42] : (r = () => {
                    w.refetch()
                }, e[41] = w, e[42] = r);
                let i;
                e[43] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.load_error.button.retry`,
                    defaultMessage: `Try again`
                }), e[43] = i) : i = e[43];
                let a;
                e[44] === r ? a = e[45] : (a = (0, F.jsx)(L, {
                    title: t,
                    description: n,
                    action: (0, F.jsx)(g, {
                        color: `primary`,
                        type: `button`,
                        onClick: r,
                        children: i
                    })
                }), e[44] = r, e[45] = a), J = a
            } else if (T?.invite_status === `not_found`) {
                let t;
                e[46] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, F.jsx)(L, {
                    title: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.not_found.title`,
                        defaultMessage: `Invite not found`
                    }),
                    description: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.not_found.description`,
                        defaultMessage: `Ask the workspace owner to send you a new invitation.`
                    })
                }), e[46] = t) : t = e[46], J = t
            } else if (T?.invite_status === `wrong_user`) {
                let t, n, r;
                e[47] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, F.jsx)(s, {
                    "aria-hidden": !0,
                    className: `icon-lg text-token-icon-status-warning`
                }), n = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.wrong_user.title`,
                    defaultMessage: `Sign in with the invited email`
                }), r = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.wrong_user.description`,
                    defaultMessage: `You’re signed in with a different email address. Sign in to ChatGPT with the email address this invitation was sent to, then try again.`
                }), e[47] = t, e[48] = n, e[49] = r) : (t = e[47], n = e[48], r = e[49]);
                let i;
                e[50] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, F.jsx)(L, {
                    icon: t,
                    title: n,
                    description: r,
                    action: (0, F.jsx)(g, {
                        color: `primary`,
                        type: `button`,
                        onClick: ge,
                        children: (0, F.jsx)(S, {
                            id: `chatgpt.sophia.invite.wrong_user.button.switch_account`,
                            defaultMessage: `Switch account`
                        })
                    })
                }), e[50] = i) : i = e[50], J = i
            } else if (T?.invite_status === `expired`) {
                let t;
                e[51] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, F.jsx)(L, {
                    title: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.expired.title`,
                        defaultMessage: `This invite has expired`
                    }),
                    description: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.expired.description`,
                        defaultMessage: `Ask the workspace owner to send you a new invitation.`
                    })
                }), e[51] = t) : t = e[51], J = t
            } else if (T?.invite_status === `accepted`) {
                let t, n;
                e[52] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.accepted.title`,
                    defaultMessage: `You’ve already accepted this invite`
                }), n = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.accepted.description`,
                    defaultMessage: `You can continue to ChatGPT.`
                }), e[52] = t, e[53] = n) : (t = e[52], n = e[53]);
                let r;
                e[54] === H ? r = e[55] : (r = () => H.mutate(), e[54] = H, e[55] = r);
                let i;
                e[56] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.accepted.button.continue`,
                    defaultMessage: `Continue to ChatGPT`
                }), e[56] = i) : i = e[56];
                let a;
                e[57] !== W || e[58] !== r ? (a = (0, F.jsx)(g, {
                    color: `primary`,
                    loading: W,
                    type: `button`,
                    onClick: r,
                    children: i
                }), e[57] = W, e[58] = r, e[59] = a) : a = e[59];
                let o;
                e[60] !== G || e[61] !== a || e[62] !== K ? (o = (0, F.jsx)(L, {
                    title: t,
                    description: n,
                    status: K,
                    action: a,
                    error: G
                }), e[60] = G, e[61] = a, e[62] = K, e[63] = o) : o = e[63], J = o
            } else if (T?.invite_status === `invalid`) {
                let t;
                e[64] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, F.jsx)(L, {
                    title: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.invalid.title`,
                        defaultMessage: `This invite can’t be accepted`
                    }),
                    description: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.invalid.description`,
                        defaultMessage: `Ask the workspace owner to send you a new invitation.`
                    })
                }), e[64] = t) : t = e[64], J = t
            } else if (pe) {
                let t;
                e[65] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, F.jsx)(L, {
                    icon: (0, F.jsx)(s, {
                        "aria-hidden": !0,
                        className: `icon-lg text-token-icon-status-warning`
                    }),
                    title: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.workspace_membership_conflict.title`,
                        defaultMessage: `You can’t join this workspace`
                    }),
                    description: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.workspace_membership_conflict.description`,
                        defaultMessage: `You already belong to an Academic Researcher workspace.`
                    })
                }), e[65] = t) : t = e[65], J = t
            } else if (fe) {
                let t, n;
                e[66] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, F.jsx)(l, {
                    "aria-hidden": !0,
                    className: `icon-lg text-token-text-success`
                }), n = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.ready.title`,
                    defaultMessage: `You’re ready to join`
                }), e[66] = t, e[67] = n) : (t = e[66], n = e[67]);
                let r;
                e[68] === k ? r = e[69] : (r = k === `admin` ? (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.ready.description.admin`,
                    defaultMessage: `Your eligibility was approved by OpenAI. Accept the invite to join the Academic Researcher workspace.`
                }) : (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.ready.description.sheer_id`,
                    defaultMessage: `Your eligibility is verified. Accept the invite to join the Academic Researcher workspace.`
                }), e[68] = k, e[69] = r);
                let i;
                e[70] === H ? i = e[71] : (i = () => H.mutate(), e[70] = H, e[71] = i);
                let a;
                e[72] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.ready.button.accept`,
                    defaultMessage: `Accept invite`
                }), e[72] = a) : a = e[72];
                let o;
                e[73] !== W || e[74] !== i ? (o = (0, F.jsx)(g, {
                    color: `primary`,
                    loading: W,
                    type: `button`,
                    onClick: i,
                    children: a
                }), e[73] = W, e[74] = i, e[75] = o) : o = e[75];
                let s;
                e[76] !== G || e[77] !== r || e[78] !== o || e[79] !== K ? (s = (0, F.jsx)(L, {
                    icon: t,
                    title: n,
                    description: r,
                    status: K,
                    action: o,
                    error: G
                }), e[76] = G, e[77] = r, e[78] = o, e[79] = K, e[80] = s) : s = e[80], J = s
            } else {
                let t;
                e[81] === O ? t = e[82] : (t = O ? (0, F.jsx)(s, {
                    "aria-hidden": !0,
                    className: `icon-lg text-token-icon-status-warning`
                }) : void 0, e[81] = O, e[82] = t);
                let n;
                e[83] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.verify.title`,
                    defaultMessage: `Verify your eligibility`
                }), e[83] = n) : n = e[83];
                let r;
                e[84] !== p || e[85] !== O || e[86] !== D ? (r = O ? (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.verify.error.email_mismatch`,
                    defaultMessage: `The email you used in SheerID doesn’t match this invitation. Contact support to reset your verification before using the invited email address.`
                }) : D === `error` ? (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.verify.error.generic`,
                    defaultMessage: `We couldn’t complete your verification. Contact support if you think this is a mistake.`
                }) : D === `pending` ? p ? (0, F.jsx)(`span`, {
                    role: `status`,
                    children: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.verify.pending_after_check`,
                        defaultMessage: `Your verification is still in progress. Complete it in SheerID, then check again.`
                    })
                }) : (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.verify.pending`,
                    defaultMessage: `Your verification isn’t finished yet. Continue when you’re ready.`
                }) : (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.verify.description`,
                    defaultMessage: `Complete institutional verification with the same email address as this invitation before you can join.`
                }), e[84] = p, e[85] = O, e[86] = D, e[87] = r) : r = e[87];
                let i;
                e[88] !== Ce || e[89] !== w.isFetching || e[90] !== U || e[91] !== D ? (i = D === `error` ? (0, F.jsx)(g, {
                    color: `secondary`,
                    loading: w.isFetching,
                    type: `button`,
                    onClick: () => {
                        Ce()
                    },
                    children: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.verify.button.check_status_after_error`,
                        defaultMessage: `Check verification status`
                    })
                }) : (0, F.jsxs)(`div`, {
                    className: `flex flex-wrap gap-2`,
                    children: [(0, F.jsx)(g, {
                        color: `primary`,
                        loading: U,
                        type: `button`,
                        onClick: Se,
                        children: (0, F.jsx)(S, {
                            id: `chatgpt.sophia.invite.verify.button.continue`,
                            defaultMessage: `Continue verification`
                        })
                    }), (0, F.jsx)(g, {
                        color: `secondary`,
                        loading: w.isFetching,
                        type: `button`,
                        onClick: () => {
                            Ce()
                        },
                        children: (0, F.jsx)(S, {
                            id: `chatgpt.sophia.invite.verify.button.check_status`,
                            defaultMessage: `I’ve completed verification`
                        })
                    })]
                }), e[88] = Ce, e[89] = w.isFetching, e[90] = U, e[91] = D, e[92] = i) : i = e[92];
                let a;
                e[93] === o ? a = e[94] : (a = o ? (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.verify.create_error`,
                    defaultMessage: `We couldn’t start verification. Contact support if you think this is a mistake.`
                }) : null, e[93] = o, e[94] = a);
                let c;
                e[95] !== t || e[96] !== r || e[97] !== i || e[98] !== a ? (c = (0, F.jsx)(L, {
                    icon: t,
                    title: n,
                    description: r,
                    action: i,
                    error: a
                }), e[95] = t, e[96] = r, e[97] = i, e[98] = a, e[99] = c) : c = e[99], J = c
            }
            let Ae;
            e[100] === Symbol.for(`react.memo_cache_sentinel`) ? (Ae = (0, F.jsx)(S, {
                id: `chatgpt.sophia.invite.page.title`,
                defaultMessage: `Join an Academic Researcher workspace`
            }), e[100] = Ae) : Ae = e[100];
            let je;
            e[101] === Symbol.for(`react.memo_cache_sentinel`) ? (je = (0, F.jsx)(`header`, {
                className: `flex h-16 items-center px-6`,
                children: (0, F.jsx)(`a`, {
                    className: `text-token-text-primary text-lg font-semibold tracking-tight`,
                    href: `/`,
                    children: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.header.product_name`,
                        defaultMessage: `ChatGPT`
                    })
                })
            }), e[101] = je) : je = e[101];
            let Me;
            e[102] === Symbol.for(`react.memo_cache_sentinel`) ? (Me = (0, F.jsx)(`h1`, {
                className: `text-3xl leading-9 font-semibold tracking-tight text-balance sm:text-4xl sm:leading-10`,
                children: (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.page.title`,
                    defaultMessage: `Join an Academic Researcher workspace`
                })
            }), e[102] = Me) : Me = e[102];
            let Y;
            e[103] === T ? Y = e[104] : (Y = T?.workspace_name ? (0, F.jsx)(`p`, {
                className: `text-token-text-secondary mt-4 text-lg leading-7`,
                children: (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.page.workspace_name`,
                    defaultMessage: `You’ve been invited to join {workspaceName}.`,
                    values: {
                        workspaceName: T.workspace_name
                    }
                })
            }) : null, e[103] = T, e[104] = Y);
            let X;
            e[105] === J ? X = e[106] : (X = (0, F.jsx)(`div`, {
                className: `mt-8 text-start`,
                children: J
            }), e[105] = J, e[106] = X);
            let Z;
            e[107] !== Y || e[108] !== X ? (Z = (0, F.jsx)(`main`, {
                className: `flex flex-1 items-center justify-center px-6 py-12`,
                children: (0, F.jsxs)(`div`, {
                    className: `w-full max-w-xl text-center`,
                    children: [Me, Y, X]
                })
            }), e[107] = Y, e[108] = X, e[109] = Z) : Z = e[109];
            let Ne = re?.verificationUrl ?? null,
                Pe;
            e[110] === Symbol.for(`react.memo_cache_sentinel`) ? (Pe = () => h(!1), e[110] = Pe) : Pe = e[110];
            let Q;
            e[111] !== v || e[112] !== Te ? (Q = () => {
                v != null && Te(v)
            }, e[111] = v, e[112] = Te, e[113] = Q) : Q = e[113];
            let $;
            e[114] !== o || e[115] !== U || e[116] !== ee || e[117] !== v || e[118] !== Ne || e[119] !== Q ? ($ = (0, F.jsx)(ve, {
                hasError: o,
                isLoading: U,
                isOpen: ee,
                selectedVerificationType: v,
                verificationUrl: Ne,
                onClose: Pe,
                onChooseDifferentOption: ke,
                onStart: Q,
                onSelectVerificationType: De
            }), e[114] = o, e[115] = U, e[116] = ee, e[117] = v, e[118] = Ne, e[119] = Q, e[120] = $) : $ = e[120];
            let Fe;
            return e[121] !== Z || e[122] !== $ ? (Fe = (0, F.jsx)(ue, {
                open: !0,
                onOpenChange: _e,
                accessibleTitle: Ae,
                children: (0, F.jsxs)(ue.Contents, {
                    className: `bg-primary text-token-text-primary flex flex-col`,
                    children: [je, Z, $]
                })
            }), e[121] = Z, e[122] = $, e[123] = Fe) : Fe = e[123], Fe
        }, L = e => {
            "use forget";
            let t = (0, N.c)(17),
                {
                    icon: n,
                    title: r,
                    description: i,
                    status: a,
                    action: o,
                    error: s
                } = e,
                c;
            t[0] !== n || t[1] !== r ? (c = (0, F.jsxs)(`h2`, {
                className: `text-token-text-primary flex items-center gap-2 text-lg font-semibold`,
                children: [n, r]
            }), t[0] = n, t[1] = r, t[2] = c) : c = t[2];
            let l;
            t[3] === i ? l = t[4] : (l = (0, F.jsx)(`p`, {
                className: `text-token-text-secondary mt-2 text-sm leading-6`,
                children: i
            }), t[3] = i, t[4] = l);
            let u;
            t[5] === a ? u = t[6] : (u = a ? (0, F.jsxs)(`div`, {
                className: `border-token-border-light bg-token-bg-secondary text-token-text-primary mt-4 flex items-start gap-2.5 rounded-xl border p-4 text-sm leading-6`,
                role: `status`,
                children: [(0, F.jsx)(f, {
                    "aria-hidden": `true`,
                    className: `icon-sm mt-0.5 shrink-0`
                }), (0, F.jsx)(`p`, {
                    className: `min-w-0`,
                    children: a
                })]
            }) : null, t[5] = a, t[6] = u);
            let d;
            t[7] === s ? d = t[8] : (d = s ? (0, F.jsx)(`p`, {
                className: `text-token-interactive-label-warning-secondary mt-4 text-sm leading-6`,
                role: `alert`,
                children: s
            }) : null, t[7] = s, t[8] = d);
            let p;
            t[9] === o ? p = t[10] : (p = o ? (0, F.jsx)(`div`, {
                className: `mt-5`,
                children: o
            }) : null, t[9] = o, t[10] = p);
            let m;
            return t[11] !== c || t[12] !== l || t[13] !== u || t[14] !== d || t[15] !== p ? (m = (0, F.jsxs)(`section`, {
                className: `border-token-border-light bg-token-bg-primary rounded-2xl border p-6 shadow-sm`,
                children: [c, l, u, d, p]
            }), t[11] = c, t[12] = l, t[13] = u, t[14] = d, t[15] = p, t[16] = m) : m = t[16], m
        }, ve = e => {
            "use forget";
            let t = (0, N.c)(26),
                {
                    hasError: n,
                    isLoading: r,
                    isOpen: i,
                    selectedVerificationType: a,
                    verificationUrl: o,
                    onClose: s,
                    onChooseDifferentOption: c,
                    onStart: l,
                    onSelectVerificationType: u
                } = e,
                d;
            t[0] !== n || t[1] !== r || t[2] !== s || t[3] !== l || t[4] !== a || t[5] !== o ? (d = a == null ? void 0 : o == null ? n ? void 0 : r ? (0, F.jsx)(g, {
                color: `primary`,
                disabled: !0,
                loading: r,
                type: `button`,
                children: (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.modal.button.preparing`,
                    defaultMessage: `Preparing verification…`
                })
            }) : (0, F.jsx)(g, {
                color: `primary`,
                type: `button`,
                onClick: l,
                children: (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.modal.button.start`,
                    defaultMessage: `Continue to verification`
                })
            }) : (0, F.jsx)(g, {
                as: `a`,
                color: `primary`,
                openNewTab: !0,
                rel: `noopener noreferrer`,
                to: o,
                onClick: s,
                children: (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.modal.button.continue`,
                    defaultMessage: `Continue to verification`
                })
            }), t[0] = n, t[1] = r, t[2] = s, t[3] = l, t[4] = a, t[5] = o, t[6] = d) : d = t[6];
            let f = d,
                p;
            t[7] === a ? p = t[8] : (p = a == null ? (0, F.jsx)(S, {
                id: `chatgpt.sophia.invite.modal.verification_type.title`,
                defaultMessage: `Choose how to verify your eligibility`
            }) : (0, F.jsx)(S, {
                id: `chatgpt.sophia.invite.modal.title`,
                defaultMessage: `Before you continue`
            }), t[7] = a, t[8] = p);
            let m;
            t[9] !== n || t[10] !== r || t[11] !== c || t[12] !== s || t[13] !== a || t[14] !== o ? (m = a == null ? (0, F.jsx)(g, {
                color: `secondary`,
                type: `button`,
                onClick: s,
                children: (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.modal.button.cancel`,
                    defaultMessage: `Cancel`
                })
            }) : o == null && !r && !n ? (0, F.jsx)(g, {
                color: `secondary`,
                type: `button`,
                onClick: c,
                children: (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.modal.button.choose_different_option`,
                    defaultMessage: `Choose a different option`
                })
            }) : void 0, t[9] = n, t[10] = r, t[11] = c, t[12] = s, t[13] = a, t[14] = o, t[15] = m) : m = t[15];
            let h;
            t[16] !== u || t[17] !== a ? (h = a == null ? (0, F.jsxs)(`div`, {
                className: `space-y-4`,
                children: [(0, F.jsx)(`p`, {
                    className: `text-token-text-primary text-sm leading-6`,
                    children: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.modal.verification_type.description`,
                        defaultMessage: `To join this Academic Researcher workspace, choose the option that best describes your current status. We’ll use it to open the matching SheerID verification flow. Choosing the wrong option may prevent verification.`
                    })
                }), (0, F.jsxs)(`div`, {
                    className: `space-y-3`,
                    children: [(0, F.jsx)(R, {
                        description: (0, F.jsx)(S, {
                            id: `chatgpt.sophia.invite.modal.verification_type.educator.description`,
                            defaultMessage: `Choose this if you’re eligible through your educator, faculty, or academic staff status.`
                        }),
                        title: (0, F.jsx)(S, {
                            id: `chatgpt.sophia.invite.modal.verification_type.educator.title`,
                            defaultMessage: `I’m an educator`
                        }),
                        onClick: () => u(`educator`)
                    }), (0, F.jsx)(R, {
                        description: (0, F.jsx)(S, {
                            id: `chatgpt.sophia.invite.modal.verification_type.student.description`,
                            defaultMessage: `Choose this if you’re currently enrolled at an eligible educational institution.`
                        }),
                        title: (0, F.jsx)(S, {
                            id: `chatgpt.sophia.invite.modal.verification_type.student.title`,
                            defaultMessage: `I’m a student`
                        }),
                        onClick: () => u(`student`)
                    })]
                }), (0, F.jsx)(`p`, {
                    className: `text-token-text-secondary text-xs leading-5`,
                    children: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.modal.verification_type.note`,
                        defaultMessage: `This choice only affects eligibility verification. It does not change your workspace role.`
                    })
                })]
            }) : (0, F.jsxs)(`div`, {
                className: `space-y-4`,
                children: [(0, F.jsxs)(`div`, {
                    className: `border-token-border-light bg-token-bg-secondary text-token-text-primary flex items-start gap-2.5 rounded-xl border p-4 text-sm leading-5`,
                    children: [(0, F.jsx)(ie, {
                        "aria-hidden": `true`,
                        className: `icon-sm mt-0.5 shrink-0`
                    }), (0, F.jsx)(`p`, {
                        className: `min-w-0`,
                        children: (0, F.jsx)(S, {
                            id: `chatgpt.sophia.invite.modal.email_match_reminder`,
                            defaultMessage: `<strong>Use the same email address as this invitation and your ChatGPT account.</strong> If they’re different, sign in to ChatGPT with the matching account before continuing.`,
                            values: {
                                strong: M
                            }
                        })
                    })]
                }), (0, F.jsx)(`p`, {
                    className: `text-token-text-primary text-sm leading-6`,
                    children: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.modal.new_tab_instructions`,
                        defaultMessage: `Verification will open in a new tab. Return to this page when you’re done.`
                    })
                })]
            }), t[16] = u, t[17] = a, t[18] = h) : h = t[18];
            let _;
            return t[19] !== i || t[20] !== s || t[21] !== f || t[22] !== p || t[23] !== m || t[24] !== h ? (_ = (0, F.jsx)(ee, {
                testId: `modal-sophia-invite-verification-instructions`,
                rootClassName: `z-[130]`,
                isOpen: i,
                onClose: s,
                showCloseButton: !0,
                title: p,
                primaryButton: f,
                secondaryButton: m,
                children: h
            }), t[19] = i, t[20] = s, t[21] = f, t[22] = p, t[23] = m, t[24] = h, t[25] = _) : _ = t[25], _
        }, R = e => {
            "use forget";
            let t = (0, N.c)(8),
                {
                    description: n,
                    title: r,
                    onClick: i
                } = e,
                a;
            t[0] === r ? a = t[1] : (a = (0, F.jsx)(`span`, {
                className: `text-token-text-primary block text-sm font-semibold`,
                children: r
            }), t[0] = r, t[1] = a);
            let o;
            t[2] === n ? o = t[3] : (o = (0, F.jsx)(`span`, {
                className: `text-token-text-secondary mt-1 block text-sm leading-5`,
                children: n
            }), t[2] = n, t[3] = o);
            let s;
            return t[4] !== i || t[5] !== a || t[6] !== o ? (s = (0, F.jsxs)(`button`, {
                className: `border-token-border-light hover:bg-token-bg-secondary focus-visible:ring-token-ring w-full rounded-xl border p-4 text-start transition focus-visible:ring-2 focus-visible:outline-hidden`,
                type: `button`,
                onClick: i,
                children: [a, o]
            }), t[4] = i, t[5] = a, t[6] = o, t[7] = s) : s = t[7], s
        }
    })),
    B, V, H, U, W = e((() => {
        b(), B = E(), z(), V = x(), H = {
            hasRouteMeta: !0,
            useScrollRestoration: !0
        }, U = w(function() {
            "use forget";
            let e = (0, B.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, V.jsx)(I, {}), e[0] = t) : t = e[0], t
        })
    }));
export {
    W as n, U as r, H as t
};
//# sourceMappingURL=39e3b9e4-e6f0dxccv9o3pg5v.js.map