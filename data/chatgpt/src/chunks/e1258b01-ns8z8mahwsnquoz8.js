import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    prt as t,
    urt as n
} from "./4813494d-t80q9ew944ej0mgk.js";
var r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D = e((() => {
    t(), r = `2932422744`, i = e => !!e && typeof e == `object` && !Array.isArray(e) && Object.getOwnPropertySymbols(e).length === 0, a = e => !i(e.params) || !i(e.params.properties) ? !1 : Object.keys(e.params.properties).length > 0, o = e => {
        if (!e) return null;
        try {
            return new RegExp(e), null
        } catch (e) {
            return e instanceof Error ? e.message : `Invalid regex`
        }
    }, s = () => n(r), c = e => {
        let t = s();
        return t.get(`allow_all`, !1) ? !0 : t.get(`allowed_service_connector_ids`, []).filter(e => typeof e == `string`).includes(e)
    }, l = e => e.primaryConnector.connector_type === `MCP` || e.primaryConnector.connector_type === `SERVICE` && c(e.primaryConnector.id), u = ({
        app: e,
        showParameterConstraints: t
    }) => t && l(e), d = ({
        app: e
    }) => l(e), f = ({
        app: e,
        syncOnly: t
    }) => !t && l(e), p = (e, t) => {
        function n(e, t) {
            let r = {
                ...e
            };
            return Object.entries(t).forEach(([e, t]) => {
                let a = r[e];
                i(a) && i(t) ? r[e] = n(a, t) : r[e] = t
            }), r
        }
        return n(e, t)
    }, m = (e, t) => {
        if (!t.startsWith(`#/`)) return;
        let n = t.slice(2).split(`/`).map(e => e.replaceAll(`~1`, `/`).replaceAll(`~0`, `~`)),
            r = e;
        for (let e of n) {
            if (!i(r)) return;
            r = r[e]
        }
        return i(r) ? r : void 0
    }, h = (e, t, n = new Set) => {
        let r = e.$ref;
        if (typeof r != `string` || n.has(r)) return e;
        let i = m(t, r);
        if (!i) return e;
        let {
            $ref: a,
            ...o
        } = e, s = h(i, t, new Set(n).add(r));
        return p(s, o)
    }, g = (e, t) => {
        let n = h(e, t),
            r = n.anyOf;
        if (Array.isArray(r)) return r.filter(i).map(e => h(e, t));
        let a = n.oneOf;
        return Array.isArray(a) ? a.filter(i).map(e => h(e, t)) : []
    }, _ = e => {
        let t = e.anyOf;
        if (Array.isArray(t)) return t.filter(i);
        let n = e.oneOf;
        return Array.isArray(n) ? n.filter(i) : []
    }, v = e => {
        let t = e.$ref;
        return typeof t == `string` && t.startsWith(`#/`) ? t : void 0
    }, y = (e, t) => {
        let n = h(e, t),
            r = [],
            i = n.type;
        return typeof i == `string` ? r.push(i) : Array.isArray(i) ? i.forEach(e => {
            typeof e == `string` && r.push(e)
        }) : g(n, t).forEach(e => {
            let t = e.type;
            typeof t == `string` ? r.push(t) : Array.isArray(t) && t.forEach(e => {
                typeof e == `string` && r.push(e)
            })
        }), r
    }, b = (e, t) => {
        let n = h(e, t);
        return i(n.items) ? n : g(n, t).find(e => y(e, t).includes(`array`))
    }, x = (e, t) => {
        let n = h(e, t),
            r = n.type;
        return r === `object` || Array.isArray(r) && r.includes(`object`) ? n : g(n, t).find(e => y(e, t).includes(`object`))
    }, S = (e, t) => {
        let n = v(e);
        if (n && y(e, t).includes(`object`)) return n;
        for (let n of _(e)) {
            let e = S(n, t);
            if (e) return e
        }
    }, C = (e, t) => {
        if (i(e.items) && y(e.items, t).includes(`object`)) return S(e.items, t);
        for (let n of _(e))
            if (y(n, t).includes(`array`) && i(n.items) && y(n.items, t).includes(`object`)) return S(n.items, t)
    }, w = e => Array.isArray(e) && e.every(e => typeof e == `string` || typeof e == `number` || typeof e == `boolean`), T = (e, t, n, r, a, o) => {
        let s = h(e, t);
        if (!i(s.properties)) return [];
        let c = new Set,
            l = s.required;
        Array.isArray(l) && l.forEach(e => {
            typeof e == `string` && c.add(e)
        });
        let u = [];
        return Object.entries(s.properties).forEach(([e, s]) => {
            let l = i(s) ? s : {},
                d = i(s) ? h(s, t) : {},
                f = y(d, t),
                p = typeof d.format == `string` ? d.format : void 0,
                m = typeof d.description == `string` ? d.description : void 0,
                g = typeof d.pattern == `string` ? d.pattern : void 0,
                _ = typeof d.minimum == `number` ? d.minimum : void 0,
                v = typeof d.maximum == `number` ? d.maximum : void 0,
                E = w(d.enum) ? d.enum : void 0,
                D = E && E.every(e => typeof e == `boolean`) ? void 0 : E?.filter(e => typeof e == `string` || typeof e == `number`),
                O = b(d, t),
                k = typeof O?.minItems == `number` ? O.minItems : void 0,
                A = typeof O?.maxItems == `number` ? O.maxItems : void 0,
                j = typeof d.const == `boolean` ? d.const : void 0,
                M = d.enum,
                N = Array.isArray(M) && M.length === 1 && typeof M[0] == `boolean` ? M[0] : void 0,
                P = f.includes(`string`),
                ee = f.some(e => e === `number` || e === `integer`),
                te = f.includes(`boolean`),
                F = f.includes(`array`),
                I = f.includes(`object`),
                L = x(d, t),
                R = S(l, t),
                z = O && i(O.items) ? h(O.items, t) : void 0,
                B = C(l, t),
                V = z ? y(z, t) : [],
                H = z?.pattern,
                U = typeof H == `string` ? H : void 0,
                W = z?.minimum,
                ne = typeof W == `number` ? W : void 0,
                G = z?.maximum,
                re = typeof G == `number` ? G : void 0,
                K = z?.const,
                ie = typeof K == `boolean` ? K : void 0,
                q = z?.enum,
                ae = Array.isArray(q) && q.length === 1 && typeof q[0] == `boolean` ? q[0] : void 0,
                J = w(q) ? q : void 0,
                oe = J && J.every(e => typeof e == `boolean`) ? void 0 : J?.filter(e => typeof e == `string` || typeof e == `number`),
                se = V.includes(`string`),
                ce = V.some(e => e === `number` || e === `integer`),
                le = V.includes(`boolean`),
                ue = V.includes(`array`),
                Y = V.includes(`object`),
                de = I && !i(L?.properties) && L?.minProperties === void 0 && L?.maxProperties === void 0,
                fe = Y && z && !i(z.properties) && z.minProperties === void 0 && z.maxProperties === void 0,
                X = [...n, e],
                Z = X.join(`.`),
                Q = {
                    name: Z,
                    displayName: r === 0 ? Z : `.${X.slice(1).join(`.`)}`,
                    depth: r,
                    required: c.has(e),
                    types: f,
                    format: p,
                    description: m,
                    pattern: g,
                    minimum: _,
                    maximum: v,
                    enumValues: D,
                    supportsRegex: P,
                    supportsRange: ee,
                    isInteger: f.includes(`integer`),
                    supportsBoolean: te,
                    booleanClamp: j ?? N,
                    supportsArray: F,
                    supportsObject: I,
                    minItems: k,
                    maxItems: A,
                    itemsSchemaPresent: !!z,
                    itemTypes: V,
                    itemPattern: U,
                    itemMinimum: ne,
                    itemMaximum: re,
                    itemEnumValues: oe,
                    itemSupportsRegex: se,
                    itemSupportsRange: ce,
                    itemSupportsBoolean: le,
                    itemSupportsArray: ue,
                    itemSupportsObject: Y,
                    itemBooleanClamp: ie ?? ae,
                    missingObjectSchema: de,
                    missingItemObjectSchema: fe
                };
            a.push(Q);
            let $ = [];
            if (I && L && i(L.properties) && (!R || !o.has(R))) {
                let e = R ? new Set(o).add(R) : o;
                $.push(...T(L, t, X, r + 1, a, e))
            }
            if (F && Y && z && i(z.properties) && (!B || !o.has(B))) {
                let i = B ? new Set(o).add(B) : o,
                    s = [...n, `${e}[]`];
                $.push(...T(z, t, s, r + 1, a, i))
            }
            u.push({
                entry: Q,
                children: $
            })
        }), u
    }, E = e => {
        let t = [];
        return {
            parameterEntries: t,
            parameterTree: T(e, e, [], 0, t, new Set)
        }
    }
}));
export {
    o as a, i as c, f as i, p as l, u as n, a as o, d as r, D as s, E as t
};
//# sourceMappingURL=e1258b01-ns8z8mahwsnquoz8.js.map