import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $T as r,
    Ait as i,
    Al as a,
    At as o,
    Aw as s,
    CR as c,
    Eat as l,
    Gw as u,
    LU as d,
    Mit as f,
    Ml as p,
    Ow as m,
    Qrt as h,
    Qw as g,
    Qy as _,
    Sl as v,
    TR as y,
    Ww as b,
    Yat as x,
    Yw as ee,
    Zy as S,
    _5 as te,
    ax as ne,
    bl as re,
    cn as C,
    eE as w,
    fB as ie,
    grt as ae,
    hl as oe,
    ix as se,
    jE as ce,
    kl as T,
    l7 as le,
    lE as E,
    ml as ue,
    o0 as de,
    pB as fe,
    q1 as pe,
    tT as me,
    tot as he,
    u7 as ge,
    uE as _e,
    urt as ve,
    v5 as ye,
    vl as be,
    wat as xe,
    xl as Se,
    zU as Ce
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    At as we,
    Bn as D,
    In as Te,
    Ln as Ee,
    Nn as O,
    O as De,
    Q as Oe,
    Rn as k,
    Vn as A,
    Vt as ke,
    s as Ae,
    wn as je,
    zn as j
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bst as M,
    FGt as Me,
    IGt as Ne,
    JKn as Pe,
    Vst as Fe,
    Vun as Ie,
    YKn as Le,
    mun as Re,
    nQt as ze,
    tQt as Be
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    $x as Ve,
    Bx as He,
    Gh as Ue,
    Kb as We,
    Kh as Ge,
    Kx as Ke,
    Mb as qe,
    Nb as Je,
    Qx as Ye,
    Rv as Xe,
    Vx as Ze,
    by as Qe,
    qb as $e,
    qx as et,
    xy as tt,
    zv as nt
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    Bf as rt,
    Hf as it,
    Jb as at,
    Kb as ot,
    Kf as st,
    Wf as N,
    c_ as ct,
    n_ as lt
} from "./c2675c8c-f8x469cgefxzeo6l.js";
import {
    g_ as ut,
    h_ as P
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    a as dt,
    i as ft
} from "./3e72bb91-fih6mkz9rvftqwxk.js";
import {
    _ as pt,
    a as mt,
    c as ht,
    d as gt,
    f as _t,
    g as vt,
    h as yt,
    i as bt,
    l as xt,
    m as St,
    n as Ct,
    o as wt,
    p as Tt,
    r as Et,
    s as Dt,
    t as Ot,
    u as kt,
    v as At
} from "./9e18a103-ovash5ue0yl030uj.js";
import {
    n as jt,
    t as Mt
} from "./9371a995-k0tq3cowodsjfll7.js";
import {
    i as Nt,
    r as Pt
} from "./ab92372e-ftp346fqkk2jaw2a.js";
import {
    t as Ft
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";
import {
    n as It,
    t as Lt
} from "./4c806318-j1fn5368zeld5ig9.js";
import {
    r as Rt
} from "./8d846022-o5c98v3vbp34xelf.js";
import {
    a as zt,
    i as Bt,
    n as Vt,
    o as Ht,
    r as Ut,
    s as Wt,
    t as Gt
} from "./bc28bb09-m9sqmatgiit2i530.js";
import {
    n as Kt,
    r as qt,
    t as Jt
} from "./9c8fc5a3-ix07894hsmxdy3aw.js";
import {
    n as Yt,
    t as F
} from "./c25d8df9-czwfjkk7xzz6mis7.js";
import {
    n as Xt,
    t as Zt
} from "./77909f2c-ikn4n4fow9vnzff7.js";
import {
    n as Qt,
    t as $t
} from "./45054cb2-if3uqk8s7ehmapv6.js";

function en(e) {
    "use forget";
    let t = (0, tn.c)(13),
        {
            value: n,
            onChange: r
        } = e,
        i = j(),
        a = n != null,
        o;
    t[0] === r ? o = t[1] : (o = e => r(e.target.checked ? {
        config_path: `.devcontainer/devcontainer.json`
    } : null), t[0] = r, t[1] = o);
    let s;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, nn.jsx)(O, {
        id: `wham.environments.devcontainer.enabled.label`,
        defaultMessage: `Use dev container`
    }), t[2] = s) : s = t[2];
    let c;
    t[3] !== a || t[4] !== o ? (c = (0, nn.jsx)(Pe, {
        id: `use-devcontainer`,
        checked: a,
        onChange: o,
        label: s
    }), t[3] = a, t[4] = o, t[5] = c) : c = t[5];
    let l;
    t[6] !== i || t[7] !== r || t[8] !== n ? (l = n != null && (0, nn.jsx)(M, {
        name: `devcontainerPath`,
        ariaLabel: i.formatMessage({
            id: `wham.environments.devcontainer.path.label`,
            defaultMessage: `Dev container configuration path`
        }),
        value: n.config_path,
        onChange: e => r({
            config_path: e.target.value
        }),
        containerInputClassName: `w-full`,
        inputClassName: `w-full text-sm`,
        color: `search`
    }), t[6] = i, t[7] = r, t[8] = n, t[9] = l) : l = t[9];
    let u;
    return t[10] !== c || t[11] !== l ? (u = (0, nn.jsxs)(`div`, {
        className: `mb-4 flex flex-col gap-2`,
        children: [c, l]
    }), t[10] = c, t[11] = l, t[12] = u) : u = t[12], u
}
var tn, nn, rn = e((() => {
    tn = je(), Fe(), Le(), k(), nn = D()
}));

function an({
    onChange: e,
    value: t
}) {
    let n = j();
    return (0, on.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, on.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, on.jsx)(O, {
                id: `wham.createEnvironments.descriptionSection.label`,
                defaultMessage: `Description`
            })
        }), (0, on.jsx)(`textarea`, {
            name: `description`,
            "aria-label": n.formatMessage({
                id: `wham.environment.descriptionSection.description`,
                defaultMessage: `Environment Description`
            }),
            placeholder: n.formatMessage({
                id: `wham.environment.descriptionSection.descriptionPlaceholder`,
                defaultMessage: `1-2 sentence description`
            }),
            className: `border-token-border-heavy focus-within:border-token-border-heavy focus-within:ring-token-text-secondary bg-token-bg-primary h-16 max-h-48 w-full resize-none rounded-md border px-3 py-2 text-sm shadow-none focus-within:ring-1`,
            value: t,
            onChange: t => e(t.target.value)
        })]
    })
}
var on, sn = e((() => {
    k(), on = D()
}));

function cn({
    repositoryId: e,
    existingEnvironment: t,
    setRepositoryName: n,
    provider: r
}) {
    let i = t.repo_map?.[e];
    return (0, ln.useEffect)(() => {
        i && n(i.name)
    }, [i, n]), i ? (0, I.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [(0, I.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, I.jsx)(O, {
                id: `wham.createEnvironments.repositorySection.label`,
                defaultMessage: `Repository`
            })
        }), (0, I.jsx)(`div`, {
            className: `border-token-border-heavy bg-token-bg-primary pointer-events-none rounded-lg border p-3`,
            children: (0, I.jsx)(Jt, {
                repository: i,
                provider: r,
                className: `pointer-events-none p-1`,
                isSelected: !0
            })
        })]
    }) : (0, I.jsx)(`div`, {
        className: `text-token-text-secondary flex h-full items-center text-sm`,
        children: (0, I.jsx)(O, {
            id: `wham.createEnvironments.repositorySection.unavailable`,
            defaultMessage: `Repository unavailable`
        })
    })
}
var ln, I, un = e((() => {
    qt(), ln = t(A()), k(), I = D()
}));

function dn(e, t, n, r, i) {
    let a = mn(e.clipboardData.getData(`text/plain`));
    if (a.length !== 0) {
        e.preventDefault(), n(t, i(a[0]));
        for (let e of a.slice(1)) r(i(e))
    }
}

function fn(e, t, n, r) {
    dn(e, t, n, r, e => e)
}

function pn(e, t, n, r) {
    dn(e, t, n, r, e => ({
        ...e,
        isEditing: !1,
        domain: void 0,
        previousDomain: void 0,
        previousKey: void 0
    }))
}

function mn(e) {
    let t = [];
    for (let n of e.split(/\r?\n/)) {
        if (n = n.trim(), !n || n.startsWith(`#`) || n.startsWith(`;`)) continue;
        n.startsWith(`export `) && (n = n.slice(7).trim());
        let e = !1,
            r = !1,
            i = !1,
            a = -1;
        for (let t = 0; t < n.length; t++) {
            let o = n[t];
            if (i) {
                i = !1;
                continue
            }
            if (o === `\\`) {
                i = !0;
                continue
            }
            if (o === `'` && !r) {
                e = !e;
                continue
            }
            if (o === `"` && !e) {
                r = !r;
                continue
            }
            if (o === `#` && !e && !r) {
                a = t;
                break
            }
        }
        if (a !== -1 && (n = n.slice(0, a).trim()), !n) continue;
        e = r = i = !1;
        let o = -1;
        for (let t = 0; t < n.length; t++) {
            let a = n[t];
            if (i) {
                i = !1;
                continue
            }
            if (a === `\\`) {
                i = !0;
                continue
            }
            if (a === `'` && !r) {
                e = !e;
                continue
            }
            if (a === `"` && !e) {
                r = !r;
                continue
            }
            if (a === `=` && !e && !r) {
                o = t;
                break
            }
        }
        if (o === -1) continue;
        let s = n.slice(0, o).trim();
        if (!s) continue;
        let c = n.slice(o + 1).trim();
        (c.startsWith(`"`) && c.endsWith(`"`) || c.startsWith(`'`) && c.endsWith(`'`)) && (c = c.slice(1, -1)), t.push({
            key: s,
            value: c
        })
    }
    return t
}
var hn = e((() => {}));

function gn({
    pushValue: e,
    removeValue: t,
    changeValue: n,
    values: i
}) {
    let a = j();
    return (0, L.jsxs)(`div`, {
        className: `mb-2 flex flex-col`,
        children: [(0, L.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, L.jsx)(O, {
                id: `wham.createEnvironments.envVarsSection.label`,
                defaultMessage: `Environment variables`
            })
        }), i.map((i, o) => i.key.startsWith(`CODEX_ENV_`) ? null : (0, L.jsx)(`div`, {
            className: `flex gap-2 pt-4`,
            children: (0, L.jsx)(`div`, {
                className: `flex w-full flex-1 flex-col gap-2`,
                children: (0, L.jsxs)(`div`, {
                    className: `flex w-full items-center gap-2`,
                    children: [(0, L.jsx)(M, {
                        name: `envVars[${o}].key`,
                        color: `search`,
                        containerInputClassName: `w-full`,
                        className: `text-token-text-primary flex h-8 w-full items-center rounded-md!`,
                        value: i.key,
                        onPaste: t => fn(t, o, n, e),
                        onChange: e => {
                            n(o, {
                                ...i,
                                key: e.target.value
                            })
                        },
                        placeholder: a.formatMessage({
                            id: `wham.envVarsSection.keyPlaceholder`,
                            defaultMessage: `Key`
                        }),
                        ariaLabel: a.formatMessage({
                            id: `wham.envVarsSection.keyAria`,
                            defaultMessage: `Environment variable key`
                        })
                    }), (0, L.jsx)(M, {
                        name: `envVars[${o}].value`,
                        className: `text-token-text-primary flex h-8 w-full items-center rounded-md!`,
                        containerInputClassName: `w-full`,
                        color: `search`,
                        value: i.value,
                        onChange: e => {
                            n(o, {
                                ...i,
                                value: e.target.value
                            })
                        },
                        placeholder: a.formatMessage({
                            id: `wham.envVarsSection.value`,
                            defaultMessage: `Value`
                        }),
                        ariaLabel: a.formatMessage({
                            id: `wham.envVarsSection.environmentVariableValue`,
                            defaultMessage: `Environment variable value`
                        })
                    }), (0, L.jsx)(r, {
                        type: `button`,
                        size: `small`,
                        color: `secondary`,
                        onClick: () => t(o),
                        "aria-label": a.formatMessage({
                            id: `wham.createEnvironments.envVarsSection.deleteAriaLabel`,
                            defaultMessage: `Button to remove environment variable`
                        }),
                        children: (0, L.jsx)(O, {
                            id: `wham.createEnvironments.envVarsSection.delete`,
                            defaultMessage: `Delete`
                        })
                    })]
                })
            })
        }, o)), (0, L.jsx)(`div`, {
            className: `pt-2`,
            children: (0, L.jsx)(r, {
                color: `secondary`,
                size: `small`,
                onClick: () => {
                    e({
                        key: ``,
                        value: ``
                    })
                },
                type: `button`,
                className: `w-fit`,
                "aria-label": a.formatMessage({
                    id: `wham.createEnvironments.envVarsSection.addAriaLabel`,
                    defaultMessage: `Button to add another environment variable`
                }),
                children: (0, L.jsxs)(`div`, {
                    className: `flex items-center gap-1`,
                    children: [(0, L.jsx)(O, {
                        id: `wham.createEnvironments.envVarsSection.add`,
                        defaultMessage: `Add`
                    }), (0, L.jsx)(Ge, {
                        className: `icon-sm`
                    })]
                })
            })
        })]
    })
}
var _n, L, vn, yn = e((() => {
    w(), Ue(), Fe(), hn(), _n = t(A()), k(), L = D(), vn = (0, _n.memo)(gn)
}));

