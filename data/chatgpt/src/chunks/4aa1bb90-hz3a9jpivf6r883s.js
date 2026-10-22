import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $E as t,
    $Y as n,
    Aq as r,
    Att as i,
    Dtt as a,
    JE as o,
    KE as s,
    Mq as c,
    Mtt as l,
    QE as u,
    Tq as d,
    ZE as f,
    eD as p,
    eX as ee,
    jtt as te,
    stt as ne,
    tX as re
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    CBt as ie,
    SBt as ae,
    Xgt as oe,
    Zgt as se,
    aft as ce,
    cB as le,
    ift as ue,
    lB as de,
    nS as fe,
    oB as pe,
    rM as me,
    rS as he,
    sB as ge,
    tS as _e,
    uB as ve
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Bx as m,
    Dv as ye,
    Fx as be,
    Gx as h,
    Hx as xe,
    Kx as Se,
    Lx as Ce,
    Ov as we,
    Wx as g,
    Zx as Te,
    _S as Ee,
    aS as _,
    cS as v,
    eS as y,
    fS as b,
    iS as x,
    mS as De,
    oS as S,
    pS as C,
    qx as Oe,
    sS as ke,
    tS as w,
    uS as T
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    r as Ae,
    t as je
} from "./5422a199-ohc0ujx944q7esd3.js";
var Me = e((() => {
        Ce()
    })),
    Ne = e((() => {
        Me()
    })),
    Pe, E, Fe, Ie, Le, Re, D, O, k, A, j, M, N, P, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, F, I, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, L, R, ut, z, dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, B, St, V, H, Ct, wt, Tt, Et, Dt, Ot, U, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, W, G, K, Gt, Kt, qt, q, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, J, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn = e((() => {
        Ne(), Pe = `io.modelcontextprotocol/related-task`, E = Se(e => e !== null && (typeof e == `object` || typeof e == `function`)), Fe = b([T(), x().int()]), Ie = T(), w({
            ttl: b([x(), xe()]).optional(),
            pollInterval: x().optional()
        }), Le = _({
            ttl: x().optional()
        }), Re = _({
            taskId: T()
        }), D = w({
            progressToken: Fe.optional(),
            [Pe]: Re.optional()
        }), O = _({
            _meta: D.optional()
        }), k = O.extend({
            task: Le.optional()
        }), A = _({
            method: T(),
            params: O.loose().optional()
        }), j = _({
            _meta: D.optional()
        }), M = _({
            method: T(),
            params: j.loose().optional()
        }), N = w({
            _meta: D.optional()
        }), P = b([T(), x().int()]), ze = _({
            jsonrpc: y(`2.0`),
            id: P,
            ...A.shape
        }).strict(), Be = _({
            jsonrpc: y(`2.0`),
            ...M.shape
        }).strict(), Ve = _({
            jsonrpc: y(`2.0`),
            id: P,
            result: N
        }).strict(), (function(e) {
            e[e.ConnectionClosed = -32e3] = `ConnectionClosed`, e[e.RequestTimeout = -32001] = `RequestTimeout`, e[e.ParseError = -32700] = `ParseError`, e[e.InvalidRequest = -32600] = `InvalidRequest`, e[e.MethodNotFound = -32601] = `MethodNotFound`, e[e.InvalidParams = -32602] = `InvalidParams`, e[e.InternalError = -32603] = `InternalError`, e[e.UrlElicitationRequired = -32042] = `UrlElicitationRequired`
        })(He ||= {}), Ue = _({
            jsonrpc: y(`2.0`),
            id: P.optional(),
            error: _({
                code: x().int(),
                message: T(),
                data: C().optional()
            })
        }).strict(), b([ze, Be, Ve, Ue]), b([Ve, Ue]), We = N.strict(), Ge = j.extend({
            requestId: P.optional(),
            reason: T().optional()
        }), Ke = M.extend({
            method: y(`notifications/cancelled`),
            params: Ge
        }), qe = _({
            src: T(),
            mimeType: T().optional(),
            sizes: g(T()).optional(),
            theme: m([`light`, `dark`]).optional()
        }), F = _({
            icons: g(qe).optional()
        }), I = _({
            name: T(),
            title: T().optional()
        }), Je = I.extend({
            ...I.shape,
            ...F.shape,
            version: T(),
            websiteUrl: T().optional(),
            description: T().optional()
        }), Ye = Te(_({
            applyDefaults: h().optional()
        }), v(T(), C())), Xe = ke(e => e && typeof e == `object` && !Array.isArray(e) && Object.keys(e).length === 0 ? {
            form: {}
        } : e, Te(_({
            form: Ye.optional(),
            url: E.optional()
        }), v(T(), C()).optional())), Ze = w({
            list: E.optional(),
            cancel: E.optional(),
            requests: w({
                sampling: w({
                    createMessage: E.optional()
                }).optional(),
                elicitation: w({
                    create: E.optional()
                }).optional()
            }).optional()
        }), Qe = w({
            list: E.optional(),
            cancel: E.optional(),
            requests: w({
                tools: w({
                    call: E.optional()
                }).optional()
            }).optional()
        }), $e = _({
            experimental: v(T(), E).optional(),
            sampling: _({
                context: E.optional(),
                tools: E.optional()
            }).optional(),
            elicitation: Xe.optional(),
            roots: _({
                listChanged: h().optional()
            }).optional(),
            tasks: Ze.optional()
        }), et = O.extend({
            protocolVersion: T(),
            capabilities: $e,
            clientInfo: Je
        }), tt = A.extend({
            method: y(`initialize`),
            params: et
        }), nt = _({
            experimental: v(T(), E).optional(),
            logging: E.optional(),
            completions: E.optional(),
            prompts: _({
                listChanged: h().optional()
            }).optional(),
            resources: _({
                subscribe: h().optional(),
                listChanged: h().optional()
            }).optional(),
            tools: _({
                listChanged: h().optional()
            }).optional(),
            tasks: Qe.optional()
        }), rt = N.extend({
            protocolVersion: T(),
            capabilities: nt,
            serverInfo: Je,
            instructions: T().optional()
        }), it = M.extend({
            method: y(`notifications/initialized`),
            params: j.optional()
        }), at = A.extend({
            method: y(`ping`),
            params: O.optional()
        }), ot = _({
            progress: x(),
            total: S(x()),
            message: S(T())
        }), st = _({
            ...j.shape,
            ...ot.shape,
            progressToken: Fe
        }), ct = M.extend({
            method: y(`notifications/progress`),
            params: st
        }), lt = O.extend({
            cursor: Ie.optional()
        }), L = A.extend({
            params: lt.optional()
        }), R = N.extend({
            nextCursor: Ie.optional()
        }), ut = m([`working`, `input_required`, `completed`, `failed`, `cancelled`]), z = _({
            taskId: T(),
            status: ut,
            ttl: b([x(), xe()]),
            createdAt: T(),
            lastUpdatedAt: T(),
            pollInterval: S(x()),
            statusMessage: S(T())
        }), dt = N.extend({
            task: z
        }), ft = j.merge(z), pt = M.extend({
            method: y(`notifications/tasks/status`),
            params: ft
        }), mt = A.extend({
            method: y(`tasks/get`),
            params: O.extend({
                taskId: T()
            })
        }), ht = N.merge(z), gt = A.extend({
            method: y(`tasks/result`),
            params: O.extend({
                taskId: T()
            })
        }), N.loose(), _t = L.extend({
            method: y(`tasks/list`)
        }), vt = R.extend({
            tasks: g(z)
        }), yt = A.extend({
            method: y(`tasks/cancel`),
            params: O.extend({
                taskId: T()
            })
        }), N.merge(z), bt = _({
            uri: T(),
            mimeType: S(T()),
            _meta: v(T(), C()).optional()
        }), xt = bt.extend({
            text: T()
        }), B = T().refine(e => {
            try {
                return atob(e), !0
            } catch {
                return !1
            }
        }, {
            message: `Invalid Base64 string`
        }), St = bt.extend({
            blob: B
        }), V = m([`user`, `assistant`]), H = _({
            audience: g(V).optional(),
            priority: x().min(0).max(1).optional(),
            lastModified: Ee({
                offset: !0
            }).optional()
        }), Ct = _({
            ...I.shape,
            ...F.shape,
            uri: T(),
            description: S(T()),
            mimeType: S(T()),
            annotations: H.optional(),
            _meta: S(w({}))
        }), wt = _({
            ...I.shape,
            ...F.shape,
            uriTemplate: T(),
            description: S(T()),
            mimeType: S(T()),
            annotations: H.optional(),
            _meta: S(w({}))
        }), Tt = L.extend({
            method: y(`resources/list`)
        }), Et = R.extend({
            resources: g(Ct)
        }), Dt = L.extend({
            method: y(`resources/templates/list`)
        }), Ot = R.extend({
            resourceTemplates: g(wt)
        }), U = O.extend({
            uri: T()
        }), kt = U, At = A.extend({
            method: y(`resources/read`),
            params: kt
        }), jt = N.extend({
            contents: g(b([xt, St]))
        }), Mt = M.extend({
            method: y(`notifications/resources/list_changed`),
            params: j.optional()
        }), Nt = U, Pt = A.extend({
            method: y(`resources/subscribe`),
            params: Nt
        }), Ft = U, It = A.extend({
            method: y(`resources/unsubscribe`),
            params: Ft
        }), Lt = j.extend({
            uri: T()
        }), Rt = M.extend({
            method: y(`notifications/resources/updated`),
            params: Lt
        }), zt = _({
            name: T(),
            description: S(T()),
            required: S(h())
        }), Bt = _({
            ...I.shape,
            ...F.shape,
            description: S(T()),
            arguments: S(g(zt)),
            _meta: S(w({}))
        }), Vt = L.extend({
            method: y(`prompts/list`)
        }), Ht = R.extend({
            prompts: g(Bt)
        }), Ut = O.extend({
            name: T(),
            arguments: v(T(), T()).optional()
        }), Wt = A.extend({
            method: y(`prompts/get`),
            params: Ut
        }), W = _({
            type: y(`text`),
            text: T(),
            annotations: H.optional(),
            _meta: v(T(), C()).optional()
        }), G = _({
            type: y(`image`),
            data: B,
            mimeType: T(),
            annotations: H.optional(),
            _meta: v(T(), C()).optional()
        }), K = _({
            type: y(`audio`),
            data: B,
            mimeType: T(),
            annotations: H.optional(),
            _meta: v(T(), C()).optional()
        }), Gt = _({
            type: y(`tool_use`),
            name: T(),
            id: T(),
            input: v(T(), C()),
            _meta: v(T(), C()).optional()
        }), Kt = _({
            type: y(`resource`),
            resource: b([xt, St]),
            annotations: H.optional(),
            _meta: v(T(), C()).optional()
        }), qt = Ct.extend({
            type: y(`resource_link`)
        }), q = b([W, G, K, qt, Kt]), Jt = _({
            role: V,
            content: q
        }), Yt = N.extend({
            description: T().optional(),
            messages: g(Jt)
        }), Xt = M.extend({
            method: y(`notifications/prompts/list_changed`),
            params: j.optional()
        }), Zt = _({
            title: T().optional(),
            readOnlyHint: h().optional(),
            destructiveHint: h().optional(),
            idempotentHint: h().optional(),
            openWorldHint: h().optional()
        }), Qt = _({
            taskSupport: m([`required`, `optional`, `forbidden`]).optional()
        }), $t = _({
            ...I.shape,
            ...F.shape,
            description: T().optional(),
            inputSchema: _({
                type: y(`object`),
                properties: v(T(), E).optional(),
                required: g(T()).optional()
            }).catchall(C()),
            outputSchema: _({
                type: y(`object`),
                properties: v(T(), E).optional(),
                required: g(T()).optional()
            }).catchall(C()).optional(),
            annotations: Zt.optional(),
            execution: Qt.optional(),
            _meta: v(T(), C()).optional()
        }), en = L.extend({
            method: y(`tools/list`)
        }), tn = R.extend({
            tools: g($t)
        }), nn = N.extend({
            content: g(q).default([]),
            structuredContent: v(T(), C()).optional(),
            isError: h().optional()
        }), nn.or(N.extend({
            toolResult: C()
        })), rn = k.extend({
            name: T(),
            arguments: v(T(), C()).optional()
        }), an = A.extend({
            method: y(`tools/call`),
            params: rn
        }), on = M.extend({
            method: y(`notifications/tools/list_changed`),
            params: j.optional()
        }), _({
            autoRefresh: h().default(!0),
            debounceMs: x().int().nonnegative().default(300)
        }), sn = m([`debug`, `info`, `notice`, `warning`, `error`, `critical`, `alert`, `emergency`]), cn = O.extend({
            level: sn
        }), ln = A.extend({
            method: y(`logging/setLevel`),
            params: cn
        }), un = j.extend({
            level: sn,
            logger: T().optional(),
            data: C()
        }), dn = M.extend({
            method: y(`notifications/message`),
            params: un
        }), fn = _({
            name: T().optional()
        }), pn = _({
            hints: g(fn).optional(),
            costPriority: x().min(0).max(1).optional(),
            speedPriority: x().min(0).max(1).optional(),
            intelligencePriority: x().min(0).max(1).optional()
        }), mn = _({
            mode: m([`auto`, `required`, `none`]).optional()
        }), hn = _({
            type: y(`tool_result`),
            toolUseId: T().describe(`The unique identifier for the corresponding tool call.`),
            content: g(q).default([]),
            structuredContent: _({}).loose().optional(),
            isError: h().optional(),
            _meta: v(T(), C()).optional()
        }), gn = Oe(`type`, [W, G, K]), J = Oe(`type`, [W, G, K, Gt, hn]), _n = _({
            role: V,
            content: b([J, g(J)]),
            _meta: v(T(), C()).optional()
        }), vn = k.extend({
            messages: g(_n),
            modelPreferences: pn.optional(),
            systemPrompt: T().optional(),
            includeContext: m([`none`, `thisServer`, `allServers`]).optional(),
            temperature: x().optional(),
            maxTokens: x().int(),
            stopSequences: g(T()).optional(),
            metadata: E.optional(),
            tools: g($t).optional(),
            toolChoice: mn.optional()
        }), yn = A.extend({
            method: y(`sampling/createMessage`),
            params: vn
        }), bn = N.extend({
            model: T(),
            stopReason: S(m([`endTurn`, `stopSequence`, `maxTokens`]).or(T())),
            role: V,
            content: gn
        }), xn = N.extend({
            model: T(),
            stopReason: S(m([`endTurn`, `stopSequence`, `maxTokens`, `toolUse`]).or(T())),
            role: V,
            content: b([J, g(J)])
        }), Sn = _({
            type: y(`boolean`),
            title: T().optional(),
            description: T().optional(),
            default: h().optional()
        }), Cn = _({
            type: y(`string`),
            title: T().optional(),
            description: T().optional(),
            minLength: x().optional(),
            maxLength: x().optional(),
            format: m([`email`, `uri`, `date`, `date-time`]).optional(),
            default: T().optional()
        }), wn = _({
            type: m([`number`, `integer`]),
            title: T().optional(),
            description: T().optional(),
            minimum: x().optional(),
            maximum: x().optional(),
            default: x().optional()
        }), Tn = _({
            type: y(`string`),
            title: T().optional(),
            description: T().optional(),
            enum: g(T()),
            default: T().optional()
        }), En = _({
            type: y(`string`),
            title: T().optional(),
            description: T().optional(),
            oneOf: g(_({
                const: T(),
                title: T()
            })),
            default: T().optional()
        }), Dn = _({
            type: y(`string`),
            title: T().optional(),
            description: T().optional(),
            enum: g(T()),
            enumNames: g(T()).optional(),
            default: T().optional()
        }), On = b([Tn, En]), kn = _({
            type: y(`array`),
            title: T().optional(),
            description: T().optional(),
            minItems: x().optional(),
            maxItems: x().optional(),
            items: _({
                type: y(`string`),
                enum: g(T())
            }),
            default: g(T()).optional()
        }), An = _({
            type: y(`array`),
            title: T().optional(),
            description: T().optional(),
            minItems: x().optional(),
            maxItems: x().optional(),
            items: _({
                anyOf: g(_({
                    const: T(),
                    title: T()
                }))
            }),
            default: g(T()).optional()
        }), jn = b([kn, An]), Mn = b([Dn, On, jn]), Nn = b([Mn, Sn, Cn, wn]), Pn = k.extend({
            mode: y(`form`).optional(),
            message: T(),
            requestedSchema: _({
                type: y(`object`),
                properties: v(T(), Nn),
                required: g(T()).optional()
            })
        }), Fn = k.extend({
            mode: y(`url`),
            message: T(),
            elicitationId: T(),
            url: T().url()
        }), In = b([Pn, Fn]), Ln = A.extend({
            method: y(`elicitation/create`),
            params: In
        }), Rn = j.extend({
            elicitationId: T()
        }), zn = M.extend({
            method: y(`notifications/elicitation/complete`),
            params: Rn
        }), Bn = N.extend({
            action: m([`accept`, `decline`, `cancel`]),
            content: ke(e => e === null ? void 0 : e, v(T(), b([T(), x(), h(), g(T())])).optional())
        }), Vn = _({
            type: y(`ref/resource`),
            uri: T()
        }), Hn = _({
            type: y(`ref/prompt`),
            name: T()
        }), Un = O.extend({
            ref: b([Hn, Vn]),
            argument: _({
                name: T(),
                value: T()
            }),
            context: _({
                arguments: v(T(), T()).optional()
            }).optional()
        }), Wn = A.extend({
            method: y(`completion/complete`),
            params: Un
        }), Gn = N.extend({
            completion: w({
                values: g(T()).max(100),
                total: S(x().int()),
                hasMore: S(h())
            })
        }), Kn = _({
            uri: T().startsWith(`file://`),
            name: T().optional(),
            _meta: v(T(), C()).optional()
        }), qn = A.extend({
            method: y(`roots/list`),
            params: O.optional()
        }), Jn = N.extend({
            roots: g(Kn)
        }), Yn = M.extend({
            method: y(`notifications/roots/list_changed`),
            params: j.optional()
        }), b([at, tt, Wn, ln, Wt, Vt, Tt, Dt, At, Pt, It, an, en, mt, gt, _t, yt]), b([Ke, ct, it, Yn, pt]), b([We, bn, xn, Bn, Jn, ht, vt, dt]), b([at, yn, Ln, qn, mt, gt, _t, yt]), b([Ke, ct, dn, Rt, Mt, on, Xt, pt, zn]), b([We, rt, Gn, Yt, Ht, Et, Ot, jt, nn, tn, ht, vt, dt])
    }));

