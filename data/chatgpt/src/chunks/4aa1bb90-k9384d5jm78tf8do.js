import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $E as t,
    $Y as n,
    Aq as r,
    JE as i,
    KE as a,
    Mq as o,
    Mtt as s,
    Ntt as c,
    Ott as l,
    QE as u,
    Tq as ee,
    ZE as d,
    ctt as f,
    eD as te,
    eX as ne,
    jtt as re,
    tX as ie
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Jgt as ae,
    bBt as oe,
    cB as se,
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
    uB as ve,
    yBt as ye
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    $x as be,
    CS as xe,
    Jx as Se,
    Kx as p,
    Nv as Ce,
    Pv as we,
    Qx as Te,
    Ux as Ee,
    Vx as De,
    Xx as m,
    Zx as h,
    bS as Oe,
    dS as g,
    fS as _,
    gS as v,
    mS as y,
    oS as b,
    pS as ke,
    rS as Ae,
    sS as x,
    uS as S,
    vS as C,
    yS as w
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";
import {
    r as je,
    t as Me
} from "./5422a199-ohc0ujx944q7esd3.js";
var Ne = e((() => {
        Ee()
    })),
    Pe = e((() => {
        Ne()
    })),
    Fe, T, Ie, Le, Re, ze, E, D, O, k, A, j, M, N, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, P, F, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut, I, L, dt, R, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, z, Ct, B, V, wt, Tt, Et, Dt, Ot, kt, H, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, U, W, G, Kt, qt, Jt, K, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, q, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn = e((() => {
        Pe(), Fe = `io.modelcontextprotocol/related-task`, T = Te(e => e !== null && (typeof e == `object` || typeof e == `function`)), Ie = C([v(), S().int()]), Le = v(), x({
            ttl: C([S(), Se()]).optional(),
            pollInterval: S().optional()
        }), Re = g({
            ttl: S().optional()
        }), ze = g({
            taskId: v()
        }), E = x({
            progressToken: Ie.optional(),
            [Fe]: ze.optional()
        }), D = g({
            _meta: E.optional()
        }), O = D.extend({
            task: Re.optional()
        }), k = g({
            method: v(),
            params: D.loose().optional()
        }), A = g({
            _meta: E.optional()
        }), j = g({
            method: v(),
            params: A.loose().optional()
        }), M = x({
            _meta: E.optional()
        }), N = C([v(), S().int()]), Be = g({
            jsonrpc: b(`2.0`),
            id: N,
            ...k.shape
        }).strict(), Ve = g({
            jsonrpc: b(`2.0`),
            ...j.shape
        }).strict(), He = g({
            jsonrpc: b(`2.0`),
            id: N,
            result: M
        }).strict(), (function(e) {
            e[e.ConnectionClosed = -32e3] = `ConnectionClosed`, e[e.RequestTimeout = -32001] = `RequestTimeout`, e[e.ParseError = -32700] = `ParseError`, e[e.InvalidRequest = -32600] = `InvalidRequest`, e[e.MethodNotFound = -32601] = `MethodNotFound`, e[e.InvalidParams = -32602] = `InvalidParams`, e[e.InternalError = -32603] = `InternalError`, e[e.UrlElicitationRequired = -32042] = `UrlElicitationRequired`
        })(Ue ||= {}), We = g({
            jsonrpc: b(`2.0`),
            id: N.optional(),
            error: g({
                code: S().int(),
                message: v(),
                data: w().optional()
            })
        }).strict(), C([Be, Ve, He, We]), C([He, We]), Ge = M.strict(), Ke = A.extend({
            requestId: N.optional(),
            reason: v().optional()
        }), qe = j.extend({
            method: b(`notifications/cancelled`),
            params: Ke
        }), Je = g({
            src: v(),
            mimeType: v().optional(),
            sizes: m(v()).optional(),
            theme: p([`light`, `dark`]).optional()
        }), P = g({
            icons: m(Je).optional()
        }), F = g({
            name: v(),
            title: v().optional()
        }), Ye = F.extend({
            ...F.shape,
            ...P.shape,
            version: v(),
            websiteUrl: v().optional(),
            description: v().optional()
        }), Xe = Ae(g({
            applyDefaults: h().optional()
        }), y(v(), w())), Ze = ke(e => e && typeof e == `object` && !Array.isArray(e) && Object.keys(e).length === 0 ? {
            form: {}
        } : e, Ae(g({
            form: Xe.optional(),
            url: T.optional()
        }), y(v(), w()).optional())), Qe = x({
            list: T.optional(),
            cancel: T.optional(),
            requests: x({
                sampling: x({
                    createMessage: T.optional()
                }).optional(),
                elicitation: x({
                    create: T.optional()
                }).optional()
            }).optional()
        }), $e = x({
            list: T.optional(),
            cancel: T.optional(),
            requests: x({
                tools: x({
                    call: T.optional()
                }).optional()
            }).optional()
        }), et = g({
            experimental: y(v(), T).optional(),
            sampling: g({
                context: T.optional(),
                tools: T.optional()
            }).optional(),
            elicitation: Ze.optional(),
            roots: g({
                listChanged: h().optional()
            }).optional(),
            tasks: Qe.optional()
        }), tt = D.extend({
            protocolVersion: v(),
            capabilities: et,
            clientInfo: Ye
        }), nt = k.extend({
            method: b(`initialize`),
            params: tt
        }), rt = g({
            experimental: y(v(), T).optional(),
            logging: T.optional(),
            completions: T.optional(),
            prompts: g({
                listChanged: h().optional()
            }).optional(),
            resources: g({
                subscribe: h().optional(),
                listChanged: h().optional()
            }).optional(),
            tools: g({
                listChanged: h().optional()
            }).optional(),
            tasks: $e.optional()
        }), it = M.extend({
            protocolVersion: v(),
            capabilities: rt,
            serverInfo: Ye,
            instructions: v().optional()
        }), at = j.extend({
            method: b(`notifications/initialized`),
            params: A.optional()
        }), ot = k.extend({
            method: b(`ping`),
            params: D.optional()
        }), st = g({
            progress: S(),
            total: _(S()),
            message: _(v())
        }), ct = g({
            ...A.shape,
            ...st.shape,
            progressToken: Ie
        }), lt = j.extend({
            method: b(`notifications/progress`),
            params: ct
        }), ut = D.extend({
            cursor: Le.optional()
        }), I = k.extend({
            params: ut.optional()
        }), L = M.extend({
            nextCursor: Le.optional()
        }), dt = p([`working`, `input_required`, `completed`, `failed`, `cancelled`]), R = g({
            taskId: v(),
            status: dt,
            ttl: C([S(), Se()]),
            createdAt: v(),
            lastUpdatedAt: v(),
            pollInterval: _(S()),
            statusMessage: _(v())
        }), ft = M.extend({
            task: R
        }), pt = A.merge(R), mt = j.extend({
            method: b(`notifications/tasks/status`),
            params: pt
        }), ht = k.extend({
            method: b(`tasks/get`),
            params: D.extend({
                taskId: v()
            })
        }), gt = M.merge(R), _t = k.extend({
            method: b(`tasks/result`),
            params: D.extend({
                taskId: v()
            })
        }), M.loose(), vt = I.extend({
            method: b(`tasks/list`)
        }), yt = L.extend({
            tasks: m(R)
        }), bt = k.extend({
            method: b(`tasks/cancel`),
            params: D.extend({
                taskId: v()
            })
        }), M.merge(R), xt = g({
            uri: v(),
            mimeType: _(v()),
            _meta: y(v(), w()).optional()
        }), St = xt.extend({
            text: v()
        }), z = v().refine(e => {
            try {
                return atob(e), !0
            } catch {
                return !1
            }
        }, {
            message: `Invalid Base64 string`
        }), Ct = xt.extend({
            blob: z
        }), B = p([`user`, `assistant`]), V = g({
            audience: m(B).optional(),
            priority: S().min(0).max(1).optional(),
            lastModified: xe({
                offset: !0
            }).optional()
        }), wt = g({
            ...F.shape,
            ...P.shape,
            uri: v(),
            description: _(v()),
            mimeType: _(v()),
            annotations: V.optional(),
            _meta: _(x({}))
        }), Tt = g({
            ...F.shape,
            ...P.shape,
            uriTemplate: v(),
            description: _(v()),
            mimeType: _(v()),
            annotations: V.optional(),
            _meta: _(x({}))
        }), Et = I.extend({
            method: b(`resources/list`)
        }), Dt = L.extend({
            resources: m(wt)
        }), Ot = I.extend({
            method: b(`resources/templates/list`)
        }), kt = L.extend({
            resourceTemplates: m(Tt)
        }), H = D.extend({
            uri: v()
        }), At = H, jt = k.extend({
            method: b(`resources/read`),
            params: At
        }), Mt = M.extend({
            contents: m(C([St, Ct]))
        }), Nt = j.extend({
            method: b(`notifications/resources/list_changed`),
            params: A.optional()
        }), Pt = H, Ft = k.extend({
            method: b(`resources/subscribe`),
            params: Pt
        }), It = H, Lt = k.extend({
            method: b(`resources/unsubscribe`),
            params: It
        }), Rt = A.extend({
            uri: v()
        }), zt = j.extend({
            method: b(`notifications/resources/updated`),
            params: Rt
        }), Bt = g({
            name: v(),
            description: _(v()),
            required: _(h())
        }), Vt = g({
            ...F.shape,
            ...P.shape,
            description: _(v()),
            arguments: _(m(Bt)),
            _meta: _(x({}))
        }), Ht = I.extend({
            method: b(`prompts/list`)
        }), Ut = L.extend({
            prompts: m(Vt)
        }), Wt = D.extend({
            name: v(),
            arguments: y(v(), v()).optional()
        }), Gt = k.extend({
            method: b(`prompts/get`),
            params: Wt
        }), U = g({
            type: b(`text`),
            text: v(),
            annotations: V.optional(),
            _meta: y(v(), w()).optional()
        }), W = g({
            type: b(`image`),
            data: z,
            mimeType: v(),
            annotations: V.optional(),
            _meta: y(v(), w()).optional()
        }), G = g({
            type: b(`audio`),
            data: z,
            mimeType: v(),
            annotations: V.optional(),
            _meta: y(v(), w()).optional()
        }), Kt = g({
            type: b(`tool_use`),
            name: v(),
            id: v(),
            input: y(v(), w()),
            _meta: y(v(), w()).optional()
        }), qt = g({
            type: b(`resource`),
            resource: C([St, Ct]),
            annotations: V.optional(),
            _meta: y(v(), w()).optional()
        }), Jt = wt.extend({
            type: b(`resource_link`)
        }), K = C([U, W, G, Jt, qt]), Yt = g({
            role: B,
            content: K
        }), Xt = M.extend({
            description: v().optional(),
            messages: m(Yt)
        }), Zt = j.extend({
            method: b(`notifications/prompts/list_changed`),
            params: A.optional()
        }), Qt = g({
            title: v().optional(),
            readOnlyHint: h().optional(),
            destructiveHint: h().optional(),
            idempotentHint: h().optional(),
            openWorldHint: h().optional()
        }), $t = g({
            taskSupport: p([`required`, `optional`, `forbidden`]).optional()
        }), en = g({
            ...F.shape,
            ...P.shape,
            description: v().optional(),
            inputSchema: g({
                type: b(`object`),
                properties: y(v(), T).optional(),
                required: m(v()).optional()
            }).catchall(w()),
            outputSchema: g({
                type: b(`object`),
                properties: y(v(), T).optional(),
                required: m(v()).optional()
            }).catchall(w()).optional(),
            annotations: Qt.optional(),
            execution: $t.optional(),
            _meta: y(v(), w()).optional()
        }), tn = I.extend({
            method: b(`tools/list`)
        }), nn = L.extend({
            tools: m(en)
        }), rn = M.extend({
            content: m(K).default([]),
            structuredContent: y(v(), w()).optional(),
            isError: h().optional()
        }), rn.or(M.extend({
            toolResult: w()
        })), an = O.extend({
            name: v(),
            arguments: y(v(), w()).optional()
        }), on = k.extend({
            method: b(`tools/call`),
            params: an
        }), sn = j.extend({
            method: b(`notifications/tools/list_changed`),
            params: A.optional()
        }), g({
            autoRefresh: h().default(!0),
            debounceMs: S().int().nonnegative().default(300)
        }), cn = p([`debug`, `info`, `notice`, `warning`, `error`, `critical`, `alert`, `emergency`]), ln = D.extend({
            level: cn
        }), un = k.extend({
            method: b(`logging/setLevel`),
            params: ln
        }), dn = A.extend({
            level: cn,
            logger: v().optional(),
            data: w()
        }), fn = j.extend({
            method: b(`notifications/message`),
            params: dn
        }), pn = g({
            name: v().optional()
        }), mn = g({
            hints: m(pn).optional(),
            costPriority: S().min(0).max(1).optional(),
            speedPriority: S().min(0).max(1).optional(),
            intelligencePriority: S().min(0).max(1).optional()
        }), hn = g({
            mode: p([`auto`, `required`, `none`]).optional()
        }), gn = g({
            type: b(`tool_result`),
            toolUseId: v().describe(`The unique identifier for the corresponding tool call.`),
            content: m(K).default([]),
            structuredContent: g({}).loose().optional(),
            isError: h().optional(),
            _meta: y(v(), w()).optional()
        }), _n = be(`type`, [U, W, G]), q = be(`type`, [U, W, G, Kt, gn]), vn = g({
            role: B,
            content: C([q, m(q)]),
            _meta: y(v(), w()).optional()
        }), yn = O.extend({
            messages: m(vn),
            modelPreferences: mn.optional(),
            systemPrompt: v().optional(),
            includeContext: p([`none`, `thisServer`, `allServers`]).optional(),
            temperature: S().optional(),
            maxTokens: S().int(),
            stopSequences: m(v()).optional(),
            metadata: T.optional(),
            tools: m(en).optional(),
            toolChoice: hn.optional()
        }), bn = k.extend({
            method: b(`sampling/createMessage`),
            params: yn
        }), xn = M.extend({
            model: v(),
            stopReason: _(p([`endTurn`, `stopSequence`, `maxTokens`]).or(v())),
            role: B,
            content: _n
        }), Sn = M.extend({
            model: v(),
            stopReason: _(p([`endTurn`, `stopSequence`, `maxTokens`, `toolUse`]).or(v())),
            role: B,
            content: C([q, m(q)])
        }), Cn = g({
            type: b(`boolean`),
            title: v().optional(),
            description: v().optional(),
            default: h().optional()
        }), wn = g({
            type: b(`string`),
            title: v().optional(),
            description: v().optional(),
            minLength: S().optional(),
            maxLength: S().optional(),
            format: p([`email`, `uri`, `date`, `date-time`]).optional(),
            default: v().optional()
        }), Tn = g({
            type: p([`number`, `integer`]),
            title: v().optional(),
            description: v().optional(),
            minimum: S().optional(),
            maximum: S().optional(),
            default: S().optional()
        }), En = g({
            type: b(`string`),
            title: v().optional(),
            description: v().optional(),
            enum: m(v()),
            default: v().optional()
        }), Dn = g({
            type: b(`string`),
            title: v().optional(),
            description: v().optional(),
            oneOf: m(g({
                const: v(),
                title: v()
            })),
            default: v().optional()
        }), On = g({
            type: b(`string`),
            title: v().optional(),
            description: v().optional(),
            enum: m(v()),
            enumNames: m(v()).optional(),
            default: v().optional()
        }), kn = C([En, Dn]), An = g({
            type: b(`array`),
            title: v().optional(),
            description: v().optional(),
            minItems: S().optional(),
            maxItems: S().optional(),
            items: g({
                type: b(`string`),
                enum: m(v())
            }),
            default: m(v()).optional()
        }), jn = g({
            type: b(`array`),
            title: v().optional(),
            description: v().optional(),
            minItems: S().optional(),
            maxItems: S().optional(),
            items: g({
                anyOf: m(g({
                    const: v(),
                    title: v()
                }))
            }),
            default: m(v()).optional()
        }), Mn = C([An, jn]), Nn = C([On, kn, Mn]), Pn = C([Nn, Cn, wn, Tn]), Fn = O.extend({
            mode: b(`form`).optional(),
            message: v(),
            requestedSchema: g({
                type: b(`object`),
                properties: y(v(), Pn),
                required: m(v()).optional()
            })
        }), In = O.extend({
            mode: b(`url`),
            message: v(),
            elicitationId: v(),
            url: v().url()
        }), Ln = C([Fn, In]), Rn = k.extend({
            method: b(`elicitation/create`),
            params: Ln
        }), zn = A.extend({
            elicitationId: v()
        }), Bn = j.extend({
            method: b(`notifications/elicitation/complete`),
            params: zn
        }), Vn = M.extend({
            action: p([`accept`, `decline`, `cancel`]),
            content: ke(e => e === null ? void 0 : e, y(v(), C([v(), S(), h(), m(v())])).optional())
        }), Hn = g({
            type: b(`ref/resource`),
            uri: v()
        }), Un = g({
            type: b(`ref/prompt`),
            name: v()
        }), Wn = D.extend({
            ref: C([Un, Hn]),
            argument: g({
                name: v(),
                value: v()
            }),
            context: g({
                arguments: y(v(), v()).optional()
            }).optional()
        }), Gn = k.extend({
            method: b(`completion/complete`),
            params: Wn
        }), Kn = M.extend({
            completion: x({
                values: m(v()).max(100),
                total: _(S().int()),
                hasMore: _(h())
            })
        }), qn = g({
            uri: v().startsWith(`file://`),
            name: v().optional(),
            _meta: y(v(), w()).optional()
        }), Jn = k.extend({
            method: b(`roots/list`),
            params: D.optional()
        }), Yn = M.extend({
            roots: m(qn)
        }), Xn = j.extend({
            method: b(`notifications/roots/list_changed`),
            params: A.optional()
        }), C([ot, nt, Gn, un, Gt, Ht, Et, Ot, jt, Ft, Lt, on, tn, ht, _t, vt, bt]), C([qe, lt, at, Xn, mt]), C([Ge, xn, Sn, Vn, Yn, gt, yt, ft]), C([ot, bn, Rn, Jn, ht, _t, vt, bt]), C([qe, lt, fn, zt, Nt, sn, Zt, mt, Bn]), C([Ge, it, Kn, Xt, Ut, Dt, kt, Mt, rn, nn, gt, yt, ft])
    }));

