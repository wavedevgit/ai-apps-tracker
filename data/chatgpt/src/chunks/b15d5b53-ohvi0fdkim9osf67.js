import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as r,
    $ot as i,
    Aw as a,
    Ch as o,
    Dit as s,
    Dw as c,
    Ew as l,
    Fot as u,
    Fv as d,
    G_ as f,
    Gnt as p,
    Grt as m,
    Ist as h,
    Iw as g,
    J3 as _,
    JT as v,
    Kh as y,
    Mz as b,
    Ow as x,
    P5 as S,
    Pw as C,
    R1 as w,
    S6 as T,
    X5 as E,
    Xy as D,
    Y5 as O,
    YT as k,
    Y_ as A,
    Yh as j,
    Ytt as M,
    Z3 as ee,
    Znt as N,
    Zy as P,
    bnt as F,
    dit as I,
    eit as L,
    est as R,
    g8 as z,
    jw as B,
    jz as V,
    kv as H,
    kw as U,
    lit as W,
    mnt as te,
    n2 as ne,
    nct as re,
    oL as ie,
    sL as ae,
    v6 as oe,
    vnt as G,
    w1 as se,
    yh as ce
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    At as le,
    Bn as ue,
    Ln as de,
    Nn as K,
    Q as fe,
    Rn as pe,
    Vn as me,
    wn as he,
    zn as ge
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Hn as _e,
    A3t as ve,
    Ait as ye,
    Crt as q,
    D1 as be,
    E1 as xe,
    E3t as Se,
    FTt as Ce,
    H8 as we,
    MTt as Te,
    SWt as Ee,
    Trt as De,
    V8 as Oe,
    _Wt as ke,
    _it as Ae,
    cat as je,
    eUn as Me,
    eWn as Ne,
    e_n as Pe,
    eit as Fe,
    fat as Ie,
    hUn as Le,
    lat as Re,
    mUn as ze,
    mat as Be,
    nWn as Ve,
    n_n as He,
    oit as Ue,
    osn as We,
    pat as Ge,
    r_n as Ke,
    ssn as qe,
    zWt as Je
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Kv as Ye,
    Mv as Xe,
    Nv as Ze,
    qv as Qe
} from "./30901919-e8h11sw136qen6v0.js";
import {
    a_ as $e,
    i_ as et
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    Iv as tt,
    fv as nt
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
import {
    A as rt,
    J as it,
    g as at,
    h as ot,
    k as st,
    m as ct,
    p as lt,
    q as ut
} from "./c470f5ab-ab47eubabs8jspdc.js";
import {
    a as dt,
    i as ft,
    n as pt,
    r as mt,
    t as ht
} from "./06dfbf77-fe8jqxpmogp7hp3b.js";
import {
    i as gt,
    r as _t,
    t as vt
} from "./94e0eb8c-lon6tazr2p489rlc.js";
import {
    r as yt,
    t as bt
} from "./47ed0b35-or7q1bbfh0rntyfi.js";
import {
    n as xt,
    r as St,
    t as Ct
} from "./760cdbab-bh2w3v7dn4lpntpk.js";
import {
    n as wt,
    r as Tt
} from "./d5b03218-k4dxk7m2ijw2ab2t.js";
import {
    r as Et,
    t as Dt
} from "./7517017f-m0e7hb8h6fyirvew.js";
var Ot, J, kt, At, jt = e((() => {
    Ot = he(), St(), Be(), Ce(), L(), U(), Le(), E(), pe(), J = ue(), kt = `https://persistent.oaistatic.com/static-nux/ecosystem-app-connect-modal-bg.jpg`, At = e => {
        "use forget";
        let t = (0, Ot.c)(60),
            {
                blurbs: n,
                primaryActions: r,
                additionalContent: i,
                footerContent: a,
                primaryActionMessage: o,
                stackPrimaryActions: s,
                connector: c,
                onClose: l
            } = e,
            u = s !== void 0 && s,
            d = ge(),
            f = c.connector_type === `FIRST_PARTY_ECOSYSTEM` && (n?.length ?? 0) <= 1,
            p = c.connector_type === `FIRST_PARTY_ECOSYSTEM`,
            h;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
            backgroundImage: `url(${kt})`
        }, t[0] = h) : h = t[0];
        let g;
        t[1] === d ? g = t[2] : (g = d.formatMessage(m.close), t[1] = d, t[2] = g);
        let _;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, J.jsx)(x, {
            className: `icon`
        }), t[3] = _) : _ = t[3];
        let v;
        t[4] !== l || t[5] !== g ? (v = (0, J.jsx)(`div`, {
            className: `flex justify-end p-2`,
            children: (0, J.jsx)(ze, {
                className: `text-white`,
                onClick: l,
                "aria-label": g,
                children: _
            })
        }), t[4] = l, t[5] = g, t[6] = v) : v = t[6];
        let y = f && `pt-12`,
            b;
        t[7] === y ? b = t[8] : (b = O(`flex w-full flex-row`, y), t[7] = y, t[8] = b);
        let S = p ? `p-0.75` : `p-2`,
            C;
        t[9] === S ? C = t[10] : (C = O(`shrink-0 rounded-xl border-[0.5px] bg-white shadow-sm`, S), t[9] = S, t[10] = C);
        let w = p ? `large` : `medium`,
            T;
        t[11] !== c || t[12] !== w || t[13] !== C ? (T = (0, J.jsx)(Te, {
            connector: c,
            className: C,
            size: w
        }), t[11] = c, t[12] = w, t[13] = C, t[14] = T) : T = t[14];
        let E, D;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, J.jsx)(`div`, {
            className: `my-auto h-8 w-px bg-white opacity-70`
        }), D = (0, J.jsx)(Ge, {
            size: `medium`
        }), t[15] = E, t[16] = D) : (E = t[15], D = t[16]);
        let k;
        t[17] === T ? k = t[18] : (k = (0, J.jsxs)(`div`, {
            className: `flex items-center gap-3.5`,
            children: [T, E, D]
        }), t[17] = T, t[18] = k);
        let A;
        t[19] === c.name ? A = t[20] : (A = (0, J.jsx)(`h2`, {
            className: `text-token-text-primary m-0 text-center text-2xl font-medium`,
            children: (0, J.jsx)(K, {
                id: `54VsXX`,
                defaultMessage: `Add {connectorName} to ChatGPT`,
                values: {
                    connectorName: c.name
                }
            })
        }), t[19] = c.name, t[20] = A);
        let j;
        t[21] === c.description ? j = t[22] : (j = c.description && (0, J.jsx)(`span`, {
            className: `text-token-text-primary line-clamp-5 text-center text-sm`,
            children: c.description
        }), t[21] = c.description, t[22] = j);
        let M;
        t[23] !== A || t[24] !== j ? (M = (0, J.jsxs)(`div`, {
            className: `flex w-full flex-col items-center gap-2 px-5 text-center text-balance`,
            children: [A, j]
        }), t[23] = A, t[24] = j, t[25] = M) : M = t[25];
        let ee = u ? `flex w-full max-w-80 flex-col items-center justify-center gap-2 pt-4` : `flex flex-row items-center justify-center gap-4 pt-4`,
            N = f ? `pb-10` : `pb-8`,
            P;
        t[26] !== ee || t[27] !== N ? (P = O(ee, N), t[26] = ee, t[27] = N, t[28] = P) : P = t[28];
        let F;
        t[29] !== i || t[30] !== r || t[31] !== P ? (F = (0, J.jsxs)(`div`, {
            className: P,
            children: [i, r]
        }), t[29] = i, t[30] = r, t[31] = P, t[32] = F) : F = t[32];
        let I;
        t[33] === f ? I = t[34] : (I = f && (0, J.jsx)(`div`, {
            className: `py-6 text-center text-xs text-white/65`,
            children: (0, J.jsx)(K, {
                id: `ecosystemAppLinkModal.firstPartyFooterAttribution`,
                defaultMessage: `Designed and developed by OpenAI`
            })
        }), t[33] = f, t[34] = I);
        let L;
        t[35] !== k || t[36] !== M || t[37] !== F || t[38] !== I ? (L = (0, J.jsxs)(`div`, {
            className: `flex flex-auto flex-col items-center gap-4`,
            children: [k, M, F, I]
        }), t[35] = k, t[36] = M, t[37] = F, t[38] = I, t[39] = L) : L = t[39];
        let R;
        t[40] !== L || t[41] !== b ? (R = (0, J.jsx)(`div`, {
            className: b,
            children: L
        }), t[40] = L, t[41] = b, t[42] = R) : R = t[42];
        let z;
        t[43] !== R || t[44] !== v ? (z = (0, J.jsxs)(`div`, {
            className: `dark overflow-hidden bg-cover bg-no-repeat`,
            style: h,
            children: [v, R]
        }), t[43] = R, t[44] = v, t[45] = z) : z = t[45];
        let B;
        t[46] === a ? B = t[47] : (B = a ? (0, J.jsx)(`div`, {
            className: `border-token-border-default border-b px-5 py-4`,
            children: a
        }) : null, t[46] = a, t[47] = B);
        let V;
        t[48] === o ? V = t[49] : (V = o ? (0, J.jsx)(`div`, {
            className: `px-4 pt-4`,
            children: (0, J.jsx)(`div`, {
                className: `bg-token-interactive-bg-accent-muted-context rounded-xl p-4 text-center text-sm text-[#0285FF]`,
                children: o
            })
        }) : null, t[48] = o, t[49] = V);
        let H;
        t[50] !== n || t[51] !== f ? (H = !f && (0, J.jsx)(`div`, {
            className: `px-4 py-4`,
            children: (0, J.jsx)(xt, {
                blurbs: n
            })
        }), t[50] = n, t[51] = f, t[52] = H) : H = t[52];
        let U;
        t[53] !== V || t[54] !== H ? (U = (0, J.jsxs)(`div`, {
            className: `px-1`,
            children: [V, H]
        }), t[53] = V, t[54] = H, t[55] = U) : U = t[55];
        let W;
        return t[56] !== z || t[57] !== B || t[58] !== U ? (W = (0, J.jsxs)(`div`, {
            className: `flex flex-col`,
            children: [z, B, U]
        }), t[56] = z, t[57] = B, t[58] = U, t[59] = W) : W = t[59], W
    }
}));

