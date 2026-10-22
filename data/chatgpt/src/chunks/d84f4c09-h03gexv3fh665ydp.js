const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/fbf44c55-o2lsxc57nll08quu.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $D as r,
    BU as i,
    CD as a,
    Ch as o,
    Cw as s,
    DV as c,
    EE as l,
    EV as u,
    F7 as d,
    FO as f,
    Gnt as p,
    Gst as m,
    HO as h,
    HV as g,
    IO as _,
    Iw as v,
    JD as ee,
    JT as y,
    LV as te,
    MV as b,
    NV as x,
    Nz as ne,
    OD as re,
    OS as ie,
    P1 as S,
    P5 as ae,
    PS as C,
    Pw as w,
    Pz as oe,
    R1 as se,
    RV as ce,
    S2 as le,
    TE as ue,
    TV as T,
    Tw as de,
    UO as fe,
    VU as E,
    VV as D,
    X0 as pe,
    X5 as me,
    XV as he,
    Xy as ge,
    Y5 as _e,
    YD as ve,
    YT as ye,
    YV as O,
    Z0 as be,
    Z1 as xe,
    ZV as k,
    Znt as A,
    Zy as j,
    _N as M,
    _h as Se,
    bR as Ce,
    eK as N,
    eO as we,
    fD as P,
    g8 as F,
    gN as Te,
    it as I,
    lK as Ee,
    lW as L,
    nct as De,
    nt as Oe,
    ot as ke,
    qD as Ae,
    qO as je,
    rK as Me,
    tt as R,
    uD as Ne,
    uK as Pe,
    uW as Fe,
    vD as z,
    vR as Ie,
    wE as Le,
    x2 as Re,
    yh as ze,
    z7 as Be,
    zU as Ve
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as B,
    In as V,
    Ln as He,
    N as Ue,
    Nn as H,
    O as We,
    Rn as U,
    Vn as Ge,
    cn as Ke,
    ln as qe,
    s as Je,
    wn as Ye,
    zn as W
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    E6t as Xe,
    FHn as Ze,
    IHn as G,
    Kh as Qe,
    Kst as $e,
    LHn as et,
    TCn as tt,
    b6t as nt,
    dMt as rt,
    lMt as it,
    qh as at,
    qst as ot,
    sMt as st,
    uMt as ct,
    xCn as lt
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Am as ut,
    By as dt,
    Ef as ft,
    FS as pt,
    Fx as mt,
    IS as ht,
    Ix as gt,
    Mv as _t,
    Nv as vt,
    Rv as yt,
    Tf as bt,
    Vy as xt,
    dS as St,
    jm as Ct,
    uS as wt,
    vv as Tt,
    yv as Et,
    zv as Dt
} from "./30901919-e8h11sw136qen6v0.js";
import {
    f_ as K,
    gm as Ot,
    hm as kt,
    p_ as At
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
import {
    n as jt,
    t as Mt
} from "./92b4bb27-gfy7wedn3isnkk2t.js";
import {
    n as Nt,
    r as Pt
} from "./3d705e5d-is2nynkj0c3lzm98.js";

function Ft(e) {
    return e === x.User || e === x.Group ? x.Private : e === x.WorkspaceLink ? x.Workspace : e
}

function q(e, t) {
    return e = Ft(e), t !== void 0 && t.some(t => t.recipient === e && t.allowed)
}

function It(e, t) {
    return t === void 0 ? [] : (e = Ft(e), t.find(t => t.recipient === e)?.moderated_fields ?? void 0)
}

function Lt(e, t) {
    let n = It(e, t);
    return n != null && n.length > 0
}
var Rt = e((() => {
    D()
}));

function zt(e) {
    if (!e) return;
    let t = e.gizmo.appeal_info?.state.kind === `appeal_sent`,
        n = Bt(e.gizmo.share_recipient, e.gizmo.sharing_targets ?? void 0);
    return {
        sharingRecipient: e.gizmo.share_recipient,
        categories: e.gizmo.display.categories,
        gizmoId: e.gizmo.id,
        moderationType: n,
        sharingTargets: e.gizmo.sharing_targets ?? void 0,
        showModal: t ? 2 : n === 0 ? 0 : 1
    }
}

function Bt(e, t = []) {
    let n = new Set(t.filter(e => e.allowed).map(e => e.recipient));
    if (!e || (e in en && (e = en[e]), n.has(e))) return 0;
    let r = n.has(x.Private) || n.has(x.Workspace),
        i = n.has(x.Link) || n.has(x.Marketplace);
    return e === x.Marketplace && i ? 2 : !i && r ? 3 : 4
}

function Vt(e) {
    switch (e) {
        case 0:
        case 1:
            return V({
                id: `gizmo.appeals.publishBlockedTitle`,
                defaultMessage: `Your changes couldn’t be published`
            });
        case 2:
            return V({
                id: `gizmo.appeals.removedFromMarketplaceTitle`,
                defaultMessage: `Your GPT has been removed from the marketplace`
            });
        case 3:
            return V({
                id: `gizmo.appeals.removedFromPublicTitle`,
                defaultMessage: `Your GPT has been removed from public view`
            });
        case 4:
            return V({
                id: `gizmo.appeals.removedFromPrivateTitle`,
                defaultMessage: `Your GPT has been removed from private view`
            });
        case 5:
            return V({
                id: `gizmo.appeals.recategorizedTitle`,
                defaultMessage: `Your GPT has been recategorized`
            })
    }
}

function Ht(e) {
    switch (e) {
        case `profile_picture`:
            return V({
                id: `gizmo.appeals.profilePictureFieldName`,
                defaultMessage: `Profile Picture`
            });
        case `gizmo_name`:
            return V({
                id: `gizmo.appeals.gizmoNameFieldName`,
                defaultMessage: `Name`
            });
        case `gizmo_description`:
            return V({
                id: `gizmo.appeals.gizmoDescriptionFieldName`,
                defaultMessage: `Description`
            });
        case `gizmo_instructions`:
            return V({
                id: `gizmo.appeals.gizmoInstructionsFieldName`,
                defaultMessage: `Instructions`
            });
        case `gizmo_welcome_message`:
            return V({
                id: `gizmo.appeals.gizmoWelcomeMessageFieldName`,
                defaultMessage: `Welcome Message`
            });
        case `custom_actions`:
            return V({
                id: `gizmo.appeals.customActionsFieldName`,
                defaultMessage: `Custom Actions`
            });
        case `conversation_starter`:
            return V({
                id: `gizmo.appeals.conversationStarterFieldName`,
                defaultMessage: `Conversation Starter`
            });
        case `file`:
            return V({
                id: `gizmo.appeals.fileFieldName`,
                defaultMessage: `File`
            });
        case `gizmo_combined_content`:
            return V({
                id: `gizmo.appeals.gizmoCombinedContentFieldName`,
                defaultMessage: `GPT Content`
            });
        default:
            throw Error(`Unhandled moderation field: ${e}`)
    }
}

function Ut(e) {
    switch (e) {
        case x.Email:
        case x.Private:
        case x.Workspace:
            return V({
                id: `gizmo.appeals.privateRecipientModerationText`,
                defaultMessage: `Your GPT can’t be updated because it violates our {usagePolicyLink}Usage Policies{usagePolicyLink}.`
            });
        case x.Link:
            return V({
                id: `gizmo.appeals.linkRecipientModerationText`,
                defaultMessage: `Your GPT can’t be shared publicly because it violates our {usagePolicyLink}Usage Policies{usagePolicyLink}.`
            });
        case x.Marketplace:
            return V({
                id: `gizmo.appeals.marketplaceRecipientModerationText`,
                defaultMessage: `Your GPT can’t appear in the Explore GPTs page because it violates our {usagePolicyLink}Usage Policies{usagePolicyLink}.`
            });
        default:
            (0, Yt.default)(e)
    }
}

function Wt({
    sharingRecipient: e,
    moderatedFields: t,
    appealAvailable: n
}) {
    let r = t.length;
    return (0, Y.jsxs)(Y.Fragment, {
        children: [(0, Y.jsxs)(`p`, {
            children: [(0, Y.jsx)(H, {
                ...Ut(e),
                values: {
                    usagePolicyLink: e => (0, Y.jsx)(Xt, {
                        target: `_blank`,
                        href: `https://openai.com/policies/usage-policies`,
                        rel: `noreferrer`,
                        children: e
                    })
                }
            }), ` `, r > 0 && (0, Y.jsx)(H, {
                id: `gizmo.appeals.seeBelowForSpecificIssues`,
                defaultMessage: `{numModeratedFields, plural,
              one {See below for the specific issue:}
              other {See below for the specific issues:}
            }`,
                values: {
                    numModeratedFields: r
                }
            })]
        }), r > 0 && t?.map(e => (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsx)(`p`, {
                className: `font-bold`,
                children: (0, Y.jsx)(H, {
                    ...Ht(e.name)
                })
            }), (0, Y.jsx)(`ul`, {
                className: `list-disc ps-5`,
                children: e.reasons.map(e => (0, Y.jsxs)(`li`, {
                    children: [e.description, ` `, e.link ? (0, Y.jsx)(Xt, {
                        href: e.link,
                        target: `_blank`,
                        rel: `noreferrer`,
                        children: (0, Y.jsx)(H, {
                            id: `gizmo.appeals.learnMore`,
                            defaultMessage: `Learn more`
                        })
                    }) : ``]
                }, e.description))
            })]
        })), n && (0, Y.jsx)(`p`, {
            children: (0, Y.jsx)(H, {
                id: `gizmo.appeals.appealAvailableText`,
                defaultMessage: `If you think this was a mistake, use the appeal link in the email we sent you. Or you can publish to “Only me” and use this GPT privately.`
            })
        })]
    })
}

