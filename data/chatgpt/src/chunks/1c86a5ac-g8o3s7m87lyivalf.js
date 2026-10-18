const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/df9194ad-d69uxlsvnnb8d3b1.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/a05edf66-hhqkq5ff44o43iar.js", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/8742b478-ja0nh126im8iybw2.js", "assets/8d505c06-nvh7xb7ts16pal5r.js", "assets/3e574439-jdddxju5mbw4uiqr.js", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css", "assets/25a66342-dd6xm32a19d6mzzc.js", "assets/2ea88c7a-lxyla91xs6iv7odf.js", "assets/25a66342-j7cd8h2bqav7weve.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $$ as n,
    $M as r,
    B6 as i,
    Btt as a,
    C0 as o,
    Ett as s,
    Htt as c,
    Itt as l,
    J$ as u,
    J0 as d,
    J6 as f,
    K8 as p,
    LK as m,
    Ltt as h,
    Mrt as g,
    Mtt as _,
    NK as v,
    Not as y,
    Nrt as b,
    O0 as x,
    PK as S,
    Pot as C,
    Ptt as w,
    QL as T,
    Ret as E,
    S0 as D,
    T0 as O,
    VT as ee,
    X$ as k,
    _tt as A,
    a7 as te,
    b5 as j,
    cz as ne,
    dot as re,
    eN as M,
    gnt as N,
    i5 as ie,
    iw as ae,
    ktt as oe,
    l7 as se,
    lz as ce,
    oR as le,
    ow as ue,
    pnt as de,
    q0 as fe,
    q8 as pe,
    rot as me,
    u1 as he,
    uot as ge,
    vtt as _e,
    y5 as P,
    ynt as ve,
    zT as F,
    zet as ye,
    ztt as I
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as be,
    N as xe,
    O as Se,
    Vn as Ce,
    cn as we,
    ln as Te,
    p as Ee,
    s as De,
    wn as L
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    NWt as R,
    a0t as Oe,
    a6 as ke,
    cCn as Ae,
    hjn as je,
    lCn as z,
    o0t as Me,
    o6 as Ne,
    ojn as Pe,
    sjn as Fe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Ic as Ie,
    Kx as Le,
    Lc as Re,
    qx as ze
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    n as Be,
    r as Ve
} from "./2ea88c7a-lxyla91xs6iv7odf.js";
import {
    n as B,
    t as He
} from "./8d846022-bvik3sltoydb2o43.js";
import {
    n as Ue,
    t as We
} from "./84983163-orsf8gtwr7u5m8c9.js";
import {
    n as V,
    o as Ge,
    r as Ke
} from "./7517017f-jp4wwufska9j7a9v.js";
import {
    a as qe,
    r as Je
} from "./6601bf01-l2hvb3ulv1nxkphc.js";
import {
    i as Ye,
    n as Xe,
    t as Ze
} from "./d86ca127-egzeslkv8nixb7zu.js";

