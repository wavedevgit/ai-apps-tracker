const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/df9194ad-jg4b1t8qkru14sia.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-r54yv6lv29x4ew99.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-k5uqyx4vyplt9toa.js", "assets/a05edf66-j07as4x5yh0qill9.js", "assets/conversation-small-dwpaie1hln28efxb.js", "assets/c470f5ab-bhx5jraq636jc4ww.js", "assets/0e5afe53-d830ix843j2kh0p0.js", "assets/conversation-small-gfjfeahf.css", "assets/8742b478-ab88u030bzjzp7pc.js", "assets/8d505c06-djmtuxc41t9diitx.js", "assets/3e574439-khpdmddbc4jenjfl.js", "assets/c2675c8c-jg3tpj8mw86wdc0g.js", "assets/82782bc9-loong612qtaq7sd9.js", "assets/8b34dbc2-bgocf3s6t6l67twq.js", "assets/global-modals-dxg9ukpk.css", "assets/25a66342-jphxkuox75vuywjp.js", "assets/2ea88c7a-lxyla91xs6iv7odf.js", "assets/25a66342-j7cd8h2bqav7weve.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    A1 as r,
    A2 as i,
    A8 as a,
    Ait as o,
    Ast as s,
    Aw as c,
    CN as l,
    CR as u,
    Cnt as d,
    Ent as f,
    Fz as p,
    I1 as m,
    I5 as h,
    Int as g,
    Iz as _,
    J5 as v,
    L5 as ee,
    Lnt as y,
    Mtt as b,
    N1 as x,
    Nnt as S,
    Ow as C,
    Pnt as w,
    R8 as T,
    Y7 as E,
    a2 as D,
    c2 as O,
    cst as k,
    d2 as A,
    dE as te,
    est as ne,
    grt as re,
    hnt as ie,
    iq as j,
    j2 as ae,
    jR as oe,
    jnt as se,
    jst as ce,
    jtt as le,
    kit as ue,
    knt as M,
    l7 as N,
    lE as de,
    mnt as fe,
    o2 as pe,
    prt as me,
    q1 as he,
    rq as ge,
    sq as _e,
    sst as P,
    u7 as ve,
    urt as ye,
    wN as F,
    znt as I
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as be,
    N as xe,
    O as Se,
    Vn as L,
    cn as Ce,
    ln as we,
    p as Te,
    s as Ee,
    wn as De
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    NWt as Oe,
    awn as R,
    dMn as z,
    g0t as ke,
    h0t as Ae,
    iwn as je,
    m6 as Me,
    nMn as B,
    p6 as V,
    rMn as Ne
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Fc as Pe,
    Gx as Fe,
    Pc as Ie,
    Wx as Le
} from "./30901919-k5uqyx4vyplt9toa.js";
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
} from "./84983163-fboejrzgfqy6dksy.js";
import {
    n as We,
    o as Ge,
    r as H
} from "./7517017f-ofl0myfxrmds1xf2.js";
import {
    a as Ke,
    r as qe
} from "./6601bf01-f5ybzgu81ekgtxe5.js";
import {
    i as Je,
    n as Ye,
    t as Xe
} from "./d86ca127-eio6f5phxjnm8h3i.js";

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
        return (await E.safePost(`/ecosystem/url_safe`, {
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
        b(), O(), ct(), dt(), I(), n(), fe(), pe(), we(), mt = D(() => Ce(() => import(`./df9194ad-jg4b1t8qkru14sia.js`).then(e => e.ConfirmExternalLinkModal), __vite__mapDeps([0, 1, 2, 3, 4, 5]))), ht = D(() => Ce(() => import(`./a05edf66-j07as4x5yh0qill9.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([6, 1, 2, 3, 4, 7, 5, 8, 9, 10, 11]))), gt = 600, _t = 750, vt = (e, t, n = `tab`) => {
            let r = lt(e, t);
            if (w()) A(mt, {
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
            let m = a === le.OPENAI && s === `popup` ? `popup` : `tab`;
            if (y.logEvent(`link_action`, {
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
            if (a === le.OPENAI && await pt(e, t)) {
                vt(e, null, m);
                return
            }
            A(ht, {
                urls: e,
                displayUrls: e
            })
        }
    })),
    xt, St, Ct = e((() => {
        a(), ge(), fe(), xt = () => {
            let e = `unknown`;
            return S() ? e = `mobile` : M() ? e = `tablet` : f() && (e = `desktop`), e
        }, St = e => {
            let t = xt(),
                n = `web`;
            e === `skybridge` && (n = `native`);
            let r = `unknown`;
            return d() ? r = `ios` : ie() ? r = `android` : g() ? r = `windows` : se() && (r = `macos`), {
                device: {
                    type: t,
                    platform: n,
                    os: r
                },
                capabilities: {
                    hover: h(j),
                    touch: h(_e)
                }
            }
        }
    })),
    wt, Tt, Et = e((() => {
        pe(), we(), wt = D(() => Ce(() => import(`./8d505c06-djmtuxc41t9diitx.js`).then(e => e.AutofillConsentDialogContent), __vite__mapDeps([12, 1, 2, 3, 4, 7, 5, 8, 9, 10]))), Tt = D(() => Ce(() => import(`./8d505c06-djmtuxc41t9diitx.js`).then(e => e.AutofillConsentSheetContent), __vite__mapDeps([12, 1, 2, 3, 4, 7, 5, 8, 9, 10])))
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
            locale: d
        } = e,
        f = n === void 0 ? `chatgpt` : n,
        m = i !== void 0 && i,
        [h] = (0, jt.useState)(Ot),
        g;
    t[0] === h ? g = t[1] : (g = async (e, ...t) => {
        let n = t;
        return await ee(() => !!h()), k(h()?.[e], `Method ${String(e)} not found`)(...n)
    }, t[0] = h, t[1] = g);
    let _ = F(g),
        v, y;
    t[2] === _ ? (v = t[3], y = t[4]) : (v = () => new Proxy({}, {
        get: (e, t) => (...e) => _(t, ...e)
    }), y = [_], t[2] = _, t[3] = v, t[4] = y), (0, jt.useImperativeHandle)(s, v, y);
    let b = (0, jt.useRef)(u),
        x, S;
    t[5] === u ? (x = t[6], S = t[7]) : (x = () => {
        b.current = u
    }, S = [u], t[5] = u, t[6] = x, t[7] = S), (0, jt.useEffect)(x, S);
    let C;
    t[8] === h ? C = t[9] : (C = e => e ? (Ue(e, new Proxy(b.current, {
        get: (e, t) => b.current[t]
    }), [`runUserCode`, `runWidgetCode`, `runComponent`]).then(e => {
        h.set(e)
    }), () => {
        h.set(null)
    }) : h.set(null), t[8] = h, t[9] = C);
    let w = F(C),
        T;
    t[10] === c ? T = t[11] : (T = Pt(c), t[10] = c, t[11] = T);
    let E = T,
        D = `sandbox-${E}`,
        O;
    t[12] !== f || t[13] !== d ? (O = Nt(f, d, Mt), t[12] = f, t[13] = d, t[14] = O) : O = t[14];
    let A = `${E}${O}`,
        ne = te(w, l),
        re;
    t[15] === r ? re = t[16] : (re = r?.length ? G(r) : void 0, t[15] = r, t[16] = re);
    let ie = r?.includes(`fullscreen`) ? !0 : void 0,
        j;
    t[17] === o ? j = t[18] : (j = o ? {
        colorScheme: o
    } : void 0, t[17] = o, t[18] = j);
    let ae;
    return t[19] !== m || t[20] !== D || t[21] !== A || t[22] !== ne || t[23] !== re || t[24] !== ie || t[25] !== j || t[26] !== a ? (ae = (0, W.jsx)(p, {
        children: (0, W.jsx)(`iframe`, {
            title: a,
            inert: m,
            src: A,
            ref: ne,
            sandbox: `allow-scripts allow-same-origin allow-forms`,
            allow: re,
            allowFullScreen: ie,
            className: `h-full w-full max-w-full`,
            style: j
        }, D)
    }), t[19] = m, t[20] = D, t[21] = A, t[22] = ne, t[23] = re, t[24] = ie, t[25] = j, t[26] = a, t[27] = ae) : ae = t[27], ae
}

function Ot() {
    return T(null)
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
    At = De(), Ge(), He(), Ct(), a(), _(), P(), de(), l(), jt = t(L()), W = be(), Mt = !1, G = e => e.concat().sort().map(e => `${e} *`).join(`; `), Nt = (e, t, n) => `?` + [``, `app=${e}`, e === `chatgpt` ? `darkModeType=increased` : ``, `locale=${t}`, `deviceType=${St(e).device.type}`, n ? `unsafeSkipTargetOriginCheck=true` : ``].filter(Boolean).join(`&`), Pt = e => {
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
    Lt = De(), Ie(), Le(), c(), ve(), K = t(L()), q = be(), Rt = [`toolInput`, `toolOutput`, `toolResponseMetadata`, `widgetState`], zt = `text-xs uppercase tracking-wide text-token-text-tertiary`, Bt = `max-h-[70vh] overflow-auto whitespace-pre-wrap break-words rounded-md border border-token-border-light bg-token-main-surface-secondary p-3 font-mono text-xs leading-relaxed`, Vt = `pointer-events-none absolute inset-0 z-20 border border-token-text-primary`, Ht = e => Rt.find(t => e[t] != null) ?? `toolInput`, Ut = e => {
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
        t[0] === a ? o = t[1] : (o = N(`rounded-full px-3 py-1.5 text-xs font-medium transition-colors`, a), t[0] = a, t[1] = o);
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
        let [_, v] = (0, K.useState)(g), ee, y;
        t[7] === h ? (ee = t[8], y = t[9]) : (ee = () => {
            v(e => h[e] == null ? Ht(h) : e)
        }, y = [h], t[7] = h, t[8] = ee, t[9] = y), (0, K.useEffect)(ee, y);
        let b, x;
        t[10] === f ? (b = t[11], x = t[12]) : (b = () => {
            if (!f) return;
            let e = window.setTimeout(() => {
                p(!1)
            }, 2e3);
            return () => {
                window.clearTimeout(e)
            }
        }, x = [f], t[10] = f, t[11] = b, t[12] = x), (0, K.useEffect)(b, x);
        let S;
        t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, q.jsx)(`div`, {
            className: Vt
        }), t[13] = S) : S = t[13];
        let C;
        t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (C = N(`border-token-text-primary bg-token-bg-primary text-token-text-primary hover:bg-token-bg-secondary flex h-6 w-6 items-center justify-center border-s border-t border-b p-0 transition-colors`), t[14] = C) : C = t[14];
        let w;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, q.jsx)(`button`, {
            type: `button`,
            className: C,
            "aria-label": `Reload widget`,
            title: `Reload widget`,
            onClick: () => l(It),
            children: (0, q.jsx)(Fe, {
                className: `icon-sm`
            })
        }), t[15] = w) : w = t[15];
        let T;
        t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (T = N(`border-token-text-primary bg-token-bg-primary text-token-text-primary hover:bg-token-bg-secondary flex h-6 w-6 items-center justify-center border p-0 transition-colors`), t[16] = T) : T = t[16];
        let E;
        t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, q.jsxs)(`div`, {
            className: `absolute end-0 top-0 z-30 flex`,
            children: [w, (0, q.jsx)(`button`, {
                type: `button`,
                className: T,
                "aria-label": `Inspect widget data`,
                title: `Inspect widget data`,
                onClick: () => d(!0),
                children: (0, q.jsx)(Pe, {
                    className: `icon-sm`
                })
            })]
        }), t[17] = E) : E = t[17];
        let D;
        t[18] !== s || t[19] !== c ? (D = s(c), t[18] = s, t[19] = c, t[20] = D) : D = t[20];
        let O;
        t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (O = () => d(!1), t[21] = O) : O = t[21];
        let k;
        t[22] !== h || t[23] !== u || t[24] !== _ || t[25] !== n ? (k = (0, q.jsx)(Gt, {
            isOpen: u,
            widgetId: n,
            selectedPanel: _,
            values: h,
            onClose: O,
            onSelectPanel: v
        }), t[22] = h, t[23] = u, t[24] = _, t[25] = n, t[26] = k) : k = t[26];
        let A;
        return t[27] !== D || t[28] !== k ? (A = (0, q.jsxs)(`div`, {
            className: `relative h-full w-full max-w-full`,
            children: [S, E, D, k]
        }), t[27] = D, t[28] = k, t[29] = A) : A = t[29], A
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
    return Me()
}
var nn, J, Y, X, Z, rn, an, on, sn, cn, ln, un, dn, fn, Q, pn = e((() => {
    nn = De(), b(), Oe(), ke(), V(), Ct(), Et(), Ft(), qt(), Zt(), qe(), en(), Ye(), a(), he(), u(), o(), I(), R(), P(), re(), de(), l(), z(), Ee(), Ve(), i(), s(), J = t(L()), Y = be(), we(), X = e => Ce(() => import(`./3e574439-khpdmddbc4jenjfl.js`).then(e => (e.n(), e.l)).then(e), __vite__mapDeps([13, 1, 2, 3, 4, 7, 5, 8, 9, 10, 14, 15, 16, 17, 18, 19, 20])), Z = e => typeof e == `object` && !!e, rn = e => {
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
    }, on = e => Object.values(me(`3726720227`).value).some(t => typeof t == `string` && an(t) === e), sn = e => {
        if (!e) return null;
        try {
            return ce(e).sub ?? null
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
        accountId: n,
        ref: i,
        iframeRef: a,
        html: o,
        measureWidth: s,
        expectReadySignal: c,
        expectedReadySignal: l,
        features: u,
        permissions: d,
        safeArea: f = dn,
        attributionId: p,
        appDisplayName: h,
        conversationId: g,
        appPackageName: _,
        supportsOAuthCompletion: ee,
        supportsSourceCitationLinks: b,
        widgetId: S,
        widgetSessionId: C,
        widgetParent: w,
        widgetDistributionChannel: T,
        allowPrivilegedActions: E = !0,
        suggestionMessageId: D,
        widgetType: O,
        csp: A,
        subdomain: re,
        viewParams: ie,
        widgetState: j = null,
        deepLink: se,
        toolInput: ce = null,
        toolOutput: M = null,
        toolResponseMetadata: N = null,
        toolInfo: de = null,
        subjectId: fe = null,
        isTombstone: pe = !1,
        maxHeight: me,
        maxWidth: he,
        containerHeight: ge,
        containerWidth: _e,
        theme: P,
        title: ve,
        api: I,
        locale: be,
        displayMode: L = `inline`,
        availableDisplayModes: Ce,
        isSidebarOpen: we,
        onReady: Ee,
        onError: De,
        frameComponent: Oe
    }) => {
        "use no forget";
        let R = (0, J.useMemo)(() => ({
                attribution_id: p ?? w ?? ``,
                name: O,
                conversation_id: g ?? null,
                message_id: S || null,
                suggestion_message_id: D ?? null,
                distribution_channel: T,
                host: e
            }), [e, T, p, w, O, g, S, D]),
            [z, ke] = (0, J.useState)(null),
            Me = te(ke, i),
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
            } = ne() ?? {},
            Ze = H ? ue(Ye) : null,
            Qe = H ? sn(Ye) : null,
            U = an(p ?? w),
            $e = E && (H || qe != null) && U != null && on(U),
            et = $e && ye(`1850361504`),
            tt = v(() => et ? H ? n == null ? null : m(r().data, n) : x() : null),
            nt = tt?.normalizedAccountUserId,
            rt = H ? `${n??``}:${Qe??``}` : nt ?? qe?.id,
            it = n === tt?.id && Qe != null && (Ze == null || Ze === n),
            at = et && tt != null && nt != null && (!H || it),
            {
                data: ot,
                isLoading: st
            } = Se({
                ...oe,
                queryKey: H ? [...oe.queryKey, `skybridge`, n ?? ``, Qe ?? ``] : oe.queryKey,
                enabled: H && $e
            }),
            ct = Se({
                ...Je(nt),
                enabled: at
            }),
            lt = xe(),
            ut = Te({
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
            ht = Le != null && Le.appId === U && Le.accountIdentity === rt && Le.frame === z && Le.html === o && Le.widgetId === S && Ve.some(e => !!mt[e.fieldType]),
            gt = H && st || at && ct.isLoading,
            _t = He && ht && !gt,
            vt = _t && dt && !ut.isPending,
            yt = h ?? ve ?? O ?? U ?? ``,
            bt = $e && _t && !dt && pt != null,
            xt = F(t => {
                U != null && y.logStructuredEvent(`ChatgptAppAutofillEvent`, {
                    action: t,
                    appId: U,
                    surface: e === `skybridge` ? Ne.CHATGPT_APP_AUTOFILL_SURFACE_SKYBRIDGE : Ne.CHATGPT_APP_AUTOFILL_SURFACE_WEB,
                    alwaysAllowAvailable: at
                })
            }),
            Ct = F(e => {
                X(({
                    trackAutofillConsent: t
                }) => t(R, e, U, Ve))
            });
        (0, J.useEffect)(() => {
            if (!bt || !V || Ue.get(V)?.has(S)) return;
            let e = Ue.get(V) ?? new Set;
            e.add(S), Ue.set(V, e), Ct(`shown`), xt(B.CHATGPT_APP_AUTOFILL_ACTION_CONSENT_SHOWN)
        }, [Ue, bt, xt, V, Ct, S]);
        let Et = F((e = B.CHATGPT_APP_AUTOFILL_ACTION_ALLOW_ONCE) => {
                if (He) {
                    e !== B.CHATGPT_APP_AUTOFILL_ACTION_AUTO_APPLIED && Ct(`accepted`);
                    for (let e of Ve) {
                        let t = mt[e.fieldType];
                        t && z?.applyAutofillCandidate({
                            id: e.id,
                            value: t
                        })
                    }
                    Ie(null), xt(e)
                }
            }),
            Dt = F(e => V?.isCurrent() === !0 && e.appId === U && e.accountUserId === nt && e.frame === z && e.html === o && e.widgetId === S && e.candidates === Ve && He),
            Ot = F(async () => {
                if (!U || !nt) return;
                let e = {
                    appId: U,
                    accountUserId: nt,
                    frame: z,
                    html: o,
                    widgetId: S,
                    candidates: Ve
                };
                Ge(!1);
                try {
                    await ut.mutateAsync({
                        app_uri: U,
                        provider_name: yt,
                        accountUserId: nt
                    }), Dt(e) && Et(B.CHATGPT_APP_AUTOFILL_ACTION_ALWAYS_ALLOW)
                } catch {
                    Dt(e) && (Ge(!0), xt(B.CHATGPT_APP_AUTOFILL_ACTION_GRANT_SAVE_FAILED))
                }
            }),
            At = F(() => {
                He && Ct(`declined`), Ie(null), xt(B.CHATGPT_APP_AUTOFILL_ACTION_DENIED)
            }),
            jt = F(() => {
                He && Ct(`declined`), Ie(null), xt(B.CHATGPT_APP_AUTOFILL_ACTION_DISMISSED)
            });
        (0, J.useEffect)(() => {
            vt && Et(B.CHATGPT_APP_AUTOFILL_ACTION_AUTO_APPLIED)
        }, [Et, vt]);
        let W = L === `fullscreen` ? `fullscreen` : L === `pip` ? `pip` : `inline`,
            Mt = (0, J.useMemo)(() => $t(u, d), [u, d]),
            G = (0, J.useMemo)(() => St(e), [e]),
            Nt = G.device.type === `mobile` || G.device.type === `tablet` ? `mobile` : G.device.type === `desktop` ? `desktop` : `web`,
            Pt = (0, J.useMemo)(() => {
                let e = {};
                return W === `fullscreen` ? typeof window < `u` && (e.width = window.innerWidth, e.height = window.innerHeight) : (ge == null ? me != null && (e.maxHeight = me) : e.height = ge, _e == null ? he != null && (e.maxWidth = he) : e.width = _e), Object.keys(e).length > 0 ? e : void 0
            }, [W, ge, _e, me, he]),
            Ft = (0, J.useMemo)(() => {
                if (!(typeof Intl > `u`)) return Intl.DateTimeFormat().resolvedOptions().timeZone
            }, []),
            It = E ? t?.hostContext[`openai/modelContext`] : void 0,
            Lt = E ? t?.hostContext[`openai/chat`] : void 0,
            K = b === !0 && E && T === le.OPENAI,
            q = (0, J.useMemo)(() => {
                let t = e === `skybridge` ? (Ce ?? [`inline`, `fullscreen`]).filter(e => e === `inline` || e === `fullscreen`) : [`inline`, `fullscreen`, `pip`];
                (e !== `skybridge` || W !== `pip`) && !t.includes(W) && t.push(W);
                let n = {
                    theme: P,
                    displayMode: W,
                    availableDisplayModes: t,
                    containerDimensions: Pt,
                    locale: be,
                    safeAreaInsets: f.insets,
                    userAgent: `chatgpt`,
                    platform: Nt,
                    deviceCapabilities: {
                        touch: G.capabilities.touch,
                        hover: G.capabilities.hover
                    }
                };
                return de && (n.toolInfo = de), Ft && (n.timeZone = Ft), se !== void 0 && (n[`openai/deepLink`] = se), It !== void 0 && (n[`openai/modelContext`] = It), Lt !== void 0 && (n[`openai/chat`] = Lt), K && (n[`openai/sourceCitationLinks`] = !0), n
            }, [Lt, Pt, se, be, W, It, e, Ce, Nt, f.insets, K, P, Ft, de, G.capabilities.hover, G.capabilities.touch]),
            Rt = (0, J.useMemo)(() => {
                if (!u || u.length === 0) return;
                let e = {},
                    t = new Set(u);
                return t.has(`camera`) && (e.camera = {}), t.has(`microphone`) && (e.microphone = {}), t.has(`geolocation`) && (e.geolocation = {}), t.has(`clipboard-write`) && (e.clipboardWrite = {}), Object.keys(e).length > 0 ? e : void 0
            }, [u]),
            zt = (0, J.useMemo)(() => {
                if (!A) return;
                let e = {};
                return A.connectDomains && A.connectDomains.length > 0 && (e.connectDomains = A.connectDomains), A.resourceDomains && A.resourceDomains.length > 0 && (e.resourceDomains = A.resourceDomains), A.frameDomains && A.frameDomains.length > 0 && (e.frameDomains = A.frameDomains), Object.keys(e).length > 0 ? e : void 0
            }, [A]),
            Bt = (0, J.useMemo)(() => {
                let e = {
                    openLinks: {},
                    logging: {},
                    ...E ? {
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
            }, [E, t?.forwardedRequestMethods, t?.hostCapabilities, zt, Rt]),
            [Vt] = (0, J.useState)(() => new Map),
            Ht = F(() => {
                let e = Vt.get(P);
                return e || (e = Yt(P), e && Vt.set(P, e)), e ? {
                    ...q,
                    styles: e
                } : q
            }),
            Ut = F(() => {
                De?.()
            }),
            Wt = F(e => {
                X(({
                    trackFatalWidgetError: t
                }) => t(R, e)), Ut()
            }),
            Gt = F(() => {
                Ee?.()
            }),
            Kt = F(() => {
                let e = R,
                    t = L,
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
            qt = F(async (e, n, r, i) => {
                Pe(null), Ie([]), Be(null), Ge(!1);
                let a = e.runWidgetCode({
                        html: n,
                        measureWidth: s,
                        expectReadySignal: c,
                        expectedReadySignal: l,
                        isFirstParty: E && T === le.OPENAI,
                        widgetId: S,
                        ...$e ? {
                            enableAutofill: !0
                        } : {},
                        viewParams: un({
                            displayMode: L,
                            viewParams: ie,
                            toolOutput: M ?? null
                        }),
                        widgetState: j,
                        toolInput: ce,
                        toolOutput: M,
                        toolResponseMetadata: N,
                        subjectId: fe,
                        appPackageName: _,
                        supportsOAuthCompletion: ee,
                        supportsSourceCitationLinks: K,
                        isTombstone: pe,
                        features: Mt,
                        maxHeight: me ?? void 0,
                        maxWidth: he ?? void 0,
                        theme: P,
                        displayMode: L,
                        isSidebarOpen: we ?? !1,
                        safeArea: f,
                        userAgent: G,
                        csp: A,
                        mcpApps: {
                            forwardedRequestMethods: E ? t?.forwardedRequestMethods : void 0,
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
                    }) => e(R, t.error)), o = t.error) : t.type === ze.RUN_COMPLETE && t.wasFatalError && (i(`error`), Wt(o))
                }
            }),
            Jt = c === !0,
            Xt = l ?? null;
        (0, J.useEffect)(() => {
            if (!z || !o) return;
            let e = !0,
                t = Kt();
            return qt(z, o, () => e, t).catch(() => {
                e && (t(`error`), Wt(null))
            }), () => {
                e = !1, t(`aborted`)
            }
        }, [Jt, z, o, Xt, Wt, qt, Kt]);
        let Zt = (0, J.useMemo)(() => ln(N, M), [N, M]),
            Qt = cn(N),
            en = {
                widgetId: S,
                widgetState: j,
                toolInput: ce,
                toolOutput: M,
                toolResponseMetadata: N,
                subjectId: fe
            },
            [tn, nn] = (0, J.useState)(en),
            [Z, fn] = (0, J.useState)(null),
            [Q, pn] = (0, J.useState)(null);
        ae(tn, en) || nn(en);
        let $ = V?.frame === z && V.html === o && V.expectsReadySignal === Jt && V.expectedReadySignal === Xt && V.isCurrent() ? V : null;
        $ && ce && (Z?.widget !== $ || Z.widgetId !== S || !ae(Z.input, ce)) && fn({
            widget: $,
            widgetId: S,
            input: ce
        }), $ && Zt && (Q?.widget !== $ || Q.widgetId !== S || !ae(Q.result, Zt)) && pn({
            widget: $,
            widgetId: S,
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
        }, [$, Qt, S]), (0, J.useEffect)(() => {
            $ && $.frame.notifyMcpAppsHostContext({
                hostContext: Ht()
            })
        }, [$, Ht, q]), (0, J.useEffect)(() => {
            if (z) return () => {
                z.requestMcpAppsResourceTeardown({
                    timeoutMs: 500
                })
            }
        }, [z]), (0, J.useEffect)(() => {
            $ && $.frame.setWidgetView({
                widgetId: S,
                displayMode: L,
                viewParams: un({
                    displayMode: L,
                    viewParams: ie,
                    toolOutput: M ?? null
                }),
                isTombstone: pe
            })
        }, [$, S, L, ie, M, pe]), (0, J.useEffect)(() => {
            $ && $.frame.setAdditionalGlobals({
                additionalGlobals: {
                    isSidebarOpen: we ?? !1
                }
            })
        }, [$, we]), (0, J.useEffect)(() => {
            $ && $.frame.setAdditionalGlobals({
                additionalGlobals: {
                    maxHeight: me,
                    maxWidth: he
                }
            })
        }, [$, me, he]), (0, J.useEffect)(() => {
            $ && $.frame.setTheme({
                theme: P
            })
        }, [$, P]), (0, J.useEffect)(() => {
            $ && $.frame.setSafeArea({
                safeArea: f
            })
        }, [$, f]);
        let mn = e === `skybridge` || ye(`1610966033`),
            hn = F(e => k(I.callMcp)(e)),
            gn = I.scanCard ? JSON.stringify([`card-scan`, rt, S, C ?? null, o, Jt, Xt]) : `default`,
            _n = (0, J.useMemo)(() => ({
                frameKey: gn
            }), [gn]),
            vn = F(() => ({
                owner: _n,
                readyWidget: $,
                scanCard: I.scanCard
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
            bn = E ? I.openPlaidLink ?? (e === `chatgpt` && T === le.OPENAI && w === `connectors://connector_693864f100e4819093e6ed9b651239f1` ? Ke : void 0) : void 0;
        return (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsx)(kt, {
                frameComponent: Oe,
                title: ve,
                host: e,
                colorScheme: P,
                subdomain: re,
                features: Mt,
                api: {
                    ...I,
                    callMcp: I.callMcp ? hn : void 0,
                    scanCard: I.scanCard ? yn : void 0,
                    notifyIntrinsicHeight: e => I.notifyIntrinsicHeight?.(e),
                    updateWidgetState: I.updateWidgetState ? (e, t, n) => I.updateWidgetState?.(S, t, mn ? n : void 0) : void 0,
                    openPlaidLink: bn,
                    downloadBlob: E && T === le.OPENAI ? ({
                        blob: e,
                        name: t
                    }) => {
                        je(e, t)
                    } : void 0,
                    notifyAutofillCandidates: $e ? e => {
                        He && (Be({
                            appId: U,
                            accountIdentity: rt,
                            frame: z,
                            html: o,
                            widgetId: S
                        }), Ie(e))
                    } : void 0,
                    notifyNavigation: e => {
                        X(({
                            trackWidgetNavigation: t
                        }) => t(R, e)), I.notifyNavigation?.(e)
                    },
                    requestCheckout: I.requestCheckout ? e => (X(({
                        trackWidgetCheckoutSession: e
                    }) => e(R)), I.requestCheckout?.(e)) : void 0,
                    requestDisplayMode: e => {
                        let {
                            mode: t
                        } = e;
                        return t !== L && X(({
                            trackWidgetDisplayMode: e
                        }) => e(R, t)), I.requestDisplayMode?.(e) ?? {
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
                        }) => e(R)), await I.openExternal?.(e)
                    },
                    sendInstrument: e => {
                        X(({
                            trackSandboxInstrument: t
                        }) => t(e, R))
                    },
                    notifySecurityPolicyViolation: e => {
                        X(({
                            trackSecurityPolicyViolation: t
                        }) => t({
                            ...R,
                            violation: e
                        }))
                    }
                },
                iframeRef: a,
                ref: Me,
                locale: be
            }, gn), bt && pt && (e === `skybridge` ? (0, Y.jsx)(Tt, {
                appName: yt,
                user: pt,
                onAllow: () => Et(),
                onAlwaysAllow: at ? Ot : void 0,
                isSavingGrant: ut.isPending,
                hasGrantError: We,
                onDecline: At,
                onDismiss: jt
            }) : (0, Y.jsx)(Ae, {
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
        if (!v(tn)) {
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
//# sourceMappingURL=1c86a5ac-j9hjzv3z5lyqbsda.js.map