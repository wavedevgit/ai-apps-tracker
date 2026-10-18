import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as n,
    B6 as r,
    BK as i,
    Btt as a,
    Htt as o,
    Ji as s,
    NK as c,
    Nrt as l,
    Prt as u,
    QL as d,
    S1 as f,
    Xi as p,
    _w as m,
    aE as h,
    b5 as g,
    cz as ee,
    dnt as te,
    eR as ne,
    ent as _,
    hw as v,
    i5 as re,
    ih as ie,
    it as y,
    iw as ae,
    lz as oe,
    nt as b,
    o1 as se,
    oE as ce,
    ot as x,
    ow as le,
    rot as ue,
    th as S,
    tt as C,
    u1 as de,
    y5 as w,
    ynt as T
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as fe,
    Bn as E,
    Nn as D,
    Rn as O,
    Vn as pe,
    at as k,
    jt as me,
    wn as A,
    zn as j
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $4t as M,
    AGn as N,
    CHn as P,
    MGn as F,
    THn as I,
    Y4t as L,
    Z4t as R,
    cVt as z,
    ckt as B,
    e3t as he,
    lkt as ge,
    sVt as _e
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    np as V,
    tp as H
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Dh as ve,
    Qu as ye,
    bh as be,
    td as xe
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    r as Se,
    t as Ce
} from "./673c0d9b-mgw9cf750vpkh02r.js";
import {
    n as we,
    t as Te
} from "./4c6c4e54-f98zgyoiem7fmh2a.js";

function Ee() {
    let e = j();
    return (0, U.jsx)(`a`, {
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
        children: (0, U.jsx)(D, {
            id: `aardvark.feedback.cta`,
            defaultMessage: `Feedback survey`
        })
    })
}
var U, De = e((() => {
    O(), U = E()
}));

function Oe() {
    let e = !u();
    return B.markStart(`AardvarkLoginOrProfileMenu`), B.markRendered(`AardvarkLoginOrProfileMenu`), e ? (0, W.jsx)(ye, {}) : (0, W.jsx)(ke, {})
}

function ke() {
    let e = se(),
        t = j(),
        {
            data: n
        } = f(),
        r = ne(),
        i = ue();
    if (!e) return (0, W.jsx)(`div`, {
        className: `flex h-10 w-10 items-center justify-center`,
        children: (0, W.jsx)(`div`, {
            className: `bg-token-bg-tertiary h-8 w-8 rounded-full`
        })
    });
    let {
        showAccountSwitcher: o
    } = L({
        accountState: n,
        currentSession: i,
        user: r
    }), s = o, c = () => {
        s && he()
    };
    return (0, W.jsxs)(P, {
        onOpenChange: e => {
            e && c()
        },
        triggerButton: (0, W.jsx)(`button`, {
            onFocus: c,
            onMouseEnter: c,
            onClick: () => {
                a.logEvent(`Account: Open Profile Menu`), te.logEvent(`chatgpt_account_open_profile_menu`)
            },
            "aria-label": t.formatMessage({
                id: `aardvark.aardvarkProfile.openProfileMenu`,
                defaultMessage: `Open Profile Menu`
            }),
            "data-testid": `profile-button`,
            className: `text-token-text-secondary hover:text-token-text-primary hover:bg-token-interactive-bg-secondary-hover radix-state-open:text-token-text-secondary flex h-10 w-10 items-center justify-center rounded-full px-1 transition focus-visible:outline-0`,
            children: (0, W.jsx)(S, {
                showPlanTypeBadge: !0
            })
        }),
        children: [(0, W.jsx)(be, {
            showAccountSwitcher: s,
            accountSwitcherRedirectUrl: `/aardvark?refresh_account=true`
        }), !1]
    })
}
var W, Ae = e((() => {
    ie(), I(), xe(), M(), R(), ve(), de(), d(), l(), o(), ge(), T(), O(), W = E()
}));

