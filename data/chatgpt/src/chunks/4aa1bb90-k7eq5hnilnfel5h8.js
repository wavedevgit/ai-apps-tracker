import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fq as t,
    JE as n,
    KE as r,
    Nq as i,
    Oq as a,
    UE as o,
    VE as s,
    YE as c,
    _tt as l,
    gtt as u,
    iX as d,
    nX as f,
    ptt as p,
    qE as ee,
    qet as te,
    rX as ne,
    vtt as re
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bz as ie,
    EBt as ae,
    Hz as oe,
    Rz as se,
    TBt as ce,
    Vz as le,
    dft as ue,
    nM as de,
    nS as fe,
    n_t as pe,
    rS as me,
    r_t as he,
    tS as ge,
    uft as _e,
    zz as ve
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    $x as ye,
    Cv as be,
    Hx as m,
    Jx as xe,
    Kx as h,
    Lx as Se,
    Wx as Ce,
    Yx as we,
    cS as g,
    fS as _,
    gS as Te,
    hS as v,
    lS as Ee,
    mS as y,
    nS as b,
    oS as x,
    qx as S,
    rS as C,
    sS as w,
    uS as T,
    wv as De,
    yS as Oe,
    zx as ke
} from "./c2675c8c-h5ybkhdzcoblzzdu.js";
import {
    r as Ae,
    t as je
} from "./5422a199-ohc0ujx944q7esd3.js";
var Me = e((() => {
        ke()
    })),
    Ne = e((() => {
        Me()
    })),
    Pe, E, Fe, Ie, Le, Re, D, O, k, A, j, M, N, P, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, F, I, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, L, R, ut, z, dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, B, St, V, H, Ct, wt, Tt, Et, Dt, Ot, U, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, W, G, K, Gt, Kt, qt, q, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, J, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn = e((() => {
        Ne(), Pe = `io.modelcontextprotocol/related-task`, E = xe(e => e !== null && (typeof e == `object` || typeof e == `function`)), Fe = y([_(), x().int()]), Ie = _(), C({
            ttl: y([x(), Ce()]).optional(),
            pollInterval: x().optional()
        }), Le = w({
            ttl: x().optional()
        }), Re = w({
            taskId: _()
        }), D = C({
            progressToken: Fe.optional(),
            [Pe]: Re.optional()
        }), O = w({
            _meta: D.optional()
        }), k = O.extend({
            task: Le.optional()
        }), A = w({
            method: _(),
            params: O.loose().optional()
        }), j = w({
            _meta: D.optional()
        }), M = w({
            method: _(),
            params: j.loose().optional()
        }), N = C({
            _meta: D.optional()
        }), P = y([_(), x().int()]), ze = w({
            jsonrpc: b(`2.0`),
            id: P,
            ...A.shape
        }).strict(), Be = w({
            jsonrpc: b(`2.0`),
            ...M.shape
        }).strict(), Ve = w({
            jsonrpc: b(`2.0`),
            id: P,
            result: N
        }).strict(), (function(e) {
            e[e.ConnectionClosed = -32e3] = `ConnectionClosed`, e[e.RequestTimeout = -32001] = `RequestTimeout`, e[e.ParseError = -32700] = `ParseError`, e[e.InvalidRequest = -32600] = `InvalidRequest`, e[e.MethodNotFound = -32601] = `MethodNotFound`, e[e.InvalidParams = -32602] = `InvalidParams`, e[e.InternalError = -32603] = `InternalError`, e[e.UrlElicitationRequired = -32042] = `UrlElicitationRequired`
        })(He ||= {}), Ue = w({
            jsonrpc: b(`2.0`),
            id: P.optional(),
            error: w({
                code: x().int(),
                message: _(),
                data: v().optional()
            })
        }).strict(), y([ze, Be, Ve, Ue]), y([Ve, Ue]), We = N.strict(), Ge = j.extend({
            requestId: P.optional(),
            reason: _().optional()
        }), Ke = M.extend({
            method: b(`notifications/cancelled`),
            params: Ge
        }), qe = w({
            src: _(),
            mimeType: _().optional(),
            sizes: h(_()).optional(),
            theme: m([`light`, `dark`]).optional()
        }), F = w({
            icons: h(qe).optional()
        }), I = w({
            name: _(),
            title: _().optional()
        }), Je = I.extend({
            ...I.shape,
            ...F.shape,
            version: _(),
            websiteUrl: _().optional(),
            description: _().optional()
        }), Ye = ye(w({
            applyDefaults: S().optional()
        }), T(_(), v())), Xe = Ee(e => e && typeof e == `object` && !Array.isArray(e) && Object.keys(e).length === 0 ? {
            form: {}
        } : e, ye(w({
            form: Ye.optional(),
            url: E.optional()
        }), T(_(), v()).optional())), Ze = C({
            list: E.optional(),
            cancel: E.optional(),
            requests: C({
                sampling: C({
                    createMessage: E.optional()
                }).optional(),
                elicitation: C({
                    create: E.optional()
                }).optional()
            }).optional()
        }), Qe = C({
            list: E.optional(),
            cancel: E.optional(),
            requests: C({
                tools: C({
                    call: E.optional()
                }).optional()
            }).optional()
        }), $e = w({
            experimental: T(_(), E).optional(),
            sampling: w({
                context: E.optional(),
                tools: E.optional()
            }).optional(),
            elicitation: Xe.optional(),
            roots: w({
                listChanged: S().optional()
            }).optional(),
            tasks: Ze.optional()
        }), et = O.extend({
            protocolVersion: _(),
            capabilities: $e,
            clientInfo: Je
        }), tt = A.extend({
            method: b(`initialize`),
            params: et
        }), nt = w({
            experimental: T(_(), E).optional(),
            logging: E.optional(),
            completions: E.optional(),
            prompts: w({
                listChanged: S().optional()
            }).optional(),
            resources: w({
                subscribe: S().optional(),
                listChanged: S().optional()
            }).optional(),
            tools: w({
                listChanged: S().optional()
            }).optional(),
            tasks: Qe.optional()
        }), rt = N.extend({
            protocolVersion: _(),
            capabilities: nt,
            serverInfo: Je,
            instructions: _().optional()
        }), it = M.extend({
            method: b(`notifications/initialized`),
            params: j.optional()
        }), at = A.extend({
            method: b(`ping`),
            params: O.optional()
        }), ot = w({
            progress: x(),
            total: g(x()),
            message: g(_())
        }), st = w({
            ...j.shape,
            ...ot.shape,
            progressToken: Fe
        }), ct = M.extend({
            method: b(`notifications/progress`),
            params: st
        }), lt = O.extend({
            cursor: Ie.optional()
        }), L = A.extend({
            params: lt.optional()
        }), R = N.extend({
            nextCursor: Ie.optional()
        }), ut = m([`working`, `input_required`, `completed`, `failed`, `cancelled`]), z = w({
            taskId: _(),
            status: ut,
            ttl: y([x(), Ce()]),
            createdAt: _(),
            lastUpdatedAt: _(),
            pollInterval: g(x()),
            statusMessage: g(_())
        }), dt = N.extend({
            task: z
        }), ft = j.merge(z), pt = M.extend({
            method: b(`notifications/tasks/status`),
            params: ft
        }), mt = A.extend({
            method: b(`tasks/get`),
            params: O.extend({
                taskId: _()
            })
        }), ht = N.merge(z), gt = A.extend({
            method: b(`tasks/result`),
            params: O.extend({
                taskId: _()
            })
        }), N.loose(), _t = L.extend({
            method: b(`tasks/list`)
        }), vt = R.extend({
            tasks: h(z)
        }), yt = A.extend({
            method: b(`tasks/cancel`),
            params: O.extend({
                taskId: _()
            })
        }), N.merge(z), bt = w({
            uri: _(),
            mimeType: g(_()),
            _meta: T(_(), v()).optional()
        }), xt = bt.extend({
            text: _()
        }), B = _().refine(e => {
            try {
                return atob(e), !0
            } catch {
                return !1
            }
        }, {
            message: `Invalid Base64 string`
        }), St = bt.extend({
            blob: B
        }), V = m([`user`, `assistant`]), H = w({
            audience: h(V).optional(),
            priority: x().min(0).max(1).optional(),
            lastModified: Oe({
                offset: !0
            }).optional()
        }), Ct = w({
            ...I.shape,
            ...F.shape,
            uri: _(),
            description: g(_()),
            mimeType: g(_()),
            annotations: H.optional(),
            _meta: g(C({}))
        }), wt = w({
            ...I.shape,
            ...F.shape,
            uriTemplate: _(),
            description: g(_()),
            mimeType: g(_()),
            annotations: H.optional(),
            _meta: g(C({}))
        }), Tt = L.extend({
            method: b(`resources/list`)
        }), Et = R.extend({
            resources: h(Ct)
        }), Dt = L.extend({
            method: b(`resources/templates/list`)
        }), Ot = R.extend({
            resourceTemplates: h(wt)
        }), U = O.extend({
            uri: _()
        }), kt = U, At = A.extend({
            method: b(`resources/read`),
            params: kt
        }), jt = N.extend({
            contents: h(y([xt, St]))
        }), Mt = M.extend({
            method: b(`notifications/resources/list_changed`),
            params: j.optional()
        }), Nt = U, Pt = A.extend({
            method: b(`resources/subscribe`),
            params: Nt
        }), Ft = U, It = A.extend({
            method: b(`resources/unsubscribe`),
            params: Ft
        }), Lt = j.extend({
            uri: _()
        }), Rt = M.extend({
            method: b(`notifications/resources/updated`),
            params: Lt
        }), zt = w({
            name: _(),
            description: g(_()),
            required: g(S())
        }), Bt = w({
            ...I.shape,
            ...F.shape,
            description: g(_()),
            arguments: g(h(zt)),
            _meta: g(C({}))
        }), Vt = L.extend({
            method: b(`prompts/list`)
        }), Ht = R.extend({
            prompts: h(Bt)
        }), Ut = O.extend({
            name: _(),
            arguments: T(_(), _()).optional()
        }), Wt = A.extend({
            method: b(`prompts/get`),
            params: Ut
        }), W = w({
            type: b(`text`),
            text: _(),
            annotations: H.optional(),
            _meta: T(_(), v()).optional()
        }), G = w({
            type: b(`image`),
            data: B,
            mimeType: _(),
            annotations: H.optional(),
            _meta: T(_(), v()).optional()
        }), K = w({
            type: b(`audio`),
            data: B,
            mimeType: _(),
            annotations: H.optional(),
            _meta: T(_(), v()).optional()
        }), Gt = w({
            type: b(`tool_use`),
            name: _(),
            id: _(),
            input: T(_(), v()),
            _meta: T(_(), v()).optional()
        }), Kt = w({
            type: b(`resource`),
            resource: y([xt, St]),
            annotations: H.optional(),
            _meta: T(_(), v()).optional()
        }), qt = Ct.extend({
            type: b(`resource_link`)
        }), q = y([W, G, K, qt, Kt]), Jt = w({
            role: V,
            content: q
        }), Yt = N.extend({
            description: _().optional(),
            messages: h(Jt)
        }), Xt = M.extend({
            method: b(`notifications/prompts/list_changed`),
            params: j.optional()
        }), Zt = w({
            title: _().optional(),
            readOnlyHint: S().optional(),
            destructiveHint: S().optional(),
            idempotentHint: S().optional(),
            openWorldHint: S().optional()
        }), Qt = w({
            taskSupport: m([`required`, `optional`, `forbidden`]).optional()
        }), $t = w({
            ...I.shape,
            ...F.shape,
            description: _().optional(),
            inputSchema: w({
                type: b(`object`),
                properties: T(_(), E).optional(),
                required: h(_()).optional()
            }).catchall(v()),
            outputSchema: w({
                type: b(`object`),
                properties: T(_(), E).optional(),
                required: h(_()).optional()
            }).catchall(v()).optional(),
            annotations: Zt.optional(),
            execution: Qt.optional(),
            _meta: T(_(), v()).optional()
        }), en = L.extend({
            method: b(`tools/list`)
        }), tn = R.extend({
            tools: h($t)
        }), nn = N.extend({
            content: h(q).default([]),
            structuredContent: T(_(), v()).optional(),
            isError: S().optional()
        }), nn.or(N.extend({
            toolResult: v()
        })), rn = k.extend({
            name: _(),
            arguments: T(_(), v()).optional()
        }), an = A.extend({
            method: b(`tools/call`),
            params: rn
        }), on = M.extend({
            method: b(`notifications/tools/list_changed`),
            params: j.optional()
        }), w({
            autoRefresh: S().default(!0),
            debounceMs: x().int().nonnegative().default(300)
        }), sn = m([`debug`, `info`, `notice`, `warning`, `error`, `critical`, `alert`, `emergency`]), cn = O.extend({
            level: sn
        }), ln = A.extend({
            method: b(`logging/setLevel`),
            params: cn
        }), un = j.extend({
            level: sn,
            logger: _().optional(),
            data: v()
        }), dn = M.extend({
            method: b(`notifications/message`),
            params: un
        }), fn = w({
            name: _().optional()
        }), pn = w({
            hints: h(fn).optional(),
            costPriority: x().min(0).max(1).optional(),
            speedPriority: x().min(0).max(1).optional(),
            intelligencePriority: x().min(0).max(1).optional()
        }), mn = w({
            mode: m([`auto`, `required`, `none`]).optional()
        }), hn = w({
            type: b(`tool_result`),
            toolUseId: _().describe(`The unique identifier for the corresponding tool call.`),
            content: h(q).default([]),
            structuredContent: w({}).loose().optional(),
            isError: S().optional(),
            _meta: T(_(), v()).optional()
        }), gn = we(`type`, [W, G, K]), J = we(`type`, [W, G, K, Gt, hn]), _n = w({
            role: V,
            content: y([J, h(J)]),
            _meta: T(_(), v()).optional()
        }), vn = k.extend({
            messages: h(_n),
            modelPreferences: pn.optional(),
            systemPrompt: _().optional(),
            includeContext: m([`none`, `thisServer`, `allServers`]).optional(),
            temperature: x().optional(),
            maxTokens: x().int(),
            stopSequences: h(_()).optional(),
            metadata: E.optional(),
            tools: h($t).optional(),
            toolChoice: mn.optional()
        }), yn = A.extend({
            method: b(`sampling/createMessage`),
            params: vn
        }), bn = N.extend({
            model: _(),
            stopReason: g(m([`endTurn`, `stopSequence`, `maxTokens`]).or(_())),
            role: V,
            content: gn
        }), xn = N.extend({
            model: _(),
            stopReason: g(m([`endTurn`, `stopSequence`, `maxTokens`, `toolUse`]).or(_())),
            role: V,
            content: y([J, h(J)])
        }), Sn = w({
            type: b(`boolean`),
            title: _().optional(),
            description: _().optional(),
            default: S().optional()
        }), Cn = w({
            type: b(`string`),
            title: _().optional(),
            description: _().optional(),
            minLength: x().optional(),
            maxLength: x().optional(),
            format: m([`email`, `uri`, `date`, `date-time`]).optional(),
            default: _().optional()
        }), wn = w({
            type: m([`number`, `integer`]),
            title: _().optional(),
            description: _().optional(),
            minimum: x().optional(),
            maximum: x().optional(),
            default: x().optional()
        }), Tn = w({
            type: b(`string`),
            title: _().optional(),
            description: _().optional(),
            enum: h(_()),
            default: _().optional()
        }), En = w({
            type: b(`string`),
            title: _().optional(),
            description: _().optional(),
            oneOf: h(w({
                const: _(),
                title: _()
            })),
            default: _().optional()
        }), Dn = w({
            type: b(`string`),
            title: _().optional(),
            description: _().optional(),
            enum: h(_()),
            enumNames: h(_()).optional(),
            default: _().optional()
        }), On = y([Tn, En]), kn = w({
            type: b(`array`),
            title: _().optional(),
            description: _().optional(),
            minItems: x().optional(),
            maxItems: x().optional(),
            items: w({
                type: b(`string`),
                enum: h(_())
            }),
            default: h(_()).optional()
        }), An = w({
            type: b(`array`),
            title: _().optional(),
            description: _().optional(),
            minItems: x().optional(),
            maxItems: x().optional(),
            items: w({
                anyOf: h(w({
                    const: _(),
                    title: _()
                }))
            }),
            default: h(_()).optional()
        }), jn = y([kn, An]), Mn = y([Dn, On, jn]), Nn = y([Mn, Sn, Cn, wn]), Pn = k.extend({
            mode: b(`form`).optional(),
            message: _(),
            requestedSchema: w({
                type: b(`object`),
                properties: T(_(), Nn),
                required: h(_()).optional()
            })
        }), Fn = k.extend({
            mode: b(`url`),
            message: _(),
            elicitationId: _(),
            url: _().url()
        }), In = y([Pn, Fn]), Ln = A.extend({
            method: b(`elicitation/create`),
            params: In
        }), Rn = j.extend({
            elicitationId: _()
        }), zn = M.extend({
            method: b(`notifications/elicitation/complete`),
            params: Rn
        }), Bn = N.extend({
            action: m([`accept`, `decline`, `cancel`]),
            content: Ee(e => e === null ? void 0 : e, T(_(), y([_(), x(), S(), h(_())])).optional())
        }), Vn = w({
            type: b(`ref/resource`),
            uri: _()
        }), Hn = w({
            type: b(`ref/prompt`),
            name: _()
        }), Un = O.extend({
            ref: y([Hn, Vn]),
            argument: w({
                name: _(),
                value: _()
            }),
            context: w({
                arguments: T(_(), _()).optional()
            }).optional()
        }), Wn = A.extend({
            method: b(`completion/complete`),
            params: Un
        }), Gn = N.extend({
            completion: C({
                values: h(_()).max(100),
                total: g(x().int()),
                hasMore: g(S())
            })
        }), Kn = w({
            uri: _().startsWith(`file://`),
            name: _().optional(),
            _meta: T(_(), v()).optional()
        }), qn = A.extend({
            method: b(`roots/list`),
            params: O.optional()
        }), Jn = N.extend({
            roots: h(Kn)
        }), Yn = M.extend({
            method: b(`notifications/roots/list_changed`),
            params: j.optional()
        }), y([at, tt, Wn, ln, Wt, Vt, Tt, Dt, At, Pt, It, an, en, mt, gt, _t, yt]), y([Ke, ct, it, Yn, pt]), y([We, bn, xn, Bn, Jn, ht, vt, dt]), y([at, yn, Ln, qn, mt, gt, _t, yt]), y([Ke, ct, dn, Rt, Mt, on, Xt, pt, zn]), y([We, rt, Gn, Yt, Ht, Et, Ot, jt, nn, tn, ht, vt, dt])
    }));

