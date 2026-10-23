import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    AE as r,
    Aw as i,
    CR as a,
    Crt as o,
    Fz as s,
    Iz as c,
    K5 as l,
    Knt as u,
    Lit as d,
    Ow as ee,
    Rit as f,
    TR as p,
    U1 as m,
    Vw as h,
    Wnt as g,
    Yi as te,
    Zi as _,
    a0 as ne,
    hrt as re,
    irt as ie,
    it as v,
    j5 as ae,
    kE as oe,
    nt as y,
    ot as b,
    q1 as se,
    q5 as x,
    rq as ce,
    rrt as le,
    sst as S,
    tt as C,
    uq as ue,
    wh as de,
    xh as fe,
    zw as w
} from "./4813494d-mdvd4786a87166cc.js";
import {
    At as T,
    Bn as E,
    Nn as D,
    Q as pe,
    Rn as O,
    Vn as me,
    it as k,
    wn as A,
    zn as j
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AUn as M,
    BKn as N,
    G4t as P,
    HKn as F,
    J4t as I,
    MUn as L,
    U4t as R,
    ckt as z,
    iVt as he,
    q4t as ge,
    rVt as _e,
    skt as B
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $f as V,
    ep as H
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    ad as ve,
    jh as ye,
    nd as be,
    wh as xe
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    r as Se,
    t as U
} from "./673c0d9b-dg1a8y9uzorizeey.js";
import {
    n as Ce,
    t as we
} from "./4c6c4e54-jesggd6p9hwq69ey.js";

function Te() {
    let e = j();
    return (0, W.jsx)(`a`, {
        href: `https://forms.gle/arrj4MzLN1YqdR8S6`,
        target: `_blank`,
        rel: `noopener noreferrer`,
        "aria-label": e.formatMessage({
            id: `aardvark.feedback.cta`,
            defaultMessage: `Feedback survey`
        }),
        title: e.formatMessage({
            id: `aardvark.feedback.cta`,
            defaultMessage: `Feedback survey`
        }),
        "data-testid": `aardvark-feedback-fab`,
        className: `border-token-border-light bg-token-main-surface-primary shadow-long hover:bg-token-main-surface-secondary fixed end-4 bottom-4 z-50 flex h-10 items-center justify-center rounded-full border px-4 text-sm font-medium focus:outline-hidden`,
        children: (0, W.jsx)(D, {
            id: `aardvark.feedback.cta`,
            defaultMessage: `Feedback survey`
        })
    })
}
var W, Ee = e((() => {
    O(), W = E()
}));

function De() {
    let e = !f();
    return B.markStart(`AardvarkLoginOrProfileMenu`), B.markRendered(`AardvarkLoginOrProfileMenu`), e ? (0, G.jsx)(be, {}) : (0, G.jsx)(Oe, {})
}

function Oe() {
    let e = m(),
        t = j(),
        {
            data: n
        } = ne(),
        r = p(),
        i = S();
    if (!e) return (0, G.jsx)(`div`, {
        className: `flex h-10 w-10 items-center justify-center`,
        children: (0, G.jsx)(`div`, {
            className: `bg-token-bg-tertiary h-8 w-8 rounded-full`
        })
    });
    let {
        showAccountSwitcher: a
    } = R({
        accountState: n,
        currentSession: i,
        user: r
    }), o = a, s = () => {
        o && I()
    };
    return (0, G.jsxs)(M, {
        onOpenChange: e => {
            e && s()
        },
        triggerButton: (0, G.jsx)(`button`, {
            onFocus: s,
            onMouseEnter: s,
            onClick: () => {
                g.logEvent(`Account: Open Profile Menu`), re.logEvent(`chatgpt_account_open_profile_menu`)
            },
            "aria-label": t.formatMessage({
                id: `aardvark.aardvarkProfile.openProfileMenu`,
                defaultMessage: `Open Profile Menu`
            }),
            "data-testid": `profile-button`,
            className: `text-token-text-secondary hover:text-token-text-primary hover:bg-token-interactive-bg-secondary-hover radix-state-open:text-token-text-secondary flex h-10 w-10 items-center justify-center rounded-full px-1 transition focus-visible:outline-0`,
            children: (0, G.jsx)(fe, {
                showPlanTypeBadge: !0
            })
        }),
        children: [(0, G.jsx)(xe, {
            showAccountSwitcher: o,
            accountSwitcherRedirectUrl: `/aardvark?refresh_account=true`
        }), !1]
    })
}
var G, ke = e((() => {
    de(), L(), ve(), ge(), P(), ye(), se(), a(), d(), u(), z(), o(), O(), G = E()
}));

