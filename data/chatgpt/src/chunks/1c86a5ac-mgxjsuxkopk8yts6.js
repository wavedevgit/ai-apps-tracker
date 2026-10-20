const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/df9194ad-f3qf21pup8ludd3h.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/30901919-jory365vq6ym5crx.js", "assets/a05edf66-ih7uzopt7zad60du.js", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/8742b478-n9ctg1vxa2pdnusu.js", "assets/8d505c06-lcyz6x6yl185did8.js", "assets/3e574439-jn02o5jsc1bd5pl6.js", "assets/c2675c8c-nxl2ic2ofk2vw70s.js", "assets/82782bc9-jj605vonxg0iyc7p.js", "assets/8b34dbc2-d4icgkio4i3wfm6q.js", "assets/global-modals-lv5n3ujm.css", "assets/25a66342-cnfcsfdh2ydiex1n.js", "assets/2ea88c7a-lxyla91xs6iv7odf.js", "assets/25a66342-j7cd8h2bqav7weve.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bot as n,
    Dz as r,
    Gnt as i,
    Hnt as a,
    I1 as o,
    J0 as s,
    J5 as c,
    Jnt as l,
    Ktt as u,
    L7 as d,
    M5 as f,
    Mot as p,
    N7 as m,
    Oz as h,
    S1 as g,
    S8 as _,
    Sw as v,
    T1 as y,
    TR as b,
    Y0 as x,
    Z0 as S,
    _N as C,
    _R as w,
    _nt as ee,
    aE as te,
    aq as T,
    b1 as E,
    b2 as D,
    b5 as O,
    cit as k,
    cst as ne,
    dnt as A,
    e2 as j,
    fnt as re,
    hnt as ie,
    int as ae,
    lnt as oe,
    lq as se,
    lst as ce,
    m8 as M,
    mnt as le,
    mtt as ue,
    oq as de,
    ptt as fe,
    q5 as pe,
    qtt as me,
    rE as N,
    sit as he,
    snt as ge,
    tnt as _e,
    vN as P,
    ww as F,
    x5 as ve,
    y2 as I,
    zot as ye
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Hn as L,
    N as be,
    O as xe,
    Tn as Se,
    Vn as Ce,
    ln as we,
    p as Te,
    s as Ee,
    un as De
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    CCn as R,
    Cjn as Oe,
    NWt as z,
    SCn as ke,
    Sjn as Ae,
    c0t as je,
    c6 as Me,
    jjn as Ne,
    l0t as B,
    s6 as Pe
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Ic as Fe,
    Kx as Ie,
    Lc as Le,
    qx as Re
} from "./30901919-jory365vq6ym5crx.js";
import {
    n as ze,
    r as Be
} from "./2ea88c7a-lxyla91xs6iv7odf.js";
import {
    n as Ve,
    t as He
} from "./8d846022-bvik3sltoydb2o43.js";
import {
    n as Ue,
    t as We
} from "./84983163-ci4xm9sq2rcig1sd.js";
import {
    n as Ge,
    o as V,
    r as Ke
} from "./7517017f-mzovnixx0oznxrxh.js";
import {
    a as qe,
    r as Je
} from "./6601bf01-iv0x4gtlp6n6914u.js";
import {
    i as Ye,
    n as Xe,
    t as Ze
} from "./d86ca127-d55ax0k5ee6blnx4.js";