function Zn(e, t) {
    return ie(e, [e => e.theme === t, e => e.theme == null, e => e.sizes == null || e.sizes.includes(`any`) ? 1 / 0 : Math.max(0, ...e.sizes.map(e => {
        let [t, n] = e.split(`x`).map(Number);
        return t * n
    }))], [`desc`, `desc`, `desc`])[0]?.src
}
var Qn, $n, er, tr, Y, X = e((() => {
        Xn(), ae(), be(), je(), Qn = 16384, $n = De({
            protocol: /^https?$/u
        }).transform(e => new URL(e)).refine(e => e.username === `` && e.password === ``), er = /^image\/(png|jpeg|jpg|gif|webp|svg\+xml|x-icon|vnd\.microsoft\.icon)$/u, tr = qe.extend({
            src: T().trim().min(1).max(Qn).refine(e => {
                if (/[\u0000-\u0020\u007f]/u.test(e)) return !1;
                if (!e.startsWith(`data:`)) return $n.safeParse(e).success;
                let t = Ae(e);
                return t != null && er.test(t.mimeType) && e.indexOf(`,`) < e.length - 1
            }),
            mimeType: T().regex(er).optional(),
            sizes: g(T().max(32).regex(/^(any|[1-9][0-9]*x[1-9][0-9]*)$/u)).max(8).optional()
        }).strip(), Y = g(tr.optional().catch(void 0)).max(8).transform(e => e.filter(e => e != null)).refine(e => e.reduce((e, t) => e + t.src.length, 0) <= Qn).optional().catch(void 0)
    })),
    nr, rr = e((() => {
        be(), X(), nr = g(_({
            id: T().regex(/^[a-z][a-z0-9_-]{0,63}$/u),
            title: T().trim().min(1).max(128).refine(e => !/\p{Cc}/u.test(e)),
            icons: Y,
            accessMode: m([`included`, `connected`, `web`]).optional(),
            delayMinutes: x().int().min(1).max(10080).optional()
        })).max(32)
    }));