function Ae({
    className: e
}) {
    let t = !ae(ue),
        n = T(),
        {
            hasMalwareAccess: r
        } = Se(),
        i = [{
            key: `findings`,
            to: `/aardvark`,
            label: (0, K.jsx)(D, {
                id: `aardvark.home.tab.findings`,
                defaultMessage: `Findings`
            })
        }, {
            key: `scans`,
            to: `/aardvark/scans`,
            label: (0, K.jsx)(D, {
                id: `aardvark.home.tab.scans`,
                defaultMessage: `Scans`
            })
        }, {
            key: `malware`,
            to: `/aardvark/malware`,
            requiresMalware: !0,
            label: (0, K.jsx)(D, {
                id: `aardvark.home.tab.malware`,
                defaultMessage: `Malware`
            })
        }],
        a = e => !e.requiresMalware || r === !0,
        o = e => e === `/aardvark` ? n.pathname === `/aardvark` || n.pathname === `/aardvark/` || n.pathname.startsWith(`/aardvark/findings`) : n.pathname.startsWith(e),
        c = e => l(`inline-flex items-center px-1.5 py-1.5 text-xs font-medium transition decoration-2 underline-offset-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-outline-primary md:px-2.5 md:py-2 md:text-sm`, e ? `underline decoration-token-border-accent text-token-text-primary` : `text-token-text-secondary hover:text-token-text-primary hover:underline hover:decoration-token-border-accent`);
    return (0, K.jsxs)(`div`, {
        className: l(t ? `grid w-full grid-cols-[auto_auto] items-center gap-2 px-3 py-3` : `sticky top-0 flex w-full items-center justify-between gap-3 py-3 ps-3 pe-1`, e),
        children: [(0, K.jsx)(`div`, {
            className: `flex items-center gap-3`,
            children: (0, K.jsxs)(`div`, {
                className: `flex items-center`,
                children: [(0, K.jsx)(V, {
                    className: `h-6 w-6`
                }), (0, K.jsxs)(k, {
                    to: `/aardvark`,
                    className: l(`text-token-text-primary flex items-center gap-2 hover:cursor-pointer`, !t && `ms-[5px]`),
                    children: [(0, K.jsx)(D, {
                        id: `fDk85I`,
                        defaultMessage: `Codex Security`
                    }), (0, K.jsx)(`span`, {
                        className: `bg-token-bg-tertiary text-token-text-tertiary border-token-border-light inline-flex items-center rounded-sm border px-1.5 py-0.5 text-[10px] leading-none font-medium whitespace-nowrap`,
                        children: (0, K.jsx)(D, {
                            id: `TjdxzQ`,
                            defaultMessage: `Formerly Aardvark`
                        })
                    })]
                })]
            })
        }), (0, K.jsxs)(`div`, {
            className: l(`flex items-center gap-2`, t ? `justify-self-end` : `ms-auto`),
            children: [(0, K.jsx)(`div`, {
                className: `flex items-center gap-1`,
                children: he(i, e => a(e) ? (0, K.jsx)(k, {
                    to: e.to,
                    "aria-current": o(e.to) ? `page` : void 0,
                    className: c(o(e.to)),
                    children: e.label
                }, e.key) : null)
            }), (0, K.jsx)(s, {
                fallback: (0, K.jsx)(`div`, {
                    className: `h-10 w-10`
                }),
                children: (0, K.jsx)(De, {})
            })]
        })]
    })
}
var K, je = e((() => {
    ke(), U(), H(), n(), c(), ce(), x(), _e(), O(), pe(), K = E()
}));

