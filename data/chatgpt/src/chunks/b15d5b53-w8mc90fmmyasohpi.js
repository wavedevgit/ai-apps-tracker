import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ot as r,
    $rt as i,
    Aw as a,
    Az as o,
    C1 as s,
    Ch as c,
    Dw as l,
    Eit as u,
    Ew as d,
    Fst as f,
    Fv as p,
    Fw as m,
    G_ as h,
    J5 as g,
    JT as _,
    Jtt as v,
    Kh as y,
    L1 as b,
    N5 as x,
    Nw as S,
    Ow as C,
    Pot as w,
    Q0 as T,
    Qot as E,
    Tw as D,
    Wnt as O,
    Wrt as k,
    X3 as A,
    Xnt as j,
    Xy as M,
    Y5 as ee,
    Y_ as N,
    Yh as P,
    Zy as F,
    _6 as I,
    _nt as L,
    aL as R,
    cit as z,
    h8 as B,
    jz as V,
    kv as H,
    kw as U,
    oL as W,
    pnt as G,
    q3 as te,
    qT as ne,
    t2 as re,
    tct as ie,
    uit as ae,
    x6 as oe,
    yh as se,
    ynt as ce
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    $Un as _e,
    $gn as ve,
    C1 as ye,
    C3t as be,
    D3t as xe,
    Dit as Se,
    IWt as Ce,
    MTt as we,
    R8 as Te,
    Srt as Ee,
    XHn as De,
    ZHn as Oe,
    ZUn as ke,
    Zgn as Ae,
    Zrt as je,
    aat as Me,
    brt as q,
    dUn as Ne,
    dat as Pe,
    e_n as Fe,
    fUn as Ie,
    isn as Le,
    kTt as Re,
    lat as ze,
    mWt as Be,
    mit as Ve,
    oat as He,
    rit as Ue,
    rsn as We,
    uat as Ge,
    w1 as Ke,
    yWt as qe,
    z8 as Je
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Kv as Ye,
    Mv as Xe,
    Nv as Ze,
    qv as Qe
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    a_ as $e,
    i_ as et
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    Iv as tt,
    fv as nt
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    A as rt,
    J as it,
    g as at,
    h as ot,
    k as st,
    m as ct,
    p as lt,
    q as ut
} from "./c470f5ab-d4g7lc53n1e1ao7o.js";
import {
    a as dt,
    i as ft,
    n as pt,
    r as mt,
    t as ht
} from "./06dfbf77-llkkytqrdw75van2.js";
import {
    i as gt,
    r as _t,
    t as vt
} from "./94e0eb8c-nchhidvr05of5v3v.js";
import {
    r as yt,
    t as bt
} from "./47ed0b35-ab3xvs4n3zx2n12i.js";
import {
    n as xt,
    r as St,
    t as Ct
} from "./760cdbab-nu0ry154ftv2n5mc.js";
import {
    n as wt,
    r as Tt
} from "./d5b03218-c45heztijcfd6vsn.js";
import {
    r as Et,
    t as Dt
} from "./7517017f-m0e7hb8h6fyirvew.js";
var Ot, J, kt, At, jt = e((() => {
    Ot = he(), St(), Pe(), we(), i(), C(), Ie(), ee(), pe(), J = ue(), kt = `https://persistent.oaistatic.com/static-nux/ecosystem-app-connect-modal-bg.jpg`, At = e => {
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
                onClose: u
            } = e,
            d = s !== void 0 && s,
            f = ge(),
            p = c.connector_type === `FIRST_PARTY_ECOSYSTEM` && (n?.length ?? 0) <= 1,
            m = c.connector_type === `FIRST_PARTY_ECOSYSTEM`,
            h;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
            backgroundImage: `url(${kt})`
        }, t[0] = h) : h = t[0];
        let _;
        t[1] === f ? _ = t[2] : (_ = f.formatMessage(k.close), t[1] = f, t[2] = _);
        let v;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, J.jsx)(l, {
            className: `icon`
        }), t[3] = v) : v = t[3];
        let y;
        t[4] !== u || t[5] !== _ ? (y = (0, J.jsx)(`div`, {
            className: `flex justify-end p-2`,
            children: (0, J.jsx)(Ne, {
                className: `text-white`,
                onClick: u,
                "aria-label": _,
                children: v
            })
        }), t[4] = u, t[5] = _, t[6] = y) : y = t[6];
        let b = p && `pt-12`,
            x;
        t[7] === b ? x = t[8] : (x = g(`flex w-full flex-row`, b), t[7] = b, t[8] = x);
        let S = m ? `p-0.75` : `p-2`,
            C;
        t[9] === S ? C = t[10] : (C = g(`shrink-0 rounded-xl border-[0.5px] bg-white shadow-sm`, S), t[9] = S, t[10] = C);
        let w = m ? `large` : `medium`,
            T;
        t[11] !== c || t[12] !== w || t[13] !== C ? (T = (0, J.jsx)(Re, {
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
        let O;
        t[17] === T ? O = t[18] : (O = (0, J.jsxs)(`div`, {
            className: `flex items-center gap-3.5`,
            children: [T, E, D]
        }), t[17] = T, t[18] = O);
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
        let ee = d ? `flex w-full max-w-80 flex-col items-center justify-center gap-2 pt-4` : `flex flex-row items-center justify-center gap-4 pt-4`,
            N = p ? `pb-10` : `pb-8`,
            P;
        t[26] !== ee || t[27] !== N ? (P = g(ee, N), t[26] = ee, t[27] = N, t[28] = P) : P = t[28];
        let F;
        t[29] !== i || t[30] !== r || t[31] !== P ? (F = (0, J.jsxs)(`div`, {
            className: P,
            children: [i, r]
        }), t[29] = i, t[30] = r, t[31] = P, t[32] = F) : F = t[32];
        let I;
        t[33] === p ? I = t[34] : (I = p && (0, J.jsx)(`div`, {
            className: `py-6 text-center text-xs text-white/65`,
            children: (0, J.jsx)(K, {
                id: `ecosystemAppLinkModal.firstPartyFooterAttribution`,
                defaultMessage: `Designed and developed by OpenAI`
            })
        }), t[33] = p, t[34] = I);
        let L;
        t[35] !== O || t[36] !== M || t[37] !== F || t[38] !== I ? (L = (0, J.jsxs)(`div`, {
            className: `flex flex-auto flex-col items-center gap-4`,
            children: [O, M, F, I]
        }), t[35] = O, t[36] = M, t[37] = F, t[38] = I, t[39] = L) : L = t[39];
        let R;
        t[40] !== L || t[41] !== x ? (R = (0, J.jsx)(`div`, {
            className: x,
            children: L
        }), t[40] = L, t[41] = x, t[42] = R) : R = t[42];
        let z;
        t[43] !== R || t[44] !== y ? (z = (0, J.jsxs)(`div`, {
            className: `dark overflow-hidden bg-cover bg-no-repeat`,
            style: h,
            children: [y, R]
        }), t[43] = R, t[44] = y, t[45] = z) : z = t[45];
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
        t[50] !== n || t[51] !== p ? (H = !p && (0, J.jsx)(`div`, {
            className: `px-4 py-4`,
            children: (0, J.jsx)(xt, {
                blurbs: n
            })
        }), t[50] = n, t[51] = p, t[52] = H) : H = t[52];
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
    Nt = he(), Ce(), _(), Oe(), d(), it(), m(), P(), v(), pe(), Y = ue(), Pt = de({
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
                tos: l
            } = e,
            u;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Y.jsx)(K, {
            ...Pt.title
        }), t[0] = u) : u = t[0];
        let d = u,
            f = n?.branding?.terms_of_service ?? `https://www.microsoft.com/servicesagreement`,
            p = n?.branding?.privacy_policy ?? `https://privacy.microsoft.com/privacystatement`,
            m = Mt,
            h;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, Y.jsx)(`div`, {
            "aria-hidden": !0,
            className: `pointer-events-none absolute inset-x-0 top-0 h-36 bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-mobile-light.webp')] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] bg-cover bg-top bg-no-repeat [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] sm:h-[217px] sm:bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-desktop-light.webp')] dark:bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-mobile-dark.webp')] dark:sm:bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-desktop-dark.webp')]`
        }), t[1] = h) : h = t[1];
        let g;
        t[2] === s ? g = t[3] : (g = (0, Y.jsx)(`div`, {
            className: `absolute end-6 top-6 z-10`,
            children: (0, Y.jsx)(D, {
                onClick: s,
                radius: `full`,
                className: `bg-white/30 dark:bg-black/20`
            })
        }), t[2] = s, t[3] = g);
        let _;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, Y.jsx)(Ft, {
            Icon: y,
            iconClassName: `h-12 w-12`
        }), t[4] = _) : _ = t[4];
        let v;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, Y.jsxs)(`div`, {
            className: `flex items-center justify-center gap-3`,
            children: [_, (0, Y.jsxs)(`div`, {
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
        }), t[5] = v) : v = t[5];
        let b;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (b = G() ? (0, Y.jsx)(De.Title, {
            className: `text-center text-2xl font-semibold`,
            children: d
        }) : (0, Y.jsx)(S.Title, {
            title: (0, Y.jsx)(`span`, {
                className: `text-2xl font-semibold`,
                children: d
            })
        }), t[6] = b) : b = t[6];
        let x;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, Y.jsxs)(`div`, {
            className: `flex flex-col items-center gap-1 text-center`,
            children: [b, (0, Y.jsx)(`p`, {
                className: `text-token-text-secondary text-base`,
                children: (0, Y.jsx)(K, {
                    ...Pt.description
                })
            })]
        }), t[7] = x) : x = t[7];
        let C;
        t[8] !== n?.name || t[9] !== o || t[10] !== s || t[11] !== p || t[12] !== f || t[13] !== l ? (C = o && (0, Y.jsx)(`p`, {
            className: `text-token-text-secondary text-xs leading-5`,
            children: (0, Y.jsx)(K, {
                ...Pt.dataSharingDisclosure,
                values: {
                    connectorName: n?.name ?? l.genericName,
                    termsLink: e => m(f, e),
                    privacyPolicyLink: e => m(p, e),
                    learnMoreLink: e => m(`https://help.openai.com/en/articles/11487775-apps-in-chatgpt`, e),
                    settingsLink: e => (0, Y.jsx)(`a`, {
                        className: `interactive-label-secondary font-medium`,
                        href: Be,
                        onClick: s,
                        children: e
                    })
                }
            })
        }), t[8] = n?.name, t[9] = o, t[10] = s, t[11] = p, t[12] = f, t[13] = l, t[14] = C) : C = t[14];
        let w = a || i,
            T;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, Y.jsx)(K, {
            ...Pt.connectButton
        }), t[15] = T) : T = t[15];
        let E;
        t[16] !== i || t[17] !== c || t[18] !== w ? (E = (0, Y.jsx)(ne, {
            type: `button`,
            color: `primary`,
            size: `large`,
            className: `w-full rounded-full`,
            disabled: w,
            loading: i,
            onClick: c,
            children: T
        }), t[16] = i, t[17] = c, t[18] = w, t[19] = E) : E = t[19];
        let O;
        t[20] !== r || t[21] !== E || t[22] !== C ? (O = (0, Y.jsxs)(`div`, {
            className: `relative flex flex-col gap-6 px-6 pt-16 pb-8 sm:px-8`,
            children: [v, x, r, C, E]
        }), t[20] = r, t[21] = E, t[22] = C, t[23] = O) : O = t[23];
        let k;
        return t[24] !== O || t[25] !== g ? (k = (0, Y.jsxs)(`section`, {
            "data-microsoft-oauth-bundle-interstitial": !0,
            className: `bg-token-bg-primary relative overflow-hidden rounded-t-2xl sm:rounded-2xl`,
            children: [h, g, O]
        }), t[24] = O, t[25] = g, t[26] = k) : k = t[26], k
    }
}));

