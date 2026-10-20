const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/fbf44c55-gmoc79u0p3c9uv7d.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-oc6d2eodbcrmxur3.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $D as r,
    $G as i,
    A5 as a,
    BU as o,
    BV as s,
    Bnt as c,
    Bst as l,
    CE as u,
    DD as d,
    EV as f,
    F7 as p,
    FO as m,
    Fw as h,
    G5 as g,
    HO as _,
    I1 as ee,
    IV as te,
    J0 as ne,
    JD as re,
    JT as ie,
    JV as v,
    K5 as y,
    KD as ae,
    KO as oe,
    Knt as b,
    LV as se,
    M1 as ce,
    MV as x,
    Mz as le,
    Nw as S,
    Nz as ue,
    OS as de,
    PO as fe,
    PS as pe,
    QD as me,
    RU as he,
    SD as ge,
    Sh as _e,
    Sw as C,
    TE as ve,
    TV as ye,
    VO as be,
    VV as xe,
    XV as w,
    Xy as Se,
    Y0 as T,
    Y1 as Ce,
    YV as we,
    Yy as Te,
    Zst as E,
    _D as D,
    _R as O,
    b2 as k,
    cK as Ee,
    cW as A,
    dD as j,
    f8 as De,
    gN as M,
    gh as Oe,
    hN as N,
    it as ke,
    j7 as Ae,
    jV as P,
    lD as je,
    lK as Me,
    lW as Ne,
    nK as Pe,
    nt as Fe,
    ot as Ie,
    qD as Le,
    qT as F,
    tt as I,
    vh as Re,
    wE as ze,
    wV as L,
    ww as Be,
    y2 as Ve,
    yR as He,
    zU as Ue
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as R,
    In as z,
    Ln as We,
    N as Ge,
    Nn as B,
    O as Ke,
    Rn as V,
    Vn as qe,
    cn as Je,
    ln as Ye,
    s as Xe,
    wn as Ze,
    zn as H
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gh as Qe,
    Hst as $e,
    IHn as et,
    Kh as tt,
    LHn as U,
    RHn as nt,
    S6t as rt,
    Vst as it,
    aMt as at,
    bCn as ot,
    g6t as st,
    gCn as ct,
    iMt as lt,
    rMt as ut,
    tMt as dt
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Am as ft,
    By as pt,
    Ef as mt,
    FS as ht,
    Fx as gt,
    IS as _t,
    Ix as vt,
    Mv as yt,
    Nv as bt,
    Rv as xt,
    Tf as St,
    Vy as Ct,
    dS as wt,
    jm as Tt,
    uS as Et,
    vv as Dt,
    yv as Ot,
    zv as kt
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    d_ as W,
    f_ as At,
    hm as jt,
    mm as Mt
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";
import {
    n as Nt,
    t as Pt
} from "./92b4bb27-igs65ezs5avd5ybv.js";
import {
    n as Ft,
    r as It
} from "./3d705e5d-is2nynkj0c3lzm98.js";

function Lt(e) {
    return e === x.User || e === x.Group ? x.Private : e === x.WorkspaceLink ? x.Workspace : e
}

function G(e, t) {
    return e = Lt(e), t !== void 0 && t.some(t => t.recipient === e && t.allowed)
}

function Rt(e, t) {
    return t === void 0 ? [] : (e = Lt(e), t.find(t => t.recipient === e)?.moderated_fields ?? void 0)
}

function zt(e, t) {
    let n = Rt(e, t);
    return n != null && n.length > 0
}
var Bt = e((() => {
    s()
}));

function Vt(e) {
    if (!e) return;
    let t = e.gizmo.appeal_info?.state.kind === `appeal_sent`,
        n = Ht(e.gizmo.share_recipient, e.gizmo.sharing_targets ?? void 0);
    return {
        sharingRecipient: e.gizmo.share_recipient,
        categories: e.gizmo.display.categories,
        gizmoId: e.gizmo.id,
        moderationType: n,
        sharingTargets: e.gizmo.sharing_targets ?? void 0,
        showModal: t ? 2 : n === 0 ? 0 : 1
    }
}

function Ht(e, t = []) {
    let n = new Set(t.filter(e => e.allowed).map(e => e.recipient));
    if (!e || (e in nn && (e = nn[e]), n.has(e))) return 0;
    let r = n.has(x.Private) || n.has(x.Workspace),
        i = n.has(x.Link) || n.has(x.Marketplace);
    return e === x.Marketplace && i ? 2 : !i && r ? 3 : 4
}

function Ut(e) {
    switch (e) {
        case 0:
        case 1:
            return z({
                id: `gizmo.appeals.publishBlockedTitle`,
                defaultMessage: `Your changes couldn’t be published`
            });
        case 2:
            return z({
                id: `gizmo.appeals.removedFromMarketplaceTitle`,
                defaultMessage: `Your GPT has been removed from the marketplace`
            });
        case 3:
            return z({
                id: `gizmo.appeals.removedFromPublicTitle`,
                defaultMessage: `Your GPT has been removed from public view`
            });
        case 4:
            return z({
                id: `gizmo.appeals.removedFromPrivateTitle`,
                defaultMessage: `Your GPT has been removed from private view`
            });
        case 5:
            return z({
                id: `gizmo.appeals.recategorizedTitle`,
                defaultMessage: `Your GPT has been recategorized`
            })
    }
}

function Wt(e) {
    switch (e) {
        case `profile_picture`:
            return z({
                id: `gizmo.appeals.profilePictureFieldName`,
                defaultMessage: `Profile Picture`
            });
        case `gizmo_name`:
            return z({
                id: `gizmo.appeals.gizmoNameFieldName`,
                defaultMessage: `Name`
            });
        case `gizmo_description`:
            return z({
                id: `gizmo.appeals.gizmoDescriptionFieldName`,
                defaultMessage: `Description`
            });
        case `gizmo_instructions`:
            return z({
                id: `gizmo.appeals.gizmoInstructionsFieldName`,
                defaultMessage: `Instructions`
            });
        case `gizmo_welcome_message`:
            return z({
                id: `gizmo.appeals.gizmoWelcomeMessageFieldName`,
                defaultMessage: `Welcome Message`
            });
        case `custom_actions`:
            return z({
                id: `gizmo.appeals.customActionsFieldName`,
                defaultMessage: `Custom Actions`
            });
        case `conversation_starter`:
            return z({
                id: `gizmo.appeals.conversationStarterFieldName`,
                defaultMessage: `Conversation Starter`
            });
        case `file`:
            return z({
                id: `gizmo.appeals.fileFieldName`,
                defaultMessage: `File`
            });
        case `gizmo_combined_content`:
            return z({
                id: `gizmo.appeals.gizmoCombinedContentFieldName`,
                defaultMessage: `GPT Content`
            });
        default:
            throw Error(`Unhandled moderation field: ${e}`)
    }
}

function Gt(e) {
    switch (e) {
        case x.Email:
        case x.Private:
        case x.Workspace:
            return z({
                id: `gizmo.appeals.privateRecipientModerationText`,
                defaultMessage: `Your GPT can’t be updated because it violates our {usagePolicyLink}Usage Policies{usagePolicyLink}.`
            });
        case x.Link:
            return z({
                id: `gizmo.appeals.linkRecipientModerationText`,
                defaultMessage: `Your GPT can’t be shared publicly because it violates our {usagePolicyLink}Usage Policies{usagePolicyLink}.`
            });
        case x.Marketplace:
            return z({
                id: `gizmo.appeals.marketplaceRecipientModerationText`,
                defaultMessage: `Your GPT can’t appear in the Explore GPTs page because it violates our {usagePolicyLink}Usage Policies{usagePolicyLink}.`
            });
        default:
            (0, Zt.default)(e)
    }
}

