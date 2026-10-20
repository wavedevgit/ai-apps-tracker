import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dz as n,
    J5 as r,
    JT as i,
    Kh as a,
    Oz as o,
    P7 as s,
    R7 as c,
    Sw as l,
    Xy as u,
    Y5 as d,
    Yh as f,
    Zy as p,
    _4 as m,
    _nt as h,
    dit as g,
    drt as _,
    g4 as v,
    lrt as y,
    n0 as b,
    qT as x,
    r0 as S,
    uit as C,
    urt as w,
    ww as T,
    ynt as E
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as D,
    Ln as O,
    Rn as k,
    Vn as A,
    p as ee,
    s as te,
    zn as j
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    imn as ne,
    isn as re,
    rsn as ie,
    smn as ae,
    tsn as oe,
    umn as M
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    af as se,
    if as ce,
    of as le,
    rf as ue
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    n as de,
    r as fe
} from "./a4ef304b-g1bshrcgcahllv4q.js";
import {
    c as pe,
    l as N,
    n as me,
    s as P,
    t as he
} from "./cc445a0e-m1kzqcssvaixirdf.js";
import {
    o as ge,
    r as _e,
    s as F,
    t as I
} from "./d3304073-gnbj26zwlqmhu5v6.js";
import {
    n as ve,
    t as ye
} from "./4d271a7b-gwx5wu51hmc69fj9.js";
import {
    n as be,
    t as xe
} from "./073fd849-mgani8emaqw2t5x7.js";
import {
    a as Se,
    o as Ce
} from "./e74608d1-luisszm3x34qlhhj.js";
import {
    n as we,
    t as Te
} from "./5ba997e8-efp0zgq2z5l1y47k.js";
import {
    n as L,
    t as Ee
} from "./ed61b531-d3e28i5jbv1ig8gw.js";
import {
    n as De,
    t as Oe
} from "./bcae0416-h0upfmp84fw5vxxa.js";

