const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/conversation-small-nmt18uiom3b14vca.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-tap9fxyhk4ehe0bs.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-niqyapppecmq5jkn.js", "assets/c470f5ab-uuoa2gfm4goj6p9f.js", "assets/0e5afe53-f7up6uuou2fv3lyg.js", "assets/conversation-small-bwtqiuwj.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as n,
    Ast as r,
    Bat as i,
    Btt as a,
    Dot as o,
    Eot as s,
    Fat as c,
    JJ as l,
    Jet as u,
    Ma as d,
    Pa as f,
    Pat as p,
    Sat as m,
    Snt as h,
    YJ as g,
    Ynt as ee,
    _tt as _,
    dF as te,
    dat as ne,
    grt as re,
    hrt as ie,
    ja as v,
    lat as y,
    mrt as ae,
    nY as oe,
    oct as se,
    pF as ce,
    ptt as le,
    rY as ue,
    trt as de,
    uY as fe,
    vnt as pe,
    wnt as me,
    yat as he,
    ztt as ge
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as _e,
    Vn as ve,
    cn as ye,
    ln as be,
    wn as xe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AM as Se,
    DM as Ce,
    EFt as we,
    Hft as Te,
    MM as Ee,
    MP as De,
    NM as Oe,
    NP as ke,
    OM as Ae,
    Uft as je,
    bU as Me,
    cT as Ne,
    cVn as Pe,
    cjn as b,
    dT as Fe,
    hjn as x,
    jM as Ie,
    lT as Le,
    lVn as Re,
    ljn as ze,
    pjn as S,
    qft as Be,
    wFt as C,
    yU as Ve
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    n as He,
    t as Ue
} from "./19ad7347-iukyqy7fln323m3u.js";
import {
    r as We,
    t as Ge
} from "./922a3d67-a6yztoj5pxnp66sx.js";
import {
    l as Ke,
    u as qe
} from "./04f387fb-blovzch38gksuh3k.js";
import {
    d as Je,
    t as Ye
} from "./bfb5f53c-bejn2c2rrn2p2wqi.js";
var w, T, Xe = e((() => {
        me(), w = e => {
            if (e) try {
                return JSON.stringify(e)
            } catch {
                return
            }
        }, T = (e, t) => {
            try {
                h.logStructuredEvent(`ChatgptWidgetEvent`, {
                    eventName: e,
                    eventData: w(t)
                })
            } catch {}
        }
    })),
    E, D, Ze = e((() => {
        E = `_8ljHja_chatgptPaletteBoundary`, D = {
            chatgptPaletteBoundary: E
        }
    })),
    O, k, A, j, M, N, P, F, I, L, R, z, B, V, Qe = e((() => {
        We(), Ze(), O = _e(), k = `__chatgptClientDefinedWidget`, A = e => !!e && typeof e == `object` && !Array.isArray(e), j = e => {
            if (A(e) && e.type === `client_defined_widget`) return e
        }, M = e => {
            let t = typeof e.refIndex == `number` ? e.refIndex : e.ref_index;
            return typeof t == `number` ? t : void 0
        }, N = e => e.type === k, P = ({
            hostWidget: e,
            modelWrittenDilV2Bind: t,
            contentReferences: n,
            isActivelyStreaming: r,
            messageId: i,
            clientThreadId: a,
            trackContentReferenceEvent: o,
            turnIndex: s
        }) => {
            if (!N(e)) return null;
            let c = M(e);
            if (c === void 0) return null;
            let l = j(n[c]);
            return l ? (0, O.jsx)(l.data.display_mode === `inline` ? `span` : `div`, {
                className: D.chatgptPaletteBoundary,
                "data-client-defined-widget": l.category,
                "data-d-component": l.category,
                children: (0, O.jsx)(Ge, {
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
        }, F = ({
            embeddedWidgets: e,
            effectiveRefIndex: t
        }) => Array.isArray(e) && e.length > 0 ? e.flatMap(e => typeof e?.ref_index == `number` ? [e.ref_index] : []).filter((e, t, n) => n.indexOf(e) === t) : t === void 0 ? [] : [t], I = (e, t) => typeof t == `number` && j(e[t])?.category === `writing_block`, L = e => Array.isArray(e) ? e : e == null ? [] : [e], R = (e, t) => A(e) && e.type === t, z = e => {
            let t = [...L(e.children), ...A(e.props) ? L(e.props.children) : [], ...Object.entries(e).flatMap(([e, t]) => e.startsWith(`*`) && e.length > 1 ? L(t) : [])];
            if (e.type === `Show`) {
                if (e.visible === !1) return [];
                if (e.when === !1) return t.filter(e => R(e, `Show.Else`));
                if (e.when === !0 || e.when == null) return t.filter(e => !R(e, `Show.Else`))
            }
            return e.type === `Show.Else` && e.when === !1 ? [] : t
        }, B = (e, t) => {
            if (!A(e)) return !1;
            if (e.type === `__chatgptClientDefinedWidget`) {
                let n = M(e);
                if (I(t, n)) return !0
            }
            return z(e).some(e => B(e, t))
        }, V = ({
            contentReferences: e,
            embeddedWidgets: t,
            effectiveRefIndex: n,
            widget: r
        }) => B(r, e) || F({
            embeddedWidgets: t,
            effectiveRefIndex: n
        }).some(t => I(e, t))
    }));

function $e({
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
        u = Be(i, a ?? e?.messageId, n);
    je({
        clientThreadId: e?.clientThreadId,
        conversationId: t,
        messageId: a ?? e?.messageId,
        assistantMessageId: e?.assistantMessageId ?? a ?? e?.messageId,
        turnIndex: e?.turnIndex,
        contentReferenceStartIndex: r,
        surfaceLocation: b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
        entityAffordance: ze.CHATGPT_ENTITY_AFFORDANCE_PRODUCT_CARD,
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
var et = e((() => {
    Te(), x()
}));

function tt(e, t) {
    let n = t?.message;
    !e || !n || fe(e, e => {
        g.updateTree(e, e => {
            e.updateNodeMessage(n)
        })
    })
}
var nt = e((() => {
    ue()
}));

function H(e, t) {
    if (!t || !l.isLastActorMessage(e, t)) return !1;
    let n = l.getLastAssistantMessage(e);
    return n?.id === t && n.metadata?.chatgpt_sdk == null && l.getParentPromptNode(e, t)?.message.author.role === le.User
}

function U(e) {
    let {
        store: t,
        conversation: n,
        messageId: r,
        sharedPost: i
    } = e, a = t?.getSharedProps();
    return !t || !n || a?.conversation !== n || a.composerController.conversation !== n || a.isDisabled || i || Re(n) || t.getConsumerLockdownModeDecisionForConversation() !== !1 || !H(oe(n.id), r) ? 0 : t.getUploadActionCapabilities()
}

function rt(e, t) {
    return !!(t & at[e])
}

function it(e, t) {
    if (!rt(e, U(t))) return !1;
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
            return pe() ? n.openPhotoDialog?.() ?? !1 : n.openMediaDialog?.() ?? !1
    }
}
var at, ot = e((() => {
    _(), Pe(), we(), ue(), n(), at = {
        request_file_upload: C.File,
        request_image_upload: C.Image,
        request_camera_capture: C.Camera,
        request_media_upload: C.Media
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
        o = a === `weather_widget` || a === `weather_widget_with_source` ? d.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_WEATHER_WIDGET : d.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_ASK_USER_LOCATION_WIDGET,
        s;
    t[0] === n ? s = t[1] : (s = n ?? te(u), t[0] = n, t[1] = s);
    let c;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = new Event(`click`), t[2] = c) : c = t[2];
    let l = n ? void 0 : !1,
        f;
    t[3] !== o || t[4] !== r || t[5] !== s || t[6] !== l || t[7] !== i ? (f = {
        analyticsEntryPoint: o,
        analyticsInteraction: v.CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON,
        conversation: s,
        conversationMode: r,
        sourceEvent: c,
        targetMessageId: i,
        shouldRegenerateOnSuccess: l
    }, t[3] = o, t[4] = r, t[5] = s, t[6] = l, t[7] = i, t[8] = f) : f = t[8];
    let {
        handleEnablePreciseLocation: p
    } = Me(f), m;
    return t[9] !== o || t[10] !== n || t[11] !== p ? (m = e => {
        n && (h.logStructuredEvent(`ChatgptPreciseLocationLocationSharingRequest`, {
            entryPoint: o,
            interaction: v.CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON
        }), p(e))
    }, t[9] = o, t[10] = n, t[11] = p, t[12] = m) : m = t[12], m
}
var ct, lt = e((() => {
    ct = xe(), _(), ce(), Ve(), me(), f()
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
            y.addAction(`dil.widget.error`, o), X.error(`dil.widget.error`, St(e, n, r, a, s), s ? n : void 0, {
                logToDatadog: !0
            }), i(o)
        }, [e, i, t]),
        onSoftRenderFailure: (0, Y.useCallback)(a => {
            let o = () => {
                t?.();
                let n = pt(e),
                    r = mt(e, a);
                y.addAction(`dil.widget.soft_failure`, r), X.error(`dil.widget.soft_failure`, Ct(e, a, n), n ? a.error : void 0, {
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
        return m(e)
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
        is_request_error: t instanceof p,
        request_error_status: t instanceof p ? t.status : void 0,
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
    y.addAction(e, t), ie.count(re.DEFAULT, e, yt(t))
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
    return Je({
        metrics: Ae,
        diagnosticsExpected: Se(),
        presentation: e,
        startupReporting: Ee
    })
}
var Y, X, Et, Dt = e((() => {
    Ye(), Ce(), Oe(), Ie(), a(), ne(), i(), he(), ae(), Y = t(ve()), o(), X = ge.createLogger(`dil-widget`), Et = class {
        constructor() {
            s(this, `emittedEventsByAttempt`, new Map)
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
    if (n && qe(n)) return !0;
    let r = Z(e)?.toLowerCase();
    return r != null && kt.has(r)
}
var kt, Z, At = e((() => {
    Ke(), kt = new Set([`open_entity_detail`, `open_image_lightbox`]), Z = e => typeof e == `string` && e.trim() ? e.trim() : void 0
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
    let s = Fe(e.source.affordance) ?? S.CHATGPT_WIDGET_AFFORDANCE_UNSPECIFIED;
    if (s === S.CHATGPT_WIDGET_AFFORDANCE_VALUE_INPUT && e.source.value !== void 0 || jt(e) || Mt(e)) return;
    let c = Q(e.source.target);
    if (!c) return;
    let l = Q(e.widgetName);
    Le({
        clientThreadId: t,
        conversationId: n,
        messageId: r,
        assistantMessageId: r,
        turnIndex: i,
        contentReferenceStartIndex: a,
        surfaceLocation: b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
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
    Ne(), At(), x(), Pt = `open_url`, Ft = 256
}));
async function Lt({
    activeDownloadControllers: e,
    forceSandboxFileDownload: t,
    getErrorMessage: n,
    isSharedConversation: i,
    messageId: a,
    options: o,
    ownerUserId: s,
    path: l,
    projectId: u,
    sandboxServerThreadId: d,
    sourceConversation: f,
    toaster: p
}) {
    let m = new AbortController;
    e.add(m);
    let h = `default_download_link_error`,
        g = await Ue(a, d, l, i, {
            ownerUserId: s,
            projectId: u,
            requestSource: `web_dil_action`,
            signal: m.signal
        }).catch(e => (e instanceof c && e.code != null && (h = e.code), null));
    if (e.delete(m), !m.signal.aborted) {
        if (g?.status === r.Success && g.download_url) {
            if (o?.openPreview && f && g.file_id && !t && ke(l) && ee(`2617788439`)) {
                await $({
                    messageId: a,
                    conversation: f,
                    fileId: g.file_id,
                    fileName: l.split(`/`).pop() ?? l,
                    isSharedConversation: i,
                    previewMode: `sidebar`,
                    serverThreadId: d
                });
                return
            }
            let e = document.createElement(`a`);
            e.href = g.download_url, e.click();
            return
        }
        p.danger(n(h, {
            fileName: l
        }), {
            toastId: `file_download_failed`
        })
    }
}
var $, Rt = e((() => {
    se(), De(), i(), de(), He(), be(), $ = async e => {
        let {
            openInChatFileViewer: t
        } = await ye(async () => {
            let {
                openInChatFileViewer: e
            } = await import(`./conversation-small-nmt18uiom3b14vca.js`).then(e => (e.REt(), e.BEt));
            return {
                openInChatFileViewer: e
            }
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]));
        return t(e)
    }
}));
export {
    V as C, T as D, Xe as E, k as S, P as T, it as _, Ot as a, et as b, Dt as c, lt as d, st as f, H as g, ot as h, Nt as i, ut as l, U as m, Rt as n, At as o, rt as p, It as r, Tt as s, Lt as t, dt as u, tt as v, Qe as w, $e as x, nt as y
};
//# sourceMappingURL=16d56f73-e8r9am1mhgvpxxsf.js.map