function ir(e) {
    return e.providerId == null ? e.capabilityId == null ? e.id : `${e.id}:${e.capabilityId}` : `${e.id}:provider:${e.providerId}:${e.accessMode??``}`
}

function ar(e, t, n = [], r = []) {
    let i = or(e, t, n),
        a = new Map,
        o = new Set,
        s = new Set;
    for (let t of e) {
        let e = t.invocation;
        if (e == null) continue;
        let n = fr(e, i);
        if (n == null) continue;
        let r = f(n.id);
        if (e.sourceProviders !== void 0) {
            if (e.sourceProviders.length === 0) continue;
            s.add(r), o.add(r);
            for (let [e, t] of a) f(t.id) === r && t.providerId == null && a.delete(e);
            for (let t of e.sourceProviders) {
                let i = `${r}:provider:${t.id}:${t.accessMode??``}`,
                    o = a.get(i);
                a.set(i, {
                    ...n,
                    name: t.title,
                    providerId: t.id,
                    accessMode: t.accessMode,
                    sourceIcons: t.icons ?? o?.sourceIcons,
                    sourceConnectorIds: [...new Set([...o?.sourceConnectorIds ?? [], e.connectorId])],
                    delayMinutes: Math.max(t.delayMinutes ?? 0, o?.delayMinutes ?? 0) || void 0
                })
            }
            continue
        }
        if (!s.has(r))
            if (e.capabilityId != null && e.capabilityName != null) {
                let t = a.get(r);
                a.delete(r), o.add(r);
                let i = `${r}:${e.capabilityId}`,
                    s = a.get(i),
                    c = e.sourceIcons ?? s?.sourceIcons,
                    l = [...new Set([...s?.sourceConnectorIds ?? [], t?.id, s?.id, e.connectorId].filter(e => e != null && e !== n.id))],
                    u = {
                        ...n,
                        name: e.capabilityName,
                        capabilityId: e.capabilityId,
                        ...c == null ? {} : {
                            sourceIcons: c
                        },
                        ...l.length > 0 ? {
                            sourceConnectorIds: l
                        } : {}
                    };
                a.set(i, u)
            } else o.has(r) || a.set(r, n)
    }
    if (r.length > 0) {
        let t = new Map(n.map(e => [e.id, e])),
            s = new Set(e.flatMap(({
                privateConnectorId: e
            }) => e == null ? [] : [f(e)]));
        for (let e of r) {
            let n = f(e),
                r = u(t, e);
            if (r == null || r.status !== `ENABLED` || s.has(n) || r.connector_type != null && we({
                    app_metadata: r.app_metadata,
                    connector_type: r.connector_type,
                    status: r.status
                })) continue;
            if (o.has(n)) {
                for (let [t, r] of a) r.capabilityId == null && r.providerId == null || f(r.id) !== n || r.id === e || r.sourceConnectorIds?.includes(e) || a.set(t, {
                    ...r,
                    sourceConnectorIds: [...r.sourceConnectorIds ?? [], e]
                });
                continue
            }
            let c = fr({
                connectorId: e,
                connectorName: null,
                logoUrl: null
            }, i, !0);
            if (c == null) continue;
            let l = a.get(n);
            if (l != null) {
                l.id !== e && !l.sourceConnectorIds?.includes(e) && a.set(n, {
                    ...c,
                    id: l.id,
                    sourceConnectorIds: [...l.sourceConnectorIds ?? [], e]
                });
                continue
            }
            a.set(n, c)
        }
    }
    return [...a.values()]
}

