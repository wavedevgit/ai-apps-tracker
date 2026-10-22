const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/fbf44c55-o2lsxc57nll08quu.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $D as r,
    $T as i,
    A2 as a,
    AE as o,
    Aw as s,
    BO as c,
    BV as l,
    Bz as u,
    CD as d,
    CR as f,
    FS as p,
    GV as m,
    IU as h,
    J7 as ee,
    JO as g,
    JV as _,
    LU as te,
    MV as v,
    ND as ne,
    NV as re,
    OD as ie,
    Ow as y,
    PV as ae,
    Q7 as b,
    QD as oe,
    QO as se,
    Qy as ce,
    RU as x,
    SN as le,
    TR as ue,
    U1 as de,
    VO as fe,
    Vw as pe,
    Vz as me,
    WV as he,
    YV as ge,
    ZG as _e,
    Zy as ve,
    _D as ye,
    a2 as be,
    aO as xe,
    bct as Se,
    bh as Ce,
    c7 as we,
    eE as S,
    eK as Te,
    eO as Ee,
    hD as C,
    hrt as w,
    iH as T,
    iO as E,
    it as D,
    j2 as O,
    jE as k,
    k8 as De,
    kE as A,
    kS as Oe,
    l7 as j,
    lct as ke,
    lrt as Ae,
    nH as M,
    nt as je,
    o0 as Me,
    o2 as Ne,
    oK as Pe,
    oW as Fe,
    ot as Ie,
    q1 as Le,
    q5 as Re,
    qO as ze,
    rH as Be,
    sK as Ve,
    sW as N,
    tt as P,
    vh as He,
    wh as Ue,
    xN as We,
    zV as F,
    zw as I
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as L,
    In as R,
    Ln as Ge,
    N as Ke,
    Nn as z,
    O as qe,
    Rn as B,
    Vn as Je,
    cn as Ye,
    ln as Xe,
    s as Ze,
    wn as Qe,
    zn as V
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Cn as $e,
    A6t as et,
    Bst as tt,
    Kh as nt,
    Vst as rt,
    _Un as it,
    aMt as at,
    oMt as ot,
    qh as st,
    rMt as ct,
    rwn as lt,
    sMt as ut,
    vUn as H,
    w6t as dt,
    yUn as ft
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Am as pt,
    By as mt,
    Ef as ht,
    FS as gt,
    Fx as _t,
    IS as vt,
    Ix as yt,
    Mv as bt,
    Nv as xt,
    Rv as St,
    Tf as Ct,
    Vy as wt,
    dS as Tt,
    jm as Et,
    uS as Dt,
    vv as Ot,
    yv as kt,
    zv as At
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    _m as jt,
    h_ as Mt,
    m_ as U,
    vm as Nt
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    n as Pt,
    t as Ft
} from "./92b4bb27-410adqexx6r0v29d.js";
import {
    n as It,
    r as Lt
} from "./3d705e5d-is2nynkj0c3lzm98.js";

function Rt(e) {
    return e === l.User || e === l.Group ? l.Private : e === l.WorkspaceLink ? l.Workspace : e
}

function W(e, t) {
    return e = Rt(e), t !== void 0 && t.some(t => t.recipient === e && t.allowed)
}

function zt(e, t) {
    return t === void 0 ? [] : (e = Rt(e), t.find(t => t.recipient === e)?.moderated_fields ?? void 0)
}

function Bt(e, t) {
    let n = zt(e, t);
    return n != null && n.length > 0
}
var Vt = e((() => {
    _()
}));

function Ht(e) {
    if (!e) return;
    let t = e.gizmo.appeal_info?.state.kind === `appeal_sent`,
        n = Ut(e.gizmo.share_recipient, e.gizmo.sharing_targets ?? void 0);
    return {
        sharingRecipient: e.gizmo.share_recipient,
        categories: e.gizmo.display.categories,
        gizmoId: e.gizmo.id,
        moderationType: n,
        sharingTargets: e.gizmo.sharing_targets ?? void 0,
        showModal: t ? 2 : n === 0 ? 0 : 1
    }
}

function Ut(e, t = []) {
    let n = new Set(t.filter(e => e.allowed).map(e => e.recipient));
    if (!e || (e in rn && (e = rn[e]), n.has(e))) return 0;
    let r = n.has(l.Private) || n.has(l.Workspace),
        i = n.has(l.Link) || n.has(l.Marketplace);
    return e === l.Marketplace && i ? 2 : !i && r ? 3 : 4
}

function Wt(e) {
    switch (e) {
        case 0:
        case 1:
            return R({
                id: `gizmo.appeals.publishBlockedTitle`,
                defaultMessage: `Your changes couldn’t be published`
            });
        case 2:
            return R({
                id: `gizmo.appeals.removedFromMarketplaceTitle`,
                defaultMessage: `Your GPT has been removed from the marketplace`
            });
        case 3:
            return R({
                id: `gizmo.appeals.removedFromPublicTitle`,
                defaultMessage: `Your GPT has been removed from public view`
            });
        case 4:
            return R({
                id: `gizmo.appeals.removedFromPrivateTitle`,
                defaultMessage: `Your GPT has been removed from private view`
            });
        case 5:
            return R({
                id: `gizmo.appeals.recategorizedTitle`,
                defaultMessage: `Your GPT has been recategorized`
            })
    }
}

function Gt(e) {
    switch (e) {
        case `profile_picture`:
            return R({
                id: `gizmo.appeals.profilePictureFieldName`,
                defaultMessage: `Profile Picture`
            });
        case `gizmo_name`:
            return R({
                id: `gizmo.appeals.gizmoNameFieldName`,
                defaultMessage: `Name`
            });
        case `gizmo_description`:
            return R({
                id: `gizmo.appeals.gizmoDescriptionFieldName`,
                defaultMessage: `Description`
            });
        case `gizmo_instructions`:
            return R({
                id: `gizmo.appeals.gizmoInstructionsFieldName`,
                defaultMessage: `Instructions`
            });
        case `gizmo_welcome_message`:
            return R({
                id: `gizmo.appeals.gizmoWelcomeMessageFieldName`,
                defaultMessage: `Welcome Message`
            });
        case `custom_actions`:
            return R({
                id: `gizmo.appeals.customActionsFieldName`,
                defaultMessage: `Custom Actions`
            });
        case `conversation_starter`:
            return R({
                id: `gizmo.appeals.conversationStarterFieldName`,
                defaultMessage: `Conversation Starter`
            });
        case `file`:
            return R({
                id: `gizmo.appeals.fileFieldName`,
                defaultMessage: `File`
            });
        case `gizmo_combined_content`:
            return R({
                id: `gizmo.appeals.gizmoCombinedContentFieldName`,
                defaultMessage: `GPT Content`
            });
        default:
            throw Error(`Unhandled moderation field: ${e}`)
    }
}

function Kt(e) {
    switch (e) {
        case l.Email:
        case l.Private:
        case l.Workspace:
            return R({
                id: `gizmo.appeals.privateRecipientModerationText`,
                defaultMessage: `Your GPT can’t be updated because it violates our {usagePolicyLink}Usage Policies{usagePolicyLink}.`
            });
        case l.Link:
            return R({
                id: `gizmo.appeals.linkRecipientModerationText`,
                defaultMessage: `Your GPT can’t be shared publicly because it violates our {usagePolicyLink}Usage Policies{usagePolicyLink}.`
            });
        case l.Marketplace:
            return R({
                id: `gizmo.appeals.marketplaceRecipientModerationText`,
                defaultMessage: `Your GPT can’t appear in the Explore GPTs page because it violates our {usagePolicyLink}Usage Policies{usagePolicyLink}.`
            });
        default:
            (0, Qt.default)(e)
    }
}

