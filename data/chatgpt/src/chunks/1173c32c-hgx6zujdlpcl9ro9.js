import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";

function t(e) {
    return Object.setPrototypeOf(e, null), c(e, !1), e
}

function n(e) {
    if (!r(e)) throw TypeError(m);
    let t = Reflect.ownKeys(e),
        n = Object.getOwnPropertyDescriptor(e, `tool`)?.value,
        a = Object.getOwnPropertyDescriptor(e, `arguments`)?.value;
    if (t.length !== 2 || !t.includes(`tool`) || !t.includes(`arguments`) || typeof n != `string` || !n.trim() || !r(a)) throw TypeError(m);
    return {
        tool: n,
        arguments: i(a, new Set)
    }
}

function r(e) {
    if (typeof e != `object` || !e || Array.isArray(e)) return !1;
    let t = Object.getPrototypeOf(e);
    return t === Object.prototype || t === null
}

function i(e, t) {
    if (e === null || typeof e == `string` || typeof e == `boolean` || typeof e == `number` && Number.isFinite(e)) return e;
    if (typeof e != `object` || t.has(e) || !Array.isArray(e) && !r(e)) throw TypeError(m);
    t.add(e);
    try {
        let n = Reflect.ownKeys(e);
        if (Array.isArray(e)) {
            if (Object.getPrototypeOf(e) !== Array.prototype || n.length !== e.length + 1) throw TypeError(m);
            return Array.from({
                length: e.length
            }, (n, r) => {
                let a = Object.getOwnPropertyDescriptor(e, r);
                if (a === void 0 || !a.enumerable) throw TypeError(m);
                return i(a.value, t)
            })
        }
        let r = Object.create(null);
        for (let a of n) {
            let n = Object.getOwnPropertyDescriptor(e, a);
            if (typeof a != `string` || n === void 0 || !n.enumerable || n.value === void 0) throw TypeError(m);
            r[a] = i(n.value, t)
        }
        return r
    } finally {
        t.delete(e)
    }
}

function a(e, t) {
    return t.length <= d && f.exec(t)?.[1] === e
}

function o(e) {
    if (typeof e != `object` || !e || Array.isArray(e)) throw TypeError(p);
    let t = e,
        n = Reflect.ownKeys(t);
    if (!n.includes(`category`) || !n.includes(`value`) || n.some(e => e !== `category` && e !== `value` && e !== `disambig` && e !== `location` && e !== `address`)) throw TypeError(p);
    let r = s(t.category, 128).toLowerCase();
    if (r === `entity_sidebar_follow_up`) throw TypeError(p);
    let i = {
        category: r === `business` ? `local_business` : r,
        value: s(t.value, 1024),
        ...n.includes(`disambig`) ? {
            disambig: s(t.disambig, 1024)
        } : {},
        ...n.includes(`location`) ? {
            location: s(t.location, 1024)
        } : {},
        ...n.includes(`address`) ? {
            address: s(t.address, 1024)
        } : {}
    };
    if (h.has(i.category) && !i.address && (!i.location || i.location.toLowerCase() === `user`)) throw TypeError(p);
    return i
}

function s(e, t) {
    if (typeof e != `string` || e.length > t || !e.trim()) throw TypeError(p);
    return e.trim()
}

function c(e, t) {
    l(e, t, new WeakSet)
}

function l(e, t, n) {
    if (!(!u(e) || n.has(e))) {
        n.add(e), t && l(Object.getPrototypeOf(e), t, n);
        for (let r of Reflect.ownKeys(e)) {
            let i = Object.getOwnPropertyDescriptor(e, r);
            i !== void 0 && (`value` in i ? l(i.value, t, n) : (l(i.get, t, n), l(i.set, t, n)))
        }
        if (Object.freeze(e), !Object.isFrozen(e)) throw Error(`Failed to freeze an object in the object graph.`)
    }
}

