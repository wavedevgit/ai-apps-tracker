const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/conversation-small-fym1zmu9zimymmm1.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $it as n,
    AJ as r,
    Bit as i,
    Btt as a,
    Dit as o,
    Fet as s,
    Gat as c,
    Htt as l,
    Itt as u,
    JP as d,
    Jot as f,
    KP as ee,
    LJ as p,
    Lit as m,
    Ma as h,
    Mnt as te,
    Na as ne,
    Nnt as re,
    Pnt as ie,
    Qit as g,
    SJ as ae,
    Wat as oe,
    _tt as se,
    get as ce,
    iat as _,
    itt as le,
    ja as ue,
    kJ as de,
    kit as fe,
    pnt as pe,
    rtt as me,
    wst as he,
    xJ as v,
    ynt as ge,
    zet as _e
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as ve,
    Vn as ye,
    cn as be,
    ln as xe,
    wn as Se
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $An as y,
    Bft as Ce,
    CM as we,
    DM as Te,
    DP as Ee,
    EM as De,
    Fft as Oe,
    Ift as ke,
    KAn as b,
    KBn as Ae,
    OM as je,
    OP as Me,
    SM as Ne,
    TM as Pe,
    ZAn as x,
    aT as Fe,
    cT as Ie,
    gFt as S,
    hU as Le,
    mU as Re,
    oT as ze,
    qAn as Be,
    qBn as Ve,
    vFt as He
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as Ue,
    t as We
} from "./19ad7347-jfy8dr35vxiahqgp.js";
import {
    r as Ge,
    t as Ke
} from "./922a3d67-i4ixvlmqayu69rmj.js";
import {
    l as qe,
    u as Je
} from "./04f387fb-cmovpptevei0e5gi.js";
import {
    d as Ye,
    t as Xe
} from "./bfb5f53c-dfkkx3ehwh4kg5be.js";
var C, w, Ze = e((() => {
        l(), C = e => {
            if (e) try {
                return JSON.stringify(e)
            } catch {
                return
            }
        }, w = (e, t) => {
            try {
                a.logStructuredEvent(`ChatgptWidgetEvent`, {
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
        u = Ce(i, a ?? e?.messageId, n);
    ke({
        clientThreadId: e?.clientThreadId,
        conversationId: t,
        messageId: a ?? e?.messageId,
        assistantMessageId: e?.assistantMessageId ?? a ?? e?.messageId,
        turnIndex: e?.turnIndex,
        contentReferenceStartIndex: r,
        surfaceLocation: b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
        entityAffordance: Be.CHATGPT_ENTITY_AFFORDANCE_PRODUCT_CARD,
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
    Oe(), y()
}));

function nt(e, t) {
    let n = t?.message;
    !e || !n || p(e, e => {
        ae.updateTree(e, e => {
            e.updateNodeMessage(n)
        })
    })
}
var rt = e((() => {
    r()
}));

function V(e, t) {
    if (!t || !v.isLastActorMessage(e, t)) return !1;
    let n = v.getLastAssistantMessage(e);
    return n?.id === t && n.metadata?.chatgpt_sdk == null && v.getParentPromptNode(e, t)?.message.author.role === s.User
}

function H(e) {
    let {
        store: t,
        conversation: n,
        messageId: r,
        sharedPost: i
    } = e, a = t?.getSharedProps();
    return !t || !n || a?.conversation !== n || a.composerController.conversation !== n || a.isDisabled || i || Ve(n) || t.getConsumerLockdownModeDecisionForConversation() !== !1 || !V(de(n.id), r) ? 0 : t.getUploadActionCapabilities()
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
            return u() ? n.openPhotoDialog?.() ?? !1 : n.openMediaDialog?.() ?? !1
    }
}
var at, ot = e((() => {
    _e(), Ae(), He(), r(), se(), at = {
        request_file_upload: S.File,
        request_image_upload: S.Image,
        request_camera_capture: S.Camera,
        request_media_upload: S.Media
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
        s = o === `weather_widget` || o === `weather_widget_with_source` ? h.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_WEATHER_WIDGET : h.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_ASK_USER_LOCATION_WIDGET,
        c;
    t[0] === n ? c = t[1] : (c = n ?? ee(ce), t[0] = n, t[1] = c);
    let l;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = new Event(`click`), t[2] = l) : l = t[2];
    let u = n ? void 0 : !1,
        d;
    t[3] !== s || t[4] !== r || t[5] !== c || t[6] !== u || t[7] !== i ? (d = {
        analyticsEntryPoint: s,
        analyticsInteraction: ue.CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON,
        conversation: c,
        conversationMode: r,
        sourceEvent: l,
        targetMessageId: i,
        shouldRegenerateOnSuccess: u
    }, t[3] = s, t[4] = r, t[5] = c, t[6] = u, t[7] = i, t[8] = d) : d = t[8];
    let {
        handleEnablePreciseLocation: f
    } = Le(d), p;
    return t[9] !== s || t[10] !== n || t[11] !== f ? (p = e => {
        n && (a.logStructuredEvent(`ChatgptPreciseLocationLocationSharingRequest`, {
            entryPoint: s,
            interaction: ue.CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON
        }), f(e))
    }, t[9] = s, t[10] = n, t[11] = f, t[12] = p) : p = t[12], p
}
var ct, lt = e((() => {
    ct = Se(), _e(), d(), Re(), l(), ne()
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
        return i(e)
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
        is_request_error: t instanceof g,
        request_error_status: t instanceof g ? t.status : void 0,
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
    o.addAction(e, t), re.count(ie.DEFAULT, e, yt(t))
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
        metrics: we,
        diagnosticsExpected: Pe(),
        presentation: e,
        startupReporting: Te
    })
}
var Y, X, Et, Dt = e((() => {
    Xe(), Ne(), je(), De(), le(), fe(), _(), m(), te(), Y = t(ye()), c(), X = me.createLogger(`dil-widget`), Et = class {
        constructor() {
            oe(this, `emittedEventsByAttempt`, new Map)
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
    let s = Ie(e.source.affordance) ?? x.CHATGPT_WIDGET_AFFORDANCE_UNSPECIFIED;
    if (s === x.CHATGPT_WIDGET_AFFORDANCE_VALUE_INPUT && e.source.value !== void 0 || jt(e) || Mt(e)) return;
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
    Fe(), At(), y(), Pt = `open_url`, Ft = 256
}));
async function Lt({
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
    sourceConversation: d,
    toaster: ee
}) {
    let p = new AbortController;
    e.add(p);
    let m = `default_download_link_error`,
        h = await We(a, u, c, i, {
            ownerUserId: s,
            projectId: l,
            requestSource: `web_dil_action`,
            signal: p.signal
        }).catch(e => (e instanceof n && e.code != null && (m = e.code), null));
    if (e.delete(p), !p.signal.aborted) {
        if (h?.status === f.Success && h.download_url) {
            if (o?.openPreview && d && h.file_id && !t && Me(c) && pe(`2617788439`)) {
                await $({
                    messageId: a,
                    conversation: d,
                    fileId: h.file_id,
                    fileName: c.split(`/`).pop() ?? c,
                    isSharedConversation: i,
                    previewMode: `sidebar`,
                    serverThreadId: u
                });
                return
            }
            let e = document.createElement(`a`);
            e.href = h.download_url, e.click();
            return
        }
        ee.danger(r(m, {
            fileName: c
        }), {
            toastId: `file_download_failed`
        })
    }
}
var $, Rt = e((() => {
    he(), Ee(), _(), ge(), Ue(), xe(), $ = async e => {
        let {
            openInChatFileViewer: t
        } = await be(async () => {
            let {
                openInChatFileViewer: e
            } = await import(`./conversation-small-fym1zmu9zimymmm1.js`).then(e => (e.AEt(), e.MEt));
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
//# sourceMappingURL=16d56f73-g49s0guuao0ih2rf.js.map