function je({
    className: e
}) {
    let t = !re(i),
        n = me(),
        {
            hasMalwareAccess: r
        } = Se(),
        a = [{
            key: `findings`,
            to: `/aardvark`,
            label: (0, G.jsx)(D, {
                id: `aardvark.home.tab.findings`,
                defaultMessage: `Findings`
            })
        }, {
            key: `scans`,
            to: `/aardvark/scans`,
            label: (0, G.jsx)(D, {
                id: `aardvark.home.tab.scans`,
                defaultMessage: `Scans`
            })
        }, {
            key: `malware`,
            to: `/aardvark/malware`,
            requiresMalware: !0,
            label: (0, G.jsx)(D, {
                id: `aardvark.home.tab.malware`,
                defaultMessage: `Malware`
            })
        }],
        o = e => !e.requiresMalware || r === !0,
        s = e => e === `/aardvark` ? n.pathname === `/aardvark` || n.pathname === `/aardvark/` || n.pathname.startsWith(`/aardvark/findings`) : n.pathname.startsWith(e),
        c = e => w(`inline-flex items-center px-1.5 py-1.5 text-xs font-medium transition decoration-2 underline-offset-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-outline-primary md:px-2.5 md:py-2 md:text-sm`, e ? `underline decoration-token-border-accent text-token-text-primary` : `text-token-text-secondary hover:text-token-text-primary hover:underline hover:decoration-token-border-accent`);
    return (0, G.jsxs)(`div`, {
        className: w(t ? `grid w-full grid-cols-[auto_auto] items-center gap-2 px-3 py-3` : `sticky top-0 flex w-full items-center justify-between gap-3 py-3 ps-3 pe-1`, e),
        children: [(0, G.jsx)(`div`, {
            className: `flex items-center gap-3`,
            children: (0, G.jsxs)(`div`, {
                className: `flex items-center`,
                children: [(0, G.jsx)(H, {
                    className: `h-6 w-6`
                }), (0, G.jsxs)(k, {
                    to: `/aardvark`,
                    className: w(`text-token-text-primary flex items-center gap-2 hover:cursor-pointer`, !t && `ms-[5px]`),
                    children: [(0, G.jsx)(D, {
                        id: `fDk85I`,
                        defaultMessage: `Codex Security`
                    }), (0, G.jsx)(`span`, {
                        className: `bg-token-bg-tertiary text-token-text-tertiary border-token-border-light inline-flex items-center rounded-sm border px-1.5 py-0.5 text-[10px] leading-none font-medium whitespace-nowrap`,
                        children: (0, G.jsx)(D, {
                            id: `TjdxzQ`,
                            defaultMessage: `Formerly Aardvark`
                        })
                    })]
                })]
            })
        }), (0, G.jsxs)(`div`, {
            className: w(`flex items-center gap-2`, t ? `justify-self-end` : `ms-auto`),
            children: [(0, G.jsx)(`div`, {
                className: `flex items-center gap-1`,
                children: z(a, e => o(e) ? (0, G.jsx)(k, {
                    to: e.to,
                    "aria-current": s(e.to) ? `page` : void 0,
                    className: c(s(e.to)),
                    children: e.label
                }, e.key) : null)
            }), (0, G.jsx)(ee, {
                fallback: (0, G.jsx)(`div`, {
                    className: `h-10 w-10`
                }),
                children: (0, G.jsx)(Oe, {})
            })]
        })]
    })
}
var G, Me = e((() => {
    Ae(), Ce(), V(), r(), oe(), c(), g(), _e(), O(), fe(), G = E()
}));

function Ne(e) {
    "use forget";
    let t = (0, q.c)(7),
        {
            className: n
        } = e,
        {
            eligible: r,
            isLoading: i
        } = x(C.hasSeenCodexSecurityAnnouncement);
    if (!r || i) return null;
    let a = K,
        o;
    t[0] === n ? o = t[1] : (o = w(`bg-token-main-surface-secondary text-token-text-primary shadow-xxs rounded-2xl border border-white/5 py-3 ps-4 pe-4`, n), t[0] = n, t[1] = o);
    let c;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, J.jsx)(H, {
        className: `mt-0.5 h-5 w-5 shrink-0`
    }), t[2] = c) : c = t[2];
    let l;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, J.jsx)(`div`, {
        className: `text-sm font-medium`,
        children: (0, J.jsx)(D, {
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
                children: (0, J.jsx)(D, {
                    id: `codexSecurity.announcement.body.v2`,
                    defaultMessage: `Access Codex Security from Codex's navigation bar.`
                })
            })]
        })]
    }), t[4] = u) : u = t[4];
    let d;
    return t[5] === o ? d = t[6] : (d = (0, J.jsx)(s, {
        type: `normal`,
        className: o,
        onDismiss: a,
        content: u
    }), t[5] = o, t[6] = d), d
}

function K() {
    return y(C.hasSeenCodexSecurityAnnouncement)
}
var q, J, Pe = e((() => {
    q = A(), p(), V(), b(), g(), O(), J = E()
}));