function or(e, t, n) {
    let r = sr(e),
        i = new Map;
    for (let t of e)
        for (let e of t.catalogActions) e.kind !== `exclude` && cr(i, e.connectorIds, e.plugin, e.kind === `set-if-missing`);
    for (let e of t)
        for (let t of e.apps_content) {
            let e = Z(t.display_name);
            e != null && cr(i, [t.id], {
                id: t.id,
                name: e,
                logoUrl: t.logo_url,
                logoDarkUrl: t.logo_dark_url
            })
        }
    for (let e of n) {
        let t = Z(e.name);
        if (t == null) continue;
        let {
            lightLogoUrl: n,
            darkLogoUrl: r
        } = s(e);
        cr(i, [e.id], {
            id: e.id,
            name: t,
            logoUrl: n,
            logoDarkUrl: r
        })
    }
    return {
        excludedIdentifiers: r,
        pluginsByConnectorId: i
    }
}

function sr(e) {
    return new Set(e.flatMap(e => e.catalogActions.flatMap(e => e.kind === `exclude` ? e.connectorIds.flatMap(e => {
        let n = e.trim(),
            r = t(n);
        return r == null ? [n] : [n, r]
    }) : [])))
}

function cr(e, t, n, r = !1) {
    for (let i of t) {
        let t = Z(i);
        t != null && (!r || !e.has(t)) && e.set(t, n)
    }
}

