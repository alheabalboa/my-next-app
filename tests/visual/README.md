# Visual diff tests

Two layers of screenshots live here:

1. **Reference screenshots** under `references/` — captured from the live
   rundlehornsmilesdental.com site by `scripts/capture-references.mjs`.
   These are the target we're rebuilding toward. Commit them.
2. **Playwright baselines** under `*-snapshots/` directories — Playwright's
   built-in baseline system, generated on first run with `--update-snapshots`.
   These represent the local build's accepted state and guard against
   regressions between edits.

## Workflows

**Refresh reference screenshots (when the live site changes or you need a new route):**

```
npm run refs:capture
```

**Run visual regression tests against the local build:**

```
npm run test:visual
```

**Accept the current local output as the new baseline:**

```
npm run test:visual:update
```

The `tests/visual/references/*.png` images are the source of truth for
"what the rebuild should look like." Compare local screenshots against
them manually (or via a diff script we'll add when we start building pages)
to judge pixel-perfection progress.
