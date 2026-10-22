import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ant as t,
    Int as n,
    Rnt as r,
    Snt as i,
    bnt as a,
    hrt as o,
    pnt as s,
    urt as c,
    xj as l
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Ln as u,
    Rn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    aKn as f,
    oKn as p,
    sKn as m
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    n as h
} from "./9ac7a75a-chp6ksomhx4r867p.js";

function g(e) {
    return e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` || e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT-latest-x64.dmg`
}

function _() {
    return typeof window < `u` && t() && !i() && !a()
}

function v() {
    return _() ? `micro_installer` : `full_app`
}

function y(e, t, r, i) {
    if (!_() || !g(e) && e !== `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg`) return e;
    let a = r === `micro_installer` ? l : e;
    try {
        n.logStructuredEvent(`ChatgptDesktopDownloadSelected`, {
            artifact: a === `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg` ? f.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_UNIVERSAL_INSTALLER : e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` ? f.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_ARM64_APP : f.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_X64_APP,
            surface: x[t],
            ctaId: i
        }), Promise.all([n.flushStructuredEvents(250), c(250)]).catch(() => void 0)
    } catch {}
    return a
}
var b, x, S = e((() => {
    r(), o(), s(), h(), m(), d(), b = u({
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
//# sourceMappingURL=9dade4c6-u0fdvd0b6ffceo87.js.map