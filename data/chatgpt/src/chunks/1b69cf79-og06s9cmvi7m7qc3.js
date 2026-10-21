import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    LN as n,
    P5 as r,
    RN as i,
    g8 as a,
    oq as o,
    pq as s
} from "./4813494d-tap9fxyhk4ehe0bs.js";
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
    Dp as h,
    Ep as g,
    ITt as _,
    Op as v,
    RTt as y,
    Tp as b,
    YIt as x,
    iTn as S,
    nLt as C,
    rTn as w
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    os as T,
    ss as E
} from "./8b34dbc2-ojcl97ddvu2212q0.js";
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
    x as F
} from "./707eab0c-fwyop6b3ijt0i6j7.js";
import {
    t as I
} from "./a35abcd6-fl6iafxr1mqknzi0.js";
import {
    n as L,
    t as R
} from "./1aa4cb0b-oafna8jt4rb2nmz2.js";
import {
    i as z,
    n as ne,
    t as re
} from "./ca8e826d-ibnsftakgbzfa4iu.js";
import {
    a as ie,
    n as ae,
    t as B
} from "./18093cad-mxppdvqidi08912d.js";
import {
    n as oe,
    o as V
} from "./6550989e-lgya9wfj1tvxjthj.js";
import {
    a as se,
    o as H,
    t as U,
    x as ce
} from "./4285e798-d12vw91yd8v2awo6.js";
import {
    n as W,
    t as le
} from "./8e88ec39-ly2p52dkrwo6r0lt.js";
import {
    i as G,
    r as ue
} from "./126cbe2b-impnyhf39xot19zj.js";
import {
    n as de,
    r as fe,
    t as pe
} from "./b162dc0f-oeevmtm1z3sve920.js";
import {
    n as me,
    t as he
} from "./62a94fc0-jocxfwzul4gtsyf1.js";
import {
    n as ge,
    t as _e
} from "./2a78025d-bnb94goh7vtfvawz.js";
var ve, ye = e((() => {
        ue(), T(), S(), ve = ({
            connectorId: e,
            queryClient: t,
            authTypeOverride: n,
            redirectAfter: r,
            onResult: i,
            onComplete: a
        }) => {
            E({
                connectorId: e,
                linkCreateProductSku: w.HERMES,
                queryClient: t,
                authTypeOverride: n,
                redirectAfter: r,
                onResult: i,
                onComplete: a,
                invalidateQueries: G
            })
        }
    })),
    be, xe = e((() => {
        be = ({
            defaultPrompt: e,
            templateDisplayName: t,
            templateName: n
        }) => e?.trim() || `Start from the ${t?.trim()||n.split(/[-_]+/).filter(e=>e.length>0).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `)} template. Then help me customize the agent.`
    })),
    K, q, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je = e((() => {
        h(), d(), K = e => ({
            name: e,
            color: v(e) ? b(e) : `blue`
        }), q = l({
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
        }), Se = [{
            template_name: `customer-reply-drafter`,
            display_name: q.customerReplyDrafterDisplayName,
            short_description: q.customerReplyDrafterShortDescription,
            icon: K(`mailman`)
        }, {
            template_name: `data-analysis`,
            display_name: q.dataAnalysisDisplayName,
            short_description: q.dataAnalysisShortDescription,
            icon: K(`stax`)
        }, {
            template_name: `chief-of-staff`,
            display_name: q.chiefOfStaffDisplayName,
            short_description: q.chiefOfStaffShortDescription,
            icon: K(`brief`)
        }, {
            template_name: `sales-support`,
            display_name: q.salesSupportDisplayName,
            short_description: q.salesSupportShortDescription,
            icon: K(`starry`)
        }, {
            template_name: `sql-crafter`,
            display_name: q.sqlCrafterDisplayName,
            short_description: q.sqlCrafterShortDescription,
            icon: K(`digit`)
        }], Ce = e => Se.map(t => ({
            template_name: t.template_name,
            display_name: e.formatMessage(t.display_name),
            short_description: e.formatMessage(t.short_description),
            icon: t.icon
        })), we = new Map(Se.map((e, t) => [e.template_name, t])), Te = {
            "chief-of-staff": K(`brief`),
            "sales-support": K(`starry`),
            "customer-reply-drafter": K(`mailman`),
            "customer-support": K(`yo`),
            "data-analysis": K(`digit`),
            "sql-crafter": K(`digit`),
            "knowledge-search": K(`tome`)
        }, Ee = {
            name: `bloop`,
            color: `blue`
        }, De = (e, t) => t === b(e) || g(e).some(e => e === t), Oe = e => [...e].sort((e, t) => {
            let n = we.get(e.template_name),
                r = we.get(t.template_name);
            return n != null && r != null ? n - r : n == null ? r == null ? e.display_name.localeCompare(t.display_name) : 1 : -1
        }), ke = e => Oe(e).sort((e, t) => e.template_name === `chief-of-staff` ? -1 : +(t.template_name === `chief-of-staff`)), Ae = e => {
            let t = e.icon ?? Te[e.template_name] ?? Ee;
            return v(t.name) ? {
                ...t,
                color: De(t.name, t.color) ? t.color : b(t.name)
            } : t
        }
    })),
    Me, Ne, Pe, Fe, Ie, Le = e((() => {
        Me = `starter_prompt`, Ne = `slack-bot`, Pe = ({
            starterPromptKey: e
        }) => new URLSearchParams({
            [Me]: e
        }), Fe = e => {
            let t = e.get(Me)?.trim();
            return t === `slack-bot` ? t : null
        }, Ie = e => {
            let t = new URLSearchParams(e);
            return t.delete(Me), t
        }
    })),
    Re, ze, Be, Ve, He, Ue, We = e((() => {
        Re = `AS-92G_SetupBody`, ze = `AS-92G_SetupFooter`, Be = `AS-92G_SetupScrollArea`, Ve = `AS-92G_SetupScrollContent`, He = `AS-92G_SetupScrollRegion`, Ue = {
            SetupBody: Re,
            SetupFooter: ze,
            SetupScrollArea: Be,
            SetupScrollContent: Ve,
            SetupScrollRegion: He
        }
    }));

function Ge(e) {
    return {
        kind: `tool`,
        value: e.id,
        label: e.name,
        logoUrl: e.logoUrl,
        disabled: e.disabledByAdmin,
        disabledByAdmin: e.disabledByAdmin
    }
}

function Ke(e) {
    return !e.disabledByAdmin
}

function qe(e) {
    return e.disabledByAdmin
}

function Je(e) {
    return e.value
}

function Ye(e) {
    return e.value === tt
}

function Xe(e) {
    return e.id
}

function Ze(e) {
    return (0, J.jsx)(lt, {
        toolName: e.label,
        logoUrl: e.logoUrl
    }, e.value)
}

function Qe(e) {
    return e.label
}
var $e, et, J, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt = e((() => {
        $e = p(), W(), _(), re(), P(), I(), R(), B(), _e(), N(), et = t(f()), d(), xe(), We(), J = c(), tt = `__custom_mcp__`, nt = 2, rt = 32, it = e => gt(e).length > 0, at = e => {
            "use forget";
            let t = (0, $e.c)(77),
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
            t[0] !== h || t[1] !== p || t[2] !== f ? (g = be({
                defaultPrompt: h,
                templateDisplayName: p,
                templateName: f
            }), t[0] = h, t[1] = p, t[2] = f, t[3] = g) : g = t[3];
            let _ = g,
                v;
            t[4] === n ? v = t[5] : (v = () => gt(n), t[4] = n, t[5] = v);
            let [y, b] = (0, et.useState)(v), x;
            t[6] === y ? x = t[7] : (x = () => ht(y), t[6] = y, t[7] = x);
            let [S, C] = (0, et.useState)(x), w = (0, et.useRef)(null), T;
            t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (T = {
                hasContentAbove: !1,
                hasContentBelow: !1
            }, t[8] = T) : T = t[8];
            let [E, ee] = (0, et.useState)(T), D, k;
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
            }, k = [], t[9] = D, t[10] = k) : (D = t[9], k = t[10]), (0, et.useEffect)(D, k);
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
            t[18] === p ? M = t[19] : (M = (0, J.jsx)(ae.Title, {
                className: `mb-0 min-w-0 flex-1 truncate font-medium`,
                children: (0, J.jsx)(u, {
                    ...bt.title,
                    values: {
                        templateName: p
                    }
                })
            }), t[18] = p, t[19] = M);
            let N;
            t[20] === d ? N = t[21] : (N = d.formatMessage(bt.closeSetup), t[20] = d, t[21] = N);
            let P;
            t[22] !== r || t[23] !== f ? (P = () => {
                r(f)
            }, t[22] = r, t[23] = f, t[24] = P) : P = t[24];
            let F;
            t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, J.jsx)(O, {}), t[25] = F) : F = t[25];
            let I;
            t[26] !== l || t[27] !== P || t[28] !== N ? (I = (0, J.jsx)(te, {
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
                children: F
            }), t[26] = l, t[27] = P, t[28] = N, t[29] = I) : I = t[29];
            let L;
            t[30] !== I || t[31] !== M ? (L = (0, J.jsxs)(`div`, {
                className: `flex items-center justify-between gap-2 pb-3`,
                children: [M, I]
            }), t[30] = I, t[31] = M, t[32] = L) : L = t[32];
            let R;
            t[33] === p ? R = t[34] : (R = (0, J.jsx)(ae.Description, {
                className: `text-token-text-primary text-sm`,
                children: (0, J.jsx)(u, {
                    ...bt.description,
                    values: {
                        templateName: p
                    }
                })
            }), t[33] = p, t[34] = R);
            let z;
            t[35] !== L || t[36] !== R ? (z = (0, J.jsxs)(`div`, {
                className: `px-5 pt-4 pb-5`,
                children: [L, R]
            }), t[35] = L, t[36] = R, t[37] = z) : z = t[37];
            let ne = E.hasContentAbove ? `` : void 0,
                re = E.hasContentBelow ? `` : void 0,
                ie;
            if (t[38] !== i || t[39] !== a || t[40] !== l || t[41] !== S || t[42] !== f || t[43] !== y) {
                let e;
                t[45] !== i || t[46] !== a || t[47] !== l || t[48] !== S || t[49] !== f ? (e = e => (0, J.jsx)(ot, {
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
                            b(n => _t({
                                categories: n,
                                categoryId: e.id,
                                tool: yt(t)
                            })), C(n => vt({
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
                                b(n => _t({
                                    categories: n,
                                    categoryId: e.id,
                                    tool: {
                                        ...t,
                                        selected: !0
                                    }
                                })), C(n => vt({
                                    categoryId: e.id,
                                    selections: n,
                                    toolId: t.id
                                }))
                            },
                            templateName: f
                        })
                    },
                    disabled: l
                }, e.id), t[45] = i, t[46] = a, t[47] = l, t[48] = S, t[49] = f, t[50] = e) : e = t[50], ie = y.map(e), t[38] = i, t[39] = a, t[40] = l, t[41] = S, t[42] = f, t[43] = y, t[44] = ie
            } else ie = t[44];
            let B;
            t[51] === ie ? B = t[52] : (B = (0, J.jsx)(`div`, {
                ref: w,
                className: Ue.SetupScrollArea,
                children: (0, J.jsx)(`div`, {
                    className: Ue.SetupScrollContent,
                    children: ie
                })
            }), t[51] = ie, t[52] = B);
            let oe;
            t[53] !== ne || t[54] !== re || t[55] !== B ? (oe = (0, J.jsx)(`div`, {
                className: Ue.SetupScrollRegion,
                "data-has-content-above": ne,
                "data-has-content-below": re,
                children: B
            }), t[53] = ne, t[54] = re, t[55] = B, t[56] = oe) : oe = t[56];
            let V;
            t[57] !== r || t[58] !== f ? (V = () => {
                r(f)
            }, t[57] = r, t[58] = f, t[59] = V) : V = t[59];
            let se;
            t[60] === Symbol.for(`react.memo_cache_sentinel`) ? (se = (0, J.jsx)(u, {
                ...le.back
            }), t[60] = se) : se = t[60];
            let H;
            t[61] !== l || t[62] !== V ? (H = (0, J.jsx)(te, {
                type: `button`,
                color: `secondary`,
                variant: `outline`,
                size: `lg`,
                pill: !0,
                disabled: l,
                onClick: V,
                children: se
            }), t[61] = l, t[62] = V, t[63] = H) : H = t[63];
            let U;
            t[64] === j ? U = t[65] : (U = () => {
                j()
            }, t[64] = j, t[65] = U);
            let ce;
            t[66] === Symbol.for(`react.memo_cache_sentinel`) ? (ce = (0, J.jsx)(u, {
                ...bt.createAgent
            }), t[66] = ce) : ce = t[66];
            let W;
            t[67] !== l || t[68] !== U ? (W = (0, J.jsx)(te, {
                type: `button`,
                color: `primary`,
                size: `lg`,
                pill: !0,
                disabled: l,
                loading: l,
                onClick: U,
                children: ce
            }), t[67] = l, t[68] = U, t[69] = W) : W = t[69];
            let G;
            t[70] !== H || t[71] !== W ? (G = (0, J.jsxs)(`div`, {
                className: Ue.SetupFooter,
                children: [H, W]
            }), t[70] = H, t[71] = W, t[72] = G) : G = t[72];
            let ue;
            return t[73] !== z || t[74] !== oe || t[75] !== G ? (ue = (0, J.jsxs)(ae.Body, {
                className: Ue.SetupBody,
                children: [z, oe, G]
            }), t[73] = z, t[74] = oe, t[75] = G, t[76] = ue) : ue = t[76], ue
        }, ot = e => {
            "use forget";
            let t = (0, $e.c)(34),
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
                    let e = n.tools.map(Ge),
                        t = e.filter(Ke),
                        r = e.filter(qe);
                    if (a == null) {
                        l = [...t, ...r];
                        break bb0
                    }
                    l = [...t, {
                        kind: `custom_mcp`,
                        value: tt,
                        label: c.formatMessage(bt.customMcp)
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
            t[4] !== n.name || t[5] !== d ? (f = (0, J.jsx)(j.TriggerDecorator, {
                className: `max-w-full decoration-dotted underline-offset-2`,
                children: (0, J.jsx)(`label`, {
                    id: d,
                    className: `text-token-text-primary min-w-0 truncate text-sm font-medium`,
                    children: n.name
                })
            }), t[4] = n.name, t[5] = d, t[6] = f) : f = t[6];
            let p;
            t[7] !== n.description || t[8] !== f ? (p = (0, J.jsx)(j, {
                compact: !0,
                align: `start`,
                content: n.description,
                side: `left`,
                sideOffset: 10,
                children: f
            }), t[7] = n.description, t[8] = f, t[9] = p) : p = t[9];
            let h;
            t[10] === n.description ? h = t[11] : (h = (0, J.jsx)(`div`, {
                className: `sr-only`,
                children: n.description
            }), t[10] = n.description, t[11] = h);
            let g;
            t[12] !== p || t[13] !== h ? (g = (0, J.jsxs)(`div`, {
                className: `min-w-0 sm:w-[160px] sm:shrink-0`,
                children: [p, h]
            }), t[12] = p, t[13] = h, t[14] = g) : g = t[14];
            let _;
            t[15] === c ? _ = t[16] : (_ = c.formatMessage(bt.addTool), t[15] = c, t[16] = _);
            let v;
            t[17] !== n.tools || t[18] !== a || t[19] !== o || t[20] !== i || t[21] !== r ? (v = e => {
                let t = e.filter(pt).map(Je),
                    s = t.map(e => n.tools.find(t => t.id === e) ?? null).filter(e => e != null && !e.selected && !r.includes(e.id)),
                    c = e.some(Ye),
                    l = c ? null : s[0],
                    u = new Set(s.map(Xe));
                c && a?.(), l != null && o(l), i(t.filter(e => !u.has(e)))
            }, t[17] = n.tools, t[18] = a, t[19] = o, t[20] = i, t[21] = r, t[22] = v) : v = t[22];
            let y = u.length > 6,
                b;
            t[23] !== s || t[24] !== d || t[25] !== u || t[26] !== r || t[27] !== _ || t[28] !== v || t[29] !== y ? (b = (0, J.jsx)(`div`, {
                className: `min-w-0 flex-1`,
                children: (0, J.jsx)(ge, {
                    "aria-labelledby": d,
                    value: r,
                    multiple: !0,
                    options: u,
                    placeholder: _,
                    disabled: s,
                    onChange: v,
                    OptionView: ft,
                    TriggerView: st,
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
            return t[31] !== g || t[32] !== b ? (x = (0, J.jsxs)(`div`, {
                className: `flex w-full flex-col gap-3 sm:flex-row sm:items-center`,
                children: [g, b]
            }), t[31] = g, t[32] = b, t[33] = x) : x = t[33], x
        }, st = e => {
            "use forget";
            let t = (0, $e.c)(12),
                {
                    values: n
                } = e,
                r;
            t[0] === n ? r = t[1] : (r = n.filter(pt), t[0] = n, t[1] = r);
            let i = r,
                a = i[0] ?? n[0];
            if (i.length === 0) {
                let e;
                return t[2] === a.label ? e = t[3] : (e = (0, J.jsx)(`span`, {
                    className: `min-w-0 truncate`,
                    children: a.label
                }), t[2] = a.label, t[3] = e), e
            }
            let o = i[0],
                s;
            t[4] !== o || t[5] !== i ? (s = i.length === 1 ? (0, J.jsx)(mt, {
                toolName: o.label,
                logoUrl: o.logoUrl
            }) : (0, J.jsx)(ct, {
                values: i
            }), t[4] = o, t[5] = i, t[6] = s) : s = t[6];
            let c;
            t[7] === i ? c = t[8] : (c = (0, J.jsx)(`span`, {
                className: `min-w-0 truncate`,
                children: (0, J.jsx)(ut, {
                    values: i
                })
            }), t[7] = i, t[8] = c);
            let l;
            return t[9] !== s || t[10] !== c ? (l = (0, J.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [s, c]
            }), t[9] = s, t[10] = c, t[11] = l) : l = t[11], l
        }, ct = e => {
            "use forget";
            let t = (0, $e.c)(4),
                {
                    values: n
                } = e,
                r;
            t[0] === n ? r = t[1] : (r = n.slice(0, nt).map(Ze), t[0] = n, t[1] = r);
            let i;
            return t[2] === r ? i = t[3] : (i = (0, J.jsx)(ne, {
                className: `[--avatar-group-cutout-color:var(--color-surface-elevated)] [--avatar-group-cutout-width:1.5px] [--avatar-group-spacing:-5px]`,
                size: 16,
                children: r
            }), t[2] = r, t[3] = i), i
        }, lt = e => {
            "use forget";
            let t = (0, $e.c)(5),
                {
                    toolName: n,
                    logoUrl: r
                } = e,
                i;
            t[0] === r ? i = t[1] : (i = {
                lightLogoUrl: r,
                darkLogoUrl: r
            }, t[0] = r, t[1] = i);
            let a = y(i).data?.url ?? void 0,
                o;
            return t[2] !== a || t[3] !== n ? (o = (0, J.jsx)(z, {
                name: n,
                imageUrl: a
            }), t[2] = a, t[3] = n, t[4] = o) : o = t[4], o
        }, ut = e => {
            "use forget";
            let t = (0, $e.c)(3),
                {
                    values: n
                } = e,
                r = m(),
                i;
            return t[0] !== r || t[1] !== n ? (i = dt({
                intl: r,
                toolNames: n.map(Qe)
            }), t[0] = r, t[1] = n, t[2] = i) : i = t[2], i
        }, dt = ({
            intl: e,
            toolNames: t
        }) => {
            if (t.length === 0) return ``;
            if (t.length === 1) return t[0];
            let n = t.length === 2 ? e.formatMessage(bt.twoToolSummary, {
                firstToolName: t[0],
                secondToolName: t[1]
            }) : e.formatMessage(bt.multiToolSummary, {
                firstToolName: t[0],
                secondToolName: t[1],
                remainingToolCount: t.length - 2
            });
            return n.length <= rt ? n : e.formatMessage(bt.compactToolSummary, {
                firstToolName: t[0],
                remainingToolCount: t.length - 1
            })
        }, ft = e => {
            "use forget";
            let t = (0, $e.c)(20);
            if (e.kind === `custom_mcp`) {
                let n;
                t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, J.jsx)(ee, {
                    className: `size-4 shrink-0`
                }), t[0] = n) : n = t[0];
                let r;
                return t[1] === e.label ? r = t[2] : (r = (0, J.jsxs)(`span`, {
                    className: `text-token-text-primary flex min-w-0 items-center gap-2`,
                    children: [n, (0, J.jsx)(`span`, {
                        className: `min-w-0 truncate`,
                        children: e.label
                    })]
                }), t[1] = e.label, t[2] = r), r
            }
            if (e.disabledByAdmin) {
                let n;
                t[3] !== e.label || t[4] !== e.logoUrl ? (n = (0, J.jsx)(mt, {
                    toolName: e.label,
                    logoUrl: e.logoUrl
                }), t[3] = e.label, t[4] = e.logoUrl, t[5] = n) : n = t[5];
                let r;
                t[6] === e.label ? r = t[7] : (r = (0, J.jsx)(`span`, {
                    className: `text-token-text-tertiary min-w-0 truncate`,
                    children: e.label
                }), t[6] = e.label, t[7] = r);
                let i;
                t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, J.jsx)(D, {
                    "aria-hidden": !0,
                    className: `text-token-text-tertiary size-3.5 shrink-0`
                }), t[8] = i) : i = t[8];
                let a;
                return t[9] !== n || t[10] !== r ? (a = (0, J.jsxs)(`span`, {
                    className: `flex min-w-0 items-center gap-2`,
                    children: [n, r, i]
                }), t[9] = n, t[10] = r, t[11] = a) : a = t[11], a
            }
            let n;
            t[12] !== e.label || t[13] !== e.logoUrl ? (n = (0, J.jsx)(mt, {
                toolName: e.label,
                logoUrl: e.logoUrl
            }), t[12] = e.label, t[13] = e.logoUrl, t[14] = n) : n = t[14];
            let r;
            t[15] === e.label ? r = t[16] : (r = (0, J.jsx)(`span`, {
                className: `min-w-0 truncate`,
                children: e.label
            }), t[15] = e.label, t[16] = r);
            let i;
            return t[17] !== n || t[18] !== r ? (i = (0, J.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [n, r]
            }), t[17] = n, t[18] = r, t[19] = i) : i = t[19], i
        }, pt = e => e.kind === `tool`, mt = e => {
            "use forget";
            let t = (0, $e.c)(6),
                {
                    toolName: n,
                    logoUrl: r
                } = e,
                i;
            t[0] === r ? i = t[1] : (i = {
                lightLogoUrl: r,
                darkLogoUrl: r
            }, t[0] = r, t[1] = i);
            let a = y(i).data?.url ?? null;
            if (a != null) {
                let e;
                return t[2] !== a || t[3] !== n ? (e = (0, J.jsx)(L, {
                    src: a,
                    alt: n,
                    className: `size-4 shrink-0 rounded-sm object-contain`
                }), t[2] = a, t[3] = n, t[4] = e) : e = t[4], e
            }
            let o;
            return t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, J.jsx)(`span`, {
                className: `bg-token-text-tertiary/20 inline-flex size-4 shrink-0 rounded-sm`
            }), t[5] = o) : o = t[5], o
        }, ht = e => Object.fromEntries(e.map(e => [e.id, e.tools.filter(e => e.selected).map(e => e.id)])), gt = e => {
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
        }, _t = ({
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
        } : e), vt = ({
            categoryId: e,
            selections: t,
            toolId: n
        }) => {
            let r = t[e] ?? [];
            return r.includes(n) ? t : {
                ...t,
                [e]: [...r, n]
            }
        }, yt = e => ({
            id: e.id,
            name: e.name,
            logoUrl: e.logoUrl ?? ``,
            selected: !0
        }), bt = l({
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
    X = p(), U(), me(), de(), W(), V(), x(), a(), o(), _(), n(), P(), I(), R(), M(), B(), N(), Z = t(f()), d(), je(), xt(), Pt(), Q = c(), Rt = e => {
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
    }) => e && it(t), Ht = (e, t) => t.length === 0 || [e.template_name, e.display_name, e.short_description, e.long_description, ...e.capabilities].some(e => e.toLowerCase().includes(t)), Ut = e => {
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
            [h, g] = (0, Z.useState)(null),
            _ = (0, Z.useRef)(null),
            {
                data: v,
                isLoading: y
            } = C(),
            b;
        t[0] === v ? b = t[1] : (b = v === void 0 ? [] : v, t[0] = v, t[1] = b);
        let x = n != null && p == null && y && b.length === 0,
            S = p?.template_name ?? h ?? n ?? r,
            w = p != null || x,
            T, E;
        t[2] === n ? (T = t[3], E = t[4]) : (T = () => {
            n ?? (_.current = null)
        }, E = [n], t[2] = n, t[3] = T, t[4] = E), (0, Z.useEffect)(T, E);
        let ee = w ? 520 : 860,
            D = w ? !0 : void 0,
            O;
        t[5] !== S || t[6] !== n || t[7] !== x || t[8] !== f || t[9] !== a || t[10] !== o || t[11] !== s || t[12] !== c || t[13] !== l || t[14] !== u || t[15] !== d || t[16] !== p ? (O = x ? (0, Q.jsx)(Xt, {}) : p == null ? (0, Q.jsx)(Wt, {
            initialTemplateName: S,
            initialSetupTemplateName: n,
            isUseTemplatePending: f,
            onOpenSetupTemplate: (e, t) => {
                t !== _.current && (_.current = t, g(e.template_name), m(e))
            },
            onUseTemplate: async e => {
                if (Vt({
                        setupEnabled: u,
                        template: e
                    })) {
                    g(e.template_name), m(e);
                    return
                }
                await l(e)
            },
            setupEnabled: u
        }) : (0, Q.jsx)(at, {
            template: p,
            onAddCustomMcp: o,
            onConnectTemplateTool: s,
            onBackToTemplates: e => {
                g(e), c(!1), m(null)
            },
            onCloseSetup: a,
            onCreateAgent: async e => {
                await l(p, {
                    selectedToolIdsByCategory: e.selectedToolIdsByCategory
                })
            },
            onPendingActionChange: c,
            pendingAction: d
        }), t[5] = S, t[6] = n, t[7] = x, t[8] = f, t[9] = a, t[10] = o, t[11] = s, t[12] = c, t[13] = l, t[14] = u, t[15] = d, t[16] = p, t[17] = O) : O = t[17];
        let k;
        return t[18] !== ee || t[19] !== D || t[20] !== O ? (k = (0, Q.jsx)(ae.Content, {
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
                initialSetupTemplateName: i,
                isUseTemplatePending: a,
                onOpenSetupTemplate: o,
                onUseTemplate: c,
                setupEnabled: l
            } = e,
            d = m(),
            {
                data: f,
                isError: p,
                isLoading: h,
                refetch: g
            } = C(),
            _;
        t[0] === f ? _ = t[1] : (_ = f === void 0 ? [] : f, t[0] = f, t[1] = _);
        let v = _,
            y = !r(s),
            b;
        t[2] === n ? b = t[3] : (b = Rt(n), t[2] = n, t[3] = b);
        let x = b,
            S;
        t[4] === i ? S = t[5] : (S = Rt(i), t[4] = i, t[5] = S);
        let w = S,
            [T, E] = (0, Z.useState)(x),
            [ee, D] = (0, Z.useState)(!1),
            O = ee || a,
            k;
        t[6] === O ? k = t[7] : (k = {
            onRequestClose: () => O ? `deny` : `allow`
        }, t[6] = O, t[7] = k);
        let {
            close: A
        } = ie(k), j, M;
        t[8] === x ? (j = t[9], M = t[10]) : (j = () => {
            E(x)
        }, M = [x], t[8] = x, t[9] = j, t[10] = M), (0, Z.useEffect)(j, M);
        let te;
        t[11] === v ? te = t[12] : (te = ke(v), t[11] = v, t[12] = te);
        let N = te,
            P, F;
        t[13] !== T || t[14] !== N ? (F = () => {
            if (N.length === 0) return;
            let e = T != null && N.some(e => e.template_name === T);
            T != null && e || E(N[0]?.template_name ?? null)
        }, P = [T, N], t[13] = T, t[14] = N, t[15] = P, t[16] = F) : (P = t[15], F = t[16]), (0, Z.useEffect)(F, P);
        let I;
        t[17] !== T || t[18] !== N ? (I = zt(N, T), t[17] = T, t[18] = N, t[19] = I) : I = t[19];
        let L = I,
            R, z;
        t[20] !== w || t[21] !== o || t[22] !== l || t[23] !== N ? (R = () => {
            if (w == null) return;
            let e = N.find(e => e.template_name === w);
            e != null && Vt({
                setupEnabled: l,
                template: e
            }) && o(e, w)
        }, z = [w, o, l, N], t[20] = w, t[21] = o, t[22] = l, t[23] = N, t[24] = R, t[25] = z) : (R = t[24], z = t[25]), (0, Z.useEffect)(R, z);
        let ne;
        t[26] !== p || t[27] !== h || t[28] !== y || t[29] !== x || t[30] !== N ? (ne = Bt({
            initialTemplateName: x,
            isMobile: y,
            isError: p,
            isLoading: h,
            templates: N
        }), t[26] = p, t[27] = h, t[28] = y, t[29] = x, t[30] = N, t[31] = ne) : ne = t[31];
        let re = ne,
            B;
        t[32] === Symbol.for(`react.memo_cache_sentinel`) ? (B = {
            "--split-modal-desktop-height": `500px`
        }, t[32] = B) : B = t[32];
        let oe = B,
            V;
        t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (V = (0, Q.jsx)(ae.Title, {
            className: `sr-only`,
            children: (0, Q.jsx)(u, {
                ...$.templatesTitle
            })
        }), t[33] = V) : V = t[33];
        let se;
        t[34] === Symbol.for(`react.memo_cache_sentinel`) ? (se = (0, Q.jsx)(ae.Description, {
            visuallyHidden: !0,
            children: (0, Q.jsx)(u, {
                ...$.templatesDescription
            })
        }), t[34] = se) : se = t[34];
        let H;
        t[35] === d ? H = t[36] : (H = d.formatMessage($.closeTemplates), t[35] = d, t[36] = H);
        let U = L ? L.template_name : null,
            ce;
        t[37] === Symbol.for(`react.memo_cache_sentinel`) ? (ce = e => {
            E(e)
        }, t[37] = ce) : ce = t[37];
        let W;
        t[38] !== p || t[39] !== h || t[40] !== N || t[41] !== U ? (W = (0, Q.jsx)(pe.Sidebar, {
            children: (0, Q.jsx)(Gt, {
                hasLoadError: p,
                isLoading: h,
                selectedTemplateName: U,
                templates: N,
                onSelectTemplate: ce
            })
        }), t[38] = p, t[39] = h, t[40] = N, t[41] = U, t[42] = W) : W = t[42];
        let le;
        t[43] !== O || t[44] !== p || t[45] !== h || t[46] !== c || t[47] !== g || t[48] !== L || t[49] !== v ? (le = (0, Q.jsx)(pe.View, {
            children: p ? (0, Q.jsx)(Zt, {
                onRetryLoad: () => g()
            }) : h && v.length === 0 ? (0, Q.jsx)(Yt, {}) : L ? (0, Q.jsx)(Kt, {
                template: L,
                isBusy: O,
                onUseTemplate: async e => {
                    D(!0), await Promise.resolve(c(e)).then(() => {
                        D(!1)
                    }, e => {
                        throw D(!1), e
                    })
                }
            }) : (0, Q.jsx)(Qt, {})
        }), t[43] = O, t[44] = p, t[45] = h, t[46] = c, t[47] = g, t[48] = L, t[49] = v, t[50] = le) : le = t[50];
        let G;
        return t[51] !== A || t[52] !== re || t[53] !== O || t[54] !== H || t[55] !== W || t[56] !== le ? (G = (0, Q.jsxs)(ae.Body, {
            className: `p-0`,
            children: [V, se, (0, Q.jsxs)(pe, {
                style: oe,
                defaultPane: re,
                closeLabel: H,
                pendingAction: O,
                onClose: A,
                children: [W, le]
            })]
        }), t[51] = A, t[52] = re, t[53] = O, t[54] = H, t[55] = W, t[56] = le, t[57] = G) : G = t[57], G
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
            } = fe(),
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
        t[13] === s ? w = t[14] : (w = s.formatMessage(le.clearSearch), t[13] = s, t[14] = w);
        let T;
        t[15] === s ? T = t[16] : (T = s.formatMessage($.searchPlaceholder), t[15] = s, t[16] = T);
        let E;
        t[17] !== p || t[18] !== C || t[19] !== w || t[20] !== T ? (E = (0, Q.jsx)(pe.SidebarSearch, {
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
                let t = Ae(e);
                return (0, Q.jsx)(pe.SidebarItem, {
                    icon: (0, Q.jsx)(oe, {
                        color: t.color,
                        name: t.name,
                        size: 16
                    }),
                    selected: i === e.template_name,
                    onClick: () => {
                        se({
                            actionType: H.TEMPLATE_SELECT,
                            source: ce.TEMPLATE_GALLERY,
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
                isBusy: r,
                onUseTemplate: a
            } = e,
            o;
        t[0] === n ? o = t[1] : (o = Ae(n), t[0] = n, t[1] = o);
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
        t[5] === n.template_name ? p = t[6] : (p = [n.template_name], t[5] = n.template_name, t[6] = p), i(f, p);
        let m;
        t[7] !== s.color || t[8] !== s.name ? (m = (0, Q.jsx)(oe, {
            color: s.color,
            name: s.name,
            size: 56
        }), t[7] = s.color, t[8] = s.name, t[9] = m) : m = t[9];
        let h;
        t[10] !== m || t[11] !== n.display_name || t[12] !== n.long_description ? (h = (0, Q.jsx)(he, {
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
        t[27] !== r || t[28] !== y ? (x = (0, Q.jsx)(`div`, {
            className: Y.DetailActionBar,
            children: (0, Q.jsx)(`div`, {
                className: Y.DetailActionBarInner,
                children: (0, Q.jsx)(te, {
                    color: `primary`,
                    size: `lg`,
                    pill: !0,
                    disabled: r,
                    loading: r,
                    onClick: y,
                    children: b
                })
            })
        }), t[27] = r, t[28] = y, t[29] = x) : x = t[29];
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
        let o = y(a),
            s = o.data?.url ?? null,
            c = r != null && r.length > 0 || i != null && i.length > 0;
        if (s != null) {
            let e;
            return t[3] !== n || t[4] !== s ? (e = (0, Q.jsx)(L, {
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
            children: (0, Q.jsx)(F, {
                size: 32,
                "aria-hidden": !0
            })
        }), e[0] = t) : t = e[0], t
    }, Xt = () => {
        "use forget";
        let e = (0, X.c)(2),
            t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(ae.Title, {
            className: `sr-only`,
            children: (0, Q.jsx)(u, {
                ...$.templatesTitle
            })
        }), e[0] = t) : t = e[0];
        let n;
        return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsxs)(ae.Body, {
            className: `flex h-[360px] min-h-0 w-full items-center justify-center px-6 py-16`,
            children: [t, (0, Q.jsx)(ae.Description, {
                visuallyHidden: !0,
                children: (0, Q.jsx)(u, {
                    ...$.templatesDescription
                })
            }), (0, Q.jsx)(F, {
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
    Ie as a, Ce as c, xe as d, ye as f, Pe as i, je as l, $t as n, Fe as o, ve as p, Ne as r, Le as s, Ut as t, be as u
};
//# sourceMappingURL=1b69cf79-og06s9cmvi7m7qc3.js.map