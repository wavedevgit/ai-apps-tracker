const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/8627b5f0-kpigufuyjhjgep9f.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/cb9c87a9-iwfsag0y6bn45f2n.js", "assets/rosalind-access-nb42s6tl.css", "assets/cb94b3db-gfgq5inbywcvknum.js", "assets/4d183cec-krkn4kqqm3ook1t7.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C0 as n,
    Ga as r,
    J2 as i,
    J8 as a,
    NN as o,
    S0 as s,
    S1 as c,
    Ua as l,
    Y2 as u,
    Y8 as d,
    b5 as f,
    dz as p,
    e1 as m,
    fU as h,
    fz as g,
    iF as _,
    jN as ee,
    n1 as v,
    nF as y,
    pU as te,
    r1 as ne,
    rF as re,
    u1 as b,
    v1 as x,
    vN as S,
    y5 as C,
    yN as ie
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as w,
    Bn as T,
    Dt as ae,
    Ht as E,
    Nn as D,
    Rn as O,
    Ut as oe,
    Vn as se,
    cn as ce,
    ln as k,
    nt as le,
    wn as ue,
    zn as de,
    zt as fe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $st as pe,
    Flt as me,
    Nlt as he,
    Qst as ge,
    X4t as _e,
    Z4t as ve
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Uv as ye,
    Wv as be
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Bn as xe,
    L as Se,
    bn as A,
    ht as Ce,
    nn as we
} from "./1c919af1-abbe8u4rjagje3yr.js";
import {
    a as Te,
    d as Ee,
    l as j,
    r as De,
    s as M
} from "./74a883a0-hvxle82pkyqdut0n.js";
import {
    t as Oe
} from "./9d60841e-bx3dwc8nyvp30a4s.js";
import {
    t as N
} from "./a35abcd6-o5uzbzp1jprs3y1b.js";
import {
    A as ke,
    D as P,
    E as Ae,
    F as je,
    I as Me,
    N as Ne,
    O as Pe,
    P as Fe,
    R as Ie,
    S as F,
    T as Le,
    _ as Re,
    a as ze,
    c as Be,
    d as Ve,
    f as He,
    h as I,
    i as Ue,
    j as We,
    k as Ge,
    l as Ke,
    m as qe,
    n as Je,
    o as Ye,
    p as Xe,
    r as Ze,
    s as Qe,
    t as $e,
    u as et,
    v as tt,
    w as nt,
    x as rt,
    y as it
} from "./55acaef8-f92t1frsa50rn7k8.js";
import {
    n as L,
    t as at
} from "./4d183cec-krkn4kqqm3ook1t7.js";
import {
    n as R,
    t as ot
} from "./cb9c87a9-iwfsag0y6bn45f2n.js";
var st, ct = e((() => {
        st = `gpt-rosalind-access-v3`
    })),
    lt, z, B, ut, dt = e((() => {
        lt = ue(), z = t(se()), O(), ot(), B = T(), ut = e => {
            "use forget";
            let t = (0, lt.c)(15),
                {
                    capabilities: n
                } = e,
                r = (0, z.useId)();
            if (!n?.discoveryApplications) return null;
            let i = `${r}-title`,
                a = `${r}-title`,
                o;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, B.jsx)(D, {
                id: `chatgpt.rosalind_access.tier.overview.heading`,
                defaultMessage: `Rosalind model access`
            }), t[0] = o) : o = t[0];
            let s;
            t[1] === a ? s = t[2] : (s = (0, B.jsx)(`h2`, {
                className: R.fieldLabel,
                id: a,
                children: o
            }), t[1] = a, t[2] = s);
            let c;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, B.jsx)(`p`, {
                className: R.fieldHint,
                children: (0, B.jsx)(D, {
                    id: `chatgpt.rosalind_access.tier.overview.eligibility.description`,
                    defaultMessage: `One application covers Rosalind Discovery and Rosalind Research. We review your application to determine which tier you are eligible for.`
                })
            }), t[3] = c) : c = t[3];
            let l;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, B.jsx)(`dt`, {
                className: R.choiceTitle,
                children: (0, B.jsx)(D, {
                    id: `chatgpt.rosalind_access.tier.overview.discovery.label`,
                    defaultMessage: `Rosalind Discovery`
                })
            }), t[4] = l) : l = t[4];
            let u;
            t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, B.jsxs)(`div`, {
                className: `border-token-border-default grid content-start gap-1 rounded-xl border p-4`,
                children: [l, (0, B.jsx)(`dd`, {
                    className: R.choiceDescription,
                    children: (0, B.jsx)(D, {
                        id: `chatgpt.rosalind_access.tier.overview.discovery.task_focus.description`,
                        defaultMessage: `For everyday scientific tasks.`
                    })
                })]
            }), t[5] = u) : u = t[5];
            let d;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, B.jsx)(`dt`, {
                className: R.choiceTitle,
                children: (0, B.jsx)(D, {
                    id: `chatgpt.rosalind_access.tier.overview.research.label`,
                    defaultMessage: `Rosalind Research`
                })
            }), t[6] = d) : d = t[6];
            let f;
            t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, B.jsxs)(`dl`, {
                className: `my-3 grid gap-3 sm:grid-cols-2`,
                children: [u, (0, B.jsxs)(`div`, {
                    className: `border-token-border-default grid content-start gap-1 rounded-xl border p-4`,
                    children: [d, (0, B.jsx)(`dd`, {
                        className: R.choiceDescription,
                        children: (0, B.jsx)(D, {
                            id: `chatgpt.rosalind_access.tier.overview.research.task_focus.description`,
                            defaultMessage: `For complex scientific research requiring advanced reasoning.`
                        })
                    })]
                })]
            }), t[7] = f) : f = t[7];
            let p;
            t[8] === n.researchUpgradeRequests ? p = t[9] : (p = n.researchUpgradeRequests && (0, B.jsx)(`p`, {
                className: R.fieldHint,
                children: (0, B.jsx)(D, {
                    id: `chatgpt.rosalind_access.tier.overview.upgrade.help_text`,
                    defaultMessage: `If you're approved for Discovery but need Research, you can request an upgrade. The upgrade form will request more information for further review.`
                })
            }), t[8] = n.researchUpgradeRequests, t[9] = p);
            let m;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, B.jsx)(`p`, {
                className: R.fieldHint,
                children: (0, B.jsx)(D, {
                    id: `chatgpt.rosalind_access.tier.overview.privacy.help_text`,
                    defaultMessage: `Your privacy and data-retention choices are separate from your model access tier.`
                })
            }), t[10] = m) : m = t[10];
            let h;
            return t[11] !== i || t[12] !== p || t[13] !== s ? (h = (0, B.jsxs)(`section`, {
                "aria-labelledby": i,
                className: R.field,
                children: [s, c, f, p, m]
            }), t[11] = i, t[12] = p, t[13] = s, t[14] = h) : h = t[14], h
        }
    })),
    ft, pt, mt, ht, gt, _t, vt, yt = e((() => {
        N(), I(), at(), ft = [`US`, `AU`, `CA`, `FR`, `DE`, `IN`, `JP`, `MX`, `NL`, `SG`, `CH`, `GB`], pt = (e, t) => e.normalize(`NFKD`).replaceAll(/\p{M}/gu, ``).toLocaleLowerCase(t).trim(), mt = [{
            title: L.organizationStep,
            meta: L.organizationMeta,
            heading: L.organizationHeading,
            description: L.organizationDescription,
            visualHeading: L.yourOrganization,
            visualDescription: L.organizationVisualDescription
        }, {
            title: L.researchStep,
            meta: L.researchMeta,
            heading: L.researchHeading,
            description: L.researchDescription,
            visualHeading: L.researchVisualHeading,
            visualDescription: L.researchVisualDescription
        }, {
            title: L.locationsStep,
            meta: L.locationsMeta,
            heading: L.locationsHeading,
            description: L.locationsDescription,
            visualHeading: L.locationsStep,
            visualDescription: L.locationsVisualDescription
        }, {
            title: L.reviewStep,
            meta: L.reviewMeta,
            heading: L.reviewHeading,
            description: L.reviewDescription,
            visualHeading: L.reviewVisualHeading,
            visualDescription: L.reviewVisualDescription
        }], ht = [{
            id: `research_non_zdr`,
            title: L.nonZdrResearchMode,
            description: L.nonZdrResearchModeDescription
        }, {
            id: `research_zdr`,
            title: L.zdrResearchMode,
            description: L.zdrResearchModeDescription
        }], gt = [{
            id: `chatgpt-codex`,
            Icon: A,
            title: L.chatgptCodex,
            visualTitle: L.chatgptCodexVisualLabel,
            description: L.chatgptCodexDescription
        }, {
            id: `internal-api`,
            Icon: we,
            title: L.internalApi,
            visualTitle: L.internalApiVisualLabel,
            description: L.internalApiDescription
        }, {
            id: `external-api`,
            Icon: M,
            title: L.externalApi,
            visualTitle: L.externalApiVisualLabel,
            description: L.externalApiDescription
        }].filter(e => Ve.includes(e.id)), _t = [{
            id: `pathogen-engineering`,
            title: L.pathogenEngineering,
            visualTitle: L.pathogenEngineering,
            description: L.pathogenEngineeringDescription
        }, {
            id: `biological-toxins`,
            title: L.biologicalToxins,
            visualTitle: L.biologicalToxins,
            description: L.biologicalToxinsDescription
        }, {
            id: `high-containment`,
            title: L.highContainmentResearch,
            visualTitle: L.highContainmentResearch,
            description: L.highContainmentResearchDescription
        }, {
            id: `gene-drive`,
            title: L.geneDriveResearch,
            visualTitle: L.geneDriveResearch,
            description: L.geneDriveResearchDescription
        }, {
            id: `human-animal-infection`,
            title: L.humanAnimalInfectionStudies,
            visualTitle: L.humanAnimalInfectionStudies,
            description: L.humanAnimalInfectionStudiesDescription
        }, {
            id: `none`,
            title: L.noneOfAbove,
            visualTitle: L.noneOfAbove,
            description: L.noneOfAboveDescription
        }].filter(e => Xe.includes(e.id)), vt = [{
            id: `authorized-personnel`,
            title: L.safeguardAuthorized,
            visualTitle: L.safeguardAuthorizedVisualLabel
        }, {
            id: `institutional-oversight`,
            title: L.safeguardOversight,
            visualTitle: L.safeguardOversightVisualLabel
        }, {
            id: `training-and-sops`,
            title: L.safeguardTraining,
            visualTitle: L.safeguardTrainingVisualLabel
        }, {
            id: `secure-research-data`,
            title: L.safeguardData,
            visualTitle: L.safeguardDataVisualLabel
        }, {
            id: `human-review`,
            title: L.safeguardHumanReview,
            visualTitle: L.safeguardHumanReviewVisualLabel
        }, {
            id: `incident-reporting`,
            title: L.safeguardIncidents,
            visualTitle: L.safeguardIncidentsVisualLabel
        }, {
            id: `dual-use-review`,
            title: L.safeguardDualUse,
            visualTitle: L.safeguardDualUseVisualLabel
        }, {
            id: `other`,
            title: L.safeguardOther,
            visualTitle: L.safeguardOtherVisualLabel
        }].filter(e => He.includes(e.id))
    }));

function bt(e) {
    return !e
}