function lr(e) {
    let t = [];
    for (let n of e.metadata?.selected_mcp_sources ?? []) {
        let e = [n.id];
        if (we(n)) {
            t.push({
                connectorIds: e,
                kind: `exclude`
            });
            continue
        }
        let r = Z(n.name);
        r != null && t.push({
            connectorIds: e,
            kind: `set`,
            plugin: {
                id: n.id,
                name: r,
                logoUrl: n.logo_url,
                logoDarkUrl: n.logo_url_dark ?? null
            }
        })
    }
    let n = e.metadata?.serialization_metadata?.custom_symbol_offsets ?? [];
    if (n.length > 0) {
        let r = pe(e);
        for (let e of n) {
            let n = l(e),
                i = n.id;
            if (n.symbol !== ne.EcosystemMention || !c(i)) continue;
            let a = d(i),
                o = r.slice(n.startIndex, n.endIndex).trim().replace(/^@/u, ``);
            o && t.push({
                connectorIds: [a],
                kind: `set-if-missing`,
                plugin: {
                    id: a,
                    name: o,
                    logoUrl: null,
                    logoDarkUrl: null
                }
            })
        }
    }
    let r = e.metadata,
        a = r?.invoked_resource?.publish_status === `private` || r?.chatgpt_sdk?.distribution_channel === i.ONLY_ME;
    return {
        catalogActions: t,
        invocation: ur(e),
        privateConnectorId: a && dr(e) ? Z(r?.invoked_resource?.connector_id) : null
    }
}

