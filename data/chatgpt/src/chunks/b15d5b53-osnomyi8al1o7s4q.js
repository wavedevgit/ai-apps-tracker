import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    $it as i,
    A8 as a,
    Av as o,
    Bnt as s,
    Crt as c,
    Eit as l,
    Est as u,
    Fit as d,
    Fw as f,
    I6 as p,
    Iv as m,
    Iw as h,
    K5 as g,
    K_ as _,
    Knt as v,
    Lit as y,
    M6 as b,
    Mw as x,
    N1 as S,
    Nw as C,
    Oct as w,
    Pw as T,
    Qy as E,
    Rz as D,
    Tst as O,
    Vw as k,
    Wnt as A,
    X_ as j,
    Xh as M,
    Zy as N,
    _it as P,
    _rt as ee,
    bh as F,
    c2 as I,
    c6 as L,
    cct as R,
    d2 as z,
    d6 as B,
    dL as V,
    eE as H,
    fL as U,
    j5 as W,
    jw as G,
    q1 as te,
    q5 as ne,
    qh as re,
    sst as ie,
    wh as ae,
    xnt as oe,
    zw as se,
    zz as ce
} from "./4813494d-mdvd4786a87166cc.js";
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
    A1 as _e,
    CTt as ve,
    ETt as ye,
    G8 as be,
    I_n as xe,
    JUn as Se,
    Jrt as Ce,
    R_n as we,
    T3t as Te,
    W8 as Ee,
    YUn as De,
    YWn as Oe,
    ZWn as ke,
    _rt as q,
    _sn as Ae,
    cat as je,
    dit as Me,
    eit as Ne,
    fWt as Pe,
    gsn as Fe,
    k1 as Ie,
    k3t as Le,
    kWt as Re,
    lWn as ze,
    nat as Be,
    oat as Ve,
    rat as He,
    sWt as Ue,
    sat as We,
    uWn as Ge,
    wit as Ke,
    yrt as qe,
    z_n as Je
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Av as Ye,
    Gv as Xe,
    Wv as Ze,
    jv as Qe
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    g_ as $e,
    h_ as et
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    hv as tt,
    zv as nt
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    A as rt,
    J as it,
    g as at,
    h as ot,
    k as st,
    m as ct,
    p as lt,
    q as ut
} from "./c470f5ab-jwd0o7jx9i9say9k.js";
import {
    a as dt,
    i as ft,
    n as pt,
    r as mt,
    t as ht
} from "./06dfbf77-mhdzmytsug0rvq1e.js";
import {
    i as gt,
    r as _t,
    t as vt
} from "./94e0eb8c-m3ucblcofbvh9spg.js";
import {
    r as yt,
    t as bt
} from "./47ed0b35-mtmk41pn6rh5nxnd.js";
import {
    n as xt,
    r as St,
    t as Ct
} from "./760cdbab-l8rnooprcys3ih2e.js";
import {
    n as wt,
    r as Tt
} from "./d5b03218-h30v4sebjgx3crvt.js";
import {
    r as Et,
    t as Dt
} from "./7517017f-m0e7hb8h6fyirvew.js";
var Ot, J, kt, At, jt = e((() => {
    Ot = he(), St(), je(), ye(), l(), T(), Ge(), ne(), pe(), J = ue(), kt = `https://persistent.oaistatic.com/static-nux/ecosystem-app-connect-modal-bg.jpg`, At = e => {
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
            m;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
            backgroundImage: `url(${kt})`
        }, t[0] = m) : m = t[0];
        let h;
        t[1] === d ? h = t[2] : (h = d.formatMessage(P.close), t[1] = d, t[2] = h);
        let _;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, J.jsx)(C, {
            className: `icon`
        }), t[3] = _) : _ = t[3];
        let v;
        t[4] !== l || t[5] !== h ? (v = (0, J.jsx)(`div`, {
            className: `flex justify-end p-2`,
            children: (0, J.jsx)(ze, {
                className: `text-white`,
                onClick: l,
                "aria-label": h,
                children: _
            })
        }), t[4] = l, t[5] = h, t[6] = v) : v = t[6];
        let y = f && `pt-12`,
            b;
        t[7] === y ? b = t[8] : (b = g(`flex w-full flex-row`, y), t[7] = y, t[8] = b);
        let x = p ? `p-0.75` : `p-2`,
            S;
        t[9] === x ? S = t[10] : (S = g(`shrink-0 rounded-xl border-[0.5px] bg-white shadow-sm`, x), t[9] = x, t[10] = S);
        let w = p ? `large` : `medium`,
            T;
        t[11] !== c || t[12] !== w || t[13] !== S ? (T = (0, J.jsx)(ve, {
            connector: c,
            className: S,
            size: w
        }), t[11] = c, t[12] = w, t[13] = S, t[14] = T) : T = t[14];
        let E, D;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, J.jsx)(`div`, {
            className: `my-auto h-8 w-px bg-white opacity-70`
        }), D = (0, J.jsx)(We, {
            size: `medium`
        }), t[15] = E, t[16] = D) : (E = t[15], D = t[16]);
        let O;
        t[17] === T ? O = t[18] : (O = (0, J.jsxs)(`div`, {
            className: `flex items-center gap-3.5`,
            children: [T, E, D]
        }), t[17] = T, t[18] = O);
        let k;
        t[19] === c.name ? k = t[20] : (k = (0, J.jsx)(`h2`, {
            className: `text-token-text-primary m-0 text-center text-2xl font-medium`,
            children: (0, J.jsx)(K, {
                id: `54VsXX`,
                defaultMessage: `Add {connectorName} to ChatGPT`,
                values: {
                    connectorName: c.name
                }
            })
        }), t[19] = c.name, t[20] = k);
        let A;
        t[21] === c.description ? A = t[22] : (A = c.description && (0, J.jsx)(`span`, {
            className: `text-token-text-primary line-clamp-5 text-center text-sm`,
            children: c.description
        }), t[21] = c.description, t[22] = A);
        let j;
        t[23] !== k || t[24] !== A ? (j = (0, J.jsxs)(`div`, {
            className: `flex w-full flex-col items-center gap-2 px-5 text-center text-balance`,
            children: [k, A]
        }), t[23] = k, t[24] = A, t[25] = j) : j = t[25];
        let M = u ? `flex w-full max-w-80 flex-col items-center justify-center gap-2 pt-4` : `flex flex-row items-center justify-center gap-4 pt-4`,
            N = f ? `pb-10` : `pb-8`,
            ee;
        t[26] !== M || t[27] !== N ? (ee = g(M, N), t[26] = M, t[27] = N, t[28] = ee) : ee = t[28];
        let F;
        t[29] !== i || t[30] !== r || t[31] !== ee ? (F = (0, J.jsxs)(`div`, {
            className: ee,
            children: [i, r]
        }), t[29] = i, t[30] = r, t[31] = ee, t[32] = F) : F = t[32];
        let I;
        t[33] === f ? I = t[34] : (I = f && (0, J.jsx)(`div`, {
            className: `py-6 text-center text-xs text-white/65`,
            children: (0, J.jsx)(K, {
                id: `ecosystemAppLinkModal.firstPartyFooterAttribution`,
                defaultMessage: `Designed and developed by OpenAI`
            })
        }), t[33] = f, t[34] = I);
        let L;
        t[35] !== O || t[36] !== j || t[37] !== F || t[38] !== I ? (L = (0, J.jsxs)(`div`, {
            className: `flex flex-auto flex-col items-center gap-4`,
            children: [O, j, F, I]
        }), t[35] = O, t[36] = j, t[37] = F, t[38] = I, t[39] = L) : L = t[39];
        let R;
        t[40] !== L || t[41] !== b ? (R = (0, J.jsx)(`div`, {
            className: b,
            children: L
        }), t[40] = L, t[41] = b, t[42] = R) : R = t[42];
        let z;
        t[43] !== R || t[44] !== v ? (z = (0, J.jsxs)(`div`, {
            className: `dark overflow-hidden bg-cover bg-no-repeat`,
            style: m,
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
    Nt = he(), Re(), H(), De(), x(), it(), k(), M(), oe(), pe(), Y = ue(), Pt = de({
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
                connectorRows: i,
                isConnecting: a,
                isContinueDisabled: o,
                isEU: c,
                onClose: l,
                onContinue: u,
                tos: d
            } = e,
            f;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Y.jsx)(K, {
            ...Pt.title
        }), t[0] = f) : f = t[0];
        let p = f,
            m = n?.branding?.terms_of_service ?? `https://www.microsoft.com/servicesagreement`,
            h = n?.branding?.privacy_policy ?? `https://privacy.microsoft.com/privacystatement`,
            g = Mt,
            _;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, Y.jsx)(`div`, {
            "aria-hidden": !0,
            className: `pointer-events-none absolute inset-x-0 top-0 h-36 bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-mobile-light.webp')] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] bg-cover bg-top bg-no-repeat [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] sm:h-[217px] sm:bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-desktop-light.webp')] dark:bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-mobile-dark.webp')] dark:sm:bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-desktop-dark.webp')]`
        }), t[1] = _) : _ = t[1];
        let v;
        t[2] === l ? v = t[3] : (v = (0, Y.jsx)(`div`, {
            className: `absolute end-6 top-6 z-10`,
            children: (0, Y.jsx)(G, {
                onClick: l,
                radius: `full`,
                className: `bg-white/30 dark:bg-black/20`
            })
        }), t[2] = l, t[3] = v);
        let y;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, Y.jsx)(Ft, {
            Icon: re,
            iconClassName: `h-12 w-12`
        }), t[4] = y) : y = t[4];
        let b;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, Y.jsxs)(`div`, {
            className: `flex items-center justify-center gap-3`,
            children: [y, (0, Y.jsxs)(`div`, {
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
        }), t[5] = b) : b = t[5];
        let x;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (x = s() ? (0, Y.jsx)(Se.Title, {
            className: `text-center text-2xl font-semibold`,
            children: p
        }) : (0, Y.jsx)(se.Title, {
            title: (0, Y.jsx)(`span`, {
                className: `text-2xl font-semibold`,
                children: p
            })
        }), t[6] = x) : x = t[6];
        let S;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, Y.jsxs)(`div`, {
            className: `flex flex-col items-center gap-1 text-center`,
            children: [x, (0, Y.jsx)(`p`, {
                className: `text-token-text-secondary text-base`,
                children: (0, Y.jsx)(K, {
                    ...Pt.description
                })
            })]
        }), t[7] = S) : S = t[7];
        let C;
        t[8] !== n?.name || t[9] !== c || t[10] !== l || t[11] !== h || t[12] !== m || t[13] !== d ? (C = c && (0, Y.jsx)(`p`, {
            className: `text-token-text-secondary text-xs leading-5`,
            children: (0, Y.jsx)(K, {
                ...Pt.dataSharingDisclosure,
                values: {
                    connectorName: n?.name ?? d.genericName,
                    termsLink: e => g(m, e),
                    privacyPolicyLink: e => g(h, e),
                    learnMoreLink: e => g(`https://help.openai.com/en/articles/11487775-apps-in-chatgpt`, e),
                    settingsLink: e => (0, Y.jsx)(`a`, {
                        className: `interactive-label-secondary font-medium`,
                        href: Ue,
                        onClick: l,
                        children: e
                    })
                }
            })
        }), t[8] = n?.name, t[9] = c, t[10] = l, t[11] = h, t[12] = m, t[13] = d, t[14] = C) : C = t[14];
        let w = o || a,
            T;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, Y.jsx)(K, {
            ...Pt.connectButton
        }), t[15] = T) : T = t[15];
        let E;
        t[16] !== a || t[17] !== u || t[18] !== w ? (E = (0, Y.jsx)(r, {
            type: `button`,
            color: `primary`,
            size: `large`,
            className: `w-full rounded-full`,
            disabled: w,
            loading: a,
            onClick: u,
            children: T
        }), t[16] = a, t[17] = u, t[18] = w, t[19] = E) : E = t[19];
        let D;
        t[20] !== i || t[21] !== E || t[22] !== C ? (D = (0, Y.jsxs)(`div`, {
            className: `relative flex flex-col gap-6 px-6 pt-16 pb-8 sm:px-8`,
            children: [b, S, i, C, E]
        }), t[20] = i, t[21] = E, t[22] = C, t[23] = D) : D = t[23];
        let O;
        return t[24] !== D || t[25] !== v ? (O = (0, Y.jsxs)(`section`, {
            "data-microsoft-oauth-bundle-interstitial": !0,
            className: `bg-token-bg-primary relative overflow-hidden rounded-t-2xl sm:rounded-2xl`,
            children: [_, v, D]
        }), t[24] = D, t[25] = v, t[26] = O) : O = t[26], O
    }
}));