function qt({
    sharingRecipient: e,
    moderatedFields: t,
    appealAvailable: n
}) {
    let r = t.length;
    return (0, K.jsxs)(K.Fragment, {
        children: [(0, K.jsxs)(`p`, {
            children: [(0, K.jsx)(z, {
                ...Kt(e),
                values: {
                    usagePolicyLink: e => (0, K.jsx)($t, {
                        target: `_blank`,
                        href: `https://openai.com/policies/usage-policies`,
                        rel: `noreferrer`,
                        children: e
                    })
                }
            }), ` `, r > 0 && (0, K.jsx)(z, {
                id: `gizmo.appeals.seeBelowForSpecificIssues`,
                defaultMessage: `{numModeratedFields, plural,
              one {See below for the specific issue:}
              other {See below for the specific issues:}
            }`,
                values: {
                    numModeratedFields: r
                }
            })]
        }), r > 0 && t?.map(e => (0, K.jsxs)(K.Fragment, {
            children: [(0, K.jsx)(`p`, {
                className: `font-bold`,
                children: (0, K.jsx)(z, {
                    ...Gt(e.name)
                })
            }), (0, K.jsx)(`ul`, {
                className: `list-disc ps-5`,
                children: e.reasons.map(e => (0, K.jsxs)(`li`, {
                    children: [e.description, ` `, e.link ? (0, K.jsx)($t, {
                        href: e.link,
                        target: `_blank`,
                        rel: `noreferrer`,
                        children: (0, K.jsx)(z, {
                            id: `gizmo.appeals.learnMore`,
                            defaultMessage: `Learn more`
                        })
                    }) : ``]
                }, e.description))
            })]
        })), n && (0, K.jsx)(`p`, {
            children: (0, K.jsx)(z, {
                id: `gizmo.appeals.appealAvailableText`,
                defaultMessage: `If you think this was a mistake, use the appeal link in the email we sent you. Or you can publish to “Only me” and use this GPT privately.`
            })
        })]
    })
}

function Jt({
    gizmoId: e,
    sharingRecipient: t,
    categories: n,
    moderationType: r,
    sharingTargets: i,
    appealAvailable: a,
    onClose: o,
    onAppealSubmitted: s
}) {
    let l = V(),
        [u, d] = (0, G.useState)(``),
        [f, p] = (0, G.useState)(0),
        [m, h] = (0, G.useState)(!1),
        ee = Ke(),
        g = async () => {
            h(!0);
            try {
                await c.postGizmoAppeal(ee, e, u, t, n), p(2), s?.()
            } finally {
                h(!1)
            }
        }, _ = zt(t, i), te = _?.length ?? 0, v = de();
    if (te === 0 && v?.isEnterprisey()) return (0, K.jsx)(y, {
        testId: `modal-gizmo-appeal-available`,
        title: l.formatMessage(Wt(r)),
        isOpen: !0,
        onClose: o,
        showCloseButton: !0,
        type: `warning`,
        primaryButton: (0, K.jsx)(I.Button, {
            color: `primary`,
            onClick: o,
            children: (0, K.jsx)(z, {
                id: `wEsAOU`,
                defaultMessage: `OK`
            })
        }),
        children: (0, K.jsx)(`p`, {
            className: `text-sm`,
            children: (0, K.jsx)(z, {
                id: `gizmo.appeals.workspaceSettingsMessage`,
                defaultMessage: `Access to your GPT has been reduced by your workspace's GPT sharing settings. An owner of the workspace can change these settings in the workspace settings page.`
            })
        })
    });
    switch (f) {
        case 0:
            return (0, K.jsx)(y, {
                testId: `modal-gizmo-appeal-available`,
                title: l.formatMessage(Wt(r)),
                isOpen: !0,
                onClose: o,
                showCloseButton: !0,
                primaryButton: (0, K.jsx)(I.Button, {
                    color: `primary`,
                    onClick: o,
                    children: (0, K.jsx)(z, {
                        id: `gizmo.appeals.contunueButton`,
                        defaultMessage: `Continue`
                    })
                }),
                type: `warning`,
                children: (0, K.jsx)(`div`, {
                    className: `flex flex-col gap-2 text-sm`,
                    children: (0, K.jsx)(qt, {
                        sharingRecipient: t,
                        moderatedFields: _ ?? [],
                        appealAvailable: a
                    })
                })
            });
        case 1:
            return (0, K.jsx)(y, {
                testId: `modal-gizmo-appeal-form`,
                title: l.formatMessage({
                    id: `gizmo.appeals.appealModalTitle`,
                    defaultMessage: `Appeal`
                }),
                isOpen: !0,
                onClose: o,
                showCloseButton: !0,
                shouldIgnoreClickOutside: !0,
                primaryButton: (0, K.jsx)(I.Button, {
                    color: `primary`,
                    onClick: g,
                    disabled: m || u.trim().length === 0,
                    children: (0, K.jsx)(z, {
                        id: `gizmo.appeals.submitAppealButton`,
                        defaultMessage: `Submit`
                    })
                }),
                secondaryButton: (0, K.jsx)(I.Button, {
                    onClick: () => p(0),
                    children: (0, K.jsx)(z, {
                        id: `gizmo.appeals.backButton`,
                        defaultMessage: `Back`
                    })
                }),
                type: `warning`,
                children: (0, K.jsxs)(`div`, {
                    className: `flex flex-col gap-2 text-sm`,
                    children: [(0, K.jsx)(`p`, {
                        children: (0, K.jsx)(z, {
                            id: `gizmo.appeals.appealReasonText`,
                            defaultMessage: `Please provide a reason for why you believe this GPT doesn’t violate our policies and should be published`
                        })
                    }), (0, K.jsx)(en, {
                        value: u,
                        onChange: e => d(e.target.value)
                    })]
                })
            });
        case 2:
            return (0, K.jsx)(K.Fragment, {})
    }
}

function Yt({
    onClose: e
}) {
    return (0, K.jsx)(y, {
        testId: `modal-gizmo-appeal-submitted`,
        title: V().formatMessage({
            id: `gizmo.appeals.appealSubmittedModalTitle`,
            defaultMessage: `Appeal submitted`
        }),
        isOpen: !0,
        onClose: e,
        showCloseButton: !0,
        primaryButton: (0, K.jsx)(I.Button, {
            color: `primary`,
            onClick: e,
            children: (0, K.jsx)(z, {
                id: `gizmo.appeals.closeButton`,
                defaultMessage: `Close`
            })
        }),
        type: `success`,
        children: (0, K.jsx)(`div`, {
            className: `flex flex-col gap-2 text-sm`,
            children: (0, K.jsx)(`div`, {
                children: (0, K.jsx)(z, {
                    id: `gizmo.appeals.appealSubmittedText`,
                    defaultMessage: `Your appeal has been submitted. We will get back to you as soon as possible.`
                })
            })
        })
    })
}

