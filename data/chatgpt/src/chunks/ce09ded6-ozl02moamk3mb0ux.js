import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as ee,
    Crt as n,
    K5 as te,
    LU as r,
    Qy as i,
    RU as ne,
    Srt as re,
    Zy as ie,
    eE as ae,
    q5 as a
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as oe,
    Nn as o,
    Rn as s,
    Vn as se,
    wn as c,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    MJ as l,
    jJ as le
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Uh as u,
    Wh as ue
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Ht as de,
    Vt as fe
} from "./c470f5ab-jwd0o7jx9i9say9k.js";
import {
    a as pe,
    i as me,
    n as d
} from "./5f4d7fa0-c53njl56by21uf8z.js";
import {
    o as f,
    t as he
} from "./e19f3910-nqncd9m6rjdlfk2l.js";
import {
    n as ge,
    t as _e
} from "./f23f926c-gj6tsfbaygm16rrv.js";
import {
    n as ve,
    t as ye
} from "./ab4d12c6-c1t9zu5tn71j8v4o.js";
import {
    n as be,
    t as xe
} from "./4f9f51e5-oiwcyrh9jr63gwza.js";
import {
    n as Se,
    t as Ce
} from "./f3d06460-fvkezd96tkqrxcek.js";
import {
    n as we,
    t as p
} from "./84ae5536-n2unk25pzuxlgwjw.js";

function Te(e, t) {
    "use forget";
    return t
}