function bn({
    value: e = [],
    onChange: t,
    onBlur: n,
    disabled: r
}) {
    let i = j(),
        a = (0, xn.useMemo)(() => e?.join(`
`), [e]);
    return (0, R.jsxs)(`div`, {
        className: `mt-4 flex flex-col gap-2`,
        children: [(0, R.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, R.jsx)(`p`, {
                className: `text-token-text-primary text-sm font-medium`,
                children: (0, R.jsx)(O, {
                    id: `wham.createEnvironment.shareTargets.label`,
                    defaultMessage: `Add additional editors`
                })
            }), (0, R.jsx)(`p`, {
                className: `text-token-text-tertiary text-xs`,
                children: (0, R.jsx)(O, {
                    id: `wham.createEnvironment.shareTargets.helper`,
                    defaultMessage: `Add one email per line. Users will be able to edit or delete this environment, or add and remove editors. The environment creator, and ChatGPT Workspace Admins, always have edit access.`
                })
            })]
        }), (0, R.jsx)(`textarea`, {
            name: `shareTargets`,
            "aria-label": i.formatMessage({
                id: `wham.createEnvironment.shareTargets.ariaLabel`,
                defaultMessage: `Environment share target emails`
            }),
            placeholder: i.formatMessage({
                id: `wham.createEnvironment.shareTargets.placeholder`,
                defaultMessage: `user@example.com`
            }),
            className: `border-token-border-heavy focus-within:border-token-border-heavy focus-within:ring-token-text-secondary bg-token-bg-primary h-20 resize-y rounded-md border px-3 py-2 text-sm shadow-none focus-within:ring-1`,
            value: a,
            onChange: e => {
                t(e.target.value.split(/\r?\n/))
            },
            onBlur: n,
            disabled: r
        })]
    })
}
var xn, R, Sn = e((() => {
    xn = t(A()), k(), R = D()
}));

function Cn({
    value: e,
    onChange: t
}) {
    let n = j(),
        r = de()?.name ?? n.formatMessage({
            id: `wham.createEnvironment.workspaceName`,
            defaultMessage: `Workspace`
        });
    return (0, z.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, z.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, z.jsx)(O, {
                id: `wham.createEnvironment.environmentVisibility`,
                defaultMessage: `Sharing`
            })
        }), (0, z.jsxs)(P.Root, {
            value: e,
            onValueChange: t,
            children: [(0, z.jsx)(P.Trigger, {
                className: `border-token-border-heavy bg-token-bg-primary flex w-fit rounded-md border`,
                "aria-label": n.formatMessage({
                    id: `wham.createEnvironment.openVisibilityMenu`,
                    defaultMessage: `Open sharing menu`
                }),
                children: (0, z.jsxs)(`div`, {
                    className: `flex w-full items-center justify-between`,
                    children: [(0, z.jsx)(`div`, {
                        className: `flex items-center`,
                        children: (0, z.jsx)(P.Value, {
                            placeholder: n.formatMessage({
                                id: `wham.createEnvironment.selectVisibility`,
                                defaultMessage: `Select visibility`
                            })
                        })
                    }), (0, z.jsx)(P.Icon, {})]
                })
            }), (0, z.jsx)(P.Portal, {
                children: (0, z.jsxs)(P.Content, {
                    align: `start`,
                    children: [(0, z.jsx)(P.Item, {
                        value: `private`,
                        children: (0, z.jsxs)(`div`, {
                            className: `flex items-center`,
                            children: [(0, z.jsx)(Ve, {
                                "aria-hidden": !0,
                                className: `icon-sm me-1.5`
                            }), (0, z.jsx)(O, {
                                id: `wham.createEnvironment.private`,
                                defaultMessage: `Only you`
                            })]
                        })
                    }), (0, z.jsx)(P.Item, {
                        value: `workspace`,
                        children: (0, z.jsxs)(`div`, {
                            className: `flex items-center`,
                            children: [(0, z.jsx)(Xe, {
                                "aria-hidden": !0,
                                className: `icon-sm me-1.5`
                            }), (0, z.jsx)(O, {
                                id: `wham.createEnvironment.sharedWithWorkspace`,
                                defaultMessage: `Shared with {workspaceName}`,
                                values: {
                                    workspaceName: r
                                }
                            })]
                        })
                    })]
                })
            })]
        }), e === `workspace` && (0, z.jsx)(`p`, {
            className: `text-token-text-tertiary text-xs`,
            children: (0, z.jsx)(O, {
                id: `wham.createEnvironments.workspace.onlyYouCanEdit`,
                defaultMessage: `Workspace members can launch tasks with this environment. Only you, ChatGPT Workspace Admins, and any additional editors can make changes.`
            })
        })]
    })
}
var wn, z, Tn, En = e((() => {
    nt(), Ye(), ut(), pe(), wn = t(A()), k(), z = D(), Tn = (0, wn.memo)(Cn)
}));

function Dn({
    onChange: e,
    value: t
}) {
    let n = j();
    return (0, kn.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, kn.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, kn.jsx)(O, {
                id: `wham.createEnvironments.label`,
                defaultMessage: `Name`
            })
        }), (0, kn.jsx)(`div`, {
            className: `flex flex-col gap-2`,
            children: (0, kn.jsx)(M, {
                name: `label`,
                ariaLabel: n.formatMessage({
                    id: `wham.labelSection.envAria`,
                    defaultMessage: `Environment name`
                }),
                placeholder: n.formatMessage({
                    id: `wham.labelSection.namePlaceholder`,
                    defaultMessage: `Name`
                }),
                containerInputClassName: `w-full`,
                className: `flex h-8 w-full items-center rounded-md!`,
                inputClassName: `w-full text-sm`,
                color: `search`,
                value: t,
                onChange: t => e(t.target.value)
            })
        })]
    })
}
var On, kn, An, jn = e((() => {
    Fe(), On = t(A()), k(), kn = D(), An = (0, On.memo)(Dn)
}));

function Mn({
    selectedVersion: e,
    setSelectedVersion: t,
    versions: n,
    defaultVersion: r
}) {
    let i = j();
    return (0, B.jsxs)(P.Root, {
        value: e ?? ``,
        onValueChange: t,
        children: [(0, B.jsx)(P.Trigger, {
            className: `border-token-border-default bg-token-bg-primary! w-48 rounded-md! border`,
            "aria-label": i.formatMessage({
                id: `wham.createEnvironments.languageSelector.openVersionMenu`,
                defaultMessage: `Open version menu`
            }),
            children: (0, B.jsxs)(`div`, {
                className: `flex w-full items-center justify-between`,
                children: [(0, B.jsx)(P.Value, {
                    placeholder: i.formatMessage({
                        id: `wham.createEnvironments.languageSelector.selectVersion`,
                        defaultMessage: `Select version`
                    })
                }), (0, B.jsx)(P.Icon, {})]
            })
        }), (0, B.jsx)(P.Portal, {
            children: (0, B.jsxs)(P.Content, {
                align: `start`,
                children: [n.map(e => (0, B.jsx)(P.Item, {
                    value: e,
                    children: (0, B.jsx)(`p`, {
                        className: le(`text-token-text-primary text-sm`, e === r ? `font-semibold` : `font-normal`),
                        children: e
                    })
                }, e)), n.length === 1 && (0, B.jsx)(`div`, {
                    className: `flex w-full items-center justify-center p-4`,
                    children: (0, B.jsx)(`p`, {
                        className: `text-token-text-primary text-sm`,
                        children: i.formatMessage({
                            id: `wham.createEnvironments.languageSelector.noVersions`,
                            defaultMessage: `No other versions available`
                        })
                    })
                })]
            })
        })]
    })
}

function Nn({
    icon: e,
    language: t,
    versions: n,
    defaultVersion: r,
    selectedVersion: i,
    setSelectedVersion: a
}) {
    return (0, B.jsxs)(`div`, {
        className: `flex items-center justify-between gap-2 pe-2`,
        children: [(0, B.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, B.jsx)(e, {
                className: `icon`
            }), (0, B.jsx)(`p`, {
                className: `text-token-text-primary text-sm font-medium`,
                children: t
            })]
        }), (0, B.jsx)(Mn, {
            defaultVersion: r,
            selectedVersion: i,
            setSelectedVersion: a,
            versions: n
        })]
    })
}

function Pn(e, t) {
    let n = e.split(`.`).map(Number),
        r = t.split(`.`).map(Number);
    for (let e = 0; e < Math.max(n.length, r.length); e++) {
        let t = n[e] ?? 0,
            i = r[e] ?? 0;
        if (t !== i) return i - t
    }
    return 0
}

function Fn({
    onClose: e,
    envVars: t,
    pushValue: n,
    replaceValue: r
}) {
    let i = e => i => {
        let a = t.findIndex(t => t.key === e);
        a === -1 ? n({
            key: e,
            value: i
        }) : r(a, {
            ...t[a],
            value: i
        })
    };
    return (0, B.jsx)(m, {
        isOpen: !0,
        onClose: e,
        type: `success`,
        testId: `modal-language-selector-modal`,
        showCloseButton: !0,
        className: `max-w-screen-xs`,
        title: (0, B.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, B.jsx)(O, {
                id: `wham.languageModal.languageSelector.title`,
                defaultMessage: `Preinstalled packages`
            }), (0, B.jsx)(`p`, {
                className: `text-token-text-secondary text-sm font-normal`,
                children: (0, B.jsx)(O, {
                    id: `wham.languageModal.languageSelector.description`,
                    defaultMessage: `Configure your own packages in the setup script.`
                })
            })]
        }),
        children: (0, B.jsx)(`div`, {
            className: `flex flex-col gap-4`,
            children: In.map(e => {
                let n = [...e.versions],
                    r = t.find(t => t.key === e.envVar)?.value;
                return r && !n.includes(r) && n.push(r), n.sort(Pn), (0, B.jsx)(Nn, {
                    icon: e.icon,
                    language: e.label,
                    versions: n,
                    selectedVersion: r ?? e.defaultVersion,
                    defaultVersion: e.defaultVersion,
                    setSelectedVersion: t => i(e.envVar)(t)
                }, e.envVar)
            })
        })
    })
}
var B, In, Ln, Rn = e((() => {
    s(), ut(), At(), vt(), Tt(), gt(), xt(), Dt(), mt(), Et(), Ot(), ge(), k(), B = D(), In = [{
        key: `python`,
        icon: ht,
        label: `Python`,
        envVar: `CODEX_ENV_PYTHON_VERSION`,
        versions: [`3.14`, `3.13`, `3.12`, `3.11`, `3.10`],
        defaultVersion: `3.12`
    }, {
        key: `nodejs`,
        icon: _t,
        label: `Node.js`,
        envVar: `CODEX_ENV_NODE_VERSION`,
        versions: [`22`, `20`, `18`],
        defaultVersion: `20`
    }, {
        key: `ruby`,
        icon: wt,
        label: `Ruby`,
        envVar: `CODEX_ENV_RUBY_VERSION`,
        versions: [`3.2.3`, `3.3.8`, `3.4.4`],
        defaultVersion: `3.4.4`
    }, {
        key: `rust`,
        icon: bt,
        label: `Rust`,
        envVar: `CODEX_ENV_RUST_VERSION`,
        versions: [`1.95.0`, `1.94.0`, `1.93.0`, `1.92.0`, `1.91.1`, `1.90.0`, `1.89.0`, `1.88.0`, `1.87.0`, `1.86.0`, `1.85.1`, `1.84.1`, `1.83.0`],
        defaultVersion: `1.89.0`
    }, {
        key: `go`,
        icon: yt,
        label: `Go`,
        envVar: `CODEX_ENV_GO_VERSION`,
        versions: [`1.25.1`, `1.24.3`, `1.23.8`, `1.22.12`],
        defaultVersion: `1.24.3`
    }, {
        key: `bun`,
        icon: pt,
        label: `Bun`,
        envVar: `CODEX_ENV_BUN_VERSION`,
        versions: [`1.2.14`],
        defaultVersion: `1.2.14`
    }, {
        key: `php`,
        icon: kt,
        label: `PHP`,
        envVar: `CODEX_ENV_PHP_VERSION`,
        versions: [`8.5`, `8.4`, `8.3`, `8.2`],
        defaultVersion: `8.4`
    }, {
        key: `java`,
        icon: St,
        label: `Java`,
        envVar: `CODEX_ENV_JAVA_VERSION`,
        versions: [`25`, `24`, `23`, `22`, `21`, `17`, `11`],
        defaultVersion: `21`
    }, {
        key: `swift`,
        icon: Ct,
        label: `Swift`,
        envVar: `CODEX_ENV_SWIFT_VERSION`,
        versions: [`6.2`, `6.1`, `5.10`],
        defaultVersion: `6.1`
    }], Ln = In.map(e => ({
        key: e.envVar,
        value: e.defaultVersion
    }))
}));

