import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as n,
    P5 as r,
    g8 as i,
    zU as a
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as o,
    Ln as s,
    Lt as c,
    Nn as l,
    Q as u,
    Rn as d,
    Vn as f,
    p,
    s as m,
    wn as h,
    zn as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Azt as _,
    wzt as v
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    _t as ee
} from "./1c919af1-n3qwx9w7ipxrf1ap.js";
import {
    b as te,
    d as y,
    t as ne,
    x as re
} from "./707eab0c-irb6aeijstxf8tnp.js";
import {
    t as ie
} from "./a35abcd6-fl6iafxr1mqknzi0.js";
import {
    f as b,
    t as x
} from "./5579e947-gs9frw5hsowhcegr.js";
import {
    At as ae,
    Ct as oe,
    St as se,
    Tt as ce,
    kt as le,
    xt as ue
} from "./8e7d0a25-hwa0ulw1wkqs45zg.js";
import {
    c as S,
    o as de
} from "./e2ef8fe8-flhz18fnpp20sne0.js";
import {
    T as C,
    f as w,
    g as fe
} from "./11e71471-eewkyapps63jx2nf.js";
import {
    t as T
} from "./500b4410-if3qzgea0zf176wq.js";
import {
    t as pe
} from "./500b4410-cxp1azdr70xk8js9.js";
import {
    c as me,
    d as he,
    s as ge
} from "./5334be9f-i5ql5ur3ivbyse7y.js";
import {
    n as _e,
    r as ve
} from "./eab609b4-besi3ne4lonkhdi6.js";
import {
    n as E,
    t as D
} from "./b876a4da-pbwc0hflkkd8yhfr.js";
import {
    n as O,
    t as k
} from "./3bbf1750-kwg815i9x10qbwa3.js";
import {
    n as A,
    t as j
} from "./a4e05c1e-2k7h6agnmle1lemy.js";
var M, N, P, F = e((() => {
        M = `ph-mYG_BreadcrumbLink`, N = `ph-mYG_BreadcrumbPathLink`, P = {
            BreadcrumbLink: M,
            BreadcrumbPathLink: N
        }
    })),
    I, L, R, z, B, V, H, U, W, ye = e((() => {
        I = h(), me(), ve(), A(), C(), _(), b(), i(), n(), ne(), ie(), te(), pe(), m(), L = t(f()), d(), F(), R = o(), z = e => {
            "use forget";
            let t = (0, I.c)(29),
                {
                    agentId: n,
                    channelBinding: i,
                    channelName: a
                } = e,
                o;
            t[0] === n ? o = t[1] : (o = () => {
                let e = v().lastPublishedGpt;
                return e?.id === n && e.persistent_folder !== `none`
            }, t[0] = n, t[1] = o);
            let s = r(o),
                [c, u] = (0, L.useState)(null),
                d;
            t[2] !== n || t[3] !== i || t[4] !== c ? (d = {
                agentId: n,
                selectedNodeId: c,
                channelBinding: i
            }, t[2] = n, t[3] = i, t[4] = c, t[5] = d) : d = t[5];
            let {
                isLoading: f,
                isError: p,
                selectedNode: m
            } = he(d), h = m == null || m.kind === `folder` && m.parent_node_id == null && (m.children?.length ?? 0) === 0;
            if (s && f) {
                let e;
                t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, R.jsx)(`div`, {
                    className: `flex min-h-64 items-center justify-center`,
                    children: (0, R.jsx)(re, {})
                }), t[6] = e) : e = t[6];
                let r;
                return t[7] !== n || t[8] !== a || t[9] !== m ? (r = (0, R.jsx)(B, {
                    agentId: n,
                    channelName: a,
                    node: m,
                    onSelectNode: u,
                    children: e
                }), t[7] = n, t[8] = a, t[9] = m, t[10] = r) : r = t[10], r
            }
            if (!s || h) {
                let e;
                t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, R.jsx)(U, {}), t[11] = e) : e = t[11];
                let r;
                return t[12] !== n || t[13] !== a || t[14] !== m ? (r = (0, R.jsx)(B, {
                    agentId: n,
                    channelName: a,
                    node: m,
                    onSelectNode: u,
                    children: e
                }), t[12] = n, t[13] = a, t[14] = m, t[15] = r) : r = t[15], r
            }
            if (p) {
                let e;
                t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, R.jsx)(`div`, {
                    className: `text-secondary rounded-3xl border p-4 text-sm`,
                    children: (0, R.jsx)(l, {
                        ...W.loadMemoryFilesFailed
                    })
                }), t[16] = e) : e = t[16];
                let r;
                return t[17] !== n || t[18] !== a || t[19] !== m ? (r = (0, R.jsx)(B, {
                    agentId: n,
                    channelName: a,
                    node: m,
                    onSelectNode: u,
                    children: e
                }), t[17] = n, t[18] = a, t[19] = m, t[20] = r) : r = t[20], r
            }
            let g;
            t[21] !== n || t[22] !== m ? (g = (0, R.jsx)(`div`, {
                className: `min-h-[300px]`,
                children: m.kind === `folder` ? (0, R.jsx)(j, {
                    queryNodeId: m.id,
                    node: m,
                    childNodes: m.children ?? [],
                    rootUrl: `#`,
                    isReadonly: !0,
                    onSelectNode: u
                }) : (0, R.jsx)(_e, {
                    agentId: n,
                    node: m
                })
            }), t[21] = n, t[22] = m, t[23] = g) : g = t[23];
            let _;
            return t[24] !== n || t[25] !== a || t[26] !== m || t[27] !== g ? (_ = (0, R.jsx)(B, {
                agentId: n,
                channelName: a,
                node: m,
                onSelectNode: u,
                children: g
            }), t[24] = n, t[25] = a, t[26] = m, t[27] = g, t[28] = _) : _ = t[28], _
        }, B = e => {
            "use forget";
            let t = (0, I.c)(21),
                {
                    agentId: n,
                    children: r,
                    channelName: i,
                    node: a,
                    onSelectNode: o
                } = e,
                s;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, R.jsx)(w, {
                className: `size-11 self-start`
            }), t[0] = s) : s = t[0];
            let c;
            t[1] !== i || t[2] !== a || t[3] !== o ? (c = (0, R.jsx)(H, {
                channelName: i,
                node: a,
                onSelectNode: o
            }), t[1] = i, t[2] = a, t[3] = o, t[4] = c) : c = t[4];
            let l;
            t[5] === i ? l = t[6] : (l = (0, R.jsx)(`h2`, {
                className: `text-primary my-0.5 text-lg font-normal`,
                children: i
            }), t[5] = i, t[6] = l);
            let u;
            t[7] !== c || t[8] !== l ? (u = (0, R.jsxs)(`div`, {
                className: `flex-1`,
                children: [c, l]
            }), t[7] = c, t[8] = l, t[9] = u) : u = t[9];
            let d;
            t[10] !== n || t[11] !== a ? (d = a?.kind === `file` && (0, R.jsx)(V, {
                agentId: n,
                node: a
            }), t[10] = n, t[11] = a, t[12] = d) : d = t[12];
            let f;
            t[13] !== u || t[14] !== d ? (f = (0, R.jsxs)(`div`, {
                className: `flex items-center gap-3`,
                children: [s, u, d]
            }), t[13] = u, t[14] = d, t[15] = f) : f = t[15];
            let p;
            t[16] === r ? p = t[17] : (p = (0, R.jsx)(`div`, {
                className: `pt-4`,
                children: r
            }), t[16] = r, t[17] = p);
            let m;
            return t[18] !== f || t[19] !== p ? (m = (0, R.jsxs)(`section`, {
                className: `mt-6`,
                children: [f, p]
            }), t[18] = f, t[19] = p, t[20] = m) : m = t[20], m
        }, V = e => {
            "use forget";
            let t = (0, I.c)(18),
                {
                    agentId: n,
                    node: r
                } = e,
                i = g(),
                o;
            t[0] !== n || t[1] !== r ? (o = () => ge({
                agentId: n,
                node: r
            }), t[0] = n, t[1] = r, t[2] = o) : o = t[2];
            let s;
            t[3] === i ? s = t[4] : (s = () => {
                a().danger(i.formatMessage(W.downloadFileFailed))
            }, t[3] = i, t[4] = s);
            let c;
            t[5] !== o || t[6] !== s ? (c = {
                mutationFn: o,
                onError: s
            }, t[5] = o, t[6] = s, t[7] = c) : c = t[7];
            let l = p(c);
            if (r.file_id == null) return null;
            let u;
            t[8] !== i || t[9] !== r.name ? (u = i.formatMessage(W.downloadFileLabel, {
                fileName: r.name
            }), t[8] = i, t[9] = r.name, t[10] = u) : u = t[10];
            let d;
            t[11] === l ? d = t[12] : (d = () => l.mutate(), t[11] = l, t[12] = d);
            let f;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, R.jsx)(ee, {}), t[13] = f) : f = t[13];
            let m;
            return t[14] !== l.isPending || t[15] !== u || t[16] !== d ? (m = (0, R.jsx)(y, {
                "aria-label": u,
                color: `primary`,
                loading: l.isPending,
                onClick: d,
                pill: !0,
                size: `lg`,
                iconSize: `lg`,
                uniform: !0,
                variant: `ghost`,
                children: f
            }), t[14] = l.isPending, t[15] = u, t[16] = d, t[17] = m) : m = t[17], m
        }, H = e => {
            "use forget";
            let t = (0, I.c)(26),
                {
                    node: n,
                    onSelectNode: r,
                    channelName: i
                } = e,
                a, o, s, c, u;
            if (t[0] !== i || t[1] !== n || t[2] !== r) {
                let [, ...e] = n?.recursive_parents ?? [], d = n != null && (e.length > 0 || n.parent_node_id != null && n.name.length > 0);
                a = `text-tertiary flex max-w-full items-center gap-1 text-xs`;
                let f;
                t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (f = x.buildRoute(`/memory`), t[8] = f) : f = t[8], t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, R.jsx)(T, {
                    to: f,
                    underline: `hover`,
                    className: P.BreadcrumbLink,
                    children: (0, R.jsx)(l, {
                        ...W.memoryRoot
                    })
                }), s = (0, R.jsx)(`span`, {
                    children: `/`
                }), t[9] = o, t[10] = s) : (o = t[9], s = t[10]), t[11] !== i || t[12] !== d || t[13] !== r ? (c = d ? (0, R.jsx)(T, {
                    to: `#`,
                    underline: `hover`,
                    className: P.BreadcrumbLink,
                    onClick: e => {
                        e.preventDefault(), r(null)
                    },
                    children: i
                }) : (0, R.jsx)(`span`, {
                    className: `text-tertiary truncate`,
                    children: i
                }), t[11] = i, t[12] = d, t[13] = r, t[14] = c) : c = t[14];
                let p;
                t[15] === r ? p = t[16] : (p = e => (0, R.jsxs)(`span`, {
                    className: `contents max-w-full`,
                    children: [(0, R.jsx)(`span`, {
                        children: `/`
                    }), (0, R.jsx)(T, {
                        to: `#`,
                        underline: `hover`,
                        onClick: t => {
                            t.preventDefault(), r(e.id)
                        },
                        className: P.BreadcrumbPathLink,
                        children: (0, R.jsx)(`span`, {
                            className: `truncate`,
                            children: e.name
                        })
                    })]
                }, e.id), t[15] = r, t[16] = p), u = e.map(p), t[0] = i, t[1] = n, t[2] = r, t[3] = a, t[4] = o, t[5] = s, t[6] = c, t[7] = u
            } else a = t[3], o = t[4], s = t[5], c = t[6], u = t[7];
            let d;
            t[17] === n ? d = t[18] : (d = n?.parent_node_id != null && n.name.length > 0 && (0, R.jsxs)(R.Fragment, {
                children: [(0, R.jsx)(`span`, {
                    children: `/`
                }), (0, R.jsx)(`span`, {
                    className: `truncate`,
                    children: n.name
                })]
            }), t[17] = n, t[18] = d);
            let f;
            return t[19] !== a || t[20] !== o || t[21] !== s || t[22] !== c || t[23] !== u || t[24] !== d ? (f = (0, R.jsxs)(`nav`, {
                className: a,
                children: [o, s, c, u, d]
            }), t[19] = a, t[20] = o, t[21] = s, t[22] = c, t[23] = u, t[24] = d, t[25] = f) : f = t[25], f
        }, U = () => {
            "use forget";
            let e = (0, I.c)(3),
                t;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, R.jsx)(fe, {
                className: `size-10`
            }), e[0] = t) : t = e[0];
            let n;
            e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, R.jsx)(`div`, {
                className: `text-token-text-primary pt-3 text-base font-semibold`,
                children: (0, R.jsx)(l, {
                    ...W.emptyTitle
                })
            }), e[1] = n) : n = e[1];
            let r;
            return e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, R.jsx)(`div`, {
                className: `flex h-[300px] items-center justify-center rounded-3xl border border-dashed p-4`,
                children: (0, R.jsxs)(`div`, {
                    className: `flex max-w-[450px] flex-col items-center gap-1 text-center`,
                    children: [t, n, (0, R.jsx)(`div`, {
                        className: `text-token-text-secondary text-sm`,
                        children: (0, R.jsx)(l, {
                            ...W.emptyDescription
                        })
                    })]
                })
            }), e[2] = r) : r = e[2], r
        }, W = s({
            loadMemoryFilesFailed: {
                id: `Hermes.GptStudio.Builder.PersistentMemoryFileViewer.loadMemoryFilesFailed`,
                defaultMessage: `Couldn’t load memory files.`
            },
            emptyTitle: {
                id: `Hermes.GptStudio.Builder.PersistentMemoryFileViewer.emptyTitle`,
                defaultMessage: `File-based memory`
            },
            emptyDescription: {
                id: `Hermes.GptStudio.Builder.PersistentMemoryFileViewer.emptyDescription`,
                defaultMessage: `A persistent folder where the agent saves notes, drafts, and outputs so it can continue work over time.`
            },
            memoryRoot: {
                id: `Hermes.GptStudio.Builder.PersistentMemoryFileViewer.memoryRoot`,
                defaultMessage: `Memory`
            },
            downloadFileLabel: {
                id: `Hermes.GptStudio.Builder.PersistentMemoryFileViewer.downloadFileLabel`,
                defaultMessage: `Download {fileName}`
            },
            downloadFileFailed: {
                id: `Hermes.GptStudio.Builder.PersistentMemoryFileViewer.downloadFileFailed`,
                defaultMessage: `Couldn’t download this file.`
            }
        })
    }));

