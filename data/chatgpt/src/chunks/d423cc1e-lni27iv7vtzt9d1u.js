import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cw as n,
    F7 as r,
    JT as i,
    Kh as a,
    Oz as o,
    Tw as s,
    X5 as c,
    Xy as l,
    Y5 as u,
    YT as d,
    Yh as f,
    Zy as p,
    _4 as m,
    bnt as h,
    dit as g,
    drt as _,
    fit as v,
    frt as y,
    i0 as b,
    kz as x,
    r0 as S,
    urt as C,
    v4 as ee,
    vnt as w,
    z7 as T
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as E,
    Ln as D,
    Rn as O,
    Vn as k,
    p as te,
    s as ne,
    zn as A
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    isn as re,
    osn as ie,
    pmn as j,
    smn as ae,
    ssn as oe,
    umn as se
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    af as ce,
    if as le,
    of as ue,
    rf as de
} from "./30901919-e8h11sw136qen6v0.js";
import {
    n as fe,
    r as pe
} from "./a4ef304b-fpvtkn2zxu9nr0g8.js";
import {
    c as me,
    l as M,
    n as he,
    s as N,
    t as ge
} from "./cc445a0e-n3e7izqqfx6oobnc.js";
import {
    o as _e,
    r as P,
    s as F,
    t as I
} from "./d3304073-flah3nhmnsn2vfwo.js";
import {
    n as ve,
    t as ye
} from "./4d271a7b-c4kydxql9a3uefuu.js";
import {
    n as be,
    t as xe
} from "./073fd849-e0teg8dkja6m05d7.js";
import {
    a as Se,
    o as Ce
} from "./e74608d1-ek1oed2698v1vnmf.js";
import {
    n as we,
    t as L
} from "./5ba997e8-dpi3oy7dl1s4j50u.js";
import {
    n as Te,
    t as Ee
} from "./ed61b531-mzv3a5hl0dxe3dzt.js";
import {
    n as De,
    t as Oe
} from "./bcae0416-b4rgpppv8sqkmlgp.js";

