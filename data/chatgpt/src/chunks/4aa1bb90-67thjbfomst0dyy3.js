import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BE as t,
    Dq as n,
    GE as r,
    HE as i,
    JE as a,
    KE as o,
    Mq as s,
    Pq as c,
    Wet as l,
    htt as u,
    mtt as d,
    nX as f,
    ptt as p,
    qE as ee,
    rX as te,
    tX as ne,
    utt as re
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $j as ie,
    Fz as ae,
    Iz as oe,
    Lz as se,
    Rz as ce,
    Xgt as le,
    Zgt as ue,
    aft as de,
    bBt as fe,
    eS as pe,
    nS as me,
    oft as he,
    tS as ge,
    yBt as _e,
    zz as ve
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    AS as ye,
    CS as m,
    DS as h,
    GS as g,
    HS as _,
    LS as v,
    OS as y,
    PS as be,
    RS as b,
    TS as xe,
    US as x,
    VS as S,
    WS as Se,
    XS as C,
    Xv as Ce,
    YS as w,
    ZS as we,
    Zv as Te,
    bS as Ee,
    eC as De,
    kS as Oe,
    qS as T,
    vS as ke
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    r as Ae,
    t as je
} from "./5422a199-ohc0ujx944q7esd3.js";
var Me = e((() => {
        Ee()
    })),
    Ne = e((() => {
        Me()
    })),
    Pe, E, Fe, Ie, Le, Re, D, O, k, A, j, M, N, P, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, F, I, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, L, R, ut, z, dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, B, St, V, H, Ct, wt, Tt, Et, Dt, Ot, U, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, W, G, K, Gt, Kt, qt, q, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, J, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn = e((() => {
        Ne(), Pe = `io.modelcontextprotocol/related-task`, E = Oe(e => e !== null && (typeof e == `object` || typeof e == `function`)), Fe = w([T(), S().int()]), Ie = T(), b({
            ttl: w([S(), xe()]).optional(),
            pollInterval: S().optional()
        }), Le = _({
            ttl: S().optional()
        }), Re = _({
            taskId: T()
        }), D = b({
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
        }), N = b({
            _meta: D.optional()
        }), P = w([T(), S().int()]), ze = _({
            jsonrpc: v(`2.0`),
            id: P,
            ...A.shape
        }).strict(), Be = _({
            jsonrpc: v(`2.0`),
            ...M.shape
        }).strict(), Ve = _({
            jsonrpc: v(`2.0`),
            id: P,
            result: N
        }).strict(), (function(e) {
            e[e.ConnectionClosed = -32e3] = `ConnectionClosed`, e[e.RequestTimeout = -32001] = `RequestTimeout`, e[e.ParseError = -32700] = `ParseError`, e[e.InvalidRequest = -32600] = `InvalidRequest`, e[e.MethodNotFound = -32601] = `MethodNotFound`, e[e.InvalidParams = -32602] = `InvalidParams`, e[e.InternalError = -32603] = `InternalError`, e[e.UrlElicitationRequired = -32042] = `UrlElicitationRequired`
        })(He ||= {}), Ue = _({
            jsonrpc: v(`2.0`),
            id: P.optional(),
            error: _({
                code: S().int(),
                message: T(),
                data: C().optional()
            })
        }).strict(), w([ze, Be, Ve, Ue]), w([Ve, Ue]), We = N.strict(), Ge = j.extend({
            requestId: P.optional(),
            reason: T().optional()
        }), Ke = M.extend({
            method: v(`notifications/cancelled`),
            params: Ge
        }), qe = _({
            src: T(),
            mimeType: T().optional(),
            sizes: h(T()).optional(),
            theme: m([`light`, `dark`]).optional()
        }), F = _({
            icons: h(qe).optional()
        }), I = _({
            name: T(),
            title: T().optional()
        }), Je = I.extend({
            ...I.shape,
            ...F.shape,
            version: T(),
            websiteUrl: T().optional(),
            description: T().optional()
        }), Ye = be(_({
            applyDefaults: y().optional()
        }), g(T(), C())), Xe = Se(e => e && typeof e == `object` && !Array.isArray(e) && Object.keys(e).length === 0 ? {
            form: {}
        } : e, be(_({
            form: Ye.optional(),
            url: E.optional()
        }), g(T(), C()).optional())), Ze = b({
            list: E.optional(),
            cancel: E.optional(),
            requests: b({
                sampling: b({
                    createMessage: E.optional()
                }).optional(),
                elicitation: b({
                    create: E.optional()
                }).optional()
            }).optional()
        }), Qe = b({
            list: E.optional(),
            cancel: E.optional(),
            requests: b({
                tools: b({
                    call: E.optional()
                }).optional()
            }).optional()
        }), $e = _({
            experimental: g(T(), E).optional(),
            sampling: _({
                context: E.optional(),
                tools: E.optional()
            }).optional(),
            elicitation: Xe.optional(),
            roots: _({
                listChanged: y().optional()
            }).optional(),
            tasks: Ze.optional()
        }), et = O.extend({
            protocolVersion: T(),
            capabilities: $e,
            clientInfo: Je
        }), tt = A.extend({
            method: v(`initialize`),
            params: et
        }), nt = _({
            experimental: g(T(), E).optional(),
            logging: E.optional(),
            completions: E.optional(),
            prompts: _({
                listChanged: y().optional()
            }).optional(),
            resources: _({
                subscribe: y().optional(),
                listChanged: y().optional()
            }).optional(),
            tools: _({
                listChanged: y().optional()
            }).optional(),
            tasks: Qe.optional()
        }), rt = N.extend({
            protocolVersion: T(),
            capabilities: nt,
            serverInfo: Je,
            instructions: T().optional()
        }), it = M.extend({
            method: v(`notifications/initialized`),
            params: j.optional()
        }), at = A.extend({
            method: v(`ping`),
            params: O.optional()
        }), ot = _({
            progress: S(),
            total: x(S()),
            message: x(T())
        }), st = _({
            ...j.shape,
            ...ot.shape,
            progressToken: Fe
        }), ct = M.extend({
            method: v(`notifications/progress`),
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
            ttl: w([S(), xe()]),
            createdAt: T(),
            lastUpdatedAt: T(),
            pollInterval: x(S()),
            statusMessage: x(T())
        }), dt = N.extend({
            task: z
        }), ft = j.merge(z), pt = M.extend({
            method: v(`notifications/tasks/status`),
            params: ft
        }), mt = A.extend({
            method: v(`tasks/get`),
            params: O.extend({
                taskId: T()
            })
        }), ht = N.merge(z), gt = A.extend({
            method: v(`tasks/result`),
            params: O.extend({
                taskId: T()
            })
        }), N.loose(), _t = L.extend({
            method: v(`tasks/list`)
        }), vt = R.extend({
            tasks: h(z)
        }), yt = A.extend({
            method: v(`tasks/cancel`),
            params: O.extend({
                taskId: T()
            })
        }), N.merge(z), bt = _({
            uri: T(),
            mimeType: x(T()),
            _meta: g(T(), C()).optional()
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
            audience: h(V).optional(),
            priority: S().min(0).max(1).optional(),
            lastModified: De({
                offset: !0
            }).optional()
        }), Ct = _({
            ...I.shape,
            ...F.shape,
            uri: T(),
            description: x(T()),
            mimeType: x(T()),
            annotations: H.optional(),
            _meta: x(b({}))
        }), wt = _({
            ...I.shape,
            ...F.shape,
            uriTemplate: T(),
            description: x(T()),
            mimeType: x(T()),
            annotations: H.optional(),
            _meta: x(b({}))
        }), Tt = L.extend({
            method: v(`resources/list`)
        }), Et = R.extend({
            resources: h(Ct)
        }), Dt = L.extend({
            method: v(`resources/templates/list`)
        }), Ot = R.extend({
            resourceTemplates: h(wt)
        }), U = O.extend({
            uri: T()
        }), kt = U, At = A.extend({
            method: v(`resources/read`),
            params: kt
        }), jt = N.extend({
            contents: h(w([xt, St]))
        }), Mt = M.extend({
            method: v(`notifications/resources/list_changed`),
            params: j.optional()
        }), Nt = U, Pt = A.extend({
            method: v(`resources/subscribe`),
            params: Nt
        }), Ft = U, It = A.extend({
            method: v(`resources/unsubscribe`),
            params: Ft
        }), Lt = j.extend({
            uri: T()
        }), Rt = M.extend({
            method: v(`notifications/resources/updated`),
            params: Lt
        }), zt = _({
            name: T(),
            description: x(T()),
            required: x(y())
        }), Bt = _({
            ...I.shape,
            ...F.shape,
            description: x(T()),
            arguments: x(h(zt)),
            _meta: x(b({}))
        }), Vt = L.extend({
            method: v(`prompts/list`)
        }), Ht = R.extend({
            prompts: h(Bt)
        }), Ut = O.extend({
            name: T(),
            arguments: g(T(), T()).optional()
        }), Wt = A.extend({
            method: v(`prompts/get`),
            params: Ut
        }), W = _({
            type: v(`text`),
            text: T(),
            annotations: H.optional(),
            _meta: g(T(), C()).optional()
        }), G = _({
            type: v(`image`),
            data: B,
            mimeType: T(),
            annotations: H.optional(),
            _meta: g(T(), C()).optional()
        }), K = _({
            type: v(`audio`),
            data: B,
            mimeType: T(),
            annotations: H.optional(),
            _meta: g(T(), C()).optional()
        }), Gt = _({
            type: v(`tool_use`),
            name: T(),
            id: T(),
            input: g(T(), C()),
            _meta: g(T(), C()).optional()
        }), Kt = _({
            type: v(`resource`),
            resource: w([xt, St]),
            annotations: H.optional(),
            _meta: g(T(), C()).optional()
        }), qt = Ct.extend({
            type: v(`resource_link`)
        }), q = w([W, G, K, qt, Kt]), Jt = _({
            role: V,
            content: q
        }), Yt = N.extend({
            description: T().optional(),
            messages: h(Jt)
        }), Xt = M.extend({
            method: v(`notifications/prompts/list_changed`),
            params: j.optional()
        }), Zt = _({
            title: T().optional(),
            readOnlyHint: y().optional(),
            destructiveHint: y().optional(),
            idempotentHint: y().optional(),
            openWorldHint: y().optional()
        }), Qt = _({
            taskSupport: m([`required`, `optional`, `forbidden`]).optional()
        }), $t = _({
            ...I.shape,
            ...F.shape,
            description: T().optional(),
            inputSchema: _({
                type: v(`object`),
                properties: g(T(), E).optional(),
                required: h(T()).optional()
            }).catchall(C()),
            outputSchema: _({
                type: v(`object`),
                properties: g(T(), E).optional(),
                required: h(T()).optional()
            }).catchall(C()).optional(),
            annotations: Zt.optional(),
            execution: Qt.optional(),
            _meta: g(T(), C()).optional()
        }), en = L.extend({
            method: v(`tools/list`)
        }), tn = R.extend({
            tools: h($t)
        }), nn = N.extend({
            content: h(q).default([]),
            structuredContent: g(T(), C()).optional(),
            isError: y().optional()
        }), nn.or(N.extend({
            toolResult: C()
        })), rn = k.extend({
            name: T(),
            arguments: g(T(), C()).optional()
        }), an = A.extend({
            method: v(`tools/call`),
            params: rn
        }), on = M.extend({
            method: v(`notifications/tools/list_changed`),
            params: j.optional()
        }), _({
            autoRefresh: y().default(!0),
            debounceMs: S().int().nonnegative().default(300)
        }), sn = m([`debug`, `info`, `notice`, `warning`, `error`, `critical`, `alert`, `emergency`]), cn = O.extend({
            level: sn
        }), ln = A.extend({
            method: v(`logging/setLevel`),
            params: cn
        }), un = j.extend({
            level: sn,
            logger: T().optional(),
            data: C()
        }), dn = M.extend({
            method: v(`notifications/message`),
            params: un
        }), fn = _({
            name: T().optional()
        }), pn = _({
            hints: h(fn).optional(),
            costPriority: S().min(0).max(1).optional(),
            speedPriority: S().min(0).max(1).optional(),
            intelligencePriority: S().min(0).max(1).optional()
        }), mn = _({
            mode: m([`auto`, `required`, `none`]).optional()
        }), hn = _({
            type: v(`tool_result`),
            toolUseId: T().describe(`The unique identifier for the corresponding tool call.`),
            content: h(q).default([]),
            structuredContent: _({}).loose().optional(),
            isError: y().optional(),
            _meta: g(T(), C()).optional()
        }), gn = ye(`type`, [W, G, K]), J = ye(`type`, [W, G, K, Gt, hn]), _n = _({
            role: V,
            content: w([J, h(J)]),
            _meta: g(T(), C()).optional()
        }), vn = k.extend({
            messages: h(_n),
            modelPreferences: pn.optional(),
            systemPrompt: T().optional(),
            includeContext: m([`none`, `thisServer`, `allServers`]).optional(),
            temperature: S().optional(),
            maxTokens: S().int(),
            stopSequences: h(T()).optional(),
            metadata: E.optional(),
            tools: h($t).optional(),
            toolChoice: mn.optional()
        }), yn = A.extend({
            method: v(`sampling/createMessage`),
            params: vn
        }), bn = N.extend({
            model: T(),
            stopReason: x(m([`endTurn`, `stopSequence`, `maxTokens`]).or(T())),
            role: V,
            content: gn
        }), xn = N.extend({
            model: T(),
            stopReason: x(m([`endTurn`, `stopSequence`, `maxTokens`, `toolUse`]).or(T())),
            role: V,
            content: w([J, h(J)])
        }), Sn = _({
            type: v(`boolean`),
            title: T().optional(),
            description: T().optional(),
            default: y().optional()
        }), Cn = _({
            type: v(`string`),
            title: T().optional(),
            description: T().optional(),
            minLength: S().optional(),
            maxLength: S().optional(),
            format: m([`email`, `uri`, `date`, `date-time`]).optional(),
            default: T().optional()
        }), wn = _({
            type: m([`number`, `integer`]),
            title: T().optional(),
            description: T().optional(),
            minimum: S().optional(),
            maximum: S().optional(),
            default: S().optional()
        }), Tn = _({
            type: v(`string`),
            title: T().optional(),
            description: T().optional(),
            enum: h(T()),
            default: T().optional()
        }), En = _({
            type: v(`string`),
            title: T().optional(),
            description: T().optional(),
            oneOf: h(_({
                const: T(),
                title: T()
            })),
            default: T().optional()
        }), Dn = _({
            type: v(`string`),
            title: T().optional(),
            description: T().optional(),
            enum: h(T()),
            enumNames: h(T()).optional(),
            default: T().optional()
        }), On = w([Tn, En]), kn = _({
            type: v(`array`),
            title: T().optional(),
            description: T().optional(),
            minItems: S().optional(),
            maxItems: S().optional(),
            items: _({
                type: v(`string`),
                enum: h(T())
            }),
            default: h(T()).optional()
        }), An = _({
            type: v(`array`),
            title: T().optional(),
            description: T().optional(),
            minItems: S().optional(),
            maxItems: S().optional(),
            items: _({
                anyOf: h(_({
                    const: T(),
                    title: T()
                }))
            }),
            default: h(T()).optional()
        }), jn = w([kn, An]), Mn = w([Dn, On, jn]), Nn = w([Mn, Sn, Cn, wn]), Pn = k.extend({
            mode: v(`form`).optional(),
            message: T(),
            requestedSchema: _({
                type: v(`object`),
                properties: g(T(), Nn),
                required: h(T()).optional()
            })
        }), Fn = k.extend({
            mode: v(`url`),
            message: T(),
            elicitationId: T(),
            url: T().url()
        }), In = w([Pn, Fn]), Ln = A.extend({
            method: v(`elicitation/create`),
            params: In
        }), Rn = j.extend({
            elicitationId: T()
        }), zn = M.extend({
            method: v(`notifications/elicitation/complete`),
            params: Rn
        }), Bn = N.extend({
            action: m([`accept`, `decline`, `cancel`]),
            content: Se(e => e === null ? void 0 : e, g(T(), w([T(), S(), y(), h(T())])).optional())
        }), Vn = _({
            type: v(`ref/resource`),
            uri: T()
        }), Hn = _({
            type: v(`ref/prompt`),
            name: T()
        }), Un = O.extend({
            ref: w([Hn, Vn]),
            argument: _({
                name: T(),
                value: T()
            }),
            context: _({
                arguments: g(T(), T()).optional()
            }).optional()
        }), Wn = A.extend({
            method: v(`completion/complete`),
            params: Un
        }), Gn = N.extend({
            completion: b({
                values: h(T()).max(100),
                total: x(S().int()),
                hasMore: x(y())
            })
        }), Kn = _({
            uri: T().startsWith(`file://`),
            name: T().optional(),
            _meta: g(T(), C()).optional()
        }), qn = A.extend({
            method: v(`roots/list`),
            params: O.optional()
        }), Jn = N.extend({
            roots: h(Kn)
        }), Yn = M.extend({
            method: v(`notifications/roots/list_changed`),
            params: j.optional()
        }), w([at, tt, Wn, ln, Wt, Vt, Tt, Dt, At, Pt, It, an, en, mt, gt, _t, yt]), w([Ke, ct, it, Yn, pt]), w([We, bn, xn, Bn, Jn, ht, vt, dt]), w([at, yn, Ln, qn, mt, gt, _t, yt]), w([Ke, ct, dn, Rt, Mt, on, Xt, pt, zn]), w([We, rt, Gn, Yt, Ht, Et, Ot, jt, nn, tn, ht, vt, dt])
    }));

