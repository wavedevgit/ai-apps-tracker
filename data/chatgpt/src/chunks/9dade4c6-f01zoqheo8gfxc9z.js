import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Knt as t,
    Ytt as n,
    Znt as r,
    bnt as i,
    fnt as a,
    gj as o,
    int as s,
    nnt as c,
    vnt as l
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Ln as u,
    Rn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CGn as f,
    TGn as p,
    wGn as m
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    n as h
} from "./9ac7a75a-wz31coczqbyok3qn.js";

function g(e) {
    return e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` || e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT-latest-x64.dmg`
}

function _() {
    return typeof window < `u` && a() && !s() && !c()
}

function v() {
    return _() ? `micro_installer` : `full_app`
}

function y(e, n, r, i) {
    if (!_() || !g(e) && e !== `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg`) return e;
    let a = r === `micro_installer` ? o : e;
    try {
        l.logStructuredEvent(`ChatgptDesktopDownloadSelected`, {
            artifact: a === `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg` ? f.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_UNIVERSAL_INSTALLER : e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` ? f.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_ARM64_APP : f.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_X64_APP,
            surface: x[n],
            ctaId: i
        }), Promise.all([l.flushStructuredEvents(250), t(250)]).catch(() => void 0)
    } catch {}
    return a
}
var b, x, S = e((() => {
    i(), r(), n(), h(), p(), d(), b = u({
        downloadMac: {
            id: `codex.ctas.mac`,
            defaultMessage: `Download for macOS`
        }
    }), x = {
        download_page: m.CHATGPT_DESKTOP_DOWNLOAD_SURFACE_DOWNLOAD_PAGE,
        contentful_ctas: m.CHATGPT_DESKTOP_DOWNLOAD_SURFACE_CONTENTFUL_CTAS,
        contentful_button: m.CHATGPT_DESKTOP_DOWNLOAD_SURFACE_CONTENTFUL_BUTTON,
        rosalind_marketing: m.CHATGPT_DESKTOP_DOWNLOAD_SURFACE_ROSALIND_MARKETING
    }
}));
export {
    y as a, g as i, v as n, S as r, b as t
};
//# sourceMappingURL=9dade4c6-f01zoqheo8gfxc9z.js.map