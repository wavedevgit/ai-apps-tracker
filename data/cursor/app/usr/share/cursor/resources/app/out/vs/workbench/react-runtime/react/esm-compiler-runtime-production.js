! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "796100d4-6792-5007-a8cc-0eed9fea986d")
    } catch (e) {}
}();
import e from "./esm-index-production.js";
export function c(_) {
    return e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H.useMemoCache(_)
}
const t = {
    c
};
export default t;

//# sourceMappingURL=http://go/sourcemap/sourcemaps/042b3c1a4c53f2c3808067f519fbfc67b72cad80/core/vs/workbench/react-runtime/react/esm-compiler-runtime-production.js.map

//# debugId=796100d4-6792-5007-a8cc-0eed9fea986d