function xt(e) {
    let {
        code: t,
        label: n
    } = e;
    return (0, V.jsx)(`option`, {
        value: t,
        children: n
    }, t)
}
var St, Ct, V, wt, Tt, Et, Dt, Ot, kt, At = e((() => {
        St = ue(), N(), Ct = t(se()), O(), yt(), I(), at(), ot(), V = T(), wt = e => {
            "use forget";
            let t = (0, St.c)(18),
                {
                    id: n,
                    checked: r,
                    disabled: i,
                    onChange: a,
                    title: o,
                    description: s
                } = e,
                c = i !== void 0 && i,
                l;
            t[0] === a ? l = t[1] : (l = e => a(e.target.checked), t[0] = a, t[1] = l);
            let u;
            t[2] !== r || t[3] !== c || t[4] !== n || t[5] !== l ? (u = (0, V.jsx)(`input`, {
                checked: r,
                className: R.checkbox,
                disabled: c,
                id: n,
                name: n,
                onChange: l,
                type: `checkbox`
            }), t[2] = r, t[3] = c, t[4] = n, t[5] = l, t[6] = u) : u = t[6];
            let d;
            t[7] === o ? d = t[8] : (d = (0, V.jsx)(`span`, {
                className: R.checkLabel,
                children: o
            }), t[7] = o, t[8] = d);
            let f;
            t[9] === s ? f = t[10] : (f = s && (0, V.jsx)(`span`, {
                className: R.checkDescription,
                children: s
            }), t[9] = s, t[10] = f);
            let p;
            t[11] !== d || t[12] !== f ? (p = (0, V.jsxs)(`span`, {
                className: R.checkCopy,
                children: [d, f]
            }), t[11] = d, t[12] = f, t[13] = p) : p = t[13];
            let m;
            return t[14] !== n || t[15] !== u || t[16] !== p ? (m = (0, V.jsxs)(`label`, {
                className: R.checkRow,
                htmlFor: n,
                children: [u, p]
            }), t[14] = n, t[15] = u, t[16] = p, t[17] = m) : m = t[17], m
        }, Tt = e => {
            "use forget";
            let t = (0, St.c)(3),
                {
                    className: n
                } = e,
                r;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, V.jsx)(`path`, {
                clipRule: `evenodd`,
                d: `M4.34151 0.747423C4.71854 0.417526 5.28149 0.417526 5.65852 0.747423L9.65852 4.24742C10.0742 4.61111 10.1163 5.24287 9.75259 5.6585C9.38891 6.07414 8.75715 6.11626 8.34151 5.75258L5.00001 2.82877L1.65852 5.75258C1.24288 6.11626 0.61112 6.07414 0.247438 5.6585C-0.116244 5.24287 -0.0741267 4.61111 0.34151 4.24742L4.34151 0.747423ZM0.246065 10.3578C0.608879 9.94139 1.24055 9.89795 1.65695 10.2608L5.00001 13.1737L8.34308 10.2608C8.75948 9.89795 9.39115 9.94139 9.75396 10.3578C10.1168 10.7742 10.0733 11.4058 9.65695 11.7687L5.65695 15.2539C5.28043 15.582 4.7196 15.582 4.34308 15.2539L0.343082 11.7687C-0.0733128 11.4058 -0.116749 10.7742 0.246065 10.3578Z`,
                fillRule: `evenodd`
            }), t[0] = r) : r = t[0];
            let i;
            return t[1] === n ? i = t[2] : (i = (0, V.jsx)(`svg`, {
                "aria-hidden": `true`,
                className: n,
                fill: `currentColor`,
                viewBox: `0 0 10 16`,
                children: r
            }), t[1] = n, t[2] = i), i
        }, Et = e => {
            "use forget";
            let t = (0, St.c)(27),
                {
                    onChange: n,
                    value: r
                } = e,
                i = de(),
                [a, o] = (0, Ct.useState)(!1),
                [s, c] = (0, Ct.useState)(``),
                l = (0, Ct.useRef)(null),
                u = (0, Ct.useRef)(null),
                d = (0, Ct.useRef)(null),
                f = pt(s, i.locale),
                p;
            if (t[0] !== i) {
                let e = new Intl.Collator(i.locale, {
                    sensitivity: `base`
                });
                p = Ke.map(e => ({
                    code: e,
                    label: i.formatDisplayName(e, {
                        type: `region`
                    }) ?? e
                })).sort((t, n) => {
                    let r = ft.indexOf(t.code),
                        i = ft.indexOf(n.code);
                    return r >= 0 || i >= 0 ? r < 0 ? 1 : i < 0 ? -1 : r - i : e.compare(t.label, n.label)
                }), t[0] = i, t[1] = p
            } else p = t[1];
            let m = p,
                h = m.filter(e => {
                    let {
                        code: t,
                        label: n
                    } = e;
                    return !f || pt(n, i.locale).includes(f) || pt(t, i.locale).includes(f)
                }),
                g, _;
            t[2] === a ? (g = t[3], _ = t[4]) : (g = () => {
                if (!a) return;
                u.current?.focus();
                let e = e => {
                    e.target instanceof Node && !l.current?.contains(e.target) && (o(!1), c(``))
                };
                return document.addEventListener(`pointerdown`, e), () => document.removeEventListener(`pointerdown`, e)
            }, _ = [a], t[2] = a, t[3] = g, t[4] = _), (0, Ct.useEffect)(g, _);
            let ee;
            t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = () => {
                o(!1), c(``), d.current?.focus()
            }, t[5] = ee) : ee = t[5];
            let v = ee,
                y;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (y = e => {
                if (e.key === `Escape`) {
                    e.preventDefault(), v();
                    return
                }
                if (e.key !== `ArrowDown` && e.key !== `ArrowUp`) return;
                let t = Array.from(l.current?.querySelectorAll(`[role="option"]`) ?? []);
                if (t.length === 0) return;
                e.preventDefault();
                let n = t.findIndex(t => t === e.currentTarget),
                    r = e.key === `ArrowDown` ? 1 : -1;
                if (n < 0) {
                    t[r > 0 ? 0 : t.length - 1]?.focus();
                    return
                }
                if (r < 0 && n === 0) {
                    u.current?.focus();
                    return
                }
                t[(n + r + t.length) % t.length]?.focus()
            }, t[6] = y) : y = t[6];
            let te = y,
                ne = R,
                re = a ? `primary-country-menu` : void 0,
                b;
            t[7] === n ? b = t[8] : (b = e => {
                n(e.target.value), o(!1), c(``)
            }, t[7] = n, t[8] = b);
            let x, S;
            t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (x = e => {
                (e.key === `Enter` || e.key === ` ` || e.key === `ArrowDown` || e.key === `ArrowUp`) && (e.preventDefault(), o(!0))
            }, S = e => {
                e.preventDefault(), o(bt)
            }, t[9] = x, t[10] = S) : (x = t[9], S = t[10]);
            let C;
            t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, V.jsx)(`option`, {
                value: ``,
                children: (0, V.jsx)(D, {
                    ...L.countryPlaceholder
                })
            }), t[11] = C) : C = t[11];
            let ie;
            t[12] === m ? ie = t[13] : (ie = m.map(xt), t[12] = m, t[13] = ie);
            let w;
            t[14] !== a || t[15] !== ie || t[16] !== re || t[17] !== b || t[18] !== r ? (w = (0, V.jsxs)(`select`, {
                "aria-controls": re,
                "aria-expanded": a,
                className: R.input,
                id: `primary-country`,
                name: `primary-country`,
                onChange: b,
                onKeyDown: x,
                onMouseDown: S,
                ref: d,
                value: r,
                children: [C, ie]
            }), t[14] = a, t[15] = ie, t[16] = re, t[17] = b, t[18] = r, t[19] = w) : w = t[19];
            let T;
            t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, V.jsx)(Tt, {
                className: R.countryChevron
            }), t[20] = T) : T = t[20];
            let ae;
            t[21] === w ? ae = t[22] : (ae = (0, V.jsxs)(`div`, {
                className: R.countrySelectControl,
                children: [w, T]
            }), t[21] = w, t[22] = ae);
            let E = a && (0, V.jsxs)(`div`, {
                    className: R.countryPopover,
                    children: [(0, V.jsx)(`label`, {
                        className: `sr-only`,
                        htmlFor: `primary-country-search`,
                        children: (0, V.jsx)(D, {
                            ...L.additionalCountriesSearch
                        })
                    }), (0, V.jsx)(`div`, {
                        className: R.countrySearchContainer,
                        children: (0, V.jsxs)(`div`, {
                            className: R.countrySearchField,
                            children: [(0, V.jsx)(Se, {
                                "aria-hidden": `true`
                            }), (0, V.jsx)(`input`, {
                                autoComplete: `off`,
                                className: R.countrySearch,
                                id: `primary-country-search`,
                                onChange: e => c(e.target.value),
                                onKeyDown: te,
                                placeholder: i.formatMessage(L.countrySearchVisualPlaceholder),
                                ref: u,
                                type: `search`,
                                value: s
                            })]
                        })
                    }), (0, V.jsxs)(`div`, {
                        "aria-label": i.formatMessage(L.primaryCountry),
                        className: R.countryOptions,
                        id: `primary-country-menu`,
                        role: `listbox`,
                        children: [h.map(e => {
                            let {
                                code: t,
                                label: i
                            } = e;
                            return (0, V.jsxs)(`button`, {
                                "aria-selected": t === r,
                                className: R.countryOption,
                                onClick: () => {
                                    n(t), v()
                                },
                                onKeyDown: te,
                                role: `option`,
                                type: `button`,
                                children: [(0, V.jsx)(`span`, {
                                    children: i
                                }), t === r && (0, V.jsx)(Oe, {
                                    "aria-hidden": `true`
                                })]
                            }, t)
                        }), h.length === 0 && f && (0, V.jsx)(`p`, {
                            className: R.countryEmpty,
                            children: (0, V.jsx)(D, {
                                ...L.additionalCountriesNoResults
                            })
                        })]
                    })]
                }),
                O;
            return t[23] !== ae || t[24] !== E || t[25] !== ne.countrySelect ? (O = (0, V.jsxs)(`div`, {
                className: ne.countrySelect,
                ref: l,
                children: [ae, E]
            }), t[23] = ae, t[24] = E, t[25] = ne.countrySelect, t[26] = O) : O = t[26], O
        }, Dt = e => {
            "use forget";
            let t = (0, St.c)(7),
                {
                    label: n,
                    children: r
                } = e,
                i;
            t[0] === n ? i = t[1] : (i = (0, V.jsx)(`span`, {
                className: R.reviewLabel,
                children: (0, V.jsx)(D, {
                    ...n
                })
            }), t[0] = n, t[1] = i);
            let a;
            t[2] === r ? a = t[3] : (a = (0, V.jsx)(`span`, {
                className: R.reviewValue,
                children: r
            }), t[2] = r, t[3] = a);
            let o;
            return t[4] !== i || t[5] !== a ? (o = (0, V.jsxs)(`div`, {
                className: R.reviewRow,
                children: [i, a]
            }), t[4] = i, t[5] = a, t[6] = o) : o = t[6], o
        }, Ot = e => {
            "use forget";
            let t = (0, St.c)(7),
                {
                    label: n,
                    children: r
                } = e,
                i;
            t[0] === n ? i = t[1] : (i = (0, V.jsx)(`dt`, {
                className: R.compactReviewLabel,
                children: (0, V.jsx)(D, {
                    ...n
                })
            }), t[0] = n, t[1] = i);
            let a;
            t[2] === r ? a = t[3] : (a = (0, V.jsx)(`dd`, {
                className: R.compactReviewValue,
                children: r
            }), t[2] = r, t[3] = a);
            let o;
            return t[4] !== i || t[5] !== a ? (o = (0, V.jsxs)(`div`, {
                className: R.compactReviewRow,
                children: [i, a]
            }), t[4] = i, t[5] = a, t[6] = o) : o = t[6], o
        }, kt = e => {
            "use forget";
            let t = (0, St.c)(36),
                {
                    capabilities: n,
                    researchPurpose: r,
                    researchScopes: i,
                    setError: a,
                    setResearchPurpose: o,
                    toggleResearchScope: s
                } = e,
                c = de(),
                l;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, V.jsx)(`label`, {
                className: R.fieldLabel,
                htmlFor: `research-purpose`,
                children: (0, V.jsx)(D, {
                    id: `chatgpt.rosalind_access.research.purpose.use_plan.label`,
                    defaultMessage: `How do you plan to use Rosalind?`
                })
            }), t[0] = l) : l = t[0];
            let u;
            t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, V.jsx)(`p`, {
                className: R.sectionDescription,
                id: `research-purpose-help`,
                children: (0, V.jsx)(D, {
                    id: `chatgpt.rosalind_access.research.purpose.use_plan.help_text`,
                    defaultMessage: `Describe your research goals, how you hope to use Rosalind, and the types of outputs or insights you need. Include any challenges you’d like help with. A high-level overview is sufficient; no confidential details are needed.`
                })
            }), t[1] = u) : u = t[1];
            let d = n?.discoveryApplications ? `research-purpose-help research-purpose-review research-purpose-privacy` : `research-purpose-help research-purpose-privacy`,
                f;
            t[2] !== a || t[3] !== o ? (f = e => {
                o(e.target.value), a(``)
            }, t[2] = a, t[3] = o, t[4] = f) : f = t[4];
            let p;
            t[5] === c ? p = t[6] : (p = c.formatMessage(L.researchPurposeVisualPlaceholder), t[5] = c, t[6] = p);
            let m;
            t[7] !== r || t[8] !== d || t[9] !== f || t[10] !== p ? (m = (0, V.jsx)(`textarea`, {
                "aria-describedby": d,
                className: R.researchTextAreaInput,
                id: `research-purpose`,
                maxLength: Be.researchPurpose.max,
                name: `research-purpose`,
                onChange: f,
                placeholder: p,
                rows: 4,
                value: r
            }), t[7] = r, t[8] = d, t[9] = f, t[10] = p, t[11] = m) : m = t[11];
            let h;
            t[12] === r ? h = t[13] : (h = (0, V.jsx)(`span`, {
                className: R.characterCount,
                children: Array.from(r.trim()).length < Be.researchPurpose.min ? (0, V.jsx)(D, {
                    ...L.researchPurposeCharactersMinimum,
                    values: {
                        count: Array.from(r.trim()).length,
                        minimum: Be.researchPurpose.min
                    }
                }) : (0, V.jsx)(D, {
                    ...L.researchPurposeCharactersCount,
                    values: {
                        count: Array.from(r).length,
                        maximum: Be.researchPurpose.max
                    }
                })
            }), t[12] = r, t[13] = h);
            let g;
            t[14] !== m || t[15] !== h ? (g = (0, V.jsxs)(`div`, {
                className: R.researchTextArea,
                children: [m, h]
            }), t[14] = m, t[15] = h, t[16] = g) : g = t[16];
            let _;
            t[17] === n?.discoveryApplications ? _ = t[18] : (_ = n?.discoveryApplications && (0, V.jsx)(`p`, {
                className: R.fieldHint,
                id: `research-purpose-review`,
                children: (0, V.jsx)(D, {
                    id: `chatgpt.rosalind_access.research.purpose.tier_review.help_text`,
                    defaultMessage: `Your responses help us understand your research needs and determine the appropriate access tier.`
                })
            }), t[17] = n?.discoveryApplications, t[18] = _);
            let ee;
            t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = (0, V.jsx)(`span`, {
                className: R.fieldHint,
                id: `research-purpose-privacy`,
                children: (0, V.jsx)(D, {
                    ...L.researchPrivacy
                })
            }), t[19] = ee) : ee = t[19];
            let v;
            t[20] !== g || t[21] !== _ ? (v = (0, V.jsxs)(`div`, {
                className: R.field,
                children: [l, u, g, _, ee]
            }), t[20] = g, t[21] = _, t[22] = v) : v = t[22];
            let y;
            t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, V.jsx)(`span`, {
                className: `sr-only`,
                children: (0, V.jsx)(D, {
                    ...L.researchScope
                })
            }), t[23] = y) : y = t[23];
            let te;
            t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (te = (0, V.jsxs)(`legend`, {
                className: R.fieldLabel,
                children: [y, (0, V.jsx)(`span`, {
                    "aria-hidden": `true`,
                    children: (0, V.jsx)(D, {
                        ...L.researchScopeVisualHeading
                    })
                })]
            }), t[24] = te) : te = t[24];
            let ne;
            t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = (0, V.jsx)(`span`, {
                className: `sr-only`,
                children: (0, V.jsx)(D, {
                    ...L.selectAll
                })
            }), t[25] = ne) : ne = t[25];
            let re;
            t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (re = (0, V.jsxs)(`span`, {
                className: R.fieldHint,
                children: [ne, (0, V.jsx)(`span`, {
                    "aria-hidden": `true`,
                    children: (0, V.jsx)(D, {
                        ...L.researchScopeVisualDescription
                    })
                })]
            }), t[26] = re) : re = t[26];
            let b;
            t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, V.jsx)(`p`, {
                className: R.fieldHint,
                id: `research-scope-eligibility-note`,
                children: (0, V.jsx)(D, {
                    id: `chatgpt.rosalind_access.research.scope.eligibility.help_text`,
                    defaultMessage: `Making a selection does not disqualify you from access. Your responses help us understand your research and review your application.`
                })
            }), t[27] = b) : b = t[27];
            let x;
            t[28] !== i || t[29] !== s ? (x = _t.map(e => (0, V.jsx)(wt, {
                checked: i.includes(e.id),
                description: (0, V.jsx)(D, {
                    ...e.description
                }),
                id: `research-scope-${e.id}`,
                onChange: t => s(e.id, t),
                title: (0, V.jsxs)(V.Fragment, {
                    children: [(0, V.jsx)(`span`, {
                        className: `sr-only`,
                        children: (0, V.jsx)(D, {
                            ...e.title
                        })
                    }), (0, V.jsx)(`span`, {
                        "aria-hidden": `true`,
                        children: (0, V.jsx)(D, {
                            ...e.visualTitle
                        })
                    })]
                })
            }, e.id)), t[28] = i, t[29] = s, t[30] = x) : x = t[30];
            let S;
            t[31] === x ? S = t[32] : (S = (0, V.jsxs)(`fieldset`, {
                "aria-describedby": `research-scope-eligibility-note`,
                className: R.field,
                children: [te, re, b, (0, V.jsx)(`div`, {
                    className: R.scopeChoices,
                    children: x
                })]
            }), t[31] = x, t[32] = S);
            let C;
            return t[33] !== v || t[34] !== S ? (C = (0, V.jsxs)(V.Fragment, {
                children: [v, S]
            }), t[33] = v, t[34] = S, t[35] = C) : C = t[35], C
        }
    })),
    jt, Mt = e((() => {
        n(), k(), jt = s(() => ce(() => import(`./8627b5f0-kpigufuyjhjgep9f.js`).then(e => e.RosalindPersona), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])), {
            componentName: `RosalindPersona`
        })
    })),
    Nt, Pt, Ft, It, Lt, Rt, zt, H = e((() => {
        at(), Nt = /^inq_[A-Za-z0-9]{16,64}$/, Pt = /^env_[A-Za-z0-9]{16,64}$/, Ft = /^[A-Za-z0-9._~+/=-]{16,2048}$/, It = {
            title: L.personaStep,
            meta: L.personaMeta,
            heading: L.personaHeading,
            description: L.personaVisualDescription,
            visualHeading: L.personaVisualHeading,
            visualDescription: L.personaVisualDescription
        }, Lt = new Set([`completed`, `needs_review`, `approved`, `declined`, `failed`]), Rt = e => {
            switch (e) {
                case L.organizationRequired:
                    return [{
                        field: `organizationId`,
                        issue: `REQUIRED`
                    }];
                case L.organizationNotEligible:
                    return [{
                        field: `organizationId`,
                        issue: `INVALID_VALUE`
                    }];
                case L.productRequired:
                    return [{
                        field: `products`,
                        issue: `REQUIRED`
                    }];
                case L.researchPurposeRequired:
                    return [{
                        field: `researchPurpose`,
                        issue: `TOO_SMALL`
                    }];
                case L.researchScopeRequired:
                    return [{
                        field: `researchScopes`,
                        issue: `REQUIRED`
                    }];
                case L.countryRequired:
                    return [{
                        field: `primaryCountry`,
                        issue: `REQUIRED`
                    }];
                case L.additionalLocationsRequired:
                    return [{
                        field: `additionalLocations`,
                        issue: `REQUIRED`
                    }];
                case L.additionalCountriesRequired:
                    return [{
                        field: `additionalCountries`,
                        issue: `REQUIRED`
                    }];
                case L.safeguardsRequired:
                    return [{
                        field: `confirmResearchSafeguards`,
                        issue: `REQUIRED`
                    }];
                case L.otherSafeguardsRequired:
                    return [{
                        field: `otherSafeguardDetails`,
                        issue: `REQUIRED`
                    }];
                case L.accuracyRequired:
                    return [{
                        field: `certifyAccuracy`,
                        issue: `REQUIRED`
                    }];
                case L.authorityRequired:
                    return [{
                        field: `certifyAuthority`,
                        issue: `REQUIRED`
                    }];
                default:
                    return []
            }
        }, zt = () => {
            try {
                return globalThis.crypto?.randomUUID?.()
            } catch {
                return
            }
        }
    })),
    Bt, Vt = e((() => {
        at(), Bt = (e, t) => {
            switch (e) {
                case `submitted`:
                    return L.submittedStatus;
                case `in_progress`:
                    return L.inProgressStatus;
                case `action_required`:
                    return t === `applicant` ? L.actionRequiredStatus : L.inProgressStatus;
                case `approved`:
                    return L.approvedStatus;
                case `access_granted`:
                    return L.accessGrantedStatus;
                case `revoked`:
                    return L.accessRevokedStatus;
                case `denied`:
                    return L.deniedStatus;
                case `canceled`:
                    return L.canceledStatus
            }
        }
    })),
    Ht, Ut, Wt, Gt = e((() => {
        Ht = ue(), be(), f(), O(), je(), ot(), Ut = T(), Wt = e => {
            "use forget";
            let t = (0, Ht.c)(28),
                {
                    organizationId: n,
                    organizationName: r,
                    embedded: i,
                    disabled: a,
                    onTrackApplication: o
                } = e,
                s = i !== void 0 && i,
                c = a !== void 0 && a,
                l = de(),
                u, d, f, p, m;
            if (t[0] !== c || t[1] !== s || t[2] !== l || t[3] !== n || t[4] !== r) {
                let e = Fe(n, s);
                f = c || void 0, t[10] !== l || t[11] !== n || t[12] !== r ? (p = l.formatMessage({
                    id: `chatgpt.rosalind_access.organization.tracking.link.accessible_label`,
                    defaultMessage: `Track application status for {organizationName} ({organizationId})`
                }, {
                    organizationName: r,
                    organizationId: n
                }), t[10] = l, t[11] = n, t[12] = r, t[13] = p) : p = t[13], t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (m = C(`interactive-button interactive-button-secondary`, R.organizationTrackingLink), t[14] = m) : m = t[14], u = e, d = e.includes(`?`) ? `&` : `?`, t[0] = c, t[1] = s, t[2] = l, t[3] = n, t[4] = r, t[5] = u, t[6] = d, t[7] = f, t[8] = p, t[9] = m
            } else u = t[5], d = t[6], f = t[7], p = t[8], m = t[9];
            let h = `${u}${d}workspace_handoff=true`,
                g;
            t[15] !== c || t[16] !== o || t[17] !== n ? (g = e => {
                if (c) {
                    e.preventDefault();
                    return
                }
                o?.(n, e)
            }, t[15] = c, t[16] = o, t[17] = n, t[18] = g) : g = t[18];
            let _ = c ? -1 : void 0,
                ee, v;
            t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = (0, Ut.jsx)(D, {
                id: `chatgpt.rosalind_access.organization.tracking.link.label`,
                defaultMessage: `Track application status`
            }), v = (0, Ut.jsx)(ye, {
                "aria-hidden": `true`,
                className: `icon-sm`
            }), t[19] = ee, t[20] = v) : (ee = t[19], v = t[20]);
            let y;
            return t[21] !== _ || t[22] !== f || t[23] !== p || t[24] !== m || t[25] !== h || t[26] !== g ? (y = (0, Ut.jsxs)(`a`, {
                "aria-disabled": f,
                "aria-label": p,
                className: m,
                href: h,
                onClick: g,
                tabIndex: _,
                children: [ee, v]
            }), t[21] = _, t[22] = f, t[23] = p, t[24] = m, t[25] = h, t[26] = g, t[27] = y) : y = t[27], y
        }
    })),
    Kt, qt, Jt, Yt, Xt = e((() => {
        Kt = new Set([`not_started`, `in_progress`, `pending`, `action_required`, `passed`, `failed`, `expired`, `error`]), qt = e => typeof e == `string` && Kt.has(e), Jt = e => e.canResumeVerification === !0 && (e.state === `submitted` || e.state === `in_progress` || e.state === `action_required`) && (e.kybStatus === void 0 || e.kybStatus === `not_started` || e.kybStatus === `pending` || e.kybStatus === `in_progress` || e.kybStatus === `action_required`), Yt = (e, t, n, r) => {
            let i = new Set([...t, ...r].map(e => e.bioagentsApplicationReference)),
                a = new Map,
                o = new Map(t.map(e => [e.organizationId, e]));
            for (let t of [...n, ...e]) i.has(t.bioagentsApplicationReference) || (t.state === `denied` ? o.set(t.organizationId, t) : a.set(t.organizationId, t));
            for (let e of r) o.set(e.organizationId, e);
            for (let e of a.keys()) o.delete(e);
            return {
                submittedApplications: Array.from(a.values()),
                previousApplications: Array.from(o.values())
            }
        }
    })),
    Zt, U, Qt, $t, en = e((() => {
        Zt = ue(), g(), N(), O(), f(), at(), Gt(), ot(), U = T(), Qt = e => e.ssoConnectionName ? L.switchWorkspaceWithSso : L.authenticateWorkspace, $t = e => {
            "use forget";
            let t = (0, Zt.c)(56),
                {
                    embedded: n,
                    organizations: r,
                    organizationId: i,
                    organizationSource: a,
                    organizationLookupPending: o,
                    selectedWorkspaceOrganizationId: s,
                    canceling: c,
                    busy: l,
                    onTrackApplication: u,
                    canSelectOrganization: d,
                    getOrganizationWorkspace: f,
                    selectOrganization: m
                } = e,
                h = n !== void 0 && n,
                g = l !== void 0 && l,
                _ = de(),
                ee = o || void 0,
                v;
            t[0] === _ ? v = t[1] : (v = _.formatMessage(L.organizationLabel), t[0] = _, t[1] = v);
            let y;
            if (t[2] !== g || t[3] !== d || t[4] !== c || t[5] !== h || t[6] !== f || t[7] !== _ || t[8] !== u || t[9] !== i || t[10] !== a || t[11] !== r || t[12] !== m || t[13] !== s) {
                let e;
                t[15] !== g || t[16] !== d || t[17] !== c || t[18] !== h || t[19] !== f || t[20] !== _ || t[21] !== u || t[22] !== i || t[23] !== a || t[24] !== m || t[25] !== s ? (e = e => {
                    let t = e.id === i,
                        n = !d(e),
                        r = f(e.id),
                        o = e.submissionEligible === !1 && r !== void 0 && (e.id !== s || !r.canAccessWithCurrentSession);
                    return (0, U.jsxs)(`div`, {
                        className: C(R.organizationCard, R.organizationOption),
                        "data-kyb-state": t ? `verification-pending` : `not-started`,
                        "data-organization-source": a,
                        "data-state": t ? `selected` : `unselected`,
                        children: [(0, U.jsxs)(`label`, {
                            "aria-disabled": c || g || n || void 0,
                            className: R.organizationSelection,
                            htmlFor: `organization-card-${e.id}`,
                            children: [(0, U.jsx)(`span`, {
                                "aria-hidden": `true`,
                                className: R.organizationIcon,
                                children: (0, U.jsx)(j, {})
                            }), (0, U.jsxs)(`span`, {
                                className: R.organizationDetails,
                                children: [(0, U.jsx)(`span`, {
                                    className: R.organizationName,
                                    children: e.name
                                }), (0, U.jsx)(`span`, {
                                    className: R.organizationId,
                                    children: e.id
                                })]
                            }), (0, U.jsx)(`span`, {
                                "aria-hidden": `true`,
                                className: C(R.organizationVerifiedBadge, a !== `verified` && `invisible`),
                                children: (0, U.jsx)(D, {
                                    ...L.organizationAccountVerified
                                })
                            }), (0, U.jsx)(`input`, {
                                "aria-label": _.formatMessage(L.organizationDisplayName, {
                                    name: e.name,
                                    id: e.id
                                }),
                                checked: t,
                                className: R.organizationRadioInput,
                                disabled: c || g || n,
                                id: `organization-card-${e.id}`,
                                name: `openai-organization-card`,
                                onChange: () => {
                                    m(e.id)
                                },
                                type: `radio`,
                                value: e.id
                            }), (0, U.jsx)(`span`, {
                                "aria-hidden": `true`,
                                className: R.organizationRadio
                            }), (0, U.jsxs)(`span`, {
                                className: R.organizationType,
                                children: [(0, U.jsx)(`span`, {
                                    "aria-hidden": `true`,
                                    className: `invisible`,
                                    children: (0, U.jsx)(D, {
                                        ...L.organizationWorkspaceDescription
                                    })
                                }), (0, U.jsx)(`span`, {
                                    "aria-hidden": `true`,
                                    className: `invisible`,
                                    children: (0, U.jsx)(D, {
                                        ...L.organizationNotEligible
                                    })
                                }), r !== void 0 && (0, U.jsx)(`span`, {
                                    "aria-hidden": `true`,
                                    className: `invisible`,
                                    children: (0, U.jsx)(D, {
                                        ...Qt(r),
                                        values: {
                                            name: r.name?.trim() || e.name
                                        }
                                    })
                                }), (0, U.jsx)(`span`, {
                                    children: (0, U.jsx)(D, {
                                        ...o ? r.canAccessWithCurrentSession ? L.organizationWorkspaceDescription : Qt(r) : e.submissionEligible === !1 && !(e.hasDirectApiMembership === !1 && r === void 0) ? L.organizationNotEligible : L.organizationWorkspaceDescription,
                                        values: {
                                            name: r?.name?.trim() || e.name
                                        }
                                    })
                                })]
                            })]
                        }), (0, U.jsx)(`div`, {
                            "aria-hidden": a !== `verified` || void 0,
                            className: C(R.organizationTracking, `min-h-14`),
                            children: a === `verified` ? (0, U.jsx)(Wt, {
                                organizationId: e.id,
                                organizationName: e.name,
                                embedded: h,
                                disabled: c || g,
                                onTrackApplication: u
                            }) : null
                        })]
                    }, e.id)
                }, t[15] = g, t[16] = d, t[17] = c, t[18] = h, t[19] = f, t[20] = _, t[21] = u, t[22] = i, t[23] = a, t[24] = m, t[25] = s, t[26] = e) : e = t[26], y = r.map(e), t[2] = g, t[3] = d, t[4] = c, t[5] = h, t[6] = f, t[7] = _, t[8] = u, t[9] = i, t[10] = a, t[11] = r, t[12] = m, t[13] = s, t[14] = y
            } else y = t[14];
            let te;
            t[27] !== o || t[28] !== a || t[29] !== r.length ? (te = r.length === 0 && (0, U.jsxs)(`div`, {
                "aria-disabled": `true`,
                className: R.organizationCard,
                "data-kyb-state": `not-started`,
                "data-organization-source": a,
                "data-state": `unselected`,
                children: [(0, U.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: R.organizationIcon,
                    children: o ? (0, U.jsx)(p, {
                        className: `icon`
                    }) : (0, U.jsx)(j, {})
                }), (0, U.jsxs)(`span`, {
                    className: R.organizationDetails,
                    children: [(0, U.jsx)(`span`, {
                        className: R.organizationName,
                        role: o ? `status` : void 0,
                        children: (0, U.jsx)(D, {
                            ...o ? L.organizationsLoading : a === `unavailable` ? L.organizationLookupUnavailable : L.noOrganizations
                        })
                    }), (0, U.jsx)(`span`, {
                        className: R.organizationType,
                        children: (0, U.jsx)(D, {
                            ...L.organizationWorkspaceDescription
                        })
                    })]
                })]
            }), t[27] = o, t[28] = a, t[29] = r.length, t[30] = te) : te = t[30];
            let ne;
            t[31] !== ee || t[32] !== v || t[33] !== y || t[34] !== te ? (ne = (0, U.jsxs)(`div`, {
                "aria-busy": ee,
                "aria-describedby": `organization-help`,
                "aria-label": v,
                className: R.organizationList,
                role: `radiogroup`,
                children: [y, te]
            }), t[31] = ee, t[32] = v, t[33] = y, t[34] = te, t[35] = ne) : ne = t[35];
            let re;
            t[36] === _ ? re = t[37] : (re = _.formatMessage(L.organizationLabel), t[36] = _, t[37] = re);
            let b = r.length === 0 || c || g,
                x;
            t[38] === m ? x = t[39] : (x = e => {
                m(e.target.value)
            }, t[38] = m, t[39] = x);
            let S = o ? L.organizationsLoading : a === `unavailable` ? L.organizationLookupUnavailable : r.length > 0 ? L.selectOrganization : L.noOrganizations,
                ie;
            t[40] === S ? ie = t[41] : (ie = (0, U.jsx)(`option`, {
                value: ``,
                children: (0, U.jsx)(D, {
                    ...S
                })
            }), t[40] = S, t[41] = ie);
            let w;
            t[42] !== d || t[43] !== _ || t[44] !== r ? (w = r.length > 0 && (0, U.jsx)(`optgroup`, {
                label: _.formatMessage(L.organizationGroup),
                children: r.map(e => (0, U.jsx)(`option`, {
                    "aria-label": _.formatMessage(L.organizationDisplayName, {
                        name: e.name,
                        id: e.id
                    }),
                    disabled: !d(e),
                    value: e.id,
                    children: e.name
                }, e.id))
            }), t[42] = d, t[43] = _, t[44] = r, t[45] = w) : w = t[45];
            let T;
            t[46] !== i || t[47] !== x || t[48] !== ie || t[49] !== w || t[50] !== re || t[51] !== b ? (T = (0, U.jsxs)(`select`, {
                "aria-describedby": `organization-help`,
                "aria-label": re,
                className: `sr-only`,
                disabled: b,
                id: `organization`,
                name: `openai-organization`,
                onChange: x,
                tabIndex: -1,
                value: i,
                children: [ie, w]
            }), t[46] = i, t[47] = x, t[48] = ie, t[49] = w, t[50] = re, t[51] = b, t[52] = T) : T = t[52];
            let ae;
            return t[53] !== T || t[54] !== ne ? (ae = (0, U.jsxs)(U.Fragment, {
                children: [ne, T]
            }), t[53] = T, t[54] = ne, t[55] = ae) : ae = t[55], ae
        }
    })),
    tn, nn = e((() => {
        n(), k(), tn = s(() => ce(() => import(`./cb94b3db-gfgq5inbywcvknum.js`).then(e => e.RosalindSubmitConfirmationDialogContent), __vite__mapDeps([12, 1, 2, 3, 4, 13, 10, 11])))
    }));

