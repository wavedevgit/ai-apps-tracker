const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/df9194ad-crhoab137gsnnywr.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/a05edf66-f6ebinxrpvpwcliw.js", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/8742b478-bmafmljnkmm000be.js", "assets/8d505c06-pfjobsi45gz6hy0j.js", "assets/3e574439-njvhxdk9cfxaurqk.js", "assets/c2675c8c-oz03twoan08d72ud.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/global-modals-dxg9ukpk.css", "assets/25a66342-babsu7zrrg2k0adu.js", "assets/2ea88c7a-lxyla91xs6iv7odf.js", "assets/25a66342-j7cd8h2bqav7weve.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    A2 as r,
    A8 as i,
    Ant as a,
    Aw as o,
    Bnt as s,
    CN as c,
    CR as l,
    Crt as u,
    Fz as d,
    I1 as f,
    I7 as p,
    Iit as m,
    Int as h,
    Iz as g,
    K5 as _,
    Knt as v,
    Lit as ee,
    Lst as y,
    M7 as b,
    N1 as x,
    Nnt as S,
    Ow as C,
    R8 as w,
    Rnt as T,
    Rst as E,
    Snt as D,
    Unt as O,
    Vnt as k,
    Wnt as A,
    _rt as j,
    a2 as M,
    b5 as te,
    brt as ne,
    c2 as re,
    d2 as N,
    dE as ie,
    gtt as ae,
    hst as oe,
    htt as se,
    iq as ce,
    j2 as le,
    j5 as ue,
    jR as de,
    lE as fe,
    mst as pe,
    o2 as P,
    q1 as me,
    q5 as he,
    rq as ge,
    sq as F,
    sst as _e,
    wN as I,
    xnt as ve,
    y5 as L
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as ye,
    N as be,
    O as xe,
    Vn as R,
    cn as Se,
    ln as Ce,
    p as we,
    s as Te,
    wn as Ee
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    SMn as De,
    cwn as Oe,
    d0t as ke,
    f0t as z,
    kWt as B,
    lwn as Ae,
    m6 as je,
    mMn as Me,
    p6 as V,
    pMn as Ne
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Fc as Pe,
    Gx as Fe,
    Pc as Ie,
    Wx as Le
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    n as Re,
    r as ze
} from "./2ea88c7a-lxyla91xs6iv7odf.js";
import {
    n as Be,
    t as Ve
} from "./8d846022-bvik3sltoydb2o43.js";
import {
    n as He,
    t as Ue
} from "./84983163-lwaa0ii6szlumu0s.js";
import {
    n as We,
    o as Ge,
    r as H
} from "./7517017f-k7dpvey5diskpxg5.js";
import {
    a as Ke,
    r as qe
} from "./6601bf01-mgwixdesah84q5n2.js";
import {
    i as Je,
    n as Ye,
    t as Xe
} from "./d86ca127-lraid6tmxket3evh.js";

function Ze(e) {
    if (!e) return null;
    let t = e.trim();
    if (!t || t.includes(`\\`)) return null;
    try {
        return {
            url: new URL(t)
        }
    } catch {
        if (!/^[a-z][a-z0-9+.-]*:/.test(t)) try {
            let e = t.startsWith(`//`) ? `https:${t}` : `https://${t}`;
            return {
                url: new URL(e)
            }
        } catch {
            return null
        }
        return null
    }
}

function Qe(e) {
    let t = e.trim();
    if (!t) return null;
    let n = /^([a-z][a-z0-9+.-]*):$/i.exec(t);
    if (n) return {
        kind: `scheme`,
        scheme: `${n[1].toLowerCase()}:`
    };
    let r = /^([a-z][a-z0-9+.-]*):\/\/$/i.exec(t);
    if (r) return {
        kind: `scheme`,
        scheme: `${r[1].toLowerCase()}:`
    };
    let i = /^(?:([a-z][a-z0-9+.+-]*):\/\/)?(\*|\*\.[^/:]+|[^/:]+)(?::(\*|\d+))?(\/.*)?$/i.exec(t);
    if (!i) return null;
    let a = i[1] ? `${i[1].toLowerCase()}:` : void 0,
        o = i[2],
        s = i[3] ?? null,
        c = i[4] ?? null,
        l = o.startsWith(`*.`),
        u = (l ? o.slice(2) : o).toLowerCase().replace(/\.$/, ``),
        d = null,
        f = !1;
    return s !== null && (f = !0, d = s === `*` ? `*` : Number(s), d !== `*` && (!Number.isFinite(d) || d < 0)) ? null : {
        kind: `host`,
        scheme: a,
        host: u,
        wildcard: l,
        portExplicit: f,
        port: d,
        path: c
    }
}

function U(e) {
    return e.toLowerCase().replace(/\.$/, ``)
}

function $e(e, t) {
    let n = U(e),
        r = U(t);
    return n === r || n.endsWith(`.` + r)
}

function et(e, t, n) {
    return n ? $e(e, t) : U(e) === U(t)
}

function tt(e, t) {
    if (t.port === `*`) return !0;
    let n = e.port ? Number(e.port) : st[e.protocol] ?? null;
    return t.portExplicit ? typeof t.port == `number` && n === t.port : n === (st[e.protocol] ?? null)
}

function nt(e) {
    let t = e.scheme ?? `https:`;
    if (!ot.has(t) || !e.host) return null;
    let n = typeof e.port == `number` ? `:${e.port}` : ``,
        r = e.path ?? ``;
    try {
        return new URL(`${t}//${e.host}${n}${r}`)
    } catch {
        return null
    }
}

function rt(e) {
    let t = Ze(e ?? void 0);
    if (t && ot.has(t.url.protocol) && !t.url.hostname.includes(`*`)) return t.url.toString();
    if (!e) return null;
    let n = Qe(e);
    return !n || n.kind === `scheme` ? null : nt(n)?.toString() ?? null
}

function it(e, t, n) {
    let r = [];
    t?.connectDomains?.length && r.push(...t.connectDomains);
    let i = n?.trim();
    return i && r.push(i), at(e, r)
}

function at(e, t) {
    if (!e) return !1;
    let n = Ze(e);
    if (!n) return !1;
    let r = n.url;
    return r.username || r.password || !t?.length ? !1 : t.some(e => {
        let t = Qe(e);
        if (!t) return !1;
        if (t.kind === `scheme`) return r.protocol === t.scheme;
        if (t.scheme) return !(r.protocol !== t.scheme || !et(r.hostname, t.host, t.wildcard) || !tt(r, t));
        {
            let e = t.host;
            return !!$e(r.hostname, e)
        }
    })
}
var ot, st, ct = e((() => {
    ot = new Set([`http:`, `https:`]), st = {
        "http:": 80,
        "https:": 443,
        "ws:": 80,
        "wss:": 443
    }
}));

function lt(e, t) {
    if (!t) return e;
    let n = e.startsWith(`http://`) || e.startsWith(`https://`) || /^[a-z][a-z0-9+.-]*:\/\//i.test(e),
        r;
    try {
        r = new URL(e)
    } catch {
        return e
    }
    return !n || r.searchParams.get(`redirectUrl`) ? e : (r.searchParams.set(ut, t), r.toString())
}
var ut, dt = e((() => {
    ut = `redirectUrl`
}));