function zn({
    selectedMachineId: e,
    setSelectedMachineId: t
}) {
    let n = j(),
        {
            data: r
        } = De({
            queryKey: [`wham`, `machines`],
            queryFn: () => ue.getMachines()
        }),
        i = (0, Vn.useMemo)(() => {
            let e = Array.isArray(r) ? r : [],
                t = new Set(be.map(e => e.id));
            return [...e.filter(e => !t.has(e.id)), ...be]
        }, [r]);
    return (0, Vn.useEffect)(() => {
        !e && i.length && t(i[0].id)
    }, [e, t, i]), (0, V.jsxs)(P.Root, {
        value: e ?? ``,
        onValueChange: e => {
            t(e)
        },
        children: [(0, V.jsx)(P.Trigger, {
            className: `border-token-border-default! bg-token-bg-primary! w-48 rounded-md! border`,
            "aria-label": n.formatMessage({
                id: `wham.machineSelectorPopover.openMachineMenu`,
                defaultMessage: `Open machine menu`
            }),
            children: (0, V.jsxs)(`div`, {
                className: `flex w-full items-center justify-between`,
                children: [(0, V.jsx)(P.Value, {
                    placeholder: n.formatMessage({
                        id: `wham.machineSelectorPopover.selectMachine`,
                        defaultMessage: `Select machine`
                    })
                }), (0, V.jsx)(P.Icon, {})]
            })
        }), (0, V.jsx)(P.Portal, {
            children: (0, V.jsx)(P.Content, {
                align: `start`,
                className: `bg-token-bg-primary`,
                children: (0, V.jsx)(Bn, {
                    machines: i
                })
            })
        })]
    })
}

function Bn({
    machines: e
}) {
    return (0, V.jsxs)(`div`, {
        className: `bg-token-bg-primary flex max-h-[400px] w-full flex-col gap-2 overflow-y-auto rounded-lg p-2`,
        children: [e.length > 0 ? e.map(e => (0, V.jsx)(P.Item, {
            value: e.id,
            children: e.label
        }, e.id)) : (0, V.jsx)(`div`, {
            className: `p-2 text-center`,
            children: (0, V.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, V.jsx)(O, {
                    id: `wham.createEnvironments.machineSelector.noMatchesFound`,
                    defaultMessage: `No matches found`
                })
            })
        }), e.length === 1 && (0, V.jsx)(`div`, {
            className: `p-2 text-start`,
            children: (0, V.jsx)(`p`, {
                className: `text-token-text-tertiary ps-2 text-xs`,
                children: (0, V.jsx)(O, {
                    id: `wham.createEnvironments.machineSelector.noMachinesFound`,
                    defaultMessage: `Custom images coming soon`
                })
            })
        })]
    })
}
var Vn, V, Hn = e((() => {
    ut(), v(), oe(), Ae(), Vn = t(A()), k(), V = D()
}));

function Un({
    selectedMachineId: e,
    setSelectedMachineId: t,
    envVars: n,
    pushValue: i,
    replaceValue: a
}) {
    let o = j(),
        [s, c] = (0, Wn.useState)(!1);
    return (0, H.jsxs)(H.Fragment, {
        children: [(0, H.jsxs)(`div`, {
            className: `flex flex-col gap-2`,
            children: [(0, H.jsx)(`p`, {
                className: `text-token-text-primary text-sm font-medium`,
                children: (0, H.jsx)(O, {
                    id: `wham.createEnvironments.machineSelector`,
                    defaultMessage: `Container image`
                })
            }), (0, H.jsxs)(`div`, {
                className: `flex gap-2`,
                children: [(0, H.jsx)(zn, {
                    selectedMachineId: e,
                    setSelectedMachineId: t
                }), (0, H.jsx)(r, {
                    color: `secondary`,
                    size: `medium`,
                    type: `button`,
                    icon: $e,
                    onClick: () => {
                        c(!0)
                    },
                    "aria-label": o.formatMessage({
                        id: `wham.createEnvironments.languageSelector.titleAriaLabel`,
                        defaultMessage: `Button to open preinstalled packages modal`
                    }),
                    className: `w-fit`,
                    children: (0, H.jsx)(`p`, {
                        className: `text-token-text-primary text-sm font-medium`,
                        children: (0, H.jsx)(O, {
                            id: `wham.createEnvironments.languageSelector.title`,
                            defaultMessage: `Preinstalled packages`
                        })
                    })
                })]
            })]
        }), s && (0, H.jsx)(Fn, {
            onClose: () => c(!1),
            envVars: n,
            pushValue: i,
            replaceValue: a
        })]
    })
}
var Wn, H, Gn, Kn = e((() => {
    w(), We(), Rn(), Hn(), Wn = t(A()), k(), H = D(), Gn = (0, Wn.memo)(Un)
}));

function qn({
    cacheSettings: e,
    onChange: t
}) {
    let n = j();
    return (0, Yn.jsxs)(`div`, {
        className: `mb-2 flex flex-col gap-2`,
        children: [(0, Yn.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, Yn.jsx)(O, {
                id: `wham.postSetupCaching.title`,
                defaultMessage: `Container Caching`
            })
        }), (0, Yn.jsx)(`p`, {
            className: `text-token-text-tertiary mb-1 text-xs`,
            children: (0, Yn.jsx)(O, {
                id: `wham.postSetupCaching.description`,
                defaultMessage: `Speed up container start by caching state after running the setup script. Maintenance scripts are run before every task.`
            })
        }), (0, Yn.jsx)(ot, {
            className: `max-w-32`,
            ariaLabel: n.formatMessage({
                id: `wham.postSetupCachingToggle.label`,
                defaultMessage: `Container Caching`
            }),
            value: e?.post_setup_cache_enabled ? `on` : `off`,
            onChange: e => t({
                post_setup_cache_enabled: e === `on`
            }),
            leftItem: {
                ariaLabel: n.formatMessage(Xn.toggleOffAriaLabel),
                label: n.formatMessage(Xn.toggleOffLabel),
                value: `off`
            },
            rightItem: {
                ariaLabel: n.formatMessage(Xn.toggleOnAriaLabel),
                label: n.formatMessage(Xn.toggleOnLabel),
                value: `on`
            }
        })]
    })
}
var Jn, Yn, Xn, Zn, Qn = e((() => {
    at(), Jn = t(A()), k(), Yn = D(), Xn = Ee({
        toggleOffLabel: {
            id: `wham.postSetupCaching.off`,
            defaultMessage: `Off`
        },
        toggleOnLabel: {
            id: `wham.postSetupCaching.on`,
            defaultMessage: `On`
        },
        toggleOffAriaLabel: {
            id: `wham.postSetupCaching.offAriaLabel`,
            defaultMessage: `Toggle to turn off post setup caching`
        },
        toggleOnAriaLabel: {
            id: `wham.postSetupCaching.onAriaLabel`,
            defaultMessage: `Toggle to turn on post setup caching`
        }
    }), Zn = (0, Jn.memo)(qn)
}));

function $n({
    value: e,
    index: t,
    pushValue: n,
    changeValue: i,
    removeValue: a
}) {
    let o = j();
    return (0, U.jsxs)(`div`, {
        className: `border-token-border-light bg-token-bg-primary mt-4 rounded-xl border p-4 shadow-sm`,
        children: [(0, U.jsxs)(`div`, {
            className: `flex w-full items-center gap-3`,
            children: [(0, U.jsx)(M, {
                name: `secrets[${t}].key`,
                color: `search`,
                containerInputClassName: `w-full`,
                className: `text-token-text-primary flex h-8 w-full items-center rounded-md!`,
                value: e.key,
                onPaste: e => pn(e, t, i, n),
                onChange: n => {
                    i(t, {
                        ...e,
                        key: n.target.value
                    })
                },
                placeholder: o.formatMessage({
                    id: `wham.secretsSection.keyPlaceholder`,
                    defaultMessage: `Key`
                }),
                ariaLabel: o.formatMessage({
                    id: `wham.secretsSection.keyAria`,
                    defaultMessage: `Secret Key`
                })
            }), (0, U.jsx)(M, {
                name: `secrets[${t}].value`,
                className: `text-token-text-primary flex h-8 w-full items-center rounded-md!`,
                containerInputClassName: `w-full`,
                color: `search`,
                type: `password`,
                value: e.value,
                onChange: n => {
                    i(t, {
                        ...e,
                        value: n.target.value
                    })
                },
                placeholder: o.formatMessage({
                    id: `wham.secretsSection.value`,
                    defaultMessage: `Value`
                }),
                ariaLabel: o.formatMessage({
                    id: `wham.secretsSection.secretValue`,
                    defaultMessage: `Secret Value`
                })
            }), (0, U.jsx)(r, {
                type: `button`,
                size: `small`,
                color: `secondary`,
                onClick: () => a(t),
                "aria-label": o.formatMessage({
                    id: `wham.createEnvironments.secretsSection.deleteAriaLabel`,
                    defaultMessage: `Button to remove secret`
                }),
                children: (0, U.jsx)(O, {
                    id: `wham.createEnvironments.secretsSection.delete`,
                    defaultMessage: `Delete`
                })
            })]
        }), (0, U.jsxs)(`div`, {
            className: `border-token-border-light mt-3 border-t pt-3`,
            children: [(0, U.jsx)(`p`, {
                className: `mb-1 text-xs text-gray-500`,
                children: o.formatMessage({
                    id: `wham.secretsSection.domainLabel`,
                    defaultMessage: `Domain (optional)`
                })
            }), (0, U.jsx)(M, {
                name: `secrets[${t}].domain`,
                value: e.domain ?? ``,
                onChange: n => {
                    i(t, {
                        ...e,
                        domain: n.target.value
                    })
                },
                placeholder: o.formatMessage({
                    id: `wham.secretsSection.domainPlaceholder`,
                    defaultMessage: `e.g. aws.amazon.com`
                }),
                ariaLabel: o.formatMessage({
                    id: `wham.secretsSection.domainAria`,
                    defaultMessage: `Secret Domain`
                })
            })]
        })]
    })
}

