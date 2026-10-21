import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ew as n,
    H7 as r,
    IN as i,
    JJ as a,
    JT as o,
    Lot as s,
    Rot as c,
    UH as l,
    V7 as u,
    WH as d,
    Yet as f,
    art as p,
    cF as m,
    fF as h,
    gN as g,
    hN as _,
    irt as v,
    lY as ee,
    mtt as y,
    nY as b,
    pY as x,
    rF as S,
    sF as C,
    uF as te,
    utt as w
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as T,
    At as ne,
    Hn as E,
    N as D,
    Rn as O,
    Tn as k,
    Ut as A,
    Vn as j,
    jt as M,
    qt as N,
    s as P,
    wt as F,
    zn as I
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    BGn as L,
    Fp as re,
    JHn as ie,
    L8 as ae,
    LGn as oe,
    N3t as se,
    Pp as ce,
    aL as le,
    ar as ue,
    cA as de,
    cVn as fe,
    cr as pe,
    dFt as me,
    fFt as he,
    iL as ge,
    j3t as _e,
    jjt as ve,
    lA as ye,
    or as be,
    sVn as xe,
    sr as Se
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    AS as R,
    DS as z,
    GS as Ce,
    HS as B,
    LS as V,
    NS as we,
    OS as Te,
    PS as Ee,
    RS as H,
    VS as De,
    XS as U,
    qS as W,
    vS as Oe
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    C_ as ke,
    Lt as Ae,
    Rt as je,
    w_ as Me
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
var Ne = e((() => {
        Oe(), R(`kind`, [H({
            type: V(`feather-live-preview`),
            version: V(1),
            kind: V(`event`),
            channel: W().min(1),
            payload: U()
        }), H({
            type: V(`feather-live-preview`),
            version: V(1),
            kind: V(`response`),
            channel: W().min(1),
            requestId: W(),
            payload: U()
        })]), R(`ok`, [B({
            ok: V(!0),
            result: U()
        }), B({
            ok: V(!1),
            error: W()
        })])
    })),
    Pe, Fe, G, Ie, Le, K, Re = e((() => {
        Oe(), Ne(), Pe = 1e5, Fe = 1e3, G = W().min(1).max(128), Ie = H({
            id: G,
            message_id: G,
            start_offset: we().nonnegative(),
            end_offset: we().positive(),
            substring: W().min(1).max(Pe),
            rendered_anchor: H({
                version: V(1),
                text_hash: W().regex(/^[a-f0-9]{64}$/),
                prefix: W().max(32),
                suffix: W().max(32)
            }),
            form_data: Ce(W(), U())
        }).refine(({
            substring: e,
            start_offset: t,
            end_offset: n
        }) => e.length === n - t), Le = H({
            messageIds: z(G),
            highlights: z(Ie).max(Fe)
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
        }), K = B({
            canEdit: Te()
        }), Ee(K, Le), R(`event`, [B({
            event: V(`capabilities`),
            capabilities: K
        }), B({
            event: V(`viewport`),
            top: De().finite(),
            bottom: De().finite()
        })])
    })),
    ze = e((() => {
        Re()
    })),
    Be = e((() => {
        k(), o(), n(), ve(), ie(), ae(), i(), E(), N(), I(), Re(), ze(), j(), O({
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
    let c, l;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, X.jsx)(ce, {}), l = (0, X.jsx)(_e, {}), t[3] = c, t[4] = l) : (c = t[3], l = t[4]);
    let u;
    t[5] !== n || t[6] !== i ? (u = (0, X.jsx)(oe, {
        children: (0, X.jsxs)(Y.Suspense, {
            fallback: c,
            children: [l, (0, X.jsx)(`div`, {
                className: `@container w-full`,
                children: (0, X.jsx)(de.Provider, {
                    value: !0,
                    children: (0, X.jsx)(Ae, {
                        conversation: n,
                        disableExternalMedia: i,
                        onRequestCompletion: g,
                        clearPrefetchNavlink: g
                    })
                })
            })]
        })
    }), t[5] = n, t[6] = i, t[7] = u) : u = t[7];
    let d;
    t[8] !== n || t[9] !== u ? (d = (0, X.jsx)(ke, {
        conversation: n,
        options: s,
        children: u
    }), t[8] = n, t[9] = u, t[10] = d) : d = t[10];
    let f;
    t[11] === n.id ? f = t[12] : (f = (0, X.jsx)(ue, {
        conversationId: n.id
    }), t[11] = n.id, t[12] = f);
    let p;
    t[13] !== o || t[14] !== d || t[15] !== f ? (p = (0, X.jsxs)(Se.Provider, {
        value: o,
        children: [d, f]
    }), t[13] = o, t[14] = d, t[15] = f, t[16] = p) : p = t[16];
    let m;
    return t[17] !== n || t[18] !== p ? (m = (0, X.jsx)(me, {
        children: (0, X.jsx)(S.Provider, {
            value: n,
            children: p
        })
    }), t[17] = n, t[18] = p, t[19] = m) : m = t[19], m
}

function Ue(e) {
    let t = {},
        n = `client-created-root`;
    t[n] = {
        id: n,
        message: {
            id: n,
            author: {
                role: w.Root
            },
            content: {
                content_type: f.Text,
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
        ...d(e, `conversation_template_id`, `gizmo_id`, `is_archived`, `conversation_origin`, `async_status`, `update_time`, `is_do_not_remember`)
    }
}

function We(e) {
    return typeof e == `string` && e.length > 0
}

function Ge() {
    "use forget";
    let e = (0, J.c)(14),
        t = D(),
        [n, r] = (0, Y.useState)(null),
        i;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = {
        active: null,
        ready: !1,
        resetting: null
    }, e[0] = i) : i = e[0];
    let a = (0, Y.useRef)(i),
        o = M(),
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
                    let c = C({
                        sharedConversationId: s
                    });
                    q({
                        status: `loading`,
                        requestId: n
                    });
                    try {
                        le(), fe(c, o, {
                            source: `internal-render-conversation`
                        }), ee(c.id, e => {
                            e.continuingFromSharedConversationId = s
                        })
                    } catch (e) {
                        let t = e;
                        throw m(c), q({
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
            e.active?.reject(n), e.resetting?.reject(n), e.active && m(e.active.conversation), e.active = null, e.ready = !1, e.resetting = null
        }
    }, d = [], e[4] = u, e[5] = d) : (u = e[4], d = e[5]), (0, Y.useEffect)(u, d);
    let f, p;
    e[6] !== n || e[7] !== t ? (f = () => {
        let e = a.current;
        if (n || !e.active || !e.resetting) return;
        let r = e.active,
            i = e.resetting;
        if (e.resetting = null, !m(r.conversation)) {
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
    let h;
    return e[10] !== n || e[11] !== l || e[12] !== s ? (h = n ? (0, X.jsx)(Ke, {
        attempt: n,
        networkPolicy: s,
        disableExternalMedia: l
    }, n.conversation.id) : null, e[10] = n, e[11] = l, e[12] = s, e[13] = h) : h = e[13], h
}

function Ke(e) {
    "use forget";
    let t = (0, J.c)(9),
        {
            attempt: n,
            networkPolicy: r,
            disableExternalMedia: i
        } = e,
        a = x(n.conversation.id, qe),
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
        t = F(),
        n = ne(),
        i = M(),
        o;
    e[0] === t ? o = e[1] : (o = () => typeof t == `object` && t ? t : null, e[0] = t, e[1] = o);
    let [c] = (0, Y.useState)(o), l = c?.parentOrigin ?? null, u = typeof t == `string` ? t : c?.payload ?? n, [d, f] = (0, Y.useState)(null), m = d ?? u;
    p.debug(`IN: POST=${u.length}, GET=${n?.length}`);
    let h, g;
    e[2] === l ? (h = e[3], g = e[4]) : (h = () => {
        if (!l || window.parent === window) return;
        let e = e => {
            if (e.origin !== l || e.source !== window.parent) return;
            let t = e.data;
            if (typeof t != `object` || !t || Array.isArray(t) || Object.keys(t).length !== 3 || !(`type` in t) || t.type !== `feather-render-update` || !(`requestId` in t) || typeof t.requestId != `string` || !t.requestId || t.requestId.length > 128 || !(`payload` in t) || typeof t.payload != `string`) return;
            let n;
            try {
                n = JSON.parse(t.payload)
            } catch {
                return
            }
            typeof n != `object` || !n || Array.isArray(n) || Object.keys(n).some(Xe) || !(`conversation` in n) || n.conversation == null || typeof n.conversation != `object` || Array.isArray(n.conversation) || (f(t.payload), window.parent.postMessage({
                type: `feather-render-updated`,
                requestId: t.requestId
            }, l))
        };
        return window.addEventListener(`message`, e), window.parent.postMessage({
            type: `feather-render-ready`
        }, l), () => window.removeEventListener(`message`, e)
    }, g = [l], e[2] = l, e[3] = h, e[4] = g), (0, Y.useEffect)(h, g);
    let _;
    e[5] === m ? _ = e[6] : (_ = JSON.parse(m), e[5] = m, e[6] = _);
    let v = _,
        y = l ? v.conversation : v,
        b = l ? v.asset_url_overrides ?? null : null,
        S, C;
    if (e[7] !== i) {
        let t = new URLSearchParams(s().featherRenderUrlQueryParams ?? i.search);
        S = t.get(Z) === `deps-only` ? `deps-only` : `none`, C = t.get(Q) === `1` || t.get($) === `1`, e[7] = i, e[8] = S, e[9] = C
    } else S = e[8], C = e[9];
    let w = C,
        T = y.conversation_id ?? y.id,
        E = T,
        D = T,
        O;
    e[10] !== E || e[11] !== D ? (O = te(E, {
        sharedConversationId: D
    }), e[10] = E, e[11] = D, e[12] = O) : O = e[12];
    let k = O,
        A = x(E, Ye),
        j, N;
    e[13] !== k || e[14] !== y || e[15] !== E || e[16] !== l || e[17] !== b || e[18] !== D ? (j = () => {
        le(), q({
            status: `loading`
        });
        try {
            let e = Ue(y);
            r(E, b), fe(k, e, {
                source: `internal-render-conversation`
            }), ee(E, t => {
                t.continuingFromSharedConversationId = D, l && t.tree.currentLeafId !== e.current_node && a.setCurrentLeafId(t, e.current_node)
            })
        } catch (e) {
            let t = Ve(e);
            p.error(`Failed to load internal render conversation`, {
                error: t
            }), q({
                status: `error`,
                error: t
            })
        }
        return () => r(E, null)
    }, N = [k, y, E, l, b, D], e[13] = k, e[14] = y, e[15] = E, e[16] = l, e[17] = b, e[18] = D, e[19] = j, e[20] = N) : (j = e[19], N = e[20]), (0, Y.useEffect)(j, N);
    let P, I;
    e[21] === A ? (P = e[22], I = e[23]) : (P = () => {
        A && q({
            status: `ready`
        })
    }, I = [A], e[21] = A, e[22] = P, e[23] = I), (0, Y.useEffect)(P, I), p.debug(`Ready ${E} (SERVER: false) : ${m.length} byte(s)`);
    let L;
    return e[24] !== k || e[25] !== y || e[26] !== w || e[27] !== A || e[28] !== S || e[29] !== l ? (L = null, e[24] = k, e[25] = y, e[26] = w, e[27] = A, e[28] = S, e[29] = l, e[30] = L) : L = e[30], L
}

function Ye(e) {
    return e?.isLoading === !1
}

function Xe(e) {
    return e !== `conversation` && e !== `asset_url_overrides`
}
var J, Y, X, Ze, Z, Q, $, Qe, $e, et, tt = e((() => {
    T(), J = k(), y(), be(), pe(), Me(), h(), he(), xe(), se(), Be(), u(), b(), L(), re(), ge(), ye(), je(), v(), c(), P(), _(), l(), Y = t(E()), X = j(), Ze = !1, Z = `preview_network_policy`, Q = `disable_external_media`, $ = `disable_video_preview`, Qe = () => [{
        title: `ChatGPT`
    }], $e = () => !1, et = A(function() {
        "use forget";
        let e = (0, J.c)(5),
            t = F(),
            n = M(),
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
//# sourceMappingURL=8cc1dd94-fvvs9yqmxipbe0ar.js.map