function Zn(e, t) {
    return ae(e, [e => e.theme === t, e => e.theme == null, e => e.sizes == null || e.sizes.includes(`any`) ? 1 / 0 : Math.max(0, ...e.sizes.map(e => {
        let [t, n] = e.split(`x`).map(Number);
        return t * n
    }))], [`desc`, `desc`, `desc`])[0]?.src
}
var Qn, $n, er, tr, Y, X = e((() => {
        Xn(), ce(), Se(), je(), Qn = 16384, $n = Te({
            protocol: /^https?$/u
        }).transform(e => new URL(e)).refine(e => e.username === `` && e.password === ``), er = /^image\/(png|jpeg|jpg|gif|webp|svg\+xml|x-icon|vnd\.microsoft\.icon)$/u, tr = qe.extend({
            src: _().trim().min(1).max(Qn).refine(e => {
                if (/[\u0000-\u0020\u007f]/u.test(e)) return !1;
                if (!e.startsWith(`data:`)) return $n.safeParse(e).success;
                let t = Ae(e);
                return t != null && er.test(t.mimeType) && e.indexOf(`,`) < e.length - 1
            }),
            mimeType: _().regex(er).optional(),
            sizes: h(_().max(32).regex(/^(any|[1-9][0-9]*x[1-9][0-9]*)$/u)).max(8).optional()
        }).strip(), Y = h(tr.optional().catch(void 0)).max(8).transform(e => e.filter(e => e != null)).refine(e => e.reduce((e, t) => e + t.src.length, 0) <= Qn).optional().catch(void 0)
    })),
    nr, rr = e((() => {
        Se(), X(), nr = h(w({
            id: _().regex(/^[a-z][a-z0-9_-]{0,63}$/u),
            title: _().trim().min(1).max(128).refine(e => !/\p{Cc}/u.test(e)),
            icons: Y,
            accessMode: m([`included`, `connected`, `web`]).optional(),
            delayMinutes: x().int().min(1).max(10080).optional()
        })).max(32)
    }));