function Fe() {
    return x(C.hasSeenAardvarkOnboarding)
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
    let l = () => {
            y(C.hasSeenAardvarkOnboarding), a(!1), e?.()
        },
        u = () => {
            if (o === c.length - 1) {
                l();
                return
            }
            s(e => Math.min(e + 1, c.length - 1))
        },
        d = () => {
            s(e => Math.max(e - 1, 0))
        },
        f = c[o],
        p = o === 0,
        m = o === c.length - 1,
        h = (0, X.jsxs)(`div`, {
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
                        className: w(`inline-block h-2.5 w-2.5 rounded-full border transition`, t === o ? `bg-token-border-accent border-token-border-accent shadow-token-main-surface-primary shadow-[0_0_0_4px]` : `bg-token-main-surface-secondary border-token-border-strong/70`)
                    }, e.id))
                })
            }), (0, X.jsxs)(`div`, {
                className: `order-1 flex items-center justify-end gap-2 sm:order-2`,
                children: [!p && (0, X.jsxs)(v.Button, {
                    color: `secondary`,
                    onClick: d,
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
                }), (0, X.jsxs)(v.Button, {
                    color: `primary`,
                    onClick: u,
                    className: `gap-2`,
                    children: [(0, X.jsx)(`span`, {
                        className: `me-1`,
                        children: m ? (0, X.jsx)(D, {
                            id: `aardvark.onboarding.button.finish`,
                            defaultMessage: `Start using Codex Security`
                        }) : (0, X.jsx)(D, {
                            id: `aardvark.onboarding.button.next`,
                            defaultMessage: `Next`
                        })
                    }), !m && (0, X.jsx)(`span`, {
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
    return (0, X.jsx)(ae, {
        isOpen: !0,
        onClose: l,
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
            children: [(0, X.jsx)(H, {
                className: `h-7 w-7 shrink-0`
            }), (0, X.jsx)(`span`, {
                className: `text-token-text-primary text-lg font-semibold`,
                children: f.title
            })]
        }),
        textCenter: !0,
        headerAccessory: (0, X.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, X.jsx)(`span`, {
                className: `bg-token-main-surface-secondary/80 text-token-text-tertiary rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase`,
                children: f.pillText
            })
        }),
        footerContent: h,
        children: (0, X.jsx)(`div`, {
            className: `flex-1 overflow-y-auto`,
            children: (0, X.jsxs)(`div`, {
                className: `text-token-text-primary flex flex-col gap-4 px-5 py-4 lg:px-7`,
                children: [(0, X.jsx)(`div`, {
                    className: `text-token-text-primary space-y-2.5 text-[15px] leading-6`,
                    children: f.description.map((e, t) => (0, X.jsx)(`p`, {
                        children: e
                    }, t))
                }), f.bullets ? (0, X.jsx)(`ul`, {
                    className: `text-token-text-secondary grid list-disc gap-2.5 ps-5 text-[15px] leading-6`,
                    children: f.bullets.map((e, t) => (0, X.jsx)(`li`, {
                        children: e
                    }, t))
                }) : null]
            })
        })
    })
}
var Y, X, Le = e((() => {
    V(), m(), le(), b(), g(), Y = t(pe()), O(), X = E()
}));

function Re(e) {
    "use forget";
    let t = (0, Z.c)(7),
        {
            children: r
        } = e,
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsxs)(N.Header, {
        children: [(0, Q.jsx)($, {
            children: (0, Q.jsx)(je, {})
        }), (0, Q.jsx)(Ie, {})]
    }), t[0] = i) : i = t[0];
    let a;
    t[1] === r ? a = t[2] : (a = (0, Q.jsxs)(N, {
        children: [i, (0, Q.jsx)(`div`, {
            className: `no-scrollbar h-full w-full`,
            children: (0, Q.jsx)(`div`, {
                className: `z-0 mx-auto flex w-[90%] max-w-[1600px] flex-col`,
                children: r
            })
        })]
    }), t[1] = r, t[2] = a);
    let o, s;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, Q.jsxs)(`div`, {
        className: `fixed inset-x-0 bottom-8 z-30 flex flex-col items-center gap-3 px-4`,
        children: [(0, Q.jsx)(Ne, {
            className: `w-full max-w-3xl`
        }), (0, Q.jsx)(Te, {
            className: `w-full max-w-3xl`,
            storageKey: n.CodexSecurityChangelogLastViewedDate
        })]
    }), s = (0, Q.jsx)(Ee, {}), t[3] = o, t[4] = s) : (o = t[3], s = t[4]);
    let c;
    return t[5] === a ? c = t[6] : (c = (0, Q.jsxs)(Q.Fragment, {
        children: [a, o, s]
    }), t[5] = a, t[6] = c), c
}
var Z, Q, $, ze = e((() => {
    Z = A(), we(), De(), Me(), Pe(), Le(), F(), _(), ce(), Q = E(), $ = h.div`draggable no-draggable-children sticky top-0 p-3 flex items-center justify-between z-20 h-header-height font-semibold bg-token-bg-primary`
}));
export {
    ze as n, Re as t
};
//# sourceMappingURL=d8ff9f68-cug2a8v0cvbaskq3.js.map