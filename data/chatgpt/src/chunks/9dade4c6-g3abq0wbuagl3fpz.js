import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cnt as t,
    Lnt as n,
    drt as r,
    grt as i,
    jnt as a,
    mnt as o,
    xj as s,
    xnt as c,
    znt as l
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Ln as u,
    Rn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    aKn as f,
    oKn as p,
    sKn as m
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    n as h
} from "./9ac7a75a-crpgrc4bovdj6lu7.js";

function g(e) {
    return e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` || e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT-latest-x64.dmg`
}

function _() {
    return typeof window < `u` && a() && !t() && !c()
}

function v() {
    return _() ? `micro_installer` : `full_app`
}

function y(e, t, i, a) {
    if (!_() || !g(e) && e !== `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg`) return e;
    let o = i === `micro_installer` ? s : e;
    try {
        n.logStructuredEvent(`ChatgptDesktopDownloadSelected`, {
            artifact: o === `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg` ? f.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_UNIVERSAL_INSTALLER : e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` ? f.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_ARM64_APP : f.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_X64_APP,
            surface: x[t],
            ctaId: a
        }), Promise.all([n.flushStructuredEvents(250), r(250)]).catch(() => void 0)
    } catch {}
    return o
}
var b, x, S = e((() => {
    l(), i(), o(), h(), m(), d(), b = u({
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
//# sourceMappingURL=9dade4c6-g3abq0wbuagl3fpz.js.map