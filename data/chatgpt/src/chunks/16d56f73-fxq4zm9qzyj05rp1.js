const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as n,
    Bnt as r,
    Crt as i,
    Fa as a,
    GJ as o,
    Irt as s,
    Jot as c,
    KJ as l,
    Knt as u,
    Lrt as d,
    Ma as f,
    Na as p,
    Nat as m,
    Oct as ee,
    Qst as te,
    Rrt as ne,
    Vat as re,
    Wat as ie,
    Wnt as h,
    Yot as ae,
    _rt as oe,
    cnt as se,
    cot as g,
    eY as _,
    ftt as ce,
    gF as le,
    gtt as ue,
    jat as v,
    not as de,
    qet as fe,
    rot as pe,
    sY as me,
    snt as he,
    vF as ge,
    xnt as _e
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as ve,
    Vn as ye,
    cn as be,
    ln as xe,
    wn as Se
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $jn as y,
    KU as Ce,
    MM as we,
    NM as Te,
    Nft as Ee,
    OM as De,
    OP as Oe,
    PM as ke,
    Pft as Ae,
    Rft as je,
    cT as Me,
    dT as Ne,
    eMn as Pe,
    gFt as Fe,
    iMn as b,
    jM as Ie,
    kM as Le,
    kP as Re,
    lT as ze,
    mFt as x,
    nHn as Be,
    oMn as S,
    qU as Ve,
    rHn as He
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    n as Ue,
    t as We
} from "./19ad7347-o7bptqi9btdhnu60.js";
import {
    r as Ge,
    t as Ke
} from "./922a3d67-doxf6ck6w844y6qx.js";
import {
    l as qe,
    u as Je
} from "./04f387fb-m1u5mtit7h22gcqu.js";
import {
    d as Ye,
    t as Xe
} from "./bfb5f53c-kxgxudejx5vw8s04.js";
var C, w, Ze = e((() => {
        u(), C = e => {
            if (e) try {
                return JSON.stringify(e)
            } catch {
                return
            }
        }, w = (e, t) => {
            try {
                h.logStructuredEvent(`ChatgptWidgetEvent`, {
                    eventName: e,
                    eventData: C(t)
                })
            } catch {}
        }
    })),
    T, E, Qe = e((() => {
        T = `_8ljHja_chatgptPaletteBoundary`, E = {
            chatgptPaletteBoundary: T
        }
    })),
    D, O, k, A, j, M, N, P, F, I, L, R, z, B, $e = e((() => {
        Ge(), Qe(), D = ve(), O = `__chatgptClientDefinedWidget`, k = e => !!e && typeof e == `object` && !Array.isArray(e), A = e => {
            if (k(e) && e.type === `client_defined_widget`) return e
        }, j = e => {
            let t = typeof e.refIndex == `number` ? e.refIndex : e.ref_index;
            return typeof t == `number` ? t : void 0
        }, M = e => e.type === O, N = ({
            hostWidget: e,
            modelWrittenDilV2Bind: t,
            contentReferences: n,
            isActivelyStreaming: r,
            messageId: i,
            clientThreadId: a,
            trackContentReferenceEvent: o,
            turnIndex: s
        }) => {
            if (!M(e)) return null;
            let c = j(e);
            if (c === void 0) return null;
            let l = A(n[c]);
            return l ? (0, D.jsx)(l.data.display_mode === `inline` ? `span` : `div`, {
                className: E.chatgptPaletteBoundary,
                "data-client-defined-widget": l.category,
                "data-d-component": l.category,
                children: (0, D.jsx)(Ke, {
                    appBlockBind: t,
                    contentReference: l,
                    enableProgressiveAppBlockStreaming: !0,
                    isActivelyStreaming: r,
                    isContentReferenceStreaming: r && e.isStreaming === !0,
                    messageId: i,
                    clientThreadId: a,
                    refIndex: c,
                    trackContentReferenceEvent: o,
                    turnIndex: s
                })
            }) : null
        }, P = ({
            embeddedWidgets: e,
            effectiveRefIndex: t
        }) => Array.isArray(e) && e.length > 0 ? e.flatMap(e => typeof e?.ref_index == `number` ? [e.ref_index] : []).filter((e, t, n) => n.indexOf(e) === t) : t === void 0 ? [] : [t], F = (e, t) => typeof t == `number` && A(e[t])?.category === `writing_block`, I = e => Array.isArray(e) ? e : e == null ? [] : [e], L = (e, t) => k(e) && e.type === t, R = e => {
            let t = [...I(e.children), ...k(e.props) ? I(e.props.children) : [], ...Object.entries(e).flatMap(([e, t]) => e.startsWith(`*`) && e.length > 1 ? I(t) : [])];
            if (e.type === `Show`) {
                if (e.visible === !1) return [];
                if (e.when === !1) return t.filter(e => L(e, `Show.Else`));
                if (e.when === !0 || e.when == null) return t.filter(e => !L(e, `Show.Else`))
            }
            return e.type === `Show.Else` && e.when === !1 ? [] : t
        }, z = (e, t) => {
            if (!k(e)) return !1;
            if (e.type === `__chatgptClientDefinedWidget`) {
                let n = j(e);
                if (F(t, n)) return !0
            }
            return R(e).some(e => z(e, t))
        }, B = ({
            contentReferences: e,
            embeddedWidgets: t,
            effectiveRefIndex: n,
            widget: r
        }) => z(r, e) || P({
            embeddedWidgets: t,
            effectiveRefIndex: n
        }).some(t => F(e, t))
    }));

