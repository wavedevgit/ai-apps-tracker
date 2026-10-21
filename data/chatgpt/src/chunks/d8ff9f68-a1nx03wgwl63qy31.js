import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as n,
    Aot as r,
    CE as i,
    Dnt as a,
    Dz as o,
    Ent as s,
    Fw as c,
    G5 as l,
    I1 as u,
    J1 as d,
    Ji as f,
    K5 as p,
    Knt as m,
    M1 as h,
    Nw as g,
    Oz as _,
    Rnt as v,
    Sh as ee,
    Sw as te,
    Xi as ne,
    _R as re,
    aq as ie,
    f8 as ae,
    fq as oe,
    hnt as se,
    it as y,
    nt as b,
    oit as ce,
    ot as x,
    pnt as le,
    sit as ue,
    tt as S,
    wE as de,
    ww as fe,
    yR as C,
    yh as w
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as pe,
    Bn as T,
    Nn as E,
    Rn as D,
    Vn as me,
    at as O,
    jt as k,
    wn as A,
    zn as j
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    B4t as M,
    G4t as N,
    GGn as P,
    H4t as F,
    IHn as I,
    RHn as L,
    UGn as R,
    W4t as z,
    cVt as he,
    dkt as ge,
    sVt as _e,
    ukt as B
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    np as V,
    tp as H
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    Dh as ve,
    Qu as ye,
    bh as be,
    td as xe
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";
import {
    r as U,
    t as Se
} from "./673c0d9b-o7vfmqserox377x5.js";
import {
    n as Ce,
    t as we
} from "./4c6c4e54-colrgds45qdkhfuc.js";

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
        children: (0, W.jsx)(E, {
            id: `aardvark.feedback.cta`,
            defaultMessage: `Feedback survey`
        })
    })
}
var W, Ee = e((() => {
    D(), W = T()
}));

function De() {
    let e = !ue();
    return B.markStart(`AardvarkLoginOrProfileMenu`), B.markRendered(`AardvarkLoginOrProfileMenu`), e ? (0, G.jsx)(ye, {}) : (0, G.jsx)(Oe, {})
}

