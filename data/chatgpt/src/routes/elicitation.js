const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/3660315a-oyl2b0fa4brb4jpe.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/1f58b914-m9fycvi51wda4een.js", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/global-modals-njebr7y8.css", "assets/8d846022-bvik3sltoydb2o43.js", "assets/2ea88c7a-lxyla91xs6iv7odf.js", "assets/ed7002b4-d89e0f6uhka4yjsm.js", "assets/1c86a5ac-g8o3s7m87lyivalf.js", "assets/84983163-orsf8gtwr7u5m8c9.js", "assets/25a66342-dd6xm32a19d6mzzc.js", "assets/25a66342-j7cd8h2bqav7weve.js", "assets/7517017f-jp4wwufska9j7a9v.js", "assets/6601bf01-l2hvb3ulv1nxkphc.js", "assets/d86ca127-egzeslkv8nixb7zu.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AE as n,
    AT as r,
    Ait as i,
    B6 as a,
    Ch as o,
    Gat as s,
    Irt as c,
    J$ as l,
    J0 as u,
    Mx as d,
    Nrt as f,
    O0 as p,
    OE as m,
    Pit as h,
    QG as g,
    Qit as _,
    RU as v,
    Sh as y,
    Srt as b,
    T0 as x,
    Wat as S,
    Y2 as C,
    Z2 as w,
    ZG as ee,
    _E as T,
    a7 as te,
    dw as E,
    dz as D,
    fw as O,
    fz as k,
    i5 as A,
    iat as j,
    kT as ne,
    l7 as M,
    not as N,
    o1 as re,
    pE as P,
    prt as ie,
    q0 as F,
    rot as I,
    sE as ae,
    u1 as oe,
    zU as se,
    zrt as ce,
    zx as le
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as ue,
    Bn as L,
    Ht as de,
    Ln as fe,
    N as pe,
    Nn as R,
    O as me,
    Rn as he,
    Ut as ge,
    Vn as _e,
    cn as ve,
    ln as ye,
    s as be,
    wn as z,
    zn as xe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    FMt as Se,
    Gwn as Ce,
    Hst as we,
    IMt as Te,
    Vst as Ee,
    Wwn as De,
    _at as Oe,
    cPn as ke,
    eit as Ae,
    ewt as je,
    fat as Me,
    nwt as Ne,
    oPn as Pe,
    qrt as Fe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $x as Ie,
    Fv as Le,
    Iv as Re,
    Lv as ze,
    Qx as Be,
    Rv as Ve,
    _b as He,
    bC as Ue,
    xC as We,
    yb as Ge
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    AS as B,
    BS as V,
    FS as H,
    PS as Ke,
    RS as qe,
    SS as Je,
    US as Ye,
    VS as Xe,
    bS as Ze,
    dS as Qe,
    gS as $e,
    xS as et,
    zS as tt
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    _ as nt,
    b as rt,
    d as it,
    f as at,
    g as ot,
    h as st,
    n as ct,
    p as lt,
    r as ut,
    u as dt,
    v as ft,
    y as pt
} from "./82782bc9-h658ejxn3ufkvr7a.js";
import {
    Au as mt,
    Ju as ht,
    Ku as gt,
    by as _t,
    ey as vt,
    ju as yt
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    t as bt
} from "./343cb406-d69bck6k47arlhci.js";
import {
    n as xt,
    r as St
} from "./1c5ccd89-jo3vzhcrv0ka5cte.js";
import {
    n as Ct,
    t as U
} from "./1dc5ae5b-j0yhqp9n3qqw7x37.js";
import {
    i as wt,
    n as Tt,
    o as Et,
    s as Dt,
    t as W
} from "./1f58b914-m9fycvi51wda4een.js";