function Mt(e, t) {
    return (0, Y.jsx)(`a`, {
        className: `interactive-label-secondary font-medium`,
        href: e,
        target: `_blank`,
        rel: `noopener noreferrer`,
        children: t
    })
}
var Nt, Y, Pt, Ft, It, Lt = e((() => {
    Nt = he(), Je(), k(), Me(), c(), it(), g(), j(), M(), pe(), Y = ue(), Pt = de({
        title: {
            id: `chatgpt.connectors.microsoft_oauth_bundle.interstitial.title`,
            defaultMessage: `Choose Microsoft plugins to install`
        },
        description: {
            id: `chatgpt.connectors.microsoft_oauth_bundle.interstitial.description`,
            defaultMessage: `You can revisit this anytime in settings.`
        },
        dataSharingDisclosure: {
            id: `chatgpt.connectors.microsoft_oauth_bundle.interstitial.disclosure.data_sharing`,
            defaultMessage: `ChatGPT may share relevant chats and memories with this plugin to support interactions with it. {connectorName} use of this data is subject to their <termsLink>terms</termsLink> and <privacyPolicyLink>privacy policy</privacyPolicyLink>. You can <learnMoreLink>learn more</learnMoreLink> and <settingsLink>manage your settings</settingsLink>.`
        },
        connectButton: {
            id: `chatgpt.connectors.microsoft_oauth_bundle.interstitial.button.connect`,
            defaultMessage: `Install selected plugins`
        }
    }), Ft = e => {
        "use forget";
        let t = (0, Nt.c)(3),
            {
                Icon: n,
                iconClassName: r
            } = e,
            i;
        return t[0] !== n || t[1] !== r ? (i = (0, Y.jsx)(`div`, {
            className: `bg-token-bg-primary flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl border-[0.5px] shadow-sm`,
            children: (0, Y.jsx)(n, {
                className: r,
                "aria-hidden": !0
            })
        }), t[0] = n, t[1] = r, t[2] = i) : i = t[2], i
    }, It = e => {
        "use forget";
        let t = (0, Nt.c)(27),
            {
                connector: n,
                connectorRows: r,
                isConnecting: i,
                isContinueDisabled: a,
                isEU: o,
                onClose: s,
                onContinue: c,
                tos: u
            } = e,
            d;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Y.jsx)(K, {
            ...Pt.title
        }), t[0] = d) : d = t[0];
        let f = d,
            p = n?.branding?.terms_of_service ?? `https://www.microsoft.com/servicesagreement`,
            m = n?.branding?.privacy_policy ?? `https://privacy.microsoft.com/privacystatement`,
            h = Mt,
            g;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, Y.jsx)(`div`, {
            "aria-hidden": !0,
            className: `pointer-events-none absolute inset-x-0 top-0 h-36 bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-mobile-light.webp')] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] bg-cover bg-top bg-no-repeat [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] sm:h-[217px] sm:bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-desktop-light.webp')] dark:bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-mobile-dark.webp')] dark:sm:bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-desktop-dark.webp')]`
        }), t[1] = g) : g = t[1];
        let _;
        t[2] === s ? _ = t[3] : (_ = (0, Y.jsx)(`div`, {
            className: `absolute end-6 top-6 z-10`,
            children: (0, Y.jsx)(l, {
                onClick: s,
                radius: `full`,
                className: `bg-white/30 dark:bg-black/20`
            })
        }), t[2] = s, t[3] = _);
        let b;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, Y.jsx)(Ft, {
            Icon: y,
            iconClassName: `h-12 w-12`
        }), t[4] = b) : b = t[4];
        let x;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, Y.jsxs)(`div`, {
            className: `flex items-center justify-center gap-3`,
            children: [b, (0, Y.jsxs)(`div`, {
                "aria-hidden": !0,
                className: `flex gap-1`,
                children: [(0, Y.jsx)(`span`, {
                    className: `h-1.5 w-1.5 rounded-full bg-white/75`
                }), (0, Y.jsx)(`span`, {
                    className: `h-1.5 w-1.5 rounded-full bg-white/75`
                }), (0, Y.jsx)(`span`, {
                    className: `h-1.5 w-1.5 rounded-full bg-white/75`
                })]
            }), (0, Y.jsx)(Ft, {
                Icon: ut,
                iconClassName: `h-13 w-13`
            })]
        }), t[5] = x) : x = t[5];
        let S;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (S = te() ? (0, Y.jsx)(_e.Title, {
            className: `text-center text-2xl font-semibold`,
            children: f
        }) : (0, Y.jsx)(C.Title, {
            title: (0, Y.jsx)(`span`, {
                className: `text-2xl font-semibold`,
                children: f
            })
        }), t[6] = S) : S = t[6];
        let w;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, Y.jsxs)(`div`, {
            className: `flex flex-col items-center gap-1 text-center`,
            children: [S, (0, Y.jsx)(`p`, {
                className: `text-token-text-secondary text-base`,
                children: (0, Y.jsx)(K, {
                    ...Pt.description
                })
            })]
        }), t[7] = w) : w = t[7];
        let T;
        t[8] !== n?.name || t[9] !== o || t[10] !== s || t[11] !== m || t[12] !== p || t[13] !== u ? (T = o && (0, Y.jsx)(`p`, {
            className: `text-token-text-secondary text-xs leading-5`,
            children: (0, Y.jsx)(K, {
                ...Pt.dataSharingDisclosure,
                values: {
                    connectorName: n?.name ?? u.genericName,
                    termsLink: e => h(p, e),
                    privacyPolicyLink: e => h(m, e),
                    learnMoreLink: e => h(`https://help.openai.com/en/articles/11487775-apps-in-chatgpt`, e),
                    settingsLink: e => (0, Y.jsx)(`a`, {
                        className: `interactive-label-secondary font-medium`,
                        href: ke,
                        onClick: s,
                        children: e
                    })
                }
            })
        }), t[8] = n?.name, t[9] = o, t[10] = s, t[11] = m, t[12] = p, t[13] = u, t[14] = T) : T = t[14];
        let E = a || i,
            D;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (D = (0, Y.jsx)(K, {
            ...Pt.connectButton
        }), t[15] = D) : D = t[15];
        let O;
        t[16] !== i || t[17] !== c || t[18] !== E ? (O = (0, Y.jsx)(v, {
            type: `button`,
            color: `primary`,
            size: `large`,
            className: `w-full rounded-full`,
            disabled: E,
            loading: i,
            onClick: c,
            children: D
        }), t[16] = i, t[17] = c, t[18] = E, t[19] = O) : O = t[19];
        let k;
        t[20] !== r || t[21] !== O || t[22] !== T ? (k = (0, Y.jsxs)(`div`, {
            className: `relative flex flex-col gap-6 px-6 pt-16 pb-8 sm:px-8`,
            children: [x, w, r, T, O]
        }), t[20] = r, t[21] = O, t[22] = T, t[23] = k) : k = t[23];
        let A;
        return t[24] !== k || t[25] !== _ ? (A = (0, Y.jsxs)(`section`, {
            "data-microsoft-oauth-bundle-interstitial": !0,
            className: `bg-token-bg-primary relative overflow-hidden rounded-t-2xl sm:rounded-2xl`,
            children: [g, _, k]
        }), t[24] = k, t[25] = _, t[26] = A) : A = t[26], A
    }
}));