function ur(e) {
    let t = e.metadata,
        n = t?.invoked_resource,
        r = t?.invoked_plugin,
        a = Z(n?.connector_id),
        o = nr.safeParse(n?.source_providers).data,
        s = Z(r?.connector_name) ?? (o !== void 0 || a === pr ? Z(n?.app_name) : null);
    if (a == null || a === `connector_openai_plugin_management` || !dr(e) || n?.publish_status === `private` || t?.chatgpt_sdk?.distribution_channel === i.ONLY_ME) return null;
    let c = (t?.tool_icons ?? []).find(e => /\/ecosystem\/apps\/[^/]+/.test(e)) ?? (a === pr ? `/images/ecosystem/apps/appgarden/icon.png` : null),
        l = Z(n?.capability_id),
        u = Z(n?.capability_name),
        d = Y.safeParse(n?.source_icons).data;
    return {
        connectorId: a,
        connectorName: s,
        logoUrl: c,
        sourceProviders: o,
        ...l != null && u != null ? {
            capabilityId: l,
            capabilityName: u
        } : {},
        ...d == null ? {} : {
            sourceIcons: d
        }
    }
}

function dr(e) {
    let t = e.metadata?.chatgpt_sdk?.tool_response_metadata?.status;
    if (e.author.role !== a.Tool || e.status === `in_progress` || e.status === `finished_partial_completion` || e.metadata?.is_error === !0 || e.metadata?.chatgpt_sdk?.is_error === !0 || t === `error` || t === `cancelled` || e.metadata?.__internal?.api_tool_error?.error_code != null) return !1;
    let n = e.metadata?.invoked_plugin?.http_response_status;
    if (n == null) return !0;
    let r = Number(n);
    return Number.isInteger(r) && r >= 200 && r < 300
}

function fr(e, t, n = !1) {
    let r = e.connectorId;
    if (mr.has(f(r)) || t.excludedIdentifiers.has(r)) return null;
    let i = n ? u(t.pluginsByConnectorId, r) : t.pluginsByConnectorId.get(r);
    if (i != null) {
        let t = i.logoUrl != null;
        return {
            ...i,
            id: r,
            name: e.connectorName ?? i.name,
            logoUrl: i.logoUrl ?? e.logoUrl,
            logoDarkUrl: t ? i.logoDarkUrl : null
        }
    }
    return e.connectorName == null ? null : {
        id: r,
        name: e.connectorName,
        logoUrl: e.logoUrl,
        logoDarkUrl: null
    }
}

function Z(e) {
    return typeof e == `string` && e.trim() ? e.trim() : null
}
var pr, mr, hr = e((() => {
    te(), p(), ye(), se(), me(), X(), rr(), ge(), r(), o(), pr = `connector_20205bf7d4e99a89d7154bb849718324`, mr = new Set([`connector_openai_genui_search`, `connector_openai_genui_sheep`, `connector_openai_search_service`, oe, `connector_openai_user_notifications`, `connector_openai_personal_context`])
}));

