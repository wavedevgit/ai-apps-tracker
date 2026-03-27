import { exec } from 'child_process';

export interface ExecResult {
    stdout: string;
    stderr: string;
}

export interface ExecOptions {
    skipStdout?: boolean;
    maxBuffer?: number;
}

export function execCmd(
    command: string,
    options?: ExecOptions,
): Promise<ExecResult> {
    return new Promise((resolve, reject) => {
        const execOptions: any = {
            maxBuffer: options?.maxBuffer ?? Infinity,
        };

        exec(command, execOptions, (error, stdout, stderr) => {
            if (error) {
                reject({
                    error,
                    stdout: options?.skipStdout
                        ? ''
                        : (stdout as unknown as string),
                    stderr: stderr as unknown as string,
                });
                return;
            }

            resolve({
                stdout: options?.skipStdout
                    ? ''
                    : (stdout as unknown as string).trim(),
                stderr: (stderr as unknown as string).trim(),
            });
        });
    });
}
