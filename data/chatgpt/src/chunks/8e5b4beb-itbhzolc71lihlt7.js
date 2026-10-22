import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ant as t,
    Nnt as n,
    hnt as r,
    pnt as i
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    aPn as a,
    oPn as o
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    ib as s,
    sb as c
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";

function l({
    actor: e,
    resourceKind: t,
    libraryFileId: n,
    shareSessionId: r
}) {
    return {
        actor: e,
        resourceKind: t,
        libraryFileId: n,
        shareSessionId: r ?? globalThis.crypto.randomUUID()
    }
}

function u() {
    return globalThis.crypto.randomUUID()
}

function d(e, t) {
    let r = s(t.error);
    i.logStructuredEvent(`ChatgptFileLibrarySharing`, {
        action: f[t.action],
        actor: m[e.actor],
        resourceKind: h[e.resourceKind],
        ...e.resourceKind === `file` ? {
            libraryFileId: e.libraryFileId
        } : {
            folderId: e.libraryFileId
        },
        shareSessionId: e.shareSessionId,
        productExperience: a(),
        ...t.outcome == null ? {} : {
            outcome: p[t.outcome]
        },
        ...t.operationId == null ? {} : {
            operationId: t.operationId
        },
        ...t.recipientKind == null ? {} : {
            recipientKind: g[t.recipientKind]
        },
        ...t.role == null ? {} : {
            role: _[t.role]
        },
        ...t.previousRole == null ? {} : {
            previousRole: _[t.previousRole]
        },
        ...t.recipientCount == null ? {} : {
            recipientCount: n(t.recipientCount)
        },
        ...t.succeededRecipientCount == null ? {} : {
            succeededRecipientCount: n(t.succeededRecipientCount)
        },
        ...t.failedRecipientCount == null ? {} : {
            failedRecipientCount: n(t.failedRecipientCount)
        },
        ...t.linkAccess == null ? {} : {
            linkAccess: v[t.linkAccess]
        },
        ...r == null ? {} : {
            error: r
        }
    })
}
var f, p, m, h, g, _, v, y = e((() => {
    o(), c(), r(), t(), f = {
        dialog_opened: `CHATGPT_FILE_LIBRARY_SHARING_ACTION_DIALOG_OPENED`,
        dialog_closed: `CHATGPT_FILE_LIBRARY_SHARING_ACTION_DIALOG_CLOSED`,
        invite: `CHATGPT_FILE_LIBRARY_SHARING_ACTION_INVITE`,
        change_role: `CHATGPT_FILE_LIBRARY_SHARING_ACTION_CHANGE_ROLE`,
        remove_collaborator: `CHATGPT_FILE_LIBRARY_SHARING_ACTION_REMOVE_COLLABORATOR`,
        change_link_access: `CHATGPT_FILE_LIBRARY_SHARING_ACTION_CHANGE_LINK_ACCESS`,
        copy_link: `CHATGPT_FILE_LIBRARY_SHARING_ACTION_COPY_LINK`,
        request_access: `CHATGPT_FILE_LIBRARY_SHARING_ACTION_REQUEST_ACCESS`,
        approve_access_request: `CHATGPT_FILE_LIBRARY_SHARING_ACTION_APPROVE_ACCESS_REQUEST`,
        decline_access_request: `CHATGPT_FILE_LIBRARY_SHARING_ACTION_DECLINE_ACCESS_REQUEST`,
        leave_share: `CHATGPT_FILE_LIBRARY_SHARING_ACTION_LEAVE_SHARE`,
        accept_invitation: `CHATGPT_FILE_LIBRARY_SHARING_ACTION_ACCEPT_INVITATION`,
        decline_invitation: `CHATGPT_FILE_LIBRARY_SHARING_ACTION_DECLINE_INVITATION`,
        open_shared_item: `CHATGPT_FILE_LIBRARY_SHARING_ACTION_OPEN_SHARED_ITEM`
    }, p = {
        started: `CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED`,
        succeeded: `CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED`,
        partial: `CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_PARTIAL`,
        failed: `CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED`,
        canceled: `CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_CANCELED`
    }, m = {
        owner: `CHATGPT_FILE_LIBRARY_SHARING_ACTOR_OWNER`,
        recipient: `CHATGPT_FILE_LIBRARY_SHARING_ACTOR_RECIPIENT`
    }, h = {
        file: `CHATGPT_FILE_LIBRARY_SHARING_RESOURCE_KIND_FILE`,
        folder: `CHATGPT_FILE_LIBRARY_SHARING_RESOURCE_KIND_FOLDER`
    }, g = {
        user: `CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_USER`,
        group: `CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_GROUP`,
        email: `CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_EMAIL`,
        workspace: `CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_WORKSPACE`,
        mixed: `CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_MIXED`
    }, _ = {
        viewer: `CHATGPT_FILE_LIBRARY_SHARING_ROLE_VIEWER`,
        editor: `CHATGPT_FILE_LIBRARY_SHARING_ROLE_EDITOR`,
        commenter: `CHATGPT_FILE_LIBRARY_SHARING_ROLE_COMMENTER`
    }, v = {
        collaborators_only: `CHATGPT_FILE_LIBRARY_SHARING_LINK_ACCESS_COLLABORATORS_ONLY`,
        workspace: `CHATGPT_FILE_LIBRARY_SHARING_LINK_ACCESS_WORKSPACE`
    }
}));
export {
    d as i, u as n, y as r, l as t
};
//# sourceMappingURL=8e5b4beb-itbhzolc71lihlt7.js.map