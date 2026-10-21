import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    S5 as t,
    eat as n,
    g8 as r,
    l0 as ee,
    rat as i,
    tat as te,
    u0 as ne,
    w8 as a
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Q as re,
    _t as ie
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Azt as ae,
    JVt as o,
    YVt as oe,
    wzt as s,
    yzt as c
} from "./conversation-small-ikg0dwuw782klweb.js";
var l, u, d, f, se, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, ce, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, le, ue, de, fe, pe, me, $, he = e((() => {
    r(), te(), ee(), re(), oe(), ae(), l = 2 * 365 * 24 * 60 * 60, u = 420, d = 350, f = 800, se = () => ie(`/agents/studio/new`, R()) == null ? `sidebar` : `fullscreen-landing`, p = () => ({
        mobileSidebarVisible: !1,
        sidebarMaxWidthPx: C() ?? u,
        sidebarResizeActive: !1,
        sidebarView: se(),
        activeToolsModal: null,
        buildNavToolsExpanded: !1,
        buildNavSkillsExpanded: !1,
        previewReturnRoute: null
    }), m = a(p), h = a(!1), g = a(!1), _ = a(!1), v = a(`channel_picker`), y = a(null), b = a(null), x = () => {
        let e = b();
        b.set(null), e?.onClose?.()
    }, S = e => Math.max(d, Math.min(f, Math.round(e))), C = () => {
        let e = n.getCookie(i.BuilderSidebarMaxWidth);
        if (!e) return null;
        let t = Number.parseInt(e, 10);
        return Number.isNaN(t) ? null : S(t)
    }, w = e => {
        n.setCookie(i.BuilderSidebarMaxWidth, String(S(e)), {
            maxAge: l
        })
    }, T = () => m().mobileSidebarVisible, E = () => {
        m.set(e => e.mobileSidebarVisible ? e : {
            ...e,
            mobileSidebarVisible: !0
        })
    }, D = () => {
        m.set(e => e.mobileSidebarVisible ? {
            ...e,
            mobileSidebarVisible: !1
        } : e)
    }, O = e => {
        let t = S(e);
        m.set(e => e.sidebarMaxWidthPx === t ? e : {
            ...e,
            sidebarMaxWidthPx: t
        })
    }, k = () => {
        O(u), w(u)
    }, A = e => {
        m.set(t => t.sidebarResizeActive === e ? t : {
            ...t,
            sidebarResizeActive: e
        })
    }, j = e => {
        m.set(t => t.sidebarView === e ? t : {
            ...t,
            sidebarView: e
        })
    }, M = () => {
        w(m().sidebarMaxWidthPx)
    }, N = () => {
        m.set(p), g.set(!1), _.set(!1), v.set(`channel_picker`), y.set(null), x()
    }, P = () => m().sidebarMaxWidthPx, ce = () => m().sidebarResizeActive, F = () => m().sidebarView, I = () => m().buildNavToolsExpanded, L = () => m().buildNavSkillsExpanded, R = () => window.location.pathname ?? `/agents/studio/new`, z = (e, t = R()) => {
        let {
            gptId: n
        } = o(t);
        return `/agents/studio/edit${n?`/${n}`:``}${e}`
    }, B = () => m().previewReturnRoute, V = () => {
        let e = R();
        m.set(t => ({
            ...t,
            previewReturnRoute: e
        }))
    }, H = () => {
        m.set(e => ({
            ...e,
            previewReturnRoute: null
        }))
    }, U = (e, t) => {
        let {
            isPreviewRoute: n
        } = o(window.location.pathname);
        ne(z(e), {
            replace: n,
            ...t
        })
    }, W = () => {
        let e = t(() => s().currentGpt.id);
        return e ? `/agents/a/${encodeURIComponent(e)}` : `/agents`
    }, G = e => {
        g.set(e)
    }, K = (e = `list`, t, n = !0) => {
        m.set(r => ({
            ...r,
            activeToolsModal: {
                name: `add_apps`,
                initialStep: e,
                ...n ? {} : {
                    shouldAddToDraft: n
                },
                ...t ? {
                    onComplete: t
                } : {}
            }
        }))
    }, q = () => {
        m.set(e => e.activeToolsModal == null ? e : {
            ...e,
            activeToolsModal: null
        })
    }, J = () => {
        m.set(e => e.buildNavToolsExpanded ? e : {
            ...e,
            buildNavToolsExpanded: !0
        })
    }, Y = () => {
        m.set(e => e.buildNavSkillsExpanded ? e : {
            ...e,
            buildNavSkillsExpanded: !0
        })
    }, X = e => {
        _.set(e), e || v.set(`channel_picker`)
    }, Z = () => {
        c(s()) && (v.set(`channel_picker`), X(!0))
    }, Q = e => {
        e && v.set(`slack`), X(e)
    }, le = () => {
        c(s()) && Q(!0)
    }, ue = () => {
        X(!1)
    }, de = ({
        content: e,
        maxWidth: t
    }) => {
        y.set({
            content: e,
            maxWidth: t
        })
    }, fe = () => {
        y.set(null)
    }, pe = ({
        content: e,
        contentClassName: t,
        maxWidth: n,
        onClose: r
    }) => {
        x(), b.set({
            content: e,
            contentClassName: t,
            maxWidth: n,
            onClose: r
        })
    }, me = () => {
        x()
    }, $ = {
        setAgentHeaderOutOfView: G,
        openMobileSidebar: E,
        closeMobileSidebar: D,
        setSidebarMaxWidthPx: O,
        resetSidebarMaxWidthPx: k,
        setSidebarResizeActive: A,
        setSidebarView: j,
        persistSidebarMaxWidthPx: M,
        navigate: U,
        buildRoute: z,
        storePreviewReturnRoute: V,
        clearPreviewReturnRoute: H,
        buildChatGPTStartScreenRoute: W,
        openToolsAddAppsModal: K,
        closeToolsModal: q,
        expandBuildNavTools: J,
        expandBuildNavSkills: Y,
        openChannelModal: Z,
        setChannelModalOpen: X,
        openSlackChannelModal: le,
        setSlackChannelModalOpen: Q,
        closeSlackChannelModal: ue,
        openBuilderDialog: de,
        closeBuilderDialog: fe,
        openBuilderModal: pe,
        closeBuilderModal: me,
        reset: N
    }
}));
export {
    y as a, P as c, m as d, he as f, ce as g, T as h, v as i, F as l, _ as m, L as n, b as o, g as p, I as r, B as s, $ as t, h as u
};
//# sourceMappingURL=5579e947-gs9frw5hsowhcegr.js.map