function Kt({
    sharingRecipient: e,
    moderatedFields: t,
    appealAvailable: n
}) {
    let r = t.length;
    return (0, q.jsxs)(q.Fragment, {
        children: [(0, q.jsxs)(`p`, {
            children: [(0, q.jsx)(B, {
                ...Gt(e),
                values: {
                    usagePolicyLink: e => (0, q.jsx)(Qt, {
                        target: `_blank`,
                        href: `https://openai.com/policies/usage-policies`,
                        rel: `noreferrer`,
                        children: e
                    })
                }
            }), ` `, r > 0 && (0, q.jsx)(B, {
                id: `gizmo.appeals.seeBelowForSpecificIssues`,
                defaultMessage: `{numModeratedFields, plural,
              one {See below for the specific issue:}
              other {See below for the specific issues:}
            }`,
                values: {
                    numModeratedFields: r
                }
            })]
        }), r > 0 && t?.map(e => (0, q.jsxs)(q.Fragment, {
            children: [(0, q.jsx)(`p`, {
                className: `font-bold`,
                children: (0, q.jsx)(B, {
                    ...Wt(e.name)
                })
            }), (0, q.jsx)(`ul`, {
                className: `list-disc ps-5`,
                children: e.reasons.map(e => (0, q.jsxs)(`li`, {
                    children: [e.description, ` `, e.link ? (0, q.jsx)(Qt, {
                        href: e.link,
                        target: `_blank`,
                        rel: `noreferrer`,
                        children: (0, q.jsx)(B, {
                            id: `gizmo.appeals.learnMore`,
                            defaultMessage: `Learn more`
                        })
                    }) : ``]
                }, e.description))
            })]
        })), n && (0, q.jsx)(`p`, {
            children: (0, q.jsx)(B, {
                id: `gizmo.appeals.appealAvailableText`,
                defaultMessage: `If you think this was a mistake, use the appeal link in the email we sent you. Or you can publish to “Only me” and use this GPT privately.`
            })
        })]
    })
}

function qt({
    gizmoId: e,
    sharingRecipient: t,
    categories: n,
    moderationType: r,
    sharingTargets: i,
    appealAvailable: a,
    onClose: o,
    onAppealSubmitted: s
}) {
    let c = H(),
        [l, u] = (0, K.useState)(``),
        [d, f] = (0, K.useState)(0),
        [p, m] = (0, K.useState)(!1),
        h = Ge(),
        g = async () => {
            m(!0);
            try {
                await fe.postGizmoAppeal(h, e, l, t, n), f(2), s?.()
            } finally {
                m(!1)
            }
        }, _ = Rt(t, i), ee = _?.length ?? 0, te = ce();
    if (ee === 0 && te?.isEnterprisey()) return (0, q.jsx)(C, {
        testId: `modal-gizmo-appeal-available`,
        title: c.formatMessage(Ut(r)),
        isOpen: !0,
        onClose: o,
        showCloseButton: !0,
        type: `warning`,
        primaryButton: (0, q.jsx)(S.Button, {
            color: `primary`,
            onClick: o,
            children: (0, q.jsx)(B, {
                id: `wEsAOU`,
                defaultMessage: `OK`
            })
        }),
        children: (0, q.jsx)(`p`, {
            className: `text-sm`,
            children: (0, q.jsx)(B, {
                id: `gizmo.appeals.workspaceSettingsMessage`,
                defaultMessage: `Access to your GPT has been reduced by your workspace's GPT sharing settings. An owner of the workspace can change these settings in the workspace settings page.`
            })
        })
    });
    switch (d) {
        case 0:
            return (0, q.jsx)(C, {
                testId: `modal-gizmo-appeal-available`,
                title: c.formatMessage(Ut(r)),
                isOpen: !0,
                onClose: o,
                showCloseButton: !0,
                primaryButton: (0, q.jsx)(S.Button, {
                    color: `primary`,
                    onClick: o,
                    children: (0, q.jsx)(B, {
                        id: `gizmo.appeals.contunueButton`,
                        defaultMessage: `Continue`
                    })
                }),
                type: `warning`,
                children: (0, q.jsx)(`div`, {
                    className: `flex flex-col gap-2 text-sm`,
                    children: (0, q.jsx)(Kt, {
                        sharingRecipient: t,
                        moderatedFields: _ ?? [],
                        appealAvailable: a
                    })
                })
            });
        case 1:
            return (0, q.jsx)(C, {
                testId: `modal-gizmo-appeal-form`,
                title: c.formatMessage({
                    id: `gizmo.appeals.appealModalTitle`,
                    defaultMessage: `Appeal`
                }),
                isOpen: !0,
                onClose: o,
                showCloseButton: !0,
                shouldIgnoreClickOutside: !0,
                primaryButton: (0, q.jsx)(S.Button, {
                    color: `primary`,
                    onClick: g,
                    disabled: p || l.trim().length === 0,
                    children: (0, q.jsx)(B, {
                        id: `gizmo.appeals.submitAppealButton`,
                        defaultMessage: `Submit`
                    })
                }),
                secondaryButton: (0, q.jsx)(S.Button, {
                    onClick: () => f(0),
                    children: (0, q.jsx)(B, {
                        id: `gizmo.appeals.backButton`,
                        defaultMessage: `Back`
                    })
                }),
                type: `warning`,
                children: (0, q.jsxs)(`div`, {
                    className: `flex flex-col gap-2 text-sm`,
                    children: [(0, q.jsx)(`p`, {
                        children: (0, q.jsx)(B, {
                            id: `gizmo.appeals.appealReasonText`,
                            defaultMessage: `Please provide a reason for why you believe this GPT doesn’t violate our policies and should be published`
                        })
                    }), (0, q.jsx)($t, {
                        value: l,
                        onChange: e => u(e.target.value)
                    })]
                })
            });
        case 2:
            return (0, q.jsx)(q.Fragment, {})
    }
}

function Jt({
    onClose: e
}) {
    return (0, q.jsx)(C, {
        testId: `modal-gizmo-appeal-submitted`,
        title: H().formatMessage({
            id: `gizmo.appeals.appealSubmittedModalTitle`,
            defaultMessage: `Appeal submitted`
        }),
        isOpen: !0,
        onClose: e,
        showCloseButton: !0,
        primaryButton: (0, q.jsx)(S.Button, {
            color: `primary`,
            onClick: e,
            children: (0, q.jsx)(B, {
                id: `gizmo.appeals.closeButton`,
                defaultMessage: `Close`
            })
        }),
        type: `success`,
        children: (0, q.jsx)(`div`, {
            className: `flex flex-col gap-2 text-sm`,
            children: (0, q.jsx)(`div`, {
                children: (0, q.jsx)(B, {
                    id: `gizmo.appeals.appealSubmittedText`,
                    defaultMessage: `Your appeal has been submitted. We will get back to you as soon as possible.`
                })
            })
        })
    })
}

function Yt({
    gizmoId: e,
    onClose: t
}) {
    let n = a(() => je(e).data),
        r = Ge(),
        i = async () => {
            await fe.postGizmoCancelAppeal(r, e)
        };
    return (0, q.jsx)(C, {
        testId: `modal-gizmo-appeal-sent`,
        isOpen: !0,
        onClose: M,
        primaryButton: (0, q.jsx)(S.Button, {
            color: `primary`,
            onClick: () => {
                i(), t?.()
            },
            children: (0, q.jsx)(B, {
                id: `gizmo.appeals.cancelAppealButton`,
                defaultMessage: `Cancel appeal`
            })
        }),
        type: `warning`,
        children: (0, q.jsxs)(`div`, {
            className: `flex flex-col gap-2 text-sm`,
            children: [(0, q.jsx)(`h2`, {
                className: `text-lg font-semibold`,
                children: (0, q.jsx)(B, {
                    id: `gizmo.appeals.appealReviewingHeader`,
                    defaultMessage: `Reviewing your appeal`
                })
            }), (0, q.jsx)(`p`, {
                children: (0, q.jsx)(B, {
                    id: `gizmo.appeals.appealSentModalText`,
                    defaultMessage: `During the review you can continue using “{gizmoName}” as your private GPT, but won’t be able to update it or share it with others.`,
                    values: {
                        gizmoName: n?.gizmo.display.name
                    }
                })
            })]
        })
    })
}

