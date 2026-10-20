import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ch as n,
    Cw as r,
    Fot as i,
    Iw as a,
    Ji as o,
    Mnt as s,
    Oz as c,
    P1 as l,
    P5 as u,
    Pw as d,
    R1 as f,
    TE as p,
    Tw as m,
    Unt as h,
    X1 as g,
    X5 as _,
    Xi as ee,
    Y5 as v,
    Znt as y,
    bR as b,
    bh as te,
    bnt as ne,
    dit as re,
    fit as ie,
    g8 as ae,
    it as x,
    jnt as oe,
    kz as se,
    nt as S,
    oq as ce,
    ot as C,
    pq as le,
    tt as w,
    vR as ue,
    vnt as de,
    wE as T
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    At as E,
    Bn as D,
    Nn as O,
    Q as fe,
    Rn as k,
    Vn as pe,
    it as A,
    wn as j,
    zn as M
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FHn as N,
    HGn as P,
    J4t as F,
    K4t as I,
    LHn as L,
    W4t as R,
    WGn as z,
    Y4t as B,
    _kt as me,
    gkt as V,
    mVt as he,
    pVt as ge
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    np as H,
    tp as U
} from "./30901919-e8h11sw136qen6v0.js";
import {
    $u as _e,
    Oh as ve,
    nd as ye,
    xh as be
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
import {
    r as xe,
    t as Se
} from "./673c0d9b-lrojaas10la4mx4n.js";
import {
    n as Ce,
    t as we
} from "./4c6c4e54-dbduom2zudiqaid8.js";

function Te() {
    let e = M();
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
        children: (0, W.jsx)(O, {
            id: `aardvark.feedback.cta`,
            defaultMessage: `Feedback survey`
        })
    })
}
var W, Ee = e((() => {
    k(), W = D()
}));

function De() {
    let e = !ie();
    return V.markStart(`AardvarkLoginOrProfileMenu`), V.markRendered(`AardvarkLoginOrProfileMenu`), e ? (0, G.jsx)(_e, {}) : (0, G.jsx)(Oe, {})
}

function Oe() {
    let e = l(),
        t = M(),
        {
            data: n
        } = g(),
        r = b(),
        a = i();
    if (!e) return (0, G.jsx)(`div`, {
        className: `flex h-10 w-10 items-center justify-center`,
        children: (0, G.jsx)(`div`, {
            className: `bg-token-bg-tertiary h-8 w-8 rounded-full`
        })
    });
    let {
        showAccountSwitcher: o
    } = R({
        accountState: n,
        currentSession: a,
        user: r
    }), s = o, c = () => {
        s && B()
    };
    return (0, G.jsxs)(N, {
        onOpenChange: e => {
            e && c()
        },
        triggerButton: (0, G.jsx)(`button`, {
            onFocus: c,
            onMouseEnter: c,
            onClick: () => {
                de.logEvent(`Account: Open Profile Menu`), h.logEvent(`chatgpt_account_open_profile_menu`)
            },
            "aria-label": t.formatMessage({
                id: `aardvark.aardvarkProfile.openProfileMenu`,
                defaultMessage: `Open Profile Menu`
            }),
            "data-testid": `profile-button`,
            className: `text-token-text-secondary hover:text-token-text-primary hover:bg-token-interactive-bg-secondary-hover radix-state-open:text-token-text-secondary flex h-10 w-10 items-center justify-center rounded-full px-1 transition focus-visible:outline-0`,
            children: (0, G.jsx)(te, {
                showPlanTypeBadge: !0
            })
        }),
        children: [(0, G.jsx)(be, {
            showAccountSwitcher: s,
            accountSwitcherRedirectUrl: `/aardvark?refresh_account=true`
        }), !1]
    })
}
var G, ke = e((() => {
    n(), L(), ye(), F(), I(), ve(), f(), ue(), re(), ne(), me(), y(), k(), G = D()
}));