function Rt(e) {
    return (0, X.jsx)(ke, {
        href: Dt,
        className: `underline`,
        children: e
    })
}
var zt, Bt, X, Vt, Ht, Ut, Wt = e((() => {
    zt = he(), _(), Et(), d(), _e(), Je(), Le(), Bt = n(me()), pe(), X = ue(), Vt = e => {
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
            l = ge(),
            u;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, X.jsx)(`div`, {
            className: `text-2xl font-semibold`,
            children: (0, X.jsx)(K, {
                ...Ut.advancedSettingsTitle
            })
        }), t[0] = u) : u = t[0];
        let d;
        t[1] === i ? d = t[2] : (d = (0, X.jsxs)(`div`, {
            className: `flex items-start justify-between`,
            children: [u, (0, X.jsx)(D, {
                onClick: i
            })]
        }), t[1] = i, t[2] = d);
        let f;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, X.jsx)(`div`, {
            className: `mt-6 mb-2 text-sm font-medium`,
            children: (0, X.jsx)(K, {
                ...Ut.connectionType
            })
        }), t[3] = f) : f = t[3];
        let p = s ? `sync` : `ondemand`,
            m;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (m = e => c(e === `sync`), t[4] = m) : m = t[4];
        let h;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, X.jsx)(`div`, {
            className: `text-sm font-medium`,
            children: (0, X.jsx)(K, {
                ...Ut.syncTitle
            })
        }), t[5] = h) : h = t[5];
        let g;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, X.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [h, (0, X.jsx)(`div`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, X.jsx)(K, {
                    ...Ut.syncDescription,
                    values: {
                        link: Rt
                    }
                })
            })]
        }), t[6] = g) : g = t[6];
        let _;
        t[7] === s ? _ = t[8] : (_ = (0, X.jsxs)(`label`, {
            className: `flex items-start justify-between gap-3 p-4`,
            children: [g, (0, X.jsx)(We, {
                value: `sync`,
                children: (0, X.jsx)(Ht, {
                    selected: s
                })
            })]
        }), t[7] = s, t[8] = _);
        let v;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, X.jsx)(`div`, {
            className: `text-sm font-medium`,
            children: (0, X.jsx)(K, {
                ...Ut.onDemandTitle
            })
        }), t[9] = v) : v = t[9];
        let y;
        t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, X.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [v, (0, X.jsx)(`div`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, X.jsx)(K, {
                    ...Ut.onDemandDescription
                })
            })]
        }), t[10] = y) : y = t[10];
        let b = !s,
            x;
        t[11] === b ? x = t[12] : (x = (0, X.jsxs)(`label`, {
            className: `border-token-border-default flex items-start justify-between gap-3 border-t p-4`,
            children: [y, (0, X.jsx)(We, {
                value: `ondemand`,
                children: (0, X.jsx)(Ht, {
                    selected: b
                })
            })]
        }), t[11] = b, t[12] = x);
        let S;
        t[13] !== x || t[14] !== p || t[15] !== _ ? (S = (0, X.jsx)(`div`, {
            className: `mt-2`,
            children: (0, X.jsx)(`div`, {
                className: `border-token-border-default overflow-hidden rounded-xl border`,
                children: (0, X.jsxs)(Te.Root, {
                    value: p,
                    onValueChange: m,
                    className: `flex w-full flex-col`,
                    children: [_, x]
                })
            })
        }), t[13] = x, t[14] = p, t[15] = _, t[16] = S) : S = t[16];
        let C;
        t[17] !== s || t[18] !== i || t[19] !== n ? (C = () => {
            s !== n && c(n), i()
        }, t[17] = s, t[18] = i, t[19] = n, t[20] = C) : C = t[20];
        let w;
        t[21] === l ? w = t[22] : (w = l.formatMessage(Ut.cancel), t[21] = l, t[22] = w);
        let T;
        t[23] !== C || t[24] !== w ? (T = (0, X.jsx)(ne, {
            color: `secondary`,
            onClick: C,
            children: w
        }), t[23] = C, t[24] = w, t[25] = T) : T = t[25];
        let E;
        t[26] !== s || t[27] !== r || t[28] !== i || t[29] !== n ? (E = () => {
            n !== s && r(s), i()
        }, t[26] = s, t[27] = r, t[28] = i, t[29] = n, t[30] = E) : E = t[30];
        let O;
        t[31] === l ? O = t[32] : (O = l.formatMessage(Ut.save), t[31] = l, t[32] = O);
        let k;
        t[33] !== o || t[34] !== E || t[35] !== O ? (k = (0, X.jsx)(ne, {
            onClick: E,
            disabled: o,
            children: O
        }), t[33] = o, t[34] = E, t[35] = O, t[36] = k) : k = t[36];
        let A;
        t[37] !== T || t[38] !== k ? (A = (0, X.jsxs)(`div`, {
            className: `mt-auto flex items-center justify-between pt-4`,
            children: [T, k]
        }), t[37] = T, t[38] = k, t[39] = A) : A = t[39];
        let j;
        return t[40] !== S || t[41] !== A || t[42] !== d ? (j = (0, X.jsxs)(`div`, {
            className: `flex flex-1 flex-col p-2`,
            children: [d, f, S, A]
        }), t[40] = S, t[41] = A, t[42] = d, t[43] = j) : j = t[43], j
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
    if (!(A(x(Kt)?.planType) && s)) return null;
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
    return t[3] !== o || t[4] !== c ? (u = (0, Jt.jsx)(M, {
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
    return s()
}
var qt, Jt, Yt = e((() => {
        qt = he(), Ze(), F(), B(), b(), te(), pe(), Jt = ue()
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
    return e === qe ? `github_connector` : `connector`
}
var Z, Q, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, $, vn = e((() => {
    ie(), c(), St(), jt(), Tt(), Lt(), Pe(), Me(), Wt(), we(), bt(), je(), Ce(), _(), Et(), a(), d(), Qe(), at(), rt(), ct(), T(), P(), Yt(), p(), xe(), tt(), et(), r(), _t(), V(), ve(), W(), ae(), ce(), ye(), Ee(), oe(), j(), ee(), Z = n(me()), pe(), fe(), pt(), Q = ue(), en = [`OAUTH`, `API_KEY`, `NONE`], tn = (e, t) => t ? {
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
    }) => (0, Q.jsx)(ne, {
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
    }) => (0, Q.jsx)(ne, {
        className: g(`text-token-text-secondary border-0`, n ? `w-fit` : `w-full`),
        size: `large`,
        onClick: r,
        loading: e,
        disabled: t,
        color: `secondary`,
        children: i
    }), an = () => {
        let e = w()?.user;
        return (0, Q.jsxs)(`span`, {
            className: `grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center`,
            children: [(0, Q.jsx)(`span`, {
                className: `col-start-2 min-w-0 text-center`,
                children: (0, Q.jsx)(K, {
                    ...$.continueWithChatGPTButton
                })
            }), (0, Q.jsx)(`span`, {
                className: `pointer-events-none translate-x-1.5 justify-self-end`,
                children: (0, Q.jsx)(se, {
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
        let o = w()?.user;
        return (0, Q.jsxs)(`div`, {
            className: g(`flex flex-col gap-6`, He(e) && `p-4`),
            children: [(0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between`,
                children: [(0, Q.jsx)(U, {
                    type: `button`,
                    onClick: r
                }), (0, Q.jsx)(D, {
                    onClick: i
                })]
            }), (0, Q.jsx)(`div`, {
                className: `flex flex-col items-center`,
                children: (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-2.5`,
                    children: [(0, Q.jsx)(Re, {
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
                            children: [(0, Q.jsx)(se, {
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
        e === `connection` && Fe(t.id, Ae.ConnectorLinkContinueClick, {
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
            c = L.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                stage: `CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED`,
                surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                connectorId: t.id,
                flowCorrelationId: a || void 0,
                modalAction: e === `mfa` ? `CHATGPT_CONNECTORS_LINK_MODAL_ACTION_MFA` : `CHATGPT_CONNECTORS_LINK_MODAL_ACTION_CONNECTION`,
                referrer: n || void 0,
                legacyStatsigEventName: s
            });
        L.logValueEventWithStatsig({
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
            d = N[e.id],
            p = d === f.GMAIL_CONNECTOR || d === f.GCAL_CONNECTOR,
            m = a && t && !p ? [u, ...t.blurbs] : t?.blurbs,
            g = d != null && h.has(d),
            _ = e.status === `DISABLED_BY_ADMIN`;
        return (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-6`,
            children: [(0, Q.jsxs)(`div`, {
                children: [(0, Q.jsx)(ze, {
                    onClose: n,
                    connectorIcon: s ? c?.connectorIcons ?? (0, Q.jsx)(`div`, {
                        className: `bg-token-bg-primary flex h-11 w-11 items-center justify-center rounded-xl border-[0.5px] shadow-sm`,
                        children: (0, Q.jsx)(st, {
                            className: `h-8 w-8`,
                            "aria-hidden": !0
                        })
                    }) : (0, Q.jsx)(Re, {
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
            }), (0, Q.jsx)(D, {
                onClick: n
            })]
        }), (0, Q.jsx)(`div`, {
            className: `flex flex-col`,
            children: (0, Q.jsx)(be, {
                lines: 2,
                size: `lg`,
                width: 70,
                widthVariance: 20
            })
        }), (0, Q.jsx)(`div`, {
            className: `flex flex-col`,
            children: (0, Q.jsx)(be, {
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
            children: (0, Q.jsx)(ne, {
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
        productSku: s
    }) => {
        let {
            data: c,
            isLoading: l,
            isError: u,
            refetch: d
        } = ft(n, s), f = c?.blurbs ?? [], p = c?.generic_name ?? `Google`;
        return (0, Q.jsxs)(Q.Fragment, {
            children: [(0, Q.jsx)(ze, {
                onClose: r,
                connectorIcon: e,
                title: (0, Q.jsx)(K, {
                    ...$.addConnectorLinkModalTitle,
                    values: {
                        connectorName: t
                    }
                })
            }), l ? (0, Q.jsx)(`div`, {
                className: `flex items-center justify-center p-4`,
                children: (0, Q.jsx)(o, {})
            }) : u ? (0, Q.jsx)(`div`, {
                className: `flex items-center justify-center pt-4`,
                children: (0, Q.jsx)(ne, {
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
                    loading: i,
                    onClick: a,
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
        authTypeOverride: o,
        showExternalIcon: s,
        additionalContent: c,
        footerContent: l,
        additionalMessageThatDoesNotContainLegalClaims: u,
        canSync: d = !1,
        isRequestingSync: f = !1,
        setIsRequestingSync: p,
        isContinueDisabled: m = !1,
        siwcLoginAvailable: h = !1,
        isSiwcLoginDisabled: g = !1,
        hideHeaderIcons: _ = !1,
        referrerOverride: v,
        launcherAnalytics: y,
        installAttemptId: b,
        requireAuth: x = !1,
        useGoogleOAuthBundleCopy: S = !1,
        googleOAuthBundlePresentation: C
    }) => {
        let w = E() && O(`2792858552`),
            T = Ve(),
            D = Zt(v),
            k = o ?? T,
            A = x && k === `NONE` ? void 0 : k,
            j = Ue(e, A),
            M = e.status === `DISABLED_BY_ADMIN`,
            ee = m || M,
            N = ee || r,
            P = e => r && (i === void 0 || i === e),
            F = M ? (0, Q.jsx)(K, {
                ...$.workspaceAdminApprovalRequired,
                values: {
                    connectorName: e.name
                }
            }) : void 0,
            z = (0, Z.useRef)(null);
        (0, Z.useEffect)(() => {
            if (z.current?.connectorId === e.id && z.current.installAttemptId === b) return;
            z.current = {
                connectorId: e.id,
                installAttemptId: b
            }, q.logModalShown({
                connector_id_metadata: q.createIdMetadataFromConnector(e, D ?? `unknown_referrer`),
                referrer: D ?? `unknown_referrer`,
                mfaState: `not_required`,
                authType: j ?? void 0,
                launcherAnalytics: y,
                installAttemptId: b
            });
            let t = `connectors.shown_connect_modal`,
                n = L.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: b || void 0,
                    mfaState: `CHATGPT_CONNECTORS_LINK_MODAL_MFA_STATE_NOT_REQUIRED`,
                    referrer: D || void 0,
                    legacyStatsigEventName: t
                });
            L.logValueEventWithStatsig({
                segmentEventName: t,
                statsigEventName: t,
                eventId: n,
                data: {
                    mfa: `not_required`,
                    type: e.id,
                    ...D && {
                        referrer: D
                    },
                    ...b && {
                        install_attempt_id: b
                    }
                }
            })
        }, [e, b, y, D, j]);
        let B = (t, n = !1) => {
                if (M) return;
                let r = W ? t : j;
                a(t, n, () => sn({
                    action: `connection`,
                    connector: e,
                    referrer: D ?? `unknown_referrer`,
                    authType: r ?? void 0,
                    launcherAnalytics: y,
                    installAttemptId: b
                }))
            },
            {
                supported_auth: V
            } = e,
            U = en.filter(e => x && e === `NONE` ? !1 : V.some(t => t.type === e)),
            W = w && !A && U.length > 1,
            G = h && !M && (W ? U.includes(`OAUTH`) : j === `OAUTH`),
            te = [{
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
                content: M ? void 0 : u
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
            le = S ? C?.oauthConnectorName ?? t.genericName : e.name,
            {
                country: ue
            } = R(),
            de = ue != null && I.has(ue),
            fe = (0, Q.jsx)(an, {}),
            pe = (0, Q.jsxs)(Q.Fragment, {
                children: [G ? (0, Q.jsx)(nn, {
                    loading: P(`SIWC`) || g,
                    disabled: N || g,
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
                        }), t === `OAUTH` && s ? (0, Q.jsx)(Ye, {
                            className: `icon-sm`
                        }) : null]
                    });
                    return n === 0 && !G ? (0, Q.jsx)(nn, {
                        fitWidth: ce,
                        loading: P(t),
                        disabled: N,
                        onClick: () => B(t),
                        children: r
                    }, t) : (0, Q.jsx)(rn, {
                        fitWidth: ce,
                        loading: P(t),
                        disabled: N,
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
                    loading: P(`SIWC`) || g,
                    disabled: N || g,
                    onClick: () => B(`OAUTH`, !0),
                    contentsFullWidth: !0,
                    children: fe
                }) : null, G ? (0, Q.jsx)(rn, {
                    loading: P(j),
                    disabled: N,
                    onClick: () => B(j),
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
                        }), s && (0, Q.jsx)(Ye, {
                            className: `icon-sm`
                        })]
                    })
                }) : (0, Q.jsx)(nn, {
                    fitWidth: ce,
                    loading: P(j),
                    disabled: N,
                    onClick: () => B(j),
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
                        }), j === `OAUTH` && s && (0, Q.jsx)(Ye, {
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
        if (re && p && !r) return (0, Q.jsx)(Vt, {
            value: f,
            onChange: p,
            onClose: () => ie(!1)
        });
        if (C?.hasCompanionConnectors && c && !se) return (0, Q.jsx)(C.oauthBundleProvider === `microsoft` ? It : wt, {
            connector: e,
            connectorRows: c,
            isConnecting: r,
            isContinueDisabled: ee,
            isEU: de,
            onClose: n,
            onContinue: () => B(j),
            tos: t
        });
        if (se) {
            let i = (0, Q.jsxs)(Q.Fragment, {
                children: [W ? pe : me, d && (0, Q.jsx)(rn, {
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
                additionalContent: c,
                footerContent: l,
                primaryActionMessage: F,
                stackPrimaryActions: G || c != null,
                onClose: n
            })
        }
        return (0, Q.jsx)(Q.Fragment, {
            children: (0, Q.jsx)(cn, {
                connector: e,
                tos: t,
                onClose: n,
                beforeBlurbs: ne,
                willSync: f,
                hideHeaderIcons: _,
                useGoogleOAuthBundleCopy: S,
                googleOAuthBundlePresentation: C,
                children: (0, Q.jsxs)(`div`, {
                    className: `flex flex-col gap-2`,
                    children: [l, c, W ? pe : me, d && (0, Q.jsx)(`p`, {
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
                n = L.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: o || void 0,
                    mfaState: `CHATGPT_CONNECTORS_LINK_MODAL_MFA_STATE_REQUIRED`,
                    referrer: f || void 0,
                    legacyStatsigEventName: t
                });
            L.logValueEventWithStatsig({
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
                n = L.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: o || void 0,
                    modalAction: `CHATGPT_CONNECTORS_LINK_MODAL_ACTION_MFA`,
                    referrer: f || void 0,
                    legacyStatsigEventName: t
                });
            L.logValueEventWithStatsig({
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
                    re(vt, {
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
        [u.Google]: {
            icon: (0, Q.jsx)(st, {}),
            name: `Google`
        },
        [u.Microsoft]: {
            icon: (0, Q.jsx)(lt, {}),
            name: `Microsoft`
        },
        [u.Apple]: {
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
        showExternalIcon: s,
        additionalContent: c,
        footerContent: l,
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
        } = z(), [k, A] = (0, Z.useState)(!1), j = !w || k, M = e.status === `DISABLED_BY_ADMIN`, ee = Qt(le(), x), N = Zt(y), P = Ue(e, o), F = j && _ || M || r, I = e => r && (i === void 0 || i === e), R = (0, Z.useRef)(null);
        (0, Z.useEffect)(() => {
            if (R.current?.connectorId === e.id && R.current.installAttemptId === x) return;
            R.current = {
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
                n = L.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: x || void 0,
                    mfaState: `CHATGPT_CONNECTORS_LINK_MODAL_MFA_STATE_SUGGESTED`,
                    referrer: N || void 0,
                    legacyStatsigEventName: t
                });
            L.logValueEventWithStatsig({
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
        let B = () => {
                S?.(`mfa`), q.logModalActionTaken({
                    connector_id_metadata: q.createIdMetadataFromConnector(e, N ?? `unknown_referrer`),
                    referrer: N ?? `unknown_referrer`,
                    action: `mfa`,
                    authType: P ?? `NONE`,
                    launcherAnalytics: b,
                    installAttemptId: x
                });
                let t = `connectors.click_continue_modal`,
                    n = L.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                        stage: `CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED`,
                        surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                        connectorId: e.id,
                        flowCorrelationId: x || void 0,
                        modalAction: `CHATGPT_CONNECTORS_LINK_MODAL_ACTION_MFA`,
                        referrer: N || void 0,
                        legacyStatsigEventName: t
                    });
                L.logValueEventWithStatsig({
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
                }), re(vt, {
                    redirectUrl: ee,
                    source: $t(e.id)
                })
            },
            V = (t = !1) => {
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
            H = mn[D],
            U = D === u.Microsoft && !!O;
        if (!H || U) return (0, Q.jsx)(fn, {
            connector: e,
            onClose: n,
            tos: t,
            isConnecting: r,
            connectingAction: i,
            onContinue: a,
            authTypeOverride: o,
            showExternalIcon: s,
            additionalContent: c,
            footerContent: l,
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
            icon: W,
            name: G
        } = H, te = h && !M && P === `OAUTH`, ne = (0, Q.jsx)(an, {}), ie = T ? E?.oauthConnectorName ?? t.genericName : e.name;
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
                    children: W
                }), (0, Q.jsxs)(`div`, {
                    className: `flex flex-col`,
                    children: [(0, Q.jsx)(`div`, {
                        className: `text-token-text-primary font-medium`,
                        children: (0, Q.jsx)(K, {
                            ...$.socialLoginTitle,
                            values: {
                                socialProvider: G
                            }
                        })
                    }), (0, Q.jsx)(`div`, {
                        className: `text-token-text-secondary`,
                        children: (0, Q.jsx)(K, {
                            ...$.socialLoginDescription,
                            values: {
                                socialProvider: G,
                                link: e => (0, Q.jsx)(`button`, {
                                    onClick: B,
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
                    children: [j ? d : null, j ? l : null, j ? c : null, te ? (0, Q.jsx)(nn, {
                        loading: I(`SIWC`) || g,
                        disabled: F || g,
                        onClick: () => V(!0),
                        contentsFullWidth: !0,
                        children: ne
                    }) : null, te ? (0, Q.jsxs)(rn, {
                        loading: I(P),
                        disabled: F,
                        onClick: () => V(),
                        children: [(0, Q.jsx)(K, {
                            ...$.continueButton,
                            values: {
                                connectorName: ie
                            }
                        }), P === `OAUTH` && s ? (0, Q.jsx)(Ye, {
                            className: `icon-sm`
                        }) : null]
                    }) : (0, Q.jsxs)(nn, {
                        loading: I(P),
                        disabled: F,
                        onClick: () => V(),
                        children: [(0, Q.jsx)(K, {
                            ...$.continueButton,
                            values: {
                                connectorName: ie
                            }
                        }), P === `OAUTH` && s ? (0, Q.jsx)(Ye, {
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
        let G = (0, Z.useRef)(!1);
        return (0, Z.useEffect)(() => {
            let e = D?.target.current;
            if (!(!D || !W || !e || G.current)) return Ke(e, () => {
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
            N = Se(),
            P = _ ?? N ?? `unknown_referrer`,
            F = () => {
                let n = L.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
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
                data: R,
                dataUpdatedAt: z,
                isFetching: B
            } = mt(e.id, c, {
                enabled: I
            }),
            [V] = (0, Z.useState)(() => Date.now()),
            H = I && R?.available === !0,
            U = z > V,
            W = R?.has_grant === !0 && U,
            G = H && B && !U,
            [te, ne] = (0, Z.useState)(null);
        return te ? (0, Q.jsx)(on, {
            connector: e,
            email: R?.email,
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
//# sourceMappingURL=b15d5b53-w8mc90fmmyasohpi.js.map