function et({
    analyticsMetadata: e,
    conversationId: t,
    contentReferenceIndex: n,
    contentReferenceStartIndex: r,
    product: i,
    sourceMessageId: a,
    isGenui: o,
    widgetName: s,
    widgetType: c
}) {
    let l = o ?? c === `model_written_dil`,
        u = je(i, a ?? e?.messageId, n);
    Ae({
        clientThreadId: e?.clientThreadId,
        conversationId: t,
        messageId: a ?? e?.messageId,
        assistantMessageId: e?.assistantMessageId ?? a ?? e?.messageId,
        turnIndex: e?.turnIndex,
        contentReferenceStartIndex: r,
        surfaceLocation: y.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
        entityAffordance: Pe.CHATGPT_ENTITY_AFFORDANCE_PRODUCT_CARD,
        entityId: u,
        entityCategory: `product`,
        contentReferenceType: `dil`,
        isGenui: l,
        parentContext: {
            widgetType: c,
            widgetName: s,
            contentReferenceStartIndex: r,
            messageId: a,
            entityCategory: `product`,
            entityId: u
        }
    })
}
var tt = e((() => {
    Ee(), S()
}));

function nt(e, t) {
    let n = t?.message;
    !e || !n || me(e, e => {
        l.updateTree(e, e => {
            e.updateNodeMessage(n)
        })
    })
}
var rt = e((() => {
    _()
}));

function V(e, t) {
    if (!t || !o.isLastActorMessage(e, t)) return !1;
    let n = o.getLastAssistantMessage(e);
    return n?.id === t && n.metadata?.chatgpt_sdk == null && o.getParentPromptNode(e, t)?.message.author.role === ce.User
}

function H(e) {
    let {
        store: t,
        conversation: r,
        messageId: i,
        sharedPost: a
    } = e, o = t?.getSharedProps();
    return !t || !r || o?.conversation !== r || o.composerController.conversation !== r || o.isDisabled || a || He(r) || t.getConsumerLockdownModeDecisionForConversation() !== !1 || !V(n(r.id), i) ? 0 : t.getUploadActionCapabilities()
}

function U(e, t) {
    return !!(t & at[e])
}

function it(e, t) {
    if (!U(e, H(t))) return !1;
    let n = t.store?.getSharedProps();
    if (!n) return !1;
    switch (e) {
        case `request_file_upload`:
            return n.openFileDialog(), !0;
        case `request_image_upload`:
            return n.openImageUploadDialog?.() ?? !1;
        case `request_camera_capture`:
            return n.openCameraDialog?.() ?? !1;
        case `request_media_upload`:
            return r() ? n.openPhotoDialog?.() ?? !1 : n.openMediaDialog?.() ?? !1
    }
}
var at, ot = e((() => {
    ue(), Be(), Fe(), _(), _e(), at = {
        request_file_upload: x.File,
        request_image_upload: x.Image,
        request_camera_capture: x.Camera,
        request_media_upload: x.Media
    }
}));

