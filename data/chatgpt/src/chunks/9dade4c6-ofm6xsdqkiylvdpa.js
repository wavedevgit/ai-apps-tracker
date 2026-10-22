import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as t,
    Knt as n,
    Vnt as r,
    Wtt as i,
    Ztt as a,
    hj as o,
    hnt as s,
    pnt as c,
    snt as l
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Ln as u,
    Rn as d
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    EGn as f,
    TGn as p,
    wGn as m
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    n as h
} from "./9ac7a75a-jtc585w9qerwt9l2.js";

function g(e) {
    return e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` || e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT-latest-x64.dmg`
}

function _() {
    return typeof window < `u` && l() && !t() && !a()
}

function v() {
    return _() ? `micro_installer` : `full_app`
}

function y(e, t, n, i) {
    if (!_() || !g(e) && e !== `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg`) return e;
    let a = n === `micro_installer` ? o : e;
    try {
        c.logStructuredEvent(`ChatgptDesktopDownloadSelected`, {
            artifact: a === `https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg` ? m.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_UNIVERSAL_INSTALLER : e === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` ? m.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_ARM64_APP : m.CHATGPT_DESKTOP_DOWNLOAD_ARTIFACT_MAC_X64_APP,
            surface: x[t],
            ctaId: i
        }), Promise.all([c.flushStructuredEvents(250), r(250)]).catch(() => void 0)
    } catch {}
    return a
}
var b, x, S = e((() => {
    s(), n(), i(), h(), f(), d(), b = u({
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
//# sourceMappingURL=9dade4c6-ofm6xsdqkiylvdpa.js.map