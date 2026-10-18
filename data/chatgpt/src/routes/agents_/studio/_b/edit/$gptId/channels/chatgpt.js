import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as n,
    ID as r,
    PD as i,
    i5 as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as o,
    Bn as s,
    Ln as c,
    Nn as l,
    Rn as u,
    Ut as d,
    Vn as f,
    Zt as p,
    rn as m,
    wn as h,
    zn as g
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gst as _,
    Ozt as v,
    UIt as y,
    Ust as b,
    __t as x,
    b_t as S,
    cHt as C,
    dzt as w,
    iHt as T,
    tLt as E,
    vzt as D,
    w_t as O,
    wzt as k,
    zIt as A
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $x as j,
    FS as M,
    Gh as N,
    IS as P,
    Kh as ee,
    Qx as F,
    Sv as I,
    Xv as L,
    Yv as R,
    bC as z,
    vm as B,
    xC as V,
    xv as H,
    ym as te
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    G as ne,
    tt as re
} from "./1c919af1-abbe8u4rjagje3yr.js";
import {
    l as ie
} from "./74a883a0-hvxle82pkyqdut0n.js";
import {
    t as ae
} from "./4b68ab38-e2jtqfi6qknkay6v.js";
import {
    d as U,
    f as oe,
    n as se,
    t as ce
} from "./707eab0c-joqgzfzs0dn7ukcc.js";
import {
    t as le
} from "./a35abcd6-o5uzbzp1jprs3y1b.js";
import {
    n as W,
    t as ue
} from "./18093cad-ik1j6oyh5nr3ta5y.js";
import {
    f as de,
    t as fe
} from "./5579e947-f551sia4protgc1g.js";
import {
    _ as pe,
    a as G,
    d as me,
    o as K,
    s as he,
    t as ge,
    x as q
} from "./4285e798-mb6k70xz6sq0hl39.js";
import {
    g as _e,
    h as ve
} from "./8e7d0a25-o85cwyy659hwtt54.js";
import {
    n as ye,
    t as be
} from "./8e88ec39-jrrevbpz199sv0ky.js";
import {
    a as xe,
    s as Se
} from "./8b3bb541-ixdtwubo1ddvukvn.js";
import {
    n as Ce,
    t as we
} from "./36ecb4f8-ntqmqgucvlq1gwn6.js";
import {
    n as Te,
    t as Ee
} from "./467065a1-j0u8xxr8t414vb79.js";
import {
    i as De,
    n as Oe
} from "./c396e986-g8i2m4pffhw4okbj.js";
import {
    i as ke,
    n as Ae
} from "./a6bddaad-lqkpz0dldj26ia0b.js";
import {
    i as je,
    n as Me,
    r as Ne,
    t as Pe
} from "./cde0fb0d-czlhbh1f0jf2euab.js";
import {
    n as Fe,
    t as Ie
} from "./8be53502-dtu16xqm6ewgz0zs.js";
import {
    t as Le
} from "./ab97e6da-nzi9ks4t1ma09scj.js";
import {
    n as Re,
    t as ze
} from "./3bbf1750-op4xkilgfnllo6ng.js";
import {
    n as Be,
    r as Ve,
    t as He
} from "./c396e986-oi24hwsz46uc9suu.js";
import {
    n as Ue,
    r as We
} from "./f78580ac-c5hchkg44vcdxjlj.js";
import {
    n as Ge,
    r as Ke
} from "./55cae3a0-goggb0a14zmk8zj3.js";

function qe() {
    return D().currentGpt.id
}

function Je() {
    return D().currentGpt.name
}

function Ye() {
    G({
        actionType: K.SHARE_MODAL_OPEN,
        source: q.CHATGPT_CHANNEL
    })
}

