import { execCmd } from './shell.js';

export default async function beautifyAll() {
    await execCmd(
        `find ./data -type f -name "*.js" -exec npx js-beautify -r {} +`,
        {
            skipStdout: true,
        },
    );
}