function Q(e) {
    return e?.trim() ? e : null
}

function gr(e, t) {
    let n = [e.connectorId, e.linkId];
    return [JSON.stringify([...n, `id`, t.id]), ...t.url == null ? [] : [JSON.stringify([...n, `url`, fe(new URL(t.url))])], ...t.open == null ? [] : [ce([...n, `open`, t.open])]]
}

function _r(e) {
    let t = ur(e)?.connectorId;
    if (t == null) return null;
    let n, r, i = e.content.content_type === `code` && /openai\/(?:resourceActivities|citations)/u.test(e.content.text) ? Or.safeParse(le(e, e.content.text)) : null;
    if (i?.success) {
        if (i.data.appContext.connectorId !== t) return null;
        n = [i.data.result], r = Q(i.data.appContext.linkId)
    } else {
        let i = e.metadata?.chatgpt_sdk,
            a = i?.tool_response_metadata;
        if (a?.status !== `success`) return null;
        let o = (e.metadata?.invoked_resource?.resource_uri)?.replace(/^\/+|\/+$/gu, ``).split(`/`);
        if (o == null || o.length !== 2 && o.length !== 3 || o.some(e => !e) || (o.length === 3 || /^(connector_|asdk_app_)/u.test(o[0])) && o[0] !== t) return null;
        n = [a.call_tool_result, a.mcp_tool_result, a.mcpToolResult], r = Q(i?.link_id) ?? Q(i?.[`openai/link_id`]) ?? Q(o.length === 3 ? o[1] : null)
    }
    return {
        connectorId: t,
        linkId: r,
        results: n.flatMap(e => {
            let t = Dr.safeParse(e);
            return t.success && !t.data.isError ? [t.data] : []
        })
    }
}

function vr(e) {
    let t = _r(e);
    if (t == null) return null;
    for (let e of t.results) {
        let n = Er.safeParse(e._meta ?? e.meta);
        if (n.success) return {
            connectorId: t.connectorId,
            linkId: t.linkId,
            resources: n.data[`openai/resourceActivities`].resources
        }
    }
    return null
}

function yr(e, t) {
    let n = _r(e);
    return n == null ? [] : n.results.flatMap(e => {
        let r = kr.safeParse(e._meta ?? e.meta);
        if (!r.success) return [];
        let i = Ar.safeParse(r.data[`openai/citations`][t]);
        if (!i.success) return [];
        let a = Tr.safeParse({
            id: t,
            title: i.data.title,
            activities: [`read`],
            open: {
                tool: i.data.target.name,
                arguments: i.data.target.arguments ?? {}
            }
        });
        return a.success && a.data.open != null ? [{
            connectorId: n.connectorId,
            linkId: n.linkId,
            resources: [a.data]
        }] : []
    })
}

function br(e) {
    if (e.author.role !== a.Assistant || !ve(e) || e.channel !== `final` && e.end_turn !== !0) return [];
    let t = [],
        n = new Map;
    for (let r of e.metadata?.content_references ?? []) {
        if (r.type !== `mcp_source` || typeof r.citation_id != `string` || !r.citation_id.trim() || typeof r.connector_id != `string` || !r.connector_id.trim() || r.link_id != null && typeof r.link_id != `string`) continue;
        let i = Tr.safeParse({
            id: JSON.stringify([e.id, r.citation_id]),
            url: r.url,
            title: r.title,
            activities: [`read`],
            open: {
                tool: r.tool_name,
                arguments: r.tool_arguments
            }
        });
        if (!i.success) continue;
        let a = {
                connectorId: r.connector_id,
                linkId: Q(r.link_id),
                resources: [i.data],
                ...typeof r.capability_id == `string` && /^[a-z][a-z0-9_]{0,63}$/u.test(r.capability_id) ? {
                    capabilityId: r.capability_id,
                    ...typeof r.capability_name == `string` && r.capability_name.trim() ? {
                        capabilityName: r.capability_name
                    } : {}
                } : {}
            },
            o = gr(a, i.data),
            s = o.map(e => n.get(e)).find(e => e != null);
        s == null ? t.push(a) : s.resources[0] = i.data;
        for (let e of o) n.set(e, s ?? a);
        if (t.length === Cr) break
    }
    return t
}

function* xr(e, t) {
    for (let [n, r] of e.entries()) {
        let e = t[n];
        e != null && (yield {
            messageIndex: n,
            activity: e
        });
        for (let e of br(r)) yield {
            messageIndex: n,
            activity: e
        }
    }
}

