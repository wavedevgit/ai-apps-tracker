import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
var t, n, r, i, a, o = e((() => {
        t = e => typeof e == `object` && !!e, n = e => !t(e) || !t(e.summary) ? !1 : e.version === 1 && typeof e.complete == `boolean` && typeof e.revision == `string` && Array.isArray(e.session_ids) && Array.isArray(e.created_at_s) && (e.completed_at_s === void 0 || Array.isArray(e.completed_at_s)) && Array.isArray(e.scores) && Array.isArray(e.status_names) && Array.isArray(e.status_idx) && Array.isArray(e.frontier_idx) && typeof e.summary.total == `number`, r = (e, t, n) => e == null || e.revision === t.revision ? e ?? t : e.complete === t.complete ? n && t.summary.total < e.summary.total ? e : t : t.complete ? t : e, i = (e, t, i) => n(t) ? r(n(e) ? e : void 0, t, i) : t, a = (e, {
            includeLineage: t
        }) => {
            let n = Math.min(e.session_ids.length, e.created_at_s.length, e.scores.length, e.status_idx.length),
                r = e.created_at_s.slice(0, n).map((t, n) => e.completed_at_s?.[n] ?? t),
                i = n > 0 && r.every(e => e != null && Number.isFinite(e));
            return {
                revision: e.revision,
                xMode: i ? `time` : `index`,
                includeUngraded: t,
                frontierIndexes: e.frontier_idx.filter(e => Number.isInteger(e) && e >= 0 && e < n),
                points: e.session_ids.slice(0, n).map((n, a) => ({
                    id: n,
                    x: i ? r[a] ?? a : a + 1,
                    y: e.scores[a] ?? null,
                    status: e.status_names[e.status_idx[a] ?? -1] ?? `unknown`,
                    ...t && {
                        parentIndex: e.parent_idx?.[a] ?? null,
                        depth: e.depth?.[a] ?? null
                    }
                }))
            }
        }
    })),
    s, c, l, u, d, f = e((() => {
        s = 137.507764, c = 217, l = e => e != null && Number.isInteger(e) && e >= 0 ? e : null, u = (e, t) => {
            let n = (c + e * s) % 360,
                r = e % 3 - 1,
                i = t ? 78 : 72,
                a = (t ? 66 : 44) + r * 4;
            return `hsl(${n.toFixed(3)}deg ${i}% ${a}%)`
        }, d = (e, t = 8) => {
            let n = new Set,
                r = !1;
            for (let t of e) {
                let e = l(t.depth);
                e == null ? r = !0 : n.add(e)
            }
            let i = [...n].sort((e, t) => e - t),
                a = Math.max(0, Math.floor(t));
            if (i.length <= a) return {
                generations: i,
                hasUnknown: r
            };
            if (a === 0) return {
                generations: [],
                hasUnknown: r
            };
            if (a === 1) return {
                generations: [i[0] ?? 0],
                hasUnknown: r
            };
            let o = new Set;
            for (let e = 0; e < a; e += 1) {
                let t = i[Math.round(e * (i.length - 1) / (a - 1))];
                t != null && o.add(t)
            }
            return {
                generations: [...o],
                hasUnknown: r
            }
        }
    }));
export {
    o as a, f as i, u as n, i as o, d as r, a as s, l as t
};
//# sourceMappingURL=3d1df8cc-kyqjczp16eshyx6e.js.map