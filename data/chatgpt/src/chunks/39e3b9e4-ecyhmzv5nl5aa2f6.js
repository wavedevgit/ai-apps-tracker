import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aw as r,
    J7 as i,
    Kat as a,
    N4 as o,
    Ow as s,
    P4 as c,
    Q7 as l,
    Qat as u,
    Rz as d,
    cW as f,
    eE as p,
    f0 as m,
    fB as ee,
    lW as h,
    n0 as g,
    oW as _,
    p0 as v,
    pB as te,
    q1 as ne,
    sW as re,
    z1 as y,
    zz as ie
} from "./4813494d-itnrgnth03y1sm9d.js";
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
    s as le,
    wn as E
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Flt as D,
    Nlt as ue
} from "./conversation-small-i79e9c315w50am5f.js";

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
async function de(e, t, n = g) {
    let r = Date.now();
    for (;;) {
        let i = O(r);
        if (i === 0) throw Error(A);
        try {
            await k(e.refetchQueries({
                queryKey: y().queryKey
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
    return v({
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
        N = E(), p(), h(), te(), _(), r(), D(), ie(), j(), m(), u(), c(), l(), le(), P = t(T()), w(), C(), F = b(), I = () => {
            "use forget";
            let e = (0, N.c)(124),
                t = ae(),
                [r] = se(),
                o;
            e[0] === r ? o = e[1] : (o = r.get(`aiId`), e[0] = r, e[1] = o);
            let s = o,
                c = (0, P.useRef)(0),
                [l, u] = (0, P.useState)(!1),
                [p, m] = (0, P.useState)(!1),
                [ee, h] = (0, P.useState)(!1),
                [g, _] = (0, P.useState)(!1),
                [v, te] = (0, P.useState)(null),
                [ne, y] = (0, P.useState)(null),
                ie = s != null,
                b, x;
            e[2] === s ? (b = e[3], x = e[4]) : (b = [`sophia-invite-status`, s], x = () => i.safePost(`/sophia/refresh_invite_status`, {
                requestBody: {
                    account_invite_id: s ?? ``
                }
            }), e[2] = s, e[3] = b, e[4] = x);
            let C;
            e[5] !== ie || e[6] !== b || e[7] !== x ? (C = {
                enabled: ie,
                queryKey: b,
                queryFn: x,
                retry: !1,
                refetchOnWindowFocus: `always`
            }, e[5] = ie, e[6] = b, e[7] = x, e[8] = C) : C = e[8];
            let w = oe(C),
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
            e[11] === s ? A = e[12] : (A = e => {
                let {
                    verificationType: t
                } = e;
                return i.safePost(`/sophia/create_verification`, {
                    requestBody: {
                        redirect_url: window.location.href,
                        ...s == null ? {} : {
                            account_invite_id: s
                        },
                        verification_type: t
                    }
                })
            }, e[11] = s, e[12] = A);
            let j;
            e[13] === w ? j = e[14] : (j = (e, t) => {
                let {
                    requestId: n
                } = t;
                if (n === c.current) {
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
                n === c.current && u(!0)
            }, e[15] = M) : M = e[15];
            let I;
            e[16] !== A || e[17] !== j ? (I = {
                mutationFn: A,
                onSuccess: j,
                onError: M
            }, e[16] = A, e[17] = j, e[18] = I) : I = e[18];
            let R = ce(I),
                z;
            e[19] !== s || e[20] !== t ? (z = async () => {
                _(!1);
                let {
                    workspace_id: e
                } = await i.safePost(`/sophia/accept_invite`, {
                    requestBody: {
                        account_invite_id: s ?? ``
                    }
                });
                if (_(!0), e != null) try {
                    await de(t, e)
                } catch {}
            }, e[19] = s, e[20] = t, e[21] = z) : z = e[21];
            let B;
            e[22] === Symbol.for(`react.memo_cache_sentinel`) ? (B = () => {
                _(!1)
            }, e[22] = B) : B = e[22];
            let V;
            e[23] === z ? V = e[24] : (V = {
                mutationFn: z,
                onSuccess: he,
                onError: B
            }, e[23] = z, e[24] = V);
            let H = ce(V),
                U = R.isPending,
                W = H.isPending || g,
                ye;
            e[25] !== H.error || e[26] !== H.isError ? (ye = H.isError ? H.error instanceof a && H.error.code === `sci_workspace_membership_conflict` ? (0, F.jsx)(S, {
                id: `chatgpt.sophia.invite.accept_error.workspace_membership`,
                defaultMessage: `You already belong to an Academic Researcher workspace.`
            }) : (0, F.jsx)(S, {
                id: `chatgpt.sophia.invite.accept_error.description`,
                defaultMessage: `We couldn’t accept your invite. Please try again.`
            }) : null, e[25] = H.error, e[26] = H.isError, e[27] = ye) : ye = e[27];
            let G = ye,
                be;
            e[28] === g ? be = e[29] : (be = g ? (0, F.jsx)(S, {
                id: `chatgpt.sophia.invite.workspace_switch.status`,
                defaultMessage: `Your invite was accepted. We’re switching you to the workspace. Please keep this page open. This should only take a moment.`
            }) : null, e[28] = g, e[29] = be);
            let K = be,
                xe;
            e[30] === Symbol.for(`react.memo_cache_sentinel`) ? (xe = () => {
                h(!0)
            }, e[30] = xe) : xe = e[30];
            let Se = xe,
                Ce;
            e[31] === w ? Ce = e[32] : (Ce = async () => {
                let e = await w.refetch();
                m(e.data?.metadata?.verification_status === `pending`)
            }, e[31] = w, e[32] = Ce);
            let we = Ce,
                Te;
            e[33] === R ? Te = e[34] : (Te = e => {
                let t = c.current += 1;
                te(e), y(null), u(!1), R.mutate({
                    requestId: t,
                    verificationType: e
                })
            }, e[33] = R, e[34] = Te);
            let Ee = Te,
                De;
            e[35] === Symbol.for(`react.memo_cache_sentinel`) ? (De = e => {
                c.current += 1, te(e), y(null), u(!1)
            }, e[35] = De) : De = e[35];
            let Oe = De,
                ke;
            e[36] === Symbol.for(`react.memo_cache_sentinel`) ? (ke = () => {
                c.current += 1, te(null), y(null), u(!1)
            }, e[36] = ke) : ke = e[36];
            let Ae = ke,
                q;
            if (s == null) {
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
                }), e[37] = t) : t = e[37], q = t
            } else if (w.isPending) {
                let t;
                e[38] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, F.jsx)(L, {
                    icon: (0, F.jsx)(d, {
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
                }), e[38] = t) : t = e[38], q = t
            } else if (w.isError) {
                let t, r;
                e[39] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.load_error.title`,
                    defaultMessage: `We couldn’t check your invitation`
                }), r = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.load_error.description`,
                    defaultMessage: `Try checking again.`
                }), e[39] = t, e[40] = r) : (t = e[39], r = e[40]);
                let i;
                e[41] === w ? i = e[42] : (i = () => {
                    w.refetch()
                }, e[41] = w, e[42] = i);
                let a;
                e[43] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.load_error.button.retry`,
                    defaultMessage: `Try again`
                }), e[43] = a) : a = e[43];
                let o;
                e[44] === i ? o = e[45] : (o = (0, F.jsx)(L, {
                    title: t,
                    description: r,
                    action: (0, F.jsx)(n, {
                        color: `primary`,
                        type: `button`,
                        onClick: i,
                        children: a
                    })
                }), e[44] = i, e[45] = o), q = o
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
                }), e[46] = t) : t = e[46], q = t
            } else if (T?.invite_status === `wrong_user`) {
                let t, r, i;
                e[47] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, F.jsx)(re, {
                    "aria-hidden": !0,
                    className: `icon-lg text-token-icon-status-warning`
                }), r = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.wrong_user.title`,
                    defaultMessage: `Sign in with the invited email`
                }), i = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.wrong_user.description`,
                    defaultMessage: `You’re signed in with a different email address. Sign in to ChatGPT with the email address this invitation was sent to, then try again.`
                }), e[47] = t, e[48] = r, e[49] = i) : (t = e[47], r = e[48], i = e[49]);
                let a;
                e[50] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, F.jsx)(L, {
                    icon: t,
                    title: r,
                    description: i,
                    action: (0, F.jsx)(n, {
                        color: `primary`,
                        type: `button`,
                        onClick: ge,
                        children: (0, F.jsx)(S, {
                            id: `chatgpt.sophia.invite.wrong_user.button.switch_account`,
                            defaultMessage: `Switch account`
                        })
                    })
                }), e[50] = a) : a = e[50], q = a
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
                }), e[51] = t) : t = e[51], q = t
            } else if (T?.invite_status === `accepted`) {
                let t, r;
                e[52] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.accepted.title`,
                    defaultMessage: `You’ve already accepted this invite`
                }), r = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.accepted.description`,
                    defaultMessage: `You can continue to ChatGPT.`
                }), e[52] = t, e[53] = r) : (t = e[52], r = e[53]);
                let i;
                e[54] === H ? i = e[55] : (i = () => H.mutate(), e[54] = H, e[55] = i);
                let a;
                e[56] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.accepted.button.continue`,
                    defaultMessage: `Continue to ChatGPT`
                }), e[56] = a) : a = e[56];
                let o;
                e[57] !== W || e[58] !== i ? (o = (0, F.jsx)(n, {
                    color: `primary`,
                    loading: W,
                    type: `button`,
                    onClick: i,
                    children: a
                }), e[57] = W, e[58] = i, e[59] = o) : o = e[59];
                let s;
                e[60] !== G || e[61] !== o || e[62] !== K ? (s = (0, F.jsx)(L, {
                    title: t,
                    description: r,
                    status: K,
                    action: o,
                    error: G
                }), e[60] = G, e[61] = o, e[62] = K, e[63] = s) : s = e[63], q = s
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
                }), e[64] = t) : t = e[64], q = t
            } else if (pe) {
                let t;
                e[65] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, F.jsx)(L, {
                    icon: (0, F.jsx)(re, {
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
                }), e[65] = t) : t = e[65], q = t
            } else if (fe) {
                let t, r;
                e[66] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, F.jsx)(f, {
                    "aria-hidden": !0,
                    className: `icon-lg text-token-text-success`
                }), r = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.ready.title`,
                    defaultMessage: `You’re ready to join`
                }), e[66] = t, e[67] = r) : (t = e[66], r = e[67]);
                let i;
                e[68] === k ? i = e[69] : (i = k === `admin` ? (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.ready.description.admin`,
                    defaultMessage: `Your eligibility was approved by OpenAI. Accept the invite to join the Academic Researcher workspace.`
                }) : (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.ready.description.sheer_id`,
                    defaultMessage: `Your eligibility is verified. Accept the invite to join the Academic Researcher workspace.`
                }), e[68] = k, e[69] = i);
                let a;
                e[70] === H ? a = e[71] : (a = () => H.mutate(), e[70] = H, e[71] = a);
                let o;
                e[72] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.ready.button.accept`,
                    defaultMessage: `Accept invite`
                }), e[72] = o) : o = e[72];
                let s;
                e[73] !== W || e[74] !== a ? (s = (0, F.jsx)(n, {
                    color: `primary`,
                    loading: W,
                    type: `button`,
                    onClick: a,
                    children: o
                }), e[73] = W, e[74] = a, e[75] = s) : s = e[75];
                let c;
                e[76] !== G || e[77] !== i || e[78] !== s || e[79] !== K ? (c = (0, F.jsx)(L, {
                    icon: t,
                    title: r,
                    description: i,
                    status: K,
                    action: s,
                    error: G
                }), e[76] = G, e[77] = i, e[78] = s, e[79] = K, e[80] = c) : c = e[80], q = c
            } else {
                let t;
                e[81] === O ? t = e[82] : (t = O ? (0, F.jsx)(re, {
                    "aria-hidden": !0,
                    className: `icon-lg text-token-icon-status-warning`
                }) : void 0, e[81] = O, e[82] = t);
                let r;
                e[83] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.verify.title`,
                    defaultMessage: `Verify your eligibility`
                }), e[83] = r) : r = e[83];
                let i;
                e[84] !== p || e[85] !== O || e[86] !== D ? (i = O ? (0, F.jsx)(S, {
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
                }), e[84] = p, e[85] = O, e[86] = D, e[87] = i) : i = e[87];
                let a;
                e[88] !== we || e[89] !== w.isFetching || e[90] !== U || e[91] !== D ? (a = D === `error` ? (0, F.jsx)(n, {
                    color: `secondary`,
                    loading: w.isFetching,
                    type: `button`,
                    onClick: () => {
                        we()
                    },
                    children: (0, F.jsx)(S, {
                        id: `chatgpt.sophia.invite.verify.button.check_status_after_error`,
                        defaultMessage: `Check verification status`
                    })
                }) : (0, F.jsxs)(`div`, {
                    className: `flex flex-wrap gap-2`,
                    children: [(0, F.jsx)(n, {
                        color: `primary`,
                        loading: U,
                        type: `button`,
                        onClick: Se,
                        children: (0, F.jsx)(S, {
                            id: `chatgpt.sophia.invite.verify.button.continue`,
                            defaultMessage: `Continue verification`
                        })
                    }), (0, F.jsx)(n, {
                        color: `secondary`,
                        loading: w.isFetching,
                        type: `button`,
                        onClick: () => {
                            we()
                        },
                        children: (0, F.jsx)(S, {
                            id: `chatgpt.sophia.invite.verify.button.check_status`,
                            defaultMessage: `I’ve completed verification`
                        })
                    })]
                }), e[88] = we, e[89] = w.isFetching, e[90] = U, e[91] = D, e[92] = a) : a = e[92];
                let o;
                e[93] === l ? o = e[94] : (o = l ? (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.verify.create_error`,
                    defaultMessage: `We couldn’t start verification. Contact support if you think this is a mistake.`
                }) : null, e[93] = l, e[94] = o);
                let s;
                e[95] !== t || e[96] !== i || e[97] !== a || e[98] !== o ? (s = (0, F.jsx)(L, {
                    icon: t,
                    title: r,
                    description: i,
                    action: a,
                    error: o
                }), e[95] = t, e[96] = i, e[97] = a, e[98] = o, e[99] = s) : s = e[99], q = s
            }
            let J;
            e[100] === Symbol.for(`react.memo_cache_sentinel`) ? (J = (0, F.jsx)(S, {
                id: `chatgpt.sophia.invite.page.title`,
                defaultMessage: `Join an Academic Researcher workspace`
            }), e[100] = J) : J = e[100];
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
            e[105] === q ? X = e[106] : (X = (0, F.jsx)(`div`, {
                className: `mt-8 text-start`,
                children: q
            }), e[105] = q, e[106] = X);
            let Z;
            e[107] !== Y || e[108] !== X ? (Z = (0, F.jsx)(`main`, {
                className: `flex flex-1 items-center justify-center px-6 py-12`,
                children: (0, F.jsxs)(`div`, {
                    className: `w-full max-w-xl text-center`,
                    children: [Me, Y, X]
                })
            }), e[107] = Y, e[108] = X, e[109] = Z) : Z = e[109];
            let Ne = ne?.verificationUrl ?? null,
                Pe;
            e[110] === Symbol.for(`react.memo_cache_sentinel`) ? (Pe = () => h(!1), e[110] = Pe) : Pe = e[110];
            let Q;
            e[111] !== v || e[112] !== Ee ? (Q = () => {
                v != null && Ee(v)
            }, e[111] = v, e[112] = Ee, e[113] = Q) : Q = e[113];
            let $;
            e[114] !== l || e[115] !== U || e[116] !== ee || e[117] !== v || e[118] !== Ne || e[119] !== Q ? ($ = (0, F.jsx)(ve, {
                hasError: l,
                isLoading: U,
                isOpen: ee,
                selectedVerificationType: v,
                verificationUrl: Ne,
                onClose: Pe,
                onChooseDifferentOption: Ae,
                onStart: Q,
                onSelectVerificationType: Oe
            }), e[114] = l, e[115] = U, e[116] = ee, e[117] = v, e[118] = Ne, e[119] = Q, e[120] = $) : $ = e[120];
            let Fe;
            return e[121] !== Z || e[122] !== $ ? (Fe = (0, F.jsx)(ue, {
                open: !0,
                onOpenChange: _e,
                accessibleTitle: J,
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
                children: [(0, F.jsx)(d, {
                    "aria-hidden": `true`,
                    className: `icon-sm mt-0.5 shrink-0`
                }), (0, F.jsx)(`p`, {
                    className: `min-w-0`,
                    children: a
                })]
            }) : null, t[5] = a, t[6] = u);
            let f;
            t[7] === s ? f = t[8] : (f = s ? (0, F.jsx)(`p`, {
                className: `text-token-interactive-label-warning-secondary mt-4 text-sm leading-6`,
                role: `alert`,
                children: s
            }) : null, t[7] = s, t[8] = f);
            let p;
            t[9] === o ? p = t[10] : (p = o ? (0, F.jsx)(`div`, {
                className: `mt-5`,
                children: o
            }) : null, t[9] = o, t[10] = p);
            let m;
            return t[11] !== c || t[12] !== l || t[13] !== u || t[14] !== f || t[15] !== p ? (m = (0, F.jsxs)(`section`, {
                className: `border-token-border-light bg-token-bg-primary rounded-2xl border p-6 shadow-sm`,
                children: [c, l, u, f, p]
            }), t[11] = c, t[12] = l, t[13] = u, t[14] = f, t[15] = p, t[16] = m) : m = t[16], m
        }, ve = e => {
            "use forget";
            let t = (0, N.c)(26),
                {
                    hasError: r,
                    isLoading: i,
                    isOpen: a,
                    selectedVerificationType: o,
                    verificationUrl: c,
                    onClose: l,
                    onChooseDifferentOption: u,
                    onStart: d,
                    onSelectVerificationType: f
                } = e,
                p;
            t[0] !== r || t[1] !== i || t[2] !== l || t[3] !== d || t[4] !== o || t[5] !== c ? (p = o == null ? void 0 : c == null ? r ? void 0 : i ? (0, F.jsx)(n, {
                color: `primary`,
                disabled: !0,
                loading: i,
                type: `button`,
                children: (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.modal.button.preparing`,
                    defaultMessage: `Preparing verification…`
                })
            }) : (0, F.jsx)(n, {
                color: `primary`,
                type: `button`,
                onClick: d,
                children: (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.modal.button.start`,
                    defaultMessage: `Continue to verification`
                })
            }) : (0, F.jsx)(n, {
                as: `a`,
                color: `primary`,
                openNewTab: !0,
                rel: `noopener noreferrer`,
                to: c,
                onClick: l,
                children: (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.modal.button.continue`,
                    defaultMessage: `Continue to verification`
                })
            }), t[0] = r, t[1] = i, t[2] = l, t[3] = d, t[4] = o, t[5] = c, t[6] = p) : p = t[6];
            let m = p,
                h;
            t[7] === o ? h = t[8] : (h = o == null ? (0, F.jsx)(S, {
                id: `chatgpt.sophia.invite.modal.verification_type.title`,
                defaultMessage: `Choose how to verify your eligibility`
            }) : (0, F.jsx)(S, {
                id: `chatgpt.sophia.invite.modal.title`,
                defaultMessage: `Before you continue`
            }), t[7] = o, t[8] = h);
            let g;
            t[9] !== r || t[10] !== i || t[11] !== u || t[12] !== l || t[13] !== o || t[14] !== c ? (g = o == null ? (0, F.jsx)(n, {
                color: `secondary`,
                type: `button`,
                onClick: l,
                children: (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.modal.button.cancel`,
                    defaultMessage: `Cancel`
                })
            }) : c == null && !i && !r ? (0, F.jsx)(n, {
                color: `secondary`,
                type: `button`,
                onClick: u,
                children: (0, F.jsx)(S, {
                    id: `chatgpt.sophia.invite.modal.button.choose_different_option`,
                    defaultMessage: `Choose a different option`
                })
            }) : void 0, t[9] = r, t[10] = i, t[11] = u, t[12] = l, t[13] = o, t[14] = c, t[15] = g) : g = t[15];
            let _;
            t[16] !== f || t[17] !== o ? (_ = o == null ? (0, F.jsxs)(`div`, {
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
                        onClick: () => f(`educator`)
                    }), (0, F.jsx)(R, {
                        description: (0, F.jsx)(S, {
                            id: `chatgpt.sophia.invite.modal.verification_type.student.description`,
                            defaultMessage: `Choose this if you’re currently enrolled at an eligible educational institution.`
                        }),
                        title: (0, F.jsx)(S, {
                            id: `chatgpt.sophia.invite.modal.verification_type.student.title`,
                            defaultMessage: `I’m a student`
                        }),
                        onClick: () => f(`student`)
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
                    children: [(0, F.jsx)(ee, {
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
            }), t[16] = f, t[17] = o, t[18] = _) : _ = t[18];
            let v;
            return t[19] !== a || t[20] !== l || t[21] !== m || t[22] !== h || t[23] !== g || t[24] !== _ ? (v = (0, F.jsx)(s, {
                testId: `modal-sophia-invite-verification-instructions`,
                rootClassName: `z-[130]`,
                isOpen: a,
                onClose: l,
                showCloseButton: !0,
                title: h,
                primaryButton: m,
                secondaryButton: g,
                children: _
            }), t[19] = a, t[20] = l, t[21] = m, t[22] = h, t[23] = g, t[24] = _, t[25] = v) : v = t[25], v
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
        C(), B = E(), z(), V = b(), H = {
            hasRouteMeta: !0,
            useScrollRestoration: !0
        }, U = x(function() {
            "use forget";
            let e = (0, B.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, V.jsx)(I, {}), e[0] = t) : t = e[0], t
        })
    }));
export {
    W as n, U as r, H as t
};
//# sourceMappingURL=39e3b9e4-ecyhmzv5nl5aa2f6.js.map