function Ot(e) {
    let t = window.location.hostname.toLowerCase();
    if (t === `localhost` || t === `127.0.0.1`) return `ws://localhost:8098/`;
    if (t === `chatgpt.com` || t.endsWith(`.chatgpt.com`)) return `wss://codex-cloud-backend.chatgpt.com/`;
    if (e != null) return e;
    throw Error(`Unsupported host for Codex connection.`)
}
async function kt(e) {
    return N() ?? (await ce({
        reason: e,
        method: `GET`,
        path: `/backend-api/conversation`
    }), N())
}
var At, jt, Mt, Nt, Pt, Ft, It = e((() => {
        f(), ut(), s(), At = `codex-app-server`, jt = `openai-bearer.`, Mt = 2e4, Nt = ct(e => typeof e == `object` && !!e && !Array.isArray(e)), Pt = st(Nt, it({
            error: at(st(Nt, it({
                message: at(ft())
            }))),
            id: at(pt([dt(), ft()])),
            result: at(rt())
        })), Ft = class {
            constructor(e) {
                S(this, `options`, void 0), S(this, `socket`, null), S(this, `socketPromise`, null), S(this, `nextRequestId`, 0), S(this, `pendingRequests`, new Map), S(this, `onServerMessage`, void 0), S(this, `onDisconnect`, void 0), S(this, `onConnecting`, void 0), this.options = e
            }
            close() {
                this.socket?.close(), this.socket = null, this.socketPromise = null, this.rejectPendingRequests(Error(`${this.options.serviceTitle} connection closed.`))
            }
            async request(e, t) {
                let n = await this.connect(),
                    r = `${this.options.clientInfo.name}-${++this.nextRequestId}`;
                return await new Promise((i, a) => {
                    let o = window.setTimeout(() => {
                        this.pendingRequests.delete(r), a(Error(`Timed out waiting for ${e}.`))
                    }, Mt);
                    this.pendingRequests.set(r, {
                        reject: a,
                        resolve: i,
                        timeoutId: o
                    }), n.send(JSON.stringify({
                        id: r,
                        method: e,
                        params: t
                    }))
                })
            }
            async connect() {
                if (this.socket?.readyState === WebSocket.OPEN) return this.socket;
                if (this.socketPromise != null) return await this.socketPromise;
                let e = this.initializeSocket();
                return this.socketPromise = e, await e.then(e => (this.socketPromise = null, e), e => {
                    throw this.socketPromise = null, e
                })
            }
            async initializeSocket() {
                let e = await kt(this.options.accessTokenRefreshReason);
                if (e == null) throw Error(`A ChatGPT login is required to connect to the ${this.options.serviceName}.`);
                let t = new WebSocket(Ot(this.options.stagingUrl), [At, `${jt}${e}`]);
                return this.onConnecting?.(t), await new Promise((e, n) => {
                    let r = `${this.options.clientInfo.name}-initialize-${++this.nextRequestId}`,
                        i = !1,
                        a = window.setTimeout(() => {
                            t.close(), n(Error(`Timed out connecting to the ${this.options.serviceName}.`))
                        }, Mt);
                    t.onopen = () => {
                        t.send(JSON.stringify({
                            id: r,
                            method: `initialize`,
                            params: {
                                clientInfo: this.options.clientInfo,
                                capabilities: {
                                    experimentalApi: !0
                                }
                            }
                        }))
                    }, t.onmessage = o => {
                        try {
                            let s = JSON.parse(String(o.data)),
                                c = lt(Pt, s);
                            if (c.id === r) {
                                if (window.clearTimeout(a), c.error != null) {
                                    n(Error(c.error.message ?? `${this.options.serviceTitle} connection failed.`)), t.close();
                                    return
                                }
                                i = !0, this.socket = t, t.send(JSON.stringify({
                                    method: `initialized`
                                })), e(t);
                                return
                            }
                            if (typeof c.id != `string`) {
                                this.onServerMessage?.(s);
                                return
                            }
                            let l = this.pendingRequests.get(c.id);
                            if (l == null) {
                                this.onServerMessage?.(s);
                                return
                            }
                            window.clearTimeout(l.timeoutId), this.pendingRequests.delete(c.id), c.error == null ? l.resolve(c.result) : l.reject(Error(c.error.message ?? `${this.options.serviceTitle} request failed.`))
                        } catch (e) {
                            i || (window.clearTimeout(a), n(e instanceof Error ? e : Error(`Invalid ${this.options.serviceName} response.`)))
                        }
                    }, t.onerror = () => {
                        window.clearTimeout(a), n(Error(`Could not connect to the ${this.options.serviceName}.`))
                    }, t.onclose = () => {
                        window.clearTimeout(a), this.socket === t && (this.socket = null), this.rejectPendingRequests(Error(`${this.options.serviceTitle} disconnected.`)), i || n(Error(`${this.options.serviceTitle} disconnected during setup.`)), this.onDisconnect?.()
                    }
                })
            }
            rejectPendingRequests(e) {
                for (let t of this.pendingRequests.values()) window.clearTimeout(t.timeoutId), t.reject(e);
                this.pendingRequests.clear()
            }
        }
    })),
    Lt, Rt, zt = e((() => {
        It(), ut(), s(), Lt = it({
            id: at(pt([dt(), ft()])),
            method: ft(),
            params: at(ot(ft(), rt()))
        }), Rt = class extends Ft {
            constructor(e = {}) {
                super({
                    clientInfo: {
                        name: `chatgpt-web`,
                        title: `ChatGPT web`,
                        version: `1.0.0`
                    },
                    serviceName: `Codex service`,
                    serviceTitle: `Codex`,
                    accessTokenRefreshReason: `codex_rpc_missing_access_token`,
                    stagingUrl: void 0
                }), S(this, `events`, void 0), S(this, `closed`, !1), S(this, `connectingSocket`, null), S(this, `serverRequests`, new Set), S(this, `onConnecting`, e => {
                    this.connectingSocket = e, this.closed && e.close()
                }), S(this, `onServerMessage`, e => {
                    if (this.closed) return;
                    let t = nt(Lt, e);
                    if (!t.success) return;
                    let n = t.output;
                    n.id != null && this.serverRequests.add(n.id);
                    let r = n.params?.requestId;
                    n.method === `serverRequest/resolved` && (typeof r == `string` || typeof r == `number`) && this.serverRequests.delete(r), this.events.onServerMessage?.(n)
                }), S(this, `onDisconnect`, () => {
                    this.connectingSocket = null, this.serverRequests.clear(), this.closed || this.events.onDisconnect?.()
                }), this.events = e
            }
            resumeThread(e) {
                return this.request(`thread/resume`, {
                    threadId: e,
                    excludeTurns: !0
                })
            }
            hasPendingServerRequest(e) {
                return this.socket?.readyState === WebSocket.OPEN && this.serverRequests.has(e)
            }
            respondToElicitation(e, t) {
                if (!this.hasPendingServerRequest(e)) throw Error(`Request unavailable`);
                this.socket?.send(JSON.stringify({
                    id: e,
                    result: {
                        action: t,
                        content: t === `accept` ? {} : null,
                        _meta: null
                    }
                })), this.serverRequests.delete(e)
            }
            close() {
                this.closed = !0, this.serverRequests.clear(), this.connectingSocket?.close(), this.connectingSocket = null, super.close()
            }
            async connect() {
                if (this.closed) throw Error(`Connection closed.`);
                let e = await super.connect();
                if (this.connectingSocket = null, this.closed) throw e.close(), Error(`Connection closed.`);
                return e
            }
        }
    })),
    Bt, Vt, Ht, G, Ut, Wt = e((() => {
        Bt = z(), Vt = bt(), Ht = t(_e()), he(), We(), Re(), Ge(), Be(), Ne(), G = L(), Ut = e => {
            "use forget";
            let t = (0, Bt.c)(33),
                {
                    browserAuth: n,
                    status: r,
                    headingId: i,
                    children: a
                } = e,
                o = r === void 0 ? `pending` : r,
                [s, c] = (0, Ht.useState)(!1),
                l = n.crossOriginIframe?.origin ?? n.origin,
                u;
            if (t[0] !== n.crossOriginIframe || t[1] !== n.origin || t[2] !== a || t[3] !== s || t[4] !== i || t[5] !== l || t[6] !== o) {
                let e = new URL(l).hostname,
                    r = (0, Vt.parse)(e),
                    d = `domain` in r && r.listed && r.domain ? r.domain : e,
                    f = l.lastIndexOf(d),
                    p;
                t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, G.jsx)(`span`, {
                    className: `border-token-border-light flex size-14 items-center justify-center rounded-xl border`,
                    children: (0, G.jsx)(Ue, {
                        className: `size-12`
                    })
                }), t[8] = p) : p = t[8];
                let m;
                t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, G.jsx)(`span`, {
                    className: `bg-token-border-light size-1.5 rounded-full`
                }), t[9] = m) : m = t[9];
                let h;
                t[10] === o ? h = t[11] : (h = o === `pending` ? (0, G.jsx)(`span`, {
                    className: `bg-token-border-light size-1.5 rounded-full`
                }) : (0, G.jsx)(Le, {
                    className: `icon text-token-text-status-success`
                }), t[10] = o, t[11] = h);
                let g;
                t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, G.jsx)(`span`, {
                    className: `bg-token-border-light size-1.5 rounded-full`
                }), t[12] = g) : g = t[12];
                let _;
                t[13] === h ? _ = t[14] : (_ = (0, G.jsxs)(`span`, {
                    className: `flex items-center gap-1`,
                    children: [m, h, g]
                }), t[13] = h, t[14] = _);
                let v;
                t[15] !== s || t[16] !== l ? (v = (0, G.jsx)(`span`, {
                    className: `border-token-border-light flex size-14 items-center justify-center overflow-hidden rounded-xl border`,
                    children: s ? (0, G.jsx)(He, {
                        className: `icon-sm text-token-text-tertiary shrink-0`
                    }) : (0, G.jsx)(je, {
                        url: l,
                        size: 32,
                        className: `size-8 shrink-0 rounded-sm`,
                        fallback: (0, G.jsx)(He, {
                            className: `icon-sm text-token-text-tertiary shrink-0`
                        }),
                        onLoad: e => {
                            (e.currentTarget.naturalWidth < 32 || e.currentTarget.naturalHeight < 32) && c(!0)
                        },
                        onError: () => c(!0)
                    })
                }), t[15] = s, t[16] = l, t[17] = v) : v = t[17];
                let y;
                t[18] !== _ || t[19] !== v ? (y = (0, G.jsxs)(`div`, {
                    "aria-hidden": `true`,
                    className: `flex items-center gap-3`,
                    children: [p, _, v]
                }), t[18] = _, t[19] = v, t[20] = y) : y = t[20];
                let b = o === `pending` ? (0, G.jsx)(R, {
                        id: `chatgpt.codex_mcp_elicitation.browser_auth.page.title`,
                        defaultMessage: `Sign in to {site}`,
                        values: {
                            site: d
                        }
                    }) : o === `accepted` ? (0, G.jsx)(R, {
                        id: `chatgpt.codex_mcp_elicitation.browser_auth.page.signing_in`,
                        defaultMessage: `Signing in to {site}`,
                        values: {
                            site: d
                        }
                    }) : (0, G.jsx)(R, {
                        id: `chatgpt.codex_mcp_elicitation.browser_auth.page.skipped`,
                        defaultMessage: `Sign-in skipped`
                    }),
                    x;
                t[21] !== i || t[22] !== b ? (x = (0, G.jsx)(`h1`, {
                    id: i,
                    className: `text-token-text-primary text-heading-app font-normal break-words`,
                    children: b
                }), t[21] = i, t[22] = b, t[23] = x) : x = t[23];
                let S;
                t[24] === o ? S = t[25] : (S = o === `pending` ? null : (0, G.jsx)(`p`, {
                    className: `text-token-text-secondary text-sm`,
                    children: (0, G.jsx)(R, {
                        id: `elicitation.status.returnToConversation`,
                        defaultMessage: `You can return to your conversation`
                    })
                }), t[24] = o, t[25] = S);
                let C;
                t[26] !== x || t[27] !== S ? (C = (0, G.jsxs)(`div`, {
                    className: `flex min-w-0 flex-col gap-2`,
                    children: [x, S]
                }), t[26] = x, t[27] = S, t[28] = C) : C = t[28];
                let w;
                t[29] !== a || t[30] !== C || t[31] !== y ? (w = (0, G.jsxs)(`div`, {
                    className: `flex min-w-0 flex-col items-center gap-6`,
                    children: [a, y, C]
                }), t[29] = a, t[30] = C, t[31] = y, t[32] = w) : w = t[32], u = (0, G.jsxs)(`div`, {
                    className: `flex min-w-0 flex-col items-center gap-4 text-center`,
                    children: [w, o === `pending` ? (0, G.jsxs)(`div`, {
                        className: `text-token-text-secondary min-w-0 text-sm`,
                        children: [(0, G.jsxs)(`span`, {
                            className: `min-w-0 break-all`,
                            dir: `ltr`,
                            children: [l.startsWith(`https://`) ? (0, G.jsx)(Ie, {
                                className: `icon-xs me-1 inline-block align-middle`
                            }) : null, l.slice(0, f), (0, G.jsx)(`span`, {
                                className: `text-token-text-primary`,
                                children: d
                            }), l.slice(f + d.length)]
                        }), n.crossOriginIframe == null ? null : (0, G.jsx)(`div`, {
                            className: `mt-1 flex min-w-0 flex-wrap gap-x-1`,
                            children: (0, G.jsx)(R, {
                                id: `chatgpt.codex_mcp_elicitation.browser_auth.embedding_page.subtitle`,
                                defaultMessage: `Embedded on {origin}`,
                                values: {
                                    origin: (0, G.jsx)(`span`, {
                                        className: `min-w-0 break-all`,
                                        dir: `ltr`,
                                        children: n.origin
                                    })
                                }
                            })
                        })]
                    }) : null]
                }), t[0] = n.crossOriginIframe, t[1] = n.origin, t[2] = a, t[3] = s, t[4] = i, t[5] = l, t[6] = o, t[7] = u
            } else u = t[7];
            return u
        }
    }));

