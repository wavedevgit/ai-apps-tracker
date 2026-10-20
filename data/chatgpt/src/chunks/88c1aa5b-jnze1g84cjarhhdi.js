import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Al as n,
    Art as r,
    At as i,
    Dat as a,
    Dl as o,
    Hnt as s,
    I1 as c,
    J5 as l,
    JT as u,
    Jnt as d,
    Kw as f,
    L7 as p,
    Nat as m,
    Ol as h,
    Rw as g,
    Sw as _,
    TE as v,
    Uw as y,
    VU as b,
    Xy as ee,
    Y1 as x,
    Yw as te,
    Yy as S,
    _R as ne,
    aB as re,
    bl as ie,
    cit as ae,
    cn as oe,
    fl as se,
    gl as C,
    iB as w,
    iE as ce,
    iat as le,
    n5 as ue,
    nat as de,
    nx as fe,
    pl as pe,
    q5 as me,
    qT as T,
    rE as he,
    rx as ge,
    t5 as _e,
    uit as ve,
    vl as ye,
    ww as be,
    yR as xe,
    yl as Se,
    zU as Ce,
    zw as we
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as Te,
    Bn as E,
    Hn as D,
    Ht as Ee,
    Ln as De,
    O as Oe,
    Pn as O,
    Rn as ke,
    Tn as Ae,
    Vn as k,
    jt as je,
    s as Me,
    zn as A
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    GZt as j,
    Hst as M,
    Jln as Ne,
    KZt as Pe,
    MGt as Fe,
    NGt as Ie,
    Vst as N,
    dKn as Le,
    fKn as Re,
    xun as ze
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    $x as Be,
    Bx as Ve,
    Gh as He,
    Kb as Ue,
    Kh as We,
    Kx as Ge,
    Mb as Ke,
    Nb as qe,
    Qx as Je,
    Rv as Ye,
    Vx as Xe,
    by as Ze,
    qb as Qe,
    qx as $e,
    xy as et,
    zv as tt
} from "./30901919-jory365vq6ym5crx.js";
import {
    T_ as nt,
    bp as rt,
    gp as it,
    gx as at,
    mp as ot,
    vp as P,
    vx as st,
    y_ as ct
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    d_ as F,
    f_ as lt
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    a as ut,
    i as dt
} from "./3e72bb91-k7ysiq2qw3z5q7zq.js";
import {
    _ as ft,
    a as pt,
    c as mt,
    d as ht,
    f as gt,
    g as _t,
    h as vt,
    i as yt,
    l as bt,
    m as xt,
    n as St,
    o as Ct,
    p as wt,
    r as Tt,
    s as Et,
    t as Dt,
    u as Ot,
    v as kt
} from "./9e18a103-q7moiqommz7yhv30.js";
import {
    n as At,
    t as jt
} from "./9371a995-fmgglrptzxzctqhz.js";
import {
    i as Mt,
    r as Nt
} from "./ab92372e-dodnn2y0eo4rnnj7.js";
import {
    t as Pt
} from "./4c0f1f8e-lcllh9m5rwe6l2ew.js";
import {
    n as Ft,
    t as It
} from "./4c806318-e989cajixttp3o1v.js";
import {
    r as Lt
} from "./8d846022-o5c98v3vbp34xelf.js";
import {
    a as Rt,
    i as zt,
    n as Bt,
    o as Vt,
    r as Ht,
    s as Ut,
    t as Wt
} from "./bc28bb09-kcq68wy5ak2qlzn5.js";
import {
    n as Gt,
    r as Kt,
    t as qt
} from "./9c8fc5a3-jcrxflr3ak8m6ya6.js";
import {
    n as Jt,
    t as I
} from "./c25d8df9-o0yl4j88ilgqok1t.js";
import {
    n as Yt,
    t as Xt
} from "./77909f2c-nz304z2yo7v02etr.js";
import {
    n as Zt,
    t as Qt
} from "./45054cb2-nwdpgs51g9hxe4cx.js";

function $t(e) {
    "use forget";
    let t = (0, en.c)(13),
        {
            value: n,
            onChange: r
        } = e,
        i = E(),
        a = n != null,
        o;
    t[0] === r ? o = t[1] : (o = e => r(e.target.checked ? {
        config_path: `.devcontainer/devcontainer.json`
    } : null), t[0] = r, t[1] = o);
    let s;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, tn.jsx)(O, {
        id: `wham.environments.devcontainer.enabled.label`,
        defaultMessage: `Use dev container`
    }), t[2] = s) : s = t[2];
    let c;
    t[3] !== a || t[4] !== o ? (c = (0, tn.jsx)(Le, {
        id: `use-devcontainer`,
        checked: a,
        onChange: o,
        label: s
    }), t[3] = a, t[4] = o, t[5] = c) : c = t[5];
    let l;
    t[6] !== i || t[7] !== r || t[8] !== n ? (l = n != null && (0, tn.jsx)(N, {
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
    return t[10] !== c || t[11] !== l ? (u = (0, tn.jsxs)(`div`, {
        className: `mb-4 flex flex-col gap-2`,
        children: [c, l]
    }), t[10] = c, t[11] = l, t[12] = u) : u = t[12], u
}
var en, tn, nn = e((() => {
    en = Ae(), M(), Re(), A(), tn = k()
}));

function rn({
    onChange: e,
    value: t
}) {
    let n = E();
    return (0, an.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, an.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, an.jsx)(O, {
                id: `wham.createEnvironments.descriptionSection.label`,
                defaultMessage: `Description`
            })
        }), (0, an.jsx)(`textarea`, {
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
var an, on = e((() => {
    A(), an = k()
}));

function sn({
    repositoryId: e,
    existingEnvironment: t,
    setRepositoryName: n,
    provider: r
}) {
    let i = t.repo_map?.[e];
    return (0, cn.useEffect)(() => {
        i && n(i.name)
    }, [i, n]), i ? (0, L.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [(0, L.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, L.jsx)(O, {
                id: `wham.createEnvironments.repositorySection.label`,
                defaultMessage: `Repository`
            })
        }), (0, L.jsx)(`div`, {
            className: `border-token-border-heavy bg-token-bg-primary pointer-events-none rounded-lg border p-3`,
            children: (0, L.jsx)(qt, {
                repository: i,
                provider: r,
                className: `pointer-events-none p-1`,
                isSelected: !0
            })
        })]
    }) : (0, L.jsx)(`div`, {
        className: `text-token-text-secondary flex h-full items-center text-sm`,
        children: (0, L.jsx)(O, {
            id: `wham.createEnvironments.repositorySection.unavailable`,
            defaultMessage: `Repository unavailable`
        })
    })
}
var cn, L, ln = e((() => {
    Kt(), cn = t(D()), A(), L = k()
}));

function un(e, t, n, r, i) {
    let a = pn(e.clipboardData.getData(`text/plain`));
    if (a.length !== 0) {
        e.preventDefault(), n(t, i(a[0]));
        for (let e of a.slice(1)) r(i(e))
    }
}

function dn(e, t, n, r) {
    un(e, t, n, r, e => e)
}

function fn(e, t, n, r) {
    un(e, t, n, r, e => ({
        ...e,
        isEditing: !1,
        domain: void 0,
        previousDomain: void 0,
        previousKey: void 0
    }))
}

