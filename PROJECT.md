# snapt

`snapt` is an active application repository for generating GitHub visual
identity assets such as social banners, star history views, and language
distribution graphics from GitHub data. It owns the web app, API routes, Silk
styling integration, and rendering behavior for those visual surfaces.

## Lifecycle And Layer

- Lifecycle: `active`
- Layer: `application`

## Goals

- Generate GitHub repository visual assets from documented URL parameters and
  GitHub API data.
- Keep banner, star-history, language, web UI, and Silk-generated styling
  behavior coherent in one app.
- Expose only documented API routes, rendering behavior, and configuration to
  consumers.

## Non-Goals

- Own GitHub API availability, repository analytics semantics, or consumer
  product branding strategy.
- Own enterprise doctrine, org rulesets, or shared CI/release policy.
- Encode one repository's special-case visual identity as hidden app behavior.

## Boundaries

This repository owns the Snapt app and generated visual asset API routes. It
does not own GitHub data correctness or downstream product branding. Optional
provider tokens, API rate limits, and deployed route behavior require
forward-fix recovery planning after runtime side effects.

## Public Surfaces

- `README.md` documents the app and routes.
- `app/api/` contains generated visual asset API routes.
- `app/page.tsx` provides the web UI.
- `package.json` defines commands and dependencies.
- `SILK_STATUS.md` documents current Silk/Turbopack constraints.
- `.doctrine/project.json` is the machine-readable project manifest.

## Delivery

No repo-local CI workflow is currently declared. Production proof must include
build evidence, deployed route readback, and generated-image smoke evidence for
affected visual surfaces.

The authoritative control-plane record is `.doctrine/project.json`.
