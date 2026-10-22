import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Drt as n,
    Ert as r,
    HN as i,
    KJ as a,
    Mtt as o,
    Mw as s,
    Ott as c,
    SN as l,
    ast as u,
    dY as d,
    eE as f,
    eY as p,
    gF as m,
    i9 as h,
    lF as g,
    mF as _,
    ost as v,
    pF as y,
    ptt as b,
    r9 as x,
    sY as ee,
    vF as S,
    xN as C
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    At as w,
    Bn as T,
    Ct as te,
    Ht as E,
    Kt as D,
    Ln as O,
    N as k,
    Q as A,
    Rn as j,
    Vn as M,
    kt as ne,
    s as N,
    wn as P
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CKn as F,
    Ctn as I,
    Fp as L,
    GVn as re,
    Ip as ie,
    Njt as ae,
    U3t as oe,
    U8 as se,
    V3t as ce,
    WVn as le,
    ar as ue,
    bKn as de,
    cr as fe,
    fA as pe,
    iL as me,
    jUn as he,
    mFt as ge,
    or as _e,
    pA as ve,
    pFt as ye,
    rL as be,
    sr as xe,
    wtn as Se
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    $x as R,
    Vx as Ce,
    Xx as we,
    Zx as Te,
    dS as z,
    gS as B,
    mS as Ee,
    nS as V,
    oS as H,
    rS as De,
    sS as U,
    uS as Oe,
    yS as W
} from "./c2675c8c-f8x469cgefxzeo6l.js";
import {
    D_ as ke,
    Lt as Ae,
    O_ as je,
    Rt as Me
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
var Ne = e((() => {
        Ce(), R(`kind`, [U({
            type: H(`feather-live-preview`),
            version: H(1),
            kind: H(`event`),
            channel: B().min(1),
            payload: W()
        }), U({
            type: H(`feather-live-preview`),
            version: H(1),
            kind: H(`response`),
            channel: B().min(1),
            requestId: B(),
            payload: W()
        })]), R(`ok`, [z({
            ok: H(!0),
            result: W()
        }), z({
            ok: H(!1),
            error: B()
        })])
    })),
    Pe, Fe, G, Ie, Le, K, Re = e((() => {
        Ce(), Ne(), Pe = 1e5, Fe = 1e3, G = B().min(1).max(128), Ie = U({
            id: G,
            message_id: G,
            start_offset: V().nonnegative(),
            end_offset: V().positive(),
            substring: B().min(1).max(Pe),
            rendered_anchor: U({
                version: H(1),
                text_hash: B().regex(/^[a-f0-9]{64}$/),
                prefix: B().max(32),
                suffix: B().max(32)
            }),
            form_data: Ee(B(), W())
        }).refine(({
            substring: e,
            start_offset: t,
            end_offset: n
        }) => e.length === n - t), Le = U({
            messageIds: we(G),
            highlights: we(Ie).max(Fe)
        }).refine(({
            highlights: e
        }) => new Set(e.map(({
            id: e
        }) => e)).size === e.length).refine(({
            messageIds: e,
            highlights: t
        }) => {
            let n = new Set(e);
            return t.every(({
                message_id: e
            }) => n.has(e))
        }), K = z({
            canEdit: Te()
        }), De(K, Le), R(`event`, [z({
            event: H(`capabilities`),
            capabilities: K
        }), z({
            event: H(`viewport`),
            top: Oe().finite(),
            bottom: Oe().finite()
        })])
    })),
    ze = e((() => {
        Re()
    })),
    Be = e((() => {
        P(), f(), s(), ae(), he(), se(), i(), M(), D(), j(), Re(), ze(), T(), O({
            add: {
                id: `chatgpt.feather_preview.highlights.editor.add.label`,
                defaultMessage: `Add feedback`
            },
            edit: {
                id: `chatgpt.feather_preview.highlights.editor.edit.title`,
                defaultMessage: `Edit feedback`
            },
            feedback: {
                id: `chatgpt.feather_preview.highlights.popup.feedback.label`,
                defaultMessage: `Feedback`
            },
            reaction: {
                id: `chatgpt.feather_preview.highlights.reaction.group.label`,
                defaultMessage: `Feedback reaction`
            },
            good: {
                id: `chatgpt.feather_preview.highlights.reaction.option.good`,
                defaultMessage: `Good`
            },
            bad: {
                id: `chatgpt.feather_preview.highlights.reaction.option.bad`,
                defaultMessage: `Bad`
            },
            placeholder: {
                id: `chatgpt.feather_preview.highlights.editor.feedback.placeholder`,
                defaultMessage: `Add feedback…`
            },
            close: {
                id: `chatgpt.feather_preview.highlights.popup.button.close.label`,
                defaultMessage: `Close feedback`
            },
            delete: {
                id: `chatgpt.feather_preview.highlights.editor.button.delete.label`,
                defaultMessage: `Delete feedback`
            },
            save: {
                id: `chatgpt.feather_preview.highlights.editor.button.save.label`,
                defaultMessage: `Save`
            },
            retry: {
                id: `chatgpt.feather_preview.highlights.error.button.retry.label`,
                defaultMessage: `Retry`
            },
            overlapping: {
                id: `chatgpt.feather_preview.highlights.overlap.group.label`,
                defaultMessage: `Overlapping feedback`
            },
            commentCount: {
                id: `chatgpt.feather_preview.highlights.overlap.count.label`,
                defaultMessage: `{count, plural, one {# comment} other {# comments}}`
            },
            chooseToEdit: {
                id: `chatgpt.feather_preview.highlights.overlap.edit.help_text`,
                defaultMessage: `Choose a comment to edit`
            },
            clickToEdit: {
                id: `chatgpt.feather_preview.highlights.popup.edit.help_text`,
                defaultMessage: `Click to edit`
            },
            loadFailed: {
                id: `chatgpt.feather_preview.highlights.status.load_failed`,
                defaultMessage: `Could not load feedback.`
            },
            saveFailed: {
                id: `chatgpt.feather_preview.highlights.status.save_failed`,
                defaultMessage: `Could not save feedback.`
            },
            saved: {
                id: `chatgpt.feather_preview.highlights.status.saved`,
                defaultMessage: `Feedback saved.`
            },
            deleted: {
                id: `chatgpt.feather_preview.highlights.status.deleted`,
                defaultMessage: `Feedback deleted.`
            },
            readOnly: {
                id: `chatgpt.feather_preview.highlights.status.read_only`,
                defaultMessage: `Feedback is read only.`
            }
        })
    }));

function q(e) {
    typeof window > `u` || (window.__internalRenderConversationStatus = e)
}

function Ve(e) {
    return e instanceof Error ? e.message : String(e)
}

function He(e) {
    "use forget";
    let t = (0, J.c)(20),
        {
            conversation: n,
            networkPolicy: r,
            disableExternalMedia: i
        } = e,
        a = r === void 0 ? `none` : r,
        o;
    t[0] === a ? o = t[1] : (o = {
        isInternalPreview: !0,
        networkPolicy: a
    }, t[0] = a, t[1] = o);
    let s;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = {
        lockSystemHints: !0
    }, t[2] = s) : s = t[2];
    let c, u;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, X.jsx)(L, {}), u = (0, X.jsx)(ce, {}), t[3] = c, t[4] = u) : (c = t[3], u = t[4]);
    let d;
    t[5] !== n || t[6] !== i ? (d = (0, X.jsx)(de, {
        children: (0, X.jsxs)(Y.Suspense, {
            fallback: c,
            children: [u, (0, X.jsx)(`div`, {
                className: `@container w-full`,
                children: (0, X.jsx)(pe.Provider, {
                    value: !0,
                    children: (0, X.jsx)(Ae, {
                        conversation: n,
                        disableExternalMedia: i,
                        onRequestCompletion: l,
                        clearPrefetchNavlink: l
                    })
                })
            })]
        })
    }), t[5] = n, t[6] = i, t[7] = d) : d = t[7];
    let f;
    t[8] !== n || t[9] !== d ? (f = (0, X.jsx)(ke, {
        conversation: n,
        options: s,
        children: d
    }), t[8] = n, t[9] = d, t[10] = f) : f = t[10];
    let p;
    t[11] === n.id ? p = t[12] : (p = (0, X.jsx)(ue, {
        conversationId: n.id
    }), t[11] = n.id, t[12] = p);
    let m;
    t[13] !== o || t[14] !== f || t[15] !== p ? (m = (0, X.jsxs)(xe.Provider, {
        value: o,
        children: [f, p]
    }), t[13] = o, t[14] = f, t[15] = p, t[16] = m) : m = t[16];
    let h;
    return t[17] !== n || t[18] !== m ? (h = (0, X.jsx)(ye, {
        children: (0, X.jsx)(g.Provider, {
            value: n,
            children: m
        })
    }), t[17] = n, t[18] = m, t[19] = h) : h = t[19], h
}

