import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    In as t,
    Rn as n
} from "./2340486e-oc6d2eodbcrmxur3.js";

function r(e) {
    return y.find(t => t.connectorId === e)
}

function i(e, t) {
    if (x.has(e)) {
        if (t?.bundleConnectorIds == null && t?.enabledActionsByConnectorId == null) return C;
        let e = new Set(t.bundleConnectorIds ?? x);
        return {
            ...C,
            actions: y.filter(t => e.has(t.connectorId)).flatMap(e => {
                let n = t.enabledActionsByConnectorId?.get(e.connectorId);
                return (n == null ? e.actions : o(e, new Set(n), {
                    includeUpcoming: t.includeUpcoming
                })).map(t => ({
                    ...t,
                    connectorDisplayName: e.displayName
                }))
            })
        }
    }
    return r(e)
}

function a(e, t) {
    return e.actions.filter(e => e.scopes.every(e => t.has(e))).map(e => e.actionName)
}

function o(e, t, n) {
    return e.actions.filter(e => e.actionName !== `check_organization_permissions` && t.has(e.actionName)).length === 0 ? [] : e.actions.filter(e => e.actionName === `check_organization_permissions` || t.has(e.actionName) || n?.includeUpcoming === !0 && e.releaseStatus === `upcoming`)
}

function s(e, t) {
    return [...new Set(o(e, t).filter(e => !e.optional).flatMap(e => e.scopes))].sort()
}

function c(e) {
    return [...new Set(e.actions.filter(e => e.enabledByDefault !== !1).flatMap(e => e.scopes))].sort()
}

function l(e, t, n) {
    if (t.length === 0) return !0;
    let r = Object.values(e ?? {}).map(e => new Set(e)),
        i = new Set(n === d ? f.filter(e => r.some(t => t.has(e))) : []),
        a = t.filter(e => !i.has(e));
    return a.length === 0 || r.some(e => a.every(t => e.has(t)))
}

