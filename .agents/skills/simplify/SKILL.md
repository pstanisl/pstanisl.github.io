---
name: simplify
description: Use when refining recently changed code or docs for reuse, quality, or efficiency issues without changing behavior.
---

# Simplify

## Overview

Run a dedicated simplify pass after implementation to make the result easier to
read, review, and maintain.

Prioritize clarity over cleverness. Preserve behavior, tests, and public
interfaces.

When the tool supports parallel reviewers or subagents, use them. When it
doesn't, run the same review lanes yourself in sequence.

## When to Use

- after writing or modifying code
- when generated code is correct but more complex than needed
- when comments, helpers, or control flow feel noisy or redundant
- when you want a deliberate pass for reuse, quality, and efficiency
- when a review would be easier if the code were flatter and more direct

## When Not to Use

- when the task is still incomplete or failing basic verification
- when the requested change is behavioral rather than structural
- when a broader refactor would go beyond the recently touched scope

## Goals

- reduce unnecessary complexity and abstraction layers
- remove duplication and improve code reuse where it clarifies the result
- remove dead code, unused imports, and redundant comments
- flatten deeply nested logic where possible
- replace clever or tricky patterns with straightforward readable code
- consolidate duplicated logic into clean helpers when that improves clarity
- improve obvious inefficiencies when the safe fix is clear
- keep the result boring, explicit, and maintainable

## Rules

- do not change functionality or behavior
- do not remove tests or reduce coverage
- do not rename public API surfaces without an explicit request
- preserve comments that explain why; remove comments that only explain what
- keep the review scoped to recently changed or explicitly requested code
- check three lenses: reuse, quality, and efficiency
- use parallel review lanes when the tool supports them; otherwise review the
  same lenses sequentially
- if something is already simple, leave it alone
- follow repo instructions in `AGENTS.md` and any closer project-level guidance

## Review Lenses

- **Reuse review:** remove duplication, dead helpers, and needless abstractions;
  extract a helper only when it genuinely improves clarity
- **Quality review:** improve readability, naming, structure, comments, and
  compliance with repo instructions
- **Efficiency review:** remove obvious waste such as repeated work,
  unnecessary allocations, redundant queries, or avoidable renders when the
  safe fix is clear

## Workflow

1. Identify the review scope from the recent diff, the touched files, or the
   user's explicit request. If there is no useful diff, inspect the recently
   changed code directly.
2. Review the scope through three lenses: reuse, quality, and efficiency.
3. Run those reviews in parallel when the tool supports parallel agents or
   subagents; otherwise perform the same reviews sequentially.
4. Deduplicate the findings and ignore churn that does not materially improve
   the code.
5. Make the smallest safe changes that address the meaningful findings.
6. Re-run the relevant verification for the touched area.
7. Summarize only the meaningful simplifications.

## Common Mistakes

- claiming parallel review behavior in tools that do not actually support it
- turning a simplify pass into a behavior-changing refactor
- "optimizing" speculative hot paths without evidence or a clearly safe fix
- extracting helpers just to reduce line count
- collapsing readable control flow into dense one-liners
- rewriting untouched code outside the current scope
