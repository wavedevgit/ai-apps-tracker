import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    Btt as n,
    G6 as r,
    GY as i,
    Gat as a,
    Htt as o,
    J6 as s,
    JP as c,
    KY as l,
    Mnt as u,
    Nnt as d,
    Nu as f,
    Pnt as p,
    S8 as m,
    VP as h,
    Wat as g,
    bet as _,
    f8 as v,
    h8 as y,
    ju as b,
    u8 as x,
    w8 as S,
    zet as C
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    AYt as w,
    OYt as T,
    jYt as E,
    kYt as D
} from "./conversation-small-fym1zmu9zimymmm1.js";
var O, k, A, j, M, N, P, F, I, L, R = e((() => {
        C(), x(), w(), l(), O = e => {
            let [t] = E(i(e), y({
                path: S,
                args: e => {
                    if (v(e)) return e;
                    let [t] = E(S(e), m);
                    return t ?? {}
                }
            }));
            return t
        }, k = e => {
            let t = i(e);
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
            return o === null ? e.content.content_type !== _.Text && e.content.content_type !== _.Code ? e.content : t ?? null : o
        }, L = (e, t) => {
            for (let n of e.values())
                for (let e of n)
                    if (e.id === t) return e;
            return null
        }
    })),
    z, B, V = e((() => {
        c(), f(), R(), D(), t(), o(), u(), a(), z = class {
            constructor(e) {
                g(this, `conversation`, void 0), g(this, `focusedMessageId$`, s(null, {
                    equals: () => !1
                })), g(this, `focusedMessages$`, r(() => {
                    let e = b(this.conversation),
                        t = this.focusedMessageId$();
                    if (!t) return [];
                    let n = e => e.author.role === `assistant` && !!e.recipient?.startsWith(`api_tool`),
                        r = e => e.author.role === `tool` && typeof e.author.name == `string`,
                        i = e => {
                            let t = I(e);
                            if ((e.metadata?.chatgpt_sdk == null ? null : T(e.metadata.chatgpt_sdk)) != null) return !0;
                            let n = A(e);
                            return n && typeof n == `object` && `elicitation` in n ? !0 : t != null
                        },
                        a = e => {
                            if ((e.metadata?.chatgpt_sdk == null ? null : T(e.metadata.chatgpt_sdk)) != null) return !0;
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
                d.count(p.ECOSYSTEM, `dev_mode_inspector.opened`);
                let t = `chatgpt_web_ecosystem_dev_mode_inspector_opened`,
                    r = n.logStructuredEvent(`ChatgptEcosystemInspectorOpened`, {
                        legacyStatsigEventName: t
                    });
                n.logValueEventWithStatsig({
                    segmentEventName: `Ecosystem app: Open dev mode inspector`,
                    statsigEventName: t,
                    eventId: r
                }), this.focusedMessageId$.set(e)
            }
            blur() {
                this.focusedMessageId$.set(null)
            }
        }, B = h(e => new z(e))
    }));
export {
    R as a, A as c, I as i, V as n, N as o, L as r, O as s, B as t
};
//# sourceMappingURL=58ab20f4-de6265zaz3czw86d.js.map