function u(e) {
    return typeof e == `object` && !!e || typeof e == `function`
}
var d, f, p, m, h, g = e((() => {
    d = 128, f = /^turn(?:0|[1-9]\d*)(product|business)(?:0|[1-9]\d*)(?![\s\S])/, p = `GenUI.openEntityDetail requires one reference or named entity.`, m = `GenUI.runPluginTool requires one tool name and JSON arguments object.`, h = new Set([`local_business`, `restaurant`, `hotel`, `hospital`, `point_of_interest`, `urgent_care`])
}));

function _(e) {
    if (typeof e != `object` || !e || Array.isArray(e)) return null;
    let t = e,
        n = t.language;
    if (n !== void 0 && (typeof n != `string` || !n.trim() || n.length > 128)) return null;
    let r = n === void 0 ? {} : {
            language: n
        },
        i = t.context;
    if (i === void 0) return r;
    if (typeof i != `object` || !i || Array.isArray(i)) return null;
    let a = i,
        o = a.kind,
        s = a.expectedPhrase;
    return o !== v.SpeakingExercise || typeof s != `string` || !s.trim() ? null : {
        ...r,
        context: {
            kind: o,
            expectedPhrase: s
        }
    }
}
var v, y, b, x = e((() => {
        (function(e) {
            e.SpeakingExercise = `speaking_exercise`
        })(v ||= {}), (function(e) {
            e.Idle = `idle`, e.Starting = `starting`, e.Recording = `recording`, e.Stopping = `stopping`, e.Done = `done`, e.Error = `error`
        })(y ||= {}), (function(e) {
            e.Recording = `recording`, e.Transcript = `transcript`, e.Stopping = `stopping`, e.Done = `done`, e.Error = `error`, e.Cancelled = `cancelled`
        })(b ||= {})
    })),
    S, C, w, T, ee = e((() => {
        g(), x(), S = console, C = new WeakMap, w = Object.freeze({
            status: y.Idle,
            transcript: ``,
            error: null
        }), T = class {
            constructor(e, t) {
                this.runtime = e, this.scheduleRender = t, this.disposed = !1, this.generation = 0, this.state = w, this.start = () => {
                    this.startSession(this.runtime)
                }, this.stop = () => {
                    let e = this.attempt;
                    e === void 0 || this.state.status === y.Stopping || (this.update({
                        ...this.state,
                        status: y.Stopping
                    }), this.sendStop(e))
                }, this.cancel = () => {
                    if (this.cancelDeferredTurn(), this.disposed || this.attempt === void 0 && this.state === w) return;
                    let e = this.invalidate();
                    if (this.state = w, e?.session !== void 0) {
                        try {
                            e.session.cancel()
                        } catch {
                            S.warn(`DIL dictation cancellation failed`)
                        }
                        this.disposeSession(e.session)
                    }
                    this.scheduleRender()
                }
            }
            setOptions(e) {
                this.options = e
            }
            snapshot() {
                let e = t({
                    ...this.state,
                    start: this.start,
                    stop: this.stop,
                    cancel: this.cancel
                });
                return C.set(e, this), e
            }
            startWithDeferredTurn(e) {
                if (this.disposed || this.attempt !== void 0 || !this.runtime?.isUserInteraction()) throw Error(`Deferred dictation requires an idle session and a direct interaction.`);
                this.startSession(e);
                let t = this.deferredTurn;
                if (t === void 0) throw Error(`Deferred dictation could not start.`);
                return t
            }
            startSession(e) {
                if (this.disposed || this.attempt !== void 0) return;
                let t = this.runtime;
                if (t === void 0 || e === void 0) {
                    this.update({
                        ...w,
                        status: y.Error,
                        error: {
                            code: `integration_error`,
                            message: `The dictation host service is not configured.`
                        }
                    });
                    return
                }
                if (!t.isUserInteraction()) return;
                this.cancelDeferredTurn();
                let n = {
                    generation: ++this.generation,
                    session: void 0,
                    startInvoked: !1,
                    stopSent: !1
                };
                this.attempt = n, this.state = {
                    ...w,
                    status: y.Starting
                };
                let r;
                try {
                    r = _(this.options === void 0 ? {} : this.options)
                } catch {
                    r = null
                }
                if (r === null) {
                    this.finish(n, {
                        code: `invalid_options`,
                        message: `Invalid dictation options: language must be nonblank and at most 128 characters; speaking_exercise context requires a nonblank expectedPhrase.`
                    }, void 0);
                    return
                }
                if (this.scheduleRender(), this.isCurrent(n)) try {
                    let t = e.createSession(r, e => this.receive(n, e));
                    if (this.deferredTurn = t.deferredTurn, !this.isCurrent(n)) {
                        this.disposeSession(t);
                        return
                    }
                    n.session = t, n.startInvoked = !0, t.start(), this.sendStop(n)
                } catch {
                    this.commandFailed(n)
                }
            }
            sendStop(e) {
                if (!(!this.isCurrent(e) || this.state.status !== y.Stopping || !e.startInvoked || e.session === void 0 || e.stopSent)) {
                    e.stopSent = !0;
                    try {
                        e.session.stop()
                    } catch {
                        this.commandFailed(e)
                    }
                }
            }
            dispose() {
                if (this.disposed) return;
                this.disposed = !0, this.cancelDeferredTurn(), this.options = void 0;
                let e = this.invalidate();
                this.state = w, e?.session !== void 0 && this.disposeSession(e.session)
            }
            receive(e, t) {
                if (this.isCurrent(e)) switch (t.kind) {
                    case b.Recording:
                        this.state.status === y.Starting && this.update({
                            ...this.state,
                            status: y.Recording
                        });
                        break;
                    case b.Transcript:
                        this.update({
                            ...this.state,
                            transcript: t.transcript
                        });
                        break;
                    case b.Stopping:
                        e.stopSent = !0, this.update({
                            ...this.state,
                            status: y.Stopping
                        });
                        break;
                    case b.Done:
                        this.finish(e, null, t.transcript);
                        break;
                    case b.Error:
                        this.finish(e, {
                            code: t.error.code,
                            message: t.error.message
                        }, void 0);
                        break;
                    case b.Cancelled:
                        this.invalidate(), this.state = w, e.session !== void 0 && this.disposeSession(e.session), this.scheduleRender();
                        break
                }
            }
            finish(e, t, n) {
                this.isCurrent(e) && (this.invalidate(), this.state = {
                    status: t === null ? y.Done : y.Error,
                    transcript: n ?? this.state.transcript,
                    error: t
                }, e.session !== void 0 && this.disposeSession(e.session), this.scheduleRender())
            }
            commandFailed(e) {
                S.warn(`DIL dictation host command failed`), this.finish(e, {
                    code: `host_error`,
                    message: `Dictation could not complete. Please try again.`
                }, void 0)
            }
            invalidate() {
                let e = this.attempt;
                return this.attempt = void 0, this.generation++, e
            }
            isCurrent(e) {
                return !this.disposed && e.generation === this.generation
            }
            update(e) {
                this.state = e, this.scheduleRender()
            }
            cancelDeferredTurn() {
                let e = this.deferredTurn;
                this.deferredTurn = void 0;
                try {
                    e?.cancel()
                } catch {
                    S.warn(`DIL deferred turn cancellation failed`)
                }
            }
            disposeSession(e) {
                try {
                    e.dispose()
                } catch {
                    S.warn(`DIL dictation session disposal failed`)
                }
            }
        }
    }));