function Xt({
    appealState: e,
    onAppealClose: t,
    onAppealSubmitted: n
}) {
    let r = c(`4226692983`),
        [i, a] = (0, K.useState)(!1);
    return i ? (0, q.jsx)(Jt, {
        onClose: () => {
            a(!1), n?.()
        }
    }) : (0, q.jsxs)(q.Fragment, {
        children: [e?.showModal === 2 && (0, q.jsx)(Yt, {
            gizmoId: e.gizmoId,
            onClose: t
        }), e?.showModal === 1 && (0, q.jsx)(qt, {
            gizmoId: e.gizmoId,
            sharingRecipient: e.sharingRecipient,
            categories: e.categories,
            moderationType: e.moderationType,
            sharingTargets: e.sharingTargets,
            appealAvailable: r,
            onClose: () => t?.(),
            onAppealSubmitted: () => a(!0)
        })]
    })
}
var Zt, K, q, Qt, $t, en, tn, nn, rn = e((() => {
    h(), Be(), j(), m(), s(), De(), ee(), b(), Xe(), Zt = n(ve()), N(), K = n(qe()), V(), ze(), Bt(), q = R(), Qt = u.a`bold underline`, $t = u.textarea`w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32`, en = function(e) {
        return e[e.None = 0] = `None`, e[e.AppealAvailable = 1] = `AppealAvailable`, e[e.AppealSent = 2] = `AppealSent`, e
    }({}), tn = function(e) {
        return e[e.None = 0] = `None`, e[e.PublishBlocked = 1] = `PublishBlocked`, e[e.RemovedFromMarketplace = 2] = `RemovedFromMarketplace`, e[e.RemovedFromPublic = 3] = `RemovedFromPublic`, e[e.RemovedFromPrivate = 4] = `RemovedFromPrivate`, e[e.Recategorized = 5] = `Recategorized`, e
    }({}), nn = {
        [x.User]: x.Private,
        [x.Group]: x.Private,
        [x.Email]: x.Private,
        [x.WorkspaceLink]: x.Workspace
    }
}));

function an(e, t) {
    if (t == null) return e;

    function n(e) {
        return typeof e == `object` && e ? Array.isArray(e) ? e.map(n) : Object.fromEntries(Object.entries(e).map(([e, t]) => [e, n(t)])) : e === null ? void 0 : e
    }
    return t = n(t), {
        ...e,
        ...t
    }
}

function on(e) {
    switch (e) {
        case 0:
            return `Loading`;
        case 1:
            return `Uploading profile picture`;
        case 2:
            return `Generating profile picture`;
        case 3:
            return `GPT name too long`;
        case 4:
            return `GPT description too long`;
        case 5:
            return `GPT instructions too long`;
        case 6:
            return `GPT name cannot be empty`;
        case 7:
            return `Public actions require valid privacy policy URLs`;
        case 8:
            return `Public GPTs must have a category`
    }
}

function sn(e) {
    return e === `link` || e === `marketplace`
}

function cn(e) {
    try {
        return new URL(e), !0
    } catch {
        return !1
    }
}

function ln(e, t, n) {
    let r = e.name.length > 50,
        i = (e.description?.length ?? 0) > 300,
        a = (e.instructions?.length ?? 0) > dt,
        o = [];
    if (e?.name === `` && o.push(6), r && o.push(3), i && o.push(4), a && o.push(5), t != null && sn(t)) {
        let t = e.tools?.filter(e => e.type === l.JIT_PLUGIN);
        for (let e of t) {
            let t = e.metadata?.privacy_policy_url;
            if (t == null || !cn(t)) {
                o.push(7);
                break
            }
        }
    }
    return t === x.Marketplace && n == null && o.push(8), o
}
var un, dn, fn, pn = e((() => {
    E(), s(), ut(), V(), un = function(e) {
        return e[e.Loading = 0] = `Loading`, e[e.UploadingProfilePic = 1] = `UploadingProfilePic`, e[e.GeneratingProfilePic = 2] = `GeneratingProfilePic`, e[e.GizmoNameTooLong = 3] = `GizmoNameTooLong`, e[e.GizmoDescriptionTooLong = 4] = `GizmoDescriptionTooLong`, e[e.GizmoInstructionsTooLong = 5] = `GizmoInstructionsTooLong`, e[e.NameEmpty = 6] = `NameEmpty`, e[e.MissingPublicActionPrivacyPolicyURL = 7] = `MissingPublicActionPrivacyPolicyURL`, e[e.MissingCategory = 8] = `MissingCategory`, e
    }({}), dn = {
        id: void 0,
        instructions: ``,
        name: ``,
        description: ``,
        emoji: void 0,
        theme: void 0,
        profilePictureId: void 0,
        profilePictureUrl: void 0,
        promptStarters: [],
        sharing: {
            recipient: x.Private,
            subjects: []
        },
        tools: [{
            type: l.IMAGE_GEN
        }],
        files: [],
        defaultModel: null,
        trainingDisabled: !1,
        liveVersion: 0,
        contextStuffingBudget: null,
        firstPartyProjectType: null
    }, fn = We({
        instructionsWarning: {
            id: `gizmo.instructionsWarning`,
            defaultMessage: `Conversations with your GPT can potentially include part or all of the instructions provided.`
        }
    })
}));

function mn(e) {
    return !sn(e.sharingRecipient ?? x.Private) && c(`1056818577`)
}

function hn(e, t) {
    return t && sn(e) ? x.Private : e
}
var gn = e((() => {
    b(), pn(), s()
}));

function _n() {
    "use forget";
    let e = (0, yn.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, J.jsx)(`div`, {
        role: `status`,
        className: `border-token-border-status-warning bg-token-bg-status-warning text-token-text-status-warning rounded-md border px-2.5 py-1.5 text-xs leading-4`,
        children: (0, J.jsx)(B, {
            id: `gizmo.publish.new_gpt.public_sharing_disabled.notice`,
            defaultMessage: `Sharing GPTs with the public is no longer available. <link>Learn more</link>`,
            values: {
                link: vn
            }
        })
    }), e[0] = t) : t = e[0], t
}

function vn(e) {
    return (0, J.jsx)(`a`, {
        href: `https://help.openai.com/en/articles/8554397-creating-a-gpt`,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `underline`,
        children: e
    })
}
var yn, J, bn = e((() => {
        yn = Ze(), V(), J = R()
    })),
    xn = t({
        GizmoSharingDetails: () => Vn,
        GizmoTile: () => jn,
        GizmoUpdatedModal: () => An,
        HipaaGizmoShareWarning: () => Sn,
        SHARE_LEVEL_ICONS: () => $,
        ShareGizmoModal: () => On,
        ShareLevelItem: () => X,
        sharingSubjectToSharingParam: () => Dn
    });

function Sn() {
    return (0, Q.jsxs)(`div`, {
        className: `border-token-border-medium bg-token-main-surface-secondary text-token-text-primary flex items-start gap-3 rounded-md border px-4 py-3 text-sm`,
        children: [(0, Q.jsx)(Ne, {
            className: `icon-sm interactive-label-warning-secondary mt-0.5 shrink-0`
        }), (0, Q.jsx)(B, {
            id: `gizmo.share.hipaaCompliance.warning`,
            defaultMessage: `OpenAI supports HIPAA compliance for your use of custom GPTs in this workspace. If you share or publish this GPT with others, your BAA does not apply to their use. Do not represent this GPT to third parties as HIPAA compliant.`
        })]
    })
}

function Cn(e, t) {
    return w(e) ? w(t) && e.user_id === t.user_id : v(e) ? v(t) && e.group_id === t.group_id : xe(e) ? xe(t) && e.user_email.toLowerCase() === t.user_email.toLowerCase() : e.type === t.type
}

function wn(e) {
    return v(e) ? e.group_name : w(e) ? e.user_name : e.user_email
}

function Tn(e) {
    return w(e) ? e.user_email : null
}

function En(e) {
    return v(e) ? e.group_name : w(e) ? `${e.user_name} ${e.user_email}` : e.user_email
}

function Dn(e) {
    if (typeof e.type == `string`) return e;
    let t = Rn[e.type];
    if (!t) throw Error(`Unknown sharing subject type: ` + e.type);
    return {
        ...e,
        type: t
    }
}

