import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    Btt as r,
    Dit as i,
    HS as a,
    Htt as o,
    Kc as s,
    VS as c,
    Xc as l,
    Yc as u,
    Zc as d,
    b5 as f,
    cot as p,
    dz as m,
    fz as h,
    h$ as g,
    hU as _,
    kT as v,
    kit as y,
    lot as b,
    m$ as x,
    mz as S,
    pU as C,
    pz as w,
    y5 as T
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as E,
    Bn as D,
    Ln as O,
    Nn as k,
    Pt as A,
    Rn as j,
    Rt as M,
    Ut as ee,
    Vn as N,
    jt as te,
    lt as ne,
    wn as P,
    zn as F
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    NLn as re,
    YUn as ie,
    _Vt as ae,
    cVt as oe,
    gVt as se,
    jLn as ce,
    qUn as le,
    sVt as ue
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Jc as de,
    Yc as fe,
    bb as pe,
    lf as me,
    uf as he,
    xb as ge
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    r as _e,
    t as ve
} from "./948fe603-jmn3j8ixfx3i0uqo.js";
import {
    n as I,
    t as L
} from "./673c0d9b-mgw9cf750vpkh02r.js";
import {
    i as ye,
    o as be
} from "./cf64444f-jch0myr3a8q4imcr.js";
import {
    i as xe,
    n as Se,
    r as Ce,
    t as we
} from "./66c1b32b-hrv53suug6uoj2u9.js";
import {
    a as Te,
    n as Ee,
    r as De,
    t as Oe
} from "./a003b3a1-ngcl37mizue99inb.js";
import {
    r as ke,
    t as Ae
} from "./7c213d4e-fjkz0iv3x96v1dp7.js";
import {
    n as je,
    t as Me
} from "./18d4c67e-lsdmd01ty3o43qow.js";
import {
    n as Ne,
    t as Pe
} from "./96098dcc-nrgla4t1v4ql97vx.js";
import {
    n as R,
    t as z
} from "./45dc6298-oy58y4qax8jw299y.js";
import {
    a as B,
    l as V,
    s as Fe
} from "./5b59f3e4-f9v1k69a0tdaqzc0.js";
import {
    _ as H,
    d as Ie,
    g as Le,
    h as Re,
    l as U,
    m as ze,
    r as Be,
    t as Ve,
    u as He
} from "./abaf64f2-lfed7hxnzcgkopce.js";
import {
    s as Ue,
    t as We
} from "./4e7cf3cf-bytq9jsazycjc5xj.js";
import {
    a as Ge,
    d as Ke,
    h as qe,
    p as Je,
    s as Ye
} from "./6fd89734-me0mlo15lw6zwz6w.js";
import {
    n as Xe,
    t as Ze
} from "./d8ff9f68-cug2a8v0cvbaskq3.js";

