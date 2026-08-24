---
name: create-git-branch
description: Create a new Git branch from master with a concise, descriptive name derived from the user's task. Use when the user asks to start work on a feature, fix, refactor, chore, documentation, or test change in a fresh branch based on master, or asks for a suitable branch name and wants the branch created.
---

# Create Git Branch

Create a safely named branch from `master` while preserving the user's existing work.

## Choose the branch name

Infer the name from the task unless the user supplies one.

- Use lowercase kebab-case words.
- Prefix the name with the best matching category: `feature/`, `fix/`, `refactor/`, `chore/`, `docs/`, or `test/`.
- Describe the intended outcome, not vague activity. Prefer `fix/invoice-total-rounding` over `fix/update-code`.
- Preserve an issue key when the user provides one, for example `feature/kabo-142-add-payment-reminders`.
- Keep the name concise, normally no more than six descriptive words after the prefix.
- Remove punctuation other than hyphens and the single category slash.

If the task is too vague to produce a meaningful name, ask for the intended change before creating the branch.

## Create the branch

1. Confirm the current directory is inside the intended repository with `git rev-parse --show-toplevel`.
2. Inspect `git status --short --branch`. If tracked or untracked changes exist, stop and explain that switching from `master` could carry those changes. Do not stash, commit, discard, or move them without explicit permission.
3. Check whether `origin` exists with `git remote get-url origin`.
4. If `origin` exists, run `git fetch origin master`, then use `origin/master` as the base. If fetching fails, report the failure; do not silently branch from a potentially stale local branch.
5. If no `origin` exists, verify local `master` with `git show-ref --verify refs/heads/master` and use `master` as the base.
6. Verify the proposed name does not already exist locally with `git show-ref --verify refs/heads/<branch>` or remotely with `git show-ref --verify refs/remotes/origin/<branch>`. If it exists, stop and ask whether to switch to it or choose a different descriptive name.
7. Create and switch to the branch with `git switch --create <branch> <base>`.
8. Confirm the result with `git status --short --branch` and `git merge-base --is-ancestor <base> HEAD`.

Do not substitute `main` when `master` is missing. Do not push the branch unless the user explicitly asks.

## Report the result

State the created branch name, the exact base used, and whether the branch remains local-only. If creation stops, identify the blocking condition and leave the repository unchanged.
