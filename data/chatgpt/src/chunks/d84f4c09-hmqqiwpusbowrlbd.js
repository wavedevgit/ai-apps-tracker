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
    Qy as x,
    RU as S,
    SN as ce,
    TR as le,
    U1 as ue,
    VO as de,
    Vw as fe,
    Vz as pe,
    WV as me,
    YV as he,
    ZG as ge,
    Zy as _e,
    _D as ve,
    a2 as ye,
    aO as be,
    bh as xe,
    c7 as Se,
    eE as Ce,
    eK as we,
    eO as Te,
    hD as C,
    iH as w,
    iO as T,
    it as E,
    j2 as D,
    jE as O,
    k8 as k,
    kE as A,
    kS as Ee,
    l7 as De,
    nH as j,
    nt as M,
    o0 as Oe,
    o2 as N,
    oK as ke,
    oW as Ae,
    ot as je,
    prt as P,
    q1 as Me,
    q5 as Ne,
    qO as Pe,
    rH as Fe,
    sK as Ie,
    sW as Le,
    sct as Re,
    srt as ze,
    tt as F,
    vct as Be,
    vh as Ve,
    wh as He,
    xN as Ue,
    zV as I,
    zw as L
} from "./4813494d-itnrgnth03y1sm9d.js";
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
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    BCn as Qe,
    Bst as $e,
    ICn as et,
    Kh as tt,
    eMt as nt,
    eUn as rt,
    iMt as it,
    nMt as at,
    nUn as ot,
    p6t as st,
    qh as ct,
    rMt as lt,
    tUn as U,
    y6t as ut,
    zst as dt
} from "./conversation-small-i79e9c315w50am5f.js";
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
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    _m as At,
    h_ as jt,
    m_ as W,
    vm as Mt
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
import {
    n as Nt,
    t as Pt
} from "./92b4bb27-nxemybbwrxq38bpx.js";
import {
    n as Ft,
    r as It
} from "./3d705e5d-is2nynkj0c3lzm98.js";