function Sr(e, t) {
    if (!t.some(e => e?.resources.length) && !e.some(e => br(e).length)) return [];
    let r = n;
    for (let t of e) r = re(r, t);
    let i = new Map(r.flatMap((e, t) => e.messages.map(e => [e.id, t]))),
        a = new Set,
        o = new Map,
        s = 0,
        c = 0;
    for (let {
            messageIndex: n,
            activity: r
        }
        of xr(e, t)) {
        let t = e[n],
            l = i.get(t.id) ?? n;
        for (let e of r.resources) {
            let i = e.url == null ? void 0 : new URL(e.url),
                u = gr(r, e),
                d = new Set(u.flatMap(e => {
                    let t = o.get(e);
                    return t == null ? [] : [t]
                })),
                f = [...d].sort((e, t) => e.firstSeenIndex - t.firstSeenIndex)[0];
            f ?? (f = {
                firstSeenIndex: n,
                openIndex: -1,
                iconsIndex: -1,
                source: {
                    key: u[0],
                    connectorId: r.connectorId,
                    title: e.title?.trim() || (i == null ? e.id : `${i.host}${i.pathname===`/`?``:i.pathname}`),
                    url: e.url,
                    mimeType: e.mimeType
                },
                aliases: new Set,
                activitiesByTurn: new Map
            }, a.add(f));
            for (let e of d)
                if (e !== f) {
                    e.openIndex > f.openIndex && (f.source.open = e.source.open, f.openIndex = e.openIndex), e.iconsIndex > f.iconsIndex && (f.source.icons = e.source.icons, f.iconsIndex = e.iconsIndex), f.source.capabilityId == null && e.source.capabilityId != null && (f.source.capabilityId = e.source.capabilityId, f.source.capabilityName = e.source.capabilityName);
                    for (let t of e.aliases) f.aliases.add(t), o.set(t, f);
                    for (let [t, n] of e.activitiesByTurn) {
                        let e = f.activitiesByTurn.get(t) ?? {
                            values: new Set,
                            firstReadMessageIndex: 1 / 0
                        };
                        for (let t of n.values) e.values.add(t);
                        e.firstReadMessageIndex = Math.min(e.firstReadMessageIndex, n.firstReadMessageIndex), f.activitiesByTurn.set(t, e)
                    }
                    a.delete(e)
                } for (let e of u) f.aliases.add(e), o.set(e, f);
            let p = f.activitiesByTurn.get(l) ?? {
                values: new Set,
                firstReadMessageIndex: 1 / 0
            };
            for (let t of e.activities) p.values.add(t);
            e.activities.includes(`read`) && (p.firstReadMessageIndex = Math.min(p.firstReadMessageIndex, n), e.open != null && (f.openIndex = s++, f.source.open = {
                ...e.open,
                linkId: r.linkId,
                messageId: t.id
            })), f.activitiesByTurn.set(l, p), f.source.url = e.url ?? f.source.url, e.title?.trim() && (f.source.title = e.title.trim()), f.source.mimeType ??= e.mimeType, e.icons?.length && (f.source.icons = e.icons, f.iconsIndex = c++), f.source.capabilityId == null && r.capabilityId != null && (f.source.capabilityId = r.capabilityId, f.source.capabilityName = r.capabilityName)
        }
    }
    return [...a].flatMap(t => {
        let n = 1 / 0;
        for (let e of t.activitiesByTurn.values()) e.values.has(`created`) || (n = Math.min(n, e.firstReadMessageIndex));
        return n === 1 / 0 ? [] : {
            ...t.source,
            firstSeenMessageId: e[n].id
        }
    })
}
var Cr, $, wr, Tr, Er, Dr, Or, kr, Ar, jr = e((() => {
    te(), ee(), hr(), _e(), ge(), ue(), de(), be(), X(), Cr = 100, $ = T().max(16384), wr = _({
        id: $.refine(e => e.trim().length > 0),
        url: $.refine(e => he(e) != null).optional(),
        title: $.optional(),
        mimeType: $.optional(),
        icons: Y,
        activities: g(m([`read`, `created`, `updated`])).min(1).max(Cr),
        open: _({
            tool: T().regex(/^[a-zA-Z0-9_.-]{1,256}$/u),
            arguments: v(T(), C()).refine(e => new TextEncoder().encode(JSON.stringify(e)).length <= 16384)
        }).optional().catch(void 0)
    }), Tr = wr.refine(e => e.url != null || e.open != null), Er = _({
        "openai/resourceActivities": _({
            version: y(1),
            resources: g(wr.required({
                url: !0
            })).min(1).max(Cr)
        })
    }), Dr = _({
        isError: h().optional(),
        _meta: C().optional(),
        meta: C().optional()
    }), Or = _({
        type: y(`mcpToolCall`),
        server: m([`codex_apps`, `codex-connectors-mcp`]),
        status: y(`completed`),
        error: xe().optional(),
        appContext: _({
            connectorId: T(),
            linkId: T().nullable()
        }),
        result: Dr
    }), kr = _({
        "openai/citations": v(T(), C())
    }), Ar = _({
        title: $,
        target: _({
            type: y(`mcp_app_tool`),
            name: T(),
            arguments: v(T(), C()).nullish()
        })
    })
}));
export {
    jr as a, lr as c, hr as d, X as f, Sr as i, ir as l, vr as n, ur as o, Zn as p, yr as r, sr as s, br as t, ar as u
};
//# sourceMappingURL=4aa1bb90-hz3a9jpivf6r883s.js.map