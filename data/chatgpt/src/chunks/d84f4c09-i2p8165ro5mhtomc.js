const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/fbf44c55-gmoc79u0p3c9uv7d.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-oc6d2eodbcrmxur3.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $E as r,
    AD as i,
    AG as a,
    AT as o,
    AV as s,
    B6 as c,
    C0 as l,
    C1 as u,
    CO as d,
    DG as f,
    FD as p,
    GE as m,
    IG as h,
    IU as g,
    J0 as _,
    LG as v,
    LU as ee,
    My as te,
    OD as ne,
    OO as re,
    PD as ie,
    QL as ae,
    QM as y,
    Qm as oe,
    S0 as se,
    SV as ce,
    ZM as le,
    _O as ue,
    _V as de,
    _w as fe,
    a7 as pe,
    aE as me,
    aV as b,
    b5 as he,
    eR as ge,
    eh as _e,
    fU as ve,
    fV as x,
    gO as ye,
    gS as be,
    hw as S,
    i5 as xe,
    iD as Se,
    ih as Ce,
    it as we,
    iw as C,
    jV as w,
    jy as Te,
    kD as T,
    kT as E,
    kV as D,
    l7 as O,
    lD as Ee,
    mU as k,
    mz as A,
    nt as j,
    o1 as M,
    oE as N,
    oV as De,
    ot as Oe,
    ow as P,
    pU as F,
    pV as I,
    pnt as ke,
    pst as Ae,
    pz as je,
    q0 as Me,
    qE as Ne,
    sE as Pe,
    sV as Fe,
    tt as Ie,
    u1 as L,
    uS as Le,
    vV as Re,
    wO as ze,
    wst as Be,
    xV as R,
    y5 as Ve,
    ynt as He
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as z,
    In as B,
    Ln as Ue,
    N as We,
    Nn as V,
    O as Ge,
    Rn as H,
    Vn as Ke,
    cn as qe,
    ln as Je,
    s as Ye,
    wn as Xe,
    zn as U
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $jt as Ze,
    Bst as Qe,
    CHn as $e,
    Gh as et,
    Kh as tt,
    T6t as nt,
    THn as rt,
    j6t as it,
    nMt as at,
    rCn as ot,
    rMt as st,
    sCn as ct,
    tMt as lt,
    wHn as W,
    zst as ut
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Am as dt,
    Ef as ft,
    FS as pt,
    Fv as mt,
    Fx as ht,
    Hv as gt,
    IS as _t,
    Iv as vt,
    Ix as yt,
    Sv as bt,
    Tf as xt,
    Uy as St,
    Vv as Ct,
    Wy as wt,
    dS as Tt,
    jm as Et,
    uS as Dt,
    xv as Ot
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    d_ as G,
    f_ as kt,
    hm as At,
    mm as jt
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as Mt,
    t as Nt
} from "./92b4bb27-kqzu96b4wlp8vsgl.js";
import {
    n as Pt,
    r as Ft
} from "./3d705e5d-is2nynkj0c3lzm98.js";

function It(e) {
    return e === I.User || e === I.Group ? I.Private : e === I.WorkspaceLink ? I.Workspace : e
}

function K(e, t) {
    return e = It(e), t !== void 0 && t.some(t => t.recipient === e && t.allowed)
}

function Lt(e, t) {
    return t === void 0 ? [] : (e = It(e), t.find(t => t.recipient === e)?.moderated_fields ?? void 0)
}

function Rt(e, t) {
    let n = Lt(e, t);
    return n != null && n.length > 0
}
var zt = e((() => {
    R()
}));

function Bt(e) {
    if (!e) return;
    let t = e.gizmo.appeal_info?.state.kind === `appeal_sent`,
        n = Vt(e.gizmo.share_recipient, e.gizmo.sharing_targets ?? void 0);
    return {
        sharingRecipient: e.gizmo.share_recipient,
        categories: e.gizmo.display.categories,
        gizmoId: e.gizmo.id,
        moderationType: n,
        sharingTargets: e.gizmo.sharing_targets ?? void 0,
        showModal: t ? 2 : n === 0 ? 0 : 1
    }
}

function Vt(e, t = []) {
    let n = new Set(t.filter(e => e.allowed).map(e => e.recipient));
    if (!e || (e in tn && (e = tn[e]), n.has(e))) return 0;
    let r = n.has(I.Private) || n.has(I.Workspace),
        i = n.has(I.Link) || n.has(I.Marketplace);
    return e === I.Marketplace && i ? 2 : !i && r ? 3 : 4
}

function Ht(e) {
    switch (e) {
        case 0:
        case 1:
            return B({
                id: `gizmo.appeals.publishBlockedTitle`,
                defaultMessage: `Your changes couldn’t be published`
            });
        case 2:
            return B({
                id: `gizmo.appeals.removedFromMarketplaceTitle`,
                defaultMessage: `Your GPT has been removed from the marketplace`
            });
        case 3:
            return B({
                id: `gizmo.appeals.removedFromPublicTitle`,
                defaultMessage: `Your GPT has been removed from public view`
            });
        case 4:
            return B({
                id: `gizmo.appeals.removedFromPrivateTitle`,
                defaultMessage: `Your GPT has been removed from private view`
            });
        case 5:
            return B({
                id: `gizmo.appeals.recategorizedTitle`,
                defaultMessage: `Your GPT has been recategorized`
            })
    }
}

function Ut(e) {
    switch (e) {
        case `profile_picture`:
            return B({
                id: `gizmo.appeals.profilePictureFieldName`,
                defaultMessage: `Profile Picture`
            });
        case `gizmo_name`:
            return B({
                id: `gizmo.appeals.gizmoNameFieldName`,
                defaultMessage: `Name`
            });
        case `gizmo_description`:
            return B({
                id: `gizmo.appeals.gizmoDescriptionFieldName`,
                defaultMessage: `Description`
            });
        case `gizmo_instructions`:
            return B({
                id: `gizmo.appeals.gizmoInstructionsFieldName`,
                defaultMessage: `Instructions`
            });
        case `gizmo_welcome_message`:
            return B({
                id: `gizmo.appeals.gizmoWelcomeMessageFieldName`,
                defaultMessage: `Welcome Message`
            });
        case `custom_actions`:
            return B({
                id: `gizmo.appeals.customActionsFieldName`,
                defaultMessage: `Custom Actions`
            });
        case `conversation_starter`:
            return B({
                id: `gizmo.appeals.conversationStarterFieldName`,
                defaultMessage: `Conversation Starter`
            });
        case `file`:
            return B({
                id: `gizmo.appeals.fileFieldName`,
                defaultMessage: `File`
            });
        case `gizmo_combined_content`:
            return B({
                id: `gizmo.appeals.gizmoCombinedContentFieldName`,
                defaultMessage: `GPT Content`
            });
        default:
            throw Error(`Unhandled moderation field: ${e}`)
    }
}