function Qn(e, t) {
    return oe(e, [e => e.theme === t, e => e.theme == null, e => e.sizes == null || e.sizes.includes(`any`) ? 1 / 0 : Math.max(0, ...e.sizes.map(e => {
        let [t, n] = e.split(`x`).map(Number);
        return t * n
    }))], [`desc`, `desc`, `desc`])[0]?.src
}
var $n, er, tr, nr, J, Y = e((() => {
        Zn(), ye(), De(), Me(), $n = 16384, er = Oe({
            protocol: /^https?$/u
        }).transform(e => new URL(e)).refine(e => e.username === `` && e.password === ``), tr = /^image\/(png|jpeg|jpg|gif|webp|svg\+xml|x-icon|vnd\.microsoft\.icon)$/u, nr = Je.extend({
            src: v().trim().min(1).max($n).refine(e => {
                if (/[\u0000-\u0020\u007f]/u.test(e)) return !1;
                if (!e.startsWith(`data:`)) return er.safeParse(e).success;
                let t = je(e);
                return t != null && tr.test(t.mimeType) && e.indexOf(`,`) < e.length - 1
            }),
            mimeType: v().regex(tr).optional(),
            sizes: m(v().max(32).regex(/^(any|[1-9][0-9]*x[1-9][0-9]*)$/u)).max(8).optional()
        }).strip(), J = m(nr.optional().catch(void 0)).max(8).transform(e => e.filter(e => e != null)).refine(e => e.reduce((e, t) => e + t.src.length, 0) <= $n).optional().catch(void 0)
    })),
    rr, ir = e((() => {
        De(), Y(), rr = m(g({
            id: v().regex(/^[a-z][a-z0-9_-]{0,63}$/u),
            title: v().trim().min(1).max(128).refine(e => !/\p{Cc}/u.test(e)),
            icons: J,
            accessMode: p([`included`, `connected`, `web`]).optional(),
            delayMinutes: S().int().min(1).max(10080).optional()
        })).max(32)
    }));