function Qe(e) {
    "use forget";
    let t = (0, rt.c)(129),
        {
            finding: n
        } = e,
        r = F(),
        i = n.commit_analysis,
        a = i.attack_path_analysis;
    if (!a) return null;
    let {
        adjustment_decider: o,
        matrix_severity: s,
        policy_adjusted_criticality: c,
        adjusted_criticality_final: l,
        adjustment_reason: u,
        likelihood: d,
        impact: f,
        assumptions: p,
        attack_path: m,
        evidence: h,
        narrative: g,
        controls: _,
        blindspots: v,
        identity: y,
        facts: b
    } = a, x = l || i.attack_path_final_criticality || a.severity || a.original_severity || `unknown`, S = o || `—`, C = s || `—`, w = c || `—`, E = f && (f.level || f.why) ? `${f.level??`unknown`}${f.why?` — ${f.why}`:``}` : `—`, D = d && (d.level || d.why) ? `${d.level??`unknown`}${d.why?` — ${d.why}`:``}` : `—`, O = !!m?.entry || !!m?.pivot || !!m?.impact || !!m?.ascii, k;
    t[0] === p ? k = t[1] : (k = p ?? [], t[0] = p, t[1] = k);
    let A;
    t[2] === b?.precondition?.requires ? A = t[3] : (A = b?.precondition?.requires ?? [], t[2] = b?.precondition?.requires, t[3] = A);
    let j;
    t[4] !== k || t[5] !== A ? (j = [...k, ...A], t[4] = k, t[5] = A, t[6] = j) : j = t[6];
    let M = j,
        ee = h && h.length > 0,
        N = _ && _.length > 0,
        te = v && v.length > 0,
        ne;
    t[7] === g ? ne = t[8] : (ne = g && g.trim().length > 0, t[7] = g, t[8] = ne);
    let P = !!ne,
        ae = b?.category ?? `—`,
        oe = b?.vector?.network_scope ?? `unknown`,
        se = b?.scope?.auth ?? `unknown`,
        ce = b?.precondition?.achievability ?? `unknown`,
        le = b?.input?.attacker_controlled ?? `unknown`,
        ue = b?.evidence?.poc ?? `unknown`,
        de = b?.target?.reach ?? `unknown`,
        fe = b?.cross_boundary?.description ?? ``,
        pe = b?.cross_boundary?.verified === !0 ? `verified` : b?.cross_boundary?.verified === !1 ? `unverified` : `unknown`,
        me;
    t[9] === r ? me = t[10] : (me = r.formatMessage({
        id: `aardvark.attackPath.title`,
        defaultMessage: `Attack-path analysis`
    }), t[9] = r, t[10] = me);
    let he;
    t[11] === r ? he = t[12] : (he = r.formatMessage({
        id: `aardvark.attackPath.policyDecision`,
        defaultMessage: `Policy decision`
    }), t[11] = r, t[12] = he);
    let ge;
    t[13] === he ? ge = t[14] : (ge = (0, G.jsx)(`h3`, {
        className: `text-token-text-secondary mb-3 text-xs font-semibold tracking-wide uppercase`,
        children: he
    }), t[13] = he, t[14] = ge);
    let _e;
    t[15] === r ? _e = t[16] : (_e = r.formatMessage({
        id: `aardvark.attackPath.decider`,
        defaultMessage: `Decider`
    }), t[15] = r, t[16] = _e);
    let ve;
    t[17] !== S || t[18] !== _e ? (ve = (0, G.jsx)(W, {
        label: _e,
        value: S
    }), t[17] = S, t[18] = _e, t[19] = ve) : ve = t[19];
    let I;
    t[20] === r ? I = t[21] : (I = r.formatMessage({
        id: `aardvark.attackPath.matrixSeverity`,
        defaultMessage: `Matrix severity`
    }), t[20] = r, t[21] = I);
    let L;
    t[22] !== C || t[23] !== I ? (L = (0, G.jsx)(W, {
        label: I,
        value: C
    }), t[22] = C, t[23] = I, t[24] = L) : L = t[24];
    let ye;
    t[25] === r ? ye = t[26] : (ye = r.formatMessage({
        id: `aardvark.attackPath.policyAdjusted`,
        defaultMessage: `Policy adjusted`
    }), t[25] = r, t[26] = ye);
    let be;
    t[27] !== w || t[28] !== ye ? (be = (0, G.jsx)(W, {
        label: ye,
        value: w
    }), t[27] = w, t[28] = ye, t[29] = be) : be = t[29];
    let xe;
    t[30] === r ? xe = t[31] : (xe = r.formatMessage({
        id: `aardvark.attackPath.finalVerdict`,
        defaultMessage: `Final verdict`
    }), t[30] = r, t[31] = xe);
    let Se;
    t[32] !== x || t[33] !== xe ? (Se = (0, G.jsx)(W, {
        label: xe,
        value: x
    }), t[32] = x, t[33] = xe, t[34] = Se) : Se = t[34];
    let Ce;
    t[35] !== L || t[36] !== be || t[37] !== Se || t[38] !== ve ? (Ce = (0, G.jsxs)(`div`, {
        className: `grid grid-cols-1 gap-4 md:grid-cols-4`,
        children: [ve, L, be, Se]
    }), t[35] = L, t[36] = be, t[37] = Se, t[38] = ve, t[39] = Ce) : Ce = t[39];
    let we;
    t[40] !== u || t[41] !== r ? (we = u && (0, G.jsx)(`p`, {
        className: `text-token-text-secondary mt-3 text-xs md:text-sm`,
        children: (0, G.jsx)(`span`, {
            className: `font-semibold`,
            children: r.formatMessage({
                id: `aardvark.attackPath.adjustmentRationale`,
                defaultMessage: `Adjustment rationale: {rationale}`
            }, {
                rationale: u
            })
        })
    }), t[40] = u, t[41] = r, t[42] = we) : we = t[42];
    let Te;
    t[43] !== Ce || t[44] !== we || t[45] !== ge ? (Te = (0, G.jsxs)(`div`, {
        children: [ge, Ce, we]
    }), t[43] = Ce, t[44] = we, t[45] = ge, t[46] = Te) : Te = t[46];
    let Ee;
    t[47] === r ? Ee = t[48] : (Ee = r.formatMessage({
        id: `aardvark.attackPath.decisionReasoning`,
        defaultMessage: `Decision reasoning`
    }), t[47] = r, t[48] = Ee);
    let De;
    t[49] === Ee ? De = t[50] : (De = (0, G.jsx)(`h3`, {
        className: `text-token-text-secondary mb-2 text-xs font-semibold tracking-wide uppercase`,
        children: Ee
    }), t[49] = Ee, t[50] = De);
    let Oe;
    t[51] === r ? Oe = t[52] : (Oe = r.formatMessage({
        id: `aardvark.attackPath.decisionReasoning.finalVerdict`,
        defaultMessage: `Final verdict`
    }), t[51] = r, t[52] = Oe);
    let ke = x === `—` ? `—` : `${x}${S&&S!==`—`?` (decider: ${S})`:``}`,
        Ae;
    t[53] !== Oe || t[54] !== ke ? (Ae = (0, G.jsx)(W, {
        label: Oe,
        value: ke
    }), t[53] = Oe, t[54] = ke, t[55] = Ae) : Ae = t[55];
    let je;
    t[56] === r ? je = t[57] : (je = r.formatMessage({
        id: `aardvark.attackPath.impact`,
        defaultMessage: `Impact`
    }), t[56] = r, t[57] = je);
    let Me;
    t[58] !== E || t[59] !== je ? (Me = (0, G.jsx)(W, {
        label: je,
        value: E
    }), t[58] = E, t[59] = je, t[60] = Me) : Me = t[60];
    let Ne;
    t[61] === r ? Ne = t[62] : (Ne = r.formatMessage({
        id: `aardvark.attackPath.likelihood`,
        defaultMessage: `Likelihood`
    }), t[61] = r, t[62] = Ne);
    let Pe;
    t[63] !== D || t[64] !== Ne ? (Pe = (0, G.jsx)(W, {
        label: Ne,
        value: D
    }), t[63] = D, t[64] = Ne, t[65] = Pe) : Pe = t[65];
    let R;
    t[66] !== Ae || t[67] !== Me || t[68] !== Pe ? (R = (0, G.jsxs)(`div`, {
        className: `grid grid-cols-1 gap-3 md:grid-cols-2`,
        children: [Ae, Me, Pe]
    }), t[66] = Ae, t[67] = Me, t[68] = Pe, t[69] = R) : R = t[69];
    let z;
    t[70] !== M || t[71] !== r ? (z = M.length > 0 && (0, G.jsxs)(`div`, {
        className: `mt-3`,
        children: [(0, G.jsx)(`div`, {
            className: `text-token-text-tertiary mb-1 text-xs font-semibold tracking-wide uppercase`,
            children: r.formatMessage({
                id: `aardvark.attackPath.keyAssumptions`,
                defaultMessage: `Key assumptions`
            })
        }), (0, G.jsx)(`ul`, {
            className: `list-disc space-y-1 ps-5`,
            children: M.map(nt)
        })]
    }), t[70] = M, t[71] = r, t[72] = z) : z = t[72];
    let B;
    t[73] !== De || t[74] !== R || t[75] !== z ? (B = (0, G.jsxs)(`div`, {
        children: [De, R, z]
    }), t[73] = De, t[74] = R, t[75] = z, t[76] = B) : B = t[76];
    let V;
    t[77] !== m || t[78] !== O || t[79] !== r ? (V = O && (0, G.jsxs)(`div`, {
        children: [(0, G.jsx)(`h3`, {
            className: `text-token-text-secondary mb-2 text-xs font-semibold tracking-wide uppercase`,
            children: r.formatMessage({
                id: `aardvark.attackPath.attackPath`,
                defaultMessage: `Attack path`
            })
        }), (0, G.jsxs)(`div`, {
            className: `space-y-2`,
            children: [m?.entry && (0, G.jsx)(W, {
                label: r.formatMessage({
                    id: `aardvark.attackPath.entry`,
                    defaultMessage: `Entry`
                }),
                value: m.entry
            }), m?.pivot && (0, G.jsx)(W, {
                label: r.formatMessage({
                    id: `aardvark.attackPath.pivot`,
                    defaultMessage: `Pivot`
                }),
                value: m.pivot
            }), m?.impact && (0, G.jsx)(W, {
                label: r.formatMessage({
                    id: `aardvark.attackPath.impactNode`,
                    defaultMessage: `Impact`
                }),
                value: m.impact
            }), m?.ascii && m.ascii.trim().length > 0 && (0, G.jsxs)(`div`, {
                className: `mt-3`,
                children: [(0, G.jsx)(`div`, {
                    className: `text-token-text-tertiary mb-1 text-xs font-semibold tracking-wide uppercase`,
                    children: r.formatMessage({
                        id: `aardvark.attackPath.diagram`,
                        defaultMessage: `Diagram`
                    })
                }), (0, G.jsx)(`pre`, {
                    className: `bg-token-main-surface-primary/40 text-token-text-secondary rounded-md p-3 font-mono text-xs whitespace-pre-wrap`,
                    children: m.ascii
                })]
            })]
        })]
    }), t[77] = m, t[78] = O, t[79] = r, t[80] = V) : V = t[80];
    let Fe;
    t[81] !== M || t[82] !== r ? (Fe = M.length > 0 && (0, G.jsxs)(`div`, {
        children: [(0, G.jsx)(`h3`, {
            className: `text-token-text-secondary mb-2 text-xs font-semibold tracking-wide uppercase`,
            children: r.formatMessage({
                id: `aardvark.attackPath.assumptions`,
                defaultMessage: `Assumptions`
            })
        }), (0, G.jsx)(`ul`, {
            className: `list-disc space-y-1 ps-5`,
            children: M.map(tt)
        })]
    }), t[81] = M, t[82] = r, t[83] = Fe) : Fe = t[83];
    let H;
    t[84] !== h || t[85] !== ee || t[86] !== r ? (H = ee && (0, G.jsxs)(`div`, {
        children: [(0, G.jsx)(`h3`, {
            className: `text-token-text-secondary mb-2 text-xs font-semibold tracking-wide uppercase`,
            children: r.formatMessage({
                id: `aardvark.attackPath.evidence`,
                defaultMessage: `Evidence`
            })
        }), (0, G.jsx)(`ul`, {
            className: `space-y-2`,
            children: h.map((e, t) => (0, G.jsxs)(`li`, {
                className: `bg-token-main-surface-primary/40 rounded-md p-2`,
                children: [(0, G.jsx)(`div`, {
                    className: `text-token-text-tertiary font-mono text-xs break-all`,
                    children: r.formatMessage({
                        id: `aardvark.attackPath.evidence.location`,
                        defaultMessage: `{file}:{start}-{end}`
                    }, {
                        file: e.file,
                        start: e.line_start,
                        end: e.line_end
                    })
                }), (0, G.jsx)(`div`, {
                    className: `text-token-text-secondary text-sm`,
                    children: e.why
                })]
            }, `${e.file}:${e.line_start}-${e.line_end}-${t}`))
        })]
    }), t[84] = h, t[85] = ee, t[86] = r, t[87] = H) : H = t[87];
    let Ie;
    t[88] !== P || t[89] !== r || t[90] !== g ? (Ie = P && (0, G.jsxs)(`div`, {
        children: [(0, G.jsx)(`h3`, {
            className: `text-token-text-secondary mb-2 text-xs font-semibold tracking-wide uppercase`,
            children: r.formatMessage({
                id: `aardvark.attackPath.narrative`,
                defaultMessage: `Narrative`
            })
        }), (0, G.jsx)(`div`, {
            className: T(`prose prose-sm text-token-text-secondary dark:prose-invert max-w-none text-sm`, `prose-p:my-1 prose-ul:my-1 prose-ol:my-1`),
            children: (0, G.jsx)(ie, {
                remarkPlugins: [re],
                children: g
            })
        })]
    }), t[88] = P, t[89] = r, t[90] = g, t[91] = Ie) : Ie = t[91];
    let Re;
    t[92] !== _ || t[93] !== N || t[94] !== r ? (Re = N && (0, G.jsxs)(`div`, {
        children: [(0, G.jsx)(`h3`, {
            className: `text-token-text-secondary mb-2 text-xs font-semibold tracking-wide uppercase`,
            children: r.formatMessage({
                id: `aardvark.attackPath.controls`,
                defaultMessage: `Controls`
            })
        }), (0, G.jsx)(`ul`, {
            className: `flex flex-wrap gap-2`,
            children: _.map(et)
        })]
    }), t[92] = _, t[93] = N, t[94] = r, t[95] = Re) : Re = t[95];
    let U;
    t[96] !== v || t[97] !== te || t[98] !== r ? (U = te && (0, G.jsxs)(`div`, {
        children: [(0, G.jsx)(`h3`, {
            className: `text-token-text-secondary mb-2 text-xs font-semibold tracking-wide uppercase`,
            children: r.formatMessage({
                id: `aardvark.attackPath.blindspots`,
                defaultMessage: `Residual risks / blind spots`
            })
        }), (0, G.jsx)(`ul`, {
            className: `list-disc space-y-1 ps-5`,
            children: v.map($e)
        })]
    }), t[96] = v, t[97] = te, t[98] = r, t[99] = U) : U = t[99];
    let ze;
    t[100] !== y || t[101] !== r ? (ze = (y?.service_account || y?.managed_identity || y?.privileges && y.privileges.length > 0) && (0, G.jsxs)(`div`, {
        children: [(0, G.jsx)(`h3`, {
            className: `text-token-text-secondary mb-2 text-xs font-semibold tracking-wide uppercase`,
            children: r.formatMessage({
                id: `aardvark.attackPath.identity`,
                defaultMessage: `Identity`
            })
        }), (0, G.jsxs)(`div`, {
            className: `grid grid-cols-1 gap-3 md:grid-cols-3`,
            children: [(0, G.jsx)(W, {
                label: r.formatMessage({
                    id: `aardvark.attackPath.identity.serviceAccount`,
                    defaultMessage: `Service account`
                }),
                value: y?.service_account || `—`
            }), (0, G.jsx)(W, {
                label: r.formatMessage({
                    id: `aardvark.attackPath.identity.managedIdentity`,
                    defaultMessage: `Managed identity`
                }),
                value: y?.managed_identity || `—`
            }), (0, G.jsx)(W, {
                label: r.formatMessage({
                    id: `aardvark.attackPath.identity.privileges`,
                    defaultMessage: `Privileges`
                }),
                value: y?.privileges && y.privileges.length > 0 ? y.privileges.join(`, `) : `—`
            })]
        })]
    }), t[100] = y, t[101] = r, t[102] = ze) : ze = t[102];
    let Be;
    t[103] !== b || t[104] !== ae || t[105] !== fe || t[106] !== pe || t[107] !== ue || t[108] !== le || t[109] !== ce || t[110] !== se || t[111] !== de || t[112] !== oe || t[113] !== r ? (Be = b && (0, G.jsxs)(`div`, {
        children: [(0, G.jsx)(`h3`, {
            className: `text-token-text-secondary mb-2 text-xs font-semibold tracking-wide uppercase`,
            children: r.formatMessage({
                id: `aardvark.attackPath.facts`,
                defaultMessage: `Facts (context / rules)`
            })
        }), (0, G.jsxs)(`div`, {
            className: `grid grid-cols-1 gap-3 md:grid-cols-3`,
            children: [(0, G.jsx)(W, {
                label: r.formatMessage({
                    id: `aardvark.attackPath.facts.category`,
                    defaultMessage: `Category`
                }),
                value: ae
            }), (0, G.jsx)(W, {
                label: r.formatMessage({
                    id: `aardvark.attackPath.facts.vector`,
                    defaultMessage: `Vector`
                }),
                value: oe
            }), (0, G.jsx)(W, {
                label: r.formatMessage({
                    id: `aardvark.attackPath.facts.scope`,
                    defaultMessage: `Scope`
                }),
                value: se
            }), (0, G.jsx)(W, {
                label: r.formatMessage({
                    id: `aardvark.attackPath.facts.precondition`,
                    defaultMessage: `Precondition achievability`
                }),
                value: ce
            }), (0, G.jsx)(W, {
                label: r.formatMessage({
                    id: `aardvark.attackPath.facts.input`,
                    defaultMessage: `Attacker control`
                }),
                value: le
            }), (0, G.jsx)(W, {
                label: r.formatMessage({
                    id: `aardvark.attackPath.facts.evidenceType`,
                    defaultMessage: `Evidence type`
                }),
                value: ue
            }), (0, G.jsx)(W, {
                label: r.formatMessage({
                    id: `aardvark.attackPath.facts.targetReach`,
                    defaultMessage: `Target reach`
                }),
                value: de
            }), (0, G.jsx)(W, {
                label: r.formatMessage({
                    id: `aardvark.attackPath.facts.crossBoundaryVerified`,
                    defaultMessage: `Cross-boundary`
                }),
                value: pe
            })]
        }), fe && (0, G.jsxs)(`div`, {
            className: `text-token-text-secondary mt-2 text-sm`,
            children: [(0, G.jsx)(`span`, {
                className: `text-token-text-tertiary text-xs font-semibold tracking-wide uppercase`,
                children: r.formatMessage({
                    id: `aardvark.attackPath.facts.crossBoundaryDescription`,
                    defaultMessage: `Cross-boundary path:`
                })
            }), (0, G.jsx)(`div`, {
                children: r.formatMessage({
                    id: `aardvark.attackPath.facts.crossBoundaryDescription.body`,
                    defaultMessage: `{description}`
                }, {
                    description: fe
                })
            })]
        })]
    }), t[103] = b, t[104] = ae, t[105] = fe, t[106] = pe, t[107] = ue, t[108] = le, t[109] = ce, t[110] = se, t[111] = de, t[112] = oe, t[113] = r, t[114] = Be) : Be = t[114];
    let Ve;
    t[115] !== Te || t[116] !== B || t[117] !== V || t[118] !== Fe || t[119] !== H || t[120] !== Ie || t[121] !== Re || t[122] !== U || t[123] !== ze || t[124] !== Be ? (Ve = (0, G.jsxs)(`div`, {
        className: `flex flex-col gap-6 text-sm leading-6`,
        children: [Te, B, V, Fe, H, Ie, Re, U, ze, Be]
    }), t[115] = Te, t[116] = B, t[117] = V, t[118] = Fe, t[119] = H, t[120] = Ie, t[121] = Re, t[122] = U, t[123] = ze, t[124] = Be, t[125] = Ve) : Ve = t[125];
    let He;
    return t[126] !== Ve || t[127] !== me ? (He = (0, G.jsx)(Le, {
        title: me,
        children: Ve
    }), t[126] = Ve, t[127] = me, t[128] = He) : He = t[128], He
}

