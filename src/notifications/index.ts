import {
    ClaudeCodeVersion,
    CodexVersion,
    CursorVersion,
    OpenCodeVersion,
} from '../types';
import sendMessage, { Embed, Message } from './discord';

let embeds: Embed[] = [];

// all of these functions generate discord embeds that are ready to send
export function diffCodex(old: CodexVersion, newer: CodexVersion) {
    // we only care about changes
    if (old.name === newer.name) return null;

    embeds.push({
        color: 0x10a37f,
        title: 'New codex release',
        description: `**\`${old.tag_name}\`** to **\`${newer.tag_name}\`**\n[View changes/diff](${newer.diff_url})`,
        timestamp: newer.published_at,
    });
}
export function diffCursor(old: CursorVersion, newer: CursorVersion) {
    // we only care about changes
    if (old.version === newer.version) return null;

    embeds.push({
        color: 0x26251e,
        title: 'New Cursor release',
        description: `**\`${old.version}\`** to **\`${newer.version}\`**\n[View changes/diff](https://github.com/wavedevgit/ai-apps-tracker/data/cursor)`,
        timestamp: new Date().toISOString(),
    });
}

export function diffClaudeCode(
    old: ClaudeCodeVersion,
    newer: ClaudeCodeVersion,
) {
    // we only care about changes
    if (old.version === newer.version) return null;

    embeds.push({
        color: 0xd97706,
        title: 'New Claude Code release',
        description: `**\`${old.version}\`** to **\`${newer.version}\`**\n[View changes/diff](https://github.com/wavedevgit/ai-apps-tracker/data/claude-code)`,
        timestamp: newer.buildDate,
    });
}

export function diffOpenCode(old: OpenCodeVersion, newer: OpenCodeVersion) {
    // we only care about changes
    if (old.version === newer.version) return null;

    embeds.push({
        color: 0xfcfcfc,
        title: 'New OpenCode release',
        description: `**\`${old.version}\`** to **\`${newer.version}\`**\n[View changes/diff](https://github.com/anomalyco/opencode/releases/tag/v${newer.version})`,
        timestamp: newer.pub_date,
    });
}

export async function sendNotifications() {
    const message: Message = {
        content: '',
        embeds: embeds,
    };
    // nothing to post lol
    if (embeds.length === 0) return;
    await sendMessage(message);
}