function ar(e) {
    return e.providerId == null ? e.capabilityId == null ? e.id : `${e.id}:${e.capabilityId}` : `${e.id}:provider:${e.providerId}:${e.accessMode??``}`
}

function or(e, t, n = [], r = []) {
    let i = sr(e, t, n),
        a = new Map,
        o = new Set,
        s = new Set;
    for (let t of e) {
        let e = t.invocation;
        if (e == null) continue;
        let n = pr(e, i);
        if (n == null) continue;
        let r = d(n.id);
        if (e.sourceProviders !== void 0) {
            if (e.sourceProviders.length === 0) continue;
            s.add(r), o.add(r);
            for (let [e, t] of a) d(t.id) === r && t.providerId == null && a.delete(e);
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
            }) => e == null ? [] : [d(e)]));
        for (let e of r) {
            let n = d(e),
                r = u(t, e);
            if (r == null || r.status !== `ENABLED` || s.has(n) || r.connector_type != null && we({
                    app_metadata: r.app_metadata,
                    connector_type: r.connector_type,
                    status: r.status
                })) continue;
            if (o.has(n)) {
                for (let [t, r] of a) r.capabilityId == null && r.providerId == null || d(r.id) !== n || r.id === e || r.sourceConnectorIds?.includes(e) || a.set(t, {
                    ...r,
                    sourceConnectorIds: [...r.sourceConnectorIds ?? [], e]
                });
                continue
            }
            let c = pr({
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

function sr(e, t, n) {
    let r = cr(e),
        i = new Map;
    for (let t of e)
        for (let e of t.catalogActions) e.kind !== `exclude` && lr(i, e.connectorIds, e.plugin, e.kind === `set-if-missing`);
    for (let e of t)
        for (let t of e.apps_content) {
            let e = X(t.display_name);
            e != null && lr(i, [t.id], {
                id: t.id,
                name: e,
                logoUrl: t.logo_url,
                logoDarkUrl: t.logo_dark_url
            })
        }
    for (let e of n) {
        let t = X(e.name);
        if (t == null) continue;
        let {
            lightLogoUrl: n,
            darkLogoUrl: r
        } = a(e);
        lr(i, [e.id], {
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

function cr(e) {
    return new Set(e.flatMap(e => e.catalogActions.flatMap(e => e.kind === `exclude` ? e.connectorIds.flatMap(e => {
        let n = e.trim(),
            r = t(n);
        return r == null ? [n] : [n, r]
    }) : [])))
}

function lr(e, t, n, r = !1) {
    for (let i of t) {
        let t = X(i);
        t != null && (!r || !e.has(t)) && e.set(t, n)
    }
}

function ur(e) {
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
        let r = X(n.name);
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
            let n = c(e),
                i = n.id;
            if (n.symbol !== f.EcosystemMention || !o(i)) continue;
            let a = ee(i),
                s = r.slice(n.startIndex, n.endIndex).trim().replace(/^@/u, ``);
            s && t.push({
                connectorIds: [a],
                kind: `set-if-missing`,
                plugin: {
                    id: a,
                    name: s,
                    logoUrl: null,
                    logoDarkUrl: null
                }
            })
        }
    }
    let r = e.metadata,
        i = r?.invoked_resource?.publish_status === `private` || r?.chatgpt_sdk?.distribution_channel === re.ONLY_ME;
    return {
        catalogActions: t,
        invocation: dr(e),
        privateConnectorId: i && fr(e) ? X(r?.invoked_resource?.connector_id) : null
    }
}

function dr(e) {
    let t = e.metadata,
        n = t?.invoked_resource,
        r = t?.invoked_plugin,
        i = X(n?.connector_id),
        a = rr.safeParse(n?.source_providers).data,
        o = X(r?.connector_name) ?? (a !== void 0 || i === mr ? X(n?.app_name) : null);
    if (i == null || i === `connector_openai_plugin_management` || !fr(e) || n?.publish_status === `private` || t?.chatgpt_sdk?.distribution_channel === re.ONLY_ME) return null;
    let s = (t?.tool_icons ?? []).find(e => /\/ecosystem\/apps\/[^/]+/.test(e)) ?? (i === mr ? `/images/ecosystem/apps/appgarden/icon.png` : null),
        c = X(n?.capability_id),
        l = X(n?.capability_name),
        u = J.safeParse(n?.source_icons).data;
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

function fr(e) {
    let t = e.metadata?.chatgpt_sdk?.tool_response_metadata?.status;
    if (e.author.role !== l.Tool || e.status === `in_progress` || e.status === `finished_partial_completion` || e.metadata?.is_error === !0 || e.metadata?.chatgpt_sdk?.is_error === !0 || t === `error` || t === `cancelled` || e.metadata?.__internal?.api_tool_error?.error_code != null) return !1;
    let n = e.metadata?.invoked_plugin?.http_response_status;
    if (n == null) return !0;
    let r = Number(n);
    return Number.isInteger(r) && r >= 200 && r < 300
}

function pr(e, t, n = !1) {
    let r = e.connectorId;
    if (hr.has(d(r)) || t.excludedIdentifiers.has(r)) return null;
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

function X(e) {
    return typeof e == `string` && e.trim() ? e.trim() : null
}
var mr, hr, gr = e((() => {
    s(), te(), Ce(), ae(), pe(), Y(), ir(), he(), r(), i(), mr = `connector_20205bf7d4e99a89d7154bb849718324`, hr = new Set([`connector_openai_genui_search`, `connector_openai_genui_sheep`, `connector_openai_search_service`, fe, `connector_openai_user_notifications`, `connector_openai_personal_context`])
}));

function Z(e) {
    return e?.trim() ? e : null
}

function _r(e, t) {
    let n = [e.connectorId, e.linkId];
    return [JSON.stringify([...n, `id`, t.id]), ...t.url == null ? [] : [JSON.stringify([...n, `url`, le(new URL(t.url))])], ...t.open == null ? [] : [ue([...n, `open`, t.open])]]
}

function vr(e) {
    let t = dr(e)?.connectorId;
    if (t == null) return null;
    let n, r, i = e.content.content_type === `code` && /openai\/(?:resourceActivities|citations)/u.test(e.content.text) ? Or.safeParse(se(e, e.content.text)) : null;
    if (i?.success) {
        if (i.data.appContext.connectorId !== t) return null;
        n = [i.data.result], r = Z(i.data.appContext.linkId)
    } else {
        let i = e.metadata?.chatgpt_sdk,
            a = i?.tool_response_metadata;
        if (a?.status !== `success`) return null;
        let o = (e.metadata?.invoked_resource?.resource_uri)?.replace(/^\/+|\/+$/gu, ``).split(`/`);
        if (o == null || o.length !== 2 && o.length !== 3 || o.some(e => !e) || (o.length === 3 || /^(connector_|asdk_app_)/u.test(o[0])) && o[0] !== t) return null;
        n = [a.call_tool_result, a.mcp_tool_result, a.mcpToolResult], r = Z(i?.link_id) ?? Z(i?.[`openai/link_id`]) ?? Z(o.length === 3 ? o[1] : null)
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

function yr(e) {
    let t = vr(e);
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

function br(e, t) {
    let n = vr(e);
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

function xr(e) {
    if (e.author.role !== l.Assistant || !ve(e) || e.channel !== `final` && e.end_turn !== !0) return [];
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
                linkId: Z(r.link_id),
                resources: [i.data],
                ...typeof r.capability_id == `string` && /^[a-z][a-z0-9_]{0,63}$/u.test(r.capability_id) ? {
                    capabilityId: r.capability_id,
                    ...typeof r.capability_name == `string` && r.capability_name.trim() ? {
                        capabilityName: r.capability_name
                    } : {}
                } : {}
            },
            o = _r(a, i.data),
            s = o.map(e => n.get(e)).find(e => e != null);
        s == null ? t.push(a) : s.resources[0] = i.data;
        for (let e of o) n.set(e, s ?? a);
        if (t.length === Q) break
    }
    return t
}

function* Sr(e, t) {
    for (let [n, r] of e.entries()) {
        let e = t[n];
        e != null && (yield {
            messageIndex: n,
            activity: e
        });
        for (let e of xr(r)) yield {
            messageIndex: n,
            activity: e
        }
    }
}

function Cr(e, t) {
    if (!t.some(e => e?.resources.length) && !e.some(e => xr(e).length)) return [];
    let r = n;
    for (let t of e) r = ie(r, t);
    let i = new Map(r.flatMap((e, t) => e.messages.map(e => [e.id, t]))),
        a = new Set,
        o = new Map,
        s = 0,
        c = 0;
    for (let {
            messageIndex: n,
            activity: r
        }
        of Sr(e, t)) {
        let t = e[n],
            l = i.get(t.id) ?? n;
        for (let e of r.resources) {
            let i = e.url == null ? void 0 : new URL(e.url),
                u = _r(r, e),
                ee = new Set(u.flatMap(e => {
                    let t = o.get(e);
                    return t == null ? [] : [t]
                })),
                d = [...ee].sort((e, t) => e.firstSeenIndex - t.firstSeenIndex)[0];
            d ?? (d = {
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
            }, a.add(d));
            for (let e of ee)
                if (e !== d) {
                    e.openIndex > d.openIndex && (d.source.open = e.source.open, d.openIndex = e.openIndex), e.iconsIndex > d.iconsIndex && (d.source.icons = e.source.icons, d.iconsIndex = e.iconsIndex), d.source.capabilityId == null && e.source.capabilityId != null && (d.source.capabilityId = e.source.capabilityId, d.source.capabilityName = e.source.capabilityName);
                    for (let t of e.aliases) d.aliases.add(t), o.set(t, d);
                    for (let [t, n] of e.activitiesByTurn) {
                        let e = d.activitiesByTurn.get(t) ?? {
                            values: new Set,
                            firstReadMessageIndex: 1 / 0
                        };
                        for (let t of n.values) e.values.add(t);
                        e.firstReadMessageIndex = Math.min(e.firstReadMessageIndex, n.firstReadMessageIndex), d.activitiesByTurn.set(t, e)
                    }
                    a.delete(e)
                } for (let e of u) d.aliases.add(e), o.set(e, d);
            let f = d.activitiesByTurn.get(l) ?? {
                values: new Set,
                firstReadMessageIndex: 1 / 0
            };
            for (let t of e.activities) f.values.add(t);
            e.activities.includes(`read`) && (f.firstReadMessageIndex = Math.min(f.firstReadMessageIndex, n), e.open != null && (d.openIndex = s++, d.source.open = {
                ...e.open,
                linkId: r.linkId,
                messageId: t.id
            })), d.activitiesByTurn.set(l, f), d.source.url = e.url ?? d.source.url, e.title?.trim() && (d.source.title = e.title.trim()), d.source.mimeType ??= e.mimeType, e.icons?.length && (d.source.icons = e.icons, d.iconsIndex = c++), d.source.capabilityId == null && r.capabilityId != null && (d.source.capabilityId = r.capabilityId, d.source.capabilityName = r.capabilityName)
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
var Q, $, wr, Tr, Er, Dr, Or, kr, Ar, jr = e((() => {
    s(), ne(), gr(), ge(), he(), _e(), ce(), De(), Y(), Q = 100, $ = v().max(16384), wr = g({
        id: $.refine(e => e.trim().length > 0),
        url: $.refine(e => me(e) != null).optional(),
        title: $.optional(),
        mimeType: $.optional(),
        icons: J,
        activities: m(p([`read`, `created`, `updated`])).min(1).max(Q),
        open: g({
            tool: v().regex(/^[a-zA-Z0-9_.-]{1,256}$/u),
            arguments: y(v(), w()).refine(e => new TextEncoder().encode(JSON.stringify(e)).length <= 16384)
        }).optional().catch(void 0)
    }), Tr = wr.refine(e => e.url != null || e.open != null), Er = g({
        "openai/resourceActivities": g({
            version: b(1),
            resources: m(wr.required({
                url: !0
            })).min(1).max(Q)
        })
    }), Dr = g({
        isError: h().optional(),
        _meta: w().optional(),
        meta: w().optional()
    }), Or = g({
        type: b(`mcpToolCall`),
        server: p([`codex_apps`, `codex-connectors-mcp`]),
        status: b(`completed`),
        error: Se().optional(),
        appContext: g({
            connectorId: v(),
            linkId: v().nullable()
        }),
        result: Dr
    }), kr = g({
        "openai/citations": y(v(), w())
    }), Ar = g({
        title: $,
        target: g({
            type: b(`mcp_app_tool`),
            name: v(),
            arguments: y(v(), w()).nullish()
        })
    })
}));
export {
    jr as a, ur as c, gr as d, Y as f, Cr as i, ar as l, yr as n, dr as o, Qn as p, br as r, cr as s, xr as t, or as u
};
//# sourceMappingURL=4aa1bb90-k9384d5jm78tf8do.js.map