function Xe() {
    G({
        actionType: K.SHARE_MODAL_OPEN,
        source: q.CHATGPT_CHANNEL
    })
}
var Ze, J, Qe, $e, et, tt, nt, rt = e((() => {
        Ze = h(), T(), ge(), Se(), k(), de(), ve(), y(), i(), M(), F(), B(), _(), n(), ce(), le(), ue(), u(), Ne(), Me(), J = s(), Qe = e => {
            switch (e) {
                case `private`:
                    return pe.PRIVATE;
                case `workspace_link`:
                    return pe.WORKSPACE;
                case `directory`:
                    return pe.DIRECTORY
            }
        }, $e = () => {
            "use forget";
            let e = (0, Ze.c)(19),
                t = a(qe),
                n = a(Je),
                {
                    canShare: r,
                    isLoading: i
                } = C(),
                o = _e(),
                {
                    data: s,
                    isLoading: c,
                    isError: l
                } = E(r && o ? t : null),
                u;
            e[0] === s ? u = e[1] : (u = xe(A(s)), e[0] = s, e[1] = u);
            let d = u,
                f = i || r && c,
                p = l && !s,
                m;
            e[2] !== p || e[3] !== f || e[4] !== d ? (m = (0, J.jsx)(tt, {
                hasPermissionsLoadError: p,
                isLoading: f,
                selectedAccess: d
            }), e[2] = p, e[3] = f, e[4] = d, e[5] = m) : m = e[5];
            let h;
            e[6] !== t || e[7] !== f || e[8] !== d ? (h = (0, J.jsx)(et, {
                currentGptId: t,
                isLoading: f,
                selectedAccess: d
            }), e[6] = t, e[7] = f, e[8] = d, e[9] = h) : h = e[9];
            let g;
            e[10] !== m || e[11] !== h ? (g = (0, J.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3`,
                children: [m, h]
            }), e[10] = m, e[11] = h, e[12] = g) : g = e[12];
            let _;
            e[13] !== t || e[14] !== n ? (_ = (0, J.jsx)(W.Content, {
                maxWidth: 480,
                children: (0, J.jsx)(Pe, {
                    agentName: n,
                    gptId: t
                })
            }), e[13] = t, e[14] = n, e[15] = _) : _ = e[15];
            let v;
            return e[16] !== g || e[17] !== _ ? (v = (0, J.jsxs)(W, {
                children: [g, _]
            }), e[16] = g, e[17] = _, e[18] = v) : v = e[18], v
        }, et = e => {
            "use forget";
            let t = (0, Ze.c)(13),
                {
                    currentGptId: n,
                    isLoading: r,
                    selectedAccess: i
                } = e;
            if (r) {
                let e;
                return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(b, {
                    className: `h-9 w-31 rounded-full!`
                }), t[0] = e) : e = t[0], e
            }
            if (i === `private`) {
                let e;
                return t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(W.Trigger, {
                    children: (0, J.jsx)(U, {
                        type: `button`,
                        color: `primary`,
                        variant: `soft`,
                        size: `lg`,
                        gutterSize: `sm`,
                        pill: !0,
                        onClick: Ye,
                        children: (0, J.jsx)(l, {
                            ...nt.enableSharing
                        })
                    })
                }), t[1] = e) : e = t[1], e
            }
            let a;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = fe.buildChatGPTStartScreenRoute(), t[2] = a) : a = t[2];
            let o = a,
                s = !n || o === `/agents`,
                c;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, J.jsx)(W.Trigger, {
                children: (0, J.jsx)(U, {
                    type: `button`,
                    color: `primary`,
                    variant: `ghost`,
                    size: `lg`,
                    gutterSize: `sm`,
                    pill: !0,
                    onClick: Xe,
                    children: (0, J.jsx)(l, {
                        ...nt.manage
                    })
                })
            }), t[3] = c) : c = t[3];
            let u;
            t[4] === s ? u = t[5] : (u = () => s ? `` : `${window.location.origin}${o}`, t[4] = s, t[5] = u);
            let d;
            t[6] === i ? d = t[7] : (d = () => {
                G({
                    actionType: K.SHARE_LINK_COPY,
                    source: q.CHATGPT_CHANNEL,
                    share: {
                        visibility: Qe(i)
                    }
                })
            }, t[6] = i, t[7] = d);
            let f;
            t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, J.jsx)(l, {
                ...je.copyLink
            }), t[8] = f) : f = t[8];
            let p;
            return t[9] !== s || t[10] !== u || t[11] !== d ? (p = (0, J.jsxs)(`div`, {
                className: `flex shrink-0 items-center gap-2`,
                children: [c, (0, J.jsx)(se, {
                    type: `button`,
                    color: `primary`,
                    variant: `solid`,
                    className: `ps-2.5`,
                    gutterSize: `sm`,
                    size: `lg`,
                    pill: !0,
                    copyValue: u,
                    disabled: s,
                    CopyIcon: P,
                    onClick: d,
                    children: f
                })]
            }), t[9] = s, t[10] = u, t[11] = d, t[12] = p) : p = t[12], p
        }, tt = e => {
            "use forget";
            let t = (0, Ze.c)(17),
                {
                    hasPermissionsLoadError: n,
                    isLoading: i,
                    selectedAccess: a
                } = e,
                o = g(),
                {
                    isError: s,
                    isLoading: c,
                    workspaceName: u
                } = r(),
                d, f;
            if (t[0] !== u || t[1] !== o || t[2] !== s || t[3] !== c) {
                let e = !c && !s ? u.trim() : ``;
                f = e || o.formatMessage(je.workspaceFallbackName), d = e ? o.formatMessage(je.workspaceLinkAccess, {
                    workspaceName: e
                }) : o.formatMessage(je.workspaceLinkAccessFallback), t[0] = u, t[1] = o, t[2] = s, t[3] = c, t[4] = d, t[5] = f
            } else d = t[4], f = t[5];
            let p = d,
                m = a === `directory`,
                h = a !== `private`;
            if (i) {
                let e;
                return t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsxs)(`div`, {
                    className: `flex min-w-0 items-center gap-2.5`,
                    children: [(0, J.jsx)(b, {
                        className: `size-5 rounded-full!`
                    }), (0, J.jsx)(b, {
                        className: `h-3.5 w-44 max-w-full rounded-sm!`
                    })]
                }), t[6] = e) : e = t[6], e
            }
            if (n) {
                let e;
                t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(j, {
                    "aria-hidden": `true`,
                    className: `icon shrink-0`
                }), t[7] = e) : e = t[7];
                let n;
                return t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, J.jsxs)(`div`, {
                    className: `flex min-w-0 items-center gap-2.5`,
                    children: [e, (0, J.jsx)(`span`, {
                        className: `truncate`,
                        children: (0, J.jsx)(l, {
                            ...je.permissionsLoadError
                        })
                    })]
                }), t[8] = n) : n = t[8], n
            }
            if (m) {
                let e;
                t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(te, {
                    "aria-hidden": `true`,
                    className: `icon shrink-0`
                }), t[9] = e) : e = t[9];
                let n;
                return t[10] === f ? n = t[11] : (n = (0, J.jsxs)(`div`, {
                    className: `flex min-w-0 items-center gap-2.5`,
                    children: [e, (0, J.jsx)(`span`, {
                        className: `truncate`,
                        children: (0, J.jsx)(l, {
                            ...nt.workspaceDirectoryListed,
                            values: {
                                workspaceName: f
                            }
                        })
                    })]
                }), t[10] = f, t[11] = n), n
            }
            if (h) {
                let e;
                t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(ie, {
                    "aria-hidden": `true`,
                    className: `icon shrink-0`
                }), t[12] = e) : e = t[12];
                let n;
                return t[13] === p ? n = t[14] : (n = (0, J.jsxs)(`div`, {
                    className: `flex min-w-0 items-center gap-2.5`,
                    children: [e, (0, J.jsx)(`span`, {
                        className: `truncate`,
                        children: p
                    })]
                }), t[13] = p, t[14] = n), n
            }
            let _;
            t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, J.jsx)(j, {
                "aria-hidden": `true`,
                className: `icon shrink-0`
            }), t[15] = _) : _ = t[15];
            let v;
            return t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, J.jsxs)(`div`, {
                className: `flex min-w-0 items-center gap-2.5`,
                children: [_, (0, J.jsx)(`span`, {
                    className: `truncate`,
                    children: (0, J.jsx)(l, {
                        ...nt.privateToMe
                    })
                })]
            }), t[16] = v) : v = t[16], v
        }, nt = c({
            workspaceDirectoryListed: {
                id: `Hermes.GptStudio.Share.ChannelSummary.workspaceDirectoryListed`,
                defaultMessage: `Listed in {workspaceName} directory`
            },
            privateToMe: {
                id: `Hermes.GptStudio.Share.ChannelSummary.privateToMe`,
                defaultMessage: `Private to me`
            },
            enableSharing: {
                id: `Hermes.GptStudio.Share.ChannelSummary.enableSharing`,
                defaultMessage: `Enable sharing`
            },
            manage: {
                id: `Hermes.GptStudio.Share.ChannelSummary.manage`,
                defaultMessage: `Manage`
            }
        })
    })),
    it, at, ot, st, ct, lt, ut, dt, ft, pt, mt, ht, gt, _t, vt, yt, Y, bt = e((() => {
        it = `czfqcq_AppearanceFieldLabel`, at = `czfqcq_FieldLabel`, ot = `czfqcq_ProfileCompactField`, st = `czfqcq_ProfileFieldLabel`, ct = `czfqcq_ProfileLargeField`, lt = `czfqcq_ProfilePreviewContainer`, ut = `czfqcq_ProfilePreviewContent`, dt = `czfqcq_SectionBlock`, ft = `czfqcq_SectionList`, pt = `czfqcq_StarterPromptListItemIcon`, mt = `czfqcq_StarterPromptRow`, ht = `czfqcq_StarterPromptRowActions`, gt = `czfqcq_StarterPromptRowContent`, _t = `czfqcq_StarterPromptRowDescription`, vt = `czfqcq_StarterPromptRowNoBorder`, yt = `czfqcq_StarterPromptRowTitle`, Y = {
            AppearanceFieldLabel: it,
            FieldLabel: at,
            ProfileCompactField: ot,
            ProfileFieldLabel: st,
            ProfileLargeField: ct,
            ProfilePreviewContainer: lt,
            ProfilePreviewContent: ut,
            SectionBlock: dt,
            SectionList: ft,
            StarterPromptListItemIcon: pt,
            StarterPromptRow: mt,
            StarterPromptRowActions: ht,
            StarterPromptRowContent: gt,
            StarterPromptRowDescription: _t,
            StarterPromptRowNoBorder: vt,
            StarterPromptRowTitle: yt
        }
    }));

function xt() {
    return D().currentGpt.starterPrompts
}

function St() {
    return new WeakMap
}
var Ct, X, Z, wt, Tt, Et, Dt, Ot, kt, Q, At = e((() => {
    Ct = h(), ge(), ke(), Ke(), Le(), ye(), k(), N(), H(), n(), ce(), le(), we(), ue(), Ee(), x(), X = t(f()), u(), p(), bt(), Z = s(), wt = 600, Tt = `manual`, Et = () => {
        "use forget";
        let e = (0, Ct.c)(59),
            t = g(),
            n = a(xt),
            [r, i] = (0, X.useState)(null),
            o = n.length < 6,
            s = r == null ? void 0 : n[r],
            c = n.length > 0 ? n[n.length - 1] : null,
            u = n.length > 1,
            [d, f] = (0, X.useState)(u),
            [p, h] = (0, X.useState)(!1),
            [_] = (0, X.useState)(St),
            v;
        e[0] !== p || e[1] !== n ? (v = p ? n.slice(0, 1) : n, e[0] = p, e[1] = n, e[2] = v) : v = e[2];
        let y = v,
            b;
        e[3] === _ ? b = e[4] : (b = e => {
            let t = _.get(e);
            return t ?? (t = m(), _.set(e, t)), t
        }, e[3] = _, e[4] = b);
        let x = b,
            C, T;
        e[5] !== d || e[6] !== u ? (C = () => {
            if (u) {
                d || (f(!0), h(!0));
                return
            }
            if (!d) return;
            let e = setTimeout(() => {
                f(!1)
            }, wt);
            return () => {
                clearTimeout(e)
            }
        }, T = [d, u], e[5] = d, e[6] = u, e[7] = C, e[8] = T) : (C = e[7], T = e[8]), (0, X.useEffect)(C, T);
        let E, D;
        e[9] === p ? (E = e[10], D = e[11]) : (E = () => {
            if (!p) return;
            let e = window.requestAnimationFrame(() => {
                h(!1)
            });
            return () => {
                window.cancelAnimationFrame(e)
            }
        }, D = [p], e[9] = p, e[10] = E, e[11] = D), (0, X.useEffect)(E, D);
        let k;
        e[12] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, Z.jsx)(`div`, {
            className: `text-secondary text-sm`,
            children: (0, Z.jsx)(l, {
                ...Q.starterPromptsLabel
            })
        }), e[12] = k) : k = e[12];
        let A;
        e[13] !== o || e[14] !== t || e[15] !== n.length ? (A = o && (0, Z.jsx)(U, {
            color: `primary`,
            variant: `ghost`,
            size: `md`,
            pill: !0,
            uniform: !0,
            "aria-label": t.formatMessage(Q.addStarterPrompt),
            onClick: () => {
                G({
                    actionType: K.STARTER_PROMPT_ADD,
                    source: q.CHATGPT_CHANNEL
                }), i(n.length)
            },
            children: (0, Z.jsx)(ee, {
                "aria-hidden": `true`
            })
        }), e[13] = o, e[14] = t, e[15] = n.length, e[16] = A) : A = e[16];
        let j;
        e[17] === A ? j = e[18] : (j = (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-between pb-2`,
            "data-assistant-focus": `chatgpt-starter-prompts`,
            children: [k, A]
        }), e[17] = A, e[18] = j);
        let M;
        e[19] !== x || e[20] !== t || e[21] !== d || e[22] !== p || e[23] !== c || e[24] !== y || e[25] !== n.length ? (M = d ? (0, Z.jsx)(S, {
            as: `div`,
            insertMethod: `append`,
            children: y.map((e, t) => {
                let r = p ? n.length - 1 : t;
                return (0, Z.jsx)(`div`, {
                    children: (0, Z.jsx)(Dt, {
                        icon: e.icon,
                        title: e.title,
                        description: e.short_description ?? void 0,
                        showBottomBorder: t !== y.length - 1,
                        actions: (0, Z.jsx)(Ot, {
                            onEditPrompt: () => {
                                G({
                                    actionType: K.STARTER_PROMPT_EDIT,
                                    actionResult: he.STARTED,
                                    source: q.CHATGPT_CHANNEL,
                                    starterPrompt: {
                                        starterPromptIndex: r
                                    }
                                }), i(r)
                            },
                            onDeletePrompt: () => {
                                G({
                                    actionType: K.STARTER_PROMPT_DELETE,
                                    source: q.CHATGPT_CHANNEL,
                                    starterPrompt: {
                                        starterPromptIndex: r
                                    }
                                }), w.removeStarterPrompt(r)
                            }
                        })
                    })
                }, x(e))
            })
        }) : (0, Z.jsx)(O, {
            as: `div`,
            hideOverflow: !0,
            enter: {
                opacity: 1,
                delay: 80,
                duration: 220
            },
            exit: {
                opacity: 0,
                duration: 180
            },
            children: c == null ? (0, Z.jsx)(Dt, {
                renderIcon: (0, Z.jsx)(ne, {
                    "aria-hidden": `true`
                }),
                title: t.formatMessage(Q.starterPromptEmptyStateTitle),
                showBottomBorder: !1,
                actions: (0, Z.jsx)(U, {
                    color: `primary`,
                    variant: `soft`,
                    size: `sm`,
                    pill: !0,
                    onClick: () => {
                        G({
                            actionType: K.STARTER_PROMPT_ADD,
                            source: q.CHATGPT_CHANNEL
                        }), i(0)
                    },
                    children: (0, Z.jsx)(l, {
                        ...Q.addStarterPrompt
                    })
                })
            }, `empty-starter-prompt-alert`) : (0, Z.jsx)(Dt, {
                icon: c.icon,
                title: c.title,
                description: c.short_description ?? void 0,
                showBottomBorder: !1,
                actions: (0, Z.jsx)(Ot, {
                    onEditPrompt: () => {
                        G({
                            actionType: K.STARTER_PROMPT_EDIT,
                            actionResult: he.STARTED,
                            source: q.CHATGPT_CHANNEL,
                            starterPrompt: {
                                starterPromptIndex: n.length - 1
                            }
                        }), i(n.length - 1)
                    },
                    onDeletePrompt: () => {
                        G({
                            actionType: K.STARTER_PROMPT_DELETE,
                            source: q.CHATGPT_CHANNEL,
                            starterPrompt: {
                                starterPromptIndex: n.length - 1
                            }
                        }), w.removeStarterPrompt(n.length - 1)
                    }
                })
            }, x(c))
        }), e[19] = x, e[20] = t, e[21] = d, e[22] = p, e[23] = c, e[24] = y, e[25] = n.length, e[26] = M) : M = e[26];
        let N;
        e[27] !== j || e[28] !== M ? (N = (0, Z.jsxs)(`div`, {
            className: `flex flex-col`,
            children: [j, M]
        }), e[27] = j, e[28] = M, e[29] = N) : N = e[29];
        let P = r != null,
            F;
        e[30] === Symbol.for(`react.memo_cache_sentinel`) ? (F = e => {
            e || i(null)
        }, e[30] = F) : F = e[30];
        let I;
        e[31] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, Z.jsx)(W.Title, {
            className: `mb-0 font-medium`,
            children: (0, Z.jsx)(l, {
                ...Q.starterPromptModalTitle
            })
        }), e[31] = I) : I = e[31];
        let L;
        e[32] === t ? L = e[33] : (L = t.formatMessage(be.close), e[32] = t, e[33] = L);
        let R;
        e[34] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, Z.jsx)(ae, {}), e[34] = R) : R = e[34];
        let z;
        e[35] === L ? z = e[36] : (z = (0, Z.jsxs)(`div`, {
            className: `flex h-13 items-center justify-between gap-2`,
            children: [I, (0, Z.jsx)(W.Close, {
                children: (0, Z.jsx)(U, {
                    type: `button`,
                    color: `primary`,
                    variant: `ghost`,
                    "aria-label": L,
                    uniform: !0,
                    opticallyAlign: `end`,
                    size: `lg`,
                    iconSize: `lg`,
                    children: R
                })
            })]
        }), e[35] = L, e[36] = z);
        let B;
        e[37] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, Z.jsx)(W.Description, {
            visuallyHidden: !0,
            children: (0, Z.jsx)(l, {
                ...Q.starterPromptModalDescription
            })
        }), e[37] = B) : B = e[37];
        let V;
        e[38] !== r || e[39] !== x || e[40] !== _ || e[41] !== n ? (V = e => {
            r == null || r >= n.length ? (G({
                actionType: K.STARTER_PROMPT_CREATE,
                source: q.CHATGPT_CHANNEL,
                starterPrompt: {
                    starterPromptIndex: r ?? n.length
                }
            }), w.addStarterPrompt(e)) : (G({
                actionType: K.STARTER_PROMPT_EDIT,
                actionResult: he.SUCCEEDED,
                source: q.CHATGPT_CHANNEL,
                starterPrompt: {
                    starterPromptIndex: r
                }
            }), _.set(e, x(n[r])), w.updateStarterPrompt(r, e)), i(null)
        }, e[38] = r, e[39] = x, e[40] = _, e[41] = n, e[42] = V) : V = e[42];
        let H;
        e[43] !== r || e[44] !== s ? (H = s != null && r != null ? () => {
            G({
                actionType: K.STARTER_PROMPT_DELETE,
                source: q.CHATGPT_CHANNEL,
                starterPrompt: {
                    starterPromptIndex: r
                }
            }), w.removeStarterPrompt(r), i(null)
        } : void 0, e[43] = r, e[44] = s, e[45] = H) : H = e[45];
        let te;
        e[46] !== s || e[47] !== V || e[48] !== H ? (te = (0, Z.jsx)(kt, {
            initialValues: s,
            onSave: V,
            onRemove: H
        }), e[46] = s, e[47] = V, e[48] = H, e[49] = te) : te = e[49];
        let re;
        e[50] !== z || e[51] !== te ? (re = (0, Z.jsx)(W.Content, {
            maxWidth: 560,
            children: (0, Z.jsxs)(W.Body, {
                className: `p-5 pt-0`,
                children: [z, B, te]
            })
        }), e[50] = z, e[51] = te, e[52] = re) : re = e[52];
        let ie;
        e[53] !== P || e[54] !== re ? (ie = (0, Z.jsx)(W, {
            open: P,
            onOpenChange: F,
            children: re
        }), e[53] = P, e[54] = re, e[55] = ie) : ie = e[55];
        let oe;
        return e[56] !== N || e[57] !== ie ? (oe = (0, Z.jsxs)(Z.Fragment, {
            children: [N, ie]
        }), e[56] = N, e[57] = ie, e[58] = oe) : oe = e[58], oe
    }, Dt = e => {
        "use forget";
        let t = (0, Ct.c)(19),
            {
                icon: n,
                renderIcon: r,
                title: i,
                description: a,
                actions: o,
                showBottomBorder: s
            } = e,
            c = s === void 0 || s,
            l = `${Y.StarterPromptRow} ${c?``:Y.StarterPromptRowNoBorder}`,
            u;
        t[0] !== n || t[1] !== r ? (u = n ? (0, Z.jsx)(Ae, {
            name: n
        }) : r, t[0] = n, t[1] = r, t[2] = u) : u = t[2];
        let d;
        t[3] === u ? d = t[4] : (d = (0, Z.jsx)(`span`, {
            className: Y.StarterPromptListItemIcon,
            children: u
        }), t[3] = u, t[4] = d);
        let f;
        t[5] === i ? f = t[6] : (f = (0, Z.jsx)(`div`, {
            className: Y.StarterPromptRowTitle,
            children: i
        }), t[5] = i, t[6] = f);
        let p;
        t[7] === a ? p = t[8] : (p = a && (0, Z.jsx)(`div`, {
            className: Y.StarterPromptRowDescription,
            children: a
        }), t[7] = a, t[8] = p);
        let m;
        t[9] !== f || t[10] !== p ? (m = (0, Z.jsxs)(`div`, {
            className: Y.StarterPromptRowContent,
            children: [f, p]
        }), t[9] = f, t[10] = p, t[11] = m) : m = t[11];
        let h;
        t[12] === o ? h = t[13] : (h = (0, Z.jsx)(`div`, {
            className: Y.StarterPromptRowActions,
            children: o
        }), t[12] = o, t[13] = h);
        let g;
        return t[14] !== l || t[15] !== d || t[16] !== m || t[17] !== h ? (g = (0, Z.jsxs)(`div`, {
            className: l,
            children: [d, m, h]
        }), t[14] = l, t[15] = d, t[16] = m, t[17] = h, t[18] = g) : g = t[18], g
    }, Ot = e => {
        "use forget";
        let t = (0, Ct.c)(12),
            {
                onEditPrompt: n,
                onDeletePrompt: r
            } = e,
            i = g(),
            a;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Z.jsx)(re, {
            "aria-hidden": `true`
        }), t[0] = a) : a = t[0];
        let o;
        t[1] === n ? o = t[2] : (o = (0, Z.jsx)(U, {
            color: `primary`,
            variant: `ghost`,
            size: `md`,
            pill: !0,
            uniform: !0,
            onClick: n,
            children: a
        }), t[1] = n, t[2] = o);
        let s;
        t[3] === i ? s = t[4] : (s = i.formatMessage(Q.deleteStarterPrompt), t[3] = i, t[4] = s);
        let c;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Z.jsx)(I, {
            "aria-hidden": `true`
        }), t[5] = c) : c = t[5];
        let l;
        t[6] !== r || t[7] !== s ? (l = (0, Z.jsx)(U, {
            color: `danger`,
            variant: `ghost`,
            size: `md`,
            pill: !0,
            uniform: !0,
            className: `flex items-center justify-center`,
            "aria-label": s,
            onClick: r,
            children: c
        }), t[6] = r, t[7] = s, t[8] = l) : l = t[8];
        let u;
        return t[9] !== o || t[10] !== l ? (u = (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-0.5`,
            children: [o, l]
        }), t[9] = o, t[10] = l, t[11] = u) : u = t[11], u
    }, kt = e => {
        "use forget";
        let t = (0, Ct.c)(62),
            {
                initialValues: n,
                onSave: r,
                onRemove: i
            } = e,
            a = g(),
            [o, s] = (0, X.useState)(n?.icon ?? `default`),
            [c, u] = (0, X.useState)(n?.title ?? ``),
            [d, f] = (0, X.useState)(n?.short_description ?? ``),
            [p, m] = (0, X.useState)(n?.prompt ?? ``),
            h;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, Z.jsx)(`label`, {
            htmlFor: `chatgpt-starter-prompt-name`,
            children: (0, Z.jsx)(l, {
                ...Q.nameLabel
            })
        }), t[0] = h) : h = t[0];
        let _;
        t[1] === c.length ? _ = t[2] : (_ = (0, Z.jsxs)(`div`, {
            className: `mb-1.5 flex items-center justify-between gap-2`,
            children: [h, (0, Z.jsx)(`span`, {
                className: `text-tertiary text-xs tabular-nums`,
                children: (0, Z.jsx)(l, {
                    ...Q.taglineCount,
                    values: {
                        current: c.length,
                        max: 32
                    }
                })
            })]
        }), t[1] = c.length, t[2] = _);
        let v;
        t[3] === o ? v = t[4] : (v = (0, Z.jsx)(Ge, {
            value: o,
            onChange: s
        }), t[3] = o, t[4] = v);
        let y;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (y = e => {
            u(e.target.value)
        }, t[5] = y) : y = t[5];
        let b;
        t[6] === a ? b = t[7] : (b = a.formatMessage(Q.namePlaceholder), t[6] = a, t[7] = b);
        let x;
        t[8] !== b || t[9] !== c ? (x = (0, Z.jsx)(`div`, {
            className: `flex-1`,
            children: (0, Z.jsx)(Ce, {
                name: `chatgptStarterPromptName`,
                id: `chatgpt-starter-prompt-name`,
                value: c,
                onChange: y,
                placeholder: b,
                variant: `outline`,
                size: `lg`,
                className: `rounded-xl`,
                autoComplete: `off`,
                maxLength: 32
            })
        }), t[8] = b, t[9] = c, t[10] = x) : x = t[10];
        let S;
        t[11] !== v || t[12] !== x ? (S = (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [v, x]
        }), t[11] = v, t[12] = x, t[13] = S) : S = t[13];
        let C;
        t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, Z.jsx)(`label`, {
            htmlFor: `chatgpt-starter-prompt-short-description`,
            children: (0, Z.jsx)(l, {
                ...Q.starterPromptShortDescriptionLabel
            })
        }), t[14] = C) : C = t[14];
        let w;
        t[15] === d.length ? w = t[16] : (w = (0, Z.jsxs)(`div`, {
            className: `mb-1.5 flex items-center justify-between gap-2`,
            children: [C, (0, Z.jsx)(`span`, {
                className: `text-tertiary text-xs tabular-nums`,
                children: (0, Z.jsx)(l, {
                    ...Q.taglineCount,
                    values: {
                        current: d.length,
                        max: 64
                    }
                })
            })]
        }), t[15] = d.length, t[16] = w);
        let T;
        t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (T = e => {
            f(e.target.value)
        }, t[17] = T) : T = t[17];
        let E;
        t[18] === a ? E = t[19] : (E = a.formatMessage(Q.starterPromptShortDescriptionPlaceholder), t[18] = a, t[19] = E);
        let D;
        t[20] !== d || t[21] !== E ? (D = (0, Z.jsx)(Ce, {
            name: `chatgptStarterPromptShortDescription`,
            id: `chatgpt-starter-prompt-short-description`,
            value: d,
            onChange: T,
            placeholder: E,
            variant: `outline`,
            size: `lg`,
            className: `rounded-xl`,
            autoComplete: `off`,
            maxLength: 64
        }), t[20] = d, t[21] = E, t[22] = D) : D = t[22];
        let O;
        t[23] !== D || t[24] !== w ? (O = (0, Z.jsxs)(`div`, {
            className: `mt-5`,
            children: [w, D]
        }), t[23] = D, t[24] = w, t[25] = O) : O = t[25];
        let k;
        t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, Z.jsx)(`label`, {
            htmlFor: `chatgpt-starter-prompt-prompt`,
            children: (0, Z.jsx)(l, {
                ...Q.promptLabel
            })
        }), t[26] = k) : k = t[26];
        let A;
        t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (A = e => {
            m(e.target.value)
        }, t[27] = A) : A = t[27];
        let j;
        t[28] === a ? j = t[29] : (j = a.formatMessage(Q.promptPlaceholder), t[28] = a, t[29] = j);
        let M;
        t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (M = {
            height: `100%`
        }, t[30] = M) : M = t[30];
        let N;
        t[31] !== p || t[32] !== j ? (N = (0, Z.jsxs)(`div`, {
            className: `mt-5`,
            children: [k, (0, Z.jsx)(`div`, {
                className: `bg-surface-elevated-secondary mt-1.5 flex min-h-0 flex-1 rounded-xl shadow-[inset_0_0_0_1px_var(--alpha-08)]`,
                children: (0, Z.jsx)(Te, {
                    id: `chatgpt-starter-prompt-prompt`,
                    name: `chatgptStarterPromptPrompt`,
                    value: p,
                    onChange: A,
                    rows: 8,
                    maxHeight: `none`,
                    placeholder: j,
                    className: `bg-surface-elevated h-full min-h-0 rounded-xl`,
                    style: M
                })
            })]
        }), t[31] = p, t[32] = j, t[33] = N) : N = t[33];
        let P;
        t[34] !== a || t[35] !== i ? (P = i ? (0, Z.jsx)(U, {
            color: `danger`,
            variant: `outline`,
            size: `md`,
            pill: !0,
            type: `button`,
            "aria-label": a.formatMessage(Q.delete),
            onClick: i,
            className: `w-[150px]`,
            children: (0, Z.jsx)(l, {
                ...Q.delete
            })
        }) : (0, Z.jsx)(`div`, {}), t[34] = a, t[35] = i, t[36] = P) : P = t[36];
        let ee;
        t[37] === a ? ee = t[38] : (ee = a.formatMessage(Q.save), t[37] = a, t[38] = ee);
        let F;
        t[39] !== o || t[40] !== r || t[41] !== p || t[42] !== d || t[43] !== c ? (F = () => {
            r({
                icon: o,
                title: c,
                short_description: d,
                prompt: p,
                source: Tt
            })
        }, t[39] = o, t[40] = r, t[41] = p, t[42] = d, t[43] = c, t[44] = F) : F = t[44];
        let I;
        t[45] !== p || t[46] !== c ? (I = c.trim() === `` || p.trim() === ``, t[45] = p, t[46] = c, t[47] = I) : I = t[47];
        let L;
        t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, Z.jsx)(l, {
            ...Q.save
        }), t[48] = L) : L = t[48];
        let R;
        t[49] !== ee || t[50] !== F || t[51] !== I ? (R = (0, Z.jsx)(U, {
            color: `primary`,
            variant: `solid`,
            size: `lg`,
            pill: !0,
            opticallyAlign: `end`,
            "aria-label": ee,
            onClick: F,
            disabled: I,
            className: `w-[150px]`,
            children: L
        }), t[49] = ee, t[50] = F, t[51] = I, t[52] = R) : R = t[52];
        let z;
        t[53] !== P || t[54] !== R ? (z = (0, Z.jsxs)(`div`, {
            className: `mt-6 flex w-full items-center justify-between pe-3`,
            children: [P, R]
        }), t[53] = P, t[54] = R, t[55] = z) : z = t[55];
        let B;
        return t[56] !== O || t[57] !== N || t[58] !== _ || t[59] !== z || t[60] !== S ? (B = (0, Z.jsxs)(`div`, {
            children: [_, S, O, N, z]
        }), t[56] = O, t[57] = N, t[58] = _, t[59] = z, t[60] = S, t[61] = B) : B = t[61], B
    }, Q = c({
        starterPromptEmptyStateTitle: {
            id: `Hermes.GptStudio.Builder.StarterPrompts.starterPromptEmptyStateTitle`,
            defaultMessage: `Showcase capabilities`
        },
        starterPromptsLabel: {
            id: `Hermes.GptStudio.Builder.StarterPrompts.starterPromptsLabel`,
            defaultMessage: `Starter prompts`
        },
        addStarterPrompt: {
            id: `Hermes.GptStudio.Builder.StarterPrompts.addStarterPrompt`,
            defaultMessage: `Add prompt`
        },
        promptLabel: {
            id: `Hermes.GptStudio.Builder.StarterPrompts.promptLabel`,
            defaultMessage: `Prompt`
        },
        delete: {
            id: `Hermes.GptStudio.Builder.StarterPrompts.delete`,
            defaultMessage: `Delete`
        },
        deleteStarterPrompt: {
            id: `Hermes.GptStudio.Builder.StarterPrompts.deleteStarterPrompt`,
            defaultMessage: `Remove starter prompt`
        },
        save: {
            id: `Hermes.GptStudio.Builder.StarterPrompts.save`,
            defaultMessage: `Save`
        },
        nameLabel: {
            id: `Hermes.GptStudio.Builder.StarterPrompts.nameLabel`,
            defaultMessage: `Name`
        },
        namePlaceholder: {
            id: `Hermes.GptStudio.Builder.StarterPrompts.nameActionTitlePlaceholder`,
            defaultMessage: `Action-oriented title e.g. "Summarize my inbox"`
        },
        starterPromptModalTitle: {
            id: `Hermes.GptStudio.Builder.StarterPrompts.starterPromptModalTitle`,
            defaultMessage: `Starter prompt`
        },
        starterPromptModalDescription: {
            id: `Hermes.GptStudio.Builder.StarterPrompts.starterPromptModalDescription`,
            defaultMessage: `Edit the starter prompt name, icon, and prompt text.`
        },
        starterPromptShortDescriptionLabel: {
            id: `Hermes.GptStudio.Builder.StarterPrompts.starterPromptShortDescriptionLabel`,
            defaultMessage: `Short description`
        },
        starterPromptShortDescriptionPlaceholder: {
            id: `Hermes.GptStudio.Builder.StarterPrompts.shortDescriptionOutcomePlaceholder`,
            defaultMessage: `One-line outcome e.g. "Get a quick summary of unread emails"`
        },
        taglineCount: {
            id: `Hermes.GptStudio.Builder.StarterPrompts.taglineCount`,
            defaultMessage: `{current}/{max}`
        },
        promptPlaceholder: {
            id: `Hermes.GptStudio.Builder.StarterPrompts.promptPlaceholder`,
            defaultMessage: `Tell the agent what to do when this prompt is selected`
        }
    })
}));

function jt() {
    return v(D())
}

function Mt() {
    return D().currentGpt.id
}

function Nt() {
    return D().currentGpt.tagline
}

function Pt() {
    G({
        actionType: K.VIEW_AGENT_IN_CHATGPT,
        source: q.CHATGPT_CHANNEL
    })
}

function Ft(e) {
    G({
        actionType: K.TAGLINE_EDIT,
        source: q.CHATGPT_CHANNEL,
        editor: {
            field: me.TAGLINE
        }
    });
    let t = e.target.value.replace(/[\r\n]+/g, ` `);
    w.setTagline(t)
}

function It() {
    return D().currentGpt.icon.color
}
var Lt, Rt, $, zt, Bt, Vt, Ht, Ut = e((() => {
        Lt = h(), We(), ge(), Re(), Le(), Fe(), ye(), k(), de(), De(), rt(), L(), V(), n(), ce(), Ee(), Rt = t(f()), u(), Ve(), bt(), At(), $ = s(), zt = () => {
            "use forget";
            let e = (0, Lt.c)(9),
                t = a(jt),
                n, r;
            if (e[0] === t ? (n = e[1], r = e[2]) : (n = () => {
                    t && fe.navigate(``, {
                        replace: !0
                    })
                }, r = [t], e[0] = t, e[1] = n, e[2] = r), (0, Rt.useEffect)(n, r), t) return null;
            let i;
            e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, $.jsx)(`div`, {
                className: `mb-6`,
                children: (0, $.jsx)(ze, {})
            }), e[3] = i) : i = e[3];
            let o;
            e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, $.jsx)(z, {
                "aria-hidden": `true`,
                className: `text-primary size-11`
            }), e[4] = o) : o = e[4];
            let s;
            e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, $.jsx)(`div`, {
                className: `flex items-center justify-between gap-3`,
                "data-assistant-focus": `channel-detail-chatgpt-header`,
                children: (0, $.jsxs)(`div`, {
                    className: `flex items-center justify-start gap-3`,
                    children: [o, (0, $.jsx)(`h3`, {
                        className: `text-lg font-normal`,
                        children: (0, $.jsx)(l, {
                            ...be.chatgpt
                        })
                    })]
                })
            }), e[5] = s) : s = e[5];
            let c;
            e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, $.jsx)(Be, {
                children: (0, $.jsx)($e, {})
            }), e[6] = c) : c = e[6];
            let u;
            e[7] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, $.jsx)(`div`, {
                className: Y.SectionBlock,
                children: (0, $.jsxs)(He, {
                    children: [c, (0, $.jsx)(Be, {
                        children: (0, $.jsx)(Oe, {
                            channelType: `chatgpt`
                        })
                    })]
                })
            }), e[7] = u) : u = e[7];
            let d;
            return e[8] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, $.jsxs)(`div`, {
                children: [i, (0, $.jsxs)(`div`, {
                    children: [s, (0, $.jsxs)(`div`, {
                        className: Y.SectionList,
                        children: [u, (0, $.jsx)(`div`, {
                            className: Y.SectionBlock,
                            children: (0, $.jsx)(Bt, {})
                        })]
                    })]
                })]
            }), e[8] = d) : d = e[8], d
        }, Bt = () => {
            "use forget";
            let e = (0, Lt.c)(29),
                t = g(),
                n = a(Mt),
                r = a(Nt),
                i;
            e[0] === n ? i = e[1] : (i = n == null ? `/agents` : Ue(n), e[0] = n, e[1] = i);
            let o = i,
                s;
            e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, $.jsx)(`h2`, {
                className: `mb-1 flex items-center justify-between text-sm font-medium`,
                "data-assistant-focus": `chatgpt-customize-button`,
                children: (0, $.jsx)(l, {
                    ...Ht.customizeAppearanceLabel
                })
            }), e[2] = s) : s = e[2];
            let c;
            e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, $.jsxs)(`div`, {
                children: [s, (0, $.jsx)(`p`, {
                    className: `text-secondary text-sm`,
                    children: (0, $.jsx)(l, {
                        ...Ht.customizeAppearanceDescription
                    })
                })]
            }), e[3] = c) : c = e[3];
            let u = n == null,
                d, f;
            e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, $.jsx)(l, {
                ...Ht.viewAgent
            }), f = (0, $.jsx)(R, {
                className: `-me-0.5`
            }), e[4] = d, e[5] = f) : (d = e[4], f = e[5]);
            let p;
            e[6] !== o || e[7] !== u ? (p = (0, $.jsxs)(`div`, {
                className: `flex items-center justify-between`,
                children: [c, (0, $.jsxs)(oe, {
                    color: `primary`,
                    variant: `soft`,
                    to: o,
                    size: `lg`,
                    gutterSize: `sm`,
                    iconSize: `sm`,
                    pill: !0,
                    inert: u,
                    onClick: Pt,
                    children: [d, f]
                })]
            }), e[6] = o, e[7] = u, e[8] = p) : p = e[8];
            let m;
            e[9] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, $.jsx)(`label`, {
                htmlFor: `chatgpt-channel-tagline`,
                className: `text-secondary text-sm`,
                children: (0, $.jsx)(l, {
                    ...be.shortDescription
                })
            }), e[9] = m) : m = e[9];
            let h;
            e[10] === r.length ? h = e[11] : (h = (0, $.jsxs)(`div`, {
                className: `flex items-center justify-between gap-4 pt-2 pb-1`,
                children: [m, (0, $.jsx)(`span`, {
                    className: `text-tertiary text-xs tabular-nums`,
                    children: (0, $.jsx)(l, {
                        ...be.currentMax,
                        values: {
                            current: r.length,
                            max: 64
                        }
                    })
                })]
            }), e[10] = r.length, e[11] = h);
            let _;
            e[12] === t ? _ = e[13] : (_ = t.formatMessage(Ht.taglinePlaceholder), e[12] = t, e[13] = _);
            let v;
            e[14] !== _ || e[15] !== r ? (v = (0, $.jsx)(Te, {
                name: `chatgptChannelTagline`,
                id: `chatgpt-channel-tagline`,
                rows: 2,
                value: r,
                onChange: Ft,
                placeholder: _,
                variant: `outline`,
                size: `lg`,
                autoComplete: `off`,
                className: `rounded-xl`,
                maxLength: 64
            }), e[14] = _, e[15] = r, e[16] = v) : v = e[16];
            let y;
            e[17] !== v || e[18] !== h ? (y = (0, $.jsxs)(`div`, {
                className: `space-y-1.5`,
                "data-assistant-focus": `chatgpt-tagline-field`,
                children: [h, v]
            }), e[17] = v, e[18] = h, e[19] = y) : y = e[19];
            let b;
            e[20] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, $.jsx)(Et, {}), e[20] = b) : b = e[20];
            let x;
            e[21] === y ? x = e[22] : (x = (0, $.jsxs)(`div`, {
                className: `flex flex-col gap-5`,
                children: [y, b]
            }), e[21] = y, e[22] = x);
            let S;
            e[23] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, $.jsx)(Vt, {}), e[23] = S) : S = e[23];
            let C;
            e[24] === x ? C = e[25] : (C = (0, $.jsxs)(`div`, {
                className: `grid gap-5 md:grid-cols-2`,
                children: [x, S]
            }), e[24] = x, e[25] = C);
            let w;
            return e[26] !== C || e[27] !== p ? (w = (0, $.jsxs)(`div`, {
                className: `space-y-6`,
                children: [p, C]
            }), e[26] = C, e[27] = p, e[28] = w) : w = e[28], w
        }, Vt = () => {
            "use forget";
            let e = (0, Lt.c)(3),
                t = a(It),
                n;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(`div`, {
                inert: !0,
                className: Y.ProfilePreviewContent,
                children: (0, $.jsx)(Ie, {
                    disabled: !0
                })
            }), e[0] = n) : n = e[0];
            let r;
            return e[1] === t ? r = e[2] : (r = (0, $.jsx)(`div`, {
                className: Y.ProfilePreviewContainer,
                "data-mascot-color": t,
                children: n
            }), e[1] = t, e[2] = r), r
        }, Ht = c({
            customizeAppearanceLabel: {
                id: `Hermes.GptStudio.Builder.ChatgptChannelDetail.customizeAppearanceLabel`,
                defaultMessage: `Appearance`
            },
            customizeAppearanceDescription: {
                id: `Hermes.GptStudio.Builder.ChatgptChannelDetail.customizeAppearanceDescription`,
                defaultMessage: `Customize how your agent looks in ChatGPT`
            },
            viewAgent: {
                id: `Hermes.GptStudio.Builder.ChatgptChannelDetail.viewAgent`,
                defaultMessage: `View agent`
            },
            taglinePlaceholder: {
                id: `Hermes.GptStudio.Builder.ChatgptChannelDetail.taglinePlaceholder`,
                defaultMessage: `Provide a one-liner description for your agent`
            }
        })
    })),
    Wt, Gt, Kt, qt = e((() => {
        o(), Wt = h(), Ut(), Gt = s(), Kt = d(function() {
            "use forget";
            let e = (0, Wt.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Gt.jsx)(zt, {}), e[0] = t) : t = e[0], t
        })
    }));
e((() => {
    qt()
}))();
export {
    Kt as
    default
};
//# sourceMappingURL=agents_.studio._b.edit._gptId.channels.chatgpt-ct5kuhx8.js.map