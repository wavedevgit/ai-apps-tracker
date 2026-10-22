const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/conversation-small-m08q51xmfe7gjq3d.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-lgbmg5s09xld40kt.js", "assets/c470f5ab-hgik953cu5ujlhdm.js", "assets/0e5afe53-i4tqvmyg38miikw0.js", "assets/conversation-small-dtc7tvsx.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as n,
    $tt as r,
    Art as i,
    Bot as a,
    Cat as o,
    Dtt as s,
    Fa as c,
    GJ as l,
    Iat as u,
    Int as d,
    Jat as f,
    KJ as p,
    Ma as m,
    Mnt as ee,
    Na as h,
    Nat as te,
    Ort as ne,
    Rnt as g,
    Tat as re,
    Vot as ie,
    Wst as ae,
    Yat as oe,
    bct as se,
    ctt as ce,
    eY as le,
    ent as ue,
    eot as de,
    gF as fe,
    hrt as pe,
    jtt as me,
    krt as he,
    lrt as ge,
    pnt as _e,
    sY as ve,
    vF as ye
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as be,
    Vn as xe,
    cn as Se,
    ln as Ce,
    wn as we
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Hjn as _,
    Ift as Te,
    KU as Ee,
    Lft as De,
    MM as Oe,
    NM as ke,
    OM as Ae,
    OP as je,
    PM as Me,
    SFt as Ne,
    UVn as Pe,
    Ujn as Fe,
    Vft as Ie,
    WVn as Le,
    Yjn as v,
    bFt as y,
    cT as Re,
    dT as ze,
    jM as Be,
    kM as Ve,
    kP as He,
    lT as Ue,
    qU as We,
    qjn as b
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    n as Ge,
    t as Ke
} from "./19ad7347-jxtz19hu4kwobrkp.js";
import {
    r as qe,
    t as Je
} from "./922a3d67-enouq0rem1andti9.js";
import {
    l as Ye,
    u as Xe
} from "./04f387fb-oulqx0rns6bfuggu.js";
import {
    d as Ze,
    t as Qe
} from "./bfb5f53c-g36egz3x3ykyh1tg.js";
var x, S, $e = e((() => {
        g(), x = e => {
            if (e) try {
                return JSON.stringify(e)
            } catch {
                return
            }
        }, S = (e, t) => {
            try {
                d.logStructuredEvent(`ChatgptWidgetEvent`, {
                    eventName: e,
                    eventData: x(t)
                })
            } catch {}
        }
    })),
    C, w, et = e((() => {
        C = `_8ljHja_chatgptPaletteBoundary`, w = {
            chatgptPaletteBoundary: C
        }
    })),
    T, E, D, O, k, A, j, M, N, P, F, I, L, R, tt = e((() => {
        qe(), et(), T = be(), E = `__chatgptClientDefinedWidget`, D = e => !!e && typeof e == `object` && !Array.isArray(e), O = e => {
            if (D(e) && e.type === `client_defined_widget`) return e
        }, k = e => {
            let t = typeof e.refIndex == `number` ? e.refIndex : e.ref_index;
            return typeof t == `number` ? t : void 0
        }, A = e => e.type === E, j = ({
            hostWidget: e,
            modelWrittenDilV2Bind: t,
            contentReferences: n,
            isActivelyStreaming: r,
            messageId: i,
            clientThreadId: a,
            trackContentReferenceEvent: o,
            turnIndex: s
        }) => {
            if (!A(e)) return null;
            let c = k(e);
            if (c === void 0) return null;
            let l = O(n[c]);
            return l ? (0, T.jsx)(l.data.display_mode === `inline` ? `span` : `div`, {
                className: w.chatgptPaletteBoundary,
                "data-client-defined-widget": l.category,
                "data-d-component": l.category,
                children: (0, T.jsx)(Je, {
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
        }, M = ({
            embeddedWidgets: e,
            effectiveRefIndex: t
        }) => Array.isArray(e) && e.length > 0 ? e.flatMap(e => typeof e?.ref_index == `number` ? [e.ref_index] : []).filter((e, t, n) => n.indexOf(e) === t) : t === void 0 ? [] : [t], N = (e, t) => typeof t == `number` && O(e[t])?.category === `writing_block`, P = e => Array.isArray(e) ? e : e == null ? [] : [e], F = (e, t) => D(e) && e.type === t, I = e => {
            let t = [...P(e.children), ...D(e.props) ? P(e.props.children) : [], ...Object.entries(e).flatMap(([e, t]) => e.startsWith(`*`) && e.length > 1 ? P(t) : [])];
            if (e.type === `Show`) {
                if (e.visible === !1) return [];
                if (e.when === !1) return t.filter(e => F(e, `Show.Else`));
                if (e.when === !0 || e.when == null) return t.filter(e => !F(e, `Show.Else`))
            }
            return e.type === `Show.Else` && e.when === !1 ? [] : t
        }, L = (e, t) => {
            if (!D(e)) return !1;
            if (e.type === `__chatgptClientDefinedWidget`) {
                let n = k(e);
                if (N(t, n)) return !0
            }
            return I(e).some(e => L(e, t))
        }, R = ({
            contentReferences: e,
            embeddedWidgets: t,
            effectiveRefIndex: n,
            widget: r
        }) => L(r, e) || M({
            embeddedWidgets: t,
            effectiveRefIndex: n
        }).some(t => N(e, t))
    }));

function nt({
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
        u = Ie(i, a ?? e?.messageId, n);
    De({
        clientThreadId: e?.clientThreadId,
        conversationId: t,
        messageId: a ?? e?.messageId,
        assistantMessageId: e?.assistantMessageId ?? a ?? e?.messageId,
        turnIndex: e?.turnIndex,
        contentReferenceStartIndex: r,
        surfaceLocation: _.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
        entityAffordance: Fe.CHATGPT_ENTITY_AFFORDANCE_PRODUCT_CARD,
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
var rt = e((() => {
    Te(), v()
}));

function it(e, t) {
    let n = t?.message;
    !e || !n || ve(e, e => {
        p.updateTree(e, e => {
            e.updateNodeMessage(n)
        })
    })
}
var at = e((() => {
    le()
}));

function z(e, t) {
    if (!t || !l.isLastActorMessage(e, t)) return !1;
    let n = l.getLastAssistantMessage(e);
    return n?.id === t && n.metadata?.chatgpt_sdk == null && l.getParentPromptNode(e, t)?.message.author.role === s.User
}

function B(e) {
    let {
        store: t,
        conversation: r,
        messageId: i,
        sharedPost: a
    } = e, o = t?.getSharedProps();
    return !t || !r || o?.conversation !== r || o.composerController.conversation !== r || o.isDisabled || a || Le(r) || t.getConsumerLockdownModeDecisionForConversation() !== !1 || !z(n(r.id), i) ? 0 : t.getUploadActionCapabilities()
}

function V(e, t) {
    return !!(t & H[e])
}

function ot(e, t) {
    if (!V(e, B(t))) return !1;
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
            return ee() ? n.openPhotoDialog?.() ?? !1 : n.openMediaDialog?.() ?? !1
    }
}
var H, st = e((() => {
    me(), Pe(), Ne(), le(), _e(), H = {
        request_file_upload: y.File,
        request_image_upload: y.Image,
        request_camera_capture: y.Camera,
        request_media_upload: y.Media
    }
}));

function ct(e) {
    "use forget";
    let t = (0, U.c)(13),
        {
            conversation: n,
            conversationMode: r,
            targetMessageId: i,
            widgetName: a
        } = e,
        o = a === `weather_widget` || a === `weather_widget_with_source` ? h.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_WEATHER_WIDGET : h.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_ASK_USER_LOCATION_WIDGET,
        s;
    t[0] === n ? s = t[1] : (s = n ?? fe(ce), t[0] = n, t[1] = s);
    let c;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = new Event(`click`), t[2] = c) : c = t[2];
    let l = n ? void 0 : !1,
        u;
    t[3] !== o || t[4] !== r || t[5] !== s || t[6] !== l || t[7] !== i ? (u = {
        analyticsEntryPoint: o,
        analyticsInteraction: m.CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON,
        conversation: s,
        conversationMode: r,
        sourceEvent: c,
        targetMessageId: i,
        shouldRegenerateOnSuccess: l
    }, t[3] = o, t[4] = r, t[5] = s, t[6] = l, t[7] = i, t[8] = u) : u = t[8];
    let {
        handleEnablePreciseLocation: f
    } = We(u), p;
    return t[9] !== o || t[10] !== n || t[11] !== f ? (p = e => {
        n && (d.logStructuredEvent(`ChatgptPreciseLocationLocationSharingRequest`, {
            entryPoint: o,
            interaction: m.CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON
        }), f(e))
    }, t[9] = o, t[10] = n, t[11] = f, t[12] = p) : p = t[12], p
}
var U, lt = e((() => {
    U = we(), me(), ye(), Ee(), g(), c()
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
            let s = K(e, n, a),
                c = pt(e);
            o.addAction(`dil.widget.error`, s), X.error(`dil.widget.error`, St(e, n, r, a, c), c ? n : void 0, {
                logToDatadog: !0
            }), i(s)
        }, [e, i, t]),
        onSoftRenderFailure: (0, Y.useCallback)(a => {
            let s = () => {
                t?.();
                let n = pt(e),
                    r = mt(e, a);
                o.addAction(`dil.widget.soft_failure`, r), X.error(`dil.widget.soft_failure`, Ct(e, a, n), n ? a.error : void 0, {
                    logToDatadog: !0
                }), a.scope !== `action-resolution` && i(r)
            };
            if (a.scope === `action-resolution`) {
                s();
                return
            }
            n.emitOnce(r, ht(a), s)
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
        return u(e)
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
        is_request_error: t instanceof f,
        request_error_status: t instanceof f ? t.status : void 0,
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
    o.addAction(e, t), he.count(i.DEFAULT, e, yt(t))
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
    return Ze({
        metrics: Ve,
        diagnosticsExpected: Be(),
        presentation: e,
        startupReporting: ke
    })
}
var Y, X, Et, Dt = e((() => {
    Qe(), Ae(), Me(), Oe(), ue(), re(), de(), te(), ne(), Y = t(xe()), ie(), X = r.createLogger(`dil-widget`), Et = class {
        constructor() {
            a(this, `emittedEventsByAttempt`, new Map)
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
    if (n && Xe(n)) return !0;
    let r = Z(e)?.toLowerCase();
    return r != null && kt.has(r)
}
var kt, Z, At = e((() => {
    Ye(), kt = new Set([`open_entity_detail`, `open_image_lightbox`]), Z = e => typeof e == `string` && e.trim() ? e.trim() : void 0
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
    let s = ze(e.source.affordance) ?? b.CHATGPT_WIDGET_AFFORDANCE_UNSPECIFIED;
    if (s === b.CHATGPT_WIDGET_AFFORDANCE_VALUE_INPUT && e.source.value !== void 0 || jt(e) || Mt(e)) return;
    let c = Q(e.source.target);
    if (!c) return;
    let l = Q(e.widgetName);
    Ue({
        clientThreadId: t,
        conversationId: n,
        messageId: r,
        assistantMessageId: r,
        turnIndex: i,
        contentReferenceStartIndex: a,
        surfaceLocation: _.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
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
    Re(), At(), v(), Pt = `open_url`, Ft = 256
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
        m = await Ke(i, l, s, r, {
            ownerUserId: o,
            projectId: c,
            requestSource: `web_dil_action`,
            signal: f.signal
        }).catch(e => (e instanceof oe && e.code != null && (p = e.code), null));
    if (e.delete(f), !f.signal.aborted) {
        if (m?.status === ae.Success && m.download_url) {
            if (a?.openPreview && u && m.file_id && !t && He(s) && ge(`2617788439`)) {
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
    se(), je(), de(), pe(), Ge(), Ce(), $ = async e => {
        let {
            openInChatFileViewer: t
        } = await Se(async () => {
            let {
                openInChatFileViewer: e
            } = await import(`./conversation-small-m08q51xmfe7gjq3d.js`).then(e => (e.PEt(), e.IEt));
            return {
                openInChatFileViewer: e
            }
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]));
        return t(e)
    }
}));
export {
    R as C, S as D, $e as E, E as S, j as T, ot as _, Ot as a, rt as b, Dt as c, lt as d, ct as f, z as g, st as h, Nt as i, ut as l, B as m, Rt as n, At as o, V as p, It as r, Tt as s, Lt as t, dt as u, it as v, tt as w, nt as x, at as y
};
//# sourceMappingURL=16d56f73-bewv1xf1czrdjg5t.js.map