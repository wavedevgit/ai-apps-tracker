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
        e.exports = '// Resolve OS appearance before styles paint without a blocking network request.\n// Hydration preserves this seed until AppearanceProvider takes over.\n/** @param {string} browserThemeCacheKey */\n// oxlint-disable-next-line no-unused-vars -- The raw source is called by browser-theme-bootstrap.ts when constructing the inline script.\nfunction initializeBrowserTheme(browserThemeCacheKey) {\n  const root = document.documentElement;\n  const preference = root.dataset.appearanceMode;\n  if (preference === "light" || preference === "dark") {\n    root.dataset.theme = preference;\n  } else {\n    root.dataset.theme = window.matchMedia("(prefers-color-scheme: dark)")\n      .matches\n      ? "dark"\n      : "light";\n  }\n  try {\n    const themes = JSON.parse(\n      window.localStorage.getItem(browserThemeCacheKey),\n    );\n    const mode = themes?.[root.dataset.theme];\n    if (\n      typeof themes?.css === "string" &&\n      (typeof mode === "boolean" ||\n        (typeof mode?.preset === "string" &&\n          typeof mode.chatGpt === "boolean")) &&\n      // The origin-wide cache may belong to a different user or workspace.\n      themes.accountId === (root.dataset.themeAccountId ?? null) &&\n      themes.userId === (root.dataset.themeUserId ?? null)\n    ) {\n      document.querySelector("style[data-codex-app-themes]").textContent =\n        root.dataset.theme === themes.variant\n          ? themes.css\n          : (themes.alternateCss ?? themes.css);\n      if (typeof mode !== "boolean") {\n        root.dataset.appearancePreset = mode.preset;\n      }\n      root.classList.toggle(\n        "chatgpt-theme",\n        typeof mode === "boolean" ? mode : mode.chatGpt === true,\n      );\n    }\n  } catch {\n    // Unavailable storage or an invalid cache leaves the default palette intact.\n  }\n}\n'
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
} from "./633146.f7301c241c.js";
import * as n from "./680612.3c8d72f22d.js";
e.C(n);
import * as t from "./418851.9d6542c0a3.js";
e.C(t);
import * as r from "./109308.fbb414d4aa.js";
e.C(r);
import * as s from "./399565.ed5e74a86b.js";
e.C(s);
import * as o from "./257798.0b3d6025cd.js";
e.C(o);
import * as i from "./153380.6675e448cd.js";
e.C(i);
import * as a from "./617936.1be6495150.js";
e.C(a);
import * as m from "./807489.cf46a1fcce.js";
e.C(m);
import * as f from "./337882.e80888e843.js";
e.C(f);
import * as c from "./955979.6fabb942db.js";
e.C(c);
import * as d from "./646436.4f8e34a529.js";
e.C(d);
import * as l from "./7078.b1d26369b8.js";
e.C(l);
import * as p from "./200429.e4432be69e.js";
e.C(p);
import * as u from "./698524.91ff895348.js";
e.C(u);
import * as h from "./956483.aa76e97d2f.js";
e.C(h);
import * as b from "./87162.29ee0bd2a9.js";
e.C(b);
import * as y from "./396705.c39944bbf2.js";
e.C(y);
import * as v from "./155568.7bbfb72b85.js";
e.C(v);
import * as w from "./731863.8b87e9728a.js";
e.C(w);
import * as g from "./767086.6da4be4bcc.js";
e.C(g);
import * as C from "./76629.0d0b0e4ffa.js";
e.C(C);
import * as _ from "./514085.b43cbf5099.js";
e.C(_);
import * as j from "./204542.9e7fde25b9.js";
e.C(j);
import * as x from "./982651.7bfd071e83.js";
e.C(x);
import * as P from "./673108.f09bd0f99c.js";
e.C(P);
import * as k from "./487481.c884695c4d.js";
e.C(k);
import * as T from "./229522.4fa6d25393.js";
e.C(T);
import * as M from "./390575.db69fec7f2.js";
e.C(M);
import * as E from "./353032.cc07e31e0d.js";
e.C(E);
import * as S from "./637885.ca6d736a13.js";
e.C(S);
import * as L from "./226913.6965f848b1.js";
e.C(L);
import * as O from "./736644.55ec1698c2.js";
e.C(O);
var R = e(e.s = "pHeW"),
    I = R.a,
    H = R.b,
    q = R.c,
    A = R.d,
    D = R.e;
export {
    I as ErrorBoundary, H as Layout, q as clientMiddleware, A as
    default, D as meta
};