function Wt(e) {
    switch (e) {
        case I.Email:
        case I.Private:
        case I.Workspace:
            return B({
                id: `gizmo.appeals.privateRecipientModerationText`,
                defaultMessage: `Your GPT can’t be updated because it violates our {usagePolicyLink}Usage Policies{usagePolicyLink}.`
            });
        case I.Link:
            return B({
                id: `gizmo.appeals.linkRecipientModerationText`,
                defaultMessage: `Your GPT can’t be shared publicly because it violates our {usagePolicyLink}Usage Policies{usagePolicyLink}.`
            });
        case I.Marketplace:
            return B({
                id: `gizmo.appeals.marketplaceRecipientModerationText`,
                defaultMessage: `Your GPT can’t appear in the Explore GPTs page because it violates our {usagePolicyLink}Usage Policies{usagePolicyLink}.`
            });
        default:
            (0, Xt.default)(e)
    }
}

function Gt({
    sharingRecipient: e,
    moderatedFields: t,
    appealAvailable: n
}) {
    let r = t.length;
    return (0, J.jsxs)(J.Fragment, {
        children: [(0, J.jsxs)(`p`, {
            children: [(0, J.jsx)(V, {
                ...Wt(e),
                values: {
                    usagePolicyLink: e => (0, J.jsx)(Zt, {
                        target: `_blank`,
                        href: `https://openai.com/policies/usage-policies`,
                        rel: `noreferrer`,
                        children: e
                    })
                }
            }), ` `, r > 0 && (0, J.jsx)(V, {
                id: `gizmo.appeals.seeBelowForSpecificIssues`,
                defaultMessage: `{numModeratedFields, plural,
              one {See below for the specific issue:}
              other {See below for the specific issues:}
            }`,
                values: {
                    numModeratedFields: r
                }
            })]
        }), r > 0 && t?.map(e => (0, J.jsxs)(J.Fragment, {
            children: [(0, J.jsx)(`p`, {
                className: `font-bold`,
                children: (0, J.jsx)(V, {
                    ...Ut(e.name)
                })
            }), (0, J.jsx)(`ul`, {
                className: `list-disc ps-5`,
                children: e.reasons.map(e => (0, J.jsxs)(`li`, {
                    children: [e.description, ` `, e.link ? (0, J.jsx)(Zt, {
                        href: e.link,
                        target: `_blank`,
                        rel: `noreferrer`,
                        children: (0, J.jsx)(V, {
                            id: `gizmo.appeals.learnMore`,
                            defaultMessage: `Learn more`
                        })
                    }) : ``]
                }, e.description))
            })]
        })), n && (0, J.jsx)(`p`, {
            children: (0, J.jsx)(V, {
                id: `gizmo.appeals.appealAvailableText`,
                defaultMessage: `If you think this was a mistake, use the appeal link in the email we sent you. Or you can publish to “Only me” and use this GPT privately.`
            })
        })]
    })
}

function Kt({
    gizmoId: e,
    sharingRecipient: t,
    categories: n,
    moderationType: r,
    sharingTargets: i,
    appealAvailable: a,
    onClose: o,
    onAppealSubmitted: s
}) {
    let c = U(),
        [l, u] = (0, q.useState)(``),
        [d, f] = (0, q.useState)(0),
        [p, m] = (0, q.useState)(!1),
        h = We(),
        g = async () => {
            m(!0);
            try {
                await ye.postGizmoAppeal(h, e, l, t, n), f(2), s?.()
            } finally {
                m(!1)
            }
        }, _ = Lt(t, i), v = _?.length ?? 0, ee = M();
    if (v === 0 && ee?.isEnterprisey()) return (0, J.jsx)(C, {
        testId: `modal-gizmo-appeal-available`,
        title: c.formatMessage(Ht(r)),
        isOpen: !0,
        onClose: o,
        showCloseButton: !0,
        type: `warning`,
        primaryButton: (0, J.jsx)(S.Button, {
            color: `primary`,
            onClick: o,
            children: (0, J.jsx)(V, {
                id: `wEsAOU`,
                defaultMessage: `OK`
            })
        }),
        children: (0, J.jsx)(`p`, {
            className: `text-sm`,
            children: (0, J.jsx)(V, {
                id: `gizmo.appeals.workspaceSettingsMessage`,
                defaultMessage: `Access to your GPT has been reduced by your workspace's GPT sharing settings. An owner of the workspace can change these settings in the workspace settings page.`
            })
        })
    });
    switch (d) {
        case 0:
            return (0, J.jsx)(C, {
                testId: `modal-gizmo-appeal-available`,
                title: c.formatMessage(Ht(r)),
                isOpen: !0,
                onClose: o,
                showCloseButton: !0,
                primaryButton: (0, J.jsx)(S.Button, {
                    color: `primary`,
                    onClick: o,
                    children: (0, J.jsx)(V, {
                        id: `gizmo.appeals.contunueButton`,
                        defaultMessage: `Continue`
                    })
                }),
                type: `warning`,
                children: (0, J.jsx)(`div`, {
                    className: `flex flex-col gap-2 text-sm`,
                    children: (0, J.jsx)(Gt, {
                        sharingRecipient: t,
                        moderatedFields: _ ?? [],
                        appealAvailable: a
                    })
                })
            });
        case 1:
            return (0, J.jsx)(C, {
                testId: `modal-gizmo-appeal-form`,
                title: c.formatMessage({
                    id: `gizmo.appeals.appealModalTitle`,
                    defaultMessage: `Appeal`
                }),
                isOpen: !0,
                onClose: o,
                showCloseButton: !0,
                shouldIgnoreClickOutside: !0,
                primaryButton: (0, J.jsx)(S.Button, {
                    color: `primary`,
                    onClick: g,
                    disabled: p || l.trim().length === 0,
                    children: (0, J.jsx)(V, {
                        id: `gizmo.appeals.submitAppealButton`,
                        defaultMessage: `Submit`
                    })
                }),
                secondaryButton: (0, J.jsx)(S.Button, {
                    onClick: () => f(0),
                    children: (0, J.jsx)(V, {
                        id: `gizmo.appeals.backButton`,
                        defaultMessage: `Back`
                    })
                }),
                type: `warning`,
                children: (0, J.jsxs)(`div`, {
                    className: `flex flex-col gap-2 text-sm`,
                    children: [(0, J.jsx)(`p`, {
                        children: (0, J.jsx)(V, {
                            id: `gizmo.appeals.appealReasonText`,
                            defaultMessage: `Please provide a reason for why you believe this GPT doesn’t violate our policies and should be published`
                        })
                    }), (0, J.jsx)(Qt, {
                        value: l,
                        onChange: e => u(e.target.value)
                    })]
                })
            });
        case 2:
            return (0, J.jsx)(J.Fragment, {})
    }
}

