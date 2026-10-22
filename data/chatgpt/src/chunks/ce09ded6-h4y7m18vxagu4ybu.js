import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as ee,
    LU as n,
    Qy as r,
    RU as te,
    Zy as ne,
    eE as re,
    grt as i,
    hrt as ie,
    l7 as ae,
    u7 as oe
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as se,
    Nn as a,
    Rn as o,
    Vn as ce,
    wn as s,
    zn as le
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    MJ as c,
    jJ as ue
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Gh as l,
    Kh as de
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    Ht as fe,
    Vt as pe
} from "./c470f5ab-lnsrbaizit3lulwq.js";
import {
    a as me,
    i as he,
    n as u
} from "./5f4d7fa0-lmwguqqs8sde7d1l.js";
import {
    o as d,
    t as ge
} from "./e19f3910-hgfzf45j9nb081hm.js";
import {
    n as _e,
    t as ve
} from "./f23f926c-ox2iovxoqcztibwn.js";
import {
    n as ye,
    t as be
} from "./ab4d12c6-cicbm1p6urxg4msj.js";
import {
    n as xe,
    t as Se
} from "./4f9f51e5-oiwcyrh9jr63gwza.js";
import {
    n as Ce,
    t as we
} from "./f3d06460-ihav1534lza8nqxh.js";
import {
    n as Te,
    t as f
} from "./84ae5536-kjwlmwvnnltxtc22.js";

function Ee(e, t) {
    "use forget";
    return t
}