function Ue(e) {
    let t = {},
        n = `client-created-root`;
    t[n] = {
        id: n,
        message: {
            id: n,
            author: {
                role: c.Root
            },
            content: {
                content_type: b.Text,
                parts: []
            }
        },
        parent: ``,
        children: []
    };
    let r = n,
        i = [],
        a = new Set;
    for (let t of e.messages) a.add(t.id);
    for (let n of e.messages) {
        let e = n.metadata?.parent_id ?? r;
        a.has(e) || (e = r), t[n.id] = {
            id: n.id,
            message: n,
            parent: e,
            children: []
        }, r = n.id, i.push(...n.metadata?.safe_urls ?? [])
    }
    for (let [e, n] of Object.entries(t)) n.parent !== `` && t[n.parent]?.children?.push(e);
    let o = e.conversation_id ?? e.id;
    return {
        title: e.title ?? null,
        conversation_id: o,
        mapping: t,
        current_node: r,
        moderation_results: [],
        safe_urls: e.safe_urls ?? i,
        ...Se(e, `conversation_template_id`, `gizmo_id`, `is_archived`, `conversation_origin`, `async_status`, `update_time`, `is_do_not_remember`)
    }
}

function We(e) {
    return typeof e == `string` && e.length > 0
}

function Ge() {
    "use forget";
    let e = (0, J.c)(14),
        t = k(),
        [n, r] = (0, Y.useState)(null),
        i;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = {
        active: null,
        ready: !1,
        resetting: null
    }, e[0] = i) : i = e[0];
    let a = (0, Y.useRef)(i),
        o = w(),
        s, c;
    if (e[1] !== o.search) {
        let t = new URLSearchParams(o.search);
        s = t.get(Z) === `deps-only` ? `deps-only` : `none`, c = t.get(Q) === `1` || t.get($) === `1`, e[1] = o.search, e[2] = s, e[3] = c
    } else s = e[2], c = e[3];
    let l = c,
        u, d;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (u = () => {
        let e = a.current,
            t = {
                version: 1,
                async render(n, i) {
                    if (typeof n != `string` || !n.trim() || n.length > 128 || typeof i != `string`) throw Error(`Invalid render request`);
                    if (e.active || window.__maraschinoRender !== t) throw Error(`Render page is not idle`);
                    let a = JSON.parse(i);
                    if (typeof a != `object` || !a || Array.isArray(a) || !(`messages` in a) || !Array.isArray(a.messages)) throw Error(`Invalid render conversation`);
                    let o = Ue(a),
                        s = o.conversation_id;
                    if (!We(s)) throw Error(`Render conversation has no ID`);
                    let c = y({
                        sharedConversationId: s
                    });
                    q({
                        status: `loading`,
                        requestId: n
                    });
                    try {
                        me(), re(c, o, {
                            source: `internal-render-conversation`
                        }), ee(c.id, e => {
                            e.continuingFromSharedConversationId = s
                        })
                    } catch (e) {
                        let t = e;
                        throw _(c), q({
                            status: `error`,
                            requestId: n,
                            error: Ve(t)
                        }), t
                    }
                    await new Promise((t, i) => {
                        let a = {
                            requestId: n,
                            conversation: c,
                            resolve: () => {
                                e.active !== a || e.resetting || (e.ready = !0, q({
                                    status: `ready`,
                                    requestId: n
                                }), t())
                            },
                            reject: i
                        };
                        e.active = a, e.ready = !1, r(a)
                    })
                },
                async reset(n) {
                    if (e.active?.requestId !== n || !e.ready || e.resetting || window.__maraschinoRender !== t) throw Error(`Render page cannot reset this request`);
                    q({
                        status: `loading`,
                        requestId: n
                    }), await new Promise((t, n) => {
                        e.resetting = {
                            resolve: t,
                            reject: n
                        }, r(null)
                    })
                }
            };
        return window.__maraschinoRender = t, q({
            status: `idle`
        }), () => {
            window.__maraschinoRender === t && delete window.__maraschinoRender;
            let n = Error(`Render page was removed`);
            e.active?.reject(n), e.resetting?.reject(n), e.active && _(e.active.conversation), e.active = null, e.ready = !1, e.resetting = null
        }
    }, d = [], e[4] = u, e[5] = d) : (u = e[4], d = e[5]), (0, Y.useEffect)(u, d);
    let f, p;
    e[6] !== n || e[7] !== t ? (f = () => {
        let e = a.current;
        if (n || !e.active || !e.resetting) return;
        let r = e.active,
            i = e.resetting;
        if (e.resetting = null, !_(r.conversation)) {
            let e = Error(`Render conversation could not be discarded`);
            q({
                status: `error`,
                requestId: r.requestId,
                error: e.message
            }), i.reject(e);
            return
        }
        t.removeQueries({
            queryKey: [`getFileDownloadLink`]
        }), document.getElementById(`recharts_measurement_span`)?.remove(), e.active = null, e.ready = !1, q({
            status: `idle`,
            requestId: r.requestId
        }), i.resolve()
    }, p = [n, t], e[6] = n, e[7] = t, e[8] = f, e[9] = p) : (f = e[8], p = e[9]), (0, Y.useEffect)(f, p);
    let m;
    return e[10] !== n || e[11] !== l || e[12] !== s ? (m = n ? (0, X.jsx)(Ke, {
        attempt: n,
        networkPolicy: s,
        disableExternalMedia: l
    }, n.conversation.id) : null, e[10] = n, e[11] = l, e[12] = s, e[13] = m) : m = e[13], m
}

