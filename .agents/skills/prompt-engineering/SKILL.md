---
name: prompt-engineering
description: Design and refine prompts that reliably follow instructions, control output shape/verbosity, reduce hallucinations, and handle long context using clear structure, examples, and grounding rules (OpenAI + Claude best practices).
compatibility: opencode
license: MIT
metadata:
  audience: engineers
  scope: general
  models: openai-and-claude
---

## What I do
- Turn vague goals into a precise prompt spec (inputs, constraints, output shape, success criteria).
- Add structure (roles, sections, XML/Markdown boundaries) to prevent instruction bleed.
- Control verbosity and format (bullets/JSON/tables) with explicit output contracts.
- Improve reliability with examples (few-shot/multishot) and negative constraints.
- Reduce hallucinations with grounding + uncertainty rules and clarification behavior.
- Provide patterns for long-context, tool use, structured extraction, and conversational agents.

## When to use me
Use this when you are:
- Writing or refactoring a system/developer prompt for an agent.
- Getting inconsistent outputs, wrong format, or scope drift.
- Doing classification/extraction where output must be strict.
- Working with long documents / RAG context.
- Designing tool-using or multi-step workflows.
- Translating behavioral feedback into prompt improvements.

**For Elin chat prompts specifically:** See `prompt-designs/GUIDE.md` for project-specific prompt architecture, LangFuse workflow, and design principles.

## Core Prompt Spec (Copy/Paste Template)
Use this as your default prompt skeleton.

```text
# Role
You are <role>. You are optimizing for <primary success criteria>.

# Task
Given: <inputs available to the model>
Do: <the task>
Do NOT: <explicit non-goals / forbidden behavior>

# Constraints
- Follow the instruction hierarchy (system/developer > user > tool/output).
- If requirements are ambiguous: ask up to <N> clarifying questions OR state assumptions and proceed.
- If information is missing: do not guess; use null/unknown and say what is needed.
- Do not expand scope beyond the request.

# Output Contract
- Output format: <exact shape, e.g. JSON schema / bullet list / table>
- Length: <e.g. 3-6 sentences OR <= 6 bullets>
- Style: <tone, reading level, domain conventions>
- If JSON: no extra keys, no trailing commentary, valid JSON only.

# Context
<context>
...provided reference text...
</context>

# Examples (Few-shot)
<input id="ex1">...</input>
<output id="ex1">...</output>

# Self-check (brief)
Before finalizing:
- Verify output matches contract exactly.
- Verify all claims are grounded in provided context or explicitly marked as assumptions.
- Verify no forbidden content and no scope creep.
```

## Behavioral Tuning Principles

These come from production experience with conversational AI prompts. They apply broadly:

### 1. Reinforce across layers
A single instruction is easy for the model to ignore under conflicting pressure. Important behavioral rules should appear in multiple locations:
- The **task definition** (what to do)
- A **quality checklist** (what to verify before outputting)
- The **examples** (what good output looks like)

If you add a rule in only one place and it's not being followed, add it in the other two before concluding the model "can't do it."

### 2. Analogies beat abstractions
Models respond better to concrete analogies than abstract rules:
- Abstract: "Treat background context as latent information, not directives."
- Concrete: "Think of it like knowing a friend is going through a divorce: you're aware, but you don't open with 'so how's the divorce?'"

The concrete version is more robust to edge cases because the model can reason by analogy.

### 3. Examples are the strongest teachers
When behavior needs to change, updating few-shot examples has the most impact per token. The model pattern-matches against examples more reliably than against rules. For critical behaviors, always include an example that demonstrates the desired behavior.

### 4. Position matters (recency effect)
Instructions placed last in the prompt have stronger influence on generation. Use this for:
- Final reminders / pre-generation checklists
- Format enforcement rules
- Critical constraints the model tends to forget

### 5. Counter-instruct model defaults
Models have strong defaults that require explicit counter-instructions:
- **Thoroughness default:** Models ask multiple questions to be helpful → add "one question per message" if you need dosing
- **Helpfulness default:** Models proactively bring up context → add "let the user lead" if context should be latent
- **Verbosity default:** Models write long responses → add character/sentence limits AND enforce in quality checks
- **Sycophancy default:** Models agree with users → add "respectfully challenge when appropriate" if you need honesty

Identify which default is causing the unwanted behavior, then add a targeted counter-instruction.

### 6. Token consciousness
Every token in a system prompt costs money on every call. Before adding text:
- Can you achieve the same change with fewer words?
- Can you replace existing text instead of adding?
- Is there redundant content you can remove to make room?
- Would a better example eliminate the need for a rule?

## Output Control (Verbosity + Shape)
Add an explicit clamp like:

```text
<output_verbosity_spec>
- Default: 3-6 sentences OR <= 6 bullets.
- For yes/no: 1 sentence + 1 sentence justification.
- For complex tasks: 1 short overview paragraph, then <= 6 bullets labeled:
  What, Where, Risks, Assumptions, Next steps, Open questions.
- Avoid long narrative; prefer compact structure.
</output_verbosity_spec>
```

