import {
    ClaudeCodeVersion,
    CodexVersion,
    CursorVersion,
    ChatGptManifest,
    ChatGptModel,
    OpenCodeVersion,
} from '../types.js';
import sendMessage, { Embed, Message } from './discord.js';

const embeds: Embed[] = [];
const modelEmbeds: Embed[] = [];
const featureEmbeds: Embed[] = [];

function pushList(
    queue: Embed[],
    title: string,
    lines: string[],
    timestamp: string,
) {
    const descriptions: string[] = [];
    for (const line of lines) {
        const last = descriptions[descriptions.length - 1];
        if (!last || last.length + line.length + 1 > 4000)
            descriptions.push(line);
        else descriptions[descriptions.length - 1] += `\n${line}`;
    }

    descriptions.forEach((description, index) =>
        queue.push({
            color: 0x10a37f,
            title: index ? `${title} (continued)` : title,
            description,
            timestamp,
        }),
    );
}

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
        description: `**\`${old.version}\`** to **\`${newer.version}\`**\n[View changes/diff](https://github.com/wavedevgit/ai-apps-tracker/tree/main/data/cursor)`,
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
        description: `**\`${old.version}\`** to **\`${newer.version}\`**\n[View changes/diff](https://github.com/wavedevgit/ai-apps-tracker/tree/main/data/claude-code)`,
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

export function diffChatGpt(
    old: ChatGptManifest | undefined,
    newer: ChatGptManifest,
    oldModels: ChatGptModel[] | undefined,
    newerModels: ChatGptModel[],
) {
    const timestamp = new Date().toISOString();

    if (old?.version !== newer.version) {
        featureEmbeds.push({
            color: 0x10a37f,
            title: 'New ChatGPT build',
            description: old
                ? `**\`${old.version}\`** to **\`${newer.version}\`**\n[View changes/diff](https://github.com/wavedevgit/ai-apps-tracker/tree/main/data/chatgpt)`
                : `Initial build: **\`${newer.version}\`**`,
            timestamp,
        });

        if (old) {
            const addedRoutes = Object.keys(newer.routes).filter(
                (route) => !old.routes[route],
            );
            const removedRoutes = Object.keys(old.routes).filter(
                (route) => !newer.routes[route],
            );
            pushList(
                featureEmbeds,
                'ChatGPT route diff',
                [
                    ...addedRoutes.map((route) => `+ \`${route}\``),
                    ...removedRoutes.map((route) => `- \`${route}\``),
                ],
                timestamp,
            );
        }
    }

    const oldById = new Map(oldModels?.map((model) => [model.id, model]));
    const oldIds = new Set(oldById.keys());
    const modelChanges: string[] = [];
    for (const model of newerModels) {
        const oldModel = oldById.get(model.id);
        if (!oldModel) {
            modelChanges.push(
                `+ **\`${model.id}\`** (${model.codenames.map((codename) => `\`${codename}\``).join(', ')})${model.aliases.length ? `\n  Aliases: ${model.aliases.map((alias) => `\`${alias}\``).join(', ')}` : ''}`,
            );
            continue;
        }

        const oldCodenames = new Set(
            oldModel.codenames ??
                (oldModel.codename ? [oldModel.codename] : []),
        );
        const codenames = model.codenames.filter(
            (codename) => !oldCodenames.has(codename),
        );
        const oldAliases = new Set(oldModel.aliases ?? []);
        const aliases = model.aliases.filter(
            (alias) => !oldAliases.has(alias) && !oldIds.has(alias),
        );
        if (codenames.length || aliases.length)
            modelChanges.push(
                `~ **\`${model.id}\`**${codenames.length ? `\n  + Codenames: ${codenames.map((codename) => `\`${codename}\``).join(', ')}` : ''}${aliases.length ? `\n  + Aliases: ${aliases.map((alias) => `\`${alias}\``).join(', ')}` : ''}`,
            );
    }
    pushList(
        modelEmbeds,
        'ChatGPT model diff',
        modelChanges,
        timestamp,
    );
}

export async function sendNotifications() {
    const send = (queue: Embed[], env?: string) => {
        if (!queue.length) return;
        const message: Message = { content: '', embeds: queue };
        return sendMessage({ message, env });
    };

    if (!embeds.length && !modelEmbeds.length && !featureEmbeds.length) {
        console.log('No notification changes detected');
        return;
    }

    await Promise.all([
        send(embeds),
        send(modelEmbeds, 'DISCORD_MODELS_WEBHOOKS'),
        send(featureEmbeds, 'DISCORD_FEATURES_WEBHOOKS'),
    ]);
}