function Gt({
    gizmoId: e,
    sharingRecipient: t,
    categories: n,
    moderationType: r,
    sharingTargets: i,
    appealAvailable: a,
    onClose: o,
    onAppealSubmitted: c
}) {
    let l = W(),
        [u, d] = (0, J.useState)(``),
        [p, m] = (0, J.useState)(0),
        [h, g] = (0, J.useState)(!1),
        _ = Ue(),
        v = async () => {
            g(!0);
            try {
                await f.postGizmoAppeal(_, e, u, t, n), m(2), c?.()
            } finally {
                g(!1)
            }
        }, ee = It(t, i), y = ee?.length ?? 0, te = S();
    if (y === 0 && te?.isEnterprisey()) return (0, Y.jsx)(s, {
        testId: `modal-gizmo-appeal-available`,
        title: l.formatMessage(Vt(r)),
        isOpen: !0,
        onClose: o,
        showCloseButton: !0,
        type: `warning`,
        primaryButton: (0, Y.jsx)(w.Button, {
            color: `primary`,
            onClick: o,
            children: (0, Y.jsx)(H, {
                id: `wEsAOU`,
                defaultMessage: `OK`
            })
        }),
        children: (0, Y.jsx)(`p`, {
            className: `text-sm`,
            children: (0, Y.jsx)(H, {
                id: `gizmo.appeals.workspaceSettingsMessage`,
                defaultMessage: `Access to your GPT has been reduced by your workspace's GPT sharing settings. An owner of the workspace can change these settings in the workspace settings page.`
            })
        })
    });
    switch (p) {
        case 0:
            return (0, Y.jsx)(s, {
                testId: `modal-gizmo-appeal-available`,
                title: l.formatMessage(Vt(r)),
                isOpen: !0,
                onClose: o,
                showCloseButton: !0,
                primaryButton: (0, Y.jsx)(w.Button, {
                    color: `primary`,
                    onClick: o,
                    children: (0, Y.jsx)(H, {
                        id: `gizmo.appeals.contunueButton`,
                        defaultMessage: `Continue`
                    })
                }),
                type: `warning`,
                children: (0, Y.jsx)(`div`, {
                    className: `flex flex-col gap-2 text-sm`,
                    children: (0, Y.jsx)(Wt, {
                        sharingRecipient: t,
                        moderatedFields: ee ?? [],
                        appealAvailable: a
                    })
                })
            });
        case 1:
            return (0, Y.jsx)(s, {
                testId: `modal-gizmo-appeal-form`,
                title: l.formatMessage({
                    id: `gizmo.appeals.appealModalTitle`,
                    defaultMessage: `Appeal`
                }),
                isOpen: !0,
                onClose: o,
                showCloseButton: !0,
                shouldIgnoreClickOutside: !0,
                primaryButton: (0, Y.jsx)(w.Button, {
                    color: `primary`,
                    onClick: v,
                    disabled: h || u.trim().length === 0,
                    children: (0, Y.jsx)(H, {
                        id: `gizmo.appeals.submitAppealButton`,
                        defaultMessage: `Submit`
                    })
                }),
                secondaryButton: (0, Y.jsx)(w.Button, {
                    onClick: () => m(0),
                    children: (0, Y.jsx)(H, {
                        id: `gizmo.appeals.backButton`,
                        defaultMessage: `Back`
                    })
                }),
                type: `warning`,
                children: (0, Y.jsxs)(`div`, {
                    className: `flex flex-col gap-2 text-sm`,
                    children: [(0, Y.jsx)(`p`, {
                        children: (0, Y.jsx)(H, {
                            id: `gizmo.appeals.appealReasonText`,
                            defaultMessage: `Please provide a reason for why you believe this GPT doesn’t violate our policies and should be published`
                        })
                    }), (0, Y.jsx)(Zt, {
                        value: u,
                        onChange: e => d(e.target.value)
                    })]
                })
            });
        case 2:
            return (0, Y.jsx)(Y.Fragment, {})
    }
}

function Kt({
    onClose: e
}) {
    return (0, Y.jsx)(s, {
        testId: `modal-gizmo-appeal-submitted`,
        title: W().formatMessage({
            id: `gizmo.appeals.appealSubmittedModalTitle`,
            defaultMessage: `Appeal submitted`
        }),
        isOpen: !0,
        onClose: e,
        showCloseButton: !0,
        primaryButton: (0, Y.jsx)(w.Button, {
            color: `primary`,
            onClick: e,
            children: (0, Y.jsx)(H, {
                id: `gizmo.appeals.closeButton`,
                defaultMessage: `Close`
            })
        }),
        type: `success`,
        children: (0, Y.jsx)(`div`, {
            className: `flex flex-col gap-2 text-sm`,
            children: (0, Y.jsx)(`div`, {
                children: (0, Y.jsx)(H, {
                    id: `gizmo.appeals.appealSubmittedText`,
                    defaultMessage: `Your appeal has been submitted. We will get back to you as soon as possible.`
                })
            })
        })
    })
}

