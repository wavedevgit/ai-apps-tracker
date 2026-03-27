import { execCmd } from './shell';

export default async function beautifyAll() {
    await execCmd("npx js-beautify -r -f './data/**/*.js'", {
        skipStdout: true,
    });
}