function Me(e) {
    "use forget";
    let t = (0, q.c)(7),
        {
            className: n
        } = e,
        {
            eligible: r,
            isLoading: i
        } = b(C.hasSeenCodexSecurityAnnouncement);
    if (!r || i) return null;
    let a = Ne,
        o;
    t[0] === n ? o = t[1] : (o = l(`bg-token-main-surface-secondary text-token-text-primary shadow-xxs rounded-2xl border border-white/5 py-3 ps-4 pe-4`, n), t[0] = n, t[1] = o);
    let s;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, J.jsx)(V, {
        className: `mt-0.5 h-5 w-5 shrink-0`
    }), t[2] = s) : s = t[2];
    let c;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, J.jsx)(`div`, {
        className: `text-sm font-medium`,
        children: (0, J.jsx)(D, {
            id: `codexSecurity.announcement.title`,
            defaultMessage: `Aardvark is now Codex Security`
        })
    }), t[3] = c) : c = t[3];
    let u;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, J.jsxs)(`div`, {
        className: `flex items-start gap-3`,
        children: [s, (0, J.jsxs)(`div`, {
            className: `space-y-1`,
            children: [c, (0, J.jsx)(`div`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, J.jsx)(D, {
                    id: `codexSecurity.announcement.body.v2`,
                    defaultMessage: `Access Codex Security from Codex's navigation bar.`
                })
            })]
        })]
    }), t[4] = u) : u = t[4];
    let d;
    return t[5] === o ? d = t[6] : (d = (0, J.jsx)(te, {
        type: `normal`,
        className: o,
        onDismiss: a,
        content: u
    }), t[5] = o, t[6] = d), d
}

function Ne() {
    return v(C.hasSeenCodexSecurityAnnouncement)
}
var q, J, Pe = e((() => {
    q = A(), _(), H(), y(), x(), O(), J = E()
}));

function Fe() {
    return b(C.hasSeenAardvarkOnboarding)
}

