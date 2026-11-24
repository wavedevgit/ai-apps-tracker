export const __rspack_esm_ids = [736644];
export const __webpack_modules__ = {
    p75q: (function(a, b, c) {
        a.exports = c.p + "assets/favicon-180x180.9e0103ce69.png"
    }),
    PDys: (function(a, b, c) {
        a.exports = c.p + "assets/favicon-48x48.7d42b2e65f.png"
    }),
    CgXo: (function(a, b, c) {
        a.exports = c.p + "assets/favicon-dark.cdf009c235.svg"
    }),
    E7my: (function(a, b, c) {
        a.exports = c.p + "assets/favicon-light.2e21f504de.svg"
    }),
    zU1G: (function(a, b, c) {
        a.exports = c.p + "assets/favicon.6a33781f61.svg"
    }),
    Swq6: (function(a) {
        a.exports = '// Resolve OS appearance before styles paint without a blocking network request.\n// Hydration preserves this seed until AppearanceProvider takes over.\n/** @param {string} browserThemeCacheKey */\n// oxlint-disable-next-line no-unused-vars -- The raw source is called by browser-theme-bootstrap.ts when constructing the inline script.\nfunction initializeBrowserTheme(browserThemeCacheKey) {\n  const root = document.documentElement;\n  const preference = root.dataset.appearanceMode;\n  if (preference === "light" || preference === "dark") {\n    root.dataset.theme = preference;\n  } else {\n    root.dataset.theme = window.matchMedia("(prefers-color-scheme: dark)")\n      .matches\n      ? "dark"\n      : "light";\n  }\n  try {\n    const themes = JSON.parse(\n      window.localStorage.getItem(browserThemeCacheKey),\n    );\n    const mode = themes?.[root.dataset.theme];\n    if (\n      typeof themes?.css === "string" &&\n      (typeof mode === "boolean" ||\n        (typeof mode?.preset === "string" &&\n          typeof mode.chatGpt === "boolean")) &&\n      // The origin-wide cache may belong to a different user or workspace.\n      themes.accountId === (root.dataset.themeAccountId ?? null) &&\n      themes.userId === (root.dataset.themeUserId ?? null)\n    ) {\n      document.querySelector("style[data-codex-app-themes]").textContent =\n        root.dataset.theme === themes.variant\n          ? themes.css\n          : (themes.alternateCss ?? themes.css);\n      if (typeof mode !== "boolean") {\n        root.dataset.appearancePreset = mode.preset;\n      }\n      root.classList.toggle(\n        "chatgpt-theme",\n        typeof mode === "boolean" ? mode : mode.chatGpt === true,\n      );\n    }\n  } catch {\n    // Unavailable storage or an invalid cache leaves the default palette intact.\n  }\n}\n'
    }),
    NQlU: (function(a) {
        a.exports = '// Classic inline script: install before the streamed Page content can paint.\n(() => {\n  if (window.__codexPageSsrPaint) {\n    return;\n  }\n\n  /** @type {number | null} */\n  let earliest = null;\n  let cutoff = Infinity;\n  let finished = false;\n  /** @type {PerformanceObserver | undefined} */\n  let observer;\n  /** @type {number | undefined} */\n  let timeout;\n  /** @type {number | undefined} */\n  let drainTimeout;\n  /** @type {(value: number | null) => void} */\n  let resolveResult = () => {};\n  /** @type {Promise<number | null>} */\n  const result = new Promise((resolve) => {\n    resolveResult = resolve;\n  });\n\n  /** @param {Array<PerformanceEntry & { renderTime?: number, identifier?: string, intersectionRect?: { width: number, height: number } }>} entries */\n  function collect(entries) {\n    if (finished) {\n      return;\n    }\n    for (const entry of entries) {\n      const time = entry.renderTime;\n      if (\n        entry.identifier === "codex-page-ssr-content" &&\n        typeof time === "number" &&\n        Number.isFinite(time) &&\n        time > 0 &&\n        time < cutoff &&\n        (entry.intersectionRect?.width ?? 0) > 0 &&\n        (entry.intersectionRect?.height ?? 0) > 0\n      ) {\n        earliest = earliest == null ? time : Math.min(earliest, time);\n        startDrain();\n      }\n    }\n  }\n\n  function startDrain() {\n    if (!finished && drainTimeout === undefined) {\n      // Delivery can lag paint. Later signals must not extend this window.\n      drainTimeout = window.setTimeout(finish, 100);\n    }\n  }\n\n  function finish() {\n    if (finished) {\n      return earliest != null && earliest < cutoff ? earliest : null;\n    }\n    if (observer) {\n      try {\n        collect(observer.takeRecords());\n      } catch {\n        // A failing timing API must not prevent teardown or fallback reporting.\n      }\n    }\n    finished = true;\n    try {\n      observer?.disconnect();\n    } catch {\n      // Still release the collector\'s timers, listeners and result.\n    }\n    observer = undefined;\n    window.clearTimeout(timeout);\n    window.clearTimeout(drainTimeout);\n    document.removeEventListener("visibilitychange", onVisibilityChange);\n    window.removeEventListener("pagehide", onPageHide);\n    resolveResult(earliest != null && earliest < cutoff ? earliest : null);\n    return earliest != null && earliest < cutoff ? earliest : null;\n  }\n\n  function onPageHide() {\n    cutoff = Math.min(cutoff, performance.now());\n    finish();\n  }\n\n  function onVisibilityChange() {\n    if (document.visibilityState === "hidden") {\n      onPageHide();\n    }\n  }\n\n  window.__codexPageSsrPaint = {\n    result,\n    finish() {\n      cutoff = Math.min(cutoff, performance.now());\n      return finish();\n    },\n    /** @param {number} atMs */\n    seal(atMs) {\n      // Match the owner\'s epoch clock after a fallback\'s relative-time round trip.\n      if (\n        finished ||\n        !Number.isFinite(atMs) ||\n        atMs < 0 ||\n        performance.timeOrigin + atMs >\n          performance.timeOrigin + performance.now()\n      ) {\n        return;\n      }\n      cutoff = Math.min(cutoff, atMs);\n      startDrain();\n    },\n  };\n\n  try {\n    if (\n      document.visibilityState === "hidden" ||\n      typeof PerformanceObserver === "undefined" ||\n      !PerformanceObserver.supportedEntryTypes?.includes("element")\n    ) {\n      finish();\n      return;\n    }\n    observer = new PerformanceObserver((list) => collect(list.getEntries()));\n    observer.observe({ type: "element", buffered: true });\n    document.addEventListener("visibilitychange", onVisibilityChange);\n    window.addEventListener("pagehide", onPageHide);\n    timeout = window.setTimeout(finish, 60_000);\n  } catch {\n    finish();\n  }\n})();\n'
    }),
    F2qa: (function(a, b, c) {
        a.exports = c.p + "assets/fallen-pet.6711e7a4c7.avif"
    })
};
import {
    __webpack_require__ as a
} from "./633146.192293cdfd.js";
import * as b from "./680612.78d390493a.js";
a.C(b);
import * as c from "./418851.373d5e7c7d.js";
a.C(c);
import * as d from "./109308.6f7ef1dfb7.js";
a.C(d);
import * as e from "./399565.61ce507128.js";
a.C(e);
import * as f from "./257798.18e3fd1164.js";
a.C(f);
import * as g from "./447351.05632d2214.js";
a.C(g);
import * as h from "./617936.82c33d1781.js";
a.C(h);
import * as i from "./807489.80226d951f.js";
a.C(i);
import * as j from "./337882.c48859a67a.js";
a.C(j);
import * as k from "./955979.3817544990.js";
a.C(k);
import * as l from "./646436.8f73ec6517.js";
a.C(l);
import * as m from "./7078.fb59bca78c.js";
a.C(m);
import * as n from "./200429.7f45d5c86a.js";
a.C(n);
import * as o from "./698524.906978efe4.js";
a.C(o);
import * as p from "./956483.b7886e0470.js";
a.C(p);
import * as q from "./87162.563f0c8e80.js";
a.C(q);
import * as r from "./396705.5e3411e749.js";
a.C(r);
import * as s from "./155568.5b6ea1007a.js";
a.C(s);
import * as t from "./731863.5065e21881.js";
a.C(t);
import * as u from "./767086.2154dca9c8.js";
a.C(u);
import * as v from "./76629.6adf997716.js";
a.C(v);
import * as w from "./226913.748570e15f.js";
a.C(w);
import * as x from "./736644.a6ea762d80.js";
a.C(x);
var y = a(a.s = "hYXn"),
    z = y.a,
    A = y.b,
    B = y.c,
    C = y.d,
    D = y.e;
export {
    z as ErrorBoundary, A as Layout, B as clientMiddleware, C as
    default, D as meta
};