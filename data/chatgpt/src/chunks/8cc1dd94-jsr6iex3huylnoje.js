import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dw as n,
    GH as r,
    Got as i,
    LN as a,
    Qet as o,
    U7 as s,
    W7 as c,
    WH as l,
    Wot as u,
    YJ as d,
    YT as f,
    _N as p,
    _tt as m,
    cF as h,
    dF as ee,
    drt as g,
    frt as _,
    gN as v,
    iF as y,
    lF as b,
    mY as te,
    pF as x,
    ptt as S,
    rY as C,
    uY as ne
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
    Fp as oe,
    IGn as se,
    Ip as ce,
    L3t as le,
    Ljt as ue,
    _Ft as de,
    ar as fe,
    cL as pe,
    cr as me,
    dA as he,
    fA as ge,
    oVn as _e,
    or as ve,
    qHn as ye,
    sL as be,
    sVn as xe,
    sr as Se,
    vFt as Ce,
    zGn as we
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    $x as Te,
    Kx as Ee,
    Lx as I,
    Qx as De,
    Yx as L,
    fS as R,
    hS as z,
    nS as B,
    oS as Oe,
    qx as ke,
    rS as V,
    sS as H,
    uS as Ae
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    Lt as je,
    Rt as Me,
    T_ as Ne,
    w_ as Pe
} from "./8b34dbc2-ba6wt3zxvh7jce7p.js";
var Fe = e((() => {
        I(), L(`kind`, [V({
            type: B(`feather-live-preview`),
            version: B(1),
            kind: B(`event`),
            channel: R().min(1),
            payload: z()
        }), V({
            type: B(`feather-live-preview`),
            version: B(1),
            kind: B(`response`),
            channel: R().min(1),
            requestId: R(),
            payload: z()
        })]), L(`ok`, [H({
            ok: B(!0),
            result: z()
        }), H({
            ok: B(!1),
            error: R()
        })])
    })),
    Ie, Le, U, W, Re, G, ze = e((() => {
        I(), Fe(), Ie = 1e5, Le = 1e3, U = R().min(1).max(128), W = V({
            id: U,
            message_id: U,
            start_offset: De().nonnegative(),
            end_offset: De().positive(),
            substring: R().min(1).max(Ie),
            rendered_anchor: V({
                version: B(1),
                text_hash: R().regex(/^[a-f0-9]{64}$/),
                prefix: R().max(32),
                suffix: R().max(32)
            }),
            form_data: Ae(R(), z())
        }).refine(({
            substring: e,
            start_offset: t,
            end_offset: n
        }) => e.length === n - t), Re = V({
            messageIds: Ee(U),
            highlights: Ee(W).max(Le)
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
        }), G = H({
            canEdit: ke()
        }), Te(G, Re), L(`event`, [H({
            event: B(`capabilities`),
            capabilities: G
        }), H({
            event: B(`viewport`),
            top: Oe().finite(),
            bottom: Oe().finite()
        })])
    })),
    Be = e((() => {
        ze()
    })),
    Ve = e((() => {
        P(), f(), n(), ue(), ye(), F(), a(), M(), D(), j(), ze(), Be(), T(), O({
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
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, X.jsx)(oe, {}), l = (0, X.jsx)(ae, {}), t[3] = c, t[4] = l) : (c = t[3], l = t[4]);
    let u;
    t[5] !== n || t[6] !== i ? (u = (0, X.jsx)(se, {
        children: (0, X.jsxs)(Y.Suspense, {
            fallback: c,
            children: [l, (0, X.jsx)(`div`, {
                className: `@container w-full`,
                children: (0, X.jsx)(he.Provider, {
                    value: !0,
                    children: (0, X.jsx)(je, {
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
    t[8] !== n || t[9] !== u ? (d = (0, X.jsx)(Pe, {
        conversation: n,
        options: s,
        children: u
    }), t[8] = n, t[9] = u, t[10] = d) : d = t[10];
    let f;
    t[11] === n.id ? f = t[12] : (f = (0, X.jsx)(fe, {
        conversationId: n.id
    }), t[11] = n.id, t[12] = f);
    let m;
    t[13] !== o || t[14] !== d || t[15] !== f ? (m = (0, X.jsxs)(Se.Provider, {
        value: o,
        children: [d, f]
    }), t[13] = o, t[14] = d, t[15] = f, t[16] = m) : m = t[16];
    let h;
    return t[17] !== n || t[18] !== m ? (h = (0, X.jsx)(de, {
        children: (0, X.jsx)(y.Provider, {
            value: n,
            children: m
        })
    }), t[17] = n, t[18] = m, t[19] = h) : h = t[19], h
}

function q(e) {
    let t = {},
        n = `client-created-root`;
    t[n] = {
        id: n,
        message: {
            id: n,
            author: {
                role: S.Root
            },
            content: {
                content_type: o.Text,
                parts: []
            }
        },
        parent: ``,
        children: []
    };
    let i = n,
        a = [],
        s = new Set;
    for (let t of e.messages) s.add(t.id);
    for (let n of e.messages) {
        let e = n.metadata?.parent_id ?? i;
        s.has(e) || (e = i), t[n.id] = {
            id: n.id,
            message: n,
            parent: e,
            children: []
        }, i = n.id, a.push(...n.metadata?.safe_urls ?? [])
    }
    for (let [e, n] of Object.entries(t)) n.parent !== `` && t[n.parent]?.children?.push(e);
    let c = e.conversation_id ?? e.id;
    return {
        title: e.title ?? null,
        conversation_id: c,
        mapping: t,
        current_node: i,
        moderation_results: [],
        safe_urls: e.safe_urls ?? a,
        ...r(e, `conversation_template_id`, `gizmo_id`, `is_archived`, `conversation_origin`, `async_status`, `update_time`, `is_do_not_remember`)
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
                    let o = q(a),
                        s = o.conversation_id;
                    if (!We(s)) throw Error(`Render conversation has no ID`);
                    let c = h({
                        sharedConversationId: s
                    });
                    K({
                        status: `loading`,
                        requestId: n
                    });
                    try {
                        pe(), xe(c, o, {
                            source: `internal-render-conversation`
                        }), ne(c.id, e => {
                            e.continuingFromSharedConversationId = s
                        })
                    } catch (e) {
                        let t = e;
                        throw b(c), K({
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
            e.active?.reject(n), e.resetting?.reject(n), e.active && b(e.active.conversation), e.active = null, e.ready = !1, e.resetting = null
        }
    }, d = [], e[4] = u, e[5] = d) : (u = e[4], d = e[5]), (0, Y.useEffect)(u, d);
    let f, p;
    e[6] !== n || e[7] !== t ? (f = () => {
        let e = a.current;
        if (n || !e.active || !e.resetting) return;
        let r = e.active,
            i = e.resetting;
        if (e.resetting = null, !b(r.conversation)) {
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
        a = te(n.conversation.id, qe),
        o, s;
    t[0] !== n || t[1] !== a ? (o = () => {
        a && n.resolve()
    }, s = [n, a], t[0] = n, t[1] = a, t[2] = o, t[3] = s) : (o = t[2], s = t[3]), (0, Y.useEffect)(o, s);
    let c;
    return t[4] !== n.conversation || t[5] !== i || t[6] !== a || t[7] !== r ? (c = a ? (0, X.jsx)(Ue, {
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
        t = re(),
        n = ie(),
        r = w(),
        i;
    e[0] === t ? i = e[1] : (i = () => typeof t == `object` && t ? t : null, e[0] = t, e[1] = i);
    let [a] = (0, Y.useState)(i), o = a?.parentOrigin ?? null, s = typeof t == `string` ? t : a?.payload ?? n, [l, f] = (0, Y.useState)(null), p = l ?? s;
    _.debug(`IN: POST=${s.length}, GET=${n?.length}`);
    let m, h;
    e[2] === o ? (m = e[3], h = e[4]) : (m = () => {
        if (!o || window.parent === window) return;
        let e = e => {
            if (e.origin !== o || e.source !== window.parent) return;
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
            }, o))
        };
        return window.addEventListener(`message`, e), window.parent.postMessage({
            type: `feather-render-ready`
        }, o), () => window.removeEventListener(`message`, e)
    }, h = [o], e[2] = o, e[3] = m, e[4] = h), (0, Y.useEffect)(m, h);
    let g;
    e[5] === p ? g = e[6] : (g = JSON.parse(p), e[5] = p, e[6] = g);
    let v = g,
        y = o ? v.conversation : v,
        b = o ? v.asset_url_overrides ?? null : null,
        x, S;
    if (e[7] !== r) {
        let t = new URLSearchParams(u().featherRenderUrlQueryParams ?? r.search);
        x = t.get(Z) === `deps-only` ? `deps-only` : `none`, S = t.get(Q) === `1` || t.get($) === `1`, e[7] = r, e[8] = x, e[9] = S
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
        A = te(E, Ye),
        j, M;
    e[13] !== k || e[14] !== y || e[15] !== E || e[16] !== o || e[17] !== b || e[18] !== D ? (j = () => {
        pe(), K({
            status: `loading`
        });
        try {
            let e = q(y);
            c(E, b), xe(k, e, {
                source: `internal-render-conversation`
            }), ne(E, t => {
                t.continuingFromSharedConversationId = D, o && t.tree.currentLeafId !== e.current_node && d.setCurrentLeafId(t, e.current_node)
            })
        } catch (e) {
            let t = He(e);
            _.error(`Failed to load internal render conversation`, {
                error: t
            }), K({
                status: `error`,
                error: t
            })
        }
        return () => c(E, null)
    }, M = [k, y, E, o, b, D], e[13] = k, e[14] = y, e[15] = E, e[16] = o, e[17] = b, e[18] = D, e[19] = j, e[20] = M) : (j = e[19], M = e[20]), (0, Y.useEffect)(j, M);
    let N, P;
    e[21] === A ? (N = e[22], P = e[23]) : (N = () => {
        A && K({
            status: `ready`
        })
    }, P = [A], e[21] = A, e[22] = N, e[23] = P), (0, Y.useEffect)(N, P), _.debug(`Ready ${E} (SERVER: false) : ${p.length} byte(s)`);
    let F;
    return e[24] !== k || e[25] !== y || e[26] !== C || e[27] !== A || e[28] !== x || e[29] !== o ? (F = null, e[24] = k, e[25] = y, e[26] = C, e[27] = A, e[28] = x, e[29] = o, e[30] = F) : F = e[30], F
}

function Ye(e) {
    return e?.isLoading === !1
}

function Xe(e) {
    return e !== `conversation` && e !== `asset_url_overrides`
}
var J, Y, X, Ze, Z, Q, $, Qe, $e, et, tt = e((() => {
    A(), J = P(), m(), ve(), me(), Ne(), x(), Ce(), _e(), le(), Ve(), s(), C(), we(), ce(), be(), ge(), Me(), g(), i(), N(), v(), l(), Y = t(M()), X = T(), Ze = !1, Z = `preview_network_policy`, Q = `disable_external_media`, $ = `disable_video_preview`, Qe = () => [{
        title: `ChatGPT`
    }], $e = () => !1, et = E(function() {
        "use forget";
        let e = (0, J.c)(5),
            t = re(),
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
//# sourceMappingURL=8cc1dd94-jsr6iex3huylnoje.js.map