function p(e) {
    "use forget";
    let t = (0, Ae.c)(57),
        {
            isGitHubConnected: n,
            onClickCreateEnvironment: r,
            showSubtitle: re,
            showDownloadAppCta: i,
            redirectTo: oe
        } = e,
        se = n !== void 0 && n,
        o = re === void 0 || re,
        ce = i === void 0 || i,
        s = oe === void 0 ? `/codex/cloud` : oe,
        c = le(),
        [l, fe] = (0, m.useState)(),
        u;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = {
        showToast: !1
    }, t[0] = u) : u = t[0];
    let {
        mutate: d
    } = Te(u), ve = v(ke, !1), be = v(Oe, Se.Complete), xe = ve && be === Se.NoGithubConnection, Ce = ve && be === Se.NoEnvironmentsCreated, f = me(), Ee = f === void 0, p;
    t[1] === c ? p = t[2] : (p = () => {
        te.danger(c.formatMessage({
            id: `+vfzDI`,
            defaultMessage: `Error fetching connector, please ensure GitHub is enabled for your account`
        }))
    }, t[1] = c, t[2] = p);
    let y = p,
        b = y,
        x;
    t[3] !== y || t[4] !== b || t[5] !== s || t[6] !== l ? (x = {
        connectorId: l,
        redirectAfter: s,
        onNoConnector: y,
        onNoOAuthClients: b
    }, t[3] = y, t[4] = b, t[5] = s, t[6] = l, t[7] = x) : x = t[7];
    let {
        isConnected: Ne,
        isLoading: Pe,
        openGithubModal: S,
        error: C,
        refetch: w,
        connectorId: T,
        githubConnectorCandidates: E
    } = he(x), D;
    t[8] === w ? D = t[9] : (D = (0, h.jsx)(we, {
        refetchConnectorData: w
    }), t[8] = w, t[9] = D);
    let Fe = D,
        O;
    t[10] === r ? O = t[11] : (O = () => r?.(), t[10] = r, t[11] = O);
    let k;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, h.jsx)(a, {
        id: `wham.createEnvironment.cta`,
        defaultMessage: `Create environment`
    }), t[12] = k) : k = t[12];
    let A;
    t[13] === O ? A = t[14] : (A = (0, h.jsx)(ee, {
        className: `px-3`,
        color: `secondary`,
        size: `medium`,
        icon: de,
        onClick: O,
        children: k
    }), t[13] = O, t[14] = A);
    let Ie = A,
        j = se || Ce,
        Le = ye(),
        Re = _e(),
        M = ce && Re && Le && !j && !C,
        N = !xe && (!f || Ne),
        P = !C && !xe && !f,
        F = M && !N && !P,
        I, L;
    if (t[15] !== F) {
        let e = ie(`341617577`);
        I = F ? e.get(`cta_order`, g) : g, L = F ? e.get(`cta_emphasis`, _) : _, t[15] = F, t[16] = I, t[17] = L
    } else I = t[16], L = t[17];
    let ze = L,
        Be = I === `download_desktop_app_first` ? Me : je,
        Ve = ze === `download_desktop_app_emphasized`,
        He = Ve ? `secondary` : `primary`,
        R;
    t[18] !== S || t[19] !== N ? (R = () => {
        N || (ue.recordConnectionsClickConnectGithub(), S())
    }, t[18] = S, t[19] = N, t[20] = R) : R = t[20];
    let Ue = R,
        z;
    t[21] !== T || t[22] !== E || t[23] !== j || t[24] !== d ? (z = E.length > 1 && !j ? (0, h.jsxs)(`label`, {
        className: `flex w-full max-w-xs flex-col gap-1 text-xs`,
        children: [(0, h.jsx)(`span`, {
            className: `text-token-text-secondary`,
            children: (0, h.jsx)(a, {
                id: `wham.codexOnboardingConnections.githubConnectorSelector`,
                defaultMessage: `GitHub connector`
            })
        }), (0, h.jsx)(`select`, {
            className: `border-token-border-default bg-token-bg-primary text-token-text-primary rounded-lg border px-3 py-2 text-sm`,
            value: T,
            onChange: e => {
                let t = e.target.value;
                fe(t), d({
                    preferredGitHubConnectorId: t
                })
            },
            children: E.map(De)
        })]
    }) : null, t[21] = T, t[22] = E, t[23] = j, t[24] = d, t[25] = z) : z = t[25];
    let We = z,
        Ge = Ve && `text-token-text-tertiary`,
        B;
    t[26] === Ge ? B = t[27] : (B = ae(`px-3`, Ge), t[26] = Ge, t[27] = B);
    let Ke = Ve ? `text-token-text-tertiary` : void 0,
        V = Pe || Ee,
        H;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (H = (0, h.jsx)(a, {
        id: `wham.codexOnboardingConnections.connectGithub`,
        defaultMessage: `Connect to GitHub`
    }), t[28] = H) : H = t[28];
    let U;
    t[29] !== He || t[30] !== Ue || t[31] !== N || t[32] !== B || t[33] !== Ke || t[34] !== V ? (U = (0, h.jsx)(ee, {
        className: B,
        color: He,
        size: `medium`,
        icon: pe,
        iconClassName: Ke,
        loading: V,
        onClick: Ue,
        disabled: N,
        children: H
    }), t[29] = He, t[30] = Ue, t[31] = N, t[32] = B, t[33] = Ke, t[34] = V, t[35] = U) : U = t[35];
    let W = U,
        G = W;
    j ? G = Ie : C && (G = Fe);
    let K;
    t[36] !== G || t[37] !== c || t[38] !== P ? (K = P ? (0, h.jsx)(ne, {
        label: c.formatMessage({
            id: `wham.codexOnboardingConnections.githubDisabledByAdmin`,
            defaultMessage: `Disabled by workspace admin`
        }),
        children: (0, h.jsx)(`div`, {
            children: G
        })
    }) : G, t[36] = G, t[37] = c, t[38] = P, t[39] = K) : K = t[39];
    let q = K,
        J;
    t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (J = (0, h.jsx)(ge, {
        surface: `composer_no_github`,
        color: `primary`
    }), t[40] = J) : J = t[40];
    let qe = J,
        Y;
    t[41] === W ? Y = t[42] : (Y = {
        connectGithub: W,
        downloadDesktopApp: qe
    }, t[41] = W, t[42] = Y);
    let Je = Y,
        X;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (X = ae(`bg-token-bg-tertiary`, `rounded-xl`, `w-full`, `min-h-[220px]`, `flex items-center justify-center`, `pointer-events-auto`, `border-token-border-light`, `border`), t[43] = X) : X = t[43];
    let Z;
    t[44] !== Je || t[45] !== q || t[46] !== Be || t[47] !== F || t[48] !== M ? (Z = M ? F ? (0, h.jsx)(`div`, {
        className: `flex max-w-full flex-wrap items-center justify-center gap-3`,
        children: Be.map((e, t) => (0, h.jsxs)(m.Fragment, {
            children: [t > 0 && (0, h.jsx)(`span`, {
                className: `text-token-text-tertiary text-xs`,
                children: (0, h.jsx)(a, {
                    id: `wham.whamComposer.or`,
                    defaultMessage: `or`
                })
            }), Je[e]]
        }, e))
    }) : (0, h.jsxs)(`div`, {
        className: `flex max-w-full flex-wrap items-center justify-center gap-3`,
        children: [q, (0, h.jsx)(`span`, {
            className: `text-token-text-tertiary text-xs`,
            children: (0, h.jsx)(a, {
                id: `wham.whamComposer.or`,
                defaultMessage: `or`
            })
        }), (0, h.jsx)(ge, {
            surface: `composer_no_github`
        })]
    }) : q, t[44] = Je, t[45] = q, t[46] = Be, t[47] = F, t[48] = M, t[49] = Z) : Z = t[49];
    let Q;
    t[50] !== j || t[51] !== o ? (Q = o && !j && (0, h.jsx)(`div`, {
        className: `text-token-text-secondary text-xs`,
        children: (0, h.jsx)(a, {
            id: `wham.whamComposer.connectGithubSubtitle`,
            defaultMessage: `Connect a repository to create a task`
        })
    }), t[50] = j, t[51] = o, t[52] = Q) : Q = t[52];
    let $;
    return t[53] !== We || t[54] !== Z || t[55] !== Q ? ($ = (0, h.jsx)(`div`, {
        className: X,
        children: (0, h.jsxs)(`div`, {
            className: `flex flex-col items-center gap-2 p-8`,
            children: [We, Z, Q]
        })
    }), t[53] = We, t[54] = Z, t[55] = Q, t[56] = $) : $ = t[56], $
}

function De(e) {
    return (0, h.jsx)(`option`, {
        value: e.id,
        children: e.name
    }, e.id)
}

function Oe(e) {
    return e.codexOnboardingStateOverride
}

function ke(e) {
    return e.showDevOnboardingOverrides
}
var Ae, m, h, g, _, je, Me, v, y = e((() => {
    Ae = s(), re(), fe(), l(), r(), n(), i(), d(), ve(), be(), xe(), u(), c(), Ce(), f(), oe(), m = t(ce()), o(), h = se(), g = `connect_github_first`, _ = `connect_github_emphasized`, je = [`connectGithub`, `downloadDesktopApp`], Me = [`downloadDesktopApp`, `connectGithub`], v = Ee
}));
export {
    y as n, p as t
};
//# sourceMappingURL=ce09ded6-h4y7m18vxagu4ybu.js.map