function pn(e) {
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
var mn = e((() => {}));

function hn({
    pushValue: e,
    removeValue: t,
    changeValue: n,
    values: r
}) {
    let i = E();
    return (0, R.jsxs)(`div`, {
        className: `mb-2 flex flex-col`,
        children: [(0, R.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, R.jsx)(O, {
                id: `wham.createEnvironments.envVarsSection.label`,
                defaultMessage: `Environment variables`
            })
        }), r.map((r, a) => r.key.startsWith(`CODEX_ENV_`) ? null : (0, R.jsx)(`div`, {
            className: `flex gap-2 pt-4`,
            children: (0, R.jsx)(`div`, {
                className: `flex w-full flex-1 flex-col gap-2`,
                children: (0, R.jsxs)(`div`, {
                    className: `flex w-full items-center gap-2`,
                    children: [(0, R.jsx)(N, {
                        name: `envVars[${a}].key`,
                        color: `search`,
                        containerInputClassName: `w-full`,
                        className: `text-token-text-primary flex h-8 w-full items-center rounded-md!`,
                        value: r.key,
                        onPaste: t => dn(t, a, n, e),
                        onChange: e => {
                            n(a, {
                                ...r,
                                key: e.target.value
                            })
                        },
                        placeholder: i.formatMessage({
                            id: `wham.envVarsSection.keyPlaceholder`,
                            defaultMessage: `Key`
                        }),
                        ariaLabel: i.formatMessage({
                            id: `wham.envVarsSection.keyAria`,
                            defaultMessage: `Environment variable key`
                        })
                    }), (0, R.jsx)(N, {
                        name: `envVars[${a}].value`,
                        className: `text-token-text-primary flex h-8 w-full items-center rounded-md!`,
                        containerInputClassName: `w-full`,
                        color: `search`,
                        value: r.value,
                        onChange: e => {
                            n(a, {
                                ...r,
                                value: e.target.value
                            })
                        },
                        placeholder: i.formatMessage({
                            id: `wham.envVarsSection.value`,
                            defaultMessage: `Value`
                        }),
                        ariaLabel: i.formatMessage({
                            id: `wham.envVarsSection.environmentVariableValue`,
                            defaultMessage: `Environment variable value`
                        })
                    }), (0, R.jsx)(T, {
                        type: `button`,
                        size: `small`,
                        color: `secondary`,
                        onClick: () => t(a),
                        "aria-label": i.formatMessage({
                            id: `wham.createEnvironments.envVarsSection.deleteAriaLabel`,
                            defaultMessage: `Button to remove environment variable`
                        }),
                        children: (0, R.jsx)(O, {
                            id: `wham.createEnvironments.envVarsSection.delete`,
                            defaultMessage: `Delete`
                        })
                    })]
                })
            })
        }, a)), (0, R.jsx)(`div`, {
            className: `pt-2`,
            children: (0, R.jsx)(T, {
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
                "aria-label": i.formatMessage({
                    id: `wham.createEnvironments.envVarsSection.addAriaLabel`,
                    defaultMessage: `Button to add another environment variable`
                }),
                children: (0, R.jsxs)(`div`, {
                    className: `flex items-center gap-1`,
                    children: [(0, R.jsx)(O, {
                        id: `wham.createEnvironments.envVarsSection.add`,
                        defaultMessage: `Add`
                    }), (0, R.jsx)(We, {
                        className: `icon-sm`
                    })]
                })
            })
        })]
    })
}
var gn, R, _n, vn = e((() => {
    u(), He(), M(), mn(), gn = t(D()), A(), R = k(), _n = (0, gn.memo)(hn)
}));