function st(e) {
    "use forget";
    let t = (0, ct.c)(13),
        {
            conversation: n,
            conversationMode: r,
            targetMessageId: i,
            widgetName: a
        } = e,
        o = a === `weather_widget` || a === `weather_widget_with_source` ? p.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_WEATHER_WIDGET : p.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_ASK_USER_LOCATION_WIDGET,
        s;
    t[0] === n ? s = t[1] : (s = n ?? le(fe), t[0] = n, t[1] = s);
    let c;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = new Event(`click`), t[2] = c) : c = t[2];
    let l = n ? void 0 : !1,
        u;
    t[3] !== o || t[4] !== r || t[5] !== s || t[6] !== l || t[7] !== i ? (u = {
        analyticsEntryPoint: o,
        analyticsInteraction: f.CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON,
        conversation: s,
        conversationMode: r,
        sourceEvent: c,
        targetMessageId: i,
        shouldRegenerateOnSuccess: l
    }, t[3] = o, t[4] = r, t[5] = s, t[6] = l, t[7] = i, t[8] = u) : u = t[8];
    let {
        handleEnablePreciseLocation: d
    } = Ve(u), m;
    return t[9] !== o || t[10] !== n || t[11] !== d ? (m = e => {
        n && (h.logStructuredEvent(`ChatgptPreciseLocationLocationSharingRequest`, {
            entryPoint: o,
            interaction: f.CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON
        }), d(e))
    }, t[9] = o, t[10] = n, t[11] = d, t[12] = m) : m = t[12], m
}
var ct, lt = e((() => {
    ct = Se(), ue(), ge(), Ce(), u(), a()
}));

function ut(e, t) {
    e(t, ``, `widget_renderer`)
}

function dt({
    context: e,
    onFailure: t
}) {
    "use no forget";
    let [n] = (0, Y.useState)(() => new Et), r = (0, Y.useMemo)(() => wt(e), [e]);
    (0, Y.useEffect)(() => {
        n.emitOnce(r, `attempt`, () => {
            if (e.is_legacy_dil_version) {
                bt(`dil.widget.legacy_v1_render_attempt`, {
                    dil_version: e.dil_version,
                    widget_renderer_type: e.widget_renderer_type,
                    widget_type: e.widget_type
                });
                return
            }
            G(`dil.widget.render_attempt`, W(e))
        })
    }, [e, n, r]);
    let i = (0, Y.useCallback)(e => {
        n.emitOnce(r, `failure`, () => G(`dil.widget.render_failure`, e))
    }, [n, r]);
    return {
        onInitialRenderCommit: (0, Y.useCallback)(() => {
            n.hasEmitted(r, `failure`) || n.hasEmitted(r, `initial-success`) || n.emitOnce(r, `initial-success`, () => G(`dil.widget.render_success`, W(e)))
        }, [e, n, r]),
        onRenderFailure: (0, Y.useCallback)((n, r, a = `error_boundary`) => {
            t?.();
            let o = K(e, n, a),
                s = pt(e);
            v.addAction(`dil.widget.error`, o), X.error(`dil.widget.error`, St(e, n, r, a, s), s ? n : void 0, {
                logToDatadog: !0
            }), i(o)
        }, [e, i, t]),
        onSoftRenderFailure: (0, Y.useCallback)(a => {
            let o = () => {
                t?.();
                let n = pt(e),
                    r = mt(e, a);
                v.addAction(`dil.widget.soft_failure`, r), X.error(`dil.widget.soft_failure`, Ct(e, a, n), n ? a.error : void 0, {
                    logToDatadog: !0
                }), a.scope !== `action-resolution` && i(r)
            };
            if (a.scope === `action-resolution`) {
                o();
                return
            }
            n.emitOnce(r, ht(a), o)
        }, [e, i, t, n, r])
    }
}

function W(e) {
    return {
        ...e.loggingMetadata,
        dil_version: e.dil_version,
        widget_renderer_type: e.widget_renderer_type,
        widget_type: e.widget_type,
        widget_name: e.widget_name,
        has_view_state: e.has_view_state,
        is_legacy_dil_version: e.is_legacy_dil_version,
        dil_url_present: e.dil_url_present
    }
}

function G(e, t) {
    return t.dil_version === `2.0` ? (bt(e, t), !0) : !1
}

function ft(e) {
    if (e) try {
        return ie(e)
    } catch {
        return
    }
}