function ke(e) {
    return `/?model=gpt-4o&sharedCanvas=${e.sharedTextdocId}`
}
var R, z, B, V, Ae = e((() => {
        i(), P(), me(), p(), f(), b(), C(), E(), y(), d(), A(), k(), R = D(), z = `https://openai.com/form/report-content/`, B = ({
            areButtonsFullWidth: e,
            sharedTextdoc: t,
            onClickCodePreview: n,
            isCodeRunning: i,
            showRunCodeButton: o,
            setIsReportModalOpen: s
        }) => {
            let c = !g(),
                l = N(t.type, t.content),
                d = o && (l || pe(t.type)),
                f = j(),
                p = ke(t),
                m = () => {
                    w.count(_.CANVAS, `shared.click_edit_button`, [{
                        key: `type`,
                        value: t.type
                    }, {
                        key: `authed`,
                        value: c ? `false` : `true`
                    }]), h.logEvent(`Canvas Shared Edit Button Clicked`, {
                        textdocId: t.sharedTextdocId,
                        textdocType: t.type
                    })
                };
            return (0, R.jsx)(`div`, {
                className: `border-token-border-default flex w-full justify-center border-b-[0.5px] px-6`,
                children: (0, R.jsxs)(`div`, {
                    className: r(`flex w-full items-center justify-between gap-4 py-4`, !e && `max-w-[1200px]`),
                    children: [(0, R.jsxs)(`div`, {
                        children: [(0, R.jsx)(`h1`, {
                            className: `text-token-text-primary line-clamp-1 text-base font-semibold`,
                            children: t.title
                        }), (0, R.jsxs)(`div`, {
                            className: `text-token-text-secondary xs:flex-col flex flex-col gap-1.5 text-xs sm:flex-row`,
                            children: [(0, R.jsx)(`div`, {
                                className: `cursor-default`,
                                children: (0, R.jsx)(u, {
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
                                children: c ? (0, R.jsx)(`a`, {
                                    className: `underline`,
                                    href: z,
                                    target: `_blank`,
                                    rel: `noreferrer`,
                                    onClick: () => {
                                        w.count(_.CANVAS, `shared.click_report_button`, [{
                                            key: `type`,
                                            value: t.type
                                        }, {
                                            key: `authed`,
                                            value: `false`
                                        }]), h.logEvent(`Canvas Shared Unauthed Report Button Clicked`, {
                                            textdocId: t.sharedTextdocId,
                                            textdocType: t.type
                                        })
                                    },
                                    children: f.formatMessage(V.report)
                                }) : (0, R.jsx)(`button`, {
                                    className: `underline`,
                                    onClick: () => {
                                        w.count(_.CANVAS, `shared.click_report_button`, [{
                                            key: `type`,
                                            value: t.type
                                        }, {
                                            key: `authed`,
                                            value: `true`
                                        }]), h.logEvent(`Canvas Shared Authed Report Button Clicked`, {
                                            textdocId: t.sharedTextdocId,
                                            textdocType: t.type
                                        }), s(!0)
                                    },
                                    children: f.formatMessage(V.report)
                                })
                            })]
                        })]
                    }), (0, R.jsxs)(`div`, {
                        className: `flex items-center gap-4`,
                        children: [d && (0, R.jsx)(he, {
                            isCodePreviewable: l,
                            onClick: () => {
                                w.count(_.CANVAS, `shared.click_run_button`, [{
                                    key: `type`,
                                    value: t.type
                                }, {
                                    key: `authed`,
                                    value: c ? `false` : `true`
                                }]), h.logEvent(`Canvas Shared Run Button Clicked`, {
                                    textdocId: t.sharedTextdocId,
                                    textdocType: t.type
                                }), n()
                            },
                            isCodeRunning: i
                        }), c ? (0, R.jsxs)(x, {
                            onClick: () => {
                                S({
                                    fallbackScreenHint: `login`,
                                    callbackUrl: p
                                }), m()
                            },
                            icon: a,
                            children: [(0, R.jsx)(`span`, {
                                className: `hidden sm:inline`,
                                children: f.formatMessage(V.editWithChatGPT)
                            }), (0, R.jsx)(`span`, {
                                className: `inline sm:hidden`,
                                children: f.formatMessage(V.edit)
                            })]
                        }) : (0, R.jsxs)(x, {
                            as: `link`,
                            to: p,
                            openNewTab: !0,
                            icon: a,
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
        }, V = O({
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
        i(), se(), ue(), T(), je(), De(), re(), te(), U = t(A()), k(), W = D(), G = [{
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
        }, J = O({
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
            dismissModal: n
        }) => {
            let r = j(),
                [i, a] = (0, U.useState)(null),
                [o, s] = (0, U.useState)(null),
                [c, u] = (0, U.useState)(null),
                [d, f] = (0, U.useState)(`toplevel`),
                p = () => {
                    s(null), u(null), f(`toplevel`), a(null), n()
                },
                {
                    mutate: m,
                    isPending: h
                } = ee({
                    mutationFn: async () => {
                        if (c) return e(c)
                    },
                    onSuccess: () => {
                        f(`success`)
                    },
                    onError: () => {
                        a(r.formatMessage(J.errorMessage))
                    }
                }),
                g = c && q[c];
            return (0, W.jsxs)(l, {
                testId: `modal-report`,
                isOpen: t,
                showCloseButton: !0,
                onClose: p,
                title: r.formatMessage(J.dialogTitle),
                type: `success`,
                primaryButton: d === `takedown` && !g && (0, W.jsx)(x, {
                    onClick: () => m(),
                    disabled: !c,
                    loading: h,
                    children: h ? r.formatMessage(J.submittingButton) : r.formatMessage(J.reportButton)
                }),
                secondaryButton: d === `takedown` && !g && (0, W.jsx)(x, {
                    onClick: p,
                    color: `secondary`,
                    children: r.formatMessage(J.cancelButton)
                }),
                children: [d === `success` && (0, W.jsx)(`div`, {
                    children: r.formatMessage(J.submitSuccessMessage)
                }), d === `toplevel` && (0, W.jsx)(`div`, {
                    className: `flex flex-col gap-4`,
                    children: G.map(e => (0, W.jsx)(`div`, {
                        className: `flex items-start gap-2`,
                        children: (0, W.jsx)(x, {
                            className: `text-sm`,
                            color: `secondary`,
                            onClick: () => {
                                s(e.id), f(`takedown`)
                            },
                            children: e.label
                        })
                    }, e.id))
                }), d === `takedown` && o && (0, W.jsxs)(W.Fragment, {
                    children: [(0, W.jsx)(oe, {
                        className: `flex grow flex-col gap-4`,
                        children: K[o].map(e => {
                            let t = e.id === c;
                            return (0, W.jsx)(ie, {
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
                                        children: [t && (0, W.jsx)(le, {
                                            className: `icon`
                                        }), !t && (0, W.jsx)(ce, {
                                            className: `icon text-token-text-tertiary`
                                        }), e.label]
                                    })
                                }, e.id)
                            }, e.id)
                        })
                    }), g && (0, W.jsxs)(`div`, {
                        className: `justify-between p-4 text-sm`,
                        children: [(0, W.jsx)(`p`, {
                            children: r.formatMessage(J.formRedirectMessage)
                        }), (0, W.jsx)(`a`, {
                            href: q[c],
                            target: `_blank`,
                            rel: `noreferrer`,
                            className: `text-primary underline`,
                            children: q[c]
                        })]
                    }), i && (0, W.jsx)(`div`, {
                        className: `p-4`,
                        children: (0, W.jsx)(`p`, {
                            className: `text-xs text-red-500`,
                            children: i
                        })
                    })]
                })]
            })
        }
    }));

function X(e, t) {
    s.safePost(`/textdoc/shared/{shared_textdoc_id}/report`, {
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
    disableNetworkRequests: i,
    disablePermissions: a,
    unsafeAllowAllNetworkRequests: o,
    showHeader: s = !0
}) {
    let c = M(e.type) && N(e.type, e.content),
        l = !t && c,
        [u, d] = (0, Z.useState)(l),
        [f, p] = (0, Z.useState)(!1),
        h = j(),
        g = (0, Z.useRef)(null),
        _ = (0, Z.useRef)(null),
        v = (0, Z.useRef)(null),
        [y, b] = (0, Z.useState)(!1),
        x = l && u,
        S = () => {
            t || (u ? (v.current?.stopCode(), d(!1)) : (d(!0), v.current?.runCode(e.type, e.content).finally(() => d(!1))))
        },
        {
            type: C,
            content: w
        } = e,
        T = m(),
        E = !i && o,
        D = i ? h.formatMessage($.networkAccessDenied) : void 0;
    (0, Z.useEffect)(() => {
        if (T) {
            if (t) {
                d(!1), v.current?.stopCode();
                return
            }
            c && (d(!0), v.current?.runCode(C, w))
        }
    }, [t, c, T, w, C]);
    let {
        isOpen: O,
        currentTime: k
    } = Ce();
    return e.type === ne.DOCUMENT ? (0, Q.jsxs)(`div`, {
        className: `flex h-full w-full flex-col items-center overflow-hidden`,
        children: [(0, Q.jsxs)(`div`, {
            className: r(`flex h-full w-full max-w-[1000px]`, O && `max-w-[1200px]`),
            style: {
                boxShadow: `0px 4px 32px 0px rgba(0, 0, 0, 0.08)`
            },
            children: [(0, Q.jsx)(`div`, {
                className: `flex w-full grow justify-center`,
                children: (0, Q.jsxs)(`div`, {
                    className: `bg-token-bg-primary w-full overflow-y-auto`,
                    children: [s && (0, Q.jsx)(B, {
                        areButtonsFullWidth: !1,
                        sharedTextdoc: e,
                        onClickCodePreview: () => {},
                        isCodeRunning: u,
                        showRunCodeButton: !1,
                        setIsReportModalOpen: b
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
            }), typeof k == `number` && O && (0, Q.jsx)(I, {
                sharedTextDocId: e.sharedTextdocId
            })]
        }), (0, Q.jsx)(Y, {
            reportFunction: t => {
                X(e, t)
            },
            isOpen: y,
            dismissModal: () => b(!1)
        })]
    }) : M(e.type) ? (0, Q.jsxs)(`div`, {
        className: `justify-top flex h-full w-full flex-col justify-between overflow-auto`,
        children: [(0, Q.jsxs)(`div`, {
            className: `flex grow flex-col justify-start overflow-auto`,
            children: [s && (0, Q.jsx)(B, {
                areButtonsFullWidth: !0,
                sharedTextdoc: e,
                onClickCodePreview: S,
                isCodeRunning: u,
                showRunCodeButton: !c && !t,
                setIsReportModalOpen: b
            }), (0, Q.jsx)(`div`, {
                className: x ? `grow` : void 0,
                children: (0, Q.jsx)(n, {
                    children: (0, Q.jsx)(ve, {
                        id: e.sharedTextdocId,
                        isSharedSurface: !0,
                        ref: _,
                        enableTransition: c,
                        visuallyHidden: !x,
                        title: e.title,
                        networkPolicy: i ? `none` : `deps-and-user-approved`,
                        networkAccessDeniedMessage: D,
                        disablePermissions: a,
                        unsafeAllowAllNetworkRequests: E,
                        onRetryCodeRun: () => {
                            t || v.current?.runCode(C, w)
                        }
                    })
                })
            }), !x && (0, Q.jsx)(`div`, {
                children: (0, Q.jsx)(Te, {
                    id: `published-codemirror`,
                    value: e.content,
                    hoveredCommentId: null,
                    focusedCommentId: null,
                    language: de(e.type),
                    readonlyReason: xe({
                        isReadonly: !0,
                        isRequestActive: !1,
                        isTextdocStreaming: !1,
                        isHistoricalVersion: !1,
                        isShowingChanges: !1,
                        isReadonlyFromQueryParam: !1
                    }),
                    editorRef: g,
                    isPreview: !0
                })
            })]
        }), (0, Q.jsx)(`div`, {
            className: t || !u && c ? `hidden` : ``,
            children: (0, Q.jsx)(ge, {
                ref: v,
                isOpen: f,
                onOpenChange: p,
                sandboxRef: _,
                textdocId: `publishedCanvasTextdoc`,
                textdocContent: e.content,
                textdocTitle: e.title,
                isTextdocAttachedPending: !1,
                highlightLine: e => g.current?.highlightLine(e),
                isRequestActive: !1,
                createTextdocTurn: async () => {}
            })
        }), (0, Q.jsx)(Y, {
            isOpen: y,
            dismissModal: () => b(!1),
            reportFunction: t => {
                X(e, t)
            }
        })]
    }) : (0, Q.jsx)(`p`, {
        children: h.formatMessage($.unsupportedTextdocType)
    })
}
var Z, Q, $, Pe = e((() => {
    we(), L(), P(), fe(), F(), be(), Ae(), ae(), ye(), _e(), Se(), Me(), o(), c(), v(), d(), Z = t(A()), k(), Q = D(), $ = O({
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
//# sourceMappingURL=d423cc1e-crify6fniiqxo9fr.js.map