function Xt({
    gizmoId: e,
    onClose: t
}) {
    let n = Re(() => C(e).data),
        r = Ke(),
        i = async () => {
            await c.postGizmoCancelAppeal(r, e)
        };
    return (0, K.jsx)(y, {
        testId: `modal-gizmo-appeal-sent`,
        isOpen: !0,
        onClose: le,
        primaryButton: (0, K.jsx)(I.Button, {
            color: `primary`,
            onClick: () => {
                i(), t?.()
            },
            children: (0, K.jsx)(z, {
                id: `gizmo.appeals.cancelAppealButton`,
                defaultMessage: `Cancel appeal`
            })
        }),
        type: `warning`,
        children: (0, K.jsxs)(`div`, {
            className: `flex flex-col gap-2 text-sm`,
            children: [(0, K.jsx)(`h2`, {
                className: `text-lg font-semibold`,
                children: (0, K.jsx)(z, {
                    id: `gizmo.appeals.appealReviewingHeader`,
                    defaultMessage: `Reviewing your appeal`
                })
            }), (0, K.jsx)(`p`, {
                children: (0, K.jsx)(z, {
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

function Zt({
    appealState: e,
    onAppealClose: t,
    onAppealSubmitted: n
}) {
    let r = Ae(`4226692983`),
        [i, a] = (0, G.useState)(!1);
    return i ? (0, K.jsx)(Yt, {
        onClose: () => {
            a(!1), n?.()
        }
    }) : (0, K.jsxs)(K.Fragment, {
        children: [e?.showModal === 2 && (0, K.jsx)(Xt, {
            gizmoId: e.gizmoId,
            onClose: t
        }), e?.showModal === 1 && (0, K.jsx)(Jt, {
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
var Qt, G, K, $t, en, tn, nn, rn, an = e((() => {
    pe(), s(), ye(), fe(), _(), De(), Le(), w(), Ze(), Qt = n(k()), We(), G = n(Je()), B(), o(), Vt(), K = L(), $t = A.a`bold underline`, en = A.textarea`w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32`, tn = function(e) {
        return e[e.None = 0] = `None`, e[e.AppealAvailable = 1] = `AppealAvailable`, e[e.AppealSent = 2] = `AppealSent`, e
    }({}), nn = function(e) {
        return e[e.None = 0] = `None`, e[e.PublishBlocked = 1] = `PublishBlocked`, e[e.RemovedFromMarketplace = 2] = `RemovedFromMarketplace`, e[e.RemovedFromPublic = 3] = `RemovedFromPublic`, e[e.RemovedFromPrivate = 4] = `RemovedFromPrivate`, e[e.Recategorized = 5] = `Recategorized`, e
    }({}), rn = {
        [l.User]: l.Private,
        [l.Group]: l.Private,
        [l.Email]: l.Private,
        [l.WorkspaceLink]: l.Workspace
    }
}));

function on(e, t) {
    if (t == null) return e;

    function n(e) {
        return typeof e == `object` && e ? Array.isArray(e) ? e.map(n) : Object.fromEntries(Object.entries(e).map(([e, t]) => [e, n(t)])) : e === null ? void 0 : e
    }
    return t = n(t), {
        ...e,
        ...t
    }
}

function sn(e) {
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

function cn(e) {
    return e === `link` || e === `marketplace`
}

function ln(e) {
    try {
        return new URL(e), !0
    } catch {
        return !1
    }
}

function un(e, t, n) {
    let r = e.name.length > 50,
        i = (e.description?.length ?? 0) > 300,
        a = (e.instructions?.length ?? 0) > ct,
        o = [];
    if (e?.name === `` && o.push(6), r && o.push(3), i && o.push(4), a && o.push(5), t != null && cn(t)) {
        let t = e.tools?.filter(e => e.type === ke.JIT_PLUGIN);
        for (let e of t) {
            let t = e.metadata?.privacy_policy_url;
            if (t == null || !ln(t)) {
                o.push(7);
                break
            }
        }
    }
    return t === l.Marketplace && n == null && o.push(8), o
}
var dn, fn, pn, mn = e((() => {
    Se(), _(), at(), B(), dn = function(e) {
        return e[e.Loading = 0] = `Loading`, e[e.UploadingProfilePic = 1] = `UploadingProfilePic`, e[e.GeneratingProfilePic = 2] = `GeneratingProfilePic`, e[e.GizmoNameTooLong = 3] = `GizmoNameTooLong`, e[e.GizmoDescriptionTooLong = 4] = `GizmoDescriptionTooLong`, e[e.GizmoInstructionsTooLong = 5] = `GizmoInstructionsTooLong`, e[e.NameEmpty = 6] = `NameEmpty`, e[e.MissingPublicActionPrivacyPolicyURL = 7] = `MissingPublicActionPrivacyPolicyURL`, e[e.MissingCategory = 8] = `MissingCategory`, e
    }({}), fn = {
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
            recipient: l.Private,
            subjects: []
        },
        tools: [{
            type: ke.IMAGE_GEN
        }],
        files: [],
        defaultModel: null,
        trainingDisabled: !1,
        liveVersion: 0,
        contextStuffingBudget: null,
        firstPartyProjectType: null
    }, pn = Ge({
        instructionsWarning: {
            id: `gizmo.instructionsWarning`,
            defaultMessage: `Conversations with your GPT can potentially include part or all of the instructions provided.`
        }
    })
}));

function hn(e) {
    return !cn(e.sharingRecipient ?? l.Private) && Ae(`1056818577`)
}

function gn(e, t) {
    return t && cn(e) ? l.Private : e
}
var _n = e((() => {
    w(), mn(), _()
}));

function vn() {
    "use forget";
    let e = (0, bn.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, q.jsx)(`div`, {
        role: `status`,
        className: `border-token-border-status-warning bg-token-bg-status-warning text-token-text-status-warning rounded-md border px-2.5 py-1.5 text-xs leading-4`,
        children: (0, q.jsx)(z, {
            id: `gizmo.publish.new_gpt.public_sharing_disabled.notice`,
            defaultMessage: `Sharing GPTs with the public is no longer available. <link>Learn more</link>`,
            values: {
                link: yn
            }
        })
    }), e[0] = t) : t = e[0], t
}

function yn(e) {
    return (0, q.jsx)(`a`, {
        href: `https://help.openai.com/en/articles/8554397-creating-a-gpt`,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `underline`,
        children: e
    })
}
var bn, q, xn = e((() => {
        bn = Qe(), B(), q = L()
    })),
    Sn = t({
        GizmoSharingDetails: () => $,
        GizmoTile: () => Mn,
        GizmoUpdatedModal: () => jn,
        HipaaGizmoShareWarning: () => Cn,
        SHARE_LEVEL_ICONS: () => Q,
        ShareGizmoModal: () => kn,
        ShareLevelItem: () => Y,
        sharingSubjectToSharingParam: () => On
    });

function Cn() {
    return (0, Z.jsxs)(`div`, {
        className: `border-token-border-medium bg-token-main-surface-secondary text-token-text-primary flex items-start gap-3 rounded-md border px-4 py-3 text-sm`,
        children: [(0, Z.jsx)(N, {
            className: `icon-sm interactive-label-warning-secondary mt-0.5 shrink-0`
        }), (0, Z.jsx)(z, {
            id: `gizmo.share.hipaaCompliance.warning`,
            defaultMessage: `OpenAI supports HIPAA compliance for your use of custom GPTs in this workspace. If you share or publish this GPT with others, your BAA does not apply to their use. Do not represent this GPT to third parties as HIPAA compliant.`
        })]
    })
}

function wn(e, t) {
    return T(e) ? T(t) && e.user_id === t.user_id : M(e) ? M(t) && e.group_id === t.group_id : ge(e) ? ge(t) && e.user_email.toLowerCase() === t.user_email.toLowerCase() : e.type === t.type
}

function Tn(e) {
    return M(e) ? e.group_name : T(e) ? e.user_name : e.user_email
}

function En(e) {
    return T(e) ? e.user_email : null
}

function Dn(e) {
    return M(e) ? e.group_name : T(e) ? `${e.user_name} ${e.user_email}` : e.user_email
}

function On(e) {
    if (typeof e.type == `string`) return e;
    let t = zn[e.type];
    if (!t) throw Error(`Unknown sharing subject type: ` + e.type);
    return {
        ...e,
        type: t
    }
}

function kn({
    gizmo: e,
    publishedGizmo: t,
    updateGizmo: n,
    promoteGizmo: r,
    appealGizmo: a,
    setAppealState: o,
    showActionsModal: s,
    shareOnly: u,
    onClose: d,
    workspaceOwner: f = !1
}) {
    let p = V(),
        g = Re(se),
        {
            data: _
        } = ne(f ? void 0 : e.id),
        te = _?.gizmo.migrated_plugin_id ?? e.migratedPluginId ?? t?.gizmo.migrated_plugin_id,
        ae = Ee(te),
        b = Me(),
        ce = hn(e),
        le = b?.isHipaaCompliantWorkspace ?? !1,
        de = xe().trim(),
        fe = b?.id,
        {
            data: pe,
            isLoading: me
        } = Te(fe),
        ge = Lt(pe),
        _e = b?.isEnterprisey() ?? !1,
        ye = b?.data?.role,
        be = ye != null && $e(ye),
        Se;
    Se = fe == null ? void 0 : f || be || !_e ? !0 : me ? void 0 : pe?.permissions?.includes(Pe.MemberRoleView) ?? !1;
    let S = de || `your workspace`,
        C = ue(),
        w = ie(),
        [E, D] = (0, X.useState)(void 0);
    (0, X.useEffect)(() => {
        if (E === void 0)
            if (t?.gizmo.display.categories && t?.gizmo.display.categories.length > 0) {
                let e = w.data?.categories.find(e => e.id === t?.gizmo.display.categories[0]);
                e && D(e)
            } else w.data !== void 0 && D(w.data.categories[w.data.categories.length - 1])
    }, [w.data, E, t]);
    let [k, De] = (0, X.useState)(() => gn(e.sharingRecipient ?? l.Private, ce)), [A, j] = (0, X.useState)(e.sharing?.subjects ?? []), [Ae, je] = (0, X.useState)(null), [Ne, Fe] = (0, X.useState)(!1), Ie = (0, X.useRef)(null), Le = (0, X.useRef)(A.length);
    (0, X.useEffect)(() => {
        A.length > Le.current && requestAnimationFrame(() => {
            Ie.current?.scrollTo({
                top: Ie.current.scrollHeight,
                behavior: `smooth`
            })
        }), Le.current = A.length
    }, [A]);
    let Ve = (0, X.useCallback)(() => !O(e.sharing?.subjects, A) || e.sharingRecipient !== k, [e.sharing, e.sharingRecipient, k, A]),
        N = Ke(),
        P = un(e, k, E?.id ?? void 0),
        Ue = P.includes(dn.MissingPublicActionPrivacyPolicyURL),
        We = e.tools.find(e => e.type === ke.JIT_PLUGIN && !e.metadata.privacy_policy_url);
    if (g || ae) return (0, Z.jsx)(y, {
        isOpen: !0,
        onClose: d,
        title: (0, Z.jsx)(z, {
            ...ae ? oe.title : ze.readOnlyTitle
        }),
        showCloseButton: !0,
        children: (0, Z.jsx)(z, {
            ...ae ? oe.notice : ze.sharingNotice
        })
    });
    if (Ae) return (0, Z.jsx)(jn, {
        publishedGizmo: Ae,
        sharing: {
            recipient: k,
            subjects: A
        },
        workspaceName: S,
        onClose: d
    });

    function I(e) {
        A.find(t => wn(t, e)) || j([...A, e])
    }
    let L = m(A);

    function R(e) {
        let t = A.filter(e => [F.WORKSPACE, F.ALL].indexOf(e.type) === -1);
        e != null && t.push(e), j(t)
    }

    function Ge(e) {
        switch (De(e), e) {
            case l.Marketplace:
            case l.Link:
                R({
                    type: F.ALL,
                    capabilities: v
                });
                break;
            case l.Workspace:
            case l.WorkspaceLink:
                R({
                    type: F.WORKSPACE,
                    capabilities: v
                });
                break;
            default:
                R(null)
        }
    }

    function qe(e) {
        L != null && j(A.map(t => t === L ? {
            ...t,
            capabilities: e
        } : t))
    }

    function B(e, t, n) {
        return e.type === F.USER && e.user_id.indexOf(`__`) === -1 ? {
            ...e,
            user_id: e.user_id + `__` + b?.getWorkspaceId()
        } : e
    }
    async function Je(e, i) {
        if (Ne || se() || Ee(te)) return;
        if (e && !i) throw Error(`Cannot share a gizmo that hasn't been promoted before`);
        if (!E) return;
        Fe(!0);
        let a = A.map(B).map(On);
        if (a = he(k, a, L?.capabilities ?? v), f) return !b || !i ? (x.warning(`Unable to change sharing settings`), d()) : (await ee.safePost(`/accounts/{account_id}/gpts/{gizmo_id}/share`, {
            parameters: {
                path: {
                    account_id: b.id,
                    gizmo_id: i
                }
            },
            requestBody: {
                sharing: a
            }
        }), x.success(p.formatMessage({
            id: `SWSzcY`,
            defaultMessage: `Sharing settings updated`
        })), N.invalidateQueries({
            queryKey: [`workspace`]
        }), d());
        if (e) {
            if (!i || !t) throw Error(`No gizmo ID to share`);
            try {
                let e = {
                    sharing: a
                };
                E && (e.categories = [E.id]);
                let r = await c.shareGizmo(i, e);
                if (r.error) Bt(k, r.sharing_targets ?? void 0) ? (o?.({
                    gizmoId: t.gizmo.id,
                    sharingRecipient: k,
                    categories: t.gizmo.display.categories,
                    moderationType: nn.PublishBlocked,
                    sharingTargets: r.sharing_targets ?? void 0,
                    showModal: tn.AppealAvailable
                }), d()) : x.warning(p.formatMessage({
                    id: `tmIKmp`,
                    defaultMessage: `Unable to share GPT`
                }));
                else {
                    if (r.resource == null) throw Error(`Missing shared gizmo resource`);
                    N.setQueryData([`gizmo`, {
                        gizmoId: t.gizmo.id
                    }, {
                        draft: !1
                    }], e => r.resource), n?.(e => ({
                        ...e,
                        sharing: {
                            recipient: k,
                            subjects: A
                        },
                        sharingRecipient: k
                    })), x.success(p.formatMessage({
                        id: `SWSzcY`,
                        defaultMessage: `Sharing settings updated`
                    })), d()
                }
            } catch {
                return x.warning(p.formatMessage({
                    id: `dKC65l`,
                    defaultMessage: `Failed to update sharing settings`
                })), d()
            }
        } else {
            if (r) {
                let e = await r({
                    subjects: a,
                    recipient: k
                }, E.id);
                i ||= e?.gizmo.id, je(e ?? null), n?.({
                    liveVersion: e?.gizmo.live_version ?? void 0
                })
            }
            N.invalidateQueries({
                queryKey: [`gizmo`, {
                    gizmoId: i
                }]
            })
        }
        Fe(!1), N.invalidateQueries({
            queryKey: [`gizmos`]
        }), N.refetchQueries({
            queryKey: [`gizmos`, `discovery`]
        }), N.refetchQueries({
            queryKey: [`gizmo`, {
                gizmoId: i
            }]
        }), N.invalidateQueries({
            queryKey: [`gizmo`, `userActionSettings`, {
                gizmoId: i
            }]
        }), N.invalidateQueries({
            queryKey: [`workspace`]
        }), n?.({
            sharing: {
                recipient: k,
                subjects: A
            },
            sharingRecipient: k
        }, !1)
    }
    let Ye = !t || Pn(t.gizmo.author.user_id.split(`__`)[0], C?.id),
        Xe = t?.gizmo.author.display_name || null;
    return (0, Z.jsx)(y, {
        testId: `modal-share-gizmo`,
        type: `success`,
        className: `max-w-[555px]`,
        size: `custom`,
        isOpen: !0,
        onClose: d,
        primaryButton: Bt(k, e.sharingTargets) ? (0, Z.jsx)(i, {
            onClick: () => a(k, E?.id),
            children: (0, Z.jsx)(z, {
                id: `yS4os0`,
                defaultMessage: `Learn more`
            })
        }) : (0, Z.jsx)(i, {
            onClick: () => Je(u, t?.gizmo.id),
            loading: Ne,
            disabled: P.length > 0 || !W(k, e.sharingTargets),
            children: u ? (0, Z.jsx)(z, {
                id: `BEKjVh`,
                defaultMessage: `Save`
            }) : (0, Z.jsx)(z, {
                id: `24j5ts`,
                defaultMessage: `Update`
            })
        }),
        secondaryButton: (0, Z.jsxs)(Z.Fragment, {
            children: [Ve() && (0, Z.jsx)(`div`, {
                className: `text-token-text-secondary absolute start-6 bottom-8 text-sm`,
                children: (0, Z.jsx)(z, {
                    id: `9CkgC4`,
                    defaultMessage: `Unsaved changes`
                })
            }), t && (0, Z.jsx)(i, {
                color: `secondary`,
                onClick: e => Oe(t, h(), e, p.formatMessage({
                    id: `KdDqMm`,
                    defaultMessage: `Copied link to clipboard`
                })),
                children: (0, Z.jsx)(z, {
                    id: `wvL15a`,
                    defaultMessage: `Copy link`
                })
            })]
        }),
        title: p.formatMessage({
            id: `7JggXH`,
            defaultMessage: `Share GPT`
        }),
        showCloseButton: !0,
        children: (0, Z.jsxs)(`div`, {
            className: `flex flex-col space-y-4`,
            children: [(0, Z.jsx)(Nn, {
                onAdd: e => I(e),
                publishedGizmo: t,
                canListMembers: Se,
                allowScimGroupSharing: ge
            }), le && (0, Z.jsx)(Cn, {}), (0, Z.jsx)(`h3`, {
                className: `text-base font-semibold`,
                children: (0, Z.jsx)(z, {
                    id: `bNQXcV`,
                    defaultMessage: `Share with...`
                })
            }), (0, Z.jsxs)(`div`, {
                ref: Ie,
                className: `max-h-[200px] space-y-2 overflow-y-auto`,
                children: [(0, Z.jsxs)(`div`, {
                    className: `mb-4 flex flex-row items-center justify-between space-x-3`,
                    children: [(0, Z.jsx)(`div`, {
                        className: `shrink-0 grow-0 self-start`,
                        children: Ye ? (0, Z.jsx)(Ce, {
                            user: C
                        }) : (0, Z.jsx)(He, {
                            name: Xe ?? `User`,
                            initialsCount: 2
                        })
                    }), (0, Z.jsx)(`div`, {
                        className: `grow text-base font-semibold`,
                        children: Ye ? (0, Z.jsxs)(`div`, {
                            className: `flex flex-col`,
                            children: [(0, Z.jsx)(z, {
                                id: `U7tzof`,
                                defaultMessage: `{userName} (you)`,
                                values: {
                                    userName: C?.name
                                }
                            }), (0, Z.jsx)(`span`, {
                                className: `text-token-text-secondary -mt-1 text-sm`,
                                children: C?.email
                            })]
                        }) : Xe ? (0, Z.jsx)(z, {
                            id: `scRZqV`,
                            defaultMessage: `{userName} (builder)`,
                            values: {
                                userName: Xe
                            }
                        }) : (0, Z.jsx)(z, {
                            id: `gizmo.share.builder.fallbackLabel`,
                            defaultMessage: `Builder`
                        })
                    })]
                }), A.map((e, t) => Be(e) && (0, Z.jsxs)(`div`, {
                    className: `mb-4 flex flex-row items-center justify-between space-x-3`,
                    children: [(0, Z.jsx)(He, {
                        name: Dn(e),
                        initialsCount: T(e) ? 2 : 1,
                        className: we(`shrink-0 grow-0`, T(e) && `self-start`)
                    }), (0, Z.jsxs)(`div`, {
                        className: `flex grow flex-col`,
                        children: [(0, Z.jsxs)(`span`, {
                            className: `flex flex-row`,
                            children: [(0, Z.jsx)(`span`, {
                                className: `me-2 text-base font-semibold`,
                                children: Tn(e)
                            }), M(e) && e.is_scim_managed && (0, Z.jsx)(Ln, {})]
                        }), T(e) && (0, Z.jsx)(`span`, {
                            className: `text-token-text-secondary -mt-1 text-sm`,
                            children: En(e)
                        })]
                    }), (0, Z.jsxs)(H.Root, {
                        children: [(0, Z.jsxs)(H.Trigger, {
                            className: `text-token-text-secondary text-base whitespace-nowrap`,
                            children: [(0, Z.jsx)(z, {
                                ...J(e.capabilities)
                            }), (0, Z.jsx)(mt, {
                                className: `icon`
                            })]
                        }), (0, Z.jsx)(H.Portal, {
                            children: (0, Z.jsxs)(H.Content, {
                                className: `max-w-[320px]`,
                                children: [Rn().map((t, n) => (0, Z.jsx)(An, {
                                    capabilities: t,
                                    selected: O(t, e.capabilities),
                                    onClick: () => {
                                        j(A.map(n => n === e ? {
                                            ...n,
                                            capabilities: t
                                        } : n))
                                    }
                                }, n)), (0, Z.jsx)(H.Separator, {
                                    className: `my-2`
                                }), (0, Z.jsx)(H.Item, {
                                    onClick: () => j(A.filter(t => t !== e)),
                                    color: `danger`,
                                    icon: kt,
                                    children: (0, Z.jsx)(z, {
                                        id: `NU0BOB`,
                                        defaultMessage: `Remove`
                                    })
                                })]
                            })
                        })]
                    })]
                }, t))]
            }), (0, Z.jsx)(`hr`, {
                className: `border-token-border-medium`
            }), (0, Z.jsx)(`h3`, {
                className: `text-base font-semibold`,
                children: (0, Z.jsx)(z, {
                    id: `uqD7Y8`,
                    defaultMessage: `Access`
                })
            }), ce && (0, Z.jsx)(vn, {}), (0, Z.jsxs)(`div`, {
                className: `-ms-3.5 flex flex-row items-center justify-between space-x-3`,
                children: [(0, Z.jsxs)(U.Root, {
                    value: k,
                    onValueChange: e => Ge(e),
                    children: [(0, Z.jsxs)(U.Trigger, {
                        children: [(0, Z.jsx)(U.Value, {}), (0, Z.jsx)(U.Icon, {})]
                    }), (0, Z.jsx)(U.Portal, {
                        children: (0, Z.jsxs)(U.Content, {
                            children: [(0, Z.jsxs)(U.Group, {
                                children: [(0, Z.jsx)(U.Label, {
                                    children: (0, Z.jsx)(z, {
                                        id: `YIQwaP`,
                                        defaultMessage: `Private`
                                    })
                                }), k === l.User ? (0, Z.jsx)(U.Item, {
                                    value: l.User,
                                    children: (0, Z.jsx)(Y, {
                                        shareLevel: l.User,
                                        workspaceName: S
                                    })
                                }) : (0, Z.jsx)(U.Item, {
                                    value: l.Private,
                                    children: (0, Z.jsx)(Y, {
                                        shareLevel: l.Private,
                                        workspaceName: S
                                    })
                                })]
                            }), (0, Z.jsx)(U.Separator, {}), (0, Z.jsx)(ve, {
                                triggerAs: null,
                                label: p.formatMessage({
                                    id: `n0m61x`,
                                    defaultMessage: `Your workspace has disabled sharing with the workspace.`
                                }),
                                side: `bottom`,
                                disabled: W(`workspace`, e.sharingTargets),
                                children: (0, Z.jsxs)(U.Group, {
                                    children: [(0, Z.jsx)(U.Label, {
                                        children: S
                                    }), (0, Z.jsx)(U.Item, {
                                        value: l.WorkspaceLink,
                                        disabled: !W(l.WorkspaceLink, e.sharingTargets) && !W(l.Workspace, e.sharingTargets),
                                        children: (0, Z.jsx)(Y, {
                                            shareLevel: l.WorkspaceLink,
                                            workspaceName: S
                                        })
                                    }), (0, Z.jsx)(U.Item, {
                                        value: l.Workspace,
                                        disabled: !W(`workspace`, e.sharingTargets),
                                        children: (0, Z.jsx)(Y, {
                                            shareLevel: l.Workspace,
                                            workspaceName: S
                                        })
                                    })]
                                })
                            }), !ce && (0, Z.jsxs)(Z.Fragment, {
                                children: [(0, Z.jsx)(U.Separator, {}), (0, Z.jsx)(ve, {
                                    triggerAs: null,
                                    label: p.formatMessage({
                                        id: `IHnort`,
                                        defaultMessage: `Your workspace has disabled public sharing.`
                                    }),
                                    side: `bottom`,
                                    disabled: W(`marketplace`, e.sharingTargets),
                                    children: (0, Z.jsxs)(U.Group, {
                                        children: [(0, Z.jsx)(U.Label, {
                                            children: (0, Z.jsx)(z, {
                                                id: `PjY9bi`,
                                                defaultMessage: `Public`
                                            })
                                        }), (0, Z.jsx)(U.Item, {
                                            value: l.Link,
                                            disabled: !W(`link`, e.sharingTargets),
                                            children: (0, Z.jsx)(Y, {
                                                shareLevel: l.Link,
                                                workspaceName: S
                                            })
                                        }), (0, Z.jsx)(U.Item, {
                                            disabled: !W(`marketplace`, e.sharingTargets),
                                            value: l.Marketplace,
                                            children: (0, Z.jsx)(Y, {
                                                shareLevel: l.Marketplace,
                                                workspaceName: S
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })]
                }), k !== l.Private && k !== l.User && (0, Z.jsxs)(H.Root, {
                    children: [(0, Z.jsxs)(H.Trigger, {
                        className: `text-token-text-secondary text-base whitespace-nowrap`,
                        children: [L == null ? (0, Z.jsx)(z, {
                            ...J(v)
                        }) : (0, Z.jsx)(z, {
                            ...J(L.capabilities)
                        }), (0, Z.jsx)(mt, {
                            className: `icon`
                        })]
                    }), (0, Z.jsx)(H.Portal, {
                        children: (0, Z.jsxs)(H.Content, {
                            className: `max-w-[320px]`,
                            children: [(0, Z.jsx)(An, {
                                onClick: () => qe(v),
                                capabilities: v,
                                selected: O(L?.capabilities, v)
                            }), k !== l.Marketplace && k !== l.Link && (0, Z.jsx)(An, {
                                onClick: () => qe(re),
                                capabilities: re,
                                selected: O(L?.capabilities, re)
                            })]
                        })
                    })]
                })]
            }), Ue && (0, Z.jsx)(`div`, {
                className: `text-xs text-red-500`,
                children: (0, Z.jsx)(z, {
                    id: `/iw1Iv`,
                    defaultMessage: `Public actions require valid privacy policy URLs. Click <fixlink>here</fixlink> to update.`,
                    values: {
                        fixlink: e => (0, Z.jsx)(`button`, {
                            onClick: () => {
                                s?.(We?.metadata.action_id), d()
                            },
                            className: `underline`,
                            children: e
                        })
                    }
                })
            }), (k === l.Marketplace || k === l.Workspace) && (W(k, e.sharingTargets) ? (0, Z.jsx)(Mn, {
                gizmo: e,
                category: E?.id,
                categories: w.data?.categories,
                onCategoryChange: e => D(e)
            }) : Bt(k, e.sharingTargets) ? (0, Z.jsx)(`div`, {
                className: `pb-2 text-xs text-red-500`,
                children: (0, Z.jsx)(qt, {
                    sharingRecipient: k,
                    moderatedFields: zt(k, e.sharingTargets) ?? [],
                    appealAvailable: !0
                })
            }) : (0, Z.jsx)(`div`, {
                className: `pb-2 text-xs text-red-500`,
                children: (0, Z.jsx)(z, {
                    id: `BzqqKH`,
                    defaultMessage: `Your workspace's settings don't allow this level of access. An owner of the workspace can change this setting in the workspace's GPTs settings.`
                })
            }))]
        })
    })
}

function J(e) {
    return e.can_write ? R({
        id: `SubCqD`,
        defaultMessage: `Can edit`
    }) : e.can_view_config ? R({
        id: `V6OjbX`,
        defaultMessage: `Can view settings`
    }) : e.can_read ? R({
        id: `/0j34W`,
        defaultMessage: `Can chat`
    }) : R({
        id: `x2E8ET`,
        defaultMessage: `Unknown`
    })
}

function An({
    capabilities: e,
    selected: t,
    onClick: n
}) {
    let r = null;
    e.can_write ? r = yt : e.can_view_config ? r = Et : e.can_read && (r = Dt);
    let i = e.can_write ? (0, Z.jsx)(z, {
        id: `wKFMT1`,
        defaultMessage: `Edit settings, duplicate, and chat`
    }) : e.can_view_config ? (0, Z.jsx)(z, {
        id: `Y/J4TZ`,
        defaultMessage: `See settings, duplicate, and chat`
    }) : e.can_read ? (0, Z.jsx)(z, {
        id: `PvgEQP`,
        defaultMessage: `Chat with this GPT only`
    }) : null;
    return (0, Z.jsxs)(H.Item, {
        className: `flex h-auto flex-row items-center px-3 py-3`,
        onClick: n,
        icon: r,
        children: [(0, Z.jsxs)(`div`, {
            className: `me-1 flex grow flex-col`,
            children: [(0, Z.jsx)(`span`, {
                className: `mb-0.5 text-base leading-tight`,
                children: (0, Z.jsx)(z, {
                    ...J(e)
                })
            }), (0, Z.jsx)(`span`, {
                className: `text-token-text-secondary text-xs`,
                children: i
            })]
        }), (0, Z.jsx)(bt, {
            className: we(`icon-lg shrink-0`, !t && `invisible`)
        })]
    })
}

function Y({
    shareLevel: e,
    workspaceName: t,
    hasInviteSharing: n = !0
}) {
    (e === l.User || e === l.Group || e === l.Email) && (e = l.Private);
    let r = Q[e];
    return (0, Z.jsxs)(`div`, {
        className: `flex flex-row items-center gap-3 text-sm`,
        children: [(0, Z.jsx)(r, {
            className: `icon text-token-text-secondary`
        }), (0, Z.jsx)(`div`, {
            className: `pt-px text-start`,
            children: !n && e === l.Private ? (0, Z.jsx)(z, {
                id: `vVJhYB`,
                defaultMessage: `Only me`
            }) : (0, Z.jsx)(z, {
                ...Bn[e],
                values: {
                    workspaceName: t
                }
            })
        })]
    })
}

function jn({
    publishedGizmo: e,
    sharing: t,
    workspaceName: n,
    onClose: r
}) {
    let a = V();
    return (0, Z.jsxs)(y, {
        testId: `modal-gizmo-updated`,
        isOpen: !0,
        onClose: r,
        showCloseButton: !0,
        className: `w-[304px]`,
        title: (0, Z.jsx)(z, {
            id: `5CEceY`,
            defaultMessage: `GPT Updated`
        }),
        primaryButton: (0, Z.jsx)(i, {
            onClick: () => {
                window.location.href = `/g/${e.gizmo.id}`
            },
            children: (0, Z.jsx)(z, {
                id: `RF75o5`,
                defaultMessage: `View GPT`
            })
        }),
        secondaryButton: (0, Z.jsx)(i, {
            color: `secondary`,
            onClick: t => Oe(e, h(), t, a.formatMessage({
                id: `KdDqMm`,
                defaultMessage: `Copied link to clipboard`
            })),
            children: (0, Z.jsx)(z, {
                id: `9hLOl9`,
                defaultMessage: `Copy link`
            })
        }),
        type: `success`,
        children: [(0, Z.jsx)(Mn, {
            gizmo: {
                profilePictureUrl: e.gizmo.display.profile_picture_url ?? void 0,
                name: e.gizmo.display.name
            }
        }), (0, Z.jsx)($, {
            sharing: t,
            workspaceName: n
        })]
    })
}

function Mn({
    gizmo: e,
    category: t,
    categories: n,
    onCategoryChange: r
}) {
    let {
        data: i,
        isLoading: a
    } = d(), o = n?.find(e => e.id === t);
    return (0, Z.jsxs)(`div`, {
        children: [(0, Z.jsxs)(`div`, {
            className: we(`bg-token-main-surface-secondary mb-[1px] flex flex-row items-center space-x-2 p-4`, a && `invisible`, n ? `rounded-t-lg` : `rounded-lg`),
            children: [(0, Z.jsx)(ot, {
                isFirstParty: !1,
                className: `h-11 w-11`,
                src: e.profilePictureUrl
            }), (0, Z.jsxs)(`div`, {
                className: `flex grow flex-col space-y-0`,
                children: [(0, Z.jsx)(`span`, {
                    className: `text-base font-semibold`,
                    children: e.name
                }), (0, Z.jsx)(nt, {
                    builderName: i?.display_name,
                    builderUrl: i?.website_url,
                    socials: [i?.socials.linkedin, i?.socials.github].filter(e => e != null),
                    className: `text-token-text-secondary text-xs`
                })]
            })]
        }), n && (0, Z.jsxs)(`div`, {
            className: `bg-token-main-surface-secondary flex min-h-[56px] flex-row items-center justify-between space-x-2 rounded-b-lg px-4 text-base`,
            children: [(0, Z.jsx)(`span`, {
                className: `font-semibold`,
                children: (0, Z.jsx)(z, {
                    id: `JcA4/t`,
                    defaultMessage: `Category`
                })
            }), (0, Z.jsx)(`div`, {
                className: `text-token-text-secondary`,
                children: r ? (0, Z.jsx)(it, {
                    size: `small`,
                    triggerButton: (0, Z.jsxs)(`button`, {
                        className: `flex items-center gap-1`,
                        children: [o?.title, (0, Z.jsx)(mt, {
                            className: `icon`
                        })]
                    }),
                    children: n.map((e, t) => (0, Z.jsx)(H.Item, {
                        onClick: () => r(e),
                        children: e.title
                    }, t))
                }) : (0, Z.jsx)(`span`, {
                    className: `text-token-text-secondary`,
                    children: o?.title
                })
            })]
        })]
    })
}

function Nn({
    onAdd: e,
    publishedGizmo: t,
    canListMembers: n,
    allowScimGroupSharing: r
}) {
    let i = V(),
        a = de(),
        [o, s] = (0, X.useState)(``),
        c = n === !0,
        l = et(c ? a?.id : void 0, 0, o, 5).data?.items.filter(e => e.account_user_id !== t?.gizmo.author.user_id),
        u = r,
        {
            data: d
        } = qe({
            queryKey: [a?.id, `groups`, `filtered`, o, u],
            queryFn: () => ee.safeGet(`/accounts/{account_id}/groups`, {
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
            type: F.GROUP,
            group_id: t,
            group_name: n,
            capabilities: {
                ...v
            },
            is_scim_managed: r
        }), s(``)
    }

    function p(t, n, r) {
        a && (e({
            type: F.USER,
            user_id: t,
            user_name: n,
            user_email: r,
            avatar_url: null,
            capabilities: {
                ...v
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
        } = Ie(P.hasSeenMultipleGPTEditorsTooltip),
        g = !c,
        _ = g ? (0, Z.jsx)(tt, {
            ariaLabel: m,
            disabled: !0,
            inputClassName: `bg-token-bg-primary!`,
            name: `share-with-input`,
            placeholder: m,
            value: o
        }) : (0, Z.jsx)(Ft, {
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
                children: (0, Z.jsxs)(Z.Fragment, {
                    children: [(0, Z.jsx)(`span`, {
                        className: `w-full font-semibold`,
                        children: e.name
                    }), (0, Z.jsx)(`span`, {
                        className: `text-token-text-secondary text-sm`,
                        children: e.email
                    })]
                })
            })) ?? [], ...d?.items.map(e => ({
                id: e.id,
                className: `flex flex-col rounded-xs p-1 hover:bg-token-main-surface-tertiary rounded-xs p-1 text-sm`,
                focusedClassName: `bg-token-main-surface-tertiary`,
                onClick: () => f(e.id, e.name, e.is_scim_managed ?? !1),
                children: (0, Z.jsxs)(`span`, {
                    className: `flex flex-col`,
                    children: [(0, Z.jsxs)(`span`, {
                        className: `flex flex-row`,
                        children: [(0, Z.jsx)(`span`, {
                            className: `me-2 font-semibold`,
                            children: e.name
                        }), e.is_scim_managed && (0, Z.jsx)(Ln, {})]
                    }), (0, Z.jsx)(`span`, {
                        className: `text-token-text-secondary text-sm`,
                        children: (0, Z.jsx)(z, {
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
    return (0, Z.jsxs)(Z.Fragment, {
        children: [n === !1 && (0, Z.jsxs)(`div`, {
            className: `border-token-border-medium bg-token-main-surface-secondary text-token-text-primary flex items-center gap-3 rounded-md border px-4 py-3`,
            children: [(0, Z.jsx)(N, {
                className: `icon-sm interactive-label-warning-secondary shrink-0`
            }), (0, Z.jsx)(z, {
                id: `6e1nG9`,
                defaultMessage: `You don't have permission to search your workspace members. Please contact your workspace admin for access or update the workspace settings.`
            })]
        }), n !== !1 && (0, Z.jsx)(`div`, {
            className: `flex w-full flex-row space-x-3`,
            children: h && !g ? (0, Z.jsx)(jt, {
                announcementKey: P.hasSeenMultipleGPTEditorsTooltip,
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
                onDismiss: () => D(P.hasSeenMultipleGPTEditorsTooltip),
                children: _
            }) : _
        })]
    })
}

function Pn(e, t) {
    return e === void 0 || t === void 0 ? !1 : e.split(`__`)[0] === t.split(`__`)[0]
}

function Fn(e) {
    return !Be(e)
}
var In, X, Z, Ln, Rn, zn, Bn, Vn, Q, $, Hn = e((() => {
    In = Qe(), me(), Se(), Ue(), Ve(), E(), dt(), lt(), S(), Pt(), ft(), At(), Tt(), xt(), wt(), gt(), _t(), pt(), Ot(), Ct(), Fe(), s(), Mt(), ce(), rt(), Nt(), _e(), Le(), f(), te(), je(), b(), De(), g(), It(), Ne(), Ze(), j(), a(), X = n(Je()), B(), Vt(), an(), st(), ut(), ye(), mn(), _n(), xn(), r(), fe(), _(), p(), Z = L(), Xe(), Ln = be(() => Ye(() => import(`./fbf44c55-o2lsxc57nll08quu.js`).then(e => e.DirectorySyncResourceManagedIndication), __vite__mapDeps([0, 1, 2]))), Rn = () => [v, re, ae], zn = {
        [F.USER]: l.User,
        [F.GROUP]: l.Group,
        [F.WORKSPACE]: l.Workspace,
        [F.ALL]: l.Marketplace
    }, Bn = Ge({
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
    }), Vn = Ge({
        workspace: {
            id: `1kpopF`,
            defaultMessage: `Published to {workspaceName}`
        },
        marketplace: {
            id: `hdTRpJ`,
            defaultMessage: `Published to GPT Store`
        }
    }), Q = {
        private: ht,
        user: ht,
        group: ht,
        email: ht,
        workspace_link: vt,
        workspace: St,
        link: vt,
        marketplace: u.SidebarApps
    }, $ = e => {
        "use forget";
        let t = (0, In.c)(26),
            {
                sharing: n,
                author: r,
                workspaceName: i,
                showAudiencePermissions: a
            } = e,
            o = a !== void 0 && a,
            s = n.recipient,
            c, u, d, f;
        if (t[0] !== r || t[1] !== s || t[2] !== n.subjects || t[3] !== o || t[4] !== i) {
            let e = n.subjects.filter(Fn),
                a = o && e.length > 0 ? e.map(e => ({
                    level: e.type === F.WORKSPACE ? s === l.Workspace ? l.Workspace : l.WorkspaceLink : s === l.Marketplace ? l.Marketplace : l.Link,
                    subject: e
                })) : [{
                    level: s,
                    subject: void 0
                }];
            t[9] !== r || t[10] !== n.subjects || t[11] !== o ? (f = (r != null || n.subjects.some(Be)) && (0, Z.jsxs)(`div`, {
                className: o ? `my-4 flex flex-col gap-4` : `my-4`,
                children: [(0, Z.jsx)(`h3`, {
                    className: o ? `text-base font-semibold` : `text-token-text-secondary text-xs font-semibold`,
                    children: (0, Z.jsx)(z, {
                        id: `/paYH9`,
                        defaultMessage: `Shared with`
                    })
                }), r != null && (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-3 text-sm`,
                    children: [(0, Z.jsx)(He, {
                        name: r.display_name ?? r.user_email ?? ``,
                        initialsCount: 2,
                        className: `shrink-0`
                    }), (0, Z.jsxs)(`div`, {
                        className: `min-w-0 flex-1 break-words`,
                        children: [(0, Z.jsx)(`div`, {
                            className: `font-semibold`,
                            children: r.display_name ?? r.user_email
                        }), (0, Z.jsx)(`div`, {
                            className: `text-token-text-secondary`,
                            children: r.user_email
                        })]
                    }), (0, Z.jsx)(`span`, {
                        className: `text-token-text-secondary shrink-0`,
                        children: (0, Z.jsx)(z, {
                            id: `gizmo.pluginMigration.sharing.role.owner`,
                            defaultMessage: `Owner`
                        })
                    })]
                }), n.subjects && n.subjects.map((e, t) => Be(e) && !(r != null && T(e) && e.user_id === r.user_id) && (0, Z.jsxs)(`div`, {
                    className: o ? `flex items-center justify-between gap-3 text-sm` : `flex flex-row items-center justify-between space-x-3 py-2`,
                    children: [o && (0, Z.jsx)(He, {
                        name: Dn(e),
                        initialsCount: T(e) ? 2 : 1,
                        className: `shrink-0`
                    }), (0, Z.jsxs)(`div`, {
                        className: `min-w-0 flex-1 break-words`,
                        children: [(0, Z.jsx)(`span`, {
                            className: o ? `text-sm font-semibold` : `text-base font-semibold`,
                            children: Tn(e)
                        }), T(e) && (0, Z.jsxs)(Z.Fragment, {
                            children: [(0, Z.jsx)(`br`, {}), (0, Z.jsx)(`span`, {
                                className: `text-token-text-secondary text-sm`,
                                children: En(e)
                            })]
                        })]
                    }), (0, Z.jsx)(`span`, {
                        className: `text-token-text-secondary shrink-0`,
                        children: (0, Z.jsx)(z, {
                            ...J(e.capabilities)
                        })
                    })]
                }, t))]
            }), t[9] = r, t[10] = n.subjects, t[11] = o, t[12] = f) : f = t[12], c = o ? `border-token-border-light mt-4 flex flex-col gap-4 border-t pt-4` : `my-4`;
            let p = o ? `text-base font-semibold` : `text-token-text-secondary text-xs font-semibold`,
                m;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, Z.jsx)(z, {
                id: `q9XNZ7`,
                defaultMessage: `Access`
            }), t[13] = m) : m = t[13], t[14] === p ? u = t[15] : (u = (0, Z.jsx)(`h3`, {
                className: p,
                children: m
            }), t[14] = p, t[15] = u);
            let h;
            t[16] !== o || t[17] !== i ? (h = e => {
                let {
                    level: t,
                    subject: n
                } = e, r = Q[t];
                return (0, Z.jsxs)(`div`, {
                    className: o ? `flex items-center gap-3 text-start text-sm` : `ms-[3px] flex flex-row items-center py-3 text-start text-base font-semibold`,
                    children: [(0, Z.jsx)(r, {
                        className: o ? `icon text-token-text-secondary shrink-0` : `md:icon-lg me-3 h-6 w-6 shrink-0`
                    }), (0, Z.jsx)(`div`, {
                        className: o ? `min-w-0 flex-1` : `flex flex-col`,
                        children: (0, Z.jsx)(`span`, {
                            className: o ? void 0 : `font-semibold`,
                            children: (0, Z.jsx)(z, {
                                ...o ? Bn[t] : Vn[t] ?? Bn[t],
                                values: {
                                    workspaceName: i
                                }
                            })
                        })
                    }), o && n != null && (0, Z.jsx)(`span`, {
                        className: `text-token-text-secondary ms-3 shrink-0 text-sm font-normal`,
                        children: (0, Z.jsx)(z, {
                            ...J(n.capabilities)
                        })
                    })]
                }, t)
            }, t[16] = o, t[17] = i, t[18] = h) : h = t[18], d = a.map(h), t[0] = r, t[1] = s, t[2] = n.subjects, t[3] = o, t[4] = i, t[5] = c, t[6] = u, t[7] = d, t[8] = f
        } else c = t[5], u = t[6], d = t[7], f = t[8];
        let p;
        t[19] !== c || t[20] !== u || t[21] !== d ? (p = (0, Z.jsxs)(`div`, {
            className: c,
            children: [u, d]
        }), t[19] = c, t[20] = u, t[21] = d, t[22] = p) : p = t[22];
        let m;
        return t[23] !== f || t[24] !== p ? (m = (0, Z.jsxs)(Z.Fragment, {
            children: [f, p]
        }), t[23] = f, t[24] = p, t[25] = m) : m = t[25], m
    }
}));
export {
    W as A, sn as C, Ht as D, nn as E, an as O, pn as S, Zt as T, fn as _, Q as a, mn as b, Y as c, vn as d, xn as f, dn as g, hn as h, Cn as i, Vt as k, Hn as l, _n as m, Mn as n, kn as o, gn as p, jn as r, Sn as s, $ as t, On as u, on as v, tn as w, cn as x, un as y
};
//# sourceMappingURL=d84f4c09-hs1yym53rc73y53r.js.map