function $e(e, t) {
    return (0, G.jsx)(`li`, {
        className: `text-token-text-secondary`,
        children: e
    }, t)
}

function et(e, t) {
    return (0, G.jsx)(`li`, {
        className: `bg-token-main-surface-primary/60 text-token-text-secondary rounded-full px-3 py-1 text-xs`,
        children: e
    }, `${e}-${t}`)
}

function tt(e, t) {
    return (0, G.jsx)(`li`, {
        className: `text-token-text-secondary`,
        children: e
    }, t)
}

function nt(e, t) {
    return (0, G.jsx)(`li`, {
        className: `text-token-text-secondary`,
        children: e
    }, t)
}

function W({
    label: e,
    value: t
}) {
    let n = F().formatMessage({
        id: `aardvark.attackPath.placeholder`,
        defaultMessage: `—`
    });
    return (0, G.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [(0, G.jsx)(`div`, {
            className: `text-token-text-tertiary text-xs font-semibold tracking-wide uppercase`,
            children: e
        }), (0, G.jsx)(`div`, {
            className: `text-token-text-primary text-sm`,
            children: t ?? n
        })]
    })
}
var rt, G, it = e((() => {
    rt = P(), H(), f(), N(), j(), le(), ce(), G = D()
}));

function at(e) {
    "use forget";
    let t = (0, ot.c)(9),
        {
            task: n,
            mode: r
        } = e,
        i = F(),
        a;
    t[0] !== r || t[1] !== n ? (a = r == `generation` ? lt(n) : ut(n), t[0] = r, t[1] = n, t[2] = a) : a = t[2];
    let o = a,
        s = ct[o],
        c;
    t[3] !== i || t[4] !== o ? (c = i.formatMessage(Fe[o]), t[3] = i, t[4] = o, t[5] = c) : c = t[5];
    let l = c,
        u;
    return t[6] !== l || t[7] !== s ? (u = (0, st.jsx)(ze, {
        variant: s,
        children: l
    }), t[6] = l, t[7] = s, t[8] = u) : u = t[8], u
}
var ot, st, ct, lt, ut, dt = e((() => {
    ot = P(), Re(), V(), j(), st = D(), ct = {
        pending: `muted`,
        running: `warning`,
        failed: `danger`,
        success: `success`,
        unknown: `muted`
    }, lt = e => e.status == `created` ? `pending` : e.status == `patch_generation_running` ? `running` : e.status == `patch_generation_failed` ? `failed` : e.patch_generation_success ? `success` : `unknown`, ut = e => e.status == `created` ? `pending` : e.status == `awaiting_validation` ? `running` : e.status == `failed_validation` ? `failed` : e.status == `validated` ? `success` : `unknown`
}));