function Gt() {
    return new Set
}

function Kt(e) {
    return e.clear()
}

function qt(e) {
    return e.hasValue()
}

function Jt(e) {
    return !e.required || e.hasValue()
}

function Yt(e) {
    return (0, q.jsx)(`a`, {
        className: `text-token-interactive-label-accent-default`,
        href: `https://help.openai.com/articles/20001280`,
        rel: `noopener noreferrer`,
        target: `_blank`,
        children: e
    })
}
var Xt, K, q, Zt, Qt, J, $t = e((() => {
        Xt = z(), K = t(_e()), he(), Qe(), r(), O(), o(), Ve(), we(), M(), Wt(), q = L(), Zt = $e([`submitted`, `declined`, `cancelled`, `unavailable`, `expired`, `origin_changed`, `page_changed`, `locator_invalid`, `submission_failed`]), Qt = e => {
            "use forget";
            let t = (0, Xt.c)(14),
                {
                    browserAuth: n,
                    threadId: r,
                    canRespond: i,
                    onRespond: a,
                    responding: o
                } = e,
                s = o !== void 0 && o,
                c = xe(),
                l = (0, K.useId)(),
                u = (0, K.useRef)(new Map),
                d = (0, K.useRef)(!1),
                f = (0, K.useRef)(null),
                [p, m] = (0, K.useState)(`ready`),
                [h, g] = (0, K.useState)(),
                [_, v] = (0, K.useState)(!1),
                [b, x] = (0, K.useState)(Gt),
                S = s || p === `submitting`,
                C = n.options?.find(e => {
                    let {
                        id: t
                    } = e;
                    return t === h
                }),
                w = n.options != null && C == null,
                ee = n.options == null ? n.fields : n.fields.filter(e => {
                    let {
                        id: t
                    } = e;
                    return C?.fieldIds.includes(t)
                }),
                T = () => {
                    u.current.forEach(Kt), v(!1), x(new Set)
                },
                D = async (e, t) => {
                    let o = t === void 0 ? C : t;
                    if (e.preventDefault(), e.stopPropagation(), !i() || d.current || S) return;
                    if (n.options != null && o == null) {
                        m(`error`);
                        return
                    }
                    let s = [];
                    d.current = !0;
                    try {
                        for (let e of n.fields) {
                            if (o != null && !o.fieldIds.includes(e.id)) continue;
                            let t = u.current.get(e.id);
                            if (t == null) {
                                m(`error`), d.current = !1;
                                return
                            }
                            let n = await t.read();
                            if (n == null || t !== u.current.get(e.id) || !i()) {
                                d.current = !1;
                                return
                            }
                            n && s.push([e.id, {
                                value: n
                            }])
                        }
                        if (!i()) {
                            d.current = !1;
                            return
                        }
                        m(`submitting`);
                        let e = await te.safePost(`/flora/browser/form-fill`, {
                                requestBody: {
                                    conversation_id: r,
                                    challenge_id: n.challengeId,
                                    selected_option: o?.id,
                                    fields: Object.fromEntries(s)
                                }
                            }),
                            t = Zt.safeParse(e.status);
                        if (!t.success) {
                            T(), m(`error`), d.current = !1;
                            return
                        }
                        i() && (t.data === `submitted` ? a(`accept`) : a(`decline`, `unavailable`))
                    } catch {
                        T(), m(`error`)
                    }
                    d.current = !1
                }, O = S ? J.sending : J.submit, k;
            t[0] === O ? k = t[1] : (k = (0, q.jsx)(R, {
                ...O
            }), t[0] = O, t[1] = k);
            let A = (0, q.jsx)(ne, {
                    ref: f,
                    type: `button`,
                    color: `primary`,
                    size: `large`,
                    fullWidth: !0,
                    disabled: !_ || S,
                    onClick: e => void D(e),
                    children: k
                }),
                j = n.options != null || _ || S ? J.cancel : J.skip,
                M;
            t[2] === j ? M = t[3] : (M = (0, q.jsx)(R, {
                ...j
            }), t[2] = j, t[3] = M);
            let N = (0, q.jsx)(ne, {
                    type: `button`,
                    color: `secondary`,
                    size: `large`,
                    fullWidth: !0,
                    disabled: S,
                    onClick: () => {
                        i() && (T(), a(`decline`))
                    },
                    children: M
                }),
                re = C == null ? null : (0, q.jsx)(E, {
                    type: `button`,
                    disabled: S,
                    onClick: () => {
                        T(), m(`ready`), g(void 0)
                    }
                }),
                P;
            t[4] !== n || t[5] !== l || t[6] !== re ? (P = (0, q.jsx)(Ut, {
                browserAuth: n,
                headingId: l,
                children: re
            }), t[4] = n, t[5] = l, t[6] = re, t[7] = P) : P = t[7];
            let ie = w ? (0, q.jsx)(`div`, {
                    className: `flex flex-col`,
                    children: n.options?.map(e => (0, q.jsx)(ne, {
                        type: `button`,
                        color: `secondary`,
                        size: `large`,
                        fullWidth: !0,
                        disabled: S,
                        onClick: t => {
                            T(), m(`ready`), e.fieldIds.length === 0 ? D(t, e) : g(e.id)
                        },
                        children: e.label
                    }, e.id))
                }) : (0, q.jsx)(`div`, {
                    className: `flex min-w-0 flex-col gap-3`,
                    children: ee.map(e => (0, q.jsxs)(`div`, {
                        className: `border-token-border-light focus-within:border-token-border-heavy flex h-14 min-w-0 items-center rounded-2xl border px-4 transition-colors`,
                        children: [(0, q.jsxs)(`label`, {
                            className: `flex h-full min-w-0 flex-1 items-center`,
                            children: [(0, q.jsx)(`span`, {
                                className: `sr-only`,
                                children: e.label
                            }), (0, q.jsx)(Ee, {
                                ref: t => {
                                    t == null ? u.current.delete(e.id) : u.current.set(e.id, t)
                                },
                                className: `placeholder:text-token-text-tertiary/70 text-token-text-primary h-full w-full border-0 bg-transparent p-0 text-base outline-none focus:ring-0`,
                                field: e,
                                revealed: b.has(e.id),
                                disabled: S,
                                onChange: () => {
                                    let e = Array.from(u.current.values());
                                    v(e.some(qt) && e.every(Jt))
                                },
                                onSubmit: () => f.current?.click()
                            })]
                        }), e.type === `password` ? (0, q.jsx)(`button`, {
                            type: `button`,
                            "aria-label": c.formatMessage(b.has(e.id) ? J.hidePassword : J.showPassword),
                            "aria-pressed": b.has(e.id),
                            className: `interactive-button text-token-text-tertiary hover:text-token-text-primary flex size-9 shrink-0 items-center justify-center rounded-lg bg-transparent p-0 hover:bg-transparent`,
                            disabled: S,
                            onClick: () => x(t => {
                                let n = new Set(t);
                                return n.has(e.id) ? n.delete(e.id) : n.add(e.id), n
                            }),
                            children: b.has(e.id) ? (0, q.jsx)(ze, {
                                "aria-hidden": `true`,
                                className: `icon`
                            }) : (0, q.jsx)(y, {
                                "aria-hidden": `true`,
                                className: `icon`
                            })
                        }) : null]
                    }, e.id))
                }),
                F;
            t[8] === p ? F = t[9] : (F = p === `error` ? (0, q.jsx)(`p`, {
                className: `text-token-text-error text-sm`,
                role: `alert`,
                children: (0, q.jsx)(R, {
                    ...J.error
                })
            }) : null, t[8] = p, t[9] = F);
            let I;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, q.jsx)(`p`, {
                className: `text-token-text-secondary w-full text-sm`,
                children: (0, q.jsx)(R, {
                    id: `chatgpt.codex_mcp_elicitation.browser_auth.form.credential_security_disclosure`,
                    defaultMessage: `ChatGPT securely handles your credentials and keeps you signed in. Your password isn't stored. <link>Learn more</link>`,
                    values: {
                        link: Yt
                    }
                })
            }), t[10] = I) : I = t[10];
            let ae;
            return t[11] !== ie || t[12] !== F ? (ae = (0, q.jsxs)(`div`, {
                className: `flex flex-col gap-6`,
                children: [ie, F, I]
            }), t[11] = ie, t[12] = F, t[13] = ae) : ae = t[13], (0, q.jsxs)(`section`, {
                "aria-labelledby": l,
                "aria-busy": S,
                "data-dd-privacy": `mask`,
                className: `relative flex w-full flex-1 flex-col justify-evenly gap-6`,
                children: [P, ae, (0, q.jsxs)(`div`, {
                    className: `bg-token-main-surface-primary pb-safe-bottom-4 sticky bottom-0 flex w-full shrink-0 flex-col gap-3 pt-4`,
                    children: [A, N]
                })]
            })
        }, J = fe({
            error: {
                id: `chatgpt.codex_mcp_elicitation.browser_auth.page.error`,
                defaultMessage: `Something went wrong. Please try again.`
            },
            sending: {
                id: `chatgpt.codex_mcp_elicitation.browser_auth.form.button.sending`,
                defaultMessage: `Sending…`
            },
            submit: {
                id: `chatgpt.codex_mcp_elicitation.browser_auth.page.button.sign_in`,
                defaultMessage: `Sign in`
            },
            cancel: {
                id: `chatgpt.codex_mcp_elicitation.browser_auth.form.button.cancel`,
                defaultMessage: `Cancel`
            },
            skip: {
                id: `chatgpt.codex_mcp_elicitation.browser_auth.form.button.skip`,
                defaultMessage: `Skip`
            },
            showPassword: {
                id: `chatgpt.codex_mcp_elicitation.browser_auth.form.button.show_password`,
                defaultMessage: `Show password`
            },
            hidePassword: {
                id: `chatgpt.codex_mcp_elicitation.browser_auth.form.button.hide_password`,
                defaultMessage: `Hide password`
            }
        })
    })),
    en, Y, X, tn, nn = e((() => {
        en = z(), he(), k(), se(), Y = L(), X = e => {
            "use forget";
            let t = (0, en.c)(16),
                {
                    status: n,
                    children: r
                } = e;
            if (n === `connecting`) {
                let e;
                t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(D, {
                    className: `icon text-token-text-secondary`
                }), t[0] = e) : e = t[0];
                let n;
                return t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Y.jsxs)(`div`, {
                    role: `status`,
                    className: `my-auto flex justify-center`,
                    children: [e, (0, Y.jsx)(`span`, {
                        className: `sr-only`,
                        children: (0, Y.jsx)(R, {
                            ...tn.connecting
                        })
                    })]
                }), t[1] = n) : n = t[1], n
            }
            if (n !== `completed`) {
                let e = tn[n],
                    i;
                t[2] === e ? i = t[3] : (i = (0, Y.jsx)(`p`, {
                    role: `status`,
                    children: (0, Y.jsx)(R, {
                        ...e
                    })
                }), t[2] = e, t[3] = i);
                let a;
                return t[4] !== r || t[5] !== i ? (a = (0, Y.jsxs)(Y.Fragment, {
                    children: [i, r]
                }), t[4] = r, t[5] = i, t[6] = a) : a = t[6], a
            }
            let i;
            t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Y.jsx)(v, {
                "aria-hidden": `true`,
                className: `text-token-text-primary size-12`
            }), t[7] = i) : i = t[7];
            let a = tn[n],
                o;
            t[8] === a ? o = t[9] : (o = (0, Y.jsx)(`h1`, {
                className: `text-heading-app text-token-text-primary font-normal`,
                children: (0, Y.jsx)(R, {
                    ...a
                })
            }), t[8] = a, t[9] = o);
            let s;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Y.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, Y.jsx)(R, {
                    ...tn.returnToConversation
                })
            }), t[10] = s) : s = t[10];
            let c;
            t[11] === o ? c = t[12] : (c = (0, Y.jsxs)(`div`, {
                role: `status`,
                className: `flex w-full flex-col items-center gap-6`,
                children: [i, (0, Y.jsxs)(`div`, {
                    className: `flex w-full flex-col gap-2`,
                    children: [o, s]
                })]
            }), t[11] = o, t[12] = c);
            let l;
            return t[13] !== r || t[14] !== c ? (l = (0, Y.jsxs)(`section`, {
                className: `my-auto flex w-full flex-col items-center gap-6 text-center`,
                children: [c, r]
            }), t[13] = r, t[14] = c, t[15] = l) : l = t[15], l
        }, tn = fe({
            connecting: {
                id: `elicitation.page.connecting`,
                defaultMessage: `Connecting to your request…`
            },
            responding: {
                id: `elicitation.page.responding`,
                defaultMessage: `Sending your response…`
            },
            completed: {
                id: `elicitation.status.completed`,
                defaultMessage: `Response received`
            },
            unavailable: {
                id: `elicitation.page.unavailable`,
                defaultMessage: `This request is no longer available. It may already be answered or cancelled.`
            },
            unsupported: {
                id: `elicitation.page.unsupported`,
                defaultMessage: `Open the app to answer this request.`
            },
            returnToConversation: {
                id: `elicitation.status.returnToConversation`,
                defaultMessage: `You can return to your conversation`
            }
        })
    }));

