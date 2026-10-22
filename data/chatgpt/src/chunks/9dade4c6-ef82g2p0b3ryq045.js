import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Int as t,
    Ont as n,
    Pnt as r,
    bnt as i,
    crt as a,
    dnt as o,
    prt as s,
    vnt as c,
    xj as l
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Ln as u,
    Rn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    HGn as f,
    UGn as p,
    WGn as m
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    n as h
} from "./9ac7a75a-brr8cs4b9fpesw8v.js";

function g(e) {
    return e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` || e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT-latest-x64.dmg`
}

function _() {
    return typeof window < `u` && n() && !i() && !c()
}

function v() {
    return _() ? `micro_installer` : `full_app`
}

function y(e, t, n, i) {
    if (!_() || !g(e) && e !== `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg`) return e;
    let o = n === `micro_installer` ? l : e;
    try {
        r.logStructuredEvent(`ChatgptDesktopDownloadSelected`, {
            artifact: o === `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg` ? f.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_UNIVERSAL_INSTALLER : e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` ? f.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_ARM64_APP : f.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_X64_APP,
            surface: x[t],
            ctaId: i
        }), Promise.all([r.flushStructuredEvents(250), a(250)]).catch(() => void 0)
    } catch {}
    return o
}
var b, x, S = e((() => {
    t(), s(), o(), h(), m(), d(), b = u({
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
//# sourceMappingURL=9dade4c6-ef82g2p0b3ryq045.js.map