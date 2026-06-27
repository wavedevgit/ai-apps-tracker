(() => {
    "use strict";
    var e = {
            d: (n, t) => {
                for (var r in t) e.o(t, r) && !e.o(n, r) && Object.defineProperty(n, r, {
                    enumerable: !0,
                    get: t[r]
                })
            },
            o: (e, n) => Object.prototype.hasOwnProperty.call(e, n),
            r: e => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        },
        n = {};
    e.r(n), e.d(n, {
        activate: () => da,
        deactivate: () => fa
    });
    const t = require("vscode");
    var r, s;

    function i(e) {
        const n = r[e];
        return "string" != typeof n ? e.toString() : n[0].toLowerCase() + n.substring(1).replace(/[A-Z]/g, e => "_" + e.toLowerCase())
    }(s = r || (r = {}))[s.Canceled = 1] = "Canceled", s[s.Unknown = 2] = "Unknown", s[s.InvalidArgument = 3] = "InvalidArgument", s[s.DeadlineExceeded = 4] = "DeadlineExceeded", s[s.NotFound = 5] = "NotFound", s[s.AlreadyExists = 6] = "AlreadyExists", s[s.PermissionDenied = 7] = "PermissionDenied", s[s.ResourceExhausted = 8] = "ResourceExhausted", s[s.FailedPrecondition = 9] = "FailedPrecondition", s[s.Aborted = 10] = "Aborted", s[s.OutOfRange = 11] = "OutOfRange", s[s.Unimplemented = 12] = "Unimplemented", s[s.Internal = 13] = "Internal", s[s.Unavailable = 14] = "Unavailable", s[s.DataLoss = 15] = "DataLoss", s[s.Unauthenticated = 16] = "Unauthenticated";
    class a extends Error {
        constructor(e, n = r.Unknown, t, s, a) {
            super(function(e, n) {
                return e.length ? `[${i(n)}] ${e}` : `[${i(n)}]`
            }(e, n)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = e, this.code = n, this.metadata = new Headers(null != t ? t : {}), this.details = null != s ? s : [], this.cause = a
        }
        static from(e, n = r.Unknown) {
            return e instanceof a ? e : e instanceof Error ? "AbortError" == e.name ? new a(e.message, r.Canceled) : new a(e.message, n, void 0, void 0, e) : new a(String(e), n, void 0, void 0, e)
        }
        static[Symbol.hasInstance](e) {
            return e instanceof Error && (Object.getPrototypeOf(e) === a.prototype || "ConnectError" === e.name && "code" in e && "number" == typeof e.code && "metadata" in e && "details" in e && Array.isArray(e.details) && "rawMessage" in e && "string" == typeof e.rawMessage && "cause" in e)
        }
        findDetails(e) {
            const n = "typeName" in e ? {
                    findMessage: n => n === e.typeName ? e : void 0
                } : e,
                t = [];
            for (const e of this.details) {
                if ("getType" in e) {
                    n.findMessage(e.getType().typeName) && t.push(e);
                    continue
                }
                const r = n.findMessage(e.type);
                if (r) try {
                    t.push(r.fromBinary(e.value))
                } catch (e) {}
            }
            return t
        }
    }

    function o(e, n) {
        if (!e) throw new Error(n)
    }

    function u(e) {
        if ("number" != typeof e) throw new Error("invalid int 32: " + typeof e);
        if (!Number.isInteger(e) || e > 2147483647 || e < -2147483648) throw new Error("invalid int 32: " + e)
    }

    function l(e) {
        if ("number" != typeof e) throw new Error("invalid uint 32: " + typeof e);
        if (!Number.isInteger(e) || e > 4294967295 || e < 0) throw new Error("invalid uint 32: " + e)
    }

    function m(e) {
        if ("number" != typeof e) throw new Error("invalid float 32: " + typeof e);
        if (Number.isFinite(e) && (e > 34028234663852886e22 || e < -34028234663852886e22)) throw new Error("invalid float 32: " + e)
    }
    const c = Symbol("@bufbuild/protobuf/enum-type");

    function d(e) {
        const n = e[c];
        return o(n, "missing enum type on enum object"), n
    }

    function f(e, n, t, r) {
        e[c] = T(n, t.map(n => ({
            no: n.no,
            name: n.name,
            localName: e[n.no]
        })))
    }

    function T(e, n, t) {
        const r = Object.create(null),
            s = Object.create(null),
            i = [];
        for (const e of n) {
            const n = E(e);
            i.push(n), r[e.name] = n, s[e.no] = n
        }
        return {
            typeName: e,
            values: i,
            findName: e => r[e],
            findNumber: e => s[e]
        }
    }

    function p(e, n, t) {
        const r = {};
        for (const e of n) {
            const n = E(e);
            r[n.localName] = n.no, r[n.no] = n.localName
        }
        return f(r, e, n), r
    }

    function E(e) {
        return "localName" in e ? e : {
            ...e,
            localName: e.name
        }
    }
    class _ {
        equals(e) {
            return this.getType().runtime.util.equals(this.getType(), this, e)
        }
        clone() {
            return this.getType().runtime.util.clone(this)
        }
        fromBinary(e, n) {
            const t = this.getType().runtime.bin,
                r = t.makeReadOptions(n);
            return t.readMessage(this, r.readerFactory(e), e.byteLength, r), this
        }
        fromJson(e, n) {
            const t = this.getType(),
                r = t.runtime.json,
                s = r.makeReadOptions(n);
            return r.readMessage(t, e, s, this), this
        }
        fromJsonString(e, n) {
            let t;
            try {
                t = JSON.parse(e)
            } catch (e) {
                throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error?e.message:String(e)}`)
            }
            return this.fromJson(t, n)
        }
        toBinary(e) {
            const n = this.getType().runtime.bin,
                t = n.makeWriteOptions(e),
                r = t.writerFactory();
            return n.writeMessage(this, r, t), r.finish()
        }
        toJson(e) {
            const n = this.getType().runtime.json,
                t = n.makeWriteOptions(e);
            return n.writeMessage(this, t)
        }
        toJsonString(e) {
            const n = this.toJson(e);
            return JSON.stringify(n, null, e?.prettySpaces ?? 0)
        }
        toJSON() {
            return this.toJson({
                emitDefaultValues: !0
            })
        }
        getType() {
            return Object.getPrototypeOf(this).constructor
        }
    }

    function g() {
        let e = 0,
            n = 0;
        for (let t = 0; t < 28; t += 7) {
            let r = this.buf[this.pos++];
            if (e |= (127 & r) << t, !(128 & r)) return this.assertBounds(), [e, n]
        }
        let t = this.buf[this.pos++];
        if (e |= (15 & t) << 28, n = (112 & t) >> 4, !(128 & t)) return this.assertBounds(), [e, n];
        for (let t = 3; t <= 31; t += 7) {
            let r = this.buf[this.pos++];
            if (n |= (127 & r) << t, !(128 & r)) return this.assertBounds(), [e, n]
        }
        throw new Error("invalid varint")
    }

    function h(e, n, t) {
        for (let r = 0; r < 28; r += 7) {
            const s = e >>> r,
                i = !(s >>> 7 == 0 && 0 == n),
                a = 255 & (i ? 128 | s : s);
            if (t.push(a), !i) return
        }
        const r = e >>> 28 & 15 | (7 & n) << 4,
            s = !!(n >> 3);
        if (t.push(255 & (s ? 128 | r : r)), s) {
            for (let e = 3; e < 31; e += 7) {
                const r = n >>> e,
                    s = !(r >>> 7 == 0),
                    i = 255 & (s ? 128 | r : r);
                if (t.push(i), !s) return
            }
            t.push(n >>> 31 & 1)
        }
    }
    const N = 4294967296;

    function w(e) {
        const n = "-" === e[0];
        n && (e = e.slice(1));
        const t = 1e6;
        let r = 0,
            s = 0;

        function i(n, i) {
            const a = Number(e.slice(n, i));
            s *= t, r = r * t + a, r >= N && (s += r / N | 0, r %= N)
        }
        return i(-24, -18), i(-18, -12), i(-12, -6), i(-6), n ? I(r, s) : S(r, s)
    }

    function y(e, n) {
        if (({
                lo: e,
                hi: n
            } = function(e, n) {
                return {
                    lo: e >>> 0,
                    hi: n >>> 0
                }
            }(e, n)), n <= 2097151) return String(N * n + e);
        const t = 16777215 & (e >>> 24 | n << 8),
            r = n >> 16 & 65535;
        let s = (16777215 & e) + 6777216 * t + 6710656 * r,
            i = t + 8147497 * r,
            a = 2 * r;
        const o = 1e7;
        return s >= o && (i += Math.floor(s / o), s %= o), i >= o && (a += Math.floor(i / o), i %= o), a.toString() + k(i) + k(s)
    }

    function S(e, n) {
        return {
            lo: 0 | e,
            hi: 0 | n
        }
    }

    function I(e, n) {
        return n = ~n, e ? e = 1 + ~e : n += 1, S(e, n)
    }
    const k = e => {
        const n = String(e);
        return "0000000".slice(n.length) + n
    };

    function O(e, n) {
        if (e >= 0) {
            for (; e > 127;) n.push(127 & e | 128), e >>>= 7;
            n.push(e)
        } else {
            for (let t = 0; t < 9; t++) n.push(127 & e | 128), e >>= 7;
            n.push(1)
        }
    }

    function R() {
        let e = this.buf[this.pos++],
            n = 127 & e;
        if (!(128 & e)) return this.assertBounds(), n;
        if (e = this.buf[this.pos++], n |= (127 & e) << 7, !(128 & e)) return this.assertBounds(), n;
        if (e = this.buf[this.pos++], n |= (127 & e) << 14, !(128 & e)) return this.assertBounds(), n;
        if (e = this.buf[this.pos++], n |= (127 & e) << 21, !(128 & e)) return this.assertBounds(), n;
        e = this.buf[this.pos++], n |= (15 & e) << 28;
        for (let n = 5; 128 & e && n < 10; n++) e = this.buf[this.pos++];
        if (128 & e) throw new Error("invalid varint");
        return this.assertBounds(), n >>> 0
    }
    const J = function() {
        const e = new DataView(new ArrayBuffer(8));
        if ("function" == typeof BigInt && "function" == typeof e.getBigInt64 && "function" == typeof e.getBigUint64 && "function" == typeof e.setBigInt64 && "function" == typeof e.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
            const n = BigInt("-9223372036854775808"),
                t = BigInt("9223372036854775807"),
                r = BigInt("0"),
                s = BigInt("18446744073709551615");
            return {
                zero: BigInt(0),
                supported: !0,
                parse(e) {
                    const r = "bigint" == typeof e ? e : BigInt(e);
                    if (r > t || r < n) throw new Error(`int64 invalid: ${e}`);
                    return r
                },
                uParse(e) {
                    const n = "bigint" == typeof e ? e : BigInt(e);
                    if (n > s || n < r) throw new Error(`uint64 invalid: ${e}`);
                    return n
                },
                enc(n) {
                    return e.setBigInt64(0, this.parse(n), !0), {
                        lo: e.getInt32(0, !0),
                        hi: e.getInt32(4, !0)
                    }
                },
                uEnc(n) {
                    return e.setBigInt64(0, this.uParse(n), !0), {
                        lo: e.getInt32(0, !0),
                        hi: e.getInt32(4, !0)
                    }
                },
                dec: (n, t) => (e.setInt32(0, n, !0), e.setInt32(4, t, !0), e.getBigInt64(0, !0)),
                uDec: (n, t) => (e.setInt32(0, n, !0), e.setInt32(4, t, !0), e.getBigUint64(0, !0))
            }
        }
        const n = e => o(/^-?[0-9]+$/.test(e), `int64 invalid: ${e}`),
            t = e => o(/^[0-9]+$/.test(e), `uint64 invalid: ${e}`);
        return {
            zero: "0",
            supported: !1,
            parse: e => ("string" != typeof e && (e = e.toString()), n(e), e),
            uParse: e => ("string" != typeof e && (e = e.toString()), t(e), e),
            enc: e => ("string" != typeof e && (e = e.toString()), n(e), w(e)),
            uEnc: e => ("string" != typeof e && (e = e.toString()), t(e), w(e)),
            dec: (e, n) => function(e, n) {
                let t = S(e, n);
                const r = 2147483648 & t.hi;
                r && (t = I(t.lo, t.hi));
                const s = y(t.lo, t.hi);
                return r ? "-" + s : s
            }(e, n),
            uDec: (e, n) => y(e, n)
        }
    }();
    var v = (e => (e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64", e))(v || {}),
        D = (e => (e[e.BIGINT = 0] = "BIGINT", e[e.STRING = 1] = "STRING", e))(D || {});

    function b(e, n, t) {
        if (n === t) return !0;
        if (e == v.BYTES) {
            if (!(n instanceof Uint8Array && t instanceof Uint8Array)) return !1;
            if (n.length !== t.length) return !1;
            for (let e = 0; e < n.length; e++)
                if (n[e] !== t[e]) return !1;
            return !0
        }
        switch (e) {
            case v.UINT64:
            case v.FIXED64:
            case v.INT64:
            case v.SFIXED64:
            case v.SINT64:
                return n == t
        }
        return !1
    }

    function P(e, n) {
        switch (e) {
            case v.BOOL:
                return !1;
            case v.UINT64:
            case v.FIXED64:
            case v.INT64:
            case v.SFIXED64:
            case v.SINT64:
                return 0 == n ? J.zero : "0";
            case v.DOUBLE:
            case v.FLOAT:
                return 0;
            case v.BYTES:
                return new Uint8Array(0);
            case v.STRING:
                return "";
            default:
                return 0
        }
    }

    function F(e, n) {
        switch (e) {
            case v.BOOL:
                return !1 === n;
            case v.STRING:
                return "" === n;
            case v.BYTES:
                return n instanceof Uint8Array && !n.byteLength;
            default:
                return 0 == n
        }
    }

    function L(e) {
        const n = e.field.localName,
            t = Object.create(null);
        return t[n] = function(e) {
            const n = e.field;
            if (n.repeated) return [];
            if (void 0 !== n.default) return n.default;
            switch (n.kind) {
                case "enum":
                    return n.T.values[0].no;
                case "scalar":
                    return P(n.T, n.L);
                case "message":
                    const e = n.T,
                        t = new e;
                    return e.fieldWrapper ? e.fieldWrapper.unwrapField(t) : t;
                case "map":
                    throw "map fields are not allowed to be extensions"
            }
        }(e), [t, () => t[n]]
    }
    let B = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
        A = [];
    for (let e = 0; e < B.length; e++) A[B[e].charCodeAt(0)] = e;
    A["-".charCodeAt(0)] = B.indexOf("+"), A["_".charCodeAt(0)] = B.indexOf("/");
    const U = {
        dec(e) {
            let n = 3 * e.length / 4;
            "=" == e[e.length - 2] ? n -= 2 : "=" == e[e.length - 1] && (n -= 1);
            let t, r = new Uint8Array(n),
                s = 0,
                i = 0,
                a = 0;
            for (let n = 0; n < e.length; n++) {
                if (t = A[e.charCodeAt(n)], void 0 === t) switch (e[n]) {
                    case "=":
                        i = 0;
                    case "\n":
                    case "\r":
                    case "\t":
                    case " ":
                        continue;
                    default:
                        throw Error("invalid base64 string.")
                }
                switch (i) {
                    case 0:
                        a = t, i = 1;
                        break;
                    case 1:
                        r[s++] = a << 2 | (48 & t) >> 4, a = t, i = 2;
                        break;
                    case 2:
                        r[s++] = (15 & a) << 4 | (60 & t) >> 2, a = t, i = 3;
                        break;
                    case 3:
                        r[s++] = (3 & a) << 6 | t, i = 0
                }
            }
            if (1 == i) throw Error("invalid base64 string.");
            return r.subarray(0, s)
        },
        enc(e) {
            let n, t = "",
                r = 0,
                s = 0;
            for (let i = 0; i < e.length; i++) switch (n = e[i], r) {
                case 0:
                    t += B[n >> 2], s = (3 & n) << 4, r = 1;
                    break;
                case 1:
                    t += B[s | n >> 4], s = (15 & n) << 2, r = 2;
                    break;
                case 2:
                    t += B[s | n >> 6], t += B[63 & n], r = 0
            }
            return r && (t += B[s], t += "=", 1 == r && (t += "=")), t
        }
    };

    function C(e, n, t) {
        x(n, e);
        const r = n.runtime.bin.makeReadOptions(t),
            s = function(e, n) {
                if (!n.repeated && ("enum" == n.kind || "scalar" == n.kind)) {
                    for (let t = e.length - 1; t >= 0; --t)
                        if (e[t].no == n.no) return [e[t]];
                    return []
                }
                return e.filter(e => e.no === n.no)
            }(e.getType().runtime.bin.listUnknownFields(e), n.field),
            [i, a] = L(n);
        for (const e of s) n.runtime.bin.readField(i, r.readerFactory(e.data), n.field, e.wireType, r);
        return a()
    }

    function M(e, n, t, r) {
        x(n, e);
        const s = n.runtime.bin.makeReadOptions(r),
            i = n.runtime.bin.makeWriteOptions(r);
        if (q(e, n)) {
            const t = e.getType().runtime.bin.listUnknownFields(e).filter(e => e.no != n.field.no);
            e.getType().runtime.bin.discardUnknownFields(e);
            for (const n of t) e.getType().runtime.bin.onUnknownField(e, n.no, n.wireType, n.data)
        }
        const a = i.writerFactory();
        let o = n.field;
        o.opt || o.repeated || "enum" != o.kind && "scalar" != o.kind || (o = {
            ...n.field,
            opt: !0
        }), n.runtime.bin.writeField(o, t, a, i);
        const u = s.readerFactory(a.finish());
        for (; u.pos < u.len;) {
            const [n, t] = u.tag(), r = u.skip(t, n);
            e.getType().runtime.bin.onUnknownField(e, n, t, r)
        }
    }

    function q(e, n) {
        const t = e.getType();
        return n.extendee.typeName === t.typeName && !!t.runtime.bin.listUnknownFields(e).find(e => e.no == n.field.no)
    }

    function x(e, n) {
        o(e.extendee.typeName == n.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`)
    }

    function G(e, n) {
        const t = e.localName;
        if (e.repeated) return n[t].length > 0;
        if (e.oneof) return n[e.oneof.localName].case === t;
        switch (e.kind) {
            case "enum":
            case "scalar":
                return e.opt || e.req ? void 0 !== n[t] : "enum" == e.kind ? n[t] !== e.T.values[0].no : !F(e.T, n[t]);
            case "message":
                return void 0 !== n[t];
            case "map":
                return Object.keys(n[t]).length > 0
        }
    }

    function Y(e, n) {
        const t = e.localName,
            r = !e.opt && !e.req;
        if (e.repeated) n[t] = [];
        else if (e.oneof) n[e.oneof.localName] = {
            case: void 0
        };
        else switch (e.kind) {
            case "map":
                n[t] = {};
                break;
            case "enum":
                n[t] = r ? e.T.values[0].no : void 0;
                break;
            case "scalar":
                n[t] = r ? P(e.T, e.L) : void 0;
                break;
            case "message":
                n[t] = void 0
        }
    }

    function V(e, n) {
        if (null === e || "object" != typeof e) return !1;
        if (!Object.getOwnPropertyNames(_.prototype).every(n => n in e && "function" == typeof e[n])) return !1;
        const t = e.getType();
        return null !== t && "function" == typeof t && "typeName" in t && "string" == typeof t.typeName && (void 0 === n || t.typeName == n.typeName)
    }

    function K(e, n) {
        const t = V(n);
        return t || e.fieldWrapper ? t || !e.fieldWrapper ? n : e.fieldWrapper.wrapField(n) : new e(n)
    }
    v.DOUBLE, v.FLOAT, v.INT64, v.UINT64, v.INT32, v.UINT32, v.BOOL, v.STRING, v.BYTES;
    const W = {
            ignoreUnknownFields: !1
        },
        j = {
            emitDefaultValues: !1,
            enumAsInteger: !1,
            useProtoFieldName: !1,
            prettySpaces: 0
        };

    function X(e) {
        return e ? {
            ...W,
            ...e
        } : W
    }

    function $(e) {
        return e ? {
            ...j,
            ...e
        } : j
    }
    const H = Symbol(),
        Q = Symbol();

    function Z(e) {
        if (null === e) return "null";
        switch (typeof e) {
            case "object":
                return Array.isArray(e) ? "array" : "object";
            case "string":
                return e.length > 100 ? "string" : `"${e.split('"').join('\\"')}"`;
            default:
                return String(e)
        }
    }

    function z(e, n, t, r, s) {
        let i = t.localName;
        if (t.repeated) {
            if (o("map" != t.kind), null === n) return;
            if (!Array.isArray(n)) throw new Error(`cannot decode field ${s.typeName}.${t.name} from JSON: ${Z(n)}`);
            const a = e[i];
            for (const e of n) {
                if (null === e) throw new Error(`cannot decode field ${s.typeName}.${t.name} from JSON: ${Z(e)}`);
                switch (t.kind) {
                    case "message":
                        a.push(t.T.fromJson(e, r));
                        break;
                    case "enum":
                        const n = te(t.T, e, r.ignoreUnknownFields, !0);
                        n !== Q && a.push(n);
                        break;
                    case "scalar":
                        try {
                            a.push(ne(t.T, e, t.L, !0))
                        } catch (n) {
                            let r = `cannot decode field ${s.typeName}.${t.name} from JSON: ${Z(e)}`;
                            throw n instanceof Error && n.message.length > 0 && (r += `: ${n.message}`), new Error(r)
                        }
                }
            }
        } else if ("map" == t.kind) {
            if (null === n) return;
            if ("object" != typeof n || Array.isArray(n)) throw new Error(`cannot decode field ${s.typeName}.${t.name} from JSON: ${Z(n)}`);
            const a = e[i];
            for (const [e, i] of Object.entries(n)) {
                if (null === i) throw new Error(`cannot decode field ${s.typeName}.${t.name} from JSON: map value null`);
                let o;
                try {
                    o = ee(t.K, e)
                } catch (e) {
                    let r = `cannot decode map key for field ${s.typeName}.${t.name} from JSON: ${Z(n)}`;
                    throw e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`), new Error(r)
                }
                switch (t.V.kind) {
                    case "message":
                        a[o] = t.V.T.fromJson(i, r);
                        break;
                    case "enum":
                        const e = te(t.V.T, i, r.ignoreUnknownFields, !0);
                        e !== Q && (a[o] = e);
                        break;
                    case "scalar":
                        try {
                            a[o] = ne(t.V.T, i, D.BIGINT, !0)
                        } catch (e) {
                            let r = `cannot decode map value for field ${s.typeName}.${t.name} from JSON: ${Z(n)}`;
                            throw e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`), new Error(r)
                        }
                }
            }
        } else switch (t.oneof && (e = e[t.oneof.localName] = {
                case: i
            }, i = "value"), t.kind) {
            case "message":
                const a = t.T;
                if (null === n && "google.protobuf.Value" != a.typeName) return;
                let o = e[i];
                V(o) ? o.fromJson(n, r) : (e[i] = o = a.fromJson(n, r), a.fieldWrapper && !t.oneof && (e[i] = a.fieldWrapper.unwrapField(o)));
                break;
            case "enum":
                const u = te(t.T, n, r.ignoreUnknownFields, !1);
                switch (u) {
                    case H:
                        Y(t, e);
                        break;
                    case Q:
                        break;
                    default:
                        e[i] = u
                }
                break;
            case "scalar":
                try {
                    const r = ne(t.T, n, t.L, !1);
                    r === H ? Y(t, e) : e[i] = r
                } catch (e) {
                    let r = `cannot decode field ${s.typeName}.${t.name} from JSON: ${Z(n)}`;
                    throw e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`), new Error(r)
                }
        }
    }

    function ee(e, n) {
        if (e === v.BOOL) switch (n) {
            case "true":
                n = !0;
                break;
            case "false":
                n = !1
        }
        return ne(e, n, D.BIGINT, !0).toString()
    }

    function ne(e, n, t, r) {
        if (null === n) return r ? P(e, t) : H;
        switch (e) {
            case v.DOUBLE:
            case v.FLOAT:
                if ("NaN" === n) return Number.NaN;
                if ("Infinity" === n) return Number.POSITIVE_INFINITY;
                if ("-Infinity" === n) return Number.NEGATIVE_INFINITY;
                if ("" === n) break;
                if ("string" == typeof n && n.trim().length !== n.length) break;
                if ("string" != typeof n && "number" != typeof n) break;
                const r = Number(n);
                if (Number.isNaN(r)) break;
                if (!Number.isFinite(r)) break;
                return e == v.FLOAT && m(r), r;
            case v.INT32:
            case v.FIXED32:
            case v.SFIXED32:
            case v.SINT32:
            case v.UINT32:
                let s;
                if ("number" == typeof n ? s = n : "string" == typeof n && n.length > 0 && n.trim().length === n.length && (s = Number(n)), void 0 === s) break;
                return e == v.UINT32 || e == v.FIXED32 ? l(s) : u(s), s;
            case v.INT64:
            case v.SFIXED64:
            case v.SINT64:
                if ("number" != typeof n && "string" != typeof n) break;
                const i = J.parse(n);
                return t ? i.toString() : i;
            case v.FIXED64:
            case v.UINT64:
                if ("number" != typeof n && "string" != typeof n) break;
                const a = J.uParse(n);
                return t ? a.toString() : a;
            case v.BOOL:
                if ("boolean" != typeof n) break;
                return n;
            case v.STRING:
                if ("string" != typeof n) break;
                try {
                    encodeURIComponent(n)
                } catch (e) {
                    throw new Error("invalid UTF8")
                }
                return n;
            case v.BYTES:
                if ("" === n) return new Uint8Array(0);
                if ("string" != typeof n) break;
                return U.dec(n)
        }
        throw new Error
    }

    function te(e, n, t, r) {
        if (null === n) return "google.protobuf.NullValue" == e.typeName ? 0 : r ? e.values[0].no : H;
        switch (typeof n) {
            case "number":
                if (Number.isInteger(n)) return n;
                break;
            case "string":
                const r = e.findName(n);
                if (void 0 !== r) return r.no;
                if (t) return Q
        }
        throw new Error(`cannot decode enum ${e.typeName} from JSON: ${Z(n)}`)
    }

    function re(e) {
        return !(!e.repeated && "map" != e.kind && (e.oneof || "message" == e.kind || e.opt || e.req))
    }

    function se(e, n, t) {
        if ("map" == e.kind) {
            o("object" == typeof n && null != n);
            const r = {},
                s = Object.entries(n);
            switch (e.V.kind) {
                case "scalar":
                    for (const [n, t] of s) r[n.toString()] = ae(e.V.T, t);
                    break;
                case "message":
                    for (const [e, n] of s) r[e.toString()] = n.toJson(t);
                    break;
                case "enum":
                    const n = e.V.T;
                    for (const [e, i] of s) r[e.toString()] = ie(n, i, t.enumAsInteger)
            }
            return t.emitDefaultValues || s.length > 0 ? r : void 0
        }
        if (e.repeated) {
            o(Array.isArray(n));
            const r = [];
            switch (e.kind) {
                case "scalar":
                    for (let t = 0; t < n.length; t++) r.push(ae(e.T, n[t]));
                    break;
                case "enum":
                    for (let s = 0; s < n.length; s++) r.push(ie(e.T, n[s], t.enumAsInteger));
                    break;
                case "message":
                    for (let e = 0; e < n.length; e++) r.push(n[e].toJson(t))
            }
            return t.emitDefaultValues || r.length > 0 ? r : void 0
        }
        switch (e.kind) {
            case "scalar":
                return ae(e.T, n);
            case "enum":
                return ie(e.T, n, t.enumAsInteger);
            case "message":
                return K(e.T, n).toJson(t)
        }
    }

    function ie(e, n, t) {
        if (o("number" == typeof n), "google.protobuf.NullValue" == e.typeName) return null;
        if (t) return n;
        const r = e.findNumber(n);
        return r?.name ?? n
    }

    function ae(e, n) {
        switch (e) {
            case v.INT32:
            case v.SFIXED32:
            case v.SINT32:
            case v.FIXED32:
            case v.UINT32:
                return o("number" == typeof n), n;
            case v.FLOAT:
            case v.DOUBLE:
                return o("number" == typeof n), Number.isNaN(n) ? "NaN" : n === Number.POSITIVE_INFINITY ? "Infinity" : n === Number.NEGATIVE_INFINITY ? "-Infinity" : n;
            case v.STRING:
                return o("string" == typeof n), n;
            case v.BOOL:
                return o("boolean" == typeof n), n;
            case v.UINT64:
            case v.FIXED64:
            case v.INT64:
            case v.SFIXED64:
            case v.SINT64:
                return o("bigint" == typeof n || "string" == typeof n || "number" == typeof n), n.toString();
            case v.BYTES:
                return o(n instanceof Uint8Array), U.enc(n)
        }
    }
    var oe = (e => (e[e.Varint = 0] = "Varint", e[e.Bit64 = 1] = "Bit64", e[e.LengthDelimited = 2] = "LengthDelimited", e[e.StartGroup = 3] = "StartGroup", e[e.EndGroup = 4] = "EndGroup", e[e.Bit32 = 5] = "Bit32", e))(oe || {});
    class ue {
        constructor(e) {
            this.stack = [], this.textEncoder = e ?? new TextEncoder, this.chunks = [], this.buf = []
        }
        finish() {
            this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
            let e = 0;
            for (let n = 0; n < this.chunks.length; n++) e += this.chunks[n].length;
            let n = new Uint8Array(e),
                t = 0;
            for (let e = 0; e < this.chunks.length; e++) n.set(this.chunks[e], t), t += this.chunks[e].length;
            return this.chunks = [], n
        }
        fork() {
            return this.stack.push({
                chunks: this.chunks,
                buf: this.buf
            }), this.chunks = [], this.buf = [], this
        }
        join() {
            let e = this.finish(),
                n = this.stack.pop();
            if (!n) throw new Error("invalid state, fork stack empty");
            return this.chunks = n.chunks, this.buf = n.buf, this.uint32(e.byteLength), this.raw(e)
        }
        tag(e, n) {
            return this.uint32((e << 3 | n) >>> 0)
        }
        raw(e) {
            return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this
        }
        uint32(e) {
            for (l(e); e > 127;) this.buf.push(127 & e | 128), e >>>= 7;
            return this.buf.push(e), this
        }
        int32(e) {
            return u(e), O(e, this.buf), this
        }
        bool(e) {
            return this.buf.push(e ? 1 : 0), this
        }
        bytes(e) {
            return this.uint32(e.byteLength), this.raw(e)
        }
        string(e) {
            let n = this.textEncoder.encode(e);
            return this.uint32(n.byteLength), this.raw(n)
        }
        float(e) {
            m(e);
            let n = new Uint8Array(4);
            return new DataView(n.buffer).setFloat32(0, e, !0), this.raw(n)
        }
        double(e) {
            let n = new Uint8Array(8);
            return new DataView(n.buffer).setFloat64(0, e, !0), this.raw(n)
        }
        fixed32(e) {
            l(e);
            let n = new Uint8Array(4);
            return new DataView(n.buffer).setUint32(0, e, !0), this.raw(n)
        }
        sfixed32(e) {
            u(e);
            let n = new Uint8Array(4);
            return new DataView(n.buffer).setInt32(0, e, !0), this.raw(n)
        }
        sint32(e) {
            return u(e), O(e = (e << 1 ^ e >> 31) >>> 0, this.buf), this
        }
        sfixed64(e) {
            let n = new Uint8Array(8),
                t = new DataView(n.buffer),
                r = J.enc(e);
            return t.setInt32(0, r.lo, !0), t.setInt32(4, r.hi, !0), this.raw(n)
        }
        fixed64(e) {
            let n = new Uint8Array(8),
                t = new DataView(n.buffer),
                r = J.uEnc(e);
            return t.setInt32(0, r.lo, !0), t.setInt32(4, r.hi, !0), this.raw(n)
        }
        int64(e) {
            let n = J.enc(e);
            return h(n.lo, n.hi, this.buf), this
        }
        sint64(e) {
            let n = J.enc(e),
                t = n.hi >> 31;
            return h(n.lo << 1 ^ t, (n.hi << 1 | n.lo >>> 31) ^ t, this.buf), this
        }
        uint64(e) {
            let n = J.uEnc(e);
            return h(n.lo, n.hi, this.buf), this
        }
    }
    class le {
        constructor(e, n) {
            this.varint64 = g, this.uint32 = R, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = n ?? new TextDecoder
        }
        tag() {
            let e = this.uint32(),
                n = e >>> 3,
                t = 7 & e;
            if (n <= 0 || t < 0 || t > 5) throw new Error("illegal tag: field no " + n + " wire type " + t);
            return [n, t]
        }
        skip(e, n) {
            let t = this.pos;
            switch (e) {
                case 0:
                    for (; 128 & this.buf[this.pos++];);
                    break;
                case 1:
                    this.pos += 4;
                case 5:
                    this.pos += 4;
                    break;
                case 2:
                    let t = this.uint32();
                    this.pos += t;
                    break;
                case 3:
                    for (;;) {
                        const [e, t] = this.tag();
                        if (4 === t) {
                            if (void 0 !== n && e !== n) throw new Error("invalid end group tag");
                            break
                        }
                        this.skip(t, e)
                    }
                    break;
                default:
                    throw new Error("cant skip wire type " + e)
            }
            return this.assertBounds(), this.buf.subarray(t, this.pos)
        }
        assertBounds() {
            if (this.pos > this.len) throw new RangeError("premature EOF")
        }
        int32() {
            return 0 | this.uint32()
        }
        sint32() {
            let e = this.uint32();
            return e >>> 1 ^ -(1 & e)
        }
        int64() {
            return J.dec(...this.varint64())
        }
        uint64() {
            return J.uDec(...this.varint64())
        }
        sint64() {
            let [e, n] = this.varint64(), t = -(1 & e);
            return e = (e >>> 1 | (1 & n) << 31) ^ t, n = n >>> 1 ^ t, J.dec(e, n)
        }
        bool() {
            let [e, n] = this.varint64();
            return 0 !== e || 0 !== n
        }
        fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, !0)
        }
        sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, !0)
        }
        fixed64() {
            return J.uDec(this.sfixed32(), this.sfixed32())
        }
        sfixed64() {
            return J.dec(this.sfixed32(), this.sfixed32())
        }
        float() {
            return this.view.getFloat32((this.pos += 4) - 4, !0)
        }
        double() {
            return this.view.getFloat64((this.pos += 8) - 8, !0)
        }
        bytes() {
            let e = this.uint32(),
                n = this.pos;
            return this.pos += e, this.assertBounds(), this.buf.subarray(n, n + e)
        }
        string() {
            return this.textDecoder.decode(this.bytes())
        }
    }
    const me = Symbol("@bufbuild/protobuf/unknown-fields"),
        ce = {
            readUnknownFields: !0,
            readerFactory: e => new le(e)
        },
        de = {
            writeUnknownFields: !0,
            writerFactory: () => new ue
        };

    function fe(e) {
        return e ? {
            ...ce,
            ...e
        } : ce
    }

    function Te(e) {
        return e ? {
            ...de,
            ...e
        } : de
    }

    function pe(e, n, t, r, s) {
        let {
            repeated: i,
            localName: a
        } = t;
        switch (t.oneof && ((e = e[t.oneof.localName]).case != a && delete e.value, e.case = a, a = "value"), t.kind) {
            case "scalar":
            case "enum":
                const o = "enum" == t.kind ? v.INT32 : t.T;
                let u = ge;
                if ("scalar" == t.kind && t.L > 0 && (u = _e), i) {
                    let t = e[a];
                    if (r == oe.LengthDelimited && o != v.STRING && o != v.BYTES) {
                        let e = n.uint32() + n.pos;
                        for (; n.pos < e;) t.push(u(n, o))
                    } else t.push(u(n, o))
                } else e[a] = u(n, o);
                break;
            case "message":
                const l = t.T;
                i ? e[a].push(Ee(n, new l, s, t)) : V(e[a]) ? Ee(n, e[a], s, t) : (e[a] = Ee(n, new l, s, t), !l.fieldWrapper || t.oneof || t.repeated || (e[a] = l.fieldWrapper.unwrapField(e[a])));
                break;
            case "map":
                let [m, c] = function(e, n, t) {
                    const r = n.uint32(),
                        s = n.pos + r;
                    let i, a;
                    for (; n.pos < s;) {
                        const [r] = n.tag();
                        switch (r) {
                            case 1:
                                i = ge(n, e.K);
                                break;
                            case 2:
                                switch (e.V.kind) {
                                    case "scalar":
                                        a = ge(n, e.V.T);
                                        break;
                                    case "enum":
                                        a = n.int32();
                                        break;
                                    case "message":
                                        a = Ee(n, new e.V.T, t, void 0)
                                }
                        }
                    }
                    if (void 0 === i && (i = P(e.K, D.BIGINT)), "string" != typeof i && "number" != typeof i && (i = i.toString()), void 0 === a) switch (e.V.kind) {
                        case "scalar":
                            a = P(e.V.T, D.BIGINT);
                            break;
                        case "enum":
                            a = e.V.T.values[0].no;
                            break;
                        case "message":
                            a = new e.V.T
                    }
                    return [i, a]
                }(t, n, s);
                e[a][m] = c
        }
    }

    function Ee(e, n, t, r) {
        const s = n.getType().runtime.bin,
            i = r?.delimited;
        return s.readMessage(n, e, i ? r.no : e.uint32(), t, i), n
    }

    function _e(e, n) {
        const t = ge(e, n);
        return "bigint" == typeof t ? t.toString() : t
    }

    function ge(e, n) {
        switch (n) {
            case v.STRING:
                return e.string();
            case v.BOOL:
                return e.bool();
            case v.DOUBLE:
                return e.double();
            case v.FLOAT:
                return e.float();
            case v.INT32:
                return e.int32();
            case v.INT64:
                return e.int64();
            case v.UINT64:
                return e.uint64();
            case v.FIXED64:
                return e.fixed64();
            case v.BYTES:
                return e.bytes();
            case v.FIXED32:
                return e.fixed32();
            case v.SFIXED32:
                return e.sfixed32();
            case v.SFIXED64:
                return e.sfixed64();
            case v.SINT64:
                return e.sint64();
            case v.UINT32:
                return e.uint32();
            case v.SINT32:
                return e.sint32()
        }
    }

    function he(e, n, t, r) {
        o(void 0 !== n);
        const s = e.repeated;
        switch (e.kind) {
            case "scalar":
            case "enum":
                let i = "enum" == e.kind ? v.INT32 : e.T;
                if (s)
                    if (o(Array.isArray(n)), e.packed) ! function(e, n, t, r) {
                        if (!r.length) return;
                        e.tag(t, oe.LengthDelimited).fork();
                        let [, s] = Se(n);
                        for (let n = 0; n < r.length; n++) e[s](r[n]);
                        e.join()
                    }(t, i, e.no, n);
                    else
                        for (const r of n) ye(t, i, e.no, r);
                else ye(t, i, e.no, n);
                break;
            case "message":
                if (s) {
                    o(Array.isArray(n));
                    for (const s of n) we(t, r, e, s)
                } else we(t, r, e, n);
                break;
            case "map":
                o("object" == typeof n && null != n);
                for (const [s, i] of Object.entries(n)) Ne(t, r, e, s, i)
        }
    }

    function Ne(e, n, t, r, s) {
        e.tag(t.no, oe.LengthDelimited), e.fork();
        let i = r;
        switch (t.K) {
            case v.INT32:
            case v.FIXED32:
            case v.UINT32:
            case v.SFIXED32:
            case v.SINT32:
                i = Number.parseInt(r);
                break;
            case v.BOOL:
                o("true" == r || "false" == r), i = "true" == r
        }
        switch (ye(e, t.K, 1, i), t.V.kind) {
            case "scalar":
                ye(e, t.V.T, 2, s);
                break;
            case "enum":
                ye(e, v.INT32, 2, s);
                break;
            case "message":
                o(void 0 !== s), e.tag(2, oe.LengthDelimited).bytes(s.toBinary(n))
        }
        e.join()
    }

    function we(e, n, t, r) {
        const s = K(t.T, r);
        t.delimited ? e.tag(t.no, oe.StartGroup).raw(s.toBinary(n)).tag(t.no, oe.EndGroup) : e.tag(t.no, oe.LengthDelimited).bytes(s.toBinary(n))
    }

    function ye(e, n, t, r) {
        o(void 0 !== r);
        let [s, i] = Se(n);
        e.tag(t, s)[i](r)
    }

    function Se(e) {
        let n = oe.Varint;
        switch (e) {
            case v.BYTES:
            case v.STRING:
                n = oe.LengthDelimited;
                break;
            case v.DOUBLE:
            case v.FIXED64:
            case v.SFIXED64:
                n = oe.Bit64;
                break;
            case v.FIXED32:
            case v.SFIXED32:
            case v.FLOAT:
                n = oe.Bit32
        }
        return [n, v[e].toLowerCase()]
    }

    function Ie(e) {
        if (void 0 === e) return e;
        if (V(e)) return e.clone();
        if (e instanceof Uint8Array) {
            const n = new Uint8Array(e.byteLength);
            return n.set(e), n
        }
        return e
    }

    function ke(e) {
        return e instanceof Uint8Array ? e : new Uint8Array(e)
    }

    function Oe(e, n, t) {
        return {
            syntax: e,
            json: {
                makeReadOptions: X,
                makeWriteOptions: $,
                readMessage(e, n, t, r) {
                    if (null == n || Array.isArray(n) || "object" != typeof n) throw new Error(`cannot decode message ${e.typeName} from JSON: ${Z(n)}`);
                    r = r ?? new e;
                    const s = new Map,
                        i = t.typeRegistry;
                    for (const [a, o] of Object.entries(n)) {
                        const n = e.fields.findJsonName(a);
                        if (n) {
                            if (n.oneof) {
                                if (null === o && "scalar" == n.kind) continue;
                                const t = s.get(n.oneof);
                                if (void 0 !== t) throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${n.oneof.name}" present: "${t}", "${a}"`);
                                s.set(n.oneof, a)
                            }
                            z(r, o, n, t, e)
                        } else {
                            let n = !1;
                            if (i?.findExtension && a.startsWith("[") && a.endsWith("]")) {
                                const s = i.findExtension(a.substring(1, a.length - 1));
                                if (s && s.extendee.typeName == e.typeName) {
                                    n = !0;
                                    const [e, i] = L(s);
                                    z(e, o, s.field, t, s), M(r, s, i(), t)
                                }
                            }
                            if (!n && !t.ignoreUnknownFields) throw new Error(`cannot decode message ${e.typeName} from JSON: key "${a}" is unknown`)
                        }
                    }
                    return r
                },
                writeMessage(e, n) {
                    const t = e.getType(),
                        r = {};
                    let s;
                    try {
                        for (s of t.fields.byNumber()) {
                            if (!G(s, e)) {
                                if (s.req) throw "required field not set";
                                if (!n.emitDefaultValues) continue;
                                if (!re(s)) continue
                            }
                            const t = se(s, s.oneof ? e[s.oneof.localName].value : e[s.localName], n);
                            void 0 !== t && (r[n.useProtoFieldName ? s.name : s.jsonName] = t)
                        }
                        const i = n.typeRegistry;
                        if (i?.findExtensionFor)
                            for (const s of t.runtime.bin.listUnknownFields(e)) {
                                const a = i.findExtensionFor(t.typeName, s.no);
                                if (a && q(e, a)) {
                                    const t = C(e, a, n),
                                        s = se(a.field, t, n);
                                    void 0 !== s && (r[a.field.jsonName] = s)
                                }
                            }
                    } catch (e) {
                        const n = s ? `cannot encode field ${t.typeName}.${s.name} to JSON` : `cannot encode message ${t.typeName} to JSON`,
                            r = e instanceof Error ? e.message : String(e);
                        throw new Error(n + (r.length > 0 ? `: ${r}` : ""))
                    }
                    return r
                },
                readScalar: (e, n, t) => ne(e, n, t ?? D.BIGINT, !0),
                writeScalar(e, n, t) {
                    if (void 0 !== n) return t || F(e, n) ? ae(e, n) : void 0
                },
                debug: Z
            },
            bin: {
                makeReadOptions: fe,
                makeWriteOptions: Te,
                listUnknownFields: e => e[me] ?? [],
                discardUnknownFields(e) {
                    delete e[me]
                },
                writeUnknownFields(e, n) {
                    const t = e[me];
                    if (t)
                        for (const e of t) n.tag(e.no, e.wireType).raw(e.data)
                },
                onUnknownField(e, n, t, r) {
                    const s = e;
                    Array.isArray(s[me]) || (s[me] = []), s[me].push({
                        no: n,
                        wireType: t,
                        data: r
                    })
                },
                readMessage(e, n, t, r, s) {
                    const i = e.getType(),
                        a = s ? n.len : n.pos + t;
                    let o, u;
                    for (; n.pos < a && ([o, u] = n.tag(), !0 !== s || u != oe.EndGroup);) {
                        const t = i.fields.find(o);
                        if (!t) {
                            const t = n.skip(u, o);
                            r.readUnknownFields && this.onUnknownField(e, o, u, t);
                            continue
                        }
                        pe(e, n, t, u, r)
                    }
                    if (s && (u != oe.EndGroup || o !== t)) throw new Error("invalid end group tag")
                },
                readField: pe,
                writeMessage(e, n, t) {
                    const r = e.getType();
                    for (const s of r.fields.byNumber())
                        if (G(s, e)) he(s, s.oneof ? e[s.oneof.localName].value : e[s.localName], n, t);
                        else if (s.req) throw new Error(`cannot encode field ${r.typeName}.${s.name} to binary: required field not set`);
                    return t.writeUnknownFields && this.writeUnknownFields(e, n), n
                },
                writeField(e, n, t, r) {
                    void 0 !== n && he(e, n, t, r)
                }
            },
            util: {
                ...{
                    setEnumType: f,
                    initPartial(e, n) {
                        if (void 0 === e) return;
                        const t = n.getType();
                        for (const r of t.fields.byMember()) {
                            const t = r.localName,
                                s = n,
                                i = e;
                            if (null != i[t]) switch (r.kind) {
                                case "oneof":
                                    const e = i[t].case;
                                    if (void 0 === e) continue;
                                    const n = r.findField(e);
                                    let a = i[t].value;
                                    n && "message" == n.kind && !V(a, n.T) ? a = new n.T(a) : n && "scalar" === n.kind && n.T === v.BYTES && (a = ke(a)), s[t] = {
                                        case: e,
                                        value: a
                                    };
                                    break;
                                case "scalar":
                                case "enum":
                                    let o = i[t];
                                    r.T === v.BYTES && (o = r.repeated ? o.map(ke) : ke(o)), s[t] = o;
                                    break;
                                case "map":
                                    switch (r.V.kind) {
                                        case "scalar":
                                        case "enum":
                                            if (r.V.T === v.BYTES)
                                                for (const [e, n] of Object.entries(i[t])) s[t][e] = ke(n);
                                            else Object.assign(s[t], i[t]);
                                            break;
                                        case "message":
                                            const e = r.V.T;
                                            for (const n of Object.keys(i[t])) {
                                                let r = i[t][n];
                                                e.fieldWrapper || (r = new e(r)), s[t][n] = r
                                            }
                                    }
                                    break;
                                case "message":
                                    const u = r.T;
                                    if (r.repeated) s[t] = i[t].map(e => V(e, u) ? e : new u(e));
                                    else {
                                        const e = i[t];
                                        u.fieldWrapper ? "google.protobuf.BytesValue" === u.typeName ? s[t] = ke(e) : s[t] = e : s[t] = V(e, u) ? e : new u(e)
                                    }
                            }
                        }
                    },
                    equals: (e, n, t) => n === t || !(!n || !t) && e.fields.byMember().every(e => {
                        const r = n[e.localName],
                            s = t[e.localName];
                        if (e.repeated) {
                            if (r.length !== s.length) return !1;
                            switch (e.kind) {
                                case "message":
                                    return r.every((n, t) => e.T.equals(n, s[t]));
                                case "scalar":
                                    return r.every((n, t) => b(e.T, n, s[t]));
                                case "enum":
                                    return r.every((e, n) => b(v.INT32, e, s[n]))
                            }
                            throw new Error(`repeated cannot contain ${e.kind}`)
                        }
                        switch (e.kind) {
                            case "message":
                                return e.T.equals(r, s);
                            case "enum":
                                return b(v.INT32, r, s);
                            case "scalar":
                                return b(e.T, r, s);
                            case "oneof":
                                if (r.case !== s.case) return !1;
                                const n = e.findField(r.case);
                                if (void 0 === n) return !0;
                                switch (n.kind) {
                                    case "message":
                                        return n.T.equals(r.value, s.value);
                                    case "enum":
                                        return b(v.INT32, r.value, s.value);
                                    case "scalar":
                                        return b(n.T, r.value, s.value)
                                }
                                throw new Error(`oneof cannot contain ${n.kind}`);
                            case "map":
                                const t = Object.keys(r).concat(Object.keys(s));
                                switch (e.V.kind) {
                                    case "message":
                                        const n = e.V.T;
                                        return t.every(e => n.equals(r[e], s[e]));
                                    case "enum":
                                        return t.every(e => b(v.INT32, r[e], s[e]));
                                    case "scalar":
                                        const i = e.V.T;
                                        return t.every(e => b(i, r[e], s[e]))
                                }
                        }
                    }),
                    clone(e) {
                        const n = e.getType(),
                            t = new n,
                            r = t;
                        for (const t of n.fields.byMember()) {
                            const n = e[t.localName];
                            let s;
                            if (t.repeated) s = n.map(Ie);
                            else if ("map" == t.kind) {
                                s = r[t.localName];
                                for (const [e, t] of Object.entries(n)) s[e] = Ie(t)
                            } else s = "oneof" == t.kind ? t.findField(n.case) ? {
                                case: n.case,
                                value: Ie(n.value)
                            } : {
                                case: void 0
                            } : Ie(n);
                            r[t.localName] = s
                        }
                        for (const t of n.runtime.bin.listUnknownFields(e)) n.runtime.bin.onUnknownField(r, t.no, t.wireType, t.data);
                        return t
                    }
                },
                newFieldList: n,
                initFields: t
            },
            makeMessageType(e, n, t) {
                return function(e, n, t, r) {
                    const s = r?.localName ?? n.substring(n.lastIndexOf(".") + 1),
                        i = {
                            [s]: function(n) {
                                e.util.initFields(this), e.util.initPartial(n, this)
                            }
                        } [s];
                    return Object.setPrototypeOf(i.prototype, new _), Object.assign(i, {
                        runtime: e,
                        typeName: n,
                        fields: e.util.newFieldList(t),
                        fromBinary: (e, n) => (new i).fromBinary(e, n),
                        fromJson: (e, n) => (new i).fromJson(e, n),
                        fromJsonString: (e, n) => (new i).fromJsonString(e, n),
                        equals: (n, t) => e.util.equals(i, n, t)
                    }), i
                }(this, e, n, t)
            },
            makeEnum: p,
            makeEnumType: T,
            getEnumType: d,
            makeExtension(e, n, t) {
                return function(e, n, t, r) {
                    let s;
                    return {
                        typeName: n,
                        extendee: t,
                        get field() {
                            if (!s) {
                                const t = "function" == typeof r ? r() : r;
                                t.name = n.split(".").pop(), t.jsonName = `[${n}]`, s = e.util.newFieldList([t]).list()[0]
                            }
                            return s
                        },
                        runtime: e
                    }
                }(this, e, n, t)
            }
        }
    }
    class Re {
        constructor(e, n) {
            this._fields = e, this._normalizer = n
        }
        findJsonName(e) {
            if (!this.jsonNames) {
                const e = {};
                for (const n of this.list()) e[n.jsonName] = e[n.name] = n;
                this.jsonNames = e
            }
            return this.jsonNames[e]
        }
        find(e) {
            if (!this.numbers) {
                const e = {};
                for (const n of this.list()) e[n.no] = n;
                this.numbers = e
            }
            return this.numbers[e]
        }
        list() {
            return this.all || (this.all = this._normalizer(this._fields)), this.all
        }
        byNumber() {
            return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, n) => e.no - n.no)), this.numbersAsc
        }
        byMember() {
            if (!this.members) {
                this.members = [];
                const e = this.members;
                let n;
                for (const t of this.list()) t.oneof ? t.oneof !== n && (n = t.oneof, e.push(n)) : e.push(t)
            }
            return this.members
        }
    }

    function Je(e, n) {
        const t = De(e);
        return n ? t : Be(Le(t))
    }
    const ve = De;

    function De(e) {
        let n = !1;
        const t = [];
        for (let r = 0; r < e.length; r++) {
            let s = e.charAt(r);
            switch (s) {
                case "_":
                    n = !0;
                    break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    t.push(s), n = !1;
                    break;
                default:
                    n && (n = !1, s = s.toUpperCase()), t.push(s)
            }
        }
        return t.join("")
    }
    const be = new Set(["constructor", "toString", "toJSON", "valueOf"]),
        Pe = new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]),
        Fe = e => `${e}$`,
        Le = e => Pe.has(e) ? Fe(e) : e,
        Be = e => be.has(e) ? Fe(e) : e;
    class Ae {
        constructor(e) {
            this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.req = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = Je(e, !1)
        }
        addField(e) {
            o(e.oneof === this, `field ${e.name} not one of ${this.name}`), this.fields.push(e)
        }
        findField(e) {
            if (!this._lookup) {
                this._lookup = Object.create(null);
                for (let e = 0; e < this.fields.length; e++) this._lookup[this.fields[e].localName] = this.fields[e]
            }
            return this._lookup[e]
        }
    }

    function Ue(e, n) {
        const t = [];
        let r;
        for (const s of "function" == typeof e ? e() : e) {
            const e = s;
            if (e.localName = Je(s.name, void 0 !== s.oneof), e.jsonName = s.jsonName ?? ve(s.name), e.repeated = s.repeated ?? !1, "scalar" == s.kind && (e.L = s.L ?? D.BIGINT), e.delimited = s.delimited ?? !1, e.req = s.req ?? !1, e.opt = s.opt ?? !1, void 0 === s.packed && (e.packed = !!n && ("enum" == s.kind || "scalar" == s.kind && s.T != v.BYTES && s.T != v.STRING)), void 0 !== s.oneof) {
                const n = "string" == typeof s.oneof ? s.oneof : s.oneof.name;
                r && r.name == n || (r = new Ae(n)), e.oneof = r, r.addField(e)
            }
            t.push(e)
        }
        return t
    }
    const Ce = Oe("proto3", e => new Re(e, e => Ue(e, !0)), e => {
            for (const n of e.getType().fields.byMember()) {
                if (n.opt) continue;
                const t = n.localName,
                    r = e;
                if (n.repeated) r[t] = [];
                else switch (n.kind) {
                    case "oneof":
                        r[t] = {
                            case: void 0
                        };
                        break;
                    case "enum":
                        r[t] = 0;
                        break;
                    case "map":
                        r[t] = {};
                        break;
                    case "scalar":
                        r[t] = P(n.T, n.L)
                }
            }
        }),
        Me = Oe("proto2", e => new Re(e, e => Ue(e, !1)), e => {
            for (const n of e.getType().fields.byMember()) {
                const t = n.localName,
                    r = e;
                if (n.repeated) r[t] = [];
                else switch (n.kind) {
                    case "oneof":
                        r[t] = {
                            case: void 0
                        };
                        break;
                    case "map":
                        r[t] = {}
                }
            }
        });
    Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY;
    var qe = (e => (e[e.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e[e.EDITION_LEGACY = 900] = "EDITION_LEGACY", e[e.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e[e.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e[e.EDITION_2023 = 1e3] = "EDITION_2023", e[e.EDITION_2024 = 1001] = "EDITION_2024", e[e.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e[e.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e[e.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e[e.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e[e.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e[e.EDITION_MAX = 2147483647] = "EDITION_MAX", e))(qe || {});
    Me.util.setEnumType(qe, "google.protobuf.Edition", [{
        no: 0,
        name: "EDITION_UNKNOWN"
    }, {
        no: 900,
        name: "EDITION_LEGACY"
    }, {
        no: 998,
        name: "EDITION_PROTO2"
    }, {
        no: 999,
        name: "EDITION_PROTO3"
    }, {
        no: 1e3,
        name: "EDITION_2023"
    }, {
        no: 1001,
        name: "EDITION_2024"
    }, {
        no: 1,
        name: "EDITION_1_TEST_ONLY"
    }, {
        no: 2,
        name: "EDITION_2_TEST_ONLY"
    }, {
        no: 99997,
        name: "EDITION_99997_TEST_ONLY"
    }, {
        no: 99998,
        name: "EDITION_99998_TEST_ONLY"
    }, {
        no: 99999,
        name: "EDITION_99999_TEST_ONLY"
    }, {
        no: 2147483647,
        name: "EDITION_MAX"
    }]);
    const xe = class e extends _ {
        constructor(e) {
            super(), this.file = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    xe.runtime = Me, xe.typeName = "google.protobuf.FileDescriptorSet", xe.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "file",
        kind: "message",
        T: Ye,
        repeated: !0
    }]);
    const Ge = class e extends _ {
        constructor(e) {
            super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    Ge.runtime = Me, Ge.typeName = "google.protobuf.FileDescriptorProto", Ge.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 2,
        name: "package",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 3,
        name: "dependency",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 10,
        name: "public_dependency",
        kind: "scalar",
        T: 5,
        repeated: !0
    }, {
        no: 11,
        name: "weak_dependency",
        kind: "scalar",
        T: 5,
        repeated: !0
    }, {
        no: 4,
        name: "message_type",
        kind: "message",
        T: Ke,
        repeated: !0
    }, {
        no: 5,
        name: "enum_type",
        kind: "message",
        T: ln,
        repeated: !0
    }, {
        no: 6,
        name: "service",
        kind: "message",
        T: pn,
        repeated: !0
    }, {
        no: 7,
        name: "extension",
        kind: "message",
        T: tn,
        repeated: !0
    }, {
        no: 8,
        name: "options",
        kind: "message",
        T: hn,
        opt: !0
    }, {
        no: 9,
        name: "source_code_info",
        kind: "message",
        T: at,
        opt: !0
    }, {
        no: 12,
        name: "syntax",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 14,
        name: "edition",
        kind: "enum",
        T: Me.getEnumType(qe),
        opt: !0
    }]);
    let Ye = Ge;
    const Ve = class e extends _ {
        constructor(e) {
            super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    Ve.runtime = Me, Ve.typeName = "google.protobuf.DescriptorProto", Ve.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 2,
        name: "field",
        kind: "message",
        T: tn,
        repeated: !0
    }, {
        no: 6,
        name: "extension",
        kind: "message",
        T: tn,
        repeated: !0
    }, {
        no: 3,
        name: "nested_type",
        kind: "message",
        T: Ve,
        repeated: !0
    }, {
        no: 4,
        name: "enum_type",
        kind: "message",
        T: ln,
        repeated: !0
    }, {
        no: 5,
        name: "extension_range",
        kind: "message",
        T: je,
        repeated: !0
    }, {
        no: 8,
        name: "oneof_decl",
        kind: "message",
        T: on,
        repeated: !0
    }, {
        no: 7,
        name: "options",
        kind: "message",
        T: yn,
        opt: !0
    }, {
        no: 9,
        name: "reserved_range",
        kind: "message",
        T: $e,
        repeated: !0
    }, {
        no: 10,
        name: "reserved_name",
        kind: "scalar",
        T: 9,
        repeated: !0
    }]);
    let Ke = Ve;
    const We = class e extends _ {
        constructor(e) {
            super(), Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    We.runtime = Me, We.typeName = "google.protobuf.DescriptorProto.ExtensionRange", We.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "start",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 2,
        name: "end",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 3,
        name: "options",
        kind: "message",
        T: Qe,
        opt: !0
    }]);
    let je = We;
    const Xe = class e extends _ {
        constructor(e) {
            super(), Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    Xe.runtime = Me, Xe.typeName = "google.protobuf.DescriptorProto.ReservedRange", Xe.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "start",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 2,
        name: "end",
        kind: "scalar",
        T: 5,
        opt: !0
    }]);
    let $e = Xe;
    const He = class e extends _ {
        constructor(e) {
            super(), this.uninterpretedOption = [], this.declaration = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    He.runtime = Me, He.typeName = "google.protobuf.ExtensionRangeOptions", He.fields = Me.util.newFieldList(() => [{
        no: 999,
        name: "uninterpreted_option",
        kind: "message",
        T: Kn,
        repeated: !0
    }, {
        no: 2,
        name: "declaration",
        kind: "message",
        T: en,
        repeated: !0
    }, {
        no: 50,
        name: "features",
        kind: "message",
        T: $n,
        opt: !0
    }, {
        no: 3,
        name: "verification",
        kind: "enum",
        T: Me.getEnumType(Ze),
        opt: !0,
        default: 1
    }]);
    let Qe = He;
    var Ze = (e => (e[e.DECLARATION = 0] = "DECLARATION", e[e.UNVERIFIED = 1] = "UNVERIFIED", e))(Ze || {});
    Me.util.setEnumType(Ze, "google.protobuf.ExtensionRangeOptions.VerificationState", [{
        no: 0,
        name: "DECLARATION"
    }, {
        no: 1,
        name: "UNVERIFIED"
    }]);
    const ze = class e extends _ {
        constructor(e) {
            super(), Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    ze.runtime = Me, ze.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", ze.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "number",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 2,
        name: "full_name",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 3,
        name: "type",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 5,
        name: "reserved",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 6,
        name: "repeated",
        kind: "scalar",
        T: 8,
        opt: !0
    }]);
    let en = ze;
    const nn = class e extends _ {
        constructor(e) {
            super(), Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    nn.runtime = Me, nn.typeName = "google.protobuf.FieldDescriptorProto", nn.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 3,
        name: "number",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 4,
        name: "label",
        kind: "enum",
        T: Me.getEnumType(sn),
        opt: !0
    }, {
        no: 5,
        name: "type",
        kind: "enum",
        T: Me.getEnumType(rn),
        opt: !0
    }, {
        no: 6,
        name: "type_name",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 2,
        name: "extendee",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 7,
        name: "default_value",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 9,
        name: "oneof_index",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 10,
        name: "json_name",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 8,
        name: "options",
        kind: "message",
        T: In,
        opt: !0
    }, {
        no: 17,
        name: "proto3_optional",
        kind: "scalar",
        T: 8,
        opt: !0
    }]);
    let tn = nn;
    var rn = (e => (e[e.DOUBLE = 1] = "DOUBLE", e[e.FLOAT = 2] = "FLOAT", e[e.INT64 = 3] = "INT64", e[e.UINT64 = 4] = "UINT64", e[e.INT32 = 5] = "INT32", e[e.FIXED64 = 6] = "FIXED64", e[e.FIXED32 = 7] = "FIXED32", e[e.BOOL = 8] = "BOOL", e[e.STRING = 9] = "STRING", e[e.GROUP = 10] = "GROUP", e[e.MESSAGE = 11] = "MESSAGE", e[e.BYTES = 12] = "BYTES", e[e.UINT32 = 13] = "UINT32", e[e.ENUM = 14] = "ENUM", e[e.SFIXED32 = 15] = "SFIXED32", e[e.SFIXED64 = 16] = "SFIXED64", e[e.SINT32 = 17] = "SINT32", e[e.SINT64 = 18] = "SINT64", e))(rn || {});
    Me.util.setEnumType(rn, "google.protobuf.FieldDescriptorProto.Type", [{
        no: 1,
        name: "TYPE_DOUBLE"
    }, {
        no: 2,
        name: "TYPE_FLOAT"
    }, {
        no: 3,
        name: "TYPE_INT64"
    }, {
        no: 4,
        name: "TYPE_UINT64"
    }, {
        no: 5,
        name: "TYPE_INT32"
    }, {
        no: 6,
        name: "TYPE_FIXED64"
    }, {
        no: 7,
        name: "TYPE_FIXED32"
    }, {
        no: 8,
        name: "TYPE_BOOL"
    }, {
        no: 9,
        name: "TYPE_STRING"
    }, {
        no: 10,
        name: "TYPE_GROUP"
    }, {
        no: 11,
        name: "TYPE_MESSAGE"
    }, {
        no: 12,
        name: "TYPE_BYTES"
    }, {
        no: 13,
        name: "TYPE_UINT32"
    }, {
        no: 14,
        name: "TYPE_ENUM"
    }, {
        no: 15,
        name: "TYPE_SFIXED32"
    }, {
        no: 16,
        name: "TYPE_SFIXED64"
    }, {
        no: 17,
        name: "TYPE_SINT32"
    }, {
        no: 18,
        name: "TYPE_SINT64"
    }]);
    var sn = (e => (e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REPEATED = 3] = "REPEATED", e[e.REQUIRED = 2] = "REQUIRED", e))(sn || {});
    Me.util.setEnumType(sn, "google.protobuf.FieldDescriptorProto.Label", [{
        no: 1,
        name: "LABEL_OPTIONAL"
    }, {
        no: 3,
        name: "LABEL_REPEATED"
    }, {
        no: 2,
        name: "LABEL_REQUIRED"
    }]);
    const an = class e extends _ {
        constructor(e) {
            super(), Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    an.runtime = Me, an.typeName = "google.protobuf.OneofDescriptorProto", an.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 2,
        name: "options",
        kind: "message",
        T: Ln,
        opt: !0
    }]);
    let on = an;
    const un = class e extends _ {
        constructor(e) {
            super(), this.value = [], this.reservedRange = [], this.reservedName = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    un.runtime = Me, un.typeName = "google.protobuf.EnumDescriptorProto", un.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 2,
        name: "value",
        kind: "message",
        T: fn,
        repeated: !0
    }, {
        no: 3,
        name: "options",
        kind: "message",
        T: An,
        opt: !0
    }, {
        no: 4,
        name: "reserved_range",
        kind: "message",
        T: cn,
        repeated: !0
    }, {
        no: 5,
        name: "reserved_name",
        kind: "scalar",
        T: 9,
        repeated: !0
    }]);
    let ln = un;
    const mn = class e extends _ {
        constructor(e) {
            super(), Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    mn.runtime = Me, mn.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", mn.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "start",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 2,
        name: "end",
        kind: "scalar",
        T: 5,
        opt: !0
    }]);
    let cn = mn;
    const dn = class e extends _ {
        constructor(e) {
            super(), Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    dn.runtime = Me, dn.typeName = "google.protobuf.EnumValueDescriptorProto", dn.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 2,
        name: "number",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 3,
        name: "options",
        kind: "message",
        T: Cn,
        opt: !0
    }]);
    let fn = dn;
    const Tn = class e extends _ {
        constructor(e) {
            super(), this.method = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    Tn.runtime = Me, Tn.typeName = "google.protobuf.ServiceDescriptorProto", Tn.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 2,
        name: "method",
        kind: "message",
        T: _n,
        repeated: !0
    }, {
        no: 3,
        name: "options",
        kind: "message",
        T: qn,
        opt: !0
    }]);
    let pn = Tn;
    const En = class e extends _ {
        constructor(e) {
            super(), Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    En.runtime = Me, En.typeName = "google.protobuf.MethodDescriptorProto", En.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 2,
        name: "input_type",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 3,
        name: "output_type",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 4,
        name: "options",
        kind: "message",
        T: Gn,
        opt: !0
    }, {
        no: 5,
        name: "client_streaming",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 6,
        name: "server_streaming",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }]);
    let _n = En;
    const gn = class e extends _ {
        constructor(e) {
            super(), this.uninterpretedOption = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    gn.runtime = Me, gn.typeName = "google.protobuf.FileOptions", gn.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "java_package",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 8,
        name: "java_outer_classname",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 10,
        name: "java_multiple_files",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 20,
        name: "java_generate_equals_and_hash",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 27,
        name: "java_string_check_utf8",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 9,
        name: "optimize_for",
        kind: "enum",
        T: Me.getEnumType(Nn),
        opt: !0,
        default: 1
    }, {
        no: 11,
        name: "go_package",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 16,
        name: "cc_generic_services",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 17,
        name: "java_generic_services",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 18,
        name: "py_generic_services",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 23,
        name: "deprecated",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 31,
        name: "cc_enable_arenas",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !0
    }, {
        no: 36,
        name: "objc_class_prefix",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 37,
        name: "csharp_namespace",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 39,
        name: "swift_prefix",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 40,
        name: "php_class_prefix",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 41,
        name: "php_namespace",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 44,
        name: "php_metadata_namespace",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 45,
        name: "ruby_package",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 50,
        name: "features",
        kind: "message",
        T: $n,
        opt: !0
    }, {
        no: 999,
        name: "uninterpreted_option",
        kind: "message",
        T: Kn,
        repeated: !0
    }]);
    let hn = gn;
    var Nn = (e => (e[e.SPEED = 1] = "SPEED", e[e.CODE_SIZE = 2] = "CODE_SIZE", e[e.LITE_RUNTIME = 3] = "LITE_RUNTIME", e))(Nn || {});
    Me.util.setEnumType(Nn, "google.protobuf.FileOptions.OptimizeMode", [{
        no: 1,
        name: "SPEED"
    }, {
        no: 2,
        name: "CODE_SIZE"
    }, {
        no: 3,
        name: "LITE_RUNTIME"
    }]);
    const wn = class e extends _ {
        constructor(e) {
            super(), this.uninterpretedOption = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    wn.runtime = Me, wn.typeName = "google.protobuf.MessageOptions", wn.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "message_set_wire_format",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 2,
        name: "no_standard_descriptor_accessor",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 3,
        name: "deprecated",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 7,
        name: "map_entry",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 11,
        name: "deprecated_legacy_json_field_conflicts",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 12,
        name: "features",
        kind: "message",
        T: $n,
        opt: !0
    }, {
        no: 999,
        name: "uninterpreted_option",
        kind: "message",
        T: Kn,
        repeated: !0
    }]);
    let yn = wn;
    const Sn = class e extends _ {
        constructor(e) {
            super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    Sn.runtime = Me, Sn.typeName = "google.protobuf.FieldOptions", Sn.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "ctype",
        kind: "enum",
        T: Me.getEnumType(kn),
        opt: !0,
        default: 0
    }, {
        no: 2,
        name: "packed",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 6,
        name: "jstype",
        kind: "enum",
        T: Me.getEnumType(On),
        opt: !0,
        default: 0
    }, {
        no: 5,
        name: "lazy",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 15,
        name: "unverified_lazy",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 3,
        name: "deprecated",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 10,
        name: "weak",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 16,
        name: "debug_redact",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 17,
        name: "retention",
        kind: "enum",
        T: Me.getEnumType(Rn),
        opt: !0
    }, {
        no: 19,
        name: "targets",
        kind: "enum",
        T: Me.getEnumType(Jn),
        repeated: !0
    }, {
        no: 20,
        name: "edition_defaults",
        kind: "message",
        T: Dn,
        repeated: !0
    }, {
        no: 21,
        name: "features",
        kind: "message",
        T: $n,
        opt: !0
    }, {
        no: 22,
        name: "feature_support",
        kind: "message",
        T: Pn,
        opt: !0
    }, {
        no: 999,
        name: "uninterpreted_option",
        kind: "message",
        T: Kn,
        repeated: !0
    }]);
    let In = Sn;
    var kn = (e => (e[e.STRING = 0] = "STRING", e[e.CORD = 1] = "CORD", e[e.STRING_PIECE = 2] = "STRING_PIECE", e))(kn || {});
    Me.util.setEnumType(kn, "google.protobuf.FieldOptions.CType", [{
        no: 0,
        name: "STRING"
    }, {
        no: 1,
        name: "CORD"
    }, {
        no: 2,
        name: "STRING_PIECE"
    }]);
    var On = (e => (e[e.JS_NORMAL = 0] = "JS_NORMAL", e[e.JS_STRING = 1] = "JS_STRING", e[e.JS_NUMBER = 2] = "JS_NUMBER", e))(On || {});
    Me.util.setEnumType(On, "google.protobuf.FieldOptions.JSType", [{
        no: 0,
        name: "JS_NORMAL"
    }, {
        no: 1,
        name: "JS_STRING"
    }, {
        no: 2,
        name: "JS_NUMBER"
    }]);
    var Rn = (e => (e[e.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e[e.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e[e.RETENTION_SOURCE = 2] = "RETENTION_SOURCE", e))(Rn || {});
    Me.util.setEnumType(Rn, "google.protobuf.FieldOptions.OptionRetention", [{
        no: 0,
        name: "RETENTION_UNKNOWN"
    }, {
        no: 1,
        name: "RETENTION_RUNTIME"
    }, {
        no: 2,
        name: "RETENTION_SOURCE"
    }]);
    var Jn = (e => (e[e.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e[e.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e[e.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e[e.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e[e.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e[e.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e[e.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e[e.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e[e.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e[e.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD", e))(Jn || {});
    Me.util.setEnumType(Jn, "google.protobuf.FieldOptions.OptionTargetType", [{
        no: 0,
        name: "TARGET_TYPE_UNKNOWN"
    }, {
        no: 1,
        name: "TARGET_TYPE_FILE"
    }, {
        no: 2,
        name: "TARGET_TYPE_EXTENSION_RANGE"
    }, {
        no: 3,
        name: "TARGET_TYPE_MESSAGE"
    }, {
        no: 4,
        name: "TARGET_TYPE_FIELD"
    }, {
        no: 5,
        name: "TARGET_TYPE_ONEOF"
    }, {
        no: 6,
        name: "TARGET_TYPE_ENUM"
    }, {
        no: 7,
        name: "TARGET_TYPE_ENUM_ENTRY"
    }, {
        no: 8,
        name: "TARGET_TYPE_SERVICE"
    }, {
        no: 9,
        name: "TARGET_TYPE_METHOD"
    }]);
    const vn = class e extends _ {
        constructor(e) {
            super(), Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    vn.runtime = Me, vn.typeName = "google.protobuf.FieldOptions.EditionDefault", vn.fields = Me.util.newFieldList(() => [{
        no: 3,
        name: "edition",
        kind: "enum",
        T: Me.getEnumType(qe),
        opt: !0
    }, {
        no: 2,
        name: "value",
        kind: "scalar",
        T: 9,
        opt: !0
    }]);
    let Dn = vn;
    const bn = class e extends _ {
        constructor(e) {
            super(), Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    bn.runtime = Me, bn.typeName = "google.protobuf.FieldOptions.FeatureSupport", bn.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "edition_introduced",
        kind: "enum",
        T: Me.getEnumType(qe),
        opt: !0
    }, {
        no: 2,
        name: "edition_deprecated",
        kind: "enum",
        T: Me.getEnumType(qe),
        opt: !0
    }, {
        no: 3,
        name: "deprecation_warning",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 4,
        name: "edition_removed",
        kind: "enum",
        T: Me.getEnumType(qe),
        opt: !0
    }]);
    let Pn = bn;
    const Fn = class e extends _ {
        constructor(e) {
            super(), this.uninterpretedOption = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    Fn.runtime = Me, Fn.typeName = "google.protobuf.OneofOptions", Fn.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "features",
        kind: "message",
        T: $n,
        opt: !0
    }, {
        no: 999,
        name: "uninterpreted_option",
        kind: "message",
        T: Kn,
        repeated: !0
    }]);
    let Ln = Fn;
    const Bn = class e extends _ {
        constructor(e) {
            super(), this.uninterpretedOption = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    Bn.runtime = Me, Bn.typeName = "google.protobuf.EnumOptions", Bn.fields = Me.util.newFieldList(() => [{
        no: 2,
        name: "allow_alias",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 3,
        name: "deprecated",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 6,
        name: "deprecated_legacy_json_field_conflicts",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 7,
        name: "features",
        kind: "message",
        T: $n,
        opt: !0
    }, {
        no: 999,
        name: "uninterpreted_option",
        kind: "message",
        T: Kn,
        repeated: !0
    }]);
    let An = Bn;
    const Un = class e extends _ {
        constructor(e) {
            super(), this.uninterpretedOption = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    Un.runtime = Me, Un.typeName = "google.protobuf.EnumValueOptions", Un.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "deprecated",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 2,
        name: "features",
        kind: "message",
        T: $n,
        opt: !0
    }, {
        no: 3,
        name: "debug_redact",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 4,
        name: "feature_support",
        kind: "message",
        T: Pn,
        opt: !0
    }, {
        no: 999,
        name: "uninterpreted_option",
        kind: "message",
        T: Kn,
        repeated: !0
    }]);
    let Cn = Un;
    const Mn = class e extends _ {
        constructor(e) {
            super(), this.uninterpretedOption = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    Mn.runtime = Me, Mn.typeName = "google.protobuf.ServiceOptions", Mn.fields = Me.util.newFieldList(() => [{
        no: 34,
        name: "features",
        kind: "message",
        T: $n,
        opt: !0
    }, {
        no: 33,
        name: "deprecated",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 999,
        name: "uninterpreted_option",
        kind: "message",
        T: Kn,
        repeated: !0
    }]);
    let qn = Mn;
    const xn = class e extends _ {
        constructor(e) {
            super(), this.uninterpretedOption = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    xn.runtime = Me, xn.typeName = "google.protobuf.MethodOptions", xn.fields = Me.util.newFieldList(() => [{
        no: 33,
        name: "deprecated",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1
    }, {
        no: 34,
        name: "idempotency_level",
        kind: "enum",
        T: Me.getEnumType(Yn),
        opt: !0,
        default: 0
    }, {
        no: 35,
        name: "features",
        kind: "message",
        T: $n,
        opt: !0
    }, {
        no: 999,
        name: "uninterpreted_option",
        kind: "message",
        T: Kn,
        repeated: !0
    }]);
    let Gn = xn;
    var Yn = (e => (e[e.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e[e.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e[e.IDEMPOTENT = 2] = "IDEMPOTENT", e))(Yn || {});
    Me.util.setEnumType(Yn, "google.protobuf.MethodOptions.IdempotencyLevel", [{
        no: 0,
        name: "IDEMPOTENCY_UNKNOWN"
    }, {
        no: 1,
        name: "NO_SIDE_EFFECTS"
    }, {
        no: 2,
        name: "IDEMPOTENT"
    }]);
    const Vn = class e extends _ {
        constructor(e) {
            super(), this.name = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    Vn.runtime = Me, Vn.typeName = "google.protobuf.UninterpretedOption", Vn.fields = Me.util.newFieldList(() => [{
        no: 2,
        name: "name",
        kind: "message",
        T: jn,
        repeated: !0
    }, {
        no: 3,
        name: "identifier_value",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 4,
        name: "positive_int_value",
        kind: "scalar",
        T: 4,
        opt: !0
    }, {
        no: 5,
        name: "negative_int_value",
        kind: "scalar",
        T: 3,
        opt: !0
    }, {
        no: 6,
        name: "double_value",
        kind: "scalar",
        T: 1,
        opt: !0
    }, {
        no: 7,
        name: "string_value",
        kind: "scalar",
        T: 12,
        opt: !0
    }, {
        no: 8,
        name: "aggregate_value",
        kind: "scalar",
        T: 9,
        opt: !0
    }]);
    let Kn = Vn;
    const Wn = class e extends _ {
        constructor(e) {
            super(), Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    Wn.runtime = Me, Wn.typeName = "google.protobuf.UninterpretedOption.NamePart", Wn.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "name_part",
        kind: "scalar",
        T: 9,
        req: !0
    }, {
        no: 2,
        name: "is_extension",
        kind: "scalar",
        T: 8,
        req: !0
    }]);
    let jn = Wn;
    const Xn = class e extends _ {
        constructor(e) {
            super(), Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    Xn.runtime = Me, Xn.typeName = "google.protobuf.FeatureSet", Xn.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "field_presence",
        kind: "enum",
        T: Me.getEnumType(Hn),
        opt: !0
    }, {
        no: 2,
        name: "enum_type",
        kind: "enum",
        T: Me.getEnumType(Qn),
        opt: !0
    }, {
        no: 3,
        name: "repeated_field_encoding",
        kind: "enum",
        T: Me.getEnumType(Zn),
        opt: !0
    }, {
        no: 4,
        name: "utf8_validation",
        kind: "enum",
        T: Me.getEnumType(zn),
        opt: !0
    }, {
        no: 5,
        name: "message_encoding",
        kind: "enum",
        T: Me.getEnumType(et),
        opt: !0
    }, {
        no: 6,
        name: "json_format",
        kind: "enum",
        T: Me.getEnumType(nt),
        opt: !0
    }]);
    let $n = Xn;
    var Hn = (e => (e[e.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e[e.EXPLICIT = 1] = "EXPLICIT", e[e.IMPLICIT = 2] = "IMPLICIT", e[e.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED", e))(Hn || {});
    Me.util.setEnumType(Hn, "google.protobuf.FeatureSet.FieldPresence", [{
        no: 0,
        name: "FIELD_PRESENCE_UNKNOWN"
    }, {
        no: 1,
        name: "EXPLICIT"
    }, {
        no: 2,
        name: "IMPLICIT"
    }, {
        no: 3,
        name: "LEGACY_REQUIRED"
    }]);
    var Qn = (e => (e[e.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e[e.OPEN = 1] = "OPEN", e[e.CLOSED = 2] = "CLOSED", e))(Qn || {});
    Me.util.setEnumType(Qn, "google.protobuf.FeatureSet.EnumType", [{
        no: 0,
        name: "ENUM_TYPE_UNKNOWN"
    }, {
        no: 1,
        name: "OPEN"
    }, {
        no: 2,
        name: "CLOSED"
    }]);
    var Zn = (e => (e[e.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e[e.PACKED = 1] = "PACKED", e[e.EXPANDED = 2] = "EXPANDED", e))(Zn || {});
    Me.util.setEnumType(Zn, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{
        no: 0,
        name: "REPEATED_FIELD_ENCODING_UNKNOWN"
    }, {
        no: 1,
        name: "PACKED"
    }, {
        no: 2,
        name: "EXPANDED"
    }]);
    var zn = (e => (e[e.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e[e.VERIFY = 2] = "VERIFY", e[e.NONE = 3] = "NONE", e))(zn || {});
    Me.util.setEnumType(zn, "google.protobuf.FeatureSet.Utf8Validation", [{
        no: 0,
        name: "UTF8_VALIDATION_UNKNOWN"
    }, {
        no: 2,
        name: "VERIFY"
    }, {
        no: 3,
        name: "NONE"
    }]);
    var et = (e => (e[e.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e[e.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e[e.DELIMITED = 2] = "DELIMITED", e))(et || {});
    Me.util.setEnumType(et, "google.protobuf.FeatureSet.MessageEncoding", [{
        no: 0,
        name: "MESSAGE_ENCODING_UNKNOWN"
    }, {
        no: 1,
        name: "LENGTH_PREFIXED"
    }, {
        no: 2,
        name: "DELIMITED"
    }]);
    var nt = (e => (e[e.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e[e.ALLOW = 1] = "ALLOW", e[e.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT", e))(nt || {});
    Me.util.setEnumType(nt, "google.protobuf.FeatureSet.JsonFormat", [{
        no: 0,
        name: "JSON_FORMAT_UNKNOWN"
    }, {
        no: 1,
        name: "ALLOW"
    }, {
        no: 2,
        name: "LEGACY_BEST_EFFORT"
    }]);
    const tt = class e extends _ {
        constructor(e) {
            super(), this.defaults = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    tt.runtime = Me, tt.typeName = "google.protobuf.FeatureSetDefaults", tt.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "defaults",
        kind: "message",
        T: st,
        repeated: !0
    }, {
        no: 4,
        name: "minimum_edition",
        kind: "enum",
        T: Me.getEnumType(qe),
        opt: !0
    }, {
        no: 5,
        name: "maximum_edition",
        kind: "enum",
        T: Me.getEnumType(qe),
        opt: !0
    }]);
    const rt = class e extends _ {
        constructor(e) {
            super(), Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    rt.runtime = Me, rt.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", rt.fields = Me.util.newFieldList(() => [{
        no: 3,
        name: "edition",
        kind: "enum",
        T: Me.getEnumType(qe),
        opt: !0
    }, {
        no: 4,
        name: "overridable_features",
        kind: "message",
        T: $n,
        opt: !0
    }, {
        no: 5,
        name: "fixed_features",
        kind: "message",
        T: $n,
        opt: !0
    }]);
    let st = rt;
    const it = class e extends _ {
        constructor(e) {
            super(), this.location = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    it.runtime = Me, it.typeName = "google.protobuf.SourceCodeInfo", it.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "location",
        kind: "message",
        T: ut,
        repeated: !0
    }]);
    let at = it;
    const ot = class e extends _ {
        constructor(e) {
            super(), this.path = [], this.span = [], this.leadingDetachedComments = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    ot.runtime = Me, ot.typeName = "google.protobuf.SourceCodeInfo.Location", ot.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "path",
        kind: "scalar",
        T: 5,
        repeated: !0,
        packed: !0
    }, {
        no: 2,
        name: "span",
        kind: "scalar",
        T: 5,
        repeated: !0,
        packed: !0
    }, {
        no: 3,
        name: "leading_comments",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 4,
        name: "trailing_comments",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 6,
        name: "leading_detached_comments",
        kind: "scalar",
        T: 9,
        repeated: !0
    }]);
    let ut = ot;
    const lt = class e extends _ {
        constructor(e) {
            super(), this.annotation = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    lt.runtime = Me, lt.typeName = "google.protobuf.GeneratedCodeInfo", lt.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "annotation",
        kind: "message",
        T: dt,
        repeated: !0
    }]);
    let mt = lt;
    const ct = class e extends _ {
        constructor(e) {
            super(), this.path = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    ct.runtime = Me, ct.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", ct.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "path",
        kind: "scalar",
        T: 5,
        repeated: !0,
        packed: !0
    }, {
        no: 2,
        name: "source_file",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 3,
        name: "begin",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 4,
        name: "end",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 5,
        name: "semantic",
        kind: "enum",
        T: Me.getEnumType(ft),
        opt: !0
    }]);
    let dt = ct;
    var ft = (e => (e[e.NONE = 0] = "NONE", e[e.SET = 1] = "SET", e[e.ALIAS = 2] = "ALIAS", e))(ft || {});
    Me.util.setEnumType(ft, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{
        no: 0,
        name: "NONE"
    }, {
        no: 1,
        name: "SET"
    }, {
        no: 2,
        name: "ALIAS"
    }]), rn.DOUBLE, v.DOUBLE, rn.FLOAT, v.FLOAT, rn.INT64, v.INT64, rn.UINT64, v.UINT64, rn.INT32, v.INT32, rn.FIXED64, v.FIXED64, rn.FIXED32, v.FIXED32, rn.BOOL, v.BOOL, rn.STRING, v.STRING, rn.GROUP, rn.MESSAGE, rn.BYTES, v.BYTES, rn.UINT32, v.UINT32, rn.ENUM, rn.SFIXED32, v.SFIXED32, rn.SFIXED64, v.SFIXED64, rn.SINT32, v.SINT32, rn.SINT64, v.SINT64;
    const Tt = class e extends _ {
        constructor(e) {
            super(), this.seconds = J.zero, this.nanos = 0, Ce.util.initPartial(e, this)
        }
        fromJson(e, n) {
            if ("string" != typeof e) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${Ce.json.debug(e)}`);
            const t = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
            if (!t) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
            const r = Date.parse(t[1] + "-" + t[2] + "-" + t[3] + "T" + t[4] + ":" + t[5] + ":" + t[6] + (t[8] ? t[8] : "Z"));
            if (Number.isNaN(r)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
            if (r < Date.parse("0001-01-01T00:00:00Z") || r > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
            return this.seconds = J.parse(r / 1e3), this.nanos = 0, t[7] && (this.nanos = parseInt("1" + t[7] + "0".repeat(9 - t[7].length)) - 1e9), this
        }
        toJson(e) {
            const n = 1e3 * Number(this.seconds);
            if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
            if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
            let t = "Z";
            if (this.nanos > 0) {
                const e = (this.nanos + 1e9).toString().substring(1);
                t = "000000" === e.substring(3) ? "." + e.substring(0, 3) + "Z" : "000" === e.substring(6) ? "." + e.substring(0, 6) + "Z" : "." + e + "Z"
            }
            return new Date(n).toISOString().replace(".000Z", t)
        }
        toDate() {
            return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6))
        }
        static now() {
            return e.fromDate(new Date)
        }
        static fromDate(n) {
            const t = n.getTime();
            return new e({
                seconds: J.parse(Math.floor(t / 1e3)),
                nanos: t % 1e3 * 1e6
            })
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Tt.runtime = Ce, Tt.typeName = "google.protobuf.Timestamp", Tt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "seconds",
        kind: "scalar",
        T: 3
    }, {
        no: 2,
        name: "nanos",
        kind: "scalar",
        T: 5
    }]);
    const pt = class e extends _ {
        constructor(e) {
            super(), this.seconds = J.zero, this.nanos = 0, Ce.util.initPartial(e, this)
        }
        fromJson(e, n) {
            if ("string" != typeof e) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Ce.json.debug(e)}`);
            const t = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
            if (null === t) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Ce.json.debug(e)}`);
            const r = Number(t[1]);
            if (r > 315576e6 || r < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Ce.json.debug(e)}`);
            if (this.seconds = J.parse(r), "string" == typeof t[2]) {
                const e = t[2] + "0".repeat(9 - t[2].length);
                this.nanos = parseInt(e), (r < 0 || Object.is(r, -0)) && (this.nanos = -this.nanos)
            }
            return this
        }
        toJson(e) {
            if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
            let n = this.seconds.toString();
            if (0 !== this.nanos) {
                let e = Math.abs(this.nanos).toString();
                e = "0".repeat(9 - e.length) + e, "000000" === e.substring(3) ? e = e.substring(0, 3) : "000" === e.substring(6) && (e = e.substring(0, 6)), n += "." + e, this.nanos < 0 && 0 == Number(this.seconds) && (n = "-" + n)
            }
            return n + "s"
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    pt.runtime = Ce, pt.typeName = "google.protobuf.Duration", pt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "seconds",
        kind: "scalar",
        T: 3
    }, {
        no: 2,
        name: "nanos",
        kind: "scalar",
        T: 5
    }]);
    const Et = class e extends _ {
        constructor(e) {
            super(), this.typeUrl = "", this.value = new Uint8Array(0), Ce.util.initPartial(e, this)
        }
        toJson(e) {
            if ("" === this.typeUrl) return {};
            const n = this.typeUrlToName(this.typeUrl),
                t = e?.typeRegistry?.findMessage(n);
            if (!t) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
            let r = t.fromBinary(this.value).toJson(e);
            return (n.startsWith("google.protobuf.") || null === r || Array.isArray(r) || "object" != typeof r) && (r = {
                value: r
            }), r["@type"] = this.typeUrl, r
        }
        fromJson(e, n) {
            if (null === e || Array.isArray(e) || "object" != typeof e) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e ? "null" : Array.isArray(e) ? "array" : typeof e));
            if (0 == Object.keys(e).length) return this;
            const t = e["@type"];
            if ("string" != typeof t || "" == t) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
            const r = this.typeUrlToName(t),
                s = n?.typeRegistry?.findMessage(r);
            if (!s) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${t} is not in the type registry`);
            let i;
            if (r.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e, "value")) i = s.fromJson(e.value, n);
            else {
                const t = Object.assign({}, e);
                delete t["@type"], i = s.fromJson(t, n)
            }
            return this.packFrom(i), this
        }
        packFrom(e) {
            this.value = e.toBinary(), this.typeUrl = this.typeNameToUrl(e.getType().typeName)
        }
        unpackTo(e) {
            return !!this.is(e.getType()) && (e.fromBinary(this.value), !0)
        }
        unpack(e) {
            if ("" === this.typeUrl) return;
            const n = e.findMessage(this.typeUrlToName(this.typeUrl));
            return n ? n.fromBinary(this.value) : void 0
        }
        is(e) {
            if ("" === this.typeUrl) return !1;
            const n = this.typeUrlToName(this.typeUrl);
            let t = "";
            return t = "string" == typeof e ? e : e.typeName, n === t
        }
        typeNameToUrl(e) {
            return `type.googleapis.com/${e}`
        }
        typeUrlToName(e) {
            if (!e.length) throw new Error(`invalid type url: ${e}`);
            const n = e.lastIndexOf("/"),
                t = n >= 0 ? e.substring(n + 1) : e;
            if (!t.length) throw new Error(`invalid type url: ${e}`);
            return t
        }
        static pack(n) {
            const t = new e;
            return t.packFrom(n), t
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Et.runtime = Ce, Et.typeName = "google.protobuf.Any", Et.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "type_url",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "value",
        kind: "scalar",
        T: 12
    }]);
    let _t = Et;
    const gt = class e extends _ {
        constructor(e) {
            super(), Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    gt.runtime = Ce, gt.typeName = "google.protobuf.Empty", gt.fields = Ce.util.newFieldList(() => []);
    const ht = class e extends _ {
        constructor(e) {
            super(), this.paths = [], Ce.util.initPartial(e, this)
        }
        toJson(e) {
            return this.paths.map(e => {
                if (e.match(/_[0-9]?_/g) || e.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e + '" is irreversible');
                return function(e) {
                    let n = !1;
                    const t = [];
                    for (let r = 0; r < e.length; r++) {
                        let s = e.charAt(r);
                        switch (s) {
                            case "_":
                                n = !0;
                                break;
                            case "0":
                            case "1":
                            case "2":
                            case "3":
                            case "4":
                            case "5":
                            case "6":
                            case "7":
                            case "8":
                            case "9":
                                t.push(s), n = !1;
                                break;
                            default:
                                n && (n = !1, s = s.toUpperCase()), t.push(s)
                        }
                    }
                    return t.join("")
                }(e)
            }).join(",")
        }
        fromJson(e, n) {
            if ("string" != typeof e) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + Ce.json.debug(e));
            return "" === e || (this.paths = e.split(",").map(function(e) {
                if (e.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
                const n = e.replace(/[A-Z]/g, e => "_" + e.toLowerCase());
                return "_" === n[0] ? n.substring(1) : n
            })), this
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    ht.runtime = Ce, ht.typeName = "google.protobuf.FieldMask", ht.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "paths",
        kind: "scalar",
        T: 9,
        repeated: !0
    }]);
    var Nt = (e => (e[e.NULL_VALUE = 0] = "NULL_VALUE", e))(Nt || {});
    Ce.util.setEnumType(Nt, "google.protobuf.NullValue", [{
        no: 0,
        name: "NULL_VALUE"
    }]);
    const wt = class e extends _ {
        constructor(e) {
            super(), this.fields = {}, Ce.util.initPartial(e, this)
        }
        toJson(e) {
            const n = {};
            for (const [t, r] of Object.entries(this.fields)) n[t] = r.toJson(e);
            return n
        }
        fromJson(e, n) {
            if ("object" != typeof e || null == e || Array.isArray(e)) throw new Error("cannot decode google.protobuf.Struct from JSON " + Ce.json.debug(e));
            for (const [n, t] of Object.entries(e)) this.fields[n] = It.fromJson(t);
            return this
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    wt.runtime = Ce, wt.typeName = "google.protobuf.Struct", wt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "fields",
        kind: "map",
        K: 9,
        V: {
            kind: "message",
            T: It
        }
    }]);
    let yt = wt;
    const St = class e extends _ {
        constructor(e) {
            super(), this.kind = {
                case: void 0
            }, Ce.util.initPartial(e, this)
        }
        toJson(e) {
            switch (this.kind.case) {
                case "nullValue":
                    return null;
                case "numberValue":
                    if (!Number.isFinite(this.kind.value)) throw new Error("google.protobuf.Value cannot be NaN or Infinity");
                    return this.kind.value;
                case "boolValue":
                case "stringValue":
                    return this.kind.value;
                case "structValue":
                case "listValue":
                    return this.kind.value.toJson({
                        ...e,
                        emitDefaultValues: !0
                    })
            }
            throw new Error("google.protobuf.Value must have a value")
        }
        fromJson(e, n) {
            switch (typeof e) {
                case "number":
                    this.kind = {
                        case: "numberValue",
                        value: e
                    };
                    break;
                case "string":
                    this.kind = {
                        case: "stringValue",
                        value: e
                    };
                    break;
                case "boolean":
                    this.kind = {
                        case: "boolValue",
                        value: e
                    };
                    break;
                case "object":
                    null === e ? this.kind = {
                        case: "nullValue",
                        value: 0
                    } : Array.isArray(e) ? this.kind = {
                        case: "listValue",
                        value: Ot.fromJson(e)
                    } : this.kind = {
                        case: "structValue",
                        value: yt.fromJson(e)
                    };
                    break;
                default:
                    throw new Error("cannot decode google.protobuf.Value from JSON " + Ce.json.debug(e))
            }
            return this
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    St.runtime = Ce, St.typeName = "google.protobuf.Value", St.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "null_value",
        kind: "enum",
        T: Ce.getEnumType(Nt),
        oneof: "kind"
    }, {
        no: 2,
        name: "number_value",
        kind: "scalar",
        T: 1,
        oneof: "kind"
    }, {
        no: 3,
        name: "string_value",
        kind: "scalar",
        T: 9,
        oneof: "kind"
    }, {
        no: 4,
        name: "bool_value",
        kind: "scalar",
        T: 8,
        oneof: "kind"
    }, {
        no: 5,
        name: "struct_value",
        kind: "message",
        T: yt,
        oneof: "kind"
    }, {
        no: 6,
        name: "list_value",
        kind: "message",
        T: Ot,
        oneof: "kind"
    }]);
    let It = St;
    const kt = class e extends _ {
        constructor(e) {
            super(), this.values = [], Ce.util.initPartial(e, this)
        }
        toJson(e) {
            return this.values.map(e => e.toJson())
        }
        fromJson(e, n) {
            if (!Array.isArray(e)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + Ce.json.debug(e));
            for (let n of e) this.values.push(It.fromJson(n));
            return this
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    kt.runtime = Ce, kt.typeName = "google.protobuf.ListValue", kt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "values",
        kind: "message",
        T: It,
        repeated: !0
    }]);
    let Ot = kt;
    const Rt = class e extends _ {
        constructor(e) {
            super(), this.value = 0, Ce.util.initPartial(e, this)
        }
        toJson(e) {
            return Ce.json.writeScalar(v.DOUBLE, this.value, !0)
        }
        fromJson(e, n) {
            try {
                this.value = Ce.json.readScalar(v.DOUBLE, e)
            } catch (e) {
                let n = 'cannot decode message google.protobuf.DoubleValue from JSON"';
                throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n)
            }
            return this
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Rt.runtime = Ce, Rt.typeName = "google.protobuf.DoubleValue", Rt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "value",
        kind: "scalar",
        T: 1
    }]), Rt.fieldWrapper = {
        wrapField: e => new Rt({
            value: e
        }),
        unwrapField: e => e.value
    };
    const Jt = class e extends _ {
        constructor(e) {
            super(), this.value = 0, Ce.util.initPartial(e, this)
        }
        toJson(e) {
            return Ce.json.writeScalar(v.FLOAT, this.value, !0)
        }
        fromJson(e, n) {
            try {
                this.value = Ce.json.readScalar(v.FLOAT, e)
            } catch (e) {
                let n = 'cannot decode message google.protobuf.FloatValue from JSON"';
                throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n)
            }
            return this
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Jt.runtime = Ce, Jt.typeName = "google.protobuf.FloatValue", Jt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "value",
        kind: "scalar",
        T: 2
    }]), Jt.fieldWrapper = {
        wrapField: e => new Jt({
            value: e
        }),
        unwrapField: e => e.value
    };
    const vt = class e extends _ {
        constructor(e) {
            super(), this.value = J.zero, Ce.util.initPartial(e, this)
        }
        toJson(e) {
            return Ce.json.writeScalar(v.INT64, this.value, !0)
        }
        fromJson(e, n) {
            try {
                this.value = Ce.json.readScalar(v.INT64, e)
            } catch (e) {
                let n = 'cannot decode message google.protobuf.Int64Value from JSON"';
                throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n)
            }
            return this
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    vt.runtime = Ce, vt.typeName = "google.protobuf.Int64Value", vt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "value",
        kind: "scalar",
        T: 3
    }]), vt.fieldWrapper = {
        wrapField: e => new vt({
            value: e
        }),
        unwrapField: e => e.value
    };
    const Dt = class e extends _ {
        constructor(e) {
            super(), this.value = J.zero, Ce.util.initPartial(e, this)
        }
        toJson(e) {
            return Ce.json.writeScalar(v.UINT64, this.value, !0)
        }
        fromJson(e, n) {
            try {
                this.value = Ce.json.readScalar(v.UINT64, e)
            } catch (e) {
                let n = 'cannot decode message google.protobuf.UInt64Value from JSON"';
                throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n)
            }
            return this
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Dt.runtime = Ce, Dt.typeName = "google.protobuf.UInt64Value", Dt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "value",
        kind: "scalar",
        T: 4
    }]), Dt.fieldWrapper = {
        wrapField: e => new Dt({
            value: e
        }),
        unwrapField: e => e.value
    };
    const bt = class e extends _ {
        constructor(e) {
            super(), this.value = 0, Ce.util.initPartial(e, this)
        }
        toJson(e) {
            return Ce.json.writeScalar(v.INT32, this.value, !0)
        }
        fromJson(e, n) {
            try {
                this.value = Ce.json.readScalar(v.INT32, e)
            } catch (e) {
                let n = 'cannot decode message google.protobuf.Int32Value from JSON"';
                throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n)
            }
            return this
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    bt.runtime = Ce, bt.typeName = "google.protobuf.Int32Value", bt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "value",
        kind: "scalar",
        T: 5
    }]), bt.fieldWrapper = {
        wrapField: e => new bt({
            value: e
        }),
        unwrapField: e => e.value
    };
    const Pt = class e extends _ {
        constructor(e) {
            super(), this.value = 0, Ce.util.initPartial(e, this)
        }
        toJson(e) {
            return Ce.json.writeScalar(v.UINT32, this.value, !0)
        }
        fromJson(e, n) {
            try {
                this.value = Ce.json.readScalar(v.UINT32, e)
            } catch (e) {
                let n = 'cannot decode message google.protobuf.UInt32Value from JSON"';
                throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n)
            }
            return this
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Pt.runtime = Ce, Pt.typeName = "google.protobuf.UInt32Value", Pt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "value",
        kind: "scalar",
        T: 13
    }]), Pt.fieldWrapper = {
        wrapField: e => new Pt({
            value: e
        }),
        unwrapField: e => e.value
    };
    const Ft = class e extends _ {
        constructor(e) {
            super(), this.value = !1, Ce.util.initPartial(e, this)
        }
        toJson(e) {
            return Ce.json.writeScalar(v.BOOL, this.value, !0)
        }
        fromJson(e, n) {
            try {
                this.value = Ce.json.readScalar(v.BOOL, e)
            } catch (e) {
                let n = 'cannot decode message google.protobuf.BoolValue from JSON"';
                throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n)
            }
            return this
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Ft.runtime = Ce, Ft.typeName = "google.protobuf.BoolValue", Ft.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "value",
        kind: "scalar",
        T: 8
    }]), Ft.fieldWrapper = {
        wrapField: e => new Ft({
            value: e
        }),
        unwrapField: e => e.value
    };
    const Lt = class e extends _ {
        constructor(e) {
            super(), this.value = "", Ce.util.initPartial(e, this)
        }
        toJson(e) {
            return Ce.json.writeScalar(v.STRING, this.value, !0)
        }
        fromJson(e, n) {
            try {
                this.value = Ce.json.readScalar(v.STRING, e)
            } catch (e) {
                let n = 'cannot decode message google.protobuf.StringValue from JSON"';
                throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n)
            }
            return this
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Lt.runtime = Ce, Lt.typeName = "google.protobuf.StringValue", Lt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "value",
        kind: "scalar",
        T: 9
    }]), Lt.fieldWrapper = {
        wrapField: e => new Lt({
            value: e
        }),
        unwrapField: e => e.value
    };
    const Bt = class e extends _ {
        constructor(e) {
            super(), this.value = new Uint8Array(0), Ce.util.initPartial(e, this)
        }
        toJson(e) {
            return Ce.json.writeScalar(v.BYTES, this.value, !0)
        }
        fromJson(e, n) {
            try {
                this.value = Ce.json.readScalar(v.BYTES, e)
            } catch (e) {
                let n = 'cannot decode message google.protobuf.BytesValue from JSON"';
                throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n)
            }
            return this
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Bt.runtime = Ce, Bt.typeName = "google.protobuf.BytesValue", Bt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "value",
        kind: "scalar",
        T: 12
    }]), Bt.fieldWrapper = {
        wrapField: e => new Bt({
            value: e
        }),
        unwrapField: e => e.value
    }, d(Nt);
    const At = class e extends _ {
        constructor(e) {
            super(), Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    At.runtime = Me, At.typeName = "google.protobuf.compiler.Version", At.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "major",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 2,
        name: "minor",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 3,
        name: "patch",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 4,
        name: "suffix",
        kind: "scalar",
        T: 9,
        opt: !0
    }]);
    let Ut = At;
    const Ct = class e extends _ {
        constructor(e) {
            super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    Ct.runtime = Me, Ct.typeName = "google.protobuf.compiler.CodeGeneratorRequest", Ct.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "file_to_generate",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 2,
        name: "parameter",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 15,
        name: "proto_file",
        kind: "message",
        T: Ye,
        repeated: !0
    }, {
        no: 17,
        name: "source_file_descriptors",
        kind: "message",
        T: Ye,
        repeated: !0
    }, {
        no: 3,
        name: "compiler_version",
        kind: "message",
        T: Ut,
        opt: !0
    }]);
    const Mt = class e extends _ {
        constructor(e) {
            super(), this.file = [], Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    Mt.runtime = Me, Mt.typeName = "google.protobuf.compiler.CodeGeneratorResponse", Mt.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "error",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 2,
        name: "supported_features",
        kind: "scalar",
        T: 4,
        opt: !0
    }, {
        no: 3,
        name: "minimum_edition",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 4,
        name: "maximum_edition",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 15,
        name: "file",
        kind: "message",
        T: Gt,
        repeated: !0
    }]);
    var qt = (e => (e[e.NONE = 0] = "NONE", e[e.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e[e.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS", e))(qt || {});
    Me.util.setEnumType(qt, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{
        no: 0,
        name: "FEATURE_NONE"
    }, {
        no: 1,
        name: "FEATURE_PROTO3_OPTIONAL"
    }, {
        no: 2,
        name: "FEATURE_SUPPORTS_EDITIONS"
    }]);
    const xt = class e extends _ {
        constructor(e) {
            super(), Me.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Me.util.equals(e, n, t)
        }
    };
    xt.runtime = Me, xt.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", xt.fields = Me.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 2,
        name: "insertion_point",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 15,
        name: "content",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 16,
        name: "generated_code_info",
        kind: "message",
        T: mt,
        opt: !0
    }]);
    let Gt = xt;
    const Yt = class e extends _ {
        constructor(e) {
            super(), this.fileName = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Yt.runtime = Ce, Yt.typeName = "google.protobuf.SourceContext", Yt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "file_name",
        kind: "scalar",
        T: 9
    }]);
    let Vt = Yt;
    var Kt = (e => (e[e.PROTO2 = 0] = "PROTO2", e[e.PROTO3 = 1] = "PROTO3", e[e.EDITIONS = 2] = "EDITIONS", e))(Kt || {});
    Ce.util.setEnumType(Kt, "google.protobuf.Syntax", [{
        no: 0,
        name: "SYNTAX_PROTO2"
    }, {
        no: 1,
        name: "SYNTAX_PROTO3"
    }, {
        no: 2,
        name: "SYNTAX_EDITIONS"
    }]);
    const Wt = class e extends _ {
        constructor(e) {
            super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = 0, this.edition = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Wt.runtime = Ce, Wt.typeName = "google.protobuf.Type", Wt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "fields",
        kind: "message",
        T: Xt,
        repeated: !0
    }, {
        no: 3,
        name: "oneofs",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 4,
        name: "options",
        kind: "message",
        T: nr,
        repeated: !0
    }, {
        no: 5,
        name: "source_context",
        kind: "message",
        T: Vt
    }, {
        no: 6,
        name: "syntax",
        kind: "enum",
        T: Ce.getEnumType(Kt)
    }, {
        no: 7,
        name: "edition",
        kind: "scalar",
        T: 9
    }]);
    const jt = class e extends _ {
        constructor(e) {
            super(), this.kind = 0, this.cardinality = 0, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = !1, this.options = [], this.jsonName = "", this.defaultValue = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    jt.runtime = Ce, jt.typeName = "google.protobuf.Field", jt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "kind",
        kind: "enum",
        T: Ce.getEnumType($t)
    }, {
        no: 2,
        name: "cardinality",
        kind: "enum",
        T: Ce.getEnumType(Ht)
    }, {
        no: 3,
        name: "number",
        kind: "scalar",
        T: 5
    }, {
        no: 4,
        name: "name",
        kind: "scalar",
        T: 9
    }, {
        no: 6,
        name: "type_url",
        kind: "scalar",
        T: 9
    }, {
        no: 7,
        name: "oneof_index",
        kind: "scalar",
        T: 5
    }, {
        no: 8,
        name: "packed",
        kind: "scalar",
        T: 8
    }, {
        no: 9,
        name: "options",
        kind: "message",
        T: nr,
        repeated: !0
    }, {
        no: 10,
        name: "json_name",
        kind: "scalar",
        T: 9
    }, {
        no: 11,
        name: "default_value",
        kind: "scalar",
        T: 9
    }]);
    let Xt = jt;
    var $t = (e => (e[e.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e[e.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e[e.TYPE_FLOAT = 2] = "TYPE_FLOAT", e[e.TYPE_INT64 = 3] = "TYPE_INT64", e[e.TYPE_UINT64 = 4] = "TYPE_UINT64", e[e.TYPE_INT32 = 5] = "TYPE_INT32", e[e.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e[e.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e[e.TYPE_BOOL = 8] = "TYPE_BOOL", e[e.TYPE_STRING = 9] = "TYPE_STRING", e[e.TYPE_GROUP = 10] = "TYPE_GROUP", e[e.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e[e.TYPE_BYTES = 12] = "TYPE_BYTES", e[e.TYPE_UINT32 = 13] = "TYPE_UINT32", e[e.TYPE_ENUM = 14] = "TYPE_ENUM", e[e.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e[e.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e[e.TYPE_SINT32 = 17] = "TYPE_SINT32", e[e.TYPE_SINT64 = 18] = "TYPE_SINT64", e))($t || {});
    Ce.util.setEnumType($t, "google.protobuf.Field.Kind", [{
        no: 0,
        name: "TYPE_UNKNOWN"
    }, {
        no: 1,
        name: "TYPE_DOUBLE"
    }, {
        no: 2,
        name: "TYPE_FLOAT"
    }, {
        no: 3,
        name: "TYPE_INT64"
    }, {
        no: 4,
        name: "TYPE_UINT64"
    }, {
        no: 5,
        name: "TYPE_INT32"
    }, {
        no: 6,
        name: "TYPE_FIXED64"
    }, {
        no: 7,
        name: "TYPE_FIXED32"
    }, {
        no: 8,
        name: "TYPE_BOOL"
    }, {
        no: 9,
        name: "TYPE_STRING"
    }, {
        no: 10,
        name: "TYPE_GROUP"
    }, {
        no: 11,
        name: "TYPE_MESSAGE"
    }, {
        no: 12,
        name: "TYPE_BYTES"
    }, {
        no: 13,
        name: "TYPE_UINT32"
    }, {
        no: 14,
        name: "TYPE_ENUM"
    }, {
        no: 15,
        name: "TYPE_SFIXED32"
    }, {
        no: 16,
        name: "TYPE_SFIXED64"
    }, {
        no: 17,
        name: "TYPE_SINT32"
    }, {
        no: 18,
        name: "TYPE_SINT64"
    }]);
    var Ht = (e => (e[e.UNKNOWN = 0] = "UNKNOWN", e[e.OPTIONAL = 1] = "OPTIONAL", e[e.REQUIRED = 2] = "REQUIRED", e[e.REPEATED = 3] = "REPEATED", e))(Ht || {});
    Ce.util.setEnumType(Ht, "google.protobuf.Field.Cardinality", [{
        no: 0,
        name: "CARDINALITY_UNKNOWN"
    }, {
        no: 1,
        name: "CARDINALITY_OPTIONAL"
    }, {
        no: 2,
        name: "CARDINALITY_REQUIRED"
    }, {
        no: 3,
        name: "CARDINALITY_REPEATED"
    }]);
    const Qt = class e extends _ {
        constructor(e) {
            super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = 0, this.edition = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Qt.runtime = Ce, Qt.typeName = "google.protobuf.Enum", Qt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "enumvalue",
        kind: "message",
        T: zt,
        repeated: !0
    }, {
        no: 3,
        name: "options",
        kind: "message",
        T: nr,
        repeated: !0
    }, {
        no: 4,
        name: "source_context",
        kind: "message",
        T: Vt
    }, {
        no: 5,
        name: "syntax",
        kind: "enum",
        T: Ce.getEnumType(Kt)
    }, {
        no: 6,
        name: "edition",
        kind: "scalar",
        T: 9
    }]);
    const Zt = class e extends _ {
        constructor(e) {
            super(), this.name = "", this.number = 0, this.options = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Zt.runtime = Ce, Zt.typeName = "google.protobuf.EnumValue", Zt.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "number",
        kind: "scalar",
        T: 5
    }, {
        no: 3,
        name: "options",
        kind: "message",
        T: nr,
        repeated: !0
    }]);
    let zt = Zt;
    const er = class e extends _ {
        constructor(e) {
            super(), this.name = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    er.runtime = Ce, er.typeName = "google.protobuf.Option", er.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "value",
        kind: "message",
        T: _t
    }]);
    let nr = er;
    const tr = class e extends _ {
        constructor(e) {
            super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = Kt.PROTO2, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    tr.runtime = Ce, tr.typeName = "google.protobuf.Api", tr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "methods",
        kind: "message",
        T: sr,
        repeated: !0
    }, {
        no: 3,
        name: "options",
        kind: "message",
        T: nr,
        repeated: !0
    }, {
        no: 4,
        name: "version",
        kind: "scalar",
        T: 9
    }, {
        no: 5,
        name: "source_context",
        kind: "message",
        T: Vt
    }, {
        no: 6,
        name: "mixins",
        kind: "message",
        T: ar,
        repeated: !0
    }, {
        no: 7,
        name: "syntax",
        kind: "enum",
        T: Ce.getEnumType(Kt)
    }]);
    const rr = class e extends _ {
        constructor(e) {
            super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = !1, this.responseTypeUrl = "", this.responseStreaming = !1, this.options = [], this.syntax = Kt.PROTO2, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    rr.runtime = Ce, rr.typeName = "google.protobuf.Method", rr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "request_type_url",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "request_streaming",
        kind: "scalar",
        T: 8
    }, {
        no: 4,
        name: "response_type_url",
        kind: "scalar",
        T: 9
    }, {
        no: 5,
        name: "response_streaming",
        kind: "scalar",
        T: 8
    }, {
        no: 6,
        name: "options",
        kind: "message",
        T: nr,
        repeated: !0
    }, {
        no: 7,
        name: "syntax",
        kind: "enum",
        T: Ce.getEnumType(Kt)
    }]);
    let sr = rr;
    const ir = class e extends _ {
        constructor(e) {
            super(), this.name = "", this.root = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    ir.runtime = Ce, ir.typeName = "google.protobuf.Mixin", ir.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "root",
        kind: "scalar",
        T: 9
    }]);
    let ar = ir;
    var or = (e => (e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.ERROR = 1] = "ERROR", e[e.WARNING = 2] = "WARNING", e[e.INFO = 3] = "INFO", e[e.HINT = 4] = "HINT", e[e.AI = 5] = "AI", e))(or || {});
    Ce.util.setEnumType(or, "aiserver.v1.LintSeverity", [{
        no: 0,
        name: "LINT_SEVERITY_UNSPECIFIED"
    }, {
        no: 1,
        name: "LINT_SEVERITY_ERROR"
    }, {
        no: 2,
        name: "LINT_SEVERITY_WARNING"
    }, {
        no: 3,
        name: "LINT_SEVERITY_INFO"
    }, {
        no: 4,
        name: "LINT_SEVERITY_HINT"
    }, {
        no: 5,
        name: "LINT_SEVERITY_AI"
    }]);
    var ur = (e => (e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.EDIT = 1] = "EDIT", e[e.GENERATE = 2] = "GENERATE", e[e.INLINE_LONG_COMPLETION = 3] = "INLINE_LONG_COMPLETION", e))(ur || {});
    Ce.util.setEnumType(ur, "aiserver.v1.FeatureType", [{
        no: 0,
        name: "FEATURE_TYPE_UNSPECIFIED"
    }, {
        no: 1,
        name: "FEATURE_TYPE_EDIT"
    }, {
        no: 2,
        name: "FEATURE_TYPE_GENERATE"
    }, {
        no: 3,
        name: "FEATURE_TYPE_INLINE_LONG_COMPLETION"
    }]);
    var lr = (e => (e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.VOYAGE_CODE_2 = 1] = "VOYAGE_CODE_2", e[e.TEXT_EMBEDDINGS_LARGE_3 = 2] = "TEXT_EMBEDDINGS_LARGE_3", e[e.QWEN_1_5B_CUSTOM = 3] = "QWEN_1_5B_CUSTOM", e[e.MOCK_CHUNKER_ERROR = 4] = "MOCK_CHUNKER_ERROR", e[e.QWEN_1_5B_0618_CUSTOM = 5] = "QWEN_1_5B_0618_CUSTOM", e[e.QWEN_1_5B_0618_FP8_MM_CUSTOM = 6] = "QWEN_1_5B_0618_FP8_MM_CUSTOM", e))(lr || {});
    Ce.util.setEnumType(lr, "aiserver.v1.EmbeddingModel", [{
        no: 0,
        name: "EMBEDDING_MODEL_UNSPECIFIED"
    }, {
        no: 1,
        name: "EMBEDDING_MODEL_VOYAGE_CODE_2"
    }, {
        no: 2,
        name: "EMBEDDING_MODEL_TEXT_EMBEDDINGS_LARGE_3"
    }, {
        no: 3,
        name: "EMBEDDING_MODEL_QWEN_1_5B_CUSTOM"
    }, {
        no: 4,
        name: "EMBEDDING_MODEL_MOCK_CHUNKER_ERROR"
    }, {
        no: 5,
        name: "EMBEDDING_MODEL_QWEN_1_5B_0618_CUSTOM"
    }, {
        no: 6,
        name: "EMBEDDING_MODEL_QWEN_1_5B_0618_FP8_MM_CUSTOM"
    }]);
    const mr = class e extends _ {
        constructor(e) {
            super(), this.line = 0, this.column = 0, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    mr.runtime = Ce, mr.typeName = "aiserver.v1.CursorPosition", mr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "line",
        kind: "scalar",
        T: 5
    }, {
        no: 2,
        name: "column",
        kind: "scalar",
        T: 5
    }]);
    let cr = mr;
    const dr = class e extends _ {
        constructor(e) {
            super(), this.totalmem = 0, this.freemem = 0, this.loadavg = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    dr.runtime = Ce, dr.typeName = "aiserver.v1.VscodeOSStatistics", dr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "totalmem",
        kind: "scalar",
        T: 1
    }, {
        no: 2,
        name: "freemem",
        kind: "scalar",
        T: 1
    }, {
        no: 3,
        name: "loadavg",
        kind: "scalar",
        T: 1,
        repeated: !0
    }]);
    const fr = class e extends _ {
        constructor(e) {
            super(), this.type = "", this.release = "", this.arch = "", this.platform = "", this.cpus = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    fr.runtime = Ce, fr.typeName = "aiserver.v1.VscodeOSProperties", fr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "type",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "release",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "arch",
        kind: "scalar",
        T: 9
    }, {
        no: 4,
        name: "platform",
        kind: "scalar",
        T: 9
    }, {
        no: 5,
        name: "cpus",
        kind: "message",
        T: pr,
        repeated: !0
    }]);
    const Tr = class e extends _ {
        constructor(e) {
            super(), this.model = "", this.speed = 0, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Tr.runtime = Ce, Tr.typeName = "aiserver.v1.VscodeCPUProperties", Tr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "model",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "speed",
        kind: "scalar",
        T: 1
    }]);
    let pr = Tr;
    const Er = class e extends _ {
        constructor(e) {
            super(), this.workspaceUris = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Er.runtime = Ce, Er.typeName = "aiserver.v1.EnvironmentInfo", Er.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "exthost_platform",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 2,
        name: "exthost_arch",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 3,
        name: "exthost_release",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 4,
        name: "exthost_shell",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 5,
        name: "local_timestamp",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 6,
        name: "workspace_uris",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 7,
        name: "cursor_version",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 8,
        name: "is_remote",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 9,
        name: "local_os_type",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 10,
        name: "home_directory",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 11,
        name: "local_timezone",
        kind: "scalar",
        T: 9,
        opt: !0
    }]);
    const _r = class e extends _ {
        constructor(e) {
            super(), this.selectionStartLineNumber = 0, this.selectionStartColumn = 0, this.positionLineNumber = 0, this.positionColumn = 0, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    _r.runtime = Ce, _r.typeName = "aiserver.v1.SelectionWithOrientation", _r.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "selection_start_line_number",
        kind: "scalar",
        T: 5
    }, {
        no: 2,
        name: "selection_start_column",
        kind: "scalar",
        T: 5
    }, {
        no: 3,
        name: "position_line_number",
        kind: "scalar",
        T: 5
    }, {
        no: 4,
        name: "position_column",
        kind: "scalar",
        T: 5
    }]);
    const gr = class e extends _ {
        constructor(e) {
            super(), this.cwd = "", this.ref = "", this.baseRef = "", this.mergeBase = !1, this.targetPaths = [], this.maxUntrackedFiles = 0, this.submoduleRecurseDepth = 0, this.includeSpaceChanges = !1, this.committedOnly = !1, this.computePatchId = !1, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    gr.runtime = Ce, gr.typeName = "aiserver.v1.GetDiffRequest", gr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "cwd",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "ref",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "base_ref",
        kind: "scalar",
        T: 9
    }, {
        no: 4,
        name: "merge_base",
        kind: "scalar",
        T: 8
    }, {
        no: 5,
        name: "target_paths",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 6,
        name: "unified_context_lines",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 7,
        name: "max_untracked_files",
        kind: "scalar",
        T: 5
    }, {
        no: 9,
        name: "submodule_recurse_depth",
        kind: "scalar",
        T: 5
    }, {
        no: 10,
        name: "include_space_changes",
        kind: "scalar",
        T: 8
    }, {
        no: 11,
        name: "committed_only",
        kind: "scalar",
        T: 8
    }, {
        no: 12,
        name: "compute_patch_id",
        kind: "scalar",
        T: 8
    }, {
        no: 13,
        name: "return_head_sha",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 14,
        name: "max_response_bytes",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 8,
        name: "output_format",
        kind: "enum",
        T: Ce.getEnumType(hr),
        opt: !0
    }]);
    var hr = (e => (e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.NAME_STATUS = 1] = "NAME_STATUS", e[e.NAME_STATUS_AND_NUMSTAT = 2] = "NAME_STATUS_AND_NUMSTAT", e[e.FILE_DIFFS = 3] = "FILE_DIFFS", e[e.DIFFS_WITH_BEFORE_AND_AFTER = 4] = "DIFFS_WITH_BEFORE_AND_AFTER", e))(hr || {});
    Ce.util.setEnumType(hr, "aiserver.v1.GetDiffRequest.OutputFormat", [{
        no: 0,
        name: "OUTPUT_FORMAT_UNSPECIFIED"
    }, {
        no: 1,
        name: "OUTPUT_FORMAT_NAME_STATUS"
    }, {
        no: 2,
        name: "OUTPUT_FORMAT_NAME_STATUS_AND_NUMSTAT"
    }, {
        no: 3,
        name: "OUTPUT_FORMAT_FILE_DIFFS"
    }, {
        no: 4,
        name: "OUTPUT_FORMAT_DIFFS_WITH_BEFORE_AND_AFTER"
    }]);
    const Nr = class e extends _ {
        constructor(e) {
            super(), this.submoduleDiffs = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Nr.runtime = Ce, Nr.typeName = "aiserver.v1.GetDiffResponse", Nr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "diff",
        kind: "message",
        T: Rr
    }, {
        no: 2,
        name: "submodule_diffs",
        kind: "message",
        T: yr,
        repeated: !0
    }, {
        no: 3,
        name: "patch_id",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 4,
        name: "head_sha",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 5,
        name: "has_uncommitted_changes",
        kind: "scalar",
        T: 8,
        opt: !0
    }]);
    const wr = class e extends _ {
        constructor(e) {
            super(), this.relativePath = "", this.errored = !1, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    wr.runtime = Ce, wr.typeName = "aiserver.v1.GetDiffResponse.SubmoduleDiff", wr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "relative_path",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "diff",
        kind: "message",
        T: Rr
    }, {
        no: 3,
        name: "errored",
        kind: "scalar",
        T: 8
    }]);
    let yr = wr;
    const Sr = class e extends _ {
        constructor(e) {
            super(), this.startLine = 0, this.endLineInclusive = 0, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Sr.runtime = Ce, Sr.typeName = "aiserver.v1.SimplestRange", Sr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "start_line",
        kind: "scalar",
        T: 5
    }, {
        no: 2,
        name: "end_line_inclusive",
        kind: "scalar",
        T: 5
    }]);
    let Ir = Sr;
    const kr = class e extends _ {
        constructor(e) {
            super(), this.original = [], this.modified = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    kr.runtime = Ce, kr.typeName = "aiserver.v1.ComputeLinesDiffOriginalAndModified", kr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "original",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 2,
        name: "modified",
        kind: "scalar",
        T: 9,
        repeated: !0
    }]);
    const Or = class e extends _ {
        constructor(e) {
            super(), this.diffs = [], this.diffType = 0, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Or.runtime = Ce, Or.typeName = "aiserver.v1.GitDiff", Or.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "diffs",
        kind: "message",
        T: Dr,
        repeated: !0
    }, {
        no: 2,
        name: "diff_type",
        kind: "enum",
        T: Ce.getEnumType(Jr)
    }]);
    let Rr = Or;
    var Jr = (e => (e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.DIFF_TO_HEAD = 1] = "DIFF_TO_HEAD", e[e.DIFF_FROM_BRANCH_TO_MAIN = 2] = "DIFF_FROM_BRANCH_TO_MAIN", e))(Jr || {});
    Ce.util.setEnumType(Jr, "aiserver.v1.GitDiff.DiffType", [{
        no: 0,
        name: "DIFF_TYPE_UNSPECIFIED"
    }, {
        no: 1,
        name: "DIFF_TYPE_DIFF_TO_HEAD"
    }, {
        no: 2,
        name: "DIFF_TYPE_DIFF_FROM_BRANCH_TO_MAIN"
    }]);
    const vr = class e extends _ {
        constructor(e) {
            super(), this.added = 0, this.removed = 0, this.from = "", this.to = "", this.chunks = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    vr.runtime = Ce, vr.typeName = "aiserver.v1.FileDiff", vr.fields = Ce.util.newFieldList(() => [{
        no: 4,
        name: "added",
        kind: "scalar",
        T: 5
    }, {
        no: 5,
        name: "removed",
        kind: "scalar",
        T: 5
    }, {
        no: 1,
        name: "from",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "to",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "chunks",
        kind: "message",
        T: Pr,
        repeated: !0
    }, {
        no: 6,
        name: "before_file_contents",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 7,
        name: "after_file_contents",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 8,
        name: "is_generated",
        kind: "scalar",
        T: 8,
        opt: !0
    }]);
    let Dr = vr;
    const br = class e extends _ {
        constructor(e) {
            super(), this.content = "", this.lines = [], this.oldStart = 0, this.oldLines = 0, this.newStart = 0, this.newLines = 0, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    br.runtime = Ce, br.typeName = "aiserver.v1.FileDiff.Chunk", br.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "content",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "lines",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 3,
        name: "old_start",
        kind: "scalar",
        T: 5
    }, {
        no: 4,
        name: "old_lines",
        kind: "scalar",
        T: 5
    }, {
        no: 5,
        name: "new_start",
        kind: "scalar",
        T: 5
    }, {
        no: 6,
        name: "new_lines",
        kind: "scalar",
        T: 5
    }]);
    let Pr = br;
    const Fr = class e extends _ {
        constructor(e) {
            super(), this.startLineNumber = 0, this.startColumn = 0, this.endLineNumberInclusive = 0, this.endColumn = 0, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Fr.runtime = Ce, Fr.typeName = "aiserver.v1.SimpleRange", Fr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "start_line_number",
        kind: "scalar",
        T: 5
    }, {
        no: 2,
        name: "start_column",
        kind: "scalar",
        T: 5
    }, {
        no: 3,
        name: "end_line_number_inclusive",
        kind: "scalar",
        T: 5
    }, {
        no: 4,
        name: "end_column",
        kind: "scalar",
        T: 5
    }]);
    let Lr = Fr;
    const Br = class e extends _ {
        constructor(e) {
            super(), this.relativeWorkspacePath = "", this.chunkHash = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Br.runtime = Ce, Br.typeName = "aiserver.v1.SimpleFileChunk", Br.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "relative_workspace_path",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "range",
        kind: "message",
        T: Ir
    }, {
        no: 3,
        name: "chunk_hash",
        kind: "scalar",
        T: 9
    }]);
    const Ar = class e extends _ {
        constructor(e) {
            super(), this.remoteUrl = "", this.commitId = "", this.gitPatch = "", this.unsavedFiles = [], this.unixTimestampMs = 0, this.openEditors = [], this.fileDiffHistories = [], this.branchName = "", this.branchNotes = "", this.branchNotesRich = "", this.globalNotes = "", this.pastThoughts = [], this.baseBranchName = "", this.baseBranchCommitId = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Ar.runtime = Ce, Ar.typeName = "aiserver.v1.CmdKDebugInfo", Ar.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "remote_url",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "commit_id",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "git_patch",
        kind: "scalar",
        T: 9
    }, {
        no: 4,
        name: "unsaved_files",
        kind: "message",
        T: Cr,
        repeated: !0
    }, {
        no: 5,
        name: "unix_timestamp_ms",
        kind: "scalar",
        T: 1
    }, {
        no: 6,
        name: "open_editors",
        kind: "message",
        T: qr,
        repeated: !0
    }, {
        no: 7,
        name: "file_diff_histories",
        kind: "message",
        T: Gr,
        repeated: !0
    }, {
        no: 8,
        name: "branch_name",
        kind: "scalar",
        T: 9
    }, {
        no: 9,
        name: "branch_notes",
        kind: "scalar",
        T: 9
    }, {
        no: 12,
        name: "branch_notes_rich",
        kind: "scalar",
        T: 9
    }, {
        no: 10,
        name: "global_notes",
        kind: "scalar",
        T: 9
    }, {
        no: 11,
        name: "past_thoughts",
        kind: "message",
        T: Vr,
        repeated: !0
    }, {
        no: 13,
        name: "base_branch_name",
        kind: "scalar",
        T: 9
    }, {
        no: 14,
        name: "base_branch_commit_id",
        kind: "scalar",
        T: 9
    }]);
    const Ur = class e extends _ {
        constructor(e) {
            super(), this.relativeWorkspacePath = "", this.contents = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Ur.runtime = Ce, Ur.typeName = "aiserver.v1.CmdKDebugInfo.UnsavedFiles", Ur.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "relative_workspace_path",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "contents",
        kind: "scalar",
        T: 9
    }]);
    let Cr = Ur;
    const Mr = class e extends _ {
        constructor(e) {
            super(), this.relativeWorkspacePath = "", this.editorGroupIndex = 0, this.editorGroupId = 0, this.isActive = !1, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Mr.runtime = Ce, Mr.typeName = "aiserver.v1.CmdKDebugInfo.OpenEditor", Mr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "relative_workspace_path",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "editor_group_index",
        kind: "scalar",
        T: 5
    }, {
        no: 3,
        name: "editor_group_id",
        kind: "scalar",
        T: 5
    }, {
        no: 4,
        name: "is_active",
        kind: "scalar",
        T: 8
    }]);
    let qr = Mr;
    const xr = class e extends _ {
        constructor(e) {
            super(), this.fileName = "", this.diffHistory = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    xr.runtime = Ce, xr.typeName = "aiserver.v1.CmdKDebugInfo.CppFileDiffHistory", xr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "file_name",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "diff_history",
        kind: "scalar",
        T: 9,
        repeated: !0
    }]);
    let Gr = xr;
    const Yr = class e extends _ {
        constructor(e) {
            super(), this.text = "", this.timeInUnixSeconds = 0, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Yr.runtime = Ce, Yr.typeName = "aiserver.v1.CmdKDebugInfo.PastThought", Yr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "text",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "time_in_unix_seconds",
        kind: "scalar",
        T: 1
    }]);
    let Vr = Yr;
    const Kr = class e extends _ {
        constructor(e) {
            super(), this.startLineNumber = 0, this.endLineNumberInclusive = 0, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Kr.runtime = Ce, Kr.typeName = "aiserver.v1.LineRange", Kr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "start_line_number",
        kind: "scalar",
        T: 5
    }, {
        no: 2,
        name: "end_line_number_inclusive",
        kind: "scalar",
        T: 5
    }]);
    const Wr = class e extends _ {
        constructor(e) {
            super(), Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Wr.runtime = Ce, Wr.typeName = "aiserver.v1.CursorRange", Wr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "start_position",
        kind: "message",
        T: cr
    }, {
        no: 2,
        name: "end_position",
        kind: "message",
        T: cr
    }]);
    let jr = Wr;
    const Xr = class e extends _ {
        constructor(e) {
            super(), this.text = "", this.lineNumber = 0, this.isSignature = !1, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Xr.runtime = Ce, Xr.typeName = "aiserver.v1.DetailedLine", Xr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "text",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "line_number",
        kind: "scalar",
        T: 2
    }, {
        no: 3,
        name: "is_signature",
        kind: "scalar",
        T: 8
    }]);
    let $r = Xr;
    const Hr = class e extends _ {
        constructor(e) {
            super(), this.relativeWorkspacePath = "", this.contents = "", this.detailedLines = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Hr.runtime = Ce, Hr.typeName = "aiserver.v1.CodeBlock", Hr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "relative_workspace_path",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "file_contents",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 9,
        name: "file_contents_length",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 3,
        name: "range",
        kind: "message",
        T: jr
    }, {
        no: 4,
        name: "contents",
        kind: "scalar",
        T: 9
    }, {
        no: 5,
        name: "signatures",
        kind: "message",
        T: Zr
    }, {
        no: 6,
        name: "override_contents",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 7,
        name: "original_contents",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 8,
        name: "detailed_lines",
        kind: "message",
        T: $r,
        repeated: !0
    }, {
        no: 10,
        name: "file_git_context",
        kind: "message",
        T: ts
    }]);
    const Qr = class e extends _ {
        constructor(e) {
            super(), this.ranges = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Qr.runtime = Ce, Qr.typeName = "aiserver.v1.CodeBlock.Signatures", Qr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "ranges",
        kind: "message",
        T: jr,
        repeated: !0
    }]);
    let Zr = Qr;
    const zr = class e extends _ {
        constructor(e) {
            super(), this.commit = "", this.author = "", this.date = "", this.message = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    zr.runtime = Ce, zr.typeName = "aiserver.v1.GitCommit", zr.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "commit",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "author",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "date",
        kind: "scalar",
        T: 9
    }, {
        no: 4,
        name: "message",
        kind: "scalar",
        T: 9
    }]);
    let es = zr;
    const ns = class e extends _ {
        constructor(e) {
            super(), this.commits = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    ns.runtime = Ce, ns.typeName = "aiserver.v1.FileGit", ns.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "commits",
        kind: "message",
        T: es,
        repeated: !0
    }]);
    let ts = ns;
    const rs = class e extends _ {
        constructor(e) {
            super(), this.relativeWorkspacePath = "", this.contents = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    rs.runtime = Ce, rs.typeName = "aiserver.v1.File", rs.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "relative_workspace_path",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "contents",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "file_git_context",
        kind: "message",
        T: ts
    }]);
    const ss = class e extends _ {
        constructor(e) {
            super(), this.message = "", this.severity = 0, this.relatedInformation = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    ss.runtime = Ce, ss.typeName = "aiserver.v1.Diagnostic", ss.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "message",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "range",
        kind: "message",
        T: jr
    }, {
        no: 3,
        name: "severity",
        kind: "enum",
        T: Ce.getEnumType(as)
    }, {
        no: 4,
        name: "related_information",
        kind: "message",
        T: us,
        repeated: !0
    }]);
    let is = ss;
    var as = (e => (e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.ERROR = 1] = "ERROR", e[e.WARNING = 2] = "WARNING", e[e.INFORMATION = 3] = "INFORMATION", e[e.HINT = 4] = "HINT", e))(as || {});
    Ce.util.setEnumType(as, "aiserver.v1.Diagnostic.DiagnosticSeverity", [{
        no: 0,
        name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED"
    }, {
        no: 1,
        name: "DIAGNOSTIC_SEVERITY_ERROR"
    }, {
        no: 2,
        name: "DIAGNOSTIC_SEVERITY_WARNING"
    }, {
        no: 3,
        name: "DIAGNOSTIC_SEVERITY_INFORMATION"
    }, {
        no: 4,
        name: "DIAGNOSTIC_SEVERITY_HINT"
    }]);
    const os = class e extends _ {
        constructor(e) {
            super(), this.message = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    os.runtime = Ce, os.typeName = "aiserver.v1.Diagnostic.RelatedInformation", os.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "message",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "range",
        kind: "message",
        T: jr
    }]);
    let us = os;
    const ls = class e extends _ {
        constructor(e) {
            super(), this.message = "", this.severity = 0, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    ls.runtime = Ce, ls.typeName = "aiserver.v1.Lint", ls.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "message",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "range",
        kind: "message",
        T: Lr
    }, {
        no: 3,
        name: "severity",
        kind: "enum",
        T: Ce.getEnumType(or)
    }]);
    const ms = class e extends _ {
        constructor(e) {
            super(), this.content = "", this.score = 0, this.relativePath = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    ms.runtime = Ce, ms.typeName = "aiserver.v1.BM25Chunk", ms.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "content",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "range",
        kind: "message",
        T: Ir
    }, {
        no: 3,
        name: "score",
        kind: "scalar",
        T: 5
    }, {
        no: 4,
        name: "relative_path",
        kind: "scalar",
        T: 9
    }]);
    let cs = ms;
    const ds = class e extends _ {
        constructor(e) {
            super(), this.relativeWorkspacePath = "", this.contents = "", this.relyOnFilesync = !1, this.cells = [], this.topChunks = [], this.contentsStartAtLine = 0, this.dataframes = [], this.totalNumberOfLines = 0, this.languageId = "", this.diagnostics = [], this.cellStartLines = [], this.workspaceRootPath = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    ds.runtime = Ce, ds.typeName = "aiserver.v1.CurrentFileInfo", ds.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "relative_workspace_path",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "contents",
        kind: "scalar",
        T: 9
    }, {
        no: 18,
        name: "rely_on_filesync",
        kind: "scalar",
        T: 8
    }, {
        no: 17,
        name: "sha_256_hash",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 16,
        name: "cells",
        kind: "message",
        T: Ts,
        repeated: !0
    }, {
        no: 10,
        name: "top_chunks",
        kind: "message",
        T: cs,
        repeated: !0
    }, {
        no: 9,
        name: "contents_start_at_line",
        kind: "scalar",
        T: 5
    }, {
        no: 3,
        name: "cursor_position",
        kind: "message",
        T: cr
    }, {
        no: 4,
        name: "dataframes",
        kind: "message",
        T: ys,
        repeated: !0
    }, {
        no: 8,
        name: "total_number_of_lines",
        kind: "scalar",
        T: 5
    }, {
        no: 5,
        name: "language_id",
        kind: "scalar",
        T: 9
    }, {
        no: 6,
        name: "selection",
        kind: "message",
        T: jr
    }, {
        no: 11,
        name: "alternative_version_id",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 7,
        name: "diagnostics",
        kind: "message",
        T: is,
        repeated: !0
    }, {
        no: 14,
        name: "file_version",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 15,
        name: "cell_start_lines",
        kind: "scalar",
        T: 5,
        repeated: !0
    }, {
        no: 19,
        name: "workspace_root_path",
        kind: "scalar",
        T: 9
    }, {
        no: 20,
        name: "line_ending",
        kind: "scalar",
        T: 9,
        opt: !0
    }]);
    const fs = class e extends _ {
        constructor(e) {
            super(), Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    fs.runtime = Ce, fs.typeName = "aiserver.v1.CurrentFileInfo.NotebookCell", fs.fields = Ce.util.newFieldList(() => []);
    let Ts = fs;
    const ps = class e extends _ {
        constructor(e) {
            super(), this.apiKey = "", this.baseUrl = "", this.deployment = "", this.useAzure = !1, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    ps.runtime = Ce, ps.typeName = "aiserver.v1.AzureState", ps.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "api_key",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "base_url",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "deployment",
        kind: "scalar",
        T: 9
    }, {
        no: 4,
        name: "use_azure",
        kind: "scalar",
        T: 8
    }]);
    let Es = ps;
    const _s = class e extends _ {
        constructor(e) {
            super(), this.accessKey = "", this.secretKey = "", this.region = "", this.useBedrock = !1, this.sessionToken = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    _s.runtime = Ce, _s.typeName = "aiserver.v1.BedrockState", _s.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "access_key",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "secret_key",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "region",
        kind: "scalar",
        T: 9
    }, {
        no: 4,
        name: "use_bedrock",
        kind: "scalar",
        T: 8
    }, {
        no: 5,
        name: "session_token",
        kind: "scalar",
        T: 9
    }]);
    let gs = _s;
    const hs = class e extends _ {
        constructor(e) {
            super(), Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    hs.runtime = Ce, hs.typeName = "aiserver.v1.ModelDetails", hs.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "model_name",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 2,
        name: "api_key",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 3,
        name: "enable_ghost_mode",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 4,
        name: "azure_state",
        kind: "message",
        T: Es,
        opt: !0
    }, {
        no: 5,
        name: "enable_slow_pool",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 6,
        name: "openai_api_base_url",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 7,
        name: "bedrock_state",
        kind: "message",
        T: gs,
        opt: !0
    }, {
        no: 8,
        name: "max_mode",
        kind: "scalar",
        T: 8,
        opt: !0
    }]);
    const Ns = class e extends _ {
        constructor(e) {
            super(), this.modelName = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Ns.runtime = Ce, Ns.typeName = "aiserver.v1.ModelInfo", Ns.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "model_name",
        kind: "scalar",
        T: 9
    }]);
    const ws = class e extends _ {
        constructor(e) {
            super(), this.name = "", this.shape = "", this.dataDimensionality = 0, this.columns = [], this.rowCount = 0, this.indexColumn = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    ws.runtime = Ce, ws.typeName = "aiserver.v1.DataframeInfo", ws.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "shape",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "data_dimensionality",
        kind: "scalar",
        T: 5
    }, {
        no: 6,
        name: "columns",
        kind: "message",
        T: Is,
        repeated: !0
    }, {
        no: 7,
        name: "row_count",
        kind: "scalar",
        T: 5
    }, {
        no: 8,
        name: "index_column",
        kind: "scalar",
        T: 9
    }]);
    let ys = ws;
    const Ss = class e extends _ {
        constructor(e) {
            super(), this.key = "", this.type = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Ss.runtime = Ce, Ss.typeName = "aiserver.v1.DataframeInfo.Column", Ss.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "key",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "type",
        kind: "scalar",
        T: 9
    }]);
    let Is = Ss;
    const ks = class e extends _ {
        constructor(e) {
            super(), this.message = "", this.relatedInformation = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    ks.runtime = Ce, ks.typeName = "aiserver.v1.LinterError", ks.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "message",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "range",
        kind: "message",
        T: jr
    }, {
        no: 3,
        name: "source",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 4,
        name: "related_information",
        kind: "message",
        T: us,
        repeated: !0
    }, {
        no: 5,
        name: "severity",
        kind: "enum",
        T: Ce.getEnumType(as),
        opt: !0
    }, {
        no: 6,
        name: "is_stale",
        kind: "scalar",
        T: 8,
        opt: !0
    }]);
    let Os = ks;
    const Rs = class e extends _ {
        constructor(e) {
            super(), this.relativeWorkspacePath = "", this.errors = [], this.fileContents = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Rs.runtime = Ce, Rs.typeName = "aiserver.v1.LinterErrors", Rs.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "relative_workspace_path",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "errors",
        kind: "message",
        T: Os,
        repeated: !0
    }, {
        no: 3,
        name: "file_contents",
        kind: "scalar",
        T: 9
    }]);
    const Js = class e extends _ {
        constructor(e) {
            super(), this.relativeWorkspacePath = "", this.errors = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Js.runtime = Ce, Js.typeName = "aiserver.v1.LinterErrorsWithoutFileContents", Js.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "relative_workspace_path",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "errors",
        kind: "message",
        T: Os,
        repeated: !0
    }]);
    const vs = class e extends _ {
        constructor(e) {
            super(), this.name = "", this.description = "", this.environments = [], this.disabledEnvironments = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    vs.runtime = Ce, vs.typeName = "aiserver.v1.CursorRule", vs.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "description",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "body",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 4,
        name: "is_from_glob",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 5,
        name: "always_apply",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 6,
        name: "attach_to_background_agents",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 7,
        name: "full_path",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 8,
        name: "environments",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 9,
        name: "disabled_environments",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 10,
        name: "plugin",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 11,
        name: "marketplace",
        kind: "scalar",
        T: 9,
        opt: !0
    }]);
    let Ds = vs;
    const bs = class e extends _ {
        constructor(e) {
            super(), this.context = "", this.rules = [], this.mcpInstructions = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    bs.runtime = Ce, bs.typeName = "aiserver.v1.ExplicitContext", bs.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "context",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "repo_context",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 3,
        name: "rules",
        kind: "message",
        T: Ds,
        repeated: !0
    }, {
        no: 4,
        name: "mode_specific_context",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 5,
        name: "mcp_instructions",
        kind: "message",
        T: Fs,
        repeated: !0
    }]);
    const Ps = class e extends _ {
        constructor(e) {
            super(), this.serverName = "", this.serverIdentifier = "", this.instructions = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Ps.runtime = Ce, Ps.typeName = "aiserver.v1.MCPInstructions", Ps.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "server_name",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "server_identifier",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "instructions",
        kind: "scalar",
        T: 9
    }]);
    let Fs = Ps;
    const Ls = class e extends _ {
        constructor(e) {
            super(), this.messageType = 0, this.content = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Ls.runtime = Ce, Ls.typeName = "aiserver.v1.PureMessage", Ls.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "message_type",
        kind: "enum",
        T: Ce.getEnumType(Bs)
    }, {
        no: 2,
        name: "content",
        kind: "scalar",
        T: 9
    }]);
    var Bs = (e => (e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.SYSTEM = 1] = "SYSTEM", e[e.USER = 2] = "USER", e[e.ASSISTANT = 3] = "ASSISTANT", e))(Bs || {});
    Ce.util.setEnumType(Bs, "aiserver.v1.PureMessage.MessageType", [{
        no: 0,
        name: "MESSAGE_TYPE_UNSPECIFIED"
    }, {
        no: 1,
        name: "MESSAGE_TYPE_SYSTEM"
    }, {
        no: 2,
        name: "MESSAGE_TYPE_USER"
    }, {
        no: 3,
        name: "MESSAGE_TYPE_ASSISTANT"
    }]);
    const As = class e extends _ {
        constructor(e) {
            super(), this.name = "", this.detail = "", this.kind = 0, this.containerName = "", this.children = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    As.runtime = Ce, As.typeName = "aiserver.v1.DocumentSymbol", As.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "detail",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "kind",
        kind: "enum",
        T: Ce.getEnumType(Cs)
    }, {
        no: 5,
        name: "container_name",
        kind: "scalar",
        T: 9
    }, {
        no: 6,
        name: "range",
        kind: "message",
        T: qs
    }, {
        no: 7,
        name: "selection_range",
        kind: "message",
        T: qs
    }, {
        no: 8,
        name: "children",
        kind: "message",
        T: As,
        repeated: !0
    }]);
    let Us = As;
    var Cs = (e => (e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.FILE = 1] = "FILE", e[e.MODULE = 2] = "MODULE", e[e.NAMESPACE = 3] = "NAMESPACE", e[e.PACKAGE = 4] = "PACKAGE", e[e.CLASS = 5] = "CLASS", e[e.METHOD = 6] = "METHOD", e[e.PROPERTY = 7] = "PROPERTY", e[e.FIELD = 8] = "FIELD", e[e.CONSTRUCTOR = 9] = "CONSTRUCTOR", e[e.ENUM = 10] = "ENUM", e[e.INTERFACE = 11] = "INTERFACE", e[e.FUNCTION = 12] = "FUNCTION", e[e.VARIABLE = 13] = "VARIABLE", e[e.CONSTANT = 14] = "CONSTANT", e[e.STRING = 15] = "STRING", e[e.NUMBER = 16] = "NUMBER", e[e.BOOLEAN = 17] = "BOOLEAN", e[e.ARRAY = 18] = "ARRAY", e[e.OBJECT = 19] = "OBJECT", e[e.KEY = 20] = "KEY", e[e.NULL = 21] = "NULL", e[e.ENUM_MEMBER = 22] = "ENUM_MEMBER", e[e.STRUCT = 23] = "STRUCT", e[e.EVENT = 24] = "EVENT", e[e.OPERATOR = 25] = "OPERATOR", e[e.TYPE_PARAMETER = 26] = "TYPE_PARAMETER", e))(Cs || {});
    Ce.util.setEnumType(Cs, "aiserver.v1.DocumentSymbol.SymbolKind", [{
        no: 0,
        name: "SYMBOL_KIND_UNSPECIFIED"
    }, {
        no: 1,
        name: "SYMBOL_KIND_FILE"
    }, {
        no: 2,
        name: "SYMBOL_KIND_MODULE"
    }, {
        no: 3,
        name: "SYMBOL_KIND_NAMESPACE"
    }, {
        no: 4,
        name: "SYMBOL_KIND_PACKAGE"
    }, {
        no: 5,
        name: "SYMBOL_KIND_CLASS"
    }, {
        no: 6,
        name: "SYMBOL_KIND_METHOD"
    }, {
        no: 7,
        name: "SYMBOL_KIND_PROPERTY"
    }, {
        no: 8,
        name: "SYMBOL_KIND_FIELD"
    }, {
        no: 9,
        name: "SYMBOL_KIND_CONSTRUCTOR"
    }, {
        no: 10,
        name: "SYMBOL_KIND_ENUM"
    }, {
        no: 11,
        name: "SYMBOL_KIND_INTERFACE"
    }, {
        no: 12,
        name: "SYMBOL_KIND_FUNCTION"
    }, {
        no: 13,
        name: "SYMBOL_KIND_VARIABLE"
    }, {
        no: 14,
        name: "SYMBOL_KIND_CONSTANT"
    }, {
        no: 15,
        name: "SYMBOL_KIND_STRING"
    }, {
        no: 16,
        name: "SYMBOL_KIND_NUMBER"
    }, {
        no: 17,
        name: "SYMBOL_KIND_BOOLEAN"
    }, {
        no: 18,
        name: "SYMBOL_KIND_ARRAY"
    }, {
        no: 19,
        name: "SYMBOL_KIND_OBJECT"
    }, {
        no: 20,
        name: "SYMBOL_KIND_KEY"
    }, {
        no: 21,
        name: "SYMBOL_KIND_NULL"
    }, {
        no: 22,
        name: "SYMBOL_KIND_ENUM_MEMBER"
    }, {
        no: 23,
        name: "SYMBOL_KIND_STRUCT"
    }, {
        no: 24,
        name: "SYMBOL_KIND_EVENT"
    }, {
        no: 25,
        name: "SYMBOL_KIND_OPERATOR"
    }, {
        no: 26,
        name: "SYMBOL_KIND_TYPE_PARAMETER"
    }]);
    const Ms = class e extends _ {
        constructor(e) {
            super(), this.startLineNumber = 0, this.startColumn = 0, this.endLineNumber = 0, this.endColumn = 0, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Ms.runtime = Ce, Ms.typeName = "aiserver.v1.DocumentSymbol.Range", Ms.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "start_line_number",
        kind: "scalar",
        T: 5
    }, {
        no: 2,
        name: "start_column",
        kind: "scalar",
        T: 5
    }, {
        no: 3,
        name: "end_line_number",
        kind: "scalar",
        T: 5
    }, {
        no: 4,
        name: "end_column",
        kind: "scalar",
        T: 5
    }]);
    let qs = Ms;
    const xs = class e extends _ {
        constructor(e) {
            super(), this.codeDetails = "", this.markdownBlocks = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    xs.runtime = Ce, xs.typeName = "aiserver.v1.HoverDetails", xs.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "code_details",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "markdown_blocks",
        kind: "scalar",
        T: 9,
        repeated: !0
    }]);
    const Gs = class e extends _ {
        constructor(e) {
            super(), this.scheme = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Gs.runtime = Ce, Gs.typeName = "aiserver.v1.UriComponents", Gs.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "scheme",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "authority",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 3,
        name: "path",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 4,
        name: "query",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 5,
        name: "fragment",
        kind: "scalar",
        T: 9,
        opt: !0
    }]);
    let Ys = Gs;
    const Vs = class e extends _ {
        constructor(e) {
            super(), this.relativeWorkspacePath = "", this.textInSymbolRange = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Vs.runtime = Ce, Vs.typeName = "aiserver.v1.DocumentSymbolWithText", Vs.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "symbol",
        kind: "message",
        T: Us
    }, {
        no: 2,
        name: "relative_workspace_path",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "text_in_symbol_range",
        kind: "scalar",
        T: 9
    }, {
        no: 4,
        name: "uri_components",
        kind: "message",
        T: Ys
    }]);
    const Ks = class e extends _ {
        constructor(e) {
            super(), this.error = 0, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Ks.runtime = Ce, Ks.typeName = "aiserver.v1.ErrorDetails", Ks.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "error",
        kind: "enum",
        T: Ce.getEnumType(js)
    }, {
        no: 2,
        name: "details",
        kind: "message",
        T: $s
    }, {
        no: 3,
        name: "is_expected",
        kind: "scalar",
        T: 8,
        opt: !0
    }]);
    let Ws = Ks;
    var js = (e => (e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.BAD_API_KEY = 1] = "BAD_API_KEY", e[e.BAD_USER_API_KEY = 42] = "BAD_USER_API_KEY", e[e.NOT_LOGGED_IN = 2] = "NOT_LOGGED_IN", e[e.INVALID_AUTH_ID = 3] = "INVALID_AUTH_ID", e[e.NOT_HIGH_ENOUGH_PERMISSIONS = 4] = "NOT_HIGH_ENOUGH_PERMISSIONS", e[e.AGENT_REQUIRES_LOGIN = 18] = "AGENT_REQUIRES_LOGIN", e[e.BAD_MODEL_NAME = 5] = "BAD_MODEL_NAME", e[e.NOT_FOUND = 39] = "NOT_FOUND", e[e.DEPRECATED = 40] = "DEPRECATED", e[e.USER_NOT_FOUND = 6] = "USER_NOT_FOUND", e[e.FREE_USER_RATE_LIMIT_EXCEEDED = 7] = "FREE_USER_RATE_LIMIT_EXCEEDED", e[e.PRO_USER_RATE_LIMIT_EXCEEDED = 8] = "PRO_USER_RATE_LIMIT_EXCEEDED", e[e.FREE_USER_USAGE_LIMIT = 9] = "FREE_USER_USAGE_LIMIT", e[e.PRO_USER_USAGE_LIMIT = 10] = "PRO_USER_USAGE_LIMIT", e[e.RESOURCE_EXHAUSTED = 41] = "RESOURCE_EXHAUSTED", e[e.AUTH_TOKEN_NOT_FOUND = 11] = "AUTH_TOKEN_NOT_FOUND", e[e.AUTH_TOKEN_EXPIRED = 12] = "AUTH_TOKEN_EXPIRED", e[e.OPENAI = 13] = "OPENAI", e[e.OPENAI_RATE_LIMIT_EXCEEDED = 14] = "OPENAI_RATE_LIMIT_EXCEEDED", e[e.MAX_TOKENS = 20] = "MAX_TOKENS", e[e.PRO_USER_ONLY = 23] = "PRO_USER_ONLY", e[e.USER_ABORTED_REQUEST = 21] = "USER_ABORTED_REQUEST", e[e.TIMEOUT = 25] = "TIMEOUT", e[e.GENERIC_RATE_LIMIT_EXCEEDED = 22] = "GENERIC_RATE_LIMIT_EXCEEDED", e[e.GPT_4_VISION_PREVIEW_RATE_LIMIT = 28] = "GPT_4_VISION_PREVIEW_RATE_LIMIT", e[e.CUSTOM_MESSAGE = 29] = "CUSTOM_MESSAGE", e[e.OUTDATED_CLIENT = 30] = "OUTDATED_CLIENT", e[e.CLAUDE_IMAGE_TOO_LARGE = 31] = "CLAUDE_IMAGE_TOO_LARGE", e[e.FILE_NOT_FOUND = 33] = "FILE_NOT_FOUND", e[e.API_KEY_RATE_LIMIT = 34] = "API_KEY_RATE_LIMIT", e[e.DEBOUNCED = 35] = "DEBOUNCED", e[e.BAD_REQUEST = 36] = "BAD_REQUEST", e[e.REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED = 37] = "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED", e[e.UNAUTHORIZED = 38] = "UNAUTHORIZED", e[e.CONVERSATION_TOO_LONG = 43] = "CONVERSATION_TOO_LONG", e[e.USAGE_PRICING_REQUIRED = 44] = "USAGE_PRICING_REQUIRED", e[e.USAGE_PRICING_REQUIRED_CHANGEABLE = 45] = "USAGE_PRICING_REQUIRED_CHANGEABLE", e[e.GITHUB_NO_USER_CREDENTIALS = 46] = "GITHUB_NO_USER_CREDENTIALS", e[e.GITHUB_USER_NO_ACCESS = 47] = "GITHUB_USER_NO_ACCESS", e[e.GITHUB_APP_NO_ACCESS = 48] = "GITHUB_APP_NO_ACCESS", e[e.GITHUB_MULTIPLE_OWNERS = 49] = "GITHUB_MULTIPLE_OWNERS", e[e.RATE_LIMITED = 50] = "RATE_LIMITED", e[e.RATE_LIMITED_CHANGEABLE = 51] = "RATE_LIMITED_CHANGEABLE", e[e.CUSTOM = 52] = "CUSTOM", e[e.HOOKS_BLOCKED = 53] = "HOOKS_BLOCKED", e[e.SUSPICIOUS_USAGE_BLOCKED = 54] = "SUSPICIOUS_USAGE_BLOCKED", e[e.EXTENSION_HOST_TIMEOUT = 55] = "EXTENSION_HOST_TIMEOUT", e[e.NETWORK_ERROR = 56] = "NETWORK_ERROR", e[e.PROVIDER_ERROR = 57] = "PROVIDER_ERROR", e[e.MODEL_BLOCKED = 58] = "MODEL_BLOCKED", e[e.INTERNAL = 59] = "INTERNAL", e[e.MAX_MODE_REQUIRED = 60] = "MAX_MODE_REQUIRED", e[e.MODEL_NO_LONGER_SUPPORTED = 61] = "MODEL_NO_LONGER_SUPPORTED", e[e.PRICING_WARNING = 62] = "PRICING_WARNING", e[e.SLOW_POOL = 63] = "SLOW_POOL", e[e.UNSUPPORTED_REGION = 64] = "UNSUPPORTED_REGION", e))(js || {});
    Ce.util.setEnumType(js, "aiserver.v1.ErrorDetails.Error", [{
        no: 0,
        name: "ERROR_UNSPECIFIED"
    }, {
        no: 1,
        name: "ERROR_BAD_API_KEY"
    }, {
        no: 42,
        name: "ERROR_BAD_USER_API_KEY"
    }, {
        no: 2,
        name: "ERROR_NOT_LOGGED_IN"
    }, {
        no: 3,
        name: "ERROR_INVALID_AUTH_ID"
    }, {
        no: 4,
        name: "ERROR_NOT_HIGH_ENOUGH_PERMISSIONS"
    }, {
        no: 18,
        name: "ERROR_AGENT_REQUIRES_LOGIN"
    }, {
        no: 5,
        name: "ERROR_BAD_MODEL_NAME"
    }, {
        no: 39,
        name: "ERROR_NOT_FOUND"
    }, {
        no: 40,
        name: "ERROR_DEPRECATED"
    }, {
        no: 6,
        name: "ERROR_USER_NOT_FOUND"
    }, {
        no: 7,
        name: "ERROR_FREE_USER_RATE_LIMIT_EXCEEDED"
    }, {
        no: 8,
        name: "ERROR_PRO_USER_RATE_LIMIT_EXCEEDED"
    }, {
        no: 9,
        name: "ERROR_FREE_USER_USAGE_LIMIT"
    }, {
        no: 10,
        name: "ERROR_PRO_USER_USAGE_LIMIT"
    }, {
        no: 41,
        name: "ERROR_RESOURCE_EXHAUSTED"
    }, {
        no: 11,
        name: "ERROR_AUTH_TOKEN_NOT_FOUND"
    }, {
        no: 12,
        name: "ERROR_AUTH_TOKEN_EXPIRED"
    }, {
        no: 13,
        name: "ERROR_OPENAI"
    }, {
        no: 14,
        name: "ERROR_OPENAI_RATE_LIMIT_EXCEEDED"
    }, {
        no: 20,
        name: "ERROR_MAX_TOKENS"
    }, {
        no: 23,
        name: "ERROR_PRO_USER_ONLY"
    }, {
        no: 21,
        name: "ERROR_USER_ABORTED_REQUEST"
    }, {
        no: 25,
        name: "ERROR_TIMEOUT"
    }, {
        no: 22,
        name: "ERROR_GENERIC_RATE_LIMIT_EXCEEDED"
    }, {
        no: 28,
        name: "ERROR_GPT_4_VISION_PREVIEW_RATE_LIMIT"
    }, {
        no: 29,
        name: "ERROR_CUSTOM_MESSAGE"
    }, {
        no: 30,
        name: "ERROR_OUTDATED_CLIENT"
    }, {
        no: 31,
        name: "ERROR_CLAUDE_IMAGE_TOO_LARGE"
    }, {
        no: 33,
        name: "ERROR_FILE_NOT_FOUND"
    }, {
        no: 34,
        name: "ERROR_API_KEY_RATE_LIMIT"
    }, {
        no: 35,
        name: "ERROR_DEBOUNCED"
    }, {
        no: 36,
        name: "ERROR_BAD_REQUEST"
    }, {
        no: 37,
        name: "ERROR_REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED"
    }, {
        no: 38,
        name: "ERROR_UNAUTHORIZED"
    }, {
        no: 43,
        name: "ERROR_CONVERSATION_TOO_LONG"
    }, {
        no: 44,
        name: "ERROR_USAGE_PRICING_REQUIRED"
    }, {
        no: 45,
        name: "ERROR_USAGE_PRICING_REQUIRED_CHANGEABLE"
    }, {
        no: 46,
        name: "ERROR_GITHUB_NO_USER_CREDENTIALS"
    }, {
        no: 47,
        name: "ERROR_GITHUB_USER_NO_ACCESS"
    }, {
        no: 48,
        name: "ERROR_GITHUB_APP_NO_ACCESS"
    }, {
        no: 49,
        name: "ERROR_GITHUB_MULTIPLE_OWNERS"
    }, {
        no: 50,
        name: "ERROR_RATE_LIMITED"
    }, {
        no: 51,
        name: "ERROR_RATE_LIMITED_CHANGEABLE"
    }, {
        no: 52,
        name: "ERROR_CUSTOM"
    }, {
        no: 53,
        name: "ERROR_HOOKS_BLOCKED"
    }, {
        no: 54,
        name: "ERROR_SUSPICIOUS_USAGE_BLOCKED"
    }, {
        no: 55,
        name: "ERROR_EXTENSION_HOST_TIMEOUT"
    }, {
        no: 56,
        name: "ERROR_NETWORK_ERROR"
    }, {
        no: 57,
        name: "ERROR_PROVIDER_ERROR"
    }, {
        no: 58,
        name: "ERROR_MODEL_BLOCKED"
    }, {
        no: 59,
        name: "ERROR_INTERNAL"
    }, {
        no: 60,
        name: "ERROR_MAX_MODE_REQUIRED"
    }, {
        no: 61,
        name: "ERROR_MODEL_NO_LONGER_SUPPORTED"
    }, {
        no: 62,
        name: "ERROR_PRICING_WARNING"
    }, {
        no: 63,
        name: "ERROR_SLOW_POOL"
    }, {
        no: 64,
        name: "ERROR_UNSUPPORTED_REGION"
    }]);
    const Xs = class e extends _ {
        constructor(e) {
            super(), this.title = "", this.detail = "", this.buttons = [], this.additionalInfo = {}, this.planChoices = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Xs.runtime = Ce, Xs.typeName = "aiserver.v1.CustomErrorDetails", Xs.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "title",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "detail",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 4,
        name: "is_retryable",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 5,
        name: "show_request_id",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 6,
        name: "should_show_immediate_error",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 8,
        name: "buttons",
        kind: "message",
        T: ni,
        repeated: !0
    }, {
        no: 7,
        name: "additional_info",
        kind: "map",
        K: 9,
        V: {
            kind: "scalar",
            T: 9
        }
    }, {
        no: 9,
        name: "plan_choices",
        kind: "message",
        T: zs,
        repeated: !0
    }, {
        no: 10,
        name: "analytics_metadata",
        kind: "message",
        T: Qs,
        opt: !0
    }]);
    let $s = Xs;
    const Hs = class e extends _ {
        constructor(e) {
            super(), Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Hs.runtime = Ce, Hs.typeName = "aiserver.v1.ErrorAnalyticsMetadata", Hs.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "action_required",
        kind: "scalar",
        T: 9,
        opt: !0
    }]);
    let Qs = Hs;
    const Zs = class e extends _ {
        constructor(e) {
            super(), this.label = "", this.value = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Zs.runtime = Ce, Zs.typeName = "aiserver.v1.PlanChoice", Zs.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "label",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "sublabel",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 3,
        name: "description",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 4,
        name: "value",
        kind: "scalar",
        T: 9
    }]);
    let zs = Zs;
    const ei = class e extends _ {
        constructor(e) {
            super(), this.label = "", this.action = {
                case: void 0
            }, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    ei.runtime = Ce, ei.typeName = "aiserver.v1.ErrorButton", ei.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "label",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "upgrade",
        kind: "message",
        T: ci,
        oneof: "action"
    }, {
        no: 3,
        name: "switch_model",
        kind: "message",
        T: fi,
        oneof: "action"
    }, {
        no: 4,
        name: "configure_spend_limit",
        kind: "message",
        T: pi,
        oneof: "action"
    }, {
        no: 5,
        name: "url",
        kind: "message",
        T: _i,
        oneof: "action"
    }, {
        no: 6,
        name: "upgrade_choice",
        kind: "message",
        T: li,
        oneof: "action"
    }, {
        no: 7,
        name: "dashboard_action",
        kind: "message",
        T: oi,
        oneof: "action"
    }, {
        no: 8,
        name: "reload_window",
        kind: "message",
        T: ii,
        oneof: "action"
    }, {
        no: 9,
        name: "client_action",
        kind: "message",
        T: ri,
        oneof: "action"
    }]);
    let ni = ei;
    const ti = class e extends _ {
        constructor(e) {
            super(), this.commandId = "", this.args = {}, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    ti.runtime = Ce, ti.typeName = "aiserver.v1.ClientAction", ti.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "command_id",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "args",
        kind: "map",
        K: 9,
        V: {
            kind: "scalar",
            T: 9
        }
    }]);
    let ri = ti;
    const si = class e extends _ {
        constructor(e) {
            super(), Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    si.runtime = Ce, si.typeName = "aiserver.v1.ReloadWindowAction", si.fields = Ce.util.newFieldList(() => []);
    let ii = si;
    const ai = class e extends _ {
        constructor(e) {
            super(), this.action = "", this.args = {}, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    ai.runtime = Ce, ai.typeName = "aiserver.v1.DashboardAction", ai.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "action",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "args",
        kind: "map",
        K: 9,
        V: {
            kind: "scalar",
            T: 9
        }
    }, {
        no: 3,
        name: "success_message",
        kind: "scalar",
        T: 9,
        opt: !0
    }]);
    let oi = ai;
    const ui = class e extends _ {
        constructor(e) {
            super(), Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    ui.runtime = Ce, ui.typeName = "aiserver.v1.UpgradeChoice", ui.fields = Ce.util.newFieldList(() => []);
    let li = ui;
    const mi = class e extends _ {
        constructor(e) {
            super(), this.membershipToUpgradeTo = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    mi.runtime = Ce, mi.typeName = "aiserver.v1.UpgradeAction", mi.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "membership_to_upgrade_to",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "try_immediate_upgrade",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 3,
        name: "allow_trial",
        kind: "scalar",
        T: 8,
        opt: !0
    }]);
    let ci = mi;
    const di = class e extends _ {
        constructor(e) {
            super(), Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    di.runtime = Ce, di.typeName = "aiserver.v1.SwitchModelAction", di.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "suggested_model",
        kind: "scalar",
        T: 9,
        opt: !0
    }]);
    let fi = di;
    const Ti = class e extends _ {
        constructor(e) {
            super(), this.confirmLabel = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Ti.runtime = Ce, Ti.typeName = "aiserver.v1.ConfigureSpendLimitAction", Ti.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "confirm_label",
        kind: "scalar",
        T: 9
    }]);
    let pi = Ti;
    const Ei = class e extends _ {
        constructor(e) {
            super(), this.url = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Ei.runtime = Ce, Ei.typeName = "aiserver.v1.UrlAction", Ei.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "url",
        kind: "scalar",
        T: 9
    }]);
    let _i = Ei;
    const gi = class e extends _ {
        constructor(e) {
            super(), this.data = new Uint8Array(0), this.uuid = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    gi.runtime = Ce, gi.typeName = "aiserver.v1.ImageProto", gi.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "data",
        kind: "scalar",
        T: 12
    }, {
        no: 2,
        name: "dimension",
        kind: "message",
        T: Ni
    }, {
        no: 3,
        name: "uuid",
        kind: "scalar",
        T: 9
    }, {
        no: 4,
        name: "task_specific_description",
        kind: "scalar",
        T: 9,
        opt: !0
    }]);
    const hi = class e extends _ {
        constructor(e) {
            super(), this.width = 0, this.height = 0, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    hi.runtime = Ce, hi.typeName = "aiserver.v1.ImageProto.Dimension", hi.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "width",
        kind: "scalar",
        T: 5
    }, {
        no: 2,
        name: "height",
        kind: "scalar",
        T: 5
    }]);
    let Ni = hi;
    const wi = class e extends _ {
        constructor(e) {
            super(), this.markdown = "", this.bubbleId = "", this.sectionIndex = 0, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    wi.runtime = Ce, wi.typeName = "aiserver.v1.ChatQuote", wi.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "markdown",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "bubble_id",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "section_index",
        kind: "scalar",
        T: 5
    }]);
    const yi = class e extends _ {
        constructor(e) {
            super(), this.url = "", this.uuid = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    yi.runtime = Ce, yi.typeName = "aiserver.v1.ChatExternalLink", yi.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "url",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "uuid",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "pdf_content",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 4,
        name: "is_pdf",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 5,
        name: "filename",
        kind: "scalar",
        T: 9,
        opt: !0
    }]);
    const Si = class e extends _ {
        constructor(e) {
            super(), this.url = "", this.uuid = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Si.runtime = Ce, Si.typeName = "aiserver.v1.ComposerExternalLink", Si.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "url",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "uuid",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "pdf_content",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 4,
        name: "is_pdf",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 5,
        name: "filename",
        kind: "scalar",
        T: 9,
        opt: !0
    }]);
    const Ii = class e extends _ {
        constructor(e) {
            super(), this.url = "", this.uuid = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Ii.runtime = Ce, Ii.typeName = "aiserver.v1.CmdKExternalLink", Ii.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "url",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "uuid",
        kind: "scalar",
        T: 9
    }]);
    const ki = class e extends _ {
        constructor(e) {
            super(), this.note = "", this.commitHash = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    ki.runtime = Ce, ki.typeName = "aiserver.v1.CommitNote", ki.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "note",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "commit_hash",
        kind: "scalar",
        T: 9
    }]);
    let Oi = ki;
    const Ri = class e extends _ {
        constructor(e) {
            super(), this.note = "", this.commitHash = "", this.embeddings = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Ri.runtime = Ce, Ri.typeName = "aiserver.v1.CommitNoteWithEmbeddings", Ri.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "note",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "commit_hash",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "embeddings",
        kind: "scalar",
        T: 1,
        repeated: !0
    }]);
    const Ji = class e extends _ {
        constructor(e) {
            super(), this.diff = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Ji.runtime = Ce, Ji.typeName = "aiserver.v1.CommitDiffString", Ji.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "diff",
        kind: "scalar",
        T: 9
    }]);
    const vi = class e extends _ {
        constructor(e) {
            super(), this.notes = [], this.commitHash = "", this.repoUrl = "", this.filesChangedRelativePath = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    vi.runtime = Ce, vi.typeName = "aiserver.v1.FullCommitNotes", vi.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "notes",
        kind: "message",
        T: Oi,
        repeated: !0
    }, {
        no: 2,
        name: "commit_hash",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "repo_url",
        kind: "scalar",
        T: 9
    }, {
        no: 4,
        name: "files_changed_relative_path",
        kind: "scalar",
        T: 9
    }]);
    const Di = class e extends _ {
        constructor(e) {
            super(), this.key = "", this.value = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Di.runtime = Ce, Di.typeName = "aiserver.v1.CrossExtHostHeader", Di.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "key",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "value",
        kind: "scalar",
        T: 9
    }]);
    let bi = Di;
    const Pi = class e extends _ {
        constructor(e) {
            super(), this.headers = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Pi.runtime = Ce, Pi.typeName = "aiserver.v1.CrossExtHostHeaders", Pi.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "headers",
        kind: "message",
        T: bi,
        repeated: !0
    }]);
    let Fi = Pi;
    const Li = class e extends _ {
        constructor(e) {
            super(), this.message = new Uint8Array(0), this.isError = !1, this.connectError = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Li.runtime = Ce, Li.typeName = "aiserver.v1.SimpleUnaryCrossExtensionHostMessage", Li.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "message",
        kind: "scalar",
        T: 12
    }, {
        no: 2,
        name: "header",
        kind: "message",
        T: Fi
    }, {
        no: 3,
        name: "trailer",
        kind: "message",
        T: Fi
    }, {
        no: 4,
        name: "is_error",
        kind: "scalar",
        T: 8
    }, {
        no: 5,
        name: "connect_error",
        kind: "scalar",
        T: 9
    }]);
    const Bi = class e extends _ {
        constructor(e) {
            super(), this.relativeWorkspacePath = "", this.startLineNumber = 0, this.lines = [], this.languageIdentifier = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Bi.runtime = Ce, Bi.typeName = "aiserver.v1.CodeChunk", Bi.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "relative_workspace_path",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "start_line_number",
        kind: "scalar",
        T: 5
    }, {
        no: 3,
        name: "lines",
        kind: "scalar",
        T: 9,
        repeated: !0
    }, {
        no: 4,
        name: "summarization_strategy",
        kind: "enum",
        T: Ce.getEnumType(Ui),
        opt: !0
    }, {
        no: 5,
        name: "language_identifier",
        kind: "scalar",
        T: 9
    }, {
        no: 6,
        name: "intent",
        kind: "enum",
        T: Ce.getEnumType(Ai),
        opt: !0
    }, {
        no: 7,
        name: "is_final_version",
        kind: "scalar",
        T: 8,
        opt: !0
    }, {
        no: 8,
        name: "is_first_version",
        kind: "scalar",
        T: 8,
        opt: !0
    }]);
    var Ai = (e => (e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.COMPOSER_FILE = 1] = "COMPOSER_FILE", e[e.COMPRESSED_COMPOSER_FILE = 2] = "COMPRESSED_COMPOSER_FILE", e))(Ai || {});
    Ce.util.setEnumType(Ai, "aiserver.v1.CodeChunk.Intent", [{
        no: 0,
        name: "INTENT_UNSPECIFIED"
    }, {
        no: 1,
        name: "INTENT_COMPOSER_FILE"
    }, {
        no: 2,
        name: "INTENT_COMPRESSED_COMPOSER_FILE"
    }]);
    var Ui = (e => (e[e.NONE_UNSPECIFIED = 0] = "NONE_UNSPECIFIED", e[e.SUMMARIZED = 1] = "SUMMARIZED", e[e.EMBEDDED = 2] = "EMBEDDED", e))(Ui || {});
    Ce.util.setEnumType(Ui, "aiserver.v1.CodeChunk.SummarizationStrategy", [{
        no: 0,
        name: "SUMMARIZATION_STRATEGY_NONE_UNSPECIFIED"
    }, {
        no: 1,
        name: "SUMMARIZATION_STRATEGY_SUMMARIZED"
    }, {
        no: 2,
        name: "SUMMARIZATION_STRATEGY_EMBEDDED"
    }]);
    const Ci = class e extends _ {
        constructor(e) {
            super(), Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Ci.runtime = Ce, Ci.typeName = "aiserver.v1.RCPCallFrame", Ci.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "function_name",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 2,
        name: "url",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 3,
        name: "line_number",
        kind: "scalar",
        T: 5,
        opt: !0
    }, {
        no: 4,
        name: "column_number",
        kind: "scalar",
        T: 5,
        opt: !0
    }]);
    let Mi = Ci;
    const qi = class e extends _ {
        constructor(e) {
            super(), this.callFrames = [], Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    qi.runtime = Ce, qi.typeName = "aiserver.v1.RCPStackTrace", qi.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "call_frames",
        kind: "message",
        T: Mi,
        repeated: !0
    }, {
        no: 2,
        name: "raw_stack_trace",
        kind: "scalar",
        T: 9,
        opt: !0
    }]);
    let xi = qi;
    const Gi = class e extends _ {
        constructor(e) {
            super(), this.message = "", this.timestamp = 0, this.level = "", this.clientName = "", this.sessionId = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Gi.runtime = Ce, Gi.typeName = "aiserver.v1.RCPLogEntry", Gi.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "message",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "timestamp",
        kind: "scalar",
        T: 1
    }, {
        no: 3,
        name: "level",
        kind: "scalar",
        T: 9
    }, {
        no: 4,
        name: "client_name",
        kind: "scalar",
        T: 9
    }, {
        no: 5,
        name: "session_id",
        kind: "scalar",
        T: 9
    }, {
        no: 6,
        name: "stack_trace",
        kind: "message",
        T: xi,
        opt: !0
    }, {
        no: 7,
        name: "object_data_json",
        kind: "scalar",
        T: 9,
        opt: !0
    }]);
    let Yi = Gi;
    const Vi = class e extends _ {
        constructor(e) {
            super(), this.element = "", this.xpath = "", this.textContent = "", this.extra = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Vi.runtime = Ce, Vi.typeName = "aiserver.v1.RCPUIElementPicked", Vi.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "element",
        kind: "scalar",
        T: 9
    }, {
        no: 2,
        name: "xpath",
        kind: "scalar",
        T: 9
    }, {
        no: 3,
        name: "text_content",
        kind: "scalar",
        T: 9
    }, {
        no: 4,
        name: "extra",
        kind: "scalar",
        T: 9
    }, {
        no: 5,
        name: "component",
        kind: "scalar",
        T: 9,
        opt: !0
    }, {
        no: 6,
        name: "component_props_json",
        kind: "scalar",
        T: 9,
        opt: !0
    }]);
    let Ki = Vi;
    const Wi = class e extends _ {
        constructor(e) {
            super(), this.text = "", Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Wi.runtime = Ce, Wi.typeName = "aiserver.v1.RCPChatMessage", Wi.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "text",
        kind: "scalar",
        T: 9
    }]);
    let ji = Wi;
    const Xi = class e extends _ {
        constructor(e) {
            super(), this.message = {
                case: void 0
            }, Ce.util.initPartial(e, this)
        }
        static fromBinary(n, t) {
            return (new e).fromBinary(n, t)
        }
        static fromJson(n, t) {
            return (new e).fromJson(n, t)
        }
        static fromJsonString(n, t) {
            return (new e).fromJsonString(n, t)
        }
        static equals(n, t) {
            return Ce.util.equals(e, n, t)
        }
    };
    Xi.runtime = Ce, Xi.typeName = "aiserver.v1.RCPMessage", Xi.fields = Ce.util.newFieldList(() => [{
        no: 1,
        name: "console",
        kind: "message",
        T: Yi,
        oneof: "message"
    }, {
        no: 2,
        name: "ui_element_picked",
        kind: "message",
        T: Ki,
        oneof: "message"
    }, {
        no: 3,
        name: "chat_message",
        kind: "message",
        T: ji,
        oneof: "message"
    }]);
    const $i = [0, 5e3, 5e3, 1e4, 1e4, 1e4, 3e4, 3e4, 6e4],
        Hi = 18e4;

    function Qi(e) {
        return $i[Math.min(e, $i.length - 1)]
    }

    function Zi(e, n = 0) {
        const t = zi(e);
        return void 0 !== t && n < t
    }

    function zi(e) {
        const n = function(e) {
            const n = e instanceof a ? e.findDetails(Ws).at(0) : void 0,
                t = n?.details?.additionalInfo?.cursorServerUrlReason;
            if (void 0 !== t && "" !== t) return t;
            const r = e instanceof Error ? e.message : void 0,
                s = r ? /cursorServerUrlReason=([A-Z_]+)/.exec(r) : null;
            return s?.[1]
        }(e);
        if (void 0 !== n) return function(e) {
            switch (e) {
                case "NO_POD_INFO_YET":
                    return 1e4;
                case "NO_VM_CONNECTION_INFO_YET":
                    return 3e4;
                case "EXEC_DAEMON_NOT_READY":
                case "POD_REPLACEMENT_IN_PROGRESS":
                    return Hi;
                default:
                    return
            }
        }(n);
        const t = na(e);
        return t === r.DeadlineExceeded || t === r.Unavailable ? Hi : void 0
    }
    async function ea(e) {
        await new Promise(n => setTimeout(n, e))
    }

    function na(e) {
        if (e instanceof a) return e.code;
        if ("object" == typeof e && null !== e && "code" in e) {
            const n = e.code;
            if ("number" == typeof n) return function(e) {
                switch (e) {
                    case r.InvalidArgument:
                        return r.InvalidArgument;
                    case r.DeadlineExceeded:
                        return r.DeadlineExceeded;
                    case r.Unavailable:
                        return r.Unavailable;
                    case r.NotFound:
                        return r.NotFound;
                    default:
                        return
                }
            }(n)
        }
        if (!(e instanceof Error)) return;
        const n = /^\[([a-z_]+)\](?:\s|$)/.exec(e.message);
        if (n) return ta(n[1]);
        const t = "string" == typeof e.stack ? /(?:^|\n)\s*ConnectError:\s*\[([a-z_]+)\](?:\s|$)/.exec(e.stack) : null;
        return t ? ta(t[1]) : void 0
    }

    function ta(e) {
        switch (e) {
            case "invalid_argument":
                return r.InvalidArgument;
            case "deadline_exceeded":
                return r.DeadlineExceeded;
            case "unavailable":
                return r.Unavailable;
            case "not_found":
                return r.NotFound;
            default:
                return
        }
    }

    function ra(e) {
        return e instanceof Error && "CursorSocketTransient" === e.code ? t.RemoteAuthorityResolverError.TemporarilyNotAvailable(e.message) : e
    }
    let sa;

    function ia(...e) {
        const n = e.map(String).join(" ");
        console.log(`[cursor-resolver]  ${n}`), sa?.appendLine(`[INFO]  ${n}`)
    }

    function aa(...e) {
        const n = e.map(String).join(" ");
        sa?.appendLine(`[ERROR] ${n}`)
    }

    function oa() {
        const e = t.cursor.productCommit ?? t.cursor.cursorServerCommit;
        if (!e || !/^[a-zA-Z0-9\-_.]+$/.test(e)) throw aa("Invalid or missing product commit", e), new Error("Invalid or missing product commit");
        return e
    }
    class ua {
        constructor(e, n) {
            this.connectionTokenProvider = e, this.staleCursorServerUrlBcIds = new Set, this.alwaysShowPortsView = !0,
                function(e) {
                    sa = e
                }(n), ia("RemoteAuthorityResolver constructor")
        }
        createManagedResolvedAuthority(e, n, r) {
            return Object.assign(new t.ManagedResolvedAuthority(e, n, r), {
                skipCreateInspectTunnel: !0
            })
        }
        async showCandidatePort(e, n, t) {
            return ! function(e) {
                return !! function(e) {
                    return e >= 26e3 && e <= 26999
                }(e) || e >= 5870 && e <= 5890 || 2375 === e || 5901 === e || 50052 === e
            }(n) || (ia(`Filtering out reserved/internal port ${n} from candidates`), !1)
        }
        async getCursorServerUrl(e, n = !0) {
            const t = e.indexOf("+"),
                r = e.substring(t + 1).trim();
            if (-1 === t || 0 === r.length) throw new Error("No bcId found in authority");
            if (r.startsWith("{")) try {
                return JSON.parse(r)
            } catch (e) {
                throw new Error("Invalid url found in authority")
            }
            const s = r,
                i = oa();
            return await ca("getCursorServerUrl", async () => {
                try {
                    return await this.connectionTokenProvider.getOrCreateCursorServerUrl(s, i, n)
                } catch (e) {
                    throw aa("Error getting cursor server url", e), e
                }
            })
        }
        async getCursorServerUrlWithRetry(e, n = !0) {
            return async function({
                getCursorServerUrl: e,
                initialUseCache: n,
                sleep: t = ea,
                onRetry: r
            }) {
                let s = n;
                const i = Date.now();
                for (let n = 0;; n++) try {
                    return await e(s)
                } catch (e) {
                    const a = Date.now() - i;
                    if (!Zi(e, a)) throw e;
                    const o = zi(e),
                        u = void 0 !== o ? o - a : 0,
                        l = Math.min(Qi(n), Math.max(0, u));
                    r?.(e, n + 1, l), l > 0 && await t(l), s = !1
                }
            }({
                initialUseCache: n,
                getCursorServerUrl: n => this.getCursorServerUrl(e, n),
                onRetry: (e, n, t) => {
                    ia("Error getting cursor server url,", t > 0 ? `retrying in ${t/1e3}s` : "retrying immediately", `attempt=${n}`, e)
                }
            })
        }
        async resolve(e, n, s) {
            return ca("resolve", async () => {
                ia("resolve", e, `resolveAttempt=${n.resolveAttempt}`), s?.report({
                    phase: "init"
                });
                const i = e.indexOf("+"),
                    a = e.substring(i + 1).trim();
                if (-1 === i || 0 === a.length) throw new Error("No bcId found in authority");
                if (a.startsWith("{")) {
                    let e;
                    try {
                        e = JSON.parse(a)
                    } catch (e) {
                        throw new Error("Invalid url found in authority")
                    }
                    ia("resolved url (inline)", e.host, e.port);
                    const n = async () => {
                        try {
                            return await ma(e)
                        } catch (e) {
                            throw ra(e)
                        }
                    }, r = t.cursor.createSocketConsumerTunnelFactory({
                        makeConnection: n,
                        connectionToken: e.connectionToken
                    });
                    return this.createManagedResolvedAuthority(n, e.connectionToken, r)
                }
                const o = a;
                s?.report({
                    phase: "auth"
                });
                const u = oa(),
                    {
                        connectionToken: l
                    } = await this.connectionTokenProvider.getOrCreateConnectionToken(o, u);
                s?.report({
                    phase: "get-url"
                });
                const m = !this.staleCursorServerUrlBcIds.delete(o);
                let c;
                try {
                    c = await this.getCursorServerUrlWithRetry(e, m)
                } catch (e) {
                    throw function(e) {
                        return function(e) {
                            return na(e) === r.NotFound
                        }(e) ? t.RemoteAuthorityResolverError.NotAvailable("This cloud agent's environment is no longer available.") : e
                    }(e)
                }
                ia("resolved url", c.host, c.port, `useCachedUrl=${m}`);
                const d = () => {
                        this.staleCursorServerUrlBcIds.has(o) || (ia("marking cursor server url suspect, next resolve fetches fresh", o), this.staleCursorServerUrlBcIds.add(o))
                    },
                    f = async () => {
                        s?.report({
                            phase: "socket"
                        });
                        try {
                            return await ma(c, d)
                        } catch (e) {
                            throw d(), ra(e)
                        }
                    }, T = t.cursor.createSocketConsumerTunnelFactory({
                        makeConnection: f,
                        connectionToken: l
                    });
                return this.createManagedResolvedAuthority(f, l, T)
            })
        }
    }
    const la = 1e4;
    async function ma(e, n) {
        const r = 443 === e.port,
            s = await t.cursor.createTcpConnection({
                host: e.host,
                port: e.port,
                tls: r ? {
                    rejectUnauthorized: !0,
                    servername: e.host
                } : void 0
            });
        ia("tcp connection established", `${e.host}:${e.port}`, r ? "(tls)" : "(plain)");
        const i = new t.EventEmitter,
            a = new t.EventEmitter,
            o = new t.EventEmitter,
            u = Date.now();
        let l = !1;
        return s.onDidReceiveData(e => i.fire(e)), s.onDidClose(e => {
            const t = Date.now() - u < la;
            l || void 0 === e && !t || n?.(), a.fire(e), o.fire()
        }), {
            onDidReceiveMessage: i.event,
            onDidClose: a.event,
            onDidEnd: o.event,
            send: e => {
                s.send(e)
            },
            end: () => {
                l = !0, s.close()
            },
            connectionOptions: {
                headers: [`Host: ${e.host}:${e.port}`, ...e.headers.map(e => `${e.key}: ${e.value}`)],
                doNotIncludeWsLocalhostPrefix: !0
            }
        }
    }
    async function ca(e, n) {
        const r = performance.now();
        try {
            return await n()
        } finally {
            ! function(e, n) {
                try {
                    t.cursor.metricsDistribution({
                        stat: `background-composer.${e}`,
                        value: n,
                        tags: {}
                    })
                } catch {}
            }(e, performance.now() - r)
        }
    }

    function da(e) {
        const n = t.window.createOutputChannel("Cursor Resolver");
        e.subscriptions.push(n);
        const r = "undefined" != typeof process && !!process.versions?.node;
        n.appendLine(`[cursor-resolver] Running in ${r?"Node.js":"web-worker"} extension host`);
        const s = new ua(t.cursor.connectionTokenProvider, n);
        e.subscriptions.push(t.workspace.registerRemoteAuthorityResolver("background-composer", s))
    }

    function fa() {}
    var Ta = exports;
    for (var pa in n) Ta[pa] = n[pa];
    n.__esModule && Object.defineProperty(Ta, "__esModule", {
        value: !0
    })
})();
//# sourceMappingURL=http://go/sourcemap/sourcemaps/042b3c1a4c53f2c3808067f519fbfc67b72cad80/extensions/cursor-resolver/dist/main.js.map