import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    In as t,
    Ln as n,
    Rn as r
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    l as i,
    m as a,
    p as o
} from "./6fd89734-me0mlo15lw6zwz6w.js";

function s(e) {
    return e === `commit_scan` || e === `repository_scan` ? e : null
}
var c, l, u, d, f = e((() => {
    r(), c = n({
        commit_scan: {
            id: `codexSecurity.workbench.scans.launch.scope.option.diff`,
            defaultMessage: `Commit changes`
        },
        repository_scan: {
            id: `codexSecurity.workbench.scans.launch.scope.option.full_commit`,
            defaultMessage: `Repository`
        }
    }), l = [`commit_scan`, `repository_scan`], u = n({
        commit_scan: {
            id: `codexSecurity.workbench.scans.launch.scope.diff.description`,
            defaultMessage: `Find security issues introduced by changes in commits.`
        },
        repository_scan: {
            id: `codexSecurity.workbench.scans.launch.scope.full_commit.description`,
            defaultMessage: `Find security issues across the repository at a specific revision.`
        }
    }), d = n({
        label: {
            id: `codexSecurity.workbench.scanType.label`,
            defaultMessage: `Scan type`
        },
        all: {
            id: `codexSecurity.workbench.scanType.all`,
            defaultMessage: `All scan types`
        }
    })
}));

function p(e, t) {
    let n = new URLSearchParams(e).get(t.param)?.trim() ?? ``;
    if (t.kind === `keyword`) return n ? [n] : [];
    if (t.kind === `scanType`) {
        let e = s(n);
        return e ? [e] : []
    }
    return Array.from(new Set(n.split(`,`).map(e => e.trim()).filter(e => e && e.toLowerCase() !== `all`)))
}
var m, h, g, _, v = e((() => {
    r(), f(), m = [{
        id: `finding`,
        label: t({
            id: `codexSecurity.workbench.findings.table.column.finding`,
            defaultMessage: `Finding`
        }),
        filter: {
            kind: `keyword`,
            param: `q`
        },
        sort: null,
        headerClassName: `min-w-64 py-3 ps-4`,
        cellClassName: `flex h-16 min-w-0 flex-col items-start justify-center gap-1 ps-4`
    }, {
        id: `source`,
        label: t({
            id: `codexSecurity.workbench.findings.table.column.source`,
            defaultMessage: `Source`
        }),
        filter: null,
        sort: null,
        headerClassName: `min-w-40 py-3`,
        cellClassName: `flex h-16 min-w-0 items-center gap-2 font-mono`,
        stackedFullWidth: !0
    }, {
        id: `scanType`,
        label: d.label,
        filter: {
            kind: `scanType`,
            param: `source`
        },
        sort: null,
        headerClassName: `min-w-36 py-3`,
        cellClassName: `flex h-16 items-center pe-4`
    }, {
        id: `severity`,
        label: t({
            id: `codexSecurity.workbench.findings.table.column.severity`,
            defaultMessage: `Severity`
        }),
        filter: {
            kind: `severity`,
            param: `criticality`
        },
        sort: `severity`,
        headerClassName: `min-w-32 py-3`,
        cellClassName: `flex h-16 items-center`
    }, {
        id: `status`,
        label: t({
            id: `codexSecurity.workbench.findings.table.column.status`,
            defaultMessage: `Status`
        }),
        filter: {
            kind: `status`,
            param: `status`
        },
        sort: null,
        headerClassName: `min-w-32 py-3`,
        cellClassName: `flex h-16 items-center`
    }, {
        id: `detected`,
        label: t({
            id: `codexSecurity.workbench.findings.table.column.detected`,
            defaultMessage: `Detected`
        }),
        filter: null,
        sort: `detected`,
        headerClassName: `min-w-32 py-3 pe-4! whitespace-nowrap`,
        cellClassName: `flex h-16 items-center pe-4 whitespace-nowrap`
    }], h = m.flatMap(e => e.filter ? [{
        ...e.filter,
        label: e.label
    }] : []), g = t({
        id: `codex.security.workbench.findings.search.placeholder`,
        defaultMessage: `Search findings`
    }), _ = [`assignee`, `assignee_email`, `recommended`, `path_prefix`, `author`, `validated`, `has_patch`]
}));

function y(e) {
    return e.slice(-8)
}

function b(e) {
    return e.commit_analysis?.title ?? e.commit_analysis?.bugs_found_or_fixed ?? e.commit_analysis?.description ?? `Untitled finding`
}

function x(e) {
    let t = new URLSearchParams(e).get(`repo`);
    return t ? t.split(`,`).map(e => e.trim()).filter(Boolean) : []
}

function S(e) {
    let t = e.scan_input;
    return t && typeof t == `object` && `repo_url` in t && typeof t.repo_url == `string` ? t.repo_url : ``
}

function C(e) {
    let t = e.scan_input;
    return t && typeof t == `object` && `state` in t && typeof t.state == `string` ? t.state : `disabled`
}

function w({
    currentStep: e,
    isEnabled: t
}) {
    return t ? e : `paused`
}