function u(e) {
    let t = new Map;
    for (let n of e) {
        let e = n.lastIndexOf(`/`),
            r = e === -1 ? `https://graph.microsoft.com` : n.slice(0, e).toLowerCase(),
            i = t.get(r);
        i == null ? t.set(r, [n]) : i.push(n)
    }
    return [...t.values()]
}
var d, f, p, m, h, g, _, v, y, b, x, S, C, w = e((() => {
    n(), d = `connector_1e4f6a44acf14e3ca1d96672f8c945bc`, f = [`https://api.aadrm.com/user_impersonation`, `https://syncservice.o365syncservice.com/UnifiedPolicy.User.Read`], p = `check_organization_permissions`, m = {
        actionName: p,
        description: t({
            id: `admin.apps.microsoft_connector_oauth.capability.organization_permission_inspection.description`,
            defaultMessage: `View which Microsoft permissions your organization has approved for OpenAI.`
        }),
        optional: !0,
        scopes: [`Directory.Read.All`]
    }, h = {
        actionName: `get_sensitivity_labels`,
        description: t({
            id: `admin.apps.microsoft_connector_oauth.capability.read_sensitivity_labels.description`,
            defaultMessage: `Read Microsoft sensitivity labels available to the organization.`
        }),
        releaseStatus: `upcoming`,
        enabledByDefault: !0,
        scopes: [`SensitivityLabels.Read.All`]
    }, g = {
        readContacts: t({
            id: `admin.apps.microsoft_connector_oauth.capability.read_contacts.description`,
            defaultMessage: `Read Outlook contacts and contact folders.`
        }),
        manageContacts: t({
            id: `admin.apps.microsoft_connector_oauth.capability.manage_contacts.description`,
            defaultMessage: `Create, update, and delete Outlook contacts and contact folders.`
        }),
        readBasicCalendar: t({
            id: `admin.apps.microsoft_connector_oauth.capability.read_basic_calendar.description`,
            defaultMessage: `Read basic Outlook Calendar availability and scheduling information.`
        }),
        readSharedCalendars: t({
            id: `admin.apps.microsoft_connector_oauth.capability.read_shared_calendars.description`,
            defaultMessage: `Read delegated or shared Outlook calendars, events, calendar views, permissions, and meeting-time suggestions.`
        }),
        manageSharePointListsPagesAndMetadata: t({
            id: `admin.apps.microsoft_connector_oauth.capability.manage_sharepoint_lists_pages_and_metadata.description`,
            defaultMessage: `Create and manage SharePoint lists, list items, site pages, page sections, web parts, columns, content types, and subscriptions.`
        }),
        fetchAdvancedSharePointFiles: t({
            id: `admin.apps.microsoft_connector_oauth.capability.fetch_sensitive_sharepoint_files.description`,
            defaultMessage: `Read SharePoint files protected by Microsoft Purview sensitivity labels when the connected user has permission to decrypt them.`
        }),
        createTeams: t({
            id: `admin.apps.microsoft_connector_oauth.capability.create_teams.description`,
            defaultMessage: `Create Microsoft Teams on behalf of users.`
        }),
        manageTeamSettings: t({
            id: `admin.apps.microsoft_connector_oauth.capability.manage_team_settings.description`,
            defaultMessage: `Update, archive, unarchive, and clone Microsoft Teams and manage team membership and tags.`
        }),
        manageChannelSettings: t({
            id: `admin.apps.microsoft_connector_oauth.capability.manage_channel_settings.description`,
            defaultMessage: `Update, delete, archive, unarchive, and manage membership for Microsoft Teams channels.`
        }),
        manageChats: t({
            id: `admin.apps.microsoft_connector_oauth.capability.manage_chats.description`,
            defaultMessage: `Update Microsoft Teams chats and manage chat membership, read state, and pinned messages.`
        }),
        readChatMessages: t({
            id: `admin.apps.microsoft_connector_oauth.capability.read_chat_messages.description`,
            defaultMessage: `Read individual Microsoft Teams chat messages and user chat message collections.`
        }),
        managePresence: t({
            id: `admin.apps.microsoft_connector_oauth.capability.manage_presence.description`,
            defaultMessage: `Set and clear Microsoft Teams preferred presence and presence status messages.`
        }),
        manageTeamsTabs: t({
            id: `admin.apps.microsoft_connector_oauth.capability.manage_teams_tabs.description`,
            defaultMessage: `Create, update, and delete tabs in Microsoft Teams.`
        }),
        readMeetingArtifacts: t({
            id: `admin.apps.microsoft_connector_oauth.capability.read_meeting_artifacts.description`,
            defaultMessage: `Read scheduled Microsoft Teams meeting attendance reports and records.`
        })
    }, _ = [`list_contacts`, `fetch_contact`, `list_contact_folders`, `fetch_contact_folder`].map(e => ({
        actionName: e,
        description: g.readContacts,
        scopes: [`Contacts.Read`]
    })), v = [`create_contact`, `update_contact`, `delete_contact`, `create_contact_folder`, `update_contact_folder`, `delete_contact_folder`].map(e => ({
        actionName: e,
        description: g.manageContacts,
        scopes: [`Contacts.ReadWrite`]
    })), y = [{
        connectorId: `connector_4aaab2856305417b993eca9a216aaf6e`,
        displayName: `Outlook Email`,
        actions: [m, h, ..._, ...v, {
            actionName: `add_email_attachments`,
            description: `Attach file references to an existing Outlook draft or message.`,
            scopes: [`Mail.ReadWrite`]
        }, {
            actionName: `create_category`,
            description: `Create an Outlook mailbox category for later use on messages.`,
            scopes: [`MailboxSettings.ReadWrite`]
        }, {
            actionName: `create_forward_draft`,
            description: `Create a draft forward for an existing Outlook email.`,
            scopes: [`Mail.ReadWrite`]
        }, {
            actionName: `create_mail_folder`,
            description: `Create an Outlook mail folder, optionally nested under an existing parent folder.`,
            scopes: [`Mail.ReadWrite`]
        }, {
            actionName: `create_reply_draft`,
            description: `Create a draft reply to an existing Outlook email.`,
            scopes: [`Mail.ReadWrite`]
        }, {
            actionName: `create_shared_reply_draft`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.action.create_shared_reply_draft.description`,
                defaultMessage: `Create a draft reply in a delegated or shared Outlook mailbox.`
            }),
            scopes: [`Mail.ReadWrite.Shared`]
        }, {
            actionName: `draft_email`,
            description: `Create an Outlook draft email and return the draft message.`,
            scopes: [`Mail.ReadWrite`]
        }, {
            actionName: `fetch_attachment`,
            description: `Fetch one Outlook email attachment and return its metadata plus raw bytes.`,
            scopes: [`Mail.Read`]
        }, {
            actionName: `fetch_message`,
            description: `Fetch a single Outlook email by its ID.`,
            scopes: [`Mail.Read`]
        }, {
            actionName: `fetch_messages_batch`,
            description: `Retrieve multiple Outlook emails in a single request.`,
            scopes: [`Mail.Read`]
        }, {
            actionName: `fetch_shared_attachment`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.fetch_shared_attachment.description`,
                defaultMessage: `Download an attachment from an email in a delegated or shared Outlook mailbox.`
            }),
            scopes: [`Mail.Read.Shared`]
        }, {
            actionName: `fetch_shared_message`,
            description: `Fetch a single email from a delegated or shared Outlook mailbox.`,
            scopes: [`Mail.Read.Shared`]
        }, {
            actionName: `find_mail_folder`,
            description: `Find Outlook mail folders by name or path.`,
            scopes: [`Mail.Read`]
        }, {
            actionName: `forward_email`,
            description: `Forward an existing Outlook email to new recipients.`,
            scopes: [`Mail.Send`]
        }, {
            actionName: `get_profile`,
            description: `Return basic profile information for the Outlook account.`,
            scopes: [`User.Read`]
        }, {
            actionName: `get_recent_emails`,
            description: "Return the `top_k` most recently received Outlook emails.",
            scopes: [`Mail.Read`]
        }, {
            actionName: `get_unsubscribe_info`,
            description: `Inspect unsubscribe-related headers for an Outlook email.`,
            scopes: [`Mail.Read`]
        }, {
            actionName: `list_attachments`,
            description: `List attachment metadata for a specific Outlook email.`,
            scopes: [`Mail.Read`]
        }, {
            actionName: `list_categories`,
            description: `List Outlook mailbox categories available for tagging messages.`,
            scopes: [`MailboxSettings.Read`]
        }, {
            actionName: `list_mail_folders`,
            description: `List Outlook mail folders in a flat, path-oriented form.`,
            scopes: [`Mail.Read`]
        }, {
            actionName: `list_messages`,
            description: `Retrieve Outlook emails from a specified folder.`,
            scopes: [`Mail.Read`]
        }, {
            actionName: `list_shared_attachments`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.list_shared_attachments.description`,
                defaultMessage: `List attachment metadata for an email in a delegated or shared Outlook mailbox.`
            }),
            scopes: [`Mail.Read.Shared`]
        }, {
            actionName: `list_shared_mail_folders`,
            description: `List folders in a delegated or shared Outlook mailbox.`,
            scopes: [`Mail.Read.Shared`]
        }, {
            actionName: `list_shared_messages`,
            description: `List messages from a delegated or shared Outlook mailbox.`,
            scopes: [`Mail.Read.Shared`]
        }, {
            actionName: `mark_email_read_state`,
            description: `Mark an Outlook email as read or unread and return the updated message.`,
            scopes: [`Mail.ReadWrite`]
        }, {
            actionName: `mark_shared_email_read_state`,
            description: `Mark an email in a delegated/shared mailbox as read or unread.`,
            scopes: [`Mail.ReadWrite.Shared`]
        }, {
            actionName: `move_email`,
            description: `Move an Outlook email into another mail folder and return the moved message.`,
            scopes: [`Mail.ReadWrite`]
        }, {
            actionName: `move_shared_email`,
            description: `Move an email in a delegated/shared Outlook mailbox.`,
            scopes: [`Mail.ReadWrite.Shared`]
        }, {
            actionName: `reply_to_email`,
            description: `Reply to an existing Outlook email.`,
            scopes: [`Mail.Send`, `Mail.Read`]
        }, {
            actionName: `schedule_email`,
            description: `Queue a new Outlook email for future delivery.`,
            scopes: [`Mail.ReadWrite`, `Mail.Send`]
        }, {
            actionName: `search_directory_users`,
            description: "Search enterprise Graph `/users` with a work or school account.",
            scopes: [`User.ReadBasic.All`]
        }, {
            actionName: `search_mailbox_contacts`,
            description: `Search mailbox contacts across supported Microsoft account audiences.`,
            scopes: [`Contacts.Read`]
        }, {
            actionName: `search_messages`,
            description: `Search Outlook emails and return matching messages.`,
            scopes: [`Mail.Read`]
        }, {
            actionName: `search_people`,
            description: "Search Graph `/me/people` relevance results across supported Microsoft account audiences.",
            scopes: [`People.Read`]
        }, {
            actionName: `send_email`,
            description: `Send a new Outlook email immediately.`,
            scopes: [`Mail.Send`]
        }, {
            actionName: `send_email_on_behalf`,
            description: `Send a new Outlook email from a delegated/shared mailbox.`,
            scopes: [`Mail.Send.Shared`]
        }, {
            actionName: `set_message_categories`,
            description: `Replace the categories on an Outlook email and return the updated message.`,
            scopes: [`Mail.ReadWrite`]
        }, {
            actionName: `unsubscribe_via_mailto`,
            description: `Send a mailto-based unsubscribe request when a message exposes one.`,
            scopes: [`Mail.Read`, `Mail.Send`]
        }]
    }, {
        connectorId: `connector_e6a7394682e24467ac68c60696f275a4`,
        displayName: `Outlook Calendar`,
        actions: [m, ..._, ...v, {
            actionName: `get_schedule_basic`,
            description: g.readBasicCalendar,
            scopes: [`Calendars.ReadBasic`]
        }, {
            actionName: `read_shared_calendars`,
            description: g.readSharedCalendars,
            scopes: [`Calendars.Read.Shared`]
        }, {
            actionName: `add_event_attachment`,
            description: `Attach a small file reference to an existing Outlook Calendar event.`,
            scopes: [`Calendars.ReadWrite`]
        }, {
            actionName: `add_shared_calendar_event_attachment`,
            description: `Attach a small file reference to an event on a delegated or shared calendar.`,
            scopes: [`Calendars.ReadWrite.Shared`]
        }, {
            actionName: `cancel_or_delete_event`,
            description: `Cancel or delete an Outlook Calendar event.`,
            scopes: [`Calendars.ReadWrite`]
        }, {
            actionName: `cancel_or_delete_shared_calendar_event`,
            description: `Cancel or delete an event on a delegated or shared calendar.`,
            scopes: [`Calendars.ReadWrite.Shared`]
        }, {
            actionName: `create_event`,
            description: `Create a new event on the user's Outlook Calendar or a selected shared calendar.`,
            scopes: [`Calendars.ReadWrite`]
        }, {
            actionName: `create_shared_calendar_event`,
            description: `Create an event on a delegated or shared Outlook calendar.`,
            scopes: [`Calendars.ReadWrite.Shared`]
        }, {
            actionName: `fetch_event`,
            description: `Retrieve details for a single Outlook Calendar event.`,
            scopes: [`Calendars.Read`]
        }, {
            actionName: `fetch_events_batch`,
            description: `Retrieve multiple Outlook Calendar events in batched Graph requests.`,
            scopes: [`Calendars.Read`]
        }, {
            actionName: `find_available_slots`,
            description: `Return free windows in a bounded window, optionally accounting for buffers.`,
            scopes: [`Calendars.Read`]
        }, {
            actionName: `get_mailbox_settings`,
            description: `Read mailbox settings such as the preferred Outlook timezone.`,
            scopes: [`MailboxSettings.Read`]
        }, {
            actionName: `get_profile`,
            description: `Return basic profile information for the Outlook account.`,
            scopes: [`User.Read`]
        }, {
            actionName: `get_schedule`,
            description: `Return Outlook free/busy information for one or more schedules.`,
            scopes: [`Calendars.Read`]
        }, {
            actionName: `list_calendars`,
            description: `List calendars available in the signed-in mailbox, including shared calendars.`,
            scopes: [`Calendars.Read`]
        }, {
            actionName: `list_event_instances`,
            description: `List concrete occurrences and exceptions for a recurring Outlook event series.`,
            scopes: [`Calendars.Read`]
        }, {
            actionName: `list_events`,
            description: `List Outlook Calendar events within an optional date range.`,
            scopes: [`Calendars.Read`]
        }, {
            actionName: `list_recurring_series`,
            description: `List recurring series masters that have at least one instance in the requested time window.`,
            scopes: [`Calendars.Read`]
        }, {
            actionName: `respond_to_event`,
            description: `Respond to an Outlook meeting invitation.`,
            scopes: [`Calendars.ReadWrite`]
        }, {
            actionName: `respond_to_shared_calendar_event`,
            description: `Respond to an invitation on a delegated or shared calendar.`,
            scopes: [`Calendars.ReadWrite.Shared`]
        }, {
            actionName: `search_directory_users`,
            description: "Search enterprise Graph `/users` with a work or school account.",
            scopes: [`User.ReadBasic.All`]
        }, {
            actionName: `search_events`,
            description: `Search Outlook Calendar events matching a query.`,
            scopes: [`Calendars.Read`]
        }, {
            actionName: `search_mailbox_contacts`,
            description: `Search mailbox contacts across supported Microsoft account audiences.`,
            scopes: [`Contacts.Read`]
        }, {
            actionName: `search_people`,
            description: "Search Graph `/me/people` relevance results across supported Microsoft account audiences.",
            scopes: [`People.Read`]
        }, {
            actionName: `update_event`,
            description: `Update an existing Outlook Calendar event and return the updated event.`,
            scopes: [`Calendars.ReadWrite`]
        }, {
            actionName: `update_shared_calendar_event`,
            description: `Update an event on a delegated or shared Outlook calendar.`,
            scopes: [`Calendars.ReadWrite.Shared`]
        }]
    }, {
        connectorId: `connector_6a6917bfa0d8819082c3a0425e82cade`,
        displayName: `OneNote`,
        actions: [m, {
            actionName: `list_notebooks`,
            description: `List OneNote notebooks available to the signed-in Microsoft account.`,
            scopes: [`Notes.Create`]
        }, {
            actionName: `list_sections`,
            description: `List OneNote sections across notebooks or in a known notebook or section group.`,
            scopes: [`Notes.Read`]
        }, {
            actionName: `list_section_groups`,
            description: `List OneNote section groups for hierarchical notebook browsing.`,
            scopes: [`Notes.Read`]
        }, {
            actionName: `list_pages`,
            description: `List recent OneNote page metadata across notebooks or in a known section.`,
            scopes: [`Notes.Read`]
        }, {
            actionName: `search_pages_by_title`,
            description: `Find OneNote pages by title and an optional last-modified time window.`,
            scopes: [`Notes.Read`]
        }, {
            actionName: `search_pages_by_text`,
            description: `Search visible text across a bounded window of OneNote page bodies.`,
            scopes: [`Notes.Read`]
        }, {
            actionName: `fetch_page`,
            description: `Read metadata and HTML content for a page in the signed-in user's notebooks.`,
            scopes: [`Notes.Read`]
        }, {
            actionName: `get_page_text`,
            description: `Read bounded visible text blocks and precise update targets, when available, from a known OneNote page.`,
            scopes: [`Notes.Read`]
        }, {
            actionName: `get_page_tables`,
            description: `Read bounded table structures and cell text from a known OneNote page.`,
            scopes: [`Notes.Read`]
        }, {
            actionName: `export_page_as_markdown`,
            description: `Export one page from the signed-in user's notebooks as a downloadable Markdown file.`,
            scopes: [`Notes.Read`]
        }, {
            actionName: `list_page_resources`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.list_page_resources.description`,
                defaultMessage: `List images, audio, video, and file attachments on a page in a notebook the connected user owns.`
            }),
            scopes: [`Notes.Read`]
        }, {
            actionName: `fetch_page_resource`,
            description: `Download an image or file attachment from a page as a reusable file reference.`,
            scopes: [`Notes.Read`]
        }, {
            actionName: `fetch_shared_page`,
            description: `Read a page from a known Microsoft 365 group or SharePoint site notebook.`,
            scopes: [`Notes.Read.All`]
        }, {
            actionName: `list_shared_notebooks`,
            description: `List OneNote notebooks in a known Microsoft 365 group or SharePoint site.`,
            scopes: [`Notes.Read.All`]
        }, {
            actionName: `list_shared_sections`,
            description: `List OneNote sections in a known Microsoft 365 group or SharePoint site.`,
            scopes: [`Notes.Read.All`]
        }, {
            actionName: `list_shared_section_groups`,
            description: `List OneNote section groups in a known Microsoft 365 group or SharePoint site.`,
            scopes: [`Notes.Read.All`]
        }, {
            actionName: `list_shared_pages`,
            description: `List OneNote pages in a known Microsoft 365 group or SharePoint site.`,
            scopes: [`Notes.Read.All`]
        }, {
            actionName: `create_page`,
            description: `Create a OneNote page in the default notebook or a known personal, group, or site section.`,
            scopes: [`Notes.Create`]
        }, {
            actionName: `create_notebook`,
            description: `Create a new OneNote notebook for the signed-in user.`,
            scopes: [`Notes.Create`]
        }, {
            actionName: `create_section`,
            description: `Create a OneNote section in a known notebook or section group.`,
            scopes: [`Notes.Create`]
        }, {
            actionName: `create_section_group`,
            description: `Create a OneNote section group in a known notebook or parent section group.`,
            scopes: [`Notes.Create`]
        }, {
            actionName: `copy_page_to_section`,
            description: `Start an asynchronous copy of a OneNote page into a personal or group section.`,
            scopes: [`Notes.Create`]
        }, {
            actionName: `get_operation`,
            description: `Check the status of a long-running OneNote copy operation.`,
            scopes: [`Notes.Create`]
        }, {
            actionName: `update_page`,
            description: `Apply targeted insert, replace, prepend, or append edits to a OneNote page.`,
            scopes: [`Notes.ReadWrite`]
        }, {
            actionName: `add_page_resources`,
            description: `Add staged images, PDF printouts, or file attachments to a OneNote page.`,
            scopes: [`Notes.ReadWrite`]
        }, {
            actionName: `append_to_page`,
            description: `Append HTML content to a page in the signed-in user's notebooks.`,
            scopes: [`Notes.ReadWrite`]
        }, {
            actionName: `delete_page`,
            description: `Permanently delete one page after explicit confirmation.`,
            scopes: [`Notes.ReadWrite`]
        }, {
            actionName: `append_to_shared_page`,
            description: `Append HTML content to a page in a known Microsoft 365 group or SharePoint site notebook.`,
            scopes: [`Notes.ReadWrite.All`]
        }, {
            actionName: `update_shared_page`,
            description: `Apply targeted edits to a page in a known Microsoft 365 group or SharePoint site notebook.`,
            scopes: [`Notes.ReadWrite.All`]
        }]
    }, {
        connectorId: d,
        displayName: `SharePoint`,
        actions: [m, {
            actionName: `manage_sharepoint_lists_pages_and_metadata`,
            description: g.manageSharePointListsPagesAndMetadata,
            scopes: [`Sites.ReadWrite.All`]
        }, {
            actionName: `copy_item`,
            description: `Start an async Graph copy operation for a file or folder.`,
            scopes: [`Files.ReadWrite.All`]
        }, {
            actionName: `create_folder`,
            description: `Create a SharePoint folder in the site's document library.`,
            scopes: [`Sites.Read.All`, `Files.ReadWrite.All`]
        }, {
            actionName: `create_folders_bulk`,
            description: `Create multiple SharePoint folders in one batch.`,
            scopes: [`Sites.Read.All`, `Files.ReadWrite.All`]
        }, {
            actionName: `create_sharing_link`,
            description: `Create a SharePoint sharing link for an existing file or folder.`,
            scopes: [`Sites.Read.All`, `Files.ReadWrite.All`]
        }, {
            actionName: `delete_item`,
            description: `Delete a SharePoint file or folder by path.`,
            scopes: [`Sites.Read.All`, `Files.ReadWrite.All`]
        }, {
            actionName: `fetch`,
            description: `Fetch content for a SharePoint or OneDrive file.`,
            scopes: [`Files.Read.All`]
        }, {
            actionName: `fetch_advanced`,
            description: g.fetchAdvancedSharePointFiles,
            enabledByDefault: !1,
            scopes: [`Files.Read.All`, `User.Read`, ...f]
        }, {
            actionName: `get_sensitivity_labels`,
            description: `Read Microsoft sensitivity labels available to the organization.`,
            scopes: [`SensitivityLabels.Read.All`]
        }, {
            actionName: `get_drive_item`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.get_drive_item.description`,
                defaultMessage: `Read metadata for a SharePoint or OneDrive file or folder.`
            }),
            scopes: [`Files.Read.All`]
        }, {
            actionName: `get_list_item`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.get_list_item.description`,
                defaultMessage: `Read a row and its fields from a SharePoint list.`
            }),
            scopes: [`Sites.Read.All`]
        }, {
            actionName: `get_profile`,
            description: `Retrieve the current user's profile.`,
            scopes: [`User.Read`]
        }, {
            actionName: `get_site`,
            description: `Resolve a SharePoint site by hostname and path.`,
            scopes: [`Sites.Read.All`]
        }, {
            actionName: `invite_item_recipients`,
            description: `Invite named recipients to a file or folder.`,
            scopes: [`Files.ReadWrite.All`]
        }, {
            actionName: `list_drives`,
            description: `List drives available to the current delegated user.`,
            scopes: [`Files.Read.All`]
        }, {
            actionName: `list_folder_items`,
            description: `List the immediate child files and folders in a SharePoint folder.`,
            scopes: [`Sites.Read.All`, `Files.Read.All`]
        }, {
            actionName: `list_item_permissions`,
            description: `List effective sharing permissions on a file or folder.`,
            scopes: [`Files.Read.All`]
        }, {
            actionName: `list_item_versions`,
            description: `List version history for a file.`,
            scopes: [`Files.Read.All`]
        }, {
            actionName: `list_list_items`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.list_list_items.description`,
                defaultMessage: `List rows and their fields in a SharePoint list.`
            }),
            scopes: [`Sites.Read.All`]
        }, {
            actionName: `list_recent_documents`,
            description: `Return recently accessed files for the current delegated user.`,
            scopes: [`Files.Read.All`]
        }, {
            actionName: `list_site_drives`,
            description: `List document libraries for one SharePoint site.`,
            scopes: [`Sites.Read.All`, `Files.Read.All`]
        }, {
            actionName: `list_site_lists`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.list_site_lists.description`,
                defaultMessage: `List the lists available on a SharePoint site.`
            }),
            scopes: [`Sites.Read.All`]
        }, {
            actionName: `move_items_bulk`,
            description: `Move or rename multiple SharePoint files or folders in one batch.`,
            scopes: [`Sites.Read.All`, `Files.ReadWrite.All`]
        }, {
            actionName: `move_or_rename_item`,
            description: `Move or rename a SharePoint file or folder.`,
            scopes: [`Sites.Read.All`, `Files.ReadWrite.All`]
        }, {
            actionName: `restore_item_version`,
            description: `Restore a prior file version and return refreshed metadata.`,
            scopes: [`Files.ReadWrite.All`]
        }, {
            actionName: `search`,
            description: `Search SharePoint/OneDrive documents or browse a known SharePoint folder.`,
            scopes: [`Sites.Read.All`, `Files.Read.All`]
        }, {
            actionName: `update_file`,
            description: `Replace the full contents of an existing SharePoint file from a file reference.`,
            scopes: [`Sites.Read.All`, `Files.ReadWrite.All`]
        }, {
            actionName: `update_file_exact`,
            description: `Replace the full contents of an existing SharePoint file by exact target.`,
            scopes: [`Files.ReadWrite.All`]
        }, {
            actionName: `upload_file`,
            description: `Upload a file reference into SharePoint.`,
            scopes: [`Sites.Read.All`, `Files.ReadWrite.All`]
        }, {
            actionName: `upload_file_to_folder`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.upload_file_to_folder.description`,
                defaultMessage: `Upload a file into a specific SharePoint folder.`
            }),
            scopes: [`Sites.Read.All`, `Files.ReadWrite.All`]
        }]
    }, {
        connectorId: `connector_246af0940da3457da0e751171dc1ce60`,
        displayName: `Microsoft Teams`,
        actions: [m, h, {
            actionName: `create_team`,
            description: g.createTeams,
            scopes: [`Team.Create`]
        }, {
            actionName: `manage_team_settings`,
            description: g.manageTeamSettings,
            scopes: [`TeamSettings.ReadWrite.All`]
        }, {
            actionName: `manage_channel_settings`,
            description: g.manageChannelSettings,
            scopes: [`ChannelSettings.ReadWrite.All`]
        }, {
            actionName: `manage_chats`,
            description: g.manageChats,
            scopes: [`Chat.ReadWrite`]
        }, {
            actionName: `read_chat_messages`,
            description: g.readChatMessages,
            scopes: [`ChatMessage.Read`]
        }, {
            actionName: `manage_presence`,
            description: g.managePresence,
            scopes: [`Presence.ReadWrite`]
        }, {
            actionName: `manage_teams_tabs`,
            description: g.manageTeamsTabs,
            scopes: [`TeamsTab.ReadWrite.All`]
        }, {
            actionName: `read_online_meeting_artifacts`,
            description: g.readMeetingArtifacts,
            scopes: [`OnlineMeetingArtifact.Read.All`]
        }, {
            actionName: `create_channel`,
            description: `Create a new Microsoft Teams channel inside an existing team.`,
            scopes: [`Channel.Create`]
        }, {
            actionName: `create_chat`,
            description: `Create a new Microsoft Teams chat.`,
            scopes: [`Chat.Create`]
        }, {
            actionName: `create_planner_task`,
            description: `Create a Planner task in a known plan and bucket.`,
            scopes: [`Tasks.ReadWrite`]
        }, {
            actionName: `delete_planner_task`,
            description: `Delete a Planner task safely using the task's current ETag.`,
            scopes: [`Tasks.ReadWrite`]
        }, {
            actionName: `fetch`,
            description: `Fetch a specific Microsoft Teams message or chat conversation by path.`,
            scopes: [`Chat.Read`, `ChannelMessage.Read.All`]
        }, {
            actionName: `fetch_planner_task`,
            description: `Fetch a Planner task by ID, including its current ETag.`,
            scopes: [`Tasks.Read`]
        }, {
            actionName: `get_channel_message_reactions`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.get_channel_message_reactions.description`,
                defaultMessage: `Read reactions to a message in a Microsoft Teams channel.`
            }),
            scopes: [`ChannelMessage.Read.All`]
        }, {
            actionName: `get_chat_members`,
            description: `List the members of a Microsoft Teams chat.`,
            scopes: [`Chat.Read`]
        }, {
            actionName: `get_named_agent_installation`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.get_named_agent_installation.description`,
                defaultMessage: `Check whether a named agent is installed in a Microsoft Teams team.`
            }),
            enabledByDefault: !0,
            scopes: [`User.Read`, `TeamsAppInstallation.ReadWriteAndConsentForTeam`]
        }, {
            actionName: `get_online_meeting`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.read_online_meeting.description`,
                defaultMessage: `Read a Microsoft Teams meeting from its join URL.`
            }),
            scopes: [`OnlineMeetings.Read`]
        }, {
            actionName: `get_online_meeting_recording`,
            description: `Get one scheduled Teams meeting recording's metadata.`,
            scopes: [`OnlineMeetingRecording.Read.All`]
        }, {
            actionName: `get_online_meeting_transcript`,
            description: `Get one scheduled-meeting transcript's metadata.`,
            scopes: [`OnlineMeetingTranscript.Read.All`]
        }, {
            actionName: `get_online_meeting_transcript_content`,
            description: `Get a scheduled meeting transcript as size-bounded WebVTT text.`,
            scopes: [`OnlineMeetingTranscript.Read.All`]
        }, {
            actionName: `get_profile`,
            description: `Return the authenticated Microsoft Teams user's profile.`,
            scopes: [`User.Read`]
        }, {
            actionName: `get_team_sensitivity_labels`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.read_teams_sensitivity_labels.description`,
                defaultMessage: `Read Microsoft Purview sensitivity labels assigned to a Microsoft Teams team.`
            }),
            scopes: [`Group.Read.All`]
        }, {
            actionName: `install_named_agent`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.install_named_agent.description`,
                defaultMessage: `Install a named agent in a Microsoft Teams channel.`
            }),
            enabledByDefault: !0,
            scopes: [`User.Read`, `TeamsAppInstallation.ReadWriteAndConsentForTeam`]
        }, {
            actionName: `install_named_agent_for_chat`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.install_named_agent_for_chat.description`,
                defaultMessage: `Install a named agent in a Microsoft Teams group chat and grant its requested permissions.`
            }),
            enabledByDefault: !0,
            scopes: [`User.Read`, `TeamsAppInstallation.ReadWriteAndConsentForChat`]
        }, {
            actionName: `install_named_agent_for_user`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.install_named_agent_for_user.description`,
                defaultMessage: `Add an existing named agent to the connected user's Teams apps.`
            }),
            enabledByDefault: !0,
            scopes: [`User.Read`, `TeamsAppInstallation.ReadWriteAndConsentForUser`]
        }, {
            actionName: `list_channel_members`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.read_channel_members.description`,
                defaultMessage: `View members of Microsoft Teams channels.`
            }),
            scopes: [`ChannelMember.Read.All`, `Team.ReadBasic.All`]
        }, {
            actionName: `list_channel_messages`,
            description: `List messages from a Teams channel for review or summarization.`,
            scopes: [`ChannelMessage.Read.All`]
        }, {
            actionName: `list_channels`,
            description: `List channels for a Microsoft Teams team.`,
            scopes: [`Channel.ReadBasic.All`]
        }, {
            actionName: `list_chat_messages`,
            description: `List messages from a Teams chat for review or summarization.`,
            scopes: [`Chat.Read`]
        }, {
            actionName: `list_chats`,
            description: `List chats available to the signed-in Microsoft Teams user.`,
            scopes: [`Chat.Read`]
        }, {
            actionName: `list_online_meeting_recordings`,
            description: `List recording metadata after resolving a scheduled Teams meeting.`,
            scopes: [`OnlineMeetingRecording.Read.All`]
        }, {
            actionName: `list_online_meeting_transcripts`,
            description: `List transcript metadata after resolving a scheduled Teams meeting.`,
            scopes: [`OnlineMeetingTranscript.Read.All`]
        }, {
            actionName: `list_planner_buckets`,
            description: `List Planner buckets for a plan.`,
            scopes: [`Tasks.Read`]
        }, {
            actionName: `list_planner_plans`,
            description: `List Planner plans available to the signed-in Microsoft account.`,
            scopes: [`Tasks.Read`]
        }, {
            actionName: `list_planner_tasks`,
            description: `List Planner tasks for task review and task-discovery workflows.`,
            scopes: [`Tasks.Read`]
        }, {
            actionName: `list_teams`,
            description: `List Microsoft Teams the signed-in user has joined.`,
            scopes: [`Team.ReadBasic.All`]
        }, {
            actionName: `reply_to_channel_message`,
            description: `Reply to an existing Microsoft Teams channel thread.`,
            scopes: [`ChannelMessage.Send`]
        }, {
            actionName: `reply_to_message`,
            description: `Reply to a Teams message by path.`,
            scopes: [`ChatMessage.Send`, `ChannelMessage.Send`]
        }, {
            actionName: `resolve_channel`,
            description: `Resolve Teams channels by display name, optionally scoped to a team.`,
            scopes: [`Team.ReadBasic.All`, `Channel.ReadBasic.All`]
        }, {
            actionName: `resolve_chat`,
            description: `Resolve existing Teams chats by topic or participants.`,
            scopes: [`Chat.Read`]
        }, {
            actionName: `resolve_online_meeting_from_event`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.read_online_meeting_from_event.description`,
                defaultMessage: `Read a Microsoft Teams meeting from an Outlook calendar event.`
            }),
            scopes: [`Calendars.Read`, `OnlineMeetings.Read`]
        }, {
            actionName: `resolve_scheduled_online_meeting`,
            description: `Resolve one scheduled Teams meeting from exactly one event ID or join URL.`,
            scopes: [`Calendars.Read`, `OnlineMeetings.ReadWrite`]
        }, {
            actionName: `resolve_team`,
            description: `Resolve Microsoft Teams teams by display name.`,
            scopes: [`Team.ReadBasic.All`]
        }, {
            actionName: `resolve_user`,
            description: `Resolve Microsoft Entra users for Teams chat creation or member lookup.`,
            scopes: [`User.Read.All`]
        }, {
            actionName: `search`,
            description: `Search Microsoft Teams chats and channel messages.`,
            scopes: [`Chat.Read`, `ChannelMessage.Read.All`]
        }, {
            actionName: `send_channel_message`,
            description: `Send a new top-level message to a Microsoft Teams channel.`,
            scopes: [`ChannelMessage.Send`]
        }, {
            actionName: `send_chat_message`,
            description: `Send a new message to an existing Microsoft Teams chat.`,
            scopes: [`ChatMessage.Send`]
        }, {
            actionName: `update_planner_task`,
            description: `Update a Planner task and return the updated task.`,
            scopes: [`Tasks.ReadWrite`]
        }, {
            actionName: `upload_named_agent_for_user`,
            description: t({
                id: `admin.apps.microsoft_connector_oauth.capability.upload_named_agent_for_user.description`,
                defaultMessage: `Upload and install a named agent for the connected Teams user.`
            }),
            enabledByDefault: !0,
            scopes: [`User.Read`, `TeamsAppInstallation.ReadWriteAndConsentForUser`, `TeamsAppInstallation.ReadWriteAndConsentForTeam`, `TeamsAppInstallation.ReadWriteAndConsentForChat`]
        }, {
            actionName: `validate_write_target`,
            description: `Preflight a Teams write target and flag unsupported create-style requests.`,
            scopes: [`Chat.Read`, `Team.ReadBasic.All`, `Channel.ReadBasic.All`]
        }]
    }], b = [`connector_4aaab2856305417b993eca9a216aaf6e`, `connector_e6a7394682e24467ac68c60696f275a4`, `connector_1e4f6a44acf14e3ca1d96672f8c945bc`, `connector_246af0940da3457da0e751171dc1ce60`], x = new Set(b), S = new Set(y.map(e => e.connectorId)), C = {
        connectorId: b[0],
        displayName: `Microsoft apps`,
        actions: y.filter(e => x.has(e.connectorId)).flatMap(e => e.actions.map(t => ({
            ...t,
            connectorDisplayName: e.displayName
        })))
    }
}));
export {
    a,
    i as c,
    u as d,
    w as f,
    l as i,
    s as l,
    x as n,
    o,
    S as r,
    c as s,
    p as t,
    r as u
};
//# sourceMappingURL=12ecfb5d-hcwpsjpo4f5md7fj.js.map