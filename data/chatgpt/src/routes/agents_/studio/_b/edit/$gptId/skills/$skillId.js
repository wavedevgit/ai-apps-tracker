import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J8 as t,
    Y8 as n,
    a7 as r,
    hU as i,
    l7 as a,
    pU as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as s,
    At as c,
    Bn as l,
    Ln as u,
    Mt as d,
    Nn as f,
    Rn as p,
    Rt as m,
    Ut as h,
    lt as g,
    p as _,
    s as v,
    ut as ee,
    wn as y,
    y as b,
    zn as x
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    ZRt as S,
    hRt as C,
    lRt as w,
    nzt as T,
    uRt as E,
    xHt as D
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    ch as O,
    lh as te
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    At as k,
    Jt as ne,
    Mt as re,
    f as A,
    j as ie,
    mn as ae
} from "./1c919af1-abbe8u4rjagje3yr.js";
import {
    d as j,
    t as M
} from "./707eab0c-joqgzfzs0dn7ukcc.js";
import {
    t as N
} from "./a35abcd6-o5uzbzp1jprs3y1b.js";
import {
    f as P,
    t as F,
    u as oe
} from "./5579e947-f551sia4protgc1g.js";
import {
    C as se,
    S as ce,
    a as I,
    o as L,
    s as R,
    t as z,
    x as B,
    y as V
} from "./4285e798-mb6k70xz6sq0hl39.js";
import {
    G as le,
    J as ue,
    U as de,
    W as H,
    c as fe,
    d as pe,
    o as me,
    q as he,
    u as ge
} from "./8e7d0a25-o85cwyy659hwtt54.js";
import {
    n as U,
    t as W
} from "./8e88ec39-jrrevbpz199sv0ky.js";
import {
    a as _e,
    i as G,
    n as ve,
    o as ye,
    t as be
} from "./caea150f-k6gh2rxc9k6djrd0.js";
import {
    t as xe
} from "./a9fa9fda-0o2c1qvydhmhz1w4.js";
import {
    n as Se,
    t as Ce
} from "./43332649-hrw1zeeczaonr9a4.js";
import {
    n as K,
    t as we
} from "./5fe07825-lk75w2atjo3pjdy7.js";
import {
    i as Te,
    r as Ee
} from "./a6bddaad-lqkpz0dldj26ia0b.js";
import {
    n as q,
    t as De
} from "./99af6606-ir0h5w4axgy5whzn.js";
import {
    n as Oe,
    t as ke
} from "./14bfa043-j099hvf56gfathms.js";
import {
    n as Ae,
    t as je
} from "./4a56070f-opa52h6v0qraluqa.js";
import {
    n as Me,
    t as Ne
} from "./3bbf1750-op4xkilgfnllo6ng.js";
import {
    n as Pe,
    r as Fe
} from "./a22a21f3-h1a8cx50hrvx4ovw.js";
async function Ie({
    gptId: e,
    skillId: t,
    signal: n
}) {
    let i = await r.safeGet(`/hermes/agent/{agent_id}/skills/{skill_id}/download-url`, {
        parameters: {
            path: {
                agent_id: e,
                skill_id: t
            }
        },
        overrideUrl: S(void 0, !0),
        signal: n
    });
    ke(i.download_url, i.file_name ?? ``)
}