function Oe() {
    let e = h(),
        t = j(),
        {
            data: n
        } = d(),
        i = C(),
        a = r();
    if (!e) return (0, G.jsx)(`div`, {
        className: `flex h-10 w-10 items-center justify-center`,
        children: (0, G.jsx)(`div`, {
            className: `bg-token-bg-tertiary h-8 w-8 rounded-full`
        })
    });
    let {
        showAccountSwitcher: o
    } = M({
        accountState: n,
        currentSession: a,
        user: i
    }), s = o, c = () => {
        s && N()
    };
    return (0, G.jsxs)(I, {
        onOpenChange: e => {
            e && c()
        },
        triggerButton: (0, G.jsx)(`button`, {
            onFocus: c,
            onMouseEnter: c,
            onClick: () => {
                le.logEvent(`Account: Open Profile Menu`), v.logEvent(`chatgpt_account_open_profile_menu`)
            },
            "aria-label": t.formatMessage({
                id: `aardvark.aardvarkProfile.openProfileMenu`,
                defaultMessage: `Open Profile Menu`
            }),
            "data-testid": `profile-button`,
            className: `text-token-text-secondary hover:text-token-text-primary hover:bg-token-interactive-bg-secondary-hover radix-state-open:text-token-text-secondary flex h-10 w-10 items-center justify-center rounded-full px-1 transition focus-visible:outline-0`,
            children: (0, G.jsx)(w, {
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
    ee(), L(), xe(), z(), F(), ve(), u(), re(), ce(), se(), ge(), m(), D(), G = T()
}));

function Ae({
    className: e
}) {
    let t = !n(oe),
        r = k(),
        {
            hasMalwareAccess: i
        } = U(),
        a = [{
            key: `findings`,
            to: `/aardvark`,
            label: (0, K.jsx)(E, {
                id: `aardvark.home.tab.findings`,
                defaultMessage: `Findings`
            })
        }, {
            key: `scans`,
            to: `/aardvark/scans`,
            label: (0, K.jsx)(E, {
                id: `aardvark.home.tab.scans`,
                defaultMessage: `Scans`
            })
        }, {
            key: `malware`,
            to: `/aardvark/malware`,
            requiresMalware: !0,
            label: (0, K.jsx)(E, {
                id: `aardvark.home.tab.malware`,
                defaultMessage: `Malware`
            })
        }],
        s = e => !e.requiresMalware || i === !0,
        c = e => e === `/aardvark` ? r.pathname === `/aardvark` || r.pathname === `/aardvark/` || r.pathname.startsWith(`/aardvark/findings`) : r.pathname.startsWith(e),
        u = e => l(`inline-flex items-center px-1.5 py-1.5 text-xs font-medium transition decoration-2 underline-offset-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-outline-primary md:px-2.5 md:py-2 md:text-sm`, e ? `underline decoration-token-border-accent text-token-text-primary` : `text-token-text-secondary hover:text-token-text-primary hover:underline hover:decoration-token-border-accent`);
    return (0, K.jsxs)(`div`, {
        className: l(t ? `grid w-full grid-cols-[auto_auto] items-center gap-2 px-3 py-3` : `sticky top-0 flex w-full items-center justify-between gap-3 py-3 ps-3 pe-1`, e),
        children: [(0, K.jsx)(`div`, {
            className: `flex items-center gap-3`,
            children: (0, K.jsxs)(`div`, {
                className: `flex items-center`,
                children: [(0, K.jsx)(H, {
                    className: `h-6 w-6`
                }), (0, K.jsxs)(O, {
                    to: `/aardvark`,
                    className: l(`text-token-text-primary flex items-center gap-2 hover:cursor-pointer`, !t && `ms-[5px]`),
                    children: [(0, K.jsx)(E, {
                        id: `fDk85I`,
                        defaultMessage: `Codex Security`
                    }), (0, K.jsx)(`span`, {
                        className: `bg-token-bg-tertiary text-token-text-tertiary border-token-border-light inline-flex items-center rounded-sm border px-1.5 py-0.5 text-[10px] leading-none font-medium whitespace-nowrap`,
                        children: (0, K.jsx)(E, {
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
                children: he(a, e => s(e) ? (0, K.jsx)(O, {
                    to: e.to,
                    "aria-current": c(e.to) ? `page` : void 0,
                    className: u(c(e.to)),
                    children: e.label
                }, e.key) : null)
            }), (0, K.jsx)(o, {
                fallback: (0, K.jsx)(`div`, {
                    className: `h-10 w-10`
                }),
                children: (0, K.jsx)(De, {})
            })]
        })]
    })
}
var K, je = e((() => {
    ke(), Se(), V(), ae(), _(), ie(), p(), _e(), D(), pe(), K = T()
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
        } = x(S.hasSeenCodexSecurityAnnouncement);
    if (!r || i) return null;
    let a = Ne,
        o;
    t[0] === n ? o = t[1] : (o = l(`bg-token-main-surface-secondary text-token-text-primary shadow-xxs rounded-2xl border border-white/5 py-3 ps-4 pe-4`, n), t[0] = n, t[1] = o);
    let s;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, J.jsx)(H, {
        className: `mt-0.5 h-5 w-5 shrink-0`
    }), t[2] = s) : s = t[2];
    let c;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, J.jsx)(`div`, {
        className: `text-sm font-medium`,
        children: (0, J.jsx)(E, {
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
                children: (0, J.jsx)(E, {
                    id: `codexSecurity.announcement.body.v2`,
                    defaultMessage: `Access Codex Security from Codex's navigation bar.`
                })
            })]
        })]
    }), t[4] = u) : u = t[4];
    let d;
    return t[5] === o ? d = t[6] : (d = (0, J.jsx)(f, {
        type: `normal`,
        className: o,
        onDismiss: a,
        content: u
    }), t[5] = o, t[6] = d), d
}

function Ne() {
    return y(S.hasSeenCodexSecurityAnnouncement)
}
var q, J, Pe = e((() => {
    q = A(), ne(), V(), b(), p(), D(), J = T()
}));

function Fe() {
    return x(S.hasSeenAardvarkOnboarding)
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
        eyebrow: (0, X.jsx)(E, {
            id: `aardvark.onboarding.step.what.eyebrow`,
            defaultMessage: `Overview`
        }),
        pillText: (0, X.jsx)(E, {
            id: `aardvark.onboarding.step.what.pill`,
            defaultMessage: `OVERVIEW`
        }),
        title: (0, X.jsx)(E, {
            id: `aardvark.onboarding.step.what.title`,
            defaultMessage: `Welcome to Codex Security!`
        }),
        description: [(0, X.jsx)(E, {
            id: `aardvark.onboarding.step.what.summary`,
            defaultMessage: `Codex Security thinks like a security researcher:`
        }, `what-summary`)],
        bullets: [(0, X.jsx)(E, {
            id: `aardvark.onboarding.step.what.scan`,
            defaultMessage: `Builds a repository-wide threat model to understand security objectives and architecture.`
        }, `scan`), (0, X.jsx)(E, {
            id: `aardvark.onboarding.step.what.prioritize`,
            defaultMessage: `Scans commit-level changes and full history to detect potential vulnerabilities with detailed explanations.`
        }, `prioritize`), (0, X.jsx)(E, {
            id: `aardvark.onboarding.step.what.validate`,
            defaultMessage: `Auto-validates issues when possible by safely attempting to trigger them in an isolated environment.`
        }, `validate`), (0, X.jsx)(E, {
            id: `aardvark.onboarding.step.what.patches`,
            defaultMessage: `Generates and evaluates fix suggestions using Codex, attaching high-quality patches for human review.`
        }, `patches`)]
    }, {
        id: `connect-and-configure`,
        eyebrow: (0, X.jsx)(E, {
            id: `aardvark.onboarding.step.configure.eyebrow`,
            defaultMessage: `Get set up`
        }),
        pillText: (0, X.jsx)(E, {
            id: `aardvark.onboarding.step.configure.pill`,
            defaultMessage: `GET SET UP`
        }),
        title: (0, X.jsx)(E, {
            id: `aardvark.onboarding.step.configure.title`,
            defaultMessage: `Connect GitHub and configure scans`
        }),
        description: [(0, X.jsx)(E, {
            id: `aardvark.onboarding.step.configure.summary`,
            defaultMessage: `Connect GitHub and select the repositories you'd like to scan!`
        }, `configure-summary`)],
        bullets: [(0, X.jsx)(E, {
            id: `aardvark.onboarding.step.configure.lookbackPeriod`,
            defaultMessage: `For standard repositories, select an indefinite lookback period. If your codebase is very large, a shorter lookback period may deliver faster results.`
        }, `lookbackPeriod`), (0, X.jsx)(E, {
            id: `aardvark.onboarding.step.configure.codexEnvironment`,
            defaultMessage: `We find that the default codex environment usually works fine, but if you have unique environment details, please add them during setup.`
        }, `codexEnvironment`)]
    }, {
        id: `findings`,
        eyebrow: (0, X.jsx)(E, {
            id: `aardvark.onboarding.step.findings.eyebrow`,
            defaultMessage: `See results`
        }),
        pillText: (0, X.jsx)(E, {
            id: `aardvark.onboarding.step.findings.pill`,
            defaultMessage: `SEE RESULTS`
        }),
        title: (0, X.jsx)(E, {
            id: `aardvark.onboarding.step.findings.title`,
            defaultMessage: `Review findings and recommendations`
        }),
        description: [(0, X.jsx)(E, {
            id: `aardvark.onboarding.step.findings.summary`,
            defaultMessage: `Codex Security will spend a lot of time thinking about your code, so it may take a few days to get good results back.`
        }, `findings-summary`), (0, X.jsx)(E, {
            id: `aardvark.onboarding.step.findings.summary-2`,
            defaultMessage: `Check back in a bit to see the most critical findings, read Codex Security reasoning and generate patches!`
        }, `findings-summary-2`)]
    }], []);
    if (r || !i) return null;
    let u = () => {
            y(S.hasSeenAardvarkOnboarding), a(!1), e?.()
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
                    children: c.map((e, t) => (0, X.jsx)(`span`, {
                        className: l(`inline-block h-2.5 w-2.5 rounded-full border transition`, t === o ? `bg-token-border-accent border-token-border-accent shadow-token-main-surface-primary shadow-[0_0_0_4px]` : `bg-token-main-surface-secondary border-token-border-strong/70`)
                    }, e.id))
                })
            }), (0, X.jsxs)(`div`, {
                className: `order-1 flex items-center justify-end gap-2 sm:order-2`,
                children: [!m && (0, X.jsxs)(g.Button, {
                    color: `secondary`,
                    onClick: f,
                    className: `gap-2`,
                    children: [(0, X.jsx)(`span`, {
                        "aria-hidden": !0,
                        className: `ms-1`,
                        children: (0, X.jsx)(E, {
                            id: `aardvark.onboarding.button.backArrow`,
                            defaultMessage: `←`
                        })
                    }), (0, X.jsx)(`span`, {
                        className: `ms-1`,
                        children: (0, X.jsx)(E, {
                            id: `aardvark.onboarding.button.back`,
                            defaultMessage: `Back`
                        })
                    })]
                }), (0, X.jsxs)(g.Button, {
                    color: `primary`,
                    onClick: d,
                    className: `gap-2`,
                    children: [(0, X.jsx)(`span`, {
                        className: `me-1`,
                        children: h ? (0, X.jsx)(E, {
                            id: `aardvark.onboarding.button.finish`,
                            defaultMessage: `Start using Codex Security`
                        }) : (0, X.jsx)(E, {
                            id: `aardvark.onboarding.button.next`,
                            defaultMessage: `Next`
                        })
                    }), !h && (0, X.jsx)(`span`, {
                        "aria-hidden": !0,
                        className: `me-1`,
                        children: (0, X.jsx)(E, {
                            id: `aardvark.onboarding.button.nextArrow`,
                            defaultMessage: `→`
                        })
                    })]
                })]
            })]
        });
    return (0, X.jsx)(te, {
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
            children: [(0, X.jsx)(H, {
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
        footerContent: _,
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
    V(), c(), fe(), b(), p(), Y = t(me()), D(), X = T()
}));

function Re(e) {
    "use forget";
    let t = (0, Z.c)(7),
        {
            children: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsxs)(R.Header, {
        children: [(0, Q.jsx)($, {
            children: (0, Q.jsx)(Ae, {})
        }), (0, Q.jsx)(Ie, {})]
    }), t[0] = r) : r = t[0];
    let i;
    t[1] === n ? i = t[2] : (i = (0, Q.jsxs)(R, {
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
            storageKey: s.CodexSecurityChangelogLastViewedDate
        })]
    }), o = (0, Q.jsx)(Te, {}), t[3] = a, t[4] = o) : (a = t[3], o = t[4]);
    let c;
    return t[5] === i ? c = t[6] : (c = (0, Q.jsxs)(Q.Fragment, {
        children: [i, a, o]
    }), t[5] = i, t[6] = c), c
}
var Z, Q, $, ze = e((() => {
    Z = A(), Ce(), Ee(), je(), Pe(), Le(), P(), a(), de(), Q = T(), $ = i.div`draggable no-draggable-children sticky top-0 p-3 flex items-center justify-between z-20 h-header-height font-semibold bg-token-bg-primary`
}));
export {
    ze as n, Re as t
};
//# sourceMappingURL=d8ff9f68-a1nx03wgwl63qy31.js.map