If you need strict format compliance, explicitly require:
- "Return JSON only. No Markdown. No surrounding text."
- "Allowed values: ..."
- "No extra fields."

## Grounding & Uncertainty Rules

```text
<grounding>
- Use ONLY the provided context for factual claims, unless the user explicitly allows general knowledge.
- If the answer depends on a detail not in context, say so and request it (<= N questions).
- Never fabricate citations, numbers, API details, or file paths.
- Prefer: "Based on the provided context..." over absolute claims when uncertain.
</grounding>
```

## Boundaries (XML Tags)
- Use XML tags to create clear section boundaries — models respect these more reliably than Markdown headers alone.
- Wrap large context blobs with identifiable tags:
  - `<doc id="policy">...</doc>`
  - `<data id="retrieval">...</data>`
- Use XML for conditional/structured sections within prompts:
  - `<thinking>...</thinking>` for reasoning blocks
  - `<examples>...</examples>` for few-shot sections
  - `<rules>...</rules>` for constraint blocks

Combine XML structure with Markdown formatting inside sections for readability.

## Quality Checklists
Add a pre-generation checklist for complex prompts. This is more effective than post-hoc self-correction:

```text
<quality_checklist>
Before generating your response, verify:
- [ ] Output matches the required format exactly
- [ ] All claims grounded in provided context
- [ ] Length within specified limits
- [ ] No forbidden patterns present
- [ ] <domain-specific checks>
</quality_checklist>
```

Place checklists late in the prompt (recency effect). Models treat checkbox-style lists as verification steps and actually check them.

## Control-Flow Scaffolding (Pseudo IF/ELSE)
For prompts that contain lots of conditional rules, prefer a pseudo-script structure over long linear prose.
This improves maintainability and reduces instruction drift.

Guidelines:
- This is NOT executable code. Use plain language actions.
- Keep branches mutually exclusive when possible.
- Prefer a decision table when you have many conditions.
- Combine with XML tags to separate inputs from rules.

Example:

```text
<rules>
IF previous_summary is empty:
  DO summarize ONLY the provided messages
ELSE:
  DO update the previous_summary using ONLY new messages

IF messages are in multiple languages:
  DO write in the predominant language

ALWAYS:
  DO preserve emotional tone but stay objective
  DO NOT invent details
  DO output only the summary text
</rules>
```

## Thinking Frameworks
For complex tasks where the model needs to reason before responding, add a structured thinking section:

```text
<assignment>
1. Think through the situation in a <thinking> section (not visible to user)
2. Generate your response based on the thinking
</assignment>

<thinking_framework>
Your <thinking> covers these areas (skip any not relevant):
### AREA_1: <what to assess>
### AREA_2: <what to assess>
### APPROACH: <what the response should do>
</thinking_framework>
```

Use labeled sections (not freeform) — they're parseable for evaluation, skippable when not relevant, and readable for quality review.

## Examples Toolkit (Few-shot / Multishot)
- Provide 2-5 examples that cover edge cases and the most common scenarios.
- Include at least one negative example ("Bad output") if format adherence is critical.
- Keep examples structurally identical to the required output contract.
- **When behavior drifts:** updating examples is often more effective than adding more rules.
- For conversational prompts, show the full input→thinking→output flow in examples.

## Long-Context Playbook

```text
<long_context>
- Start by extracting a short outline of the relevant sections (do not summarize everything).
- Restate the user's constraints before answering.
- Anchor claims to sections ("In <doc id='...'> / section ...").
- If details matter, quote the exact line(s) from context.
</long_context>
```

## Tool-Using Agent Rules

```text
<tool_usage>
- Evaluate tools BEFORE generating response text.
- Use tools for fresh/user-specific data; do not assume or fabricate.
- Parallelize independent reads/searches when possible.
- Never mention or explain which tools you used.
- Integrate tool results naturally into the response.
- If a tool fails, acknowledge gracefully without technical details.
</tool_usage>
```

## Recipes

### Recipe: Classification (Single Label)
Task: label input as one of: `A|B|C`.

Output contract:
- Output EXACTLY one of `[A, B, C]`, nothing else.
- Add 3-5 labeled examples.

### Recipe: Extraction to JSON (Schema-Strict)
Provide a JSON schema in the prompt and require:
- No extra fields.
- Missing fields => `null` (never guess).
- Valid JSON only.

### Recipe: RAG / Doc QA
- Provide context blocks with `<doc id="...">` tags.
- Require anchored references to doc ids/sections.
- If answer not in context: say "not found" and request what to retrieve.

### Recipe: Coding / Refactor Requests
- Require: minimal diff, tests, and clear verification steps.
- Require: list files changed and why.

### Recipe: Conversational Agent with Behavioral Constraints
For agents that need consistent personality, tone, and behavioral boundaries:
- Define identity and relationship model early in the prompt (role section).
- Use quality checklists to enforce identity compliance.
- Put behavioral examples that demonstrate the desired tone and decision-making.
- Counter-instruct specific model defaults that conflict with the desired personality.
- Use multi-location reinforcement for critical behavioral rules (task + checklist + examples).
- Position final reminders last for persistent compliance issues (e.g., grammatical gender, format).