function pt(e) {
    return e.widget_contains_pii === !1
}

function K(e, t, n) {
    return {
        ...W(e),
        error_boundary: e.error_boundary,
        error_source: n,
        error_name: t.name,
        is_request_error: t instanceof de,
        request_error_status: t instanceof de ? t.status : void 0,
        ...xt(t)
    }
}

function mt(e, t) {
    return {
        ...K(e, t.error, `widget_renderer`),
        error_source: `soft-failure`,
        error_scope: t.scope,
        recovery: t.recovery,
        node_type: t.node?.type,
        prop: t.node?.propName,
        path_id_present: !!t.node?.pathId
    }
}

function ht(e) {
    return `soft-failure:${JSON.stringify([e.scope,e.recovery,e.node?.type,e.node?.propName,e.node?.pathId,e.error.name,e.error.message])}`
}

function q(e) {
    return typeof e == `object` && !!e && !Array.isArray(e)
}

function gt(e) {
    if (!(e.name !== `WidgetExpressionError` || !q(e))) return q(e.details) ? e.details : void 0
}

function J(e, t) {
    if (e instanceof Error && (t === `name` || t === `message`)) return e[t];
    if (!q(e)) return;
    let n = e[t];
    return typeof n == `string` ? n : void 0
}

function _t(e) {
    let t = J(e.cause, `name`);
    return typeof t == `string` ? t : void 0
}

function vt(e) {
    return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0))
}

function yt(e) {
    return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0).map(([e, t]) => [e, String(t)]))
}

function bt(e, t) {
    v.addAction(e, t), d.count(ne.DEFAULT, e, yt(t))
}

function xt(e) {
    let t = gt(e);
    return t ? vt({
        dil_error_kind: J(t, `errorKind`),
        dil_expression_phase: J(t, `expressionPhase`),
        dil_function_name: J(t, `functionName`),
        dil_cause_name: _t(e)
    }) : {}
}

function St(e, t, n, r, i) {
    let a = K(e, t, r);
    if (!i) return a;
    let o = t.cause;
    return {
        ...a,
        dil_url: ft(e.dil_url),
        component_stack: n || void 0,
        error_message: t.message,
        error_stack: t.stack,
        error_cause_name: o instanceof Error ? o.name : void 0,
        error_cause_message: o instanceof Error ? o.message : typeof o == `string` ? o : void 0,
        error_cause_stack: o instanceof Error ? o.stack : void 0
    }
}

function Ct(e, t, n) {
    let r = mt(e, t);
    return n ? {
        ...St(e, t.error, ``, `widget_renderer`, !0),
        error_source: `soft-failure`,
        error_scope: t.scope,
        recovery: t.recovery,
        node_type: t.node?.type,
        prop: t.node?.propName,
        path_id: t.node?.pathId,
        path_id_present: !!t.node?.pathId
    } : r
}

function wt({
    server_thread_id: e,
    client_thread_id: t,
    message_id: n,
    widget_ref_id: r,
    ref_index: i,
    widget_renderer_type: a,
    widget_type: o
}) {
    return [e ?? `no_server_thread`, t ?? `no_client_thread`, n ?? `no_message`, r ?? `no_widget_ref`, i ?? `no_ref_index`, a ?? `no_renderer_type`, o ?? `no_widget_type`].join(`|`)
}

function Tt(e) {
    return Ye({
        metrics: Le,
        diagnosticsExpected: Ie(),
        presentation: e,
        startupReporting: Te
    })
}
var Y, X, Et, Dt = e((() => {
    Xe(), De(), ke(), we(), se(), m(), g(), re(), s(), Y = t(ye()), ae(), X = he.createLogger(`dil-widget`), Et = class {
        constructor() {
            c(this, `emittedEventsByAttempt`, new Map)
        }
        emitOnce(e, t, n) {
            let r = this.getEmittedEvents(e);
            r.has(t) || n() !== !1 && r.add(t)
        }
        hasEmitted(e, t) {
            return this.emittedEventsByAttempt.get(e)?.has(t) ?? !1
        }
        getEmittedEvents(e) {
            let t = this.emittedEventsByAttempt.get(e);
            if (t) return t;
            let n = new Set;
            return this.emittedEventsByAttempt.set(e, n), n
        }
    }
}));