function Rt(e) {
    return (0, X.jsx)(Oe, {
        href: Dt,
        className: `underline`,
        children: e
    })
}
var zt, Bt, X, Vt, Ht, Ut, Wt = e((() => {
    zt = he(), H(), Et(), x(), ke(), be(), Ae(), Bt = n(me()), pe(), X = ue(), Vt = e => {
        "use forget";
        let t = (0, zt.c)(44),
            {
                value: n,
                onChange: i,
                onClose: a,
                isSaveDisabled: o
            } = e,
            s = o !== void 0 && o,
            [c, l] = (0, Bt.useState)(n),
            u = ge(),
            d;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, X.jsx)(`div`, {
            className: `text-2xl font-semibold`,
            children: (0, X.jsx)(K, {
                ...Ut.advancedSettingsTitle
            })
        }), t[0] = d) : d = t[0];
        let f;
        t[1] === a ? f = t[2] : (f = (0, X.jsxs)(`div`, {
            className: `flex items-start justify-between`,
            children: [d, (0, X.jsx)(G, {
                onClick: a
            })]
        }), t[1] = a, t[2] = f);
        let p;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, X.jsx)(`div`, {
            className: `mt-6 mb-2 text-sm font-medium`,
            children: (0, X.jsx)(K, {
                ...Ut.connectionType
            })
        }), t[3] = p) : p = t[3];
        let m = c ? `sync` : `ondemand`,
            h;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (h = e => l(e === `sync`), t[4] = h) : h = t[4];
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
        let v;
        t[7] === c ? v = t[8] : (v = (0, X.jsxs)(`label`, {
            className: `flex items-start justify-between gap-3 p-4`,
            children: [_, (0, X.jsx)(Fe, {
                value: `sync`,
                children: (0, X.jsx)(Ht, {
                    selected: c
                })
            })]
        }), t[7] = c, t[8] = v);
        let y;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, X.jsx)(`div`, {
            className: `text-sm font-medium`,
            children: (0, X.jsx)(K, {
                ...Ut.onDemandTitle
            })
        }), t[9] = y) : y = t[9];
        let b;
        t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, X.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [y, (0, X.jsx)(`div`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, X.jsx)(K, {
                    ...Ut.onDemandDescription
                })
            })]
        }), t[10] = b) : b = t[10];
        let x = !c,
            S;
        t[11] === x ? S = t[12] : (S = (0, X.jsxs)(`label`, {
            className: `border-token-border-default flex items-start justify-between gap-3 border-t p-4`,
            children: [b, (0, X.jsx)(Fe, {
                value: `ondemand`,
                children: (0, X.jsx)(Ht, {
                    selected: x
                })
            })]
        }), t[11] = x, t[12] = S);
        let C;
        t[13] !== S || t[14] !== m || t[15] !== v ? (C = (0, X.jsx)(`div`, {
            className: `mt-2`,
            children: (0, X.jsx)(`div`, {
                className: `border-token-border-default overflow-hidden rounded-xl border`,
                children: (0, X.jsxs)(Ee.Root, {
                    value: m,
                    onValueChange: h,
                    className: `flex w-full flex-col`,
                    children: [v, S]
                })
            })
        }), t[13] = S, t[14] = m, t[15] = v, t[16] = C) : C = t[16];
        let w;
        t[17] !== c || t[18] !== a || t[19] !== n ? (w = () => {
            c !== n && l(n), a()
        }, t[17] = c, t[18] = a, t[19] = n, t[20] = w) : w = t[20];
        let T;
        t[21] === u ? T = t[22] : (T = u.formatMessage(Ut.cancel), t[21] = u, t[22] = T);
        let E;
        t[23] !== w || t[24] !== T ? (E = (0, X.jsx)(r, {
            color: `secondary`,
            onClick: w,
            children: T
        }), t[23] = w, t[24] = T, t[25] = E) : E = t[25];
        let D;
        t[26] !== c || t[27] !== i || t[28] !== a || t[29] !== n ? (D = () => {
            n !== c && i(c), a()
        }, t[26] = c, t[27] = i, t[28] = a, t[29] = n, t[30] = D) : D = t[30];
        let O;
        t[31] === u ? O = t[32] : (O = u.formatMessage(Ut.save), t[31] = u, t[32] = O);
        let k;
        t[33] !== s || t[34] !== D || t[35] !== O ? (k = (0, X.jsx)(r, {
            onClick: D,
            disabled: s,
            children: O
        }), t[33] = s, t[34] = D, t[35] = O, t[36] = k) : k = t[36];
        let A;
        t[37] !== E || t[38] !== k ? (A = (0, X.jsxs)(`div`, {
            className: `mt-auto flex items-center justify-between pt-4`,
            children: [E, k]
        }), t[37] = E, t[38] = k, t[39] = A) : A = t[39];
        let j;
        return t[40] !== C || t[41] !== A || t[42] !== f ? (j = (0, X.jsxs)(`div`, {
            className: `flex flex-1 flex-col p-2`,
            children: [f, p, C, A]
        }), t[40] = C, t[41] = A, t[42] = f, t[43] = j) : j = t[43], j
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
    if (!(B(W(Kt)?.planType) && s)) return null;
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
        children: [(0, Jt.jsx)(Ye, {
            className: `icon-sm fill-green-500`
        }), (0, Jt.jsx)(K, {
            id: `anLxXe`,
            defaultMessage: `Approved by your admin`
        })]
    }), t[2] = l) : l = t[2];
    let u;
    return t[3] !== o || t[4] !== c ? (u = (0, Jt.jsx)(N, {
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
    return S()
}
var qt, Jt, Yt = e((() => {
        qt = he(), Qe(), E(), a(), te(), L(), pe(), Jt = ue()
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
        return t && n.set(tt, t), e.pathname === `/connector-auth` && n.get(`action`) === `connect` && n.set(`connector_action`, `connect`), `${e.pathname}?${n.toString()}${e.hash}`
    }
    return e.hash ? e.pathname + e.hash : e.pathname
}

function $t(e) {
    return e === Pe ? `github_connector` : `connector`
}
var Z, Q, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, $, vn = e((() => {
    w(), ae(), St(), jt(), Tt(), Lt(), je(), Be(), Wt(), ye(), bt(), Ce(), Re(), H(), Et(), h(), x(), Xe(), at(), rt(), ct(), I(), M(), Yt(), m(), Le(), nt(), et(), u(), _t(), ce(), we(), U(), y(), v(), Ie(), qe(), p(), c(), ne(), Z = n(me()), pe(), fe(), pt(), Q = ue(), en = [`OAUTH`, `API_KEY`, `NONE`], tn = (e, t) => t ? {
        genericName: t.generic_name ?? e.name,
        blurbs: t.blurbs ?? []
    } : null, nn = ({
        loading: e,
        fitWidth: t = !1,
        color: n = `primary`,
        contentsFullWidth: i = !1,
        disabled: a = !1,
        onClick: o,
        children: s
    }) => (0, Q.jsx)(r, {
        className: t ? `w-fit` : `w-full`,
        size: `large`,
        onClick: o,
        loading: e,
        disabled: a,
        color: n,
        contentsFullWidth: i,
        children: s
    }), rn = ({
        loading: e = !1,
        disabled: t = !1,
        fitWidth: n = !1,
        onClick: i,
        children: a
    }) => (0, Q.jsx)(r, {
        className: g(`text-token-text-secondary border-0`, n ? `w-fit` : `w-full`),
        size: `large`,
        onClick: i,
        loading: e,
        disabled: t,
        color: `secondary`,
        children: a
    }), an = () => {
        let e = ie()?.user;
        return (0, Q.jsxs)(`span`, {
            className: `grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center`,
            children: [(0, Q.jsx)(`span`, {
                className: `col-start-2 min-w-0 text-center`,
                children: (0, Q.jsx)(K, {
                    ...$.continueWithChatGPTButton
                })
            }), (0, Q.jsx)(`span`, {
                className: `pointer-events-none translate-x-1.5 justify-self-end`,
                children: (0, Q.jsx)(F, {
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
        onContinue: a
    }) => {
        let o = ie()?.user;
        return (0, Q.jsxs)(`div`, {
            className: g(`flex flex-col gap-6`, He(e) && `p-4`),
            children: [(0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between`,
                children: [(0, Q.jsx)(f, {
                    type: `button`,
                    onClick: r
                }), (0, Q.jsx)(G, {
                    onClick: i
                })]
            }), (0, Q.jsx)(`div`, {
                className: `flex flex-col items-center`,
                children: (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-2.5`,
                    children: [(0, Q.jsx)(ve, {
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
                    }), (0, Q.jsx)(re, {
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
                            children: [(0, Q.jsx)(F, {
                                user: o,
                                size: `small`
                            }), (0, Q.jsx)(`span`, {
                                children: o?.name
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
                            children: t ?? o?.email
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
                        onClick: a,
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
        e === `connection` && Je(t.id, xe.ConnectorLinkContinueClick, {
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
            c = A.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                stage: `CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED`,
                surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                connectorId: t.id,
                flowCorrelationId: a || void 0,
                modalAction: e === `mfa` ? `CHATGPT_CONNECTORS_LINK_MODAL_ACTION_MFA` : `CHATGPT_CONNECTORS_LINK_MODAL_ACTION_CONNECTION`,
                referrer: n || void 0,
                legacyStatsigEventName: s
            });
        A.logValueEventWithStatsig({
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
            d = j[e.id],
            f = d === R.GMAIL_CONNECTOR || d === R.GCAL_CONNECTOR,
            p = a && t && !f ? [u, ...t.blurbs] : t?.blurbs,
            m = d != null && _.has(d),
            h = e.status === `DISABLED_BY_ADMIN`;
        return (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-6`,
            children: [(0, Q.jsxs)(`div`, {
                children: [(0, Q.jsx)(Ve, {
                    onClose: n,
                    connectorIcon: s ? c?.connectorIcons ?? (0, Q.jsx)(`div`, {
                        className: `bg-token-bg-primary flex h-11 w-11 items-center justify-center rounded-xl border-[0.5px] shadow-sm`,
                        children: (0, Q.jsx)(st, {
                            className: `h-8 w-8`,
                            "aria-hidden": !0
                        })
                    }) : (0, Q.jsx)(ve, {
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
                }), m ? null : (0, Q.jsx)(`div`, {
                    className: `mt-3`,
                    children: (0, Q.jsx)(Gt, {
                        mode: `single`,
                        side: `bottom`,
                        isConnectorApproved: !h
                    })
                })]
            }), i, (0, Q.jsx)(Ct, {
                blurbs: p
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
            }), (0, Q.jsx)(G, {
                onClick: n
            })]
        }), (0, Q.jsx)(`div`, {
            className: `flex flex-col`,
            children: (0, Q.jsx)(Te, {
                lines: 2,
                size: `lg`,
                width: 70,
                widthVariance: 20
            })
        }), (0, Q.jsx)(`div`, {
            className: `flex flex-col`,
            children: (0, Q.jsx)(Te, {
                lines: 7,
                size: `base`,
                width: 80,
                widthVariance: 20
            })
        }), (0, Q.jsx)(`div`, {
            className: `bg-token-bg-tertiary h-11 w-full animate-pulse rounded-full motion-reduce:animate-none`
        })]
    }) : He(e) ? (0, Q.jsx)(At, {
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
        retry: i,
        useGoogleOAuthBundleCopy: a = !1,
        googleOAuthBundlePresentation: o
    }) => (0, Q.jsx)(cn, {
        connector: e,
        tos: t,
        onClose: n,
        useGoogleOAuthBundleCopy: a,
        googleOAuthBundlePresentation: o,
        children: (0, Q.jsx)(`div`, {
            className: `flex items-center justify-center pt-4`,
            children: (0, Q.jsx)(r, {
                onClick: i,
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
        onClose: i,
        isConnecting: a,
        onContinue: o,
        productSku: s
    }) => {
        let {
            data: c,
            isLoading: l,
            isError: u,
            refetch: d
        } = ft(n, s), f = c?.blurbs ?? [], p = c?.generic_name ?? `Google`;
        return (0, Q.jsxs)(Q.Fragment, {
            children: [(0, Q.jsx)(Ve, {
                onClose: i,
                connectorIcon: e,
                title: (0, Q.jsx)(K, {
                    ...$.addConnectorLinkModalTitle,
                    values: {
                        connectorName: t
                    }
                })
            }), l ? (0, Q.jsx)(`div`, {
                className: `flex items-center justify-center p-4`,
                children: (0, Q.jsx)(D, {})
            }) : u ? (0, Q.jsx)(`div`, {
                className: `flex items-center justify-center pt-4`,
                children: (0, Q.jsx)(r, {
                    onClick: () => void d(),
                    size: `large`,
                    className: `w-full`,
                    children: (0, Q.jsx)(K, {
                        ...$.errorLoadingStateButton
                    })
                })
            }) : f.length > 0 ? (0, Q.jsx)(Ct, {
                blurbs: f
            }) : null, (0, Q.jsx)(`div`, {
                className: `pt-4`,
                children: (0, Q.jsx)(nn, {
                    loading: a,
                    onClick: o,
                    children: (0, Q.jsx)(K, {
                        ...$.continueButton,
                        values: {
                            connectorName: p
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
        connectingAction: i,
        onContinue: a,
        authTypeOverride: s,
        showExternalIcon: c,
        additionalContent: l,
        footerContent: u,
        additionalMessageThatDoesNotContainLegalClaims: d,
        canSync: f = !1,
        isRequestingSync: p = !1,
        setIsRequestingSync: m,
        isContinueDisabled: h = !1,
        siwcLoginAvailable: g = !1,
        isSiwcLoginDisabled: _ = !1,
        hideHeaderIcons: v = !1,
        referrerOverride: y,
        launcherAnalytics: x,
        installAttemptId: S,
        requireAuth: C = !1,
        useGoogleOAuthBundleCopy: w = !1,
        googleOAuthBundlePresentation: T
    }) => {
        let E = O() && ee(`2792858552`),
            D = Me(),
            k = Zt(y),
            j = s ?? D,
            M = C && j === `NONE` ? void 0 : j,
            N = Ne(e, M),
            P = e.status === `DISABLED_BY_ADMIN`,
            F = h || P,
            I = F || r,
            L = e => r && (i === void 0 || i === e),
            R = P ? (0, Q.jsx)(K, {
                ...$.workspaceAdminApprovalRequired,
                values: {
                    connectorName: e.name
                }
            }) : void 0,
            z = (0, Z.useRef)(null);
        (0, Z.useEffect)(() => {
            if (z.current?.connectorId === e.id && z.current.installAttemptId === S) return;
            z.current = {
                connectorId: e.id,
                installAttemptId: S
            }, q.logModalShown({
                connector_id_metadata: q.createIdMetadataFromConnector(e, k ?? `unknown_referrer`),
                referrer: k ?? `unknown_referrer`,
                mfaState: `not_required`,
                authType: N ?? void 0,
                launcherAnalytics: x,
                installAttemptId: S
            });
            let t = `connectors.shown_connect_modal`,
                n = A.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: S || void 0,
                    mfaState: `CHATGPT_CONNECTORS_LINK_MODAL_MFA_STATE_NOT_REQUIRED`,
                    referrer: k || void 0,
                    legacyStatsigEventName: t
                });
            A.logValueEventWithStatsig({
                segmentEventName: t,
                statsigEventName: t,
                eventId: n,
                data: {
                    mfa: `not_required`,
                    type: e.id,
                    ...k && {
                        referrer: k
                    },
                    ...S && {
                        install_attempt_id: S
                    }
                }
            })
        }, [e, S, x, k, N]);
        let B = (t, n = !1) => {
                if (P) return;
                let r = W ? t : N;
                a(t, n, () => sn({
                    action: `connection`,
                    connector: e,
                    referrer: k ?? `unknown_referrer`,
                    authType: r ?? void 0,
                    launcherAnalytics: x,
                    installAttemptId: S
                }))
            },
            {
                supported_auth: H
            } = e,
            U = en.filter(e => C && e === `NONE` ? !1 : H.some(t => t.type === e)),
            W = E && !M && U.length > 1,
            G = g && !P && (W ? U.includes(`OAUTH`) : N === `OAUTH`),
            te = [{
                key: `admin`,
                content: P ? (0, Q.jsx)(K, {
                    ...$.connectorDisabledByAdmin,
                    values: {
                        connectorName: e.name,
                        a: t => (0, Q.jsx)(`a`, {
                            href: o(e.id),
                            target: `_blank`,
                            rel: `noreferrer`,
                            className: `font-semibold underline`,
                            children: t
                        })
                    }
                }) : void 0
            }, {
                key: `additional`,
                content: P ? void 0 : d
            }].filter(({
                content: e
            }) => e),
            ne = te.length > 0 ? (0, Q.jsx)(`div`, {
                className: `flex flex-col gap-2`,
                children: te.map(({
                    key: e,
                    content: t
                }) => (0, Q.jsx)(`div`, {
                    className: `bg-token-interactive-bg-accent-muted-context rounded-xl p-4 text-center text-sm text-[#0285FF]`,
                    children: t
                }, e))
            }) : void 0,
            [re, ie] = (0, Z.useState)(!1),
            [ae, oe] = (0, Z.useState)(!1),
            se = He(e),
            ce = se && !G,
            le = w ? T?.oauthConnectorName ?? t.genericName : e.name,
            {
                country: ue
            } = V(),
            de = ue != null && b.has(ue),
            fe = (0, Q.jsx)(an, {}),
            pe = (0, Q.jsxs)(Q.Fragment, {
                children: [G ? (0, Q.jsx)(nn, {
                    loading: L(`SIWC`) || _,
                    disabled: I || _,
                    onClick: () => B(`OAUTH`, !0),
                    contentsFullWidth: !0,
                    children: fe
                }) : null, G && se && !ae ? (0, Q.jsx)(`button`, {
                    className: `text-token-text-primary text-sm underline`,
                    onClick: () => oe(!0),
                    children: (0, Q.jsx)(K, {
                        ...$.useDifferentMethodButton
                    })
                }) : null, G && se && ae ? (0, Q.jsxs)(`div`, {
                    className: `text-token-text-secondary flex items-center gap-3 text-sm`,
                    children: [(0, Q.jsx)(`span`, {
                        className: `bg-token-border-default h-px flex-1`
                    }), (0, Q.jsx)(K, {
                        ...$.useDifferentMethodButton
                    }), (0, Q.jsx)(`span`, {
                        className: `bg-token-border-default h-px flex-1`
                    })]
                }) : null, (!G || !se || ae) && U.map((t, n) => {
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
                        }), t === `OAUTH` && c ? (0, Q.jsx)(Ze, {
                            className: `icon-sm`
                        }) : null]
                    });
                    return n === 0 && !G ? (0, Q.jsx)(nn, {
                        fitWidth: ce,
                        loading: L(t),
                        disabled: I,
                        onClick: () => B(t),
                        children: r
                    }, t) : (0, Q.jsx)(rn, {
                        fitWidth: ce,
                        loading: L(t),
                        disabled: I,
                        onClick: () => B(t),
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
                children: [G ? (0, Q.jsx)(nn, {
                    loading: L(`SIWC`) || _,
                    disabled: I || _,
                    onClick: () => B(`OAUTH`, !0),
                    contentsFullWidth: !0,
                    children: fe
                }) : null, G ? (0, Q.jsx)(rn, {
                    loading: L(N),
                    disabled: I,
                    onClick: () => B(N),
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
                        }), c && (0, Q.jsx)(Ze, {
                            className: `icon-sm`
                        })]
                    })
                }) : (0, Q.jsx)(nn, {
                    fitWidth: ce,
                    loading: L(N),
                    disabled: I,
                    onClick: () => B(N),
                    children: (0, Q.jsxs)(`span`, {
                        className: `flex items-center justify-center gap-1`,
                        children: [N === `OAUTH` ? se ? (0, Q.jsx)(K, {
                            ...$.signInWithButton,
                            values: {
                                connectorName: e.name
                            }
                        }) : (0, Q.jsx)(K, {
                            ...$.continueButton,
                            values: {
                                connectorName: le
                            }
                        }) : N === `API_KEY` ? (0, Q.jsx)(K, {
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
                        }), N === `OAUTH` && c && (0, Q.jsx)(Ze, {
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
        if (re && m && !r) return (0, Q.jsx)(Vt, {
            value: p,
            onChange: m,
            onClose: () => ie(!1)
        });
        if (T?.hasCompanionConnectors && l && !se) return (0, Q.jsx)(T.oauthBundleProvider === `microsoft` ? It : wt, {
            connector: e,
            connectorRows: l,
            isConnecting: r,
            isContinueDisabled: F,
            isEU: de,
            onClose: n,
            onContinue: () => B(N),
            tos: t
        });
        if (se) {
            let i = (0, Q.jsxs)(Q.Fragment, {
                children: [W ? pe : me, f && (0, Q.jsx)(rn, {
                    fitWidth: ce,
                    onClick: () => ie(!0),
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
                primaryActionMessage: R,
                stackPrimaryActions: G || l != null,
                onClose: n
            })
        }
        return (0, Q.jsx)(Q.Fragment, {
            children: (0, Q.jsx)(cn, {
                connector: e,
                tos: t,
                onClose: n,
                beforeBlurbs: ne,
                willSync: p,
                hideHeaderIcons: v,
                useGoogleOAuthBundleCopy: w,
                googleOAuthBundlePresentation: T,
                children: (0, Q.jsxs)(`div`, {
                    className: `flex flex-col gap-2`,
                    children: [u, l, W ? pe : me, f && (0, Q.jsx)(`p`, {
                        className: `text-token-text-secondary text-center text-sm font-medium`,
                        children: (0, Q.jsx)(rn, {
                            onClick: () => ie(!0),
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
            p = Ne(e, r),
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
                n = A.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: o || void 0,
                    mfaState: `CHATGPT_CONNECTORS_LINK_MODAL_MFA_STATE_REQUIRED`,
                    referrer: f || void 0,
                    legacyStatsigEventName: t
                });
            A.logValueEventWithStatsig({
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
                n = A.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: o || void 0,
                    modalAction: `CHATGPT_CONNECTORS_LINK_MODAL_ACTION_MFA`,
                    referrer: f || void 0,
                    legacyStatsigEventName: t
                });
            A.logValueEventWithStatsig({
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
                    z(vt, {
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
        [i.Google]: {
            icon: (0, Q.jsx)(st, {}),
            name: `Google`
        },
        [i.Microsoft]: {
            icon: (0, Q.jsx)(lt, {}),
            name: `Microsoft`
        },
        [i.Apple]: {
            icon: (0, Q.jsx)(ot, {}),
            name: `Apple`
        }
    }, hn = ({
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
        additionalMessageThatDoesNotContainLegalClaims: f,
        canSync: p,
        isRequestingSync: m,
        setIsRequestingSync: h,
        siwcLoginAvailable: g = !1,
        isSiwcLoginDisabled: _ = !1,
        isContinueDisabled: v = !1,
        hideHeaderIcons: y = !1,
        referrerOverride: b,
        launcherAnalytics: x,
        installAttemptId: S,
        onConsentAction: C,
        requireAuth: w = !1,
        progressiveManagedAuth: T = !1,
        useGoogleOAuthBundleCopy: E = !1,
        googleOAuthBundlePresentation: D
    }) => {
        let {
            connectionType: O,
            ssoConnectionId: k
        } = d(), [j, M] = (0, Z.useState)(!1), N = !T || j, P = e.status === `DISABLED_BY_ADMIN`, ee = Qt(le(), S), F = Zt(b), I = Ne(e, s), L = N && v || P || r, R = e => r && (a === void 0 || a === e), B = (0, Z.useRef)(null);
        (0, Z.useEffect)(() => {
            if (B.current?.connectorId === e.id && B.current.installAttemptId === S) return;
            B.current = {
                connectorId: e.id,
                installAttemptId: S
            }, q.logModalShown({
                connector_id_metadata: q.createIdMetadataFromConnector(e, F ?? `unknown_referrer`),
                referrer: F ?? `unknown_referrer`,
                mfaState: `suggested`,
                authType: I ?? `NONE`,
                launcherAnalytics: x,
                installAttemptId: S
            });
            let t = `connectors.shown_connect_modal`,
                n = A.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: S || void 0,
                    mfaState: `CHATGPT_CONNECTORS_LINK_MODAL_MFA_STATE_SUGGESTED`,
                    referrer: F || void 0,
                    legacyStatsigEventName: t
                });
            A.logValueEventWithStatsig({
                segmentEventName: t,
                statsigEventName: t,
                eventId: n,
                data: {
                    mfa: `suggested`,
                    type: e.id,
                    ...F && {
                        referrer: F
                    },
                    ...S && {
                        install_attempt_id: S
                    }
                }
            })
        }, [e, S, x, F, I]);
        let V = () => {
                C?.(`mfa`), q.logModalActionTaken({
                    connector_id_metadata: q.createIdMetadataFromConnector(e, F ?? `unknown_referrer`),
                    referrer: F ?? `unknown_referrer`,
                    action: `mfa`,
                    authType: I ?? `NONE`,
                    launcherAnalytics: x,
                    installAttemptId: S
                });
                let t = `connectors.click_continue_modal`,
                    n = A.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                        stage: `CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED`,
                        surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                        connectorId: e.id,
                        flowCorrelationId: S || void 0,
                        modalAction: `CHATGPT_CONNECTORS_LINK_MODAL_ACTION_MFA`,
                        referrer: F || void 0,
                        legacyStatsigEventName: t
                    });
                A.logValueEventWithStatsig({
                    segmentEventName: t,
                    statsigEventName: t,
                    eventId: n,
                    data: {
                        action: `mfa`,
                        type: e.id,
                        ...F && {
                            referrer: F
                        },
                        ...S && {
                            install_attempt_id: S
                        }
                    }
                }), z(vt, {
                    redirectUrl: ee,
                    source: $t(e.id)
                })
            },
            H = (t = !1) => {
                if (!N) {
                    M(!0);
                    return
                }
                v || P || o(t ? `OAUTH` : I, t, () => sn({
                    action: `mfa`,
                    connector: e,
                    referrer: F,
                    authType: I ?? void 0,
                    launcherAnalytics: x,
                    installAttemptId: S
                }))
            },
            U = mn[O],
            W = O === i.Microsoft && !!k;
        if (!U || W) return (0, Q.jsx)(fn, {
            connector: e,
            onClose: n,
            tos: t,
            isConnecting: r,
            connectingAction: a,
            onContinue: o,
            authTypeOverride: s,
            showExternalIcon: c,
            additionalContent: l,
            footerContent: u,
            additionalMessageThatDoesNotContainLegalClaims: f,
            canSync: p,
            isRequestingSync: m,
            setIsRequestingSync: h,
            siwcLoginAvailable: g,
            isSiwcLoginDisabled: _,
            isContinueDisabled: v,
            hideHeaderIcons: y,
            referrerOverride: b,
            launcherAnalytics: x,
            installAttemptId: S,
            requireAuth: w,
            useGoogleOAuthBundleCopy: E,
            googleOAuthBundlePresentation: D
        });
        let {
            icon: G,
            name: te
        } = U, ne = g && !P && I === `OAUTH`, re = (0, Q.jsx)(an, {}), ie = E ? D?.oauthConnectorName ?? t.genericName : e.name;
        return (0, Q.jsxs)(cn, {
            connector: e,
            tos: t,
            onClose: n,
            useGoogleOAuthBundleCopy: E,
            googleOAuthBundlePresentation: D,
            children: [(0, Q.jsxs)(`div`, {
                className: `border-token-border-default flex items-center gap-4 rounded-xl border p-4 text-sm`,
                children: [(0, Q.jsx)(`div`, {
                    className: `text-token-text-primary`,
                    children: G
                }), (0, Q.jsxs)(`div`, {
                    className: `flex flex-col`,
                    children: [(0, Q.jsx)(`div`, {
                        className: `text-token-text-primary font-medium`,
                        children: (0, Q.jsx)(K, {
                            ...$.socialLoginTitle,
                            values: {
                                socialProvider: te
                            }
                        })
                    }), (0, Q.jsx)(`div`, {
                        className: `text-token-text-secondary`,
                        children: (0, Q.jsx)(K, {
                            ...$.socialLoginDescription,
                            values: {
                                socialProvider: te,
                                link: e => (0, Q.jsx)(`button`, {
                                    onClick: V,
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
                    children: [N ? f : null, N ? u : null, N ? l : null, ne ? (0, Q.jsx)(nn, {
                        loading: R(`SIWC`) || _,
                        disabled: L || _,
                        onClick: () => H(!0),
                        contentsFullWidth: !0,
                        children: re
                    }) : null, ne ? (0, Q.jsxs)(rn, {
                        loading: R(I),
                        disabled: L,
                        onClick: () => H(),
                        children: [(0, Q.jsx)(K, {
                            ...$.continueButton,
                            values: {
                                connectorName: ie
                            }
                        }), I === `OAUTH` && c ? (0, Q.jsx)(Ze, {
                            className: `icon-sm`
                        }) : null]
                    }) : (0, Q.jsxs)(nn, {
                        loading: R(I),
                        disabled: L,
                        onClick: () => H(),
                        children: [(0, Q.jsx)(K, {
                            ...$.continueButton,
                            values: {
                                connectorName: ie
                            }
                        }), I === `OAUTH` && c ? (0, Q.jsx)(Ze, {
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
            isPlaceholderData: N,
            isFetching: P,
            refetch: ee
        } = dt(), F = N || x && P, I = (...e) => {
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
        let G = (0, Z.useRef)(!1);
        return (0, Z.useEffect)(() => {
            let e = D?.target.current;
            if (!(!D || !W || !e || G.current)) return _e(e, () => {
                G.current || (G.current = !0, D.onVisible())
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
                ee(), H(), B()
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
                H(), B(), ee()
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
        useGoogleOAuthBundleTosCopy: j = k,
        googleOAuthBundlePresentation: M
    }) => {
        let N = (0, Z.useRef)(!1),
            P = (0, Z.useCallback)(() => {
                N.current || !D || (N.current = !0, D())
            }, [D]),
            ee = Ke(),
            F = _ ?? ee ?? `unknown_referrer`,
            I = () => {
                let n = A.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_CANCELLED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: y || void 0,
                    legacyStatsigEventName: `connectors.modal_action_taken`
                });
                q.logModalActionTaken({
                    connector_id_metadata: q.createIdMetadataFromConnector(e, F),
                    referrer: F,
                    action: `dismissed`,
                    authType: `NONE`,
                    launcherAnalytics: v,
                    installAttemptId: y,
                    eventId: n
                }), t()
            },
            L = b && e.supported_auth.some(e => e.type === `OAUTH`),
            {
                data: R,
                dataUpdatedAt: z,
                isFetching: B
            } = mt(e.id, c, {
                enabled: L
            }),
            [V] = (0, Z.useState)(() => Date.now()),
            H = L && R?.available === !0,
            U = z > V,
            W = R?.has_grant === !0 && U,
            G = H && B && !U,
            [te, ne] = (0, Z.useState)(null);
        return te ? (0, Q.jsx)(on, {
            connector: e,
            email: R?.email,
            isConnecting: n && r === `SIWC`,
            onBack: () => ne(null),
            onClose: I,
            onContinue: () => {
                te.logStart?.(), i(te.authType, !0)
            }
        }) : (0, Q.jsx)(ht, {
            connectorId: e.id,
            productSku: c,
            useGoogleOAuthBundleCopy: j,
            children: (0, Q.jsx)(gn, {
                connector: e,
                onClose: I,
                isConnecting: n,
                connectingAction: r,
                onContinue: (e, t, n) => {
                    if (!t) {
                        n?.(), i(e, t);
                        return
                    }
                    if (!G) {
                        if (W) {
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
                siwcLoginAvailable: H,
                isSiwcLoginDisabled: G,
                hideHeaderIcons: g,
                referrerOverride: F,
                launcherAnalytics: v,
                installAttemptId: y,
                requireAuth: x,
                requireFreshConsent: S,
                hideAuthRedirectBlurb: C,
                progressiveManagedAuth: w,
                onConsentAction: T,
                onPrepareMfaEnrollment: E,
                onConsentShown: P,
                consentVisibility: O,
                useGoogleOAuthBundleCopy: k,
                googleOAuthBundlePresentation: M
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
//# sourceMappingURL=b15d5b53-osnomyi8al1o7s4q.js.map