function er({
    pushValue: e,
    removeValue: t,
    changeValue: n,
    values: i,
    enableAuthtranslator: a = !1,
    onEnableAuthtranslatorChange: o,
    isAuthtranslatorGateEnabled: s = !1
}) {
    let c = j(),
        [l, u] = (0, tr.useState)(a && s);
    (0, tr.useEffect)(() => {
        !s && l && u(!1)
    }, [l, s]), (0, tr.useEffect)(() => {
        s && u(a ?? !1)
    }, [a, s]);
    let d = s && l;
    return (0, U.jsxs)(`div`, {
        className: `mb-2 flex flex-col gap-2`,
        children: [(0, U.jsxs)(`div`, {
            className: `flex items-center justify-between gap-4`,
            children: [(0, U.jsx)(`p`, {
                className: `text-token-text-primary text-sm font-medium`,
                children: (0, U.jsx)(O, {
                    id: `wham.createEnvironments.secretsSection`,
                    defaultMessage: `Secrets`
                })
            }), s && (0, U.jsxs)(`div`, {
                className: `text-token-text-secondary flex items-center gap-4 text-sm`,
                children: [(0, U.jsxs)(`div`, {
                    className: `flex items-center gap-1`,
                    children: [(0, U.jsx)(O, {
                        id: `wham.createEnvironments.secretsSection.enableAuthtranslator`,
                        defaultMessage: `Enable domain scoped secrets`
                    }), (0, U.jsx)(S, {
                        label: c.formatMessage({
                            id: `wham.createEnvironments.secretsSection.enableAuthtranslator.tooltip`,
                            defaultMessage: `Advanced prompt-injection protection: secrets never reach the model and are only sent to their domain.`
                        }),
                        children: (0, U.jsx)(ie, {
                            className: `icon text-token-text-tertiary`
                        })
                    })]
                }), (0, U.jsx)(ot, {
                    className: `max-w-32`,
                    ariaLabel: c.formatMessage({
                        id: `wham.createEnvironments.secretsSection.enableAuthtranslator.aria`,
                        defaultMessage: `Domain scoped secrets`
                    }),
                    value: l ? `on` : `off`,
                    onChange: e => {
                        let t = e === `on`;
                        u(t), o?.(t)
                    },
                    leftItem: {
                        ariaLabel: c.formatMessage(nr.offAria),
                        label: c.formatMessage(nr.offLabel),
                        value: `off`
                    },
                    rightItem: {
                        ariaLabel: c.formatMessage(nr.onAria),
                        label: c.formatMessage(nr.onLabel),
                        value: `on`
                    }
                })]
            })]
        }), d && (0, U.jsxs)(`div`, {
            className: `bg-token-bg-critical-muted border-token-border-light flex flex-col gap-1 rounded-lg border px-3 py-2`,
            children: [(0, U.jsx)(`p`, {
                className: `text-token-text-critical text-xs font-medium`,
                children: (0, U.jsx)(O, {
                    id: `wham.createEnvironments.secretsSection.domainlessWarning.title`,
                    defaultMessage: `Domain required for injection`
                })
            }), (0, U.jsx)(`p`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, U.jsx)(O, {
                    id: `wham.createEnvironments.secretsSection.domainlessWarning`,
                    defaultMessage: `Secrets without a domain won't be injected into the agent environment while this is on (setup scripts still receive their real values). Add a domain to make them available during tasks.`
                })
            })]
        }), d ? i.map((r, i) => (0, U.jsx)($n, {
            value: r,
            index: i,
            pushValue: e,
            changeValue: n,
            removeValue: t
        }, i)) : i.map((i, a) => (0, U.jsxs)(`div`, {
            className: `flex gap-2 pt-2`,
            children: [(0, U.jsx)(M, {
                name: `secrets[${a}].key`,
                color: `search`,
                containerInputClassName: `w-full`,
                className: `text-token-text-primary flex h-8 w-full items-center rounded-md!`,
                value: i.key,
                onPaste: t => pn(t, a, n, e),
                onChange: e => {
                    n(a, {
                        ...i,
                        key: e.target.value
                    })
                },
                placeholder: c.formatMessage({
                    id: `wham.secretsSection.keyPlaceholder`,
                    defaultMessage: `Key`
                }),
                ariaLabel: c.formatMessage({
                    id: `wham.secretsSection.keyAria`,
                    defaultMessage: `Secret Key`
                })
            }), (0, U.jsx)(M, {
                name: `secrets[${a}].value`,
                className: `text-token-text-primary flex h-8 w-full items-center rounded-md!`,
                containerInputClassName: `w-full`,
                color: `search`,
                type: `password`,
                value: i.value,
                onChange: e => {
                    n(a, {
                        ...i,
                        value: e.target.value
                    })
                },
                placeholder: c.formatMessage({
                    id: `wham.secretsSection.value`,
                    defaultMessage: `Value`
                }),
                ariaLabel: c.formatMessage({
                    id: `wham.secretsSection.secretValue`,
                    defaultMessage: `Secret Value`
                })
            }), (0, U.jsx)(r, {
                type: `button`,
                size: `small`,
                color: `secondary`,
                onClick: () => t(a),
                children: (0, U.jsx)(O, {
                    id: `wham.createEnvironments.secretsSection.delete`,
                    defaultMessage: `Delete`
                })
            })]
        }, a)), (0, U.jsx)(`div`, {
            className: `pt-2`,
            children: (0, U.jsx)(r, {
                color: `secondary`,
                size: `small`,
                onClick: () => {
                    e({
                        key: ``,
                        value: ``,
                        isEditing: !1,
                        domain: d ? null : void 0,
                        previousDomain: void 0,
                        previousKey: void 0
                    })
                },
                type: `button`,
                className: `w-fit`,
                "aria-label": c.formatMessage({
                    id: `wham.createEnvironments.secretsSection.addAriaLabel`,
                    defaultMessage: `Button to add another secret`
                }),
                children: (0, U.jsxs)(`div`, {
                    className: `flex items-center gap-1`,
                    children: [(0, U.jsx)(O, {
                        id: `wham.createEnvironments.secretsSection.add`,
                        defaultMessage: `Add`
                    }), (0, U.jsx)(Ge, {
                        className: `icon-sm`
                    })]
                })
            })
        })]
    })
}
var tr, U, nr, rr, ir = e((() => {
    w(), Fe(), at(), _(), fe(), Ue(), hn(), tr = t(A()), k(), U = D(), nr = Ee({
        offLabel: {
            id: `wham.secretsSection.toggle.off`,
            defaultMessage: `Off`
        },
        onLabel: {
            id: `wham.secretsSection.toggle.on`,
            defaultMessage: `On`
        },
        offAria: {
            id: `wham.secretsSection.toggle.offAria`,
            defaultMessage: `Disable domain scoped secrets`
        },
        onAria: {
            id: `wham.secretsSection.toggle.onAria`,
            defaultMessage: `Enable domain scoped secrets`
        }
    }), rr = (0, tr.memo)(er)
}));

function ar({
    script: e,
    onChange: t
}) {
    let n = j(),
        r = Math.min(10, Math.max(4, e.split(`
`).length));
    return (0, W.jsxs)(W.Fragment, {
        children: [(0, W.jsx)(`div`, {
            className: `flex items-center justify-between`,
            children: (0, W.jsx)(`p`, {
                className: `text-token-text-primary text-sm font-medium`,
                children: (0, W.jsx)(O, {
                    id: `wham.createEnvironments.maintenanceSetupCommandsSection`,
                    defaultMessage: `Maintenance script`
                })
            })
        }), (0, W.jsx)(`div`, {
            className: `flex items-center gap-2 pt-2`,
            children: (0, W.jsx)(`textarea`, {
                name: `setupCommands`,
                className: `border-token-border-default focus-within:border-token-border-heavy focus-within:ring-token-text-secondary bg-token-bg-primary min-h-32 w-full resize-y rounded-md border px-3 py-2 font-mono text-xs shadow-none focus-within:ring-1`,
                value: e,
                rows: r,
                onChange: e => {
                    t(e.target.value)
                },
                placeholder: sr,
                "aria-label": n.formatMessage({
                    id: `wham.maintenanceSetupCommandsSection.maintenanceSetupCommand`,
                    defaultMessage: `Maintenance Setup Command`
                })
            })
        }), (0, W.jsx)(`p`, {
            className: `text-token-text-tertiary pt-2 text-xs`,
            children: (0, W.jsx)(O, {
                id: `wham.createEnvironments.maintenanceSetupCommandsSection.description`,
                defaultMessage: `The maintenance script is run in containers that were resumed from the cache, after checking out the branch.{br}<strong>Network access is always enabled for this step.</strong>`,
                values: {
                    br: (0, W.jsx)(`br`, {}),
                    strong: e => (0, W.jsx)(`span`, {
                        className: `font-semibold`,
                        children: e
                    })
                }
            })
        })]
    })
}
var or, W, sr, cr, lr = e((() => {
    or = t(A()), k(), W = D(), sr = `# e.g.
pip install -r requirements.txt
npm install
./run/maintenance_setup.sh
`, cr = (0, or.memo)(ar)
}));

function ur({
    value: e,
    onChangeAutoSetupSettings: t
}) {
    let n = j();
    return (0, G.jsx)(ot, {
        className: `max-w-64`,
        ariaLabel: n.formatMessage({
            id: `wham.autoSetup.label`,
            defaultMessage: `Auto setup`
        }),
        value: e ? `on` : `off`,
        onChange: e => {
            t(e === `off` ? {
                use_auto_setup: !0
            } : {
                use_auto_setup: !1
            })
        },
        leftItem: {
            ariaLabel: n.formatMessage(mr.toggleAutomaticAriaLabel),
            label: n.formatMessage(mr.toggleAutomaticLabel),
            value: `off`
        },
        rightItem: {
            ariaLabel: n.formatMessage(mr.toggleManualAriaLabel),
            label: n.formatMessage(mr.toggleManualLabel),
            value: `on`
        }
    })
}

function dr({
    setupScript: e,
    maintenanceScript: t,
    onSetupScriptChange: n,
    onMaintenanceScriptChange: i,
    setupScriptChildren: a,
    maintenanceScriptChildren: o,
    onClickAppendReplHistory: s,
    inputRef: c,
    replCommandHistory: l,
    suggestedCommand: u,
    onClickAcceptSuggestedCommand: d,
    autoSetupSettings: f,
    onChangeAutoSetupSettings: p,
    postSetupCacheEnabled: m
}) {
    let h = j(),
        g = e === `` && f == null,
        _ = f?.use_auto_setup ?? g;
    return (0, G.jsxs)(`div`, {
        className: `mb-2 flex flex-col gap-2`,
        children: [(0, G.jsxs)(`div`, {
            className: `flex items-center justify-between`,
            children: [(0, G.jsx)(`p`, {
                className: `text-token-text-primary text-sm font-medium`,
                children: (0, G.jsx)(O, {
                    id: `wham.createEnvironments.setupCommandsSection`,
                    defaultMessage: `Setup script`
                })
            }), !_ && (0, G.jsx)(G.Fragment, {
                children: u ? (0, G.jsx)(S, {
                    className: `-my-2.5 block`,
                    label: h.formatMessage({
                        id: `wham.createEnv.terminal.addCommandSuggestion`,
                        defaultMessage: `Add suggestion to setup script`
                    }),
                    children: (0, G.jsx)(r, {
                        type: `button`,
                        color: `secondary`,
                        size: `small`,
                        onClick: d,
                        icon: Ge,
                        children: (0, G.jsx)(`span`, {
                            className: `max-w-[200px] truncate font-mono text-xs`,
                            children: u.trimEnd().replace(`
`, `; `)
                        })
                    })
                }) : l.length > 0 ? (0, G.jsx)(S, {
                    className: `-my-2.5 block`,
                    label: h.formatMessage({
                        id: `wham.createEnv.terminal.addCommands`,
                        defaultMessage: `Add commands you've run to the setup script`
                    }),
                    children: (0, G.jsx)(r, {
                        type: `button`,
                        color: `secondary`,
                        size: `small`,
                        onClick: s,
                        icon: Ge,
                        children: (0, G.jsx)(O, {
                            id: `wham.createEnvironments.terminalSection.addToSetupScript`,
                            defaultMessage: `New commands ({count})`,
                            values: {
                                count: l.length
                            }
                        })
                    })
                }) : null
            })]
        }), (0, G.jsx)(ur, {
            value: !_,
            onChangeAutoSetupSettings: p
        }), _ && (0, G.jsx)(`p`, {
            className: `text-token-text-tertiary mb-1 text-xs`,
            children: (0, G.jsx)(O, {
                id: `wham.autoSetup.description`,
                defaultMessage: `Runs the install commands like npm install for common package managers. <docs>Learn more.</docs>`,
                values: {
                    docs: e => (0, G.jsx)(`a`, {
                        href: `https://platform.openai.com/docs/codex/overview#setup-scripts`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `underline`,
                        children: e
                    })
                }
            })
        }), !_ && (0, G.jsxs)(G.Fragment, {
            children: [(0, G.jsx)(`div`, {
                className: `flex items-center gap-2 pt-2`,
                children: (0, G.jsx)(`textarea`, {
                    ref: c,
                    name: `setupCommands`,
                    className: `border-token-border-default focus-within:border-token-border-heavy focus-within:ring-token-text-secondary bg-token-bg-primary min-h-32 w-full resize-y rounded-md border px-3 py-2 font-mono text-xs shadow-none focus-within:ring-1`,
                    value: e,
                    rows: Math.min(10, Math.max(4, e.split(`
`).length)),
                    onChange: e => {
                        n(e.target.value)
                    },
                    placeholder: pr,
                    "aria-label": h.formatMessage({
                        id: `wham.setupCommandsSection.setupCommand`,
                        defaultMessage: `Setup Command`
                    })
                })
            }), (0, G.jsx)(`p`, {
                className: `text-token-text-tertiary pt-2 text-xs`,
                children: m ? (0, G.jsx)(O, {
                    id: `wham.createEnvironments.setupCommandsSection.withCachingDescription`,
                    defaultMessage: `The setup script is run after creating new containers, after the repo is cloned.{br}<strong>Network access is always enabled for this step.</strong>`,
                    values: {
                        br: (0, G.jsx)(`br`, {}),
                        strong: e => (0, G.jsx)(`span`, {
                            className: `font-semibold`,
                            children: e
                        })
                    }
                }) : (0, G.jsx)(O, {
                    id: `wham.createEnvironments.setupCommandsSection.description`,
                    defaultMessage: `The setup script is run at the start of every task, after the repo is cloned.{br}<strong>Network access is always enabled for this step.</strong>`,
                    values: {
                        br: (0, G.jsx)(`br`, {}),
                        strong: e => (0, G.jsx)(`span`, {
                            className: `font-semibold`,
                            children: e
                        })
                    }
                })
            }), a]
        }), m && !_ && (0, G.jsxs)(G.Fragment, {
            children: [(0, G.jsx)(cr, {
                script: t,
                onChange: i
            }), o]
        })]
    })
}
var fr, G, pr, mr, hr, gr = e((() => {
    w(), Ue(), _(), at(), lr(), fr = t(A()), k(), G = D(), pr = `# e.g.
pip install -r requirements.txt
npm install
./run/setup.sh
`, mr = Ee({
        toggleAutomaticLabel: {
            id: `wham.autoSetup.automatic`,
            defaultMessage: `Automatic`
        },
        toggleManualLabel: {
            id: `wham.autoSetup.manual`,
            defaultMessage: `Manual`
        },
        toggleAutomaticAriaLabel: {
            id: `wham.autoSetup.automaticAriaLabel`,
            defaultMessage: `Toggle to turn on automatic setup`
        },
        toggleManualAriaLabel: {
            id: `wham.autoSetup.manualAriaLabel`,
            defaultMessage: `Toggle to turn on auto setup`
        }
    }), hr = (0, fr.memo)(dr)
}));