function Ie({
    onClose: e
}) {
    let t = j(),
        {
            eligible: n,
            isLoading: r
        } = Fe(),
        [i, a] = (0, Y.useState)(n),
        [o, s] = (0, Y.useState)(0);
    (0, Y.useEffect)(() => {
        a(n), s(0)
    }, [n]);
    let c = (0, Y.useMemo)(() => [{
        id: `what-is-aardvark`,
        eyebrow: (0, X.jsx)(D, {
            id: `aardvark.onboarding.step.what.eyebrow`,
            defaultMessage: `Overview`
        }),
        pillText: (0, X.jsx)(D, {
            id: `aardvark.onboarding.step.what.pill`,
            defaultMessage: `OVERVIEW`
        }),
        title: (0, X.jsx)(D, {
            id: `aardvark.onboarding.step.what.title`,
            defaultMessage: `Welcome to Codex Security!`
        }),
        description: [(0, X.jsx)(D, {
            id: `aardvark.onboarding.step.what.summary`,
            defaultMessage: `Codex Security thinks like a security researcher:`
        }, `what-summary`)],
        bullets: [(0, X.jsx)(D, {
            id: `aardvark.onboarding.step.what.scan`,
            defaultMessage: `Builds a repository-wide threat model to understand security objectives and architecture.`
        }, `scan`), (0, X.jsx)(D, {
            id: `aardvark.onboarding.step.what.prioritize`,
            defaultMessage: `Scans commit-level changes and full history to detect potential vulnerabilities with detailed explanations.`
        }, `prioritize`), (0, X.jsx)(D, {
            id: `aardvark.onboarding.step.what.validate`,
            defaultMessage: `Auto-validates issues when possible by safely attempting to trigger them in an isolated environment.`
        }, `validate`), (0, X.jsx)(D, {
            id: `aardvark.onboarding.step.what.patches`,
            defaultMessage: `Generates and evaluates fix suggestions using Codex, attaching high-quality patches for human review.`
        }, `patches`)]
    }, {
        id: `connect-and-configure`,
        eyebrow: (0, X.jsx)(D, {
            id: `aardvark.onboarding.step.configure.eyebrow`,
            defaultMessage: `Get set up`
        }),
        pillText: (0, X.jsx)(D, {
            id: `aardvark.onboarding.step.configure.pill`,
            defaultMessage: `GET SET UP`
        }),
        title: (0, X.jsx)(D, {
            id: `aardvark.onboarding.step.configure.title`,
            defaultMessage: `Connect GitHub and configure scans`
        }),
        description: [(0, X.jsx)(D, {
            id: `aardvark.onboarding.step.configure.summary`,
            defaultMessage: `Connect GitHub and select the repositories you'd like to scan!`
        }, `configure-summary`)],
        bullets: [(0, X.jsx)(D, {
            id: `aardvark.onboarding.step.configure.lookbackPeriod`,
            defaultMessage: `For standard repositories, select an indefinite lookback period. If your codebase is very large, a shorter lookback period may deliver faster results.`
        }, `lookbackPeriod`), (0, X.jsx)(D, {
            id: `aardvark.onboarding.step.configure.codexEnvironment`,
            defaultMessage: `We find that the default codex environment usually works fine, but if you have unique environment details, please add them during setup.`
        }, `codexEnvironment`)]
    }, {
        id: `findings`,
        eyebrow: (0, X.jsx)(D, {
            id: `aardvark.onboarding.step.findings.eyebrow`,
            defaultMessage: `See results`
        }),
        pillText: (0, X.jsx)(D, {
            id: `aardvark.onboarding.step.findings.pill`,
            defaultMessage: `SEE RESULTS`
        }),
        title: (0, X.jsx)(D, {
            id: `aardvark.onboarding.step.findings.title`,
            defaultMessage: `Review findings and recommendations`
        }),
        description: [(0, X.jsx)(D, {
            id: `aardvark.onboarding.step.findings.summary`,
            defaultMessage: `Codex Security will spend a lot of time thinking about your code, so it may take a few days to get good results back.`
        }, `findings-summary`), (0, X.jsx)(D, {
            id: `aardvark.onboarding.step.findings.summary-2`,
            defaultMessage: `Check back in a bit to see the most critical findings, read Codex Security reasoning and generate patches!`
        }, `findings-summary-2`)]
    }], []);
    if (r || !i) return null;
    let u = () => {
            v(C.hasSeenAardvarkOnboarding), a(!1), e?.()
        },
        d = () => {
            if (o === c.length - 1) {
                u();
                return
            }
            s(e => Math.min(e + 1, c.length - 1))
        },
        f = () => {
            s(e => Math.max(e - 1, 0))
        },
        p = c[o],
        m = o === 0,
        h = o === c.length - 1,
        g = (0, X.jsxs)(`div`, {
            className: `flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between`,
            children: [(0, X.jsx)(`div`, {
                className: `order-2 flex w-full justify-center sm:order-1 sm:justify-center`,
                children: (0, X.jsx)(`div`, {
                    className: `flex items-center justify-center gap-2`,
                    "aria-label": t.formatMessage({
                        id: `aardvark.onboarding.progress`,
                        defaultMessage: `Codex Security onboarding progress`
                    }),
                    children: c.map((e, t) => (0, X.jsx)(`span`, {
                        className: l(`inline-block h-2.5 w-2.5 rounded-full border transition`, t === o ? `bg-token-border-accent border-token-border-accent shadow-token-main-surface-primary shadow-[0_0_0_4px]` : `bg-token-main-surface-secondary border-token-border-strong/70`)
                    }, e.id))
                })
            }), (0, X.jsxs)(`div`, {
                className: `order-1 flex items-center justify-end gap-2 sm:order-2`,
                children: [!m && (0, X.jsxs)(w.Button, {
                    color: `secondary`,
                    onClick: f,
                    className: `gap-2`,
                    children: [(0, X.jsx)(`span`, {
                        "aria-hidden": !0,
                        className: `ms-1`,
                        children: (0, X.jsx)(D, {
                            id: `aardvark.onboarding.button.backArrow`,
                            defaultMessage: `←`
                        })
                    }), (0, X.jsx)(`span`, {
                        className: `ms-1`,
                        children: (0, X.jsx)(D, {
                            id: `aardvark.onboarding.button.back`,
                            defaultMessage: `Back`
                        })
                    })]
                }), (0, X.jsxs)(w.Button, {
                    color: `primary`,
                    onClick: d,
                    className: `gap-2`,
                    children: [(0, X.jsx)(`span`, {
                        className: `me-1`,
                        children: h ? (0, X.jsx)(D, {
                            id: `aardvark.onboarding.button.finish`,
                            defaultMessage: `Start using Codex Security`
                        }) : (0, X.jsx)(D, {
                            id: `aardvark.onboarding.button.next`,
                            defaultMessage: `Next`
                        })
                    }), !h && (0, X.jsx)(`span`, {
                        "aria-hidden": !0,
                        className: `me-1`,
                        children: (0, X.jsx)(D, {
                            id: `aardvark.onboarding.button.nextArrow`,
                            defaultMessage: `→`
                        })
                    })]
                })]
            })]
        });
    return (0, X.jsx)(ee, {
        isOpen: !0,
        onClose: u,
        testId: `modal-aardvark-onboarding`,
        position: `center`,
        size: `large`,
        showCloseButton: !1,
        showOverlayBackground: !0,
        shouldIgnoreClickOutside: !0,
        className: `max-w-[760px]`,
        contentClassName: `min-h-[400px] flex flex-col bg-token-bg-primary`,
        isScrollable: !1,
        title: (0, X.jsxs)(`div`, {
            className: `flex items-center gap-2.5`,
            children: [(0, X.jsx)(V, {
                className: `h-7 w-7 shrink-0`
            }), (0, X.jsx)(`span`, {
                className: `text-token-text-primary text-lg font-semibold`,
                children: p.title
            })]
        }),
        textCenter: !0,
        headerAccessory: (0, X.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, X.jsx)(`span`, {
                className: `bg-token-main-surface-secondary/80 text-token-text-tertiary rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase`,
                children: p.pillText
            })
        }),
        footerContent: g,
        children: (0, X.jsx)(`div`, {
            className: `flex-1 overflow-y-auto`,
            children: (0, X.jsxs)(`div`, {
                className: `text-token-text-primary flex flex-col gap-4 px-5 py-4 lg:px-7`,
                children: [(0, X.jsx)(`div`, {
                    className: `text-token-text-primary space-y-2.5 text-[15px] leading-6`,
                    children: p.description.map((e, t) => (0, X.jsx)(`p`, {
                        children: e
                    }, t))
                }), p.bullets ? (0, X.jsx)(`ul`, {
                    className: `text-token-text-secondary grid list-disc gap-2.5 ps-5 text-[15px] leading-6`,
                    children: p.bullets.map((e, t) => (0, X.jsx)(`li`, {
                        children: e
                    }, t))
                }) : null]
            })
        })
    })
}
var Y, X, Le = e((() => {
    H(), h(), i(), y(), x(), Y = t(me()), O(), X = E()
}));

