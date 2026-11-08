/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/fixtures/ by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/fixtures/ (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_slides
 */

/**
 * The golden fixtures.
 *
 * Deterministic on purpose: the same seed produces the same bytes in
 * TypeScript, PHP and Python, so this file and its twins in the other packages
 * assert the SAME values. That turns the faker into a parity test rather than
 * a convenience — which matters, because cross-runtime drift does not fail
 * loudly. It completes, down one path, with no error.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { fakeRequest } from "@particle-academy/fancy-connector-core";

import { googleSlidesFaker } from "../src/faker.js";

test("batch_update fakes the shape Google Slides publishes", () => {
  const config = {};

  const faked = googleSlidesFaker("batch_update", fakeRequest("google_slides", "batch_update", config));

  assert.deepEqual(faked, {
    "presentationId": "1Slide_fake_936418571db0",
    "replies": [
      {}
    ],
    "writeControl": {
      "requiredRevisionId": "45a352bed1642dc4"
    }
  });
});

test("presentation_create fakes the shape Google Slides publishes", () => {
  const config = {};

  const faked = googleSlidesFaker("presentation_create", fakeRequest("google_slides", "presentation_create", config));

  assert.deepEqual(faked, {
    "presentationId": "1Slide_fake_069dd03c2fdb",
    "title": "Untitled presentation"
  });
});

test("presentation_get fakes the shape Google Slides publishes", () => {
  const config = {};

  const faked = googleSlidesFaker("presentation_get", fakeRequest("google_slides", "presentation_get", config));

  assert.deepEqual(faked, {
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
  });
});

test("text_replace fakes the shape Google Slides publishes", () => {
  const config = {};

  const faked = googleSlidesFaker("text_replace", fakeRequest("google_slides", "text_replace", config));

  assert.deepEqual(faked, {
    "presentationId": "1Slide_fake_529731fd21b1",
    "replies": [
      {
        "replaceAllText": {
          "occurrencesChanged": 1
        }
      }
    ],
    "writeControl": {
      "requiredRevisionId": "5a08fca9f6223287"
    }
  });
});

test("an operation with no fixture throws rather than inventing a shape", () => {
  assert.throws(() => googleSlidesFaker("no_such_operation", fakeRequest("google_slides", "no_such_operation", {})), /no fake response/);
});