function Zn(e, t) {
    return fe(e, [e => e.theme === t, e => e.theme == null, e => e.sizes == null || e.sizes.includes(`any`) ? 1 / 0 : Math.max(0, ...e.sizes.map(e => {
        let [t, n] = e.split(`x`).map(Number);
        return t * n
    }))], [`desc`, `desc`, `desc`])[0]?.src
}
var Qn, $n, er, tr, Y, X = e((() => {
        Xn(), _e(), ke(), je(), Qn = 16384, $n = we({
            protocol: /^https?$/u
        }).transform(e => new URL(e)).refine(e => e.username === `` && e.password === ``), er = /^image\/(png|jpeg|jpg|gif|webp|svg\+xml|x-icon|vnd\.microsoft\.icon)$/u, tr = qe.extend({
            src: T().trim().min(1).max(Qn).refine(e => {
                if (/[\u0000-\u0020\u007f]/u.test(e)) return !1;
                if (!e.startsWith(`data:`)) return $n.safeParse(e).success;
                let t = Ae(e);
                return t != null && er.test(t.mimeType) && e.indexOf(`,`) < e.length - 1
            }),
            mimeType: T().regex(er).optional(),
            sizes: h(T().max(32).regex(/^(any|[1-9][0-9]*x[1-9][0-9]*)$/u)).max(8).optional()
        }).strip(), Y = h(tr.optional().catch(void 0)).max(8).transform(e => e.filter(e => e != null)).refine(e => e.reduce((e, t) => e + t.src.length, 0) <= Qn).optional().catch(void 0)
    })),
    nr, rr = e((() => {
        ke(), X(), nr = h(_({
            id: T().regex(/^[a-z][a-z0-9_-]{0,63}$/u),
            title: T().trim().min(1).max(128).refine(e => !/\p{Cc}/u.test(e)),
            icons: Y,
            accessMode: m([`included`, `connected`, `web`]).optional(),
            delayMinutes: S().int().min(1).max(10080).optional()
        })).max(32)
    }));

