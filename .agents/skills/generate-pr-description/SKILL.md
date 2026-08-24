---
name: generate-pr-description
description: Generate a concise, ready-to-paste pull request description from the current branch's Git commits and changes relative to its base branch. Use when the user asks for a PR description, pull request summary, change summary for review, or Markdown body for a pull request.
---

# Generate PR Description

Inspect the actual branch changes and produce a concise Markdown PR description. Do not modify files, create a PR, push commits, or change Git state.

## Determine the change set

1. Confirm the intended repository with `git rev-parse --show-toplevel` and inspect `git status --short --branch`.
2. Use the base branch named by the user. Otherwise prefer `origin/master` when that ref exists, then local `master`. Do not silently substitute another branch; ask when neither exists.
3. Find the common ancestor with `git merge-base HEAD <base>`.
4. Inspect committed work with `git log --oneline <merge-base>..HEAD`.
5. Inspect the complete tracked change set with `git diff --stat <merge-base>` and `git diff <merge-base>`. This includes committed, staged, and unstaged tracked changes.
6. Inspect relevant untracked files identified by `git status --short` as needed. Do not read environment files, credentials, keys, or other likely secrets.
7. If no branch changes exist, state that there are no changes to describe.

When uncommitted changes exist, add a brief note after the description that the draft includes uncommitted work.

## Write the description

Use this compact structure:

```markdown
## Summary

- Explain the user-facing or engineering outcome.
- Add a second point only when it communicates a distinct outcome.

## Changes

- Summarize the important implementation changes at a reviewer-friendly level.

## Testing

- `command` — passed
```

- Keep bullets short, specific, and factual.
- Describe outcomes and reviewer-relevant behavior rather than listing every file.
- Mention migrations, breaking changes, configuration changes, or follow-up work only when present.
- Include test commands and results only when they were actually run and their outcome is known.
- Write `- Not run (not requested)` when no testing evidence is available.
- Do not invent issue links, screenshots, metrics, test results, or implementation details.
- Omit empty optional sections instead of filling them with placeholders.
- If the changes contain unrelated work, recommend separate PRs before drafting a misleading combined description.

## Respond

Return only the ready-to-paste Markdown description unless the user requests alternatives, a title, or an explanation.
