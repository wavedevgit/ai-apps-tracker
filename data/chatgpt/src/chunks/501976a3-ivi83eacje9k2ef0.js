import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    grt as t,
    hrt as n,
    mrt as r
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    DWt as i,
    LWt as a,
    NWt as o,
    OWt as s,
    zWt as c
} from "./conversation-small-nmt18uiom3b14vca.js";
var l, u, d, f, p, m, h, g, _, v = e((() => {
        r(), c(), l = `microsoft_workspace_auto_link_outcome`, u = `microsoft_workspace_auto_link_duration_ms`, d = `microsoft_workspace_auto_link_approved_not_installed`, f = 3600 * 1e3, p = e => {
            switch (e) {
                case s:
                    return `outlook_email`;
                case i:
                    return `outlook_calendar`;
                case o:
                    return `sharepoint`;
                case a:
                    return `teams`;
                default:
                    return `none`
            }
        }, m = e => {
            try {
                n.count(t.ECOSYSTEM, d, {
                    connector: p(e)
                })
            } catch {}
        }, h = ({
            phase: e,
            outcome: r,
            reason: i = `none`,
            connectorId: a,
            companionCount: o = 0,
            durationMs: s
        }) => {
            try {
                let c = {
                    phase: e,
                    outcome: r,
                    reason: i,
                    connector: p(a),
                    companion_count: String(Math.max(0, Math.min(3, o)))
                };
                if (n.count(t.ECOSYSTEM, l, c), s == null || !Number.isFinite(s) || s < 0 || s > f) return;
                n.hist(t.ECOSYSTEM, u, c, Math.round(s))
            } catch {}
        }, g = async ({
            phase: e,
            connectorId: t,
            failureReason: n,
            run: r
        }) => {
            let i = performance.now();
            try {
                let n = await r();
                return h({
                    phase: e,
                    outcome: `success`,
                    connectorId: t,
                    durationMs: performance.now() - i
                }), n
            } catch (r) {
                throw h({
                    phase: e,
                    outcome: `failure`,
                    reason: n,
                    connectorId: t,
                    durationMs: performance.now() - i
                }), r
            }
        }, _ = () => {
            try {
                n.flush({
                    keepalive: !0
                }).catch(() => {})
            } catch {}
        }
    })),
    y, b, x, S, C, w, T, E, D, O = e((() => {
        y = `chatgpt.microsoft-workspace-auto-link.attempt`, b = `chatgpt.microsoft-workspace-auto-link.pending`, x = 900 * 1e3, S = ({
            workspaceId: e,
            accountUserId: t
        }) => `${y}:${t}:${e}`, C = e => {
            try {
                return e.startsWith(`/`) && new URL(e, window.location.origin).origin === window.location.origin
            } catch {
                return !1
            }
        }, w = e => typeof e == `object` && !!e && `workspaceId` in e && typeof e.workspaceId == `string` && `accountUserId` in e && typeof e.accountUserId == `string` && `returnPath` in e && typeof e.returnPath == `string` && C(e.returnPath) && `startedAt` in e && typeof e.startedAt == `number`, T = ({
            workspaceId: e,
            accountUserId: t,
            returnPath: n,
            now: r = Date.now()
        }) => {
            try {
                let i = S({
                        workspaceId: e,
                        accountUserId: t
                    }),
                    a = window.localStorage.getItem(i);
                if (a != null) {
                    let e = JSON.parse(a);
                    if (w(e) && r - e.startedAt < x) return null
                }
                let o = {
                    workspaceId: e,
                    accountUserId: t,
                    returnPath: n,
                    startedAt: r
                };
                return window.localStorage.setItem(i, JSON.stringify(o)), o
            } catch {
                return null
            }
        }, E = e => {
            try {
                return window.sessionStorage.setItem(b, JSON.stringify(e)), !0
            } catch {
                return !1
            }
        }, D = () => {
            try {
                let e = window.sessionStorage.getItem(b);
                if (e == null) return null;
                window.sessionStorage.removeItem(b);
                let t = JSON.parse(e);
                return w(t) ? t : null
            } catch {
                return null
            }
        }
    }));
export {
    _ as a, m as c, E as i, h as l, D as n, v as o, O as r, g as s, T as t
};
//# sourceMappingURL=501976a3-ivi83eacje9k2ef0.js.map