function ir(e) {
    return e.providerId == null ? e.capabilityId == null ? e.id : `${e.id}:${e.capabilityId}` : `${e.id}:provider:${e.providerId}:${e.accessMode??``}`
}

function ar(e, t, n = [], i = []) {
    let a = or(e, t, n),
        s = new Map,
        c = new Set,
        l = new Set;
    for (let t of e) {
        let e = t.invocation;
        if (e == null) continue;
        let n = fr(e, a);
        if (n == null) continue;
        let i = r(n.id);
        if (e.sourceProviders !== void 0) {
            if (e.sourceProviders.length === 0) continue;
            l.add(i), c.add(i);
            for (let [e, t] of s) r(t.id) === i && t.providerId == null && s.delete(e);
            for (let t of e.sourceProviders) {
                let r = `${i}:provider:${t.id}:${t.accessMode??``}`,
                    a = s.get(r);
                s.set(r, {
                    ...n,
                    name: t.title,
                    providerId: t.id,
                    accessMode: t.accessMode,
                    sourceIcons: t.icons ?? a?.sourceIcons,
                    sourceConnectorIds: [...new Set([...a?.sourceConnectorIds ?? [], e.connectorId])],
                    delayMinutes: Math.max(t.delayMinutes ?? 0, a?.delayMinutes ?? 0) || void 0
                })
            }
            continue
        }
        if (!l.has(i))
            if (e.capabilityId != null && e.capabilityName != null) {
                let t = s.get(i);
                s.delete(i), c.add(i);
                let r = `${i}:${e.capabilityId}`,
                    a = s.get(r),
                    o = e.sourceIcons ?? a?.sourceIcons,
                    l = [...new Set([...a?.sourceConnectorIds ?? [], t?.id, a?.id, e.connectorId].filter(e => e != null && e !== n.id))],
                    u = {
                        ...n,
                        name: e.capabilityName,
                        capabilityId: e.capabilityId,
                        ...o == null ? {} : {
                            sourceIcons: o
                        },
                        ...l.length > 0 ? {
                            sourceConnectorIds: l
                        } : {}
                    };
                s.set(r, u)
            } else c.has(i) || s.set(i, n)
    }
    if (i.length > 0) {
        let t = new Map(n.map(e => [e.id, e])),
            l = new Set(e.flatMap(({
                privateConnectorId: e
            }) => e == null ? [] : [r(e)]));
        for (let e of i) {
            let n = r(e),
                i = o(t, e);
            if (i == null || i.status !== `ENABLED` || l.has(n) || i.connector_type != null && Te({
                    app_metadata: i.app_metadata,
                    connector_type: i.connector_type,
                    status: i.status
                })) continue;
            if (c.has(n)) {
                for (let [t, i] of s) i.capabilityId == null && i.providerId == null || r(i.id) !== n || i.id === e || i.sourceConnectorIds?.includes(e) || s.set(t, {
                    ...i,
                    sourceConnectorIds: [...i.sourceConnectorIds ?? [], e]
                });
                continue
            }
            let u = fr({
                connectorId: e,
                connectorName: null,
                logoUrl: null
            }, a, !0);
            if (u == null) continue;
            let d = s.get(n);
            if (d != null) {
                d.id !== e && !d.sourceConnectorIds?.includes(e) && s.set(n, {
                    ...u,
                    id: d.id,
                    sourceConnectorIds: [...d.sourceConnectorIds ?? [], e]
                });
                continue
            }
            s.set(n, u)
        }
    }
    return [...s.values()]
}