function ir(e) {
    return e.providerId == null ? e.capabilityId == null ? e.id : `${e.id}:${e.capabilityId}` : `${e.id}:provider:${e.providerId}:${e.accessMode??``}`
}

function ar(e, t, n = [], i = []) {
    let a = or(e, t, n),
        o = new Map,
        s = new Set,
        c = new Set;
    for (let t of e) {
        let e = t.invocation;
        if (e == null) continue;
        let n = fr(e, a);
        if (n == null) continue;
        let i = r(n.id);
        if (e.sourceProviders !== void 0) {
            if (e.sourceProviders.length === 0) continue;
            c.add(i), s.add(i);
            for (let [e, t] of o) r(t.id) === i && t.providerId == null && o.delete(e);
            for (let t of e.sourceProviders) {
                let r = `${i}:provider:${t.id}:${t.accessMode??``}`,
                    a = o.get(r);
                o.set(r, {
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
        if (!c.has(i))
            if (e.capabilityId != null && e.capabilityName != null) {
                let t = o.get(i);
                o.delete(i), s.add(i);
                let r = `${i}:${e.capabilityId}`,
                    a = o.get(r),
                    c = e.sourceIcons ?? a?.sourceIcons,
                    l = [...new Set([...a?.sourceConnectorIds ?? [], t?.id, a?.id, e.connectorId].filter(e => e != null && e !== n.id))],
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
                o.set(r, u)
            } else s.has(i) || o.set(i, n)
    }
    if (i.length > 0) {
        let t = new Map(n.map(e => [e.id, e])),
            c = new Set(e.flatMap(({
                privateConnectorId: e
            }) => e == null ? [] : [r(e)]));
        for (let e of i) {
            let n = r(e),
                i = ee(t, e);
            if (i == null || i.status !== `ENABLED` || c.has(n) || i.connector_type != null && De({
                    app_metadata: i.app_metadata,
                    connector_type: i.connector_type,
                    status: i.status
                })) continue;
            if (s.has(n)) {
                for (let [t, i] of o) i.capabilityId == null && i.providerId == null || r(i.id) !== n || i.id === e || i.sourceConnectorIds?.includes(e) || o.set(t, {
                    ...i,
                    sourceConnectorIds: [...i.sourceConnectorIds ?? [], e]
                });
                continue
            }
            let l = fr({
                connectorId: e,
                connectorName: null,
                logoUrl: null
            }, a, !0);
            if (l == null) continue;
            let u = o.get(n);
            if (u != null) {
                u.id !== e && !u.sourceConnectorIds?.includes(e) && o.set(n, {
                    ...l,
                    id: u.id,
                    sourceConnectorIds: [...u.sourceConnectorIds ?? [], e]
                });
                continue
            }
            o.set(n, l)
        }
    }
    return [...o.values()]
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
        let t = e.trim(),
            r = n(t);
        return r == null ? [t] : [t, r]
    }) : [])))
}

