import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dat as t,
    Fat as n,
    Iat as r,
    Nat as i
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Rn as a,
    zn as o
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    czt as s,
    lzt as c
} from "./conversation-small-cawdu7il3ha6y70c.js";

function l(e, t) {
    if (typeof e != `object` || !e) return;
    let n = Reflect.get(e, t);
    return typeof n == `string` && n.trim() ? n.trim() : void 0
}

function u(e, t) {
    if (typeof e != `object` || !e) return [];
    let n = Reflect.get(e, t);
    return Array.isArray(n) ? n.filter(e => typeof e == `string` && e.trim() !== ``) : []
}

function d(e) {
    let t = e.detail,
        n = [`skill_name`, `hazelnut_name`, `name`, `duplicate_name`];
    for (let e of n) {
        let n = l(t, e);
        if (n) return n
    }
    for (let e of [`duplicate_names`, `skill_names`, `hazelnut_names`]) {
        let n = u(t, e);
        if (n.length > 0) return n[0]
    }
    let r = (() => {
        if (!(typeof t != `object` || !t)) return Reflect.get(t, `error`)
    })();
    if (r && typeof r == `object`)
        for (let e of n) {
            let t = l(r, e);
            if (t) return t
        }
    let i = e.message ?? ``;
    if (!i) return;
    let a = i.match(/(?:skill|name)\s*["'`]?([^"'`]+)["'`]?\s+already exists/i);
    if (a?.[1]?.trim()) return a[1].trim();
    let o = i.match(/["'`]([^"'`]+)["'`]/);
    if (o?.[1]?.trim()) return o[1].trim()
}

function f(e) {
    if (!(e instanceof t) || e.code !== `hazelnut_duplicate_name`) return null;
    let n = d(e);
    if (!n) return null;
    let r = l(e.detail, `resolution`);
    return r === `UPDATE_EXISTING` || r === `FORCE_CREATE` ? {
        skillName: n,
        resolution: r
    } : typeof e.detail == `object` && e.detail != null && Reflect.get(e.detail, `updateable`) === !0 ? {
        skillName: n,
        resolution: `UPDATE_EXISTING`
    } : {
        skillName: n,
        resolution: null
    }
}

function p({
    error: e,
    intl: i,
    fallbackMessage: a
}) {
    let o = e instanceof t ? e : void 0,
        s = (c.isAxiosError(e) ? e.response?.status : void 0) ?? o?.status,
        l = (e instanceof Error ? e.message : ``).toLowerCase();
    if (n(e)) return i.formatMessage(m.networkError);
    if (s === 401 || s === 403) return i.formatMessage(m.permissionDenied);
    if (s === 408 || s === 504 || l.includes(`timeout`)) return i.formatMessage(m.timeout);
    if (s === 413) return i.formatMessage(m.archiveTooLarge);
    if (o?.code === `hazelnut_duplicate_name`) {
        let t = f(o);
        if (t?.resolution === null) {
            let t = r(e);
            if (t) return t
        }
        return t?.skillName ? i.formatMessage(m.duplicateNameWithSkill, {
            skillName: t.skillName
        }) : i.formatMessage(m.duplicateName)
    }
    return l.includes(`can't save hazelnut after it has been shared`) ? i.formatMessage(m.sharedSaveError) : l.includes(`skill.md front matter 'name' must`) || l.includes(`skill name should follow the format`) ? i.formatMessage(m.invalidSkillName) : l.includes(`not a valid zip`) ? i.formatMessage(m.invalidZip) : l.includes(`no skills parsed from archive`) ? i.formatMessage(m.archiveEmpty) : l.includes(`too large to extract safely`) ? i.formatMessage(m.archiveTooLarge) : l.includes(`over-compressed`) ? i.formatMessage(m.archiveUnsafeCompression) : l.includes(`skill.md must be utf-8 encoded`) ? i.formatMessage(m.invalidEncoding) : l.includes(`files must include at least one entry`) ? i.formatMessage(m.archiveEmpty) : r(e) || i.formatMessage(a)
}
var m, h = e((() => {
    i(), s(), o(), m = a({
        networkError: {
            defaultMessage: `We couldn't upload or create the skill because your network connection was interrupted. Check your connection and try again.`,
            id: `hazelnutsSettings.networkError`
        },
        permissionDenied: {
            defaultMessage: `You don't have permission to upload or create skills in this workspace.`,
            id: `hazelnutsSettings.permissionDenied`
        },
        invalidZip: {
            defaultMessage: `That file isn't a valid .zip skill archive. Re-export the skill and try again.`,
            id: `hazelnutsSettings.invalidZip`
        },
        archiveTooLarge: {
            defaultMessage: `This .zip file is too large to upload. Remove large files or split the skill into smaller archives.`,
            id: `hazelnutsSettings.archiveTooLarge`
        },
        archiveUnsafeCompression: {
            defaultMessage: `That .zip file can't be opened because it appears to be over-compressed. Re-export the skill archive and try again.`,
            id: `hazelnutsSettings.archiveUnsafeCompression`
        },
        archiveEmpty: {
            defaultMessage: `We couldn't find any skills in that .zip file. Make sure it contains a SKILL.md file and try again.`,
            id: `hazelnutsSettings.archiveEmpty`
        },
        duplicateName: {
            defaultMessage: `A skill with this name already exists in your workspace. Rename the skill and try again.`,
            id: `hazelnutsSettings.duplicateName`
        },
        duplicateNameWithSkill: {
            defaultMessage: `The skill "{skillName}" already exists in your workspace. Rename that skill and try again.`,
            id: `hazelnutsSettings.duplicateNameWithSkill`
        },
        invalidSkillName: {
            defaultMessage: `Skill name should follow the format your-skill-name`,
            id: `hazelnutsSettings.invalidSkillName`
        },
        sharedSaveError: {
            defaultMessage: `Can’t save Skill after it has been shared.`,
            id: `hazelnutsSettings.sharedSaveError`
        },
        invalidEncoding: {
            defaultMessage: `SKILL.md must be saved as UTF-8. Re-save the file and try again.`,
            id: `hazelnutsSettings.invalidEncoding`
        },
        timeout: {
            defaultMessage: `Skill creation is taking longer than expected. Please try again.`,
            id: `hazelnutsSettings.timeout`
        }
    })
}));
export {
    p as n, h as r, f as t
};
//# sourceMappingURL=11defd9b-ern3zf7pu335p4ey.js.map