import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dz as n,
    Gh as r,
    J5 as i,
    JT as a,
    Jh as o,
    L7 as s,
    N7 as c,
    Oz as l,
    Sw as u,
    Xy as d,
    Yy as f,
    _nt as p,
    cit as m,
    crt as h,
    g4 as g,
    h4 as _,
    hnt as v,
    lit as y,
    lrt as b,
    n0 as x,
    q5 as S,
    qT as C,
    srt as w,
    t0 as T,
    ww as E
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as D,
    Hn as O,
    Rn as k,
    Vn as A,
    p as ee,
    s as te,
    zn as j
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    esn as ne,
    lmn as M,
    nsn as re,
    omn as ie,
    rmn as ae,
    rsn as oe
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    af as se,
    if as ce,
    of as le,
    rf as ue
} from "./30901919-jory365vq6ym5crx.js";
import {
    n as de,
    r as fe
} from "./a4ef304b-dpx54jrhg24zia67.js";
import {
    c as pe,
    l as N,
    n as me,
    s as P,
    t as he
} from "./cc445a0e-i80l9k4i6d1nds2g.js";
import {
    o as ge,
    r as _e,
    s as F,
    t as I
} from "./d3304073-lqnfn2mbt8jj5d3y.js";
import {
    n as ve,
    t as ye
} from "./4d271a7b-o0mxja3gckmk1ykl.js";
import {
    n as be,
    t as xe
} from "./073fd849-eopmxlgrxk6ijgci.js";
import {
    a as Se,
    o as Ce
} from "./e74608d1-me868l71k3d1pcya.js";
import {
    n as we,
    t as L
} from "./5ba997e8-lgw7y1na4u5v2p1d.js";
import {
    n as Te,
    t as Ee
} from "./ed61b531-llbcful07qakr8v9.js";
import {
    n as De,
    t as Oe
} from "./bcae0416-dpdxrokgmxr43jzy.js";

