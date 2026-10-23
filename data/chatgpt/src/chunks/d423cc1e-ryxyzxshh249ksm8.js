import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aw as r,
    Fz as i,
    I7 as a,
    Irt as o,
    Iz as s,
    K5 as c,
    Knt as l,
    Lit as u,
    Lrt as d,
    M7 as f,
    O4 as p,
    Ow as m,
    Qy as h,
    Rit as g,
    Rrt as _,
    Wnt as v,
    Xh as y,
    Zy as b,
    eE as x,
    f0 as S,
    k4 as ee,
    p0 as C,
    q5 as w,
    qh as T
} from "./4813494d-mdvd4786a87166cc.js";
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
    Vmn as re,
    Wmn as ie,
    _sn as ae,
    gsn as oe,
    msn as se,
    qmn as j
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    if as ce,
    nf as le,
    rf as ue,
    tf as de
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    n as fe,
    r as pe
} from "./a4ef304b-h8oqddluzvkqmza4.js";
import {
    c as me,
    l as M,
    n as he,
    s as N,
    t as ge
} from "./cc445a0e-nbq009pcni1b56t9.js";
import {
    o as _e,
    r as P,
    s as F,
    t as I
} from "./d3304073-edt3q3x617cl7s35.js";
import {
    n as ve,
    t as ye
} from "./4d271a7b-df7bh6fcr9kmugr5.js";
import {
    n as be,
    t as xe
} from "./073fd849-fdkg4spwe61sp7mn.js";
import {
    a as Se,
    o as Ce
} from "./e74608d1-gd7ozl6icmxd1al2.js";
import {
    n as we,
    t as Te
} from "./5ba997e8-jknmmlqmqia2g2h7.js";
import {
    n as Ee,
    t as L
} from "./ed61b531-nhp0g5scy92781a9.js";
import {
    n as De,
    t as Oe
} from "./bcae0416-ikuz8xpvrl7zc38d.js";