function Rt(e) {
    return (0, X.jsx)(Ne, {
        href: Dt,
        className: `underline`,
        children: e
    })
}
var zt, Bt, X, Vt, Ht, Ut, Wt = e((() => {
    zt = he(), k(), Et(), c(), Ve(), we(), qe(), Bt = n(me()), pe(), X = ue(), Vt = e => {
        "use forget";
        let t = (0, zt.c)(44),
            {
                value: n,
                onChange: r,
                onClose: i,
                isSaveDisabled: a
            } = e,
            o = a !== void 0 && a,
            [s, c] = (0, Bt.useState)(n),
            u = ge(),
            d;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, X.jsx)(`div`, {
            className: `text-2xl font-semibold`,
            children: (0, X.jsx)(K, {
                ...Ut.advancedSettingsTitle
            })
        }), t[0] = d) : d = t[0];
        let f;
        t[1] === i ? f = t[2] : (f = (0, X.jsxs)(`div`, {
            className: `flex items-start justify-between`,
            children: [d, (0, X.jsx)(l, {
                onClick: i
            })]
        }), t[1] = i, t[2] = f);
        let p;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, X.jsx)(`div`, {
            className: `mt-6 mb-2 text-sm font-medium`,
            children: (0, X.jsx)(K, {
                ...Ut.connectionType
            })
        }), t[3] = p) : p = t[3];
        let m = s ? `sync` : `ondemand`,
            h;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (h = e => c(e === `sync`), t[4] = h) : h = t[4];
        let g;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, X.jsx)(`div`, {
            className: `text-sm font-medium`,
            children: (0, X.jsx)(K, {
                ...Ut.syncTitle
            })
        }), t[5] = g) : g = t[5];
        let _;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, X.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [g, (0, X.jsx)(`div`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, X.jsx)(K, {
                    ...Ut.syncDescription,
                    values: {
                        link: Rt
                    }
                })
            })]
        }), t[6] = _) : _ = t[6];
        let y;
        t[7] === s ? y = t[8] : (y = (0, X.jsxs)(`label`, {
            className: `flex items-start justify-between gap-3 p-4`,
            children: [_, (0, X.jsx)(We, {
                value: `sync`,
                children: (0, X.jsx)(Ht, {
                    selected: s
                })
            })]
        }), t[7] = s, t[8] = y);
        let b;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, X.jsx)(`div`, {
            className: `text-sm font-medium`,
            children: (0, X.jsx)(K, {
                ...Ut.onDemandTitle
            })
        }), t[9] = b) : b = t[9];
        let x;
        t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, X.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [b, (0, X.jsx)(`div`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, X.jsx)(K, {
                    ...Ut.onDemandDescription
                })
            })]
        }), t[10] = x) : x = t[10];
        let S = !s,
            C;
        t[11] === S ? C = t[12] : (C = (0, X.jsxs)(`label`, {
            className: `border-token-border-default flex items-start justify-between gap-3 border-t p-4`,
            children: [x, (0, X.jsx)(We, {
                value: `ondemand`,
                children: (0, X.jsx)(Ht, {
                    selected: S
                })
            })]
        }), t[11] = S, t[12] = C);
        let w;
        t[13] !== C || t[14] !== m || t[15] !== y ? (w = (0, X.jsx)(`div`, {
            className: `mt-2`,
            children: (0, X.jsx)(`div`, {
                className: `border-token-border-default overflow-hidden rounded-xl border`,
                children: (0, X.jsxs)(Oe.Root, {
                    value: m,
                    onValueChange: h,
                    className: `flex w-full flex-col`,
                    children: [y, C]
                })
            })
        }), t[13] = C, t[14] = m, t[15] = y, t[16] = w) : w = t[16];
        let T;
        t[17] !== s || t[18] !== i || t[19] !== n ? (T = () => {
            s !== n && c(n), i()
        }, t[17] = s, t[18] = i, t[19] = n, t[20] = T) : T = t[20];
        let E;
        t[21] === u ? E = t[22] : (E = u.formatMessage(Ut.cancel), t[21] = u, t[22] = E);
        let D;
        t[23] !== T || t[24] !== E ? (D = (0, X.jsx)(v, {
            color: `secondary`,
            onClick: T,
            children: E
        }), t[23] = T, t[24] = E, t[25] = D) : D = t[25];
        let O;
        t[26] !== s || t[27] !== r || t[28] !== i || t[29] !== n ? (O = () => {
            n !== s && r(s), i()
        }, t[26] = s, t[27] = r, t[28] = i, t[29] = n, t[30] = O) : O = t[30];
        let k;
        t[31] === u ? k = t[32] : (k = u.formatMessage(Ut.save), t[31] = u, t[32] = k);
        let A;
        t[33] !== o || t[34] !== O || t[35] !== k ? (A = (0, X.jsx)(v, {
            onClick: O,
            disabled: o,
            children: k
        }), t[33] = o, t[34] = O, t[35] = k, t[36] = A) : A = t[36];
        let j;
        t[37] !== D || t[38] !== A ? (j = (0, X.jsxs)(`div`, {
            className: `mt-auto flex items-center justify-between pt-4`,
            children: [D, A]
        }), t[37] = D, t[38] = A, t[39] = j) : j = t[39];
        let M;
        return t[40] !== w || t[41] !== j || t[42] !== f ? (M = (0, X.jsxs)(`div`, {
            className: `flex flex-1 flex-col p-2`,
            children: [f, p, w, j]
        }), t[40] = w, t[41] = j, t[42] = f, t[43] = M) : M = t[43], M
    }, Ht = ({
        selected: e
    }) => e ? (0, X.jsx)(`button`, {
        className: `flex h-5 w-5 items-center justify-center rounded-full bg-gray-950 p-0.5 dark:bg-white`,
        children: (0, X.jsx)(`div`, {
            className: `h-2 w-2 rounded-full bg-white dark:bg-gray-950`
        })
    }) : (0, X.jsx)(`button`, {
        className: `border-token-border-default h-5 w-5 rounded-full border`
    }), Ut = de({
        advancedSettingsTitle: {
            id: `W24xFG`,
            defaultMessage: `Advanced settings`
        },
        connectionType: {
            id: `GpZZmq`,
            defaultMessage: `Connection type`
        },
        syncTitle: {
            id: `3kK9K9`,
            defaultMessage: `Sync`
        },
        syncDescription: {
            id: `a0q+Sp`,
            defaultMessage: `Automatically syncs, indexes, and stores content to ChatGPT for improved response speed and quality. <link>Learn more</link>`
        },
        onDemandTitle: {
            id: `JSo4N3`,
            defaultMessage: `On demand`
        },
        onDemandDescription: {
            id: `5PZSBI`,
            defaultMessage: `Access content on demand. Responses will take longer and may be lower quality`
        },
        cancel: {
            id: `qz9XeG`,
            defaultMessage: `Cancel`
        },
        save: {
            id: `LXZUd1`,
            defaultMessage: `Save changes`
        }
    })
}));

function Gt(e) {
    "use forget";
    let t = (0, qt.c)(6),
        {
            mode: n,
            side: r,
            isConnectorApproved: i
        } = e,
        a = n === void 0 ? `single` : n,
        o = r === void 0 ? `bottom` : r,
        s = i === void 0 || i;
    if (!(ee(S(Kt)?.planType) && s)) return null;
    let c;
    t[0] === a ? c = t[1] : (c = a === `single` ? (0, Jt.jsx)(K, {
        id: `KadQXN`,
        defaultMessage: `Your admin has approved this app with ChatGPT`
    }) : (0, Jt.jsx)(K, {
        id: `qkYSUR`,
        defaultMessage: `Your admin has approved using these apps with ChatGPT`
    }), t[0] = a, t[1] = c);
    let l;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, Jt.jsxs)(`div`, {
        className: `flex w-full items-center justify-center gap-2 text-sm text-green-500`,
        children: [(0, Jt.jsx)(Xe, {
            className: `icon-sm fill-green-500`
        }), (0, Jt.jsx)(K, {
            id: `anLxXe`,
            defaultMessage: `Approved by your admin`
        })]
    }), t[2] = l) : l = t[2];
    let u;
    return t[3] !== o || t[4] !== c ? (u = (0, Jt.jsx)(D, {
        align: `center`,
        side: o,
        sideOffset: 8,
        alignOffset: 0,
        label: c,
        triggerAs: `div`,
        children: l
    }), t[3] = o, t[4] = c, t[5] = u) : u = t[5], u
}

function Kt() {
    return se()
}
var qt, Jt, Yt = e((() => {
        qt = he(), Ze(), P(), z(), w(), _(), pe(), Jt = ue()
    })),
    Xt = t({
        GoogleRedirectContent: () => dn,
        MainRedirectContent: () => fn,
        MainRedirectContentWrapper: () => gn,
        RedirectContent: () => _n
    });

function Zt(e) {
    let t = le();
    return Z.useMemo(() => {
        if (e) return e;
        let n = t.hash.includes(`?`) ? t.hash.substring(t.hash.indexOf(`?`) + 1) : t.search.substring(1);
        return new URLSearchParams(n).get(`referrer`) ?? void 0
    }, [t.hash, t.search, e])
}

function Qt(e, t) {
    if (t || e.pathname === `/connector-auth`) {
        let n = new URLSearchParams(e.search);
        return t && n.set(nt, t), e.pathname === `/connector-auth` && n.get(`action`) === `connect` && n.set(`connector_action`, `connect`), `${e.pathname}?${n.toString()}${e.hash}`
    }
    return e.hash ? e.pathname + e.hash : e.pathname
}