function rn(e) {
    return e !== `none`
}

function an() {
    return window.location.reload()
}

function on() {}

function sn(e) {
    return e !== `none`
}

function cn(e) {
    if (e.state !== `action_required` || e.actionOwner !== `applicant` || !e.requiredAction || e.requiredAction === `upload_verification_documents`) return null;
    if (e.requiredAction === `cancel_and_reapply_persona_verification` || e.requiredAction === `complete_organization_verification` || e.requiredAction === `provide_organization_verification`) {
        let t = Ue(e);
        return t === void 0 ? null : (0, G.jsxs)(G.Fragment, {
            children: [(0, G.jsx)(`p`, {
                className: R.fieldHint,
                children: (0, G.jsx)(D, {
                    ...t.title
                })
            }), (0, G.jsx)(`p`, {
                className: R.fieldHint,
                children: (0, G.jsx)(D, {
                    ...t.description
                })
            })]
        })
    }
    return (0, G.jsx)(`p`, {
        className: R.fieldHint,
        children: (0, G.jsx)(D, {
            ...L.applicantRequiredAction,
            values: {
                action: e.requiredAction.replaceAll(`_`, ` `)
            }
        })
    })
}

function ln() {}

function un() {
    return window.location.reload()
}

function dn(e) {
    return Qe.includes(e.id)
}

