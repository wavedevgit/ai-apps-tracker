import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Vn as n
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function r(e) {
    return e === 0 || e === 1 || e === 2 || e === 3 ? e : u
}

function i(e) {
    switch (e) {
        case 0:
        case 1:
            return [1, 1];
        case 2:
            return [1, 1.5];
        case 3:
            return [1, 2]
    }
}

function a(e) {
    switch (e) {
        case 0:
            return 0;
        case 1:
            return 12e3;
        case 2:
            return 28e3;
        case 3:
            return 4e4
    }
}

function o(e) {
    switch (e) {
        case 0:
            return 0;
        case 1:
            return 4;
        case 2:
            return 8;
        case 3:
            return 16
    }
}

function s(e) {
    switch (e) {
        case 0:
        case 1:
            return `none`;
        case 2:
            return `selective`;
        case 3:
            return `full`
    }
}

function c(e) {
    switch (e) {
        case 0:
            return `none`;
        case 1:
            return `low`;
        case 2:
            return `medium`;
        case 3:
            return `high`
    }
}

function l(e, t = {}) {
    let n = r(e?.tier),
        l = n > 0 && (e?.supportsWebGL ?? !0),
        u = t.reducedMotion ?? !1;
    return {
        canUseWebGL: () => l,
        getAntialias: () => !1,
        getDpr: () => i(n),
        getMaxParticleCount: () => a(n),
        getMaxShaderSamples: () => o(n),
        getPostprocessing: () => {
            let e = s(n);
            return u && e === `full` ? `selective` : e
        },
        getShaderQuality: () => c(n),
        getShaderQualityLevel: () => n,
        shouldUseContinuousMotion: () => l && !u,
        tier: n
    }
}
var u, d = e((() => {
        u = 1
    })),
    f, p, m, h = e((() => {
        f = t(n()), d(), p = l({
            tier: 0,
            supportsWebGL: !1,
            isMobile: !1,
            source: `ssr`,
            createdAt: 0
        }, {
            reducedMotion: !0
        }), m = (0, f.createContext)({
            status: `loading`,
            renderer: p,
            reducedMotion: !0
        })
    }));
export {
    d as a, l as i, h as n, p as r, m as t
};
//# sourceMappingURL=9e9d0eec-j24gxg6gi9duoed8.js.map