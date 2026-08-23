/**
 * GENERATED FILE — do not edit.
 *
 * Emitted from provider/actions/presentation-create.json by weaver's generator.
 * A hand-edit here is destroyed by the next protocol sync, which is worse than
 * being rejected, because it works until it silently does not. Fix
 * provider/actions/presentation-create.json (or weaver's template/) and regenerate:
 *
 *     npm run provider -- google_slides
 */

/**
 * Google Slides presentation — Create a blank Google Slides presentation.
 *
 * https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/create
 *
 * `unsafe-to-replay`.
 */

import type { NodeKindDefinition } from "@particle-academy/fancy-flow/engine";
import { defineConnectorKind, summarize, type OutputField } from "@particle-academy/fancy-flow/connectors";
import { googleSlidesMeta } from "../service.js";

export const GOOGLE_SLIDES_PRESENTATION_KIND = "@particle-academy/google_slides_presentation";
export const GOOGLE_SLIDES_PRESENTATION_OPERATION = "presentation_create";

export const GOOGLE_SLIDES_PRESENTATION_META = googleSlidesMeta("action", "create a blank presentation", "https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/create");

/**
 * What this node emits — the "ingredients" a downstream node can reference.
 *
 * fancy-flow reads `outputShape` off the kind and offers it in the variable
 * picker, so declaring it is the whole of the work: an author configuring the
 * next node picks `{{ $json.data.id }}` off a list instead of typing a path
 * and hoping.
 */
export const GOOGLE_SLIDES_PRESENTATION_OUTPUT: OutputField[] = [
  {
    "path": "data.presentationId",
    "type": "string",
    "description": "The id of the created presentation."
  },
  {
    "path": "data.title",
    "type": "string",
    "description": "The title Google stored."
  }
];

export const googleSlidesPresentationKind: NodeKindDefinition = defineConnectorKind(GOOGLE_SLIDES_PRESENTATION_META, {
  name: GOOGLE_SLIDES_PRESENTATION_KIND,
  aliases: ["google_slides_presentation"],
  label: "Google Slides presentation",
  description: "Create a blank Google Slides presentation.",
  inputs: [{ id: "in" }],
  outputs: [{ id: "out" }],
  sideEffects: "unsafe-to-replay",
  outputShape: GOOGLE_SLIDES_PRESENTATION_OUTPUT,
  configSchema: [
    {
      "type": "text",
      "key": "title",
      "label": "Title",
      "required": true,
      "description": "The title of the new blank presentation."
    }
  ],
  defaultConfig: {
    "mode": "auto"
  },
  renderBody: ({ config }) =>
    summarize(GOOGLE_SLIDES_PRESENTATION_META, config as Record<string, unknown>, "create a blank presentation"),
});
