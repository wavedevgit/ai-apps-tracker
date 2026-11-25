export const __rspack_esm_ids = [337882];
export const __webpack_modules__ = {
    hlVK: (function(a, b, c) {
        var d = c("vUFP"),
            e = c("lAQI"),
            f = c("QdUF"),
            g = c("s4w7"),
            h = c("oHzU"),
            i = c("Kwur"),
            j = c("U861");
        let k = new Map,
            l = new Map,
            m = e.F({
                benefit_id: e.p(["data_analysis_execution", "saved_memory", "response_personalization", "writing_assistance", "step_by_step_guidance", "personalized_advice", "professional_assistance", "conversation_history_search", "file_generation_download", "document_analysis", "connected_apps_access", "scheduled_tasks", "voice_conversation", "health_experience", "image_generation", "deep_research", "interactive_study", "interactive_app_creation"]),
                copy_source: e.p(["contextual", "fixed", "paid_social"]).optional().catch(void 0),
                copy_fallback_reason: e.p(["disabled", "missing", "empty", "too_long", "invalid_format"]).optional().catch(void 0),
                copy_prompt_version: e.z("v1").optional().catch(void 0)
            });
        c.d(b, {}, {
            a: async function(a) {
                let {
                    beacon: b,
                    eventType: c,
                    eventCtaId: e,
                    metadata: n,
                    accountId: o,
                    expectedIdentity: p = b[h.k],
                    keepalive: q
                } = a, r = p?.accountId ?? o;
                if ((0, j.e)(b.beacon_id) || n?.suppressLifecycle === !0 || b.beacon_id === g.a && null != r && l.has(r)) return;
                let s = (async () => {
                    try {
                        let a = null == p ? "/beacons/event" : "/beacons/v2/event";
                        await i.Request.safePost(a, {
                            keepalive: q,
                            expectedIdentity: p,
                            assertRequestCurrent: null != r ? () => {
                                if ((0, f.isBrowserWorkspaceSwitchPending)()) throw new DOMException("Workspace switch pending", "AbortError")
                            } : void 0,
                            additionalHeaders: null == r ? void 0 : {
                                "ChatGPT-Account-ID": r,
                                ...{
                                    [d.ec]: r
                                },
                                ...null != p ? {
                                    "x-openai-use-sheep": "1"
                                } : {}
                            },
                            requestBody: {
                                beacon_id: b.beacon_id,
                                conversation_id: n?.conversationId ?? void 0,
                                event_type: c,
                                event_cta_id: e,
                                message_id: n?.messageId ?? void 0,
                                tracking_id: b.tracking_id ?? void 0,
                                ... function(a) {
                                    if ("no_auth_login_upsell_banner" !== a.beacon_id) return {};
                                    let b = m.safeParse(a.custom_fields);
                                    if (!b.success) return {};
                                    let c = b.data;
                                    return {
                                        benefit_id: c.benefit_id,
                                        copy_source: c.copy_source,
                                        copy_fallback_reason: "fixed" === c.copy_source ? c.copy_fallback_reason : void 0,
                                        copy_prompt_version: "contextual" === c.copy_source || "fixed" === c.copy_source ? c.copy_prompt_version : void 0
                                    }
                                }(b)
                            }
                        })
                    } catch {}
                })();
                if (b.beacon_id === g.a && null != r) {
                    let a = k.get(r);
                    null == a && (a = new Set, k.set(r, a)), a.add(s), s.then(() => {
                        a.delete(s), 0 === a.size && k.delete(r)
                    })
                }
                await s
            }
        })
    }),
    IDma: (function(a, b, c) {
        var d = c("Cslg");
        c.d(b, {}, {
            a: function(a, b, c) {
                let e = a.get(d.n);
                return "chatgpt" === e.authMethod && !e.authLoading && !e.accountLoading && e.accountId === b && e.authenticatedAccountId === b && e.userId === c
            }
        })
    }),
    j1n5: (function(a, b, c) {
        c.d(b, {
            a: () => Y,
            b: () => Z,
            c: () => $,
            d: () => _,
            e: () => ab,
            f: () => ac
        });
        var d = c("StMt"),
            e = c("twmu"),
            f = c("Cslg"),
            g = c("xcp1"),
            h = c("iLYI"),
            i = c("p4N2"),
            j = c("f19s"),
            k = c("kphc"),
            l = c("dFbl"),
            m = c("jUaO");
        c("AleY");
        var n = c("GaA7"),
            o = c("aepO"),
            p = c("CmBE"),
            q = c("n5GS"),
            r = c("Kwur"),
            s = c("SGsN"),
            t = c("svjy"),
            u = c("GDNt"),
            v = c("IDma"),
            w = c("BHyM");
        let x = new WeakMap;
        var y = c("d58w"),
            z = c("Nu9C"),
            A = c("E8Sp"),
            B = c("g2p6"),
            C = c("X6Vn"),
            D = c("liTb"),
            E = c("S3zc"),
            F = c("riYK"),
            G = c("dQRk"),
            H = c("nlNF"),
            I = c("lM2P");
        let J = new Set(["enterprise_dot_provisioned_home_takeover", "enterprise_dot_provisioned_work_takeover", "dot_retention_home_takeover", "dot_retention_work_takeover"]);

        function K(a, b) {
            let d = a.action_v2;
            switch (d.action_enum) {
                case "authenticate_login":
                case "authenticate_signup":
                    if ("link" === b.source) return {
                        status: "unsupported"
                    };
                    return {
                        status: "supported", handler: async () => {
                            let {
                                runBeaconAuthentication: e
                            } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(840485)]).then(() => c("wxD9")), f = b.beacon.custom_fields?.benefit_id;
                            return await e(b.scope, {
                                screenHint: "authenticate_login" === d.action_enum ? "login" : "signup",
                                mode: "modal" === d.auth_navigation_mode ? "modal" : "redirect",
                                callbackPath: b.currentPath ?? "/",
                                cta: a.id,
                                beaconId: b.beacon.beacon_id,
                                beaconBenefitId: "no_auth_login_upsell_banner" === b.beacon.beacon_id && "string" == typeof f && I.a.has(f) ? f : void 0,
                                navigate: b.navigate
                            }), !0
                        }
                    };
                case "open_enterprise_value_survey_modal": {
                    let a = b.scope.get(f.f),
                        e = b.scope.get(f.k),
                        g = b.scope.get(f.j);
                    if (null == a || null == e || null == g || !(0, v.a)(b.scope, a, e)) return {
                        status: "unavailable"
                    };
                    return {
                        status: "supported",
                        handler: async () => {
                            let h, {
                                    loadEnterpriseSurveyDialog: i
                                } = await c.e(219902).then(() => c("cyRY")),
                                j = await i();
                            if (!(0, v.a)(b.scope, a, e) || b.scope.get(f.j) !== g) return !1;
                            let k = () => {
                                h?.(), h = void 0
                            };
                            return (0, C.f)(b.scope, j, {
                                accountId: a,
                                userId: g,
                                surveyId: d.survey_id,
                                surveyName: d.survey_name,
                                surveyType: d.survey_type,
                                onClose: k
                            }), h = b.scope.watch(b => {
                                (0, C.d)(b, j) ? (0, v.a)(b, a, e) && b.get(f.j) === g || ((0, C.b)(b, j), k()): k()
                            }), !0
                        }
                    }
                }
                case "open_dot_with_draft": {
                    if ("link" === b.source || !J.has(b.beacon.beacon_id) || "beacon_homepage_takeover_info" !== b.beacon.ui_info.type || "primary" !== a.type) return {
                        status: "unsupported"
                    };
                    let c = b.eventAccountId,
                        e = b.scope.get(f.n);
                    if (e.authLoading || e.accountLoading) return {
                        status: "pending"
                    };
                    let g = e.userId;
                    if (null == c || null == g || e.authenticatedUserId !== g || !(0, v.a)(b.scope, c, g)) return {
                        status: "unavailable"
                    };
                    return {
                        status: "supported",
                        handler: async () => {
                            if (b.isCurrentPresentation?.() === !1 || b.scope.get(f.n).authenticatedUserId !== g || !(0, v.a)(b.scope, c, g)) return !1;
                            let a = (0, D.f)(d.dot_id);
                            return (0, A.d)(b.scope, a, {
                                state: b.eventMetadata?.suppressLifecycle === !0 ? void 0 : {
                                    prefillPrompt: d.prompt,
                                    prefillPromptOnlyIfEmpty: !0,
                                    focusComposerNonce: Date.now()
                                }
                            })
                        }
                    }
                }
                case "open_pepper_onboarding_modal": {
                    let a = b.scope.get(f.m),
                        c = b.scope.get(B.n);
                    if ("loading" === a.status) return {
                        status: "pending"
                    };
                    if ("allowed" !== a.status || !("accountId" in a) || "personal" !== a.accountStructure || a.accountId !== c || null == c) return {
                        status: "unavailable"
                    };
                    return {
                        status: "supported",
                        handler: async () => {
                            let a = await (0, z.b)();
                            return b.scope.get(B.n) === c && ((0, C.f)(b.scope, a, {
                                accountId: c
                            }), !0)
                        }
                    }
                }
                case "age_verification": {
                    let a = b.scope.get(f.m),
                        d = b.scope.get(B.n);
                    if ("loading" === a.status) return {
                        status: "pending"
                    };
                    if ("allowed" !== a.status || !("accountId" in a) || "personal" !== a.accountStructure || a.accountId !== d || null == d) return {
                        status: "unavailable"
                    };
                    return {
                        status: "supported",
                        handler: async () => {
                            if (b.scope.get(B.n) !== d) return !1;
                            let {
                                startAgeVerification: a
                            } = await c.e(849638).then(() => c("rNxM")), e = b.scope.get(f.m);
                            return b.scope.get(B.n) === d && "allowed" === e.status && "accountId" in e && "personal" === e.accountStructure && e.accountId === d && new Promise(c => {
                                let e, f, g = !1,
                                    h = () => {
                                        g || (g = !0, e?.())
                                    },
                                    i = a => {
                                        f?.(), f = void 0, c(a)
                                    };
                                e = a({
                                    accountId: d,
                                    onLoad: () => {
                                        b.scope.get(B.n) !== d ? (h(), i(!1)) : c(!0)
                                    },
                                    onComplete: () => i(!0),
                                    onCancel: () => i(!1),
                                    onError: () => i(!1)
                                }), f = b.scope.watch(a => {
                                    let {
                                        get: b
                                    } = a;
                                    return b(B.n) !== d && (h(), i(!1)), h
                                })
                            })
                        }
                    }
                }
                default:
                    return "link" === b.source ? function(a, b) {
                        let d = a.action_v2;
                        if ("share_conversation" !== d.action_enum && "open_connector_oauth_modal" !== d.action_enum && "open_pca_connector_auth_modal" !== d.action_enum) return {
                            status: "unsupported"
                        };
                        let {
                            scope: e,
                            conversation: g
                        } = b, h = e.get(f.f), i = e.get(f.k), j = e.get(H.c), k = () => null != h && (0, v.a)(e, h, i) && e.get(H.c) === j && (b.isCurrentPresentation?.() ?? !0);
                        if (!b.allowExternalActions || !k()) return {
                            status: "unavailable"
                        };
                        if ("share_conversation" === d.action_enum) {
                            if (null == g || !g.allowSharing || g.isTemporaryChat || (0, G.Db)(e.get(G.cb, g.conversationId))) return {
                                status: "unavailable"
                            };
                            let c = e.get(F.a, g.conversationId);
                            if (null == c) return {
                                status: "pending"
                            };
                            let f = e.get(G.j, g.conversationId);
                            if (!c || null == f || d.conversation_id !== f || 0 === d.current_node_id.trim().length) return {
                                status: "unavailable"
                            };
                            let h = (0, F.b)({
                                scope: e,
                                canShare: !0,
                                conversationId: f,
                                source: "link" === b.source ? "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION" : "CHATGPT_SHARE_FLOW_SOURCE_BEACON"
                            });
                            return null == h ? {
                                status: "unavailable"
                            } : {
                                status: "supported",
                                handler: async () => !!k() && h(a)
                            }
                        }
                        if (!("connector_id" in d) || "string" != typeof d.connector_id || 0 === d.connector_id.trim().length) return {
                            status: "unavailable"
                        };
                        let l = d.connector_id;
                        if ("open_pca_connector_auth_modal" === d.action_enum) {
                            if ("link" !== b.source && null == g) return {
                                status: "unavailable"
                            };
                            if ("link" === b.source && !1 !== d.trigger_turn_after_link) return {
                                status: "unsupported"
                            };
                            let a = e.get(E.b, [l]);
                            if (a.isLoading) return {
                                status: "pending"
                            };
                            if (a.isError || a.data?.has(l) !== !0) return {
                                status: "unavailable"
                            }
                        }
                        return {
                            status: "supported",
                            handler: async () => {
                                let a;
                                if (!k()) return !1;
                                let [{
                                    CodexAppHomeBeaconConnectModal: f
                                }, {
                                    createChatGptPcaConnectorBeaconResumeTarget: m
                                }] = await Promise.all([Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(673184)]).then(() => c("ktQc")), c.e(886906).then(() => c("p4uj"))]);
                                if (!k() || "open_pca_connector_auth_modal" === d.action_enum && e.get(E.b, [l]).data?.has(l) !== !0) return !1;
                                let n = "open_pca_connector_auth_modal" === d.action_enum && "link" !== b.source && null != g ? m(e, {
                                    connectorId: l,
                                    conversationId: g.conversationId,
                                    includeConnectorSystemHint: !1 !== d.include_connector_system_hint_after_link,
                                    triggerTurnAfterLink: !1 !== d.trigger_turn_after_link
                                }) : void 0;
                                return ("open_pca_connector_auth_modal" !== d.action_enum || "link" === b.source || null != n) && ((0, C.f)(e, f, {
                                    connectorId: l,
                                    pcaResumeTarget: n ?? void 0,
                                    oauthReferrer: "link" === b.source ? "composer" : "home_beacon",
                                    onOpenChange: a => {
                                        a || (0, C.b)(e, f)
                                    }
                                }, {
                                    onDispose: () => a?.()
                                }), a = e.watch(c => {
                                    (0, C.d)(c, f) ? null != h && (0, v.a)(c, h, i) && c.get(H.c) === j && b.isCurrentPresentation?.() !== !1 || ((0, C.b)(c, f), a?.()): a?.()
                                }), (0, C.d)(e, f) || a(), !0)
                            }
                        }
                    }(a, b) : {
                        status: "unsupported"
                    }
            }
        }
        var L = c("rEML"),
            M = c("aTcy"),
            N = c("G4Vg"),
            O = c("DVML"),
            P = c("LjYy"),
            Q = c("ESoo"),
            R = c("nInK"),
            S = c("f5h2"),
            T = c("AVl4"),
            U = c("lg1r"),
            V = c("aoML"),
            W = c("RJnh"),
            X = c("aqNX");
        let Y = Symbol("beacon-action-support-pending"),
            Z = Symbol("beacon-action-unavailable");

        function $(a, b) {
            let c = aa(a, b);
            return "supported" === c.status ? c.handler : void 0
        }

        function _(a, b) {
            return "get_prolite" !== a.action_v2.action_enum && ("get_pro" !== a.action_v2.action_enum || null == a.action_v2.pro_offer) || "upgradeAccountId" in b || null == b.featureAccessInputs ? aa(a, b).status : aa(a, {
                ...b,
                upgradeAccountId: (0, V.b)(b.featureAccessInputs)
            }).status
        }

        function aa(a, b) {
            let c = a.action_v2,
                p = c.action_enum;
            if (null == p || "dropdown" === p || "open_plan_pricing" === p && ("link" === b.source || b.analyticsContext?.placement !== "in_conversation") || ("send_prompt" === p || "start_spark" === p) && "primary" !== a.type || "open_dot_texting_setup" === p && ("link" === b.source || b.eventMetadata?.conversationId == null)) return {
                status: "unsupported"
            };
            if (("enable_web_push" === p || "enable_web_push_and_responses_push" === p) && !(0, j.a)()) return {
                status: "unavailable"
            };
            if ("create_presence_session" === c.action_enum) return "link" === b.source ? {
                status: "unsupported"
            } : (0, T.b)(a, b);
            if ("enable_codex_fast_mode" === p && ("link" === b.source || 1) || ("open_connector_oauth_modal" === p || "open_pca_connector_auth_modal" === p) && 0 === c.connector_id.trim().length) return {
                status: "unsupported"
            };
            let z = "get_pro" === p ? c : void 0,
                A = "get_prolite" === p,
                B = A ? c.checkout_mode ?? "pricing" : z?.pro_offer?.checkout_mode,
                C = null == B ? null : function(a, b) {
                    if ("link" === a.source || null == a.appBaseUrl || "beacon_banner_info" !== a.beacon.ui_info.type) return null;
                    let c = a.analyticsContext?.placement;
                    return "homepage" === c || "work_tab_home" === c ? (0, N.f)(a.currentPath, "home") : b && "in_conversation" === c && "work_five_hour_usage_warning" === a.beacon.beacon_id ? (0, N.f)(a.currentPath, "conversation") : null
                }(b, A),
                D = "get_go" === p || "get_plus" === p || "get_pro" === p || A || "open_plan_pricing" === p || "get_team" === p,
                E = "link" === b.source ? null : (0, l.a)(b.beacon, a);
            if (D) {
                if ("link" === b.source && "checkout_mode" in c && "direct" === c.checkout_mode || !(null == B ? (0, V.d)(a, b, E ?? void 0) : null != C)) return {
                    status: "unsupported"
                };
                if ("upgradeAccountId" in b && null == b.upgradeAccountId || !b.allowExternalActions || !(0, V.f)(b.upsellHoldoutLayer, "link" === b.source ? "conversation_followup_shelf_link" : b.beacon)) return {
                    status: "unavailable"
                }
            }
            if ("invite_domain_members" === p && ("link" === b.source || !(0, w.b)(b.beacon.beacon_id, b.headerConfirmation) || "beacon_modal_info" !== b.beacon.ui_info.type)) return {
                status: "unsupported"
            };
            let F = b.getActionOverride?.(a);
            if (F === Y) return {
                status: "pending"
            };
            if (F === Z) return {
                status: "unavailable"
            };
            if (null === F) return {
                status: "unsupported"
            };
            if (null != B && null != C) return function(a, b, c, d) {
                let {
                    userId: e,
                    accountId: g
                } = c.scope.get(f.n);
                return null == e || null == g || g !== c.upgradeAccountId || null != c.eventAccountId && c.eventAccountId !== g ? {
                    status: "unavailable"
                } : {
                    status: "supported",
                    handler: async () => {
                        let h = "direct" === a && (c.analyticsContext?.placement !== "in_conversation" || function(a, b) {
                            let {
                                accountId: c,
                                userId: d
                            } = b;
                            if ("link" === a.source) return !1;
                            let e = (0, m.b)(a.scope.get(f.n), c);
                            return e?.userId === d && a.requestIdentity?.accountId === c && a.requestIdentity.userId === d
                        }(c, {
                            accountId: g,
                            userId: e
                        }));
                        return function(a, b, c, d, e) {
                            let f = new URL(d, "https://chatgpt.com"),
                                g = new URL((0, M.v)(P.a.PROLITE));
                            for (let [a, b] of(f.searchParams.delete("pro_variant"), g.searchParams)) f.searchParams.set(a, b);
                            let h = {
                                accountId: b.accountId,
                                checkoutMode: "pricing",
                                promoCampaignId: null,
                                returnPath: d,
                                sourceThreadId: null,
                                targetPlan: P.a.PRO,
                                upsellContextId: e
                            };
                            a.navigate((0, N.c)((0, L.A)((0, O.e)(f)), h), {
                                beaconUpgrade: h,
                                ...c && {
                                    beaconProPlanChange: b
                                },
                                returnPath: d
                            })
                        }(c, {
                            accountId: g,
                            userId: e
                        }, h, d, b ?? null), !0
                    }
                }
            }(B, A ? c.upsell_context_id : z?.upsell_context_id, b, C);
            let G = F ?? b.actionOverrides?.[p];
            if (null != G) return {
                status: "supported",
                handler: async () => "link" === b.source ? G(a, void 0, "link") : G(a, {
                    beacon: b.beacon,
                    eventMetadata: b.eventMetadata,
                    isCurrentPresentation: b.isCurrentPresentation,
                    onPresentationInvalidated: b.onPresentationInvalidated,
                    useExternalBrowser: b.useExternalBrowser
                })
            };
            switch (c.action_enum) {
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
                        status: "supported", handler: async a => {
                            let d = "link" === b.source ? c.copy_text : c.copy_text.trim().replace(/^\$\s*/, "");
                            return (0, o.d)(d, a)
                        }
                    };
                case "dismiss":
                    if (c.composer_text && null == b.onComposerText) return {
                        status: "unsupported"
                    };
                    return {
                        status: "supported", handler: async () => b.beacon?.beacon_id === "violence_interstitial_modal_beacon" && "violence_interstitial_close" === a.id ? (b.navigate("/", void 0, !0), !0) : (c.composer_text && b.onComposerText?.(c.composer_text), b.beacon?.custom_fields?.dismiss_action_behavior !== "dismiss" || (b.onDismiss(), !1))
                    };
                case "get_go":
                case "get_plus":
                case "get_pro":
                case "open_plan_pricing":
                case "get_team":
                    if ("link" === b.source) return {
                        status: "supported",
                        handler: async () => (0, V.e)(a, b)
                    };
                    return {
                        status: "supported", handler: async () => {
                            if (null == b.upgradeAccountId || null == b.appBaseUrl || null == b.currentPath) return !1;
                            let d = "get_pro" === c.action_enum ? (0, m.c)(c.rejoin_pro_cta_variant) : void 0,
                                g = null == d ? null : (0, m.b)(b.scope.get(f.n), b.upgradeAccountId),
                                h = null == E ? null : b.scope.get(f.n);
                            if (null != E && (h?.authMethod !== "chatgpt" || h.authLoading || h.accountLoading || !0 !== h.hasChatGptToken || h.accountId !== b.upgradeAccountId || h.authenticatedAccountId !== b.upgradeAccountId || b.requestIdentity?.accountId !== b.upgradeAccountId || b.requestIdentity?.userId == null || b.requestIdentity.userId !== h.authenticatedUserId || null == h.userId)) return !1;
                            let i = null != E && h?.plan === "go" && null != h.authenticatedUserId && !(0, l.b)() && (0, l.c)(b.scope.query.getData(e.b, b.upgradeAccountId)?.accounts[b.upgradeAccountId]),
                                j = (0, V.c)(a, {
                                    accountId: b.upgradeAccountId,
                                    appBaseUrl: b.appBaseUrl,
                                    currentPath: b.currentPath,
                                    eventMetadata: b.eventMetadata,
                                    rejoinPro: null != d && null != g && g.accountId === b.requestIdentity?.accountId && g.userId === b.requestIdentity.userId ? (0, m.a)({
                                        ...g,
                                        variant: d
                                    }) : void 0,
                                    goRejoinPlusTreatment: E ?? void 0
                                });
                            if (null == j) return !1;
                            if (j.deferCompletion) {
                                let c = (0, y.c)({
                                    accountId: b.upgradeAccountId,
                                    action: a,
                                    analyticsContext: b.analyticsContext,
                                    beacon: b.beacon,
                                    eventMetadata: b.eventMetadata
                                });
                                return null != c && (b.navigate(j.href, {
                                    beaconUpgrade: j.intent,
                                    [y.a]: c
                                }), !1)
                            }
                            return b.navigate(j.href, {
                                beaconUpgrade: j.intent,
                                ...null == j.rejoinPro ? {} : {
                                    rejoinPro: j.rejoinPro
                                },
                                ...i && h?.userId != null ? {
                                    goRejoinPlus: {
                                        accountId: b.upgradeAccountId,
                                        userId: h.userId,
                                        requestUserId: h.authenticatedUserId,
                                        treatment: E
                                    }
                                } : {}
                            }), !0
                        }
                    };
                case "open_local_url":
                case "open_url": {
                    if ("link" !== b.source && (0, Q.a)(a, b.beacon)) return b.allowExternalActions ? {
                        status: "supported",
                        handler: async () => (0, Q.b)(a, b)
                    } : {
                        status: "unavailable"
                    };
                    if ("open_local_url" === c.action_enum && !0 === c.trigger_turn) return {
                        status: "unsupported"
                    };
                    let e = (0, q.b)(a, b);
                    if (null != e) return e;
                    let f = (0, W.b)(a);
                    if (null == f || !b.allowExternalActions && !(0, W.f)(f)) return null == f ? {
                        status: "unsupported"
                    } : {
                        status: "unavailable"
                    };
                    if ((0, S.a)(a) && (!b.allowExternalActions || null == n.a.systemPermissions)) return {
                        status: "unavailable"
                    };
                    if ((0, W.i)(a)) {
                        let a = b.scope.get(d.a, {
                            name: "chatgpt.workspace-discovery"
                        });
                        if (a.isLoading) return {
                            status: "pending"
                        };
                        if (!a.isCapable) return {
                            status: "unavailable"
                        }
                    }
                    if ("open_local_url" === c.action_enum && (null != (0, g.a)(f) || null != (0, U.a)(f)) && !b.allowExternalActions) return {
                        status: "unavailable"
                    };
                    return {
                        status: "supported",
                        handler: c => (0, R.b)(a, b, f, c)
                    }
                }
                case "open_work_tab":
                    if (!(0, k.h)(b.scope)) return {
                        status: "unavailable"
                    };
                    return {
                        status: "supported", handler: async () => {
                            let a = await (0, X.d)(b.scope, b.isCurrentPresentation);
                            if (null == a) return !1;
                            let {
                                model: c
                            } = a;
                            if (null != c) {
                                let a = (0, h.h)(b.scope, []);
                                (0, i.g)(b.scope, a, c), (0, k.n)(b.scope, "work"), b.navigate("/", {
                                    focusComposerNonce: Date.now(),
                                    initialChatGptConversationId: a
                                })
                            } else(0, k.n)(b.scope, "work"), b.navigate("/");
                            return !0
                        }
                    };
                case "send_prompt":
                    if (null == b.onSendPrompt) return {
                        status: "unsupported"
                    };
                    return {
                        status: "supported", handler: async () => await b.onSendPrompt?.(c.prompt) !== !1
                    };
                case "enable_web_push":
                    return {
                        status: "supported", handler: j.c
                    };
                case "enable_web_push_and_responses_push":
                    return b.allowExternalActions ? {
                        status: "supported",
                        handler: function(a) {
                            let {
                                scope: b,
                                accountId: c,
                                accountUserId: d,
                                onPermissionDenied: e
                            } = a;
                            return async () => {
                                let a = b.get(f.n),
                                    g = a.authenticatedUserId,
                                    h = () => (0, v.a)(b, c, a.userId) && b.get(f.n).accountUserId === d;
                                if (null == g || !h() || b.get(f.b)) return !1;
                                try {
                                    if (!await (0, j.c)()) {
                                        if (!(0, j.a)()) return e(), !1;
                                        throw Error("Notification registration failed")
                                    }
                                    if (await r.Request.safePatch("/notifications/settings", {
                                            expectedIdentity: {
                                                accountId: c,
                                                userId: g
                                            },
                                            requestBody: {
                                                updates: {
                                                    responses: {
                                                        push: !0
                                                    }
                                                }
                                            },
                                            signal: AbortSignal.timeout(1e4)
                                        }), !h()) return !1;
                                    let a = ["chatgpt-notification-settings", g, c];
                                    if (await b.queryClient.cancelQueries({
                                            queryKey: a,
                                            exact: !0
                                        }), !h()) return !1;
                                    return b.queryClient.invalidateQueries({
                                        queryKey: a,
                                        exact: !0
                                    }), !0
                                } catch {
                                    return h() && (0, S.b)(b), !1
                                }
                            }
                        }({
                            scope: b.scope,
                            accountId: c.account_id,
                            accountUserId: c.account_user_id,
                            onPermissionDenied: () => b.onActionComplete?.(a)
                        })
                    } : {
                        status: "unavailable"
                    };
                case "start_voice":
                    if (null == b.onStartVoice) return {
                        status: "unsupported"
                    };
                    return {
                        status: "supported", handler: async () => await b.onStartVoice?.() !== !1
                    };
                case "invite_domain_members":
                    return "link" === b.source ? {
                        status: "unsupported"
                    } : function(a, b) {
                        let c = a.action_v2;
                        if ("invite_domain_members" !== c.action_enum || !(0, w.b)(b.beacon.beacon_id, b.headerConfirmation) || "beacon_modal_info" !== b.beacon.ui_info.type) return {
                            status: "unsupported"
                        };
                        let {
                            scope: d,
                            beacon: e
                        } = b, g = b.featureAccessInputs, {
                            account_id: h
                        } = c;
                        if (null == g || g.authLoading || g.accountLoading) return {
                            status: "pending"
                        };
                        let i = g.authenticatedUserId,
                            j = () => (0, v.a)(d, h, g.userId) && d.get(f.n).authenticatedUserId === i,
                            k = () => j() && (b.isCurrentPresentation?.() ?? !0);
                        return null == i || "chatgpt" !== g.authMethod || g.accountId !== h || g.authenticatedAccountId !== h || null != b.eventAccountId && b.eventAccountId !== h ? {
                            status: "unavailable"
                        } : {
                            status: "supported",
                            handler: async () => {
                                if (!k()) return !1;
                                let c = x.get(d);
                                null == c && (c = new WeakMap, x.set(d, c));
                                let f = c.get(e);
                                null == f && (f = new Set, c.set(e, f));
                                let g = JSON.stringify([h, i]);
                                if (f.has(g)) return !1;
                                f.add(g);
                                let l = d.get(t.a);
                                try {
                                    let c = r.Request.safePost("/referrals/workspace/domain-members/invite", {
                                        requestBody: b.headerConfirmation?.request,
                                        expectedIdentity: {
                                            accountId: h,
                                            userId: i
                                        },
                                        retry: "never"
                                    });
                                    b.headerConfirmation?.onRequestStarted?.(c);
                                    let e = await c,
                                        f = j();
                                    if (null != b.headerConfirmation && !f) return !1;
                                    let g = f && (b.isCurrentPresentation?.() ?? !0);
                                    if (g && (e.failed_invite_count > 0 ? d.get(s.f).info(l.formatMessage({
                                            id: "chatgpt.beacons.business_domain_members.toast.incomplete_unconfirmed",
                                            defaultMessage: "Some invitations weren't confirmed."
                                        })) : d.get(s.f).success(l.formatMessage({
                                            id: "chatgpt.beacons.business_domain_members.toast.success",
                                            defaultMessage: "{count, plural, =0 {Your coworkers are already invited.} one {# coworker invited.} other {# coworkers invited.}}"
                                        }, {
                                            count: e.accepted_invite_count
                                        }))), null != b.headerConfirmation && 0 === e.accepted_invite_count) return g && b.onActionComplete?.(a), !1;
                                    return {
                                        didComplete: !0,
                                        eventAccountId: h,
                                        shouldResolve: g
                                    }
                                } catch (c) {
                                    if (null != b.headerConfirmation && c instanceof u.a && 412 === c.responseStatus) return k() && (d.get(s.f).info(l.formatMessage({
                                        id: "chatgpt.businessTeamInviteHeader.previewChanged",
                                        defaultMessage: "The list of eligible teammates changed. Review the updated invitation before sending."
                                    })), b.headerConfirmation.onPreviewChanged()), !1;
                                    if (c instanceof u.a && "network" !== c.errorKind && null != c.responseStatus && [400, 401, 403, 422].includes(c.responseStatus)) return f.delete(g), k() && d.get(s.f).danger(l.formatMessage({
                                        id: "chatgpt.beacons.business_domain_members.toast.rejected",
                                        defaultMessage: "Invitations weren't sent. Please try again."
                                    }), {
                                        errorAnalytics: {
                                            toastId: "chatgpt.beacons.business_domain_members.toast.rejected"
                                        }
                                    }), !1;
                                    return k() && (d.get(s.f).danger(l.formatMessage({
                                        id: "chatgpt.beacons.business_domain_members.toast.error_unconfirmed",
                                        defaultMessage: "We couldn't confirm all invitations."
                                    }), {
                                        errorAnalytics: {
                                            toastId: "chatgpt.beacons.business_domain_members.toast.error"
                                        }
                                    }), b.onActionComplete?.(a)), !1
                                }
                            }
                        }
                    }(a, b);
                case "open_dot_with_draft":
                case "open_pepper_onboarding_modal":
                case "age_verification":
                case "authenticate_login":
                case "authenticate_signup":
                case "open_enterprise_value_survey_modal":
                    return K(a, b);
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
                    return "link" === b.source ? K(a, b) : {
                        status: "unsupported"
                    }
            }
        }

        function ab(a) {
            return null != (0, p.d)(a)
        }

        function ac(a) {
            return ("primary" === a.type || "secondary" === a.type) && "submit_personalized_information_questionnaire_feedback" !== a.action_v2.action_enum
        }
    }),
    CmBE: (function(a, b, c) {
        function d(a) {
            let b = a.text ?? ("copy_to_clipboard" === a.action_v2.action_enum ? a.action_v2.text : a.id);
            return null == b || 0 === b.trim().length ? null : b
        }
        c.d(b, {}, {
            a: function(a) {
                return "accent" === a.appearance ? "accent" : null == a.type || "primary" === a.type ? "primary" : "secondary"
            },
            b: function(a) {
                return "authUpsell" === a ? "authUpsell" : "takeover" === a || "takeoverHero" === a ? "takeoverHero" === a ? "takeoverHeroAction" : "large" : "workNux" === a || "tasksNux" === a ? "workNux" : "expressiveModal" === a || "cloudWelcome" === a ? "expressiveBeaconAction" : "equalWeightModal" === a ? "onboardingAction" : "modal" === a ? "beaconAction" : "banner" === a ? "dialog" : "inline" === a ? "composerSm" : "beaconCarousel"
            },
            c: function(a) {
                return d(a)
            },
            d: d
        })
    }),
    SPzj: (function(a, b, c) {
        var d = c("mBJV"),
            e = c("b2Wp"),
            f = c("Q840"),
            g = c("U861");
        c("mmXj");
        var h = c("yGJW"),
            i = c("OWtl"),
            j = c("ycSk"),
            k = c("ytyy");
        let l = {
                click: "CHATGPT_BEACON_LIFECYCLE_ACTION_CLICK",
                closed_without_dismiss: "CHATGPT_BEACON_LIFECYCLE_ACTION_CLOSED_WITHOUT_DISMISS",
                composer_tip_presented: "CHATGPT_BEACON_LIFECYCLE_ACTION_COMPOSER_TIP_PRESENTED",
                dismiss: "CHATGPT_BEACON_LIFECYCLE_ACTION_DISMISS",
                ignored: "CHATGPT_BEACON_LIFECYCLE_ACTION_IGNORED",
                impression: "CHATGPT_BEACON_LIFECYCLE_ACTION_IMPRESSION"
            },
            m = {
                codex_home: "CHATGPT_BEACON_PLACEMENT_CODEX_HOME",
                homepage: "CHATGPT_BEACON_PLACEMENT_HOMEPAGE",
                in_conversation: "CHATGPT_BEACON_PLACEMENT_IN_CONVERSATION",
                work_tab_home: "CHATGPT_BEACON_PLACEMENT_WORK_TAB_HOME"
            },
            n = {
                chat: "CHATGPT_BEACON_PRODUCT_EXPERIENCE_CHAT",
                work: "CHATGPT_BEACON_PRODUCT_EXPERIENCE_WORK"
            },
            o = {
                container: "CHATGPT_BEACON_UI_TREATMENT_CONTAINER",
                banner: "CHATGPT_BEACON_UI_TREATMENT_BANNER",
                conversation_inline: "CHATGPT_BEACON_UI_TREATMENT_CONVERSATION_INLINE",
                homepage_takeover: "CHATGPT_BEACON_UI_TREATMENT_HOMEPAGE_TAKEOVER",
                modal: "CHATGPT_BEACON_UI_TREATMENT_MODAL",
                tooltip: "CHATGPT_BEACON_UI_TREATMENT_TOOLTIP"
            },
            p = (0, f.u)(i.a, () => new Set),
            q = (0, f.u)(i.a, () => new Set);

        function r(a) {
            return "beacon_tooltip_info" === a.ui_info.type || "beacon_container_info" === a.ui_info.type ? "tooltip" : "beacon_banner_info" === a.ui_info.type ? "banner" : "beacon_homepage_takeover_info" === a.ui_info.type ? "homepage_takeover" : "beacon_conversation_inline_info" === a.ui_info.type ? "conversation_inline" : "modal"
        }

        function s(a, b) {
            let {
                beaconId: c,
                diagnostic: d,
                placement: f,
                suppressLifecycle: i,
                treatment: j
            } = b;
            if (!0 === i || (0, g.e)(c)) return;
            let k = t(c),
                l = "malformed_action_payload" === d.reason ? "unknown" : t(d.actionId),
                n = "malformed_action_payload" === d.reason ? "unknown" : t(d.actionEnum),
                p = [f, j, k, l, n, d.reason].join(":");
            a.get(q).has(p) || (a.set(q, a => {
                let b = new Set(a);
                for (b.add(p); b.size > 256;) {
                    let a = b.values().next().value;
                    if (null == a) break;
                    b.delete(a)
                }
                return b
            }), (0, h.a)(a, e.CodexBeaconsActionUnsupported, {
                actionEnum: n,
                actionId: l,
                beaconId: k,
                beaconType: o[j],
                placement: m[f],
                reason: d.reason,
                actionIndex: d.actionIndex?.toString()
            }))
        }

        function t(a) {
            let b = a.replace(/[^a-zA-Z0-9_.:-]/g, "_").slice(0, 128);
            return 0 === b.length ? "unknown" : b
        }

        function u(a, b, c) {
            a.get(h.c).logProductEvent(e.CodexBeaconsQuestionnaireAction, {
                action: {
                    answer_submitted: e.CodexBeaconsQuestionnaireActionType.CODEX_BEACONS_QUESTIONNAIRE_ACTION_TYPE_ANSWER_SUBMITTED,
                    dismissed: e.CodexBeaconsQuestionnaireActionType.CODEX_BEACONS_QUESTIONNAIRE_ACTION_TYPE_DISMISSED,
                    shown: e.CodexBeaconsQuestionnaireActionType.CODEX_BEACONS_QUESTIONNAIRE_ACTION_TYPE_SHOWN
                } [b],
                conversationContextType: c.conversation_context_type,
                questionId: c.question_id,
                questionnaireId: c.questionnaire_id,
                surface: c.surface
            })
        }
        c.d(b, {}, {
            a: r,
            b: function(a, b) {
                let {
                    action: c,
                    actionId: e,
                    actionType: f,
                    beacon: i,
                    destinationAction: p,
                    copyVariant: q,
                    expectedAccountId: r,
                    expectedUserId: s,
                    placement: t,
                    productExperience: u,
                    suppressLifecycle: v,
                    treatment: w,
                    viewLatencyMs: x,
                    visibilityDurationMs: y
                } = b;
                if (!0 === v || (0, g.e)(i.beacon_id)) return;
                "impression" === c && ["android_mweb_image_turn_app_upsell", "android_mweb_conversation_turn_app_upsell", "android_mweb_paid_conversation_turn_app_upsell", "android_mweb_contextual_app_upsell", "mweb_app_install_turn_count"].includes(i.beacon_id) && (0, j.a)(a);
                let z = {
                    action: l[c],
                    actionId: e,
                    actionType: "click" === c ? f ?? "unknown" : void 0,
                    beaconId: i.beacon_id,
                    beaconName: i.beacon_name ?? "unknown",
                    copyVariant: q ?? (0, k.b)(i)?.copyVariant,
                    benefitId: ("click" === c || "impression" === c && "conversation_inline" === w) && "string" == typeof i.custom_fields?.benefit_id ? i.custom_fields.benefit_id : void 0,
                    destinationAction: p,
                    placement: m[t],
                    productExperience: null == u ? void 0 : n[u],
                    uiTreatment: o[w],
                    viewLatencyMs: null == x ? void 0 : String(x),
                    visibilityDurationMs: null == y ? void 0 : String(y)
                };
                null == r && null == s ? (0, h.a)(a, d.i, z) : (0, h.a)(a, d.i, z, void 0, void 0, {
                    expectedAccountId: r,
                    expectedUserId: s
                }), i.onLifecycle?.(a, {
                    action: c,
                    actionId: e
                })
            },
            c: function(a, b, c) {
                a.get(h.c).logProductEvent(e.CodexBeaconsFooterLinkClicked, {
                    beaconId: b.beacon_id,
                    linkId: c.id
                })
            },
            d: function(a, b, c) {
                if ((0, g.e)(b.beacon_id)) return;
                let d = Array.from(c).sort().join(",");
                if (0 === d.length) return;
                let f = [b.beacon_id, "beacons", d].join(":");
                a.get(p).has(f) || (a.set(p, a => {
                    let b = new Set(a);
                    return b.add(f), b
                }), (0, h.a)(a, e.CodexBeaconsPageContextSuppressed, {
                    beaconId: b.beacon_id,
                    beaconName: b.beacon_name,
                    uiTreatment: o[r(b)],
                    pageContextClaims: d
                }))
            },
            e: function(a, b, c) {
                if ((0, g.e)(c.beacon_id)) return;
                let d = `${b}:${c.beacon_id}:typing`;
                a.get(p).has(d) || (a.set(p, a => {
                    let b = new Set(a);
                    return b.add(d), b
                }), a.get(h.c).logProductEvent(e.CodexBeaconsTypingSuppressed, {
                    beaconId: c.beacon_id,
                    uiTreatment: o[r(c)]
                }))
            },
            f: function(a, b, c) {
                let {
                    direction: d,
                    fromPage: f,
                    fromPageIndex: g,
                    toPage: i,
                    toPageIndex: j
                } = c;
                a.get(h.c).logProductEvent(e.CodexBeaconsCarouselArrowClicked, {
                    beaconId: b.beacon_id,
                    direction: d,
                    cardCount: String(b.ui_info.pages.length),
                    fromCardId: f.id,
                    fromCardIndex: String(g),
                    toCardId: i.id,
                    toCardIndex: String(j)
                })
            },
            g: function(a, b, c) {
                let {
                    navigationMethod: d,
                    page: f,
                    pageIndex: g
                } = c;
                a.get(h.c).logProductEvent(e.CodexBeaconsCarouselCardShown, {
                    beaconId: b.beacon_id,
                    cardCount: String(b.ui_info.pages.length),
                    cardId: f.id,
                    cardIndex: String(g),
                    navigationMethod: d
                })
            },
            h: function(a, b) {
                u(a, "answer_submitted", b)
            },
            i: function(a, b) {
                u(a, "dismissed", b)
            },
            j: function(a, b) {
                u(a, "shown", b)
            },
            k: s,
            l: function(a, b) {
                let {
                    beacon: c,
                    diagnostic: d,
                    placement: e,
                    suppressLifecycle: f,
                    treatment: g
                } = b;
                s(a, {
                    beaconId: c.beacon_id,
                    diagnostic: d,
                    placement: e,
                    suppressLifecycle: f,
                    treatment: g
                })
            }
        })
    }),
    sb2P: (function(a, b, c) {
        var d = c("Q840"),
            e = c("OWtl");
        let f = {
                status: "pending"
            },
            g = (0, d.u)(e.a, () => new Map),
            h = ["chat_work_merge_intro_home_modal", "chat_work_merge_intro_modal"],
            i = (0, d.u)(e.a, () => new Set),
            j = (0, d.d)(e.a, (a, b) => {
                let {
                    get: c
                } = b;
                return c(g).get(a)?.state ?? f
            }, {
                autoDispose: 6e4
            });

        function k(a) {
            let {
                accountId: b,
                locale: c,
                navigationKey: d,
                pathname: e,
                product: f
            } = a;
            return JSON.stringify([b, c, f, e, d])
        }

        function l(a, b) {
            return a + ":session:" + b
        }
        c.d(b, {}, {
            a: class {
                scope;
                constructor(a) {
                    this.scope = a
                }
                touchHomeVisit(a) {
                    let b = this.scope.get(g).get(a.visitKey);
                    null != b ? this.setHomeVisit(a, b.state) : this.setHomeVisit(a, f)
                }
                getHomeVisit(a) {
                    return this.scope.get(g).get(a.visitKey)?.state ?? f
                }
                canQueryHomeBeacon(a) {
                    return "pending" === this.getHomeVisit(a).status
                }
                applyHomeQueryResult(a, b) {
                    var c, d;
                    let e = this.getHomeVisit(a);
                    return c = a, d = b, c.accountId === d.accountId && c.locale === d.locale && c.pathname === d.pathname && c.product === d.product && c.visitKey === d.visitKey && "pending" === e.status && (null == b.beacon || this.isHomeBeaconDismissed(a.accountId, b.beacon.beacon_id) ? this.setHomeVisit(a, {
                        status: "empty"
                    }) : !0 === e.suppressOnSelection ? this.setHomeVisit(a, {
                        status: "suppressed",
                        beaconId: b.beacon.beacon_id
                    }) : this.setHomeVisit(a, {
                        status: "selected",
                        beacon: b.beacon
                    }), !0)
                }
                getSelectedHomeBeacon(a) {
                    let b = this.getHomeVisit(a);
                    return "selected" === b.status ? b.beacon : null
                }
                requestHomeBeaconSuppression(a) {
                    let b = this.getHomeVisit(a);
                    return "pending" === b.status ? !0 !== b.suppressOnSelection && (this.setHomeVisit(a, {
                        status: "pending",
                        suppressOnSelection: !0
                    }), !0) : "selected" === b.status && this.terminateHomeBeacon(a, b.beacon.beacon_id, "suppressed")
                }
                terminateHomeBeacon(a, b, c) {
                    let d = this.getHomeVisit(a);
                    return "selected" === d.status && d.beacon.beacon_id === b && (this.setHomeVisit(a, {
                        status: c,
                        beaconId: b
                    }), !0)
                }
                terminateSelectedHomeBeacons(a, b, c) {
                    this.scope.set(g, d => {
                        let e = new Map(d),
                            f = !1;
                        for (let [g, h] of d) h.identity.accountId === a && "selected" === h.state.status && b.includes(h.state.beacon.beacon_id) && (e.set(g, {
                            ...h,
                            state: {
                                status: c,
                                beaconId: h.state.beacon.beacon_id
                            }
                        }), f = !0);
                        return f ? e : d
                    })
                }
                isHomeBeaconDismissed(a, b) {
                    return this.scope.get(i).has(l(a, b))
                }
                dismissHomeBeacon(a, b) {
                    return !this.isHomeBeaconDismissed(a, b) && (this.acknowledgeHomeBeacon(a, b, "dismissed"), !0)
                }
                consumeHomeBeacon(a, b) {
                    this.acknowledgeHomeBeacon(a, b, "consumed")
                }
                suppressUnsupportedHomeBeacon(a, b) {
                    this.terminateSelectedHomeBeacons(a, [b], "unsupported")
                }
                setHomeVisit(a, b) {
                    this.scope.set(g, c => {
                        let d = new Map(c);
                        for (d.delete(a.visitKey), d.set(a.visitKey, {
                                identity: a,
                                state: b
                            }); d.size > 20;) {
                            let a = d.keys().next().value;
                            if (null == a) break;
                            d.delete(a)
                        }
                        return d
                    })
                }
                acknowledgeHomeBeacon(a, b, c) {
                    let d = h.includes(b) ? h : [b];
                    this.scope.set(i, b => {
                        let c = new Set(b);
                        for (let b of d) c.add(l(a, b));
                        return c.size === b.size ? b : c
                    }), this.terminateSelectedHomeBeacons(a, d, c)
                }
            },
            b: k,
            c: function(a) {
                let {
                    auth: b,
                    locale: c,
                    location: d,
                    product: e
                } = a;
                return "chatgpt" !== e && "work_tab" !== e || "/" !== d.pathname || "chatgpt" !== b.authMethod || null == b.accountId ? null : k({
                    accountId: b.accountId,
                    locale: c,
                    navigationKey: d.key,
                    pathname: d.pathname,
                    product: e
                })
            },
            d: j,
            e: function(a) {
                let {
                    windowType: b,
                    accountId: c,
                    currentAccountId: d,
                    statsigAccountId: e,
                    userId: f
                } = a;
                return "browser" === b ? c ?? null : c ?? d ?? e ?? f ?? null
            }
        })
    }),
    RNtx: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("Wf1j"),
            h = c("wD9O"),
            i = c("bf6R"),
            j = c("nzx4"),
            k = c("yC2B");

        function l(a) {
            return a.preventDefault()
        }

        function m(a) {
            return a.preventDefault()
        }

        function n(a) {
            return a.preventDefault()
        }

        function o(a) {
            let b, c, g, h, i, j = (0, e.c)(13),
                {
                    align: k,
                    isRtl: l
                } = a,
                m = "start" === k && "start-4",
                n = "end" === k && "end-4",
                o = "center" === k && "left-1/2 -translate-x-1/2";
            j[0] !== m || j[1] !== n || j[2] !== o ? (b = (0, f.b)("pointer-events-none absolute hidden h-3.5 w-9 origin-top overflow-visible group-data-[side=bottom]:top-0 group-data-[side=bottom]:block group-data-[side=bottom]:-scale-y-100 group-data-[side=top]:top-full group-data-[side=top]:block", m, n, o), j[0] = m, j[1] = n, j[2] = o, j[3] = b) : b = j[3];
            let p = "center" === k ? "M0 0C8.1 0 10.95 3.42222 14.4 8.24444L16.05 10.5778C17.025 11.9778 18.975 11.9778 19.95 10.5778L21.6 8.24444C25.05 3.42222 27.9 0 36 0V-1H0Z" : "M0 0C4 0 6.5 1.2963 8 4.40741C9.5 7.77778 9 10.8889 11 12.7037C12.25 13.7407 13.75 13.7407 15 12.4444C19.25 7.51852 25.5 2.59259 32 0.777778C33.75 0.259259 34.75 0 36 0V-1H0Z",
                q = "start" === k && l || "end" === k && !l ? "translate(36 0) scale(-1 1)" : void 0;
            return j[4] !== p || j[5] !== q ? (c = (0, d.jsx)("path", {
                d: p,
                transform: q
            }), j[4] = p, j[5] = q, j[6] = c) : c = j[6], j[7] !== b || j[8] !== c ? (g = (0, d.jsx)("svg", {
                "aria-hidden": "true",
                className: b,
                fill: "var(--color-background-coachmark)",
                viewBox: "0 0 36 14",
                children: c
            }), j[7] = b, j[8] = c, j[9] = g) : g = j[9], j[10] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, d.jsx)("svg", {
                "aria-hidden": "true",
                className: "pointer-events-none absolute top-1/2 hidden h-9 w-3.5 origin-left -translate-y-1/2 overflow-visible group-data-[side=left]:left-full group-data-[side=left]:block group-data-[side=right]:left-0 group-data-[side=right]:block group-data-[side=right]:-scale-x-100",
                fill: "var(--color-background-coachmark)",
                viewBox: "0 0 14 36",
                children: (0, d.jsx)("path", {
                    d: "M0 0C8.1 0 10.95 3.42222 14.4 8.24444L16.05 10.5778C17.025 11.9778 18.975 11.9778 19.95 10.5778L21.6 8.24444C25.05 3.42222 27.9 0 36 0V-1H0Z",
                    transform: "matrix(0 -1 1 0 0 36)"
                })
            }), j[10] = h) : h = j[10], j[11] !== g ? (i = (0, d.jsxs)(d.Fragment, {
                children: [g, h]
            }), j[11] = g, j[12] = i) : i = j[12], i
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D = (0, e.c)(54),
                    {
                        id: E,
                        align: F,
                        anchor: G,
                        body: H,
                        direction: I,
                        onDismiss: J,
                        side: K,
                        size: L,
                        title: M,
                        updatePositionStrategy: N
                    } = a,
                    O = void 0 === F ? "center" : F,
                    P = void 0 === L ? "default" : L,
                    Q = void 0 === N ? "always" : N,
                    R = (0, g.a)(),
                    S = (0, h.c)();
                D[0] !== I || D[1] !== R.locale ? (b = I ?? (0, k.a)(R.locale), D[0] = I, D[1] = R.locale, D[2] = b) : b = D[2];
                let T = "rtl" === b,
                    U = T ? "right" : "left",
                    V = T ? "left" : "right";
                D[3] !== U || D[4] !== V ? (c = {
                    top: "top",
                    bottom: "bottom",
                    start: U,
                    end: V
                }, D[3] = U, D[4] = V, D[5] = c) : c = D[5];
                let W = c;
                D[6] !== G || D[7] !== J ? (p = () => {
                    J(), G.focus()
                }, D[6] = G, D[7] = J, D[8] = p) : p = D[8];
                let X = p;
                D[9] !== X ? (q = a => {
                    a || X()
                }, D[9] = X, D[10] = q) : q = D[10], D[11] !== G ? (r = (0, d.jsx)(j.b, {
                    virtualRef: {
                        current: G
                    }
                }), D[11] = G, D[12] = r) : r = D[12];
                let Y = "default" === P && "w-60",
                    Z = "wide" === P && "w-72",
                    $ = "large" === P && "w-90";
                D[13] !== Y || D[14] !== Z || D[15] !== $ ? (s = (0, f.b)("no-drag group relative z-50 flex items-start gap-2 rounded-xl bg-coachmark p-3 text-sm text-coachmark shadow-lg outline-hidden select-none", Y, Z, $), D[13] = Y, D[14] = Z, D[15] = $, D[16] = s) : s = D[16];
                let _ = "center" === O ? 0 : -11 * S,
                    aa = null != M ? `${E}-body` : void 0,
                    ab = null != M ? `${E}-title` : `${E}-body`,
                    ac = W[K],
                    ad = ("center" === O ? 19 : 21) * S;
                D[17] !== E || D[18] !== M ? (t = null != M && (0, d.jsx)("div", {
                    id: `${E}-title`,
                    className: "font-semibold",
                    children: M
                }), D[17] = E, D[18] = M, D[19] = t) : t = D[19];
                let ae = `${E}-body`;
                return D[20] !== H || D[21] !== ae ? (u = (0, d.jsx)("div", {
                    id: ae,
                    children: H
                }), D[20] = H, D[21] = ae, D[22] = u) : u = D[22], D[23] !== t || D[24] !== u ? (v = (0, d.jsxs)("div", {
                    className: "flex min-w-0 flex-1 flex-col gap-0.5",
                    children: [t, u]
                }), D[23] = t, D[24] = u, D[25] = v) : v = D[25], D[26] !== R ? (w = R.formatMessage({
                    id: "beacons.homeTooltip.close",
                    defaultMessage: "Close tooltip"
                }), D[26] = R, D[27] = w) : w = D[27], D[28] !== X ? (x = a => {
                    a.stopPropagation(), X()
                }, D[28] = X, D[29] = x) : x = D[29], D[30] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, d.jsx)(i.Lj, {}), D[30] = y) : y = D[30], D[31] !== w || D[32] !== x ? (z = (0, d.jsx)("button", {
                    className: "relative flex size-4 shrink-0 cursor-interaction items-center justify-center rounded-sm before:absolute before:-inset-1 focus-visible:outline-2 focus-visible:outline-current",
                    "aria-label": w,
                    onClick: x,
                    type: "button",
                    children: y
                }), D[31] = w, D[32] = x, D[33] = z) : z = D[33], D[34] !== O || D[35] !== T ? (A = (0, d.jsx)(o, {
                    align: O,
                    isRtl: T
                }), D[34] = O, D[35] = T, D[36] = A) : A = D[36], D[37] !== O || D[38] !== E || D[39] !== s || D[40] !== _ || D[41] !== aa || D[42] !== ab || D[43] !== ac || D[44] !== ad || D[45] !== v || D[46] !== z || D[47] !== A || D[48] !== Q ? (B = (0, d.jsxs)(j.c, {
                    id: E,
                    className: s,
                    align: O,
                    alignOffset: _,
                    "aria-describedby": aa,
                    "aria-labelledby": ab,
                    collisionPadding: 8,
                    onCloseAutoFocus: n,
                    onInteractOutside: m,
                    onOpenAutoFocus: l,
                    role: "dialog",
                    side: ac,
                    sideOffset: ad,
                    unstyled: !0,
                    updatePositionStrategy: Q,
                    children: [v, z, A]
                }), D[37] = O, D[38] = E, D[39] = s, D[40] = _, D[41] = aa, D[42] = ab, D[43] = ac, D[44] = ad, D[45] = v, D[46] = z, D[47] = A, D[48] = Q, D[49] = B) : B = D[49], D[50] !== r || D[51] !== B || D[52] !== q ? (C = (0, d.jsxs)(j.a, {
                    open: !0,
                    onOpenChange: q,
                    children: [r, B]
                }), D[50] = r, D[51] = B, D[52] = q, D[53] = C) : C = D[53], C
            }
        })
    }),
    n5GS: (function(a, b, c) {
        var d = c("Cslg"),
            e = c("SHW6");
        c("aTcy");
        var f = c("RlnO"),
            g = c("IDma");

        function h(a) {
            if ("open_local_url" !== a.action_v2.action_enum) return !1;
            let b = a.action_v2.web_url;
            if (!b.startsWith("/") || b.startsWith("//")) return !1;
            let c = (0, e.a)(a);
            return null != c && "/admin/billing" === c.pathname && "add_credits" === c.searchParams.get("codex_credit_action")
        }
        c("nInK"), c.d(b, {}, {
            a: h,
            b: function(a, b) {
                if ("open_local_url" !== a.action_v2.action_enum) return;
                let i = a.action_v2.web_url;
                if (!i.startsWith("/") || i.startsWith("//")) return;
                let j = (0, e.a)(a);
                if (null == j) return;
                let k = "/?open=plan-renew-confirmation" === i || "/?open=plan-renew-pricing" === i,
                    l = h(a),
                    m = "/admin/billing/manage_member_usage_limit" === j.pathname,
                    n = "/settings/billing?expense_invoice=latest" === i;
                if (!k && !l && !m && !n) return;
                if ("link" === b.source) return {
                    status: "unsupported"
                };
                let o = b.scope.get(d.n);
                if (o.authLoading || o.accountLoading) return {
                    status: "pending"
                };
                if (!b.allowExternalActions || null == o.accountId || null == o.userId || !(0, g.a)(b.scope, o.accountId, o.userId) || null != b.eventAccountId && b.eventAccountId !== o.accountId) return {
                    status: "unavailable"
                };
                if (n) {
                    let a = b.scope.get(f.a);
                    if ("loading" === a.status) return {
                        status: "pending"
                    };
                    if ("allowed" !== a.status) return {
                        status: "unavailable"
                    }
                }
                let {
                    accountId: p,
                    userId: q
                } = o;
                return {
                    status: "supported",
                    handler: async a => {
                        let {
                            loadBillingBeaconAction: d
                        } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629)]).then(() => c("XyTt"));
                        if (!(0, g.a)(b.scope, p, q) || !(b.isCurrentPresentation?.() ?? !0)) return !1;
                        let e = await d();
                        return !!(0, g.a)(b.scope, p, q) && !!(b.isCurrentPresentation?.() ?? !0) && e(b, j, p, q, a)
                    }
                }
            }
        })
    }),
    vOxw: (function(a, b, c) {
        var d = c("Q840"),
            e = c("OWtl");
        let f = (0, d.u)(e.a, () => new Map);
        c.d(b, {}, {
            a: f,
            b: function(a, b, c) {
                let d = a.get(f),
                    e = d.get(b);
                null != e && null == e.route && a.set(f, new Map(d).set(b, {
                    ...e,
                    route: "ordinary" !== e.mode || c ? "legacy" : "v2"
                }))
            }
        })
    }),
    BHyM: (function(a, b, c) {
        let d = "business_owner_team_invite_confirmation";
        c.d(b, {}, {
            a: d,
            b: function(a, b) {
                return null != b ? a === d : "business_domain_coworkers" === a || "business_owner_domain_invites" === a
            }
        })
    }),
    nY8G: (function(a, b, c) {
        c("AleY"), c("ReGc"), c.d(b, {}, {
            a: async function(a) {}
        })
    }),
    h6ff: (function(a, b, c) {
        var d = c("zMIV"),
            e = c.n(d),
            f = c("lAQI"),
            g = c("G4Vg"),
            h = c("jUaO");
        let i = f.L().nullable().optional().transform(a => a ?? null),
            j = f.F({
                id: f.L(),
                text: f.L(),
                url: f.L()
            }),
            k = f.F({
                banner_design: f.p(["default", "composer", "eyebrow_composer"]).optional().default("default"),
                banner_position: f.z("composer").nullable().optional().transform(a => a ?? null),
                description: f.L(),
                dismiss_variant: f.p(["dismiss_on_send", "persistent"]).optional().default("dismiss_on_send"),
                icon_image_size: f.p(["small", "medium", "large"]).optional().default("small"),
                icon_image_url: i,
                icon_image_url_dark: i,
                informational_link: j.nullable().optional().transform(a => a ?? null),
                title: f.L(),
                type: f.z("beacon_banner_info")
            }).loose(),
            l = f.F({
                alignment: f.p(["start", "center"]).nullish(),
                bullet_points: f.g(f.F({
                    icon: f.p(["speedometer", "chat-dots", "clock-history"]),
                    text: f.L()
                })).nullish(),
                description_format: f.p(["plain", "markdown"]).optional(),
                supporting_text: f.L().nullish(),
                supporting_text_format: f.p(["plain", "markdown"]).optional(),
                description: f.L(),
                footer_link: j.nullable().optional().transform(a => a ?? null),
                footer_text: i,
                header_image_alt: i,
                header_image_url: i,
                header_image_url_dark: i,
                title: f.L(),
                type: f.z("beacon_modal_info"),
                web_design: f.p(["default", "announcement_nux"]).optional().default("default")
            }).loose(),
            m = f.F({
                close_aria_label: i,
                pages: f.g(f.F({
                    cta_action_item_id: i,
                    cta_text: f.L(),
                    description: f.L(),
                    footnote: i,
                    id: f.L(),
                    image_variant_urls: f.g(f.L()).nullable().optional().transform(a => a ?? null),
                    media_alt: f.L(),
                    media_type: f.p(["image", "video"]).optional().default("image"),
                    media_url: f.L(),
                    title: f.L(),
                    video_poster_url: i
                }).loose()).min(1),
                type: f.z("beacon_multi_page_modal_info")
            }).loose(),
            n = f.F({
                approval_info_text: i,
                design: f.p(["default", "card"]).nullable().optional().transform(a => a ?? "default"),
                primary_info_text: i,
                type: f.z("beacon_conversation_inline_info")
            }).loose(),
            o = f.F({
                container_id: f.L().min(1),
                type: f.z("beacon_container_info")
            }).loose(),
            p = f.F({
                background_image_url: i,
                background_image_url_dark: i,
                foreground_image_layout: f.Q([f.F({
                    type: f.z("none")
                }), f.F({
                    type: f.z("centered"),
                    clip_shape: f.p(["none", "circle"]),
                    size: f.p(["extra_small", "small", "regular"])
                }), f.F({
                    type: f.z("wide"),
                    sizing: f.F({
                        type: f.z("width_to_height_ratio"),
                        ratio: f.E().gt(1)
                    })
                })]),
                foreground_image_url: f.L(),
                foreground_image_url_dark: i,
                subtitle: i,
                title: f.L(),
                type: f.z("beacon_homepage_takeover_info")
            }).loose(),
            q = f.L().nullable().optional(),
            r = f.j().nullable().transform(a => a ?? void 0).optional(),
            s = f.p(["codex", "file_upload", "image_gen", "personal_finance", "tasks", "thinking", "work"]),
            t = {
                activate_feature_trial: J("activate_feature_trial", {
                    feature_key: f.L(),
                    model_behavior: f.F({
                        regeneration_model_slug: q,
                        update_model_picker: r
                    }).loose().nullable().optional()
                }),
                age_verification: J("age_verification", {}),
                authenticate_login: J("authenticate_login", {
                    auth_navigation_mode: f.p(["redirect", "modal"]).nullable().transform(a => a ?? void 0).optional()
                }),
                authenticate_signup: J("authenticate_signup", {
                    auth_navigation_mode: f.p(["redirect", "modal"]).nullable().transform(a => a ?? void 0).optional()
                }),
                citron_disable: J("citron_disable", {
                    failure_toast_message: q,
                    success_toast_message: q
                }),
                citron_enable: J("citron_enable", {}),
                codex_download_email: J("codex_download_email", {}),
                connect_finances_and_send_work_prompt: J("connect_finances_and_send_work_prompt", {
                    prompt: f.L().refine(a => a.trim().length > 0)
                }),
                connect_ledger_accounts: J("connect_ledger_accounts", {
                    composer_text: q
                }),
                copy_to_clipboard: J("copy_to_clipboard", {
                    copy_text: f.L(),
                    text: f.L()
                }),
                create_presence_session: J("create_presence_session", {
                    conversation_id: f.L(),
                    message_id: f.L(),
                    launch_attempt_id: f.L()
                }),
                create_prompt: J("create_prompt", {
                    open_in_modal: r,
                    prompt_description: q,
                    prompt_name: q,
                    prompt_text: q
                }),
                dismiss: J("dismiss", {
                    composer_text: q
                }),
                enable_codex_fast_mode: J("enable_codex_fast_mode", {}),
                enable_web_push: J("enable_web_push", {}),
                enable_web_push_and_responses_push: J("enable_web_push_and_responses_push", {
                    account_id: f.L().min(1),
                    account_user_id: f.L().min(1)
                }),
                file_upload: J("file_upload", {
                    composer_text: q
                }),
                free_thinking_sample_regenerate: J("free_thinking_sample_regenerate", {
                    model_slug: f.L(),
                    update_model_picker: r
                }),
                get_go: J("get_go", {
                    promo_campaign_id: q,
                    upsell_context_id: s.nullable().optional()
                }),
                get_plus: J("get_plus", {
                    checkout_mode: f.z("direct").nullable().optional(),
                    promo_campaign_id: q,
                    upsell_context_id: s.nullable().optional()
                }),
                get_pro: J("get_pro", {
                    rejoin_pro_cta_variant: f.R().transform(h.c).optional(),
                    pro_offer: g.b.nullish(),
                    upsell_context_id: s.nullable().optional()
                }),
                get_prolite: J("get_prolite", {
                    checkout_mode: f.z("direct").nullish(),
                    upsell_context_id: s.nullish()
                }),
                open_plan_pricing: J("open_plan_pricing", {
                    plan_sku: f.p(["go", "plus", "promax", "team"]),
                    upsell_context_id: s.nullable().optional()
                }),
                get_team: J("get_team", {
                    checkout_mode: f.z("direct").nullable().optional(),
                    upsell_context_id: s.nullable().optional()
                }),
                install_mobile_widget: J("install_mobile_widget", {}),
                install_plugin: J("install_plugin", {
                    plugin_reference_id: f.L(),
                    post_install_prompt: q
                }),
                enable_workspace_auto_join: J("enable_workspace_auto_join", {}),
                invite_domain_members: J("invite_domain_members", {
                    account_id: f.T()
                }),
                send_workspace_invite: J("send_workspace_invite", {
                    account_id: f.T()
                }),
                invite_team_members: J("invite_team_members", {
                    emails: f.g(f.L()).nullable().optional()
                }),
                open_claim_business_workspace_modal: J("open_claim_business_workspace_modal", {}),
                open_connector_oauth_modal: J("open_connector_oauth_modal", {
                    connector_id: f.L()
                }),
                open_connectors_onboarding_modal: J("open_connectors_onboarding_modal", {}),
                open_dot_texting_setup: J("open_dot_texting_setup", {}),
                open_enterprise_value_survey_modal: J("open_enterprise_value_survey_modal", {
                    survey_id: f.L(),
                    survey_name: f.L(),
                    survey_type: q
                }),
                open_external_agent_import: J("open_external_agent_import", {}),
                open_dot_with_draft: J("open_dot_with_draft", {
                    dot_id: f.L().min(1),
                    prompt: f.L().regex(/\S/u)
                }),
                open_local_url: J("open_local_url", {
                    android_url: f.L(),
                    ios_url: f.L(),
                    trigger_turn: r,
                    url: f.L().nullable().transform(a => a ?? void 0).optional(),
                    web_url: f.L()
                }),
                open_pca_connector_auth_modal: J("open_pca_connector_auth_modal", {
                    connector_id: f.L(),
                    include_connector_system_hint_after_link: r,
                    trigger_turn_after_link: r
                }),
                open_pepper_onboarding_modal: J("open_pepper_onboarding_modal", {}),
                open_url: J("open_url", {
                    url: f.L()
                }),
                open_work_tab: J("open_work_tab", {}),
                open_work_tab_and_send_prompt: J("open_work_tab_and_send_prompt", {
                    prompt: f.L()
                }),
                photo_upload: J("photo_upload", {
                    composer_text: q
                }),
                regenerate: J("regenerate", {
                    model_slug: f.L(),
                    update_model_picker: f.j()
                }),
                request_account_team_contact: J("request_account_team_contact", {
                    campaign_id: f.L(),
                    notification_type: f.p(["beacon_account_signal", "beacon_account_signal_smb"])
                }),
                request_premium_seat: J("request_premium_seat", {}),
                request_workspace_upgrade_seat: J("request_workspace_upgrade_seat", {
                    seat_type: f.z("prolite").nullable().optional()
                }),
                request_workspace_credits: J("request_workspace_credits", {}),
                send_prompt: J("send_prompt", {
                    cta_source: q,
                    developer_prompt: f.L(),
                    hint: q,
                    prompt: f.L()
                }),
                set_atlas_as_default_browser: J("set_atlas_as_default_browser", {}),
                share_conversation: J("share_conversation", {
                    conversation_id: f.L(),
                    current_node_id: f.L(),
                    title: f.L()
                }),
                share_group_chat: J("share_group_chat", {
                    room_name: q
                }),
                share_location: J("share_location", {}),
                share_message_slice: J("share_message_slice", {}),
                start_jobs_mock_interview_voice: J("start_jobs_mock_interview_voice", {}),
                start_voice: J("start_voice", {
                    requested_default_model: q,
                    voice_landing: q
                }),
                start_spark: J("start_spark", {
                    spark_id: f.L().regex(/\S/),
                    user_message: f.L().regex(/\S/),
                    preferred_model_slug: q,
                    preferred_thinking_effort: q
                }),
                submit_personalized_information_questionnaire_feedback: J("submit_personalized_information_questionnaire_feedback", {
                    answer: f.p(["yes", "no"]),
                    citation_uuid: f.L(),
                    conversation_context_type: f.p(["user_memory", "general_memory", "past_conversation"]),
                    conversation_id: f.L(),
                    details_max_length: f.E().nullable().transform(a => a ?? void 0).optional(),
                    details_placeholder: f.L(),
                    details_submit_button_text: f.L(),
                    message_id: f.L(),
                    question_id: f.z("citation_relevance"),
                    questionnaire_id: f.z("personalized_citation_relevance"),
                    success_toast_message: f.L(),
                    surface: f.z("personalization_questionnaire")
                }),
                system_hint: J("system_hint", {
                    composer_text: q,
                    hint: f.L(),
                    new_chat: r,
                    trigger_turn: r
                }),
                update_model_picker: J("update_model_picker", {
                    composer_text: q,
                    model_slug: f.L(),
                    thinking_effort: q,
                    service_tier: f.p(["standard", "fast", "ultrafast"]).nullable().optional()
                }),
                update_personality_trait: J("update_personality_trait", {
                    level: f.L(),
                    trait: f.L(),
                    updated_trait_settings_dict: f.J(f.L(), f.L())
                }),
                update_user_personalization_setting: J("update_user_personalization_setting", {
                    memory_enabled: f.j(),
                    success_toast_message: q
                })
            },
            u = f.Q(Object.values(t)),
            v = f.Q(Object.values(e()(t, ["get_prolite", "connect_finances_and_send_work_prompt", "create_presence_session", "open_plan_pricing", "invite_domain_members", "send_workspace_invite", "enable_codex_fast_mode", "enable_workspace_auto_join", "enable_web_push_and_responses_push", "open_dot_texting_setup", "open_dot_with_draft", "open_external_agent_import", "start_spark"]))),
            w = f.F({
                action_enum: f.D().transform(() => void 0).optional()
            }).loose(),
            x = f.F({
                action_v2: f.Q([w, v]),
                icon_url: q,
                id: f.L(),
                text: f.L()
            }).loose(),
            y = f.F({
                action_enum: f.z("dropdown"),
                footer_text: q,
                header_text: q,
                items: f.g(x)
            }).loose(),
            z = f.F({
                action_v2: f.Q([w, v, y]),
                icon_url: q,
                id: f.L(),
                text: f.L()
            }).loose(),
            A = f.F({
                action_enum: f.z("dropdown"),
                footer_text: q,
                header_text: q,
                items: f.g(z)
            }).loose(),
            B = f.F({
                appearance: f.p(["standard", "accent"]).catch("standard").optional(),
                action_v2: f.Q([w, u, A]),
                description: q,
                icon_url: q,
                id: f.L(),
                text: q,
                type: f.p(["primary", "secondary", "copy", "dropdown"]).nullable().optional().transform(a => a ?? "primary")
            }).loose(),
            C = f.g(B),
            D = f.g(B).min(1).max(2).refine(a => a[0]?.type === "primary" && (1 === a.length || a[1]?.type === "secondary")),
            E = {
                action_items: C,
                beacon_id: f.L(),
                beacon_name: f.L(),
                custom_fields: f.J(f.L(), f.R()).optional(),
                show_timing: f.p(["immediate", "wait_until_conversation_refresh"]).optional().default("immediate"),
                type: f.z("beacon_ui_response")
            },
            F = f.Q([f.F({
                ...E,
                ui_info: k
            }).loose(), f.F({
                ...E,
                ui_info: l
            }).loose(), f.F({
                ...E,
                ui_info: m
            }).loose(), f.F({
                ...E,
                ui_info: n
            }).loose()]),
            G = f.F({
                ...E,
                beacon_id: f.z("library_provider_onboarding_refresh"),
                ui_info: f.F({
                    type: f.z("beacon_container_info"),
                    container_id: f.z("library_google_drive_sidebar_tooltip")
                })
            }).loose().refine(a => {
                let b = a.action_items[0]?.action_v2;
                return b?.action_enum === "open_local_url" && !0 !== b.trigger_turn && b.web_url.startsWith("/library?") && "intro" === new URLSearchParams(b.web_url.slice(9)).get("library_onboarding")
            }),
            H = f.Q([G, f.F({
                ...E,
                ui_info: k
            }).loose(), f.F({
                ...E,
                ui_info: l
            }).loose(), f.F({
                ...E,
                ui_info: m
            }).loose(), f.F({
                ...E,
                action_items: D,
                ui_info: p
            }).loose()]),
            I = f.F({
                ...E,
                ui_info: o
            }).loose();

        function J(a, b) {
            return f.F({
                action_enum: f.z(a),
                ...b
            }).loose()
        }
        c.d(b, {}, {
            a: B,
            b: F,
            c: I,
            d: function(a) {
                var b;
                let c = f.F({
                    action_items: f.g(f.R()),
                    beacon_id: f.L(),
                    custom_fields: f.J(f.L(), f.R()).optional(),
                    ui_info: f.F({
                        type: f.p(["beacon_banner_info", "beacon_conversation_inline_info", "beacon_homepage_takeover_info", "beacon_modal_info", "beacon_multi_page_modal_info"])
                    }).loose()
                }).loose().safeParse(a);
                if (!c.success) return null;
                let d = c.data.action_items.findIndex(a => !B.safeParse(a).success);
                return -1 === d ? null : {
                    beaconId: c.data.beacon_id,
                    diagnostic: {
                        actionEnum: "unknown",
                        actionId: "unknown",
                        actionIndex: d,
                        reason: "malformed_action_payload"
                    },
                    suppressLifecycle: c.data.custom_fields?.debug_forced_in_conversation_beacon === !0,
                    treatment: "beacon_banner_info" === (b = c.data.ui_info.type) ? "banner" : "beacon_homepage_takeover_info" === b ? "homepage_takeover" : "beacon_conversation_inline_info" === b ? "conversation_inline" : "modal"
                }
            },
            e: H,
            f: u
        })
    }),
    d58w: (function(a, b, c) {
        var d = c("lAQI"),
            e = c("hlVK"),
            f = c("SPzj"),
            g = c("U861"),
            h = c("h6ff"),
            i = c("oHzU");
        let j = "deferredBeaconUpgradeEvent",
            k = d.F({
                accountId: d.L().min(1),
                actionId: d.L().min(1),
                analyticsContext: d.F({
                    placement: d.p(["codex_home", "homepage", "in_conversation", "work_tab_home"]),
                    productExperience: d.p(["chat", "work"]).optional(),
                    suppressLifecycle: d.j().optional(),
                    treatment: d.p(["banner", "conversation_inline", "homepage_takeover", "modal"])
                }).nullable(),
                beacon: d.Q([h.b, h.e]),
                expectedIdentity: d.F({
                    accountId: d.L(),
                    userId: d.L()
                }).optional(),
                eventMetadata: d.F({
                    conversationId: d.L().nullable(),
                    messageId: d.L().nullable(),
                    suppressLifecycle: d.j().optional()
                }).nullable()
            });

        function l(a, b) {
            return function a(b, c) {
                for (let d of b) {
                    if (d.id === c && "get_team" === d.action_v2.action_enum && "direct" === d.action_v2.checkout_mode) return d;
                    if ("dropdown" === d.action_v2.action_enum) {
                        let b = a(d.action_v2.items, c);
                        if (null != b) return b
                    }
                }
                return null
            }(a.action_items, b)
        }
        c.d(b, {}, {
            a: j,
            b: async function(a, b, c) {
                if (null == c || c.accountId !== b) return !1;
                let d = l(c.beacon, c.actionId);
                return null != d && (!!(0, g.e)(c.beacon.beacon_id) || c.analyticsContext?.suppressLifecycle === !0 || c.eventMetadata?.suppressLifecycle === !0 || (null != c.analyticsContext && (0, f.b)(a, {
                    action: "click",
                    actionId: c.actionId,
                    actionType: d.type,
                    beacon: c.beacon,
                    destinationAction: "get_team",
                    ...c.analyticsContext
                }), await (0, e.a)({
                    accountId: b,
                    beacon: c.beacon,
                    expectedIdentity: c.expectedIdentity,
                    eventCtaId: c.actionId,
                    eventType: "click",
                    metadata: c.eventMetadata ?? void 0
                }), !0))
            },
            c: function(a) {
                let {
                    accountId: b,
                    action: c,
                    analyticsContext: d,
                    beacon: e,
                    eventMetadata: f
                } = a;
                if ("get_team" !== c.action_v2.action_enum || "direct" !== c.action_v2.checkout_mode || null == l(e, c.id)) return null;
                let {
                    onLifecycle: g,
                    [i.k]: h,
                    ...j
                } = e;
                return {
                    accountId: b,
                    actionId: c.id,
                    analyticsContext: d ?? null,
                    beacon: j,
                    expectedIdentity: h,
                    eventMetadata: f ?? null
                }
            },
            d: function(a) {
                if (null == a || "object" != typeof a || !(j in a)) return null;
                let b = k.safeParse(a[j]);
                return b.success && null != l(b.data.beacon, b.data.actionId) ? b.data : null
            }
        })
    }),
    oaZE: (function(a, b, c) {
        var d = c("QosV"),
            e = c("Q840"),
            f = c("zd8w"),
            g = c("StMt"),
            h = c("h6fL"),
            i = c("OWtl"),
            j = c("WFY2");
        c.d(b, {}, {
            a: function(a) {
                let b, k, l, m = (0, d.c)(10),
                    {
                        enabled: n
                    } = a,
                    o = (0, e.y)(i.a),
                    p = (0, h.a)();
                m[0] === Symbol.for("react.memo_cache_sentinel") ? (b = {
                    name: "chatgpt"
                }, m[0] = b) : b = m[0];
                let q = (0, e.x)(g.a, b);
                return m[1] !== p.accountId || m[2] !== p.authMethod || m[3] !== p.isLoading || m[4] !== p.userId || m[5] !== q.isCapable || m[6] !== n || m[7] !== o ? (k = () => {
                    let a;
                    if (p.isLoading || !q.isCapable || !n || null == p.accountId || null == p.userId || "chatgpt" !== p.authMethod && "chatgptAuthTokens" !== p.authMethod) return;
                    let b = p.accountId,
                        d = p.userId,
                        e = !1;
                    return (async function() {
                        return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(338646)]).then(() => c("wmPg"))).observeFamilyNotifications
                    })().then(c => {
                        e || (a = c(o, {
                            accountId: b,
                            userId: d
                        }))
                    }).catch(() => {
                        e || j.a.warning("family_workspace_notifications_initialization_failed")
                    }), () => {
                        e = !0, a?.()
                    }
                }, l = [o, p.accountId, p.userId, p.authMethod, p.isLoading, q.isCapable, n], m[1] = p.accountId, m[2] = p.authMethod, m[3] = p.isLoading, m[4] = p.userId, m[5] = q.isCapable, m[6] = n, m[7] = o, m[8] = k, m[9] = l) : (k = m[8], l = m[9]), (0, f.useEffect)(k, l), null
            }
        })
    }),
    j6fD: (function(a, b, c) {
        var d = c("Hl6a"),
            e = c("lAQI"),
            f = c("fDv2"),
            g = c("OWtl"),
            h = c("oHzU");
        let i = new Set(["family_workspace_notification_banner", "family_workspace_notification_modal", "family_workspace_notification_work_banner", "family_workspace_notification_work_modal", "family_workspace_notification_codex_banner", "family_workspace_notification_codex_modal"]),
            j = e.F({
                notification_id: e.L().min(1),
                presented_at: f.b({
                    offset: !0
                }),
                expires_at: f.b({
                    offset: !0
                }),
                workspace_id: e.L().min(1),
                invitation_id: e.L().nullable(),
                occurrence_id: e.L().min(1)
            }),
            k = (0, d.g)(g.a, a => ({
                pending: new Map,
                acknowledged: new Map,
                acknowledgedThrough: new Map,
                removedInvitations: new Map,
                viewed: new Set
            }));

        function l(a) {
            if (!i.has(a.beacon_id) || "beacon_banner_info" !== a.ui_info.type && "beacon_modal_info" !== a.ui_info.type) return null;
            let b = j.safeParse(a.custom_fields?.family_notification);
            return b.success ? b.data : null
        }

        function m(a) {
            let b = /^invite:.*:(\d+)$/.exec(a),
                c = null == b ? 0 / 0 : Number(b[1]);
            return Number.isSafeInteger(c) ? c : null
        }

        function n(a, b) {
            if (null == b) return !0;
            if (a === b) return !1;
            let c = m(a),
                d = m(b);
            return null == c || null == d || c < d
        }
        c.d(b, {}, {
            a: function(a, b, c) {
                let d = l(c);
                null != d && a.set(k, b, a => {
                    let b = "beacon_modal_info" === c.ui_info.type,
                        e = Math.max(Date.now(), Date.parse(d.presented_at)),
                        f = new Map([...a.pending].filter(a => {
                            let [, c] = a, d = l(c);
                            return "beacon_modal_info" === c.ui_info.type !== b || null != d && Date.parse(d.presented_at) > e
                        }));
                    return {
                        ...a,
                        pending: f,
                        acknowledgedThrough: new Map(a.acknowledgedThrough).set(b, e),
                        acknowledged: new Map(a.acknowledged).set(d.notification_id, Date.parse(d.expires_at))
                    }
                })
            },
            b: function(a, b) {
                a.set(k, b, a => ({
                    ...a,
                    pending: new Map
                }))
            },
            c: l,
            d: k,
            e: function(a, b) {
                return [...a.get(k, b).pending.values()]
            },
            f: function(a, b, c) {
                let d = l(c),
                    e = a.get(k, b);
                return !(null == d || e.viewed.has(d.notification_id)) && (a.set(k, b, {
                    ...e,
                    viewed: new Set(e.viewed).add(d.notification_id)
                }), !0)
            },
            g: function(a, b) {
                return a.watch(c => {
                    let d = Math.min(...[...c.get(k, b).pending.values()].map(a => Date.parse(l(a)?.expires_at ?? "")));
                    if (!Number.isFinite(d)) return;
                    let e = setTimeout(() => {
                        a.set(k, b, a => ({
                            ...a,
                            pending: new Map([...a.pending].filter(a => {
                                let [, b] = a;
                                return Date.parse(l(b)?.expires_at ?? "") > Date.now()
                            }))
                        }))
                    }, Math.min(Math.max(0, d - Date.now()), 0x7fffffff));
                    return () => clearTimeout(e)
                })
            },
            h: function(a, b, c) {
                let d = l(c);
                if (null == d) return !1;
                let e = Date.parse(d.expires_at),
                    f = Date.now(),
                    g = a.get(k, b),
                    h = JSON.stringify([d.workspace_id, d.invitation_id]);
                return !!(e <= f || g.acknowledged.has(d.notification_id) || Date.parse(d.presented_at) <= (g.acknowledgedThrough.get("beacon_modal_info" === c.ui_info.type) ?? 0) || g.removedInvitations.has(h) && n(d.occurrence_id, g.removedInvitations.get(h) ?? null)) || (a.set(k, b, {
                    ...g,
                    pending: new Map(g.pending).set(d.notification_id, c),
                    acknowledged: new Map([...g.acknowledged].filter(a => {
                        let [, b] = a;
                        return b > f
                    }))
                }), !0)
            },
            i: function(a, b, c, d, e) {
                a.set(k, b, a => {
                    let b = JSON.stringify([c, d]),
                        f = a.removedInvitations.get(b),
                        g = a.removedInvitations.has(b) && null == f || null != f && null != e && (m(f) ?? 0) > (m(e) ?? 0) ? f ?? null : e;
                    return {
                        ...a,
                        removedInvitations: new Map(a.removedInvitations).set(b, g),
                        pending: new Map([...a.pending].filter(a => {
                            let [, b] = a, e = l(b);
                            return null == e || e.workspace_id !== c || e.invitation_id !== d || !n(e.occurrence_id, g)
                        }))
                    }
                })
            },
            j: function(a) {
                return [...a.pending.values()].find(h.a) ?? null
            }
        })
    }),
    fM3G: (function(a, b, c) {
        c.d(b, {
            a: () => J,
            b: () => I,
            c: () => H
        });
        var d = c("Q840"),
            e = c("vUFP"),
            f = c("SPzj"),
            g = c("Vz4D"),
            h = c("eac5"),
            i = c("SDxg"),
            j = c("vOxw"),
            k = c("nY8G"),
            l = c("h6ff"),
            m = c("svjy"),
            n = c("cus3"),
            o = c("OMIV"),
            p = c("oHzU"),
            q = c("Eso4"),
            r = c("prHy"),
            s = c("s4w7"),
            t = c("EZRW"),
            u = c("mRsi"),
            v = c("a2O9"),
            w = c("un4u"),
            x = c("Kwur"),
            y = c("M8lA"),
            z = c("htGh"),
            A = c("V9B1"),
            B = c("OTgW"),
            C = c("SClg"),
            D = c("OWtl"),
            E = c("j6fD"),
            F = c("aqNX");
        let G = {
                chatgpt: "homepage",
                codex: "codex_home",
                work_tab: "work_tab_home"
            },
            H = () => !1,
            I = (0, d.q)(D.a, (a, b) => {
                let {
                    accountId: d,
                    browserTooltipTargets: D,
                    clientContext: H,
                    composerSelectionContext: I,
                    locale: J,
                    pathname: K,
                    product: L,
                    shouldSuppressFocusedModal: M,
                    userId: N,
                    visitKey: O
                } = a, {
                    scope: P
                } = b, Q = P.get(j.a).get(O), R = Q?.route === "v2" && null != d && null != N && "chatgpt" === L && "/" === K && null == D;
                return {
                    queryKey: ["codex-app-home-beacon", d, N, J, K, L, O, D, R],
                    refetchOnMount: !1,
                    refetchOnReconnect: !1,
                    refetchOnWindowFocus: !1,
                    retry: !1,
                    staleTime: 6e4,
                    gcTime: null == D ? 0 : 1 / 0,
                    queryFn: async a => {
                        let {
                            signal: b
                        } = a, j = null;
                        if (null == D && "chatgpt" === L && "/" === K && null != d && null != N && /Android/.test(navigator.userAgent)) {
                            let a = (0, y.getClientBootstrap)().authHomepageAppUpsellAdmission;
                            j = a?.accountId === d && a.userId === N ? async function(a, b, c) {
                                let d = new AbortController;
                                try {
                                    return await (0, h.a)(async function(a, b, c) {
                                        try {
                                            c.throwIfAborted();
                                            let d = (document.documentElement.dataset.routerBasename ?? "").replace(/\/$/u, ""),
                                                {
                                                    data: e,
                                                    response: f
                                                } = await g.a.GET(i.a, {
                                                    baseUrl: `${window.location.origin}${d}`,
                                                    fetch,
                                                    signal: c,
                                                    credentials: "same-origin",
                                                    cache: "no-store",
                                                    redirect: "error",
                                                    params: {
                                                        header: {
                                                            "x-codex-statsig-user-id": b,
                                                            "x-codex-statsig-account-id": a
                                                        }
                                                    }
                                                });
                                            if (!f.ok || 204 === f.status) return !1;
                                            let h = i.b.parse(e);
                                            if (c.aborted || h.accountId !== a || h.userId !== b) return !1;
                                            return !0
                                        } catch {
                                            return !1
                                        }
                                    }(a, b, AbortSignal.any([c, d.signal])), !1, Date.now() + 1e3)
                                } finally {
                                    d.abort()
                                }
                            }(d, N, b): Promise.resolve(!1)
                        }
                        let Q = window.electronBridge?.getDesktopUserAgent?.() ?? null,
                            S = null != d && "chatgpt" === L && "/" === K && null == D,
                            T = null == Q ? void 0 : P.get(B.a),
                            U = null == Q ? void 0 : P.get(A.a),
                            V = "chatgpt" === L && null == D,
                            W = (0, t.a)(),
                            X = null == d ? void 0 : await (0, k.a)(P),
                            Y = null != Q && "codex" === L && null == D && null != d && null != N && "/" === K,
                            Z = H?.client_capabilities;
                        Y ? Z = ["codex_home_takeover_model_picker"] : null == D && (Z = (0, F.c)(P, I, Z));
                        let $ = {
                                client_capabilities: Z,
                                home_sms_backup_supported: S,
                                pepper_home_banner_supported: V,
                                pro_offer_checkout_supported: null == D && ("chatgpt" === L || "work_tab" === L) || void 0,
                                browser_family: W ?? void 0,
                                browser_extension_installed: null == W ? void 0 : P.get(u.b),
                                browser_tab_search_available: null == W ? void 0 : (0, v.a)(P, L)
                            },
                            _, aa = (0, s.g)(P, L, K, O),
                            ab = aa ? [s.b] : void 0,
                            ac = D ?? ("chatgpt" === L ? void 0 : ab),
                            ad = null != Q && "codex" === L && null == D && null != d ? await P.query.fetch(z.a).catch(() => null) ?? void 0 : void 0,
                            ae = R && null != d && null != N ? {
                                beacon_ui_response: (await x.Request.safeGet("/beacons_v2", {
                                    cache: "no-store",
                                    retry: "never",
                                    signal: b,
                                    expectedIdentity: {
                                        accountId: d,
                                        userId: N
                                    },
                                    additionalHeaders: {
                                        "Cache-Control": "no-store",
                                        "oai-client-version": (0, C.b)(),
                                        "x-openai-use-sheep": "1"
                                    },
                                    parameters: {
                                        query: {
                                            surface: ["home"],
                                            ...$
                                        }
                                    }
                                })).surfaces.home ?? null
                            } : await x.Request.safeGet("/beacons/home", {
                                signal: b,
                                additionalHeaders: {
                                    ...null == d ? {} : {
                                        "ChatGPT-Account-ID": d,
                                        ...{
                                            [e.ec]: d
                                        }
                                    },
                                    "Cache-Control": "no-store",
                                    ...{
                                        "oai-client-version": (0, C.b)()
                                    },
                                    ...null == Q ? {} : {
                                        "User-Agent": Q
                                    }
                                },
                                parameters: {
                                    query: {
                                        product: L,
                                        ...null == X ? {} : {
                                            preload_installation_id: X
                                        },
                                        selected_model_slug: null == I ? void 0 : P.get(w.f, I).selectedModel.slug,
                                        web_frontend: "codex_webview",
                                        codex_window_type: "browser",
                                        desktop_voice_available: U,
                                        desktop_voice_nux_seen: T,
                                        notification_state: ad,
                                        ...$,
                                        space_tooltip_ready: aa,
                                        supported_home_tooltip_targets: null == ac ? void 0 : [...ac],
                                        codex_fast_mode_eligible: _?.codex_fast_mode_eligible,
                                        codex_fast_mode_saved_ms: _?.codex_fast_mode_saved_ms,
                                        codex_fast_mode_thread_count: _?.codex_fast_mode_thread_count
                                    }
                                }
                            }),
                            af = [];
                        "chatgpt" === L && null == D && (af = q.b);
                        let {
                            beacon: ag,
                            rejection: ah
                        } = function(a, b) {
                            let c = a.beacon_ui_response;
                            if (null == c) return {
                                beacon: null,
                                rejection: null
                            };
                            let d = (0, r.a)(c, b);
                            return null == d ? {
                                beacon: null,
                                rejection: (0, l.d)(c)
                            } : {
                                beacon: d,
                                rejection: null
                            }
                        }(ae, af), ai = null == ag ? null : await async function(a, b) {
                            if (!(0, p.b)(b)) return b;
                            let {
                                createClinicianPersonalWorkspaceModal: d
                            } = await c.e(123655).then(() => c("quFz"));
                            return d(b, {
                                intl: a.get(m.a),
                                copyVariant: (0, n.a)(a.get(o.g))
                            })
                        }(P, ag);
                        if (ai?.beacon_id !== "auth_app_install_turn_count_banner" || null == j || await j || (ai = null), null != ai && (0, A.b)(ai) && null == Q && (ai = null), ai?.beacon_id === "codex_fast_mode_home_banner" && (_?.codex_fast_mode_eligible !== !0 || "beacon_banner_info" !== ai.ui_info.type) && (ai = null), null != D && ag?.ui_info.type !== "beacon_tooltip_info" && (ai = null), ag?.ui_info.type === "beacon_tooltip_info") {
                            let a = ag.ui_info.target;
                            (D ?? ab)?.some(b => b === a) || (ai = null)
                        }
                        null != ah && (0, f.k)(P, {
                            beaconId: ah.beaconId,
                            diagnostic: ah.diagnostic,
                            placement: G[L],
                            suppressLifecycle: ah.suppressLifecycle,
                            treatment: ah.treatment
                        });
                        let aj = !b.aborted && null != ai && ((0, p.h)(ai) || (0, p.i)(ai)) && M();
                        aj && null != d && null != ai && (0, p.e)(ai) && (0, f.e)(P, d, ai);
                        let ak = b.aborted || aj || null == d || null == N ? null : {
                            accountId: d,
                            userId: N
                        };
                        if (null != ak && null != ai && R && (ai = {
                                ...ai,
                                [p.k]: ak
                            }), null != ak && null != ai && (0, p.e)(ai) && (0, E.h)(P, ak, ai)) {
                            let a = ai,
                                b = (0, E.c)(a)?.notification_id;
                            ai = "beacon_banner_info" !== a.ui_info.type && (0, E.e)(P, ak).some(a => (0, E.c)(a)?.notification_id === b) ? {
                                ...a,
                                onLifecycle: (b, c) => {
                                    ("dismiss" === c.action || "click" === c.action) && (0, E.a)(b, ak, a)
                                }
                            } : null
                        }
                        return {
                            accountId: d,
                            beacon: aj ? null : ai,
                            locale: J,
                            pathname: K,
                            product: L,
                            visitKey: O
                        }
                    }
                }
            }, {
                excludeFieldsFromKey: ["shouldSuppressFocusedModal"]
            });

        function J(a, b) {
            let {
                queryKey: c
            } = a.query.getOptions(I, b);
            (0, d.f)(a, I, b), a.queryClient.removeQueries({
                queryKey: c,
                exact: !0
            })
        }
    }),
    xW5B: (function(a, b, c) {
        var d = c("Q840"),
            e = c("StMt"),
            f = c("Cslg"),
            g = c("OFP1"),
            h = c("SPzj"),
            i = c("sb2P"),
            j = c("vOxw"),
            k = c("fM3G"),
            l = c("DYuz"),
            m = c("s4w7"),
            n = c("oHzU"),
            o = c("aqNX"),
            p = c("nVns"),
            q = c("un4u"),
            r = c("g2p6"),
            s = c("U861"),
            t = c("jWQ7"),
            u = c("ad0f"),
            v = c("AGHv"),
            w = c("mmXj"),
            x = c("e1xH"),
            y = c("V9B1"),
            z = c("OWtl"),
            A = c("OMIV"),
            B = c("O666"),
            C = c("pyOZ");
        let D = {
                status: "pending"
            },
            E = {
                chatgpt: "chat",
                codex: "codex",
                work_tab: "work"
            },
            F = (0, d.r)(z.a, a => {
                let {
                    get: b
                } = a, c = b(v.onboardingIdentity$);
                return (0, t.a)({
                    authMethod: "chatgpt",
                    enabled: b(A.e, "3856252093"),
                    userId: c?.userId ?? null,
                    workspaceId: c?.accountId
                })
            }),
            G = (0, d.v)(z.a, a => null),
            H = (0, d.v)(z.a, a => !1, {
                onMount: (a, b) => {
                    if (b.get(m.h, b.key)) return void a(!0);
                    let c = !1,
                        d = window.setTimeout(() => {
                            c || (c = !0, b.set(m.h, b.key, !0), a(!0))
                        }, 5e3),
                        f = b.watch(b => {
                            if (c || (a(!1), null == b.get(m.c))) return;
                            let f = b.get(e.a, {
                                name: "chatgpt"
                            });
                            if (f.isLoading || f.isCapable && !b.get(A.e, "2200939124") && b.get(A.h, "2200939124")) return;
                            let g = !0;
                            return queueMicrotask(() => {
                                g && (c = !0, window.clearTimeout(d), a(!0))
                            }), () => {
                                g = !1
                            }
                        });
                    return () => {
                        window.clearTimeout(d), f()
                    }
                }
            }, {
                autoDispose: !0
            }),
            I = (0, d.v)(z.a, (a, b) => {
                let {
                    scope: c
                } = b, d = J(a);
                return null == d ? D : c.get(i.d, d.visitKey)
            }, {
                onMount: (a, b) => {
                    let c = J(b.key);
                    return null != c && (b.key.shouldFetch || null != b.key.browserTooltipTargets) ? (new i.a(b).touchHomeVisit(c), b.watch(d => {
                        a(function a(b, c, d) {
                            var e, t;
                            let z, D = new i.a(b),
                                I = b.get(s.d);
                            if (I?.accountId === d.accountId && (null != c.browserTooltipTargets || I.destination === E[c.product] && "beacon_tooltip_info" === I.beacon.ui_info.type)) return D.applyHomeQueryResult(d, {
                                ...d,
                                beacon: null
                            }), D.getHomeVisit(d);
                            let J = b.get(s.c),
                                L = b.get(i.d, d.visitKey),
                                M = J ? "unrestricted" : function(a, b) {
                                    if ("work_tab" !== b.product) return "unrestricted";
                                    let c = a.get(f.m);
                                    if ("allowed" !== c.status || !("plan" in c)) return "blocked";
                                    if (!(0, v.isEnterpriseClientPlan)(c.plan)) return "unrestricted";
                                    let d = a.get(v.onboardingIdentity$),
                                        e = a.get(g.s);
                                    if (null == d || d.accountId !== b.accountId || d.userId !== b.userId || "allowed" !== e.status || !("accountId" in e) || e.accountId !== b.accountId) return "blocked";
                                    let h = a.get(r.p).data;
                                    if (null == h) return "blocked";
                                    if (h.seenAnnouncements?.[v.COMPLETION_ANNOUNCEMENT] != null) return "unrestricted";
                                    if (!a.get(A.e, "1625797156")) return l.a;
                                    let i = [];
                                    if (a.get(B.b, {
                                            layer: "2912878776",
                                            parameter: "enabled",
                                            disableExposureLog: !0
                                        }) && i.push("tpp_work_default_announcement_modal"), a.get(A.e, "3033586454") && a.get(B.b, {
                                            layer: "2220584304",
                                            parameter: "experiment_enabled",
                                            disableExposureLog: !0
                                        }) && i.push("tpp_work_reonboarding_modal"), 0 === i.length) return l.a;
                                    if (!a.get(A.e, "3856252093")) return [...l.a, ...i];
                                    let {
                                        data: j,
                                        isPending: k
                                    } = a.get(F);
                                    return k ? "finance_pending" : j?.enabled ? l.a : [...l.a, ...i]
                                }(b, c);
                            if ("blocked" === M) return {
                                status: "ineligible"
                            };
                            "selected" === L.status && K(b, c, L.beacon) && D.suppressUnsupportedHomeBeacon(d.accountId, L.beacon.beacon_id);
                            let N = b.get(w.h),
                                O = b.get(w.j),
                                P = !J && (0, w.l)({
                                    activeClaims: N,
                                    isCurrentHomeBeacon: !0,
                                    isHomepageTakeoverOwner: (e = D, t = d, null != (z = e.getSelectedHomeBeacon(t)) && (0, n.f)(z)),
                                    isPageContextUpsellSuppressionEnabled: O
                                }),
                                Q = !J && (b.get(w.d) || P),
                                R = c.browserTooltipTargets,
                                S = null != c.browserTooltipTargets || !(0, u.b)(c.pathname) || b.get(H, d.visitKey),
                                T = !b.get(m.h, d.visitKey) && (0, m.d)(b, c.product, c.pathname);
                            if (null != R) {
                                let a = b.get(G, d.visitKey);
                                null != a && a.length > 0 ? R = a : b.set(G, d.visitKey, R)
                            }
                            let U = null != c.composerSelectionContext && (b.get(q.f, c.composerSelectionContext).savedModelPending || b.get(q.d, {
                                conversationOrigin: c.composerSelectionContext.conversationOrigin,
                                gizmoId: c.composerSelectionContext.gizmoId,
                                useMergedPicker: c.composerSelectionContext.useMergedPicker
                            }).modelsQuery.isPending);
                            S && !T && (0, j.b)(b, c.visitKey, (0, m.g)(b, c.product, c.pathname, c.visitKey));
                            let V = b.get(k.b, {
                                accountId: c.accountId,
                                userId: c.userId,
                                clientContext: c.clientContext,
                                composerSelectionContext: c.composerSelectionContext,
                                browserTooltipTargets: R,
                                locale: c.locale,
                                pathname: c.pathname,
                                product: c.product,
                                shouldSuppressFocusedModal: c.shouldSuppressFocusedModal,
                                visitKey: c.visitKey
                            }, {
                                enabled: c.shouldFetch && !1 !== c.clientContextReady && !U && S && !T && !J && (window.electronBridge?.getDesktopUserAgent?.() == null || !b.get(A.i) && b.get(C.a) && void 0 !== b.get(y.a)) && "pending" === L.status
                            });
                            if (J) return D.getHomeVisit(d);
                            let W = V.data?.beacon != null && (0, y.b)(V.data.beacon) && void 0 === b.get(y.a);
                            if (null != c.browserTooltipTargets && "pending" === L.status && null != V.data && null == V.data.beacon && R?.join(",") !== c.browserTooltipTargets.join(",")) return b.set(G, d.visitKey, c.browserTooltipTargets), a(b, c, d);
                            if ("finance_pending" === M && V.data?.beacon != null && !(0, l.c)(V.data.beacon.beacon_id) || V.data?.accountId == null || null != c.browserTooltipTargets && null == V.data.beacon || W) V.isError && D.applyHomeQueryResult(d, {
                                ...d,
                                beacon: null
                            });
                            else {
                                let a = D.applyHomeQueryResult(d, {
                                    accountId: V.data.accountId,
                                    beacon: "string" == typeof M || M.includes(V.data.beacon?.beacon_id ?? "") ? V.data.beacon : null,
                                    locale: V.data.locale,
                                    pathname: V.data.pathname,
                                    product: V.data.product,
                                    visitKey: V.data.visitKey
                                });
                                if (a && null != V.data.beacon && K(b, c, V.data.beacon)) return D.suppressUnsupportedHomeBeacon(d.accountId, V.data.beacon.beacon_id), D.getHomeVisit(d);
                                a && null != V.data.beacon && "empty" !== D.getHomeVisit(d).status && Q && (D.requestHomeBeaconSuppression(d), P && (0, n.e)(V.data.beacon) && (0, h.d)(b, V.data.beacon, N))
                            }
                            let X = D.getSelectedHomeBeacon(d);
                            b.get(x.pagesEnabled$) && null != X && (0, n.g)(X) && D.suppressUnsupportedHomeBeacon(d.accountId, X.beacon_id);
                            let Y = D.getSelectedHomeBeacon(d);
                            return null != Y && ((0, y.b)(Y) && !1 === b.get(y.a) || "codex_fast_mode_home_banner" === Y.beacon_id && c.clientContext?.codex_fast_mode_eligible !== !0 || "business_holiday_fast_mode_work_home_banner" === Y.beacon_id && !(0, o.c)(b, c.composerSelectionContext, c.clientContext?.client_capabilities)?.includes(p.b)) ? D.suppressUnsupportedHomeBeacon(d.accountId, Y.beacon_id) : Q && (D.requestHomeBeaconSuppression(d), P && null != Y && (0, n.e)(Y) && (0, h.d)(b, Y, N)), D.getHomeVisit(d)
                        }(d, b.key, c))
                    })) : void a(D)
                }
            }, {
                autoDispose: !0,
                excludeFieldsFromKey: ["shouldSuppressFocusedModal"]
            });

        function J(a) {
            return null == a.accountId || 0 === a.visitKey.length ? null : {
                accountId: a.accountId,
                locale: a.locale,
                pathname: a.pathname,
                product: a.product,
                visitKey: a.visitKey
            }
        }

        function K(a, b, c) {
            if ("beacon_tooltip_info" !== c.ui_info.type) return !1;
            let d = c.ui_info.target;
            return null != b.browserTooltipTargets ? !b.browserTooltipTargets.some(a => a === d) : (0, m.e)(a, b.product, d)
        }
        c.d(b, {}, {
            a: G,
            b: I
        })
    }),
    Eso4: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a, b) {
                return b.some(b => b.beaconId === a.beacon_id && b.containerId === a.ui_info.container_id)
            },
            b: [{
                beaconId: "cfc_personal_workspace_beacon",
                containerId: "cfc_personal_workspace_beacon"
            }]
        })
    }),
    prHy: (function(a, b, c) {
        var d = c("lAQI"),
            e = c("s4w7"),
            f = c("h6ff"),
            g = c("Eso4");
        let h = d.L().refine(a => a.trim().length > 0, "Home tooltip title must not be blank"),
            i = d.L().nullable().optional().transform(a => a ?? null),
            j = {
                action_items: d.g(d.C()).length(0),
                beacon_name: d.L(),
                show_timing: d.p(["immediate", "wait_until_conversation_refresh"]).optional().default("immediate"),
                type: d.z("beacon_ui_response")
            },
            k = d.Q([d.F({
                ...j,
                beacon_id: d.z("voice_mode_tooltip"),
                ui_info: d.F({
                    subtitle: i,
                    target: d.z("composer-voice-button"),
                    title: h,
                    type: d.z("beacon_tooltip_info")
                }).loose()
            }).loose(), d.F({
                ...j,
                beacon_id: d.z("tpp_nux_tooltip"),
                ui_info: d.F({
                    subtitle: i,
                    target: d.z("tpp-surface-mode-toggle"),
                    title: h,
                    type: d.z("beacon_tooltip_info")
                }).loose()
            }).loose()]),
            l = d.Q([k, e.j]),
            m = d.Q([f.e, l]);
        c.d(b, {}, {
            a: function(a, b) {
                let c = m.safeParse(a);
                if (c.success) return c.data;
                let d = f.c.safeParse(a);
                return d.success && (0, g.a)(d.data, b) ? d.data : null
            },
            b: m,
            c: function(a) {
                return l.safeParse(a).success
            }
        })
    }),
    fHnT: (function(a, b, c) {
        var d = c("Q840"),
            e = c("OWtl");
        let f = Object.freeze([]),
            g = (0, d.u)(e.a, () => f);
        c.d(b, {}, {
            a: g,
            b: function(a, b, c) {
                a.set(g, a => {
                    if (a.includes(b) === c) return a;
                    if (!c) {
                        let c = a.filter(a => a !== b);
                        return 0 === c.length ? f : Object.freeze(c)
                    }
                    return Object.freeze([...a, b].sort())
                })
            }
        })
    }),
    W44r: (function(a, b, c) {
        var d = c("ABep"),
            e = c("Q840"),
            f = c("zd8w"),
            g = c("Wf1j"),
            h = c("rEML"),
            i = c("Cslg"),
            j = c("h6fL"),
            k = c("hlVK"),
            l = c("SPzj"),
            m = c("sb2P"),
            n = c("prHy"),
            o = c("KXZK"),
            p = c("U861"),
            q = c("kphc"),
            r = c("ad0f"),
            s = c("bdDz"),
            t = c("vkjh"),
            u = c("mmXj"),
            v = c("OWtl"),
            w = c("RNtx"),
            x = c("fHnT"),
            y = c("s4w7");
        let z = {
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
        c.d(b, {}, {
            a: function(a) {
                let {
                    activationAction: b = "dismiss",
                    allowDesktop: c = !1,
                    children: A,
                    enabled: B,
                    minimumVisibleRatio: C,
                    onReadinessChange: D,
                    previewEnabled: E = B,
                    product: F = "chatgpt",
                    side: G,
                    size: H,
                    target: I
                } = a, J = (0, e.y)(v.a), K = (0, f.useId)(), {
                    accountId: L,
                    userId: M
                } = (0, j.a)(), {
                    locale: N
                } = (0, g.a)(), O = (0, h.Z)(), P = (0, e.z)(p.d), Q = (0, e.z)(q.b), R = (0, e.z)(s.c) ?? !1, [S, T] = (0, f.useState)(null), U = (0, f.useRef)(null), [V, W] = (0, f.useState)(null);
                (0, f.useEffect)(() => {
                    if (null == C || null == S) return;
                    let a = new IntersectionObserver(a => {
                        let [b] = a;
                        W(b?.isIntersecting === !0 && b.intersectionRatio >= C)
                    }, {
                        threshold: C
                    });
                    return a.observe(S), () => a.disconnect()
                }, [C, S]);
                let X = null == L ? null : (0, m.b)({
                        accountId: L,
                        locale: N,
                        navigationKey: O.key,
                        pathname: O.pathname,
                        product: F
                    }),
                    Y = (0, e.x)(m.d, X ?? ""),
                    Z = "chat";
                "work_tab" === F ? Z = "work" : "codex" === F && (Z = "codex");
                let $ = (0, p.f)(P, {
                        accountId: L,
                        destination: Z,
                        pathname: O.pathname,
                        userId: M
                    }),
                    _ = "selected" === Y.status ? Y.beacon : null,
                    aa = $ ? P?.beacon ?? null : _,
                    ab = null != aa && (0, n.c)(aa) && aa.ui_info.target === I ? aa : null,
                    ac = $ && null != P,
                    ad = ac && null != ab ? E : B,
                    ae = (null == C || !0 === V) && !0 === ad && null != L && ("chatgpt" === F ? "/" === O.pathname && "chat" === Q : (0, r.b)(O.pathname)) && null != S,
                    af = ae && null != ab && (!(0, s.l)({
                        hideFirstNewThreadOnboardingPromos: R,
                        pathname: O.pathname
                    }) || (0, y.f)(ab.beacon_id) || ab.custom_fields?.show_after_onboarding === !0),
                    ag = null;
                null != ab && (ag = ac ? `debug:${P.intentId}` : `${X??""}:${ab.beacon_id}`);
                let ah = null != C && (null == V || V && null == ad);
                (0, f.useEffect)(() => {
                    if (!ah || null == D) return;
                    let a = window.setTimeout(() => {
                        D(J, !1)
                    }, 5e3);
                    return () => window.clearTimeout(a)
                }, [ah, D, J]), (0, f.useLayoutEffect)(() => null != C ? ((0, x.b)(J, I, ae), D?.(J, ah), () => {
                    (0, x.b)(J, I, !1)
                }) : ae ? ((0, x.b)(J, I, !0), () => {
                    (0, x.b)(J, I, !1)
                }) : void 0, [ah, ae, C, D, J, I]), (0, f.useEffect)(() => {
                    af && !ac && null != L && null != ab && ((0, o.e)(J, L, ab), (0, o.d)(J, L, ab, z[F]))
                }, [L, ac, af, F, J, ab]);
                let ai = () => {
                        null == ab || null == ag || U.current !== ag && (U.current = ag, ac ? (0, p.b)(J, P.intentId) : null != L && ((0, l.b)(J, {
                            action: "dismiss",
                            beacon: ab,
                            ...z[F]
                        }), (0, o.b)(J, L, ab)))
                    },
                    aj = A({
                        ariaDescribedBy: af ? K : void 0,
                        isOpen: af,
                        onActivate: () => {
                            if (af && null != ab && null != ag && U.current !== ag && J.get(i.f) === L) {
                                if ("click" !== b) return void ai();
                                U.current = ag, ac ? (0, p.b)(J, P.intentId) : null != L && ((0, l.b)(J, {
                                    action: "click",
                                    beacon: ab,
                                    ...z[F]
                                }), (0, k.a)({
                                    beacon: ab,
                                    eventType: "click",
                                    accountId: L
                                }), (0, o.a)(J, L, ab))
                            }
                        },
                        triggerRef: T
                    });
                return (0, d.jsxs)(t.a, {
                    active: af,
                    claim: u.a.HomeBeacon,
                    children: [aj, af && null != ab ? (0, d.jsx)(w.a, {
                        id: K,
                        align: "composer-voice-button" === I ? "end" : "center",
                        anchor: S,
                        onDismiss: ai,
                        side: G ?? ("composer-voice-button" === I ? "top" : "bottom"),
                        size: H,
                        title: ab.ui_info.subtitle ? ab.ui_info.title : void 0,
                        body: ab.ui_info.subtitle || ab.ui_info.title
                    }) : null]
                })
            }
        })
    }),
    DYuz: (function(a, b, c) {
        let d = "enterprise_dot_provisioned_home_takeover",
            e = "enterprise_dot_provisioned_work_takeover",
            f = "dot_retention_home_takeover",
            g = "dot_retention_work_takeover",
            h = "dot_create_home_takeover",
            i = "dot_create_work_takeover",
            j = [d, e],
            k = [...j, f, g, h, i];
        c.d(b, {}, {
            a: k,
            b: function(a) {
                return a === d ? e : a === e ? d : a === f ? g : a === g ? f : a === h ? i : a === i ? h : null
            },
            c: function(a) {
                return k.includes(a)
            },
            d: j
        })
    }),
    lM2P: (function(a, b, c) {
        let d = new Set(["data_analysis_execution", "saved_memory", "response_personalization", "writing_assistance", "step_by_step_guidance", "personalized_advice", "professional_assistance", "conversation_history_search", "file_generation_download", "document_analysis", "connected_apps_access", "voice_conversation", "health_experience", "image_generation", "scheduled_tasks", "deep_research", "interactive_study", "interactive_app_creation"]);
        c.d(b, {}, {
            a: d
        })
    }),
    ESoo: (function(a, b, c) {
        c.d(b, {
            a: () => p,
            b: () => q
        });
        var d = c("lAQI"),
            e = c("hlVK"),
            f = c("M8lA"),
            g = c("yGJW"),
            h = c("wVL6"),
            i = c("eac5"),
            j = c("SPzj"),
            k = c("ycSk"),
            l = c("wJ7T"),
            m = c("RJnh");
        let n = d.p(["turn_5", "turn_10", "image_gen_turn", "homepage", "conversation_turn", "contextual_conversation_turn"]),
            o = new Set(["auth_app_install_turn_count_banner", "logged_in_ios_mweb_homepage_app_upsell", "no_auth_app_install_turn_count_bottom_sheet", "no_auth_app_install_turn_count_inline_banner", "mweb_app_install_turn_count", "android_mweb_image_turn_app_upsell", "android_mweb_conversation_turn_app_upsell", "android_mweb_paid_conversation_turn_app_upsell", "android_mweb_contextual_app_upsell", "ios_mweb_image_turn_app_upsell", "ios_mweb_conversation_turn_app_upsell", "ios_mweb_contextual_app_upsell", "no_auth_android_mweb_contextual_app_upsell"]);

        function p(a, b) {
            return "open_url" === a.action_v2.action_enum && null != (0, m.b)(a) && o.has(b.beacon_id) && n.safeParse(b.custom_fields?.app_install_source).success
        }
        async function q(a, b) {
            let c = n.safeParse(b.beacon.custom_fields?.app_install_source);
            if (!c.success || !b.allowExternalActions || "open_url" !== a.action_v2.action_enum || !p(a, b.beacon)) return !1;
            let d = b.beacon.custom_fields?.dlid,
                m = "string" == typeof d ? d : crypto.randomUUID(),
                o = "logged_in_ios_mweb_homepage_app_upsell" === b.beacon.beacon_id && b.beacon.custom_fields?.app_install_destination === "singular" ? {
                    href: a.action_v2.url,
                    appLink: a.action_v2.url,
                    deepLinkId: m
                } : function(a) {
                    let {
                        source: b,
                        conversationId: c,
                        deepLinkId: d,
                        medium: e,
                        userAgent: f,
                        appBaseUrl: g,
                        hasAccountSelector: h = !1
                    } = a, i = c ? `c/${encodeURIComponent(c)}` : void 0, j = new URL(i ? `/app/${i}` : "/app", "https://chat.openai.com"), k = new URL(i ? `/${i}` : "/app", "https://chatgpt.com");
                    for (let a of [j, k]) a.searchParams.set("dlid", d), a.searchParams.set("utm_campaign", "mweb_app_install"), a.searchParams.set("utm_content", b);
                    j.searchParams.set("referrer", new URLSearchParams({
                        utm_source: "chatgpt_web",
                        utm_medium: e,
                        dlid: d
                    }).toString());
                    let m = j.href;
                    if (!(/Android/.test(f) && f.includes("Chrome")) || /; wv|webview|fbav|fb_iab|fban|instagram|line\/|kakaotalk|snapchat|tiktok/i.test(f) || /Version\/\d+\.\d+/.test(f)) return {
                        href: m,
                        appLink: m,
                        deepLinkId: d
                    };
                    let n = new URLSearchParams({
                            dlid: d,
                            utm_source: "chatgpt_web",
                            utm_medium: e,
                            utm_campaign: "mweb_app_install",
                            utm_content: b
                        }),
                        o = i ? `${i}?${n}` : `app?${n}`,
                        p = new URL("https://play.google.com/store/apps/details?id=com.openai.chatgpt");
                    p.searchParams.set("referrer", o);
                    let q = ("conversation_turn" === b || "homepage" === b || "contextual_conversation_turn" === b) && (0, l.a)(f),
                        r = null != g && (h || q) ? new URL(`${g.pathname.replace(/\/$/,"")}/update-app`, g) : p;
                    return r !== p && (r.searchParams.set("referrer", o), q && r.searchParams.set("force_account_selector", "true")), {
                        href: `intent://${k.host}${k.pathname}${k.search}#Intent;scheme=https;package=com.openai.chatgpt;S.browser_fallback_url=${encodeURIComponent(r.href)};end`,
                        appLink: m,
                        deepLinkId: d
                    }
                }({
                    source: c.data,
                    conversationId: "auth_app_install_turn_count_banner" === b.beacon.beacon_id || "logged_in_ios_mweb_homepage_app_upsell" === b.beacon.beacon_id || "no_auth_app_install_turn_count_bottom_sheet" === b.beacon.beacon_id || "no_auth_app_install_turn_count_inline_banner" === b.beacon.beacon_id || "no_auth_android_mweb_contextual_app_upsell" === b.beacon.beacon_id ? void 0 : b.eventMetadata?.conversationId,
                    deepLinkId: m,
                    medium: b.analyticsContext?.treatment === "modal" ? "mweb_bottomsheet" : "mweb_banner",
                    userAgent: navigator.userAgent,
                    appBaseUrl: b.appBaseUrl,
                    hasAccountSelector: null != (0, f.getClientBootstrap)().androidInstallAccountSelector
                });
            if ("primary" === a.type) try {
                window.localStorage.removeItem("oai/apps/contextualUpsellId")
            } catch {}
            if (null != b.analyticsContext) try {
                (0, j.b)(b.scope, {
                    action: "click",
                    actionId: a.id,
                    actionType: a.type,
                    beacon: b.beacon,
                    destinationAction: a.action_v2.action_enum,
                    ...b.analyticsContext
                })
            } catch {}
            if ((0, e.a)({
                    beacon: b.beacon,
                    eventType: "click",
                    eventCtaId: a.id,
                    metadata: b.eventMetadata,
                    accountId: b.eventAccountId,
                    keepalive: !0
                }), b.onActionComplete?.(a), (0, k.b)(b.scope, o.deepLinkId, o.appLink), "homepage" === c.data && "auth_app_install_turn_count_banner" === b.beacon.beacon_id && "primary" === a.type && "auth_app_install_turn_count_banner_get_app" === a.id) try {
                let a = b.scope.get(g.c);
                if ("logged_in" === (0, f.getClientBootstrap)().authStatus && "android_web" === (0, h.a)() && "allowed" === a.getAnalyticsAdmission()) {
                    let b = Date.now() + 250;
                    await (0, i.a)(a.flush(250), void 0, b)
                }
            } catch {}
            return window.location.assign(o.href), {
                didComplete: !0,
                eventAccountId: b.eventAccountId,
                shouldResolve: !1
            }
        }
    }),
    ycSk: (function(a, b, c) {
        var d = c("wJ7T"),
            e = c("jsDG"),
            f = c("MVHH"),
            g = c("M8lA"),
            h = c("yGJW"),
            i = c("OMIV");
        let j = new Set(["turn_5", "turn_10", "image_gen_turn", "homepage", "conversation_turn", "contextual_conversation_turn"]);
        c.d(b, {}, {
            a: function(a) {
                try {
                    let b = (0, g.getClientBootstrap)();
                    if (!b.session?.user?.id || !(0, d.a)(navigator.userAgent)) return;
                    let c = a.get(i.g),
                        e = "1506327862";
                    c?.getLayer(e, {
                        disableExposureLog: !0
                    }).get("account_selector_log_exposure", !1) && c.getLayer(e).get("account_selector_enabled", !1)
                } catch {}
            },
            b: function(a, b, c) {
                let d = !1,
                    g = () => {
                        d = !0
                    };
                try {
                    let e = a.get(h.c);
                    window.addEventListener("pagehide", g, {
                        capture: !0,
                        once: !0
                    }), (0, h.a)(a, f.c, {
                        dlid: b,
                        url: function(a, b) {
                            let c = new URL(a);
                            for (let [a, d] of(c.username = "", c.password = "", c.hash = "", Array.from(c.searchParams)))
                                if (!("dlid" === a && d === b || "utm_campaign" === a && "mweb_app_install" === d || "utm_content" === a && j.has(d)))
                                    if ("referrer" === a) {
                                        let e = new URLSearchParams(d);
                                        for (let [a, c] of Array.from(e))("dlid" !== a || c !== b) && ("utm_source" !== a || "chatgpt_web" !== c) && ("utm_medium" !== a || "mweb_banner" !== c && "mweb_bottomsheet" !== c) && e.set(a, "<redacted>");
                                        c.searchParams.set(a, e.toString())
                                    } else c.searchParams.set(a, "<redacted>");
                            return c.href
                        }(c, b)
                    }, a => {
                        window.removeEventListener("pagehide", g, !0), "sent" === a.status && (d || "hidden" === document.visibilityState) && e.flush().catch(() => {})
                    })
                } catch {
                    window.removeEventListener("pagehide", g, !0)
                }
                try {
                    let b;
                    if (a.get(i.g)?.checkGate("2830112640")) return;
                    let d = new URL(window.location.href),
                        f = a => d.searchParams.get(a)?.trim() || void 0,
                        g = {
                            source: f("utm_source"),
                            medium: f("utm_medium"),
                            campaign: f("utm_campaign"),
                            content: f("utm_content"),
                            term: f("utm_term")
                        },
                        j = {
                            notificationId: f("notification_id"),
                            notificationChannelId: f("notification_channel_id"),
                            entryId: f("entry_id"),
                            deepLinkId: f("deep_link_id")
                        };
                    try {
                        b = document.referrer ? new URL(document.referrer).hostname.toLowerCase() : void 0
                    } catch {}
                    b === d.hostname.toLowerCase() && (b = void 0);
                    let k = Object.values(g).some(a => null != a),
                        l = Object.values(j).some(a => null != a),
                        m = ["gclid", "fbclid", "rdt_cid", "ttclid", "li_fat_id", "msclkid", "oppref", "gbraid", "wbraid"].some(a => null != f(a));
                    if (!k && !l && !m && !b) return;
                    let n = g.source?.toLowerCase() === "sendgrid" && g.medium?.toLowerCase() === "email",
                        o = new URL(c);
                    for (let a of (o.hash = "", o.searchParams.keys())) o.searchParams.set(a, "redacted");
                    let p = "APP_ENTRY_CHANNEL_UNSPECIFIED";
                    n ? p = "APP_ENTRY_CHANNEL_EMAIL_NOTIFICATION" : null != j.notificationId && (p = "APP_ENTRY_CHANNEL_PUSH_NOTIFICATION"), (0, h.a)(a, e.g, {
                        attribution: {
                            source: n ? "notification_email" : "unspecified",
                            utm: k ? g : void 0,
                            channel: p,
                            ...j,
                            referrerDomain: b
                        },
                        destination: {
                            redactedUrl: o.href
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
    nInK: (function(a, b, c) {
        var d = c("nM73"),
            e = c("MwLV"),
            f = c("Cslg"),
            g = c("SHW6"),
            h = c("xcp1"),
            i = c("AOHi"),
            j = c("Kwur"),
            k = c("M8lA"),
            l = c("Ot7V"),
            m = c("X6Vn"),
            n = c("DAA7"),
            o = c("GaA7"),
            p = c("RlnO"),
            q = c("GDNt"),
            r = c("IDma"),
            s = c("f5h2"),
            t = c("lg1r"),
            u = c("RJnh"),
            v = c("ytyy");

        function w(a, b, c) {
            return (0, u.d)(b) ? (window.open(b, "_blank", "noopener,noreferrer"), !0) : null != c ? (0, l.e)({
                event: c,
                href: b,
                initiator: "open_in_browser_bridge",
                openTarget: a.useExternalBrowser ? "external-browser" : void 0
            }) : (0, l.f)({
                href: b,
                initiator: "open_in_browser_bridge",
                openTarget: a.useExternalBrowser ? "external-browser" : void 0
            })
        }
        c.d(b, {}, {
            a: w,
            b: async function(a, b, l, x) {
                if ((0, s.a)(a)) {
                    let a = o.a.systemPermissions;
                    if (!b.allowExternalActions || null == a) return !1;
                    let c = await a.getNotificationPermissionStatus();
                    if (b.isCurrentPresentation?.() === !1 || null == c) return !1;
                    "not-determined" === c && await a.openNotificationSettings();
                    let d = b.eventAccountId,
                        e = b.featureAccessInputs;
                    if (b.beacon?.beacon_id === "codex_home_notification_banner" && !b.eventMetadata?.suppressLifecycle && !b.analyticsContext?.suppressLifecycle && null != d && e?.authenticatedUserId != null) {
                        let f = "not-determined" === c ? await a.getNotificationPermissionStatus() : c,
                            g = () => b.isCurrentPresentation?.() !== !1 && (0, r.a)(b.scope, d, e.userId);
                        if (!g()) return !1;
                        if ("enabled" !== f) return "disabled" === f;
                        let h = e.authenticatedUserId;
                        try {
                            await j.Request.safePatch("/notifications/settings", {
                                expectedIdentity: {
                                    accountId: d,
                                    userId: h
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
                        } catch (a) {
                            if (!g()) return !1;
                            if (a instanceof q.a && 403 === a.status && "Notification setting is not editable" === (0, i.c)(a)) return !0;
                            return (0, s.b)(b.scope), !1
                        }
                        let k = {
                            queryKey: ["chatgpt-notification-settings", h, d],
                            exact: !0
                        };
                        await b.scope.queryClient.cancelQueries(k), b.scope.queryClient.invalidateQueries({
                            ...k,
                            refetchType: (0, r.a)(b.scope, d, e.userId) ? "active" : "none"
                        })
                    }
                    return !0
                }
                let y = l;
                if ("open_local_url" === a.action_v2.action_enum) {
                    if ("/settings/cloud-environments?select=default" === y && b.beacon?.beacon_id === "codex_cloud_home_modal_v2") {
                        let [{
                            blankCloudEnvironmentAvailable$: a
                        }, {
                            startNewConversation: d
                        }] = await Promise.all([Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(645905)]).then(() => c("cLiZ")), Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(741391)]).then(() => c("Q8aV"))]), e = b.eventAccountId;
                        if (b.isCurrentPresentation?.() === !1 || null == e || !(0, r.a)(b.scope, e, b.featureAccessInputs?.userId)) return !1;
                        if (b.scope.get(a)) {
                            let a = !1;
                            return d(b.scope, {
                                codexAppMode: "codex",
                                defaultCloudEnvironment: !0,
                                prefillComposerMode: "local",
                                prefillCloudThreadPrototype: !0,
                                freshDraft: !0,
                                onNavigate: () => {
                                    a = !0
                                }
                            }), a
                        }
                        return b.navigate("/settings/cloud-environments"), !0
                    }
                    if (/^\/admin\/members(?:[?#]|$)/u.test(a.action_v2.web_url)) {
                        let b;
                        (0, e.c)() && !/^local-[a-z0-9-]+\.chatgpt-staging\.com$/i.test(window.location.hostname) ? b = window.location.origin : "openai-dev" === (0, k.getClientBootstrap)().auth.provider && (b = "https://chatgpt-staging.com"), null != b && (y = new URL(a.action_v2.web_url, b).toString())
                    }
                    let g = (0, t.a)(y);
                    if (null != g) {
                        let a = b.scope.get(f.f),
                            c = b.scope.get(f.k);
                        if (!b.allowExternalActions || null == a || null == c || "allowed" !== b.scope.get(p.a).status) return !1;
                        let e = await (0, d.a)();
                        return b.isCurrentPresentation?.() !== !1 && !!(0, r.a)(b.scope, a, c) && "allowed" === b.scope.get(p.a).status && ((0, m.f)(b.scope, e, {
                            ...g,
                            accountId: a,
                            userId: c
                        }), !0)
                    }
                    let i = (0, h.a)(y);
                    if (null != i) {
                        if (!b.allowExternalActions) return !1;
                        let {
                            openTrustedContactBeaconAction: a
                        } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(904661)]).then(() => c("bLYh"));
                        return a(i, {
                            scope: b.scope,
                            navigate: b.navigate
                        }), !0
                    }
                    if ("/?open=workspace-discovery" === y) {
                        let a = b.scope.get(f.f),
                            d = b.scope.get(f.k);
                        if (null == a || null == d || !(0, r.a)(b.scope, a, d)) return !1;
                        let {
                            loadWorkspaceDiscoveryOpener: e
                        } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629)]).then(() => c("gv9R")), g = await e();
                        return !!(0, r.a)(b.scope, a, d) && (g(b.scope, d, "link" === b.source ? void 0 : (0, v.b)(b.beacon)), !0)
                    }
                }
                if (b.allowExternalActions && /^(?:https:\/\/[^/]+)?\/admin(?:[/?#]|$)/u.test(y)) {
                    let a = (0, n.c)(b.scope, y, b.featureAccessInputs?.accountId),
                        c = null == a ? null : await a;
                    if (null != c) return b.isCurrentPresentation?.() !== !1 && w({
                        ...b,
                        useExternalBrowser: !0
                    }, c, x)
                }
                if ((0, u.f)(y)) {
                    let c = (0, g.a)(a),
                        d = c?.searchParams.get("prompt");
                    return "open_local_url" === a.action_v2.action_enum && !0 !== a.action_v2.trigger_turn && c?.pathname === "/" && d ? b.navigate(y, {
                        prefillPrompt: d.replace(/\r\n/g, "\n"),
                        focusComposerNonce: Date.now()
                    }) : b.navigate(y), !0
                }
                return w(b, y, x)
            }
        })
    }),
    f5h2: (function(a, b, c) {
        var d = c("SGsN"),
            e = c("svjy");
        c.d(b, {}, {
            a: function(a) {
                return "open_local_url" === a.action_v2.action_enum && "/?open=notification-settings" === a.action_v2.web_url
            },
            b: function(a) {
                a.get(d.f).danger(a.get(e.a).formatMessage({
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
    AVl4: (function(a, b, c) {
        var d = c("Q840"),
            e = c("AuIy"),
            f = c("hlVK"),
            g = c("Kwur"),
            h = c("dQRk"),
            i = c("hx97"),
            j = c("Ot7V"),
            k = c("OWtl"),
            l = c("IDma"),
            m = c("SPzj");
        let n = new WeakMap,
            o = (0, d.d)(k.a, (a, b) => {
                let {
                    get: c
                } = b;
                if (a?.conversationId == null || null == a.messageId) return null;
                let d = c(h.N, a.conversationId);
                if (null == d) return;
                let f = (0, e.a)({
                    mapping: d,
                    current_node: a.messageId
                }).findLast(i.o);
                return f?.author.role === "user" ? f.id : null
            });
        c.d(b, {}, {
            a: o,
            b: function(a, b) {
                let c = a.action_v2;
                if ("create_presence_session" !== c.action_enum || !a.id || !c.launch_attempt_id || b.eventMetadata?.conversationId !== c.conversation_id || !b.eventMetadata.messageId) return {
                    status: "unsupported"
                };
                let d = b.featureAccessInputs;
                if (void 0 === b.presencePromptId || null == d || d.authLoading || d.accountLoading) return {
                    status: "pending"
                };
                if (b.presencePromptId !== c.message_id) return {
                    status: "unsupported"
                };
                let e = b.eventAccountId ?? d.authenticatedAccountId,
                    h = d.userId;
                if (!b.allowExternalActions || null == e || null == h || "chatgpt" !== d.authMethod || d.accountId !== e || d.authenticatedAccountId !== e) return {
                    status: "unavailable"
                };
                let i = () => (0, l.a)(b.scope, e, h) && (b.isCurrentPresentation?.() ?? !1);
                return {
                    status: "supported",
                    handler: async () => {
                        if (!i()) return !1;
                        let d = n.get(b.scope);
                        null == d && (d = new WeakMap, n.set(b.scope, d));
                        let k = d.get(b.beacon);
                        null == k && (k = new Map, d.set(b.beacon, k));
                        let l = JSON.stringify([e, h, c.conversation_id, c.message_id, c.launch_attempt_id]),
                            o = k.get(l);
                        (null == o || o.completed || null === o.result) && (o = {
                            creation: Promise.resolve().then(async () => {
                                if (!i()) return null;
                                try {
                                    let a = await g.Request.safePost("/buying-advisor/session", {
                                        additionalHeaders: {
                                            "ChatGPT-Account-ID": e,
                                            "x-openai-use-sheep": "1"
                                        },
                                        expectedIdentity: {
                                            accountId: e,
                                            userId: h
                                        },
                                        expectedErrorStatuses: [403, 404, 409, 429],
                                        requestBody: {
                                            conversation_id: c.conversation_id,
                                            message_id: c.message_id,
                                            launch_attempt_id: c.launch_attempt_id
                                        },
                                        retry: "never",
                                        signal: AbortSignal.timeout(55e3)
                                    });
                                    return a.client_secret?.trim() && Number.isFinite(a.client_secret_expires_at) && a.client_secret_expires_at > Date.now() / 1e3 ? {
                                        clientSecret: a.client_secret,
                                        expiresAt: a.client_secret_expires_at
                                    } : null
                                } catch {
                                    return null
                                }
                            }),
                            completed: !1
                        }, k.set(l, o), (0, f.a)({
                            beacon: b.beacon,
                            eventType: "click",
                            eventCtaId: a.id,
                            metadata: b.eventMetadata,
                            accountId: e,
                            keepalive: !0
                        }), null != b.analyticsContext && (0, m.b)(b.scope, {
                            action: "click",
                            actionId: a.id,
                            actionType: a.type,
                            beacon: b.beacon,
                            destinationAction: c.action_enum,
                            ...b.analyticsContext
                        }));
                        let p = await o.creation;
                        if (o.result = p, !i() || o.completed) return !1;
                        o.completed = !0, b.onActionComplete?.(a);
                        let q = new URL("https://openai.com/buying-agent/");
                        return q.search = new URLSearchParams({
                            utm_source: "chatgpt.com",
                            utm_medium: "beacon",
                            utm_campaign: "enterprise_plan_comparison_intent"
                        }).toString(), null != p && p.expiresAt > Date.now() / 1e3 && (q.hash = new URLSearchParams({
                            baps: p.clientSecret
                        }).toString()), (0, j.f)({
                            href: q.href,
                            disposition: "current-tab",
                            initiator: "open_in_browser_bridge"
                        }), {
                            didComplete: !0,
                            eventAccountId: e,
                            shouldResolve: !1
                        }
                    }
                }
            }
        })
    }),
    s4w7: (function(a, b, c) {
        var d = c("Q840"),
            e = c("lAQI"),
            f = c("fHnT"),
            g = c("kphc"),
            h = c("ad0f"),
            i = c("OWtl"),
            j = c("qixt");
        let k = "space_onboarding",
            l = "sidebar-space-button",
            m = (0, d.c)(i.a, a => {
                let {
                    get: b
                } = a;
                if (!b(j.d)) return "codex";
                let c = b(g.b);
                return "chat" === c ? "chatgpt" : "work" === c ? "work_tab" : null
            }),
            n = (0, d.u)(i.a, !1),
            o = (0, d.v)(i.a, a => !1),
            p = e.F({
                action_items: e.g(e.C()).length(0),
                beacon_id: e.z(k),
                beacon_name: e.L(),
                show_timing: e.p(["immediate", "wait_until_conversation_refresh"]).optional().default("immediate"),
                type: e.z("beacon_ui_response"),
                ui_info: e.F({
                    subtitle: e.L().refine(a => a.trim().length > 0),
                    target: e.z(l),
                    title: e.L().refine(a => a.trim().length > 0),
                    type: e.z("beacon_tooltip_info")
                }).loose()
            }).loose();
        c.d(b, {}, {
            a: k,
            b: l,
            c: m,
            d: function(a, b, c) {
                return a.get(m) === b && (0, h.b)(c) && a.get(n)
            },
            e: function(a, b, c) {
                return c === l && (a.get(m) !== b || !a.get(f.a).includes(l))
            },
            f: function(a) {
                return a === k
            },
            g: function(a, b, c, d) {
                return a.get(m) === b && (0, h.b)(c) && !a.get(o, d) && a.get(f.a).includes(l)
            },
            h: o,
            i: n,
            j: p
        })
    }),
    tMkG: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("zd8w"),
            h = c("s4w7"),
            i = c("Bbed"),
            j = c("OWtl");
        let k = (0, i.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(871420)]).then(() => c("q2wP"))).SpaceHomeTooltipTarget, {
            suspendToParent: !0,
            errorFallback: a => (0, d.jsx)(l, {
                ...a
            })
        });

        function l(a) {
            let b, c, d, i = (0, e.c)(5),
                {
                    children: k
                } = a,
                l = (0, f.y)(j.a);
            return i[0] !== l ? (b = () => {
                l.set(h.i, !1)
            }, c = [l], i[0] = l, i[1] = b, i[2] = c) : (b = i[1], c = i[2]), (0, g.useLayoutEffect)(b, c), i[3] !== k ? (d = k({
                ariaDescribedBy: void 0,
                isOpen: !1,
                onActivate: n,
                triggerRef: m
            }), i[3] = k, i[4] = d) : d = i[4], d
        }

        function m() {}

        function n() {}
        c.d(b, {}, {
            a: function(a) {
                let {
                    children: b,
                    ...c
                } = a, e = (0, f.y)(j.a), i = (0, g.useRef)(null), l = (0, g.useCallback)(() => {
                    null != i.current && (window.clearTimeout(i.current), i.current = null)
                }, []), m = a => (0, g.cloneElement)(b(a), c);
                (0, g.useEffect)(() => () => {
                    l(), e.set(h.i, !1)
                }, [l, e]);
                let n = m({
                    ariaDescribedBy: void 0,
                    isOpen: !1,
                    onActivate: () => void 0,
                    triggerRef: a => {
                        if (null != a) {
                            e.set(h.i, !0), l();
                            let a = window.setTimeout(() => {
                                i.current === a && (i.current = null), e.set(h.i, !1)
                            }, 5e3);
                            return i.current = a, () => {
                                window.clearTimeout(a), i.current === a && (i.current = null)
                            }
                        }
                    }
                });
                return (0, d.jsx)(g.Suspense, {
                    fallback: n,
                    children: (0, d.jsx)(k, {
                        onMount: l,
                        children: m
                    })
                })
            }
        })
    }),
    oHzU: (function(a, b, c) {
        let d = Symbol("sheepHomeEventIdentity");

        function e(a) {
            return "beacon_banner_info" === a.ui_info.type
        }

        function f(a) {
            return "beacon_modal_info" === a.ui_info.type
        }

        function g(a) {
            return "beacon_multi_page_modal_info" === a.ui_info.type
        }

        function h(a) {
            return "beacon_container_info" === a.ui_info.type
        }

        function i(a) {
            return "beacon_homepage_takeover_info" === a.ui_info.type
        }

        function j(a) {
            return "library_provider_onboarding_refresh" === a.beacon_id && "beacon_container_info" === a.ui_info.type && "library_google_drive_sidebar_tooltip" === a.ui_info.container_id
        }
        c.d(b, {}, {
            a: e,
            b: function(a) {
                return null != a && h(a) && "cfc_personal_workspace_beacon" === a.beacon_id && "cfc_personal_workspace_beacon" === a.ui_info.container_id
            },
            c: h,
            d: function(a) {
                return "beacon_conversation_inline_info" === a.ui_info.type
            },
            e: function(a) {
                return e(a) || j(a) || i(a) || f(a) || g(a) || "beacon_tooltip_info" === a.ui_info.type
            },
            f: i,
            g: j,
            h: f,
            i: g,
            j: function(a) {
                return "personalized_information_questionnaire" === a.beacon_id && 2 === a.action_items.length && a.action_items.every(a => "submit_personalized_information_questionnaire_feedback" === a.action_v2.action_enum)
            },
            k: d
        })
    }),
    lg1r: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a) {
                let b;
                try {
                    b = new URL(a, "https://chatgpt.com")
                } catch {
                    return null
                }
                if ("https://chatgpt.com" !== b.origin || "/u18-graduation/no-parent" !== b.pathname && "/u18-graduation/teen-unlink" !== b.pathname) return null;
                let c = "/u18-graduation/no-parent" === b.pathname ? "no-parent" : "teen-unlink",
                    d = b.searchParams.get("help_url");
                if (null != d) try {
                    let a = new URL(d);
                    if ("https://help.openai.com" === a.origin && "" === a.username && "" === a.password) return {
                        kind: c,
                        helpUrl: a.href
                    }
                } catch {}
                return {
                    kind: c,
                    helpUrl: "https://help.openai.com/en/articles/20001262"
                }
            }
        })
    }),
    aoML: (function(a, b, c) {
        var d = c("Q840"),
            e = c("rEML"),
            f = c("aTcy"),
            g = c("G4Vg"),
            h = c("laUo"),
            i = c("DVML"),
            j = c("AleY"),
            k = c("vV6o"),
            l = c("OWtl"),
            m = c("hZax"),
            n = c("OMIV"),
            o = c("LjYy");
        let p = "1648954249",
            q = (0, d.h)(l.a, a => {
                let {
                    get: b
                } = a, c = b(n.g);
                return null == c ? null : (0, m.d)(c, p)
            }, a => {
                let {
                    get: b,
                    set: c
                } = a, d = b(n.g);
                if (null == d) return;
                let e = () => {
                    c((0, m.d)(d, p))
                };
                return d.on("values_updated", e), () => {
                    d.off("values_updated", e)
                }
            });

        function r(a, b) {
            let c, {
                    accountId: d,
                    appBaseUrl: f,
                    currentPath: j,
                    eventMetadata: l,
                    rejoinPro: m,
                    goRejoinPlusTreatment: n
                } = b,
                p = a.action_v2,
                q = "pricing",
                r = "",
                s = null;
            switch (p.action_enum) {
                case "get_go":
                    s = p.promo_campaign_id ?? null, c = o.a.GO;
                    break;
                case "get_plus":
                    s = p.promo_campaign_id ?? null, c = o.a.PLUS, "direct" === p.checkout_mode && null == n && (q = "direct", r = (0, k.e)(h.f, f) ?? "");
                    break;
                case "get_pro":
                    if (null != p.pro_offer) return null;
                    c = o.a.PRO;
                    break;
                case "open_plan_pricing":
                    c = ({
                        go: o.a.GO,
                        plus: o.a.PLUS,
                        promax: o.a.PROMAX,
                        team: o.a.SELF_SERVE_BUSINESS
                    })[p.plan_sku];
                    break;
                case "get_team":
                    c = o.a.SELF_SERVE_BUSINESS, "direct" === p.checkout_mode && (q = "direct", r = (0, k.e)(h.c, f) ?? "");
                    break;
                default:
                    return null
            }
            if ("direct" === q && 0 === r.length) return null;
            let t = c === o.a.SELF_SERVE_BUSINESS ? null : (0, g.h)(j),
                u = (0, g.g)(t),
                v = u === l?.conversationId ? u : null,
                w = {
                    accountId: d,
                    checkoutMode: q,
                    promoCampaignId: s,
                    returnPath: null == v ? "/" : t ?? "/",
                    sourceThreadId: v,
                    targetPlan: c,
                    upsellContextId: p.upsell_context_id ?? null
                },
                x = (0, g.c)("pricing" === q ? (0, e.A)((0, i.e)({
                    pathname: (0, e.N)(w.returnPath).pathname
                })) : r, w),
                y = "get_pro" === p.action_enum && m?.accountId === d ? m : void 0;
            if (null != y) {
                let a = new URL(x, f);
                a.searchParams.set("cta_tab", "personal"), a.searchParams.set("highlight_plan", "pro"), a.searchParams.set("pro_variant", "2x"), x = (0, e.A)(a)
            }
            return null == (0, g.k)(new URL(x, "https://chatgpt.com").search) ? null : {
                deferCompletion: "direct" === q && c === o.a.SELF_SERVE_BUSINESS,
                href: x,
                intent: w,
                ...null == y ? {} : {
                    rejoinPro: y
                }
            }
        }
        c.d(b, {}, {
            a: q,
            b: function(a) {
                return a.accountLoading || a.authLoading || "chatgpt" !== a.authMethod || !0 !== a.supportedSurface || null == a.accountId || a.accountId !== a.authenticatedAccountId ? null : a.accountId
            },
            c: r,
            d: function(a, b, c) {
                return null != b.appBaseUrl && null != r(a, {
                    accountId: b.upgradeAccountId ?? "beacon-preflight",
                    appBaseUrl: b.appBaseUrl,
                    currentPath: b.currentPath ?? "/",
                    eventMetadata: b.eventMetadata,
                    goRejoinPlusTreatment: c
                })
            },
            e: function(a, b) {
                let c = function(a) {
                    let b, c, d = a.action_v2;
                    if ("get_go" !== d.action_enum && "get_plus" !== d.action_enum && "get_pro" !== d.action_enum && "get_team" !== d.action_enum) return null;
                    switch (d.action_enum) {
                        case "get_go":
                            b = (c = d.promo_campaign_id) ? f.i : f.g;
                            break;
                        case "get_plus":
                            c = d.promo_campaign_id, b = "direct" === d.checkout_mode ? h.f : (0, f.v)(o.a.PLUS);
                            break;
                        case "get_pro":
                            if (null != d.pro_offer) return null;
                            b = (0, f.v)(o.a.PRO);
                            break;
                        case "get_team":
                            b = "direct" === d.checkout_mode ? h.c : f.g
                    }
                    if (!c) return b;
                    let e = new URL(b);
                    return b !== h.f && (0, j.a)(e, void 0), c && e.searchParams.set("promo_campaign", c), e.href
                }(a);
                if (null == c || null == b.upgradeAccountId || null == b.currentPath || b.isCurrentPresentation?.() === !1) return !1;
                let d = new URL(b.currentPath, "https://chatgpt.com"),
                    g = new URL(c),
                    k = null == b.appBaseUrl ? null : r(a, {
                        accountId: b.upgradeAccountId,
                        appBaseUrl: b.appBaseUrl,
                        currentPath: b.currentPath,
                        eventMetadata: b.eventMetadata
                    });
                if (k?.intent.checkoutMode !== "pricing") return !1;
                let l = k.intent.targetPlan === o.a.SELF_SERVE_BUSINESS;
                g.searchParams.set("cta_tab", l ? "business" : "personal"), g.searchParams.set("highlight_plan", k.intent.targetPlan);
                let m = `${d.pathname}${d.search}${d.hash}`;
                for (let [a, b] of g.searchParams) d.searchParams.set(a, b);
                return b.navigate((0, e.A)((0, i.e)({
                    pathname: d.pathname,
                    search: d.search
                })), {
                    defaultTab: l ? "business" : "personal",
                    returnPath: m,
                    source: "conversation_followup_shelf_link"
                }), !0
            },
            f: function(a, b) {
                let c = "string" == typeof b ? b : function(a) {
                    switch (a.ui_info.type) {
                        case "beacon_banner_info":
                            return `beacon-banner-${a.beacon_id}`;
                        case "beacon_conversation_inline_info":
                            return `beacon-conversation-inline-${a.beacon_id}`;
                        case "beacon_homepage_takeover_info":
                            return `beacon-homepage-takeover-${a.beacon_id}`;
                        case "beacon_modal_info":
                            return `beacon-modal-${a.beacon_id}`;
                        case "beacon_bottom_sheet_info":
                        case "beacon_container_info":
                        case "beacon_multi_page_modal_info":
                        case "beacon_tooltip_info":
                            return null
                    }
                }(b);
                if (null == a || "LocalOverride" !== a.details.reason && a.details.reason?.endsWith(":Recognized") !== !0 || null == c) return !1;
                if (!a.get("suppress_upsell", !1)) return !0;
                let d = a.get("allowed_frontend_entry_point_locations_for_upsell_suppression", []);
                return Array.isArray(d) && d.every(a => "string" == typeof a) && d.includes(c)
            }
        })
    }),
    RJnh: (function(a, b, c) {
        c.d(b, {
            a: () => q,
            b: () => i,
            c: () => p,
            d: () => n,
            e: () => j,
            f: () => m,
            g: () => l,
            h: () => o,
            i: () => k
        });
        var d = c("rEML"),
            e = c("dQkk"),
            f = c("aTcy"),
            g = c("lAQI");
        let h = g.F({
            background_valdi_artwork_url: g.L().optional().catch(void 0),
            background_valdi_artwork_url_dark: g.L().optional().catch(void 0)
        });

        function i(a) {
            let b = a.action_v2,
                c = null;
            if ("open_url" === b.action_enum) c = b.url;
            else if ("open_local_url" === b.action_enum && (c = j(a) ? "/automations" : b.web_url, /^\/admin\/members(?:[?#]|$)/.test(c))) return new URL(c, f.h).toString();
            if (null != c && (/^\/codex(?:\/get-started)?\/?(?:[?#]|$)/.test(c) || /^\/students\/2026\/?(?:[?#]|$)/.test(c))) return `https://chatgpt.com${c}`;
            if (c?.startsWith("#")) {
                let a = (0, e.a)({
                    pathname: "/",
                    search: "",
                    hash: c
                });
                if (null != a) return (0, d.A)(a)
            }
            return null != c && l(c) ? c : null
        }

        function j(a) {
            return "open_local_url" === a.action_v2.action_enum && "/tasks" === a.action_v2.web_url
        }

        function k(a) {
            return "open_local_url" === a.action_v2.action_enum && "/?open=workspace-discovery" === i(a)
        }

        function l(a) {
            return a.startsWith("http://") || a.startsWith("https://") || a.startsWith("codex://") && !1 || m(a) || n(a)
        }

        function m(a) {
            return a.startsWith("/") && !a.startsWith("//")
        }

        function n(a) {
            return /^(?:vscode|cursor|windsurf):extension\/openai\.chatgpt$/.test(a)
        }

        function o(a) {
            return a.startsWith("https://") || a.startsWith("http://") || /^data:image\/svg\+xml;base64,(?=[A-Za-z0-9+/])(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(a)
        }

        function p(a, b) {
            let c = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            if (!c || "none" === a.foreground_image_layout.type) return null;
            let d = b && null != a.foreground_image_url_dark ? a.foreground_image_url_dark : a.foreground_image_url;
            return o(d) ? d : null
        }

        function q(a, b) {
            let c = h.parse(a.custom_fields ?? {}),
                d = b ? c.background_valdi_artwork_url_dark ?? c.background_valdi_artwork_url : c.background_valdi_artwork_url;
            return null != d && function(a) {
                try {
                    let b = new URL(a);
                    return "https://cdn.openai.com" === b.origin && "" === b.username && "" === b.password && b.pathname.startsWith("/beacons/") && b.pathname.endsWith(".json")
                } catch {
                    return !1
                }
            }(d) ? d : null
        }
    }),
    aqNX: (function(a, b, c) {
        var d = c("E8Sp"),
            e = c("Cslg"),
            f = c("OFP1"),
            g = c("kYSX"),
            h = c("un4u"),
            i = c("LLIt"),
            j = c("lTvi"),
            k = c("p4N2"),
            l = c("TFzY"),
            m = c("Lb53"),
            n = c("sMGP");
        c("chkj");
        var o = c("qJjJ"),
            p = c("kphc"),
            q = c("nlNF"),
            r = c("Q3tq"),
            s = c("nVns");

        function t(a, b) {
            let c, d = a.get(n.a, {
                enabled: !1
            }).data;
            if (b.conversationDetailsTarget.isTemporaryChat || null == d || !a.get(f.t) || a.get(o.g)) return;
            if (b.useMergedPicker, "tpp" === b.conversationOrigin) c = a.get(h.f, b).selectedModel;
            else if (b.useMergedPicker) {
                let b = a.get(j.b, {
                    enabled: !1
                }).data;
                c = b && u(a, b)
            } else c = a.get(o.f).selection;
            if (null == c || !d.serviceTiersByModelSlug?.[c.slug]?.some(a => "fast" === a.id)) return;
            let e = (0, s.d)((0, m.g)(a, b.conversationId, "tpp", c.slug));
            return null == e ? void 0 : {
                capability: e,
                model: c
            }
        }

        function u(a, b) {
            let {
                selection: c,
                hasExplicitThinkingEffort: d
            } = a.get(o.f), e = a => {
                let c = b.modelConfigBySlug?.[a];
                return c?.isWorkModeModel === !0 && !0 !== c.disabledByAdmin
            }, f = b.versionOptions ?? [], g = new Set([...b.disabledVersionSlugs ?? [], ...f.flatMap(a => [...a.slugs, ...a.options.map(a => a.slug)])]), h = (b.sliderSettings ?? []).map(a => {
                let {
                    modelSlug: b,
                    thinkingEffort: c
                } = a;
                return {
                    slug: b,
                    thinkingEffort: c,
                    versionId: null
                }
            }).filter(a => e(a.slug) && !g.has(a.slug) && (0, l.e)(b, a)?.isAvailable !== !1), j = new Set(h.map(a => a.slug)), k = b.options.filter(a => !g.has(a.slug) && (null != a.thinkingEffort || !j.has(a.slug))), m = [...f.filter(a => !1 !== a.enabled), {
                id: null,
                options: k
            }].flatMap(a => {
                let {
                    id: b,
                    options: c
                } = a;
                return c.filter(a => e(a.slug) && !1 !== a.isAvailable).map(a => (0, l.j)(a, b))
            });
            m.push(...h);
            let n = a.get(r.b),
                p = a => null == a || n.has(i.a[a]),
                q = m.filter(a => p(a.thinkingEffort)),
                s = (0, l.m)(b);
            for (let a of [c, s]) {
                if (null == a || !e(a.slug)) continue;
                let f = a.thinkingEffort ?? b.defaultThinkingEffortByModelSlug?.[a.slug] ?? null,
                    h = null != a.thinkingEffort && (a === s || a === c && d);
                if (q.length > 0 && !p(f) && !h) continue;
                let i = m.filter(b => b.slug === a.slug && b.thinkingEffort === f),
                    k = i.find(b => b.versionId === a.versionId) ?? i[0];
                if (null != k) return k;
                if (!g.has(a.slug) && !j.has(a.slug)) {
                    let c = (0, l.e)(b, a);
                    if (null != c && !1 !== c.isAvailable) return (0, l.j)(c, null)
                }
            }
            let t = q.length > 0 ? q : m;
            return t.find(a => a.slug === c.slug) ?? t.find(a => a.slug === b.defaultModelSlug) ?? t[0]
        }
        c.d(b, {}, {
            a: async function(a, b) {
                let c = t(a, b);
                if (null == c) return !1;
                let d = (0, m.k)(a, b.conversationId, "fast");
                return "tpp" !== b.conversationOrigin && (b.useMergedPicker && (0, k.g)(a, b.conversationId, c.model), (0, p.n)(a, "work")), await d, !0
            },
            b: u,
            c: function(a, b, c) {
                let d = b && t(a, b);
                return d ? [...c ?? [], d.capability] : c
            },
            d: async function(a, b) {
                if (!a.get(g.k)) return {};
                let c = a.get(e.f),
                    f = a.get(e.k),
                    h = a.get(d.b).pathname,
                    i = a.get(q.e);
                if (null == c || null == f) return null;
                try {
                    if (await Promise.all([a.query.getOrFetch(j.b), a.query.getOrFetch(n.a), (0, o.a)(a)]), b?.() === !1 || a.get(d.b).pathname !== h || a.get(q.e) !== i || a.get(e.f) !== c || a.get(e.k) !== f || !(0, p.h)(a) || !a.get(g.k)) return null;
                    let k = a.get(j.b).data,
                        l = k && u(a, k);
                    return null == l ? null : {
                        model: l
                    }
                } catch {
                    return null
                }
            }
        })
    }),
    nVns: (function(a, b, c) {
        var d = c("l2g8");
        let e = "work_fast_mode_selected",
            f = "work_fast_mode_selectable";
        c.d(b, {}, {
            a: "work_home_enable_fast_mode",
            b: f,
            c: e,
            d: function(a) {
                return (0, d.m)(a) ? e : null == a || "standard" === a || "default" === a ? f : void 0
            }
        })
    }),
    ytyy: (function(a, b, c) {
        var d = c("lAQI");
        let e = "workspace_discovery_plugin_usage_banner",
            f = d.F({
                beaconId: d.p(["workspace_discovery_home_banner", e]),
                copyVariant: d.p(["company_pays", "bring_your_work"]).optional().catch(void 0)
            });
        c.d(b, {}, {
            a: e,
            b: function(a) {
                let b = f.safeParse({
                    beaconId: a.beacon_id,
                    copyVariant: "workspace_discovery_home_banner" === a.beacon_id ? a.custom_fields?.workspace_discovery_copy_variant : void 0
                });
                return b.success ? b.data : void 0
            }
        })
    })
};