function Ae({
    className: e
}) {
    let t = !u(le),
        n = E(),
        {
            hasMalwareAccess: r
        } = xe(),
        i = [{
            key: `findings`,
            to: `/aardvark`,
            label: (0, K.jsx)(O, {
                id: `aardvark.home.tab.findings`,
                defaultMessage: `Findings`
            })
        }, {
            key: `scans`,
            to: `/aardvark/scans`,
            label: (0, K.jsx)(O, {
                id: `aardvark.home.tab.scans`,
                defaultMessage: `Scans`
            })
        }, {
            key: `malware`,
            to: `/aardvark/malware`,
            requiresMalware: !0,
            label: (0, K.jsx)(O, {
                id: `aardvark.home.tab.malware`,
                defaultMessage: `Malware`
            })
        }],
        a = e => !e.requiresMalware || r === !0,
        o = e => e === `/aardvark` ? n.pathname === `/aardvark` || n.pathname === `/aardvark/` || n.pathname.startsWith(`/aardvark/findings`) : n.pathname.startsWith(e),
        s = e => v(`inline-flex items-center px-1.5 py-1.5 text-xs font-medium transition decoration-2 underline-offset-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-outline-primary md:px-2.5 md:py-2 md:text-sm`, e ? `underline decoration-token-border-accent text-token-text-primary` : `text-token-text-secondary hover:text-token-text-primary hover:underline hover:decoration-token-border-accent`);
    return (0, K.jsxs)(`div`, {
        className: v(t ? `grid w-full grid-cols-[auto_auto] items-center gap-2 px-3 py-3` : `sticky top-0 flex w-full items-center justify-between gap-3 py-3 ps-3 pe-1`, e),
        children: [(0, K.jsx)(`div`, {
            className: `flex items-center gap-3`,
            children: (0, K.jsxs)(`div`, {
                className: `flex items-center`,
                children: [(0, K.jsx)(U, {
                    className: `h-6 w-6`
                }), (0, K.jsxs)(A, {
                    to: `/aardvark`,
                    className: v(`text-token-text-primary flex items-center gap-2 hover:cursor-pointer`, !t && `ms-[5px]`),
                    children: [(0, K.jsx)(O, {
                        id: `fDk85I`,
                        defaultMessage: `Codex Security`
                    }), (0, K.jsx)(`span`, {
                        className: `bg-token-bg-tertiary text-token-text-tertiary border-token-border-light inline-flex items-center rounded-sm border px-1.5 py-0.5 text-[10px] leading-none font-medium whitespace-nowrap`,
                        children: (0, K.jsx)(O, {
                            id: `TjdxzQ`,
                            defaultMessage: `Formerly Aardvark`
                        })
                    })]
                })]
            })
        }), (0, K.jsxs)(`div`, {
            className: v(`flex items-center gap-2`, t ? `justify-self-end` : `ms-auto`),
            children: [(0, K.jsx)(`div`, {
                className: `flex items-center gap-1`,
                children: he(i, e => a(e) ? (0, K.jsx)(A, {
                    to: e.to,
                    "aria-current": o(e.to) ? `page` : void 0,
                    className: s(o(e.to)),
                    children: e.label
                }, e.key) : null)
            }), (0, K.jsx)(c, {
                fallback: (0, K.jsx)(`div`, {
                    className: `h-10 w-10`
                }),
                children: (0, K.jsx)(De, {})
            })]
        })]
    })
}
var K, je = e((() => {
    ke(), Se(), H(), ae(), se(), ce(), _(), ge(), k(), fe(), K = D()
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
        } = C(w.hasSeenCodexSecurityAnnouncement);
    if (!r || i) return null;
    let a = Ne,
        s;
    t[0] === n ? s = t[1] : (s = v(`bg-token-main-surface-secondary text-token-text-primary shadow-xxs rounded-2xl border border-white/5 py-3 ps-4 pe-4`, n), t[0] = n, t[1] = s);
    let c;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, J.jsx)(U, {
        className: `mt-0.5 h-5 w-5 shrink-0`
    }), t[2] = c) : c = t[2];
    let l;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, J.jsx)(`div`, {
        className: `text-sm font-medium`,
        children: (0, J.jsx)(O, {
            id: `codexSecurity.announcement.title`,
            defaultMessage: `Aardvark is now Codex Security`
        })
    }), t[3] = l) : l = t[3];
    let u;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, J.jsxs)(`div`, {
        className: `flex items-start gap-3`,
        children: [c, (0, J.jsxs)(`div`, {
            className: `space-y-1`,
            children: [l, (0, J.jsx)(`div`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, J.jsx)(O, {
                    id: `codexSecurity.announcement.body.v2`,
                    defaultMessage: `Access Codex Security from Codex's navigation bar.`
                })
            })]
        })]
    }), t[4] = u) : u = t[4];
    let d;
    return t[5] === s ? d = t[6] : (d = (0, J.jsx)(o, {
        type: `normal`,
        className: s,
        onDismiss: a,
        content: u
    }), t[5] = s, t[6] = d), d
}

function Ne() {
    return x(w.hasSeenCodexSecurityAnnouncement)
}
var q, J, Pe = e((() => {
    q = j(), ee(), H(), S(), _(), k(), J = D()
}));

function Fe() {
    return C(w.hasSeenAardvarkOnboarding)
}