function rn(e) {
    let t = qe(V(), Ye()).safeParse(e._meta);
    if (e.mode !== `form` || !t.success || Object.keys(t.data).some(e => e.startsWith(`webauthn_`) || e.startsWith(`qr_code`))) return null;
    let n = sn.safeParse(t.data);
    if (!n.success) return null;
    let r = n.data;
    if (r.fields.length === 0 && !r.options?.length || r.cross_origin_iframe != null && r.cross_origin_iframe.origin !== r.frame_origin) return null;
    let i = r.frame_origin ?? r.origin;
    return {
        challengeId: r.browser_auth_challenge_id,
        origin: r.origin,
        registrableDomain: new URL(r.origin).hostname,
        crossOriginIframe: i === r.origin ? void 0 : {
            origin: i,
            registrableDomain: new URL(i).hostname
        },
        reason: r.reason,
        fields: r.fields.map(e => ({
            ...e,
            autocomplete: e.autocomplete ?? null
        })),
        options: r.options
    }
}
var an, on, sn, cn, ln = e((() => {
    Qe(), an = V().regex(/^[A-Za-z0-9_-]{1,48}$/).refine(e => e !== `__proto__` && e !== `constructor` && e !== `prototype`), on = V().url().refine(e => {
        let t = new URL(e);
        return (t.protocol === `https:` || t.protocol === `http:`) && t.origin === e
    }), sn = H({
        codex_approval_kind: B(`browser_auth`),
        browser_auth_challenge_id: V().regex(/^[A-Za-z0-9_-]{32,128}$/),
        fields: Ze(H({
            autocomplete: V().nullish(),
            id: an,
            label: V(),
            required: et(),
            type: $e([`email`, `number`, `password`, `search`, `tel`, `text`, `url`])
        })).max(6),
        options: Ze(H({
            field_ids: Ze(an).max(6),
            id: an,
            label: V().trim().min(1).max(120)
        }).transform(({
            field_ids: e,
            ...t
        }) => ({
            ...t,
            fieldIds: e
        }))).max(10).optional(),
        origin: on,
        frame_origin: on.optional(),
        cross_origin_iframe: H({
            origin: on
        }).optional(),
        reason: V()
    }), cn = H({
        thread_id: Je(e => V().uuid().safeParse(e).success),
        request_id: V().min(1).max(512)
    })
}));

