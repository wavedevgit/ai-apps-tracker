import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $E as t,
    $Y as n,
    Aq as r,
    JE as i,
    KE as a,
    Ket as o,
    Mq as s,
    QE as c,
    Tq as l,
    ZE as u,
    _tt as d,
    eD as f,
    eX as p,
    ftt as ee,
    gtt as te,
    htt as ne,
    tX as re
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Jgt as ie,
    cB as ae,
    gBt as oe,
    hBt as se,
    lB as ce,
    nS as le,
    nft as ue,
    oB as de,
    qgt as fe,
    rM as pe,
    rS as me,
    sB as he,
    tS as ge,
    tft as _e,
    uB as ve
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $x as ye,
    Fv as be,
    Hx as xe,
    Pv as Se,
    Qx as m,
    Wx as Ce,
    Yx as we,
    Zx as h,
    _S as g,
    bS as _,
    cS as v,
    dS as y,
    eS as Te,
    fS as b,
    hS as x,
    iS as Ee,
    mS as De,
    pS as S,
    qx as C,
    sS as w,
    wS as Oe,
    xS as ke,
    yS as T
} from "./c2675c8c-oz03twoan08d72ud.js";
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
        Ne(), Pe = `io.modelcontextprotocol/related-task`, E = ye(e => e !== null && (typeof e == `object` || typeof e == `function`)), Fe = T([g(), y().int()]), Ie = g(), v({
            ttl: T([y(), we()]).optional(),
            pollInterval: y().optional()
        }), Le = b({
            ttl: y().optional()
        }), Re = b({
            taskId: g()
        }), D = v({
            progressToken: Fe.optional(),
            [Pe]: Re.optional()
        }), O = b({
            _meta: D.optional()
        }), k = O.extend({
            task: Le.optional()
        }), A = b({
            method: g(),
            params: O.loose().optional()
        }), j = b({
            _meta: D.optional()
        }), M = b({
            method: g(),
            params: j.loose().optional()
        }), N = v({
            _meta: D.optional()
        }), P = T([g(), y().int()]), ze = b({
            jsonrpc: w(`2.0`),
            id: P,
            ...A.shape
        }).strict(), Be = b({
            jsonrpc: w(`2.0`),
            ...M.shape
        }).strict(), Ve = b({
            jsonrpc: w(`2.0`),
            id: P,
            result: N
        }).strict(), (function(e) {
            e[e.ConnectionClosed = -32e3] = `ConnectionClosed`, e[e.RequestTimeout = -32001] = `RequestTimeout`, e[e.ParseError = -32700] = `ParseError`, e[e.InvalidRequest = -32600] = `InvalidRequest`, e[e.MethodNotFound = -32601] = `MethodNotFound`, e[e.InvalidParams = -32602] = `InvalidParams`, e[e.InternalError = -32603] = `InternalError`, e[e.UrlElicitationRequired = -32042] = `UrlElicitationRequired`
        })(He ||= {}), Ue = b({
            jsonrpc: w(`2.0`),
            id: P.optional(),
            error: b({
                code: y().int(),
                message: g(),
                data: _().optional()
            })
        }).strict(), T([ze, Be, Ve, Ue]), T([Ve, Ue]), We = N.strict(), Ge = j.extend({
            requestId: P.optional(),
            reason: g().optional()
        }), Ke = M.extend({
            method: w(`notifications/cancelled`),
            params: Ge
        }), qe = b({
            src: g(),
            mimeType: g().optional(),
            sizes: h(g()).optional(),
            theme: C([`light`, `dark`]).optional()
        }), F = b({
            icons: h(qe).optional()
        }), I = b({
            name: g(),
            title: g().optional()
        }), Je = I.extend({
            ...I.shape,
            ...F.shape,
            version: g(),
            websiteUrl: g().optional(),
            description: g().optional()
        }), Ye = Ee(b({
            applyDefaults: m().optional()
        }), x(g(), _())), Xe = De(e => e && typeof e == `object` && !Array.isArray(e) && Object.keys(e).length === 0 ? {
            form: {}
        } : e, Ee(b({
            form: Ye.optional(),
            url: E.optional()
        }), x(g(), _()).optional())), Ze = v({
            list: E.optional(),
            cancel: E.optional(),
            requests: v({
                sampling: v({
                    createMessage: E.optional()
                }).optional(),
                elicitation: v({
                    create: E.optional()
                }).optional()
            }).optional()
        }), Qe = v({
            list: E.optional(),
            cancel: E.optional(),
            requests: v({
                tools: v({
                    call: E.optional()
                }).optional()
            }).optional()
        }), $e = b({
            experimental: x(g(), E).optional(),
            sampling: b({
                context: E.optional(),
                tools: E.optional()
            }).optional(),
            elicitation: Xe.optional(),
            roots: b({
                listChanged: m().optional()
            }).optional(),
            tasks: Ze.optional()
        }), et = O.extend({
            protocolVersion: g(),
            capabilities: $e,
            clientInfo: Je
        }), tt = A.extend({
            method: w(`initialize`),
            params: et
        }), nt = b({
            experimental: x(g(), E).optional(),
            logging: E.optional(),
            completions: E.optional(),
            prompts: b({
                listChanged: m().optional()
            }).optional(),
            resources: b({
                subscribe: m().optional(),
                listChanged: m().optional()
            }).optional(),
            tools: b({
                listChanged: m().optional()
            }).optional(),
            tasks: Qe.optional()
        }), rt = N.extend({
            protocolVersion: g(),
            capabilities: nt,
            serverInfo: Je,
            instructions: g().optional()
        }), it = M.extend({
            method: w(`notifications/initialized`),
            params: j.optional()
        }), at = A.extend({
            method: w(`ping`),
            params: O.optional()
        }), ot = b({
            progress: y(),
            total: S(y()),
            message: S(g())
        }), st = b({
            ...j.shape,
            ...ot.shape,
            progressToken: Fe
        }), ct = M.extend({
            method: w(`notifications/progress`),
            params: st
        }), lt = O.extend({
            cursor: Ie.optional()
        }), L = A.extend({
            params: lt.optional()
        }), R = N.extend({
            nextCursor: Ie.optional()
        }), ut = C([`working`, `input_required`, `completed`, `failed`, `cancelled`]), z = b({
            taskId: g(),
            status: ut,
            ttl: T([y(), we()]),
            createdAt: g(),
            lastUpdatedAt: g(),
            pollInterval: S(y()),
            statusMessage: S(g())
        }), dt = N.extend({
            task: z
        }), ft = j.merge(z), pt = M.extend({
            method: w(`notifications/tasks/status`),
            params: ft
        }), mt = A.extend({
            method: w(`tasks/get`),
            params: O.extend({
                taskId: g()
            })
        }), ht = N.merge(z), gt = A.extend({
            method: w(`tasks/result`),
            params: O.extend({
                taskId: g()
            })
        }), N.loose(), _t = L.extend({
            method: w(`tasks/list`)
        }), vt = R.extend({
            tasks: h(z)
        }), yt = A.extend({
            method: w(`tasks/cancel`),
            params: O.extend({
                taskId: g()
            })
        }), N.merge(z), bt = b({
            uri: g(),
            mimeType: S(g()),
            _meta: x(g(), _()).optional()
        }), xt = bt.extend({
            text: g()
        }), B = g().refine(e => {
            try {
                return atob(e), !0
            } catch {
                return !1
            }
        }, {
            message: `Invalid Base64 string`
        }), St = bt.extend({
            blob: B
        }), V = C([`user`, `assistant`]), H = b({
            audience: h(V).optional(),
            priority: y().min(0).max(1).optional(),
            lastModified: Oe({
                offset: !0
            }).optional()
        }), Ct = b({
            ...I.shape,
            ...F.shape,
            uri: g(),
            description: S(g()),
            mimeType: S(g()),
            annotations: H.optional(),
            _meta: S(v({}))
        }), wt = b({
            ...I.shape,
            ...F.shape,
            uriTemplate: g(),
            description: S(g()),
            mimeType: S(g()),
            annotations: H.optional(),
            _meta: S(v({}))
        }), Tt = L.extend({
            method: w(`resources/list`)
        }), Et = R.extend({
            resources: h(Ct)
        }), Dt = L.extend({
            method: w(`resources/templates/list`)
        }), Ot = R.extend({
            resourceTemplates: h(wt)
        }), U = O.extend({
            uri: g()
        }), kt = U, At = A.extend({
            method: w(`resources/read`),
            params: kt
        }), jt = N.extend({
            contents: h(T([xt, St]))
        }), Mt = M.extend({
            method: w(`notifications/resources/list_changed`),
            params: j.optional()
        }), Nt = U, Pt = A.extend({
            method: w(`resources/subscribe`),
            params: Nt
        }), Ft = U, It = A.extend({
            method: w(`resources/unsubscribe`),
            params: Ft
        }), Lt = j.extend({
            uri: g()
        }), Rt = M.extend({
            method: w(`notifications/resources/updated`),
            params: Lt
        }), zt = b({
            name: g(),
            description: S(g()),
            required: S(m())
        }), Bt = b({
            ...I.shape,
            ...F.shape,
            description: S(g()),
            arguments: S(h(zt)),
            _meta: S(v({}))
        }), Vt = L.extend({
            method: w(`prompts/list`)
        }), Ht = R.extend({
            prompts: h(Bt)
        }), Ut = O.extend({
            name: g(),
            arguments: x(g(), g()).optional()
        }), Wt = A.extend({
            method: w(`prompts/get`),
            params: Ut
        }), W = b({
            type: w(`text`),
            text: g(),
            annotations: H.optional(),
            _meta: x(g(), _()).optional()
        }), G = b({
            type: w(`image`),
            data: B,
            mimeType: g(),
            annotations: H.optional(),
            _meta: x(g(), _()).optional()
        }), K = b({
            type: w(`audio`),
            data: B,
            mimeType: g(),
            annotations: H.optional(),
            _meta: x(g(), _()).optional()
        }), Gt = b({
            type: w(`tool_use`),
            name: g(),
            id: g(),
            input: x(g(), _()),
            _meta: x(g(), _()).optional()
        }), Kt = b({
            type: w(`resource`),
            resource: T([xt, St]),
            annotations: H.optional(),
            _meta: x(g(), _()).optional()
        }), qt = Ct.extend({
            type: w(`resource_link`)
        }), q = T([W, G, K, qt, Kt]), Jt = b({
            role: V,
            content: q
        }), Yt = N.extend({
            description: g().optional(),
            messages: h(Jt)
        }), Xt = M.extend({
            method: w(`notifications/prompts/list_changed`),
            params: j.optional()
        }), Zt = b({
            title: g().optional(),
            readOnlyHint: m().optional(),
            destructiveHint: m().optional(),
            idempotentHint: m().optional(),
            openWorldHint: m().optional()
        }), Qt = b({
            taskSupport: C([`required`, `optional`, `forbidden`]).optional()
        }), $t = b({
            ...I.shape,
            ...F.shape,
            description: g().optional(),
            inputSchema: b({
                type: w(`object`),
                properties: x(g(), E).optional(),
                required: h(g()).optional()
            }).catchall(_()),
            outputSchema: b({
                type: w(`object`),
                properties: x(g(), E).optional(),
                required: h(g()).optional()
            }).catchall(_()).optional(),
            annotations: Zt.optional(),
            execution: Qt.optional(),
            _meta: x(g(), _()).optional()
        }), en = L.extend({
            method: w(`tools/list`)
        }), tn = R.extend({
            tools: h($t)
        }), nn = N.extend({
            content: h(q).default([]),
            structuredContent: x(g(), _()).optional(),
            isError: m().optional()
        }), nn.or(N.extend({
            toolResult: _()
        })), rn = k.extend({
            name: g(),
            arguments: x(g(), _()).optional()
        }), an = A.extend({
            method: w(`tools/call`),
            params: rn
        }), on = M.extend({
            method: w(`notifications/tools/list_changed`),
            params: j.optional()
        }), b({
            autoRefresh: m().default(!0),
            debounceMs: y().int().nonnegative().default(300)
        }), sn = C([`debug`, `info`, `notice`, `warning`, `error`, `critical`, `alert`, `emergency`]), cn = O.extend({
            level: sn
        }), ln = A.extend({
            method: w(`logging/setLevel`),
            params: cn
        }), un = j.extend({
            level: sn,
            logger: g().optional(),
            data: _()
        }), dn = M.extend({
            method: w(`notifications/message`),
            params: un
        }), fn = b({
            name: g().optional()
        }), pn = b({
            hints: h(fn).optional(),
            costPriority: y().min(0).max(1).optional(),
            speedPriority: y().min(0).max(1).optional(),
            intelligencePriority: y().min(0).max(1).optional()
        }), mn = b({
            mode: C([`auto`, `required`, `none`]).optional()
        }), hn = b({
            type: w(`tool_result`),
            toolUseId: g().describe(`The unique identifier for the corresponding tool call.`),
            content: h(q).default([]),
            structuredContent: b({}).loose().optional(),
            isError: m().optional(),
            _meta: x(g(), _()).optional()
        }), gn = Te(`type`, [W, G, K]), J = Te(`type`, [W, G, K, Gt, hn]), _n = b({
            role: V,
            content: T([J, h(J)]),
            _meta: x(g(), _()).optional()
        }), vn = k.extend({
            messages: h(_n),
            modelPreferences: pn.optional(),
            systemPrompt: g().optional(),
            includeContext: C([`none`, `thisServer`, `allServers`]).optional(),
            temperature: y().optional(),
            maxTokens: y().int(),
            stopSequences: h(g()).optional(),
            metadata: E.optional(),
            tools: h($t).optional(),
            toolChoice: mn.optional()
        }), yn = A.extend({
            method: w(`sampling/createMessage`),
            params: vn
        }), bn = N.extend({
            model: g(),
            stopReason: S(C([`endTurn`, `stopSequence`, `maxTokens`]).or(g())),
            role: V,
            content: gn
        }), xn = N.extend({
            model: g(),
            stopReason: S(C([`endTurn`, `stopSequence`, `maxTokens`, `toolUse`]).or(g())),
            role: V,
            content: T([J, h(J)])
        }), Sn = b({
            type: w(`boolean`),
            title: g().optional(),
            description: g().optional(),
            default: m().optional()
        }), Cn = b({
            type: w(`string`),
            title: g().optional(),
            description: g().optional(),
            minLength: y().optional(),
            maxLength: y().optional(),
            format: C([`email`, `uri`, `date`, `date-time`]).optional(),
            default: g().optional()
        }), wn = b({
            type: C([`number`, `integer`]),
            title: g().optional(),
            description: g().optional(),
            minimum: y().optional(),
            maximum: y().optional(),
            default: y().optional()
        }), Tn = b({
            type: w(`string`),
            title: g().optional(),
            description: g().optional(),
            enum: h(g()),
            default: g().optional()
        }), En = b({
            type: w(`string`),
            title: g().optional(),
            description: g().optional(),
            oneOf: h(b({
                const: g(),
                title: g()
            })),
            default: g().optional()
        }), Dn = b({
            type: w(`string`),
            title: g().optional(),
            description: g().optional(),
            enum: h(g()),
            enumNames: h(g()).optional(),
            default: g().optional()
        }), On = T([Tn, En]), kn = b({
            type: w(`array`),
            title: g().optional(),
            description: g().optional(),
            minItems: y().optional(),
            maxItems: y().optional(),
            items: b({
                type: w(`string`),
                enum: h(g())
            }),
            default: h(g()).optional()
        }), An = b({
            type: w(`array`),
            title: g().optional(),
            description: g().optional(),
            minItems: y().optional(),
            maxItems: y().optional(),
            items: b({
                anyOf: h(b({
                    const: g(),
                    title: g()
                }))
            }),
            default: h(g()).optional()
        }), jn = T([kn, An]), Mn = T([Dn, On, jn]), Nn = T([Mn, Sn, Cn, wn]), Pn = k.extend({
            mode: w(`form`).optional(),
            message: g(),
            requestedSchema: b({
                type: w(`object`),
                properties: x(g(), Nn),
                required: h(g()).optional()
            })
        }), Fn = k.extend({
            mode: w(`url`),
            message: g(),
            elicitationId: g(),
            url: g().url()
        }), In = T([Pn, Fn]), Ln = A.extend({
            method: w(`elicitation/create`),
            params: In
        }), Rn = j.extend({
            elicitationId: g()
        }), zn = M.extend({
            method: w(`notifications/elicitation/complete`),
            params: Rn
        }), Bn = N.extend({
            action: C([`accept`, `decline`, `cancel`]),
            content: De(e => e === null ? void 0 : e, x(g(), T([g(), y(), m(), h(g())])).optional())
        }), Vn = b({
            type: w(`ref/resource`),
            uri: g()
        }), Hn = b({
            type: w(`ref/prompt`),
            name: g()
        }), Un = O.extend({
            ref: T([Hn, Vn]),
            argument: b({
                name: g(),
                value: g()
            }),
            context: b({
                arguments: x(g(), g()).optional()
            }).optional()
        }), Wn = A.extend({
            method: w(`completion/complete`),
            params: Un
        }), Gn = N.extend({
            completion: v({
                values: h(g()).max(100),
                total: S(y().int()),
                hasMore: S(m())
            })
        }), Kn = b({
            uri: g().startsWith(`file://`),
            name: g().optional(),
            _meta: x(g(), _()).optional()
        }), qn = A.extend({
            method: w(`roots/list`),
            params: O.optional()
        }), Jn = N.extend({
            roots: h(Kn)
        }), Yn = M.extend({
            method: w(`notifications/roots/list_changed`),
            params: j.optional()
        }), T([at, tt, Wn, ln, Wt, Vt, Tt, Dt, At, Pt, It, an, en, mt, gt, _t, yt]), T([Ke, ct, it, Yn, pt]), T([We, bn, xn, Bn, Jn, ht, vt, dt]), T([at, yn, Ln, qn, mt, gt, _t, yt]), T([Ke, ct, dn, Rt, Mt, on, Xt, pt, zn]), T([We, rt, Gn, Yt, Ht, Et, Ot, jt, nn, tn, ht, vt, dt])
    }));