function Ie({
    onClose: e
}) {
    let t = M(),
        {
            eligible: n,
            isLoading: i
        } = Fe(),
        [a, o] = (0, Y.useState)(n),
        [s, c] = (0, Y.useState)(0);
    (0, Y.useEffect)(() => {
        o(n), c(0)
    }, [n]);
    let l = (0, Y.useMemo)(() => [{
        id: `what-is-aardvark`,
        eyebrow: (0, X.jsx)(O, {
            id: `aardvark.onboarding.step.what.eyebrow`,
            defaultMessage: `Overview`
        }),
        pillText: (0, X.jsx)(O, {
            id: `aardvark.onboarding.step.what.pill`,
            defaultMessage: `OVERVIEW`
        }),
        title: (0, X.jsx)(O, {
            id: `aardvark.onboarding.step.what.title`,
            defaultMessage: `Welcome to Codex Security!`
        }),
        description: [(0, X.jsx)(O, {
            id: `aardvark.onboarding.step.what.summary`,
            defaultMessage: `Codex Security thinks like a security researcher:`
        }, `what-summary`)],
        bullets: [(0, X.jsx)(O, {
            id: `aardvark.onboarding.step.what.scan`,
            defaultMessage: `Builds a repository-wide threat model to understand security objectives and architecture.`
        }, `scan`), (0, X.jsx)(O, {
            id: `aardvark.onboarding.step.what.prioritize`,
            defaultMessage: `Scans commit-level changes and full history to detect potential vulnerabilities with detailed explanations.`
        }, `prioritize`), (0, X.jsx)(O, {
            id: `aardvark.onboarding.step.what.validate`,
            defaultMessage: `Auto-validates issues when possible by safely attempting to trigger them in an isolated environment.`
        }, `validate`), (0, X.jsx)(O, {
            id: `aardvark.onboarding.step.what.patches`,
            defaultMessage: `Generates and evaluates fix suggestions using Codex, attaching high-quality patches for human review.`
        }, `patches`)]
    }, {
        id: `connect-and-configure`,
        eyebrow: (0, X.jsx)(O, {
            id: `aardvark.onboarding.step.configure.eyebrow`,
            defaultMessage: `Get set up`
        }),
        pillText: (0, X.jsx)(O, {
            id: `aardvark.onboarding.step.configure.pill`,
            defaultMessage: `GET SET UP`
        }),
        title: (0, X.jsx)(O, {
            id: `aardvark.onboarding.step.configure.title`,
            defaultMessage: `Connect GitHub and configure scans`
        }),
        description: [(0, X.jsx)(O, {
            id: `aardvark.onboarding.step.configure.summary`,
            defaultMessage: `Connect GitHub and select the repositories you'd like to scan!`
        }, `configure-summary`)],
        bullets: [(0, X.jsx)(O, {
            id: `aardvark.onboarding.step.configure.lookbackPeriod`,
            defaultMessage: `For standard repositories, select an indefinite lookback period. If your codebase is very large, a shorter lookback period may deliver faster results.`
        }, `lookbackPeriod`), (0, X.jsx)(O, {
            id: `aardvark.onboarding.step.configure.codexEnvironment`,
            defaultMessage: `We find that the default codex environment usually works fine, but if you have unique environment details, please add them during setup.`
        }, `codexEnvironment`)]
    }, {
        id: `findings`,
        eyebrow: (0, X.jsx)(O, {
            id: `aardvark.onboarding.step.findings.eyebrow`,
            defaultMessage: `See results`
        }),
        pillText: (0, X.jsx)(O, {
            id: `aardvark.onboarding.step.findings.pill`,
            defaultMessage: `SEE RESULTS`
        }),
        title: (0, X.jsx)(O, {
            id: `aardvark.onboarding.step.findings.title`,
            defaultMessage: `Review findings and recommendations`
        }),
        description: [(0, X.jsx)(O, {
            id: `aardvark.onboarding.step.findings.summary`,
            defaultMessage: `Codex Security will spend a lot of time thinking about your code, so it may take a few days to get good results back.`
        }, `findings-summary`), (0, X.jsx)(O, {
            id: `aardvark.onboarding.step.findings.summary-2`,
            defaultMessage: `Check back in a bit to see the most critical findings, read Codex Security reasoning and generate patches!`
        }, `findings-summary-2`)]
    }], []);
    if (i || !a) return null;
    let u = () => {
            x(w.hasSeenAardvarkOnboarding), o(!1), e?.()
        },
        f = () => {
            if (s === l.length - 1) {
                u();
                return
            }
            c(e => Math.min(e + 1, l.length - 1))
        },
        p = () => {
            c(e => Math.max(e - 1, 0))
        },
        m = l[s],
        h = s === 0,
        g = s === l.length - 1,
        _ = (0, X.jsxs)(`div`, {
            className: `flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between`,
            children: [(0, X.jsx)(`div`, {
                className: `order-2 flex w-full justify-center sm:order-1 sm:justify-center`,
                children: (0, X.jsx)(`div`, {
                    className: `flex items-center justify-center gap-2`,
                    "aria-label": t.formatMessage({
                        id: `aardvark.onboarding.progress`,
                        defaultMessage: `Codex Security onboarding progress`
                    }),
                    children: l.map((e, t) => (0, X.jsx)(`span`, {
                        className: v(`inline-block h-2.5 w-2.5 rounded-full border transition`, t === s ? `bg-token-border-accent border-token-border-accent shadow-token-main-surface-primary shadow-[0_0_0_4px]` : `bg-token-main-surface-secondary border-token-border-strong/70`)
                    }, e.id))
                })
            }), (0, X.jsxs)(`div`, {
                className: `order-1 flex items-center justify-end gap-2 sm:order-2`,
                children: [!h && (0, X.jsxs)(d.Button, {
                    color: `secondary`,
                    onClick: p,
                    className: `gap-2`,
                    children: [(0, X.jsx)(`span`, {
                        "aria-hidden": !0,
                        className: `ms-1`,
                        children: (0, X.jsx)(O, {
                            id: `aardvark.onboarding.button.backArrow`,
                            defaultMessage: `←`
                        })
                    }), (0, X.jsx)(`span`, {
                        className: `ms-1`,
                        children: (0, X.jsx)(O, {
                            id: `aardvark.onboarding.button.back`,
                            defaultMessage: `Back`
                        })
                    })]
                }), (0, X.jsxs)(d.Button, {
                    color: `primary`,
                    onClick: f,
                    className: `gap-2`,
                    children: [(0, X.jsx)(`span`, {
                        className: `me-1`,
                        children: g ? (0, X.jsx)(O, {
                            id: `aardvark.onboarding.button.finish`,
                            defaultMessage: `Start using Codex Security`
                        }) : (0, X.jsx)(O, {
                            id: `aardvark.onboarding.button.next`,
                            defaultMessage: `Next`
                        })
                    }), !g && (0, X.jsx)(`span`, {
                        "aria-hidden": !0,
                        className: `me-1`,
                        children: (0, X.jsx)(O, {
                            id: `aardvark.onboarding.button.nextArrow`,
                            defaultMessage: `→`
                        })
                    })]
                })]
            })]
        });
    return (0, X.jsx)(r, {
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
            children: [(0, X.jsx)(U, {
                className: `h-7 w-7 shrink-0`
            }), (0, X.jsx)(`span`, {
                className: `text-token-text-primary text-lg font-semibold`,
                children: m.title
            })]
        }),
        textCenter: !0,
        headerAccessory: (0, X.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, X.jsx)(`span`, {
                className: `bg-token-main-surface-secondary/80 text-token-text-tertiary rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase`,
                children: m.pillText
            })
        }),
        footerContent: _,
        children: (0, X.jsx)(`div`, {
            className: `flex-1 overflow-y-auto`,
            children: (0, X.jsxs)(`div`, {
                className: `text-token-text-primary flex flex-col gap-4 px-5 py-4 lg:px-7`,
                children: [(0, X.jsx)(`div`, {
                    className: `text-token-text-primary space-y-2.5 text-[15px] leading-6`,
                    children: m.description.map((e, t) => (0, X.jsx)(`p`, {
                        children: e
                    }, t))
                }), m.bullets ? (0, X.jsx)(`ul`, {
                    className: `text-token-text-secondary grid list-disc gap-2.5 ps-5 text-[15px] leading-6`,
                    children: m.bullets.map((e, t) => (0, X.jsx)(`li`, {
                        children: e
                    }, t))
                }) : null]
            })
        })
    })
}
var Y, X, Le = e((() => {
    H(), a(), m(), S(), _(), Y = t(pe()), k(), X = D()
}));