function Le(e) {
    "use forget";
    let t = (0, Re.c)(20),
        {
            gptId: n,
            skillId: r
        } = e,
        a = x(),
        o = i(),
        s;
    t[0] === a ? s = t[1] : (s = a.formatMessage(Y.downloadSkillFailedFallback), t[0] = a, t[1] = s);
    let c = s,
        l;
    t[2] !== n || t[3] !== r ? (l = async () => {
        let e = D();
        I({
            actionType: L.SKILL_DOWNLOAD,
            actionResult: R.STARTED,
            actionInstanceId: e.actionInstanceId,
            source: B.SKILL_DETAIL,
            skill: {
                skillId: r
            }
        });
        try {
            await Ie({
                gptId: n,
                skillId: r
            }), I({
                actionType: L.SKILL_DOWNLOAD,
                actionResult: R.SUCCEEDED,
                source: B.SKILL_DETAIL,
                skill: {
                    skillId: r
                },
                request: e()
            })
        } catch (t) {
            let n = t;
            throw I({
                actionType: L.SKILL_DOWNLOAD,
                actionResult: R.FAILED,
                source: B.SKILL_DETAIL,
                skill: {
                    skillId: r
                },
                request: e({
                    error: n
                })
            }), n
        }
    }, t[2] = n, t[3] = r, t[4] = l) : l = t[4];
    let u;
    t[5] !== c || t[6] !== o ? (u = e => {
        o.danger(he(e, c) ?? c)
    }, t[5] = c, t[6] = o, t[7] = u) : u = t[7];
    let d;
    t[8] !== l || t[9] !== u ? (d = {
        mutationFn: l,
        onError: u
    }, t[8] = l, t[9] = u, t[10] = d) : d = t[10];
    let f = _(d),
        p;
    t[11] === a ? p = t[12] : (p = a.formatMessage(Y.downloadSkillAction), t[11] = a, t[12] = p);
    let m;
    t[13] === f ? m = t[14] : (m = () => f.mutate(), t[13] = f, t[14] = m);
    let h;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, J.jsx)(ne, {}), t[15] = h) : h = t[15];
    let g;
    return t[16] !== f.isPending || t[17] !== p || t[18] !== m ? (g = (0, J.jsx)(j, {
        "aria-label": p,
        color: `primary`,
        loading: f.isPending,
        onClick: m,
        pill: !0,
        size: `lg`,
        iconSize: `lg`,
        uniform: !0,
        variant: `ghost`,
        children: h
    }), t[16] = f.isPending, t[17] = p, t[18] = m, t[19] = g) : g = t[19], g
}
var Re, J, Y, ze = e((() => {
    Re = y(), Oe(), z(), T(), ue(), o(), a(), M(), N(), v(), p(), J = l(), Y = u({
        downloadSkillAction: {
            id: `Hermes.GptStudio.Builder.SkillDownloadButton.downloadSkillAction`,
            defaultMessage: `Download skill`
        },
        downloadSkillFailedFallback: {
            id: `Hermes.GptStudio.Builder.SkillDownloadButton.downloadSkillFailedFallback`,
            defaultMessage: `We couldn't download this skill right now.`
        }
    })
}));
async function Be() {}

