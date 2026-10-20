import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Gnt as t,
    Jtt as n,
    Xnt as r,
    _nt as i,
    dnt as a,
    hj as o,
    rnt as s,
    tnt as c,
    ynt as l
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Ln as u,
    Rn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    SGn as f,
    bGn as p,
    xGn as m
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as h
} from "./9ac7a75a-n1ynto4h6ob9r4kj.js";

function g(e) {
    return e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` || e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT-latest-x64.dmg`
}

function _() {
    return typeof window < `u` && a() && !s() && !c()
}

function v() {
    return _() ? `micro_installer` : `full_app`
}

function y(e, n, r, a) {
    if (!_() || !g(e) && e !== `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg`) return e;
    let s = r === `micro_installer` ? o : e;
    try {
        i.logStructuredEvent(`ChatgptDesktopDownloadSelected`, {
            artifact: s === `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg` ? p.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_UNIVERSAL_INSTALLER : e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` ? p.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_ARM64_APP : p.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_X64_APP,
            surface: x[n],
            ctaId: a
        }), Promise.all([i.flushStructuredEvents(250), t(250)]).catch(() => void 0)
    } catch {}
    return s
}
var b, x, S = e((() => {
    l(), r(), n(), h(), f(), d(), b = u({
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
//# sourceMappingURL=9dade4c6-foshw0b8jqeov39d.js.map