function un(e) {
    if (e.mode === `url` && e.serverName === `codex_apps`) {
        let t = H({
            url: V().url().refine(e => {
                let t = new URL(e);
                return t.protocol === `https:` && !t.username && !t.password && [`chatgpt.com`, `chatgpt-staging.com`].some(e => t.hostname === e || t.hostname.endsWith(`.${e}`))
            }),
            _meta: H({
                _codex_apps: H({
                    connector_auth_failure: dn
                })
            })
        }).safeParse(e);
        return t.success ? {
            kind: `connector`,
            auth: t.data._meta._codex_apps.connector_auth_failure
        } : null
    }
    if (e.mode === `form`) {
        let t = qe(V(), Ye()).safeParse(e._meta);
        if (!t.success) return null;
        switch (t.data.codex_approval_kind) {
            case `browser_auth`: {
                let t = rn(e);
                return t == null ? null : {
                    kind: `browser_auth`,
                    browserAuth: t
                }
            }
            case `tool_suggestion`: {
                let t = fn.safeParse(e._meta);
                return t.success ? {
                    kind: `plugin`,
                    suggestion: t.data
                } : null
            }
        }
    }
    return null
}
var dn, fn, pn = e((() => {
    Qe(), ln(), dn = H({
        is_auth_failure: B(!0),
        connector_id: V().min(1),
        connector_name: V(),
        auth_reason: $e([`missing_link`, `oauth_upgrade_required`, `reauthentication_required`]).optional(),
        link_id: V().min(1).optional(),
        requested_scopes: Ze(V().trim().min(1)).optional(),
        connection_consent: H({
            type: B(`consent`),
            origin: V().url(),
            connection_id: V().min(1).max(255),
            scopes: Ze(H({
                scope: V(),
                label: V().min(1)
            }))
        }).optional()
    }), fn = H({
        codex_approval_kind: B(`tool_suggestion`),
        tool_type: $e([`connector`, `plugin`]),
        suggest_type: $e([`install`, `enable`]),
        tool_id: V().min(1),
        tool_name: V(),
        suggest_reason: V(),
        remote_plugin_id: V().trim().min(1).optional()
    })
}));
async function mn(e, t, n) {
    let r = new Map(Object.entries(await Pe(!0, De.CONNECTOR_SETTING, void 0, t))),
        i = await P(n, e.connector_id, {
            productSku: De.CONNECTOR_SETTING,
            staleTime: 0
        });
    return {
        connector: i,
        ready: i.status !== `DISABLED_BY_ADMIN` && m(r, e.connector_id)?.some(t => {
            let n = d(t.scopes);
            return t.auth_status === `ACTIVE` && (e.link_id == null || e.link_id === t.id) && [...d(e.requested_scopes)].every(e => n.has(e))
        }) === !0
    }
}
var hn, gn, Z, _n, vn, yn = e((() => {
    hn = z(), r(), b(), ht(), le(), Fe(), x(), St(), ke(), T(), Ce(), mt(), Oe(), _t(), oe(), n(), be(), gn = t(_e()), he(), Z = L(), _n = fe({
        install: {
            id: `elicitation.app.install`,
            defaultMessage: `Install`
        },
        enable: {
            id: `elicitation.app.enable`,
            defaultMessage: `Enable`
        }
    }), vn = e => {
        "use forget";
        let t = (0, hn.c)(66),
            {
                request: n,
                accountId: r,
                userId: i,
                canRespond: a,
                onRespond: o
            } = e,
            s = xe(),
            c = pe(),
            [l, u] = (0, gn.useState)(!1),
            [d, f] = (0, gn.useState)(!1),
            m = (0, gn.useRef)(null),
            h, g;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (h = () => {
            let e = new AbortController;
            return m.current = e, () => e.abort()
        }, g = [], t[0] = h, t[1] = g) : (h = t[0], g = t[1]), (0, gn.useEffect)(h, g);
        let _;
        t[2] !== r || t[3] !== s.locale || t[4] !== n || t[5] !== i ? (_ = [`elicitation-connector-setup`, i, r, n, s.locale], t[2] = r, t[3] = s.locale, t[4] = n, t[5] = i, t[6] = _) : _ = t[6];
        let v = n.kind === `connector` && n.auth.connection_consent == null,
            y;
        t[7] !== r || t[8] !== a || t[9] !== c || t[10] !== n.auth || t[11] !== n.kind ? (y = async () => {
            if (n.kind !== `connector`) return null;
            if (!a()) throw Error(`Request unavailable`);
            let e = await mn(n.auth, r, c);
            if (!a()) throw Error(`Request unavailable`);
            return e
        }, t[7] = r, t[8] = a, t[9] = c, t[10] = n.auth, t[11] = n.kind, t[12] = y) : y = t[12];
        let b;
        t[13] !== _ || t[14] !== v || t[15] !== y ? (b = {
            queryKey: _,
            enabled: v,
            queryFn: y,
            staleTime: 0
        }, t[13] = _, t[14] = v, t[15] = y, t[16] = b) : b = t[16];
        let x = me(b),
            S;
        t[17] !== a || t[18] !== l ? (S = async e => {
            if (!(l || !a())) {
                u(!0), f(!1);
                try {
                    await e()
                } catch {
                    f(!0)
                }
                u(!1)
            }
        }, t[17] = a, t[18] = l, t[19] = S) : S = t[19];
        let C = S,
            w;
        t[20] !== a || t[21] !== o || t[22] !== C || t[23] !== x ? (w = () => C(async () => {
            let e = await x.refetch();
            if (e.isError || !e.data?.ready) {
                f(!0);
                return
            }
            a() && o(`accept`)
        }), t[20] = a, t[21] = o, t[22] = C, t[23] = x, t[24] = w) : w = t[24];
        let ee = w,
            T;
        t[25] !== r || t[26] !== a || t[27] !== s || t[28] !== o || t[29] !== c || t[30] !== n || t[31] !== l ? (T = async () => {
            let e = m.current?.signal;
            if (!(n.kind !== `plugin` || l || !e || e.aborted || !a())) {
                u(!0), f(!1);
                try {
                    let {
                        suggestion: t
                    } = n, i = t.tool_type === `connector` ? await vt(t.tool_id, De.CONNECTOR_SETTING, r) : t.remote_plugin_id ?? t.tool_id;
                    if (e.aborted || !a()) return;
                    if (i == null) {
                        u(!1), f(!0);
                        return
                    }
                    await yt({
                        queryClient: c,
                        signal: e,
                        pluginId: i,
                        installAccountId: r,
                        requestContext: {
                            accountId: r,
                            platform: `chat`,
                            locale: s.locale,
                            hasWorkspace: !!re()?.getWorkspaceId()
                        },
                        pathname: window.location.pathname,
                        search: window.location.search,
                        searchParams: new URLSearchParams(window.location.search),
                        intl: s,
                        closeOnCompletion: !0,
                        onConnectionResult: t => {
                            e.aborted || !a() || (u(!1), f(t === `retryable_error` || t === `unavailable`), t === `connected` && o(`accept`))
                        }
                    })
                } catch {
                    if (e.aborted || !a()) return;
                    u(!1), f(!0)
                }
            }
        }, t[25] = r, t[26] = a, t[27] = s, t[28] = o, t[29] = c, t[30] = n, t[31] = l, t[32] = T) : T = t[32];
        let te = T;
        if (n.kind === `connector` && n.auth.connection_consent != null) return null;
        let E = x.data,
            D = n.kind === `connector` && E != null && !E.ready,
            O = n.kind === `connector` ? n.auth.connector_name : n.suggestion.tool_name,
            k = D ? `flex flex-col gap-4` : `border-token-border-default flex flex-wrap items-center gap-3 rounded-2xl border p-3`,
            A;
        t[33] !== D || t[34] !== O ? (A = !D && (0, Z.jsxs)(`div`, {
            className: `flex min-w-0 flex-1 items-center gap-3`,
            children: [(0, Z.jsx)(Me, {
                name: O,
                isNextToLabel: !0
            }), (0, Z.jsx)(`h2`, {
                className: `truncate text-base font-medium`,
                children: O
            })]
        }), t[33] = D, t[34] = O, t[35] = A) : A = t[35];
        let j;
        t[36] !== r || t[37] !== a || t[38] !== E || t[39] !== o || t[40] !== n.auth || t[41] !== C || t[42] !== D || t[43] !== l ? (j = D && (0, Z.jsx)(xt, {
            connector: E.connector,
            authReason: n.auth.auth_reason,
            loading: l,
            onProceedWithoutConnecting: () => o(`decline`),
            onConnect: () => {
                C(async () => {
                    let e = n.auth;
                    if (e.link_id != null && e.auth_reason !== `missing_link`) {
                        let t = await Ae({
                            connectorId: e.connector_id,
                            linkId: e.link_id,
                            requestedScopes: e.requested_scopes,
                            redirectAfter: window.location.pathname + window.location.search,
                            openPopup: !0,
                            signal: m.current?.signal
                        });
                        t?.success && a() ? o(`accept`) : t && f(!0)
                    } else {
                        let t = window.location.pathname + window.location.search;
                        p(gt, {
                            connectorId: e.connector_id,
                            accountId: r,
                            initialConnector: E.connector,
                            requestedScopes: e.requested_scopes,
                            productSku: De.CONNECTOR_SETTING,
                            checkInstallationPolicy: !0,
                            noRedirect: !0,
                            redirectAfter: t,
                            oauthRedirectAfter: t,
                            signal: m.current?.signal,
                            closeOnAbort: !0,
                            onComplete: () => {
                                a() && o(`accept`)
                            }
                        })
                    }
                })
            }
        }), t[36] = r, t[37] = a, t[38] = E, t[39] = o, t[40] = n.auth, t[41] = C, t[42] = D, t[43] = l, t[44] = j) : j = t[44];
        let M;
        t[45] !== E || t[46] !== d || t[47] !== n.kind || t[48] !== x.isError || t[49] !== x.isPending ? (M = (d || n.kind === `connector` && (x.isError || !x.isPending && E == null)) && (0, Z.jsx)(`p`, {
            className: `text-token-text-secondary order-last w-full text-sm`,
            role: `status`,
            children: (0, Z.jsx)(R, {
                id: `elicitation.app.setup_incomplete`,
                defaultMessage: `Setup is not complete. Finish connecting the app, then try again.`
            })
        }), t[45] = E, t[46] = d, t[47] = n.kind, t[48] = x.isError, t[49] = x.isPending, t[50] = M) : M = t[50];
        let N;
        t[51] !== ee || t[52] !== o || t[53] !== n.kind || t[54] !== n.suggestion || t[55] !== x.isFetching || t[56] !== D || t[57] !== te || t[58] !== l ? (N = !D && (0, Z.jsxs)(`div`, {
            className: `ms-auto flex shrink-0 justify-end gap-2`,
            children: [(0, Z.jsx)(ne, {
                type: `button`,
                color: `secondary`,
                onClick: () => o(`decline`),
                children: (0, Z.jsx)(R, {
                    id: `elicitation.app.not_now`,
                    defaultMessage: `Not now`
                })
            }), (0, Z.jsx)(ne, {
                type: `button`,
                color: `primary`,
                loading: l || n.kind === `connector` && x.isFetching,
                onClick: () => {
                    n.kind === `plugin` ? te() : ee()
                },
                children: (0, Z.jsx)(R, {
                    ...n.kind === `plugin` ? _n[n.suggestion.suggest_type] : ie.continueButtonText
                })
            })]
        }), t[51] = ee, t[52] = o, t[53] = n.kind, t[54] = n.suggestion, t[55] = x.isFetching, t[56] = D, t[57] = te, t[58] = l, t[59] = N) : N = t[59];
        let P;
        return t[60] !== k || t[61] !== A || t[62] !== j || t[63] !== M || t[64] !== N ? (P = (0, Z.jsxs)(`div`, {
            className: k,
            children: [A, j, M, N]
        }), t[60] = k, t[61] = A, t[62] = j, t[63] = M, t[64] = N, t[65] = P) : P = t[65], P
    }
}));

