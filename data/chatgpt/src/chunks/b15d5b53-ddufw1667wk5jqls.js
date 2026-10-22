import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    $ot as i,
    Av as a,
    Dit as o,
    F6 as s,
    Fw as c,
    Git as l,
    Int as u,
    Iv as d,
    Iw as f,
    K_ as p,
    Mnt as m,
    Mw as h,
    N1 as g,
    Nw as _,
    Pw as v,
    Qy as y,
    Rnt as b,
    Rz as x,
    Vw as S,
    X_ as C,
    Xh as w,
    Zy as T,
    _st as E,
    bct as D,
    bh as O,
    c2 as k,
    c7 as A,
    d2 as j,
    dL as ee,
    eE as M,
    ect as N,
    fL as P,
    hrt as F,
    j6 as I,
    jw as L,
    k8 as R,
    kit as z,
    l7 as B,
    lit as te,
    lrt as V,
    pnt as H,
    q1 as U,
    q5 as W,
    qh as ne,
    s6 as re,
    u6 as ie,
    vit as ae,
    vst as oe,
    wh as se,
    zw as ce,
    zz as le
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    At as ue,
    Bn as de,
    Ln as fe,
    Nn as G,
    Q as pe,
    Rn as me,
    Vn as he,
    wn as ge,
    zn as _e
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    A1 as ve,
    A3t as ye,
    FUn as be,
    F_n as xe,
    G8 as Se,
    IUn as Ce,
    IWn as we,
    IWt as Te,
    Jrt as Ee,
    M_n as De,
    OTt as Oe,
    P3t as ke,
    P_n as Ae,
    RWn as je,
    W8 as Me,
    XUn as Ne,
    ZUn as Pe,
    _rt as K,
    cat as Fe,
    dit as Ie,
    eit as Le,
    jTt as Re,
    k1 as ze,
    mWt as Be,
    msn as Ve,
    nat as He,
    oat as Ue,
    psn as We,
    rat as Ge,
    sat as Ke,
    wit as qe,
    yWt as Je,
    yrt as Ye
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Kv as Xe,
    Mv as Ze,
    Nv as Qe,
    qv as $e
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    c_ as et,
    l_ as tt
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    Rv as nt,
    mv as rt
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    A as it,
    J as at,
    g as ot,
    h as st,
    k as ct,
    m as lt,
    p as ut,
    q as dt
} from "./c470f5ab-hgik953cu5ujlhdm.js";
import {
    a as ft,
    i as pt,
    n as mt,
    r as ht,
    t as gt
} from "./06dfbf77-upybysb97b43q9bo.js";
import {
    i as _t,
    r as vt,
    t as yt
} from "./94e0eb8c-deqz7js9q13jbi2m.js";
import {
    r as bt,
    t as xt
} from "./47ed0b35-bw34hvjz8cuagnzo.js";
import {
    n as St,
    r as Ct,
    t as wt
} from "./760cdbab-h7i54dysnqrkk30m.js";
import {
    n as Tt,
    r as Et
} from "./d5b03218-f03bwtopl1qmt6ik.js";
import {
    r as Dt,
    t as Ot
} from "./7517017f-m0e7hb8h6fyirvew.js";
var kt, q, At, jt, Mt = e((() => {
    kt = ge(), Ct(), Fe(), Re(), ae(), v(), Pe(), B(), me(), q = de(), At = `https://persistent.oaistatic.com/static-nux/ecosystem-app-connect-modal-bg.jpg`, jt = e => {
        "use forget";
        let t = (0, kt.c)(60),
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
            d = _e(),
            f = c.connector_type === `FIRST_PARTY_ECOSYSTEM` && (n?.length ?? 0) <= 1,
            p = c.connector_type === `FIRST_PARTY_ECOSYSTEM`,
            m;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
            backgroundImage: `url(${At})`
        }, t[0] = m) : m = t[0];
        let h;
        t[1] === d ? h = t[2] : (h = d.formatMessage(te.close), t[1] = d, t[2] = h);
        let g;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, q.jsx)(_, {
            className: `icon`
        }), t[3] = g) : g = t[3];
        let v;
        t[4] !== l || t[5] !== h ? (v = (0, q.jsx)(`div`, {
            className: `flex justify-end p-2`,
            children: (0, q.jsx)(Ne, {
                className: `text-white`,
                onClick: l,
                "aria-label": h,
                children: g
            })
        }), t[4] = l, t[5] = h, t[6] = v) : v = t[6];
        let y = f && `pt-12`,
            b;
        t[7] === y ? b = t[8] : (b = A(`flex w-full flex-row`, y), t[7] = y, t[8] = b);
        let x = p ? `p-0.75` : `p-2`,
            S;
        t[9] === x ? S = t[10] : (S = A(`shrink-0 rounded-xl border-[0.5px] bg-white shadow-sm`, x), t[9] = x, t[10] = S);
        let C = p ? `large` : `medium`,
            w;
        t[11] !== c || t[12] !== C || t[13] !== S ? (w = (0, q.jsx)(Oe, {
            connector: c,
            className: S,
            size: C
        }), t[11] = c, t[12] = C, t[13] = S, t[14] = w) : w = t[14];
        let T, E;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, q.jsx)(`div`, {
            className: `my-auto h-8 w-px bg-white opacity-70`
        }), E = (0, q.jsx)(Ke, {
            size: `medium`
        }), t[15] = T, t[16] = E) : (T = t[15], E = t[16]);
        let D;
        t[17] === w ? D = t[18] : (D = (0, q.jsxs)(`div`, {
            className: `flex items-center gap-3.5`,
            children: [w, T, E]
        }), t[17] = w, t[18] = D);
        let O;
        t[19] === c.name ? O = t[20] : (O = (0, q.jsx)(`h2`, {
            className: `text-token-text-primary m-0 text-center text-2xl font-medium`,
            children: (0, q.jsx)(G, {
                id: `54VsXX`,
                defaultMessage: `Add {connectorName} to ChatGPT`,
                values: {
                    connectorName: c.name
                }
            })
        }), t[19] = c.name, t[20] = O);
        let k;
        t[21] === c.description ? k = t[22] : (k = c.description && (0, q.jsx)(`span`, {
            className: `text-token-text-primary line-clamp-5 text-center text-sm`,
            children: c.description
        }), t[21] = c.description, t[22] = k);
        let j;
        t[23] !== O || t[24] !== k ? (j = (0, q.jsxs)(`div`, {
            className: `flex w-full flex-col items-center gap-2 px-5 text-center text-balance`,
            children: [O, k]
        }), t[23] = O, t[24] = k, t[25] = j) : j = t[25];
        let ee = u ? `flex w-full max-w-80 flex-col items-center justify-center gap-2 pt-4` : `flex flex-row items-center justify-center gap-4 pt-4`,
            M = f ? `pb-10` : `pb-8`,
            N;
        t[26] !== ee || t[27] !== M ? (N = A(ee, M), t[26] = ee, t[27] = M, t[28] = N) : N = t[28];
        let P;
        t[29] !== i || t[30] !== r || t[31] !== N ? (P = (0, q.jsxs)(`div`, {
            className: N,
            children: [i, r]
        }), t[29] = i, t[30] = r, t[31] = N, t[32] = P) : P = t[32];
        let F;
        t[33] === f ? F = t[34] : (F = f && (0, q.jsx)(`div`, {
            className: `py-6 text-center text-xs text-white/65`,
            children: (0, q.jsx)(G, {
                id: `ecosystemAppLinkModal.firstPartyFooterAttribution`,
                defaultMessage: `Designed and developed by OpenAI`
            })
        }), t[33] = f, t[34] = F);
        let I;
        t[35] !== D || t[36] !== j || t[37] !== P || t[38] !== F ? (I = (0, q.jsxs)(`div`, {
            className: `flex flex-auto flex-col items-center gap-4`,
            children: [D, j, P, F]
        }), t[35] = D, t[36] = j, t[37] = P, t[38] = F, t[39] = I) : I = t[39];
        let L;
        t[40] !== I || t[41] !== b ? (L = (0, q.jsx)(`div`, {
            className: b,
            children: I
        }), t[40] = I, t[41] = b, t[42] = L) : L = t[42];
        let R;
        t[43] !== L || t[44] !== v ? (R = (0, q.jsxs)(`div`, {
            className: `dark overflow-hidden bg-cover bg-no-repeat`,
            style: m,
            children: [v, L]
        }), t[43] = L, t[44] = v, t[45] = R) : R = t[45];
        let z;
        t[46] === a ? z = t[47] : (z = a ? (0, q.jsx)(`div`, {
            className: `border-token-border-default border-b px-5 py-4`,
            children: a
        }) : null, t[46] = a, t[47] = z);
        let B;
        t[48] === o ? B = t[49] : (B = o ? (0, q.jsx)(`div`, {
            className: `px-4 pt-4`,
            children: (0, q.jsx)(`div`, {
                className: `bg-token-interactive-bg-accent-muted-context rounded-xl p-4 text-center text-sm text-[#0285FF]`,
                children: o
            })
        }) : null, t[48] = o, t[49] = B);
        let V;
        t[50] !== n || t[51] !== f ? (V = !f && (0, q.jsx)(`div`, {
            className: `px-4 py-4`,
            children: (0, q.jsx)(St, {
                blurbs: n
            })
        }), t[50] = n, t[51] = f, t[52] = V) : V = t[52];
        let H;
        t[53] !== B || t[54] !== V ? (H = (0, q.jsxs)(`div`, {
            className: `px-1`,
            children: [B, V]
        }), t[53] = B, t[54] = V, t[55] = H) : H = t[55];
        let U;
        return t[56] !== R || t[57] !== z || t[58] !== H ? (U = (0, q.jsxs)(`div`, {
            className: `flex flex-col`,
            children: [R, z, H]
        }), t[56] = R, t[57] = z, t[58] = H, t[59] = U) : U = t[59], U
    }
}));