function cr(e, t, n, r = !1) {
    for (let i of t) {
        let t = Z(i);
        t != null && (!r || !e.has(t)) && e.set(t, n)
    }
}

function lr(e) {
    let n = [];
    for (let t of e.metadata?.selected_mcp_sources ?? []) {
        let e = [t.id];
        if (De(t)) {
            n.push({
                connectorIds: e,
                kind: `exclude`
            });
            continue
        }
        let r = Z(t.name);
        r != null && n.push({
            connectorIds: e,
            kind: `set`,
            plugin: {
                id: t.id,
                name: r,
                logoUrl: t.logo_url,
                logoDarkUrl: t.logo_url_dark ?? null
            }
        })
    }
    let r = e.metadata?.serialization_metadata?.custom_symbol_offsets ?? [];
    if (r.length > 0) {
        let i = se(e);
        for (let e of r) {
            let r = re(e),
                o = r.id;
            if (r.symbol !== te.EcosystemMention || !t(o)) continue;
            let s = a(o),
                c = i.slice(r.startIndex, r.endIndex).trim().replace(/^@/u, ``);
            c && n.push({
                connectorIds: [s],
                kind: `set-if-missing`,
                plugin: {
                    id: s,
                    name: c,
                    logoUrl: null,
                    logoDarkUrl: null
                }
            })
        }
    }
    let i = e.metadata,
        o = i?.invoked_resource?.publish_status === `private` || i?.chatgpt_sdk?.distribution_channel === u.ONLY_ME;
    return {
        catalogActions: n,
        invocation: ur(e),
        privateConnectorId: o && dr(e) ? Z(i?.invoked_resource?.connector_id) : null
    }
}