function Qe(e) {
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

function H(e) {
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
    let n = e.port ? Number(e.port) : ot[e.protocol] ?? null;
    return t.portExplicit ? typeof t.port == `number` && n === t.port : n === (ot[e.protocol] ?? null)
}

function nt(e) {
    let t = e.scheme ?? `https:`;
    if (!at.has(t) || !e.host) return null;
    let n = typeof e.port == `number` ? `:${e.port}` : ``,
        r = e.path ?? ``;
    try {
        return new URL(`${t}//${e.host}${n}${r}`)
    } catch {
        return null
    }
}

function rt(e) {
    let t = Qe(e ?? void 0);
    if (t && at.has(t.url.protocol) && !t.url.hostname.includes(`*`)) return t.url.toString();
    if (!e) return null;
    let n = H(e);
    return !n || n.kind === `scheme` ? null : nt(n)?.toString() ?? null
}

function W(e, t, n) {
    let r = [];
    t?.connectDomains?.length && r.push(...t.connectDomains);
    let i = n?.trim();
    return i && r.push(i), it(e, r)
}

function it(e, t) {
    if (!e) return !1;
    let n = Qe(e);
    if (!n) return !1;
    let r = n.url;
    return r.username || r.password || !t?.length ? !1 : t.some(e => {
        let t = H(e);
        if (!t) return !1;
        if (t.kind === `scheme`) return r.protocol === t.scheme;
        if (t.scheme) return !(r.protocol !== t.scheme || !et(r.hostname, t.host, t.wildcard) || !tt(r, t));
        {
            let e = t.host;
            return !!$e(r.hostname, e)
        }
    })
}
var at, ot, st = e((() => {
    at = new Set([`http:`, `https:`]), ot = {
        "http:": 80,
        "https:": 443,
        "ws:": 80,
        "wss:": 443
    }
}));

function ct(e, t) {
    if (!t) return e;
    let n = e.startsWith(`http://`) || e.startsWith(`https://`) || /^[a-z][a-z0-9+.-]*:\/\//i.test(e),
        r;
    try {
        r = new URL(e)
    } catch {
        return e
    }
    return !n || r.searchParams.get(`redirectUrl`) ? e : (r.searchParams.set(lt, t), r.toString())
}
var lt, ut = e((() => {
    lt = `redirectUrl`
}));

function dt() {
    let e = Math.floor(window.screenX + (window.outerWidth - ht) / 2),
        t = Math.floor(window.screenY + (window.outerHeight - gt) / 2);
    return [`popup=yes`, `width=${ht}`, `height=${gt}`, `left=${e}`, `top=${t}`, `noopener`, `noreferrer`].join(`,`)
}
async function ft(e, t) {
    try {
        return (await m.safePost(`/ecosystem/url_safe`, {
            requestBody: {
                url: e,
                resolved_pineapple_uri: t
            }
        })).safe
    } catch {
        return !1
    }
}
var pt, mt, ht, gt, _t, vt, yt = e((() => {
        ue(), S(), st(), ut(), ee(), d(), u(), x(), De(), pt = s(() => we(() => import(`./df9194ad-f3qf21pup8ludd3h.js`).then(e => e.ConfirmExternalLinkModal), __vite__mapDeps([0, 1, 2, 3, 4, 5]))), mt = s(() => we(() => import(`./a05edf66-ih7uzopt7zad60du.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([6, 1, 2, 3, 4, 7, 5, 8, 9, 10, 11]))), ht = 600, gt = 750, _t = (e, t, n = `tab`) => {
            let r = ct(e, t);
            if (re()) j(pt, {
                url: r
            });
            else {
                let e = n === `popup` ? dt() : `noopener,noreferrer`;
                window.open(r, `_blank`, e);
                return
            }
        }, vt = async ({
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
            let m = a === fe.OPENAI && s === `popup` ? `popup` : `tab`;
            if (ie.logEvent(`link_action`, {
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
                }), W(e, n, i) || it(e, r)) {
                _t(e, o, m);
                return
            }
            if (a === fe.OPENAI && await ft(e, t)) {
                _t(e, null, m);
                return
            }
            j(mt, {
                urls: e,
                displayUrls: e
            })
        }
    })),
    bt, xt, St = e((() => {
        M(), T(), u(), bt = () => {
            let e = `unknown`;
            return A() ? e = `mobile` : ge() ? e = `tablet` : ae() && (e = `desktop`), e
        }, xt = e => {
            let t = bt(),
                n = `web`;
            e === `skybridge` && (n = `native`);
            let r = `unknown`;
            return _e() ? r = `ios` : me() ? r = `android` : le() ? r = `windows` : oe() && (r = `macos`), {
                device: {
                    type: t,
                    platform: n,
                    os: r
                },
                capabilities: {
                    hover: O(de),
                    touch: O(se)
                }
            }
        }
    })),
    Ct, wt, Tt = e((() => {
        x(), De(), Ct = s(() => we(() => import(`./8d505c06-lcyz6x6yl185did8.js`).then(e => e.AutofillConsentDialogContent), __vite__mapDeps([12, 1, 2, 3, 4, 7, 5, 8, 9, 10]))), wt = s(() => we(() => import(`./8d505c06-lcyz6x6yl185did8.js`).then(e => e.AutofillConsentSheetContent), __vite__mapDeps([12, 1, 2, 3, 4, 7, 5, 8, 9, 10])))
    }));

function Et(e) {
    "use forget";
    let t = (0, kt.c)(28),
        {
            host: i,
            features: a,
            isInert: o,
            title: s,
            colorScheme: c,
            ref: l,
            subdomain: u,
            iframeRef: d,
            api: f,
            locale: p
        } = e,
        m = i === void 0 ? `chatgpt` : i,
        h = o !== void 0 && o,
        [g] = (0, G.useState)(Dt),
        _;
    t[0] === g ? _ = t[1] : (_ = async (e, ...t) => {
        let r = t;
        return await ve(() => !!g()), n(g()?.[e], `Method ${String(e)} not found`)(...r)
    }, t[0] = g, t[1] = _);
    let v = P(_),
        y, b;
    t[2] === v ? (y = t[3], b = t[4]) : (y = () => new Proxy({}, {
        get: (e, t) => (...e) => v(t, ...e)
    }), b = [v], t[2] = v, t[3] = y, t[4] = b), (0, G.useImperativeHandle)(l, y, b);
    let x = (0, G.useRef)(f),
        S, C;
    t[5] === f ? (S = t[6], C = t[7]) : (S = () => {
        x.current = f
    }, C = [f], t[5] = f, t[6] = S, t[7] = C), (0, G.useEffect)(S, C);
    let w;
    t[8] === g ? w = t[9] : (w = e => e ? (We(e, new Proxy(x.current, {
        get: (e, t) => x.current[t]
    }), [`runUserCode`, `runWidgetCode`, `runComponent`]).then(e => {
        g.set(e)
    }), () => {
        g.set(null)
    }) : g.set(null), t[8] = g, t[9] = w);
    let ee = P(w),
        T;
    t[10] === u ? T = t[11] : (T = Nt(u), t[10] = u, t[11] = T);
    let E = T,
        D = `sandbox-${E}`,
        O;
    t[12] !== m || t[13] !== p ? (O = Mt(m, p, K), t[12] = m, t[13] = p, t[14] = O) : O = t[14];
    let k = `${E}${O}`,
        ne = te(ee, d),
        A;
    t[15] === a ? A = t[16] : (A = a?.length ? jt(a) : void 0, t[15] = a, t[16] = A);
    let j = a?.includes(`fullscreen`) ? !0 : void 0,
        re;
    t[17] === c ? re = t[18] : (re = c ? {
        colorScheme: c
    } : void 0, t[17] = c, t[18] = re);
    let ie;
    return t[19] !== h || t[20] !== D || t[21] !== k || t[22] !== ne || t[23] !== A || t[24] !== j || t[25] !== re || t[26] !== s ? (ie = (0, At.jsx)(r, {
        children: (0, At.jsx)(`iframe`, {
            title: s,
            inert: h,
            src: k,
            ref: ne,
            sandbox: `allow-scripts allow-same-origin allow-forms`,
            allow: A,
            allowFullScreen: j,
            className: `h-full w-full max-w-full`,
            style: re
        }, D)
    }), t[19] = h, t[20] = D, t[21] = k, t[22] = ne, t[23] = A, t[24] = j, t[25] = re, t[26] = s, t[27] = ie) : ie = t[27], ie
}

function Dt() {
    return _(null)
}

function Ot(e) {
    "use forget";
    let t = (0, kt.c)(8),
        n, r;
    if (t[0] === e ? (n = t[1], r = t[2]) : ({
            frameComponent: n,
            ...r
        } = e, t[0] = e, t[1] = n, t[2] = r), n) {
        let e;
        return t[3] !== n || t[4] !== r ? (e = (0, At.jsx)(n, {
            ...r
        }), t[3] = n, t[4] = r, t[5] = e) : e = t[5], e
    }
    let i;
    return t[6] === r ? i = t[7] : (i = (0, At.jsx)(Et, {
        ...r
    }), t[6] = r, t[7] = i), i
}
var kt, G, At, K, jt, Mt, Nt, Pt = e((() => {
    kt = Se(), V(), Ue(), St(), M(), h(), ye(), N(), C(), G = t(L()), At = Ce(), K = !1, jt = e => e.concat().sort().map(e => `${e} *`).join(`; `), Mt = (e, t, n) => `?` + [``, `app=${e}`, e === `chatgpt` ? `darkModeType=increased` : ``, `locale=${t}`, `deviceType=${xt(e).device.type}`, n ? `unsafeSkipTargetOriginCheck=true` : ``].filter(Boolean).join(`&`), Nt = e => {
        if (e) {
            let t = new URL(Ge);
            return t.hostname = `${e}.${t.hostname}`, t.protocol = Ke, t.origin
        }
        return Ge
    }
}));

function Ft(e) {
    return e + 1
}
var It, q, J, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt = e((() => {
    It = Se(), Fe(), Ie(), F(), c(), q = t(L()), J = Ce(), Lt = [`toolInput`, `toolOutput`, `toolResponseMetadata`, `widgetState`], Rt = `text-xs uppercase tracking-wide text-token-text-tertiary`, zt = `max-h-[70vh] overflow-auto whitespace-pre-wrap break-words rounded-md border border-token-border-light bg-token-main-surface-secondary p-3 font-mono text-xs leading-relaxed`, Bt = `pointer-events-none absolute inset-0 z-20 border border-token-text-primary`, Vt = e => Lt.find(t => e[t] != null) ?? `toolInput`, Ht = e => {
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
        t[0] === a ? o = t[1] : (o = pe(`rounded-full px-3 py-1.5 text-xs font-medium transition-colors`, a), t[0] = a, t[1] = o);
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
        let y;
        return t[17] !== n || t[18] !== o || t[19] !== d || t[20] !== _ ? (y = (0, J.jsx)(v, {
            isOpen: n,
            onClose: o,
            showCloseButton: !0,
            size: `xlarge`,
            title: `Widget debug data`,
            description: d,
            testId: `modal-ecosystem-app-debug-inspector`,
            children: _
        }), t[17] = n, t[18] = o, t[19] = d, t[20] = _, t[21] = y) : y = t[21], y
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
        t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (w = pe(`border-token-text-primary bg-token-bg-primary text-token-text-primary hover:bg-token-bg-secondary flex h-6 w-6 items-center justify-center border-s border-t border-b p-0 transition-colors`), t[14] = w) : w = t[14];
        let ee;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = (0, J.jsx)(`button`, {
            type: `button`,
            className: w,
            "aria-label": `Reload widget`,
            title: `Reload widget`,
            onClick: () => l(Ft),
            children: (0, J.jsx)(Re, {
                className: `icon-sm`
            })
        }), t[15] = ee) : ee = t[15];
        let te;
        t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (te = pe(`border-token-text-primary bg-token-bg-primary text-token-text-primary hover:bg-token-bg-secondary flex h-6 w-6 items-center justify-center border p-0 transition-colors`), t[16] = te) : te = t[16];
        let T;
        t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, J.jsxs)(`div`, {
            className: `absolute end-0 top-0 z-30 flex`,
            children: [ee, (0, J.jsx)(`button`, {
                type: `button`,
                className: te,
                "aria-label": `Inspect widget data`,
                title: `Inspect widget data`,
                onClick: () => d(!0),
                children: (0, J.jsx)(Le, {
                    className: `icon-sm`
                })
            })]
        }), t[17] = T) : T = t[17];
        let E;
        t[18] !== s || t[19] !== c ? (E = s(c), t[18] = s, t[19] = c, t[20] = E) : E = t[20];
        let D;
        t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (D = () => d(!1), t[21] = D) : D = t[21];
        let O;
        t[22] !== h || t[23] !== u || t[24] !== _ || t[25] !== n ? (O = (0, J.jsx)(Wt, {
            isOpen: u,
            widgetId: n,
            selectedPanel: _,
            values: h,
            onClose: D,
            onSelectPanel: v
        }), t[22] = h, t[23] = u, t[24] = _, t[25] = n, t[26] = O) : O = t[26];
        let k;
        return t[27] !== E || t[28] !== O ? (k = (0, J.jsxs)(`div`, {
            className: `relative h-full w-full max-w-full`,
            children: [C, T, E, O]
        }), t[27] = E, t[28] = O, t[29] = k) : k = t[29], k
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
    return Me()
}
var tn, Y, X, Z, Q, nn, rn, an, on, sn, cn, ln, un, dn, $, fn = e((() => {
    tn = Se(), ue(), z(), B(), Pe(), St(), Tt(), Pt(), Kt(), Xt(), Je(), $t(), Xe(), M(), o(), w(), k(), ee(), R(), ye(), l(), N(), C(), Ne(), Ee(), He(), I(), ne(), Y = t(L()), X = Ce(), De(), Z = e => we(() => import(`./3e574439-jn02o5jsc1bd5pl6.js`).then(e => (e.n(), e.l)).then(e), __vite__mapDeps([13, 1, 2, 3, 4, 7, 5, 8, 9, 10, 14, 15, 16, 17, 18, 19, 20])), Q = e => typeof e == `object` && !!e, nn = e => {
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
    }, an = e => Object.values(i(`3726720227`).value).some(t => typeof t == `string` && rn(t) === e), on = e => {
        if (!e) return null;
        try {
            return ce(e).sub ?? null
        } catch {
            return null
        }
    }, sn = e => {
        if (!e || !Q(e)) return null;
        let t = e.status;
        return (e.cancelled === !0 || e.is_cancelled === !0 || t === `cancelled`) && typeof e.reason == `string` ? e.reason : null
    }, cn = (e, t) => {
        if (sn(e)) return null;
        for (let t of [e, e?.call_tool_result, e?.mcp_tool_result, e?.mcpToolResult]) {
            if (!Q(t)) continue;
            let e = Ve(t);
            if (e) return e
        }
        if (!Q(t)) return null;
        let n = typeof t.result == `string` ? t.result : null,
            r = n || `[structured content]`;
        if (!n) try {
            r = JSON.stringify(t)
        } catch {}
        return Ve({
            content: [{
                type: `text`,
                text: r
            }],
            structuredContent: t,
            isError: typeof t.isError == `boolean` ? t.isError : void 0,
            _meta: Q(t._meta) ? t._meta : e ?? void 0
        })
    }, ln = ({
        displayMode: e,
        viewParams: t,
        toolOutput: n
    }) => {
        if (e === `modal`) return t ?? null;
        let r = Q(n) ? n : null,
            i = Q(t) ? t : null;
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
    }, dn = ({
        host: e,
        mcpApps: t,
        accountId: r,
        ref: i,
        iframeRef: o,
        html: s,
        measureWidth: c,
        expectReadySignal: l,
        expectedReadySignal: u,
        features: d,
        permissions: m,
        safeArea: h = un,
        attributionId: _,
        appDisplayName: v,
        conversationId: x,
        appPackageName: S,
        supportsOAuthCompletion: C,
        widgetId: w,
        widgetSessionId: ee,
        widgetParent: T,
        widgetDistributionChannel: O,
        allowPrivilegedActions: k = !0,
        suggestionMessageId: ne,
        widgetType: A,
        csp: j,
        subdomain: re,
        viewParams: ae,
        widgetState: oe = null,
        deepLink: se,
        toolInput: ce = null,
        toolOutput: M = null,
        toolResponseMetadata: le = null,
        toolInfo: ue = null,
        subjectId: de = null,
        isTombstone: pe = !1,
        maxHeight: me,
        maxWidth: N,
        containerHeight: ge,
        containerWidth: _e,
        theme: F,
        title: ve,
        api: I,
        locale: ye,
        displayMode: L = `inline`,
        availableDisplayModes: Se,
        isSidebarOpen: Ce,
        onReady: we,
        onError: Ee,
        frameComponent: De
    }) => {
        "use no forget";
        let R = (0, Y.useMemo)(() => ({
                attribution_id: _ ?? T ?? ``,
                name: A,
                conversation_id: x ?? null,
                message_id: w || null,
                suggestion_message_id: ne ?? null,
                distribution_channel: O,
                host: e
            }), [e, O, _, T, A, x, w, ne]),
            [z, Me] = (0, Y.useState)(null),
            Ne = te(Me, i),
            [B, Pe] = (0, Y.useState)(null),
            [Fe, Ie] = (0, Y.useState)([]),
            [Le, Re] = (0, Y.useState)(null),
            Ve = Fe ?? [],
            He = Fe != null,
            [Ue] = (0, Y.useState)(() => new WeakMap),
            [We, Ge] = (0, Y.useState)(!1),
            V = e === `skybridge`,
            {
                user: Ke = null,
                accessToken: Je
            } = p() ?? {},
            Xe = V ? he(Je) : null,
            Qe = V ? on(Je) : null,
            H = rn(_ ?? T),
            U = k && (V || Ke != null) && H != null && an(H),
            $e = U && a(`1850361504`),
            et = f(() => $e ? V ? r == null ? null : y(E().data, r) : g() : null),
            tt = et?.normalizedAccountUserId,
            nt = V ? `${r??``}:${Qe??``}` : tt ?? Ke?.id,
            rt = r === et?.id && Qe != null && (Xe == null || Xe === r),
            W = $e && et != null && tt != null && (!V || rt),
            {
                data: it,
                isLoading: at
            } = xe({
                ...b,
                queryKey: V ? [...b.queryKey, `skybridge`, r ?? ``, Qe ?? ``] : b.queryKey,
                enabled: V && U
            }),
            ot = xe({
                ...Ye(tt),
                enabled: W
            }),
            st = be(),
            ct = Te({
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
            lt = W && ot.data?.some(({
                app_uri: e
            }) => rn(e) === H) === !0,
            ut = V ? it ?? null : Ke,
            dt = ut ? {
                name: ut.name,
                email: ut.email,
                phone_number: ut.phone_number
            } : null,
            ft = nn(dt),
            pt = Le != null && Le.appId === H && Le.accountIdentity === nt && Le.frame === z && Le.html === s && Le.widgetId === w && Ve.some(e => !!ft[e.fieldType]),
            mt = V && at || W && ot.isLoading,
            ht = He && pt && !mt,
            gt = ht && lt && !ct.isPending,
            _t = v ?? ve ?? A ?? H ?? ``,
            vt = U && ht && !lt && dt != null,
            yt = P(t => {
                H != null && ie.logStructuredEvent(`ChatgptAppAutofillEvent`, {
                    action: t,
                    appId: H,
                    surface: e === `skybridge` ? Oe.CHATGPT_APP_AUTOFILL_SURFACE_SKYBRIDGE : Oe.CHATGPT_APP_AUTOFILL_SURFACE_WEB,
                    alwaysAllowAvailable: W
                })
            }),
            bt = P(e => {
                Z(({
                    trackAutofillConsent: t
                }) => t(R, e, H, Ve))
            });
        (0, Y.useEffect)(() => {
            if (!vt || !B || Ue.get(B)?.has(w)) return;
            let e = Ue.get(B) ?? new Set;
            e.add(w), Ue.set(B, e), bt(`shown`), yt(Ae.CHATGPT_APP_AUTOFILL_ACTION_CONSENT_SHOWN)
        }, [Ue, vt, yt, B, bt, w]);
        let St = P((e = Ae.CHATGPT_APP_AUTOFILL_ACTION_ALLOW_ONCE) => {
                if (He) {
                    e !== Ae.CHATGPT_APP_AUTOFILL_ACTION_AUTO_APPLIED && bt(`accepted`);
                    for (let e of Ve) {
                        let t = ft[e.fieldType];
                        t && z?.applyAutofillCandidate({
                            id: e.id,
                            value: t
                        })
                    }
                    Ie(null), yt(e)
                }
            }),
            Tt = P(e => B?.isCurrent() === !0 && e.appId === H && e.accountUserId === tt && e.frame === z && e.html === s && e.widgetId === w && e.candidates === Ve && He),
            Et = P(async () => {
                if (!H || !tt) return;
                let e = {
                    appId: H,
                    accountUserId: tt,
                    frame: z,
                    html: s,
                    widgetId: w,
                    candidates: Ve
                };
                Ge(!1);
                try {
                    await ct.mutateAsync({
                        app_uri: H,
                        provider_name: _t,
                        accountUserId: tt
                    }), Tt(e) && St(Ae.CHATGPT_APP_AUTOFILL_ACTION_ALWAYS_ALLOW)
                } catch {
                    Tt(e) && (Ge(!0), yt(Ae.CHATGPT_APP_AUTOFILL_ACTION_GRANT_SAVE_FAILED))
                }
            }),
            Dt = P(() => {
                He && bt(`declined`), Ie(null), yt(Ae.CHATGPT_APP_AUTOFILL_ACTION_DENIED)
            }),
            kt = P(() => {
                He && bt(`declined`), Ie(null), yt(Ae.CHATGPT_APP_AUTOFILL_ACTION_DISMISSED)
            });
        (0, Y.useEffect)(() => {
            gt && St(Ae.CHATGPT_APP_AUTOFILL_ACTION_AUTO_APPLIED)
        }, [St, gt]);
        let G = L === `fullscreen` ? `fullscreen` : L === `pip` ? `pip` : `inline`,
            At = (0, Y.useMemo)(() => Qt(d, m), [d, m]),
            K = (0, Y.useMemo)(() => xt(e), [e]),
            jt = K.device.type === `mobile` || K.device.type === `tablet` ? `mobile` : K.device.type === `desktop` ? `desktop` : `web`,
            Mt = (0, Y.useMemo)(() => {
                let e = {};
                return G === `fullscreen` ? typeof window < `u` && (e.width = window.innerWidth, e.height = window.innerHeight) : (ge == null ? me != null && (e.maxHeight = me) : e.height = ge, _e == null ? N != null && (e.maxWidth = N) : e.width = _e), Object.keys(e).length > 0 ? e : void 0
            }, [G, ge, _e, me, N]),
            Nt = (0, Y.useMemo)(() => {
                if (!(typeof Intl > `u`)) return Intl.DateTimeFormat().resolvedOptions().timeZone
            }, []),
            Pt = k ? t?.hostContext[`openai/modelContext`] : void 0,
            Ft = k ? t?.hostContext[`openai/chat`] : void 0,
            It = (0, Y.useMemo)(() => {
                let t = e === `skybridge` ? (Se ?? [`inline`, `fullscreen`]).filter(e => e === `inline` || e === `fullscreen`) : [`inline`, `fullscreen`, `pip`];
                (e !== `skybridge` || G !== `pip`) && !t.includes(G) && t.push(G);
                let n = {
                    theme: F,
                    displayMode: G,
                    availableDisplayModes: t,
                    containerDimensions: Mt,
                    locale: ye,
                    safeAreaInsets: h.insets,
                    userAgent: `chatgpt`,
                    platform: jt,
                    deviceCapabilities: {
                        touch: K.capabilities.touch,
                        hover: K.capabilities.hover
                    }
                };
                return ue && (n.toolInfo = ue), Nt && (n.timeZone = Nt), se !== void 0 && (n[`openai/deepLink`] = se), Pt !== void 0 && (n[`openai/modelContext`] = Pt), Ft !== void 0 && (n[`openai/chat`] = Ft), n
            }, [Ft, Mt, se, ye, G, Pt, e, Se, jt, h.insets, F, Nt, ue, K.capabilities.hover, K.capabilities.touch]),
            q = (0, Y.useMemo)(() => {
                if (!d || d.length === 0) return;
                let e = {},
                    t = new Set(d);
                return t.has(`camera`) && (e.camera = {}), t.has(`microphone`) && (e.microphone = {}), t.has(`geolocation`) && (e.geolocation = {}), t.has(`clipboard-write`) && (e.clipboardWrite = {}), Object.keys(e).length > 0 ? e : void 0
            }, [d]),
            J = (0, Y.useMemo)(() => {
                if (!j) return;
                let e = {};
                return j.connectDomains && j.connectDomains.length > 0 && (e.connectDomains = j.connectDomains), j.resourceDomains && j.resourceDomains.length > 0 && (e.resourceDomains = j.resourceDomains), j.frameDomains && j.frameDomains.length > 0 && (e.frameDomains = j.frameDomains), Object.keys(e).length > 0 ? e : void 0
            }, [j]),
            Lt = (0, Y.useMemo)(() => {
                let e = {
                    openLinks: {},
                    logging: {},
                    ...k ? {
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
                return (q || J) && (e.sandbox = {}, q && (e.sandbox.permissions = q), J && (e.sandbox.csp = J)), e
            }, [k, t?.forwardedRequestMethods, t?.hostCapabilities, J, q]),
            [Rt] = (0, Y.useState)(() => new Map),
            zt = P(() => {
                let e = Rt.get(F);
                return e || (e = Jt(F), e && Rt.set(F, e)), e ? {
                    ...It,
                    styles: e
                } : It
            }),
            Bt = P(() => {
                Ee?.()
            }),
            Vt = P(e => {
                Z(({
                    trackFatalWidgetError: t
                }) => t(R, e)), Bt()
            }),
            Ht = P(() => {
                we?.()
            }),
            Ut = P(() => {
                let e = R,
                    t = L,
                    n = l === !0,
                    r = performance.now(),
                    i = !1,
                    a = a => {
                        if (i) return;
                        i = !0, clearTimeout(o);
                        let s = performance.now() - r;
                        Z(({
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
            Wt = P(async (e, n, r, i) => {
                Pe(null), Ie([]), Re(null), Ge(!1);
                let a = e.runWidgetCode({
                        html: n,
                        measureWidth: c,
                        expectReadySignal: l,
                        expectedReadySignal: u,
                        isFirstParty: k && O === fe.OPENAI,
                        widgetId: w,
                        ...U ? {
                            enableAutofill: !0
                        } : {},
                        viewParams: ln({
                            displayMode: L,
                            viewParams: ae,
                            toolOutput: M ?? null
                        }),
                        widgetState: oe,
                        toolInput: ce,
                        toolOutput: M,
                        toolResponseMetadata: le,
                        subjectId: de,
                        appPackageName: S,
                        supportsOAuthCompletion: C,
                        isTombstone: pe,
                        features: At,
                        maxHeight: me ?? void 0,
                        maxWidth: N ?? void 0,
                        theme: F,
                        displayMode: L,
                        isSidebarOpen: Ce ?? !1,
                        safeArea: h,
                        userAgent: K,
                        csp: j,
                        mcpApps: {
                            forwardedRequestMethods: k ? t?.forwardedRequestMethods : void 0,
                            hostContext: zt(),
                            hostCapabilities: Lt,
                            hostInfo: {
                                name: `chatgpt`
                            }
                        }
                    }),
                    o = null;
                for await (let t of await a) {
                    if (!r()) return;
                    t.type === Be.ENVIRONMENT_STATUS && t.status === ze.RUNNING_CODE ? (i(`ready`), Ht(), Pe(t => t?.frame === e && t.html === n && t.isCurrent === r ? t : {
                        frame: e,
                        html: n,
                        expectsReadySignal: l === !0,
                        expectedReadySignal: u ?? null,
                        isCurrent: r
                    })) : t.type === Be.ERROR ? (Z(({
                        trackWidgetError: e
                    }) => e(R, t.error)), o = t.error) : t.type === Be.RUN_COMPLETE && t.wasFatalError && (i(`error`), Vt(o))
                }
            }),
            Gt = l === !0,
            Kt = u ?? null;
        (0, Y.useEffect)(() => {
            if (!z || !s) return;
            let e = !0,
                t = Ut();
            return Wt(z, s, () => e, t).catch(() => {
                e && (t(`error`), Vt(null))
            }), () => {
                e = !1, t(`aborted`)
            }
        }, [Gt, z, s, Kt, Vt, Wt, Ut]);
        let qt = (0, Y.useMemo)(() => cn(le, M), [le, M]),
            Yt = sn(le),
            Xt = {
                widgetId: w,
                widgetState: oe,
                toolInput: ce,
                toolOutput: M,
                toolResponseMetadata: le,
                subjectId: de
            },
            [Zt, $t] = (0, Y.useState)(Xt),
            [en, tn] = (0, Y.useState)(null),
            [Q, dn] = (0, Y.useState)(null);
        D(Zt, Xt) || $t(Xt);
        let $ = B?.frame === z && B.html === s && B.expectsReadySignal === Gt && B.expectedReadySignal === Kt && B.isCurrent() ? B : null;
        $ && ce && (en?.widget !== $ || en.widgetId !== w || !D(en.input, ce)) && tn({
            widget: $,
            widgetId: w,
            input: ce
        }), $ && qt && (Q?.widget !== $ || Q.widgetId !== w || !D(Q.result, qt)) && dn({
            widget: $,
            widgetId: w,
            result: qt
        }), (0, Y.useEffect)(() => {
            $ && $.frame.setWidgetData(Zt)
        }, [$, Zt]), (0, Y.useEffect)(() => {
            en?.widget.isCurrent() && en.widget.frame.notifyMcpAppsToolInput({
                arguments: en.input
            })
        }, [en]), (0, Y.useEffect)(() => {
            Q?.widget.isCurrent() && Q.widget.frame.notifyMcpAppsToolResult(Q.result)
        }, [Q]), (0, Y.useEffect)(() => {
            $ && Yt != null && $.frame.notifyMcpAppsToolCancelled({
                reason: Yt
            })
        }, [$, Yt, w]), (0, Y.useEffect)(() => {
            $ && $.frame.notifyMcpAppsHostContext({
                hostContext: zt()
            })
        }, [$, zt, It]), (0, Y.useEffect)(() => {
            if (z) return () => {
                z.requestMcpAppsResourceTeardown({
                    timeoutMs: 500
                })
            }
        }, [z]), (0, Y.useEffect)(() => {
            $ && $.frame.setWidgetView({
                widgetId: w,
                displayMode: L,
                viewParams: ln({
                    displayMode: L,
                    viewParams: ae,
                    toolOutput: M ?? null
                }),
                isTombstone: pe
            })
        }, [$, w, L, ae, M, pe]), (0, Y.useEffect)(() => {
            $ && $.frame.setAdditionalGlobals({
                additionalGlobals: {
                    isSidebarOpen: Ce ?? !1
                }
            })
        }, [$, Ce]), (0, Y.useEffect)(() => {
            $ && $.frame.setAdditionalGlobals({
                additionalGlobals: {
                    maxHeight: me,
                    maxWidth: N
                }
            })
        }, [$, me, N]), (0, Y.useEffect)(() => {
            $ && $.frame.setTheme({
                theme: F
            })
        }, [$, F]), (0, Y.useEffect)(() => {
            $ && $.frame.setSafeArea({
                safeArea: h
            })
        }, [$, h]);
        let fn = e === `skybridge` || a(`1610966033`),
            pn = P(e => n(I.callMcp)(e)),
            mn = I.scanCard ? JSON.stringify([`card-scan`, nt, w, ee ?? null, s, Gt, Kt]) : `default`,
            hn = (0, Y.useMemo)(() => ({
                frameKey: mn
            }), [mn]),
            gn = P(() => ({
                owner: hn,
                readyWidget: $,
                scanCard: I.scanCard
            })),
            _n = (0, Y.useMemo)(() => async () => {
                let e = gn();
                if (e.owner !== hn || !e.readyWidget?.isCurrent() || !e.scanCard) return {
                    status: `unavailable`
                };
                let t = await e.scanCard(),
                    n = gn();
                return n.owner === hn && n.readyWidget === e.readyWidget && e.readyWidget.isCurrent() ? t : {
                    status: `cancelled`
                }
            }, [gn, hn]),
            vn = k ? I.openPlaidLink ?? (e === `chatgpt` && O === fe.OPENAI && T === `connectors://connector_693864f100e4819093e6ed9b651239f1` ? qe : void 0) : void 0;
        return (0, X.jsxs)(X.Fragment, {
            children: [(0, X.jsx)(Ot, {
                frameComponent: De,
                title: ve,
                host: e,
                colorScheme: F,
                subdomain: re,
                features: At,
                api: {
                    ...I,
                    callMcp: I.callMcp ? pn : void 0,
                    scanCard: I.scanCard ? _n : void 0,
                    notifyIntrinsicHeight: e => I.notifyIntrinsicHeight?.(e),
                    updateWidgetState: I.updateWidgetState ? (e, t, n) => I.updateWidgetState?.(w, t, fn ? n : void 0) : void 0,
                    openPlaidLink: vn,
                    downloadBlob: k && O === fe.OPENAI ? ({
                        blob: e,
                        name: t
                    }) => {
                        ke(e, t)
                    } : void 0,
                    notifyAutofillCandidates: U ? e => {
                        He && (Re({
                            appId: H,
                            accountIdentity: nt,
                            frame: z,
                            html: s,
                            widgetId: w
                        }), Ie(e))
                    } : void 0,
                    notifyNavigation: e => {
                        Z(({
                            trackWidgetNavigation: t
                        }) => t(R, e)), I.notifyNavigation?.(e)
                    },
                    requestCheckout: I.requestCheckout ? e => (Z(({
                        trackWidgetCheckoutSession: e
                    }) => e(R)), I.requestCheckout?.(e)) : void 0,
                    requestDisplayMode: e => {
                        let {
                            mode: t
                        } = e;
                        return t !== L && Z(({
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
                        Z(({
                            trackWidgetLinkOut: e
                        }) => e(R)), await I.openExternal?.(e)
                    },
                    sendInstrument: e => {
                        Z(({
                            trackSandboxInstrument: t
                        }) => t(e, R))
                    },
                    notifySecurityPolicyViolation: e => {
                        Z(({
                            trackSecurityPolicyViolation: t
                        }) => t({
                            ...R,
                            violation: e
                        }))
                    }
                },
                iframeRef: o,
                ref: Ne,
                locale: ye
            }, mn), vt && dt && (e === `skybridge` ? (0, X.jsx)(wt, {
                appName: _t,
                user: dt,
                onAllow: () => St(),
                onAlwaysAllow: W ? Et : void 0,
                isSavingGrant: ct.isPending,
                hasGrantError: We,
                onDecline: Dt,
                onDismiss: kt
            }) : (0, X.jsx)(je, {
                for: Ct,
                withProps: {
                    appName: _t,
                    user: dt,
                    onAllow: () => St(),
                    onAlwaysAllow: W ? Et : void 0,
                    isSavingGrant: ct.isPending,
                    hasGrantError: We,
                    onDecline: Dt,
                    onDismiss: kt
                },
                open: !0,
                onClose: kt
            }))]
        })
    }, $ = e => {
        "use forget";
        let t = (0, tn.c)(11);
        if (!f(en)) {
            let n;
            return t[0] === e ? n = t[1] : (n = (0, X.jsx)(dn, {
                ...e
            }), t[0] = e, t[1] = n), n
        }
        let n = e.widgetState ?? null,
            r = e.toolInput ?? null,
            i = e.toolOutput ?? null,
            a = e.toolResponseMetadata ?? null,
            o;
        t[2] === e ? o = t[3] : (o = t => (0, X.jsx)(dn, {
            ...e
        }, t), t[2] = e, t[3] = o);
        let s;
        return t[4] !== e.widgetId || t[5] !== n || t[6] !== r || t[7] !== i || t[8] !== a || t[9] !== o ? (s = (0, X.jsx)(Gt, {
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
    rt as a, yt as i, fn as n, st as o, vt as r, W as s, $ as t
};
//# sourceMappingURL=1c86a5ac-mgxjsuxkopk8yts6.js.map