function ke(e) {
    return `/?model=gpt-4o&sharedCanvas=${e.sharedTextdocId}`
}
var R, z, B, V, Ae = e((() => {
        d(), N(), he(), p(), f(), S(), g(), h(), C(), c(), k(), O(), R = E(), z = `https://openai.com/form/report-content/`, B = ({
            areButtonsFullWidth: e,
            sharedTextdoc: t,
            onClickCodePreview: n,
            isCodeRunning: r,
            showRunCodeButton: o,
            setIsReportModalOpen: s
        }) => {
            let c = !v(),
                d = M(t.type, t.content),
                f = o && (d || me(t.type)),
                p = A(),
                m = ke(t),
                h = () => {
                    _.count(y.CANVAS, `shared.click_edit_button`, [{
                        key: `type`,
                        value: t.type
                    }, {
                        key: `authed`,
                        value: c ? `false` : `true`
                    }]), w.logEvent(`Canvas Shared Edit Button Clicked`, {
                        textdocId: t.sharedTextdocId,
                        textdocType: t.type
                    })
                };
            return (0, R.jsx)(`div`, {
                className: `border-token-border-default flex w-full justify-center border-b-[0.5px] px-6`,
                children: (0, R.jsxs)(`div`, {
                    className: u(`flex w-full items-center justify-between gap-4 py-4`, !e && `max-w-[1200px]`),
                    children: [(0, R.jsxs)(`div`, {
                        children: [(0, R.jsx)(`h1`, {
                            className: `text-token-text-primary line-clamp-1 text-base font-semibold`,
                            children: t.title
                        }), (0, R.jsxs)(`div`, {
                            className: `text-token-text-secondary xs:flex-col flex flex-col gap-1.5 text-xs sm:flex-row`,
                            children: [(0, R.jsx)(`div`, {
                                className: `cursor-default`,
                                children: (0, R.jsx)(l, {
                                    align: `start`,
                                    theme: `primary`,
                                    labelTextAlign: `left`,
                                    wide: !0,
                                    contentClassName: `![&>*]:font-normal *:font-normal`,
                                    label: p.formatMessage({
                                        id: `RkWIbL`,
                                        defaultMessage: `The content you’re seeing was made by a ChatGPT user. It may be unverified or contain potentially unsafe content that doesn’t reflect the views of OpenAI.`
                                    }),
                                    children: p.formatMessage(V.madeWithCanvas)
                                })
                            }), (0, R.jsx)(`div`, {
                                children: c ? (0, R.jsx)(`a`, {
                                    className: `underline`,
                                    href: z,
                                    target: `_blank`,
                                    rel: `noreferrer`,
                                    onClick: () => {
                                        _.count(y.CANVAS, `shared.click_report_button`, [{
                                            key: `type`,
                                            value: t.type
                                        }, {
                                            key: `authed`,
                                            value: `false`
                                        }]), w.logEvent(`Canvas Shared Unauthed Report Button Clicked`, {
                                            textdocId: t.sharedTextdocId,
                                            textdocType: t.type
                                        })
                                    },
                                    children: p.formatMessage(V.report)
                                }) : (0, R.jsx)(`button`, {
                                    className: `underline`,
                                    onClick: () => {
                                        _.count(y.CANVAS, `shared.click_report_button`, [{
                                            key: `type`,
                                            value: t.type
                                        }, {
                                            key: `authed`,
                                            value: `true`
                                        }]), w.logEvent(`Canvas Shared Authed Report Button Clicked`, {
                                            textdocId: t.sharedTextdocId,
                                            textdocType: t.type
                                        }), s(!0)
                                    },
                                    children: p.formatMessage(V.report)
                                })
                            })]
                        })]
                    }), (0, R.jsxs)(`div`, {
                        className: `flex items-center gap-4`,
                        children: [f && (0, R.jsx)(ge, {
                            isCodePreviewable: d,
                            onClick: () => {
                                _.count(y.CANVAS, `shared.click_run_button`, [{
                                    key: `type`,
                                    value: t.type
                                }, {
                                    key: `authed`,
                                    value: c ? `false` : `true`
                                }]), w.logEvent(`Canvas Shared Run Button Clicked`, {
                                    textdocId: t.sharedTextdocId,
                                    textdocType: t.type
                                }), n()
                            },
                            isCodeRunning: r
                        }), c ? (0, R.jsxs)(i, {
                            onClick: () => {
                                b({
                                    fallbackScreenHint: `login`,
                                    callbackUrl: m
                                }), h()
                            },
                            icon: a,
                            children: [(0, R.jsx)(`span`, {
                                className: `hidden sm:inline`,
                                children: p.formatMessage(V.editWithChatGPT)
                            }), (0, R.jsx)(`span`, {
                                className: `inline sm:hidden`,
                                children: p.formatMessage(V.edit)
                            })]
                        }) : (0, R.jsxs)(i, {
                            as: `link`,
                            to: m,
                            openNewTab: !0,
                            icon: a,
                            onClick: h,
                            children: [(0, R.jsx)(`span`, {
                                className: `hidden sm:inline`,
                                children: p.formatMessage(V.editWithChatGPT)
                            }), (0, R.jsx)(`span`, {
                                className: `inline sm:hidden`,
                                children: p.formatMessage(V.edit)
                            })]
                        })]
                    })]
                })
            })
        }, V = D({
            report: {
                id: `DHsq+d`,
                defaultMessage: `Report`
            },
            editWithChatGPT: {
                id: `DrcR8S`,
                defaultMessage: `Edit with ChatGPT`
            },
            edit: {
                id: `PpEliN`,
                defaultMessage: `Edit`
            },
            madeWithCanvas: {
                id: `h8SGou`,
                defaultMessage: `You’re viewing user-generated content that may be unverified or unsafe.`
            }
        })
    })),
    H, je = e((() => {
        H = function(e) {
            return e.NUDITY_SEXUAL_ADULT = `nudity_sexual/adult`, e.NUDITY_SEXUAL_ABUSE = `nudity_sexual/abuse`, e.NUDITY_SEXUAL_NCII = `nudity_sexual/ncii`, e.CHILD_EXPLOITATION = `child_exploitation`, e.VIOLENCE_SELF_HARM = `violence/self_harm`, e.VIOLENCE_EATING = `violence/eating_disorder`, e.VIOLENCE_TERRORISM = `violence/terrorism`, e.VIOLENCE_THREATS = `violence/threats`, e.VIOLENCE_GENDER = `violence/gender`, e.VIOLENCE_WEAPONS = `violence/weapons`, e.DECEPTIVE_IMPERSONATION = `deceptive/impersonation`, e.DECEPTIVE_SCAM = `deceptive/scam`, e.DECEPTIVE_MISINFO = `deceptive/misinfo`, e.HATE_SPEECH = `hate/speech`, e.HATE_BULLYING = `hate/bullying`, e.HATE_UNWANTED = `hate/unwanted`, e.HATE_PRIVACY = `hate/privacy`, e.HATE_SPAM = `hate/spam`, e.OTHER_ILLEGAL = `other/illegal`, e.OTHER_UNSAFE = `other/unsafe`, e.OTHER_ANIMAL = `other/animal`, e.OTHER_HEALTH = `other/health`, e.OTHER_POLITICAL = `other/political`, e.OTHER_DONT_LIKE = `other/dont_like`, e.IP_COPYRIGHT = `ip/copyright`, e.IP_TRADEMARK = `ip/trademark`, e.MODERATION_INCORRECT = `moderation/incorrect`, e
        }({})
    })),
    U, W, G, K, q, J, Y, Me = e((() => {
        d(), ce(), de(), s(), je(), De(), oe(), ne(), U = t(k()), O(), W = E(), G = [{
            id: `NUDITY_SEXUAL`,
            label: `Nudity & Sexual Content`
        }, {
            id: `CHILD_EXPLOITATION`,
            label: `Child Exploitation`
        }, {
            id: `VIOLENCE_SELF_HARM`,
            label: `Violence & Self-Harm`
        }, {
            id: `DECEPTIVE_SCAM`,
            label: `Deceptive Behavior & Scams`
        }, {
            id: `HATE_SPAM`,
            label: `Hate, Harrassment & Spam`
        }, {
            id: `OTHER_ILLEGAL`,
            label: `Other inappropriate or illegal content`
        }, {
            id: `IP`,
            label: `Intellectual Property`
        }], K = {
            NUDITY_SEXUAL: [{
                id: H.NUDITY_SEXUAL_ADULT,
                label: `Adult nudity & sexual content`
            }, {
                id: H.NUDITY_SEXUAL_ABUSE,
                label: `Sexual exploitation & abuse`
            }, {
                id: H.NUDITY_SEXUAL_NCII,
                label: `Non-consensual or deepfake intimate imagery`
            }],
            CHILD_EXPLOITATION: [{
                id: H.CHILD_EXPLOITATION,
                label: `Child exploitation`
            }],
            VIOLENCE_SELF_HARM: [{
                id: H.VIOLENCE_SELF_HARM,
                label: `Suicide & self-harm`
            }, {
                id: H.VIOLENCE_EATING,
                label: `Eating disorders`
            }, {
                id: H.VIOLENCE_TERRORISM,
                label: `Terrorism`
            }, {
                id: H.VIOLENCE_THREATS,
                label: `Threats or incitement to violence`
            }, {
                id: H.VIOLENCE_GENDER,
                label: `Gender-based violence`
            }, {
                id: H.VIOLENCE_WEAPONS,
                label: `Weapons creation & procurement`
            }],
            DECEPTIVE_SCAM: [{
                id: H.DECEPTIVE_IMPERSONATION,
                label: `Impersonation`
            }, {
                id: H.DECEPTIVE_SCAM,
                label: `Fraud or scam`
            }, {
                id: H.DECEPTIVE_MISINFO,
                label: `Misleading information`
            }],
            HATE_SPAM: [{
                id: H.HATE_SPEECH,
                label: `Hate speech or symbols`
            }, {
                id: H.HATE_BULLYING,
                label: `Bullying & harassment`
            }, {
                id: H.HATE_UNWANTED,
                label: `Unwanted depiction of real person`
            }, {
                id: H.HATE_PRIVACY,
                label: `Privacy violating activities`
            }, {
                id: H.HATE_SPAM,
                label: `Spam`
            }],
            OTHER_ILLEGAL: [{
                id: H.OTHER_UNSAFE,
                label: `Unsafe or prohibited products or activities`
            }, {
                id: H.OTHER_ANIMAL,
                label: `Animal harm or welfare issues`
            }, {
                id: H.OTHER_HEALTH,
                label: `Risks to public health and safety`
            }, {
                id: H.OTHER_POLITICAL,
                label: `Deceptive content of political candidate or election equipment`
            }, {
                id: H.OTHER_ILLEGAL,
                label: `Other inappropriate or illegal content`
            }, {
                id: H.OTHER_DONT_LIKE,
                label: `I just don’t like it`
            }],
            IP: [{
                id: H.IP_COPYRIGHT,
                label: `Copyright`,
                url: `https://openai.com/form/copyright-disputes`
            }, {
                id: H.IP_TRADEMARK,
                label: `Trademark`,
                url: `https://openai.com/form/trademark-disputes`
            }]
        }, q = {
            [H.IP_COPYRIGHT]: `https://openai.com/form/copyright-disputes`,
            [H.IP_TRADEMARK]: `https://openai.com/form/trademark-disputes`
        }, J = D({
            dialogTitle: {
                id: `reportModal.dialogTitle`,
                defaultMessage: `Why are you reporting this content?`
            },
            cancelButton: {
                id: `reportModal.cancelButton`,
                defaultMessage: `Cancel`
            },
            reportButton: {
                id: `reportModal.reportButton`,
                defaultMessage: `Report`
            },
            submittingButton: {
                id: `reportModal.submittingButton`,
                defaultMessage: `Submitting...`
            },
            submitSuccessMessage: {
                id: `reportModal.submitSuccessMessage`,
                defaultMessage: `Your report has been submitted.`
            },
            errorMessage: {
                id: `reportModal.errorMessage`,
                defaultMessage: `An error occurred while submitting your report.`
            },
            formRedirectMessage: {
                id: `reportModal.formRedirectMessage`,
                defaultMessage: `Please use this form to report unlawful use of your work:`
            }
        }), Y = ({
            reportFunction: e,
            isOpen: t,
            dismissModal: r
        }) => {
            let a = A(),
                [o, s] = (0, U.useState)(null),
                [c, l] = (0, U.useState)(null),
                [u, d] = (0, U.useState)(null),
                [f, p] = (0, U.useState)(`toplevel`),
                m = () => {
                    l(null), d(null), p(`toplevel`), s(null), r()
                },
                {
                    mutate: h,
                    isPending: g
                } = te({
                    mutationFn: async () => {
                        if (u) return e(u)
                    },
                    onSuccess: () => {
                        p(`success`)
                    },
                    onError: () => {
                        s(a.formatMessage(J.errorMessage))
                    }
                }),
                _ = u && q[u];
            return (0, W.jsxs)(n, {
                testId: `modal-report`,
                isOpen: t,
                showCloseButton: !0,
                onClose: m,
                title: a.formatMessage(J.dialogTitle),
                type: `success`,
                primaryButton: f === `takedown` && !_ && (0, W.jsx)(i, {
                    onClick: () => h(),
                    disabled: !u,
                    loading: g,
                    children: g ? a.formatMessage(J.submittingButton) : a.formatMessage(J.reportButton)
                }),
                secondaryButton: f === `takedown` && !_ && (0, W.jsx)(i, {
                    onClick: m,
                    color: `secondary`,
                    children: a.formatMessage(J.cancelButton)
                }),
                children: [f === `success` && (0, W.jsx)(`div`, {
                    children: a.formatMessage(J.submitSuccessMessage)
                }), f === `toplevel` && (0, W.jsx)(`div`, {
                    className: `flex flex-col gap-4`,
                    children: G.map(e => (0, W.jsx)(`div`, {
                        className: `flex items-start gap-2`,
                        children: (0, W.jsx)(i, {
                            className: `text-sm`,
                            color: `secondary`,
                            onClick: () => {
                                l(e.id), p(`takedown`)
                            },
                            children: e.label
                        })
                    }, e.id))
                }), f === `takedown` && c && (0, W.jsxs)(W.Fragment, {
                    children: [(0, W.jsx)(re, {
                        className: `flex grow flex-col gap-4`,
                        children: K[c].map(e => {
                            let t = e.id === u;
                            return (0, W.jsx)(ie, {
                                className: `flex grow items-center justify-start gap-2`,
                                value: e.id,
                                children: (0, W.jsx)(Oe, {
                                    htmlFor: e.id,
                                    className: `items-center text-start text-sm`,
                                    onClick: () => {
                                        d(e.id)
                                    },
                                    children: (0, W.jsxs)(`div`, {
                                        className: `text-token-text-primary flex items-center gap-2`,
                                        children: [t && (0, W.jsx)(ue, {
                                            className: `icon`
                                        }), !t && (0, W.jsx)(le, {
                                            className: `icon text-token-text-tertiary`
                                        }), e.label]
                                    })
                                }, e.id)
                            }, e.id)
                        })
                    }), _ && (0, W.jsxs)(`div`, {
                        className: `justify-between p-4 text-sm`,
                        children: [(0, W.jsx)(`p`, {
                            children: a.formatMessage(J.formRedirectMessage)
                        }), (0, W.jsx)(`a`, {
                            href: q[u],
                            target: `_blank`,
                            rel: `noreferrer`,
                            className: `text-primary underline`,
                            children: q[u]
                        })]
                    }), o && (0, W.jsx)(`div`, {
                        className: `p-4`,
                        children: (0, W.jsx)(`p`, {
                            className: `text-xs text-red-500`,
                            children: o
                        })
                    })]
                })]
            })
        }
    }));