function yn({
    value: e = [],
    onChange: t,
    onBlur: n,
    disabled: r
}) {
    let i = E(),
        a = (0, bn.useMemo)(() => e?.join(`
`), [e]);
    return (0, xn.jsxs)(`div`, {
        className: `mt-4 flex flex-col gap-2`,
        children: [(0, xn.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [(0, xn.jsx)(`p`, {
                className: `text-token-text-primary text-sm font-medium`,
                children: (0, xn.jsx)(O, {
                    id: `wham.createEnvironment.shareTargets.label`,
                    defaultMessage: `Add additional editors`
                })
            }), (0, xn.jsx)(`p`, {
                className: `text-token-text-tertiary text-xs`,
                children: (0, xn.jsx)(O, {
                    id: `wham.createEnvironment.shareTargets.helper`,
                    defaultMessage: `Add one email per line. Users will be able to edit or delete this environment, or add and remove editors. The environment creator, and ChatGPT Workspace Admins, always have edit access.`
                })
            })]
        }), (0, xn.jsx)(`textarea`, {
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
var bn, xn, Sn = e((() => {
    bn = t(D()), A(), xn = k()
}));

function Cn({
    value: e,
    onChange: t
}) {
    let n = E(),
        r = x()?.name ?? n.formatMessage({
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
        }), (0, z.jsxs)(F.Root, {
            value: e,
            onValueChange: t,
            children: [(0, z.jsx)(F.Trigger, {
                className: `border-token-border-heavy bg-token-bg-primary flex w-fit rounded-md border`,
                "aria-label": n.formatMessage({
                    id: `wham.createEnvironment.openVisibilityMenu`,
                    defaultMessage: `Open sharing menu`
                }),
                children: (0, z.jsxs)(`div`, {
                    className: `flex w-full items-center justify-between`,
                    children: [(0, z.jsx)(`div`, {
                        className: `flex items-center`,
                        children: (0, z.jsx)(F.Value, {
                            placeholder: n.formatMessage({
                                id: `wham.createEnvironment.selectVisibility`,
                                defaultMessage: `Select visibility`
                            })
                        })
                    }), (0, z.jsx)(F.Icon, {})]
                })
            }), (0, z.jsx)(F.Portal, {
                children: (0, z.jsxs)(F.Content, {
                    align: `start`,
                    children: [(0, z.jsx)(F.Item, {
                        value: `private`,
                        children: (0, z.jsxs)(`div`, {
                            className: `flex items-center`,
                            children: [(0, z.jsx)(Be, {
                                "aria-hidden": !0,
                                className: `icon-sm me-1.5`
                            }), (0, z.jsx)(O, {
                                id: `wham.createEnvironment.private`,
                                defaultMessage: `Only you`
                            })]
                        })
                    }), (0, z.jsx)(F.Item, {
                        value: `workspace`,
                        children: (0, z.jsxs)(`div`, {
                            className: `flex items-center`,
                            children: [(0, z.jsx)(Ye, {
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
    tt(), Je(), lt(), c(), wn = t(D()), A(), z = k(), Tn = (0, wn.memo)(Cn)
}));

function Dn({
    onChange: e,
    value: t
}) {
    let n = E();
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
            children: (0, kn.jsx)(N, {
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
    M(), On = t(D()), A(), kn = k(), An = (0, On.memo)(Dn)
}));

function Mn({
    selectedVersion: e,
    setSelectedVersion: t,
    versions: n,
    defaultVersion: r
}) {
    let i = E();
    return (0, B.jsxs)(F.Root, {
        value: e ?? ``,
        onValueChange: t,
        children: [(0, B.jsx)(F.Trigger, {
            className: `border-token-border-default bg-token-bg-primary! w-48 rounded-md! border`,
            "aria-label": i.formatMessage({
                id: `wham.createEnvironments.languageSelector.openVersionMenu`,
                defaultMessage: `Open version menu`
            }),
            children: (0, B.jsxs)(`div`, {
                className: `flex w-full items-center justify-between`,
                children: [(0, B.jsx)(F.Value, {
                    placeholder: i.formatMessage({
                        id: `wham.createEnvironments.languageSelector.selectVersion`,
                        defaultMessage: `Select version`
                    })
                }), (0, B.jsx)(F.Icon, {})]
            })
        }), (0, B.jsx)(F.Portal, {
            children: (0, B.jsxs)(F.Content, {
                align: `start`,
                children: [n.map(e => (0, B.jsx)(F.Item, {
                    value: e,
                    children: (0, B.jsx)(`p`, {
                        className: me(`text-token-text-primary text-sm`, e === r ? `font-semibold` : `font-normal`),
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
    return (0, B.jsx)(_, {
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
    be(), lt(), kt(), _t(), wt(), ht(), bt(), Et(), pt(), Tt(), Dt(), l(), A(), B = k(), In = [{
        key: `python`,
        icon: mt,
        label: `Python`,
        envVar: `CODEX_ENV_PYTHON_VERSION`,
        versions: [`3.14`, `3.13`, `3.12`, `3.11`, `3.10`],
        defaultVersion: `3.12`
    }, {
        key: `nodejs`,
        icon: gt,
        label: `Node.js`,
        envVar: `CODEX_ENV_NODE_VERSION`,
        versions: [`22`, `20`, `18`],
        defaultVersion: `20`
    }, {
        key: `ruby`,
        icon: Ct,
        label: `Ruby`,
        envVar: `CODEX_ENV_RUBY_VERSION`,
        versions: [`3.2.3`, `3.3.8`, `3.4.4`],
        defaultVersion: `3.4.4`
    }, {
        key: `rust`,
        icon: yt,
        label: `Rust`,
        envVar: `CODEX_ENV_RUST_VERSION`,
        versions: [`1.95.0`, `1.94.0`, `1.93.0`, `1.92.0`, `1.91.1`, `1.90.0`, `1.89.0`, `1.88.0`, `1.87.0`, `1.86.0`, `1.85.1`, `1.84.1`, `1.83.0`],
        defaultVersion: `1.89.0`
    }, {
        key: `go`,
        icon: vt,
        label: `Go`,
        envVar: `CODEX_ENV_GO_VERSION`,
        versions: [`1.25.1`, `1.24.3`, `1.23.8`, `1.22.12`],
        defaultVersion: `1.24.3`
    }, {
        key: `bun`,
        icon: ft,
        label: `Bun`,
        envVar: `CODEX_ENV_BUN_VERSION`,
        versions: [`1.2.14`],
        defaultVersion: `1.2.14`
    }, {
        key: `php`,
        icon: Ot,
        label: `PHP`,
        envVar: `CODEX_ENV_PHP_VERSION`,
        versions: [`8.5`, `8.4`, `8.3`, `8.2`],
        defaultVersion: `8.4`
    }, {
        key: `java`,
        icon: xt,
        label: `Java`,
        envVar: `CODEX_ENV_JAVA_VERSION`,
        versions: [`25`, `24`, `23`, `22`, `21`, `17`, `11`],
        defaultVersion: `21`
    }, {
        key: `swift`,
        icon: St,
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
    let n = E(),
        {
            data: r
        } = Oe({
            queryKey: [`wham`, `machines`],
            queryFn: () => se.getMachines()
        }),
        i = (0, Vn.useMemo)(() => {
            let e = Array.isArray(r) ? r : [],
                t = new Set(C.map(e => e.id));
            return [...e.filter(e => !t.has(e.id)), ...C]
        }, [r]);
    return (0, Vn.useEffect)(() => {
        !e && i.length && t(i[0].id)
    }, [e, t, i]), (0, V.jsxs)(F.Root, {
        value: e ?? ``,
        onValueChange: e => {
            t(e)
        },
        children: [(0, V.jsx)(F.Trigger, {
            className: `border-token-border-default! bg-token-bg-primary! w-48 rounded-md! border`,
            "aria-label": n.formatMessage({
                id: `wham.machineSelectorPopover.openMachineMenu`,
                defaultMessage: `Open machine menu`
            }),
            children: (0, V.jsxs)(`div`, {
                className: `flex w-full items-center justify-between`,
                children: [(0, V.jsx)(F.Value, {
                    placeholder: n.formatMessage({
                        id: `wham.machineSelectorPopover.selectMachine`,
                        defaultMessage: `Select machine`
                    })
                }), (0, V.jsx)(F.Icon, {})]
            })
        }), (0, V.jsx)(F.Portal, {
            children: (0, V.jsx)(F.Content, {
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
        children: [e.length > 0 ? e.map(e => (0, V.jsx)(F.Item, {
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
    lt(), ie(), pe(), Me(), Vn = t(D()), A(), V = k()
}));

function Un({
    selectedMachineId: e,
    setSelectedMachineId: t,
    envVars: n,
    pushValue: r,
    replaceValue: i
}) {
    let a = E(),
        [o, s] = (0, Wn.useState)(!1);
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
                }), (0, H.jsx)(T, {
                    color: `secondary`,
                    size: `medium`,
                    type: `button`,
                    icon: Qe,
                    onClick: () => {
                        s(!0)
                    },
                    "aria-label": a.formatMessage({
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
        }), o && (0, H.jsx)(Fn, {
            onClose: () => s(!1),
            envVars: n,
            pushValue: r,
            replaceValue: i
        })]
    })
}
var Wn, H, Gn, Kn = e((() => {
    u(), Ue(), Rn(), Hn(), Wn = t(D()), A(), H = k(), Gn = (0, Wn.memo)(Un)
}));

function qn({
    cacheSettings: e,
    onChange: t
}) {
    let n = E();
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
        }), (0, Yn.jsx)(at, {
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
    st(), Jn = t(D()), A(), Yn = k(), Xn = ke({
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
    changeValue: r,
    removeValue: i
}) {
    let a = E();
    return (0, U.jsxs)(`div`, {
        className: `border-token-border-light bg-token-bg-primary mt-4 rounded-xl border p-4 shadow-sm`,
        children: [(0, U.jsxs)(`div`, {
            className: `flex w-full items-center gap-3`,
            children: [(0, U.jsx)(N, {
                name: `secrets[${t}].key`,
                color: `search`,
                containerInputClassName: `w-full`,
                className: `text-token-text-primary flex h-8 w-full items-center rounded-md!`,
                value: e.key,
                onPaste: e => fn(e, t, r, n),
                onChange: n => {
                    r(t, {
                        ...e,
                        key: n.target.value
                    })
                },
                placeholder: a.formatMessage({
                    id: `wham.secretsSection.keyPlaceholder`,
                    defaultMessage: `Key`
                }),
                ariaLabel: a.formatMessage({
                    id: `wham.secretsSection.keyAria`,
                    defaultMessage: `Secret Key`
                })
            }), (0, U.jsx)(N, {
                name: `secrets[${t}].value`,
                className: `text-token-text-primary flex h-8 w-full items-center rounded-md!`,
                containerInputClassName: `w-full`,
                color: `search`,
                type: `password`,
                value: e.value,
                onChange: n => {
                    r(t, {
                        ...e,
                        value: n.target.value
                    })
                },
                placeholder: a.formatMessage({
                    id: `wham.secretsSection.value`,
                    defaultMessage: `Value`
                }),
                ariaLabel: a.formatMessage({
                    id: `wham.secretsSection.secretValue`,
                    defaultMessage: `Secret Value`
                })
            }), (0, U.jsx)(T, {
                type: `button`,
                size: `small`,
                color: `secondary`,
                onClick: () => i(t),
                "aria-label": a.formatMessage({
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
                children: a.formatMessage({
                    id: `wham.secretsSection.domainLabel`,
                    defaultMessage: `Domain (optional)`
                })
            }), (0, U.jsx)(N, {
                name: `secrets[${t}].domain`,
                value: e.domain ?? ``,
                onChange: n => {
                    r(t, {
                        ...e,
                        domain: n.target.value
                    })
                },
                placeholder: a.formatMessage({
                    id: `wham.secretsSection.domainPlaceholder`,
                    defaultMessage: `e.g. aws.amazon.com`
                }),
                ariaLabel: a.formatMessage({
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
    values: r,
    enableAuthtranslator: i = !1,
    onEnableAuthtranslatorChange: a,
    isAuthtranslatorGateEnabled: o = !1
}) {
    let s = E(),
        [c, l] = (0, tr.useState)(i && o);
    (0, tr.useEffect)(() => {
        !o && c && l(!1)
    }, [c, o]), (0, tr.useEffect)(() => {
        o && l(i ?? !1)
    }, [i, o]);
    let u = o && c;
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
            }), o && (0, U.jsxs)(`div`, {
                className: `text-token-text-secondary flex items-center gap-4 text-sm`,
                children: [(0, U.jsxs)(`div`, {
                    className: `flex items-center gap-1`,
                    children: [(0, U.jsx)(O, {
                        id: `wham.createEnvironments.secretsSection.enableAuthtranslator`,
                        defaultMessage: `Enable domain scoped secrets`
                    }), (0, U.jsx)(S, {
                        label: s.formatMessage({
                            id: `wham.createEnvironments.secretsSection.enableAuthtranslator.tooltip`,
                            defaultMessage: `Advanced prompt-injection protection: secrets never reach the model and are only sent to their domain.`
                        }),
                        children: (0, U.jsx)(w, {
                            className: `icon text-token-text-tertiary`
                        })
                    })]
                }), (0, U.jsx)(at, {
                    className: `max-w-32`,
                    ariaLabel: s.formatMessage({
                        id: `wham.createEnvironments.secretsSection.enableAuthtranslator.aria`,
                        defaultMessage: `Domain scoped secrets`
                    }),
                    value: c ? `on` : `off`,
                    onChange: e => {
                        let t = e === `on`;
                        l(t), a?.(t)
                    },
                    leftItem: {
                        ariaLabel: s.formatMessage(nr.offAria),
                        label: s.formatMessage(nr.offLabel),
                        value: `off`
                    },
                    rightItem: {
                        ariaLabel: s.formatMessage(nr.onAria),
                        label: s.formatMessage(nr.onLabel),
                        value: `on`
                    }
                })]
            })]
        }), u && (0, U.jsxs)(`div`, {
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
        }), u ? r.map((r, i) => (0, U.jsx)($n, {
            value: r,
            index: i,
            pushValue: e,
            changeValue: n,
            removeValue: t
        }, i)) : r.map((r, i) => (0, U.jsxs)(`div`, {
            className: `flex gap-2 pt-2`,
            children: [(0, U.jsx)(N, {
                name: `secrets[${i}].key`,
                color: `search`,
                containerInputClassName: `w-full`,
                className: `text-token-text-primary flex h-8 w-full items-center rounded-md!`,
                value: r.key,
                onPaste: t => fn(t, i, n, e),
                onChange: e => {
                    n(i, {
                        ...r,
                        key: e.target.value
                    })
                },
                placeholder: s.formatMessage({
                    id: `wham.secretsSection.keyPlaceholder`,
                    defaultMessage: `Key`
                }),
                ariaLabel: s.formatMessage({
                    id: `wham.secretsSection.keyAria`,
                    defaultMessage: `Secret Key`
                })
            }), (0, U.jsx)(N, {
                name: `secrets[${i}].value`,
                className: `text-token-text-primary flex h-8 w-full items-center rounded-md!`,
                containerInputClassName: `w-full`,
                color: `search`,
                type: `password`,
                value: r.value,
                onChange: e => {
                    n(i, {
                        ...r,
                        value: e.target.value
                    })
                },
                placeholder: s.formatMessage({
                    id: `wham.secretsSection.value`,
                    defaultMessage: `Value`
                }),
                ariaLabel: s.formatMessage({
                    id: `wham.secretsSection.secretValue`,
                    defaultMessage: `Secret Value`
                })
            }), (0, U.jsx)(T, {
                type: `button`,
                size: `small`,
                color: `secondary`,
                onClick: () => t(i),
                children: (0, U.jsx)(O, {
                    id: `wham.createEnvironments.secretsSection.delete`,
                    defaultMessage: `Delete`
                })
            })]
        }, i)), (0, U.jsx)(`div`, {
            className: `pt-2`,
            children: (0, U.jsx)(T, {
                color: `secondary`,
                size: `small`,
                onClick: () => {
                    e({
                        key: ``,
                        value: ``,
                        isEditing: !1,
                        domain: u ? null : void 0,
                        previousDomain: void 0,
                        previousKey: void 0
                    })
                },
                type: `button`,
                className: `w-fit`,
                "aria-label": s.formatMessage({
                    id: `wham.createEnvironments.secretsSection.addAriaLabel`,
                    defaultMessage: `Button to add another secret`
                }),
                children: (0, U.jsxs)(`div`, {
                    className: `flex items-center gap-1`,
                    children: [(0, U.jsx)(O, {
                        id: `wham.createEnvironments.secretsSection.add`,
                        defaultMessage: `Add`
                    }), (0, U.jsx)(We, {
                        className: `icon-sm`
                    })]
                })
            })
        })]
    })
}
var tr, U, nr, rr, ir = e((() => {
    u(), M(), st(), ee(), re(), He(), mn(), tr = t(D()), A(), U = k(), nr = ke({
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
    let n = E(),
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
    or = t(D()), A(), W = k(), sr = `# e.g.
pip install -r requirements.txt
npm install
./run/maintenance_setup.sh
`, cr = (0, or.memo)(ar)
}));

function ur({
    value: e,
    onChangeAutoSetupSettings: t
}) {
    let n = E();
    return (0, G.jsx)(at, {
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
    onMaintenanceScriptChange: r,
    setupScriptChildren: i,
    maintenanceScriptChildren: a,
    onClickAppendReplHistory: o,
    inputRef: s,
    replCommandHistory: c,
    suggestedCommand: l,
    onClickAcceptSuggestedCommand: u,
    autoSetupSettings: d,
    onChangeAutoSetupSettings: f,
    postSetupCacheEnabled: p
}) {
    let m = E(),
        h = e === `` && d == null,
        g = d?.use_auto_setup ?? h;
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
            }), !g && (0, G.jsx)(G.Fragment, {
                children: l ? (0, G.jsx)(S, {
                    className: `-my-2.5 block`,
                    label: m.formatMessage({
                        id: `wham.createEnv.terminal.addCommandSuggestion`,
                        defaultMessage: `Add suggestion to setup script`
                    }),
                    children: (0, G.jsx)(T, {
                        type: `button`,
                        color: `secondary`,
                        size: `small`,
                        onClick: u,
                        icon: We,
                        children: (0, G.jsx)(`span`, {
                            className: `max-w-[200px] truncate font-mono text-xs`,
                            children: l.trimEnd().replace(`
`, `; `)
                        })
                    })
                }) : c.length > 0 ? (0, G.jsx)(S, {
                    className: `-my-2.5 block`,
                    label: m.formatMessage({
                        id: `wham.createEnv.terminal.addCommands`,
                        defaultMessage: `Add commands you've run to the setup script`
                    }),
                    children: (0, G.jsx)(T, {
                        type: `button`,
                        color: `secondary`,
                        size: `small`,
                        onClick: o,
                        icon: We,
                        children: (0, G.jsx)(O, {
                            id: `wham.createEnvironments.terminalSection.addToSetupScript`,
                            defaultMessage: `New commands ({count})`,
                            values: {
                                count: c.length
                            }
                        })
                    })
                }) : null
            })]
        }), (0, G.jsx)(ur, {
            value: !g,
            onChangeAutoSetupSettings: f
        }), g && (0, G.jsx)(`p`, {
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
        }), !g && (0, G.jsxs)(G.Fragment, {
            children: [(0, G.jsx)(`div`, {
                className: `flex items-center gap-2 pt-2`,
                children: (0, G.jsx)(`textarea`, {
                    ref: s,
                    name: `setupCommands`,
                    className: `border-token-border-default focus-within:border-token-border-heavy focus-within:ring-token-text-secondary bg-token-bg-primary min-h-32 w-full resize-y rounded-md border px-3 py-2 font-mono text-xs shadow-none focus-within:ring-1`,
                    value: e,
                    rows: Math.min(10, Math.max(4, e.split(`
`).length)),
                    onChange: e => {
                        n(e.target.value)
                    },
                    placeholder: pr,
                    "aria-label": m.formatMessage({
                        id: `wham.setupCommandsSection.setupCommand`,
                        defaultMessage: `Setup Command`
                    })
                })
            }), (0, G.jsx)(`p`, {
                className: `text-token-text-tertiary pt-2 text-xs`,
                children: p ? (0, G.jsx)(O, {
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
            }), i]
        }), p && !g && (0, G.jsxs)(G.Fragment, {
            children: [(0, G.jsx)(cr, {
                script: t,
                onChange: r
            }), a]
        })]
    })
}
var fr, G, pr, mr, hr, gr = e((() => {
    u(), He(), ee(), st(), lr(), fr = t(D()), A(), G = k(), pr = `# e.g.
pip install -r requirements.txt
npm install
./run/setup.sh
`, mr = ke({
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
    ie()
}));

function yr({
    onSuggestCommand: e
}) {
    let t = E(),
        [n, i] = (0, K.useState)([]),
        [s, c] = (0, K.useState)(null),
        [l, u] = (0, K.useState)(!1),
        [d, f] = (0, K.useState)(null),
        p = (0, K.useRef)(null),
        m = (0, K.useCallback)(async n => {
            try {
                for await (let t of n) {
                    let n = br(t);
                    if (!n) continue;
                    let r = n.type;
                    switch (r) {
                        case `client_error`:
                        case `server_error`:
                            c(n.message);
                            break;
                        case `log`:
                            if (n.key === `heartbeat`) break;
                            if (n.key === `suggest_command`) e(n.line);
                            else if (n.key.startsWith(`userscript_`)) {
                                let [, e] = n.key.split(`_`), t = Number(e);
                                if (!Number.isFinite(t)) return;
                                n.line.startsWith(`+ `) ? i(e => [...e, {
                                    messageType: `user`,
                                    line: n.line.slice(2),
                                    scriptIndex: t
                                }]) : i(e => [...e, {
                                    messageType: `output`,
                                    line: n.line,
                                    scriptIndex: t
                                }])
                            } else n.line.startsWith(`+ `) ? i(e => [...e, {
                                messageType: `server`,
                                line: n.line.slice(2)
                            }]) : i(e => [...e, {
                                messageType: `output`,
                                line: n.line
                            }]);
                            break;
                        case `test_session_started`:
                            f(n.test_session_id);
                            break;
                        default:
                            (0, xr.default)(r)
                    }
                }
            } catch (e) {
                if (At(e)) return;
                if (e instanceof a && e.status === 429) {
                    c(t.formatMessage({
                        id: `wham.useStreamTestEnv.errorRateLimited`,
                        defaultMessage: `Too many requests: Your environment didn't start because we're at capacity. Try again soon.`
                    }));
                    return
                }
                c(t.formatMessage({
                    id: `wham.useStreamTestEnv.errorConnecting`,
                    defaultMessage: `Error connecting to the test environment`
                }))
            } finally {
                u(!1)
            }
        }, [t, e]),
        g = async (e, t, n = {}) => {
            p.current = new AbortController, i([]), u(!0), c(null), f(null);
            let a = _r(e.secrets, n),
                s = Sr(a) ? {
                    secrets_with_domains: Cr(a)
                } : {
                    secrets: a
                },
                l = e.envVars.reduce((e, t) => (e[t.key] = t.value, e), {}),
                d = await h(`codex_environment_test`).catch(e => {
                    de.addError(e)
                }),
                g = {
                    ...r({
                        isAuthOptional: !1
                    }),
                    "Content-Type": `application/json`,
                    ...o(null, null, null, d)
                },
                _ = Pe(`https://chatgpt.com/backend-api/wham/environments/test`, {
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
                    signal: p.current.signal,
                    headers: g,
                    routeName: `/wham/environments/test`,
                    observer: {
                        onClose: (e, t) => {
                            u(!1), e === `error` && t instanceof Error && c(t.message)
                        }
                    }
                });
            (async () => {
                await m(_)
            })()
        }, _ = (0, K.useCallback)(() => {
            p.current?.abort(), i(e => [...e, {
                messageType: `output`,
                line: `Test cancelled`
            }])
        }, []);
    return (0, K.useEffect)(() => () => {
        p.current?.abort()
    }, []), {
        messages: n,
        error: s,
        setError: c,
        isStreaming: l,
        startTestEnvironment: g,
        abortTestEnvironment: _,
        testSessionId: d,
        setTestSessionId: f
    }
}

function br(e) {
    return !(`data` in e) || !e.data ? null : e.data
}
var xr, K, Sr, Cr, wr = e((() => {
    le(), m(), p(), j(), n(), vr(), jt(), xr = t(v()), K = t(D()), A(), Sr = e => Array.isArray(e), Cr = e => e.map(e => ({
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
    let s = E(),
        [c, l] = (0, q.useState)(``),
        u = (0, q.useCallback)(({
            command: t
        }) => {
            e && se.runEnvironmentTestCommand({
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
                    if (At(e)) return;
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
        p = t.map((e, t) => (0, J.jsx)(It, {
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
                    }) : (0, J.jsx)(oe.div, {
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
                ref: ce(n, f)
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
    let [i, a] = (0, q.useState)(!1), o = (0, q.useCallback)(i => {
        let o = Pe(`https://chatgpt.com/backend-api/wham/environments/test/${e}/stream`, {
            routeName: `/wham/environments/test/{test_session_id}/stream`,
            method: `POST`,
            signal: i.signal,
            headers: {
                ...r({
                    isAuthOptional: !1
                }),
                "Content-Type": `application/json`
            },
            observer: {
                onOpen: () => {
                    a(!0)
                },
                onClose: (e, t) => {
                    a(!1), e === `error` && t instanceof Error && n(t.message)
                }
            }
        });
        (async () => {
            await t(o)
        })()
    }, [e, t, n]);
    return (0, q.useEffect)(() => {
        if (!e) return;
        let t = new AbortController;
        return o(t), () => {
            t.abort()
        }
    }, [e, o]), {
        connected: i
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
    Ft(), p(), j(), he(), wr(), jt(), pe(), kr = t(v()), i(), q = t(D()), A(), J = k(), Ar = new TextDecoder(`utf-8`)
}));

function Mr({
    formValues: e,
    initialSecrets: t,
    environmentId: n,
    onConnectedChange: r,
    onSubmitCommand: i,
    onSuggestCommand: a
}) {
    let o = E(),
        {
            messages: s,
            error: c,
            setError: l,
            abortTestEnvironment: u,
            isStreaming: d,
            startTestEnvironment: f,
            testSessionId: p,
            setTestSessionId: m
        } = yr({
            onSuggestCommand: a
        }),
        [h, g] = (0, Y.useState)([]),
        _ = (0, Y.useRef)(null),
        v = (0, Y.useRef)(null),
        [y, b] = (0, Y.useState)(!1);
    (0, Y.useEffect)(() => {
        b(!0)
    }, [e]);
    let [ee, x] = (0, Y.useState)(!0);
    (0, Y.useEffect)(() => {
        if (_.current && v.current && ee) {
            let e = _.current,
                t = v.current;
            t.scrollTop = e.offsetTop - t.offsetTop - t.clientHeight / 2 + e.clientHeight / 2
        }
    }, [s, h, ee]);
    let te = () => {
            let e = v.current;
            if (!e) return;
            let t = Math.abs(e.scrollTop + e.clientHeight - e.scrollHeight) < 2;
            x(t)
        },
        [ne, re] = (0, Y.useState)(!1),
        [ie, ae] = (0, Y.useState)(!1),
        oe = () => {
            re(!0), b(!1), m(null), f(e, n, t)
        },
        se = e => {
            ae(e), r(e)
        };
    (0, Y.useEffect)(() => () => r(!1), []);
    let C = (0, Y.useRef)(null),
        w = !ie && !d,
        ce = !w && y,
        le = w && !ne || ce,
        ue = !e.repositoryId,
        [de, fe] = (0, Y.useState)(!1),
        pe = (0, X.jsx)(`div`, {
            className: `absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/20 dark:bg-white/5`,
            onMouseUp: e => e.stopPropagation(),
            onClick: async () => {
                ce && (b(!1), fe(!0), await new Promise(e => setTimeout(e, 3e3)), fe(!1))
            },
            children: (0, X.jsx)(S, {
                open: ue || ce ? void 0 : !1,
                label: ue ? o.formatMessage({
                    id: `wham.createEnv.terminal.selectRepo`,
                    defaultMessage: `Please select a repository`
                }) : ce ? o.formatMessage({
                    id: `wham.createEnv.terminal.restartTooltip`,
                    defaultMessage: `Changes will only be reflected after a restart.`
                }) : void 0,
                children: (0, X.jsx)(T, {
                    onClick: oe,
                    disabled: !e.repositoryId,
                    type: `button`,
                    color: `primary-inverse`,
                    icon: qe,
                    children: ce ? (0, X.jsx)(O, {
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
            height: me
        }, he] = (0, Pr.default)();
    return (0, X.jsxs)(`div`, {
        onMouseUp: e => {
            document.getSelection()?.toString() || (C.current?.focus(), e.preventDefault())
        },
        className: `dark focus-within:ring-primary relative flex h-full w-full flex-col overflow-hidden rounded-xl ring-offset-2 focus-within:ring-2`,
        children: [(0, X.jsxs)(`div`, {
            ref: he,
            className: `bg-token-bg-tertiary flex shrink-0 flex-row justify-between p-4`,
            children: [(0, X.jsx)(`div`, {
                className: `text-sm font-semibold text-white`,
                children: (0, X.jsx)(O, {
                    id: `wham.createEnvironments.terminalSection`,
                    defaultMessage: `Terminal`
                })
            }), (0, X.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [(ie || !!c || ne && !d) && (0, X.jsx)(S, {
                    className: `flex`,
                    open: de ? !0 : void 0,
                    label: o.formatMessage({
                        id: `wham.createEnvironments.terminalSection.restartSessionTooltip`,
                        defaultMessage: `Restart terminal session`
                    }),
                    children: (0, X.jsx)(Fe, {
                        icon: (0, X.jsx)($e, {
                            className: `icon-sm`
                        }),
                        className: `-m-1 h-6! w-6!`,
                        onClick: oe,
                        onMouseEnter: () => fe(!1),
                        label: o.formatMessage({
                            id: `wham.createEnvironments.terminalSection.restartSession`,
                            defaultMessage: `Restart session`
                        })
                    })
                }), d && (0, X.jsx)(S, {
                    className: `flex`,
                    open: de ? !0 : void 0,
                    label: o.formatMessage({
                        id: `wham.createEnvironments.terminalSection.cancelSessionTooltip`,
                        defaultMessage: `Cancel terminal session`
                    }),
                    children: (0, X.jsx)(Fe, {
                        icon: (0, X.jsx)(Xe, {
                            className: `icon-sm`
                        }),
                        className: `-m-1 h-6! w-6!`,
                        onClick: u,
                        label: o.formatMessage({
                            id: `wham.createEnvironments.terminalSection.cancelSession`,
                            defaultMessage: `Cancel session`
                        })
                    })
                }), ie ? (0, X.jsxs)(X.Fragment, {
                    children: [(0, X.jsx)(`div`, {
                        className: `text-xs text-white`,
                        children: (0, X.jsx)(O, {
                            id: `wham.createEnvironments.terminalSection.connected`,
                            defaultMessage: `Connected`
                        })
                    }), (0, X.jsx)(Nr, {
                        color: `#52EA00`
                    })]
                }) : d ? (0, X.jsxs)(X.Fragment, {
                    children: [(0, X.jsx)(`div`, {
                        className: `text-xs text-white`,
                        children: (0, X.jsx)(O, {
                            id: `wham.createEnvironments.terminalSection.initializing`,
                            defaultMessage: `Initializing`
                        })
                    }), (0, X.jsx)(Nr, {
                        color: `#FF9800`
                    })]
                }) : ne ? (0, X.jsxs)(X.Fragment, {
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
        }), c && (0, X.jsxs)(`div`, {
            style: {
                top: me
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
                children: c
            })]
        }), le && pe, (0, X.jsxs)(`div`, {
            className: `bg-token-bg-secondary relative flex flex-1 flex-col overflow-y-auto p-4 font-mono text-xs text-white`,
            onScroll: te,
            ref: v,
            children: [s.length === 0 && !d && (0, X.jsx)(`p`, {
                className: `text-token-text-tertiary`,
                children: `${e.workspaceDirectory} $`
            }), s.map((e, t) => e.messageType === `user` ? (0, X.jsx)(It, {
                className: `text-token-text-tertiary`,
                children: `→ ` + e.line
            }, t) : e.messageType === `server` ? (0, X.jsx)(`p`, {
                className: `text-token-text-tertiary`,
                children: e.line
            }) : (0, X.jsx)(It, {
                children: e.line
            }, t)), (0, X.jsx)(Tr, {
                inputRef: C,
                testSessionId: p,
                replOutput: h,
                setReplOutput: g,
                setError: l,
                onSetConnected: se,
                onSubmitCommand: i
            }), (0, X.jsx)(`div`, {
                ref: _
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
    Ft(), u(), Ke(), Ge(), Ve(), ee(), Ie(), jr(), Y = t(D()), A(), Pr = t(Pt()), wr(), X = k()
}));

function Ir({
    workspaceDirectory: e,
    repositoryName: t,
    onChange: n,
    onClose: r,
    errors: i
}) {
    let a = E(),
        [o, s] = (0, Lr.useState)(e),
        [c] = (0, Lr.useState)(e ?? `/workspace`),
        l = a.formatMessage({
            id: `wham.createEnvironments.workspaceEditorModal.defaultRepositoryName`,
            defaultMessage: `repository`
        }),
        u = a.formatMessage({
            id: `wham.editWorkspace.modal.title`,
            defaultMessage: `Edit workspace`
        }),
        d = ({
            forceClear: e
        } = {}) => {
            (i.length > 0 || e) && n(c), r()
        };
    return (0, Z.jsxs)(_, {
        isOpen: !0,
        onClose: () => d(),
        type: `success`,
        testId: `modal-workspace-editor-modal`,
        children: [(0, Z.jsxs)(g, {
            children: [(0, Z.jsx)(f, {
                children: u
            }), (0, Z.jsx)(y, {
                children: u
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
                children: (0, Z.jsx)(N, {
                    name: `workspaceDirectory`,
                    value: o,
                    onChange: e => {
                        s(e.target.value), n(e.target.value)
                    },
                    inputClassName: `w-full`,
                    containerInputClassName: `w-full`,
                    color: `quaternary`,
                    ariaLabel: a.formatMessage({
                        id: `wham.createEnvironments.workspaceEditorModal.inputAriaLabel`,
                        defaultMessage: `Workspace directory`
                    })
                })
            }), i.length > 0 && (0, Z.jsx)(`div`, {
                className: `flex flex-col gap-2`,
                children: i.map(e => (0, Z.jsx)(`div`, {
                    className: `text-token-text-status-error text-xs`,
                    children: e
                }, e))
            }), (0, Z.jsx)(`div`, {
                className: `text-token-text-tertiary text-xs`,
                children: (0, Z.jsx)(O, {
                    id: `wham.createEnvironments.workspaceEditorModal.description`,
                    defaultMessage: `The repository will be cloned to {workspaceDirectory}/{repositoryName}. You only need to adjust this if your code requires an absolute install path.`,
                    values: {
                        repositoryName: t ?? l,
                        workspaceDirectory: e ?? c
                    }
                })
            }), (0, Z.jsxs)(`div`, {
                className: `flex justify-end gap-2`,
                children: [(0, Z.jsx)(T, {
                    color: `secondary`,
                    onClick: () => d({
                        forceClear: !0
                    }),
                    children: (0, Z.jsx)(O, {
                        id: `wham.createEnvironments.workspaceEditorModal.cancelButton`,
                        defaultMessage: `Cancel`
                    })
                }), (0, Z.jsx)(T, {
                    onClick: () => r(),
                    disabled: i.length > 0,
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
    u(), be(), M(), te(), we(), Lr = t(D()), A(), Z = k(), Rr = (0, Lr.memo)(Ir)
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
        }), (0, $.jsx)(fe, {
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
    } = Mt(), f, p;
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
    t[16] !== o || t[17] !== g || t[18] !== _ ? (v = (0, $.jsx)(Gt, {
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
    let t = s(`1437685011`);
    return (0, $.jsx)(Wr, {
        ...e,
        isGitLabConnectorSettingsEnabled: t
    })
}

function Wr({
    initialEnvironmentId: e,
    initialValues: t,
    primaryButtonText: n,
    onSubmit: r,
    isPending: i,
    existingEnvironment: a,
    isGitLabConnectorSettingsEnabled: o
}) {
    let c = je(),
        [l, u] = Ee(),
        [d, f] = (0, Q.useState)(null),
        [p, m] = (0, Q.useState)(t.githubConnectorId ?? null),
        h = (0, Q.useRef)(t.githubConnectorId ?? null),
        g = o ? a ? Se(a) : t.repositoryId ? ye(t.repositoryId) : l.get(`provider`) === `gitlab` ? `gitlab` : `github` : `github`,
        _ = !a && g === `gitlab` ? h.current : p,
        [v, y] = (0, Q.useState)(null),
        {
            data: ee
        } = ze(),
        x = E(),
        te = b(),
        S = (0, Q.useRef)(null),
        [ne, re] = (0, Q.useState)(!1),
        ie = nt(),
        ae = Yt(),
        [oe, se] = (0, Q.useState)(null),
        C = Zt(),
        w = it({
            defaultValues: t,
            validators: {
                onSubmit: ({
                    value: n
                }) => {
                    n.machine ||= t.machine;
                    let r = {};
                    if (n.label.trim() || (r.label = x.formatMessage({
                            id: `wham.environmentsForm.labelIsRequired`,
                            defaultMessage: `Label is required`
                        })), n.label.length > 64 && (r.label = x.formatMessage({
                            id: `wham.environmentsForm.labelMaxChars`,
                            defaultMessage: `Label must be at most {max} characters`
                        }, {
                            max: 64
                        })), ee?.find(t => t.label === n.label && t.id !== e) && (r.label = x.formatMessage({
                            id: `wham.environmentsForm.labelAlreadyExistsInYourAccountPleaseChooseAnotherName`,
                            defaultMessage: `An environment with this name already exists. Try choosing another name.`
                        })), n.repositoryId.trim() || (r.repositoryId = x.formatMessage({
                            id: `wham.environmentsForm.repositoryRequired`,
                            defaultMessage: `Repository is required`
                        })), n.machine.trim() || (r.machine = x.formatMessage({
                            id: `wham.environmentsForm.machineRequired`,
                            defaultMessage: `Machine is required`
                        })), n.description && n.description.length > 512 && (r.description = x.formatMessage({
                            id: `wham.environmentsForm.descriptionMaxChars`,
                            defaultMessage: `Description must be at most {max} characters`
                        }, {
                            max: 512
                        })), n.secrets.some(e => e.value === `` || e.key === ``) && (r.secrets = x.formatMessage({
                            id: `wham.environmentsForm.secretRequired`,
                            defaultMessage: `Secret value is required`
                        })), ae) {
                        let e = (n.share_targets ?? []).map(e => e.trim()).filter(Boolean);
                        n.share_targets = e, e.length > 0 && n.share_settings === `private` && (r.share_targets = x.formatMessage({
                            id: `wham.environmentsForm.shareTargetsRequiresVisibility`,
                            defaultMessage: `Share targets require workspace or public visibility.`
                        }))
                    } else delete n.share_targets;
                    return n.envVars.some(e => e.key === `` || e.value === ``) && (r.envVars = x.formatMessage({
                        id: `wham.environmentsForm.valueRequired`,
                        defaultMessage: `Environment variable value is required`
                    })), n.secrets.some(e => e.isEditing) && (r.secrets = x.formatMessage({
                        id: `wham.environmentsForm.editingSecrets`,
                        defaultMessage: `Secrets are being edited`
                    })), n.agentNetworkAccess?.mode === `on` && n.agentNetworkAccess.preset_allowlist === `none` && (!n.agentNetworkAccess.allowlist_domains || n.agentNetworkAccess.allowlist_domains.length === 0) && (r.agentNetworkAccess = x.formatMessage({
                        id: `wham.environmentsForm.agentNetworkAccessAllowlistRequired`,
                        defaultMessage: `At least one domain is required`
                    })), Object.keys(r).length > 0 && te.danger(De({
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
                r({
                    ...e,
                    githubConnectorId: g === `gitlab` ? h.current : _
                })
            }
        }),
        ce = (0, Q.useCallback)(() => {
            if (l.get(`provider`) !== `gitlab`) return;
            w.state.values.repositoryId && w.setFieldValue(`repositoryId`, ``), y(null);
            let e = new URLSearchParams(l);
            e.delete(`provider`), u(e, {
                replace: !0
            })
        }, [w, l, u]),
        le = rt(w.store, e => e.isDirty),
        [ue, de] = (0, Q.useState)(!1),
        [fe, pe] = (0, Q.useState)([]),
        he = (0, Q.useRef)(null),
        ge = ut(he);
    (0, Q.useEffect)(() => !le && !ue && !fe.length ? void 0 : _e(window, {
        beforeunload: e => {
            e.preventDefault(), e.returnValue = x.formatMessage({
                id: `wham.environmentsForm.unsavedChanges`,
                defaultMessage: `You have unsaved changes to your environment. Are you sure you want to leave?`
            })
        }
    }), [x, le, ue, fe]), (0, Q.useEffect)(() => {
        c.hash === `#setup-script` && setTimeout(() => {
            S.current && (S.current.scrollIntoView({
                behavior: `smooth`,
                block: `center`
            }), S.current.focus())
        }, 0)
    }, [c.hash]);
    let be = e => {
            e.preventDefault(), e.stopPropagation(), w.handleSubmit()
        },
        Ce = P({
            name: `label`,
            form: w,
            validators: {
                onChange: ({
                    value: t
                }) => {
                    if (t.length > 64) return x.formatMessage({
                        id: `wham.environmentsForm.labelMaxChars`,
                        defaultMessage: `Label must be at most {max} characters`
                    }, {
                        max: 64
                    });
                    if (ee?.find(n => n.label === t && n.id !== e)) return x.formatMessage({
                        id: `wham.environmentsForm.labelAlreadyExistsInYourAccountPleaseChooseAnotherName`,
                        defaultMessage: `An environment with this name already exists. Try choosing another name.`
                    })
                }
            }
        }),
        we = P({
            name: `repositoryId`,
            form: w
        }),
        Te = P({
            name: `enableGitLabWebhooks`,
            form: w
        }),
        D = P({
            name: `description`,
            form: w
        }),
        Oe = P({
            name: `secrets`,
            form: w,
            mode: `array`
        }),
        ke = P({
            name: `share_settings`,
            form: w
        }),
        Ae = P({
            name: `share_targets`,
            form: w,
            mode: `array`
        }),
        k = e => {
            ke.handleChange(e), ae && e === `private` && Ae.handleChange([])
        },
        Me = P({
            name: `agentNetworkAccess`,
            form: w
        }),
        A = P({
            name: `cacheSettings`,
            form: w
        }),
        j = P({
            name: `envVars`,
            form: w,
            mode: `array`
        }),
        M = P({
            name: `machine`,
            form: w
        }),
        Ne = P({
            name: `devcontainer`,
            form: w
        }),
        Pe = s(`1367873407`),
        Fe = P({
            name: `autoSetupSettings`,
            form: w
        }),
        Ie = P({
            name: `setupCommands`,
            form: w,
            mode: `array`
        }),
        N = P({
            name: `maintenanceSetupCommands`,
            form: w,
            mode: `array`
        }),
        Le = P({
            name: `workspaceDirectory`,
            form: w,
            validators: {
                onChange: ({
                    value: e
                }) => {
                    if (!e) return x.formatMessage({
                        id: `wham.environmentsForm.workspaceDirectoryRequired`,
                        defaultMessage: `Workspace directory is required`
                    });
                    if (!e.includes(`/`)) return x.formatMessage({
                        id: `wham.environmentsForm.workspaceDirectoryMustContainASlash`,
                        defaultMessage: `Workspace directory must contain a slash`
                    });
                    if (e === `/`) return x.formatMessage({
                        id: `wham.environmentsForm.workspaceDirectoryCannotBeRoot`,
                        defaultMessage: `Workspace directory cannot be root`
                    })
                }
            }
        }),
        Re = rt(w.store, e => e.values.enableAuthtranslator ?? !1),
        Be = C ? Re : !1;
    (0, Q.useEffect)(() => {
        C || (w.state.values.enableAuthtranslator ?? void 0) !== void 0 && w.setFieldValue(`enableAuthtranslator`, void 0)
    }, [w, C]);
    let Ve = xe(),
        He = !!Ve && ve(Ve),
        Ue = Rt();
    return (0, $.jsx)(`form`, {
        ref: he,
        onSubmit: be,
        className: me(`mx-auto flex min-h-0 w-full grow flex-col items-center overflow-y-auto px-8`, ge && `border-t`),
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
                    children: [!a && g === `github` && (0, $.jsx)(Vt, {
                        className: `mb-4`,
                        selectedInstallationId: d?.id ?? null,
                        setSelectedInstallation: f,
                        setSelectedConnectorId: m
                    }), a ? (0, $.jsx)(sn, {
                        repositoryId: we.state.value,
                        existingEnvironment: a,
                        setRepositoryName: y,
                        provider: g
                    }) : g === `gitlab` ? (0, $.jsx)(Hr, {
                        connectorIdRef: h,
                        enableWebhooks: Te.state.value ?? !0,
                        onEnableWebhooksChange: Te.handleChange,
                        onUnavailable: ce,
                        selectedRepository: we.state.value,
                        onSelect: (e, t, n) => {
                            we.handleChange(e), Ce.handleChange(t), y(n)
                        },
                        installationId: d?.id ?? null,
                        installationHtmlUrl: d?.html_url ?? null,
                        installationAccountLogin: d?.account_login ?? null,
                        installationAccountType: d?.account_type ?? null
                    }) : (0, $.jsx)(Gt, {
                        provider: `github`,
                        selectedRepository: we.state.value,
                        onSelect: (e, t, n) => {
                            we.handleChange(e), Ce.handleChange(t), y(n)
                        },
                        installationId: d?.id ?? null,
                        installationHtmlUrl: d?.html_url ?? null,
                        installationAccountLogin: d?.account_login ?? null,
                        installationAccountType: d?.account_type ?? null,
                        githubConnectorId: _
                    }), a && g === `gitlab` && we.state.value ? (0, $.jsx)(Vr, {
                        enableWebhooks: Te.state.value ?? !1,
                        onEnableWebhooksChange: Te.handleChange,
                        disabled: a.enable_gitlab_webhooks
                    }) : null, (0, $.jsx)(I, {
                        className: `mb-4`,
                        field: we
                    }), (0, $.jsx)(An, {
                        onChange: Ce.handleChange,
                        value: Ce.state.value
                    }), (0, $.jsxs)(`div`, {
                        className: `flex flex-row justify-between pt-1`,
                        children: [(0, $.jsx)(I, {
                            field: Ce
                        }), (0, $.jsx)(Br, {
                            current: Ce.state.value.length,
                            max: 64
                        })]
                    }), (0, $.jsx)(rn, {
                        onChange: D.handleChange,
                        value: D.state.value
                    }), (0, $.jsxs)(`div`, {
                        className: `flex flex-row justify-between pt-1`,
                        children: [ie && (0, $.jsx)(`p`, {
                            className: `text-token-text-tertiary text-xs`,
                            children: (0, $.jsx)(O, {
                                id: `wham.createEnvironments.descriptionSection.description`,
                                defaultMessage: `Explain to members of your organization what this environment is for.`
                            })
                        }), (0, $.jsx)(Br, {
                            current: D.state.value.length,
                            max: 512
                        })]
                    }), (0, $.jsx)(I, {
                        className: `mb-4`,
                        field: D
                    }), ae && (0, $.jsxs)(`div`, {
                        className: `flex flex-col`,
                        children: [(0, $.jsx)(Tn, {
                            value: ke.state.value,
                            onChange: k
                        }), (0, $.jsx)(I, {
                            field: ke
                        }), ke.state.value !== `private` && (0, $.jsxs)($.Fragment, {
                            children: [(0, $.jsx)(yn, {
                                value: Ae.state.value,
                                onChange: Ae.handleChange,
                                onBlur: Ae.handleBlur
                            }), (0, $.jsx)(I, {
                                className: `mb-4`,
                                field: Ae
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
                        "aria-label": x.formatMessage({
                            id: `wham.environmentsForm.learnMoreAriaLabel`,
                            defaultMessage: `Link to learn more about code execution`
                        }),
                        children: (0, $.jsxs)(`div`, {
                            className: `text-token-text-tertiary flex items-center gap-1 text-xs`,
                            children: [(0, $.jsx)(et, {
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
                        children: [Pe && (0, $.jsx)($t, {
                            value: Ne.state.value,
                            onChange: Ne.handleChange
                        }), Ne.state.value == null && (0, $.jsxs)($.Fragment, {
                            children: [(0, $.jsx)(Gn, {
                                selectedMachineId: M.state.value,
                                setSelectedMachineId: M.handleChange,
                                envVars: j.state.value,
                                pushValue: j.pushValue,
                                replaceValue: j.replaceValue
                            }), (0, $.jsx)(I, {
                                className: `mb-1`,
                                field: M
                            }), (0, $.jsxs)(`p`, {
                                className: `text-token-text-tertiary mb-4 text-xs`,
                                children: [(0, $.jsx)(O, {
                                    id: `wham.createEnvironments.machineSelector.description`,
                                    defaultMessage: `Universal is an image based on Ubuntu 24.04 - see <dockerfile>openai/codex-universal</dockerfile> to learn more. {br} The repository will be cloned to {workspaceDirectory}/{repo_name}. <EditWorkspace>Edit workspace directory.</EditWorkspace>`,
                                    values: {
                                        br: (0, $.jsx)(`br`, {}),
                                        repo_name: v ?? ``,
                                        workspaceDirectory: Le.state.value ?? `/workspace`,
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
                                                re(!0)
                                            },
                                            children: e
                                        })
                                    }
                                }), ne && (0, $.jsx)(Rr, {
                                    onChange: e => Le.handleChange(e),
                                    repositoryName: v,
                                    workspaceDirectory: Le.state.value,
                                    errors: Le.state.meta.errors.filter(e => !!e),
                                    onClose: () => re(!1)
                                })]
                            })]
                        }), (0, $.jsx)(_n, {
                            pushValue: j.pushValue,
                            removeValue: j.removeValue,
                            changeValue: j.replaceValue,
                            values: j.state.value
                        }), (0, $.jsx)(I, {
                            className: `mb-4`,
                            field: j
                        }), (0, $.jsx)(rr, {
                            pushValue: Oe.pushValue,
                            removeValue: Oe.removeValue,
                            changeValue: Oe.replaceValue,
                            values: Oe.state.value,
                            enableAuthtranslator: Be,
                            isAuthtranslatorGateEnabled: C,
                            onEnableAuthtranslatorChange: e => w.setFieldValue(`enableAuthtranslator`, e)
                        }), (0, $.jsx)(I, {
                            className: `mb-4`,
                            field: Oe
                        }), (0, $.jsx)(Zn, {
                            cacheSettings: A.state.value,
                            onChange: A.handleChange
                        }), (0, $.jsx)(I, {
                            className: `mb-4`,
                            field: A
                        }), (0, $.jsx)(hr, {
                            onClickAppendReplHistory: () => {
                                let e = x.formatMessage({
                                        id: `wham.createEnv.terminal.recentCommands`,
                                        defaultMessage: `Recent commands`
                                    }),
                                    t = Ie.state.value,
                                    n = `${t?`

`:``}# ${e}:\n` + fe.join(``);
                                w.setFieldValue(`setupCommands`, t + n), pe([]), setTimeout(() => {
                                    if (S.current) {
                                        let e = S.current;
                                        e.scrollTop = e.scrollHeight
                                    }
                                }, 1)
                            },
                            replCommandHistory: fe,
                            suggestedCommand: oe,
                            onClickAcceptSuggestedCommand: () => {
                                oe && w.setFieldValue(`setupCommands`, Ie.state.value + oe), se(null)
                            },
                            setupScript: Ie.state.value,
                            onSetupScriptChange: Ie.handleChange,
                            maintenanceScript: N.state.value,
                            onMaintenanceScriptChange: N.handleChange,
                            setupScriptChildren: (0, $.jsx)(I, {
                                className: `mb-4`,
                                field: Ie
                            }),
                            maintenanceScriptChildren: (0, $.jsx)(I, {
                                className: `mb-4`,
                                field: N
                            }),
                            inputRef: S,
                            autoSetupSettings: Fe.state.value,
                            onChangeAutoSetupSettings: Fe.handleChange,
                            postSetupCacheEnabled: !!A.state.value?.post_setup_cache_enabled
                        }), Ue != null && (0, $.jsxs)($.Fragment, {
                            children: [(0, $.jsx)(Ht, {
                                disabledByWorkspaceSettings: Ue,
                                agentNetworkAccess: Me.state.value,
                                onChange: Me.handleChange
                            }), (0, $.jsx)(I, {
                                className: `mb-4`,
                                field: Me
                            }), He && g === `github` && (0, $.jsx)(Wt, {
                                className: `mb-4`
                            }), !Ue && Me.state.value?.mode === `on` && (0, $.jsx)(Bt, {
                                className: `mb-4`
                            })]
                        })]
                    }), (0, $.jsx)(`div`, {
                        className: `flex h-[650px] p-3`,
                        children: (0, $.jsx)(w.Subscribe, {
                            selector: e => e.values,
                            children: n => (0, $.jsx)(Mr, {
                                formValues: {
                                    ...n,
                                    githubConnectorId: _
                                },
                                environmentId: e,
                                onConnectedChange: de,
                                initialSecrets: t.secrets.reduce((e, t) => (e[t.key] = t.value, e), {}),
                                onSuggestCommand: e => {
                                    se(e)
                                },
                                onSubmitCommand: e => {
                                    e.trim() && pe(t => [...t, e])
                                }
                            })
                        })
                    })]
                })]
            }), (0, $.jsx)(`div`, {
                className: `mb-12 flex w-full items-end pt-4`,
                children: (0, $.jsx)(w.Subscribe, {
                    selector: e => e.values,
                    children: e => (0, $.jsx)(T, {
                        color: `primary`,
                        size: `medium`,
                        type: `button`,
                        className: `ms-auto`,
                        loading: i,
                        disabled: !e.repositoryId,
                        onClick: e => {
                            e.preventDefault(), e.stopPropagation(), w.handleSubmit()
                        },
                        children: n
                    })
                })
            })]
        })
    })
}
var Gr, Q, $, Kr = e((() => {
    Gr = Ae(), u(), Ze(), ge(), ne(), Ce(), ae(), ue(), d(), Nt(), Ut(), ct(), nn(), on(), ln(), vn(), Jt(), Sn(), En(), jn(), Kn(), zt(), Qn(), Kt(), ir(), gr(), Fr(), Xt(), zr(), ie(), Qt(), Lt(), dt(), Ne(), ot(), l(), Q = t(D()), A(), Te(), $ = k()
}));
export {
    Ln as a, vr as i, Kr as n, Rn as o, _r as r, Ur as t
};
//# sourceMappingURL=88c1aa5b-jnze1g84cjarhhdi.js.map