function Re(e) {
    "use forget";
    let t = (0, Z.c)(7),
        {
            children: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsxs)(N.Header, {
        children: [(0, Q.jsx)($, {
            children: (0, Q.jsx)(Ae, {})
        }), (0, Q.jsx)(Ie, {})]
    }), t[0] = r) : r = t[0];
    let i;
    t[1] === n ? i = t[2] : (i = (0, Q.jsxs)(N, {
        children: [r, (0, Q.jsx)(`div`, {
            className: `no-scrollbar h-full w-full`,
            children: (0, Q.jsx)(`div`, {
                className: `z-0 mx-auto flex w-[90%] max-w-[1600px] flex-col`,
                children: n
            })
        })]
    }), t[1] = n, t[2] = i);
    let a, o;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsxs)(`div`, {
        className: `fixed inset-x-0 bottom-8 z-30 flex flex-col items-center gap-3 px-4`,
        children: [(0, Q.jsx)(Me, {
            className: `w-full max-w-3xl`
        }), (0, Q.jsx)(we, {
            className: `w-full max-w-3xl`,
            storageKey: le.CodexSecurityChangelogLastViewedDate
        })]
    }), o = (0, Q.jsx)(Te, {}), t[3] = a, t[4] = o) : (a = t[3], o = t[4]);
    let s;
    return t[5] === i ? s = t[6] : (s = (0, Q.jsxs)(Q.Fragment, {
        children: [i, a, o]
    }), t[5] = i, t[6] = s), s
}
var Z, Q, $, ze = e((() => {
    Z = A(), Ce(), Ee(), je(), Pe(), Le(), F(), ie(), r(), Q = E(), $ = oe.div`draggable no-draggable-children sticky top-0 p-3 flex items-center justify-between z-20 h-header-height font-semibold bg-token-bg-primary`
}));
export {
    ze as n, Re as t
};
//# sourceMappingURL=d8ff9f68-f8lusngi7xv48d5a.js.map