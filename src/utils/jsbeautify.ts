import { execCmd } from './shell.js';

export default async function beautifyAll() {
    await execCmd("npx js-beautify -r -f './data'", {
        skipStdout: true,
    });
}