function or(e, n, r) {
    let i = sr(e),
        a = new Map;
    for (let t of e)
        for (let e of t.catalogActions) e.kind !== `exclude` && cr(a, e.connectorIds, e.plugin, e.kind === `set-if-missing`);
    for (let e of n)
        for (let t of e.apps_content) {
            let e = Z(t.display_name);
            e != null && cr(a, [t.id], {
                id: t.id,
                name: e,
                logoUrl: t.logo_url,
                logoDarkUrl: t.logo_dark_url
            })
        }
    for (let e of r) {
        let n = Z(e.name);
        if (n == null) continue;
        let {
            lightLogoUrl: r,
            darkLogoUrl: i
        } = t(e);
        cr(a, [e.id], {
            id: e.id,
            name: n,
            logoUrl: r,
            logoDarkUrl: i
        })
    }
    return {
        excludedIdentifiers: i,
        pluginsByConnectorId: a
    }
}

function sr(e) {
    return new Set(e.flatMap(e => e.catalogActions.flatMap(e => e.kind === `exclude` ? e.connectorIds.flatMap(e => {
        let t = e.trim(),
            n = ee(t);
        return n == null ? [t] : [t, n]
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
        if (Te(n)) {
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
    let r = e.metadata?.serialization_metadata?.custom_symbol_offsets ?? [];
    if (r.length > 0) {
        let i = ae(e);
        for (let e of r) {
            let r = u(e),
                a = r.id;
            if (r.symbol !== l.EcosystemMention || !c(a)) continue;
            let o = n(a),
                s = i.slice(r.startIndex, r.endIndex).trim().replace(/^@/u, ``);
            s && t.push({
                connectorIds: [o],
                kind: `set-if-missing`,
                plugin: {
                    id: o,
                    name: s,
                    logoUrl: null,
                    logoDarkUrl: null
                }
            })
        }
    }
    let i = e.metadata,
        a = i?.invoked_resource?.publish_status === `private` || i?.chatgpt_sdk?.distribution_channel === p.ONLY_ME;
    return {
        catalogActions: t,
        invocation: ur(e),
        privateConnectorId: a && dr(e) ? Z(i?.invoked_resource?.connector_id) : null
    }
}

function ur(e) {
    let t = e.metadata,
        n = t?.invoked_resource,
        r = t?.invoked_plugin,
        i = Z(n?.connector_id),
        a = nr.safeParse(n?.source_providers).data,
        o = Z(r?.connector_name) ?? (a !== void 0 || i === pr ? Z(n?.app_name) : null);
    if (i == null || i === `connector_openai_plugin_management` || !dr(e) || n?.publish_status === `private` || t?.chatgpt_sdk?.distribution_channel === p.ONLY_ME) return null;
    let s = (t?.tool_icons ?? []).find(e => /\/ecosystem\/apps\/[^/]+/.test(e)) ?? (i === pr ? `/images/ecosystem/apps/appgarden/icon.png` : null),
        c = Z(n?.capability_id),
        l = Z(n?.capability_name),
        u = Y.safeParse(n?.source_icons).data;
    return {
        connectorId: i,
        connectorName: o,
        logoUrl: s,
        sourceProviders: a,
        ...c != null && l != null ? {
            capabilityId: c,
            capabilityName: l
        } : {},
        ...u == null ? {} : {
            sourceIcons: u
        }
    }
}

function dr(e) {
    let t = e.metadata?.chatgpt_sdk?.tool_response_metadata?.status;
    if (e.author.role !== re.Tool || e.status === `in_progress` || e.status === `finished_partial_completion` || e.metadata?.is_error === !0 || e.metadata?.chatgpt_sdk?.is_error === !0 || t === `error` || t === `cancelled` || e.metadata?.__internal?.api_tool_error?.error_code != null) return !1;
    let n = e.metadata?.invoked_plugin?.http_response_status;
    if (n == null) return !0;
    let r = Number(n);
    return Number.isInteger(r) && r >= 200 && r < 300
}

function fr(e, t, n = !1) {
    let i = e.connectorId;
    if (mr.has(r(i)) || t.excludedIdentifiers.has(i)) return null;
    let a = n ? o(t.pluginsByConnectorId, i) : t.pluginsByConnectorId.get(i);
    if (a != null) {
        let t = a.logoUrl != null;
        return {
            ...a,
            id: i,
            name: e.connectorName ?? a.name,
            logoUrl: a.logoUrl ?? e.logoUrl,
            logoDarkUrl: t ? a.logoDarkUrl : null
        }
    }
    return e.connectorName == null ? null : {
        id: i,
        name: e.connectorName,
        logoUrl: e.logoUrl,
        logoDarkUrl: null
    }
}

function Z(e) {
    return typeof e == `string` && e.trim() ? e.trim() : null
}
var pr, mr, hr = e((() => {
    d(), a(), Ce(), ue(), ie(), X(), rr(), oe(), s(), i(), pr = `connector_20205bf7d4e99a89d7154bb849718324`, mr = new Set([`connector_openai_genui_search`, `connector_openai_genui_sheep`, `connector_openai_search_service`, le, `connector_openai_user_notifications`, `connector_openai_personal_context`])
}));

function Q(e) {
    return e?.trim() ? e : null
}

function gr(e, t) {
    let n = [e.connectorId, e.linkId];
    return [JSON.stringify([...n, `id`, t.id]), ...t.url == null ? [] : [JSON.stringify([...n, `url`, ge(new URL(t.url))])], ...t.open == null ? [] : [he([...n, `open`, t.open])]]
}

function _r(e) {
    let t = ur(e)?.connectorId;
    if (t == null) return null;
    let n, r, i = e.content.content_type === `code` && e.content.text.includes(`openai/resourceActivities`) ? Er.safeParse(se(e, e.content.text)) : null;
    if (i?.success) {
        if (i.data.appContext.connectorId !== t) return null;
        n = [i.data.result], r = Q(i.data.appContext.linkId)
    } else {
        let i = e.metadata?.chatgpt_sdk,
            a = i?.tool_response_metadata;
        if (a?.status !== `success`) return null;
        let o = (e.metadata?.invoked_resource?.resource_uri)?.replace(/^\/+|\/+$/gu, ``).split(`/`);
        if (o == null || o.length !== 2 && o.length !== 3 || o.some(e => !e) || (o.length === 3 || /^(connector_|asdk_app_)/u.test(o[0])) && o[0] !== t) return null;
        n = [a.call_tool_result, a.mcp_tool_result], r = Q(i?.link_id) ?? Q(i?.[`openai/link_id`]) ?? Q(o.length === 3 ? o[1] : null)
    }
    for (let e of n) {
        let n = Tr.safeParse(e);
        if (!n.success || n.data.isError) continue;
        let i = wr.safeParse(n.data._meta ?? n.data.meta);
        if (i.success) return {
            connectorId: t,
            linkId: r,
            resources: i.data[`openai/resourceActivities`].resources
        }
    }
    return null
}

function vr(e) {
    if (e.author.role !== re.Assistant || !ve(e) || e.channel !== `final` && e.end_turn !== !0) return [];
    let t = [],
        n = new Map;
    for (let r of e.metadata?.content_references ?? []) {
        if (r.type !== `mcp_source` || typeof r.citation_id != `string` || !r.citation_id.trim() || typeof r.connector_id != `string` || !r.connector_id.trim() || r.link_id != null && typeof r.link_id != `string`) continue;
        let i = Cr.safeParse({
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
        if (t.length === xr) break
    }
    return t
}

function* yr(e, t) {
    for (let [n, r] of e.entries()) {
        let e = t[n];
        e != null && (yield {
            messageIndex: n,
            activity: e
        });
        for (let e of vr(r)) yield {
            messageIndex: n,
            activity: e
        }
    }
}

function br(e, t) {
    if (!t.some(e => e?.resources.length) && !e.some(e => vr(e).length)) return [];
    let n = ne;
    for (let t of e) n = te(n, t);
    let r = new Map(n.flatMap((e, t) => e.messages.map(e => [e.id, t]))),
        i = new Set,
        a = new Map,
        o = 0,
        s = 0;
    for (let {
            messageIndex: n,
            activity: c
        }
        of yr(e, t)) {
        let t = e[n],
            l = r.get(t.id) ?? n;
        for (let e of c.resources) {
            let r = e.url == null ? void 0 : new URL(e.url),
                u = gr(c, e),
                d = new Set(u.flatMap(e => {
                    let t = a.get(e);
                    return t == null ? [] : [t]
                })),
                f = [...d].sort((e, t) => e.firstSeenIndex - t.firstSeenIndex)[0];
            f ?? (f = {
                firstSeenIndex: n,
                openIndex: -1,
                iconsIndex: -1,
                source: {
                    key: u[0],
                    connectorId: c.connectorId,
                    title: e.title?.trim() || (r == null ? e.id : `${r.host}${r.pathname===`/`?``:r.pathname}`),
                    url: e.url,
                    mimeType: e.mimeType
                },
                aliases: new Set,
                activitiesByTurn: new Map
            }, i.add(f));
            for (let e of d)
                if (e !== f) {
                    e.openIndex > f.openIndex && (f.source.open = e.source.open, f.openIndex = e.openIndex), e.iconsIndex > f.iconsIndex && (f.source.icons = e.source.icons, f.iconsIndex = e.iconsIndex), f.source.capabilityId == null && e.source.capabilityId != null && (f.source.capabilityId = e.source.capabilityId, f.source.capabilityName = e.source.capabilityName);
                    for (let t of e.aliases) f.aliases.add(t), a.set(t, f);
                    for (let [t, n] of e.activitiesByTurn) {
                        let e = f.activitiesByTurn.get(t) ?? {
                            values: new Set,
                            firstReadMessageIndex: 1 / 0
                        };
                        for (let t of n.values) e.values.add(t);
                        e.firstReadMessageIndex = Math.min(e.firstReadMessageIndex, n.firstReadMessageIndex), f.activitiesByTurn.set(t, e)
                    }
                    i.delete(e)
                } for (let e of u) f.aliases.add(e), a.set(e, f);
            let p = f.activitiesByTurn.get(l) ?? {
                values: new Set,
                firstReadMessageIndex: 1 / 0
            };
            for (let t of e.activities) p.values.add(t);
            e.activities.includes(`read`) && (p.firstReadMessageIndex = Math.min(p.firstReadMessageIndex, n), e.open != null && (f.openIndex = o++, f.source.open = {
                ...e.open,
                linkId: c.linkId,
                messageId: t.id
            })), f.activitiesByTurn.set(l, p), f.source.url = e.url ?? f.source.url, e.title?.trim() && (f.source.title = e.title.trim()), f.source.mimeType ??= e.mimeType, e.icons?.length && (f.source.icons = e.icons, f.iconsIndex = s++), f.source.capabilityId == null && c.capabilityId != null && (f.source.capabilityId = c.capabilityId, f.source.capabilityName = c.capabilityName)
        }
    }
    return [...i].flatMap(t => {
        let n = 1 / 0;
        for (let e of t.activitiesByTurn.values()) e.values.has(`created`) || (n = Math.min(n, e.firstReadMessageIndex));
        return n === 1 / 0 ? [] : {
            ...t.source,
            firstSeenMessageId: e[n].id
        }
    })
}
var xr, $, Sr, Cr, wr, Tr, Er, Dr = e((() => {
    d(), f(), hr(), pe(), oe(), de(), ce(), ke(), X(), xr = 100, $ = T().max(16384), Sr = _({
        id: $.refine(e => e.trim().length > 0),
        url: $.refine(e => me(e) != null).optional(),
        title: $.optional(),
        mimeType: $.optional(),
        icons: Y,
        activities: h(m([`read`, `created`, `updated`])).min(1).max(xr),
        open: _({
            tool: T().regex(/^[a-zA-Z0-9_.-]{1,256}$/u),
            arguments: g(T(), C()).refine(e => new TextEncoder().encode(JSON.stringify(e)).length <= 16384)
        }).optional().catch(void 0)
    }), Cr = Sr.refine(e => e.url != null || e.open != null), wr = _({
        "openai/resourceActivities": _({
            version: v(1),
            resources: h(Sr.required({
                url: !0
            })).min(1).max(xr)
        })
    }), Tr = _({
        isError: y().optional(),
        _meta: C().optional(),
        meta: C().optional()
    }), Er = _({
        type: v(`mcpToolCall`),
        server: m([`codex_apps`, `codex-connectors-mcp`]),
        status: v(`completed`),
        error: xe().optional(),
        appContext: _({
            connectorId: T(),
            linkId: T().nullable()
        }),
        result: Tr
    })
}));
export {
    ur as a, ir as c, X as d, Zn as f, Dr as i, ar as l, _r as n, sr as o, br as r, lr as s, vr as t, hr as u
};
//# sourceMappingURL=4aa1bb90-67thjbfomst0dyy3.js.map