function bn(e, t) {
    let n = e.elicitation;
    return !cn.safeParse({
        thread_id: n.thread_id,
        request_id: n.request_id
    }).success || t.thread_id != null && n.thread_id !== t.thread_id || t.request_id != null && n.request_id !== t.request_id || n.turn_id != null && !n.turn_id.trim() || n.params.threadId !== n.thread_id || n.params.turnId != null && n.params.turnId !== n.turn_id ? `unavailable` : H({
        codex_approval_kind: B(`wallet_enrollment`)
    }).safeParse(n.params._meta).success ? Cn.safeParse(n.params).success && e.aeon_id.trim().length > 0 && /^[0-9a-f]{64}$/.test(e.request_fingerprint) && e.can_respond && e.runtime_status === `pending` && n.status === `pending` ? `wallet` : `unavailable` : `other`
}
var xn, Sn, Cn, wn, Tn, En = e((() => {
    Qe(), ln(), xn = cn.extend({
        room_id: V().trim().min(1).max(512),
        message_id: V().trim().min(1).max(512)
    }), Sn = xn.partial({
        thread_id: !0,
        request_id: !0
    }), Cn = H({
        mode: B(`form`),
        serverName: B(`codex_apps`),
        _meta: H({
            codex_approval_kind: B(`wallet_enrollment`)
        }),
        requestedSchema: H({
            type: B(`object`),
            properties: tt({
                registration_id: H({
                    type: B(`string`)
                })
            }),
            required: Xe([B(`registration_id`)])
        })
    }), wn = tt({
        userId: V().min(1).max(512),
        accountId: V().min(1).max(512),
        target: xn,
        requestFingerprint: V().regex(/^[0-9a-f]{64}$/)
    }), Tn = tt({
        walletAccess: H({
            userId: V(),
            accountId: V()
        }).nullable()
    })
}));

function Dn(e) {
    return [`finalize_vgs_card_registration`, `request_vgs_card_verification`, `refresh_vgs_card_verification`].includes(e)
}

function On(e, t) {
    if (!Dn(e.name) || t.isError) return !1;
    let n = kn.safeParse(e.args.registration_id);
    if (!n.success) return !1;
    if (e.name !== `finalize_vgs_card_registration`) {
        let r = jn.safeParse(t.structuredContent);
        if (!r.success || r.data.registration_id !== n.data || e.name === `refresh_vgs_card_verification` && r.data.verification_attempt_id !== e.args.verification_attempt_id || r.data.status !== `succeeded`) return !1
    }
    return An.safeParse(t.structuredContent).success
}
var kn, An, jn, Mn = e((() => {
    Qe(), kn = V().min(1).max(1024).refine(e => e.trim().length > 0), An = H({
        ok: B(!0),
        card: H({
            wallet_entry_id: V().trim().min(1),
            last4: V().regex(/^\d{4}$/),
            exp_month: Ke().int().min(1).max(12),
            exp_year: Ke().int().positive(),
            brand: V().nullable(),
            card_type: V().nullable(),
            is_default: et()
        })
    }), jn = H({
        ok: B(!0),
        registration_id: kn,
        verification_attempt_id: V().min(1),
        status: $e([`pending`, `verification_pending`, `verification_processing`, `failed`, `verification_required`, `ready_to_finalize`, `succeeded`])
    })
}));
async function Nn(e, t, n) {
    let r = Et(),
        {
            thread_id: a,
            request_id: o
        } = t,
        s = () => {
            if (n.aborted || r !== Et()) throw new W
        },
        c = e => {
            if (s(), e instanceof _ && (e.isTransportError || e.isServerError())) return null;
            throw e
        },
        l = {
            authOption: i.Required,
            additionalHeaders: ee(e),
            disableAutomaticRetry: !0,
            cache: `no-store`,
            signal: n
        };
    s();
    let u = await te.safeGet(`/cloud-aeons/by-thread/{thread_id}`, {
        ...l,
        parameters: {
            path: {
                thread_id: a
            }
        }
    }).catch(e => (s(), e instanceof _ && (e.status === 404 || e.status === 403 && e.json.detail === `orbit_access_denied`) ? null : c(e)));
    if (s(), u == null || u.messaging_room_id == null) return null;
    if (!u.messaging_room_id.trim()) throw new W;
    if (u.active_root_thread_id != null && u.active_root_thread_id !== a) return null;
    let d = u.messaging_room_id,
        f, p = new Set;
    for (let e = 0; e < Ln; e++) {
        s();
        let e = await te.safeGet(`/messaging/rooms/{room_id}/messages`, {
            ...l,
            parameters: {
                path: {
                    room_id: d
                },
                query: {
                    before: f,
                    limit: 32
                }
            }
        }).catch(c);
        if (s(), e == null) return null;
        let t = e.items.find(e => {
            if (!(`content` in e) || !(`elicitation` in e.content)) return !1;
            let t = e.content.elicitation;
            return t?.thread_id === a && t.request_id === o
        });
        if (t != null) {
            if (`deleted_at` in t && t.deleted_at != null) throw new W;
            return xn.parse({
                thread_id: a,
                request_id: o,
                room_id: d,
                message_id: t.id
            })
        }
        if (e.items.length === 0 && e.prev_cursor == null) return null;
        if (f = e.prev_cursor ?? e.items[0]?.id, !f || p.has(f)) throw new W;
        p.add(f)
    }
    return null
}