function $t(e) {
    return e === Ee ? `github_connector` : `connector`
}
var Z, Q, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, $, vn = e((() => {
    re(), o(), St(), jt(), Tt(), Lt(), Be(), je(), Wt(), Ce(), bt(), Fe(), Je(), k(), Et(), B(), c(), Qe(), at(), rt(), ct(), r(), j(), Yt(), d(), ve(), tt(), et(), R(), _t(), b(), He(), ae(), I(), F(), xe(), De(), T(), N(), E(), Z = n(me()), pe(), fe(), pt(), Q = ue(), en = [`OAUTH`, `API_KEY`, `NONE`], tn = (e, t) => t ? {
        genericName: t.generic_name ?? e.name,
        blurbs: t.blurbs ?? []
    } : null, nn = ({
        loading: e,
        fitWidth: t = !1,
        color: n = `primary`,
        contentsFullWidth: r = !1,
        disabled: i = !1,
        onClick: a,
        children: o
    }) => (0, Q.jsx)(v, {
        className: t ? `w-fit` : `w-full`,
        size: `large`,
        onClick: a,
        loading: e,
        disabled: i,
        color: n,
        contentsFullWidth: r,
        children: o
    }), rn = ({
        loading: e = !1,
        disabled: t = !1,
        fitWidth: n = !1,
        onClick: r,
        children: i
    }) => (0, Q.jsx)(v, {
        className: O(`text-token-text-secondary border-0`, n ? `w-fit` : `w-full`),
        size: `large`,
        onClick: r,
        loading: e,
        disabled: t,
        color: `secondary`,
        children: i
    }), an = () => {
        let e = u()?.user;
        return (0, Q.jsxs)(`span`, {
            className: `grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center`,
            children: [(0, Q.jsx)(`span`, {
                className: `col-start-2 min-w-0 text-center`,
                children: (0, Q.jsx)(K, {
                    ...$.continueWithChatGPTButton
                })
            }), (0, Q.jsx)(`span`, {
                className: `pointer-events-none translate-x-1.5 justify-self-end`,
                children: (0, Q.jsx)(ce, {
                    user: e,
                    size: `default`
                })
            })]
        })
    }, on = ({
        connector: e,
        email: t,
        isConnecting: n,
        onBack: r,
        onClose: i,
        onContinue: o
    }) => {
        let s = u()?.user;
        return (0, Q.jsxs)(`div`, {
            className: O(`flex flex-col gap-6`, Re(e) && `p-4`),
            children: [(0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between`,
                children: [(0, Q.jsx)(a, {
                    type: `button`,
                    onClick: r
                }), (0, Q.jsx)(l, {
                    onClick: i
                })]
            }), (0, Q.jsx)(`div`, {
                className: `flex flex-col items-center`,
                children: (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-2.5`,
                    children: [(0, Q.jsx)(Te, {
                        connector: e,
                        className: `rounded-full border-[0.5px] p-2 shadow-sm`,
                        size: `medium`
                    }), (0, Q.jsxs)(`div`, {
                        className: `flex gap-1`,
                        children: [(0, Q.jsx)(`span`, {
                            className: `h-1.5 w-1.5 rounded-full bg-gray-200`
                        }), (0, Q.jsx)(`span`, {
                            className: `h-1.5 w-1.5 rounded-full bg-gray-200`
                        }), (0, Q.jsx)(`span`, {
                            className: `h-1.5 w-1.5 rounded-full bg-gray-200`
                        })]
                    }), (0, Q.jsx)(y, {
                        className: `h-10 w-10`
                    })]
                })
            }), (0, Q.jsxs)(`div`, {
                className: `flex flex-col gap-6`,
                children: [(0, Q.jsxs)(`div`, {
                    className: `text-center`,
                    children: [(0, Q.jsx)(`div`, {
                        className: `text-xl font-medium`,
                        children: (0, Q.jsx)(K, {
                            ...$.siwcConfirmTitle,
                            values: {
                                connectorName: e.name
                            }
                        })
                    }), e.description ? (0, Q.jsx)(`div`, {
                        className: `text-token-text-secondary pt-1 text-sm`,
                        children: e.description
                    }) : null]
                }), (0, Q.jsxs)(`div`, {
                    className: `bg-token-bg-secondary rounded-xl px-5 py-4 text-sm`,
                    children: [(0, Q.jsxs)(`div`, {
                        className: `flex items-center justify-between gap-4 border-b pb-4`,
                        children: [(0, Q.jsx)(`span`, {
                            className: `text-token-text-secondary`,
                            children: (0, Q.jsx)(K, {
                                ...$.siwcNameLabel
                            })
                        }), (0, Q.jsxs)(`span`, {
                            className: `flex items-center gap-2`,
                            children: [(0, Q.jsx)(ce, {
                                user: s,
                                size: `small`
                            }), (0, Q.jsx)(`span`, {
                                children: s?.name
                            })]
                        })]
                    }), (0, Q.jsxs)(`div`, {
                        className: `flex items-center justify-between gap-4 border-b py-4`,
                        children: [(0, Q.jsx)(`span`, {
                            className: `text-token-text-secondary`,
                            children: (0, Q.jsx)(K, {
                                ...$.siwcEmailLabel
                            })
                        }), (0, Q.jsx)(`span`, {
                            children: t ?? s?.email
                        })]
                    }), (0, Q.jsx)(`div`, {
                        className: `text-token-text-secondary pt-4`,
                        children: (0, Q.jsx)(K, {
                            ...$.siwcConfirmDisclosure,
                            values: {
                                connectorName: e.name
                            }
                        })
                    })]
                }), (0, Q.jsxs)(`div`, {
                    className: `flex flex-col gap-2`,
                    children: [(0, Q.jsx)(nn, {
                        loading: n,
                        disabled: n,
                        onClick: o,
                        children: n ? (0, Q.jsx)(K, {
                            ...$.siwcSigningInButton
                        }) : (0, Q.jsx)(K, {
                            ...$.siwcSignInButton
                        })
                    }), (0, Q.jsx)(rn, {
                        disabled: n,
                        onClick: r,
                        children: (0, Q.jsx)(K, {
                            ...$.cancelButton
                        })
                    })]
                })]
            })]
        })
    }, sn = ({
        action: e,
        connector: t,
        referrer: n,
        authType: r,
        launcherAnalytics: i,
        installAttemptId: a
    }) => {
        let o = n ?? `unknown_referrer`;
        e === `connection` && Ke(t.id, Pe.ConnectorLinkContinueClick, {
            auth_type: r ?? ``
        }), q.logModalActionTaken({
            connector_id_metadata: q.createIdMetadataFromConnector(t, o),
            referrer: o,
            action: e,
            authType: r ?? `NONE`,
            launcherAnalytics: i,
            installAttemptId: a
        });
        let s = `connectors.click_continue_modal`,
            c = G.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                stage: `CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED`,
                surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                connectorId: t.id,
                flowCorrelationId: a || void 0,
                modalAction: e === `mfa` ? `CHATGPT_CONNECTORS_LINK_MODAL_ACTION_MFA` : `CHATGPT_CONNECTORS_LINK_MODAL_ACTION_CONNECTION`,
                referrer: n || void 0,
                legacyStatsigEventName: s
            });
        G.logValueEventWithStatsig({
            segmentEventName: s,
            statsigEventName: s,
            eventId: c,
            data: {
                action: e,
                type: t.id,
                ...e === `mfa` && n && {
                    referrer: n
                },
                ...a && {
                    install_attempt_id: a
                }
            }
        })
    }, cn = ({
        connector: e,
        tos: t,
        onClose: n,
        children: r,
        beforeBlurbs: i,
        willSync: a = !1,
        hideHeaderIcons: o = !1,
        useGoogleOAuthBundleCopy: s = !1,
        googleOAuthBundlePresentation: c
    }) => {
        let l = ge(),
            u = {
                title: l.formatMessage($.syncTitle),
                description: l.formatMessage($.syncDescription, {
                    connectorName: e.name,
                    link: e => `[${e}](${Dt})`
                })
            },
            d = A[e.id],
            p = d === h.GMAIL_CONNECTOR || d === h.GCAL_CONNECTOR,
            m = a && t && !p ? [u, ...t.blurbs] : t?.blurbs,
            g = d != null && f.has(d),
            _ = e.status === `DISABLED_BY_ADMIN`;
        return (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-6`,
            children: [(0, Q.jsxs)(`div`, {
                children: [(0, Q.jsx)(Ie, {
                    onClose: n,
                    connectorIcon: s ? c?.connectorIcons ?? (0, Q.jsx)(`div`, {
                        className: `bg-token-bg-primary flex h-11 w-11 items-center justify-center rounded-xl border-[0.5px] shadow-sm`,
                        children: (0, Q.jsx)(st, {
                            className: `h-8 w-8`,
                            "aria-hidden": !0
                        })
                    }) : (0, Q.jsx)(Te, {
                        connector: e,
                        className: `rounded-xl border-[0.5px] p-2 shadow-sm`,
                        size: `medium`
                    }),
                    connectorDeveloper: e.branding?.developer ?? void 0,
                    title: (0, Q.jsx)(K, {
                        ...$.addConnectorLinkModalTitle,
                        values: {
                            connectorName: c?.connectorName ?? e.name
                        }
                    }),
                    hideAvatarRow: o
                }), g ? null : (0, Q.jsx)(`div`, {
                    className: `mt-3`,
                    children: (0, Q.jsx)(Gt, {
                        mode: `single`,
                        side: `bottom`,
                        isConnectorApproved: !_
                    })
                })]
            }), i, (0, Q.jsx)(Ct, {
                blurbs: m
            }), r]
        })
    }, ln = ({
        connector: e,
        tos: t,
        onClose: n,
        useGoogleOAuthBundleCopy: r = !1,
        googleOAuthBundlePresentation: i
    }) => r ? (0, Q.jsxs)(`div`, {
        "aria-busy": !0,
        className: `flex flex-col gap-6`,
        "data-testid": `bundled-consent-loading-placeholder`,
        children: [(0, Q.jsxs)(`div`, {
            className: `flex items-start justify-between`,
            children: [(0, Q.jsx)(`div`, {
                className: `bg-token-bg-tertiary h-11 w-11 animate-pulse rounded-xl motion-reduce:animate-none`
            }), (0, Q.jsx)(l, {
                onClick: n
            })]
        }), (0, Q.jsx)(`div`, {
            className: `flex flex-col`,
            children: (0, Q.jsx)(Se, {
                lines: 2,
                size: `lg`,
                width: 70,
                widthVariance: 20
            })
        }), (0, Q.jsx)(`div`, {
            className: `flex flex-col`,
            children: (0, Q.jsx)(Se, {
                lines: 7,
                size: `base`,
                width: 80,
                widthVariance: 20
            })
        }), (0, Q.jsx)(`div`, {
            className: `bg-token-bg-tertiary h-11 w-full animate-pulse rounded-full motion-reduce:animate-none`
        })]
    }) : Re(e) ? (0, Q.jsx)(At, {
        blurbs: t?.blurbs ?? null,
        connector: e,
        primaryActions: (0, Q.jsx)(nn, {
            loading: !0,
            onClick: () => {}
        }),
        onClose: n
    }) : (0, Q.jsx)(cn, {
        connector: e,
        tos: t,
        onClose: n,
        useGoogleOAuthBundleCopy: r,
        googleOAuthBundlePresentation: i,
        children: (0, Q.jsx)(nn, {
            loading: !0,
            onClick: () => {}
        })
    }), un = ({
        connector: e,
        tos: t,
        onClose: n,
        retry: r,
        useGoogleOAuthBundleCopy: i = !1,
        googleOAuthBundlePresentation: a
    }) => (0, Q.jsx)(cn, {
        connector: e,
        tos: t,
        onClose: n,
        useGoogleOAuthBundleCopy: i,
        googleOAuthBundlePresentation: a,
        children: (0, Q.jsx)(`div`, {
            className: `flex items-center justify-center pt-4`,
            children: (0, Q.jsx)(v, {
                onClick: r,
                size: `large`,
                className: `w-full`,
                children: (0, Q.jsx)(K, {
                    ...$.errorLoadingStateButton
                })
            })
        })
    }), dn = ({
        connectorIcon: e,
        connectorName: t,
        connectorId: n,
        onClose: r,
        isConnecting: i,
        onContinue: a,
        productSku: o
    }) => {
        let {
            data: s,
            isLoading: c,
            isError: l,
            refetch: u
        } = ft(n, o), d = s?.blurbs ?? [], f = s?.generic_name ?? `Google`;
        return (0, Q.jsxs)(Q.Fragment, {
            children: [(0, Q.jsx)(Ie, {
                onClose: r,
                connectorIcon: e,
                title: (0, Q.jsx)(K, {
                    ...$.addConnectorLinkModalTitle,
                    values: {
                        connectorName: t
                    }
                })
            }), c ? (0, Q.jsx)(`div`, {
                className: `flex items-center justify-center p-4`,
                children: (0, Q.jsx)(V, {})
            }) : l ? (0, Q.jsx)(`div`, {
                className: `flex items-center justify-center pt-4`,
                children: (0, Q.jsx)(v, {
                    onClick: () => void u(),
                    size: `large`,
                    className: `w-full`,
                    children: (0, Q.jsx)(K, {
                        ...$.errorLoadingStateButton
                    })
                })
            }) : d.length > 0 ? (0, Q.jsx)(Ct, {
                blurbs: d
            }) : null, (0, Q.jsx)(`div`, {
                className: `pt-4`,
                children: (0, Q.jsx)(nn, {
                    loading: i,
                    onClick: a,
                    children: (0, Q.jsx)(K, {
                        ...$.continueButton,
                        values: {
                            connectorName: f
                        }
                    })
                })
            })]
        })
    }, fn = ({
        connector: e,
        tos: t,
        onClose: n,
        isConnecting: r,
        connectingAction: a,
        onContinue: o,
        authTypeOverride: s,
        showExternalIcon: c,
        additionalContent: l,
        footerContent: u,
        additionalMessageThatDoesNotContainLegalClaims: d,
        canSync: f = !1,
        isRequestingSync: m = !1,
        setIsRequestingSync: h,
        isContinueDisabled: g = !1,
        siwcLoginAvailable: _ = !1,
        isSiwcLoginDisabled: v = !1,
        hideHeaderIcons: y = !1,
        referrerOverride: b,
        launcherAnalytics: x,
        installAttemptId: S,
        requireAuth: C = !1,
        useGoogleOAuthBundleCopy: w = !1,
        googleOAuthBundlePresentation: T
    }) => {
        let E = i() && p(`2792858552`),
            D = Ae(),
            O = Zt(b),
            k = s ?? D,
            A = C && k === `NONE` ? void 0 : k,
            j = Ue(e, A),
            M = e.status === `DISABLED_BY_ADMIN`,
            ee = g || M,
            N = ee || r,
            P = e => r && (a === void 0 || a === e),
            F = M ? (0, Q.jsx)(K, {
                ...$.workspaceAdminApprovalRequired,
                values: {
                    connectorName: e.name
                }
            }) : void 0,
            I = (0, Z.useRef)(null);
        (0, Z.useEffect)(() => {
            if (I.current?.connectorId === e.id && I.current.installAttemptId === S) return;
            I.current = {
                connectorId: e.id,
                installAttemptId: S
            }, q.logModalShown({
                connector_id_metadata: q.createIdMetadataFromConnector(e, O ?? `unknown_referrer`),
                referrer: O ?? `unknown_referrer`,
                mfaState: `not_required`,
                authType: j ?? void 0,
                launcherAnalytics: x,
                installAttemptId: S
            });
            let t = `connectors.shown_connect_modal`,
                n = G.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: S || void 0,
                    mfaState: `CHATGPT_CONNECTORS_LINK_MODAL_MFA_STATE_NOT_REQUIRED`,
                    referrer: O || void 0,
                    legacyStatsigEventName: t
                });
            G.logValueEventWithStatsig({
                segmentEventName: t,
                statsigEventName: t,
                eventId: n,
                data: {
                    mfa: `not_required`,
                    type: e.id,
                    ...O && {
                        referrer: O
                    },
                    ...S && {
                        install_attempt_id: S
                    }
                }
            })
        }, [e, S, x, O, j]);
        let L = (t, n = !1) => {
                if (M) return;
                let r = B ? t : j;
                o(t, n, () => sn({
                    action: `connection`,
                    connector: e,
                    referrer: O ?? `unknown_referrer`,
                    authType: r ?? void 0,
                    launcherAnalytics: x,
                    installAttemptId: S
                }))
            },
            {
                supported_auth: R
            } = e,
            z = en.filter(e => C && e === `NONE` ? !1 : R.some(t => t.type === e)),
            B = E && !A && z.length > 1,
            V = _ && !M && (B ? z.includes(`OAUTH`) : j === `OAUTH`),
            U = [{
                key: `admin`,
                content: M ? (0, Q.jsx)(K, {
                    ...$.connectorDisabledByAdmin,
                    values: {
                        connectorName: e.name,
                        a: t => (0, Q.jsx)(`a`, {
                            href: H(e.id),
                            target: `_blank`,
                            rel: `noreferrer`,
                            className: `font-semibold underline`,
                            children: t
                        })
                    }
                }) : void 0
            }, {
                key: `additional`,
                content: M ? void 0 : d
            }].filter(({
                content: e
            }) => e),
            W = U.length > 0 ? (0, Q.jsx)(`div`, {
                className: `flex flex-col gap-2`,
                children: U.map(({
                    key: e,
                    content: t
                }) => (0, Q.jsx)(`div`, {
                    className: `bg-token-interactive-bg-accent-muted-context rounded-xl p-4 text-center text-sm text-[#0285FF]`,
                    children: t
                }, e))
            }) : void 0,
            [te, ne] = (0, Z.useState)(!1),
            [re, ae] = (0, Z.useState)(!1),
            se = Re(e),
            ce = se && !V,
            le = w ? T?.oauthConnectorName ?? t.genericName : e.name,
            {
                country: ue
            } = ie(),
            de = ue != null && oe.has(ue),
            fe = (0, Q.jsx)(an, {}),
            pe = (0, Q.jsxs)(Q.Fragment, {
                children: [V ? (0, Q.jsx)(nn, {
                    loading: P(`SIWC`) || v,
                    disabled: N || v,
                    onClick: () => L(`OAUTH`, !0),
                    contentsFullWidth: !0,
                    children: fe
                }) : null, V && se && !re ? (0, Q.jsx)(`button`, {
                    className: `text-token-text-primary text-sm underline`,
                    onClick: () => ae(!0),
                    children: (0, Q.jsx)(K, {
                        ...$.useDifferentMethodButton
                    })
                }) : null, V && se && re ? (0, Q.jsxs)(`div`, {
                    className: `text-token-text-secondary flex items-center gap-3 text-sm`,
                    children: [(0, Q.jsx)(`span`, {
                        className: `bg-token-border-default h-px flex-1`
                    }), (0, Q.jsx)(K, {
                        ...$.useDifferentMethodButton
                    }), (0, Q.jsx)(`span`, {
                        className: `bg-token-border-default h-px flex-1`
                    })]
                }) : null, (!V || !se || re) && z.map((t, n) => {
                    let r = (0, Q.jsxs)(`span`, {
                        className: `flex items-center justify-center gap-1`,
                        children: [t === `OAUTH` ? se ? (0, Q.jsx)(K, {
                            ...$.signInWithButton,
                            values: {
                                connectorName: e.name
                            }
                        }) : (0, Q.jsx)(K, {
                            ...$.continueButton,
                            values: {
                                connectorName: le
                            }
                        }) : t === `API_KEY` ? (0, Q.jsx)(K, {
                            ...$.useApiKeyButton
                        }) : (0, Q.jsx)(K, {
                            ...$.connectWithoutAccountButton
                        }), t === `OAUTH` && c ? (0, Q.jsx)(Ye, {
                            className: `icon-sm`
                        }) : null]
                    });
                    return n === 0 && !V ? (0, Q.jsx)(nn, {
                        fitWidth: ce,
                        loading: P(t),
                        disabled: N,
                        onClick: () => L(t),
                        children: r
                    }, t) : (0, Q.jsx)(rn, {
                        fitWidth: ce,
                        loading: P(t),
                        disabled: N,
                        onClick: () => L(t),
                        children: r
                    }, t)
                }), de && (0, Q.jsx)(rn, {
                    fitWidth: ce,
                    onClick: n,
                    disabled: r,
                    children: (0, Q.jsx)(`span`, {
                        className: `flex items-center justify-center gap-1`,
                        children: (0, Q.jsx)(K, {
                            id: `IwBFou`,
                            defaultMessage: `Cancel`
                        })
                    })
                })]
            }),
            me = (0, Q.jsxs)(Q.Fragment, {
                children: [V ? (0, Q.jsx)(nn, {
                    loading: P(`SIWC`) || v,
                    disabled: N || v,
                    onClick: () => L(`OAUTH`, !0),
                    contentsFullWidth: !0,
                    children: fe
                }) : null, V ? (0, Q.jsx)(rn, {
                    loading: P(j),
                    disabled: N,
                    onClick: () => L(j),
                    children: (0, Q.jsxs)(`span`, {
                        className: `flex items-center justify-center gap-1`,
                        children: [se ? (0, Q.jsx)(K, {
                            ...$.signInWithButton,
                            values: {
                                connectorName: e.name
                            }
                        }) : (0, Q.jsx)(K, {
                            ...$.continueButton,
                            values: {
                                connectorName: le
                            }
                        }), c && (0, Q.jsx)(Ye, {
                            className: `icon-sm`
                        })]
                    })
                }) : (0, Q.jsx)(nn, {
                    fitWidth: ce,
                    loading: P(j),
                    disabled: N,
                    onClick: () => L(j),
                    children: (0, Q.jsxs)(`span`, {
                        className: `flex items-center justify-center gap-1`,
                        children: [j === `OAUTH` ? se ? (0, Q.jsx)(K, {
                            ...$.signInWithButton,
                            values: {
                                connectorName: e.name
                            }
                        }) : (0, Q.jsx)(K, {
                            ...$.continueButton,
                            values: {
                                connectorName: le
                            }
                        }) : j === `API_KEY` ? (0, Q.jsx)(K, {
                            ...$.connectButton,
                            values: {
                                connectorName: e.name
                            }
                        }) : se ? (0, Q.jsx)(K, {
                            id: `yWpEzd`,
                            defaultMessage: `Connect`
                        }) : (0, Q.jsx)(K, {
                            ...$.connectButton,
                            values: {
                                connectorName: e.name
                            }
                        }), j === `OAUTH` && c && (0, Q.jsx)(Ye, {
                            className: `icon-sm`
                        })]
                    })
                }), de && (0, Q.jsx)(rn, {
                    fitWidth: ce,
                    onClick: n,
                    disabled: r,
                    children: (0, Q.jsx)(`span`, {
                        className: `flex items-center justify-center gap-1`,
                        children: (0, Q.jsx)(K, {
                            id: `IwBFou`,
                            defaultMessage: `Cancel`
                        })
                    })
                })]
            });
        if (te && h && !r) return (0, Q.jsx)(Vt, {
            value: m,
            onChange: h,
            onClose: () => ne(!1)
        });
        if (T?.hasCompanionConnectors && l && !se) return (0, Q.jsx)(T.oauthBundleProvider === `microsoft` ? It : wt, {
            connector: e,
            connectorRows: l,
            isConnecting: r,
            isContinueDisabled: ee,
            isEU: de,
            onClose: n,
            onContinue: () => L(j),
            tos: t
        });
        if (se) {
            let i = (0, Q.jsxs)(Q.Fragment, {
                children: [B ? pe : me, f && (0, Q.jsx)(rn, {
                    fitWidth: ce,
                    onClick: () => ne(!0),
                    disabled: r,
                    children: (0, Q.jsx)(K, {
                        id: `qAio8L`,
                        defaultMessage: `Advanced settings`
                    })
                })]
            });
            return (0, Q.jsx)(At, {
                blurbs: t.blurbs,
                connector: e,
                primaryActions: i,
                additionalContent: l,
                footerContent: u,
                primaryActionMessage: F,
                stackPrimaryActions: V || l != null,
                onClose: n
            })
        }
        return (0, Q.jsx)(Q.Fragment, {
            children: (0, Q.jsx)(cn, {
                connector: e,
                tos: t,
                onClose: n,
                beforeBlurbs: W,
                willSync: m,
                hideHeaderIcons: y,
                useGoogleOAuthBundleCopy: w,
                googleOAuthBundlePresentation: T,
                children: (0, Q.jsxs)(`div`, {
                    className: `flex flex-col gap-2`,
                    children: [u, l, B ? pe : me, f && (0, Q.jsx)(`p`, {
                        className: `text-token-text-secondary text-center text-sm font-medium`,
                        children: (0, Q.jsx)(rn, {
                            onClick: () => ne(!0),
                            disabled: r,
                            children: (0, Q.jsx)(K, {
                                id: `qAio8L`,
                                defaultMessage: `Advanced settings`
                            })
                        })
                    })]
                })
            })
        })
    }, pn = ({
        connector: e,
        tos: t,
        onClose: n,
        authTypeOverride: r,
        referrerOverride: i,
        launcherAnalytics: a,
        installAttemptId: o,
        onConsentAction: s,
        onPrepareMfaEnrollment: c,
        useGoogleOAuthBundleCopy: l = !1,
        googleOAuthBundlePresentation: u
    }) => {
        let d = Qt(le(), o),
            f = Zt(i),
            p = Ue(e, r),
            m = (0, Z.useRef)(null);
        (0, Z.useEffect)(() => () => {
            m.current = null
        }, []), (0, Z.useEffect)(() => {
            q.logModalShown({
                connector_id_metadata: q.createIdMetadataFromConnector(e, f ?? `unknown_referrer`),
                referrer: f ?? `unknown_referrer`,
                mfaState: `required`,
                authType: p ?? void 0,
                launcherAnalytics: a,
                installAttemptId: o
            });
            let t = `connectors.shown_connect_modal`,
                n = G.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: o || void 0,
                    mfaState: `CHATGPT_CONNECTORS_LINK_MODAL_MFA_STATE_REQUIRED`,
                    referrer: f || void 0,
                    legacyStatsigEventName: t
                });
            G.logValueEventWithStatsig({
                segmentEventName: t,
                statsigEventName: t,
                eventId: n,
                data: {
                    mfa: `required`,
                    type: e.id,
                    ...f && {
                        referrer: f
                    },
                    ...o && {
                        install_attempt_id: o
                    }
                }
            })
        }, [e, o, a, f, p]);
        let h = () => {
            s?.(`mfa`), q.logModalActionTaken({
                connector_id_metadata: q.createIdMetadataFromConnector(e, f ?? `unknown_referrer`),
                referrer: f ?? `unknown_referrer`,
                action: `mfa`,
                authType: p ?? `NONE`,
                launcherAnalytics: a,
                installAttemptId: o
            });
            let t = `connectors.click_continue_modal`,
                n = G.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: o || void 0,
                    modalAction: `CHATGPT_CONNECTORS_LINK_MODAL_ACTION_MFA`,
                    referrer: f || void 0,
                    legacyStatsigEventName: t
                });
            G.logValueEventWithStatsig({
                segmentEventName: t,
                statsigEventName: t,
                eventId: n,
                data: {
                    action: `mfa`,
                    type: e.id,
                    ...f && {
                        referrer: f
                    },
                    ...o && {
                        install_attempt_id: o
                    }
                }
            });
            let r = t => {
                    ne(vt, {
                        redirectUrl: t?.redirectUrl ?? d,
                        source: $t(e.id),
                        ...t ? {
                            onSelectFactor: t.onSelectFactor,
                            onClose: t.onClose
                        } : {}
                    })
                },
                i = c?.();
            if (i instanceof Promise) {
                m.current = i, i.then(e => {
                    m.current === i && (m.current = null, r(e))
                });
                return
            }
            m.current = null, r(i)
        };
        return (0, Q.jsxs)(cn, {
            connector: e,
            tos: t,
            onClose: n,
            useGoogleOAuthBundleCopy: l,
            googleOAuthBundlePresentation: u,
            children: [(0, Q.jsx)(`div`, {
                className: `pt-2`
            }), (0, Q.jsx)(`div`, {
                className: `border-token-border-default border-t p-4`,
                children: (0, Q.jsx)(`div`, {
                    className: `text-token-text-primary font-medium`,
                    children: (0, Q.jsx)(K, {
                        ...$.mfaRequiredTitle
                    })
                })
            }), (0, Q.jsx)(nn, {
                loading: !1,
                onClick: h,
                children: (0, Q.jsx)(K, {
                    ...$.mfaRequiredButton
                })
            })]
        })
    }, mn = {
        [s.Google]: {
            icon: (0, Q.jsx)(st, {}),
            name: `Google`
        },
        [s.Microsoft]: {
            icon: (0, Q.jsx)(lt, {}),
            name: `Microsoft`
        },
        [s.Apple]: {
            icon: (0, Q.jsx)(ot, {}),
            name: `Apple`
        }
    }, hn = ({
        connector: e,
        tos: t,
        onClose: n,
        isConnecting: r,
        connectingAction: i,
        onContinue: a,
        authTypeOverride: o,
        showExternalIcon: c,
        additionalContent: l,
        footerContent: u,
        additionalMessageThatDoesNotContainLegalClaims: d,
        canSync: f,
        isRequestingSync: p,
        setIsRequestingSync: m,
        siwcLoginAvailable: h = !1,
        isSiwcLoginDisabled: g = !1,
        isContinueDisabled: _ = !1,
        hideHeaderIcons: v = !1,
        referrerOverride: y,
        launcherAnalytics: b,
        installAttemptId: x,
        onConsentAction: S,
        requireAuth: C = !1,
        progressiveManagedAuth: w = !1,
        useGoogleOAuthBundleCopy: T = !1,
        googleOAuthBundlePresentation: E
    }) => {
        let {
            connectionType: D,
            ssoConnectionId: O
        } = W(), [k, A] = (0, Z.useState)(!1), j = !w || k, M = e.status === `DISABLED_BY_ADMIN`, ee = Qt(le(), x), N = Zt(y), P = Ue(e, o), F = j && _ || M || r, I = e => r && (i === void 0 || i === e), L = (0, Z.useRef)(null);
        (0, Z.useEffect)(() => {
            if (L.current?.connectorId === e.id && L.current.installAttemptId === x) return;
            L.current = {
                connectorId: e.id,
                installAttemptId: x
            }, q.logModalShown({
                connector_id_metadata: q.createIdMetadataFromConnector(e, N ?? `unknown_referrer`),
                referrer: N ?? `unknown_referrer`,
                mfaState: `suggested`,
                authType: P ?? `NONE`,
                launcherAnalytics: b,
                installAttemptId: x
            });
            let t = `connectors.shown_connect_modal`,
                n = G.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: x || void 0,
                    mfaState: `CHATGPT_CONNECTORS_LINK_MODAL_MFA_STATE_SUGGESTED`,
                    referrer: N || void 0,
                    legacyStatsigEventName: t
                });
            G.logValueEventWithStatsig({
                segmentEventName: t,
                statsigEventName: t,
                eventId: n,
                data: {
                    mfa: `suggested`,
                    type: e.id,
                    ...N && {
                        referrer: N
                    },
                    ...x && {
                        install_attempt_id: x
                    }
                }
            })
        }, [e, x, b, N, P]);
        let R = () => {
                S?.(`mfa`), q.logModalActionTaken({
                    connector_id_metadata: q.createIdMetadataFromConnector(e, N ?? `unknown_referrer`),
                    referrer: N ?? `unknown_referrer`,
                    action: `mfa`,
                    authType: P ?? `NONE`,
                    launcherAnalytics: b,
                    installAttemptId: x
                });
                let t = `connectors.click_continue_modal`,
                    n = G.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                        stage: `CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED`,
                        surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                        connectorId: e.id,
                        flowCorrelationId: x || void 0,
                        modalAction: `CHATGPT_CONNECTORS_LINK_MODAL_ACTION_MFA`,
                        referrer: N || void 0,
                        legacyStatsigEventName: t
                    });
                G.logValueEventWithStatsig({
                    segmentEventName: t,
                    statsigEventName: t,
                    eventId: n,
                    data: {
                        action: `mfa`,
                        type: e.id,
                        ...N && {
                            referrer: N
                        },
                        ...x && {
                            install_attempt_id: x
                        }
                    }
                }), ne(vt, {
                    redirectUrl: ee,
                    source: $t(e.id)
                })
            },
            z = (t = !1) => {
                if (!j) {
                    A(!0);
                    return
                }
                _ || M || a(t ? `OAUTH` : P, t, () => sn({
                    action: `mfa`,
                    connector: e,
                    referrer: N,
                    authType: P ?? void 0,
                    launcherAnalytics: b,
                    installAttemptId: x
                }))
            },
            B = mn[D],
            V = D === s.Microsoft && !!O;
        if (!B || V) return (0, Q.jsx)(fn, {
            connector: e,
            onClose: n,
            tos: t,
            isConnecting: r,
            connectingAction: i,
            onContinue: a,
            authTypeOverride: o,
            showExternalIcon: c,
            additionalContent: l,
            footerContent: u,
            additionalMessageThatDoesNotContainLegalClaims: d,
            canSync: f,
            isRequestingSync: p,
            setIsRequestingSync: m,
            siwcLoginAvailable: h,
            isSiwcLoginDisabled: g,
            isContinueDisabled: _,
            hideHeaderIcons: v,
            referrerOverride: y,
            launcherAnalytics: b,
            installAttemptId: x,
            requireAuth: C,
            useGoogleOAuthBundleCopy: T,
            googleOAuthBundlePresentation: E
        });
        let {
            icon: H,
            name: U
        } = B, te = h && !M && P === `OAUTH`, re = (0, Q.jsx)(an, {}), ie = T ? E?.oauthConnectorName ?? t.genericName : e.name;
        return (0, Q.jsxs)(cn, {
            connector: e,
            tos: t,
            onClose: n,
            useGoogleOAuthBundleCopy: T,
            googleOAuthBundlePresentation: E,
            children: [(0, Q.jsxs)(`div`, {
                className: `border-token-border-default flex items-center gap-4 rounded-xl border p-4 text-sm`,
                children: [(0, Q.jsx)(`div`, {
                    className: `text-token-text-primary`,
                    children: H
                }), (0, Q.jsxs)(`div`, {
                    className: `flex flex-col`,
                    children: [(0, Q.jsx)(`div`, {
                        className: `text-token-text-primary font-medium`,
                        children: (0, Q.jsx)(K, {
                            ...$.socialLoginTitle,
                            values: {
                                socialProvider: U
                            }
                        })
                    }), (0, Q.jsx)(`div`, {
                        className: `text-token-text-secondary`,
                        children: (0, Q.jsx)(K, {
                            ...$.socialLoginDescription,
                            values: {
                                socialProvider: U,
                                link: e => (0, Q.jsx)(`button`, {
                                    onClick: R,
                                    className: `underline`,
                                    children: e
                                })
                            }
                        })
                    })]
                })]
            }), (0, Q.jsx)(`div`, {
                className: `pt-6`,
                children: (0, Q.jsxs)(`div`, {
                    className: `flex flex-col gap-2`,
                    children: [j ? d : null, j ? u : null, j ? l : null, te ? (0, Q.jsx)(nn, {
                        loading: I(`SIWC`) || g,
                        disabled: F || g,
                        onClick: () => z(!0),
                        contentsFullWidth: !0,
                        children: re
                    }) : null, te ? (0, Q.jsxs)(rn, {
                        loading: I(P),
                        disabled: F,
                        onClick: () => z(),
                        children: [(0, Q.jsx)(K, {
                            ...$.continueButton,
                            values: {
                                connectorName: ie
                            }
                        }), P === `OAUTH` && c ? (0, Q.jsx)(Ye, {
                            className: `icon-sm`
                        }) : null]
                    }) : (0, Q.jsxs)(nn, {
                        loading: I(P),
                        disabled: F,
                        onClick: () => z(),
                        children: [(0, Q.jsx)(K, {
                            ...$.continueButton,
                            values: {
                                connectorName: ie
                            }
                        }), P === `OAUTH` && c ? (0, Q.jsx)(Ye, {
                            className: `icon-sm`
                        }) : null]
                    })]
                })
            })]
        })
    }, gn = ({
        connector: e,
        onClose: t,
        isConnecting: n,
        connectingAction: r,
        onContinue: i,
        authTypeOverride: a,
        showExternalIcon: o,
        additionalContent: s,
        footerContent: c,
        additionalMessageThatDoesNotContainLegalClaims: l,
        canSync: u,
        isRequestingSync: d,
        setIsRequestingSync: f,
        isContinueDisabled: p = !1,
        siwcLoginAvailable: m = !1,
        isSiwcLoginDisabled: h = !1,
        hideHeaderIcons: g = !1,
        referrerOverride: _,
        launcherAnalytics: v,
        installAttemptId: y,
        requireAuth: b = !1,
        requireFreshConsent: x = !1,
        hideAuthRedirectBlurb: S = !1,
        progressiveManagedAuth: C = !1,
        onConsentAction: w,
        onPrepareMfaEnrollment: T,
        onConsentShown: E,
        consentVisibility: D,
        useGoogleOAuthBundleCopy: O = !1,
        googleOAuthBundlePresentation: k
    }) => {
        let {
            data: A,
            isLoading: j,
            isError: M,
            isPlaceholderData: ee,
            isFetching: N,
            refetch: P
        } = dt(), F = ee || x && N, I = (...e) => {
            x && (j || F || M || A == null || p) || i(...e)
        }, L = tn(e, A), R = S && L ? {
            ...L,
            blurbs: L.blurbs.filter(e => e.icon !== `external_link`)
        } : L, {
            status: z,
            retry: B
        } = yt(e.id), {
            status: V,
            retry: H
        } = $e({
            enabled: z === `required` || z === `suggested`
        }), U = Qt(le(), y), W = !j && !F && !M && R != null && V !== `loading` && z !== `loading` && (!O || !p) && (V === `enabled` || z === `not_required` || z === `required` || z === `suggested`);
        (0, Z.useEffect)(() => {
            W && E?.()
        }, [W, E]);
        let te = (0, Z.useRef)(!1);
        return (0, Z.useEffect)(() => {
            let e = D?.target.current;
            if (!(!D || !W || !e || te.current)) return be(e, () => {
                te.current || (te.current = !0, D.onVisible())
            })
        }, [D, W]), gt({
            enabled: () => z === `required` || z === `suggested`,
            redirectUrl: U,
            source: $t(e.id)
        }), O && (j || V === `loading` || z === `loading` || p) || j ? (0, Q.jsx)(ln, {
            connector: e,
            tos: R,
            onClose: t,
            useGoogleOAuthBundleCopy: O,
            googleOAuthBundlePresentation: k
        }) : M || !R ? (0, Q.jsx)(un, {
            connector: e,
            tos: R,
            onClose: t,
            retry: () => {
                P(), H(), B()
            },
            useGoogleOAuthBundleCopy: O,
            googleOAuthBundlePresentation: k
        }) : V === `loading` || z === `loading` ? (0, Q.jsx)(ln, {
            connector: e,
            tos: R,
            onClose: t,
            useGoogleOAuthBundleCopy: O,
            googleOAuthBundlePresentation: k
        }) : V === `enabled` || z === `not_required` ? (0, Q.jsx)(fn, {
            connector: e,
            tos: R,
            onClose: t,
            isConnecting: n,
            connectingAction: r,
            onContinue: I,
            authTypeOverride: a,
            showExternalIcon: o,
            additionalContent: s,
            footerContent: c,
            additionalMessageThatDoesNotContainLegalClaims: l,
            canSync: u,
            isRequestingSync: d,
            setIsRequestingSync: f,
            isContinueDisabled: p || F,
            siwcLoginAvailable: m,
            isSiwcLoginDisabled: h,
            hideHeaderIcons: g,
            referrerOverride: _,
            launcherAnalytics: v,
            installAttemptId: y,
            requireAuth: b,
            useGoogleOAuthBundleCopy: O,
            googleOAuthBundlePresentation: k
        }) : z === `required` ? (0, Q.jsx)(pn, {
            connector: e,
            tos: R,
            onClose: t,
            authTypeOverride: a,
            referrerOverride: _,
            launcherAnalytics: v,
            installAttemptId: y,
            onConsentAction: w,
            onPrepareMfaEnrollment: T,
            useGoogleOAuthBundleCopy: O,
            googleOAuthBundlePresentation: k
        }) : z === `suggested` ? (0, Q.jsx)(hn, {
            connector: e,
            tos: R,
            onClose: t,
            isConnecting: n,
            connectingAction: r,
            onContinue: I,
            authTypeOverride: a,
            showExternalIcon: o,
            additionalContent: s,
            footerContent: c,
            additionalMessageThatDoesNotContainLegalClaims: l,
            canSync: u,
            isRequestingSync: d,
            setIsRequestingSync: f,
            siwcLoginAvailable: m,
            isSiwcLoginDisabled: h,
            isContinueDisabled: p || F,
            hideHeaderIcons: g,
            referrerOverride: _,
            launcherAnalytics: v,
            installAttemptId: y,
            onConsentAction: w,
            requireAuth: b,
            progressiveManagedAuth: C,
            useGoogleOAuthBundleCopy: O,
            googleOAuthBundlePresentation: k
        }) : (0, Q.jsx)(un, {
            connector: e,
            tos: R,
            onClose: t,
            retry: () => {
                H(), B(), P()
            },
            useGoogleOAuthBundleCopy: O,
            googleOAuthBundlePresentation: k
        })
    }, _n = ({
        connector: e,
        onClose: t,
        isConnecting: n,
        connectingAction: r,
        onContinue: i,
        onBeforeSiwcConfirm: a,
        authTypeOverride: o,
        showExternalIcon: s,
        productSku: c,
        additionalContent: l,
        footerContent: u,
        additionalMessageThatDoesNotContainLegalClaims: d,
        canSync: f,
        isRequestingSync: p,
        setIsRequestingSync: m,
        isContinueDisabled: h = !1,
        hideHeaderIcons: g = !1,
        referrerOverride: _,
        launcherAnalytics: v,
        installAttemptId: y,
        enableSiwcLogin: b = !1,
        requireAuth: x = !1,
        requireFreshConsent: S = !1,
        hideAuthRedirectBlurb: C = !1,
        progressiveManagedAuth: w = !1,
        onConsentAction: T,
        onPrepareMfaEnrollment: E,
        onConsentShown: D,
        consentVisibility: O,
        useGoogleOAuthBundleCopy: k = !1,
        useGoogleOAuthBundleTosCopy: A = k,
        googleOAuthBundlePresentation: j
    }) => {
        let M = (0, Z.useRef)(!1),
            ee = (0, Z.useCallback)(() => {
                M.current || !D || (M.current = !0, D())
            }, [D]),
            N = ye(),
            P = _ ?? N ?? `unknown_referrer`,
            F = () => {
                let n = G.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_CANCELLED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: y || void 0,
                    legacyStatsigEventName: `connectors.modal_action_taken`
                });
                q.logModalActionTaken({
                    connector_id_metadata: q.createIdMetadataFromConnector(e, P),
                    referrer: P,
                    action: `dismissed`,
                    authType: `NONE`,
                    launcherAnalytics: v,
                    installAttemptId: y,
                    eventId: n
                }), t()
            },
            I = b && e.supported_auth.some(e => e.type === `OAUTH`),
            {
                data: L,
                dataUpdatedAt: R,
                isFetching: z
            } = mt(e.id, c, {
                enabled: I
            }),
            [B] = (0, Z.useState)(() => Date.now()),
            V = I && L?.available === !0,
            H = R > B,
            U = L?.has_grant === !0 && H,
            W = V && z && !H,
            [te, ne] = (0, Z.useState)(null);
        return te ? (0, Q.jsx)(on, {
            connector: e,
            email: L?.email,
            isConnecting: n && r === `SIWC`,
            onBack: () => ne(null),
            onClose: F,
            onContinue: () => {
                te.logStart?.(), i(te.authType, !0)
            }
        }) : (0, Q.jsx)(ht, {
            connectorId: e.id,
            productSku: c,
            useGoogleOAuthBundleCopy: A,
            children: (0, Q.jsx)(gn, {
                connector: e,
                onClose: F,
                isConnecting: n,
                connectingAction: r,
                onContinue: (e, t, n) => {
                    if (!t) {
                        n?.(), i(e, t);
                        return
                    }
                    if (!W) {
                        if (U) {
                            n?.(), i(e, t);
                            return
                        }
                        a && !a(e) || ne({
                            authType: e,
                            logStart: n
                        })
                    }
                },
                authTypeOverride: o,
                showExternalIcon: s,
                additionalContent: l,
                footerContent: u,
                additionalMessageThatDoesNotContainLegalClaims: d,
                canSync: f,
                isRequestingSync: p,
                setIsRequestingSync: m,
                isContinueDisabled: h,
                siwcLoginAvailable: V,
                isSiwcLoginDisabled: W,
                hideHeaderIcons: g,
                referrerOverride: P,
                launcherAnalytics: v,
                installAttemptId: y,
                requireAuth: x,
                requireFreshConsent: S,
                hideAuthRedirectBlurb: C,
                progressiveManagedAuth: w,
                onConsentAction: T,
                onPrepareMfaEnrollment: E,
                onConsentShown: ee,
                consentVisibility: O,
                useGoogleOAuthBundleCopy: k,
                googleOAuthBundlePresentation: j
            })
        })
    }, $ = de({
        addConnectorLinkModalTitle: {
            id: `addConnectorLinkModal.title`,
            defaultMessage: `Connect {connectorName}`
        },
        syncTitle: {
            id: `addConnectorLinkModal.syncTitle`,
            defaultMessage: `Continuous sync`
        },
        syncDescription: {
            id: `addConnectorLinkModal.syncDescription`,
            defaultMessage: `Your {connectorName} content is indexed, stored, and kept up to date in ChatGPT. <link>Learn more</link>`
        },
        continueWithChatGPTButton: {
            id: `addConnectorLinkModal.continueWithChatGPTButton`,
            defaultMessage: `Continue with ChatGPT`
        },
        connectButton: {
            id: `addConnectorLinkModal.connectButton`,
            defaultMessage: `Connect {connectorName}`
        },
        connectWithoutAccountButton: {
            id: `addConnectorLinkModal.connectWithoutAccountButton`,
            defaultMessage: `Use without an account`
        },
        useApiKeyButton: {
            id: `addConnectorLinkModal.useApiKeyButton`,
            defaultMessage: `Use access token / API key`
        },
        continueButton: {
            id: `addConnectorLinkModal.continueButton`,
            defaultMessage: `Continue to {connectorName}`
        },
        signInWithButton: {
            id: `addConnectorLinkModal.signInWithButton`,
            defaultMessage: `Sign in with {connectorName}`
        },
        useDifferentMethodButton: {
            id: `addConnectorLinkModal.useDifferentMethodButton`,
            defaultMessage: `Use a different method`
        },
        siwcConfirmTitle: {
            id: `addConnectorLinkModal.siwcConfirmTitle`,
            defaultMessage: `Use ChatGPT to sign in to {connectorName}`
        },
        siwcConfirmDisclosure: {
            id: `addConnectorLinkModal.siwcConfirmDisclosure`,
            defaultMessage: `By continuing, ChatGPT will share your name, email, and profile picture with {connectorName} to link your account.`
        },
        siwcNameLabel: {
            id: `addConnectorLinkModal.siwcNameLabel`,
            defaultMessage: `Name`
        },
        siwcEmailLabel: {
            id: `addConnectorLinkModal.siwcEmailLabel`,
            defaultMessage: `Email`
        },
        siwcSignInButton: {
            id: `addConnectorLinkModal.siwcSignInButton`,
            defaultMessage: `Sign in`
        },
        siwcSigningInButton: {
            id: `addConnectorLinkModal.siwcSigningInButton`,
            defaultMessage: `Signing in...`
        },
        cancelButton: {
            id: `addConnectorLinkModal.cancelButton`,
            defaultMessage: `Cancel`
        },
        socialLoginTitle: {
            id: `addConnectorLinkModal.socialLoginTitle`,
            defaultMessage: `You use {socialProvider} to authenticate`
        },
        socialLoginDescription: {
            id: `addConnectorLinkModal.socialLoginDescription`,
            defaultMessage: `For added security, enable Multi-factor authentication (MFA) on your {socialProvider} account or <link>your ChatGPT account.</link>`
        },
        mfaRequiredTitle: {
            id: `addConnectorLinkModal.mfaRequiredTitle`,
            defaultMessage: `Multi-factor authentication (MFA) required`
        },
        mfaRequiredButton: {
            id: `addConnectorLinkModal.mfaRequiredButton`,
            defaultMessage: `Turn on MFA to continue`
        },
        errorLoadingStateButton: {
            id: `addConnectorLinkModal.errorLoadingStateButton`,
            defaultMessage: `Failed to load connector settings, please retry`
        },
        connectorDisabledByAdmin: {
            id: `addConnectorLinkModal.connectorDisabledByAdmin`,
            defaultMessage: `{connectorName} is disabled for your workspace. Ask your workspace administrator to enable it in <a>Admin settings</a> or update your custom role to allow access.`
        },
        workspaceAdminApprovalRequired: {
            id: `addConnectorLinkModal.workspaceAdminApprovalRequired`,
            defaultMessage: `A workspace admin needs to approve {connectorName} before you can connect it.`
        }
    })
}));
export {
    vn as n, Xt as r, _n as t
};
//# sourceMappingURL=b15d5b53-ohvi0fdkim9osf67.js.map