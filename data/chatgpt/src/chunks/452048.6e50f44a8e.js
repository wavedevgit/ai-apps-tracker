export const __rspack_esm_ids = [452048];
export const __webpack_modules__ = {
    fshA: (function(e, t, n) {
        n.d(t, {}, {
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptConversationalOnboardingActionClicked"
            },
            b: {
                $type: "protobuf_analytics_events.v1.ChatgptConversationalOnboardingActionShown"
            },
            c: {
                $type: "protobuf_analytics_events.v1.ChatgptConversationalOnboardingBootstrapCompleted"
            },
            d: {
                $type: "protobuf_analytics_events.v1.ChatgptConversationalOnboardingBootstrapSkipped"
            },
            e: {
                $type: "protobuf_analytics_events.v1.ChatgptConversationalOnboardingBootstrapStarted"
            },
            f: {
                $type: "protobuf_analytics_events.v1.ChatgptConversationalOnboardingRedirectFired"
            }
        })
    }),
    E1TB: (function(e, t, n) {
        var r, a, l, _, i, o, s, c, T, u, E, d, P, S, A, R, I, C, p, O, f, m, g, N = ((r = {}).CHATGPT_TPP_WORK_MODE_NUX_ACTION_UNSPECIFIED = "CHATGPT_TPP_WORK_MODE_NUX_ACTION_UNSPECIFIED", r.CHATGPT_TPP_WORK_MODE_NUX_ACTION_SHOWN = "CHATGPT_TPP_WORK_MODE_NUX_ACTION_SHOWN", r.CHATGPT_TPP_WORK_MODE_NUX_ACTION_TRY_IT_CLICKED = "CHATGPT_TPP_WORK_MODE_NUX_ACTION_TRY_IT_CLICKED", r.CHATGPT_TPP_WORK_MODE_NUX_ACTION_LEARN_MORE_CLICKED = "CHATGPT_TPP_WORK_MODE_NUX_ACTION_LEARN_MORE_CLICKED", r.CHATGPT_TPP_WORK_MODE_NUX_ACTION_CLOSE_CLICKED = "CHATGPT_TPP_WORK_MODE_NUX_ACTION_CLOSE_CLICKED", r.CHATGPT_TPP_WORK_MODE_NUX_ACTION_DISMISS_REQUESTED = "CHATGPT_TPP_WORK_MODE_NUX_ACTION_DISMISS_REQUESTED", r.CHATGPT_TPP_WORK_MODE_NUX_ACTION_WORK_DEFAULT_CONTINUE_CLICKED = "CHATGPT_TPP_WORK_MODE_NUX_ACTION_WORK_DEFAULT_CONTINUE_CLICKED", r.UNRECOGNIZED = "UNRECOGNIZED", r),
            h = ((a = {}).CHATGPT_TPP_ONBOARDING_PLUGIN_BROWSER_ENTRY_POINT_UNSPECIFIED = "CHATGPT_TPP_ONBOARDING_PLUGIN_BROWSER_ENTRY_POINT_UNSPECIFIED", a.CHATGPT_TPP_ONBOARDING_PLUGIN_BROWSER_ENTRY_POINT_BROWSE_ALL = "CHATGPT_TPP_ONBOARDING_PLUGIN_BROWSER_ENTRY_POINT_BROWSE_ALL", a.CHATGPT_TPP_ONBOARDING_PLUGIN_BROWSER_ENTRY_POINT_SEE_MORE = "CHATGPT_TPP_ONBOARDING_PLUGIN_BROWSER_ENTRY_POINT_SEE_MORE", a.UNRECOGNIZED = "UNRECOGNIZED", a),
            v = ((l = {}).CHATGPT_TPP_ONBOARDING_PLUGIN_SELECTION_SURFACE_UNSPECIFIED = "CHATGPT_TPP_ONBOARDING_PLUGIN_SELECTION_SURFACE_UNSPECIFIED", l.CHATGPT_TPP_ONBOARDING_PLUGIN_SELECTION_SURFACE_RECOMMENDATION_CARD = "CHATGPT_TPP_ONBOARDING_PLUGIN_SELECTION_SURFACE_RECOMMENDATION_CARD", l.CHATGPT_TPP_ONBOARDING_PLUGIN_SELECTION_SURFACE_BROWSER = "CHATGPT_TPP_ONBOARDING_PLUGIN_SELECTION_SURFACE_BROWSER", l.UNRECOGNIZED = "UNRECOGNIZED", l),
            G = ((_ = {}).CHATGPT_TPP_ONBOARDING_PLUGIN_INSTALL_OUTCOME_UNSPECIFIED = "CHATGPT_TPP_ONBOARDING_PLUGIN_INSTALL_OUTCOME_UNSPECIFIED", _.CHATGPT_TPP_ONBOARDING_PLUGIN_INSTALL_OUTCOME_SUCCESS = "CHATGPT_TPP_ONBOARDING_PLUGIN_INSTALL_OUTCOME_SUCCESS", _.CHATGPT_TPP_ONBOARDING_PLUGIN_INSTALL_OUTCOME_FAILED = "CHATGPT_TPP_ONBOARDING_PLUGIN_INSTALL_OUTCOME_FAILED", _.UNRECOGNIZED = "UNRECOGNIZED", _),
            b = ((i = {}).CHATGPT_TPP_BROWSER_AUTH_ELICITATION_ACTION_UNSPECIFIED = "CHATGPT_TPP_BROWSER_AUTH_ELICITATION_ACTION_UNSPECIFIED", i.CHATGPT_TPP_BROWSER_AUTH_ELICITATION_ACTION_SHOWN = "CHATGPT_TPP_BROWSER_AUTH_ELICITATION_ACTION_SHOWN", i.CHATGPT_TPP_BROWSER_AUTH_ELICITATION_ACTION_TAKEOVER_CLICKED = "CHATGPT_TPP_BROWSER_AUTH_ELICITATION_ACTION_TAKEOVER_CLICKED", i.UNRECOGNIZED = "UNRECOGNIZED", i),
            y = ((o = {}).CHATGPT_TPP_BROWSER_AUTO_REVIEW_ELICITATION_ACTION_UNSPECIFIED = "CHATGPT_TPP_BROWSER_AUTO_REVIEW_ELICITATION_ACTION_UNSPECIFIED", o.CHATGPT_TPP_BROWSER_AUTO_REVIEW_ELICITATION_ACTION_SHOWN = "CHATGPT_TPP_BROWSER_AUTO_REVIEW_ELICITATION_ACTION_SHOWN", o.CHATGPT_TPP_BROWSER_AUTO_REVIEW_ELICITATION_ACTION_ALLOW_ALL_CLICKED = "CHATGPT_TPP_BROWSER_AUTO_REVIEW_ELICITATION_ACTION_ALLOW_ALL_CLICKED", o.CHATGPT_TPP_BROWSER_AUTO_REVIEW_ELICITATION_ACTION_CONFIRMATION_SHOWN = "CHATGPT_TPP_BROWSER_AUTO_REVIEW_ELICITATION_ACTION_CONFIRMATION_SHOWN", o.CHATGPT_TPP_BROWSER_AUTO_REVIEW_ELICITATION_ACTION_CONFIRMATION_ALLOWED = "CHATGPT_TPP_BROWSER_AUTO_REVIEW_ELICITATION_ACTION_CONFIRMATION_ALLOWED", o.CHATGPT_TPP_BROWSER_AUTO_REVIEW_ELICITATION_ACTION_CONFIRMATION_DISMISSED = "CHATGPT_TPP_BROWSER_AUTO_REVIEW_ELICITATION_ACTION_CONFIRMATION_DISMISSED", o.UNRECOGNIZED = "UNRECOGNIZED", o),
            H = ((s = {}).CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_UNSPECIFIED = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_UNSPECIFIED", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_SELECT_METHOD = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_SELECT_METHOD", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_SELECT_SAVED_CREDENTIAL = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_SELECT_SAVED_CREDENTIAL", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_USE_PASSWORD_MANAGER = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_USE_PASSWORD_MANAGER", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_ENTER_MANUALLY = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_ENTER_MANUALLY", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_REMEMBER_CREDENTIALS = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_REMEMBER_CREDENTIALS", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_SUBMIT = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_SUBMIT", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_DECLINE = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_DECLINE", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_BACK = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_BACK", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_MANUAL_DONE = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_MANUAL_DONE", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_RETRY_ACKNOWLEDGEMENT = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_RETRY_ACKNOWLEDGEMENT", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_CHECK_STATUS = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_CHECK_STATUS", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_INSPECT_BROWSER = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_INSPECT_BROWSER", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_REFRESH_QR = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_REFRESH_QR", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_TOGGLE_PASSWORD_VISIBILITY = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_TOGGLE_PASSWORD_VISIBILITY", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_PASSKEY_APPROVE = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_PASSKEY_APPROVE", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_PASSKEY_CANCEL = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_PASSKEY_CANCEL", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_PASSKEY_SELECT_CREDENTIAL = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_PASSKEY_SELECT_CREDENTIAL", s.CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_PASSKEY_SUBMIT_PIN = "CHATGPT_TPP_BROWSER_AUTH_ACTION_TYPE_PASSKEY_SUBMIT_PIN", s.UNRECOGNIZED = "UNRECOGNIZED", s),
            x = ((c = {}).CHATGPT_TPP_BROWSER_AUTH_ACTION_PHASE_UNSPECIFIED = "CHATGPT_TPP_BROWSER_AUTH_ACTION_PHASE_UNSPECIFIED", c.CHATGPT_TPP_BROWSER_AUTH_ACTION_PHASE_REQUESTED = "CHATGPT_TPP_BROWSER_AUTH_ACTION_PHASE_REQUESTED", c.CHATGPT_TPP_BROWSER_AUTH_ACTION_PHASE_OBSERVED = "CHATGPT_TPP_BROWSER_AUTH_ACTION_PHASE_OBSERVED", c.CHATGPT_TPP_BROWSER_AUTH_ACTION_PHASE_COMPLETED = "CHATGPT_TPP_BROWSER_AUTH_ACTION_PHASE_COMPLETED", c.CHATGPT_TPP_BROWSER_AUTH_ACTION_PHASE_FAILED = "CHATGPT_TPP_BROWSER_AUTH_ACTION_PHASE_FAILED", c.CHATGPT_TPP_BROWSER_AUTH_ACTION_PHASE_CANCELLED = "CHATGPT_TPP_BROWSER_AUTH_ACTION_PHASE_CANCELLED", c.UNRECOGNIZED = "UNRECOGNIZED", c),
            U = ((T = {}).CHATGPT_TPP_BROWSER_PRODUCT_EXPERIENCE_UNSPECIFIED = "CHATGPT_TPP_BROWSER_PRODUCT_EXPERIENCE_UNSPECIFIED", T.CHATGPT_TPP_BROWSER_PRODUCT_EXPERIENCE_WORK = "CHATGPT_TPP_BROWSER_PRODUCT_EXPERIENCE_WORK", T.CHATGPT_TPP_BROWSER_PRODUCT_EXPERIENCE_DOTS = "CHATGPT_TPP_BROWSER_PRODUCT_EXPERIENCE_DOTS", T.UNRECOGNIZED = "UNRECOGNIZED", T),
            W = ((u = {}).CHATGPT_TPP_BROWSER_SURFACE_UNSPECIFIED = "CHATGPT_TPP_BROWSER_SURFACE_UNSPECIFIED", u.CHATGPT_TPP_BROWSER_SURFACE_CODEX = "CHATGPT_TPP_BROWSER_SURFACE_CODEX", u.CHATGPT_TPP_BROWSER_SURFACE_CHATGPT_WEB = "CHATGPT_TPP_BROWSER_SURFACE_CHATGPT_WEB", u.UNRECOGNIZED = "UNRECOGNIZED", u),
            D = ((E = {}).CHATGPT_TPP_BROWSER_AUTH_OUTCOME_UNSPECIFIED = "CHATGPT_TPP_BROWSER_AUTH_OUTCOME_UNSPECIFIED", E.CHATGPT_TPP_BROWSER_AUTH_OUTCOME_UNKNOWN = "CHATGPT_TPP_BROWSER_AUTH_OUTCOME_UNKNOWN", E.CHATGPT_TPP_BROWSER_AUTH_OUTCOME_SUCCEEDED = "CHATGPT_TPP_BROWSER_AUTH_OUTCOME_SUCCEEDED", E.CHATGPT_TPP_BROWSER_AUTH_OUTCOME_FAILED = "CHATGPT_TPP_BROWSER_AUTH_OUTCOME_FAILED", E.CHATGPT_TPP_BROWSER_AUTH_OUTCOME_CANCELLED = "CHATGPT_TPP_BROWSER_AUTH_OUTCOME_CANCELLED", E.UNRECOGNIZED = "UNRECOGNIZED", E),
            B = ((d = {}).CHATGPT_TPP_BROWSER_AUTH_METHOD_UNSPECIFIED = "CHATGPT_TPP_BROWSER_AUTH_METHOD_UNSPECIFIED", d.CHATGPT_TPP_BROWSER_AUTH_METHOD_SAVED = "CHATGPT_TPP_BROWSER_AUTH_METHOD_SAVED", d.CHATGPT_TPP_BROWSER_AUTH_METHOD_TYPED = "CHATGPT_TPP_BROWSER_AUTH_METHOD_TYPED", d.CHATGPT_TPP_BROWSER_AUTH_METHOD_OTP = "CHATGPT_TPP_BROWSER_AUTH_METHOD_OTP", d.CHATGPT_TPP_BROWSER_AUTH_METHOD_QR = "CHATGPT_TPP_BROWSER_AUTH_METHOD_QR", d.CHATGPT_TPP_BROWSER_AUTH_METHOD_PASSWORD_MANAGER = "CHATGPT_TPP_BROWSER_AUTH_METHOD_PASSWORD_MANAGER", d.CHATGPT_TPP_BROWSER_AUTH_METHOD_MANUAL = "CHATGPT_TPP_BROWSER_AUTH_METHOD_MANUAL", d.CHATGPT_TPP_BROWSER_AUTH_METHOD_PASSKEY = "CHATGPT_TPP_BROWSER_AUTH_METHOD_PASSKEY", d.UNRECOGNIZED = "UNRECOGNIZED", d),
            L = ((P = {}).CHATGPT_TPP_BROWSER_AUTH_PROVIDER_UNSPECIFIED = "CHATGPT_TPP_BROWSER_AUTH_PROVIDER_UNSPECIFIED", P.CHATGPT_TPP_BROWSER_AUTH_PROVIDER_OPENAI_PASSWORDS = "CHATGPT_TPP_BROWSER_AUTH_PROVIDER_OPENAI_PASSWORDS", P.CHATGPT_TPP_BROWSER_AUTH_PROVIDER_ONEPASSWORD = "CHATGPT_TPP_BROWSER_AUTH_PROVIDER_ONEPASSWORD", P.UNRECOGNIZED = "UNRECOGNIZED", P),
            w = ((S = {}).CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_UNSPECIFIED = "CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_UNSPECIFIED", S.CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_SUBMITTED = "CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_SUBMITTED", S.CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_DECLINED = "CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_DECLINED", S.CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_CANCELLED = "CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_CANCELLED", S.CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_UNAVAILABLE = "CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_UNAVAILABLE", S.CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_EXPIRED = "CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_EXPIRED", S.CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_ORIGIN_CHANGED = "CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_ORIGIN_CHANGED", S.CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_PAGE_CHANGED = "CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_PAGE_CHANGED", S.CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_LOCATOR_INVALID = "CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_LOCATOR_INVALID", S.CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_SUBMISSION_FAILED = "CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_SUBMISSION_FAILED", S.CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_UNKNOWN = "CHATGPT_TPP_BROWSER_AUTH_FILL_STATUS_UNKNOWN", S.UNRECOGNIZED = "UNRECOGNIZED", S),
            M = ((A = {}).CHATGPT_TPP_BROWSER_AUTH_SAVE_STATUS_UNSPECIFIED = "CHATGPT_TPP_BROWSER_AUTH_SAVE_STATUS_UNSPECIFIED", A.CHATGPT_TPP_BROWSER_AUTH_SAVE_STATUS_NOT_REQUESTED = "CHATGPT_TPP_BROWSER_AUTH_SAVE_STATUS_NOT_REQUESTED", A.CHATGPT_TPP_BROWSER_AUTH_SAVE_STATUS_SAVED = "CHATGPT_TPP_BROWSER_AUTH_SAVE_STATUS_SAVED", A.CHATGPT_TPP_BROWSER_AUTH_SAVE_STATUS_FAILED = "CHATGPT_TPP_BROWSER_AUTH_SAVE_STATUS_FAILED", A.CHATGPT_TPP_BROWSER_AUTH_SAVE_STATUS_UNKNOWN = "CHATGPT_TPP_BROWSER_AUTH_SAVE_STATUS_UNKNOWN", A.UNRECOGNIZED = "UNRECOGNIZED", A),
            k = ((R = {}).CHATGPT_TPP_BROWSER_AUTH_FAILURE_STAGE_UNSPECIFIED = "CHATGPT_TPP_BROWSER_AUTH_FAILURE_STAGE_UNSPECIFIED", R.CHATGPT_TPP_BROWSER_AUTH_FAILURE_STAGE_PREPARATION = "CHATGPT_TPP_BROWSER_AUTH_FAILURE_STAGE_PREPARATION", R.CHATGPT_TPP_BROWSER_AUTH_FAILURE_STAGE_FILL = "CHATGPT_TPP_BROWSER_AUTH_FAILURE_STAGE_FILL", R.CHATGPT_TPP_BROWSER_AUTH_FAILURE_STAGE_SAVE = "CHATGPT_TPP_BROWSER_AUTH_FAILURE_STAGE_SAVE", R.CHATGPT_TPP_BROWSER_AUTH_FAILURE_STAGE_RESPONSE_ACKNOWLEDGEMENT = "CHATGPT_TPP_BROWSER_AUTH_FAILURE_STAGE_RESPONSE_ACKNOWLEDGEMENT", R.CHATGPT_TPP_BROWSER_AUTH_FAILURE_STAGE_STATUS_CHECK = "CHATGPT_TPP_BROWSER_AUTH_FAILURE_STAGE_STATUS_CHECK", R.CHATGPT_TPP_BROWSER_AUTH_FAILURE_STAGE_PASSKEY = "CHATGPT_TPP_BROWSER_AUTH_FAILURE_STAGE_PASSKEY", R.UNRECOGNIZED = "UNRECOGNIZED", R),
            j = ((I = {}).CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_UNSPECIFIED = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_UNSPECIFIED", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_OPEN_SECTION = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_OPEN_SECTION", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_BACK = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_BACK", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_RETRY_LOAD = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_RETRY_LOAD", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_OPEN_ADD_SITE = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_OPEN_ADD_SITE", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_CANCEL_ADD_SITE = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_CANCEL_ADD_SITE", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_ADD_SITE = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_ADD_SITE", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_CHANGE_SITE_PERMISSION = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_CHANGE_SITE_PERMISSION", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_REMOVE_SITE = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_REMOVE_SITE", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_CHANGE_DEFAULT_PERMISSION = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_CHANGE_DEFAULT_PERMISSION", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_OPEN_DELETE_CONFIRMATION = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_OPEN_DELETE_CONFIRMATION", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_CANCEL_DELETE = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_CANCEL_DELETE", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_DELETE_COOKIES = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_DELETE_COOKIES", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_DELETE_PASSKEY = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_DELETE_PASSKEY", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_OPEN_SAVED_CREDENTIAL = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_OPEN_SAVED_CREDENTIAL", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_DELETE_SAVED_CREDENTIAL = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_DELETE_SAVED_CREDENTIAL", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_LOAD_MORE_CREDENTIALS = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_LOAD_MORE_CREDENTIALS", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_CONNECT_PASSWORD_MANAGER = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_CONNECT_PASSWORD_MANAGER", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_CANCEL_PASSWORD_MANAGER_SETUP = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_CANCEL_PASSWORD_MANAGER_SETUP", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_DISCONNECT_PASSWORD_MANAGER = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_DISCONNECT_PASSWORD_MANAGER", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_REFRESH_PASSWORD_MANAGER = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_REFRESH_PASSWORD_MANAGER", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_TOGGLE_COOKIE_GROUP = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_TOGGLE_COOKIE_GROUP", I.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_SEARCH_SAVED_CREDENTIALS = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_TYPE_SEARCH_SAVED_CREDENTIALS", I.UNRECOGNIZED = "UNRECOGNIZED", I),
            F = ((C = {}).CHATGPT_TPP_BROWSER_SETTINGS_ACTION_PHASE_UNSPECIFIED = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_PHASE_UNSPECIFIED", C.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_PHASE_REQUESTED = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_PHASE_REQUESTED", C.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_PHASE_COMPLETED = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_PHASE_COMPLETED", C.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_PHASE_FAILED = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_PHASE_FAILED", C.CHATGPT_TPP_BROWSER_SETTINGS_ACTION_PHASE_CANCELLED = "CHATGPT_TPP_BROWSER_SETTINGS_ACTION_PHASE_CANCELLED", C.UNRECOGNIZED = "UNRECOGNIZED", C),
            Y = ((p = {}).CHATGPT_TPP_BROWSER_SETTINGS_SECTION_UNSPECIFIED = "CHATGPT_TPP_BROWSER_SETTINGS_SECTION_UNSPECIFIED", p.CHATGPT_TPP_BROWSER_SETTINGS_SECTION_PERMISSIONS = "CHATGPT_TPP_BROWSER_SETTINGS_SECTION_PERMISSIONS", p.CHATGPT_TPP_BROWSER_SETTINGS_SECTION_COOKIES = "CHATGPT_TPP_BROWSER_SETTINGS_SECTION_COOKIES", p.CHATGPT_TPP_BROWSER_SETTINGS_SECTION_PASSKEYS = "CHATGPT_TPP_BROWSER_SETTINGS_SECTION_PASSKEYS", p.CHATGPT_TPP_BROWSER_SETTINGS_SECTION_PASSWORD_MANAGERS = "CHATGPT_TPP_BROWSER_SETTINGS_SECTION_PASSWORD_MANAGERS", p.CHATGPT_TPP_BROWSER_SETTINGS_SECTION_SAVED_CREDENTIALS = "CHATGPT_TPP_BROWSER_SETTINGS_SECTION_SAVED_CREDENTIALS", p.UNRECOGNIZED = "UNRECOGNIZED", p),
            V = ((O = {}).CHATGPT_TPP_BROWSER_SETTINGS_RESOURCE_TYPE_UNSPECIFIED = "CHATGPT_TPP_BROWSER_SETTINGS_RESOURCE_TYPE_UNSPECIFIED", O.CHATGPT_TPP_BROWSER_SETTINGS_RESOURCE_TYPE_SITE_PERMISSION = "CHATGPT_TPP_BROWSER_SETTINGS_RESOURCE_TYPE_SITE_PERMISSION", O.CHATGPT_TPP_BROWSER_SETTINGS_RESOURCE_TYPE_DEFAULT_PERMISSION = "CHATGPT_TPP_BROWSER_SETTINGS_RESOURCE_TYPE_DEFAULT_PERMISSION", O.CHATGPT_TPP_BROWSER_SETTINGS_RESOURCE_TYPE_COOKIES = "CHATGPT_TPP_BROWSER_SETTINGS_RESOURCE_TYPE_COOKIES", O.CHATGPT_TPP_BROWSER_SETTINGS_RESOURCE_TYPE_PASSKEY = "CHATGPT_TPP_BROWSER_SETTINGS_RESOURCE_TYPE_PASSKEY", O.CHATGPT_TPP_BROWSER_SETTINGS_RESOURCE_TYPE_PASSWORD_MANAGER = "CHATGPT_TPP_BROWSER_SETTINGS_RESOURCE_TYPE_PASSWORD_MANAGER", O.CHATGPT_TPP_BROWSER_SETTINGS_RESOURCE_TYPE_SAVED_CREDENTIAL = "CHATGPT_TPP_BROWSER_SETTINGS_RESOURCE_TYPE_SAVED_CREDENTIAL", O.UNRECOGNIZED = "UNRECOGNIZED", O),
            K = ((f = {}).CHATGPT_TPP_BROWSER_SETTINGS_PERMISSION_UNSPECIFIED = "CHATGPT_TPP_BROWSER_SETTINGS_PERMISSION_UNSPECIFIED", f.CHATGPT_TPP_BROWSER_SETTINGS_PERMISSION_ALLOW = "CHATGPT_TPP_BROWSER_SETTINGS_PERMISSION_ALLOW", f.CHATGPT_TPP_BROWSER_SETTINGS_PERMISSION_DENY = "CHATGPT_TPP_BROWSER_SETTINGS_PERMISSION_DENY", f.CHATGPT_TPP_BROWSER_SETTINGS_PERMISSION_UNSET = "CHATGPT_TPP_BROWSER_SETTINGS_PERMISSION_UNSET", f.CHATGPT_TPP_BROWSER_SETTINGS_PERMISSION_ALWAYS_ALLOW = "CHATGPT_TPP_BROWSER_SETTINGS_PERMISSION_ALWAYS_ALLOW", f.CHATGPT_TPP_BROWSER_SETTINGS_PERMISSION_ALWAYS_ASK = "CHATGPT_TPP_BROWSER_SETTINGS_PERMISSION_ALWAYS_ASK", f.CHATGPT_TPP_BROWSER_SETTINGS_PERMISSION_AUTO_APPROVE = "CHATGPT_TPP_BROWSER_SETTINGS_PERMISSION_AUTO_APPROVE", f.UNRECOGNIZED = "UNRECOGNIZED", f),
            $ = ((m = {}).CHATGPT_TPP_BROWSER_SETTINGS_DELETION_SCOPE_UNSPECIFIED = "CHATGPT_TPP_BROWSER_SETTINGS_DELETION_SCOPE_UNSPECIFIED", m.CHATGPT_TPP_BROWSER_SETTINGS_DELETION_SCOPE_ALL = "CHATGPT_TPP_BROWSER_SETTINGS_DELETION_SCOPE_ALL", m.CHATGPT_TPP_BROWSER_SETTINGS_DELETION_SCOPE_SITE = "CHATGPT_TPP_BROWSER_SETTINGS_DELETION_SCOPE_SITE", m.CHATGPT_TPP_BROWSER_SETTINGS_DELETION_SCOPE_SITE_AND_SUBDOMAINS = "CHATGPT_TPP_BROWSER_SETTINGS_DELETION_SCOPE_SITE_AND_SUBDOMAINS", m.UNRECOGNIZED = "UNRECOGNIZED", m),
            Z = ((g = {}).CHATGPT_TPP_BROWSER_SETTINGS_PROVIDER_UNSPECIFIED = "CHATGPT_TPP_BROWSER_SETTINGS_PROVIDER_UNSPECIFIED", g.CHATGPT_TPP_BROWSER_SETTINGS_PROVIDER_OPENAI_PASSWORDS = "CHATGPT_TPP_BROWSER_SETTINGS_PROVIDER_OPENAI_PASSWORDS", g.CHATGPT_TPP_BROWSER_SETTINGS_PROVIDER_ONEPASSWORD = "CHATGPT_TPP_BROWSER_SETTINGS_PROVIDER_ONEPASSWORD", g.UNRECOGNIZED = "UNRECOGNIZED", g);
        n.d(t, {}, {
            A: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingEntryPointClicked"
            },
            B: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingEntryPointDismissed"
            },
            C: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingEntryPointImpression"
            },
            D: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingFlowLifecycle"
            },
            E: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingPermission"
            },
            F: h,
            G: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingPluginBrowserOpened"
            },
            H: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingPluginInstallCompleted"
            },
            I: G,
            J: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingPluginSelected"
            },
            K: v,
            L: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingPluginsShown"
            },
            M: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingPresentationShown"
            },
            N: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingRoleConfirmed"
            },
            O: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingRoleSelectorShown"
            },
            P: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingSuggestionClicked"
            },
            Q: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingSuggestionImpression"
            },
            R: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingTaskConversationLinked"
            },
            S: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingTaskSubmitted"
            },
            T: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingWelcomeShown"
            },
            U: {
                $type: "protobuf_analytics_events.v1.ChatgptTppWorkModeNux"
            },
            V: N,
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptTppBrowserAuthAction"
            },
            b: x,
            c: H,
            d: {
                $type: "protobuf_analytics_events.v1.ChatgptTppBrowserAuthElicitation"
            },
            e: b,
            f: k,
            g: w,
            h: B,
            i: D,
            j: L,
            k: M,
            l: {
                $type: "protobuf_analytics_events.v1.ChatgptTppBrowserAutoReviewElicitation"
            },
            m: y,
            n: U,
            o: {
                $type: "protobuf_analytics_events.v1.ChatgptTppBrowserSettingsAction"
            },
            p: F,
            q: j,
            r: $,
            s: K,
            t: Z,
            u: V,
            v: Y,
            w: W,
            x: {
                $type: "protobuf_analytics_events.v1.ChatgptTppChatToWorkHandoffClicked"
            },
            y: {
                $type: "protobuf_analytics_events.v1.ChatgptTppMcpSourceCitationClicked"
            },
            z: {
                $type: "protobuf_analytics_events.v1.ChatgptTppOnboardingCompleted"
            }
        })
    }),
    xAIC: (function(e, t, n) {
        var r = n("ASxG");
        let a = r.object({
                index: r.string().regex(/^\d+$/).transform(Number)
            }).strip(),
            l = r.object({
                marker_text: r.string().trim().min(1).optional(),
                marker_type: r.string().trim().min(1).optional()
            }).strip();
        n.d(t, {}, {
            a: function(e) {
                let t = a.safeParse(e);
                return t.success ? t.data.index : null
            },
            b: function(e) {
                let t = l.safeParse(e);
                return t.success ? t.data.marker_text ?? null : null
            },
            c: function(e) {
                let t = l.safeParse(e);
                return t.success ? t.data.marker_type ?? null : null
            }
        })
    }),
    VlIB: (function(e, t, n) {
        let r = (0, n("zd8w").createContext)(null);
        n.d(t, {}, {
            a: r
        })
    }),
    zn0A: (function(e, t, n) {
        var r = n("iTtm"),
            a = n("tSEg");
        let l = (0, r.u)(a.a, () => null);
        n.d(t, {}, {
            a: l
        })
    }),
    PMYZ: (function(e, t, n) {
        n.d(t, {
            ChatGptMarkdown: () => eO
        });
        var r = n("ABep"),
            a = n("QosV"),
            l = n("iTtm"),
            _ = n("rKAs"),
            i = n("zd8w"),
            o = n("StMt"),
            s = n("AoaR"),
            c = n("RUBg"),
            T = n("pxwu"),
            u = n("v7qY"),
            E = n("Bbed"),
            d = n("BGAk");
        let P = (0, E.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(27910)]).then(n.bind(n, "as01"))).CollegePlanReentryLink, {
            fallback: e => {
                let {
                    fallback: t
                } = e;
                return t
            },
            errorFallback: e => {
                let {
                    fallback: t
                } = e;
                return t
            }
        });

        function S(e) {
            let t, n, l, _, o, c = (0, a.c)(17),
                {
                    children: T,
                    formatting: E,
                    renderBlock: S,
                    renderContainer: R,
                    standaloneParagraph: I
                } = e,
                C = void 0 !== I && I,
                [p, O] = (0, i.useState)(null);
            if (c[0] !== p || c[1] !== T || c[2] !== E || c[3] !== S || c[4] !== R) {
                n = Symbol.for("react.early_return_sentinel");
                e: {
                    t = !1;
                    let e = !1,
                        a = n => Array.isArray(n) ? n.map(a) : function(n) {
                            if (!(0, i.isValidElement)(n)) return e = e || "number" == typeof n || "string" == typeof n && n.trim().length > 0, n;
                            if (s.c.includes(n.props.href ?? "")) {
                                let e = !t;
                                return t = !0, (0, r.jsx)(d.a, {
                                    value: t => (0, r.jsxs)(r.Fragment, {
                                        children: [n.props.children, e && null != p ? (0, u.createPortal)(t, p) : null]
                                    }),
                                    children: n
                                }, n.key)
                            }
                            return E.some(e => n.type === e) ? (0, i.cloneElement)(n, void 0, a(n.props.children)) : (e = !0, n)
                        }(n),
                        l = a(T);
                    if (e) {
                        if (R) {
                            let e = S(l);
                            n = R(t ? [...Array.isArray(e) ? e : [e], (0, r.jsx)("div", {
                                ref: O,
                                className: "contents"
                            }, "college-plan-card-target")] : e);
                            break e
                        }
                        n = (0, r.jsxs)(r.Fragment, {
                            children: [S(l), t ? (0, r.jsx)("div", {
                                ref: O,
                                className: "contents"
                            }) : null]
                        });
                        break e
                    }
                }
                c[0] = p, c[1] = T, c[2] = E, c[3] = S, c[4] = R, c[5] = t, c[6] = n
            } else t = c[5], n = c[6];
            if (n !== Symbol.for("react.early_return_sentinel")) return n;
            c[7] !== T || c[8] !== S ? (l = S(T), c[7] = T, c[8] = S, c[9] = l) : l = c[9];
            let f = l;
            c[10] !== f || c[11] !== t || c[12] !== C ? (_ = t ? (0, r.jsx)(P, {
                fallback: f,
                renderCard: C ? void 0 : A
            }) : f, c[10] = f, c[11] = t, c[12] = C, c[13] = _) : _ = c[13];
            let m = _;
            return c[14] !== m || c[15] !== R ? (o = R ? R(m) : m, c[14] = m, c[15] = R, c[16] = o) : o = c[16], o
        }

        function A(e) {
            return e
        }

        function R(e) {
            let t = (0, c.b)(e),
                n = [i.Fragment, t.strong ?? "strong", t.em ?? "em", t.del ?? "del"];

            function a(e, t, a) {
                return (0, r.jsx)(S, {
                    formatting: n,
                    renderBlock: t,
                    ...a,
                    children: e
                })
            }
            return {
                ...t,
                p(e) {
                    let n = i.Children.toArray(e.children),
                        r = n[0];
                    return a(e.children, e => (0, T.a)(e, t.p), {
                        standaloneParagraph: 1 === n.length && (0, i.isValidElement)(r) && s.c.includes(r.props.href ?? "")
                    })
                },
                ...Object.fromEntries(["h1", "h2", "h3", "h4", "h5", "h6"].map(e => {
                    let n = t[e] ?? e;
                    return [e, e => a(e.children, t => (0, r.jsx)(n, {
                        ...e,
                        children: t
                    }))]
                })),
                li(e) {
                    let n = t.li ?? "li";
                    return (0, r.jsx)(n, {
                        ...e,
                        children: a(e.children, e => e)
                    })
                },
                td(e) {
                    let n = t.td ?? "td";
                    return a(e.children, e => e, {
                        renderContainer: t => (0, r.jsx)(n, {
                            ...e,
                            children: t
                        })
                    })
                },
                th(e) {
                    let n = t.th ?? "th";
                    return a(e.children, e => e, {
                        renderContainer: t => (0, r.jsx)(n, {
                            ...e,
                            children: t
                        })
                    })
                }
            }
        }
        var I = n("cWXs"),
            C = n("WAdu"),
            p = n("X3K1"),
            O = n("xAIC"),
            f = n("G6mJ"),
            m = n("Lydu"),
            g = n("cgvl"),
            N = n("lA5q"),
            h = n("wDWo"),
            v = n("JQAz"),
            G = n("HAEQ"),
            b = n("jCkl"),
            y = n("xJ25");
        let H = (0, E.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(851456), n.e(974872), n.e(653896), n.e(715515), n.e(910861), n.e(344557), n.e(374281), n.e(208123), n.e(95104), n.e(678608), n.e(282234)]).then(n.bind(n, "wIoR"))).QuickChatWritingBlockDirectiveRenderer, G.a),
            x = {
                "codex-resource": function() {
                    return null
                },
                "scheduled-task-receipt": (0, E.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(753405), n.e(353230), n.e(62441), n.e(638947), n.e(790849), n.e(255077), n.e(244730), n.e(622950), n.e(278276), n.e(814058), n.e(204774)]).then(n.bind(n, "d0sS"))).ScheduledTaskReceiptDirective),
                [h.a]: v.a,
                [_.a]: b.a,
                [h.c]: y.b,
                [N.a]: H
            };
        var U = n("bMEA"),
            W = n("D2CQ"),
            D = n("TUMj"),
            B = n("MMXa"),
            L = n.n(B),
            w = n("lsky"),
            M = n("VnmP"),
            k = n("cC4N"),
            j = n("ndwI"),
            F = n("mMF3"),
            Y = n("L0hB"),
            V = n("dVri"),
            K = n("Tpzw"),
            $ = n("Rv71"),
            Z = n("ASxG"),
            z = n("zSQm"),
            Q = n("DIH2"),
            J = n("Cvo1");
        let X = Z.object({
                url: Z.string().min(1),
                title: Z.string().min(1),
                attribution: Z.string().nullish()
            }),
            q = new w.b($.c, {
                breaks: !0,
                gfm: !0,
                walkTokens: K.d,
                tokenizer: {
                    del: e => !e.startsWith("~~") && void 0
                },
                extensions: [{
                    name: "math",
                    renderer: e => L()(e.raw)
                }],
                renderer: {
                    html(e) {
                        let {
                            text: t
                        } = e;
                        return /^<br\s*\/?>$/i.test(t) ? "<br>" : L()(t)
                    },
                    link(e) {
                        let {
                            href: t,
                            title: n,
                            tokens: r
                        } = e, a = this.parser.parseInline(r), l = (0, z.a)(t);
                        if (null == l) return a;
                        let _ = null == n ? "" : ` title="${L()(n)}"`;
                        return `<a href="${L()(l)}"${_}>${a}</a>`
                    },
                    image(e) {
                        let {
                            href: t,
                            text: n,
                            title: r
                        } = e, a = (0, z.b)(t);
                        if (null == a) return L()(n);
                        let l = null == r ? "" : ` title="${L()(r)}"`;
                        return `<img src="${L()(a)}" alt="${L()(n)}"${l}>`
                    }
                }
            });

        function ee(e, t, n, r, a) {
            let l = (0, f.a)(e, t)?.reference;
            if (null == l || "mcp_source" === l.type && !a) return "";
            if ("url" === l.type) {
                let e = (0, _.h)(l)[0]?.sources[0];
                return null == e || null == (0, z.a)(e.url) ? "" : et((0, F.a)({
                    type: "link",
                    url: e.url,
                    children: [{
                        type: "text",
                        value: "string" == typeof l.title ? l.title : e.label
                    }]
                }).trim())
            }
            if ("grouped_webpages" === l.type && Array.isArray(l.items)) {
                let e = [];
                for (let t of l.items) {
                    let a = X.safeParse(t).data;
                    if (null == a || null == (0, z.a)(a.url)) continue;
                    let l = n.get(a.url);
                    if (null == l) {
                        let e = n.size + 1;
                        for (; r.has(String(e));) e += 1;
                        r.add(String(e)), l = {
                            type: "definition",
                            identifier: String(e),
                            url: a.url,
                            title: a.title
                        }, n.set(a.url, l)
                    }
                    e.push(et((0, F.a)({
                        type: "linkReference",
                        identifier: l.identifier,
                        referenceType: "full",
                        children: [{
                            type: "text",
                            value: a.attribution ?? function(e) {
                                try {
                                    return new URL(e).hostname.replace("www.", "").replace(/\.[^.]*$/, "")
                                } catch {
                                    return e
                                }
                            }(a.url)
                        }]
                    }).trim()))
                }
                return 0 === e.length ? "" : `(${e.join(", ")})`
            }
            switch (l.type) {
                case "hidden":
                case "status":
                case "optimistic_image_citation":
                case "webpage":
                case "optimistic_image_inline":
                case "invalid":
                case "attribution_footer":
                case "sports":
                case "grouped_webpages_v2":
                    return "";
                default:
                    var i = l;
                    let o = function(e) {
                            if ("client_defined_widget" !== e.type) return null;
                            let t = (0, Q.d)(e.data),
                                n = (0, Q.b)(t?.content);
                            if ("translation_block" === e.category) return (0, Q.b)(t?.translated_text) ?? n;
                            if (null == n || "language_learning_block" !== e.category && "pronunciation_block" !== e.category) return null;
                            let r = (0, Q.b)(t?.pronunciation_hint);
                            return "language_learning_block" === e.category && (t?.intent === "translation" || t?.presentation === "inline_anchor") || null == r ? n : `${n} (${r})`
                        }(i),
                        s = o ?? i.alt;
                    if ("string" != typeof s || 0 === s.length) return "";
                    let c = (0, k.a)(s, {
                        extensions: [(0, V.a)({
                            singleTilde: !1
                        })],
                        mdastExtensions: [(0, j.a)()]
                    }).children[0];
                    return c?.type !== "paragraph" ? null == o ? "" : et((0, F.a)({
                        type: "text",
                        value: o
                    }).trim()) : et((0, F.a)(c, {
                        extensions: [(0, j.b)()]
                    }).trim())
            }
        }

        function et(e) {
            return e.replace(/(\\*)\|/g, (e, t) => t.length % 2 == 0 ? `\\${e}` : e).replace(/\r?\n/g, "<br>")
        }

        function en(e) {
            let t, n, l = (0, a.c)(6),
                i = (0, D.d)(),
                o = i?.conversationOrigin === "tpp" || i?.conversationOrigin === "flora";
            return l[0] !== o || l[1] !== i?.contentReferences ? (t = e => (function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = function(e, t) {
                        let {
                            includeMcpSourceCitations: n = !0
                        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = (0, J.a)(e), a = [], l = new Map, i = new Set(Array.from(r.matchAll(/\[\s*(\d+)\s*\]/g), e => e[1])), o = r.replace(/\uE200[^\uE201]*\uE201/g, e => e.replace(/[^\r\n]/g, "x")), s = [...(0, k.a)(o, {
                            extensions: [(0, V.a)({
                                singleTilde: !1
                            }), (0, Y.a)()],
                            mdastExtensions: [(0, j.a)(), (0, M.a)()]
                        }).children];
                        for (; s.length > 0;) {
                            let e = s.shift(),
                                o = e?.position?.start.offset,
                                c = e?.position?.end.offset;
                            if (null != e && null != o && null != c)
                                if (("textDirective" === e.type || "leafDirective" === e.type) && e.name === _.a) {
                                    let r = {};
                                    for (let [t, n] of Object.entries(e.attributes ?? {})) r[t] = n ?? !0;
                                    let _ = s[0],
                                        T = _?.type === "link" && _.position?.start.offset === c && _.url.startsWith("sandbox:");
                                    a.push({
                                        start: o,
                                        end: c,
                                        text: T ? "" : ee(r, t, l, i, n)
                                    })
                                } else if (("textDirective" === e.type || "leafDirective" === e.type) && e.name === h.a) {
                                let t = (0, Q.b)(e.attributes?.label),
                                    n = (0, Q.b)(e.attributes?.url),
                                    r = "";
                                null != t && null != n && null != (0, z.a)(n) && (r = et((0, F.a)({
                                    type: "link",
                                    url: n,
                                    title: (0, Q.b)(e.attributes?.title),
                                    children: [{
                                        type: "text",
                                        value: t
                                    }]
                                }).trim())), a.push({
                                    start: o,
                                    end: c,
                                    text: r
                                })
                            } else if ("text" === e.type)
                                for (let e of r.slice(o, c).matchAll(/\uE200[^\uE201]*\uE201/g)) a.push({
                                    start: o + e.index,
                                    end: o + e.index + e[0].length,
                                    text: ee({
                                        marker_text: e[0]
                                    }, t, l, i, n)
                                });
                            else "children" in e && s.unshift(...e.children)
                        }
                        let c = 0,
                            T = [];
                        for (let {
                                start: e,
                                end: t,
                                text: n
                            }
                            of a) T.push(r.slice(c, e), n), c = t;
                        return T.push(r.slice(c)), l.size > 0 && T.push("\n\n", (0, F.a)({
                            type: "root",
                            children: [...l.values()]
                        }).trim()), T.join("")
                    }(e, t, n);
                return {
                    "text/plain": r,
                    "text/html": q.parse(r, {
                        async: !1
                    })
                }
            })(e, i?.contentReferences, {
                includeMcpSourceCitations: o
            }), l[0] = o, l[1] = i?.contentReferences, l[2] = t) : t = l[2], l[3] !== e || l[4] !== t ? (n = (0, r.jsx)(W.a, {
                ...e,
                getCopyContent: t
            }), l[3] = e, l[4] = t, l[5] = n) : n = l[5], n
        }
        var er = n("H0jo"),
            ea = n("SZCv"),
            el = n.n(ea),
            e_ = n("AuIy"),
            ei = n("jqIZ"),
            eo = n("bxvp"),
            es = n("Niy1"),
            ec = n("XcNx"),
            eT = n("hueg"),
            eu = n("OWtl"),
            eE = n("CTBG"),
            ed = n("KDax"),
            eP = n("UIeB");
        let eS = Z.record(Z.string(), Z.string()),
            eA = (0, E.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(27910)]).then(n.bind(n, "as01"))).CollegePlanReentryLink),
            eR = (0, l.d)(eu.a, (e, t) => {
                let {
                    get: n
                } = t, r = null == e ? null : n(eE.a, e);
                if (null == r) return null;
                let a = new Set,
                    l = new Map;
                for (let e of r) {
                    let t = e.metadata?.search_result_groups;
                    for (let e of Array.isArray(t) ? t : []) {
                        let t = (0, e_.r)(e)?.entries;
                        for (let e of Array.isArray(t) ? t : []) {
                            let t = (0, e_.r)(e)?.url;
                            "string" == typeof t && t.length > 0 && a.add(t)
                        }
                    }
                    let n = eS.safeParse((0, e_.r)(e.metadata?.__internal)?.utm_tags);
                    n.success && l.set((0, e_.g)(e), n.data)
                }
                return {
                    searchUrls: a,
                    utmTagsByMessageId: l
                }
            }, {
                isEqual: el()
            }),
            eI = (0, l.d)(eu.a, (e, t) => {
                let {
                    get: n
                } = t, r = n(eR, e);
                return null == r ? null : {
                    searchUrls: new Set(Array.from(r.searchUrls, eP.c)),
                    utmTagsByMessageId: r.utmTagsByMessageId
                }
            }),
            eC = (0, l.d)(eu.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: r,
                    href: a
                } = e, {
                    get: l
                } = t;
                if (null == a) return a;
                let _ = l(eI, n);
                return null == _ ? a : (0, eP.b)(a, _.searchUrls, null == r ? void 0 : _.utmTagsByMessageId.get(r))
            });

        function ep(e) {
            let t, n, _, i, o = (0, a.c)(24),
                c = (0, l.y)(eu.a),
                T = (0, D.d)(),
                u = (0, l.z)(eo.c),
                E = T?.conversationId ?? null,
                d = T?.messageId;
            o[0] !== e.href || o[1] !== E || o[2] !== d ? (t = {
                conversationId: E,
                messageId: d,
                href: e.href
            }, o[0] = e.href, o[1] = E, o[2] = d, o[3] = t) : t = o[3];
            let P = (0, l.x)(eC, t);
            o[4] !== u || o[5] !== e.href ? (n = u && (0, ec.a)({
                browser: !0,
                electron: !0
            }) ? function(e) {
                if (null == e) return null;
                let t = e.startsWith("https://chatgpt.com/") ? e.slice(19) : e;
                return /^\/college-plan\/schools\/[A-Za-z0-9_-]{1,300}$/.test(t) ? t : null
            }(e.href) : null, o[4] = u, o[5] = e.href, o[6] = n) : n = o[6];
            let S = n;
            if (null != S) {
                let t, n;
                return o[7] !== S || o[8] !== c || o[9] !== T ? (t = () => {
                    (0, es.b)(c, S, T)
                }, o[7] = S, o[8] = c, o[9] = T, o[10] = t) : t = o[10], o[11] !== e.children || o[12] !== e.title || o[13] !== S || o[14] !== t ? (n = (0, r.jsx)(ei.f, {
                    to: S,
                    title: e.title,
                    className: "underline",
                    onClick: t,
                    children: e.children
                }), o[11] = e.children, o[12] = e.title, o[13] = S, o[14] = t, o[15] = n) : n = o[15], n
            }
            let A = e.appearance ?? "decorated";
            o[16] !== P || o[17] !== e || o[18] !== A ? (_ = (0, r.jsx)(eT.a, {
                ...e,
                appearance: A,
                ExternalLinkComponent: ed.a,
                href: P
            }), o[16] = P, o[17] = e, o[18] = A, o[19] = _) : _ = o[19];
            let R = _;
            return o[20] !== R || o[21] !== e.href || o[22] !== T ? (i = s.c.includes(e.href ?? "") && null != T ? (0, r.jsx)(eA, {
                fallback: R,
                inline: !0
            }) : R, o[20] = R, o[21] = e.href, o[22] = T, o[23] = i) : i = o[23], i
        }

        function eO(e) {
            let t, n, s, T, u, E, d, P, S, A, N, h, v, G, b, y = (0, a.c)(51);
            y[0] !== e ? ({
                conversationId: u,
                directives: t,
                extensions: n,
                isBrowserEnabled: s,
                ...T
            } = e, y[0] = e, y[1] = t, y[2] = n, y[3] = s, y[4] = T, y[5] = u) : (t = y[1], n = y[2], s = y[3], T = y[4], u = y[5]);
            let H = void 0 === u ? null : u;
            y[6] === Symbol.for("react.memo_cache_sentinel") ? (E = {
                name: "browser.in-app"
            }, y[6] = E) : E = y[6];
            let W = (0, l.x)(o.a, E).isCapable,
                B = (0, D.d)(),
                L = (0, l.x)(er.c, B?.conversationId ?? null),
                w = (0, i.useContext)(g.a),
                M = (0, i.useContext)(C.a),
                k = B?.shouldBlockExternalEgress === !0 || "restricted" === M ? "restricted" : T.externalResourcePolicy;
            y[7] !== n ? (d = null == n ? _.b : [..._.b, ...n], y[7] = n, y[8] = d) : d = y[8];
            let j = d;
            y[9] === Symbol.for("react.memo_cache_sentinel") ? (P = x, y[9] = P) : P = y[9];
            let F = P;
            y[10] !== t ? (S = null == t ? F : {
                ...F,
                ...t
            }, y[10] = t, y[11] = S) : S = y[11];
            let Y = S;
            y[12] !== H || y[13] !== W || y[14] !== w?.externalLinkTarget || y[15] !== k || y[16] !== s || y[17] !== T.components?.a || y[18] !== T.cwd || y[19] !== T.externalLinkAppearance || y[20] !== T.hostId || y[21] !== T.onFileLinkOpen || y[22] !== T.openFileLinksInSidePanel || y[23] !== T.pluginMentionPresentation || y[24] !== T.savedContentResponse || y[25] !== B?.conversationOrigin ? (A = () => T.components?.a ?? (0, c.c)({
                ExternalLinkComponent: ep,
                conversationId: H,
                cwd: T.cwd,
                externalResourcePolicy: k,
                externalLinkAppearance: T.externalLinkAppearance ?? (B?.conversationOrigin === "tpp" || B?.conversationOrigin === "flora" ? "inline-mention" : void 0),
                hostId: T.hostId,
                isBrowserEnabled: s ?? W,
                onFileLinkOpen: T.onFileLinkOpen,
                openFileLinksInSidePanel: T.openFileLinksInSidePanel ?? !1,
                openTarget: w?.externalLinkTarget,
                pluginMentionPresentation: T.pluginMentionPresentation,
                savedContentResponse: T.savedContentResponse
            }), y[12] = H, y[13] = W, y[14] = w?.externalLinkTarget, y[15] = k, y[16] = s, y[17] = T.components?.a, y[18] = T.cwd, y[19] = T.externalLinkAppearance, y[20] = T.hostId, y[21] = T.onFileLinkOpen, y[22] = T.openFileLinksInSidePanel, y[23] = T.pluginMentionPresentation, y[24] = T.savedContentResponse, y[25] = B?.conversationOrigin, y[26] = A) : A = y[26], w?.externalLinkTarget, T.components?.a, B?.conversationOrigin, y[27] !== A ? (N = A(), y[27] = A, y[28] = N) : N = y[28];
            let V = N;
            T.components?.table, y[29] !== T.allowWideBlocks || y[30] !== T.components?.table ? (h = T.components?.table ?? function(e) {
                let {
                    children: t,
                    className: n,
                    markdownSource: a
                } = e;
                return (0, r.jsx)(en, {
                    className: n,
                    allowWideBlocks: T.allowWideBlocks ?? !1,
                    markdownSource: a,
                    children: t
                })
            }, y[29] = T.allowWideBlocks, y[30] = T.components?.table, y[31] = h) : h = y[31];
            let K = h;
            y[32] !== V || y[33] !== K || y[34] !== T.components ? (v = {
                ...T.components,
                a: V,
                table: K
            }, y[32] = V, y[33] = K, y[34] = T.components, y[35] = v) : v = y[35];
            let $ = T.getDefaultComponents ?? R,
                Z = s ?? W;
            return y[36] !== L || y[37] !== T.isStreaming || y[38] !== T.renderRoot || y[39] !== B ? (G = T.renderRoot ?? (null != L && null != B ? (e, t) => {
                var n, a, l;
                let i, o, s, c;
                return n = T.isStreaming, a = B.contentReferences, i = e.findIndex(e => {
                    if ("space" === e.type) return !1;
                    if ("codexDirective" === e.type && e.name === _.a) {
                        let t = (0, f.a)(e.attributes, a);
                        return t?.reference.type !== "image_group" && "image_group" !== (0, O.c)(e.attributes)
                    }
                    return !0
                }), s = null == (o = e[i]) && n, c = (l = o, l?.type === "heading" && 2 === o.depth && (o.text === L || n && e.slice(i + 1).every(e => "space" === e.type) && L.startsWith(o.text))), s || c ? [...t(s ? e : e.slice(0, i)), (0, r.jsx)("h2", {
                    className: m.a.Heading,
                    children: L
                }, "entity-title"), ...s ? [(0, r.jsx)("div", {
                    className: "mt-3",
                    children: (0, r.jsx)(p.b, {
                        lines: 3,
                        seed: "entity-loading-0",
                        size: "md",
                        variant: "chatgpt"
                    })
                }, "entity-body-pending")] : t(e.slice(i + 1))] : t(e)
            } : void 0), y[36] = L, y[37] = T.isStreaming, y[38] = T.renderRoot, y[39] = B, y[40] = G) : G = y[40], y[41] !== H || y[42] !== k || y[43] !== Y || y[44] !== j || y[45] !== T || y[46] !== $ || y[47] !== Z || y[48] !== G || y[49] !== v ? (b = (0, r.jsx)(U.a, {
                children: (0, r.jsx)(I.a, {
                    ...T,
                    components: v,
                    conversationId: H,
                    directives: Y,
                    extensions: j,
                    externalResourcePolicy: k,
                    getDefaultComponents: $,
                    isBrowserEnabled: Z,
                    renderRoot: G
                })
            }), y[41] = H, y[42] = k, y[43] = Y, y[44] = j, y[45] = T, y[46] = $, y[47] = Z, y[48] = G, y[49] = v, y[50] = b) : b = y[50], b
        }
    }),
    G6mJ: (function(e, t, n) {
        var r = n("rKAs"),
            a = n("xAIC");
        n.d(t, {}, {
            a: function(e, t) {
                if (null == t) return null;
                let n = (0, a.a)(e);
                if (null != n) {
                    let e = t[n];
                    return null == e ? null : {
                        index: n,
                        reference: e
                    }
                }
                let l = (0, a.b)(e);
                if (null == l) return null;
                let _ = t.findIndex(e => (0, r.l)(e) === l);
                if (-1 === _) return null;
                let i = t[_];
                return null == i ? null : {
                    index: _,
                    reference: i
                }
            }
        })
    }),
    jCkl: (function(e, t, n) {
        n.d(t, {
            a: () => eg
        });
        var r = n("ABep"),
            a = n("QosV"),
            l = n("iTtm"),
            _ = n("rKAs"),
            i = n("zd8w"),
            o = n("WAdu"),
            s = n("OWtl"),
            c = n("WdQN"),
            T = n("xAIC"),
            u = n("tZ3A"),
            E = n("TUMj"),
            d = n("aLPh"),
            P = n("G6mJ"),
            S = n("nD0d"),
            A = n("ASxG"),
            R = n("vSCF"),
            I = n("KO1w"),
            C = n("vbBn"),
            p = n("O7AW"),
            O = n("boWb");

        function f(e) {
            let t, n, l, _ = (0, a.c)(26),
                {
                    contentReferenceIndex: i,
                    reference: o,
                    widgetRefId: s
                } = e,
                c = (0, E.d)();
            _[0] !== i || _[1] !== o || _[2] !== c ? (t = null == i ? null : (0, r.jsx)(O.a, {
                contentReferenceIndex: i,
                reference: {
                    ...o,
                    type: "dil"
                },
                turnContext: c
            }), _[0] = i, _[1] = o, _[2] = c, _[3] = t) : t = _[3];
            let T = t;
            if (null != o.model_dil_v2) {
                let e, t, n, a = "string" == typeof o.source_message_id ? o.source_message_id : void 0,
                    l = c?.dilPreparationId ?? a ?? s,
                    u = c?.dilPreparing,
                    E = c?.isPresented ?? !0,
                    d = c?.isStreaming === !0 && "finished_successfully" !== o.source_message_status;
                return _[4] !== o ? (e = (0, r.jsx)(I.DilResponse, {
                    reference: o
                }), _[4] = o, _[5] = e) : e = _[5], _[6] !== i || _[7] !== a || _[8] !== l || _[9] !== u || _[10] !== E || _[11] !== d || _[12] !== e ? (t = (0, r.jsx)(C.a, {
                    contentReferenceIndex: i,
                    sourceMessageId: a,
                    isPreparing: u,
                    isPresented: E,
                    isStreaming: d,
                    children: e
                }, l), _[6] = i, _[7] = a, _[8] = l, _[9] = u, _[10] = E, _[11] = d, _[12] = e, _[13] = t) : t = _[13], _[14] !== T || _[15] !== t ? (n = (0, r.jsxs)(r.Fragment, {
                    children: [T, t]
                }), _[14] = T, _[15] = t, _[16] = n) : n = _[16], n
            }
            _[17] !== o || _[18] !== s ? (n = function(e, t) {
                let n = e.dil;
                if (null == n) return null;
                try {
                    return JSON.stringify({
                        dil: n,
                        ..."string" == typeof e.dil_version ? {
                            dil_version: e.dil_version
                        } : {},
                        ..."string" == typeof e.dil_url ? {
                            dil_url: e.dil_url
                        } : {},
                        ..."string" == typeof e.name ? {
                            name: e.name
                        } : {},
                        ..."boolean" == typeof e.contains_pii ? {
                            contains_pii: e.contains_pii
                        } : {},
                        widgetRefId: t,
                        contentReferenceStartIndex: e.start_idx
                    }) ?? null
                } catch {
                    return null
                }
            }(o, s), _[17] = o, _[18] = s, _[19] = n) : n = _[19];
            let u = n;
            return _[20] !== i || _[21] !== T || _[22] !== u || _[23] !== o || _[24] !== c ? (l = null == u ? null : (0, r.jsxs)(r.Fragment, {
                children: [T, (0, r.jsx)(E.b.Provider, {
                    value: null == c ? null : {
                        ...c,
                        safeUrls: A.array(A.string()).safeParse(o.safe_urls).data
                    },
                    children: (0, r.jsx)(R.ChatGptDilDirectiveRenderer, {
                        feedback: (0, r.jsx)(p.a, {
                            contentReferenceIndex: i,
                            reference: o
                        }),
                        isNativeHermesContentReference: "custom_agent_run" === o.name,
                        rawText: u
                    })
                })]
            }), _[20] = i, _[21] = T, _[22] = u, _[23] = o, _[24] = c, _[25] = l) : l = _[25], l
        }
        var m = n("xJ25"),
            g = n("Bbed"),
            N = n("NDDl"),
            h = n("cGwJ"),
            v = n("YAi8");

        function G(e) {
            let t, n, l = (0, a.c)(4),
                {
                    reference: i
                } = e;
            l[0] !== i ? (t = (0, _.j)(i), l[0] = i, l[1] = t) : t = l[1];
            let o = t;
            return l[2] !== o ? (n = null == o ? null : (0, r.jsx)("span", {
                className: "rounded bg-surface-secondary/92 px-0.5",
                children: o
            }), l[2] = o, l[3] = n) : n = l[3], n
        }
        var b = n("Nv0Q"),
            y = n("j8Yf"),
            H = n("DIH2");

        function x(e) {
            let t, n, l, _, i, o = (0, a.c)(15),
                {
                    reference: s
                } = e;
            o[0] !== s.expression ? (t = (0, H.b)(s.expression), o[0] = s.expression, o[1] = t) : t = o[1];
            let c = t;
            o[2] !== s.result ? (n = (0, H.b)(s.result), o[2] = s.result, o[3] = n) : n = o[3];
            let T = n;
            if (null == c && null == T) {
                let e;
                return o[4] !== s ? (e = (0, r.jsx)(y.c, {
                    reference: s
                }), o[4] = s, o[5] = e) : e = o[5], e
            }
            return o[6] !== c ? (l = null == c ? null : (0, r.jsx)("div", {
                className: "font-mono text-sm text-secondary",
                children: c
            }), o[6] = c, o[7] = l) : l = o[7], o[8] !== s.prefix || o[9] !== s.suffix || o[10] !== T ? (_ = null == T ? null : (0, r.jsxs)("div", {
                className: "mt-1 text-2xl font-semibold text-default",
                children: [(0, H.b)(s.prefix), T, (0, H.b)(s.suffix)]
            }), o[8] = s.prefix, o[9] = s.suffix, o[10] = T, o[11] = _) : _ = o[11], o[12] !== l || o[13] !== _ ? (i = (0, r.jsxs)(b.a, {
                children: [l, _]
            }), o[12] = l, o[13] = _, o[14] = i) : i = o[14], i
        }
        var U = n("tBe6"),
            W = n("JQAz"),
            D = n("zSQm"),
            B = n("yGJW"),
            L = n("tSEg"),
            w = n("dQRk");
        let M = (0, l.v)(L.a, e => !1);

        function k(e) {
            let t, n, o, s, c = (0, a.c)(13),
                {
                    contentReferenceIndex: T,
                    isTerminalInline: u,
                    reference: E,
                    turnContext: d
                } = e,
                P = (0, l.y)(L.a),
                S = (0, _.h)(E),
                A = S[0]?.attributes.url,
                R = d?.contentReferenceMessageIds?.[T] ?? d?.messageId,
                I = "loading" !== E.status && "error" !== E.status,
                C = I && "url" === E.type && "hidden" !== E.style && null != A && null != (0, D.a)(A),
                p = C && null != R && !R.startsWith("WEB:") ? JSON.stringify([R, E.start_idx, A]) : null,
                O = d?.trackShownImpressions !== !1,
                f = e => {
                    null != p && null != d && (0, B.a)(P, U.d, {
                        eventType: e,
                        contentReferenceType: "url",
                        messageId: R,
                        conversationId: P.get(w.j, d.conversationId) ?? void 0
                    })
                },
                m = (0, i.useEffectEvent)(() => {
                    null == p || null == d || P.get(M, p) || (P.set(M, p, !0), f("CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_URL_CITATION_SHOWN"))
                });
            if (c[0] !== m || c[1] !== O ? (t = () => {
                    O && m()
                }, c[0] = m, c[1] = O, c[2] = t) : t = c[2], c[3] !== P || c[4] !== p || c[5] !== O ? (n = [P, p, O], c[3] = P, c[4] = p, c[5] = O, c[6] = n) : n = c[6], (0, i.useEffect)(t, n), "hidden" === E.style || !I || 0 === S.length) return null;
            c[7] !== u || c[8] !== C || c[9] !== f ? (o = (e, t) => (0, r.jsx)(W.a, {
                attributes: e.attributes,
                isTerminalInline: u,
                onClick: C ? () => f("CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_URL_CITATION_CLICKED") : void 0,
                sources: e.sources
            }, `${e.attributes.url}-${String(t)}`), c[7] = u, c[8] = C, c[9] = f, c[10] = o) : o = c[10];
            let g = S.map(o);
            return c[11] !== g ? (s = (0, r.jsx)(r.Fragment, {
                children: g
            }), c[11] = g, c[12] = s) : s = c[12], s
        }
        var j = n("Wf1j"),
            F = n("gtAj"),
            Y = n("TxRk");

        function V(e) {
            let t, n, l = (0, a.c)(5),
                {
                    reference: i
                } = e,
                o = (0, j.a)();
            l[0] !== o || l[1] !== i ? (t = (0, _.o)(i) ?? o.formatMessage({
                id: "chatgpt.contentReferences.code.label",
                defaultMessage: "Code",
                description: "Fallback label for a code execution citation"
            }), l[0] = o, l[1] = i, l[2] = t) : t = l[2];
            let s = t;
            return l[3] !== s ? (n = (0, r.jsx)(Y.a, {
                icon: F.a,
                children: s
            }), l[3] = s, l[4] = n) : n = l[4], n
        }
        var K = n("K1wx"),
            $ = n("GnI8"),
            Z = n("zMVZ"),
            z = n("nB3p"),
            Q = n("Ph61"),
            J = n("ahg9"),
            X = n("PO1G");

        function q(e) {
            let t, n, o, c, T, u, d, P, S = (0, a.c)(31),
                {
                    reference: A
                } = e,
                R = (0, l.y)(s.a),
                I = (0, E.d)()?.savedContentResponse,
                C = (0, i.useRef)(null);
            S[0] !== A ? (t = (0, _.o)(A), S[0] = A, S[1] = t) : t = S[1];
            let p = t;
            S[2] !== A || S[3] !== I || S[4] !== p ? (n = (0, J.a)(A), o = null != I && null != p && null != n ? (0, z.k)(n) : null, S[2] = A, S[3] = I, S[4] = p, S[5] = n, S[6] = o) : (n = S[5], o = S[6]);
            let O = o;
            S[7] !== O || S[8] !== I || S[9] !== R ? (c = () => {
                (0, Q.a)(R, C, I, O)
            }, S[7] = O, S[8] = I, S[9] = R, S[10] = c) : c = S[10];
            let f = (0, i.useEffectEvent)(c);
            S[11] !== f ? (T = () => {
                f()
            }, S[11] = f, S[12] = T) : T = S[12];
            let m = O?.id,
                g = O?.kind,
                N = I?.conversationId,
                h = I?.responseId,
                v = I?.savedContentBackend;
            if (S[13] !== m || S[14] !== g || S[15] !== N || S[16] !== h || S[17] !== v ? (u = [m, g, N, h, v], S[13] = m, S[14] = g, S[15] = N, S[16] = h, S[17] = v, S[18] = u) : u = S[18], (0, i.useEffect)(T, u), null == p) {
                let e;
                return S[19] !== A ? (e = (0, r.jsx)(y.a, {
                    reference: A
                }), S[19] = A, S[20] = e) : e = S[20], e
            }
            if (null == n) {
                let e;
                return S[21] !== p ? (e = (0, r.jsx)("span", {
                    className: "underline decoration-current underline-offset-2",
                    children: p
                }), S[21] = p, S[22] = e) : e = S[22], e
            }
            return S[23] !== O || S[24] !== I || S[25] !== R ? (d = () => {
                (0, Q.a)(R, C, I, O, !0)
            }, S[23] = O, S[24] = I, S[25] = R, S[26] = d) : d = S[26], S[27] !== n || S[28] !== d || S[29] !== p ? (P = (0, r.jsx)(X.a, {
                className: "underline decoration-current underline-offset-2",
                href: n,
                onActivate: d,
                children: p
            }), S[27] = n, S[28] = d, S[29] = p, S[30] = P) : P = S[30], P
        }
        var ee = n("ozm1"),
            et = n("E1TB"),
            en = n("v8xj"),
            er = n("p8Cc"),
            ea = n("h6Jp"),
            el = n("zUz7"),
            e_ = n("c9lJ"),
            ei = n("SMAC");

        function eo(e) {
            let t, i, o, s, c, T, u, E, d, P, S, A, R, I, C, p, O, f, m, g, N = (0, a.c)(67),
                {
                    contentReferenceIndex: h,
                    isTerminalInline: v,
                    reference: G,
                    turnContext: b
                } = e,
                y = (0, l.y)(L.a);
            if (b?.conversationOrigin !== "tpp" && b?.conversationOrigin !== "flora") return null;
            if (N[0] !== h || N[1] !== v || N[2] !== G || N[3] !== y || N[4] !== b.contentReferenceMessageIds || N[5] !== b.conversationId || N[6] !== b.isReadOnly || N[7] !== b.messageId || N[8] !== b.renderRestrictedModelResponses || N[9] !== b.renderRestrictedWidgets || N[10] !== b.shouldBlockExternalEgress) {
                E = Symbol.for("react.early_return_sentinel");
                e: {
                    let e;
                    if ({
                            data: o
                        } = ei.a.safeParse(G), s = b.contentReferenceMessageIds?.[h] ?? b.messageId, null == o || null == s) {
                        let e, t;
                        N[27] !== G ? (e = (0, _.j)(G), N[27] = G, N[28] = e) : e = N[28], N[29] !== e ? (t = (0, r.jsx)(r.Fragment, {
                            children: e
                        }), N[29] = e, N[30] = t) : t = N[30], E = t;
                        break e
                    }
                    N[31] !== y.value.pathname ? (e = (0, e_.a)(y.value.pathname), N[31] = y.value.pathname, N[32] = e) : e = N[32];
                    let n = null != e;N[33] !== n || N[34] !== b.renderRestrictedModelResponses || N[35] !== b.renderRestrictedWidgets || N[36] !== b.shouldBlockExternalEgress ? (i = "thread", n && (i = b.shouldBlockExternalEgress || b.renderRestrictedWidgets || b.renderRestrictedModelResponses ? "unavailable" : "recipient"), N[33] = n, N[34] = b.renderRestrictedModelResponses, N[35] = b.renderRestrictedWidgets, N[36] = b.shouldBlockExternalEgress, N[37] = i) : i = N[37],
                    t = en.a,
                    u = v,
                    c = i,
                    d = JSON.stringify(["chatgpt", b.conversationId, s, o.start_idx ?? h]),
                    P = o.title,
                    S = b.isReadOnly || b.shouldBlockExternalEgress || b.renderRestrictedWidgets || b.renderRestrictedModelResponses || "open_chart_source" !== o.tool_name || null == o.tool_arguments.source ? void 0 : {
                        chart_source: o.tool_arguments.source,
                        connector_id: o.connector_id,
                        link_id: o.link_id
                    },
                    A = "open_chart_source" === o.tool_name ? o.connector_id : void 0,
                    R = (0, ea.a)(o.connector_id, o.hover_card, o.tool_name),
                    I = o.url,
                    C = o.icons,
                    p = (0, el.a)(o),
                    T = (0, er.a)(o.tool_arguments)
                }
                N[0] = h, N[1] = v, N[2] = G, N[3] = y, N[4] = b.contentReferenceMessageIds, N[5] = b.conversationId, N[6] = b.isReadOnly, N[7] = b.messageId, N[8] = b.renderRestrictedModelResponses, N[9] = b.renderRestrictedWidgets, N[10] = b.shouldBlockExternalEgress, N[11] = t, N[12] = i, N[13] = o, N[14] = s, N[15] = c, N[16] = T, N[17] = u, N[18] = E, N[19] = d, N[20] = P, N[21] = S, N[22] = A, N[23] = R, N[24] = I, N[25] = C, N[26] = p
            } else t = N[11], i = N[12], o = N[13], s = N[14], c = N[15], T = N[16], u = N[17], E = N[18], d = N[19], P = N[20], S = N[21], A = N[22], R = N[23], I = N[24], C = N[25], p = N[26];
            return E !== Symbol.for("react.early_return_sentinel") ? E : (N[38] !== i || N[39] !== o || N[40] !== s || N[41] !== b.conversationId || N[42] !== b.conversationOrigin || N[43] !== b.hostId ? (O = e => (async function(e, t) {
                let [{
                    loadChatGptSourceView: r
                }, {
                    ChatGptEcosystemWidgetContent: a
                }] = await Promise.all([n.e(263165).then(n.bind(n, "zEGi")), Promise.resolve().then(n.bind(n, "OMcg"))]);
                return e.signal.throwIfAborted(), r(e, t, a)
            })(e, {
                citation: o,
                conversationId: b.conversationId,
                conversationOrigin: b.conversationOrigin,
                hostId: b.hostId,
                messageId: s,
                access: i
            }), N[38] = i, N[39] = o, N[40] = s, N[41] = b.conversationId, N[42] = b.conversationOrigin, N[43] = b.hostId, N[44] = O) : O = N[44], N[45] !== c || N[46] !== T || N[47] !== O || N[48] !== d || N[49] !== P || N[50] !== S || N[51] !== A || N[52] !== R || N[53] !== I || N[54] !== C || N[55] !== p ? (f = {
                access: c,
                id: d,
                title: P,
                followUpContext: S,
                sourceAppId: A,
                ...R,
                url: I,
                icons: C,
                icon: p,
                categoryIcon: T,
                load: O
            }, N[45] = c, N[46] = T, N[47] = O, N[48] = d, N[49] = P, N[50] = S, N[51] = A, N[52] = R, N[53] = I, N[54] = C, N[55] = p, N[56] = f) : f = N[56], N[57] !== o.start_idx || N[58] !== s || N[59] !== y || N[60] !== b.conversationId ? (m = () => {
                (0, B.a)(y, et.y, {
                    conversationId: b.conversationId,
                    messageId: s,
                    contentReferenceStartIndex: (0, ee.b)(o.start_idx)
                })
            }, N[57] = o.start_idx, N[58] = s, N[59] = y, N[60] = b.conversationId, N[61] = m) : m = N[61], N[62] !== t || N[63] !== u || N[64] !== f || N[65] !== m ? (g = (0, r.jsx)(t, {
                isTerminalInline: u,
                source: f,
                onClick: m
            }), N[62] = t, N[63] = u, N[64] = f, N[65] = m, N[66] = g) : g = N[66], g)
        }
        var es = n("uH1P"),
            ec = n("netB"),
            eT = n("bf6R");

        function eu(e) {
            let t, n, l, i, o = (0, a.c)(9),
                {
                    reference: s
                } = e,
                c = (0, j.a)();
            o[0] !== c || o[1] !== s ? (t = function(e, t) {
                let n = (0, H.b)(e.utc_time);
                if (null == n) return null;
                let r = new Date(n);
                return Number.isNaN(r.getTime()) ? null : t.formatTime(new Date(r.getTime() + function(e) {
                    let t = (0, H.b)(e.utc_offset);
                    if (null == t) return 0;
                    let n = /^([+-])(\d{2}):?(\d{2})?$/.exec(t);
                    if (null == n) return 0;
                    let [, r, a, l] = n, _ = Number(a), i = Number(l ?? "0");
                    return Number.isFinite(_) && Number.isFinite(i) ? ("-" === r ? -1 : 1) * (60 * _ + i) * 6e4 : 0
                }(e)), {
                    hour: "numeric",
                    minute: "numeric",
                    timeZone: "UTC"
                })
            }(s, c), o[0] = c, o[1] = s, o[2] = t) : t = o[2];
            let T = t;
            if (null == T && "hidden" === s.type) return null;
            o[3] !== s || o[4] !== T ? (n = T ?? (0, _.j)(s), o[3] = s, o[4] = T, o[5] = n) : n = o[5];
            let u = n;
            return null == u ? null : (o[6] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, r.jsx)("span", {
                children: (0, r.jsx)(eT.pc, {
                    "aria-hidden": !1
                })
            }), o[6] = l) : l = o[6], o[7] !== u ? (i = (0, r.jsx)(Y.a, {
                icon: l,
                labelClassName: "whitespace-nowrap",
                children: u
            }), o[7] = u, o[8] = i) : i = o[8], i)
        }

        function eE(e) {
            let t, n, l, i = (0, a.c)(11),
                {
                    reference: o
                } = e;
            i[0] !== o ? (t = (0, H.b)(o.description) ?? (0, _.o)(o), i[0] = o, i[1] = t) : t = i[1];
            let s = t;
            if (null == s) {
                let e;
                return i[2] !== o ? (e = (0, r.jsx)(y.a, {
                    reference: o
                }), i[2] = o, i[3] = e) : e = i[3], e
            }
            i[4] !== o ? (n = (0, J.a)(o), i[4] = o, i[5] = n) : n = i[5];
            let c = n;
            if (null == c) {
                let e;
                return i[6] !== s ? (e = (0, r.jsx)("span", {
                    className: "font-semibold text-default",
                    children: s
                }), i[6] = s, i[7] = e) : e = i[7], e
            }
            return i[8] !== c || i[9] !== s ? (l = (0, r.jsx)(X.a, {
                className: "font-semibold text-default underline-offset-2 hover:underline",
                href: c,
                children: s
            }), i[8] = c, i[9] = s, i[10] = l) : l = i[10], l
        }
        let ed = (0, g.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(14428)]).then(n.bind(n, "T4s5"))).ChatGptProductCarousel, {
                errorFallback: y.b
            }),
            eP = (0, g.a)(async () => (await n.e(370781).then(n.bind(n, "AxOW"))).ChatGptEntityMetadataContentReference, {
                errorFallback: y.b
            }),
            eS = (0, g.a)(async () => (await n.e(726487).then(n.bind(n, "A5xc"))).ChatGptForecastReference, {
                errorFallback: y.b
            }),
            eA = (0, g.a)(async () => (await n.e(273324).then(n.bind(n, "MhdX"))).ChatGptLocationSearch, {
                errorFallback: y.b
            }),
            eR = (0, g.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(14428), n.e(486886)]).then(n.bind(n, "z86f"))).ChatGptProductContentReference, {
                errorFallback: y.b
            }),
            eI = (0, g.a)(async () => (await n.e(327345).then(n.bind(n, "DAjZ"))).ChatGptSportsContentReference, {
                errorFallback: y.b
            }),
            eC = (0, g.a)(async () => (await n.e(649881).then(n.bind(n, "PFJ5"))).ChatGptStockReference, {
                errorFallback: y.b
            }),
            ep = (0, g.a)(async () => (await n.e(825205).then(n.bind(n, "JhXY"))).ChatGptVideoReference, {
                errorFallback: y.b
            }),
            eO = new Set(["attribution", "calculator", "container", "file", "file_navlist", "followup_a", "followup_memory_a", "forecast", "link_title", "location_search", "nav_list", "navigation", "python", "sports_schedule", "sports_standings", "stock", "strix", "title_citation", "mcp_source", "tldr", "video"]);

        function ef(e) {
            let t, n, l, _ = (0, a.c)(10);
            return _[0] !== e.contentReferenceIndex || _[1] !== e.contentReferenceType || _[2] !== e.reference || _[3] !== e.turnContext ? (t = "dil" === e.contentReferenceType || "image_group" === e.contentReferenceType ? null : (0, r.jsx)(O.a, {
                contentReferenceIndex: e.contentReferenceIndex,
                reference: e.reference,
                turnContext: e.turnContext
            }), _[0] = e.contentReferenceIndex, _[1] = e.contentReferenceType, _[2] = e.reference, _[3] = e.turnContext, _[4] = t) : t = _[4], _[5] !== e ? (n = (0, r.jsx)(em, {
                ...e
            }), _[5] = e, _[6] = n) : n = _[6], _[7] !== t || _[8] !== n ? (l = (0, r.jsxs)(r.Fragment, {
                children: [t, n]
            }), _[7] = t, _[8] = n, _[9] = l) : l = _[9], l
        }

        function em(e) {
            let t = (0, a.c)(85),
                {
                    children: n,
                    contentReferenceIndex: l,
                    contentReferenceType: _,
                    isStreaming: i,
                    isTerminalInline: o,
                    reference: s,
                    turnContext: c
                } = e;
            if ("hidden" === s.type && null != _ && eO.has(_)) return null;
            switch (_) {
                case "codex_sandbox_image": {
                    let e;
                    return t[0] !== l || t[1] !== s ? (e = (0, r.jsx)(ec.a, {
                        reference: s,
                        contentReferenceIndex: l
                    }), t[0] = l, t[1] = s, t[2] = e) : e = t[2], e
                }
                case "mcp_source": {
                    let e;
                    return t[3] !== l || t[4] !== o || t[5] !== s || t[6] !== c ? (e = (0, r.jsx)(eo, {
                        contentReferenceIndex: l,
                        isTerminalInline: o,
                        reference: s,
                        turnContext: c
                    }), t[3] = l, t[4] = o, t[5] = s, t[6] = c, t[7] = e) : e = t[7], e
                }
                case "image_group":
                case "image_v2": {
                    let e, n = c?.conversationId;
                    return t[8] !== l || t[9] !== s || t[10] !== n ? (e = (0, r.jsx)(m.a, {
                        contentReferenceIndex: l,
                        conversationId: n,
                        reference: s
                    }), t[8] = l, t[9] = s, t[10] = n, t[11] = e) : e = t[11], e
                }
                case "products":
                case "product_group": {
                    let e, n, a, _;
                    if (t[12] !== l || t[13] !== s || t[14] !== c) {
                        let _ = c?.conversationType !== "sidebar" || c.isStreaming || c.shouldBlockExternalEgress ? null : (0, E.c)(c, l);
                        e = ed, n = s, a = c && _ && "number" == typeof s.start_idx ? (0, r.jsx)(N.c, {
                            conversationId: c.conversationId,
                            after: (0, h.b)(_.messageId, s.start_idx)
                        }) : null, t[12] = l, t[13] = s, t[14] = c, t[15] = e, t[16] = n, t[17] = a
                    } else e = t[15], n = t[16], a = t[17];
                    return t[18] !== e || t[19] !== n || t[20] !== a ? (_ = (0, r.jsx)(e, {
                        reference: n,
                        children: a
                    }), t[18] = e, t[19] = n, t[20] = a, t[21] = _) : _ = t[21], _
                }
                case "product":
                case "product_entity":
                case "explore_more":
                case "product_reviews":
                case "product_rationale":
                case "product_show_more_header": {
                    let e;
                    return t[22] !== s ? (e = (0, r.jsx)(eR, {
                        reference: s
                    }), t[22] = s, t[23] = e) : e = t[23], e
                }
                case "map":
                case "businesses_map": {
                    let e;
                    return t[24] !== l || t[25] !== s ? (e = (0, r.jsx)(v.a, {
                        contentReferenceIndex: l,
                        reference: s
                    }), t[24] = l, t[25] = s, t[26] = e) : e = t[26], e
                }
                case "grouped_webpages":
                case "grouped_webpages_v2":
                case "grouped_webpages_model_predicted_fallback":
                case "url":
                case "webpage":
                case "webpage_extended": {
                    let e;
                    return t[27] !== l || t[28] !== o || t[29] !== s || t[30] !== c ? (e = (0, r.jsx)(k, {
                        contentReferenceIndex: l,
                        isTerminalInline: o,
                        reference: s,
                        turnContext: c
                    }), t[27] = l, t[28] = o, t[29] = s, t[30] = c, t[31] = e) : e = t[31], e
                }
                case "sources_footnote":
                case "checkout_confirmation":
                case "dil":
                case "hidden":
                case null:
                    return null;
                case "file":
                case "library_folder":
                case "file_navlist": {
                    let e, a = null == n;
                    return t[32] !== n || t[33] !== l || t[34] !== s || t[35] !== a ? (e = (0, r.jsx)($.ChatGptFileReference, {
                        contentReferenceIndex: l,
                        reference: s,
                        showSaveAs: a,
                        children: n
                    }), t[32] = n, t[33] = l, t[34] = s, t[35] = a, t[36] = e) : e = t[36], e
                }
                case "python":
                case "container": {
                    let e;
                    return t[37] !== s ? (e = (0, r.jsx)(V, {
                        reference: s
                    }), t[37] = s, t[38] = e) : e = t[38], e
                }
                case "title_citation": {
                    let e;
                    return t[39] !== s ? (e = (0, r.jsx)(eE, {
                        reference: s
                    }), t[39] = s, t[40] = e) : e = t[40], e
                }
                case "link_title": {
                    let e;
                    return t[41] !== s ? (e = (0, r.jsx)(q, {
                        reference: s
                    }), t[41] = s, t[42] = e) : e = t[42], e
                }
                case "location_search": {
                    let e;
                    return t[43] !== s ? (e = (0, r.jsx)(eA, {
                        reference: s
                    }), t[43] = s, t[44] = e) : e = t[44], e
                }
                case "time": {
                    let e;
                    return t[45] !== s ? (e = (0, r.jsx)(eu, {
                        reference: s
                    }), t[45] = s, t[46] = e) : e = t[46], e
                }
                case "attribution":
                case "strix": {
                    let e;
                    return t[47] !== s ? (e = (0, r.jsx)(G, {
                        reference: s
                    }), t[47] = s, t[48] = e) : e = t[48], e
                }
                case "followup_a": {
                    let e;
                    return t[49] !== s ? (e = (0, r.jsx)(Z.a, {
                        reference: s
                    }), t[49] = s, t[50] = e) : e = t[50], e
                }
                case "followup_memory_a": {
                    let e;
                    return t[51] !== s ? (e = (0, r.jsx)(Z.a, {
                        isMemory: !0,
                        reference: s
                    }), t[51] = s, t[52] = e) : e = t[52], e
                }
                case "entity": {
                    let e;
                    return t[53] !== l || t[54] !== s || t[55] !== c ? (e = null == c ? null : (0, r.jsx)(K.a, {
                        contentReferenceIndex: l,
                        reference: s,
                        turnContext: c
                    }), t[53] = l, t[54] = s, t[55] = c, t[56] = e) : e = t[56], e
                }
                case "image_inline": {
                    let e;
                    return t[57] !== o || t[58] !== s ? (e = (0, r.jsx)(y.d, {
                        isTerminalInline: o,
                        reference: s
                    }), t[57] = o, t[58] = s, t[59] = e) : e = t[59], e
                }
                case "nav_list":
                case "tldr":
                case "navigation": {
                    let e;
                    return t[60] !== s ? (e = (0, r.jsx)(es.a, {
                        reference: s
                    }), t[60] = s, t[61] = e) : e = t[61], e
                }
                case "sports_standings":
                case "sports_schedule": {
                    let e;
                    return t[62] !== s ? (e = (0, r.jsx)(eI, {
                        reference: s
                    }), t[62] = s, t[63] = e) : e = t[63], e
                }
                case "entity_metadata": {
                    let e;
                    return t[64] !== l || t[65] !== s || t[66] !== c ? (e = (0, r.jsx)(eP, {
                        reference: s,
                        contentReferenceIndex: l,
                        turnContext: c
                    }), t[64] = l, t[65] = s, t[66] = c, t[67] = e) : e = t[67], e
                }
                case "video": {
                    let e;
                    return t[68] !== s ? (e = (0, r.jsx)(ep, {
                        reference: s
                    }), t[68] = s, t[69] = e) : e = t[69], e
                }
                case "calculator": {
                    let e;
                    return t[70] !== s ? (e = (0, r.jsx)(x, {
                        reference: s
                    }), t[70] = s, t[71] = e) : e = t[71], e
                }
                case "stock": {
                    let e;
                    return t[72] !== s ? (e = (0, r.jsx)(eC, {
                        reference: s
                    }), t[72] = s, t[73] = e) : e = t[73], e
                }
                case "forecast": {
                    let e;
                    return t[74] !== s ? (e = (0, r.jsx)(eS, {
                        reference: s
                    }), t[74] = s, t[75] = e) : e = t[75], e
                }
                case "client_defined_widget": {
                    let e;
                    return t[76] !== l || t[77] !== i || t[78] !== s ? (e = (0, r.jsx)(S.a, {
                        contentReferenceIndex: l,
                        isStreaming: i,
                        reference: s
                    }), t[76] = l, t[77] = i, t[78] = s, t[79] = e) : e = t[79], e
                }
                case "writing": {
                    let e;
                    return t[80] !== s ? (e = (0, r.jsx)(y.c, {
                        reference: s
                    }), t[80] = s, t[81] = e) : e = t[81], e
                }
                default: {
                    let e;
                    return t[82] !== o || t[83] !== s ? (e = (0, r.jsx)(y.b, {
                        isTerminalInline: o,
                        reference: s
                    }), t[82] = o, t[83] = s, t[84] = e) : e = t[84], e
                }
            }
        }

        function eg(e) {
            let t, n, l, i = (0, a.c)(10),
                o = (0, E.d)(),
                s = o?.contentReferences;
            i[0] !== e.attributes || i[1] !== s ? (t = (0, P.a)(e.attributes, s), i[0] = e.attributes, i[1] = s, i[2] = t) : t = i[2];
            let c = t;
            i[3] !== c || i[4] !== e ? (n = (0, r.jsx)(eN, {
                ...e,
                match: c
            }), i[3] = c, i[4] = e, i[5] = n) : n = i[5];
            let T = n;
            if (null == c || "writing_block" !== c.reference.category && (0, _.H)(c.reference) && null != c.reference.model_dil_v2) return T;
            let u = e.isBlock ? "div" : "span";
            return i[6] !== u || i[7] !== T || i[8] !== c.index ? (l = (0, r.jsx)(u, {
                className: "contents",
                "data-chatgpt-copy-reference": c.index,
                "data-markdown-copy": "contents",
                children: T
            }), i[6] = u, i[7] = T, i[8] = c.index, i[9] = l) : l = i[9], l
        }

        function eN(e) {
            let t, n, P, A, R, I, C = (0, a.c)(51),
                {
                    attributes: p,
                    children: O,
                    isTerminalInline: g,
                    match: N
                } = e,
                h = (0, l.y)(s.a),
                v = (0, E.d)(),
                G = (0, i.useContext)(o.a),
                b = i.Children.count(O) > 0 ? O : void 0;
            C[0] !== p ? (t = (0, T.c)(p), C[0] = p, C[1] = t) : t = C[1];
            let y = t,
                H = (0, l.x)("image_group" === y && u.a, v?.conversationId ?? null),
                x = null != N && "string" == typeof N.reference.type && N.reference.type.length > 0 ? N.reference.type : null,
                U = v?.conversationId ?? "",
                W = (null == N ? void 0 : v?.contentReferenceMessageIds?.[N.index]) ?? v?.messageId ?? "",
                D = "number" == typeof N?.reference.start_idx ? N.reference.start_idx : void 0;
            C[2] !== U || C[3] !== W || C[4] !== D ? (n = {
                conversationId: U,
                messageId: W,
                startIndex: D
            }, C[2] = U, C[3] = W, C[4] = D, C[5] = n) : n = C[5];
            let B = n,
                {
                    visible: L
                } = (0, l.x)(d.c, B);
            C[6] !== B || C[7] !== h ? (P = () => (0, d.d)(h, B), C[6] = B, C[7] = h, C[8] = P) : P = C[8];
            let w = (0, i.useEffectEvent)(P);
            if (C[9] !== w || C[10] !== x || C[11] !== L ? (A = () => {
                    L && "hidden" !== x && w()
                }, C[9] = w, C[10] = x, C[11] = L, C[12] = A) : A = C[12], C[13] !== x || C[14] !== B.conversationId || C[15] !== B.messageId || C[16] !== B.startIndex || C[17] !== h || C[18] !== L ? (R = [h, L, x, B.conversationId, B.messageId, B.startIndex], C[13] = x, C[14] = B.conversationId, C[15] = B.messageId, C[16] = B.startIndex, C[17] = h, C[18] = L, C[19] = R) : R = C[19], (0, i.useLayoutEffect)(A, R), !L) return null;
            if (null != b && (v?.isStreaming || "restricted" === G)) {
                let e;
                return C[20] !== b ? (e = (0, r.jsx)(r.Fragment, {
                    children: b
                }), C[20] = b, C[21] = e) : e = C[21], e
            }
            if (("image_group" === y || "image_v2" === y) && (null == N || "hidden" === x)) {
                let e, t;
                if (H || "hidden" === x && !v?.isStreaming) return null;
                let n = N?.index ?? 0,
                    a = v?.conversationId;
                return C[22] !== y ? (e = {
                    type: y
                }, C[22] = y, C[23] = e) : e = C[23], C[24] !== a || C[25] !== e || C[26] !== n ? (t = (0, r.jsx)(m.a, {
                    contentReferenceIndex: n,
                    conversationId: a,
                    reference: e
                }), C[24] = a, C[25] = e, C[26] = n, C[27] = t) : t = C[27], t
            }
            if (null == N) return null;
            let {
                index: M,
                reference: k
            } = N;
            if ("writing_block" === k.category) {
                let e, t = null == p.is_streaming ? void 0 : "true" === p.is_streaming;
                return C[28] !== M || C[29] !== k || C[30] !== t ? (e = (0, r.jsx)(S.a, {
                    contentReferenceIndex: M,
                    isStreaming: t,
                    reference: k
                }), C[28] = M, C[29] = k, C[30] = t, C[31] = e) : e = C[31], e
            }
            if ("app_block" === k.category) {
                let e, t = "true" === p.is_streaming;
                return C[32] !== k || C[33] !== t ? (e = (0, r.jsx)(c.a, {
                    reference: k,
                    isStreaming: t
                }), C[32] = k, C[33] = t, C[34] = e) : e = C[34], e
            }
            if ((0, _.H)(k)) {
                let e, t, n = v?.contentReferenceMessageIds,
                    a = n?.[M],
                    l = a ?? v?.messageId;
                C[35] !== M || C[36] !== a || C[37] !== n ? (e = null == n || null == a ? M : n.slice(0, M).filter(e => e === a).length, C[35] = M, C[36] = a, C[37] = n, C[38] = e) : e = C[38];
                let _ = e,
                    i = l ? `${l}:${String(_)}` : void 0;
                return C[39] !== M || C[40] !== k || C[41] !== i ? (t = (0, r.jsx)(f, {
                    contentReferenceIndex: M,
                    reference: k,
                    widgetRefId: i
                }), C[39] = M, C[40] = k, C[41] = i, C[42] = t) : t = C[42], t
            }
            let j = "hidden" === x ? y : x,
                F = null == p.is_streaming ? void 0 : "true" === p.is_streaming;
            return C[43] !== M || C[44] !== g || C[45] !== b || C[46] !== k || C[47] !== F || C[48] !== j || C[49] !== v ? (I = (0, r.jsx)(ef, {
                contentReferenceIndex: M,
                contentReferenceType: j,
                isStreaming: F,
                isTerminalInline: g,
                reference: k,
                turnContext: v,
                children: b
            }), C[43] = M, C[44] = g, C[45] = b, C[46] = k, C[47] = F, C[48] = j, C[49] = v, C[50] = I) : I = C[50], I
        }
    }),
    Nv0Q: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV");
        n.d(t, {}, {
            a: function(e) {
                let t, n, l = (0, a.c)(5),
                    {
                        children: _,
                        title: i
                    } = e;
                return l[0] !== i ? (t = null == i ? null : (0, r.jsx)("div", {
                    className: "mb-2 font-semibold text-default",
                    children: i
                }), l[0] = i, l[1] = t) : t = l[1], l[2] !== _ || l[3] !== t ? (n = (0, r.jsxs)("div", {
                    className: "my-3 max-w-[40rem] rounded-lg border border-subtle bg-surface-secondary/92 p-3 text-sm text-default",
                    "data-testid": "chatgpt-content-reference-card",
                    children: [t, _]
                }), l[2] = _, l[3] = t, l[4] = n) : n = l[4], n
            }
        })
    }),
    sWZd: (function(e, t, n) {
        var r = n("zd8w");
        let a = (0, r.createContext)(null);
        n.d(t, {}, {
            a: a,
            b: function() {
                return (0, r.use)(a)
            }
        })
    }),
    bMEA: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            l = n("zd8w"),
            _ = n("nzx4"),
            i = n("sWZd");
        let o = "codex-inline-pronunciation-popover-opened",
            s = "[data-inline-pronunciation-trigger]";
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, T, u, E, d, P, S, A, R, I, C, p, O, f, m, g, N, h, v, G, b, y, H, x, U, W, D, B, L, w, M = (0, a.c)(50),
                    {
                        children: k
                    } = e,
                    j = (0, l.useId)();
                M[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Map, M[0] = t) : t = M[0];
                let F = (0, l.useRef)(t);
                M[1] === Symbol.for("react.memo_cache_sentinel") ? (n = new Map, M[1] = n) : n = M[1];
                let Y = (0, l.useRef)(n),
                    V = (0, l.useRef)(null);
                M[2] === Symbol.for("react.memo_cache_sentinel") ? (c = new Set, M[2] = c) : c = M[2];
                let K = (0, l.useRef)(c),
                    $ = (0, l.useRef)(null),
                    Z = (0, l.useRef)(null),
                    z = (0, l.useRef)(null),
                    [Q, J] = (0, l.useState)(null);
                M[3] === Symbol.for("react.memo_cache_sentinel") ? (T = () => {
                    null != z.current && (window.clearTimeout(z.current), z.current = null)
                }, M[3] = T) : T = M[3];
                let X = T;
                M[4] === Symbol.for("react.memo_cache_sentinel") ? (u = e => {
                    let t = V.current?.popoverId ?? null,
                        n = e?.popoverId ?? null;
                    if (V.current = e, J(e), t !== n) {
                        if (null != t)
                            for (let e of Y.current.get(t) ?? []) e();
                        if (null != n)
                            for (let e of Y.current.get(n) ?? []) e()
                    }
                }, M[4] = u) : u = M[4];
                let q = u;
                M[5] === Symbol.for("react.memo_cache_sentinel") ? (E = e => {
                    X();
                    let t = V.current;
                    null != t && (K.current.delete(t.popoverId), Z.current = "other_popover_opened" !== e && "focus" === t.openAction && t.anchor.isConnected ? t.anchor : null, t.onClose(e), q(null))
                }, M[5] = E) : E = M[5];
                let ee = E;
                M[6] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
                    if (null != z.current) return;
                    let e = V.current?.popoverId;
                    null == e || K.current.has(e) || (z.current = window.setTimeout(() => {
                        ee("pointer_exit")
                    }, 120))
                }, M[6] = d) : d = M[6];
                let et = d;
                M[7] !== j ? (P = (e, t, n) => {
                    let r = F.current.get(e);
                    if (null == r) return;
                    X();
                    let a = V.current;
                    (a?.popoverId !== e || a.anchor !== t) && (null != a && (ee("other_popover_opened"), Z.current = null), q({
                        ...r,
                        anchor: t,
                        hoverContainer: t.closest("table, ul, ol") ?? t.parentElement ?? t,
                        openAction: n
                    }), r.onOpen(n), window.dispatchEvent(new CustomEvent(o, {
                        detail: {
                            providerId: j
                        }
                    })))
                }, M[7] = j, M[8] = P) : P = M[8];
                let en = P;
                M[9] === Symbol.for("react.memo_cache_sentinel") ? (S = e => {
                    F.current.set(e.popoverId, e);
                    let t = V.current;
                    return t?.popoverId === e.popoverId && q({
                        ...t,
                        ...e
                    }), () => {
                        if (F.current.get(e.popoverId) !== e) return;
                        let t = V.current;
                        t?.popoverId === e.popoverId && t.anchor.isConnected || (F.current.delete(e.popoverId), K.current.delete(e.popoverId), t?.popoverId === e.popoverId && ee("unmounted"))
                    }
                }, M[9] = S) : S = M[9];
                let er = S;
                M[10] === Symbol.for("react.memo_cache_sentinel") ? (A = (e, t) => {
                    t ? (K.current.add(e), X()) : K.current.delete(e)
                }, M[10] = A) : A = M[10];
                let ea = A;
                M[11] === Symbol.for("react.memo_cache_sentinel") ? (R = e => V.current?.popoverId === e, M[11] = R) : R = M[11];
                let el = R;
                M[12] === Symbol.for("react.memo_cache_sentinel") ? (I = (e, t) => {
                    let n = Y.current.get(e) ?? new Set;
                    return n.add(t), Y.current.set(e, n), () => {
                        n.delete(t), 0 === n.size && Y.current.delete(e)
                    }
                }, M[12] = I) : I = M[12];
                let e_ = I;
                M[13] !== j ? (C = () => {
                    let e = e => {
                        e.detail.providerId !== j && ee("other_popover_opened")
                    };
                    return window.addEventListener(o, e), () => {
                        window.removeEventListener(o, e)
                    }
                }, p = [ee, j], M[13] = j, M[14] = C, M[15] = p) : (C = M[14], p = M[15]), (0, l.useEffect)(C, p), M[16] === Symbol.for("react.memo_cache_sentinel") ? (O = () => {
                    let e = () => {
                        "hidden" === document.visibilityState && ee("page_hidden")
                    };
                    return document.addEventListener("visibilitychange", e), () => {
                        document.removeEventListener("visibilitychange", e)
                    }
                }, f = [ee], M[16] = O, M[17] = f) : (O = M[16], f = M[17]), (0, l.useEffect)(O, f), M[18] !== en || M[19] !== Q ? (m = () => {
                    if (null == Q) return;
                    let e = e => {
                            if ("touch" === e.pointerType) return;
                            let t = document.elementFromPoint?.(e.clientX, e.clientY) ?? (e.target instanceof Element ? e.target : null),
                                n = t?.closest(s),
                                r = n?.getAttribute("data-inline-pronunciation-trigger");
                            if (null != n && null != r && F.current.has(r)) return void en(r, n, "hover");
                            let a = V.current;
                            if (null != a) {
                                if (null == t) return void et();
                                a.hoverContainer.contains(t) || $.current?.contains(t) === !0 ? X() : et()
                            }
                        },
                        t = e => {
                            "touch" !== e.pointerType && null == e.relatedTarget && et()
                        };
                    return window.addEventListener("pointermove", e, !0), window.addEventListener("pointerover", e, !0), window.addEventListener("pointerout", t, !0), () => {
                        window.removeEventListener("pointermove", e, !0), window.removeEventListener("pointerover", e, !0), window.removeEventListener("pointerout", t, !0)
                    }
                }, g = [en, Q, X, et], M[18] = en, M[19] = Q, M[20] = m, M[21] = g) : (m = M[20], g = M[21]), (0, l.useEffect)(m, g), M[22] === Symbol.for("react.memo_cache_sentinel") ? (N = () => () => {
                    X(), ee("unmounted")
                }, h = [X, ee], M[22] = N, M[23] = h) : (N = M[22], h = M[23]), (0, l.useEffect)(N, h), M[24] !== en ? (v = {
                    activatePopover: en,
                    closePopover: ee,
                    isPopoverOpen: el,
                    registerPopover: er,
                    setPopoverHeldOpen: ea,
                    subscribeToPopoverOpenState: e_
                }, M[24] = en, M[25] = v) : v = M[25];
                let ei = v,
                    eo = null != Q;
                M[26] === Symbol.for("react.memo_cache_sentinel") ? (G = e => {
                    e || ee("outside_press")
                }, M[26] = G) : G = M[26], M[27] !== Q ? (b = null == Q ? null : (0, r.jsx)(_.b, {
                    virtualRef: {
                        current: Q.anchor
                    }
                }), M[27] = Q, M[28] = b) : b = M[28];
                let es = Q?.ariaLabel;
                M[29] === Symbol.for("react.memo_cache_sentinel") ? (y = e => {
                    e.preventDefault();
                    let t = Z.current;
                    Z.current = null, t?.focus()
                }, H = () => {
                    ee("escape")
                }, M[29] = y, M[30] = H) : (y = M[29], H = M[30]), M[31] !== Q?.openAction ? (x = e => {
                    Q?.openAction !== "focus" && e.preventDefault()
                }, M[31] = Q?.openAction, M[32] = x) : x = M[32], M[33] === Symbol.for("react.memo_cache_sentinel") ? (U = e => {
                    e.target instanceof Element && null != e.target.closest(s) ? e.preventDefault() : ee("outside_press")
                }, M[33] = U) : U = M[33];
                let ec = Q?.popoverId;
                M[34] === Symbol.for("react.memo_cache_sentinel") ? (W = e => {
                    "touch" !== e.pointerType && et()
                }, M[34] = W) : W = M[34];
                let eT = Q?.content;
                return M[35] !== ec || M[36] !== eT ? (D = (0, r.jsx)("div", {
                    ref: $,
                    onPointerEnter: X,
                    onPointerLeave: W,
                    children: eT
                }, ec), M[35] = ec, M[36] = eT, M[37] = D) : D = M[37], M[38] !== es || M[39] !== x || M[40] !== D ? (B = (0, r.jsx)(_.c, {
                    "aria-label": es,
                    align: "start",
                    className: "p-0",
                    disablePadding: !0,
                    side: "right",
                    sideOffset: 6,
                    size: "menuWide",
                    updatePositionStrategy: "always",
                    variant: "menu",
                    onCloseAutoFocus: y,
                    onEscapeKeyDown: H,
                    onOpenAutoFocus: x,
                    onPointerDownOutside: U,
                    children: D
                }), M[38] = es, M[39] = x, M[40] = D, M[41] = B) : B = M[41], M[42] !== eo || M[43] !== b || M[44] !== B ? (L = (0, r.jsxs)(_.a, {
                    open: eo,
                    onOpenChange: G,
                    children: [b, B]
                }), M[42] = eo, M[43] = b, M[44] = B, M[45] = L) : L = M[45], M[46] !== k || M[47] !== ei || M[48] !== L ? (w = (0, r.jsxs)(i.a, {
                    value: ei,
                    children: [k, L]
                }), M[46] = k, M[47] = ei, M[48] = L, M[49] = w) : w = M[49], w
            }
        })
    }),
    zMVZ: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            l = n("tBe6"),
            _ = n("fshA"),
            i = n("iTtm"),
            o = n("rKAs"),
            s = n("zd8w"),
            c = n("E8Sp"),
            T = n("O0M0"),
            u = n("g3w6"),
            E = n("ygO2"),
            d = n("nlNF"),
            P = n("yGJW"),
            S = n("tSEg"),
            A = n("WFY2"),
            R = n("VlIB"),
            I = n("LtEv"),
            C = n("YYmx"),
            p = n("OOaz"),
            O = n("dQRk"),
            f = n("TUMj"),
            m = n("DW1N"),
            g = n("gsAl"),
            N = n("jAnS"),
            h = n("GO3v"),
            v = n("DIH2");

        function G(e) {
            A.a.error("ChatGPT followup content reference submit failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, A, b, y = (0, a.c)(17),
                    {
                        isMemory: H,
                        presentation: x,
                        reference: U
                    } = e,
                    W = void 0 !== H && H,
                    D = void 0 === x ? "inline" : x,
                    B = (0, i.y)(S.a),
                    L = (0, s.useContext)(T.a),
                    w = (0, s.useContext)(R.a),
                    M = (0, f.d)();
                y[0] !== U ? (t = (0, v.b)(U.prompt_text) ?? (0, v.b)(U.matched_text) ?? (0, o.j)(U), y[0] = U, y[1] = t) : t = y[1];
                let k = t;
                y[2] !== U.matched_text || y[3] !== k ? (n = (0, v.b)(U.matched_text) ?? k, y[2] = U.matched_text, y[3] = k, y[4] = n) : n = y[4];
                let j = n;
                if (null == k || null == j) return null;
                y[5] !== L || y[6] !== w || y[7] !== W || y[8] !== U || y[9] !== B || y[10] !== k || y[11] !== M ? (A = () => {
                    let e;
                    if (null == M) return;
                    let t = M.contentReferences.indexOf(U),
                        n = M.contentReferenceMessageIds?.[t] ?? M.messageId,
                        r = (0, f.c)(M, t),
                        a = null != r && r.messageId.length > 0 && r.messageId.length <= 256 && !r.messageId.startsWith("WEB:") ? r.messageId : void 0,
                        i = (0, h.b)(U),
                        o = null == a ? void 0 : (0, h.a)(U),
                        s = o?.actionId ?? (i?.level === "l2" && ("followup_a" === i.renderer || "inline_followup_a" === i.renderer) && i.actionId?.startsWith(`l2.${i.useCase}.`) && i.source === ("l2.look_something_up.current_information" === i.actionId ? "conversational_onboarding_use_case_l2_web_search" : "conversational_onboarding_use_case_l2") ? i.actionId : void 0);
                    if (null != n && !n.startsWith("WEB:")) {
                        try {
                            "conversation_followup_suggestions_v1" === U.source && (0, m.b)(B, {
                                data: {
                                    ...U,
                                    interaction_type: "clicked",
                                    followup_source: U.source,
                                    followup_presentation_mode: U.presentation_mode
                                },
                                surface: "content_reference",
                                conversationId: M.conversationId,
                                messageId: n
                            }), (0, P.a)(B, l.d, {
                                eventType: "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_CLICKED",
                                conversationId: B.get(O.j, M.conversationId) ?? void 0,
                                messageId: n,
                                contentReferenceType: "string" == typeof U.type ? U.type : void 0,
                                followupSource: "string" == typeof U.source ? U.source : void 0
                            })
                        } catch {}
                        let e = i ?? o;
                        if (null != e) try {
                            (0, P.a)(B, _.a, null == o ? e : {
                                ...o,
                                conversationId: B.get(O.j, M.conversationId) ?? void 0,
                                messageId: a
                            })
                        } catch {}
                    }
                    if (W) return void(0, C.e)(B, M.conversationId, {
                        messageMetadata: {
                            followups_v2_followup_clicked: !0
                        },
                        targetText: k
                    });
                    let T = B.get(g.e, L),
                        u = M.conversationId,
                        E = B.get(d.c);
                    null != T && (0, p.e)(u) && null == B.get(O.j, u) && null == B.get(O.Z, u) && (0, g.a)(B, T, u);
                    let S = {
                        followups_v2_followup_clicked: !0,
                        ...null != s && null != a ? {
                            onboarding_selected_action_id: s,
                            source_message_id: a
                        } : {},
                        ..."string" == typeof U.source && U.source ? {
                            followups_v2_followup_source: U.source
                        } : {}
                    };
                    if (w?.sharedConversationId === u) {
                        let t = w.composer;
                        if (t?.canSubmitPrompt !== !0) return;
                        e = t.submitPrompt(k, {
                            fileUploadIds: [],
                            messageMetadata: S,
                            preserveDraft: !0,
                            submissionIntent: "beacon_action"
                        })
                    } else e = (0, I.submitChatGptFollowUp)(B, {
                        conversationId: u,
                        isTemporaryChat: M.isTemporaryChat,
                        messageMetadata: S,
                        prompt: k,
                        onSubmitted: null == T ? void 0 : () => {
                            B.get(d.c) === E && (0, c.d)(B, (0, N.c)(u))
                        }
                    });
                    e.catch(G)
                }, y[5] = L, y[6] = w, y[7] = W, y[8] = U, y[9] = B, y[10] = k, y[11] = M, y[12] = A) : A = y[12];
                let F = A;
                return y[13] !== j || y[14] !== F || y[15] !== D ? (b = "chip" === D ? (0, r.jsx)(E.a, {
                    color: "conversationFollowup",
                    size: "conversationFollowup",
                    onClick: F,
                    children: j
                }) : (0, r.jsx)(u.a, {
                    displayText: j,
                    onActivate: F
                }), y[13] = j, y[14] = F, y[15] = D, y[16] = b) : b = y[16], b
            }
        })
    }),
    xJ25: (function(e, t, n) {
        n.d(t, {
            a: () => eo,
            b: () => ei
        });
        var r = n("ABep"),
            a = n("QosV"),
            l = n("tBe6"),
            _ = n("EA6X"),
            i = n("T0Rc"),
            o = n("D7Ms"),
            s = n("iTtm"),
            c = n("xnQm"),
            T = n("rKAs"),
            u = n("zd8w"),
            E = n("Cslg"),
            d = n("DcH0"),
            P = n("T1PX"),
            S = n("r21w"),
            A = n("AdZa"),
            R = n("hHaO"),
            I = n("SqqO"),
            C = n("WAdu"),
            p = n("yGJW"),
            O = n("iL7Y"),
            f = n("OWtl"),
            m = n("tSEg"),
            g = n("hZax"),
            N = n("xAIC"),
            h = n("taWv"),
            v = n("zn0A"),
            G = n("tZ3A"),
            b = n("ADj7"),
            y = n("dQRk"),
            H = n("TUMj"),
            x = n("xof2"),
            U = n("RW7r"),
            W = n("TJEh"),
            D = n("wFiG"),
            B = n("LQio"),
            L = n("H0jo"),
            w = n("fYLJ"),
            M = n("oQ79"),
            k = n("ejvO"),
            j = n("aPUc"),
            F = n("niC2"),
            Y = n("on57"),
            V = n("oyxz"),
            K = n("Wf1j"),
            $ = n("HOLv"),
            Z = n("ibLK"),
            z = n("YeQK"),
            Q = n("TwL3"),
            J = n("SUhA"),
            X = n("Sd8U"),
            q = n("mYd2");

        function ee(e) {
            let t, n, l, _, i, o = (0, a.c)(15),
                {
                    ref: s,
                    cards: c,
                    conversationId: T,
                    imageAssetResolver: E,
                    layout: d,
                    onOpenImage: P,
                    renderImageFavorite: A
                } = e,
                R = (0, Z.a)("(width < 48rem)"),
                I = "carousel" === d && R ? c.length : 3;
            o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Map, o[0] = t) : t = o[0];
            let C = (0, u.useRef)(t);
            o[1] === Symbol.for("react.memo_cache_sentinel") ? (n = () => ({
                getThumbnail: e => C.current.get(e) ?? null
            }), o[1] = n) : n = o[1], (0, u.useImperativeHandle)(s, n);
            let p = "bento" === d ? "grid aspect-9/5 grid-cols-3 grid-rows-2" : "no-scrollbar flex overflow-x-auto md:grid md:grid-cols-3";
            return o[2] !== p ? (l = (0, Y.b)("my-3 gap-1", p), o[2] = p, o[3] = l) : l = o[3], o[4] !== c || o[5] !== T || o[6] !== E || o[7] !== d || o[8] !== P || o[9] !== A || o[10] !== I ? (_ = c.slice(0, I).map((e, t) => {
                let {
                    image: n,
                    thumbnailOnly: a
                } = e;
                return (0, r.jsx)("div", {
                    "data-web-image-tile": !0,
                    className: (0, Y.b)("group/generated-image-preview relative min-h-0 min-w-0 overflow-hidden border border-default", "carousel" === d && "aspect-5/4 max-h-64 w-32 shrink-0 rounded-xl md:w-auto", "bento" === d && 0 === t && "col-span-2 row-span-2 rounded-ss-xl rounded-se-md rounded-ee-md rounded-es-xl", "bento" === d && 1 === t && "rounded-ss-md rounded-se-xl rounded-ee-md rounded-es-md", "bento" === d && 2 === t && "rounded-ss-md rounded-se-md rounded-ee-xl rounded-es-md"),
                    children: null == n ? (0, r.jsx)(S.a, {
                        className: "h-full w-full"
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(et, {
                            image: n,
                            imageRef: e => {
                                if (null != e) return C.current.set(n.id, e), () => {
                                    C.current.get(n.id) === e && C.current.delete(n.id)
                                }
                            },
                            conversationId: T,
                            imageAssetResolver: E,
                            thumbnailOnly: a,
                            aspectRatio: "bento" === d ? 1.2 : 1.25,
                            imageNumber: t + 1,
                            onOpen: () => P(n)
                        }, n.src), (0, r.jsx)("div", {
                            className: "pointer-events-none absolute inset-0 z-10 flex items-start justify-end p-3",
                            children: A?.(n)
                        }), t === I - 1 && c.length > I ? (0, r.jsxs)("div", {
                            className: "pointer-events-none absolute end-3 bottom-3 inline-flex items-center gap-1 rounded-full bg-media-control-background px-3 py-1.5 text-sm font-medium text-media-foreground select-none browser:start-3 browser:end-auto",
                            children: [(0, r.jsx)($.a, {
                                asset: q.a
                            }), (0, r.jsx)("span", {
                                className: "tabular-nums",
                                "aria-hidden": "true",
                                children: c.length
                            }), (0, r.jsx)("span", {
                                className: "sr-only",
                                children: (0, r.jsx)(V.a, {
                                    id: "chatgpt.imageGroup.imageCount",
                                    defaultMessage: "{count, plural, one {# image} other {# images}}",
                                    description: "Accessible text for the total image count in a ChatGPT search image group. Count includes images available in the gallery beyond the visible tiles.",
                                    values: {
                                        count: c.length
                                    }
                                })
                            })]
                        }) : null]
                    })
                }, t)
            }), o[4] = c, o[5] = T, o[6] = E, o[7] = d, o[8] = P, o[9] = A, o[10] = I, o[11] = _) : _ = o[11], o[12] !== l || o[13] !== _ ? (i = (0, r.jsx)("div", {
                className: l,
                children: _
            }), o[12] = l, o[13] = _, o[14] = i) : i = o[14], i
        }

        function et(e) {
            let t, n, l, _, i, o, c, T, E, d, P, A, R = (0, a.c)(49),
                {
                    image: I,
                    imageRef: C,
                    conversationId: p,
                    imageAssetResolver: O,
                    thumbnailOnly: f,
                    aspectRatio: m,
                    imageNumber: g,
                    onOpen: N
                } = e,
                h = (0, s.y)(X.a),
                v = (0, K.a)();
            R[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], R[0] = t) : t = R[0];
            let [G, b] = (0, u.useState)(t), [y, H] = (0, u.useState)(null), x = f ? I.previewSrc : I.src, U = f ? I.src : I.previewSrc;
            R[1] !== G || R[2] !== x || R[3] !== U ? (n = [x, U].filter(e => null != e && !G.includes(e)), R[1] = G, R[2] = x, R[3] = U, R[4] = n) : n = R[4];
            let [W, D] = n;
            R[5] !== p || R[6] !== O ? (l = {
                conversationId: p,
                imageAssetResolver: O,
                shouldLoadFileDataUrl: !1
            }, R[5] = p, R[6] = O, R[7] = l) : l = R[7];
            let B = l,
                L = W ?? "";
            R[8] !== B || R[9] !== L ? (_ = {
                ...B,
                src: L
            }, R[8] = B, R[9] = L, R[10] = _) : _ = R[10];
            let w = (0, J.a)(_),
                M = null != w.previewSrc && y === w.previewSrc,
                k = !w.isError && (f || M) ? "" : D ?? "";
            R[11] !== B || R[12] !== k ? (i = {
                ...B,
                src: k
            }, R[11] = B, R[12] = k, R[13] = i) : i = R[13];
            let j = (0, J.a)(i),
                F = w.isError ? j.previewSrc : w.previewSrc,
                Y = w.isError ? D : W,
                V = f || w.isError || M || j.previewSrc === F ? null : j.previewSrc,
                $ = V ?? F;
            return R[14] !== p || R[15] !== I.id || R[16] !== I.previewSrc || R[17] !== I.searchResult?.title || R[18] !== I.src || R[19] !== O || R[20] !== v || R[21] !== h || R[22] !== $ ? (o = () => null == $ ? [] : (0, z.getGeneratedImageContextMenuItems)(h, {
                chatGptConversationId: p.startsWith("chatgpt:") ? p.slice(8) : void 0,
                displaySrc: $,
                image: {
                    id: I.id,
                    alt: I.searchResult?.title ?? "",
                    tabTitle: I.searchResult?.title ?? "",
                    previewSrc: I.previewSrc ?? I.src,
                    src: I.src
                },
                imageAssetResolver: O,
                intl: v
            }), R[14] = p, R[15] = I.id, R[16] = I.previewSrc, R[17] = I.searchResult?.title, R[18] = I.src, R[19] = O, R[20] = v, R[21] = h, R[22] = $, R[23] = o) : o = R[23], R[24] !== g || R[25] !== v ? (c = v.formatMessage({
                id: "chatgpt.imageGroup.bento.openImage",
                defaultMessage: "Open image {number}",
                description: "Accessible label for opening a search image in a ChatGPT response's image grid. Number is the one-based position in the group."
            }, {
                number: g
            }), R[24] = g, R[25] = v, R[26] = c) : c = R[26], R[27] === Symbol.for("react.memo_cache_sentinel") ? (T = (0, r.jsx)(S.a, {
                className: "absolute inset-0"
            }), R[27] = T) : T = R[27], R[28] !== m || R[29] !== Y || R[30] !== I || R[31] !== C || R[32] !== V || R[33] !== F ? (E = null == F ? null : (0, r.jsx)("img", {
                ref: null == V ? C : void 0,
                className: "relative h-full w-full object-cover",
                style: {
                    objectPosition: en(I, m)
                },
                src: F,
                alt: "",
                draggable: !1,
                referrerPolicy: "no-referrer",
                onLoad: () => H(F),
                onError: () => {
                    null != Y && b(e => [...e, Y])
                }
            }, F), R[28] = m, R[29] = Y, R[30] = I, R[31] = C, R[32] = V, R[33] = F, R[34] = E) : E = R[34], R[35] !== m || R[36] !== D || R[37] !== I || R[38] !== C || R[39] !== V ? (d = null == V ? null : (0, r.jsx)("img", {
                ref: C,
                className: "pointer-events-none absolute inset-0 h-full w-full object-cover",
                style: {
                    objectPosition: en(I, m)
                },
                src: V,
                alt: "",
                "aria-hidden": "true",
                draggable: !1,
                referrerPolicy: "no-referrer",
                onError: () => {
                    null != D && b(e => [...e, D])
                }
            }, V), R[35] = m, R[36] = D, R[37] = I, R[38] = C, R[39] = V, R[40] = d) : d = R[40], R[41] !== N || R[42] !== c || R[43] !== E || R[44] !== d ? (P = (0, r.jsxs)("button", {
                className: "relative h-full w-full cursor-interaction bg-surface-secondary select-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
                type: "button",
                "aria-label": c,
                onClick: N,
                children: [T, E, d]
            }), R[41] = N, R[42] = c, R[43] = E, R[44] = d, R[45] = P) : P = R[45], R[46] !== o || R[47] !== P ? (A = (0, r.jsx)(Q.a, {
                getItems: o,
                children: P
            }), R[46] = o, R[47] = P, R[48] = A) : A = R[48], A
        }

        function en(e, t) {
            let n = e.thumbnailCrop;
            if (null == n) return;
            let r = n.width / n.height;
            if (1e-6 > Math.abs(r - t)) return;
            let a = r > t,
                l = a ? r : 1 / r,
                _ = a ? t : 1 / t,
                i = Math.max(0, Math.min(100, ((a ? n.center_x_percent : n.center_y_percent) * l - _ / 2) / (l - _) * 100)).toFixed(1);
            return a ? `${i}% 50.0%` : `50.0% ${i}%`
        }
        var er = n("DIH2"),
            ea = n("boWb");
        let el = (0, c.Oe)("chatgpt:image-group"),
            e_ = (0, u.lazy)(async () => {
                let {
                    ChatGptImageLightbox: e
                } = await Promise.all([n.e(800306), n.e(624644)]).then(n.bind(n, "Zvr9"));
                return {
                    default: e
                }
            });

        function ei(e) {
            let t, n, l, _, i = (0, a.c)(10),
                {
                    attributes: o
                } = e,
                s = (0, H.d)();
            if (i[0] !== o || i[1] !== s) {
                l = Symbol.for("react.early_return_sentinel");
                e: {
                    var c, u;
                    let e;
                    if (null == (t = (0, N.a)(o)) || s?.contentReferences[t]?.type === "hidden" && !s.isStreaming) {
                        l = null;
                        break e
                    }
                    n = es((c = t, u = s?.contentReferences, null == (e = u?.[c]) ? [] : (0, T.u)(e, c)), s?.shouldBlockExternalEgress === !0 && !0 !== s.renderRestrictedImages)
                }
                i[0] = o, i[1] = s, i[2] = t, i[3] = n, i[4] = l
            } else t = i[2], n = i[3], l = i[4];
            if (l !== Symbol.for("react.early_return_sentinel")) return l;
            let E = n;
            if (s?.shouldBlockExternalEgress === !0 && 0 === E.length) return null;
            let d = s?.conversationId,
                P = s?.contentReferences[t];
            return i[5] !== E || i[6] !== t || i[7] !== d || i[8] !== P ? (_ = (0, r.jsx)(eu, {
                contentReferenceIndex: t,
                conversationId: d,
                reference: P,
                images: E
            }), i[5] = E, i[6] = t, i[7] = d, i[8] = P, i[9] = _) : _ = i[9], _
        }

        function eo(e) {
            let t, n, l = (0, a.c)(9),
                {
                    contentReferenceIndex: _,
                    conversationId: i,
                    reference: o
                } = e,
                s = (0, H.d)();
            l[0] !== _ || l[1] !== o || l[2] !== s ? (t = es((0, T.u)(o, _), s?.shouldBlockExternalEgress === !0 && !0 !== s.renderRestrictedImages), l[0] = _, l[1] = o, l[2] = s, l[3] = t) : t = l[3];
            let c = t;
            return s?.shouldBlockExternalEgress === !0 && 0 === c.length ? null : (l[4] !== _ || l[5] !== i || l[6] !== c || l[7] !== o ? (n = (0, r.jsx)(eu, {
                contentReferenceIndex: _,
                conversationId: i,
                reference: o,
                images: c
            }), l[4] = _, l[5] = i, l[6] = c, l[7] = o, l[8] = n) : n = l[8], n)
        }

        function es(e, t) {
            return t ? e.flatMap(e => (0, I.d)(e.src) ? [] : [{
                ...e,
                previewSrc: null == e.previewSrc || (0, I.d)(e.previewSrc) ? e.src : e.previewSrc
            }]) : e
        }

        function ec(e) {
            let t, n = (0, a.c)(4),
                {
                    fullWidth: l
                } = e,
                _ = (0, u.useContext)(B.a);
            if (l) {
                let e, t;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(d.a, {
                    className: "aspect-5/4",
                    "aria-hidden": "true",
                    variant: "prominent"
                }), n[0] = e) : e = n[0], n[1] !== _ ? (t = (0, r.jsx)("div", {
                    className: "-mx-6 mb-5",
                    "data-testid": "chatgpt-image-group-shimmer",
                    children: (0, r.jsx)("div", {
                        ref: _,
                        "data-entity-photos": !0,
                        children: e
                    })
                }), n[1] = _, n[2] = t) : t = n[2], t
            }
            return n[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.jsx)("div", {
                className: "my-3",
                "data-testid": "chatgpt-image-group-shimmer",
                children: (0, r.jsx)("div", {
                    className: "grid gap-2 overflow-hidden",
                    style: {
                        gridTemplateColumns: "repeat(4, minmax(0, 1fr))"
                    },
                    children: Array.from({
                        length: 4
                    }, eT)
                })
            }), n[3] = t) : t = n[3], t
        }

        function eT(e, t) {
            return (0, r.jsx)(S.a, {
                className: "aspect-square min-w-0 rounded-2xl",
                "data-testid": "chatgpt-image-group-shimmer-tile"
            }, t)
        }

        function eu(e) {
            let t, n, l, _, i = (0, a.c)(12),
                o = (0, H.d)(),
                c = (0, s.z)(o?.trackShownImpressions === !1 ? v.a : null);
            if (null == c) {
                let t;
                return i[0] !== e ? (t = (0, r.jsx)(ed, {
                    ...e
                }), i[0] = e, i[1] = t) : t = i[1], t
            }
            let T = e.images;
            if (i[2] !== c || i[3] !== e.images) {
                l = Symbol.for("react.early_return_sentinel");
                e: {
                    let e;i[7] !== c ? (e = e => {
                        let t = c[e.src] ?? (null == e.previewSrc ? void 0 : c[e.previewSrc]);
                        return null == t ? [] : [{
                            image: e,
                            src: t
                        }]
                    }, i[7] = c, i[8] = e) : e = i[8];
                    let r = T.flatMap(e);
                    if (0 === r.length) {
                        l = null;
                        break e
                    }
                    t = "my-3 grid grid-cols-3 gap-2",
                    n = r.map(eE)
                }
                i[2] = c, i[3] = e.images, i[4] = t, i[5] = n, i[6] = l
            } else t = i[4], n = i[5], l = i[6];
            return l !== Symbol.for("react.early_return_sentinel") ? l : (i[9] !== t || i[10] !== n ? (_ = (0, r.jsx)("div", {
                className: t,
                children: n
            }), i[9] = t, i[10] = n, i[11] = _) : _ = i[11], _)
        }

        function eE(e) {
            let {
                image: t,
                src: n
            } = e;
            return (0, r.jsx)("img", {
                className: "h-auto w-full min-w-0 self-center rounded-xl",
                src: n,
                alt: t.searchResult?.title ?? "",
                loading: "eager",
                referrerPolicy: "no-referrer"
            }, t.id)
        }

        function ed(e) {
            let t, n, l, i, o, T, d, S, I, p, N = (0, a.c)(55),
                {
                    contentReferenceIndex: v,
                    conversationId: B,
                    reference: Y,
                    images: V
                } = e,
                K = (0, s.y)(f.a),
                $ = (0, s.y)(m.a),
                Z = (0, H.d)(),
                z = (0, s.x)(G.a, B ?? null),
                Q = Y?.layout === "full_width" || Y?.start_idx === 0 && (z || (0, W.i)(Z?.imageEngagementContext?.parentContext.entityCategory ?? null)),
                J = !Q && Y?.layout === "bento",
                X = Array.isArray(Y?.images) ? Y.images : [],
                q = null;
            J ? q = "bento" : Y?.type !== "image_group" || Q || 1 === X.length || (q = "carousel");
            let et = (0, u.useContext)(C.a),
                en = Q && !Z?.contentReferences.slice(0, v).some(eO),
                ei = (0, s.x)(L.e, en ? B ?? null : null),
                eo = "restricted" !== et && Z?.shouldBlockExternalEgress !== !0 ? ei ?? void 0 : void 0,
                es = eo?.src,
                eT = eo?.previewSrc;
            N[0] !== es || N[1] !== eT ? (t = new Set([es, eT].filter(ep)), N[0] = es, N[1] = eT, N[2] = t) : t = N[2];
            let eu = t;
            N[3] !== eu ? (n = e => eu.has(e.src) || eu.has(e.previewSrc ?? "") || eu.has(e.searchResult?.originalSrc ?? ""), N[3] = eu, N[4] = n) : n = N[4];
            let eE = V.find(n),
                ed = null != eo ? [{
                    ...eo,
                    ...eE,
                    id: eo.id,
                    src: eE?.src ?? eo.src,
                    previewSrc: eo.previewSrc ?? eo.src
                }, ...V.filter(e => !eu.has(e.src) && !eu.has(e.previewSrc ?? "") && !eu.has(e.searchResult?.originalSrc ?? ""))] : V,
                [em, eg] = (0, u.useState)(null),
                eN = (0, u.useRef)(null),
                eh = (0, P.a)(),
                ev = (0, u.useContext)(w.a),
                eG = (0, g.k)(),
                eb = (0, s.x)(y.j, B ?? null),
                ey = null == B ? el : (0, c.Oe)(`chatgpt:${B}`),
                eH = null == eb ? void 0 : (0, h.c)(eb),
                ex = "chatgpt-thread" === $.value.routeKind && $.value.conversationId === B,
                eU = ed.map(eC),
                eW = ed.map(k.c),
                eD = eW.flatMap(eI),
                eB = Z?.contentReferenceMessageIds?.[v] ?? Z?.messageId;
            N[5] === Symbol.for("react.memo_cache_sentinel") ? (l = new Set, N[5] = l) : l = N[5];
            let eL = (0, u.useRef)(l),
                ew = Q || null != q || null != ev || ed.some(eR) ? e => {
                    let t = {
                            engagementContext: {
                                conversationId: eb ?? void 0,
                                messageId: eB,
                                assistantMessageId: Z?.messageId,
                                turnOrdinal: (0, x.a)(K, B, Z?.messageId)
                            },
                            viewOnly: Q,
                            imageAssetContext: {
                                conversationId: ey,
                                imageAssetResolver: eH
                            },
                            images: eU,
                            favorites: 0 === eD.length || Z?.productReference != null ? void 0 : {
                                sources: eW,
                                conversationId: eb ?? void 0,
                                messageId: eB
                            },
                            selectedIndex: e
                        },
                        n = {
                            request: t,
                            imageIds: ed.map(eA),
                            onNavigate(e, n) {
                                (0, O.a)(K.get(E.m).authMethod) && (ed[e]?.searchResult != null || 0 === e && null != eo) && (0, b.a)(K, {
                                    turnContext: Z,
                                    contentReferenceIndex: v,
                                    image: t.images[e],
                                    imageIndex: e,
                                    galleryArrow: n,
                                    surfaceLocation: _.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_FULLSCREEN_IMAGE_GALLERY
                                })
                            }
                        };
                    (ed[e]?.searchResult != null || 0 === e && null != eo) && (0, b.a)(K, {
                        turnContext: Z,
                        contentReferenceIndex: v,
                        imageUse: ed.some(eS) ? "deepResearch" : "legacyCarousel",
                        image: t.images[e],
                        imageIndex: e
                    });
                    let r = null == ev && !$.get(m.j) && (0, g.f)(eG, "2983946247").get("image_overlay_enabled", !1);
                    null != ev ? ev(t) : r ? (0, A.b)({
                        source: eN.current?.getThumbnail(ed[e].id) ?? null,
                        open: e => eg({
                            ...n,
                            imageRef: e
                        }),
                        reducedMotion: eh
                    }) : eg(n)
                } : void 0,
                eM = e => {
                    let t = ed.findIndex(t => t.id === e.id),
                        n = eW[t];
                    return null == n || Z?.productReference != null ? null : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(M.SearchImageFavorite, {
                            source: n,
                            sources: eD,
                            conversationId: eb ?? void 0,
                            messageId: eB,
                            surface: "image_tile",
                            presentation: "folderMenu"
                        }), (0, r.jsx)(j.a, {
                            source: n,
                            conversationId: eb ?? void 0,
                            messageId: eB,
                            imageIndex: t,
                            contentReferenceStartIndex: "number" == typeof Y?.start_idx ? Y.start_idx : void 0,
                            surface: "image_tile"
                        }, n.content_url)]
                    })
                };
            N[6] !== v || N[7] !== Z ? (i = Z?.contentReferences[v]?.type === "image_group" ? (0, r.jsx)(ea.a, {
                contentReferenceIndex: v,
                reference: Z.contentReferences[v],
                turnContext: Z
            }) : null, N[6] = v, N[7] = Z, N[8] = i) : i = N[8];
            let ek = ed.map(e => (0, r.jsx)(ef, {
                    contentReferenceIndex: v,
                    image: e,
                    logged: eL,
                    turnContext: Z
                }, e.id)),
                ej = null != q ? (0, r.jsx)(ee, {
                    ref: eN,
                    cards: Array.from({
                        length: X.length || Math.max(ed.length, 3)
                    }, (e, t) => {
                        let n = ed.find(e => e.sourceImageIndex === t);
                        return {
                            image: n,
                            thumbnailOnly: ("carousel" === q || 0 !== t) && n?.thumbnailOnly === !0
                        }
                    }),
                    conversationId: ey,
                    imageAssetResolver: eH,
                    layout: q,
                    onOpenImage: e => ew?.(ed.findIndex(t => t.id === e.id)),
                    renderImageFavorite: eM
                }) : null;
            return N[9] !== Q || N[10] !== ed.length || N[11] !== q ? (o = 0 === ed.length && null == q ? (0, r.jsx)(ec, {
                fullWidth: Q
            }) : null, N[9] = Q, N[10] = ed.length, N[11] = q, N[12] = o) : o = N[12], N[13] !== v || N[14] !== eo?.previewSrc || N[15] !== eo?.src || N[16] !== Q || N[17] !== eN || N[18] !== ey || N[19] !== eH || N[20] !== ed || N[21] !== ew || N[22] !== K || N[23] !== Z ? (T = ed.length > 0 && Q ? (0, r.jsx)(F.a, {
                ref: eN,
                conversationId: ey,
                firstPhotoFallbackSrc: eo?.previewSrc ?? eo?.src,
                imageAssetResolver: eH,
                images: ed,
                onOpenImage: ew,
                onArrowClick: (e, t) => {
                    let n = ed[t],
                        r = Z?.contentReferences[v];
                    if (r?.type !== "image_group" || null == n.sourceImageIndex) return;
                    let a = Array.isArray(r.images) ? r.images.map(er.d).filter(eP) : [],
                        l = (0, er.d)(a[n.sourceImageIndex]?.image_result);
                    (0, b.a)(K, {
                        turnContext: Z,
                        contentReferenceIndex: v,
                        galleryArrow: e,
                        imageIndex: n.sourceImageIndex,
                        image: {
                            attribution: null,
                            destinationUrl: (0, er.b)(l?.url),
                            originalSrc: (0, er.b)(l?.original_content_url) ?? void 0,
                            src: (0, er.b)(l?.content_url) ?? "",
                            title: null
                        }
                    })
                }
            }) : null, N[13] = v, N[14] = eo?.previewSrc, N[15] = eo?.src, N[16] = Q, N[17] = eN, N[18] = ey, N[19] = eH, N[20] = ed, N[21] = ew, N[22] = K, N[23] = Z, N[24] = T) : T = N[24], N[25] !== B || N[26] !== Q || N[27] !== eN || N[28] !== ey || N[29] !== eH || N[30] !== ed || N[31] !== ex || N[32] !== ew || N[33] !== ev || N[34] !== eM || N[35] !== $ || N[36] !== q ? (d = ed.length > 0 && !Q && null == q ? (0, r.jsx)("div", {
                className: "my-3",
                children: (0, r.jsx)(R.a, {
                    ref: eN,
                    conversationId: ey,
                    enableCanvas: !1,
                    imageEditAttribution: {
                        editEntryPoint: "conversation"
                    },
                    enableImageEditor: ex && null == ev && ed.every(U.a),
                    imageAssetResolver: eH,
                    images: ed,
                    onImageEditSubmit: null != B && ex ? (e, t) => (0, U.c)($, {
                        conversationId: B,
                        image: e,
                        request: t
                    }) : void 0,
                    onOpenImage: ew,
                    renderImageFavorite: eM
                })
            }) : null, N[25] = B, N[26] = Q, N[27] = eN, N[28] = ey, N[29] = eH, N[30] = ed, N[31] = ex, N[32] = ew, N[33] = ev, N[34] = eM, N[35] = $, N[36] = q, N[37] = d) : d = N[37], N[38] !== B || N[39] !== en || N[40] !== Z ? (S = en && null != B ? (0, r.jsx)(D.a, {
                conversationId: B,
                turnContext: Z ?? void 0
            }) : null, N[38] = B, N[39] = en, N[40] = Z, N[41] = S) : S = N[41], N[42] !== eN || N[43] !== em || N[44] !== eg ? (I = null == em ? null : (0, r.jsx)(u.Suspense, {
                fallback: null,
                children: (0, r.jsx)(e_, {
                    imageRef: em.imageRef,
                    getThumbnail: e => eN.current?.getThumbnail(em.imageIds[e]) ?? null,
                    request: em.request,
                    onNavigate: em.onNavigate,
                    onClose: () => eg(null)
                })
            }), N[42] = eN, N[43] = em, N[44] = eg, N[45] = I) : I = N[45], N[46] !== T || N[47] !== d || N[48] !== S || N[49] !== I || N[50] !== i || N[51] !== ek || N[52] !== ej || N[53] !== o ? (p = (0, r.jsxs)(r.Fragment, {
                children: [i, ek, ej, o, T, d, S, I]
            }), N[46] = T, N[47] = d, N[48] = S, N[49] = I, N[50] = i, N[51] = ek, N[52] = ej, N[53] = o, N[54] = p) : p = N[54], p
        }

        function eP(e) {
            return null != e
        }

        function eS(e) {
            return e.searchResult?.isProxied
        }

        function eA(e) {
            return e.id
        }

        function eR(e) {
            return null != e.searchResult
        }

        function eI(e) {
            return null == e ? [] : [e]
        }

        function eC(e) {
            return {
                attribution: e.searchResult?.attribution ?? null,
                contentSize: null != e.width && null != e.height ? {
                    width: e.width,
                    height: e.height
                } : void 0,
                destinationUrl: e.searchResult?.destinationUrl ?? null,
                fallbackSrc: e.previewSrc,
                originalSrc: e.searchResult?.originalSrc,
                isProxied: e.searchResult?.isProxied,
                src: e.src,
                title: e.searchResult?.title ?? null
            }
        }

        function ep(e) {
            return null != e
        }

        function eO(e) {
            return "image_group" === e.type && "full_width" === e.layout
        }

        function ef(e) {
            let t, n, r, _, o, c, T, E, d, P, S, A, R = (0, a.c)(45),
                {
                    contentReferenceIndex: I,
                    image: C,
                    logged: O,
                    turnContext: m
                } = e,
                g = (0, s.y)(f.a),
                N = m?.contentReferences[I],
                h = m?.contentReferenceMessageIds?.[I] ?? m?.messageId,
                v = (0, s.x)(y.j, m?.conversationId ?? null),
                G = m?.trackShownImpressions !== !1 && m?.productReference == null && null != C.searchResult && (N?.type === "image_group" || N?.type === "image_v2");
            if (R[0] !== C.sourceImageIndex || R[1] !== N) {
                let e = null != C.sourceImageIndex && Array.isArray(N?.images) ? (0, er.d)(N.images[C.sourceImageIndex]) : null;
                t = (0, er.d)(e?.image_result) ?? e, R[0] = C.sourceImageIndex, R[1] = N, R[2] = t
            } else t = R[2];
            let b = t,
                H = C.searchResult?.isProxied ? void 0 : C.previewSrc ?? void 0;
            R[3] !== H ? (n = em(H), R[3] = H, R[4] = n) : n = R[4];
            let x = G && null != H;
            R[5] !== n || R[6] !== x ? (r = {
                ...n,
                staleTime: 1 / 0,
                enabled: x
            }, R[5] = n, R[6] = x, R[7] = r) : r = R[7];
            let {
                isSuccess: U,
                isError: W
            } = (0, i.a)(r);
            if (R[8] !== C.src || R[9] !== b?.thumbnail_render_mode || R[10] !== W || R[11] !== H) {
                let e, t = C.src.replace(/^http:\/\//, "https://");
                R[15] !== b?.thumbnail_render_mode || R[16] !== W || R[17] !== H ? (e = b?.thumbnail_render_mode !== "thumbnail_only" && (W || null != H && URL.parse(H)?.origin === "https://images.openai.com"), R[15] = b?.thumbnail_render_mode, R[16] = W, R[17] = H, R[18] = e) : e = R[18], _ = e, c = i.a, o = em(_ ? t : void 0), R[8] = C.src, R[9] = b?.thumbnail_render_mode, R[10] = W, R[11] = H, R[12] = _, R[13] = o, R[14] = c
            } else _ = R[12], o = R[13], c = R[14];
            let D = G && _;
            R[19] !== o || R[20] !== D ? (T = {
                ...o,
                staleTime: 1 / 0,
                enabled: D
            }, R[19] = o, R[20] = D, R[21] = T) : T = R[21];
            let {
                isSuccess: B
            } = c(T), L = U || B, w = "string" == typeof N?.type ? N.type : void 0, M = v ?? void 0;
            if (R[22] !== C.searchResult?.isProxied || R[23] !== b?.title || R[24] !== h || R[25] !== N || R[26] !== M || R[27] !== w || R[28] !== H) {
                let e, t;
                E = {
                    eventType: "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_SHOWN",
                    contentReferenceType: w,
                    messageId: h,
                    conversationId: M
                }, N?.type === "image_v2" ? e = C.searchResult?.isProxied ? "deepResearch" : "legacyCarousel" : N?.layout !== "full_width" && (e = "imageGroup", "carousel" == (t = N?.layout === "bento" ? "bento" : "carousel") && Array.isArray(N?.images) && 1 === N.images.length && (t = "single")), d = JSON.stringify([E, String(H), String(b?.title), e, t]), R[22] = C.searchResult?.isProxied, R[23] = b?.title, R[24] = h, R[25] = N, R[26] = M, R[27] = w, R[28] = H, R[29] = E, R[30] = d
            } else E = R[29], d = R[30];
            let k = d;
            R[31] !== k || R[32] !== O || R[33] !== h || R[34] !== E || R[35] !== g || R[36] !== G ? (P = () => {
                !G || null == h || h.startsWith("WEB:") || O.current.has(k) || (O.current.add(k), (0, p.a)(g, l.d, E))
            }, R[31] = k, R[32] = O, R[33] = h, R[34] = E, R[35] = g, R[36] = G, R[37] = P) : P = R[37];
            let j = (0, u.useEffectEvent)(P);
            return R[38] !== L || R[39] !== j ? (S = () => {
                L && j()
            }, R[38] = L, R[39] = j, R[40] = S) : S = R[40], R[41] !== k || R[42] !== L || R[43] !== G ? (A = [L, k, G], R[41] = k, R[42] = L, R[43] = G, R[44] = A) : A = R[44], (0, u.useEffect)(S, A), null
        }

        function em(e) {
            return {
                queryKey: ["chatgpt-search-image-download", e],
                queryFn: null == e ? o.u : () => new Promise((t, n) => {
                    let r = new Image;
                    r.onload = () => t(!0), r.onerror = () => n(Error("Search image download failed")), r.referrerPolicy = "no-referrer", r.src = e
                }),
                retry: 3
            }
        }
    }),
    M3Fp: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            l = n("on57"),
            _ = n("zd8w"),
            i = n("tt6P"),
            o = n("zSQm"),
            s = n("WAdu"),
            c = n("KDax"),
            T = n("TUMj");

        function u(e) {
            let t, n, _, i = (0, a.c)(9),
                {
                    ref: s,
                    children: T,
                    className: u,
                    href: E
                } = e;
            i[0] !== E ? (t = null == E ? null : (0, o.a)(E), i[0] = E, i[1] = t) : t = i[1];
            let d = t;
            return null == d ? null : (i[2] !== u ? (n = (0, l.b)("cursor-interaction", u), i[2] = u, i[3] = n) : n = i[3], i[4] !== T || i[5] !== s || i[6] !== d || i[7] !== n ? (_ = (0, r.jsx)(c.a, {
                ref: s,
                className: n,
                href: d,
                initiator: "markdown_link_click",
                children: T
            }), i[4] = T, i[5] = s, i[6] = d, i[7] = n, i[8] = _) : _ = i[8], _)
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, c, E, d, P = (0, a.c)(19),
                    {
                        imageAspectClassName: S,
                        subtitle: A,
                        thumbnailUrl: R,
                        title: I,
                        url: C
                    } = e,
                    p = void 0 === S ? "aspect-[4/3]" : S,
                    O = (0, T.d)(),
                    f = (0, _.useContext)(s.a),
                    m = O?.shouldBlockExternalEgress === !0 || "restricted" === f;
                P[0] !== p || P[1] !== m || P[2] !== R || P[3] !== I || P[4] !== C ? (t = null == R ? (0, r.jsx)("div", {
                    className: (0, l.b)(p, "flex w-20 shrink-0 items-center justify-center rounded bg-surface-secondary/85"),
                    children: null == C ? null : (0, r.jsx)(i.a, {
                        className: "icon-md",
                        href: C,
                        loadRemote: !m
                    })
                }) : m ? (0, r.jsx)("div", {
                    className: (0, l.b)(p, "w-20 shrink-0 rounded bg-surface-secondary/85")
                }) : (0, r.jsx)("img", {
                    alt: I,
                    className: (0, l.b)(p, "m-0 w-20 shrink-0 rounded object-cover"),
                    src: R
                }), P[0] = p, P[1] = m, P[2] = R, P[3] = I, P[4] = C, P[5] = t) : t = P[5], P[6] !== I ? (n = (0, r.jsx)("div", {
                    className: "line-clamp-2 font-medium text-default",
                    children: I
                }), P[6] = I, P[7] = n) : n = P[7], P[8] !== A ? (o = null == A ? null : (0, r.jsx)("div", {
                    className: "mt-1 line-clamp-2 text-secondary",
                    children: A
                }), P[8] = A, P[9] = o) : o = P[9], P[10] !== n || P[11] !== o ? (c = (0, r.jsxs)("div", {
                    className: "min-w-0",
                    children: [n, o]
                }), P[10] = n, P[11] = o, P[12] = c) : c = P[12], P[13] !== t || P[14] !== c ? (E = (0, r.jsxs)("div", {
                    className: "flex min-w-0 gap-3 rounded-md border border-subtle bg-surface-secondary p-2",
                    children: [t, c]
                }), P[13] = t, P[14] = c, P[15] = E) : E = P[15];
                let g = E;
                return P[16] !== g || P[17] !== C ? (d = null == C ? g : (0, r.jsx)(u, {
                    className: "block no-underline",
                    href: C,
                    children: g
                }), P[16] = g, P[17] = C, P[18] = d) : d = P[18], d
            },
            b: u
        })
    }),
    uH1P: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            l = n("tBe6"),
            _ = n("iTtm"),
            i = n("rKAs"),
            o = n("Wf1j"),
            s = n("oyxz"),
            c = n("NkEl"),
            T = n("VmSA"),
            u = n("ygO2"),
            E = n("tt6P"),
            d = n("yGJW"),
            P = n("tSEg"),
            S = n("BWE9"),
            A = n("dQRk"),
            R = n("TUMj"),
            I = n("mYbj"),
            C = n("xZEe"),
            p = n("Nv0Q"),
            O = n("j8Yf"),
            f = n("M3Fp"),
            m = n("DIH2");

        function g(e, t) {
            return (0, r.jsx)(f.a, {
                subtitle: e.subtitle,
                thumbnailUrl: e.thumbnailUrl,
                title: e.title,
                url: e.url
            }, `${e.url??e.title}-${String(t)}`)
        }

        function N(e) {
            return (0, T.a)({
                url: e.url ?? ""
            })?.url
        }

        function h(e) {
            let t, n, l, _, i, o, s, c, T = (0, a.c)(19),
                {
                    reference: u
                } = e;
            if (T[0] !== u) {
                o = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, a = H(u).filter(G);
                    if (0 === a.length) {
                        o = null;
                        break e
                    }
                    T[7] !== u.title ? (e = (0, m.b)(u.title), T[7] = u.title, T[8] = e) : e = T[8];
                    let s = e;l = "not-prose mt-6 mb-1",
                    _ = "chatgpt-nav-list",
                    T[9] !== s ? (i = null == s ? null : (0, r.jsx)("div", {
                        className: "-mb-1 pb-3 font-semibold text-default",
                        children: s
                    }), T[9] = s, T[10] = i) : i = T[10],
                    t = "hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-2",
                    n = a.map(v)
                }
                T[0] = u, T[1] = t, T[2] = n, T[3] = l, T[4] = _, T[5] = i, T[6] = o
            } else t = T[1], n = T[2], l = T[3], _ = T[4], i = T[5], o = T[6];
            return o !== Symbol.for("react.early_return_sentinel") ? o : (T[11] !== t || T[12] !== n ? (s = (0, r.jsx)("div", {
                className: t,
                children: n
            }), T[11] = t, T[12] = n, T[13] = s) : s = T[13], T[14] !== l || T[15] !== _ || T[16] !== i || T[17] !== s ? (c = (0, r.jsxs)("div", {
                className: l,
                "data-testid": _,
                children: [i, s]
            }), T[14] = l, T[15] = _, T[16] = i, T[17] = s, T[18] = c) : c = T[18], c)
        }

        function v(e, t) {
            return (0, r.jsx)(b, {
                item: e
            }, `${e.url}-${String(t)}`)
        }

        function G(e) {
            return null != e.url
        }

        function b(e) {
            let t, n, l, _, i, s, T, u, d, P, S, A, I, C = (0, a.c)(45),
                {
                    item: p
                } = e,
                O = (0, o.a)(),
                m = (0, R.d)(),
                g = m?.shouldBlockExternalEgress === !0;
            C[0] !== O || C[1] !== p.dateLabel || C[2] !== p.pubDate ? (t = p.dateLabel ?? function(e, t) {
                if (null == t) return null;
                let n = new Date(1e3 * t),
                    r = Math.max(Math.floor((Date.now() - n.getTime()) / 864e5), 0);
                if (r > 30) return e.formatDate(n, {
                    dateStyle: "medium"
                });
                let a = e.formatRelativeTime(-r, "day", {
                    numeric: "auto"
                });
                return e.locale.startsWith("en") ? `${a.charAt(0).toUpperCase()}${a.slice(1)}` : a
            }(O, p.pubDate), C[0] = O, C[1] = p.dateLabel, C[2] = p.pubDate, C[3] = t) : t = C[3];
            let N = t;
            C[4] !== N || C[5] !== p.attribution || C[6] !== p.subtitle || C[7] !== p.title || C[8] !== p.url ? (n = e => {
                if (null != e) return (0, c.b)(e, {
                    text: [p.title, p.url, p.attribution, p.subtitle, N].join(" "),
                    highlight: "block"
                })
            }, C[4] = N, C[5] = p.attribution, C[6] = p.subtitle, C[7] = p.title, C[8] = p.url, C[9] = n) : n = C[9];
            let h = !g;
            C[10] !== p.url || C[11] !== h ? (l = (0, r.jsx)("div", {
                className: "absolute inset-0 flex items-center justify-center blur-3xl",
                children: (0, r.jsx)(E.a, {
                    className: "size-64 opacity-20 dark:opacity-10",
                    href: p.url,
                    loadRemote: h
                })
            }), C[10] = p.url, C[11] = h, C[12] = l) : l = C[12];
            let v = !g;
            C[13] !== p.url || C[14] !== v ? (_ = (0, r.jsx)("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: (0, r.jsx)(E.a, {
                    className: "size-10 overflow-hidden rounded-[22%]",
                    href: p.url,
                    loadRemote: v
                })
            }), C[13] = p.url, C[14] = v, C[15] = _) : _ = C[15], C[16] !== p.thumbnailUrl || C[17] !== p.title || C[18] !== g ? (i = null == p.thumbnailUrl || g ? null : (0, r.jsx)("img", {
                alt: p.title,
                className: "absolute inset-0 m-0 h-full w-full object-cover",
                decoding: "async",
                onError: y,
                referrerPolicy: "no-referrer",
                src: p.thumbnailUrl
            }), C[16] = p.thumbnailUrl, C[17] = p.title, C[18] = g, C[19] = i) : i = C[19], C[20] !== l || C[21] !== _ || C[22] !== i ? (s = (0, r.jsxs)("div", {
                className: "relative flex h-36 w-full shrink-0 items-center justify-center overflow-hidden bg-surface-secondary/92",
                children: [l, _, i]
            }), C[20] = l, C[21] = _, C[22] = i, C[23] = s) : s = C[23];
            let G = !g;
            return C[24] !== p.url || C[25] !== G ? (T = (0, r.jsx)(E.a, {
                className: "icon-xs overflow-hidden rounded-[22%]",
                href: p.url,
                loadRemote: G
            }), C[24] = p.url, C[25] = G, C[26] = T) : T = C[26], C[27] !== p.attribution ? (u = (0, r.jsx)("span", {
                className: "truncate",
                children: p.attribution
            }), C[27] = p.attribution, C[28] = u) : u = C[28], C[29] !== T || C[30] !== u ? (d = (0, r.jsxs)("div", {
                className: "flex items-center gap-1.5 text-xs text-default",
                children: [T, u]
            }), C[29] = T, C[30] = u, C[31] = d) : d = C[31], C[32] !== p.title ? (P = (0, r.jsx)("div", {
                className: "line-clamp-5 text-sm font-medium text-default decoration-text-info",
                children: p.title
            }), C[32] = p.title, C[33] = P) : P = C[33], C[34] !== N ? (S = null == N ? null : (0, r.jsx)("div", {
                className: "text-xs text-secondary",
                children: N
            }), C[34] = N, C[35] = S) : S = C[35], C[36] !== d || C[37] !== P || C[38] !== S ? (A = (0, r.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2 overflow-hidden px-4 text-ellipsis",
                children: [d, P, S]
            }), C[36] = d, C[37] = P, C[38] = S, C[39] = A) : A = C[39], C[40] !== p.url || C[41] !== A || C[42] !== n || C[43] !== s ? (I = (0, r.jsxs)(f.b, {
                ref: n,
                className: "flex shrink-0 basis-[calc((100%_-_1rem)/2)] snap-start flex-col gap-4 overflow-hidden rounded-xl border border-strong bg-surface pb-6 text-default no-underline shadow-none xs:basis-[calc((100%_-_2rem)/3)]",
                href: p.url,
                children: [s, A]
            }), C[40] = p.url, C[41] = A, C[42] = n, C[43] = s, C[44] = I) : I = C[44], I
        }

        function y(e) {
            e.currentTarget.hidden = !0
        }

        function H(e) {
            let t = Array.isArray(e.items) ? e.items : [],
                n = Array.isArray(e.domains) ? e.domains : [];
            return [...t, ...n].flatMap(e => {
                let t = (0, m.d)(e),
                    n = (0, m.b)(t?.title),
                    r = (0, m.b)(t?.url);
                return null == n ? [] : [{
                    attribution: (0, m.b)(t?.attribution) ?? (0, m.a)(r) ?? r,
                    dateLabel: (0, m.b)(t?.date_label),
                    pubDate: (0, m.c)(t?.pub_date),
                    subtitle: (0, m.b)(t?.subtitle) ?? (0, m.b)(t?.snippet) ?? (0, m.b)(t?.domain) ?? (0, m.a)(r),
                    thumbnailUrl: (0, m.b)(t?.thumbnail_url),
                    title: n,
                    url: r
                }]
            })
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, T, E, f, v, G, b, y, x, U, W = (0, a.c)(37),
                    {
                        reference: D
                    } = e,
                    B = (0, _.y)(P.a),
                    L = (0, R.d)(),
                    w = (0, o.a)();
                if ("nav_list" === D.type) {
                    let e;
                    return W[0] !== D ? (e = (0, r.jsx)(h, {
                        reference: D
                    }), W[0] = D, W[1] = e) : e = W[1], e
                }
                W[2] !== D ? (t = (0, i.o)(D), W[2] = D, W[3] = t) : t = W[3];
                let M = t;
                if (W[4] !== L || W[5] !== D || W[6] !== M) {
                    b = Symbol.for("react.early_return_sentinel");
                    e: {
                        var k;
                        let e, t, a;W[15] !== D.type ? (e = e => "navigation" !== D.type || null != e.url, W[15] = D.type, W[16] = e) : e = W[16];
                        let l = H(D).filter(e),
                            _ = l.length > 0 ? l : (k = D, null == (a = (0, m.b)(k.page_title) ?? (0, m.b)(k.display_title)) ? [] : [{
                                subtitle: (0, m.b)(k.snippet) ?? (0, m.b)(k.display_title),
                                thumbnailUrl: null,
                                title: a,
                                url: (0, m.b)(k.url)
                            }]);W[17] !== L || W[18] !== D ? (t = L?.contentReferenceMessageIds?.[L.contentReferences.indexOf(D)] ?? L?.messageId, W[17] = L, W[18] = D, W[19] = t) : t = W[19],
                        T = t,
                        E = "navigation" === D.type && null != T ? (0, I.c)(D, T) : [];
                        let i = new Set(l.slice(0, 3).map(N));
                        if (c = "navigation" === D.type && Array.isArray(D.domains) && (l.length > 3 || E.some(e => "web" === e.kind && !i.has(e.url))) && null != L && null != T, 0 === _.length && !c) {
                            let e;
                            W[20] !== D ? (e = (0, r.jsx)(O.c, {
                                reference: D
                            }), W[20] = D, W[21] = e) : e = W[21], b = e;
                            break e
                        }
                        n = p.a,
                        G = M,
                        f = "grid gap-2 sm:grid-cols-2",
                        v = _.slice(0, c ? 3 : 6).map(g)
                    }
                    W[4] = L, W[5] = D, W[6] = M, W[7] = n, W[8] = c, W[9] = T, W[10] = E, W[11] = f, W[12] = v, W[13] = G, W[14] = b
                } else n = W[7], c = W[8], T = W[9], E = W[10], f = W[11], v = W[12], G = W[13], b = W[14];
                return b !== Symbol.for("react.early_return_sentinel") ? b : (W[22] !== f || W[23] !== v ? (y = (0, r.jsx)("div", {
                    className: f,
                    children: v
                }), W[22] = f, W[23] = v, W[24] = y) : y = W[24], W[25] !== L || W[26] !== c || W[27] !== w || W[28] !== T || W[29] !== E || W[30] !== B ? (x = c ? (0, r.jsx)(u.a, {
                    color: "secondary",
                    size: "compact",
                    onClick: () => {
                        T && !T.startsWith("WEB:") && (0, d.a)(B, l.d, {
                            eventType: "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_CLICKED",
                            contentReferenceType: "navigation",
                            conversationId: B.get(A.j, L.conversationId) ?? void 0,
                            messageId: T
                        }), (0, C.a)(B, {
                            conversationId: L.conversationId,
                            shouldBlockExternalEgress: L.shouldBlockExternalEgress,
                            sources: E
                        }, w.formatMessage(S.d))
                    },
                    children: (0, r.jsx)(s.a, {
                        id: "chatgpt.contentReferences.navigation.moreLinks",
                        defaultMessage: "More links",
                        description: "Button below navigation website cards in a ChatGPT answer that opens all of that reference's links in the Sources panel"
                    })
                }) : null, W[25] = L, W[26] = c, W[27] = w, W[28] = T, W[29] = E, W[30] = B, W[31] = x) : x = W[31], W[32] !== n || W[33] !== G || W[34] !== y || W[35] !== x ? (U = (0, r.jsxs)(n, {
                    title: G,
                    children: [y, x]
                }), W[32] = n, W[33] = G, W[34] = y, W[35] = x, W[36] = U) : U = W[36], U)
            }
        })
    }),
    GO3v: (function(e, t, n) {
        var r = n("ozm1"),
            a = n("ASxG"),
            l = n("pd1I");
        let _ = a.object({
                type: a.literal("followup_a"),
                onboarding_renderer: l.a.shape.renderer,
                onboarding_level: l.a.shape.level,
                onboarding_use_case: l.a.shape.use_case,
                onboarding_action_id: l.a.shape.action_id,
                source: l.a.shape.source,
                start_idx: a.number().optional().catch(void 0)
            }),
            i = a.object({
                type: a.literal("followup_a"),
                source: a.literal("conversational_onboarding_use_case_l2_suggestion"),
                onboarding_attribution: a.object({
                    actions: a.tuple([a.object({
                        level: a.literal("l3"),
                        action_id: a.string().min(1).max(256),
                        originating_action_id: a.string().min(1).max(256).nullish()
                    }).strict()])
                }).strict(),
                onboarding_use_case: l.a.shape.use_case.optional().catch(void 0),
                start_idx: a.number().optional().catch(void 0)
            });
        n.d(t, {}, {
            a: function(e) {
                let t = i.safeParse(e);
                if (!t.success) return;
                let n = t.data.onboarding_attribution.actions[0];
                return {
                    type: "followup_a",
                    renderer: "inline_followup_a",
                    level: n.level,
                    useCase: t.data.onboarding_use_case,
                    actionId: n.action_id,
                    originatingActionId: n.originating_action_id ?? void 0,
                    source: t.data.source,
                    contentReferenceStartIndex: (0, r.b)(t.data.start_idx)?.toString()
                }
            },
            b: function(e) {
                let t = _.safeParse(e);
                if (t.success) return {
                    renderer: t.data.onboarding_renderer,
                    level: t.data.onboarding_level,
                    useCase: t.data.onboarding_use_case,
                    actionId: t.data.onboarding_action_id,
                    source: t.data.source,
                    contentReferenceStartIndex: (0, r.b)(t.data.start_idx)?.toString()
                }
            }
        })
    }),
    boWb: (function(e, t, n) {
        var r = n("QosV"),
            a = n("tBe6"),
            l = n("fshA"),
            _ = n("iTtm"),
            i = n("zd8w"),
            o = n("yGJW"),
            s = n("OWtl"),
            c = n("dQRk"),
            T = n("DW1N"),
            u = n("GO3v"),
            E = n("DIH2");

        function d(e) {
            let t = (0, E.d)(e)?.url;
            return "string" == typeof t && t ? [t] : []
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, P, S, A, R, I, C, p, O = (0, r.c)(48),
                    {
                        contentReferenceIndex: f,
                        reference: m,
                        turnContext: g
                    } = e,
                    N = (0, _.y)(s.a);
                O[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Set, O[0] = t) : t = O[0];
                let h = (0, i.useRef)(t);
                O[1] !== m || O[2] !== g ? (n = function(e, t) {
                    switch (e.type) {
                        case "calculator":
                        case "container":
                        case "python":
                        case "title_citation":
                        case "location_search":
                        case "time":
                        case "stock":
                        case "forecast":
                        case "map":
                        case "businesses_map":
                        case "navigation":
                        case "dil":
                            return e.type;
                        case "nav_list":
                            return Array.isArray(e.items) && e.items.length > 0 ? "nav_list" : null;
                        case "sports_schedule":
                            return Array.isArray(e.games) && e.games.length > 0 ? "sports" : null;
                        case "sports_standings":
                            return Array.isArray(e.conferences) && e.conferences.length > 0 ? "sports" : null;
                        case "video":
                            return t?.shouldBlockExternalEgress ? null : "video";
                        case "followup_a":
                        case "followup_memory_a": {
                            let t = e.prompt_text ?? e.matched_text;
                            return "string" == typeof t && t.trim() ? e.type : null
                        }
                        case "image_group": {
                            let t = "string" == typeof e.matched_text && /^\ue200image_group\ue202[\s\S]*\ue201$/.test(e.matched_text),
                                n = Array.isArray(e.images) && e.images.some(e => (0, E.d)(e)?.image_result != null);
                            return t || n ? "image_group" : null
                        }
                        default:
                            return null
                    }
                }(m, g), O[1] = m, O[2] = g, O[3] = n) : n = O[3];
                let v = n,
                    G = g?.contentReferenceMessageIds?.[f] ?? g?.messageId,
                    b = g?.conversationId,
                    y = g?.trackShownImpressions !== !1;
                O[4] !== m.domains || O[5] !== m.type ? (P = "navigation" === m.type && Array.isArray(m.domains) ? m.domains.flatMap(d).join(",") : void 0, O[4] = m.domains, O[5] = m.type, O[6] = P) : P = O[6];
                let H = P,
                    x = "dil" === m.type && "string" == typeof m.name ? m.name : void 0,
                    U = ("followup_a" === m.type || "followup_memory_a" === m.type) && "string" == typeof m.source ? m.source : void 0;
                if (O[7] !== m.followup_kind || O[8] !== m.followup_position || O[9] !== m.followup_promotion_id || O[10] !== m.presentation_mode || O[11] !== m.receiver_followup_capability_scope || O[12] !== m.receiver_followup_intent || O[13] !== m.receiver_followup_position || O[14] !== m.receiver_followup_prompt_version || O[15] !== m.receiver_followup_share_surface || O[16] !== m.receiver_followup_treatment || O[17] !== m.start_idx || O[18] !== m.type) {
                    let e = "followup_a" === m.type && m.receiver_followup_intent && null != m.receiver_followup_position && m.receiver_followup_treatment && m.receiver_followup_capability_scope && m.receiver_followup_prompt_version ? [m.receiver_followup_intent, m.receiver_followup_position, m.receiver_followup_treatment, m.receiver_followup_capability_scope, m.receiver_followup_prompt_version, m.receiver_followup_share_surface ?? void 0] : void 0;
                    S = "followup_a" === m.type || "followup_memory_a" === m.type ? JSON.stringify([m.start_idx, m.presentation_mode ?? void 0, m.followup_kind ?? void 0, m.followup_position ?? void 0, m.followup_promotion_id ?? void 0, e]) : void 0, O[7] = m.followup_kind, O[8] = m.followup_position, O[9] = m.followup_promotion_id, O[10] = m.presentation_mode, O[11] = m.receiver_followup_capability_scope, O[12] = m.receiver_followup_intent, O[13] = m.receiver_followup_position, O[14] = m.receiver_followup_prompt_version, O[15] = m.receiver_followup_share_surface, O[16] = m.receiver_followup_treatment, O[17] = m.start_idx, O[18] = m.type, O[19] = S
                } else S = O[19];
                let W = S;
                O[20] !== m ? (R = JSON.stringify(A = (0, u.b)(m)), O[20] = m, O[21] = A, O[22] = R) : (A = O[21], R = O[22]);
                let D = R;
                O[23] !== v || O[24] !== b || O[25] !== W || O[26] !== U || O[27] !== G || O[28] !== H || O[29] !== A || O[30] !== m || O[31] !== N || O[32] !== x ? (I = () => {
                    if (null == v || null == G || G.startsWith("WEB:") || null == b) return;
                    let e = {
                            legacyStatsigEventName: "search_content_reference_shown",
                            eventType: "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_SHOWN",
                            contentReferenceType: v,
                            messageId: G,
                            conversationId: N.get(c.j, b) ?? void 0,
                            widgetName: x,
                            followupSource: U
                        },
                        t = JSON.stringify([e, m.type, H, W]);
                    if (h.current.has(t) || (h.current.add(t), null != W && "conversation_followup_suggestions_v1" === U && (0, T.b)(N, {
                            data: {
                                ...m,
                                interaction_type: "shown",
                                followup_source: U,
                                followup_presentation_mode: m.presentation_mode
                            },
                            surface: "content_reference",
                            conversationId: b,
                            messageId: G
                        }), (0, o.a)(N, a.d, e)), null != A) {
                        let e = JSON.stringify(["onboarding", b, G, A]);
                        if (!h.current.has(e)) {
                            h.current.add(e);
                            try {
                                (0, o.a)(N, l.b, A)
                            } catch {}
                        }
                    }
                }, O[23] = v, O[24] = b, O[25] = W, O[26] = U, O[27] = G, O[28] = H, O[29] = A, O[30] = m, O[31] = N, O[32] = x, O[33] = I) : I = O[33];
                let B = (0, i.useEffectEvent)(I);
                return O[34] !== B || O[35] !== y ? (C = () => {
                    y && B()
                }, O[34] = B, O[35] = y, O[36] = C) : C = O[36], O[37] !== v || O[38] !== b || O[39] !== W || O[40] !== U || O[41] !== G || O[42] !== H || O[43] !== D || O[44] !== m.type || O[45] !== y || O[46] !== x ? (p = [v, G, b, y, x, U, W, D, m.type, H], O[37] = v, O[38] = b, O[39] = W, O[40] = U, O[41] = G, O[42] = H, O[43] = D, O[44] = m.type, O[45] = y, O[46] = x, O[47] = p) : p = O[47], (0, i.useEffect)(C, p), null
            }
        })
    }),
    Cvo1: (function(e, t, n) {
        var r = n("VnmP"),
            a = n("cC4N"),
            l = n("ndwI"),
            _ = n("L0hB"),
            i = n("dVri"),
            o = n("avne");
        n.d(t, {}, {
            a: function(e) {
                if (!e.includes(":codex-resource")) return e;
                let t = [...(0, a.a)(e, {
                        extensions: [(0, i.a)({
                            singleTilde: !1
                        }), (0, _.a)()],
                        mdastExtensions: [(0, l.a)(), (0, r.a)()]
                    }).children],
                    n = [],
                    s = 0;
                for (; t.length > 0;) {
                    let r = t.shift(),
                        a = r?.position?.start.offset;
                    if (r?.type === "textDirective" && "codex-resource" === r.name && null != a && a >= s) {
                        let t = (0, o.b)(e, a);
                        null != t && (n.push(e.slice(s, a)), s = t.endIndex)
                    } else null != r && "children" in r && t.unshift(...r.children)
                }
                return n.push(e.slice(s)), n.join("")
            }
        })
    }),
    ADj7: (function(e, t, n) {
        var r = n("ozm1"),
            a = n("tBe6"),
            l = n("EA6X"),
            _ = n("JKSp"),
            i = n("AuIy"),
            o = n("Wc42"),
            s = n("ASxG"),
            c = n("yGJW"),
            T = n("dQRk"),
            u = n("xof2");
        let E = s.object({
                type: s.string().optional().catch(void 0),
                start_idx: s.number().int().nonnegative().optional().catch(void 0)
            }),
            d = s.object({
                source: s.string().optional().catch(void 0),
                event_name: s.string().optional().catch(void 0),
                event_data: s.record(s.string(), s.unknown()).optional().catch(void 0)
            }),
            P = s.strictObject({
                widget_type: s.string().trim().min(1).optional(),
                widgetType: s.string().trim().min(1).optional(),
                widget_name: s.string().trim().min(1).optional(),
                widgetName: s.string().trim().min(1).optional(),
                content_reference_start_index: s.int32().optional(),
                contentReferenceStartIndex: s.int32().optional(),
                message_id: s.string().trim().min(1).optional(),
                messageId: s.string().trim().min(1).optional(),
                entity_id: s.string().trim().min(1).optional(),
                entityId: s.string().trim().min(1).optional(),
                entity_category: s.string().trim().min(1).optional(),
                entityCategory: s.string().trim().min(1).optional()
            }).refine(e => [
                ["widget_type", "widgetType"],
                ["widget_name", "widgetName"],
                ["content_reference_start_index", "contentReferenceStartIndex"],
                ["message_id", "messageId"],
                ["entity_id", "entityId"],
                ["entity_category", "entityCategory"]
            ].every(t => {
                let [n, r] = t;
                return null == e[n] || null == e[r] || e[n] === e[r]
            })),
            S = s.strictObject({
                image_index: s.int32().nonnegative(),
                content_reference_type: s.string().trim().min(1).optional(),
                contentReferenceType: s.string().trim().min(1).optional(),
                image_affordance: s.string().trim().min(1).optional(),
                imageAffordance: s.string().trim().min(1).optional(),
                surface_location: s.string().trim().min(1).optional(),
                surfaceLocation: s.string().trim().min(1).optional(),
                parent_context: P.optional(),
                parentContext: P.optional()
            }).refine(e => (null == e.parent_context || null == e.parentContext) && [
                ["content_reference_type", "contentReferenceType"],
                ["image_affordance", "imageAffordance"],
                ["surface_location", "surfaceLocation"]
            ].every(t => {
                let [n, r] = t;
                return null == e[n] || null == e[r] || e[n] === e[r]
            }));

        function A(e) {
            if (null != e) try {
                let {
                    protocol: t
                } = new URL(e);
                return "http:" === t || "https:" === t ? e : void 0
            } catch {
                return
            }
        }
        n.d(t, {}, {
            a: function(e, t) {
                let {
                    turnContext: n,
                    contentReferenceIndex: P,
                    image: R,
                    imageIndex: I,
                    dilPayload: C,
                    sourceMessageId: p,
                    widgetName: O,
                    imageUse: f,
                    galleryArrow: m,
                    surfaceLocation: g,
                    dilV2: N,
                    isGenui: h,
                    dilVersion: v
                } = t, G = !1;
                if (null == n) return !1;
                try {
                    let t = p ?? N?.sourceMessageId ?? (null == P ? void 0 : n.contentReferenceMessageIds?.[P]) ?? n.messageId,
                        b = e.get(T.j, n.conversationId) ?? void 0,
                        y = E.parse(null == P ? {} : n.contentReferences[P] ?? {}),
                        H = N?.contentReferenceStartIndex ?? y.start_idx,
                        x = null == C ? void 0 : d.parse(C),
                        U = null == N ? {
                            ...x?.event_data
                        } : {
                            content_reference_type: x?.source === "image_group" || x?.event_data?.content_reference_type === "image_group" || x?.event_data?.contentReferenceType === "image_group" ? "image_group" : "dil",
                            image_affordance: "image_group_tile",
                            parent_context: {}
                        },
                        W = x?.event_name?.toLowerCase(),
                        D = "chatgpt_image_action" === W;
                    if (D) {
                        for (let e of ["url", "content_url", "contentUrl", "original_content_url", "originalContentUrl"]) delete U[e];
                        U.image_index = I
                    }
                    let B = e => "string" == typeof U[e] && U[e].trim() || void 0,
                        L = null == x ? y.type : B("content_reference_type") ?? B("contentReferenceType") ?? ("image_group" === x.source ? "image_group" : void 0),
                        w = null == x ? null : e.get(T.L, n.conversationId),
                        M = null == t ? void 0 : w?.[t]?.message,
                        k = (0, i.r)(M?.metadata?.model_dil),
                        j = null != N || (h ?? (null != x && ((0, i.r)(k?.dil)?.type != null || M?.metadata?.model_dil_v2 != null))),
                        F = null != N && null != m,
                        Y = null == x || F || D || (null != N || "image_group" === L) && !["chatgpt_entity_action", "chatgpt_widget_action"].includes(W ?? ""),
                        V = !1;
                    if (Y) {
                        let a = null == x ? n.imageEngagementContext : void 0,
                            _ = a?.parentContext;
                        "image_group" !== L && (_ = "image_v2" === L && null != _ ? {
                            entityCategory: _.entityCategory
                        } : void 0);
                        let c = D ? B("image_affordance") ?? B("imageAffordance") : "image_group_tile",
                            T = s.enum(l.f).safeParse(`CHATGPT_IMAGE_AFFORDANCE_${c?.toUpperCase().replace(/^CHATGPT_IMAGE_AFFORDANCE_/,"")}`),
                            E = s.enum(l.b).safeParse(`CHATGPT_ENGAGEMENT_SURFACE_LOCATION_${(B("surface_location")??B("surfaceLocation"))?.toUpperCase().replace(/^CHATGPT_ENGAGEMENT_SURFACE_LOCATION_/,"")}`);
                        if (D) {
                            let e = S.safeParse(U);
                            V = x?.event_name === "chatgpt_image_action" && e.success && (null == e.data.image_affordance && null == e.data.imageAffordance || T.success) && (null == e.data.surface_location && null == e.data.surfaceLocation || E.success)
                        }
                        let d = null;
                        "2.0" === v ? d = {} : D ? d = (0, i.r)(U.parent_context ?? U.parentContext) : null != x && (d = {});
                        let P = (e, t) => {
                                let n = d?.[e] ?? d?.[t];
                                return "string" == typeof n && n.trim() || void 0
                            },
                            p = d?.content_reference_start_index ?? d?.contentReferenceStartIndex ?? H,
                            f = null == C ? null : (0, i.r)(Array.isArray(C.images) ? C.images[I] : null),
                            h = null == x ? R.destinationUrl : (0, o.a)(f?.url),
                            y = null == x ? R.src : (0, o.a)(f?.content_url),
                            W = T.success ? T.data : l.f.CHATGPT_IMAGE_AFFORDANCE_UNSPECIFIED;
                        "next" === m ? W = l.f.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_NEXT_BUTTON : "previous" === m && (W = l.f.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_PREVIOUS_BUTTON);
                        let w = n.shouldBlockExternalEgress,
                            M = g ?? ("image_group" === L ? a?.surfaceLocation : void 0) ?? l.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE;
                        D && E.success && (M = E.data), F && (M = l.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_FULLSCREEN_IMAGE_GALLERY), (0, u.c)(e, {
                            actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                            surfaceLocation: M,
                            imageAffordance: W,
                            imageIndex: (0, r.b)(I),
                            conversationId: b,
                            messageId: t,
                            assistantMessageId: N?.assistantMessageId ?? (M === l.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR ? a?.parentContext.messageId : void 0) ?? n.messageId ?? t,
                            ...null != N || "2.0" === v ? {
                                turnOrdinal: (0, u.a)(e, n.conversationId, N?.assistantMessageId ?? t)
                            } : {},
                            contentReferenceStartIndex: null == H ? void 0 : (0, r.b)(H),
                            contentReferenceType: D ? B("content_reference_type") ?? B("contentReferenceType") ?? "dil" : L,
                            isGenui: j,
                            parentContext: null == d ? _ : {
                                widgetType: P("widget_type", "widgetType") ?? (j ? "model_written_dil" : void 0),
                                widgetName: N?.widgetName ?? P("widget_name", "widgetName") ?? (j && "2.0" !== v ? void 0 : O ?? void 0),
                                contentReferenceStartIndex: null == p ? void 0 : (0, r.b)(Number(p)),
                                messageId: P("message_id", "messageId") ?? t,
                                entityId: P("entity_id", "entityId"),
                                entityCategory: P("entity_category", "entityCategory")
                            },
                            url: w ? void 0 : A(h),
                            contentUrl: w ? void 0 : A(y),
                            originalContentUrl: w ? void 0 : A(R.originalSrc),
                            tags: []
                        }), G = !0
                    }
                    if (null != m) return G;
                    if (null != x) {
                        if (null != N) return D && (0, c.a)(e, _.a, {
                            eventName: "chatgpt_image_action",
                            eventData: JSON.stringify(U)
                        }), G;
                        if (null == x.event_name || "" === x.event_name.trim()) return G;
                        return V || (0, c.a)(e, _.a, {
                            eventName: x.event_name,
                            eventData: JSON.stringify(U)
                        }), G
                    }
                    if (null == t || t.startsWith("WEB:")) return G;
                    let K = null == f ? R.isProxied : "deepResearch" === f;
                    (0, c.a)(e, a.d, {
                        legacyStatsigEventName: "search_content_reference_clicked",
                        eventType: "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_CLICKED",
                        conversationId: b,
                        messageId: t,
                        contentReferenceType: "image_v2",
                        imageUse: K ? "CHATGPT_CONTENT_REFERENCE_IMAGE_USE_DEEP_RESEARCH" : "CHATGPT_CONTENT_REFERENCE_IMAGE_USE_LEGACY_CAROUSEL"
                    })
                } catch {}
                return G
            }
        })
    }),
    BWE9: (function(e, t, n) {
        var r = n("Qgfj");
        let a = (0, r.e)({
                id: "chatgptConversations.summaryPanel.sources.title",
                defaultMessage: "Sources",
                description: "Title for the sources section in the ChatGPT summary panel"
            }),
            l = (0, r.f)({
                links: {
                    id: "chatgptConversations.sources.category.links",
                    defaultMessage: "Links",
                    description: "Heading and accessible list label for suggested navigation links in the ChatGPT Sources panel"
                },
                more: {
                    id: "chatgptConversations.sources.category.more",
                    defaultMessage: "More",
                    description: "Heading and accessible list label for additional search results that were not cited in the ChatGPT answer, below its cited sources"
                },
                apps: {
                    id: "chatgptConversations.sources.category.apps",
                    defaultMessage: "Apps",
                    description: "Heading and accessible list label for connected app sources in a ChatGPT Sources side panel"
                },
                files: {
                    id: "chatgptConversations.sources.category.files",
                    defaultMessage: "Files",
                    description: "Heading and accessible list label for file sources in a ChatGPT Sources side panel"
                },
                memory: {
                    id: "chatgptConversations.sources.category.memory",
                    defaultMessage: "Memory",
                    description: "Heading and accessible list label for remembered information and past conversations in a ChatGPT Sources side panel"
                },
                skills: {
                    id: "chatgptConversations.sources.category.skills",
                    defaultMessage: "Skills",
                    description: "Heading and accessible list label for skill sources in a ChatGPT Sources side panel"
                },
                web: {
                    id: "chatgptConversations.sources.category.web",
                    defaultMessage: "Web",
                    description: "Heading and accessible list label for cited websites in a ChatGPT Sources side panel"
                }
            }),
            _ = (0, r.f)({
                plugin: {
                    id: "chatgptConversations.sources.skill.attribution.plugin",
                    defaultMessage: "Plugin",
                    description: "Attribution label for a ChatGPT Sources row backed by a plugin skill"
                },
                skill: {
                    id: "chatgptConversations.sources.skill.attribution.skill",
                    defaultMessage: "Skill",
                    description: "Attribution label for a ChatGPT Sources row backed by a skill"
                }
            }),
            i = (0, r.f)({
                userInstructions: {
                    id: "chatgptConversations.sources.memory.attribution.userInstructions",
                    defaultMessage: "Custom instructions",
                    description: "Attribution label for a ChatGPT Sources row backed by the user's account custom instructions"
                },
                userMemory: {
                    id: "chatgptConversations.sources.memory.attribution.userMemory",
                    defaultMessage: "Saved memory",
                    description: "Attribution label for a ChatGPT Sources row backed by a saved account memory"
                },
                generalMemory: {
                    id: "chatgptConversations.sources.memory.attribution.generalMemory",
                    defaultMessage: "Memory",
                    description: "Attribution label for a ChatGPT Sources row backed by general account memory context"
                }
            });
        n.d(t, {}, {
            a: i,
            b: _,
            c: l,
            d: a
        })
    }),
    DW1N: (function(e, t, n) {
        var r = n("ozm1"),
            a = n("HHgp"),
            l = n("ASxG"),
            _ = n("yGJW"),
            i = n("dQRk");
        let o = l.object({
                interaction_type: l.enum(["shown", "clicked"]),
                followup_kind: l.enum(["regular", "capability", "voice"]),
                followup_position: l.number().int().min(1).max(3),
                followup_promotion_id: l.string().optional().catch(void 0),
                followup_source: l.string().optional().catch(void 0),
                followup_presentation_mode: l.enum(["bottom_list", "coherent_paragraph"]).optional().catch(void 0)
            }),
            s = new Set(["create_editable_writing_artifact", "search_web_with_primary_citations", "generate_new_image"]),
            c = {
                regular: "CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_KIND_REGULAR",
                capability: "CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_KIND_CAPABILITY",
                voice: "CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_KIND_VOICE"
            };
        n.d(t, {}, {
            a: "ChatgptConversationFollowupSuggestionInteraction",
            b: function(e, t) {
                let {
                    data: n,
                    surface: l,
                    conversationId: T,
                    messageId: u
                } = t, E = o.safeParse(n);
                if (!E.success) return !1;
                let d = E.data,
                    P = d.followup_promotion_id;
                try {
                    return (0, _.a)(e, a.b, {
                        interactionType: "shown" === d.interaction_type ? "CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_INTERACTION_TYPE_SHOWN" : "CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_INTERACTION_TYPE_CLICKED",
                        suggestionKind: c[d.followup_kind],
                        position: (0, r.b)(d.followup_position),
                        promotionId: "capability" === d.followup_kind && null != P && s.has(P) ? P : void 0,
                        source: d.followup_source,
                        presentationMode: d.followup_presentation_mode,
                        surface: "content_reference" === l ? "CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_SURFACE_CONTENT_REFERENCE" : "CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_SURFACE_ACTION_LIST",
                        conversationId: e.get(i.j, T ?? null) ?? void 0,
                        messageId: u
                    }), !0
                } catch {
                    return !1
                }
            }
        })
    }),
    pd1I: (function(e, t, n) {
        var r = n("ASxG");
        let a = r.object({
            renderer: r.enum(["dil", "followup_a", "inline_followup_a"]),
            level: r.enum(["l1", "l2"]),
            use_case: r.enum(["learn", "look_something_up", "write", "create_an_image", "try_voice", "study", "how_to", "wellness", "get_advice", "personalize", "tasks"]),
            action_id: r.union([r.enum(["l1.create_an_image", "l1.write", "l1.look_something_up", "l1.learn", "l1.get_advice", "l1.wellness", "interactive.create_an_image", "interactive.try_voice", "interactive.write_something", "interactive.look_something_up", "interactive.study", "interactive.how_to", "interactive.personalize", "interactive.tasks", "l2.learn.explain_simply", "l2.learn.study_plan", "l2.learn.quiz", "l2.look_something_up.explain", "l2.look_something_up.current_information", "l2.look_something_up.summarize_source", "l2.write.outline", "l2.write.improve", "l2.write.draft", "l2.create_an_image.ideas", "l2.create_an_image.style", "l2.create_an_image.description", "l2.wellness.healthy_routine", "l2.wellness.manage_stress", "l2.wellness.sleep_habits", "l2.get_advice.weigh_options", "l2.get_advice.think_through", "l2.get_advice.action_plan", "l2.tasks.product_comparison", "l2.tasks.budget_plan", "l2.tasks.job_matches", "l2.tasks.concert_alerts", "l2.tasks.coupon_finder", "l2.tasks.research_updates", "l2.tasks.weekend_long_read", "l2.tasks.follow_a_topic", "l2.tasks.daily_language_lesson", "l2.tasks.daily_brief", "l2.tasks.home_upkeep", "l2.tasks.outfit_ideas", "l2.tasks.weather_check", "l2.tasks.birthday_plans", "l2.tasks.weekend_ideas", "l2.tasks.weekly_meal_plan", "l2.tasks.weekly_workout_plan", "l2.tasks.sale_monitor", "l2.tasks.book_recommendations", "l2.tasks.company_mentions", "l2.tasks.industry_trends", "l2.tasks.competitor_launches", "l2.tasks.watch_recommendations"]), r.string().max(96).regex(/^l2\.tasks\.[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}(?:~[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12})?$/)]),
            source: r.enum(["conversational_onboarding_use_case_pills", "conversational_onboarding_interactive_image", "conversational_onboarding_interactive_voice", "conversational_onboarding_interactive_write", "conversational_onboarding_interactive_lookup", "conversational_onboarding_interactive_study", "conversational_onboarding_interactive_how_to", "conversational_onboarding_interactive_personalize", "conversational_onboarding_interactive_tasks", "conversational_onboarding_task_starter", "conversational_onboarding_use_case_l2", "conversational_onboarding_use_case_l2_web_search"])
        });
        n.d(t, {}, {
            a: a
        })
    }),
    xZEe: (function(e, t, n) {
        var r = n("zd8w"),
            a = n("ZU27"),
            l = n("UIU6"),
            _ = n("Bbed"),
            i = n("JCJj"),
            o = n("Yc0o"),
            s = n("Qxen"),
            c = n("g2p6");
        let T = (0, _.a)(async () => {
            let {
                ChatGptSourcesFloatingPanel: e
            } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(753405), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(828774), n.e(499790), n.e(62441), n.e(242986), n.e(331845), n.e(873856), n.e(341705), n.e(413117), n.e(640853)]).then(n.bind(n, "WZcq"));
            return e
        }, {
            errorFallback: (0, r.createElement)(l.b, {
                resetError: () => window.location.reload(),
                stayOnPage: !0
            })
        });
        n.d(t, {}, {
            a: function(e, t, n) {
                let l = e.get(c.n),
                    _ = e.get(i.d)?.content,
                    u = (0, r.isValidElement)(_) && _.type === T && _.props.sourceAccountId === l;
                if (u && null != t.turn && _.props.turn?.conversationId === t.turn.conversationId && _.props.turn.messageId === t.turn.messageId && _.props.turn.turnId === t.turn.turnId) return void _.props.onClose();
                let E = (0, i.b)(e, {
                    label: n,
                    content: (0, r.createElement)(T, {
                        ...t,
                        sourceAccountId: l,
                        title: n,
                        onClose: () => E()
                    }),
                    onClose: () => {}
                });
                u || (0, s.b)(e, {
                    tabId: o.a.SOURCES
                }, e.get(a.j.tabIds$).length, "manual")
            }
        })
    }),
    fYLJ: (function(e, t, n) {
        let r = (0, n("zd8w").createContext)(null);
        n.d(t, {}, {
            a: r
        })
    }),
    Niy1: (function(e, t, n) {
        var r = n("EA6X"),
            a = n("dQRk"),
            l = n("yGJW"),
            _ = n("Gxik"),
            i = n("hsIu");

        function o(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED";
            try {
                (0, l.a)(e, r.c, {
                    actionType: n,
                    entityId: t.id,
                    entityCategory: `college_plan_${t.kind}`,
                    surfaceLocation: "chat_school_receipt" === t.surface || "chat_school_link" === t.surface ? r.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE : void 0,
                    conversationId: t.conversationId,
                    messageId: t.messageId,
                    parentContext: {
                        entityId: e.query.getData(i.b)?.project_id ?? void 0,
                        entityCategory: "college_plan",
                        widgetType: "college_plan",
                        widgetName: t.surface
                    }
                })
            } catch {}
        }
        n.d(t, {}, {
            a: o,
            b: function(e, t, n) {
                let r = /^\/college-plan\/schools\/([0-9a-f]{32})$/.exec(t)?.[1];
                null == r || n?.isReadOnly || n?.shouldBlockExternalEgress || o(e, {
                    id: r,
                    kind: "school",
                    surface: "chat_school_link",
                    conversationId: e.get(a.j, n?.conversationId ?? null) ?? void 0,
                    messageId: n?.messageId
                })
            },
            c: function(e, t, n, a) {
                try {
                    (0, l.a)(e, r.j, {
                        actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        surfaceLocation: r.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                        widgetType: "college_plan_school",
                        widgetActionTarget: "open_school",
                        conversationId: a,
                        messageId: n,
                        parentContext: {
                            entityId: t,
                            entityCategory: "college_plan_school"
                        }
                    })
                } catch {}
            },
            d: function(e, t, n) {
                return (0, _.e)(e, t, () => {
                    let t = "chat_school_receipt" === n.surface ? n.conversationId : (0, _.a)(e)?.id;
                    return "chat_school_receipt" !== n.surface && null == t ? null : JSON.stringify(["entity", t, n.messageId, n.surface, n.kind, n.id])
                }, () => o(e, n, "CHATGPT_ENGAGEMENT_ACTION_TYPE_VIEWPORT_IMPRESSION"))
            }
        })
    }),
    BGAk: (function(e, t, n) {
        let r = (0, n("zd8w").createContext)(void 0);
        n.d(t, {}, {
            a: r
        })
    }),
    TwL3: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            l = n("rmk3");
        n.d(t, {}, {
            a: function(e) {
                let t, n, _, i = (0, a.c)(10),
                    {
                        children: o,
                        getItems: s,
                        useGifPlaybackMenu: c
                    } = e,
                    T = void 0 !== c && c;
                return i[0] !== o || i[1] !== T ? (t = T ? null : (0, r.jsx)(r.Fragment, {
                    children: o
                }), i[0] = o, i[1] = T, i[2] = t) : t = i[2], i[3] !== o || i[4] !== s || i[5] !== T ? (n = T ? (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(l.a, {
                        getItems: s,
                        children: o
                    })
                }) : null, i[3] = o, i[4] = s, i[5] = T, i[6] = n) : n = i[6], i[7] !== t || i[8] !== n ? (_ = (0, r.jsxs)(r.Fragment, {
                    children: [t, n]
                }), i[7] = t, i[8] = n, i[9] = _) : _ = i[9], _
            }
        })
    })
};