function qt({
    gizmoId: e,
    onClose: t
}) {
    let n = ae(() => Ne(e).data),
        r = Ue(),
        i = async () => {
            await f.postGizmoCancelAppeal(r, e)
        };
    return (0, Y.jsx)(s, {
        testId: `modal-gizmo-appeal-sent`,
        isOpen: !0,
        onClose: M,
        primaryButton: (0, Y.jsx)(w.Button, {
            color: `primary`,
            onClick: () => {
                i(), t?.()
            },
            children: (0, Y.jsx)(H, {
                id: `gizmo.appeals.cancelAppealButton`,
                defaultMessage: `Cancel appeal`
            })
        }),
        type: `warning`,
        children: (0, Y.jsxs)(`div`, {
            className: `flex flex-col gap-2 text-sm`,
            children: [(0, Y.jsx)(`h2`, {
                className: `text-lg font-semibold`,
                children: (0, Y.jsx)(H, {
                    id: `gizmo.appeals.appealReviewingHeader`,
                    defaultMessage: `Reviewing your appeal`
                })
            }), (0, Y.jsx)(`p`, {
                children: (0, Y.jsx)(H, {
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

function Jt({
    appealState: e,
    onAppealClose: t,
    onAppealSubmitted: n
}) {
    let r = p(`4226692983`),
        [i, a] = (0, J.useState)(!1);
    return i ? (0, Y.jsx)(Kt, {
        onClose: () => {
            a(!1), n?.()
        }
    }) : (0, Y.jsxs)(Y.Fragment, {
        children: [e?.showModal === 2 && (0, Y.jsx)(qt, {
            gizmoId: e.gizmoId,
            onClose: t
        }), e?.showModal === 1 && (0, Y.jsx)(Gt, {
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
var Yt, J, Y, Xt, Zt, Qt, $t, en, tn = e((() => {
    v(), de(), P(), _(), D(), F(), se(), A(), Je(), Yt = n(l()), Te(), J = n(Ge()), U(), ue(), Rt(), Y = B(), Xt = Le.a`bold underline`, Zt = Le.textarea`w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32`, Qt = function(e) {
        return e[e.None = 0] = `None`, e[e.AppealAvailable = 1] = `AppealAvailable`, e[e.AppealSent = 2] = `AppealSent`, e
    }({}), $t = function(e) {
        return e[e.None = 0] = `None`, e[e.PublishBlocked = 1] = `PublishBlocked`, e[e.RemovedFromMarketplace = 2] = `RemovedFromMarketplace`, e[e.RemovedFromPublic = 3] = `RemovedFromPublic`, e[e.RemovedFromPrivate = 4] = `RemovedFromPrivate`, e[e.Recategorized = 5] = `Recategorized`, e
    }({}), en = {
        [x.User]: x.Private,
        [x.Group]: x.Private,
        [x.Email]: x.Private,
        [x.WorkspaceLink]: x.Workspace
    }
}));

function nn(e, t) {
    if (t == null) return e;

    function n(e) {
        return typeof e == `object` && e ? Array.isArray(e) ? e.map(n) : Object.fromEntries(Object.entries(e).map(([e, t]) => [e, n(t)])) : e === null ? void 0 : e
    }
    return t = n(t), {
        ...e,
        ...t
    }
}

function rn(e) {
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

function an(e) {
    return e === `link` || e === `marketplace`
}

function on(e) {
    try {
        return new URL(e), !0
    } catch {
        return !1
    }
}

function sn(e, t, n) {
    let r = e.name.length > 50,
        i = (e.description?.length ?? 0) > 300,
        a = (e.instructions?.length ?? 0) > st,
        o = [];
    if (e?.name === `` && o.push(6), r && o.push(3), i && o.push(4), a && o.push(5), t != null && an(t)) {
        let t = e.tools?.filter(e => e.type === m.JIT_PLUGIN);
        for (let e of t) {
            let t = e.metadata?.privacy_policy_url;
            if (t == null || !on(t)) {
                o.push(7);
                break
            }
        }
    }
    return t === x.Marketplace && n == null && o.push(8), o
}
var cn, ln, un, dn = e((() => {
    De(), D(), it(), U(), cn = function(e) {
        return e[e.Loading = 0] = `Loading`, e[e.UploadingProfilePic = 1] = `UploadingProfilePic`, e[e.GeneratingProfilePic = 2] = `GeneratingProfilePic`, e[e.GizmoNameTooLong = 3] = `GizmoNameTooLong`, e[e.GizmoDescriptionTooLong = 4] = `GizmoDescriptionTooLong`, e[e.GizmoInstructionsTooLong = 5] = `GizmoInstructionsTooLong`, e[e.NameEmpty = 6] = `NameEmpty`, e[e.MissingPublicActionPrivacyPolicyURL = 7] = `MissingPublicActionPrivacyPolicyURL`, e[e.MissingCategory = 8] = `MissingCategory`, e
    }({}), ln = {
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
            type: m.IMAGE_GEN
        }],
        files: [],
        defaultModel: null,
        trainingDisabled: !1,
        liveVersion: 0,
        contextStuffingBudget: null,
        firstPartyProjectType: null
    }, un = He({
        instructionsWarning: {
            id: `gizmo.instructionsWarning`,
            defaultMessage: `Conversations with your GPT can potentially include part or all of the instructions provided.`
        }
    })
}));

function fn(e) {
    return !an(e.sharingRecipient ?? x.Private) && p(`1056818577`)
}

function pn(e, t) {
    return t && an(e) ? x.Private : e
}
var mn = e((() => {
    A(), dn(), D()
}));

function hn() {
    "use forget";
    let e = (0, _n.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, vn.jsx)(`div`, {
        role: `status`,
        className: `border-token-border-status-warning bg-token-bg-status-warning text-token-text-status-warning rounded-md border px-2.5 py-1.5 text-xs leading-4`,
        children: (0, vn.jsx)(H, {
            id: `gizmo.publish.new_gpt.public_sharing_disabled.notice`,
            defaultMessage: `Sharing GPTs with the public is no longer available. <link>Learn more</link>`,
            values: {
                link: gn
            }
        })
    }), e[0] = t) : t = e[0], t
}

function gn(e) {
    return (0, vn.jsx)(`a`, {
        href: `https://help.openai.com/en/articles/8554397-creating-a-gpt`,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `underline`,
        children: e
    })
}
var _n, vn, yn = e((() => {
        _n = Ye(), U(), vn = B()
    })),
    bn = t({
        GizmoSharingDetails: () => Vn,
        GizmoTile: () => An,
        GizmoUpdatedModal: () => kn,
        HipaaGizmoShareWarning: () => xn,
        SHARE_LEVEL_ICONS: () => Bn,
        ShareGizmoModal: () => Dn,
        ShareLevelItem: () => Z,
        sharingSubjectToSharingParam: () => En
    });

function xn() {
    return (0, $.jsxs)(`div`, {
        className: `border-token-border-medium bg-token-main-surface-secondary text-token-text-primary flex items-start gap-3 rounded-md border px-4 py-3 text-sm`,
        children: [(0, $.jsx)(Fe, {
            className: `icon-sm interactive-label-warning-secondary mt-0.5 shrink-0`
        }), (0, $.jsx)(H, {
            id: `gizmo.share.hipaaCompliance.warning`,
            defaultMessage: `OpenAI supports HIPAA compliance for your use of custom GPTs in this workspace. If you share or publish this GPT with others, your BAA does not apply to their use. Do not represent this GPT to third parties as HIPAA compliant.`
        })]
    })
}

function Sn(e, t) {
    return k(e) ? k(t) && e.user_id === t.user_id : O(e) ? O(t) && e.group_id === t.group_id : g(e) ? g(t) && e.user_email.toLowerCase() === t.user_email.toLowerCase() : e.type === t.type
}

function Cn(e) {
    return O(e) ? e.group_name : k(e) ? e.user_name : e.user_email
}

function wn(e) {
    return k(e) ? e.user_email : null
}

function Tn(e) {
    return O(e) ? e.group_name : k(e) ? `${e.user_name} ${e.user_email}` : e.user_email
}

function En(e) {
    if (typeof e.type == `string`) return e;
    let t = Ln[e.type];
    if (!t) throw Error(`Unknown sharing subject type: ` + e.type);
    return {
        ...e,
        type: t
    }
}

function Dn({
    gizmo: e,
    publishedGizmo: t,
    updateGizmo: n,
    promoteGizmo: r,
    appealGizmo: i,
    setAppealState: o,
    showActionsModal: c,
    shareOnly: l,
    onClose: p,
    workspaceOwner: g = !1
}) {
    let _ = W(),
        v = ae(je),
        {
            data: ee
        } = re(g ? void 0 : e.id),
        ne = ee?.gizmo.migrated_plugin_id ?? e.migratedPluginId ?? t?.gizmo.migrated_plugin_id,
        S = ve(ne),
        C = xe(),
        w = fn(e),
        oe = C?.isHipaaCompliantWorkspace ?? !1,
        se = we().trim(),
        ue = C?.id,
        {
            data: de,
            isLoading: fe
        } = Me(ue),
        D = Pt(de),
        pe = C?.isEnterprisey() ?? !1,
        me = C?.data?.role,
        ye = me != null && lt(me),
        be;
    be = ue == null ? void 0 : g || ye || !pe ? !0 : fe ? void 0 : de?.permissions?.includes(Ee.MemberRoleView) ?? !1;
    let A = se || `your workspace`,
        j = Ce(),
        M = a(),
        [N, P] = (0, Q.useState)(void 0);
    (0, Q.useEffect)(() => {
        if (N === void 0)
            if (t?.gizmo.display.categories && t?.gizmo.display.categories.length > 0) {
                let e = M.data?.categories.find(e => e.id === t?.gizmo.display.categories[0]);
                e && P(e)
            } else M.data !== void 0 && P(M.data.categories[M.data.categories.length - 1])
    }, [M.data, N, t]);
    let [F, Te] = (0, Q.useState)(() => pn(e.sharingRecipient ?? x.Private, w)), [I, L] = (0, Q.useState)(e.sharing?.subjects ?? []), [De, Oe] = (0, Q.useState)(null), [ke, R] = (0, Q.useState)(!1), Ne = (0, Q.useRef)(null), Pe = (0, Q.useRef)(I.length);
    (0, Q.useEffect)(() => {
        I.length > Pe.current && requestAnimationFrame(() => {
            Ne.current?.scrollTo({
                top: Ne.current.scrollHeight,
                behavior: `smooth`
            })
        }), Pe.current = I.length
    }, [I]);
    let Fe = (0, Q.useCallback)(() => !le(e.sharing?.subjects, I) || e.sharingRecipient !== F, [e.sharing, e.sharingRecipient, F, I]),
        z = Ue(),
        Ie = sn(e, F, N?.id ?? void 0),
        Le = Ie.includes(cn.MissingPublicActionPrivacyPolicyURL),
        Re = e.tools.find(e => e.type === m.JIT_PLUGIN && !e.metadata.privacy_policy_url);
    if (v || S) return (0, $.jsx)(s, {
        isOpen: !0,
        onClose: p,
        title: (0, $.jsx)(H, {
            ...S ? Ae.title : h.readOnlyTitle
        }),
        showCloseButton: !0,
        children: (0, $.jsx)(H, {
            ...S ? Ae.notice : h.sharingNotice
        })
    });
    if (De) return (0, $.jsx)(kn, {
        publishedGizmo: De,
        sharing: {
            recipient: F,
            subjects: I
        },
        workspaceName: A,
        onClose: p
    });

    function Be(e) {
        I.find(t => Sn(t, e)) || L([...I, e])
    }
    let B = ce(I);

    function V(e) {
        let t = I.filter(e => [b.WORKSPACE, b.ALL].indexOf(e.type) === -1);
        e != null && t.push(e), L(t)
    }

    function He(e) {
        switch (Te(e), e) {
            case x.Marketplace:
            case x.Link:
                V({
                    type: b.ALL,
                    capabilities: T
                });
                break;
            case x.Workspace:
            case x.WorkspaceLink:
                V({
                    type: b.WORKSPACE,
                    capabilities: T
                });
                break;
            default:
                V(null)
        }
    }

    function We(e) {
        B != null && L(I.map(t => t === B ? {
            ...t,
            capabilities: e
        } : t))
    }

    function U(e, t, n) {
        return e.type === b.USER && e.user_id.indexOf(`__`) === -1 ? {
            ...e,
            user_id: e.user_id + `__` + C?.getWorkspaceId()
        } : e
    }
    async function Ge(e, i) {
        if (ke || je() || ve(ne)) return;
        if (e && !i) throw Error(`Cannot share a gizmo that hasn't been promoted before`);
        if (!N) return;
        R(!0);
        let a = I.map(U).map(En);
        if (a = te(F, a, B?.capabilities ?? T), g) return !C || !i ? (E.warning(`Unable to change sharing settings`), p()) : (await d.safePost(`/accounts/{account_id}/gpts/{gizmo_id}/share`, {
            parameters: {
                path: {
                    account_id: C.id,
                    gizmo_id: i
                }
            },
            requestBody: {
                sharing: a
            }
        }), E.success(_.formatMessage({
            id: `SWSzcY`,
            defaultMessage: `Sharing settings updated`
        })), z.invalidateQueries({
            queryKey: [`workspace`]
        }), p());
        if (e) {
            if (!i || !t) throw Error(`No gizmo ID to share`);
            try {
                let e = {
                    sharing: a
                };
                N && (e.categories = [N.id]);
                let r = await f.shareGizmo(i, e);
                if (r.error) Lt(F, r.sharing_targets ?? void 0) ? (o?.({
                    gizmoId: t.gizmo.id,
                    sharingRecipient: F,
                    categories: t.gizmo.display.categories,
                    moderationType: $t.PublishBlocked,
                    sharingTargets: r.sharing_targets ?? void 0,
                    showModal: Qt.AppealAvailable
                }), p()) : E.warning(_.formatMessage({
                    id: `tmIKmp`,
                    defaultMessage: `Unable to share GPT`
                }));
                else {
                    if (r.resource == null) throw Error(`Missing shared gizmo resource`);
                    z.setQueryData([`gizmo`, {
                        gizmoId: t.gizmo.id
                    }, {
                        draft: !1
                    }], e => r.resource), n?.(e => ({
                        ...e,
                        sharing: {
                            recipient: F,
                            subjects: I
                        },
                        sharingRecipient: F
                    })), E.success(_.formatMessage({
                        id: `SWSzcY`,
                        defaultMessage: `Sharing settings updated`
                    })), p()
                }
            } catch {
                return E.warning(_.formatMessage({
                    id: `dKC65l`,
                    defaultMessage: `Failed to update sharing settings`
                })), p()
            }
        } else {
            if (r) {
                let e = await r({
                    subjects: a,
                    recipient: F
                }, N.id);
                i ||= e?.gizmo.id, Oe(e ?? null), n?.({
                    liveVersion: e?.gizmo.live_version ?? void 0
                })
            }
            z.invalidateQueries({
                queryKey: [`gizmo`, {
                    gizmoId: i
                }]
            })
        }
        R(!1), z.invalidateQueries({
            queryKey: [`gizmos`]
        }), z.refetchQueries({
            queryKey: [`gizmos`, `discovery`]
        }), z.refetchQueries({
            queryKey: [`gizmo`, {
                gizmoId: i
            }]
        }), z.invalidateQueries({
            queryKey: [`gizmo`, `userActionSettings`, {
                gizmoId: i
            }]
        }), z.invalidateQueries({
            queryKey: [`workspace`]
        }), n?.({
            sharing: {
                recipient: F,
                subjects: I
            },
            sharingRecipient: F
        }, !1)
    }
    let Ke = !t || Mn(t.gizmo.author.user_id.split(`__`)[0], j?.id),
        qe = t?.gizmo.author.display_name || null;
    return (0, $.jsx)(s, {
        testId: `modal-share-gizmo`,
        type: `success`,
        className: `max-w-[555px]`,
        size: `custom`,
        isOpen: !0,
        onClose: p,
        primaryButton: Lt(F, e.sharingTargets) ? (0, $.jsx)(y, {
            onClick: () => i(F, N?.id),
            children: (0, $.jsx)(H, {
                id: `yS4os0`,
                defaultMessage: `Learn more`
            })
        }) : (0, $.jsx)(y, {
            onClick: () => Ge(l, t?.gizmo.id),
            loading: ke,
            disabled: Ie.length > 0 || !q(F, e.sharingTargets),
            children: l ? (0, $.jsx)(H, {
                id: `BEKjVh`,
                defaultMessage: `Save`
            }) : (0, $.jsx)(H, {
                id: `24j5ts`,
                defaultMessage: `Update`
            })
        }),
        secondaryButton: (0, $.jsxs)($.Fragment, {
            children: [Fe() && (0, $.jsx)(`div`, {
                className: `text-token-text-secondary absolute start-6 bottom-8 text-sm`,
                children: (0, $.jsx)(H, {
                    id: `9CkgC4`,
                    defaultMessage: `Unsaved changes`
                })
            }), t && (0, $.jsx)(y, {
                color: `secondary`,
                onClick: e => ie(t, Ve(), e, _.formatMessage({
                    id: `KdDqMm`,
                    defaultMessage: `Copied link to clipboard`
                })),
                children: (0, $.jsx)(H, {
                    id: `wvL15a`,
                    defaultMessage: `Copy link`
                })
            })]
        }),
        title: _.formatMessage({
            id: `7JggXH`,
            defaultMessage: `Share GPT`
        }),
        showCloseButton: !0,
        children: (0, $.jsxs)(`div`, {
            className: `flex flex-col space-y-4`,
            children: [(0, $.jsx)(jn, {
                onAdd: e => Be(e),
                publishedGizmo: t,
                canListMembers: be,
                allowScimGroupSharing: D
            }), oe && (0, $.jsx)(xn, {}), (0, $.jsx)(`h3`, {
                className: `text-base font-semibold`,
                children: (0, $.jsx)(H, {
                    id: `bNQXcV`,
                    defaultMessage: `Share with...`
                })
            }), (0, $.jsxs)(`div`, {
                ref: Ne,
                className: `max-h-[200px] space-y-2 overflow-y-auto`,
                children: [(0, $.jsxs)(`div`, {
                    className: `mb-4 flex flex-row items-center justify-between space-x-3`,
                    children: [(0, $.jsx)(`div`, {
                        className: `shrink-0 grow-0 self-start`,
                        children: Ke ? (0, $.jsx)(ze, {
                            user: j
                        }) : (0, $.jsx)(Se, {
                            name: qe ?? `User`,
                            initialsCount: 2
                        })
                    }), (0, $.jsx)(`div`, {
                        className: `grow text-base font-semibold`,
                        children: Ke ? (0, $.jsxs)(`div`, {
                            className: `flex flex-col`,
                            children: [(0, $.jsx)(H, {
                                id: `U7tzof`,
                                defaultMessage: `{userName} (you)`,
                                values: {
                                    userName: j?.name
                                }
                            }), (0, $.jsx)(`span`, {
                                className: `text-token-text-secondary -mt-1 text-sm`,
                                children: j?.email
                            })]
                        }) : qe ? (0, $.jsx)(H, {
                            id: `scRZqV`,
                            defaultMessage: `{userName} (builder)`,
                            values: {
                                userName: qe
                            }
                        }) : (0, $.jsx)(H, {
                            id: `gizmo.share.builder.fallbackLabel`,
                            defaultMessage: `Builder`
                        })
                    })]
                }), I.map((e, t) => he(e) && (0, $.jsxs)(`div`, {
                    className: `mb-4 flex flex-row items-center justify-between space-x-3`,
                    children: [(0, $.jsx)(Se, {
                        name: Tn(e),
                        initialsCount: k(e) ? 2 : 1,
                        className: _e(`shrink-0 grow-0`, k(e) && `self-start`)
                    }), (0, $.jsxs)(`div`, {
                        className: `flex grow flex-col`,
                        children: [(0, $.jsxs)(`span`, {
                            className: `flex flex-row`,
                            children: [(0, $.jsx)(`span`, {
                                className: `me-2 text-base font-semibold`,
                                children: Cn(e)
                            }), O(e) && e.is_scim_managed && (0, $.jsx)(Fn, {})]
                        }), k(e) && (0, $.jsx)(`span`, {
                            className: `text-token-text-secondary -mt-1 text-sm`,
                            children: wn(e)
                        })]
                    }), (0, $.jsxs)(G.Root, {
                        children: [(0, $.jsxs)(G.Trigger, {
                            className: `text-token-text-secondary text-base whitespace-nowrap`,
                            children: [(0, $.jsx)(H, {
                                ...X(e.capabilities)
                            }), (0, $.jsx)(dt, {
                                className: `icon`
                            })]
                        }), (0, $.jsx)(G.Portal, {
                            children: (0, $.jsxs)(G.Content, {
                                className: `max-w-[320px]`,
                                children: [In().map((t, n) => (0, $.jsx)(On, {
                                    capabilities: t,
                                    selected: le(t, e.capabilities),
                                    onClick: () => {
                                        L(I.map(n => n === e ? {
                                            ...n,
                                            capabilities: t
                                        } : n))
                                    }
                                }, n)), (0, $.jsx)(G.Separator, {
                                    className: `my-2`
                                }), (0, $.jsx)(G.Item, {
                                    onClick: () => L(I.filter(t => t !== e)),
                                    color: `danger`,
                                    icon: Et,
                                    children: (0, $.jsx)(H, {
                                        id: `NU0BOB`,
                                        defaultMessage: `Remove`
                                    })
                                })]
                            })
                        })]
                    })]
                }, t))]
            }), (0, $.jsx)(`hr`, {
                className: `border-token-border-medium`
            }), (0, $.jsx)(`h3`, {
                className: `text-base font-semibold`,
                children: (0, $.jsx)(H, {
                    id: `uqD7Y8`,
                    defaultMessage: `Access`
                })
            }), w && (0, $.jsx)(hn, {}), (0, $.jsxs)(`div`, {
                className: `-ms-3.5 flex flex-row items-center justify-between space-x-3`,
                children: [(0, $.jsxs)(K.Root, {
                    value: F,
                    onValueChange: e => He(e),
                    children: [(0, $.jsxs)(K.Trigger, {
                        children: [(0, $.jsx)(K.Value, {}), (0, $.jsx)(K.Icon, {})]
                    }), (0, $.jsx)(K.Portal, {
                        children: (0, $.jsxs)(K.Content, {
                            children: [(0, $.jsxs)(K.Group, {
                                children: [(0, $.jsx)(K.Label, {
                                    children: (0, $.jsx)(H, {
                                        id: `YIQwaP`,
                                        defaultMessage: `Private`
                                    })
                                }), F === x.User ? (0, $.jsx)(K.Item, {
                                    value: x.User,
                                    children: (0, $.jsx)(Z, {
                                        shareLevel: x.User,
                                        workspaceName: A
                                    })
                                }) : (0, $.jsx)(K.Item, {
                                    value: x.Private,
                                    children: (0, $.jsx)(Z, {
                                        shareLevel: x.Private,
                                        workspaceName: A
                                    })
                                })]
                            }), (0, $.jsx)(K.Separator, {}), (0, $.jsx)(ge, {
                                triggerAs: null,
                                label: _.formatMessage({
                                    id: `n0m61x`,
                                    defaultMessage: `Your workspace has disabled sharing with the workspace.`
                                }),
                                side: `bottom`,
                                disabled: q(`workspace`, e.sharingTargets),
                                children: (0, $.jsxs)(K.Group, {
                                    children: [(0, $.jsx)(K.Label, {
                                        children: A
                                    }), (0, $.jsx)(K.Item, {
                                        value: x.WorkspaceLink,
                                        disabled: !q(x.WorkspaceLink, e.sharingTargets) && !q(x.Workspace, e.sharingTargets),
                                        children: (0, $.jsx)(Z, {
                                            shareLevel: x.WorkspaceLink,
                                            workspaceName: A
                                        })
                                    }), (0, $.jsx)(K.Item, {
                                        value: x.Workspace,
                                        disabled: !q(`workspace`, e.sharingTargets),
                                        children: (0, $.jsx)(Z, {
                                            shareLevel: x.Workspace,
                                            workspaceName: A
                                        })
                                    })]
                                })
                            }), !w && (0, $.jsxs)($.Fragment, {
                                children: [(0, $.jsx)(K.Separator, {}), (0, $.jsx)(ge, {
                                    triggerAs: null,
                                    label: _.formatMessage({
                                        id: `IHnort`,
                                        defaultMessage: `Your workspace has disabled public sharing.`
                                    }),
                                    side: `bottom`,
                                    disabled: q(`marketplace`, e.sharingTargets),
                                    children: (0, $.jsxs)(K.Group, {
                                        children: [(0, $.jsx)(K.Label, {
                                            children: (0, $.jsx)(H, {
                                                id: `PjY9bi`,
                                                defaultMessage: `Public`
                                            })
                                        }), (0, $.jsx)(K.Item, {
                                            value: x.Link,
                                            disabled: !q(`link`, e.sharingTargets),
                                            children: (0, $.jsx)(Z, {
                                                shareLevel: x.Link,
                                                workspaceName: A
                                            })
                                        }), (0, $.jsx)(K.Item, {
                                            disabled: !q(`marketplace`, e.sharingTargets),
                                            value: x.Marketplace,
                                            children: (0, $.jsx)(Z, {
                                                shareLevel: x.Marketplace,
                                                workspaceName: A
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })]
                }), F !== x.Private && F !== x.User && (0, $.jsxs)(G.Root, {
                    children: [(0, $.jsxs)(G.Trigger, {
                        className: `text-token-text-secondary text-base whitespace-nowrap`,
                        children: [B == null ? (0, $.jsx)(H, {
                            ...X(T)
                        }) : (0, $.jsx)(H, {
                            ...X(B.capabilities)
                        }), (0, $.jsx)(dt, {
                            className: `icon`
                        })]
                    }), (0, $.jsx)(G.Portal, {
                        children: (0, $.jsxs)(G.Content, {
                            className: `max-w-[320px]`,
                            children: [(0, $.jsx)(On, {
                                onClick: () => We(T),
                                capabilities: T,
                                selected: le(B?.capabilities, T)
                            }), F !== x.Marketplace && F !== x.Link && (0, $.jsx)(On, {
                                onClick: () => We(u),
                                capabilities: u,
                                selected: le(B?.capabilities, u)
                            })]
                        })
                    })]
                })]
            }), Le && (0, $.jsx)(`div`, {
                className: `text-xs text-red-500`,
                children: (0, $.jsx)(H, {
                    id: `/iw1Iv`,
                    defaultMessage: `Public actions require valid privacy policy URLs. Click <fixlink>here</fixlink> to update.`,
                    values: {
                        fixlink: e => (0, $.jsx)(`button`, {
                            onClick: () => {
                                c?.(Re?.metadata.action_id), p()
                            },
                            className: `underline`,
                            children: e
                        })
                    }
                })
            }), (F === x.Marketplace || F === x.Workspace) && (q(F, e.sharingTargets) ? (0, $.jsx)(An, {
                gizmo: e,
                category: N?.id,
                categories: M.data?.categories,
                onCategoryChange: e => P(e)
            }) : Lt(F, e.sharingTargets) ? (0, $.jsx)(`div`, {
                className: `pb-2 text-xs text-red-500`,
                children: (0, $.jsx)(Wt, {
                    sharingRecipient: F,
                    moderatedFields: It(F, e.sharingTargets) ?? [],
                    appealAvailable: !0
                })
            }) : (0, $.jsx)(`div`, {
                className: `pb-2 text-xs text-red-500`,
                children: (0, $.jsx)(H, {
                    id: `BzqqKH`,
                    defaultMessage: `Your workspace's settings don't allow this level of access. An owner of the workspace can change this setting in the workspace's GPTs settings.`
                })
            }))]
        })
    })
}

function X(e) {
    return e.can_write ? V({
        id: `SubCqD`,
        defaultMessage: `Can edit`
    }) : e.can_view_config ? V({
        id: `V6OjbX`,
        defaultMessage: `Can view settings`
    }) : e.can_read ? V({
        id: `/0j34W`,
        defaultMessage: `Can chat`
    }) : V({
        id: `x2E8ET`,
        defaultMessage: `Unknown`
    })
}

function On({
    capabilities: e,
    selected: t,
    onClick: n
}) {
    let r = null;
    e.can_write ? r = gt : e.can_view_config ? r = Ct : e.can_read && (r = wt);
    let i = e.can_write ? (0, $.jsx)(H, {
        id: `wKFMT1`,
        defaultMessage: `Edit settings, duplicate, and chat`
    }) : e.can_view_config ? (0, $.jsx)(H, {
        id: `Y/J4TZ`,
        defaultMessage: `See settings, duplicate, and chat`
    }) : e.can_read ? (0, $.jsx)(H, {
        id: `PvgEQP`,
        defaultMessage: `Chat with this GPT only`
    }) : null;
    return (0, $.jsxs)(G.Item, {
        className: `flex h-auto flex-row items-center px-3 py-3`,
        onClick: n,
        icon: r,
        children: [(0, $.jsxs)(`div`, {
            className: `me-1 flex grow flex-col`,
            children: [(0, $.jsx)(`span`, {
                className: `mb-0.5 text-base leading-tight`,
                children: (0, $.jsx)(H, {
                    ...X(e)
                })
            }), (0, $.jsx)(`span`, {
                className: `text-token-text-secondary text-xs`,
                children: i
            })]
        }), (0, $.jsx)(_t, {
            className: _e(`icon-lg shrink-0`, !t && `invisible`)
        })]
    })
}

function Z({
    shareLevel: e,
    workspaceName: t,
    hasInviteSharing: n = !0
}) {
    (e === x.User || e === x.Group || e === x.Email) && (e = x.Private);
    let r = Bn[e];
    return (0, $.jsxs)(`div`, {
        className: `flex flex-row items-center gap-3 text-sm`,
        children: [(0, $.jsx)(r, {
            className: `icon text-token-text-secondary`
        }), (0, $.jsx)(`div`, {
            className: `pt-px text-start`,
            children: !n && e === x.Private ? (0, $.jsx)(H, {
                id: `vVJhYB`,
                defaultMessage: `Only me`
            }) : (0, $.jsx)(H, {
                ...Rn[e],
                values: {
                    workspaceName: t
                }
            })
        })]
    })
}

function kn({
    publishedGizmo: e,
    sharing: t,
    workspaceName: n,
    onClose: r
}) {
    let i = W();
    return (0, $.jsxs)(s, {
        testId: `modal-gizmo-updated`,
        isOpen: !0,
        onClose: r,
        showCloseButton: !0,
        className: `w-[304px]`,
        title: (0, $.jsx)(H, {
            id: `5CEceY`,
            defaultMessage: `GPT Updated`
        }),
        primaryButton: (0, $.jsx)(y, {
            onClick: () => {
                window.location.href = `/g/${e.gizmo.id}`
            },
            children: (0, $.jsx)(H, {
                id: `RF75o5`,
                defaultMessage: `View GPT`
            })
        }),
        secondaryButton: (0, $.jsx)(y, {
            color: `secondary`,
            onClick: t => ie(e, Ve(), t, i.formatMessage({
                id: `KdDqMm`,
                defaultMessage: `Copied link to clipboard`
            })),
            children: (0, $.jsx)(H, {
                id: `9hLOl9`,
                defaultMessage: `Copy link`
            })
        }),
        type: `success`,
        children: [(0, $.jsx)(An, {
            gizmo: {
                profilePictureUrl: e.gizmo.display.profile_picture_url ?? void 0,
                name: e.gizmo.display.name
            }
        }), (0, $.jsx)(Vn, {
            sharing: t,
            workspaceName: n
        })]
    })
}

function An({
    gizmo: e,
    category: t,
    categories: n,
    onCategoryChange: r
}) {
    let {
        data: i,
        isLoading: a
    } = z(), o = n?.find(e => e.id === t);
    return (0, $.jsxs)(`div`, {
        children: [(0, $.jsxs)(`div`, {
            className: _e(`bg-token-main-surface-secondary mb-[1px] flex flex-row items-center space-x-2 p-4`, a && `invisible`, n ? `rounded-t-lg` : `rounded-lg`),
            children: [(0, $.jsx)(ct, {
                isFirstParty: !1,
                className: `h-11 w-11`,
                src: e.profilePictureUrl
            }), (0, $.jsxs)(`div`, {
                className: `flex grow flex-col space-y-0`,
                children: [(0, $.jsx)(`span`, {
                    className: `text-base font-semibold`,
                    children: e.name
                }), (0, $.jsx)(Qe, {
                    builderName: i?.display_name,
                    builderUrl: i?.website_url,
                    socials: [i?.socials.linkedin, i?.socials.github].filter(e => e != null),
                    className: `text-token-text-secondary text-xs`
                })]
            })]
        }), n && (0, $.jsxs)(`div`, {
            className: `bg-token-main-surface-secondary flex min-h-[56px] flex-row items-center justify-between space-x-2 rounded-b-lg px-4 text-base`,
            children: [(0, $.jsx)(`span`, {
                className: `font-semibold`,
                children: (0, $.jsx)(H, {
                    id: `JcA4/t`,
                    defaultMessage: `Category`
                })
            }), (0, $.jsx)(`div`, {
                className: `text-token-text-secondary`,
                children: r ? (0, $.jsx)(Ze, {
                    size: `small`,
                    triggerButton: (0, $.jsxs)(`button`, {
                        className: `flex items-center gap-1`,
                        children: [o?.title, (0, $.jsx)(dt, {
                            className: `icon`
                        })]
                    }),
                    children: n.map((e, t) => (0, $.jsx)(G.Item, {
                        onClick: () => r(e),
                        children: e.title
                    }, t))
                }) : (0, $.jsx)(`span`, {
                    className: `text-token-text-secondary`,
                    children: o?.title
                })
            })]
        })]
    })
}

function jn({
    onAdd: e,
    publishedGizmo: t,
    canListMembers: n,
    allowScimGroupSharing: r
}) {
    let i = W(),
        a = S(),
        [o, s] = (0, Q.useState)(``),
        c = n === !0,
        l = Xe(c ? a?.id : void 0, 0, o, 5).data?.items.filter(e => e.account_user_id !== t?.gizmo.author.user_id),
        u = r,
        {
            data: f
        } = We({
            queryKey: [a?.id, `groups`, `filtered`, o, u],
            queryFn: () => d.safeGet(`/accounts/{account_id}/groups`, {
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

    function p(t, n, r) {
        e({
            type: b.GROUP,
            group_id: t,
            group_name: n,
            capabilities: {
                ...T
            },
            is_scim_managed: r
        }), s(``)
    }

    function m(t, n, r) {
        a && (e({
            type: b.USER,
            user_id: t,
            user_name: n,
            user_email: r,
            avatar_url: null,
            capabilities: {
                ...T
            }
        }), s(``))
    }
    let h = a?.isEnterprisey() ? i.formatMessage({
            id: `xy/AMO`,
            defaultMessage: `Add people and groups from your workspace`
        }) : i.formatMessage({
            id: `Lh9njB`,
            defaultMessage: `Add people from your workspace`
        }),
        {
            eligible: g
        } = ke(R.hasSeenMultipleGPTEditorsTooltip),
        _ = !c,
        v = _ ? (0, $.jsx)($e, {
            ariaLabel: h,
            disabled: !0,
            inputClassName: `bg-token-bg-primary!`,
            name: `share-with-input`,
            placeholder: h,
            value: o
        }) : (0, $.jsx)(Mt, {
            label: h,
            name: `share-with-input`,
            inputClassName: `bg-token-bg-primary!`,
            inputValue: o,
            onInputChange: s,
            suggestions: [...l?.map(e => ({
                id: e.id,
                className: `flex flex-col rounded-xs p-1 hover:bg-token-main-surface-tertiary rounded-xs p-1 text-sm`,
                focusedClassName: `bg-token-main-surface-tertiary`,
                onClick: () => m(e.account_user_id, e.name, e.email ?? ``),
                children: (0, $.jsxs)($.Fragment, {
                    children: [(0, $.jsx)(`span`, {
                        className: `w-full font-semibold`,
                        children: e.name
                    }), (0, $.jsx)(`span`, {
                        className: `text-token-text-secondary text-sm`,
                        children: e.email
                    })]
                })
            })) ?? [], ...f?.items.map(e => ({
                id: e.id,
                className: `flex flex-col rounded-xs p-1 hover:bg-token-main-surface-tertiary rounded-xs p-1 text-sm`,
                focusedClassName: `bg-token-main-surface-tertiary`,
                onClick: () => p(e.id, e.name, e.is_scim_managed ?? !1),
                children: (0, $.jsxs)(`span`, {
                    className: `flex flex-col`,
                    children: [(0, $.jsxs)(`span`, {
                        className: `flex flex-row`,
                        children: [(0, $.jsx)(`span`, {
                            className: `me-2 font-semibold`,
                            children: e.name
                        }), e.is_scim_managed && (0, $.jsx)(Fn, {})]
                    }), (0, $.jsx)(`span`, {
                        className: `text-token-text-secondary text-sm`,
                        children: (0, $.jsx)(H, {
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
    return (0, $.jsxs)($.Fragment, {
        children: [n === !1 && (0, $.jsxs)(`div`, {
            className: `border-token-border-medium bg-token-main-surface-secondary text-token-text-primary flex items-center gap-3 rounded-md border px-4 py-3`,
            children: [(0, $.jsx)(Fe, {
                className: `icon-sm interactive-label-warning-secondary shrink-0`
            }), (0, $.jsx)(H, {
                id: `6e1nG9`,
                defaultMessage: `You don't have permission to search your workspace members. Please contact your workspace admin for access or update the workspace settings.`
            })]
        }), n !== !1 && (0, $.jsx)(`div`, {
            className: `flex w-full flex-row space-x-3`,
            children: g && !_ ? (0, $.jsx)(kt, {
                announcementKey: R.hasSeenMultipleGPTEditorsTooltip,
                show: g,
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
                onDismiss: () => I(R.hasSeenMultipleGPTEditorsTooltip),
                children: v
            }) : v
        })]
    })
}

function Mn(e, t) {
    return e === void 0 || t === void 0 ? !1 : e.split(`__`)[0] === t.split(`__`)[0]
}

function Nn(e) {
    return !he(e)
}
var Pn, Q, $, Fn, In, Ln, Rn, zn, Bn, Vn, Hn = e((() => {
    Pn = Ye(), oe(), De(), o(), Pe(), r(), nt(), tt(), ye(), jt(), et(), Dt(), St(), vt(), xt(), pt(), mt(), ut(), Tt(), bt(), L(), de(), At(), j(), ot(), Ot(), N(), se(), Ie(), i(), Oe(), Be(), F(), fe(), Nt(), be(), Je(), me(), Re(), Q = n(Ge()), U(), Rt(), tn(), at(), rt(), P(), dn(), mn(), yn(), ee(), _(), D(), C(), $ = B(), qe(), Fn = pe(() => Ke(() => import(`./fbf44c55-o2lsxc57nll08quu.js`).then(e => e.DirectorySyncResourceManagedIndication), __vite__mapDeps([0, 1, 2]))), In = () => [T, u, c], Ln = {
        [b.USER]: x.User,
        [b.GROUP]: x.Group,
        [b.WORKSPACE]: x.Workspace,
        [b.ALL]: x.Marketplace
    }, Rn = He({
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
    }), zn = He({
        workspace: {
            id: `1kpopF`,
            defaultMessage: `Published to {workspaceName}`
        },
        marketplace: {
            id: `hdTRpJ`,
            defaultMessage: `Published to GPT Store`
        }
    }), Bn = {
        private: ft,
        user: ft,
        group: ft,
        email: ft,
        workspace_link: ht,
        workspace: yt,
        link: ht,
        marketplace: ne.SidebarApps
    }, Vn = e => {
        "use forget";
        let t = (0, Pn.c)(26),
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
            let e = n.subjects.filter(Nn),
                a = o && e.length > 0 ? e.map(e => ({
                    level: e.type === b.WORKSPACE ? s === x.Workspace ? x.Workspace : x.WorkspaceLink : s === x.Marketplace ? x.Marketplace : x.Link,
                    subject: e
                })) : [{
                    level: s,
                    subject: void 0
                }];
            t[9] !== r || t[10] !== n.subjects || t[11] !== o ? (d = (r != null || n.subjects.some(he)) && (0, $.jsxs)(`div`, {
                className: o ? `my-4 flex flex-col gap-4` : `my-4`,
                children: [(0, $.jsx)(`h3`, {
                    className: o ? `text-base font-semibold` : `text-token-text-secondary text-xs font-semibold`,
                    children: (0, $.jsx)(H, {
                        id: `/paYH9`,
                        defaultMessage: `Shared with`
                    })
                }), r != null && (0, $.jsxs)(`div`, {
                    className: `flex items-center gap-3 text-sm`,
                    children: [(0, $.jsx)(Se, {
                        name: r.display_name ?? r.user_email ?? ``,
                        initialsCount: 2,
                        className: `shrink-0`
                    }), (0, $.jsxs)(`div`, {
                        className: `min-w-0 flex-1 break-words`,
                        children: [(0, $.jsx)(`div`, {
                            className: `font-semibold`,
                            children: r.display_name ?? r.user_email
                        }), (0, $.jsx)(`div`, {
                            className: `text-token-text-secondary`,
                            children: r.user_email
                        })]
                    }), (0, $.jsx)(`span`, {
                        className: `text-token-text-secondary shrink-0`,
                        children: (0, $.jsx)(H, {
                            id: `gizmo.pluginMigration.sharing.role.owner`,
                            defaultMessage: `Owner`
                        })
                    })]
                }), n.subjects && n.subjects.map((e, t) => he(e) && !(r != null && k(e) && e.user_id === r.user_id) && (0, $.jsxs)(`div`, {
                    className: o ? `flex items-center justify-between gap-3 text-sm` : `flex flex-row items-center justify-between space-x-3 py-2`,
                    children: [o && (0, $.jsx)(Se, {
                        name: Tn(e),
                        initialsCount: k(e) ? 2 : 1,
                        className: `shrink-0`
                    }), (0, $.jsxs)(`div`, {
                        className: `min-w-0 flex-1 break-words`,
                        children: [(0, $.jsx)(`span`, {
                            className: o ? `text-sm font-semibold` : `text-base font-semibold`,
                            children: Cn(e)
                        }), k(e) && (0, $.jsxs)($.Fragment, {
                            children: [(0, $.jsx)(`br`, {}), (0, $.jsx)(`span`, {
                                className: `text-token-text-secondary text-sm`,
                                children: wn(e)
                            })]
                        })]
                    }), (0, $.jsx)(`span`, {
                        className: `text-token-text-secondary shrink-0`,
                        children: (0, $.jsx)(H, {
                            ...X(e.capabilities)
                        })
                    })]
                }, t))]
            }), t[9] = r, t[10] = n.subjects, t[11] = o, t[12] = d) : d = t[12], c = o ? `border-token-border-light mt-4 flex flex-col gap-4 border-t pt-4` : `my-4`;
            let f = o ? `text-base font-semibold` : `text-token-text-secondary text-xs font-semibold`,
                p;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, $.jsx)(H, {
                id: `q9XNZ7`,
                defaultMessage: `Access`
            }), t[13] = p) : p = t[13], t[14] === f ? l = t[15] : (l = (0, $.jsx)(`h3`, {
                className: f,
                children: p
            }), t[14] = f, t[15] = l);
            let m;
            t[16] !== o || t[17] !== i ? (m = e => {
                let {
                    level: t,
                    subject: n
                } = e, r = Bn[t];
                return (0, $.jsxs)(`div`, {
                    className: o ? `flex items-center gap-3 text-start text-sm` : `ms-[3px] flex flex-row items-center py-3 text-start text-base font-semibold`,
                    children: [(0, $.jsx)(r, {
                        className: o ? `icon text-token-text-secondary shrink-0` : `md:icon-lg me-3 h-6 w-6 shrink-0`
                    }), (0, $.jsx)(`div`, {
                        className: o ? `min-w-0 flex-1` : `flex flex-col`,
                        children: (0, $.jsx)(`span`, {
                            className: o ? void 0 : `font-semibold`,
                            children: (0, $.jsx)(H, {
                                ...o ? Rn[t] : zn[t] ?? Rn[t],
                                values: {
                                    workspaceName: i
                                }
                            })
                        })
                    }), o && n != null && (0, $.jsx)(`span`, {
                        className: `text-token-text-secondary ms-3 shrink-0 text-sm font-normal`,
                        children: (0, $.jsx)(H, {
                            ...X(n.capabilities)
                        })
                    })]
                }, t)
            }, t[16] = o, t[17] = i, t[18] = m) : m = t[18], u = a.map(m), t[0] = r, t[1] = s, t[2] = n.subjects, t[3] = o, t[4] = i, t[5] = c, t[6] = l, t[7] = u, t[8] = d
        } else c = t[5], l = t[6], u = t[7], d = t[8];
        let f;
        t[19] !== c || t[20] !== l || t[21] !== u ? (f = (0, $.jsxs)(`div`, {
            className: c,
            children: [l, u]
        }), t[19] = c, t[20] = l, t[21] = u, t[22] = f) : f = t[22];
        let p;
        return t[23] !== d || t[24] !== f ? (p = (0, $.jsxs)($.Fragment, {
            children: [d, f]
        }), t[23] = d, t[24] = f, t[25] = p) : p = t[25], p
    }
}));
export {
    q as A, rn as C, zt as D, $t as E, tn as O, un as S, Jt as T, ln as _, Bn as a, dn as b, Z as c, hn as d, yn as f, cn as g, fn as h, xn as i, Rt as k, Hn as l, mn as m, An as n, Dn as o, pn as p, kn as r, bn as s, Vn as t, En as u, nn as v, Qt as w, an as x, sn as y
};
//# sourceMappingURL=d84f4c09-h03gexv3fh665ydp.js.map