function qt({
    onClose: e
}) {
    return (0, J.jsx)(C, {
        testId: `modal-gizmo-appeal-submitted`,
        title: U().formatMessage({
            id: `gizmo.appeals.appealSubmittedModalTitle`,
            defaultMessage: `Appeal submitted`
        }),
        isOpen: !0,
        onClose: e,
        showCloseButton: !0,
        primaryButton: (0, J.jsx)(S.Button, {
            color: `primary`,
            onClick: e,
            children: (0, J.jsx)(V, {
                id: `gizmo.appeals.closeButton`,
                defaultMessage: `Close`
            })
        }),
        type: `success`,
        children: (0, J.jsx)(`div`, {
            className: `flex flex-col gap-2 text-sm`,
            children: (0, J.jsx)(`div`, {
                children: (0, J.jsx)(V, {
                    id: `gizmo.appeals.appealSubmittedText`,
                    defaultMessage: `Your appeal has been submitted. We will get back to you as soon as possible.`
                })
            })
        })
    })
}

function Jt({
    gizmoId: e,
    onClose: t
}) {
    let n = xe(() => m(e).data),
        r = We(),
        i = async () => {
            await ye.postGizmoCancelAppeal(r, e)
        };
    return (0, J.jsx)(C, {
        testId: `modal-gizmo-appeal-sent`,
        isOpen: !0,
        onClose: y,
        primaryButton: (0, J.jsx)(S.Button, {
            color: `primary`,
            onClick: () => {
                i(), t?.()
            },
            children: (0, J.jsx)(V, {
                id: `gizmo.appeals.cancelAppealButton`,
                defaultMessage: `Cancel appeal`
            })
        }),
        type: `warning`,
        children: (0, J.jsxs)(`div`, {
            className: `flex flex-col gap-2 text-sm`,
            children: [(0, J.jsx)(`h2`, {
                className: `text-lg font-semibold`,
                children: (0, J.jsx)(V, {
                    id: `gizmo.appeals.appealReviewingHeader`,
                    defaultMessage: `Reviewing your appeal`
                })
            }), (0, J.jsx)(`p`, {
                children: (0, J.jsx)(V, {
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

function Yt({
    appealState: e,
    onAppealClose: t,
    onAppealSubmitted: n
}) {
    let r = ke(`4226692983`),
        [i, a] = (0, q.useState)(!1);
    return i ? (0, J.jsx)(qt, {
        onClose: () => {
            a(!1), n?.()
        }
    }) : (0, J.jsxs)(J.Fragment, {
        children: [e?.showModal === 2 && (0, J.jsx)(Jt, {
            gizmoId: e.gizmoId,
            onClose: t
        }), e?.showModal === 1 && (0, J.jsx)(Kt, {
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
var Xt, q, J, Zt, Qt, $t, en, tn, nn = e((() => {
    fe(), P(), Ne(), ue(), R(), c(), L(), He(), Ye(), Xt = n(Pe()), le(), q = n(Ke()), H(), N(), zt(), J = z(), Zt = me.a`bold underline`, Qt = me.textarea`w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32`, $t = function(e) {
        return e[e.None = 0] = `None`, e[e.AppealAvailable = 1] = `AppealAvailable`, e[e.AppealSent = 2] = `AppealSent`, e
    }({}), en = function(e) {
        return e[e.None = 0] = `None`, e[e.PublishBlocked = 1] = `PublishBlocked`, e[e.RemovedFromMarketplace = 2] = `RemovedFromMarketplace`, e[e.RemovedFromPublic = 3] = `RemovedFromPublic`, e[e.RemovedFromPrivate = 4] = `RemovedFromPrivate`, e[e.Recategorized = 5] = `Recategorized`, e
    }({}), tn = {
        [I.User]: I.Private,
        [I.Group]: I.Private,
        [I.Email]: I.Private,
        [I.WorkspaceLink]: I.Workspace
    }
}));

function rn(e, t) {
    if (t == null) return e;

    function n(e) {
        return typeof e == `object` && e ? Array.isArray(e) ? e.map(n) : Object.fromEntries(Object.entries(e).map(([e, t]) => [e, n(t)])) : e === null ? void 0 : e
    }
    return t = n(t), {
        ...e,
        ...t
    }
}

function an(e) {
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

function on(e) {
    return e === `link` || e === `marketplace`
}

function sn(e) {
    try {
        return new URL(e), !0
    } catch {
        return !1
    }
}

function cn(e, t, n) {
    let r = e.name.length > 50,
        i = (e.description?.length ?? 0) > 300,
        a = (e.instructions?.length ?? 0) > Ze,
        o = [];
    if (e?.name === `` && o.push(6), r && o.push(3), i && o.push(4), a && o.push(5), t != null && on(t)) {
        let t = e.tools?.filter(e => e.type === Ae.JIT_PLUGIN);
        for (let e of t) {
            let t = e.metadata?.privacy_policy_url;
            if (t == null || !sn(t)) {
                o.push(7);
                break
            }
        }
    }
    return t === I.Marketplace && n == null && o.push(8), o
}
var ln, un, dn, fn = e((() => {
    Be(), R(), lt(), H(), ln = function(e) {
        return e[e.Loading = 0] = `Loading`, e[e.UploadingProfilePic = 1] = `UploadingProfilePic`, e[e.GeneratingProfilePic = 2] = `GeneratingProfilePic`, e[e.GizmoNameTooLong = 3] = `GizmoNameTooLong`, e[e.GizmoDescriptionTooLong = 4] = `GizmoDescriptionTooLong`, e[e.GizmoInstructionsTooLong = 5] = `GizmoInstructionsTooLong`, e[e.NameEmpty = 6] = `NameEmpty`, e[e.MissingPublicActionPrivacyPolicyURL = 7] = `MissingPublicActionPrivacyPolicyURL`, e[e.MissingCategory = 8] = `MissingCategory`, e
    }({}), un = {
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
            recipient: I.Private,
            subjects: []
        },
        tools: [{
            type: Ae.IMAGE_GEN
        }],
        files: [],
        defaultModel: null,
        trainingDisabled: !1,
        liveVersion: 0,
        contextStuffingBudget: null,
        firstPartyProjectType: null
    }, dn = Ue({
        instructionsWarning: {
            id: `gizmo.instructionsWarning`,
            defaultMessage: `Conversations with your GPT can potentially include part or all of the instructions provided.`
        }
    })
}));

function pn(e) {
    return !on(e.sharingRecipient ?? I.Private) && ke(`1056818577`)
}

function mn(e, t) {
    return t && on(e) ? I.Private : e
}
var hn = e((() => {
    He(), fn(), R()
}));

function gn() {
    "use forget";
    let e = (0, vn.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, yn.jsx)(`div`, {
        role: `status`,
        className: `border-token-border-status-warning bg-token-bg-status-warning text-token-text-status-warning rounded-md border px-2.5 py-1.5 text-xs leading-4`,
        children: (0, yn.jsx)(V, {
            id: `gizmo.publish.new_gpt.public_sharing_disabled.notice`,
            defaultMessage: `Sharing GPTs with the public is no longer available. <link>Learn more</link>`,
            values: {
                link: _n
            }
        })
    }), e[0] = t) : t = e[0], t
}

function _n(e) {
    return (0, yn.jsx)(`a`, {
        href: `https://help.openai.com/en/articles/8554397-creating-a-gpt`,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `underline`,
        children: e
    })
}
var vn, yn, bn = e((() => {
        vn = Xe(), H(), yn = z()
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
        children: [(0, Q.jsx)(ee, {
            className: `icon-sm interactive-label-warning-secondary mt-0.5 shrink-0`
        }), (0, Q.jsx)(V, {
            id: `gizmo.share.hipaaCompliance.warning`,
            defaultMessage: `OpenAI supports HIPAA compliance for your use of custom GPTs in this workspace. If you share or publish this GPT with others, your BAA does not apply to their use. Do not represent this GPT to third parties as HIPAA compliant.`
        })]
    })
}

function Cn(e, t) {
    return w(e) ? w(t) && e.user_id === t.user_id : D(e) ? D(t) && e.group_id === t.group_id : ce(e) ? ce(t) && e.user_email.toLowerCase() === t.user_email.toLowerCase() : e.type === t.type
}

function wn(e) {
    return D(e) ? e.group_name : w(e) ? e.user_name : e.user_email
}

function Tn(e) {
    return w(e) ? e.user_email : null
}

function En(e) {
    return D(e) ? e.group_name : w(e) ? `${e.user_name} ${e.user_email}` : e.user_email
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
    appealGizmo: o,
    setAppealState: c,
    showActionsModal: l,
    shareOnly: f,
    onClose: m,
    workspaceOwner: g = !1
}) {
    let v = U(),
        ee = xe(re),
        {
            data: te
        } = Ee(g ? void 0 : e.id),
        ie = te?.gizmo.migrated_plugin_id ?? e.migratedPluginId ?? t?.gizmo.migrated_plugin_id,
        ae = i(ie),
        y = u(),
        se = pn(e),
        ce = y?.isHipaaCompliantWorkspace ?? !1,
        le = p().trim(),
        ue = y?.id,
        {
            data: fe,
            isLoading: me
        } = a(ue),
        he = Ft(fe),
        be = y?.isEnterprisey() ?? !1,
        S = y?.data?.role,
        Ce = S != null && ot(S),
        we;
    we = ue == null ? void 0 : g || Ce || !be ? !0 : me ? void 0 : fe?.permissions?.includes(h.MemberRoleView) ?? !1;
    let T = le || `your workspace`,
        O = ge(),
        A = Se(),
        [j, M] = (0, Z.useState)(void 0);
    (0, Z.useEffect)(() => {
        if (j === void 0)
            if (t?.gizmo.display.categories && t?.gizmo.display.categories.length > 0) {
                let e = A.data?.categories.find(e => e.id === t?.gizmo.display.categories[0]);
                e && M(e)
            } else A.data !== void 0 && M(A.data.categories[A.data.categories.length - 1])
    }, [A.data, j, t]);
    let [N, Oe] = (0, Z.useState)(() => mn(e.sharingRecipient ?? I.Private, se)), [P, F] = (0, Z.useState)(e.sharing?.subjects ?? []), [ke, je] = (0, Z.useState)(null), [Me, Ne] = (0, Z.useState)(!1), Pe = (0, Z.useRef)(null), Fe = (0, Z.useRef)(P.length);
    (0, Z.useEffect)(() => {
        P.length > Fe.current && requestAnimationFrame(() => {
            Pe.current?.scrollTo({
                top: Pe.current.scrollHeight,
                behavior: `smooth`
            })
        }), Fe.current = P.length
    }, [P]);
    let Ie = (0, Z.useCallback)(() => !_(e.sharing?.subjects, P) || e.sharingRecipient !== N, [e.sharing, e.sharingRecipient, N, P]),
        L = We(),
        ze = cn(e, N, j?.id ?? void 0),
        Be = ze.includes(ln.MissingPublicActionPrivacyPolicyURL),
        R = e.tools.find(e => e.type === Ae.JIT_PLUGIN && !e.metadata.privacy_policy_url);
    if (ee || ae) return (0, Q.jsx)(C, {
        isOpen: !0,
        onClose: m,
        title: (0, Q.jsx)(V, {
            ...ae ? ne.title : d.readOnlyTitle
        }),
        showCloseButton: !0,
        children: (0, Q.jsx)(V, {
            ...ae ? ne.notice : d.sharingNotice
        })
    });
    if (ke) return (0, Q.jsx)(An, {
        publishedGizmo: ke,
        sharing: {
            recipient: N,
            subjects: P
        },
        workspaceName: T,
        onClose: m
    });

    function He(e) {
        P.find(t => Cn(t, e)) || F([...P, e])
    }
    let z = Re(P);

    function B(e) {
        let t = P.filter(e => [x.WORKSPACE, x.ALL].indexOf(e.type) === -1);
        e != null && t.push(e), F(t)
    }

    function Ue(e) {
        switch (Oe(e), e) {
            case I.Marketplace:
            case I.Link:
                B({
                    type: x.ALL,
                    capabilities: b
                });
                break;
            case I.Workspace:
            case I.WorkspaceLink:
                B({
                    type: x.WORKSPACE,
                    capabilities: b
                });
                break;
            default:
                B(null)
        }
    }

    function Ge(e) {
        z != null && F(P.map(t => t === z ? {
            ...t,
            capabilities: e
        } : t))
    }

    function H(e, t, n) {
        return e.type === x.USER && e.user_id.indexOf(`__`) === -1 ? {
            ...e,
            user_id: e.user_id + `__` + y?.getWorkspaceId()
        } : e
    }
    async function Ke(e, a) {
        if (Me || re() || i(ie)) return;
        if (e && !a) throw Error(`Cannot share a gizmo that hasn't been promoted before`);
        if (!j) return;
        Ne(!0);
        let o = P.map(H).map(Dn);
        if (o = de(N, o, z?.capabilities ?? b), g) return !y || !a ? (k.warning(`Unable to change sharing settings`), m()) : (await pe.safePost(`/accounts/{account_id}/gpts/{gizmo_id}/share`, {
            parameters: {
                path: {
                    account_id: y.id,
                    gizmo_id: a
                }
            },
            requestBody: {
                sharing: o
            }
        }), k.success(v.formatMessage({
            id: `SWSzcY`,
            defaultMessage: `Sharing settings updated`
        })), L.invalidateQueries({
            queryKey: [`workspace`]
        }), m());
        if (e) {
            if (!a || !t) throw Error(`No gizmo ID to share`);
            try {
                let e = {
                    sharing: o
                };
                j && (e.categories = [j.id]);
                let r = await ye.shareGizmo(a, e);
                if (r.error) Rt(N, r.sharing_targets ?? void 0) ? (c?.({
                    gizmoId: t.gizmo.id,
                    sharingRecipient: N,
                    categories: t.gizmo.display.categories,
                    moderationType: en.PublishBlocked,
                    sharingTargets: r.sharing_targets ?? void 0,
                    showModal: $t.AppealAvailable
                }), m()) : k.warning(v.formatMessage({
                    id: `tmIKmp`,
                    defaultMessage: `Unable to share GPT`
                }));
                else {
                    if (r.resource == null) throw Error(`Missing shared gizmo resource`);
                    L.setQueryData([`gizmo`, {
                        gizmoId: t.gizmo.id
                    }, {
                        draft: !1
                    }], e => r.resource), n?.(e => ({
                        ...e,
                        sharing: {
                            recipient: N,
                            subjects: P
                        },
                        sharingRecipient: N
                    })), k.success(v.formatMessage({
                        id: `SWSzcY`,
                        defaultMessage: `Sharing settings updated`
                    })), m()
                }
            } catch {
                return k.warning(v.formatMessage({
                    id: `dKC65l`,
                    defaultMessage: `Failed to update sharing settings`
                })), m()
            }
        } else {
            if (r) {
                let e = await r({
                    subjects: o,
                    recipient: N
                }, j.id);
                a ||= e?.gizmo.id, je(e ?? null), n?.({
                    liveVersion: e?.gizmo.live_version ?? void 0
                })
            }
            L.invalidateQueries({
                queryKey: [`gizmo`, {
                    gizmoId: a
                }]
            })
        }
        Ne(!1), L.invalidateQueries({
            queryKey: [`gizmos`]
        }), L.refetchQueries({
            queryKey: [`gizmos`, `discovery`]
        }), L.refetchQueries({
            queryKey: [`gizmo`, {
                gizmoId: a
            }]
        }), L.invalidateQueries({
            queryKey: [`gizmo`, `userActionSettings`, {
                gizmoId: a
            }]
        }), L.invalidateQueries({
            queryKey: [`workspace`]
        }), n?.({
            sharing: {
                recipient: N,
                subjects: P
            },
            sharingRecipient: N
        }, !1)
    }
    let qe = !t || Nn(t.gizmo.author.user_id.split(`__`)[0], O?.id),
        Je = t?.gizmo.author.display_name || null;
    return (0, Q.jsx)(C, {
        testId: `modal-share-gizmo`,
        type: `success`,
        className: `max-w-[555px]`,
        size: `custom`,
        isOpen: !0,
        onClose: m,
        primaryButton: Rt(N, e.sharingTargets) ? (0, Q.jsx)(E, {
            onClick: () => o(N, j?.id),
            children: (0, Q.jsx)(V, {
                id: `yS4os0`,
                defaultMessage: `Learn more`
            })
        }) : (0, Q.jsx)(E, {
            onClick: () => Ke(f, t?.gizmo.id),
            loading: Me,
            disabled: ze.length > 0 || !K(N, e.sharingTargets),
            children: f ? (0, Q.jsx)(V, {
                id: `BEKjVh`,
                defaultMessage: `Save`
            }) : (0, Q.jsx)(V, {
                id: `24j5ts`,
                defaultMessage: `Update`
            })
        }),
        secondaryButton: (0, Q.jsxs)(Q.Fragment, {
            children: [Ie() && (0, Q.jsx)(`div`, {
                className: `text-token-text-secondary absolute start-6 bottom-8 text-sm`,
                children: (0, Q.jsx)(V, {
                    id: `9CkgC4`,
                    defaultMessage: `Unsaved changes`
                })
            }), t && (0, Q.jsx)(E, {
                color: `secondary`,
                onClick: e => Le(t, ve(), e, v.formatMessage({
                    id: `KdDqMm`,
                    defaultMessage: `Copied link to clipboard`
                })),
                children: (0, Q.jsx)(V, {
                    id: `wvL15a`,
                    defaultMessage: `Copy link`
                })
            })]
        }),
        title: v.formatMessage({
            id: `7JggXH`,
            defaultMessage: `Share GPT`
        }),
        showCloseButton: !0,
        children: (0, Q.jsxs)(`div`, {
            className: `flex flex-col space-y-4`,
            children: [(0, Q.jsx)(Mn, {
                onAdd: e => He(e),
                publishedGizmo: t,
                canListMembers: we,
                allowScimGroupSharing: he
            }), ce && (0, Q.jsx)(Sn, {}), (0, Q.jsx)(`h3`, {
                className: `text-base font-semibold`,
                children: (0, Q.jsx)(V, {
                    id: `bNQXcV`,
                    defaultMessage: `Share with...`
                })
            }), (0, Q.jsxs)(`div`, {
                ref: Pe,
                className: `max-h-[200px] space-y-2 overflow-y-auto`,
                children: [(0, Q.jsxs)(`div`, {
                    className: `mb-4 flex flex-row items-center justify-between space-x-3`,
                    children: [(0, Q.jsx)(`div`, {
                        className: `shrink-0 grow-0 self-start`,
                        children: qe ? (0, Q.jsx)(_e, {
                            user: O
                        }) : (0, Q.jsx)(oe, {
                            name: Je ?? `User`,
                            initialsCount: 2
                        })
                    }), (0, Q.jsx)(`div`, {
                        className: `grow text-base font-semibold`,
                        children: qe ? (0, Q.jsxs)(`div`, {
                            className: `flex flex-col`,
                            children: [(0, Q.jsx)(V, {
                                id: `U7tzof`,
                                defaultMessage: `{userName} (you)`,
                                values: {
                                    userName: O?.name
                                }
                            }), (0, Q.jsx)(`span`, {
                                className: `text-token-text-secondary -mt-1 text-sm`,
                                children: O?.email
                            })]
                        }) : Je ? (0, Q.jsx)(V, {
                            id: `scRZqV`,
                            defaultMessage: `{userName} (builder)`,
                            values: {
                                userName: Je
                            }
                        }) : (0, Q.jsx)(V, {
                            id: `gizmo.share.builder.fallbackLabel`,
                            defaultMessage: `Builder`
                        })
                    })]
                }), P.map((e, t) => s(e) && (0, Q.jsxs)(`div`, {
                    className: `mb-4 flex flex-row items-center justify-between space-x-3`,
                    children: [(0, Q.jsx)(oe, {
                        name: En(e),
                        initialsCount: w(e) ? 2 : 1,
                        className: Ve(`shrink-0 grow-0`, w(e) && `self-start`)
                    }), (0, Q.jsxs)(`div`, {
                        className: `flex grow flex-col`,
                        children: [(0, Q.jsxs)(`span`, {
                            className: `flex flex-row`,
                            children: [(0, Q.jsx)(`span`, {
                                className: `me-2 text-base font-semibold`,
                                children: wn(e)
                            }), D(e) && e.is_scim_managed && (0, Q.jsx)(In, {})]
                        }), w(e) && (0, Q.jsx)(`span`, {
                            className: `text-token-text-secondary -mt-1 text-sm`,
                            children: Tn(e)
                        })]
                    }), (0, Q.jsxs)(W.Root, {
                        children: [(0, Q.jsxs)(W.Trigger, {
                            className: `text-token-text-secondary text-base whitespace-nowrap`,
                            children: [(0, Q.jsx)(V, {
                                ...Y(e.capabilities)
                            }), (0, Q.jsx)(St, {
                                className: `icon`
                            })]
                        }), (0, Q.jsx)(W.Portal, {
                            children: (0, Q.jsxs)(W.Content, {
                                className: `max-w-[320px]`,
                                children: [Ln().map((t, n) => (0, Q.jsx)(kn, {
                                    capabilities: t,
                                    selected: _(t, e.capabilities),
                                    onClick: () => {
                                        F(P.map(n => n === e ? {
                                            ...n,
                                            capabilities: t
                                        } : n))
                                    }
                                }, n)), (0, Q.jsx)(W.Separator, {
                                    className: `my-2`
                                }), (0, Q.jsx)(W.Item, {
                                    onClick: () => F(P.filter(t => t !== e)),
                                    color: `danger`,
                                    icon: bt,
                                    children: (0, Q.jsx)(V, {
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
                children: (0, Q.jsx)(V, {
                    id: `uqD7Y8`,
                    defaultMessage: `Access`
                })
            }), se && (0, Q.jsx)(gn, {}), (0, Q.jsxs)(`div`, {
                className: `-ms-3.5 flex flex-row items-center justify-between space-x-3`,
                children: [(0, Q.jsxs)(G.Root, {
                    value: N,
                    onValueChange: e => Ue(e),
                    children: [(0, Q.jsxs)(G.Trigger, {
                        children: [(0, Q.jsx)(G.Value, {}), (0, Q.jsx)(G.Icon, {})]
                    }), (0, Q.jsx)(G.Portal, {
                        children: (0, Q.jsxs)(G.Content, {
                            children: [(0, Q.jsxs)(G.Group, {
                                children: [(0, Q.jsx)(G.Label, {
                                    children: (0, Q.jsx)(V, {
                                        id: `YIQwaP`,
                                        defaultMessage: `Private`
                                    })
                                }), N === I.User ? (0, Q.jsx)(G.Item, {
                                    value: I.User,
                                    children: (0, Q.jsx)(X, {
                                        shareLevel: I.User,
                                        workspaceName: T
                                    })
                                }) : (0, Q.jsx)(G.Item, {
                                    value: I.Private,
                                    children: (0, Q.jsx)(X, {
                                        shareLevel: I.Private,
                                        workspaceName: T
                                    })
                                })]
                            }), (0, Q.jsx)(G.Separator, {}), (0, Q.jsx)(Te, {
                                triggerAs: null,
                                label: v.formatMessage({
                                    id: `n0m61x`,
                                    defaultMessage: `Your workspace has disabled sharing with the workspace.`
                                }),
                                side: `bottom`,
                                disabled: K(`workspace`, e.sharingTargets),
                                children: (0, Q.jsxs)(G.Group, {
                                    children: [(0, Q.jsx)(G.Label, {
                                        children: T
                                    }), (0, Q.jsx)(G.Item, {
                                        value: I.WorkspaceLink,
                                        disabled: !K(I.WorkspaceLink, e.sharingTargets) && !K(I.Workspace, e.sharingTargets),
                                        children: (0, Q.jsx)(X, {
                                            shareLevel: I.WorkspaceLink,
                                            workspaceName: T
                                        })
                                    }), (0, Q.jsx)(G.Item, {
                                        value: I.Workspace,
                                        disabled: !K(`workspace`, e.sharingTargets),
                                        children: (0, Q.jsx)(X, {
                                            shareLevel: I.Workspace,
                                            workspaceName: T
                                        })
                                    })]
                                })
                            }), !se && (0, Q.jsxs)(Q.Fragment, {
                                children: [(0, Q.jsx)(G.Separator, {}), (0, Q.jsx)(Te, {
                                    triggerAs: null,
                                    label: v.formatMessage({
                                        id: `IHnort`,
                                        defaultMessage: `Your workspace has disabled public sharing.`
                                    }),
                                    side: `bottom`,
                                    disabled: K(`marketplace`, e.sharingTargets),
                                    children: (0, Q.jsxs)(G.Group, {
                                        children: [(0, Q.jsx)(G.Label, {
                                            children: (0, Q.jsx)(V, {
                                                id: `PjY9bi`,
                                                defaultMessage: `Public`
                                            })
                                        }), (0, Q.jsx)(G.Item, {
                                            value: I.Link,
                                            disabled: !K(`link`, e.sharingTargets),
                                            children: (0, Q.jsx)(X, {
                                                shareLevel: I.Link,
                                                workspaceName: T
                                            })
                                        }), (0, Q.jsx)(G.Item, {
                                            disabled: !K(`marketplace`, e.sharingTargets),
                                            value: I.Marketplace,
                                            children: (0, Q.jsx)(X, {
                                                shareLevel: I.Marketplace,
                                                workspaceName: T
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })]
                }), N !== I.Private && N !== I.User && (0, Q.jsxs)(W.Root, {
                    children: [(0, Q.jsxs)(W.Trigger, {
                        className: `text-token-text-secondary text-base whitespace-nowrap`,
                        children: [z == null ? (0, Q.jsx)(V, {
                            ...Y(b)
                        }) : (0, Q.jsx)(V, {
                            ...Y(z.capabilities)
                        }), (0, Q.jsx)(St, {
                            className: `icon`
                        })]
                    }), (0, Q.jsx)(W.Portal, {
                        children: (0, Q.jsxs)(W.Content, {
                            className: `max-w-[320px]`,
                            children: [(0, Q.jsx)(kn, {
                                onClick: () => Ge(b),
                                capabilities: b,
                                selected: _(z?.capabilities, b)
                            }), N !== I.Marketplace && N !== I.Link && (0, Q.jsx)(kn, {
                                onClick: () => Ge(De),
                                capabilities: De,
                                selected: _(z?.capabilities, De)
                            })]
                        })
                    })]
                })]
            }), Be && (0, Q.jsx)(`div`, {
                className: `text-xs text-red-500`,
                children: (0, Q.jsx)(V, {
                    id: `/iw1Iv`,
                    defaultMessage: `Public actions require valid privacy policy URLs. Click <fixlink>here</fixlink> to update.`,
                    values: {
                        fixlink: e => (0, Q.jsx)(`button`, {
                            onClick: () => {
                                l?.(R?.metadata.action_id), m()
                            },
                            className: `underline`,
                            children: e
                        })
                    }
                })
            }), (N === I.Marketplace || N === I.Workspace) && (K(N, e.sharingTargets) ? (0, Q.jsx)(jn, {
                gizmo: e,
                category: j?.id,
                categories: A.data?.categories,
                onCategoryChange: e => M(e)
            }) : Rt(N, e.sharingTargets) ? (0, Q.jsx)(`div`, {
                className: `pb-2 text-xs text-red-500`,
                children: (0, Q.jsx)(Gt, {
                    sharingRecipient: N,
                    moderatedFields: Lt(N, e.sharingTargets) ?? [],
                    appealAvailable: !0
                })
            }) : (0, Q.jsx)(`div`, {
                className: `pb-2 text-xs text-red-500`,
                children: (0, Q.jsx)(V, {
                    id: `BzqqKH`,
                    defaultMessage: `Your workspace's settings don't allow this level of access. An owner of the workspace can change this setting in the workspace's GPTs settings.`
                })
            }))]
        })
    })
}

function Y(e) {
    return e.can_write ? B({
        id: `SubCqD`,
        defaultMessage: `Can edit`
    }) : e.can_view_config ? B({
        id: `V6OjbX`,
        defaultMessage: `Can view settings`
    }) : e.can_read ? B({
        id: `/0j34W`,
        defaultMessage: `Can chat`
    }) : B({
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
    e.can_write ? r = yt : e.can_view_config ? r = Et : e.can_read && (r = Dt);
    let i = e.can_write ? (0, Q.jsx)(V, {
        id: `wKFMT1`,
        defaultMessage: `Edit settings, duplicate, and chat`
    }) : e.can_view_config ? (0, Q.jsx)(V, {
        id: `Y/J4TZ`,
        defaultMessage: `See settings, duplicate, and chat`
    }) : e.can_read ? (0, Q.jsx)(V, {
        id: `PvgEQP`,
        defaultMessage: `Chat with this GPT only`
    }) : null;
    return (0, Q.jsxs)(W.Item, {
        className: `flex h-auto flex-row items-center px-3 py-3`,
        onClick: n,
        icon: r,
        children: [(0, Q.jsxs)(`div`, {
            className: `me-1 flex grow flex-col`,
            children: [(0, Q.jsx)(`span`, {
                className: `mb-0.5 text-base leading-tight`,
                children: (0, Q.jsx)(V, {
                    ...Y(e)
                })
            }), (0, Q.jsx)(`span`, {
                className: `text-token-text-secondary text-xs`,
                children: i
            })]
        }), (0, Q.jsx)(mt, {
            className: Ve(`icon-lg shrink-0`, !t && `invisible`)
        })]
    })
}

function X({
    shareLevel: e,
    workspaceName: t,
    hasInviteSharing: n = !0
}) {
    (e === I.User || e === I.Group || e === I.Email) && (e = I.Private);
    let r = $[e];
    return (0, Q.jsxs)(`div`, {
        className: `flex flex-row items-center gap-3 text-sm`,
        children: [(0, Q.jsx)(r, {
            className: `icon text-token-text-secondary`
        }), (0, Q.jsx)(`div`, {
            className: `pt-px text-start`,
            children: !n && e === I.Private ? (0, Q.jsx)(V, {
                id: `vVJhYB`,
                defaultMessage: `Only me`
            }) : (0, Q.jsx)(V, {
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
    let i = U();
    return (0, Q.jsxs)(C, {
        testId: `modal-gizmo-updated`,
        isOpen: !0,
        onClose: r,
        showCloseButton: !0,
        className: `w-[304px]`,
        title: (0, Q.jsx)(V, {
            id: `5CEceY`,
            defaultMessage: `GPT Updated`
        }),
        primaryButton: (0, Q.jsx)(E, {
            onClick: () => {
                window.location.href = `/g/${e.gizmo.id}`
            },
            children: (0, Q.jsx)(V, {
                id: `RF75o5`,
                defaultMessage: `View GPT`
            })
        }),
        secondaryButton: (0, Q.jsx)(E, {
            color: `secondary`,
            onClick: t => Le(e, ve(), t, i.formatMessage({
                id: `KdDqMm`,
                defaultMessage: `Copied link to clipboard`
            })),
            children: (0, Q.jsx)(V, {
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
    onCategoryChange: i
}) {
    let {
        data: a,
        isLoading: o
    } = r(), s = n?.find(e => e.id === t);
    return (0, Q.jsxs)(`div`, {
        children: [(0, Q.jsxs)(`div`, {
            className: Ve(`bg-token-main-surface-secondary mb-[1px] flex flex-row items-center space-x-2 p-4`, o && `invisible`, n ? `rounded-t-lg` : `rounded-lg`),
            children: [(0, Q.jsx)(at, {
                isFirstParty: !1,
                className: `h-11 w-11`,
                src: e.profilePictureUrl
            }), (0, Q.jsxs)(`div`, {
                className: `flex grow flex-col space-y-0`,
                children: [(0, Q.jsx)(`span`, {
                    className: `text-base font-semibold`,
                    children: e.name
                }), (0, Q.jsx)(et, {
                    builderName: a?.display_name,
                    builderUrl: a?.website_url,
                    socials: [a?.socials.linkedin, a?.socials.github].filter(e => e != null),
                    className: `text-token-text-secondary text-xs`
                })]
            })]
        }), n && (0, Q.jsxs)(`div`, {
            className: `bg-token-main-surface-secondary flex min-h-[56px] flex-row items-center justify-between space-x-2 rounded-b-lg px-4 text-base`,
            children: [(0, Q.jsx)(`span`, {
                className: `font-semibold`,
                children: (0, Q.jsx)(V, {
                    id: `JcA4/t`,
                    defaultMessage: `Category`
                })
            }), (0, Q.jsx)(`div`, {
                className: `text-token-text-secondary`,
                children: i ? (0, Q.jsx)($e, {
                    size: `small`,
                    triggerButton: (0, Q.jsxs)(`button`, {
                        className: `flex items-center gap-1`,
                        children: [s?.title, (0, Q.jsx)(St, {
                            className: `icon`
                        })]
                    }),
                    children: n.map((e, t) => (0, Q.jsx)(W.Item, {
                        onClick: () => i(e),
                        children: e.title
                    }, t))
                }) : (0, Q.jsx)(`span`, {
                    className: `text-token-text-secondary`,
                    children: s?.title
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
    let i = U(),
        a = M(),
        [o, s] = (0, Z.useState)(``),
        c = n === !0,
        l = it(c ? a?.id : void 0, 0, o, 5).data?.items.filter(e => e.account_user_id !== t?.gizmo.author.user_id),
        u = r,
        {
            data: d
        } = Ge({
            queryKey: [a?.id, `groups`, `filtered`, o, u],
            queryFn: () => pe.safeGet(`/accounts/{account_id}/groups`, {
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
            type: x.GROUP,
            group_id: t,
            group_name: n,
            capabilities: {
                ...b
            },
            is_scim_managed: r
        }), s(``)
    }

    function p(t, n, r) {
        a && (e({
            type: x.USER,
            user_id: t,
            user_name: n,
            user_email: r,
            avatar_url: null,
            capabilities: {
                ...b
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
        } = Oe(Ie.hasSeenMultipleGPTEditorsTooltip),
        g = !c,
        _ = g ? (0, Q.jsx)(ut, {
            ariaLabel: m,
            disabled: !0,
            inputClassName: `bg-token-bg-primary!`,
            name: `share-with-input`,
            placeholder: m,
            value: o
        }) : (0, Q.jsx)(Nt, {
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
                        children: (0, Q.jsx)(V, {
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
            children: [(0, Q.jsx)(ee, {
                className: `icon-sm interactive-label-warning-secondary shrink-0`
            }), (0, Q.jsx)(V, {
                id: `6e1nG9`,
                defaultMessage: `You don't have permission to search your workspace members. Please contact your workspace admin for access or update the workspace settings.`
            })]
        }), n !== !1 && (0, Q.jsx)(`div`, {
            className: `flex w-full flex-row space-x-3`,
            children: h && !g ? (0, Q.jsx)(jt, {
                announcementKey: Ie.hasSeenMultipleGPTEditorsTooltip,
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
                onDismiss: () => we(Ie.hasSeenMultipleGPTEditorsTooltip),
                children: _
            }) : _
        })]
    })
}

function Nn(e, t) {
    return e === void 0 || t === void 0 ? !1 : e.split(`__`)[0] === t.split(`__`)[0]
}

function Pn(e) {
    return !s(e)
}
var Fn, Z, Q, In, Ln, Rn, zn, Bn, $, Vn, Hn = e((() => {
    Fn = Xe(), A(), Be(), Ce(), v(), ie(), nt(), ct(), o(), Mt(), rt(), gt(), Tt(), vt(), wt(), pt(), ht(), dt(), Ot(), xt(), g(), P(), kt(), te(), Qe(), At(), f(), L(), ae(), F(), j(), O(), c(), ze(), Pt(), l(), Ye(), he(), Me(), Z = n(Ke()), H(), zt(), nn(), tt(), st(), Ne(), fn(), hn(), bn(), T(), ue(), R(), be(), Q = z(), Je(), In = se(() => qe(() => import(`./fbf44c55-gmoc79u0p3c9uv7d.js`).then(e => e.DirectorySyncResourceManagedIndication), __vite__mapDeps([0, 1, 2]))), Ln = () => [b, De, Fe], Rn = {
        [x.USER]: I.User,
        [x.GROUP]: I.Group,
        [x.WORKSPACE]: I.Workspace,
        [x.ALL]: I.Marketplace
    }, zn = Ue({
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
    }), Bn = Ue({
        workspace: {
            id: `1kpopF`,
            defaultMessage: `Published to {workspaceName}`
        },
        marketplace: {
            id: `hdTRpJ`,
            defaultMessage: `Published to GPT Store`
        }
    }), $ = {
        private: ft,
        user: ft,
        group: ft,
        email: ft,
        workspace_link: _t,
        workspace: Ct,
        link: _t,
        marketplace: je.SidebarApps
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
            c = n.recipient,
            l, u, d, f;
        if (t[0] !== r || t[1] !== c || t[2] !== n.subjects || t[3] !== o || t[4] !== i) {
            let e = n.subjects.filter(Pn),
                a = o && e.length > 0 ? e.map(e => ({
                    level: e.type === x.WORKSPACE ? c === I.Workspace ? I.Workspace : I.WorkspaceLink : c === I.Marketplace ? I.Marketplace : I.Link,
                    subject: e
                })) : [{
                    level: c,
                    subject: void 0
                }];
            t[9] !== r || t[10] !== n.subjects || t[11] !== o ? (f = (r != null || n.subjects.some(s)) && (0, Q.jsxs)(`div`, {
                className: o ? `my-4 flex flex-col gap-4` : `my-4`,
                children: [(0, Q.jsx)(`h3`, {
                    className: o ? `text-base font-semibold` : `text-token-text-secondary text-xs font-semibold`,
                    children: (0, Q.jsx)(V, {
                        id: `/paYH9`,
                        defaultMessage: `Shared with`
                    })
                }), r != null && (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-3 text-sm`,
                    children: [(0, Q.jsx)(oe, {
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
                        children: (0, Q.jsx)(V, {
                            id: `gizmo.pluginMigration.sharing.role.owner`,
                            defaultMessage: `Owner`
                        })
                    })]
                }), n.subjects && n.subjects.map((e, t) => s(e) && !(r != null && w(e) && e.user_id === r.user_id) && (0, Q.jsxs)(`div`, {
                    className: o ? `flex items-center justify-between gap-3 text-sm` : `flex flex-row items-center justify-between space-x-3 py-2`,
                    children: [o && (0, Q.jsx)(oe, {
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
                        children: (0, Q.jsx)(V, {
                            ...Y(e.capabilities)
                        })
                    })]
                }, t))]
            }), t[9] = r, t[10] = n.subjects, t[11] = o, t[12] = f) : f = t[12], l = o ? `border-token-border-light mt-4 flex flex-col gap-4 border-t pt-4` : `my-4`;
            let p = o ? `text-base font-semibold` : `text-token-text-secondary text-xs font-semibold`,
                m;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, Q.jsx)(V, {
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
                            children: (0, Q.jsx)(V, {
                                ...o ? zn[t] : Bn[t] ?? zn[t],
                                values: {
                                    workspaceName: i
                                }
                            })
                        })
                    }), o && n != null && (0, Q.jsx)(`span`, {
                        className: `text-token-text-secondary ms-3 shrink-0 text-sm font-normal`,
                        children: (0, Q.jsx)(V, {
                            ...Y(n.capabilities)
                        })
                    })]
                }, t)
            }, t[16] = o, t[17] = i, t[18] = h) : h = t[18], d = a.map(h), t[0] = r, t[1] = c, t[2] = n.subjects, t[3] = o, t[4] = i, t[5] = l, t[6] = u, t[7] = d, t[8] = f
        } else l = t[5], u = t[6], d = t[7], f = t[8];
        let p;
        t[19] !== l || t[20] !== u || t[21] !== d ? (p = (0, Q.jsxs)(`div`, {
            className: l,
            children: [u, d]
        }), t[19] = l, t[20] = u, t[21] = d, t[22] = p) : p = t[22];
        let m;
        return t[23] !== f || t[24] !== p ? (m = (0, Q.jsxs)(Q.Fragment, {
            children: [f, p]
        }), t[23] = f, t[24] = p, t[25] = m) : m = t[25], m
    }
}));
export {
    K as A, an as C, Bt as D, en as E, nn as O, dn as S, Yt as T, un as _, $ as a, fn as b, X as c, gn as d, bn as f, ln as g, pn as h, Sn as i, zt as k, Hn as l, hn as m, jn as n, On as o, mn as p, An as r, xn as s, Vn as t, Dn as u, rn as v, $t as w, on as x, cn as y
};
//# sourceMappingURL=d84f4c09-i2p8165ro5mhtomc.js.map