import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as t,
    Jnt as n,
    Ktt as r,
    Unt as i,
    _nt as a,
    hj as o,
    hnt as s,
    lnt as c,
    tnt as l
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Rn as u,
    zn as d
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    DGn as f,
    EGn as p,
    TGn as m
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    n as h
} from "./9ac7a75a-o42ejieyzry8c3s2.js";

function g(e) {
    return e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` || e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT-latest-x64.dmg`
}

function _() {
    return typeof window < `u` && c() && !l() && !t()
}

function v() {
    return _() ? `micro_installer` : `full_app`
}

function y(e, t, n, r) {
    if (!_() || !g(e) && e !== `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg`) return e;
    let a = n === `micro_installer` ? o : e;
    try {
        s.logStructuredEvent(`ChatgptDesktopDownloadSelected`, {
            artifact: a === `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg` ? m.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_UNIVERSAL_INSTALLER : e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` ? m.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_ARM64_APP : m.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_X64_APP,
            surface: x[t],
            ctaId: r
        }), Promise.all([s.flushStructuredEvents(250), i(250)]).catch(() => void 0)
    } catch {}
    return a
}
var b, x, S = e((() => {
    a(), n(), r(), h(), f(), d(), b = u({
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
//# sourceMappingURL=9dade4c6-ba3nmy7no2d9k9my.js.map