function te(e) {
    try {
        if (typeof e != `object` || !e || Array.isArray(e)) return;
        let t = e,
            n = {};
        for (let e of j) {
            let r = t[e];
            if (r !== void 0) {
                if (typeof r != `string` || !r.trim() || r.length > 256) return;
                n[e] = r
            }
        }
        if (Object.keys(n).length === 0) return;
        let r = t.event_data;
        if (r !== void 0) {
            if (typeof r != `object` || !r || Array.isArray(r)) return;
            let e = Object.keys(r);
            if (e.length > 32) return;
            let t = Object.create(null);
            for (let n of e) {
                let e = r[n];
                if (n.length > 128 || !(e === null || typeof e == `boolean` || typeof e == `string` && e.length <= 2048 || typeof e == `number` && Number.isFinite(e))) return;
                t[n] = e
            }
            n.event_data = t
        }
        if (JSON.stringify(n).length <= 16384) return n
    } catch {
        A.warn(`DIL speech logging metadata could not be read`)
    }
}

function E(e) {
    if (typeof e != `object` || !e) return null;
    let t = e,
        n = t.text;
    if (typeof n != `string` || !n.trim() || n.length > 32768) return null;
    let r = {
        text: n
    };
    for (let e of Object.keys(N)) {
        let n = t[e];
        if (n === void 0) continue;
        let i = N[e];
        if (typeof n != `string` || n.length > i) return null;
        (e !== `version` || n !== ``) && (r[e] = n)
    }
    let i = t.playbackSpeed;
    return typeof i == `number` && Number.isFinite(i) && i >= .25 && i <= 4 && (r.playbackSpeed = i), r
}