function Nt(e, t) {
    return (0, J.jsx)(`a`, {
        className: `interactive-label-secondary font-medium`,
        href: e,
        target: `_blank`,
        rel: `noopener noreferrer`,
        children: t
    })
}
var Pt, J, Ft, It, Lt, Rt = e((() => {
    Pt = ge(), Te(), M(), Ce(), h(), at(), S(), w(), H(), me(), J = de(), Ft = fe({
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
    }), It = e => {
        "use forget";
        let t = (0, Pt.c)(3),
            {
                Icon: n,
                iconClassName: r
            } = e,
            i;
        return t[0] !== n || t[1] !== r ? (i = (0, J.jsx)(`div`, {
            className: `bg-token-bg-primary flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl border-[0.5px] shadow-sm`,
            children: (0, J.jsx)(n, {
                className: r,
                "aria-hidden": !0
            })
        }), t[0] = n, t[1] = r, t[2] = i) : i = t[2], i
    }, Lt = e => {
        "use forget";
        let t = (0, Pt.c)(27),
            {
                connector: n,
                connectorRows: i,
                isConnecting: a,
                isContinueDisabled: o,
                isEU: s,
                onClose: c,
                onContinue: l,
                tos: u
            } = e,
            d;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, J.jsx)(G, {
            ...Ft.title
        }), t[0] = d) : d = t[0];
        let f = d,
            p = n?.branding?.terms_of_service ?? `https://www.microsoft.com/servicesagreement`,
            h = n?.branding?.privacy_policy ?? `https://privacy.microsoft.com/privacystatement`,
            g = Nt,
            _;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, J.jsx)(`div`, {
            "aria-hidden": !0,
            className: `pointer-events-none absolute inset-x-0 top-0 h-36 bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-mobile-light.webp')] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] bg-cover bg-top bg-no-repeat [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] sm:h-[217px] sm:bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-desktop-light.webp')] dark:bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-mobile-dark.webp')] dark:sm:bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-desktop-dark.webp')]`
        }), t[1] = _) : _ = t[1];
        let v;
        t[2] === c ? v = t[3] : (v = (0, J.jsx)(`div`, {
            className: `absolute end-6 top-6 z-10`,
            children: (0, J.jsx)(L, {
                onClick: c,
                radius: `full`,
                className: `bg-white/30 dark:bg-black/20`
            })
        }), t[2] = c, t[3] = v);
        let y;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, J.jsx)(It, {
            Icon: ne,
            iconClassName: `h-12 w-12`
        }), t[4] = y) : y = t[4];
        let b;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, J.jsxs)(`div`, {
            className: `flex items-center justify-center gap-3`,
            children: [y, (0, J.jsxs)(`div`, {
                "aria-hidden": !0,
                className: `flex gap-1`,
                children: [(0, J.jsx)(`span`, {
                    className: `h-1.5 w-1.5 rounded-full bg-white/75`
                }), (0, J.jsx)(`span`, {
                    className: `h-1.5 w-1.5 rounded-full bg-white/75`
                }), (0, J.jsx)(`span`, {
                    className: `h-1.5 w-1.5 rounded-full bg-white/75`
                })]
            }), (0, J.jsx)(It, {
                Icon: dt,
                iconClassName: `h-13 w-13`
            })]
        }), t[5] = b) : b = t[5];
        let x;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (x = m() ? (0, J.jsx)(be.Title, {
            className: `text-center text-2xl font-semibold`,
            children: f
        }) : (0, J.jsx)(ce.Title, {
            title: (0, J.jsx)(`span`, {
                className: `text-2xl font-semibold`,
                children: f
            })
        }), t[6] = x) : x = t[6];
        let S;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, J.jsxs)(`div`, {
            className: `flex flex-col items-center gap-1 text-center`,
            children: [x, (0, J.jsx)(`p`, {
                className: `text-token-text-secondary text-base`,
                children: (0, J.jsx)(G, {
                    ...Ft.description
                })
            })]
        }), t[7] = S) : S = t[7];
        let C;
        t[8] !== n?.name || t[9] !== s || t[10] !== c || t[11] !== h || t[12] !== p || t[13] !== u ? (C = s && (0, J.jsx)(`p`, {
            className: `text-token-text-secondary text-xs leading-5`,
            children: (0, J.jsx)(G, {
                ...Ft.dataSharingDisclosure,
                values: {
                    connectorName: n?.name ?? u.genericName,
                    termsLink: e => g(p, e),
                    privacyPolicyLink: e => g(h, e),
                    learnMoreLink: e => g(`https://help.openai.com/en/articles/11487775-apps-in-chatgpt`, e),
                    settingsLink: e => (0, J.jsx)(`a`, {
                        className: `interactive-label-secondary font-medium`,
                        href: Be,
                        onClick: c,
                        children: e
                    })
                }
            })
        }), t[8] = n?.name, t[9] = s, t[10] = c, t[11] = h, t[12] = p, t[13] = u, t[14] = C) : C = t[14];
        let w = o || a,
            T;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, J.jsx)(G, {
            ...Ft.connectButton
        }), t[15] = T) : T = t[15];
        let E;
        t[16] !== a || t[17] !== l || t[18] !== w ? (E = (0, J.jsx)(r, {
            type: `button`,
            color: `primary`,
            size: `large`,
            className: `w-full rounded-full`,
            disabled: w,
            loading: a,
            onClick: l,
            children: T
        }), t[16] = a, t[17] = l, t[18] = w, t[19] = E) : E = t[19];
        let D;
        t[20] !== i || t[21] !== E || t[22] !== C ? (D = (0, J.jsxs)(`div`, {
            className: `relative flex flex-col gap-6 px-6 pt-16 pb-8 sm:px-8`,
            children: [b, S, i, C, E]
        }), t[20] = i, t[21] = E, t[22] = C, t[23] = D) : D = t[23];
        let O;
        return t[24] !== D || t[25] !== v ? (O = (0, J.jsxs)(`section`, {
            "data-microsoft-oauth-bundle-interstitial": !0,
            className: `bg-token-bg-primary relative overflow-hidden rounded-t-2xl sm:rounded-2xl`,
            children: [_, v, D]
        }), t[24] = D, t[25] = v, t[26] = O) : O = t[26], O
    }
}));

