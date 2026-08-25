# Changelog

All notable changes to `@particle-academy/google-slides-ui`,
`@particle-academy/google-slides-js`, `particle-academy/google-slides-php` and
`fancy-google-slides`.

The four packages share one version, because they are generated from one
`provider/` definition and a version that meant something different in each
would be a version nobody could reason about.

## [0.3.0] — 2026-08-24

### Added

- **The README now says how to SET THIS CONNECTOR UP**, in the package itself.

Until now it explained what the four packages are, what they cost and why the
repo is generated — and said nothing about credentials, scopes, sandboxes or
operations. Somebody who installed it could not learn from it which credentials
a connection needs, where a human GETS them, which scopes to request, or what
the connector can actually do. All of that was already in the definition; the
one document a consumer reads was the one that omitted everything actionable.

The new **Setting it up** section carries:

- every credential, with the text saying where the value comes from, whether it
  is **per installation** or **per connected account**, and whether it is secret;
- the OAuth authorize and token URLs and the exact scopes, verbatim;
- the access-token lifetime, and where refresh tokens ROTATE, the two things a
  host must not do — retry a failed refresh, or refresh concurrently — because a
  replay revokes the entire grant and nothing in the failure says why;
- the estate in this provider's own terms, including the cases where a
  successful-looking run reaches nobody, or reaches the real one;
- every action and trigger with its method, path, inputs, and whether it is safe
  to replay;
- a trigger's provider-side setup, which nobody can derive from anything else.

It is **generated from `provider/manifest.json`**, so it cannot drift from what
the packages do — which is the point at a few hundred providers, where a
hand-written setup section is a few hundred documents going quietly stale.

No code changed. This release exists because a registry and an installing agent
read the PUBLISHED artifact, and the artifact carried the old README.

## [0.2.0] — 2026-08-24

### Changed

- **`@particle-academy/google-slides-ui` is now an OPTIONAL PEER dependency of `@particle-academy/google-slides-js`, not a hard one.**

`./flow` needs it; nothing else does. It was a hard dependency, and because
`@particle-academy/google-slides-ui` itself peer-depends on `fancy-flow` — which npm 7+ installs
automatically — `npm install @particle-academy/google-slides-js` pulled the **entire flow engine**
onto disk for a consumer who only wanted to call the API. Roughly **18 MB
became 874 KB**, and the package works exactly as before:

```js
import { googleSlides… } from "@particle-academy/google-slides-js";
// an injected transport, no flow engine anywhere
```

**This is breaking if you use `@particle-academy/google-slides-js/flow`.** Add `@particle-academy/google-slides-ui` to your own
dependencies — it was always being installed for you, and now it is declared.
Everything importing only the main entry point is unaffected.

The fix is on this edge rather than on `@particle-academy/google-slides-ui` → `fancy-flow`: the ui package
genuinely requires fancy-flow, since it calls `defineConnectorKind`, and marking
that peer optional would be a lie about what it needs.

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
[0.2.0]: https://github.com/Fancy-Friends/google-slides/releases/tag/v0.2.0
[0.3.0]: https://github.com/Fancy-Friends/google-slides/releases/tag/v0.3.0
