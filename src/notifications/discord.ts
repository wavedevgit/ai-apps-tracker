type Embed = {
    title?: string;
    description?: string;
    color?: number;
    fields?: { name: string; value: string; inline?: boolean }[];
    image?: { url: string };
    timestamp: string;
    thumbnail?: { url: string };
    footer?: { text: string; icon_url?: string };
    author?: { name: string; icon_url?: string };
};

type Message = {
    content?: string;
    embeds?: Embed[];
    username?: string;
    avatar_url?: string;
    tts?: boolean;
};

export default async function sendMessage(message: Message) {
    if (!process.env.DISCORD_WEBHOOKS) {
        console.log(
            'No discord webhook was provided in DISCORD_WEBHOOKS env variable ',
        );
        return;
    }
    // provide them in order in env (webhook1 -> roleid1, ...)
    const webhooks = process.env.DISCORD_WEBHOOKS.split(':');
    const roles = process.env.DISCORD_ROLES?.split(':') || [];

    for (let i = 0; i < webhooks.length; i++) {
        const webhook = webhooks[i];
        let roleMention = roles[i];
        roleMention = roleMention ? roleMention + ' ' : '';
        message.content = message.content;
        await fetch(webhook, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(message),
        });
    }
}

export type { Embed, Message };