function ft(e) {
    "use forget";
    let t = (0, _t.c)(34),
        {
            latestTask: n,
            turn: r,
            formatStepTime: i
        } = e,
        a = n?.patch_generation_submitted_at,
        o = r?.latest_event?.created ?? null,
        s;
    if (t[0] !== r) {
        let e = oe(r && Array.isArray(r.output_items) ? se(x(r, `output_items`, []), gt) : [], mt);
        s = r ? {
            ...r,
            output_items: [...e]
        } : null, t[0] = r, t[1] = s
    } else s = t[1];
    let c = s,
        l;
    t[2] !== i || t[3] !== a ? (l = a ? i(a) : null, t[2] = i, t[3] = a, t[4] = l) : l = t[4];
    let u = l,
        d;
    t[5] !== i || t[6] !== o ? (d = o ? i(o) : null, t[5] = i, t[6] = o, t[7] = d) : d = t[7];
    let f = d,
        p;
    if (t[8] !== f || t[9] !== u) {
        if (p = [], u) {
            let e;
            t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, K.jsx)(k, {
                id: `aardvark.proposedPatch.patchGeneration.startedLabel`,
                defaultMessage: `Started`
            }), t[11] = e) : e = t[11];
            let n;
            t[12] === u ? n = t[13] : (n = {
                key: `started`,
                label: e,
                value: u
            }, t[12] = u, t[13] = n), p.push(n)
        }
        if (f) {
            let e;
            t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, K.jsx)(k, {
                id: `aardvark.proposedPatch.patchGeneration.finishedLabel`,
                defaultMessage: `Completed`
            }), t[14] = e) : e = t[14];
            let n;
            t[15] === f ? n = t[16] : (n = {
                key: `finished`,
                label: e,
                value: f
            }, t[15] = f, t[16] = n), p.push(n)
        }
        t[8] = f, t[9] = u, t[10] = p
    } else p = t[10];
    let m;
    t[17] === r ? m = t[18] : (m = r ? ye(r) : ``, t[17] = r, t[18] = m);
    let h = m,
        g, _;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, K.jsx)(`div`, {
        className: `text-token-text-tertiary text-xs font-semibold tracking-wide uppercase`,
        children: (0, K.jsx)(k, {
            id: `aardvark.proposedPatch.patchGeneration.title`,
            defaultMessage: `Patch generation`
        })
    }), _ = T(`mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between`), t[19] = g, t[20] = _) : (g = t[19], _ = t[20]);
    let v;
    t[21] === p ? v = t[22] : (v = p.length > 0 ? (0, K.jsx)(`div`, {
        className: `text-token-text-secondary flex flex-wrap items-center gap-x-6 text-sm leading-6`,
        children: p.map(pt)
    }) : (0, K.jsx)(`p`, {
        className: `text-token-text-tertiary text-sm leading-6`,
        children: (0, K.jsx)(k, {
            id: `aardvark.proposedPatch.patchGeneration.noTiming`,
            defaultMessage: `Timing details will appear once generation starts.`
        })
    }), t[21] = p, t[22] = v);
    let y;
    t[23] === n ? y = t[24] : (y = n && (0, K.jsx)(`div`, {
        className: `sm:ms-4 sm:flex sm:min-w-[120px] sm:justify-end`,
        children: (0, K.jsx)(at, {
            task: n,
            mode: `generation`
        })
    }), t[23] = n, t[24] = y);
    let b;
    t[25] !== v || t[26] !== y ? (b = (0, K.jsxs)(`div`, {
        className: _,
        children: [v, y]
    }), t[25] = v, t[26] = y, t[27] = b) : b = t[27];
    let S;
    t[28] !== h || t[29] !== c ? (S = c && (0, K.jsx)(De, {
        assistantTurn: c,
        outputText: h,
        className: `text-token-text-secondary text-sm leading-6`
    }), t[28] = h, t[29] = c, t[30] = S) : S = t[30];
    let C;
    return t[31] !== S || t[32] !== b ? (C = (0, K.jsxs)(K.Fragment, {
        children: [g, b, S]
    }), t[31] = S, t[32] = b, t[33] = C) : C = t[33], C
}

function pt(e) {
    return (0, K.jsxs)(`div`, {
        className: `flex items-baseline gap-2 text-sm leading-6`,
        children: [(0, K.jsx)(`span`, {
            className: `text-token-text-tertiary text-xs font-semibold tracking-wide`,
            children: e.label
        }), (0, K.jsx)(`span`, {
            className: `text-token-text-secondary`,
            children: e.value
        })]
    }, e.key)
}

function mt(e) {
    return {
        ...e,
        content: se(x(e, `content`, []), ht)
    }
}

function ht(e) {
    return x(e, `content_type`) === `text`
}

function gt(e) {
    return x(e, `type`) === `message`
}
var _t, K, vt = e((() => {
    _t = P(), Te(), be(), f(), ae(), g(), ue(), j(), dt(), K = D()
}));

function yt(e) {
    "use forget";
    let t = (0, xt.c)(29),
        {
            latestTask: n,
            formatStepTime: r
        } = e,
        i = n?.fix_checker_started_at,
        a = n?.fix_checker_finished_at,
        o = n?.fix_checker_rubric ?? ``,
        s;
    t[0] !== r || t[1] !== i ? (s = i ? r(i) : null, t[0] = r, t[1] = i, t[2] = s) : s = t[2];
    let c = s,
        l;
    t[3] !== r || t[4] !== a ? (l = a ? r(a) : null, t[3] = r, t[4] = a, t[5] = l) : l = t[5];
    let u = l,
        d;
    if (t[6] !== u || t[7] !== c) {
        if (d = [], c) {
            let e;
            t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, q.jsx)(k, {
                id: `aardvark.proposedPatch.patchValidation.startedLabel`,
                defaultMessage: `Started`
            }), t[9] = e) : e = t[9];
            let n;
            t[10] === c ? n = t[11] : (n = {
                key: `started`,
                label: e,
                value: c
            }, t[10] = c, t[11] = n), d.push(n)
        }
        if (u) {
            let e;
            t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, q.jsx)(k, {
                id: `aardvark.proposedPatch.patchValidation.finishedLabel`,
                defaultMessage: `Completed`
            }), t[12] = e) : e = t[12];
            let n;
            t[13] === u ? n = t[14] : (n = {
                key: `finished`,
                label: e,
                value: u
            }, t[13] = u, t[14] = n), d.push(n)
        }
        t[6] = u, t[7] = c, t[8] = d
    } else d = t[8];
    let f, p;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, q.jsx)(`div`, {
        className: `text-token-text-tertiary mt-4 text-xs font-semibold tracking-wide uppercase`,
        children: (0, q.jsx)(`span`, {
            children: (0, q.jsx)(k, {
                id: `aardvark.proposedPatch.patchValidation.title`,
                defaultMessage: `Patch validation`
            })
        })
    }), p = T(`mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between`), t[15] = f, t[16] = p) : (f = t[15], p = t[16]);
    let m;
    t[17] === d ? m = t[18] : (m = d.length > 0 ? (0, q.jsx)(`div`, {
        className: `text-token-text-secondary flex flex-wrap items-center gap-x-6 text-sm leading-6`,
        children: d.map(bt)
    }) : (0, q.jsx)(`p`, {
        className: `text-token-text-tertiary text-sm leading-6`,
        children: (0, q.jsx)(k, {
            id: `aardvark.proposedPatch.patchValidation.noTiming`,
            defaultMessage: `Validation timeline will populate once checks begin.`
        })
    }), t[17] = d, t[18] = m);
    let h;
    t[19] === n ? h = t[20] : (h = (0, q.jsx)(at, {
        task: n,
        mode: `validation`
    }), t[19] = n, t[20] = h);
    let g;
    t[21] !== m || t[22] !== h ? (g = (0, q.jsxs)(`div`, {
        className: p,
        children: [m, h]
    }), t[21] = m, t[22] = h, t[23] = g) : g = t[23];
    let _;
    t[24] === o ? _ = t[25] : (_ = o && (0, q.jsx)(`div`, {
        className: `prose prose-sm text-token-text-secondary mb-4 max-w-none`,
        children: (0, q.jsx)(ie, {
            children: o
        })
    }), t[24] = o, t[25] = _);
    let v;
    return t[26] !== g || t[27] !== _ ? (v = (0, q.jsxs)(q.Fragment, {
        children: [f, g, _]
    }), t[26] = g, t[27] = _, t[28] = v) : v = t[28], v
}

