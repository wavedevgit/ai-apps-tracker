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

export default async function sendMessage(
    { message, env = 'DISCORD_WEBHOOKS' }: {
        message: Message;
        env?: string;
    },
) {
    const value = process.env[env];
    if (!value) {
        console.log(`No discord webhook was provided in ${env} env variable`);
        return;
    }
    const webhooks = value.split('!@');
    const messages = message.embeds?.length
        ? message.embeds.map((embed) => ({ ...message, embeds: [embed] }))
        : [message];

    for (let i = 0; i < webhooks.length; i++) {
        const webhook = webhooks[i];
        for (const payload of messages) {
            try {
                const response = await fetch(webhook, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });
                if (!response.ok)
                    throw new Error(`Discord returned ${response.status}`);
            } catch (err) {
                console.log(
                    'failed to send message to webhook',
                    webhooks[i].slice(12, 20),
                    err,
                );
            }
        }
    }
}

export type { Embed, Message };
