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
 * The Google Slides faker.
 *
 * Shapes, not behaviour: the goal is that a downstream node sees the field
 * NAMES Google Slides actually publishes, so an author can wire {{
 * $json.data.id }} against a fake and have it keep working against the real
 * thing.
 *
 * Deterministic — same inputs, same output. A faker returning a fresh uuid
 * every call cannot be asserted on, so its fixtures degrade to "it did not
 * throw", which is the assertion that catches nothing.
 */

import type { ConnectorFaker, FakeRequest } from "@particle-academy/fancy-connector-core";

function fakePresentationCreate({ config, fake }: FakeRequest): unknown {
  return {
    "presentationId": fake.id("1Slide"),
    "title": (config.title !== undefined && config.title !== null && config.title !== "" ? String(config.title) : "Untitled presentation"),
  };
}

export const googleSlidesFaker: ConnectorFaker = (operation, request) => {
  switch (operation) {
    case "presentation_create":
      return fakePresentationCreate(request);

    default:
      // A faker asked for an operation it has no shape for must SAY so. Making
      // something up would produce a green run whose output silently has none
      // of the fields the author is about to reference.
      throw new Error(
        `google_slides: no fake response is defined for "${operation}". ` +
          "Add a fixture under provider/fixtures/ and regenerate — a connector without a faker " +
          "cannot be developed against, tested, or demonstrated.",
      );
  }
};
