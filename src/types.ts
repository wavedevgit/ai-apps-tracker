// opencode
type OpenCodePlatform = {
    url: string;
    signature: string;
};

interface OpenCodeVersion {
    version: string;
    notes: string;
    pub_date: string;
    platforms: Record<string, OpenCodePlatform>;
}

// codex
type CodexPlatform = {
    url: string;
    name: string;
    digest?: string;
    created_at?: string;
    content_type?: string;
};

interface CodexVersion {
    branch: string;
    url: string;
    name: string;
    tag_name: string;
    published_at: string;
    created_at: string;
    diff_url: string;
    binaries: CodexPlatform[];
}

// cursor ai
interface CursorVersion {
    version: string;
}

// claude code
type ClaudeCodePlatform = {
    binary: string;
    checksum: string;
    size: number;
};

interface ClaudeCodeVersion {
    version: string;
    buildDate: string;
    platforms: Record<string, ClaudeCodePlatform>;
}

export type { OpenCodeVersion, ClaudeCodeVersion, CodexVersion, CursorVersion };
