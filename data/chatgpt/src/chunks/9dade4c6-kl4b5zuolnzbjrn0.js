import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Btt as t,
    Ett as n,
    Htt as r,
    Ptt as i,
    ZA as a,
    _tt as o,
    mnt as s,
    wtt as c,
    ynt as l
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Ln as u,
    Rn as d
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    dGn as f,
    fGn as p,
    pGn as m
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as h
} from "./9ac7a75a-fqy7qnhwh7jd5rfv.js";

function g(e) {
    return e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` || e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT-latest-x64.dmg`
}

function _() {
    return typeof window < `u` && i() && !n() && !c()
}

function v() {
    return _() ? `micro_installer` : `full_app`
}

function y(e, n, r, i) {
    if (!_() || !g(e) && e !== `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg`) return e;
    let o = r === `micro_installer` ? a : e;
    try {
        t.logStructuredEvent(`ChatgptDesktopDownloadSelected`, {
            artifact: o === `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg` ? f.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_UNIVERSAL_INSTALLER : e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` ? f.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_ARM64_APP : f.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_X64_APP,
            surface: x[n],
            ctaId: i
        }), Promise.all([t.flushStructuredEvents(250), s(250)]).catch(() => void 0)
    } catch {}
    return o
}
var b, x, S = e((() => {
    r(), l(), o(), h(), m(), d(), b = u({
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
//# sourceMappingURL=9dade4c6-kl4b5zuolnzbjrn0.js.map