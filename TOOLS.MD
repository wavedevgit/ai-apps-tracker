# AI Coding Tools (Installable / Runnable) – 2026

## 🚀 Cursor (AI Code Editor)

- 🧠 **Description:** AI‑powered code editor/IDE with deep codebase awareness and agentic coding features. Proprietary, wraps AI workflows around your code and assists writing/debugging. :contentReference[oaicite:1]{index=1}
- 📦 **GitHub:** https://github.com/cursor/cursor :contentReference[oaicite:2]{index=2}  
  _Note: Repo is publicly indexed but Cursor itself is proprietary; source code may not be fully open._
- 📥 **Installer / Downloads:**
    - macOS / Windows / Linux binaries at https://github.com/cursor/cursor (release assets) :contentReference[oaicite:3]{index=3}
    - Community installer scripts (AppImage) available via third‑party gist e.g., cursor‑AI AppImage installer :contentReference[oaicite:4]{index=4}

---

## 💻 Claude Code (Terminal‑Based AI Coding Agent)

- 🧠 **Description:** Agentic CLI tool that understands entire codebases, edits files, handles git workflows from natural language in your terminal. :contentReference[oaicite:5]{index=5}
- 📦 **GitHub Repo:** https://github.com/anthropics/claude‑code :contentReference[oaicite:6]{index=6}
- 📥 **Install Instructions:**
    - macOS/Linux:
        ```sh
        curl ‑fsSL https://claude.ai/install.sh | bash
        ```
    - Homebrew (macOS/Linux):
        ```sh
        brew install --cask claude‑code
        ```
    - Windows:
        ```powershell
        irm https://claude.ai/install.ps1 | iex
        ```
        (_Installation methods from official repo docs / CLI instructions_) :contentReference[oaicite:7]{index=7}

---

## 🧠 OpenAI Codex (AI Coding Engine)

> **Note:** Codex is not a traditional CLI product on its own; instead, the _Codex Engine_ often comes with CLI bindings or integration with tools like Copilot or standalone agents. :contentReference[oaicite:8]{index=8}

### 📌 OpenAI Codex CLI

- 📦 Example OSS CLI: codex CLI
    - Repo snippet (from community guides): https://github.com/shakacode/claude‑code‑commands‑skills‑agents/blob/main/docs/claude‑code‑with‑codex.md _(contains Codex CLI install steps)_ :contentReference[oaicite:9]{index=9}
    - Installation method shown in that doc:
        ```sh
        # npm global install (example)
        npm install -g @openai/codex
        ```
        _(Check official docs or CLI tooling for exact package names)_ :contentReference[oaicite:10]{index=10}

---

## 🧰 Other AI Coding Tools (Open‑Source Lists – Runners / CLIs)

### 🌟 Awesome AI Coding Tools (lists many runnable projects)

- 📦 **Awesome Code AI Tools:** https://github.com/sourcegraph/awesome‑code‑ai — includes code assistants (completion engines, CLI tools, and refactors). :contentReference[oaicite:11]{index=11}

### 🔧 Practical Toolkit / Techniques

- 📦 **Awesome AI Coding Techniques:** https://github.com/inmve/awesome‑ai‑coding‑techniques — community‑driven techniques for using AI coding assistants like Cursor, Claude Code, Codex. :contentReference[oaicite:12]{index=12}

---

## 🧾 Summary (Capabilities)

| Tool        | Runnable Locally         | Type               | Repo / Installer                                                                  |
| ----------- | ------------------------ | ------------------ | --------------------------------------------------------------------------------- |
| Cursor      | ✔️ (IDE)                 | Proprietary AI‑IDE | https://github.com/cursor/cursor :contentReference[oaicite:13]{index=13}          |
| Claude Code | ✔️ (CLI)                 | Agentic CLI        | https://github.com/anthropics/claude‑code :contentReference[oaicite:14]{index=14} |
| Codex CLI   | ✔️ (CLI, based on Codex) | CLI Agent          | Used via npm / CLI (example) :contentReference[oaicite:15]{index=15}              |

---

## 📝 Notes

- **Cursor** is closed‑source but has a GitHub repo for issues and releases, and official installers are provided there. :contentReference[oaicite:16]{index=16}
- **Claude Code** provides an official GitHub repo with install scripts/documentation. :contentReference[oaicite:17]{index=17}
- **OpenAI Codex** exists as underlying models powering various CLI/IDE wrappers (Codex CLI) rather than one main repository. :contentReference[oaicite:18]{index=18}