function m(e) {
    "use forget";
    let t = (0, ke.c)(57),
        {
            isGitHubConnected: n,
            onClickCreateEnvironment: r,
            showSubtitle: i,
            showDownloadAppCta: ae,
            redirectTo: a
        } = e,
        oe = n !== void 0 && n,
        s = i === void 0 || i,
        se = ae === void 0 || ae,
        c = a === void 0 ? `/codex/cloud` : a,
        l = ce(),
        [u, de] = (0, h.useState)(),
        d;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = {
        showToast: !1
    }, t[0] = d) : d = t[0];
    let {
        mutate: f
    } = we(d), _e = y(Oe, !1), ye = y(De, xe.Complete), be = _e && ye === xe.NoGithubConnection, Se = _e && ye === xe.NoEnvironmentsCreated, p = pe(), Te = p === void 0, m;
    t[1] === l ? m = t[2] : (m = () => {
        ne.danger(l.formatMessage({
            id: `+vfzDI`,
            defaultMessage: `Error fetching connector, please ensure GitHub is enabled for your account`
        }))
    }, t[1] = l, t[2] = m);
    let b = m,
        x = b,
        S;
    t[3] !== b || t[4] !== x || t[5] !== c || t[6] !== u ? (S = {
        connectorId: u,
        redirectAfter: c,
        onNoConnector: b,
        onNoOAuthClients: x
    }, t[3] = b, t[4] = x, t[5] = c, t[6] = u, t[7] = S) : S = t[7];
    let {
        isConnected: Me,
        isLoading: Ne,
        openGithubModal: C,
        error: w,
        refetch: T,
        connectorId: E,
        githubConnectorCandidates: D
    } = me(S), O;
    t[8] === T ? O = t[9] : (O = (0, g.jsx)(Ce, {
        refetchConnectorData: T
    }), t[8] = T, t[9] = O);
    let Pe = O,
        k;
    t[10] === r ? k = t[11] : (k = () => r?.(), t[10] = r, t[11] = k);
    let A;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (A = (0, g.jsx)(o, {
        id: `wham.createEnvironment.cta`,
        defaultMessage: `Create environment`
    }), t[12] = A) : A = t[12];
    let j;
    t[13] === k ? j = t[14] : (j = (0, g.jsx)(ee, {
        className: `px-3`,
        color: `secondary`,
        size: `medium`,
        icon: ue,
        onClick: k,
        children: A
    }), t[13] = k, t[14] = j);
    let Fe = j,
        M = oe || Se,
        Ie = ve(),
        Le = ge(),
        N = se && Le && Ie && !M && !w,
        P = !be && (!p || Me),
        F = !w && !be && !p,
        I = N && !P && !F,
        L, R;
    if (t[15] !== I) {
        let e = re(`341617577`);
        L = I ? e.get(`cta_order`, _) : _, R = I ? e.get(`cta_emphasis`, v) : v, t[15] = I, t[16] = L, t[17] = R
    } else L = t[16], R = t[17];
    let Re = R,
        ze = L === `download_desktop_app_first` ? je : Ae,
        Be = Re === `download_desktop_app_emphasized`,
        Ve = Be ? `secondary` : `primary`,
        z;
    t[18] !== C || t[19] !== P ? (z = () => {
        P || (le.recordConnectionsClickConnectGithub(), C())
    }, t[18] = C, t[19] = P, t[20] = z) : z = t[20];
    let He = z,
        B;
    t[21] !== E || t[22] !== D || t[23] !== M || t[24] !== f ? (B = D.length > 1 && !M ? (0, g.jsxs)(`label`, {
        className: `flex w-full max-w-xs flex-col gap-1 text-xs`,
        children: [(0, g.jsx)(`span`, {
            className: `text-token-text-secondary`,
            children: (0, g.jsx)(o, {
                id: `wham.codexOnboardingConnections.githubConnectorSelector`,
                defaultMessage: `GitHub connector`
            })
        }), (0, g.jsx)(`select`, {
            className: `border-token-border-default bg-token-bg-primary text-token-text-primary rounded-lg border px-3 py-2 text-sm`,
            value: E,
            onChange: e => {
                let t = e.target.value;
                de(t), f({
                    preferredGitHubConnectorId: t
                })
            },
            children: D.map(Ee)
        })]
    }) : null, t[21] = E, t[22] = D, t[23] = M, t[24] = f, t[25] = B) : B = t[25];
    let Ue = B,
        We = Be && `text-token-text-tertiary`,
        V;
    t[26] === We ? V = t[27] : (V = te(`px-3`, We), t[26] = We, t[27] = V);
    let Ge = Be ? `text-token-text-tertiary` : void 0,
        Ke = Ne || Te,
        H;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (H = (0, g.jsx)(o, {
        id: `wham.codexOnboardingConnections.connectGithub`,
        defaultMessage: `Connect to GitHub`
    }), t[28] = H) : H = t[28];
    let U;
    t[29] !== Ve || t[30] !== He || t[31] !== P || t[32] !== V || t[33] !== Ge || t[34] !== Ke ? (U = (0, g.jsx)(ee, {
        className: V,
        color: Ve,
        size: `medium`,
        icon: fe,
        iconClassName: Ge,
        loading: Ke,
        onClick: He,
        disabled: P,
        children: H
    }), t[29] = Ve, t[30] = He, t[31] = P, t[32] = V, t[33] = Ge, t[34] = Ke, t[35] = U) : U = t[35];
    let W = U,
        G = W;
    M ? G = Fe : w && (G = Pe);
    let K;
    t[36] !== G || t[37] !== l || t[38] !== F ? (K = F ? (0, g.jsx)(ie, {
        label: l.formatMessage({
            id: `wham.codexOnboardingConnections.githubDisabledByAdmin`,
            defaultMessage: `Disabled by workspace admin`
        }),
        children: (0, g.jsx)(`div`, {
            children: G
        })
    }) : G, t[36] = G, t[37] = l, t[38] = F, t[39] = K) : K = t[39];
    let q = K,
        J;
    t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (J = (0, g.jsx)(he, {
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
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (X = te(`bg-token-bg-tertiary`, `rounded-xl`, `w-full`, `min-h-[220px]`, `flex items-center justify-center`, `pointer-events-auto`, `border-token-border-light`, `border`), t[43] = X) : X = t[43];
    let Z;
    t[44] !== Je || t[45] !== q || t[46] !== ze || t[47] !== I || t[48] !== N ? (Z = N ? I ? (0, g.jsx)(`div`, {
        className: `flex max-w-full flex-wrap items-center justify-center gap-3`,
        children: ze.map((e, t) => (0, g.jsxs)(h.Fragment, {
            children: [t > 0 && (0, g.jsx)(`span`, {
                className: `text-token-text-tertiary text-xs`,
                children: (0, g.jsx)(o, {
                    id: `wham.whamComposer.or`,
                    defaultMessage: `or`
                })
            }), Je[e]]
        }, e))
    }) : (0, g.jsxs)(`div`, {
        className: `flex max-w-full flex-wrap items-center justify-center gap-3`,
        children: [q, (0, g.jsx)(`span`, {
            className: `text-token-text-tertiary text-xs`,
            children: (0, g.jsx)(o, {
                id: `wham.whamComposer.or`,
                defaultMessage: `or`
            })
        }), (0, g.jsx)(he, {
            surface: `composer_no_github`
        })]
    }) : q, t[44] = Je, t[45] = q, t[46] = ze, t[47] = I, t[48] = N, t[49] = Z) : Z = t[49];
    let Q;
    t[50] !== M || t[51] !== s ? (Q = s && !M && (0, g.jsx)(`div`, {
        className: `text-token-text-secondary text-xs`,
        children: (0, g.jsx)(o, {
            id: `wham.whamComposer.connectGithubSubtitle`,
            defaultMessage: `Connect a repository to create a task`
        })
    }), t[50] = M, t[51] = s, t[52] = Q) : Q = t[52];
    let $;
    return t[53] !== Ue || t[54] !== Z || t[55] !== Q ? ($ = (0, g.jsx)(`div`, {
        className: X,
        children: (0, g.jsxs)(`div`, {
            className: `flex flex-col items-center gap-2 p-8`,
            children: [Ue, Z, Q]
        })
    }), t[53] = Ue, t[54] = Z, t[55] = Q, t[56] = $) : $ = t[56], $
}

function Ee(e) {
    return (0, g.jsx)(`option`, {
        value: e.id,
        children: e.name
    }, e.id)
}

function De(e) {
    return e.codexOnboardingStateOverride
}

function Oe(e) {
    return e.showDevOnboardingOverrides
}
var ke, h, g, _, v, Ae, je, y, b = e((() => {
    ke = c(), ae(), de(), u(), i(), r(), n(), f(), _e(), ye(), be(), d(), l(), Se(), p(), a(), h = t(se()), s(), g = oe(), _ = `connect_github_first`, v = `connect_github_emphasized`, Ae = [`connectGithub`, `downloadDesktopApp`], je = [`downloadDesktopApp`, `connectGithub`], y = Te
}));
export {
    b as n, m as t
};
//# sourceMappingURL=ce09ded6-ozl02moamk3mb0ux.js.map