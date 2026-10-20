import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    SN as t,
    yN as n
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as r,
    Nn as i,
    Rn as a,
    wn as o,
    zn as s
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    ATt as c,
    MTt as l
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Xt as u,
    Y as d,
    fn as f
} from "./1c919af1-abbe8u4rjagje3yr.js";
import {
    a as ee,
    r as te
} from "./e981ddae-m7civn9ndz8nfodx.js";
import {
    a as ne,
    d as p,
    i as m,
    t as h
} from "./707eab0c-co82iasy3ghgw11m.js";
import {
    t as g
} from "./a35abcd6-o5uzbzp1jprs3y1b.js";
import {
    i as _,
    t as v
} from "./ca8e826d-jwtxurur93za030j.js";
import {
    n as y,
    t as b
} from "./99af6606-jb7os3jxqi8a1e1k.js";
import {
    n as x,
    t as re
} from "./3a9d0cc5-a9wetd36o3gwu361.js";
import {
    n as S,
    t as ie
} from "./44d8e5e0-da1g0e19mv7i2eed.js";
var C, w, T, E, D, O = e((() => {
    C = o(), v(), h(), g(), b(), m(), c(), n(), a(), x(), S(), w = r(), T = e => e != null && (e.startsWith(`https://`) || e.startsWith(`http://`) || e.startsWith(`connectors://`) || e.startsWith(`/`) && !e.startsWith(`//`) || e.startsWith(`data:image/`)) ? e : null, E = e => {
        "use forget";
        let n = (0, C.c)(5),
            {
                name: r,
                iconUrl: i,
                iconDarkUrl: a,
                size: o,
                className: s
            } = e,
            c = o === void 0 ? 56 : o,
            u = s === void 0 ? `rounded-xl!` : s,
            d = T(i),
            f = T(a),
            ee = t(),
            te = l({
                lightLogoUrl: d,
                darkLogoUrl: f
            }),
            ne = ee ? f ?? d : d ?? f,
            p = T(te.data?.url),
            m = p?.startsWith(`connectors://`) === !0 ? void 0 : p ?? (ne?.startsWith(`connectors://`) ? void 0 : ne ?? void 0),
            h;
        return n[0] !== u || n[1] !== r || n[2] !== m || n[3] !== c ? (h = (0, w.jsx)(_, {
            name: r,
            imageUrl: m,
            size: c,
            className: u
        }), n[0] = u, n[1] = r, n[2] = m, n[3] = c, n[4] = h) : h = n[4], h
    }, D = e => {
        "use forget";
        let t = (0, C.c)(60),
            n = s();
        if (e.isLoading) {
            let e, n;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, w.jsx)(`span`, {
                className: `sr-only`,
                children: (0, w.jsx)(i, {
                    id: `admin.plugins.v2.detail.header.loading.label`,
                    defaultMessage: `Loading plugin details`
                })
            }), n = (0, w.jsx)(`span`, {
                "aria-hidden": !0,
                className: `skeleton-child size-14 shrink-0 rounded-xl`
            }), t[0] = e, t[1] = n) : (e = t[0], n = t[1]);
            let r;
            return t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, w.jsxs)(`header`, {
                "aria-busy": `true`,
                className: `border-token-border-light group skeleton flex items-center gap-4 border-b pb-6 [--skeleton-opacity:0.75]`,
                role: `status`,
                children: [e, n, (0, w.jsxs)(`span`, {
                    "aria-hidden": !0,
                    className: `flex min-w-0 flex-1 flex-col gap-2`,
                    children: [(0, w.jsx)(`span`, {
                        className: `skeleton-child h-7 w-40 max-w-full rounded-md`
                    }), (0, w.jsx)(`span`, {
                        className: `skeleton-child h-4 w-56 max-w-full rounded-md`
                    })]
                }), (0, w.jsx)(`span`, {
                    "aria-hidden": !0,
                    className: `skeleton-child h-10 w-28 shrink-0 rounded-full`
                })]
            }), t[2] = r) : r = t[2], r
        }
        let {
            name: r,
            description: a,
            iconUrl: o,
            iconDarkUrl: c,
            isEnabled: l,
            isDraft: m,
            isWorkspacePrivate: h,
            disabled: g,
            availabilityDisabledReason: _,
            isSaving: v,
            primaryActionLabel: b,
            accessPolicySummary: x,
            onConfigureRequiredApp: S,
            onPublishDraft: T,
            onEnable: D,
            onCustomizeByRole: O,
            onDisable: ae,
            onDownloadPlugin: k,
            onUploadNewVersion: A,
            isUploadDisabled: j,
            instanceVersionUploadAction: M,
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
            B = g || _ != null,
            V;
        t[5] !== a || t[6] !== I ? (V = I === `template` ? a ? (0, w.jsx)(i, {
            id: `admin.plugins.v2.detail.header.template.subtitle.with_description`,
            defaultMessage: `Templated plugin · {description}`,
            values: {
                description: a
            }
        }) : (0, w.jsx)(i, {
            id: `admin.plugins.v2.detail.header.template.subtitle`,
            defaultMessage: `Templated plugin`
        }) : I === `instance` ? a ? (0, w.jsx)(i, {
            id: `admin.plugins.v2.detail.header.instance.subtitle.with_description`,
            defaultMessage: `Custom workspace plugin · {description}`,
            values: {
                description: a
            }
        }) : (0, w.jsx)(i, {
            id: `admin.plugins.v2.detail.header.instance.subtitle`,
            defaultMessage: `Custom workspace plugin`
        }) : a, t[5] = a, t[6] = I, t[7] = V) : V = t[7];
        let H = V,
            U = I === `instance` ? void 0 : `border-token-border-light bg-token-bg-primary! rounded-xl! border shadow-none! [&>span::after]:hidden`,
            W;
        t[8] !== c || t[9] !== o || t[10] !== r || t[11] !== U ? (W = (0, w.jsx)(E, {
            name: r,
            iconUrl: o,
            iconDarkUrl: c,
            className: U
        }), t[8] = c, t[9] = o, t[10] = r, t[11] = U, t[12] = W) : W = t[12];
        let G;
        t[13] !== F || t[14] !== I ? (G = I !== `instance` && F === !0 ? (0, w.jsx)(ie, {
            size: `md`
        }) : null, t[13] = F, t[14] = I, t[15] = G) : G = t[15];
        let K;
        t[16] !== W || t[17] !== G ? (K = (0, w.jsxs)(`div`, {
            className: `relative shrink-0`,
            children: [W, G]
        }), t[16] = W, t[17] = G, t[18] = K) : K = t[18];
        let q;
        t[19] === r ? q = t[20] : (q = (0, w.jsx)(`h1`, {
            className: `text-token-text-primary heading-lg truncate font-normal!`,
            children: r
        }), t[19] = r, t[20] = q);
        let J;
        t[21] === H ? J = t[22] : (J = H ? (0, w.jsx)(`p`, {
            className: `text-token-text-secondary mt-1 text-sm`,
            children: H
        }) : null, t[21] = H, t[22] = J);
        let Y;
        t[23] === _ ? Y = t[24] : (Y = _ != null && (0, w.jsx)(`p`, {
            className: `text-token-text-secondary mt-1 text-sm`,
            children: _
        }), t[23] = _, t[24] = Y);
        let X;
        t[25] !== q || t[26] !== J || t[27] !== Y ? (X = (0, w.jsxs)(`div`, {
            className: `min-w-0 flex-1`,
            children: [q, J, Y]
        }), t[25] = q, t[26] = J, t[27] = Y, t[28] = X) : X = t[28];
        let Z;
        t[29] !== n || t[30] !== P || t[31] !== j || t[32] !== N || t[33] !== k || t[34] !== A ? (Z = A != null || N != null ? (0, w.jsx)(`div`, {
            className: `-me-2 shrink-0`,
            children: (0, w.jsxs)(y, {
                children: [(0, w.jsx)(y.Trigger, {
                    disabled: (A == null || j) && (N == null || P),
                    children: (0, w.jsx)(p, {
                        "aria-label": n.formatMessage({
                            id: `admin.plugins.v2.detail.header.actions.button.label`,
                            defaultMessage: `Plugin actions`
                        }),
                        color: `secondary`,
                        variant: `ghost`,
                        size: `md`,
                        uniform: !0,
                        children: (0, w.jsx)(u, {
                            "aria-hidden": !0,
                            className: `icon-sm`
                        })
                    })
                }), (0, w.jsxs)(y.Content, {
                    align: `end`,
                    minWidth: 160,
                    children: [A != null && k != null ? (0, w.jsx)(y.Item, {
                        disabled: j,
                        onSelect: k,
                        children: (0, w.jsx)(i, {
                            ...re.download
                        })
                    }) : null, A == null ? null : (0, w.jsx)(y.Item, {
                        disabled: j,
                        onSelect: A,
                        children: (0, w.jsx)(i, {
                            id: `admin.plugins.v2.detail.header.upload_version.menu_item.label`,
                            defaultMessage: `Upload new version`
                        })
                    }), N == null ? null : (0, w.jsx)(y.Item, {
                        color: `danger`,
                        disabled: P,
                        onSelect: N,
                        children: (0, w.jsx)(i, {
                            id: `admin.plugins.v2.detail.header.delete.menu_item.label`,
                            defaultMessage: `Delete plugin`
                        })
                    })]
                })]
            })
        }) : null, t[29] = n, t[30] = P, t[31] = j, t[32] = N, t[33] = k, t[34] = A, t[35] = Z) : Z = t[35];
        let Q;
        t[36] !== x || t[37] !== B || t[38] !== g || t[39] !== m || t[40] !== l || t[41] !== v || t[42] !== L || t[43] !== h || t[44] !== S || t[45] !== O || t[46] !== ae || t[47] !== D || t[48] !== T || t[49] !== b || t[50] !== z || t[51] !== e.isCreateInstanceLoading || t[52] !== e.onCreateInstance ? (Q = L ? e.isCreateInstanceLoading ? (0, w.jsx)(`span`, {
            "aria-hidden": !0,
            className: `group skeleton shrink-0 [--skeleton-opacity:0.75]`,
            "data-testid": `admin-plugin-template-create-loading`,
            children: (0, w.jsx)(`span`, {
                className: `skeleton-child block h-10 w-44 rounded-full`
            })
        }) : e.onCreateInstance ? (0, w.jsxs)(p, {
            className: `[&>span]:flex`,
            color: `primary`,
            size: `lg`,
            disabled: g,
            loading: v,
            onClick: e.onCreateInstance,
            pill: !0,
            children: [(0, w.jsx)(d, {
                "aria-hidden": !0,
                className: `icon-sm`
            }), (0, w.jsx)(i, {
                id: `admin.plugins.v2.detail.header.template.new_custom_plugin.button.label`,
                defaultMessage: `New custom plugin`
            })]
        }) : null : m && h ? (0, w.jsx)(ne, {
            content: (0, w.jsx)(i, {
                id: `admin.plugins.v2.detail.header.private.status.description`,
                defaultMessage: `App approval does not change this plugin's sharing settings.`
            }),
            children: (0, w.jsxs)(p, {
                "aria-label": z,
                className: `[&>span]:flex`,
                color: `secondary`,
                variant: `outline`,
                size: `lg`,
                type: `button`,
                pill: !0,
                children: [z, (0, w.jsx)(te, {
                    "aria-hidden": !0,
                    className: `icon-sm`
                })]
            })
        }) : m ? (0, w.jsxs)(`div`, {
            className: `flex shrink-0 items-center gap-2`,
            children: [(0, w.jsx)(`span`, {
                className: `border-token-border-light text-token-text-secondary rounded-full border px-4 py-2 text-sm`,
                children: (0, w.jsx)(i, {
                    id: `admin.plugins.v2.detail.header.draft.status.label`,
                    defaultMessage: `Draft`
                })
            }), T == null ? null : (0, w.jsx)(p, {
                color: `primary`,
                size: `lg`,
                disabled: g,
                loading: v,
                onClick: T,
                pill: !0,
                children: (0, w.jsx)(i, {
                    id: `admin.plugins.v2.detail.header.draft.publish.button.label`,
                    defaultMessage: `Publish`
                })
            })]
        }) : x == null ? l ? (0, w.jsxs)(y, {
            children: [(0, w.jsx)(y.Trigger, {
                disabled: B || v,
                children: (0, w.jsxs)(p, {
                    className: `[&>span]:flex`,
                    color: `success`,
                    variant: `soft`,
                    size: `lg`,
                    loading: v,
                    disabled: B,
                    pill: !0,
                    children: [(0, w.jsx)(ee, {
                        "aria-hidden": !0,
                        className: `icon-sm`
                    }), (0, w.jsx)(i, {
                        id: `admin.plugins.v2.detail.header.enabled.button.label`,
                        defaultMessage: `Enabled`
                    }), (0, w.jsx)(f, {
                        "aria-hidden": !0,
                        className: `icon-sm`
                    })]
                })
            }), (0, w.jsx)(y.Content, {
                align: `end`,
                minWidth: 220,
                children: (0, w.jsx)(y.Item, {
                    color: `danger`,
                    disabled: B,
                    onSelect: () => ae?.(),
                    children: (0, w.jsxs)(`span`, {
                        className: `flex flex-col gap-0.5`,
                        children: [(0, w.jsx)(i, {
                            id: `admin.plugins.v2.detail.header.disable.menu_item.label`,
                            defaultMessage: `Disable`
                        }), (0, w.jsx)(`span`, {
                            className: `text-token-text-secondary text-xs`,
                            children: (0, w.jsx)(i, {
                                id: `admin.plugins.v2.detail.header.disable.menu_item.description`,
                                defaultMessage: `For entire workspace`
                            })
                        })]
                    })
                })
            })]
        }) : O != null && b == null ? (0, w.jsxs)(y, {
            children: [(0, w.jsx)(y.Trigger, {
                disabled: B || v,
                children: (0, w.jsxs)(p, {
                    className: `[&>span]:flex`,
                    color: `primary`,
                    size: `lg`,
                    disabled: B,
                    loading: v,
                    pill: !0,
                    children: [(0, w.jsx)(i, {
                        id: `admin.plugins.v2.detail.header.enable.button.label`,
                        defaultMessage: `Enable`
                    }), (0, w.jsx)(f, {
                        "aria-hidden": !0,
                        className: `icon-sm`
                    })]
                })
            }), (0, w.jsxs)(y.Content, {
                align: `end`,
                minWidth: 320,
                children: [(0, w.jsx)(y.Item, {
                    disabled: B,
                    onSelect: () => D?.(),
                    children: (0, w.jsxs)(`span`, {
                        className: `flex flex-col gap-0.5`,
                        children: [(0, w.jsx)(i, {
                            id: `admin.plugins.v2.detail.header.enable.menu_item.workspace.label`,
                            defaultMessage: `Available for workspace`
                        }), (0, w.jsx)(`span`, {
                            className: `text-token-text-secondary text-xs`,
                            children: (0, w.jsx)(i, {
                                id: `admin.plugins.v2.detail.header.enable.menu_item.workspace.authorized_members.description`,
                                defaultMessage: `Members with app access can install`
                            })
                        })]
                    })
                }), (0, w.jsx)(y.Item, {
                    disabled: B,
                    onSelect: O,
                    children: (0, w.jsxs)(`span`, {
                        className: `flex flex-col gap-0.5`,
                        children: [(0, w.jsx)(i, {
                            id: `admin.plugins.v2.detail.header.enable.menu_item.roles.label`,
                            defaultMessage: `Customize by role`
                        }), (0, w.jsx)(`span`, {
                            className: `text-token-text-secondary text-xs`,
                            children: (0, w.jsx)(i, {
                                id: `admin.plugins.v2.detail.header.enable.menu_item.roles.description`,
                                defaultMessage: `Manage availability for each role`
                            })
                        })]
                    })
                })]
            })]
        }) : (0, w.jsx)(p, {
            className: `[&>span]:flex`,
            color: `primary`,
            size: `lg`,
            disabled: B,
            loading: v,
            onClick: D,
            pill: !0,
            children: b ?? (0, w.jsx)(i, {
                id: `admin.plugins.v2.detail.header.enable.button.label`,
                defaultMessage: `Enable`
            })
        }) : (0, w.jsxs)(w.Fragment, {
            children: [(0, w.jsx)(`span`, {
                className: `text-token-text-secondary text-sm`,
                children: x
            }), S != null && b != null ? (0, w.jsx)(p, {
                color: `primary`,
                size: `lg`,
                disabled: B,
                loading: v,
                onClick: S,
                pill: !0,
                children: b
            }) : null]
        }), t[36] = x, t[37] = B, t[38] = g, t[39] = m, t[40] = l, t[41] = v, t[42] = L, t[43] = h, t[44] = S, t[45] = O, t[46] = ae, t[47] = D, t[48] = T, t[49] = b, t[50] = z, t[51] = e.isCreateInstanceLoading, t[52] = e.onCreateInstance, t[53] = Q) : Q = t[53];
        let $;
        return t[54] !== M || t[55] !== X || t[56] !== Z || t[57] !== Q || t[58] !== K ? ($ = (0, w.jsxs)(`header`, {
            className: `border-token-border-light flex items-center gap-4 border-b pb-6`,
            children: [K, X, M, Z, Q]
        }), t[54] = M, t[55] = X, t[56] = Z, t[57] = Q, t[58] = K, t[59] = $) : $ = t[59], $
    }
}));
export {
    D as n, O as r, E as t
};
//# sourceMappingURL=95b35f6a-bygzjquy01rlnwxl.js.map