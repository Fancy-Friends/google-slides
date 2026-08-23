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

test("presentation_create fakes the shape Google Slides publishes", () => {
  const config = {};

  const faked = googleSlidesFaker("presentation_create", fakeRequest("google_slides", "presentation_create", config));

  assert.deepEqual(faked, {
    "presentationId": "1Slide_fake_069dd03c2fdb",
    "title": "Untitled presentation"
  });
});

test("an operation with no fixture throws rather than inventing a shape", () => {
  assert.throws(() => googleSlidesFaker("no_such_operation", fakeRequest("google_slides", "no_such_operation", {})), /no fake response/);
});