function zt(e) {
    return (0, Y.jsx)(we, {
        href: Ot,
        className: `underline`,
        children: e
    })
}
var Bt, Vt, Y, Ht, Ut, Wt, Gt = e((() => {
    Bt = ge(), M(), Dt(), h(), je(), Se(), Ve(), Vt = n(he()), me(), Y = de(), Ht = e => {
        "use forget";
        let t = (0, Bt.c)(44),
            {
                value: n,
                onChange: i,
                onClose: a,
                isSaveDisabled: o
            } = e,
            s = o !== void 0 && o,
            [c, l] = (0, Vt.useState)(n),
            u = _e(),
            d;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Y.jsx)(`div`, {
            className: `text-2xl font-semibold`,
            children: (0, Y.jsx)(G, {
                ...Wt.advancedSettingsTitle
            })
        }), t[0] = d) : d = t[0];
        let f;
        t[1] === a ? f = t[2] : (f = (0, Y.jsxs)(`div`, {
            className: `flex items-start justify-between`,
            children: [d, (0, Y.jsx)(L, {
                onClick: a
            })]
        }), t[1] = a, t[2] = f);
        let p;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, Y.jsx)(`div`, {
            className: `mt-6 mb-2 text-sm font-medium`,
            children: (0, Y.jsx)(G, {
                ...Wt.connectionType
            })
        }), t[3] = p) : p = t[3];
        let m = c ? `sync` : `ondemand`,
            h;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (h = e => l(e === `sync`), t[4] = h) : h = t[4];
        let g;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, Y.jsx)(`div`, {
            className: `text-sm font-medium`,
            children: (0, Y.jsx)(G, {
                ...Wt.syncTitle
            })
        }), t[5] = g) : g = t[5];
        let _;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, Y.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [g, (0, Y.jsx)(`div`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, Y.jsx)(G, {
                    ...Wt.syncDescription,
                    values: {
                        link: zt
                    }
                })
            })]
        }), t[6] = _) : _ = t[6];
        let v;
        t[7] === c ? v = t[8] : (v = (0, Y.jsxs)(`label`, {
            className: `flex items-start justify-between gap-3 p-4`,
            children: [_, (0, Y.jsx)(We, {
                value: `sync`,
                children: (0, Y.jsx)(Ut, {
                    selected: c
                })
            })]
        }), t[7] = c, t[8] = v);
        let y;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, Y.jsx)(`div`, {
            className: `text-sm font-medium`,
            children: (0, Y.jsx)(G, {
                ...Wt.onDemandTitle
            })
        }), t[9] = y) : y = t[9];
        let b;
        t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, Y.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [y, (0, Y.jsx)(`div`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, Y.jsx)(G, {
                    ...Wt.onDemandDescription
                })
            })]
        }), t[10] = b) : b = t[10];
        let x = !c,
            S;
        t[11] === x ? S = t[12] : (S = (0, Y.jsxs)(`label`, {
            className: `border-token-border-default flex items-start justify-between gap-3 border-t p-4`,
            children: [b, (0, Y.jsx)(We, {
                value: `ondemand`,
                children: (0, Y.jsx)(Ut, {
                    selected: x
                })
            })]
        }), t[11] = x, t[12] = S);
        let C;
        t[13] !== S || t[14] !== m || t[15] !== v ? (C = (0, Y.jsx)(`div`, {
            className: `mt-2`,
            children: (0, Y.jsx)(`div`, {
                className: `border-token-border-default overflow-hidden rounded-xl border`,
                children: (0, Y.jsxs)(Me.Root, {
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
        t[21] === u ? T = t[22] : (T = u.formatMessage(Wt.cancel), t[21] = u, t[22] = T);
        let E;
        t[23] !== w || t[24] !== T ? (E = (0, Y.jsx)(r, {
            color: `secondary`,
            onClick: w,
            children: T
        }), t[23] = w, t[24] = T, t[25] = E) : E = t[25];
        let D;
        t[26] !== c || t[27] !== i || t[28] !== a || t[29] !== n ? (D = () => {
            n !== c && i(c), a()
        }, t[26] = c, t[27] = i, t[28] = a, t[29] = n, t[30] = D) : D = t[30];
        let O;
        t[31] === u ? O = t[32] : (O = u.formatMessage(Wt.save), t[31] = u, t[32] = O);
        let k;
        t[33] !== s || t[34] !== D || t[35] !== O ? (k = (0, Y.jsx)(r, {
            onClick: D,
            disabled: s,
            children: O
        }), t[33] = s, t[34] = D, t[35] = O, t[36] = k) : k = t[36];
        let A;
        t[37] !== E || t[38] !== k ? (A = (0, Y.jsxs)(`div`, {
            className: `mt-auto flex items-center justify-between pt-4`,
            children: [E, k]
        }), t[37] = E, t[38] = k, t[39] = A) : A = t[39];
        let j;
        return t[40] !== C || t[41] !== A || t[42] !== f ? (j = (0, Y.jsxs)(`div`, {
            className: `flex flex-1 flex-col p-2`,
            children: [f, p, C, A]
        }), t[40] = C, t[41] = A, t[42] = f, t[43] = j) : j = t[43], j
    }, Ut = ({
        selected: e
    }) => e ? (0, Y.jsx)(`button`, {
        className: `flex h-5 w-5 items-center justify-center rounded-full bg-gray-950 p-0.5 dark:bg-white`,
        children: (0, Y.jsx)(`div`, {
            className: `h-2 w-2 rounded-full bg-white dark:bg-gray-950`
        })
    }) : (0, Y.jsx)(`button`, {
        className: `border-token-border-default h-5 w-5 rounded-full border`
    }), Wt = fe({
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

function Kt(e) {
    "use forget";
    let t = (0, Jt.c)(6),
        {
            mode: n,
            side: r,
            isConnectorApproved: i
        } = e,
        a = n === void 0 ? `single` : n,
        o = r === void 0 ? `bottom` : r,
        s = i === void 0 || i;
    if (!(ie(W(qt)?.planType) && s)) return null;
    let c;
    t[0] === a ? c = t[1] : (c = a === `single` ? (0, Yt.jsx)(G, {
        id: `KadQXN`,
        defaultMessage: `Your admin has approved this app with ChatGPT`
    }) : (0, Yt.jsx)(G, {
        id: `qkYSUR`,
        defaultMessage: `Your admin has approved using these apps with ChatGPT`
    }), t[0] = a, t[1] = c);
    let l;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, Yt.jsxs)(`div`, {
        className: `flex w-full items-center justify-center gap-2 text-sm text-green-500`,
        children: [(0, Yt.jsx)(Ze, {
            className: `icon-sm fill-green-500`
        }), (0, Yt.jsx)(G, {
            id: `anLxXe`,
            defaultMessage: `Approved by your admin`
        })]
    }), t[2] = l) : l = t[2];
    let u;
    return t[3] !== o || t[4] !== c ? (u = (0, Yt.jsx)(T, {
        align: `center`,
        side: o,
        sideOffset: 8,
        alignOffset: 0,
        label: c,
        triggerAs: `div`,
        children: l
    }), t[3] = o, t[4] = c, t[5] = u) : u = t[5], u
}

function qt() {
    return g()
}
var Jt, Yt, Xt = e((() => {
        Jt = ge(), Qe(), y(), R(), U(), re(), me(), Yt = de()
    })),
    Zt = t({
        GoogleRedirectContent: () => dn,
        MainRedirectContent: () => fn,
        MainRedirectContentWrapper: () => gn,
        RedirectContent: () => _n
    });

function Qt(e) {
    let t = ue();
    return X.useMemo(() => {
        if (e) return e;
        let n = t.hash.includes(`?`) ? t.hash.substring(t.hash.indexOf(`?`) + 1) : t.search.substring(1);
        return new URLSearchParams(n).get(`referrer`) ?? void 0
    }, [t.hash, t.search, e])
}

function $t(e, t) {
    if (t || e.pathname === `/connector-auth`) {
        let n = new URLSearchParams(e.search);
        return t && n.set(rt, t), e.pathname === `/connector-auth` && n.get(`action`) === `connect` && n.set(`connector_action`, `connect`), `${e.pathname}?${n.toString()}${e.hash}`
    }
    return e.hash ? e.pathname + e.hash : e.pathname
}

function en(e) {
    return e === Je ? `github_connector` : `connector`
}
var X, Z, tn, nn, Q, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, $, vn = e((() => {
    D(), se(), Ct(), Mt(), Et(), Rt(), Fe(), He(), Gt(), Re(), xt(), Ee(), Te(), M(), Dt(), f(), h(), $e(), ot(), it(), lt(), k(), w(), Xt(), d(), ke(), nt(), et(), oe(), vt(), le(), Ae(), P(), z(), b(), ze(), Ye(), s(), F(), B(), X = n(he()), me(), pe(), mt(), Z = de(), tn = [`OAUTH`, `API_KEY`, `NONE`], nn = (e, t) => t ? {
        genericName: t.generic_name ?? e.name,
        blurbs: t.blurbs ?? []
    } : null, Q = ({
        loading: e,
        fitWidth: t = !1,
        color: n = `primary`,
        contentsFullWidth: i = !1,
        disabled: a = !1,
        onClick: o,
        children: s
    }) => (0, Z.jsx)(r, {
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
    }) => (0, Z.jsx)(r, {
        className: A(`text-token-text-secondary border-0`, n ? `w-fit` : `w-full`),
        size: `large`,
        onClick: i,
        loading: e,
        disabled: t,
        color: `secondary`,
        children: a
    }), an = () => {
        let e = i()?.user;
        return (0, Z.jsxs)(`span`, {
            className: `grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center`,
            children: [(0, Z.jsx)(`span`, {
                className: `col-start-2 min-w-0 text-center`,
                children: (0, Z.jsx)(G, {
                    ...$.continueWithChatGPTButton
                })
            }), (0, Z.jsx)(`span`, {
                className: `pointer-events-none translate-x-1.5 justify-self-end`,
                children: (0, Z.jsx)(O, {
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
        onClose: a,
        onContinue: o
    }) => {
        let s = i()?.user;
        return (0, Z.jsxs)(`div`, {
            className: A(`flex flex-col gap-6`, Ge(e) && `p-4`),
            children: [(0, Z.jsxs)(`div`, {
                className: `flex items-center justify-between`,
                children: [(0, Z.jsx)(c, {
                    type: `button`,
                    onClick: r
                }), (0, Z.jsx)(L, {
                    onClick: a
                })]
            }), (0, Z.jsx)(`div`, {
                className: `flex flex-col items-center`,
                children: (0, Z.jsxs)(`div`, {
                    className: `flex items-center gap-2.5`,
                    children: [(0, Z.jsx)(Oe, {
                        connector: e,
                        className: `rounded-full border-[0.5px] p-2 shadow-sm`,
                        size: `medium`
                    }), (0, Z.jsxs)(`div`, {
                        className: `flex gap-1`,
                        children: [(0, Z.jsx)(`span`, {
                            className: `h-1.5 w-1.5 rounded-full bg-gray-200`
                        }), (0, Z.jsx)(`span`, {
                            className: `h-1.5 w-1.5 rounded-full bg-gray-200`
                        }), (0, Z.jsx)(`span`, {
                            className: `h-1.5 w-1.5 rounded-full bg-gray-200`
                        })]
                    }), (0, Z.jsx)(ne, {
                        className: `h-10 w-10`
                    })]
                })
            }), (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-6`,
                children: [(0, Z.jsxs)(`div`, {
                    className: `text-center`,
                    children: [(0, Z.jsx)(`div`, {
                        className: `text-xl font-medium`,
                        children: (0, Z.jsx)(G, {
                            ...$.siwcConfirmTitle,
                            values: {
                                connectorName: e.name
                            }
                        })
                    }), e.description ? (0, Z.jsx)(`div`, {
                        className: `text-token-text-secondary pt-1 text-sm`,
                        children: e.description
                    }) : null]
                }), (0, Z.jsxs)(`div`, {
                    className: `bg-token-bg-secondary rounded-xl px-5 py-4 text-sm`,
                    children: [(0, Z.jsxs)(`div`, {
                        className: `flex items-center justify-between gap-4 border-b pb-4`,
                        children: [(0, Z.jsx)(`span`, {
                            className: `text-token-text-secondary`,
                            children: (0, Z.jsx)(G, {
                                ...$.siwcNameLabel
                            })
                        }), (0, Z.jsxs)(`span`, {
                            className: `flex items-center gap-2`,
                            children: [(0, Z.jsx)(O, {
                                user: s,
                                size: `small`
                            }), (0, Z.jsx)(`span`, {
                                children: s?.name
                            })]
                        })]
                    }), (0, Z.jsxs)(`div`, {
                        className: `flex items-center justify-between gap-4 border-b py-4`,
                        children: [(0, Z.jsx)(`span`, {
                            className: `text-token-text-secondary`,
                            children: (0, Z.jsx)(G, {
                                ...$.siwcEmailLabel
                            })
                        }), (0, Z.jsx)(`span`, {
                            children: t ?? s?.email
                        })]
                    }), (0, Z.jsx)(`div`, {
                        className: `text-token-text-secondary pt-4`,
                        children: (0, Z.jsx)(G, {
                            ...$.siwcConfirmDisclosure,
                            values: {
                                connectorName: e.name
                            }
                        })
                    })]
                }), (0, Z.jsxs)(`div`, {
                    className: `flex flex-col gap-2`,
                    children: [(0, Z.jsx)(Q, {
                        loading: n,
                        disabled: n,
                        onClick: o,
                        children: n ? (0, Z.jsx)(G, {
                            ...$.siwcSigningInButton
                        }) : (0, Z.jsx)(G, {
                            ...$.siwcSignInButton
                        })
                    }), (0, Z.jsx)(rn, {
                        disabled: n,
                        onClick: r,
                        children: (0, Z.jsx)(G, {
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
        e === `connection` && xe(t.id, De.ConnectorLinkContinueClick, {
            auth_type: r ?? ``
        }), K.logModalActionTaken({
            connector_id_metadata: K.createIdMetadataFromConnector(t, o),
            referrer: o,
            action: e,
            authType: r ?? `NONE`,
            launcherAnalytics: i,
            installAttemptId: a
        });
        let s = `connectors.click_continue_modal`,
            c = u.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                stage: `CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED`,
                surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                connectorId: t.id,
                flowCorrelationId: a || void 0,
                modalAction: e === `mfa` ? `CHATGPT_CONNECTORS_LINK_MODAL_ACTION_MFA` : `CHATGPT_CONNECTORS_LINK_MODAL_ACTION_CONNECTION`,
                referrer: n || void 0,
                legacyStatsigEventName: s
            });
        u.logValueEventWithStatsig({
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
        let l = _e(),
            u = {
                title: l.formatMessage($.syncTitle),
                description: l.formatMessage($.syncDescription, {
                    connectorName: e.name,
                    link: e => `[${e}](${Ot})`
                })
            },
            d = C[e.id],
            f = d === N.GMAIL_CONNECTOR || d === N.GCAL_CONNECTOR,
            m = a && t && !f ? [u, ...t.blurbs] : t?.blurbs,
            h = d != null && p.has(d),
            g = e.status === `DISABLED_BY_ADMIN`;
        return (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-6`,
            children: [(0, Z.jsxs)(`div`, {
                children: [(0, Z.jsx)(Ue, {
                    onClose: n,
                    connectorIcon: s ? c?.connectorIcons ?? (0, Z.jsx)(`div`, {
                        className: `bg-token-bg-primary flex h-11 w-11 items-center justify-center rounded-xl border-[0.5px] shadow-sm`,
                        children: (0, Z.jsx)(ct, {
                            className: `h-8 w-8`,
                            "aria-hidden": !0
                        })
                    }) : (0, Z.jsx)(Oe, {
                        connector: e,
                        className: `rounded-xl border-[0.5px] p-2 shadow-sm`,
                        size: `medium`
                    }),
                    connectorDeveloper: e.branding?.developer ?? void 0,
                    title: (0, Z.jsx)(G, {
                        ...$.addConnectorLinkModalTitle,
                        values: {
                            connectorName: c?.connectorName ?? e.name
                        }
                    }),
                    hideAvatarRow: o
                }), h ? null : (0, Z.jsx)(`div`, {
                    className: `mt-3`,
                    children: (0, Z.jsx)(Kt, {
                        mode: `single`,
                        side: `bottom`,
                        isConnectorApproved: !g
                    })
                })]
            }), i, (0, Z.jsx)(wt, {
                blurbs: m
            }), r]
        })
    }, ln = ({
        connector: e,
        tos: t,
        onClose: n,
        useGoogleOAuthBundleCopy: r = !1,
        googleOAuthBundlePresentation: i
    }) => r ? (0, Z.jsxs)(`div`, {
        "aria-busy": !0,
        className: `flex flex-col gap-6`,
        "data-testid": `bundled-consent-loading-placeholder`,
        children: [(0, Z.jsxs)(`div`, {
            className: `flex items-start justify-between`,
            children: [(0, Z.jsx)(`div`, {
                className: `bg-token-bg-tertiary h-11 w-11 animate-pulse rounded-xl motion-reduce:animate-none`
            }), (0, Z.jsx)(L, {
                onClick: n
            })]
        }), (0, Z.jsx)(`div`, {
            className: `flex flex-col`,
            children: (0, Z.jsx)(ye, {
                lines: 2,
                size: `lg`,
                width: 70,
                widthVariance: 20
            })
        }), (0, Z.jsx)(`div`, {
            className: `flex flex-col`,
            children: (0, Z.jsx)(ye, {
                lines: 7,
                size: `base`,
                width: 80,
                widthVariance: 20
            })
        }), (0, Z.jsx)(`div`, {
            className: `bg-token-bg-tertiary h-11 w-full animate-pulse rounded-full motion-reduce:animate-none`
        })]
    }) : Ge(e) ? (0, Z.jsx)(jt, {
        blurbs: t?.blurbs ?? null,
        connector: e,
        primaryActions: (0, Z.jsx)(Q, {
            loading: !0,
            onClick: () => {}
        }),
        onClose: n
    }) : (0, Z.jsx)(cn, {
        connector: e,
        tos: t,
        onClose: n,
        useGoogleOAuthBundleCopy: r,
        googleOAuthBundlePresentation: i,
        children: (0, Z.jsx)(Q, {
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
    }) => (0, Z.jsx)(cn, {
        connector: e,
        tos: t,
        onClose: n,
        useGoogleOAuthBundleCopy: a,
        googleOAuthBundlePresentation: o,
        children: (0, Z.jsx)(`div`, {
            className: `flex items-center justify-center pt-4`,
            children: (0, Z.jsx)(r, {
                onClick: i,
                size: `large`,
                className: `w-full`,
                children: (0, Z.jsx)(G, {
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
        } = pt(n, s), f = c?.blurbs ?? [], p = c?.generic_name ?? `Google`;
        return (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(Ue, {
                onClose: i,
                connectorIcon: e,
                title: (0, Z.jsx)(G, {
                    ...$.addConnectorLinkModalTitle,
                    values: {
                        connectorName: t
                    }
                })
            }), l ? (0, Z.jsx)(`div`, {
                className: `flex items-center justify-center p-4`,
                children: (0, Z.jsx)(x, {})
            }) : u ? (0, Z.jsx)(`div`, {
                className: `flex items-center justify-center pt-4`,
                children: (0, Z.jsx)(r, {
                    onClick: () => void d(),
                    size: `large`,
                    className: `w-full`,
                    children: (0, Z.jsx)(G, {
                        ...$.errorLoadingStateButton
                    })
                })
            }) : f.length > 0 ? (0, Z.jsx)(wt, {
                blurbs: f
            }) : null, (0, Z.jsx)(`div`, {
                className: `pt-4`,
                children: (0, Z.jsx)(Q, {
                    loading: a,
                    onClick: o,
                    children: (0, Z.jsx)(G, {
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
        onContinue: o,
        authTypeOverride: s,
        showExternalIcon: c,
        additionalContent: l,
        footerContent: d,
        additionalMessageThatDoesNotContainLegalClaims: f,
        canSync: p = !1,
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
        let D = E() && V(`2792858552`),
            O = Ie(),
            k = Qt(b),
            A = s ?? O,
            j = C && A === `NONE` ? void 0 : A,
            M = Le(e, j),
            N = e.status === `DISABLED_BY_ADMIN`,
            P = g || N,
            F = P || r,
            L = e => r && (i === void 0 || i === e),
            R = N ? (0, Z.jsx)(G, {
                ...$.workspaceAdminApprovalRequired,
                values: {
                    connectorName: e.name
                }
            }) : void 0,
            z = (0, X.useRef)(null);
        (0, X.useEffect)(() => {
            if (z.current?.connectorId === e.id && z.current.installAttemptId === S) return;
            z.current = {
                connectorId: e.id,
                installAttemptId: S
            }, K.logModalShown({
                connector_id_metadata: K.createIdMetadataFromConnector(e, k ?? `unknown_referrer`),
                referrer: k ?? `unknown_referrer`,
                mfaState: `not_required`,
                authType: M ?? void 0,
                launcherAnalytics: x,
                installAttemptId: S
            });
            let t = `connectors.shown_connect_modal`,
                n = u.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: S || void 0,
                    mfaState: `CHATGPT_CONNECTORS_LINK_MODAL_MFA_STATE_NOT_REQUIRED`,
                    referrer: k || void 0,
                    legacyStatsigEventName: t
                });
            u.logValueEventWithStatsig({
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
        }, [e, S, x, k, M]);
        let B = (t, n = !1) => {
                if (N) return;
                let r = U ? t : M;
                o(t, n, () => sn({
                    action: `connection`,
                    connector: e,
                    referrer: k ?? `unknown_referrer`,
                    authType: r ?? void 0,
                    launcherAnalytics: x,
                    installAttemptId: S
                }))
            },
            {
                supported_auth: te
            } = e,
            H = tn.filter(e => C && e === `NONE` ? !1 : te.some(t => t.type === e)),
            U = D && !j && H.length > 1,
            W = _ && !N && (U ? H.includes(`OAUTH`) : M === `OAUTH`),
            ne = [{
                key: `admin`,
                content: N ? (0, Z.jsx)(G, {
                    ...$.connectorDisabledByAdmin,
                    values: {
                        connectorName: e.name,
                        a: t => (0, Z.jsx)(`a`, {
                            href: a(e.id),
                            target: `_blank`,
                            rel: `noreferrer`,
                            className: `font-semibold underline`,
                            children: t
                        })
                    }
                }) : void 0
            }, {
                key: `additional`,
                content: N ? void 0 : f
            }].filter(({
                content: e
            }) => e),
            re = ne.length > 0 ? (0, Z.jsx)(`div`, {
                className: `flex flex-col gap-2`,
                children: ne.map(({
                    key: e,
                    content: t
                }) => (0, Z.jsx)(`div`, {
                    className: `bg-token-interactive-bg-accent-muted-context rounded-xl p-4 text-center text-sm text-[#0285FF]`,
                    children: t
                }, e))
            }) : void 0,
            [ie, ae] = (0, X.useState)(!1),
            [oe, se] = (0, X.useState)(!1),
            ce = Ge(e),
            le = ce && !W,
            ue = w ? T?.oauthConnectorName ?? t.genericName : e.name,
            {
                country: de
            } = ee(),
            fe = de != null && I.has(de),
            pe = (0, Z.jsx)(an, {}),
            me = (0, Z.jsxs)(Z.Fragment, {
                children: [W ? (0, Z.jsx)(Q, {
                    loading: L(`SIWC`) || v,
                    disabled: F || v,
                    onClick: () => B(`OAUTH`, !0),
                    contentsFullWidth: !0,
                    children: pe
                }) : null, W && ce && !oe ? (0, Z.jsx)(`button`, {
                    className: `text-token-text-primary text-sm underline`,
                    onClick: () => se(!0),
                    children: (0, Z.jsx)(G, {
                        ...$.useDifferentMethodButton
                    })
                }) : null, W && ce && oe ? (0, Z.jsxs)(`div`, {
                    className: `text-token-text-secondary flex items-center gap-3 text-sm`,
                    children: [(0, Z.jsx)(`span`, {
                        className: `bg-token-border-default h-px flex-1`
                    }), (0, Z.jsx)(G, {
                        ...$.useDifferentMethodButton
                    }), (0, Z.jsx)(`span`, {
                        className: `bg-token-border-default h-px flex-1`
                    })]
                }) : null, (!W || !ce || oe) && H.map((t, n) => {
                    let r = (0, Z.jsxs)(`span`, {
                        className: `flex items-center justify-center gap-1`,
                        children: [t === `OAUTH` ? ce ? (0, Z.jsx)(G, {
                            ...$.signInWithButton,
                            values: {
                                connectorName: e.name
                            }
                        }) : (0, Z.jsx)(G, {
                            ...$.continueButton,
                            values: {
                                connectorName: ue
                            }
                        }) : t === `API_KEY` ? (0, Z.jsx)(G, {
                            ...$.useApiKeyButton
                        }) : (0, Z.jsx)(G, {
                            ...$.connectWithoutAccountButton
                        }), t === `OAUTH` && c ? (0, Z.jsx)(Xe, {
                            className: `icon-sm`
                        }) : null]
                    });
                    return n === 0 && !W ? (0, Z.jsx)(Q, {
                        fitWidth: le,
                        loading: L(t),
                        disabled: F,
                        onClick: () => B(t),
                        children: r
                    }, t) : (0, Z.jsx)(rn, {
                        fitWidth: le,
                        loading: L(t),
                        disabled: F,
                        onClick: () => B(t),
                        children: r
                    }, t)
                }), fe && (0, Z.jsx)(rn, {
                    fitWidth: le,
                    onClick: n,
                    disabled: r,
                    children: (0, Z.jsx)(`span`, {
                        className: `flex items-center justify-center gap-1`,
                        children: (0, Z.jsx)(G, {
                            id: `IwBFou`,
                            defaultMessage: `Cancel`
                        })
                    })
                })]
            }),
            he = (0, Z.jsxs)(Z.Fragment, {
                children: [W ? (0, Z.jsx)(Q, {
                    loading: L(`SIWC`) || v,
                    disabled: F || v,
                    onClick: () => B(`OAUTH`, !0),
                    contentsFullWidth: !0,
                    children: pe
                }) : null, W ? (0, Z.jsx)(rn, {
                    loading: L(M),
                    disabled: F,
                    onClick: () => B(M),
                    children: (0, Z.jsxs)(`span`, {
                        className: `flex items-center justify-center gap-1`,
                        children: [ce ? (0, Z.jsx)(G, {
                            ...$.signInWithButton,
                            values: {
                                connectorName: e.name
                            }
                        }) : (0, Z.jsx)(G, {
                            ...$.continueButton,
                            values: {
                                connectorName: ue
                            }
                        }), c && (0, Z.jsx)(Xe, {
                            className: `icon-sm`
                        })]
                    })
                }) : (0, Z.jsx)(Q, {
                    fitWidth: le,
                    loading: L(M),
                    disabled: F,
                    onClick: () => B(M),
                    children: (0, Z.jsxs)(`span`, {
                        className: `flex items-center justify-center gap-1`,
                        children: [M === `OAUTH` ? ce ? (0, Z.jsx)(G, {
                            ...$.signInWithButton,
                            values: {
                                connectorName: e.name
                            }
                        }) : (0, Z.jsx)(G, {
                            ...$.continueButton,
                            values: {
                                connectorName: ue
                            }
                        }) : M === `API_KEY` ? (0, Z.jsx)(G, {
                            ...$.connectButton,
                            values: {
                                connectorName: e.name
                            }
                        }) : ce ? (0, Z.jsx)(G, {
                            id: `yWpEzd`,
                            defaultMessage: `Connect`
                        }) : (0, Z.jsx)(G, {
                            ...$.connectButton,
                            values: {
                                connectorName: e.name
                            }
                        }), M === `OAUTH` && c && (0, Z.jsx)(Xe, {
                            className: `icon-sm`
                        })]
                    })
                }), fe && (0, Z.jsx)(rn, {
                    fitWidth: le,
                    onClick: n,
                    disabled: r,
                    children: (0, Z.jsx)(`span`, {
                        className: `flex items-center justify-center gap-1`,
                        children: (0, Z.jsx)(G, {
                            id: `IwBFou`,
                            defaultMessage: `Cancel`
                        })
                    })
                })]
            });
        if (ie && h && !r) return (0, Z.jsx)(Ht, {
            value: m,
            onChange: h,
            onClose: () => ae(!1)
        });
        if (T?.hasCompanionConnectors && l && !ce) return (0, Z.jsx)(T.oauthBundleProvider === `microsoft` ? Lt : Tt, {
            connector: e,
            connectorRows: l,
            isConnecting: r,
            isContinueDisabled: P,
            isEU: fe,
            onClose: n,
            onContinue: () => B(M),
            tos: t
        });
        if (ce) {
            let i = (0, Z.jsxs)(Z.Fragment, {
                children: [U ? me : he, p && (0, Z.jsx)(rn, {
                    fitWidth: le,
                    onClick: () => ae(!0),
                    disabled: r,
                    children: (0, Z.jsx)(G, {
                        id: `qAio8L`,
                        defaultMessage: `Advanced settings`
                    })
                })]
            });
            return (0, Z.jsx)(jt, {
                blurbs: t.blurbs,
                connector: e,
                primaryActions: i,
                additionalContent: l,
                footerContent: d,
                primaryActionMessage: R,
                stackPrimaryActions: W || l != null,
                onClose: n
            })
        }
        return (0, Z.jsx)(Z.Fragment, {
            children: (0, Z.jsx)(cn, {
                connector: e,
                tos: t,
                onClose: n,
                beforeBlurbs: re,
                willSync: m,
                hideHeaderIcons: y,
                useGoogleOAuthBundleCopy: w,
                googleOAuthBundlePresentation: T,
                children: (0, Z.jsxs)(`div`, {
                    className: `flex flex-col gap-2`,
                    children: [d, l, U ? me : he, p && (0, Z.jsx)(`p`, {
                        className: `text-token-text-secondary text-center text-sm font-medium`,
                        children: (0, Z.jsx)(rn, {
                            onClick: () => ae(!0),
                            disabled: r,
                            children: (0, Z.jsx)(G, {
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
        googleOAuthBundlePresentation: d
    }) => {
        let f = $t(ue(), o),
            p = Qt(i),
            m = Le(e, r),
            h = (0, X.useRef)(null);
        (0, X.useEffect)(() => () => {
            h.current = null
        }, []), (0, X.useEffect)(() => {
            K.logModalShown({
                connector_id_metadata: K.createIdMetadataFromConnector(e, p ?? `unknown_referrer`),
                referrer: p ?? `unknown_referrer`,
                mfaState: `required`,
                authType: m ?? void 0,
                launcherAnalytics: a,
                installAttemptId: o
            });
            let t = `connectors.shown_connect_modal`,
                n = u.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: o || void 0,
                    mfaState: `CHATGPT_CONNECTORS_LINK_MODAL_MFA_STATE_REQUIRED`,
                    referrer: p || void 0,
                    legacyStatsigEventName: t
                });
            u.logValueEventWithStatsig({
                segmentEventName: t,
                statsigEventName: t,
                eventId: n,
                data: {
                    mfa: `required`,
                    type: e.id,
                    ...p && {
                        referrer: p
                    },
                    ...o && {
                        install_attempt_id: o
                    }
                }
            })
        }, [e, o, a, p, m]);
        let g = () => {
            s?.(`mfa`), K.logModalActionTaken({
                connector_id_metadata: K.createIdMetadataFromConnector(e, p ?? `unknown_referrer`),
                referrer: p ?? `unknown_referrer`,
                action: `mfa`,
                authType: m ?? `NONE`,
                launcherAnalytics: a,
                installAttemptId: o
            });
            let t = `connectors.click_continue_modal`,
                n = u.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: o || void 0,
                    modalAction: `CHATGPT_CONNECTORS_LINK_MODAL_ACTION_MFA`,
                    referrer: p || void 0,
                    legacyStatsigEventName: t
                });
            u.logValueEventWithStatsig({
                segmentEventName: t,
                statsigEventName: t,
                eventId: n,
                data: {
                    action: `mfa`,
                    type: e.id,
                    ...p && {
                        referrer: p
                    },
                    ...o && {
                        install_attempt_id: o
                    }
                }
            });
            let r = t => {
                    j(yt, {
                        redirectUrl: t?.redirectUrl ?? f,
                        source: en(e.id),
                        ...t ? {
                            onSelectFactor: t.onSelectFactor,
                            onClose: t.onClose
                        } : {}
                    })
                },
                i = c?.();
            if (i instanceof Promise) {
                h.current = i, i.then(e => {
                    h.current === i && (h.current = null, r(e))
                });
                return
            }
            h.current = null, r(i)
        };
        return (0, Z.jsxs)(cn, {
            connector: e,
            tos: t,
            onClose: n,
            useGoogleOAuthBundleCopy: l,
            googleOAuthBundlePresentation: d,
            children: [(0, Z.jsx)(`div`, {
                className: `pt-2`
            }), (0, Z.jsx)(`div`, {
                className: `border-token-border-default border-t p-4`,
                children: (0, Z.jsx)(`div`, {
                    className: `text-token-text-primary font-medium`,
                    children: (0, Z.jsx)(G, {
                        ...$.mfaRequiredTitle
                    })
                })
            }), (0, Z.jsx)(Q, {
                loading: !1,
                onClick: g,
                children: (0, Z.jsx)(G, {
                    ...$.mfaRequiredButton
                })
            })]
        })
    }, mn = {
        [l.Google]: {
            icon: (0, Z.jsx)(ct, {}),
            name: `Google`
        },
        [l.Microsoft]: {
            icon: (0, Z.jsx)(ut, {}),
            name: `Microsoft`
        },
        [l.Apple]: {
            icon: (0, Z.jsx)(st, {}),
            name: `Apple`
        }
    }, hn = ({
        connector: e,
        tos: t,
        onClose: n,
        isConnecting: r,
        connectingAction: i,
        onContinue: a,
        authTypeOverride: s,
        showExternalIcon: c,
        additionalContent: d,
        footerContent: f,
        additionalMessageThatDoesNotContainLegalClaims: p,
        canSync: m,
        isRequestingSync: h,
        setIsRequestingSync: g,
        siwcLoginAvailable: _ = !1,
        isSiwcLoginDisabled: v = !1,
        isContinueDisabled: y = !1,
        hideHeaderIcons: b = !1,
        referrerOverride: x,
        launcherAnalytics: S,
        installAttemptId: C,
        onConsentAction: w,
        requireAuth: T = !1,
        progressiveManagedAuth: E = !1,
        useGoogleOAuthBundleCopy: D = !1,
        googleOAuthBundlePresentation: O
    }) => {
        let {
            connectionType: k,
            ssoConnectionId: A
        } = o(), [ee, M] = (0, X.useState)(!1), N = !E || ee, P = e.status === `DISABLED_BY_ADMIN`, F = $t(ue(), C), I = Qt(x), L = Le(e, s), R = N && y || P || r, z = e => r && (i === void 0 || i === e), B = (0, X.useRef)(null);
        (0, X.useEffect)(() => {
            if (B.current?.connectorId === e.id && B.current.installAttemptId === C) return;
            B.current = {
                connectorId: e.id,
                installAttemptId: C
            }, K.logModalShown({
                connector_id_metadata: K.createIdMetadataFromConnector(e, I ?? `unknown_referrer`),
                referrer: I ?? `unknown_referrer`,
                mfaState: `suggested`,
                authType: L ?? `NONE`,
                launcherAnalytics: S,
                installAttemptId: C
            });
            let t = `connectors.shown_connect_modal`,
                n = u.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_RENDERED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: C || void 0,
                    mfaState: `CHATGPT_CONNECTORS_LINK_MODAL_MFA_STATE_SUGGESTED`,
                    referrer: I || void 0,
                    legacyStatsigEventName: t
                });
            u.logValueEventWithStatsig({
                segmentEventName: t,
                statsigEventName: t,
                eventId: n,
                data: {
                    mfa: `suggested`,
                    type: e.id,
                    ...I && {
                        referrer: I
                    },
                    ...C && {
                        install_attempt_id: C
                    }
                }
            })
        }, [e, C, S, I, L]);
        let te = () => {
                w?.(`mfa`), K.logModalActionTaken({
                    connector_id_metadata: K.createIdMetadataFromConnector(e, I ?? `unknown_referrer`),
                    referrer: I ?? `unknown_referrer`,
                    action: `mfa`,
                    authType: L ?? `NONE`,
                    launcherAnalytics: S,
                    installAttemptId: C
                });
                let t = `connectors.click_continue_modal`,
                    n = u.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                        stage: `CHATGPT_CONNECTOR_AUTH_STAGE_ACTION_CLICKED`,
                        surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                        connectorId: e.id,
                        flowCorrelationId: C || void 0,
                        modalAction: `CHATGPT_CONNECTORS_LINK_MODAL_ACTION_MFA`,
                        referrer: I || void 0,
                        legacyStatsigEventName: t
                    });
                u.logValueEventWithStatsig({
                    segmentEventName: t,
                    statsigEventName: t,
                    eventId: n,
                    data: {
                        action: `mfa`,
                        type: e.id,
                        ...I && {
                            referrer: I
                        },
                        ...C && {
                            install_attempt_id: C
                        }
                    }
                }), j(yt, {
                    redirectUrl: F,
                    source: en(e.id)
                })
            },
            V = (t = !1) => {
                if (!N) {
                    M(!0);
                    return
                }
                y || P || a(t ? `OAUTH` : L, t, () => sn({
                    action: `mfa`,
                    connector: e,
                    referrer: I,
                    authType: L ?? void 0,
                    launcherAnalytics: S,
                    installAttemptId: C
                }))
            },
            H = mn[k],
            U = k === l.Microsoft && !!A;
        if (!H || U) return (0, Z.jsx)(fn, {
            connector: e,
            onClose: n,
            tos: t,
            isConnecting: r,
            connectingAction: i,
            onContinue: a,
            authTypeOverride: s,
            showExternalIcon: c,
            additionalContent: d,
            footerContent: f,
            additionalMessageThatDoesNotContainLegalClaims: p,
            canSync: m,
            isRequestingSync: h,
            setIsRequestingSync: g,
            siwcLoginAvailable: _,
            isSiwcLoginDisabled: v,
            isContinueDisabled: y,
            hideHeaderIcons: b,
            referrerOverride: x,
            launcherAnalytics: S,
            installAttemptId: C,
            requireAuth: T,
            useGoogleOAuthBundleCopy: D,
            googleOAuthBundlePresentation: O
        });
        let {
            icon: W,
            name: ne
        } = H, re = _ && !P && L === `OAUTH`, ie = (0, Z.jsx)(an, {}), ae = D ? O?.oauthConnectorName ?? t.genericName : e.name;
        return (0, Z.jsxs)(cn, {
            connector: e,
            tos: t,
            onClose: n,
            useGoogleOAuthBundleCopy: D,
            googleOAuthBundlePresentation: O,
            children: [(0, Z.jsxs)(`div`, {
                className: `border-token-border-default flex items-center gap-4 rounded-xl border p-4 text-sm`,
                children: [(0, Z.jsx)(`div`, {
                    className: `text-token-text-primary`,
                    children: W
                }), (0, Z.jsxs)(`div`, {
                    className: `flex flex-col`,
                    children: [(0, Z.jsx)(`div`, {
                        className: `text-token-text-primary font-medium`,
                        children: (0, Z.jsx)(G, {
                            ...$.socialLoginTitle,
                            values: {
                                socialProvider: ne
                            }
                        })
                    }), (0, Z.jsx)(`div`, {
                        className: `text-token-text-secondary`,
                        children: (0, Z.jsx)(G, {
                            ...$.socialLoginDescription,
                            values: {
                                socialProvider: ne,
                                link: e => (0, Z.jsx)(`button`, {
                                    onClick: te,
                                    className: `underline`,
                                    children: e
                                })
                            }
                        })
                    })]
                })]
            }), (0, Z.jsx)(`div`, {
                className: `pt-6`,
                children: (0, Z.jsxs)(`div`, {
                    className: `flex flex-col gap-2`,
                    children: [N ? p : null, N ? f : null, N ? d : null, re ? (0, Z.jsx)(Q, {
                        loading: z(`SIWC`) || v,
                        disabled: R || v,
                        onClick: () => V(!0),
                        contentsFullWidth: !0,
                        children: ie
                    }) : null, re ? (0, Z.jsxs)(rn, {
                        loading: z(L),
                        disabled: R,
                        onClick: () => V(),
                        children: [(0, Z.jsx)(G, {
                            ...$.continueButton,
                            values: {
                                connectorName: ae
                            }
                        }), L === `OAUTH` && c ? (0, Z.jsx)(Xe, {
                            className: `icon-sm`
                        }) : null]
                    }) : (0, Z.jsxs)(Q, {
                        loading: z(L),
                        disabled: R,
                        onClick: () => V(),
                        children: [(0, Z.jsx)(G, {
                            ...$.continueButton,
                            values: {
                                connectorName: ae
                            }
                        }), L === `OAUTH` && c ? (0, Z.jsx)(Xe, {
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
            isError: ee,
            isPlaceholderData: M,
            isFetching: N,
            refetch: P
        } = ft(), F = M || x && N, I = (...e) => {
            x && (j || F || ee || A == null || p) || i(...e)
        }, L = nn(e, A), R = S && L ? {
            ...L,
            blurbs: L.blurbs.filter(e => e.icon !== `external_link`)
        } : L, {
            status: z,
            retry: B
        } = bt(e.id), {
            status: te,
            retry: V
        } = tt({
            enabled: z === `required` || z === `suggested`
        }), H = $t(ue(), y), U = !j && !F && !ee && R != null && te !== `loading` && z !== `loading` && (!O || !p) && (te === `enabled` || z === `not_required` || z === `required` || z === `suggested`);
        (0, X.useEffect)(() => {
            U && E?.()
        }, [U, E]);
        let W = (0, X.useRef)(!1);
        return (0, X.useEffect)(() => {
            let e = D?.target.current;
            if (!(!D || !U || !e || W.current)) return ve(e, () => {
                W.current || (W.current = !0, D.onVisible())
            })
        }, [D, U]), _t({
            enabled: () => z === `required` || z === `suggested`,
            redirectUrl: H,
            source: en(e.id)
        }), O && (j || te === `loading` || z === `loading` || p) || j ? (0, Z.jsx)(ln, {
            connector: e,
            tos: R,
            onClose: t,
            useGoogleOAuthBundleCopy: O,
            googleOAuthBundlePresentation: k
        }) : ee || !R ? (0, Z.jsx)(un, {
            connector: e,
            tos: R,
            onClose: t,
            retry: () => {
                P(), V(), B()
            },
            useGoogleOAuthBundleCopy: O,
            googleOAuthBundlePresentation: k
        }) : te === `loading` || z === `loading` ? (0, Z.jsx)(ln, {
            connector: e,
            tos: R,
            onClose: t,
            useGoogleOAuthBundleCopy: O,
            googleOAuthBundlePresentation: k
        }) : te === `enabled` || z === `not_required` ? (0, Z.jsx)(fn, {
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
        }) : z === `required` ? (0, Z.jsx)(pn, {
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
        }) : z === `suggested` ? (0, Z.jsx)(hn, {
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
        }) : (0, Z.jsx)(un, {
            connector: e,
            tos: R,
            onClose: t,
            retry: () => {
                V(), B(), P()
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
        footerContent: d,
        additionalMessageThatDoesNotContainLegalClaims: f,
        canSync: p,
        isRequestingSync: m,
        setIsRequestingSync: h,
        isContinueDisabled: g = !1,
        hideHeaderIcons: _ = !1,
        referrerOverride: v,
        launcherAnalytics: y,
        installAttemptId: b,
        enableSiwcLogin: x = !1,
        requireAuth: S = !1,
        requireFreshConsent: C = !1,
        hideAuthRedirectBlurb: w = !1,
        progressiveManagedAuth: T = !1,
        onConsentAction: E,
        onPrepareMfaEnrollment: D,
        onConsentShown: O,
        consentVisibility: k,
        useGoogleOAuthBundleCopy: A = !1,
        useGoogleOAuthBundleTosCopy: j = A,
        googleOAuthBundlePresentation: ee
    }) => {
        let M = (0, X.useRef)(!1),
            N = (0, X.useCallback)(() => {
                M.current || !O || (M.current = !0, O())
            }, [O]),
            P = qe(),
            F = v ?? P ?? `unknown_referrer`,
            I = () => {
                let n = u.logStructuredEvent(`ChatgptConnectorAuthFunnelEvent`, {
                    stage: `CHATGPT_CONNECTOR_AUTH_STAGE_CANCELLED`,
                    surface: `CHATGPT_CONNECTOR_AUTH_SURFACE_LINKING_SHEET`,
                    connectorId: e.id,
                    flowCorrelationId: b || void 0,
                    legacyStatsigEventName: `connectors.modal_action_taken`
                });
                K.logModalActionTaken({
                    connector_id_metadata: K.createIdMetadataFromConnector(e, F),
                    referrer: F,
                    action: `dismissed`,
                    authType: `NONE`,
                    launcherAnalytics: y,
                    installAttemptId: b,
                    eventId: n
                }), t()
            },
            L = x && e.supported_auth.some(e => e.type === `OAUTH`),
            {
                data: R,
                dataUpdatedAt: z,
                isFetching: B
            } = ht(e.id, c, {
                enabled: L
            }),
            [te] = (0, X.useState)(() => Date.now()),
            V = L && R?.available === !0,
            H = z > te,
            U = R?.has_grant === !0 && H,
            W = V && B && !H,
            [ne, re] = (0, X.useState)(null);
        return ne ? (0, Z.jsx)(on, {
            connector: e,
            email: R?.email,
            isConnecting: n && r === `SIWC`,
            onBack: () => re(null),
            onClose: I,
            onContinue: () => {
                ne.logStart?.(), i(ne.authType, !0)
            }
        }) : (0, Z.jsx)(gt, {
            connectorId: e.id,
            productSku: c,
            useGoogleOAuthBundleCopy: j,
            children: (0, Z.jsx)(gn, {
                connector: e,
                onClose: I,
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
                        a && !a(e) || re({
                            authType: e,
                            logStart: n
                        })
                    }
                },
                authTypeOverride: o,
                showExternalIcon: s,
                additionalContent: l,
                footerContent: d,
                additionalMessageThatDoesNotContainLegalClaims: f,
                canSync: p,
                isRequestingSync: m,
                setIsRequestingSync: h,
                isContinueDisabled: g,
                siwcLoginAvailable: V,
                isSiwcLoginDisabled: W,
                hideHeaderIcons: _,
                referrerOverride: F,
                launcherAnalytics: y,
                installAttemptId: b,
                requireAuth: S,
                requireFreshConsent: C,
                hideAuthRedirectBlurb: w,
                progressiveManagedAuth: T,
                onConsentAction: E,
                onPrepareMfaEnrollment: D,
                onConsentShown: N,
                consentVisibility: k,
                useGoogleOAuthBundleCopy: A,
                googleOAuthBundlePresentation: ee
            })
        })
    }, $ = fe({
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
    vn as n, Zt as r, _n as t
};
//# sourceMappingURL=b15d5b53-ddufw1667wk5jqls.js.map