# Repository Instructions

Start with `PROJECT.md` and `.doctrine/project.json` before changing this
repository. They define the project goal, lifecycle, boundaries, public
surfaces, delivery model, and adoption gaps.

Use `SylphxAI/doctrine` for enterprise standards. Keep Snapt consumer-neutral:
repo-specific branding belongs in documented parameters or downstream product
configuration, not hidden app behavior.

For control-plane-only changes, validate with:

```bash
python3 /Users/kyle/.doctrine/scripts/project-control-plane-audit.py --local . --fail-on-drift --json
git diff --check
```

For product code changes, also run the relevant Bun commands from
`package.json` and include generated-image smoke evidence for affected routes.
