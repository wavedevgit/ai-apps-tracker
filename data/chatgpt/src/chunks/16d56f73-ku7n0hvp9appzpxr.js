const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/conversation-small-cy5f8pl0g26s86so.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as n,
    Fat as r,
    Ftt as i,
    JJ as a,
    Jtt as o,
    Ma as s,
    Pa as c,
    Ptt as l,
    Sot as u,
    Tst as d,
    Wnt as f,
    Xnt as p,
    _at as m,
    _nt as h,
    drt as g,
    fF as _,
    ftt as ee,
    gtt as v,
    iat as y,
    ja as b,
    kat as x,
    lY as te,
    lrt as ne,
    mat as re,
    nY as S,
    oat as ie,
    pnt as ae,
    qJ as C,
    qet as oe,
    tY as se,
    tct as ce,
    uF as le,
    urt as ue,
    xot as de,
    ynt as fe
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as pe,
    Vn as me,
    cn as he,
    ln as ge,
    wn as _e
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AM as ve,
    AP as ye,
    Bft as be,
    CFt as xe,
    DM as Se,
    OM as Ce,
    TM as we,
    Wft as Te,
    _U as Ee,
    aVn as De,
    ajn as Oe,
    cT as ke,
    djn as w,
    gU as Ae,
    iVn as je,
    ijn as T,
    kM as Me,
    kP as Ne,
    ljn as E,
    sT as Pe,
    uT as Fe,
    wM as Ie,
    xFt as D,
    zft as Le
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as Re,
    t as ze
} from "./19ad7347-fdvehyglqlo2xagr.js";
import {
    r as Be,
    t as Ve
} from "./922a3d67-dizxs5qlenz1wmxv.js";
import {
    l as He,
    u as Ue
} from "./04f387fb-hr81txxsrrvxpfhr.js";
import {
    d as We,
    t as Ge
} from "./bfb5f53c-cko97ycpg9zdpkie.js";
var O, k, Ke = e((() => {
        fe(), O = e => {
            if (e) try {
                return JSON.stringify(e)
            } catch {
                return
            }
        }, k = (e, t) => {
            try {
                h.logStructuredEvent(`ChatgptWidgetEvent`, {
                    eventName: e,
                    eventData: O(t)
                })
            } catch {}
        }
    })),
    A, j, qe = e((() => {
        A = `_8ljHja_chatgptPaletteBoundary`, j = {
            chatgptPaletteBoundary: A
        }
    })),
    M, N, P, F, I, L, R, z, B, V, H, U, W, Je, Ye = e((() => {
        Be(), qe(), M = pe(), N = `__chatgptClientDefinedWidget`, P = e => !!e && typeof e == `object` && !Array.isArray(e), F = e => {
            if (P(e) && e.type === `client_defined_widget`) return e
        }, I = e => {
            let t = typeof e.refIndex == `number` ? e.refIndex : e.ref_index;
            return typeof t == `number` ? t : void 0
        }, L = e => e.type === N, R = ({
            hostWidget: e,
            modelWrittenDilV2Bind: t,
            contentReferences: n,
            isActivelyStreaming: r,
            messageId: i,
            clientThreadId: a,
            trackContentReferenceEvent: o,
            turnIndex: s
        }) => {
            if (!L(e)) return null;
            let c = I(e);
            if (c === void 0) return null;
            let l = F(n[c]);
            return l ? (0, M.jsx)(l.data.display_mode === `inline` ? `span` : `div`, {
                className: j.chatgptPaletteBoundary,
                "data-client-defined-widget": l.category,
                "data-d-component": l.category,
                children: (0, M.jsx)(Ve, {
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
        }, z = ({
            embeddedWidgets: e,
            effectiveRefIndex: t
        }) => Array.isArray(e) && e.length > 0 ? e.flatMap(e => typeof e?.ref_index == `number` ? [e.ref_index] : []).filter((e, t, n) => n.indexOf(e) === t) : t === void 0 ? [] : [t], B = (e, t) => typeof t == `number` && F(e[t])?.category === `writing_block`, V = e => Array.isArray(e) ? e : e == null ? [] : [e], H = (e, t) => P(e) && e.type === t, U = e => {
            let t = [...V(e.children), ...P(e.props) ? V(e.props.children) : [], ...Object.entries(e).flatMap(([e, t]) => e.startsWith(`*`) && e.length > 1 ? V(t) : [])];
            if (e.type === `Show`) {
                if (e.visible === !1) return [];
                if (e.when === !1) return t.filter(e => H(e, `Show.Else`));
                if (e.when === !0 || e.when == null) return t.filter(e => !H(e, `Show.Else`))
            }
            return e.type === `Show.Else` && e.when === !1 ? [] : t
        }, W = (e, t) => {
            if (!P(e)) return !1;
            if (e.type === `__chatgptClientDefinedWidget`) {
                let n = I(e);
                if (B(t, n)) return !0
            }
            return U(e).some(e => W(e, t))
        }, Je = ({
            contentReferences: e,
            embeddedWidgets: t,
            effectiveRefIndex: n,
            widget: r
        }) => W(r, e) || z({
            embeddedWidgets: t,
            effectiveRefIndex: n
        }).some(t => B(e, t))
    }));

function Xe({
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
        u = Te(i, a ?? e?.messageId, n);
    be({
        clientThreadId: e?.clientThreadId,
        conversationId: t,
        messageId: a ?? e?.messageId,
        assistantMessageId: e?.assistantMessageId ?? a ?? e?.messageId,
        turnIndex: e?.turnIndex,
        contentReferenceStartIndex: r,
        surfaceLocation: T.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
        entityAffordance: Oe.CHATGPT_ENTITY_AFFORDANCE_PRODUCT_CARD,
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
var Ze = e((() => {
    Le(), w()
}));

function Qe(e, t) {
    let n = t?.message;
    !e || !n || te(e, e => {
        a.updateTree(e, e => {
            e.updateNodeMessage(n)
        })
    })
}
var $e = e((() => {
    S()
}));

function et(e, t) {
    if (!t || !C.isLastActorMessage(e, t)) return !1;
    let n = C.getLastAssistantMessage(e);
    return n?.id === t && n.metadata?.chatgpt_sdk == null && C.getParentPromptNode(e, t)?.message.author.role === ee.User
}

function tt(e) {
    let {
        store: t,
        conversation: n,
        messageId: r,
        sharedPost: i
    } = e, a = t?.getSharedProps();
    return !t || !n || a?.conversation !== n || a.composerController.conversation !== n || a.isDisabled || i || De(n) || t.getConsumerLockdownModeDecisionForConversation() !== !1 || !et(se(n.id), r) ? 0 : t.getUploadActionCapabilities()
}

function nt(e, t) {
    return !!(t & it[e])
}

function rt(e, t) {
    if (!nt(e, tt(t))) return !1;
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
            return ae() ? n.openPhotoDialog?.() ?? !1 : n.openMediaDialog?.() ?? !1
    }
}
var it, at = e((() => {
    v(), je(), xe(), S(), o(), it = {
        request_file_upload: D.File,
        request_image_upload: D.Image,
        request_camera_capture: D.Camera,
        request_media_upload: D.Media
    }
}));

function ot(e) {
    "use forget";
    let t = (0, st.c)(13),
        {
            conversation: n,
            conversationMode: r,
            targetMessageId: i,
            widgetName: a
        } = e,
        o = a === `weather_widget` || a === `weather_widget_with_source` ? s.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_WEATHER_WIDGET : s.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_ASK_USER_LOCATION_WIDGET,
        c;
    t[0] === n ? c = t[1] : (c = n ?? le(oe), t[0] = n, t[1] = c);
    let l;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = new Event(`click`), t[2] = l) : l = t[2];
    let u = n ? void 0 : !1,
        d;
    t[3] !== o || t[4] !== r || t[5] !== c || t[6] !== u || t[7] !== i ? (d = {
        analyticsEntryPoint: o,
        analyticsInteraction: b.CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON,
        conversation: c,
        conversationMode: r,
        sourceEvent: l,
        targetMessageId: i,
        shouldRegenerateOnSuccess: u
    }, t[3] = o, t[4] = r, t[5] = c, t[6] = u, t[7] = i, t[8] = d) : d = t[8];
    let {
        handleEnablePreciseLocation: f
    } = Ee(d), p;
    return t[9] !== o || t[10] !== n || t[11] !== f ? (p = e => {
        n && (h.logStructuredEvent(`ChatgptPreciseLocationLocationSharingRequest`, {
            entryPoint: o,
            interaction: b.CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON
        }), f(e))
    }, t[9] = o, t[10] = n, t[11] = f, t[12] = p) : p = t[12], p
}
var st, ct = e((() => {
    st = _e(), v(), _(), Ae(), fe(), c()
}));

function lt(e, t) {
    e(t, ``, `widget_renderer`)
}

function ut({
    context: e,
    onFailure: t
}) {
    "use no forget";
    let [n] = (0, X.useState)(() => new Tt), r = (0, X.useMemo)(() => Ct(e), [e]);
    (0, X.useEffect)(() => {
        n.emitOnce(r, `attempt`, () => {
            if (e.is_legacy_dil_version) {
                yt(`dil.widget.legacy_v1_render_attempt`, {
                    dil_version: e.dil_version,
                    widget_renderer_type: e.widget_renderer_type,
                    widget_type: e.widget_type
                });
                return
            }
            K(`dil.widget.render_attempt`, G(e))
        })
    }, [e, n, r]);
    let i = (0, X.useCallback)(e => {
        n.emitOnce(r, `failure`, () => K(`dil.widget.render_failure`, e))
    }, [n, r]);
    return {
        onInitialRenderCommit: (0, X.useCallback)(() => {
            n.hasEmitted(r, `failure`) || n.hasEmitted(r, `initial-success`) || n.emitOnce(r, `initial-success`, () => K(`dil.widget.render_success`, G(e)))
        }, [e, n, r]),
        onRenderFailure: (0, X.useCallback)((n, r, a = `error_boundary`) => {
            t?.();
            let o = q(e, n, a),
                s = ft(e);
            y.addAction(`dil.widget.error`, o), Z.error(`dil.widget.error`, xt(e, n, r, a, s), s ? n : void 0, {
                logToDatadog: !0
            }), i(o)
        }, [e, i, t]),
        onSoftRenderFailure: (0, X.useCallback)(a => {
            let o = () => {
                t?.();
                let n = ft(e),
                    r = pt(e, a);
                y.addAction(`dil.widget.soft_failure`, r), Z.error(`dil.widget.soft_failure`, St(e, a, n), n ? a.error : void 0, {
                    logToDatadog: !0
                }), a.scope !== `action-resolution` && i(r)
            };
            if (a.scope === `action-resolution`) {
                o();
                return
            }
            n.emitOnce(r, mt(a), o)
        }, [e, i, t, n, r])
    }
}

function G(e) {
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

function K(e, t) {
    return t.dil_version === `2.0` ? (yt(e, t), !0) : !1
}

function dt(e) {
    if (e) try {
        return m(e)
    } catch {
        return
    }
}

function ft(e) {
    return e.widget_contains_pii === !1
}

function q(e, t, n) {
    return {
        ...G(e),
        error_boundary: e.error_boundary,
        error_source: n,
        error_name: t.name,
        is_request_error: t instanceof x,
        request_error_status: t instanceof x ? t.status : void 0,
        ...bt(t)
    }
}

function pt(e, t) {
    return {
        ...q(e, t.error, `widget_renderer`),
        error_source: `soft-failure`,
        error_scope: t.scope,
        recovery: t.recovery,
        node_type: t.node?.type,
        prop: t.node?.propName,
        path_id_present: !!t.node?.pathId
    }
}

function mt(e) {
    return `soft-failure:${JSON.stringify([e.scope,e.recovery,e.node?.type,e.node?.propName,e.node?.pathId,e.error.name,e.error.message])}`
}

function J(e) {
    return typeof e == `object` && !!e && !Array.isArray(e)
}

function ht(e) {
    if (!(e.name !== `WidgetExpressionError` || !J(e))) return J(e.details) ? e.details : void 0
}

function Y(e, t) {
    if (e instanceof Error && (t === `name` || t === `message`)) return e[t];
    if (!J(e)) return;
    let n = e[t];
    return typeof n == `string` ? n : void 0
}

function gt(e) {
    let t = Y(e.cause, `name`);
    return typeof t == `string` ? t : void 0
}

function _t(e) {
    return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0))
}

function vt(e) {
    return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0).map(([e, t]) => [e, String(t)]))
}

function yt(e, t) {
    y.addAction(e, t), ue.count(g.DEFAULT, e, vt(t))
}

function bt(e) {
    let t = ht(e);
    return t ? _t({
        dil_error_kind: Y(t, `errorKind`),
        dil_expression_phase: Y(t, `expressionPhase`),
        dil_function_name: Y(t, `functionName`),
        dil_cause_name: gt(e)
    }) : {}
}

function xt(e, t, n, r, i) {
    let a = q(e, t, r);
    if (!i) return a;
    let o = t.cause;
    return {
        ...a,
        dil_url: dt(e.dil_url),
        component_stack: n || void 0,
        error_message: t.message,
        error_stack: t.stack,
        error_cause_name: o instanceof Error ? o.name : void 0,
        error_cause_message: o instanceof Error ? o.message : typeof o == `string` ? o : void 0,
        error_cause_stack: o instanceof Error ? o.stack : void 0
    }
}

function St(e, t, n) {
    let r = pt(e, t);
    return n ? {
        ...xt(e, t.error, ``, `widget_renderer`, !0),
        error_source: `soft-failure`,
        error_scope: t.scope,
        recovery: t.recovery,
        node_type: t.node?.type,
        prop: t.node?.propName,
        path_id: t.node?.pathId,
        path_id_present: !!t.node?.pathId
    } : r
}

function Ct({
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

function wt(e) {
    return We({
        metrics: we,
        diagnosticsExpected: Se(),
        presentation: e,
        startupReporting: Me
    })
}
var X, Z, Tt, Et = e((() => {
    Ge(), Ie(), ve(), Ce(), i(), ie(), r(), re(), ne(), X = t(me()), u(), Z = l.createLogger(`dil-widget`), Tt = class {
        constructor() {
            de(this, `emittedEventsByAttempt`, new Map)
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

function Dt({
    actionType: e,
    payload: t
}) {
    let n;
    try {
        n = Q(t?.event_name)
    } catch {}
    if (n && Ue(n)) return !0;
    let r = Q(e)?.toLowerCase();
    return r != null && Ot.has(r)
}
var Ot, Q, kt = e((() => {
    He(), Ot = new Set([`open_entity_detail`, `open_image_lightbox`]), Q = e => typeof e == `string` && e.trim() ? e.trim() : void 0
}));

function $(e) {
    if (typeof e != `string`) return;
    let t = e.trim();
    return t === `` ? void 0 : t.slice(0, Pt)
}

function At(e) {
    return $(e.action?.type) === Nt
}

function jt(e) {
    return Dt({
        actionType: e.action?.type,
        payload: e.action?.payload
    })
}

function Mt({
    interaction: e,
    clientThreadId: t,
    conversationId: n,
    messageId: r,
    turnIndex: i,
    contentReferenceStartIndex: a,
    effect: o
}) {
    if ((e.action?.cause ?? `user`) !== `user`) return;
    let s = Fe(e.source.affordance) ?? E.CHATGPT_WIDGET_AFFORDANCE_UNSPECIFIED;
    if (s === E.CHATGPT_WIDGET_AFFORDANCE_VALUE_INPUT && e.source.value !== void 0 || At(e) || jt(e)) return;
    let c = $(e.source.target);
    if (!c) return;
    let l = $(e.widgetName);
    ke({
        clientThreadId: t,
        conversationId: n,
        messageId: r,
        assistantMessageId: r,
        turnIndex: i,
        contentReferenceStartIndex: a,
        surfaceLocation: T.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
        widgetType: `model_written_dil`,
        ...l ? {
            widgetName: l
        } : {},
        widgetAffordance: s,
        widgetActionTarget: c,
        widgetActionValue: c === `button` ? void 0 : $(e.source.value),
        contentReferenceType: `dil`,
        isGenui: !0,
        effect: o
    })
}
var Nt, Pt, Ft = e((() => {
    Pe(), kt(), w(), Nt = `open_url`, Pt = 256
}));
async function It({
    activeDownloadControllers: e,
    forceSandboxFileDownload: t,
    getErrorMessage: r,
    isSharedConversation: i,
    messageId: a,
    options: o,
    ownerUserId: s,
    path: c,
    projectId: l,
    sandboxServerThreadId: u,
    sourceConversation: p,
    toaster: m
}) {
    let h = new AbortController;
    e.add(h);
    let g = `default_download_link_error`,
        _ = await ze(a, u, c, i, {
            ownerUserId: s,
            projectId: l,
            requestSource: `web_dil_action`,
            signal: h.signal
        }).catch(e => (e instanceof n && e.code != null && (g = e.code), null));
    if (e.delete(h), !h.signal.aborted) {
        if (_?.status === d.Success && _.download_url) {
            if (o?.openPreview && p && _.file_id && !t && ye(c) && f(`2617788439`)) {
                await Lt({
                    messageId: a,
                    conversation: p,
                    fileId: _.file_id,
                    fileName: c.split(`/`).pop() ?? c,
                    isSharedConversation: i,
                    previewMode: `sidebar`,
                    serverThreadId: u
                });
                return
            }
            let e = document.createElement(`a`);
            e.href = _.download_url, e.click();
            return
        }
        m.danger(r(g, {
            fileName: c
        }), {
            toastId: `file_download_failed`
        })
    }
}
var Lt, Rt = e((() => {
    ce(), Ne(), r(), p(), Re(), ge(), Lt = async e => {
        let {
            openInChatFileViewer: t
        } = await he(async () => {
            let {
                openInChatFileViewer: e
            } = await import(`./conversation-small-cy5f8pl0g26s86so.js`).then(e => (e.FEt(), e.LEt));
            return {
                openInChatFileViewer: e
            }
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]));
        return t(e)
    }
}));
export {
    Je as C, k as D, Ke as E, N as S, R as T, rt as _, Dt as a, Ze as b, Et as c, ct as d, ot as f, et as g, at as h, Mt as i, lt as l, tt as m, Rt as n, kt as o, nt as p, Ft as r, wt as s, It as t, ut as u, Qe as v, Ye as w, Xe as x, $e as y
};
//# sourceMappingURL=16d56f73-ku7n0hvp9appzpxr.js.map