function Zn(e, t) {
    return oe(e, [e => e.theme === t, e => e.theme == null, e => e.sizes == null || e.sizes.includes(`any`) ? 1 / 0 : Math.max(0, ...e.sizes.map(e => {
        let [t, n] = e.split(`x`).map(Number);
        return t * n
    }))], [`desc`, `desc`, `desc`])[0]?.src
}
var Qn, $n, er, tr, Y, X = e((() => {
        Xn(), se(), xe(), je(), Qn = 16384, $n = ke({
            protocol: /^https?$/u
        }).transform(e => new URL(e)).refine(e => e.username === `` && e.password === ``), er = /^image\/(png|jpeg|jpg|gif|webp|svg\+xml|x-icon|vnd\.microsoft\.icon)$/u, tr = qe.extend({
            src: g().trim().min(1).max(Qn).refine(e => {
                if (/[\u0000-\u0020\u007f]/u.test(e)) return !1;
                if (!e.startsWith(`data:`)) return $n.safeParse(e).success;
                let t = Ae(e);
                return t != null && er.test(t.mimeType) && e.indexOf(`,`) < e.length - 1
            }),
            mimeType: g().regex(er).optional(),
            sizes: h(g().max(32).regex(/^(any|[1-9][0-9]*x[1-9][0-9]*)$/u)).max(8).optional()
        }).strip(), Y = h(tr.optional().catch(void 0)).max(8).transform(e => e.filter(e => e != null)).refine(e => e.reduce((e, t) => e + t.src.length, 0) <= Qn).optional().catch(void 0)
    })),
    nr, rr = e((() => {
        xe(), X(), nr = h(b({
            id: g().regex(/^[a-z][a-z0-9_-]{0,63}$/u),
            title: g().trim().min(1).max(128).refine(e => !/\p{Cc}/u.test(e)),
            icons: Y,
            accessMode: C([`included`, `connected`, `web`]).optional(),
            delayMinutes: y().int().min(1).max(10080).optional()
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
        let r = u(n.id);
        if (e.sourceProviders !== void 0) {
            if (e.sourceProviders.length === 0) continue;
            s.add(r), o.add(r);
            for (let [e, t] of a) u(t.id) === r && t.providerId == null && a.delete(e);
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
            }) => e == null ? [] : [u(e)]));
        for (let e of r) {
            let n = u(e),
                r = c(t, e);
            if (r == null || r.status !== `ENABLED` || s.has(n) || r.connector_type != null && be({
                    app_metadata: r.app_metadata,
                    connector_type: r.connector_type,
                    status: r.status
                })) continue;
            if (o.has(n)) {
                for (let [t, r] of a) r.capabilityId == null && r.providerId == null || u(r.id) !== n || r.id === e || r.sourceConnectorIds?.includes(e) || a.set(t, {
                    ...r,
                    sourceConnectorIds: [...r.sourceConnectorIds ?? [], e]
                });
                continue
            }
            let l = fr({
                connectorId: e,
                connectorName: null,
                logoUrl: null
            }, i, !0);
            if (l == null) continue;
            let d = a.get(n);
            if (d != null) {
                d.id !== e && !d.sourceConnectorIds?.includes(e) && a.set(n, {
                    ...l,
                    id: d.id,
                    sourceConnectorIds: [...d.sourceConnectorIds ?? [], e]
                });
                continue
            }
            a.set(n, l)
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
        } = a(e);
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
        if (be(n)) {
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
        let r = de(e);
        for (let e of n) {
            let n = d(e),
                i = n.id;
            if (n.symbol !== o.EcosystemMention || !s(i)) continue;
            let a = l(i),
                c = r.slice(n.startIndex, n.endIndex).trim().replace(/^@/u, ``);
            c && t.push({
                connectorIds: [a],
                kind: `set-if-missing`,
                plugin: {
                    id: a,
                    name: c,
                    logoUrl: null,
                    logoDarkUrl: null
                }
            })
        }
    }
    let r = e.metadata,
        i = r?.invoked_resource?.publish_status === `private` || r?.chatgpt_sdk?.distribution_channel === ne.ONLY_ME;
    return {
        catalogActions: t,
        invocation: ur(e),
        privateConnectorId: i && dr(e) ? Z(r?.invoked_resource?.connector_id) : null
    }
}

function ur(e) {
    let t = e.metadata,
        n = t?.invoked_resource,
        r = t?.invoked_plugin,
        i = Z(n?.connector_id),
        a = nr.safeParse(n?.source_providers).data,
        o = Z(r?.connector_name) ?? (a !== void 0 || i === pr ? Z(n?.app_name) : null);
    if (i == null || i === `connector_openai_plugin_management` || !dr(e) || n?.publish_status === `private` || t?.chatgpt_sdk?.distribution_channel === ne.ONLY_ME) return null;
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
    if (e.author.role !== ee.Tool || e.status === `in_progress` || e.status === `finished_partial_completion` || e.metadata?.is_error === !0 || e.metadata?.chatgpt_sdk?.is_error === !0 || t === `error` || t === `cancelled` || e.metadata?.__internal?.api_tool_error?.error_code != null) return !1;
    let n = e.metadata?.invoked_plugin?.http_response_status;
    if (n == null) return !0;
    let r = Number(n);
    return Number.isInteger(r) && r >= 200 && r < 300
}

function fr(e, t, n = !1) {
    let r = e.connectorId;
    if (mr.has(u(r)) || t.excludedIdentifiers.has(r)) return null;
    let i = n ? c(t.pluginsByConnectorId, r) : t.pluginsByConnectorId.get(r);
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
    te(), f(), Se(), ie(), pe(), X(), rr(), he(), r(), i(), pr = `connector_20205bf7d4e99a89d7154bb849718324`, mr = new Set([`connector_openai_genui_search`, `connector_openai_genui_sheep`, `connector_openai_search_service`, fe, `connector_openai_user_notifications`, `connector_openai_personal_context`])
}));

