import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cw as n,
    Gnt as r,
    Iw as i,
    P5 as a,
    Pw as o,
    Tw as s,
    Xy as c,
    Znt as l,
    Zy as u,
    g8 as d,
    ix as f,
    lK as p,
    lW as m,
    qy as h,
    rx as g,
    uK as _,
    uW as v
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as y,
    Ln as b,
    N as x,
    Nn as S,
    Rn as C,
    Vn as w,
    s as T,
    wn as E,
    zn as D
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Qb as O,
    Xb as ee
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    f_ as k,
    p_ as A
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
import {
    n as j,
    r as M
} from "./5f4d7fa0-y1o3zavyaxi1zm3x.js";
import {
    i as N
} from "./5568a160-oeu324ga41nqfd5h.js";
import {
    o as P,
    s as F
} from "./145c7c03-odmdob7mntsk81v7.js";
var I, L = e((() => {
    C(), I = b({
        on: {
            id: `workspaceSettings.roles.permissionOverride.on`,
            defaultMessage: `On`
        },
        off: {
            id: `workspaceSettings.roles.permissionOverride.off`,
            defaultMessage: `Off`
        }
    })
}));

function R(e) {
    return (0, B.jsx)(`span`, {
        "aria-hidden": !0,
        className: `invisible min-w-0 whitespace-nowrap`,
        children: e
    }, e)
}
var z, B, V, H = e((() => {
    z = E(), A(), u(), L(), C(), B = y(), V = e => {
        "use forget";
        let t = (0, z.c)(35),
            {
                ariaLabel: n,
                enabled: r,
                onEnabledChange: i,
                disabled: a,
                disabledReason: o,
                renderTrigger: s
            } = e,
            l = a !== void 0 && a,
            u = D(),
            d;
        t[0] === u ? d = t[1] : (d = u.formatMessage(I.on), t[0] = u, t[1] = d);
        let f;
        t[2] === u ? f = t[3] : (f = u.formatMessage(I.off), t[2] = u, t[3] = f);
        let p;
        t[4] !== d || t[5] !== f ? (p = {
            on: d,
            off: f
        }, t[4] = d, t[5] = f, t[6] = p) : p = t[6];
        let m = p,
            g = r ? `on` : `off`,
            _;
        t[7] !== m.off || t[8] !== m.on ? (_ = [m.on, m.off], t[7] = m.off, t[8] = m.on, t[9] = _) : _ = t[9];
        let v = _,
            y;
        t[10] === i ? y = t[11] : (y = e => {
            e !== `on` && e !== `off` || i(e === `on`)
        }, t[10] = i, t[11] = y);
        let b;
        t[12] !== n || t[13] !== l || t[14] !== r || t[15] !== m || t[16] !== s || t[17] !== g || t[18] !== v ? (b = s?.({
            enabled: r,
            inherited: !1
        }) ?? (0, B.jsx)(c, {
            label: m[g],
            className: `inline-flex w-max max-w-[240px] min-w-[140px]`,
            disabled: l,
            children: (0, B.jsxs)(k.Trigger, {
                "aria-label": n,
                className: `w-max max-w-[240px] min-w-[140px] justify-between rounded-lg border ${r?`border-token-theme-blue-default bg-token-theme-blue-background text-token-theme-blue-text hover:bg-token-theme-blue-default/15 transition-colors`:`border-token-border-default`}`,
                children: [(0, B.jsxs)(`span`, {
                    className: `grid min-w-0 overflow-hidden [&>*]:col-start-1 [&>*]:row-start-1`,
                    children: [(0, B.jsx)(`span`, {
                        className: `min-w-0 truncate text-start`,
                        children: (0, B.jsx)(k.Value, {
                            children: m[g]
                        })
                    }), v.map(R)]
                }), (0, B.jsx)(`span`, {
                    className: `shrink-0`,
                    children: (0, B.jsx)(k.Icon, {})
                })]
            })
        }), t[12] = n, t[13] = l, t[14] = r, t[15] = m, t[16] = s, t[17] = g, t[18] = v, t[19] = b) : b = t[19];
        let x;
        t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (x = [`on`, `off`], t[20] = x) : x = t[20];
        let S;
        t[21] === m ? S = t[22] : (S = (0, B.jsx)(k.Portal, {
            children: (0, B.jsx)(k.Content, {
                className: `w-[var(--radix-select-trigger-width)] min-w-[var(--radix-select-trigger-width)]!`,
                children: x.map(e => (0, B.jsx)(k.Item, {
                    value: e,
                    children: m[e]
                }, e))
            })
        }), t[21] = m, t[22] = S);
        let C;
        t[23] !== l || t[24] !== g || t[25] !== y || t[26] !== b || t[27] !== S ? (C = (0, B.jsx)(h, {
            children: (0, B.jsxs)(k.Root, {
                value: g,
                disabled: l,
                onValueChange: y,
                children: [b, S]
            })
        }), t[23] = l, t[24] = g, t[25] = y, t[26] = b, t[27] = S, t[28] = C) : C = t[28];
        let w = C,
            T;
        return t[29] !== l || t[30] !== o || t[31] !== m || t[32] !== w || t[33] !== g ? (T = l && o ? (0, B.jsx)(c, {
            label: o,
            secondaryLabel: m[g],
            children: (0, B.jsx)(`div`, {
                className: `flex min-w-0`,
                children: w
            })
        }) : w, t[29] = l, t[30] = o, t[31] = m, t[32] = w, t[33] = g, t[34] = T) : T = t[34], T
    }
}));
async function U({
    queryClient: e,
    workspaceId: t
}) {
    try {
        return await e.fetchQuery({
            queryKey: [`active-codex-access-tokens`, t],
            queryFn: ({
                signal: e
            }) => P({
                signal: e
            }),
            staleTime: 0
        })
    } catch {
        return !0
    }
}

