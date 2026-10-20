import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IN as n,
    LN as r,
    N5 as i,
    aq as a,
    fq as o,
    h8 as s
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as c,
    Ln as l,
    Nn as u,
    Rn as d,
    Vn as f,
    wn as p,
    zn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $It as h,
    Dp as g,
    Ep as _,
    FTt as v,
    KIt as y,
    NTt as b,
    Tp as x,
    eTn as S,
    tTn as C,
    wp as w
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    os as T,
    ss as E
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    U as ee
} from "./1c919af1-n3qwx9w7ipxrf1ap.js";
import {
    a as D
} from "./74a883a0-0bl4w620esk73bmz.js";
import {
    t as O
} from "./4b68ab38-hqs0yc0b0yhvv7p6.js";
import {
    t as k
} from "./9d60841e-e49t3yx590vsf159.js";
import {
    t as A
} from "./e981ddae-jmgg6ibiidqeeif6.js";
import {
    a as j,
    b as M,
    d as te,
    i as N,
    t as P,
    x as ne
} from "./707eab0c-iziu4upusihd9xbv.js";
import {
    t as F
} from "./a35abcd6-fl6iafxr1mqknzi0.js";
import {
    n as I,
    t as L
} from "./1aa4cb0b-kieaorgai1qipo5e.js";
import {
    i as R,
    n as re,
    t as ie
} from "./ca8e826d-f71qtsvyiakn2qfn.js";
import {
    a as ae,
    n as oe,
    t as z
} from "./18093cad-gxacttrmb37lcogg.js";
import {
    n as se,
    o as B
} from "./6550989e-cmyjat2wx5njm44i.js";
import {
    a as ce,
    o as V,
    t as H,
    x as le
} from "./4285e798-gdl12dl0yi3x94rm.js";
import {
    n as U,
    t as ue
} from "./8e88ec39-ly2p52dkrwo6r0lt.js";
import {
    i as W,
    r as de
} from "./126cbe2b-gabi8c2u4fs4fzc3.js";
import {
    n as fe,
    r as pe,
    t as me
} from "./b162dc0f-m3p46b0v8e2rgew6.js";
import {
    n as he,
    t as ge
} from "./62a94fc0-jocxfwzul4gtsyf1.js";
import {
    n as _e,
    t as ve
} from "./2a78025d-g646lz1x3wjphfiy.js";
var ye, be = e((() => {
        de(), T(), C(), ye = ({
            connectorId: e,
            queryClient: t,
            authTypeOverride: n,
            redirectAfter: r,
            onResult: i,
            onComplete: a
        }) => {
            E({
                connectorId: e,
                linkCreateProductSku: S.HERMES,
                queryClient: t,
                authTypeOverride: n,
                redirectAfter: r,
                onResult: i,
                onComplete: a,
                invalidateQueries: W
            })
        }
    })),
    xe, Se = e((() => {
        xe = ({
            defaultPrompt: e,
            templateDisplayName: t,
            templateName: n
        }) => e?.trim() || `Start from the ${t?.trim()||n.split(/[-_]+/).filter(e=>e.length>0).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `)} template. Then help me customize the agent.`
    })),
    G, K, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me = e((() => {
        _(), d(), G = e => ({
            name: e,
            color: g(e) ? w(e) : `blue`
        }), K = l({
            chiefOfStaffDisplayName: {
                id: `Hermes.GptStudio.Chat.TemplateCatalog.chiefOfStaffDisplayName`,
                defaultMessage: `Chief of Staff`
            },
            chiefOfStaffShortDescription: {
                id: `Hermes.GptStudio.Chat.TemplateCatalog.chiefOfStaffShortDescription`,
                defaultMessage: `Prepare an executive-style brief from calendar, inbox, chat, and tasks.`
            },
            customerReplyDrafterDisplayName: {
                id: `Hermes.GptStudio.Chat.TemplateCatalog.customerReplyDrafterDisplayName`,
                defaultMessage: `Customer Reply Drafter`
            },
            customerReplyDrafterShortDescription: {
                id: `Hermes.GptStudio.Chat.TemplateCatalog.customerReplyDrafterShortDescription`,
                defaultMessage: `Draft grounded replies from tickets, accounts, and policy.`
            },
            dataAnalysisDisplayName: {
                id: `Hermes.GptStudio.Chat.TemplateCatalog.dataAnalysisDisplayName`,
                defaultMessage: `Data Analysis`
            },
            dataAnalysisShortDescription: {
                id: `Hermes.GptStudio.Chat.TemplateCatalog.dataAnalysisShortDescription`,
                defaultMessage: `Answer data questions, write SQL, and create charts.`
            },
            salesSupportDisplayName: {
                id: `Hermes.GptStudio.Chat.TemplateCatalog.salesSupportDisplayName`,
                defaultMessage: `Sales Assistant`
            },
            salesSupportShortDescription: {
                id: `Hermes.GptStudio.Chat.TemplateCatalog.salesSupportShortDescription`,
                defaultMessage: `Research accounts, prepare outreach, and support deals.`
            },
            sqlCrafterDisplayName: {
                id: `Hermes.GptStudio.Chat.TemplateCatalog.sqlCrafterDisplayName`,
                defaultMessage: `SQL Crafter`
            },
            sqlCrafterShortDescription: {
                id: `Hermes.GptStudio.Chat.TemplateCatalog.sqlCrafterShortDescription`,
                defaultMessage: `Draft and review SQL from schemas and metric logic`
            }
        }), Ce = [{
            template_name: `customer-reply-drafter`,
            display_name: K.customerReplyDrafterDisplayName,
            short_description: K.customerReplyDrafterShortDescription,
            icon: G(`mailman`)
        }, {
            template_name: `data-analysis`,
            display_name: K.dataAnalysisDisplayName,
            short_description: K.dataAnalysisShortDescription,
            icon: G(`stax`)
        }, {
            template_name: `chief-of-staff`,
            display_name: K.chiefOfStaffDisplayName,
            short_description: K.chiefOfStaffShortDescription,
            icon: G(`brief`)
        }, {
            template_name: `sales-support`,
            display_name: K.salesSupportDisplayName,
            short_description: K.salesSupportShortDescription,
            icon: G(`starry`)
        }, {
            template_name: `sql-crafter`,
            display_name: K.sqlCrafterDisplayName,
            short_description: K.sqlCrafterShortDescription,
            icon: G(`digit`)
        }], we = e => Ce.map(t => ({
            template_name: t.template_name,
            display_name: e.formatMessage(t.display_name),
            short_description: e.formatMessage(t.short_description),
            icon: t.icon
        })), Te = new Map(Ce.map((e, t) => [e.template_name, t])), Ee = {
            "chief-of-staff": G(`brief`),
            "sales-support": G(`starry`),
            "customer-reply-drafter": G(`mailman`),
            "customer-support": G(`yo`),
            "data-analysis": G(`digit`),
            "sql-crafter": G(`digit`),
            "knowledge-search": G(`tome`)
        }, De = {
            name: `bloop`,
            color: `blue`
        }, Oe = (e, t) => t === w(e) || x(e).some(e => e === t), ke = e => [...e].sort((e, t) => {
            let n = Te.get(e.template_name),
                r = Te.get(t.template_name);
            return n != null && r != null ? n - r : n == null ? r == null ? e.display_name.localeCompare(t.display_name) : 1 : -1
        }), Ae = e => ke(e).sort((e, t) => e.template_name === `chief-of-staff` ? -1 : +(t.template_name === `chief-of-staff`)), je = e => {
            let t = e.icon ?? Ee[e.template_name] ?? De;
            return g(t.name) ? {
                ...t,
                color: Oe(t.name, t.color) ? t.color : w(t.name)
            } : t
        }
    })),
    Ne, Pe, Fe, Ie, Le, Re = e((() => {
        Ne = `starter_prompt`, Pe = `slack-bot`, Fe = ({
            starterPromptKey: e
        }) => new URLSearchParams({
            [Ne]: e
        }), Ie = e => {
            let t = e.get(Ne)?.trim();
            return t === `slack-bot` ? t : null
        }, Le = e => {
            let t = new URLSearchParams(e);
            return t.delete(Ne), t
        }
    })),
    ze, Be, Ve, He, Ue, We, Ge = e((() => {
        ze = `AS-92G_SetupBody`, Be = `AS-92G_SetupFooter`, Ve = `AS-92G_SetupScrollArea`, He = `AS-92G_SetupScrollContent`, Ue = `AS-92G_SetupScrollRegion`, We = {
            SetupBody: ze,
            SetupFooter: Be,
            SetupScrollArea: Ve,
            SetupScrollContent: He,
            SetupScrollRegion: Ue
        }
    }));

function Ke(e) {
    return {
        kind: `tool`,
        value: e.id,
        label: e.name,
        logoUrl: e.logoUrl,
        disabled: e.disabledByAdmin,
        disabledByAdmin: e.disabledByAdmin
    }
}

function qe(e) {
    return !e.disabledByAdmin
}

function Je(e) {
    return e.disabledByAdmin
}

function Ye(e) {
    return e.value
}

function Xe(e) {
    return e.value === nt
}

function Ze(e) {
    return e.id
}

function Qe(e) {
    return (0, q.jsx)(ut, {
        toolName: e.label,
        logoUrl: e.logoUrl
    }, e.value)
}

function $e(e) {
    return e.label
}
var et, tt, q, nt, rt, it, at, ot, st, ct, lt, ut, dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, J, xt = e((() => {
        et = p(), U(), b(), ie(), P(), F(), L(), z(), ve(), N(), tt = t(f()), d(), Se(), Ge(), q = c(), nt = `__custom_mcp__`, rt = 2, it = 32, at = e => _t(e).length > 0, ot = e => {
            "use forget";
            let t = (0, et.c)(77),
                {
                    template: n,
                    onBackToTemplates: r,
                    onAddCustomMcp: i,
                    onConnectTemplateTool: a,
                    onCloseSetup: o,
                    onCreateAgent: s,
                    onPendingActionChange: c,
                    pendingAction: l
                } = e,
                d = m(),
                {
                    template_name: f,
                    display_name: p,
                    default_prompt: h
                } = n,
                g;
            t[0] !== h || t[1] !== p || t[2] !== f ? (g = xe({
                defaultPrompt: h,
                templateDisplayName: p,
                templateName: f
            }), t[0] = h, t[1] = p, t[2] = f, t[3] = g) : g = t[3];
            let _ = g,
                v;
            t[4] === n ? v = t[5] : (v = () => _t(n), t[4] = n, t[5] = v);
            let [y, b] = (0, tt.useState)(v), x;
            t[6] === y ? x = t[7] : (x = () => gt(y), t[6] = y, t[7] = x);
            let [S, C] = (0, tt.useState)(x), w = (0, tt.useRef)(null), T;
            t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (T = {
                hasContentAbove: !1,
                hasContentBelow: !1
            }, t[8] = T) : T = t[8];
            let [E, ee] = (0, tt.useState)(T), D, k;
            t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (D = () => {
                let e = w.current;
                if (e == null) return;
                let t = () => {
                    let t = e.scrollHeight - e.clientHeight - e.scrollTop;
                    ee({
                        hasContentAbove: e.scrollTop > 1,
                        hasContentBelow: t > 1
                    })
                };
                if (t(), e.addEventListener(`scroll`, t, {
                        passive: !0
                    }), typeof ResizeObserver > `u`) return () => {
                    e.removeEventListener(`scroll`, t)
                };
                let n = new ResizeObserver(() => {
                    t()
                });
                n.observe(e);
                let r = e.firstElementChild;
                return r instanceof HTMLElement && n.observe(r), () => {
                    e.removeEventListener(`scroll`, t), n.disconnect()
                }
            }, k = [], t[9] = D, t[10] = k) : (D = t[9], k = t[10]), (0, tt.useEffect)(D, k);
            let A;
            t[11] !== o || t[12] !== s || t[13] !== c || t[14] !== S || t[15] !== f || t[16] !== _ ? (A = async () => {
                c(!0), await Promise.resolve(s({
                    kind: `agent_template`,
                    prompt: _,
                    templateName: f,
                    selectedToolIdsByCategory: S
                })).then(() => {
                    c(!1), o()
                }, e => {
                    throw c(!1), e
                })
            }, t[11] = o, t[12] = s, t[13] = c, t[14] = S, t[15] = f, t[16] = _, t[17] = A) : A = t[17];
            let j = A,
                M;
            t[18] === p ? M = t[19] : (M = (0, q.jsx)(oe.Title, {
                className: `mb-0 min-w-0 flex-1 truncate font-medium`,
                children: (0, q.jsx)(u, {
                    ...J.title,
                    values: {
                        templateName: p
                    }
                })
            }), t[18] = p, t[19] = M);
            let N;
            t[20] === d ? N = t[21] : (N = d.formatMessage(J.closeSetup), t[20] = d, t[21] = N);
            let P;
            t[22] !== r || t[23] !== f ? (P = () => {
                r(f)
            }, t[22] = r, t[23] = f, t[24] = P) : P = t[24];
            let ne;
            t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = (0, q.jsx)(O, {}), t[25] = ne) : ne = t[25];
            let F;
            t[26] !== l || t[27] !== P || t[28] !== N ? (F = (0, q.jsx)(te, {
                "aria-label": N,
                color: `primary`,
                variant: `ghost`,
                type: `button`,
                uniform: !0,
                opticallyAlign: `end`,
                size: `lg`,
                iconSize: `lg`,
                className: `-translate-y-1`,
                disabled: l,
                onClick: P,
                children: ne
            }), t[26] = l, t[27] = P, t[28] = N, t[29] = F) : F = t[29];
            let I;
            t[30] !== F || t[31] !== M ? (I = (0, q.jsxs)(`div`, {
                className: `flex items-center justify-between gap-2 pb-3`,
                children: [M, F]
            }), t[30] = F, t[31] = M, t[32] = I) : I = t[32];
            let L;
            t[33] === p ? L = t[34] : (L = (0, q.jsx)(oe.Description, {
                className: `text-token-text-primary text-sm`,
                children: (0, q.jsx)(u, {
                    ...J.description,
                    values: {
                        templateName: p
                    }
                })
            }), t[33] = p, t[34] = L);
            let R;
            t[35] !== I || t[36] !== L ? (R = (0, q.jsxs)(`div`, {
                className: `px-5 pt-4 pb-5`,
                children: [I, L]
            }), t[35] = I, t[36] = L, t[37] = R) : R = t[37];
            let re = E.hasContentAbove ? `` : void 0,
                ie = E.hasContentBelow ? `` : void 0,
                ae;
            if (t[38] !== i || t[39] !== a || t[40] !== l || t[41] !== S || t[42] !== f || t[43] !== y) {
                let e;
                t[45] !== i || t[46] !== a || t[47] !== l || t[48] !== S || t[49] !== f ? (e = e => (0, q.jsx)(st, {
                    category: e,
                    selectedToolIds: S[e.id] ?? [],
                    onSelectedToolIdsChange: t => {
                        C(n => ({
                            ...n,
                            [e.id]: t
                        }))
                    },
                    onAddCustomMcp: i == null ? void 0 : () => {
                        i(t => {
                            b(n => vt({
                                categories: n,
                                categoryId: e.id,
                                tool: bt(t)
                            })), C(n => yt({
                                categoryId: e.id,
                                selections: n,
                                toolId: t.id
                            }))
                        })
                    },
                    onConnectTemplateTool: t => {
                        a({
                            tool: t,
                            onComplete: () => {
                                b(n => vt({
                                    categories: n,
                                    categoryId: e.id,
                                    tool: {
                                        ...t,
                                        selected: !0
                                    }
                                })), C(n => yt({
                                    categoryId: e.id,
                                    selections: n,
                                    toolId: t.id
                                }))
                            },
                            templateName: f
                        })
                    },
                    disabled: l
                }, e.id), t[45] = i, t[46] = a, t[47] = l, t[48] = S, t[49] = f, t[50] = e) : e = t[50], ae = y.map(e), t[38] = i, t[39] = a, t[40] = l, t[41] = S, t[42] = f, t[43] = y, t[44] = ae
            } else ae = t[44];
            let z;
            t[51] === ae ? z = t[52] : (z = (0, q.jsx)(`div`, {
                ref: w,
                className: We.SetupScrollArea,
                children: (0, q.jsx)(`div`, {
                    className: We.SetupScrollContent,
                    children: ae
                })
            }), t[51] = ae, t[52] = z);
            let se;
            t[53] !== re || t[54] !== ie || t[55] !== z ? (se = (0, q.jsx)(`div`, {
                className: We.SetupScrollRegion,
                "data-has-content-above": re,
                "data-has-content-below": ie,
                children: z
            }), t[53] = re, t[54] = ie, t[55] = z, t[56] = se) : se = t[56];
            let B;
            t[57] !== r || t[58] !== f ? (B = () => {
                r(f)
            }, t[57] = r, t[58] = f, t[59] = B) : B = t[59];
            let ce;
            t[60] === Symbol.for(`react.memo_cache_sentinel`) ? (ce = (0, q.jsx)(u, {
                ...ue.back
            }), t[60] = ce) : ce = t[60];
            let V;
            t[61] !== l || t[62] !== B ? (V = (0, q.jsx)(te, {
                type: `button`,
                color: `secondary`,
                variant: `outline`,
                size: `lg`,
                pill: !0,
                disabled: l,
                onClick: B,
                children: ce
            }), t[61] = l, t[62] = B, t[63] = V) : V = t[63];
            let H;
            t[64] === j ? H = t[65] : (H = () => {
                j()
            }, t[64] = j, t[65] = H);
            let le;
            t[66] === Symbol.for(`react.memo_cache_sentinel`) ? (le = (0, q.jsx)(u, {
                ...J.createAgent
            }), t[66] = le) : le = t[66];
            let U;
            t[67] !== l || t[68] !== H ? (U = (0, q.jsx)(te, {
                type: `button`,
                color: `primary`,
                size: `lg`,
                pill: !0,
                disabled: l,
                loading: l,
                onClick: H,
                children: le
            }), t[67] = l, t[68] = H, t[69] = U) : U = t[69];
            let W;
            t[70] !== V || t[71] !== U ? (W = (0, q.jsxs)(`div`, {
                className: We.SetupFooter,
                children: [V, U]
            }), t[70] = V, t[71] = U, t[72] = W) : W = t[72];
            let de;
            return t[73] !== R || t[74] !== se || t[75] !== W ? (de = (0, q.jsxs)(oe.Body, {
                className: We.SetupBody,
                children: [R, se, W]
            }), t[73] = R, t[74] = se, t[75] = W, t[76] = de) : de = t[76], de
        }, st = e => {
            "use forget";
            let t = (0, et.c)(34),
                {
                    category: n,
                    selectedToolIds: r,
                    onSelectedToolIdsChange: i,
                    onAddCustomMcp: a,
                    onConnectTemplateTool: o,
                    disabled: s
                } = e,
                c = m(),
                l;
            if (t[0] !== n.tools || t[1] !== c || t[2] !== a) {
                bb0: {
                    let e = n.tools.map(Ke),
                        t = e.filter(qe),
                        r = e.filter(Je);
                    if (a == null) {
                        l = [...t, ...r];
                        break bb0
                    }
                    l = [...t, {
                        kind: `custom_mcp`,
                        value: nt,
                        label: c.formatMessage(J.customMcp)
                    }, ...r]
                }
                t[0] = n.tools,
                t[1] = c,
                t[2] = a,
                t[3] = l
            }
            else l = t[3];
            let u = l,
                d = `template-setup-category-${n.id}-label`,
                f;
            t[4] !== n.name || t[5] !== d ? (f = (0, q.jsx)(j.TriggerDecorator, {
                className: `max-w-full decoration-dotted underline-offset-2`,
                children: (0, q.jsx)(`label`, {
                    id: d,
                    className: `text-token-text-primary min-w-0 truncate text-sm font-medium`,
                    children: n.name
                })
            }), t[4] = n.name, t[5] = d, t[6] = f) : f = t[6];
            let p;
            t[7] !== n.description || t[8] !== f ? (p = (0, q.jsx)(j, {
                compact: !0,
                align: `start`,
                content: n.description,
                side: `left`,
                sideOffset: 10,
                children: f
            }), t[7] = n.description, t[8] = f, t[9] = p) : p = t[9];
            let h;
            t[10] === n.description ? h = t[11] : (h = (0, q.jsx)(`div`, {
                className: `sr-only`,
                children: n.description
            }), t[10] = n.description, t[11] = h);
            let g;
            t[12] !== p || t[13] !== h ? (g = (0, q.jsxs)(`div`, {
                className: `min-w-0 sm:w-[160px] sm:shrink-0`,
                children: [p, h]
            }), t[12] = p, t[13] = h, t[14] = g) : g = t[14];
            let _;
            t[15] === c ? _ = t[16] : (_ = c.formatMessage(J.addTool), t[15] = c, t[16] = _);
            let v;
            t[17] !== n.tools || t[18] !== a || t[19] !== o || t[20] !== i || t[21] !== r ? (v = e => {
                let t = e.filter(mt).map(Ye),
                    s = t.map(e => n.tools.find(t => t.id === e) ?? null).filter(e => e != null && !e.selected && !r.includes(e.id)),
                    c = e.some(Xe),
                    l = c ? null : s[0],
                    u = new Set(s.map(Ze));
                c && a?.(), l != null && o(l), i(t.filter(e => !u.has(e)))
            }, t[17] = n.tools, t[18] = a, t[19] = o, t[20] = i, t[21] = r, t[22] = v) : v = t[22];
            let y = u.length > 6,
                b;
            t[23] !== s || t[24] !== d || t[25] !== u || t[26] !== r || t[27] !== _ || t[28] !== v || t[29] !== y ? (b = (0, q.jsx)(`div`, {
                className: `min-w-0 flex-1`,
                children: (0, q.jsx)(_e, {
                    "aria-labelledby": d,
                    value: r,
                    multiple: !0,
                    options: u,
                    placeholder: _,
                    disabled: s,
                    onChange: v,
                    OptionView: pt,
                    TriggerView: ct,
                    searchable: y,
                    clearable: !0,
                    triggerClassName: `[&[data-state='closed']_button]:hidden`,
                    variant: `outline`,
                    size: `lg`,
                    disablePressable: !0,
                    dropdownIconType: `chevronDown`,
                    listMinWidth: `auto`,
                    block: !0
                })
            }), t[23] = s, t[24] = d, t[25] = u, t[26] = r, t[27] = _, t[28] = v, t[29] = y, t[30] = b) : b = t[30];
            let x;
            return t[31] !== g || t[32] !== b ? (x = (0, q.jsxs)(`div`, {
                className: `flex w-full flex-col gap-3 sm:flex-row sm:items-center`,
                children: [g, b]
            }), t[31] = g, t[32] = b, t[33] = x) : x = t[33], x
        }, ct = e => {
            "use forget";
            let t = (0, et.c)(12),
                {
                    values: n
                } = e,
                r;
            t[0] === n ? r = t[1] : (r = n.filter(mt), t[0] = n, t[1] = r);
            let i = r,
                a = i[0] ?? n[0];
            if (i.length === 0) {
                let e;
                return t[2] === a.label ? e = t[3] : (e = (0, q.jsx)(`span`, {
                    className: `min-w-0 truncate`,
                    children: a.label
                }), t[2] = a.label, t[3] = e), e
            }
            let o = i[0],
                s;
            t[4] !== o || t[5] !== i ? (s = i.length === 1 ? (0, q.jsx)(ht, {
                toolName: o.label,
                logoUrl: o.logoUrl
            }) : (0, q.jsx)(lt, {
                values: i
            }), t[4] = o, t[5] = i, t[6] = s) : s = t[6];
            let c;
            t[7] === i ? c = t[8] : (c = (0, q.jsx)(`span`, {
                className: `min-w-0 truncate`,
                children: (0, q.jsx)(dt, {
                    values: i
                })
            }), t[7] = i, t[8] = c);
            let l;
            return t[9] !== s || t[10] !== c ? (l = (0, q.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [s, c]
            }), t[9] = s, t[10] = c, t[11] = l) : l = t[11], l
        }, lt = e => {
            "use forget";
            let t = (0, et.c)(4),
                {
                    values: n
                } = e,
                r;
            t[0] === n ? r = t[1] : (r = n.slice(0, rt).map(Qe), t[0] = n, t[1] = r);
            let i;
            return t[2] === r ? i = t[3] : (i = (0, q.jsx)(re, {
                className: `[--avatar-group-cutout-color:var(--color-surface-elevated)] [--avatar-group-cutout-width:1.5px] [--avatar-group-spacing:-5px]`,
                size: 16,
                children: r
            }), t[2] = r, t[3] = i), i
        }, ut = e => {
            "use forget";
            let t = (0, et.c)(5),
                {
                    toolName: n,
                    logoUrl: r
                } = e,
                i;
            t[0] === r ? i = t[1] : (i = {
                lightLogoUrl: r,
                darkLogoUrl: r
            }, t[0] = r, t[1] = i);
            let a = v(i).data?.url ?? void 0,
                o;
            return t[2] !== a || t[3] !== n ? (o = (0, q.jsx)(R, {
                name: n,
                imageUrl: a
            }), t[2] = a, t[3] = n, t[4] = o) : o = t[4], o
        }, dt = e => {
            "use forget";
            let t = (0, et.c)(3),
                {
                    values: n
                } = e,
                r = m(),
                i;
            return t[0] !== r || t[1] !== n ? (i = ft({
                intl: r,
                toolNames: n.map($e)
            }), t[0] = r, t[1] = n, t[2] = i) : i = t[2], i
        }, ft = ({
            intl: e,
            toolNames: t
        }) => {
            if (t.length === 0) return ``;
            if (t.length === 1) return t[0];
            let n = t.length === 2 ? e.formatMessage(J.twoToolSummary, {
                firstToolName: t[0],
                secondToolName: t[1]
            }) : e.formatMessage(J.multiToolSummary, {
                firstToolName: t[0],
                secondToolName: t[1],
                remainingToolCount: t.length - 2
            });
            return n.length <= it ? n : e.formatMessage(J.compactToolSummary, {
                firstToolName: t[0],
                remainingToolCount: t.length - 1
            })
        }, pt = e => {
            "use forget";
            let t = (0, et.c)(20);
            if (e.kind === `custom_mcp`) {
                let n;
                t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, q.jsx)(ee, {
                    className: `size-4 shrink-0`
                }), t[0] = n) : n = t[0];
                let r;
                return t[1] === e.label ? r = t[2] : (r = (0, q.jsxs)(`span`, {
                    className: `text-token-text-primary flex min-w-0 items-center gap-2`,
                    children: [n, (0, q.jsx)(`span`, {
                        className: `min-w-0 truncate`,
                        children: e.label
                    })]
                }), t[1] = e.label, t[2] = r), r
            }
            if (e.disabledByAdmin) {
                let n;
                t[3] !== e.label || t[4] !== e.logoUrl ? (n = (0, q.jsx)(ht, {
                    toolName: e.label,
                    logoUrl: e.logoUrl
                }), t[3] = e.label, t[4] = e.logoUrl, t[5] = n) : n = t[5];
                let r;
                t[6] === e.label ? r = t[7] : (r = (0, q.jsx)(`span`, {
                    className: `text-token-text-tertiary min-w-0 truncate`,
                    children: e.label
                }), t[6] = e.label, t[7] = r);
                let i;
                t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, q.jsx)(D, {
                    "aria-hidden": !0,
                    className: `text-token-text-tertiary size-3.5 shrink-0`
                }), t[8] = i) : i = t[8];
                let a;
                return t[9] !== n || t[10] !== r ? (a = (0, q.jsxs)(`span`, {
                    className: `flex min-w-0 items-center gap-2`,
                    children: [n, r, i]
                }), t[9] = n, t[10] = r, t[11] = a) : a = t[11], a
            }
            let n;
            t[12] !== e.label || t[13] !== e.logoUrl ? (n = (0, q.jsx)(ht, {
                toolName: e.label,
                logoUrl: e.logoUrl
            }), t[12] = e.label, t[13] = e.logoUrl, t[14] = n) : n = t[14];
            let r;
            t[15] === e.label ? r = t[16] : (r = (0, q.jsx)(`span`, {
                className: `min-w-0 truncate`,
                children: e.label
            }), t[15] = e.label, t[16] = r);
            let i;
            return t[17] !== n || t[18] !== r ? (i = (0, q.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [n, r]
            }), t[17] = n, t[18] = r, t[19] = i) : i = t[19], i
        }, mt = e => e.kind === `tool`, ht = e => {
            "use forget";
            let t = (0, et.c)(6),
                {
                    toolName: n,
                    logoUrl: r
                } = e,
                i;
            t[0] === r ? i = t[1] : (i = {
                lightLogoUrl: r,
                darkLogoUrl: r
            }, t[0] = r, t[1] = i);
            let a = v(i).data?.url ?? null;
            if (a != null) {
                let e;
                return t[2] !== a || t[3] !== n ? (e = (0, q.jsx)(I, {
                    src: a,
                    alt: n,
                    className: `size-4 shrink-0 rounded-sm object-contain`
                }), t[2] = a, t[3] = n, t[4] = e) : e = t[4], e
            }
            let o;
            return t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, q.jsx)(`span`, {
                className: `bg-token-text-tertiary/20 inline-flex size-4 shrink-0 rounded-sm`
            }), t[5] = o) : o = t[5], o
        }, gt = e => Object.fromEntries(e.map(e => [e.id, e.tools.filter(e => e.selected).map(e => e.id)])), _t = e => {
            let t = (e, t) => e.flatMap(e => {
                    let n = e.connector_id?.trim() ?? ``;
                    return !t && !e.is_available || !n ? [] : [
                        [n, {
                            id: n,
                            name: e.display_name,
                            logoUrl: e.logo_url ?? e.logo_url_dark ?? ``,
                            disabledByAdmin: t
                        }]
                    ]
                }),
                n = new Map([...t(e.apps, !1), ...t(e.admin_disabled_apps ?? [], !0)]);
            return (e.app_categories ?? []).map(e => {
                let t = new Set(e.selected_apps),
                    r = [...e.selected_apps, ...e.other_available_apps],
                    i = e.admin_disabled_apps ?? [],
                    a = r.flatMap(e => {
                        let r = n.get(e);
                        return r == null ? [] : [{
                            ...r,
                            selected: !r.disabledByAdmin && t.has(e)
                        }]
                    }),
                    o = i.flatMap(e => {
                        let t = n.get(e);
                        return t == null ? [] : [{
                            ...t,
                            selected: !1
                        }]
                    });
                return {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    tools: [...a, ...o]
                }
            })
        }, vt = ({
            categories: e,
            categoryId: t,
            tool: n
        }) => e.map(e => e.id === t ? e.tools.some(e => e.id === n.id) ? {
            ...e,
            tools: e.tools.map(e => e.id === n.id ? {
                ...e,
                ...n
            } : e)
        } : {
            ...e,
            tools: [...e.tools, n]
        } : e), yt = ({
            categoryId: e,
            selections: t,
            toolId: n
        }) => {
            let r = t[e] ?? [];
            return r.includes(n) ? t : {
                ...t,
                [e]: [...r, n]
            }
        }, bt = e => ({
            id: e.id,
            name: e.name,
            logoUrl: e.logoUrl ?? ``,
            selected: !0
        }), J = l({
            title: {
                id: `Hermes.GptStudio.Chat.TemplateSetupModal.title`,
                defaultMessage: `{templateName} setup`
            },
            description: {
                id: `Hermes.GptStudio.Chat.TemplateSetupModal.description`,
                defaultMessage: `Select the apps you want to give your new {templateName} agent. You can change apps later.`
            },
            closeSetup: {
                id: `Hermes.GptStudio.Chat.TemplateSetupModal.closeSetup`,
                defaultMessage: `Close setup`
            },
            addTool: {
                id: `Hermes.GptStudio.Chat.TemplateSetupModal.addTool`,
                defaultMessage: `Add app`
            },
            multiToolSummary: {
                id: `Hermes.GptStudio.Chat.TemplateSetupModal.multiToolSummary`,
                defaultMessage: `{firstToolName}, {secondToolName}, and {remainingToolCount} more`
            },
            twoToolSummary: {
                id: `Hermes.GptStudio.Chat.TemplateSetupModal.twoToolSummary`,
                defaultMessage: `{firstToolName} and {secondToolName}`
            },
            compactToolSummary: {
                id: `Hermes.GptStudio.Chat.TemplateSetupModal.compactToolSummary`,
                defaultMessage: `{firstToolName} and {remainingToolCount} more`
            },
            customMcp: {
                id: `Hermes.GptStudio.Chat.TemplateSetupModal.customMcp`,
                defaultMessage: `Custom MCP`
            },
            createAgent: {
                id: `Hermes.GptStudio.Chat.TemplateSetupModal.createAgent`,
                defaultMessage: `Create agent`
            }
        })
    })),
    St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Y, Pt = e((() => {
        St = `nyTEkW_DetailActionBar`, Ct = `nyTEkW_DetailActionBarInner`, wt = `nyTEkW_DetailContent`, Tt = `nyTEkW_DetailScrollArea`, Et = `nyTEkW_DetailView`, Dt = `nyTEkW_LoadingState`, Ot = `nyTEkW_ModalContent`, kt = `nyTEkW_Sidebar`, At = `nyTEkW_SidebarInner`, jt = `nyTEkW_SidebarList`, Mt = `nyTEkW_SidebarScrollArea`, Nt = `nyTEkW_SidebarScrollRegion`, Y = {
            DetailActionBar: St,
            DetailActionBarInner: Ct,
            DetailContent: wt,
            DetailScrollArea: Tt,
            DetailView: Et,
            LoadingState: Dt,
            ModalContent: Ot,
            Sidebar: kt,
            SidebarInner: At,
            SidebarList: jt,
            SidebarScrollArea: Mt,
            SidebarScrollRegion: Nt
        }
    }));

function Ft(e) {
    return (0, Q.jsx)(qt, {
        app: e
    }, `${e.key}:${e.connector_id??`na`}`)
}

function It(e) {
    return (0, Q.jsx)(qt, {
        app: e,
        disabledByAdmin: !0
    }, `admin-disabled:${e.key}:${e.connector_id??`na`}`)
}

function Lt(e) {
    return (0, Q.jsxs)(`div`, {
        className: `text-token-text-primary flex items-center gap-3 py-3 text-sm`,
        children: [(0, Q.jsx)(k, {
            className: `text-token-text-secondary size-4 shrink-0`
        }), (0, Q.jsx)(`span`, {
            children: e
        })]
    }, e)
}
var X, Z, Q, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $, $t = e((() => {
    X = p(), H(), he(), fe(), U(), B(), y(), s(), a(), b(), n(), P(), F(), L(), M(), z(), N(), Z = t(f()), d(), Me(), xt(), Pt(), Q = c(), Rt = e => {
        let t = e?.trim() ?? ``;
        return t.length > 0 ? t : null
    }, zt = (e, t) => e.find(e => e.template_name === t) ?? e[0] ?? null, Bt = ({
        initialTemplateName: e,
        isMobile: t,
        isError: n,
        isLoading: r,
        templates: i
    }) => {
        if (n || r && i.length === 0) return `content`;
        if (t) return `list`;
        let a = Rt(e);
        return a == null ? `list` : i.some(e => e.template_name === a) || r && i.length === 0 ? `content` : `list`
    }, Vt = ({
        setupEnabled: e,
        template: t
    }) => e && at(t), Ht = (e, t) => t.length === 0 || [e.template_name, e.display_name, e.short_description, e.long_description, ...e.capabilities].some(e => e.toLowerCase().includes(t)), Ut = e => {
        "use forget";
        let t = (0, X.c)(22),
            {
                initialSetupTemplateName: n,
                initialTemplateName: r,
                isUseTemplatePending: i,
                onClose: a,
                onOpenCustomMcpPicker: o,
                onOpenTemplateToolConnector: s,
                onSetupPendingActionChange: c,
                onUseTemplate: l,
                setupEnabled: u,
                setupPendingAction: d
            } = e,
            f = i !== void 0 && i,
            [p, m] = (0, Z.useState)(null),
            [g, _] = (0, Z.useState)(null),
            v = (0, Z.useRef)(null),
            {
                data: y,
                isLoading: b
            } = h(),
            x;
        t[0] === y ? x = t[1] : (x = y === void 0 ? [] : y, t[0] = y, t[1] = x);
        let S = n != null && p == null && b && x.length === 0,
            C = p?.template_name ?? g ?? n ?? r,
            w = p != null || S,
            T, E;
        t[2] === n ? (T = t[3], E = t[4]) : (T = () => {
            n ?? (v.current = null)
        }, E = [n], t[2] = n, t[3] = T, t[4] = E), (0, Z.useEffect)(T, E);
        let ee = w ? 520 : 860,
            D = w ? !0 : void 0,
            O;
        t[5] !== C || t[6] !== n || t[7] !== S || t[8] !== f || t[9] !== a || t[10] !== o || t[11] !== s || t[12] !== c || t[13] !== l || t[14] !== u || t[15] !== d || t[16] !== p ? (O = S ? (0, Q.jsx)(Xt, {}) : p == null ? (0, Q.jsx)(Wt, {
            initialTemplateName: C,
            initialSetupTemplateName: n,
            isUseTemplatePending: f,
            onOpenSetupTemplate: (e, t) => {
                t !== v.current && (v.current = t, _(e.template_name), m(e))
            },
            onUseTemplate: async e => {
                if (Vt({
                        setupEnabled: u,
                        template: e
                    })) {
                    _(e.template_name), m(e);
                    return
                }
                await l(e)
            },
            setupEnabled: u
        }) : (0, Q.jsx)(ot, {
            template: p,
            onAddCustomMcp: o,
            onConnectTemplateTool: s,
            onBackToTemplates: e => {
                _(e), c(!1), m(null)
            },
            onCloseSetup: a,
            onCreateAgent: async e => {
                await l(p, {
                    selectedToolIdsByCategory: e.selectedToolIdsByCategory
                })
            },
            onPendingActionChange: c,
            pendingAction: d
        }), t[5] = C, t[6] = n, t[7] = S, t[8] = f, t[9] = a, t[10] = o, t[11] = s, t[12] = c, t[13] = l, t[14] = u, t[15] = d, t[16] = p, t[17] = O) : O = t[17];
        let k;
        return t[18] !== ee || t[19] !== D || t[20] !== O ? (k = (0, Q.jsx)(oe.Content, {
            maxWidth: ee,
            className: Y.ModalContent,
            "data-template-setup": D,
            children: O
        }), t[18] = ee, t[19] = D, t[20] = O, t[21] = k) : k = t[21], k
    }, Wt = e => {
        "use forget";
        let t = (0, X.c)(58),
            {
                initialTemplateName: n,
                initialSetupTemplateName: r,
                isUseTemplatePending: a,
                onOpenSetupTemplate: s,
                onUseTemplate: c,
                setupEnabled: l
            } = e,
            d = m(),
            {
                data: f,
                isError: p,
                isLoading: g,
                refetch: _
            } = h(),
            v;
        t[0] === f ? v = t[1] : (v = f === void 0 ? [] : f, t[0] = f, t[1] = v);
        let y = v,
            b = !i(o),
            x;
        t[2] === n ? x = t[3] : (x = Rt(n), t[2] = n, t[3] = x);
        let S = x,
            C;
        t[4] === r ? C = t[5] : (C = Rt(r), t[4] = r, t[5] = C);
        let w = C,
            [T, E] = (0, Z.useState)(S),
            [ee, D] = (0, Z.useState)(!1),
            O = ee || a,
            k;
        t[6] === O ? k = t[7] : (k = {
            onRequestClose: () => O ? `deny` : `allow`
        }, t[6] = O, t[7] = k);
        let {
            close: A
        } = ae(k), j, M;
        t[8] === S ? (j = t[9], M = t[10]) : (j = () => {
            E(S)
        }, M = [S], t[8] = S, t[9] = j, t[10] = M), (0, Z.useEffect)(j, M);
        let te;
        t[11] === y ? te = t[12] : (te = Ae(y), t[11] = y, t[12] = te);
        let N = te,
            P, ne;
        t[13] !== T || t[14] !== N ? (ne = () => {
            if (N.length === 0) return;
            let e = T != null && N.some(e => e.template_name === T);
            T != null && e || E(N[0]?.template_name ?? null)
        }, P = [T, N], t[13] = T, t[14] = N, t[15] = P, t[16] = ne) : (P = t[15], ne = t[16]), (0, Z.useEffect)(ne, P);
        let F;
        t[17] !== T || t[18] !== N ? (F = zt(N, T), t[17] = T, t[18] = N, t[19] = F) : F = t[19];
        let I = F,
            L, R;
        t[20] !== w || t[21] !== s || t[22] !== l || t[23] !== N ? (L = () => {
            if (w == null) return;
            let e = N.find(e => e.template_name === w);
            e != null && Vt({
                setupEnabled: l,
                template: e
            }) && s(e, w)
        }, R = [w, s, l, N], t[20] = w, t[21] = s, t[22] = l, t[23] = N, t[24] = L, t[25] = R) : (L = t[24], R = t[25]), (0, Z.useEffect)(L, R);
        let re;
        t[26] !== p || t[27] !== g || t[28] !== b || t[29] !== S || t[30] !== N ? (re = Bt({
            initialTemplateName: S,
            isMobile: b,
            isError: p,
            isLoading: g,
            templates: N
        }), t[26] = p, t[27] = g, t[28] = b, t[29] = S, t[30] = N, t[31] = re) : re = t[31];
        let ie = re,
            z;
        t[32] === Symbol.for(`react.memo_cache_sentinel`) ? (z = {
            "--split-modal-desktop-height": `500px`
        }, t[32] = z) : z = t[32];
        let se = z,
            B;
        t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, Q.jsx)(oe.Title, {
            className: `sr-only`,
            children: (0, Q.jsx)(u, {
                ...$.templatesTitle
            })
        }), t[33] = B) : B = t[33];
        let ce;
        t[34] === Symbol.for(`react.memo_cache_sentinel`) ? (ce = (0, Q.jsx)(oe.Description, {
            visuallyHidden: !0,
            children: (0, Q.jsx)(u, {
                ...$.templatesDescription
            })
        }), t[34] = ce) : ce = t[34];
        let V;
        t[35] === d ? V = t[36] : (V = d.formatMessage($.closeTemplates), t[35] = d, t[36] = V);
        let H = I ? I.template_name : null,
            le;
        t[37] === Symbol.for(`react.memo_cache_sentinel`) ? (le = e => {
            E(e)
        }, t[37] = le) : le = t[37];
        let U;
        t[38] !== p || t[39] !== g || t[40] !== N || t[41] !== H ? (U = (0, Q.jsx)(me.Sidebar, {
            children: (0, Q.jsx)(Gt, {
                hasLoadError: p,
                isLoading: g,
                selectedTemplateName: H,
                templates: N,
                onSelectTemplate: le
            })
        }), t[38] = p, t[39] = g, t[40] = N, t[41] = H, t[42] = U) : U = t[42];
        let ue;
        t[43] !== O || t[44] !== p || t[45] !== g || t[46] !== c || t[47] !== _ || t[48] !== I || t[49] !== y ? (ue = (0, Q.jsx)(me.View, {
            children: p ? (0, Q.jsx)(Zt, {
                onRetryLoad: () => _()
            }) : g && y.length === 0 ? (0, Q.jsx)(Yt, {}) : I ? (0, Q.jsx)(Kt, {
                template: I,
                isBusy: O,
                onUseTemplate: async e => {
                    D(!0), await Promise.resolve(c(e)).then(() => {
                        D(!1)
                    }, e => {
                        throw D(!1), e
                    })
                }
            }) : (0, Q.jsx)(Qt, {})
        }), t[43] = O, t[44] = p, t[45] = g, t[46] = c, t[47] = _, t[48] = I, t[49] = y, t[50] = ue) : ue = t[50];
        let W;
        return t[51] !== A || t[52] !== ie || t[53] !== O || t[54] !== V || t[55] !== U || t[56] !== ue ? (W = (0, Q.jsxs)(oe.Body, {
            className: `p-0`,
            children: [B, ce, (0, Q.jsxs)(me, {
                style: se,
                defaultPane: ie,
                closeLabel: V,
                pendingAction: O,
                onClose: A,
                children: [U, ue]
            })]
        }), t[51] = A, t[52] = ie, t[53] = O, t[54] = V, t[55] = U, t[56] = ue, t[57] = W) : W = t[57], W
    }, Gt = e => {
        "use forget";
        let t = (0, X.c)(44),
            {
                hasLoadError: n,
                isLoading: r,
                selectedTemplateName: i,
                templates: a,
                onSelectTemplate: o
            } = e,
            s = m(),
            {
                showPane: c
            } = pe(),
            l = (0, Z.useRef)(null),
            [d, f] = (0, Z.useState)(!1),
            [p, h] = (0, Z.useState)(``),
            g;
        t[0] === p ? g = t[1] : (g = p.trim().toLowerCase(), t[0] = p, t[1] = g);
        let _ = g,
            v;
        if (t[2] !== _ || t[3] !== a) {
            let e;
            t[5] === _ ? e = t[6] : (e = e => Ht(e, _), t[5] = _, t[6] = e), v = a.filter(e), t[2] = _, t[3] = a, t[4] = v
        } else v = t[4];
        let y = v,
            b = _.length > 0,
            x;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (x = () => {
            let e = l.current;
            if (e == null) return;
            let t = () => {
                let t = e.scrollHeight - e.clientHeight - e.scrollTop;
                f(t > 1)
            };
            if (t(), e.addEventListener(`scroll`, t, {
                    passive: !0
                }), typeof ResizeObserver > `u`) return () => {
                e.removeEventListener(`scroll`, t)
            };
            let n = new ResizeObserver(() => {
                t()
            });
            n.observe(e);
            let r = e.firstElementChild;
            return r instanceof HTMLElement && n.observe(r), () => {
                e.removeEventListener(`scroll`, t), n.disconnect()
            }
        }, t[7] = x) : x = t[7];
        let S;
        t[8] !== r || t[9] !== y.length ? (S = [r, y.length], t[8] = r, t[9] = y.length, t[10] = S) : S = t[10], (0, Z.useEffect)(x, S);
        let C;
        t[11] === s ? C = t[12] : (C = s.formatMessage($.searchLabel), t[11] = s, t[12] = C);
        let w;
        t[13] === s ? w = t[14] : (w = s.formatMessage(ue.clearSearch), t[13] = s, t[14] = w);
        let T;
        t[15] === s ? T = t[16] : (T = s.formatMessage($.searchPlaceholder), t[15] = s, t[16] = T);
        let E;
        t[17] !== p || t[18] !== C || t[19] !== w || t[20] !== T ? (E = (0, Q.jsx)(me.SidebarSearch, {
            ariaLabel: C,
            clearLabel: w,
            name: `templateSearch`,
            placeholder: T,
            value: p,
            onChange: h
        }), t[17] = p, t[18] = C, t[19] = w, t[20] = T, t[21] = E) : E = t[21];
        let ee = d ? `` : void 0,
            D;
        t[22] !== n || t[23] !== r || t[24] !== b || t[25] !== y || t[26] !== o || t[27] !== i || t[28] !== c || t[29] !== a.length ? (D = n || r && a.length === 0 ? (0, Q.jsx)(`div`, {
            className: `h-full pe-3 pt-3`
        }) : b && y.length === 0 ? (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary px-2 py-3 pe-5 pt-6 text-center text-sm`,
            children: (0, Q.jsx)(u, {
                ...$.noSearchResults
            })
        }) : a.length === 0 ? (0, Q.jsx)(`div`, {
            className: `text-token-text-secondary px-2 py-3 pe-5 pt-6 text-sm`,
            children: (0, Q.jsx)(u, {
                ...$.noTemplates
            })
        }) : (0, Q.jsx)(`div`, {
            className: Y.SidebarList,
            children: y.map(e => {
                let t = je(e);
                return (0, Q.jsx)(me.SidebarItem, {
                    icon: (0, Q.jsx)(se, {
                        color: t.color,
                        name: t.name,
                        size: 16
                    }),
                    selected: i === e.template_name,
                    onClick: () => {
                        ce({
                            actionType: V.TEMPLATE_SELECT,
                            source: le.TEMPLATE_GALLERY,
                            template: {
                                templateId: e.template_name
                            }
                        }), o(e.template_name), c(`content`)
                    },
                    children: e.display_name
                }, e.template_name)
            })
        }), t[22] = n, t[23] = r, t[24] = b, t[25] = y, t[26] = o, t[27] = i, t[28] = c, t[29] = a.length, t[30] = D) : D = t[30];
        let O;
        t[31] !== n || t[32] !== r || t[33] !== b ? (O = !n && !r && b && (0, Q.jsx)(`div`, {
            className: `sr-only`,
            "aria-live": `polite`,
            children: (0, Q.jsx)(u, {
                ...$.searchResultsAvailable
            })
        }), t[31] = n, t[32] = r, t[33] = b, t[34] = O) : O = t[34];
        let k;
        t[35] !== D || t[36] !== O ? (k = (0, Q.jsxs)(`div`, {
            ref: l,
            className: Y.SidebarScrollArea,
            children: [D, O]
        }), t[35] = D, t[36] = O, t[37] = k) : k = t[37];
        let A;
        t[38] !== k || t[39] !== ee ? (A = (0, Q.jsx)(`div`, {
            className: Y.SidebarInner,
            children: (0, Q.jsx)(`div`, {
                className: Y.SidebarScrollRegion,
                "data-has-content-below": ee,
                children: k
            })
        }), t[38] = k, t[39] = ee, t[40] = A) : A = t[40];
        let j;
        return t[41] !== A || t[42] !== E ? (j = (0, Q.jsxs)(`div`, {
            className: Y.Sidebar,
            children: [E, A]
        }), t[41] = A, t[42] = E, t[43] = j) : j = t[43], j
    }, Kt = e => {
        "use forget";
        let t = (0, X.c)(33),
            {
                template: n,
                isBusy: i,
                onUseTemplate: a
            } = e,
            o;
        t[0] === n ? o = t[1] : (o = je(n), t[0] = n, t[1] = o);
        let s = o,
            c;
        t[2] === n.admin_disabled_apps ? c = t[3] : (c = n.admin_disabled_apps ?? [], t[2] = n.admin_disabled_apps, t[3] = c);
        let l = c,
            d = (0, Z.useRef)(null),
            f;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (f = () => {
            d.current?.scrollTo({
                top: 0
            })
        }, t[4] = f) : f = t[4];
        let p;
        t[5] === n.template_name ? p = t[6] : (p = [n.template_name], t[5] = n.template_name, t[6] = p), r(f, p);
        let m;
        t[7] !== s.color || t[8] !== s.name ? (m = (0, Q.jsx)(se, {
            color: s.color,
            name: s.name,
            size: 56
        }), t[7] = s.color, t[8] = s.name, t[9] = m) : m = t[9];
        let h;
        t[10] !== m || t[11] !== n.display_name || t[12] !== n.long_description ? (h = (0, Q.jsx)(ge, {
            description: n.long_description,
            icon: m,
            title: n.display_name
        }), t[10] = m, t[11] = n.display_name, t[12] = n.long_description, t[13] = h) : h = t[13];
        let g;
        t[14] !== l || t[15] !== n.apps ? (g = (n.apps.length > 0 || l.length > 0) && (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [(0, Q.jsx)(`div`, {
                className: `text-token-text-primary text-sm font-medium`,
                children: (0, Q.jsx)(u, {
                    ...$.worksWithLabel
                })
            }), (0, Q.jsxs)(`div`, {
                className: `flex flex-wrap gap-2`,
                children: [n.apps.map(Ft), l.map(It)]
            })]
        }), t[14] = l, t[15] = n.apps, t[16] = g) : g = t[16];
        let _;
        t[17] === n.capabilities ? _ = t[18] : (_ = n.capabilities.length > 0 && (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [(0, Q.jsx)(`div`, {
                className: `text-token-text-primary text-sm font-medium`,
                children: (0, Q.jsx)(u, {
                    ...$.capabilitiesLabel
                })
            }), (0, Q.jsx)(`div`, {
                className: `divide-token-border-light flex flex-col divide-y`,
                children: n.capabilities.map(Lt)
            })]
        }), t[17] = n.capabilities, t[18] = _);
        let v;
        t[19] !== h || t[20] !== g || t[21] !== _ ? (v = (0, Q.jsx)(`div`, {
            ref: d,
            className: Y.DetailScrollArea,
            children: (0, Q.jsxs)(`div`, {
                className: Y.DetailContent,
                children: [h, g, _]
            })
        }), t[19] = h, t[20] = g, t[21] = _, t[22] = v) : v = t[22];
        let y;
        t[23] !== a || t[24] !== n ? (y = () => a(n), t[23] = a, t[24] = n, t[25] = y) : y = t[25];
        let b;
        t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, Q.jsx)(u, {
            ...$.templateCtaLabel
        }), t[26] = b) : b = t[26];
        let x;
        t[27] !== i || t[28] !== y ? (x = (0, Q.jsx)(`div`, {
            className: Y.DetailActionBar,
            children: (0, Q.jsx)(`div`, {
                className: Y.DetailActionBarInner,
                children: (0, Q.jsx)(te, {
                    color: `primary`,
                    size: `lg`,
                    pill: !0,
                    disabled: i,
                    loading: i,
                    onClick: y,
                    children: b
                })
            })
        }), t[27] = i, t[28] = y, t[29] = x) : x = t[29];
        let S;
        return t[30] !== x || t[31] !== v ? (S = (0, Q.jsxs)(`div`, {
            className: Y.DetailView,
            children: [v, x]
        }), t[30] = x, t[31] = v, t[32] = S) : S = t[32], S
    }, qt = e => {
        "use forget";
        let t = (0, X.c)(20),
            {
                app: n,
                disabledByAdmin: r
            } = e;
        if (r !== void 0 && r) {
            let e;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(u, {
                ...$.adminDisabledAppTooltip
            }), t[0] = e) : e = t[0];
            let r;
            t[1] !== n.display_name || t[2] !== n.logo_url || t[3] !== n.logo_url_dark ? (r = (0, Q.jsx)(Jt, {
                appName: n.display_name,
                lightLogoUrl: n.logo_url,
                darkLogoUrl: n.logo_url_dark
            }), t[1] = n.display_name, t[2] = n.logo_url, t[3] = n.logo_url_dark, t[4] = r) : r = t[4];
            let i;
            t[5] === n.display_name ? i = t[6] : (i = (0, Q.jsx)(`span`, {
                children: n.display_name
            }), t[5] = n.display_name, t[6] = i);
            let a;
            t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsx)(D, {
                "aria-hidden": !0,
                className: `text-token-text-tertiary size-3.5 shrink-0`
            }), t[7] = a) : a = t[7];
            let o;
            return t[8] !== r || t[9] !== i ? (o = (0, Q.jsx)(j, {
                content: e,
                side: `top`,
                sideOffset: 8,
                openDelay: 75,
                compact: !0,
                maxWidth: 220,
                children: (0, Q.jsxs)(`span`, {
                    className: `border-token-border-light bg-token-bg-tertiary text-token-text-tertiary inline-flex cursor-default items-center gap-2 rounded-full border px-3 py-1.5 text-sm opacity-70`,
                    children: [r, i, a]
                })
            }), t[8] = r, t[9] = i, t[10] = o) : o = t[10], o
        }
        let i;
        t[11] !== n.display_name || t[12] !== n.logo_url || t[13] !== n.logo_url_dark ? (i = (0, Q.jsx)(Jt, {
            appName: n.display_name,
            lightLogoUrl: n.logo_url,
            darkLogoUrl: n.logo_url_dark
        }), t[11] = n.display_name, t[12] = n.logo_url, t[13] = n.logo_url_dark, t[14] = i) : i = t[14];
        let a;
        t[15] === n.display_name ? a = t[16] : (a = (0, Q.jsx)(`span`, {
            children: n.display_name
        }), t[15] = n.display_name, t[16] = a);
        let o;
        return t[17] !== i || t[18] !== a ? (o = (0, Q.jsxs)(`span`, {
            className: `border-token-border-light bg-token-bg-primary text-token-text-primary inline-flex cursor-default items-center gap-2 rounded-full border px-3 py-1.5 text-sm`,
            children: [i, a]
        }), t[17] = i, t[18] = a, t[19] = o) : o = t[19], o
    }, Jt = e => {
        "use forget";
        let t = (0, X.c)(8),
            {
                appName: n,
                lightLogoUrl: r,
                darkLogoUrl: i
            } = e,
            a;
        t[0] !== i || t[1] !== r ? (a = {
            lightLogoUrl: r,
            darkLogoUrl: i
        }, t[0] = i, t[1] = r, t[2] = a) : a = t[2];
        let o = v(a),
            s = o.data?.url ?? null,
            c = r != null && r.length > 0 || i != null && i.length > 0;
        if (s != null) {
            let e;
            return t[3] !== n || t[4] !== s ? (e = (0, Q.jsx)(I, {
                src: s,
                alt: n,
                className: `size-4 shrink-0 rounded-full object-contain`
            }), t[3] = n, t[4] = s, t[5] = e) : e = t[5], e
        }
        if (!c || o.isPending) {
            let e;
            return t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(`span`, {
                className: `bg-token-text-tertiary/20 inline-flex size-4 shrink-0 rounded-full`
            }), t[6] = e) : e = t[6], e
        }
        let l;
        return t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, Q.jsx)(A, {
            className: `text-token-text-tertiary size-4 shrink-0`
        }), t[7] = l) : l = t[7], l
    }, Yt = () => {
        "use forget";
        let e = (0, X.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(`div`, {
            className: Y.LoadingState,
            children: (0, Q.jsx)(ne, {
                size: 32,
                "aria-hidden": !0
            })
        }), e[0] = t) : t = e[0], t
    }, Xt = () => {
        "use forget";
        let e = (0, X.c)(2),
            t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(oe.Title, {
            className: `sr-only`,
            children: (0, Q.jsx)(u, {
                ...$.templatesTitle
            })
        }), e[0] = t) : t = e[0];
        let n;
        return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsxs)(oe.Body, {
            className: `flex h-[360px] min-h-0 w-full items-center justify-center px-6 py-16`,
            children: [t, (0, Q.jsx)(oe.Description, {
                visuallyHidden: !0,
                children: (0, Q.jsx)(u, {
                    ...$.templatesDescription
                })
            }), (0, Q.jsx)(ne, {
                size: 32,
                "aria-hidden": !0
            })]
        }), e[1] = n) : n = e[1], n
    }, Zt = e => {
        "use forget";
        let t = (0, X.c)(4),
            {
                onRetryLoad: n
            } = e,
            r;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Q.jsx)(`div`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, Q.jsx)(u, {
                ...$.templatesError
            })
        }), t[0] = r) : r = t[0];
        let i;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(u, {
            ...$.retry
        }), t[1] = i) : i = t[1];
        let a;
        return t[2] === n ? a = t[3] : (a = (0, Q.jsxs)(`div`, {
            className: `flex h-full min-h-0 w-full flex-col items-center justify-center gap-3 px-6 text-center`,
            children: [r, (0, Q.jsx)(te, {
                color: `secondary`,
                size: `sm`,
                onClick: n,
                children: i
            })]
        }), t[2] = n, t[3] = a), a
    }, Qt = () => {
        "use forget";
        let e = (0, X.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(`div`, {
            className: `flex h-full min-h-0 w-full items-center justify-center`
        }), e[0] = t) : t = e[0], t
    }, $ = l({
        templatesTitle: {
            id: `Hermes.GptStudio.Chat.TemplatesModal.templatesTitle`,
            defaultMessage: `Templates`
        },
        templatesDescription: {
            id: `Hermes.GptStudio.Chat.TemplatesModal.templatesDescription`,
            defaultMessage: `Browse templates in the sidebar, then review apps, capabilities, and details before using one.`
        },
        closeTemplates: {
            id: `Hermes.GptStudio.Chat.TemplatesModal.closeTemplates`,
            defaultMessage: `Close templates`
        },
        templatesError: {
            id: `Hermes.GptStudio.Chat.TemplatesModal.templatesError`,
            defaultMessage: `Couldn't load templates. Try again.`
        },
        retry: {
            id: `Hermes.GptStudio.Chat.TemplatesModal.retry`,
            defaultMessage: `Retry`
        },
        noTemplates: {
            id: `Hermes.GptStudio.Chat.TemplatesModal.noTemplates`,
            defaultMessage: `No templates are available. Try again.`
        },
        searchLabel: {
            id: `Hermes.GptStudio.Chat.TemplatesModal.searchLabel`,
            defaultMessage: `Search templates`
        },
        searchPlaceholder: {
            id: `Hermes.GptStudio.Chat.TemplatesModal.searchPlaceholder`,
            defaultMessage: `Search templates`
        },
        noSearchResults: {
            id: `Hermes.GptStudio.Chat.TemplatesModal.noSearchResults`,
            defaultMessage: `No templates match your search.`
        },
        searchResultsAvailable: {
            id: `Hermes.GptStudio.Chat.TemplatesModal.searchResultsAvailable`,
            defaultMessage: `Search results updated.`
        },
        worksWithLabel: {
            id: `Hermes.GptStudio.Chat.TemplatesModal.worksWithLabel`,
            defaultMessage: `Works with`
        },
        adminDisabledAppTooltip: {
            id: `Hermes.GptStudio.Chat.TemplatesModal.adminDisabledAppTooltip`,
            defaultMessage: `App is disabled by admin`
        },
        capabilitiesLabel: {
            id: `Hermes.GptStudio.Chat.TemplatesModal.capabilitiesLabel`,
            defaultMessage: `Capabilities`
        },
        templateCtaLabel: {
            id: `Hermes.GptStudio.Chat.TemplatesModal.useTemplate`,
            defaultMessage: `Use template`
        }
    })
}));
export {
    Le as a, we as c, Se as d, be as f, Fe as i, Me as l, $t as n, Ie as o, ye as p, Pe as r, Re as s, Ut as t, xe as u
};
//# sourceMappingURL=1b69cf79-gk3ldej8erf1x3pk.js.map