function _r(e, t, n) {
    if (e.some(e => e.domain !== void 0) || n?.length) {
        let r = [],
            i = (e, t) => `${e}::${t??`__global__`}`,
            a = n?.filter(e => !!e.name) ?? [],
            o = new Map;
        if (a.length > 0)
            for (let e of a) {
                let t = e.name ?? ``;
                o.set(i(t, e.domain ?? null), {
                    name: t,
                    domain: e.domain ?? null
                })
            } else
                for (let e of Object.keys(t)) o.set(i(e, null), {
                    name: e,
                    domain: null
                });
        let s = new Set;
        for (let {
                key: n,
                value: a,
                domain: o,
                previousDomain: c,
                previousKey: l
            }
            of e) {
            let e = o ?? null;
            if (c === void 0) {
                a !== `` && r.push({
                    name: n,
                    domain: e,
                    value: a
                });
                continue
            }
            let u = c ?? null,
                d = l ?? n,
                f = i(d, u);
            s.add(f);
            let p = t[d],
                m = a !== `<REDACTED>` && a !== p,
                h = u !== e,
                g = l !== void 0 && l !== n;
            (h || m || g) && r.push({
                name: n,
                domain: e,
                value: m ? a : null,
                previous_domain: u,
                ...g ? {
                    previous_name: d
                } : {}
            })
        }
        for (let [e, t] of o.entries()) s.has(e) || r.push({
            name: t.name,
            domain: null,
            value: null,
            previous_domain: t.domain ?? null
        });
        return r
    }
    let r = {};
    for (let {
            key: n,
            value: i
        }
        of e) {
        let e = t[n];
        e === void 0 ? i !== `` && (r[n] = i) : i !== `<REDACTED>` && i !== e && (r[n] = i)
    }
    for (let n of Object.keys(t)) e.some(e => e.key === n) || (r[n] = null);
    return r
}
var vr = e((() => {
    v()
}));

function yr({
    onSuggestCommand: e
}) {
    let t = j(),
        [n, r] = (0, K.useState)([]),
        [i, o] = (0, K.useState)(null),
        [s, c] = (0, K.useState)(!1),
        [l, u] = (0, K.useState)(null),
        d = (0, K.useRef)(null),
        f = (0, K.useCallback)(async n => {
            try {
                for await (let t of n) {
                    let n = br(t);
                    if (!n) continue;
                    let i = n.type;
                    switch (i) {
                        case `client_error`:
                        case `server_error`:
                            o(n.message);
                            break;
                        case `log`:
                            if (n.key === `heartbeat`) break;
                            if (n.key === `suggest_command`) e(n.line);
                            else if (n.key.startsWith(`userscript_`)) {
                                let [, e] = n.key.split(`_`), t = Number(e);
                                if (!Number.isFinite(t)) return;
                                n.line.startsWith(`+ `) ? r(e => [...e, {
                                    messageType: `user`,
                                    line: n.line.slice(2),
                                    scriptIndex: t
                                }]) : r(e => [...e, {
                                    messageType: `output`,
                                    line: n.line,
                                    scriptIndex: t
                                }])
                            } else n.line.startsWith(`+ `) ? r(e => [...e, {
                                messageType: `server`,
                                line: n.line.slice(2)
                            }]) : r(e => [...e, {
                                messageType: `output`,
                                line: n.line
                            }]);
                            break;
                        case `test_session_started`:
                            u(n.test_session_id);
                            break;
                        default:
                            (0, xr.default)(i)
                    }
                }
            } catch (e) {
                if (jt(e)) return;
                if (e instanceof x && e.status === 429) {
                    o(t.formatMessage({
                        id: `wham.useStreamTestEnv.errorRateLimited`,
                        defaultMessage: `Too many requests: Your environment didn't start because we're at capacity. Try again soon.`
                    }));
                    return
                }
                o(t.formatMessage({
                    id: `wham.useStreamTestEnv.errorConnecting`,
                    defaultMessage: `Error connecting to the test environment`
                }))
            } finally {
                c(!1)
            }
        }, [t, e]),
        p = async (e, t, n = {}) => {
            d.current = new AbortController, r([]), c(!0), o(null), u(null);
            let i = _r(e.secrets, n),
                s = Sr(i) ? {
                    secrets_with_domains: Cr(i)
                } : {
                    secrets: i
                },
                l = e.envVars.reduce((e, t) => (e[t.key] = t.value, e), {}),
                p = await a(`codex_environment_test`).catch(e => {
                    xe.addError(e)
                }),
                m = {
                    ...h({
                        isAuthOptional: !1
                    }),
                    "Content-Type": `application/json`,
                    ...T(null, null, null, p)
                },
                g = ze(`https://chatgpt.com/backend-api/wham/environments/test`, {
                    method: `POST`,
                    body: {
                        machine_id: e.machine,
                        repos: [e.repositoryId],
                        github_connector_id: e.githubConnectorId,
                        setup: [e.setupCommands],
                        maintenance_setup: [e.maintenanceSetupCommands],
                        workspace_dir: e.workspaceDirectory,
                        env_vars: l,
                        ...s,
                        ...t === void 0 ? {} : {
                            environment_id: t
                        },
                        ...e.agentNetworkAccess === void 0 ? {} : {
                            agent_network_access: e.agentNetworkAccess
                        },
                        ...e.autoSetupSettings === void 0 ? {} : {
                            auto_setup_settings: e.autoSetupSettings
                        }
                    },
                    signal: d.current.signal,
                    headers: m,
                    routeName: `/wham/environments/test`,
                    observer: {
                        onClose: (e, t) => {
                            c(!1), e === `error` && t instanceof Error && o(t.message)
                        }
                    }
                });
            (async () => {
                await f(g)
            })()
        }, m = (0, K.useCallback)(() => {
            d.current?.abort(), r(e => [...e, {
                messageType: `output`,
                line: `Test cancelled`
            }])
        }, []);
    return (0, K.useEffect)(() => () => {
        d.current?.abort()
    }, []), {
        messages: n,
        error: i,
        setError: o,
        isStreaming: s,
        startTestEnvironment: p,
        abortTestEnvironment: m,
        testSessionId: l,
        setTestSessionId: u
    }
}

function br(e) {
    return !(`data` in e) || !e.data ? null : e.data
}
var xr, K, Sr, Cr, wr = e((() => {
    l(), he(), n(), Be(), p(), vr(), Mt(), xr = t(ce()), K = t(A()), k(), Sr = e => Array.isArray(e), Cr = e => e.map(e => ({
        ...e,
        previous_domain: e.previous_domain ?? null,
        previous_name: e.previous_name ?? null
    }))
}));

function Tr({
    testSessionId: e,
    replOutput: t,
    inputRef: n,
    setReplOutput: r,
    setError: i,
    onSetConnected: a,
    onSubmitCommand: o
}) {
    let s = j(),
        [c, l] = (0, q.useState)(``),
        u = (0, q.useCallback)(({
            command: t
        }) => {
            e && ue.runEnvironmentTestCommand({
                command: t,
                testSessionId: e
            })
        }, [e]),
        {
            connected: d
        } = Dr({
            testSessionId: e,
            processStream: (0, q.useCallback)(async e => {
                try {
                    for await (let t of e) {
                        let e = br(t);
                        if (!e) continue;
                        let n = e.type;
                        switch (n) {
                            case `client_error`:
                            case `server_error`:
                                i(e.message);
                                break;
                            case `log`: {
                                let t = Or(e.line).replace(/\x1b\].*?\x07/g, ``).replace(/\x1b\[\?2004[hl]/g, ``);
                                r(e => [...e, t]);
                                break
                            }
                            case `test_session_started`:
                                break;
                            default:
                                (0, kr.default)(n)
                        }
                    }
                } catch (e) {
                    if (jt(e)) return;
                    i(s.formatMessage({
                        id: `wham.envTestRepl.error`,
                        defaultMessage: `Error connecting to the test environment`
                    }))
                }
            }, [s, i, r]),
            setError: i
        });
    (0, q.useEffect)(() => {
        a(d)
    }, [d, a, r]), (0, q.useEffect)(() => {
        e || r([])
    }, [e, r]);
    let f = (0, q.useRef)(null),
        p = t.map((e, t) => (0, J.jsx)(Lt, {
            children: e.replace(/\x1b\].*?\x07/g, ``)
        }, t)),
        [m, h] = (0, q.useState)(!1);
    return e ? (0, J.jsxs)(`div`, {
        className: `flex w-full flex-col whitespace-pre`,
        children: [p, (0, J.jsxs)(`div`, {
            className: `relative w-full p-0 text-[12px] leading-4 focus:ring-0`,
            children: [(0, J.jsxs)(`span`, {
                "aria-hidden": !0,
                className: `flex min-h-4 min-w-2`,
                children: [c, (0, J.jsx)(`span`, {
                    className: `inline-block h-auto w-2`,
                    children: m ? (0, J.jsx)(`div`, {
                        className: `bg-token-text-primary h-full w-full`
                    }) : (0, J.jsx)(C.div, {
                        className: `bg-token-text-primary h-full w-full`,
                        animate: {
                            opacity: [0, 1, 0]
                        },
                        transition: {
                            type: `tween`,
                            ease: `easeInOut`,
                            duration: 2,
                            repeat: 1 / 0
                        }
                    })
                })]
            }), (0, J.jsx)(`input`, {
                type: `text`,
                className: `absolute h-[1px] w-[1px] opacity-0`,
                disabled: !d,
                onChange: e => l(e.target.value),
                onFocus: () => h(!0),
                onBlur: () => h(!1),
                onKeyDown: e => {
                    let t = Er(e);
                    if (t) {
                        e.preventDefault(), l(``), u({
                            command: t
                        });
                        return
                    }
                    if (e.key === `Enter`) {
                        e.preventDefault(), l(``);
                        let t = c + `
`;
                        o(t), u({
                            command: t
                        })
                    }
                },
                value: c,
                ref: _e(n, f)
            })]
        })]
    }) : null
}

function Er(e) {
    return e.ctrlKey ? e.key === `c` ? `` : e.key === `d` ? `` : null : null
}

function Dr({
    testSessionId: e,
    processStream: t,
    setError: n
}) {
    let [r, i] = (0, q.useState)(!1), a = (0, q.useCallback)(r => {
        let a = ze(`https://chatgpt.com/backend-api/wham/environments/test/${e}/stream`, {
            routeName: `/wham/environments/test/{test_session_id}/stream`,
            method: `POST`,
            signal: r.signal,
            headers: {
                ...h({
                    isAuthOptional: !1
                }),
                "Content-Type": `application/json`
            },
            observer: {
                onOpen: () => {
                    i(!0)
                },
                onClose: (e, t) => {
                    i(!1), e === `error` && t instanceof Error && n(t.message)
                }
            }
        });
        (async () => {
            await t(a)
        })()
    }, [e, t, n]);
    return (0, q.useEffect)(() => {
        if (!e) return;
        let t = new AbortController;
        return a(t), () => {
            t.abort()
        }
    }, [e, a]), {
        connected: r
    }
}

function Or(e) {
    let t = atob(e),
        n = t.length,
        r = new Uint8Array(n);
    for (let e = 0; e < n; e += 1) r[e] = t.charCodeAt(e);
    return Ar.decode(r)
}
var kr, q, J, Ar, jr = e((() => {
    It(), n(), Be(), E(), wr(), Mt(), oe(), kr = t(ce()), o(), q = t(A()), k(), J = D(), Ar = new TextDecoder(`utf-8`)
}));

