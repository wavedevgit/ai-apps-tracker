import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as n,
    AT as r,
    Ant as i,
    Fet as a,
    JP as o,
    KP as s,
    LJ as c,
    QM as l,
    SJ as u,
    UP as d,
    VJ as f,
    WP as p,
    ZM as m,
    _H as h,
    bet as g,
    cot as _,
    cw as v,
    knt as y,
    lot as b,
    m7 as ee,
    p7 as x,
    vH as S,
    vN as C,
    zP as w,
    zet as T
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as E,
    At as te,
    Bn as D,
    Kt as O,
    Ln as k,
    N as A,
    Rn as j,
    Ut as M,
    Vn as N,
    jt as P,
    s as F,
    wn as I,
    wt as ne
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    B3t as L,
    CGn as re,
    EGn as ie,
    F8 as ae,
    Fp as oe,
    GBn as se,
    H3t as ce,
    PHn as le,
    Pp as ue,
    WBn as de,
    ar as fe,
    cr as pe,
    kjt as me,
    lFt as he,
    nL as ge,
    oA as _e,
    or as ve,
    rL as ye,
    sA as be,
    sr as xe,
    uFt as Se
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    AS as R,
    BS as z,
    CS as B,
    DS as Ce,
    ES as we,
    FS as V,
    PS as H,
    RS as Te,
    US as U,
    bS as Ee,
    dS as De,
    jS as W,
    xS as Oe
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    C_ as ke,
    Lt as Ae,
    Rt as je,
    w_ as Me
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
var Ne = e((() => {
        De(), B(`kind`, [W({
            type: R(`feather-live-preview`),
            version: R(1),
            kind: R(`event`),
            channel: z().min(1),
            payload: U()
        }), W({
            type: R(`feather-live-preview`),
            version: R(1),
            kind: R(`response`),
            channel: z().min(1),
            requestId: z(),
            payload: U()
        })]), B(`ok`, [V({
            ok: R(!0),
            result: U()
        }), V({
            ok: R(!1),
            error: z()
        })])
    })),
    Pe, Fe, G, Ie, Le, K, Re = e((() => {
        De(), Ne(), Pe = 1e5, Fe = 1e3, G = z().min(1).max(128), Ie = W({
            id: G,
            message_id: G,
            start_offset: we().nonnegative(),
            end_offset: we().positive(),
            substring: z().min(1).max(Pe),
            rendered_anchor: W({
                version: R(1),
                text_hash: z().regex(/^[a-f0-9]{64}$/),
                prefix: z().max(32),
                suffix: z().max(32)
            }),
            form_data: Te(z(), U())
        }).refine(({
            substring: e,
            start_offset: t,
            end_offset: n
        }) => e.length === n - t), Le = W({
            messageIds: Ee(G),
            highlights: Ee(Ie).max(Fe)
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
        }), K = V({
            canEdit: Oe()
        }), Ce(K, Le), B(`event`, [V({
            event: R(`capabilities`),
            capabilities: K
        }), V({
            event: R(`viewport`),
            top: H().finite(),
            bottom: H().finite()
        })])
    })),
    ze = e((() => {
        Re()
    })),
    Be = e((() => {
        I(), r(), v(), me(), le(), ae(), C(), N(), O(), j(), Re(), ze(), D(), k({
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
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, X.jsx)(ue, {}), u = (0, X.jsx)(L, {}), t[3] = c, t[4] = u) : (c = t[3], u = t[4]);
    let d;
    t[5] !== n || t[6] !== i ? (d = (0, X.jsx)(re, {
        children: (0, X.jsxs)(Y.Suspense, {
            fallback: c,
            children: [u, (0, X.jsx)(`div`, {
                className: `@container w-full`,
                children: (0, X.jsx)(_e.Provider, {
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
    t[11] === n.id ? p = t[12] : (p = (0, X.jsx)(fe, {
        conversationId: n.id
    }), t[11] = n.id, t[12] = p);
    let m;
    t[13] !== o || t[14] !== f || t[15] !== p ? (m = (0, X.jsxs)(xe.Provider, {
        value: o,
        children: [f, p]
    }), t[13] = o, t[14] = f, t[15] = p, t[16] = m) : m = t[16];
    let h;
    return t[17] !== n || t[18] !== m ? (h = (0, X.jsx)(he, {
        children: (0, X.jsx)(w.Provider, {
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
                role: a.Root
            },
            content: {
                content_type: g.Text,
                parts: []
            }
        },
        parent: ``,
        children: []
    };
    let r = n,
        i = [],
        o = new Set;
    for (let t of e.messages) o.add(t.id);
    for (let n of e.messages) {
        let e = n.metadata?.parent_id ?? r;
        o.has(e) || (e = r), t[n.id] = {
            id: n.id,
            message: n,
            parent: e,
            children: []
        }, r = n.id, i.push(...n.metadata?.safe_urls ?? [])
    }
    for (let [e, n] of Object.entries(t)) n.parent !== `` && t[n.parent]?.children?.push(e);
    let s = e.conversation_id ?? e.id;
    return {
        title: e.title ?? null,
        conversation_id: s,
        mapping: t,
        current_node: r,
        moderation_results: [],
        safe_urls: e.safe_urls ?? i,
        ...S(e, `conversation_template_id`, `gizmo_id`, `is_archived`, `conversation_origin`, `async_status`, `update_time`, `is_do_not_remember`)
    }
}

function We(e) {
    return typeof e == `string` && e.length > 0
}

function Ge() {
    "use forget";
    let e = (0, J.c)(14),
        t = A(),
        [n, r] = (0, Y.useState)(null),
        i;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = {
        active: null,
        ready: !1,
        resetting: null
    }, e[0] = i) : i = e[0];
    let a = (0, Y.useRef)(i),
        o = P(),
        s, l;
    if (e[1] !== o.search) {
        let t = new URLSearchParams(o.search);
        s = t.get(Z) === `deps-only` ? `deps-only` : `none`, l = t.get(Q) === `1` || t.get($) === `1`, e[1] = o.search, e[2] = s, e[3] = l
    } else s = e[2], l = e[3];
    let u = l,
        f, m;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (f = () => {
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
                    let l = d({
                        sharedConversationId: s
                    });
                    q({
                        status: `loading`,
                        requestId: n
                    });
                    try {
                        ye(), se(l, o, {
                            source: `internal-render-conversation`
                        }), c(l.id, e => {
                            e.continuingFromSharedConversationId = s
                        })
                    } catch (e) {
                        let t = e;
                        throw p(l), q({
                            status: `error`,
                            requestId: n,
                            error: Ve(t)
                        }), t
                    }
                    await new Promise((t, i) => {
                        let a = {
                            requestId: n,
                            conversation: l,
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
            e.active?.reject(n), e.resetting?.reject(n), e.active && p(e.active.conversation), e.active = null, e.ready = !1, e.resetting = null
        }
    }, m = [], e[4] = f, e[5] = m) : (f = e[4], m = e[5]), (0, Y.useEffect)(f, m);
    let h, g;
    e[6] !== n || e[7] !== t ? (h = () => {
        let e = a.current;
        if (n || !e.active || !e.resetting) return;
        let r = e.active,
            i = e.resetting;
        if (e.resetting = null, !p(r.conversation)) {
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
    }, g = [n, t], e[6] = n, e[7] = t, e[8] = h, e[9] = g) : (h = e[8], g = e[9]), (0, Y.useEffect)(h, g);
    let _;
    return e[10] !== n || e[11] !== u || e[12] !== s ? (_ = n ? (0, X.jsx)(Ke, {
        attempt: n,
        networkPolicy: s,
        disableExternalMedia: u
    }, n.conversation.id) : null, e[10] = n, e[11] = u, e[12] = s, e[13] = _) : _ = e[13], _
}

function Ke(e) {
    "use forget";
    let t = (0, J.c)(9),
        {
            attempt: n,
            networkPolicy: r,
            disableExternalMedia: i
        } = e,
        a = f(n.conversation.id, qe),
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
        t = ne(),
        n = te(),
        r = P(),
        a;
    e[0] === t ? a = e[1] : (a = () => typeof t == `object` && t ? t : null, e[0] = t, e[1] = a);
    let [o] = (0, Y.useState)(a), l = o?.parentOrigin ?? null, d = typeof t == `string` ? t : o?.payload ?? n, [p, m] = (0, Y.useState)(null), h = p ?? d;
    i.debug(`IN: POST=${d.length}, GET=${n?.length}`);
    let g, v;
    e[2] === l ? (g = e[3], v = e[4]) : (g = () => {
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
            typeof n != `object` || !n || Array.isArray(n) || Object.keys(n).some(Xe) || !(`conversation` in n) || n.conversation == null || typeof n.conversation != `object` || Array.isArray(n.conversation) || (m(t.payload), window.parent.postMessage({
                type: `feather-render-updated`,
                requestId: t.requestId
            }, l))
        };
        return window.addEventListener(`message`, e), window.parent.postMessage({
            type: `feather-render-ready`
        }, l), () => window.removeEventListener(`message`, e)
    }, v = [l], e[2] = l, e[3] = g, e[4] = v), (0, Y.useEffect)(g, v);
    let y;
    e[5] === h ? y = e[6] : (y = JSON.parse(h), e[5] = h, e[6] = y);
    let b = y,
        x = l ? b.conversation : b,
        S = l ? b.asset_url_overrides ?? null : null,
        C, w;
    if (e[7] !== r) {
        let t = new URLSearchParams(_().featherRenderUrlQueryParams ?? r.search);
        C = t.get(Z) === `deps-only` ? `deps-only` : `none`, w = t.get(Q) === `1` || t.get($) === `1`, e[7] = r, e[8] = C, e[9] = w
    } else C = e[8], w = e[9];
    let T = w,
        E = x.conversation_id ?? x.id,
        D = E,
        O = E,
        k;
    e[10] !== D || e[11] !== O ? (k = s(D, {
        sharedConversationId: O
    }), e[10] = D, e[11] = O, e[12] = k) : k = e[12];
    let A = k,
        j = f(D, Ye),
        M, N;
    e[13] !== A || e[14] !== x || e[15] !== D || e[16] !== l || e[17] !== S || e[18] !== O ? (M = () => {
        ye(), q({
            status: `loading`
        });
        try {
            let e = Ue(x);
            ee(D, S), se(A, e, {
                source: `internal-render-conversation`
            }), c(D, t => {
                t.continuingFromSharedConversationId = O, l && t.tree.currentLeafId !== e.current_node && u.setCurrentLeafId(t, e.current_node)
            })
        } catch (e) {
            let t = Ve(e);
            i.error(`Failed to load internal render conversation`, {
                error: t
            }), q({
                status: `error`,
                error: t
            })
        }
        return () => ee(D, null)
    }, N = [A, x, D, l, S, O], e[13] = A, e[14] = x, e[15] = D, e[16] = l, e[17] = S, e[18] = O, e[19] = M, e[20] = N) : (M = e[19], N = e[20]), (0, Y.useEffect)(M, N);
    let F, I;
    e[21] === j ? (F = e[22], I = e[23]) : (F = () => {
        j && q({
            status: `ready`
        })
    }, I = [j], e[21] = j, e[22] = F, e[23] = I), (0, Y.useEffect)(F, I), i.debug(`Ready ${D} (SERVER: false) : ${h.length} byte(s)`);
    let L;
    return e[24] !== A || e[25] !== x || e[26] !== T || e[27] !== j || e[28] !== C || e[29] !== l ? (L = null, e[24] = A, e[25] = x, e[26] = T, e[27] = j, e[28] = C, e[29] = l, e[30] = L) : L = e[30], L
}

function Ye(e) {
    return e?.isLoading === !1
}

function Xe(e) {
    return e !== `conversation` && e !== `asset_url_overrides`
}
var J, Y, X, Ze, Z, Q, $, Qe, $e, et, tt = e((() => {
    E(), J = I(), T(), ve(), pe(), Me(), o(), Se(), de(), ce(), Be(), x(), n(), ie(), oe(), ge(), be(), je(), y(), b(), F(), m(), h(), Y = t(N()), X = D(), Ze = !1, Z = `preview_network_policy`, Q = `disable_external_media`, $ = `disable_video_preview`, Qe = () => [{
        title: `ChatGPT`
    }], $e = () => !1, et = M(function() {
        "use forget";
        let e = (0, J.c)(5),
            t = ne(),
            n = P(),
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
//# sourceMappingURL=8cc1dd94-je4saxbi3m3x6tno.js.map