function Ke(e) {
    "use forget";
    let t = (0, J.c)(9),
        {
            attempt: n,
            networkPolicy: r,
            disableExternalMedia: i
        } = e,
        a = d(n.conversation.id, qe),
        o, s;
    t[0] !== n || t[1] !== a ? (o = () => {
        a && n.resolve()
    }, s = [n, a], t[0] = n, t[1] = a, t[2] = o, t[3] = s) : (o = t[2], s = t[3]), (0, Y.useEffect)(o, s);
    let c;
    return t[4] !== n.conversation || t[5] !== i || t[6] !== a || t[7] !== r ? (c = a ? (0, X.jsx)(He, {
        conversation: n.conversation,
        networkPolicy: r,
        disableExternalMedia: i
    }) : null, t[4] = n.conversation, t[5] = i, t[6] = a, t[7] = r, t[8] = c) : c = t[8], c
}

function qe(e) {
    return e?.isLoading === !1
}

function Je() {
    "use forget";
    let e = (0, J.c)(31),
        t = te(),
        r = ne(),
        i = w(),
        o;
    e[0] === t ? o = e[1] : (o = () => typeof t == `object` && t ? t : null, e[0] = t, e[1] = o);
    let [s] = (0, Y.useState)(o), c = s?.parentOrigin ?? null, l = typeof t == `string` ? t : s?.payload ?? r, [f, p] = (0, Y.useState)(null), g = f ?? l;
    n.debug(`IN: POST=${l.length}, GET=${r?.length}`);
    let _, v;
    e[2] === c ? (_ = e[3], v = e[4]) : (_ = () => {
        if (!c || window.parent === window) return;
        let e = e => {
            if (e.origin !== c || e.source !== window.parent) return;
            let t = e.data;
            if (typeof t != `object` || !t || Array.isArray(t) || Object.keys(t).length !== 3 || !(`type` in t) || t.type !== `feather-render-update` || !(`requestId` in t) || typeof t.requestId != `string` || !t.requestId || t.requestId.length > 128 || !(`payload` in t) || typeof t.payload != `string`) return;
            let n;
            try {
                n = JSON.parse(t.payload)
            } catch {
                return
            }
            typeof n != `object` || !n || Array.isArray(n) || Object.keys(n).some(Xe) || !(`conversation` in n) || n.conversation == null || typeof n.conversation != `object` || Array.isArray(n.conversation) || (p(t.payload), window.parent.postMessage({
                type: `feather-render-updated`,
                requestId: t.requestId
            }, c))
        };
        return window.addEventListener(`message`, e), window.parent.postMessage({
            type: `feather-render-ready`
        }, c), () => window.removeEventListener(`message`, e)
    }, v = [c], e[2] = c, e[3] = _, e[4] = v), (0, Y.useEffect)(_, v);
    let y;
    e[5] === g ? y = e[6] : (y = JSON.parse(g), e[5] = g, e[6] = y);
    let b = y,
        x = c ? b.conversation : b,
        S = c ? b.asset_url_overrides ?? null : null,
        C, T;
    if (e[7] !== i) {
        let t = new URLSearchParams(u().featherRenderUrlQueryParams ?? i.search);
        C = t.get(Z) === `deps-only` ? `deps-only` : `none`, T = t.get(Q) === `1` || t.get($) === `1`, e[7] = i, e[8] = C, e[9] = T
    } else C = e[8], T = e[9];
    let E = T,
        D = x.conversation_id ?? x.id,
        O = D,
        k = D,
        A;
    e[10] !== O || e[11] !== k ? (A = m(O, {
        sharedConversationId: k
    }), e[10] = O, e[11] = k, e[12] = A) : A = e[12];
    let j = A,
        M = d(O, Ye),
        N, P;
    e[13] !== j || e[14] !== x || e[15] !== O || e[16] !== c || e[17] !== S || e[18] !== k ? (N = () => {
        me(), q({
            status: `loading`
        });
        try {
            let e = Ue(x);
            h(O, S), re(j, e, {
                source: `internal-render-conversation`
            }), ee(O, t => {
                t.continuingFromSharedConversationId = k, c && t.tree.currentLeafId !== e.current_node && a.setCurrentLeafId(t, e.current_node)
            })
        } catch (e) {
            let t = Ve(e);
            n.error(`Failed to load internal render conversation`, {
                error: t
            }), q({
                status: `error`,
                error: t
            })
        }
        return () => h(O, null)
    }, P = [j, x, O, c, S, k], e[13] = j, e[14] = x, e[15] = O, e[16] = c, e[17] = S, e[18] = k, e[19] = N, e[20] = P) : (N = e[19], P = e[20]), (0, Y.useEffect)(N, P);
    let F, I;
    e[21] === M ? (F = e[22], I = e[23]) : (F = () => {
        M && q({
            status: `ready`
        })
    }, I = [M], e[21] = M, e[22] = F, e[23] = I), (0, Y.useEffect)(F, I), n.debug(`Ready ${O} (SERVER: false) : ${g.length} byte(s)`);
    let L;
    return e[24] !== j || e[25] !== x || e[26] !== E || e[27] !== M || e[28] !== C || e[29] !== c ? (L = null, e[24] = j, e[25] = x, e[26] = E, e[27] = M, e[28] = C, e[29] = c, e[30] = L) : L = e[30], L
}