function Ve() {
    oe.set(!0)
}
var He, X, Ue, We = e((() => {
        He = y(), z(), ge(), Fe(), xe(), je(), U(), P(), M(), N(), De(), p(), s(), H(), X = l(), Ue = e => {
            "use forget";
            let t = (0, He.c)(23),
                {
                    skill: n
                } = e,
                {
                    nodeId: r
                } = m(),
                i = x(),
                {
                    isPending: a
                } = pe(),
                o = !r,
                s;
            t[0] !== r || t[1] !== n.id ? (s = {
                nodeId: r,
                skillId: n.id
            }, t[0] = r, t[1] = n.id, t[2] = s) : s = t[2];
            let {
                data: c
            } = C(s), l = me(r, n.id), u = fe(r, n.id);
            if (c?.node == null) return null;
            let d = c.node,
                p;
            t[3] === d ? p = t[4] : (p = le(d), t[3] = d, t[4] = p);
            let h = p,
                g;
            t[5] !== i || t[6] !== a || t[7] !== d.id || t[8] !== d.kind || t[9] !== n.id || t[10] !== u ? (g = d.kind === `folder` && (0, X.jsxs)(X.Fragment, {
                children: [(0, X.jsxs)(q, {
                    children: [(0, X.jsx)(q.Trigger, {
                        children: (0, X.jsxs)(j, {
                            color: `primary`,
                            variant: `outline`,
                            size: `lg`,
                            iconSize: `lg`,
                            pill: !0,
                            disabled: a,
                            onClick: Be,
                            children: [(0, X.jsx)(ie, {
                                className: `-ms-0.5 size-5`
                            }), (0, X.jsx)(f, {
                                ...W.upload
                            }), (0, X.jsx)(ae, {
                                className: `-me-1 size-4`
                            })]
                        })
                    }), (0, X.jsxs)(q.Content, {
                        align: `center`,
                        minWidth: `auto`,
                        children: [(0, X.jsxs)(q.Item, {
                            onSelect: () => {
                                I({
                                    actionType: L.FILE_UPLOAD_PICKER_OPEN,
                                    source: B.SKILL_DETAIL,
                                    file: {
                                        parentFileNodeId: d.id,
                                        uploadMode: ce.FILE,
                                        uploadSource: se.PICKER
                                    },
                                    skill: {
                                        skillId: n.id
                                    }
                                }), Ae({
                                    mode: `file`,
                                    onSelectFiles: e => {
                                        u.mutate(e)
                                    }
                                })
                            },
                            children: [(0, X.jsx)(ie, {
                                className: `size-4.5`
                            }), (0, X.jsx)(f, {
                                ...W.uploadFiles
                            })]
                        }), (0, X.jsxs)(q.Item, {
                            onSelect: () => {
                                I({
                                    actionType: L.FILE_UPLOAD_PICKER_OPEN,
                                    source: B.SKILL_DETAIL,
                                    file: {
                                        parentFileNodeId: d.id,
                                        uploadMode: ce.FOLDER,
                                        uploadSource: se.PICKER
                                    },
                                    skill: {
                                        skillId: n.id
                                    }
                                }), Ae({
                                    mode: `folder`,
                                    onSelectFiles: e => {
                                        u.mutate(e)
                                    }
                                })
                            },
                            children: [(0, X.jsx)(k, {
                                className: `size-4.5`
                            }), (0, X.jsx)(f, {
                                ...W.uploadFolder
                            })]
                        })]
                    })]
                }), (0, X.jsx)(j, {
                    color: `primary`,
                    variant: `outline`,
                    size: `lg`,
                    iconSize: `lg`,
                    pill: !0,
                    uniform: !0,
                    disabled: a,
                    "aria-label": i.formatMessage(W.delete),
                    onClick: Ve,
                    children: (0, X.jsx)(k, {
                        className: `size-5`
                    })
                })]
            }), t[5] = i, t[6] = a, t[7] = d.id, t[8] = d.kind, t[9] = n.id, t[10] = u, t[11] = g) : g = t[11];
            let _;
            t[12] !== l || t[13] !== i || t[14] !== o || t[15] !== a || t[16] !== h || t[17] !== d.recursive_parents || t[18] !== n.id ? (_ = !o && !h && (0, X.jsx)(j, {
                color: `primary`,
                variant: `outline`,
                size: `lg`,
                iconSize: `lg`,
                pill: !0,
                uniform: !0,
                "aria-label": i.formatMessage(W.delete),
                disabled: a,
                loading: l.isPending,
                onClick: async () => {
                    await l.mutateAsync(), F.navigate(Pe({
                        skillId: n.id,
                        recursiveParents: d.recursive_parents
                    }), {
                        replace: !0
                    })
                },
                children: (0, X.jsx)(A, {
                    className: `size-5 text-red-500`
                })
            }), t[12] = l, t[13] = i, t[14] = o, t[15] = a, t[16] = h, t[17] = d.recursive_parents, t[18] = n.id, t[19] = _) : _ = t[19];
            let v;
            return t[20] !== g || t[21] !== _ ? (v = (0, X.jsxs)(X.Fragment, {
                children: [g, _]
            }), t[20] = g, t[21] = _, t[22] = v) : v = t[22], v
        }
    })),
    Ge, Z, Ke, Q, qe = e((() => {
        Ge = y(), z(), Me(), ve(), ze(), We(), _e(), U(), P(), O(), M(), N(), we(), p(), s(), Ce(), Te(), Z = l(), Ke = () => {
            "use forget";
            let e = (0, Ge.c)(41),
                t = x(),
                {
                    canManageChatGptSkills: n,
                    removeSkill: r,
                    isReadonly: i,
                    skills: a
                } = Se(),
                {
                    gptId: o,
                    skillId: s
                } = m(),
                c;
            if (e[0] !== s || e[1] !== a) {
                let t;
                e[3] === s ? t = e[4] : (t = e => e.id === s, e[3] = s, e[4] = t), c = a.find(t), e[0] = s, e[1] = a, e[2] = c
            } else c = e[2];
            let l = c,
                u = d(`/agents/studio/edit/:gptId/skills/:skillId`) != null;
            if (!o || !l) {
                let t;
                return e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Z.jsx)(g, {
                    to: F.buildRoute(``),
                    replace: !0
                }), e[5] = t) : t = e[5], t
            }
            let f = `chatgpt_skill_id` in l,
                p = l.name || l.id,
                h = !i && (!f || n),
                _;
            e[6] !== t || e[7] !== r || e[8] !== l.icon?.name || e[9] !== l.id || e[10] !== p ? (_ = () => {
                ye((0, Z.jsx)(be, {
                    icon: (0, Z.jsx)(Ee, {
                        name: l.icon?.name,
                        borderStyle: `normal`,
                        className: `size-10`,
                        iconClassName: `size-8`
                    }),
                    title: t.formatMessage(W.removeSkillDialogTitle, {
                        skillName: p
                    }),
                    description: t.formatMessage(W.removeSkillDialogDescription, {
                        skillName: p
                    }),
                    deleteErrorFallback: t.formatMessage(W.removeSkillDialogError),
                    onCancel: G,
                    onDelete: () => {
                        I({
                            actionType: L.SKILL_REMOVE,
                            actionResult: R.STARTED,
                            source: B.SKILL_DETAIL,
                            skill: {
                                skillId: l.id
                            }
                        }), r(l.id), G()
                    }
                }))
            }, e[6] = t, e[7] = r, e[8] = l.icon?.name, e[9] = l.id, e[10] = p, e[11] = _) : _ = e[11];
            let v = _,
                y;
            e[12] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, Z.jsx)(Ne, {}), e[12] = y) : y = e[12];
            let b;
            e[13] !== t || e[14] !== f || e[15] !== u || e[16] !== l.id ? (b = !f && (0, Z.jsxs)(K, {
                value: u ? `overview` : `files`,
                onChange: e => {
                    I({
                        actionType: L.SKILL_VIEW_MODE_CHANGE,
                        source: B.SKILL_DETAIL,
                        skill: {
                            skillId: l.id,
                            skillViewMode: e === `files` ? V.FILES : V.OVERVIEW
                        }
                    }), e === `files` ? F.navigate(`/skills/${l.id}/files`) : F.navigate(`/skills/${l.id}`)
                },
                pill: !0,
                gutterSize: `2xs`,
                size: `lg`,
                "aria-label": t.formatMessage(Q.selectSkillViewMode),
                children: [(0, Z.jsx)(K.Option, {
                    value: `overview`,
                    children: (0, Z.jsx)(te, {
                        className: `size-5`
                    })
                }), (0, Z.jsx)(K.Option, {
                    value: `files`,
                    children: (0, Z.jsx)(re, {
                        className: `text-token-text-secondary size-5`
                    })
                })]
            }), e[13] = t, e[14] = f, e[15] = u, e[16] = l.id, e[17] = b) : b = e[17];
            let S;
            e[18] === b ? S = e[19] : (S = (0, Z.jsxs)(`div`, {
                className: `flex gap-2`,
                children: [y, b]
            }), e[18] = b, e[19] = S);
            let C;
            e[20] !== o || e[21] !== f || e[22] !== l.id ? (C = !f && (0, Z.jsx)(Le, {
                gptId: o,
                skillId: l.id
            }), e[20] = o, e[21] = f, e[22] = l.id, e[23] = C) : C = e[23];
            let w;
            e[24] !== h || e[25] !== t || e[26] !== f || e[27] !== u || e[28] !== i || e[29] !== v || e[30] !== l ? (w = u ? h && (0, Z.jsx)(j, {
                color: `danger`,
                variant: `outline`,
                size: `lg`,
                uniform: !0,
                pill: !0,
                "aria-label": t.formatMessage(Q.removeSkillAction),
                onClick: v,
                children: (0, Z.jsx)(A, {
                    className: `size-5`
                })
            }) : !i && !f && (0, Z.jsx)(Ue, {
                skill: l
            }), e[24] = h, e[25] = t, e[26] = f, e[27] = u, e[28] = i, e[29] = v, e[30] = l, e[31] = w) : w = e[31];
            let T;
            e[32] !== C || e[33] !== w ? (T = (0, Z.jsxs)(`div`, {
                className: `flex gap-2`,
                children: [C, w]
            }), e[32] = C, e[33] = w, e[34] = T) : T = e[34];
            let E;
            e[35] !== S || e[36] !== T ? (E = (0, Z.jsxs)(`div`, {
                className: `mb-6 flex justify-between`,
                children: [S, T]
            }), e[35] = S, e[36] = T, e[37] = E) : E = e[37];
            let D;
            e[38] === Symbol.for(`react.memo_cache_sentinel`) ? (D = (0, Z.jsx)(ee, {}), e[38] = D) : D = e[38];
            let O;
            return e[39] === E ? O = e[40] : (O = (0, Z.jsxs)(`div`, {
                children: [E, D]
            }), e[39] = E, e[40] = O), O
        }, Q = u({
            selectSkillViewMode: {
                id: `Hermes.GptStudio.Builder.SkillToolDetail.selectSkillViewMode`,
                defaultMessage: `Select skill view mode`
            },
            removeSkillAction: {
                id: `Hermes.GptStudio.Builder.SkillToolDetail.removeSkillAction`,
                defaultMessage: `Remove skill`
            }
        })
    }));
