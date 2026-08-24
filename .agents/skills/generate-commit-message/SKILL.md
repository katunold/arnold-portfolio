---
name: generate-commit-message
description: Generate a brief, accurate Git commit message from the repository's staged or unstaged changes. Use when the user asks for a commit message, commit subject, Conventional Commit summary, or a concise description suitable for committing the current changes.
---

# Generate Commit Message

Inspect the actual Git changes and return a concise commit subject. Do not modify, stage, commit, or push anything.

## Inspect the changes

1. Confirm the current directory is inside the intended repository with `git rev-parse --show-toplevel`.
2. Run `git status --short` to identify staged, unstaged, and untracked files.
3. If staged changes exist, inspect `git diff --cached --stat` and `git diff --cached`. Base the message only on the staged changes because those are what the next commit will contain.
4. If nothing is staged, inspect `git diff --stat` and `git diff`, then inspect relevant untracked files as needed. Do not read environment files, credentials, keys, or other likely secrets.
5. If no changes exist, state that there are no changes to summarize.

## Write the message

- Return one subject line by default.
- Use the Conventional Commit form `type(scope): summary` when the change clearly fits. Omit the scope when it adds little value.
- Choose the most accurate type: `feat`, `fix`, `refactor`, `test`, `docs`, `build`, `ci`, `chore`, `perf`, or `style`.
- Write the summary in imperative mood and lowercase after the colon.
- Describe the behavior or outcome rather than listing filenames or implementation details.
- Keep the subject at 72 characters or fewer when practical.
- Do not end the subject with a period.
- Do not claim changes that are absent from the diff.

Examples:

- `fix(invoices): associate labels with the client selector`
- `feat: add safe workspace branch creation workflow`
- `test(api): cover failed invoice requests`

If the changes are clearly unrelated, recommend separate commits and provide one brief subject for each logical group instead of forcing an inaccurate combined message.

## Respond

Output only the commit subject in a code span unless the user requests alternatives, a body, or an explanation. When staged and unstaged changes both exist, add one short note that the message summarizes staged changes only.