function ur(e) {
    let t = e.metadata,
        n = t?.invoked_resource,
        r = t?.invoked_plugin,
        i = Z(n?.connector_id),
        a = nr.safeParse(n?.source_providers).data,
        o = Z(r?.connector_name) ?? (a !== void 0 || i === pr ? Z(n?.app_name) : null);
    if (i == null || i === `connector_openai_plugin_management` || !dr(e) || n?.publish_status === `private` || t?.chatgpt_sdk?.distribution_channel === u.ONLY_ME) return null;
    let s = (t?.tool_icons ?? []).find(e => /\/ecosystem\/apps\/[^/]+/.test(e)) ?? (i === pr ? `/images/ecosystem/apps/appgarden/icon.png` : null),
        c = Z(n?.capability_id),
        l = Z(n?.capability_name),
        d = Y.safeParse(n?.source_icons).data;
    return {
        connectorId: i,
        connectorName: o,
        logoUrl: s,
        sourceProviders: a,
        ...c != null && l != null ? {
            capabilityId: c,
            capabilityName: l
        } : {},
        ...d == null ? {} : {
            sourceIcons: d
        }
    }
}

function dr(e) {
    let t = e.metadata?.chatgpt_sdk?.tool_response_metadata?.status;
    if (e.author.role !== p.Tool || e.status === `in_progress` || e.status === `finished_partial_completion` || e.metadata?.is_error === !0 || e.metadata?.chatgpt_sdk?.is_error === !0 || t === `error` || t === `cancelled` || e.metadata?.__internal?.api_tool_error?.error_code != null) return !1;
    let n = e.metadata?.invoked_plugin?.http_response_status;
    if (n == null) return !0;
    let r = Number(n);
    return Number.isInteger(r) && r >= 200 && r < 300
}