function On({
    gizmo: e,
    publishedGizmo: t,
    updateGizmo: n,
    promoteGizmo: i,
    appealGizmo: s,
    setAppealState: c,
    showActionsModal: u,
    shareOnly: f,
    onClose: p,
    workspaceOwner: m = !1
}) {
    let h = H(),
        _ = a(oe),
        {
            data: ee
        } = d(m ? void 0 : e.id),
        ne = ee?.gizmo.migrated_plugin_id ?? e.migratedPluginId ?? t?.gizmo.migrated_plugin_id,
        ie = re(ne),
        y = Ce(),
        b = mn(e),
        ce = y?.isHipaaCompliantWorkspace ?? !1,
        le = r().trim(),
        S = y?.id,
        {
            data: ue,
            isLoading: pe
        } = Pe(S),
        me = It(ue),
        _e = y?.isEnterprisey() ?? !1,
        ve = y?.data?.role,
        xe = ve != null && ct(ve),
        Se;
    Se = S == null ? void 0 : m || xe || !_e ? !0 : pe ? void 0 : ue?.permissions?.includes(Ee.MemberRoleView) ?? !1;
    let T = le || `your workspace`,
        E = He(),
        D = ge(),
        [O, A] = (0, Z.useState)(void 0);
    (0, Z.useEffect)(() => {
        if (O === void 0)
            if (t?.gizmo.display.categories && t?.gizmo.display.categories.length > 0) {
                let e = D.data?.categories.find(e => e.id === t?.gizmo.display.categories[0]);
                e && A(e)
            } else D.data !== void 0 && A(D.data.categories[D.data.categories.length - 1])
    }, [D.data, O, t]);
    let [j, De] = (0, Z.useState)(() => hn(e.sharingRecipient ?? x.Private, b)), [M, N] = (0, Z.useState)(e.sharing?.subjects ?? []), [ke, je] = (0, Z.useState)(null), [Me, Ne] = (0, Z.useState)(!1), Fe = (0, Z.useRef)(null), Ie = (0, Z.useRef)(M.length);
    (0, Z.useEffect)(() => {
        M.length > Ie.current && requestAnimationFrame(() => {
            Fe.current?.scrollTo({
                top: Fe.current.scrollHeight,
                behavior: `smooth`
            })
        }), Ie.current = M.length
    }, [M]);
    let Le = (0, Z.useCallback)(() => !k(e.sharing?.subjects, M) || e.sharingRecipient !== j, [e.sharing, e.sharingRecipient, j, M]),
        I = Ge(),
        ze = ln(e, j, O?.id ?? void 0),
        Be = ze.includes(un.MissingPublicActionPrivacyPolicyURL),
        Ve = e.tools.find(e => e.type === l.JIT_PLUGIN && !e.metadata.privacy_policy_url);
    if (_ || ie) return (0, Q.jsx)(C, {
        isOpen: !0,
        onClose: p,
        title: (0, Q.jsx)(B, {
            ...ie ? ae.title : be.readOnlyTitle
        }),
        showCloseButton: !0,
        children: (0, Q.jsx)(B, {
            ...ie ? ae.notice : be.sharingNotice
        })
    });
    if (ke) return (0, Q.jsx)(An, {
        publishedGizmo: ke,
        sharing: {
            recipient: j,
            subjects: M
        },
        workspaceName: T,
        onClose: p
    });

    function Ue(e) {
        M.find(t => Cn(t, e)) || N([...M, e])
    }
    let R = se(M);

    function z(e) {
        let t = M.filter(e => [P.WORKSPACE, P.ALL].indexOf(e.type) === -1);
        e != null && t.push(e), N(t)
    }

    function We(e) {
        switch (De(e), e) {
            case x.Marketplace:
            case x.Link:
                z({
                    type: P.ALL,
                    capabilities: L
                });
                break;
            case x.Workspace:
            case x.WorkspaceLink:
                z({
                    type: P.WORKSPACE,
                    capabilities: L
                });
                break;
            default:
                z(null)
        }
    }

    function Ke(e) {
        R != null && N(M.map(t => t === R ? {
            ...t,
            capabilities: e
        } : t))
    }

    function V(e, t, n) {
        return e.type === P.USER && e.user_id.indexOf(`__`) === -1 ? {
            ...e,
            user_id: e.user_id + `__` + y?.getWorkspaceId()
        } : e
    }
    async function qe(e, r) {
        if (Me || oe() || re(ne)) return;
        if (e && !r) throw Error(`Cannot share a gizmo that hasn't been promoted before`);
        if (!O) return;
        Ne(!0);
        let a = M.map(V).map(Dn);
        if (a = te(j, a, R?.capabilities ?? L), m) return !y || !r ? (o.warning(`Unable to change sharing settings`), p()) : (await Ae.safePost(`/accounts/{account_id}/gpts/{gizmo_id}/share`, {
            parameters: {
                path: {
                    account_id: y.id,
                    gizmo_id: r
                }
            },
            requestBody: {
                sharing: a
            }
        }), o.success(h.formatMessage({
            id: `SWSzcY`,
            defaultMessage: `Sharing settings updated`
        })), I.invalidateQueries({
            queryKey: [`workspace`]
        }), p());
        if (e) {
            if (!r || !t) throw Error(`No gizmo ID to share`);
            try {
                let e = {
                    sharing: a
                };
                O && (e.categories = [O.id]);
                let i = await fe.shareGizmo(r, e);
                if (i.error) zt(j, i.sharing_targets ?? void 0) ? (c?.({
                    gizmoId: t.gizmo.id,
                    sharingRecipient: j,
                    categories: t.gizmo.display.categories,
                    moderationType: tn.PublishBlocked,
                    sharingTargets: i.sharing_targets ?? void 0,
                    showModal: en.AppealAvailable
                }), p()) : o.warning(h.formatMessage({
                    id: `tmIKmp`,
                    defaultMessage: `Unable to share GPT`
                }));
                else {
                    if (i.resource == null) throw Error(`Missing shared gizmo resource`);
                    I.setQueryData([`gizmo`, {
                        gizmoId: t.gizmo.id
                    }, {
                        draft: !1
                    }], e => i.resource), n?.(e => ({
                        ...e,
                        sharing: {
                            recipient: j,
                            subjects: M
                        },
                        sharingRecipient: j
                    })), o.success(h.formatMessage({
                        id: `SWSzcY`,
                        defaultMessage: `Sharing settings updated`
                    })), p()
                }
            } catch {
                return o.warning(h.formatMessage({
                    id: `dKC65l`,
                    defaultMessage: `Failed to update sharing settings`
                })), p()
            }
        } else {
            if (i) {
                let e = await i({
                    subjects: a,
                    recipient: j
                }, O.id);
                r ||= e?.gizmo.id, je(e ?? null), n?.({
                    liveVersion: e?.gizmo.live_version ?? void 0
                })
            }
            I.invalidateQueries({
                queryKey: [`gizmo`, {
                    gizmoId: r
                }]
            })
        }
        Ne(!1), I.invalidateQueries({
            queryKey: [`gizmos`]
        }), I.refetchQueries({
            queryKey: [`gizmos`, `discovery`]
        }), I.refetchQueries({
            queryKey: [`gizmo`, {
                gizmoId: r
            }]
        }), I.invalidateQueries({
            queryKey: [`gizmo`, `userActionSettings`, {
                gizmoId: r
            }]
        }), I.invalidateQueries({
            queryKey: [`workspace`]
        }), n?.({
            sharing: {
                recipient: j,
                subjects: M
            },
            sharingRecipient: j
        }, !1)
    }
    let Je = !t || Nn(t.gizmo.author.user_id.split(`__`)[0], E?.id),
        Ye = t?.gizmo.author.display_name || null;
    return (0, Q.jsx)(C, {
        testId: `modal-share-gizmo`,
        type: `success`,
        className: `max-w-[555px]`,
        size: `custom`,
        isOpen: !0,
        onClose: p,
        primaryButton: zt(j, e.sharingTargets) ? (0, Q.jsx)(F, {
            onClick: () => s(j, O?.id),
            children: (0, Q.jsx)(B, {
                id: `yS4os0`,
                defaultMessage: `Learn more`
            })
        }) : (0, Q.jsx)(F, {
            onClick: () => qe(f, t?.gizmo.id),
            loading: Me,
            disabled: ze.length > 0 || !G(j, e.sharingTargets),
            children: f ? (0, Q.jsx)(B, {
                id: `BEKjVh`,
                defaultMessage: `Save`
            }) : (0, Q.jsx)(B, {
                id: `24j5ts`,
                defaultMessage: `Update`
            })
        }),
        secondaryButton: (0, Q.jsxs)(Q.Fragment, {
            children: [Le() && (0, Q.jsx)(`div`, {
                className: `text-token-text-secondary absolute start-6 bottom-8 text-sm`,
                children: (0, Q.jsx)(B, {
                    id: `9CkgC4`,
                    defaultMessage: `Unsaved changes`
                })
            }), t && (0, Q.jsx)(F, {
                color: `secondary`,
                onClick: e => de(t, he(), e, h.formatMessage({
                    id: `KdDqMm`,
                    defaultMessage: `Copied link to clipboard`
                })),
                children: (0, Q.jsx)(B, {
                    id: `wvL15a`,
                    defaultMessage: `Copy link`
                })
            })]
        }),
        title: h.formatMessage({
            id: `7JggXH`,
            defaultMessage: `Share GPT`
        }),
        showCloseButton: !0,
        children: (0, Q.jsxs)(`div`, {
            className: `flex flex-col space-y-4`,
            children: [(0, Q.jsx)(Mn, {
                onAdd: e => Ue(e),
                publishedGizmo: t,
                canListMembers: Se,
                allowScimGroupSharing: me
            }), ce && (0, Q.jsx)(Sn, {}), (0, Q.jsx)(`h3`, {
                className: `text-base font-semibold`,
                children: (0, Q.jsx)(B, {
                    id: `bNQXcV`,
                    defaultMessage: `Share with...`
                })
            }), (0, Q.jsxs)(`div`, {
                ref: Fe,
                className: `max-h-[200px] space-y-2 overflow-y-auto`,
                children: [(0, Q.jsxs)(`div`, {
                    className: `mb-4 flex flex-row items-center justify-between space-x-3`,
                    children: [(0, Q.jsx)(`div`, {
                        className: `shrink-0 grow-0 self-start`,
                        children: Je ? (0, Q.jsx)(Re, {
                            user: E
                        }) : (0, Q.jsx)(Oe, {
                            name: Ye ?? `User`,
                            initialsCount: 2
                        })
                    }), (0, Q.jsx)(`div`, {
                        className: `grow text-base font-semibold`,
                        children: Je ? (0, Q.jsxs)(`div`, {
                            className: `flex flex-col`,
                            children: [(0, Q.jsx)(B, {
                                id: `U7tzof`,
                                defaultMessage: `{userName} (you)`,
                                values: {
                                    userName: E?.name
                                }
                            }), (0, Q.jsx)(`span`, {
                                className: `text-token-text-secondary -mt-1 text-sm`,
                                children: E?.email
                            })]
                        }) : Ye ? (0, Q.jsx)(B, {
                            id: `scRZqV`,
                            defaultMessage: `{userName} (builder)`,
                            values: {
                                userName: Ye
                            }
                        }) : (0, Q.jsx)(B, {
                            id: `gizmo.share.builder.fallbackLabel`,
                            defaultMessage: `Builder`
                        })
                    })]
                }), M.map((e, t) => we(e) && (0, Q.jsxs)(`div`, {
                    className: `mb-4 flex flex-row items-center justify-between space-x-3`,
                    children: [(0, Q.jsx)(Oe, {
                        name: En(e),
                        initialsCount: w(e) ? 2 : 1,
                        className: g(`shrink-0 grow-0`, w(e) && `self-start`)
                    }), (0, Q.jsxs)(`div`, {
                        className: `flex grow flex-col`,
                        children: [(0, Q.jsxs)(`span`, {
                            className: `flex flex-row`,
                            children: [(0, Q.jsx)(`span`, {
                                className: `me-2 text-base font-semibold`,
                                children: wn(e)
                            }), v(e) && e.is_scim_managed && (0, Q.jsx)(In, {})]
                        }), w(e) && (0, Q.jsx)(`span`, {
                            className: `text-token-text-secondary -mt-1 text-sm`,
                            children: Tn(e)
                        })]
                    }), (0, Q.jsxs)(U.Root, {
                        children: [(0, Q.jsxs)(U.Trigger, {
                            className: `text-token-text-secondary text-base whitespace-nowrap`,
                            children: [(0, Q.jsx)(B, {
                                ...Y(e.capabilities)
                            }), (0, Q.jsx)(pt, {
                                className: `icon`
                            })]
                        }), (0, Q.jsx)(U.Portal, {
                            children: (0, Q.jsxs)(U.Content, {
                                className: `max-w-[320px]`,
                                children: [Ln().map((t, n) => (0, Q.jsx)(kn, {
                                    capabilities: t,
                                    selected: k(t, e.capabilities),
                                    onClick: () => {
                                        N(M.map(n => n === e ? {
                                            ...n,
                                            capabilities: t
                                        } : n))
                                    }
                                }, n)), (0, Q.jsx)(U.Separator, {
                                    className: `my-2`
                                }), (0, Q.jsx)(U.Item, {
                                    onClick: () => N(M.filter(t => t !== e)),
                                    color: `danger`,
                                    icon: Ot,
                                    children: (0, Q.jsx)(B, {
                                        id: `NU0BOB`,
                                        defaultMessage: `Remove`
                                    })
                                })]
                            })
                        })]
                    })]
                }, t))]
            }), (0, Q.jsx)(`hr`, {
                className: `border-token-border-medium`
            }), (0, Q.jsx)(`h3`, {
                className: `text-base font-semibold`,
                children: (0, Q.jsx)(B, {
                    id: `uqD7Y8`,
                    defaultMessage: `Access`
                })
            }), b && (0, Q.jsx)(_n, {}), (0, Q.jsxs)(`div`, {
                className: `-ms-3.5 flex flex-row items-center justify-between space-x-3`,
                children: [(0, Q.jsxs)(W.Root, {
                    value: j,
                    onValueChange: e => We(e),
                    children: [(0, Q.jsxs)(W.Trigger, {
                        children: [(0, Q.jsx)(W.Value, {}), (0, Q.jsx)(W.Icon, {})]
                    }), (0, Q.jsx)(W.Portal, {
                        children: (0, Q.jsxs)(W.Content, {
                            children: [(0, Q.jsxs)(W.Group, {
                                children: [(0, Q.jsx)(W.Label, {
                                    children: (0, Q.jsx)(B, {
                                        id: `YIQwaP`,
                                        defaultMessage: `Private`
                                    })
                                }), j === x.User ? (0, Q.jsx)(W.Item, {
                                    value: x.User,
                                    children: (0, Q.jsx)(X, {
                                        shareLevel: x.User,
                                        workspaceName: T
                                    })
                                }) : (0, Q.jsx)(W.Item, {
                                    value: x.Private,
                                    children: (0, Q.jsx)(X, {
                                        shareLevel: x.Private,
                                        workspaceName: T
                                    })
                                })]
                            }), (0, Q.jsx)(W.Separator, {}), (0, Q.jsx)(Te, {
                                triggerAs: null,
                                label: h.formatMessage({
                                    id: `n0m61x`,
                                    defaultMessage: `Your workspace has disabled sharing with the workspace.`
                                }),
                                side: `bottom`,
                                disabled: G(`workspace`, e.sharingTargets),
                                children: (0, Q.jsxs)(W.Group, {
                                    children: [(0, Q.jsx)(W.Label, {
                                        children: T
                                    }), (0, Q.jsx)(W.Item, {
                                        value: x.WorkspaceLink,
                                        disabled: !G(x.WorkspaceLink, e.sharingTargets) && !G(x.Workspace, e.sharingTargets),
                                        children: (0, Q.jsx)(X, {
                                            shareLevel: x.WorkspaceLink,
                                            workspaceName: T
                                        })
                                    }), (0, Q.jsx)(W.Item, {
                                        value: x.Workspace,
                                        disabled: !G(`workspace`, e.sharingTargets),
                                        children: (0, Q.jsx)(X, {
                                            shareLevel: x.Workspace,
                                            workspaceName: T
                                        })
                                    })]
                                })
                            }), !b && (0, Q.jsxs)(Q.Fragment, {
                                children: [(0, Q.jsx)(W.Separator, {}), (0, Q.jsx)(Te, {
                                    triggerAs: null,
                                    label: h.formatMessage({
                                        id: `IHnort`,
                                        defaultMessage: `Your workspace has disabled public sharing.`
                                    }),
                                    side: `bottom`,
                                    disabled: G(`marketplace`, e.sharingTargets),
                                    children: (0, Q.jsxs)(W.Group, {
                                        children: [(0, Q.jsx)(W.Label, {
                                            children: (0, Q.jsx)(B, {
                                                id: `PjY9bi`,
                                                defaultMessage: `Public`
                                            })
                                        }), (0, Q.jsx)(W.Item, {
                                            value: x.Link,
                                            disabled: !G(`link`, e.sharingTargets),
                                            children: (0, Q.jsx)(X, {
                                                shareLevel: x.Link,
                                                workspaceName: T
                                            })
                                        }), (0, Q.jsx)(W.Item, {
                                            disabled: !G(`marketplace`, e.sharingTargets),
                                            value: x.Marketplace,
                                            children: (0, Q.jsx)(X, {
                                                shareLevel: x.Marketplace,
                                                workspaceName: T
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })]
                }), j !== x.Private && j !== x.User && (0, Q.jsxs)(U.Root, {
                    children: [(0, Q.jsxs)(U.Trigger, {
                        className: `text-token-text-secondary text-base whitespace-nowrap`,
                        children: [R == null ? (0, Q.jsx)(B, {
                            ...Y(L)
                        }) : (0, Q.jsx)(B, {
                            ...Y(R.capabilities)
                        }), (0, Q.jsx)(pt, {
                            className: `icon`
                        })]
                    }), (0, Q.jsx)(U.Portal, {
                        children: (0, Q.jsxs)(U.Content, {
                            className: `max-w-[320px]`,
                            children: [(0, Q.jsx)(kn, {
                                onClick: () => Ke(L),
                                capabilities: L,
                                selected: k(R?.capabilities, L)
                            }), j !== x.Marketplace && j !== x.Link && (0, Q.jsx)(kn, {
                                onClick: () => Ke(ye),
                                capabilities: ye,
                                selected: k(R?.capabilities, ye)
                            })]
                        })
                    })]
                })]
            }), Be && (0, Q.jsx)(`div`, {
                className: `text-xs text-red-500`,
                children: (0, Q.jsx)(B, {
                    id: `/iw1Iv`,
                    defaultMessage: `Public actions require valid privacy policy URLs. Click <fixlink>here</fixlink> to update.`,
                    values: {
                        fixlink: e => (0, Q.jsx)(`button`, {
                            onClick: () => {
                                u?.(Ve?.metadata.action_id), p()
                            },
                            className: `underline`,
                            children: e
                        })
                    }
                })
            }), (j === x.Marketplace || j === x.Workspace) && (G(j, e.sharingTargets) ? (0, Q.jsx)(jn, {
                gizmo: e,
                category: O?.id,
                categories: D.data?.categories,
                onCategoryChange: e => A(e)
            }) : zt(j, e.sharingTargets) ? (0, Q.jsx)(`div`, {
                className: `pb-2 text-xs text-red-500`,
                children: (0, Q.jsx)(Kt, {
                    sharingRecipient: j,
                    moderatedFields: Rt(j, e.sharingTargets) ?? [],
                    appealAvailable: !0
                })
            }) : (0, Q.jsx)(`div`, {
                className: `pb-2 text-xs text-red-500`,
                children: (0, Q.jsx)(B, {
                    id: `BzqqKH`,
                    defaultMessage: `Your workspace's settings don't allow this level of access. An owner of the workspace can change this setting in the workspace's GPTs settings.`
                })
            }))]
        })
    })
}

function Y(e) {
    return e.can_write ? z({
        id: `SubCqD`,
        defaultMessage: `Can edit`
    }) : e.can_view_config ? z({
        id: `V6OjbX`,
        defaultMessage: `Can view settings`
    }) : e.can_read ? z({
        id: `/0j34W`,
        defaultMessage: `Can chat`
    }) : z({
        id: `x2E8ET`,
        defaultMessage: `Unknown`
    })
}

function kn({
    capabilities: e,
    selected: t,
    onClick: n
}) {
    let r = null;
    e.can_write ? r = vt : e.can_view_config ? r = Tt : e.can_read && (r = Et);
    let i = e.can_write ? (0, Q.jsx)(B, {
        id: `wKFMT1`,
        defaultMessage: `Edit settings, duplicate, and chat`
    }) : e.can_view_config ? (0, Q.jsx)(B, {
        id: `Y/J4TZ`,
        defaultMessage: `See settings, duplicate, and chat`
    }) : e.can_read ? (0, Q.jsx)(B, {
        id: `PvgEQP`,
        defaultMessage: `Chat with this GPT only`
    }) : null;
    return (0, Q.jsxs)(U.Item, {
        className: `flex h-auto flex-row items-center px-3 py-3`,
        onClick: n,
        icon: r,
        children: [(0, Q.jsxs)(`div`, {
            className: `me-1 flex grow flex-col`,
            children: [(0, Q.jsx)(`span`, {
                className: `mb-0.5 text-base leading-tight`,
                children: (0, Q.jsx)(B, {
                    ...Y(e)
                })
            }), (0, Q.jsx)(`span`, {
                className: `text-token-text-secondary text-xs`,
                children: i
            })]
        }), (0, Q.jsx)(yt, {
            className: g(`icon-lg shrink-0`, !t && `invisible`)
        })]
    })
}

function X({
    shareLevel: e,
    workspaceName: t,
    hasInviteSharing: n = !0
}) {
    (e === x.User || e === x.Group || e === x.Email) && (e = x.Private);
    let r = $[e];
    return (0, Q.jsxs)(`div`, {
        className: `flex flex-row items-center gap-3 text-sm`,
        children: [(0, Q.jsx)(r, {
            className: `icon text-token-text-secondary`
        }), (0, Q.jsx)(`div`, {
            className: `pt-px text-start`,
            children: !n && e === x.Private ? (0, Q.jsx)(B, {
                id: `vVJhYB`,
                defaultMessage: `Only me`
            }) : (0, Q.jsx)(B, {
                ...zn[e],
                values: {
                    workspaceName: t
                }
            })
        })]
    })
}

function An({
    publishedGizmo: e,
    sharing: t,
    workspaceName: n,
    onClose: r
}) {
    let i = H();
    return (0, Q.jsxs)(C, {
        testId: `modal-gizmo-updated`,
        isOpen: !0,
        onClose: r,
        showCloseButton: !0,
        className: `w-[304px]`,
        title: (0, Q.jsx)(B, {
            id: `5CEceY`,
            defaultMessage: `GPT Updated`
        }),
        primaryButton: (0, Q.jsx)(F, {
            onClick: () => {
                window.location.href = `/g/${e.gizmo.id}`
            },
            children: (0, Q.jsx)(B, {
                id: `RF75o5`,
                defaultMessage: `View GPT`
            })
        }),
        secondaryButton: (0, Q.jsx)(F, {
            color: `secondary`,
            onClick: t => de(e, he(), t, i.formatMessage({
                id: `KdDqMm`,
                defaultMessage: `Copied link to clipboard`
            })),
            children: (0, Q.jsx)(B, {
                id: `9hLOl9`,
                defaultMessage: `Copy link`
            })
        }),
        type: `success`,
        children: [(0, Q.jsx)(jn, {
            gizmo: {
                profilePictureUrl: e.gizmo.display.profile_picture_url ?? void 0,
                name: e.gizmo.display.name
            }
        }), (0, Q.jsx)(Vn, {
            sharing: t,
            workspaceName: n
        })]
    })
}

function jn({
    gizmo: e,
    category: t,
    categories: n,
    onCategoryChange: r
}) {
    let {
        data: i,
        isLoading: a
    } = D(), o = n?.find(e => e.id === t);
    return (0, Q.jsxs)(`div`, {
        children: [(0, Q.jsxs)(`div`, {
            className: g(`bg-token-main-surface-secondary mb-[1px] flex flex-row items-center space-x-2 p-4`, a && `invisible`, n ? `rounded-t-lg` : `rounded-lg`),
            children: [(0, Q.jsx)(lt, {
                isFirstParty: !1,
                className: `h-11 w-11`,
                src: e.profilePictureUrl
            }), (0, Q.jsxs)(`div`, {
                className: `flex grow flex-col space-y-0`,
                children: [(0, Q.jsx)(`span`, {
                    className: `text-base font-semibold`,
                    children: e.name
                }), (0, Q.jsx)(Qe, {
                    builderName: i?.display_name,
                    builderUrl: i?.website_url,
                    socials: [i?.socials.linkedin, i?.socials.github].filter(e => e != null),
                    className: `text-token-text-secondary text-xs`
                })]
            })]
        }), n && (0, Q.jsxs)(`div`, {
            className: `bg-token-main-surface-secondary flex min-h-[56px] flex-row items-center justify-between space-x-2 rounded-b-lg px-4 text-base`,
            children: [(0, Q.jsx)(`span`, {
                className: `font-semibold`,
                children: (0, Q.jsx)(B, {
                    id: `JcA4/t`,
                    defaultMessage: `Category`
                })
            }), (0, Q.jsx)(`div`, {
                className: `text-token-text-secondary`,
                children: r ? (0, Q.jsx)(et, {
                    size: `small`,
                    triggerButton: (0, Q.jsxs)(`button`, {
                        className: `flex items-center gap-1`,
                        children: [o?.title, (0, Q.jsx)(pt, {
                            className: `icon`
                        })]
                    }),
                    children: n.map((e, t) => (0, Q.jsx)(U.Item, {
                        onClick: () => r(e),
                        children: e.title
                    }, t))
                }) : (0, Q.jsx)(`span`, {
                    className: `text-token-text-secondary`,
                    children: o?.title
                })
            })]
        })]
    })
}

function Mn({
    onAdd: e,
    publishedGizmo: t,
    canListMembers: n,
    allowScimGroupSharing: r
}) {
    let i = H(),
        a = ce(),
        [o, s] = (0, Z.useState)(``),
        c = n === !0,
        l = rt(c ? a?.id : void 0, 0, o, 5).data?.items.filter(e => e.account_user_id !== t?.gizmo.author.user_id),
        u = r,
        {
            data: d
        } = Ke({
            queryKey: [a?.id, `groups`, `filtered`, o, u],
            queryFn: () => Ae.safeGet(`/accounts/{account_id}/groups`, {
                parameters: {
                    path: {
                        account_id: a.id
                    },
                    query: {
                        query: o,
                        offset: 0,
                        orderby: `@score`,
                        limit: 20,
                        include_scim_groups: u
                    }
                }
            }),
            enabled: c && o.trim() !== `` && a != null && !!a.getWorkspaceId()
        });

    function f(t, n, r) {
        e({
            type: P.GROUP,
            group_id: t,
            group_name: n,
            capabilities: {
                ...L
            },
            is_scim_managed: r
        }), s(``)
    }

    function p(t, n, r) {
        a && (e({
            type: P.USER,
            user_id: t,
            user_name: n,
            user_email: r,
            avatar_url: null,
            capabilities: {
                ...L
            }
        }), s(``))
    }
    let m = a?.isEnterprisey() ? i.formatMessage({
            id: `xy/AMO`,
            defaultMessage: `Add people and groups from your workspace`
        }) : i.formatMessage({
            id: `Lh9njB`,
            defaultMessage: `Add people from your workspace`
        }),
        {
            eligible: h
        } = Ie(I.hasSeenMultipleGPTEditorsTooltip),
        g = !c,
        _ = g ? (0, Q.jsx)(it, {
            ariaLabel: m,
            disabled: !0,
            inputClassName: `bg-token-bg-primary!`,
            name: `share-with-input`,
            placeholder: m,
            value: o
        }) : (0, Q.jsx)(Pt, {
            label: m,
            name: `share-with-input`,
            inputClassName: `bg-token-bg-primary!`,
            inputValue: o,
            onInputChange: s,
            suggestions: [...l?.map(e => ({
                id: e.id,
                className: `flex flex-col rounded-xs p-1 hover:bg-token-main-surface-tertiary rounded-xs p-1 text-sm`,
                focusedClassName: `bg-token-main-surface-tertiary`,
                onClick: () => p(e.account_user_id, e.name, e.email ?? ``),
                children: (0, Q.jsxs)(Q.Fragment, {
                    children: [(0, Q.jsx)(`span`, {
                        className: `w-full font-semibold`,
                        children: e.name
                    }), (0, Q.jsx)(`span`, {
                        className: `text-token-text-secondary text-sm`,
                        children: e.email
                    })]
                })
            })) ?? [], ...d?.items.map(e => ({
                id: e.id,
                className: `flex flex-col rounded-xs p-1 hover:bg-token-main-surface-tertiary rounded-xs p-1 text-sm`,
                focusedClassName: `bg-token-main-surface-tertiary`,
                onClick: () => f(e.id, e.name, e.is_scim_managed ?? !1),
                children: (0, Q.jsxs)(`span`, {
                    className: `flex flex-col`,
                    children: [(0, Q.jsxs)(`span`, {
                        className: `flex flex-row`,
                        children: [(0, Q.jsx)(`span`, {
                            className: `me-2 font-semibold`,
                            children: e.name
                        }), e.is_scim_managed && (0, Q.jsx)(In, {})]
                    }), (0, Q.jsx)(`span`, {
                        className: `text-token-text-secondary text-sm`,
                        children: (0, Q.jsx)(B, {
                            id: `r3Rx6X`,
                            defaultMessage: `{numMembers, plural, one {1 member} other {# members}}`,
                            values: {
                                numMembers: e.num_members
                            }
                        })
                    })]
                })
            })) ?? []]
        });
    return (0, Q.jsxs)(Q.Fragment, {
        children: [n === !1 && (0, Q.jsxs)(`div`, {
            className: `border-token-border-medium bg-token-main-surface-secondary text-token-text-primary flex items-center gap-3 rounded-md border px-4 py-3`,
            children: [(0, Q.jsx)(Ne, {
                className: `icon-sm interactive-label-warning-secondary shrink-0`
            }), (0, Q.jsx)(B, {
                id: `6e1nG9`,
                defaultMessage: `You don't have permission to search your workspace members. Please contact your workspace admin for access or update the workspace settings.`
            })]
        }), n !== !1 && (0, Q.jsx)(`div`, {
            className: `flex w-full flex-row space-x-3`,
            children: h && !g ? (0, Q.jsx)(Mt, {
                announcementKey: I.hasSeenMultipleGPTEditorsTooltip,
                show: h,
                side: `right`,
                align: `center`,
                className: `w-full`,
                sideOffset: 0,
                contentClassName: `z-100`,
                childrenWrapperClassName: `w-full`,
                theme: `bright`,
                dismissOnOutsideClick: !0,
                badge: `new`,
                description: i.formatMessage({
                    id: `SR33A6`,
                    defaultMessage: `You can now add editors to collaborate on your GPTs.`
                }),
                onDismiss: () => ke(I.hasSeenMultipleGPTEditorsTooltip),
                children: _
            }) : _
        })]
    })
}

function Nn(e, t) {
    return e === void 0 || t === void 0 ? !1 : e.split(`__`)[0] === t.split(`__`)[0]
}

function Pn(e) {
    return !we(e)
}
var Fn, Z, Q, In, Ln, Rn, zn, Bn, $, Vn, Hn = e((() => {
    Fn = Ze(), ue(), E(), _e(), Me(), me(), st(), ot(), ie(), Nt(), nt(), kt(), wt(), bt(), Ct(), ht(), gt(), ft(), Dt(), St(), A(), Be(), At(), Se(), $e(), jt(), i(), ee(), O(), Ue(), Fe(), p(), De(), _(), Ft(), T(), Xe(), y(), Ve(), Z = n(qe()), V(), Bt(), rn(), tt(), at(), j(), pn(), gn(), bn(), Le(), m(), s(), pe(), Q = R(), Ye(), In = ne(() => Je(() => import(`./fbf44c55-gmoc79u0p3c9uv7d.js`).then(e => e.DirectorySyncResourceManagedIndication), __vite__mapDeps([0, 1, 2]))), Ln = () => [L, ye, f], Rn = {
        [P.USER]: x.User,
        [P.GROUP]: x.Group,
        [P.WORKSPACE]: x.Workspace,
        [P.ALL]: x.Marketplace
    }, zn = We({
        private: {
            id: `pSXBWQ`,
            defaultMessage: `Invite-only`
        },
        user: {
            id: `pSXBWQ`,
            defaultMessage: `Invite-only`
        },
        group: {
            id: `pSXBWQ`,
            defaultMessage: `Invite-only`
        },
        email: {
            id: `pSXBWQ`,
            defaultMessage: `Invite-only`
        },
        workspace_link: {
            id: `Giaxt1`,
            defaultMessage: `Anyone at {workspaceName} with the link`
        },
        workspace: {
            id: `XLHaTU`,
            defaultMessage: `{workspaceName}`
        },
        link: {
            id: `uP1+Ri`,
            defaultMessage: `Anyone with the link`
        },
        marketplace: {
            id: `82Ilac`,
            defaultMessage: `GPT Store`
        }
    }), Bn = We({
        workspace: {
            id: `1kpopF`,
            defaultMessage: `Published to {workspaceName}`
        },
        marketplace: {
            id: `hdTRpJ`,
            defaultMessage: `Published to GPT Store`
        }
    }), $ = {
        private: mt,
        user: mt,
        group: mt,
        email: mt,
        workspace_link: _t,
        workspace: xt,
        link: _t,
        marketplace: le.SidebarApps
    }, Vn = e => {
        "use forget";
        let t = (0, Fn.c)(26),
            {
                sharing: n,
                author: r,
                workspaceName: i,
                showAudiencePermissions: a
            } = e,
            o = a !== void 0 && a,
            s = n.recipient,
            c, l, u, d;
        if (t[0] !== r || t[1] !== s || t[2] !== n.subjects || t[3] !== o || t[4] !== i) {
            let e = n.subjects.filter(Pn),
                a = o && e.length > 0 ? e.map(e => ({
                    level: e.type === P.WORKSPACE ? s === x.Workspace ? x.Workspace : x.WorkspaceLink : s === x.Marketplace ? x.Marketplace : x.Link,
                    subject: e
                })) : [{
                    level: s,
                    subject: void 0
                }];
            t[9] !== r || t[10] !== n.subjects || t[11] !== o ? (d = (r != null || n.subjects.some(we)) && (0, Q.jsxs)(`div`, {
                className: o ? `my-4 flex flex-col gap-4` : `my-4`,
                children: [(0, Q.jsx)(`h3`, {
                    className: o ? `text-base font-semibold` : `text-token-text-secondary text-xs font-semibold`,
                    children: (0, Q.jsx)(B, {
                        id: `/paYH9`,
                        defaultMessage: `Shared with`
                    })
                }), r != null && (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-3 text-sm`,
                    children: [(0, Q.jsx)(Oe, {
                        name: r.display_name ?? r.user_email ?? ``,
                        initialsCount: 2,
                        className: `shrink-0`
                    }), (0, Q.jsxs)(`div`, {
                        className: `min-w-0 flex-1 break-words`,
                        children: [(0, Q.jsx)(`div`, {
                            className: `font-semibold`,
                            children: r.display_name ?? r.user_email
                        }), (0, Q.jsx)(`div`, {
                            className: `text-token-text-secondary`,
                            children: r.user_email
                        })]
                    }), (0, Q.jsx)(`span`, {
                        className: `text-token-text-secondary shrink-0`,
                        children: (0, Q.jsx)(B, {
                            id: `gizmo.pluginMigration.sharing.role.owner`,
                            defaultMessage: `Owner`
                        })
                    })]
                }), n.subjects && n.subjects.map((e, t) => we(e) && !(r != null && w(e) && e.user_id === r.user_id) && (0, Q.jsxs)(`div`, {
                    className: o ? `flex items-center justify-between gap-3 text-sm` : `flex flex-row items-center justify-between space-x-3 py-2`,
                    children: [o && (0, Q.jsx)(Oe, {
                        name: En(e),
                        initialsCount: w(e) ? 2 : 1,
                        className: `shrink-0`
                    }), (0, Q.jsxs)(`div`, {
                        className: `min-w-0 flex-1 break-words`,
                        children: [(0, Q.jsx)(`span`, {
                            className: o ? `text-sm font-semibold` : `text-base font-semibold`,
                            children: wn(e)
                        }), w(e) && (0, Q.jsxs)(Q.Fragment, {
                            children: [(0, Q.jsx)(`br`, {}), (0, Q.jsx)(`span`, {
                                className: `text-token-text-secondary text-sm`,
                                children: Tn(e)
                            })]
                        })]
                    }), (0, Q.jsx)(`span`, {
                        className: `text-token-text-secondary shrink-0`,
                        children: (0, Q.jsx)(B, {
                            ...Y(e.capabilities)
                        })
                    })]
                }, t))]
            }), t[9] = r, t[10] = n.subjects, t[11] = o, t[12] = d) : d = t[12], c = o ? `border-token-border-light mt-4 flex flex-col gap-4 border-t pt-4` : `my-4`;
            let f = o ? `text-base font-semibold` : `text-token-text-secondary text-xs font-semibold`,
                p;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, Q.jsx)(B, {
                id: `q9XNZ7`,
                defaultMessage: `Access`
            }), t[13] = p) : p = t[13], t[14] === f ? l = t[15] : (l = (0, Q.jsx)(`h3`, {
                className: f,
                children: p
            }), t[14] = f, t[15] = l);
            let m;
            t[16] !== o || t[17] !== i ? (m = e => {
                let {
                    level: t,
                    subject: n
                } = e, r = $[t];
                return (0, Q.jsxs)(`div`, {
                    className: o ? `flex items-center gap-3 text-start text-sm` : `ms-[3px] flex flex-row items-center py-3 text-start text-base font-semibold`,
                    children: [(0, Q.jsx)(r, {
                        className: o ? `icon text-token-text-secondary shrink-0` : `md:icon-lg me-3 h-6 w-6 shrink-0`
                    }), (0, Q.jsx)(`div`, {
                        className: o ? `min-w-0 flex-1` : `flex flex-col`,
                        children: (0, Q.jsx)(`span`, {
                            className: o ? void 0 : `font-semibold`,
                            children: (0, Q.jsx)(B, {
                                ...o ? zn[t] : Bn[t] ?? zn[t],
                                values: {
                                    workspaceName: i
                                }
                            })
                        })
                    }), o && n != null && (0, Q.jsx)(`span`, {
                        className: `text-token-text-secondary ms-3 shrink-0 text-sm font-normal`,
                        children: (0, Q.jsx)(B, {
                            ...Y(n.capabilities)
                        })
                    })]
                }, t)
            }, t[16] = o, t[17] = i, t[18] = m) : m = t[18], u = a.map(m), t[0] = r, t[1] = s, t[2] = n.subjects, t[3] = o, t[4] = i, t[5] = c, t[6] = l, t[7] = u, t[8] = d
        } else c = t[5], l = t[6], u = t[7], d = t[8];
        let f;
        t[19] !== c || t[20] !== l || t[21] !== u ? (f = (0, Q.jsxs)(`div`, {
            className: c,
            children: [l, u]
        }), t[19] = c, t[20] = l, t[21] = u, t[22] = f) : f = t[22];
        let p;
        return t[23] !== d || t[24] !== f ? (p = (0, Q.jsxs)(Q.Fragment, {
            children: [d, f]
        }), t[23] = d, t[24] = f, t[25] = p) : p = t[25], p
    }
}));
export {
    G as A, on as C, Vt as D, tn as E, rn as O, fn as S, Xt as T, dn as _, $ as a, pn as b, X as c, _n as d, bn as f, un as g, mn as h, Sn as i, Bt as k, Hn as l, gn as m, jn as n, On as o, hn as p, An as r, xn as s, Vn as t, Dn as u, an as v, en as w, sn as x, ln as y
};
//# sourceMappingURL=d84f4c09-evun2hqteoa7pvzf.js.map