function ke(e) {
    return `/?model=gpt-4o&sharedCanvas=${e.sharedTextdocId}`
}
var R, z, B, V, Ae = e((() => {
        x(), N(), he(), h(), y(), S(), u(), l(), o(), w(), k(), O(), R = E(), z = `https://openai.com/form/report-content/`, B = ({
            areButtonsFullWidth: e,
            sharedTextdoc: t,
            onClickCodePreview: r,
            isCodeRunning: i,
            showRunCodeButton: a,
            setIsReportModalOpen: o
        }) => {
            let s = !g(),
                l = M(t.type, t.content),
                u = a && (l || me(t.type)),
                f = A(),
                p = ke(t),
                m = () => {
                    d.count(_.CANVAS, `shared.click_edit_button`, [{
                        key: `type`,
                        value: t.type
                    }, {
                        key: `authed`,
                        value: s ? `false` : `true`
                    }]), v.logEvent(`Canvas Shared Edit Button Clicked`, {
                        textdocId: t.sharedTextdocId,
                        textdocType: t.type
                    })
                };
            return (0, R.jsx)(`div`, {
                className: `border-token-border-default flex w-full justify-center border-b-[0.5px] px-6`,
                children: (0, R.jsxs)(`div`, {
                    className: c(`flex w-full items-center justify-between gap-4 py-4`, !e && `max-w-[1200px]`),
                    children: [(0, R.jsxs)(`div`, {
                        children: [(0, R.jsx)(`h1`, {
                            className: `text-token-text-primary line-clamp-1 text-base font-semibold`,
                            children: t.title
                        }), (0, R.jsxs)(`div`, {
                            className: `text-token-text-secondary xs:flex-col flex flex-col gap-1.5 text-xs sm:flex-row`,
                            children: [(0, R.jsx)(`div`, {
                                className: `cursor-default`,
                                children: (0, R.jsx)(b, {
                                    align: `start`,
                                    theme: `primary`,
                                    labelTextAlign: `left`,
                                    wide: !0,
                                    contentClassName: `![&>*]:font-normal *:font-normal`,
                                    label: f.formatMessage({
                                        id: `RkWIbL`,
                                        defaultMessage: `The content you’re seeing was made by a ChatGPT user. It may be unverified or contain potentially unsafe content that doesn’t reflect the views of OpenAI.`
                                    }),
                                    children: f.formatMessage(V.madeWithCanvas)
                                })
                            }), (0, R.jsx)(`div`, {
                                children: s ? (0, R.jsx)(`a`, {
                                    className: `underline`,
                                    href: z,
                                    target: `_blank`,
                                    rel: `noreferrer`,
                                    onClick: () => {
                                        d.count(_.CANVAS, `shared.click_report_button`, [{
                                            key: `type`,
                                            value: t.type
                                        }, {
                                            key: `authed`,
                                            value: `false`
                                        }]), v.logEvent(`Canvas Shared Unauthed Report Button Clicked`, {
                                            textdocId: t.sharedTextdocId,
                                            textdocType: t.type
                                        })
                                    },
                                    children: f.formatMessage(V.report)
                                }) : (0, R.jsx)(`button`, {
                                    className: `underline`,
                                    onClick: () => {
                                        d.count(_.CANVAS, `shared.click_report_button`, [{
                                            key: `type`,
                                            value: t.type
                                        }, {
                                            key: `authed`,
                                            value: `true`
                                        }]), v.logEvent(`Canvas Shared Authed Report Button Clicked`, {
                                            textdocId: t.sharedTextdocId,
                                            textdocType: t.type
                                        }), o(!0)
                                    },
                                    children: f.formatMessage(V.report)
                                })
                            })]
                        })]
                    }), (0, R.jsxs)(`div`, {
                        className: `flex items-center gap-4`,
                        children: [u && (0, R.jsx)(ge, {
                            isCodePreviewable: l,
                            onClick: () => {
                                d.count(_.CANVAS, `shared.click_run_button`, [{
                                    key: `type`,
                                    value: t.type
                                }, {
                                    key: `authed`,
                                    value: s ? `false` : `true`
                                }]), v.logEvent(`Canvas Shared Run Button Clicked`, {
                                    textdocId: t.sharedTextdocId,
                                    textdocType: t.type
                                }), r()
                            },
                            isCodeRunning: i
                        }), s ? (0, R.jsxs)(n, {
                            onClick: () => {
                                C({
                                    fallbackScreenHint: `login`,
                                    callbackUrl: p
                                }), m()
                            },
                            icon: T,
                            children: [(0, R.jsx)(`span`, {
                                className: `hidden sm:inline`,
                                children: f.formatMessage(V.editWithChatGPT)
                            }), (0, R.jsx)(`span`, {
                                className: `inline sm:hidden`,
                                children: f.formatMessage(V.edit)
                            })]
                        }) : (0, R.jsxs)(n, {
                            as: `link`,
                            to: p,
                            openNewTab: !0,
                            icon: T,
                            onClick: m,
                            children: [(0, R.jsx)(`span`, {
                                className: `hidden sm:inline`,
                                children: f.formatMessage(V.editWithChatGPT)
                            }), (0, R.jsx)(`span`, {
                                className: `inline sm:hidden`,
                                children: f.formatMessage(V.edit)
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
        x(), ue(), de(), r(), je(), De(), ae(), ne(), U = t(k()), O(), W = E(), G = [{
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
            let i = A(),
                [a, o] = (0, U.useState)(null),
                [s, c] = (0, U.useState)(null),
                [l, u] = (0, U.useState)(null),
                [d, f] = (0, U.useState)(`toplevel`),
                p = () => {
                    c(null), u(null), f(`toplevel`), o(null), r()
                },
                {
                    mutate: h,
                    isPending: g
                } = te({
                    mutationFn: async () => {
                        if (l) return e(l)
                    },
                    onSuccess: () => {
                        f(`success`)
                    },
                    onError: () => {
                        o(i.formatMessage(J.errorMessage))
                    }
                }),
                _ = l && q[l];
            return (0, W.jsxs)(m, {
                testId: `modal-report`,
                isOpen: t,
                showCloseButton: !0,
                onClose: p,
                title: i.formatMessage(J.dialogTitle),
                type: `success`,
                primaryButton: d === `takedown` && !_ && (0, W.jsx)(n, {
                    onClick: () => h(),
                    disabled: !l,
                    loading: g,
                    children: g ? i.formatMessage(J.submittingButton) : i.formatMessage(J.reportButton)
                }),
                secondaryButton: d === `takedown` && !_ && (0, W.jsx)(n, {
                    onClick: p,
                    color: `secondary`,
                    children: i.formatMessage(J.cancelButton)
                }),
                children: [d === `success` && (0, W.jsx)(`div`, {
                    children: i.formatMessage(J.submitSuccessMessage)
                }), d === `toplevel` && (0, W.jsx)(`div`, {
                    className: `flex flex-col gap-4`,
                    children: G.map(e => (0, W.jsx)(`div`, {
                        className: `flex items-start gap-2`,
                        children: (0, W.jsx)(n, {
                            className: `text-sm`,
                            color: `secondary`,
                            onClick: () => {
                                c(e.id), f(`takedown`)
                            },
                            children: e.label
                        })
                    }, e.id))
                }), d === `takedown` && s && (0, W.jsxs)(W.Fragment, {
                    children: [(0, W.jsx)(se, {
                        className: `flex grow flex-col gap-4`,
                        children: K[s].map(e => {
                            let t = e.id === l;
                            return (0, W.jsx)(oe, {
                                className: `flex grow items-center justify-start gap-2`,
                                value: e.id,
                                children: (0, W.jsx)(Oe, {
                                    htmlFor: e.id,
                                    className: `items-center text-start text-sm`,
                                    onClick: () => {
                                        u(e.id)
                                    },
                                    children: (0, W.jsxs)(`div`, {
                                        className: `text-token-text-primary flex items-center gap-2`,
                                        children: [t && (0, W.jsx)(ce, {
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
                            children: i.formatMessage(J.formRedirectMessage)
                        }), (0, W.jsx)(`a`, {
                            href: q[l],
                            target: `_blank`,
                            rel: `noreferrer`,
                            className: `text-primary underline`,
                            children: q[l]
                        })]
                    }), a && (0, W.jsx)(`div`, {
                        className: `p-4`,
                        children: (0, W.jsx)(`p`, {
                            className: `text-xs text-red-500`,
                            children: a
                        })
                    })]
                })]
            })
        }
    }));

function X(e, t) {
    f.safePost(`/textdoc/shared/{shared_textdoc_id}/report`, {
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
    unsafeAllowAllNetworkRequests: a,
    showHeader: o = !0
}) {
    let s = j(e.type) && M(e.type, e.content),
        l = !t && s,
        [u, d] = (0, Z.useState)(l),
        [f, p] = (0, Z.useState)(!1),
        m = A(),
        h = (0, Z.useRef)(null),
        g = (0, Z.useRef)(null),
        _ = (0, Z.useRef)(null),
        [v, y] = (0, Z.useState)(!1),
        b = l && u,
        x = () => {
            t || (u ? (_.current?.stopCode(), d(!1)) : (d(!0), _.current?.runCode(e.type, e.content).finally(() => d(!1))))
        },
        {
            type: S,
            content: C
        } = e,
        w = ee(),
        T = !n && a,
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
    return e.type === re.DOCUMENT ? (0, Q.jsxs)(`div`, {
        className: `flex h-full w-full flex-col items-center overflow-hidden`,
        children: [(0, Q.jsxs)(`div`, {
            className: c(`flex h-full w-full max-w-[1000px]`, D && `max-w-[1200px]`),
            style: {
                boxShadow: `0px 4px 32px 0px rgba(0, 0, 0, 0.08)`
            },
            children: [(0, Q.jsx)(`div`, {
                className: `flex w-full grow justify-center`,
                children: (0, Q.jsxs)(`div`, {
                    className: `bg-token-bg-primary w-full overflow-y-auto`,
                    children: [o && (0, Q.jsx)(B, {
                        areButtonsFullWidth: !1,
                        sharedTextdoc: e,
                        onClickCodePreview: () => {},
                        isCodeRunning: u,
                        showRunCodeButton: !1,
                        setIsReportModalOpen: y
                    }), (0, Q.jsx)(`div`, {
                        className: `px-12 pt-12`,
                        children: (0, Q.jsx)(L, {
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
            children: [o && (0, Q.jsx)(B, {
                areButtonsFullWidth: !0,
                sharedTextdoc: e,
                onClickCodePreview: x,
                isCodeRunning: u,
                showRunCodeButton: !s && !t,
                setIsReportModalOpen: y
            }), (0, Q.jsx)(`div`, {
                className: b ? `grow` : void 0,
                children: (0, Q.jsx)(i, {
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
                children: (0, Q.jsx)(Te, {
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
            className: t || !u && s ? `hidden` : ``,
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
    we(), Ee(), N(), pe(), F(), be(), Ae(), ie(), ye(), P(), Se(), Me(), s(), a(), p(), w(), Z = t(k()), O(), Q = E(), $ = D({
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
//# sourceMappingURL=d423cc1e-ryxyzxshh249ksm8.js.map