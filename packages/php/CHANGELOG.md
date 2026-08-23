# Changelog

All notable changes to `@particle-academy/google-slides-ui`,
`@particle-academy/google-slides-js`, `particle-academy/google-slides-php` and
`fancy-google-slides`.

The four packages share one version, because they are generated from one
`provider/` definition and a version that meant something different in each
would be a version nobody could reason about.

## [0.1.0] — 2026-08-23

First release.

### Added

- `presentation_create` — create a blank Google Slides presentation from a
  title. `POST /v1/presentations`.
- A top-level `Presentation` faker, so the node runs on a canvas with no Google
  account.

### Content in the request is ignored

The request type is the full `Presentation`, but Google's discovery method says
provided content is ignored. It can accept a caller-supplied `presentationId`;
this simple action leaves ID generation to Google and sends only `title`.

### No sandbox, and no idempotency

Google has no Slides test estate. A test presentation is a real presentation in
a real Drive. `presentations.create` also declares no idempotency key, so a retry
can create a second presentation and the action is honestly
`unsafe-to-replay`.

[0.1.0]: https://github.com/Fancy-Friends/google-slides/releases/tag/v0.1.0