function Ye(e) {
    return e?.isLoading === !1
}

function Xe(e) {
    return e !== `conversation` && e !== `asset_url_overrides`
}
var J, Y, X, Ze, Z, Q, $, Qe, $e, et, tt = e((() => {
    A(), J = P(), o(), _e(), fe(), je(), S(), ge(), le(), oe(), Be(), x(), p(), F(), ie(), be(), ve(), Me(), r(), v(), N(), C(), I(), Y = t(M()), X = T(), Ze = !1, Z = `preview_network_policy`, Q = `disable_external_media`, $ = `disable_video_preview`, Qe = () => [{
        title: `ChatGPT`
    }], $e = () => !1, et = E(function() {
        "use forget";
        let e = (0, J.c)(5),
            t = te(),
            n = w(),
            r;
        e[0] !== t || e[1] !== n ? (r = Ze, e[0] = t, e[1] = n, e[2] = r) : r = e[2];
        let i = r,
            a;
        return e[3] === i ? a = e[4] : (a = i ? (0, X.jsx)(Ge, {}) : (0, X.jsx)(Je, {}), e[3] = i, e[4] = a), a
    })
}));
export {
    $e as i, et as n, Qe as r, tt as t
};
//# sourceMappingURL=8cc1dd94-e3jyemzgrn58on49.js.map