function D(e) {
    if (typeof e != `object` || !e) return M;
    let t = e,
        n = null;
    if (t.error !== null && typeof t.error == `object`) {
        let e = t.error,
            r = e.failureStage;
        if (r === k.Play || r === k.Request || r === k.Response || r === k.Streaming) {
            let t = e.httpStatus;
            n = {
                failureStage: r,
                ...typeof t == `number` && Number.isInteger(t) && t >= 100 && t <= 599 ? {
                    httpStatus: t
                } : {}
            }
        }
    }
    return {
        available: t.available === !0,
        status: n === null && (t.status === O.Loading || t.status === O.Playing) ? t.status : O.Idle,
        error: n
    }
}
var O, k, A, j, M, N, ne = e((() => {
        (function(e) {
            e.Idle = `idle`, e.Loading = `loading`, e.Playing = `playing`
        })(O ||= {}), (function(e) {
            e.Play = `play`, e.Request = `request`, e.Response = `response`, e.Streaming = `streaming`
        })(k ||= {}), A = console, j = [`event_name`, `statsig_event_name`, `structured_event_name`], M = Object.freeze({
            status: O.Idle,
            available: !1,
            error: null
        }), N = {
            language: 128,
            pronunciationHint: 4096,
            version: 256,
            source: 128
        }
    })),
    P, F, I = e((() => {
        P = Symbol(`openai.valdi.dil.runtimeElement`), F = Symbol(`oai.dil.fragment`)
    }));

function L(e, t) {
    U.set(e, {
        scope: t
    })
}

function re(e) {
    return U.get(e)
}

function ie(e) {
    let t = e.props?.key;
    if (typeof t == `string` || typeof t == `number`) return t
}

function R(e) {
    return typeof e == `object` && !!e && e[P] === !0
}

function z(e, t, n) {
    let r = t ?? void 0,
        i = n;
    if (r !== void 0 && `children` in r) {
        let {
            children: e,
            ...t
        } = r;
        r = t, n.length === 0 && (i = Array.isArray(e) ? e : [e])
    }
    return {
        [P]: !0,
        type: e,
        props: r,
        children: i
    }
}
var B, V, H, U, W = e((() => {
        I(), B = `text`, V = `__dil-rendered-prop`, H = `__dilRenderedPropName`, U = new WeakMap
    })),
    G, K, q, J = e((() => {
        G = class {
            constructor(e) {
                this.value = e
            }
            deref() {
                return this.value
            }
        }, K = globalThis.WeakRef, q = K ?? G
    }));

