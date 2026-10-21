import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JT as t,
    YT as n
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as r,
    Ln as i,
    Nn as a,
    Rn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function s({
    skillName: e,
    resolution: n,
    mode: r,
    onCancel: i,
    onConfirm: o
}) {
    let s = n === `UPDATE_EXISTING` ? r === `upload` ? l.bodyUpdateExistingUpload : l.bodyUpdateExistingEditor : r === `update` ? l.bodyForceSave : l.bodyForceCreate,
        u = n === `UPDATE_EXISTING` ? r === `upload` ? l.replaceExisting : l.updateExisting : r === `update` ? l.saveAnyway : l.createAnyway;
    return (0, c.jsxs)(c.Fragment, {
        children: [(0, c.jsx)(`div`, {
            className: `text-token-text-primary text-2xl leading-8 font-semibold`,
            children: (0, c.jsx)(a, {
                ...l.title,
                values: {
                    skillName: e
                }
            })
        }), (0, c.jsx)(`div`, {
            className: `text-token-text-secondary mt-3 text-base leading-6`,
            children: (0, c.jsx)(a, {
                ...s
            })
        }), (0, c.jsxs)(`div`, {
            className: `mt-6 flex flex-col gap-3 sm:flex-row`,
            children: [(0, c.jsx)(t, {
                type: `button`,
                color: `secondary`,
                className: `sm:flex-1`,
                onClick: i,
                children: (0, c.jsx)(a, {
                    ...l.cancel
                })
            }), (0, c.jsx)(t, {
                type: `button`,
                className: `sm:flex-1`,
                onClick: o,
                children: (0, c.jsx)(a, {
                    ...u
                })
            })]
        })]
    })
}
var c, l, u = e((() => {
    n(), o(), c = r(), l = i({
        title: {
            defaultMessage: `There's already an existing skill named {skillName}`,
            id: `hazelnutsSettings.duplicateConflictTitleShared`
        },
        cancel: {
            defaultMessage: `Cancel`,
            id: `hazelnutsSettings.duplicateConflictCancelShared`
        },
        replaceExisting: {
            defaultMessage: `Replace existing`,
            id: `hazelnutsSettings.duplicateConflictReplaceExistingShared`
        },
        updateExisting: {
            defaultMessage: `Update existing`,
            id: `hazelnutsSettings.duplicateConflictUpdateExistingShared`
        },
        createAnyway: {
            defaultMessage: `Create anyway`,
            id: `hazelnutsSettings.duplicateConflictCreateAnywayShared`
        },
        saveAnyway: {
            defaultMessage: `Save anyway`,
            id: `hazelnutsSettings.duplicateConflictSaveAnywayShared`
        },
        bodyUpdateExistingUpload: {
            defaultMessage: `Do you want to replace the first skill you already own with this name?`,
            id: `hazelnutsSettings.duplicateConflictBodyUpdateExistingUploadShared`
        },
        bodyUpdateExistingEditor: {
            defaultMessage: `Do you want to update the first skill you already own with this name?`,
            id: `hazelnutsSettings.duplicateConflictBodyUpdateExistingEditorShared`
        },
        bodyForceCreate: {
            defaultMessage: `Do you want to create this skill anyway?`,
            id: `hazelnutsSettings.duplicateConflictBodyForceCreateShared`
        },
        bodyForceSave: {
            defaultMessage: `Do you want to save this skill anyway?`,
            id: `hazelnutsSettings.duplicateConflictBodyForceSaveShared`
        }
    })
}));
export {
    u as n, s as t
};
//# sourceMappingURL=62507501-cyvtx4ltpvct6h6u.js.map