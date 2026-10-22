import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bot as n,
    Dw as r,
    GH as i,
    LN as a,
    Qet as o,
    U7 as s,
    Vot as c,
    W7 as l,
    WH as u,
    YJ as d,
    YT as f,
    _N as p,
    _tt as m,
    cF as h,
    crt as g,
    dF as ee,
    gN as _,
    iF as v,
    lF as y,
    mY as te,
    pF as b,
    ptt as x,
    rY as S,
    srt as C,
    uY as ne
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    At as w,
    Bn as T,
    Ct as re,
    Ht as E,
    Kt as D,
    Ln as O,
    N as k,
    Q as A,
    Rn as j,
    Vn as M,
    kt as ie,
    s as N,
    wn as P
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    B8 as F,
    F3t as ae,
    FGn as oe,
    Fp as se,
    Ip as ce,
    KHn as le,
    L3t as ue,
    Ljt as de,
    RGn as fe,
    _Ft as pe,
    aVn as me,
    ar as he,
    cL as I,
    cr as ge,
    dA as _e,
    fA as ve,
    oVn as L,
    or as ye,
    sL as be,
    sr as xe,
    vFt as Se
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    $x as Ce,
    Kx as we,
    Lx as Te,
    Qx as Ee,
    Yx as R,
    fS as z,
    hS as B,
    nS as V,
    oS as De,
    qx as Oe,
    rS as H,
    sS as U,
    uS as ke
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    Lt as Ae,
    Rt as je,
    T_ as Me,
    w_ as Ne
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
var Pe = e((() => {
        Te(), R(`kind`, [H({
            type: V(`feather-live-preview`),
            version: V(1),
            kind: V(`event`),
            channel: z().min(1),
            payload: B()
        }), H({
            type: V(`feather-live-preview`),
            version: V(1),
            kind: V(`response`),
            channel: z().min(1),
            requestId: z(),
            payload: B()
        })]), R(`ok`, [U({
            ok: V(!0),
            result: B()
        }), U({
            ok: V(!1),
            error: z()
        })])
    })),
    Fe, Ie, W, Le, Re, G, ze = e((() => {
        Te(), Pe(), Fe = 1e5, Ie = 1e3, W = z().min(1).max(128), Le = H({
            id: W,
            message_id: W,
            start_offset: Ee().nonnegative(),
            end_offset: Ee().positive(),
            substring: z().min(1).max(Fe),
            rendered_anchor: H({
                version: V(1),
                text_hash: z().regex(/^[a-f0-9]{64}$/),
                prefix: z().max(32),
                suffix: z().max(32)
            }),
            form_data: ke(z(), B())
        }).refine(({
            substring: e,
            start_offset: t,
            end_offset: n
        }) => e.length === n - t), Re = H({
            messageIds: we(W),
            highlights: we(Le).max(Ie)
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
        }), G = U({
            canEdit: Oe()
        }), Ce(G, Re), R(`event`, [U({
            event: V(`capabilities`),
            capabilities: G
        }), U({
            event: V(`viewport`),
            top: De().finite(),
            bottom: De().finite()
        })])
    })),
    Be = e((() => {
        ze()
    })),
    Ve = e((() => {
        P(), f(), r(), de(), le(), F(), a(), M(), D(), j(), ze(), Be(), T(), O({
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

function K(e) {
    typeof window > `u` || (window.__internalRenderConversationStatus = e)
}

function He(e) {
    return e instanceof Error ? e.message : String(e)
}

function Ue(e) {
    "use forget";
    let t = (0, q.c)(20),
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
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Y.jsx)(se, {}), l = (0, Y.jsx)(ae, {}), t[3] = c, t[4] = l) : (c = t[3], l = t[4]);
    let u;
    t[5] !== n || t[6] !== i ? (u = (0, Y.jsx)(oe, {
        children: (0, Y.jsxs)(J.Suspense, {
            fallback: c,
            children: [l, (0, Y.jsx)(`div`, {
                className: `@container w-full`,
                children: (0, Y.jsx)(_e.Provider, {
                    value: !0,
                    children: (0, Y.jsx)(Ae, {
                        conversation: n,
                        disableExternalMedia: i,
                        onRequestCompletion: p,
                        clearPrefetchNavlink: p
                    })
                })
            })]
        })
    }), t[5] = n, t[6] = i, t[7] = u) : u = t[7];
    let d;
    t[8] !== n || t[9] !== u ? (d = (0, Y.jsx)(Ne, {
        conversation: n,
        options: s,
        children: u
    }), t[8] = n, t[9] = u, t[10] = d) : d = t[10];
    let f;
    t[11] === n.id ? f = t[12] : (f = (0, Y.jsx)(he, {
        conversationId: n.id
    }), t[11] = n.id, t[12] = f);
    let m;
    t[13] !== o || t[14] !== d || t[15] !== f ? (m = (0, Y.jsxs)(xe.Provider, {
        value: o,
        children: [d, f]
    }), t[13] = o, t[14] = d, t[15] = f, t[16] = m) : m = t[16];
    let h;
    return t[17] !== n || t[18] !== m ? (h = (0, Y.jsx)(pe, {
        children: (0, Y.jsx)(v.Provider, {
            value: n,
            children: m
        })
    }), t[17] = n, t[18] = m, t[19] = h) : h = t[19], h
}

function We(e) {
    let t = {},
        n = `client-created-root`;
    t[n] = {
        id: n,
        message: {
            id: n,
            author: {
                role: x.Root
            },
            content: {
                content_type: o.Text,
                parts: []
            }
        },
        parent: ``,
        children: []
    };
    let r = n,
        a = [],
        s = new Set;
    for (let t of e.messages) s.add(t.id);
    for (let n of e.messages) {
        let e = n.metadata?.parent_id ?? r;
        s.has(e) || (e = r), t[n.id] = {
            id: n.id,
            message: n,
            parent: e,
            children: []
        }, r = n.id, a.push(...n.metadata?.safe_urls ?? [])
    }
    for (let [e, n] of Object.entries(t)) n.parent !== `` && t[n.parent]?.children?.push(e);
    let c = e.conversation_id ?? e.id;
    return {
        title: e.title ?? null,
        conversation_id: c,
        mapping: t,
        current_node: r,
        moderation_results: [],
        safe_urls: e.safe_urls ?? a,
        ...i(e, `conversation_template_id`, `gizmo_id`, `is_archived`, `conversation_origin`, `async_status`, `update_time`, `is_do_not_remember`)
    }
}

function Ge(e) {
    return typeof e == `string` && e.length > 0
}

function Ke() {
    "use forget";
    let e = (0, q.c)(14),
        t = k(),
        [n, r] = (0, J.useState)(null),
        i;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = {
        active: null,
        ready: !1,
        resetting: null
    }, e[0] = i) : i = e[0];
    let a = (0, J.useRef)(i),
        o = w(),
        s, c;
    if (e[1] !== o.search) {
        let t = new URLSearchParams(o.search);
        s = t.get(X) === `deps-only` ? `deps-only` : `none`, c = t.get(Z) === `1` || t.get(Q) === `1`, e[1] = o.search, e[2] = s, e[3] = c
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
                    let o = We(a),
                        s = o.conversation_id;
                    if (!Ge(s)) throw Error(`Render conversation has no ID`);
                    let c = h({
                        sharedConversationId: s
                    });
                    K({
                        status: `loading`,
                        requestId: n
                    });
                    try {
                        I(), L(c, o, {
                            source: `internal-render-conversation`
                        }), ne(c.id, e => {
                            e.continuingFromSharedConversationId = s
                        })
                    } catch (e) {
                        let t = e;
                        throw y(c), K({
                            status: `error`,
                            requestId: n,
                            error: He(t)
                        }), t
                    }
                    await new Promise((t, i) => {
                        let a = {
                            requestId: n,
                            conversation: c,
                            resolve: () => {
                                e.active !== a || e.resetting || (e.ready = !0, K({
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
                    K({
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
        return window.__maraschinoRender = t, K({
            status: `idle`
        }), () => {
            window.__maraschinoRender === t && delete window.__maraschinoRender;
            let n = Error(`Render page was removed`);
            e.active?.reject(n), e.resetting?.reject(n), e.active && y(e.active.conversation), e.active = null, e.ready = !1, e.resetting = null
        }
    }, d = [], e[4] = u, e[5] = d) : (u = e[4], d = e[5]), (0, J.useEffect)(u, d);
    let f, p;
    e[6] !== n || e[7] !== t ? (f = () => {
        let e = a.current;
        if (n || !e.active || !e.resetting) return;
        let r = e.active,
            i = e.resetting;
        if (e.resetting = null, !y(r.conversation)) {
            let e = Error(`Render conversation could not be discarded`);
            K({
                status: `error`,
                requestId: r.requestId,
                error: e.message
            }), i.reject(e);
            return
        }
        t.removeQueries({
            queryKey: [`getFileDownloadLink`]
        }), document.getElementById(`recharts_measurement_span`)?.remove(), e.active = null, e.ready = !1, K({
            status: `idle`,
            requestId: r.requestId
        }), i.resolve()
    }, p = [n, t], e[6] = n, e[7] = t, e[8] = f, e[9] = p) : (f = e[8], p = e[9]), (0, J.useEffect)(f, p);
    let m;
    return e[10] !== n || e[11] !== l || e[12] !== s ? (m = n ? (0, Y.jsx)(qe, {
        attempt: n,
        networkPolicy: s,
        disableExternalMedia: l
    }, n.conversation.id) : null, e[10] = n, e[11] = l, e[12] = s, e[13] = m) : m = e[13], m
}

function qe(e) {
    "use forget";
    let t = (0, q.c)(9),
        {
            attempt: n,
            networkPolicy: r,
            disableExternalMedia: i
        } = e,
        a = te(n.conversation.id, Je),
        o, s;
    t[0] !== n || t[1] !== a ? (o = () => {
        a && n.resolve()
    }, s = [n, a], t[0] = n, t[1] = a, t[2] = o, t[3] = s) : (o = t[2], s = t[3]), (0, J.useEffect)(o, s);
    let c;
    return t[4] !== n.conversation || t[5] !== i || t[6] !== a || t[7] !== r ? (c = a ? (0, Y.jsx)(Ue, {
        conversation: n.conversation,
        networkPolicy: r,
        disableExternalMedia: i
    }) : null, t[4] = n.conversation, t[5] = i, t[6] = a, t[7] = r, t[8] = c) : c = t[8], c
}

function Je(e) {
    return e?.isLoading === !1
}

function Ye() {
    "use forget";
    let e = (0, q.c)(31),
        t = re(),
        r = ie(),
        i = w(),
        a;
    e[0] === t ? a = e[1] : (a = () => typeof t == `object` && t ? t : null, e[0] = t, e[1] = a);
    let [o] = (0, J.useState)(a), s = o?.parentOrigin ?? null, c = typeof t == `string` ? t : o?.payload ?? r, [u, f] = (0, J.useState)(null), p = u ?? c;
    g.debug(`IN: POST=${c.length}, GET=${r?.length}`);
    let m, h;
    e[2] === s ? (m = e[3], h = e[4]) : (m = () => {
        if (!s || window.parent === window) return;
        let e = e => {
            if (e.origin !== s || e.source !== window.parent) return;
            let t = e.data;
            if (typeof t != `object` || !t || Array.isArray(t) || Object.keys(t).length !== 3 || !(`type` in t) || t.type !== `feather-render-update` || !(`requestId` in t) || typeof t.requestId != `string` || !t.requestId || t.requestId.length > 128 || !(`payload` in t) || typeof t.payload != `string`) return;
            let n;
            try {
                n = JSON.parse(t.payload)
            } catch {
                return
            }
            typeof n != `object` || !n || Array.isArray(n) || Object.keys(n).some(Ze) || !(`conversation` in n) || n.conversation == null || typeof n.conversation != `object` || Array.isArray(n.conversation) || (f(t.payload), window.parent.postMessage({
                type: `feather-render-updated`,
                requestId: t.requestId
            }, s))
        };
        return window.addEventListener(`message`, e), window.parent.postMessage({
            type: `feather-render-ready`
        }, s), () => window.removeEventListener(`message`, e)
    }, h = [s], e[2] = s, e[3] = m, e[4] = h), (0, J.useEffect)(m, h);
    let _;
    e[5] === p ? _ = e[6] : (_ = JSON.parse(p), e[5] = p, e[6] = _);
    let v = _,
        y = s ? v.conversation : v,
        b = s ? v.asset_url_overrides ?? null : null,
        x, S;
    if (e[7] !== i) {
        let t = new URLSearchParams(n().featherRenderUrlQueryParams ?? i.search);
        x = t.get(X) === `deps-only` ? `deps-only` : `none`, S = t.get(Z) === `1` || t.get(Q) === `1`, e[7] = i, e[8] = x, e[9] = S
    } else x = e[8], S = e[9];
    let C = S,
        T = y.conversation_id ?? y.id,
        E = T,
        D = T,
        O;
    e[10] !== E || e[11] !== D ? (O = ee(E, {
        sharedConversationId: D
    }), e[10] = E, e[11] = D, e[12] = O) : O = e[12];
    let k = O,
        A = te(E, Xe),
        j, M;
    e[13] !== k || e[14] !== y || e[15] !== E || e[16] !== s || e[17] !== b || e[18] !== D ? (j = () => {
        I(), K({
            status: `loading`
        });
        try {
            let e = We(y);
            l(E, b), L(k, e, {
                source: `internal-render-conversation`
            }), ne(E, t => {
                t.continuingFromSharedConversationId = D, s && t.tree.currentLeafId !== e.current_node && d.setCurrentLeafId(t, e.current_node)
            })
        } catch (e) {
            let t = He(e);
            g.error(`Failed to load internal render conversation`, {
                error: t
            }), K({
                status: `error`,
                error: t
            })
        }
        return () => l(E, null)
    }, M = [k, y, E, s, b, D], e[13] = k, e[14] = y, e[15] = E, e[16] = s, e[17] = b, e[18] = D, e[19] = j, e[20] = M) : (j = e[19], M = e[20]), (0, J.useEffect)(j, M);
    let N, P;
    e[21] === A ? (N = e[22], P = e[23]) : (N = () => {
        A && K({
            status: `ready`
        })
    }, P = [A], e[21] = A, e[22] = N, e[23] = P), (0, J.useEffect)(N, P), g.debug(`Ready ${E} (SERVER: false) : ${p.length} byte(s)`);
    let F;
    return e[24] !== k || e[25] !== y || e[26] !== C || e[27] !== A || e[28] !== x || e[29] !== s ? (F = null, e[24] = k, e[25] = y, e[26] = C, e[27] = A, e[28] = x, e[29] = s, e[30] = F) : F = e[30], F
}

function Xe(e) {
    return e?.isLoading === !1
}

function Ze(e) {
    return e !== `conversation` && e !== `asset_url_overrides`
}
var q, J, Y, Qe, X, Z, Q, $e, et, $, tt = e((() => {
    A(), q = P(), m(), ye(), ge(), Me(), b(), Se(), me(), ue(), Ve(), s(), S(), fe(), ce(), be(), ve(), je(), C(), c(), N(), _(), u(), J = t(M()), Y = T(), Qe = !1, X = `preview_network_policy`, Z = `disable_external_media`, Q = `disable_video_preview`, $e = () => [{
        title: `ChatGPT`
    }], et = () => !1, $ = E(function() {
        "use forget";
        let e = (0, q.c)(5),
            t = re(),
            n = w(),
            r;
        e[0] !== t || e[1] !== n ? (r = Qe, e[0] = t, e[1] = n, e[2] = r) : r = e[2];
        let i = r,
            a;
        return e[3] === i ? a = e[4] : (a = i ? (0, Y.jsx)(Ke, {}) : (0, Y.jsx)(Ye, {}), e[3] = i, e[4] = a), a
    })
}));
export {
    et as i, $ as n, $e as r, tt as t
};
//# sourceMappingURL=8cc1dd94-g976m0eh4wqvpx6q.js.map