function X(e, t) {
    r.safePost(`/textdoc/shared/{shared_textdoc_id}/report`, {
        parameters: {
            path: {
                shared_textdoc_id: e.sharedTextdocId
            }
        },
        requestBody: {
            takedown_type: t
        }
    })
}

function Ne({
    sharedTextdoc: e,
    disableCodeExecution: t = !1,
    disableNetworkRequests: n,
    disablePermissions: r,
    unsafeAllowAllNetworkRequests: i,
    showHeader: a = !0
}) {
    let s = j(e.type) && M(e.type, e.content),
        c = !t && s,
        [l, d] = (0, Z.useState)(c),
        [f, p] = (0, Z.useState)(!1),
        m = A(),
        h = (0, Z.useRef)(null),
        g = (0, Z.useRef)(null),
        _ = (0, Z.useRef)(null),
        [v, y] = (0, Z.useState)(!1),
        b = c && l,
        x = () => {
            t || (l ? (_.current?.stopCode(), d(!1)) : (d(!0), _.current?.runCode(e.type, e.content).finally(() => d(!1))))
        },
        {
            type: S,
            content: C
        } = e,
        w = ee(),
        T = !n && i,
        E = n ? m.formatMessage($.networkAccessDenied) : void 0;
    (0, Z.useEffect)(() => {
        if (w) {
            if (t) {
                d(!1), _.current?.stopCode();
                return
            }
            s && (d(!0), _.current?.runCode(S, C))
        }
    }, [t, s, w, C, S]);
    let {
        isOpen: D,
        currentTime: O
    } = Ce();
    return e.type === ae.DOCUMENT ? (0, Q.jsxs)(`div`, {
        className: `flex h-full w-full flex-col items-center overflow-hidden`,
        children: [(0, Q.jsxs)(`div`, {
            className: u(`flex h-full w-full max-w-[1000px]`, D && `max-w-[1200px]`),
            style: {
                boxShadow: `0px 4px 32px 0px rgba(0, 0, 0, 0.08)`
            },
            children: [(0, Q.jsx)(`div`, {
                className: `flex w-full grow justify-center`,
                children: (0, Q.jsxs)(`div`, {
                    className: `bg-token-bg-primary w-full overflow-y-auto`,
                    children: [a && (0, Q.jsx)(B, {
                        areButtonsFullWidth: !1,
                        sharedTextdoc: e,
                        onClickCodePreview: () => {},
                        isCodeRunning: l,
                        showRunCodeButton: !1,
                        setIsReportModalOpen: y
                    }), (0, Q.jsx)(`div`, {
                        className: `px-12 pt-12`,
                        children: (0, Q.jsx)(Ee, {
                            value: e.content,
                            onChange: () => {},
                            isDisabled: !0,
                            showChanges: !1,
                            comments: [],
                            diff: null,
                            safeUrls: [],
                            contentReferences: [],
                            wrapperClassName: `pb-12`
                        })
                    })]
                })
            }), typeof O == `number` && D && (0, Q.jsx)(I, {
                sharedTextDocId: e.sharedTextdocId
            })]
        }), (0, Q.jsx)(Y, {
            reportFunction: t => {
                X(e, t)
            },
            isOpen: v,
            dismissModal: () => y(!1)
        })]
    }) : j(e.type) ? (0, Q.jsxs)(`div`, {
        className: `justify-top flex h-full w-full flex-col justify-between overflow-auto`,
        children: [(0, Q.jsxs)(`div`, {
            className: `flex grow flex-col justify-start overflow-auto`,
            children: [a && (0, Q.jsx)(B, {
                areButtonsFullWidth: !0,
                sharedTextdoc: e,
                onClickCodePreview: x,
                isCodeRunning: l,
                showRunCodeButton: !s && !t,
                setIsReportModalOpen: y
            }), (0, Q.jsx)(`div`, {
                className: b ? `grow` : void 0,
                children: (0, Q.jsx)(o, {
                    children: (0, Q.jsx)(ve, {
                        id: e.sharedTextdocId,
                        isSharedSurface: !0,
                        ref: g,
                        enableTransition: s,
                        visuallyHidden: !b,
                        title: e.title,
                        networkPolicy: n ? `none` : `deps-and-user-approved`,
                        networkAccessDeniedMessage: E,
                        disablePermissions: r,
                        unsafeAllowAllNetworkRequests: T,
                        onRetryCodeRun: () => {
                            t || _.current?.runCode(S, C)
                        }
                    })
                })
            }), !b && (0, Q.jsx)(`div`, {
                children: (0, Q.jsx)(L, {
                    id: `published-codemirror`,
                    value: e.content,
                    hoveredCommentId: null,
                    focusedCommentId: null,
                    language: fe(e.type),
                    readonlyReason: xe({
                        isReadonly: !0,
                        isRequestActive: !1,
                        isTextdocStreaming: !1,
                        isHistoricalVersion: !1,
                        isShowingChanges: !1,
                        isReadonlyFromQueryParam: !1
                    }),
                    editorRef: h,
                    isPreview: !0
                })
            })]
        }), (0, Q.jsx)(`div`, {
            className: t || !l && s ? `hidden` : ``,
            children: (0, Q.jsx)(_e, {
                ref: _,
                isOpen: f,
                onOpenChange: p,
                sandboxRef: g,
                textdocId: `publishedCanvasTextdoc`,
                textdocContent: e.content,
                textdocTitle: e.title,
                isTextdocAttachedPending: !1,
                highlightLine: e => h.current?.highlightLine(e),
                isRequestActive: !1,
                createTextdocTurn: async () => {}
            })
        }), (0, Q.jsx)(Y, {
            isOpen: v,
            dismissModal: () => y(!1),
            reportFunction: t => {
                X(e, t)
            }
        })]
    }) : (0, Q.jsx)(`p`, {
        children: m.formatMessage($.unsupportedTextdocType)
    })
}
var Z, Q, $, Pe = e((() => {
    we(), Te(), N(), pe(), F(), be(), Ae(), se(), ye(), P(), Se(), Me(), x(), T(), m(), c(), Z = t(k()), O(), Q = E(), $ = D({
        networkAccessDenied: {
            id: `lvOcJE`,
            defaultMessage: `Network requests in shared Canvas are disabled for this workspace. Contact an admin to enable this feature.`
        },
        unsupportedTextdocType: {
            id: `4hdXQX`,
            defaultMessage: `Content type is not supported`
        }
    })
}));
export {
    Pe as n, Ne as t
};
//# sourceMappingURL=d423cc1e-lni27iv7vtzt9d1u.js.map