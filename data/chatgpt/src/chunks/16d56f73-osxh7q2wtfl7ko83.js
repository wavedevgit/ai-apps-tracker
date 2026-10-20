const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/conversation-small-cawdu7il3ha6y70c.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $st as n,
    Cst as r,
    Dat as i,
    Get as a,
    Hnt as o,
    JJ as s,
    Jnt as c,
    Ktt as l,
    Ma as u,
    Mtt as d,
    Na as f,
    Nat as p,
    Ntt as m,
    Oat as ee,
    _nt as h,
    bot as g,
    crt as te,
    dnt as ne,
    fF as re,
    fat as ie,
    hat as ae,
    hnt as _,
    iat as oe,
    ja as v,
    lY as se,
    lrt as ce,
    mtt as y,
    nY as b,
    nat as x,
    qJ as S,
    srt as le,
    tY as ue,
    uF as de,
    utt as fe,
    yot as pe
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Hn as me,
    Tn as he,
    Vn as ge,
    ln as _e,
    un as ve
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    AM as ye,
    AP as be,
    DM as xe,
    Hft as Se,
    Lft as Ce,
    OM as we,
    Rft as Te,
    TM as Ee,
    _U as De,
    bFt as Oe,
    cT as ke,
    cjn as C,
    gU as Ae,
    hjn as w,
    kM as je,
    kP as Me,
    lVn as Ne,
    ljn as Pe,
    pjn as T,
    sT as Fe,
    uT as Ie,
    uVn as Le,
    vFt as E,
    wM as Re
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    n as ze,
    t as Be
} from "./19ad7347-jtputgjf5gsfbtd8.js";
import {
    r as Ve,
    t as He
} from "./922a3d67-jx1i9nh39lb9loax.js";
import {
    l as Ue,
    u as We
} from "./04f387fb-duiptcsi88d7x300.js";
import {
    d as Ge,
    t as Ke
} from "./bfb5f53c-m7gfuikas4qui2su.js";
var D, O, qe = e((() => {
        h(), D = e => {
            if (e) try {
                return JSON.stringify(e)
            } catch {
                return
            }
        }, O = (e, t) => {
            try {
                _.logStructuredEvent(`ChatgptWidgetEvent`, {
                    eventName: e,
                    eventData: D(t)
                })
            } catch {}
        }
    })),
    k, A, Je = e((() => {
        k = `_8ljHja_chatgptPaletteBoundary`, A = {
            chatgptPaletteBoundary: k
        }
    })),
    j, M, N, P, F, I, L, R, z, B, V, H, U, Ye, Xe = e((() => {
        Ve(), Je(), j = ge(), M = `__chatgptClientDefinedWidget`, N = e => !!e && typeof e == `object` && !Array.isArray(e), P = e => {
            if (N(e) && e.type === `client_defined_widget`) return e
        }, F = e => {
            let t = typeof e.refIndex == `number` ? e.refIndex : e.ref_index;
            return typeof t == `number` ? t : void 0
        }, I = e => e.type === M, L = ({
            hostWidget: e,
            modelWrittenDilV2Bind: t,
            contentReferences: n,
            isActivelyStreaming: r,
            messageId: i,
            clientThreadId: a,
            trackContentReferenceEvent: o,
            turnIndex: s
        }) => {
            if (!I(e)) return null;
            let c = F(e);
            if (c === void 0) return null;
            let l = P(n[c]);
            return l ? (0, j.jsx)(l.data.display_mode === `inline` ? `span` : `div`, {
                className: A.chatgptPaletteBoundary,
                "data-client-defined-widget": l.category,
                "data-d-component": l.category,
                children: (0, j.jsx)(He, {
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
        }, R = ({
            embeddedWidgets: e,
            effectiveRefIndex: t
        }) => Array.isArray(e) && e.length > 0 ? e.flatMap(e => typeof e?.ref_index == `number` ? [e.ref_index] : []).filter((e, t, n) => n.indexOf(e) === t) : t === void 0 ? [] : [t], z = (e, t) => typeof t == `number` && P(e[t])?.category === `writing_block`, B = e => Array.isArray(e) ? e : e == null ? [] : [e], V = (e, t) => N(e) && e.type === t, H = e => {
            let t = [...B(e.children), ...N(e.props) ? B(e.props.children) : [], ...Object.entries(e).flatMap(([e, t]) => e.startsWith(`*`) && e.length > 1 ? B(t) : [])];
            if (e.type === `Show`) {
                if (e.visible === !1) return [];
                if (e.when === !1) return t.filter(e => V(e, `Show.Else`));
                if (e.when === !0 || e.when == null) return t.filter(e => !V(e, `Show.Else`))
            }
            return e.type === `Show.Else` && e.when === !1 ? [] : t
        }, U = (e, t) => {
            if (!N(e)) return !1;
            if (e.type === `__chatgptClientDefinedWidget`) {
                let n = F(e);
                if (z(t, n)) return !0
            }
            return H(e).some(e => U(e, t))
        }, Ye = ({
            contentReferences: e,
            embeddedWidgets: t,
            effectiveRefIndex: n,
            widget: r
        }) => U(r, e) || R({
            embeddedWidgets: t,
            effectiveRefIndex: n
        }).some(t => z(e, t))
    }));

function Ze({
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
        u = Se(i, a ?? e?.messageId, n);
    Te({
        clientThreadId: e?.clientThreadId,
        conversationId: t,
        messageId: a ?? e?.messageId,
        assistantMessageId: e?.assistantMessageId ?? a ?? e?.messageId,
        turnIndex: e?.turnIndex,
        contentReferenceStartIndex: r,
        surfaceLocation: C.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
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
var Qe = e((() => {
    Ce(), w()
}));

function $e(e, t) {
    let n = t?.message;
    !e || !n || se(e, e => {
        s.updateTree(e, e => {
            e.updateNodeMessage(n)
        })
    })
}
var et = e((() => {
    b()
}));

function tt(e, t) {
    if (!t || !S.isLastActorMessage(e, t)) return !1;
    let n = S.getLastAssistantMessage(e);
    return n?.id === t && n.metadata?.chatgpt_sdk == null && S.getParentPromptNode(e, t)?.message.author.role === fe.User
}

function nt(e) {
    let {
        store: t,
        conversation: n,
        messageId: r,
        sharedPost: i
    } = e, a = t?.getSharedProps();
    return !t || !n || a?.conversation !== n || a.composerController.conversation !== n || a.isDisabled || i || Le(n) || t.getConsumerLockdownModeDecisionForConversation() !== !1 || !tt(ue(n.id), r) ? 0 : t.getUploadActionCapabilities()
}

function rt(e, t) {
    return !!(t & at[e])
}

function it(e, t) {
    if (!rt(e, nt(t))) return !1;
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
            return ne() ? n.openPhotoDialog?.() ?? !1 : n.openMediaDialog?.() ?? !1
    }
}
var at, ot = e((() => {
    y(), Ne(), Oe(), b(), l(), at = {
        request_file_upload: E.File,
        request_image_upload: E.Image,
        request_camera_capture: E.Camera,
        request_media_upload: E.Media
    }
}));

function st(e) {
    "use forget";
    let t = (0, ct.c)(13),
        {
            conversation: n,
            conversationMode: r,
            targetMessageId: i,
            widgetName: o
        } = e,
        s = o === `weather_widget` || o === `weather_widget_with_source` ? u.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_WEATHER_WIDGET : u.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_ASK_USER_LOCATION_WIDGET,
        c;
    t[0] === n ? c = t[1] : (c = n ?? de(a), t[0] = n, t[1] = c);
    let l;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = new Event(`click`), t[2] = l) : l = t[2];
    let d = n ? void 0 : !1,
        f;
    t[3] !== s || t[4] !== r || t[5] !== c || t[6] !== d || t[7] !== i ? (f = {
        analyticsEntryPoint: s,
        analyticsInteraction: v.CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON,
        conversation: c,
        conversationMode: r,
        sourceEvent: l,
        targetMessageId: i,
        shouldRegenerateOnSuccess: d
    }, t[3] = s, t[4] = r, t[5] = c, t[6] = d, t[7] = i, t[8] = f) : f = t[8];
    let {
        handleEnablePreciseLocation: p
    } = De(f), m;
    return t[9] !== s || t[10] !== n || t[11] !== p ? (m = e => {
        n && (_.logStructuredEvent(`ChatgptPreciseLocationLocationSharingRequest`, {
            entryPoint: s,
            interaction: v.CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON
        }), p(e))
    }, t[9] = s, t[10] = n, t[11] = p, t[12] = m) : m = t[12], m
}
var ct, lt = e((() => {
    ct = he(), y(), re(), Ae(), h(), f()
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
            x.addAction(`dil.widget.error`, o), X.error(`dil.widget.error`, St(e, n, r, a, s), s ? n : void 0, {
                logToDatadog: !0
            }), i(o)
        }, [e, i, t]),
        onSoftRenderFailure: (0, Y.useCallback)(a => {
            let o = () => {
                t?.();
                let n = pt(e),
                    r = mt(e, a);
                x.addAction(`dil.widget.soft_failure`, r), X.error(`dil.widget.soft_failure`, Ct(e, a, n), n ? a.error : void 0, {
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
        return ae(e)
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
        is_request_error: t instanceof i,
        request_error_status: t instanceof i ? t.status : void 0,
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
    x.addAction(e, t), te.count(ce.DEFAULT, e, yt(t))
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
    return Ge({
        metrics: Ee,
        diagnosticsExpected: xe(),
        presentation: e,
        startupReporting: je
    })
}
var Y, X, Et, Dt = e((() => {
    Ke(), Re(), ye(), we(), m(), oe(), p(), ie(), le(), Y = t(me()), g(), X = d.createLogger(`dil-widget`), Et = class {
        constructor() {
            pe(this, `emittedEventsByAttempt`, new Map)
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
    if (n && We(n)) return !0;
    let r = Z(e)?.toLowerCase();
    return r != null && kt.has(r)
}
var kt, Z, At = e((() => {
    Ue(), kt = new Set([`open_entity_detail`, `open_image_lightbox`]), Z = e => typeof e == `string` && e.trim() ? e.trim() : void 0
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
    let s = Ie(e.source.affordance) ?? T.CHATGPT_WIDGET_AFFORDANCE_UNSPECIFIED;
    if (s === T.CHATGPT_WIDGET_AFFORDANCE_VALUE_INPUT && e.source.value !== void 0 || jt(e) || Mt(e)) return;
    let c = Q(e.source.target);
    if (!c) return;
    let l = Q(e.widgetName);
    ke({
        clientThreadId: t,
        conversationId: n,
        messageId: r,
        assistantMessageId: r,
        turnIndex: i,
        contentReferenceStartIndex: a,
        surfaceLocation: C.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
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
    Fe(), At(), w(), Pt = `open_url`, Ft = 256
}));
async function Lt({
    activeDownloadControllers: e,
    forceSandboxFileDownload: t,
    getErrorMessage: n,
    isSharedConversation: i,
    messageId: a,
    options: s,
    ownerUserId: c,
    path: l,
    projectId: u,
    sandboxServerThreadId: d,
    sourceConversation: f,
    toaster: p
}) {
    let m = new AbortController;
    e.add(m);
    let h = `default_download_link_error`,
        g = await Be(a, d, l, i, {
            ownerUserId: c,
            projectId: u,
            requestSource: `web_dil_action`,
            signal: m.signal
        }).catch(e => (e instanceof ee && e.code != null && (h = e.code), null));
    if (e.delete(m), !m.signal.aborted) {
        if (g?.status === r.Success && g.download_url) {
            if (s?.openPreview && f && g.file_id && !t && be(l) && o(`2617788439`)) {
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
    n(), Me(), p(), c(), ze(), ve(), $ = async e => {
        let {
            openInChatFileViewer: t
        } = await _e(async () => {
            let {
                openInChatFileViewer: e
            } = await import(`./conversation-small-cawdu7il3ha6y70c.js`).then(e => (e.MEt(), e.PEt));
            return {
                openInChatFileViewer: e
            }
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]));
        return t(e)
    }
}));
export {
    Ye as C, O as D, qe as E, M as S, L as T, it as _, Ot as a, Qe as b, Dt as c, lt as d, st as f, tt as g, ot as h, Nt as i, ut as l, nt as m, Rt as n, At as o, rt as p, It as r, Tt as s, Lt as t, dt as u, $e as v, Xe as w, Ze as x, et as y
};
//# sourceMappingURL=16d56f73-osxh7q2wtfl7ko83.js.map