function Ot({
    actionType: e,
    payload: t
}) {
    let n;
    try {
        n = Z(t?.event_name)
    } catch {}
    if (n && Je(n)) return !0;
    let r = Z(e)?.toLowerCase();
    return r != null && kt.has(r)
}
var kt, Z, At = e((() => {
    qe(), kt = new Set([`open_entity_detail`, `open_image_lightbox`]), Z = e => typeof e == `string` && e.trim() ? e.trim() : void 0
}));

function Q(e) {
    if (typeof e != `string`) return;
    let t = e.trim();
    return t === `` ? void 0 : t.slice(0, Ft)
}

function jt(e) {
    return Q(e.action?.type) === Pt
}

function Mt(e) {
    return Ot({
        actionType: e.action?.type,
        payload: e.action?.payload
    })
}

function Nt({
    interaction: e,
    clientThreadId: t,
    conversationId: n,
    messageId: r,
    turnIndex: i,
    contentReferenceStartIndex: a,
    effect: o
}) {
    if ((e.action?.cause ?? `user`) !== `user`) return;
    let s = Ne(e.source.affordance) ?? b.CHATGPT_WIDGET_AFFORDANCE_UNSPECIFIED;
    if (s === b.CHATGPT_WIDGET_AFFORDANCE_VALUE_INPUT && e.source.value !== void 0 || jt(e) || Mt(e)) return;
    let c = Q(e.source.target);
    if (!c) return;
    let l = Q(e.widgetName);
    ze({
        clientThreadId: t,
        conversationId: n,
        messageId: r,
        assistantMessageId: r,
        turnIndex: i,
        contentReferenceStartIndex: a,
        surfaceLocation: y.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
        widgetType: `model_written_dil`,
        ...l ? {
            widgetName: l
        } : {},
        widgetAffordance: s,
        widgetActionTarget: c,
        widgetActionValue: c === `button` ? void 0 : Q(e.source.value),
        contentReferenceType: `dil`,
        isGenui: !0,
        effect: o
    })
}
var Pt, Ft, It = e((() => {
    Me(), At(), S(), Pt = `open_url`, Ft = 256
}));
async function Lt({
    activeDownloadControllers: e,
    forceSandboxFileDownload: t,
    getErrorMessage: n,
    isSharedConversation: r,
    messageId: i,
    options: a,
    ownerUserId: o,
    path: s,
    projectId: c,
    sandboxServerThreadId: l,
    sourceConversation: u,
    toaster: d
}) {
    let f = new AbortController;
    e.add(f);
    let p = `default_download_link_error`,
        m = await We(i, l, s, r, {
            ownerUserId: o,
            projectId: c,
            requestSource: `web_dil_action`,
            signal: f.signal
        }).catch(e => (e instanceof pe && e.code != null && (p = e.code), null));
    if (e.delete(f), !f.signal.aborted) {
        if (m?.status === te.Success && m.download_url) {
            if (a?.openPreview && u && m.file_id && !t && Re(s) && oe(`2617788439`)) {
                await $({
                    messageId: i,
                    conversation: u,
                    fileId: m.file_id,
                    fileName: s.split(`/`).pop() ?? s,
                    isSharedConversation: r,
                    previewMode: `sidebar`,
                    serverThreadId: l
                });
                return
            }
            let e = document.createElement(`a`);
            e.href = m.download_url, e.click();
            return
        }
        d.danger(n(p, {
            fileName: s
        }), {
            toastId: `file_download_failed`
        })
    }
}
var $, Rt = e((() => {
    ee(), Oe(), g(), i(), Ue(), xe(), $ = async e => {
        let {
            openInChatFileViewer: t
        } = await be(async () => {
            let {
                openInChatFileViewer: e
            } = await import(`./conversation-small-bcbq46iub1p0ca1t.js`).then(e => (e.kEt(), e.jEt));
            return {
                openInChatFileViewer: e
            }
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]));
        return t(e)
    }
}));
export {
    B as C, w as D, Ze as E, O as S, N as T, it as _, Ot as a, tt as b, Dt as c, lt as d, st as f, V as g, ot as h, Nt as i, ut as l, H as m, Rt as n, At as o, U as p, It as r, Tt as s, Lt as t, dt as u, nt as v, $e as w, et as x, rt as y
};
//# sourceMappingURL=16d56f73-fxq4zm9qzyj05rp1.js.map