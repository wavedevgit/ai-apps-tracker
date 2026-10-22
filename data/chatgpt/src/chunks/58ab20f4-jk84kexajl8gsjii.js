import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $u as t,
    A8 as n,
    Art as r,
    F8 as i,
    Hot as a,
    Lnt as o,
    Mtt as s,
    R8 as c,
    Vot as l,
    Zu as u,
    a5 as d,
    dF as f,
    e5 as p,
    f5 as m,
    gX as h,
    hX as g,
    jrt as _,
    krt as v,
    m5 as y,
    n5 as b,
    ptt as x,
    vF as S,
    znt as C
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    HYt as w,
    UYt as T,
    VYt as E,
    WYt as D
} from "./conversation-small-fh0oqifngkf5rvl1.js";
var O, k, A, j, M, N, P, F, I, L, R = e((() => {
        s(), p(), T(), h(), O = e => {
            let [t] = D(g(e), d({
                path: y,
                args: e => {
                    if (b(e)) return e;
                    let [t] = D(y(e), m);
                    return t ?? {}
                }
            }));
            return t
        }, k = e => {
            let t = g(e);
            if (t.trim().length === 0) return null;
            try {
                return JSON.parse(t) ?? null
            } catch {
                return t
            }
        }, A = e => e.metadata?.chatgpt_sdk?.tool_response_metadata, j = e => {
            let t = new Set;
            typeof e.recipient == `string` && e.recipient.length > 0 && t.add(e.recipient);
            let n = O(e)?.path;
            if (typeof n != `string`) return t;
            let r = n.split(`/`).filter(Boolean);
            return r.length < 2 || t.add(`api_tool.${r[0]}.${r[r.length-1]}`), t
        }, M = (e, t) => {
            let n = t.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
            return RegExp(`^${n}(?:_\\d+)*$`).test(e)
        }, N = (e, t) => {
            if (e.author.role !== `tool`) return !1;
            let n = e.author.name;
            return typeof n == `string` ? Array.from(j(t)).some(e => M(n, e)) : !!e.metadata?.attachments?.some(e => e.display_files_from_actions_ext)
        }, P = e => {
            let t = A(e);
            if (!t || typeof t != `object`) return null;
            let n = t,
                r = [n.call_tool_result, n.mcp_tool_result, n.mcpToolResult, n.structuredContent, n.structured_content, n.result, n.output];
            for (let e of r)
                if (e !== void 0) return e;
            return null
        }, F = e => {
            let t = e.metadata?.attachments?.filter(e => e.display_files_from_actions_ext);
            return t?.length ? {
                attachments: t
            } : null
        }, I = e => {
            let t = k(e);
            if (t != null && typeof t != `string`) return t;
            let n = e.metadata?.jit_plugin_data?.from_server,
                r = n && `body` in n ? n.body : void 0;
            if (r && typeof r == `object`) {
                let e = r;
                if (e.structuredContent !== void 0) return e.structuredContent;
                if (e.structured_content !== void 0) return e.structured_content;
                if (e.result !== void 0) return e.result;
                if (e.output !== void 0) return e.output
            }
            let i = e.metadata?.chatgpt_sdk;
            if (i && typeof i == `object`) {
                let e = i;
                if (e.tool_output !== void 0) return e.tool_output;
                if (e.structuredContent !== void 0) return e.structuredContent;
                if (e.structured_content !== void 0) return e.structured_content
            }
            let a = P(e);
            if (a !== null) return a;
            let o = F(e);
            return o === null ? e.content.content_type !== x.Text && e.content.content_type !== x.Code ? e.content : t ?? null : o
        }, L = (e, t) => {
            for (let n of e.values())
                for (let e of n)
                    if (e.id === t) return e;
            return null
        }
    })),
    z, B, V = e((() => {
        S(), t(), R(), w(), n(), C(), v(), a(), z = class {
            constructor(e) {
                l(this, `conversation`, void 0), l(this, `focusedMessageId$`, c(null, {
                    equals: () => !1
                })), l(this, `focusedMessages$`, i(() => {
                    let e = u(this.conversation),
                        t = this.focusedMessageId$();
                    if (!t) return [];
                    let n = e => e.author.role === `assistant` && !!e.recipient?.startsWith(`api_tool`),
                        r = e => e.author.role === `tool` && typeof e.author.name == `string`,
                        i = e => {
                            let t = I(e);
                            if ((e.metadata?.chatgpt_sdk == null ? null : E(e.metadata.chatgpt_sdk)) != null) return !0;
                            let n = A(e);
                            return n && typeof n == `object` && `elicitation` in n ? !0 : t != null
                        },
                        a = e => {
                            if ((e.metadata?.chatgpt_sdk == null ? null : E(e.metadata.chatgpt_sdk)) != null) return !0;
                            let t = A(e);
                            return !!(t && typeof t == `object` && `elicitation` in t)
                        },
                        o = (e, t) => {
                            let r = e[t],
                                a = null;
                            for (let o = t + 1; o < e.length; o += 1) {
                                let t = e[o];
                                if (n(t)) break;
                                N(t, r) && i(t) && (a = o)
                            }
                            return a
                        },
                        s = (e, t) => {
                            let i = e[t];
                            if (n(i)) return t;
                            if (r(i))
                                for (let r = t - 1; r >= 0; --r) {
                                    let t = e[r];
                                    if (n(t) && N(i, t)) return r
                                }
                            for (let r = t; r >= 0; --r)
                                if (n(e[r])) return r;
                            return null
                        },
                        c = (e, t) => {
                            for (let r = t + 1; r < e.length; r += 1)
                                if (n(e[r])) return r;
                            return e.length
                        };
                    for (let r of e) {
                        let e = r.messages,
                            i = e.findIndex(e => e.id === t);
                        if (i === -1) continue;
                        let l = s(e, i);
                        if (l == null) continue;
                        let u = c(e, l),
                            d = 0,
                            f = i;
                        for (; f >= 0 && !n(e[f]); --f);
                        for (let t = f; t >= 0; --t) {
                            if (!n(e[t])) continue;
                            let r = o(e, t);
                            if (r == null) continue;
                            let i = e[r];
                            if (a(i)) {
                                d = r + 1;
                                break
                            }
                        }
                        return e.slice(d, u)
                    }
                    return []
                })), this.conversation = e
            }
            focusMessage$(e) {
                r.count(_.ECOSYSTEM, `dev_mode_inspector.opened`);
                let t = `chatgpt_web_ecosystem_dev_mode_inspector_opened`,
                    n = o.logStructuredEvent(`ChatgptEcosystemInspectorOpened`, {
                        legacyStatsigEventName: t
                    });
                o.logValueEventWithStatsig({
                    segmentEventName: `Ecosystem app: Open dev mode inspector`,
                    statsigEventName: t,
                    eventId: n
                }), this.focusedMessageId$.set(e)
            }
            blur() {
                this.focusedMessageId$.set(null)
            }
        }, B = f(e => new z(e))
    }));
export {
    R as a, A as c, I as i, V as n, N as o, L as r, O as s, B as t
};
//# sourceMappingURL=58ab20f4-jk84kexajl8gsjii.js.map