function Pn(e, t, n) {
    return te.safeGet(`/messaging/rooms/{room_id}/messages/{message_id}/elicitation`, {
        authOption: i.Required,
        parameters: {
            path: {
                room_id: t.room_id,
                message_id: t.message_id
            },
            query: {
                inspect: !0
            }
        },
        additionalHeaders: ee(e),
        disableAutomaticRetry: !0,
        cache: `no-store`,
        signal: n
    })
}
async function Fn(e, t, n, r, i) {
    let a = wn.parse({
            userId: e,
            accountId: t,
            target: {
                ...n,
                thread_id: r.elicitation.thread_id,
                request_id: r.elicitation.request_id
            },
            requestFingerprint: r.request_fingerprint
        }),
        o = await fetch(`/api/elicitation-wallet-access`, {
            method: `POST`,
            credentials: `same-origin`,
            redirect: `error`,
            cache: `no-store`,
            headers: {
                "Content-Type": `application/json`,
                ...ee(t)
            },
            body: JSON.stringify(a),
            signal: i
        });
    if (!o.ok) throw new W;
    return Tn.parse(await o.json()).walletAccess
}

function In(e, t, n, r) {
    if (bn(n, t) !== `wallet`) throw new W;
    let i = structuredClone(n),
        a = Object.freeze(xn.parse({
            ...t,
            thread_id: i.elicitation.thread_id,
            request_id: i.elicitation.request_id
        })),
        o = Object.freeze({
            threadId: i.elicitation.thread_id,
            orbitId: i.aeon_id
        }),
        s = !1,
        c = !1,
        l = !1,
        d, f = e => {
            if (r !== Et() && (s = !0), s || e.aborted) throw new W
        },
        p = async t => {
            f(t);
            let n = await Pn(e, a, t);
            if (f(t), bn(n, a) !== `wallet` || n.aeon_id !== i.aeon_id || n.request_fingerprint !== i.request_fingerprint || (n.elicitation.turn_id ?? null) !== (i.elicitation.turn_id ?? null) || !u(n.elicitation.params, i.elicitation.params)) throw s = !0, new W
        };
    return {
        accountId: e,
        context: o,
        check: p,
        async callTool(t) {
            if (f(t.signal), c || l || t.accountId !== e || d != null && t.linkId !== d) throw Error(`Finish the current Wallet operation first`);
            let n = {
                ...t,
                args: structuredClone(t.args),
                context: o,
                signal: t.name === `open_vgs_card_enrollment` ? t.signal : new AbortController().signal
            };
            c = !0;
            try {
                await p(n.signal), f(n.signal), d ??= n.linkId;
                let e = await wt(n);
                return l = On(n, e), f(n.signal), e
            } finally {
                c = !1
            }
        }
    }
}
var Ln, Rn = e((() => {
    g(), h(), j(), M(), Dt(), Tt(), Mn(), F(), En(), Ln = 10
}));

function zn() {
    return l().isLoading
}

function Bn() {
    return window.location.reload()
}
var Vn, Hn, Q, Un, Wn, Gn = e((() => {
    Vn = z(), Hn = t(_e()), r(), a(), oe(), f(), C(), Dt(), he(), Ct(), nn(), ln(), Rn(), En(), Q = L(), ye(), Un = (0, Hn.lazy)(async () => ({
        default: (await ve(async () => {
            let {
                HostedWalletEnrollmentPage: e
            } = await import(`./3660315a-oyl2b0fa4brb4jpe.js`).then(e => (e.n(), e.r));
            return {
                HostedWalletEnrollmentPage: e
            }
        }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]))).HostedWalletEnrollmentPage
    })), Wn = e => {
        "use forget";
        let t = (0, Vn.c)(20),
            {
                accountId: n,
                userId: r,
                target: i,
                children: a
            } = e,
            o = A(zn),
            s;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = {
            kind: `connecting`
        }, t[0] = s) : s = t[0];
        let [l, u] = (0, Hn.useState)(s), [d, f] = (0, Hn.useState)(!1), {
            room_id: p,
            message_id: m,
            thread_id: h,
            request_id: g
        } = i, _, v;
        if (t[1] !== n || t[2] !== o || t[3] !== m || t[4] !== g || t[5] !== p || t[6] !== h || t[7] !== r ? (_ = () => {
                if (o) return;
                let e = new AbortController,
                    t = Et(),
                    i = () => {
                        e.abort(), u({
                            kind: `unavailable`
                        })
                    },
                    a = c(i),
                    s = w(i),
                    l = () => {
                        let i = I();
                        return !e.signal.aborted && t === Et() && i?.user?.id === r && i.account?.id === n
                    };
                return (async () => {
                    try {
                        if (!l()) return i();
                        let a = p != null && m != null ? {
                            room_id: p,
                            message_id: m,
                            thread_id: h,
                            request_id: g
                        } : await Nn(n, cn.parse({
                            thread_id: h,
                            request_id: g
                        }), e.signal);
                        if (!l()) return i();
                        if (a == null) {
                            u({
                                kind: `other`
                            });
                            return
                        }
                        let o = await Pn(n, a, e.signal);
                        if (!l()) return i();
                        let s = bn(o, a);
                        if (s !== `wallet`) {
                            u({
                                kind: s
                            });
                            return
                        }
                        let c = await Fn(r, n, a, o, e.signal);
                        if (!l()) return i();
                        if (c?.userId !== r || c.accountId !== n) {
                            u({
                                kind: `unavailable`
                            });
                            return
                        }
                        u({
                            kind: `wallet`,
                            request: In(n, a, o, t)
                        })
                    } catch {
                        e.signal.aborted || u({
                            kind: `unavailable`
                        })
                    }
                })(), () => {
                    e.abort(), a(), s()
                }
            }, v = [n, r, o, p, m, h, g], t[1] = n, t[2] = o, t[3] = m, t[4] = g, t[5] = p, t[6] = h, t[7] = r, t[8] = _, t[9] = v) : (_ = t[8], v = t[9]), (0, Hn.useEffect)(_, v), o) {
            let e;
            return t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(U, {
                children: (0, Q.jsx)(X, {
                    status: `connecting`
                })
            }), t[10] = e) : e = t[10], e
        }
        if (l.kind === `other`) return a;
        if (l.kind === `wallet` && !d) {
            let e;
            t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(U, {
                children: (0, Q.jsx)(X, {
                    status: `connecting`
                })
            }), t[11] = e) : e = t[11];
            let n;
            t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (n = () => f(!0), t[12] = n) : n = t[12];
            let r;
            return t[13] === l.request ? r = t[14] : (r = (0, Q.jsx)(Hn.Suspense, {
                fallback: e,
                children: (0, Q.jsx)(Un, {
                    request: l.request,
                    onClose: n
                })
            }), t[13] = l.request, t[14] = r), r
        }
        let y;
        t[15] !== d || t[16] !== l.kind ? (y = d ? (0, Q.jsx)(`p`, {
            role: `status`,
            children: (0, Q.jsx)(R, {
                id: `elicitation.wallet.dialog.closed`,
                defaultMessage: `Card setup closed. You can return to your conversation.`
            })
        }) : l.kind === `wallet` ? null : (0, Q.jsx)(X, {
            status: l.kind,
            children: l.kind === `unavailable` && (0, Q.jsx)(ne, {
                type: `button`,
                color: `secondary`,
                onClick: Bn,
                children: (0, Q.jsx)(R, {
                    id: `elicitation.page.retry`,
                    defaultMessage: `Check again`
                })
            })
        }), t[15] = d, t[16] = l.kind, t[17] = y) : y = t[17];
        let b;
        return t[18] === y ? b = t[19] : (b = (0, Q.jsx)(U, {
            children: y
        }), t[18] = y, t[19] = b), b
    }
}));

function Kn(e, t) {
    let n = I();
    return n?.user?.id === e && n?.account?.id === t
}