function ae(e, t, n) {
    new Z(e, t, n).apply();
    for (let n of e.interactionScopes ?? []) t.onNodeInteractionScopeChanged?.(n.nodeId, n.scope)
}

function Y(e) {
    if (typeof e != `object` || !e || R(e)) return !1;
    let t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype
}

function X(e) {
    if (!Array.isArray(e)) return !1;
    for (let t of e)
        if (typeof t != `string` && typeof t != `number` && !oe(t)) return !1;
    return !0
}

function oe(e) {
    return Y(e) ? typeof e.type == `string` && Y(e.props) && X(e.children) : !1
}
var Z, se = e((() => {
        W(), I(), J(), Z = class {
            constructor(e, t, n) {
                this.encoded = e, this.consumer = t, this.valueResolver = n, this.offset = 0;
                let r = e.descriptorSize;
                if (!Number.isInteger(r) || r < 0 || r > e.descriptor.byteLength || r % 4 != 0) throw Error(`Invalid DIL render operations descriptor size.`);
                this.view = new DataView(e.descriptor, 0, r)
            }
            apply() {
                for (; this.offset < this.view.byteLength;) {
                    let e = this.readUint32();
                    switch (e) {
                        case 1: {
                            let e = this.readUint32(),
                                t = this.readUint32();
                            this.consumer.onElementNodeCreated(e, t);
                            break
                        }
                        case 2: {
                            let e = this.readUint32(),
                                t = this.readString();
                            this.consumer.onTextNodeCreated(e, t);
                            break
                        }
                        case 3:
                            this.consumer.onNodeDestroyed(this.readUint32());
                            break;
                        case 4:
                            this.consumer.onNodeMoved(this.readUint32(), this.readUint32(), this.readUint32());
                            break;
                        case 5:
                            this.consumer.onNodePropChanged(this.readUint32(), this.readString(), this.readValue());
                            break;
                        case 6: {
                            let e = this.readUint32(),
                                t = this.readString();
                            this.consumer.onTextNodeChanged(e, t);
                            break
                        }
                        case 7: {
                            let e = this.readUint32(),
                                t = this.readValue();
                            if (!X(t)) throw Error(`Invalid DIL render operation opaque children.`);
                            this.consumer.onNodeOpaqueChildrenChanged(e, t);
                            break
                        }
                        default:
                            throw Error(`Unknown DIL render operation kind ${e}.`)
                    }
                }
            }
            readValue() {
                let e = this.readUint32();
                switch (e) {
                    case 0:
                        return;
                    case 1:
                        return null;
                    case 2:
                        return !1;
                    case 3:
                        return !0;
                    case 4:
                        return this.readFloat64();
                    case 5:
                        return this.readString();
                    case 6: {
                        let e = this.readUint32(),
                            t = [];
                        for (let n = 0; n < e; n++) t.push(this.readValue());
                        return t
                    }
                    case 7: {
                        let e = this.readUint32(),
                            t = {};
                        for (let n = 0; n < e; n++) t[this.readString()] = this.readValue();
                        return t
                    }
                    case 8:
                        return this.valueResolver.resolveFunction(this.readUint32());
                    case 9: {
                        let e = this.valueResolver.resolveType(this.readUint32()),
                            t = this.readValue();
                        if (t !== void 0 && !Y(t)) throw Error(`Invalid DIL render operation element props.`);
                        let n = this.readValue();
                        if (!Array.isArray(n)) throw Error(`Invalid DIL render operation element children.`);
                        return z(e, t, n)
                    }
                    case 10: {
                        let e = this.readValue();
                        if (!Array.isArray(e)) throw Error(`Invalid DIL render operation fragment children.`);
                        return z(F, void 0, e)
                    }
                    case 11:
                        return this.readAttached();
                    case 12:
                        return this.valueResolver.resolveHtmlViewMessenger(this.readString());
                    default:
                        throw Error(`Unknown DIL render value kind ${e}.`)
                }
            }
            readString() {
                let e = this.readAttached();
                if (typeof e != `string`) throw Error(`Invalid DIL render operation string value.`);
                return e
            }
            readAttached() {
                let e = this.readUint32();
                if (e >= this.encoded.attachedValues.length) throw Error(`Invalid DIL render operation attached value index.`);
                return this.encoded.attachedValues[e]
            }
            readUint32() {
                if (this.offset + 4 > this.view.byteLength) throw Error(`Truncated DIL render operations descriptor.`);
                let e = this.view.getUint32(this.offset, !0);
                return this.offset += 4, e
            }
            readFloat64() {
                if (this.offset + 8 > this.view.byteLength) throw Error(`Truncated DIL render operations descriptor.`);
                let e = this.view.getFloat64(this.offset, !0);
                return this.offset += 8, e
            }
        }
    })),
    Q, $, ce = e((() => {
        g(), x(), Q = class {
            constructor(e, t) {
                this.recording = e, this.submission = t, this.disposed = !1
            }
            createSession(e, t) {
                if (this.disposed) throw Error(`Deferred turn owner is disposed.`);
                let n = this.attempt,
                    r = new $(this.submission, t);
                return this.attempt = r, n?.retire(), this.attempt !== r || this.disposed ? (r.retire(), r) : (r.create(this.recording, e), r)
            }
            dispose() {
                this.disposed = !0;
                let e = this.attempt;
                this.attempt = void 0, e?.retire()
            }
        }, $ = class {
            constructor(e, n) {
                this.submission = e, this.onEvent = n, this.revoked = !1, this.starting = !1, this.done = !1, this.deferredTurn = t({
                    complete: (e, t) => this.complete(e, t),
                    cancel: () => this.cancel()
                })
            }
            create(e, t) {
                this.session = e.createSession(t, e => this.receive(e)), this.revoked && this.dispose()
            }
            start() {
                if (!(this.revoked || this.starting)) {
                    this.starting = !0;
                    try {
                        if (!this.submission.isContextValid() || this.revoked) {
                            this.cancel();
                            return
                        }
                        this.session?.start()
                    } catch (e) {
                        throw this.revoked = !0, e
                    } finally {
                        this.starting = !1
                    }
                }
            }
            stop() {
                try {
                    this.session?.stop()
                } catch (e) {
                    throw this.revoked = !0, e
                }
            }
            cancel() {
                this.revoked = !0;
                try {
                    this.session?.cancel()
                } catch (e) {
                    throw this.dispose(), e
                }
            }
            retire() {
                this.revoked = !0, this.dispose()
            }
            dispose() {
                this.done || (this.revoked = !0);
                let e = this.session;
                this.session = void 0, e?.dispose()
            }
            receive(e) {
                switch (e.kind) {
                    case b.Done:
                        this.done = !0;
                        break;
                    case b.Error:
                    case b.Cancelled:
                        this.revoked = !0;
                        break
                }
                this.onEvent(e)
            }
            isCurrent() {
                return !this.revoked && !this.starting && this.done
            }
            complete(e, t) {
                if (this.completion !== void 0) return this.completion;
                if (!this.isCurrent()) return Promise.resolve(!1);
                let n, r;
                return this.completion = new Promise((e, t) => {
                    n = e, r = t
                }), this.submission.issueNewTurn(e, t, () => this.isCurrent()).then(n, r), this.completion
            }
        }
    }));
export {
    c as A, E as C, b as D, ee as E, a as M, o as N, x as O, n as P, te as S, T, I as _, q as a, M as b, H as c, re as d, W as f, F as g, L as h, se as i, g as j, _ as k, B as l, ie as m, ce as n, J as o, R as p, ae as r, V as s, Q as t, z as u, k as v, D as w, ne as x, O as y
};
//# sourceMappingURL=1173c32c-hgx6zujdlpcl9ro9.js.map