function Q(e) {
    return e?.trim() ? e : null
}

function gr(e, t) {
    let n = [e.connectorId, e.linkId];
    return [JSON.stringify([...n, `id`, t.id]), ...t.url == null ? [] : [JSON.stringify([...n, `url`, le(new URL(t.url))])], ...t.open == null ? [] : [ue([...n, `open`, t.open])]]
}

function _r(e) {
    let t = ur(e)?.connectorId;
    if (t == null) return null;
    let n, r, i = e.content.content_type === `code` && /openai\/(?:resourceActivities|citations)/u.test(e.content.text) ? Or.safeParse(ae(e, e.content.text)) : null;
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
    if (e.author.role !== ee.Assistant || !ve(e) || e.channel !== `final` && e.end_turn !== !0) return [];
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
    te(), p(), hr(), ge(), he(), _e(), ce(), xe(), X(), Cr = 100, $ = g().max(16384), wr = b({
        id: $.refine(e => e.trim().length > 0),
        url: $.refine(e => me(e) != null).optional(),
        title: $.optional(),
        mimeType: $.optional(),
        icons: Y,
        activities: h(C([`read`, `created`, `updated`])).min(1).max(Cr),
        open: b({
            tool: g().regex(/^[a-zA-Z0-9_.-]{1,256}$/u),
            arguments: x(g(), _()).refine(e => new TextEncoder().encode(JSON.stringify(e)).length <= 16384)
        }).optional().catch(void 0)
    }), Tr = wr.refine(e => e.url != null || e.open != null), Er = b({
        "openai/resourceActivities": b({
            version: w(1),
            resources: h(wr.required({
                url: !0
            })).min(1).max(Cr)
        })
    }), Dr = b({
        isError: m().optional(),
        _meta: _().optional(),
        meta: _().optional()
    }), Or = b({
        type: w(`mcpToolCall`),
        server: C([`codex_apps`, `codex-connectors-mcp`]),
        status: w(`completed`),
        error: we().optional(),
        appContext: b({
            connectorId: g(),
            linkId: g().nullable()
        }),
        result: Dr
    }), kr = b({
        "openai/citations": x(g(), _())
    }), Ar = b({
        title: $,
        target: b({
            type: w(`mcp_app_tool`),
            name: g(),
            arguments: x(g(), _()).nullish()
        })
    })
}));
export {
    jr as a, lr as c, hr as d, X as f, Sr as i, ir as l, vr as n, ur as o, Zn as p, yr as r, sr as s, br as t, ar as u
};
//# sourceMappingURL=4aa1bb90-mcgszh2xjsh5dcxk.js.map