function fr(e, t, n = !1) {
    let i = e.connectorId;
    if (mr.has(r(i)) || t.excludedIdentifiers.has(i)) return null;
    let a = n ? ee(t.pluginsByConnectorId, i) : t.pluginsByConnectorId.get(i);
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
    l(), c(), be(), he(), de(), X(), rr(), ve(), i(), o(), pr = `connector_20205bf7d4e99a89d7154bb849718324`, mr = new Set([`connector_openai_genui_search`, `connector_openai_genui_sheep`, `connector_openai_search_service`, pe, `connector_openai_user_notifications`, `connector_openai_personal_context`])
}));

function Q(e) {
    return e?.trim() ? e : null
}

function gr(e, t) {
    let n = [e.connectorId, e.linkId];
    return [JSON.stringify([...n, `id`, t.id]), ...t.url == null ? [] : [JSON.stringify([...n, `url`, fe(new URL(t.url))])], ...t.open == null ? [] : [ue([...n, `open`, t.open])]]
}

function _r(e) {
    let t = ur(e)?.connectorId;
    if (t == null) return null;
    let n, r, i = e.content.content_type === `code` && e.content.text.includes(`openai/resourceActivities`) ? Er.safeParse(ie(e, e.content.text)) : null;
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
    if (e.author.role !== p.Assistant || !oe(e) || e.channel !== `final` && e.end_turn !== !0) return [];
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
    let n = f;
    for (let t of e) n = d(n, t);
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
    l(), ne(), hr(), ge(), ve(), _e(), le(), Se(), X(), xr = 100, $ = _().max(16384), Sr = w({
        id: $.refine(e => e.trim().length > 0),
        url: $.refine(e => me(e) != null).optional(),
        title: $.optional(),
        mimeType: $.optional(),
        icons: Y,
        activities: h(m([`read`, `created`, `updated`])).min(1).max(xr),
        open: w({
            tool: _().regex(/^[a-zA-Z0-9_.-]{1,256}$/u),
            arguments: T(_(), v()).refine(e => new TextEncoder().encode(JSON.stringify(e)).length <= 16384)
        }).optional().catch(void 0)
    }), Cr = Sr.refine(e => e.url != null || e.open != null), wr = w({
        "openai/resourceActivities": w({
            version: b(1),
            resources: h(Sr.required({
                url: !0
            })).min(1).max(xr)
        })
    }), Tr = w({
        isError: S().optional(),
        _meta: v().optional(),
        meta: v().optional()
    }), Er = w({
        type: b(`mcpToolCall`),
        server: m([`codex_apps`, `codex-connectors-mcp`]),
        status: b(`completed`),
        error: Ce().optional(),
        appContext: w({
            connectorId: _(),
            linkId: _().nullable()
        }),
        result: Tr
    })
}));
export {
    ur as a, ir as c, X as d, Zn as f, Dr as i, ar as l, _r as n, sr as o, br as r, lr as s, vr as t, hr as u
};
//# sourceMappingURL=4aa1bb90-k7eq5hnilnfel5h8.js.map