function qn() {
    return window.location.reload()
}
var Jn, Yn, Xn, $, Zn, Qn, $n = e((() => {
        Jn = z(), zt(), r(), $t(), nn(), Wt(), f(), Se(), Yn = t(_e()), he(), ue(), Xn = t(ae()), ln(), pn(), yn(), Ct(), En(), Gn(), $ = L(), Zn = () => {
            "use forget";
            let e = (0, Jn.c)(6),
                [t] = de(),
                n = Te(),
                r;
            if (e[0] !== n || e[1] !== t) {
                r = Symbol.for(`react.early_return_sentinel`);
                bb0: {
                    let i = I(),
                        a = cn.safeParse({
                            thread_id: t.get(`thread_id`),
                            request_id: t.get(`request_id`)
                        }),
                        o = t.has(`room_id`) || t.has(`message_id`),
                        s = Sn.safeParse({
                            thread_id: t.get(`thread_id`) ?? void 0,
                            request_id: t.get(`request_id`) ?? void 0,
                            room_id: t.get(`room_id`),
                            message_id: t.get(`message_id`)
                        });
                    if (o && !s.success) {
                        let t;
                        e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(U, {
                            children: (0, $.jsx)(X, {
                                status: `unavailable`
                            })
                        }), e[3] = t) : t = e[3], r = t;
                        break bb0
                    }
                    let c = s.success ? s.data : a.success ? a.data : null;
                    if (c != null && n === `ENABLED` && i?.user?.id != null && i.account?.id != null) {
                        let e = a.success ? (0, $.jsx)(Qn, {
                            userId: i.user.id,
                            accountId: i.account.id,
                            threadId: a.data.thread_id,
                            requestId: a.data.request_id
                        }, JSON.stringify([i.user.id, i.account.id, a.data])) : (0, $.jsx)(U, {
                            children: (0, $.jsx)(X, {
                                status: `unavailable`
                            })
                        });
                        r = (0, $.jsx)(Wn, {
                            userId: i.user.id,
                            accountId: i.account.id,
                            target: c,
                            children: e
                        }, JSON.stringify([i.user.id, i.account.id, c]));
                        break bb0
                    }
                }
                e[0] = n, e[1] = t, e[2] = r
            } else r = e[2];
            if (r !== Symbol.for(`react.early_return_sentinel`)) return r;
            let i = n === `LOADING` ? `connecting` : `unavailable`,
                a;
            return e[4] === i ? a = e[5] : (a = (0, $.jsx)(U, {
                children: (0, $.jsx)(X, {
                    status: i
                })
            }), e[4] = i, e[5] = a), a
        }, Qn = e => {
            "use forget";
            let t = (0, Jn.c)(43),
                {
                    threadId: n,
                    requestId: r,
                    userId: i,
                    accountId: a
                } = e,
                o;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = {
                status: `connecting`
            }, t[0] = o) : o = t[0];
            let [s, l] = (0, Yn.useState)(o), u = (0, Yn.useRef)(null), d = (0, Yn.useRef)(!1), f = (0, Yn.useRef)(void 0), p, m;
            if (t[1] !== a || t[2] !== r || t[3] !== n || t[4] !== i ? (p = () => {
                    let e = !1,
                        t = !1,
                        o, s = t => {
                            e || (e = !0, clearTimeout(o), clearTimeout(f.current), m.close(), l(e => t === `completed` && e.status === `responding` ? {
                                ...e,
                                status: `completed`
                            } : {
                                status: `unavailable`
                            }))
                        },
                        p = () => s(`unavailable`),
                        m = new Rt({
                            onDisconnect: p,
                            onServerMessage: c => {
                                if (e) return;
                                if (!Kn(i, a)) {
                                    p();
                                    return
                                }
                                let u = c.params;
                                if (u?.threadId === n)
                                    if (c.method === `mcpServer/elicitation/request` && c.id != null && String(c.id) === r) {
                                        if (t) return;
                                        t = !0, clearTimeout(o);
                                        let e = un(u);
                                        l(e == null ? {
                                            status: `unsupported`
                                        } : {
                                            status: `pending`,
                                            id: c.id,
                                            request: e
                                        })
                                    } else c.method === `serverRequest/resolved` && String(u.requestId) === r && s(d.current ? `completed` : `unavailable`)
                            }
                        });
                    u.current = m;
                    let h = c(p),
                        g = () => {
                            !e && !t && (o = setTimeout(p, 1e4))
                        };
                    return m.resumeThread(n).then(g, g), () => {
                        e = !0, h(), clearTimeout(o), clearTimeout(f.current), m.close(), u.current = null
                    }
                }, m = [n, r, i, a], t[1] = a, t[2] = r, t[3] = n, t[4] = i, t[5] = p, t[6] = m) : (p = t[5], m = t[6]), (0, Yn.useEffect)(p, m), s.status === `pending` || s.status === `responding`) {
                let e;
                t[7] !== a || t[8] !== s.id || t[9] !== s.status || t[10] !== i ? (e = () => s.status === `pending` && Kn(i, a) && u.current?.hasPendingServerRequest(s.id) === !0, t[7] = a, t[8] = s.id, t[9] = s.status, t[10] = i, t[11] = e) : e = t[11];
                let r = e,
                    o;
                t[12] !== r || t[13] !== s ? (o = (e, t) => {
                    if (!r()) {
                        l({
                            status: `unavailable`
                        });
                        return
                    }
                    try {
                        u.current?.respondToElicitation(s.id, e), d.current = !0, l({
                            ...s,
                            status: `responding`,
                            action: e,
                            outcome: t
                        }), f.current = setTimeout(() => {
                            u.current?.close(), l({
                                status: `unavailable`
                            })
                        }, 2e4)
                    } catch {
                        l({
                            status: `unavailable`
                        })
                    }
                }, t[12] = r, t[13] = s, t[14] = o) : o = t[14];
                let c = o;
                if (s.status === `responding` && s.request.kind !== `browser_auth`) {
                    let e;
                    return t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(U, {
                        children: (0, $.jsx)(X, {
                            status: `responding`
                        })
                    }), t[15] = e) : e = t[15], e
                }
                switch (s.request.kind) {
                    case `connector`:
                    case `plugin`: {
                        let e;
                        return t[16] !== a || t[17] !== r || t[18] !== c || t[19] !== s.request || t[20] !== i ? (e = (0, $.jsx)(U, {
                            children: (0, $.jsx)(vn, {
                                request: s.request,
                                userId: i,
                                accountId: a,
                                canRespond: r,
                                onRespond: c
                            })
                        }), t[16] = a, t[17] = r, t[18] = c, t[19] = s.request, t[20] = i, t[21] = e) : e = t[21], e
                    }
                    case `browser_auth`: {
                        let e = s.status === `responding`,
                            i;
                        return t[22] !== r || t[23] !== c || t[24] !== s.id || t[25] !== s.request.browserAuth || t[26] !== e || t[27] !== n ? (i = (0, $.jsx)(U, {
                            presentation: `form`,
                            children: (0, $.jsx)(Qt, {
                                browserAuth: s.request.browserAuth,
                                threadId: n,
                                canRespond: r,
                                onRespond: c,
                                responding: e
                            }, s.id)
                        }), t[22] = r, t[23] = c, t[24] = s.id, t[25] = s.request.browserAuth, t[26] = e, t[27] = n, t[28] = i) : i = t[28], i
                    }
                    default: {
                        let e;
                        return t[29] === s.request ? e = t[30] : (e = (0, Xn.default)(s.request), t[29] = s.request, t[30] = e), e
                    }
                }
            }
            if (s.status === `completed` && s.request.kind === `browser_auth`) {
                if (s.outcome === `unavailable`) {
                    let e;
                    return t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(U, {
                        children: (0, $.jsx)(X, {
                            status: `unavailable`
                        })
                    }), t[31] = e) : e = t[31], e
                }
                let e = s.action === `accept` ? `accepted` : `declined`,
                    n;
                return t[32] !== s.request.browserAuth || t[33] !== e ? (n = (0, $.jsx)(U, {
                    presentation: `confirmation`,
                    children: (0, $.jsx)(`div`, {
                        role: `status`,
                        children: (0, $.jsx)(Ut, {
                            browserAuth: s.request.browserAuth,
                            status: e
                        })
                    })
                }), t[32] = s.request.browserAuth, t[33] = e, t[34] = n) : n = t[34], n
            }
            let h = s.status === `completed` ? `confirmation` : `existing`,
                g;
            t[35] === s.status ? g = t[36] : (g = s.status === `unavailable` ? (0, $.jsx)(ne, {
                type: `button`,
                color: `secondary`,
                onClick: qn,
                children: (0, $.jsx)(R, {
                    id: `elicitation.page.retry`,
                    defaultMessage: `Check again`
                })
            }) : null, t[35] = s.status, t[36] = g);
            let _;
            t[37] !== s.status || t[38] !== g ? (_ = (0, $.jsx)(X, {
                status: s.status,
                children: g
            }), t[37] = s.status, t[38] = g, t[39] = _) : _ = t[39];
            let v;
            return t[40] !== h || t[41] !== _ ? (v = (0, $.jsx)(U, {
                presentation: h,
                children: _
            }), t[40] = h, t[41] = _, t[42] = v) : v = t[42], v
        }
    })),
    er, tr, nr, rr = e((() => {
        ue(), er = z(), $n(), tr = L(), nr = ge(function() {
            "use forget";
            let e = (0, er.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, tr.jsx)(Zn, {}), e[0] = t) : t = e[0], t
        })
    }));
e((() => {
    rr()
}))();
export {
    nr as
    default
};
//# sourceMappingURL=elicitation-zloqrfmn.js.map