function fn(e) {
    return !e
}
var pn, W, G, mn, hn, gn, _n, vn, yn, bn, xn = e((() => {
        pn = ue(), g(), r(), me(), pe(), b(), te(), y(), d(), u(), S(), N(), f(), W = t(se()), O(), Ge(), P(), ct(), dt(), rt(), At(), yt(), I(), at(), Ye(), Mt(), H(), je(), Ze(), Vt(), Gt(), Xt(), ot(), en(), nn(), G = T(), mn = new Set([`submitted`, `in_progress`, `action_required`]), hn = `/create-workspace?next=${encodeURIComponent(We)}`, gn = `rosalind-access.pending-organization`, _n = /^org[-_][A-Za-z0-9_-]{1,124}$/, vn = e => {
            let t = e?.querySelector(`#rosalind-access-contents`);
            typeof t?.scrollTo == `function` && (t.scrollTo({
                top: 0,
                behavior: `smooth`
            }), window.scrollY === 0) || window.scrollTo({
                top: 0,
                behavior: `smooth`
            })
        }, yn = e => {
            "use forget";
            let t = (0, pn.c)(6),
                n;
            t[0] !== e.selectedWorkspaceOrganizationId || t[1] !== e.user.email ? (n = JSON.stringify([e.user.email, e.selectedWorkspaceOrganizationId]), t[0] = e.selectedWorkspaceOrganizationId, t[1] = e.user.email, t[2] = n) : n = t[2];
            let r;
            return t[3] !== e || t[4] !== n ? (r = (0, G.jsx)(bn, {
                ...e
            }, n), t[3] = e, t[4] = n, t[5] = r) : r = t[5], r
        }, bn = e => {
            "use forget";
            let t = (0, pn.c)(303),
                {
                    user: n,
                    capabilities: r,
                    embedded: o,
                    accountSwitchingEnabled: s,
                    currentWorkspaceAccountId: c,
                    organizations: u,
                    savedAccountSwitchSessions: d,
                    workspaceAccounts: f,
                    applications: m,
                    latestCanceledApplications: g,
                    submissionEnabled: ee,
                    organizationCreationEnabled: v,
                    applicationHistoryPending: y,
                    applicationHistoryUnavailable: te,
                    organizationLookupPending: ne,
                    onResolveOrganizationWorkspace: b,
                    onRetryOrganizationLookup: S,
                    onRefreshApplication: w,
                    onSelectOrganization: T,
                    organizationSource: ae,
                    selectedWorkspaceOrganizationId: E,
                    initialOrganizationId: O,
                    initialStep: oe,
                    personaEnabled: se,
                    submissionHref: ce
                } = e,
                k = o !== void 0 && o,
                le = s !== void 0 && s,
                ue;
            t[0] === d ? ue = t[1] : (ue = d === void 0 ? [] : d, t[0] = d, t[1] = ue);
            let fe = ue,
                pe;
            t[2] === f ? pe = t[3] : (pe = f === void 0 ? [] : f, t[2] = f, t[3] = pe);
            let me = pe,
                _e;
            t[4] === m ? _e = t[5] : (_e = m === void 0 ? [] : m, t[4] = m, t[5] = _e);
            let ve = _e,
                ye;
            t[6] === g ? ye = t[7] : (ye = g === void 0 ? [] : g, t[6] = g, t[7] = ye);
            let be = ye,
                A = ee !== void 0 && ee,
                we = v !== void 0 && v,
                j = y !== void 0 && y,
                M = te !== void 0 && te,
                N = ne !== void 0 && ne,
                P = ae === void 0 ? `verified` : ae,
                je = oe === void 0 ? 0 : oe,
                Ve = se !== void 0 && se,
                He = ce === void 0 ? Ne : ce,
                I = de(),
                Ue;
            t[8] === r?.discoveryApplications ? Ue = t[9] : (Ue = r?.discoveryApplications === !0 ? {
                discoveryApplications: !0,
                researchUpgradeRequests: !1
            } : void 0, t[8] = r?.discoveryApplications, t[9] = Ue);
            let Ge = Ue,
                Je = (0, W.useId)(),
                Ye = (0, W.useRef)(null),
                Xe = (0, W.useRef)(null),
                Ze = (0, W.useRef)(null),
                Qe = (0, W.useRef)(null),
                $e = (0, W.useRef)(null),
                rt = (0, W.useRef)(null),
                at = (0, W.useRef)(null),
                ot = (0, W.useRef)(null),
                ct = (0, W.useRef)(null),
                lt = (0, W.useRef)(0),
                [z, B] = (0, W.useState)(Ve ? 0 : je),
                [dt, yt] = (0, W.useState)(null),
                [bt, xt] = (0, W.useState)(null),
                St;
            t[10] === dt ? St = t[11] : (St = dt !== null && Lt.has(dt), t[10] = dt, t[11] = St);
            let Ct = St,
                [V, At] = (0, W.useState)(``),
                Mt;
            t[12] !== V || t[13] !== u ? (Mt = u.find(e => e.id === V) ?? null, t[12] = V, t[13] = u, t[14] = Mt) : Mt = t[14];
            let H = Mt,
                Vt = Ve && !(P === `verified` && H?.personaVerificationRequired === !1),
                Ht = Vt ? [mt[0], It, ...mt.slice(1)] : mt,
                Ut = Vt ? z === -1 ? 1 : z === 0 ? 0 : z + 1 : z,
                Gt = z === -1 ? It : mt[z],
                [Kt, Xt] = (0, W.useState)(`research_non_zdr`),
                Zt;
            t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (Zt = [], t[15] = Zt) : Zt = t[15];
            let [U, Qt] = (0, W.useState)(Zt), [en, nn] = (0, W.useState)(``), yn;
            t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (yn = [], t[16] = yn) : yn = t[16];
            let [bn, xn] = (0, W.useState)(yn), [Sn, Cn] = (0, W.useState)(!1), wn;
            t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (wn = [], t[17] = wn) : wn = t[17];
            let [K, Tn] = (0, W.useState)(wn), [En, Dn] = (0, W.useState)(``), [On, kn] = (0, W.useState)(``), [q, An] = (0, W.useState)(null), [jn, Mn] = (0, W.useState)(null), Nn;
            t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (Nn = [], t[18] = Nn) : Nn = t[18];
            let [Pn, Fn] = (0, W.useState)(Nn), [In, Ln] = (0, W.useState)(!1), [Rn, zn] = (0, W.useState)(``), [Bn, Vn] = (0, W.useState)(!1), [Hn, Un] = (0, W.useState)(!1), [Wn, Gn] = (0, W.useState)(!1), [Kn, J] = (0, W.useState)(``), [Y, qn] = (0, W.useState)(!1), [Jn, Yn] = (0, W.useState)(!1), Xn;
            t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (Xn = [], t[19] = Xn) : Xn = t[19];
            let [Zn, Qn] = (0, W.useState)(Xn), $n;
            t[20] === Symbol.for(`react.memo_cache_sentinel`) ? ($n = [], t[20] = $n) : $n = t[20];
            let [er, tr] = (0, W.useState)($n), [nr, rr] = (0, W.useState)(null), [X, ir] = (0, W.useState)(!1), [ar, or] = (0, W.useState)(!1), [Z, sr] = (0, W.useState)(!1), [cr, lr] = (0, W.useState)(null), [ur, dr] = (0, W.useState)(!1), [fr, pr] = (0, W.useState)(null), mr = (0, W.useId)(), hr = (0, W.useId)(), gr = (0, W.useId)(), [_r, vr] = (0, W.useState)(!1), [yr, br] = (0, W.useState)(!1), xr = (0, W.useRef)(null), Sr = (0, W.useRef)(null), Cr = (0, W.useRef)(!1), wr = (0, W.useRef)(!1), Tr = (0, W.useRef)(0), Er = (0, W.useRef)(je !== 0), Dr = (0, W.useRef)(!1), Or;
            t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (Or = new Set, t[21] = Or) : Or = t[21];
            let kr = (0, W.useRef)(Or),
                Ar;
            t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (Ar = new Set, t[22] = Ar) : Ar = t[22];
            let jr = (0, W.useRef)(Ar),
                Mr;
            t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (Mr = () => {
                let e = lt.current += 1,
                    t = ct.current;
                return ct.current = null, t?.destroy(), or(!1), e
            }, t[23] = Mr) : Mr = t[23];
            let Nr = Mr,
                Pr, Fr;
            t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (Pr = () => () => {
                Tr.current += 1, lt.current += 1;
                let e = ct.current;
                ct.current = null, e?.destroy()
            }, Fr = [], t[24] = Pr, t[25] = Fr) : (Pr = t[24], Fr = t[25]), ie(Pr, Fr);
            let Ir, Lr;
            t[26] !== k || t[27] !== T || t[28] !== P || t[29] !== u || t[30] !== E || t[31] !== Z || t[32] !== n.email ? (Ir = () => {
                try {
                    let e = window.sessionStorage.getItem(gn);
                    if (e === null) return;
                    let t = JSON.parse(e);
                    if (typeof t != `object` || !t || !(`userEmail` in t) || t.userEmail !== n.email.trim().toLowerCase() || !(`organizationId` in t) || typeof t.organizationId != `string` || !_n.test(t.organizationId)) {
                        window.sessionStorage.removeItem(gn);
                        return
                    }
                    if (P !== `verified` || Z) return;
                    if (t.organizationId !== E) {
                        window.sessionStorage.removeItem(gn);
                        return
                    }
                    if (!u.some(e => e.id === t.organizationId)) return;
                    let r = t.organizationId,
                        i = `returnToStatus` in t && t.returnToStatus === !0,
                        a = !1;
                    return queueMicrotask(() => {
                        if (!a) {
                            try {
                                window.sessionStorage.removeItem(gn)
                            } catch {}
                            if (i) {
                                window.location.replace(Fe(r, k));
                                return
                            }
                            At(r), T?.(r)
                        }
                    }), () => {
                        a = !0
                    }
                } catch {
                    try {
                        window.sessionStorage.removeItem(gn)
                    } catch {}
                }
            }, Lr = [k, P, u, T, E, Z, n.email], t[26] = k, t[27] = T, t[28] = P, t[29] = u, t[30] = E, t[31] = Z, t[32] = n.email, t[33] = Ir, t[34] = Lr) : (Ir = t[33], Lr = t[34]), (0, W.useEffect)(Ir, Lr);
            let Rr;
            t[35] === n.fullName ? Rr = t[36] : (Rr = n.fullName?.trim() || void 0, t[35] = n.fullName, t[36] = Rr);
            let zr = Rr,
                Br;
            t[37] !== ve || t[38] !== be || t[39] !== er || t[40] !== Zn ? (Br = Yt(ve, be, Zn, er), t[37] = ve, t[38] = be, t[39] = er, t[40] = Zn, t[41] = Br) : Br = t[41];
            let {
                submittedApplications: Vr,
                previousApplications: Hr
            } = Br, Ur;
            t[42] !== nr?.bioagentsApplicationReference || t[43] !== nr?.organizationId || t[44] !== Vr ? (Ur = Vr.find(e => e.organizationId === nr?.organizationId && e.bioagentsApplicationReference === nr?.bioagentsApplicationReference) ?? null, t[42] = nr?.bioagentsApplicationReference, t[43] = nr?.organizationId, t[44] = Vr, t[45] = Ur) : Ur = t[45];
            let Q = Ur,
                Wr = Q === null ? z : null,
                Gr, Kr;
            t[46] === Wr ? (Gr = t[47], Kr = t[48]) : (Gr = () => {
                Sr.current !== Wr && (Sr.current = Wr, Wr !== null && nt(Wr))
            }, Kr = [Wr], t[46] = Wr, t[47] = Gr, t[48] = Kr), (0, W.useEffect)(Gr, Kr), !Vt && z === -1 ? (J(``), B(1)) : Vt && z > 0 && !Ct && (J(``), B(-1), Gn(!1));
            let qr = Z || cr === V,
                Jr = Ve && H != null && (P !== `verified` || H.submissionEligible === void 0),
                Yr = Jr && (N || j),
                Xr = Jr && !Yr,
                Zr = Jr ? Yr ? L.organizationEligibilityPending : L.organizationEligibilityUnavailable : null,
                Qr = P === `unavailable` || M || Xr,
                $r;
            t[49] !== V || t[50] !== Vr ? ($r = Vr.find(e => e.organizationId === V) ?? null, t[49] = V, t[50] = Vr, t[51] = $r) : $r = t[51];
            let $ = $r,
                ei = H?.submissionEligible === !1 || (z === 0 || z === -1) && Jr || qr || X || $ !== null || z === -1 && (!Ct || P !== `verified` || H?.submissionEligible !== !0),
                ti = Hr.find(e => e.organizationId === V) ?? null,
                ni = j && !$ && !ti,
                ri = ti?.bioagentsApplicationReference,
                [ii, ai] = (0, W.useState)(ri);
            ii !== ri && (ai(ri), yt(null), xt(null));
            let oi, si;
            t[52] !== X || t[53] !== I || t[54] !== $ || t[55] !== z || t[56] !== Q || t[57] !== Y ? (oi = () => {
                if (z === 0 || $ == null || Q != null || Y || X) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || (Gn(!1), vr(!1), Xt($.requestedResearchMode ?? `research_non_zdr`), J(I.formatMessage(L.applicationConflict, {
                        organizationId: $.organizationId
                    })), B(0), vn(Ye.current))
                }), () => {
                    e = !0
                }
            }, si = [X, I, $, z, Q, Y], t[52] = X, t[53] = I, t[54] = $, t[55] = z, t[56] = Q, t[57] = Y, t[58] = oi, t[59] = si) : (oi = t[58], si = t[59]), (0, W.useEffect)(oi, si);
            let ci, li;
            if (t[60] !== me) {
                li = new Map, ci = new Set;
                for (let e of me) {
                    if (e.organizationId === void 0) continue;
                    e.canAccessWithCurrentSession || ci.add(e.organizationId);
                    let t = li.get(e.organizationId);
                    (t === void 0 || e.canAccessWithCurrentSession && !t.canAccessWithCurrentSession) && li.set(e.organizationId, e)
                }
                t[60] = me, t[61] = ci, t[62] = li
            } else ci = t[61], li = t[62];
            let ui;
            t[63] !== ci || t[64] !== li ? (ui = {
                workspacesByOrganization: li,
                lockedWorkspaceOrganizationIds: ci
            }, t[63] = ci, t[64] = li, t[65] = ui) : ui = t[65];
            let {
                workspacesByOrganization: di,
                lockedWorkspaceOrganizationIds: fi
            } = ui, pi;
            t[66] === di ? pi = t[67] : (pi = e => di.get(e), t[66] = di, t[67] = pi);
            let mi = pi,
                hi;
            t[68] !== fi || t[69] !== Hr || t[70] !== E || t[71] !== Vr || t[72] !== di ? (hi = e => e.submissionEligible !== !1 || di.has(e.id) && (e.id !== E || fi.has(e.id)) || Vr.some(t => t.organizationId === e.id) || Hr.some(t => t.organizationId === e.id), t[68] = fi, t[69] = Hr, t[70] = E, t[71] = Vr, t[72] = di, t[73] = hi) : hi = t[73];
            let gi = hi,
                _i = H?.submissionEligible,
                vi = H != null && V === E,
                yi = H != null && _i === !1 && di.has(V) && (!vi || fi.has(V)),
                bi = qr || yi ? `workspace_auth_required` : _i === void 0 || P !== `verified` ? N || j ? `lookup_pending` : `lookup_unavailable` : _i ? `ready` : `explicit_ineligible`,
                xi, Si;
            t[74] !== j || t[75] !== M || t[76] !== bi || t[77] !== V || t[78] !== N || t[79] !== P || t[80] !== qr || t[81] !== Ve || t[82] !== _i || t[83] !== z || t[84] !== A || t[85] !== vi ? (xi = () => {
                !V || z !== 0 && z !== -1 || Le({
                    eligibility: _i === void 0 || P !== `verified` ? `unknown` : _i ? `eligible` : `ineligible`,
                    reason: bi,
                    organizationSource: P,
                    personaEnabled: Ve,
                    organizationLookupPending: N,
                    applicationHistoryPending: j,
                    applicationHistoryUnavailable: M,
                    submissionEnabled: A,
                    workspaceMatchesSelected: vi,
                    workspaceRecoveryPending: qr
                })
            }, Si = [V, z, _i, bi, P, Ve, N, j, M, A, vi, qr], t[74] = j, t[75] = M, t[76] = bi, t[77] = V, t[78] = N, t[79] = P, t[80] = qr, t[81] = Ve, t[82] = _i, t[83] = z, t[84] = A, t[85] = vi, t[86] = xi, t[87] = Si) : (xi = t[86], Si = t[87]), (0, W.useEffect)(xi, Si);
            let Ci;
            t[88] === U ? Ci = t[89] : (Ci = e => U.includes(e.id), t[88] = U, t[89] = Ci);
            let wi = gt.filter(Ci),
                Ti;
            t[90] === bn ? Ti = t[91] : (Ti = e => bn.includes(e.id), t[90] = bn, t[91] = Ti);
            let Ei = _t.filter(Ti),
                Di;
            t[92] === K ? Di = t[93] : (Di = e => K.includes(e.id), t[92] = K, t[93] = Di);
            let Oi = vt.filter(Di),
                ki;
            t[94] !== I || t[95] !== On ? (ki = On ? I.formatDisplayName(On, {
                type: `region`
            }) ?? On : ``, t[94] = I, t[95] = On, t[96] = ki) : ki = t[96];
            let Ai = ki,
                ji;
            t[97] === I ? ji = t[98] : (ji = e => I.formatDisplayName(e, {
                type: `region`
            }) ?? e, t[97] = I, t[98] = ji);
            let Mi = Pn.map(ji),
                Ni;
            bb0: {
                if (!In) {
                    let e;
                    t[99] === Symbol.for(`react.memo_cache_sentinel`) ? (e = [], t[99] = e) : e = t[99], Ni = e;
                    break bb0
                }
                let e;
                if (t[100] !== I) {
                    let n = new Intl.Collator(I.locale, {
                        sensitivity: `base`
                    });
                    e = Ke.map(e => ({
                        code: e,
                        label: I.formatDisplayName(e, {
                            type: `region`
                        }) ?? e
                    })).sort((e, t) => {
                        let r = ft.indexOf(e.code),
                            i = ft.indexOf(t.code);
                        return r >= 0 || i >= 0 ? r < 0 ? 1 : i < 0 ? -1 : r - i : n.compare(e.label, t.label)
                    }), t[100] = I, t[101] = e
                } else e = t[101];Ni = e
            }
            let Pi = Ni,
                Fi = pt(Rn, I.locale),
                Ii = Pi.filter(e => {
                    let {
                        code: t,
                        label: n
                    } = e;
                    return t !== On && (!Fi || pt(n, I.locale).includes(Fi) || pt(t, I.locale).includes(Fi))
                }),
                Li = bn.some(rn) || q !== null && q !== `no`,
                Ri;
            t[102] !== zr || t[103] !== n.displayName || t[104] !== n.email ? (Ri = zr ?? n.displayName?.trim() ?? n.email, t[102] = zr, t[103] = n.displayName, t[104] = n.email, t[105] = Ri) : Ri = t[105];
            let zi = Ri,
                Bi = we && !N && P === `verified` && u.length === 0,
                Vi, Hi;
            t[106] !== yr || t[107] !== Bi ? (Vi = () => {
                if (!yr || !Bi) return;
                let e = an;
                return window.addEventListener(`focus`, e), () => window.removeEventListener(`focus`, e)
            }, Hi = [yr, Bi], t[106] = yr, t[107] = Bi, t[108] = Vi, t[109] = Hi) : (Vi = t[108], Hi = t[109]), (0, W.useEffect)(Vi, Hi);
            let Ui, Wi;
            t[110] === In ? (Ui = t[111], Wi = t[112]) : (Ui = () => {
                if (!In) return;
                rt.current?.focus();
                let e = e => {
                    e.target instanceof Node && !ot.current?.contains(e.target) && (zn(``), Ln(!1))
                };
                return document.addEventListener(`pointerdown`, e), () => document.removeEventListener(`pointerdown`, e)
            }, Wi = [In], t[110] = In, t[111] = Ui, t[112] = Wi), (0, W.useEffect)(Ui, Wi);
            let Gi, Ki;
            t[113] === _r ? (Gi = t[114], Ki = t[115]) : (Gi = () => {
                if (!_r) return;
                let e = Xe.current;
                Ze.current?.focus();
                let t = e => {
                    e.key === `Escape` ? (e.preventDefault(), vr(!1)) : e.key === `Tab` && (e.preventDefault(), Ze.current?.focus())
                };
                return document.addEventListener(`keydown`, t), () => {
                    document.removeEventListener(`keydown`, t), e?.focus()
                }
            }, Ki = [_r], t[113] = _r, t[114] = Gi, t[115] = Ki), (0, W.useEffect)(Gi, Ki);
            let qi, Ji;
            t[116] !== fr || t[117] !== gr ? (qi = () => {
                if (fr !== null) return Qe.current?.focus(), () => document.getElementById(gr)?.focus()
            }, Ji = [fr, gr], t[116] = fr, t[117] = gr, t[118] = qi, t[119] = Ji) : (qi = t[118], Ji = t[119]), (0, W.useEffect)(qi, Ji);
            let Yi;
            t[120] === Symbol.for(`react.memo_cache_sentinel`) ? (Yi = e => {
                if (e.key === `Escape`) {
                    e.preventDefault(), zn(``), Ln(!1), at.current?.focus();
                    return
                }
                if (e.key !== `ArrowDown` && e.key !== `ArrowUp`) return;
                let t = Array.from($e.current?.querySelectorAll(`input[type="checkbox"]`) ?? []);
                if (t.length === 0) return;
                let n = t.indexOf(e.currentTarget);
                n < 0 && e.currentTarget !== rt.current || (e.preventDefault(), n < 0 ? t[e.key === `ArrowUp` ? t.length - 1 : 0]?.focus() : e.key === `ArrowUp` && n === 0 ? rt.current?.focus() : t[(n + (e.key === `ArrowDown` ? 1 : -1) + t.length) % t.length]?.focus())
            }, t[120] = Yi) : Yi = t[120];
            let Xi = Yi,
                Zi;
            t[121] !== le || t[122] !== I || t[123] !== n.email ? (Zi = async (e, t) => {
                if (le) {
                    Nr();
                    try {
                        e === void 0 ? await ke(void 0, n.email) : await ke(void 0, n.email, {
                            sessionToken: e.sessionToken,
                            workspaceAccountId: t
                        })
                    } catch {
                        J(I.formatMessage(L.accountSwitchFailed))
                    }
                }
            }, t[121] = le, t[122] = I, t[123] = n.email, t[124] = Zi) : Zi = t[124];
            let Qi = Zi,
                $i;
            t[125] !== X || t[126] !== c || t[127] !== k || t[128] !== I || t[129] !== Y || t[130] !== Z ? ($i = async (e, t) => {
                let n = t === void 0 ? Ie(We, k) : t;
                if (!(Y || X || Z || e.id === c && e.canAccessWithCurrentSession)) {
                    Nr(), sr(!0), re();
                    try {
                        let t = Pe(n),
                            {
                                willRedirect: r,
                                updatedAccount: o
                            } = await x(a(), e.id, I, h(), !0, t, t);
                        if (r) return;
                        if (!o) {
                            try {
                                window.sessionStorage.removeItem(gn)
                            } catch {}
                            J(I.formatMessage(L.workspaceSwitchFailed)), _(), sr(!1);
                            return
                        }
                        i(t)
                    } catch {
                        try {
                            window.sessionStorage.removeItem(gn)
                        } catch {}
                        J(I.formatMessage(L.workspaceSwitchFailed)), _(), sr(!1)
                    }
                }
            }, t[125] = X, t[126] = c, t[127] = k, t[128] = I, t[129] = Y, t[130] = Z, t[131] = $i) : $i = t[131];
            let ea = $i,
                ta;
            t[132] !== X || t[133] !== k || t[134] !== mi || t[135] !== E || t[136] !== Y || t[137] !== ea || t[138] !== Z ? (ta = (e, t) => {
                if (Y || X || Z) {
                    t.preventDefault();
                    return
                }
                if (t.defaultPrevented || t.button !== 0 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
                Tr.current += 1, lr(null);
                let n = mi(e);
                n === void 0 || n.canAccessWithCurrentSession && e === E || (t.preventDefault(), ea(n, Fe(e, k)))
            }, t[132] = X, t[133] = k, t[134] = mi, t[135] = E, t[136] = Y, t[137] = ea, t[138] = Z, t[139] = ta) : ta = t[139];
            let na = ta,
                ra;
            t[140] !== Bn || t[141] !== Hn ? (ra = () => {
                !Bn && !Hn || (Vn(!1), Un(!1), Cr.current = !1, Gn(!1))
            }, t[140] = Bn, t[141] = Hn, t[142] = ra) : ra = t[142];
            let ia = ra,
                aa;
            t[143] !== T || t[144] !== V || t[145] !== E || t[146] !== Vr || t[147] !== ea || t[148] !== n.email ? (aa = (e, t) => {
                if (t !== void 0 && t.organizationId === e && (e !== E || !t.canAccessWithCurrentSession)) {
                    try {
                        window.sessionStorage.setItem(gn, JSON.stringify({
                            userEmail: n.email.trim().toLowerCase(),
                            organizationId: e
                        }))
                    } catch {}
                    ea(t);
                    return
                }
                let r = Vr.find(t => t.organizationId === e);
                e !== V && (yt(null), xt(null)), At(e), T?.(e), Xt(r?.requestedResearchMode ?? `research_non_zdr`), Qt([]), nn(``), xn([]), Cn(!1), Tn([]), Dn(``), kn(``), An(null), Mn(null), Fn([]), Ln(!1), zn(``), Vn(!1), Un(!1), Cr.current = !1, Gn(!1), vr(!1), rr(null), dr(!1), wr.current = !1, pr(null), J(``), xr.current = null
            }, t[143] = T, t[144] = V, t[145] = E, t[146] = Vr, t[147] = ea, t[148] = n.email, t[149] = aa) : aa = t[149];
            let oa = aa,
                sa;
            t[150] !== X || t[151] !== oa || t[152] !== mi || t[153] !== V || t[154] !== Y || t[155] !== Z ? (sa = e => {
                Y || X || Z || e === V || (Dr.current = !0, Nr(), Tr.current += 1, Er.current = !1, lr(null), oa(e, mi(e)))
            }, t[150] = X, t[151] = oa, t[152] = mi, t[153] = V, t[154] = Y, t[155] = Z, t[156] = sa) : sa = t[156];
            let ca = sa,
                la;
            t[157] !== gi || t[158] !== O || t[159] !== V || t[160] !== N || t[161] !== P || t[162] !== u || t[163] !== ca ? (la = () => {
                if (Dr.current || !O || V || Er.current || N || P !== `verified`) return;
                let e = u.find(e => e.id === O);
                e && gi(e) && ca(e.id)
            }, t[157] = gi, t[158] = O, t[159] = V, t[160] = N, t[161] = P, t[162] = u, t[163] = ca, t[164] = la) : la = t[164];
            let ua = (0, W.useEffectEvent)(la),
                da;
            t[165] === ua ? da = t[166] : (da = () => {
                let e = !1;
                return queueMicrotask(() => {
                    e || ua()
                }), () => {
                    e = !0
                }
            }, t[165] = ua, t[166] = da);
            let fa;
            t[167] !== O || t[168] !== N || t[169] !== P || t[170] !== u ? (fa = [O, N, P, u], t[167] = O, t[168] = N, t[169] = P, t[170] = u, t[171] = fa) : fa = t[171], (0, W.useEffect)(da, fa);
            let pa;
            t[172] !== oa || t[173] !== b ? (pa = e => {
                let t = b;
                if (t === void 0) return !1;
                if (jr.current.has(e)) return !0;
                jr.current.add(e);
                let n = Tr.current;
                return Promise.resolve().then(() => {
                    if (!(n !== Tr.current || Er.current)) return lr(e), t(e)
                }).then(t => {
                    n === Tr.current && !Er.current && t?.organizationId === e && oa(e, t)
                }).catch(on).finally(() => {
                    jr.current.delete(e), n === Tr.current && lr(t => t === e ? null : t)
                }), !0
            }, t[172] = oa, t[173] = b, t[174] = pa) : pa = t[174];
            let ma = pa,
                ha;
            t[175] !== b || t[176] !== V || t[177] !== ma || t[178] !== Kt || t[179] !== $?.requestedResearchMode || t[180] !== H?.hasDirectApiMembership || t[181] !== E ? (ha = () => {
                !V || V === E || H?.hasDirectApiMembership !== !0 || Er.current || Kt !== ($?.requestedResearchMode ?? `research_non_zdr`) || kr.current.has(V) || b !== void 0 && (kr.current.add(V), ma(V))
            }, t[175] = b, t[176] = V, t[177] = ma, t[178] = Kt, t[179] = $?.requestedResearchMode, t[180] = H?.hasDirectApiMembership, t[181] = E, t[182] = ha) : ha = t[182];
            let ga = (0, W.useEffectEvent)(ha),
                _a;
            t[183] !== M || t[184] !== ga || t[185] !== z ? (_a = () => {
                z === 0 && M && ga()
            }, t[183] = M, t[184] = ga, t[185] = z, t[186] = _a) : _a = t[186];
            let va = $?.requestedResearchMode,
                ya = H?.hasDirectApiMembership,
                ba;
            t[187] !== M || t[188] !== V || t[189] !== Kt || t[190] !== E || t[191] !== z || t[192] !== va || t[193] !== ya ? (ba = [M, V, Kt, va, ya, E, z], t[187] = M, t[188] = V, t[189] = Kt, t[190] = E, t[191] = z, t[192] = va, t[193] = ya, t[194] = ba) : ba = t[194], (0, W.useEffect)(_a, ba);
            let xa;
            t[195] !== M || t[196] !== S || t[197] !== V || t[198] !== ma || t[199] !== Kt || t[200] !== $?.requestedResearchMode || t[201] !== H?.hasDirectApiMembership || t[202] !== E || t[203] !== z ? (xa = () => {
                S === void 0 ? window.location.reload() : z === 0 && M && !Er.current && V !== E && H?.hasDirectApiMembership === !0 && Kt === ($?.requestedResearchMode ?? `research_non_zdr`) && ma(V) ? S({
                    workspaceAlreadyRefreshed: !0
                }) : S(Er.current ? {
                    preserveApplicationDraft: !0
                } : void 0)
            }, t[195] = M, t[196] = S, t[197] = V, t[198] = ma, t[199] = Kt, t[200] = $?.requestedResearchMode, t[201] = H?.hasDirectApiMembership, t[202] = E, t[203] = z, t[204] = xa) : xa = t[204];
            let Sa = xa,
                Ca = () => vn(Ye.current),
                wa;
            t[205] !== Pn.length || t[206] !== q || t[207] !== Bn || t[208] !== Hn || t[209] !== Sn || t[210] !== Zr || t[211] !== P || t[212] !== En || t[213] !== Ct || t[214] !== Ve || t[215] !== On || t[216] !== U || t[217] !== en || t[218] !== bn.length || t[219] !== H || t[220] !== K || t[221] !== z ? (wa = () => {
                if ((z === 0 || z === -1) && Zr != null) return Zr;
                if (z === -1) {
                    if (P !== `verified` || H?.submissionEligible !== !0) return L.organizationNotEligible;
                    if (!Ct) return L.personaRequired
                }
                if (z === 0) {
                    if (!H) return L.organizationRequired;
                    if (H.submissionEligible === !1 || Ve && (P !== `verified` || H.submissionEligible !== !0)) return L.organizationNotEligible
                }
                if (z === 1) {
                    if (U.length === 0) return L.productRequired;
                    if (Array.from(en.trim()).length < Be.researchPurpose.min) return L.researchPurposeRequired;
                    if (bn.length === 0) return L.researchScopeRequired
                }
                if (z === 2) {
                    if (!On) return L.countryRequired;
                    if (!q) return L.additionalLocationsRequired;
                    if (q === `yes` && Pn.length === 0) return L.additionalCountriesRequired;
                    if (!Sn) return L.safeguardsRequired;
                    if (K.includes(`other`) && !En.trim()) return L.otherSafeguardsRequired
                }
                if (z === 3) {
                    if (!Bn) return L.accuracyRequired;
                    if (!Hn) return L.authorityRequired
                }
                return null
            }, t[205] = Pn.length, t[206] = q, t[207] = Bn, t[208] = Hn, t[209] = Sn, t[210] = Zr, t[211] = P, t[212] = En, t[213] = Ct, t[214] = Ve, t[215] = On, t[216] = U, t[217] = en, t[218] = bn.length, t[219] = H, t[220] = K, t[221] = z, t[222] = wa) : wa = t[222];
            let Ta = wa,
                Ea = () => {
                    if (z === 0 && (Z || jr.current.has(V))) return;
                    let e = Ta();
                    if (e) {
                        F({
                            surface: `FORM`,
                            action: `ADVANCE`,
                            result: `BLOCKED`,
                            step: z,
                            failureReason: e === Zr ? `UNAVAILABLE` : e === L.organizationNotEligible ? `ORGANIZATION_UNAVAILABLE` : `VALIDATION`,
                            validationDetails: e === Zr ? void 0 : Rt(e)
                        }), J(I.formatMessage(e));
                        return
                    }
                    F({
                        surface: `FORM`,
                        action: `ADVANCE`,
                        result: `SUCCEEDED`,
                        step: z
                    }), J(``), Er.current = !0, Tr.current += 1, B(e => Vt && e === 0 ? -1 : e === -1 ? 1 : Math.min(e + 1, mt.length - 1)), Ca()
                },
                Da;
            t[223] !== Sn || t[224] !== I || t[225] !== N || t[226] !== P || t[227] !== $ || t[228] !== H || t[229] !== z || t[230] !== A || t[231] !== Y || t[232] !== Ta ? (Da = e => {
                if (e.preventDefault(), z !== mt.length - 1) return;
                if ($ != null) {
                    J(I.formatMessage(L.applicationConflict, {
                        organizationId: $.organizationId
                    }));
                    return
                }
                if (H?.submissionEligible === !1) {
                    F({
                        surface: `FORM`,
                        action: `SUBMISSION_CONFIRMATION`,
                        result: `BLOCKED`,
                        step: z,
                        failureReason: `ORGANIZATION_UNAVAILABLE`
                    }), J(I.formatMessage(L.organizationNotEligible));
                    return
                }
                if (!A || N || P !== `verified` || H?.submissionEligible !== !0) {
                    F({
                        surface: `FORM`,
                        action: `SUBMISSION_CONFIRMATION`,
                        result: `BLOCKED`,
                        step: z,
                        failureReason: `UNAVAILABLE`
                    }), J(I.formatMessage(L.submissionUnavailable));
                    return
                }
                let t = Ta();
                if (t) {
                    F({
                        surface: `FORM`,
                        action: `SUBMISSION_CONFIRMATION`,
                        result: `BLOCKED`,
                        step: z,
                        failureReason: `VALIDATION`,
                        validationDetails: Rt(t)
                    }), J(I.formatMessage(t));
                    return
                }
                if (!Sn) {
                    F({
                        surface: `FORM`,
                        action: `SUBMISSION_CONFIRMATION`,
                        result: `BLOCKED`,
                        step: z,
                        failureReason: `VALIDATION`,
                        validationDetails: [{
                            field: `confirmResearchSafeguards`,
                            issue: `REQUIRED`
                        }]
                    }), J(I.formatMessage(L.safeguardsRequired));
                    return
                }
                Y || !H || (J(``), Gn(!0))
            }, t[223] = Sn, t[224] = I, t[225] = N, t[226] = P, t[227] = $, t[228] = H, t[229] = z, t[230] = A, t[231] = Y, t[232] = Ta, t[233] = Da) : Da = t[233];
            let Oa = Da,
                ka = async (e, t, n, r) => {
                    if (lt.current !== e) return;
                    if (!Nt.test(t) || !Pt.test(n) || r !== void 0 && !Ft.test(r)) {
                        J(I.formatMessage(L.businessVerificationUnavailable)), or(!1);
                        return
                    }
                    or(!0);
                    let i = () => {
                        lt.current === e && Nr()
                    };
                    try {
                        let a = await ge({
                            inquiryId: t,
                            environmentId: n,
                            ...r === void 0 ? {} : {
                                sessionToken: r
                            },
                            onCancel: i,
                            onComplete: () => {
                                lt.current === e && (i(), w?.())
                            },
                            onError: () => {
                                lt.current === e && (i(), J(I.formatMessage(L.businessVerificationUnavailable)))
                            }
                        }, () => lt.current === e, `persona.rosalind_kyb.flow`);
                        if (lt.current !== e) {
                            a.destroy();
                            return
                        }
                        ct.current = a, or(!1)
                    } catch {
                        lt.current === e && (J(I.formatMessage(L.businessVerificationUnavailable)), or(!1))
                    }
                }, Aa;
            t[234] !== I || t[235] !== w || t[236] !== P || t[237] !== Jn || t[238] !== $ || t[239] !== H?.submissionEligible || t[240] !== A || t[241] !== He ? (Aa = async () => {
                let e = $;
                if (Jn || !A || P !== `verified` || H?.submissionEligible !== !0 || e == null) return;
                let t = Tr.current;
                Yn(!0), J(``);
                let n = !1;
                try {
                    let t = await fetch(He, {
                        method: `POST`,
                        credentials: `same-origin`,
                        cache: `no-store`,
                        headers: {
                            "Content-Type": `application/json`
                        },
                        body: JSON.stringify({
                            intent: `retry_workflow`,
                            organizationId: e.organizationId,
                            bioagentsApplicationReference: e.bioagentsApplicationReference
                        })
                    });
                    if (t.status === 202 && !t.redirected) {
                        let e = await t.json();
                        n = typeof e == `object` && !!e && `retryRequested` in e && e.retryRequested === !0
                    }
                } catch {}
                Yn(!1), t === Tr.current && (n ? (h().info(I.formatMessage(L.retryWorkflowRequested)), w?.()) : J(I.formatMessage(L.retryWorkflowFailed)))
            }, t[234] = I, t[235] = w, t[236] = P, t[237] = Jn, t[238] = $, t[239] = H?.submissionEligible, t[240] = A, t[241] = He, t[242] = Aa) : Aa = t[242];
            let ja = Aa,
                Ma = async e => {
                    if (ar || X || P !== `verified` || !Jt(e)) return;
                    let t = Nr();
                    or(!0), J(``);
                    try {
                        let n = await fetch(He, {
                            method: `POST`,
                            headers: {
                                "Content-Type": `application/json`
                            },
                            body: JSON.stringify({
                                intent: `resume_verification`,
                                organizationId: e.organizationId,
                                bioagentsApplicationReference: e.bioagentsApplicationReference
                            }),
                            credentials: `same-origin`,
                            cache: `no-store`
                        });
                        if (lt.current !== t) return;
                        if (n.redirected) {
                            let e = new URL(n.url, window.location.origin);
                            if (e.origin === window.location.origin && e.pathname === `/auth/login`) {
                                let t = Me(window.location.pathname) ? `${window.location.pathname}${window.location.search}${window.location.hash}` : We;
                                e.searchParams.set(`next`, t), or(!1), window.location.assign(`${e.pathname}${e.search}${e.hash}`);
                                return
                            }
                            J(I.formatMessage(L.businessVerificationUnavailable)), or(!1);
                            return
                        }
                        let r = await n.json();
                        if (lt.current !== t) return;
                        if (!n.ok || typeof r != `object` || !r || !(`organizationId` in r) || r.organizationId !== e.organizationId || !(`bioagentsApplicationReference` in r) || r.bioagentsApplicationReference !== e.bioagentsApplicationReference || `kybStatus` in r && r.kybStatus !== void 0 && r.kybStatus !== `pending` && r.kybStatus !== `in_progress` || !(`personaInquiryId` in r) || typeof r.personaInquiryId != `string` || !Nt.test(r.personaInquiryId) || !(`personaEnvironmentId` in r) || typeof r.personaEnvironmentId != `string` || !Pt.test(r.personaEnvironmentId) || !(`personaSessionToken` in r) || typeof r.personaSessionToken != `string` || !Ft.test(r.personaSessionToken)) {
                            J(I.formatMessage(L.businessVerificationUnavailable)), or(!1);
                            return
                        }
                        await ka(t, r.personaInquiryId, r.personaEnvironmentId, r.personaSessionToken)
                    } catch {
                        lt.current === t && (J(I.formatMessage(L.businessVerificationUnavailable)), or(!1))
                    }
                }, Na;
            t[243] === z ? Na = t[244] : (Na = () => {
                Cr.current || (Cr.current = !0, F({
                    surface: `FORM`,
                    action: `SUBMISSION_CONFIRMATION`,
                    result: `STARTED`,
                    step: z
                }))
            }, t[243] = z, t[244] = Na);
            let Pa = Na,
                Fa;
            t[245] === z ? Fa = t[246] : (Fa = e => {
                Cr.current && (Cr.current = !1, F({
                    surface: `FORM`,
                    action: `SUBMISSION_CONFIRMATION`,
                    result: e,
                    step: z
                })), Gn(!1)
            }, t[245] = z, t[246] = Fa);
            let Ia = Fa,
                La;
            t[247] === Symbol.for(`react.memo_cache_sentinel`) ? (La = e => {
                wr.current && (wr.current = !1, F({
                    surface: `FORM`,
                    action: `CANCELLATION_CONFIRMATION`,
                    result: e
                }))
            }, t[247] = La) : La = t[247];
            let Ra = La,
                za = async () => {
                    if ($ != null) {
                        J(I.formatMessage(L.applicationConflict, {
                            organizationId: $.organizationId
                        }));
                        return
                    }
                    if (Y || z !== mt.length - 1 || !A || N || P !== `verified` || q === null || !H || H.submissionEligible !== !0 || !Sn || !Bn || !Hn) {
                        Y || (F({
                            surface: `FORM`,
                            action: `SUBMIT`,
                            result: `BLOCKED`,
                            step: z,
                            failureReason: `UNAVAILABLE`,
                            submissionAttemptId: xr.current?.attemptId ?? zt()
                        }), J(I.formatMessage(L.submissionUnavailable)));
                        return
                    }
                    let e = {
                        organizationId: H.id,
                        requestedResearchMode: Kt,
                        products: U,
                        researchPurpose: en.trim(),
                        researchScopes: bn,
                        primaryCountry: On,
                        additionalLocations: q,
                        ...q === `yes` ? {
                            additionalCountries: Pn
                        } : {},
                        confirmResearchSafeguards: Sn,
                        selectedSafeguards: K,
                        ...K.includes(`other`) ? {
                            otherSafeguardDetails: En.trim()
                        } : {},
                        certifyAccuracy: Bn,
                        certifyAuthority: Hn
                    };
                    if (!tt(e)) {
                        let t = [];
                        try {
                            t = qe(e)
                        } catch {}
                        F({
                            surface: `FORM`,
                            action: `SUBMIT`,
                            result: `BLOCKED`,
                            step: z,
                            failureReason: `VALIDATION`,
                            submissionAttemptId: zt(),
                            validationDetails: t
                        }), J(I.formatMessage(L.submissionFailed));
                        return
                    }
                    let t = JSON.stringify(e),
                        n = xr.current;
                    if (!n || n.payload !== t) {
                        if (typeof globalThis.crypto?.randomUUID != `function`) {
                            F({
                                surface: `FORM`,
                                action: `SUBMIT`,
                                result: `BLOCKED`,
                                step: z,
                                failureReason: `SECURE_SUBMISSION_UNAVAILABLE`
                            }), J(I.formatMessage(L.secureSubmissionFailed));
                            return
                        }
                        n = {
                            formSchemaVersion: Ge?.discoveryApplications ? st : et,
                            key: globalThis.crypto.randomUUID(),
                            attemptId: zt(),
                            payload: t
                        }, xr.current = n
                    }
                    let r = Nr();
                    qn(!0), J(``), F({
                        surface: `FORM`,
                        action: `SUBMIT`,
                        result: `STARTED`,
                        step: z,
                        submissionAttemptId: n.attemptId
                    });
                    let i = !1,
                        a;
                    try {
                        let e = await fetch(He, {
                            method: `POST`,
                            headers: {
                                "Content-Type": `application/json`,
                                "Idempotency-Key": n.key,
                                "X-Rosalind-Form-Schema-Version": n.formSchemaVersion,
                                ...Ve && bt !== null ? {
                                    "X-Rosalind-Persona-Inquiry-Id": bt.inquiryId
                                } : {},
                                ...n.attemptId === void 0 ? {} : {
                                    "X-Client-Request-Id": n.attemptId
                                }
                            },
                            body: n.payload,
                            credentials: `same-origin`,
                            cache: `no-store`
                        });
                        if (lt.current !== r) return;
                        if (a = e.status, e.redirected) {
                            let t = new URL(e.url, window.location.origin);
                            if (t.origin === window.location.origin && t.pathname === `/auth/login`) {
                                let e = Me(window.location.pathname) ? `${window.location.pathname}${window.location.search}${window.location.hash}` : We;
                                t.searchParams.set(`next`, e), qn(!1), F({
                                    surface: `FORM`,
                                    action: `SUBMIT`,
                                    result: `BLOCKED`,
                                    step: z,
                                    failureReason: `AUTHENTICATION_REQUIRED`,
                                    submissionAttemptId: n.attemptId
                                }), window.location.assign(`${t.pathname}${t.search}${t.hash}`);
                                return
                            }
                            F({
                                surface: `FORM`,
                                action: `SUBMIT`,
                                result: `FAILED`,
                                step: z,
                                failureReason: `INVALID_RESPONSE`,
                                submissionAttemptId: n.attemptId,
                                httpStatus: e.status
                            }), J(I.formatMessage(L.submissionFailed)), qn(!1);
                            return
                        }
                        i = !0;
                        let t = await e.json();
                        if (lt.current !== r) return;
                        if (i = !1, !e.ok) {
                            let r = typeof t == `object` && t ? t : null;
                            if (F({
                                    surface: `FORM`,
                                    action: `SUBMIT`,
                                    result: r?.code === `application_conflict` ? `BLOCKED` : `FAILED`,
                                    step: z,
                                    failureReason: it(r?.code),
                                    submissionAttemptId: n.attemptId,
                                    httpStatus: e.status
                                }), r?.code === `application_conflict`) {
                                if (r.organizationId === H.id && typeof r.bioagentsApplicationReference == `string` && /^[0-9a-f]{64}$/.test(r.bioagentsApplicationReference) && Re(r.state) && typeof r.canCancel == `boolean` && (r.canResumeVerification === void 0 || typeof r.canResumeVerification == `boolean`) && (r.kybStatus === void 0 || qt(r.kybStatus))) {
                                    let e = {
                                        organizationId: H.id,
                                        state: r.state,
                                        bioagentsApplicationReference: r.bioagentsApplicationReference,
                                        canCancel: r.canCancel,
                                        canResumeVerification: r.canResumeVerification === !0,
                                        requestedResearchMode: ht.find(e => e.id === r.requestedResearchMode)?.id ?? `research_non_zdr`,
                                        ...r.kybStatus === void 0 ? {} : {
                                            kybStatus: r.kybStatus
                                        }
                                    };
                                    Qn(t => [...t.filter(e => e.organizationId !== H.id), e]), Xt(e.requestedResearchMode ?? `research_non_zdr`), B(0), Ca()
                                }
                                J(I.formatMessage(L.applicationConflict, {
                                    organizationId: H.id
                                })), qn(!1);
                                return
                            }
                            r?.code === `idempotency_conflict` && (xr.current = null);
                            let i = r?.code === `organization_unavailable` ? L.organizationUnavailable : r?.code === `application_unprocessable` ? L.applicationUnprocessable : r?.code === `application_history_limit` ? L.applicationHistoryLimit : L.submissionFailed;
                            J(I.formatMessage(i)), qn(!1);
                            return
                        }
                        let o = typeof t == `object` && t ? t : null;
                        if (!o || !Re(o.state) || o.organizationId !== H.id || typeof o.bioagentsApplicationReference != `string` || !/^[0-9a-f]{64}$/.test(o.bioagentsApplicationReference) || typeof o.canCancel != `boolean` || o.canResumeVerification !== void 0 && typeof o.canResumeVerification != `boolean` || o.requestedResearchMode !== void 0 && o.requestedResearchMode !== Kt || o.kybStatus !== void 0 && !qt(o.kybStatus) || o.personaInquiryId !== void 0 && (typeof o.personaInquiryId != `string` || !Nt.test(o.personaInquiryId)) || o.personaEnvironmentId !== void 0 && (typeof o.personaEnvironmentId != `string` || !Pt.test(o.personaEnvironmentId)) || o.personaInquiryId === void 0 != (o.personaEnvironmentId === void 0)) {
                            F({
                                surface: `FORM`,
                                action: `SUBMIT`,
                                result: `FAILED`,
                                step: z,
                                failureReason: `INVALID_RESPONSE`,
                                submissionAttemptId: n.attemptId,
                                httpStatus: e.status
                            }), J(I.formatMessage(L.submissionUnconfirmed)), qn(!1);
                            return
                        }
                        let s = {
                            organizationId: H.id,
                            state: o.state,
                            bioagentsApplicationReference: o.bioagentsApplicationReference,
                            canCancel: o.canCancel,
                            canResumeVerification: o.canResumeVerification === !0,
                            requestedResearchMode: Kt,
                            ...o.kybStatus === void 0 ? {} : {
                                kybStatus: o.kybStatus
                            },
                            ...o.personaInquiryId === void 0 ? {} : {
                                personaInquiryId: o.personaInquiryId,
                                personaEnvironmentId: o.personaEnvironmentId
                            },
                            ...o.state === `action_required` && o.actionOwner === `applicant` && typeof o.requiredAction == `string` && /^[a-z][a-z0-9_]{0,127}$/.test(o.requiredAction) ? {
                                requiredAction: o.requiredAction,
                                actionOwner: `applicant`
                            } : {}
                        };
                        F({
                            surface: `FORM`,
                            action: `SUBMIT`,
                            result: `SUCCEEDED`,
                            step: z,
                            submissionAttemptId: n.attemptId
                        }), rr(s), Qn(e => [...e.filter(e => e.organizationId !== s.organizationId), s]), qn(!1), Ca(), s.personaInquiryId !== void 0 && s.personaEnvironmentId !== void 0 && await ka(r, s.personaInquiryId, s.personaEnvironmentId)
                    } catch (e) {
                        let t = e;
                        F({
                            surface: `FORM`,
                            action: `SUBMIT`,
                            result: `FAILED`,
                            step: z,
                            failureReason: i ? `INVALID_RESPONSE` : `REQUEST_FAILED`,
                            submissionAttemptId: n.attemptId,
                            httpStatus: a,
                            error: t
                        }), lt.current === r && (J(I.formatMessage(L.submissionFailed)), qn(!1))
                    }
                }, Ba = async () => {
                    if (X || ar || N || P !== `verified` || fr === null) return;
                    let {
                        application: e,
                        organization: t
                    } = fr;
                    if (!e.canCancel) {
                        F({
                            surface: `FORM`,
                            action: `CANCEL`,
                            result: `BLOCKED`,
                            failureReason: `CANCELLATION_FORBIDDEN`
                        }), J(I.formatMessage(L.cancellationForbidden));
                        return
                    }
                    Nr(), ir(!0), J(``), F({
                        surface: `FORM`,
                        action: `CANCEL`,
                        result: `STARTED`
                    });
                    let n = !1;
                    try {
                        let r = await fetch(He, {
                            method: `POST`,
                            headers: {
                                "Content-Type": `application/json`
                            },
                            body: JSON.stringify({
                                intent: `cancel`,
                                organizationId: t.id,
                                bioagentsApplicationReference: e.bioagentsApplicationReference
                            }),
                            credentials: `same-origin`,
                            cache: `no-store`
                        });
                        if (r.redirected) {
                            let e = new URL(r.url, window.location.origin);
                            if (e.origin === window.location.origin && e.pathname === `/auth/login`) {
                                let t = Me(window.location.pathname) ? `${window.location.pathname}${window.location.search}${window.location.hash}` : We;
                                e.searchParams.set(`next`, t), ir(!1), F({
                                    surface: `FORM`,
                                    action: `CANCEL`,
                                    result: `BLOCKED`,
                                    failureReason: `AUTHENTICATION_REQUIRED`
                                }), window.location.assign(`${e.pathname}${e.search}${e.hash}`);
                                return
                            }
                            F({
                                surface: `FORM`,
                                action: `CANCEL`,
                                result: `FAILED`,
                                failureReason: `INVALID_RESPONSE`
                            }), J(I.formatMessage(L.cancellationFailed)), ir(!1);
                            return
                        }
                        n = !0;
                        let i = await r.json();
                        n = !1;
                        let a = typeof i == `object` && i ? i : null;
                        if (!r.ok) {
                            F({
                                surface: `FORM`,
                                action: `CANCEL`,
                                result: a?.code === `cancellation_forbidden` ? `BLOCKED` : `FAILED`,
                                failureReason: it(a?.code)
                            }), J(I.formatMessage(a?.code === `cancellation_forbidden` ? L.cancellationForbidden : a?.code === `organization_unavailable` ? L.organizationUnavailable : L.cancellationFailed)), ir(!1);
                            return
                        }
                        if (a?.state !== `canceled` || a.organizationId !== t.id || a.bioagentsApplicationReference !== e.bioagentsApplicationReference || a.canCancel !== !1) {
                            F({
                                surface: `FORM`,
                                action: `CANCEL`,
                                result: `FAILED`,
                                failureReason: `INVALID_RESPONSE`
                            }), J(I.formatMessage(L.cancellationFailed)), ir(!1);
                            return
                        }
                        F({
                            surface: `FORM`,
                            action: `CANCEL`,
                            result: `SUCCEEDED`
                        }), Qn(n => n.filter(n => n.organizationId !== t.id || n.bioagentsApplicationReference !== e.bioagentsApplicationReference)), tr(n => [...n.filter(t => t.bioagentsApplicationReference !== e.bioagentsApplicationReference), {
                            organizationId: t.id,
                            state: `canceled`,
                            bioagentsApplicationReference: e.bioagentsApplicationReference,
                            canCancel: !1
                        }]), rr(null), wr.current = !1, pr(null), dr(!0), Xt(`research_non_zdr`), Qt([]), nn(``), xn([]), Cn(!1), Tn([]), Dn(``), kn(``), An(null), Fn([]), Ln(!1), zn(``), Vn(!1), Un(!1), Cr.current = !1, Gn(!1), yt(null), xt(null), B(0), xr.current = null, Ca(), ir(!1)
                    } catch {
                        F({
                            surface: `FORM`,
                            action: `CANCEL`,
                            result: `FAILED`,
                            failureReason: n ? `INVALID_RESPONSE` : `REQUEST_FAILED`
                        }), J(I.formatMessage(L.cancellationFailed)), ir(!1)
                    }
                }, Va;
            t[248] === Symbol.for(`react.memo_cache_sentinel`) ? (Va = (e, t) => {
                xn(n => t ? e === `none` ? [`none`] : [...new Set([...n.filter(sn), e])] : n.filter(t => t !== e)), J(``)
            }, t[248] = Va) : Va = t[248];
            let Ha = Va,
                Ua;
            t[249] === Symbol.for(`react.memo_cache_sentinel`) ? (Ua = (e, t) => {
                Tn(n => t ? [...new Set([...n, e])] : n.filter(t => t !== e)), e === `other` && !t && Dn(``), J(``)
            }, t[249] = Ua) : Ua = t[249];
            let Wa = Ua,
                Ga = () => (0, G.jsxs)(`div`, {
                    className: R.reviewCard,
                    children: [Q && (0, G.jsx)(Dt, {
                        label: L.confirmationReferenceLabel,
                        children: Q.bioagentsApplicationReference
                    }), (0, G.jsx)(Dt, {
                        label: L.primaryContact,
                        children: zi
                    }), (0, G.jsx)(Dt, {
                        label: L.contactEmail,
                        children: n.email
                    }), (0, G.jsx)(Dt, {
                        label: L.summaryOrganization,
                        children: H ? I.formatMessage(L.organizationDisplayName, {
                            name: H.name,
                            id: H.id
                        }) : I.formatMessage(L.noOrganizations)
                    }), (0, G.jsx)(Dt, {
                        label: L.summaryResearchMode,
                        children: (0, G.jsx)(D, {
                            ...Kt === `research_zdr` ? L.zdrResearchMode : L.nonZdrResearchMode
                        })
                    }), (0, G.jsx)(Dt, {
                        label: L.businessVerification,
                        children: (0, G.jsx)(D, {
                            ...L.verificationDuringReview
                        })
                    }), (0, G.jsx)(Dt, {
                        label: L.requestedAccess,
                        children: wi.map(e => I.formatMessage(e.title)).join(` · `)
                    }), (0, G.jsx)(Dt, {
                        label: L.summaryScope,
                        children: Ei.map(e => I.formatMessage(e.title)).join(` · `)
                    }), (0, G.jsx)(Dt, {
                        label: L.summaryPrimaryLocation,
                        children: Ai
                    }), (0, G.jsx)(Dt, {
                        label: L.summaryAdditionalLocations,
                        children: q === `no` ? (0, G.jsx)(D, {
                            ...L.none
                        }) : q === `unsure` ? (0, G.jsx)(D, {
                            ...L.additionalLocationsUnconfirmed
                        }) : (0, G.jsx)(D, {
                            ...L.policyReviewRequired,
                            values: {
                                locations: I.formatList(Mi)
                            }
                        })
                    }), (0, G.jsx)(Dt, {
                        label: L.summarySafeguards,
                        children: (0, G.jsx)(D, {
                            ...L.safeguardsConfirmed
                        })
                    }), Oi.length > 0 && (0, G.jsx)(Dt, {
                        label: L.safeguardsInPlace,
                        children: Oi.map(e => I.formatMessage(e.title)).join(` · `)
                    }), K.includes(`other`) && (0, G.jsx)(Dt, {
                        label: L.otherSafeguardsSummary,
                        children: En.trim()
                    }), (0, G.jsx)(Dt, {
                        label: L.researchPurposeSummary,
                        children: en
                    })]
                }),
                Ka = cn,
                qa = e => P !== `verified` || !Jt(e) ? null : (0, G.jsx)(`button`, {
                    className: C(`interactive-button`, `interactive-button-primary`, R.button),
                    disabled: ar || X,
                    onClick: () => {
                        Ma(e)
                    },
                    type: `button`,
                    children: (0, G.jsx)(D, {
                        ...ar ? L.resumingBusinessVerification : L.resumeBusinessVerification
                    })
                }),
                Ja = (e, t) => P !== `verified` || N || !mn.has(e.state) || !e.canCancel ? null : fr?.application.organizationId === e.organizationId && fr.application.bioagentsApplicationReference === e.bioagentsApplicationReference ? (0, G.jsx)(`section`, {
                    "aria-describedby": hr,
                    "aria-labelledby": mr,
                    className: R.warningBanner,
                    role: `alertdialog`,
                    children: (0, G.jsxs)(`div`, {
                        children: [(0, G.jsx)(`h2`, {
                            className: R.sectionLabel,
                            id: mr,
                            children: (0, G.jsx)(D, {
                                ...L.cancelApplicationHeading
                            })
                        }), (0, G.jsx)(`p`, {
                            id: hr,
                            children: (0, G.jsx)(D, {
                                ...L.cancelApplicationDescription,
                                values: {
                                    organizationName: t.name,
                                    organizationId: t.id
                                }
                            })
                        }), (0, G.jsx)(`p`, {
                            children: (0, G.jsx)(D, {
                                ...L.cancelApplicationReference,
                                values: {
                                    applicationReference: e.bioagentsApplicationReference
                                }
                            })
                        }), (0, G.jsxs)(`div`, {
                            className: R.buttonRow,
                            children: [(0, G.jsx)(`button`, {
                                className: C(`interactive-button`, `interactive-button-secondary`, R.button),
                                disabled: X,
                                ref: Qe,
                                onClick: () => {
                                    Ra(`CANCELLED`), J(``), pr(null)
                                },
                                type: `button`,
                                children: (0, G.jsx)(D, {
                                    ...L.keepApplication
                                })
                            }), (0, G.jsx)(`button`, {
                                className: C(`interactive-button`, `interactive-button-destructive`, R.button),
                                disabled: X || ar,
                                onClick: () => {
                                    Ra(`SUCCEEDED`), Ba()
                                },
                                type: `button`,
                                children: (0, G.jsx)(D, {
                                    ...X ? L.cancelingApplication : L.confirmCancellation
                                })
                            })]
                        })]
                    })
                }) : (0, G.jsx)(`button`, {
                    className: C(`interactive-button`, `interactive-button-sec-destructive`, R.button),
                    disabled: X || ar,
                    id: gr,
                    onClick: () => {
                        wr.current || (wr.current = !0, F({
                            surface: `FORM`,
                            action: `CANCELLATION_CONFIRMATION`,
                            result: `STARTED`
                        })), J(``), dr(!1), pr({
                            application: e,
                            organization: t
                        })
                    },
                    type: `button`,
                    children: (0, G.jsx)(D, {
                        ...L.cancelApplication
                    })
                }),
                Ya = () => (0, G.jsxs)(`section`, {
                    className: R.compactReviewCard,
                    children: [(0, G.jsxs)(`div`, {
                        className: R.compactReviewHeader,
                        children: [(0, G.jsx)(`h3`, {
                            className: R.fieldLabel,
                            children: (0, G.jsx)(D, {
                                ...L.applicationDetailsVisualHeading
                            })
                        }), (0, G.jsx)(`button`, {
                            className: R.compactReviewEdit,
                            onClick: () => {
                                J(``), B(0), Ca()
                            },
                            type: `button`,
                            children: (0, G.jsx)(D, {
                                ...L.editApplication
                            })
                        })]
                    }), (0, G.jsxs)(`dl`, {
                        className: R.compactReviewDetails,
                        children: [(0, G.jsx)(Ot, {
                            label: L.summaryOrganization,
                            children: H?.name ?? I.formatMessage(L.noOrganizations)
                        }), (0, G.jsx)(Ot, {
                            label: L.summaryResearchMode,
                            children: (0, G.jsx)(D, {
                                ...Kt === `research_zdr` ? L.zdrResearchMode : L.nonZdrResearchMode
                            })
                        }), (0, G.jsx)(Ot, {
                            label: L.requestedAccess,
                            children: wi.map(e => I.formatMessage(e.visualTitle)).join(`, `)
                        }), (0, G.jsx)(Ot, {
                            label: L.researchPurposeSummary,
                            children: en
                        }), (0, G.jsx)(Ot, {
                            label: L.summaryScope,
                            children: Ei.map(e => I.formatMessage(e.visualTitle)).join(`, `)
                        }), (0, G.jsxs)(Ot, {
                            label: L.accessLocationsVisualLabel,
                            children: [(0, G.jsx)(`span`, {
                                children: Ai
                            }), q === `yes` && Mi.length > 0 && (0, G.jsxs)(G.Fragment, {
                                children: [`, `, (0, G.jsx)(`span`, {
                                    children: I.formatList(Mi)
                                })]
                            }), q === `unsure` && (0, G.jsxs)(G.Fragment, {
                                children: [`, `, (0, G.jsx)(`span`, {
                                    children: (0, G.jsx)(D, {
                                        ...L.additionalLocationsUnconfirmed
                                    })
                                })]
                            })]
                        }), (0, G.jsx)(Ot, {
                            label: L.safeguardsVisualLabel,
                            children: Oi.length > 0 ? (0, G.jsxs)(G.Fragment, {
                                children: [(0, G.jsx)(`span`, {
                                    title: Oi.map(e => I.formatMessage(e.visualTitle)).join(`, `),
                                    children: (0, G.jsx)(D, {
                                        ...L.safeguardsSelectionCount,
                                        values: {
                                            count: Oi.length
                                        }
                                    })
                                }), K.includes(`other`) && (0, G.jsxs)(G.Fragment, {
                                    children: [` · `, (0, G.jsx)(`span`, {
                                        children: En.trim()
                                    })]
                                })]
                            }) : (0, G.jsx)(D, {
                                ...L.safeguardsVisualConfirmed
                            })
                        })]
                    })]
                }),
                Xa = he,
                Za;
            t[250] === I ? Za = t[251] : (Za = I.formatMessage(L.applicationLabel), t[250] = I, t[251] = Za);
            let Qa;
            t[252] === Symbol.for(`react.memo_cache_sentinel`) ? (Qa = C(R.root, `overflow-hidden`), t[252] = Qa) : Qa = t[252];
            let $a = ln,
                eo;
            t[253] !== le || t[254] !== X || t[255] !== c || t[256] !== k || t[257] !== I || t[258] !== fe || t[259] !== Y || t[260] !== Qi || t[261] !== ea || t[262] !== Z || t[263] !== n || t[264] !== me ? (eo = !k && (0, G.jsxs)(he.Header, {
                className: R.topbar,
                children: [(0, G.jsxs)(`div`, {
                    className: R.brandGroup,
                    children: [(0, G.jsxs)(`a`, {
                        "aria-label": I.formatMessage(L.homeLabel),
                        className: R.brand,
                        href: `/`,
                        children: [(0, G.jsx)(De, {
                            "aria-hidden": `true`,
                            className: R.brandMark
                        }), (0, G.jsx)(`span`, {
                            className: R.brandName,
                            children: (0, G.jsx)(D, {
                                ...L.brandName
                            })
                        })]
                    }), (0, G.jsx)(`span`, {
                        "aria-hidden": `true`,
                        className: R.brandDivider
                    }), (0, G.jsx)(`span`, {
                        className: R.productName,
                        children: (0, G.jsx)(D, {
                            ...L.productName
                        })
                    })]
                }), (0, G.jsx)(`div`, {
                    className: R.headerActions,
                    children: (0, G.jsx)(Ae, {
                        accountSwitchingEnabled: le,
                        currentWorkspaceAccountId: c,
                        disabled: Y || X || Z,
                        onBeforeSignOut: Nr,
                        onSwitchAccount: Qi,
                        onSwitchWorkspace: ea,
                        savedAccountSwitchSessions: fe,
                        user: n,
                        workspaceAccounts: me
                    })
                })]
            }), t[253] = le, t[254] = X, t[255] = c, t[256] = k, t[257] = I, t[258] = fe, t[259] = Y, t[260] = Qi, t[261] = ea, t[262] = Z, t[263] = n, t[264] = me, t[265] = eo) : eo = t[265];
            let to = he,
                no;
            t[266] === Symbol.for(`react.memo_cache_sentinel`) ? (no = C(R.layout, R.mainPanel), t[266] = no) : no = t[266];
            let ro = Q && R.submittedIntro,
                io;
            t[267] === ro ? io = t[268] : (io = C(R.pageIntro, ro), t[267] = ro, t[268] = io);
            let ao;
            t[269] === Q ? ao = t[270] : (ao = Q && (0, G.jsx)(`span`, {
                "aria-hidden": `true`,
                className: R.successMark,
                children: (0, G.jsx)(Oe, {})
            }), t[269] = Q, t[270] = ao);
            let oo = Q ? L.submittedHeading : L.pageTitle,
                so;
            t[271] === oo ? so = t[272] : (so = (0, G.jsx)(`h1`, {
                className: R.pageTitle,
                children: (0, G.jsx)(D, {
                    ...oo
                })
            }), t[271] = oo, t[272] = so);
            let co = Q ? L.submittedDescription : L.pageDescription,
                lo;
            t[273] === co ? lo = t[274] : (lo = (0, G.jsx)(`p`, {
                className: R.pageDescription,
                children: (0, G.jsx)(D, {
                    ...co
                })
            }), t[273] = co, t[274] = lo);
            let uo;
            t[275] !== io || t[276] !== ao || t[277] !== so || t[278] !== lo ? (uo = (0, G.jsxs)(`div`, {
                className: io,
                children: [ao, so, lo]
            }), t[275] = io, t[276] = ao, t[277] = so, t[278] = lo, t[279] = uo) : uo = t[279];
            let fo = !Q && (0, G.jsx)(`nav`, {
                    "aria-label": I.formatMessage(L.applicationProgress),
                    className: R.progress,
                    children: (0, G.jsx)(`ol`, {
                        className: R.stepList,
                        children: Ht.map((e, t) => {
                            let n = Vt ? t === 0 ? 0 : t === 1 ? -1 : t - 1 : t,
                                r = t < Ut ? `complete` : t === Ut ? `active` : `upcoming`;
                            return (0, G.jsx)(`li`, {
                                "aria-current": n === z ? `step` : void 0,
                                className: R.stepItem,
                                "data-state": r,
                                children: (0, G.jsxs)(`button`, {
                                    "aria-label": I.formatMessage(e.title),
                                    className: R.stepButton,
                                    disabled: Y || t > Ut,
                                    onClick: () => {
                                        J(``), B(n), Ca()
                                    },
                                    type: `button`,
                                    children: [(0, G.jsx)(`span`, {
                                        "aria-hidden": `true`,
                                        className: R.stepNumber,
                                        children: r === `complete` ? (0, G.jsx)(Oe, {}) : t + 1
                                    }), (0, G.jsx)(`span`, {
                                        className: R.stepLabel,
                                        children: (0, G.jsx)(D, {
                                            ...e.title
                                        })
                                    })]
                                })
                            }, e.title.id)
                        })
                    })
                }),
                po = Q ? (0, G.jsxs)(`section`, {
                    "aria-live": `polite`,
                    className: R.successCard,
                    children: [(0, G.jsxs)(`div`, {
                        className: R.successCardHeader,
                        children: [(0, G.jsx)(`h2`, {
                            className: R.fieldLabel,
                            children: (0, G.jsx)(D, {
                                ...L.applicationDetailsVisualHeading
                            })
                        }), (0, G.jsx)(`span`, {
                            className: R.submittedStatus,
                            children: (0, G.jsx)(D, {
                                ...Bt(Q.state, Q.actionOwner)
                            })
                        })]
                    }), Ka(Q), (0, G.jsx)(`section`, {
                        "aria-label": I.formatMessage(L.summarySection),
                        className: R.submittedSummary,
                        children: Ga()
                    }), Q.state !== `access_granted` && (0, G.jsxs)(`p`, {
                        className: R.submissionNotice,
                        children: [(0, G.jsx)(Te, {
                            "aria-hidden": `true`
                        }), (0, G.jsx)(D, {
                            ...L.noAccessGranted
                        })]
                    }), qa(Q), (0, G.jsx)(Wt, {
                        organizationId: Q.organizationId,
                        organizationName: u.find(e => e.id === Q.organizationId)?.name ?? Q.organizationId,
                        embedded: k,
                        disabled: Y || X || Z,
                        onTrackApplication: na
                    }), H && Ja(Q, H), Kn && (0, G.jsxs)(`p`, {
                        className: R.formError,
                        role: `alert`,
                        children: [(0, G.jsx)(Ce, {
                            "aria-hidden": `true`
                        }), (0, G.jsx)(`span`, {
                            children: Kn
                        })]
                    })]
                }) : (0, G.jsxs)(G.Fragment, {
                    children: [(0, G.jsxs)(`div`, {
                        className: R.intro,
                        children: [(0, G.jsxs)(`h2`, {
                            className: R.title,
                            children: [(0, G.jsx)(`span`, {
                                className: `sr-only`,
                                children: (0, G.jsx)(D, {
                                    ...Gt.heading
                                })
                            }), (0, G.jsx)(`span`, {
                                "aria-hidden": `true`,
                                children: (0, G.jsx)(D, {
                                    ...Gt.visualHeading
                                })
                            })]
                        }), (0, G.jsx)(`p`, {
                            className: R.subtitle,
                            children: (0, G.jsx)(D, {
                                ...Gt.visualDescription
                            })
                        })]
                    }), (0, G.jsxs)(`form`, {
                        className: R.formCard,
                        noValidate: !0,
                        onChangeCapture: e => {
                            let t = e.target.name;
                            if (z === 0 && t === `requested-research-mode` && (Z || jr.current.has(V))) {
                                e.preventDefault(), e.stopPropagation();
                                return
                            }
                            t !== `openai-organization-card` && t !== `openai-organization` && (Er.current = !0, Tr.current += 1), z > 0 && z < mt.length - 1 && e.target !== rt.current && ia()
                        },
                        onSubmit: e => {
                            Oa(e)
                        },
                        children: [Vt && P === `verified` && H?.submissionEligible === !0 && (0, G.jsx)(`div`, {
                            hidden: z !== -1,
                            children: (0, G.jsx)(jt, {
                                organizationId: V,
                                previousApplicationReference: ri,
                                onStatusChange: (e, t) => {
                                    yt(e), xt(t ?? null)
                                },
                                submissionHref: He
                            }, `${V}:${ri??``}`)
                        }), z === -1 && (Zr != null || _i === !1) && (0, G.jsxs)(`div`, {
                            className: R.field,
                            children: [(0, G.jsx)(`p`, {
                                className: Yr ? R.fieldHint : R.formError,
                                role: Yr ? `status` : `alert`,
                                children: (0, G.jsx)(D, {
                                    ...Zr ?? L.organizationNotEligible
                                })
                            }), Xr && (0, G.jsx)(`button`, {
                                className: C(`interactive-button`, `interactive-button-secondary`, R.button),
                                onClick: Sa,
                                type: `button`,
                                children: (0, G.jsx)(D, {
                                    ...L.retryOrganizationLookup
                                })
                            })]
                        }), z === 0 && (0, G.jsxs)(G.Fragment, {
                            children: [(0, G.jsxs)(`div`, {
                                className: R.field,
                                children: [(0, G.jsxs)(`div`, {
                                    className: R.fieldLabel,
                                    children: [(0, G.jsx)(`span`, {
                                        "aria-hidden": `true`,
                                        children: (0, G.jsx)(D, {
                                            ...L.organizationStep
                                        })
                                    }), (0, G.jsx)(`span`, {
                                        className: `sr-only`,
                                        children: (0, G.jsx)(D, {
                                            ...L.organizationLabel
                                        })
                                    })]
                                }), (0, G.jsx)(`p`, {
                                    className: R.sectionDescription,
                                    children: (0, G.jsx)(D, {
                                        ...L.organizationVerificationDescription
                                    })
                                }), (0, G.jsx)($t, {
                                    embedded: k,
                                    organizations: u,
                                    organizationId: V,
                                    organizationSource: P,
                                    organizationLookupPending: N,
                                    selectedWorkspaceOrganizationId: E,
                                    canceling: X,
                                    busy: Y || Z,
                                    onTrackApplication: na,
                                    canSelectOrganization: gi,
                                    getOrganizationWorkspace: mi,
                                    selectOrganization: ca
                                }), Bi && (0, G.jsxs)(G.Fragment, {
                                    children: [(0, G.jsx)(`a`, {
                                        className: C(`interactive-button`, `interactive-button-primary`, R.button),
                                        href: hn,
                                        onClick: () => br(!0),
                                        rel: `noopener noreferrer`,
                                        target: `_blank`,
                                        children: (0, G.jsx)(D, {
                                            ...L.createOrganization
                                        })
                                    }), (0, G.jsx)(`button`, {
                                        className: C(`interactive-button`, `interactive-button-secondary`, R.button),
                                        onClick: un,
                                        type: `button`,
                                        children: (0, G.jsx)(D, {
                                            ...L.refreshOrganizations
                                        })
                                    })]
                                })]
                            }), (0, G.jsxs)(`fieldset`, {
                                className: R.field,
                                children: [(0, G.jsx)(`legend`, {
                                    className: R.fieldLabel,
                                    children: (0, G.jsx)(D, {
                                        ...L.researchModeVisualHeading
                                    })
                                }), (0, G.jsx)(`p`, {
                                    className: R.sectionDescription,
                                    children: (0, G.jsx)(D, {
                                        ...L.researchModeVisualDescription
                                    })
                                }), (0, G.jsx)(`div`, {
                                    className: R.radioGroup,
                                    children: ht.map(e => (0, G.jsxs)(`label`, {
                                        "aria-label": I.formatMessage(e.title),
                                        className: R.radioCard,
                                        "data-state": Kt === e.id ? `selected` : `unselected`,
                                        htmlFor: `research-mode-${e.id}`,
                                        children: [(0, G.jsx)(`input`, {
                                            checked: Kt === e.id,
                                            className: R.radioIndicator,
                                            disabled: !!$ || qr,
                                            id: `research-mode-${e.id}`,
                                            name: `requested-research-mode`,
                                            onChange: () => {
                                                ia(), Xt(e.id), J(``)
                                            },
                                            type: `radio`,
                                            value: e.id
                                        }), (0, G.jsxs)(`span`, {
                                            className: R.radioContent,
                                            children: [(0, G.jsx)(`span`, {
                                                className: R.choiceTitle,
                                                children: (0, G.jsx)(D, {
                                                    ...e.title
                                                })
                                            }), e.id === `research_non_zdr` && (0, G.jsx)(`span`, {
                                                className: R.choiceDescription,
                                                children: (0, G.jsx)(D, {
                                                    ...e.description
                                                })
                                            })]
                                        })]
                                    }, e.id))
                                }), (0, G.jsxs)(`div`, {
                                    className: R.infoBanner,
                                    role: `note`,
                                    children: [(0, G.jsx)(Ce, {
                                        "aria-hidden": `true`
                                    }), (0, G.jsxs)(`div`, {
                                        children: [(0, G.jsx)(`p`, {
                                            children: (0, G.jsx)(D, {
                                                ...L.privacyApprovalNotice
                                            })
                                        }), (0, G.jsx)(`p`, {
                                            children: (0, G.jsx)(ze, {
                                                message: L.zdrResearchModeDescription
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        }), z === 1 && (0, G.jsxs)(G.Fragment, {
                            children: [(0, G.jsx)(ut, {
                                capabilities: Ge
                            }), (0, G.jsxs)(`div`, {
                                className: R.cardHeading,
                                children: [(0, G.jsx)(`h3`, {
                                    className: R.fieldLabel,
                                    children: (0, G.jsx)(D, {
                                        ...L.requestedAccessVisualHeading
                                    })
                                }), (0, G.jsx)(`p`, {
                                    className: R.sectionDescription,
                                    children: (0, G.jsx)(D, {
                                        ...L.requestedAccessVisualDescription
                                    })
                                })]
                            }), (0, G.jsxs)(`fieldset`, {
                                className: R.field,
                                children: [(0, G.jsx)(`legend`, {
                                    className: `sr-only`,
                                    children: (0, G.jsx)(D, {
                                        ...L.accessQuestion
                                    })
                                }), (0, G.jsx)(`div`, {
                                    className: R.choiceGrid,
                                    children: gt.map(e => {
                                        let t = U.includes(e.id);
                                        return (0, G.jsxs)(`label`, {
                                            className: R.choiceCard,
                                            "data-state": t ? `selected` : `unselected`,
                                            htmlFor: `product-${e.id}`,
                                            children: [(0, G.jsx)(`input`, {
                                                checked: t,
                                                className: R.choiceCheckbox,
                                                id: `product-${e.id}`,
                                                name: `product-${e.id}`,
                                                onChange: () => {
                                                    Qt(t => t.includes(e.id) ? t.filter(t => t !== e.id) : [...t, e.id]), J(``)
                                                },
                                                type: `checkbox`
                                            }), (0, G.jsx)(`span`, {
                                                "aria-hidden": `true`,
                                                className: R.choiceIcon,
                                                children: (0, G.jsx)(e.Icon, {})
                                            }), (0, G.jsxs)(`span`, {
                                                className: R.choiceTitle,
                                                children: [(0, G.jsx)(`span`, {
                                                    className: `sr-only`,
                                                    children: (0, G.jsx)(D, {
                                                        ...e.title
                                                    })
                                                }), (0, G.jsx)(`span`, {
                                                    "aria-hidden": `true`,
                                                    children: (0, G.jsx)(D, {
                                                        ...e.visualTitle
                                                    })
                                                })]
                                            }), (0, G.jsx)(`span`, {
                                                className: R.choiceDescription,
                                                children: (0, G.jsx)(D, {
                                                    ...e.description
                                                })
                                            })]
                                        }, e.id)
                                    })
                                })]
                            }), (0, G.jsx)(kt, {
                                capabilities: Ge,
                                researchPurpose: en,
                                researchScopes: bn,
                                setError: J,
                                setResearchPurpose: nn,
                                toggleResearchScope: Ha
                            })]
                        }), z === 2 && (0, G.jsxs)(G.Fragment, {
                            children: [(0, G.jsxs)(`div`, {
                                className: R.field,
                                children: [(0, G.jsxs)(`label`, {
                                    className: R.fieldLabel,
                                    htmlFor: `primary-country`,
                                    children: [(0, G.jsx)(`span`, {
                                        className: `sr-only`,
                                        children: (0, G.jsx)(D, {
                                            ...L.primaryCountry
                                        })
                                    }), (0, G.jsx)(`span`, {
                                        "aria-hidden": `true`,
                                        children: (0, G.jsx)(D, {
                                            ...L.primaryCountryVisualHeading
                                        })
                                    })]
                                }), (0, G.jsx)(`p`, {
                                    className: R.sectionDescription,
                                    children: (0, G.jsx)(D, {
                                        ...L.primaryCountryVisualDescription
                                    })
                                }), (0, G.jsx)(Et, {
                                    onChange: e => {
                                        e !== On && ia(), kn(e), Fn(t => t.filter(t => t !== e)), J(``)
                                    },
                                    value: On
                                })]
                            }), (0, G.jsxs)(`fieldset`, {
                                className: R.field,
                                children: [(0, G.jsxs)(`legend`, {
                                    className: R.fieldLabel,
                                    children: [(0, G.jsx)(`span`, {
                                        className: `sr-only`,
                                        children: (0, G.jsx)(D, {
                                            ...L.additionalLocations
                                        })
                                    }), (0, G.jsx)(`span`, {
                                        "aria-hidden": `true`,
                                        children: (0, G.jsx)(D, {
                                            ...L.additionalLocationsVisualHeading
                                        })
                                    })]
                                }), (0, G.jsx)(`div`, {
                                    className: R.radioGroup,
                                    children: [{
                                        id: `no`,
                                        title: L.additionalNo,
                                        description: L.additionalNoDescription
                                    }, {
                                        id: `yes`,
                                        title: L.additionalYes,
                                        description: L.additionalYesDescription
                                    }, {
                                        id: `unsure`,
                                        title: L.additionalUnsure,
                                        description: L.additionalUnsureDescription
                                    }].filter(dn).map(e => (0, G.jsxs)(`label`, {
                                        className: R.radioCard,
                                        "data-pointer-focus": jn === e.id ? `true` : void 0,
                                        "data-state": q === e.id ? `selected` : `unselected`,
                                        htmlFor: `additional-locations-${e.id}`,
                                        onBlur: () => Mn(null),
                                        onKeyDown: () => Mn(null),
                                        onPointerDown: () => Mn(e.id),
                                        children: [(0, G.jsx)(`input`, {
                                            checked: q === e.id,
                                            className: R.radioIndicator,
                                            id: `additional-locations-${e.id}`,
                                            name: `additional-locations`,
                                            onChange: () => {
                                                An(e.id), e.id !== `yes` && (Fn([]), zn(``), Ln(!1)), J(``)
                                            },
                                            type: `radio`
                                        }), (0, G.jsxs)(`span`, {
                                            className: R.radioContent,
                                            children: [(0, G.jsx)(`span`, {
                                                className: R.choiceTitle,
                                                children: (0, G.jsx)(D, {
                                                    ...e.title
                                                })
                                            }), (0, G.jsx)(`span`, {
                                                className: R.choiceDescription,
                                                children: (0, G.jsx)(D, {
                                                    ...e.description
                                                })
                                            })]
                                        })]
                                    }, e.id))
                                })]
                            }), q === `yes` && (0, G.jsx)(G.Fragment, {
                                children: (0, G.jsxs)(`div`, {
                                    className: R.field,
                                    children: [(0, G.jsx)(`span`, {
                                        className: `sr-only`,
                                        id: `additional-countries-label`,
                                        children: (0, G.jsx)(D, {
                                            ...L.additionalCountries
                                        })
                                    }), (0, G.jsxs)(`details`, {
                                        className: R.scopeDropdown,
                                        open: In,
                                        ref: ot,
                                        children: [(0, G.jsxs)(`summary`, {
                                            "aria-controls": `additional-countries-menu`,
                                            "aria-expanded": In,
                                            "aria-labelledby": `additional-countries-label`,
                                            className: C(R.input, R.scopeTrigger),
                                            onClick: e => {
                                                e.preventDefault(), In && zn(``), Ln(fn)
                                            },
                                            ref: at,
                                            role: `button`,
                                            children: [(0, G.jsx)(`span`, {
                                                className: R.scopeValue,
                                                children: Mi.length > 0 ? I.formatList(Mi) : (0, G.jsx)(D, {
                                                    ...L.additionalCountriesPlaceholder
                                                })
                                            }), (0, G.jsx)(Tt, {
                                                className: R.scopeChevron
                                            })]
                                        }), (0, G.jsxs)(`div`, {
                                            className: R.scopeMenu,
                                            children: [(0, G.jsx)(`label`, {
                                                className: `sr-only`,
                                                htmlFor: `additional-countries-search`,
                                                children: (0, G.jsx)(D, {
                                                    ...L.additionalCountriesSearch
                                                })
                                            }), (0, G.jsx)(`div`, {
                                                className: R.countrySearchContainer,
                                                children: (0, G.jsxs)(`div`, {
                                                    className: R.countrySearchField,
                                                    children: [(0, G.jsx)(Se, {
                                                        "aria-hidden": `true`
                                                    }), (0, G.jsx)(`input`, {
                                                        "aria-controls": `additional-countries-menu`,
                                                        autoComplete: `off`,
                                                        className: R.countrySearch,
                                                        id: `additional-countries-search`,
                                                        name: `additional-countries-search`,
                                                        onChange: e => zn(e.target.value),
                                                        onKeyDown: Xi,
                                                        placeholder: I.formatMessage(L.countrySearchVisualPlaceholder),
                                                        ref: rt,
                                                        type: `search`,
                                                        value: Rn
                                                    })]
                                                })
                                            }), (0, G.jsx)(`div`, {
                                                "aria-labelledby": `additional-countries-label`,
                                                className: R.countryMenu,
                                                id: `additional-countries-menu`,
                                                ref: $e,
                                                role: `group`,
                                                children: Ii.length > 0 ? Ii.map(e => {
                                                    let {
                                                        code: t,
                                                        label: n
                                                    } = e;
                                                    return (0, G.jsxs)(`label`, {
                                                        className: R.checkRow,
                                                        htmlFor: `additional-country-${t.toLowerCase()}`,
                                                        children: [(0, G.jsx)(`input`, {
                                                            checked: Pn.includes(t),
                                                            className: R.checkbox,
                                                            disabled: !Pn.includes(t) && Pn.length >= Be.additionalCountries.max,
                                                            id: `additional-country-${t.toLowerCase()}`,
                                                            name: `additional-country-${t.toLowerCase()}`,
                                                            onChange: e => {
                                                                Fn(n => e.target.checked ? [...n, t] : n.filter(e => e !== t)), J(``)
                                                            },
                                                            onKeyDown: Xi,
                                                            type: `checkbox`,
                                                            value: t
                                                        }), (0, G.jsx)(`span`, {
                                                            className: R.checkLabel,
                                                            children: n
                                                        })]
                                                    }, t)
                                                }) : (0, G.jsx)(`p`, {
                                                    className: R.countryEmpty,
                                                    role: `status`,
                                                    children: (0, G.jsx)(D, {
                                                        ...L.additionalCountriesNoResults
                                                    })
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, G.jsx)(`h2`, {
                                className: `sr-only`,
                                id: `rosalind-safeguards-heading`,
                                children: (0, G.jsx)(D, {
                                    ...L.safeguardsHeading
                                })
                            }), (0, G.jsx)(`p`, {
                                className: `sr-only`,
                                children: (0, G.jsx)(D, {
                                    ...L.safeguardsDescription
                                })
                            }), (0, G.jsxs)(`fieldset`, {
                                "aria-labelledby": `rosalind-safeguards-heading safeguards-in-place-heading`,
                                className: R.field,
                                children: [(0, G.jsxs)(`legend`, {
                                    className: R.fieldLabel,
                                    id: `safeguards-in-place-heading`,
                                    children: [(0, G.jsx)(`span`, {
                                        className: `sr-only`,
                                        children: (0, G.jsx)(D, {
                                            ...L.safeguardsQuestion
                                        })
                                    }), (0, G.jsx)(`span`, {
                                        "aria-hidden": `true`,
                                        children: (0, G.jsx)(D, {
                                            ...L.safeguardsVisualHeading
                                        })
                                    }), (0, G.jsx)(`span`, {
                                        className: R.optionalLabel,
                                        children: (0, G.jsx)(D, {
                                            ...L.safeguardsOptionalLabel
                                        })
                                    })]
                                }), (0, G.jsx)(`span`, {
                                    className: R.sectionDescription,
                                    children: (0, G.jsx)(D, {
                                        ...L.safeguardsVisualDescription
                                    })
                                }), (0, G.jsx)(`div`, {
                                    className: R.safeguardGrid,
                                    children: vt.map(e => (0, G.jsx)(wt, {
                                        checked: K.includes(e.id),
                                        id: `safeguard-${e.id}`,
                                        onChange: t => Wa(e.id, t),
                                        title: (0, G.jsxs)(G.Fragment, {
                                            children: [(0, G.jsx)(`span`, {
                                                className: `sr-only`,
                                                children: (0, G.jsx)(D, {
                                                    ...e.title
                                                })
                                            }), (0, G.jsx)(`span`, {
                                                "aria-hidden": `true`,
                                                children: (0, G.jsx)(D, {
                                                    ...e.visualTitle
                                                })
                                            })]
                                        })
                                    }, e.id))
                                }), K.includes(`other`) && (0, G.jsxs)(`div`, {
                                    className: R.field,
                                    children: [(0, G.jsx)(`label`, {
                                        className: R.fieldLabel,
                                        htmlFor: `other-safeguard-details`,
                                        children: (0, G.jsx)(D, {
                                            ...L.otherSafeguards
                                        })
                                    }), (0, G.jsx)(`textarea`, {
                                        className: R.textarea,
                                        id: `other-safeguard-details`,
                                        maxLength: Be.otherSafeguardDetails.max,
                                        name: `other-safeguard-details`,
                                        onChange: e => {
                                            Dn(e.target.value), J(``)
                                        },
                                        placeholder: I.formatMessage(L.otherSafeguardsPlaceholder),
                                        rows: 3,
                                        value: En
                                    })]
                                })]
                            }), (0, G.jsx)(`div`, {
                                className: R.safeguardAttestation,
                                children: (0, G.jsx)(wt, {
                                    checked: Sn,
                                    id: `confirm-research-safeguards`,
                                    onChange: e => {
                                        Cn(e), J(``)
                                    },
                                    title: (0, G.jsx)(D, {
                                        ...L.safeguardsConfirmation
                                    })
                                })
                            })]
                        }), z === 3 && (0, G.jsxs)(G.Fragment, {
                            children: [Ya(), (0, G.jsxs)(`div`, {
                                className: R.reviewTermsHeading,
                                children: [(0, G.jsx)(`h3`, {
                                    className: R.fieldLabel,
                                    children: (0, G.jsx)(D, {
                                        ...L.termsVisualHeading
                                    })
                                }), (0, G.jsx)(`p`, {
                                    className: R.sectionDescription,
                                    children: (0, G.jsx)(D, {
                                        ...L.termsVisualDescription
                                    })
                                })]
                            }), (0, G.jsxs)(`div`, {
                                className: R.reviewAttestations,
                                children: [(0, G.jsx)(wt, {
                                    checked: Bn,
                                    disabled: Y,
                                    description: (0, G.jsx)(D, {
                                        ...L.certifyAccuracyDescription
                                    }),
                                    id: `certify-accuracy`,
                                    onChange: Vn,
                                    title: (0, G.jsx)(D, {
                                        ...L.certifyAccuracy
                                    })
                                }), (0, G.jsx)(wt, {
                                    checked: Hn,
                                    disabled: Y,
                                    description: (0, G.jsx)(D, {
                                        ...L.certifyAuthorityDescription
                                    }),
                                    id: `certify-authority`,
                                    onChange: Un,
                                    title: (0, G.jsx)(D, {
                                        ...L.certifyAuthority
                                    })
                                })]
                            })]
                        }), z !== 0 && Kn && (0, G.jsxs)(`p`, {
                            className: R.formError,
                            role: `alert`,
                            children: [(0, G.jsx)(Ce, {
                                "aria-hidden": `true`
                            }), (0, G.jsx)(`span`, {
                                children: Kn
                            })]
                        }), (0, G.jsxs)(`div`, {
                            className: R.buttonRow,
                            children: [z === 0 ? (0, G.jsx)(`span`, {
                                "aria-hidden": `true`
                            }) : (0, G.jsxs)(`button`, {
                                className: C(`interactive-button`, `interactive-button-secondary`, R.button),
                                disabled: Y,
                                onClick: () => {
                                    J(``), B(e => e === -1 ? 0 : Vt && e === 1 ? -1 : Math.max(0, e - 1)), Ca()
                                },
                                type: `button`,
                                children: [(0, G.jsx)(Ee, {
                                    "aria-hidden": `true`
                                }), (0, G.jsx)(D, {
                                    ...L.back
                                })]
                            }), z < mt.length - 1 ? (0, G.jsxs)(`button`, {
                                "aria-disabled": ei,
                                className: C(`interactive-button`, `interactive-button-primary`, R.button),
                                disabled: ei,
                                onClick: Ea,
                                type: `button`,
                                children: [(0, G.jsx)(D, {
                                    ...L.next
                                }), (0, G.jsx)(xe, {
                                    "aria-hidden": `true`
                                })]
                            }) : (0, G.jsxs)(`button`, {
                                "aria-disabled": Y || $ != null || N || P !== `verified` || !Bn || !Hn || H?.submissionEligible === !1 || A && H?.submissionEligible !== !0,
                                className: C(`interactive-button`, `interactive-button-primary`, R.button),
                                disabled: Y || $ != null || N || P !== `verified` || !Bn || !Hn || H?.submissionEligible === !1 || A && H?.submissionEligible !== !0,
                                onClick: A ? void 0 : () => {
                                    F({
                                        surface: `FORM`,
                                        action: `SUBMISSION_CONFIRMATION`,
                                        result: `BLOCKED`,
                                        step: z,
                                        failureReason: `UNAVAILABLE`
                                    }), vr(!0)
                                },
                                ref: Xe,
                                type: A ? `submit` : `button`,
                                children: [(0, G.jsx)(D, {
                                    ...Y ? L.submitting : L.submit
                                }), (0, G.jsx)(xe, {
                                    "aria-hidden": `true`
                                })]
                            })]
                        }), z === 0 && (0, G.jsxs)(`div`, {
                            className: R.applicationFeedback,
                            children: [(0, G.jsxs)(`span`, {
                                className: C(Qr ? R.formError : R.fieldHint, !Qr && !Yr && !ni && u.length > 0 && `sr-only`),
                                id: `organization-help`,
                                role: Qr ? `alert` : Yr || ni ? `status` : void 0,
                                children: [Yr || ni ? (0, G.jsx)(p, {
                                    className: `icon-sm me-2 inline-block`
                                }) : null, ni && !Zr && !N ? (0, G.jsx)(D, {
                                    id: `chatgpt.rosalind_access.application.history.inline_loading`,
                                    defaultMessage: `Checking application…`
                                }) : (0, G.jsx)(D, {
                                    ...Zr ?? (N ? L.organizationsLoading : P === `unavailable` || M ? M && P !== `unavailable` ? L.applicationHistoryUnavailable : L.organizationLookupError : u.length === 0 ? Bi ? L.createOrganizationHint : L.emptyOrganizationHint : L.organizationHint)
                                })]
                            }), Qr && !Yr && (0, G.jsx)(`button`, {
                                className: C(`interactive-button`, `interactive-button-secondary`, R.button),
                                onClick: Sa,
                                type: `button`,
                                children: (0, G.jsx)(D, {
                                    ...L.retryOrganizationLookup
                                })
                            }), $ && (0, G.jsxs)(G.Fragment, {
                                children: [(0, G.jsxs)(`div`, {
                                    className: R.warningBanner,
                                    role: `status`,
                                    children: [(0, G.jsx)(Ce, {
                                        "aria-hidden": `true`
                                    }), (0, G.jsxs)(`div`, {
                                        children: [(0, G.jsx)(D, {
                                            ...L.applicationConflict,
                                            values: {
                                                organizationId: V
                                            }
                                        }), (0, G.jsxs)(`div`, {
                                            className: R.applicationStatus,
                                            children: [(0, G.jsx)(D, {
                                                ...L.applicationStatusLabel
                                            }), (0, G.jsx)(`span`, {
                                                className: R.submittedStatus,
                                                children: (0, G.jsx)(D, {
                                                    ...Bt($.state, $.actionOwner)
                                                })
                                            })]
                                        }), Ka($)]
                                    })]
                                }), (0, G.jsx)(`p`, {
                                    className: R.fieldHint,
                                    children: (0, G.jsx)(D, {
                                        ...L.researchModeLockedAfterSubmission
                                    })
                                }), qa($), A && P === `verified` && H?.submissionEligible === !0 && ($.state === `submitted` || $.state === `in_progress`) && (0, G.jsx)(G.Fragment, {
                                    children: (0, G.jsx)(`button`, {
                                        className: C(`interactive-button`, `interactive-button-secondary`, R.button),
                                        disabled: Jn || Y || X,
                                        onClick: () => {
                                            ja()
                                        },
                                        type: `button`,
                                        children: (0, G.jsx)(D, {
                                            ...L.retryWorkflow
                                        })
                                    })
                                }), H && Ja($, H)]
                            }), ti && !$ && (0, G.jsxs)(`div`, {
                                className: R.infoBanner,
                                role: `status`,
                                children: [(0, G.jsx)(Oe, {
                                    "aria-hidden": `true`
                                }), (0, G.jsxs)(`div`, {
                                    children: [(0, G.jsxs)(`div`, {
                                        className: R.applicationStatus,
                                        children: [(0, G.jsx)(D, {
                                            ...L.applicationStatusLabel
                                        }), (0, G.jsx)(`span`, {
                                            className: R.submittedStatus,
                                            children: (0, G.jsx)(D, {
                                                ...Bt(ti.state)
                                            })
                                        })]
                                    }), (0, G.jsx)(D, {
                                        ...L.confirmationReference,
                                        values: {
                                            applicationReference: ti.bioagentsApplicationReference
                                        }
                                    })]
                                })]
                            }), ur && !$ && (0, G.jsxs)(`div`, {
                                className: R.infoBanner,
                                role: `status`,
                                children: [(0, G.jsx)(Oe, {
                                    "aria-hidden": `true`
                                }), (0, G.jsx)(D, {
                                    ...L.cancellationComplete
                                })]
                            }), Kn && (0, G.jsxs)(`p`, {
                                className: R.formError,
                                role: `alert`,
                                children: [(0, G.jsx)(Ce, {
                                    "aria-hidden": `true`
                                }), (0, G.jsx)(`span`, {
                                    children: Kn
                                })]
                            })]
                        }), z === mt.length - 1 && (j || M) && (0, G.jsxs)(`div`, {
                            className: R.formError,
                            role: M ? `alert` : `status`,
                            children: [(0, G.jsx)(Ce, {
                                "aria-hidden": `true`
                            }), (0, G.jsx)(`span`, {
                                children: M ? (0, G.jsx)(D, {
                                    id: `chatgpt.rosalind_access.application.history.check.unavailable_advisory`,
                                    defaultMessage: `We couldn’t check for an existing application, but you can still submit.`
                                }) : (0, G.jsx)(D, {
                                    id: `chatgpt.rosalind_access.application.history.check.loading`,
                                    defaultMessage: `Checking whether this organization already has an application…`
                                })
                            }), M && S !== void 0 && (0, G.jsx)(`button`, {
                                className: C(`interactive-button`, `interactive-button-secondary`, R.button),
                                onClick: () => {
                                    F({
                                        surface: `FORM`,
                                        action: `RETRY_STATUS`,
                                        result: `STARTED`,
                                        step: z
                                    }), Sa()
                                },
                                type: `button`,
                                children: (0, G.jsx)(D, {
                                    id: `chatgpt.rosalind_access.application.history.check.retry.button`,
                                    defaultMessage: `Retry application check`
                                })
                            })]
                        }), z === 3 && (0, G.jsxs)(`p`, {
                            className: R.reviewNote,
                            children: [(0, G.jsx)(Te, {
                                "aria-hidden": `true`
                            }), (0, G.jsx)(`span`, {
                                children: (0, G.jsx)(D, {
                                    ...Li ? L.manualReview : L.reviewStartsVisual
                                })
                            })]
                        }), _r && (0, G.jsx)(`div`, {
                            className: R.availabilityDialogOverlay,
                            onMouseDown: e => {
                                e.currentTarget === e.target && vr(!1)
                            },
                            role: `presentation`,
                            children: (0, G.jsxs)(`section`, {
                                "aria-describedby": `${Je}-description`,
                                "aria-labelledby": `${Je}-title`,
                                "aria-modal": `true`,
                                className: R.availabilityDialog,
                                role: `alertdialog`,
                                children: [(0, G.jsx)(`h2`, {
                                    className: R.availabilityDialogTitle,
                                    id: `${Je}-title`,
                                    children: (0, G.jsx)(D, {
                                        ...L.unavailableDialogTitle
                                    })
                                }), (0, G.jsx)(`p`, {
                                    className: R.availabilityDialogDescription,
                                    id: `${Je}-description`,
                                    children: (0, G.jsx)(D, {
                                        ...L.unavailable
                                    })
                                }), (0, G.jsx)(`div`, {
                                    className: R.availabilityDialogActions,
                                    children: (0, G.jsx)(`button`, {
                                        className: C(`interactive-button`, `interactive-button-primary`, R.button),
                                        onClick: () => vr(!1),
                                        ref: Ze,
                                        type: `button`,
                                        children: (0, G.jsx)(D, {
                                            ...L.unavailableDialogDismiss
                                        })
                                    })
                                })]
                            })
                        })]
                    })]
                }),
                mo;
            t[280] !== Ia || t[281] !== Pa || t[282] !== H || t[283] !== Wn || t[284] !== za || t[285] !== Y ? (mo = H && Wn && (0, G.jsx)(l, {
                disableLightDismiss: Y,
                for: tn,
                onClose: () => Ia(`CANCELLED`),
                open: !0,
                withProps: {
                    organizationId: H.id,
                    organizationName: H.name,
                    onClose: () => Ia(`CANCELLED`),
                    onConfirm: () => {
                        Ia(`SUCCEEDED`), za()
                    },
                    onMounted: Pa,
                    submitting: Y
                }
            }), t[280] = Ia, t[281] = Pa, t[282] = H, t[283] = Wn, t[284] = za, t[285] = Y, t[286] = mo) : mo = t[286];
            let ho;
            t[287] !== uo || t[288] !== fo || t[289] !== po || t[290] !== mo || t[291] !== no ? (ho = (0, G.jsxs)(`main`, {
                className: no,
                id: `main`,
                children: [uo, fo, po, mo]
            }), t[287] = uo, t[288] = fo, t[289] = po, t[290] = mo, t[291] = no, t[292] = ho) : ho = t[292];
            let go;
            t[293] !== ho || t[294] !== to.Contents ? (go = (0, G.jsx)(to.Contents, {
                id: `rosalind-access-contents`,
                children: ho
            }), t[293] = ho, t[294] = to.Contents, t[295] = go) : go = t[295];
            let _o;
            return t[296] !== Xa || t[297] !== go || t[298] !== Za || t[299] !== Qa || t[300] !== $a || t[301] !== eo ? (_o = (0, G.jsxs)(Xa, {
                accessibleTitle: Za,
                className: Qa,
                contentRef: Ye,
                onOpenChange: $a,
                open: !0,
                renderInPlace: !0,
                children: [eo, go]
            }), t[296] = Xa, t[297] = go, t[298] = Za, t[299] = Qa, t[300] = $a, t[301] = eo, t[302] = _o) : _o = t[302], _o
        }
    })),
    Sn = e((() => {
        xn(), Mt()
    }));

function Cn(e) {
    return [e.id, e]
}
var wn, K, Tn, En, Dn, On, kn, q, An, jn, Mn, Nn, Pn = e((() => {
    w(), wn = ue(), Sn(), ve(), je(), Je(), b(), o(), d(), K = t(se()), Tn = T(), En = `noindex, nofollow, noarchive`, Dn = 3e3, On = /^org[-_][A-Za-z0-9_-]+$/, kn = () => [{
        title: `GPT-Rosalind Access Upgrade | OpenAI`
    }, {
        name: `robots`,
        content: En
    }, {
        name: `referrer`,
        content: `no-referrer`
    }], q = oe(function(e) {
        "use forget";
        let t = (0, wn.c)(16),
            {
                loaderData: n
            } = e,
            r = fe(),
            [i] = E(),
            a;
        t[0] === i ? a = t[1] : (a = i.get(`organization_id`) ?? void 0, t[0] = i, t[1] = a);
        let o = a,
            s = `embedded` in n && n.embedded === !0;
        if (`membershipContext` in n) {
            let e;
            t[2] === n.user.email ? e = t[3] : (e = n.user.email.trim().toLowerCase(), t[2] = n.user.email, t[3] = e);
            let r = `${e}:${n.selectedWorkspaceOrganizationId??``}`,
                i;
            return t[4] !== s || t[5] !== o || t[6] !== n || t[7] !== r ? (i = (0, Tn.jsx)(Nn, {
                embedded: s,
                initialOrganizationId: o,
                loaderData: n
            }, r), t[4] = s, t[5] = o, t[6] = n, t[7] = r, t[8] = i) : i = t[8], i
        }
        let c;
        t[9] === r ? c = t[10] : (c = () => void r.revalidate(), t[9] = r, t[10] = c);
        let l;
        return t[11] !== s || t[12] !== o || t[13] !== n || t[14] !== c ? (l = (0, Tn.jsx)(yn, {
            ...n,
            embedded: s,
            initialOrganizationId: o,
            onRefreshApplication: c
        }), t[11] = s, t[12] = o, t[13] = n, t[14] = c, t[15] = l) : l = t[15], l
    }), An = e => {
        "use forget";
        let t = (0, wn.c)(4),
            {
                context: n,
                onResolved: r
            } = e,
            i, a;
        return t[0] !== n || t[1] !== r ? (i = () => {
            r(n)
        }, a = [n, r], t[0] = n, t[1] = r, t[2] = i, t[3] = a) : (i = t[2], a = t[3]), (0, K.useEffect)(i, a), null
    }, jn = {
        organizations: [],
        organizationSource: `unavailable`,
        submissionEnabled: !1
    }, Mn = e => {
        "use forget";
        let t = (0, wn.c)(8),
            {
                context: n,
                onResolved: r
            } = e,
            i;
        t[0] === r ? i = t[1] : (i = (0, Tn.jsx)(An, {
            context: jn,
            onResolved: r
        }), t[0] = r, t[1] = i);
        let a;
        t[2] === r ? a = t[3] : (a = e => (0, Tn.jsx)(An, {
            context: e,
            onResolved: r
        }), t[2] = r, t[3] = a);
        let o;
        return t[4] !== n || t[5] !== i || t[6] !== a ? (o = (0, Tn.jsx)(K.Suspense, {
            fallback: null,
            children: (0, Tn.jsx)(le, {
                errorElement: i,
                resolve: n,
                children: a
            })
        }), t[4] = n, t[5] = i, t[6] = a, t[7] = o) : o = t[7], o
    }, Nn = e => {
        "use forget";
        let t = (0, wn.c)(70),
            {
                embedded: n,
                initialOrganizationId: r,
                loaderData: i
            } = e,
            o = c(),
            s = ae(),
            l = ae(),
            u = fe(),
            d = (0, K.useRef)(!1),
            f = (0, K.useRef)(!1),
            p = (0, K.useRef)(null),
            h = (0, K.useRef)(0),
            [g, _] = (0, K.useState)(null),
            [y, te] = (0, K.useState)(null),
            [re, b] = (0, K.useState)(null),
            [x, S] = (0, K.useState)(!1),
            C = o.data,
            ie = C?.accountItems,
            w;
        t[0] === C ? w = t[1] : (w = ne(C)?.id, t[0] = C, t[1] = w);
        let T = w,
            E;
        t[2] !== C || t[3] !== o.isError ? (E = C !== void 0 && !o.isError && _e(C), t[2] = C, t[3] = o.isError, t[4] = E) : E = t[4];
        let D = E,
            O;
        t[5] === i.user.email ? O = t[6] : (O = i.user.email.trim().toLowerCase(), t[5] = i.user.email, t[6] = O);
        let oe = O,
            se;
        t[7] !== D || t[8] !== oe ? (se = D ? ee().filter(e => !!e.email && !!e.sessionToken && e.email?.trim().toLowerCase() !== oe) : [], t[7] = D, t[8] = oe, t[9] = se) : se = t[9];
        let ce = se,
            k = s.load,
            le = new Map,
            ue = new Map,
            de = new Set,
            pe = new Set,
            me = new Set;
        for (let e of ie ?? []) {
            let t = $e(e);
            if (t === void 0) continue;
            let n = t.id;
            ue.has(e.id) || ue.set(e.id, e), de.add(n);
            let r = pe.has(n);
            e.canAccessWithCurrentSession ? pe.add(n) : me.add(n), (!le.has(n) || e.canAccessWithCurrentSession && !r) && le.set(n, {
                id: n,
                name: t.name
            })
        }
        let he = i.selectedWorkspaceOrganizationId !== void 0 && ie !== void 0 && !o.isLoading && !o.isFetching && !de.has(i.selectedWorkspaceOrganizationId),
            ge, ve;
        t[10] !== o.isError || t[11] !== k || t[12] !== he ? (ge = () => {
            d.current || !o.isError && !he || (d.current = !0, k(`${We}?includeWorkspaces=true`))
        }, ve = [o.isError, k, he], t[10] = o.isError, t[11] = k, t[12] = he, t[13] = ge, t[14] = ve) : (ge = t[13], ve = t[14]), (0, K.useEffect)(ge, ve);
        let ye = s.data,
            be = ye?.organizationSource === `verified`,
            xe = be && ye.organizations.some(e => e.hasDirectApiMembership === !1 && !de.has(e.id)),
            Se = o.refetch,
            A, Ce;
        t[15] !== xe || t[16] !== Se ? (A = () => {
            !xe || f.current || (f.current = !0, Se?.())
        }, Ce = [xe, Se], t[15] = xe, t[16] = Se, t[17] = A, t[18] = Ce) : (A = t[17], Ce = t[18]), (0, K.useEffect)(A, Ce);
        let we = g !== null && l.data !== void 0 && !(`membershipContext` in l.data) && `requestedOrganizationId` in l.data && l.data.requestedOrganizationId === g ? l.data : void 0,
            Te;
        t[19] !== we || t[20] !== g ? (Te = we?.organizationSource === `verified` && we.organizations.some(e => e.id === g) ? we : void 0, t[19] = we, t[20] = g, t[21] = Te) : Te = t[21];
        let Ee = Te,
            j = Ee ?? re,
            De = j?.organizationSource === `verified` && j.applications !== void 0 && j.latestCanceledApplications !== void 0,
            M = g !== null && l.state === `idle` && we !== void 0 && (we.organizationSource === `unavailable` || we.organizationSource === `verified` && (Ee === void 0 || Ee.applications === void 0 || Ee.latestCanceledApplications === void 0)),
            Oe = ye?.organizationSource === `verified` ? ye : y?.organizationSource === `verified` ? y : De ? j : null,
            N = Ee?.capabilities,
            ke = y?.organizationSource === `verified` && y.applications !== void 0 && y.latestCanceledApplications !== void 0 || De && j.applications !== void 0 && j.latestCanceledApplications !== void 0,
            P = Oe?.submissionEnabled === !0,
            Ae = new Map(le),
            je = e => P && i.submissionsEnabled && e.submissionEligible !== !1 && (e.id === i.selectedWorkspaceOrganizationId && (!de.has(e.id) || pe.has(e.id)) || e.hasDirectApiMembership === !0 && !de.has(e.id)),
            Me = e => le.has(e.id) ? !0 : me.has(e.id) ? !1 : be || e.hasDirectApiMembership === !0 || e.id === i.selectedWorkspaceOrganizationId || e.hasDirectApiMembership === void 0 && !de.has(e.id);
        if (Oe !== null) {
            for (let [e, t] of Ae) Ae.set(e, {
                ...t,
                submissionEligible: je(t)
            });
            for (let e of Oe.organizations)
                if (Me(e)) {
                    let t = {
                        ...Ae.get(e.id),
                        ...e,
                        name: le.get(e.id)?.name ?? e.name,
                        personaVerificationRequired: e.personaVerificationRequired
                    };
                    Ae.set(e.id, {
                        ...t,
                        submissionEligible: je(t)
                    })
                }
        }
        if (De) {
            let e = new Map(j.organizations.map(Cn));
            for (let [t, n] of Ae) e.has(t) || Ae.set(t, {
                ...n,
                submissionEligible: je(n)
            });
            for (let e of j.organizations)
                if (Me(e)) {
                    let t = {
                        ...Ae.get(e.id),
                        ...e,
                        name: le.get(e.id)?.name ?? e.name,
                        personaVerificationRequired: e.personaVerificationRequired
                    };
                    Ae.set(e.id, {
                        ...t,
                        submissionEligible: je(t)
                    })
                }
        }
        let Ne = Oe != null,
            Pe = o.isError || he,
            Fe = s.state === `idle` && ye !== void 0,
            Ie = s.state !== `idle` || !Fe && (o.isLoading || o.isFetching || Pe && ye === void 0),
            F = !Ne && (y === null || re === null || l.state !== `idle` || s.state !== `idle`) || Ne && (Ie || y === null && !be);
        !x && !F && S(!0);
        let Le = !x && F,
            Re = yn,
            ze = i.user,
            Be = Le ? [] : Array.from(Ae.values()),
            Ve = Array.from(ue.values()),
            He = De ? j.applications : void 0,
            I = De ? j.latestCanceledApplications : void 0,
            Ue = De ? j.organizationCreationEnabled : !1,
            Ge = g !== null && !ke && !M,
            Ke;
        t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (Ke = async e => {
            if (!On.test(e) || p.current !== e) return;
            let t, n = !1,
                r = a(),
                i = v(),
                o = [`rosalind-organization-workspace-recovery`, e],
                s = h.current,
                c = Date.now() + Dn;
            try {
                let a = await Promise.race([r.fetchQuery({
                    ...i,
                    queryKey: o,
                    staleTime: 0,
                    retry: !1
                }), new Promise(e => {
                    t = window.setTimeout(() => {
                        n = !0, r.cancelQueries({
                            queryKey: o,
                            exact: !0
                        }).finally(() => e(void 0))
                    }, Dn)
                })]).finally(() => {
                    t !== void 0 && window.clearTimeout(t), r.removeQueries({
                        queryKey: o,
                        exact: !0
                    })
                });
                if (n || Date.now() >= c || a === void 0) return;
                let l, u;
                for (let t of m(a))
                    if ($e(t)?.id === e) {
                        if (t.canAccessWithCurrentSession) {
                            u = t;
                            break
                        }
                        l === void 0 && (l = t)
                    } let d = u ?? l;
                return d === void 0 || p.current !== e || h.current !== s || n || Date.now() >= c ? void 0 : (r.setQueryData(i.queryKey, a), d)
            } catch {
                return
            }
        }, t[22] = Ke) : Ke = t[22];
        let qe;
        t[23] !== l || t[24] !== g ? (qe = e => {
            e !== g && (h.current += 1, p.current = e, _(e), l.load(`${We}?${new URLSearchParams({organizationId:e})}`))
        }, t[23] = l, t[24] = g, t[25] = qe) : qe = t[25];
        let Je;
        t[26] !== o.isError || t[27] !== k || t[28] !== Se || t[29] !== u || t[30] !== l || t[31] !== g || t[32] !== he ? (Je = e => {
            let t = e?.preserveApplicationDraft === !0;
            !t && e?.workspaceAlreadyRefreshed !== !0 && Se?.(), !t && (o.isError || he) && (d.current = !0, k(`${We}?includeWorkspaces=true`)), g !== null && l.load(`${We}?${new URLSearchParams({organizationId:g})}`), u.revalidate()
        }, t[26] = o.isError, t[27] = k, t[28] = Se, t[29] = u, t[30] = l, t[31] = g, t[32] = he, t[33] = Je) : Je = t[33];
        let Ye;
        t[34] !== u || t[35] !== l || t[36] !== g ? (Ye = () => {
            g != null && l.load(`${We}?${new URLSearchParams({organizationId:g})}`), u.revalidate()
        }, t[34] = u, t[35] = l, t[36] = g, t[37] = Ye) : Ye = t[37];
        let Xe = Ne ? `verified` : Le ? `account-preview` : `unavailable`,
            Ze = Ne && P && i.submissionsEnabled && (g === null || Ae.get(g)?.submissionEligible === !0),
            Qe = `personaEnabled` in i && i.personaEnabled === !0,
            et;
        t[38] !== Re || t[39] !== D || t[40] !== M || t[41] !== N || t[42] !== T || t[43] !== n || t[44] !== r || t[45] !== i.selectedWorkspaceOrganizationId || t[46] !== i.user || t[47] !== Le || t[48] !== ce || t[49] !== Be || t[50] !== Ve || t[51] !== He || t[52] !== I || t[53] !== Ue || t[54] !== Ge || t[55] !== qe || t[56] !== Je || t[57] !== Ye || t[58] !== Xe || t[59] !== Ze || t[60] !== Qe ? (et = (0, Tn.jsx)(Re, {
            embedded: n,
            initialOrganizationId: r,
            user: ze,
            capabilities: N,
            accountSwitchingEnabled: D,
            currentWorkspaceAccountId: T,
            organizations: Be,
            savedAccountSwitchSessions: ce,
            workspaceAccounts: Ve,
            applications: He,
            latestCanceledApplications: I,
            organizationCreationEnabled: Ue,
            applicationHistoryPending: Ge,
            applicationHistoryUnavailable: M,
            organizationLookupPending: Le,
            onResolveOrganizationWorkspace: Ke,
            onSelectOrganization: qe,
            onRetryOrganizationLookup: Je,
            onRefreshApplication: Ye,
            selectedWorkspaceOrganizationId: i.selectedWorkspaceOrganizationId,
            organizationSource: Xe,
            submissionEnabled: Ze,
            personaEnabled: Qe
        }), t[38] = Re, t[39] = D, t[40] = M, t[41] = N, t[42] = T, t[43] = n, t[44] = r, t[45] = i.selectedWorkspaceOrganizationId, t[46] = i.user, t[47] = Le, t[48] = ce, t[49] = Be, t[50] = Ve, t[51] = He, t[52] = I, t[53] = Ue, t[54] = Ge, t[55] = qe, t[56] = Je, t[57] = Ye, t[58] = Xe, t[59] = Ze, t[60] = Qe, t[61] = et) : et = t[61];
        let tt;
        t[62] === i.membershipContext ? tt = t[63] : (tt = (0, Tn.jsx)(Mn, {
            context: i.membershipContext,
            onResolved: te
        }), t[62] = i.membershipContext, t[63] = tt);
        let nt;
        t[64] === i.accessContext ? nt = t[65] : (nt = (0, Tn.jsx)(Mn, {
            context: i.accessContext,
            onResolved: b
        }), t[64] = i.accessContext, t[65] = nt);
        let rt;
        return t[66] !== et || t[67] !== tt || t[68] !== nt ? (rt = (0, Tn.jsxs)(Tn.Fragment, {
            children: [et, tt, nt]
        }), t[66] = et, t[67] = tt, t[68] = nt, t[69] = rt) : rt = t[69], rt
    }
}));
e((() => {
    Pn()
}))();
export {
    q as
    default, kn as meta
};
//# sourceMappingURL=r.b749fb02595e04c3007a54375f3f4374-cno103to.js.map