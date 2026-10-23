import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B7 as n,
    HN as r,
    KJ as i,
    Mw as a,
    Nrt as o,
    Prt as s,
    SN as c,
    V7 as l,
    Zet as u,
    dY as d,
    eE as f,
    eY as p,
    fst as m,
    ftt as h,
    gF as ee,
    gtt as g,
    lF as _,
    mF as v,
    pF as y,
    pst as b,
    sY as te,
    vF as x,
    xN as S
} from "./4813494d-mdvd4786a87166cc.js";
import {
    At as C,
    Bn as w,
    Ct as ne,
    Ht as T,
    Kt as E,
    Ln as D,
    N as O,
    Q as k,
    Rn as A,
    Vn as j,
    kt as re,
    s as M,
    wn as N
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ctn as P,
    Djt as F,
    Fp as I,
    I3t as ie,
    IKn as ae,
    Ip as oe,
    NKn as se,
    P3t as ce,
    U8 as le,
    VUn as ue,
    ar as de,
    cFt as fe,
    cr as pe,
    eHn as me,
    fA as he,
    iL as ge,
    or as _e,
    pA as ve,
    rL as ye,
    sFt as be,
    sr as xe,
    tHn as Se,
    wtn as Ce
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Hx as we,
    Qx as Te,
    Zx as L,
    _S as R,
    bS as z,
    cS as B,
    dS as Ee,
    eS as V,
    fS as H,
    hS as De,
    qx as Oe,
    rS as ke,
    sS as U
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    D_ as Ae,
    Lt as je,
    O_ as Me,
    Rt as Ne
} from "./8b34dbc2-lmwubajnld74ksfm.js";
var Pe = e((() => {
        we(), V(`kind`, [B({
            type: U(`feather-live-preview`),
            version: U(1),
            kind: U(`event`),
            channel: R().min(1),
            payload: z()
        }), B({
            type: U(`feather-live-preview`),
            version: U(1),
            kind: U(`response`),
            channel: R().min(1),
            requestId: R(),
            payload: z()
        })]), V(`ok`, [H({
            ok: U(!0),
            result: z()
        }), H({
            ok: U(!1),
            error: R()
        })])
    })),
    Fe, Ie, W, G, Le, Re, ze, K, Be = e((() => {
        we(), Pe(), Fe = 1e5, Ie = 1e3, W = R().min(1).max(128), G = {
            key: R().min(1),
            label: R().min(1),
            title: R().min(1).nullish()
        }, Le = H({
            fields: L(V(`type`, [H({
                ...G,
                type: U(`choice`),
                options: L(H({
                    value: R().min(1),
                    label: R().min(1),
                    icon: Oe([`smile`, `frown`]).nullish(),
                    color: R().regex(/^#[0-9a-fA-F]{6}$/).toLowerCase().nullish()
                })).min(1).refine(e => new Set(e.map(({
                    value: e
                }) => e)).size === e.length)
            }), H({
                ...G,
                type: U(`text`),
                placeholder: R().nullish()
            })])).min(1),
            colorField: R().nullish()
        }).refine(({
            fields: e
        }) => new Set(e.map(({
            key: e
        }) => e)).size === e.length).refine(({
            fields: e,
            colorField: t
        }) => t == null || e.some(e => e.key === t && e.type === `choice`)), Re = B({
            id: W,
            message_id: W,
            start_offset: ke().nonnegative(),
            end_offset: ke().positive(),
            substring: R().min(1).max(Fe),
            rendered_anchor: B({
                version: U(1),
                text_hash: R().regex(/^[a-f0-9]{64}$/),
                prefix: R().max(32),
                suffix: R().max(32)
            }),
            form_data: De(R(), z())
        }).refine(({
            substring: e,
            start_offset: t,
            end_offset: n
        }) => e.length === n - t), ze = B({
            messageIds: L(W),
            highlights: L(Re).max(Ie)
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
        }), K = H({
            canEdit: Te()
        }), ze.safeExtend({
            ...K.shape,
            highlightForm: Le.optional()
        }), V(`event`, [H({
            event: U(`capabilities`),
            capabilities: K
        }), H({
            event: U(`viewport`),
            top: Ee().finite(),
            bottom: Ee().finite()
        })])
    })),
    Ve = e((() => {
        Be()
    })),
    He = e((() => {
        N(), f(), a(), F(), ue(), le(), r(), j(), E(), A(), Be(), Ve(), w(), D({
            add: {
                id: `chatgpt.feather_preview.highlights.editor.add.label`,
                defaultMessage: `Add feedback`
            },
            edit: {
                id: `chatgpt.feather_preview.highlights.editor.edit.title`,
                defaultMessage: `Edit feedback`
            },
            requiredLabel: {
                id: `chatgpt.feather_preview.highlights.editor.required.label`,
                defaultMessage: `Required`
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

function Ue(e) {
    return e instanceof Error ? e.message : String(e)
}

function We(e) {
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
    let l, u;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, X.jsx)(I, {}), u = (0, X.jsx)(ce, {}), t[3] = l, t[4] = u) : (l = t[3], u = t[4]);
    let d;
    t[5] !== n || t[6] !== i ? (d = (0, X.jsx)(se, {
        children: (0, X.jsxs)(Y.Suspense, {
            fallback: l,
            children: [u, (0, X.jsx)(`div`, {
                className: `@container w-full`,
                children: (0, X.jsx)(he.Provider, {
                    value: !0,
                    children: (0, X.jsx)(je, {
                        conversation: n,
                        disableExternalMedia: i,
                        onRequestCompletion: c,
                        clearPrefetchNavlink: c
                    })
                })
            })]
        })
    }), t[5] = n, t[6] = i, t[7] = d) : d = t[7];
    let f;
    t[8] !== n || t[9] !== d ? (f = (0, X.jsx)(Ae, {
        conversation: n,
        options: s,
        children: d
    }), t[8] = n, t[9] = d, t[10] = f) : f = t[10];
    let p;
    t[11] === n.id ? p = t[12] : (p = (0, X.jsx)(de, {
        conversationId: n.id
    }), t[11] = n.id, t[12] = p);
    let m;
    t[13] !== o || t[14] !== f || t[15] !== p ? (m = (0, X.jsxs)(xe.Provider, {
        value: o,
        children: [f, p]
    }), t[13] = o, t[14] = f, t[15] = p, t[16] = m) : m = t[16];
    let h;
    return t[17] !== n || t[18] !== m ? (h = (0, X.jsx)(be, {
        children: (0, X.jsx)(_.Provider, {
            value: n,
            children: m
        })
    }), t[17] = n, t[18] = m, t[19] = h) : h = t[19], h
}

function Ge(e) {
    let t = {},
        n = `client-created-root`;
    t[n] = {
        id: n,
        message: {
            id: n,
            author: {
                role: h.Root
            },
            content: {
                content_type: u.Text,
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
        ...Ce(e, `conversation_template_id`, `gizmo_id`, `is_archived`, `conversation_origin`, `async_status`, `update_time`, `is_do_not_remember`)
    }
}

function Ke(e) {
    return typeof e == `string` && e.length > 0
}

function qe() {
    "use forget";
    let e = (0, J.c)(14),
        t = O(),
        [n, r] = (0, Y.useState)(null),
        i;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = {
        active: null,
        ready: !1,
        resetting: null
    }, e[0] = i) : i = e[0];
    let a = (0, Y.useRef)(i),
        o = C(),
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
                    let o = Ge(a),
                        s = o.conversation_id;
                    if (!Ke(s)) throw Error(`Render conversation has no ID`);
                    let c = y({
                        sharedConversationId: s
                    });
                    q({
                        status: `loading`,
                        requestId: n
                    });
                    try {
                        ge(), Se(c, o, {
                            source: `internal-render-conversation`
                        }), te(c.id, e => {
                            e.continuingFromSharedConversationId = s
                        })
                    } catch (e) {
                        let t = e;
                        throw v(c), q({
                            status: `error`,
                            requestId: n,
                            error: Ue(t)
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
            e.active?.reject(n), e.resetting?.reject(n), e.active && v(e.active.conversation), e.active = null, e.ready = !1, e.resetting = null
        }
    }, d = [], e[4] = u, e[5] = d) : (u = e[4], d = e[5]), (0, Y.useEffect)(u, d);
    let f, p;
    e[6] !== n || e[7] !== t ? (f = () => {
        let e = a.current;
        if (n || !e.active || !e.resetting) return;
        let r = e.active,
            i = e.resetting;
        if (e.resetting = null, !v(r.conversation)) {
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
    return e[10] !== n || e[11] !== l || e[12] !== s ? (m = n ? (0, X.jsx)(Je, {
        attempt: n,
        networkPolicy: s,
        disableExternalMedia: l
    }, n.conversation.id) : null, e[10] = n, e[11] = l, e[12] = s, e[13] = m) : m = e[13], m
}

function Je(e) {
    "use forget";
    let t = (0, J.c)(9),
        {
            attempt: n,
            networkPolicy: r,
            disableExternalMedia: i
        } = e,
        a = d(n.conversation.id, Ye),
        o, s;
    t[0] !== n || t[1] !== a ? (o = () => {
        a && n.resolve()
    }, s = [n, a], t[0] = n, t[1] = a, t[2] = o, t[3] = s) : (o = t[2], s = t[3]), (0, Y.useEffect)(o, s);
    let c;
    return t[4] !== n.conversation || t[5] !== i || t[6] !== a || t[7] !== r ? (c = a ? (0, X.jsx)(We, {
        conversation: n.conversation,
        networkPolicy: r,
        disableExternalMedia: i
    }) : null, t[4] = n.conversation, t[5] = i, t[6] = a, t[7] = r, t[8] = c) : c = t[8], c
}

function Ye(e) {
    return e?.isLoading === !1
}

function Xe() {
    "use forget";
    let e = (0, J.c)(31),
        t = ne(),
        n = re(),
        r = C(),
        a;
    e[0] === t ? a = e[1] : (a = () => typeof t == `object` && t ? t : null, e[0] = t, e[1] = a);
    let [o] = (0, Y.useState)(a), c = o?.parentOrigin ?? null, u = typeof t == `string` ? t : o?.payload ?? n, [f, p] = (0, Y.useState)(null), h = f ?? u;
    s.debug(`IN: POST=${u.length}, GET=${n?.length}`);
    let g, _;
    e[2] === c ? (g = e[3], _ = e[4]) : (g = () => {
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
            typeof n != `object` || !n || Array.isArray(n) || Object.keys(n).some(Qe) || !(`conversation` in n) || n.conversation == null || typeof n.conversation != `object` || Array.isArray(n.conversation) || (p(t.payload), window.parent.postMessage({
                type: `feather-render-updated`,
                requestId: t.requestId
            }, c))
        };
        return window.addEventListener(`message`, e), window.parent.postMessage({
            type: `feather-render-ready`
        }, c), () => window.removeEventListener(`message`, e)
    }, _ = [c], e[2] = c, e[3] = g, e[4] = _), (0, Y.useEffect)(g, _);
    let v;
    e[5] === h ? v = e[6] : (v = JSON.parse(h), e[5] = h, e[6] = v);
    let y = v,
        b = c ? y.conversation : y,
        x = c ? y.asset_url_overrides ?? null : null,
        S, w;
    if (e[7] !== r) {
        let t = new URLSearchParams(m().featherRenderUrlQueryParams ?? r.search);
        S = t.get(Z) === `deps-only` ? `deps-only` : `none`, w = t.get(Q) === `1` || t.get($) === `1`, e[7] = r, e[8] = S, e[9] = w
    } else S = e[8], w = e[9];
    let T = w,
        E = b.conversation_id ?? b.id,
        D = E,
        O = E,
        k;
    e[10] !== D || e[11] !== O ? (k = ee(D, {
        sharedConversationId: O
    }), e[10] = D, e[11] = O, e[12] = k) : k = e[12];
    let A = k,
        j = d(D, Ze),
        M, N;
    e[13] !== A || e[14] !== b || e[15] !== D || e[16] !== c || e[17] !== x || e[18] !== O ? (M = () => {
        ge(), q({
            status: `loading`
        });
        try {
            let e = Ge(b);
            l(D, x), Se(A, e, {
                source: `internal-render-conversation`
            }), te(D, t => {
                t.continuingFromSharedConversationId = O, c && t.tree.currentLeafId !== e.current_node && i.setCurrentLeafId(t, e.current_node)
            })
        } catch (e) {
            let t = Ue(e);
            s.error(`Failed to load internal render conversation`, {
                error: t
            }), q({
                status: `error`,
                error: t
            })
        }
        return () => l(D, null)
    }, N = [A, b, D, c, x, O], e[13] = A, e[14] = b, e[15] = D, e[16] = c, e[17] = x, e[18] = O, e[19] = M, e[20] = N) : (M = e[19], N = e[20]), (0, Y.useEffect)(M, N);
    let P, F;
    e[21] === j ? (P = e[22], F = e[23]) : (P = () => {
        j && q({
            status: `ready`
        })
    }, F = [j], e[21] = j, e[22] = P, e[23] = F), (0, Y.useEffect)(P, F), s.debug(`Ready ${D} (SERVER: false) : ${h.length} byte(s)`);
    let I;
    return e[24] !== A || e[25] !== b || e[26] !== T || e[27] !== j || e[28] !== S || e[29] !== c ? (I = null, e[24] = A, e[25] = b, e[26] = T, e[27] = j, e[28] = S, e[29] = c, e[30] = I) : I = e[30], I
}

function Ze(e) {
    return e?.isLoading === !1
}

function Qe(e) {
    return e !== `conversation` && e !== `asset_url_overrides`
}
var J, Y, X, $e, Z, Q, $, et, tt, nt, rt = e((() => {
    k(), J = N(), g(), _e(), pe(), Me(), x(), fe(), me(), ie(), He(), n(), p(), ae(), oe(), ye(), ve(), Ne(), o(), b(), M(), S(), P(), Y = t(j()), X = w(), $e = !1, Z = `preview_network_policy`, Q = `disable_external_media`, $ = `disable_video_preview`, et = () => [{
        title: `ChatGPT`
    }], tt = () => !1, nt = T(function() {
        "use forget";
        let e = (0, J.c)(5),
            t = ne(),
            n = C(),
            r;
        e[0] !== t || e[1] !== n ? (r = $e, e[0] = t, e[1] = n, e[2] = r) : r = e[2];
        let i = r,
            a;
        return e[3] === i ? a = e[4] : (a = i ? (0, X.jsx)(qe, {}) : (0, X.jsx)(Xe, {}), e[3] = i, e[4] = a), a
    })
}));
export {
    tt as i, nt as n, et as r, rt as t
};
//# sourceMappingURL=8cc1dd94-fd8tyebdof2vs1w8.js.map