function ke(e) {
    return `/?model=gpt-4o&sharedCanvas=${e.sharedTextdocId}`
}
var R, z, B, V, Ae = e((() => {
        a(), P(), me(), d(), o(), T(), m(), p(), w(), i(), O(), j(), R = A(), z = `https://openai.com/form/report-content/`, B = ({
            areButtonsFullWidth: e,
            sharedTextdoc: t,
            onClickCodePreview: n,
            isCodeRunning: i,
            showRunCodeButton: a,
            setIsReportModalOpen: o
        }) => {
            let s = !y(),
                c = N(t.type, t.content),
                l = a && (c || pe(t.type)),
                u = D(),
                d = ke(t),
                p = () => {
                    h.count(b.CANVAS, `shared.click_edit_button`, [{
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
                    className: S(`flex w-full items-center justify-between gap-4 py-4`, !e && `max-w-[1200px]`),
                    children: [(0, R.jsxs)(`div`, {
                        children: [(0, R.jsx)(`h1`, {
                            className: `text-token-text-primary line-clamp-1 text-base font-semibold`,
                            children: t.title
                        }), (0, R.jsxs)(`div`, {
                            className: `text-token-text-secondary xs:flex-col flex flex-col gap-1.5 text-xs sm:flex-row`,
                            children: [(0, R.jsx)(`div`, {
                                className: `cursor-default`,
                                children: (0, R.jsx)(f, {
                                    align: `start`,
                                    theme: `primary`,
                                    labelTextAlign: `left`,
                                    wide: !0,
                                    contentClassName: `![&>*]:font-normal *:font-normal`,
                                    label: u.formatMessage({
                                        id: `RkWIbL`,
                                        defaultMessage: `The content you’re seeing was made by a ChatGPT user. It may be unverified or contain potentially unsafe content that doesn’t reflect the views of OpenAI.`
                                    }),
                                    children: u.formatMessage(V.madeWithCanvas)
                                })
                            }), (0, R.jsx)(`div`, {
                                children: s ? (0, R.jsx)(`a`, {
                                    className: `underline`,
                                    href: z,
                                    target: `_blank`,
                                    rel: `noreferrer`,
                                    onClick: () => {
                                        h.count(b.CANVAS, `shared.click_report_button`, [{
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
                                    children: u.formatMessage(V.report)
                                }) : (0, R.jsx)(`button`, {
                                    className: `underline`,
                                    onClick: () => {
                                        h.count(b.CANVAS, `shared.click_report_button`, [{
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
                                    children: u.formatMessage(V.report)
                                })
                            })]
                        })]
                    }), (0, R.jsxs)(`div`, {
                        className: `flex items-center gap-4`,
                        children: [l && (0, R.jsx)(he, {
                            isCodePreviewable: c,
                            onClick: () => {
                                h.count(b.CANVAS, `shared.click_run_button`, [{
                                    key: `type`,
                                    value: t.type
                                }, {
                                    key: `authed`,
                                    value: s ? `false` : `true`
                                }]), v.logEvent(`Canvas Shared Run Button Clicked`, {
                                    textdocId: t.sharedTextdocId,
                                    textdocType: t.type
                                }), n()
                            },
                            isCodeRunning: i
                        }), s ? (0, R.jsxs)(C, {
                            onClick: () => {
                                x({
                                    fallbackScreenHint: `login`,
                                    callbackUrl: d
                                }), p()
                            },
                            icon: r,
                            children: [(0, R.jsx)(`span`, {
                                className: `hidden sm:inline`,
                                children: u.formatMessage(V.editWithChatGPT)
                            }), (0, R.jsx)(`span`, {
                                className: `inline sm:hidden`,
                                children: u.formatMessage(V.edit)
                            })]
                        }) : (0, R.jsxs)(C, {
                            as: `link`,
                            to: d,
                            openNewTab: !0,
                            icon: r,
                            onClick: p,
                            children: [(0, R.jsx)(`span`, {
                                className: `hidden sm:inline`,
                                children: u.formatMessage(V.editWithChatGPT)
                            }), (0, R.jsx)(`span`, {
                                className: `inline sm:hidden`,
                                children: u.formatMessage(V.edit)
                            })]
                        })]
                    })]
                })
            })
        }, V = k({
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
        a(), se(), ue(), E(), je(), De(), oe(), te(), U = t(O()), j(), W = A(), G = [{
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
        }, J = k({
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
            let r = D(),
                [i, a] = (0, U.useState)(null),
                [o, s] = (0, U.useState)(null),
                [c, l] = (0, U.useState)(null),
                [d, f] = (0, U.useState)(`toplevel`),
                p = () => {
                    s(null), l(null), f(`toplevel`), a(null), n()
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
            return (0, W.jsxs)(u, {
                testId: `modal-report`,
                isOpen: t,
                showCloseButton: !0,
                onClose: p,
                title: r.formatMessage(J.dialogTitle),
                type: `success`,
                primaryButton: d === `takedown` && !g && (0, W.jsx)(C, {
                    onClick: () => m(),
                    disabled: !c,
                    loading: h,
                    children: h ? r.formatMessage(J.submittingButton) : r.formatMessage(J.reportButton)
                }),
                secondaryButton: d === `takedown` && !g && (0, W.jsx)(C, {
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
                        children: (0, W.jsx)(C, {
                            className: `text-sm`,
                            color: `secondary`,
                            onClick: () => {
                                s(e.id), f(`takedown`)
                            },
                            children: e.label
                        })
                    }, e.id))
                }), d === `takedown` && o && (0, W.jsxs)(W.Fragment, {
                    children: [(0, W.jsx)(ne, {
                        className: `flex grow flex-col gap-4`,
                        children: K[o].map(e => {
                            let t = e.id === c;
                            return (0, W.jsx)(re, {
                                className: `flex grow items-center justify-start gap-2`,
                                value: e.id,
                                children: (0, W.jsx)(Oe, {
                                    htmlFor: e.id,
                                    className: `items-center text-start text-sm`,
                                    onClick: () => {
                                        l(e.id)
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
    c.safePost(`/textdoc/shared/{shared_textdoc_id}/report`, {
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
    disableNetworkRequests: r,
    disablePermissions: i,
    unsafeAllowAllNetworkRequests: a,
    showHeader: o = !0
}) {
    let s = M(e.type) && N(e.type, e.content),
        c = !t && s,
        [l, u] = (0, Z.useState)(c),
        [d, f] = (0, Z.useState)(!1),
        p = D(),
        m = (0, Z.useRef)(null),
        h = (0, Z.useRef)(null),
        _ = (0, Z.useRef)(null),
        [v, y] = (0, Z.useState)(!1),
        b = c && l,
        x = () => {
            t || (l ? (_.current?.stopCode(), u(!1)) : (u(!0), _.current?.runCode(e.type, e.content).finally(() => u(!1))))
        },
        {
            type: C,
            content: w
        } = e,
        T = g(),
        E = !r && a,
        O = r ? p.formatMessage($.networkAccessDenied) : void 0;
    (0, Z.useEffect)(() => {
        if (T) {
            if (t) {
                u(!1), _.current?.stopCode();
                return
            }
            s && (u(!0), _.current?.runCode(C, w))
        }
    }, [t, s, T, w, C]);
    let {
        isOpen: k,
        currentTime: A
    } = Ce();
    return e.type === ae.DOCUMENT ? (0, Q.jsxs)(`div`, {
        className: `flex h-full w-full flex-col items-center overflow-hidden`,
        children: [(0, Q.jsxs)(`div`, {
            className: S(`flex h-full w-full max-w-[1000px]`, k && `max-w-[1200px]`),
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
            }), typeof A == `number` && k && (0, Q.jsx)(I, {
                sharedTextDocId: e.sharedTextdocId
            })]
        }), (0, Q.jsx)(Y, {
            reportFunction: t => {
                X(e, t)
            },
            isOpen: v,
            dismissModal: () => y(!1)
        })]
    }) : M(e.type) ? (0, Q.jsxs)(`div`, {
        className: `justify-top flex h-full w-full flex-col justify-between overflow-auto`,
        children: [(0, Q.jsxs)(`div`, {
            className: `flex grow flex-col justify-start overflow-auto`,
            children: [o && (0, Q.jsx)(B, {
                areButtonsFullWidth: !0,
                sharedTextdoc: e,
                onClickCodePreview: x,
                isCodeRunning: l,
                showRunCodeButton: !s && !t,
                setIsReportModalOpen: y
            }), (0, Q.jsx)(`div`, {
                className: b ? `grow` : void 0,
                children: (0, Q.jsx)(n, {
                    children: (0, Q.jsx)(ve, {
                        id: e.sharedTextdocId,
                        isSharedSurface: !0,
                        ref: h,
                        enableTransition: s,
                        visuallyHidden: !b,
                        title: e.title,
                        networkPolicy: r ? `none` : `deps-and-user-approved`,
                        networkAccessDeniedMessage: O,
                        disablePermissions: i,
                        unsafeAllowAllNetworkRequests: E,
                        onRetryCodeRun: () => {
                            t || _.current?.runCode(C, w)
                        }
                    })
                })
            }), !b && (0, Q.jsx)(`div`, {
                children: (0, Q.jsx)(L, {
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
                    editorRef: m,
                    isPreview: !0
                })
            })]
        }), (0, Q.jsx)(`div`, {
            className: t || !l && s ? `hidden` : ``,
            children: (0, Q.jsx)(ge, {
                ref: _,
                isOpen: d,
                onOpenChange: f,
                sandboxRef: h,
                textdocId: `publishedCanvasTextdoc`,
                textdocContent: e.content,
                textdocTitle: e.title,
                isTextdocAttachedPending: !1,
                highlightLine: e => m.current?.highlightLine(e),
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
        children: p.formatMessage($.unsupportedTextdocType)
    })
}
var Z, Q, $, Pe = e((() => {
    we(), Te(), P(), fe(), F(), be(), Ae(), ie(), ye(), _e(), Se(), Me(), l(), s(), _(), i(), Z = t(O()), j(), Q = A(), $ = k({
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
//# sourceMappingURL=d423cc1e-ov7sqyqq62kqp0a6.js.map