function ft() {
    let e = Math.floor(window.screenX + (window.outerWidth - gt) / 2),
        t = Math.floor(window.screenY + (window.outerHeight - _t) / 2);
    return [`popup=yes`, `width=${gt}`, `height=${_t}`, `left=${e}`, `top=${t}`, `noopener`, `noreferrer`].join(`,`)
}
async function pt(e, t) {
    try {
        return (await b.safePost(`/ecosystem/url_safe`, {
            requestBody: {
                url: e,
                resolved_pineapple_uri: t
            }
        })).safe
    } catch {
        return !1
    }
}
var mt, ht, gt, _t, vt, yt, bt = e((() => {
        ae(), re(), ct(), dt(), v(), p(), ve(), P(), Ce(), mt = M(() => Se(() => import(`./df9194ad-crhoab137gsnnywr.js`).then(e => e.ConfirmExternalLinkModal), __vite__mapDeps([0, 1, 2, 3, 4, 5]))), ht = M(() => Se(() => import(`./a05edf66-f6ebinxrpvpwcliw.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([6, 1, 2, 3, 4, 7, 5, 8, 9, 10, 11]))), gt = 600, _t = 750, vt = (e, t, n = `tab`) => {
            let r = lt(e, t);
            if (k()) N(mt, {
                url: r
            });
            else {
                let e = n === `popup` ? ft() : `noopener,noreferrer`;
                window.open(r, `_blank`, e);
                return
            }
        }, yt = async ({
            href: e,
            resolvedPineappleUri: t,
            csp: n,
            redirectDomains: r,
            domain: i,
            distributionChannel: a,
            redirectUrl: o,
            openMode: s,
            attributionId: c,
            conversationId: l,
            messageId: u,
            sectionLocation: d,
            widgetName: f,
            widgetSessionId: p
        }) => {
            if (!e) {
                console.error(`No href provided to handleExternalLink`);
                return
            }
            let m = a === se.OPENAI && s === `popup` ? `popup` : `tab`;
            if (A.logEvent(`link_action`, {
                    action: `click`,
                    action_type: `open_external`,
                    attribution_id: c,
                    conversation_id: l,
                    link_type: `widget`,
                    message_id: u,
                    section_location: d,
                    url: e,
                    domain: i,
                    distribution_channel: a,
                    open_mode: m,
                    widget_name: f,
                    widget_session_id: p
                }), it(e, n, i) || at(e, r)) {
                vt(e, o, m);
                return
            }
            if (a === se.OPENAI && await pt(e, t)) {
                vt(e, null, m);
                return
            }
            N(ht, {
                urls: e,
                displayUrls: e
            })
        }
    })),
    xt, St, Ct = e((() => {
        i(), ge(), ve(), xt = () => {
            let e = `unknown`;
            return s() ? e = `mobile` : h() ? e = `tablet` : S() && (e = `desktop`), e
        }, St = e => {
            let t = xt(),
                n = `web`;
            e === `skybridge` && (n = `native`);
            let r = `unknown`;
            return a() ? r = `ios` : D() ? r = `android` : O() ? r = `windows` : T() && (r = `macos`), {
                device: {
                    type: t,
                    platform: n,
                    os: r
                },
                capabilities: {
                    hover: L(ce),
                    touch: L(F)
                }
            }
        }
    })),
    wt, Tt, Et = e((() => {
        P(), Ce(), wt = M(() => Se(() => import(`./8d505c06-pfjobsi45gz6hy0j.js`).then(e => e.AutofillConsentDialogContent), __vite__mapDeps([12, 1, 2, 3, 4, 7, 5, 8, 9, 10]))), Tt = M(() => Se(() => import(`./8d505c06-pfjobsi45gz6hy0j.js`).then(e => e.AutofillConsentSheetContent), __vite__mapDeps([12, 1, 2, 3, 4, 7, 5, 8, 9, 10])))
    }));

function Dt(e) {
    "use forget";
    let t = (0, At.c)(28),
        {
            host: n,
            features: r,
            isInert: i,
            title: a,
            colorScheme: o,
            ref: s,
            subdomain: c,
            iframeRef: l,
            api: u,
            locale: f
        } = e,
        p = n === void 0 ? `chatgpt` : n,
        m = i !== void 0 && i,
        [h] = (0, jt.useState)(Ot),
        g;
    t[0] === h ? g = t[1] : (g = async (e, ...t) => {
        let n = t;
        return await te(() => !!h()), oe(h()?.[e], `Method ${String(e)} not found`)(...n)
    }, t[0] = h, t[1] = g);
    let _ = I(g),
        v, ee;
    t[2] === _ ? (v = t[3], ee = t[4]) : (v = () => new Proxy({}, {
        get: (e, t) => (...e) => _(t, ...e)
    }), ee = [_], t[2] = _, t[3] = v, t[4] = ee), (0, jt.useImperativeHandle)(s, v, ee);
    let y = (0, jt.useRef)(u),
        b, x;
    t[5] === u ? (b = t[6], x = t[7]) : (b = () => {
        y.current = u
    }, x = [u], t[5] = u, t[6] = b, t[7] = x), (0, jt.useEffect)(b, x);
    let S;
    t[8] === h ? S = t[9] : (S = e => e ? (Ue(e, new Proxy(y.current, {
        get: (e, t) => y.current[t]
    }), [`runUserCode`, `runWidgetCode`, `runComponent`]).then(e => {
        h.set(e)
    }), () => {
        h.set(null)
    }) : h.set(null), t[8] = h, t[9] = S);
    let C = I(S),
        w;
    t[10] === c ? w = t[11] : (w = Pt(c), t[10] = c, t[11] = w);
    let T = w,
        E = `sandbox-${T}`,
        D;
    t[12] !== p || t[13] !== f ? (D = Nt(p, f, Mt), t[12] = p, t[13] = f, t[14] = D) : D = t[14];
    let O = `${T}${D}`,
        k = ie(C, l),
        A;
    t[15] === r ? A = t[16] : (A = r?.length ? G(r) : void 0, t[15] = r, t[16] = A);
    let j = r?.includes(`fullscreen`) ? !0 : void 0,
        M;
    t[17] === o ? M = t[18] : (M = o ? {
        colorScheme: o
    } : void 0, t[17] = o, t[18] = M);
    let ne;
    return t[19] !== m || t[20] !== E || t[21] !== O || t[22] !== k || t[23] !== A || t[24] !== j || t[25] !== M || t[26] !== a ? (ne = (0, W.jsx)(d, {
        children: (0, W.jsx)(`iframe`, {
            title: a,
            inert: m,
            src: O,
            ref: k,
            sandbox: `allow-scripts allow-same-origin allow-forms`,
            allow: A,
            allowFullScreen: j,
            className: `h-full w-full max-w-full`,
            style: M
        }, E)
    }), t[19] = m, t[20] = E, t[21] = O, t[22] = k, t[23] = A, t[24] = j, t[25] = M, t[26] = a, t[27] = ne) : ne = t[27], ne
}

function Ot() {
    return w(null)
}

function kt(e) {
    "use forget";
    let t = (0, At.c)(8),
        n, r;
    if (t[0] === e ? (n = t[1], r = t[2]) : ({
            frameComponent: n,
            ...r
        } = e, t[0] = e, t[1] = n, t[2] = r), n) {
        let e;
        return t[3] !== n || t[4] !== r ? (e = (0, W.jsx)(n, {
            ...r
        }), t[3] = n, t[4] = r, t[5] = e) : e = t[5], e
    }
    let i;
    return t[6] === r ? i = t[7] : (i = (0, W.jsx)(Dt, {
        ...r
    }), t[6] = r, t[7] = i), i
}
var At, jt, W, Mt, G, Nt, Pt, Ft = e((() => {
    At = Ee(), Ge(), He(), Ct(), i(), g(), pe(), fe(), c(), jt = t(R()), W = ye(), Mt = !1, G = e => e.concat().sort().map(e => `${e} *`).join(`; `), Nt = (e, t, n) => `?` + [``, `app=${e}`, e === `chatgpt` ? `darkModeType=increased` : ``, `locale=${t}`, `deviceType=${St(e).device.type}`, n ? `unsafeSkipTargetOriginCheck=true` : ``].filter(Boolean).join(`&`), Pt = e => {
        if (e) {
            let t = new URL(We);
            return t.hostname = `${e}.${t.hostname}`, t.protocol = H, t.origin
        }
        return We
    }
}));

function It(e) {
    return e + 1
}
var Lt, K, q, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt = e((() => {
    Lt = Ee(), Ie(), Le(), o(), he(), K = t(R()), q = ye(), Rt = [`toolInput`, `toolOutput`, `toolResponseMetadata`, `widgetState`], zt = `text-xs uppercase tracking-wide text-token-text-tertiary`, Bt = `max-h-[70vh] overflow-auto whitespace-pre-wrap break-words rounded-md border border-token-border-light bg-token-main-surface-secondary p-3 font-mono text-xs leading-relaxed`, Vt = `pointer-events-none absolute inset-0 z-20 border border-token-text-primary`, Ht = e => Rt.find(t => e[t] != null) ?? `toolInput`, Ut = e => {
        if (e == null) return `null`;
        let t = new WeakSet;
        try {
            return JSON.stringify(e, (e, n) => {
                if (typeof n == `bigint`) return `${n}n`;
                if (n instanceof Error) return {
                    name: n.name,
                    message: n.message,
                    stack: n.stack
                };
                if (typeof n == `function`) return `[function ${n.name||`anonymous`}]`;
                if (typeof n == `object` && n) {
                    if (t.has(n)) return `[Circular]`;
                    t.add(n)
                }
                return n
            }, 2) ?? String(e)
        } catch {
            return String(e)
        }
    }, Wt = e => {
        "use forget";
        let t = (0, Lt.c)(6),
            {
                isActive: n,
                label: r,
                onClick: i
            } = e,
            a = n ? `bg-token-text-primary text-token-bg-primary` : `bg-token-main-surface-secondary text-token-text-secondary hover:bg-token-bg-secondary`,
            o;
        t[0] === a ? o = t[1] : (o = _(`rounded-full px-3 py-1.5 text-xs font-medium transition-colors`, a), t[0] = a, t[1] = o);
        let s;
        return t[2] !== r || t[3] !== i || t[4] !== o ? (s = (0, q.jsx)(`button`, {
            type: `button`,
            className: o,
            onClick: i,
            children: r
        }), t[2] = r, t[3] = i, t[4] = o, t[5] = s) : s = t[5], s
    }, Gt = e => {
        "use forget";
        let t = (0, Lt.c)(22),
            {
                isOpen: n,
                widgetId: r,
                selectedPanel: i,
                values: a,
                onClose: o,
                onSelectPanel: s
            } = e,
            c = a[i],
            l;
        t[0] === c ? l = t[1] : (l = Ut(c), t[0] = c, t[1] = l);
        let u = l,
            d = `Widget ID: ${r}`,
            f;
        t[2] !== s || t[3] !== i ? (f = Rt.map(e => (0, q.jsx)(Wt, {
            isActive: e === i,
            label: e,
            onClick: () => s(e)
        }, e)), t[2] = s, t[3] = i, t[4] = f) : f = t[4];
        let p;
        t[5] === f ? p = t[6] : (p = (0, q.jsx)(`div`, {
            className: `flex flex-wrap gap-2`,
            children: f
        }), t[5] = f, t[6] = p);
        let m;
        t[7] === i ? m = t[8] : (m = (0, q.jsx)(`div`, {
            className: zt,
            children: i
        }), t[7] = i, t[8] = m);
        let h;
        t[9] === u ? h = t[10] : (h = (0, q.jsx)(`pre`, {
            className: Bt,
            children: u
        }), t[9] = u, t[10] = h);
        let g;
        t[11] !== m || t[12] !== h ? (g = (0, q.jsxs)(`div`, {
            className: `flex min-h-0 flex-col gap-2`,
            children: [m, h]
        }), t[11] = m, t[12] = h, t[13] = g) : g = t[13];
        let _;
        t[14] !== p || t[15] !== g ? (_ = (0, q.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [p, g]
        }), t[14] = p, t[15] = g, t[16] = _) : _ = t[16];
        let v;
        return t[17] !== n || t[18] !== o || t[19] !== d || t[20] !== _ ? (v = (0, q.jsx)(C, {
            isOpen: n,
            onClose: o,
            showCloseButton: !0,
            size: `xlarge`,
            title: `Widget debug data`,
            description: d,
            testId: `modal-ecosystem-app-debug-inspector`,
            children: _
        }), t[17] = n, t[18] = o, t[19] = d, t[20] = _, t[21] = v) : v = t[21], v
    }, Kt = e => {
        "use forget";
        let t = (0, Lt.c)(30),
            {
                widgetId: n,
                widgetState: r,
                toolInput: i,
                toolOutput: a,
                toolResponseMetadata: o,
                children: s
            } = e,
            [c, l] = (0, K.useState)(0),
            [u, d] = (0, K.useState)(!1),
            [f, p] = (0, K.useState)(!1),
            m;
        t[0] !== i || t[1] !== a || t[2] !== o || t[3] !== r ? (m = {
            toolInput: i,
            toolOutput: a,
            toolResponseMetadata: o,
            widgetState: r
        }, t[0] = i, t[1] = a, t[2] = o, t[3] = r, t[4] = m) : m = t[4];
        let h = m,
            g;
        t[5] === h ? g = t[6] : (g = () => Ht(h), t[5] = h, t[6] = g);
        let [v, ee] = (0, K.useState)(g), y, b;
        t[7] === h ? (y = t[8], b = t[9]) : (y = () => {
            ee(e => h[e] == null ? Ht(h) : e)
        }, b = [h], t[7] = h, t[8] = y, t[9] = b), (0, K.useEffect)(y, b);
        let x, S;
        t[10] === f ? (x = t[11], S = t[12]) : (x = () => {
            if (!f) return;
            let e = window.setTimeout(() => {
                p(!1)
            }, 2e3);
            return () => {
                window.clearTimeout(e)
            }
        }, S = [f], t[10] = f, t[11] = x, t[12] = S), (0, K.useEffect)(x, S);
        let C;
        t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, q.jsx)(`div`, {
            className: Vt
        }), t[13] = C) : C = t[13];
        let w;
        t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (w = _(`border-token-text-primary bg-token-bg-primary text-token-text-primary hover:bg-token-bg-secondary flex h-6 w-6 items-center justify-center border-s border-t border-b p-0 transition-colors`), t[14] = w) : w = t[14];
        let T;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, q.jsx)(`button`, {
            type: `button`,
            className: w,
            "aria-label": `Reload widget`,
            title: `Reload widget`,
            onClick: () => l(It),
            children: (0, q.jsx)(Fe, {
                className: `icon-sm`
            })
        }), t[15] = T) : T = t[15];
        let E;
        t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (E = _(`border-token-text-primary bg-token-bg-primary text-token-text-primary hover:bg-token-bg-secondary flex h-6 w-6 items-center justify-center border p-0 transition-colors`), t[16] = E) : E = t[16];
        let D;
        t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (D = (0, q.jsxs)(`div`, {
            className: `absolute end-0 top-0 z-30 flex`,
            children: [T, (0, q.jsx)(`button`, {
                type: `button`,
                className: E,
                "aria-label": `Inspect widget data`,
                title: `Inspect widget data`,
                onClick: () => d(!0),
                children: (0, q.jsx)(Pe, {
                    className: `icon-sm`
                })
            })]
        }), t[17] = D) : D = t[17];
        let O;
        t[18] !== s || t[19] !== c ? (O = s(c), t[18] = s, t[19] = c, t[20] = O) : O = t[20];
        let k;
        t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (k = () => d(!1), t[21] = k) : k = t[21];
        let A;
        t[22] !== h || t[23] !== u || t[24] !== v || t[25] !== n ? (A = (0, q.jsx)(Gt, {
            isOpen: u,
            widgetId: n,
            selectedPanel: v,
            values: h,
            onClose: k,
            onSelectPanel: ee
        }), t[22] = h, t[23] = u, t[24] = v, t[25] = n, t[26] = A) : A = t[26];
        let j;
        return t[27] !== O || t[28] !== A ? (j = (0, q.jsxs)(`div`, {
            className: `relative h-full w-full max-w-full`,
            children: [C, D, O, A]
        }), t[27] = O, t[28] = A, t[29] = j) : j = t[29], j
    }
}));

function Jt(e, t, n) {
    let r = window.getComputedStyle(e).getPropertyValue(t).trim();
    if (!r) return ``;
    if (!/(?:var|light-dark|alpha)\(/.test(r)) return r;
    e.style.setProperty(n, `var(${t})`);
    let i = window.getComputedStyle(e).getPropertyValue(n).trim();
    return e.style.removeProperty(n), i
}

function Yt(e) {
    if (typeof document > `u` || typeof window > `u`) return;
    let t = Object.create(null),
        n = document.createElement(`span`);
    n.className = `puik-root`, n.dataset.theme = e, n.hidden = !0, (document.body ?? document.documentElement).appendChild(n);
    try {
        for (let [e, [r, i]] of Object.entries(Xt)) {
            let a = Jt(n, r, i);
            a && (t[e] = a)
        }
    } finally {
        n.remove()
    }
    if (Object.keys(t).length !== 0) return {
        variables: t
    }
}
var Xt, Zt = e((() => {
        Xt = {
            "--color-background-primary": [`--color-surface`, `background-color`],
            "--color-background-secondary": [`--color-surface-secondary`, `background-color`],
            "--color-background-tertiary": [`--color-surface-tertiary`, `background-color`],
            "--color-background-inverse": [`--color-background-primary-solid`, `background-color`],
            "--color-background-ghost": [`--alpha-0`, `background-color`],
            "--color-background-info": [`--color-background-info-surface`, `background-color`],
            "--color-background-danger": [`--color-background-danger-surface`, `background-color`],
            "--color-background-success": [`--color-background-success-surface`, `background-color`],
            "--color-background-warning": [`--color-background-warning-surface`, `background-color`],
            "--color-background-disabled": [`--color-background-disabled`, `background-color`],
            "--color-text-primary": [`--color-text-primary`, `color`],
            "--color-text-secondary": [`--color-text-secondary`, `color`],
            "--color-text-tertiary": [`--color-text-tertiary`, `color`],
            "--color-text-inverse": [`--color-text-inverse`, `color`],
            "--color-text-ghost": [`--color-text-primary-ghost`, `color`],
            "--color-text-info": [`--color-text-info`, `color`],
            "--color-text-danger": [`--color-text-danger`, `color`],
            "--color-text-success": [`--color-text-success`, `color`],
            "--color-text-warning": [`--color-text-warning`, `color`],
            "--color-text-disabled": [`--color-text-disabled`, `color`],
            "--color-border-primary": [`--color-border`, `border-color`],
            "--color-border-secondary": [`--color-border-subtle`, `border-color`],
            "--color-border-tertiary": [`--color-border-strong`, `border-color`],
            "--color-border-inverse": [`--color-text-inverse`, `border-color`],
            "--color-border-ghost": [`--alpha-0`, `border-color`],
            "--color-border-info": [`--color-border-info-surface`, `border-color`],
            "--color-border-danger": [`--color-border-danger-surface`, `border-color`],
            "--color-border-success": [`--color-border-success-surface`, `border-color`],
            "--color-border-warning": [`--color-border-warning-surface`, `border-color`],
            "--color-border-disabled": [`--color-border-disabled`, `border-color`],
            "--color-ring-primary": [`--color-ring-primary`, `outline-color`],
            "--color-ring-secondary": [`--color-ring-secondary`, `outline-color`],
            "--color-ring-inverse": [`--color-ring-primary-solid`, `outline-color`],
            "--color-ring-info": [`--color-ring-info`, `outline-color`],
            "--color-ring-danger": [`--color-ring-danger`, `outline-color`],
            "--color-ring-success": [`--color-ring-success`, `outline-color`],
            "--color-ring-warning": [`--color-ring-warning`, `outline-color`],
            "--font-sans": [`--font-sans`, `font-family`],
            "--font-mono": [`--font-mono`, `font-family`],
            "--font-weight-normal": [`--font-weight-normal`, `font-weight`],
            "--font-weight-medium": [`--font-weight-medium`, `font-weight`],
            "--font-weight-semibold": [`--font-weight-semibold`, `font-weight`],
            "--font-weight-bold": [`--font-weight-bold`, `font-weight`],
            "--font-text-xs-size": [`--font-text-xs-size`, `font-size`],
            "--font-text-sm-size": [`--font-text-sm-size`, `font-size`],
            "--font-text-md-size": [`--font-text-md-size`, `font-size`],
            "--font-text-lg-size": [`--font-text-lg-size`, `font-size`],
            "--font-heading-xs-size": [`--font-heading-xs-size`, `font-size`],
            "--font-heading-sm-size": [`--font-heading-sm-size`, `font-size`],
            "--font-heading-md-size": [`--font-heading-md-size`, `font-size`],
            "--font-heading-lg-size": [`--font-heading-lg-size`, `font-size`],
            "--font-heading-xl-size": [`--font-heading-xl-size`, `font-size`],
            "--font-heading-2xl-size": [`--font-heading-2xl-size`, `font-size`],
            "--font-heading-3xl-size": [`--font-heading-3xl-size`, `font-size`],
            "--font-text-xs-line-height": [`--font-text-xs-line-height`, `line-height`],
            "--font-text-sm-line-height": [`--font-text-sm-line-height`, `line-height`],
            "--font-text-md-line-height": [`--font-text-md-line-height`, `line-height`],
            "--font-text-lg-line-height": [`--font-text-lg-line-height`, `line-height`],
            "--font-heading-xs-line-height": [`--font-heading-xs-line-height`, `line-height`],
            "--font-heading-sm-line-height": [`--font-heading-sm-line-height`, `line-height`],
            "--font-heading-md-line-height": [`--font-heading-md-line-height`, `line-height`],
            "--font-heading-lg-line-height": [`--font-heading-lg-line-height`, `line-height`],
            "--font-heading-xl-line-height": [`--font-heading-xl-line-height`, `line-height`],
            "--font-heading-2xl-line-height": [`--font-heading-2xl-line-height`, `line-height`],
            "--font-heading-3xl-line-height": [`--font-heading-3xl-line-height`, `line-height`],
            "--border-radius-xs": [`--radius-xs`, `border-radius`],
            "--border-radius-sm": [`--radius-sm`, `border-radius`],
            "--border-radius-md": [`--radius-md`, `border-radius`],
            "--border-radius-lg": [`--radius-lg`, `border-radius`],
            "--border-radius-xl": [`--radius-xl`, `border-radius`],
            "--border-radius-full": [`--radius-full`, `border-radius`],
            "--border-width-regular": [`--hairline`, `border-width`],
            "--shadow-hairline": [`--shadow-hairline`, `box-shadow`],
            "--shadow-sm": [`--shadow-100`, `box-shadow`],
            "--shadow-md": [`--shadow-200`, `box-shadow`],
            "--shadow-lg": [`--shadow-300`, `box-shadow`]
        }
    })),
    Qt, $t, en = e((() => {
        Qt = e => {
            if (!e) return [];
            let t = [];
            return e.camera && t.push(`camera`), e.microphone && t.push(`microphone`), e.geolocation && t.push(`geolocation`), e.fullscreen && t.push(`fullscreen`), e.clipboardWrite && t.push(`clipboard-write`), t
        }, $t = (e, t) => {
            let n = Qt(t);
            if (!n.length) return e;
            let r = new Set(e ?? []);
            for (let e of n) r.add(e);
            return Array.from(r)
        }
    }));

function tn() {
    return je()
}
var nn, J, Y, X, Z, rn, an, on, sn, cn, ln, un, dn, fn, Q, pn = e((() => {
    nn = Ee(), ae(), B(), z(), V(), Ct(), Et(), Ft(), qt(), Zt(), qe(), en(), Ye(), i(), me(), l(), ee(), v(), Ae(), pe(), u(), fe(), c(), De(), Te(), Ve(), r(), y(), J = t(R()), Y = ye(), Ce(), X = e => Se(() => import(`./3e574439-njvhxdk9cfxaurqk.js`).then(e => (e.n(), e.l)).then(e), __vite__mapDeps([13, 1, 2, 3, 4, 7, 5, 8, 9, 10, 14, 15, 16, 17, 18, 19, 20])), Z = e => typeof e == `object` && !!e, rn = e => {
        if (!e) return {};
        let t = {},
            [n, ...r] = (e.name ?? ``).trim().split(/\s+/);
        return n && (t.name = e.name, t[`given-name`] = n, r.length > 0 && (t[`family-name`] = r.join(` `))), e.email && (t.email = e.email), e.phone_number && (t.tel = e.phone_number), t
    }, an = e => {
        if (!e) return null;
        if (!e.includes(`://`)) return e;
        try {
            return new URL(e).hostname || null
        } catch {
            return null
        }
    }, on = e => Object.values(ne(`3726720227`).value).some(t => typeof t == `string` && an(t) === e), sn = e => {
        if (!e) return null;
        try {
            return E(e).sub ?? null
        } catch {
            return null
        }
    }, cn = e => {
        if (!e || !Z(e)) return null;
        let t = e.status;
        return (e.cancelled === !0 || e.is_cancelled === !0 || t === `cancelled`) && typeof e.reason == `string` ? e.reason : null
    }, ln = (e, t) => {
        if (cn(e)) return null;
        for (let t of [e, e?.call_tool_result, e?.mcp_tool_result, e?.mcpToolResult]) {
            if (!Z(t)) continue;
            let e = Be(t);
            if (e) return e
        }
        if (!Z(t)) return null;
        let n = typeof t.result == `string` ? t.result : null,
            r = n || `[structured content]`;
        if (!n) try {
            r = JSON.stringify(t)
        } catch {}
        return Be({
            content: [{
                type: `text`,
                text: r
            }],
            structuredContent: t,
            isError: typeof t.isError == `boolean` ? t.isError : void 0,
            _meta: Z(t._meta) ? t._meta : e ?? void 0
        })
    }, un = ({
        displayMode: e,
        viewParams: t,
        toolOutput: n
    }) => {
        if (e === `modal`) return t ?? null;
        let r = Z(n) ? n : null,
            i = Z(t) ? t : null;
        return !r && !i ? null : {
            ...r ?? {},
            ...i ?? {}
        }
    }, dn = {
        insets: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }
    }, fn = ({
        host: e,
        mcpApps: t,
        accountId: r,
        ref: i,
        iframeRef: a,
        html: o,
        measureWidth: s,
        expectReadySignal: c,
        expectedReadySignal: l,
        features: u,
        permissions: d,
        safeArea: p = dn,
        attributionId: h,
        appDisplayName: g,
        conversationId: _,
        appPackageName: v,
        supportsOAuthCompletion: ee,
        supportsSourceCitationLinks: y,
        widgetId: b,
        widgetSessionId: S,
        widgetParent: C,
        widgetDistributionChannel: w,
        allowPrivilegedActions: T = !0,
        suggestionMessageId: E,
        widgetType: D,
        csp: O,
        subdomain: k,
        viewParams: M,
        widgetState: te = null,
        deepLink: ne,
        toolInput: re = null,
        toolOutput: N = null,
        toolResponseMetadata: ae = null,
        toolInfo: ce = null,
        subjectId: fe = null,
        isTombstone: pe = !1,
        maxHeight: P,
        maxWidth: me,
        containerHeight: he,
        containerWidth: ge,
        theme: F,
        title: ve,
        api: L,
        locale: ye,
        displayMode: R = `inline`,
        availableDisplayModes: Se,
        isSidebarOpen: Ce,
        onReady: Te,
        onError: Ee,
        frameComponent: De
    }) => {
        "use no forget";
        let z = (0, J.useMemo)(() => ({
                attribution_id: h ?? C ?? ``,
                name: D,
                conversation_id: _ ?? null,
                message_id: b || null,
                suggestion_message_id: E ?? null,
                distribution_channel: w,
                host: e
            }), [e, w, h, C, D, _, b, E]),
            [B, Ae] = (0, J.useState)(null),
            je = ie(Ae, i),
            [V, Pe] = (0, J.useState)(null),
            [Fe, Ie] = (0, J.useState)([]),
            [Le, Be] = (0, J.useState)(null),
            Ve = Fe ?? [],
            He = Fe != null,
            [Ue] = (0, J.useState)(() => new WeakMap),
            [We, Ge] = (0, J.useState)(!1),
            H = e === `skybridge`,
            {
                user: qe = null,
                accessToken: Ye
            } = _e() ?? {},
            Ze = H ? m(Ye) : null,
            Qe = H ? sn(Ye) : null,
            U = an(h ?? C),
            $e = T && (H || qe != null) && U != null && on(U),
            et = $e && j(`1850361504`),
            tt = ue(() => et ? H ? r == null ? null : f(n().data, r) : x() : null),
            nt = tt?.normalizedAccountUserId,
            rt = H ? `${r??``}:${Qe??``}` : nt ?? qe?.id,
            it = r === tt?.id && Qe != null && (Ze == null || Ze === r),
            at = et && tt != null && nt != null && (!H || it),
            {
                data: ot,
                isLoading: st
            } = xe({
                ...de,
                queryKey: H ? [...de.queryKey, `skybridge`, r ?? ``, Qe ?? ``] : de.queryKey,
                enabled: H && $e
            }),
            ct = xe({
                ...Je(nt),
                enabled: at
            }),
            lt = be(),
            ut = we({
                mutationFn: ({
                    app_uri: e,
                    provider_name: t
                }) => Xe({
                    app_uri: e,
                    provider_name: t
                }),
                onSuccess: (e, {
                    accountUserId: t
                }) => lt.setQueryData(Je(t).queryKey, (t = []) => [...t.filter(({
                    app_uri: t
                }) => t !== e.app_uri), e])
            }),
            dt = at && ct.data?.some(({
                app_uri: e
            }) => an(e) === U) === !0,
            ft = H ? ot ?? null : qe,
            pt = ft ? {
                name: ft.name,
                email: ft.email,
                phone_number: ft.phone_number
            } : null,
            mt = rn(pt),
            ht = Le != null && Le.appId === U && Le.accountIdentity === rt && Le.frame === B && Le.html === o && Le.widgetId === b && Ve.some(e => !!mt[e.fieldType]),
            gt = H && st || at && ct.isLoading,
            _t = He && ht && !gt,
            vt = _t && dt && !ut.isPending,
            yt = g ?? ve ?? D ?? U ?? ``,
            bt = $e && _t && !dt && pt != null,
            xt = I(t => {
                U != null && A.logStructuredEvent(`ChatgptAppAutofillEvent`, {
                    action: t,
                    appId: U,
                    surface: e === `skybridge` ? Me.CHATGPT_APP_AUTOFILL_SURFACE_SKYBRIDGE : Me.CHATGPT_APP_AUTOFILL_SURFACE_WEB,
                    alwaysAllowAvailable: at
                })
            }),
            Ct = I(e => {
                X(({
                    trackAutofillConsent: t
                }) => t(z, e, U, Ve))
            });
        (0, J.useEffect)(() => {
            if (!bt || !V || Ue.get(V)?.has(b)) return;
            let e = Ue.get(V) ?? new Set;
            e.add(b), Ue.set(V, e), Ct(`shown`), xt(Ne.CHATGPT_APP_AUTOFILL_ACTION_CONSENT_SHOWN)
        }, [Ue, bt, xt, V, Ct, b]);
        let Et = I((e = Ne.CHATGPT_APP_AUTOFILL_ACTION_ALLOW_ONCE) => {
                if (He) {
                    e !== Ne.CHATGPT_APP_AUTOFILL_ACTION_AUTO_APPLIED && Ct(`accepted`);
                    for (let e of Ve) {
                        let t = mt[e.fieldType];
                        t && B?.applyAutofillCandidate({
                            id: e.id,
                            value: t
                        })
                    }
                    Ie(null), xt(e)
                }
            }),
            Dt = I(e => V?.isCurrent() === !0 && e.appId === U && e.accountUserId === nt && e.frame === B && e.html === o && e.widgetId === b && e.candidates === Ve && He),
            Ot = I(async () => {
                if (!U || !nt) return;
                let e = {
                    appId: U,
                    accountUserId: nt,
                    frame: B,
                    html: o,
                    widgetId: b,
                    candidates: Ve
                };
                Ge(!1);
                try {
                    await ut.mutateAsync({
                        app_uri: U,
                        provider_name: yt,
                        accountUserId: nt
                    }), Dt(e) && Et(Ne.CHATGPT_APP_AUTOFILL_ACTION_ALWAYS_ALLOW)
                } catch {
                    Dt(e) && (Ge(!0), xt(Ne.CHATGPT_APP_AUTOFILL_ACTION_GRANT_SAVE_FAILED))
                }
            }),
            At = I(() => {
                He && Ct(`declined`), Ie(null), xt(Ne.CHATGPT_APP_AUTOFILL_ACTION_DENIED)
            }),
            jt = I(() => {
                He && Ct(`declined`), Ie(null), xt(Ne.CHATGPT_APP_AUTOFILL_ACTION_DISMISSED)
            });
        (0, J.useEffect)(() => {
            vt && Et(Ne.CHATGPT_APP_AUTOFILL_ACTION_AUTO_APPLIED)
        }, [Et, vt]);
        let W = R === `fullscreen` ? `fullscreen` : R === `pip` ? `pip` : `inline`,
            Mt = (0, J.useMemo)(() => $t(u, d), [u, d]),
            G = (0, J.useMemo)(() => St(e), [e]),
            Nt = G.device.type === `mobile` || G.device.type === `tablet` ? `mobile` : G.device.type === `desktop` ? `desktop` : `web`,
            Pt = (0, J.useMemo)(() => {
                let e = {};
                return W === `fullscreen` ? typeof window < `u` && (e.width = window.innerWidth, e.height = window.innerHeight) : (he == null ? P != null && (e.maxHeight = P) : e.height = he, ge == null ? me != null && (e.maxWidth = me) : e.width = ge), Object.keys(e).length > 0 ? e : void 0
            }, [W, he, ge, P, me]),
            Ft = (0, J.useMemo)(() => {
                if (!(typeof Intl > `u`)) return Intl.DateTimeFormat().resolvedOptions().timeZone
            }, []),
            It = T ? t?.hostContext[`openai/modelContext`] : void 0,
            Lt = T ? t?.hostContext[`openai/chat`] : void 0,
            K = y === !0 && T && w === se.OPENAI,
            q = (0, J.useMemo)(() => {
                let t = e === `skybridge` ? (Se ?? [`inline`, `fullscreen`]).filter(e => e === `inline` || e === `fullscreen`) : [`inline`, `fullscreen`, `pip`];
                (e !== `skybridge` || W !== `pip`) && !t.includes(W) && t.push(W);
                let n = {
                    theme: F,
                    displayMode: W,
                    availableDisplayModes: t,
                    containerDimensions: Pt,
                    locale: ye,
                    safeAreaInsets: p.insets,
                    userAgent: `chatgpt`,
                    platform: Nt,
                    deviceCapabilities: {
                        touch: G.capabilities.touch,
                        hover: G.capabilities.hover
                    }
                };
                return ce && (n.toolInfo = ce), Ft && (n.timeZone = Ft), ne !== void 0 && (n[`openai/deepLink`] = ne), It !== void 0 && (n[`openai/modelContext`] = It), Lt !== void 0 && (n[`openai/chat`] = Lt), K && (n[`openai/sourceCitationLinks`] = !0), n
            }, [Lt, Pt, ne, ye, W, It, e, Se, Nt, p.insets, K, F, Ft, ce, G.capabilities.hover, G.capabilities.touch]),
            Rt = (0, J.useMemo)(() => {
                if (!u || u.length === 0) return;
                let e = {},
                    t = new Set(u);
                return t.has(`camera`) && (e.camera = {}), t.has(`microphone`) && (e.microphone = {}), t.has(`geolocation`) && (e.geolocation = {}), t.has(`clipboard-write`) && (e.clipboardWrite = {}), Object.keys(e).length > 0 ? e : void 0
            }, [u]),
            zt = (0, J.useMemo)(() => {
                if (!O) return;
                let e = {};
                return O.connectDomains && O.connectDomains.length > 0 && (e.connectDomains = O.connectDomains), O.resourceDomains && O.resourceDomains.length > 0 && (e.resourceDomains = O.resourceDomains), O.frameDomains && O.frameDomains.length > 0 && (e.frameDomains = O.frameDomains), Object.keys(e).length > 0 ? e : void 0
            }, [O]),
            Bt = (0, J.useMemo)(() => {
                let e = {
                    openLinks: {},
                    logging: {},
                    ...T ? {
                        serverTools: {},
                        serverResources: {},
                        ...t?.forwardedRequestMethods.includes(`ui/message`) ? {} : {
                            message: {}
                        },
                        ...t?.forwardedRequestMethods.includes(`ui/update-model-context`) ? {} : {
                            updateModelContext: {}
                        },
                        ...t?.hostCapabilities
                    } : {}
                };
                return (Rt || zt) && (e.sandbox = {}, Rt && (e.sandbox.permissions = Rt), zt && (e.sandbox.csp = zt)), e
            }, [T, t?.forwardedRequestMethods, t?.hostCapabilities, zt, Rt]),
            [Vt] = (0, J.useState)(() => new Map),
            Ht = I(() => {
                let e = Vt.get(F);
                return e || (e = Yt(F), e && Vt.set(F, e)), e ? {
                    ...q,
                    styles: e
                } : q
            }),
            Ut = I(() => {
                Ee?.()
            }),
            Wt = I(e => {
                X(({
                    trackFatalWidgetError: t
                }) => t(z, e)), Ut()
            }),
            Gt = I(() => {
                Te?.()
            }),
            Kt = I(() => {
                let e = z,
                    t = R,
                    n = c === !0,
                    r = performance.now(),
                    i = !1,
                    a = a => {
                        if (i) return;
                        i = !0, clearTimeout(o);
                        let s = performance.now() - r;
                        X(({
                            trackWidgetLoadOutcome: r
                        }) => r(e, {
                            outcome: a,
                            displayMode: t,
                            durationMs: s,
                            expectsReadySignal: n
                        }))
                    },
                    o = setTimeout(() => a(`timeout`), 3e4);
                return a
            }),
            qt = I(async (e, n, r, i) => {
                Pe(null), Ie([]), Be(null), Ge(!1);
                let a = e.runWidgetCode({
                        html: n,
                        measureWidth: s,
                        expectReadySignal: c,
                        expectedReadySignal: l,
                        isFirstParty: T && w === se.OPENAI,
                        widgetId: b,
                        ...$e ? {
                            enableAutofill: !0
                        } : {},
                        viewParams: un({
                            displayMode: R,
                            viewParams: M,
                            toolOutput: N ?? null
                        }),
                        widgetState: te,
                        toolInput: re,
                        toolOutput: N,
                        toolResponseMetadata: ae,
                        subjectId: fe,
                        appPackageName: v,
                        supportsOAuthCompletion: ee,
                        supportsSourceCitationLinks: K,
                        isTombstone: pe,
                        features: Mt,
                        maxHeight: P ?? void 0,
                        maxWidth: me ?? void 0,
                        theme: F,
                        displayMode: R,
                        isSidebarOpen: Ce ?? !1,
                        safeArea: p,
                        userAgent: G,
                        csp: O,
                        mcpApps: {
                            forwardedRequestMethods: T ? t?.forwardedRequestMethods : void 0,
                            hostContext: Ht(),
                            hostCapabilities: Bt,
                            hostInfo: {
                                name: `chatgpt`
                            }
                        }
                    }),
                    o = null;
                for await (let t of await a) {
                    if (!r()) return;
                    t.type === ze.ENVIRONMENT_STATUS && t.status === Re.RUNNING_CODE ? (i(`ready`), Gt(), Pe(t => t?.frame === e && t.html === n && t.isCurrent === r ? t : {
                        frame: e,
                        html: n,
                        expectsReadySignal: c === !0,
                        expectedReadySignal: l ?? null,
                        isCurrent: r
                    })) : t.type === ze.ERROR ? (X(({
                        trackWidgetError: e
                    }) => e(z, t.error)), o = t.error) : t.type === ze.RUN_COMPLETE && t.wasFatalError && (i(`error`), Wt(o))
                }
            }),
            Jt = c === !0,
            Xt = l ?? null;
        (0, J.useEffect)(() => {
            if (!B || !o) return;
            let e = !0,
                t = Kt();
            return qt(B, o, () => e, t).catch(() => {
                e && (t(`error`), Wt(null))
            }), () => {
                e = !1, t(`aborted`)
            }
        }, [Jt, B, o, Xt, Wt, qt, Kt]);
        let Zt = (0, J.useMemo)(() => ln(ae, N), [ae, N]),
            Qt = cn(ae),
            en = {
                widgetId: b,
                widgetState: te,
                toolInput: re,
                toolOutput: N,
                toolResponseMetadata: ae,
                subjectId: fe
            },
            [tn, nn] = (0, J.useState)(en),
            [Z, fn] = (0, J.useState)(null),
            [Q, pn] = (0, J.useState)(null);
        le(tn, en) || nn(en);
        let $ = V?.frame === B && V.html === o && V.expectsReadySignal === Jt && V.expectedReadySignal === Xt && V.isCurrent() ? V : null;
        $ && re && (Z?.widget !== $ || Z.widgetId !== b || !le(Z.input, re)) && fn({
            widget: $,
            widgetId: b,
            input: re
        }), $ && Zt && (Q?.widget !== $ || Q.widgetId !== b || !le(Q.result, Zt)) && pn({
            widget: $,
            widgetId: b,
            result: Zt
        }), (0, J.useEffect)(() => {
            $ && $.frame.setWidgetData(tn)
        }, [$, tn]), (0, J.useEffect)(() => {
            Z?.widget.isCurrent() && Z.widget.frame.notifyMcpAppsToolInput({
                arguments: Z.input
            })
        }, [Z]), (0, J.useEffect)(() => {
            Q?.widget.isCurrent() && Q.widget.frame.notifyMcpAppsToolResult(Q.result)
        }, [Q]), (0, J.useEffect)(() => {
            $ && Qt != null && $.frame.notifyMcpAppsToolCancelled({
                reason: Qt
            })
        }, [$, Qt, b]), (0, J.useEffect)(() => {
            $ && $.frame.notifyMcpAppsHostContext({
                hostContext: Ht()
            })
        }, [$, Ht, q]), (0, J.useEffect)(() => {
            if (B) return () => {
                B.requestMcpAppsResourceTeardown({
                    timeoutMs: 500
                })
            }
        }, [B]), (0, J.useEffect)(() => {
            $ && $.frame.setWidgetView({
                widgetId: b,
                displayMode: R,
                viewParams: un({
                    displayMode: R,
                    viewParams: M,
                    toolOutput: N ?? null
                }),
                isTombstone: pe
            })
        }, [$, b, R, M, N, pe]), (0, J.useEffect)(() => {
            $ && $.frame.setAdditionalGlobals({
                additionalGlobals: {
                    isSidebarOpen: Ce ?? !1
                }
            })
        }, [$, Ce]), (0, J.useEffect)(() => {
            $ && $.frame.setAdditionalGlobals({
                additionalGlobals: {
                    maxHeight: P,
                    maxWidth: me
                }
            })
        }, [$, P, me]), (0, J.useEffect)(() => {
            $ && $.frame.setTheme({
                theme: F
            })
        }, [$, F]), (0, J.useEffect)(() => {
            $ && $.frame.setSafeArea({
                safeArea: p
            })
        }, [$, p]);
        let mn = e === `skybridge` || j(`1610966033`),
            hn = I(e => oe(L.callMcp)(e)),
            gn = L.scanCard ? JSON.stringify([`card-scan`, rt, b, S ?? null, o, Jt, Xt]) : `default`,
            _n = (0, J.useMemo)(() => ({
                frameKey: gn
            }), [gn]),
            vn = I(() => ({
                owner: _n,
                readyWidget: $,
                scanCard: L.scanCard
            })),
            yn = (0, J.useMemo)(() => async () => {
                let e = vn();
                if (e.owner !== _n || !e.readyWidget?.isCurrent() || !e.scanCard) return {
                    status: `unavailable`
                };
                let t = await e.scanCard(),
                    n = vn();
                return n.owner === _n && n.readyWidget === e.readyWidget && e.readyWidget.isCurrent() ? t : {
                    status: `cancelled`
                }
            }, [vn, _n]),
            bn = T ? L.openPlaidLink ?? (e === `chatgpt` && w === se.OPENAI && C === `connectors://connector_693864f100e4819093e6ed9b651239f1` ? Ke : void 0) : void 0;
        return (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsx)(kt, {
                frameComponent: De,
                title: ve,
                host: e,
                colorScheme: F,
                subdomain: k,
                features: Mt,
                api: {
                    ...L,
                    callMcp: L.callMcp ? hn : void 0,
                    scanCard: L.scanCard ? yn : void 0,
                    notifyIntrinsicHeight: e => L.notifyIntrinsicHeight?.(e),
                    updateWidgetState: L.updateWidgetState ? (e, t, n) => L.updateWidgetState?.(b, t, mn ? n : void 0) : void 0,
                    openPlaidLink: bn,
                    downloadBlob: T && w === se.OPENAI ? ({
                        blob: e,
                        name: t
                    }) => {
                        Oe(e, t)
                    } : void 0,
                    notifyAutofillCandidates: $e ? e => {
                        He && (Be({
                            appId: U,
                            accountIdentity: rt,
                            frame: B,
                            html: o,
                            widgetId: b
                        }), Ie(e))
                    } : void 0,
                    notifyNavigation: e => {
                        X(({
                            trackWidgetNavigation: t
                        }) => t(z, e)), L.notifyNavigation?.(e)
                    },
                    requestCheckout: L.requestCheckout ? e => (X(({
                        trackWidgetCheckoutSession: e
                    }) => e(z)), L.requestCheckout?.(e)) : void 0,
                    requestDisplayMode: e => {
                        let {
                            mode: t
                        } = e;
                        return t !== R && X(({
                            trackWidgetDisplayMode: e
                        }) => e(z, t)), L.requestDisplayMode?.(e) ?? {
                            mode: t
                        }
                    },
                    share: async e => {
                        let {
                            url: t,
                            title: n,
                            text: r,
                            files: i
                        } = e;
                        return await navigator.share({
                            url: t,
                            title: n,
                            text: r,
                            files: i
                        })
                    },
                    openExternal: async e => {
                        X(({
                            trackWidgetLinkOut: e
                        }) => e(z)), await L.openExternal?.(e)
                    },
                    sendInstrument: e => {
                        X(({
                            trackSandboxInstrument: t
                        }) => t(e, z))
                    },
                    notifySecurityPolicyViolation: e => {
                        X(({
                            trackSecurityPolicyViolation: t
                        }) => t({
                            ...z,
                            violation: e
                        }))
                    }
                },
                iframeRef: a,
                ref: je,
                locale: ye
            }, gn), bt && pt && (e === `skybridge` ? (0, Y.jsx)(Tt, {
                appName: yt,
                user: pt,
                onAllow: () => Et(),
                onAlwaysAllow: at ? Ot : void 0,
                isSavingGrant: ut.isPending,
                hasGrantError: We,
                onDecline: At,
                onDismiss: jt
            }) : (0, Y.jsx)(ke, {
                for: wt,
                withProps: {
                    appName: yt,
                    user: pt,
                    onAllow: () => Et(),
                    onAlwaysAllow: at ? Ot : void 0,
                    isSavingGrant: ut.isPending,
                    hasGrantError: We,
                    onDecline: At,
                    onDismiss: jt
                },
                open: !0,
                onClose: jt
            }))]
        })
    }, Q = e => {
        "use forget";
        let t = (0, nn.c)(11);
        if (!ue(tn)) {
            let n;
            return t[0] === e ? n = t[1] : (n = (0, Y.jsx)(fn, {
                ...e
            }), t[0] = e, t[1] = n), n
        }
        let n = e.widgetState ?? null,
            r = e.toolInput ?? null,
            i = e.toolOutput ?? null,
            a = e.toolResponseMetadata ?? null,
            o;
        t[2] === e ? o = t[3] : (o = t => (0, Y.jsx)(fn, {
            ...e
        }, t), t[2] = e, t[3] = o);
        let s;
        return t[4] !== e.widgetId || t[5] !== n || t[6] !== r || t[7] !== i || t[8] !== a || t[9] !== o ? (s = (0, Y.jsx)(Kt, {
            widgetId: e.widgetId,
            widgetState: n,
            toolInput: r,
            toolOutput: i,
            toolResponseMetadata: a,
            children: o
        }), t[4] = e.widgetId, t[5] = n, t[6] = r, t[7] = i, t[8] = a, t[9] = o, t[10] = s) : s = t[10], s
    }
}));
export {
    rt as a, bt as i, pn as n, ct as o, yt as r, it as s, Q as t
};
//# sourceMappingURL=1c86a5ac-lb07v6ixov4iwl90.js.map