function Mr({
    formValues: e,
    initialSecrets: t,
    environmentId: n,
    onConnectedChange: i,
    onSubmitCommand: a,
    onSuggestCommand: o
}) {
    let s = j(),
        {
            messages: c,
            error: l,
            setError: u,
            abortTestEnvironment: d,
            isStreaming: f,
            startTestEnvironment: p,
            testSessionId: m,
            setTestSessionId: h
        } = yr({
            onSuggestCommand: o
        }),
        [g, _] = (0, Y.useState)([]),
        v = (0, Y.useRef)(null),
        y = (0, Y.useRef)(null),
        [b, x] = (0, Y.useState)(!1);
    (0, Y.useEffect)(() => {
        x(!0)
    }, [e]);
    let [ee, te] = (0, Y.useState)(!0);
    (0, Y.useEffect)(() => {
        if (v.current && y.current && ee) {
            let e = v.current,
                t = y.current;
            t.scrollTop = e.offsetTop - t.offsetTop - t.clientHeight / 2 + e.clientHeight / 2
        }
    }, [c, g, ee]);
    let ne = () => {
            let e = y.current;
            if (!e) return;
            let t = Math.abs(e.scrollTop + e.clientHeight - e.scrollHeight) < 2;
            te(t)
        },
        [re, C] = (0, Y.useState)(!1),
        [w, ie] = (0, Y.useState)(!1),
        ae = () => {
            C(!0), x(!1), h(null), p(e, n, t)
        },
        oe = e => {
            ie(e), i(e)
        };
    (0, Y.useEffect)(() => () => i(!1), []);
    let se = (0, Y.useRef)(null),
        ce = !w && !f,
        T = !ce && b,
        le = ce && !re || T,
        E = !e.repositoryId,
        [ue, de] = (0, Y.useState)(!1),
        fe = (0, X.jsx)(`div`, {
            className: `absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/20 dark:bg-white/5`,
            onMouseUp: e => e.stopPropagation(),
            onClick: async () => {
                T && (x(!1), de(!0), await new Promise(e => setTimeout(e, 3e3)), de(!1))
            },
            children: (0, X.jsx)(S, {
                open: E || T ? void 0 : !1,
                label: E ? s.formatMessage({
                    id: `wham.createEnv.terminal.selectRepo`,
                    defaultMessage: `Please select a repository`
                }) : T ? s.formatMessage({
                    id: `wham.createEnv.terminal.restartTooltip`,
                    defaultMessage: `Changes will only be reflected after a restart.`
                }) : void 0,
                children: (0, X.jsx)(r, {
                    onClick: ae,
                    disabled: !e.repositoryId,
                    type: `button`,
                    color: `primary-inverse`,
                    icon: Je,
                    children: T ? (0, X.jsx)(O, {
                        id: `wham.createEnvironments.terminalSection.reRunSetupScript`,
                        defaultMessage: `Re-run setup script`
                    }) : (0, X.jsx)(O, {
                        id: `wham.createEnvironments.terminalSection.runSetupScript`,
                        defaultMessage: `Connect interactive terminal`
                    })
                })
            })
        }),
        [{
            height: pe
        }, me] = (0, Pr.default)();
    return (0, X.jsxs)(`div`, {
        onMouseUp: e => {
            document.getSelection()?.toString() || (se.current?.focus(), e.preventDefault())
        },
        className: `dark focus-within:ring-primary relative flex h-full w-full flex-col overflow-hidden rounded-xl ring-offset-2 focus-within:ring-2`,
        children: [(0, X.jsxs)(`div`, {
            ref: me,
            className: `bg-token-bg-tertiary flex shrink-0 flex-row justify-between p-4`,
            children: [(0, X.jsx)(`div`, {
                className: `text-sm font-semibold text-white`,
                children: (0, X.jsx)(O, {
                    id: `wham.createEnvironments.terminalSection`,
                    defaultMessage: `Terminal`
                })
            }), (0, X.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [(w || !!l || re && !f) && (0, X.jsx)(S, {
                    className: `flex`,
                    open: ue ? !0 : void 0,
                    label: s.formatMessage({
                        id: `wham.createEnvironments.terminalSection.restartSessionTooltip`,
                        defaultMessage: `Restart terminal session`
                    }),
                    children: (0, X.jsx)(Me, {
                        icon: (0, X.jsx)(et, {
                            className: `icon-sm`
                        }),
                        className: `-m-1 h-6! w-6!`,
                        onClick: ae,
                        onMouseEnter: () => de(!1),
                        label: s.formatMessage({
                            id: `wham.createEnvironments.terminalSection.restartSession`,
                            defaultMessage: `Restart session`
                        })
                    })
                }), f && (0, X.jsx)(S, {
                    className: `flex`,
                    open: ue ? !0 : void 0,
                    label: s.formatMessage({
                        id: `wham.createEnvironments.terminalSection.cancelSessionTooltip`,
                        defaultMessage: `Cancel terminal session`
                    }),
                    children: (0, X.jsx)(Me, {
                        icon: (0, X.jsx)(Ze, {
                            className: `icon-sm`
                        }),
                        className: `-m-1 h-6! w-6!`,
                        onClick: d,
                        label: s.formatMessage({
                            id: `wham.createEnvironments.terminalSection.cancelSession`,
                            defaultMessage: `Cancel session`
                        })
                    })
                }), w ? (0, X.jsxs)(X.Fragment, {
                    children: [(0, X.jsx)(`div`, {
                        className: `text-xs text-white`,
                        children: (0, X.jsx)(O, {
                            id: `wham.createEnvironments.terminalSection.connected`,
                            defaultMessage: `Connected`
                        })
                    }), (0, X.jsx)(Nr, {
                        color: `#52EA00`
                    })]
                }) : f ? (0, X.jsxs)(X.Fragment, {
                    children: [(0, X.jsx)(`div`, {
                        className: `text-xs text-white`,
                        children: (0, X.jsx)(O, {
                            id: `wham.createEnvironments.terminalSection.initializing`,
                            defaultMessage: `Initializing`
                        })
                    }), (0, X.jsx)(Nr, {
                        color: `#FF9800`
                    })]
                }) : re ? (0, X.jsxs)(X.Fragment, {
                    children: [(0, X.jsx)(`div`, {
                        className: `text-xs text-white`,
                        children: (0, X.jsx)(O, {
                            id: `wham.createEnvironments.terminalSection.disconnected`,
                            defaultMessage: `Disconnected`
                        })
                    }), (0, X.jsx)(Nr, {
                        color: `#FF0000`
                    })]
                }) : null]
            })]
        }), l && (0, X.jsxs)(`div`, {
            style: {
                top: pe
            },
            className: `bg-token-bg-status-error text-token-text-status-error absolute start-0 end-0 top-0 z-20 flex flex-col gap-2 px-4 py-3 text-sm`,
            children: [(0, X.jsx)(`p`, {
                className: `font-medium`,
                children: (0, X.jsx)(O, {
                    id: `wham.createEnvironments.terminalSection.error`,
                    defaultMessage: `Terminal errored`
                })
            }), (0, X.jsx)(`p`, {
                className: `font-mono text-xs`,
                children: l
            })]
        }), le && fe, (0, X.jsxs)(`div`, {
            className: `bg-token-bg-secondary relative flex flex-1 flex-col overflow-y-auto p-4 font-mono text-xs text-white`,
            onScroll: ne,
            ref: y,
            children: [c.length === 0 && !f && (0, X.jsx)(`p`, {
                className: `text-token-text-tertiary`,
                children: `${e.workspaceDirectory} $`
            }), c.map((e, t) => e.messageType === `user` ? (0, X.jsx)(Lt, {
                className: `text-token-text-tertiary`,
                children: `→ ` + e.line
            }, t) : e.messageType === `server` ? (0, X.jsx)(`p`, {
                className: `text-token-text-tertiary`,
                children: e.line
            }) : (0, X.jsx)(Lt, {
                children: e.line
            }, t)), (0, X.jsx)(Tr, {
                inputRef: se,
                testSessionId: m,
                replOutput: g,
                setReplOutput: _,
                setError: u,
                onSetConnected: oe,
                onSubmitCommand: a
            }), (0, X.jsx)(`div`, {
                ref: v
            })]
        })]
    })
}

function Nr({
    color: e
}) {
    return (0, X.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        width: `6`,
        height: `6`,
        viewBox: `0 0 6 6`,
        fill: `none`,
        className: `animate-pulse`,
        children: (0, X.jsx)(`circle`, {
            cx: `3`,
            cy: `3`,
            r: `3`,
            fill: e
        })
    })
}
var Y, Pr, X, Fr = e((() => {
    It(), w(), qe(), Ke(), He(), _(), Ne(), jr(), Y = t(A()), k(), Pr = t(Ft()), wr(), X = D()
}));

function Ir({
    workspaceDirectory: e,
    repositoryName: t,
    onChange: n,
    onClose: i,
    errors: a
}) {
    let o = j(),
        [s, c] = (0, Lr.useState)(e),
        [l] = (0, Lr.useState)(e ?? `/workspace`),
        u = o.formatMessage({
            id: `wham.createEnvironments.workspaceEditorModal.defaultRepositoryName`,
            defaultMessage: `repository`
        }),
        d = o.formatMessage({
            id: `wham.editWorkspace.modal.title`,
            defaultMessage: `Edit workspace`
        }),
        f = ({
            forceClear: e
        } = {}) => {
            (a.length > 0 || e) && n(l), i()
        };
    return (0, Z.jsxs)(m, {
        isOpen: !0,
        onClose: () => f(),
        type: `success`,
        testId: `modal-workspace-editor-modal`,
        children: [(0, Z.jsxs)(b, {
            children: [(0, Z.jsx)(g, {
                children: d
            }), (0, Z.jsx)(ee, {
                children: d
            })]
        }), (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, Z.jsx)(`div`, {
                className: `text-token-text-primary text-xl font-medium`,
                children: (0, Z.jsx)(O, {
                    id: `wham.createEnvironments.workspaceEditorModal.title`,
                    defaultMessage: `Edit workspace directory`
                })
            }), (0, Z.jsx)(`div`, {
                className: `flex flex-col gap-2`,
                children: (0, Z.jsx)(M, {
                    name: `workspaceDirectory`,
                    value: s,
                    onChange: e => {
                        c(e.target.value), n(e.target.value)
                    },
                    inputClassName: `w-full`,
                    containerInputClassName: `w-full`,
                    color: `quaternary`,
                    ariaLabel: o.formatMessage({
                        id: `wham.createEnvironments.workspaceEditorModal.inputAriaLabel`,
                        defaultMessage: `Workspace directory`
                    })
                })
            }), a.length > 0 && (0, Z.jsx)(`div`, {
                className: `flex flex-col gap-2`,
                children: a.map(e => (0, Z.jsx)(`div`, {
                    className: `text-token-text-status-error text-xs`,
                    children: e
                }, e))
            }), (0, Z.jsx)(`div`, {
                className: `text-token-text-tertiary text-xs`,
                children: (0, Z.jsx)(O, {
                    id: `wham.createEnvironments.workspaceEditorModal.description`,
                    defaultMessage: `The repository will be cloned to {workspaceDirectory}/{repositoryName}. You only need to adjust this if your code requires an absolute install path.`,
                    values: {
                        repositoryName: t ?? u,
                        workspaceDirectory: e ?? l
                    }
                })
            }), (0, Z.jsxs)(`div`, {
                className: `flex justify-end gap-2`,
                children: [(0, Z.jsx)(r, {
                    color: `secondary`,
                    onClick: () => f({
                        forceClear: !0
                    }),
                    children: (0, Z.jsx)(O, {
                        id: `wham.createEnvironments.workspaceEditorModal.cancelButton`,
                        defaultMessage: `Cancel`
                    })
                }), (0, Z.jsx)(r, {
                    onClick: () => i(),
                    disabled: a.length > 0,
                    children: (0, Z.jsx)(O, {
                        id: `wham.createEnvironments.workspaceEditorModal.saveButton`,
                        defaultMessage: `Save`
                    })
                })]
            })]
        })]
    })
}
var Lr, Z, Rr, zr = e((() => {
    w(), s(), Fe(), me(), u(), Lr = t(A()), k(), Z = D(), Rr = (0, Lr.memo)(Ir)
}));

function Br({
    current: e,
    max: t,
    className: n
}) {
    return (0, $.jsx)(`span`, {
        className: `text-xs ${e>t?`text-token-text-status-error`:`text-token-text-tertiary`} ${n??``}`.trim(),
        children: (0, $.jsx)(O, {
            id: `wham.characterCount.display`,
            defaultMessage: `{current}/{max}`,
            values: {
                current: e,
                max: t
            }
        })
    })
}