function H(e) {
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

function $e(e) {
    return e.toLowerCase().replace(/\.$/, ``)
}

function et(e, t) {
    let n = $e(e),
        r = $e(t);
    return n === r || n.endsWith(`.` + r)
}

function U(e, t, n) {
    return n ? et(e, t) : $e(e) === $e(t)
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
    let t = H(e ?? void 0);
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
    let n = H(e);
    if (!n) return !1;
    let r = n.url;
    return r.username || r.password || !t?.length ? !1 : t.some(e => {
        let t = Qe(e);
        if (!t) return !1;
        if (t.kind === `scheme`) return r.protocol === t.scheme;
        if (t.scheme) return !(r.protocol !== t.scheme || !U(r.hostname, t.host, t.wildcard) || !tt(r, t));
        {
            let e = t.host;
            return !!et(r.hostname, e)
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
        return (await te.safePost(`/ecosystem/url_safe`, {
            requestBody: {
                url: e,
                resolved_pineapple_uri: t
            }
        })).safe
    } catch {
        return !1
    }
}
var mt, ht, gt, _t, vt, W, yt = e((() => {
        ye(), O(), ct(), dt(), c(), se(), A(), o(), Te(), mt = D(() => we(() => import(`./df9194ad-d69uxlsvnnb8d3b1.js`).then(e => e.ConfirmExternalLinkModal), __vite__mapDeps([0, 1, 2, 3, 4, 5]))), ht = D(() => we(() => import(`./a05edf66-hhqkq5ff44o43iar.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([6, 1, 2, 3, 4, 7, 5, 8, 9, 10, 11]))), gt = 600, _t = 750, vt = (e, t, n = `tab`) => {
            let r = lt(e, t);
            if (h()) x(mt, {
                url: r
            });
            else {
                let e = n === `popup` ? ft() : `noopener,noreferrer`;
                window.open(r, `_blank`, e);
                return
            }
        }, W = async ({
            href: e,
            resolvedPineappleUri: t,
            csp: n,
            redirectDomains: r,
            domain: i,
            distributionChannel: o,
            redirectUrl: s,
            openMode: c,
            attributionId: l,
            conversationId: u,
            messageId: d,
            sectionLocation: f,
            widgetName: p,
            widgetSessionId: m
        }) => {
            if (!e) {
                console.error(`No href provided to handleExternalLink`);
                return
            }
            let h = o === E.OPENAI && c === `popup` ? `popup` : `tab`;
            if (a.logEvent(`link_action`, {
                    action: `click`,
                    action_type: `open_external`,
                    attribution_id: l,
                    conversation_id: u,
                    link_type: `widget`,
                    message_id: d,
                    section_location: f,
                    url: e,
                    domain: i,
                    distribution_channel: o,
                    open_mode: h,
                    widget_name: p,
                    widget_session_id: m
                }), it(e, n, i) || at(e, r)) {
                vt(e, s, h);
                return
            }
            if (o === E.OPENAI && await pt(e, t)) {
                vt(e, null, h);
                return
            }
            x(ht, {
                urls: e,
                displayUrls: e
            })
        }
    })),
    bt, xt, St = e((() => {
        i(), v(), A(), bt = () => {
            let e = `unknown`;
            return l() ? e = `mobile` : _() ? e = `tablet` : oe() && (e = `desktop`), e
        }, xt = e => {
            let t = bt(),
                n = `web`;
            e === `skybridge` && (n = `native`);
            let r = `unknown`;
            return s() ? r = `ios` : _e() ? r = `android` : I() ? r = `windows` : w() && (r = `macos`), {
                device: {
                    type: t,
                    platform: n,
                    os: r
                },
                capabilities: {
                    hover: p(S),
                    touch: p(m)
                }
            }
        }
    })),
    Ct, wt, Tt = e((() => {
        o(), Te(), Ct = D(() => we(() => import(`./8d505c06-nvh7xb7ts16pal5r.js`).then(e => e.AutofillConsentDialogContent), __vite__mapDeps([12, 1, 2, 3, 4, 7, 5, 8, 9, 10]))), wt = D(() => we(() => import(`./8d505c06-nvh7xb7ts16pal5r.js`).then(e => e.AutofillConsentSheetContent), __vite__mapDeps([12, 1, 2, 3, 4, 7, 5, 8, 9, 10])))
    }));

function Et(e) {
    "use forget";
    let t = (0, G.c)(28),
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
        p = i !== void 0 && i,
        [m] = (0, kt.useState)(Dt),
        h;
    t[0] === m ? h = t[1] : (h = async (e, ...t) => {
        let n = t;
        return await pe(() => !!m()), re(m()?.[e], `Method ${String(e)} not found`)(...n)
    }, t[0] = m, t[1] = h);
    let g = M(h),
        _, v;
    t[2] === g ? (_ = t[3], v = t[4]) : (_ = () => new Proxy({}, {
        get: (e, t) => (...e) => g(t, ...e)
    }), v = [g], t[2] = g, t[3] = _, t[4] = v), (0, kt.useImperativeHandle)(s, _, v);
    let y = (0, kt.useRef)(u),
        b, x;
    t[5] === u ? (b = t[6], x = t[7]) : (b = () => {
        y.current = u
    }, x = [u], t[5] = u, t[6] = b, t[7] = x), (0, kt.useEffect)(b, x);
    let S;
    t[8] === m ? S = t[9] : (S = e => e ? (We(e, new Proxy(y.current, {
        get: (e, t) => y.current[t]
    }), [`runUserCode`, `runWidgetCode`, `runComponent`]).then(e => {
        m.set(e)
    }), () => {
        m.set(null)
    }) : m.set(null), t[8] = m, t[9] = S);
    let C = M(S),
        w;
    t[10] === c ? w = t[11] : (w = Nt(c), t[10] = c, t[11] = w);
    let T = w,
        E = `sandbox-${T}`,
        D;
    t[12] !== f || t[13] !== d ? (D = Mt(f, d, At), t[12] = f, t[13] = d, t[14] = D) : D = t[14];
    let O = `${T}${D}`,
        k = ee(C, l),
        A;
    t[15] === r ? A = t[16] : (A = r?.length ? jt(r) : void 0, t[15] = r, t[16] = A);
    let te = r?.includes(`fullscreen`) ? !0 : void 0,
        j;
    t[17] === o ? j = t[18] : (j = o ? {
        colorScheme: o
    } : void 0, t[17] = o, t[18] = j);
    let N;
    return t[19] !== p || t[20] !== E || t[21] !== O || t[22] !== k || t[23] !== A || t[24] !== te || t[25] !== j || t[26] !== a ? (N = (0, K.jsx)(ne, {
        children: (0, K.jsx)(`iframe`, {
            title: a,
            inert: p,
            src: O,
            ref: k,
            sandbox: `allow-scripts allow-same-origin allow-forms`,
            allow: A,
            allowFullScreen: te,
            className: `h-full w-full max-w-full`,
            style: j
        }, E)
    }), t[19] = p, t[20] = E, t[21] = O, t[22] = k, t[23] = A, t[24] = te, t[25] = j, t[26] = a, t[27] = N) : N = t[27], N
}

function Dt() {
    return f(null)
}

function Ot(e) {
    "use forget";
    let t = (0, G.c)(8),
        n, r;
    if (t[0] === e ? (n = t[1], r = t[2]) : ({
            frameComponent: n,
            ...r
        } = e, t[0] = e, t[1] = n, t[2] = r), n) {
        let e;
        return t[3] !== n || t[4] !== r ? (e = (0, K.jsx)(n, {
            ...r
        }), t[3] = n, t[4] = r, t[5] = e) : e = t[5], e
    }
    let i;
    return t[6] === r ? i = t[7] : (i = (0, K.jsx)(Et, {
        ...r
    }), t[6] = r, t[7] = i), i
}
var G, kt, K, At, jt, Mt, Nt, Pt = e((() => {
    G = L(), Ge(), Ue(), St(), i(), ce(), ge(), F(), r(), kt = t(Ce()), K = be(), At = !1, jt = e => e.concat().sort().map(e => `${e} *`).join(`; `), Mt = (e, t, n) => `?` + [``, `app=${e}`, e === `chatgpt` ? `darkModeType=increased` : ``, `locale=${t}`, `deviceType=${xt(e).device.type}`, n ? `unsafeSkipTargetOriginCheck=true` : ``].filter(Boolean).join(`&`), Nt = e => {
        if (e) {
            let t = new URL(V);
            return t.hostname = `${e}.${t.hostname}`, t.protocol = Ke, t.origin
        }
        return V
    }
}));

function Ft(e) {
    return e + 1
}
var It, q, J, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt = e((() => {
    It = L(), Ie(), Le(), ue(), j(), q = t(Ce()), J = be(), Lt = [`toolInput`, `toolOutput`, `toolResponseMetadata`, `widgetState`], Rt = `text-xs uppercase tracking-wide text-token-text-tertiary`, zt = `max-h-[70vh] overflow-auto whitespace-pre-wrap break-words rounded-md border border-token-border-light bg-token-main-surface-secondary p-3 font-mono text-xs leading-relaxed`, Bt = `pointer-events-none absolute inset-0 z-20 border border-token-text-primary`, Vt = e => Lt.find(t => e[t] != null) ?? `toolInput`, Ht = e => {
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
    }, Ut = e => {
        "use forget";
        let t = (0, It.c)(6),
            {
                isActive: n,
                label: r,
                onClick: i
            } = e,
            a = n ? `bg-token-text-primary text-token-bg-primary` : `bg-token-main-surface-secondary text-token-text-secondary hover:bg-token-bg-secondary`,
            o;
        t[0] === a ? o = t[1] : (o = P(`rounded-full px-3 py-1.5 text-xs font-medium transition-colors`, a), t[0] = a, t[1] = o);
        let s;
        return t[2] !== r || t[3] !== i || t[4] !== o ? (s = (0, J.jsx)(`button`, {
            type: `button`,
            className: o,
            onClick: i,
            children: r
        }), t[2] = r, t[3] = i, t[4] = o, t[5] = s) : s = t[5], s
    }, Wt = e => {
        "use forget";
        let t = (0, It.c)(22),
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
        t[0] === c ? l = t[1] : (l = Ht(c), t[0] = c, t[1] = l);
        let u = l,
            d = `Widget ID: ${r}`,
            f;
        t[2] !== s || t[3] !== i ? (f = Lt.map(e => (0, J.jsx)(Ut, {
            isActive: e === i,
            label: e,
            onClick: () => s(e)
        }, e)), t[2] = s, t[3] = i, t[4] = f) : f = t[4];
        let p;
        t[5] === f ? p = t[6] : (p = (0, J.jsx)(`div`, {
            className: `flex flex-wrap gap-2`,
            children: f
        }), t[5] = f, t[6] = p);
        let m;
        t[7] === i ? m = t[8] : (m = (0, J.jsx)(`div`, {
            className: Rt,
            children: i
        }), t[7] = i, t[8] = m);
        let h;
        t[9] === u ? h = t[10] : (h = (0, J.jsx)(`pre`, {
            className: zt,
            children: u
        }), t[9] = u, t[10] = h);
        let g;
        t[11] !== m || t[12] !== h ? (g = (0, J.jsxs)(`div`, {
            className: `flex min-h-0 flex-col gap-2`,
            children: [m, h]
        }), t[11] = m, t[12] = h, t[13] = g) : g = t[13];
        let _;
        t[14] !== p || t[15] !== g ? (_ = (0, J.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [p, g]
        }), t[14] = p, t[15] = g, t[16] = _) : _ = t[16];
        let v;
        return t[17] !== n || t[18] !== o || t[19] !== d || t[20] !== _ ? (v = (0, J.jsx)(ae, {
            isOpen: n,
            onClose: o,
            showCloseButton: !0,
            size: `xlarge`,
            title: `Widget debug data`,
            description: d,
            testId: `modal-ecosystem-app-debug-inspector`,
            children: _
        }), t[17] = n, t[18] = o, t[19] = d, t[20] = _, t[21] = v) : v = t[21], v
    }, Gt = e => {
        "use forget";
        let t = (0, It.c)(30),
            {
                widgetId: n,
                widgetState: r,
                toolInput: i,
                toolOutput: a,
                toolResponseMetadata: o,
                children: s
            } = e,
            [c, l] = (0, q.useState)(0),
            [u, d] = (0, q.useState)(!1),
            [f, p] = (0, q.useState)(!1),
            m;
        t[0] !== i || t[1] !== a || t[2] !== o || t[3] !== r ? (m = {
            toolInput: i,
            toolOutput: a,
            toolResponseMetadata: o,
            widgetState: r
        }, t[0] = i, t[1] = a, t[2] = o, t[3] = r, t[4] = m) : m = t[4];
        let h = m,
            g;
        t[5] === h ? g = t[6] : (g = () => Vt(h), t[5] = h, t[6] = g);
        let [_, v] = (0, q.useState)(g), y, b;
        t[7] === h ? (y = t[8], b = t[9]) : (y = () => {
            v(e => h[e] == null ? Vt(h) : e)
        }, b = [h], t[7] = h, t[8] = y, t[9] = b), (0, q.useEffect)(y, b);
        let x, S;
        t[10] === f ? (x = t[11], S = t[12]) : (x = () => {
            if (!f) return;
            let e = window.setTimeout(() => {
                p(!1)
            }, 2e3);
            return () => {
                window.clearTimeout(e)
            }
        }, S = [f], t[10] = f, t[11] = x, t[12] = S), (0, q.useEffect)(x, S);
        let C;
        t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, J.jsx)(`div`, {
            className: Bt
        }), t[13] = C) : C = t[13];
        let w;
        t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (w = P(`border-token-text-primary bg-token-bg-primary text-token-text-primary hover:bg-token-bg-secondary flex h-6 w-6 items-center justify-center border-s border-t border-b p-0 transition-colors`), t[14] = w) : w = t[14];
        let T;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, J.jsx)(`button`, {
            type: `button`,
            className: w,
            "aria-label": `Reload widget`,
            title: `Reload widget`,
            onClick: () => l(Ft),
            children: (0, J.jsx)(ze, {
                className: `icon-sm`
            })
        }), t[15] = T) : T = t[15];
        let E;
        t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (E = P(`border-token-text-primary bg-token-bg-primary text-token-text-primary hover:bg-token-bg-secondary flex h-6 w-6 items-center justify-center border p-0 transition-colors`), t[16] = E) : E = t[16];
        let D;
        t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (D = (0, J.jsxs)(`div`, {
            className: `absolute end-0 top-0 z-30 flex`,
            children: [T, (0, J.jsx)(`button`, {
                type: `button`,
                className: E,
                "aria-label": `Inspect widget data`,
                title: `Inspect widget data`,
                onClick: () => d(!0),
                children: (0, J.jsx)(Re, {
                    className: `icon-sm`
                })
            })]
        }), t[17] = D) : D = t[17];
        let O;
        t[18] !== s || t[19] !== c ? (O = s(c), t[18] = s, t[19] = c, t[20] = O) : O = t[20];
        let ee;
        t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = () => d(!1), t[21] = ee) : ee = t[21];
        let k;
        t[22] !== h || t[23] !== u || t[24] !== _ || t[25] !== n ? (k = (0, J.jsx)(Wt, {
            isOpen: u,
            widgetId: n,
            selectedPanel: _,
            values: h,
            onClose: ee,
            onSelectPanel: v
        }), t[22] = h, t[23] = u, t[24] = _, t[25] = n, t[26] = k) : k = t[26];
        let A;
        return t[27] !== O || t[28] !== k ? (A = (0, J.jsxs)(`div`, {
            className: `relative h-full w-full max-w-full`,
            children: [C, D, O, k]
        }), t[27] = O, t[28] = k, t[29] = A) : A = t[29], A
    }
}));

function qt(e, t, n) {
    let r = window.getComputedStyle(e).getPropertyValue(t).trim();
    if (!r) return ``;
    if (!/(?:var|light-dark|alpha)\(/.test(r)) return r;
    e.style.setProperty(n, `var(${t})`);
    let i = window.getComputedStyle(e).getPropertyValue(n).trim();
    return e.style.removeProperty(n), i
}

function Jt(e) {
    if (typeof document > `u` || typeof window > `u`) return;
    let t = Object.create(null),
        n = document.createElement(`span`);
    n.className = `puik-root`, n.dataset.theme = e, n.hidden = !0, (document.body ?? document.documentElement).appendChild(n);
    try {
        for (let [e, [r, i]] of Object.entries(Yt)) {
            let a = qt(n, r, i);
            a && (t[e] = a)
        }
    } finally {
        n.remove()
    }
    if (Object.keys(t).length !== 0) return {
        variables: t
    }
}
var Yt, Xt = e((() => {
        Yt = {
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
    Zt, Qt, $t = e((() => {
        Zt = e => {
            if (!e) return [];
            let t = [];
            return e.camera && t.push(`camera`), e.microphone && t.push(`microphone`), e.geolocation && t.push(`geolocation`), e.fullscreen && t.push(`fullscreen`), e.clipboardWrite && t.push(`clipboard-write`), t
        }, Qt = (e, t) => {
            let n = Zt(t);
            if (!n.length) return e;
            let r = new Set(e ?? []);
            for (let e of n) r.add(e);
            return Array.from(r)
        }
    }));

function en() {
    return Ne()
}
var Y, X, Z, Q, tn, nn, rn, an, on, sn, cn, ln, un, $, dn, fn = e((() => {
    Y = L(), ye(), R(), Me(), ke(), St(), Tt(), Pt(), Kt(), Xt(), Je(), $t(), Xe(), i(), he(), T(), b(), c(), z(), ge(), ve(), F(), r(), je(), De(), He(), fe(), y(), X = t(Ce()), Z = be(), Te(), Q = e => we(() => import(`./3e574439-jdddxju5mbw4uiqr.js`).then(e => (e.n(), e.l)).then(e), __vite__mapDeps([13, 1, 2, 3, 4, 7, 5, 8, 9, 10, 14, 15, 16, 17, 18, 19, 20])), tn = e => typeof e == `object` && !!e, nn = e => {
        if (!e) return {};
        let t = {},
            [n, ...r] = (e.name ?? ``).trim().split(/\s+/);
        return n && (t.name = e.name, t[`given-name`] = n, r.length > 0 && (t[`family-name`] = r.join(` `))), e.email && (t.email = e.email), e.phone_number && (t.tel = e.phone_number), t
    }, rn = e => {
        if (!e) return null;
        if (!e.includes(`://`)) return e;
        try {
            return new URL(e).hostname || null
        } catch {
            return null
        }
    }, an = e => Object.values(N(`3726720227`).value).some(t => typeof t == `string` && rn(t) === e), on = e => {
        if (!e) return null;
        try {
            return C(e).sub ?? null
        } catch {
            return null
        }
    }, sn = e => {
        if (!e || !tn(e)) return null;
        let t = e.status;
        return (e.cancelled === !0 || e.is_cancelled === !0 || t === `cancelled`) && typeof e.reason == `string` ? e.reason : null
    }, cn = (e, t) => {
        if (sn(e)) return null;
        for (let t of [e, e?.call_tool_result, e?.mcp_tool_result, e?.mcpToolResult]) {
            if (!tn(t)) continue;
            let e = B(t);
            if (e) return e
        }
        if (!tn(t)) return null;
        let n = typeof t.result == `string` ? t.result : null,
            r = n || `[structured content]`;
        if (!n) try {
            r = JSON.stringify(t)
        } catch {}
        return B({
            content: [{
                type: `text`,
                text: r
            }],
            structuredContent: t,
            isError: typeof t.isError == `boolean` ? t.isError : void 0,
            _meta: tn(t._meta) ? t._meta : e ?? void 0
        })
    }, ln = ({
        displayMode: e,
        viewParams: t,
        toolOutput: n
    }) => {
        if (e === `modal`) return t ?? null;
        let r = tn(n) ? n : null,
            i = tn(t) ? t : null;
        return !r && !i ? null : {
            ...r ?? {},
            ...i ?? {}
        }
    }, un = {
        insets: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }
    }, $ = ({
        host: e,
        mcpApps: t,
        accountId: r,
        ref: i,
        iframeRef: o,
        html: s,
        measureWidth: c,
        expectReadySignal: l,
        expectedReadySignal: f,
        features: p,
        permissions: m,
        safeArea: h = un,
        attributionId: _,
        appDisplayName: v,
        conversationId: y,
        appPackageName: b,
        widgetId: x,
        widgetSessionId: S,
        widgetParent: C,
        widgetDistributionChannel: w,
        allowPrivilegedActions: T = !0,
        suggestionMessageId: D,
        widgetType: O,
        csp: A,
        subdomain: te,
        viewParams: j,
        widgetState: ne = null,
        deepLink: N,
        toolInput: ae = null,
        toolOutput: oe = null,
        toolResponseMetadata: se = null,
        toolInfo: ce = null,
        subjectId: ue = null,
        isTombstone: fe = !1,
        maxHeight: pe,
        maxWidth: he,
        containerHeight: ge,
        containerWidth: _e,
        theme: P,
        title: ve,
        api: F,
        locale: ye,
        displayMode: I = `inline`,
        availableDisplayModes: be,
        isSidebarOpen: Ce,
        onReady: we,
        onError: Te,
        frameComponent: De
    }) => {
        "use no forget";
        let L = (0, X.useMemo)(() => ({
                attribution_id: _ ?? C ?? ``,
                name: O,
                conversation_id: y ?? null,
                message_id: x || null,
                suggestion_message_id: D ?? null,
                distribution_channel: w,
                host: e
            }), [e, w, _, C, O, y, x, D]),
            [R, ke] = (0, X.useState)(null),
            je = ee(ke, i),
            [z, Me] = (0, X.useState)(null),
            [Ne, Ie] = (0, X.useState)([]),
            [Le, Re] = (0, X.useState)(null),
            ze = Ne ?? [],
            B = Ne != null,
            [He] = (0, X.useState)(() => new WeakMap),
            [Ue, We] = (0, X.useState)(!1),
            V = e === `skybridge`,
            {
                user: Ge = null,
                accessToken: Ke
            } = me() ?? {},
            Je = V ? g(Ke) : null,
            Xe = V ? on(Ke) : null,
            H = rn(_ ?? C),
            Qe = T && (V || Ge != null) && H != null && an(H),
            $e = Qe && de(`1850361504`),
            et = ie(() => $e ? V ? r == null ? null : n(u().data, r) : k() : null),
            U = et?.normalizedAccountUserId,
            tt = V ? `${r??``}:${Xe??``}` : U ?? Ge?.id,
            nt = r === et?.id && Xe != null && (Je == null || Je === r),
            rt = $e && et != null && U != null && (!V || nt),
            {
                data: it,
                isLoading: at
            } = Se({
                ...le,
                queryKey: V ? [...le.queryKey, `skybridge`, r ?? ``, Xe ?? ``] : le.queryKey,
                enabled: V && Qe
            }),
            ot = Se({
                ...Ye(U),
                enabled: rt
            }),
            st = xe(),
            ct = Ee({
                mutationFn: ({
                    app_uri: e,
                    provider_name: t
                }) => Ze({
                    app_uri: e,
                    provider_name: t
                }),
                onSuccess: (e, {
                    accountUserId: t
                }) => st.setQueryData(Ye(t).queryKey, (t = []) => [...t.filter(({
                    app_uri: t
                }) => t !== e.app_uri), e])
            }),
            lt = rt && ot.data?.some(({
                app_uri: e
            }) => rn(e) === H) === !0,
            ut = V ? it ?? null : Ge,
            dt = ut ? {
                name: ut.name,
                email: ut.email,
                phone_number: ut.phone_number
            } : null,
            ft = nn(dt),
            pt = Le != null && Le.appId === H && Le.accountIdentity === tt && Le.frame === R && Le.html === s && Le.widgetId === x && ze.some(e => !!ft[e.fieldType]),
            mt = V && at || rt && ot.isLoading,
            ht = B && pt && !mt,
            gt = ht && lt && !ct.isPending,
            _t = v ?? ve ?? O ?? H ?? ``,
            vt = Qe && ht && !lt && dt != null,
            W = M(t => {
                H != null && a.logStructuredEvent(`ChatgptAppAutofillEvent`, {
                    action: t,
                    appId: H,
                    surface: e === `skybridge` ? Fe.CHATGPT_APP_AUTOFILL_SURFACE_SKYBRIDGE : Fe.CHATGPT_APP_AUTOFILL_SURFACE_WEB,
                    alwaysAllowAvailable: rt
                })
            }),
            yt = M(e => {
                Q(({
                    trackAutofillConsent: t
                }) => t(L, e, H, ze))
            });
        (0, X.useEffect)(() => {
            if (!vt || !z || He.get(z)?.has(x)) return;
            let e = He.get(z) ?? new Set;
            e.add(x), He.set(z, e), yt(`shown`), W(Pe.CHATGPT_APP_AUTOFILL_ACTION_CONSENT_SHOWN)
        }, [He, vt, W, z, yt, x]);
        let bt = M((e = Pe.CHATGPT_APP_AUTOFILL_ACTION_ALLOW_ONCE) => {
                if (B) {
                    e !== Pe.CHATGPT_APP_AUTOFILL_ACTION_AUTO_APPLIED && yt(`accepted`);
                    for (let e of ze) {
                        let t = ft[e.fieldType];
                        t && R?.applyAutofillCandidate({
                            id: e.id,
                            value: t
                        })
                    }
                    Ie(null), W(e)
                }
            }),
            St = M(e => z?.isCurrent() === !0 && e.appId === H && e.accountUserId === U && e.frame === R && e.html === s && e.widgetId === x && e.candidates === ze && B),
            Tt = M(async () => {
                if (!H || !U) return;
                let e = {
                    appId: H,
                    accountUserId: U,
                    frame: R,
                    html: s,
                    widgetId: x,
                    candidates: ze
                };
                We(!1);
                try {
                    await ct.mutateAsync({
                        app_uri: H,
                        provider_name: _t,
                        accountUserId: U
                    }), St(e) && bt(Pe.CHATGPT_APP_AUTOFILL_ACTION_ALWAYS_ALLOW)
                } catch {
                    St(e) && (We(!0), W(Pe.CHATGPT_APP_AUTOFILL_ACTION_GRANT_SAVE_FAILED))
                }
            }),
            Et = M(() => {
                B && yt(`declined`), Ie(null), W(Pe.CHATGPT_APP_AUTOFILL_ACTION_DENIED)
            }),
            Dt = M(() => {
                B && yt(`declined`), Ie(null), W(Pe.CHATGPT_APP_AUTOFILL_ACTION_DISMISSED)
            });
        (0, X.useEffect)(() => {
            gt && bt(Pe.CHATGPT_APP_AUTOFILL_ACTION_AUTO_APPLIED)
        }, [bt, gt]);
        let G = I === `fullscreen` ? `fullscreen` : I === `pip` ? `pip` : `inline`,
            kt = (0, X.useMemo)(() => Qt(p, m), [p, m]),
            K = (0, X.useMemo)(() => xt(e), [e]),
            At = K.device.type === `mobile` || K.device.type === `tablet` ? `mobile` : K.device.type === `desktop` ? `desktop` : `web`,
            jt = (0, X.useMemo)(() => {
                let e = {};
                return G === `fullscreen` ? typeof window < `u` && (e.width = window.innerWidth, e.height = window.innerHeight) : (ge == null ? pe != null && (e.maxHeight = pe) : e.height = ge, _e == null ? he != null && (e.maxWidth = he) : e.width = _e), Object.keys(e).length > 0 ? e : void 0
            }, [G, ge, _e, pe, he]),
            Mt = (0, X.useMemo)(() => {
                if (!(typeof Intl > `u`)) return Intl.DateTimeFormat().resolvedOptions().timeZone
            }, []),
            Nt = T ? t?.hostContext[`openai/modelContext`] : void 0,
            Pt = T ? t?.hostContext[`openai/chat`] : void 0,
            Ft = (0, X.useMemo)(() => {
                let t = e === `skybridge` ? (be ?? [`inline`, `fullscreen`]).filter(e => e === `inline` || e === `fullscreen`) : [`inline`, `fullscreen`, `pip`];
                (e !== `skybridge` || G !== `pip`) && !t.includes(G) && t.push(G);
                let n = {
                    theme: P,
                    displayMode: G,
                    availableDisplayModes: t,
                    containerDimensions: jt,
                    locale: ye,
                    safeAreaInsets: h.insets,
                    userAgent: `chatgpt`,
                    platform: At,
                    deviceCapabilities: {
                        touch: K.capabilities.touch,
                        hover: K.capabilities.hover
                    }
                };
                return ce && (n.toolInfo = ce), Mt && (n.timeZone = Mt), N !== void 0 && (n[`openai/deepLink`] = N), Nt !== void 0 && (n[`openai/modelContext`] = Nt), Pt !== void 0 && (n[`openai/chat`] = Pt), n
            }, [Pt, jt, N, ye, G, Nt, e, be, At, h.insets, P, Mt, ce, K.capabilities.hover, K.capabilities.touch]),
            It = (0, X.useMemo)(() => {
                if (!p || p.length === 0) return;
                let e = {},
                    t = new Set(p);
                return t.has(`camera`) && (e.camera = {}), t.has(`microphone`) && (e.microphone = {}), t.has(`geolocation`) && (e.geolocation = {}), t.has(`clipboard-write`) && (e.clipboardWrite = {}), Object.keys(e).length > 0 ? e : void 0
            }, [p]),
            q = (0, X.useMemo)(() => {
                if (!A) return;
                let e = {};
                return A.connectDomains && A.connectDomains.length > 0 && (e.connectDomains = A.connectDomains), A.resourceDomains && A.resourceDomains.length > 0 && (e.resourceDomains = A.resourceDomains), A.frameDomains && A.frameDomains.length > 0 && (e.frameDomains = A.frameDomains), Object.keys(e).length > 0 ? e : void 0
            }, [A]),
            J = (0, X.useMemo)(() => {
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
                return (It || q) && (e.sandbox = {}, It && (e.sandbox.permissions = It), q && (e.sandbox.csp = q)), e
            }, [T, t?.forwardedRequestMethods, t?.hostCapabilities, q, It]),
            [Lt] = (0, X.useState)(() => new Map),
            Rt = M(() => {
                let e = Lt.get(P);
                return e || (e = Jt(P), e && Lt.set(P, e)), e ? {
                    ...Ft,
                    styles: e
                } : Ft
            }),
            zt = M(() => {
                Te?.()
            }),
            Bt = M(e => {
                Q(({
                    trackFatalWidgetError: t
                }) => t(L, e)), zt()
            }),
            Vt = M(() => {
                we?.()
            }),
            Ht = M(() => {
                let e = L,
                    t = I,
                    n = l === !0,
                    r = performance.now(),
                    i = !1,
                    a = a => {
                        if (i) return;
                        i = !0, clearTimeout(o);
                        let s = performance.now() - r;
                        Q(({
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
            Ut = M(async (e, n, r, i) => {
                Me(null), Ie([]), Re(null), We(!1);
                let a = e.runWidgetCode({
                        html: n,
                        measureWidth: c,
                        expectReadySignal: l,
                        expectedReadySignal: f,
                        isFirstParty: T && w === E.OPENAI,
                        widgetId: x,
                        ...Qe ? {
                            enableAutofill: !0
                        } : {},
                        viewParams: ln({
                            displayMode: I,
                            viewParams: j,
                            toolOutput: oe ?? null
                        }),
                        widgetState: ne,
                        toolInput: ae,
                        toolOutput: oe,
                        toolResponseMetadata: se,
                        subjectId: ue,
                        appPackageName: b,
                        isTombstone: fe,
                        features: kt,
                        maxHeight: pe ?? void 0,
                        maxWidth: he ?? void 0,
                        theme: P,
                        displayMode: I,
                        isSidebarOpen: Ce ?? !1,
                        safeArea: h,
                        userAgent: K,
                        csp: A,
                        mcpApps: {
                            forwardedRequestMethods: T ? t?.forwardedRequestMethods : void 0,
                            hostContext: Rt(),
                            hostCapabilities: J,
                            hostInfo: {
                                name: `chatgpt`
                            }
                        }
                    }),
                    o = null;
                for await (let t of await a) {
                    if (!r()) return;
                    t.type === Ve.ENVIRONMENT_STATUS && t.status === Be.RUNNING_CODE ? (i(`ready`), Vt(), Me(t => t?.frame === e && t.html === n && t.isCurrent === r ? t : {
                        frame: e,
                        html: n,
                        expectsReadySignal: l === !0,
                        expectedReadySignal: f ?? null,
                        isCurrent: r
                    })) : t.type === Ve.ERROR ? (Q(({
                        trackWidgetError: e
                    }) => e(L, t.error)), o = t.error) : t.type === Ve.RUN_COMPLETE && t.wasFatalError && (i(`error`), Bt(o))
                }
            }),
            Wt = l === !0,
            Gt = f ?? null;
        (0, X.useEffect)(() => {
            if (!R || !s) return;
            let e = !0,
                t = Ht();
            return Ut(R, s, () => e, t).catch(() => {
                e && (t(`error`), Bt(null))
            }), () => {
                e = !1, t(`aborted`)
            }
        }, [Wt, R, s, Gt, Bt, Ut, Ht]);
        let Kt = (0, X.useMemo)(() => cn(se, oe), [se, oe]),
            qt = sn(se),
            Yt = {
                widgetId: x,
                widgetState: ne,
                toolInput: ae,
                toolOutput: oe,
                toolResponseMetadata: se,
                subjectId: ue
            },
            [Xt, Zt] = (0, X.useState)(Yt),
            [$t, en] = (0, X.useState)(null),
            [Y, tn] = (0, X.useState)(null);
        d(Xt, Yt) || Zt(Yt);
        let $ = z?.frame === R && z.html === s && z.expectsReadySignal === Wt && z.expectedReadySignal === Gt && z.isCurrent() ? z : null;
        $ && ae && ($t?.widget !== $ || $t.widgetId !== x || !d($t.input, ae)) && en({
            widget: $,
            widgetId: x,
            input: ae
        }), $ && Kt && (Y?.widget !== $ || Y.widgetId !== x || !d(Y.result, Kt)) && tn({
            widget: $,
            widgetId: x,
            result: Kt
        }), (0, X.useEffect)(() => {
            $ && $.frame.setWidgetData(Xt)
        }, [$, Xt]), (0, X.useEffect)(() => {
            $t?.widget.isCurrent() && $t.widget.frame.notifyMcpAppsToolInput({
                arguments: $t.input
            })
        }, [$t]), (0, X.useEffect)(() => {
            Y?.widget.isCurrent() && Y.widget.frame.notifyMcpAppsToolResult(Y.result)
        }, [Y]), (0, X.useEffect)(() => {
            $ && qt != null && $.frame.notifyMcpAppsToolCancelled({
                reason: qt
            })
        }, [$, qt, x]), (0, X.useEffect)(() => {
            $ && $.frame.notifyMcpAppsHostContext({
                hostContext: Rt()
            })
        }, [$, Rt, Ft]), (0, X.useEffect)(() => {
            if (R) return () => {
                R.requestMcpAppsResourceTeardown({
                    timeoutMs: 500
                })
            }
        }, [R]), (0, X.useEffect)(() => {
            $ && $.frame.setWidgetView({
                widgetId: x,
                displayMode: I,
                viewParams: ln({
                    displayMode: I,
                    viewParams: j,
                    toolOutput: oe ?? null
                }),
                isTombstone: fe
            })
        }, [$, x, I, j, oe, fe]), (0, X.useEffect)(() => {
            $ && $.frame.setAdditionalGlobals({
                additionalGlobals: {
                    isSidebarOpen: Ce ?? !1
                }
            })
        }, [$, Ce]), (0, X.useEffect)(() => {
            $ && $.frame.setAdditionalGlobals({
                additionalGlobals: {
                    maxHeight: pe,
                    maxWidth: he
                }
            })
        }, [$, pe, he]), (0, X.useEffect)(() => {
            $ && $.frame.setTheme({
                theme: P
            })
        }, [$, P]), (0, X.useEffect)(() => {
            $ && $.frame.setSafeArea({
                safeArea: h
            })
        }, [$, h]);
        let dn = e === `skybridge` || de(`1610966033`),
            fn = M(e => re(F.callMcp)(e)),
            pn = F.scanCard ? JSON.stringify([`card-scan`, tt, x, S ?? null, s, Wt, Gt]) : `default`,
            mn = (0, X.useMemo)(() => ({
                frameKey: pn
            }), [pn]),
            hn = M(() => ({
                owner: mn,
                readyWidget: $,
                scanCard: F.scanCard
            })),
            gn = (0, X.useMemo)(() => async () => {
                let e = hn();
                if (e.owner !== mn || !e.readyWidget?.isCurrent() || !e.scanCard) return {
                    status: `unavailable`
                };
                let t = await e.scanCard(),
                    n = hn();
                return n.owner === mn && n.readyWidget === e.readyWidget && e.readyWidget.isCurrent() ? t : {
                    status: `cancelled`
                }
            }, [hn, mn]),
            _n = T ? F.openPlaidLink ?? (e === `chatgpt` && w === E.OPENAI && C === `connectors://connector_693864f100e4819093e6ed9b651239f1` ? qe : void 0) : void 0;
        return (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(Ot, {
                frameComponent: De,
                title: ve,
                host: e,
                colorScheme: P,
                subdomain: te,
                features: kt,
                api: {
                    ...F,
                    callMcp: F.callMcp ? fn : void 0,
                    scanCard: F.scanCard ? gn : void 0,
                    notifyIntrinsicHeight: e => F.notifyIntrinsicHeight?.(e),
                    updateWidgetState: F.updateWidgetState ? (e, t, n) => F.updateWidgetState?.(x, t, dn ? n : void 0) : void 0,
                    openPlaidLink: _n,
                    downloadBlob: T && w === E.OPENAI ? ({
                        blob: e,
                        name: t
                    }) => {
                        Ae(e, t)
                    } : void 0,
                    notifyAutofillCandidates: Qe ? e => {
                        B && (Re({
                            appId: H,
                            accountIdentity: tt,
                            frame: R,
                            html: s,
                            widgetId: x
                        }), Ie(e))
                    } : void 0,
                    notifyNavigation: e => {
                        Q(({
                            trackWidgetNavigation: t
                        }) => t(L, e)), F.notifyNavigation?.(e)
                    },
                    requestCheckout: F.requestCheckout ? e => (Q(({
                        trackWidgetCheckoutSession: e
                    }) => e(L)), F.requestCheckout?.(e)) : void 0,
                    requestDisplayMode: e => {
                        let {
                            mode: t
                        } = e;
                        return t !== I && Q(({
                            trackWidgetDisplayMode: e
                        }) => e(L, t)), F.requestDisplayMode?.(e) ?? {
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
                        Q(({
                            trackWidgetLinkOut: e
                        }) => e(L)), await F.openExternal?.(e)
                    },
                    sendInstrument: e => {
                        Q(({
                            trackSandboxInstrument: t
                        }) => t(e, L))
                    },
                    notifySecurityPolicyViolation: e => {
                        Q(({
                            trackSecurityPolicyViolation: t
                        }) => t({
                            ...L,
                            violation: e
                        }))
                    }
                },
                iframeRef: o,
                ref: je,
                locale: ye
            }, pn), vt && dt && (e === `skybridge` ? (0, Z.jsx)(wt, {
                appName: _t,
                user: dt,
                onAllow: () => bt(),
                onAlwaysAllow: rt ? Tt : void 0,
                isSavingGrant: ct.isPending,
                hasGrantError: Ue,
                onDecline: Et,
                onDismiss: Dt
            }) : (0, Z.jsx)(Oe, {
                for: Ct,
                withProps: {
                    appName: _t,
                    user: dt,
                    onAllow: () => bt(),
                    onAlwaysAllow: rt ? Tt : void 0,
                    isSavingGrant: ct.isPending,
                    hasGrantError: Ue,
                    onDecline: Et,
                    onDismiss: Dt
                },
                open: !0,
                onClose: Dt
            }))]
        })
    }, dn = e => {
        "use forget";
        let t = (0, Y.c)(11);
        if (!ie(en)) {
            let n;
            return t[0] === e ? n = t[1] : (n = (0, Z.jsx)($, {
                ...e
            }), t[0] = e, t[1] = n), n
        }
        let n = e.widgetState ?? null,
            r = e.toolInput ?? null,
            i = e.toolOutput ?? null,
            a = e.toolResponseMetadata ?? null,
            o;
        t[2] === e ? o = t[3] : (o = t => (0, Z.jsx)($, {
            ...e
        }, t), t[2] = e, t[3] = o);
        let s;
        return t[4] !== e.widgetId || t[5] !== n || t[6] !== r || t[7] !== i || t[8] !== a || t[9] !== o ? (s = (0, Z.jsx)(Gt, {
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
    rt as a, yt as i, fn as n, ct as o, W as r, it as s, dn as t
};
//# sourceMappingURL=1c86a5ac-g8o3s7m87lyivalf.js.map