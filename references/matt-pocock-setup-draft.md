# Matt Pocock setup draft

Review copy only; the configuration below has not been applied.

## Addition to AGENTS.md

```markdown
## Agent skills

### Issue tracker

Linear is the primary home for specs and tickets; GitHub Issues holds linked code issues. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the five default Matt Pocock triage labels. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: root `GLOSSARY.md` and `docs/adr/`, created when terms and decisions are resolved. See `docs/agents/domain.md`.
```

## docs/agents/issue-tracker.md

# Issue tracker: Linear with linked GitHub code issues

## Destinations

- Primary tracker: [Video Haven Website](https://linear.app/v1su4/project/video-haven-website-b6e381d5253b).
- Linear project UUID: `d2182810-901a-4db3-8ecc-323feb0429e6` (identifier `P-V1S-7`).
- Linear team: `V1su4`, key `V1S`, UUID `c626c027-b865-4b92-8cbf-84e3fb6425bf`.
- Linked code issues: [gordo-v1su4/video-haven-website-brief](https://github.com/gordo-v1su4/video-haven-website-brief/issues).

## Source of truth

Specs, discovery, planning and implementation tickets live in Linear. When a skill says "publish to the issue tracker", create a Linear issue in the project and team above. When a skill says "fetch the relevant ticket", read that Linear issue and its relevant comments and relations.

Create a GitHub issue when code-specific work needs a GitHub issue, or the user explicitly requests one. Link it to the corresponding Linear ticket. Preserve the Linear spec as the source of truth; record code findings and PR links in GitHub as appropriate. Do not automatically duplicate every ticket or claim automatic synchronization exists. Search the project and repository before creating an item.

## Linear operations

Use the connected Linear tools:
- List/search: `linear_list_issues`, scoped to this project and team. Follow pagination for exhaustive queries.
- Read: `linear_get_issue` with `includeRelations: true`; fetch relevant comments with the Linear comment tools.
- Create/update: `linear_save_issue`. Creation uses `team` and `project` UUIDs above, a title and Markdown description. Updating uses the existing issue `id`.
- Apply/remove labels: `addLabels` and `removeLabels`; preserve other labels.
- Dependencies: `blockedBy` / `blocks`; children: `parentId`; related work: `relatedTo`.
- Cross-links: `links` can attach GitHub issue or PR URLs. Also include the Linear ticket URL in the GitHub issue body.
- Read current team states before changing status; choose the existing appropriate state rather than inventing one.
- If Linear is unavailable, report the limitation and keep a local draft. Do not silently publish the ticket to a different tracker.

## GitHub operations

Use `gh` with `--repo gordo-v1su4/video-haven-website-brief`.
- Create: `gh issue create --repo gordo-v1su4/video-haven-website-brief --title "..." --body-file <saved-markdown-file>`.
- Read: `gh issue view <number> --repo gordo-v1su4/video-haven-website-brief --comments`.
- List: `gh issue list --repo gordo-v1su4/video-haven-website-brief --state open --json number,title,body,labels,url`.
- Label: `gh issue edit <number> --repo gordo-v1su4/video-haven-website-brief --add-label "..."` or `--remove-label "..."`.
- Close: `gh issue close <number> --repo gordo-v1su4/video-haven-website-brief`.

Write multiline descriptions or comments to a UTF-8 file and use `--body-file`. Publishing comments/messages requires the user's explicit instruction or an explicitly invoked skill that authorizes it.

**PRs as a request surface: no.**

## Wayfinding

The map is a Linear parent issue containing Notes, Decisions-so-far and Fog. Child tickets belong to the same project and use `parentId`; distinguish research, prototype, grilling and task in their titles/descriptions. Use native Linear dependency relations for blockers. To find the frontier, inspect open children and their relations, omit assigned tickets or tickets with unfinished blockers, and use map order. Claim the selected ticket by assigning it to the driving developer. Resolve with the answer and an existing completion state, then update the map with a concise context pointer. Link any related GitHub issue or PR.

## docs/agents/domain.md

# Domain docs

This repo uses a single domain context.

## Read before exploring

Read root `GLOSSARY.md` when present and relevant decisions under `docs/adr/`. Then follow the Graft context workflow in `AGENTS.md` before searching or opening source code.

If the glossary or ADRs do not exist, proceed silently. Do not suggest creating them upfront. The `domain-modeling` skill, reached through `grill-with-docs` or `improve-codebase-architecture`, creates them when terms or decisions are resolved.

## Layout

- `GLOSSARY.md`: shared domain vocabulary.
- `docs/adr/0001-<decision>.md`: architectural decisions, numbered in order.

Use glossary terms in specs, ticket titles, refactor proposals and tests. Reconsider invented synonyms; note genuine vocabulary gaps for domain modeling.

If a proposal conflicts with an ADR, identify that decision and explain why it should be reopened instead of silently overriding it.

Keep development footage and working previews distinct from released episodes, as required by the project conventions.

## docs/agents/triage-labels.md

# Triage labels

Use the same vocabulary in Linear and linked GitHub code issues.

| Canonical role | Tracker label | Meaning |
| --- | --- | --- |
| `needs-triage` | `needs-triage` | Maintainer needs to evaluate the issue |
| `needs-info` | `needs-info` | Waiting for more information |
| `ready-for-agent` | `ready-for-agent` | Fully specified, ready for an autonomous agent |
| `ready-for-human` | `ready-for-human` | Requires human implementation |
| `wontfix` | `wontfix` | Will not be actioned |

When a skill mentions a canonical role, use its tracker label above. Reuse existing labels and preserve unrelated labels. These labels do not replace Linear workflow states.