function bt(e) {
    return (0, q.jsxs)(`div`, {
        className: `flex items-baseline gap-2 text-sm leading-6`,
        children: [(0, q.jsx)(`span`, {
            className: `text-token-text-tertiary text-xs font-semibold tracking-wide`,
            children: e.label
        }), (0, q.jsx)(`span`, {
            className: `text-token-text-secondary`,
            children: e.value
        })]
    }, e.key)
}
var xt, q, St = e((() => {
    xt = P(), dt(), f(), j(), le(), q = D()
}));

function Ct(e) {
    return typeof e != `object` || !e || !(`role` in e) || !(`output_items` in e) ? !1 : e.role === `assistant` && Array.isArray(e.output_items)
}

function wt(e) {
    "use forget";
    let t = (0, Ot.c)(41),
        {
            proposed_patch: n,
            findingId: r,
            refetchFinding: a
        } = e,
        o = F(),
        u = _(),
        [f, p] = (0, kt.useState)(!1),
        [m, h] = (0, kt.useState)(!1),
        g = n?.latest_task;
    if (!n || !g) return null;
    let v = g.codex_task_turn,
        y = Ct(v?.turn) ? v.turn : null,
        b;
    if (t[0] !== y || t[1] !== r || t[2] !== o || t[3] !== m || t[4] !== g || t[5] !== n?.id || t[6] !== a || t[7] !== u || t[8] !== f) {
        let e = y ? ke({
                assistantTurn: y
            }) : [],
            _ = e.map(Dt).join(`

`),
            v = async () => {
                try {
                    await c(_, u), u.successNeutral(o.formatMessage(At.copyPatchSuccess), {
                        duration: 5,
                        hasCloseButton: !0
                    })
                } catch {}
            }, x = async () => {
                try {
                    await c(Ce(_), u), u.successNeutral(o.formatMessage(At.copyApplySuccess), {
                        duration: 5,
                        hasCloseButton: !0
                    })
                } catch {}
            }, S;
        t[10] !== r || t[11] !== o || t[12] !== m || t[13] !== g.codex_task_id || t[14] !== g.codex_task_turn_id || t[15] !== a || t[16] !== u ? (S = async e => {
            if (!g?.codex_task_id || !g?.codex_task_turn_id || !r || m) return;
            h(!0);
            let t = {};
            e !== void 0 && (t.mode = e);
            try {
                if (await d(() => ve.safePost(`/aardvark/scan-findings/{id}/pr`, {
                        parameters: {
                            path: {
                                id: r
                            }
                        },
                        requestBody: t
                    })), a) try {
                    await a()
                } catch (e) {
                    let t = e,
                        n;
                    n = t instanceof Error ? t.message : String(t), i.addError(`aardvark.proposedPatch.refetchFindingError`, {
                        findingId: r,
                        message: n
                    })
                }
                u.successNeutral(o.formatMessage(At.createPrSuccess), {
                    duration: 3,
                    hasCloseButton: !0
                })
            } catch (t) {
                let n = t;
                i.addError(`aardvark.proposedPatch.createPrError`, {
                    findingId: r,
                    taskId: g.codex_task_id,
                    taskTurnId: g.codex_task_turn_id,
                    mode: e ?? null,
                    message: n instanceof Error ? n.message : String(n)
                }), n instanceof s ? l(n, g.codex_task_turn_id, o, u) : u.danger(o.formatMessage(At.createPrError), {
                    duration: 3,
                    hasCloseButton: !0,
                    toastId: `aardvark_proposed_patch_create_pr_error`
                }), h(!1);
                return
            }
            h(!1)
        }, t[10] = r, t[11] = o, t[12] = m, t[13] = g.codex_task_id, t[14] = g.codex_task_turn_id, t[15] = a, t[16] = u, t[17] = S) : S = t[17];
        let C = S,
            w = !!g?.codex_task_id && !!g?.codex_task_turn_id && !!r,
            T = !!g?.fix_checker_success,
            E;
        t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (E = function(e) {
            return e ? typeof e == `string` ? Ge(e) : Ye(e) : null
        }, t[18] = E) : E = t[18];
        let D = E,
            O;
        t[19] === o ? O = t[20] : (O = o.formatMessage({
            id: `aardvark.proposedPatch.timelineTitle`,
            defaultMessage: `Proposed patch`
        }), t[19] = o, t[20] = O);
        let k;
        t[21] !== y || t[22] !== g ? (k = (0, J.jsx)(ft, {
            latestTask: g,
            turn: y,
            formatStepTime: D
        }), t[21] = y, t[22] = g, t[23] = k) : k = t[23];
        let A;
        t[24] !== g || t[25] !== T ? (A = T && (0, J.jsx)(yt, {
            latestTask: g,
            formatStepTime: D
        }), t[24] = g, t[25] = T, t[26] = A) : A = t[26];
        let j;
        if (e.length > 0) {
            let r;
            t[27] === f ? r = t[28] : (r = (0, J.jsx)(Me, {
                unifiedDiff: f,
                setUnifiedDiff: p,
                showFullDiff: !1,
                setShowFullDiff: Et
            }), t[27] = f, t[28] = r);
            let i = (0, J.jsxs)(`div`, {
                    className: `flex w-full flex-wrap items-center justify-between gap-3`,
                    children: [r, (0, J.jsx)(Oe, {
                        copyApplyToClipboard: x,
                        copyPatchToClipboard: v,
                        createPr: C,
                        navigateToCreatingPrPage: Tt,
                        updateBranch: void 0,
                        canCreatePr: w,
                        isCreatingPr: m,
                        permissions: `write`,
                        assistantTurn: y,
                        showOnlyViewPr: !1
                    })]
                }),
                a;
            t[29] === i ? a = t[30] : (a = (0, J.jsx)(`div`, {
                className: `mb-2 flex w-full flex-col gap-2`,
                children: i
            }), t[29] = i, t[30] = a);
            let o;
            t[31] !== n?.id || t[32] !== f ? (o = (e, t) => (0, J.jsx)(we, {
                diff: e,
                viewType: f ? `unified` : `split`,
                stickyHeader: !1
            }, `${n?.id??`diff`}-canonical-${t}`), t[31] = n?.id, t[32] = f, t[33] = o) : o = t[33];
            let s = (0, J.jsx)(`div`, {
                    className: `flex flex-col gap-4`,
                    children: e.map(o)
                }),
                c;
            t[34] !== a || t[35] !== s ? (c = (0, J.jsxs)(J.Fragment, {
                children: [a, s]
            }), t[34] = a, t[35] = s, t[36] = c) : c = t[36], j = c
        } else if (g?.patch_generation_success === !0 && g?.fix_checker_success === !0) {
            let e;
            t[37] === o ? e = t[38] : (e = o.formatMessage({
                id: `aardvark.proposedPatch.noDiffsInHead`,
                defaultMessage: `No diffs because the issue no longer exists in HEAD.`
            }), t[37] = o, t[38] = e);
            let n;
            t[39] === e ? n = t[40] : (n = (0, J.jsx)(`div`, {
                className: `bg-token-bg-tertiary text-token-text-secondary mt-4 rounded border border-dashed border-slate-300 px-3 py-3 text-center text-sm leading-6`,
                children: e
            }), t[39] = e, t[40] = n), j = n
        } else j = null;
        b = (0, J.jsxs)(Le, {
            title: O,
            children: [k, A, j]
        }), t[0] = y, t[1] = r, t[2] = o, t[3] = m, t[4] = g, t[5] = n?.id, t[6] = a, t[7] = u, t[8] = f, t[9] = b
    } else b = t[9];
    return b
}

function Tt() {}

function Et() {}