function Vr({
    enableWebhooks: e,
    onEnableWebhooksChange: t,
    disabled: n = !1
}) {
    return (0, $.jsxs)(`label`, {
        className: `border-token-border-light bg-token-main-surface-primary my-4 flex items-center justify-between gap-4 rounded-lg border px-4 py-3`,
        children: [(0, $.jsxs)(`span`, {
            className: `flex min-w-0 flex-col gap-0.5`,
            children: [(0, $.jsx)(`span`, {
                className: `text-sm font-medium`,
                children: (0, $.jsx)(O, {
                    id: `wham.environmentsForm.gitlabActivity.label`,
                    defaultMessage: `Enable Codex activity from GitLab`
                })
            }), (0, $.jsx)(`span`, {
                className: `text-token-text-tertiary text-xs leading-relaxed`,
                children: (0, $.jsx)(O, {
                    id: `wham.environmentsForm.gitlabActivity.description`,
                    defaultMessage: `Codex creates a project webhook for selected GitLab events. Requires permission to administer project webhooks.`
                })
            })]
        }), (0, $.jsx)(se, {
            withinLabel: !0,
            checked: e,
            disabled: n,
            onCheckedChange: t
        })]
    })
}

function Hr(e) {
    "use forget";
    let t = (0, Gr.c)(28),
        n, r, i, a, o;
    t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5]) : ({
        connectorIdRef: n,
        enableWebhooks: r,
        onEnableWebhooksChange: i,
        onUnavailable: a,
        ...o
    } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o);
    let {
        connectorId: s,
        error: c,
        gitlabConnectorCandidates: l,
        isConnected: u,
        isLoading: d
    } = Nt(), f, p;
    t[6] !== s || t[7] !== n ? (f = () => {
        n.current = s || null
    }, p = [s, n], t[6] = s, t[7] = n, t[8] = f, t[9] = p) : (f = t[8], p = t[9]), (0, Q.useEffect)(f, p);
    let m, h;
    t[10] !== c || t[11] !== l.length || t[12] !== d || t[13] !== a ? (m = () => {
        !d && c == null && l.length === 0 && a()
    }, h = [c, l.length, d, a], t[10] = c, t[11] = l.length, t[12] = d, t[13] = a, t[14] = m, t[15] = h) : (m = t[14], h = t[15]), (0, Q.useEffect)(m, h);
    let g = s || null,
        _ = !d && u,
        v;
    t[16] !== o || t[17] !== g || t[18] !== _ ? (v = (0, $.jsx)(Kt, {
        ...o,
        provider: `gitlab`,
        githubConnectorId: g,
        isGitLabConnected: _
    }), t[16] = o, t[17] = g, t[18] = _, t[19] = v) : v = t[19];
    let y;
    t[20] !== s || t[21] !== r || t[22] !== i || t[23] !== o ? (y = s && o.selectedRepository ? (0, $.jsx)(Vr, {
        enableWebhooks: r,
        onEnableWebhooksChange: i
    }) : null, t[20] = s, t[21] = r, t[22] = i, t[23] = o, t[24] = y) : y = t[24];
    let b;
    return t[25] !== v || t[26] !== y ? (b = (0, $.jsxs)($.Fragment, {
        children: [v, y]
    }), t[25] = v, t[26] = y, t[27] = b) : b = t[27], b
}

function Ur(e) {
    let t = ve(`1437685011`);
    return (0, $.jsx)(Wr, {
        ...e,
        isGitLabConnectorSettingsEnabled: t
    })
}