function T(e) {
    let t = a(e);
    if (!t) return `—`;
    let n = Date.now() - t.getTime(),
        r = Math.abs(n),
        i = 6e4,
        o = 60 * i,
        s = 24 * o,
        c = 7 * s,
        l = 30 * s,
        u = 365 * s,
        d = (e, t) => `${Math.max(1,Math.floor(e))}${t}`;
    return r >= u ? d(r / u, `y`) : r >= l ? d(r / l, `mo`) : r >= c ? d(r / c, `w`) : r >= s ? d(r / s, `d`) : r >= o ? d(r / o, `h`) : r >= i ? d(r / i, `m`) : `now`
}

function E(e) {
    switch ((e ?? ``).toLowerCase()) {
        case `critical`:
            return `text-red-500`;
        case `high`:
            return `text-orange-500`;
        case `medium`:
            return `text-yellow-500`;
        case `low`:
            return `text-green-500`;
        case `informational`:
            return `text-blue-500`;
        default:
            return `text-token-text-tertiary`
    }
}

function D(e) {
    return e.criticality ?? e.commit_analysis?.attack_path_analysis?.adjusted_criticality_final ?? e.commit_analysis?.attack_path_final_criticality ?? null
}

function O(e) {
    let t = a(e);
    return t ? `${new Intl.DateTimeFormat(`en-US`,{hour:`numeric`,minute:`2-digit`,hour12:!0}).format(t)} ${new Intl.DateTimeFormat(`en-US`,{month:`short`,day:`numeric`,year:`numeric`}).format(t)}` : `—`
}

function k(e) {
    return e === `findings` || e === `scans` || e === `archives` ? e : null
}

function A(e) {
    return k(e) === `scans` ? `scans` : `findings`
}

function j(e) {
    return k(e) === `archives`
}

function M(e, t) {
    return t ? `/codex/cloud/security/${e}/${encodeURIComponent(t)}` : `/codex/cloud/security/${e}`
}

function N(e, t) {
    return e.startsWith(`wfr_`) ? M(`runs`, e) : `/codex/cloud/security/repositories/${encodeURIComponent(t)}/scans/${encodeURIComponent(e)}`
}

function P(e, t) {
    return M(j(e) ? `archives` : `findings`, t)
}

function F(e = ``) {
    let t = new URLSearchParams;
    for (let [n, r] of new URLSearchParams(e)) V.has(n) && r.trim() && t.append(n, r);
    let n = t.toString(),
        r = M(`archives`);
    return n ? `${r}?${n}` : r
}

function I(e = ``) {
    let t = new URLSearchParams(e);
    !t.has(`criticality`) && t.has(`sev`) && t.set(`criticality`, t.get(`sev`) ?? ``);
    let n = t.has(`status`) ? Array.from(new Set(i(e, `status`, ``).filter(e => e && e.toLowerCase() !== `all`))) : [...U],
        r = e => n.length === e.length && e.every(e => n.includes(e)),
        a = n.length === 0 ? `all` : r(U) ? `open` : r(H) ? `closed` : `custom`;
    return {
        statuses: n,
        statusView: a,
        closedOnly: n.length > 0 && n.every(e => H.some(t => t === e)),
        hasNarrowingFilters: a === `custom` || h.some(e => e.kind !== `status` && p(t.toString(), e).length > 0)
    }
}

function L(e, t) {
    let n = new URLSearchParams(e);
    return n.set(`status`, t === `open` ? U.join(`,`) : t === `closed` ? H.join(`,`) : ``), n.delete(`cursor`), n.delete(`page`), `?${n.toString()}`
}

function R(e) {
    let t = new URLSearchParams(e);
    for (let e of W) t.delete(e);
    return L(t.toString(), `all`)
}

function z(e = ``) {
    let t = new URLSearchParams(e);
    return !t.has(`criticality`) && t.has(`sev`) && t.set(`criticality`, t.get(`sev`) ?? ``), t.delete(`sev`), t.set(`status`, H.join(`,`)), `?${t.toString()}`
}

function B(e = ``) {
    let t = new URLSearchParams(e),
        n = new URLSearchParams;
    for (let [e, r] of t) G.has(e) && r.trim() && n.append(e, r);
    return `${M(`findings`)}${z(n.toString())}`
}
var V, H, U, W, G, K = e((() => {
    o(), v(), V = new Set([`repo`, `sev`, `has_patch`, `validated`, `assignee`, `assignee_email`, `author`, `path_prefix`, `q`, `sort`]), H = [`fixed`, `wontfix`, `duplicate`, `false_positive`], U = [`new`, `triaged`, `in_progress`], W = [...h.map(e => e.param), ..._, `sev`], G = new Set([`repo`, `repo_id`, `sev`, `criticality`, `has_patch`, `validated`, `assignee`, `assignee_email`, `author`, `path_prefix`, `q`, `sort`, `workflow_runs_preview`])
}));
export {
    _ as A, j as C, g as D, h as E, c as F, d as I, f as M, s as N, p as O, u as P, K as S, m as T, b as _, B as a, T as b, I as c, M as d, N as f, A as g, S as h, y as i, l as j, v as k, P as l, C as m, U as n, z as o, w as p, O as r, R as s, H as t, L as u, D as v, E as w, x, F as y
};
//# sourceMappingURL=6fd89734-pe1yo2eonvh0g9i6.js.map