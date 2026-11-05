export const __rspack_esm_ids = [736644];
export const __webpack_modules__ = {
    p75q: (function(e, n, t) {
        e.exports = t.p + "assets/favicon-180x180.9e0103ce69.png"
    }),
    PDys: (function(e, n, t) {
        e.exports = t.p + "assets/favicon-48x48.7d42b2e65f.png"
    }),
    CgXo: (function(e, n, t) {
        e.exports = t.p + "assets/favicon-dark.cdf009c235.svg"
    }),
    E7my: (function(e, n, t) {
        e.exports = t.p + "assets/favicon-light.2e21f504de.svg"
    }),
    zU1G: (function(e, n, t) {
        e.exports = t.p + "assets/favicon.6a33781f61.svg"
    }),
    Swq6: (function(e) {
        e.exports = '// Resolve OS appearance before styles paint without a blocking network request.\n// Hydration preserves this seed until AppearanceProvider takes over.\n/** @param {string} browserThemeCacheKey */\n// oxlint-disable-next-line no-unused-vars -- The raw source is called by browser-theme-bootstrap.ts when constructing the inline script.\nfunction initializeBrowserTheme(browserThemeCacheKey) {\n  const root = document.documentElement;\n  const preference = root.dataset.appearanceTheme;\n  if (preference === "light" || preference === "dark") {\n    root.dataset.theme = preference;\n  } else {\n    root.dataset.theme = window.matchMedia("(prefers-color-scheme: dark)")\n      .matches\n      ? "dark"\n      : "light";\n  }\n  try {\n    const themes = JSON.parse(\n      window.localStorage.getItem(browserThemeCacheKey),\n    );\n    if (\n      typeof themes?.css === "string" &&\n      typeof themes.light === "boolean" &&\n      typeof themes.dark === "boolean" &&\n      // The origin-wide cache may belong to a different user or workspace.\n      themes.accountId === (root.dataset.themeAccountId ?? null) &&\n      themes.userId === (root.dataset.themeUserId ?? null)\n    ) {\n      document.querySelector("style[data-codex-app-themes]").textContent =\n        themes.css;\n      root.classList.toggle(\n        "chatgpt-theme",\n        themes[root.dataset.theme] === true,\n      );\n    }\n  } catch {\n    // Unavailable storage or an invalid cache leaves the default palette intact.\n  }\n}\n'
    }),
    NQlU: (function(e) {
        e.exports = '// Classic inline script: install before the streamed Page content can paint.\n(() => {\n  if (window.__codexPageSsrPaint) {\n    return;\n  }\n\n  /** @type {number | null} */\n  let earliest = null;\n  let cutoff = Infinity;\n  let finished = false;\n  /** @type {PerformanceObserver | undefined} */\n  let observer;\n  /** @type {number | undefined} */\n  let timeout;\n  /** @type {number | undefined} */\n  let drainTimeout;\n  /** @type {(value: number | null) => void} */\n  let resolveResult = () => {};\n  /** @type {Promise<number | null>} */\n  const result = new Promise((resolve) => {\n    resolveResult = resolve;\n  });\n\n  /** @param {Array<PerformanceEntry & { renderTime?: number, identifier?: string, intersectionRect?: { width: number, height: number } }>} entries */\n  function collect(entries) {\n    if (finished) {\n      return;\n    }\n    for (const entry of entries) {\n      const time = entry.renderTime;\n      if (\n        entry.identifier === "codex-page-ssr-content" &&\n        typeof time === "number" &&\n        Number.isFinite(time) &&\n        time > 0 &&\n        time < cutoff &&\n        (entry.intersectionRect?.width ?? 0) > 0 &&\n        (entry.intersectionRect?.height ?? 0) > 0\n      ) {\n        earliest = earliest == null ? time : Math.min(earliest, time);\n        startDrain();\n      }\n    }\n  }\n\n  function startDrain() {\n    if (!finished && drainTimeout === undefined) {\n      // Delivery can lag paint. Later signals must not extend this window.\n      drainTimeout = window.setTimeout(finish, 100);\n    }\n  }\n\n  function finish() {\n    if (finished) {\n      return earliest != null && earliest < cutoff ? earliest : null;\n    }\n    if (observer) {\n      try {\n        collect(observer.takeRecords());\n      } catch {\n        // A failing timing API must not prevent teardown or fallback reporting.\n      }\n    }\n    finished = true;\n    try {\n      observer?.disconnect();\n    } catch {\n      // Still release the collector\'s timers, listeners and result.\n    }\n    observer = undefined;\n    window.clearTimeout(timeout);\n    window.clearTimeout(drainTimeout);\n    document.removeEventListener("visibilitychange", onVisibilityChange);\n    window.removeEventListener("pagehide", onPageHide);\n    resolveResult(earliest != null && earliest < cutoff ? earliest : null);\n    return earliest != null && earliest < cutoff ? earliest : null;\n  }\n\n  function onPageHide() {\n    cutoff = Math.min(cutoff, performance.now());\n    finish();\n  }\n\n  function onVisibilityChange() {\n    if (document.visibilityState === "hidden") {\n      onPageHide();\n    }\n  }\n\n  window.__codexPageSsrPaint = {\n    result,\n    finish() {\n      cutoff = Math.min(cutoff, performance.now());\n      return finish();\n    },\n    /** @param {number} atMs */\n    seal(atMs) {\n      // Match the owner\'s epoch clock after a fallback\'s relative-time round trip.\n      if (\n        finished ||\n        !Number.isFinite(atMs) ||\n        atMs < 0 ||\n        performance.timeOrigin + atMs >\n          performance.timeOrigin + performance.now()\n      ) {\n        return;\n      }\n      cutoff = Math.min(cutoff, atMs);\n      startDrain();\n    },\n  };\n\n  try {\n    if (\n      document.visibilityState === "hidden" ||\n      typeof PerformanceObserver === "undefined" ||\n      !PerformanceObserver.supportedEntryTypes?.includes("element")\n    ) {\n      finish();\n      return;\n    }\n    observer = new PerformanceObserver((list) => collect(list.getEntries()));\n    observer.observe({ type: "element", buffered: true });\n    document.addEventListener("visibilitychange", onVisibilityChange);\n    window.addEventListener("pagehide", onPageHide);\n    timeout = window.setTimeout(finish, 60_000);\n  } catch {\n    finish();\n  }\n})();\n'
    }),
    F2qa: (function(e, n, t) {
        e.exports = t.p + "assets/fallen-pet.6711e7a4c7.avif"
    })
};
import {
    __webpack_require__ as e
} from "./633146.2285f1d8aa.js";
import * as n from "./680612.a5a31a0030.js";
e.C(n);
import * as t from "./418851.a4e06377a0.js";
e.C(t);
import * as r from "./109308.c442cdd552.js";
e.C(r);
import * as i from "./399565.beb7308a81.js";
e.C(i);
import * as s from "./257798.1c607c1777.js";
e.C(s);
import * as o from "./153380.b37e665dc3.js";
e.C(o);
import * as a from "./617936.784843eda2.js";
e.C(a);
import * as c from "./807489.43c08228d1.js";
e.C(c);
import * as m from "./337882.25be89bb6b.js";
e.C(m);
import * as f from "./955979.4d2a69cba7.js";
e.C(f);
import * as l from "./646436.9dd5128297.js";
e.C(l);
import * as d from "./7078.b81fd6ebdf.js";
e.C(d);
import * as p from "./200429.b8bf5eb48b.js";
e.C(p);
import * as u from "./698524.3578a8549b.js";
e.C(u);
import * as h from "./956483.8b486f09f8.js";
e.C(h);
import * as b from "./87162.984eea3ac6.js";
e.C(b);
import * as w from "./396705.3c89161782.js";
e.C(w);
import * as v from "./155568.af6d2aefa8.js";
e.C(v);
import * as y from "./731863.0ff6d7d48b.js";
e.C(y);
import * as g from "./767086.75fa16b40d.js";
e.C(g);
import * as C from "./76629.5f0e27ddaa.js";
e.C(C);
import * as _ from "./514085.974d142f7d.js";
e.C(_);
import * as j from "./204542.61a52e24da.js";
e.C(j);
import * as x from "./982651.82d8538ea6.js";
e.C(x);
import * as k from "./673108.fb5f4728ad.js";
e.C(k);
import * as P from "./487481.8cb886e883.js";
e.C(P);
import * as T from "./229522.d004cde422.js";
e.C(T);
import * as M from "./390575.e91c694262.js";
e.C(M);
import * as E from "./226913.d4efcaca8e.js";
e.C(E);
import * as S from "./736644.00e658452d.js";
e.C(S);
var L = e(e.s = "BbnC"),
    O = L.a,
    R = L.b,
    I = L.c,
    q = L.d,
    A = L.e;
export {
    O as ErrorBoundary, R as Layout, I as clientMiddleware, q as
    default, A as meta
};