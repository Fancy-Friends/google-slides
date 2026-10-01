/*
 * Google Slides — the published npm packages.
 *
 * GENERATED — do not edit. Fix weaver's template/ and regenerate.
 *
 * This runs against the PUBLISHED package, installed by name from the
 * registry into a project that has never seen this repo. Every other test
 * here imports from ../src and therefore cannot see the packaging.
 */

import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { googleSlidesFaker } from "@particle-academy/google-slides-js";
import { GOOGLE_SLIDES_KINDS } from "@particle-academy/google-slides-ui";
import { fakeRequest } from "@particle-academy/fancy-connector-core";

/*
 * WHERE did that come from?
 *
 * Node resolves a bare specifier from the importing MODULE's directory, not
 * the working directory. So running this script across from a checkout
 * resolves out of the REPO's node_modules and silently tests the source
 * again — which it did, and passed, before CI caught it.
 *
 * Two things are checked, because neither is enough alone: that the package
 * came from an INSTALL rather than from source, and that this script is not
 * sitting inside the provider repo it is supposed to be testing.
 */
const resolved = import.meta.resolve("@particle-academy/google-slides-js");
const here = dirname(fileURLToPath(import.meta.url));

assert.ok(
  !existsSync(join(here, "..", "packages", "js", "package.json")),
  `${here} is inside the provider repo, so a bare import resolves the repo's ` +
    "own node_modules. Copy this script into a project that installed the " +
    "published package and run it there.",
);
assert.match(resolved, /node_modules/, `resolved ${resolved}, which is not an installed package`);
console.log(`  ok   resolved from ${resolved}`);

const GOLDENS = [
  {
    "operation": "presentation_create",
    "config": {},
    "expected": {
      "presentationId": "1Slide_fake_069dd03c2fdb",
      "title": "Untitled presentation"
    }
  },
  {
    "operation": "presentation_get",
    "config": {},
    "expected": {
      "presentationId": "1Slide_fake_f5354a08d2f8",
      "title": "Untitled presentation",
      "locale": "en",
      "slides": [
        {
          "objectId": "slide_fake_186e6009598a",
          "pageElements": [
            {
              "objectId": "title_fake_92815b64845d",
              "shape": {
                "shapeType": "TEXT_BOX",
                "placeholder": {
                  "type": "CENTERED_TITLE"
                },
                "text": {
                  "textElements": []
                }
              }
            },
            {
              "objectId": "subtitle_fake_7603348102f0",
              "shape": {
                "shapeType": "TEXT_BOX",
                "placeholder": {
                  "type": "SUBTITLE"
                },
                "text": {
                  "textElements": []
                }
              }
            }
          ]
        }
      ]
    }
  }
];

for (const { operation, config, expected } of GOLDENS) {
  const faked = googleSlidesFaker(operation, fakeRequest("google_slides", operation, config));

  assert.deepEqual(
    faked,
    expected,
    `the PUBLISHED package produced different bytes for ${operation} than the repo does`,
  );
  console.log(`  ok   ${operation}`);
}

// The ui package is a separate tarball, and js depends on it by its
// published name — so this also proves that dependency resolves.
assert.equal(GOOGLE_SLIDES_KINDS.length, 2);
for (const kind of GOOGLE_SLIDES_KINDS) {
  const keys = kind.configSchema.map((field) => field.key);
  assert.equal(keys[0], "connection");
  assert.equal(keys[1], "mode");
  assert.ok(kind.outputShape.length > 0, `${kind.name} declares no output shape`);
}
console.log(`  ok   ui kinds resolve from ${"@particle-academy/google-slides-ui"}`);

console.log(`\n  ${GOLDENS.length} operations verified against the published packages.`);
