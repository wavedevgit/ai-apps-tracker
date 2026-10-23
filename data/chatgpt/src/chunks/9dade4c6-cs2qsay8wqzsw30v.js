import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ant as t,
    Crt as n,
    Knt as r,
    Ont as i,
    Rnt as a,
    Wnt as o,
    vrt as s,
    xj as c,
    xnt as l
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Ln as u,
    Rn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CKn as f,
    SKn as p,
    xKn as m
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    n as h
} from "./9ac7a75a-b2xe2u6rqme9vdc9.js";

function g(e) {
    return e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` || e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT-latest-x64.dmg`
}

function _() {
    return typeof window < `u` && a() && !t() && !i()
}

function v() {
    return _() ? `micro_installer` : `full_app`
}

function y(e, t, n, r) {
    if (!_() || !g(e) && e !== `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg`) return e;
    let i = n === `micro_installer` ? c : e;
    try {
        o.logStructuredEvent(`ChatgptDesktopDownloadSelected`, {
            artifact: i === `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg` ? m.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_UNIVERSAL_INSTALLER : e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` ? m.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_ARM64_APP : m.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_X64_APP,
            surface: x[t],
            ctaId: r
        }), Promise.all([o.flushStructuredEvents(250), s(250)]).catch(() => void 0)
    } catch {}
    return i
}
var b, x, S = e((() => {
    r(), n(), l(), h(), f(), d(), b = u({
        downloadMac: {
            id: `codex.ctas.mac`,
            defaultMessage: `Download for macOS`
        }
    }), x = {
        download_page: p.CHATGPT_DESKTOP_DOWNLOAD_SURFACE_DOWNLOAD_PAGE,
        contentful_ctas: p.CHATGPT_DESKTOP_DOWNLOAD_SURFACE_CONTENTFUL_CTAS,
        contentful_button: p.CHATGPT_DESKTOP_DOWNLOAD_SURFACE_CONTENTFUL_BUTTON,
        rosalind_marketing: p.CHATGPT_DESKTOP_DOWNLOAD_SURFACE_ROSALIND_MARKETING
    }
}));
export {
    y as a, g as i, v as n, S as r, b as t
};
//# sourceMappingURL=9dade4c6-cs2qsay8wqzsw30v.js.map