function Dt(e) {
    return e.hunksText ?? ``
}
var Ot, kt, J, At, jt = e((() => {
    Ot = P(), H(), Je(), _e(), C(), a(), y(), Se(), je(), Ae(), Ee(), xe(), u(), kt = t(N()), j(), vt(), St(), J = D(), At = O({
        createPrSuccess: {
            id: `aardvark.proposedPatch.createPrSuccess`,
            defaultMessage: `Pull request created`
        },
        createPrError: {
            id: `aardvark.proposedPatch.createPrErrorToast`,
            defaultMessage: `Failed to create pull request`
        },
        copyPatchSuccess: {
            id: `aardvark.proposedPatch.copyPatchSuccess`,
            defaultMessage: `Patch copied`
        },
        copyApplySuccess: {
            id: `aardvark.proposedPatch.copyApplySuccess`,
            defaultMessage: `Command copied`
        }
    })
}));

function Mt({
    content: e,
    start: t,
    className: n = ``
}) {
    let r = Pt.useMemo(() => e.trimEnd().split(`
`), [e]),
        i = typeof t == `number` ? t : 1;
    return (0, Y.jsx)(`div`, {
        className: `bg-token-bg-elevated-secondary overflow-auto rounded ${n}`,
        style: {
            maxHeight: 400
        },
        children: (0, Y.jsx)(`table`, {
            className: `w-full border-separate border-spacing-0`,
            children: (0, Y.jsx)(`tbody`, {
                children: r.map((e, t) => (0, Y.jsxs)(`tr`, {
                    className: `align-top`,
                    children: [(0, Y.jsx)(`td`, {
                        className: `text-token-text-tertiary py-0.5 ps-3 pe-3 text-end align-top text-[11px] whitespace-nowrap select-none`,
                        children: i + t
                    }), (0, Y.jsx)(`td`, {
                        className: `py-0.5 pe-3 font-mono text-sm whitespace-pre`,
                        children: e === `` ? ` ` : e
                    })]
                }, t))
            })
        })
    })
}

function Nt({
    finding: e
}) {
    let t = F(),
        n = e.commit_analysis?.relevant_lines ?? [],
        r = Array.isArray(n) && n.length > 0,
        i = e.commit_analysis?.proposed_patch,
        a = typeof i == `string` && i.trim().length > 0;
    if (r ||= (n = qe(i)?.relevant_lines ?? [], Array.isArray(n) && n.length > 0), !r) {
        if (a) return (0, Y.jsx)(Le, {
            title: t.formatMessage({
                id: `aardvark.findings.detailsTitle`,
                defaultMessage: `Details`
            }),
            children: (0, Y.jsx)(`div`, {
                className: `p-2`,
                children: i
            })
        });
        if (!a) return (0, Y.jsx)(Le, {
            title: t.formatMessage({
                id: `aardvark.findings.evidence`,
                defaultMessage: `Evidence`
            }),
            children: (0, Y.jsx)(`div`, {
                className: `text-token-text-tertiary text-sm`,
                children: t.formatMessage({
                    id: `aardvark.findings.noEvidence`,
                    defaultMessage: `No evidence available.`
                })
            })
        })
    }
    let o = (() => {
        let e = new Map;
        for (let t of n) {
            let n = `${t.path||t?.file_path||`(unknown)`}|${t.start_line_number??0}-${t.end_line_number??t.start_line_number??0}`,
                r = e.get(n) ?? [];
            r.push(t), e.set(n, r)
        }
        return Array.from(e.entries()).sort((e, t) => e[0].localeCompare(t[0]))
    })();
    return (0, Y.jsx)(Le, {
        title: t.formatMessage({
            id: `aardvark.findings.relevantLinesTitle`,
            defaultMessage: `Relevant lines`
        }),
        children: (0, Y.jsx)(`div`, {
            className: `space-y-3`,
            children: o.map(([e, n]) => {
                let [r, i] = e.split(`|`);
                return (0, Y.jsxs)(`details`, {
                    open: !0,
                    className: `group ring-token-border-light bg-token-main-surface-primary rounded-lg ring-1`,
                    children: [(0, Y.jsxs)(`summary`, {
                        className: `flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm font-medium select-none`,
                        children: [(0, Y.jsxs)(`span`, {
                            className: `flex min-w-0 items-center gap-2`,
                            children: [(0, Y.jsx)(w.ChevronDownSm, {
                                className: `icon-sm text-token-text-tertiary transition-transform group-open:rotate-180`,
                                "aria-hidden": !0
                            }), (0, Y.jsx)(`span`, {
                                className: `truncate`,
                                children: r
                            })]
                        }), (0, Y.jsx)(`span`, {
                            className: `text-token-text-tertiary ms-2 text-xs whitespace-nowrap`,
                            children: t.formatMessage({
                                id: `aardvark.findings.lineRange`,
                                defaultMessage: `L{range}`
                            }, {
                                range: i?.replace(`-`, `–`)
                            })
                        })]
                    }), (0, Y.jsx)(`div`, {
                        children: n.map((t, n) => (0, Y.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [t.comment && (0, Y.jsx)(`p`, {
                                className: `text-token-text-secondary mb-0 bg-yellow-50/60 px-3 py-3 text-sm dark:bg-yellow-900/30`,
                                children: t.comment
                            }), t.content && (0, Y.jsx)(Mt, {
                                content: t.content,
                                start: t.start_line_number,
                                className: `mb-0`
                            })]
                        }, `${e}-${n}`))
                    })]
                }, e)
            })
        })
    })
}
var Pt, Y, Ft = e((() => {
    H(), Je(), S(), Pt = t(N()), j(), Y = D()
}));

function It({
    finding: e
}) {
    let t = F(),
        n = e,
        r = Lt.useMemo(() => qe(n.commit_analysis?.proposed_patch), [n.commit_analysis?.proposed_patch]),
        i = Lt.useMemo(() => r?.cvss_score ?? n.commit_analysis?.cvss_score ?? null, [r, n.commit_analysis]),
        a = Lt.useMemo(() => r?.criticality_cvss_reason ?? n.commit_analysis?.criticality_cvss_score_reason ?? null, [r, n.commit_analysis]),
        o = Lt.useMemo(() => {
            let e = n.commit_analysis ?? {},
                t = e.attack_path_analysis ?? null;
            return {
                originalCrit: t?.original_severity ?? e.criticality ?? null,
                matrixSeverity: t?.matrix_severity ?? null,
                policyAdjusted: t?.policy_adjusted_criticality ?? null,
                finalCrit: t?.adjusted_criticality_final ?? e.attack_path_final_criticality ?? null,
                decider: t?.adjustment_decider ?? null,
                rationale: t?.adjustment_reason ?? e.attack_path_adjustment_reason ?? null
            }
        }, [n.commit_analysis]),
        s = o.originalCrit && o.finalCrit && o.originalCrit !== o.finalCrit,
        c = o.rationale,
        l = e => {
            if (!e) return `unknown`;
            let t = String(e).toLowerCase();
            return t.charAt(0).toUpperCase() + t.slice(1)
        };
    return (0, X.jsxs)(Le, {
        title: (0, X.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [n.commit_analysis?.title || t.formatMessage({
                id: `aardvark.findings.vulnerability`,
                defaultMessage: `Vulnerability`
            }), (0, X.jsx)(U, {
                level: n.criticality
            })]
        }),
        children: [(0, X.jsx)(`div`, {
            children: n.commit_analysis?.bugs_found_or_fixed && (0, X.jsx)(`div`, {
                className: `text-token-text-secondary text-sm leading-6`,
                children: n.commit_analysis?.bugs_found_or_fixed
            })
        }), i != null && (0, X.jsxs)(`div`, {
            className: `mt-3 flex items-center justify-between`,
            children: [(0, X.jsx)(`div`, {
                className: `text-token-text-secondary flex items-center gap-1`,
                children: (0, X.jsx)(`div`, {
                    className: `font-semibold`,
                    children: t.formatMessage({
                        id: `aardvark.findings.cvssLabel`,
                        defaultMessage: `CVSS`
                    })
                })
            }), (0, X.jsxs)(`span`, {
                className: `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold text-yellow-500 ring-amber-500/20`,
                style: {
                    backgroundColor: `rgba(245, 158, 11, 0.12)`
                },
                title: t.formatMessage({
                    id: `aardvark.findings.cvssScore`,
                    defaultMessage: `CVSS score`
                }),
                children: [(0, X.jsx)(fe, {
                    className: `me-1 h-[14px] w-[14px]`,
                    "aria-hidden": !0
                }), i]
            })]
        }), a && (0, X.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm leading-6`,
            children: a && (0, X.jsx)(`p`, {
                className: `mb-2`,
                children: a
            })
        }), (0, X.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm leading-6`,
            children: n.commit_analysis?.description
        }), (s || c) && (0, X.jsxs)(`div`, {
            className: `mt-3 text-sm leading-6`,
            children: [(0, X.jsxs)(`div`, {
                className: `text-token-text-secondary mb-1 flex items-center gap-2`,
                children: [(0, X.jsx)(`span`, {
                    className: `font-semibold`,
                    children: t.formatMessage({
                        id: `aardvark.findings.attackPathDecisionLabel`,
                        defaultMessage: `Attack-path analysis:`
                    })
                }), o.finalCrit && (0, X.jsx)(U, {
                    level: He(o.finalCrit) ?? `low`
                }), o.decider && (0, X.jsx)(`span`, {
                    className: `text-token-text-tertiary text-xs`,
                    children: t.formatMessage({
                        id: `aardvark.findings.attackPathDecider`,
                        defaultMessage: `(adjusted by {decider})`
                    }, {
                        decider: o.decider
                    })
                })]
            }), s && (0, X.jsx)(`div`, {
                className: `text-token-text-tertiary mb-1`,
                children: t.formatMessage({
                    id: `aardvark.findings.attackPathChangeLine`,
                    defaultMessage: `Criticality changed from {original} to {final}.`
                }, {
                    original: l(o.originalCrit),
                    final: l(o.finalCrit)
                })
            }), c && (0, X.jsx)(`div`, {
                className: `text-token-text-tertiary`,
                children: (0, X.jsx)(`p`, {
                    className: `mb-2`,
                    children: c
                })
            })]
        })]
    })
}
var Lt, X, Rt = e((() => {
    Ie(), H(), Je(), de(), Lt = t(N()), j(), X = D()
}));