function W() {
    return M({
        purpose: `workspace_settings`
    })
}
var G, K, q, J, Y, X, te, Z, ne, Q, $, re, ie, ae = e((() => {
    G = E(), F(), H(), N(), i(), s(), f(), u(), d(), l(), j(), T(), K = t(w()), C(), m(), _(), O(), q = y(), J = `text-token-link hover:text-token-link-hover underline`, Y = e => {
        "use forget";
        let t = (0, G.c)(46),
            {
                ariaLabel: n,
                role: r,
                permissionName: i,
                additionalPermissionNames: a,
                permissionNamesToAddWhenEnabled: o,
                permissionNamesToRemoveWhenDisabled: s,
                enableConfirmation: l,
                disableConfirmation: u,
                handleSaveRole: d,
                disabled: f,
                disabledReason: p,
                renderDisabledToggleAsOff: m,
                renderAsSelect: h,
                renderSelectTrigger: _,
                codexGithubConnectorEnabled: v
            } = e,
            y = a === void 0 ? [] : a,
            b;
        t[0] === o ? b = t[1] : (b = o === void 0 ? [] : o, t[0] = o, t[1] = b);
        let x = b,
            S;
        t[2] === s ? S = t[3] : (S = s === void 0 ? [] : s, t[2] = s, t[3] = S);
        let C = S,
            w = f !== void 0 && f,
            T = m !== void 0 && m,
            E = h !== void 0 && h,
            O = D(),
            [k, A] = (0, K.useState)(!1),
            [j, M] = (0, K.useState)(!1),
            [N, P] = (0, K.useState)(!1);
        if (i === `codex_github_connector`) {
            let e;
            return t[4] !== v || t[5] !== w || t[6] !== T ? (e = v === void 0 ? (0, q.jsx)(ne, {
                disabled: w,
                renderDisabledToggleAsOff: T
            }) : (0, q.jsx)(Q, {
                connectorEnabled: w && T ? !1 : v
            }), t[4] = v, t[5] = w, t[6] = T, t[7] = e) : e = t[7], e
        }
        let F = e => {
                let t = ee({
                    add: e,
                    currentPermissionNames: r.permissions,
                    permissionName: i,
                    additionalPermissionNames: e ? [...y, ...x] : y,
                    permissionNamesToRemoveWhenDisabled: C
                });
                d({
                    ...r,
                    permissions: t
                })
            },
            I = !(w && T) && [i, ...y].every(e => r.permissions.includes(e)),
            L;
        t[8] !== u || t[9] !== l || t[10] !== F || t[11] !== P || t[12] !== M || t[13] !== A ? (L = async e => {
            if (e && l) {
                A(!0);
                return
            }
            if (!e && u) {
                P(!0);
                let e;
                try {
                    e = await u.shouldConfirm()
                } catch {
                    e = !0
                }
                if (P(!1), e) {
                    M(!0);
                    return
                }
            }
            F(e)
        }, t[8] = u, t[9] = l, t[10] = F, t[11] = P, t[12] = M, t[13] = A, t[14] = L) : L = t[14];
        let R = L,
            z;
        t[15] !== n || t[16] !== w || t[17] !== p || t[18] !== I || t[19] !== R || t[20] !== O || t[21] !== N || t[22] !== E || t[23] !== _ ? (z = E ? (0, q.jsx)(V, {
            renderTrigger: _,
            ariaLabel: n,
            enabled: I,
            onEnabledChange: R,
            disabled: w || N,
            disabledReason: p ? O.formatMessage(p) : void 0
        }) : (0, q.jsx)(g, {
            size: `normal`,
            "aria-label": n,
            checked: I,
            onCheckedChange: R,
            disabled: w || N
        }), t[15] = n, t[16] = w, t[17] = p, t[18] = I, t[19] = R, t[20] = O, t[21] = N, t[22] = E, t[23] = _, t[24] = z) : z = t[24];
        let B = z,
            H;
        t[25] !== B || t[26] !== w || t[27] !== p || t[28] !== O || t[29] !== E ? (H = !E && w && p ? (0, q.jsx)(c, {
            label: O.formatMessage(p),
            children: B
        }) : B, t[25] = B, t[26] = w, t[27] = p, t[28] = O, t[29] = E, t[30] = H) : H = t[30];
        let U = H,
            W;
        t[31] !== n || t[32] !== l || t[33] !== F || t[34] !== A || t[35] !== k ? (W = k && l && (0, q.jsx)(X, {
            title: n,
            confirmation: l,
            onConfirm: () => {
                F(!0), A(!1)
            },
            onClose: () => A(!1)
        }), t[31] = n, t[32] = l, t[33] = F, t[34] = A, t[35] = k, t[36] = W) : W = t[36];
        let J;
        t[37] !== u || t[38] !== F || t[39] !== M || t[40] !== j ? (J = j && u && (0, q.jsx)(Z, {
            title: u.title,
            body: u.body,
            confirmLabel: u.confirmLabel,
            onConfirm: () => {
                F(!1), M(!1)
            },
            onClose: () => M(!1)
        }), t[37] = u, t[38] = F, t[39] = M, t[40] = j, t[41] = J) : J = t[41];
        let Y;
        return t[42] !== W || t[43] !== J || t[44] !== U ? (Y = (0, q.jsxs)(q.Fragment, {
            children: [U, W, J]
        }), t[42] = W, t[43] = J, t[44] = U, t[45] = Y) : Y = t[45], Y
    }, X = e => {
        "use forget";
        let t = (0, G.c)(23),
            {
                title: r,
                confirmation: i,
                onConfirm: a,
                onClose: s
            } = e,
            c;
        t[0] !== i.warning || t[1] !== r ? (c = i.warning ? (0, q.jsxs)(`span`, {
            className: `flex items-center gap-2`,
            children: [(0, q.jsx)(v, {
                "aria-hidden": !0,
                className: `icon-md text-token-icon-status-warning shrink-0`
            }), r]
        }) : r, t[0] = i.warning, t[1] = r, t[2] = c) : c = t[2];
        let l;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, q.jsx)(S, {
            ...$.enable
        }), t[3] = l) : l = t[3];
        let u;
        t[4] === a ? u = t[5] : (u = (0, q.jsx)(o.Button, {
            as: `button`,
            color: `primary`,
            loading: !1,
            onClick: a,
            children: l
        }), t[4] = a, t[5] = u);
        let d;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, q.jsx)(S, {
            ...$.cancel
        }), t[6] = d) : d = t[6];
        let f;
        t[7] === s ? f = t[8] : (f = (0, q.jsx)(o.Button, {
            as: `button`,
            color: `ghost`,
            onClick: s,
            children: d
        }), t[7] = s, t[8] = f);
        let p;
        t[9] === i.body ? p = t[10] : (p = (0, q.jsx)(`p`, {
            children: (0, q.jsx)(S, {
                ...i.body
            })
        }), t[9] = i.body, t[10] = p);
        let m;
        t[11] !== i.details || t[12] !== i.learnMoreUrl ? (m = i.details && (0, q.jsx)(`p`, {
            children: (0, q.jsx)(S, {
                ...i.details,
                values: {
                    learnMoreLink: e => i.learnMoreUrl ? (0, q.jsx)(`a`, {
                        href: i.learnMoreUrl,
                        target: `_blank`,
                        className: J,
                        rel: `noopener noreferrer`,
                        children: e
                    }) : e
                }
            })
        }), t[11] = i.details, t[12] = i.learnMoreUrl, t[13] = m) : m = t[13];
        let h;
        t[14] !== p || t[15] !== m ? (h = (0, q.jsxs)(`div`, {
            className: `text-token-text-secondary flex flex-col gap-5 text-sm leading-6`,
            children: [p, m]
        }), t[14] = p, t[15] = m, t[16] = h) : h = t[16];
        let g;
        return t[17] !== s || t[18] !== c || t[19] !== u || t[20] !== f || t[21] !== h ? (g = (0, q.jsx)(n, {
            isOpen: !0,
            onClose: s,
            size: `large`,
            headerClassName: `pe-4 py-4`,
            title: c,
            testId: `modal-permission-enable-confirmation`,
            primaryButton: u,
            secondaryButton: f,
            children: h
        }), t[17] = s, t[18] = c, t[19] = u, t[20] = f, t[21] = h, t[22] = g) : g = t[22], g
    }, te = e => {
        "use forget";
        let t = (0, G.c)(21),
            n, i, a, o;
        t[0] === e ? (n = t[1], i = t[2], a = t[3], o = t[4]) : ({
            workspaceId: o,
            handleSaveRole: n,
            codexLocalOnly: a,
            ...i
        } = e, t[0] = e, t[1] = n, t[2] = i, t[3] = a, t[4] = o);
        let s = a !== void 0 && a,
            c = x(),
            l = s ? ie : re,
            u;
        t[5] !== s || t[6] !== n || t[7] !== i ? (u = e => n(r(`440232006`) && !s ? {
            ...e,
            permissions: ee({
                add: e.permissions.includes(i.permissionName),
                currentPermissionNames: e.permissions,
                permissionName: p.FloraLocalAccess,
                additionalPermissionNames: []
            })
        } : e), t[5] = s, t[6] = n, t[7] = i, t[8] = u) : u = t[8];
        let d;
        t[9] !== c || t[10] !== o ? (d = () => U({
            queryClient: c,
            workspaceId: o
        }), t[9] = c, t[10] = o, t[11] = d) : d = t[11];
        let f;
        t[12] !== l.body || t[13] !== l.confirm || t[14] !== l.title || t[15] !== d ? (f = {
            title: l.title,
            body: l.body,
            confirmLabel: l.confirm,
            shouldConfirm: d
        }, t[12] = l.body, t[13] = l.confirm, t[14] = l.title, t[15] = d, t[16] = f) : f = t[16];
        let m;
        return t[17] !== i || t[18] !== u || t[19] !== f ? (m = (0, q.jsx)(Y, {
            ...i,
            handleSaveRole: u,
            disableConfirmation: f
        }), t[17] = i, t[18] = u, t[19] = f, t[20] = m) : m = t[20], m
    }, Z = e => {
        "use forget";
        let t = (0, G.c)(20),
            {
                title: r,
                body: i,
                confirmLabel: a,
                codexLocalOnly: s,
                onConfirm: c,
                onClose: l
            } = e,
            u = s !== void 0 && s,
            d = D(),
            f = u ? ie : re,
            p;
        t[0] !== f || t[1] !== d || t[2] !== r ? (p = d.formatMessage(r ?? f.title), t[0] = f, t[1] = d, t[2] = r, t[3] = p) : p = t[3];
        let m = a ?? f.confirm,
            h;
        t[4] === m ? h = t[5] : (h = (0, q.jsx)(S, {
            ...m
        }), t[4] = m, t[5] = h);
        let g;
        t[6] !== c || t[7] !== h ? (g = (0, q.jsx)(o.Button, {
            as: `button`,
            color: `danger`,
            loading: !1,
            onClick: c,
            children: h
        }), t[6] = c, t[7] = h, t[8] = g) : g = t[8];
        let _;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, q.jsx)(S, {
            ...$.cancel
        }), t[9] = _) : _ = t[9];
        let v;
        t[10] === l ? v = t[11] : (v = (0, q.jsx)(o.Button, {
            as: `button`,
            color: `ghost`,
            onClick: l,
            children: _
        }), t[10] = l, t[11] = v);
        let y = i ?? f.body,
            b;
        t[12] === y ? b = t[13] : (b = (0, q.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: (0, q.jsx)(S, {
                ...y
            })
        }), t[12] = y, t[13] = b);
        let x;
        return t[14] !== l || t[15] !== p || t[16] !== g || t[17] !== v || t[18] !== b ? (x = (0, q.jsx)(n, {
            isOpen: !0,
            onClose: l,
            size: `large`,
            headerClassName: `pe-4 py-4`,
            title: p,
            testId: `modal-permission-disable-confirmation`,
            primaryButton: g,
            secondaryButton: v,
            children: b
        }), t[14] = l, t[15] = p, t[16] = g, t[17] = v, t[18] = b, t[19] = x) : x = t[19], x
    }, ne = e => {
        "use forget";
        let t = (0, G.c)(2),
            {
                disabled: n,
                renderDisabledToggleAsOff: r
            } = e,
            i = n !== void 0 && n,
            o = r !== void 0 && r,
            s = a(W),
            c = i && o ? !1 : s ?? null,
            l;
        return t[0] === c ? l = t[1] : (l = (0, q.jsx)(Q, {
            connectorEnabled: c
        }), t[0] = c, t[1] = l), l
    }, Q = e => {
        "use forget";
        let t = (0, G.c)(5),
            {
                connectorEnabled: n
            } = e,
            r = D(),
            i;
        t[0] !== n || t[1] !== r ? (i = r.formatMessage(n == null ? $.unavailable : n ? $.enabled : $.disabled), t[0] = n, t[1] = r, t[2] = i) : i = t[2];
        let a;
        return t[3] === i ? a = t[4] : (a = (0, q.jsx)(`span`, {
            className: `text-token-text-secondary text-sm`,
            children: i
        }), t[3] = i, t[4] = a), a
    }, $ = b({
        enabled: {
            id: `GCmM3v`,
            defaultMessage: `Enabled`
        },
        disabled: {
            id: `7IYYMe`,
            defaultMessage: `Disabled`
        },
        unavailable: {
            id: `chatgpt.workspace.permissions.codex_github.status.unavailable`,
            defaultMessage: `Unavailable`
        },
        enable: {
            id: `edq+08`,
            defaultMessage: `Enable`
        },
        cancel: {
            id: `Zpc5jh`,
            defaultMessage: `Cancel`
        }
    }), re = b({
        title: {
            id: `chatgpt.workspace.permissions.codex_and_work_local.disable_confirmation.title`,
            defaultMessage: `Disable Codex and Work Local?`
        },
        body: {
            id: `chatgpt.workspace.permissions.codex_and_work_local.disable_confirmation.body`,
            defaultMessage: `Active Codex access tokens owned by affected members will stop working until Codex and Work Local access is restored.`
        },
        confirm: {
            id: `chatgpt.workspace.permissions.codex_and_work_local.disable_confirmation.button.confirm`,
            defaultMessage: `Disable Codex and Work Local`
        }
    }), ie = b({
        title: {
            id: `chatgpt.workspace.permissions.codex_local.disable_confirmation.title`,
            defaultMessage: `Disable Codex Local?`
        },
        body: {
            id: `chatgpt.workspace.permissions.codex_local.disable_confirmation.body`,
            defaultMessage: `Active Codex access tokens owned by affected members will stop working until Codex Local access is restored.`
        },
        confirm: {
            id: `chatgpt.workspace.permissions.codex_local.disable_confirmation.button.confirm`,
            defaultMessage: `Disable Codex Local`
        }
    })
}));
export {
    ae as a, H as c, Y as i, L as l, te as n, U as o, X as r, V as s, Z as t, I as u
};
//# sourceMappingURL=a99a60c9-ghjrcm9qwz7p7unk.js.map