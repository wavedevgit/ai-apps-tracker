import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $st as t,
    A1 as n,
    Hnt as r,
    I1 as i,
    Jnt as a,
    S1 as o,
    Wnt as s,
    a5 as c,
    cat as l,
    fst as u,
    h8 as d,
    lat as f,
    m8 as p
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Ln as m,
    zn as h
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    n as g,
    r as _,
    t as v
} from "./29ad5082-oln1osqfxuccc0lr.js";
var y, b, x, S, C, w, T, E, D = e((() => {
        y = e => `${e.type}:${e.id}`, b = (e, t) => {
            let n = e.findIndex(e => y(e.target) === y(t.target));
            return n === -1 ? [...e, t] : e[n].type === t.type ? [...e] : e.map((e, r) => r === n ? t : e)
        }, x = (e, t) => {
            let n = new Set(e.map(e => e.id)),
                r = new Map(t.map(e => [e.id, e]));
            if (n.size !== e.length || r.size !== t.length || r.size !== n.size || t.some(e => !n.has(e.id))) throw Error(`The batch response does not match the submitted operations.`);
            return r
        }, S = class extends Error {}, C = e => e != null && typeof e.name == `string` && e.target != null && [`plugin`, `app`].includes(e.target.type) && typeof e.target.id == `string` && e.target.id.trim().length > 0 && [null, !0, !1].includes(e.current_enabled), w = e => e != null && [null, !0, !1].includes(e.current_enabled) && [null, `enabled`, `disabled`, `workspace_default`].includes(e.current_setting) && [`ready`, `unchanged`, `needs_changes`, `blocked`, `unknown`].includes(e.status) && Array.isArray(e.blockers) && e.blockers.every(e => [`setup_required`, `unsupported`, `unavailable`, `incomplete_analysis`].includes(e)) && Array.isArray(e.required_deps) && e.required_deps.every(T) && Array.isArray(e.optional_deps) && e.optional_deps.every(T), T = e => C(e) && w(e), E = (e, t, n, r) => {
            if (r === `preview` ? `type` in n : !(`type` in n) || ![`executed`, `blocked`].includes(n.type)) throw Error(`The batch response does not match the requested endpoint.`);
            if (n.workspace_id !== e.workspaceId || n.scope.type !== t.scope.type || n.scope.type === `role` && (t.scope.type !== `role` || n.scope.role_id !== t.scope.role_id)) throw Error(`The batch response belongs to another workspace or scope.`);
            if (x(t.operations, `type` in n && n.type === `executed` ? n.operation_results : n.operation_checks), `type` in n && n.type === `executed` && n.operation_results.some(e => ![`succeeded`, `unchanged`, `failed`, `not_attempted`, `unknown`].includes(e.status) || ![null, !0, !1].includes(e.current_enabled) || ![null, `enabled`, `disabled`, `workspace_default`].includes(e.current_setting) || ![null, `write_failed`, `dependency_failed`, `outcome_unknown`].includes(e.reason))) throw Error(`The batch execution evidence is incomplete.`);
            if (!(`type` in n && n.type === `executed`) && !n.operation_checks.every(e => w(e) && Array.isArray(e.downstream_impacts) && e.downstream_impacts.every(C))) throw Error(`The batch assessment evidence is incomplete.`)
        }
    })),
    O, k, A, j, M, N, P, F, I, L, R, z = e((() => {
        t(), p(), f(), a(), i(), h(), g(), D(), O = `1068868067`, k = () => {
            if (typeof window > `u`) return !1;
            let e = n()?.getWorkspaceId();
            if (e == null || s().getContext().user.customIDs?.workspace_id !== e) return !1;
            let t = new URL(l, window.location.href);
            return t.origin === window.location.origin && t.pathname.replace(/\/$/, ``) === `/backend-api` && t.search === `` && t.hash === `` && r(O, {
                disableExposureLog: !0
            })
        }, A = d(k, e => {
            let t = s();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        }, {
            name: `adminPluginNativeBatchReviewEnabled`,
            getServerFallback: () => !1
        }), j = (e, t) => {
            let n = k();
            return !e && !n ? !1 : (e && n && t(), !0)
        }, M = (e, t) => e.type === `workspace` && t.length > 0 && t.every(e => e.type === `enable` && e.target.type === `plugin`) || e.type === `role` && e.role_id.trim().length > 0 && t.length > 0 && t.length <= 200 && t.every(e => [`plugin`, `app`].includes(e.target.type) && typeof e.target.id == `string` && e.target.id.trim().length > 0 && [`enable`, `disable`, `workspace_default`].includes(e.type)) && new Set(t.map(({
            target: e
        }) => y(e))).size === t.length, N = M, P = N, F = m({
            id: `admin.plugins.v2.dependencies.batch.availability.unavailable`,
            defaultMessage: `This change is not available in batch review yet.`
        }), I = e => e != null && !!e.getWorkspaceId() && !!e.normalizedAccountUserId && e.data.isHipaaCompliantWorkspace === !1 && e.planType !== u.HC && !e.isQuorum(), L = (e, t) => {
            let r = n();
            return I(e) && I(r) && r?.id === e?.id && r?.getWorkspaceId() === t.workspaceId && r?.normalizedAccountUserId === t.workspaceUserId && r?.id === t.accountId
        }, R = (e, t, n, r) => ({
            key: JSON.stringify([t, n.scope, n.operations, r?.key]),
            validateBeforeSubmit: r?.validateBeforeSubmit,
            getSnapshot: (i = n) => k() && L(e, t) && i.scope.type === n.scope.type && (n.scope.type !== `role` || i.scope.type === `role` && i.scope.role_id === n.scope.role_id) && N(i.scope, i.operations) && (n.scope.type !== `role` || _()) && (r?.getSnapshot(i) ?? n.scope.type !== `role`),
            subscribe: e => {
                let t = r?.subscribe(e),
                    i = c(() => {
                        let e = o();
                        return JSON.stringify([e?.id, e?.getWorkspaceId(), e?.normalizedAccountUserId, I(e), A(), n.scope.type === `role` && v()])
                    }, e);
                return () => {
                    t?.(), i()
                }
            }
        })
    }));
export {
    L as a, I as c, S as d, E as f, b as g, D as h, z as i, k as l, x as m, A as n, M as o, y as p, j as r, P as s, F as t, R as u
};
//# sourceMappingURL=dbe96c84-miwy49cljbty705x.js.map