function zt(e) {
    "use forget";
    let t = (0, Vt.c)(17),
        {
            finding: n
        } = e,
        r = F(),
        [i, a] = Ht.useState(!1),
        o = n.commit_analysis?.validation_report,
        s = n.commit_analysis?.validation_rubric,
        c = n.commit_analysis?.validation_artifact,
        l = c?.download_url,
        u = String(o || n.commit_analysis?.validation_str || ``);
    if (!u && !s && !l) return null;
    let d = s && (u || l) ? 2 : 1,
        f;
    t[0] === r ? f = t[1] : (f = r.formatMessage({
        id: `aardvark.findings.validation`,
        defaultMessage: `Validation`
    }), t[0] = r, t[1] = f);
    let p = `grid grid-cols-1 gap-6 lg:grid-cols-${d}`,
        m;
    t[2] === s ? m = t[3] : (m = s && (0, Z.jsx)(`div`, {
        className: `lg:col-span-1`,
        children: (0, Z.jsx)(`div`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: (0, Z.jsx)(ie, {
                remarkPlugins: [re],
                components: {
                    code(e) {
                        let {
                            inline: t,
                            children: n,
                            ...r
                        } = e, i = String(n ?? ``);
                        if (t) return (0, Z.jsx)(`code`, {
                            className: `bg-token-bg-elevated-secondary text-token-text-primary rounded px-1 py-0.5 text-[12px]`,
                            ...r,
                            children: i
                        });
                        let a = String(r.className || ``),
                            o = /language-([\w-]+)/.exec(a)?.[1];
                        return (0, Z.jsx)(Pe, {
                            content: i,
                            language: o,
                            wrapperClassName: `mt-1`,
                            showActionBar: !1,
                            codeContainerClassName: `p-3`
                        })
                    },
                    input(e) {
                        return e?.type === `checkbox` ? e.checked ? (0, Z.jsx)(me, {
                            className: `mt-0.5 h-4 w-4 shrink-0 text-emerald-600`
                        }) : (0, Z.jsx)(pe, {
                            className: `text-token-text-quaternary mt-0.5 h-4 w-4 shrink-0 opacity-70`
                        }) : (0, Z.jsx)(`input`, {
                            ...e
                        })
                    },
                    li(e) {
                        let {
                            children: t
                        } = e;
                        return (0, Z.jsx)(`li`, {
                            className: `hover:bg-token-bg-elevated-secondary/40 flex items-start gap-2 rounded-lg p-2`,
                            children: t
                        })
                    }
                },
                children: s
            })
        })
    }), t[2] = s, t[3] = m);
    let h;
    t[4] !== r || t[5] !== i || t[6] !== u || t[7] !== c?.file_name || t[8] !== l ? (h = u && u.trim().length > 0 || l ? (0, Z.jsxs)(`div`, {
        className: `lg:col-span-1`,
        children: [u && u.trim().length > 0 ? (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(`div`, {
                className: `text-token-text-tertiary mb-2 text-xs font-semibold tracking-wide uppercase`,
                children: r.formatMessage({
                    id: `aardvark.findings.validationReportLabel`,
                    defaultMessage: `Validation report`
                })
            }), (0, Z.jsxs)(`div`, {
                className: T(`relative rounded-md p-3 text-sm leading-6`, `bg-token-main-surface-primary/40`),
                children: [(0, Z.jsx)(`div`, {
                    className: T(`prose prose-sm text-token-text-secondary dark:prose-invert max-w-none`, i ? `max-h-none` : `max-h-36 overflow-hidden`),
                    children: (0, Z.jsx)(ie, {
                        remarkPlugins: [re],
                        children: u
                    })
                }), !i && (0, Z.jsx)(`div`, {
                    className: `from-token-main-surface-primary pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t`
                })]
            }), (0, Z.jsx)(`div`, {
                className: `mt-2 flex items-center justify-end`,
                children: (0, Z.jsx)(`button`, {
                    type: `button`,
                    className: `hover:bg-token-bg-elevated-secondary inline-flex h-8 items-center justify-center rounded px-2 text-xs`,
                    onClick: () => a(Bt),
                    children: i ? r.formatMessage({
                        id: `aardvark.findings.collapse`,
                        defaultMessage: `Collapse`
                    }) : r.formatMessage({
                        id: `aardvark.findings.expand`,
                        defaultMessage: `Expand`
                    })
                })
            })]
        }) : null, l ? (0, Z.jsxs)(`div`, {
            className: T(u ? `mt-3` : ``, `rounded-md p-3 text-sm`),
            children: [(0, Z.jsx)(`div`, {
                className: `text-token-text-tertiary mb-2 text-xs font-semibold tracking-wide uppercase`,
                children: r.formatMessage({
                    id: `aardvark.findings.validationArtifactLabel`,
                    defaultMessage: `PoC artifact`
                })
            }), (0, Z.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3`,
                children: [(0, Z.jsx)(`div`, {
                    className: `text-token-text-primary truncate`,
                    children: c?.file_name || r.formatMessage({
                        id: `aardvark.findings.validationArtifactFallbackName`,
                        defaultMessage: `artifact.bin`
                    })
                }), (0, Z.jsx)(`a`, {
                    href: l,
                    target: `_blank`,
                    rel: `noreferrer`,
                    className: `text-token-text-accent-primary hover:underline`,
                    children: r.formatMessage({
                        id: `aardvark.findings.validationArtifactDownload`,
                        defaultMessage: `Download`
                    })
                })]
            })]
        }) : null]
    }) : null, t[4] = r, t[5] = i, t[6] = u, t[7] = c?.file_name, t[8] = l, t[9] = h) : h = t[9];
    let g;
    t[10] !== p || t[11] !== m || t[12] !== h ? (g = (0, Z.jsxs)(`div`, {
        className: p,
        children: [m, h]
    }), t[10] = p, t[11] = m, t[12] = h, t[13] = g) : g = t[13];
    let _;
    return t[14] !== f || t[15] !== g ? (_ = (0, Z.jsx)(Le, {
        title: f,
        children: g
    }), t[14] = f, t[15] = g, t[16] = _) : _ = t[16], _
}

function Bt(e) {
    return !e
}
var Vt, Ht, Z, Ut = e((() => {
    Vt = P(), H(), Ne(), he(), ge(), f(), Ht = t(N()), j(), le(), ce(), Z = D()
}));

function Wt({
    finding: e,
    refetchFinding: t
}) {
    F();
    let {
        hasAttackPath: n
    } = Ke(e);
    return (0, Q.jsx)(`div`, {
        className: `relative mx-auto w-full max-w-[1200px]`,
        children: (0, Q.jsx)(`div`, {
            className: `flex flex-col gap-4`,
            children: (0, Q.jsxs)(`div`, {
                className: `grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6`,
                children: [(0, Q.jsx)(`div`, {
                    className: `flex flex-col gap-4 md:col-span-2`,
                    children: (0, Q.jsx)(It, {
                        finding: e
                    })
                }), (0, Q.jsx)(`div`, {
                    className: `flex h-fit flex-col gap-4 self-start`,
                    children: (0, Q.jsx)(Ve, {
                        finding: e
                    })
                }), e.proposed_patch ? (0, Q.jsx)(`div`, {
                    className: `md:col-span-3`,
                    children: (0, Q.jsx)(wt, {
                        proposed_patch: e.proposed_patch,
                        findingId: e.hid ?? e.id,
                        refetchFinding: t
                    })
                }) : null, (0, Q.jsx)(`div`, {
                    className: `md:col-span-3`,
                    children: (0, Q.jsx)(Nt, {
                        finding: e
                    })
                }), (0, Q.jsx)(`div`, {
                    className: `md:col-span-3`,
                    children: (0, Q.jsx)(zt, {
                        finding: e
                    })
                }), n ? (0, Q.jsx)(`div`, {
                    className: `md:col-span-3`,
                    children: (0, Q.jsx)(Qe, {
                        finding: e
                    })
                }) : null]
            })
        })
    })
}
var Q, Gt = e((() => {
    it(), Be(), jt(), Ft(), Rt(), Ut(), Je(), j(), Q = D()
}));

function Kt(e) {
    "use forget";
    let t = (0, qt.c)(27),
        {
            findingId: n
        } = e,
        i = F(),
        a = te(),
        o = A(),
        s = _(),
        c;
    t[0] !== a.search || t[1] !== o ? (c = () => (0, $.jsx)(`div`, {
        className: `mx-auto mb-4 w-full max-w-[1200px]`,
        children: (0, $.jsx)(v, {
            as: `button`,
            size: `small`,
            color: `secondary`,
            onClick: () => {
                o(`/aardvark` + (a.search || ``))
            },
            children: (0, $.jsx)(k, {
                id: `aardvark.details.back`,
                defaultMessage: `Back to findings`
            })
        })
    }), t[0] = a.search, t[1] = o, t[2] = c) : c = t[2];
    let l = c,
        u;
    t[3] === l ? u = t[4] : (u = e => (0, $.jsxs)(`div`, {
        className: `w-full px-4 pb-6`,
        children: [l(), (0, $.jsx)(`div`, {
            className: `border-token-border-light text-token-text-secondary mx-auto w-full max-w-[1200px] rounded-lg border px-4 py-6 text-center`,
            children: (0, $.jsx)(k, {
                ...B.findingLoad,
                values: {
                    details: e.message
                }
            })
        })]
    }), t[3] = l, t[4] = u);
    let d = u,
        {
            data: f,
            isLoading: p,
            refetch: h,
            error: g
        } = Ue(n),
        y = (0, Jt.useRef)(void 0),
        b, x;
    t[5] !== g || t[6] !== i || t[7] !== s ? (b = () => {
        if (!g) return;
        let e = i.formatMessage(B.findingLoad, {
            details: g.message
        });
        s.danger(e)
    }, x = [g, i, s], t[5] = g, t[6] = i, t[7] = s, t[8] = b, t[9] = x) : (b = t[8], x = t[9]), (0, Jt.useEffect)(b, x);
    let S, C;
    if (t[10] === f ? (S = t[11], C = t[12]) : (S = () => {
            if (!f) return;
            let e = f.hid ?? f.id ?? void 0;
            if (e && y.current === e) return;
            let {
                isValidated: t,
                hasPatch: n
            } = Ke(f);
            r.logStructuredEvent(`AardvarkFindingOpened`, {
                findingId: e,
                status: f.status ?? void 0,
                criticality: f.criticality ?? void 0,
                validationGenerated: t,
                patchGenerated: n
            }), y.current = e
        }, C = [f], t[10] = f, t[11] = S, t[12] = C), (0, Jt.useEffect)(S, C), p) {
        let e;
        return t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(`div`, {
            className: `w-full px-4 pb-6`,
            children: (0, $.jsx)(`div`, {
                className: `flex h-[60vh] w-full items-center justify-center`,
                children: (0, $.jsx)(m, {})
            })
        }), t[13] = e) : e = t[13], e
    }
    if (g || !f) {
        let e;
        t[14] === g ? e = t[15] : (e = g ?? Error(`Unknown error loading finding`), t[14] = g, t[15] = e);
        let n;
        return t[16] !== d || t[17] !== e ? (n = d(e), t[16] = d, t[17] = e, t[18] = n) : n = t[18], n
    }
    let w;
    t[19] === l ? w = t[20] : (w = l(), t[19] = l, t[20] = w);
    let T;
    t[21] !== f || t[22] !== h ? (T = (0, $.jsx)(Wt, {
        finding: f,
        refetchFinding: h
    }), t[21] = f, t[22] = h, t[23] = T) : T = t[23];
    let E;
    return t[24] !== w || t[25] !== T ? (E = (0, $.jsxs)(`div`, {
        className: `w-full px-4 pb-6`,
        children: [w, T]
    }), t[24] = w, t[25] = T, t[26] = E) : E = t[26], E
}
var qt, Jt, $, Yt = e((() => {
    qt = P(), Gt(), Je(), V(), We(), n(), h(), C(), o(), Jt = t(N()), j(), E(), $ = D()
}));

function Xt(e) {
    "use forget";
    let t = (0, Qt.c)(6),
        {
            findingId: n
        } = e,
        {
            hasAccess: r,
            isLoading: i,
            isError: a,
            refetch: o
        } = I(),
        s;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = p(), t[0] = s) : s = t[0];
    let c = s;
    if (i) return null;
    if (a) {
        let e;
        return t[1] === o ? e = t[2] : (e = (0, $t.jsx)(z, {
            onRetry: () => void o()
        }), t[1] = o, t[2] = e), e
    }
    if (!r) {
        let e;
        return t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $t.jsx)(ne, {
            to: `/`,
            replace: !0
        }), t[3] = e) : e = t[3], e
    }
    let l;
    return t[4] === n ? l = t[5] : (l = (0, $t.jsx)(Zt, {
        ...c,
        findingId: n
    }), t[4] = n, t[5] = l), l
}

function Zt(e) {
    "use forget";
    let t = (0, Qt.c)(2),
        {
            findingId: n
        } = e,
        r;
    return t[0] === n ? r = t[1] : (r = (0, $t.jsx)(Ze, {
        children: (0, $t.jsx)(Kt, {
            findingId: n
        })
    }), t[0] = n, t[1] = r), r
}
var Qt, $t, en = e((() => {
        Qt = P(), R(), Yt(), Xe(), L(), b(), E(), $t = D()
    })),
    tn, nn, rn, an = e((() => {
        E(), tn = P(), R(), V(), en(), L(), h(), j(), nn = D(), rn = ee(function() {
            "use forget";
            let e = (0, tn.c)(12),
                t = M(),
                n = te(),
                r = F(),
                {
                    isLoading: i,
                    isError: a,
                    refetch: o,
                    hasAccess: s,
                    hasNewUiAccess: c
                } = I();
            if (!t.id) {
                let t;
                e[0] === r ? t = e[1] : (t = r.formatMessage(B.findingNotFound), e[0] = r, e[1] = t);
                let n = t,
                    i;
                return e[2] === n ? i = e[3] : (i = (0, nn.jsx)(`div`, {
                    children: n
                }), e[2] = n, e[3] = i), i
            }
            if (i) {
                let t;
                return e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, nn.jsx)(`div`, {
                    className: `flex min-h-[40vh] items-center justify-center`,
                    children: (0, nn.jsx)(m, {
                        className: `text-token-text-tertiary h-5 w-5`
                    })
                }), e[4] = t) : t = e[4], t
            }
            if (a) {
                let t;
                return e[5] === o ? t = e[6] : (t = (0, nn.jsx)(z, {
                    onRetry: () => void o()
                }), e[5] = o, e[6] = t), t
            }
            if (s && c) {
                let r = `/codex/cloud/security/findings/${encodeURIComponent(t.id)}`,
                    i;
                return e[7] !== n.search || e[8] !== r ? (i = (0, nn.jsx)(ne, {
                    to: {
                        pathname: r,
                        search: n.search
                    },
                    replace: !0
                }), e[7] = n.search, e[8] = r, e[9] = i) : i = e[9], i
            }
            let l;
            return e[10] === t.id ? l = e[11] : (l = (0, nn.jsx)(Xt, {
                findingId: t.id
            }), e[10] = t.id, e[11] = l), l
        })
    }));
e((() => {
    an()
}))();
export {
    rn as
    default
};
//# sourceMappingURL=aardvark.findings._id-kh7t1h1a.js.map