function Wr({
    initialEnvironmentId: e,
    initialValues: t,
    primaryButtonText: n,
    onSubmit: i,
    isPending: a,
    existingEnvironment: o,
    isGitLabConnectorSettingsEnabled: s
}) {
    let c = we(),
        [l, u] = ke(),
        [d, p] = (0, Q.useState)(null),
        [m, h] = (0, Q.useState)(t.githubConnectorId ?? null),
        g = (0, Q.useRef)(t.githubConnectorId ?? null),
        _ = s ? o ? Se(o) : t.repositoryId ? re(t.repositoryId) : l.get(`provider`) === `gitlab` ? `gitlab` : `github` : `github`,
        v = !o && _ === `gitlab` ? g.current : m,
        [b, x] = (0, Q.useState)(null),
        {
            data: ee
        } = Ie(),
        S = j(),
        ne = Ce(),
        C = (0, Q.useRef)(null),
        [w, ie] = (0, Q.useState)(!1),
        ae = ct(),
        oe = Xt(),
        [se, ce] = (0, Q.useState)(null),
        T = Qt(),
        E = it({
            defaultValues: t,
            validators: {
                onSubmit: ({
                    value: n
                }) => {
                    n.machine ||= t.machine;
                    let r = {};
                    if (n.label.trim() || (r.label = S.formatMessage({
                            id: `wham.environmentsForm.labelIsRequired`,
                            defaultMessage: `Label is required`
                        })), n.label.length > 64 && (r.label = S.formatMessage({
                            id: `wham.environmentsForm.labelMaxChars`,
                            defaultMessage: `Label must be at most {max} characters`
                        }, {
                            max: 64
                        })), ee?.find(t => t.label === n.label && t.id !== e) && (r.label = S.formatMessage({
                            id: `wham.environmentsForm.labelAlreadyExistsInYourAccountPleaseChooseAnotherName`,
                            defaultMessage: `An environment with this name already exists. Try choosing another name.`
                        })), n.repositoryId.trim() || (r.repositoryId = S.formatMessage({
                            id: `wham.environmentsForm.repositoryRequired`,
                            defaultMessage: `Repository is required`
                        })), n.machine.trim() || (r.machine = S.formatMessage({
                            id: `wham.environmentsForm.machineRequired`,
                            defaultMessage: `Machine is required`
                        })), n.description && n.description.length > 512 && (r.description = S.formatMessage({
                            id: `wham.environmentsForm.descriptionMaxChars`,
                            defaultMessage: `Description must be at most {max} characters`
                        }, {
                            max: 512
                        })), n.secrets.some(e => e.value === `` || e.key === ``) && (r.secrets = S.formatMessage({
                            id: `wham.environmentsForm.secretRequired`,
                            defaultMessage: `Secret value is required`
                        })), oe) {
                        let e = (n.share_targets ?? []).map(e => e.trim()).filter(Boolean);
                        n.share_targets = e, e.length > 0 && n.share_settings === `private` && (r.share_targets = S.formatMessage({
                            id: `wham.environmentsForm.shareTargetsRequiresVisibility`,
                            defaultMessage: `Share targets require workspace or public visibility.`
                        }))
                    } else delete n.share_targets;
                    return n.envVars.some(e => e.key === `` || e.value === ``) && (r.envVars = S.formatMessage({
                        id: `wham.environmentsForm.valueRequired`,
                        defaultMessage: `Environment variable value is required`
                    })), n.secrets.some(e => e.isEditing) && (r.secrets = S.formatMessage({
                        id: `wham.environmentsForm.editingSecrets`,
                        defaultMessage: `Secrets are being edited`
                    })), n.agentNetworkAccess?.mode === `on` && n.agentNetworkAccess.preset_allowlist === `none` && (!n.agentNetworkAccess.allowlist_domains || n.agentNetworkAccess.allowlist_domains.length === 0) && (r.agentNetworkAccess = S.formatMessage({
                        id: `wham.environmentsForm.agentNetworkAccessAllowlistRequired`,
                        defaultMessage: `At least one domain is required`
                    })), Object.keys(r).length > 0 && ne.danger(Te({
                        id: `wham.environmentsForm.validationError`,
                        defaultMessage: `Please address the validation issues in the form.`
                    }), {
                        toastId: `wham_environments_form_validation_error`
                    }), {
                        fields: r
                    }
                }
            },
            onSubmit: ({
                value: e
            }) => {
                i({
                    ...e,
                    githubConnectorId: _ === `gitlab` ? g.current : v
                })
            }
        }),
        ue = (0, Q.useCallback)(() => {
            if (l.get(`provider`) !== `gitlab`) return;
            E.state.values.repositoryId && E.setFieldValue(`repositoryId`, ``), x(null);
            let e = new URLSearchParams(l);
            e.delete(`provider`), u(e, {
                replace: !0
            })
        }, [E, l, u]),
        de = st(E.store, e => e.isDirty),
        [fe, pe] = (0, Q.useState)(!1),
        [me, he] = (0, Q.useState)([]),
        ge = (0, Q.useRef)(null),
        _e = dt(ge);
    (0, Q.useEffect)(() => !de && !fe && !me.length ? void 0 : te(window, {
        beforeunload: e => {
            e.preventDefault(), e.returnValue = S.formatMessage({
                id: `wham.environmentsForm.unsavedChanges`,
                defaultMessage: `You have unsaved changes to your environment. Are you sure you want to leave?`
            })
        }
    }), [S, de, fe, me]), (0, Q.useEffect)(() => {
        c.hash === `#setup-script` && setTimeout(() => {
            C.current && (C.current.scrollIntoView({
                behavior: `smooth`,
                block: `center`
            }), C.current.focus())
        }, 0)
    }, [c.hash]);
    let ye = e => {
            e.preventDefault(), e.stopPropagation(), E.handleSubmit()
        },
        be = N({
            name: `label`,
            form: E,
            validators: {
                onChange: ({
                    value: t
                }) => {
                    if (t.length > 64) return S.formatMessage({
                        id: `wham.environmentsForm.labelMaxChars`,
                        defaultMessage: `Label must be at most {max} characters`
                    }, {
                        max: 64
                    });
                    if (ee?.find(n => n.label === t && n.id !== e)) return S.formatMessage({
                        id: `wham.environmentsForm.labelAlreadyExistsInYourAccountPleaseChooseAnotherName`,
                        defaultMessage: `An environment with this name already exists. Try choosing another name.`
                    })
                }
            }
        }),
        xe = N({
            name: `repositoryId`,
            form: E
        }),
        D = N({
            name: `enableGitLabWebhooks`,
            form: E
        }),
        Ee = N({
            name: `description`,
            form: E
        }),
        De = N({
            name: `secrets`,
            form: E,
            mode: `array`
        }),
        Oe = N({
            name: `share_settings`,
            form: E
        }),
        k = N({
            name: `share_targets`,
            form: E,
            mode: `array`
        }),
        A = e => {
            Oe.handleChange(e), oe && e === `private` && k.handleChange([])
        },
        Ae = N({
            name: `agentNetworkAccess`,
            form: E
        }),
        je = N({
            name: `cacheSettings`,
            form: E
        }),
        M = N({
            name: `envVars`,
            form: E,
            mode: `array`
        }),
        Me = N({
            name: `machine`,
            form: E
        }),
        Ne = N({
            name: `devcontainer`,
            form: E
        }),
        Pe = ve(`1367873407`),
        Fe = N({
            name: `autoSetupSettings`,
            form: E
        }),
        Le = N({
            name: `setupCommands`,
            form: E,
            mode: `array`
        }),
        Re = N({
            name: `maintenanceSetupCommands`,
            form: E,
            mode: `array`
        }),
        ze = N({
            name: `workspaceDirectory`,
            form: E,
            validators: {
                onChange: ({
                    value: e
                }) => {
                    if (!e) return S.formatMessage({
                        id: `wham.environmentsForm.workspaceDirectoryRequired`,
                        defaultMessage: `Workspace directory is required`
                    });
                    if (!e.includes(`/`)) return S.formatMessage({
                        id: `wham.environmentsForm.workspaceDirectoryMustContainASlash`,
                        defaultMessage: `Workspace directory must contain a slash`
                    });
                    if (e === `/`) return S.formatMessage({
                        id: `wham.environmentsForm.workspaceDirectoryCannotBeRoot`,
                        defaultMessage: `Workspace directory cannot be root`
                    })
                }
            }
        }),
        Be = st(E.store, e => e.values.enableAuthtranslator ?? !1),
        Ve = T ? Be : !1;
    (0, Q.useEffect)(() => {
        T || (E.state.values.enableAuthtranslator ?? void 0) !== void 0 && E.setFieldValue(`enableAuthtranslator`, void 0)
    }, [E, T]);
    let He = y(),
        Ue = !!He && f(He),
        We = zt();
    return (0, $.jsx)(`form`, {
        ref: ge,
        onSubmit: ye,
        className: le(`mx-auto flex min-h-0 w-full grow flex-col items-center overflow-y-auto px-8`, _e && `border-t`),
        children: (0, $.jsxs)(`div`, {
            className: `flex w-full max-w-screen-2xl flex-col`,
            children: [(0, $.jsxs)(`div`, {
                className: `flex flex-col overflow-clip rounded-xl border bg-[#F7F7F7] dark:bg-[#1E1E1E]`,
                children: [(0, $.jsx)(`div`, {
                    className: `bg-token-bg-primary w-full border-b p-4 text-xl font-medium`,
                    children: (0, $.jsx)(O, {
                        id: `wham.environmentsForm.basic`,
                        defaultMessage: `Basic`
                    })
                }), (0, $.jsxs)(`div`, {
                    className: `flex w-full flex-col p-4 md:max-w-[50%]`,
                    children: [!o && _ === `github` && (0, $.jsx)(Ht, {
                        className: `mb-4`,
                        selectedInstallationId: d?.id ?? null,
                        setSelectedInstallation: p,
                        setSelectedConnectorId: h
                    }), o ? (0, $.jsx)(cn, {
                        repositoryId: xe.state.value,
                        existingEnvironment: o,
                        setRepositoryName: x,
                        provider: _
                    }) : _ === `gitlab` ? (0, $.jsx)(Hr, {
                        connectorIdRef: g,
                        enableWebhooks: D.state.value ?? !0,
                        onEnableWebhooksChange: D.handleChange,
                        onUnavailable: ue,
                        selectedRepository: xe.state.value,
                        onSelect: (e, t, n) => {
                            xe.handleChange(e), be.handleChange(t), x(n)
                        },
                        installationId: d?.id ?? null,
                        installationHtmlUrl: d?.html_url ?? null,
                        installationAccountLogin: d?.account_login ?? null,
                        installationAccountType: d?.account_type ?? null
                    }) : (0, $.jsx)(Kt, {
                        provider: `github`,
                        selectedRepository: xe.state.value,
                        onSelect: (e, t, n) => {
                            xe.handleChange(e), be.handleChange(t), x(n)
                        },
                        installationId: d?.id ?? null,
                        installationHtmlUrl: d?.html_url ?? null,
                        installationAccountLogin: d?.account_login ?? null,
                        installationAccountType: d?.account_type ?? null,
                        githubConnectorId: v
                    }), o && _ === `gitlab` && xe.state.value ? (0, $.jsx)(Vr, {
                        enableWebhooks: D.state.value ?? !1,
                        onEnableWebhooksChange: D.handleChange,
                        disabled: o.enable_gitlab_webhooks
                    }) : null, (0, $.jsx)(F, {
                        className: `mb-4`,
                        field: xe
                    }), (0, $.jsx)(An, {
                        onChange: be.handleChange,
                        value: be.state.value
                    }), (0, $.jsxs)(`div`, {
                        className: `flex flex-row justify-between pt-1`,
                        children: [(0, $.jsx)(F, {
                            field: be
                        }), (0, $.jsx)(Br, {
                            current: be.state.value.length,
                            max: 64
                        })]
                    }), (0, $.jsx)(an, {
                        onChange: Ee.handleChange,
                        value: Ee.state.value
                    }), (0, $.jsxs)(`div`, {
                        className: `flex flex-row justify-between pt-1`,
                        children: [ae && (0, $.jsx)(`p`, {
                            className: `text-token-text-tertiary text-xs`,
                            children: (0, $.jsx)(O, {
                                id: `wham.createEnvironments.descriptionSection.description`,
                                defaultMessage: `Explain to members of your organization what this environment is for.`
                            })
                        }), (0, $.jsx)(Br, {
                            current: Ee.state.value.length,
                            max: 512
                        })]
                    }), (0, $.jsx)(F, {
                        className: `mb-4`,
                        field: Ee
                    }), oe && (0, $.jsxs)(`div`, {
                        className: `flex flex-col`,
                        children: [(0, $.jsx)(Tn, {
                            value: Oe.state.value,
                            onChange: A
                        }), (0, $.jsx)(F, {
                            field: Oe
                        }), Oe.state.value !== `private` && (0, $.jsxs)($.Fragment, {
                            children: [(0, $.jsx)(bn, {
                                value: k.state.value,
                                onChange: k.handleChange,
                                onBlur: k.handleBlur
                            }), (0, $.jsx)(F, {
                                className: `mb-4`,
                                field: k
                            })]
                        })]
                    })]
                }), (0, $.jsxs)(`div`, {
                    className: `bg-token-bg-primary flex w-full items-baseline justify-between gap-1.5 border-y p-4`,
                    children: [(0, $.jsxs)(`div`, {
                        className: `flex items-baseline gap-1.5`,
                        children: [(0, $.jsx)(`span`, {
                            className: `shrink-0 text-xl font-medium`,
                            children: (0, $.jsx)(O, {
                                id: `wham.environmentsForm.advanced`,
                                defaultMessage: `Code execution`
                            })
                        }), (0, $.jsx)(`span`, {
                            className: `text-token-text-tertiary text-xs`,
                            children: (0, $.jsx)(O, {
                                id: `wham.environmentsForm.advancedSubtitle`,
                                defaultMessage: `Set up dependencies, lint, and tests.`
                            })
                        })]
                    }), (0, $.jsx)(`a`, {
                        href: `https://platform.openai.com/docs/codex/overview#environment-configuration`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `flex items-center gap-1 py-2 ps-2 hover:underline`,
                        "aria-label": S.formatMessage({
                            id: `wham.environmentsForm.learnMoreAriaLabel`,
                            defaultMessage: `Link to learn more about code execution`
                        }),
                        children: (0, $.jsxs)(`div`, {
                            className: `text-token-text-tertiary flex items-center gap-1 text-xs`,
                            children: [(0, $.jsx)(tt, {
                                className: `icon-sm`
                            }), (0, $.jsx)(O, {
                                id: `wham.environmentsForm.learnMore`,
                                defaultMessage: `Learn more`
                            })]
                        })
                    })]
                }), (0, $.jsxs)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2`,
                    children: [(0, $.jsxs)(`div`, {
                        className: `flex flex-col p-4`,
                        children: [Pe && (0, $.jsx)(en, {
                            value: Ne.state.value,
                            onChange: Ne.handleChange
                        }), Ne.state.value == null && (0, $.jsxs)($.Fragment, {
                            children: [(0, $.jsx)(Gn, {
                                selectedMachineId: Me.state.value,
                                setSelectedMachineId: Me.handleChange,
                                envVars: M.state.value,
                                pushValue: M.pushValue,
                                replaceValue: M.replaceValue
                            }), (0, $.jsx)(F, {
                                className: `mb-1`,
                                field: Me
                            }), (0, $.jsxs)(`p`, {
                                className: `text-token-text-tertiary mb-4 text-xs`,
                                children: [(0, $.jsx)(O, {
                                    id: `wham.createEnvironments.machineSelector.description`,
                                    defaultMessage: `Universal is an image based on Ubuntu 24.04 - see <dockerfile>openai/codex-universal</dockerfile> to learn more. {br} The repository will be cloned to {workspaceDirectory}/{repo_name}. <EditWorkspace>Edit workspace directory.</EditWorkspace>`,
                                    values: {
                                        br: (0, $.jsx)(`br`, {}),
                                        repo_name: b ?? ``,
                                        workspaceDirectory: ze.state.value ?? `/workspace`,
                                        dockerfile: e => (0, $.jsx)(`a`, {
                                            href: `https://github.com/openai/codex-universal`,
                                            target: `_blank`,
                                            rel: `noopener noreferrer`,
                                            className: `underline`,
                                            children: e
                                        }),
                                        EditWorkspace: e => (0, $.jsx)(`button`, {
                                            className: `underline`,
                                            type: `button`,
                                            onClick: () => {
                                                ie(!0)
                                            },
                                            children: e
                                        })
                                    }
                                }), w && (0, $.jsx)(Rr, {
                                    onChange: e => ze.handleChange(e),
                                    repositoryName: b,
                                    workspaceDirectory: ze.state.value,
                                    errors: ze.state.meta.errors.filter(e => !!e),
                                    onClose: () => ie(!1)
                                })]
                            })]
                        }), (0, $.jsx)(vn, {
                            pushValue: M.pushValue,
                            removeValue: M.removeValue,
                            changeValue: M.replaceValue,
                            values: M.state.value
                        }), (0, $.jsx)(F, {
                            className: `mb-4`,
                            field: M
                        }), (0, $.jsx)(rr, {
                            pushValue: De.pushValue,
                            removeValue: De.removeValue,
                            changeValue: De.replaceValue,
                            values: De.state.value,
                            enableAuthtranslator: Ve,
                            isAuthtranslatorGateEnabled: T,
                            onEnableAuthtranslatorChange: e => E.setFieldValue(`enableAuthtranslator`, e)
                        }), (0, $.jsx)(F, {
                            className: `mb-4`,
                            field: De
                        }), (0, $.jsx)(Zn, {
                            cacheSettings: je.state.value,
                            onChange: je.handleChange
                        }), (0, $.jsx)(F, {
                            className: `mb-4`,
                            field: je
                        }), (0, $.jsx)(hr, {
                            onClickAppendReplHistory: () => {
                                let e = S.formatMessage({
                                        id: `wham.createEnv.terminal.recentCommands`,
                                        defaultMessage: `Recent commands`
                                    }),
                                    t = Le.state.value,
                                    n = `${t?`

`:``}# ${e}:\n` + me.join(``);
                                E.setFieldValue(`setupCommands`, t + n), he([]), setTimeout(() => {
                                    if (C.current) {
                                        let e = C.current;
                                        e.scrollTop = e.scrollHeight
                                    }
                                }, 1)
                            },
                            replCommandHistory: me,
                            suggestedCommand: se,
                            onClickAcceptSuggestedCommand: () => {
                                se && E.setFieldValue(`setupCommands`, Le.state.value + se), ce(null)
                            },
                            setupScript: Le.state.value,
                            onSetupScriptChange: Le.handleChange,
                            maintenanceScript: Re.state.value,
                            onMaintenanceScriptChange: Re.handleChange,
                            setupScriptChildren: (0, $.jsx)(F, {
                                className: `mb-4`,
                                field: Le
                            }),
                            maintenanceScriptChildren: (0, $.jsx)(F, {
                                className: `mb-4`,
                                field: Re
                            }),
                            inputRef: C,
                            autoSetupSettings: Fe.state.value,
                            onChangeAutoSetupSettings: Fe.handleChange,
                            postSetupCacheEnabled: !!je.state.value?.post_setup_cache_enabled
                        }), We != null && (0, $.jsxs)($.Fragment, {
                            children: [(0, $.jsx)(Ut, {
                                disabledByWorkspaceSettings: We,
                                agentNetworkAccess: Ae.state.value,
                                onChange: Ae.handleChange
                            }), (0, $.jsx)(F, {
                                className: `mb-4`,
                                field: Ae
                            }), Ue && _ === `github` && (0, $.jsx)(Gt, {
                                className: `mb-4`
                            }), !We && Ae.state.value?.mode === `on` && (0, $.jsx)(Vt, {
                                className: `mb-4`
                            })]
                        })]
                    }), (0, $.jsx)(`div`, {
                        className: `flex h-[650px] p-3`,
                        children: (0, $.jsx)(E.Subscribe, {
                            selector: e => e.values,
                            children: n => (0, $.jsx)(Mr, {
                                formValues: {
                                    ...n,
                                    githubConnectorId: v
                                },
                                environmentId: e,
                                onConnectedChange: pe,
                                initialSecrets: t.secrets.reduce((e, t) => (e[t.key] = t.value, e), {}),
                                onSuggestCommand: e => {
                                    ce(e)
                                },
                                onSubmitCommand: e => {
                                    e.trim() && he(t => [...t, e])
                                }
                            })
                        })
                    })]
                })]
            }), (0, $.jsx)(`div`, {
                className: `mb-12 flex w-full items-end pt-4`,
                children: (0, $.jsx)(E.Subscribe, {
                    selector: e => e.values,
                    children: e => (0, $.jsx)(r, {
                        color: `primary`,
                        size: `medium`,
                        type: `button`,
                        className: `ms-auto`,
                        loading: a,
                        disabled: !e.repositoryId,
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation(), E.handleSubmit()
                        },
                        children: n
                    })
                })
            })]
        })
    })
}
var Gr, Q, $, Kr = e((() => {
    Gr = je(), w(), Qe(), ne(), c(), d(), i(), ye(), ae(), Pt(), Wt(), lt(), rn(), sn(), un(), yn(), Yt(), Sn(), En(), jn(), Kn(), Bt(), Qn(), qt(), ir(), gr(), Fr(), Zt(), zr(), v(), $t(), Rt(), ft(), Re(), rt(), ge(), Q = t(A()), k(), Oe(), $ = D()
}));
export {
    Ln as a, vr as i, Kr as n, Rn as o, _r as r, Ur as t
};
//# sourceMappingURL=88c1aa5b-kfzb5blfzkvxx87w.js.map