# Agent Instructions

## Project

This repository is a sandbox for autonomous coding-agent experiments.

## Verification

Before completing a task, run:

npm test
npm run typecheck
npm run build

## Rules

- Implement only the requested task.
- Do not modify unrelated files.
- Prefer built-in Node.js APIs where practical.
- Add tests for behavioral changes.
- Never remove or weaken tests merely to make them pass.
- Do not modify Git remotes.
- Do not push unless explicitly requested.

## Definition of Done

A task is complete only when:

1. The requested behavior is implemented.
2. Relevant tests exist.
3. `npm test` passes.
4. `npm run typecheck` passes.
5. `npm run build` passes.
