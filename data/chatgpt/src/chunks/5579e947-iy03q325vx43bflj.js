import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Dat as n,
    Eat as r,
    R8 as i,
    kat as a,
    v0 as ee,
    y0 as te,
    y5 as ne
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Q as re,
    _t as ie
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    RVt as o,
    bzt as ae,
    lzt as s,
    mzt as c,
    zVt as oe
} from "./conversation-small-bcbq46iub1p0ca1t.js";
var l, u, d, f, p, m, h, se, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, ce, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, le, ue, de, fe, pe, me, $, he = e((() => {
    t(), n(), ee(), re(), oe(), ae(), l = 2 * 365 * 24 * 60 * 60, u = 420, d = 350, f = 800, p = () => ie(`/agents/studio/new`, R()) == null ? `sidebar` : `fullscreen-landing`, m = () => ({
        mobileSidebarVisible: !1,
        sidebarMaxWidthPx: C() ?? u,
        sidebarResizeActive: !1,
        sidebarView: p(),
        activeToolsModal: null,
        buildNavToolsExpanded: !1,
        buildNavSkillsExpanded: !1,
        previewReturnRoute: null
    }), h = i(m), se = i(!1), g = i(!1), _ = i(!1), v = i(`channel_picker`), y = i(null), b = i(null), x = () => {
        let e = b();
        b.set(null), e?.onClose?.()
    }, S = e => Math.max(d, Math.min(f, Math.round(e))), C = () => {
        let e = r.getCookie(a.BuilderSidebarMaxWidth);
        if (!e) return null;
        let t = Number.parseInt(e, 10);
        return Number.isNaN(t) ? null : S(t)
    }, w = e => {
        r.setCookie(a.BuilderSidebarMaxWidth, String(S(e)), {
            maxAge: l
        })
    }, T = () => h().mobileSidebarVisible, E = () => {
        h.set(e => e.mobileSidebarVisible ? e : {
            ...e,
            mobileSidebarVisible: !0
        })
    }, D = () => {
        h.set(e => e.mobileSidebarVisible ? {
            ...e,
            mobileSidebarVisible: !1
        } : e)
    }, O = e => {
        let t = S(e);
        h.set(e => e.sidebarMaxWidthPx === t ? e : {
            ...e,
            sidebarMaxWidthPx: t
        })
    }, k = () => {
        O(u), w(u)
    }, A = e => {
        h.set(t => t.sidebarResizeActive === e ? t : {
            ...t,
            sidebarResizeActive: e
        })
    }, j = e => {
        h.set(t => t.sidebarView === e ? t : {
            ...t,
            sidebarView: e
        })
    }, M = () => {
        w(h().sidebarMaxWidthPx)
    }, N = () => {
        h.set(m), g.set(!1), _.set(!1), v.set(`channel_picker`), y.set(null), x()
    }, P = () => h().sidebarMaxWidthPx, ce = () => h().sidebarResizeActive, F = () => h().sidebarView, I = () => h().buildNavToolsExpanded, L = () => h().buildNavSkillsExpanded, R = () => window.location.pathname ?? `/agents/studio/new`, z = (e, t = R()) => {
        let {
            gptId: n
        } = o(t);
        return `/agents/studio/edit${n?`/${n}`:``}${e}`
    }, B = () => h().previewReturnRoute, V = () => {
        let e = R();
        h.set(t => ({
            ...t,
            previewReturnRoute: e
        }))
    }, H = () => {
        h.set(e => ({
            ...e,
            previewReturnRoute: null
        }))
    }, U = (e, t) => {
        let {
            isPreviewRoute: n
        } = o(window.location.pathname);
        te(z(e), {
            replace: n,
            ...t
        })
    }, W = () => {
        let e = ne(() => c().currentGpt.id);
        return e ? `/agents/a/${encodeURIComponent(e)}` : `/agents`
    }, G = e => {
        g.set(e)
    }, K = (e = `list`, t, n = !0) => {
        h.set(r => ({
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
        h.set(e => e.activeToolsModal == null ? e : {
            ...e,
            activeToolsModal: null
        })
    }, J = () => {
        h.set(e => e.buildNavToolsExpanded ? e : {
            ...e,
            buildNavToolsExpanded: !0
        })
    }, Y = () => {
        h.set(e => e.buildNavSkillsExpanded ? e : {
            ...e,
            buildNavSkillsExpanded: !0
        })
    }, X = e => {
        _.set(e), e || v.set(`channel_picker`)
    }, Z = () => {
        s(c()) && (v.set(`channel_picker`), X(!0))
    }, Q = e => {
        e && v.set(`slack`), X(e)
    }, le = () => {
        s(c()) && Q(!0)
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
    y as a, P as c, h as d, he as f, ce as g, T as h, v as i, F as l, _ as m, L as n, b as o, g as p, I as r, B as s, $ as t, se as u
};
//# sourceMappingURL=5579e947-iy03q325vx43bflj.js.map