function Re(e) {
    "use forget";
    let t = (0, Z.c)(7),
        {
            children: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsxs)(P.Header, {
        children: [(0, Q.jsx)($, {
            children: (0, Q.jsx)(Ae, {})
        }), (0, Q.jsx)(Ie, {})]
    }), t[0] = r) : r = t[0];
    let i;
    t[1] === n ? i = t[2] : (i = (0, Q.jsxs)(P, {
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
            storageKey: oe.CodexSecurityChangelogLastViewedDate
        })]
    }), o = (0, Q.jsx)(Te, {}), t[3] = a, t[4] = o) : (a = t[3], o = t[4]);
    let s;
    return t[5] === i ? s = t[6] : (s = (0, Q.jsxs)(Q.Fragment, {
        children: [i, a, o]
    }), t[5] = i, t[6] = s), s
}
var Z, Q, $, ze = e((() => {
    Z = j(), Ce(), Ee(), je(), Pe(), Le(), z(), s(), p(), Q = D(), $ = T.div`draggable no-draggable-children sticky top-0 p-3 flex items-center justify-between z-20 h-header-height font-semibold bg-token-bg-primary`
}));
export {
    ze as n, Re as t
};
//# sourceMappingURL=d8ff9f68-g0f5kiu9attia6nf.js.map