function Lt(e) {
    return e === l.User || e === l.Group ? l.Private : e === l.WorkspaceLink ? l.Workspace : e
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
    _()
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
    let r = n.has(l.Private) || n.has(l.Workspace),
        i = n.has(l.Link) || n.has(l.Marketplace);
    return e === l.Marketplace && i ? 2 : !i && r ? 3 : 4
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
        case l.Email:
        case l.Private:
        case l.Workspace:
            return z({
                id: `gizmo.appeals.privateRecipientModerationText`,
                defaultMessage: `Your GPT can’t be updated because it violates our {usagePolicyLink}Usage Policies{usagePolicyLink}.`
            });
        case l.Link:
            return z({
                id: `gizmo.appeals.linkRecipientModerationText`,
                defaultMessage: `Your GPT can’t be shared publicly because it violates our {usagePolicyLink}Usage Policies{usagePolicyLink}.`
            });
        case l.Marketplace:
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
    let l = H(),
        [u, d] = (0, K.useState)(``),
        [f, p] = (0, K.useState)(0),
        [m, h] = (0, K.useState)(!1),
        ee = Ge(),
        g = async () => {
            h(!0);
            try {
                await c.postGizmoAppeal(ee, e, u, t, n), p(2), s?.()
            } finally {
                h(!1)
            }
        }, _ = Rt(t, i), te = _?.length ?? 0, v = ue();
    if (te === 0 && v?.isEnterprisey()) return (0, q.jsx)(y, {
        testId: `modal-gizmo-appeal-available`,
        title: l.formatMessage(Ut(r)),
        isOpen: !0,
        onClose: o,
        showCloseButton: !0,
        type: `warning`,
        primaryButton: (0, q.jsx)(L.Button, {
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
    switch (f) {
        case 0:
            return (0, q.jsx)(y, {
                testId: `modal-gizmo-appeal-available`,
                title: l.formatMessage(Ut(r)),
                isOpen: !0,
                onClose: o,
                showCloseButton: !0,
                primaryButton: (0, q.jsx)(L.Button, {
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
            return (0, q.jsx)(y, {
                testId: `modal-gizmo-appeal-form`,
                title: l.formatMessage({
                    id: `gizmo.appeals.appealModalTitle`,
                    defaultMessage: `Appeal`
                }),
                isOpen: !0,
                onClose: o,
                showCloseButton: !0,
                shouldIgnoreClickOutside: !0,
                primaryButton: (0, q.jsx)(L.Button, {
                    color: `primary`,
                    onClick: g,
                    disabled: m || u.trim().length === 0,
                    children: (0, q.jsx)(B, {
                        id: `gizmo.appeals.submitAppealButton`,
                        defaultMessage: `Submit`
                    })
                }),
                secondaryButton: (0, q.jsx)(L.Button, {
                    onClick: () => p(0),
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
                        value: u,
                        onChange: e => d(e.target.value)
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
    return (0, q.jsx)(y, {
        testId: `modal-gizmo-appeal-submitted`,
        title: H().formatMessage({
            id: `gizmo.appeals.appealSubmittedModalTitle`,
            defaultMessage: `Appeal submitted`
        }),
        isOpen: !0,
        onClose: e,
        showCloseButton: !0,
        primaryButton: (0, q.jsx)(L.Button, {
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
    let n = Ne(() => C(e).data),
        r = Ge(),
        i = async () => {
            await c.postGizmoCancelAppeal(r, e)
        };
    return (0, q.jsx)(y, {
        testId: `modal-gizmo-appeal-sent`,
        isOpen: !0,
        onClose: ce,
        primaryButton: (0, q.jsx)(L.Button, {
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
    let r = ze(`4226692983`),
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
    fe(), s(), ve(), de(), _(), k(), Me(), P(), Xe(), Zt = n(O()), Ue(), K = n(qe()), V(), o(), Bt(), q = R(), Qt = A.a`bold underline`, $t = A.textarea`w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32`, en = function(e) {
        return e[e.None = 0] = `None`, e[e.AppealAvailable = 1] = `AppealAvailable`, e[e.AppealSent = 2] = `AppealSent`, e
    }({}), tn = function(e) {
        return e[e.None = 0] = `None`, e[e.PublishBlocked = 1] = `PublishBlocked`, e[e.RemovedFromMarketplace = 2] = `RemovedFromMarketplace`, e[e.RemovedFromPublic = 3] = `RemovedFromPublic`, e[e.RemovedFromPrivate = 4] = `RemovedFromPrivate`, e[e.Recategorized = 5] = `Recategorized`, e
    }({}), nn = {
        [l.User]: l.Private,
        [l.Group]: l.Private,
        [l.Email]: l.Private,
        [l.WorkspaceLink]: l.Workspace
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
        a = (e.instructions?.length ?? 0) > nt,
        o = [];
    if (e?.name === `` && o.push(6), r && o.push(3), i && o.push(4), a && o.push(5), t != null && sn(t)) {
        let t = e.tools?.filter(e => e.type === Re.JIT_PLUGIN);
        for (let e of t) {
            let t = e.metadata?.privacy_policy_url;
            if (t == null || !cn(t)) {
                o.push(7);
                break
            }
        }
    }
    return t === l.Marketplace && n == null && o.push(8), o
}
var un, dn, fn, pn = e((() => {
    Be(), _(), at(), V(), un = function(e) {
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
            recipient: l.Private,
            subjects: []
        },
        tools: [{
            type: Re.IMAGE_GEN
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
    return !sn(e.sharingRecipient ?? l.Private) && ze(`1056818577`)
}

function hn(e, t) {
    return t && sn(e) ? l.Private : e
}
var gn = e((() => {
    P(), pn(), _()
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
        children: [(0, Q.jsx)(Le, {
            className: `icon-sm interactive-label-warning-secondary mt-0.5 shrink-0`
        }), (0, Q.jsx)(B, {
            id: `gizmo.share.hipaaCompliance.warning`,
            defaultMessage: `OpenAI supports HIPAA compliance for your use of custom GPTs in this workspace. If you share or publish this GPT with others, your BAA does not apply to their use. Do not represent this GPT to third parties as HIPAA compliant.`
        })]
    })
}

function Cn(e, t) {
    return w(e) ? w(t) && e.user_id === t.user_id : j(e) ? j(t) && e.group_id === t.group_id : he(e) ? he(t) && e.user_email.toLowerCase() === t.user_email.toLowerCase() : e.type === t.type
}

function wn(e) {
    return j(e) ? e.group_name : w(e) ? e.user_name : e.user_email
}

function Tn(e) {
    return w(e) ? e.user_email : null
}

function En(e) {
    return j(e) ? e.group_name : w(e) ? `${e.user_name} ${e.user_email}` : e.user_email
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
    promoteGizmo: r,
    appealGizmo: a,
    setAppealState: o,
    showActionsModal: s,
    shareOnly: u,
    onClose: d,
    workspaceOwner: f = !1
}) {
    let p = H(),
        g = Ne(se),
        {
            data: _
        } = ne(f ? void 0 : e.id),
        te = _?.gizmo.migrated_plugin_id ?? e.migratedPluginId ?? t?.gizmo.migrated_plugin_id,
        ae = Te(te),
        b = Oe(),
        x = mn(e),
        ce = b?.isHipaaCompliantWorkspace ?? !1,
        ue = be().trim(),
        de = b?.id,
        {
            data: fe,
            isLoading: pe
        } = we(de),
        he = It(fe),
        ge = b?.isEnterprisey() ?? !1,
        ve = b?.data?.role,
        ye = ve != null && et(ve),
        Ce;
    Ce = de == null ? void 0 : f || ye || !ge ? !0 : pe ? void 0 : fe?.permissions?.includes(ke.MemberRoleView) ?? !1;
    let C = ue || `your workspace`,
        T = le(),
        E = ie(),
        [O, k] = (0, Z.useState)(void 0);
    (0, Z.useEffect)(() => {
        if (O === void 0)
            if (t?.gizmo.display.categories && t?.gizmo.display.categories.length > 0) {
                let e = E.data?.categories.find(e => e.id === t?.gizmo.display.categories[0]);
                e && k(e)
            } else E.data !== void 0 && k(E.data.categories[E.data.categories.length - 1])
    }, [E.data, O, t]);
    let [A, De] = (0, Z.useState)(() => hn(e.sharingRecipient ?? l.Private, x)), [M, N] = (0, Z.useState)(e.sharing?.subjects ?? []), [Ae, je] = (0, Z.useState)(null), [P, Me] = (0, Z.useState)(!1), Ie = (0, Z.useRef)(null), Le = (0, Z.useRef)(M.length);
    (0, Z.useEffect)(() => {
        M.length > Le.current && requestAnimationFrame(() => {
            Ie.current?.scrollTo({
                top: Ie.current.scrollHeight,
                behavior: `smooth`
            })
        }), Le.current = M.length
    }, [M]);
    let ze = (0, Z.useCallback)(() => !D(e.sharing?.subjects, M) || e.sharingRecipient !== A, [e.sharing, e.sharingRecipient, A, M]),
        F = Ge(),
        Be = ln(e, A, O?.id ?? void 0),
        He = Be.includes(un.MissingPublicActionPrivacyPolicyURL),
        Ue = e.tools.find(e => e.type === Re.JIT_PLUGIN && !e.metadata.privacy_policy_url);
    if (g || ae) return (0, Q.jsx)(y, {
        isOpen: !0,
        onClose: d,
        title: (0, Q.jsx)(B, {
            ...ae ? oe.title : Pe.readOnlyTitle
        }),
        showCloseButton: !0,
        children: (0, Q.jsx)(B, {
            ...ae ? oe.notice : Pe.sharingNotice
        })
    });
    if (Ae) return (0, Q.jsx)(An, {
        publishedGizmo: Ae,
        sharing: {
            recipient: A,
            subjects: M
        },
        workspaceName: C,
        onClose: d
    });

    function L(e) {
        M.find(t => Cn(t, e)) || N([...M, e])
    }
    let R = m(M);

    function z(e) {
        let t = M.filter(e => [I.WORKSPACE, I.ALL].indexOf(e.type) === -1);
        e != null && t.push(e), N(t)
    }

    function We(e) {
        switch (De(e), e) {
            case l.Marketplace:
            case l.Link:
                z({
                    type: I.ALL,
                    capabilities: v
                });
                break;
            case l.Workspace:
            case l.WorkspaceLink:
                z({
                    type: I.WORKSPACE,
                    capabilities: v
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
        return e.type === I.USER && e.user_id.indexOf(`__`) === -1 ? {
            ...e,
            user_id: e.user_id + `__` + b?.getWorkspaceId()
        } : e
    }
    async function qe(e, i) {
        if (P || se() || Te(te)) return;
        if (e && !i) throw Error(`Cannot share a gizmo that hasn't been promoted before`);
        if (!O) return;
        Me(!0);
        let a = M.map(V).map(Dn);
        if (a = me(A, a, R?.capabilities ?? v), f) return !b || !i ? (S.warning(`Unable to change sharing settings`), d()) : (await ee.safePost(`/accounts/{account_id}/gpts/{gizmo_id}/share`, {
            parameters: {
                path: {
                    account_id: b.id,
                    gizmo_id: i
                }
            },
            requestBody: {
                sharing: a
            }
        }), S.success(p.formatMessage({
            id: `SWSzcY`,
            defaultMessage: `Sharing settings updated`
        })), F.invalidateQueries({
            queryKey: [`workspace`]
        }), d());
        if (e) {
            if (!i || !t) throw Error(`No gizmo ID to share`);
            try {
                let e = {
                    sharing: a
                };
                O && (e.categories = [O.id]);
                let r = await c.shareGizmo(i, e);
                if (r.error) zt(A, r.sharing_targets ?? void 0) ? (o?.({
                    gizmoId: t.gizmo.id,
                    sharingRecipient: A,
                    categories: t.gizmo.display.categories,
                    moderationType: tn.PublishBlocked,
                    sharingTargets: r.sharing_targets ?? void 0,
                    showModal: en.AppealAvailable
                }), d()) : S.warning(p.formatMessage({
                    id: `tmIKmp`,
                    defaultMessage: `Unable to share GPT`
                }));
                else {
                    if (r.resource == null) throw Error(`Missing shared gizmo resource`);
                    F.setQueryData([`gizmo`, {
                        gizmoId: t.gizmo.id
                    }, {
                        draft: !1
                    }], e => r.resource), n?.(e => ({
                        ...e,
                        sharing: {
                            recipient: A,
                            subjects: M
                        },
                        sharingRecipient: A
                    })), S.success(p.formatMessage({
                        id: `SWSzcY`,
                        defaultMessage: `Sharing settings updated`
                    })), d()
                }
            } catch {
                return S.warning(p.formatMessage({
                    id: `dKC65l`,
                    defaultMessage: `Failed to update sharing settings`
                })), d()
            }
        } else {
            if (r) {
                let e = await r({
                    subjects: a,
                    recipient: A
                }, O.id);
                i ||= e?.gizmo.id, je(e ?? null), n?.({
                    liveVersion: e?.gizmo.live_version ?? void 0
                })
            }
            F.invalidateQueries({
                queryKey: [`gizmo`, {
                    gizmoId: i
                }]
            })
        }
        Me(!1), F.invalidateQueries({
            queryKey: [`gizmos`]
        }), F.refetchQueries({
            queryKey: [`gizmos`, `discovery`]
        }), F.refetchQueries({
            queryKey: [`gizmo`, {
                gizmoId: i
            }]
        }), F.invalidateQueries({
            queryKey: [`gizmo`, `userActionSettings`, {
                gizmoId: i
            }]
        }), F.invalidateQueries({
            queryKey: [`workspace`]
        }), n?.({
            sharing: {
                recipient: A,
                subjects: M
            },
            sharingRecipient: A
        }, !1)
    }
    let Je = !t || Nn(t.gizmo.author.user_id.split(`__`)[0], T?.id),
        Ye = t?.gizmo.author.display_name || null;
    return (0, Q.jsx)(y, {
        testId: `modal-share-gizmo`,
        type: `success`,
        className: `max-w-[555px]`,
        size: `custom`,
        isOpen: !0,
        onClose: d,
        primaryButton: zt(A, e.sharingTargets) ? (0, Q.jsx)(i, {
            onClick: () => a(A, O?.id),
            children: (0, Q.jsx)(B, {
                id: `yS4os0`,
                defaultMessage: `Learn more`
            })
        }) : (0, Q.jsx)(i, {
            onClick: () => qe(u, t?.gizmo.id),
            loading: P,
            disabled: Be.length > 0 || !G(A, e.sharingTargets),
            children: u ? (0, Q.jsx)(B, {
                id: `BEKjVh`,
                defaultMessage: `Save`
            }) : (0, Q.jsx)(B, {
                id: `24j5ts`,
                defaultMessage: `Update`
            })
        }),
        secondaryButton: (0, Q.jsxs)(Q.Fragment, {
            children: [ze() && (0, Q.jsx)(`div`, {
                className: `text-token-text-secondary absolute start-6 bottom-8 text-sm`,
                children: (0, Q.jsx)(B, {
                    id: `9CkgC4`,
                    defaultMessage: `Unsaved changes`
                })
            }), t && (0, Q.jsx)(i, {
                color: `secondary`,
                onClick: e => Ee(t, h(), e, p.formatMessage({
                    id: `KdDqMm`,
                    defaultMessage: `Copied link to clipboard`
                })),
                children: (0, Q.jsx)(B, {
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
        children: (0, Q.jsxs)(`div`, {
            className: `flex flex-col space-y-4`,
            children: [(0, Q.jsx)(Mn, {
                onAdd: e => L(e),
                publishedGizmo: t,
                canListMembers: Ce,
                allowScimGroupSharing: he
            }), ce && (0, Q.jsx)(Sn, {}), (0, Q.jsx)(`h3`, {
                className: `text-base font-semibold`,
                children: (0, Q.jsx)(B, {
                    id: `bNQXcV`,
                    defaultMessage: `Share with...`
                })
            }), (0, Q.jsxs)(`div`, {
                ref: Ie,
                className: `max-h-[200px] space-y-2 overflow-y-auto`,
                children: [(0, Q.jsxs)(`div`, {
                    className: `mb-4 flex flex-row items-center justify-between space-x-3`,
                    children: [(0, Q.jsx)(`div`, {
                        className: `shrink-0 grow-0 self-start`,
                        children: Je ? (0, Q.jsx)(xe, {
                            user: T
                        }) : (0, Q.jsx)(Ve, {
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
                                    userName: T?.name
                                }
                            }), (0, Q.jsx)(`span`, {
                                className: `text-token-text-secondary -mt-1 text-sm`,
                                children: T?.email
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
                }), M.map((e, t) => Fe(e) && (0, Q.jsxs)(`div`, {
                    className: `mb-4 flex flex-row items-center justify-between space-x-3`,
                    children: [(0, Q.jsx)(Ve, {
                        name: En(e),
                        initialsCount: w(e) ? 2 : 1,
                        className: Se(`shrink-0 grow-0`, w(e) && `self-start`)
                    }), (0, Q.jsxs)(`div`, {
                        className: `flex grow flex-col`,
                        children: [(0, Q.jsxs)(`span`, {
                            className: `flex flex-row`,
                            children: [(0, Q.jsx)(`span`, {
                                className: `me-2 text-base font-semibold`,
                                children: wn(e)
                            }), j(e) && e.is_scim_managed && (0, Q.jsx)(In, {})]
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
                                    selected: D(t, e.capabilities),
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
            }), x && (0, Q.jsx)(_n, {}), (0, Q.jsxs)(`div`, {
                className: `-ms-3.5 flex flex-row items-center justify-between space-x-3`,
                children: [(0, Q.jsxs)(W.Root, {
                    value: A,
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
                                }), A === l.User ? (0, Q.jsx)(W.Item, {
                                    value: l.User,
                                    children: (0, Q.jsx)(X, {
                                        shareLevel: l.User,
                                        workspaceName: C
                                    })
                                }) : (0, Q.jsx)(W.Item, {
                                    value: l.Private,
                                    children: (0, Q.jsx)(X, {
                                        shareLevel: l.Private,
                                        workspaceName: C
                                    })
                                })]
                            }), (0, Q.jsx)(W.Separator, {}), (0, Q.jsx)(_e, {
                                triggerAs: null,
                                label: p.formatMessage({
                                    id: `n0m61x`,
                                    defaultMessage: `Your workspace has disabled sharing with the workspace.`
                                }),
                                side: `bottom`,
                                disabled: G(`workspace`, e.sharingTargets),
                                children: (0, Q.jsxs)(W.Group, {
                                    children: [(0, Q.jsx)(W.Label, {
                                        children: C
                                    }), (0, Q.jsx)(W.Item, {
                                        value: l.WorkspaceLink,
                                        disabled: !G(l.WorkspaceLink, e.sharingTargets) && !G(l.Workspace, e.sharingTargets),
                                        children: (0, Q.jsx)(X, {
                                            shareLevel: l.WorkspaceLink,
                                            workspaceName: C
                                        })
                                    }), (0, Q.jsx)(W.Item, {
                                        value: l.Workspace,
                                        disabled: !G(`workspace`, e.sharingTargets),
                                        children: (0, Q.jsx)(X, {
                                            shareLevel: l.Workspace,
                                            workspaceName: C
                                        })
                                    })]
                                })
                            }), !x && (0, Q.jsxs)(Q.Fragment, {
                                children: [(0, Q.jsx)(W.Separator, {}), (0, Q.jsx)(_e, {
                                    triggerAs: null,
                                    label: p.formatMessage({
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
                                            value: l.Link,
                                            disabled: !G(`link`, e.sharingTargets),
                                            children: (0, Q.jsx)(X, {
                                                shareLevel: l.Link,
                                                workspaceName: C
                                            })
                                        }), (0, Q.jsx)(W.Item, {
                                            disabled: !G(`marketplace`, e.sharingTargets),
                                            value: l.Marketplace,
                                            children: (0, Q.jsx)(X, {
                                                shareLevel: l.Marketplace,
                                                workspaceName: C
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })]
                }), A !== l.Private && A !== l.User && (0, Q.jsxs)(U.Root, {
                    children: [(0, Q.jsxs)(U.Trigger, {
                        className: `text-token-text-secondary text-base whitespace-nowrap`,
                        children: [R == null ? (0, Q.jsx)(B, {
                            ...Y(v)
                        }) : (0, Q.jsx)(B, {
                            ...Y(R.capabilities)
                        }), (0, Q.jsx)(pt, {
                            className: `icon`
                        })]
                    }), (0, Q.jsx)(U.Portal, {
                        children: (0, Q.jsxs)(U.Content, {
                            className: `max-w-[320px]`,
                            children: [(0, Q.jsx)(kn, {
                                onClick: () => Ke(v),
                                capabilities: v,
                                selected: D(R?.capabilities, v)
                            }), A !== l.Marketplace && A !== l.Link && (0, Q.jsx)(kn, {
                                onClick: () => Ke(re),
                                capabilities: re,
                                selected: D(R?.capabilities, re)
                            })]
                        })
                    })]
                })]
            }), He && (0, Q.jsx)(`div`, {
                className: `text-xs text-red-500`,
                children: (0, Q.jsx)(B, {
                    id: `/iw1Iv`,
                    defaultMessage: `Public actions require valid privacy policy URLs. Click <fixlink>here</fixlink> to update.`,
                    values: {
                        fixlink: e => (0, Q.jsx)(`button`, {
                            onClick: () => {
                                s?.(Ue?.metadata.action_id), d()
                            },
                            className: `underline`,
                            children: e
                        })
                    }
                })
            }), (A === l.Marketplace || A === l.Workspace) && (G(A, e.sharingTargets) ? (0, Q.jsx)(jn, {
                gizmo: e,
                category: O?.id,
                categories: E.data?.categories,
                onCategoryChange: e => k(e)
            }) : zt(A, e.sharingTargets) ? (0, Q.jsx)(`div`, {
                className: `pb-2 text-xs text-red-500`,
                children: (0, Q.jsx)(Kt, {
                    sharingRecipient: A,
                    moderatedFields: Rt(A, e.sharingTargets) ?? [],
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
            className: Se(`icon-lg shrink-0`, !t && `invisible`)
        })]
    })
}

function X({
    shareLevel: e,
    workspaceName: t,
    hasInviteSharing: n = !0
}) {
    (e === l.User || e === l.Group || e === l.Email) && (e = l.Private);
    let r = $[e];
    return (0, Q.jsxs)(`div`, {
        className: `flex flex-row items-center gap-3 text-sm`,
        children: [(0, Q.jsx)(r, {
            className: `icon text-token-text-secondary`
        }), (0, Q.jsx)(`div`, {
            className: `pt-px text-start`,
            children: !n && e === l.Private ? (0, Q.jsx)(B, {
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
    let a = H();
    return (0, Q.jsxs)(y, {
        testId: `modal-gizmo-updated`,
        isOpen: !0,
        onClose: r,
        showCloseButton: !0,
        className: `w-[304px]`,
        title: (0, Q.jsx)(B, {
            id: `5CEceY`,
            defaultMessage: `GPT Updated`
        }),
        primaryButton: (0, Q.jsx)(i, {
            onClick: () => {
                window.location.href = `/g/${e.gizmo.id}`
            },
            children: (0, Q.jsx)(B, {
                id: `RF75o5`,
                defaultMessage: `View GPT`
            })
        }),
        secondaryButton: (0, Q.jsx)(i, {
            color: `secondary`,
            onClick: t => Ee(e, h(), t, a.formatMessage({
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
    } = d(), o = n?.find(e => e.id === t);
    return (0, Q.jsxs)(`div`, {
        children: [(0, Q.jsxs)(`div`, {
            className: Se(`bg-token-main-surface-secondary mb-[1px] flex flex-row items-center space-x-2 p-4`, a && `invisible`, n ? `rounded-t-lg` : `rounded-lg`),
            children: [(0, Q.jsx)(lt, {
                isFirstParty: !1,
                className: `h-11 w-11`,
                src: e.profilePictureUrl
            }), (0, Q.jsxs)(`div`, {
                className: `flex grow flex-col space-y-0`,
                children: [(0, Q.jsx)(`span`, {
                    className: `text-base font-semibold`,
                    children: e.name
                }), (0, Q.jsx)(tt, {
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
                children: r ? (0, Q.jsx)(rt, {
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
        a = ue(),
        [o, s] = (0, Z.useState)(``),
        c = n === !0,
        l = ut(c ? a?.id : void 0, 0, o, 5).data?.items.filter(e => e.account_user_id !== t?.gizmo.author.user_id),
        u = r,
        {
            data: d
        } = Ke({
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
            type: I.GROUP,
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
            type: I.USER,
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
        } = je(F.hasSeenMultipleGPTEditorsTooltip),
        g = !c,
        _ = g ? (0, Q.jsx)(dt, {
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
            children: [(0, Q.jsx)(Le, {
                className: `icon-sm interactive-label-warning-secondary shrink-0`
            }), (0, Q.jsx)(B, {
                id: `6e1nG9`,
                defaultMessage: `You don't have permission to search your workspace members. Please contact your workspace admin for access or update the workspace settings.`
            })]
        }), n !== !1 && (0, Q.jsx)(`div`, {
            className: `flex w-full flex-row space-x-3`,
            children: h && !g ? (0, Q.jsx)(At, {
                announcementKey: F.hasSeenMultipleGPTEditorsTooltip,
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
                onDismiss: () => E(F.hasSeenMultipleGPTEditorsTooltip),
                children: _
            }) : _
        })]
    })
}

function Nn(e, t) {
    return e === void 0 || t === void 0 ? !1 : e.split(`__`)[0] === t.split(`__`)[0]
}

function Pn(e) {
    return !Fe(e)
}
var Fn, Z, Q, In, Ln, Rn, zn, Bn, $, Vn, Hn = e((() => {
    Fn = Ze(), pe(), Be(), He(), Ie(), T(), st(), Qe(), Ce(), Nt(), ot(), kt(), wt(), bt(), Ct(), ht(), gt(), ft(), Dt(), St(), Ae(), s(), jt(), x(), $e(), Mt(), ge(), Me(), f(), te(), M(), b(), k(), g(), Ft(), N(), Xe(), De(), a(), Z = n(qe()), V(), Bt(), rn(), ct(), it(), ve(), pn(), gn(), bn(), r(), de(), _(), p(), Q = R(), Ye(), In = ye(() => Je(() => import(`./fbf44c55-o2lsxc57nll08quu.js`).then(e => e.DirectorySyncResourceManagedIndication), __vite__mapDeps([0, 1, 2]))), Ln = () => [v, re, ae], Rn = {
        [I.USER]: l.User,
        [I.GROUP]: l.Group,
        [I.WORKSPACE]: l.Workspace,
        [I.ALL]: l.Marketplace
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
        marketplace: u.SidebarApps
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
            c, u, d, f;
        if (t[0] !== r || t[1] !== s || t[2] !== n.subjects || t[3] !== o || t[4] !== i) {
            let e = n.subjects.filter(Pn),
                a = o && e.length > 0 ? e.map(e => ({
                    level: e.type === I.WORKSPACE ? s === l.Workspace ? l.Workspace : l.WorkspaceLink : s === l.Marketplace ? l.Marketplace : l.Link,
                    subject: e
                })) : [{
                    level: s,
                    subject: void 0
                }];
            t[9] !== r || t[10] !== n.subjects || t[11] !== o ? (f = (r != null || n.subjects.some(Fe)) && (0, Q.jsxs)(`div`, {
                className: o ? `my-4 flex flex-col gap-4` : `my-4`,
                children: [(0, Q.jsx)(`h3`, {
                    className: o ? `text-base font-semibold` : `text-token-text-secondary text-xs font-semibold`,
                    children: (0, Q.jsx)(B, {
                        id: `/paYH9`,
                        defaultMessage: `Shared with`
                    })
                }), r != null && (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-3 text-sm`,
                    children: [(0, Q.jsx)(Ve, {
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
                }), n.subjects && n.subjects.map((e, t) => Fe(e) && !(r != null && w(e) && e.user_id === r.user_id) && (0, Q.jsxs)(`div`, {
                    className: o ? `flex items-center justify-between gap-3 text-sm` : `flex flex-row items-center justify-between space-x-3 py-2`,
                    children: [o && (0, Q.jsx)(Ve, {
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
            }), t[9] = r, t[10] = n.subjects, t[11] = o, t[12] = f) : f = t[12], c = o ? `border-token-border-light mt-4 flex flex-col gap-4 border-t pt-4` : `my-4`;
            let p = o ? `text-base font-semibold` : `text-token-text-secondary text-xs font-semibold`,
                m;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, Q.jsx)(B, {
                id: `q9XNZ7`,
                defaultMessage: `Access`
            }), t[13] = m) : m = t[13], t[14] === p ? u = t[15] : (u = (0, Q.jsx)(`h3`, {
                className: p,
                children: m
            }), t[14] = p, t[15] = u);
            let h;
            t[16] !== o || t[17] !== i ? (h = e => {
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
            }, t[16] = o, t[17] = i, t[18] = h) : h = t[18], d = a.map(h), t[0] = r, t[1] = s, t[2] = n.subjects, t[3] = o, t[4] = i, t[5] = c, t[6] = u, t[7] = d, t[8] = f
        } else c = t[5], u = t[6], d = t[7], f = t[8];
        let p;
        t[19] !== c || t[20] !== u || t[21] !== d ? (p = (0, Q.jsxs)(`div`, {
            className: c,
            children: [u, d]
        }), t[19] = c, t[20] = u, t[21] = d, t[22] = p) : p = t[22];
        let m;
        return t[23] !== f || t[24] !== p ? (m = (0, Q.jsxs)(Q.Fragment, {
            children: [f, p]
        }), t[23] = f, t[24] = p, t[25] = m) : m = t[25], m
    }
}));
export {
    G as A, on as C, Vt as D, tn as E, rn as O, fn as S, Xt as T, dn as _, $ as a, pn as b, X as c, _n as d, bn as f, un as g, mn as h, Sn as i, Bt as k, Hn as l, gn as m, jn as n, On as o, hn as p, An as r, xn as s, Vn as t, Dn as u, an as v, en as w, sn as x, ln as y
};
//# sourceMappingURL=d84f4c09-hmqqiwpusbowrlbd.js.map