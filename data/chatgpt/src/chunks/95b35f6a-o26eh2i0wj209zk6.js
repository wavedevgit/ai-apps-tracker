import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    SN as t,
    yN as n
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as r,
    Pn as i,
    Tn as a,
    Vn as o,
    zn as s
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    ATt as c,
    MTt as l
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Xt as u,
    Y as d,
    fn as f
} from "./1c919af1-md3slc2ht6it8c1k.js";
import {
    a as ee,
    r as te
} from "./e981ddae-luylzpqk7blubktl.js";
import {
    a as p,
    d as m,
    i as h,
    t as g
} from "./707eab0c-hquix1of0ixypvkq.js";
import {
    t as _
} from "./a35abcd6-kcua9d3wne9fesqf.js";
import {
    i as v,
    t as y
} from "./ca8e826d-ossmfcoaabefcxvj.js";
import {
    n as b,
    t as x
} from "./99af6606-ome24evlktehl958.js";
import {
    n as S,
    t as ne
} from "./3a9d0cc5-mkpigouosp2ii1ag.js";
import {
    n as C,
    t as re
} from "./44d8e5e0-i4lbu8i9vgx52taf.js";
var w, T, E, D, O, k = e((() => {
    w = a(), y(), g(), _(), x(), h(), c(), n(), s(), S(), C(), T = o(), E = e => e != null && (e.startsWith(`https://`) || e.startsWith(`http://`) || e.startsWith(`connectors://`) || e.startsWith(`/`) && !e.startsWith(`//`) || e.startsWith(`data:image/`)) ? e : null, D = e => {
        "use forget";
        let n = (0, w.c)(5),
            {
                name: r,
                iconUrl: i,
                iconDarkUrl: a,
                size: o,
                className: s
            } = e,
            c = o === void 0 ? 56 : o,
            u = s === void 0 ? `rounded-xl!` : s,
            d = E(i),
            f = E(a),
            ee = t(),
            te = l({
                lightLogoUrl: d,
                darkLogoUrl: f
            }),
            p = ee ? f ?? d : d ?? f,
            m = E(te.data?.url),
            h = m?.startsWith(`connectors://`) === !0 ? void 0 : m ?? (p?.startsWith(`connectors://`) ? void 0 : p ?? void 0),
            g;
        return n[0] !== u || n[1] !== r || n[2] !== h || n[3] !== c ? (g = (0, T.jsx)(v, {
            name: r,
            imageUrl: h,
            size: c,
            className: u
        }), n[0] = u, n[1] = r, n[2] = h, n[3] = c, n[4] = g) : g = n[4], g
    }, O = e => {
        "use forget";
        let t = (0, w.c)(60),
            n = r();
        if (e.isLoading) {
            let e, n;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, T.jsx)(`span`, {
                className: `sr-only`,
                children: (0, T.jsx)(i, {
                    id: `admin.plugins.v2.detail.header.loading.label`,
                    defaultMessage: `Loading plugin details`
                })
            }), n = (0, T.jsx)(`span`, {
                "aria-hidden": !0,
                className: `skeleton-child size-14 shrink-0 rounded-xl`
            }), t[0] = e, t[1] = n) : (e = t[0], n = t[1]);
            let r;
            return t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, T.jsxs)(`header`, {
                "aria-busy": `true`,
                className: `border-token-border-light group skeleton flex items-center gap-4 border-b pb-6 [--skeleton-opacity:0.75]`,
                role: `status`,
                children: [e, n, (0, T.jsxs)(`span`, {
                    "aria-hidden": !0,
                    className: `flex min-w-0 flex-1 flex-col gap-2`,
                    children: [(0, T.jsx)(`span`, {
                        className: `skeleton-child h-7 w-40 max-w-full rounded-md`
                    }), (0, T.jsx)(`span`, {
                        className: `skeleton-child h-4 w-56 max-w-full rounded-md`
                    })]
                }), (0, T.jsx)(`span`, {
                    "aria-hidden": !0,
                    className: `skeleton-child h-10 w-28 shrink-0 rounded-full`
                })]
            }), t[2] = r) : r = t[2], r
        }
        let {
            name: a,
            description: o,
            iconUrl: s,
            iconDarkUrl: c,
            isEnabled: l,
            isDraft: h,
            isWorkspacePrivate: g,
            disabled: _,
            availabilityDisabledReason: v,
            isSaving: y,
            primaryActionLabel: x,
            accessPolicySummary: S,
            onConfigureRequiredApp: C,
            onPublishDraft: E,
            onEnable: O,
            onCustomizeByRole: k,
            onDisable: ie,
            onDownloadPlugin: A,
            onUploadNewVersion: j,
            isUploadDisabled: M,
            instanceVersionUploadAction: ae,
            onDelete: N,
            isDeleteDisabled: P,
            kind: oe,
            isOpenAIVerified: F
        } = e, I = oe === void 0 ? `plugin` : oe, L = I === `template`, R;
        t[3] === n ? R = t[4] : (R = n.formatMessage({
            id: `admin.plugins.v2.detail.header.private.status.label`,
            defaultMessage: `Private`
        }), t[3] = n, t[4] = R);
        let z = R,
            B = _ || v != null,
            V;
        t[5] !== o || t[6] !== I ? (V = I === `template` ? o ? (0, T.jsx)(i, {
            id: `admin.plugins.v2.detail.header.template.subtitle.with_description`,
            defaultMessage: `Templated plugin · {description}`,
            values: {
                description: o
            }
        }) : (0, T.jsx)(i, {
            id: `admin.plugins.v2.detail.header.template.subtitle`,
            defaultMessage: `Templated plugin`
        }) : I === `instance` ? o ? (0, T.jsx)(i, {
            id: `admin.plugins.v2.detail.header.instance.subtitle.with_description`,
            defaultMessage: `Custom workspace plugin · {description}`,
            values: {
                description: o
            }
        }) : (0, T.jsx)(i, {
            id: `admin.plugins.v2.detail.header.instance.subtitle`,
            defaultMessage: `Custom workspace plugin`
        }) : o, t[5] = o, t[6] = I, t[7] = V) : V = t[7];
        let H = V,
            U = I === `instance` ? void 0 : `border-token-border-light bg-token-bg-primary! rounded-xl! border shadow-none! [&>span::after]:hidden`,
            W;
        t[8] !== c || t[9] !== s || t[10] !== a || t[11] !== U ? (W = (0, T.jsx)(D, {
            name: a,
            iconUrl: s,
            iconDarkUrl: c,
            className: U
        }), t[8] = c, t[9] = s, t[10] = a, t[11] = U, t[12] = W) : W = t[12];
        let G;
        t[13] !== F || t[14] !== I ? (G = I !== `instance` && F === !0 ? (0, T.jsx)(re, {
            size: `md`
        }) : null, t[13] = F, t[14] = I, t[15] = G) : G = t[15];
        let K;
        t[16] !== W || t[17] !== G ? (K = (0, T.jsxs)(`div`, {
            className: `relative shrink-0`,
            children: [W, G]
        }), t[16] = W, t[17] = G, t[18] = K) : K = t[18];
        let q;
        t[19] === a ? q = t[20] : (q = (0, T.jsx)(`h1`, {
            className: `text-token-text-primary heading-lg truncate font-normal!`,
            children: a
        }), t[19] = a, t[20] = q);
        let J;
        t[21] === H ? J = t[22] : (J = H ? (0, T.jsx)(`p`, {
            className: `text-token-text-secondary mt-1 text-sm`,
            children: H
        }) : null, t[21] = H, t[22] = J);
        let Y;
        t[23] === v ? Y = t[24] : (Y = v != null && (0, T.jsx)(`p`, {
            className: `text-token-text-secondary mt-1 text-sm`,
            children: v
        }), t[23] = v, t[24] = Y);
        let X;
        t[25] !== q || t[26] !== J || t[27] !== Y ? (X = (0, T.jsxs)(`div`, {
            className: `min-w-0 flex-1`,
            children: [q, J, Y]
        }), t[25] = q, t[26] = J, t[27] = Y, t[28] = X) : X = t[28];
        let Z;
        t[29] !== n || t[30] !== P || t[31] !== M || t[32] !== N || t[33] !== A || t[34] !== j ? (Z = j != null || N != null ? (0, T.jsx)(`div`, {
            className: `-me-2 shrink-0`,
            children: (0, T.jsxs)(b, {
                children: [(0, T.jsx)(b.Trigger, {
                    disabled: (j == null || M) && (N == null || P),
                    children: (0, T.jsx)(m, {
                        "aria-label": n.formatMessage({
                            id: `admin.plugins.v2.detail.header.actions.button.label`,
                            defaultMessage: `Plugin actions`
                        }),
                        color: `secondary`,
                        variant: `ghost`,
                        size: `md`,
                        uniform: !0,
                        children: (0, T.jsx)(u, {
                            "aria-hidden": !0,
                            className: `icon-sm`
                        })
                    })
                }), (0, T.jsxs)(b.Content, {
                    align: `end`,
                    minWidth: 160,
                    children: [j != null && A != null ? (0, T.jsx)(b.Item, {
                        disabled: M,
                        onSelect: A,
                        children: (0, T.jsx)(i, {
                            ...ne.download
                        })
                    }) : null, j == null ? null : (0, T.jsx)(b.Item, {
                        disabled: M,
                        onSelect: j,
                        children: (0, T.jsx)(i, {
                            id: `admin.plugins.v2.detail.header.upload_version.menu_item.label`,
                            defaultMessage: `Upload new version`
                        })
                    }), N == null ? null : (0, T.jsx)(b.Item, {
                        color: `danger`,
                        disabled: P,
                        onSelect: N,
                        children: (0, T.jsx)(i, {
                            id: `admin.plugins.v2.detail.header.delete.menu_item.label`,
                            defaultMessage: `Delete plugin`
                        })
                    })]
                })]
            })
        }) : null, t[29] = n, t[30] = P, t[31] = M, t[32] = N, t[33] = A, t[34] = j, t[35] = Z) : Z = t[35];
        let Q;
        t[36] !== S || t[37] !== B || t[38] !== _ || t[39] !== h || t[40] !== l || t[41] !== y || t[42] !== L || t[43] !== g || t[44] !== C || t[45] !== k || t[46] !== ie || t[47] !== O || t[48] !== E || t[49] !== x || t[50] !== z || t[51] !== e.isCreateInstanceLoading || t[52] !== e.onCreateInstance ? (Q = L ? e.isCreateInstanceLoading ? (0, T.jsx)(`span`, {
            "aria-hidden": !0,
            className: `group skeleton shrink-0 [--skeleton-opacity:0.75]`,
            "data-testid": `admin-plugin-template-create-loading`,
            children: (0, T.jsx)(`span`, {
                className: `skeleton-child block h-10 w-44 rounded-full`
            })
        }) : e.onCreateInstance ? (0, T.jsxs)(m, {
            className: `[&>span]:flex`,
            color: `primary`,
            size: `lg`,
            disabled: _,
            loading: y,
            onClick: e.onCreateInstance,
            pill: !0,
            children: [(0, T.jsx)(d, {
                "aria-hidden": !0,
                className: `icon-sm`
            }), (0, T.jsx)(i, {
                id: `admin.plugins.v2.detail.header.template.new_custom_plugin.button.label`,
                defaultMessage: `New custom plugin`
            })]
        }) : null : h && g ? (0, T.jsx)(p, {
            content: (0, T.jsx)(i, {
                id: `admin.plugins.v2.detail.header.private.status.description`,
                defaultMessage: `App approval does not change this plugin's sharing settings.`
            }),
            children: (0, T.jsxs)(m, {
                "aria-label": z,
                className: `[&>span]:flex`,
                color: `secondary`,
                variant: `outline`,
                size: `lg`,
                type: `button`,
                pill: !0,
                children: [z, (0, T.jsx)(te, {
                    "aria-hidden": !0,
                    className: `icon-sm`
                })]
            })
        }) : h ? (0, T.jsxs)(`div`, {
            className: `flex shrink-0 items-center gap-2`,
            children: [(0, T.jsx)(`span`, {
                className: `border-token-border-light text-token-text-secondary rounded-full border px-4 py-2 text-sm`,
                children: (0, T.jsx)(i, {
                    id: `admin.plugins.v2.detail.header.draft.status.label`,
                    defaultMessage: `Draft`
                })
            }), E == null ? null : (0, T.jsx)(m, {
                color: `primary`,
                size: `lg`,
                disabled: _,
                loading: y,
                onClick: E,
                pill: !0,
                children: (0, T.jsx)(i, {
                    id: `admin.plugins.v2.detail.header.draft.publish.button.label`,
                    defaultMessage: `Publish`
                })
            })]
        }) : S == null ? l ? (0, T.jsxs)(b, {
            children: [(0, T.jsx)(b.Trigger, {
                disabled: B || y,
                children: (0, T.jsxs)(m, {
                    className: `[&>span]:flex`,
                    color: `success`,
                    variant: `soft`,
                    size: `lg`,
                    loading: y,
                    disabled: B,
                    pill: !0,
                    children: [(0, T.jsx)(ee, {
                        "aria-hidden": !0,
                        className: `icon-sm`
                    }), (0, T.jsx)(i, {
                        id: `admin.plugins.v2.detail.header.enabled.button.label`,
                        defaultMessage: `Enabled`
                    }), (0, T.jsx)(f, {
                        "aria-hidden": !0,
                        className: `icon-sm`
                    })]
                })
            }), (0, T.jsx)(b.Content, {
                align: `end`,
                minWidth: 220,
                children: (0, T.jsx)(b.Item, {
                    color: `danger`,
                    disabled: B,
                    onSelect: () => ie?.(),
                    children: (0, T.jsxs)(`span`, {
                        className: `flex flex-col gap-0.5`,
                        children: [(0, T.jsx)(i, {
                            id: `admin.plugins.v2.detail.header.disable.menu_item.label`,
                            defaultMessage: `Disable`
                        }), (0, T.jsx)(`span`, {
                            className: `text-token-text-secondary text-xs`,
                            children: (0, T.jsx)(i, {
                                id: `admin.plugins.v2.detail.header.disable.menu_item.description`,
                                defaultMessage: `For entire workspace`
                            })
                        })]
                    })
                })
            })]
        }) : k != null && x == null ? (0, T.jsxs)(b, {
            children: [(0, T.jsx)(b.Trigger, {
                disabled: B || y,
                children: (0, T.jsxs)(m, {
                    className: `[&>span]:flex`,
                    color: `primary`,
                    size: `lg`,
                    disabled: B,
                    loading: y,
                    pill: !0,
                    children: [(0, T.jsx)(i, {
                        id: `admin.plugins.v2.detail.header.enable.button.label`,
                        defaultMessage: `Enable`
                    }), (0, T.jsx)(f, {
                        "aria-hidden": !0,
                        className: `icon-sm`
                    })]
                })
            }), (0, T.jsxs)(b.Content, {
                align: `end`,
                minWidth: 320,
                children: [(0, T.jsx)(b.Item, {
                    disabled: B,
                    onSelect: () => O?.(),
                    children: (0, T.jsxs)(`span`, {
                        className: `flex flex-col gap-0.5`,
                        children: [(0, T.jsx)(i, {
                            id: `admin.plugins.v2.detail.header.enable.menu_item.workspace.label`,
                            defaultMessage: `Available for workspace`
                        }), (0, T.jsx)(`span`, {
                            className: `text-token-text-secondary text-xs`,
                            children: (0, T.jsx)(i, {
                                id: `admin.plugins.v2.detail.header.enable.menu_item.workspace.authorized_members.description`,
                                defaultMessage: `Members with app access can install`
                            })
                        })]
                    })
                }), (0, T.jsx)(b.Item, {
                    disabled: B,
                    onSelect: k,
                    children: (0, T.jsxs)(`span`, {
                        className: `flex flex-col gap-0.5`,
                        children: [(0, T.jsx)(i, {
                            id: `admin.plugins.v2.detail.header.enable.menu_item.roles.label`,
                            defaultMessage: `Customize by role`
                        }), (0, T.jsx)(`span`, {
                            className: `text-token-text-secondary text-xs`,
                            children: (0, T.jsx)(i, {
                                id: `admin.plugins.v2.detail.header.enable.menu_item.roles.description`,
                                defaultMessage: `Manage availability for each role`
                            })
                        })]
                    })
                })]
            })]
        }) : (0, T.jsx)(m, {
            className: `[&>span]:flex`,
            color: `primary`,
            size: `lg`,
            disabled: B,
            loading: y,
            onClick: O,
            pill: !0,
            children: x ?? (0, T.jsx)(i, {
                id: `admin.plugins.v2.detail.header.enable.button.label`,
                defaultMessage: `Enable`
            })
        }) : (0, T.jsxs)(T.Fragment, {
            children: [(0, T.jsx)(`span`, {
                className: `text-token-text-secondary text-sm`,
                children: S
            }), C != null && x != null ? (0, T.jsx)(m, {
                color: `primary`,
                size: `lg`,
                disabled: B,
                loading: y,
                onClick: C,
                pill: !0,
                children: x
            }) : null]
        }), t[36] = S, t[37] = B, t[38] = _, t[39] = h, t[40] = l, t[41] = y, t[42] = L, t[43] = g, t[44] = C, t[45] = k, t[46] = ie, t[47] = O, t[48] = E, t[49] = x, t[50] = z, t[51] = e.isCreateInstanceLoading, t[52] = e.onCreateInstance, t[53] = Q) : Q = t[53];
        let $;
        return t[54] !== ae || t[55] !== X || t[56] !== Z || t[57] !== Q || t[58] !== K ? ($ = (0, T.jsxs)(`header`, {
            className: `border-token-border-light flex items-center gap-4 border-b pb-6`,
            children: [K, X, ae, Z, Q]
        }), t[54] = ae, t[55] = X, t[56] = Z, t[57] = Q, t[58] = K, t[59] = $) : $ = t[59], $
    }
}));
export {
    O as n, k as r, D as t
};
//# sourceMappingURL=95b35f6a-o26eh2i0wj209zk6.js.map