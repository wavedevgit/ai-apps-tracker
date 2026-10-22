import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F5 as t,
    L8 as n,
    k8 as r,
    v0 as ee,
    vat as i,
    xat as a,
    y0 as te,
    yat as ne
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Q as re,
    _t as ie
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Dzt as ae,
    GVt as o,
    KVt as oe,
    gzt as s,
    xzt as c
} from "./conversation-small-m08q51xmfe7gjq3d.js";
var l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, se, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $, ce, le, ue, de, fe, pe, me, he = e((() => {
    r(), ne(), ee(), re(), oe(), ae(), l = 2 * 365 * 24 * 60 * 60, u = 420, d = 350, f = 800, p = () => ie(`/agents/studio/new`, z()) == null ? `sidebar` : `fullscreen-landing`, m = () => ({
        mobileSidebarVisible: !1,
        sidebarMaxWidthPx: w() ?? u,
        sidebarResizeActive: !1,
        sidebarView: p(),
        activeToolsModal: null,
        buildNavToolsExpanded: !1,
        buildNavSkillsExpanded: !1,
        previewReturnRoute: null
    }), h = n(m), g = n(!1), _ = n(!1), v = n(!1), y = n(`channel_picker`), b = n(null), x = n(null), S = () => {
        let e = x();
        x.set(null), e?.onClose?.()
    }, C = e => Math.max(d, Math.min(f, Math.round(e))), w = () => {
        let e = i.getCookie(a.BuilderSidebarMaxWidth);
        if (!e) return null;
        let t = Number.parseInt(e, 10);
        return Number.isNaN(t) ? null : C(t)
    }, T = e => {
        i.setCookie(a.BuilderSidebarMaxWidth, String(C(e)), {
            maxAge: l
        })
    }, E = () => h().mobileSidebarVisible, D = () => {
        h.set(e => e.mobileSidebarVisible ? e : {
            ...e,
            mobileSidebarVisible: !0
        })
    }, O = () => {
        h.set(e => e.mobileSidebarVisible ? {
            ...e,
            mobileSidebarVisible: !1
        } : e)
    }, k = e => {
        let t = C(e);
        h.set(e => e.sidebarMaxWidthPx === t ? e : {
            ...e,
            sidebarMaxWidthPx: t
        })
    }, A = () => {
        k(u), T(u)
    }, j = e => {
        h.set(t => t.sidebarResizeActive === e ? t : {
            ...t,
            sidebarResizeActive: e
        })
    }, M = e => {
        h.set(t => t.sidebarView === e ? t : {
            ...t,
            sidebarView: e
        })
    }, N = () => {
        T(h().sidebarMaxWidthPx)
    }, P = () => {
        h.set(m), _.set(!1), v.set(!1), y.set(`channel_picker`), b.set(null), S()
    }, F = () => h().sidebarMaxWidthPx, I = () => h().sidebarResizeActive, L = () => h().sidebarView, R = () => h().buildNavToolsExpanded, se = () => h().buildNavSkillsExpanded, z = () => window.location.pathname ?? `/agents/studio/new`, B = (e, t = z()) => {
        let {
            gptId: n
        } = o(t);
        return `/agents/studio/edit${n?`/${n}`:``}${e}`
    }, V = () => h().previewReturnRoute, H = () => {
        let e = z();
        h.set(t => ({
            ...t,
            previewReturnRoute: e
        }))
    }, U = () => {
        h.set(e => ({
            ...e,
            previewReturnRoute: null
        }))
    }, W = (e, t) => {
        let {
            isPreviewRoute: n
        } = o(window.location.pathname);
        te(B(e), {
            replace: n,
            ...t
        })
    }, G = () => {
        let e = t(() => c().currentGpt.id);
        return e ? `/agents/a/${encodeURIComponent(e)}` : `/agents`
    }, K = e => {
        _.set(e)
    }, q = (e = `list`, t, n = !0) => {
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
    }, J = () => {
        h.set(e => e.activeToolsModal == null ? e : {
            ...e,
            activeToolsModal: null
        })
    }, Y = () => {
        h.set(e => e.buildNavToolsExpanded ? e : {
            ...e,
            buildNavToolsExpanded: !0
        })
    }, X = () => {
        h.set(e => e.buildNavSkillsExpanded ? e : {
            ...e,
            buildNavSkillsExpanded: !0
        })
    }, Z = e => {
        v.set(e), e || y.set(`channel_picker`)
    }, Q = () => {
        s(c()) && (y.set(`channel_picker`), Z(!0))
    }, $ = e => {
        e && y.set(`slack`), Z(e)
    }, ce = () => {
        s(c()) && $(!0)
    }, le = () => {
        Z(!1)
    }, ue = ({
        content: e,
        maxWidth: t
    }) => {
        b.set({
            content: e,
            maxWidth: t
        })
    }, de = () => {
        b.set(null)
    }, fe = ({
        content: e,
        contentClassName: t,
        maxWidth: n,
        onClose: r
    }) => {
        S(), x.set({
            content: e,
            contentClassName: t,
            maxWidth: n,
            onClose: r
        })
    }, pe = () => {
        S()
    }, me = {
        setAgentHeaderOutOfView: K,
        openMobileSidebar: D,
        closeMobileSidebar: O,
        setSidebarMaxWidthPx: k,
        resetSidebarMaxWidthPx: A,
        setSidebarResizeActive: j,
        setSidebarView: M,
        persistSidebarMaxWidthPx: N,
        navigate: W,
        buildRoute: B,
        storePreviewReturnRoute: H,
        clearPreviewReturnRoute: U,
        buildChatGPTStartScreenRoute: G,
        openToolsAddAppsModal: q,
        closeToolsModal: J,
        expandBuildNavTools: Y,
        expandBuildNavSkills: X,
        openChannelModal: Q,
        setChannelModalOpen: Z,
        openSlackChannelModal: ce,
        setSlackChannelModalOpen: $,
        closeSlackChannelModal: le,
        openBuilderDialog: ue,
        closeBuilderDialog: de,
        openBuilderModal: fe,
        closeBuilderModal: pe,
        reset: P
    }
}));
export {
    b as a, F as c, h as d, he as f, I as g, E as h, y as i, L as l, v as m, se as n, x as o, _ as p, R as r, V as s, me as t, g as u
};
//# sourceMappingURL=5579e947-j6sqysbgee22gi32.js.map