function be() {
    return v().currentGpt
}

function xe() {
    return v().currentGpt
}

function Se() {
    return v().currentGpt
}

function Ce() {
    x.navigate(`/memory`, {
        replace: !0
    })
}
var G, K, q, J, Y, X, Z, Q, $, we = e((() => {
    G = h(), O(), S(), D(), le(), ye(), _(), b(), i(), K = t(f()), d(), u(), q = o(), J = () => {
        "use forget";
        let e = (0, G.c)(7),
            t = g(),
            n = r(be);
        if (n.tools.memory == null || n.id == null) {
            let t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, q.jsx)(Z, {}), e[0] = t) : t = e[0], t
        }
        let i = n.id,
            a;
        e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = {
            type: `chatgpt`
        }, e[1] = a) : a = e[1];
        let o;
        e[2] === t ? o = e[3] : (o = t.formatMessage($.chatgptSectionTitle), e[2] = t, e[3] = o);
        let s;
        return e[4] !== n.id || e[5] !== o ? (s = (0, q.jsx)(Q, {
            children: (0, q.jsx)(z, {
                agentId: i,
                channelBinding: a,
                channelName: o
            })
        }), e[4] = n.id, e[5] = o, e[6] = s) : s = e[6], s
    }, Y = () => {
        "use forget";
        let e = (0, G.c)(18),
            {
                deploymentId: t
            } = c(),
            n = r(xe),
            i;
        e[0] !== n.deployments.slack || e[1] !== t ? (i = n.deployments.slack.find(e => e.deployment_id === t && ae(e)) ?? null, e[0] = n.deployments.slack, e[1] = t, e[2] = i) : i = e[2];
        let a = i;
        if (n.tools.memory == null || n.id == null || a == null) {
            let t;
            return e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, q.jsx)(Z, {}), e[3] = t) : t = e[3], t
        }
        let o;
        e[4] === a ? o = e[5] : (o = ce(a), e[4] = a, e[5] = o);
        let s = o,
            l;
        e[6] === a ? l = e[7] : (l = se(a), e[6] = a, e[7] = l);
        let u = l,
            d;
        e[8] === a ? d = e[9] : (d = ue(oe(a)), e[8] = a, e[9] = d);
        let f = d;
        if (s == null) {
            let t;
            return e[10] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, q.jsx)(Z, {}), e[10] = t) : t = e[10], t
        }
        let p;
        e[11] !== u || e[12] !== s ? (p = {
            type: `slack`,
            linkId: s,
            channelId: u
        }, e[11] = u, e[12] = s, e[13] = p) : p = e[13];
        let m;
        return e[14] !== f || e[15] !== n.id || e[16] !== p ? (m = (0, q.jsx)(Q, {
            children: (0, q.jsx)(z, {
                agentId: n.id,
                channelBinding: p,
                channelName: f
            })
        }), e[14] = f, e[15] = n.id, e[16] = p, e[17] = m) : m = e[17], m
    }, X = () => {
        "use forget";
        let e = (0, G.c)(7),
            {
                triggerId: t
            } = c(),
            n = g(),
            i = r(Se),
            {
                apiTriggerResources: a
            } = E(i.id),
            o = a.find(e => (de(e) ?? e.id) === t) ?? null;
        if (i.tools.memory == null || i.id == null || o == null) {
            let t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, q.jsx)(Z, {}), e[0] = t) : t = e[0], t
        }
        let s = i.id,
            l;
        e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (l = {
            type: `api`
        }, e[1] = l) : l = e[1];
        let u;
        e[2] === n ? u = e[3] : (u = n.formatMessage($.apiSectionTitle), e[2] = n, e[3] = u);
        let d;
        return e[4] !== i.id || e[5] !== u ? (d = (0, q.jsx)(Q, {
            children: (0, q.jsx)(z, {
                agentId: s,
                channelBinding: l,
                channelName: u
            })
        }), e[4] = i.id, e[5] = u, e[6] = d) : d = e[6], d
    }, Z = () => {
        "use forget";
        let e = (0, G.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = [], e[0] = t) : t = e[0], (0, K.useEffect)(Ce, t), null
    }, Q = e => {
        "use forget";
        let t = (0, G.c)(3),
            {
                children: n
            } = e,
            r;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, q.jsx)(`div`, {
            className: `mb-6`,
            children: (0, q.jsx)(k, {
                to: x.buildRoute(`/memory`)
            })
        }), t[0] = r) : r = t[0];
        let i;
        return t[1] === n ? i = t[2] : (i = (0, q.jsxs)(`div`, {
            children: [r, n]
        }), t[1] = n, t[2] = i), i
    }, $ = s({
        chatgptSectionTitle: {
            id: `Hermes.GptStudio.Builder.MemoryChannelDetail.chatgptSectionTitle`,
            defaultMessage: `ChatGPT`
        },
        apiSectionTitle: {
            id: `Hermes.GptStudio.Builder.MemoryChannelDetail.apiSectionTitle`,
            defaultMessage: `API`
        }
    })
}));
export {
    we as i, J as n, Y as r, X as t
};
//# sourceMappingURL=f2cd0d9c-mr2h06p02udjps53.js.map