export const __rspack_esm_ids = [337882];
export const __webpack_modules__ = {
    hlVK: (function(e, t, n) {
        var a = n("UKCO"),
            o = n("lAQI"),
            i = n("QdUF"),
            r = n("s4w7"),
            s = n("oHzU"),
            l = n("Kwur"),
            c = n("U861");
        let u = new Map,
            _ = new Map,
            d = o.F({
                benefit_id: o.p(["data_analysis_execution", "saved_memory", "response_personalization", "writing_assistance", "step_by_step_guidance", "personalized_advice", "professional_assistance", "conversation_history_search", "file_generation_download", "document_analysis", "connected_apps_access", "scheduled_tasks", "voice_conversation", "health_experience", "image_generation", "deep_research", "interactive_study", "interactive_app_creation"]),
                copy_source: o.p(["contextual", "fixed", "paid_social"]).optional().catch(void 0),
                copy_fallback_reason: o.p(["disabled", "missing", "empty", "too_long", "invalid_format"]).optional().catch(void 0),
                copy_prompt_version: o.z("v1").optional().catch(void 0)
            });
        n.d(t, {}, {
            a: async function(e) {
                let {
                    beacon: t,
                    eventType: n,
                    eventCtaId: o,
                    metadata: p,
                    accountId: m,
                    expectedIdentity: f = t[s.k],
                    keepalive: g
                } = e, b = f?.accountId ?? m;
                if ((0, c.e)(t.beacon_id) || p?.suppressLifecycle === !0 || t.beacon_id === r.a && null != b && _.has(b)) return;
                let h = (async () => {
                    try {
                        let e = null == f ? "/beacons/event" : "/beacons/v2/event";
                        await l.Request.safePost(e, {
                            keepalive: g,
                            expectedIdentity: f,
                            assertRequestCurrent: null != b ? () => {
                                if ((0, i.isBrowserWorkspaceSwitchPending)()) throw new DOMException("Workspace switch pending", "AbortError")
                            } : void 0,
                            additionalHeaders: null == b ? void 0 : {
                                "ChatGPT-Account-ID": b,
                                ...{
                                    [a.dc]: b
                                },
                                ...null != f ? {
                                    "x-openai-use-sheep": "1"
                                } : {}
                            },
                            requestBody: {
                                beacon_id: t.beacon_id,
                                conversation_id: p?.conversationId ?? void 0,
                                event_type: n,
                                event_cta_id: o,
                                message_id: p?.messageId ?? void 0,
                                tracking_id: t.tracking_id ?? void 0,
                                ... function(e) {
                                    if ("no_auth_login_upsell_banner" !== e.beacon_id) return {};
                                    let t = d.safeParse(e.custom_fields);
                                    if (!t.success) return {};
                                    let n = t.data;
                                    return {
                                        benefit_id: n.benefit_id,
                                        copy_source: n.copy_source,
                                        copy_fallback_reason: "fixed" === n.copy_source ? n.copy_fallback_reason : void 0,
                                        copy_prompt_version: "contextual" === n.copy_source || "fixed" === n.copy_source ? n.copy_prompt_version : void 0
                                    }
                                }(t)
                            }
                        })
                    } catch {}
                })();
                if (t.beacon_id === r.a && null != b) {
                    let e = u.get(b);
                    null == e && (e = new Set, u.set(b, e)), e.add(h), h.then(() => {
                        e.delete(h), 0 === e.size && u.delete(b)
                    })
                }
                await h
            }
        })
    }),
    IDma: (function(e, t, n) {
        var a = n("Cslg");
        n.d(t, {}, {
            a: function(e, t, n) {
                let o = e.get(a.n);
                return "chatgpt" === o.authMethod && !o.authLoading && !o.accountLoading && o.accountId === t && o.authenticatedAccountId === t && o.userId === n
            }
        })
    }),
    j1n5: (function(e, t, n) {
        n.d(t, {
            a: () => Y,
            b: () => J,
            c: () => X,
            d: () => Z,
            e: () => et,
            f: () => en
        });
        var a = n("StMt"),
            o = n("twmu"),
            i = n("Cslg"),
            r = n("xcp1"),
            s = n("iLYI"),
            l = n("p4N2"),
            c = n("f19s"),
            u = n("kphc"),
            _ = n("dFbl"),
            d = n("jUaO");
        n("AleY");
        var p = n("GaA7"),
            m = n("aepO"),
            f = n("CmBE"),
            g = n("n5GS"),
            b = n("Kwur"),
            h = n("SGsN"),
            v = n("svjy"),
            w = n("GDNt"),
            y = n("IDma"),
            I = n("BHyM");
        let k = new WeakMap;
        var x = n("d58w"),
            C = n("Nu9C"),
            A = n("E8Sp"),
            L = n("g2p6"),
            E = n("X6Vn"),
            S = n("liTb"),
            P = n("S3zc"),
            T = n("riYK"),
            M = n("dQRk"),
            O = n("nlNF"),
            N = n("lM2P");
        let H = new Set(["enterprise_dot_provisioned_home_takeover", "enterprise_dot_provisioned_work_takeover", "dot_retention_home_takeover", "dot_retention_work_takeover"]);

        function B(e, t) {
            let a = e.action_v2;
            switch (a.action_enum) {
                case "authenticate_login":
                case "authenticate_signup":
                    if ("link" === t.source) return {
                        status: "unsupported"
                    };
                    return {
                        status: "supported", handler: async () => {
                            let {
                                runBeaconAuthentication: o
                            } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(840485)]).then(n.bind(n, "wxD9")), i = t.beacon.custom_fields?.benefit_id;
                            return await o(t.scope, {
                                screenHint: "authenticate_login" === a.action_enum ? "login" : "signup",
                                mode: "modal" === a.auth_navigation_mode ? "modal" : "redirect",
                                callbackPath: t.currentPath ?? "/",
                                cta: e.id,
                                beaconId: t.beacon.beacon_id,
                                beaconBenefitId: "no_auth_login_upsell_banner" === t.beacon.beacon_id && "string" == typeof i && N.a.has(i) ? i : void 0,
                                navigate: t.navigate
                            }), !0
                        }
                    };
                case "open_enterprise_value_survey_modal": {
                    let e = t.scope.get(i.f),
                        o = t.scope.get(i.k),
                        r = t.scope.get(i.j);
                    if (null == e || null == o || null == r || !(0, y.a)(t.scope, e, o)) return {
                        status: "unavailable"
                    };
                    return {
                        status: "supported",
                        handler: async () => {
                            let s, {
                                    loadEnterpriseSurveyDialog: l
                                } = await n.e(219902).then(n.bind(n, "cyRY")),
                                c = await l();
                            if (!(0, y.a)(t.scope, e, o) || t.scope.get(i.j) !== r) return !1;
                            let u = () => {
                                s?.(), s = void 0
                            };
                            return (0, E.f)(t.scope, c, {
                                accountId: e,
                                userId: r,
                                surveyId: a.survey_id,
                                surveyName: a.survey_name,
                                surveyType: a.survey_type,
                                onClose: u
                            }), s = t.scope.watch(t => {
                                (0, E.d)(t, c) ? (0, y.a)(t, e, o) && t.get(i.j) === r || ((0, E.b)(t, c), u()): u()
                            }), !0
                        }
                    }
                }
                case "open_dot_with_draft": {
                    if ("link" === t.source || !H.has(t.beacon.beacon_id) || "beacon_homepage_takeover_info" !== t.beacon.ui_info.type || "primary" !== e.type) return {
                        status: "unsupported"
                    };
                    let n = t.eventAccountId,
                        o = t.scope.get(i.n);
                    if (o.authLoading || o.accountLoading) return {
                        status: "pending"
                    };
                    let r = o.userId;
                    if (null == n || null == r || o.authenticatedUserId !== r || !(0, y.a)(t.scope, n, r)) return {
                        status: "unavailable"
                    };
                    return {
                        status: "supported",
                        handler: async () => {
                            if (t.isCurrentPresentation?.() === !1 || t.scope.get(i.n).authenticatedUserId !== r || !(0, y.a)(t.scope, n, r)) return !1;
                            let e = (0, S.f)(a.dot_id);
                            return (0, A.d)(t.scope, e, {
                                state: t.eventMetadata?.suppressLifecycle === !0 ? void 0 : {
                                    prefillPrompt: a.prompt,
                                    prefillPromptOnlyIfEmpty: !0,
                                    focusComposerNonce: Date.now()
                                }
                            })
                        }
                    }
                }
                case "open_pepper_onboarding_modal": {
                    let e = t.scope.get(i.m),
                        n = t.scope.get(L.n);
                    if ("loading" === e.status) return {
                        status: "pending"
                    };
                    if ("allowed" !== e.status || !("accountId" in e) || "personal" !== e.accountStructure || e.accountId !== n || null == n) return {
                        status: "unavailable"
                    };
                    return {
                        status: "supported",
                        handler: async () => {
                            let e = await (0, C.b)();
                            return t.scope.get(L.n) === n && ((0, E.f)(t.scope, e, {
                                accountId: n
                            }), !0)
                        }
                    }
                }
                case "age_verification": {
                    let e = t.scope.get(i.m),
                        a = t.scope.get(L.n);
                    if ("loading" === e.status) return {
                        status: "pending"
                    };
                    if ("allowed" !== e.status || !("accountId" in e) || "personal" !== e.accountStructure || e.accountId !== a || null == a) return {
                        status: "unavailable"
                    };
                    return {
                        status: "supported",
                        handler: async () => {
                            if (t.scope.get(L.n) !== a) return !1;
                            let {
                                startAgeVerification: e
                            } = await n.e(849638).then(n.bind(n, "rNxM")), o = t.scope.get(i.m);
                            return t.scope.get(L.n) === a && "allowed" === o.status && "accountId" in o && "personal" === o.accountStructure && o.accountId === a && new Promise(n => {
                                let o, i, r = !1,
                                    s = () => {
                                        r || (r = !0, o?.())
                                    },
                                    l = e => {
                                        i?.(), i = void 0, n(e)
                                    };
                                o = e({
                                    accountId: a,
                                    onLoad: () => {
                                        t.scope.get(L.n) !== a ? (s(), l(!1)) : n(!0)
                                    },
                                    onComplete: () => l(!0),
                                    onCancel: () => l(!1),
                                    onError: () => l(!1)
                                }), i = t.scope.watch(e => {
                                    let {
                                        get: t
                                    } = e;
                                    return t(L.n) !== a && (s(), l(!1)), s
                                })
                            })
                        }
                    }
                }
                default:
                    return "link" === t.source ? function(e, t) {
                        let a = e.action_v2;
                        if ("share_conversation" !== a.action_enum && "open_connector_oauth_modal" !== a.action_enum && "open_pca_connector_auth_modal" !== a.action_enum) return {
                            status: "unsupported"
                        };
                        let {
                            scope: o,
                            conversation: r
                        } = t, s = o.get(i.f), l = o.get(i.k), c = o.get(O.c), u = () => null != s && (0, y.a)(o, s, l) && o.get(O.c) === c && (t.isCurrentPresentation?.() ?? !0);
                        if (!t.allowExternalActions || !u()) return {
                            status: "unavailable"
                        };
                        if ("share_conversation" === a.action_enum) {
                            if (null == r || !r.allowSharing || r.isTemporaryChat || (0, M.Db)(o.get(M.cb, r.conversationId))) return {
                                status: "unavailable"
                            };
                            let n = o.get(T.a, r.conversationId);
                            if (null == n) return {
                                status: "pending"
                            };
                            let i = o.get(M.j, r.conversationId);
                            if (!n || null == i || a.conversation_id !== i || 0 === a.current_node_id.trim().length) return {
                                status: "unavailable"
                            };
                            let s = (0, T.b)({
                                scope: o,
                                canShare: !0,
                                conversationId: i,
                                source: "link" === t.source ? "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION" : "CHATGPT_SHARE_FLOW_SOURCE_BEACON"
                            });
                            return null == s ? {
                                status: "unavailable"
                            } : {
                                status: "supported",
                                handler: async () => !!u() && s(e)
                            }
                        }
                        if (!("connector_id" in a) || "string" != typeof a.connector_id || 0 === a.connector_id.trim().length) return {
                            status: "unavailable"
                        };
                        let _ = a.connector_id;
                        if ("open_pca_connector_auth_modal" === a.action_enum) {
                            if ("link" !== t.source && null == r) return {
                                status: "unavailable"
                            };
                            if ("link" === t.source && !1 !== a.trigger_turn_after_link) return {
                                status: "unsupported"
                            };
                            let e = o.get(P.b, [_]);
                            if (e.isLoading) return {
                                status: "pending"
                            };
                            if (e.isError || e.data?.has(_) !== !0) return {
                                status: "unavailable"
                            }
                        }
                        return {
                            status: "supported",
                            handler: async () => {
                                let e;
                                if (!u()) return !1;
                                let [{
                                    CodexAppHomeBeaconConnectModal: i
                                }, {
                                    createChatGptPcaConnectorBeaconResumeTarget: d
                                }] = await Promise.all([Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(226913), n.e(299068)]).then(n.bind(n, "ktQc")), Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(226913), n.e(200307)]).then(n.bind(n, "p4uj"))]);
                                if (!u() || "open_pca_connector_auth_modal" === a.action_enum && o.get(P.b, [_]).data?.has(_) !== !0) return !1;
                                let p = "open_pca_connector_auth_modal" === a.action_enum && "link" !== t.source && null != r ? d(o, {
                                    connectorId: _,
                                    conversationId: r.conversationId,
                                    includeConnectorSystemHint: !1 !== a.include_connector_system_hint_after_link,
                                    triggerTurnAfterLink: !1 !== a.trigger_turn_after_link
                                }) : void 0;
                                return ("open_pca_connector_auth_modal" !== a.action_enum || "link" === t.source || null != p) && ((0, E.f)(o, i, {
                                    connectorId: _,
                                    pcaResumeTarget: p ?? void 0,
                                    oauthReferrer: "link" === t.source ? "composer" : "home_beacon",
                                    onOpenChange: e => {
                                        e || (0, E.b)(o, i)
                                    }
                                }, {
                                    onDispose: () => e?.()
                                }), e = o.watch(n => {
                                    (0, E.d)(n, i) ? null != s && (0, y.a)(n, s, l) && n.get(O.c) === c && t.isCurrentPresentation?.() !== !1 || ((0, E.b)(n, i), e?.()): e?.()
                                }), (0, E.d)(o, i) || e(), !0)
                            }
                        }
                    }(e, t) : {
                        status: "unsupported"
                    }
            }
        }
        var R = n("rEML"),
            U = n("aTcy"),
            z = n("G4Vg"),
            j = n("DVML"),
            F = n("LjYy"),
            D = n("ESoo"),
            q = n("nInK"),
            V = n("f5h2"),
            Q = n("AVl4"),
            W = n("lg1r"),
            G = n("aoML"),
            K = n("RJnh"),
            $ = n("aqNX");
        let Y = Symbol("beacon-action-support-pending"),
            J = Symbol("beacon-action-unavailable");

        function X(e, t) {
            let n = ee(e, t);
            return "supported" === n.status ? n.handler : void 0
        }

        function Z(e, t) {
            return "get_prolite" !== e.action_v2.action_enum && ("get_pro" !== e.action_v2.action_enum || null == e.action_v2.pro_offer) || "upgradeAccountId" in t || null == t.featureAccessInputs ? ee(e, t).status : ee(e, {
                ...t,
                upgradeAccountId: (0, G.b)(t.featureAccessInputs)
            }).status
        }

        function ee(e, t) {
            let n = e.action_v2,
                f = n.action_enum;
            if (null == f || "dropdown" === f || "open_plan_pricing" === f && ("link" === t.source || t.analyticsContext?.placement !== "in_conversation") || ("send_prompt" === f || "start_spark" === f) && "primary" !== e.type || "open_dot_texting_setup" === f && ("link" === t.source || t.eventMetadata?.conversationId == null)) return {
                status: "unsupported"
            };
            if (("enable_web_push" === f || "enable_web_push_and_responses_push" === f) && !(0, c.a)()) return {
                status: "unavailable"
            };
            if ("create_presence_session" === n.action_enum) return "link" === t.source ? {
                status: "unsupported"
            } : (0, Q.b)(e, t);
            if ("enable_codex_fast_mode" === f && ("link" === t.source || 1) || ("open_connector_oauth_modal" === f || "open_pca_connector_auth_modal" === f) && 0 === n.connector_id.trim().length) return {
                status: "unsupported"
            };
            let C = "get_pro" === f ? n : void 0,
                A = "get_prolite" === f,
                L = A ? n.checkout_mode ?? "pricing" : C?.pro_offer?.checkout_mode,
                E = null == L ? null : function(e, t) {
                    if ("link" === e.source || null == e.appBaseUrl || "beacon_banner_info" !== e.beacon.ui_info.type) return null;
                    let n = e.analyticsContext?.placement;
                    return "homepage" === n || "work_tab_home" === n ? (0, z.f)(e.currentPath, "home") : t && "in_conversation" === n && "work_five_hour_usage_warning" === e.beacon.beacon_id ? (0, z.f)(e.currentPath, "conversation") : null
                }(t, A),
                S = "get_go" === f || "get_plus" === f || "get_pro" === f || A || "open_plan_pricing" === f || "get_team" === f,
                P = "link" === t.source ? null : (0, _.a)(t.beacon, e);
            if (S) {
                if ("link" === t.source && "checkout_mode" in n && "direct" === n.checkout_mode || !(null == L ? (0, G.d)(e, t, P ?? void 0) : null != E)) return {
                    status: "unsupported"
                };
                if ("upgradeAccountId" in t && null == t.upgradeAccountId || !t.allowExternalActions || !(0, G.f)(t.upsellHoldoutLayer, "link" === t.source ? "conversation_followup_shelf_link" : t.beacon)) return {
                    status: "unavailable"
                }
            }
            if ("invite_domain_members" === f && ("link" === t.source || !(0, I.b)(t.beacon.beacon_id, t.headerConfirmation) || "beacon_modal_info" !== t.beacon.ui_info.type)) return {
                status: "unsupported"
            };
            let T = t.getActionOverride?.(e);
            if (T === Y) return {
                status: "pending"
            };
            if (T === J) return {
                status: "unavailable"
            };
            if (null === T) return {
                status: "unsupported"
            };
            if (null != L && null != E) return function(e, t, n, a) {
                let {
                    userId: o,
                    accountId: r
                } = n.scope.get(i.n);
                return null == o || null == r || r !== n.upgradeAccountId || null != n.eventAccountId && n.eventAccountId !== r ? {
                    status: "unavailable"
                } : {
                    status: "supported",
                    handler: async () => {
                        let s = "direct" === e && (n.analyticsContext?.placement !== "in_conversation" || function(e, t) {
                            let {
                                accountId: n,
                                userId: a
                            } = t;
                            if ("link" === e.source) return !1;
                            let o = (0, d.b)(e.scope.get(i.n), n);
                            return o?.userId === a && e.requestIdentity?.accountId === n && e.requestIdentity.userId === a
                        }(n, {
                            accountId: r,
                            userId: o
                        }));
                        return function(e, t, n, a, o) {
                            let i = new URL(a, "https://chatgpt.com"),
                                r = new URL((0, U.v)(F.a.PROLITE));
                            for (let [e, t] of(i.searchParams.delete("pro_variant"), r.searchParams)) i.searchParams.set(e, t);
                            let s = {
                                accountId: t.accountId,
                                checkoutMode: "pricing",
                                promoCampaignId: null,
                                returnPath: a,
                                sourceThreadId: null,
                                targetPlan: F.a.PRO,
                                upsellContextId: o
                            };
                            e.navigate((0, z.c)((0, R.A)((0, j.c)(i)), s), {
                                beaconUpgrade: s,
                                ...n && {
                                    beaconProPlanChange: t
                                },
                                returnPath: a
                            })
                        }(n, {
                            accountId: r,
                            userId: o
                        }, s, a, t ?? null), !0
                    }
                }
            }(L, A ? n.upsell_context_id : C?.upsell_context_id, t, E);
            let M = T ?? t.actionOverrides?.[f];
            if (null != M) return {
                status: "supported",
                handler: async () => "link" === t.source ? M(e, void 0, "link") : M(e, {
                    beacon: t.beacon,
                    eventMetadata: t.eventMetadata,
                    isCurrentPresentation: t.isCurrentPresentation,
                    onPresentationInvalidated: t.onPresentationInvalidated,
                    useExternalBrowser: t.useExternalBrowser
                })
            };
            switch (n.action_enum) {
                case void 0:
                case "dropdown":
                case "get_prolite":
                case "send_workspace_invite":
                default:
                    return {
                        status: "unsupported"
                    };
                case "copy_to_clipboard":
                    return {
                        status: "supported", handler: async e => {
                            let a = "link" === t.source ? n.copy_text : n.copy_text.trim().replace(/^\$\s*/, "");
                            return (0, m.d)(a, e)
                        }
                    };
                case "dismiss":
                    if (n.composer_text && null == t.onComposerText) return {
                        status: "unsupported"
                    };
                    return {
                        status: "supported", handler: async () => t.beacon?.beacon_id === "violence_interstitial_modal_beacon" && "violence_interstitial_close" === e.id ? (t.navigate("/", void 0, !0), !0) : (n.composer_text && t.onComposerText?.(n.composer_text), t.beacon?.custom_fields?.dismiss_action_behavior !== "dismiss" || (t.onDismiss(), !1))
                    };
                case "get_go":
                case "get_plus":
                case "get_pro":
                case "open_plan_pricing":
                case "get_team":
                    if ("link" === t.source) return {
                        status: "supported",
                        handler: async () => (0, G.e)(e, t)
                    };
                    return {
                        status: "supported", handler: async () => {
                            if (null == t.upgradeAccountId || null == t.appBaseUrl || null == t.currentPath) return !1;
                            let a = "get_pro" === n.action_enum ? (0, d.c)(n.rejoin_pro_cta_variant) : void 0,
                                r = null == a ? null : (0, d.b)(t.scope.get(i.n), t.upgradeAccountId),
                                s = null == P ? null : t.scope.get(i.n);
                            if (null != P && (s?.authMethod !== "chatgpt" || s.authLoading || s.accountLoading || !0 !== s.hasChatGptToken || s.accountId !== t.upgradeAccountId || s.authenticatedAccountId !== t.upgradeAccountId || t.requestIdentity?.accountId !== t.upgradeAccountId || t.requestIdentity?.userId == null || t.requestIdentity.userId !== s.authenticatedUserId || null == s.userId)) return !1;
                            let l = null != P && s?.plan === "go" && null != s.authenticatedUserId && !(0, _.b)() && (0, _.c)(t.scope.query.getData(o.b, t.upgradeAccountId)?.accounts[t.upgradeAccountId]),
                                c = (0, G.c)(e, {
                                    accountId: t.upgradeAccountId,
                                    appBaseUrl: t.appBaseUrl,
                                    currentPath: t.currentPath,
                                    eventMetadata: t.eventMetadata,
                                    rejoinPro: null != a && null != r && r.accountId === t.requestIdentity?.accountId && r.userId === t.requestIdentity.userId ? (0, d.a)({
                                        ...r,
                                        variant: a
                                    }) : void 0,
                                    goRejoinPlusTreatment: P ?? void 0
                                });
                            if (null == c) return !1;
                            if (c.deferCompletion) {
                                let n = (0, x.c)({
                                    accountId: t.upgradeAccountId,
                                    action: e,
                                    analyticsContext: t.analyticsContext,
                                    beacon: t.beacon,
                                    eventMetadata: t.eventMetadata
                                });
                                return null != n && (t.navigate(c.href, {
                                    beaconUpgrade: c.intent,
                                    [x.a]: n
                                }), !1)
                            }
                            return t.navigate(c.href, {
                                beaconUpgrade: c.intent,
                                ...null == c.rejoinPro ? {} : {
                                    rejoinPro: c.rejoinPro
                                },
                                ...l && s?.userId != null ? {
                                    goRejoinPlus: {
                                        accountId: t.upgradeAccountId,
                                        userId: s.userId,
                                        requestUserId: s.authenticatedUserId,
                                        treatment: P
                                    }
                                } : {}
                            }), !0
                        }
                    };
                case "open_local_url":
                case "open_url": {
                    if ("link" !== t.source && (0, D.a)(e, t.beacon)) return t.allowExternalActions ? {
                        status: "supported",
                        handler: async () => (0, D.b)(e, t)
                    } : {
                        status: "unavailable"
                    };
                    if ("open_local_url" === n.action_enum && !0 === n.trigger_turn) return {
                        status: "unsupported"
                    };
                    let o = (0, g.b)(e, t);
                    if (null != o) return o;
                    let i = (0, K.b)(e);
                    if (null == i || !t.allowExternalActions && !(0, K.f)(i)) return null == i ? {
                        status: "unsupported"
                    } : {
                        status: "unavailable"
                    };
                    if ((0, V.a)(e) && (!t.allowExternalActions || null == p.a.systemPermissions)) return {
                        status: "unavailable"
                    };
                    if ((0, K.i)(e)) {
                        let e = t.scope.get(a.a, {
                            name: "chatgpt.workspace-discovery"
                        });
                        if (e.isLoading) return {
                            status: "pending"
                        };
                        if (!e.isCapable) return {
                            status: "unavailable"
                        }
                    }
                    if ("open_local_url" === n.action_enum && (null != (0, r.a)(i) || null != (0, W.a)(i)) && !t.allowExternalActions) return {
                        status: "unavailable"
                    };
                    return {
                        status: "supported",
                        handler: n => (0, q.b)(e, t, i, n)
                    }
                }
                case "open_work_tab":
                    if (!(0, u.h)(t.scope)) return {
                        status: "unavailable"
                    };
                    return {
                        status: "supported", handler: async () => {
                            let e = await (0, $.a)(t.scope, t.isCurrentPresentation);
                            if (null == e) return !1;
                            let {
                                model: n
                            } = e;
                            if (null != n) {
                                let e = (0, s.h)(t.scope, []);
                                (0, l.f)(t.scope, e, n), (0, u.n)(t.scope, "work"), t.navigate("/", {
                                    focusComposerNonce: Date.now(),
                                    initialChatGptConversationId: e
                                })
                            } else(0, u.n)(t.scope, "work"), t.navigate("/");
                            return !0
                        }
                    };
                case "send_prompt":
                    if (null == t.onSendPrompt) return {
                        status: "unsupported"
                    };
                    return {
                        status: "supported", handler: async () => await t.onSendPrompt?.(n.prompt) !== !1
                    };
                case "enable_web_push":
                    return {
                        status: "supported", handler: c.c
                    };
                case "enable_web_push_and_responses_push":
                    return t.allowExternalActions ? {
                        status: "supported",
                        handler: function(e) {
                            let {
                                scope: t,
                                accountId: n,
                                accountUserId: a,
                                onPermissionDenied: o
                            } = e;
                            return async () => {
                                let e = t.get(i.n),
                                    r = e.authenticatedUserId,
                                    s = () => (0, y.a)(t, n, e.userId) && t.get(i.n).accountUserId === a;
                                if (null == r || !s() || t.get(i.b)) return !1;
                                try {
                                    if (!await (0, c.c)()) {
                                        if (!(0, c.a)()) return o(), !1;
                                        throw Error("Notification registration failed")
                                    }
                                    if (await b.Request.safePatch("/notifications/settings", {
                                            expectedIdentity: {
                                                accountId: n,
                                                userId: r
                                            },
                                            requestBody: {
                                                updates: {
                                                    responses: {
                                                        push: !0
                                                    }
                                                }
                                            },
                                            signal: AbortSignal.timeout(1e4)
                                        }), !s()) return !1;
                                    let e = ["chatgpt-notification-settings", r, n];
                                    if (await t.queryClient.cancelQueries({
                                            queryKey: e,
                                            exact: !0
                                        }), !s()) return !1;
                                    return t.queryClient.invalidateQueries({
                                        queryKey: e,
                                        exact: !0
                                    }), !0
                                } catch {
                                    return s() && (0, V.b)(t), !1
                                }
                            }
                        }({
                            scope: t.scope,
                            accountId: n.account_id,
                            accountUserId: n.account_user_id,
                            onPermissionDenied: () => t.onActionComplete?.(e)
                        })
                    } : {
                        status: "unavailable"
                    };
                case "start_voice":
                    if (null == t.onStartVoice) return {
                        status: "unsupported"
                    };
                    return {
                        status: "supported", handler: async () => await t.onStartVoice?.() !== !1
                    };
                case "invite_domain_members":
                    return "link" === t.source ? {
                        status: "unsupported"
                    } : function(e, t) {
                        let n = e.action_v2;
                        if ("invite_domain_members" !== n.action_enum || !(0, I.b)(t.beacon.beacon_id, t.headerConfirmation) || "beacon_modal_info" !== t.beacon.ui_info.type) return {
                            status: "unsupported"
                        };
                        let {
                            scope: a,
                            beacon: o
                        } = t, r = t.featureAccessInputs, {
                            account_id: s
                        } = n;
                        if (null == r || r.authLoading || r.accountLoading) return {
                            status: "pending"
                        };
                        let l = r.authenticatedUserId,
                            c = () => (0, y.a)(a, s, r.userId) && a.get(i.n).authenticatedUserId === l,
                            u = () => c() && (t.isCurrentPresentation?.() ?? !0);
                        return null == l || "chatgpt" !== r.authMethod || r.accountId !== s || r.authenticatedAccountId !== s || null != t.eventAccountId && t.eventAccountId !== s ? {
                            status: "unavailable"
                        } : {
                            status: "supported",
                            handler: async () => {
                                if (!u()) return !1;
                                let n = k.get(a);
                                null == n && (n = new WeakMap, k.set(a, n));
                                let i = n.get(o);
                                null == i && (i = new Set, n.set(o, i));
                                let r = JSON.stringify([s, l]);
                                if (i.has(r)) return !1;
                                i.add(r);
                                let _ = a.get(v.a);
                                try {
                                    let n = b.Request.safePost("/referrals/workspace/domain-members/invite", {
                                        requestBody: t.headerConfirmation?.request,
                                        expectedIdentity: {
                                            accountId: s,
                                            userId: l
                                        },
                                        retry: "never"
                                    });
                                    t.headerConfirmation?.onRequestStarted?.(n);
                                    let o = await n,
                                        i = c();
                                    if (null != t.headerConfirmation && !i) return !1;
                                    let r = i && (t.isCurrentPresentation?.() ?? !0);
                                    if (r && (o.failed_invite_count > 0 ? a.get(h.f).info(_.formatMessage({
                                            id: "chatgpt.beacons.business_domain_members.toast.incomplete_unconfirmed",
                                            defaultMessage: "Some invitations weren't confirmed."
                                        })) : a.get(h.f).success(_.formatMessage({
                                            id: "chatgpt.beacons.business_domain_members.toast.success",
                                            defaultMessage: "{count, plural, =0 {Your coworkers are already invited.} one {# coworker invited.} other {# coworkers invited.}}"
                                        }, {
                                            count: o.accepted_invite_count
                                        }))), null != t.headerConfirmation && 0 === o.accepted_invite_count) return r && t.onActionComplete?.(e), !1;
                                    return {
                                        didComplete: !0,
                                        eventAccountId: s,
                                        shouldResolve: r
                                    }
                                } catch (n) {
                                    if (null != t.headerConfirmation && n instanceof w.a && 412 === n.responseStatus) return u() && (a.get(h.f).info(_.formatMessage({
                                        id: "chatgpt.businessTeamInviteHeader.previewChanged",
                                        defaultMessage: "The list of eligible teammates changed. Review the updated invitation before sending."
                                    })), t.headerConfirmation.onPreviewChanged()), !1;
                                    if (n instanceof w.a && "network" !== n.errorKind && null != n.responseStatus && [400, 401, 403, 422].includes(n.responseStatus)) return i.delete(r), u() && a.get(h.f).danger(_.formatMessage({
                                        id: "chatgpt.beacons.business_domain_members.toast.rejected",
                                        defaultMessage: "Invitations weren't sent. Please try again."
                                    }), {
                                        errorAnalytics: {
                                            toastId: "chatgpt.beacons.business_domain_members.toast.rejected"
                                        }
                                    }), !1;
                                    return u() && (a.get(h.f).danger(_.formatMessage({
                                        id: "chatgpt.beacons.business_domain_members.toast.error_unconfirmed",
                                        defaultMessage: "We couldn't confirm all invitations."
                                    }), {
                                        errorAnalytics: {
                                            toastId: "chatgpt.beacons.business_domain_members.toast.error"
                                        }
                                    }), t.onActionComplete?.(e)), !1
                                }
                            }
                        }
                    }(e, t);
                case "open_dot_with_draft":
                case "open_pepper_onboarding_modal":
                case "age_verification":
                case "authenticate_login":
                case "authenticate_signup":
                case "open_enterprise_value_survey_modal":
                    return B(e, t);
                case "activate_feature_trial":
                case "citron_disable":
                case "citron_enable":
                case "codex_download_email":
                case "connect_finances_and_send_work_prompt":
                case "connect_ledger_accounts":
                case "create_prompt":
                case "enable_workspace_auto_join":
                case "enable_codex_fast_mode":
                case "file_upload":
                case "free_thinking_sample_regenerate":
                case "install_mobile_widget":
                case "install_plugin":
                case "invite_team_members":
                case "open_claim_business_workspace_modal":
                case "open_connector_oauth_modal":
                case "open_connectors_onboarding_modal":
                case "open_dot_texting_setup":
                case "open_external_agent_import":
                case "open_pca_connector_auth_modal":
                case "open_work_tab_and_send_prompt":
                case "photo_upload":
                case "regenerate":
                case "request_account_team_contact":
                case "request_premium_seat":
                case "request_workspace_upgrade_seat":
                case "request_workspace_credits":
                case "set_atlas_as_default_browser":
                case "share_conversation":
                case "share_group_chat":
                case "share_location":
                case "share_message_slice":
                case "start_jobs_mock_interview_voice":
                case "start_spark":
                case "submit_personalized_information_questionnaire_feedback":
                case "system_hint":
                case "update_model_picker":
                case "update_personality_trait":
                case "update_user_personalization_setting":
                    return "link" === t.source ? B(e, t) : {
                        status: "unsupported"
                    }
            }
        }

        function et(e) {
            return null != (0, f.d)(e)
        }

        function en(e) {
            return ("primary" === e.type || "secondary" === e.type) && "submit_personalized_information_questionnaire_feedback" !== e.action_v2.action_enum
        }
    }),
    CmBE: (function(e, t, n) {
        function a(e) {
            let t = e.text ?? ("copy_to_clipboard" === e.action_v2.action_enum ? e.action_v2.text : e.id);
            return null == t || 0 === t.trim().length ? null : t
        }
        n.d(t, {}, {
            a: function(e) {
                return "accent" === e.appearance ? "accent" : null == e.type || "primary" === e.type ? "primary" : "secondary"
            },
            b: function(e) {
                return "authUpsell" === e ? "authUpsell" : "takeover" === e || "takeoverHero" === e ? "takeoverHero" === e ? "takeoverHeroAction" : "large" : "workNux" === e || "tasksNux" === e ? "workNux" : "expressiveModal" === e || "cloudWelcome" === e ? "expressiveBeaconAction" : "equalWeightModal" === e ? "onboardingAction" : "modal" === e ? "beaconAction" : "banner" === e ? "dialog" : "inline" === e ? "composerSm" : "beaconCarousel"
            },
            c: function(e) {
                return a(e)
            },
            d: a
        })
    }),
    SPzj: (function(e, t, n) {
        var a = n("mBJV"),
            o = n("b2Wp"),
            i = n("Q840"),
            r = n("U861");
        n("mmXj");
        var s = n("yGJW"),
            l = n("OWtl"),
            c = n("ycSk"),
            u = n("ytyy");
        let _ = {
                click: "CHATGPT_BEACON_LIFECYCLE_ACTION_CLICK",
                closed_without_dismiss: "CHATGPT_BEACON_LIFECYCLE_ACTION_CLOSED_WITHOUT_DISMISS",
                composer_tip_presented: "CHATGPT_BEACON_LIFECYCLE_ACTION_COMPOSER_TIP_PRESENTED",
                dismiss: "CHATGPT_BEACON_LIFECYCLE_ACTION_DISMISS",
                ignored: "CHATGPT_BEACON_LIFECYCLE_ACTION_IGNORED",
                impression: "CHATGPT_BEACON_LIFECYCLE_ACTION_IMPRESSION"
            },
            d = {
                codex_home: "CHATGPT_BEACON_PLACEMENT_CODEX_HOME",
                homepage: "CHATGPT_BEACON_PLACEMENT_HOMEPAGE",
                in_conversation: "CHATGPT_BEACON_PLACEMENT_IN_CONVERSATION",
                work_tab_home: "CHATGPT_BEACON_PLACEMENT_WORK_TAB_HOME"
            },
            p = {
                chat: "CHATGPT_BEACON_PRODUCT_EXPERIENCE_CHAT",
                work: "CHATGPT_BEACON_PRODUCT_EXPERIENCE_WORK"
            },
            m = {
                container: "CHATGPT_BEACON_UI_TREATMENT_CONTAINER",
                banner: "CHATGPT_BEACON_UI_TREATMENT_BANNER",
                conversation_inline: "CHATGPT_BEACON_UI_TREATMENT_CONVERSATION_INLINE",
                homepage_takeover: "CHATGPT_BEACON_UI_TREATMENT_HOMEPAGE_TAKEOVER",
                modal: "CHATGPT_BEACON_UI_TREATMENT_MODAL",
                tooltip: "CHATGPT_BEACON_UI_TREATMENT_TOOLTIP"
            },
            f = (0, i.u)(l.a, () => new Set),
            g = (0, i.u)(l.a, () => new Set);

        function b(e) {
            return "beacon_tooltip_info" === e.ui_info.type || "beacon_container_info" === e.ui_info.type ? "tooltip" : "beacon_banner_info" === e.ui_info.type ? "banner" : "beacon_homepage_takeover_info" === e.ui_info.type ? "homepage_takeover" : "beacon_conversation_inline_info" === e.ui_info.type ? "conversation_inline" : "modal"
        }

        function h(e, t) {
            let {
                beaconId: n,
                diagnostic: a,
                placement: i,
                suppressLifecycle: l,
                treatment: c
            } = t;
            if (!0 === l || (0, r.e)(n)) return;
            let u = v(n),
                _ = "malformed_action_payload" === a.reason ? "unknown" : v(a.actionId),
                p = "malformed_action_payload" === a.reason ? "unknown" : v(a.actionEnum),
                f = [i, c, u, _, p, a.reason].join(":");
            e.get(g).has(f) || (e.set(g, e => {
                let t = new Set(e);
                for (t.add(f); t.size > 256;) {
                    let e = t.values().next().value;
                    if (null == e) break;
                    t.delete(e)
                }
                return t
            }), (0, s.a)(e, o.CodexBeaconsActionUnsupported, {
                actionEnum: p,
                actionId: _,
                beaconId: u,
                beaconType: m[c],
                placement: d[i],
                reason: a.reason,
                actionIndex: a.actionIndex?.toString()
            }))
        }

        function v(e) {
            let t = e.replace(/[^a-zA-Z0-9_.:-]/g, "_").slice(0, 128);
            return 0 === t.length ? "unknown" : t
        }

        function w(e, t, n) {
            e.get(s.c).logProductEvent(o.CodexBeaconsQuestionnaireAction, {
                action: {
                    answer_submitted: o.CodexBeaconsQuestionnaireActionType.CODEX_BEACONS_QUESTIONNAIRE_ACTION_TYPE_ANSWER_SUBMITTED,
                    dismissed: o.CodexBeaconsQuestionnaireActionType.CODEX_BEACONS_QUESTIONNAIRE_ACTION_TYPE_DISMISSED,
                    shown: o.CodexBeaconsQuestionnaireActionType.CODEX_BEACONS_QUESTIONNAIRE_ACTION_TYPE_SHOWN
                } [t],
                conversationContextType: n.conversation_context_type,
                questionId: n.question_id,
                questionnaireId: n.questionnaire_id,
                surface: n.surface
            })
        }
        n.d(t, {}, {
            a: b,
            b: function(e, t) {
                let {
                    action: n,
                    actionId: o,
                    actionType: i,
                    beacon: l,
                    destinationAction: f,
                    copyVariant: g,
                    expectedAccountId: b,
                    expectedUserId: h,
                    placement: v,
                    productExperience: w,
                    suppressLifecycle: y,
                    treatment: I,
                    viewLatencyMs: k,
                    visibilityDurationMs: x
                } = t;
                if (!0 === y || (0, r.e)(l.beacon_id)) return;
                "impression" === n && ["android_mweb_image_turn_app_upsell", "android_mweb_conversation_turn_app_upsell", "android_mweb_paid_conversation_turn_app_upsell", "android_mweb_contextual_app_upsell", "mweb_app_install_turn_count"].includes(l.beacon_id) && (0, c.a)(e);
                let C = {
                    action: _[n],
                    actionId: o,
                    actionType: "click" === n ? i ?? "unknown" : void 0,
                    beaconId: l.beacon_id,
                    beaconName: l.beacon_name ?? "unknown",
                    copyVariant: g ?? (0, u.b)(l)?.copyVariant,
                    benefitId: ("click" === n || "impression" === n && "conversation_inline" === I) && "string" == typeof l.custom_fields?.benefit_id ? l.custom_fields.benefit_id : void 0,
                    destinationAction: f,
                    placement: d[v],
                    productExperience: null == w ? void 0 : p[w],
                    uiTreatment: m[I],
                    viewLatencyMs: null == k ? void 0 : String(k),
                    visibilityDurationMs: null == x ? void 0 : String(x)
                };
                null == b && null == h ? (0, s.a)(e, a.i, C) : (0, s.a)(e, a.i, C, void 0, void 0, {
                    expectedAccountId: b,
                    expectedUserId: h
                }), l.onLifecycle?.(e, {
                    action: n,
                    actionId: o
                })
            },
            c: function(e, t, n) {
                e.get(s.c).logProductEvent(o.CodexBeaconsFooterLinkClicked, {
                    beaconId: t.beacon_id,
                    linkId: n.id
                })
            },
            d: function(e, t, n) {
                if ((0, r.e)(t.beacon_id)) return;
                let a = Array.from(n).sort().join(",");
                if (0 === a.length) return;
                let i = [t.beacon_id, "beacons", a].join(":");
                e.get(f).has(i) || (e.set(f, e => {
                    let t = new Set(e);
                    return t.add(i), t
                }), (0, s.a)(e, o.CodexBeaconsPageContextSuppressed, {
                    beaconId: t.beacon_id,
                    beaconName: t.beacon_name,
                    uiTreatment: m[b(t)],
                    pageContextClaims: a
                }))
            },
            e: function(e, t, n) {
                if ((0, r.e)(n.beacon_id)) return;
                let a = `${t}:${n.beacon_id}:typing`;
                e.get(f).has(a) || (e.set(f, e => {
                    let t = new Set(e);
                    return t.add(a), t
                }), e.get(s.c).logProductEvent(o.CodexBeaconsTypingSuppressed, {
                    beaconId: n.beacon_id,
                    uiTreatment: m[b(n)]
                }))
            },
            f: function(e, t, n) {
                let {
                    direction: a,
                    fromPage: i,
                    fromPageIndex: r,
                    toPage: l,
                    toPageIndex: c
                } = n;
                e.get(s.c).logProductEvent(o.CodexBeaconsCarouselArrowClicked, {
                    beaconId: t.beacon_id,
                    direction: a,
                    cardCount: String(t.ui_info.pages.length),
                    fromCardId: i.id,
                    fromCardIndex: String(r),
                    toCardId: l.id,
                    toCardIndex: String(c)
                })
            },
            g: function(e, t, n) {
                let {
                    navigationMethod: a,
                    page: i,
                    pageIndex: r
                } = n;
                e.get(s.c).logProductEvent(o.CodexBeaconsCarouselCardShown, {
                    beaconId: t.beacon_id,
                    cardCount: String(t.ui_info.pages.length),
                    cardId: i.id,
                    cardIndex: String(r),
                    navigationMethod: a
                })
            },
            h: function(e, t) {
                w(e, "answer_submitted", t)
            },
            i: function(e, t) {
                w(e, "dismissed", t)
            },
            j: function(e, t) {
                w(e, "shown", t)
            },
            k: h,
            l: function(e, t) {
                let {
                    beacon: n,
                    diagnostic: a,
                    placement: o,
                    suppressLifecycle: i,
                    treatment: r
                } = t;
                h(e, {
                    beaconId: n.beacon_id,
                    diagnostic: a,
                    placement: o,
                    suppressLifecycle: i,
                    treatment: r
                })
            }
        })
    }),
    sb2P: (function(e, t, n) {
        var a = n("Q840"),
            o = n("OWtl");
        let i = {
                status: "pending"
            },
            r = (0, a.u)(o.a, () => new Map),
            s = ["chat_work_merge_intro_home_modal", "chat_work_merge_intro_modal"],
            l = (0, a.u)(o.a, () => new Set),
            c = (0, a.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(r).get(e)?.state ?? i
            }, {
                autoDispose: 6e4
            });

        function u(e) {
            let {
                accountId: t,
                locale: n,
                navigationKey: a,
                pathname: o,
                product: i
            } = e;
            return JSON.stringify([t, n, i, o, a])
        }

        function _(e, t) {
            return e + ":session:" + t
        }
        n.d(t, {}, {
            a: class {
                scope;
                constructor(e) {
                    this.scope = e
                }
                touchHomeVisit(e) {
                    let t = this.scope.get(r).get(e.visitKey);
                    null != t ? this.setHomeVisit(e, t.state) : this.setHomeVisit(e, i)
                }
                getHomeVisit(e) {
                    return this.scope.get(r).get(e.visitKey)?.state ?? i
                }
                canQueryHomeBeacon(e) {
                    return "pending" === this.getHomeVisit(e).status
                }
                applyHomeQueryResult(e, t) {
                    var n, a;
                    let o = this.getHomeVisit(e);
                    return n = e, a = t, n.accountId === a.accountId && n.locale === a.locale && n.pathname === a.pathname && n.product === a.product && n.visitKey === a.visitKey && "pending" === o.status && (null == t.beacon || this.isHomeBeaconDismissed(e.accountId, t.beacon.beacon_id) ? this.setHomeVisit(e, {
                        status: "empty"
                    }) : !0 === o.suppressOnSelection ? this.setHomeVisit(e, {
                        status: "suppressed",
                        beaconId: t.beacon.beacon_id
                    }) : this.setHomeVisit(e, {
                        status: "selected",
                        beacon: t.beacon
                    }), !0)
                }
                getSelectedHomeBeacon(e) {
                    let t = this.getHomeVisit(e);
                    return "selected" === t.status ? t.beacon : null
                }
                requestHomeBeaconSuppression(e) {
                    let t = this.getHomeVisit(e);
                    return "pending" === t.status ? !0 !== t.suppressOnSelection && (this.setHomeVisit(e, {
                        status: "pending",
                        suppressOnSelection: !0
                    }), !0) : "selected" === t.status && this.terminateHomeBeacon(e, t.beacon.beacon_id, "suppressed")
                }
                terminateHomeBeacon(e, t, n) {
                    let a = this.getHomeVisit(e);
                    return "selected" === a.status && a.beacon.beacon_id === t && (this.setHomeVisit(e, {
                        status: n,
                        beaconId: t
                    }), !0)
                }
                terminateSelectedHomeBeacons(e, t, n) {
                    this.scope.set(r, a => {
                        let o = new Map(a),
                            i = !1;
                        for (let [r, s] of a) s.identity.accountId === e && "selected" === s.state.status && t.includes(s.state.beacon.beacon_id) && (o.set(r, {
                            ...s,
                            state: {
                                status: n,
                                beaconId: s.state.beacon.beacon_id
                            }
                        }), i = !0);
                        return i ? o : a
                    })
                }
                isHomeBeaconDismissed(e, t) {
                    return this.scope.get(l).has(_(e, t))
                }
                dismissHomeBeacon(e, t) {
                    return !this.isHomeBeaconDismissed(e, t) && (this.acknowledgeHomeBeacon(e, t, "dismissed"), !0)
                }
                consumeHomeBeacon(e, t) {
                    this.acknowledgeHomeBeacon(e, t, "consumed")
                }
                suppressUnsupportedHomeBeacon(e, t) {
                    this.terminateSelectedHomeBeacons(e, [t], "unsupported")
                }
                setHomeVisit(e, t) {
                    this.scope.set(r, n => {
                        let a = new Map(n);
                        for (a.delete(e.visitKey), a.set(e.visitKey, {
                                identity: e,
                                state: t
                            }); a.size > 20;) {
                            let e = a.keys().next().value;
                            if (null == e) break;
                            a.delete(e)
                        }
                        return a
                    })
                }
                acknowledgeHomeBeacon(e, t, n) {
                    let a = s.includes(t) ? s : [t];
                    this.scope.set(l, t => {
                        let n = new Set(t);
                        for (let t of a) n.add(_(e, t));
                        return n.size === t.size ? t : n
                    }), this.terminateSelectedHomeBeacons(e, a, n)
                }
            },
            b: u,
            c: function(e) {
                let {
                    auth: t,
                    locale: n,
                    location: a,
                    product: o
                } = e;
                return "chatgpt" !== o && "work_tab" !== o || "/" !== a.pathname || "chatgpt" !== t.authMethod || null == t.accountId ? null : u({
                    accountId: t.accountId,
                    locale: n,
                    navigationKey: a.key,
                    pathname: a.pathname,
                    product: o
                })
            },
            d: c,
            e: function(e) {
                let {
                    windowType: t,
                    accountId: n,
                    currentAccountId: a,
                    statsigAccountId: o,
                    userId: i
                } = e;
                return "browser" === t ? n ?? null : n ?? a ?? o ?? i ?? null
            }
        })
    }),
    RNtx: (function(e, t, n) {
        var a = n("ABep"),
            o = n("QosV"),
            i = n("on57"),
            r = n("Wf1j"),
            s = n("wD9O"),
            l = n("bf6R"),
            c = n("nzx4"),
            u = n("yC2B");

        function _(e) {
            return e.preventDefault()
        }

        function d(e) {
            return e.preventDefault()
        }

        function p(e) {
            return e.preventDefault()
        }

        function m(e) {
            let t, n, r, s, l, c = (0, o.c)(13),
                {
                    align: u,
                    isRtl: _
                } = e,
                d = "start" === u && "start-4",
                p = "end" === u && "end-4",
                m = "center" === u && "left-1/2 -translate-x-1/2";
            c[0] !== d || c[1] !== p || c[2] !== m ? (t = (0, i.b)("pointer-events-none absolute hidden h-3.5 w-9 origin-top overflow-visible group-data-[side=bottom]:top-0 group-data-[side=bottom]:block group-data-[side=bottom]:-scale-y-100 group-data-[side=top]:top-full group-data-[side=top]:block", d, p, m), c[0] = d, c[1] = p, c[2] = m, c[3] = t) : t = c[3];
            let f = "center" === u ? "M0 0C8.1 0 10.95 3.42222 14.4 8.24444L16.05 10.5778C17.025 11.9778 18.975 11.9778 19.95 10.5778L21.6 8.24444C25.05 3.42222 27.9 0 36 0V-1H0Z" : "M0 0C4 0 6.5 1.2963 8 4.40741C9.5 7.77778 9 10.8889 11 12.7037C12.25 13.7407 13.75 13.7407 15 12.4444C19.25 7.51852 25.5 2.59259 32 0.777778C33.75 0.259259 34.75 0 36 0V-1H0Z",
                g = "start" === u && _ || "end" === u && !_ ? "translate(36 0) scale(-1 1)" : void 0;
            return c[4] !== f || c[5] !== g ? (n = (0, a.jsx)("path", {
                d: f,
                transform: g
            }), c[4] = f, c[5] = g, c[6] = n) : n = c[6], c[7] !== t || c[8] !== n ? (r = (0, a.jsx)("svg", {
                "aria-hidden": "true",
                className: t,
                fill: "var(--color-background-coachmark)",
                viewBox: "0 0 36 14",
                children: n
            }), c[7] = t, c[8] = n, c[9] = r) : r = c[9], c[10] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)("svg", {
                "aria-hidden": "true",
                className: "pointer-events-none absolute top-1/2 hidden h-9 w-3.5 origin-left -translate-y-1/2 overflow-visible group-data-[side=left]:left-full group-data-[side=left]:block group-data-[side=right]:left-0 group-data-[side=right]:block group-data-[side=right]:-scale-x-100",
                fill: "var(--color-background-coachmark)",
                viewBox: "0 0 14 36",
                children: (0, a.jsx)("path", {
                    d: "M0 0C8.1 0 10.95 3.42222 14.4 8.24444L16.05 10.5778C17.025 11.9778 18.975 11.9778 19.95 10.5778L21.6 8.24444C25.05 3.42222 27.9 0 36 0V-1H0Z",
                    transform: "matrix(0 -1 1 0 0 36)"
                })
            }), c[10] = s) : s = c[10], c[11] !== r ? (l = (0, a.jsxs)(a.Fragment, {
                children: [r, s]
            }), c[11] = r, c[12] = l) : l = c[12], l
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, f, g, b, h, v, w, y, I, k, x, C, A, L, E, S = (0, o.c)(54),
                    {
                        id: P,
                        align: T,
                        anchor: M,
                        body: O,
                        direction: N,
                        onDismiss: H,
                        side: B,
                        size: R,
                        title: U,
                        updatePositionStrategy: z
                    } = e,
                    j = void 0 === T ? "center" : T,
                    F = void 0 === R ? "default" : R,
                    D = void 0 === z ? "always" : z,
                    q = (0, r.a)(),
                    V = (0, s.c)();
                S[0] !== N || S[1] !== q.locale ? (t = N ?? (0, u.a)(q.locale), S[0] = N, S[1] = q.locale, S[2] = t) : t = S[2];
                let Q = "rtl" === t,
                    W = Q ? "right" : "left",
                    G = Q ? "left" : "right";
                S[3] !== W || S[4] !== G ? (n = {
                    top: "top",
                    bottom: "bottom",
                    start: W,
                    end: G
                }, S[3] = W, S[4] = G, S[5] = n) : n = S[5];
                let K = n;
                S[6] !== M || S[7] !== H ? (f = () => {
                    H(), M.focus()
                }, S[6] = M, S[7] = H, S[8] = f) : f = S[8];
                let $ = f;
                S[9] !== $ ? (g = e => {
                    e || $()
                }, S[9] = $, S[10] = g) : g = S[10], S[11] !== M ? (b = (0, a.jsx)(c.b, {
                    virtualRef: {
                        current: M
                    }
                }), S[11] = M, S[12] = b) : b = S[12];
                let Y = "default" === F && "w-60",
                    J = "wide" === F && "w-72",
                    X = "large" === F && "w-90";
                S[13] !== Y || S[14] !== J || S[15] !== X ? (h = (0, i.b)("no-drag group relative z-50 flex items-start gap-2 rounded-xl bg-coachmark p-3 text-sm text-coachmark shadow-lg outline-hidden select-none", Y, J, X), S[13] = Y, S[14] = J, S[15] = X, S[16] = h) : h = S[16];
                let Z = "center" === j ? 0 : -11 * V,
                    ee = null != U ? `${P}-body` : void 0,
                    et = null != U ? `${P}-title` : `${P}-body`,
                    en = K[B],
                    ea = ("center" === j ? 19 : 21) * V;
                S[17] !== P || S[18] !== U ? (v = null != U && (0, a.jsx)("div", {
                    id: `${P}-title`,
                    className: "font-semibold",
                    children: U
                }), S[17] = P, S[18] = U, S[19] = v) : v = S[19];
                let eo = `${P}-body`;
                return S[20] !== O || S[21] !== eo ? (w = (0, a.jsx)("div", {
                    id: eo,
                    children: O
                }), S[20] = O, S[21] = eo, S[22] = w) : w = S[22], S[23] !== v || S[24] !== w ? (y = (0, a.jsxs)("div", {
                    className: "flex min-w-0 flex-1 flex-col gap-0.5",
                    children: [v, w]
                }), S[23] = v, S[24] = w, S[25] = y) : y = S[25], S[26] !== q ? (I = q.formatMessage({
                    id: "beacons.homeTooltip.close",
                    defaultMessage: "Close tooltip"
                }), S[26] = q, S[27] = I) : I = S[27], S[28] !== $ ? (k = e => {
                    e.stopPropagation(), $()
                }, S[28] = $, S[29] = k) : k = S[29], S[30] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, a.jsx)(l.Aj, {}), S[30] = x) : x = S[30], S[31] !== I || S[32] !== k ? (C = (0, a.jsx)("button", {
                    className: "relative flex size-4 shrink-0 cursor-interaction items-center justify-center rounded-sm before:absolute before:-inset-1 focus-visible:outline-2 focus-visible:outline-current",
                    "aria-label": I,
                    onClick: k,
                    type: "button",
                    children: x
                }), S[31] = I, S[32] = k, S[33] = C) : C = S[33], S[34] !== j || S[35] !== Q ? (A = (0, a.jsx)(m, {
                    align: j,
                    isRtl: Q
                }), S[34] = j, S[35] = Q, S[36] = A) : A = S[36], S[37] !== j || S[38] !== P || S[39] !== h || S[40] !== Z || S[41] !== ee || S[42] !== et || S[43] !== en || S[44] !== ea || S[45] !== y || S[46] !== C || S[47] !== A || S[48] !== D ? (L = (0, a.jsxs)(c.c, {
                    id: P,
                    className: h,
                    align: j,
                    alignOffset: Z,
                    "aria-describedby": ee,
                    "aria-labelledby": et,
                    collisionPadding: 8,
                    onCloseAutoFocus: p,
                    onInteractOutside: d,
                    onOpenAutoFocus: _,
                    role: "dialog",
                    side: en,
                    sideOffset: ea,
                    unstyled: !0,
                    updatePositionStrategy: D,
                    children: [y, C, A]
                }), S[37] = j, S[38] = P, S[39] = h, S[40] = Z, S[41] = ee, S[42] = et, S[43] = en, S[44] = ea, S[45] = y, S[46] = C, S[47] = A, S[48] = D, S[49] = L) : L = S[49], S[50] !== b || S[51] !== L || S[52] !== g ? (E = (0, a.jsxs)(c.a, {
                    open: !0,
                    onOpenChange: g,
                    children: [b, L]
                }), S[50] = b, S[51] = L, S[52] = g, S[53] = E) : E = S[53], E
            }
        })
    }),
    n5GS: (function(e, t, n) {
        var a = n("Cslg"),
            o = n("SHW6");
        n("aTcy");
        var i = n("RlnO"),
            r = n("IDma");

        function s(e) {
            if ("open_local_url" !== e.action_v2.action_enum) return !1;
            let t = e.action_v2.web_url;
            if (!t.startsWith("/") || t.startsWith("//")) return !1;
            let n = (0, o.a)(e);
            return null != n && "/admin/billing" === n.pathname && "add_credits" === n.searchParams.get("codex_credit_action")
        }
        n("nInK"), n.d(t, {}, {
            a: s,
            b: function(e, t) {
                if ("open_local_url" !== e.action_v2.action_enum) return;
                let l = e.action_v2.web_url;
                if (!l.startsWith("/") || l.startsWith("//")) return;
                let c = (0, o.a)(e);
                if (null == c) return;
                let u = "/?open=plan-renew-confirmation" === l || "/?open=plan-renew-pricing" === l,
                    _ = s(e),
                    d = "/admin/billing/manage_member_usage_limit" === c.pathname,
                    p = "/settings/billing?expense_invoice=latest" === l;
                if (!u && !_ && !d && !p) return;
                if ("link" === t.source) return {
                    status: "unsupported"
                };
                let m = t.scope.get(a.n);
                if (m.authLoading || m.accountLoading) return {
                    status: "pending"
                };
                if (!t.allowExternalActions || null == m.accountId || null == m.userId || !(0, r.a)(t.scope, m.accountId, m.userId) || null != t.eventAccountId && t.eventAccountId !== m.accountId) return {
                    status: "unavailable"
                };
                if (p) {
                    let e = t.scope.get(i.a);
                    if ("loading" === e.status) return {
                        status: "pending"
                    };
                    if ("allowed" !== e.status) return {
                        status: "unavailable"
                    }
                }
                let {
                    accountId: f,
                    userId: g
                } = m;
                return {
                    status: "supported",
                    handler: async e => {
                        let {
                            loadBillingBeaconAction: a
                        } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629)]).then(n.bind(n, "XyTt"));
                        if (!(0, r.a)(t.scope, f, g) || !(t.isCurrentPresentation?.() ?? !0)) return !1;
                        let o = await a();
                        return !!(0, r.a)(t.scope, f, g) && !!(t.isCurrentPresentation?.() ?? !0) && o(t, c, f, g, e)
                    }
                }
            }
        })
    }),
    vOxw: (function(e, t, n) {
        var a = n("Q840"),
            o = n("OWtl");
        let i = (0, a.u)(o.a, () => new Map);
        n.d(t, {}, {
            a: i,
            b: function(e, t, n) {
                let a = e.get(i),
                    o = a.get(t);
                null != o && null == o.route && e.set(i, new Map(a).set(t, {
                    ...o,
                    route: "ordinary" !== o.mode || n ? "legacy" : "v2"
                }))
            }
        })
    }),
    BHyM: (function(e, t, n) {
        let a = "business_owner_team_invite_confirmation";
        n.d(t, {}, {
            a: a,
            b: function(e, t) {
                return null != t ? e === a : "business_domain_coworkers" === e || "business_owner_domain_invites" === e
            }
        })
    }),
    nY8G: (function(e, t, n) {
        n("AleY"), n("ReGc"), n.d(t, {}, {
            a: async function(e) {}
        })
    }),
    h6ff: (function(e, t, n) {
        var a = n("zMIV"),
            o = n.n(a),
            i = n("lAQI"),
            r = n("G4Vg"),
            s = n("jUaO");
        let l = i.L().nullable().optional().transform(e => e ?? null),
            c = i.F({
                id: i.L(),
                text: i.L(),
                url: i.L()
            }),
            u = i.F({
                banner_design: i.p(["default", "composer", "eyebrow_composer"]).optional().default("default"),
                banner_position: i.z("composer").nullable().optional().transform(e => e ?? null),
                description: i.L(),
                dismiss_variant: i.p(["dismiss_on_send", "persistent"]).optional().default("dismiss_on_send"),
                icon_image_size: i.p(["small", "medium", "large"]).optional().default("small"),
                icon_image_url: l,
                icon_image_url_dark: l,
                informational_link: c.nullable().optional().transform(e => e ?? null),
                title: i.L(),
                type: i.z("beacon_banner_info")
            }).loose(),
            _ = i.F({
                alignment: i.p(["start", "center"]).nullish(),
                bullet_points: i.g(i.F({
                    icon: i.p(["speedometer", "chat-dots", "clock-history"]),
                    text: i.L()
                })).nullish(),
                description_format: i.p(["plain", "markdown"]).optional(),
                supporting_text: i.L().nullish(),
                supporting_text_format: i.p(["plain", "markdown"]).optional(),
                description: i.L(),
                footer_link: c.nullable().optional().transform(e => e ?? null),
                footer_text: l,
                header_image_alt: l,
                header_image_url: l,
                header_image_url_dark: l,
                title: i.L(),
                type: i.z("beacon_modal_info"),
                web_design: i.p(["default", "announcement_nux"]).optional().default("default")
            }).loose(),
            d = i.F({
                close_aria_label: l,
                pages: i.g(i.F({
                    cta_action_item_id: l,
                    cta_text: i.L(),
                    description: i.L(),
                    footnote: l,
                    id: i.L(),
                    image_variant_urls: i.g(i.L()).nullable().optional().transform(e => e ?? null),
                    media_alt: i.L(),
                    media_type: i.p(["image", "video"]).optional().default("image"),
                    media_url: i.L(),
                    title: i.L(),
                    video_poster_url: l
                }).loose()).min(1),
                type: i.z("beacon_multi_page_modal_info")
            }).loose(),
            p = i.F({
                approval_info_text: l,
                design: i.p(["default", "card"]).nullable().optional().transform(e => e ?? "default"),
                primary_info_text: l,
                type: i.z("beacon_conversation_inline_info")
            }).loose(),
            m = i.F({
                container_id: i.L().min(1),
                type: i.z("beacon_container_info")
            }).loose(),
            f = i.F({
                background_image_url: l,
                background_image_url_dark: l,
                foreground_image_layout: i.Q([i.F({
                    type: i.z("none")
                }), i.F({
                    type: i.z("centered"),
                    clip_shape: i.p(["none", "circle"]),
                    size: i.p(["extra_small", "small", "regular"])
                }), i.F({
                    type: i.z("wide"),
                    sizing: i.F({
                        type: i.z("width_to_height_ratio"),
                        ratio: i.E().gt(1)
                    })
                })]),
                foreground_image_url: i.L(),
                foreground_image_url_dark: l,
                subtitle: l,
                title: i.L(),
                type: i.z("beacon_homepage_takeover_info")
            }).loose(),
            g = i.L().nullable().optional(),
            b = i.j().nullable().transform(e => e ?? void 0).optional(),
            h = i.p(["codex", "file_upload", "image_gen", "personal_finance", "tasks", "thinking", "work"]),
            v = {
                activate_feature_trial: H("activate_feature_trial", {
                    feature_key: i.L(),
                    model_behavior: i.F({
                        regeneration_model_slug: g,
                        update_model_picker: b
                    }).loose().nullable().optional()
                }),
                age_verification: H("age_verification", {}),
                authenticate_login: H("authenticate_login", {
                    auth_navigation_mode: i.p(["redirect", "modal"]).nullable().transform(e => e ?? void 0).optional()
                }),
                authenticate_signup: H("authenticate_signup", {
                    auth_navigation_mode: i.p(["redirect", "modal"]).nullable().transform(e => e ?? void 0).optional()
                }),
                citron_disable: H("citron_disable", {
                    failure_toast_message: g,
                    success_toast_message: g
                }),
                citron_enable: H("citron_enable", {}),
                codex_download_email: H("codex_download_email", {}),
                connect_finances_and_send_work_prompt: H("connect_finances_and_send_work_prompt", {
                    prompt: i.L().refine(e => e.trim().length > 0)
                }),
                connect_ledger_accounts: H("connect_ledger_accounts", {
                    composer_text: g
                }),
                copy_to_clipboard: H("copy_to_clipboard", {
                    copy_text: i.L(),
                    text: i.L()
                }),
                create_presence_session: H("create_presence_session", {
                    conversation_id: i.L(),
                    message_id: i.L(),
                    launch_attempt_id: i.L()
                }),
                create_prompt: H("create_prompt", {
                    open_in_modal: b,
                    prompt_description: g,
                    prompt_name: g,
                    prompt_text: g
                }),
                dismiss: H("dismiss", {
                    composer_text: g
                }),
                enable_codex_fast_mode: H("enable_codex_fast_mode", {}),
                enable_web_push: H("enable_web_push", {}),
                enable_web_push_and_responses_push: H("enable_web_push_and_responses_push", {
                    account_id: i.L().min(1),
                    account_user_id: i.L().min(1)
                }),
                file_upload: H("file_upload", {
                    composer_text: g
                }),
                free_thinking_sample_regenerate: H("free_thinking_sample_regenerate", {
                    model_slug: i.L(),
                    update_model_picker: b
                }),
                get_go: H("get_go", {
                    promo_campaign_id: g,
                    upsell_context_id: h.nullable().optional()
                }),
                get_plus: H("get_plus", {
                    checkout_mode: i.z("direct").nullable().optional(),
                    promo_campaign_id: g,
                    upsell_context_id: h.nullable().optional()
                }),
                get_pro: H("get_pro", {
                    rejoin_pro_cta_variant: i.R().transform(s.c).optional(),
                    pro_offer: r.b.nullish(),
                    upsell_context_id: h.nullable().optional()
                }),
                get_prolite: H("get_prolite", {
                    checkout_mode: i.z("direct").nullish(),
                    upsell_context_id: h.nullish()
                }),
                open_plan_pricing: H("open_plan_pricing", {
                    plan_sku: i.p(["go", "plus", "promax", "team"]),
                    upsell_context_id: h.nullable().optional()
                }),
                get_team: H("get_team", {
                    checkout_mode: i.z("direct").nullable().optional(),
                    upsell_context_id: h.nullable().optional()
                }),
                install_mobile_widget: H("install_mobile_widget", {}),
                install_plugin: H("install_plugin", {
                    plugin_reference_id: i.L(),
                    post_install_prompt: g
                }),
                enable_workspace_auto_join: H("enable_workspace_auto_join", {}),
                invite_domain_members: H("invite_domain_members", {
                    account_id: i.T()
                }),
                send_workspace_invite: H("send_workspace_invite", {
                    account_id: i.T()
                }),
                invite_team_members: H("invite_team_members", {
                    emails: i.g(i.L()).nullable().optional()
                }),
                open_claim_business_workspace_modal: H("open_claim_business_workspace_modal", {}),
                open_connector_oauth_modal: H("open_connector_oauth_modal", {
                    connector_id: i.L()
                }),
                open_connectors_onboarding_modal: H("open_connectors_onboarding_modal", {}),
                open_dot_texting_setup: H("open_dot_texting_setup", {}),
                open_enterprise_value_survey_modal: H("open_enterprise_value_survey_modal", {
                    survey_id: i.L(),
                    survey_name: i.L(),
                    survey_type: g
                }),
                open_external_agent_import: H("open_external_agent_import", {}),
                open_dot_with_draft: H("open_dot_with_draft", {
                    dot_id: i.L().min(1),
                    prompt: i.L().regex(/\S/u)
                }),
                open_local_url: H("open_local_url", {
                    android_url: i.L(),
                    ios_url: i.L(),
                    trigger_turn: b,
                    url: i.L().nullable().transform(e => e ?? void 0).optional(),
                    web_url: i.L()
                }),
                open_pca_connector_auth_modal: H("open_pca_connector_auth_modal", {
                    connector_id: i.L(),
                    include_connector_system_hint_after_link: b,
                    trigger_turn_after_link: b
                }),
                open_pepper_onboarding_modal: H("open_pepper_onboarding_modal", {}),
                open_url: H("open_url", {
                    url: i.L()
                }),
                open_work_tab: H("open_work_tab", {}),
                open_work_tab_and_send_prompt: H("open_work_tab_and_send_prompt", {
                    prompt: i.L()
                }),
                photo_upload: H("photo_upload", {
                    composer_text: g
                }),
                regenerate: H("regenerate", {
                    model_slug: i.L(),
                    update_model_picker: i.j()
                }),
                request_account_team_contact: H("request_account_team_contact", {
                    campaign_id: i.L(),
                    notification_type: i.p(["beacon_account_signal", "beacon_account_signal_smb"])
                }),
                request_premium_seat: H("request_premium_seat", {}),
                request_workspace_upgrade_seat: H("request_workspace_upgrade_seat", {
                    seat_type: i.z("prolite").nullable().optional()
                }),
                request_workspace_credits: H("request_workspace_credits", {}),
                send_prompt: H("send_prompt", {
                    cta_source: g,
                    developer_prompt: i.L(),
                    hint: g,
                    prompt: i.L()
                }),
                set_atlas_as_default_browser: H("set_atlas_as_default_browser", {}),
                share_conversation: H("share_conversation", {
                    conversation_id: i.L(),
                    current_node_id: i.L(),
                    title: i.L()
                }),
                share_group_chat: H("share_group_chat", {
                    room_name: g
                }),
                share_location: H("share_location", {}),
                share_message_slice: H("share_message_slice", {}),
                start_jobs_mock_interview_voice: H("start_jobs_mock_interview_voice", {}),
                start_voice: H("start_voice", {
                    requested_default_model: g,
                    voice_landing: g
                }),
                start_spark: H("start_spark", {
                    spark_id: i.L().regex(/\S/),
                    user_message: i.L().regex(/\S/),
                    preferred_model_slug: g,
                    preferred_thinking_effort: g
                }),
                submit_personalized_information_questionnaire_feedback: H("submit_personalized_information_questionnaire_feedback", {
                    answer: i.p(["yes", "no"]),
                    citation_uuid: i.L(),
                    conversation_context_type: i.p(["user_memory", "general_memory", "past_conversation"]),
                    conversation_id: i.L(),
                    details_max_length: i.E().nullable().transform(e => e ?? void 0).optional(),
                    details_placeholder: i.L(),
                    details_submit_button_text: i.L(),
                    message_id: i.L(),
                    question_id: i.z("citation_relevance"),
                    questionnaire_id: i.z("personalized_citation_relevance"),
                    success_toast_message: i.L(),
                    surface: i.z("personalization_questionnaire")
                }),
                system_hint: H("system_hint", {
                    composer_text: g,
                    hint: i.L(),
                    new_chat: b,
                    trigger_turn: b
                }),
                update_model_picker: H("update_model_picker", {
                    composer_text: g,
                    model_slug: i.L(),
                    thinking_effort: g,
                    service_tier: i.p(["standard", "fast", "ultrafast"]).nullable().optional()
                }),
                update_personality_trait: H("update_personality_trait", {
                    level: i.L(),
                    trait: i.L(),
                    updated_trait_settings_dict: i.J(i.L(), i.L())
                }),
                update_user_personalization_setting: H("update_user_personalization_setting", {
                    memory_enabled: i.j(),
                    success_toast_message: g
                })
            },
            w = i.Q(Object.values(v)),
            y = i.Q(Object.values(o()(v, ["get_prolite", "connect_finances_and_send_work_prompt", "create_presence_session", "open_plan_pricing", "invite_domain_members", "send_workspace_invite", "enable_codex_fast_mode", "enable_workspace_auto_join", "enable_web_push_and_responses_push", "open_dot_texting_setup", "open_dot_with_draft", "open_external_agent_import", "start_spark"]))),
            I = i.F({
                action_enum: i.D().transform(() => void 0).optional()
            }).loose(),
            k = i.F({
                action_v2: i.Q([I, y]),
                icon_url: g,
                id: i.L(),
                text: i.L()
            }).loose(),
            x = i.F({
                action_enum: i.z("dropdown"),
                footer_text: g,
                header_text: g,
                items: i.g(k)
            }).loose(),
            C = i.F({
                action_v2: i.Q([I, y, x]),
                icon_url: g,
                id: i.L(),
                text: i.L()
            }).loose(),
            A = i.F({
                action_enum: i.z("dropdown"),
                footer_text: g,
                header_text: g,
                items: i.g(C)
            }).loose(),
            L = i.F({
                appearance: i.p(["standard", "accent"]).catch("standard").optional(),
                action_v2: i.Q([I, w, A]),
                description: g,
                icon_url: g,
                id: i.L(),
                text: g,
                type: i.p(["primary", "secondary", "copy", "dropdown"]).nullable().optional().transform(e => e ?? "primary")
            }).loose(),
            E = i.g(L),
            S = i.g(L).min(1).max(2).refine(e => e[0]?.type === "primary" && (1 === e.length || e[1]?.type === "secondary")),
            P = {
                action_items: E,
                beacon_id: i.L(),
                beacon_name: i.L(),
                custom_fields: i.J(i.L(), i.R()).optional(),
                show_timing: i.p(["immediate", "wait_until_conversation_refresh"]).optional().default("immediate"),
                type: i.z("beacon_ui_response")
            },
            T = i.Q([i.F({
                ...P,
                ui_info: u
            }).loose(), i.F({
                ...P,
                ui_info: _
            }).loose(), i.F({
                ...P,
                ui_info: d
            }).loose(), i.F({
                ...P,
                ui_info: p
            }).loose()]),
            M = i.F({
                ...P,
                beacon_id: i.z("library_provider_onboarding_refresh"),
                ui_info: i.F({
                    type: i.z("beacon_container_info"),
                    container_id: i.z("library_google_drive_sidebar_tooltip")
                })
            }).loose().refine(e => {
                let t = e.action_items[0]?.action_v2;
                return t?.action_enum === "open_local_url" && !0 !== t.trigger_turn && t.web_url.startsWith("/library?") && "intro" === new URLSearchParams(t.web_url.slice(9)).get("library_onboarding")
            }),
            O = i.Q([M, i.F({
                ...P,
                ui_info: u
            }).loose(), i.F({
                ...P,
                ui_info: _
            }).loose(), i.F({
                ...P,
                ui_info: d
            }).loose(), i.F({
                ...P,
                action_items: S,
                ui_info: f
            }).loose()]),
            N = i.F({
                ...P,
                ui_info: m
            }).loose();

        function H(e, t) {
            return i.F({
                action_enum: i.z(e),
                ...t
            }).loose()
        }
        n.d(t, {}, {
            a: T,
            b: N,
            c: function(e) {
                var t;
                let n = i.F({
                    action_items: i.g(i.R()),
                    beacon_id: i.L(),
                    custom_fields: i.J(i.L(), i.R()).optional(),
                    ui_info: i.F({
                        type: i.p(["beacon_banner_info", "beacon_conversation_inline_info", "beacon_homepage_takeover_info", "beacon_modal_info", "beacon_multi_page_modal_info"])
                    }).loose()
                }).loose().safeParse(e);
                if (!n.success) return null;
                let a = n.data.action_items.findIndex(e => !L.safeParse(e).success);
                return -1 === a ? null : {
                    beaconId: n.data.beacon_id,
                    diagnostic: {
                        actionEnum: "unknown",
                        actionId: "unknown",
                        actionIndex: a,
                        reason: "malformed_action_payload"
                    },
                    suppressLifecycle: n.data.custom_fields?.debug_forced_in_conversation_beacon === !0,
                    treatment: "beacon_banner_info" === (t = n.data.ui_info.type) ? "banner" : "beacon_homepage_takeover_info" === t ? "homepage_takeover" : "beacon_conversation_inline_info" === t ? "conversation_inline" : "modal"
                }
            },
            d: O,
            e: w
        })
    }),
    d58w: (function(e, t, n) {
        var a = n("lAQI"),
            o = n("hlVK"),
            i = n("SPzj"),
            r = n("U861"),
            s = n("h6ff"),
            l = n("oHzU");
        let c = "deferredBeaconUpgradeEvent",
            u = a.F({
                accountId: a.L().min(1),
                actionId: a.L().min(1),
                analyticsContext: a.F({
                    placement: a.p(["codex_home", "homepage", "in_conversation", "work_tab_home"]),
                    productExperience: a.p(["chat", "work"]).optional(),
                    suppressLifecycle: a.j().optional(),
                    treatment: a.p(["banner", "conversation_inline", "homepage_takeover", "modal"])
                }).nullable(),
                beacon: a.Q([s.a, s.d]),
                expectedIdentity: a.F({
                    accountId: a.L(),
                    userId: a.L()
                }).optional(),
                eventMetadata: a.F({
                    conversationId: a.L().nullable(),
                    messageId: a.L().nullable(),
                    suppressLifecycle: a.j().optional()
                }).nullable()
            });

        function _(e, t) {
            return function e(t, n) {
                for (let a of t) {
                    if (a.id === n && "get_team" === a.action_v2.action_enum && "direct" === a.action_v2.checkout_mode) return a;
                    if ("dropdown" === a.action_v2.action_enum) {
                        let t = e(a.action_v2.items, n);
                        if (null != t) return t
                    }
                }
                return null
            }(e.action_items, t)
        }
        n.d(t, {}, {
            a: c,
            b: async function(e, t, n) {
                if (null == n || n.accountId !== t) return !1;
                let a = _(n.beacon, n.actionId);
                return null != a && (!!(0, r.e)(n.beacon.beacon_id) || n.analyticsContext?.suppressLifecycle === !0 || n.eventMetadata?.suppressLifecycle === !0 || (null != n.analyticsContext && (0, i.b)(e, {
                    action: "click",
                    actionId: n.actionId,
                    actionType: a.type,
                    beacon: n.beacon,
                    destinationAction: "get_team",
                    ...n.analyticsContext
                }), await (0, o.a)({
                    accountId: t,
                    beacon: n.beacon,
                    expectedIdentity: n.expectedIdentity,
                    eventCtaId: n.actionId,
                    eventType: "click",
                    metadata: n.eventMetadata ?? void 0
                }), !0))
            },
            c: function(e) {
                let {
                    accountId: t,
                    action: n,
                    analyticsContext: a,
                    beacon: o,
                    eventMetadata: i
                } = e;
                if ("get_team" !== n.action_v2.action_enum || "direct" !== n.action_v2.checkout_mode || null == _(o, n.id)) return null;
                let {
                    onLifecycle: r,
                    [l.k]: s,
                    ...c
                } = o;
                return {
                    accountId: t,
                    actionId: n.id,
                    analyticsContext: a ?? null,
                    beacon: c,
                    expectedIdentity: s,
                    eventMetadata: i ?? null
                }
            },
            d: function(e) {
                if (null == e || "object" != typeof e || !(c in e)) return null;
                let t = u.safeParse(e[c]);
                return t.success && null != _(t.data.beacon, t.data.actionId) ? t.data : null
            }
        })
    }),
    oaZE: (function(e, t, n) {
        var a = n("QosV"),
            o = n("Q840"),
            i = n("zd8w"),
            r = n("StMt"),
            s = n("h6fL"),
            l = n("OWtl"),
            c = n("WFY2");
        n.d(t, {}, {
            a: function(e) {
                let t, u, _, d = (0, a.c)(10),
                    {
                        enabled: p
                    } = e,
                    m = (0, o.y)(l.a),
                    f = (0, s.a)();
                d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                    name: "chatgpt"
                }, d[0] = t) : t = d[0];
                let g = (0, o.x)(r.a, t);
                return d[1] !== f.accountId || d[2] !== f.authMethod || d[3] !== f.isLoading || d[4] !== f.userId || d[5] !== g.isCapable || d[6] !== p || d[7] !== m ? (u = () => {
                    let e;
                    if (f.isLoading || !g.isCapable || !p || null == f.accountId || null == f.userId || "chatgpt" !== f.authMethod && "chatgptAuthTokens" !== f.authMethod) return;
                    let t = f.accountId,
                        a = f.userId,
                        o = !1;
                    return (async function() {
                        return (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(338646)]).then(n.bind(n, "wmPg"))).observeFamilyNotifications
                    })().then(n => {
                        o || (e = n(m, {
                            accountId: t,
                            userId: a
                        }))
                    }).catch(() => {
                        o || c.a.warning("family_workspace_notifications_initialization_failed")
                    }), () => {
                        o = !0, e?.()
                    }
                }, _ = [m, f.accountId, f.userId, f.authMethod, f.isLoading, g.isCapable, p], d[1] = f.accountId, d[2] = f.authMethod, d[3] = f.isLoading, d[4] = f.userId, d[5] = g.isCapable, d[6] = p, d[7] = m, d[8] = u, d[9] = _) : (u = d[8], _ = d[9]), (0, i.useEffect)(u, _), null
            }
        })
    }),
    j6fD: (function(e, t, n) {
        var a = n("Hl6a"),
            o = n("lAQI"),
            i = n("fDv2"),
            r = n("OWtl"),
            s = n("oHzU");
        let l = new Set(["family_workspace_notification_banner", "family_workspace_notification_modal", "family_workspace_notification_work_banner", "family_workspace_notification_work_modal", "family_workspace_notification_codex_banner", "family_workspace_notification_codex_modal"]),
            c = o.F({
                notification_id: o.L().min(1),
                presented_at: i.b({
                    offset: !0
                }),
                expires_at: i.b({
                    offset: !0
                }),
                workspace_id: o.L().min(1),
                invitation_id: o.L().nullable(),
                occurrence_id: o.L().min(1)
            }),
            u = (0, a.g)(r.a, e => ({
                pending: new Map,
                acknowledged: new Map,
                acknowledgedThrough: new Map,
                removedInvitations: new Map,
                viewed: new Set
            }));

        function _(e) {
            if (!l.has(e.beacon_id) || "beacon_banner_info" !== e.ui_info.type && "beacon_modal_info" !== e.ui_info.type) return null;
            let t = c.safeParse(e.custom_fields?.family_notification);
            return t.success ? t.data : null
        }

        function d(e) {
            let t = /^invite:.*:(\d+)$/.exec(e),
                n = null == t ? 0 / 0 : Number(t[1]);
            return Number.isSafeInteger(n) ? n : null
        }

        function p(e, t) {
            if (null == t) return !0;
            if (e === t) return !1;
            let n = d(e),
                a = d(t);
            return null == n || null == a || n < a
        }
        n.d(t, {}, {
            a: function(e, t, n) {
                let a = _(n);
                null != a && e.set(u, t, e => {
                    let t = "beacon_modal_info" === n.ui_info.type,
                        o = Math.max(Date.now(), Date.parse(a.presented_at)),
                        i = new Map([...e.pending].filter(e => {
                            let [, n] = e, a = _(n);
                            return "beacon_modal_info" === n.ui_info.type !== t || null != a && Date.parse(a.presented_at) > o
                        }));
                    return {
                        ...e,
                        pending: i,
                        acknowledgedThrough: new Map(e.acknowledgedThrough).set(t, o),
                        acknowledged: new Map(e.acknowledged).set(a.notification_id, Date.parse(a.expires_at))
                    }
                })
            },
            b: function(e, t) {
                e.set(u, t, e => ({
                    ...e,
                    pending: new Map
                }))
            },
            c: _,
            d: u,
            e: function(e, t) {
                return [...e.get(u, t).pending.values()]
            },
            f: function(e, t, n) {
                let a = _(n),
                    o = e.get(u, t);
                return !(null == a || o.viewed.has(a.notification_id)) && (e.set(u, t, {
                    ...o,
                    viewed: new Set(o.viewed).add(a.notification_id)
                }), !0)
            },
            g: function(e, t) {
                return e.watch(n => {
                    let a = Math.min(...[...n.get(u, t).pending.values()].map(e => Date.parse(_(e)?.expires_at ?? "")));
                    if (!Number.isFinite(a)) return;
                    let o = setTimeout(() => {
                        e.set(u, t, e => ({
                            ...e,
                            pending: new Map([...e.pending].filter(e => {
                                let [, t] = e;
                                return Date.parse(_(t)?.expires_at ?? "") > Date.now()
                            }))
                        }))
                    }, Math.min(Math.max(0, a - Date.now()), 0x7fffffff));
                    return () => clearTimeout(o)
                })
            },
            h: function(e, t, n) {
                let a = _(n);
                if (null == a) return !1;
                let o = Date.parse(a.expires_at),
                    i = Date.now(),
                    r = e.get(u, t),
                    s = JSON.stringify([a.workspace_id, a.invitation_id]);
                return !!(o <= i || r.acknowledged.has(a.notification_id) || Date.parse(a.presented_at) <= (r.acknowledgedThrough.get("beacon_modal_info" === n.ui_info.type) ?? 0) || r.removedInvitations.has(s) && p(a.occurrence_id, r.removedInvitations.get(s) ?? null)) || (e.set(u, t, {
                    ...r,
                    pending: new Map(r.pending).set(a.notification_id, n),
                    acknowledged: new Map([...r.acknowledged].filter(e => {
                        let [, t] = e;
                        return t > i
                    }))
                }), !0)
            },
            i: function(e, t, n, a, o) {
                e.set(u, t, e => {
                    let t = JSON.stringify([n, a]),
                        i = e.removedInvitations.get(t),
                        r = e.removedInvitations.has(t) && null == i || null != i && null != o && (d(i) ?? 0) > (d(o) ?? 0) ? i ?? null : o;
                    return {
                        ...e,
                        removedInvitations: new Map(e.removedInvitations).set(t, r),
                        pending: new Map([...e.pending].filter(e => {
                            let [, t] = e, o = _(t);
                            return null == o || o.workspace_id !== n || o.invitation_id !== a || !p(o.occurrence_id, r)
                        }))
                    }
                })
            },
            j: function(e) {
                return [...e.pending.values()].find(s.a) ?? null
            }
        })
    }),
    fM3G: (function(e, t, n) {
        n.d(t, {
            a: () => N,
            b: () => O,
            c: () => M
        });
        var a = n("Q840"),
            o = n("UKCO"),
            i = n("SPzj"),
            r = n("Vz4D"),
            s = n("eac5"),
            l = n("SDxg"),
            c = n("vOxw"),
            u = n("nY8G"),
            _ = n("h6ff"),
            d = n("svjy"),
            p = n("cus3"),
            m = n("OMIV"),
            f = n("oHzU"),
            g = n("Eso4"),
            b = n("prHy"),
            h = n("s4w7"),
            v = n("EZRW"),
            w = n("mRsi"),
            y = n("a2O9"),
            I = n("un4u"),
            k = n("Kwur"),
            x = n("M8lA"),
            C = n("htGh"),
            A = n("V9B1"),
            L = n("OTgW"),
            E = n("SClg"),
            S = n("OWtl"),
            P = n("j6fD");
        let T = {
                chatgpt: "homepage",
                codex: "codex_home",
                work_tab: "work_tab_home"
            },
            M = () => !1,
            O = (0, a.q)(S.a, (e, t) => {
                let {
                    accountId: a,
                    browserTooltipTargets: S,
                    clientContext: M,
                    composerSelectionContext: O,
                    locale: N,
                    pathname: H,
                    product: B,
                    shouldSuppressFocusedModal: R,
                    userId: U,
                    visitKey: z
                } = e, {
                    scope: j
                } = t, F = j.get(c.a).get(z), D = F?.route === "v2" && null != a && null != U && "chatgpt" === B && "/" === H && null == S;
                return {
                    queryKey: ["codex-app-home-beacon", a, U, N, H, B, z, S, D],
                    refetchOnMount: !1,
                    refetchOnReconnect: !1,
                    refetchOnWindowFocus: !1,
                    retry: !1,
                    staleTime: 6e4,
                    gcTime: null == S ? 0 : 1 / 0,
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e, c = null;
                        if (null == S && "chatgpt" === B && "/" === H && null != a && null != U && /Android/.test(navigator.userAgent)) {
                            let e = (0, x.getClientBootstrap)().authHomepageAppUpsellAdmission;
                            c = e?.accountId === a && e.userId === U ? async function(e, t, n) {
                                let a = new AbortController;
                                try {
                                    return await (0, s.a)(async function(e, t, n) {
                                        try {
                                            n.throwIfAborted();
                                            let a = (document.documentElement.dataset.routerBasename ?? "").replace(/\/$/u, ""),
                                                {
                                                    data: o,
                                                    response: i
                                                } = await r.a.GET(l.a, {
                                                    baseUrl: `${window.location.origin}${a}`,
                                                    fetch,
                                                    signal: n,
                                                    credentials: "same-origin",
                                                    cache: "no-store",
                                                    redirect: "error",
                                                    params: {
                                                        header: {
                                                            "x-codex-statsig-user-id": t,
                                                            "x-codex-statsig-account-id": e
                                                        }
                                                    }
                                                });
                                            if (!i.ok || 204 === i.status) return !1;
                                            let s = l.b.parse(o);
                                            if (n.aborted || s.accountId !== e || s.userId !== t) return !1;
                                            return !0
                                        } catch {
                                            return !1
                                        }
                                    }(e, t, AbortSignal.any([n, a.signal])), !1, Date.now() + 1e3)
                                } finally {
                                    a.abort()
                                }
                            }(a, U, t): Promise.resolve(!1)
                        }
                        let M = window.electronBridge?.getDesktopUserAgent?.() ?? null,
                            F = null != a && "chatgpt" === B && "/" === H && null == S,
                            q = null == M ? void 0 : j.get(L.a),
                            V = null == M ? void 0 : j.get(A.a),
                            Q = "chatgpt" === B && null == S,
                            W = (0, v.a)(),
                            G = null == a ? void 0 : await (0, u.a)(j),
                            K = {
                                home_sms_backup_supported: F,
                                pepper_home_banner_supported: Q,
                                pro_offer_checkout_supported: null == S && ("chatgpt" === B || "work_tab" === B) || void 0,
                                browser_family: W ?? void 0,
                                browser_extension_installed: null == W ? void 0 : j.get(w.b),
                                browser_tab_search_available: null == W ? void 0 : (0, y.a)(j, B)
                            },
                            $, Y = null != M && "codex" === B && null == S && null != a && null != U && "/" === H,
                            J = (0, h.g)(j, B, H, z),
                            X = J ? [h.b] : void 0,
                            Z = S ?? ("chatgpt" === B ? void 0 : X),
                            ee = null != M && "codex" === B && null == S && null != a ? await j.query.fetch(C.a).catch(() => null) ?? void 0 : void 0,
                            et = D && null != a && null != U ? {
                                beacon_ui_response: (await k.Request.safeGet("/beacons_v2", {
                                    cache: "no-store",
                                    retry: "never",
                                    signal: t,
                                    expectedIdentity: {
                                        accountId: a,
                                        userId: U
                                    },
                                    additionalHeaders: {
                                        "Cache-Control": "no-store",
                                        "oai-client-version": (0, E.b)(),
                                        "x-openai-use-sheep": "1"
                                    },
                                    parameters: {
                                        query: {
                                            surface: ["home"],
                                            ...K
                                        }
                                    }
                                })).surfaces.home ?? null
                            } : await k.Request.safeGet("/beacons/home", {
                                signal: t,
                                additionalHeaders: {
                                    ...null == a ? {} : {
                                        "ChatGPT-Account-ID": a,
                                        ...{
                                            [o.dc]: a
                                        }
                                    },
                                    "Cache-Control": "no-store",
                                    ...{
                                        "oai-client-version": (0, E.b)()
                                    },
                                    ...null == M ? {} : {
                                        "User-Agent": M
                                    }
                                },
                                parameters: {
                                    query: {
                                        product: B,
                                        ...null == G ? {} : {
                                            preload_installation_id: G
                                        },
                                        selected_model_slug: null == O ? void 0 : j.get(I.f, O).selectedModel.slug,
                                        web_frontend: "codex_webview",
                                        codex_window_type: "browser",
                                        client_capabilities: Y ? ["codex_home_takeover_model_picker"] : void 0,
                                        desktop_voice_available: V,
                                        desktop_voice_nux_seen: q,
                                        notification_state: ee,
                                        ...K,
                                        space_tooltip_ready: J,
                                        supported_home_tooltip_targets: null == Z ? void 0 : [...Z],
                                        codex_fast_mode_eligible: $?.codex_fast_mode_eligible,
                                        codex_fast_mode_saved_ms: $?.codex_fast_mode_saved_ms,
                                        codex_fast_mode_thread_count: $?.codex_fast_mode_thread_count
                                    }
                                }
                            }),
                            en = [];
                        "chatgpt" === B && null == S && (en = g.b);
                        let {
                            beacon: ea,
                            rejection: eo
                        } = function(e, t) {
                            let n = e.beacon_ui_response;
                            if (null == n) return {
                                beacon: null,
                                rejection: null
                            };
                            let a = (0, b.a)(n, t);
                            return null == a ? {
                                beacon: null,
                                rejection: (0, _.c)(n)
                            } : {
                                beacon: a,
                                rejection: null
                            }
                        }(et, en), ei = null == ea ? null : await async function(e, t) {
                            if (!(0, f.b)(t)) return t;
                            let {
                                createClinicianPersonalWorkspaceModal: a
                            } = await n.e(123655).then(n.bind(n, "quFz"));
                            return a(t, {
                                intl: e.get(d.a),
                                copyVariant: (0, p.a)(e.get(m.g))
                            })
                        }(j, ea);
                        if (ei?.beacon_id !== "auth_app_install_turn_count_banner" || null == c || await c || (ei = null), null != ei && (0, A.b)(ei) && null == M && (ei = null), ei?.beacon_id === "codex_fast_mode_home_banner" && ($?.codex_fast_mode_eligible !== !0 || "beacon_banner_info" !== ei.ui_info.type) && (ei = null), null != S && ea?.ui_info.type !== "beacon_tooltip_info" && (ei = null), ea?.ui_info.type === "beacon_tooltip_info") {
                            let e = ea.ui_info.target;
                            (S ?? X)?.some(t => t === e) || (ei = null)
                        }
                        null != eo && (0, i.k)(j, {
                            beaconId: eo.beaconId,
                            diagnostic: eo.diagnostic,
                            placement: T[B],
                            suppressLifecycle: eo.suppressLifecycle,
                            treatment: eo.treatment
                        });
                        let er = !t.aborted && null != ei && ((0, f.h)(ei) || (0, f.i)(ei)) && R();
                        er && null != a && null != ei && (0, f.e)(ei) && (0, i.e)(j, a, ei);
                        let es = t.aborted || er || null == a || null == U ? null : {
                            accountId: a,
                            userId: U
                        };
                        if (null != es && null != ei && D && (ei = {
                                ...ei,
                                [f.k]: es
                            }), null != es && null != ei && (0, f.e)(ei) && (0, P.h)(j, es, ei)) {
                            let e = ei,
                                t = (0, P.c)(e)?.notification_id;
                            ei = "beacon_banner_info" !== e.ui_info.type && (0, P.e)(j, es).some(e => (0, P.c)(e)?.notification_id === t) ? {
                                ...e,
                                onLifecycle: (t, n) => {
                                    ("dismiss" === n.action || "click" === n.action) && (0, P.a)(t, es, e)
                                }
                            } : null
                        }
                        return {
                            accountId: a,
                            beacon: er ? null : ei,
                            locale: N,
                            pathname: H,
                            product: B,
                            visitKey: z
                        }
                    }
                }
            }, {
                excludeFieldsFromKey: ["shouldSuppressFocusedModal"]
            });

        function N(e, t) {
            let {
                queryKey: n
            } = e.query.getOptions(O, t);
            (0, a.f)(e, O, t), e.queryClient.removeQueries({
                queryKey: n,
                exact: !0
            })
        }
    }),
    xW5B: (function(e, t, n) {
        var a = n("Q840"),
            o = n("StMt"),
            i = n("Cslg"),
            r = n("OFP1"),
            s = n("SPzj"),
            l = n("sb2P"),
            c = n("vOxw"),
            u = n("fM3G"),
            _ = n("DYuz"),
            d = n("s4w7"),
            p = n("oHzU"),
            m = n("un4u"),
            f = n("g2p6"),
            g = n("U861"),
            b = n("jWQ7"),
            h = n("ad0f"),
            v = n("AGHv"),
            w = n("mmXj"),
            y = n("e1xH"),
            I = n("V9B1"),
            k = n("OWtl"),
            x = n("OMIV"),
            C = n("O666"),
            A = n("pyOZ");
        let L = {
                status: "pending"
            },
            E = {
                chatgpt: "chat",
                codex: "codex",
                work_tab: "work"
            },
            S = (0, a.r)(k.a, e => {
                let {
                    get: t
                } = e, n = t(v.onboardingIdentity$);
                return (0, b.a)({
                    authMethod: "chatgpt",
                    enabled: t(x.e, "3856252093"),
                    userId: n?.userId ?? null,
                    workspaceId: n?.accountId
                })
            }),
            P = (0, a.v)(k.a, e => null),
            T = (0, a.v)(k.a, e => !1, {
                onMount: (e, t) => {
                    if (t.get(d.h, t.key)) return void e(!0);
                    let n = !1,
                        a = window.setTimeout(() => {
                            n || (n = !0, t.set(d.h, t.key, !0), e(!0))
                        }, 5e3),
                        i = t.watch(t => {
                            if (n || (e(!1), null == t.get(d.c))) return;
                            let i = t.get(o.a, {
                                name: "chatgpt"
                            });
                            if (i.isLoading || i.isCapable && !t.get(x.e, "2200939124") && t.get(x.h, "2200939124")) return;
                            let r = !0;
                            return queueMicrotask(() => {
                                r && (n = !0, window.clearTimeout(a), e(!0))
                            }), () => {
                                r = !1
                            }
                        });
                    return () => {
                        window.clearTimeout(a), i()
                    }
                }
            }, {
                autoDispose: !0
            }),
            M = (0, a.v)(k.a, (e, t) => {
                let {
                    scope: n
                } = t, a = O(e);
                return null == a ? L : n.get(l.d, a.visitKey)
            }, {
                onMount: (e, t) => {
                    let n = O(t.key);
                    return null != n && (t.key.shouldFetch || null != t.key.browserTooltipTargets) ? (new l.a(t).touchHomeVisit(n), t.watch(a => {
                        e(function e(t, n, a) {
                            var o, b;
                            let k, L = new l.a(t),
                                M = t.get(g.d);
                            if (M?.accountId === a.accountId && (null != n.browserTooltipTargets || M.destination === E[n.product] && "beacon_tooltip_info" === M.beacon.ui_info.type)) return L.applyHomeQueryResult(a, {
                                ...a,
                                beacon: null
                            }), L.getHomeVisit(a);
                            let O = t.get(g.c),
                                H = t.get(l.d, a.visitKey),
                                B = O ? "unrestricted" : function(e, t) {
                                    if ("work_tab" !== t.product) return "unrestricted";
                                    let n = e.get(i.m);
                                    if ("allowed" !== n.status || !("plan" in n)) return "blocked";
                                    if (!(0, v.isEnterpriseClientPlan)(n.plan)) return "unrestricted";
                                    let a = e.get(v.onboardingIdentity$),
                                        o = e.get(r.r);
                                    if (null == a || a.accountId !== t.accountId || a.userId !== t.userId || "allowed" !== o.status || !("accountId" in o) || o.accountId !== t.accountId) return "blocked";
                                    let s = e.get(f.p).data;
                                    if (null == s) return "blocked";
                                    if (s.seenAnnouncements?.[v.COMPLETION_ANNOUNCEMENT] != null) return "unrestricted";
                                    if (!e.get(x.e, "1625797156")) return _.a;
                                    let l = [];
                                    if (e.get(C.b, {
                                            layer: "2912878776",
                                            parameter: "enabled",
                                            disableExposureLog: !0
                                        }) && l.push("tpp_work_default_announcement_modal"), e.get(x.e, "3033586454") && e.get(C.b, {
                                            layer: "2220584304",
                                            parameter: "experiment_enabled",
                                            disableExposureLog: !0
                                        }) && l.push("tpp_work_reonboarding_modal"), 0 === l.length) return _.a;
                                    if (!e.get(x.e, "3856252093")) return [..._.a, ...l];
                                    let {
                                        data: c,
                                        isPending: u
                                    } = e.get(S);
                                    return u ? "finance_pending" : c?.enabled ? _.a : [..._.a, ...l]
                                }(t, n);
                            if ("blocked" === B) return {
                                status: "ineligible"
                            };
                            "selected" === H.status && N(t, n, H.beacon) && L.suppressUnsupportedHomeBeacon(a.accountId, H.beacon.beacon_id);
                            let R = t.get(w.h),
                                U = t.get(w.j),
                                z = !O && (0, w.l)({
                                    activeClaims: R,
                                    isCurrentHomeBeacon: !0,
                                    isHomepageTakeoverOwner: (o = L, b = a, null != (k = o.getSelectedHomeBeacon(b)) && (0, p.f)(k)),
                                    isPageContextUpsellSuppressionEnabled: U
                                }),
                                j = !O && (t.get(w.d) || z),
                                F = n.browserTooltipTargets,
                                D = null != n.browserTooltipTargets || !(0, h.b)(n.pathname) || t.get(T, a.visitKey),
                                q = !t.get(d.h, a.visitKey) && (0, d.d)(t, n.product, n.pathname);
                            if (null != F) {
                                let e = t.get(P, a.visitKey);
                                null != e && e.length > 0 ? F = e : t.set(P, a.visitKey, F)
                            }
                            let V = null != n.composerSelectionContext && (t.get(m.f, n.composerSelectionContext).savedModelPending || t.get(m.d, {
                                conversationOrigin: n.composerSelectionContext.conversationOrigin,
                                gizmoId: n.composerSelectionContext.gizmoId,
                                useMergedPicker: n.composerSelectionContext.useMergedPicker
                            }).modelsQuery.isPending);
                            D && !q && (0, c.b)(t, n.visitKey, (0, d.g)(t, n.product, n.pathname, n.visitKey));
                            let Q = t.get(u.b, {
                                accountId: n.accountId,
                                userId: n.userId,
                                clientContext: n.clientContext,
                                composerSelectionContext: n.composerSelectionContext,
                                browserTooltipTargets: F,
                                locale: n.locale,
                                pathname: n.pathname,
                                product: n.product,
                                shouldSuppressFocusedModal: n.shouldSuppressFocusedModal,
                                visitKey: n.visitKey
                            }, {
                                enabled: n.shouldFetch && !1 !== n.clientContextReady && !V && D && !q && !O && (window.electronBridge?.getDesktopUserAgent?.() == null || !t.get(x.i) && t.get(A.a) && void 0 !== t.get(I.a)) && "pending" === H.status
                            });
                            if (O) return L.getHomeVisit(a);
                            let W = Q.data?.beacon != null && (0, I.b)(Q.data.beacon) && void 0 === t.get(I.a);
                            if (null != n.browserTooltipTargets && "pending" === H.status && null != Q.data && null == Q.data.beacon && F?.join(",") !== n.browserTooltipTargets.join(",")) return t.set(P, a.visitKey, n.browserTooltipTargets), e(t, n, a);
                            if ("finance_pending" === B && Q.data?.beacon != null && !(0, _.c)(Q.data.beacon.beacon_id) || Q.data?.accountId == null || null != n.browserTooltipTargets && null == Q.data.beacon || W) Q.isError && L.applyHomeQueryResult(a, {
                                ...a,
                                beacon: null
                            });
                            else {
                                let e = L.applyHomeQueryResult(a, {
                                    accountId: Q.data.accountId,
                                    beacon: "string" == typeof B || B.includes(Q.data.beacon?.beacon_id ?? "") ? Q.data.beacon : null,
                                    locale: Q.data.locale,
                                    pathname: Q.data.pathname,
                                    product: Q.data.product,
                                    visitKey: Q.data.visitKey
                                });
                                if (e && null != Q.data.beacon && N(t, n, Q.data.beacon)) return L.suppressUnsupportedHomeBeacon(a.accountId, Q.data.beacon.beacon_id), L.getHomeVisit(a);
                                e && null != Q.data.beacon && "empty" !== L.getHomeVisit(a).status && j && (L.requestHomeBeaconSuppression(a), z && (0, p.e)(Q.data.beacon) && (0, s.d)(t, Q.data.beacon, R))
                            }
                            let G = L.getSelectedHomeBeacon(a);
                            t.get(y.pagesEnabled$) && null != G && (0, p.g)(G) && L.suppressUnsupportedHomeBeacon(a.accountId, G.beacon_id);
                            let K = L.getSelectedHomeBeacon(a);
                            return null != K && ((0, I.b)(K) && !1 === t.get(I.a) || "codex_fast_mode_home_banner" === K.beacon_id && n.clientContext?.codex_fast_mode_eligible !== !0) ? L.suppressUnsupportedHomeBeacon(a.accountId, K.beacon_id) : j && (L.requestHomeBeaconSuppression(a), z && null != K && (0, p.e)(K) && (0, s.d)(t, K, R)), L.getHomeVisit(a)
                        }(a, t.key, n))
                    })) : void e(L)
                }
            }, {
                autoDispose: !0,
                excludeFieldsFromKey: ["shouldSuppressFocusedModal"]
            });

        function O(e) {
            return null == e.accountId || 0 === e.visitKey.length ? null : {
                accountId: e.accountId,
                locale: e.locale,
                pathname: e.pathname,
                product: e.product,
                visitKey: e.visitKey
            }
        }

        function N(e, t, n) {
            if ("beacon_tooltip_info" !== n.ui_info.type) return !1;
            let a = n.ui_info.target;
            return null != t.browserTooltipTargets ? !t.browserTooltipTargets.some(e => e === a) : (0, d.e)(e, t.product, a)
        }
        n.d(t, {}, {
            a: P,
            b: M
        })
    }),
    Eso4: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e, t) {
                return t.some(t => t.beaconId === e.beacon_id && t.containerId === e.ui_info.container_id)
            },
            b: [{
                beaconId: "cfc_personal_workspace_beacon",
                containerId: "cfc_personal_workspace_beacon"
            }]
        })
    }),
    prHy: (function(e, t, n) {
        var a = n("lAQI"),
            o = n("s4w7"),
            i = n("h6ff"),
            r = n("Eso4");
        let s = a.L().refine(e => e.trim().length > 0, "Home tooltip title must not be blank"),
            l = a.L().nullable().optional().transform(e => e ?? null),
            c = {
                action_items: a.g(a.C()).length(0),
                beacon_name: a.L(),
                show_timing: a.p(["immediate", "wait_until_conversation_refresh"]).optional().default("immediate"),
                type: a.z("beacon_ui_response")
            },
            u = a.Q([a.F({
                ...c,
                beacon_id: a.z("voice_mode_tooltip"),
                ui_info: a.F({
                    subtitle: l,
                    target: a.z("composer-voice-button"),
                    title: s,
                    type: a.z("beacon_tooltip_info")
                }).loose()
            }).loose(), a.F({
                ...c,
                beacon_id: a.z("tpp_nux_tooltip"),
                ui_info: a.F({
                    subtitle: l,
                    target: a.z("tpp-surface-mode-toggle"),
                    title: s,
                    type: a.z("beacon_tooltip_info")
                }).loose()
            }).loose()]),
            _ = a.Q([u, o.j]),
            d = a.Q([i.d, _]);
        n.d(t, {}, {
            a: function(e, t) {
                let n = d.safeParse(e);
                if (n.success) return n.data;
                let a = i.b.safeParse(e);
                return a.success && (0, r.a)(a.data, t) ? a.data : null
            },
            b: d,
            c: function(e) {
                return _.safeParse(e).success
            }
        })
    }),
    fHnT: (function(e, t, n) {
        var a = n("Q840"),
            o = n("OWtl");
        let i = Object.freeze([]),
            r = (0, a.u)(o.a, () => i);
        n.d(t, {}, {
            a: r,
            b: function(e, t, n) {
                e.set(r, e => {
                    if (e.includes(t) === n) return e;
                    if (!n) {
                        let n = e.filter(e => e !== t);
                        return 0 === n.length ? i : Object.freeze(n)
                    }
                    return Object.freeze([...e, t].sort())
                })
            }
        })
    }),
    W44r: (function(e, t, n) {
        var a = n("ABep"),
            o = n("Q840"),
            i = n("zd8w"),
            r = n("Wf1j"),
            s = n("rEML"),
            l = n("Cslg"),
            c = n("h6fL"),
            u = n("hlVK"),
            _ = n("SPzj"),
            d = n("sb2P"),
            p = n("prHy"),
            m = n("KXZK"),
            f = n("U861"),
            g = n("kphc"),
            b = n("ad0f"),
            h = n("bdDz"),
            v = n("vkjh"),
            w = n("mmXj"),
            y = n("OWtl"),
            I = n("RNtx"),
            k = n("fHnT"),
            x = n("s4w7");
        let C = {
            chatgpt: {
                placement: "homepage",
                productExperience: "chat",
                treatment: "tooltip"
            },
            work_tab: {
                placement: "work_tab_home",
                productExperience: "work",
                treatment: "tooltip"
            },
            codex: {
                placement: "codex_home",
                productExperience: "chat",
                treatment: "tooltip"
            }
        };
        n.d(t, {}, {
            a: function(e) {
                let {
                    activationAction: t = "dismiss",
                    allowDesktop: n = !1,
                    children: A,
                    enabled: L,
                    minimumVisibleRatio: E,
                    onReadinessChange: S,
                    previewEnabled: P = L,
                    product: T = "chatgpt",
                    side: M,
                    size: O,
                    target: N
                } = e, H = (0, o.y)(y.a), B = (0, i.useId)(), {
                    accountId: R,
                    userId: U
                } = (0, c.a)(), {
                    locale: z
                } = (0, r.a)(), j = (0, s.Z)(), F = (0, o.z)(f.d), D = (0, o.z)(g.b), q = (0, o.z)(h.c) ?? !1, [V, Q] = (0, i.useState)(null), W = (0, i.useRef)(null), [G, K] = (0, i.useState)(null);
                (0, i.useEffect)(() => {
                    if (null == E || null == V) return;
                    let e = new IntersectionObserver(e => {
                        let [t] = e;
                        K(t?.isIntersecting === !0 && t.intersectionRatio >= E)
                    }, {
                        threshold: E
                    });
                    return e.observe(V), () => e.disconnect()
                }, [E, V]);
                let $ = null == R ? null : (0, d.b)({
                        accountId: R,
                        locale: z,
                        navigationKey: j.key,
                        pathname: j.pathname,
                        product: T
                    }),
                    Y = (0, o.x)(d.d, $ ?? ""),
                    J = "chat";
                "work_tab" === T ? J = "work" : "codex" === T && (J = "codex");
                let X = (0, f.f)(F, {
                        accountId: R,
                        destination: J,
                        pathname: j.pathname,
                        userId: U
                    }),
                    Z = "selected" === Y.status ? Y.beacon : null,
                    ee = X ? F?.beacon ?? null : Z,
                    et = null != ee && (0, p.c)(ee) && ee.ui_info.target === N ? ee : null,
                    en = X && null != F,
                    ea = en && null != et ? P : L,
                    eo = (null == E || !0 === G) && !0 === ea && null != R && ("chatgpt" === T ? "/" === j.pathname && "chat" === D : (0, b.b)(j.pathname)) && null != V,
                    ei = eo && null != et && (!(0, h.l)({
                        hideFirstNewThreadOnboardingPromos: q,
                        pathname: j.pathname
                    }) || (0, x.f)(et.beacon_id) || et.custom_fields?.show_after_onboarding === !0),
                    er = null;
                null != et && (er = en ? `debug:${F.intentId}` : `${$??""}:${et.beacon_id}`);
                let es = null != E && (null == G || G && null == ea);
                (0, i.useEffect)(() => {
                    if (!es || null == S) return;
                    let e = window.setTimeout(() => {
                        S(H, !1)
                    }, 5e3);
                    return () => window.clearTimeout(e)
                }, [es, S, H]), (0, i.useLayoutEffect)(() => null != E ? ((0, k.b)(H, N, eo), S?.(H, es), () => {
                    (0, k.b)(H, N, !1)
                }) : eo ? ((0, k.b)(H, N, !0), () => {
                    (0, k.b)(H, N, !1)
                }) : void 0, [es, eo, E, S, H, N]), (0, i.useEffect)(() => {
                    ei && !en && null != R && null != et && ((0, m.e)(H, R, et), (0, m.d)(H, R, et, C[T]))
                }, [R, en, ei, T, H, et]);
                let el = () => {
                        null == et || null == er || W.current !== er && (W.current = er, en ? (0, f.b)(H, F.intentId) : null != R && ((0, _.b)(H, {
                            action: "dismiss",
                            beacon: et,
                            ...C[T]
                        }), (0, m.b)(H, R, et)))
                    },
                    ec = A({
                        ariaDescribedBy: ei ? B : void 0,
                        isOpen: ei,
                        onActivate: () => {
                            if (ei && null != et && null != er && W.current !== er && H.get(l.f) === R) {
                                if ("click" !== t) return void el();
                                W.current = er, en ? (0, f.b)(H, F.intentId) : null != R && ((0, _.b)(H, {
                                    action: "click",
                                    beacon: et,
                                    ...C[T]
                                }), (0, u.a)({
                                    beacon: et,
                                    eventType: "click",
                                    accountId: R
                                }), (0, m.a)(H, R, et))
                            }
                        },
                        triggerRef: Q
                    });
                return (0, a.jsxs)(v.a, {
                    active: ei,
                    claim: w.a.HomeBeacon,
                    children: [ec, ei && null != et ? (0, a.jsx)(I.a, {
                        id: B,
                        align: "composer-voice-button" === N ? "end" : "center",
                        anchor: V,
                        onDismiss: el,
                        side: M ?? ("composer-voice-button" === N ? "top" : "bottom"),
                        size: O,
                        title: et.ui_info.subtitle ? et.ui_info.title : void 0,
                        body: et.ui_info.subtitle || et.ui_info.title
                    }) : null]
                })
            }
        })
    }),
    DYuz: (function(e, t, n) {
        let a = "enterprise_dot_provisioned_home_takeover",
            o = "enterprise_dot_provisioned_work_takeover",
            i = "dot_retention_home_takeover",
            r = "dot_retention_work_takeover",
            s = "dot_create_home_takeover",
            l = "dot_create_work_takeover",
            c = [a, o],
            u = [...c, i, r, s, l];
        n.d(t, {}, {
            a: u,
            b: function(e) {
                return e === a ? o : e === o ? a : e === i ? r : e === r ? i : e === s ? l : e === l ? s : null
            },
            c: function(e) {
                return u.includes(e)
            },
            d: c
        })
    }),
    lM2P: (function(e, t, n) {
        let a = new Set(["data_analysis_execution", "saved_memory", "response_personalization", "writing_assistance", "step_by_step_guidance", "personalized_advice", "professional_assistance", "conversation_history_search", "file_generation_download", "document_analysis", "connected_apps_access", "voice_conversation", "health_experience", "image_generation", "scheduled_tasks", "deep_research", "interactive_study", "interactive_app_creation"]);
        n.d(t, {}, {
            a: a
        })
    }),
    ESoo: (function(e, t, n) {
        n.d(t, {
            a: () => f,
            b: () => g
        });
        var a = n("lAQI"),
            o = n("hlVK"),
            i = n("M8lA"),
            r = n("yGJW"),
            s = n("wVL6"),
            l = n("eac5"),
            c = n("SPzj"),
            u = n("ycSk"),
            _ = n("wJ7T"),
            d = n("RJnh");
        let p = a.p(["turn_5", "turn_10", "image_gen_turn", "homepage", "conversation_turn", "contextual_conversation_turn"]),
            m = new Set(["auth_app_install_turn_count_banner", "logged_in_ios_mweb_homepage_app_upsell", "no_auth_app_install_turn_count_bottom_sheet", "no_auth_app_install_turn_count_inline_banner", "mweb_app_install_turn_count", "android_mweb_image_turn_app_upsell", "android_mweb_conversation_turn_app_upsell", "android_mweb_paid_conversation_turn_app_upsell", "android_mweb_contextual_app_upsell", "ios_mweb_image_turn_app_upsell", "ios_mweb_conversation_turn_app_upsell", "ios_mweb_contextual_app_upsell", "no_auth_android_mweb_contextual_app_upsell"]);

        function f(e, t) {
            return "open_url" === e.action_v2.action_enum && null != (0, d.b)(e) && m.has(t.beacon_id) && p.safeParse(t.custom_fields?.app_install_source).success
        }
        async function g(e, t) {
            let n = p.safeParse(t.beacon.custom_fields?.app_install_source);
            if (!n.success || !t.allowExternalActions || "open_url" !== e.action_v2.action_enum || !f(e, t.beacon)) return !1;
            let a = t.beacon.custom_fields?.dlid,
                d = "string" == typeof a ? a : crypto.randomUUID(),
                m = "logged_in_ios_mweb_homepage_app_upsell" === t.beacon.beacon_id && t.beacon.custom_fields?.app_install_destination === "singular" ? {
                    href: e.action_v2.url,
                    appLink: e.action_v2.url,
                    deepLinkId: d
                } : function(e) {
                    let {
                        source: t,
                        conversationId: n,
                        deepLinkId: a,
                        medium: o,
                        userAgent: i,
                        appBaseUrl: r,
                        hasAccountSelector: s = !1
                    } = e, l = n ? `c/${encodeURIComponent(n)}` : void 0, c = new URL(l ? `/app/${l}` : "/app", "https://chat.openai.com"), u = new URL(l ? `/${l}` : "/app", "https://chatgpt.com");
                    for (let e of [c, u]) e.searchParams.set("dlid", a), e.searchParams.set("utm_campaign", "mweb_app_install"), e.searchParams.set("utm_content", t);
                    c.searchParams.set("referrer", new URLSearchParams({
                        utm_source: "chatgpt_web",
                        utm_medium: o,
                        dlid: a
                    }).toString());
                    let d = c.href;
                    if (!(/Android/.test(i) && i.includes("Chrome")) || /; wv|webview|fbav|fb_iab|fban|instagram|line\/|kakaotalk|snapchat|tiktok/i.test(i) || /Version\/\d+\.\d+/.test(i)) return {
                        href: d,
                        appLink: d,
                        deepLinkId: a
                    };
                    let p = new URLSearchParams({
                            dlid: a,
                            utm_source: "chatgpt_web",
                            utm_medium: o,
                            utm_campaign: "mweb_app_install",
                            utm_content: t
                        }),
                        m = l ? `${l}?${p}` : `app?${p}`,
                        f = new URL("https://play.google.com/store/apps/details?id=com.openai.chatgpt");
                    f.searchParams.set("referrer", m);
                    let g = ("conversation_turn" === t || "homepage" === t || "contextual_conversation_turn" === t) && (0, _.a)(i),
                        b = null != r && (s || g) ? new URL(`${r.pathname.replace(/\/$/,"")}/update-app`, r) : f;
                    return b !== f && (b.searchParams.set("referrer", m), g && b.searchParams.set("force_account_selector", "true")), {
                        href: `intent://${u.host}${u.pathname}${u.search}#Intent;scheme=https;package=com.openai.chatgpt;S.browser_fallback_url=${encodeURIComponent(b.href)};end`,
                        appLink: d,
                        deepLinkId: a
                    }
                }({
                    source: n.data,
                    conversationId: "auth_app_install_turn_count_banner" === t.beacon.beacon_id || "logged_in_ios_mweb_homepage_app_upsell" === t.beacon.beacon_id || "no_auth_app_install_turn_count_bottom_sheet" === t.beacon.beacon_id || "no_auth_app_install_turn_count_inline_banner" === t.beacon.beacon_id || "no_auth_android_mweb_contextual_app_upsell" === t.beacon.beacon_id ? void 0 : t.eventMetadata?.conversationId,
                    deepLinkId: d,
                    medium: t.analyticsContext?.treatment === "modal" ? "mweb_bottomsheet" : "mweb_banner",
                    userAgent: navigator.userAgent,
                    appBaseUrl: t.appBaseUrl,
                    hasAccountSelector: null != (0, i.getClientBootstrap)().androidInstallAccountSelector
                });
            if ("primary" === e.type) try {
                window.localStorage.removeItem("oai/apps/contextualUpsellId")
            } catch {}
            if (null != t.analyticsContext) try {
                (0, c.b)(t.scope, {
                    action: "click",
                    actionId: e.id,
                    actionType: e.type,
                    beacon: t.beacon,
                    destinationAction: e.action_v2.action_enum,
                    ...t.analyticsContext
                })
            } catch {}
            if ((0, o.a)({
                    beacon: t.beacon,
                    eventType: "click",
                    eventCtaId: e.id,
                    metadata: t.eventMetadata,
                    accountId: t.eventAccountId,
                    keepalive: !0
                }), t.onActionComplete?.(e), (0, u.b)(t.scope, m.deepLinkId, m.appLink), "homepage" === n.data && "auth_app_install_turn_count_banner" === t.beacon.beacon_id && "primary" === e.type && "auth_app_install_turn_count_banner_get_app" === e.id) try {
                let e = t.scope.get(r.c);
                if ("logged_in" === (0, i.getClientBootstrap)().authStatus && "android_web" === (0, s.a)() && "allowed" === e.getAnalyticsAdmission()) {
                    let t = Date.now() + 250;
                    await (0, l.a)(e.flush(250), void 0, t)
                }
            } catch {}
            return window.location.assign(m.href), {
                didComplete: !0,
                eventAccountId: t.eventAccountId,
                shouldResolve: !1
            }
        }
    }),
    ycSk: (function(e, t, n) {
        var a = n("wJ7T"),
            o = n("jsDG"),
            i = n("MVHH"),
            r = n("M8lA"),
            s = n("yGJW"),
            l = n("OMIV");
        let c = new Set(["turn_5", "turn_10", "image_gen_turn", "homepage", "conversation_turn", "contextual_conversation_turn"]);
        n.d(t, {}, {
            a: function(e) {
                try {
                    let t = (0, r.getClientBootstrap)();
                    if (!t.session?.user?.id || !(0, a.a)(navigator.userAgent)) return;
                    let n = e.get(l.g),
                        o = "1506327862";
                    n?.getLayer(o, {
                        disableExposureLog: !0
                    }).get("account_selector_log_exposure", !1) && n.getLayer(o).get("account_selector_enabled", !1)
                } catch {}
            },
            b: function(e, t, n) {
                let a = !1,
                    r = () => {
                        a = !0
                    };
                try {
                    let o = e.get(s.c);
                    window.addEventListener("pagehide", r, {
                        capture: !0,
                        once: !0
                    }), (0, s.a)(e, i.c, {
                        dlid: t,
                        url: function(e, t) {
                            let n = new URL(e);
                            for (let [e, a] of(n.username = "", n.password = "", n.hash = "", Array.from(n.searchParams)))
                                if (!("dlid" === e && a === t || "utm_campaign" === e && "mweb_app_install" === a || "utm_content" === e && c.has(a)))
                                    if ("referrer" === e) {
                                        let o = new URLSearchParams(a);
                                        for (let [e, n] of Array.from(o))("dlid" !== e || n !== t) && ("utm_source" !== e || "chatgpt_web" !== n) && ("utm_medium" !== e || "mweb_banner" !== n && "mweb_bottomsheet" !== n) && o.set(e, "<redacted>");
                                        n.searchParams.set(e, o.toString())
                                    } else n.searchParams.set(e, "<redacted>");
                            return n.href
                        }(n, t)
                    }, e => {
                        window.removeEventListener("pagehide", r, !0), "sent" === e.status && (a || "hidden" === document.visibilityState) && o.flush().catch(() => {})
                    })
                } catch {
                    window.removeEventListener("pagehide", r, !0)
                }
                try {
                    let t;
                    if (e.get(l.g)?.checkGate("2830112640")) return;
                    let a = new URL(window.location.href),
                        i = e => a.searchParams.get(e)?.trim() || void 0,
                        r = {
                            source: i("utm_source"),
                            medium: i("utm_medium"),
                            campaign: i("utm_campaign"),
                            content: i("utm_content"),
                            term: i("utm_term")
                        },
                        c = {
                            notificationId: i("notification_id"),
                            notificationChannelId: i("notification_channel_id"),
                            entryId: i("entry_id"),
                            deepLinkId: i("deep_link_id")
                        };
                    try {
                        t = document.referrer ? new URL(document.referrer).hostname.toLowerCase() : void 0
                    } catch {}
                    t === a.hostname.toLowerCase() && (t = void 0);
                    let u = Object.values(r).some(e => null != e),
                        _ = Object.values(c).some(e => null != e),
                        d = ["gclid", "fbclid", "rdt_cid", "ttclid", "li_fat_id", "msclkid", "oppref", "gbraid", "wbraid"].some(e => null != i(e));
                    if (!u && !_ && !d && !t) return;
                    let p = r.source?.toLowerCase() === "sendgrid" && r.medium?.toLowerCase() === "email",
                        m = new URL(n);
                    for (let e of (m.hash = "", m.searchParams.keys())) m.searchParams.set(e, "redacted");
                    let f = "APP_ENTRY_CHANNEL_UNSPECIFIED";
                    p ? f = "APP_ENTRY_CHANNEL_EMAIL_NOTIFICATION" : null != c.notificationId && (f = "APP_ENTRY_CHANNEL_PUSH_NOTIFICATION"), (0, s.a)(e, o.g, {
                        attribution: {
                            source: p ? "notification_email" : "unspecified",
                            utm: u ? r : void 0,
                            channel: f,
                            ...c,
                            referrerDomain: t
                        },
                        destination: {
                            redactedUrl: m.href
                        },
                        client: {
                            surface: "browser"
                        },
                        fromSurface: "browser",
                        toSurface: "native_app",
                        reason: "mobile_app_upsell"
                    })
                } catch {}
            }
        })
    }),
    nInK: (function(e, t, n) {
        var a = n("nM73"),
            o = n("MwLV"),
            i = n("Cslg"),
            r = n("SHW6"),
            s = n("xcp1"),
            l = n("AOHi"),
            c = n("Kwur"),
            u = n("M8lA"),
            _ = n("Ot7V"),
            d = n("X6Vn"),
            p = n("DAA7"),
            m = n("GaA7"),
            f = n("RlnO"),
            g = n("GDNt"),
            b = n("IDma"),
            h = n("f5h2"),
            v = n("lg1r"),
            w = n("RJnh"),
            y = n("ytyy");

        function I(e, t, n) {
            return (0, w.d)(t) ? (window.open(t, "_blank", "noopener,noreferrer"), !0) : null != n ? (0, _.e)({
                event: n,
                href: t,
                initiator: "open_in_browser_bridge",
                openTarget: e.useExternalBrowser ? "external-browser" : void 0
            }) : (0, _.f)({
                href: t,
                initiator: "open_in_browser_bridge",
                openTarget: e.useExternalBrowser ? "external-browser" : void 0
            })
        }
        n.d(t, {}, {
            a: I,
            b: async function(e, t, _, k) {
                if ((0, h.a)(e)) {
                    let e = m.a.systemPermissions;
                    if (!t.allowExternalActions || null == e) return !1;
                    let n = await e.getNotificationPermissionStatus();
                    if (t.isCurrentPresentation?.() === !1 || null == n) return !1;
                    "not-determined" === n && await e.openNotificationSettings();
                    let a = t.eventAccountId,
                        o = t.featureAccessInputs;
                    if (t.beacon?.beacon_id === "codex_home_notification_banner" && !t.eventMetadata?.suppressLifecycle && !t.analyticsContext?.suppressLifecycle && null != a && o?.authenticatedUserId != null) {
                        let i = "not-determined" === n ? await e.getNotificationPermissionStatus() : n,
                            r = () => t.isCurrentPresentation?.() !== !1 && (0, b.a)(t.scope, a, o.userId);
                        if (!r()) return !1;
                        if ("enabled" !== i) return "disabled" === i;
                        let s = o.authenticatedUserId;
                        try {
                            await c.Request.safePatch("/notifications/settings", {
                                expectedIdentity: {
                                    accountId: a,
                                    userId: s
                                },
                                requestBody: {
                                    updates: {
                                        library: {
                                            push: !0
                                        }
                                    }
                                },
                                signal: AbortSignal.timeout(1e4)
                            })
                        } catch (e) {
                            if (!r()) return !1;
                            if (e instanceof g.a && 403 === e.status && "Notification setting is not editable" === (0, l.c)(e)) return !0;
                            return (0, h.b)(t.scope), !1
                        }
                        let u = {
                            queryKey: ["chatgpt-notification-settings", s, a],
                            exact: !0
                        };
                        await t.scope.queryClient.cancelQueries(u), t.scope.queryClient.invalidateQueries({
                            ...u,
                            refetchType: (0, b.a)(t.scope, a, o.userId) ? "active" : "none"
                        })
                    }
                    return !0
                }
                let x = _;
                if ("open_local_url" === e.action_v2.action_enum) {
                    if ("/settings/cloud-environments?select=default" === x && t.beacon?.beacon_id === "codex_cloud_home_modal_v2") {
                        let [{
                            blankCloudEnvironmentAvailable$: e
                        }, {
                            startNewConversation: a
                        }] = await Promise.all([Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(226913), n.e(278858)]).then(n.bind(n, "cLiZ")), Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(226913), n.e(299270)]).then(n.bind(n, "Q8aV"))]), o = t.eventAccountId;
                        if (t.isCurrentPresentation?.() === !1 || null == o || !(0, b.a)(t.scope, o, t.featureAccessInputs?.userId)) return !1;
                        if (t.scope.get(e)) {
                            let e = !1;
                            return a(t.scope, {
                                codexAppMode: "codex",
                                defaultCloudEnvironment: !0,
                                prefillComposerMode: "local",
                                prefillCloudThreadPrototype: !0,
                                freshDraft: !0,
                                onNavigate: () => {
                                    e = !0
                                }
                            }), e
                        }
                        return t.navigate("/settings/cloud-environments"), !0
                    }
                    if (/^\/admin\/members(?:[?#]|$)/u.test(e.action_v2.web_url)) {
                        let t;
                        (0, o.c)() && !/^local-[a-z0-9-]+\.chatgpt-staging\.com$/i.test(window.location.hostname) ? t = window.location.origin : "openai-dev" === (0, u.getClientBootstrap)().auth.provider && (t = "https://chatgpt-staging.com"), null != t && (x = new URL(e.action_v2.web_url, t).toString())
                    }
                    let r = (0, v.a)(x);
                    if (null != r) {
                        let e = t.scope.get(i.f),
                            n = t.scope.get(i.k);
                        if (!t.allowExternalActions || null == e || null == n || "allowed" !== t.scope.get(f.a).status) return !1;
                        let o = await (0, a.a)();
                        return t.isCurrentPresentation?.() !== !1 && !!(0, b.a)(t.scope, e, n) && "allowed" === t.scope.get(f.a).status && ((0, d.f)(t.scope, o, {
                            ...r,
                            accountId: e,
                            userId: n
                        }), !0)
                    }
                    let l = (0, s.a)(x);
                    if (null != l) {
                        if (!t.allowExternalActions) return !1;
                        let {
                            openTrustedContactBeaconAction: e
                        } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(904661)]).then(n.bind(n, "bLYh"));
                        return e(l, {
                            scope: t.scope,
                            navigate: t.navigate
                        }), !0
                    }
                    if ("/?open=workspace-discovery" === x) {
                        let e = t.scope.get(i.f),
                            a = t.scope.get(i.k);
                        if (null == e || null == a || !(0, b.a)(t.scope, e, a)) return !1;
                        let {
                            loadWorkspaceDiscoveryOpener: o
                        } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629)]).then(n.bind(n, "gv9R")), r = await o();
                        return !!(0, b.a)(t.scope, e, a) && (r(t.scope, a, "link" === t.source ? void 0 : (0, y.b)(t.beacon)), !0)
                    }
                }
                if (t.allowExternalActions && /^(?:https:\/\/[^/]+)?\/admin(?:[/?#]|$)/u.test(x)) {
                    let e = (0, p.c)(t.scope, x, t.featureAccessInputs?.accountId),
                        n = null == e ? null : await e;
                    if (null != n) return t.isCurrentPresentation?.() !== !1 && I({
                        ...t,
                        useExternalBrowser: !0
                    }, n, k)
                }
                if ((0, w.f)(x)) {
                    let n = (0, r.a)(e),
                        a = n?.searchParams.get("prompt");
                    return "open_local_url" === e.action_v2.action_enum && !0 !== e.action_v2.trigger_turn && n?.pathname === "/" && a ? t.navigate(x, {
                        prefillPrompt: a.replace(/\r\n/g, "\n"),
                        focusComposerNonce: Date.now()
                    }) : t.navigate(x), !0
                }
                return I(t, x, k)
            }
        })
    }),
    f5h2: (function(e, t, n) {
        var a = n("SGsN"),
            o = n("svjy");
        n.d(t, {}, {
            a: function(e) {
                return "open_local_url" === e.action_v2.action_enum && "/?open=notification-settings" === e.action_v2.web_url
            },
            b: function(e) {
                e.get(a.f).danger(e.get(o.a).formatMessage({
                    id: "chatgpt.beacons.notifications.toast.enable_failed",
                    defaultMessage: "Couldn't turn on notifications. Try again later."
                }), {
                    errorAnalytics: {
                        toastId: "chatgpt.beacons.notifications.toast.enable_failed"
                    }
                })
            }
        })
    }),
    AVl4: (function(e, t, n) {
        var a = n("Q840"),
            o = n("AuIy"),
            i = n("hlVK"),
            r = n("Kwur"),
            s = n("dQRk"),
            l = n("hx97"),
            c = n("Ot7V"),
            u = n("OWtl"),
            _ = n("IDma"),
            d = n("SPzj");
        let p = new WeakMap,
            m = (0, a.d)(u.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (e?.conversationId == null || null == e.messageId) return null;
                let a = n(s.N, e.conversationId);
                if (null == a) return;
                let i = (0, o.a)({
                    mapping: a,
                    current_node: e.messageId
                }).findLast(l.o);
                return i?.author.role === "user" ? i.id : null
            });
        n.d(t, {}, {
            a: m,
            b: function(e, t) {
                let n = e.action_v2;
                if ("create_presence_session" !== n.action_enum || !e.id || !n.launch_attempt_id || t.eventMetadata?.conversationId !== n.conversation_id || !t.eventMetadata.messageId) return {
                    status: "unsupported"
                };
                let a = t.featureAccessInputs;
                if (void 0 === t.presencePromptId || null == a || a.authLoading || a.accountLoading) return {
                    status: "pending"
                };
                if (t.presencePromptId !== n.message_id) return {
                    status: "unsupported"
                };
                let o = t.eventAccountId ?? a.authenticatedAccountId,
                    s = a.userId;
                if (!t.allowExternalActions || null == o || null == s || "chatgpt" !== a.authMethod || a.accountId !== o || a.authenticatedAccountId !== o) return {
                    status: "unavailable"
                };
                let l = () => (0, _.a)(t.scope, o, s) && (t.isCurrentPresentation?.() ?? !1);
                return {
                    status: "supported",
                    handler: async () => {
                        if (!l()) return !1;
                        let a = p.get(t.scope);
                        null == a && (a = new WeakMap, p.set(t.scope, a));
                        let u = a.get(t.beacon);
                        null == u && (u = new Map, a.set(t.beacon, u));
                        let _ = JSON.stringify([o, s, n.conversation_id, n.message_id, n.launch_attempt_id]),
                            m = u.get(_);
                        (null == m || m.completed || null === m.result) && (m = {
                            creation: Promise.resolve().then(async () => {
                                if (!l()) return null;
                                try {
                                    let e = await r.Request.safePost("/buying-advisor/session", {
                                        additionalHeaders: {
                                            "ChatGPT-Account-ID": o,
                                            "x-openai-use-sheep": "1"
                                        },
                                        expectedIdentity: {
                                            accountId: o,
                                            userId: s
                                        },
                                        expectedErrorStatuses: [403, 404, 409, 429],
                                        requestBody: {
                                            conversation_id: n.conversation_id,
                                            message_id: n.message_id,
                                            launch_attempt_id: n.launch_attempt_id
                                        },
                                        retry: "never",
                                        signal: AbortSignal.timeout(55e3)
                                    });
                                    return e.client_secret?.trim() && Number.isFinite(e.client_secret_expires_at) && e.client_secret_expires_at > Date.now() / 1e3 ? {
                                        clientSecret: e.client_secret,
                                        expiresAt: e.client_secret_expires_at
                                    } : null
                                } catch {
                                    return null
                                }
                            }),
                            completed: !1
                        }, u.set(_, m), (0, i.a)({
                            beacon: t.beacon,
                            eventType: "click",
                            eventCtaId: e.id,
                            metadata: t.eventMetadata,
                            accountId: o,
                            keepalive: !0
                        }), null != t.analyticsContext && (0, d.b)(t.scope, {
                            action: "click",
                            actionId: e.id,
                            actionType: e.type,
                            beacon: t.beacon,
                            destinationAction: n.action_enum,
                            ...t.analyticsContext
                        }));
                        let f = await m.creation;
                        if (m.result = f, !l() || m.completed) return !1;
                        m.completed = !0, t.onActionComplete?.(e);
                        let g = new URL("https://openai.com/buying-agent/");
                        return g.search = new URLSearchParams({
                            utm_source: "chatgpt.com",
                            utm_medium: "beacon",
                            utm_campaign: "enterprise_plan_comparison_intent"
                        }).toString(), null != f && f.expiresAt > Date.now() / 1e3 && (g.hash = new URLSearchParams({
                            baps: f.clientSecret
                        }).toString()), (0, c.f)({
                            href: g.href,
                            disposition: "current-tab",
                            initiator: "open_in_browser_bridge"
                        }), {
                            didComplete: !0,
                            eventAccountId: o,
                            shouldResolve: !1
                        }
                    }
                }
            }
        })
    }),
    s4w7: (function(e, t, n) {
        var a = n("Q840"),
            o = n("lAQI"),
            i = n("fHnT"),
            r = n("kphc"),
            s = n("ad0f"),
            l = n("OWtl"),
            c = n("qixt");
        let u = "space_onboarding",
            _ = "sidebar-space-button",
            d = (0, a.c)(l.a, e => {
                let {
                    get: t
                } = e;
                if (!t(c.d)) return "codex";
                let n = t(r.b);
                return "chat" === n ? "chatgpt" : "work" === n ? "work_tab" : null
            }),
            p = (0, a.u)(l.a, !1),
            m = (0, a.v)(l.a, e => !1),
            f = o.F({
                action_items: o.g(o.C()).length(0),
                beacon_id: o.z(u),
                beacon_name: o.L(),
                show_timing: o.p(["immediate", "wait_until_conversation_refresh"]).optional().default("immediate"),
                type: o.z("beacon_ui_response"),
                ui_info: o.F({
                    subtitle: o.L().refine(e => e.trim().length > 0),
                    target: o.z(_),
                    title: o.L().refine(e => e.trim().length > 0),
                    type: o.z("beacon_tooltip_info")
                }).loose()
            }).loose();
        n.d(t, {}, {
            a: u,
            b: _,
            c: d,
            d: function(e, t, n) {
                return e.get(d) === t && (0, s.b)(n) && e.get(p)
            },
            e: function(e, t, n) {
                return n === _ && (e.get(d) !== t || !e.get(i.a).includes(_))
            },
            f: function(e) {
                return e === u
            },
            g: function(e, t, n, a) {
                return e.get(d) === t && (0, s.b)(n) && !e.get(m, a) && e.get(i.a).includes(_)
            },
            h: m,
            i: p,
            j: f
        })
    }),
    tMkG: (function(e, t, n) {
        var a = n("ABep"),
            o = n("QosV"),
            i = n("Q840"),
            r = n("zd8w"),
            s = n("s4w7"),
            l = n("Bbed"),
            c = n("OWtl");
        let u = (0, l.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(979021)]).then(n.bind(n, "q2wP"))).SpaceHomeTooltipTarget, {
            suspendToParent: !0,
            errorFallback: e => (0, a.jsx)(_, {
                ...e
            })
        });

        function _(e) {
            let t, n, a, l = (0, o.c)(5),
                {
                    children: u
                } = e,
                _ = (0, i.y)(c.a);
            return l[0] !== _ ? (t = () => {
                _.set(s.i, !1)
            }, n = [_], l[0] = _, l[1] = t, l[2] = n) : (t = l[1], n = l[2]), (0, r.useLayoutEffect)(t, n), l[3] !== u ? (a = u({
                ariaDescribedBy: void 0,
                isOpen: !1,
                onActivate: p,
                triggerRef: d
            }), l[3] = u, l[4] = a) : a = l[4], a
        }

        function d() {}

        function p() {}
        n.d(t, {}, {
            a: function(e) {
                let {
                    children: t,
                    ...n
                } = e, o = (0, i.y)(c.a), l = (0, r.useRef)(null), _ = (0, r.useCallback)(() => {
                    null != l.current && (window.clearTimeout(l.current), l.current = null)
                }, []), d = e => (0, r.cloneElement)(t(e), n);
                (0, r.useEffect)(() => () => {
                    _(), o.set(s.i, !1)
                }, [_, o]);
                let p = d({
                    ariaDescribedBy: void 0,
                    isOpen: !1,
                    onActivate: () => void 0,
                    triggerRef: e => {
                        if (null != e) {
                            o.set(s.i, !0), _();
                            let e = window.setTimeout(() => {
                                l.current === e && (l.current = null), o.set(s.i, !1)
                            }, 5e3);
                            return l.current = e, () => {
                                window.clearTimeout(e), l.current === e && (l.current = null)
                            }
                        }
                    }
                });
                return (0, a.jsx)(r.Suspense, {
                    fallback: p,
                    children: (0, a.jsx)(u, {
                        onMount: _,
                        children: d
                    })
                })
            }
        })
    }),
    oHzU: (function(e, t, n) {
        let a = Symbol("sheepHomeEventIdentity");

        function o(e) {
            return "beacon_banner_info" === e.ui_info.type
        }

        function i(e) {
            return "beacon_modal_info" === e.ui_info.type
        }

        function r(e) {
            return "beacon_multi_page_modal_info" === e.ui_info.type
        }

        function s(e) {
            return "beacon_container_info" === e.ui_info.type
        }

        function l(e) {
            return "beacon_homepage_takeover_info" === e.ui_info.type
        }

        function c(e) {
            return "library_provider_onboarding_refresh" === e.beacon_id && "beacon_container_info" === e.ui_info.type && "library_google_drive_sidebar_tooltip" === e.ui_info.container_id
        }
        n.d(t, {}, {
            a: o,
            b: function(e) {
                return null != e && s(e) && "cfc_personal_workspace_beacon" === e.beacon_id && "cfc_personal_workspace_beacon" === e.ui_info.container_id
            },
            c: s,
            d: function(e) {
                return "beacon_conversation_inline_info" === e.ui_info.type
            },
            e: function(e) {
                return o(e) || c(e) || l(e) || i(e) || r(e) || "beacon_tooltip_info" === e.ui_info.type
            },
            f: l,
            g: c,
            h: i,
            i: r,
            j: function(e) {
                return "personalized_information_questionnaire" === e.beacon_id && 2 === e.action_items.length && e.action_items.every(e => "submit_personalized_information_questionnaire_feedback" === e.action_v2.action_enum)
            },
            k: a
        })
    }),
    lg1r: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e) {
                let t;
                try {
                    t = new URL(e, "https://chatgpt.com")
                } catch {
                    return null
                }
                if ("https://chatgpt.com" !== t.origin || "/u18-graduation/no-parent" !== t.pathname && "/u18-graduation/teen-unlink" !== t.pathname) return null;
                let n = "/u18-graduation/no-parent" === t.pathname ? "no-parent" : "teen-unlink",
                    a = t.searchParams.get("help_url");
                if (null != a) try {
                    let e = new URL(a);
                    if ("https://help.openai.com" === e.origin && "" === e.username && "" === e.password) return {
                        kind: n,
                        helpUrl: e.href
                    }
                } catch {}
                return {
                    kind: n,
                    helpUrl: "https://help.openai.com/en/articles/20001262"
                }
            }
        })
    }),
    aoML: (function(e, t, n) {
        var a = n("Q840"),
            o = n("rEML"),
            i = n("aTcy"),
            r = n("G4Vg"),
            s = n("laUo"),
            l = n("DVML"),
            c = n("AleY"),
            u = n("vV6o"),
            _ = n("OWtl"),
            d = n("hZax"),
            p = n("OMIV"),
            m = n("LjYy");
        let f = "1648954249",
            g = (0, a.h)(_.a, e => {
                let {
                    get: t
                } = e, n = t(p.g);
                return null == n ? null : (0, d.d)(n, f)
            }, e => {
                let {
                    get: t,
                    set: n
                } = e, a = t(p.g);
                if (null == a) return;
                let o = () => {
                    n((0, d.d)(a, f))
                };
                return a.on("values_updated", o), () => {
                    a.off("values_updated", o)
                }
            });

        function b(e, t) {
            let n, {
                    accountId: a,
                    appBaseUrl: i,
                    currentPath: c,
                    eventMetadata: _,
                    rejoinPro: d,
                    goRejoinPlusTreatment: p
                } = t,
                f = e.action_v2,
                g = "pricing",
                b = "",
                h = null;
            switch (f.action_enum) {
                case "get_go":
                    h = f.promo_campaign_id ?? null, n = m.a.GO;
                    break;
                case "get_plus":
                    h = f.promo_campaign_id ?? null, n = m.a.PLUS, "direct" === f.checkout_mode && null == p && (g = "direct", b = (0, u.e)(s.f, i) ?? "");
                    break;
                case "get_pro":
                    if (null != f.pro_offer) return null;
                    n = m.a.PRO;
                    break;
                case "open_plan_pricing":
                    n = ({
                        go: m.a.GO,
                        plus: m.a.PLUS,
                        promax: m.a.PROMAX,
                        team: m.a.SELF_SERVE_BUSINESS
                    })[f.plan_sku];
                    break;
                case "get_team":
                    n = m.a.SELF_SERVE_BUSINESS, "direct" === f.checkout_mode && (g = "direct", b = (0, u.e)(s.c, i) ?? "");
                    break;
                default:
                    return null
            }
            if ("direct" === g && 0 === b.length) return null;
            let v = n === m.a.SELF_SERVE_BUSINESS ? null : (0, r.h)(c),
                w = (0, r.g)(v),
                y = w === _?.conversationId ? w : null,
                I = {
                    accountId: a,
                    checkoutMode: g,
                    promoCampaignId: h,
                    returnPath: null == y ? "/" : v ?? "/",
                    sourceThreadId: y,
                    targetPlan: n,
                    upsellContextId: f.upsell_context_id ?? null
                },
                k = (0, r.c)("pricing" === g ? (0, o.A)((0, l.c)({
                    pathname: (0, o.N)(I.returnPath).pathname
                })) : b, I),
                x = "get_pro" === f.action_enum && d?.accountId === a ? d : void 0;
            if (null != x) {
                let e = new URL(k, i);
                e.searchParams.set("cta_tab", "personal"), e.searchParams.set("highlight_plan", "pro"), e.searchParams.set("pro_variant", "2x"), k = (0, o.A)(e)
            }
            return null == (0, r.k)(new URL(k, "https://chatgpt.com").search) ? null : {
                deferCompletion: "direct" === g && n === m.a.SELF_SERVE_BUSINESS,
                href: k,
                intent: I,
                ...null == x ? {} : {
                    rejoinPro: x
                }
            }
        }
        n.d(t, {}, {
            a: g,
            b: function(e) {
                return e.accountLoading || e.authLoading || "chatgpt" !== e.authMethod || !0 !== e.supportedSurface || null == e.accountId || e.accountId !== e.authenticatedAccountId ? null : e.accountId
            },
            c: b,
            d: function(e, t, n) {
                return null != t.appBaseUrl && null != b(e, {
                    accountId: t.upgradeAccountId ?? "beacon-preflight",
                    appBaseUrl: t.appBaseUrl,
                    currentPath: t.currentPath ?? "/",
                    eventMetadata: t.eventMetadata,
                    goRejoinPlusTreatment: n
                })
            },
            e: function(e, t) {
                let n = function(e) {
                    let t, n, a = e.action_v2;
                    if ("get_go" !== a.action_enum && "get_plus" !== a.action_enum && "get_pro" !== a.action_enum && "get_team" !== a.action_enum) return null;
                    switch (a.action_enum) {
                        case "get_go":
                            t = (n = a.promo_campaign_id) ? i.i : i.g;
                            break;
                        case "get_plus":
                            n = a.promo_campaign_id, t = "direct" === a.checkout_mode ? s.f : (0, i.v)(m.a.PLUS);
                            break;
                        case "get_pro":
                            if (null != a.pro_offer) return null;
                            t = (0, i.v)(m.a.PRO);
                            break;
                        case "get_team":
                            t = "direct" === a.checkout_mode ? s.c : i.g
                    }
                    if (!n) return t;
                    let o = new URL(t);
                    return t !== s.f && (0, c.a)(o, void 0), n && o.searchParams.set("promo_campaign", n), o.href
                }(e);
                if (null == n || null == t.upgradeAccountId || null == t.currentPath || t.isCurrentPresentation?.() === !1) return !1;
                let a = new URL(t.currentPath, "https://chatgpt.com"),
                    r = new URL(n),
                    u = null == t.appBaseUrl ? null : b(e, {
                        accountId: t.upgradeAccountId,
                        appBaseUrl: t.appBaseUrl,
                        currentPath: t.currentPath,
                        eventMetadata: t.eventMetadata
                    });
                if (u?.intent.checkoutMode !== "pricing") return !1;
                let _ = u.intent.targetPlan === m.a.SELF_SERVE_BUSINESS;
                r.searchParams.set("cta_tab", _ ? "business" : "personal"), r.searchParams.set("highlight_plan", u.intent.targetPlan);
                let d = `${a.pathname}${a.search}${a.hash}`;
                for (let [e, t] of r.searchParams) a.searchParams.set(e, t);
                return t.navigate((0, o.A)((0, l.c)({
                    pathname: a.pathname,
                    search: a.search
                })), {
                    defaultTab: _ ? "business" : "personal",
                    returnPath: d,
                    source: "conversation_followup_shelf_link"
                }), !0
            },
            f: function(e, t) {
                let n = "string" == typeof t ? t : function(e) {
                    switch (e.ui_info.type) {
                        case "beacon_banner_info":
                            return `beacon-banner-${e.beacon_id}`;
                        case "beacon_conversation_inline_info":
                            return `beacon-conversation-inline-${e.beacon_id}`;
                        case "beacon_homepage_takeover_info":
                            return `beacon-homepage-takeover-${e.beacon_id}`;
                        case "beacon_modal_info":
                            return `beacon-modal-${e.beacon_id}`;
                        case "beacon_bottom_sheet_info":
                        case "beacon_container_info":
                        case "beacon_multi_page_modal_info":
                        case "beacon_tooltip_info":
                            return null
                    }
                }(t);
                if (null == e || "LocalOverride" !== e.details.reason && e.details.reason?.endsWith(":Recognized") !== !0 || null == n) return !1;
                if (!e.get("suppress_upsell", !1)) return !0;
                let a = e.get("allowed_frontend_entry_point_locations_for_upsell_suppression", []);
                return Array.isArray(a) && a.every(e => "string" == typeof e) && a.includes(n)
            }
        })
    }),
    RJnh: (function(e, t, n) {
        n.d(t, {
            a: () => g,
            b: () => l,
            c: () => f,
            d: () => p,
            e: () => c,
            f: () => d,
            g: () => _,
            h: () => m,
            i: () => u
        });
        var a = n("rEML"),
            o = n("dQkk"),
            i = n("aTcy"),
            r = n("lAQI");
        let s = r.F({
            background_valdi_artwork_url: r.L().optional().catch(void 0),
            background_valdi_artwork_url_dark: r.L().optional().catch(void 0)
        });

        function l(e) {
            let t = e.action_v2,
                n = null;
            if ("open_url" === t.action_enum) n = t.url;
            else if ("open_local_url" === t.action_enum && (n = c(e) ? "/automations" : t.web_url, /^\/admin\/members(?:[?#]|$)/.test(n))) return new URL(n, i.h).toString();
            if (null != n && (/^\/codex(?:\/get-started)?\/?(?:[?#]|$)/.test(n) || /^\/students\/2026\/?(?:[?#]|$)/.test(n))) return `https://chatgpt.com${n}`;
            if (n?.startsWith("#")) {
                let e = (0, o.a)({
                    pathname: "/",
                    search: "",
                    hash: n
                });
                if (null != e) return (0, a.A)(e)
            }
            return null != n && _(n) ? n : null
        }

        function c(e) {
            return "open_local_url" === e.action_v2.action_enum && "/tasks" === e.action_v2.web_url
        }

        function u(e) {
            return "open_local_url" === e.action_v2.action_enum && "/?open=workspace-discovery" === l(e)
        }

        function _(e) {
            return e.startsWith("http://") || e.startsWith("https://") || e.startsWith("codex://") && !1 || d(e) || p(e)
        }

        function d(e) {
            return e.startsWith("/") && !e.startsWith("//")
        }

        function p(e) {
            return /^(?:vscode|cursor|windsurf):extension\/openai\.chatgpt$/.test(e)
        }

        function m(e) {
            return e.startsWith("https://") || e.startsWith("http://") || /^data:image\/svg\+xml;base64,(?=[A-Za-z0-9+/])(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
        }

        function f(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            if (!n || "none" === e.foreground_image_layout.type) return null;
            let a = t && null != e.foreground_image_url_dark ? e.foreground_image_url_dark : e.foreground_image_url;
            return m(a) ? a : null
        }

        function g(e, t) {
            let n = s.parse(e.custom_fields ?? {}),
                a = t ? n.background_valdi_artwork_url_dark ?? n.background_valdi_artwork_url : n.background_valdi_artwork_url;
            return null != a && function(e) {
                try {
                    let t = new URL(e);
                    return "https://cdn.openai.com" === t.origin && "" === t.username && "" === t.password && t.pathname.startsWith("/beacons/") && t.pathname.endsWith(".json")
                } catch {
                    return !1
                }
            }(a) ? a : null
        }
    }),
    aqNX: (function(e, t, n) {
        var a = n("E8Sp"),
            o = n("Cslg"),
            i = n("kYSX"),
            r = n("LLIt"),
            s = n("lTvi"),
            l = n("TFzY"),
            c = n("g2p6"),
            u = n("sMGP"),
            _ = n("qJjJ"),
            d = n("kphc"),
            p = n("nlNF"),
            m = n("Q3tq"),
            f = n("tzYO");
        n.d(t, {}, {
            a: async function(e, t) {
                if (!e.get(i.k)) return {};
                let n = e.get(o.f),
                    g = e.get(o.k),
                    b = e.get(a.b).pathname,
                    h = e.get(p.e);
                if (null == n || null == g) return null;
                try {
                    if (await Promise.all([e.query.getOrFetch(s.b), e.query.getOrFetch(u.a), (0, f.c)(e)]), e.get(_.f) && await e.query.getOrFetch(c.p), t?.() === !1 || e.get(a.b).pathname !== b || e.get(p.e) !== h || e.get(o.f) !== n || e.get(o.k) !== g || !(0, d.h)(e) || !e.get(i.k)) return null;
                    let v = e.get(s.b).data,
                        w = v && function(e, t) {
                            let {
                                selection: n,
                                hasExplicitThinkingEffort: a
                            } = e.get(_.e), o = e => {
                                let n = t.modelConfigBySlug?.[e];
                                return n?.isWorkModeModel === !0 && !0 !== n.disabledByAdmin
                            }, i = t.versionOptions ?? [], s = new Set([...t.disabledVersionSlugs ?? [], ...i.flatMap(e => [...e.slugs, ...e.options.map(e => e.slug)])]), c = (t.sliderSettings ?? []).map(e => {
                                let {
                                    modelSlug: t,
                                    thinkingEffort: n
                                } = e;
                                return {
                                    slug: t,
                                    thinkingEffort: n,
                                    versionId: null
                                }
                            }).filter(e => o(e.slug) && !s.has(e.slug) && (0, l.e)(t, e)?.isAvailable !== !1), u = new Set(c.map(e => e.slug)), d = t.options.filter(e => !s.has(e.slug) && (null != e.thinkingEffort || !u.has(e.slug))), p = [...i.filter(e => !1 !== e.enabled), {
                                id: null,
                                options: d
                            }].flatMap(e => {
                                let {
                                    id: t,
                                    options: n
                                } = e;
                                return n.filter(e => o(e.slug) && !1 !== e.isAvailable).map(e => (0, l.j)(e, t))
                            });
                            p.push(...c);
                            let f = e.get(m.b),
                                g = e => null == e || f.has(r.a[e]),
                                b = p.filter(e => g(e.thinkingEffort)),
                                h = (0, l.m)(t);
                            for (let e of [n, h]) {
                                if (null == e || !o(e.slug)) continue;
                                let i = e.thinkingEffort ?? t.defaultThinkingEffortByModelSlug?.[e.slug] ?? null,
                                    r = null != e.thinkingEffort && (e === h || e === n && a);
                                if (b.length > 0 && !g(i) && !r) continue;
                                let c = p.filter(t => t.slug === e.slug && t.thinkingEffort === i),
                                    _ = c.find(t => t.versionId === e.versionId) ?? c[0];
                                if (null != _) return _;
                                if (!s.has(e.slug) && !u.has(e.slug)) {
                                    let n = (0, l.e)(t, e);
                                    if (null != n && !1 !== n.isAvailable) return (0, l.j)(n, null)
                                }
                            }
                            let v = b.length > 0 ? b : p;
                            return v.find(e => e.slug === n.slug) ?? v.find(e => e.slug === t.defaultModelSlug) ?? v[0]
                        }(e, v);
                    return null == w ? null : {
                        model: w
                    }
                } catch {
                    return null
                }
            }
        })
    }),
    ytyy: (function(e, t, n) {
        var a = n("lAQI");
        let o = "workspace_discovery_plugin_usage_banner",
            i = a.F({
                beaconId: a.p(["workspace_discovery_home_banner", o]),
                copyVariant: a.p(["company_pays", "bring_your_work"]).optional().catch(void 0)
            });
        n.d(t, {}, {
            a: o,
            b: function(e) {
                let t = i.safeParse({
                    beaconId: e.beacon_id,
                    copyVariant: "workspace_discovery_home_banner" === e.beacon_id ? e.custom_fields?.workspace_discovery_copy_variant : void 0
                });
                return t.success ? t.data : void 0
            }
        })
    })
};