async function Je({
    params: e
}) {
    let n = t(),
        r = [n.prefetchQuery(de({
            gptId: e.gptId,
            skillId: e.skillId
        }))];
    return e.skillId.startsWith(`hsk_`) && r.push(n.prefetchQuery(w({
        gptId: e.gptId,
        skillId: e.skillId,
        depth: null
    }))), await Promise.all(r), n
}
async function Ye(e) {
    return await Je(e), {
        dehydratedState: null
    }
}
var Xe, $, Ze, Qe, $e = e((() => {
    s(), Xe = y(), qe(), E(), H(), n(), v(), $ = l(), Ze = () => !1, Qe = h(function() {
        "use forget";
        let e = (0, Xe.c)(3),
            t = c(),
            n;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(Ke, {}), e[0] = n) : n = e[0];
        let r;
        return e[1] === t.dehydratedState ? r = e[2] : (r = (0, $.jsx)(b, {
            state: t.dehydratedState,
            children: n
        }), e[1] = t.dehydratedState, e[2] = r), r
    })
}));
e((() => {
    $e()
}))();
export {
    Ye as clientLoader, Qe as
    default, Ze as shouldRevalidate
};
//# sourceMappingURL=agents_.studio._b.edit._gptId.skills._skillId-i3m6qpmp.js.map